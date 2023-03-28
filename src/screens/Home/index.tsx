import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { THEMES } from '../../THEMES';

import LogoTodo from '../../assets/todo.svg';
import iconPlus from '../../assets/plus.svg';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoTodo />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor={THEMES.gray300}
        />

        <iconPlus />
        <TouchableOpacity style={styles.button}></TouchableOpacity>
      </View>
    </View>
  );
}
