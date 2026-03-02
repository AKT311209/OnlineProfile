// eslint-disable-next-line no-undef
module.exports = {
  theme: {
    extend: {
      colors: {
        yellow: '#efc603',
      },
      keyframes: {
        typing: {
          '0%, 100%': { width: '0%' },
          '30%, 70%': { width: '100%' },
        },
        blink: {
          '0%': { opacity: 0 },
        },
        'rotate-loader': {
          '0%': { transform: 'rotate(0deg)', strokeDashoffset: '360%' },
          '100%': { transform: 'rotate(360deg)', strokeDashoffset: '-360%' },
        },
      },
      screens: {
        touch: { raw: 'only screen and (pointer: coarse)' },
      },
    },
  },
};
