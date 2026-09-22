import { MaterialIcons } from "@expo/vector-icons"
import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native"

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

      <Modal transparent visible={true}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Mangá</Text>
              <TouchableOpacity>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalTrackerName}>One Piece</Text>

            <Text style={styles.modalStatus}>Acompanhando</Text>

            <Text style={styles.modalCurrent}>cap. 1193</Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}
