import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { Clipboard } from "../../assets";

export function EmptyTasks() {
  return (
    <View style={styles.container}>
      <Clipboard style={styles.icon} />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: COLORS.BASE[400]
  },

  icon: {
    marginTop: 48,
    marginBottom: 16,
  },

  title: {
    color: COLORS.BASE[300],
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  text: {
    color: COLORS.BASE[300],
    fontSize: 14,
    marginBottom: 16,
  }
});