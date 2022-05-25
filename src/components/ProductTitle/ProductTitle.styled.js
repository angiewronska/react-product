import styled from 'styled-components'

export const Title = styled.h2`
  padding: 30px;
  width: 70% ;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.poppins};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 200;
  
  @media ${({ theme }) => theme.media.desktop} {
    padding: 100px;
    width: 50% ;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  
  span {
    font-family: ${({ theme }) => theme.font.cormorant};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 500;
    font-style: italic;
    @media ${({ theme }) => theme.media.desktop} {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`