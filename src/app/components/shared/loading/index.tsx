import Loading, { Pixel, type RGB } from 'loading-points';

const glowColor = 'rgb(155, 46, 199)' as RGB;
const circleSize = '8px' as Pixel;

export function Loadig() {
  return <Loading glowColor={glowColor} circleSize={circleSize} />;
}
