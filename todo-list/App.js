import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { COLORS } from './constants/colors';
import { Header, Tasks, TextInput } from './components';


export default function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSave = () => {
    if (!newTask) return;
    const newId = Date.now();
    const newTasks = [...tasks, { id: newId, description: newTask, checked: false }];
    setTasks(newTasks);
    setNewTask('');
  };

  const handleCheck = (id) => { 
    const taskIndex = tasks.findIndex(task => task.id === id);
    setTasks((prevState) => {
      const newTasks = [...prevState];
      newTasks[taskIndex].checked = !newTasks[taskIndex].checked;
      return newTasks;
    })
  }

  const handleRemove = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <View style={styles.rootContainer}>
      <Header />
      <View style={styles.container}>
        <TextInput style={{marginTop: -50}} value={newTask} onChangeText={setNewTask} onPress={handleSave}  />
        <Tasks
          tasks={tasks}
          handleCheck={handleCheck}
          handleRemove={handleRemove}
        />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: COLORS.BASE[600],
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  container: {
    padding: 24,
  },

});
