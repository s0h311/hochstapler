import { TextInput as RTextInput, StyleSheet, ViewStyle } from "react-native";

type TextInputProps = {
  style?: ViewStyle;
  keyboardType: "numeric" | "default";
  placeholder: string;
  onChangeText: (text: string) => void;
};

export default function TextInput({
  style = {},
  keyboardType = "default",
  placeholder,
  onChangeText,
}: TextInputProps) {
  return (
    <RTextInput
      style={{ ...styles.textInput, ...style }}
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
    ></RTextInput>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});
