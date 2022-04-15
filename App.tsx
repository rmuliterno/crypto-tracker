import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
import Navigation from './src/navigation';

import {StateProvider} from './src/contexts/state';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StateProvider>
        <Navigation />
      </StateProvider>
    </ThemeProvider>
  );
};

export default App;
