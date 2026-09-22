import { Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"

type Props = {
  name: string
  status: string
  current: string
  onDetails: () => void
}

export function Tracker({ name, status, current, onDetails }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>

        <Text style={styles.status} numberOfLines={1}>
          {status}
        </Text>

        <Text style={styles.current} numberOfLines={1}>
          {current}
        </Text>
      </View>

      <TouchableOpacity onPress={onDetails}>
        <MaterialIcons name="more-horiz" size={30} color={colors.gray[400]} />

      </TouchableOpacity>
    </View>
  )
}
