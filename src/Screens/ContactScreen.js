import React from "react";
import { View, FlatList } from "react-native";
import Contact from "./Contact";

export default function ContactScreen() {
  const contacts = [
    { name: "Mhicky ", number: "024-004-2027" },
    { name: "Mhickyella", number: "055-901-1644" },
    { name: "Family", number: "6554-345-7898" },
    { name: "New Number", number: "343-354-8987" },
    { name: "Grajoe", number: "232-222-4565" },
    { name: "Dorsted", number: "054-675-9234" },
   
  ];

  return (
    <View>
        
      <FlatList
        data={contacts}
        renderItem={({ item }) => {
          return <Contact name={item.name} phone={item.number} />;
        }}
        keyExtractor={(item) => item.number}
      />
    </View>
  );
}

