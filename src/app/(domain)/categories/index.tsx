import { useRouter } from "expo-router";
import { Text, View, StyleSheet, Button } from "react-native";

export default function Index() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text>Categorias</Text>
      <Button title="Criar categoria" onPress={() => router.navigate('/categories/create')}/>
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
