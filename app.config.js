import 'dotenv/config';

export default {
  expo: {
    name: 'Speech',
    slug: 'Speech',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'cover',
      backgroundColor: '#F0F1F2',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      package: 'com.merhaba.adis',
    },
  },
  adaptiveIcon: {
    foregroundImage: './assets/adaptive-icon.png',
  },
  web: {
    favicon: './assets/favicon.png',
  },

  extra: {
    apiKey: process.env.apiKey,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
  },
};
