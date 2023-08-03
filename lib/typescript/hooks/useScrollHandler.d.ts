/// <reference types="react" />
/// <reference types="react-native-reanimated" />
import type { Scrollable, ScrollableEvent } from '../types';
export declare const useScrollHandler: (useScrollEventsHandlers?: import("../types").ScrollEventsHandlersHookType, onScroll?: ScrollableEvent, onScrollBeginDrag?: ScrollableEvent, onScrollEndDrag?: ScrollableEvent) => {
    scrollHandler: (event: import("react-native/types").NativeSyntheticEvent<import("react-native/types").NativeScrollEvent>) => void;
    scrollableRef: import("react").RefObject<Scrollable>;
    scrollableContentOffsetY: import("react-native-reanimated").SharedValue<number>;
};
//# sourceMappingURL=useScrollHandler.d.ts.map