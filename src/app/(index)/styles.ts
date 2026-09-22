import { StyleSheet } from "react-native"

import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 52,
  },
  title: {
    color: colors.blue[900],
    fontSize: 22,
  },
  header: {
    paddingHorizontal: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    height: 32,
    width: 32,
  },

  trackers: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
  },
  trackersContent: {
    gap: 10,
    padding: 15,
    paddingBottom: 100,
  },

  modal: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.gray[900],
    borderTopWidth: 1,
    borderTopColor: colors.gray[800],
    paddingBottom: 42,
    padding: 24,
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  modalCategory: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: colors.gray[400],
  },
  modalTrackerName: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.gray[200],
  },
  modalStatus: {
    fontSize: 14,
    color: colors.gray[400],
  },
  modalCurrent: {
    fontSize: 14,
    color: colors.gray[400],
  },
  modalFooter: {
    width: "100%",
    flexDirection: "row",
    marginTop: 32,
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
    paddingVertical: 14,
  },
})
