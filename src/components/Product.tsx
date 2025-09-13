import { TouchableOpacity, View,Text,StyleSheet,Image } from "react-native"

interface Props {
  id: string;
  name: string;
  completed: boolean;
  onRemove: () => void;
  onCheck: () => void;
}

export function Product({ name, completed, onRemove, onCheck }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonCheck} onPress={onCheck}>
        <Image
          source={
            completed
              ? require("../../assets/image/layerPurple.png") // novo ícone roxo
              : require("../../assets/image/layerGreen.png")
          }
          style={styles.layerGreen}
        />
      </TouchableOpacity>

      <Text style={[styles.name, completed && { textDecorationLine: "line-through", color: "#808080" }]}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Image
          source={require("../../assets/image/layerDelete.png")}
          style={styles.layerDelete}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
       width: "100%",
       flexDirection:  'row',
       alignItems: "center",
       borderRadius:8,
       marginBottom: 8,
       marginTop:8,
       borderWidth:1,
       borderColor:"#808080",
    },
    name:{
        flex: 1,
        fontSize: 16,
        lineHeight: 19.2,
        marginLeft: 16,
        marginRight: 16,
        fontWeight:400,
    },
     buttonText:{
        fontSize: 24,
        color: "white",
     },
    button:{
        width: 56,
        height: 56,
        alignItems: "center",
        justifyContent: "center",
    },
    layerDelete:{
        width:12.47,
        height:14,
        marginLeft:5,
    },
    layerGreen:{
        width: 24,
        height: 24,
        marginLeft:12,
    },
    buttonCheck:{

    },

    
})
