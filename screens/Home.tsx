import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    return (
        <SafeAreaView className={`bg-[#682b6f]`}>
            <View
                className={`flex justify-between items-center bg-[#682b6f] h-3/4`}
            >
                <Text className="text-white text-5xl">Logo</Text>
                <Text className="text-white text-2xl">Catch Phrase</Text>
                <Text className="text-white">Logo</Text>
            </View>
        </SafeAreaView>
    );
};
export default Home;
