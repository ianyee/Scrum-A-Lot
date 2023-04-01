(()=>{var w=Object.defineProperty,Q=Object.defineProperties,Y=Object.getOwnPropertyDescriptor,tt=Object.getOwnPropertyDescriptors,et=Object.getOwnPropertyNames,E=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable;var L=(t,e,o)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,x=(t,e)=>{for(var o in e||(e={}))W.call(e,o)&&L(t,o,e[o]);if(E)for(var o of E(e))ot.call(e,o)&&L(t,o,e[o]);return t},v=(t,e)=>Q(t,tt(e));var d=(t,e)=>()=>(t&&(e=t(t=0)),e);var rt=(t,e)=>{for(var o in e)w(t,o,{get:e[o],enumerable:!0})},nt=(t,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of et(e))!W.call(t,r)&&r!==o&&w(t,r,{get:()=>e[r],enumerable:!(n=Y(e,r))||n.enumerable});return t};var it=t=>nt(w({},"__esModule",{value:!0}),t);function _(t,e){let o=`${k}`;return k+=1,S[o]={handler:e,name:t},function(){delete S[o]}}function I(t,e){let o=!1;return _(t,function(...n){o!==!0&&(o=!0,e(...n))})}function F(t,e){for(let o in S)S[o].name===t&&S[o].handler.apply(null,e)}var S,k,D=d(()=>{S={},k=0;typeof window=="undefined"?figma.ui.onmessage=function([t,...e]){F(t,e)}:window.onmessage=function(t){let[e,...o]=t.data.pluginMessage;F(e,o)}});function U(t,e){if(typeof __html__=="undefined")throw new Error("No UI defined");let o=`<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command=="undefined"?"":figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof e=="undefined"?{}:e)};${__html__}<\/script>`;figma.showUI(o,t)}var M=d(()=>{});var R=d(()=>{D();M()});var st,kt,Ft,_t,Dt,Mt,at,Rt,bt,Bt,$t,Gt,Ht,Kt,Xt,ct,b,B=d(()=>{"use strict";({widget:st}=figma),{AutoLayout:kt,Frame:Ft,Text:_t,Rectangle:Dt,Image:Mt,SVG:at,Ellipse:Rt,useSyncedState:bt,useSyncedMap:Bt,usePropertyMenu:$t,useEffect:Gt,useWidgetId:Ht,register:Kt,waitForTask:Xt}=st,ct=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5255 6.96593C13.6631 6.43247 14.1912 6.11588 14.7049 6.25882L20.286 7.81174C20.7997 7.95468 21.1046 8.50302 20.9669 9.03648L18.4745 18.6957C18.3369 19.2292 17.8088 19.5458 17.2951 19.4028L11.714 17.8499C11.2003 17.707 10.8954 17.1587 11.0331 16.6252L13.5255 6.96593Z" fill="#4E5BA6"/>
<path d="M8 6C8 5.44772 8.44772 5 9 5H15C15.5523 5 16 5.44772 16 6V16C16 16.5523 15.5523 17 15 17H9C8.44772 17 8 16.5523 8 16V6Z" fill="#C8CCE5"/>
<path d="M3.03432 8.81198C2.89138 8.27852 3.20796 7.73018 3.74143 7.58724L9.53698 6.03432C10.0704 5.89138 10.6188 6.20796 10.7617 6.74143L13.3499 16.4007C13.4929 16.9342 13.1763 17.4825 12.6428 17.6254L6.84726 19.1783C6.31379 19.3213 5.76545 19.0047 5.62251 18.4712L3.03432 8.81198Z" fill="#EAECF5"/>
</svg>`,b=()=>figma.widget.h(at,{src:ct})});function T(t){return isNaN(Number(t))?t:`${t} ${t=="1"?"Point":"Points"}`}var O=d(()=>{"use strict"});var u,P=d(()=>{"use strict";u={votingState:"NotStarted",storyName:"No Title"}});function H({votingOptions:t,storyName:e,storyDescription:o,votings:n}){let[r,i]=dt("votingState",u),a=l=>{i(v(x({},r),{storyName:l}))};return figma.widget.h(p,{direction:"vertical",width:"fill-parent"},figma.widget.h(gt,{value:e,onTextEditEnd:l=>{a(l.characters)},placeholder:"No Title"}),figma.widget.h(c,{size:4}),figma.widget.h(m,{fontSize:12,fontWeight:400,fill:"#101828"},o),figma.widget.h(c,{size:40}),figma.widget.h(p,{direction:"vertical",width:"fill-parent",spacing:8},figma.widget.h(mt,{votings:n,votingOptions:t})),figma.widget.h(c,{size:40}),figma.widget.h(ut,{votings:n,votingOptions:t}))}function ut({votingOptions:t,votings:e}){let o=e.length,n=(()=>{switch(t.kind){case"numeric":return o>0?"\xF8 "+(Array.from(e.groupBy(r=>r.votedFor).values()).map(r=>Number(r[0].votedFor)*r.length).reduce((r,i)=>r+i,0)/o).toFixed(1)+" Points":"\u{1F485}";case"categorical":return}})();return figma.widget.h(p,{direction:"horizontal",horizontalAlignItems:"center",width:"fill-parent",cornerRadius:8},figma.widget.h(p,{direction:"horizontal",verticalAlignItems:"center",width:"hug-contents",height:34,fill:"#ECFDF3",cornerRadius:8,padding:{vertical:8,horizontal:16}},figma.widget.h(m,{fontSize:12,fontWeight:400,fill:"#054F31"},`${o} ${o==1?"Vote":"Votes"}`),n?figma.widget.h(p,{direction:"horizontal",verticalAlignItems:"center",width:"hug-contents"},figma.widget.h(c,{size:10}),figma.widget.h(N,{height:18,width:1,fill:"#D1FADF"}),figma.widget.h(c,{size:10}),figma.widget.h(m,{fontSize:12,fontWeight:400,fill:"#054F31"},n)):void 0))}function mt({votingOptions:t,votings:e}){let o=Array.from(e.groupBy(r=>r.votedFor,new Map(t.options.map(r=>[r,[]]))).entries()).filter(([r,i])=>i.length>0),n=e.length;return o.map(([r,i])=>figma.widget.h(p,{key:`${r}`,direction:"vertical",verticalAlignItems:"center",width:288,height:"hug-contents",spacing:8},figma.widget.h(p,{verticalAlignItems:"end",spacing:0,width:"fill-parent"},figma.widget.h(m,{fontSize:14,fontWeight:600,fill:"#101828"},T(r)),figma.widget.h(N,{height:1,width:"fill-parent"}),ht(i)),figma.widget.h(ft,{votes:i.length,totalVotes:n,length:288}),figma.widget.h(m,{fontSize:12,fontWeight:400,fill:"#101828",width:"fill-parent",horizontalAlignText:"right"},i.length," ",i.length==1?"Vote":"Votes")))}function ht(t){let e=[];for(let o=0;o<t.length;o+=G)e.push(t.slice(o,o+G));return figma.widget.h(p,{direction:"vertical",spacing:8},e.map((o,n)=>figma.widget.h(p,{key:`row_${n}`,direction:"horizontal",horizontalAlignItems:"end",spacing:8,width:"fill-parent"},o.map(r=>figma.widget.h(C,{key:`avatar_${r}`,photoUrl:r.userPhotoUrl,opacity:1})))))}function c({size:t}){return figma.widget.h(N,{width:t,height:t})}function C({photoUrl:t,opacity:e,key:o}){return figma.widget.h(pt,{key:o,width:24,height:24,src:t,cornerRadius:24,opacity:e})}function z({text:t,onClick:e}){return figma.widget.h(p,{width:"fill-parent",height:44,cornerRadius:8,fill:"#C8CCE5",onClick:()=>new Promise(e)},figma.widget.h(m,{verticalAlignText:"center",horizontalAlignText:"center",width:"fill-parent",lineHeight:44,fontSize:14,fontWeight:600,fill:"#000E52"},t))}var lt,p,N,m,$,pt,ee,oe,gt,dt,re,ne,ie,se,ae,ce,ft,G,K=d(()=>{"use strict";O();P();Array.prototype.groupBy=function(t,e){let o=e!=null?e:new Map;return this.reduce((n,r)=>{var a;let i=t(r);return n.set(i,((a=n.get(i))!=null?a:[]).concat([r]))},o)};Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};({widget:lt}=figma),{AutoLayout:p,Frame:N,Text:m,Rectangle:$,Image:pt,SVG:ee,Ellipse:oe,Input:gt,useSyncedState:dt,useSyncedMap:re,usePropertyMenu:ne,useEffect:ie,useWidgetId:se,register:ae,waitForTask:ce}=lt;ft=({votes:t,totalVotes:e,length:o})=>figma.widget.h(N,{width:o,height:8,cornerRadius:8},figma.widget.h($,{width:o,height:8,fill:"#F9FAFB"}),e>0?figma.widget.h($,{width:t/e*o,height:8,cornerRadius:8,fill:"#717BBC"}):null),G=6});var q={};rt(q,{default:()=>At});function At(){j.register(wt)}function wt(){let[t,e]=Z("votingState",u),o=xt("userVote");St(()=>{t.votingState=="Revealed"&&figma.closePlugin()});let n={itemType:"action",tooltip:"Reveal",propertyName:"reveal"},r={itemType:"action",tooltip:"Reset",propertyName:"reset"},i=(()=>{switch(t.votingState){case"InProgress":return[r,n];case"Revealed":return[r];default:return[]}})();return vt(i,({propertyName:a})=>{switch(a){case"reveal":t.votingState=="InProgress"&&e({votingState:"Revealed",votingOptions:t.votingOptions,storyName:t.storyName,storyDescription:t.storyDescription});break;case"reset":e(u),o.keys().forEach(l=>o.delete(l));break}}),figma.widget.h(f,{direction:"vertical",verticalAlignItems:"center",fill:"#FFFFFF",width:320,cornerRadius:8,effect:{type:"drop-shadow",color:{r:0,g:0,b:0,a:.2},offset:{x:0,y:2},blur:3,spread:2},padding:{vertical:16,horizontal:16}},(()=>{switch(t.votingState){case"NotStarted":return figma.widget.h(It,{onClickStart:()=>{U({width:240,height:400},{name:"INIT_VOTING_DATA"}),I("SET_VOTING",(a,l,g)=>{t.votingState=="NotStarted"&&e({votingState:"InProgress",votingOptions:a,storyName:l,storyDescription:g,activeWidgetUsers:figma.activeUsers.map(h=>{var s;return{userId:h.sessionId,userPhotoUrl:(s=h.photoUrl)!=null?s:""}})}),figma.closePlugin()})}});case"InProgress":return figma.widget.h(Ut,v(x({},t),{votedUserIds:o.values().map(a=>a.userId),onClickVote:()=>{var a;U({width:240,height:436},{name:"VOTING_DATA",votingOptions:t.votingOptions,storyDescription:t.storyDescription,storyName:t.storyName,votedFor:(a=o.get(figma.currentUser.sessionId.toString()))==null?void 0:a.votedFor}),I("SET_VOTE",l=>{if(t.votingState=="InProgress"){let g=figma.currentUser;o.set(g.sessionId.toString(),{userId:g.sessionId,userPhotoUrl:g.photoUrl,votedFor:l}),figma.notify(`${T(l)} it is. ${Vt.random()}`)}figma.closePlugin()})}}));case"Revealed":return figma.widget.h(H,{votings:o.values(),votingOptions:t.votingOptions,storyName:t.storyName,storyDescription:t.storyDescription});default:return}})())}function It({onClickStart:t}){return figma.widget.h(f,{direction:"vertical",horizontalAlignItems:"center",width:"fill-parent"},figma.widget.h(f,{direction:"horizontal",width:"hug-contents",verticalAlignItems:"center"},figma.widget.h(b,null),figma.widget.h(c,{size:4}),figma.widget.h(A,{fontSize:18,fontWeight:600,horizontalAlignText:"center",fill:"#000000"},"Scrum-A-Lot")),figma.widget.h(c,{size:4}),figma.widget.h(A,{fontSize:14,fontWeight:400,horizontalAlignText:"center",fill:"#667085"},"Start with creating a story and let your"),figma.widget.h(A,{fontSize:14,fontWeight:400,horizontalAlignText:"center",fill:"#667085"},"team estimate the effort."),figma.widget.h(c,{size:24}),figma.widget.h(z,{text:"Create Story",onClick:t}))}function Ut({storyName:t,storyDescription:e,activeWidgetUsers:o,votedUserIds:n,onClickVote:r}){let[i,a]=Z("votingState",u),l=s=>{a(v(x({},i),{storyName:s}))},g=[],h=o.map(s=>{var V;return{photoUrl:(V=s.userPhotoUrl)!=null?V:"",hasVoted:!!n.find(y=>y==s.userId)}});for(let s=0;s<h.length;s+=X)g.push(h.slice(s,s+X));return figma.widget.h(f,{direction:"vertical",width:"fill-parent"},figma.widget.h(yt,{value:t,fill:"#101828",fontSize:14,onTextEditEnd:s=>{l(s.characters)},placeholder:"No Title"}),figma.widget.h(c,{size:4}),figma.widget.h(A,{fontSize:12,fontWeight:400,fill:"#101828"},e),figma.widget.h(c,{size:40}),figma.widget.h(f,{direction:"vertical",horizontalAlignItems:"start",width:"fill-parent",spacing:8},g.map((s,V)=>figma.widget.h(f,{key:`row_${V}`,direction:"horizontal",horizontalAlignItems:"start",spacing:8,width:"fill-parent"},s.map(y=>figma.widget.h(C,{key:`avatar_${y}`,photoUrl:y.photoUrl,opacity:y.hasVoted?1:.3}))))),figma.widget.h(c,{size:40}),figma.widget.h(A,{fontSize:12,fontWeight:400,fill:"#101828"},`${n.length} ${n.length==1?"Vote":"Votes"}`),figma.widget.h(c,{size:8}),figma.widget.h(z,{text:"Vote",onClick:r}))}var j,f,Ue,A,Te,Ne,yt,Oe,Pe,Z,xt,vt,St,Ce,ze,Ee,Vt,X,J=d(()=>{"use strict";R();B();O();K();P();({widget:j}=figma),{AutoLayout:f,Frame:Ue,Text:A,Rectangle:Te,Image:Ne,Input:yt,SVG:Oe,Ellipse:Pe,useSyncedState:Z,useSyncedMap:xt,usePropertyMenu:vt,useEffect:St,useWidgetId:Ce,register:ze,waitForTask:Ee}=j;Vt=["Great choice!","Dy-na-mite.","The only possible choice tbh.","Excellent choice, citizen.","\u{1F4AA}\u{1F525}","Sweet decision making, worker."];X=6});var Tt={"src/main.tsx--default":(J(),it(q)).default},Nt="src/main.tsx--default";Tt[Nt]();})();
