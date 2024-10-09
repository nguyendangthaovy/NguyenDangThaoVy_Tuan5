import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const colors = [
    { id: '1', color: '#ADD8E6' }, // Light Blue
    { id: '2', color: '#FF0000' }, // Red
    { id: '3', color: '#000000' }, // Black
    { id: '4', color: '#0000FF' }, // Blue
  ];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleDone = () => {
    Alert.alert('Bạn đã chọn màu:', selectedColor);
  };

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/9450/6742/84537f52002d52e74cd78ec1cc4f4b2e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KV9D8XFH~mAzcImqGcms3yaaZGQ2BwY1FWGTEIjFu3hckakI2WyyePyiMmcmEYnwORPqN-XaeS41PFXfYY-a7CadJBM7CtFCJDuV6eRYcwZBAFqr7VQl0KZSwfdr8Qs5WzTZPNVGyJEAKVgtaaJH8Un7Dr-e6sZu3TTvBm0i-wDsNsnGagWcst9JtJ96DUz0x-MAwF9j868WuZ2qwXOEfZvPbGsJJ8l2nrJIHh~RJdyWauIiFFF0hxNMV1llU7VBctOvfvO5CEVeZ8PiilLt1bg-4HkOrwnL2G0T1FANdaBC3-YbYdj0awD0kRMMfFScqp4uqVDsqmrZzvUn6gTzMA__' }} 
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>Điện Thoại Vsmart Joy 3</Text>
          <Text style={styles.productSubtitle}>Hàng chính hãng</Text>
          <Text style={styles.productSubtitle1}>Màu: đỏ</Text>
          <Text style={styles.productSubtitle1}>Cung cấp bởi Tiki Tradding</Text>
          <Text style={styles.productSubtitle1}>1.790.000 đ</Text>
        </View>
      </View>

      <View style={styles.card}>
      <Text style={styles.colorTitle}>Chọn một màu bên dưới:</Text>
      <View style={styles.colorContainer}>
        {colors.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.colorBox, { backgroundColor: item.color }]}
            onPress={() => handleColorSelect(item.color)}
          />
        ))}
        </View>
         <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
        <Text style={styles.doneButtonText}>XONG</Text>
      </TouchableOpacity>
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffff',
    
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 90,
    height: 110,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
  },
  productSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  productSubtitle1: {
    fontSize: 14,
    color: '#666',
    fontWeight: 'bold',
  },
  colorTitle: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    left: 10,
    top: 10,
  },
  colorContainer: {
    flexDirection: 'column', 
    justifyContent: 'space-between',
    alignItems: 'center',  
    height: 250,  
    top: 30,
  },
  colorBox: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginBottom: 15,  
  },
  doneButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'rgba(25, 82, 226, 0.58)',
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    width: 180,
    height: 40,
    left: 60,
    top: 50,
  },
  doneButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#c4c4c4',
    height: '100%',
  },
});

export default App;
