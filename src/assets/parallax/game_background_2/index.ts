import Clouds1 from './clouds_1.png';
import Clouds2 from './clouds_2.png';
import Clouds3 from './clouds_3.png';
import Birds from './birds.png';
import Rocks1 from './rocks_1.png';
import Rocks2 from './rocks_2.png';
import Rocks3 from './rocks_3.png';
import Pines from './pines.png';
import Sky from './sky.png';

export const layerConfig = [
  { src: Sky, speed: 0 },
  { src: Clouds1, speed: -0.25 },
  { src: Clouds2, speed: 0.25 },
  { src: Clouds3, speed: 2 },
  { src: Rocks3, speed: 1.0 },
  { src: Rocks2, speed: 1.0 },
  { src: Rocks1, speed: 0.25 },
  { src: Pines, speed: 1.0 },
  { src: Birds, speed: 2.5 },
];
