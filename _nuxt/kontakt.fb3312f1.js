import{_ as z}from"./spodok.e065be54.js";import{a as x,r as m,f as _,e as s,u as l,i as n,j as g,k as v,v as u,h as V,o as k,p as C,b as S}from"./entry.ebad851a.js";import"./nuxt-link.6e43ad22.js";const E=()=>{let e={template:{meno:"",priezvisko:"",mail:"",sprava:""},errory:{meno:2,priezvisko:2,mail:2,sprava:2}};return console.log(e),e};const a=r=>(C("data-v-0edfe576"),r=r(),S(),r),I=a(()=>s("div",{class:"bg"},null,-1)),O={class:"messageContainer"},U=a(()=>s("h3",null,"Zle si vyplnil formulár",-1)),w=a(()=>s("p",null,"Skús opraviť červené vstupy",-1)),B=a(()=>s("h3",null,"Úspešne odoslané",-1)),N=a(()=>s("p",null,"Správu si určite pozriem 😉",-1)),$={class:"content"},K={class:"form"},M=a(()=>s("h1",null,"Pošli mi E-mail:",-1)),P=a(()=>s("label",{for:"sprava"},"Správa",-1)),T={__name:"kontakt",setup(r){let c=E(),e=m(c.template),o=m(c.errory),p=m(2);console.table(o);const f=()=>{y(),o.meno==0&&o.priezvisko==0&&o.mail==0&&o.sprava==0?(console.log("Odoslanie na firebase"),p=0,e.meno="",e.priezvisko="",e.mail="",e.sprava=""):(console.log("ne"),p=1)},y=()=>{e.meno.trim()?o.meno=0:o.meno=1,e.priezvisko.trim()?o.priezvisko=0:o.priezvisko=1,e.mail.trim()&&e.mail.includes("@")==!0?o.mail=0:o.mail=1,e.sprava.trim()?o.sprava=0:o.sprava=1,console.table(o),console.log(p)},d=()=>m(0);return(b,t)=>{const h=z;return k(),_("div",null,[I,s("div",O,[l(p)==1?(k(),_("div",{key:0,class:n(["error",{invisible:d()==0}])},[U,w,s("button",{onClick:t[0]||(t[0]=i=>d())},"OK")],2)):l(p)==0?(k(),_("div",{key:1,class:n(["success",{invisible:d()==0}])},[B,N,s("button",{onClick:t[1]||(t[1]=i=>d())},"OK ❤")],2)):g("",!0)]),s("div",$,[s("div",K,[M,v(s("input",{type:"text",id:"meno",placeholder:"Meno","onUpdate:modelValue":t[2]||(t[2]=i=>l(e).meno=i),class:n({chyba:l(o).meno==1})},null,2),[[u,l(e).meno]]),v(s("input",{type:"text",id:"priezvisko",placeholder:"Priezvisko","onUpdate:modelValue":t[3]||(t[3]=i=>l(e).priezvisko=i),class:n({chyba:l(o).priezvisko==1})},null,2),[[u,l(e).priezvisko]]),v(s("input",{type:"text",id:"e-mail",placeholder:"E-mail","onUpdate:modelValue":t[4]||(t[4]=i=>l(e).mail=i),class:n({chyba:l(o).mail==1})},null,2),[[u,l(e).mail]]),P,v(s("textarea",{id:"sprava","onUpdate:modelValue":t[5]||(t[5]=i=>l(e).sprava=i),class:n({chyba:l(o).sprava==1})},null,2),[[u,l(e).sprava]]),s("button",{onClick:t[6]||(t[6]=i=>f()),id:"send"},"Odošli")])]),V(h)])}}},q=x(T,[["__scopeId","data-v-0edfe576"]]);export{q as default};
