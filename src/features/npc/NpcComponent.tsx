import React from 'react';
import type { INpc } from '../../models/INpc';


type Props = {
  npc?: INpc
};

const NpcComponent: React.FC<Props> = ({npc}) => {
 
  if (!npc) return <div>Selecione um NPC</div>;
  
  return (
    <div>
      <h6><b>{npc.nome} {npc.sobrenome}</b>, {npc.raca} - {npc.classe}</h6>
      
    </div>
  );
};
 

export default NpcComponent;