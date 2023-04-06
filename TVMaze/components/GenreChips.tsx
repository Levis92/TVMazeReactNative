import React from 'react';
import {Text, View} from 'react-native';
import {elements} from '../styles';

export interface GenreChipsProps {
  genres: string[];
}

export function GenreChips({genres}: GenreChipsProps) {
  if (!genres.length) {
    return null;
  }

  return (
    <View style={elements.chipsContainer}>
      {genres.map(genre => (
        <Text key={genre} style={elements.chip}>
          {genre}
        </Text>
      ))}
    </View>
  );
}
