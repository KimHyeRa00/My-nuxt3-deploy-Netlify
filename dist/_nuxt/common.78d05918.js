import{l as t}from"./entry.faf371bd.js";const s=t("common",{state:()=>({data1:null,data2:null,isDataLoaded:!1}),getters:{getData1:a=>a.data1,getData2:a=>a.data2,getIsDataLoaded:a=>a.isDataLoaded},actions:{setData1(a){this.data1=a},setData2(a){this.data2=a,this.isDataLoaded=!0,console.log("setData2")}}});export{s as u};
