import{b as g}from"./utils.a84715e2.js";import{d as h,i as y,m as c,k as p,y as m}from"./entry.54572d78.js";const S=h({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(e){const{parent:i}=m(),{between:o,default:l}=y(),u=c(()=>typeof e.unwrap=="string"?e.unwrap.split(" "):["*"]);return{fallbackSlot:l,tags:u,between:o,parent:i}},render({use:e,unwrap:i,fallbackSlot:o,between:l,tags:u,parent:n}){var f;try{let s=e;if(typeof e=="string"&&(s=(n==null?void 0:n.slots[e])||((f=n==null?void 0:n.parent)==null?void 0:f.slots[e]),console.warn(`Please set :use="$slots.${e}" in <ContentSlot> component to enable reactivity`)),!s)return o?o():p("div");if(!i)return[s()];const{flatUnwrap:d}=g(),a=d(s(),u);return l?a.flatMap((t,r)=>r===0?[t]:[l(),t]):a.reduce((t,r)=>(typeof r.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=r.children:t.push(r.children):t.push(r),t),[])}catch{return p("div")}}});export{S as default};