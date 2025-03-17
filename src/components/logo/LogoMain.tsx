import logo from 'assets/images/logo/oliveyoung-logo.png';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

export default function LogoMain({ reverse }: { reverse?: boolean }) {
  return <img src={logo} alt="Olive Young Logo" style={{ width: '142px' }} />;
}
