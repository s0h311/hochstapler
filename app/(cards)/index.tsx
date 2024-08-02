import Card from "@/components/Card";
import { Player } from "@/types";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CardsScreen() {
  const { players: playersString, word } = useLocalSearchParams<{
    players: string;
    word: string;
  }>();

  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    if (playersString) {
      const newPlayers = playersString.split(",") as Player[];

      setPlayers(newPlayers);
    }
  }, []);

  const [currentPlayer, setCurrentPlayer] = useState<number>(0);
  const [isTransition, setIsTransition] = useState<boolean>(false);

  function handleCardClick(): void {
    setIsTransition(true);
    setCurrentPlayer((current) => current + 1);
  }

  return (
    <View style={styles.container}>
      {currentPlayer < players.length ? (
        <View style={styles.cardsContainer}>
          {isTransition ? (
            <Card
              style={{
                borderColor: "lightgoldenrodyellow",
              }}
              textStyle={{
                color: "lightgoldenrodyellow",
              }}
              title="Tippen"
              onPress={() => setIsTransition(false)}
            />
          ) : (
            <Card
              style={{
                borderColor:
                  players[currentPlayer] === "regular"
                    ? "lightblue"
                    : "lightcoral",
              }}
              textStyle={{
                color:
                  players[currentPlayer] === "regular"
                    ? "lightblue"
                    : "lightcoral",
              }}
              title={players[currentPlayer] === "regular" ? word : "Imposter"}
              onPress={handleCardClick}
            />
          )}
        </View>
      ) : (
        <Text
          style={{
            fontSize: 30,
            color: "lightgoldenrodyellow",
          }}
        >
          Viel Spaß
        </Text>
      )}

      <Link replace href="/(home)">
        Zurück
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
  cardsContainer: {
    width: "80%",
    aspectRatio: "2/3",
  },
});
