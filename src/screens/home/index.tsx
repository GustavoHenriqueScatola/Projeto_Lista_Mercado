import { View, Text,FlatList, TextInput, TouchableOpacity,Image,Alert } from "react-native";

import { styles } from "./styles";

import { Product } from "../../components/Product";

import { use, useState } from "react";

export function Home() {
    const [products, setProducts] = useState<string[]>([]);
    const [productName, setProductName] = useState("");
    
    
    function handleAddProduct(){
       if (products.includes(productName)){
        return Alert.alert("Produto já cadastrado", "Já existe um produto na lista com esse nome.");
       }
    
    setProducts([...products,productName]);
    setProductName("");
    }
    function handleProductRemove(name: String){
        Alert.alert("Remover", `Deseja remover o produto ${name}?`,[
            {
                text:'sim',
                onPress:() => setProducts(products.filter(product => product != name))
            },
            {
                text:'nao',
                style:'cancel'
            }
        ]);
    }
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Text style={styles.text}> Lista de Compras </Text>
            </View>

            <View style={styles.bottom}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Adicione um novo produto"
                        placeholderTextColor="#808080"
                         onChangeText={setProductName}
                        value={productName}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
                        <Image source={require("../../../assets/image/plus.png")}/>
                    </TouchableOpacity>
                </View>
            <View style ={styles.indicators}>
                <View style={styles.indicatorBox}>
                    <Text style={styles.produtos}>Produtos</Text>
                    <Text style={styles.productCount}>{products.length}</Text>
                </View>
                <View style={styles.indicatorBox}>
                    <Text style={styles.finalizados}>Finalizados</Text>
                    <Text style={styles.productCount}>{products.length}</Text>
                </View>
            </View>
             <FlatList
                data={products}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (<Product name={item} onRemove={() => handleProductRemove(item)}/>
                )} 

                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.listEmpty}>
                   <Image source={require("../../../assets/image/bagui.png")}
                   style = {styles.bagui}
                   />
                    <Text style={styles.listEmptyTextUp}>
                        Você ainda não tem produtos na lista de compra
                    </Text>
                    <Text style={styles.listEmptyTextDown}>
                        Adicione produtos e organize sua lista de compras
                    </Text>
                </View>
                )}
            />
            </View>
        </View>
    );
}
