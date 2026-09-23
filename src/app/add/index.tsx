import { useState } from "react"
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Text, TouchableOpacity, View, Alert } from "react-native"

import { colors } from "@/styles/colors"
import { styles } from "./styles"

import { Button } from "@/components/button"
import { Categories } from "@/components/categories"
import { Input } from "@/components/input"

export default function Add() {
  const [category, setCategory] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState("")
  const [current, setCurrent] = useState("")

  function handleAdd(){
    if(!category){
      return Alert.alert("Categoria", "Selecione a categoria")
    }

    if (!name.trim()) {
      return Alert.alert("Nome", "Informe o nome")
    }

    if (!status.trim()) {
      return Alert.alert("Status", "Informe o status")
    }

    console.log({ category, name, status, current })
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.navigate("/(index)")}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.lable}>Selecione uma categoria</Text>
      <Categories onChange={setCategory} selected={category} />

      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} />
        <Input placeholder="Status" onChangeText={setStatus} />
        <Input placeholder="Último lido/assistido" onChangeText={setCurrent} />
        <Button title="Adicionar" onPress={handleAdd}/>
      </View>
    </View>
  )
}
