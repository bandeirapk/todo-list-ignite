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
    gap: 6,

    paddingHorizontal: 24,

    marginVertical: -28,

    backgroundColor: 'THEMES.blueDark',
  },
  input: {
    flex: 1,

    height: 56,

    paddingHorizontal: 16,
    
    borderRadius: 6,
    borderWidth: 1,

    fontSize: 16,
    lineHeight: 24,

    color: THEMES.gray700,

    backgroundColor: THEMES.gray500,
  },
  button: {
    width: 56,
    height: 56,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 6,

    backgroundColor: THEMES.blueDark,
  },
  tasks: {
    marginTop: 60,
    marginHorizontal: 24,
  },
  info: {
    flexDirection: 'row',
  },
  created: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

    marginLeft: 2
  },
  done: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

    marginRight: 24,
  },
  taskCreated: {    
    fontWeight: 'bold',
    fontSize: 16,
    color: THEMES.blue,
  },
  taskCompleted: {
    fontWeight: 'bold',
    fontSize: 16,

    marginLeft: 88,

    color: THEMES.purple,
  },
  tasksCounter: {
    paddingVertical: 2,
    paddingHorizontal: 8,

    borderRadius: 12,

    backgroundColor: THEMES.gray400,
  },
  tasksList: {
    marginTop: 24,

    alignItems: 'center',
    gap: 16,
  },
  clipboardIcon: {
    marginTop: 48,
  },
  textEmptyOne: {
    marginTop: 12,

    fontWeight: 'bold',
    fontSize: 16,

    lineHeight: 20,
    textAlign: 'center',
    
    color: THEMES.gray300,
  },
  textEmptyTwo: {
    fontSize: 14,

    lineHeight: 20,
    textAlign: 'center',
    
    color: THEMES.gray300,
  }
});