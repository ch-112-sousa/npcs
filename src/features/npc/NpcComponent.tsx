import React from 'react';
import type { INpc } from '../../models/INpc';


type Props = {
  npc?: INpc
};

const NpcComponent: React.FC<Props> = ({npc}) => {
 
  if (!npc) return <div>Selecione um NPC</div>;
  
  return (
    <div>
      <h5><b>{npc.nome} {npc.sobrenome}</b>, {npc.raca} - {npc.classe}</h5>
      <div className='row'>
        <em>{npc.alinhamento}</em>

      
        <div className='col-sm-5' style={{verticalAlign: "top"}}>
           
            <table className='table table-primary'>
              <thead>
              <tr>
                  <th>FOR</th>
                  <th>DES</th>
                  <th>CON</th>
                  <th>INT</th>
                  <th>SAB</th>
                  <th>CAR</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>{npc.for}</td>
                  <td>{npc.des}</td>
                  <td>{npc.con}</td>
                  <td>{npc.int}</td>
                  <td>{npc.sab}</td>
                  <td>{npc.car}</td>
              </tr>
              </tbody>
            </table>
            <p>
              <b>Perícias:</b><br/>
              {npc.pericias}</p>

            <p>
              <b>Equipamentos:</b><br/>
              {npc.armadura}<br/>
              {npc.escudo}<br/>
              {npc.armas}
            </p>

        </div>
          <div className='col-sm-7'>
              <p><b>CA: </b>{npc.CA}  <b>PVs: </b>{npc.PVs}</p>
               <p>
                <b>Linguas:</b> <em>{npc.linguas}</em>
              </p>
            
              <p><b>{npc.antecedente}</b><br/>
              <b>TP: </b>{npc.TP}<br/>
              <b>I:  </b>{npc.I}<br/>
              <b>V:  </b>{npc.V}<br/>
              <b>D:  </b>{npc.D}</p>
        </div>
      </div>
    </div>
  );
};
 

export default NpcComponent;