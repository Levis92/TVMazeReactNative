import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useColorStyle} from '../styles';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../models';
import {useShowSeasons, useShow} from '../adapters';
import {
  ErrorStatus,
  GenreChips,
  Loading,
  RatingStat,
  SeasonList,
} from '../components';
import {typography} from '../styles';
import {formatHtmlToText, getYear} from '../util';

interface ShowScreenProps {
  route: RouteProp<RootStackParamList, 'Show'>;
}

export function ShowScreen({route}: ShowScreenProps) {
  const {showId} = route.params;
  const {
    data: show,
    isError: showIsError,
    refetch: refetchShow,
  } = useShow(showId);
  const {
    data: seasons,
    isError: seasonsIsError,
    refetch: refetchSeasons,
  } = useShowSeasons(showId);

  const {backgroundStyle} = useColorStyle();

  if (showIsError || seasonsIsError) {
    const refresh = () => {
      if (showIsError) {
        refetchShow();
      }
      if (seasonsIsError) {
        refetchSeasons();
      }
    };
    return <ErrorStatus onRefresh={refresh} />;
  }

  if (!show) {
    return <Loading />;
  }

  const seasonSummary =
    seasons?.length +
    ' season(s) • ' +
    getYear(show?.premiered) +
    '-' +
    getYear(show?.ended);

  const renderSummary = () =>
    formatHtmlToText(show.summary ?? '').map((text, index) => (
      <Text key={index}>{text}</Text>
    ));

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle.background}>
      <View style={styles.container}>
        <View style={styles.main}>
          {show?.image ? (
            <Image style={styles.cover} source={{uri: show.image.original}} />
          ) : (
            <View style={styles.cover} />
          )}
          <View style={styles.description}>
            <Text style={typography.title}>{show.name}</Text>
            <GenreChips genres={show.genres} />
            <Text style={typography.small}>{seasonSummary}</Text>
            <Text style={typography.small}>{show.language}</Text>
            <RatingStat rating={show.rating} />
          </View>
        </View>
        <Text style={typography.title}>Summary</Text>
        {renderSummary()}
        {seasons?.length ? (
          <SeasonList seasonIds={seasons?.map(({id}) => id) ?? []} />
        ) : (
          <Loading />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    gap: 12,
  },
  main: {
    flexDirection: 'row',
  },
  description: {
    paddingLeft: 12,
    flex: 1,
    gap: 8,
  },
  cover: {
    width: 138,
    height: 200,
    backgroundColor: '#aaa',
  },
});
