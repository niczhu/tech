import{f as m,h as e,T as i,m as u,g as p,n as d,p as c,q as f,r as s,s as v,t as g}from"./app.c609ec03.js";import{S as b}from"./SkipLink.fc3e2446.js";var y=m({name:"FadeSlideY",setup(l,{slots:a}){const t=u(),n=t.resolve,r=t.pending;return()=>e(i,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:n,onBeforeLeave:r},()=>{var o;return(o=a.default)==null?void 0:o.call(a)})}}),S=m({name:"Layout",setup(){const l=g(),a=p(),t=v(),n=d(),r=c(),o=f(()=>a.value.blog.sidebarDisplay||l.value.blog.sidebarDisplay||"mobile");return()=>[e(b),e(s("CommonWrapper"),{},{default:()=>n.value.home?e(s("HomePage")):e(y,()=>e(s("NormalPage"),{key:t.value.path})),...o.value!=="none"?{navScreenBottom:()=>e(s("BloggerInfo"))}:{},...!r.value&&o.value==="always"?{sidebar:()=>e(s("BloggerInfo"))}:{}})]}});export{S as default};
