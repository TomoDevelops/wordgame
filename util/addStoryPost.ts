import { v4 as uuidv4 } from "uuid";
import { FIRESTORE_DB } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const addData = async () => {
    console.log(`Added`);
    const uuid = uuidv4();
    const doc = addDoc(collection(FIRESTORE_DB, "storyPost"), {
        title: "Test",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur inventore ut sunt in sint fugit explicabo, odit perspiciatis facilis hic similique quibusdam aperiam voluptate dolore laudantium. Consequuntur nemo optio odit doloremque enim natus dolore tempora eaque vitae aut! Mollitia natus voluptas, eum sed ullam et esse recusandae quasi quibusdam totam.",
        likeCount: 0,
        uuid: uuid,
    });
};
