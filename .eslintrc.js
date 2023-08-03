module.exports = {
  root: true,
  extends: ['@react-native', 'prettier', 'plugin:react-hooks/recommended'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: '(useAnimatedStyle|useDerivedValue|useAnimatedProps)',
      },
    ],
  },
};
