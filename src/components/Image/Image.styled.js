import styled from 'styled-components'

export const Img = styled.img`
  margin-right: -120px;
  border-radius: 300px;
  width: 200px;

  @media ${({ theme }) => theme.media.desktop} {
    margin-right: 0px;
    width: 340px;
  }

`