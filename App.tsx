import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";

import Home from "./screens/Home";
import Feed from "./screens/Feed";
import Create from "./screens/Create";

import Signup from "./screens/Signup";
import { Text, View } from "react-native";

export default function App() {
    const Tab = createBottomTabNavigator();
    // const [isFirstLaunch, setIsFirstLaunch] = useState<Boolean | null>(null);

    // useEffect(() => {
    //     async function checkIsFirstLaunch() {
    //         const hasLaunchedBefore = await AsyncStorage.getItem(
    //             "hasLaunchedBefore"
    //         );
    //         if (hasLaunchedBefore === null) {
    //             setIsFirstLaunch(true);
    //             await AsyncStorage.setItem("hasLaunchedBefore", "true");
    //         } else {
    //             setIsFirstLaunch(false);
    //         }
    //     }
    //     checkIsFirstLaunch();
    // }, []);

    const [fontsLoaded] = useFonts({
        "notosans-thin": require("./assets/fonts/NotoSansJP-Thin.ttf"),
        "notosans-extralight": require("./assets/fonts/NotoSansJP-ExtraLight.ttf"),
        "notosans-light": require("./assets/fonts/NotoSansJP-Light.ttf"),
        "notosans-regular": require("./assets/fonts/NotoSansJP-Regular.ttf"),
        "notosans-medium": require("./assets/fonts/NotoSansJP-Medium.ttf"),
        "notosans-semibold": require("./assets/fonts/NotoSansJP-SemiBold.ttf"),
        "notosans-bold": require("./assets/fonts/NotoSansJP-Bold.ttf"),
        "notosans-extrabold": require("./assets/fonts/NotoSansJP-ExtraBold.ttf"),
        "notosans-black": require("./assets/fonts/NotoSansJP-Black.ttf"),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
            SplashScreen.hideAsync();
        }
        prepare();
    }, []);

    if (!fontsLoaded) {
        return undefined;
    }

    // if (isFirstLaunch === null) {
    //     return (
    //         <View className="flex justify-center items-center">
    //             <Text>Tutorial</Text>
    //         </View>
    //     );
    // }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: "#fff",
                    tabBarInactiveTintColor: "#bfbfbf",
                    tabBarStyle: {
                        backgroundColor: "#000",
                        height: 50,
                        paddingVertical: 5,
                    },
                }}
            >
                <Tab.Screen
                    name="ホーム"
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <AntDesign
                                name="home"
                                size={24}
                                color={focused ? "#fff" : "#bfbfbf"}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="作る"
                    component={Create}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name="create-outline"
                                size={24}
                                color={focused ? "#fff" : "#bfbfbf"}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="読む"
                    component={Feed}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Entypo
                                name="open-book"
                                size={24}
                                color={focused ? "#fff" : "#bfbfbf"}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
//https://docs.nativebase.io/install-expo
