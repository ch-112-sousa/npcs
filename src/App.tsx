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
  

  function removerAcentos(texto: string): string {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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
    return removerAcentos(item.classe.toLowerCase()).startsWith(removerAcentos(texto.toLocaleLowerCase())) ||
      removerAcentos(item.raca.toLowerCase()).startsWith(removerAcentos(texto.toLocaleLowerCase())) || 
      removerAcentos(item.nome.toLowerCase()).startsWith(removerAcentos(texto.toLowerCase()));      
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
     
    <div className='container container-sm'>
      <div className='row'>
        <div className='col-sm-4'>
            <h1 className='display-5'>NPCs</h1>
            <SearchBar onSearch={handleSearch} />
        </div>
        </div>
        <div className='row'>
          <div className='col-sm-10'>

            <table className='table table-responsive'>            
            <thead>
              <tr  >
                <th className='col-sm-4' onClick={handleSortNpcClick}>NPC{nomeIsAsc ? '🔼' : '🔽'}</th>
                <th className='col-sm-3' onClick={handleSortClasseClick}>Classe {classeIsAsc ? '🔼' : '🔽'}</th>
                <th className='col-sm-3' onClick={handleSortRacaClick}>Raça {racaIsAsc ? '🔼' : '🔽'}</th>
              </tr>
            </thead>          
            <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((item, index) => (
                    <tr
                    key={index}
                    className={`${item?.id === selected?.id ? 'table-primary' : ''}`}
                    onClick={() => handleNpcClick(item.id)}
                    >
                      <td className="col-sm-4">{`${item.nome} ${item.sobrenome}`}</td>
                      <td className="col-sm-3">{item.classe}</td>
                      <td className="col-sm-3">{item.raca}</td>
                    </tr>
                  ))
                ) : (
                  <tr
                  key={0}
                  onClick={() => handleNpcClick(0)}
                  >
                    <td colSpan={3}>NPC não encontrado.</td>
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
      </div>
      <div className='row'>
        <div className='col-sm-10' >
          <NpcComponent  npc={selected} />
        </div>
      </div>    
    </div>    
  );
};

export default App;