import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Search = () => {
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <ScrollView>
                <View className="px-8 mt-6 gap-8">
                    <View className="gap-1">
                        <Text className="text-3xl font-semibold text-gray-800">Favorite Movies</Text>
                        <Text className="text-base text-slate-400">Browse your favorite movies here!</Text>
                    </View>
                    <FlatList
                        data={[
                            {
                                id: '1',
                                model: 'Pluribus',
                                category: ['Drama', 'Thriller'].join(', '),
                                image: 'https://dizipal1905.com/storage/2025/11/pluribus-58109-poster-200x300.webp'
                            }
                            , {
                                id: '4',
                                model: 'Gen V',
                                category: ['Action', 'Sci-Fi'].join(', '),
                                image: 'https://dizipal1905.com/storage/2024/10/gen-v-36610-poster-683x1024.webp'
                            }]}
                        keyExtractor={(i) => i.id}
                        renderItem={({ item }: { item: { id: string; model: string; category: string; image: string } }) => (
                            <View className="w-[48%]">
                                <View className="gap-2">
                                    <View className="rounded-2xl overflow-hidden bg-white shadow ">
                                        <Image source={{ uri: item.image }} style={{ width: '100%', height: 240, }} />
                                    </View>
                                    <Text numberOfLines={1} className="text-base font-semibold text-gray-800">
                                        {item.model}
                                    </Text>
                                    <Text numberOfLines={1} className="text-sm text-gray-500">{item.category}</Text>
                                </View>
                            </View>

                        )}
                        numColumns={2}
                        scrollEnabled={false}
                        contentContainerClassName="gap-6"
                        columnWrapperStyle={{ gap: 16 }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Search