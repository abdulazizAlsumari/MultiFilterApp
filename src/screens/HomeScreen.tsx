import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {items} from '../data/items';
import ItemComponent from '../components/ItemComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(items.map(item => item.category)),
    );
    setCategories(uniqueCategories);
  }, []);

  const renderCategoryItem = ({item}: {item: string}) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate('Detail', {category: item})}>
      <Text style={styles.categoryText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderLatestItem = ({item}: {item: (typeof items)[0]}) => (
    <ItemComponent item={item} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.sectionTitle}>Latest</Text>
      <FlatList
        data={items}
        renderItem={renderLatestItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  categoryItem: {
    padding: 10,
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 50,
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 160,
  },
  categoryText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;
