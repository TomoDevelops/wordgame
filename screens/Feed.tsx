import { View, Text } from "react-native";
import {
    collection,
    doc,
    getDocs,
    Query,
    QueryDocumentSnapshot,
    QuerySnapshot,
} from "firebase/firestore";
import { FIRESTORE_DB } from "../firebaseConfig";

import Button from "../components/Button";

const Feed = () => {
    const getStory = async () => {
        const docRef: Query<any> = collection(FIRESTORE_DB, "storyTemplate");
        const docSnap: QuerySnapshot = await getDocs(docRef);
        const docs: QueryDocumentSnapshot[] = docSnap.docs;
        const story = docs.map((doc) => doc.data());

        console.log(story[0]["inputWords"]);
    };

    return (
        <View className="flex-1 justify-center items-center">
            <Button onPress={() => getStory()}>Press</Button>
        </View>
    );
};
export default Feed;
