"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _constants = require("../../constants");
var _hooks = require("../../hooks");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function BottomSheetViewComponent(_ref) {
  let {
    focusHook: useFocusHook = _react.useEffect,
    enableFooterMarginAdjustment = false,
    style,
    children,
    ...rest
  } = _ref;
  // hooks
  const {
    animatedScrollableContentOffsetY,
    animatedScrollableType,
    animatedFooterHeight
  } = (0, _hooks.useBottomSheetInternal)();

  //#region styles
  const flattenContainerStyle = (0, _react.useMemo)(() => _reactNative.StyleSheet.flatten(style), [style]);
  const containerStylePaddingBottom = (0, _react.useMemo)(() => {
    const paddingBottom = flattenContainerStyle && 'paddingBottom' in flattenContainerStyle ? flattenContainerStyle.paddingBottom : 0;
    return typeof paddingBottom === 'number' ? paddingBottom : 0;
  }, [flattenContainerStyle]);
  const containerStyle = (0, _react.useMemo)(() => {
    return {
      ...flattenContainerStyle,
      paddingBottom: 0
    };
  }, [flattenContainerStyle]);
  const spaceStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => ({
    opacity: 0,
    height: enableFooterMarginAdjustment ? animatedFooterHeight.value + containerStylePaddingBottom : containerStylePaddingBottom
  }), [enableFooterMarginAdjustment, containerStylePaddingBottom, animatedFooterHeight]);
  //#endregion

  // callback
  const handleSettingScrollable = (0, _react.useCallback)(() => {
    animatedScrollableContentOffsetY.value = 0;
    animatedScrollableType.value = _constants.SCROLLABLE_TYPE.VIEW;
  }, [animatedScrollableContentOffsetY, animatedScrollableType]);

  // effects
  useFocusHook(handleSettingScrollable);

  //render
  return /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, _extends({
    style: containerStyle
  }, rest), children, /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    pointerEvents: "none",
    style: spaceStyle
  }));
}
const BottomSheetView = /*#__PURE__*/(0, _react.memo)(BottomSheetViewComponent);
BottomSheetView.displayName = 'BottomSheetView';
var _default = BottomSheetView;
exports.default = _default;
//# sourceMappingURL=BottomSheetView.js.map