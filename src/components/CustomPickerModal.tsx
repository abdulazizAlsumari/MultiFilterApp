// CustomPickerModal.tsx
import React from 'react';
import { Modal, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

interface Option {
  label: string;
  value: any;
}

interface CustomPickerModalProps {
  visible: boolean;
  items: Option[];
  onClose: () => void;
  onSelect: (value: any) => void;
}

const CustomPickerModal: React.FC<CustomPickerModalProps> = ({
  visible,
  items,
  onClose,
  onSelect,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => {
                  onSelect(item.value);
                  onClose();
                }}
              >
                <Text style={styles.itemText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '100%',
    height: '50%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  itemContainer: {
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 2,
  },
  itemText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default CustomPickerModal;
