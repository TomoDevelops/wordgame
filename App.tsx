import { useEffect } from "react";
import { extendTheme, NativeBaseProvider } from "native-base";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo } from "@expo/vector-icons";

import Home from "./screens/Home";
import Feed from "./screens/Feed";

import Signup from "./screens/Signup";

export default function App() {
    const Tab = createBottomTabNavigator();

    const theme = extendTheme({
        colors: {
            // Add new color
            primary: {
                50: "#E3F2F9",
                100: "#C5E4F3",
                200: "#A2D4EC",
                300: "#7AC1E4",
                400: "#47A9DA",
                500: "#0088CC",
                600: "#007AB8",
                700: "#006BA1",
                800: "#005885",
                900: "#003F5E",
            },
            customGray: {
                400: "#a6a6a6",
            },
        },
    });

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
    return (
        <NavigationContainer>
            <NativeBaseProvider theme={theme}>
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
            </NativeBaseProvider>
        </NavigationContainer>
    );
}
//https://docs.nativebase.io/install-expo
