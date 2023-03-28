import React, { useCallback, useRef } from 'react';

import { Button, createStyles } from '@mantine/core';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';

import {
  Clouds1,
  Clouds2,
  Foreground1,
  Foreground2,
  Grass,
  Lake,
  Mountains,
  Sky,
} from './mountains';
import { NameCard } from './NameCard';

export interface ParallaxBackgroundProps {
  children?: React.ReactNode;
}

const useStyles = createStyles(() => ({
  layer: {
    backgroundSize: 'cover !important',
    backgroundPosition: 'center',
    zIndex: -1,
  },

  bottom: {
    backgroundPosition: 'bottom',
  },

  bg: {
    backgroundColor: '#000a0e',
  },
}));

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  children,
}) => {
  const { classes, cx } = useStyles();
  const ref = useRef<IParallax | null>(null);
  const jumpTo = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(1);
    }
  }, [ref]);

  return (
    <Parallax
      pages={6}
      ref={ref}
      config={{ mass: 1, friction: 0, tension: 0 }}
      className={classes.bg}
    >
      <ParallaxLayer sticky={{ start: 0, end: 0.5 }}>
        <Button m="xs" onClick={jumpTo} color="night.8">
          Jump to content
        </Button>
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 0, end: 0 }}
        className={classes.layer}
        style={{ backgroundImage: `url(${Sky})` }}
      >
        <NameCard />
      </ParallaxLayer>
      <ParallaxLayer
        speed={-0.2}
        className={cx(classes.layer /* TODO: classes.cloudSlow*/)}
        style={{ backgroundImage: `url(${Clouds2})` }}
      />
      <ParallaxLayer
        speed={-0.1}
        className={cx(classes.layer /* TODO: classes.cloudFast */)}
        style={{ backgroundImage: `url(${Clouds1})` }}
      />
      <ParallaxLayer
        offset={-0.35}
        speed={-0.5}
        className={classes.layer}
        style={{ backgroundImage: `url(${Mountains})` }}
      />
      <ParallaxLayer
        speed={-0.4}
        className={classes.layer}
        style={{ backgroundImage: `url(${Grass})` }}
      />
      <ParallaxLayer
        speed={-0.3}
        className={classes.layer}
        style={{ backgroundImage: `url(${Lake})` }}
      />
      <ParallaxLayer
        speed={-0.2}
        className={classes.layer}
        style={{ backgroundImage: `url(${Foreground1})` }}
      />
      <ParallaxLayer
        className={cx(classes.layer, classes.bottom)}
        style={{ backgroundImage: `url(${Foreground2})` }}
      />
      {children}
    </Parallax>
  );
};
