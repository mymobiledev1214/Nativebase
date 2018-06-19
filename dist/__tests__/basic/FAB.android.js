var _jsxFileName="__tests__/basic/FAB.android.js";var _reactNative=require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);

var _Fab=require("./../../src/basic/Fab");
var _IconNB=require("./../../src/basic/IconNB");
var _Button=require("./../../src/basic/Button");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="android";
return Platform;
});

it("renders single FAB inactive",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_reactNative.View,{style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:20}},
_react2.default.createElement(_Fab.Fab,{
active:false,
direction:"up",
style:{backgroundColor:"#5067FF"},
position:"bottomRight",__source:{fileName:_jsxFileName,lineNumber:21}},

_react2.default.createElement(_IconNB.IconNB,{name:"md-share",__source:{fileName:_jsxFileName,lineNumber:27}}),
_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#34A34F"},__source:{fileName:_jsxFileName,lineNumber:28}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-whatsapp",__source:{fileName:_jsxFileName,lineNumber:29}})),

_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#3B5998"},__source:{fileName:_jsxFileName,lineNumber:31}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-facebook",__source:{fileName:_jsxFileName,lineNumber:32}})),

_react2.default.createElement(_Button.Button,{disabled:true,style:{backgroundColor:"#DD5144"},__source:{fileName:_jsxFileName,lineNumber:34}},
_react2.default.createElement(_IconNB.IconNB,{name:"ios-mail",__source:{fileName:_jsxFileName,lineNumber:35}}))))).




toJSON();
expect(tree).toMatchSnapshot();
});

it("renders single FAB active",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_reactNative.View,{style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:47}},
_react2.default.createElement(_Fab.Fab,{
active:true,
direction:"up",
style:{backgroundColor:"#5067FF"},
position:"bottomRight",__source:{fileName:_jsxFileName,lineNumber:48}},

_react2.default.createElement(_IconNB.IconNB,{name:"md-share",__source:{fileName:_jsxFileName,lineNumber:54}}),
_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#34A34F"},__source:{fileName:_jsxFileName,lineNumber:55}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-whatsapp",__source:{fileName:_jsxFileName,lineNumber:56}})),

_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#3B5998"},__source:{fileName:_jsxFileName,lineNumber:58}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-facebook",__source:{fileName:_jsxFileName,lineNumber:59}})),

_react2.default.createElement(_Button.Button,{disabled:true,style:{backgroundColor:"#DD5144"},__source:{fileName:_jsxFileName,lineNumber:61}},
_react2.default.createElement(_IconNB.IconNB,{name:"ios-mail",__source:{fileName:_jsxFileName,lineNumber:62}}))))).




toJSON();
expect(tree).toMatchSnapshot();
});

it("renders multiple FAB inactive",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_reactNative.View,{style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:74}},
_react2.default.createElement(_Fab.Fab,{
active:false,
direction:"up",
containerStyle:{},
style:{backgroundColor:"#5067FF"},
position:"bottomRight",__source:{fileName:_jsxFileName,lineNumber:75}},

_react2.default.createElement(_IconNB.IconNB,{name:"md-share",__source:{fileName:_jsxFileName,lineNumber:82}}),
_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#34A34F"},__source:{fileName:_jsxFileName,lineNumber:83}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-whatsapp",__source:{fileName:_jsxFileName,lineNumber:84}})),

_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#3B5998"},__source:{fileName:_jsxFileName,lineNumber:86}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-facebook",__source:{fileName:_jsxFileName,lineNumber:87}})),

_react2.default.createElement(_Button.Button,{disabled:true,style:{backgroundColor:"#DD5144"},__source:{fileName:_jsxFileName,lineNumber:89}},
_react2.default.createElement(_IconNB.IconNB,{name:"ios-mail",__source:{fileName:_jsxFileName,lineNumber:90}}))),


_react2.default.createElement(_Fab.Fab,{
active:false,
direction:"left",
containerStyle:{},
style:{backgroundColor:"#5067FF"},
position:"topRight",__source:{fileName:_jsxFileName,lineNumber:93}},

_react2.default.createElement(_IconNB.IconNB,{name:"md-share",__source:{fileName:_jsxFileName,lineNumber:100}}),
_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#34A34F"},__source:{fileName:_jsxFileName,lineNumber:101}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-whatsapp",__source:{fileName:_jsxFileName,lineNumber:102}})),

_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#3B5998"},__source:{fileName:_jsxFileName,lineNumber:104}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-facebook",__source:{fileName:_jsxFileName,lineNumber:105}})),

_react2.default.createElement(_Button.Button,{disabled:true,style:{backgroundColor:"#DD5144"},__source:{fileName:_jsxFileName,lineNumber:107}},
_react2.default.createElement(_IconNB.IconNB,{name:"ios-mail",__source:{fileName:_jsxFileName,lineNumber:108}}))),


_react2.default.createElement(_Fab.Fab,{
active:false,
direction:"down",
containerStyle:{},
style:{backgroundColor:"#5067FF"},
position:"topLeft",__source:{fileName:_jsxFileName,lineNumber:111}},

_react2.default.createElement(_IconNB.IconNB,{name:"md-share",__source:{fileName:_jsxFileName,lineNumber:118}}),
_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#34A34F"},__source:{fileName:_jsxFileName,lineNumber:119}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-whatsapp",__source:{fileName:_jsxFileName,lineNumber:120}})),

_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#3B5998"},__source:{fileName:_jsxFileName,lineNumber:122}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-facebook",__source:{fileName:_jsxFileName,lineNumber:123}})),

_react2.default.createElement(_Button.Button,{disabled:true,style:{backgroundColor:"#DD5144"},__source:{fileName:_jsxFileName,lineNumber:125}},
_react2.default.createElement(_IconNB.IconNB,{name:"ios-mail",__source:{fileName:_jsxFileName,lineNumber:126}}))),


