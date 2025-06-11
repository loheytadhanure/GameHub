# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# 🎮 GameHub

**GameHub** is a fun mobile app built with React Native and Expo Router.  
It features 4 engaging mini-games:

- 🧠 Memory Match (Concentration)
- ❌⭕ Tic Tac Toe with AI
- 🐹 Whack-a-Mole
- 🎵 Simon Says (Pattern Memory Game with Sound)

## 📱 Features

- Smooth animations and transitions
- Sound effects and background music
- Custom game UI for each level
- Responsive design for mobile

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/GameHub.git
cd GameHub
npm install
npx expo start
```

GameHub/
│
├── app/
│ ├── memory-match/
│ ├── tic-tac-toe/
│ ├── whack-a-mole/
│ ├── simon-says/
│
├── components/
│ ├── Header.tsx
│ ├── Footer.tsx
│ └── FlipCard.tsx
│
├── assets/
│ ├── bg.png
│ └── sound/
