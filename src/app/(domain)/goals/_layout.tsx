import { Stack } from "expo-router";

export default function GoalsLayout() {
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
          title: "Criar meta", 
        }} 
      />
      <Stack.Screen 
        name="edit/[goalId]" 
        options={{
          title: "Editar meta", 
        }} 
      />
    </Stack>
  );
}
