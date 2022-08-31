import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { ThemeProvider } from './theme';
import { layerConfig } from './assets/parallax/game_background_1';
import { Center, Stack, Title, Text, Anchor } from '@mantine/core';
import { useCallback, useRef } from 'react';
import { Body } from './body';

function App() {
  const ref = useRef<IParallax | null>(null);
  const jumpTo = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(1);
    }
  }, [ref]);

  const sceneLayers = layerConfig.map((layer, i) => (
    <ParallaxLayer
      key={layer}
      speed={i * 0.1}
      offset={0}
      factor={1}
      style={{
        backgroundImage: `url(${layer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  ));

  const title = (
    <ParallaxLayer factor={1} offset={0} key="title">
      <Center sx={{ height: '70%' }}>
        <Stack align="center" spacing={0}>
          <Title color="blue.9">Samuel Lewis</Title>
          <Text color="blue.9">Software Engineer</Text>
        </Stack>
      </Center>
    </ParallaxLayer>
  );
  sceneLayers.splice(4, 0, title);

  return (
    <ThemeProvider>
      <Parallax
        pages={2}
        ref={ref}
        config={{ mass: 1, tension: 300, friction: 40 }}
      >
        <ParallaxLayer sticky={{ start: 0, end: 0.5 }}>
          <Anchor
            p="md"
            component="button"
            type="button"
            onClick={jumpTo}
            size="xs"
            color="blue"
          >
            Jump to content
          </Anchor>
        </ParallaxLayer>
        {sceneLayers}
        <ParallaxLayer offset={1}>
          <Body />
        </ParallaxLayer>
      </Parallax>
    </ThemeProvider>
  );
}

export default App;
