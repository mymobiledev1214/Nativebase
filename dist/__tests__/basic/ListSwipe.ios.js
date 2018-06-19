var _jsxFileName="__tests__/basic/ListSwipe.ios.js";var _reactNative=require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Content=require("./../../src/basic/Content");
var _SwipeRow=require("./../../src/basic/SwipeRow");
var _Button=require("./../../src/basic/Button");
var _Icon=require("./../../src/basic/Icon");
var _Text=require("./../../src/basic/Text");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="ios";
return Platform;
});

it("renders regular Single SwipeRow",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Content.Content,{scrollEnabled:false,__source:{fileName:_jsxFileName,lineNumber:21}},
_react2.default.createElement(_SwipeRow.SwipeRow,{
leftOpenValue:75,
rightOpenValue:-75,
left:
_react2.default.createElement(_Button.Button,{success:true,onPress:function onPress(){return alert("Add");},__source:{fileName:_jsxFileName,lineNumber:26}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"add",style:{color:"#FFF"},__source:{fileName:_jsxFileName,lineNumber:27}})),


right:
_react2.default.createElement(_Button.Button,{danger:true,onPress:function onPress(){return alert("Trash");},__source:{fileName:_jsxFileName,lineNumber:31}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"trash",__source:{fileName:_jsxFileName,lineNumber:32}})),


body:
_react2.default.createElement(_reactNative.View,{style:{paddingLeft:20},__source:{fileName:_jsxFileName,lineNumber:36}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:37}},"Swipe me to left and right")),__source:{fileName:_jsxFileName,lineNumber:22}}))).





toJSON();
expect(tree).toMatchSnapshot();
});

it("renders regular Single SwipeRow Custom Style",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Content.Content,{scrollEnabled:false,__source:{fileName:_jsxFileName,lineNumber:50}},
_react2.default.createElement(_SwipeRow.SwipeRow,{
style:{backgroundColor:"#9370DB"},
leftOpenValue:75,
rightOpenValue:-75,
left:
_react2.default.createElement(_Button.Button,{success:true,onPress:function onPress(){return alert("Add");},__source:{fileName:_jsxFileName,lineNumber:56}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"add",style:{color:"#FFF"},__source:{fileName:_jsxFileName,lineNumber:57}})),


right:
_react2.default.createElement(_Button.Button,{danger:true,onPress:function onPress(){return alert("Trash");},__source:{fileName:_jsxFileName,lineNumber:61}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"trash",__source:{fileName:_jsxFileName,lineNumber:62}})),


body:
_react2.default.createElement(_reactNative.View,{style:{paddingLeft:20},__source:{fileName:_jsxFileName,lineNumber:66}},
_react2.default.createElement(_Text.Text,{style:{color:"#FFF"},__source:{fileName:_jsxFileName,lineNumber:67}},"Swipe me to left and right")),__source:{fileName:_jsxFileName,lineNumber:51}}))).





toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=ListSwipe.ios.js.map