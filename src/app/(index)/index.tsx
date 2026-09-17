import { MaterialIcons } from "@expo/vector-icons"
import { Image, TouchableOpacity, View } from "react-native"

import { colors } from "@/styles/colors"
import { styles } from "./styles"

import { Category } from "@/components/category"

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.4}>
          <MaterialIcons name="add" size={32} color={colors.blue[300]} />
        </TouchableOpacity>
      </View>

      <Category name="Todos" icon="view-list" />
      <Category name="Anime" icon="movie" />
      <Category name="Documentário" icon="movie" />
      <Category name="Filme" icon="movie" />
      <Category name="HQ" icon="book" />
      <Category name="Livro" icon="book" />
      <Category name="Mangá" icon="book" />
      <Category name="Série" icon="movie" />
    </View>
  )
}
