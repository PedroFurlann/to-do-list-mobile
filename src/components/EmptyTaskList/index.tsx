import { Image, StyleSheet, Text, View } from "react-native";
import Clipboard from '../../assets/Clipboard.png';
import { styles } from "./styles";

export function EmptyTaskList() {
  return (
    <View>
      <View style={{
        borderBottomColor: '#808080',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginLeft: 24,
        marginRight: 24,
        marginTop: 20,
        marginBottom: 30
      }} />
      
      <View style={styles.emptyTaskListContainer}>
        <Image source={Clipboard} style={{ tintColor: '#808080', marginBottom: 20 }} />
        <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.textNormal}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}