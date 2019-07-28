module.exports = function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.full-bleed': {
          width: '100vw',
          'margin-inline-start': '50%',
          'margin-inline-end': 'unset',
          transform: 'translateX(-50%)',
          'max-width': 'none',
        },
      },
      variants('full-bleed')
    )
  }
}
