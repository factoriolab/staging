import{a as Ye}from"./chunk-UJZ4FJEU.js";import{d as Ge,e as Je}from"./chunk-53XIHCZN.js";import{b as Qe}from"./chunk-7ZAWAYE2.js";import{b as Ue}from"./chunk-PRXIGLJZ.js";import{f as Ke}from"./chunk-M7IQQFKK.js";import{c as Ze,d as ie,f as Z,g as N,h as ne,p as oe}from"./chunk-2NNR6ZGG.js";import{B as Ne,c as q,j as Fe,k as Ve,n as He,o as te,q as g,r as je,w as Ae,x as qe}from"./chunk-JP6B3DJW.js";import{c as We}from"./chunk-J4CBTDT5.js";import{$ as E,$a as be,Aa as he,Ab as ke,Ba as C,Da as K,Ea as v,Fb as H,Gb as z,Hb as Oe,Ia as h,Ib as X,Ja as _,Kb as ee,Kd as $e,La as F,Ma as w,Na as B,Nb as Pe,Oa as n,P as de,Pa as o,Pb as De,Qa as k,Rb as Le,S as b,T as S,Ta as P,U as se,Ua as U,Ub as ze,V as ce,Va as D,Vb as j,Wa as m,Xa as ye,Xb as Me,Ya as ge,Yb as Re,Za as Te,Zb as A,_ as I,ab as Se,ba as $,bb as Ie,cb as Ee,db as Y,ea as Q,eb as r,fa as me,fb as p,gb as V,hb as L,ia as O,ja as _e,ka as ue,mb as we,ob as G,pa as fe,pb as J,qa as i,ra as y,ua as Ce,wb as d,xa as xe,xb as s,ya as ve,yb as Be,za as W}from"./chunk-IFUFG4K7.js";var hi=(()=>{class t{constructor(){this.contentSvc=b(Qe),this.pDropdown=b(Ke,{self:!0}),this.labDropdownBase=O(),this.setAutoFocusFilter=ee(()=>{let e=this.contentSvc.isMobile();this.pDropdown.autofocusFilter=!e}),this.setStyleClass=ee(()=>{this.pDropdown.styleClass=this.labDropdownBase()})}ngOnInit(){this.pDropdown.appendTo="body",this.pDropdown.filter=!0,this.pDropdown.scrollHeight="40vh",this.pDropdown.panelStyleClass="tooltip"}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275dir=ce({type:t,selectors:[["","labDropdownBase",""]],inputs:{labDropdownBase:[1,"labDropdownBase"]},standalone:!0})}}return t})();var tt=["*"],it=(t,l)=>({showTransitionParams:t,hideTransitionParams:l}),nt=(t,l)=>({value:t,params:l});function ot(t,l){t&1&&P(0)}function at(t,l){t&1&&k(0,"TimesIcon",8),t&2&&v("styleClass","p-overlaypanel-close-icon")}function lt(t,l){}function rt(t,l){t&1&&C(0,lt,0,0,"ng-template")}function pt(t,l){if(t&1&&(n(0,"span",9),C(1,rt,1,0,null,3),o()),t&2){let e=m(3);i(),v("ngTemplateOutlet",e.closeIconTemplate)}}function dt(t,l){if(t&1){let e=U();n(0,"button",5),D("click",function(c){I(e);let f=m(2);return E(f.onCloseClick(c))})("keydown.enter",function(){I(e);let c=m(2);return E(c.hide())}),C(1,at,1,1,"TimesIcon",6)(2,pt,2,1,"span",7),o()}if(t&2){let e=m(2);K("aria-label",e.ariaCloseLabel),i(),v("ngIf",!e.closeIconTemplate),i(),v("ngIf",e.closeIconTemplate)}}function st(t,l){if(t&1){let e=U();n(0,"div",1),D("click",function(c){I(e);let f=m();return E(f.onOverlayClick(c))})("@animation.start",function(c){I(e);let f=m();return E(f.onAnimationStart(c))})("@animation.done",function(c){I(e);let f=m();return E(f.onAnimationEnd(c))}),n(1,"div",2),D("click",function(c){I(e);let f=m();return E(f.onContentClick(c))})("mousedown",function(c){I(e);let f=m();return E(f.onContentClick(c))}),ge(2),C(3,ot,1,0,"ng-container",3),o(),C(4,dt,3,3,"button",4),o()}if(t&2){let e=m();h(e.styleClass),v("ngClass","p-overlaypanel p-component")("ngStyle",e.style)("@animation",J(13,nt,e.overlayVisible?"open":"close",J(10,it,e.showTransitionOptions,e.hideTransitionOptions))),K("aria-modal",e.overlayVisible)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),i(3),v("ngTemplateOutlet",e.contentTemplate),i(),v("ngIf",e.showCloseIcon)}}var le=(()=>{class t{document;platformId;el;renderer;cd;zone;config;overlayService;ariaLabel;ariaLabelledBy;dismissable=!0;showCloseIcon;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new Q;onHide=new Q;templates;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;closeIconTemplate;destroyCallback;overlayEventListener;overlaySubscription;constructor(e,a,c,f,x,T,M,R){this.document=e,this.platformId=a,this.el=c,this.renderer=f,this.cd=x,this.zone=T,this.config=M,this.overlayService=R}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"closeicon":this.closeIconTemplate=e.template;break;default:this.contentTemplate=e.template;break}this.cd.markForCheck()})}bindDocumentClickListener(){if(A(this.platformId)&&!this.documentClickListener&&this.dismissable){let e=g.isIOS()?"touchstart":"click",a=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(a,e,c=>{!this.container?.contains(c.target)&&this.target!==c.target&&!this.target.contains(c.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,a){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(e,a)&&(this.destroyCallback=()=>{this.show(null,a||e.currentTarget||e.target)}),this.hide()):this.show(e,a))}show(e,a){a&&e&&e.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=a||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let a=e.target;this.selfClick=e.offsetX<a.clientWidth&&e.offsetY<a.clientHeight}hasTargetChanged(e,a){return this.target!=null&&this.target!==(a||e.currentTarget||e.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):g.appendChild(this.container,this.appendTo))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&q.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),g.absolutePosition(this.container,this.target,!1);let e=g.getOffset(this.container),a=g.getOffset(this.target),c=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),f=0;e.left<a.left&&(f=a.left-e.left-parseFloat(c)*2),this.container?.style.setProperty("--overlayArrowLeft",`${f}px`),e.top<a.top&&(g.addClass(this.container,"p-overlaypanel-flipped"),this.showCloseIcon&&this.renderer.setStyle(this.container,"margin-top","-30px"))}onAnimationStart(e){e.toState==="open"&&(this.container=e.element,this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=a=>{this.container&&this.container.contains(a.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(e){switch(e.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&q.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let e=g.findSingle(this.container,"[autofocus]");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible&&!g.isTouchDevice()&&this.hide()}bindDocumentResizeListener(){if(A(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){A(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new je(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&q.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe()}static \u0275fac=function(a){return new(a||t)(y(Pe),y(ue),y(_e),y(Ce),y(H),y(me),y(Ve),y(Fe))};static \u0275cmp=S({type:t,selectors:[["p-overlayPanel"]],contentQueries:function(a,c,f){if(a&1&&Te(f,He,4),a&2){let x;be(x=Se())&&(c.templates=x)}},hostAttrs:[1,"p-element"],hostBindings:function(a,c){a&1&&D("keydown.escape",function(x){return c.onEscapeKeydown(x)},!1,fe)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",z],showCloseIcon:[2,"showCloseIcon","showCloseIcon",z],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",z],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",Oe],focusOnShow:[2,"focusOnShow","focusOnShow",z],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},features:[he],ngContentSelectors:tt,decls:1,vars:1,consts:[["role","dialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","dialog",3,"click","ngClass","ngStyle"],[1,"p-overlaypanel-content",3,"click","mousedown"],[4,"ngTemplateOutlet"],["type","button","class","p-overlaypanel-close p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],["type","button","pRipple","",1,"p-overlaypanel-close","p-link",3,"click","keydown.enter"],[3,"styleClass",4,"ngIf"],["class","p-overlaypanel-close-icon",4,"ngIf"],[3,"styleClass"],[1,"p-overlaypanel-close-icon"]],template:function(a,c){a&1&&(ye(),C(0,st,5,16,"div",0)),a&2&&v("ngIf",c.render)},dependencies:()=>[De,Le,j,ze,Ae,oe],styles:[`@layer primeng{.p-overlaypanel{position:absolute;margin-top:10px;top:0;left:0}.p-overlaypanel-flipped{margin-top:0;margin-bottom:10px}.p-overlaypanel-close{display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-overlaypanel:after,.p-overlaypanel:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-overlaypanel:after{border-width:8px;margin-left:-8px}.p-overlaypanel:before{border-width:10px;margin-left:-10px}.p-overlaypanel-shifted:after,.p-overlaypanel-shifted:before{left:auto;right:1.25em;margin-left:auto}.p-overlaypanel-flipped:after,.p-overlaypanel-flipped:before{bottom:auto;top:100%}.p-overlaypanel.p-overlaypanel-flipped:after{border-bottom-color:transparent}.p-overlaypanel.p-overlaypanel-flipped:before{border-bottom-color:transparent}}
`],encapsulation:2,data:{animation:[Ze("animation",[N("void",Z({transform:"scaleY(0.8)",opacity:0})),N("close",Z({opacity:0})),N("open",Z({transform:"translateY(0)",opacity:1})),ne("void => open",ie("{{showTransitionParams}}")),ne("open => close",ie("{{hideTransitionParams}}"))])]},changeDetection:0})}return t})(),Ai=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275mod=se({type:t});static \u0275inj=de({imports:[Re,qe,te,oe,te]})}return t})();var Xe=(()=>{class t{constructor(){this.cancel=xe(!1)}onHide(){this.cancel()||this.save()}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=S({type:t,selectors:[["ng-component"]],decls:0,vars:0,template:function(a,c){},encapsulation:2})}}return t})(),Qi=(()=>{class t extends Xe{constructor(){super(...arguments),this.ref=b(H),this.visible=!1}hide(e){e===!0&&this.cancel.set(e),this.visible=!1}show(){this.cancel.set(!1),this.visible=!0,this.ref.markForCheck()}static{this.\u0275fac=(()=>{let e;return function(c){return(e||(e=$(t)))(c||t)}})()}static{this.\u0275cmp=S({type:t,selectors:[["ng-component"]],features:[W],decls:0,vars:0,template:function(a,c){},encapsulation:2})}}return t})(),Wi=(()=>{class t extends Xe{constructor(){super(...arguments),this.overlayPanel=ve.required(le)}hide(e){e===!0&&this.cancel.set(e),this.overlayPanel().hide()}_show(e){this.cancel.set(!1),this.overlayPanel().toggle(e)}static{this.\u0275fac=(()=>{let e;return function(c){return(e||(e=$(t)))(c||t)}})()}static{this.\u0275cmp=S({type:t,selectors:[["ng-component"]],viewQuery:function(a,c){a&1&&Ie(c.overlayPanel,le,5),a&2&&Ee()},features:[W],decls:0,vars:0,template:function(a,c){},encapsulation:2})}}return t})();var re=(t,l)=>l.key,et=t=>({recipe:t});function ct(t,l){t&1&&P(0)}function mt(t,l){if(t&1&&(n(0,"div",1),r(1),o(),C(2,ct,1,0,"ng-container",2)),t&2){let e=l;m(2);let a=Y(3);i(),p(e.name),i(),v("ngTemplateOutlet",a)("ngTemplateOutletContext",G(3,et,e))}}function _t(t,l){if(t&1&&C(0,mt,3,5),t&2){let e,a=m();_((e=a.data().recipeEntities[a.id()])?0:-1,e)}}function ut(t,l){t&1&&P(0)}function ft(t,l){if(t&1&&C(0,ut,1,0,"ng-container",2),t&2){m(3);let e=Y(3);v("ngTemplateOutlet",e)("ngTemplateOutletContext",G(2,et,l))}}function Ct(t,l){if(t&1&&(k(0,"i"),d(1,"iconSmClass")),t&2){let e=l.$implicit;h(s(1,2,e))}}function xt(t,l){t&1&&(n(0,"div",3),r(1),d(2,"translate"),o(),n(3,"div"),w(4,Ct,2,4,"i",4,F),o()),t&2&&(i(),p(s(2,1,"data.prerequisites")),i(3),B(l))}function vt(t,l){if(t&1&&(n(0,"table")(1,"tr")(2,"td"),r(3),d(4,"translate"),o(),n(5,"td"),r(6),o()()()),t&2){let e=m();i(3),p(s(4,2,"data.unlockedRecipes")),i(3),p(e.length)}}function ht(t,l){if(t&1&&(k(0,"i"),d(1,"iconSmClass")),t&2){let e=l.$implicit;h(Be(1,2,e,"recipe"))}}function yt(t,l){if(t&1&&(n(0,"div",3),r(1),d(2,"translate"),o(),n(3,"div"),w(4,ht,2,5,"i",4,F),o()),t&2){let e=m();i(),p(s(2,1,"data.unlockedRecipes")),i(3),B(e)}}function gt(t,l){t&1&&C(0,vt,7,4,"table")(1,yt,6,3),t&2&&_(l.length>5?0:1)}function Tt(t,l){if(t&1&&C(0,xt,6,3)(1,gt,2,1),t&2){let e,a,c=m(3);_((e=c.data().technologyEntities[c.id()].prerequisites)?0:-1,e),i(),_((a=c.unlockedRecipes())?1:-1,a)}}function bt(t,l){if(t&1&&(n(0,"div",1),r(1),o(),C(2,ft,1,4,"ng-container")(3,Tt,2,2)),t&2){let e,a=m(2);i(),p(l.name),i(),_((e=a.recipe())?2:-1,e),i(),_(a.type()==="technology"?3:-1)}}function St(t,l){t&1&&(n(0,"div"),r(1),d(2,"translate"),o()),t&2&&(i(),p(s(2,1,"data.moduleSlots")))}function It(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),o()()),t&2){let e=m();i(2),p(s(3,2,"data.energySource")),i(3),p(e.type)}}function Et(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),d(6,"usage"),o()()),t&2){let e=m();i(2),p(s(3,2,"data.energyConsumption")),i(3),p(s(6,4,e.usage))}}function wt(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),o()()),t&2){let e=m();i(2),p(s(3,2,"data.disallowedEffects")),i(3),p(e.disallowedEffects.join(", "))}}function Bt(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),o()()),t&2){let e=m();i(2),p(s(3,3,"data.dimensions")),i(3),L("",e.size[0],"\xD7",e.size[1],"")}}function kt(t,l){if(t&1&&(n(0,"table")(1,"tr")(2,"td"),r(3),d(4,"translate"),o(),n(5,"td"),r(6),d(7,"round"),o()(),n(8,"tr")(9,"td"),r(10),d(11,"translate"),o(),n(12,"td"),r(13),o()(),n(14,"tr")(15,"td"),r(16),d(17,"translate"),o(),n(18,"td"),r(19),o()(),C(20,It,6,4,"tr")(21,Et,7,6,"tr")(22,wt,6,4,"tr")(23,Bt,6,5,"tr"),o()),t&2){let e=l;i(3),p(s(4,10,"data.efficiency")),i(3),p(s(7,12,e.effectivity)),i(4),p(s(11,14,"data.modules")),i(3),p(e.modules),i(3),p(s(17,16,"data.range")),i(3),p(e.range),i(),_(e.type?20:-1),i(),_(e.usage?21:-1),i(),_(e.disallowedEffects?22:-1),i(),_(e.size?23:-1)}}function Ot(t,l){if(t&1&&(n(0,"table")(1,"tr")(2,"td"),r(3),d(4,"translate"),o(),n(5,"td"),r(6),d(7,"translate"),o()()()),t&2){let e=m(2);i(3),p(s(4,3,"data.speed")),i(3),L(" ",e.beltSpeedTxt()[e.id()],"",s(7,5,e.dispRateInfo().suffix)," ")}}function Pt(t,l){t&1&&(n(0,"table")(1,"tr")(2,"td"),r(3),d(4,"translate"),o(),n(5,"td"),r(6),o()()()),t&2&&(i(3),p(s(4,2,"data.storageSize")),i(3),p(l.size))}function Dt(t,l){t&1&&(n(0,"table")(1,"tr")(2,"td"),r(3),d(4,"translate"),o(),n(5,"td"),r(6),o()()()),t&2&&(i(3),p(s(4,2,"data.fluidCapacity")),i(3),p(l.capacity))}function Lt(t,l){if(t&1&&(n(0,"table")(1,"tr")(2,"td"),r(3),d(4,"translate"),o(),n(5,"td"),r(6),o()(),n(7,"tr")(8,"td"),r(9),d(10,"translate"),o(),n(11,"td"),r(12),d(13,"round"),o()()()),t&2){let e=l;i(3),p(s(4,4,"data.fuelCategory")),i(3),p(e.category),i(3),p(s(10,6,"data.fuelValue")),i(3),V("",s(13,8,e.value)," MJ")}}function zt(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),d(6,"round"),o()()),t&2){let e=m();i(2),p(s(3,2,"data.craftingSpeed")),i(3),p(s(6,4,e.speed))}}function Mt(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),d(6,"bonusPercent"),o()()),t&2){let e=m();i(2),p(s(3,2,"data.energyConsumption")),i(3),p(s(6,4,e.consumption))}}function Rt(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),d(6,"bonusPercent"),o()()),t&2){let e=m();i(2),p(s(3,2,"data.speed")),i(3),p(s(6,4,e.speed))}}function Ft(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),d(6,"bonusPercent"),o()()),t&2){let e=m();i(2),p(s(3,2,"data.productivity")),i(3),p(s(6,4,e.productivity))}}function Vt(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),d(6,"bonusPercent"),o()()),t&2){let e=m();i(2),p(s(3,2,"data.pollution")),i(3),p(s(6,4,e.pollution))}}function Ht(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),d(6,"bonusPercent"),o()()),t&2){let e=m();i(2),p(s(3,2,"data.quality")),i(3),p(s(6,4,e.quality))}}function jt(t,l){if(t&1&&C(0,Mt,7,6,"tr")(1,Rt,7,6,"tr")(2,Ft,7,6,"tr")(3,Vt,7,6,"tr")(4,Ht,7,6,"tr"),t&2){let e=l;_(e.consumption&&e.consumption.nonzero()?0:-1),i(),_(e.speed&&e.speed.nonzero()?1:-1),i(),_(e.productivity&&e.productivity.nonzero()?2:-1),i(),_(e.pollution&&e.pollution.nonzero()?3:-1),i(),_(e.quality&&e.quality.nonzero()?4:-1)}}function At(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),o()()),t&2){let e=m();i(2),p(s(3,2,"data.modules")),i(3),p(e.modules)}}function qt(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),o()()),t&2){let e=m();i(2),p(s(3,2,"data.disallowedEffects")),i(3),p(e.disallowedEffects.join(", "))}}function Zt(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),o()()),t&2){let e=m();i(2),p(s(3,2,"data.energySource")),i(3),p(e.type)}}function Nt(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),o()()),t&2){let e=m();i(2),p(s(3,2,"data.fuelCategories")),i(3),p(e.fuelCategories.join(", "))}}function $t(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),o()()),t&2){let e=m();i(2),p(s(3,2,"data.fuel")),i(3),p(e.fuel)}}function Qt(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),d(6,"usage"),o()()),t&2){let e=m();i(2),p(s(3,2,"data.energyConsumption")),i(3),p(s(6,4,e.usage))}}function Wt(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),d(6,"usage"),o()()),t&2){let e=m();i(2),p(s(3,2,"data.energyDrain")),i(3),p(s(6,4,e.drain))}}function Kt(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),d(6,"round"),o()()),t&2){let e=m();i(2),p(s(3,2,"data.pollution")),i(3),V("",s(6,4,e.pollution),"/m")}}function Ut(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),o()()),t&2){let e=m();i(2),p(s(3,3,"data.dimensions")),i(3),L("",e.size[0],"\xD7",e.size[1],"")}}function Yt(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),d(6,"round"),o()(),n(7,"tr")(8,"td"),r(9),d(10,"translate"),o(),n(11,"td"),r(12),d(13,"round"),o()()),t&2){let e=m();i(2),p(s(3,4,"data.rocketPartsRequired")),i(3),p(s(6,6,e.silo.parts)),i(4),p(s(10,8,"data.rocketLaunchTime")),i(3),V("",s(13,10,e.silo.launch),"s")}}function Gt(t,l){if(t&1&&(n(0,"i"),d(1,"iconSmClass"),n(2,"span"),r(3),d(4,"round"),o()()),t&2){let e=l.$implicit;h(s(1,3,e.key)),i(3),p(s(4,5,e.value))}}function Jt(t,l){if(t&1&&(n(0,"div",5),w(1,Gt,5,7,"i",4,re),d(3,"keyvalue"),o()),t&2){let e=m();i(),B(s(3,0,e.consumption))}}function Xt(t,l){if(t&1&&(n(0,"table"),C(1,zt,7,6,"tr")(2,jt,5,5)(3,At,6,4,"tr")(4,qt,6,4,"tr")(5,Zt,6,4,"tr")(6,Nt,6,4,"tr")(7,$t,6,4,"tr")(8,Qt,7,6,"tr")(9,Wt,7,6,"tr")(10,Kt,7,6,"tr")(11,Ut,6,5,"tr")(12,Yt,14,12),o(),C(13,Jt,4,2,"div",5)),t&2){let e,a=l,c=m(2);i(),_(a.speed&&!c.data().flags.has("hideMachineSettings")?1:-1),i(),_((e=a.baseEffect)?2:-1,e),i(),_(a.modules?3:-1),i(),_(a.disallowedEffects?4:-1),i(),_(a.type?5:-1),i(),_(a.fuelCategories?6:-1),i(),_(a.fuel?7:-1),i(),_(a.usage&&a.usage.nonzero()?8:-1),i(),_(a.drain&&a.drain.nonzero()?9:-1),i(),_(a.pollution&&a.pollution.nonzero()?10:-1),i(),_(a.size?11:-1),i(),_(a.silo?12:-1),i(),_(a.consumption?13:-1)}}function ei(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),d(6,"bonusPercent"),o()()),t&2){let e=m();i(2),p(s(3,2,"data.energyConsumption")),i(3),p(s(6,4,e.consumption))}}function ti(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),d(6,"bonusPercent"),o()()),t&2){let e=m();i(2),p(s(3,2,"data.speed")),i(3),p(s(6,4,e.speed))}}function ii(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),d(6,"bonusPercent"),o()()),t&2){let e=m();i(2),p(s(3,2,"data.productivity")),i(3),p(s(6,4,e.productivity))}}function ni(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),d(6,"bonusPercent"),o()()),t&2){let e=m();i(2),p(s(3,2,"data.pollution")),i(3),p(s(6,4,e.pollution))}}function oi(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),d(6,"bonusPercent"),o()()),t&2){let e=m();i(2),p(s(3,2,"data.quality")),i(3),p(s(6,4,e.quality))}}function ai(t,l){if(t&1&&(n(0,"tr")(1,"td"),r(2),d(3,"translate"),o(),n(4,"td"),r(5),d(6,"round"),o()()),t&2){let e=m();i(2),p(s(3,2,"data.sprays")),i(3),p(s(6,4,e.sprays))}}function li(t,l){if(t&1&&(n(0,"table"),C(1,ei,7,6,"tr")(2,ti,7,6,"tr")(3,ii,7,6,"tr")(4,ni,7,6,"tr")(5,oi,7,6,"tr")(6,ai,7,6,"tr"),o()),t&2){let e=l;i(),_(e.consumption&&e.consumption.nonzero()?1:-1),i(),_(e.speed&&e.speed.nonzero()?2:-1),i(),_(e.productivity&&e.productivity.nonzero()?3:-1),i(),_(e.pollution&&e.pollution.nonzero()?4:-1),i(),_(e.quality&&e.quality.nonzero()?5:-1),i(),_(e.sprays&&e.sprays.nonzero()?6:-1)}}function ri(t,l){if(t&1&&(n(0,"table")(1,"tr")(2,"td"),r(3),d(4,"translate"),o(),n(5,"td"),r(6),d(7,"translate"),o()()()),t&2){let e=m(2);i(3),p(s(4,3,"data.flowRate")),i(3),L(" ",e.beltSpeedTxt()[e.id()],"",s(7,5,e.dispRateInfo().suffix)," ")}}function pi(t,l){if(t&1&&C(0,bt,4,3)(1,St,3,3,"div")(2,kt,24,18,"table")(3,Ot,8,7,"table")(4,Pt,7,4,"table")(5,Dt,7,4,"table")(6,Lt,14,10,"table")(7,Xt,14,13)(8,li,7,6,"table")(9,ri,8,7,"table"),t&2){let e,a,c,f,x,T,M,R,pe,u=m();_((e=u.data().itemEntities[u.id()])?0:u.type()==="module"?1:-1,e),i(2),_((a=u.type()==="beacon"&&u.data().beaconEntities[u.id()])?2:-1,a),i(),_((c=u.type()==="belt"&&u.data().beltEntities[u.id()])?3:-1,c),i(),_((f=u.type()==="cargo-wagon"&&u.data().cargoWagonEntities[u.id()])?4:-1,f),i(),_((x=u.type()==="fluid-wagon"&&u.data().fluidWagonEntities[u.id()])?5:-1,x),i(),_((T=u.type()==="fuel"&&u.data().fuelEntities[u.id()])?6:-1,T),i(),_((M=u.type()==="machine"&&u.data().machineEntities[u.id()])?7:-1,M),i(),_((R=u.type()==="module"&&u.data().moduleEntities[u.id()])?8:-1,R),i(),_((pe=u.type()==="pipe"&&u.data().beltEntities[u.id()])?9:-1,pe)}}function di(t,l){if(t&1&&(n(0,"i"),d(1,"iconSmClass"),n(2,"span"),r(3),d(4,"round"),o()()),t&2){let e=l.$implicit;h(s(1,3,e.key)),i(3),p(s(4,5,e.value))}}function si(t,l){if(t&1&&(n(0,"i"),d(1,"iconSmClass"),n(2,"span"),r(3),d(4,"round"),o()()),t&2){let e=l.$implicit;h(s(1,3,e.key)),i(3),p(s(4,5,e.value))}}function ci(t,l){if(t&1&&(k(0,"i"),d(1,"iconSmClass")),t&2){let e=m().$implicit;h(s(1,2,e))}}function mi(t,l){if(t&1&&C(0,ci,2,4,"i",4),t&2){let e=l.$implicit,a=m(3);_(a.data().itemEntities[e].quality==null?0:-1)}}function _i(t,l){if(t&1&&(n(0,"div",5)(1,"i"),d(2,"iconSmClass"),n(3,"span"),r(4),o()(),w(5,di,5,7,"i",4,re),d(7,"keyvalue"),k(8,"i",6),w(9,si,5,7,"i",4,re),d(11,"keyvalue"),o(),n(12,"div",3),r(13),d(14,"translate"),o(),n(15,"div"),w(16,mi,1,1,null,null,F),o()),t&2){let e=l;i(),h(s(2,4,"time")),i(3),p(e.time),i(),B(s(7,6,e.in)),i(4),B(s(11,8,e.out)),i(4),p(s(14,10,"data.producers")),i(3),B(e.producers)}}function ui(t,l){if(t&1&&C(0,_i,18,12),t&2){let e,a=l.recipe,c=m();_((e=c.data().recipeEntities[a.id])?0:-1,e)}}var rn=(()=>{class t{constructor(){this.recipesSvc=b(We),this.settingsSvc=b($e),this.id=O.required(),this.type=O("item"),this.dataKey={item:"items",beacon:"beacons",belt:"belts","cargo-wagon":"cargoWagons","fluid-wagon":"fluidWagons",fuel:"fuels",machine:"machines",module:"modules",pipe:"pipes",technology:"technologies",recipe:"recipes"},this.beltSpeedTxt=this.settingsSvc.beltSpeedTxt,this.dispRateInfo=this.settingsSvc.displayRateInfo,this.data=this.recipesSvc.adjustedDataset,this.recipe=X(()=>{let e=this.type();if(e!=="item"&&e!=="technology")return;let a=this.id(),c=this.data(),x=c.itemRecipeIds[a].map(T=>c.recipeEntities[T]).filter(T=>T.quality==null);if(x.length===1)return x[0]}),this.unlockedRecipes=X(()=>{if(this.type()!=="technology")return;let a=this.id(),c=this.data(),f=c.recipeIds.map(x=>c.recipeEntities[x]).filter(x=>x.quality==null&&x.unlockedBy===a).map(x=>x.id);if(f.length!==0)return f})}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=S({type:t,selectors:[["lab-tooltip"]],inputs:{id:[1,"id"],type:[1,"type"]},standalone:!0,features:[we],decls:4,vars:1,consts:[["recipeProcess",""],[1,"title"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mt-1"],[3,"class"],[1,"d-flex","align-items-center","justify-content-center","flex-wrap","mt-2"],[1,"m-1","me-2","fa-solid","fa-arrow-right"]],template:function(a,c){a&1&&C(0,_t,1,1)(1,pi,10,9)(2,ui,1,1,"ng-template",null,0,ke),a&2&&_(c.type()==="recipe"?0:1)},dependencies:[Me,j,Ye,Ue,Ge,Ne,Je],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;font-size:12px}.title[_ngcontent-%COMP%]{font-size:14px;font-weight:700}.lab-icon[_ngcontent-%COMP%]{margin:7px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{word-break:normal}"],changeDetection:0})}}return t})();export{hi as a,le as b,Ai as c,Qi as d,Wi as e,rn as f};