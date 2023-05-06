import { TouchableHighlight, Text, View } from "react-native";
import React from "react";

const ButtonIOS = ({
    children,
    onPress,
    buttonStyle,
    textStyle,
    buttonBgColor,
    buttonSpace,
}: ButtonPropTypes) => {
    return (
        <View
            className={`overflow-hidden rounded-xl ${buttonBgColor} ${buttonSpace}`}
        >
            <TouchableHighlight
                className={`justify-center p-2 rounded-[4px] ${buttonStyle}`}
                activeOpacity={0.5}
                underlayColor="#aaaaaa80"
                onPress={onPress}
            >
                <Text className={`font-400 text-center ${textStyle}`}>
                    {children}
                </Text>
            </TouchableHighlight>
        </View>
    );
};

export default ButtonIOS;
