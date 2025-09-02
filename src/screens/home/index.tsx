import { View,Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Home(){
    return(
    <View style={styles.container}>
         <View style={styles.background}>
             <Text style={styles.text}> Lista de Compras </Text>
         </View>
         <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Adicione um novo prouto"
                placeholderTextColor= "#808080"
            ></TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style ={styles.textButtom}>+</Text>
            </TouchableOpacity>
         </View>
         <Text style={styles.listEmptyText}>
                 Você ainda não tem produtos na lista de compra. Adicione produtos e organize sua lista de compras</Text>
    </View>
         
         );
}