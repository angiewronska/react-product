import styled from 'styled-components'

export const Info = styled.span`
  position: absolute;
  right: 30px;
  top: 0;
  font-family:  ${({ theme }) => theme.font.poppins};
  font-size:  ${({ theme }) => theme.fontSize.s};
  font-weight: 200;
  color:  ${({ theme }) => theme.color.xicetic};
  text-align: right;

  @media ${({ theme }) => theme.media.desktop} {
    padding: 60px;
    font-size:  ${({ theme }) => theme.fontSize.xl};
  }
`