import { Headline, Image } from './Banner.styled'

import { Wrapper } from '../../style'

export const Banner = ({alt, imageSrc, firstLine, secondLine}) => (
  <Wrapper
    positionMobile="relative"
    paddingMobile="30px 30px 60px"
    paddingDesktop="60px"
    displayMobile="flex"
    widthMobile="100%"
    heightDesktop="100vh"
  >
    <Image src={imageSrc} alt={alt} />
    <Headline><span>{firstLine}</span> {secondLine}</Headline>
  </Wrapper>
)
export default Banner