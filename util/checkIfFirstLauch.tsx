import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

async function checkIfFirstLaunch() {
    try {
        const isFirstLaunch = await AsyncStorage.getItem("alreadyLaunched");
        if (isFirstLaunch === null) {
            // App is launching for the first time
            await AsyncStorage.setItem("alreadyLaunched", "true");
            // Show your tutorial screen or other onboarding experience
        }
    } catch (error) {
        console.log(error);
    }
}
