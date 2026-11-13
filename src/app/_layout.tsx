import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

import queryClient from "@/api/client";

const isUserAuthenticated = true // Variável temporária para determinar autenticação

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
