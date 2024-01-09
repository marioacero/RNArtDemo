import {Colors} from '@themes/Colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  contentCotainer: {
    paddingHorizontal: 8,
  },
  image: {
    width: '100%',
    height: 190,
  },
  chipContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 8,
    bottom: 0,
  },
  chip: {
    marginVertical: 12,
    marginRight: 8,
  },
  chipFont: {
    fontSize: 10,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: Colors.orange,
    width: 120,
    alignItems: 'center',
  },
});

export default styles;
