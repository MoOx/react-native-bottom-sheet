import React from 'react';
import { SimultaneousGesture } from 'react-native-gesture-handler';
interface ScrollableContainerProps {
    nativeGesture: SimultaneousGesture;
    refreshControl: any;
    progressViewOffset: any;
    refreshing: any;
    onRefresh: any;
    ScrollableComponent: any;
}
export declare const ScrollableContainer: React.ForwardRefExoticComponent<ScrollableContainerProps & React.RefAttributes<any>>;
export {};
