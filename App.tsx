import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components'
import theme from './src/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Routes } from './src/Routes';
import { Loading } from '@components/Loading';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="black"
        translucent
      />
      {
        fontsLoaded ?
          <>
            <Header />
            <Routes />
            <Footer />
          </>
          :
          <Loading />
      }
    </ThemeProvider>
  );
}