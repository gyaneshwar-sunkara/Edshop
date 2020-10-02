# Initialize App

    npx react-native init Edshop

# Install Dependencies

## Navigation

- Navigation Module

        npm install @react-navigation/native

- React Navigation Dependencies

        npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

- Material Bottom Tabs Navigator

        npm install @react-navigation/material-bottom-tabs

## UI

    react-native-paper

## Icons

    npm install react-native-vector-icons

Append `Edshop\android\app\build.gradle` with

    apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

# Disable Resizable Activity

Update `Edshop\android\app\src\main\AndroidManifest.xml`

        <application
        ...
        ...
        android:resizeableActivity="false">

## App Icons & Splash Screen

- ic_launcher

  Move folders from `Edshop\resources\ic_launcher\res` to `Edshop\android\app\src\main\res`

- ic_launcher_round

  Move folders from `Edshop\resources\ic_launcher_round\res` to `Edshop\android\app\src\main\res`

- screen

  Move folders from `Edshop\resources\splash_screen` to `Edshop\android\app\src\main\res`
