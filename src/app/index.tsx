import { Text, View, StyleSheet } from "react-native"

import { colors } from "@/styles/colors"

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.blue[900],
    fontSize: 22,
  }
})
