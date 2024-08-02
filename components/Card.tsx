import { Player } from "@/types";
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

type CardProps = {
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress: () => void;
};

export default function Card({
  title,
  style = {},
  textStyle = {},
  onPress,
}: CardProps) {
  return (
    <Pressable style={{ ...styles.container, ...style }} onPress={onPress}>
      <Text style={{ ...styles.text, ...textStyle }}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
  },
  text: {
    fontSize: 30,
  },
});
