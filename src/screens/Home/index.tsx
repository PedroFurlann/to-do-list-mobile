import { PlusCircle } from "phosphor-react-native";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { EmptyTaskList } from "../../components/EmptyTaskList";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { styles } from "./styles";

export interface TaskListProps {
  id: number;
  content: string;
  isCompleted: boolean;
}

export function Home() {
  const [tasksCreated, setTasksCreated] = useState<TaskListProps[]>([]);
  const [taskCreatedCount, setTaskCreatedCount] = useState(0);
  const [tasksCompletedCount, setTasksCompletedCount] = useState(0);
  const [taskContent, setTaskContent] = useState("");

  function handleToggleTaskStatus(id: number) {
    setTasksCreated((state) =>
      state.map((task) => {
        if (task.id == id) {
          if (task.isCompleted == false) {
            setTasksCompletedCount((acc) => acc + 1);
          } else {
            setTasksCompletedCount((acc) => acc - 1);
          }
          return { ...task, isCompleted: !task.isCompleted };
        } else {
          return task;
        }
      })
    );
  }

  function handleDeleteTask(id: number) {
    const taskCompleted = tasksCreated.find((task) => task.id == id);

    if (taskCompleted?.isCompleted === true) {
      return Alert.alert(
        "Operação Inválida",
        "Tarefas completadas não podem ser removidas"
      );
    }

    Alert.alert("Deletar tarefa", "Deseja deletar essa tarefa da lista?", [
      {
        text: "Sim",
        onPress: () => {
          setTasksCreated((state) => {
            return state.filter((task) => task.id !== id);
          });

          setTaskCreatedCount((acc) => acc - 1);
        },
      },

      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleCreateTask() {
    const taskAlreadyCreated = tasksCreated.find((task) => task.id);

    if (taskAlreadyCreated?.content === taskContent) {
      return Alert.alert(
        "Tarefa existente",
        "Por favor, digite uma tarefa que ainda não foi criada"
      );
    }

    if (taskContent === "") {
      return Alert.alert(
        "Tarefa vazia!",
        "Por favor, digite uma tarefa válida!"
      );
    }

    setTasksCreated((state) => [
      ...state,
      {
        id: Math.round(Math.random() * 10000),
        content: taskContent,
        isCompleted: false,
      },
    ]);
    setTaskContent("");
    setTaskCreatedCount((acc) => acc + 1);
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          style={styles.input}
          placeholderTextColor="#808080"
          onChangeText={setTaskContent}
          value={taskContent}
        />
        <TouchableOpacity style={styles.btn} onPress={handleCreateTask}>
          <PlusCircle color="#fff" size={16} />
        </TouchableOpacity>
      </View>

      <View style={styles.headerTaskList}>
        <View style={styles.alignTextAndNumber}>
          <Text style={styles.textTasksCreated}>Criadas</Text>
          <Text style={styles.numberTasksCreated}>{taskCreatedCount}</Text>
        </View>
        <View style={styles.alignTextAndNumber}>
          <Text style={styles.textTasksCompleted}>Concluídas</Text>
          <Text style={styles.numberTasksCompleted}>{tasksCompletedCount}</Text>
        </View>
      </View>
      <FlatList
        data={tasksCreated}
        keyExtractor={(task) => String(task.id)}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            task={item}
            handleRemoveTask={handleDeleteTask}
            handleToggleTaskStatus={handleToggleTaskStatus}
          />
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyTaskList />}
      />
    </View>
  );
}
