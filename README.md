# Appium Test in Typescript (Node.js)

This project demonstrates how to use **Appium** with **WebDriverIO** to automate mobile application testing on Android using Typescript (Node.js). It follows the **Page Object Model (POM)** for better maintainability and scalability.

## 📌 Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Appium](https://appium.io/)
- Java JDK (for Android automation)
- Android Studio (for Android)
- XCode (for iOS)
- Android SDK & Emulator or a physical Android device
- [WebDriverIO](https://webdriver.io/)

### Prerequisites for Android

1. To verify Node.js and npm:
    ```sh
   node -v
   npm -v
   ```

2. To verify Appium:
   ```sh
   appium -v
   ```

3. Install drivers for Android (UiAutomator2 driver):
    ```sh
    appium driver install uiautomator2
    ```

4. Install drivers for iOS (XCUITest driver):
    ```sh
    appium driver install xcuitest
    ```

5. To check installed drivers:
   ```sh
   appium driver list
   ```

6. Install the Appium Doctor to check your environment:
   ```sh
   npm install -g @appium/doctor
   ```

7. Run the doctor to ensure everything is set up correctly:
   ```sh
   appium-doctor
   ```

8. Ensure the Android emulator or real device is connected before running tests:
   ```sh
   adb devices
   ```


### Prerequisites for iOS

1. Check Xcode & WebDriverAgent (WDA) Setup for iOS
   ```sh
   xcode-select --install
   ```

2. Confirm the correct path, should see something like `/Applications/Xcode.app/Contents/Developer`
   ```sh
   xcode-select -p
   ```

3. Manually Build WebDriverAgent

   Since WebDriverAgent is part of `appium-xcuitest-driver`, try reinstall:
    ```sh
    appium driver install xcuitest
    ```

   This should install WebDriverAgent in the correct location. After installation, check if WebDriverAgent is available:
   ```sh
   find / -name "WebDriverAgent.xcodeproj" 2>/dev/null
   ```
   If found, note the path.
   Else, manually clone and set up WebDriverAgent.

4. Go to your working directory:
   ```sh
   cd ~
   ```

5. Clone WebDriverAgent:
   ```sh
   git clone https://github.com/appium/WebDriverAgent.git
   ```

6. Go into the WebDriverAgent folder:
   ```sh
   cd WebDriverAgent
   ```

7. Open WebDriverAgent in Xcode:
   ```sh
   open WebDriverAgent.xcodeproj
   ```

8. Configure WebDriverAgent in Xcode

   ```
   Now that WebDriverAgent is open in Xcode:
      
   * Select "WebDriverAgent" in the left panel.
   * Go to "Signing & Capabilities" > Select your Apple ID under Team.
   * If you don’t have an Apple ID added, go to Xcode > Settings > Accounts and add it.
   * Choose your iOS simulator (e.g., iPhone 15, iOS 17.2)
   * Build the project:
      - Click Product > Build.
      - If the build succeeds, click Product > Test.
   ```

9. Link WebDriverAgent to Appium


* Find WebDriverAgent’s directory, it should return something like `/Users/your-username/WebDriverAgent`
   ```sh
   pwd
   ```

* Run Appium with this WebDriverAgent path:
   ```sh
   appium --webdriveragent-root /Users/your-username/WebDriverAgent --relaxed-security
   ```


## 🚀 Installation & Setup

1. **Clone the Repository**
   ```sh
   git clone https://github.com/RochelleAbeywickrama/appium-wdio-ts.git
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

Note: Add application APK file to `src/app` directory before test run.

4. **Start Appium Server**
   ```sh
   appium --relaxed-security
   ```


## ▶️ Running Tests

To execute the test on Android + App:
   ```sh
   npm run run:AndroidApp
   ```

To execute the test on Android + Chrome:
   ```sh
   npm run run:AndroidChrome
   ```

## 📊 Test Results & Reporting

Generate Allure report locally:
   ```sh
   npm run allure:report
   ```


## 🔗 Reference

Downloads:

[Android Studio Download](https://developer.android.com/studio)

[XCode Download](https://developer.apple.com/xcode/)

[Appium inspector](https://github.com/appium/appium-inspector/releases)


Reading materials:
[How to Build your own framework](https://rochellea.medium.com/build-your-own-mobile-automation-framework-appium-2-x-webdriverio-and-typescript-bbc5b5a586f7)

[Beginner's Guide to Appium 2.0](https://medium.com/@iamfaisalkhatri/beginners-guide-to-appium-2-0-d8118b31837c)

[How to perform Android mobile automation using WebdriverIO Appium with TypeScript](https://www.youtube.com/watch?v=zWm0F3-ayQw)

---

Happy Testing! 🚀

