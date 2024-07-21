import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export function TaskInfo({ title, type, counter }) {
  const titleColor = type === 'create' ? COLORS.BLUE.MEDIUM : COLORS.PURPLE.MEDIUM

  return (
    <View style={styles.container}>
      <Text style={{...styles.title, color: titleColor}} >{title}</Text>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{counter}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    gap: 8
  },

  title: {
    color: COLORS.BASE[100],
    fontSize: 14,
    fontWeight: 'bold',
  },

  counterContainer: {
    backgroundColor: COLORS.BASE[400],
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: "50%",
  },

  counterText: {
    color: COLORS.BASE[200],
    fontSize: 12,
    fontWeight: 'bold',
  },
});