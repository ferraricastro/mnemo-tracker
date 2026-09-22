import { FlatList } from "react-native"

import { Category } from "@/components/category"
import { categories } from "@/utils/categories"
import { styles } from "./styles"

export function Categories() {
  const filterCategories = [
    {
      id: null,
      name: "Todos",
      icon: "view-list" as const,
    },
    ...categories,
  ]
  return (
    <FlatList
      data={filterCategories}
      keyExtractor={(item) => item.id ?? "all"}
      renderItem={({ item }) => (
        <Category name={item.name} icon={item.icon} isSelected={false} />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
    />
  )
}
