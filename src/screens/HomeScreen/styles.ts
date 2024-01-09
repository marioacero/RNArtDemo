import {Colors} from '@themes/Colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: 24,
    marginTop: 16,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  popularContainer: {
    marginTop: 24,
  },
  tabIndicator: {
    backgroundColor: Colors.grey,
    height: 3,
  },
  tabTitle: {
    fontSize: 13,
    fontWeight: '600',
  },
  skeletonContainer: {
    paddingHorizontal: 6,
  },
  skeleton: {
    marginVertical: 6,
  },
  list: {
    paddingHorizontal: 16,
  },
});

export default styles;
