import { LiFiWidget, WidgetConfig } from '@lifi/widget'
import styles from '@/styles/Home.module.css'

const widgetConfig: WidgetConfig = {
  containerStyle: {
    border: '2px solid #b97cff',
    boxShadow: '0px 0px 101px 0px rgb(165, 81, 255 / 28%)',
    borderRadius: '16px',
  },
  integrator: 'SoulSwap',
  appearance: 'dark',
  theme: {
    palette: {
      primary: { main: '#a551ff' },
      secondary: { main: '#a551ff' },
      background: { 
        paper: '#b97cff', // bg color for cards
        default: '#8223ff', // bg color container // mediumPurple
      },
      grey: {
        300: '#a551ff', // border light theme // lightPurple
        800: '#a551ff', // border dark theme // lightPurple
      },
    },
    shape: {
      borderRadius: 16,
      borderRadiusSecondary: 8,
    },
    typography: {
      fontFamily: 'Manrope, sans-serif',
    },
  },
  hiddenUI: ['appearance'],
  variant: 'expandable',
  subvariant: 'split',
};

export const Widget = () => {
  return (
    <div className={styles.widget}>
      <LiFiWidget integrator="SoulSwap" config={widgetConfig} />
    </div>
  );
};