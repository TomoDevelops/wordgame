import { Platform } from "react-native";
import ButtonAndroid from "./Button.android";
import ButtonIOS from "./Button.ios";

const Button = Platform.OS === "android" ? ButtonAndroid : ButtonIOS;

export default Button;
