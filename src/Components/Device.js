// const size = {
//     desktop: '1281px',
//     laptop: '1025px',
//     tablet: '768px',
//     mobileL: '481px',
//     mobileM: '320px'
// };
const MinSize = {
    desktop: '1440px',
    laptop: '1024px',
    tablet: '768px',
};

const MaxSize = {
    laptop: '1439px',
    tablet: '1023px',
    mobile: '767px'
};

export const device = {
    desktop: `screen and (min-width: ${MinSize.desktop})`,
    laptop: `screen and (min-width: ${MinSize.laptop}) and (max-width: ${MaxSize.laptop})`,
    tablet: `screen and (min-width: ${MinSize.tablet}) and (max-width: ${MaxSize.tablet})`,
    mobile: `screen and (max-width: ${MaxSize.mobile})`
};