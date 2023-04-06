import React, {useState} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {useColorStyle} from '../styles';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../models';
import {ErrorStatus, SearchInput, ShowCard} from '../components';
import {useSearchShows} from '../adapters';

interface HomeScreenProps {
  navigation: NavigationProp<RootStackParamList, 'Show'>;
}

export function HomeScreen({navigation}: HomeScreenProps) {
  const [search, setSearch] = useState('');
  const {data: shows, isError, refetch} = useSearchShows(search);
  const {backgroundStyle} = useColorStyle();

  if (isError) {
    const refresh = () => {
      if (isError) {
        refetch();
      }
    };
    return <ErrorStatus onRefresh={refresh} />;
  }

  return (
    <View style={{...backgroundStyle.background, ...styles.container}}>
      <SearchInput
        onSearch={setSearch}
        searchedValue={search}
        resultCount={shows?.length}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle.background}>
        <View style={styles.showList}>
          {shows?.map(response => (
            <ShowCard
              key={response.show.id}
              response={response}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  showList: {
    gap: 4,
  },
});
