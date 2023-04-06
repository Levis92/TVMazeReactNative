import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSeasonEpisodes} from '../adapters';
import {EpisodeList} from './EpisodeList';
import {typography} from '../styles';

export interface SeasonListProps {
  seasonIds: number[];
}

export function SeasonList({seasonIds}: SeasonListProps) {
  const episodeQueries = useSeasonEpisodes(seasonIds);
  return (
    <View style={styles.container}>
      <Text style={typography.title}>Episodes</Text>
      <View style={styles.listContainer}>
        {episodeQueries.map(query => {
          if (query.isSuccess) {
            return (
              <EpisodeList key={query.data[0].season} episodes={query.data} />
            );
          }
          return null;
        })}
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
