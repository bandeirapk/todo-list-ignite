import { TouchableOpacity, View, Text } from 'react-native';

import { styles } from './styles';

import Check from '../../assets/check.svg'
import TrashIcon from '../../assets/trash.svg'

export function Task() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circleCheck}>
        <Check  />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.textDone}>Integer </Text>
      </View>

      <TouchableOpacity>
        <TrashIcon  />
      </TouchableOpacity>
    </View>
  );
}