/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    boxShadow: {
      100: '0px 0px 14px 0px #66666626',
      200: '0px 0px 12px 0px #00000026',
      300: '0px 4px 14px rgba(0, 0, 0, 0.25)',
      400: '0px 0px 12px rgba(0, 0, 0, 0.1)',
    },
    backgroundImage: {
      gressgreen: 'linear-gradient(90deg, hsla(68, 66%, 52%, 0.3) 0%, rgba(192, 213, 52, 0) 30%)',
    },
    colors: {
      white: '#fff',
      dark: '#000',
      primary: {
        blue: '#109CF1',
        'blue-hover': '#0F8DDA',
        'blue-active': '#087ABF',
        'blue-disabled': '#109CF1',
        purple: '#ECCCFF',
        yellow: '#ECCCFF',
        green: '#29CC97',
      },
      accent: {
        darkred: '#CC2929',
        red: '#F56C6C',
        redtext: '#FF1616',
        yellow: '#FEC400',
        green: '#29CC97',
        grassgreen: '#C0D534',
        truegreen: '#679E41',
      },
      neutral: {
        100: '#FCFDFE',
        200: '#FAFAFA',
        300: '#F0F1F7',
        350: '#EFF0F0',
        375: '#EBEBEB',
        400: '#DCDFE6',
        450: '#D7DAE3',
        500: '#B0BEC5',
        600: '#C4C4C4',
        650: '#474747',
        700: '#F0F0F0',
        750: '#9FA2B4',
        800: '#798F9C',
        900: '#666666',
        950: '#373737',
        1000: '#333333',
      },
      black: {
        300: '#B5B5B5',
        700: '#252525',
      },
    },
    fontSize: {
      xxs: [
        '10px',
        {
          lineHeight: '13px',
        },
      ],
      xs: [
        '12px',
        {
          lineHeight: '16px',
        },
      ],
      sm: [
        '13px',
        {
          lineHeight: '18px',
        },
      ],
      md: [
        '14px',
        {
          lineHeight: '20px',
        },
      ],
      h5: [
        '12px',
        {
          lineHeight: '14px',
        },
      ],
      h4: [
        '14px',
        {
          lineHeight: '20px',
        },
      ],
      h3: [
        '16px',
        {
          lineHeight: '20px',
        },
      ],
      h2: [
        '18px',
        {
          lineHeight: '25px',
        },
      ],
      h1: [
        '24px',
        {
          lineHeight: '33px',
        },
      ],
      h0: [
        '40px',
        {
          lineHeight: '54px',
        },
      ],
    },
    fontFamily: {
      'open-sans': ["'Open Sans'", 'sans-serif'],
    },
  },
  plugins: [],
};
