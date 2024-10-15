import{Hd as b,Kb as d,Nb as f,Nc as n,O as p,S as l,e as m,jd as a,nd as u,qd as g,rd as y}from"./chunk-VHX6PEQ4.js";var E="lab-icon-css",S="lab-theme-css",P=(()=>{class h{constructor(){this.document=l(f),this.preferencesSvc=l(y),this.settingsSvc=l(b),this.themeValues$=new m(1),this.head=this.document.getElementsByTagName("head")[0],d(()=>{let e=this.preferencesSvc.theme(),o=this.document.getElementById(S);if(o){let s=this.themePath(e);if(o.href.endsWith(s))this.updateThemeValues();else{let i=this.document.createElement("link");i.rel="stylesheet",i.href=s,i.onload=()=>{o.href=s,this.head.removeChild(i),this.updateThemeValues()},this.head.appendChild(i)}}for(let s of[a.Light,a.Dark,a.Black])s===e?this.document.body.classList.add(s):this.document.body.classList.remove(s)}),d(()=>{let e=this.settingsSvc.dataset(),o=this.document.getElementById(E);o&&this.head.removeChild(o);let s=this.document.createElement("style");s.id=E;let i="";e.iconIds.forEach(t=>{let c=e.iconEntities[t],r=this.escapeSelector(t);i+=`.${r}::before { background-image: url("${e.iconFile}"); background-position: ${c.position}; } `,i+=this.appendLightStyle(c,r,"")}),e.itemIds.map(t=>e.itemEntities[t]).filter(n("icon")).forEach(t=>{let c=e.iconEntities[t.icon],r=this.escapeSelector(t.id);i+=`.${r}.item::before { background-image: url("${e.iconFile}"); background-position: ${c.position}; } `,i+=this.appendLightStyle(c,r,".item")}),e.recipeIds.map(t=>e.recipeEntities[t]).filter(n("icon")).forEach(t=>{let c=e.iconEntities[t.icon],r=this.escapeSelector(t.id);i+=`.${r}.recipe::before { background-image: url("${e.iconFile}"); background-position: ${c.position}; } `,i+=this.appendLightStyle(c,r,".recipe")}),e.categoryIds.map(t=>e.categoryEntities[t]).filter(n("icon")).forEach(t=>{let c=e.iconEntities[t.icon],r=this.escapeSelector(t.id);i+=`.${r}.category::before { background-image: url("${e.iconFile}"); background-position: ${c.position}; } `,i+=this.appendLightStyle(c,r,".category")}),e.itemIds.map(t=>e.itemEntities[t]).filter(n("iconText")).forEach(t=>{let c=this.escapeSelector(t.id);i+=`.${c}.item::after { content: "${t.iconText}"; } `}),e.recipeIds.map(t=>e.recipeEntities[t]).filter(n("iconText")).forEach(t=>{let c=this.escapeSelector(t.id);i+=`.${c}.recipe::after { content: "${t.iconText}"; } `}),e.categoryIds.map(t=>e.categoryEntities[t]).filter(n("iconText")).forEach(t=>{let c=this.escapeSelector(t.id);i+=`.${c}.category::after { content: "${t.iconText}"; } `}),s.innerText=i,this.head.appendChild(s)})}appendLightStyle(e,o,s){if(!e.invertLight)return"";let i=`body.light .${o}${s}::before { filter: invert(1); } `;return i+=`.invert .${o}::before { filter: invert(1); } `,i+=`body.light .invert .${o}::before { filter: none; } `}updateThemeValues(){let e=getComputedStyle(this.document.body),o={textColor:e.getPropertyValue("--text-color"),successColor:e.getPropertyValue("--success-color"),successBackground:e.getPropertyValue("--success-background"),dangerColor:e.getPropertyValue("--danger-color"),dangerBackground:e.getPropertyValue("--danger-background")};this.themeValues$.next(o)}themePath(e){switch(e){case a.Light:return"theme-light.css";case a.Black:return"theme-black.css";default:return"theme-dark.css"}}escapeSelector(e){return e.replace(/([^A-Za-z0-9_-])/g,"\\$1")}static appInitTheme(){let e=g.theme,o=u("preferences");if(o)try{e=JSON.parse(o).theme}catch{}if(e===a.Light){let s=window.document.getElementById(S);s&&(s.href="theme-light.css")}}static{this.\u0275fac=function(o){return new(o||h)}}static{this.\u0275prov=p({token:h,factory:h.\u0275fac,providedIn:"root"})}}return h})();export{P as a};