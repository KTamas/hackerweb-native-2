import { useMemo } from 'react';
import { View } from 'react-native';

import useViewportStore from '../hooks/useViewportStore';

import ActivityIndicator from './ActivityIndicator';
import Text from './Text';

export default function ({
  state = null, // loading, nada, error
  nadaText = '',
  errorComponent = () => null,
}) {
  if (!state) return null;
  const height = useViewportStore((state) => state.height);
  const paddingVertical = useMemo(() => height / 3, [height]);

  return (
    <View
      pointerEvents="box-none"
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical,
        paddingHorizontal: 15,
      }}
    >
      {state === 'loading' ? (
        <ActivityIndicator />
      ) : state === 'error' ? (
        errorComponent()
      ) : state === 'nada' ? (
        <Text type="insignificant">{nadaText}</Text>
      ) : null}
    </View>
  );
}
