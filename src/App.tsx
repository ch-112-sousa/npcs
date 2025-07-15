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
    const encontrado = resultado.find((x)=> x.id === id);
    setSelected(encontrado);
  };

  return (
     
    <div className='container-sm'>

      <h1 className='display-5'>NPCs</h1>
      <div className='row'>
        <div className='col-sm-3'>
          <SearchBar onSearch={handleSearch} />
          <ul>
          {resultado.map((item, index) => (
          <li key={index}>
            <button 
                className='btn btn-primary'
                onClick={() => handleNpcClick(item.id)}
              >
              {`${item.nome} ${item.sobrenome}`}
            </button>
          </li>
          ))}
          </ul>
        </div>
        <div className='col-sm-9'>
          <NpcComponent  npc={selected} />
        </div>
      </div>
    </div>
    
  );
};

export default App;