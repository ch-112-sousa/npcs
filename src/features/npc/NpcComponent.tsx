import React from 'react';
import type { INpc } from '../../models/INpc';


type Props = {
  npc?: INpc
};

const NpcComponent: React.FC<Props> = ({npc}) => {

  if (!npc) return <div>Selecione um NPC</div>;
  
  return 
  (
 
        <section className="accordion">
          <nav className='accordion-item'>
            {npc?.nome} {npc?.sobrenome}, {npc?.raca} - {npc?.classe}
          </nav>
          <p className="alinhamento">
                  
          </p>
          <p className="linguas">
            
          </p>
      </section>
  );
};

export default NpcComponent;