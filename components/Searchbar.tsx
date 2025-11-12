import { View, TextInput } from 'react-native';
import { SearchNormal } from 'iconsax-react-nativejs';
import React from 'react';

const Searchbar = () => {
  return (
    <View className="mt-3 flex-row items-center justify-between rounded-xl bg-gray-100">
      <View className="flex-row items-center gap-2 p-4">
        <SearchNormal color={'#acaaca'} size={22} variant="Outline" />
        <TextInput placeholder={'Search Movie...'} placeholderTextColor="#9AA0A6" />
      </View>
    </View>
  );
};

export default Searchbar;
