import { Tabs } from "expo-router";

export default function DomainLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Início" }} />
      <Tabs.Screen name="transactions" options={{ title: "Movimentações" }} />
      <Tabs.Screen name="categories" options={{ title: "Categorias" }} />
      <Tabs.Screen name="goals" options={{ title: "Metas" }} />
    </Tabs>
  );
}
