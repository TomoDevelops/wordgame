type ButtonPropTypes = {
    children: ReactNode;
    onPress: (event: GestureResponderEvent) => void;
    buttonStyle?: string;
    textStyle?: string;
    buttonBgColor?: string;
    buttonSpace?: string;
    style?: StyleProp<ViewStyle>;
};
