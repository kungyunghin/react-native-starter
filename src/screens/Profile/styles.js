const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceWidth = Dimensions.get("window").width;
const primary = require("../../theme/variables/commonColor").brandPrimary;

export default {
  container: {
    flex: 1,
    width: null,
    height: null
  },
  imageHeader: {
    height: 25,
    width: 95,
    resizeMode: "contain"
  },
  tabIcons: {
    color: "#FFF"
  },
  profileInfoHeader: {
    backgroundColor: primary
  },
  profileInfoTitle: {
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 15,
    paddingBottom: 5
  },
  profileInfoEmail: {
    fontSize: 14,
    paddingLeft: 15
  },
  profileInfoAddress: {
    alignSelf: 'flex-end'
  },
  profileInfo: {
    paddingBottom: 10,
    flexDirection: "row"
  },
  profileInfoLeft: {
    flex: 0.8
  },
  profileInfoRight: {
    flex: 0.2,
    paddingRight: 15
  },
  profileInfoContainer: {
    backgroundColor: primary,
    paddingTop: 10
  },
  profileUser: {
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 5
  },
  profileUserInfo: {
    alignSelf: "center",
    opacity: 0.8,
    fontWeight: "bold",
    color: "#FFF"
  },
  linkTabs: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  linkTabs_header: {
    padding: 15,
    alignSelf: "center"
  },
  linkTabs_tabCounts: {
    fontSize: 22,
    fontWeight: "bold",
    color: primary,
    alignSelf: "center",
    paddingBottom: Platform.OS === "android" ? 3 : 0
  },
  linkTabs_tabName: {
    color: "#444",
    fontWeight: "bold",
    fontSize: deviceWidth < 330 ? 13 : 15
  },
  todoWrapper: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  todoContainer: {
    flexDirection: "row",
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    flex: 1
  },
  todoTitle: {
    flex: 0.9,
    color: "#444",
    fontWeight: "bold"
  },
  todoComplete: {
    flex: 0.1,
    color: "#444",
    fontSize: 12
  },
  todoCompleteTrue: {
    fontSize: 30,
    color: 'green'
  },
  todoCompleteFalse: {
    fontSize: 30,
    color: 'red'
  },
  postContainer: {
    flexDirection: "column",
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    flex: 1
  },
  postTitle: {
    color: "#444",
    fontWeight: "bold"
  },
  postBody: {
    color: "#444",
    fontSize: 12
  },
  albumWrapper: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5
  },
  albumContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  albumTitle: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    color: "#000"
  }
};
