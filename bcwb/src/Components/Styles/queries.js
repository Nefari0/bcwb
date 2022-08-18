const size = {
    mobileS: '320px',
    mobileM: '400px',
    mobileL: '550px',
    tabletS: '700px',
    tablet: '800px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    // -- MAX-WIDTHS -- //
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,

    // -- MIN-WIDTHS -- //
    xTablet: `(min-width: ${size.tablet})`,
};