import { View, Image, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import { Add, Heart } from 'iconsax-react-nativejs';
import { useMovie } from '@/hooks/useMovie';

const Index = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { data: movie } = useMovie(id);
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <Heart color="#fb6364" size={28} variant="Bold" />,
        });
    }, []);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView>
                <View className="gap-1 px-24 pt-6">
                    <Image
                        source={{
                            uri: movie?.image,
                        }}
                        style={{ width: '100%', height: 400, borderRadius: 24 }}
                    />
                    <Text className="mt-4 self-center text-lg font-semibold text-gray-800">
                        {movie?.title}
                    </Text>
                    <View className="flex-row gap-2 self-center">
                        <Text className="text-sm text-gray-500">• {movie?.category}</Text>
                        <Text className="text-sm text-gray-500">• {movie?.year}</Text>
                        <Text className="text-sm text-gray-500">• {movie?.duration}</Text>
                    </View>
                </View>
                <View className="p-8">
                    <Text className="mt-4 text-lg font-semibold text-gray-800">Synopsis</Text>
                    <Text className="mt-1 text-sm text-gray-500">{movie?.description}</Text>
                </View>
            </ScrollView>
            <View className="absolute bottom-0 left-0 right-0 flex-row gap-6 p-8 pt-6 bg-white">
                <TouchableOpacity className="border-1 flex-1 flex-row items-center justify-center rounded-2xl border border-gray-300 py-4">
                    <Add />
                    <Text className="font-semibold text-gray-700">Add to watchlist</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => router.push(`/movie/${movie?.id}/edit`)}
                    className="flex-1 items-center justify-center rounded-2xl bg-[#fb6364] py-4">
                    <Text className="font-semibold text-white">Edit Now</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Index;
