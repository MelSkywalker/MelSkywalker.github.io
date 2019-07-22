const size = {
    desktop: '1281px',
    laptop: '1025px',
    tablet: '768px',
    mobileL: '481px',
    mobileM: '320px'
};

export const device = {
    desktop: `(min-width: ${size.desktop})`,
    tablet: `(min-width: ${size.tablet})`,
    mobileL: `(min-width: ${size.mobileL})`,
    mobileM: `(min-width: ${size.mobileM})`,
};