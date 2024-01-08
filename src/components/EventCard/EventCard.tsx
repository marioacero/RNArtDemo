import {Event} from '@models/Event';
import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {formatDistanceToNow, isToday, isYesterday} from 'date-fns';

interface Props {
  event: Event;
  onPress: (event: Event) => void;
}
const EventCard: FC<Props> = props => {
  const {event, onPress} = props;
  const description = event.short_description
    ? event.short_description.replace(/<[^>]*>/g, '')
    : '';

  const formatDate = (date: string) => {
    const parsedDate = new Date(date);
    if (isToday(parsedDate)) {
      return 'Today';
    }
    if (isYesterday(parsedDate)) {
      return 'Yesterday';
    }
    return formatDistanceToNow(parsedDate, {addSuffix: true});
  };

  const date = formatDate(event.start_date);

  const onPressCard = () => {
    onPress(event);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressCard}>
      <View>
        <Image
          style={{width: '100%', height: 150}}
          source={{
            uri: event.image_url,
          }}
        />
        <View style={styles.date}>
          <Text style={{color: 'white'}}>{date}</Text>
        </View>
      </View>

      <Text style={styles.title}>{`${event.title} - ${event.location}`}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

export {EventCard};
