import { StyleSheet, Text, View } from 'react-native';

export default function Cart () {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> pagina carrinho </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})