import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export interface SearchInputProps {
  onSearch(value: string): void;
  searchedValue: string;
  resultCount: number | undefined;
}

export function SearchInput({
  onSearch,
  resultCount,
  searchedValue,
}: SearchInputProps) {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={search}
          placeholder="Search by show name"
          onChange={event => setSearch(event.nativeEvent.text)}
          returnKeyType="search"
          style={styles.input}
        />
        <Button title="Search" onPress={() => onSearch(search)} />
      </View>
      {resultCount !== undefined && (
        <Text>{`${resultCount} matches for '${searchedValue}'`}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  input: {
    borderColor: '#aaa',
    borderWidth: 1,
    padding: 8,
    flex: 1,
    borderRadius: 4,
  },
});
