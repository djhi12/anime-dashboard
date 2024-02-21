import Card from '@/app/dashboard/card/card';
import Image from 'next/image';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'customers',
};

export default function Page() {
    return (
      <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        <Card
          title="Kyojuro Rengoku"
          image="/customers/kyojuro.png"
            description="As a Hashira of the Demon Slayer Corps, Kyojuro was a very powerful and skilled combatant. Before he took his father's place, Kyojuro was already shown to be an amazing fighter. He successfully avenged the death of the 9 Demon Slayers that died to the Flute Demon by himself and later managed to singlehandedly defeat Lower Rank Two, Hairo, who even appraised his swordsmanship before he died. Moreover, his father, Shinjuro Rengoku, stated that, after he stopped teaching his son, Kyojuro trained himself to become a Hashira by learning from the guide book of the Flame Breathing style, a book which only had three volumes."
            width={200}
            height={300}
        />
         <Card
          title="Giyu Tomioka"
          image="/customers/giyu.png"
            description="As a Hashira of the Demon Slayer Corps, Giyu is a very powerful and skilled combatant. From the beginning, Giyu showed how much he outclassed Tanjiro and his friends, being able to effortlessly capture Nezuko from him and later knocked both of them unconscious in a single blow. Later, he was able to easily defeat Father in his transformed state and Rui, Lower Rank Five,[18] something Tanjiro and Inosuke respectively failed to accomplish. He also fought equally against fellow Hashira Sanemi Shinazugawa in a sparring match. Giyu was also shown easily beating dozens of demons equal to that of the Lower Ranks of the Twelve Kizuki. On top of his incredible skills as a Demon Slayer, Giyu is also a very capable teammate, able to grasp their intentions and work in tandem with it."
            width={200}
            height={300}
          />
          <Card
          title="Shinobu Kocho"
          
          image="/customers/shinobu.png"
            description="As a Hashira of the Demon Slayer Corps, Shinobu is a very powerful and skilled combatant. Despite not possessing the physical strength to cut off a demon's head common to that of an average Demon Slayer, Shinobu uses her creativity, ingenuity and other physical abilities to more than make up for it. Instead of the traditional method of decapitating a demon with a Nichirin Sword to kill them, Shinobu opts to use a modified version of a katana that acts as a stinger to inject a powerful wisteria-based poison that is lethal to demons. In addition to her intellect, she is extremely fast and agile, allowing her to overpower demons very quickly."
            width={200}
            height={300}
        />
      </div>
    </div>
      );
    }
    