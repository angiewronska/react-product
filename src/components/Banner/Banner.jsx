import { BannerWithImage, Headline, Image } from './Banner.styled'

export const Banner = ({alt, imageSrc, firstLine, secondLine}) => (
  <BannerWithImage>
    <Image src={imageSrc} alt={alt} />
    <Headline><span>{firstLine}</span> {secondLine}</Headline>
  </BannerWithImage>
)
export default Banner