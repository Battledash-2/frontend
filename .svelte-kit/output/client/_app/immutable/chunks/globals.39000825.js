import{w as s}from"./index.1f9e5d30.js";const h=s(!0),f=s(!1),p=s({id:-1,username:"",bio:"",profile_icon:"",role:"default"}),u="https://api.datapackhub.net";function l(){return localStorage.getItem("dp_colorPref")=="true"}async function m(t){return(await(await fetch(`${u}/user/id/${t}`)).json()).username}async function k(t,e){const o=await fetch(e,{method:t,headers:{Authorization:`Basic ${await r("dph_token")}`}});return o.status==498&&c("dph_token"),o}async function g(t,e){const o=await fetch(t,{method:"post",body:JSON.stringify(e),headers:{Authorization:`Basic ${await r("dph_token")}`}});return o.status==498&&c("dph_token"),o}async function r(t){const e=t+"=",i=decodeURIComponent(document.cookie).split(";");for(let n=0;n<i.length;n++){let a=i[n];for(;a.charAt(0)==" ";)a=a.substring(1);if(a.indexOf(e)==0)return a.substring(e.length,a.length)}return""}async function c(t){document.cookie=t+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}export{f as a,u as b,m as c,k as f,r as g,h as i,l,g as p,p as u};