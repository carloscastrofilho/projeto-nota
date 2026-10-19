import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Register(){
  const [login, setLogin] = useState<string>();
   const [senha, setSenha] = useState<string>();
      const [nome, setNome] = useState<string>();
   const router = useRouter();
   function onPressAcessar(){
    console.log(`nome: ${nome}, login: ${login}, senha: ${senha}`)
    router.navigate("/")
   }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <Text style={styles.text}>obrigado pela escolha </Text>
      <View style={styles.inputContainer}>
         <Text>Nome completo</Text>
        <TextInput
        style={styles.input}
        maxLength = {100}
        keyboardType ={"ascii-capable"}
        onChangeText={(value) => setNome(value)}/>

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
      <Text>Já tem cadastro, <Link href={"/"} style={styles.link}>
    faça seu login!
</Link></Text>
    </View>
    <View style={styles.buttoncontainer}>
      <TouchableOpacity
    style={styles.button} 
    onPress={() => onPressAcessar()}
>
    <Text style={styles.buttonText}>Registrar</Text>
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
        marginBottom: 20,
       
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
    width: "80%",
    backgroundColor: "#cf0068",
    borderRadius: 15,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop:5,
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
