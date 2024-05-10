import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Text style={styles.navTitle}>GOOGLE</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Google</Text>
        <Text style={styles.subtitle}>Search the world's information.</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#666"
            keyboardType="web-search"
            returnKeyType="search"
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const handleGetStarted = () => {
  // Handle the 'Get Started' button press
};

const handleSearch = () => {
  // Handle search functionality
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBar: {
    backgroundColor: '#4285F4',
    padding: 13,
    alignItems: 'center',
  },
  navTitle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    fontSize: 16,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#4285F4',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4285F4',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LandingPage;
