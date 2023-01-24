/// <reference types="react" />
/// <reference types="react-native-reanimated" />
import type { Scrollable } from '../types';
export declare type ScrollEventContextType = {
    initialContentOffsetY: number;
    shouldLockInitialPosition: boolean;
};
export declare const useScrollHandler: () => {
    scrollHandler: undefined;
    scrollableRef: import("react").MutableRefObject<Scrollable | undefined>;
    scrollableContentOffsetY: import("react-native-reanimated").SharedValue<number>;
};
