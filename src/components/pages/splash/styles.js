import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container: {
    },
    title: {
        color: colors.black,
        fontFamily: "System",
        fontSize: 54,
        alignContent: "center",
        textAlign: "center",
        marginTop: 70,
        marginLeft: 40,
        marginRight: 40
    },
    image: {
        flex: 1,
        resizeMode: 'cover'
    },
    // Se especifica la posicioón y ancho del botón
    button: {
        flex: 1,
        justifyContent: 'flex-end',
        marginLeft: 98,
        marginRight: 98,
        marginBottom: 125
    }
});

export default styles;