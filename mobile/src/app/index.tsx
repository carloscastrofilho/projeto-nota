import { Link, useRouter } from "expo-router";
import { useState, } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, } from "react-native";

export default function Index() {
 
  const [login, setLogin] = useState<string>();
   const [senha, setSenha] = useState<string>();
   const router = useRouter();
   function onPressAcessar(){
    console.log(`login: ${login}, senha: ${senha}`)
    router.navigate("/(dash)/dashboard")
   }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.text}>Bem vindo</Text>
      <View style={styles.inputContainer}>
        <Text>Login</Text>
        <TextInput
        style={styles.input}
        maxLength = {100}
        keyboardType ={"email-address"}
        onChangeText={(value) => setLogin(value)}/>

     <Text>Senha</Text>
        <TextInput 
        style={styles.input}
        maxLength = {15}
        keyboardType ={"email-address"}
        onChangeText={(value) => setSenha(value)}/>

    <View>
      <Text>Não tem cadastro, faça agora <Link href={"/register"} style={styles.link}>
    acesse aqui
</Link></Text>
    </View>
    <View style={styles.buttoncontainer}>
      <TouchableOpacity
    style={styles.button} 
    onPress={() => onPressAcessar()}
>
    <Text style={styles.buttonText}>Acessar</Text>
</TouchableOpacity>

    </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
        fontSize: 36,
        color: "#cf0068",
        fontWeight: "600",
        marginBottom: 10,
    },
     text: {
        fontSize:16,
        fontWeight: "600",
       
    },


  inputContainer: {
    width: "100%",
    padding: 10,
  },

  input: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    height: 45,
    paddingHorizontal: 15,
    marginTop: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#cccccc",
  },

  buttoncontainer: {
    width: "100%",
    padding: 10,
    alignItems: "center",
  },

  button: {
    marginTop:5,
    width: "80%",
    backgroundColor: "#cf0068",
    borderRadius: 15,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  link: {
    color: "#7700ff",
    fontWeight: "700",
  },
});
