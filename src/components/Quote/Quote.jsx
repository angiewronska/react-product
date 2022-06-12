import { Image, Text } from './Quote.styled'

import { Wrapper } from '../../style'

export const Quote = ({text}) => (
  <Wrapper
    positionMobile="relative"
    marginMobile="0 0 90px"
    marginDesktop="0"
    paddingMobile="0 30px"
    paddingDesktop="0 60px"
    displayMobile="flex"
    flexDirectionDesktop="row"
  >

    <Wrapper
      positionMobile="absolute"
      positionDesktop="relative"
      rightMobile="60px"
      rightDesktop="0"
      topMobile="60px"
      topDesktop="0"
      zIndexMobile="1"
      widthMobile="calc(100% - 120px)"
      widthDesktop="50%"
      displayMobile="flex"
      alignItemsMobile="center"
      justifyContentMobile="center"
      paddingMobile="30px 0"
      paddingDesktop="120px 0"
      backgroundMobile="#C3B0AC"
    >
      <Text>
        {text}
      </Text>
    </Wrapper>
    <Wrapper
      positionMobile="relative"
      widthMobile="100%"
      widthDesktop="50%"
      zIndexMobile="0"
    >
      <Image src="/choco-swirl.jpg" alt="swirl" />
    </Wrapper> 
  </Wrapper>
)
export default Quote