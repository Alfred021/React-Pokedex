(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),r=n(18),i=n.n(r);n(25),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(10),l=n(9),j=n(2),u=n.p+"static/media/1066177-ashpokedex2.266217a8.png",d=(n(26),function(){return Object(c.jsxs)("section",{className:"pokedex-info",children:[Object(c.jsxs)("div",{className:"intro",children:[Object(c.jsx)("h2",{children:"Pok\xe9dex"}),Object(c.jsx)("p",{children:'The Pok\xe9dex (\u30dd\u30b1\u30e2\u30f3\u56f3\u9451 Pokemon Zukan) is an electronic device designed to catalogue and provide information regarding the various species of Pok\xe9mon featured in the Pok\xe9mon video game, anime and manga series. The name Pok\xe9dex is a neologism including "Pok\xe9mon" (which itself is a portmanteau of "pocket" and "monster") and "index". The Japanese name is simply "Pok\xe9mon Encyclopedia", as it can feature every Pok\xe9mon on it, depending on the Pok\xe9dex.'})]}),Object(c.jsx)("div",{className:"pokedex-image-container",children:Object(c.jsxs)("figure",{className:"pokedex-figure",children:[Object(c.jsx)("img",{alt:"pokedex",src:u}),Object(c.jsx)("figcaption",{children:"Kanto Pokedex"})]})}),Object(c.jsxs)("div",{className:"features",children:[Object(c.jsx)("h3",{children:"Features"}),Object(c.jsx)("h4",{children:"The Pok\xe9dex can..."}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Identify Pok\xe9mon"}),Object(c.jsx)("li",{children:"Scan Pok\xe9 Balls (Sinnoh, anime)"}),Object(c.jsx)("li",{children:"Identify battle moves"}),Object(c.jsx)("li",{children:"Show where to capture Pok\xe9mon (in-game)"})]})]})]})}),h=(n(27),n(4)),b=n.n(h),m=n(8),p=function(){var e=Object(m.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t,"/"));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(m.a)(b.a.mark((function e(){var t,n,c=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/?offset=".concat(t,"&limit=20"));case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){localStorage.clear(),localStorage.setItem(e,JSON.stringify(t))}},f=function(e){var t=JSON.parse(localStorage.getItem(e));if(null===t)throw new Error("Pokemon List not found in Storage");return t},g=function(e,t){if(void 0===e)throw new Error("Pokemon Name can't be undefined");try{localStorage.setItem(e,JSON.stringify(t))}catch(n){localStorage.clear(),localStorage.setItem(e,JSON.stringify(t))}},k=function(e){var t=JSON.parse(localStorage.getItem(e));if(null===t)throw new Error("Pokemon Info not found in Storage");return t},v=function(){var e=Object(m.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",f("page "+t));case 4:return e.prev=4,e.t0=e.catch(0),e.next=8,x(t);case 8:return n=e.sent,O("page "+t,n),e.abrupt("return",n);case 11:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",k(t));case 4:return e.prev=4,e.t0=e.catch(0),e.next=8,p(t);case 8:return n=e.sent,g(t,n),e.abrupt("return",n);case 11:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}(),w=function(e){var t=Object(s.useState)(null),n=Object(o.a)(t,2),c=n[0],a=n[1];return Object(s.useEffect)((function(){(function(){var t=Object(m.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:return n=t.sent,t.abrupt("return",a([n]));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),{pokemon:c}},y=(n(29),function(){var e=Object(j.f)().name,t=w(e).pokemon;return Object(c.jsx)(c.Fragment,{children:t&&Object(c.jsx)("section",{className:"pokemon-body",children:t.map((function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"pokemon-card",children:[Object(c.jsx)("p",{children:Object(c.jsx)("b",{children:"No.".concat(e.id," ").concat(e.name)})}),Object(c.jsx)("div",{className:"pokemon-image-container",children:Object(c.jsx)("img",{className:"pokemon-image",src:e.sprites.front_default,alt:"pokemon"})})]}),Object(c.jsxs)("div",{className:"pokemon-info",children:[Object(c.jsxs)("div",{className:"pokemon-attributes",children:[Object(c.jsx)("div",{className:"attributes-column-1",children:Object(c.jsxs)("ul",{className:"attibutes-list-1",children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("p",{className:"attribute-title",children:"Height"}),Object(c.jsx)("span",{className:"attribute-value",children:"".concat(e.height/10," m")})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("p",{className:"attribute-title",children:"Weight"}),Object(c.jsx)("span",{className:"attribute-value",children:"".concat(e.weight/10," kg")})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("p",{className:"attribute-title",children:"Types: "}),Object(c.jsx)("ul",{className:"attibutes-list-1",children:e.types.map((function(e){return Object(c.jsx)("li",{className:"types",children:Object(c.jsx)("p",{className:e.type.name,children:e.type.name})},e.type.name)}))})]})]})}),Object(c.jsx)("div",{className:"attributes-column-2",children:Object(c.jsx)("ul",{className:"attibutes-list-2",children:Object(c.jsxs)("li",{children:[Object(c.jsx)("p",{className:"attribute-title",children:"Skills:"}),e.abilities.map((function(e){return Object(c.jsx)("p",{className:"skill",children:e.ability.name},e.ability.name)}))]})})})]}),Object(c.jsx)("div",{className:"pokemon-stats",children:Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsx)("tr",{children:Object(c.jsx)("th",{children:"Base Stats"})})}),Object(c.jsxs)("tbody",{children:[Object(c.jsx)("tr",{children:e.stats.slice(0,2).map((function(e){return Object(c.jsxs)("td",{children:[Object(c.jsx)("p",{children:e.stat.name}),Object(c.jsx)("p",{children:e.base_stat})]},e.stat.name)}))}),Object(c.jsx)("tr",{children:e.stats.slice(2,4).map((function(e){return Object(c.jsxs)("td",{children:[Object(c.jsx)("p",{children:e.stat.name}),Object(c.jsx)("p",{children:e.base_stat})]},e.stat.name)}))}),Object(c.jsx)("tr",{children:e.stats.slice(4,6).map((function(e){return Object(c.jsxs)("td",{children:[Object(c.jsx)("p",{children:e.stat.name}),Object(c.jsx)("p",{children:e.base_stat})]},e.stat.name)}))})]})]})})]})]})}))})})}),S=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(0),r=Object(o.a)(a,2),i=r[0],l=r[1];return Object(s.useEffect)((function(){(function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(i);case 2:return t=e.sent,e.abrupt("return",c(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),console.log(n),{pokemons:n,setPage:l,page:i}},P=function(e){var t=e.name,n=w(t).pokemon;return Object(c.jsx)(c.Fragment,{children:n&&Object(c.jsx)("div",{children:n.map((function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("figure",{className:"preview-figure",children:Object(c.jsx)("img",{className:"pokemon-pic",alt:e.name,src:e.sprites.front_default})}),Object(c.jsx)("p",{className:"pokemon-name",children:"#".concat(e.id," ").concat(e.name)})]})}))})})},I=(n(35),function(){var e=S(),t=e.pokemons,n=e.setPage,s=e.page;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("section",{className:"pokemon-results",children:t&&Object(c.jsx)("ul",{className:"results",style:{height:"auto"},children:t.results.map((function(e){return Object(c.jsx)("li",{className:"list",children:Object(c.jsx)(l.b,{className:"link-to-pokemon",to:"/pokemon/".concat(e.name),children:Object(c.jsx)(P,{name:e.name})})},e.name)}))})}),Object(c.jsxs)("div",{className:"navigate-pages",children:[Object(c.jsx)("span",{onClick:function(){return n(0===s?0:function(e){return e-20})},children:"Prev"}),Object(c.jsx)("span",{onClick:function(){return n((function(e){return e+20}))},children:"Next"})]})]})}),J=n.p+"static/media/pokemon-23-logo-png-transparent.d42d0e59.png",C=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(""),i=Object(o.a)(r,2),u=i[0],h=i[1],b=Object(s.useState)(""),m=Object(o.a)(b,2),p=(m[0],m[1]);return Object(c.jsxs)(l.a,{children:[Object(c.jsxs)("div",{className:"modal ".concat(n?"show":""),children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Menu"}),Object(c.jsx)("button",{className:"close",onClick:function(){return a(!1)},children:"X"})]}),Object(c.jsxs)("ul",{style:{listStyleType:"none"},children:[Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{className:"section",to:"/info",children:"Info"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{className:"section",to:"/",children:"List"})})]})]}),Object(c.jsxs)("header",{children:[Object(c.jsx)("div",{className:"menu",children:Object(c.jsx)("button",{className:"menu-button",type:"button",onClick:function(){return a(!0)},children:"Menu"})}),Object(c.jsx)("img",{className:"title",alt:"Pokedex",src:J}),Object(c.jsxs)("div",{className:"search-bar",children:[Object(c.jsx)("input",{className:"search-input",type:"search",placeholder:"Search Pokemon",onChange:function(e){return h(e.target.value)},value:u}),Object(c.jsx)(l.b,{to:"/pokemon/".concat(u),children:Object(c.jsx)("button",{className:"search-button",type:"button",onClick:function(){return p(u)},children:"Search"})})]})]}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/",children:Object(c.jsx)(I,{})}),Object(c.jsx)(j.a,{path:"/pokemon/:name",children:Object(c.jsx)(y,{})}),Object(c.jsx)(j.a,{path:"/info",children:Object(c.jsx)(d,{})})]}),Object(c.jsx)("div",{className:"overlay ".concat(n?"show":""),onClick:function(){return a(!1)}}),Object(c.jsxs)("footer",{children:[Object(c.jsxs)("div",{className:"navigation",children:[Object(c.jsx)("span",{children:"Navigate: "}),Object(c.jsx)("span",{children:Object(c.jsx)(l.b,{className:"navigation-link",to:"/info",children:"Info "})}),Object(c.jsx)("span",{children:Object(c.jsx)(l.b,{className:"navigation-link",to:"/",children:"List "})})]}),Object(c.jsxs)("div",{className:"logos",children:[Object(c.jsx)("a",{href:"https://github.com/Alfred021/React-Pokedex",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("span",{children:Object(c.jsx)("img",{className:"logo-image",alt:"github",src:"https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-github-1.png",width:"35px",height:"35px"})})}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/alfredo-david-medina-lugo-177b461b4/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("span",{children:Object(c.jsx)("img",{className:"logo-image",alt:"linkedin",src:"https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png",width:"35px",height:"35px"})})}),Object(c.jsx)("a",{href:"mailto: alfred.med.barca.9@gmail.com",children:Object(c.jsx)("span",{children:Object(c.jsx)("img",{className:"logo-image",alt:"email",src:"https://icons-for-free.com/iconfiles/png/512/mail+message+new+send+icon-1320166532032442575.png",width:"35px",height:"35px"})})})]})]})]})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.099ecefa.chunk.js.map