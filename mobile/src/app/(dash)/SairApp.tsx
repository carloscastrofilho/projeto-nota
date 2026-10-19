import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LogOut(){
    const router = useRouter();
    function onPressSair(){
    router.navigate("/")
   }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>confirme para sair do app</Text>
                <Text style={styles.text}>volte sempre!</Text>
                <TouchableOpacity
                    style={styles.button} 
                    onPress={() => onPressSair()}
                >
                <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>
            </View>
        
    )
}

const styles = StyleSheet.create({
container: { flex: 1,
alignItems: "center", 
justifyContent: "center", 

}, 
 text: {
        fontSize:16,
        fontWeight: "600",
       
    },

button: { 
marginTop:30,
width: "80%", 
backgroundColor: "#cf0068", 
borderRadius: 15, 
height: 40, 
alignItems: "center", 
justifyContent: "center", 
}, 
buttonText: { 
  color: "#fff", 
  fontSize: 14, 
  fontWeight: "600", 
  },


})