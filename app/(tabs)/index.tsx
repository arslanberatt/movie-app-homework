import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import Searchbar from '@/components/Searchbar';
import { useMovies } from '@/hooks/useMovies';
import { Movie } from '../types/types';
import { router } from 'expo-router';

const Index = () => {
  const { data: movies } = useMovies();
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
        <View>
          <View className="px-8">
            <Header />
            <View className="gap-1 py-6">
              <Text className="text-2xl font-semibold text-gray-800">Hi, Brooklyn 👋</Text>
              <Text className="text-lg text-slate-400">Watch your favorite movie here!</Text>
            </View>
            <Searchbar />
            <View className="mt-12 flex-row items-center justify-between">
              <Text className="text-lg font-semibold text-gray-700">Categories</Text>
              <Text className="text-sm text-[#fb6364]">View all</Text>
            </View>
          </View>
          <FlatList
            className="mt-4 pl-8"
            data={[
              '🤠 Hollywood',
              '😂 Comedy',
              '❤️ Romance',
              '🕵️‍♂️ Crime',
              '👻 Horror',
              '🎬 Action',
              '🎭 Drama',
              '🎶 Musical',
            ]}
            renderItem={({ item }: { item: string }) => (
              <View className="flex items-center rounded-full bg-gray-100 px-4 py-2">
                <Text numberOfLines={1} className="text-sm text-gray-800">
                  {item}
                </Text>
              </View>
            )}
            keyExtractor={(i) => i}
            contentContainerClassName="gap-6"
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <View className="px-8">
            <View className="mt-12 flex-row items-center justify-between">
              <Text className="text-lg font-semibold text-gray-700">Latest Movie</Text>
              <Text className="text-sm text-[#fb6364]">View all</Text>
            </View>
            <FlatList
              className="flex mt-4"
              data={movies}
              keyExtractor={(movie) => movie.id}
              renderItem={({ item }: { item: Movie }) => (
                <View className="flex-1">
                  <View className="gap-1">
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => router.navigate(`/movie/${item.id}`)}>
                      <View className="overflow-hidden rounded-2xl bg-white shadow">
                        <Image
                          source={{ uri: item.image }}
                          style={{ width: '100%', height: 250 }}
                        />
                      </View>
                      <Text
                        numberOfLines={1}
                        className="mt-3 text-base font-semibold text-gray-800">
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                    <Text numberOfLines={1} className="text-sm text-gray-500">
                      {item.category}
                    </Text>
                  </View>
                </View>
              )}
              numColumns={2}
              scrollEnabled={false}
              contentContainerClassName="gap-6"
              columnWrapperStyle={{ gap: 16 }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
