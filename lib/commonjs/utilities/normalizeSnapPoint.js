"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeSnapPoint = void 0;

/**
 * Converts a snap point to fixed numbers.
 */
const normalizeSnapPoint = function (snapPoint, containerHeight, _topInset, _bottomInset) {
  'worklet';

  let _$modal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  let normalizedSnapPoint = snapPoint; // percentage snap point

  if (typeof normalizedSnapPoint === 'string') {
    normalizedSnapPoint = Number(normalizedSnapPoint.split('%')[0]) * containerHeight / 100;
  }

  return Math.max(0, containerHeight - normalizedSnapPoint);
};

exports.normalizeSnapPoint = normalizeSnapPoint;
//# sourceMappingURL=normalizeSnapPoint.js.map