import { Stack, Slot } from "expo-router";

const isUserAuthenticated = true // Variável temporária para determinar autenticação

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Caso o usuário NÃO esteja logado: */}
      <Stack.Protected guard={!isUserAuthenticated}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
      </Stack.Protected>
      
      {/* Caso o usuário esteja logado: */}
      <Stack.Protected guard={isUserAuthenticated}>
        <Stack.Screen name="(domain)" />
      </Stack.Protected>
    </Stack>
  );
}
