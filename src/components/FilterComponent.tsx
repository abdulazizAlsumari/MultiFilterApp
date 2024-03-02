import React from 'react';
import {ScrollView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Item} from '../types'; // Adjust the import path as necessary
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  items: Item[];
  setFilteredItems: (items: Item[]) => void;
}

const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();


 // FilterComponent is a React functional component that displays a horizontal scrollable list of categories.
 //It allows the user to filter items based on the selected category.

export const FilterComponent: React.FC<Props> = ({items, setFilteredItems}) => {
  const categories = Array.from(new Set(items.map(item => item.category)));

  
   // Filters the items by the specified category and updates the filtered items state.
   // Navigates to the 'Detail' screen with the selected category.

  const filterItemsByCategory = (category: string) => {
    const filtered = items.filter(item => item.category === category);
    setFilteredItems(filtered);
    navigation.navigate('Detail', {category: category});
  };
  const showAllItems = () => {
    setFilteredItems(items);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}>
      <TouchableOpacity onPress={showAllItems} style={styles.card}>
        <Text style={styles.cardText}>All Categories</Text>
      </TouchableOpacity>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => filterItemsByCategory(category)}
          style={styles.card}>
          <Text style={styles.cardText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 16,
  },
});
