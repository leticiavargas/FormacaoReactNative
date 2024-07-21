import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { COLORS } from "../constants/colors";
import { Plus, Trash} from '../assets';

export function Button({ type = 'create', ...rest }) {

 

  return (
    <TouchableOpacity 
      style={{
        ...styles.button,
        ...(type === 'create' && styles.createButton),
        ...(type === 'delete' && styles.deleteButton),
      }}
     {...rest}
    >
      {type === 'create' && <Plus width={16} height={16} />}
      {type === 'delete' && <Trash />}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  createButton: {
    backgroundColor: COLORS.BLUE.DARK,
    width: 52,
    height: 52,
    borderRadius: 8,
  },

  deleteButton: {
    backgroundColor: COLORS.NONE,
    width: 32,
    height: 32,
    borderRadius: 4,
  },

});