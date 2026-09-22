import { colors } from "@/styles/colors"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  details: {
    flex: 1,
  },
  name: {
    color: colors.gray[100],
    fontSize: 16,
    fontWeight: "600",
  },
  status: {
    color: colors.gray[400],
    fontSize: 14,
  },
  current: {
    color: colors.gray[400],
    fontSize: 14,
  },
})
