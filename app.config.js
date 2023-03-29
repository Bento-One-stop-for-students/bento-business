export default () => ({
  expo: {
    name: "bento-business",
    slug: "bento-business",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "cover",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
      googleServicesFile: "./google-services.json",
      package: "com.devesh16.bentobusiness",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: [
      "@react-native-firebase/app",
      "@react-native-firebase/perf",
      "@react-native-firebase/crashlytics",
    ],
    extra: {
      firebaseEnv: process.env.FIREBASE_ENV,
      eas: {
        projectId: "4ae97e14-20dd-43d7-bbab-c38b4698e397",
      },
      firebaseUrl:
        process.env.FIREBASE_ENV == "prod"
          ? "https://us-central1-bento-5ad4e.cloudfunctions.net/appProd/api"
          : "https://us-central1-bento-5ad4e.cloudfunctions.net/app/api",
    },
  },
});
