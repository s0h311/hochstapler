import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  name: "Hochstapler",
  slug: "hochstapler",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/hochstapler-icon.png",
  scheme: "hochstapler",
  userInterfaceStyle: "dark",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#f2f0f2",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "de.soheilnazari.hochstapler",
    config: {},
    backgroundColor: "#191970",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#f2f0f2",
    },
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: ["expo-router"],
  experiments: {
    typedRoutes: true,
  },
});
