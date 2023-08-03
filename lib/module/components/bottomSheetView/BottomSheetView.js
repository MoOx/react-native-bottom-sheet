function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { memo, useEffect, useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { SCROLLABLE_TYPE } from '../../constants';
import { useBottomSheetInternal } from '../../hooks';
function BottomSheetViewComponent(_ref) {
  let {
    focusHook: useFocusHook = useEffect,
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
  } = useBottomSheetInternal();

  //#region styles
  const flattenContainerStyle = useMemo(() => StyleSheet.flatten(style), [style]);
  const containerStylePaddingBottom = useMemo(() => {
    const paddingBottom = flattenContainerStyle && 'paddingBottom' in flattenContainerStyle ? flattenContainerStyle.paddingBottom : 0;
    return typeof paddingBottom === 'number' ? paddingBottom : 0;
  }, [flattenContainerStyle]);
  const containerStyle = useMemo(() => {
    return {
      ...flattenContainerStyle,
      paddingBottom: 0
    };
  }, [flattenContainerStyle]);
  const spaceStyle = useAnimatedStyle(() => ({
    opacity: 0,
    height: enableFooterMarginAdjustment ? animatedFooterHeight.value + containerStylePaddingBottom : containerStylePaddingBottom
  }), [enableFooterMarginAdjustment, containerStylePaddingBottom, animatedFooterHeight]);
  //#endregion

  // callback
  const handleSettingScrollable = useCallback(() => {
    animatedScrollableContentOffsetY.value = 0;
    animatedScrollableType.value = SCROLLABLE_TYPE.VIEW;
  }, [animatedScrollableContentOffsetY, animatedScrollableType]);

  // effects
  useFocusHook(handleSettingScrollable);

  //render
  return /*#__PURE__*/React.createElement(Animated.View, _extends({
    style: containerStyle
  }, rest), children, /*#__PURE__*/React.createElement(Animated.View, {
    pointerEvents: "none",
    style: spaceStyle
  }));
}
const BottomSheetView = /*#__PURE__*/memo(BottomSheetViewComponent);
BottomSheetView.displayName = 'BottomSheetView';
export default BottomSheetView;
//# sourceMappingURL=BottomSheetView.js.map