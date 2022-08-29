import Clouds1 from './clouds_1.png';
import Clouds2 from './clouds_2.png';
import Clouds3 from './clouds_3.png';
import Clouds4 from './clouds_4.png';
import Rocks1 from './rocks_1_t.png';
import Rocks2 from './rocks_2_t.png';
import Sky from './sky_t.png';

export const layerConfig = [
  { src: Sky, speed: 0 },
  { src: Clouds1, speed: -0.25 },
  { src: Clouds2, speed: 0.25 },
  { src: Rocks1, speed: 0.25 },
  { src: Rocks2, speed: 1.0 },
  { src: Clouds3, speed: 2 },
  { src: Clouds4, speed: 2.5 },
];
