import { TouchableOpacity, View, Text } from 'react-native';

import { styles } from './styles';

import Check from '../../assets/check.svg'
import TrashIcon from '../../assets/trash.svg'

export type TaskProps = {
  id?: string;
  title: string;
  isCompleted: boolean;
}

export function Task({ title, isCompleted }: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={{...isCompleted ? styles.circleCheck : styles.circleEmpty}}
      >
        {isCompleted && <Check />}
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={{
          ...isCompleted ? styles.textDone : styles.textCreated,
        }}> 
          {title} 
        </Text>
      </View>

      <TouchableOpacity>
        <TrashIcon  />
      </TouchableOpacity>
    </View>
  );
}