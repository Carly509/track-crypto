import { StyleSheet, Text, View } from 'react-native';

const {headerContainer, header} = styles;

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>Crypto App</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        marginTop: 55,
        alignItems: 'center',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

