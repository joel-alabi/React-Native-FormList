import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

export default function Contact({ name, phone }) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/bermix-studio-F7DAQIDSk98-unsplash.jpg")} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text>{phone}</Text>
      </View>

      <View >
        <MaterialIcons
          name="phone"
          size={25}
          color="#009cf5"
          style={styles.icon}
        />
      </View>

      <View>
        <MaterialCommunityIcons
          name="message-processing"
          size={25}
          color="#009cf5"
          style={styles.icon}
        />
      </View>

      <View>
        <SimpleLineIcons
          name="options-vertical"
          size={23}
          color="#a8a8a8"
          style={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 15,
    alignItems: "center",
    marginVertical: 10,
    
    
  },

  image: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },

  infoContainer: {
    justifyContent: "center",
    marginHorizontal: 15,
    flex: 4,
  },

  name: {
    fontWeight: "bold",
    fontSize: 17,
  },

  icon: {
    flex: 1,
    marginRight:6,
    marginVertical:12
  },
});