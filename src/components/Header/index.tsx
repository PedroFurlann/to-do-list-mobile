import { Image, View } from "react-native";
import { styles } from "./styles";
import logoImage from '../../assets/logo.png'

export function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image source={logoImage} />
    </View>
  )
}