/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,css}"
  ],
  theme: {
    extend: {
      colors: {
        pBlue: {
          100: '#E5F1FF',
          300: '#377DFF',
        },
        pGreen: {
          100: '#EAFAF3',
          300: '#2DCA8C',
        },
        pYellow: {
          100: '#FFF2D8',
          300: '#FFBE3D',
        },
        pRed: {
          100: '#FFE3DE',
          300: '#FF715B',
        },
        pBlack: {
          100: '#AAB0B7',
          300: '#58616A',
          600: '#2b3d4e',
          700: '#243443',
        },
        pGray: {
          100: '#FCFCFC',
          200: '#F7F7F9',
          300: '#F0F0F0',
        },
      }
    },
  },
  plugins: [],
}
