# TV Maze React Native

## Requirements MacOS
Install the latest LTS version of [Node.js](https://nodejs.org/en), [Yarn](https://yarnpkg.com) and [Watchman](https://facebook.github.io/watchman/docs/install)

Both can be installed with [Homebrew](https://brew.sh):
```
brew install node
brew install watchman
```

### iOS
React Native requires a later Ruby version than is shipped with macOS 13.2. Required Ruby version is 2.7.6. Use a Ruby version manager of your choice to install it.

Install [Xcode](https://apps.apple.com/us/app/xcode/id497799835) from the *Mac App Store*. You will also need to install the Xcode Command Line Tools and a simulator for the iOS version you want to use.

See full instructions [here](https://reactnative.dev/docs/environment-setup?os=macos&platform=ios).

### Android
Install the OpenJDK distrubution Azul Zulu with Homebrew:
```
brew tap homebrew/cask-versions
brew install --cask zulu11
```

Install [Android Studio](https://developer.android.com/studio/index.html). Make sure to include the following options during installation:
- Android SDK
- Android SDK Platform
- Android Virtual Device

React Native requires the SDK version Android 13 (Tiramisu), so make sure to select it with the SDK Manager in Android Studio.

Configure the ANDROID_HOME environment variable in your shell config file (`~/.zprofile`, `~/.zshrc`, `~/.bash_profile` or `~/.bashrc`):
```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

See full instructions [here](https://reactnative.dev/docs/environment-setup?os=macos&platform=android)

## Installation
To clone the repository using SSH:
```
git clone git@github.com:Levis92/TVMazeReactNative.git

cd TVMazeReactNative/TVMaze
```

Install dependencies
```
yarn install
```

### iOS
Install iOS specific dependencies
```
npx pod-install ios
```

## Running the application
To run
```
npx react-native start
```

Alternatively for iOS
```
npx react-native run-ios
```
or Android
```
npx react-native run-android
```


## Time constraints regarding the assignment
My experience with React Native is limited and it was a while since I've used it so some time went into making sure I have the correct software versions installed on my machine and some debugging of the environment. Given more time I would have liked to work more on e.g. completing the support for dark mode, creating more extensive reusable theme styles, writing tests (had some issues with the configuration of Jest not working with React Navigation), using an i18n library.
