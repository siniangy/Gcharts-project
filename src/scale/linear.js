import { normalize } from './utils';
import { interpolateNumber } from './interpolate';

export function createLinear({
  domain: [d0, d1],
  range: [r0, r1],
  interpolate = interpolateNumber,
}) {
  return (x) => {
    const t = normalize(x, d0, d1);
    return interpolate(t, r0, r1);
  };
}
