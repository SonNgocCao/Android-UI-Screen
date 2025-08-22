# Android UI Screen

This is an Android application built with Kotlin and Jetpack Compose for inspection and safety management. The original design is available at https://www.figma.com/design/Q03tO5BxRpScBoj0c0wH1D/Android-UI-Screen.

## Features

- Search functionality for inspections
- Filter options by Type, Status, Date, and Location
- Item cards displaying inspection details
- Bottom navigation with History, Pending, Map, and Settings tabs
- Material Design 3 UI components
- Different inspection types: Electrical, Fire, Safety, Structural
- Status tracking: Pending Review, Passed, Failed, Needs Attention

## Building and Running

### Prerequisites

- Android Studio Hedgehog | 2023.1.1 or later
- JDK 8 or higher
- Android SDK with API level 24 or higher

### Build Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/SonNgocCao/Android-UI-Screen.git
   cd Android-UI-Screen
   ```

2. Open the project in Android Studio or build from command line:
   ```bash
   ./gradlew build
   ```

3. Run the app:
   ```bash
   ./gradlew installDebug
   ```

## Technology Stack

- **Kotlin** - Programming language
- **Jetpack Compose** - Modern UI toolkit
- **Material Design 3** - Design system
- **Android Architecture Components** - For robust architecture

## Project Structure

```
app/src/main/java/com/androiduiscreen/
├── data/                    # Data models and mock data
├── ui/
│   ├── components/          # Reusable UI components
│   └── theme/              # App theming
├── MainActivity.kt         # Main activity
└── InspectionApp.kt       # Main app composable
```