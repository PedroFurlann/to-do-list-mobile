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
  },

  headerTaskList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 20,
  },

  alignTextAndNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textTasksCreated: {
    color: '#4EA8DE',
    fontWeight: 'bold',
  },

  textTasksCompleted: {
    color: '#8284FA',
    fontWeight: 'bold'
  },

  numberTasksCreated: {
    backgroundColor: '#808080',
    color: '#D9D9D9',
    borderRadius: 99999,
    marginLeft: 10,
    fontSize: 12,
    width: 25,
    textAlign: 'center',

    alignItems: 'center',
    justifyContent: 'center'
  },

  numberTasksCompleted: {
    backgroundColor: '#808080',
    color: '#D9D9D9',
    borderRadius: 99999,
    marginLeft: 10,
    fontSize: 12,
    width: 25,
    textAlign: 'center',

    alignItems: 'center',
    justifyContent: 'center'
  }
})
