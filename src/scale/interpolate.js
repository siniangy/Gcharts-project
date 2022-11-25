export function interpolateNumber(t, start, stop) {
  return start + (stop - start) * t;
}

export function interpolateColor(t, start, stop) {
  const r = interpolateNumber(t, start[0], stop[0]);
  const g = interpolateNumber(t, start[1], stop[1]);
  const b = interpolateNumber(t, start[2], stop[2]);
  return `rgb(${r}, ${g}, ${b})`;
}
