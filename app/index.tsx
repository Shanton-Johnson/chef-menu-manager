import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useMenu } from '../context/MenuContext';
import { calculateAveragePrice } from '@/utils/calculateAveragePrice';

export default function HomeScreen() {
  const router = useRouter();
  const { menuItems } = useMenu();

  const avgStarterPrice = calculateAveragePrice(menuItems, 'starter');
  const avgMainPrice = calculateAveragePrice(menuItems, 'main');
  const avgDessertPrice = calculateAveragePrice(menuItems, 'dessert');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Christoffels Menu</Text>

      <View style={styles.averagePriceContainer}>
        <Text style={styles.averagePriceText}>Starters Avg Price: R{avgStarterPrice.toFixed(2)}</Text>
        <Text style={styles.averagePriceText}>Mains Avg Price: R{avgMainPrice.toFixed(2)}</Text>
        <Text style={styles.averagePriceText}>Desserts Avg Price: R{avgDessertPrice.toFixed(2)}</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {menuItems.map((item, index) => (
          <View key={index} style={styles.menuItemCard}>
            <Text style={styles.menuItemTitle}>{item.name}</Text>
            <Text style={styles.menuItemDescription}>{item.description}</Text>
            <Text style={styles.menuItemDetails}>Course: {item.course}</Text>
            <Text style={styles.menuItemPrice}>R{item.price.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/chef-menu')}>
        <Text style={styles.buttonText}>Go to Chef's Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/filter-menu')}>
        <Text style={styles.buttonText}>Filter Menu Items</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingBottom: 75
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  averagePriceContainer: {
    marginBottom: 20,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    width: '90%',
    backgroundColor: '#333',
    borderRadius: 8,
  },
  averagePriceText: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 5,
  },
  scrollView: {
    margin: 20,
    width: '100%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    maxHeight: 400,
  },
  menuItemCard: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  menuItemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#bbb',
    marginBottom: 5,
  },
  menuItemDetails: {
    fontSize: 14,
    color: '#888',
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00ff00',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
