import { COLORS } from "../constants/colors";
import { StyleSheet, View, Text } from "react-native";
import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <View style={styles.header}>
     <Logo width={110} height={32} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 172,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BASE[700],
  }
});