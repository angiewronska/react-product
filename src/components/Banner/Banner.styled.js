import styled, { keyframes } from 'styled-components'

const fadeUpMobile = keyframes`
  from {
    opacity: 0;
    bottom: 0px;
  }

  to {
    opacity: 1;
    bottom: 30px;
  }
`;

const fadeUpDesktop = keyframes`
  from {
    opacity: 0;
    bottom: 0px;
  }

  to {
    opacity: 1;
    bottom: 60px;
  }
`;

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
  animation: ${fadeUpMobile} 2s linear 2s backwards;
  
  @media ${({ theme }) => theme.media.desktop} {
    left: 60px;
    bottom: 60px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    animation: ${fadeUpDesktop} 2s linear 2s backwards;
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