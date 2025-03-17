import logoIcon from 'assets/images/logo/oliveyoung-logo.png';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoIconDark from 'assets/images/logo-icon-dark.svg';
 * import logoIcon from 'assets/images/logo-icon.svg';
 * import { ThemeMode } from 'config';
 *
 */

// ==============================|| LOGO ICON SVG ||============================== //

export default function LogoIcon() {
  return <img src={logoIcon} alt="oliveyoung logo icon" width="50" />;
}
