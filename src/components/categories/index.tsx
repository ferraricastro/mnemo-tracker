import { FlatList } from "react-native"

import { Category } from "@/components/category"
import { categories } from "@/utils/categories"
import { styles } from "./styles"

type Props = {
  showAll?: boolean
  selected: string
  onChange: (category: string) => void
}

export function Categories({ showAll = false, selected, onChange }: Props) {
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
        <Category
          name={item.name}
          icon={item.icon}
          isSelected={item.name === selected}
          onPress={() => onChange(item.name)}
        />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
    />
  )
}
