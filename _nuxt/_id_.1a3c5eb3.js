import{_ as d}from"./nuxt-link.95888a9f.js";import{t as k}from"./talks.a2affaa1.js";import{d as u,g as m,m as _,o as a,H as o,R as s,U as r,e as t,a as n,Z as h,V as g,W as f,S as x,w as v}from"./entry.b4a0d28c.js";const V={class:"page page--talk"},b={class:"page__header"},y={class:"heading-1"},N={class:"talk__track"},B={key:0,class:"talk__speakers talk__subsection"},C=s("h2",{class:"heading-3"},"Speaker",-1),S=["href"],w=["alt","src"],D={class:"talk__description talk__subsection"},R=s("h2",{class:"heading-3"},"Descripción",-1),E={class:"talk__footer"},Z=u({__name:"[id]",setup(F){const c=m(),e=_(()=>k[c.params.id]||{}),l=_(()=>{if(e.value.speaker)return`/i/speakers/${e.value.speaker.image}`});return(H,L)=>{const i=d;return a(),o("article",V,[s("header",b,[s("h1",y,r(t(e).title),1),s("h3",N,r(t(e).schedule),1)]),t(e).speaker?(a(),o("section",B,[C,s("a",{href:t(e).speaker.link,class:"talk__speaker",rel:"noopener noreferrer",target:"_blank"},[s("img",{alt:t(e).speaker.name,src:t(l),class:"talk__speaker-image"},null,8,w),n(" "+r(t(e).speaker.name),1)],8,S)])):h("",!0),s("div",D,[R,(a(!0),o(g,null,f(t(e).description,p=>(a(),o("p",null,r(p),1))),256))]),s("footer",E,[x(i,{class:"btn",to:"/program"},{default:v(()=>[n("Volver al programa")]),_:1})])])}}});export{Z as default};