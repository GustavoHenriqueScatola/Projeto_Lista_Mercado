import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        width: "100%",
        height: 173,
        backgroundColor: "#7A4A9E",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#F2F2F2",
        textAlign: "center",
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 24,
        paddingHorizontal: 16,
    },
    form: {
        flexDirection: "row",
        position: "relative",
        top: -30,
    },
    input: {
        padding: 16,
        flex: 1,
        borderWidth: 0.5,
        borderColor: "#808080",
        backgroundColor: "#F2F2F2",
        borderRadius: 6,
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: "#31C667",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 4,
    },
    textButton: {
        color: "#ffff",
        fontSize: 24,
    },
    listEmptyTextUp: {
        fontSize: 14,
        lineHeight: 19.6,
        fontWeight: 700,
        color: "#808080",
    },
    listEmptyTextDown: {
        fontSize: 14,
        lineHeight: 19.6,
        color: "#808080",
    },
    listEmpty: {
        justifyContent: "center",
        alignItems: "center",
         marginTop: 20,
         borderTopWidth:1,
         borderTopColor:"#D9D9D9",
    },
    bottom: {
        flex: 1,
        marginHorizontal:24,
    },
    indicatorBox:{
       flexDirection: "row",
        alignItems: "center",
        gap: 8, 
    },
    indicators: {
        flexDirection:"row",
        width: "100%",
        justifyContent: "space-between",
    },
    produtos: {
        color: "#31C667",
        fontWeight: "700",
        fontSize: 14,
    },
    finalizados: {
        color: "#7A4A9E",
        fontWeight: "700",
        fontSize: 14,
    },
    productCount: {
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 999,
        backgroundColor: "#D9D9D9",
        fontWeight:700,
    },
    bagui:{
        width:56,
        height:56,
        marginTop:48,
        marginBottom:16,
    },
    


});
