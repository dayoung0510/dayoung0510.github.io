(this["webpackJsonpdayoung-homepage"]=this["webpackJsonpdayoung-homepage"]||[]).push([[0],{36:function(n,t,e){},47:function(n,t,e){"use strict";e.r(t);var c,i,o,r,s,j,b,a=e(0),u=e.n(a),d=e(16),l=e.n(d),h=e(13),p=e(6),x=(e(36),e(3)),O=e(30),f=e(10),g=e(27),m=e.n(g),y=e(28),v=e.n(y),k=e.p+"static/media/first.4f340a58.jpg",w=e.p+"static/media/second.a71a228e.jpg",C=e.p+"static/media/hongkong.f0a52651.jpg",z=e.p+"static/media/tree_video2.b811da26.mp4",F=p.d.div(c||(c=Object(f.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: lightgray;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n"]))),B=p.d.button(i||(i=Object(f.a)(["\n  width: 10rem;\n  height: 10rem;\n  border-radius: 50%;\n  z-index: 9;\n  &:hover {\n    box-shadow: 0 0 20px lightgray;\n    transition: 0.35s;\n  }\n"]))),P=p.d.div(o||(o=Object(f.a)(["\n  position: absolute;\n  z-index: 9;\n  top: 50%;\n  .MuiSvgIcon-root {\n    font-size: 3rem;\n    color: #fff;\n    cursor: pointer;\n    :hover {\n      color: #999;\n    }\n  }\n"]))),S=p.d.video(r||(r=Object(f.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n"]))),E=e(2),I=[{type:"video",src:z},{type:"pic",src:k},{type:"pic",src:w},{type:"pic",src:C}],T=p.d.div(s||(s=Object(f.a)(["\n  background-color: #000;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-size: cover;\n  ","\n"])),(function(n){var t=n.stage;return Object(p.c)(j||(j=Object(f.a)(["\n    background-image: url(",");\n  "])),I[t].src)})),J=function(){var n=Object(x.f)(),t=Object(a.useState)(0),e=Object(O.a)(t,2),c=e[0],i=e[1],o=I.length-1,r=function(n){i((function(t){return(t+n)%I.length<0?o:(t+n)%I.length}))};return Object(E.jsxs)(F,{children:["video"===I[c].type&&Object(E.jsxs)(S,{loop:!0,autoPlay:!0,muted:!0,children:[Object(E.jsx)("source",{src:z,type:"video/mp4"}),Object(E.jsx)("track",{src:"",kind:"captions",label:"captions"})]}),Object(E.jsx)(P,{style:{left:0},children:Object(E.jsx)(m.a,{onClick:function(){return r(-1)}})}),Object(E.jsx)(T,{stage:c,children:Object(E.jsx)(B,{onClick:function(){return n.push("/home")},children:"ENTRANCE"})}),Object(E.jsx)(P,{style:{right:0},children:Object(E.jsx)(v.a,{onClick:function(){return r(1)}})})]})},L=function(){var n=Object(x.f)();return Object(E.jsxs)("div",{style:{display:"flex"},children:[Object(E.jsx)("button",{type:"button",onClick:function(){return n.push("/")},children:"\ucee4\ubc84"}),Object(E.jsx)("button",{type:"button",onClick:function(){return n.push("/home")},children:"\ud648"}),Object(E.jsx)("button",{type:"button",onClick:function(){return n.push("/profile")},children:"\ud504\ub85c\ud544"}),Object(E.jsx)("button",{type:"button",onClick:function(){return n.push("/todolist")},children:"\ud22c\ub450(\ubc84\ud0b7)\ub9ac\uc2a4\ud2b8"}),Object(E.jsx)("button",{type:"button",children:"\ub2e4\uc774\uc5b4\ub9ac"}),Object(E.jsx)("button",{type:"button",children:"\uce98\ub9b0\ub354(\uae30\ud55c\uc788\ub294\uc57d\uc18d\ud45c\uae30,\ucc38\uc798\ud588\uc5b4\uc694)"}),Object(E.jsx)("button",{type:"button",children:"\uc791\uc5c5\ubb3c(\ud3ec\ud3f4)"})]})},M=function(){Object(x.f)();return Object(E.jsx)("div",{children:"\uc5ec\uae30\ub294 \uba54\uc778\ud398\uc774\uc9c0"})},N=function(){Object(x.f)();return Object(E.jsx)("div",{children:"\uc5ec\uae30\ub294 \ud504\ub85c\ud544\uc785\ub2c8\ub2e4."})},q=function(){return Object(E.jsx)("div",{children:"yearly"})},A=function(){return Object(E.jsx)("div",{children:"monthly"})},D=function(){return Object(E.jsxs)("div",{children:[Object(E.jsx)(A,{}),Object(E.jsx)(q,{})]})},R=function(){Object(x.f)();return Object(E.jsxs)("div",{children:[Object(E.jsx)(L,{}),Object(E.jsx)("div",{children:Object(E.jsxs)(x.c,{children:[Object(E.jsx)(x.a,{path:"/home",component:M}),Object(E.jsx)(x.a,{path:"/profile",exact:!0,component:N}),Object(E.jsx)(x.a,{path:"/todolist",exact:!0,component:D})]})})]})},_=function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(x.c,{children:[Object(E.jsx)(x.a,{path:"/",exact:!0,component:J}),Object(E.jsx)(R,{children:Object(E.jsx)(x.a,{path:"/home",exact:!0,component:M})})]})})},G=(e(45),function(n){n&&n instanceof Function&&Promise.resolve().then(e.bind(null,45)).then((function(t){var e=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;e(n),c(n),i(n),o(n),r(n)}))}),H=e(29);!function(n){n.Blue="blue"}(b||(b={}));var K,Q={palette:Object(H.a)({},b.Blue,"#1696e5")},U=Object(p.b)(K||(K=Object(f.a)(["\n\n  html {\n    font-size: 20px;\n  }\n  html,\n  body {\n    color: #717578;\n    font-family: 'spoqa', sans-serif;\n    font-weight: 400;\n    overflow: hidden;\n    padding: 0;\n    margin: 0;\n    font-size: 20px;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body,\n  body *,\n  input,\n  textarea,\n  ::selection,\n  button {\n  font-family: inherit;\n  letter-spacing: -0.12px;\n  }\n\n  button {\n    outline: 0;\n    border: 0;\n    cursor: pointer;\n  }\n"])));l.a.render(Object(E.jsx)(u.a.StrictMode,{children:Object(E.jsx)(h.a,{children:Object(E.jsxs)(p.a,{theme:Q,children:[Object(E.jsx)(U,{}),Object(E.jsx)(_,{})]})})}),document.getElementById("root")),G()}},[[47,1,2]]]);
//# sourceMappingURL=main.ce239a62.chunk.js.map