import{l as t,m as o}from"./entry.faf371bd.js";const n=t("user",{state:()=>({token:null,notStorage:null}),getters:{getToken:e=>e.token,getIsAuth:e=>e.token!==null},actions:{setToken(e){this.token=e},removeToken(e){this.token=null}},persist:{storage:o.sessionStorage,key:"token",reducer:e=>({token:e.token})}});export{n as u};