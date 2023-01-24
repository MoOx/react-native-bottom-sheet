"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBottomSheetScrollableComponent = createBottomSheetScrollableComponent;

var _react = _interopRequireWildcard(require("react"));

var _reactNativeReanimated = require("react-native-reanimated");

var _reactNativeGestureHandler = require("react-native-gesture-handler");

var _gesture = require("../../contexts/gesture");

var _hooks = require("../../hooks");

var _constants = require("../../constants");

var _ScrollableContainer = require("./ScrollableContainer");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function createBottomSheetScrollableComponent(type, ScrollableComponent) {
  return /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
    // props
    const {
      // hooks
      focusHook,
      scrollEventsHandlersHook,
      // props
      enableFooterMarginAdjustment = false,
      overScrollMode = 'never',
      keyboardDismissMode = 'interactive',
      showsVerticalScrollIndicator = true,
      style,
      refreshing,
      onRefresh,
      progressViewOffset,
      refreshControl,
      // events
      onScroll,
      onScrollBeginDrag,
      onScrollEndDrag,
      ...rest
    } = props; //#region hooks

    const draggableGesture = (0, _react.useContext)(_gesture.BottomSheetDraggableContext);
    const {
      scrollableRef,
      scrollableContentOffsetY,
      scrollHandler
    } = (0, _hooks.useScrollHandler)(scrollEventsHandlersHook, onScroll, onScrollBeginDrag, onScrollEndDrag);
    const {
      animatedFooterHeight,
      animatedScrollableState
    } = (0, _hooks.useBottomSheetInternal)(); //#endregion
    //#region variables

    const scrollableAnimatedProps = (0, _reactNativeReanimated.useAnimatedProps)(() => ({
      decelerationRate: _constants.SCROLLABLE_DECELERATION_RATE_MAPPER[animatedScrollableState.value],
      showsVerticalScrollIndicator: showsVerticalScrollIndicator ? animatedScrollableState.value === _constants.SCROLLABLE_STATE.UNLOCKED : showsVerticalScrollIndicator
    }), [showsVerticalScrollIndicator]);
    const nativeGesture = (0, _react.useMemo)(() => _reactNativeGestureHandler.Gesture.Native() // @ts-ignore
    .simultaneousWithExternalGesture(draggableGesture).shouldCancelWhenOutside(false), [draggableGesture]); //#endregion
    //#region styles

    const containerAnimatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => ({
      marginBottom: enableFooterMarginAdjustment ? animatedFooterHeight.value : 0
    }), [enableFooterMarginAdjustment]);
    const containerStyle = (0, _react.useMemo)(() => {
      return enableFooterMarginAdjustment ? [...(style ? 'length' in style ? style : [style] : []), containerAnimatedStyle] : style;
    }, [enableFooterMarginAdjustment, style, containerAnimatedStyle]); //#endregion
    //#region effects
    // @ts-ignore

    (0, _react.useImperativeHandle)(ref, () => scrollableRef.current);
    (0, _hooks.useScrollableSetter)(scrollableRef, type, scrollableContentOffsetY, onRefresh !== undefined, focusHook); //#endregion
    //#region render

    return /*#__PURE__*/_react.default.createElement(_ScrollableContainer.ScrollableContainer, _extends({
      ref: scrollableRef,
      nativeGesture: nativeGesture,
      animatedProps: scrollableAnimatedProps,
      overScrollMode: overScrollMode,
      keyboardDismissMode: keyboardDismissMode,
      refreshing: refreshing,
      scrollEventThrottle: 16,
      progressViewOffset: progressViewOffset,
      style: containerStyle,
      onRefresh: onRefresh,
      onScroll: scrollHandler,
      ScrollableComponent: ScrollableComponent,
      refreshControl: refreshControl
    }, rest)); //#endregion
  });
}
//# sourceMappingURL=createBottomSheetScrollableComponent.js.map