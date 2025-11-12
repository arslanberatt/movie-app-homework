import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/services/firebaseConfig';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import { router, useLocalSearchParams } from 'expo-router';
import { useMovie } from '@/hooks/useMovie';
import { useUpdateMovie } from '@/hooks/useUpdateMovie';

const Edit = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: movie } = useMovie(id);
  const { mutateAsync: updateMovie } = useUpdateMovie();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (movie) {
      setTitle(movie.title || '');
      setCategory(movie.category || '');
      setDuration(movie.duration || '');
      setYear(movie.year || '');
      setDescription(movie.description || '');
      setImage(movie.image || '');
    }
  }, [movie]);

  const handleUpload = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos', 'livePhotos'],
      allowsEditing: false,
      aspect: [2, 3],
      quality: 0.8,
    });

    if (result.canceled) {
      alert('Lütfen bir resim seçin');
      return;
    }

    const imagePath = result.assets[0].uri;
    const manipulated = await manipulateAsync(imagePath, [], {
      compress: 0.85,
      format: SaveFormat.WEBP,
    });

    const response = await fetch(manipulated.uri);
    const blob = await response.blob();

    const filename = imagePath.substring(imagePath.lastIndexOf('/') + 1) + '.webp';
    const storageRef = ref(storage, filename);
    await uploadBytes(storageRef, blob);
    const downloadUrl = await getDownloadURL(storageRef);
    setImage(downloadUrl);
    alert('Dosya yüklendi: ' + downloadUrl);
  };

  const handleUpdate = async () => {
    await updateMovie(
      {
        id,
        title,
        category,
        duration,
        year,
        description,
        image,
      },
      {
        onSuccess: () => {
          router.back();
        },
      }
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-8 pb-12">
        <View className="mt-6 gap-8">
          <View className="gap-3">
            <Text className="text-3xl font-semibold text-gray-800">Edit Movie</Text>
            <Text className="text-base text-slate-400">
              Update the details below to edit the movie card that appears in the home feed.
            </Text>
          </View>

          <TouchableOpacity onPress={handleUpload}>
            <View className="flex-row gap-5 rounded-3xl bg-[#fb6364] p-[6px]">
              <View className="h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-white">
                {image ? (
                  <Image source={{ uri: image }} className="h-full w-full" resizeMode="cover" />
                ) : (
                  <View className="items-center gap-3 px-6">
                    <Ionicons name="image-outline" size={32} color="#fb6364" />
                    <Text className="text-center text-sm font-medium text-gray-400">
                      Upload to preview it instantly.
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>

          <View className="gap-6">
            <View className="gap-2">
              <Text className="text-base font-semibold text-gray-700">Movie Title</Text>
              <TextInput
                className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-800"
                value={title}
                onChangeText={setTitle}
                placeholder="Example: Gen V"
                placeholderTextColor="#9AA0A6"
              />
            </View>

            <View className="gap-2">
              <Text className="text-base font-semibold text-gray-700">Genres</Text>
              <TextInput
                className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-800"
                value={category}
                onChangeText={setCategory}
                placeholder="Action, Sci-Fi, Comedy"
                placeholderTextColor="#9AA0A6"
              />
            </View>

            <View className="flex-row gap-4">
              <View className="flex-1 gap-2">
                <Text className="text-base font-semibold text-gray-700">Release Year</Text>
                <TextInput
                  className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-800"
                  value={year}
                  onChangeText={setYear}
                  placeholder="2025"
                  placeholderTextColor="#9AA0A6"
                  keyboardType="number-pad"
                  maxLength={4}
                />
              </View>
              <View className="flex-1 gap-2">
                <Text className="text-base font-semibold text-gray-700">Duration</Text>
                <TextInput
                  className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-800"
                  value={duration}
                  onChangeText={setDuration}
                  placeholder="8 Episodes / 2h 10m"
                  placeholderTextColor="#9AA0A6"
                />
              </View>
            </View>
            <View className="gap-2">
              <Text className="text-base font-semibold text-gray-700">Synopsis</Text>
              <TextInput
                className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-800"
                value={description}
                onChangeText={setDescription}
                placeholder="Describe the story, cast highlights or why this movie matters."
                placeholderTextColor="#9AA0A6"
                multiline
                numberOfLines={6}
                textAlignVertical="top"
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 flex-row gap-6 bg-white p-8 pt-6">
        <TouchableOpacity
          onPress={handleUpdate}
          className="flex-1 items-center justify-center rounded-xl bg-[#fb6364] py-4">
          <Text className="text-lg font-semibold text-white">Save Movie</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Edit;
