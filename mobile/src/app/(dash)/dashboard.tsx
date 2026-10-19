import { StyleSheet, Text, View } from "react-native";

export default function DashBoard(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <View style={styles.info}>
            <Text>Rafaela Fernandes de Freitas</Text>
            <Text>0220832511005</Text>
            <Text>28/09/26</Text>
            <Text>Desenvolvimento movel I</Text>
            <Text>Sistemas para Internet</Text>
            <Text>Laboratório 4</Text>
            <Text>Maquina F022-LAB4-04</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },

    title: {
        fontSize: 36,
        color: "#cf0068",
        fontWeight: "600",
        marginBottom: 20,
    },

    info: {
        alignItems:"center",
        fontSize: 18,
        color: "#333",
        marginBottom: 10,
        gap:3,
    },

})