import { MaterialIcons } from "@expo/vector-icons"
import { FlatList, Image, TouchableOpacity, View } from "react-native"

import { colors } from "@/styles/colors"
import { styles } from "./styles"

import { Categories } from "@/components/categories"
import { Tracker } from "@/components/tracker"

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.4}>
          <MaterialIcons name="add" size={32} color={colors.blue[300]} />
        </TouchableOpacity>
      </View>

      <Categories />

      <FlatList
        data={["1", "2", "3", "4"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Tracker
            name="One Piece"
            status="Acompanhando"
            current="cap. 1193"
            onDetails={() => console.log("Clicou!")}
          />
        )}
        style={styles.trackers}
        contentContainerStyle={styles.trackersContent}
      />
    </View>
  )
}
