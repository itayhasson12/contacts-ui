import { useEffect } from 'react';
import { environment } from './globals';
import Bowser from 'bowser';
import CssBaseline from '@mui/material/CssBaseline';
import { toast } from 'react-toastify';
import i18next from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { AuthService } from './services/authService';
import { setUser } from './store/reducers/user';
import { Outlet, redirect, useNavigate } from 'react-router-dom';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { basicTheme } from './theme';
import { hebrew } from './i18n/hebrew';
import { initReactI18next } from 'react-i18next';
import ChatBot from './layout/ChatBot';
import TopBar from './layout/TopBar';
import { HeroSection } from './layout/HeroSection';
import { setSearchTerm } from './store/reducers/search';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const resources = {
      he: {
        translation: hebrew,
      },
    };
    void i18next.use(initReactI18next).init({
      resources,
      lng: 'he',
      interpolation: {
        escapeValue: false,
      },
    });

    const browser = Bowser.getParser(window.navigator.userAgent);
    const isValidBrowser = browser.satisfies({
      chrome: `>=${environment.minimumSupportedChromeVersion}`,
    });

    if (!isValidBrowser)
      toast.error(i18next.t('error.unsupportedChromeVersion'), { autoClose: false, theme: 'colored' });
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const user = await AuthService.getUser();
      if (user) dispatch(setUser(user));
    };

    void getUser();
  }, [dispatch]);

  const currentUser = useSelector((state: RootState) => state.user);
  if (!currentUser) redirect(`/unauthorized`);

  const theme = { ...basicTheme };
  const lightTheme = createTheme({ ...theme });

  useEffect(() => {
    let inactivityTimeout;

    // Function to start the inactivity timer
    const startInactivityTimer = () => {
      inactivityTimeout = setTimeout(() => {
        console.log('Inactivity timeout triggered');
        dispatch(setSearchTerm(''));
        navigate('/');
      }, environment.resetTimeout);
    };

    const resetTimeout = () => {
      console.log('User activity detected, resetting timeout');
      clearTimeout(inactivityTimeout);
      startInactivityTimer();
    };

    // Start the timer initially
    startInactivityTimer();

    // Attach event listeners for user activity using `environment.resetTimeoutActions`
    environment.resetTimeoutActions.forEach((action) => window.addEventListener(action, resetTimeout));

    // Cleanup function
    return () => {
      clearTimeout(inactivityTimeout);
      environment.resetTimeoutActions.forEach((action) => window.removeEventListener(action, resetTimeout));
    };
  }, [dispatch, navigate]);
  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        sx={{
          display: 'flex',
          width: '100vw',
          height: '100vh',
          background: 'white',
          overflow: 'hidden',
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            paddingRight: 3,
            paddingLeft: 3,
            paddingTop: 1,
          }}
        >
          <TopBar />
          <HeroSection />
          <Outlet />
        </Box>
      </Box>
      <ChatBot />
    </ThemeProvider>
  );
};

export default App;
