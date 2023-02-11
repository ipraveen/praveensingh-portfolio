// import { deep, swiss } from '@theme-ui/presets';
// // import nightOwl from '@theme-ui/prism/presets/night-owl.json';
// import prismTheme from '@theme-ui/prism/presets/dracula.json';

// const theme = {
//     ...swiss,
//     colors: {
//         ...swiss.colors,
//         modes: {
//             dark: {
//                 ...deep.colors,
//             },
//         },
//     },

//     styles: {
//         ...swiss.styles,
//         code: {
//             ...prismTheme,
//         },
        
//     },
// };

// export default theme;


import nightOwl from '@theme-ui/prism/presets/night-owl'

const theme = {
  styles: {
    pre: {
      ...nightOwl,
    },
  },
}

export default theme