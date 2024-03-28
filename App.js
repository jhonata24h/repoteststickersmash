import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Button from './components/button';
import ImageViewer from './components/ImageViewer';
import { useState } from 'react';
import CircleButton from './components/CircleBuntton';
import IconButton from './components/iconButton';
import EmojiPicker from "./components/EmojiPicker";

const PlaceholderImage = require("./assets/background-image.png");

export default function App() {
  
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri) 
      setShowAppOptions(true)
    } else {
      alert('pare imetiadamente de ser burro');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  
  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };



  return (
    
  );
}


const styles = StyleSheet.create({
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },  
});
