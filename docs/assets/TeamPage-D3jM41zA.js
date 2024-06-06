import{_ as P,o as d,c as g,r as L,d as E,a as N,b as y,w as f,e as o,f as p,t as T,F as $,g as I,h as w,B as C,i as V,p as G,j as U,u as j,s as q,k as x,l as D,m as z,n as A,q as S,v as Y,D as H,x as J,y as B,z as K}from"./index-BEgOPZXg.js";const M={},O={class:"tag caption"};function Q(e,a){return d(),g("span",O,[L(e.$slots,"default",{},void 0)])}const W=P(M,[["render",Q],["__scopeId","data-v-3a4ef8ff"]]),X=e=>(G("data-v-2ffcd12b"),e=e(),U(),e),Z=["src","alt"],R={class:"card__content"},ee={class:"card__title"},te={class:"card__id h4"},ae={class:"card__types"},se=X(()=>o("h3",{class:"card__types-title h4"},"Types",-1)),ce={class:"card__types-tags"},ne={class:"card__actions"},oe=["src"],re=E({__name:"CardTeam",props:{id:{},name:{},image:{},types:{},stats:{},cries:{}},emits:["click-sound","click-delete"],setup(e,{emit:a}){const s=a,c=N();function l(){s("click-sound",c)}function _({id:t,name:r}){s("click-delete",{id:t,name:r})}return(t,r)=>(d(),y(V,{class:"card"},{default:f(()=>[o("img",{class:"card__image",src:t.image,alt:`Pokemon ${t.name} image`},null,8,Z),o("div",R,[o("h2",ee,[p(T(t.name)+" ",1),o("span",te,"#"+T(t.id),1)]),o("div",ae,[se,o("div",ce,[(d(!0),g($,null,I(t.types,m=>(d(),y(W,{class:"card__types-tag caption",key:m},{default:f(()=>[p(T(m),1)]),_:2},1024))),128))])])]),o("div",ne,[o("audio",{ref_key:"audioRef",ref:c,src:t.cries.latest},null,8,oe),w(C,{class:"card__sound",onClick:l},{default:f(()=>[p("Sound")]),_:1}),w(C,{class:"card__sound",background:"hsla(2, 100%, 64%, 0.09)",color:"var(--light-text)",onClick:r[0]||(r[0]=m=>_({id:t.id,name:t.name}))},{default:f(()=>[p(" Delete ")]),_:1})])]),_:1}))}}),ie=P(re,[["__scopeId","data-v-2ffcd12b"]]);function de(e){var s,c;return{id:e.id.toString(),name:e.name,image:(c=(s=e.sprites.other)==null?void 0:s.showdown)==null?void 0:c.front_default,types:e.types.map(l=>l.type.name),stats:e.stats,cries:e.cries,height:e.height,weight:e.weight}}const le=async()=>{const e=j(),{pokemonTeamData:a,pokemonTeam:s}=q(e),c=A,{data:l,isLoading:_,isError:t,refetch:r}=await x(()=>{const u=s.value.map(n=>z(c,{id:n}));return Promise.all(u)}),m=D(s,async()=>{await r()},{immediate:!1}),k=D(()=>l.value,u=>{if(!u)return null;const n=u.map(h=>de(h));e.setPokemonTeamData(n)},{immediate:!0});function v(){m(),k()}return{pokemonTeamData:a,isLoading:_,isError:t,refetch:r,cleanEffects:v}},me={key:0,class:"empty"},ue=E({__name:"TeamPage",async setup(e){let a,s;const{pokemonTeam:c,refetch:l,cleanEffects:_}=([a,s]=S(()=>J()),a=await a,s(),a),{pokemonTeamData:t,isLoading:r,isError:m,cleanEffects:k}=([a,s]=S(()=>le()),a=await a,s(),a);async function v({id:n,name:h}){if(!confirm(`Remove "${h}" from your team?`))return null;const F=c.value.filter(b=>b!==n);await K(F),setTimeout(()=>l(),700)}function u(n){n.value&&n.value.play()}return Y(()=>{k(),_()}),(n,h)=>(d(),y(H,null,{default:f(()=>[B(t).length?(d(!0),g($,{key:1},I(B(t),i=>(d(),y(ie,{class:"card-team",key:i.id,id:i.id,name:i.name,image:i.image,types:i.types,stats:i.stats,cries:i.cries,onClickSound:u,onClickDelete:v},null,8,["id","name","image","types","stats","cries"]))),128)):(d(),g("h1",me," You don't have pokemon on your team, catch some! "))]),_:1}))}}),fe=P(ue,[["__scopeId","data-v-7096f113"]]);export{fe as default};