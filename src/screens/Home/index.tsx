import { PlusCircle } from "phosphor-react-native";
import { Button, TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Adicione uma nova tarefa"
          style={styles.input}
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.btn}>
          <PlusCircle color="#fff" size={16}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}