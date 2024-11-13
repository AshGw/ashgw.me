import * as loading from 'loading-points';

const glowColor = 'rgb(155, 46, 199)' as loading.RGB;
const circleSize = '8px' as loading.Pixel;

export function Loading() {
  return <loading.default glowColor={glowColor} circleSize={circleSize} />;
}
