import { View, Text, Image } from 'react-native';
import React from 'react';
import { TextalignLeft } from 'iconsax-react-nativejs';

const Header = () => {
  return (
    <View className="flex-row items-center justify-between">
      <TextalignLeft />
      <View className="rounded-full bg-white p-2">
        <Image
          source={require('@/assets/avatar.png')}
          style={{ width: 48, height: 48, borderRadius: 100 }}
        />
      </View>

    </View>
  );
};

export default Header;
