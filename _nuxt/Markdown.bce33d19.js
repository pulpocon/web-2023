import s from"./ContentSlot.fabd830e.js";import{d as o,i as m,m as u,y as f}from"./entry.602e7223.js";import"./utils.e9e76bea.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=f(),{between:n,default:a}=m(),r=u(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{d as default};