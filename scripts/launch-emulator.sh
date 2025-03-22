#!/bin/bash

echo "Launching Emulator..."
AVD=$(emulator -list-avds | head -1)
($ANDROID_HOME/emulator/emulator -netdelay none -netspeed full -no-snapshot-load -no-snapshot -avd $AVD > /dev/null &)
(adb wait-for-device shell 'while [[ -z $(getprop sys.boot_completed) ]]; do sleep 1; done;')

echo "Check Connected Devices..."
(adb devices)

echo "Check Appium Settings are in place..."
(appium-doctor)

echo "Clear Chrome browser history in device..."
(adb shell pm clear com.android.chrome)

echo "Done!"