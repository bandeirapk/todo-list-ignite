import { View, Text } from 'react-native';

import { styles } from './styles';

import Trash from '../../assets/trash.svg';

export function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Trash />
    </View>
  );
}
