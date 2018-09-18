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
  friendsHeader: {
    backgroundColor: primary
  },
  friendsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 15,
    paddingBottom: 5
  },
  friendsInfo: {
    paddingBottom: 10
  },
  linkTabs: {
    backgroundColor: "#fff"
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
  postsContainer: {
    flexDirection: "column",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "#ddd"
  },
  postHeader: {
    color: "#444",
    fontWeight: "bold"
  },
  postContent: {
    color: "#444",
    fontSize: 12
  },
  newsHeader: {
    color: "#444",
    fontWeight: "bold"
  },
  newsLink: {
    color: "#666",
    fontSize: 12,
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  newsTypeView: {
    borderBottomWidth: 1,
    borderBottomColor: "#666",
    alignSelf: "flex-end"
  },
  newsTypeText: {
    color: "#666",
    fontSize: 12,
    fontWeight: "bold",
    paddingBottom: 5
  },
  textNote: {
    color: "#777",
    fontSize: 12
  },
  swipeBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  friendWrapper: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  friendTouchable: {
    flexDirection: "column",
    flex: 1
  },
  friendContainer: {
    flexDirection: "column",
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    flex: 1
  },
  friendName: {
    color: "#444",
    fontWeight: "bold"
  },
  friendEmail: {
    color: "#444",
    fontSize: 12
  }
};
