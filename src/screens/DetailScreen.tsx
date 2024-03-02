import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import ItemComponent from '../components/ItemComponent';
import {Item} from '../types';
import {items} from '../data/items';

/**
 * DetailScreen component displays the details of a selected item based on the category.
 * It allows filtering items by brand, model, and variant.
 *
 * @component
 * @param {Object} route - The route object containing the parameters.
 * @param {Object} route.params - The parameters object containing the category.
 * @param {string} route.params.category - The category of the items to be displayed.
 * @returns {JSX.Element} The rendered DetailScreen component.
 */
const DetailScreen: React.FC<{route: {params: {category: string}}}> = ({
  route,
}) => {
  const {category} = route.params;
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  // Filter items based on the selected brand, model, and variant
  useEffect(() => {
    setSelectedModel('');
    setSelectedVariant('');
    filterItems(category, selectedBrand, '', '');
  }, [selectedBrand]);

  useEffect(() => {
    setSelectedVariant('');
    filterItems(category, selectedBrand, selectedModel, '');
  }, [selectedModel]);

  useEffect(() => {
    filterItems(category, selectedBrand, selectedModel, selectedVariant);
  }, [selectedVariant]);

  /**
   * Filters the items based on the provided category, brand, model, and variant.
   * @param category - The category to filter by.
   * @param brand - The brand to filter by.
   * @param model - The model to filter by.
   * @param variant - The variant to filter by.
   */
  const filterItems = (
    category: string,
    brand: string,
    model: string,
    variant: string,
  ) => {
    const filtered = items.filter(
      item =>
        item.category === category &&
        (brand ? item.brand === brand : true) &&
        (model ? item.model === model : true) &&
        (variant ? item.variant === variant : true),
    );
    setFilteredItems(filtered);
  };

  // Extract unique brands, models, and variants for the current category
  const uniqueBrands = [
    ...new Set(
      items.filter(item => item.category === category).map(item => item.brand),
    ),
  ];
  const uniqueModels = [
    ...new Set(
      items
        .filter(
          item => item.category === category && item.brand === selectedBrand,
        )
        .map(item => item.model),
    ),
  ];
  const uniqueVariants = [
    ...new Set(
      items
        .filter(
          item =>
            item.category === category &&
            item.brand === selectedBrand &&
            item.model === selectedModel,
        )
        .map(item => item.variant),
    ),
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.filterTitle}>Filters</Text>
      <View style={styles.filtersContainer}>
        <Picker
          style={styles.filterPicker}
          selectedValue={selectedBrand}
          onValueChange={itemValue => setSelectedBrand(itemValue)}
          prompt="Select Brand">
          <Picker.Item label="Brand" value="" />
          {uniqueBrands.map(brand => (
            <Picker.Item key={brand} label={brand} value={brand} />
          ))}
        </Picker>

        <Picker
          style={styles.filterPicker}
          selectedValue={selectedModel}
          onValueChange={itemValue => setSelectedModel(itemValue)}
          prompt="Select Model">
          <Picker.Item label="Model" value="" />
          {uniqueModels.map(model => (
            <Picker.Item key={model} label={model} value={model} />
          ))}
        </Picker>

        <Picker
          style={styles.filterPicker}
          selectedValue={selectedVariant}
          onValueChange={itemValue => setSelectedVariant(itemValue)}
          prompt="Select Variant">
          <Picker.Item label="Variant" value="" />
          {uniqueVariants.map(variant => (
            <Picker.Item key={variant} label={variant} value={variant} />
          ))}
        </Picker>
      </View>

      <FlatList
        data={filteredItems}
        renderItem={({item}) => <ItemComponent item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  filterPicker: {
    flex: 1,
    marginHorizontal: 1,
    fontSize: 2,
  },

  filterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});

export default DetailScreen;
