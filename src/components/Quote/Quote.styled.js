import styled from 'styled-components'

export const Text = styled.p`
  position: relative;
  padding: 30px;
  font-family:  ${({ theme }) => theme.font.cormorant};
  font-size:  ${({ theme }) => theme.fontSize.xs};
  font-style: italic;
  font-weight: 500;
  color:  ${({ theme }) => theme.color.xicetic};
  text-align: center;
  

  @media ${({ theme }) => theme.media.desktop} {
    padding: 60px;
    font-size:  ${({ theme }) => theme.fontSize.xl};
  }

  &::before, &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 30px;
    height: 30px;

    @media ${({ theme }) => theme.media.desktop} {
      width: 60px;
      height: 60px;
    }
  }

  &::before {
    top: 0;
    background: url('/quote.png') no-repeat;
    background-size: contain;
  }

  &::after {
    bottom: 0;
    background: url('/bean.svg') no-repeat;
    background-size: contain;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`