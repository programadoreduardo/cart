import { useContext, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Feather} from '@expo/vector-icons'
import Product from '../../components/Product';
import {useNavigation} from '@react-navigation/native'
import {CartContext} from '../../contexts/CartContext'


export default function Home() {
    const {cart, addItemCart} = useContext(CartContext)
    const navigation = useNavigation();
    const [products, setProducts] = useState([
        {
            id: 1,
            nome: "Coca cola",
            price: 19.99,
        },
        {
            id: 2,
            nome: "Chocolate",
            price: 6.59,
        },
        {
            id: 3,
            nome: "Queijo 500g",
            price: 15.99,
        },
        {
            id: 4,
            nome: "Batata frita",
            price: 23.92,
        },
        {
            id: 5,
            nome: "Guarana lata",
            price: 6.21,
        },
    ])


    function handleAddCart(item){
        addItemCart(item)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cartContent}>
                <Text style={styles.title}> Lista de produtos </Text>

        <TouchableOpacity
         style={styles.cartButton}
         onPress={()=> navigation.navigate('Cart')}
        >
            <View style={styles.dot}>
                <Text style={styles.dotText}>{cart?.length}</Text>
            </View>
            <Feather name='shopping-cart' size={30} color="#000"/>
        </TouchableOpacity>

            </View>

        <FlatList
        style={styles.list}
        data={products}
        keyExtractor={(item)=> String(item.id)}
        renderItem={({item})=> <Product  data={item} addToCart={()=> handleAddCart(item)}/>}
        />

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingEnd: 14,
        paddingStart: 14,
        paddingTop: 14
    },
    cartContent:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop: 24,
        marginBottom:24
    },
    title:{
        fontSize:24
    },
    dot:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'red',
        width: 20,
        height: 20,
        borderRadius: 10,
        position: 'absolute',
        zIndex:99,
        bottom:-2,
        left:-4
    },
    dotText:{
        fontSize: 12
    }
})