import { Image, Wrapper } from '../../style'

import { Info } from './Footer.styled'

export const Footer = ({imageSrc, alt}) => (
  <footer>
    <Wrapper
      positionMobile="relative"
      paddingMobile="30px"
      paddingDesktop="60px"
      displayMobile="flex"
      widthMobile="100%"
      heightDesktop="100vh"
    >
      <Info>
        more chocolate? <br />
        hello@choco.lab
      </Info>
      <Image src={imageSrc} alt={alt} transformMobile="rotate(-180deg)"/>
    </Wrapper>
  </footer>
)
export default Footer