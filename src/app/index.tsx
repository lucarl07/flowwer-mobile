import { useRouter } from "expo-router";
import { Text, View, StyleSheet, Button } from "react-native";

export default function Index() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text>Página de Aterissagem (Landing Page)</Text>
      <Button title="Ir para o dashboard" onPress={() => router.navigate('/dashboard')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
