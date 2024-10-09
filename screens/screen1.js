import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import { useState } from "react";

export default function Screen1() {
  const [data, setData] = useState([
    {
      id: "1",
      itemName: "Ca Nấu Lẫu",
      shopName: "Shop Devang",
      imgItem: require("../assets/images/imagesPage1/ca_nau_lau.png"),
    },
    {
      id: "2",
      itemName: "1 KG Kho Ga Bo Toi",
      shopName: "Shop LTD Food",
      imgItem: require("../assets/images/imagesPage1/ga_bo_toi.png"),
    },
    {
      id: "3",
      itemName: "Xe Cần Cẩu Đa Năng",
      shopName: "Shop Thế Giới Đồ Chơi",
      imgItem: require("../assets/images/imagesPage1/xa_can_cau.png"),
    },
    {
      id: "4",
      itemName: "Đồ Chơi Dạng Mô Hình",
      shopName: "Shop Thế Giới Đồ Chơi",
      imgItem: require("../assets/images/imagesPage1/do_choi_dang_mo_hinh.png"),
    },
    {
      id: "5",
      itemName: "Lãnh đạo giản đơn",
      shopName: "Shop Minh Long Book",
      imgItem: require("../assets/images/imagesPage1/ga_bo_toi.png"),
    },
    {
      id: "6",
      itemName: "Hiểu Lồng Con Trẻ",
      shopName: "Shop Minh Long Book",
      imgItem: require("../assets/images/imagesPage1/ga_bo_toi.png"),
    },
  ]);

  return (
    <View>
      <View>
        <Text style={styles.centerHeader}>
          Bạn Có Thắc Mắc Với Sản Phẩm Vừa Xem. Đừng Ngại Chat Với Shop!
        </Text>
      </View>

      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.containerItem}>
              <Image style={styles.imgSize} source={item.imgItem}></Image>

              <View>
                <Text>{item.itemName}</Text>
                <Text>{item.shopName}</Text>
              </View>

              <Pressable style={styles.btnChat}>
                <Text style={{ color: "white" }}>CHAT</Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.containerFooter}>
        <Image
          style={styles.imgSize}
          source={require("../assets/images/imagesFooter/iconSideBar.png")}
        ></Image>
        <Image
          style={styles.imgSize}
          source={require("../assets/images/imagesFooter/Home.png")}
        ></Image>
        <Image
          style={styles.imgSize}
          source={require("../assets/images/imagesFooter/Return.png")}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerHeader: {
    textAlign: "center",
  },

  containerItem: {
    width: "100%",
    height: 80,
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  imgSize: {
    width: 30,
    height: 30,
  },

  btnChat: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    backgroundColor: "red",
  },

  containerFooter: {
    width: "100%",
    height: 60,
    backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
