(this.webpackJsonptrading=this.webpackJsonptrading||[]).push([[0],{278:function(e,t,c){},279:function(e,t,c){},490:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(15),A=c.n(n),r=(c(278),c(279),c(255)),i=c(26),o=c(80),l=c(545),j=(c(280),c(531)),d=c(534),b=c(536),O=c(166),u=c.n(O),x="GET_STOCKS_SUCCESS",f="GET_STOCKS_ERROR",p="LOADING_STOCKS",h=c(97),m=c(537),k=c(4),g=Object(j.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),S=Object(h.b)((function(e){return{}}),{resetMarket:function(){return function(){u.a.get("http://18.224.19.226:3000/reset",{headers:{"Content-Type":"application/json"}}).then((function(e){o.c.success("Successfully Reset Markets!")})).catch((function(e){console.log(e),o.c.error("Error resetting markets!")}))}}})((function(e){var t=g();return Object(k.jsx)("div",{className:t.root,children:Object(k.jsx)(d.a,{position:"static",children:Object(k.jsxs)(b.a,{children:[Object(k.jsx)("div",{className:t.title,children:Object(k.jsx)("a",{href:"/data",children:Object(k.jsx)("img",{src:"data:image/png;base64,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",alt:"StoxKart",style:{height:45,width:130}})})}),Object(k.jsxs)("div",{children:[Object(k.jsx)("a",{style:{fontSize:18,lineHeight:2},href:"/",children:Object(k.jsx)("strong",{children:"Stocks"})}),Object(k.jsx)(m.a,{style:{float:"right",marginLeft:20},onClick:e.resetMarket,variant:"contained",color:"danger",children:" Reset Market "})]})]})})})})),v=c(33),y=c(239),J=c(492),D=c(539),B=c(543),L=c(542),P=c(538),z=c(540),C=c(549),T=c(541),w=c(554),K=c(241),Q=c.n(K),G=[{id:"sym",label:"Stock Name"},{id:"action",label:"Action"}],H=Object(j.a)({root:{width:"100%"},container:{maxHeight:"100vh"}}),Z=Object(h.b)((function(e){return{stocks:e.stocksReducer.stocks,loading:e.stocksReducer.isLoading}}),{loadStocks:function(){return function(e){e({type:p});u.a.get("http://18.224.19.226:3000/stocks",{headers:{"Content-Type":"application/json"}}).then((function(t){e({type:x,payload:t.data})})).catch((function(t){console.log(t),o.c.error("Error getting stocks!"),e({type:f})}))}}})((function(e){var t=H(),c=s.a.useState(0),n=Object(v.a)(c,2),A=n[0],r=n[1],i=s.a.useState(10),o=Object(v.a)(i,2),l=o[0],j=o[1];Object(a.useEffect)((function(){e.loadStocks()}),[]);return e.loading?Object(k.jsx)("div",{className:"loader",children:Object(k.jsx)(y.BeatLoader,{size:150,color:"#3399ff",loading:e.loading})}):Object(k.jsxs)(J.a,{className:t.root,children:[Object(k.jsx)(P.a,{className:t.container,children:Object(k.jsxs)(D.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(k.jsx)(z.a,{children:Object(k.jsx)(T.a,{children:G.map((function(e){return Object(k.jsx)(L.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(k.jsx)(B.a,{children:e&&e.stocks.length>0&&e.stocks.slice(A*l,A*l+l).map((function(e){return Object(k.jsx)(T.a,{hover:!0,role:"checkbox",tabIndex:-1,children:G.map((function(t){var c=e;if("action"===t.id){var a="/bar/".concat(e);return Object(k.jsx)(L.a,{children:Object(k.jsx)(w.a,{title:"View OHLC Data",children:Object(k.jsx)("a",{href:a,style:{color:"#66c2ff"},children:Object(k.jsx)(Q.a,{})})})},t.id)}return Object(k.jsx)(L.a,{children:c},t.id)}))},e)}))})]})}),Object(k.jsx)(C.a,{rowsPerPageOptions:[10,25,100],component:"div",count:e.stocks.length,rowsPerPage:l,page:A,onChangePage:function(e,t){r(t)},onChangeRowsPerPage:function(e){j(+e.target.value),r(0)}})]})})),I=c(43),M=c(258),X=c(242),U=c(552),N=c(550),E=c(253),F=c(254),q=c(140),R=c(116),Y=c(259),V=c(170),W=c.n(V),_=c(171),$=c.n(_),ee=Object(j.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),te=function(e){var t=ee(),c=Object(i.f)().sym,s=Object(a.useState)([]),n=Object(v.a)(s,2),A=n[0],r=n[1],o=Object(a.useState)({total_returns:0,latest_bar_returns:0}),j=Object(v.a)(o,2),d=j[0],b=j[1];return Object(a.useEffect)((function(){var e=Object(X.io)("ws://18.224.19.226/:3000/");return e.emit("subscribe",c,(function(e){e&&console.log(e)})),e.on("ohlc_notify",(function(e){A.length>=40&&A.shift(),r((function(t){return[].concat(Object(M.a)(t),[e])}))})),e.on("performance_statistics",(function(e){b(Object(I.a)(Object(I.a)({},d),{},{total_returns:e.totalTradeReturns,latest_bar_returns:e.latestBarReturns})),console.log(d)})),e.on("reset_market",(function(e){r([]),b(Object(I.a)(Object(I.a)({},d),{},{total_returns:0,latest_bar_returns:0}))})),function(){e.disconnect()}}),[c]),Object(k.jsx)("div",{children:Object(k.jsxs)("div",{style:{marginTop:15},children:[Object(k.jsxs)(l.a,{container:!0,className:t.root,spacing:2,children:[Object(k.jsx)(l.a,{item:!0,xs:3,children:Object(k.jsxs)("div",{style:{textAlign:"left",marginLeft:30,marginTop:20},children:[Object(k.jsx)("b",{children:"Stock Name:  "}),c]})}),Object(k.jsx)(l.a,{item:!0,xs:3,children:d.total_returns>0?Object(k.jsxs)(J.a,{className:t.paper,style:{display:"inline-flex"},children:[Object(k.jsx)(W.a,{style:{fontSize:35,color:"green"}}),Object(k.jsxs)("b",{style:{fontSize:15,marginTop:5,marginLeft:5},children:["Total Trade Returns: ",d.total_returns," %"]})]}):Object(k.jsxs)(J.a,{className:t.paper,style:{display:"inline-flex"},children:[Object(k.jsx)($.a,{style:{fontSize:35,color:"red"}}),Object(k.jsxs)("b",{style:{fontSize:15,marginTop:5,marginLeft:5},children:["Total Trade Returns: ",d.total_returns," %"]})]})}),Object(k.jsx)(l.a,{item:!0,xs:3,children:d.latest_bar_returns>0?Object(k.jsxs)(J.a,{className:t.paper,style:{display:"inline-flex"},children:[Object(k.jsx)(W.a,{style:{fontSize:35,color:"green"}}),Object(k.jsxs)("b",{style:{fontSize:15,marginTop:5,marginLeft:5},children:["Latest Bar Returns: ",d.latest_bar_returns," %"]})]}):Object(k.jsxs)(J.a,{className:t.paper,style:{display:"inline-flex"},children:[Object(k.jsx)($.a,{style:{fontSize:35,color:"red"}}),Object(k.jsxs)("b",{style:{fontSize:15,marginTop:5,marginLeft:5},children:["Latest Bar Returns: ",d.latest_bar_returns," %"]})]})})]}),Object(k.jsxs)(l.a,{container:!0,className:t.root,spacing:2,children:[Object(k.jsx)(l.a,{item:!0,xs:12,children:Object(k.jsx)(J.a,{className:t.paper,children:Object(k.jsx)(U.a,{width:"95%",height:180,children:Object(k.jsxs)(N.a,{data:A,children:[Object(k.jsx)(E.a,{dataKey:"bar_num"}),Object(k.jsx)(F.a,{}),Object(k.jsx)(q.a,{}),Object(k.jsx)(R.a,{}),Object(k.jsx)(Y.a,{dataKey:"open",fill:"#8884d8"}),Object(k.jsx)(Y.a,{dataKey:"close",fill:"#cc80ff"})]})})})}),Object(k.jsx)(l.a,{item:!0,xs:12,children:Object(k.jsx)(J.a,{className:t.paper,children:Object(k.jsx)(U.a,{width:"95%",height:180,children:Object(k.jsxs)(N.a,{data:A,children:[Object(k.jsx)(E.a,{dataKey:"bar_num"}),Object(k.jsx)(F.a,{}),Object(k.jsx)(q.a,{}),Object(k.jsx)(R.a,{}),Object(k.jsx)(Y.a,{dataKey:"high",fill:"#82ca9d"}),Object(k.jsx)(Y.a,{dataKey:"low",fill:"#ff6666"})]})})})}),Object(k.jsx)(l.a,{item:!0,xs:12,children:Object(k.jsx)(J.a,{className:t.paper,children:Object(k.jsx)(U.a,{width:"95%",height:180,children:Object(k.jsxs)(N.a,{data:A,children:[Object(k.jsx)(E.a,{dataKey:"bar_num"}),Object(k.jsx)(F.a,{}),Object(k.jsx)(q.a,{}),Object(k.jsx)(R.a,{}),Object(k.jsx)(Y.a,{dataKey:"volume",fill:"#4d94ff"})]})})})})]})]})})},ce=function(e){return Object(k.jsx)(l.a,{container:!0,children:Object(k.jsxs)(l.a,{item:!0,xs:12,children:[Object(k.jsx)(S,{}),Object(k.jsx)(o.a,{closeOnClick:!0,hideProgressBar:!0,transition:o.b}),Object(k.jsx)(r.a,{children:Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)(i.c,{children:[Object(k.jsx)(i.a,{exact:!0,path:"/",component:Z}),Object(k.jsx)(i.a,{exact:!0,path:"/bar/:sym",component:te})]})})})]})})},ae=c(65),se=c(256),ne={stocks:[],isLoading:!1};var Ae=Object(ae.c)({stocksReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!0});case x:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1,stocks:t.payload.stocks});case f:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1,stocks:[]});default:return e}}}),re=[se.a],ie=Object(ae.e)(Ae,{},Object(ae.d)(ae.a.apply(void 0,re)));var oe=function(){return Object(k.jsx)(h.a,{store:ie,children:Object(k.jsx)(ce,{})})},le=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,555)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,A=t.getTTFB;c(e),a(e),s(e),n(e),A(e)}))};A.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(oe,{})}),document.getElementById("root")),le()}},[[490,1,2]]]);
//# sourceMappingURL=main.99e59234.chunk.js.map