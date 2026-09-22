import { MaterialIcons } from "@expo/vector-icons"

type Category = {
  id: string
  name: string
  icon: keyof typeof MaterialIcons.glyphMap
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Anime",
    icon: "movie",
  },
  {
    id: "2",
    name: "Documentário",
    icon: "movie",
  },
  {
    id: "3",
    name: "Filme",
    icon: "movie",
  },
  {
    id: "4",
    name: "HQ",
    icon: "book",
  },
  {
    id: "5",
    name: "Livro",
    icon: "book",
  },
  {
    id: "6",
    name: "Mangá",
    icon: "book",
  },
  {
    id: "7",
    name: "Série",
    icon: "movie",
  },
]
