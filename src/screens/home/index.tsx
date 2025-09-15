import { View, Text, FlatList, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { styles } from "./styles";
import { Product } from "../../components/Product";
import { useState } from "react";

export function Home() {
  type ProductType = {
    id: string;
    name: string;
    completed: boolean;
  };

  const [products, setProducts] = useState<ProductType[]>([]);
  const [finishedProducts, setFinishedProducts] = useState<ProductType[]>([]);
  const [productName, setProductName] = useState("");

  function handleAddProduct() {
    if (!productName.trim()) return;

    if (
      products.find((p) => p.name === productName) ||
      finishedProducts.find((p) => p.name === productName)
    ) {
      return Alert.alert(
        "Produto já cadastrado",
        "Já existe um produto na lista com esse nome."
      );
    }

    const newProduct: ProductType = {
      id: String(new Date().getTime()),
      name: productName,
      completed: false,
    };

    setProducts((prev) => [...prev, newProduct]);
    setProductName("");
  }

  function handleProductToggle(id: string) {
  
    const product = products.find((p) => p.id === id);
    if (product) {
      const updated = { ...product, completed: true };
      setProducts((prev) => prev.filter((p) => p.id !== id));
      setFinishedProducts((prev) => [...prev, updated]);
      return;
    }
    
    const finished = finishedProducts.find((p) => p.id === id);
    if (finished) {
      const updated = { ...finished, completed: false };
      setFinishedProducts((prev) => prev.filter((p) => p.id !== id));
      setProducts((prev) => [...prev, updated]);
    }
  }

  function handleProductRemove(id: string) {
    Alert.alert("Remover", `Deseja remover o produto?`, [
      {
        text: "Sim",
        onPress: () => {
          setProducts((prev) => prev.filter((p) => p.id !== id));
          setFinishedProducts((prev) => prev.filter((p) => p.id !== id));
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  const allProducts = [...products, ...finishedProducts];

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
            <Image source={require("../../../assets/image/plus.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.indicators}>
          <View style={styles.indicatorBox}>
            <Text style={styles.produtos}>Produtos</Text>
            <Text style={styles.productCount}>{products.length}</Text>
          </View>
          <View style={styles.indicatorBox}>
            <Text style={styles.finalizados}>Finalizados</Text>
            <Text style={styles.productCount}>{finishedProducts.length}</Text>
          </View>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={allProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Product
              id={item.id}
              name={item.name}
              completed={item.completed}
              onRemove={() => handleProductRemove(item.id)}
              onCheck={() => handleProductToggle(item.id)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <Image
                source={require("../../../assets/image/bagui.png")}
                style={styles.bagui}
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
