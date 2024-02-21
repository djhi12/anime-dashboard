import Card from '@/app/dashboard/card/card';
import Image from 'next/image';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'customers',
};

export default function Page() {
    return (
      <div>
      <h1>Hashiras</h1>
      <div className="card-container">
        <Card
          title="Kyojuro Renggoku"
          image="../kyojuro.webp"
          description="As a Hashira of the Demon Slayer Corps, Kyojuro was a very powerful and skilled combatant. Before he took his father's place, Kyojuro was already shown to be an amazing fighter. He successfully avenged the death of the 9 Demon Slayers that died to the Flute Demon by himself and later managed to singlehandedly defeat Lower Rank Two, Hairo, who even appraised his swordsmanship before he died. Moreover, his father, Shinjuro Rengoku, stated that, after he stopped teaching his son, Kyojuro trained himself to become a Hashira by learning from the guide book of the Flame Breathing style, a book which only had three volumes."
        />
        <Card
          title="Card Title 2"
          image="/path/to/image2.jpg"
          description="Description of card 2"
        />
        {/* Add more cards as needed */}
      </div>
    </div>
      );
    }
    