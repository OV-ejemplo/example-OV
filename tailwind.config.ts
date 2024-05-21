import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');
const config: Config = {
  content: [
    './node_modules/@stetamalo/plan-seguro-components.ui/**/*.{js,ts,jsx,tsx}', //Añadir
    './node_modules/@stetamalo/plan-seguro-components.ui/*.{js,ts,jsx,tsx}', //Añadir
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        encode: ['Encode Sans Condensed'],
        poppins: ['Poppins'],
        inter: ['Inter'],
      },

      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: {
          DEFAULT: 'var(--background)',
          primary: 'var(--background-primary)',
          sidebar: 'var(--background-sidebar)',
          skeleton: 'var(--background-skeleton)',
        },
        foreground: 'var(--foreground)',
        'current-foreground': 'var(--current-foreground)',
        'default-button-pressed': 'var(--default-button-pressed)',
        'default-button-foreground-pressed':
          'var(--default-button-foreground-pressed)',
        'default-button-hover': 'var(--default-button-hover)',
        'default-button-foreground-hover':
          'var(--default-button-foreground-hover)',
        'input-foreground': 'var(--input-foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          30: 'var(--primary-30)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
          border: 'var(--secondary-border)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
          pressed: 'var(--destructive-pressed)',
          hover: 'var(--destructive-hover)',
        },
        disabled: {
          DEFAULT: 'var(--disabled)',
          foreground: 'var(--disabled-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
          pressed: 'var(--accent-pressed)',
          disabled: 'var(--accent-disabled)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        'checkbox-radioButton': {
          DEFAULT: 'var(--checkbox-radioButton-shadow)',
          hover: 'var(--checkbox-radioButton-shadow-hover)',
        },
        'brand-green': {
          DEFAULT: 'var(--brand-green)',
        },
        'brand-blue': {
          DEFAULT: 'var(--brand-blue)',
        },
        'tabs-hover': {
          DEFAULT: 'var(--tabs-hover)',
        },
        'success-green': {
          DEFAULT: 'var(--success-green)',
        },
        'error-red': {
          DEFAULT: 'var(--error-red)',
        },
        'modal-gray-dark': {
          DEFAULT: 'var(--modal-gray-dark)',
        },
        gray: {
          dark: 'var(--gray-dark)',
          medium: 'var(--gray-medium)',
          light: 'var(--gray-light)',
        },
        button: {
          white: 'var(--button-white)',
          'dark-gray': 'var(--button-dark-gray)',
          'light-gray': 'var(--button-light-gray)',
          gray: 'var(--button-gray)',
          black: 'var(--button-black)',
          destructive: 'var(--button-destructive)',
          disabled: 'var(--button-disabled)',
          ghost: 'var(--button-ghost)',
          'ghost-disabled': 'var(--button-ghost-disabled)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          highlight: 'var(--text-highlight)',
        },
        actions: {
          primary: 'var(--action-primary)',
          hover: 'var(--action-hover)',
          focus: 'var(--action-focus)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        'checkbox-radioButton':
          '0px 0px 0px 10px var(--checkbox-radioButton-shadow)',
        'checkbox-radioButton-hover':
          '0px 0px 0px 10px var(--checkbox-radioButton-shadow-hover)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
