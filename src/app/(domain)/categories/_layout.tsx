import { Stack } from "expo-router";

export default function CategoriesLayout() {
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
          title: "Criar categoria", 
        }} 
      />
      <Stack.Screen 
        name="edit/[categoryId]" 
        options={{
          title: "Editar categoria", 
        }} 
      />
    </Stack>
  );
}
