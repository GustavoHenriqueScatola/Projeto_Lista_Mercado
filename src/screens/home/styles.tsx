import { StyleSheet } from "react-native"

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
    color: "#ffffff",
    fontSize: 18,
    fontWeight:"bold",
    lineHeight: 24,
    marginTop:76,
    marginBottom:72,
  },
  form:{
   flexDirection:"row",
   marginHorizontal:24,
   backgroundColor:"#6998530",
   marginTop:-30,
  },
  input:{
   padding: 16,
   width:289,
   borderWidth: 0.5,
   borderColor:"#808080",
   backgroundColor:"#F2F2F2",
   borderRadius:6,
   color:"#808080",
  },
  button:{
   width: 56,
   height: 56,
   backgroundColor: "#31C667",
   borderRadius: 5,  
   alignItems:"center",
   justifyContent:"center",
   marginLeft:4,
  },
  textButtom:{
   color: "#ffff",
   fontSize: 24,
  },
  listEmptyText:{
   fontSize: 14,
   fontWeight: 700,
   lineHeight: 19.6,
   textAlign:"center",
   color:"#808080",
  },
});