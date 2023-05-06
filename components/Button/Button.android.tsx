import { Pressable, Text, View } from "react-native";
import React from "react";

const ButtonAndroid = ({
    children,
    onPress,
    buttonStyle,
    textStyle,
    buttonBgColor,
    buttonSpace,
    style,
}: ButtonPropTypes) => {
    return (
        <Pressable
            className={`overflow-hidden ${buttonBgColor} ${buttonSpace}`}
            style={style}
            onPress={onPress}
        >
            <View className={`justify-center items-center p-2 ${buttonStyle}`}>
                <Text className={`text-center ${textStyle}`}>{children}</Text>
            </View>
        </Pressable>
    );
};

export default ButtonAndroid;
