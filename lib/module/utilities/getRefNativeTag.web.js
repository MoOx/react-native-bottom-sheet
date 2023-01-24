import { findNodeHandle } from 'react-native';
export function getRefNativeTag(ref) {
  return findNodeHandle(ref === null || ref === void 0 ? void 0 : ref.current) || null;
}
//# sourceMappingURL=getRefNativeTag.web.js.map