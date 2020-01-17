'use strict';

const tp = require('tape');
const normalizeAngles = require('normalize-angles');

tp('angles in (-2Pi, 4Pi) range normalized to [0, 2Pi)', t => {
  t.plan(2);
  const angles = [
    0,
    2,
    2 * Math.PI + 1,
    -3,
    0,
    2 * Math.PI,
    1,
    1,
  ];
  const expectedNormAngles = [
    0,
    2,
    1,
    2 * Math.PI - 3,
    0,
    0,
    1,
    1,
  ];
  const actualNormAngles = normalizeAngles(angles);
  t.deepEqual(actualNormAngles, expectedNormAngles);
  t.equal(actualNormAngles, angles);
});

tp('first and last not touched, since they are startAngle, ' +
  'which must be already in range', t => {
  t.plan(1);
  const angles = [
    -11,
    2,
    -3,
    1,
    11,
  ];
  const expectedNormAngles = [
    -11,
    2,
    2 * Math.PI - 3,
    1,
    11,
  ];
  const actualNormAngles = normalizeAngles(angles);
  t.deepEqual(angles, actualNormAngles);
});
