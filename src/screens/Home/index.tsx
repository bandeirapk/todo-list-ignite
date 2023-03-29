import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Keyboard,
} from 'react-native';

import { styles } from './styles';

import LogoTodo from '../../assets/todo.svg';
import PlusIcon from '../../assets/plus.svg';
import { THEMES } from '../../THEMES';

export function Home() {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  function handleBlurWithKeyboard() {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={handleBlurWithKeyboard}>
      <View style={styles.container}>
        <View style={styles.header}>
          <LogoTodo />
        </View>

        <View style={styles.form}>
          <TextInput
            style={[
              styles.input,
              { borderColor: isFocused ? THEMES.purpleDark : THEMES.gray100 },
            ]}
            onFocus={() => handleFocus()}
            onBlur={() => handleBlur()}
            placeholder='Adicione uma nova tarefa'
          />

          <TouchableOpacity style={styles.button} activeOpacity={0.6}>
            <PlusIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.tasks}>
          <View style={styles.info}>
            <View style={styles.created}>
              <Text style={styles.taskCreated}>Criadas</Text>
              <Text style={styles.tasksCounter}>0</Text>
            </View>

            <View style={styles.done}>
              <Text style={styles.taskCompleted}>Concluídas</Text>
              <Text style={styles.tasksCounter}>0</Text>
            </View>
          </View>

          <View style={styles.tasksList}>
            <Image
              source={require('../../assets/clipboardIcon.png')}
              style={styles.clipboardIcon}
            />
            <View>
              <Text style={styles.textEmptyOne}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.textEmptyTwo}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
