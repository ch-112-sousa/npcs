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
        <b>{npc.antecedente}</b>
        <div className='col-sm-7'>
          <p><b>TP: </b>{npc.TP}</p>
          <p><b>I:  </b>{npc.I}</p>
          <p><b>V:  </b>{npc.V}</p>
          <p><b>D:  </b>{npc.D}</p>
        </div>
        <div className='col-sm-5' style={{verticalAlign: "top"}}>
            <p>
              <b>Linguas:</b> <em>{npc.linguas}</em>
            </p>

            <p><b>CA: </b>{npc.CA}</p>
            <p><b>PVs: </b>{npc.PVs}</p>
            <table className='table table-active'>
              <tr>
                  <th>FOR</th>
                  <th>DES</th>
                  <th>CON</th>
                  <th>INT</th>
                  <th>SAB</th>
                  <th>CAR</th>
              </tr>
              <tr>
                  <td>{npc.for}</td>
                  <td>{npc.des}</td>
                  <td>{npc.con}</td>
                  <td>{npc.int}</td>
                  <td>{npc.sab}</td>
                  <td>{npc.car}</td>
              </tr>
            </table>
            <p>{npc.pericias}</p>
            <b>Equipamentos:</b>
            <p>{npc.armadura}</p>
            <p>{npc.escudo}</p>
            <p>{npc.armas}</p>

        </div>
      </div>
    </div>
  );
};
 

export default NpcComponent;