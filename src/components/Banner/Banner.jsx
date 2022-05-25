import { BannerWithImage, Button, Shape } from './Banner.styled'

import Image from '../Image/Image'

export const Banner = () => (
  <BannerWithImage>
    {/* <Button>show more...</Button> */}
    {/* <Image src="" alt="chocolate" /> */}
    <Shape 
      widthMobile="80px" 
      heightMobile="160px" 
      bgColor="#C3B0AC"
      zIndex="2"
      left="30%"
    />
    <Shape 
      widthMobile="120px" 
      heightMobile="220px" 
      bgColor="#987871"
      zIndex="0"
    />
  </BannerWithImage>
)
export default Banner