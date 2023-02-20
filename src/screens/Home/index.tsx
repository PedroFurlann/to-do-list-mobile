import { PlusCircle } from "phosphor-react-native";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";

export interface TaskListProps {
  id: number
  content: string
  isCompleted: boolean
}

export function Home() {
  const [tasksCreated, setTasksCreated] = useState<TaskListProps[]>([])
  const [taskCreatedCount, setTaskCreatedCount] = useState(0)
  const [tasksCompletedCount, setTasksCompletedCount] = useState(0)
  const [taskContent, setTaskContent] = useState('')
  

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

      <View>
      </View>
    </View>
  )
}