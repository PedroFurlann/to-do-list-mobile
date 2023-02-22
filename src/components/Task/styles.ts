import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 4,
    maxWidth: '100%',
    height: 64,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#262626',
    borderRadius: 8,
  },

  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    width: 50,
    height: 50,
  },

  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 16,
  },

  taskCreatedContent: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f2f2f2',

    alignItems: 'center',
    flex: 1,
  },

  taskCompletedContent: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#808080',

    alignItems: 'center',
    flex: 1,
    
    textDecorationLine: 'line-through',
  }
})