import React from 'react';
import {Text, View} from 'react-native';
import {Episode} from '../models';
import {elements, typography} from '../styles';
import {RatingStat} from './RatingStat';

export interface EpisodeCardProps {
  episode: Episode;
}

export function EpisodeCard({episode}: EpisodeCardProps) {
  return (
    <View style={elements.card}>
      <Text style={typography.normal}>{episode.name}</Text>
      <RatingStat rating={episode.rating} />
    </View>
  );
}
