(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{111:function(e,t,a){e.exports=a.p+"static/media/virtual-shelf.cec30e7e.png"},131:function(e,t,a){e.exports=a(167)},136:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(11),l=a.n(c),i=(a(136),a(89)),s=a(50),u=a(219),m=a(12);!function(e){e.Index="/",e.Films="/films"}(n||(n={}));var d,p=a(117),f=a(15),h=a.n(f),b=a(26),E=a(14),g=a(98),v=a(208),O=a(216),S=a(224),j=a(220),x=a(81),y=a(212),w=a(223),C=a(229),k=a(88),I=a(222),A=a(116),R=a.n(A),T=a(111),M=a.n(T),_=a(218),L=a(66),N=a(3),D=a(209),G=a(210),F=a(211),P=a(217),B=a(204),H=a(75),W=a.n(H),Y=a(113),U=a.n(Y),z=a(221),X=a(228),K=a(226),J=a(207),q=a(206),Q=Object(g.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}})),V=function(e){var t=e.data,a=Q(),n=o.a.useState(!1),r=Object(E.a)(n,2),c=(r[0],r[1]);return o.a.createElement("div",{className:a.root,"data-testid":"accordionsTestId"},t.map((function(e){return o.a.createElement(K.a,{onChange:(t=e.url,function(e,a){c(!!a&&t)}),style:{padding:10}},o.a.createElement(q.a,{expandIcon:o.a.createElement(W.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},o.a.createElement(x.a,{className:a.heading,color:"primary"},e.title)),o.a.createElement(J.a,null,o.a.createElement(v.a,null,o.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},"Title: ",e.title),o.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},"Genre: ",e.genre),o.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},"CreatedAt: ",e.createdAt),o.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},"Shelf: ",e.shelf.name))));var t})))},Z=a(112),$=a.n(Z),ee=function(e){var t=Object.keys(e),a="";return t.forEach((function(t){var n="object"===typeof e[t],r=n&&e[t].length>=0;n||(a+="".concat(t,"=").concat(e[t],"&")),n&&r&&e[t].forEach((function(e){a+="".concat(t,"=").concat(e,"&")}))})),a?a.slice(0,-1):a},te=function(){var e=Object(b.a)(h.a.mark((function e(t,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t&&(null===a||void 0===a?void 0:a.method)){e.next=3;break}return e.abrupt("return",Promise.reject("Please enter endpoint"));case 3:return"GET"===a.method&&(a.paramsSerializer=function(e){return ee(e)}),e.abrupt("return",$()(t,a).then((function(e){return e.data})));case 8:return e.prev=8,e.t0=e.catch(0),console.log("err",e.t0),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),ae=Object(g.a)((function(e){return{root:{maxWidth:345,padding:20,marginTop:25,border:"1px solid #70B8FF",borderRadius:20},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(10deg)"}}})),ne=function(e){var t=e.film,a=e.setErrors,n=e.bookGenres;console.log(n,"book GENRES");var c=ae(),l=o.a.useState(!1),i=Object(E.a)(l,2),s=i[0],u=i[1],m=o.a.useState(),d=Object(E.a)(m,2),p=d[0],f=d[1],g=o.a.useState(!1),v=Object(E.a)(g,2),S=v[0],j=v[1],C=Object(r.useState)(""),I=Object(E.a)(C,2),A=I[0],R=I[1],T=Object(r.useState)(""),M=Object(E.a)(T,2),H=M[0],Y=M[1],K=Object(r.useState)([]),J=Object(E.a)(K,2),q=(J[0],J[1]),Q=function(){var e=Object(b.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u(!s),e.prev=1,p){e.next=10;break}return j(!0),e.next=6,$();case 6:n=e.sent,console.log(n),j(!1),f(n.filter((function(e){return e.shelf.id===t.id})));case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),j(!1),a([{message:"Something went wrong, please try again"}]);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(b.a)(h.a.mark((function e(a){var n,r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(H,A,"asd"),n={shelfId:t.id,title:A,genre:H},e.next=5,te("https://examen-andreea-react-node.herokuapp.com/api/book/",{method:"POST",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},data:n});case 5:return r=e.sent,console.log(r),e.next=9,$();case 9:o=e.sent,f(o.filter((function(e){return e.shelf.id===t.id}))),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te("https://examen-andreea-react-node.herokuapp.com/api/book/",{method:"GET",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}});case 3:return t=e.sent,console.log(t,"books are"),q(t),e.abrupt("return",t);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return t?o.a.createElement(D.a,{className:c.root},o.a.createElement(G.a,{action:o.a.createElement(k.a,{"aria-label":"settings"},o.a.createElement(U.a,null)),title:"Shelf Name: ".concat(t.name),subheader:"Shelf Description: ".concat(t.description)}),o.a.createElement(F.a,null,o.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},"Create New Book"),o.a.createElement(y.a,null,o.a.createElement(x.a,{id:"modal-modal-title",variant:"h6",component:"h2"},"Title:"),o.a.createElement(w.a,{variant:"outlined",name:"newBookTitle",value:A,onChange:function(e){return R(e.target.value)}}),o.a.createElement(x.a,{id:"modal-modal-title",variant:"h6",component:"h2"},"Genre:"),o.a.createElement(z.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:H,label:"Age",onChange:function(e){var t;Y(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}},n&&n.map((function(e){return o.a.createElement(X.a,{value:e},e)})))),o.a.createElement(O.a,{variant:"outlined",onClick:Z,style:{marginTop:20}}," Create Book in ",t.name," shelf ")),o.a.createElement(P.a,{disableSpacing:!0},o.a.createElement(k.a,{className:Object(N.default)(c.expand,Object(L.a)({},c.expandOpen,s)),onClick:Q,"aria-expanded":s,"aria-label":"show more"},o.a.createElement(x.a,null,"Get books"),o.a.createElement(W.a,null))),o.a.createElement(B.a,{in:s,timeout:"auto",unmountOnExit:!0},o.a.createElement(F.a,null,S?o.a.createElement(_.a,{color:"primary"}):o.a.createElement("div",null,o.a.createElement(x.a,{paragraph:!0},"Method:"),o.a.createElement(V,{data:p||[]}))))):o.a.createElement(o.a.Fragment,null)},re=Object(g.a)((function(e){return{container:{marginTop:10},linearProgress:{width:"70%"}}})),oe=function(e){var t=e.loading,a=e.selectedFilms,n=e.bookGenres,r=e.setErrors,c=re();return t?o.a.createElement(y.a,{container:!0,justify:"center",className:c.container},o.a.createElement(_.a,{className:c.linearProgress}),o.a.createElement(_.a,{color:"primary",className:c.linearProgress})):o.a.createElement(v.a,{fixed:!0},o.a.createElement(y.a,{item:!0,container:!0,wrap:"wrap",justify:"space-around",alignItems:"center",direction:"row",style:{padding:20}},a.map((function(e){return o.a.createElement(ne,{setErrors:r,film:e,bookGenres:n})}))))},ce=a(115),le=a.n(ce),ie=Object(g.a)((function(e){return{root:{flexGrow:1},container:{marginTop:10},img:{flex:1,padding:5,maxWidth:"100%"},linearProgress:{width:"70%"},modal:{position:"absolute",top:"20%",left:"40%",border:"2px solid #000",backgroundColor:"white",padding:40}}})),se=function(){var e=ie(),t=Object(r.useState)(),a=Object(E.a)(t,2),n=a[0],c=a[1],l=Object(r.useState)(!1),i=Object(E.a)(l,2),s=i[0],u=i[1],m=Object(r.useState)(),d=Object(E.a)(m,2),f=(d[0],d[1],Object(r.useState)([])),g=Object(E.a)(f,2),A=g[0],T=g[1],_=Object(r.useState)([]),L=Object(E.a)(_,2),N=L[0],D=L[1],G=Object(r.useState)(""),F=Object(E.a)(G,2),P=F[0],B=F[1],H=Object(r.useState)(""),W=Object(E.a)(H,2),Y=W[0],U=W[1],z=o.a.useState(!1),X=Object(E.a)(z,2),K=X[0],J=X[1];Object(r.useEffect)((function(){V()}),[]);var q=function(){var e=Object(b.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,te("http://localhost:4040/api/shelf/name/".concat(t),{method:"GET",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}});case 4:a=e.sent,console.log(a,"shelvees"),T(a),u(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),c([{message:"Something went wrong, please try again"}]);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,te("http://localhost:4040/api/shelf/",{method:"POST",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},data:{name:P,description:Y}});case 4:t=e.sent,console.log(t),u(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),c([{message:"Something went wrong, please try again"}]);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,te("http://localhost:4040/api/book/genres",{method:"GET",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}});case 4:t=e.sent,D(t),console.log(t),u(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),c([{message:"Something went wrong, please try again"}]);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),Z=function(e){var t=e.target,a=t.name,n=t.value;"newShelfName"===a&&B(n),"newShelfDescription"===a&&U(n)},$=function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("am apasat",Y,P),e.next=3,Q();case 3:B(""),U("");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement(v.a,null,o.a.createElement(O.a,{onClick:function(){return J(!0)}},"Create New Shelf"),o.a.createElement(S.a,{open:K,onClose:function(){return J(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},o.a.createElement(j.a,{className:e.modal},o.a.createElement(x.a,{id:"modal-modal-title",variant:"h6",component:"h2"},"Create New Shelf"),o.a.createElement(y.a,null,o.a.createElement(x.a,{id:"modal-modal-title",variant:"h6",component:"h2"},"Name:"),o.a.createElement(w.a,{variant:"outlined",name:"newShelfName",value:P,onChange:Z}),o.a.createElement(x.a,{id:"modal-modal-title",variant:"h6",component:"h2"},"Description:"),o.a.createElement(w.a,{variant:"outlined",name:"newShelfDescription",value:Y,onChange:Z})),o.a.createElement(O.a,{variant:"outlined",onClick:$,style:{marginTop:20}}," Create "))),o.a.createElement(y.a,{container:!0,justify:"space-around",item:!0,sm:!0,xs:12,alignContent:"center",alignItems:"center"},o.a.createElement("img",{src:M.a,className:e.img,alt:"logo"}),o.a.createElement(I.a,{multiple:!0,id:"fixed-tags-demo",onChange:function(e,t){return function(e){console.log(e)}(t)},options:A,getOptionLabel:function(e){return e.name},renderTags:function(e,t){return e.map((function(e,a){return o.a.createElement(C.a,Object.assign({label:e.name},t({index:a})))}))},style:{minWidth:"50vw"},renderInput:function(e){return o.a.createElement("form",null,o.a.createElement(w.a,Object.assign({},e,{id:"filled-basic",label:"Search for a shelf",variant:"outlined",placeholder:"Search for a shelf",onChange:function(e){return t=e.target.value,console.log(t),void q(t);var t}})))}})),o.a.createElement(x.a,{id:"modal-modal-title",variant:"h6",component:"h2"},"Available book genres: ",N.join(", ")),o.a.createElement(y.a,{container:!0,justify:"center",item:!0,sm:!0,xs:12,alignContent:"center",alignItems:"center"},o.a.createElement("div",null,n&&n.map((function(e){return o.a.createElement(le.a,{action:o.a.createElement(k.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){c(Object(p.a)(n.filter((function(t){return e.message!==t.message}))))}},o.a.createElement(R.a,{fontSize:"inherit"})),severity:"error"},e.message," ")})))),o.a.createElement(oe,{loading:s,selectedFilms:A||[],bookGenres:N,setErrors:function(e){return c(e)}})))},ue=function(){return o.a.createElement("div",{"data-testid":"RoutesComponent"},o.a.createElement(m.d,null,o.a.createElement(m.b,{exact:!0,path:n.Index},o.a.createElement(se,null)),o.a.createElement(m.b,{path:n.Index},o.a.createElement(m.a,{to:n.Index}))))},me=a(54);!function(e){e.ADD_FILMS="ADD_FILMS"}(d||(d={}));var de,pe,fe,he,be=function(e,t){switch(t.type){case d.ADD_FILMS:return{films:t.payload.films};default:return e}},Ee={film:{films:[]}},ge=function(e,t){var a=e.film;return{film:be(a,t)}},ve=Object(r.createContext)(Object(me.a)(Object(me.a)({},Ee),{},{dispatch:function(){}})),Oe=function(e){var t=Object(r.useReducer)(ge,Ee),a=Object(E.a)(t,2),n=a[0],c=a[1];return o.a.createElement(ve.Provider,{value:Object(me.a)(Object(me.a)({},n),{},{dispatch:c})},e.children)};!function(e){e.PRIMARY_MAIN_COLOR="#0f99d6",e.PRIMARY_DARK_COLOR="#034694",e.SUCCESS_COLOR="#8dc63f",e.ERROR_MAIN_COLOR="#ff0000",e.SWITCH_LIGHT_BLUE="#cfebf7",e.SWITCH_LIGHT_GREY="#b0b0b0",e.SWITCH_DISABLED_GREY="#efefef",e.SWITCH_DARK_GREY="#505050",e.BLACK_MEDIUM="rgba(0, 0, 0, 0.8)",e.WHITE="#fff",e.BLACK="#000",e.CARD_BORDER="#f0f0f0"}(de||(de={})),function(e){e.FONT_FAMILY='"Open Sans", "Helvetica", "Arial", sans-serif'}(pe||(pe={})),function(e){e[e.MEDIUM=600]="MEDIUM"}(fe||(fe={})),function(e){e[e.XS=0]="XS",e[e.SM=576]="SM",e[e.MD=768]="MD",e[e.LG=992]="LG",e[e.XL=1200]="XL"}(he||(he={}));var Se={typography:{fontFamily:pe.FONT_FAMILY,fontWeightMedium:fe.MEDIUM,body2:{fontSize:"0.75rem"}},palette:{background:{default:"#ebeded"},primary:{main:de.PRIMARY_MAIN_COLOR,dark:de.PRIMARY_DARK_COLOR},secondary:{main:de.SUCCESS_COLOR},error:{main:de.ERROR_MAIN_COLOR}},breakpoints:{values:{xs:he.XS,sm:he.SM,md:he.MD,lg:he.LG,xl:he.XL}}},je=Object(s.a)(Se),xe=function(e){return o.a.createElement("div",{className:"App","data-testid":"AppComponent"},o.a.createElement(u.a,{theme:je},o.a.createElement(i.a,null,o.a.createElement(Oe,null,o.a.createElement(ue,null)))))};window.renderEpam=function(e){var t=document.getElementById(e);t&&l.a.render(o.a.createElement(xe,null),t)},window.unmountEpam=function(e){var t=document.getElementById(e);t&&l.a.unmountComponentAtNode(t)},window.isRenderedByContainer||window.renderEpam("root")}},[[131,1,2]]]);
//# sourceMappingURL=main.2e29ef64.chunk.js.map