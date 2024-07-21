import { View, Text, StyleSheet, FlatList } from "react-native";
import { TaskInfo } from "./TaskInfo";
import { EmptyTasks } from "./Empty";
import { Task } from "./Task";

export function Tasks({ tasks, handleCheck, handleRemove }) {

const finishedTasks = tasks.filter(task => task.checked).length;

  return (
    <View style={styles.container}>

      <View style={styles.tasksHeader}>
        <TaskInfo title='Criadas' type="create" counter={tasks.length} />
        <TaskInfo title='Concluídas' counter={finishedTasks} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        ListEmptyComponent={<EmptyTasks />}
        renderItem={({ item }) => (
          <Task 
            key={item.id}
            description={item.description} 
            checked={item.checked} 
            onPress={() => handleCheck(item.id)}
            onRemove={() => handleRemove(item.id)}
          />
        )} 
        />
      <Text>Tasks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
  },
  tasksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});