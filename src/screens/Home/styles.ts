import { StyleSheet } from 'react-native';

import { THEMES } from '../../THEMES';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: THEMES.gray600,
  },
  header: {
    width: '100%',
    
    paddingVertical: 76,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: THEMES.gray700,
  },
  form: {
    width: '100%',

    flexDirection: 'row',

    backgroundColor: 'THEMES.blueDark',
  },
  input: {
    flex: 1,

    height: 56,

    paddingHorizontal: 26,

    backgroundColor: THEMES.gray500,
  },
  button: {
    width: 56,
    height: 56,
  }
});