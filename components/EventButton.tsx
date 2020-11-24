import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "native-base";

type EventButtonProps = {
  title: string;
  subtitle: string;
  color?: string;
  icon: string;
};

const EventButton = ({ title, subtitle, color, icon }: EventButtonProps) => (
  <View style={{ width: 120, height: 120 }}>
    <View style={styles.container}>
      <Icon style={styles.icon} type="MaterialCommunityIcons" name={icon} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    margin: 5,
    overflow: 'hidden'
  },
  icon: {
    fontSize: 40,
    height: 50,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
  },
});

export default EventButton;
