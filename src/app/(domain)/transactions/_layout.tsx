import { Stack } from "expo-router";

export default function TransactionsLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{
          headerShown: false, 
        }} 
      />
      <Stack.Screen 
        name="create" 
        options={{
          title: "Criar movimentação", 
        }} 
      />
      <Stack.Screen 
        name="edit/[transactionId]" 
        options={{
          title: "Editar movimentação", 
        }} 
      />
    </Stack>
  );
}
