import{a as D}from"./chunk-4VSHZRSC.js";import{a as g,b as C}from"./chunk-NWX526SM.js";import"./chunk-IT3L4BDJ.js";import"./chunk-PMFISRBM.js";import"./chunk-BMKK4HXC.js";import"./chunk-ZVEVQQ3X.js";import"./chunk-O7LDEE5T.js";import"./chunk-CTFYOPJB.js";import"./chunk-IRATHVV7.js";import"./chunk-I5C7JO2S.js";import"./chunk-O7DGOCLH.js";import"./chunk-3Y2NQDVQ.js";import"./chunk-WBABKUQ3.js";import"./chunk-R5G3RS7S.js";import{c as S}from"./chunk-7JTVYEOO.js";import{Ea as s,I as m,Lb as u,Nd as y,Qa as l,S as t,T as p,Zc as v,ia as a,ic as h,l as n,pb as d,qa as c,uc as f,vc as b}from"./chunk-CRF7UYSD.js";import"./chunk-TWZW5B45.js";var z=(()=>{class i{constructor(){this.route=t(h),this.recipesSvc=t(S),this.settingsSvc=t(y),this.translateSvc=t(v),this.home=this.settingsSvc.modMenuItem,this.data=this.recipesSvc.adjustedDataset,this.label=a.required(),this.type=a.required(),this.key=a.required(),this.breadcrumb=b(f(this.label).pipe(m(e=>this.translateSvc.get(e)),n(e=>[{label:e}]))),this.ids=u(()=>this.data()[this.key()])}static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=p({type:i,selectors:[["lab-collection"]],inputs:{label:[1,"label"],type:[1,"type"],key:[1,"key"]},standalone:!0,features:[d],decls:2,vars:5,consts:[[3,"home","model"],[3,"ids","type","useRelativePath"]],template:function(o,r){o&1&&l(0,"p-breadcrumb",0)(1,"lab-collection-table",1),o&2&&(s("home",r.home())("model",r.breadcrumb()),c(),s("ids",r.ids())("type",r.type())("useRelativePath",!0))},dependencies:[C,g,D],encapsulation:2,changeDetection:0})}}return i})();export{z as CollectionComponent};