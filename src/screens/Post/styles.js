const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceWidth = Dimensions.get("window").width;
const primary = require("../../theme/variables/commonColor").brandPrimary;

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  postContainer: {
    flexDirection: "column",
    flex: 1
  },
  postWrapper: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  postTitle: {
    color: "#444",
    fontWeight: "bold",
    fontSize: 20
  },
  postBody: {
    color: "#444",
    fontSize: 16
  },
  commentContainer: {
    flexDirection: "column",
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    flex: 1
  },
  commentBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingTop: 2,
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 2,
    backgroundColor: "rgba(1, 204, 161, 0.3)",
    opacity: 0.5
  },
  commentContent: {
    color: "#000"
  },
  commentTitle: {
    color: "#444",
    fontWeight: "bold"
  },
  commentSubtitle: {
    color: "#999",
    fontSize: 10
  },
  commentBody: {
    color: "#444",
    fontSize: 12,
    paddingLeft: 10
  },
};
