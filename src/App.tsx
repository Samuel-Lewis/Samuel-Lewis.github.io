import { ThemeProvider } from '@samuel-lewis/components';

import { Body } from './body';
import { ParallaxBackground } from './parallax';

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
      }}
    >
      <ParallaxBackground>
        <Body />
      </ParallaxBackground>
    </ThemeProvider>
  );
};
