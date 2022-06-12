import { Description, Title } from './ProductInfo.styled'
import { Image, Wrapper } from "../../style";

import Slider from "react-slick";

export const ProductInfo = () => {
  const settings = {
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: false,
    arrows: false,
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
      <Slider {...settings}>
        {slides.map (slide => 
          <div key={slide.productName}>
            <Wrapper
              positionMobile="relative"
              widthMobile="80%"
              widthDesktop="80%"
              marginMobile="60px 0"
              marginDesktop="90px 0"
              paddingMobile="30px"
              paddingDesktop="60px"
              displayMobile="flex"
              flexDirectionMobile="row"
              flexDirectionDesktop="row"
              backgroundMobile="#F9F2F1"
            >
                <Image 
                  src={slide.imageSrc}
                  alt={`${slide.productName} bar with ${slide.ingredient}`} 
                  marginMobile="-60px 0 0 -180px"
                  marginDesktop="-90px 0 0"
                  widthMobile="90%"
                  widthDesktop="30%"
                />
              <Wrapper 
              paddingMobile="0 0 0 30px"
              paddingDesktop="0 0 0 60px"
              widthDesktop="60%"
              >
              <Title>
                {slide.productName} 
              </Title>
              <Description>
                This chocolate bar is created with the best quality <span>{slide.ingredient}</span>.
                We introduced a chocolate bar made from UTZ Certified cocoa. 
               Each bar is handcrafted for your <span>{slide.emotion}</span> by our chocolatiers!
              </Description>
              </Wrapper>
            </Wrapper>

          </div>
        )}
      
      </Slider>

  )
}
export default ProductInfo