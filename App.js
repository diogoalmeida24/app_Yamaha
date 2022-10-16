import * as react from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

export default function App() {
  return (
      <View style={estilo.container}>
          <Image style={estilo.nav} source={require("./assets/img/Yamaha-racing-logo-azul.jpg")}></Image>
          <Text style={estilo.titulo}>Motocicletas - Racing</Text>
          <Text style={estilo.subTitulo}>As motocicletas disponiveís são:</Text>

          <ScrollView>
            <Text style={estilo.listas}>R3 MONSTER ABS</Text>
            <Text style={estilo.lista}>Modelo 2022 - R$32.890,00</Text>
            <View>
              <Image style={estilo.moto} source={require("./assets/img/R3-MONSTER-ABS.png")}></Image>
            </View>

            <Text style={estilo.listas}>TT-R 230</Text>
            <Text style={estilo.lista}>Modelo 2022 - R$17.290,00</Text>
            <View>
              <Image style={estilo.moto} source={require("./assets/img/TT-R_230.png")}></Image>
            </View>

            <Text style={estilo.listas}>MT-09 ABS</Text>
            <Text style={estilo.lista}>Modelo 2022 - R$58.690,00</Text>
            <View>
              <Image style={estilo.moto} source={require("./assets/img/MT-09ABS.png")}></Image>
            </View>
          </ScrollView>
      </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    backgroundColor: "#0A2D81",
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll"
  },
  nav: {
    height: 90,
    width: 190,
    marginTop: 25,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 28,
    color: "#FFF",
    fontWeight:"800",
    textAlign: "center",
    fontFamily: "Roboto"          
  },
  subTitulo: {
    fontSize: 20,
    color: "#fff",
    marginHorizontal: 2,
    textAlign: "center",
    fontFamily: "Roboto",
    marginBottom: 10               
  },
  listas: {
    fontWeight:"800",
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginTop: 17
  },
  lista: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight:"670", 
    fontSize: 16
  },
  moto: {
    width: 350,
    height: 270,
    marginTop: 12,
    marginBottom: 20,
    textAlign: "center"
  }
})