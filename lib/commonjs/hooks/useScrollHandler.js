"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScrollHandler = void 0;

var _reactNativeReanimated = require("react-native-reanimated");

var _useScrollEventsHandlersDefault = require("./useScrollEventsHandlersDefault");

var _utilities = require("../utilities");

const useScrollHandler = function () {
  let useScrollEventsHandlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _useScrollEventsHandlersDefault.useScrollEventsHandlersDefault;
  let onScroll = arguments.length > 1 ? arguments[1] : undefined;
  let onScrollBeginDrag = arguments.length > 2 ? arguments[2] : undefined;
  let onScrollEndDrag = arguments.length > 3 ? arguments[3] : undefined;
  // refs
  const scrollableRef = (0, _reactNativeReanimated.useAnimatedRef)(); // variables

  const scrollableContentOffsetY = (0, _reactNativeReanimated.useSharedValue)(0); // hooks

  const {
    handleOnScroll = _utilities.workletNoop,
    handleOnBeginDrag = _utilities.workletNoop,
    handleOnEndDrag = _utilities.workletNoop,
    handleOnMomentumEnd = _utilities.workletNoop,
    handleOnMomentumBegin = _utilities.workletNoop
  } = useScrollEventsHandlers(scrollableRef, scrollableContentOffsetY); // callbacks

  const scrollHandler = (0, _reactNativeReanimated.useAnimatedScrollHandler)({
    onScroll: (event, context) => {
      handleOnScroll(event, context);

      if (onScroll) {
        (0, _reactNativeReanimated.runOnJS)(onScroll)({
          nativeEvent: event
        });
      }
    },
    onBeginDrag: (event, context) => {
      handleOnBeginDrag(event, context);

      if (onScrollBeginDrag) {
        (0, _reactNativeReanimated.runOnJS)(onScrollBeginDrag)({
          nativeEvent: event
        });
      }
    },
    onEndDrag: (event, context) => {
      handleOnEndDrag(event, context);

      if (onScrollEndDrag) {
        (0, _reactNativeReanimated.runOnJS)(onScrollEndDrag)({
          nativeEvent: event
        });
      }
    },
    onMomentumBegin: handleOnMomentumBegin,
    onMomentumEnd: handleOnMomentumEnd
  }, [handleOnScroll, handleOnBeginDrag, handleOnEndDrag, handleOnMomentumBegin, handleOnMomentumEnd, onScroll, onScrollBeginDrag, onScrollEndDrag]);
  return {
    scrollHandler,
    scrollableRef,
    scrollableContentOffsetY
  };
};

exports.useScrollHandler = useScrollHandler;
//# sourceMappingURL=useScrollHandler.js.map