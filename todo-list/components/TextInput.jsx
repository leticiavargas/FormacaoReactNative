import { TextInput as Input, View, StyleSheet } from 'react-native';
import { Button } from './Button';
import { COLORS } from '../constants/colors';

export function TextInput({ style, onPress, ...rest }) {
  return (
    <View style={{...styles.container, ...style}}>
      <Input
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        {...rest}
      />
      <Button type='create' onPress={onPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    gap: 4
  },
  
  input: {
    backgroundColor: COLORS.BASE[500],
    borderRadius: 6,
    flex: 1,
    height: 54,
    padding: 16,
    color: COLORS.BASE[100],
    fontSize: 16,
    borderColor: COLORS.BASE[700],
    borderWidth: 1,
    placeholderTextColor: COLORS.BASE[100],
  }

});
