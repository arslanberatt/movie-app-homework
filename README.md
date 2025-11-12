# 🎬 Movie App

Modern ve kullanıcı dostu bir React Native film uygulaması. Expo Router, Firebase ve NativeWind ile geliştirilmiştir.

## 🚀 Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/arslanberatt/movie-app-homework.git
cd movie-app-homework
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. `.env` dosyası oluşturun:
```bash
cp .env.example .env
```

4. `.env` dosyasını düzenleyip Firebase bilgilerinizi ekleyin:
```env
EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key_here
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id_here
EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
```

5. Uygulamayı çalıştırın:
```bash
# iOS için
npm run ios

# Android için
npm run android

# Web için
npm run web
```

## 📸 Ekran Görüntüleri

<div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center;">
  <div style="flex: 1; min-width: 200px; max-width: 300px;">
    <img src="assets/Simulator Screenshot - iPhone 16 Plus - 2025-11-12 at 17.16.44.png" alt="Ana Sayfa" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
    <p style="text-align: center; margin-top: 8px; font-weight: 500;">Ana Sayfa</p>
  </div>
  <div style="flex: 1; min-width: 200px; max-width: 300px;">
    <img src="assets/Simulator Screenshot - iPhone 16 Plus - 2025-11-12 at 17.16.58.png" alt="Film Listesi" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
    <p style="text-align: center; margin-top: 8px; font-weight: 500;">Film Listesi</p>
  </div>
  <div style="flex: 1; min-width: 200px; max-width: 300px;">
    <img src="assets/Simulator Screenshot - iPhone 16 Plus - 2025-11-12 at 17.17.02.png" alt="Film Detayları" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
    <p style="text-align: center; margin-top: 8px; font-weight: 500;">Film Detayları</p>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; margin-top: 24px;">
  <div style="flex: 1; min-width: 200px; max-width: 300px;">
    <img src="assets/Simulator Screenshot - iPhone 16 Plus - 2025-11-12 at 17.17.05.png" alt="Film Ekleme" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
    <p style="text-align: center; margin-top: 8px; font-weight: 500;">Film Ekleme</p>
  </div>
  <div style="flex: 1; min-width: 200px; max-width: 300px;">
    <img src="assets/Simulator Screenshot - iPhone 16 Plus - 2025-11-12 at 17.41.41.png" alt="Film Düzenleme" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
    <p style="text-align: center; margin-top: 8px; font-weight: 500;">Film Düzenleme</p>
  </div>
  <div style="flex: 1; min-width: 200px; max-width: 300px;">
    <img src="assets/Simulator Screenshot - iPhone 16 Plus - 2025-11-12 at 17.42.00.png" alt="Favoriler" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
    <p style="text-align: center; margin-top: 8px; font-weight: 500;">Favoriler</p>
  </div>
</div>
