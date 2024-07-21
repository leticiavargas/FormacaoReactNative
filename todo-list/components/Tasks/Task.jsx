import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { Checkbox } from "../Checkbox";
import { Button } from "../Button";

export function Task({ checked, description, onPress, onRemove }) {

  const checkedStyle = checked ? { color: COLORS.BASE[300], textDecorationLine: 'line-through' } : { color: COLORS.BASE[100] };

  return (
    <View style={styles.container}>
      <Checkbox checked={checked} onPress={onPress}  />
      <Text style={{...styles.description, ...checkedStyle}}>{description}</Text>
      <Button type="delete" onPress={onRemove} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: COLORS.BASE[500],
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.BASE[400],
    gap: 8,
    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    flexWrap: 'wrap',
    flexShrink: 1,
    flex: 1,
  },
});