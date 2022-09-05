export const size = { // --- Pixels
    mobileSPx: '350px',
    mobileMPx: '400px',
    mobileLPx: '550px',
    tabletSPx: '700px',
    tabletPx: '800px',
    laptopPx: '1024px',
    desktopPx: '1200px',
    desktopLPx: '1500px',
}

export const device = {
    // -- MAX-WIDTHS -- //
    mobileS: `(max-width: ${size.mobileSPx})`,
    mobileM: `(max-width: ${size.mobileMPx})`,
    mobileL: `(max-width: ${size.mobileLPx})`,
    tabletS: `(max-width: ${size.tabletSPx})`,
    tablet: `(max-width: ${size.tabletPx})`,
    laptop: `(max-width: ${size.laptopPx})`,
    laptopL: `(max-width: ${size.laptopLPx})`,
    desktop: `(max-width: ${size.desktopPx})`,
    desktopL: `(max-width: ${size.desktopLPx})`,

    // -- MIN-WIDTHS -- //
    xMobileL: `(min-width: ${size.mobileLPx})`,
    xDesktop: `(min-width: ${size.desktopPx})`,
    xDesktopL: `(min-width: ${size.desktopLPx})`,
};