_react2.default.createElement(_Fab.Fab,{
active:false,
direction:"right",
containerStyle:{},
style:{backgroundColor:"#5067FF"},
position:"bottomLeft",__source:{fileName:_jsxFileName,lineNumber:129}},

_react2.default.createElement(_IconNB.IconNB,{name:"md-share",__source:{fileName:_jsxFileName,lineNumber:136}}),
_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#34A34F"},__source:{fileName:_jsxFileName,lineNumber:137}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-whatsapp",__source:{fileName:_jsxFileName,lineNumber:138}})),

_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#3B5998"},__source:{fileName:_jsxFileName,lineNumber:140}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-facebook",__source:{fileName:_jsxFileName,lineNumber:141}})),

_react2.default.createElement(_Button.Button,{disabled:true,style:{backgroundColor:"#DD5144"},__source:{fileName:_jsxFileName,lineNumber:143}},
_react2.default.createElement(_IconNB.IconNB,{name:"ios-mail",__source:{fileName:_jsxFileName,lineNumber:144}}))))).




toJSON();
expect(tree).toMatchSnapshot();
});

it("renders multiple FAB active",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_reactNative.View,{style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:156}},
_react2.default.createElement(_Fab.Fab,{
active:true,
direction:"up",
containerStyle:{},
style:{backgroundColor:"#5067FF"},
position:"bottomRight",__source:{fileName:_jsxFileName,lineNumber:157}},

_react2.default.createElement(_IconNB.IconNB,{name:"md-share",__source:{fileName:_jsxFileName,lineNumber:164}}),
_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#34A34F"},__source:{fileName:_jsxFileName,lineNumber:165}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-whatsapp",__source:{fileName:_jsxFileName,lineNumber:166}})),

_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#3B5998"},__source:{fileName:_jsxFileName,lineNumber:168}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-facebook",__source:{fileName:_jsxFileName,lineNumber:169}})),

_react2.default.createElement(_Button.Button,{disabled:true,style:{backgroundColor:"#DD5144"},__source:{fileName:_jsxFileName,lineNumber:171}},
_react2.default.createElement(_IconNB.IconNB,{name:"ios-mail",__source:{fileName:_jsxFileName,lineNumber:172}}))),


_react2.default.createElement(_Fab.Fab,{
active:true,
direction:"left",
containerStyle:{},
style:{backgroundColor:"#5067FF"},
position:"topRight",__source:{fileName:_jsxFileName,lineNumber:175}},

_react2.default.createElement(_IconNB.IconNB,{name:"md-share",__source:{fileName:_jsxFileName,lineNumber:182}}),
_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#34A34F"},__source:{fileName:_jsxFileName,lineNumber:183}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-whatsapp",__source:{fileName:_jsxFileName,lineNumber:184}})),

_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#3B5998"},__source:{fileName:_jsxFileName,lineNumber:186}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-facebook",__source:{fileName:_jsxFileName,lineNumber:187}})),

_react2.default.createElement(_Button.Button,{disabled:true,style:{backgroundColor:"#DD5144"},__source:{fileName:_jsxFileName,lineNumber:189}},
_react2.default.createElement(_IconNB.IconNB,{name:"ios-mail",__source:{fileName:_jsxFileName,lineNumber:190}}))),


_react2.default.createElement(_Fab.Fab,{
active:true,
direction:"down",
containerStyle:{},
style:{backgroundColor:"#5067FF"},
position:"topLeft",__source:{fileName:_jsxFileName,lineNumber:193}},

_react2.default.createElement(_IconNB.IconNB,{name:"md-share",__source:{fileName:_jsxFileName,lineNumber:200}}),
_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#34A34F"},__source:{fileName:_jsxFileName,lineNumber:201}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-whatsapp",__source:{fileName:_jsxFileName,lineNumber:202}})),

_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#3B5998"},__source:{fileName:_jsxFileName,lineNumber:204}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-facebook",__source:{fileName:_jsxFileName,lineNumber:205}})),

_react2.default.createElement(_Button.Button,{disabled:true,style:{backgroundColor:"#DD5144"},__source:{fileName:_jsxFileName,lineNumber:207}},
_react2.default.createElement(_IconNB.IconNB,{name:"ios-mail",__source:{fileName:_jsxFileName,lineNumber:208}}))),


_react2.default.createElement(_Fab.Fab,{
active:true,
direction:"right",
containerStyle:{},
style:{backgroundColor:"#5067FF"},
position:"bottomLeft",__source:{fileName:_jsxFileName,lineNumber:211}},

_react2.default.createElement(_IconNB.IconNB,{name:"md-share",__source:{fileName:_jsxFileName,lineNumber:218}}),
_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#34A34F"},__source:{fileName:_jsxFileName,lineNumber:219}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-whatsapp",__source:{fileName:_jsxFileName,lineNumber:220}})),

_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#3B5998"},__source:{fileName:_jsxFileName,lineNumber:222}},
_react2.default.createElement(_IconNB.IconNB,{name:"logo-facebook",__source:{fileName:_jsxFileName,lineNumber:223}})),

_react2.default.createElement(_Button.Button,{disabled:true,style:{backgroundColor:"#DD5144"},__source:{fileName:_jsxFileName,lineNumber:225}},
_react2.default.createElement(_IconNB.IconNB,{name:"ios-mail",__source:{fileName:_jsxFileName,lineNumber:226}}))))).




toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=FAB.android.js.map