import { runOnJS, useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { useScrollEventsHandlersDefault } from './useScrollEventsHandlersDefault';
import { workletNoop as noop } from '../utilities';
export const useScrollHandler = function () {
  let useScrollEventsHandlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : useScrollEventsHandlersDefault;
  let onScroll = arguments.length > 1 ? arguments[1] : undefined;
  let onScrollBeginDrag = arguments.length > 2 ? arguments[2] : undefined;
  let onScrollEndDrag = arguments.length > 3 ? arguments[3] : undefined;
  // refs
  const scrollableRef = useAnimatedRef(); // variables

  const scrollableContentOffsetY = useSharedValue(0); // hooks

  const {
    handleOnScroll = noop,
    handleOnBeginDrag = noop,
    handleOnEndDrag = noop,
    handleOnMomentumEnd = noop,
    handleOnMomentumBegin = noop
  } = useScrollEventsHandlers(scrollableRef, scrollableContentOffsetY); // callbacks

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event, context) => {
      handleOnScroll(event, context);

      if (onScroll) {
        runOnJS(onScroll)({
          nativeEvent: event
        });
      }
    },
    onBeginDrag: (event, context) => {
      handleOnBeginDrag(event, context);

      if (onScrollBeginDrag) {
        runOnJS(onScrollBeginDrag)({
          nativeEvent: event
        });
      }
    },
    onEndDrag: (event, context) => {
      handleOnEndDrag(event, context);

      if (onScrollEndDrag) {
        runOnJS(onScrollEndDrag)({
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
//# sourceMappingURL=useScrollHandler.js.map