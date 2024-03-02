import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {Item} from '../types';
import {IMAGES} from '../data/items';

interface ItemComponentProps {
  item: Item;
}

/**
 * Renders an item component.
 *
 * @component
 * @param {ItemComponentProps} props - The component props.
 * @param {Item} props.item - The item to be rendered.
 * @returns {JSX.Element} The rendered item component.
 */
const ItemComponent: React.FC<ItemComponentProps> = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.detail}>Category: {item.category}</Text>
        <Text style={styles.detail}>Model: {item.model}</Text>
        <Text style={styles.detail}>Variant: {item.variant}</Text>
        <Text style={styles.price}>Price: ${item.price.toFixed(2)}</Text>
        <Text style={styles.detail}>Brand: {item.brand}</Text>
        <Text style={styles.rating}>Rating: {renderStars(item.rating)}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={IMAGES[item.image]}
          style={styles.image}
          resizeMode="contain" // Ensures the image fits within the container without being cropped or stretched
        />
      </View>
    </View>
  );
};

/**
 * Renders stars based on the given rating.
 * @param rating - The rating value.
 * @returns A string representing the stars.
 */
const renderStars = (rating: number) => {
  const fullStar = '★'; // Filled star
  const emptyStar = '☆'; // Empty star
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating ? fullStar : emptyStar;
  }
  return stars;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    flexDirection: 'row', // Align details and image horizontally
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center', // Align items vertically in the center
  },
  detailsContainer: {
    flex: 1, // Take up all available space except for the image
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detail: {
    fontSize: 14,
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 8,
  },
  rating: {
    fontSize: 14,
    marginBottom: 4,
  },
  imageContainer: {
    height: 120,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Ensures nothing spills outside the container
  },
  image: {
    height: '100%', // Takes full height of the container
    width: '100%', // Takes full width of the container
  },
});

export default ItemComponent;
