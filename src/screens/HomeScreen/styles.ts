import {Colors} from '@themes/Colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  titleContainer: {
    paddingHorizontal: 24,
    marginTop: 16,
  },
  title: {
    color: Colors.white,
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
});

export default styles;
