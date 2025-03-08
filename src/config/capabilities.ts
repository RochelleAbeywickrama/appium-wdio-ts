export const androidAppiumConfig = {
    platformName: "Android",
    "appium:deviceName": process.env.ANDROID_DEVICE_NAME || "emulator-5554",
    "appium:platformVersion": process.env.ANDROID_PLATFORM_VERSION || "14",
    "appium:automationName": "UiAutomator2",
    "appium:app": "src/app/app.apk",
    "appium:autoGrantPermissions": true,
    "appium:chromedriverAutodownload": true,
    "appium:ignoreHiddenApiPolicyError": true,
};

export const androidChromeConfig = {
    platformName: "Android",
    "appium:deviceName": process.env.ANDROID_DEVICE_NAME || "emulator-5554",
    "appium:platformVersion": process.env.ANDROID_PLATFORM_VERSION || "14",
    "appium:automationName": "UiAutomator2",
    browserName: "Chrome",
    "appium:chromedriverAutodownload": true,
    "appium:chromedriverExecutable": "chromedriver-mobile/chromedriver"
};

export const iosAppiumConfig = {
    platformName: "iOS",
    "appium:deviceName": process.env.IOS_DEVICE_NAME || "iPhone 15",
    "appium:platformVersion": process.env.IOS_PLATFORM_VERSION || "17.2",
    "appium:automationName": "XCUITest",
    "appium:app": "src/app/app.ipa",
    "appium:autoGrantPermissions": true,
    "appium:showXcodeLog": true,
    "appium:wdaLaunchTimeout": 60000,
    "appium:wdaStartupRetries": 2,
};

export const iosSafariConfig = {
    platformName: "iOS",
    "appium:deviceName": process.env.IOS_DEVICE_NAME || "iPhone 15",
    "appium:platformVersion": process.env.IOS_PLATFORM_VERSION || "17.2",
    "appium:automationName": "XCUITest",
    browserName: "Safari",
    "appium:showXcodeLog": true,
    "appium:wdaLaunchTimeout": 60000,
    "appium:wdaStartupRetries": 2,
};