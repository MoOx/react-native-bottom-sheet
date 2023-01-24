import { useCallback, useEffect } from 'react';
import { useBottomSheetInternal } from './useBottomSheetInternal';
import { getRefNativeTag } from '../utilities/getRefNativeTag';
export const useScrollableSetter = function (ref, type, contentOffsetY, refreshable) {
  let useFocusHook = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : useEffect;
  // hooks
  const {
    animatedScrollableType,
    animatedScrollableContentOffsetY: rootScrollableContentOffsetY,
    isContentHeightFixed,
    isScrollableRefreshable,
    setScrollableRef,
    removeScrollableRef
  } = useBottomSheetInternal(); // callbacks

  const handleSettingScrollable = useCallback(() => {
    // set current content offset
    rootScrollableContentOffsetY.value = contentOffsetY.value;
    animatedScrollableType.value = type;
    isScrollableRefreshable.value = refreshable;
    isContentHeightFixed.value = false; // set current scrollable ref

    const id = getRefNativeTag(ref);

    if (id) {
      setScrollableRef({
        id: id,
        node: ref
      });
    } else {
      console.warn(`Couldn't find the scrollable node handle id!`);
    }

    return () => {
      removeScrollableRef(ref);
    };
  }, [ref, type, refreshable, animatedScrollableType, rootScrollableContentOffsetY, contentOffsetY, isScrollableRefreshable, isContentHeightFixed, setScrollableRef, removeScrollableRef]); // effects

  useFocusHook(handleSettingScrollable);
};
//# sourceMappingURL=useScrollableSetter.js.map