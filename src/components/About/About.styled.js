import styled from 'styled-components'

export const Text = styled.p`
  width: 70%;
  margin-top: 60px;
  font-family:  ${({ theme }) => theme.font.poppins};
  font-size:  ${({ theme }) => theme.fontSize.xs};
  font-weight: 200;
  color:  ${({ theme }) => theme.color.beige};
  text-align: justify;
  opacity: 0.3;
  

  @media ${({ theme }) => theme.media.desktop} {
    font-size:  ${({ theme }) => theme.fontSize.m};
  }

`