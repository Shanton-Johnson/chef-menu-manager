# Chefs Menu Manager

Chefs Menu Manager is a React Native app built with Expo that lets chefs manage their restaurant menu with ease. Users can add, remove, and filter dishes by course (starter, main, dessert), and see average prices per course at a glance.

---

## Features

- **Add new dishes** with name, description, course, and price.
- **Remove dishes** from the menu.
- **Filter menu items** by course to quickly browse starters, mains, or desserts.
- **View average prices** for each course on the home screen.
- Clean, dark-themed UI designed for a great user experience.

---

## Screenshots

*(Add screenshots here to showcase your app UI)*

---

## Installation

### Prerequisites

- Node.js and npm installed
- Expo CLI installed globally:  
  ```bash
  npm install -g expo-cli
Git (to clone the repo)

Getting Started
Clone the repository:

git clone https://github.com/yourusername/Chefs-Menu-Manager.git
cd Chefs-Menu-Manager
Install dependencies:

npm install
Run the app with Expo:

npx expo start
Follow the instructions in the Expo CLI to open the app on your iOS or Android device (Expo Go app) or on an emulator.

Usage
Home Screen:
Displays the menu items and the average prices for starters, mains, and desserts. Navigate to Chef's Menu or Filter Menu from here.

Chef's Menu:
Add new dishes by filling out the form (name, description, course, price). Remove existing dishes by tapping "Remove" next to each item.

Filter Menu:
Select a course from the dropdown picker to view only dishes in that category.

Project Structure
App/index.tsx - Main entry point with navigation setup and global state management.

screens/ - Folder containing all screen components:

HomeScreen.tsx

ChefMenuScreen.tsx

FilterMenuScreen.tsx

context/ - (Optional) Context provider for global menu state.

utils/ - Utility functions like average price calculations.

assets/ - Images and other static resources.

Dependencies
React Native

Expo

React Navigation

@react-native-picker/picker

Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

License
This project is licensed under the MIT License.

Contact
Created by Shanton -shantonjohnson98@gmail.com
