import { ThemeProvider } from 'styled-components';

import { ContextProvider } from './Context';
import Themes from './global/Themes';
import RoutesAplication from './routes';

function App() {
  return (
    <ThemeProvider theme={Themes}>
      <ContextProvider>
        <RoutesAplication/>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
