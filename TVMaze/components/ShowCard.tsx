import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList, ShowResponse} from '../models';
import {elements, typography} from '../styles';
import {getYear} from '../util';
import {RatingStat} from './RatingStat';
import {GenreChips} from './GenreChips';

export interface ShowCardProps {
  response: ShowResponse;
  navigation: NavigationProp<RootStackParamList, 'Show'>;
}

export function ShowCard({response: {show}, navigation}: ShowCardProps) {
  const navigateToShow = (showId: number) => {
    navigation.navigate('Show', {showId});
  };

  const onPress = () => {
    navigateToShow(show.id);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        {show.image ? (
          <Image style={styles.cover} source={{uri: show.image.original}} />
        ) : (
          <View style={styles.cover} />
        )}
        <View style={styles.description}>
          <Text style={typography.title}>{show.name}</Text>
          <GenreChips genres={show.genres} />
          <Text style={typography.small}>
            {getYear(show?.premiered) + '-' + getYear(show?.ended)}
          </Text>
          <Text style={typography.small}>{show.language}</Text>
          <RatingStat rating={show.rating} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    ...elements.card,
    flexDirection: 'row',
  },
  description: {
    flex: 1,
    paddingLeft: 12,
    gap: 8,
  },
  cover: {
    width: 102,
    height: 150,
    backgroundColor: '#aaa',
  },
});
