import { FlatList } from "react-native"

import { Category } from "@/components/category"
import { categories } from "@/utils/categories"
import { styles } from "./styles"

type Props = {
  showAll?: boolean
}

export function Categories({ showAll = false }: Props) {
  const filterCategories = [
    {
      id: null,
      name: "Todos",
      icon: "view-list" as const,
    },
    ...categories,
  ]

  const data = showAll ? filterCategories : categories

  return (
    <FlatList
      data={data}
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
