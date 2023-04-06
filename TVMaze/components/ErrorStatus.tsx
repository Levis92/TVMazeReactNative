import React from 'react';
import {Button, ButtonProps, StyleSheet, Text, View} from 'react-native';

export interface ErrorStatusProps {
  onRefresh: ButtonProps['onPress'];
}

export function ErrorStatus({onRefresh}: ErrorStatusProps) {
  return (
    <View style={styles.container}>
      <Text>Something went wrong</Text>
      <Button title="Refresh" onPress={onRefresh} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 24,
    gap: 12,
  },
});
