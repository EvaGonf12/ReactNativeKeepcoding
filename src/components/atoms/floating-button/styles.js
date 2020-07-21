import {StyleSheet} from "react-native";
import colors from "../../../assets/colors";

export default StyleSheet.create({
    button: {
        paddingHorizontal: 98,
        paddingVertical: 10,
        minHeight: 65,
        minWidth: 65,
        flexDirection: 'row'
    },
    label: {
        color: colors.black,
        fontSize: 16,
        fontWeight: '500'
    },
    activityIndicator: {marginLeft: 8}
});