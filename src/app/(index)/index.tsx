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

      <Category name="Todos" icon="view-list" isSelected={true} />
      <Category name="Anime" icon="movie" isSelected={false} />
      <Category name="Documentário" icon="movie" isSelected={false} />
      <Category name="Filme" icon="movie" isSelected={false} />
      <Category name="HQ" icon="book" isSelected={false} />
      <Category name="Livro" icon="book" isSelected={false} />
      <Category name="Mangá" icon="book" isSelected={false} />
      <Category name="Série" icon="movie" isSelected={false} />
    </View>
  )
}
