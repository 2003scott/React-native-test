import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.loginheader}>
        <Image
          style={styles.loginlogo}
          source={require("./assets/iconUNDC.png")}
        />
        <View>
          <Text style={styles.logintitulo}>Universidad Nacional de</Text>
          <Text style={styles.logintitulo}>Cañete</Text>
        </View>
      </View>

      <View style={styles.loginbody}>
        <Text style={styles.loginbodytext}>Iniciar Sesion</Text>
        <View>
          <TextInput style={styles.textInput} placeholder="Ingresa tu email"/>
          <TextInput style={styles.textInput} placeholder="Ingresa tu contrseña" />
          <View style={styles.textcuenta}>
            <Text style={styles.textInputsimple}>No tienes una Cuenta? <Text style={styles.logincreate}>Crea una!</Text></Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  loginheader: {
    flexDirection: "row",
    alignItems : "center",
    paddingVertical: 50,
    marginHorizontal: 20,
    gap: 15,
  },
  loginlogo: {
    width: 91,
    height: 112,
  },
  logintitulo: {
    color: "#A9A7A7",
    fontSize: 20,
  },
  loginbody: {
    paddingHorizontal: 30,
  },
  loginbodytext: {
    fontSize: 20,
  },
  textcuenta: {
    marginTop : 50,
  },
  textInput: {
    color : "#A9A7A7",
    fontSize : 20,
    marginTop : 35,
    borderBottomWidth : 1,
  },
  textInputsimple : {
    fontSize : 16,
  },
  logincreate : {
    color : "#2565B0",
    fontSize : 16,
  },
  button: {
    paddingTop : 30,
    marginEnd: 25,
    width: 90,
    alignSelf: "flex-end",
  },
  buttonText: {
    backgroundColor : "#01035D",
    color: 'white',
    fontSize: 20,
    padding: 10,
    textAlign : "center",
  },
});
