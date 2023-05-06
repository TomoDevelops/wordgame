import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";

const Home = () => {
    return (
        <SafeAreaView className={`bg-[#682b6f]`}>
            <View
                className={`flex justify-between items-center bg-[#682b6f] h-3/4`}
            >
                <Text className="text-white text-5xl">Logo</Text>
                <Text className="text-white text-2xl">Catch Phrase</Text>
                <Button
                    onPress={() => console.log(`Pressed`)}
                    buttonSpace="rounded-full"
                    buttonStyle="py-3 px-8"
                    buttonBgColor="bg-transparent border-2 border-white"
                    textStyle="text-white text-xl font-500"
                >
                    遊んでみる
                </Button>
            </View>
        </SafeAreaView>
    );
};
export default Home;

// https://www.youtube.com/watch?v=-xPeuxLRtnM
