import './App.css'
import React from 'react';
import npcs from './json/npcs.json';
import SearchBar from './features/searchbar/SearchBar';
import NpcComponent from './features/npc/NpcComponent';
import type { INpc } from './models/INpc';
import Paginate from './features/paginate/Paginate';


const App: React.FC = () => {

  const [nomeIsAsc, setNomeIsAsc] = React.useState<boolean>(true);
  const [classeIsAsc, setClasseIsAsc] = React.useState<boolean>(true);
  const [racaIsAsc, setRacaIsAsc] = React.useState<boolean>(true);

  const orderByNome = () => {
  const nextNomeIsAsc = !nomeIsAsc;

  const sorted = [...resultado].sort((a, b) => {
    const nomeCompare = nextNomeIsAsc
      ? a.nome.localeCompare(b.nome)
      : b.nome.localeCompare(a.nome);

    
      return nomeCompare;    
  });

  setResultado(sorted);
  setNomeIsAsc(nextNomeIsAsc);
};

  const orderByClasse = () => {
        const nextClasseIsAsc = !classeIsAsc;

        const sorted = [...resultado].sort((a, b) => {
         
         const classeCompare = nextClasseIsAsc
            ? a.classe.localeCompare(b.classe)
            : b.classe.localeCompare(a.classe);

         
            return classeCompare;         
        });

        setResultado(sorted);
        setClasseIsAsc(nextClasseIsAsc);
  }

   const orderByRaca = () => {
        const nextRacaIsAsc = !racaIsAsc;

        const sorted = [...resultado].sort((a, b) => {
         
         const racaCompare = nextRacaIsAsc
            ? a.raca.localeCompare(b.raca)
            : b.raca.localeCompare(a.raca);

            return racaCompare;
        });

        setResultado(sorted);
        setRacaIsAsc(nextRacaIsAsc);
  }
  
  const [resultado, setResultado] = React.useState<INpc[]>(npcs.NPCs);

  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = resultado.slice(indexOfFirstItem, indexOfLastItem);

  const [selected, setSelected]= React.useState<INpc>();
  const handleSearch = (texto: string) => {    
    const filtrado: INpc[] = npcs.NPCs.filter((item) => 
    { 
    return item.classe.toLowerCase().startsWith(texto) ||
      item.raca.toLowerCase().startsWith(texto) || 
      item.nome.toLowerCase().startsWith(texto) ||
      item.sobrenome.toLowerCase().startsWith(texto);
    })

    setResultado(filtrado);
  };

  const handleSortNpcClick = () =>{
    orderByNome();
  }

  const handleSortClasseClick = () =>{
    orderByClasse();
  }

  const handleSortRacaClick = () =>{
    orderByRaca();
  }
 
  const handleNpcClick = (id:number) => {   
    const encontrado = resultado.find((x)=> x.id === id);
    setSelected(encontrado);
  };

  return (
     
    <div className='container-sm'>

      <h1 className='display-5'>NPCs</h1>
      <div className='row'>
        <div className='col-sm-4'>
          <SearchBar onSearch={handleSearch} />
        </div>
        
        <div className='col-sm-12'>
          <table className='table table-responsive'>
            
            <thead>
              <tr className='row'>
                <th className='col-sm-4' onClick={handleSortNpcClick}>NPC{nomeIsAsc ? '🔼' : '🔽'}</th>
                <th className='col-sm-4' onClick={handleSortClasseClick}>Classe {classeIsAsc ? '🔼' : '🔽'}</th>
                <th className='col-sm-4' onClick={handleSortRacaClick}>Raça {racaIsAsc ? '🔼' : '🔽'}</th>
              </tr>
            </thead>          
            <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((item, index) => (
                    <tr
                      key={index}
                      className={`row ${item?.id === selected?.id ? 'table-primary' : ''}`}
                      onClick={() => handleNpcClick(item.id)}
                    >
                      <td className="col-sm-4">{`${item.nome} ${item.sobrenome}`}</td>
                      <td className="col-sm-4">{item.classe}</td>
                      <td className="col-sm-4">{item.raca}</td>
                    </tr>
                  ))
                ) : (
                  <tr
                      key={0}
                      onClick={() => handleNpcClick(0)}
                    >
                    <td colSpan={2}>NPC não encontrado.</td>
                  </tr>
                )}
              </tbody>

            </table>
            
            <Paginate
              currentPage={currentPage}
              totalPages={Math.ceil(resultado.length / itemsPerPage)}
              onPageChange={(page) => setCurrentPage(page)}
            />
             
      </div>
 
        <div className='col-sm-12 alert alert-primary'>
          <NpcComponent  npc={selected} />
          
        </div>
      </div>
    </div>
    
  );
};

export default App;