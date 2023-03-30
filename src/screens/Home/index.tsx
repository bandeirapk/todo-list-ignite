import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container} >
      <Header />

      <View style={styles.tasksContainer}>
        
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.tasksCreated}>Criadas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterTasks}>0</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.tasksDone}>Concluídas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterTasks}>0</Text>
            </View>
          </View>
        </View>
        <Task />
        <Task />
        <Task />
      </View>
    </View>
  );
}