'use strict';

function normalizeAngles(angles) {
  const twoPi = 2 * Math.PI;
  for (let i = 1; i < angles.length - 1; i++) {
    if (angles[i] < 0) {
      angles[i] = twoPi + angles[i];
    } else if (angles[i] >= twoPi) {
      angles[i] = angles[i] - twoPi;
    }
  }
  return angles;
}

module.exports = normalizeAngles;