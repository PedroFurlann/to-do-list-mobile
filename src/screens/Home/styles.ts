import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    flex: 1,
  },

  inputContainer: {
    flexDirection: 'row',
    marginTop: -32,
  },

  input: {
    fontSize: 16,
    paddingHorizontal: 16,
    backgroundColor: '#262626',
    height: 54,
    flex: 1,
    borderRadius: 5,
    marginLeft: 24,
    marginRight: 4,
    color: '#f2f2f2',

    "&::placeholder": {
      marginLeft: 5,
    },
  },

  btn: {
    backgroundColor: "#1e6f9f",
    width: 52,
    height: 52,
    borderRadius: 8,
    marginRight: 24,

    alignItems: 'center',
    justifyContent: 'center'
  }
})