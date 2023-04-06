import React from 'react';
import {Rating} from '../models';
import {Text} from 'react-native';
import {typography} from '../styles';

export interface RatingStatProps {
  rating: Rating;
}

export function RatingStat({rating}: RatingStatProps) {
  const text =
    rating.average !== null ? `Rating: ${rating.average}/10` : 'No ratings';
  return <Text style={typography.small}>{text}</Text>;
}
