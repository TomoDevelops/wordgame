import { View, Text } from "react-native";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";

import { FIRESTORE_DB } from "../firebaseConfig";
import Button from "../components/Button";

const Create = () => {
    const addTemplate = async () => {
        console.log(`Added`);
        const storyTitle: string = "初日";

        await setDoc(doc(FIRESTORE_DB, "storyTemplate", storyTitle), {
            content:
                "今日は、${monthNum}月1日で、高校の入学式だ。高校では、友達${friendNum}人作るのと全科目のテストで平均${testAvg}点取るという大目標を掲げている。僕にどんな高校生活が待っているのか非常に楽しみだ。",
            inputWords: [
                { monthNum: "1 ~ 12の数字" },
                { friendNum: "0以上の数字" },
                { testAvg: "0 ~ 100の数字" },
            ],
        });
    };

    return (
        <View className="flex-1 justify-center items-center">
            <Button onPress={() => addTemplate()}>追加する</Button>
        </View>
    );
};
export default Create;
