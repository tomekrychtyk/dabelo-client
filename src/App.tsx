import { useRoutes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { themeCreator } from './theme/theme';
import router from './router';

function App() {
  const content = useRoutes(router);

  return (
    <ThemeProvider theme={themeCreator('defaultTheme')}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        {content}
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
