import TextInput from "@/components/UI/TextInput";
import { getRandomPlayer, getRandomWord } from "@/hooks/random";
import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const [totalPlayers, setTotalPlayers] = useState<number>(3);
  const [totalImposters, setTotalImposters] = useState<number>(1);

  function handleTotalPlayersChange(numberAsString: string): void {
    setTotalPlayers(Number(numberAsString));
  }

  function handleTotalImpostersChange(numberAsString: string): void {
    setTotalImposters(Number(numberAsString));
  }

  function handleStart(): void {
    if (
      totalPlayers < 3 ||
      totalPlayers > 10 ||
      totalImposters < 1 ||
      totalImposters > 5
    ) {
      return;
    }

    const players = getRandomPlayer(totalPlayers, totalImposters);
    const word = getRandomWord();

    router.replace({
      pathname: "/(cards)",
      params: {
        players,
        word,
      },
    });
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: "70%" }}
        keyboardType="numeric"
        placeholder="Anzahl der Spieler"
        onChangeText={handleTotalPlayersChange}
      />

      <TextInput
        style={{ width: "70%" }}
        keyboardType="numeric"
        placeholder="Anzahl der Imposter"
        onChangeText={handleTotalImpostersChange}
      />

      <Button title="Starten" onPress={handleStart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
