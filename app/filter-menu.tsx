// screens/FilterMenuScreen.tsx
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useMenu } from '../context/MenuContext'; // Make sure you have this context set up

export default function FilterMenuScreen() {
    const { menuItems } = useMenu();
    const [selectedCourse, setSelectedCourse] = useState('starter');

    const filteredItems = menuItems.filter(item => item.course === selectedCourse);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Filter by Course</Text>

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedCourse}
                    style={styles.picker}
                    onValueChange={setSelectedCourse}
                    dropdownIconColor="#fff"
                >
                    <Picker.Item label="Starter" value="starter" />
                    <Picker.Item label="Main" value="main" />
                    <Picker.Item label="Dessert" value="dessert" />
                </Picker>
            </View>

            <ScrollView style={styles.scrollView}>
                {filteredItems.length === 0 ? (
                    <Text style={styles.noResults}>No dishes found for this course.</Text>
                ) : (
                    filteredItems.map((item, index) => (
                        <View key={index} style={styles.menuItemCard}>
                            <Text style={styles.menuItemTitle}>{item.name}</Text>
                            <Text style={styles.menuItemDetails}>Course: {item.course}</Text>
                            <Text style={styles.menuItemPrice}>R{item.price.toFixed(2)}</Text>
                        </View>
                    ))
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#121212',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    pickerContainer: {
        backgroundColor: '#333',
        borderRadius: 8,
        marginBottom: 20,
    },
    picker: {
        height: 50,
        color: '#fff',
    },
    scrollView: {
        flex: 1,
    },
    menuItemCard: {
        backgroundColor: '#1e1e1e',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
    },
    menuItemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    menuItemDetails: {
        fontSize: 14,
        color: '#ccc',
        marginBottom: 5,
    },
    menuItemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00ff00',
    },
    noResults: {
        color: '#888',
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: 20,
    },
});
