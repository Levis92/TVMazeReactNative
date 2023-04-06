import React from 'react';
import {Episode} from '../models';
import {StyleSheet, Text, View} from 'react-native';
import {EpisodeCard} from './EpisodeCard';
import {typography} from '../styles';

export interface EpisodeListProps {
  episodes: Episode[];
}

export function EpisodeList({episodes}: EpisodeListProps) {
  return (
    <View style={styles.container}>
      <Text style={typography.smallTitle}>Season {episodes[0].season}</Text>
      <View style={styles.listContainer}>
        {episodes.map(episode => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  listContainer: {
    gap: 8,
  },
});
