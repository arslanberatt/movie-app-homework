import '../global.css';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';

export default function Layout() {
  const [queryClient] = useState(new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="movie/[id]/index"
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: 'Movie Details',
            headerBackButtonDisplayMode: 'minimal',
            headerBackTitle: 'Anasayfa',
            headerTintColor: 'black',
          }}
        />
        <Stack.Screen
          name="movie/[id]/edit"
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: 'Edit Movie',
            headerBackButtonDisplayMode: 'minimal',
            headerTintColor: 'black',
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
