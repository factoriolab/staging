import{a as we,b as Se}from"./chunk-SZTRHQAN.js";import{a as ke,b as Ie,e as Be}from"./chunk-32T2CA7Q.js";import{a as Le}from"./chunk-QKRWHTH3.js";import{a as Me}from"./chunk-O5TLOLM2.js";import"./chunk-BVSOIQ6T.js";import"./chunk-DO4SY6DA.js";import"./chunk-GMRZ3VHT.js";import{b as De}from"./chunk-U6PYAONV.js";import{k as P}from"./chunk-HKBB4QYQ.js";import{a as Re}from"./chunk-QK4ZDNN4.js";import{f as Ee,g as Ve}from"./chunk-L6CGJRD5.js";import{a as be,d as ge,e as ye,f as Ce,h as xe,i as Te,j as W}from"./chunk-PQ4IYDP2.js";import"./chunk-O23CM3F7.js";import{B as pe,k as ae,s as oe,t as se,y as le,z as ce}from"./chunk-PKVQS2IB.js";import{i as ve}from"./chunk-2TA6GTNS.js";import{$,Ab as K,Ce as fe,Dc as z,Ea as r,Eb as j,Fa as k,Fb as J,Hd as ue,Jd as B,Kb as u,Lb as m,Oa as L,Pa as S,Ra as g,Sa as l,Se as _e,Tb as A,Tc as re,Ub as N,Vb as X,Wa as C,Xa as Q,Ye as he,Zd as me,_ as q,aa as T,ab as o,bb as s,bc as Y,cb as _,da as E,dc as Z,fa as w,ga as V,gb as y,gc as ee,hb as f,ib as d,kc as R,ma as c,mb as D,na as p,nb as F,ob as O,qa as U,rb as x,sa as M,sb as h,sd as de,tb as v,tc as te,vc as ie,wc as ne,zb as G}from"./chunk-7KDKM2R5.js";import"./chunk-TWZW5B45.js";var Ne=["input"],ze=(n,b,e,i)=>({"p-radiobutton p-component":!0,"p-radiobutton-checked":n,"p-radiobutton-disabled":b,"p-radiobutton-focused":e,"p-variant-filled":i}),Pe=(n,b,e)=>({"p-radiobutton-box":!0,"p-highlight":n,"p-disabled":b,"p-focus":e}),We=(n,b,e)=>({"p-radiobutton-label":!0,"p-radiobutton-label-active":n,"p-disabled":b,"p-radiobutton-label-focus":e});function He(n,b){if(n&1){let e=y();o(0,"label",7),f("click",function(t){c(e);let a=d();return p(a.select(t))}),h(1),s()}if(n&2){let e=d(),i=x(3);C(e.labelStyleClass),l("ngClass",j(6,We,i.checked,e.disabled,e.focused)),g("for",e.inputId)("data-pc-section","label"),r(),v(e.label)}}var qe={provide:be,useExisting:q(()=>Ue),multi:!0},$e=(()=>{class n{accessors=[];add(e,i){this.accessors.push([e,i])}remove(e){this.accessors=this.accessors.filter(i=>i[1]!==e)}select(e){this.accessors.forEach(i=>{this.isSameGroup(i,e)&&i[1]!==e&&i[1].writeValue(e.value)})}isSameGroup(e,i){return e[0].control?e[0].control.root===i.control.control.root&&e[1].name===i.name:!1}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ue=(()=>{class n{cd;injector;registry;config;value;formControlName;name;disabled;label;variant="outlined";tabindex;inputId;ariaLabelledBy;ariaLabel;style;styleClass;labelStyleClass;autofocus;onClick=new M;onFocus=new M;onBlur=new M;inputViewChild;onModelChange=()=>{};onModelTouched=()=>{};checked;focused;control;constructor(e,i,t,a){this.cd=e,this.injector=i,this.registry=t,this.config=a}ngOnInit(){this.control=this.injector.get(ge),this.checkName(),this.registry.add(this.control,this)}handleClick(e,i,t){e.preventDefault(),!this.disabled&&(this.select(e),t&&i.focus())}select(e){this.disabled||(this.inputViewChild.nativeElement.checked=!0,this.checked=!0,this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:e,value:this.value}))}writeValue(e){this.checked=e==this.value,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.checked=this.checked),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onModelTouched(),this.onBlur.emit(e)}focus(){this.inputViewChild.nativeElement.focus()}ngOnDestroy(){this.registry.remove(this)}checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this.throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}throwNameError(){throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `)}static \u0275fac=function(i){return new(i||n)(k(A),k(U),k($e),k(ae))};static \u0275cmp=w({type:n,selectors:[["p-radioButton"]],viewQuery:function(i,t){if(i&1&&D(Ne,5),i&2){let a;F(a=O())&&(t.inputViewChild=a.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",formControlName:"formControlName",name:"name",disabled:[2,"disabled","disabled",N],label:"label",variant:"variant",tabindex:[2,"tabindex","tabindex",X],inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",autofocus:[2,"autofocus","autofocus",N]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[G([qe]),L],decls:7,vars:31,consts:[["input",""],[3,"click","ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","radio","pAutoFocus","",3,"focus","blur","checked","disabled","value","autofocus"],[3,"ngClass"],[1,"p-radiobutton-icon"],[3,"class","ngClass","click",4,"ngIf"],[3,"click","ngClass"]],template:function(i,t){if(i&1){let a=y();o(0,"div",1),f("click",function(I){c(a);let Ae=x(3);return p(t.handleClick(I,Ae,!0))}),o(1,"div",2)(2,"input",3,0),f("focus",function(I){return c(a),p(t.onInputFocus(I))})("blur",function(I){return c(a),p(t.onInputBlur(I))}),s()(),o(4,"div",4),_(5,"span",5),s()(),S(6,He,2,10,"label",6)}i&2&&(C(t.styleClass),l("ngStyle",t.style)("ngClass",J(22,ze,t.checked,t.disabled,t.focused,t.variant==="filled"||t.config.inputStyle()==="filled")),g("data-pc-name","radiobutton")("data-pc-section","root"),r(),g("data-pc-section","hiddenInputWrapper"),r(),l("checked",t.checked)("disabled",t.disabled)("value",t.value)("autofocus",t.autofocus),g("id",t.inputId)("name",t.name)("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel)("tabindex",t.tabindex)("aria-checked",t.checked)("data-pc-section","hiddenInput"),r(2),l("ngClass",j(27,Pe,t.checked,t.disabled,t.focused)),g("data-pc-section","input"),r(),g("data-pc-section","icon"),r(),l("ngIf",t.label))},dependencies:[Y,Z,ee,oe],encapsulation:2,changeDetection:0})}return n})(),Oe=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=V({type:n});static \u0275inj=T({imports:[R,se]})}return n})();var je=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=V({type:n});static \u0275inj=T({imports:[R,z,W,z,W]})}return n})();function Qe(n,b){if(n&1){let e=y();o(0,"div"),h(1),u(2,"translate"),s(),_(3,"p-divider"),o(4,"span"),h(5),u(6,"translate"),s(),o(7,"button",4),u(8,"translate"),f("click",function(){c(e);let t=x(10),a=d();return p(t.clickOpen("item",a.itemIds()))}),s(),o(9,"lab-picker",5,0),u(11,"translate"),f("selectId",function(t){c(e);let a=d();return p(a.selectId(t,"item"))}),s(),_(12,"p-divider"),o(13,"span"),h(14),u(15,"translate"),s(),o(16,"button",6),u(17,"translate"),f("click",function(){c(e);let t=x(19),a=d();return p(t.clickOpen("recipe",a.recipeIds()))}),s(),o(18,"lab-picker",5,1),u(20,"translate"),f("selectId",function(t){c(e);let a=d();return p(a.selectId(t,"recipe"))}),s(),_(21,"p-divider")}n&2&&(r(),v(m(2,7,"wizard.objectiveType")),r(4),v(m(6,9,"wizard.produceItems")),r(2),l("label",m(8,11,"wizard.produceItemsButton")),r(2),l("header",m(11,13,"wizard.produceItemsButton")),r(5),v(m(15,15,"wizard.runMachines")),r(2),l("label",m(17,17,"wizard.runMachinesButton")),r(2),l("header",m(20,19,"wizard.runMachinesButton")))}function Ge(n,b){if(n&1){let e=y();o(0,"div"),h(1),u(2,"translate"),s(),_(3,"p-divider"),o(4,"div",7),_(5,"i"),u(6,"iconClass"),o(7,"span",8),h(8),s()(),o(9,"lab-input-number",9),f("setValue",function(t){c(e);let a=d();return p(a.value=t)}),s(),o(10,"p-dropdown",10),u(11,"translate"),f("onChange",function(t){c(e);let a=d();return p(a.setDisplayRate(t.value,a.displayRate()))}),s(),o(12,"button",11),u(13,"translate"),f("click",function(){c(e);let t=d();return p(t.createItemObjective(t.id))}),s(),_(14,"p-divider"),o(15,"button",12),u(16,"translate"),f("click",function(){c(e);let t=d();return p(t.state="type")}),s()}if(n&2){let e=d();r(),v(m(2,10,"wizard.itemObjectiveItems")),r(4),C(m(6,12,e.id)),r(3),v(e.data().itemEntities[e.id].name),r(),l("value",e.value),r(),l("pTooltip",m(11,14,"objectives.selectDisplayRate"))("ngModel",e.displayRate())("options",e.displayRateOptions),r(2),l("label",m(13,16,"ok")),r(3),l("label",m(16,18,"wizard.back"))}}function Ke(n,b){if(n&1){let e=y();o(0,"div"),h(1),u(2,"translate"),s(),_(3,"p-divider"),o(4,"div",7),_(5,"i"),u(6,"iconClass"),o(7,"span",8),h(8),s()(),o(9,"lab-input-number",9),f("setValue",function(t){c(e);let a=d();return p(a.value=t)}),s(),o(10,"button",11),u(11,"translate"),f("click",function(){c(e);let t=d();return p(t.createRecipeObjective(t.id))}),s(),_(12,"p-divider"),o(13,"button",12),u(14,"translate"),f("click",function(){c(e);let t=d();return p(t.state="type")}),s()}if(n&2){let e=d();r(),v(m(2,7,"wizard.recipeObjectiveMachines")),r(4),C(m(6,9,e.id)),r(3),v(e.data().recipeEntities[e.id].name),r(),l("value",e.value),r(),l("label",m(11,11,"ok")),r(3),l("label",m(14,13,"wizard.back"))}}var Yt=(()=>{class n{router=E(ie);route=E(te);store=E(re);itemIds=this.store.selectSignal(ve);data=this.store.selectSignal(_e);recipeIds=this.store.selectSignal(he);displayRate=this.store.selectSignal(fe);id="";value=de.one;state="type";displayRateOptions=ue;ObjectiveUnit=B;selectId(e,i){this.id=e,this.state=i}setDisplayRate(e,i){this.store.dispatch(me({displayRate:e,previous:i}))}createItemObjective(e){this.createObjective({id:"0",targetId:e,value:this.value,unit:B.Items,type:P.Output}),this.router.navigate(["../list"],{relativeTo:this.route,queryParamsHandling:"preserve"})}createRecipeObjective(e){this.createObjective({id:"0",targetId:e,value:this.value,unit:B.Machines,type:P.Output}),this.router.navigate(["../list"],{relativeTo:this.route,queryParamsHandling:"preserve"})}createObjective(e){this.store.dispatch(De({objective:e}))}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=w({type:n,selectors:[["ng-component"]],standalone:!0,features:[K],decls:7,vars:4,consts:[["addItemObjectivePicker",""],["addRecipePicker",""],[1,"d-flex","flex-column","p-fluid"],["pButton","","pRipple","","type","button","icon","fa-solid fa-xmark","routerLink","/","queryParamsHandling","preserve",1,"p-button-outlined",3,"label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-box",1,"mt-2",3,"click","label"],[3,"selectId","header"],["pButton","","pRipple","","type","button","icon","fa-solid fa-industry",1,"mt-2",3,"click","label"],[1,"d-flex","align-items-center","justify-content-center"],[1,"ms-2"],["tooltipPosition","top",1,"mt-2","w-100",3,"setValue","value"],["labDropdownTranslate","","styleClass","mt-2 h-100",3,"onChange","pTooltip","ngModel","options"],["pButton","","pRipple","","type","button","icon","fa-solid fa-check",1,"mt-2",3,"click","label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-arrow-left",1,"mb-2","p-button-outlined",3,"click","label"]],template:function(i,t){if(i&1&&(o(0,"p-card")(1,"div",2),S(2,Qe,22,21)(3,Ge,17,20)(4,Ke,15,15),_(5,"button",3),u(6,"translate"),s()()),i&2){let a;r(2),Q((a=t.state)==="type"?2:a==="item"?3:a==="recipe"?4:-1),r(3),l("label",m(6,2,"cancel"))}},dependencies:[xe,ye,Ce,ce,le,ne,Ie,ke,Se,we,Ve,Ee,Oe,je,Te,Le,Re,Me,Be,pe],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;height:100vh}"],changeDetection:0})}return n})();export{Yt as WizardComponent};