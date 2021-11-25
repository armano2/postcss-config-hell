module.exports = {
  plugins: [
    require('postcss-custom-properties')({
      preserve: true,
      importFrom: [
        'src/styles/color-scheme.css'
        // {
        //   customProperties: { '--color-W0': '#fff' }
        // }
      ]
    }),
    require('postcss-import'),
    require('postcss-color-mod-function'),
    require('postcss-inline-svg')({
      paths: ['src'],
      removeFill: true,
      removeStroke: true
    }),
    require('postcss-preset-env'),
    require('postcss-normalize')
  ]
};
