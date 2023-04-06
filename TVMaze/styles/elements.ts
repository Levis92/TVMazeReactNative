import {StyleSheet} from 'react-native';
import {typography} from './typography';

export const elements = StyleSheet.create({
  card: {
    padding: 8,
    borderRadius: 4,
    borderColor: '#aaa',
    borderWidth: 1,
  },
  chip: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 4,
    fontSize: typography.small.fontSize,
    backgroundColor: '#eee',
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
});
