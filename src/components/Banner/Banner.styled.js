import styled from 'styled-components'

export const Image = styled.img`
  width: 100%;
  position: relative;
  display: flex;
  align-self: flex-start;
`

export const Headline = styled.h1`
  position: absolute;
  left: 30px;
  bottom: 30px;
  width: 40%;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: ${({ theme }) => theme.font.poppins};
  color: ${({ theme }) => theme.color.xiatic};
  text-transform: uppercase;
  line-height: 1;
  font-weight:600;
  
  @media ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    left: 60px;
    bottom: 60px;
  }
  
  span {
    display: block;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-family: ${({ theme }) => theme.font.poppins};

    @media ${({ theme }) => theme.media.desktop} {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`