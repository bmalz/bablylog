import * as React from "react";
import { StyleSheet, Alert } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import EventButton from "../components/EventButton";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <EventButton
          title="Sleep"
          subtitle="Set start of sleep"
          icon="sleep"
          onPress={() => Alert.alert("BABYLOG", "Sleep")}
        />
        <EventButton
          title="Wake up"
          subtitle="Set start of wake up"
          icon="sleep-off"
          onPress={() => Alert.alert("BABYLOG", "Wake up")}
        />
        <EventButton
          title="Feed"
          subtitle="Set feed time"
          icon="food-variant"
          onPress={() => Alert.alert("BABYLOG", "Feed")}
        />
        <EventButton title="Bath" subtitle="Set bath time" icon="duck" onPress={() => Alert.alert("BABYLOG", "Bath")} />
        <EventButton
          title="Diaper"
          subtitle="Set diaper change time"
          icon="emoticon-poop"
          onPress={() => Alert.alert("BABYLOG", "Diaper")}
        />
      </View>
      <EditScreenInfo path="/screens/TabOneScreen.js" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
