import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/fae2/fb74/dfc5e3d8ad7457739c07b2ee59e42744?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RM3jP~HMbNDnPgcYYYRVSvBk5n1q0LCdAWMBfPkXiMa2xGqo9Rti11LKdsOPV5EUdJ5501UZSQqoeLvJyY3suDxqBWSLVcKbbW9nRegLKN-vRak5o7tuPdGJgGkp-PEa6GMxRDF6giQ2fEeagIhnD3kj9QRXohfY9cX5BNdX~Y-ylN6T4lCuTa5Xy0WfPxEUl3PG--HF6LRldb7WFWEkH8FIvu4H02G4sldR~xyYxlpNQMoskoVFondz5-dql69SysI8eLDS1p8tVLnnBdit8QwiAJE-ureQeZp-oTYtDH79MbPv9f~sgqLzIz80GPLuxhveOtN~2XEYls7yKT~7BQ__',
          }}
          style={styles.image}
        />
        <Text style={styles.productName}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style={styles.ratingContainer}>
          <MaterialIcons name="star" size={28} color="yellow" />
          <MaterialIcons name="star" size={28} color="yellow" />
          <MaterialIcons name="star" size={28} color="yellow" />
          <MaterialIcons name="star" size={28} color="yellow" />
          <MaterialIcons name="star" size={28} color="yellow" />
          <Text style={styles.ratingText}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>1.790.000 đ</Text>
          <Text style={styles.oldPrice}>1.790.000 đ</Text>
        </View>
        <Text style={styles.refundText}>Ở đâu rẻ hơn hoàn tiền</Text>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>4 MÀU - CHỌN MÀU</Text>
            <MaterialIcons name="chevron-right" size={28} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  card: {
    width: 350,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    padding: 16,
  },
  image: {
    width: 200,
    height: 280,
    alignSelf: 'center',
  },
  productName: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 14,
  },
   priceContainer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginVertical: 5, 
  },
  price: {     
    fontSize: 20,     
    fontWeight: 'bold',     
    marginRight: 10, 
  },   
  oldPrice: {     
    fontSize: 14,     
    textDecorationLine: 'line-through',     
  },  
  refundText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'red',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    marginRight: 10,
  },
  buyButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buyButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});
