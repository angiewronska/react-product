import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ flexDirectionMobile }) => flexDirectionMobile ? flexDirectionMobile : 'column'};
  overflow: hidden;
  width: ${({ widthMobile }) => widthMobile ? widthMobile : '100%'};

  @media ${({ theme }) => theme.media.desktop} {
    flex-direction: ${({ flexDirectionDesktop }) => flexDirectionDesktop ? flexDirectionDesktop : 'row'};
    width: ${({ widthDesktop }) => widthDesktop ? widthDesktop : '100%'};
  }

  &:hover {
    span {
      color: ${({ theme }) => theme.color.beige};
    }
  }
`