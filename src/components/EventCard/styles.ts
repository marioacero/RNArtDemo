import {Colors} from '@themes/Colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontWeight: '600',
    paddingVertical: 8,
  },
  description: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  date: {
    position: 'absolute',
    top: 5,
    right: 6,
    backgroundColor: Colors.background,
    paddingHorizontal: 6,
  },
});

export default styles;
