import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Banner from './components/Banner/Banner';
import Image from './components/Image/Image';
import ProductTitle from './components/ProductTitle/ProductTitle';
import Slider from "react-slick";
import { ThemeProvider } from 'styled-components'
import { Wrapper } from './style'
import { theme } from './theme'

function App() {
  const settings = {
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const slides = [
    {
      imageSrc: '/hazelnut.jpg',
      productName: 'hazel dark',
      ingredient: 'hazelnut',
      emotion: 'pleasure',
    },
    {
      imageSrc: '/pistachio.jpg',
      productName: 'almchio',
      ingredient: 'roasted pistachio and almond',
      emotion: 'joy',
    },
    {
      imageSrc: '/rasberry.jpg',
      productName: 'ruby',
      ingredient: 'rasberry and ruby chocolate',
      emotion: 'thirll',
    },
    {
      imageSrc: '/strawberry.jpg',
      productName: 'milkshake',
      ingredient: 'strawberry',
      emotion: 'happiness',
    }

  ]
  
  return (
    <ThemeProvider theme={theme}>

    <section>
      <Banner />
      <Slider {...settings}>
        {slides.map (slide => 
          <div key={slide.productName}>
            <Wrapper flexDirectionMobile="row">
              <ProductTitle 
                name={slide.productName} 
                ingredient={slide.ingredient} 
                emotion={slide.emotion} 
              />
              <Wrapper widthMobile={'30%'} widthDesktop={'50%'}>
                <Image 
                  src={slide.imageSrc}
                  alt={`${slide.productName} bar with ${slide.ingredient}`} 
                />
              </Wrapper>
            </Wrapper>
          </div>
        )}
       
      </Slider>
      

    </section>
    </ThemeProvider>
  );
}

export default App;
