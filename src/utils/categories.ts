import { MaterialIcons } from "@expo/vector-icons"

type Category = {
  id: string
  name: string
  icon: keyof typeof MaterialIcons.glyphMap
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Animes",
    icon: "movie",
  },
  {
    id: "2",
    name: "Documentários",
    icon: "movie",
  },
  {
    id: "3",
    name: "Filmes",
    icon: "movie",
  },
  {
    id: "4",
    name: "HQs",
    icon: "book",
  },
  {
    id: "5",
    name: "Jogos",
    icon: "games",
  },
  {
    id: "6",
    name: "Livros",
    icon: "book",
  },
  {
    id: "7",
    name: "Mangás",
    icon: "book",
  },
  {
    id: "8",
    name: "Séries",
    icon: "movie",
  },
]
