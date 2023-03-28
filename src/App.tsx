import { ParallaxLayer } from '@react-spring/parallax';
import { ThemeProvider } from '@samuel-lewis/components';

import { Body } from './body';
import { ParallaxBackground } from './parallax';
import { Projects } from './projects/Projects';

export const App: React.FC = () => {
  return (
    <ThemeProvider
      themeOverride={{
        colorScheme: 'dark',
        colors: {
          night: [
            '#E5F0F6',
            '#B8D7E7',
            '#8BBDD8',
            '#559EC9',
            '#1E7EBA',
            '#026AA7',
            '#045A8B',
            '#034D72',
            '#013F58',
            '#001E29',
          ],
        },

        globalStyles: (theme) => ({
          a: {
            color: 'inherit',
            textDecorationColor: theme.fn.rgba(theme.colors.dark[1], 0.6),
            ':hover': {
              textDecorationColor: theme.colors.dark[1],
            },
          },
        }),
      }}
    >
      <ParallaxBackground>
        <ParallaxLayer offset={1}>
          <Body />
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} factor={10}>
          <Projects />
        </ParallaxLayer>
      </ParallaxBackground>
    </ThemeProvider>
  );
};
