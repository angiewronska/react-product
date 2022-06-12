import styled from 'styled-components'

export const Title = styled.h2`
  margin: 30px 0;
  color: ${({ theme }) => theme.color.liver};
  font-family: ${({ theme }) => theme.font.poppins};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 200;
  text-transform: uppercase;
  
  @media ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

`
export const Description = styled.p`
  font-family: ${({ theme }) => theme.font.cormorant};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.xiatic};
  font-style: italic;

  @media ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  span {
    font-weight: 600;
  }

`