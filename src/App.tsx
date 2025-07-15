import './App.css'
import React from 'react';
import npcs from './json/npcs.json';
import SearchBar from './features/searchbar/SearchBar';
import NpcComponent from './features/npc/NpcComponent';
import type { INpc } from './models/INpc';


 

const App: React.FC = () => {

  const [selected, setSelected]= React.useState<INpc>();
  const [resultado, setResultado] = React.useState<INpc[]>([]);
  const handleSearch = (texto: string) => {
    const filtrado: INpc[] = npcs.NPCs.filter((item) => 
    {
      const nomeCompleto:string = `${item.nome} ${item.sobrenome}`;
      return nomeCompleto.toLocaleLowerCase().includes(texto.toLocaleLowerCase());
    });

    setResultado(filtrado);
  };

  const handleNpcClick = (id:number) => {   
    console.log(resultado);
    
    const encontrado = resultado.find((x)=> x.id === id);
    setSelected(encontrado);
    console.log(encontrado);
  };

  return (
     
    <div className='container-sm'>

      <h1 className='display-5'>NPCs</h1>
      <div className='row'>
        <div className='col-sm-4'>
          <SearchBar onSearch={handleSearch} />
          <br/>
          <ul className='list-unstyled list-group-item'>
          {resultado.map((item, index) => (
          <li key={index}>
            <button 
                className='btn btn-primary form-control'
                style={{ marginBottom: '10px' }}
                onClick={() => handleNpcClick(item.id)}
              >
              {`${item.nome} ${item.sobrenome}`}
            </button>
          </li>
          ))}
          </ul>
        </div>
        <div className='col-sm-6 alert alert-dark'>
          <NpcComponent  npc={selected} />
        </div>
      </div>
    </div>
    
  );
};

export default App;