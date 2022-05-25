import styled from 'styled-components'

export const BannerWithImage = styled.div`
  position: relative;
  padding: 30px;
  display: flex;
  justify-content: center;
  
  @media ${({ theme }) => theme.media.desktop} {
    padding: 100px;
  }
`

export const Shape = styled.div`
  width: ${({ widthMobile }) => widthMobile};
  height: ${({ heightMobile }) => heightMobile};
  background-color: ${({ bgColor }) => bgColor};
  z-index: ${({ zIndex }) => zIndex};
  border-radius: 300px;
  position: ${({ zIndex }) => zIndex > 0 ? 'absolute': 'relative'};
  top: ${({ zIndex }) => zIndex > 0 && '50%'};
  left: ${({ zIndex,left }) => zIndex > 0 && left};
  display: flex;

`

export const Button = styled.button`
  padding: 10px 40px;
  border-radius: 30px;
  border: none;
  font-family: ${({ theme }) => theme.font.cormorant};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 500;
  font-style: italic;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.xicetic};
  transition: .4s all linear;
  &:hover {
  background-color: ${({ theme }) => theme.color.burnishedBrown};
  transform: translateY(-5px);

  }
`