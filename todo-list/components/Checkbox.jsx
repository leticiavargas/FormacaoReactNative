import { TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import { Check } from "../assets";

export function Checkbox({ checked, onPress }) {
  const checkedStyle = checked ? { backgroundColor: COLORS.PURPLE.DARK } : { borderColor: COLORS.BLUE.MEDIUM,  borderWidth: 1 };
  return (
   <TouchableOpacity onPress={onPress} style={{...styles.container, ...checkedStyle}}>
     {checked && <Check style={styles.check} />}
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({ 
  container: {
    width: 18,
    height: 18,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
  },

  check: {
    width: 16,
    height: 16,
  }
 });