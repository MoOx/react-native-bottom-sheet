/**
 * Converts a snap point to fixed numbers.
 */
export const normalizeSnapPoint = function (snapPoint, containerHeight, _topInset, _bottomInset) {
  'worklet';

  let _$modal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  let normalizedSnapPoint = snapPoint; // percentage snap point

  if (typeof normalizedSnapPoint === 'string') {
    normalizedSnapPoint = Number(normalizedSnapPoint.split('%')[0]) * containerHeight / 100;
  }

  return Math.max(0, containerHeight - normalizedSnapPoint);
};
//# sourceMappingURL=normalizeSnapPoint.js.map