import styled from 'styled-components'

export const Wrapper = styled.div`
    position: ${({ positionMobile }) => positionMobile};
    top: ${({ topMobile }) => topMobile};
    left: ${({ leftMobile }) => leftMobile};
    right: ${({ rightMobile }) => rightMobile};
    z-index: ${({ zIndexMobile }) => zIndexMobile};
    margin: ${({ marginMobile }) => marginMobile};
    padding: ${({ paddingMobile }) => paddingMobile};
    width: ${({ widthMobile }) => widthMobile};
    max-width: ${({ maxWidthMobile }) => maxWidthMobile};
    height: ${({ heightMobile }) => heightMobile};
    display: ${({ displayMobile }) => displayMobile};
    flex-direction: ${({ flexDirectionMobile }) => flexDirectionMobile};
    flex-wrap: ${({ flexWrapMobile }) => flexWrapMobile};
    justify-content: ${({ justifyContentMobile }) => justifyContentMobile};
    overflow: ${({ overflowMobile }) => overflowMobile};
    overflow-y: ${({ overflowYMobile }) => overflowYMobile};
    align-items: ${({ alignItemsMobile }) => alignItemsMobile};
    white-space: ${({ whiteSpaceMobile }) => whiteSpaceMobile};
    background: ${({ backgroundMobile }) => backgroundMobile};

  @media ${({ theme }) => theme.media.desktop} {
    position: ${({ positionDesktop }) => positionDesktop};
    top: ${({ topDesktop }) => topDesktop};
    left: ${({ leftDesktop }) => leftDesktop};
    right: ${({ rightDesktop }) => rightDesktop};
    z-index: ${({ zIndexDesktop }) => zIndexDesktop};
    margin: ${({ marginDesktop }) => marginDesktop};
    padding: ${({ paddingDesktop }) => paddingDesktop};
    width: ${({ widthDesktop }) => widthDesktop};
    max-width: ${({ maxWidthDesktop }) => maxWidthDesktop};
    height: ${({ heightDesktop }) => heightDesktop};
    display: ${({ displayDesktop }) => displayDesktop};
    flex-direction: ${({ flexDirectionDesktop }) => flexDirectionDesktop};
    flex-wrap: ${({ flexWrapDesktop }) => flexWrapDesktop};
    justify-content: ${({ justifyContentDesktop }) => justifyContentDesktop};
    overflow: ${({ overflowDesktop }) => overflowDesktop};
    overflow-y: ${({ OverflowYDesktop }) => OverflowYDesktop};
    align-items: ${({ alignItemsDesktop }) => alignItemsDesktop};
    white-space: ${({ whiteSpaceDesktop }) => whiteSpaceDesktop};
    background: ${({ backgroundDesktop }) => backgroundDesktop};
}
`
export const Image = styled.img`
  width: ${({ widthMobile }) => widthMobile ? widthMobile : '100%' };
  position: ${({ positionMobile }) => positionMobile ? positionMobile : 'relative'};
  display: ${({ displayMobile }) => displayMobile ? displayMobile : 'flex'};
  align-self: flex-start;
  margin: ${({ marginMobile }) => marginMobile};
  transform: ${({ transformMobile }) => transformMobile};
 
  @media ${({ theme }) => theme.media.desktop} {
    margin: ${({ marginDesktop }) => marginDesktop};
    width: ${({ widthDesktop }) => widthDesktop};
    transform: ${({ transformDesktop }) => transformDesktop};
  }
`
