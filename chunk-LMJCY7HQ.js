import{a as M}from"./chunk-UZGMQBW5.js";import{a as T}from"./chunk-POX4JSLO.js";import{a as F,b as S}from"./chunk-FKE5MEK2.js";import"./chunk-M6553SCE.js";import"./chunk-5QLF6GTS.js";import"./chunk-JYPTSYPM.js";import"./chunk-E7A5EONL.js";import{a as D}from"./chunk-QK4ZDNN4.js";import"./chunk-L6CGJRD5.js";import"./chunk-PQ4IYDP2.js";import"./chunk-O23CM3F7.js";import{B as E}from"./chunk-PKVQS2IB.js";import"./chunk-2TA6GTNS.js";import{Ab as _,Ea as n,Kb as l,Lb as f,Mb as B,Na as b,Pa as g,Sa as s,Wa as v,Wb as c,Xa as I,ab as o,bb as r,cb as p,fa as C,ib as x,pa as h,sb as d,tb as m}from"./chunk-7KDKM2R5.js";import"./chunk-TWZW5B45.js";function j(t,u){if(t&1&&(o(0,"h3"),d(1),r(),p(2,"i",2),l(3,"iconClass"),o(4,"h3"),d(5),l(6,"translate"),r(),p(7,"lab-collection-table",3),o(8,"h3"),d(9),l(10,"translate"),r(),p(11,"lab-collection-table",4)),t&2){let e=x();n(),m(u.name),n(),v(B(3,7,e.id(),"category")),n(3),m(f(6,10,"data.items")),n(2),s("ids",e.itemIds()),n(2),m(f(10,12,"data.recipes")),n(2),s("ids",e.recipeIds())}}function P(t,u){t&1&&(o(0,"div",1),d(1),l(2,"translate"),r()),t&2&&(n(),m(f(2,1,"data.notFound")))}var N=(()=>{class t extends M{obj=c(()=>this.data().categoryEntities[this.id()]);breadcrumb=c(()=>[this.parent()??{},{label:this.obj()?.name}]);itemIds=c(()=>{let e=this.data(),a=this.id();return e.itemIds.filter(i=>e.itemEntities[i].category===a)});recipeIds=c(()=>{let e=this.data(),a=this.id();return e.recipeIds.filter(i=>e.recipeEntities[i].category===a)});static \u0275fac=(()=>{let e;return function(i){return(e||(e=h(t)))(i||t)}})();static \u0275cmp=C({type:t,selectors:[["ng-component"]],standalone:!0,features:[b,_],decls:3,vars:3,consts:[[3,"home","model"],[1,"p-error"],[1,"lg"],["type","item",3,"ids"],["type","recipe",3,"ids"]],template:function(a,i){if(a&1&&(p(0,"p-breadcrumb",0),g(1,j,12,14)(2,P,3,3,"div",1)),a&2){let y;s("home",i.home())("model",i.breadcrumb()),n(),I((y=i.obj())?1:2,y)}},dependencies:[S,F,T,D,E],encapsulation:2,changeDetection:0})}return t})();export{N as CategoryComponent};