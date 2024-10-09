import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from "react-native";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Screen2() {
  const [data, setData] = useState([
    {
      id: 1,
      imgItem: require("../assets/images/imagesPage2/giacchuyen 1.png"),
    },
    {
      id: 2,
      imgItem: require("../assets/images/imagesPage2/daynguon 1.png"),
    },
    {
      id: 3,
      imgItem: require("../assets/images/imagesPage2/dauchuyendoipsps2 1.png"),
    },
    {
      id: 4,
      imgItem: require("../assets/images/imagesPage2/dauchuyendoi 1.png"),
    },
    {
      id: 5,
      imgItem: require("../assets/images/imagesPage2/carbusbtops2 1.png"),
    },
    {
      id: 6,
      imgItem: require("../assets/images/imagesPage2/daucam 1.png"),
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.containerItem}>
            <Image style={styles.imgSize} source={item.imgItem} />
            <Text style={styles.itemText}>Cáp chuyển từ Cổng USB sang PS2...</Text>
            <View style={styles.ratingContainer}>
              <AntDesign name="star" size={16} color="yellow" />
              <AntDesign name="star" size={16} color="yellow" />
              <AntDesign name="star" size={16} color="yellow" />
              <AntDesign name="star" size={16} color="yellow" />
              <AntDesign name="star" size={16} color="black" />
              <Text style={styles.ratingText}>(15)</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>69.900đ</Text>
              <Text style={styles.discount}>-39%</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.containerFooter}>
        <Image
          style={styles.footerIcon}
          source={require("../assets/images/imagesFooter/iconSideBar.png")}
        />
        <Image
          style={styles.footerIcon}
          source={require("../assets/images/imagesFooter/Home.png")}
        />
        <Image
          style={styles.footerIcon}
          source={require("../assets/images/imagesFooter/Return.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingTop: 20,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  containerItem: {
    flex: 1,
    margin: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 10,
    justifyContent: "space-between",
  },
  imgSize: {
    width: 70,
    height: 70,
    borderRadius: 10,
    alignSelf: "center",
  },
  itemText: {
    fontSize: 14,
    color: "#333",
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 5,
    color: "#666",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  discount: {
    fontSize: 14,
    color: "#E63946",
  },
  containerFooter: {
    height: 60,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  footerIcon: {
    width: 24,
    height: 24,
  },
});
