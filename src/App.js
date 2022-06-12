import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import ProductInfo from './components/ProductInfo/ProductInfo';
import Quote from './components/Quote/Quote';
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Banner 
        alt="chocolate"
        imageSrc="/banner.svg"
        firstLine="The"
        secondLine="Choco Lab."
      />
      <About />
      <ProductInfo />
      <Quote text="As long as there is chocolate, there will be happiness." />
      <Footer 
        alt="chocolate"
        imageSrc="/banner.svg"
      />
    </ThemeProvider>
  );
}

export default App;
