export const breakpoints = {
  desktop: 1200,
  tablet: 768,
}

/**
 * @param breakpoint - {number} of pixels
 * @param extremum - {'min' || 'max'}
 * @returns {string}
 */
const generateMediaQuery = (breakpoint, extremum = 'min') =>
  `screen and (${extremum}-width: ${breakpoint}px)`

export const theme = {
  color: {
  beige: '#F9F2F1',
  burnishedBrown: '#987871',
  liver: '#6C534E',
  xicetic: '#1C0D0D',
  white: '#FFFFFF',
  },

  font: {
    poppins: 'Poppins',
    cormorant: 'Cormorant Infant',
  },
  fontSize: {
    xxs: '1.6rem',
    xs: '2rem',
    s: '2.6rem',
    m: '3.2rem',
    l: '4.6rem',
    xl: '5.2rem',
    xxl: '12rem',
  },
  media: {
    tablet: generateMediaQuery(breakpoints.tablet),
    desktop: generateMediaQuery(breakpoints.desktop),
  },
}
