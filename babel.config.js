// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'], // Make sure the preset name is correct
//   plugins: [
//     [
//       '@babel/plugin-transform-runtime',
//       {
//         absoluteRuntime: false,
//         corejs: false,
//         helpers: true,
//         regenerator: true,
//         version: '7.0.0-beta.0',
//       },
//     ],
//     'react-native-reanimated/plugin',
//   ],
// };

// babel.config.js
// babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', // Ensure this plugin is included
    ['@babel/plugin-transform-class-properties', {loose: true}],
    ['@babel/plugin-transform-private-methods', {loose: true}],
    ['@babel/plugin-transform-private-property-in-object', {loose: true}],
  ],
};
