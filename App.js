import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './src/components/Header';
import PhotoCard from './src/components/Card';
import Footer from './src/components/Footer';

export default function App() {
  return (
    
    <View>
      
      <ScrollView style={styles.container}>
      <View>
        <Header style={styles.Header}/>
      </View>
      <StatusBar style="auto" />
      <PhotoCard
        imageSource="https://yt3.googleusercontent.com/3h1oJUpRTMcQkLc87YHXj0-jxfF_mVqm4IrRUF3z3HmZHXaNoMOsUImJd6ifblrxYhPjCAjR15k=s900-c-k-c0x00ffffff-no-rj" nome="@HelloKitty" legenda="Bom dia amigos! Tenham um belo dia!"
      />
      <PhotoCard
        imageSource="https://i.pinimg.com/originals/b0/3a/4f/b03a4ff015a20f875348d7962f48cb90.jpg" nome="@Badtz-Maru" legenda="Memórias inesquecíveis com os melhores amigos!"
      />
      
      <PhotoCard
        imageSource="https://i.pinimg.com/originals/f7/1c/a6/f71ca62a6aeb0e7a2d3d495d89aa440d.jpg" nome="@Chococat" legenda="Sorvete maravilhoso que fiz hoje! Querem que eu passe a receita?"
      />
      <PhotoCard
        imageSource="https://i.pinimg.com/736x/81/09/90/810990ccc3992f5eb6d6c74b29c4cfee.jpg" nome="@Pompompurin" legenda="Foto incrível tirada hoje pela minha amiga querida @MyMelody"
      />
      <PhotoCard
        imageSource="https://i.redd.it/i4vhlaifuty21.jpg" nome="@HelloKitty" legenda="Hoje é dia de se fantasiar da pessoa que mais adora, @Badtz-Maru essa é para você!!"
      />
      <Text>
        Loren ipsum
      </Text>
      <Text>
        Loren ipsum
      </Text>
      <Text>
        Loren ipsum
      </Text>
      </ScrollView>
      <View><Footer />
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  
});
