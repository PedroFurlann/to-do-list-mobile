import { TaskListProps } from "../../screens/Home";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Trash } from "phosphor-react-native";

interface TaskProps {
  task: TaskListProps;
  handleRemoveTask: (id: string) => void;
  handleToggleStatusTask: (id: string) => void;
}

export function Task({
  handleRemoveTask,
  handleToggleStatusTask,
  task,
}: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleToggleStatusTask(task.id)}>
        <MaterialCommunityIcons
          style={styles.icon}
          name={
            task.isCompleted
              ? "checkbox-marked-circle"
              : "checkbox-blank-circle-outline"
          }
          size={18}
          color={task.isCompleted ? "#5E60CE" : "#4EA8DE"}
        />
      </TouchableOpacity>

      <Text
        style={
          task.isCompleted
            ? styles.taskCompletedContent
            : styles.taskCompletedContent
        }
      >
        {task.content}
      </Text>

      <TouchableOpacity
        onPress={() => handleRemoveTask(task.id)}
        style={styles.btn}
      >
        <Trash size={14} color='#808080' />
      </TouchableOpacity>
    </View>
  );
}
