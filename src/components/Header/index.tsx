import { TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { THEMES } from '../../THEMES';

import Logo from '../../assets/todo.svg';
import PlusIcon from '../../assets/plus.svg';

export function Header() {
  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Adicione aqui uma nova tarefa'
          placeholderTextColor='THEMES.gray300'
        />

        <TouchableOpacity
          style={styles.buttonInput}
        >
          <PlusIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}