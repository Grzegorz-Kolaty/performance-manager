"use strict";(self.webpackChunkfrontend_performance_manager=self.webpackChunkfrontend_performance_manager||[]).push([[792],{3089:(at,ge,d)=>{d.d(ge,{X:()=>s});var s=function(c){return c.user="ROLE_USER",c.supervisor="ROLE_SUPERVISOR",c.admin="ROLE_ADMIN",c}(s||{})},4441:(at,ge,d)=>{d.d(ge,{n:()=>s});var s=function(c){return c.All="",c.Todo="todo",c.Finished="finished",c.WaitingForStart="waitingForStart",c}(s||{})},7052:(at,ge,d)=>{d.d(ge,{fS:()=>ve,rp:()=>K,ze:()=>B,DL:()=>b});var s=d(8141),c=d(9437),I=d(8810),v=d(4438),T=d(1626),M=d(2341),_=d(803);let b=(()=>{class ae{constructor(W,$,J){this.http=W,this.permissionsService=$,this.router=J}getBackendUserProfile(){return console.log(this.userProfile),this.http.get("users/@me").pipe((0,s.M)(W=>{W&&(this.userProfile=W,this.updateAvailableRoles(W.roles),this.setDefaultRole())}),(0,c.W)(W=>(console.error(W),(0,I.$)(()=>new Error(W)))))}updateAvailableRoles(W){this.availableRoles=W}updateCurrentRole(W){this.currentRole=W,this.permissionsService.flushPermissions(),this.permissionsService.loadPermissions([W]),this.router.navigateByUrl("/dashboard")}setDefaultRole(){!this.currentRole&&this.availableRoles&&this.updateCurrentRole(this.availableRoles[0])}getUserRolesById(W){return this.http.get(`users/${W}`)}addRoleByUserId(W,$){return this.http.patch(`users/${W}/roles`,{role:$})}removeRoleByUserId(W,$){return this.http.delete(`users/${W}/roles`,{body:{role:$}})}static#e=this.\u0275fac=function($){return new($||ae)(v.KVO(T.Qq),v.KVO(M.$R),v.KVO(_.Ix))};static#t=this.\u0275prov=v.jDH({token:ae,factory:ae.\u0275fac,providedIn:"root"})}return ae})();var E=d(4412),N=d(7673),O=d(8793),le=d(3294),V=d(5558);let B=(()=>{class ae{constructor(W){this.http=W,this.searchTemplateValue=new E.t(""),this.submittedQuestionsIds$=new E.t([]),this.isProcessingSomething=!1,this.templates$=(0,N.of)([])}getTemplates(W){return this.http.get("templates",W?{params:{name:W,page:0}}:{params:{page:0}})}getTemplatesById(W){return this.http.get(`templates/${W}`)}createTemplate(W){return this.http.post("templates",W)}addQuestionToSubmission(W){const $=this.submittedQuestionsIds$.getValue();this.submittedQuestionsIds$.next([...$,W])}removeQuestionFromSubmission(W){const $=this.submittedQuestionsIds$.getValue(),J=$.indexOf(W);J>-1&&($.splice(J,1),this.submittedQuestionsIds$.next($))}loadTemplates(){this.templates$=(0,O.x)((0,N.of)([]),this.searchTemplateValue.pipe((0,le.F)(),(0,s.M)(()=>this.isProcessingSomething=!0),(0,V.n)(W=>this.getTemplates(W).pipe((0,c.W)(()=>(0,N.of)([])),(0,s.M)(()=>this.isProcessingSomething=!1)))))}static#e=this.\u0275fac=function($){return new($||ae)(v.KVO(T.Qq))};static#t=this.\u0275prov=v.jDH({token:ae,factory:ae.\u0275fac,providedIn:"root"})}return ae})();var S=d(3089);let K=(()=>{class ae{constructor(W,$,J){this.http=W,this.permissionsService=$,this.userService=J,this.searchQuestionValue=new E.t(""),this.isProcessingSomething=!1,this.questions$=(0,N.of)([])}getQuestions(W){return this.http.get("questions",W?{params:{name:W,page:0}}:{params:{page:0}})}getQuestionById(W){return this.http.get(`questions/${W}`)}createQuestion(W){return this.http.post("questions",W)}editQuestion(W){const J=Object.keys(this.permissionsService.getPermissions()||{}),ne=(new T.Nl).set("role",J[0]);return this.http.patch("/questions",W,{params:ne})}saveQuestionAnswer(W,$,J,ne){this.http.post(`answers/${W}/${$}/${ne}${this.userService.currentRole===S.X.supervisor&&S.X.admin?"/supervisor":""}`,{answer:J}).subscribe({complete:()=>{this.isProcessingSomething=!1}})}loadQuestions(){this.questions$=(0,O.x)((0,N.of)([]),this.searchQuestionValue.pipe((0,le.F)(),(0,s.M)(()=>this.isProcessingSomething=!0),(0,V.n)(W=>this.getQuestions(W).pipe((0,c.W)(()=>(0,N.of)([])),(0,s.M)(()=>this.isProcessingSomething=!1)))))}static#e=this.\u0275fac=function($){return new($||ae)(v.KVO(T.Qq),v.KVO(M.$R),v.KVO(b))};static#t=this.\u0275prov=v.jDH({token:ae,factory:ae.\u0275fac,providedIn:"root"})}return ae})();var oe=d(4441);let ve=(()=>{class ae{constructor(W){this.http=W,this.formsStatus=new E.t(oe.n.All),this.searchFormValue=new E.t(""),this.isProcessingSomething=!1,this.forms$=(0,N.of)([])}getForms(W){return this.http.get("forms",W?{params:{page:0,name:W}}:{params:{page:0}})}getFormById(W){return this.http.get(`forms/${W}`)}removeUserFromForm(W,$){this.isProcessingSomething=!0,this.http.delete(`forms/${W}/users/${$}`).subscribe({complete:()=>{this.loadForms()}})}createFormFromTemplate(W,$){this.isProcessingSomething=!0,this.http.post("forms",$,{params:{templateId:W}}).subscribe({error:()=>{this.isProcessingSomething=!1},complete:()=>{this.isProcessingSomething=!1}})}addUserToForm(W,$){this.http.post(`forms/${W}/users/${$}`,{}).subscribe({complete:()=>{this.loadForms()}})}removeForm(W){this.isProcessingSomething=!0,this.http.delete(`forms/${W}`).subscribe({complete:()=>{this.loadForms()}})}changeFormsStatus(W){this.formsStatus.next(W)}loadForms(){this.forms$=(0,O.x)((0,N.of)([]),this.searchFormValue.pipe((0,le.F)(),(0,s.M)(()=>this.isProcessingSomething=!0),(0,V.n)(W=>this.getForms(W).pipe((0,c.W)(()=>(0,N.of)([])),(0,s.M)(()=>this.isProcessingSomething=!1)))))}static#e=this.\u0275fac=function($){return new($||ae)(v.KVO(T.Qq))};static#t=this.\u0275prov=v.jDH({token:ae,factory:ae.\u0275fac,providedIn:"root"})}return ae})()},5328:(at,ge,d)=>{var s=d(345),c=d(4438);const I={production:!0,BACKEND_API:"http://localhost:8080/api/v1/",EXCLUDED_URLS:["./assets/","/i18n","https://graph.microsoft"],MSAL:{CLIENT_ID:"dc1aea2d-2982-4e88-8756-9cbc93936d3b",AUTHORITY:"https://login.microsoftonline.com/common/",REDIRECT_URI:"/performance-manager/dashboard",POST_LOGOUT_URI:"/",SCOPES_ARRAY:["GroupMember.Read.All","People.Read","user.read","User.Read.All","User.ReadBasic.All","presence.read.all","openid","profile","offline_access","email"]}};var v=d(1626),T=d(855),M=d(2341),_=d(803),b=d(3089);const E=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadComponent:()=>d.e(161).then(d.bind(d,7161)).then(u=>u.HomeComponent)},{path:"no-permissions",loadComponent:()=>d.e(195).then(d.bind(d,8195)).then(u=>u.NoPermissionsComponent)},{path:"dashboard",loadChildren:()=>d.e(465).then(d.bind(d,2465)).then(u=>u.DASHBOARD_ROUTES),canActivate:[T.VA]},{path:"browse-forms",loadComponent:()=>Promise.all([d.e(76),d.e(944)]).then(d.bind(d,4944)).then(u=>u.BrowseSurveysComponent),canActivate:[T.VA,M.f8],data:{permissions:{only:[b.X.user,b.X.supervisor,b.X.admin],redirectTo:"/no-permissions"}}},{path:"create-template",loadComponent:()=>Promise.all([d.e(76),d.e(37)]).then(d.bind(d,2037)).then(u=>u.CreateTemplateComponent),canActivate:[T.VA,M.f8],data:{permissions:{only:[b.X.supervisor,b.X.admin],redirectTo:"/no-permissions"}}},{path:"create-form/template/:templateId",loadComponent:()=>Promise.all([d.e(76),d.e(875)]).then(d.bind(d,875)).then(u=>u.CreateFormComponent),canActivate:[T.VA,M.f8],data:{permissions:{only:[b.X.supervisor,b.X.admin],redirectTo:"/no-permissions"}}},{path:"create-form",loadComponent:()=>Promise.all([d.e(76),d.e(875)]).then(d.bind(d,875)).then(u=>u.CreateFormComponent),canActivate:[T.VA,M.f8],data:{permissions:{only:[b.X.supervisor,b.X.admin],redirectTo:"/no-permissions"}}},{path:"fill-form/template/:templateId",loadComponent:()=>Promise.all([d.e(76),d.e(810)]).then(d.bind(d,810)).then(u=>u.FillFormComponent),canActivate:[T.VA,M.f8],data:{permissions:{only:[b.X.user,b.X.supervisor,b.X.admin],redirectTo:"/no-permissions"}}},{path:"fill-form/form/:formId/user/:userId",loadComponent:()=>Promise.all([d.e(76),d.e(810)]).then(d.bind(d,810)).then(u=>u.FillFormComponent),canActivate:[T.VA,M.f8],data:{permissions:{only:[b.X.user,b.X.supervisor,b.X.admin],redirectTo:"/no-permissions"}}},{path:"settings",loadComponent:()=>d.e(948).then(d.bind(d,3948)).then(u=>u.SettingsComponent),canActivate:[T.VA,M.f8],data:{permissions:{only:[b.X.admin],redirectTo:"/no-permissions"}}},{path:"**",redirectTo:"home"}];var N=d(9969);function le(u){return new c.wOt(3e3,!1)}function Ne(u){switch(u.length){case 0:return new N.sf;case 1:return u[0];default:return new N.ui(u)}}function lt(u,l,n=new Map,o=new Map){const p=[],y=[];let k=-1,z=null;if(l.forEach(fe=>{const xe=fe.get("offset"),$e=xe==k,Ze=$e&&z||new Map;fe.forEach((zt,Jt)=>{let ln=Jt,An=zt;if("offset"!==Jt)switch(ln=u.normalizePropertyName(ln,p),An){case N.FX:An=n.get(Jt);break;case N.kp:An=o.get(Jt);break;default:An=u.normalizeStyleValue(Jt,ln,An,p)}Ze.set(ln,An)}),$e||y.push(Ze),z=Ze,k=xe}),p.length)throw function Me(u){return new c.wOt(3502,!1)}();return y}function Ot(u,l,n,o){switch(l){case"start":u.onStart(()=>o(n&&We(n,"start",u)));break;case"done":u.onDone(()=>o(n&&We(n,"done",u)));break;case"destroy":u.onDestroy(()=>o(n&&We(n,"destroy",u)))}}function We(u,l,n){const y=pe(u.element,u.triggerName,u.fromState,u.toState,l||u.phaseName,n.totalTime??u.totalTime,!!n.disabled),k=u._data;return null!=k&&(y._data=k),y}function pe(u,l,n,o,p="",y=0,k){return{element:u,triggerName:l,fromState:n,toState:o,phaseName:p,totalTime:y,disabled:!!k}}function j(u,l,n){let o=u.get(l);return o||u.set(l,o=n),o}function ce(u){const l=u.indexOf(":");return[u.substring(1,l),u.slice(l+1)]}const ke=typeof document>"u"?null:document.documentElement;function Ge(u){const l=u.parentNode||u.host||null;return l===ke?null:l}let ot=null,mt=!1;function tn(u,l){for(;l;){if(l===u)return!0;l=Ge(l)}return!1}function kn(u,l,n){if(n)return Array.from(u.querySelectorAll(l));const o=u.querySelector(l);return o?[o]:[]}let Rn=(()=>{class u{validateStyleProperty(n){return function Be(u){ot||(ot=function Gt(){return typeof document<"u"?document.body:null}()||{},mt=!!ot.style&&"WebkitAppearance"in ot.style);let l=!0;return ot.style&&!function wt(u){return"ebkit"==u.substring(1,6)}(u)&&(l=u in ot.style,!l&&mt&&(l="Webkit"+u.charAt(0).toUpperCase()+u.slice(1)in ot.style)),l}(n)}matchesElement(n,o){return!1}containsElement(n,o){return tn(n,o)}getParentElement(n){return Ge(n)}query(n,o,p){return kn(n,o,p)}computeStyle(n,o,p){return p||""}animate(n,o,p,y,k,z=[],fe){return new N.sf(p,y)}static#e=this.\u0275fac=function(o){return new(o||u)};static#t=this.\u0275prov=c.jDH({token:u,factory:u.\u0275fac})}return u})();class Ei{static#e=this.NOOP=new Rn}class fn{}const Ln=1e3,Kn="ng-enter",Mn="ng-leave",yi="ng-trigger",ji=".ng-trigger",zi="ng-animating",gt=".ng-animating";function _t(u){if("number"==typeof u)return u;const l=u.match(/^(-?[\.\d]+)(m?s)/);return!l||l.length<2?0:Ye(parseFloat(l[1]),l[2])}function Ye(u,l){return"s"===l?u*Ln:u}function ft(u,l,n){return u.hasOwnProperty("duration")?u:function qt(u,l,n){let p,y=0,k="";if("string"==typeof u){const z=u.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);if(null===z)return l.push(le()),{duration:0,delay:0,easing:""};p=Ye(parseFloat(z[1]),z[2]);const fe=z[3];null!=fe&&(y=Ye(parseFloat(fe),z[4]));const xe=z[5];xe&&(k=xe)}else p=u;if(!n){let z=!1,fe=l.length;p<0&&(l.push(function V(){return new c.wOt(3100,!1)}()),z=!0),y<0&&(l.push(function B(){return new c.wOt(3101,!1)}()),z=!0),z&&l.splice(fe,0,le())}return{duration:p,delay:y,easing:k}}(u,l,n)}function Un(u,l,n){l.forEach((o,p)=>{const y=Bt(p);n&&!n.has(p)&&n.set(p,u.style[y]),u.style[y]=o})}function At(u,l){l.forEach((n,o)=>{const p=Bt(o);u.style[p]=""})}function ui(u){return Array.isArray(u)?1==u.length?u[0]:(0,N.K2)(u):u}const Bn=new RegExp("{{\\s*(.+?)\\s*}}","g");function Qi(u){let l=[];if("string"==typeof u){let n;for(;n=Bn.exec(u);)l.push(n[1]);Bn.lastIndex=0}return l}function Cr(u,l,n){const o=`${u}`,p=o.replace(Bn,(y,k)=>{let z=l[k];return null==z&&(n.push(function K(u){return new c.wOt(3003,!1)}()),z=""),z.toString()});return p==o?u:p}const zr=/-+([a-z0-9])/g;function Bt(u){return u.replace(zr,(...l)=>l[1].toUpperCase())}function $t(u,l,n){switch(l.type){case N.If.Trigger:return u.visitTrigger(l,n);case N.If.State:return u.visitState(l,n);case N.If.Transition:return u.visitTransition(l,n);case N.If.Sequence:return u.visitSequence(l,n);case N.If.Group:return u.visitGroup(l,n);case N.If.Animate:return u.visitAnimate(l,n);case N.If.Keyframes:return u.visitKeyframes(l,n);case N.If.Style:return u.visitStyle(l,n);case N.If.Reference:return u.visitReference(l,n);case N.If.AnimateChild:return u.visitAnimateChild(l,n);case N.If.AnimateRef:return u.visitAnimateRef(l,n);case N.If.Query:return u.visitQuery(l,n);case N.If.Stagger:return u.visitStagger(l,n);default:throw function oe(u){return new c.wOt(3004,!1)}()}}function Wt(u,l){return window.getComputedStyle(u)[l]}const Vt=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]);class Qt extends fn{normalizePropertyName(l,n){return Bt(l)}normalizeStyleValue(l,n,o,p){let y="";const k=o.toString().trim();if(Vt.has(n)&&0!==o&&"0"!==o)if("number"==typeof o)y="px";else{const z=o.match(/^[+-]?[\d\.]+([a-z]*)$/);z&&0==z[1].length&&p.push(function ve(u,l){return new c.wOt(3005,!1)}())}return k+y}}const bi="*";const Rt=new Set(["true","1"]),Pt=new Set(["false","0"]);function sn(u,l){const n=Rt.has(u)||Pt.has(u),o=Rt.has(l)||Pt.has(l);return(p,y)=>{let k=u==bi||u==p,z=l==bi||l==y;return!k&&n&&"boolean"==typeof p&&(k=p?Rt.has(u):Pt.has(u)),!z&&o&&"boolean"==typeof y&&(z=y?Rt.has(l):Pt.has(l)),k&&z}}const vt=new RegExp("s*:selfs*,?","g");function yt(u,l,n,o){return new qe(u).build(l,n,o)}class qe{constructor(l){this._driver=l}build(l,n,o){const p=new Kt(n);return this._resetContextStyleTimingState(p),$t(this,ui(l),p)}_resetContextStyleTimingState(l){l.currentQuerySelector="",l.collectedStyles=new Map,l.collectedStyles.set("",new Map),l.currentTime=0}visitTrigger(l,n){let o=n.queryCount=0,p=n.depCount=0;const y=[],k=[];return"@"==l.name.charAt(0)&&n.errors.push(function ae(){return new c.wOt(3006,!1)}()),l.definitions.forEach(z=>{if(this._resetContextStyleTimingState(n),z.type==N.If.State){const fe=z,xe=fe.name;xe.toString().split(/\s*,\s*/).forEach($e=>{fe.name=$e,y.push(this.visitState(fe,n))}),fe.name=xe}else if(z.type==N.If.Transition){const fe=this.visitTransition(z,n);o+=fe.queryCount,p+=fe.depCount,k.push(fe)}else n.errors.push(function de(){return new c.wOt(3007,!1)}())}),{type:N.If.Trigger,name:l.name,states:y,transitions:k,queryCount:o,depCount:p,options:null}}visitState(l,n){const o=this.visitStyle(l.styles,n),p=l.options&&l.options.params||null;if(o.containsDynamicStyles){const y=new Set,k=p||{};o.styles.forEach(z=>{z instanceof Map&&z.forEach(fe=>{Qi(fe).forEach(xe=>{k.hasOwnProperty(xe)||y.add(xe)})})}),y.size&&n.errors.push(function W(u,l){return new c.wOt(3008,!1)}(0,y.values()))}return{type:N.If.State,name:l.name,style:o,options:p?{params:p}:null}}visitTransition(l,n){n.queryCount=0,n.depCount=0;const o=$t(this,ui(l.animation),n),p=function je(u,l){const n=[];return"string"==typeof u?u.split(/\s*,\s*/).forEach(o=>function ct(u,l,n){if(":"==u[0]){const fe=function st(u,l){switch(u){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(n,o)=>parseFloat(o)>parseFloat(n);case":decrement":return(n,o)=>parseFloat(o)<parseFloat(n);default:return l.push(function me(u){return new c.wOt(3016,!1)}()),"* => *"}}(u,n);if("function"==typeof fe)return void l.push(fe);u=fe}const o=u.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==o||o.length<4)return n.push(function Z(u){return new c.wOt(3015,!1)}()),l;const p=o[1],y=o[2],k=o[3];l.push(sn(p,k)),"<"==y[0]&&(p!=bi||k!=bi)&&l.push(sn(k,p))}(o,n,l)):n.push(u),n}(l.expr,n.errors);return{type:N.If.Transition,matchers:p,animation:o,queryCount:n.queryCount,depCount:n.depCount,options:vn(l.options)}}visitSequence(l,n){return{type:N.If.Sequence,steps:l.steps.map(o=>$t(this,o,n)),options:vn(l.options)}}visitGroup(l,n){const o=n.currentTime;let p=0;const y=l.steps.map(k=>{n.currentTime=o;const z=$t(this,k,n);return p=Math.max(p,n.currentTime),z});return n.currentTime=p,{type:N.If.Group,steps:y,options:vn(l.options)}}visitAnimate(l,n){const o=function cn(u,l){if(u.hasOwnProperty("duration"))return u;if("number"==typeof u)return pn(ft(u,l).duration,0,"");const n=u;if(n.split(/\s+/).some(y=>"{"==y.charAt(0)&&"{"==y.charAt(1))){const y=pn(0,0,"");return y.dynamic=!0,y.strValue=n,y}const p=ft(n,l);return pn(p.duration,p.delay,p.easing)}(l.timings,n.errors);n.currentAnimateTimings=o;let p,y=l.styles?l.styles:(0,N.iF)({});if(y.type==N.If.Keyframes)p=this.visitKeyframes(y,n);else{let k=l.styles,z=!1;if(!k){z=!0;const xe={};o.easing&&(xe.easing=o.easing),k=(0,N.iF)(xe)}n.currentTime+=o.duration+o.delay;const fe=this.visitStyle(k,n);fe.isEmptyStep=z,p=fe}return n.currentAnimateTimings=null,{type:N.If.Animate,timings:o,style:p,options:null}}visitStyle(l,n){const o=this._makeStyleAst(l,n);return this._validateStyleAst(o,n),o}_makeStyleAst(l,n){const o=[],p=Array.isArray(l.styles)?l.styles:[l.styles];for(let z of p)"string"==typeof z?z===N.kp?o.push(z):n.errors.push(new c.wOt(3002,!1)):o.push(new Map(Object.entries(z)));let y=!1,k=null;return o.forEach(z=>{if(z instanceof Map&&(z.has("easing")&&(k=z.get("easing"),z.delete("easing")),!y))for(let fe of z.values())if(fe.toString().indexOf("{{")>=0){y=!0;break}}),{type:N.If.Style,styles:o,easing:k,offset:l.offset,containsDynamicStyles:y,options:null}}_validateStyleAst(l,n){const o=n.currentAnimateTimings;let p=n.currentTime,y=n.currentTime;o&&y>0&&(y-=o.duration+o.delay),l.styles.forEach(k=>{"string"!=typeof k&&k.forEach((z,fe)=>{const xe=n.collectedStyles.get(n.currentQuerySelector),$e=xe.get(fe);let Ze=!0;$e&&(y!=p&&y>=$e.startTime&&p<=$e.endTime&&(n.errors.push(function ne(u,l,n,o,p){return new c.wOt(3010,!1)}()),Ze=!1),y=$e.startTime),Ze&&xe.set(fe,{startTime:y,endTime:p}),n.options&&function Fn(u,l,n){const o=l.params||{},p=Qi(u);p.length&&p.forEach(y=>{o.hasOwnProperty(y)||n.push(function S(u){return new c.wOt(3001,!1)}())})}(z,n.options,n.errors)})})}visitKeyframes(l,n){const o={type:N.If.Keyframes,styles:[],options:null};if(!n.currentAnimateTimings)return n.errors.push(function G(){return new c.wOt(3011,!1)}()),o;let y=0;const k=[];let z=!1,fe=!1,xe=0;const $e=l.steps.map(nr=>{const dr=this._makeStyleAst(nr,n);let ur=null!=dr.offset?dr.offset:function Yt(u){if("string"==typeof u)return null;let l=null;if(Array.isArray(u))u.forEach(n=>{if(n instanceof Map&&n.has("offset")){const o=n;l=parseFloat(o.get("offset")),o.delete("offset")}});else if(u instanceof Map&&u.has("offset")){const n=u;l=parseFloat(n.get("offset")),n.delete("offset")}return l}(dr.styles),Ai=0;return null!=ur&&(y++,Ai=dr.offset=ur),fe=fe||Ai<0||Ai>1,z=z||Ai<xe,xe=Ai,k.push(Ai),dr});fe&&n.errors.push(function ue(){return new c.wOt(3012,!1)}()),z&&n.errors.push(function q(){return new c.wOt(3200,!1)}());const Ze=l.steps.length;let zt=0;y>0&&y<Ze?n.errors.push(function F(){return new c.wOt(3202,!1)}()):0==y&&(zt=1/(Ze-1));const Jt=Ze-1,ln=n.currentTime,An=n.currentAnimateTimings,di=An.duration;return $e.forEach((nr,dr)=>{const ur=zt>0?dr==Jt?1:zt*dr:k[dr],Ai=ur*di;n.currentTime=ln+An.delay+Ai,An.duration=Ai,this._validateStyleAst(nr,n),nr.offset=ur,o.styles.push(nr)}),o}visitReference(l,n){return{type:N.If.Reference,animation:$t(this,ui(l.animation),n),options:vn(l.options)}}visitAnimateChild(l,n){return n.depCount++,{type:N.If.AnimateChild,options:vn(l.options)}}visitAnimateRef(l,n){return{type:N.If.AnimateRef,animation:this.visitReference(l.animation,n),options:vn(l.options)}}visitQuery(l,n){const o=n.currentQuerySelector,p=l.options||{};n.queryCount++,n.currentQuery=l;const[y,k]=function nt(u){const l=!!u.split(/\s*,\s*/).find(n=>":self"==n);return l&&(u=u.replace(vt,"")),u=u.replace(/@\*/g,ji).replace(/@\w+/g,n=>ji+"-"+n.slice(1)).replace(/:animating/g,gt),[u,l]}(l.selector);n.currentQuerySelector=o.length?o+" "+y:y,j(n.collectedStyles,n.currentQuerySelector,new Map);const z=$t(this,ui(l.animation),n);return n.currentQuery=null,n.currentQuerySelector=o,{type:N.If.Query,selector:y,limit:p.limit||0,optional:!!p.optional,includeSelf:k,animation:z,originalSelector:l.selector,options:vn(l.options)}}visitStagger(l,n){n.currentQuery||n.errors.push(function P(){return new c.wOt(3013,!1)}());const o="full"===l.timings?{duration:0,delay:0,easing:"full"}:ft(l.timings,n.errors,!0);return{type:N.If.Stagger,animation:$t(this,ui(l.animation),n),timings:o,options:null}}}class Kt{constructor(l){this.errors=l,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles=new Map,this.options=null,this.unsupportedCSSPropertiesFound=new Set}}function vn(u){return u?(u={...u}).params&&(u.params=function pt(u){return u?{...u}:null}(u.params)):u={},u}function pn(u,l,n){return{duration:u,delay:l,easing:n}}function Ci(u,l,n,o,p,y,k=null,z=!1){return{type:1,element:u,keyframes:l,preStyleProps:n,postStyleProps:o,duration:p,delay:y,totalTime:p+y,easing:k,subTimeline:z}}class pi{constructor(){this._map=new Map}get(l){return this._map.get(l)||[]}append(l,n){let o=this._map.get(l);o||this._map.set(l,o=[]),o.push(...n)}has(l){return this._map.has(l)}clear(){this._map.clear()}}const Or=new RegExp(":enter","g"),Tt=new RegExp(":leave","g");function f(u,l,n,o,p,y=new Map,k=new Map,z,fe,xe=[]){return(new g).buildKeyframes(u,l,n,o,p,y,k,z,fe,xe)}class g{buildKeyframes(l,n,o,p,y,k,z,fe,xe,$e=[]){xe=xe||new pi;const Ze=new X(l,n,xe,p,y,$e,[]);Ze.options=fe;const zt=fe.delay?_t(fe.delay):0;Ze.currentTimeline.delayNextStep(zt),Ze.currentTimeline.setStyles([k],null,Ze.errors,fe),$t(this,o,Ze);const Jt=Ze.timelines.filter(ln=>ln.containsAnimation());if(Jt.length&&z.size){let ln;for(let An=Jt.length-1;An>=0;An--){const di=Jt[An];if(di.element===n){ln=di;break}}ln&&!ln.allowOnlyTimelineStyles()&&ln.setStyles([z],null,Ze.errors,fe)}return Jt.length?Jt.map(ln=>ln.buildKeyframes()):[Ci(n,[],[],[],0,zt,"",!1)]}visitTrigger(l,n){}visitState(l,n){}visitTransition(l,n){}visitAnimateChild(l,n){const o=n.subInstructions.get(n.element);if(o){const p=n.createSubContext(l.options),y=n.currentTimeline.currentTime,k=this._visitSubInstructions(o,p,p.options);y!=k&&n.transformIntoNewTimeline(k)}n.previousNode=l}visitAnimateRef(l,n){const o=n.createSubContext(l.options);o.transformIntoNewTimeline(),this._applyAnimationRefDelays([l.options,l.animation.options],n,o),this.visitReference(l.animation,o),n.transformIntoNewTimeline(o.currentTimeline.currentTime),n.previousNode=l}_applyAnimationRefDelays(l,n,o){for(const p of l){const y=p?.delay;if(y){const k="number"==typeof y?y:_t(Cr(y,p?.params??{},n.errors));o.delayNextStep(k)}}}_visitSubInstructions(l,n,o){let y=n.currentTimeline.currentTime;const k=null!=o.duration?_t(o.duration):null,z=null!=o.delay?_t(o.delay):null;return 0!==k&&l.forEach(fe=>{const xe=n.appendInstructionToTimeline(fe,k,z);y=Math.max(y,xe.duration+xe.delay)}),y}visitReference(l,n){n.updateOptions(l.options,!0),$t(this,l.animation,n),n.previousNode=l}visitSequence(l,n){const o=n.subContextCount;let p=n;const y=l.options;if(y&&(y.params||y.delay)&&(p=n.createSubContext(y),p.transformIntoNewTimeline(),null!=y.delay)){p.previousNode.type==N.If.Style&&(p.currentTimeline.snapshotCurrentStyles(),p.previousNode=C);const k=_t(y.delay);p.delayNextStep(k)}l.steps.length&&(l.steps.forEach(k=>$t(this,k,p)),p.currentTimeline.applyStylesToKeyframe(),p.subContextCount>o&&p.transformIntoNewTimeline()),n.previousNode=l}visitGroup(l,n){const o=[];let p=n.currentTimeline.currentTime;const y=l.options&&l.options.delay?_t(l.options.delay):0;l.steps.forEach(k=>{const z=n.createSubContext(l.options);y&&z.delayNextStep(y),$t(this,k,z),p=Math.max(p,z.currentTimeline.currentTime),o.push(z.currentTimeline)}),o.forEach(k=>n.currentTimeline.mergeTimelineCollectedStyles(k)),n.transformIntoNewTimeline(p),n.previousNode=l}_visitTiming(l,n){if(l.dynamic){const o=l.strValue;return ft(n.params?Cr(o,n.params,n.errors):o,n.errors)}return{duration:l.duration,delay:l.delay,easing:l.easing}}visitAnimate(l,n){const o=n.currentAnimateTimings=this._visitTiming(l.timings,n),p=n.currentTimeline;o.delay&&(n.incrementTime(o.delay),p.snapshotCurrentStyles());const y=l.style;y.type==N.If.Keyframes?this.visitKeyframes(y,n):(n.incrementTime(o.duration),this.visitStyle(y,n),p.applyStylesToKeyframe()),n.currentAnimateTimings=null,n.previousNode=l}visitStyle(l,n){const o=n.currentTimeline,p=n.currentAnimateTimings;!p&&o.hasCurrentStyleProperties()&&o.forwardFrame();const y=p&&p.easing||l.easing;l.isEmptyStep?o.applyEmptyStep(y):o.setStyles(l.styles,y,n.errors,n.options),n.previousNode=l}visitKeyframes(l,n){const o=n.currentAnimateTimings,p=n.currentTimeline.duration,y=o.duration,z=n.createSubContext().currentTimeline;z.easing=o.easing,l.styles.forEach(fe=>{z.forwardTime((fe.offset||0)*y),z.setStyles(fe.styles,fe.easing,n.errors,n.options),z.applyStylesToKeyframe()}),n.currentTimeline.mergeTimelineCollectedStyles(z),n.transformIntoNewTimeline(p+y),n.previousNode=l}visitQuery(l,n){const o=n.currentTimeline.currentTime,p=l.options||{},y=p.delay?_t(p.delay):0;y&&(n.previousNode.type===N.If.Style||0==o&&n.currentTimeline.hasCurrentStyleProperties())&&(n.currentTimeline.snapshotCurrentStyles(),n.previousNode=C);let k=o;const z=n.invokeQuery(l.selector,l.originalSelector,l.limit,l.includeSelf,!!p.optional,n.errors);n.currentQueryTotal=z.length;let fe=null;z.forEach((xe,$e)=>{n.currentQueryIndex=$e;const Ze=n.createSubContext(l.options,xe);y&&Ze.delayNextStep(y),xe===n.element&&(fe=Ze.currentTimeline),$t(this,l.animation,Ze),Ze.currentTimeline.applyStylesToKeyframe(),k=Math.max(k,Ze.currentTimeline.currentTime)}),n.currentQueryIndex=0,n.currentQueryTotal=0,n.transformIntoNewTimeline(k),fe&&(n.currentTimeline.mergeTimelineCollectedStyles(fe),n.currentTimeline.snapshotCurrentStyles()),n.previousNode=l}visitStagger(l,n){const o=n.parentContext,p=n.currentTimeline,y=l.timings,k=Math.abs(y.duration),z=k*(n.currentQueryTotal-1);let fe=k*n.currentQueryIndex;switch(y.duration<0?"reverse":y.easing){case"reverse":fe=z-fe;break;case"full":fe=o.currentStaggerTime}const $e=n.currentTimeline;fe&&$e.delayNextStep(fe);const Ze=$e.currentTime;$t(this,l.animation,n),n.previousNode=l,o.currentStaggerTime=p.currentTime-Ze+(p.startTime-o.currentTimeline.startTime)}}const C={};class X{constructor(l,n,o,p,y,k,z,fe){this._driver=l,this.element=n,this.subInstructions=o,this._enterClassName=p,this._leaveClassName=y,this.errors=k,this.timelines=z,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=C,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=fe||new ye(this._driver,n,0),z.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(l,n){if(!l)return;const o=l;let p=this.options;null!=o.duration&&(p.duration=_t(o.duration)),null!=o.delay&&(p.delay=_t(o.delay));const y=o.params;if(y){let k=p.params;k||(k=this.options.params={}),Object.keys(y).forEach(z=>{(!n||!k.hasOwnProperty(z))&&(k[z]=Cr(y[z],k,this.errors))})}}_copyOptions(){const l={};if(this.options){const n=this.options.params;if(n){const o=l.params={};Object.keys(n).forEach(p=>{o[p]=n[p]})}}return l}createSubContext(l=null,n,o){const p=n||this.element,y=new X(this._driver,p,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(p,o||0));return y.previousNode=this.previousNode,y.currentAnimateTimings=this.currentAnimateTimings,y.options=this._copyOptions(),y.updateOptions(l),y.currentQueryIndex=this.currentQueryIndex,y.currentQueryTotal=this.currentQueryTotal,y.parentContext=this,this.subContextCount++,y}transformIntoNewTimeline(l){return this.previousNode=C,this.currentTimeline=this.currentTimeline.fork(this.element,l),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(l,n,o){const p={duration:n??l.duration,delay:this.currentTimeline.currentTime+(o??0)+l.delay,easing:""},y=new Re(this._driver,l.element,l.keyframes,l.preStyleProps,l.postStyleProps,p,l.stretchStartingKeyframe);return this.timelines.push(y),p}incrementTime(l){this.currentTimeline.forwardTime(this.currentTimeline.duration+l)}delayNextStep(l){l>0&&this.currentTimeline.delayNextStep(l)}invokeQuery(l,n,o,p,y,k){let z=[];if(p&&z.push(this.element),l.length>0){l=(l=l.replace(Or,"."+this._enterClassName)).replace(Tt,"."+this._leaveClassName);let xe=this._driver.query(this.element,l,1!=o);0!==o&&(xe=o<0?xe.slice(xe.length+o,xe.length):xe.slice(0,o)),z.push(...xe)}return!y&&0==z.length&&k.push(function ee(u){return new c.wOt(3014,!1)}()),z}}class ye{constructor(l,n,o,p){this._driver=l,this.element=n,this.startTime=o,this._elementTimelineStylesLookup=p,this.duration=0,this.easing=null,this._previousKeyframe=new Map,this._currentKeyframe=new Map,this._keyframes=new Map,this._styleSummary=new Map,this._localTimelineStyles=new Map,this._pendingStyles=new Map,this._backFill=new Map,this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(n),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(n,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(l){const n=1===this._keyframes.size&&this._pendingStyles.size;this.duration||n?(this.forwardTime(this.currentTime+l),n&&this.snapshotCurrentStyles()):this.startTime+=l}fork(l,n){return this.applyStylesToKeyframe(),new ye(this._driver,l,n||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=1,this._loadKeyframe()}forwardTime(l){this.applyStylesToKeyframe(),this.duration=l,this._loadKeyframe()}_updateStyle(l,n){this._localTimelineStyles.set(l,n),this._globalTimelineStyles.set(l,n),this._styleSummary.set(l,{time:this.currentTime,value:n})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(l){l&&this._previousKeyframe.set("easing",l);for(let[n,o]of this._globalTimelineStyles)this._backFill.set(n,o||N.kp),this._currentKeyframe.set(n,N.kp);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(l,n,o,p){n&&this._previousKeyframe.set("easing",n);const y=p&&p.params||{},k=function It(u,l){const n=new Map;let o;return u.forEach(p=>{if("*"===p){o??=l.keys();for(let y of o)n.set(y,N.kp)}else for(let[y,k]of p)n.set(y,k)}),n}(l,this._globalTimelineStyles);for(let[z,fe]of k){const xe=Cr(fe,y,o);this._pendingStyles.set(z,xe),this._localTimelineStyles.has(z)||this._backFill.set(z,this._globalTimelineStyles.get(z)??N.kp),this._updateStyle(z,xe)}}applyStylesToKeyframe(){0!=this._pendingStyles.size&&(this._pendingStyles.forEach((l,n)=>{this._currentKeyframe.set(n,l)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((l,n)=>{this._currentKeyframe.has(n)||this._currentKeyframe.set(n,l)}))}snapshotCurrentStyles(){for(let[l,n]of this._localTimelineStyles)this._pendingStyles.set(l,n),this._updateStyle(l,n)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){const l=[];for(let n in this._currentKeyframe)l.push(n);return l}mergeTimelineCollectedStyles(l){l._styleSummary.forEach((n,o)=>{const p=this._styleSummary.get(o);(!p||n.time>p.time)&&this._updateStyle(o,n.value)})}buildKeyframes(){this.applyStylesToKeyframe();const l=new Set,n=new Set,o=1===this._keyframes.size&&0===this.duration;let p=[];this._keyframes.forEach((z,fe)=>{const xe=new Map([...this._backFill,...z]);xe.forEach(($e,Ze)=>{$e===N.FX?l.add(Ze):$e===N.kp&&n.add(Ze)}),o||xe.set("offset",fe/this.duration),p.push(xe)});const y=[...l.values()],k=[...n.values()];if(o){const z=p[0],fe=new Map(z);z.set("offset",0),fe.set("offset",1),p=[z,fe]}return Ci(this.element,p,y,k,this.duration,this.startTime,this.easing,!1)}}class Re extends ye{constructor(l,n,o,p,y,k,z=!1){super(l,n,k.delay),this.keyframes=o,this.preStyleProps=p,this.postStyleProps=y,this._stretchStartingKeyframe=z,this.timings={duration:k.duration,delay:k.delay,easing:k.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let l=this.keyframes,{delay:n,duration:o,easing:p}=this.timings;if(this._stretchStartingKeyframe&&n){const y=[],k=o+n,z=n/k,fe=new Map(l[0]);fe.set("offset",0),y.push(fe);const xe=new Map(l[0]);xe.set("offset",Ke(z)),y.push(xe);const $e=l.length-1;for(let Ze=1;Ze<=$e;Ze++){let zt=new Map(l[Ze]);const Jt=zt.get("offset");zt.set("offset",Ke((n+Jt*o)/k)),y.push(zt)}o=k,n=0,p="",l=y}return Ci(this.element,l,this.preStyleProps,this.postStyleProps,o,n,p,!0)}}function Ke(u,l=3){const n=Math.pow(10,l-1);return Math.round(u*n)/n}function jt(u,l,n,o,p,y,k,z,fe,xe,$e,Ze,zt){return{type:0,element:u,triggerName:l,isRemovalTransition:p,fromState:n,fromStyles:y,toState:o,toStyles:k,timelines:z,queriedElements:fe,preStyleProps:xe,postStyleProps:$e,totalTime:Ze,errors:zt}}const Ut={};class hn{constructor(l,n,o){this._triggerName=l,this.ast=n,this._stateStyles=o}match(l,n,o,p){return function Hn(u,l,n,o,p){return u.some(y=>y(l,n,o,p))}(this.ast.matchers,l,n,o,p)}buildStyles(l,n,o){let p=this._stateStyles.get("*");return void 0!==l&&(p=this._stateStyles.get(l?.toString())||p),p?p.buildStyles(n,o):new Map}build(l,n,o,p,y,k,z,fe,xe,$e){const Ze=[],zt=this.ast.options&&this.ast.options.params||Ut,ln=this.buildStyles(o,z&&z.params||Ut,Ze),An=fe&&fe.params||Ut,di=this.buildStyles(p,An,Ze),nr=new Set,dr=new Map,ur=new Map,Ai="void"===p,Qs={params:vi(An,zt),delay:this.ast.options?.delay},Xr=$e?[]:f(l,n,this.ast.animation,y,k,ln,di,Qs,xe,Ze);let _o=0;return Xr.forEach(ss=>{_o=Math.max(ss.duration+ss.delay,_o)}),Ze.length?jt(n,this._triggerName,o,p,Ai,ln,di,[],[],dr,ur,_o,Ze):(Xr.forEach(ss=>{const Ja=ss.element,pd=j(dr,Ja,new Set);ss.preStyleProps.forEach(Eo=>pd.add(Eo));const sf=j(ur,Ja,new Set);ss.postStyleProps.forEach(Eo=>sf.add(Eo)),Ja!==n&&nr.add(Ja)}),jt(n,this._triggerName,o,p,Ai,ln,di,Xr,[...nr.values()],dr,ur,_o))}}function vi(u,l){const n={...l};return Object.entries(u).forEach(([o,p])=>{null!=p&&(n[o]=p)}),n}class Ii{constructor(l,n,o){this.styles=l,this.defaultParams=n,this.normalizer=o}buildStyles(l,n){const o=new Map,p=vi(l,this.defaultParams);return this.styles.styles.forEach(y=>{"string"!=typeof y&&y.forEach((k,z)=>{k&&(k=Cr(k,p,n));const fe=this.normalizer.normalizePropertyName(z,n);k=this.normalizer.normalizeStyleValue(z,fe,k,n),o.set(z,k)})}),o}}class Sr{constructor(l,n,o){this.name=l,this.ast=n,this._normalizer=o,this.transitionFactories=[],this.states=new Map,n.states.forEach(p=>{this.states.set(p.name,new Ii(p.style,p.options&&p.options.params||{},o))}),Gr(this.states,"true","1"),Gr(this.states,"false","0"),n.transitions.forEach(p=>{this.transitionFactories.push(new hn(l,p,this.states))}),this.fallbackTransition=function $r(u,l,n){return new hn(u,{type:N.If.Transition,animation:{type:N.If.Sequence,steps:[],options:null},matchers:[(k,z)=>!0],options:null,queryCount:0,depCount:0},l)}(l,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(l,n,o,p){return this.transitionFactories.find(k=>k.match(l,n,o,p))||null}matchStyles(l,n,o){return this.fallbackTransition.buildStyles(l,n,o)}}function Gr(u,l,n){u.has(l)?u.has(n)||u.set(n,u.get(l)):u.has(n)&&u.set(l,u.get(n))}const co=new pi;class Ar{constructor(l,n,o){this.bodyNode=l,this._driver=n,this._normalizer=o,this._animations=new Map,this._playersById=new Map,this.players=[]}register(l,n){const o=[],y=yt(this._driver,n,o,[]);if(o.length)throw function re(u){return new c.wOt(3503,!1)}();this._animations.set(l,y)}_buildPlayer(l,n,o){const p=l.element,y=lt(this._normalizer,l.keyframes,n,o);return this._driver.animate(p,y,l.duration,l.delay,l.easing,[],!0)}create(l,n,o={}){const p=[],y=this._animations.get(l);let k;const z=new Map;if(y?(k=f(this._driver,n,y,Kn,Mn,new Map,new Map,o,co,p),k.forEach($e=>{const Ze=j(z,$e.element,new Map);$e.postStyleProps.forEach(zt=>Ze.set(zt,null))})):(p.push(function Oe(){return new c.wOt(3300,!1)}()),k=[]),p.length)throw function Xe(u){return new c.wOt(3504,!1)}();z.forEach(($e,Ze)=>{$e.forEach((zt,Jt)=>{$e.set(Jt,this._driver.computeStyle(Ze,Jt,N.kp))})});const xe=Ne(k.map($e=>{const Ze=z.get($e.element);return this._buildPlayer($e,new Map,Ze)}));return this._playersById.set(l,xe),xe.onDestroy(()=>this.destroy(l)),this.players.push(xe),xe}destroy(l){const n=this._getPlayer(l);n.destroy(),this._playersById.delete(l);const o=this.players.indexOf(n);o>=0&&this.players.splice(o,1)}_getPlayer(l){const n=this._playersById.get(l);if(!n)throw function He(u){return new c.wOt(3301,!1)}();return n}listen(l,n,o,p){const y=pe(n,"","","");return Ot(this._getPlayer(l),o,y,p),()=>{}}command(l,n,o,p){if("register"==o)return void this.register(l,p[0]);if("create"==o)return void this.create(l,n,p[0]||{});const y=this._getPlayer(l);switch(o){case"play":y.play();break;case"pause":y.pause();break;case"reset":y.reset();break;case"restart":y.restart();break;case"finish":y.finish();break;case"init":y.init();break;case"setPosition":y.setPosition(parseFloat(p[0]));break;case"destroy":this.destroy(l)}}}const cs="ng-animate-queued",Xo="ng-animate-disabled",No=[],ks={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},Ms={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},sr="__ng_removed";class Js{get params(){return this.options.params}constructor(l,n=""){this.namespaceId=n;const o=l&&l.hasOwnProperty("value");if(this.value=function Yr(u){return u??null}(o?l.value:l),o){const{value:y,...k}=l;this.options=k}else this.options={};this.options.params||(this.options.params={})}absorbOptions(l){const n=l.params;if(n){const o=this.options.params;Object.keys(n).forEach(p=>{null==o[p]&&(o[p]=n[p])})}}}const ds="void",us=new Js(ds);class Zr{constructor(l,n,o){this.id=l,this.hostElement=n,this._engine=o,this.players=[],this._triggers=new Map,this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+l,Xi(n,this._hostClassName)}listen(l,n,o,p){if(!this._triggers.has(n))throw function rt(u,l){return new c.wOt(3302,!1)}();if(null==o||0==o.length)throw function Te(u){return new c.wOt(3303,!1)}();if(!function wr(u){return"start"==u||"done"==u}(o))throw function se(u,l){return new c.wOt(3400,!1)}();const y=j(this._elementListeners,l,[]),k={name:n,phase:o,callback:p};y.push(k);const z=j(this._engine.statesByElement,l,new Map);return z.has(n)||(Xi(l,yi),Xi(l,yi+"-"+n),z.set(n,us)),()=>{this._engine.afterFlush(()=>{const fe=y.indexOf(k);fe>=0&&y.splice(fe,1),this._triggers.has(n)||z.delete(n)})}}register(l,n){return!this._triggers.has(l)&&(this._triggers.set(l,n),!0)}_getTrigger(l){const n=this._triggers.get(l);if(!n)throw function U(u){return new c.wOt(3401,!1)}();return n}trigger(l,n,o,p=!0){const y=this._getTrigger(n),k=new Yo(this.id,n,l);let z=this._engine.statesByElement.get(l);z||(Xi(l,yi),Xi(l,yi+"-"+n),this._engine.statesByElement.set(l,z=new Map));let fe=z.get(n);const xe=new Js(o,this.id);if(!(o&&o.hasOwnProperty("value"))&&fe&&xe.absorbOptions(fe.options),z.set(n,xe),fe||(fe=us),xe.value!==ds&&fe.value===xe.value){if(!function Mi(u,l){const n=Object.keys(u),o=Object.keys(l);if(n.length!=o.length)return!1;for(let p=0;p<n.length;p++){const y=n[p];if(!l.hasOwnProperty(y)||u[y]!==l[y])return!1}return!0}(fe.params,xe.params)){const An=[],di=y.matchStyles(fe.value,fe.params,An),nr=y.matchStyles(xe.value,xe.params,An);An.length?this._engine.reportError(An):this._engine.afterFlush(()=>{At(l,di),Un(l,nr)})}return}const zt=j(this._engine.playersByElement,l,[]);zt.forEach(An=>{An.namespaceId==this.id&&An.triggerName==n&&An.queued&&An.destroy()});let Jt=y.matchTransition(fe.value,xe.value,l,xe.params),ln=!1;if(!Jt){if(!p)return;Jt=y.fallbackTransition,ln=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:l,triggerName:n,transition:Jt,fromState:fe,toState:xe,player:k,isFallbackTransition:ln}),ln||(Xi(l,cs),k.onStart(()=>{Jo(l,cs)})),k.onDone(()=>{let An=this.players.indexOf(k);An>=0&&this.players.splice(An,1);const di=this._engine.playersByElement.get(l);if(di){let nr=di.indexOf(k);nr>=0&&di.splice(nr,1)}}),this.players.push(k),zt.push(k),k}deregister(l){this._triggers.delete(l),this._engine.statesByElement.forEach(n=>n.delete(l)),this._elementListeners.forEach((n,o)=>{this._elementListeners.set(o,n.filter(p=>p.name!=l))})}clearElementCache(l){this._engine.statesByElement.delete(l),this._elementListeners.delete(l);const n=this._engine.playersByElement.get(l);n&&(n.forEach(o=>o.destroy()),this._engine.playersByElement.delete(l))}_signalRemovalForInnerTriggers(l,n){const o=this._engine.driver.query(l,ji,!0);o.forEach(p=>{if(p[sr])return;const y=this._engine.fetchNamespacesByElement(p);y.size?y.forEach(k=>k.triggerLeaveAnimation(p,n,!1,!0)):this.clearElementCache(p)}),this._engine.afterFlushAnimationsDone(()=>o.forEach(p=>this.clearElementCache(p)))}triggerLeaveAnimation(l,n,o,p){const y=this._engine.statesByElement.get(l),k=new Map;if(y){const z=[];if(y.forEach((fe,xe)=>{if(k.set(xe,fe.value),this._triggers.has(xe)){const $e=this.trigger(l,xe,ds,p);$e&&z.push($e)}}),z.length)return this._engine.markElementAsRemoved(this.id,l,!0,n,k),o&&Ne(z).onDone(()=>this._engine.processLeaveNode(l)),!0}return!1}prepareLeaveAnimationListeners(l){const n=this._elementListeners.get(l),o=this._engine.statesByElement.get(l);if(n&&o){const p=new Set;n.forEach(y=>{const k=y.name;if(p.has(k))return;p.add(k);const fe=this._triggers.get(k).fallbackTransition,xe=o.get(k)||us,$e=new Js(ds),Ze=new Yo(this.id,k,l);this._engine.totalQueuedPlayers++,this._queue.push({element:l,triggerName:k,transition:fe,fromState:xe,toState:$e,player:Ze,isFallbackTransition:!0})})}}removeNode(l,n){const o=this._engine;if(l.childElementCount&&this._signalRemovalForInnerTriggers(l,n),this.triggerLeaveAnimation(l,n,!0))return;let p=!1;if(o.totalAnimations){const y=o.players.length?o.playersByQueriedElement.get(l):[];if(y&&y.length)p=!0;else{let k=l;for(;k=k.parentNode;)if(o.statesByElement.get(k)){p=!0;break}}}if(this.prepareLeaveAnimationListeners(l),p)o.markElementAsRemoved(this.id,l,!1,n);else{const y=l[sr];(!y||y===ks)&&(o.afterFlush(()=>this.clearElementCache(l)),o.destroyInnerAnimations(l),o._onRemovalComplete(l,n))}}insertNode(l,n){Xi(l,this._hostClassName)}drainQueuedTransitions(l){const n=[];return this._queue.forEach(o=>{const p=o.player;if(p.destroyed)return;const y=o.element,k=this._elementListeners.get(y);k&&k.forEach(z=>{if(z.name==o.triggerName){const fe=pe(y,o.triggerName,o.fromState.value,o.toState.value);fe._data=l,Ot(o.player,z.phase,fe,z.callback)}}),p.markedForDestroy?this._engine.afterFlush(()=>{p.destroy()}):n.push(o)}),this._queue=[],n.sort((o,p)=>{const y=o.transition.ast.depCount,k=p.transition.ast.depCount;return 0==y||0==k?y-k:this._engine.driver.containsElement(o.element,p.element)?1:-1})}destroy(l){this.players.forEach(n=>n.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,l)}}class va{_onRemovalComplete(l,n){this.onRemovalComplete(l,n)}constructor(l,n,o,p){this.bodyNode=l,this.driver=n,this._normalizer=o,this.scheduler=p,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(y,k)=>{}}get queuedPlayers(){const l=[];return this._namespaceList.forEach(n=>{n.players.forEach(o=>{o.queued&&l.push(o)})}),l}createNamespace(l,n){const o=new Zr(l,n,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,n)?this._balanceNamespaceList(o,n):(this.newHostElements.set(n,o),this.collectEnterElement(n)),this._namespaceLookup[l]=o}_balanceNamespaceList(l,n){const o=this._namespaceList,p=this.namespacesByHostElement;if(o.length-1>=0){let k=!1,z=this.driver.getParentElement(n);for(;z;){const fe=p.get(z);if(fe){const xe=o.indexOf(fe);o.splice(xe+1,0,l),k=!0;break}z=this.driver.getParentElement(z)}k||o.unshift(l)}else o.push(l);return p.set(n,l),l}register(l,n){let o=this._namespaceLookup[l];return o||(o=this.createNamespace(l,n)),o}registerTrigger(l,n,o){let p=this._namespaceLookup[l];p&&p.register(n,o)&&this.totalAnimations++}destroy(l,n){l&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{const o=this._fetchNamespace(l);this.namespacesByHostElement.delete(o.hostElement);const p=this._namespaceList.indexOf(o);p>=0&&this._namespaceList.splice(p,1),o.destroy(n),delete this._namespaceLookup[l]}))}_fetchNamespace(l){return this._namespaceLookup[l]}fetchNamespacesByElement(l){const n=new Set,o=this.statesByElement.get(l);if(o)for(let p of o.values())if(p.namespaceId){const y=this._fetchNamespace(p.namespaceId);y&&n.add(y)}return n}trigger(l,n,o,p){if(Lo(n)){const y=this._fetchNamespace(l);if(y)return y.trigger(n,o,p),!0}return!1}insertNode(l,n,o,p){if(!Lo(n))return;const y=n[sr];if(y&&y.setForRemoval){y.setForRemoval=!1,y.setForMove=!0;const k=this.collectedLeaveElements.indexOf(n);k>=0&&this.collectedLeaveElements.splice(k,1)}if(l){const k=this._fetchNamespace(l);k&&k.insertNode(n,o)}p&&this.collectEnterElement(n)}collectEnterElement(l){this.collectedEnterElements.push(l)}markElementAsDisabled(l,n){n?this.disabledNodes.has(l)||(this.disabledNodes.add(l),Xi(l,Xo)):this.disabledNodes.has(l)&&(this.disabledNodes.delete(l),Jo(l,Xo))}removeNode(l,n,o){if(Lo(n)){this.scheduler?.notify();const p=l?this._fetchNamespace(l):null;p?p.removeNode(n,o):this.markElementAsRemoved(l,n,!1,o);const y=this.namespacesByHostElement.get(n);y&&y.id!==l&&y.removeNode(n,o)}else this._onRemovalComplete(n,o)}markElementAsRemoved(l,n,o,p,y){this.collectedLeaveElements.push(n),n[sr]={namespaceId:l,setForRemoval:p,hasAnimation:o,removedBeforeQueried:!1,previousTriggersValues:y}}listen(l,n,o,p,y){return Lo(n)?this._fetchNamespace(l).listen(n,o,p,y):()=>{}}_buildInstruction(l,n,o,p,y){return l.transition.build(this.driver,l.element,l.fromState.value,l.toState.value,o,p,l.fromState.options,l.toState.options,n,y)}destroyInnerAnimations(l){let n=this.driver.query(l,ji,!0);n.forEach(o=>this.destroyActiveAnimationsForElement(o)),0!=this.playersByQueriedElement.size&&(n=this.driver.query(l,gt,!0),n.forEach(o=>this.finishActiveQueriedAnimationOnElement(o)))}destroyActiveAnimationsForElement(l){const n=this.playersByElement.get(l);n&&n.forEach(o=>{o.queued?o.markedForDestroy=!0:o.destroy()})}finishActiveQueriedAnimationOnElement(l){const n=this.playersByQueriedElement.get(l);n&&n.forEach(o=>o.finish())}whenRenderingDone(){return new Promise(l=>{if(this.players.length)return Ne(this.players).onDone(()=>l());l()})}processLeaveNode(l){const n=l[sr];if(n&&n.setForRemoval){if(l[sr]=ks,n.namespaceId){this.destroyInnerAnimations(l);const o=this._fetchNamespace(n.namespaceId);o&&o.clearElementCache(l)}this._onRemovalComplete(l,n.setForRemoval)}l.classList?.contains(Xo)&&this.markElementAsDisabled(l,!1),this.driver.query(l,".ng-animate-disabled",!0).forEach(o=>{this.markElementAsDisabled(o,!1)})}flush(l=-1){let n=[];if(this.newHostElements.size&&(this.newHostElements.forEach((o,p)=>this._balanceNamespaceList(o,p)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let o=0;o<this.collectedEnterElements.length;o++)Xi(this.collectedEnterElements[o],"ng-star-inserted");if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){const o=[];try{n=this._flushAnimations(o,l)}finally{for(let p=0;p<o.length;p++)o[p]()}}else for(let o=0;o<this.collectedLeaveElements.length;o++)this.processLeaveNode(this.collectedLeaveElements[o]);if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(o=>o()),this._flushFns=[],this._whenQuietFns.length){const o=this._whenQuietFns;this._whenQuietFns=[],n.length?Ne(n).onDone(()=>{o.forEach(p=>p())}):o.forEach(p=>p())}}reportError(l){throw function Y(u){return new c.wOt(3402,!1)}()}_flushAnimations(l,n){const o=new pi,p=[],y=new Map,k=[],z=new Map,fe=new Map,xe=new Map,$e=new Set;this.disabledNodes.forEach(gn=>{$e.add(gn);const Wn=this.driver.query(gn,".ng-animate-queued",!0);for(let Zn=0;Zn<Wn.length;Zn++)$e.add(Wn[Zn])});const Ze=this.bodyNode,zt=Array.from(this.statesByElement.keys()),Jt=Io(zt,this.collectedEnterElements),ln=new Map;let An=0;Jt.forEach((gn,Wn)=>{const Zn=Kn+An++;ln.set(Wn,Zn),gn.forEach(Li=>Xi(Li,Zn))});const di=[],nr=new Set,dr=new Set;for(let gn=0;gn<this.collectedLeaveElements.length;gn++){const Wn=this.collectedLeaveElements[gn],Zn=Wn[sr];Zn&&Zn.setForRemoval&&(di.push(Wn),nr.add(Wn),Zn.hasAnimation?this.driver.query(Wn,".ng-star-inserted",!0).forEach(Li=>nr.add(Li)):dr.add(Wn))}const ur=new Map,Ai=Io(zt,Array.from(nr));Ai.forEach((gn,Wn)=>{const Zn=Mn+An++;ur.set(Wn,Zn),gn.forEach(Li=>Xi(Li,Zn))}),l.push(()=>{Jt.forEach((gn,Wn)=>{const Zn=ln.get(Wn);gn.forEach(Li=>Jo(Li,Zn))}),Ai.forEach((gn,Wn)=>{const Zn=ur.get(Wn);gn.forEach(Li=>Jo(Li,Zn))}),di.forEach(gn=>{this.processLeaveNode(gn)})});const Qs=[],Xr=[];for(let gn=this._namespaceList.length-1;gn>=0;gn--)this._namespaceList[gn].drainQueuedTransitions(n).forEach(Zn=>{const Li=Zn.player,go=Zn.element;if(Qs.push(Li),this.collectedEnterElements.length){const Lr=go[sr];if(Lr&&Lr.setForMove){if(Lr.previousTriggersValues&&Lr.previousTriggersValues.has(Zn.triggerName)){const Tl=Lr.previousTriggersValues.get(Zn.triggerName),ls=this.statesByElement.get(Zn.element);if(ls&&ls.has(Zn.triggerName)){const Cu=ls.get(Zn.triggerName);Cu.value=Tl,ls.set(Zn.triggerName,Cu)}}return void Li.destroy()}}const Xs=!Ze||!this.driver.containsElement(Ze,go),as=ur.get(go),el=ln.get(go),Tr=this._buildInstruction(Zn,o,el,as,Xs);if(Tr.errors&&Tr.errors.length)return void Xr.push(Tr);if(Xs)return Li.onStart(()=>At(go,Tr.fromStyles)),Li.onDestroy(()=>Un(go,Tr.toStyles)),void p.push(Li);if(Zn.isFallbackTransition)return Li.onStart(()=>At(go,Tr.fromStyles)),Li.onDestroy(()=>Un(go,Tr.toStyles)),void p.push(Li);const Dg=[];Tr.timelines.forEach(Lr=>{Lr.stretchStartingKeyframe=!0,this.disabledNodes.has(Lr.element)||Dg.push(Lr)}),Tr.timelines=Dg,o.append(go,Tr.timelines),k.push({instruction:Tr,player:Li,element:go}),Tr.queriedElements.forEach(Lr=>j(z,Lr,[]).push(Li)),Tr.preStyleProps.forEach((Lr,Tl)=>{if(Lr.size){let ls=fe.get(Tl);ls||fe.set(Tl,ls=new Set),Lr.forEach((Cu,wu)=>ls.add(wu))}}),Tr.postStyleProps.forEach((Lr,Tl)=>{let ls=xe.get(Tl);ls||xe.set(Tl,ls=new Set),Lr.forEach((Cu,wu)=>ls.add(wu))})});if(Xr.length){const gn=[];Xr.forEach(Wn=>{gn.push(function Qe(u,l){return new c.wOt(3505,!1)}())}),Qs.forEach(Wn=>Wn.destroy()),this.reportError(gn)}const _o=new Map,ss=new Map;k.forEach(gn=>{const Wn=gn.element;o.has(Wn)&&(ss.set(Wn,Wn),this._beforeAnimationBuild(gn.player.namespaceId,gn.instruction,_o))}),p.forEach(gn=>{const Wn=gn.element;this._getPreviousPlayers(Wn,!1,gn.namespaceId,gn.triggerName,null).forEach(Li=>{j(_o,Wn,[]).push(Li),Li.destroy()})});const Ja=di.filter(gn=>fs(gn,fe,xe)),pd=new Map;Fo(pd,this.driver,dr,xe,N.kp).forEach(gn=>{fs(gn,fe,xe)&&Ja.push(gn)});const Eo=new Map;Jt.forEach((gn,Wn)=>{Fo(Eo,this.driver,new Set(gn),fe,N.FX)}),Ja.forEach(gn=>{const Wn=pd.get(gn),Zn=Eo.get(gn);pd.set(gn,new Map([...Wn?.entries()??[],...Zn?.entries()??[]]))});const bu=[],Ig=[],v0={};k.forEach(gn=>{const{element:Wn,player:Zn,instruction:Li}=gn;if(o.has(Wn)){if($e.has(Wn))return Zn.onDestroy(()=>Un(Wn,Li.toStyles)),Zn.disabled=!0,Zn.overrideTotalTime(Li.totalTime),void p.push(Zn);let go=v0;if(ss.size>1){let as=Wn;const el=[];for(;as=as.parentNode;){const Tr=ss.get(as);if(Tr){go=Tr;break}el.push(as)}el.forEach(Tr=>ss.set(Tr,go))}const Xs=this._buildAnimation(Zn.namespaceId,Li,_o,y,Eo,pd);if(Zn.setRealPlayer(Xs),go===v0)bu.push(Zn);else{const as=this.playersByElement.get(go);as&&as.length&&(Zn.parentPlayer=Ne(as)),p.push(Zn)}}else At(Wn,Li.fromStyles),Zn.onDestroy(()=>Un(Wn,Li.toStyles)),Ig.push(Zn),$e.has(Wn)&&p.push(Zn)}),Ig.forEach(gn=>{const Wn=y.get(gn.element);if(Wn&&Wn.length){const Zn=Ne(Wn);gn.setRealPlayer(Zn)}}),p.forEach(gn=>{gn.parentPlayer?gn.syncPlayerEvents(gn.parentPlayer):gn.destroy()});for(let gn=0;gn<di.length;gn++){const Wn=di[gn],Zn=Wn[sr];if(Jo(Wn,Mn),Zn&&Zn.hasAnimation)continue;let Li=[];if(z.size){let Xs=z.get(Wn);Xs&&Xs.length&&Li.push(...Xs);let as=this.driver.query(Wn,gt,!0);for(let el=0;el<as.length;el++){let Tr=z.get(as[el]);Tr&&Tr.length&&Li.push(...Tr)}}const go=Li.filter(Xs=>!Xs.destroyed);go.length?Rs(this,Wn,go):this.processLeaveNode(Wn)}return di.length=0,bu.forEach(gn=>{this.players.push(gn),gn.onDone(()=>{gn.destroy();const Wn=this.players.indexOf(gn);this.players.splice(Wn,1)}),gn.play()}),bu}afterFlush(l){this._flushFns.push(l)}afterFlushAnimationsDone(l){this._whenQuietFns.push(l)}_getPreviousPlayers(l,n,o,p,y){let k=[];if(n){const z=this.playersByQueriedElement.get(l);z&&(k=z)}else{const z=this.playersByElement.get(l);if(z){const fe=!y||y==ds;z.forEach(xe=>{xe.queued||!fe&&xe.triggerName!=p||k.push(xe)})}}return(o||p)&&(k=k.filter(z=>!(o&&o!=z.namespaceId||p&&p!=z.triggerName))),k}_beforeAnimationBuild(l,n,o){const y=n.element,k=n.isRemovalTransition?void 0:l,z=n.isRemovalTransition?void 0:n.triggerName;for(const fe of n.timelines){const xe=fe.element,$e=xe!==y,Ze=j(o,xe,[]);this._getPreviousPlayers(xe,$e,k,z,n.toState).forEach(Jt=>{const ln=Jt.getRealPlayer();ln.beforeDestroy&&ln.beforeDestroy(),Jt.destroy(),Ze.push(Jt)})}At(y,n.fromStyles)}_buildAnimation(l,n,o,p,y,k){const z=n.triggerName,fe=n.element,xe=[],$e=new Set,Ze=new Set,zt=n.timelines.map(ln=>{const An=ln.element;$e.add(An);const di=An[sr];if(di&&di.removedBeforeQueried)return new N.sf(ln.duration,ln.delay);const nr=An!==fe,dr=function Fa(u){const l=[];return hs(u,l),l}((o.get(An)||No).map(_o=>_o.getRealPlayer())).filter(_o=>!!_o.element&&_o.element===An),ur=y.get(An),Ai=k.get(An),Qs=lt(this._normalizer,ln.keyframes,ur,Ai),Xr=this._buildPlayer(ln,Qs,dr);if(ln.subTimeline&&p&&Ze.add(An),nr){const _o=new Yo(l,z,An);_o.setRealPlayer(Xr),xe.push(_o)}return Xr});xe.forEach(ln=>{j(this.playersByQueriedElement,ln.element,[]).push(ln),ln.onDone(()=>function Wi(u,l,n){let o=u.get(l);if(o){if(o.length){const p=o.indexOf(n);o.splice(p,1)}0==o.length&&u.delete(l)}return o}(this.playersByQueriedElement,ln.element,ln))}),$e.forEach(ln=>Xi(ln,zi));const Jt=Ne(zt);return Jt.onDestroy(()=>{$e.forEach(ln=>Jo(ln,zi)),Un(fe,n.toStyles)}),Ze.forEach(ln=>{j(p,ln,[]).push(Jt)}),Jt}_buildPlayer(l,n,o){return n.length>0?this.driver.animate(l.element,n,l.duration,l.delay,l.easing,o):new N.sf(l.duration,l.delay)}}class Yo{constructor(l,n,o){this.namespaceId=l,this.triggerName=n,this.element=o,this._player=new N.sf,this._containsRealPlayer=!1,this._queuedCallbacks=new Map,this.destroyed=!1,this.parentPlayer=null,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(l){this._containsRealPlayer||(this._player=l,this._queuedCallbacks.forEach((n,o)=>{n.forEach(p=>Ot(l,o,void 0,p))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(l.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(l){this.totalTime=l}syncPlayerEvents(l){const n=this._player;n.triggerCallback&&l.onStart(()=>n.triggerCallback("start")),l.onDone(()=>this.finish()),l.onDestroy(()=>this.destroy())}_queueEvent(l,n){j(this._queuedCallbacks,l,[]).push(n)}onDone(l){this.queued&&this._queueEvent("done",l),this._player.onDone(l)}onStart(l){this.queued&&this._queueEvent("start",l),this._player.onStart(l)}onDestroy(l){this.queued&&this._queueEvent("destroy",l),this._player.onDestroy(l)}init(){this._player.init()}hasStarted(){return!this.queued&&this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(l){this.queued||this._player.setPosition(l)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(l){const n=this._player;n.triggerCallback&&n.triggerCallback(l)}}function Lo(u){return u&&1===u.nodeType}function Ur(u,l){const n=u.style.display;return u.style.display=l??"none",n}function Fo(u,l,n,o,p){const y=[];n.forEach(fe=>y.push(Ur(fe)));const k=[];o.forEach((fe,xe)=>{const $e=new Map;fe.forEach(Ze=>{const zt=l.computeStyle(xe,Ze,p);$e.set(Ze,zt),(!zt||0==zt.length)&&(xe[sr]=Ms,k.push(xe))}),u.set(xe,$e)});let z=0;return n.forEach(fe=>Ur(fe,y[z++])),k}function Io(u,l){const n=new Map;if(u.forEach(z=>n.set(z,[])),0==l.length)return n;const p=new Set(l),y=new Map;function k(z){if(!z)return 1;let fe=y.get(z);if(fe)return fe;const xe=z.parentNode;return fe=n.has(xe)?xe:p.has(xe)?1:k(xe),y.set(z,fe),fe}return l.forEach(z=>{const fe=k(z);1!==fe&&n.get(fe).push(z)}),n}function Xi(u,l){u.classList?.add(l)}function Jo(u,l){u.classList?.remove(l)}function Rs(u,l,n){Ne(n).onDone(()=>u.processLeaveNode(l))}function hs(u,l){for(let n=0;n<u.length;n++){const o=u[n];o instanceof N.ui?hs(o.players,l):l.push(o)}}function fs(u,l,n){const o=n.get(u);if(!o)return!1;let p=l.get(u);return p?o.forEach(y=>p.add(y)):l.set(u,o),n.delete(u),!0}class pr{constructor(l,n,o,p){this._driver=n,this._normalizer=o,this._triggerCache={},this.onRemovalComplete=(y,k)=>{},this._transitionEngine=new va(l.body,n,o,p),this._timelineEngine=new Ar(l.body,n,o),this._transitionEngine.onRemovalComplete=(y,k)=>this.onRemovalComplete(y,k)}registerTrigger(l,n,o,p,y){const k=l+"-"+p;let z=this._triggerCache[k];if(!z){const fe=[],$e=yt(this._driver,y,fe,[]);if(fe.length)throw function it(u,l){return new c.wOt(3404,!1)}();z=function $i(u,l,n){return new Sr(u,l,n)}(p,$e,this._normalizer),this._triggerCache[k]=z}this._transitionEngine.registerTrigger(n,p,z)}register(l,n){this._transitionEngine.register(l,n)}destroy(l,n){this._transitionEngine.destroy(l,n)}onInsert(l,n,o,p){this._transitionEngine.insertNode(l,n,o,p)}onRemove(l,n,o){this._transitionEngine.removeNode(l,n,o)}disableAnimations(l,n){this._transitionEngine.markElementAsDisabled(l,n)}process(l,n,o,p){if("@"==o.charAt(0)){const[y,k]=ce(o);this._timelineEngine.command(y,n,k,p)}else this._transitionEngine.trigger(l,n,o,p)}listen(l,n,o,p,y){if("@"==o.charAt(0)){const[k,z]=ce(o);return this._timelineEngine.listen(k,n,z,y)}return this._transitionEngine.listen(l,n,o,p,y)}flush(l=-1){this._transitionEngine.flush(l)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(l){this._transitionEngine.afterFlushAnimationsDone(l)}}class Os{static#e=this.initialStylesByElement=new WeakMap;constructor(l,n,o){this._element=l,this._startStyles=n,this._endStyles=o,this._state=0;let p=Os.initialStylesByElement.get(l);p||Os.initialStylesByElement.set(l,p=new Map),this._initialStyles=p}start(){this._state<1&&(this._startStyles&&Un(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Un(this._element,this._initialStyles),this._endStyles&&(Un(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(Os.initialStylesByElement.delete(this._element),this._startStyles&&(At(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(At(this._element,this._endStyles),this._endStyles=null),Un(this._element,this._initialStyles),this._state=3)}}function _r(u){let l=null;return u.forEach((n,o)=>{(function ci(u){return"display"===u||"position"===u})(o)&&(l=l||new Map,l.set(o,n))}),l}class mo{constructor(l,n,o,p){this.element=l,this.keyframes=n,this.options=o,this._specialStyles=p,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this._originalOnDoneFns=[],this._originalOnStartFns=[],this.time=0,this.parentPlayer=null,this.currentSnapshot=new Map,this._duration=o.duration,this._delay=o.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(l=>l()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;const l=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,l,this.options),this._finalKeyframe=l.length?l[l.length-1]:new Map;const n=()=>this._onFinish();this.domPlayer.addEventListener("finish",n),this.onDestroy(()=>{this.domPlayer.removeEventListener("finish",n)})}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_convertKeyframesToObject(l){const n=[];return l.forEach(o=>{n.push(Object.fromEntries(o))}),n}_triggerWebAnimation(l,n,o){return l.animate(this._convertKeyframesToObject(n),o)}onStart(l){this._originalOnStartFns.push(l),this._onStartFns.push(l)}onDone(l){this._originalOnDoneFns.push(l),this._onDoneFns.push(l)}onDestroy(l){this._onDestroyFns.push(l)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(l=>l()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(l=>l()),this._onDestroyFns=[])}setPosition(l){void 0===this.domPlayer&&this.init(),this.domPlayer.currentTime=l*this.time}getPosition(){return+(this.domPlayer.currentTime??0)/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){const l=new Map;this.hasStarted()&&this._finalKeyframe.forEach((o,p)=>{"offset"!==p&&l.set(p,this._finished?o:Wt(this.element,p))}),this.currentSnapshot=l}triggerCallback(l){const n="start"===l?this._onStartFns:this._onDoneFns;n.forEach(o=>o()),n.length=0}}class $a{validateStyleProperty(l){return!0}validateAnimatableStyleProperty(l){return!0}matchesElement(l,n){return!1}containsElement(l,n){return tn(l,n)}getParentElement(l){return Ge(l)}query(l,n,o){return kn(l,n,o)}computeStyle(l,n,o){return Wt(l,n)}animate(l,n,o,p,y,k=[]){const fe={duration:o,delay:p,fill:0==p?"both":"forwards"};y&&(fe.easing=y);const xe=new Map,$e=k.filter(Jt=>Jt instanceof mo);(function Fe(u,l){return 0===u||0===l})(o,p)&&$e.forEach(Jt=>{Jt.currentSnapshot.forEach((ln,An)=>xe.set(An,ln))});let Ze=function un(u){return u.length?u[0]instanceof Map?u:u.map(l=>new Map(Object.entries(l))):[]}(n).map(Jt=>new Map(Jt));Ze=function dt(u,l,n){if(n.size&&l.length){let o=l[0],p=[];if(n.forEach((y,k)=>{o.has(k)||p.push(k),o.set(k,y)}),p.length)for(let y=1;y<l.length;y++){let k=l[y];p.forEach(z=>k.set(z,Wt(u,z)))}}return l}(l,Ze,xe);const zt=function Dl(u,l){let n=null,o=null;return Array.isArray(l)&&l.length?(n=_r(l[0]),l.length>1&&(o=_r(l[l.length-1]))):l instanceof Map&&(n=_r(l)),n||o?new Os(u,n,o):null}(l,Ze);return new mo(l,Ze,fe,zt)}}const $o="@.disabled";class Uo{constructor(l,n,o,p){this.namespaceId=l,this.delegate=n,this.engine=o,this._onDestroy=p,this.\u0275type=0}get data(){return this.delegate.data}destroyNode(l){this.delegate.destroyNode?.(l)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(l,n){return this.delegate.createElement(l,n)}createComment(l){return this.delegate.createComment(l)}createText(l){return this.delegate.createText(l)}appendChild(l,n){this.delegate.appendChild(l,n),this.engine.onInsert(this.namespaceId,n,l,!1)}insertBefore(l,n,o,p=!0){this.delegate.insertBefore(l,n,o),this.engine.onInsert(this.namespaceId,n,l,p)}removeChild(l,n,o){this.engine.onRemove(this.namespaceId,n,this.delegate)}selectRootElement(l,n){return this.delegate.selectRootElement(l,n)}parentNode(l){return this.delegate.parentNode(l)}nextSibling(l){return this.delegate.nextSibling(l)}setAttribute(l,n,o,p){this.delegate.setAttribute(l,n,o,p)}removeAttribute(l,n,o){this.delegate.removeAttribute(l,n,o)}addClass(l,n){this.delegate.addClass(l,n)}removeClass(l,n){this.delegate.removeClass(l,n)}setStyle(l,n,o,p){this.delegate.setStyle(l,n,o,p)}removeStyle(l,n,o){this.delegate.removeStyle(l,n,o)}setProperty(l,n,o){"@"==n.charAt(0)&&n==$o?this.disableAnimations(l,!!o):this.delegate.setProperty(l,n,o)}setValue(l,n){this.delegate.setValue(l,n)}listen(l,n,o){return this.delegate.listen(l,n,o)}disableAnimations(l,n){this.engine.disableAnimations(l,n)}}class Ps extends Uo{constructor(l,n,o,p,y){super(n,o,p,y),this.factory=l,this.namespaceId=n}setProperty(l,n,o){"@"==n.charAt(0)?"."==n.charAt(1)&&n==$o?this.disableAnimations(l,o=void 0===o||!!o):this.engine.process(this.namespaceId,l,n.slice(1),o):this.delegate.setProperty(l,n,o)}listen(l,n,o){if("@"==n.charAt(0)){const p=function eo(u){switch(u){case"body":return document.body;case"document":return document;case"window":return window;default:return u}}(l);let y=n.slice(1),k="";return"@"!=y.charAt(0)&&([y,k]=function Ee(u){const l=u.indexOf(".");return[u.substring(0,l),u.slice(l+1)]}(y)),this.engine.listen(this.namespaceId,p,y,k,z=>{this.factory.scheduleListenerCallback(z._data||-1,o,z)})}return this.delegate.listen(l,n,o)}}class Se{constructor(l,n,o){this.delegate=l,this.engine=n,this._zone=o,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,n.onRemovalComplete=(p,y)=>{const k=y?.parentNode(p);k&&y.removeChild(k,p)}}createRenderer(l,n){const p=this.delegate.createRenderer(l,n);if(!l||!n?.data?.animation){const xe=this._rendererCache;let $e=xe.get(p);return $e||($e=new Uo("",p,this.engine,()=>xe.delete(p)),xe.set(p,$e)),$e}const y=n.id,k=n.id+"-"+this._currentId;this._currentId++,this.engine.register(k,l);const z=xe=>{Array.isArray(xe)?xe.forEach(z):this.engine.registerTrigger(y,k,l,xe.name,xe)};return n.data.animation.forEach(z),new Ps(this,k,p,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(l,n,o){if(l>=0&&l<this._microtaskId)return void this._zone.run(()=>n(o));const p=this._animationCallbacksBuffer;0==p.length&&queueMicrotask(()=>{this._zone.run(()=>{p.forEach(y=>{const[k,z]=y;k(z)}),this._animationCallbacksBuffer=[]})}),p.push([n,o])}end(){this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}var Q=d(177);const Yn=[{provide:fn,useFactory:function ut(){return new Qt}},{provide:pr,useClass:(()=>{class u extends pr{constructor(n,o,p){super(n,o,p,(0,c.WQX)(c.An2,{optional:!0}))}ngOnDestroy(){this.flush()}static#e=this.\u0275fac=function(o){return new(o||u)(c.KVO(Q.qQ),c.KVO(Ei),c.KVO(fn))};static#t=this.\u0275prov=c.jDH({token:u,factory:u.\u0275fac})}return u})()},{provide:c._9s,useFactory:function Tn(u,l,n){return new Se(u,l,n)},deps:[s.B7,pr,c.SKi]}],to=[{provide:Ei,useFactory:()=>new $a},{provide:c.bc$,useValue:"BrowserAnimations"},...Yn],vo=[{provide:Ei,useClass:Rn},{provide:c.bc$,useValue:"NoopAnimations"},...Yn];var Ns=d(4523),Ti=d(8173),ya=d(5189),il=d(7306),ta=d(7554);class Ua{static loggerCallback(l,n){switch(l){case Ti.$.Error:return void console.error(n);case Ti.$.Info:return void console.info(n);case Ti.$.Verbose:return void console.debug(n);case Ti.$.Warning:return void console.warn(n);default:return void console.log(n)}}constructor(l){let n;this.browserEnvironment=typeof window<"u",this.config=(0,ya.tD)(l,this.browserEnvironment);try{n=window[ta.Al.SessionStorage]}catch{}const o=n?.getItem(ta.L$),p=n?.getItem(ta.P3)?.toLowerCase(),y="true"===p||"false"!==p&&void 0,k={...this.config.system.loggerOptions},z=o&&Object.keys(Ti.$).includes(o)?Ti.$[o]:void 0;z&&(k.loggerCallback=Ua.loggerCallback,k.logLevel=z),void 0!==y&&(k.piiLoggingEnabled=y),this.logger=new Ti.V(k,il.U,il.r),this.available=!1}getConfig(){return this.config}getLogger(){return this.logger}isAvailable(){return this.available}isBrowserEnvironment(){return this.browserEnvironment}}let kl=(()=>{class u extends Ua{getModuleName(){return u.MODULE_NAME}getId(){return u.ID}initialize(){var n=this;return(0,Ns.A)(function*(){return n.available=typeof window<"u",n.available})()}}return u.MODULE_NAME="",u.ID="StandardOperatingContext",u})();function ba(){return(ba=(0,Ns.A)(function*(u){const l=new kl(u);return yield l.initialize(),(yield Promise.resolve().then(d.bind(d,1190))).StandardController.createController(l)})).apply(this,arguments)}var Ml=d(1190);class gs{static createPublicClientApplication(l){return(0,Ns.A)(function*(){const n=yield function ps(u){return ba.apply(this,arguments)}(l);return new gs(l,n)})()}constructor(l,n){if(n)this.controller=n;else{const o=new kl(l);this.controller=new Ml.StandardController(o)}}initialize(){var l=this;return(0,Ns.A)(function*(){return l.controller.initialize()})()}acquireTokenPopup(l){var n=this;return(0,Ns.A)(function*(){return n.controller.acquireTokenPopup(l)})()}acquireTokenRedirect(l){return this.controller.acquireTokenRedirect(l)}acquireTokenSilent(l){return this.controller.acquireTokenSilent(l)}acquireTokenByCode(l){return this.controller.acquireTokenByCode(l)}addEventCallback(l){return this.controller.addEventCallback(l)}removeEventCallback(l){return this.controller.removeEventCallback(l)}addPerformanceCallback(l){return this.controller.addPerformanceCallback(l)}removePerformanceCallback(l){return this.controller.removePerformanceCallback(l)}enableAccountStorageEvents(){this.controller.enableAccountStorageEvents()}disableAccountStorageEvents(){this.controller.disableAccountStorageEvents()}getAccount(l){return this.controller.getAccount(l)}getAccountByHomeId(l){return this.controller.getAccountByHomeId(l)}getAccountByLocalId(l){return this.controller.getAccountByLocalId(l)}getAccountByUsername(l){return this.controller.getAccountByUsername(l)}getAllAccounts(l){return this.controller.getAllAccounts(l)}handleRedirectPromise(l){return this.controller.handleRedirectPromise(l)}loginPopup(l){return this.controller.loginPopup(l)}loginRedirect(l){return this.controller.loginRedirect(l)}logout(l){return this.controller.logout(l)}logoutRedirect(l){return this.controller.logoutRedirect(l)}logoutPopup(l){return this.controller.logoutPopup(l)}ssoSilent(l){return this.controller.ssoSilent(l)}getTokenCache(){return this.controller.getTokenCache()}getLogger(){return this.controller.getLogger()}setLogger(l){this.controller.setLogger(l)}setActiveAccount(l){this.controller.setActiveAccount(l)}getActiveAccount(){return this.controller.getActiveAccount()}initializeWrapperLibrary(l,n){return this.controller.initializeWrapperLibrary(l,n)}setNavigationClient(l){this.controller.setNavigationClient(l)}getConfiguration(){return this.controller.getConfiguration()}hydrateCache(l,n){var o=this;return(0,Ns.A)(function*(){return o.controller.hydrateCache(l,n)})()}clearCache(l){return this.controller.clearCache(l)}}const ii=new gs({auth:{clientId:I.MSAL.CLIENT_ID,authority:I.MSAL.AUTHORITY,redirectUri:I.MSAL.REDIRECT_URI,postLogoutRedirectUri:I.MSAL.POST_LOGOUT_URI,scopes:I.MSAL.SCOPES_ARRAY},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1}});let gr=(()=>{class u{constructor(n,o){this.msalGuardConfig=n,this.authService=o}checkAndSetActiveAccount(){if(!this.authService.instance.getActiveAccount()&&this.authService.instance.getAllAccounts().length>0){const o=this.authService.instance.getAllAccounts();this.authService.instance.setActiveAccount(o[0])}}loginRedirect(){this.msalGuardConfig.authRequest?this.authService.loginRedirect({...this.msalGuardConfig.authRequest}):this.authService.loginRedirect()}logout(){this.authService.instance.logoutRedirect()}static#e=this.\u0275fac=function(o){return new(o||u)(c.KVO(T.LR),c.KVO(T.dl))};static#t=this.\u0275prov=c.jDH({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})();var Pr=d(2806),Rl=d(5558),Ha=d(9437),Ca=d(8810),Bo=d(1413);const wa=["toast-component",""];function ms(u,l){if(1&u){const n=c.RV6();c.j41(0,"button",5),c.bIt("click",function(){c.eBV(n);const p=c.XpG();return c.Njj(p.remove())}),c.j41(1,"span",6),c.EFF(2,"\xd7"),c.k0s()()}}function Va(u,l){if(1&u&&(c.qex(0),c.EFF(1),c.bVm()),2&u){const n=c.XpG(2);c.R7$(),c.SpI("[",n.duplicatesCount+1,"]")}}function _a(u,l){if(1&u&&(c.j41(0,"div"),c.EFF(1),c.DNE(2,Va,2,1,"ng-container",4),c.k0s()),2&u){const n=c.XpG();c.HbH(n.options.titleClass),c.BMQ("aria-label",n.title),c.R7$(),c.SpI(" ",n.title," "),c.R7$(),c.Y8G("ngIf",n.duplicatesCount)}}function ol(u,l){if(1&u&&c.nrm(0,"div",7),2&u){const n=c.XpG();c.HbH(n.options.messageClass),c.Y8G("innerHTML",n.message,c.npT)}}function sl(u,l){if(1&u&&(c.j41(0,"div",8),c.EFF(1),c.k0s()),2&u){const n=c.XpG();c.HbH(n.options.messageClass),c.BMQ("aria-label",n.message),c.R7$(),c.SpI(" ",n.message," ")}}function al(u,l){if(1&u&&(c.j41(0,"div"),c.nrm(1,"div",9),c.k0s()),2&u){const n=c.XpG();c.R7$(),c.xc7("width",n.width+"%")}}class Ga{_attachedHost;component;viewContainerRef;injector;constructor(l,n){this.component=l,this.injector=n}attach(l,n){return this._attachedHost=l,l.attach(this,n)}detach(){const l=this._attachedHost;if(l)return this._attachedHost=void 0,l.detach()}get isAttached(){return null!=this._attachedHost}setAttachedHost(l){this._attachedHost=l}}class Ea{_attachedPortal;_disposeFn;attach(l,n){return this._attachedPortal=l,this.attachComponentPortal(l,n)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(l){this._disposeFn=l}}class Jl{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new Bo.B;_activate=new Bo.B;_manualClose=new Bo.B;_resetTimeout=new Bo.B;_countDuplicate=new Bo.B;constructor(l){this._overlayRef=l}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(l,n){l&&this._resetTimeout.next(),n&&this._countDuplicate.next(++this.duplicatesCount)}}class Ta{toastId;config;message;title;toastType;toastRef;_onTap=new Bo.B;_onAction=new Bo.B;constructor(l,n,o,p,y,k){this.toastId=l,this.config=n,this.message=o,this.title=p,this.toastType=y,this.toastRef=k,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(l){this._onAction.next(l)}onAction(){return this._onAction.asObservable()}}const Wr=new c.nKC("ToastConfig");class ia extends Ea{_hostDomElement;_componentFactoryResolver;_appRef;constructor(l,n,o){super(),this._hostDomElement=l,this._componentFactoryResolver=n,this._appRef=o}attachComponentPortal(l,n){const o=this._componentFactoryResolver.resolveComponentFactory(l.component);let p;return p=o.create(l.injector),this._appRef.attachView(p.hostView),this.setDisposeFn(()=>{this._appRef.detachView(p.hostView),p.destroy()}),n?this._hostDomElement.insertBefore(this._getComponentRootNode(p),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(p)),p}_getComponentRootNode(l){return l.hostView.rootNodes[0]}}let Pl=(()=>{class u{_document=(0,c.WQX)(Q.qQ);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){const n=this._document.createElement("div");n.classList.add("overlay-container"),n.setAttribute("aria-live","polite"),this._document.body.appendChild(n),this._containerElement=n}static \u0275fac=function(o){return new(o||u)};static \u0275prov=c.jDH({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})();class es{_portalHost;constructor(l){this._portalHost=l}attach(l,n=!0){return this._portalHost.attach(l,n)}detach(){return this._portalHost.detach()}}let ra=(()=>{class u{_overlayContainer=(0,c.WQX)(Pl);_componentFactoryResolver=(0,c.WQX)(c.OM3);_appRef=(0,c.WQX)(c.o8S);_document=(0,c.WQX)(Q.qQ);_paneElements=new Map;create(n,o){return this._createOverlayRef(this.getPaneElement(n,o))}getPaneElement(n="",o){return this._paneElements.get(o)||this._paneElements.set(o,{}),this._paneElements.get(o)[n]||(this._paneElements.get(o)[n]=this._createPaneElement(n,o)),this._paneElements.get(o)[n]}_createPaneElement(n,o){const p=this._document.createElement("div");return p.id="toast-container",p.classList.add(n),p.classList.add("toast-container"),o?o.getContainerElement().appendChild(p):this._overlayContainer.getContainerElement().appendChild(p),p}_createPortalHost(n){return new ia(n,this._componentFactoryResolver,this._appRef)}_createOverlayRef(n){return new es(this._createPortalHost(n))}static \u0275fac=function(o){return new(o||u)};static \u0275prov=c.jDH({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})(),oa=(()=>{class u{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(n,o,p,y,k){this.overlay=o,this._injector=p,this.sanitizer=y,this.ngZone=k,this.toastrConfig={...n.default,...n.config},n.config.iconClasses&&(this.toastrConfig.iconClasses={...n.default.iconClasses,...n.config.iconClasses})}show(n,o,p={},y=""){return this._preBuildNotification(y,n,o,this.applyConfig(p))}success(n,o,p={}){return this._preBuildNotification(this.toastrConfig.iconClasses.success||"",n,o,this.applyConfig(p))}error(n,o,p={}){return this._preBuildNotification(this.toastrConfig.iconClasses.error||"",n,o,this.applyConfig(p))}info(n,o,p={}){return this._preBuildNotification(this.toastrConfig.iconClasses.info||"",n,o,this.applyConfig(p))}warning(n,o,p={}){return this._preBuildNotification(this.toastrConfig.iconClasses.warning||"",n,o,this.applyConfig(p))}clear(n){for(const o of this.toasts)if(void 0!==n){if(o.toastId===n)return void o.toastRef.manualClose()}else o.toastRef.manualClose()}remove(n){const o=this._findToast(n);if(!o||(o.activeToast.toastRef.close(),this.toasts.splice(o.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){const p=this.toasts[this.currentlyActive].toastRef;p.isInactive()||(this.currentlyActive=this.currentlyActive+1,p.activate())}return!0}findDuplicate(n="",o="",p,y){const{includeTitleDuplicates:k}=this.toastrConfig;for(const z of this.toasts)if((!k||k&&z.title===n)&&z.message===o)return z.toastRef.onDuplicate(p,y),z;return null}applyConfig(n={}){return{...this.toastrConfig,...n}}_findToast(n){for(let o=0;o<this.toasts.length;o++)if(this.toasts[o].toastId===n)return{index:o,activeToast:this.toasts[o]};return null}_preBuildNotification(n,o,p,y){return y.onActivateTick?this.ngZone.run(()=>this._buildNotification(n,o,p,y)):this._buildNotification(n,o,p,y)}_buildNotification(n,o,p,y){if(!y.toastComponent)throw new Error("toastComponent required");const k=this.findDuplicate(p,o,this.toastrConfig.resetTimeoutOnDuplicate&&y.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&p||o)&&this.toastrConfig.preventDuplicates&&null!==k)return k;this.previousToastMessage=o;let z=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(z=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));const fe=this.overlay.create(y.positionClass,this.overlayContainer);this.index=this.index+1;let xe=o;o&&y.enableHtml&&(xe=this.sanitizer.sanitize(c.WPN.HTML,o));const $e=new Jl(fe),Ze=new Ta(this.index,y,xe,p,n,$e),Jt=c.zZn.create({providers:[{provide:Ta,useValue:Ze}],parent:this._injector}),ln=new Ga(y.toastComponent,Jt),An=fe.attach(ln,y.newestOnTop);$e.componentInstance=An.instance;const di={toastId:this.index,title:p||"",message:o||"",toastRef:$e,onShown:$e.afterActivate(),onHidden:$e.afterClosed(),onTap:Ze.onTap(),onAction:Ze.onAction(),portal:An};return z||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{di.toastRef.activate()})),this.toasts.push(di),di}static \u0275fac=function(o){return new(o||u)(c.KVO(Wr),c.KVO(ra),c.KVO(c.zZn),c.KVO(s.up),c.KVO(c.SKi))};static \u0275prov=c.jDH({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})();const xc={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing",toastComponent:(()=>{class u{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=-1;toastClasses="";state;get displayStyle(){if("inactive"===this.state.value)return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(n,o,p){this.toastrService=n,this.toastPackage=o,this.ngZone=p,this.message=o.message,this.title=o.title,this.options=o.config,this.originalTimeout=o.config.timeOut,this.toastClasses=`${o.toastType} ${o.config.toastClass}`,this.sub=o.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=o.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=o.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=o.toastRef.countDuplicate().subscribe(y=>{this.duplicatesCount=y}),this.state={value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}}}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state={...this.state,value:"active"},!0!==this.options.disableTimeOut&&"timeOut"!==this.options.disableTimeOut&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=(new Date).getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(0===this.width||100===this.width||!this.options.timeOut)return;const n=(new Date).getTime();this.width=(this.hideTime-n)/this.options.timeOut*100,"increasing"===this.options.progressAnimation&&(this.width=100-this.width),this.width<=0&&(this.width=0),this.width>=100&&(this.width=100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state={...this.state,value:"active"},this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=(new Date).getTime()+(this.options.timeOut||0),this.width=-1,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){"removed"!==this.state.value&&(clearTimeout(this.timeout),this.state={...this.state,value:"removed"},this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){"removed"!==this.state.value&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){"removed"!==this.state.value&&"extendedTimeOut"!==this.options.disableTimeOut&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width=0)}delayedHideToast(){!0===this.options.disableTimeOut||"extendedTimeOut"===this.options.disableTimeOut||0===this.options.extendedTimeOut||"removed"===this.state.value||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=(new Date).getTime()+(this.options.timeOut||0),this.width=-1,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(n,o){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(n),o)):this.timeout=setTimeout(()=>n(),o)}outsideInterval(n,o){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(n),o)):this.intervalId=setInterval(()=>n(),o)}runInsideAngular(n){this.ngZone?this.ngZone.run(()=>n()):n()}static \u0275fac=function(o){return new(o||u)(c.rXU(oa),c.rXU(Ta),c.rXU(c.SKi))};static \u0275cmp=c.VBU({type:u,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(o,p){1&o&&c.bIt("click",function(){return p.tapToast()})("mouseenter",function(){return p.stickAround()})("mouseleave",function(){return p.delayedHideToast()}),2&o&&(c.zvX("@flyInOut",p.state),c.HbH(p.toastClasses),c.xc7("display",p.displayStyle))},standalone:!0,features:[c.aNF],attrs:wa,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(o,p){1&o&&c.DNE(0,ms,3,0,"button",0)(1,_a,3,5,"div",1)(2,ol,1,3,"div",2)(3,sl,2,4,"div",3)(4,al,2,2,"div",4),2&o&&(c.Y8G("ngIf",p.options.closeButton),c.R7$(),c.Y8G("ngIf",p.title),c.R7$(),c.Y8G("ngIf",p.message&&p.options.enableHtml),c.R7$(),c.Y8G("ngIf",p.message&&!p.options.enableHtml),c.R7$(),c.Y8G("ngIf",p.options.progressBar))},dependencies:[Q.bT],encapsulation:2,data:{animation:[(0,N.hZ)("flyInOut",[(0,N.wk)("inactive",(0,N.iF)({opacity:0})),(0,N.wk)("active",(0,N.iF)({opacity:1})),(0,N.wk)("removed",(0,N.iF)({opacity:0})),(0,N.kY)("inactive => active",(0,N.i0)("{{ easeTime }}ms {{ easing }}")),(0,N.kY)("active => removed",(0,N.i0)("{{ easeTime }}ms {{ easing }}"))])]}})}return u})()};var De=d(5236);class ie{http;prefix;suffix;constructor(l,n="/assets/i18n/",o=".json"){this.http=l,this.prefix=n,this.suffix=o}getTranslation(l){return this.http.get(`${this.prefix}${l}${this.suffix}`)}}const et={providers:[(0,_.lh)(E),(0,c.oKB)(s.Bb,De.h.forRoot({loader:{provide:De.Wr,useFactory:function _e(u){return new ie(u,"./assets/i18n/",".json")},deps:[v.Qq]}}),M.Ov.forRoot()),function xl(){return[...vo]}(),(0,v.$R)((0,v.b$)([(u,l)=>{const n=(0,c.WQX)(T.dl),o=(0,c.WQX)(oa);return I.EXCLUDED_URLS.some(y=>u.url.startsWith(y))?l(u):(0,Pr.H)(n.instance.acquireTokenSilent({scopes:I.MSAL.SCOPES_ARRAY})).pipe((0,Rl.n)(y=>{const z=u.clone({url:`${I.BACKEND_API}${u.url}`,setHeaders:{Authorization:`${y.accessToken??""}`}});return l(z).pipe((0,Ha.W)(fe=>(o.error("Wyst\u0105pi\u0142 nieznany b\u0142\u0105d, spr\xf3buj p\xf3\u017aniej"),(0,Ca.$)(()=>new Error("An error occurred. Please try again later.")))))}))}])),{provide:v.a7,useClass:T.vC,multi:!0},{provide:T.r2,useFactory:function ar(){const u=new Map;return u.set(I.MSAL.REDIRECT_URI,I.MSAL.SCOPES_ARRAY),{interactionType:ta.X8.Redirect,protectedResourceMap:u}}},{provide:T.Cn,useValue:ii},{provide:T.LR,useFactory:function Br(){return{interactionType:ta.X8.Redirect,authRequest:{scopes:I.MSAL.SCOPES_ARRAY},loginFailedRoute:"/"}}},T.dl,T.VA,T.qb,function Zl(){return(0,c.ngT)("NgEagerAnimations"),[...to]}(),((u={})=>(0,c.EmA)([{provide:Wr,useValue:{default:xc,config:u}}]))()]};var Ft=d(5964),Zt=d(6977),wn=d(6697),wi=d(9417);function Ri(u,l){if(1&u){const n=c.RV6();c.j41(0,"button",2),c.bIt("click",function(){const p=c.eBV(n).$implicit,y=c.XpG();return c.Njj(y.translate.use(p))}),c.EFF(1),c.nI1(2,"uppercase"),c.k0s()}if(2&u){const n=l.$implicit,o=c.XpG();c.AVh("active",o.translate.currentLang===n),c.R7$(),c.SpI(" ",c.bMT(2,3,n)," ")}}let Ui=(()=>{class u{constructor(n){this.translate=n,n.addLangs(["pl","en"]),n.setDefaultLang("pl"),n.currentLang=n.getDefaultLang()}static#e=this.\u0275fac=function(o){return new(o||u)(c.rXU(De.c$))};static#t=this.\u0275cmp=c.VBU({type:u,selectors:[["app-language-selector"]],standalone:!0,features:[c.aNF],decls:3,vars:0,consts:[[1,"btn-group","mx-4"],[1,"btn",3,"active"],[1,"btn",3,"click"]],template:function(o,p){1&o&&(c.j41(0,"div",0),c.Z7z(1,Ri,3,5,"button",1,c.fX1),c.k0s()),2&o&&(c.R7$(),c.Dyx(p.translate.getLangs()))},dependencies:[De.h,wi.X1,Q.Pc],encapsulation:2})}return u})();var li=d(7052);const rr=()=>["/dashboard"],ri=()=>["/no-permissions"],lr=()=>["/home"];function Si(u,l){if(1&u){const n=c.RV6();c.j41(0,"button",9),c.bIt("click",function(){c.eBV(n);const p=c.XpG();return c.Njj(p.accountService.loginRedirect())}),c.EFF(1," Zaloguj "),c.k0s()}}function nn(u,l){1&u&&(c.j41(0,"button",10)(1,"span",13),c.EFF(2,"Toggle Dropdown"),c.k0s()())}function xn(u,l){if(1&u){const n=c.RV6();c.j41(0,"div",12)(1,"button",14),c.bIt("click",function(){const p=c.eBV(n).$implicit,y=c.XpG(2);return c.Njj(y.userService.updateCurrentRole(p))}),c.j41(2,"span"),c.EFF(3),c.k0s()()()}if(2&u){const n=l.$implicit,o=l.$index,p=c.XpG(2);c.R7$(),c.AVh("active",p.userService.currentRole===n),c.Mz_("id","btnradio",o,""),c.Mz_("name","btnradio",o,""),c.R7$(2),c.SpI(" ",n," ")}}function Oi(u,l){if(1&u&&(c.j41(0,"div",8),c.nrm(1,"mgt-login"),c.DNE(2,nn,3,0,"button",10),c.j41(3,"ul",11),c.Z7z(4,xn,4,7,"div",12,c.fX1),c.k0s()()),2&u){const n=c.XpG();c.R7$(2),c.vxM(2,n.userService.availableRoles?2:-1),c.R7$(2),c.Dyx(n.userService.availableRoles)}}let Dr=(()=>{class u{constructor(n,o,p){this.msalService=n,this.userService=o,this.accountService=p}static#e=this.\u0275fac=function(o){return new(o||u)(c.rXU(T.dl),c.rXU(li.DL),c.rXU(gr))};static#t=this.\u0275cmp=c.VBU({type:u,selectors:[["app-nav"]],standalone:!0,features:[c.aNF],decls:15,vars:8,consts:[[1,"d-flex","flex-row","flex-nowrap","justify-content-between","align-items-center","bg-white","h-100","px-5","py-3","z-2"],["tabindex","0",1,"navbar-brand",3,"routerLink"],["alt","certumLogo","src","./assets/images/certum-logo.svg",1,"img"],["routerLinkActive","active",1,"nav-link","p-3",3,"routerLink"],[1,"fs-4","bi","bi-house","fw-bold"],[1,"fs-6","ms-3","text-dark"],[1,"d-flex","flex-nowrap","justify-content-center","align-items-center"],["type","button",1,"btn","btn-lg","btn-primary","text-white","px-4"],[1,"btn-group"],["type","button",1,"btn","btn-lg","btn-primary","text-white","px-4",3,"click"],["aria-expanded","false","data-bs-toggle","dropdown","type","button",1,"btn","btn-lg","btn-secondary","dropdown-toggle","dropdown-toggle-split"],[1,"dropdown-menu","p-3","row"],[1,"btn-group","btn-group-md"],[1,"visually-hidden"],[1,"btn","my-1",3,"click","id","name"]],template:function(o,p){1&o&&(c.j41(0,"nav",0)(1,"a",1),c.nrm(2,"img",2),c.k0s(),c.j41(3,"a",3),c.nrm(4,"i",4),c.j41(5,"span",5),c.EFF(6,"No-permis"),c.k0s()(),c.j41(7,"a",3),c.nrm(8,"i",4),c.j41(9,"span",5),c.EFF(10,"Home"),c.k0s()(),c.j41(11,"div",6),c.nrm(12,"app-language-selector"),c.DNE(13,Si,2,0,"button",7)(14,Oi,6,1,"div",8),c.k0s()()),2&o&&(c.R7$(),c.Y8G("routerLink",c.lJ4(5,rr)),c.R7$(2),c.Y8G("routerLink",c.lJ4(6,ri)),c.R7$(4),c.Y8G("routerLink",c.lJ4(7,lr)),c.R7$(6),c.vxM(13,p.msalService.instance.getActiveAccount()?-1:13),c.R7$(),c.vxM(14,p.msalService.instance.getActiveAccount()?14:-1))},dependencies:[_.Wk,Ui,_.wQ],encapsulation:2})}return u})();function Bi(u){return Array.isArray(u)?u:[u]}var yo=d(4572),kc=d(8793),ul=d(1985),mr=d(5245),Fl=d(152),sa=d(6354),ws=d(9172);let Fs;try{Fs=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Fs=!1}let Mc=(()=>{class u{constructor(n){this._platformId=n,this.isBrowser=this._platformId?(0,Q.UE)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!Fs)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static#e=this.\u0275fac=function(o){return new(o||u)(c.KVO(c.Agw))};static#t=this.\u0275prov=c.jDH({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})(),xr=(()=>{class u{static#e=this.\u0275fac=function(o){return new(o||u)};static#t=this.\u0275mod=c.$C({type:u});static#n=this.\u0275inj=c.G2t({})}return u})();const Ni=new Set;let ei,Nr=(()=>{class u{constructor(n,o){this._platform=n,this._nonce=o,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):kr}matchMedia(n){return(this._platform.WEBKIT||this._platform.BLINK)&&function fo(u,l){if(!Ni.has(u))try{ei||(ei=document.createElement("style"),l&&ei.setAttribute("nonce",l),ei.setAttribute("type","text/css"),document.head.appendChild(ei)),ei.sheet&&(ei.sheet.insertRule(`@media ${u} {body{ }}`,0),Ni.add(u))}catch(n){console.error(n)}}(n,this._nonce),this._matchMedia(n)}static#e=this.\u0275fac=function(o){return new(o||u)(c.KVO(Mc),c.KVO(c.BIS,8))};static#t=this.\u0275prov=c.jDH({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})();function kr(u){return{matches:"all"===u||""===u,media:u,addListener:()=>{},removeListener:()=>{}}}let Ho=(()=>{class u{constructor(n,o){this._mediaMatcher=n,this._zone=o,this._queries=new Map,this._destroySubject=new Bo.B}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(n){return da(Bi(n)).some(p=>this._registerQuery(p).mql.matches)}observe(n){const p=da(Bi(n)).map(k=>this._registerQuery(k).observable);let y=(0,yo.z)(p);return y=(0,kc.x)(y.pipe((0,wn.s)(1)),y.pipe((0,mr.i)(1),(0,Fl.B)(0))),y.pipe((0,sa.T)(k=>{const z={matches:!1,breakpoints:{}};return k.forEach(({matches:fe,query:xe})=>{z.matches=z.matches||fe,z.breakpoints[xe]=fe}),z}))}_registerQuery(n){if(this._queries.has(n))return this._queries.get(n);const o=this._mediaMatcher.matchMedia(n),y={observable:new ul.c(k=>{const z=fe=>this._zone.run(()=>k.next(fe));return o.addListener(z),()=>{o.removeListener(z)}}).pipe((0,ws.Z)(o),(0,sa.T)(({matches:k})=>({query:n,matches:k})),(0,Zt.Q)(this._destroySubject)),mql:o};return this._queries.set(n,y),y}static#e=this.\u0275fac=function(o){return new(o||u)(c.KVO(Nr),c.KVO(c.SKi))};static#t=this.\u0275prov=c.jDH({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})();function da(u){return u.map(l=>l.split(",")).reduce((l,n)=>l.concat(n)).map(l=>l.trim())}const L=()=>["/dashboard"],D=()=>["/browse-forms"],H=()=>["/create-template"],we=()=>["/create-form"],Pe=()=>["/fill-form"],tt=()=>["/settings"];function Nt(u,l){1&u&&(c.j41(0,"span",3),c.EFF(1,"Dashboard"),c.k0s())}function kt(u,l){1&u&&(c.j41(0,"span",3),c.EFF(1,"Browse surveys"),c.k0s())}function yn(u,l){1&u&&(c.j41(0,"span",3),c.EFF(1,"Create template"),c.k0s())}function ti(u,l){1&u&&(c.j41(0,"span",3),c.EFF(1,"Create form"),c.k0s())}function oi(u,l){1&u&&(c.j41(0,"span",3),c.EFF(1,"Fill survey"),c.k0s())}function Mr(u,l){1&u&&(c.j41(0,"span",3),c.EFF(1,"Settings"),c.k0s())}let tc=(()=>{class u{constructor(n){this.observer=n,this.isVisible=!0,this.observer.observe("(max-width: 1400px)").subscribe(o=>{this.isVisible=!o.matches})}static#e=this.\u0275fac=function(o){return new(o||u)(c.rXU(Ho))};static#t=this.\u0275cmp=c.VBU({type:u,selectors:[["app-sidebar"]],standalone:!0,features:[c.aNF],decls:19,vars:18,consts:[["id","menu",1,"h-100","py-5","px-3","bg-white","nav-pills","fw-medium","text-nowrap"],["routerLinkActive","active",1,"nav-link","p-3",3,"routerLink"],[1,"fs-4","bi","bi-house","fw-bold"],[1,"fs-6","ms-3","text-dark"],[1,"fs-4","bi","bi-clipboard","fw-bold"],[1,"fs-4","bi","bi-pen","fw-bold"],[1,"fs-4","bi","bi-pencil-square","fw-bold"],[1,"fs-4","bi","bi-clipboard-check-fill","fw-bold"],["routerLinkActive","active",1,"nav-link","align-self-end","p-3",3,"routerLink"],[1,"fs-4","bi","bi-gear-fill","fw-bold"]],template:function(o,p){1&o&&(c.j41(0,"nav",0)(1,"a",1),c.nrm(2,"i",2),c.DNE(3,Nt,2,0,"span",3),c.k0s(),c.j41(4,"a",1),c.nrm(5,"i",4),c.DNE(6,kt,2,0,"span",3),c.k0s(),c.j41(7,"a",1),c.nrm(8,"i",5),c.DNE(9,yn,2,0,"span",3),c.k0s(),c.j41(10,"a",1),c.nrm(11,"i",6),c.DNE(12,ti,2,0,"span",3),c.k0s(),c.j41(13,"a",1),c.nrm(14,"i",7),c.DNE(15,oi,2,0,"span",3),c.k0s(),c.j41(16,"a",8),c.nrm(17,"i",9),c.DNE(18,Mr,2,0,"span",3),c.k0s()()),2&o&&(c.R7$(),c.Y8G("routerLink",c.lJ4(12,L)),c.R7$(2),c.vxM(3,p.isVisible?3:-1),c.R7$(),c.Y8G("routerLink",c.lJ4(13,D)),c.R7$(2),c.vxM(6,p.isVisible?6:-1),c.R7$(),c.Y8G("routerLink",c.lJ4(14,H)),c.R7$(2),c.vxM(9,p.isVisible?9:-1),c.R7$(),c.Y8G("routerLink",c.lJ4(15,we)),c.R7$(2),c.vxM(12,p.isVisible?12:-1),c.R7$(),c.Y8G("routerLink",c.lJ4(16,Pe)),c.R7$(2),c.vxM(15,p.isVisible?15:-1),c.R7$(),c.Y8G("routerLink",c.lJ4(17,tt)),c.R7$(2),c.vxM(18,p.isVisible?18:-1))},dependencies:[_.wQ,_.Wk,xr],encapsulation:2})}return u})(),nc=(()=>{class u{static#e=this.\u0275fac=function(o){return new(o||u)};static#t=this.\u0275cmp=c.VBU({type:u,selectors:[["app-footer"]],standalone:!0,features:[c.aNF],decls:2,vars:0,consts:[[1,"d-flex","flex-row","flex-nowrap","justify-content-between","align-items-center","h-100","px-5","py-3","z-2","bg-dark"],["alt","certumLogo","src","./assets/images/footer-logo.svg",1,"img-fluid"]],template:function(o,p){1&o&&(c.j41(0,"footer",0),c.nrm(1,"img",1),c.k0s())},encapsulation:2})}return u})();var xi=d(4709),Di=d(6885),Do=d(1018),qu=d(5941);class kf{}var Rr=d(4327);class Mf{constructor(l,n,o,p){this.resource=o.startsWith("/")?o:`/${o}`,this.method=p,this.index=l,this.id=n}}var Rf=function(u,l,n,o){return new(n||(n=Promise))(function(y,k){function z($e){try{xe(o.next($e))}catch(Ze){k(Ze)}}function fe($e){try{xe(o.throw($e))}catch(Ze){k(Ze)}}function xe($e){$e.done?y($e.value):function p(y){return y instanceof n?y:new n(function(k){k(y)})}($e.value).then(z,fe)}xe((o=o.apply(u,l||[])).next())})};class Rc{static get baseUrl(){return"https://graph.microsoft.com"}constructor(l){this.graph=l,this.allRequests=[],this.requestsQueue=[],this.scopes=[],this.nextIndex=0,this.retryAfter=0}get hasRequests(){return this.requestsQueue.length>0}get(l,n,o,p){const y=this.nextIndex++,k=new Mf(y,l,n,"GET");k.headers=p,this.allRequests.push(k),this.requestsQueue.push(y),o&&(this.scopes=this.scopes.concat(o))}executeNext(){return Rf(this,void 0,void 0,function*(){const l=new Map;if(this.retryAfter&&(yield(u=1e3*this.retryAfter,function(u,l,n,o){return new(n||(n=Promise))(function(y,k){function z($e){try{xe(o.next($e))}catch(Ze){k(Ze)}}function fe($e){try{xe(o.throw($e))}catch(Ze){k(Ze)}}function xe($e){$e.done?y($e.value):function p(y){return y instanceof n?y:new n(function(k){k(y)})}($e.value).then(z,fe)}xe((o=o.apply(u,l||[])).next())})}(void 0,void 0,void 0,function*(){return new Promise(l=>{setTimeout(l,u)})})),this.retryAfter=0),!this.hasRequests)return l;var u;const n=this.requestsQueue.splice(0,20),o=new Do.Tz;for(const fe of n.map(xe=>this.allRequests[xe]))o.addRequest({id:fe.index.toString(),request:new Request(Rc.baseUrl+fe.resource,{method:fe.method,headers:fe.headers})});const p=this.scopes.length?(0,Rr.F)(this.scopes):[],y=this.graph.api("$batch").middlewareOptions(p),k=yield o.getContent(),z=yield y.post(k);for(const fe of z.responses){const xe=new kf,$e=parseInt(fe.id,10),Ze=this.allRequests[$e];xe.id=Ze.id,xe.index=Ze.index,xe.headers=fe.headers,200===fe.status?("string"==typeof fe.body?fe.headers["Content-Type"].includes("image/jpeg")?xe.content="data:image/jpeg;base64,"+fe.body:fe.headers["Content-Type"].includes("image/pjpeg")?xe.content="data:image/pjpeg;base64,"+fe.body:fe.headers["Content-Type"].includes("image/png")&&(xe.content="data:image/png;base64,"+fe.body):xe.content=fe.body,l.set(Ze.id,xe)):429===fe.status&&(this.requestsQueue.unshift($e),this.retryAfter=Math.max(this.retryAfter,parseInt(fe.headers["Retry-After"],10)||1))}return l})}executeAll(){return Rf(this,void 0,void 0,function*(){const l=new Map;for(;this.hasRequests;){const n=yield this.executeNext();for(const[o,p]of n)l.set(o,p)}return l})}}class Of{constructor(l){this.componentName="string"==typeof l?l:l.tagName.toLowerCase()}}const Da=(...u)=>{const l=u[0];let n=l;for(let o=1;o<u.length;++o){const p=u[o];n.setNext&&n.setNext(p),n=p}return l};var Qu=d(9629),Pf=d(7388);class mm{constructor(l,n){this._packageVersion=l,this._providerName=n}execute(l){var n;return function(u,l,n,o){return new(n||(n=Promise))(function(y,k){function z($e){try{xe(o.next($e))}catch(Ze){k(Ze)}}function fe($e){try{xe(o.throw($e))}catch(Ze){k(Ze)}}function xe($e){$e.done?y($e.value):function p(y){return y instanceof n?y:new n(function(k){k(y)})}($e.value).then(z,fe)}xe((o=o.apply(u,l||[])).next())})}(this,void 0,void 0,function*(){try{if("string"==typeof l.request)if((0,Pf.N)(l.request)){const o=[],p=l.middlewareControl.getMiddlewareOptions(Of);p&&o.push(`${p.componentName}/${this._packageVersion}`),this._providerName&&o.push(`${this._providerName}/${this._packageVersion}`),o.push(`mgt/${this._packageVersion}`),o.push((0,Qu.XH)(l.request,l.options,"SdkVersion"));const k=o.join(", ");(0,Qu.RO)(l.request,l.options,"SdkVersion",k)}else null===(n=l?.options)||void 0===n||delete n.headers.SdkVersion}catch{}return yield this._nextMiddleware.execute(l)})}setNext(l){this._nextMiddleware=l}}var Hy=d(1212),ir=d(5794);class hl{get client(){return this._client}get componentName(){return this._componentName}get version(){return this._version}constructor(l,n="v1.0"){this._client=l,this._version=n}forComponent(l){const n=new hl(this._client,this._version);return n.setComponent(l),n}api(l){let n=this._client.api(l).version(this._version);return this._componentName&&(n.middlewareOptions=o=>(n._middlewareOptions=n._middlewareOptions.concat(o),n),n=n.middlewareOptions([new Of(this._componentName)])),n}createBatch(){return new Rc(this)}setComponent(l){this._componentName=l instanceof Element?ir.U.normalize(l.tagName):l}}var vm=d(194),Ka=function(u,l,n,o){return new(n||(n=Promise))(function(y,k){function z($e){try{xe(o.next($e))}catch(Ze){k(Ze)}}function fe($e){try{xe(o.throw($e))}catch(Ze){k(Ze)}}function xe($e){$e.done?y($e.value):function p(y){return y instanceof n?y:new n(function(k){k(y)})}($e.value).then(z,fe)}xe((o=o.apply(u,l||[])).next())})},Ul=function(u){return u.SELECT_ACCOUNT="select_account",u.LOGIN="login",u.CONSENT="consent",u}(Ul||{});class _s extends Di.DH{get publicClientApplication(){return this._publicClientApplication}get name(){return"MgtMsal2Provider"}get isMultiAccountDisabled(){return!this.isMultipleAccountEnabled}set isMultiAccountDisabled(l){this.isMultipleAccountEnabled=!l}get isMultiAccountSupportedAndEnabled(){return this.isMultipleAccountEnabled}get sessionStorageRequestedScopesKey(){return"mgt-requested-scopes"}get sessionStorageDeniedScopesKey(){return"mgt-denied-scopes"}get homeAccountKey(){return"275f3731-e4a4-468a-bf9c-baca24b31e26"}constructor(l){super(),this.isMultipleAccountEnabled=!0,this.handleMsalEvent=n=>{"msal:acquireTokenSuccess"===n.eventType&&"scopes"in n.payload&&(this.approvedScopes=n.payload.scopes)},this.initProvider(l)}initProvider(l){return Ka(this,void 0,void 0,function*(){const n=l.options||{auth:{clientId:""}};if(this.ms_config=n,this.ms_config.cache=n.cache||{},this.ms_config.cache.cacheLocation=n.cache.cacheLocation||"localStorage",(typeof this.ms_config.cache.storeAuthStateInCookie>"u"||null===this.ms_config.cache.storeAuthStateInCookie)&&(this.ms_config.cache.storeAuthStateInCookie=!0),this.ms_config.system=n.system||{},this.ms_config.system.iframeHashTimeout=n.system.iframeHashTimeout||1e4,l.authority&&(this.ms_config.auth.authority=l.authority),l.redirectUri&&(this.ms_config.auth.redirectUri=l.redirectUri),"clientId"in l){if(!l.clientId)throw new Error("clientId must be provided");this.ms_config.auth.clientId=l.clientId,this._publicClientApplication=new gs(this.ms_config)}else{if(!("publicClientApplication"in l))throw new Error("either clientId or publicClientApplication must be provided");if(!l.publicClientApplication)throw new Error("publicClientApplication must be provided");this._publicClientApplication=l.publicClientApplication}this._publicClientApplication.addEventCallback(this.handleMsalEvent),yield this._publicClientApplication.initialize(),this.ms_config.system=n.system||{},this.ms_config.system.iframeHashTimeout=n.system.iframeHashTimeout||1e4,this._loginType=typeof l.loginType<"u"?l.loginType:Di.Gb.Redirect,this._loginHint=typeof l.loginHint<"u"?l.loginHint:null,this._sid=typeof l.sid<"u"?l.sid:null,this.isIncrementalConsentDisabled=typeof l.isIncrementalConsentDisabled<"u"&&l.isIncrementalConsentDisabled,this._domainHint=typeof l.domainHint<"u"?l.domainHint:null,this.scopes=typeof l.scopes<"u"?l.scopes:["user.read"],this._prompt=typeof l.prompt<"u"?l.prompt:Ul.SELECT_ACCOUNT;const o=l;this.isMultipleAccountEnabled=!(typeof o.isMultiAccountEnabled<"u")||o.isMultiAccountEnabled,this.baseURL=typeof o.baseURL<"u"?o.baseURL:this.baseURL,this.customHosts=o.customHosts,this.graph=((u,l,n)=>{const o=[new Do.zA(u),new Do.Z$(new Do.Rz),new Do.MD,new mm(Hy.i,u.name),new Do.eg],p=u.baseURL?u.baseURL:qu.I,y=Do.Kj.initWithMiddleware({middleware:Da(...o),customHosts:u.customHosts?new Set(u.customHosts):null,baseUrl:p}),k=new hl(y,void 0);return k})(this);try{const p=yield this._publicClientApplication.handleRedirectPromise();null!==p?this.handleResponse(p?.account):yield this.trySilentSignIn()}catch(p){throw console.error("\u{1f992}: Problem attempting to sign in",p),p}})}trySilentSignIn(){return Ka(this,void 0,void 0,function*(){const l={scopes:this.scopes,domainHint:this._domainHint};if(this._sid||this._loginHint){l.sid=this._sid,l.loginHint=this._loginHint;try{this.setState(Di.HJ.Loading);const n=yield this._publicClientApplication.ssoSilent(l);n&&this.handleResponse(n?.account)}catch{this.setState(Di.HJ.SignedOut)}}else{const n=this.getAccount();if(n&&(yield this.getAccessToken(null)))return void this.handleResponse(n);this.setState(Di.HJ.SignedOut)}})}login(){return Ka(this,void 0,void 0,function*(){const l={scopes:this.scopes,loginHint:this._loginHint,prompt:this._prompt,domainHint:this._domainHint};if(this._loginType===Di.Gb.Popup){const n=yield this._publicClientApplication.loginPopup(l);this.handleResponse(n?.account)}else{const n=Object.assign({},l);yield this._publicClientApplication.loginRedirect(n)}})}getAllAccounts(){const l=[];return this._publicClientApplication.getAllAccounts().forEach(n=>{l.push({name:n.name,mail:n.username,id:n.homeAccountId})}),l}setActiveAccount(l){const n=this._publicClientApplication.getAccountByHomeId(l.id),o=this._publicClientApplication.getActiveAccount(),p=this.getStoredAccount();p&&n&&o&&p.homeAccountId===n.homeAccountId&&o.homeAccountId===n.homeAccountId||(this._publicClientApplication.setActiveAccount(n),this.setStoredAccount(),super.setActiveAccount(l))}getActiveAccount(){const l=this._publicClientApplication.getActiveAccount();if(l)return{name:l.name,mail:l.username,id:l.homeAccountId,tenantId:l.tenantId}}handleResponse(l){null!==l?(this.setActiveAccount({name:l.name,id:l.homeAccountId,mail:l.username}),this.setState(Di.HJ.SignedIn)):this.setState(Di.HJ.SignedOut),this.clearRequestedScopes()}storage(){return"localStorage"===this.ms_config.cache.cacheLocation?window.localStorage:window.sessionStorage}setStoredAccount(){this.clearStoredAccount(),this.storage().setItem(this.homeAccountKey,this._publicClientApplication.getActiveAccount().homeAccountId)}getStoredAccount(){const l=this.storage().getItem(this.homeAccountKey);return this._publicClientApplication.getAccountByHomeId(l)}clearStoredAccount(){this.storage().removeItem(this.homeAccountKey)}setRequestedScopes(l){l&&sessionStorage.setItem(this.sessionStorageRequestedScopesKey,JSON.stringify(l))}addDeniedScopes(l){if(l){let n=this.getDeniedScopes()||[];n=n.concat(l);let o=n.indexOf("openid");-1!==o&&n.splice(o,1),o=n.indexOf("profile"),-1!==o&&n.splice(o,1),sessionStorage.setItem(this.sessionStorageDeniedScopesKey,JSON.stringify(n))}}getDeniedScopes(){const l=sessionStorage.getItem(this.sessionStorageDeniedScopesKey);return l?JSON.parse(l):null}areScopesDenied(l){if(l){const n=this.getDeniedScopes();if(n&&n.filter(o=>-1!==l.indexOf(o)).length>0)return!0}return!1}clearRequestedScopes(){sessionStorage.removeItem(this.sessionStorageRequestedScopesKey)}getAccount(){return this.getStoredAccount()||(this._publicClientApplication.getAllAccounts().length>0?this._publicClientApplication.getAllAccounts()[0]:null)}logout(){return Ka(this,void 0,void 0,function*(){const n={account:this._publicClientApplication.getActiveAccount()};this.clearStoredAccount(),this._loginType===Di.Gb.Redirect?(this.setState(Di.HJ.SignedOut),yield this._publicClientApplication.logoutRedirect(n)):(yield this._publicClientApplication.logoutPopup(Object.assign({},n)),1!==this._publicClientApplication.getAllAccounts.length&&this.isMultipleAccountEnabled?yield this.trySilentSignIn():this.setState(Di.HJ.SignedOut))})}getAccessToken(l){return Ka(this,void 0,void 0,function*(){const n=l&&l.scopes||this.scopes,o={scopes:n,account:this.getAccount()};try{const p=o;return(yield this._publicClientApplication.acquireTokenSilent(p)).accessToken}catch(p){if(p instanceof vm.CB){if(this.isIncrementalConsentDisabled)return null;if(this._loginType===Di.Gb.Redirect){if(this.areScopesDenied(n))throw p;this.setRequestedScopes(n),yield this._publicClientApplication.acquireTokenRedirect(o)}else try{return(yield this._publicClientApplication.acquireTokenPopup(o)).accessToken}catch(y){throw console.error("\u{1f992}: problem with pop-up sign in",y),y}}else this.setState(Di.HJ.SignedOut)}throw null})}}var qa=d(6479),Zu=d(7531),Lt=d(8324),Mt=d(9559),Bs=d(2578),or=d(4569);const Lf=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{--card-height:auto;--card-width:99%;background-color:var(--agenda-background-color,transparent)}:host .header{margin:var(--agenda-header-margin,18px 0 12px 10px);font-size:var(--agenda-header-font-size, 24px);font-style:normal;font-weight:400;line-height:32px;color:var(--agenda-header-color,var(--neutral-foreground-rest));opacity:.9}:host .agenda,:host .group{display:flex;flex-direction:column;row-gap:var(--agenda-event-row-gap,14px)}:host .agenda>.group:first-child>.header,:host .group>.group:first-child>.header{margin-top:0}:host .agenda .event,:host .group .event{background:var(--agenda-event-background-color,var(--fill-color));border:var(--agenda-event-border,solid 2px transparent);box-shadow:var(--agenda-event-box-shadow,var(--elevation-shadow-card-rest));padding:var(--agenda-event-padding,12px);position:relative;display:flex;flex:1 1 auto;content-visibility:visible;contain:none}:host .agenda .event-container,:host .group .event-container{border-radius:calc(var(--layer-corner-radius) * 1px);padding:1px}:host .agenda .event.narrow,:host .group .event.narrow{display:flex;flex-direction:column;inset:0}:host .agenda .event-time-container,:host .group .event-time-container{font-style:normal;font-weight:600;font-size:12px;color:var(--agenda-event-time-color,var(--neutral-foreground-rest));width:112px;height:16px}:host .agenda .event-time-container.narrow,:host .group .event-time-container.narrow{margin-bottom:1px;width:100%}:host .agenda .event-time,:host .group .event-time{font-size:var(--agenda-event-time-font-size, 12px);color:var(--agenda-event-time-color,var(--neutral-foreground-rest));font-weight:600}:host .agenda .event-details-container,:host .group .event-details-container{display:flex;flex-direction:column;position:relative;bottom:8px;top:0;padding-inline-start:32px}:host .agenda .event-details-container.narrow,:host .group .event-details-container.narrow{position:inherit;left:6px;display:flex;flex-direction:column;padding-inline-start:0}:host .agenda .event-subject,:host .group .event-subject{font-style:normal;font-weight:400;font-size:var(--agenda-event-subject-font-size, 20px);line-height:28px;color:var(--agenda-event-subject-color,var(--neutral-foreground-rest));mix-blend-mode:normal;position:inherit;bottom:8px}:host .agenda .event-location-container,:host .group .event-location-container{display:inline-flex;flex-direction:row}:host .agenda .event-location-container .event-location,:host .group .event-location-container .event-location{padding-inline-start:3px;font-style:normal;font-weight:400;font-size:var(--agenda-event-location-font-size, 12px);line-height:16px;color:var(--agenda-event-location-color,var(--neutral-foreground-rest))}:host .agenda .event-location-container .event-location-loading,:host .group .event-location-container .event-location-loading{width:90px;height:10px;margin:2px 0 0 4px}:host .agenda .event-location-container .event-location-icon,:host .group .event-location-container .event-location-icon{display:inline-flex}:host .agenda .event-location-container .event-location-icon svg,:host .group .event-location-container .event-location-icon svg{position:relative;top:2px;width:12px;height:12px}:host .agenda .event-location-container .event-location-icon svg path,:host .group .event-location-container .event-location-icon svg path{stroke:var(--agenda-event-location-color,var(--neutral-foreground-rest))}:host .agenda .event-location-container .event-location-icon-loading,:host .group .event-location-container .event-location-icon-loading{width:14px;height:14px}:host .agenda .event-location-container .event-attendee-loading,:host .group .event-location-container .event-attendee-loading{width:20px;height:20px;border-radius:10px;margin:0 2px 0 0}:host .agenda .event-attendees,:host .group .event-attendees{--list-margin:8px 0 0 0;--person-avatar-size:20px}fluent-card.event.event-loading{--card-height:90px}:host .event-attendees{--color:$agenda-event-attendees-color}:host fluent-tooltip{width:auto;contain:inline-size}[dir=rtl] :host{direction:rtl}[dir=rtl] .event-time-container{direction:ltr;display:flex;justify-content:flex-end}@media (forced-colors:active) and (prefers-color-scheme:dark){:host .agenda .event-location-container .event-location-icon svg path{stroke:rgb(255,255,255)!important}}@media (forced-colors:active) and (prefers-color-scheme:light){:host .agenda .event-location-container .event-location-icon svg path{stroke:rgb(0,0,0)!important}}
`];var Yu=d(7425),wd=function(u,l,n,o){return new(n||(n=Promise))(function(y,k){function z($e){try{xe(o.next($e))}catch(Ze){k(Ze)}}function fe($e){try{xe(o.throw($e))}catch(Ze){k(Ze)}}function xe($e){$e.done?y($e.value):function p(y){return y instanceof n?y:new n(function(k){k(y)})}($e.value).then(z,fe)}xe((o=o.apply(u,l||[])).next())})};const ic=(u,l,n)=>wd(void 0,void 0,void 0,function*(){const o=u.api(l).middlewareOptions((0,Rr.F)(n)).orderby("start/dateTime");return Yu.E.create(u,o)});var Vn=d(2710),xo=d(4229),Gn=d(6692),Ff=d(1786),ko=d(5527),$f=d(54);const ym=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .people-list{list-style:none;margin:var(--people-list-margin,8px 4px 8px 8px);padding:unset;display:flex;align-items:center;gap:var(--people-avatar-gap,4px)}:host .people-list .people-person{--person-avatar-size:var(--people-person-avatar-size, 24px)}:host .overflow span{vertical-align:middle;color:var(--people-overflow-font-color,currentColor);font-size:var(--people-overflow-font-size, 12px);font-weight:var(--people-overflow-font-weight,400)}
`];var jo=d(8940),Es=function(u,l,n,o){var k,p=arguments.length,y=p<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(u,l,n,o);else for(var z=u.length-1;z>=0;z--)(k=u[z])&&(y=(p<3?k(y):p>3?k(l,n,y):k(l,n))||y);return p>3&&y&&Object.defineProperty(l,n,y),y},bo=function(u,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(u,l)};const Ju=()=>{(0,qa.sN)(),(0,jo.N)("people",eh)};let eh=(()=>{class u extends Bs.N{static get styles(){return ym}static get requiredScopes(){return[...new Set(["user.read.all","people.read","user.readbasic.all","presence.read.all","contacts.read",...qa.O$.requiredScopes])]}constructor(){super(),this.personCardInteraction="hover",this.version="v1.0",this.scopes=[],this._peoplePresence={},this._arrowKeyLocation=-1,this.renderContent=()=>this.people&&0!==this.people.length?this.renderTemplate("default",{people:this.people,max:this.showMax})||this.renderPeople():this.renderNoData(),this.renderLoading=()=>this.renderTemplate("loading",null)||Lt.qy``,this.handleKeyDown=n=>{const o=this.shadowRoot.querySelector(".people-list");let p;const y=o?.children;for(const fe of y){const xe=fe;xe.setAttribute("tabindex","-1"),xe.blur()}const k=o.childElementCount,z=n.key;if("ArrowRight"===z)this._arrowKeyLocation=(this._arrowKeyLocation+1+k)%k;else if("ArrowLeft"===z)this._arrowKeyLocation=(this._arrowKeyLocation-1+k)%k;else if("Tab"===z||"Escape"===z)this._arrowKeyLocation=-1,o.blur();else if(["Enter","space"," "].includes(z)&&"none"!==this.personCardInteraction){const xe=y[this._arrowKeyLocation].querySelector("mgt-person");xe&&xe.showPersonCard()}this._arrowKeyLocation>-1&&(p=y[this._arrowKeyLocation],p.setAttribute("tabindex","1"),p.focus())},this.showMax=3}clearState(){this.people=null}args(){return[this.providerState,this.groupId,this.userIds,this.peopleQueries,this.showMax,this.resource,this.version,this.fallbackDetails]}renderPeople(){const n=this.people.slice(0,this.showMax).filter(o=>o);return Lt.qy`
      <ul
        tabindex="0"
        class="people-list"
        aria-label="people"
        @keydown=${this.handleKeyDown}>
        ${(0,xo.u)(n,o=>o.id?o.id:o.displayName,o=>Lt.qy`
            <li tabindex="-1" class="people-person">
              ${this.renderPerson(o)}
            </li>
          `)}
        ${this.people.length>this.showMax?this.renderOverflow():null}
      </ul>
    `}renderOverflow(){const n=this.people.length-this.showMax;return this.renderTemplate("overflow",{extra:n,max:this.showMax,people:this.people})||Lt.qy`
        <li tabindex="-1" aria-label="and ${n} more attendees" class="overflow"><span>+${n}</span></li>
      `}renderPerson(n){let o={activity:"Offline",availability:"Offline",id:null};return this.showPresence&&this._peoplePresence&&(o=this._peoplePresence[n.id]),this.renderTemplate("person",{person:n},n.id)||or.Q`
        <mgt-person
          class="people-person"
          .personDetails=${n}
          .fetchImage=${!0}
          .avatarSize=${"small"}
          .personCardInteraction=${this.personCardInteraction}
          .showPresence=${this.showPresence}
          .personPresence=${o}
          .usage=${"people"}
        ></mgt-person>
      `}renderNoData(){return this.renderTemplate("no-data",null)||Lt.qy``}loadState(){return function(u,l,n,o){return new(n||(n=Promise))(function(y,k){function z($e){try{xe(o.next($e))}catch(Ze){k(Ze)}}function fe($e){try{xe(o.throw($e))}catch(Ze){k(Ze)}}function xe($e){$e.done?y($e.value):function p(y){return y instanceof n?y:new n(function(k){k(y)})}($e.value).then(z,fe)}xe((o=o.apply(u,l||[])).next())})}(this,void 0,void 0,function*(){if(!this.people){const n=xi.b.globalProvider;if(n&&n.state===Di.HJ.SignedIn){const o=n.graph.forComponent(this);this.people=this.groupId?yield(0,ko.sb)(o,null,this.groupId,this.showMax,"person"):this.userIds?yield(0,ko.$q)(o,this.userIds,"","",this.fallbackDetails):this.peopleQueries?yield(0,ko.vl)(o,this.peopleQueries,this.fallbackDetails):this.resource?yield(0,Gn.ox)(o,this.version,this.resource,this.scopes):yield(0,Gn.cB)(o),this._peoplePresence=this.showPresence?yield(0,Ff.u)(o,this.people):null}}})}}return Es([(0,Mt.MZ)({attribute:"group-id",type:String}),bo("design:type",String)],u.prototype,"groupId",void 0),Es([(0,Mt.MZ)({attribute:"user-ids",converter:(l,n)=>l.split(",").map(o=>o.trim())}),bo("design:type",Array)],u.prototype,"userIds",void 0),Es([(0,Mt.MZ)({attribute:"people",type:Object}),bo("design:type",Array)],u.prototype,"people",void 0),Es([(0,Mt.MZ)({attribute:"people-queries",converter:(l,n)=>l.split(",").map(o=>o.trim())}),bo("design:type",Array)],u.prototype,"peopleQueries",void 0),Es([(0,Mt.MZ)({attribute:"show-max",type:Number}),bo("design:type",Number)],u.prototype,"showMax",void 0),Es([(0,Mt.MZ)({attribute:"show-presence",type:Boolean}),bo("design:type",Boolean)],u.prototype,"showPresence",void 0),Es([(0,Mt.MZ)({attribute:"person-card",converter:(l,n)=>(0,$f.e)(l,"hover")}),bo("design:type",String)],u.prototype,"personCardInteraction",void 0),Es([(0,Mt.MZ)({attribute:"resource",type:String}),bo("design:type",String)],u.prototype,"resource",void 0),Es([(0,Mt.MZ)({attribute:"version",type:String}),bo("design:type",Object)],u.prototype,"version",void 0),Es([(0,Mt.MZ)({attribute:"scopes",converter:l=>l?l.toLowerCase().split(","):null,reflect:!0}),bo("design:type",Array)],u.prototype,"scopes",void 0),Es([(0,Mt.MZ)({attribute:"fallback-details",type:Array}),bo("design:type",Array)],u.prototype,"fallbackDetails",void 0),Es([(0,Mt.wk)(),bo("design:type",Object)],u.prototype,"_arrowKeyLocation",void 0),u})();var ts=d(3601),Ed=d(5409),Ht=d(3402),si=function(u,l,n,o){var k,p=arguments.length,y=p<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(u,l,n,o);else for(var z=u.length-1;z>=0;z--)(k=u[z])&&(y=(p<3?k(y):p>3?k(l,n,y):k(l,n))||y);return p>3&&y&&Object.defineProperty(l,n,y),y},xa=function(u,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(u,l)},Td=function(u,l,n,o){return new(n||(n=Promise))(function(y,k){function z($e){try{xe(o.next($e))}catch(Ze){k(Ze)}}function fe($e){try{xe(o.throw($e))}catch(Ze){k(Ze)}}function xe($e){$e.done?y($e.value):function p(y){return y instanceof n?y:new n(function(k){k(y)})}($e.value).then(z,fe)}xe((o=o.apply(u,l||[])).next())})};let Uf=(()=>{class u extends Bs.N{constructor(){super(...arguments),this.days=3,this.renderContent=()=>{if(!this.events||0===this.events.length)return this.renderNoData();const n=this.showMax&&this.showMax>0?this.events.slice(0,this.showMax):this.events,o=this.renderTemplate("default",{events:n});return o||Lt.qy`
      <div dir=${this.direction} class="${(0,Ht.H)({agenda:!0,grouped:this.groupByDay})}">
        ${this.groupByDay?this.renderGroups(n):this.renderEvents(n)}
      </div>
    `},this.renderLoading=()=>this.renderTemplate("loading",null)||Lt.qy`
        <fluent-card class="event event-loading">
          <div class="event-time-container">
            <div class="event-time-loading loading-element"></div>
          </div>
          <div class="event-details-container">
            <div class="event-subject-loading loading-element"></div>
            <div class="event-location-container">
              <div class="event-location-icon-loading loading-element"></div>
              <div class="event-location-loading loading-element"></div>
            </div>
            <div class="event-location-container">
              <div class="event-attendee-loading loading-element"></div>
              <div class="event-attendee-loading loading-element"></div>
              <div class="event-attendee-loading loading-element"></div>
            </div>
          </div>
        </fluent-card>`,this.onResize=()=>{this._isNarrow=this.offsetWidth<600}}static get styles(){return Lf}static get requiredScopes(){return[...new Set(["calendars.read",...eh.requiredScopes])]}connectedCallback(){this._isNarrow=this.offsetWidth<600,super.connectedCallback(),window.addEventListener("resize",this.onResize)}disconnectedCallback(){window.removeEventListener("resize",this.onResize),super.disconnectedCallback()}reload(){return Td(this,void 0,void 0,function*(){this.events=yield this.loadEvents()})}clearState(){this.events=null}renderNoData(){return this.renderTemplate("no-data",null)||Lt.qy``}renderEvent(n){this._isNarrow=this.offsetWidth<600;const o={narrow:this._isNarrow};return Lt.qy`
      <fluent-card class="${(0,Ht.H)(Object.assign({event:!0},o))}">
        <div class="${(0,Ht.H)(Object.assign({"event-time-container":!0},o))}">
          <div class="event-time" aria-label="${this.getEventTimeString(n)}">${this.getEventTimeString(n)}</div>
        </div>
        <div class="${(0,Ht.H)(Object.assign({"event-details-container":!0},o))}">
          ${this.renderTitle(n)} ${this.renderLocation(n)} ${this.renderAttendees(n)}
        </div>
        <div class="event-other-container">${this.renderOther(n)}</div>
      </fluent-card>
    `}renderHeader(n){return this.renderTemplate("header",{header:n},"header-"+n)||Lt.qy`
        <div class="header" aria-label="${n}">${n}</div>
      `}renderTitle(n){return Lt.qy`
      <div
        aria-label=${n.subject}
        class="${(0,Ht.H)({"event-subject":!0,narrow:this._isNarrow})}"
      >
        ${n.subject}
      </div>`}renderLocation(n){return n.location.displayName?Lt.qy`
      <div class="event-location-container">
        <div class="event-location-icon">${(0,Vn.r)(Vn.A.OfficeLocation)}</div>
        <div class="event-location" aria-label="${n.location.displayName}">${n.location.displayName}</div>
      </div>
    `:null}renderAttendees(n){return n.attendees.length?or.Q`
      <mgt-people
        show-max="5"
        show-presence
        class="event-attendees"
        .peopleQueries=${n.attendees.map(o=>o.emailAddress.address)}
      ></mgt-people>
    `:null}renderOther(n){return this.hasTemplate("event-other")?Lt.qy`
          ${this.renderTemplate("event-other",{event:n},n.id+"-other")}
        `:null}renderGroups(n){const o={};return n.forEach(p=>{var y;let k=null===(y=p?.start)||void 0===y?void 0:y.dateTime;"UTC"===p.end.timeZone&&(k+="Z");const z=this.getDateHeaderFromDateTimeString(k);o[z]=o[z]||[],o[z].push(p)}),Lt.qy`
      ${Object.keys(o).map(p=>Lt.qy`
            <div class="group">${this.renderHeader(p)} ${this.renderEvents(o[p])}</div>
          `)}
    `}renderEvents(n){return Lt.qy`
        ${n.map(o=>Lt.qy`
              <div
                class="event-container"
                tabindex="0"
                @focus=${()=>this.eventClicked(o)}>
                ${this.renderTemplate("event",{event:o},o.id)||this.renderEvent(o)}
              </div>`)}`}args(){return[this.providerState,this.preferredTimezone,this.eventQuery,this.date,this.groupId,this.days]}loadState(){return Td(this,void 0,void 0,function*(){if(this.events)return;const n=yield this.loadEvents();n?.length>0&&(this.events=n)})}eventClicked(n){this.fireCustomEvent("eventClick",n)}getEventTimeString(n){if(n.isAllDay)return"ALL DAY";let o=n.start.dateTime;"UTC"===n.start.timeZone&&(o+="Z");let p=n.end.dateTime;return"UTC"===n.end.timeZone&&(p+="Z"),`${this.prettyPrintTimeFromDateTime(new Date(o))} - ${this.prettyPrintTimeFromDateTime(new Date(p))}`}loadEvents(){return Td(this,void 0,void 0,function*(){const n=xi.b.globalProvider;let o=[];if(n?.state===Di.HJ.SignedIn){const p=n.graph.forComponent(this);if(this.eventQuery)try{const y=this.eventQuery.split("|");let k,z;y.length>1?(z=y[0].trim(),k=y[1].trim()):z=this.eventQuery;const fe=yield ic(p,z,k?[k]:[]);if(fe?.value)for(o=fe.value;fe.hasNext;)yield fe.next(),o=fe.value}catch{}else{const y=this.date?new Date(this.date):new Date,k=new Date(y.getTime());k.setDate(y.getDate()+this.days);try{const z=yield((u,l,n,o)=>wd(void 0,void 0,void 0,function*(){const p=`startdatetime=${l.toISOString()}`,y=`enddatetime=${n.toISOString()}`;return ic(u,o?`groups/${o}/calendar/calendarview?${p}&${y}`:`me/calendarview?${p}&${y}`,o?["Group.Read.All","Group.ReadWrite.All"]:["Calendars.ReadBasic","Calendars.Read","Calendars.ReadWrite"])}))(p,y,k,this.groupId);if(z?.value)for(o=z.value;z.hasNext;)yield z.next(),o=z.value}catch{}}}return o})}prettyPrintTimeFromDateTime(n){return n.toLocaleTimeString(navigator.language,{timeStyle:"short",timeZone:this.preferredTimezone})}getDateHeaderFromDateTimeString(n){return new Date(n).toLocaleDateString(navigator.language,{dateStyle:"full",timeZone:this.preferredTimezone})}}return si([(0,Mt.MZ)({attribute:"date",type:String}),xa("design:type",String)],u.prototype,"date",void 0),si([(0,Mt.MZ)({attribute:"group-id",type:String}),xa("design:type",String)],u.prototype,"groupId",void 0),si([(0,Mt.MZ)({attribute:"days",type:Number}),xa("design:type",Object)],u.prototype,"days",void 0),si([(0,Mt.MZ)({attribute:"event-query",type:String}),xa("design:type",String)],u.prototype,"eventQuery",void 0),si([(0,Mt.MZ)({attribute:"events",type:Array,hasChanged:(l,n)=>l!==n}),xa("design:type",Array)],u.prototype,"events",void 0),si([(0,Mt.MZ)({attribute:"show-max",type:Number}),xa("design:type",Number)],u.prototype,"showMax",void 0),si([(0,Mt.MZ)({attribute:"group-by-day",type:Boolean}),xa("design:type",Boolean)],u.prototype,"groupByDay",void 0),si([(0,Mt.MZ)({attribute:"preferred-timezone",type:String}),xa("design:type",String)],u.prototype,"preferredTimezone",void 0),si([(0,Mt.MZ)({attribute:!1}),xa("design:type",Boolean)],u.prototype,"_isNarrow",void 0),u})();var qr=d(2404),Ts=d(1235),Bl=d(4130),th=d(7768),Mo=d(5889),Qa=function(u,l,n,o){var k,p=arguments.length,y=p<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(u,l,n,o);else for(var z=u.length-1;z>=0;z--)(k=u[z])&&(y=(p<3?k(y):p>3?k(l,n,y):k(l,n))||y);return p>3&&y&&Object.defineProperty(l,n,y),y},ua=function(u,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(u,l)};const ns=u=>Array.isArray(u?.value),Bf=["json","image"],Sd=()=>qr._.config.response.isEnabled&&qr._.config.isEnabled,nh=()=>(0,jo.N)("get",wm);let wm=(()=>{class u extends Bs.N{constructor(){super(...arguments),this.scopes=[],this.version="v1.0",this.type="json",this.maxPages=3,this.pollingRate=0,this.cacheEnabled=!1,this.cacheInvalidationPeriod=0,this.isPolling=!1,this.isRefreshing=!1,this.renderLoading=()=>{const n=this.renderTemplate("loading",null);return ns(this.response)?this.renderValueContentWithDefaultTemplate(Lt.qy`${this.response.value.map(o=>this.renderTemplate("value",o,o.id))} ${n} `):n},this.renderContent=()=>{if(this.hasTemplate("value")&&ns(this.response)){const n=ns(this.response)?Lt.qy`
          ${this.response.value.map(o=>this.renderTemplate("value",o,o.id))}
        `:this.renderTemplate("value",this.response);return this.renderValueContentWithDefaultTemplate(n)}return this.response?this.renderTemplate("default",this.response)||Lt.qy``:this.hasTemplate("no-data")?this.renderTemplate("no-data",null):Lt.qy``}}refresh(n=!1){this.isRefreshing=!0,n&&this.clearState(),this._task.run()}clearState(){this.response=null}args(){return[this.providerState,this.resource,this.scopes,this.version,this.pollingRate,this.type,this.maxPages,this.cacheEnabled,this.cacheInvalidationPeriod]}renderValueContentWithDefaultTemplate(n){var o,p;if(this.hasTemplate("default")){const y=this.renderTemplate("default",this.response);return(null!==(p=null===(o=this.templates.value)||void 0===o?void 0:o.templateOrder)&&void 0!==p?p:999)>this.templates.default.templateOrder?Lt.qy`
          ${y}${n}
        `:Lt.qy`
          ${n}${y}
        `}return n}loadState(){var n,o,p;return function(u,l,n,o){return new(n||(n=Promise))(function(y,k){function z($e){try{xe(o.next($e))}catch(Ze){k(Ze)}}function fe($e){try{xe(o.throw($e))}catch(Ze){k(Ze)}}function xe($e){$e.done?y($e.value):function p(y){return y instanceof n?y:new n(function(k){k(y)})}($e.value).then(z,fe)}xe((o=o.apply(u,l||[])).next())})}(this,void 0,void 0,function*(){const y=xi.b.globalProvider;if(this.error=null,y&&y.state===Di.HJ.SignedIn){if(this.resource){try{let k;const z=`${this.version}${this.resource}`;let fe=null;if(this.shouldRetrieveCache()){k=qr._.getCache(Mo.j.get,Mo.j.get.stores.responses);const xe=Sd()?yield k.getValue(z):null;xe&&(u=>this.cacheInvalidationPeriod||qr._.config.response.invalidationPeriod||qr._.config.defaultInvalidationPeriod)()>Date.now()-xe.timeCached&&(fe=JSON.parse(xe.response))}if(!fe){let xe=this.resource,$e=!1;null!==(n=this.response)&&void 0!==n&&n["@odata.deltaLink"]?(xe=this.response["@odata.deltaLink"],$e=!0):$e=new URL(xe,"https://graph.microsoft.com").pathname.endsWith("delta");const Ze=y.graph.forComponent(this);let zt=Ze.api(xe).version(this.version);if(!(null===(o=this.scopes)||void 0===o)&&o.length&&(zt=zt.middlewareOptions((0,Rr.F)(this.scopes))),"json"===this.type){if(fe=yield zt.get(),$e&&ns(this.response)&&ns(fe)&&(fe.value=this.response.value.concat(fe.value)),!this.isPolling&&!(0,Ts.a)(this.response,fe)&&(this.response=fe),ns(fe)&&fe["@odata.nextLink"]){let Jt=1,ln=fe;for(;(Jt<this.maxPages||this.maxPages<=0||$e&&this.pollingRate)&&ln?.["@odata.nextLink"];){Jt++;const An=ln["@odata.nextLink"].split(this.version)[1];ln=yield Ze.api(An).version(this.version).get(),null!==(p=ln?.value)&&void 0!==p&&p.length&&(ln.value=fe.value.concat(ln.value),fe=ln,this.isPolling||(this.response=fe))}}}else{if(-1===this.resource.indexOf("/photo/$value")&&-1===this.resource.indexOf("/thumbnails/"))throw new Error("Only /photo/$value and /thumbnails/ endpoints support the image type");let Jt;if(this.resource.indexOf("/photo/$value")>-1){const ln=this.resource.replace("/photo/$value",""),An=yield(0,Bl.e_)(Ze,ln,this.scopes);An&&(Jt=An.photo)}else if(this.resource.indexOf("/thumbnails/")>-1){const ln=yield(0,th.W1)(Ze,this.resource,this.scopes);ln&&(Jt=ln.thumbnail)}Jt&&(fe={image:Jt})}this.shouldUpdateCache()&&fe&&(k=qr._.getCache(Mo.j.get,Mo.j.get.stores.responses),yield k.putValue(z,{response:JSON.stringify(fe)}))}(0,Ts.a)(this.response,fe)||(this.response=fe)}catch(k){this.error=k}this.response&&(this.error=null,this.pollingRate&&setTimeout(()=>{this.isPolling=!0,this.loadState().finally(()=>{this.isPolling=!1})},this.pollingRate))}else this.response=null;this.isRefreshing=!1,this.fireCustomEvent("dataChange",{response:this.response,error:this.error},!0,!1,!0)}})}shouldRetrieveCache(){return Sd()&&this.cacheEnabled&&!(this.isRefreshing||this.isPolling)}shouldUpdateCache(){return Sd()&&this.cacheEnabled}}return Qa([(0,Mt.MZ)({attribute:"resource",reflect:!0,type:String}),ua("design:type",String)],u.prototype,"resource",void 0),Qa([(0,Mt.MZ)({attribute:"scopes",converter:(l,n)=>l?l.toLowerCase().split(","):null,reflect:!0}),ua("design:type",Array)],u.prototype,"scopes",void 0),Qa([(0,Mt.MZ)({attribute:"version",reflect:!0,type:String}),ua("design:type",Object)],u.prototype,"version",void 0),Qa([(0,Mt.MZ)({attribute:"type",reflect:!0,type:String,converter:l=>((u,l="json")=>(u=>"string"==typeof u&&Bf.includes(u))(u)?u:l)(l,"json")}),ua("design:type",String)],u.prototype,"type",void 0),Qa([(0,Mt.MZ)({attribute:"max-pages",reflect:!0,type:Number}),ua("design:type",Object)],u.prototype,"maxPages",void 0),Qa([(0,Mt.MZ)({attribute:"polling-rate",reflect:!0,type:Number}),ua("design:type",Object)],u.prototype,"pollingRate",void 0),Qa([(0,Mt.MZ)({attribute:"cache-enabled",reflect:!0,type:Boolean}),ua("design:type",Object)],u.prototype,"cacheEnabled",void 0),Qa([(0,Mt.MZ)({attribute:"cache-invalidation-period",type:Number}),ua("design:type",Object)],u.prototype,"cacheInvalidationPeriod",void 0),Qa([(0,Mt.MZ)({attribute:!1}),ua("design:type",Object)],u.prototype,"response",void 0),Qa([(0,Mt.MZ)({attribute:!1}),ua("design:type",Object)],u.prototype,"error",void 0),u})();var Hl=d(6271),Oc=d(4166),ih=d(2898);const Ad=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .signed-in-person{--person-background-color:$signed-in-background-color;padding:var(--login-button-padding,10px 16px)}:host .account{padding:0;margin:7px 0}:host .account,:host .person,:host .signed-in-person{--person-avatar-size:var(--login-person-avatar-size, 40px)}:host fluent-button.signed-in{height:auto;min-width:auto}:host fluent-button.signed-in::part(control){width:100%;height:100%;padding:var(--login-button-padding,0);background:var(--login-signed-in-background,transparent);word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host fluent-button.signed-in::part(control):focus-within,:host fluent-button.signed-in::part(control):hover{background:var(--login-signed-in-hover-background,var(--neutral-fill-stealth-hover));--secondary-text-color:var(--secondary-text-hover-color)}:host fluent-button.signed-out::part(control){color:var(--login-signed-out-button-text-color,var(--neutral-fill-foreground-rest));background:var(--login-signed-out-button-background,padding-box linear-gradient(var(--neutral-fill-rest),var(--neutral-fill-rest)),border-box var(--neutral-stroke-control-rest))}:host fluent-button.signed-out::part(control):focus-within,:host fluent-button.signed-out::part(control):hover{background:var(--login-signed-out-button-hover-background,var(--neutral-fill-stealth-hover))}:host fluent-button.small::part(control):hover{background:0 0}:host fluent-button:focus-visible{outline-style:var(--focus-ring-style,auto)}:host fluent-card{--fill-color:var(--login-popup-background-color, var(--neutral-layer-1));padding:var(--login-popup-padding,16px)}:host .login-root .small .signed-in-person{padding:0;background:0 0}:host .login-root .small .signed-in-person:focus-within,:host .login-root .small .signed-in-person:hover{background:0 0}:host .login-root .account-list{padding:calc(var(--design-unit) * 1px) 0;margin:0}:host .login-root .account-item{height:auto;min-width:auto;margin-top:4px;background:var(--login-popup-background-color,var(--neutral-layer-1));list-style-type:none;cursor:pointer}:host .login-root .account-item:hover{background:var(--login-account-item-hover-bg-color,var(--neutral-fill-stealth-hover));--person-background-color:$login-account-item-hover-bg-color}:host .login-root .flyout .flyout-command{color:var(--login-flyout-command-text-color,var(--accent-foreground-rest))}:host .login-root .flyout .popup-content .commands{display:flex;align-items:flex-end;justify-content:flex-end}:host .login-root .flyout .popup-content .commands fluent-button::part(control){color:var(--login-command-button-text-color,var(--neutral-fill-foreground-rest));background:var(--login-command-button-background-color,var(--neutral-fill-stealth-rest));word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host .login-root .flyout .popup-content .commands fluent-button::part(control):hover{background:var(--login-command-button-hover-background-color,var(--neutral-fill-stealth-hover))}:host .login-root .flyout .popup-content .content .main-profile{margin-bottom:56px;margin-top:27px}:host .login-root .flyout .popup-content .add-account{padding-top:16px}:host .login-root .flyout .popup-content .add-account fluent-button::part(control){color:var(--login-add-account-button-text-color,var(--neutral-fill-foreground-rest));background:var(--login-add-account-button-background-color,var(--neutral-fill-stealth-rest));word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host .login-root .flyout .popup-content .add-account fluent-button::part(control):hover{background:var(--login-add-account-button-hover-background-color,var(--neutral-fill-stealth-hover))}
`],_m={signInLinkSubtitle:"Sign In",signOutLinkSubtitle:"Sign Out",signInWithADifferentAccount:"Sign in with a different account"};var Dt=d(742),rn=d(4192),an=d(9808),Pn=d(7153),Id=d(175),Qr=d(4632),rc=d(9482),no=d(1230),Hi=d(9605),gi=d(6105);function Vf(u){return(0,rc.sb)(u)&&("option"===u.getAttribute("role")||u instanceof HTMLOptionElement)}let rh=(()=>{class u extends Qr.g{constructor(n,o,p,y){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,n&&(this.textContent=n),o&&(this.initialValue=o),p&&(this.defaultSelected=p),y&&(this.selected=y),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(n,o){this.ariaChecked="boolean"!=typeof o?null:o?"true":"false"}contentChanged(n,o){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(n,o){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(n,o){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var n;return null!==(n=this.value)&&void 0!==n?n:this.text}get text(){var n,o;return null!==(o=null===(n=this.textContent)||void 0===n?void 0:n.replace(/\s+/g," ").trim())&&void 0!==o?o:""}set value(n){const o=`${n??""}`;this._value=o,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=o),rn.cP.notify(this,"value")}get value(){var n;return rn.cP.track(this,"value"),null!==(n=this._value)&&void 0!==n?n:this.text}get form(){return this.proxy?this.proxy.form:null}}return(0,Dt.Cg)([rn.sH],u.prototype,"checked",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"content",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"defaultSelected",void 0),(0,Dt.Cg)([(0,an.CF)({mode:"boolean"})],u.prototype,"disabled",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"selected",mode:"boolean"})],u.prototype,"selectedAttribute",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"selected",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"value",mode:"fromView"})],u.prototype,"initialValue",void 0),u})(),jf=(()=>{class u{}return(0,Dt.Cg)([rn.sH],u.prototype,"ariaChecked",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"ariaPosInSet",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"ariaSelected",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"ariaSetSize",void 0),u})();(0,gi.X)(jf,no.z),(0,gi.X)(rh,Hi.qw,jf);let Vl=(()=>{class u extends Qr.g{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var n;return null!==(n=this.selectedOptions[0])&&void 0!==n?n:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(n=>n.disabled)}get length(){var n,o;return null!==(o=null===(n=this.options)||void 0===n?void 0:n.length)&&void 0!==o?o:0}get options(){return rn.cP.track(this,"options"),this._options}set options(n){this._options=n,rn.cP.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(n){this.typeaheadExpired=n}clickHandler(n){const o=n.target.closest("option,[role=option]");if(o&&!o.disabled)return this.selectedIndex=this.options.indexOf(o),!0}focusAndScrollOptionIntoView(n=this.firstSelectedOption){this.contains(document.activeElement)&&null!==n&&(n.focus(),requestAnimationFrame(()=>{n.scrollIntoView({block:"nearest"})}))}focusinHandler(n){!this.shouldSkipFocus&&n.target===n.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const n=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`^${n}`,"gi");return this.options.filter(p=>p.text.trim().match(o))}getSelectableIndex(n=this.selectedIndex,o){const p=n>o?-1:n<o?1:0,y=n+p;let k=null;switch(p){case-1:k=this.options.reduceRight((z,fe,xe)=>!z&&!fe.disabled&&xe<y?fe:z,k);break;case 1:k=this.options.reduce((z,fe,xe)=>!z&&!fe.disabled&&xe>y?fe:z,k)}return this.options.indexOf(k)}handleChange(n,o){"selected"===o&&(u.slottedOptionFilter(n)&&(this.selectedIndex=this.options.indexOf(n)),this.setSelectedOptions())}handleTypeAhead(n){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,u.TYPE_AHEAD_TIMEOUT_MS),!(n.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${n}`)}keydownHandler(n){if(this.disabled)return!0;this.shouldSkipFocus=!1;const o=n.key;switch(o){case Pn.Tg:n.shiftKey||(n.preventDefault(),this.selectFirstOption());break;case Pn.HX:n.shiftKey||(n.preventDefault(),this.selectNextOption());break;case Pn.I5:n.shiftKey||(n.preventDefault(),this.selectPreviousOption());break;case Pn.FM:n.preventDefault(),this.selectLastOption();break;case Pn.J9:return this.focusAndScrollOptionIntoView(),!0;case Pn.Mm:case Pn.F9:return!0;case Pn.gG:if(this.typeaheadExpired)return!0;default:return 1===o.length&&this.handleTypeAhead(`${o}`),!0}}mousedownHandler(n){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(n,o){this.ariaMultiSelectable=o?"true":null}selectedIndexChanged(n,o){var p;if(this.hasSelectableOptions){if(null!==(p=this.options[this.selectedIndex])&&void 0!==p&&p.disabled&&"number"==typeof n){const y=this.getSelectableIndex(n,o),k=y>-1?y:n;return this.selectedIndex=k,void(o===k&&this.selectedIndexChanged(o,k))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(n,o){var p;const y=o.filter(u.slottedOptionFilter);null===(p=this.options)||void 0===p||p.forEach(k=>{const z=rn.cP.getNotifier(k);z.unsubscribe(this,"selected"),k.selected=y.includes(k),z.subscribe(this,"selected")})}selectFirstOption(){var n,o;this.disabled||(this.selectedIndex=null!==(o=null===(n=this.options)||void 0===n?void 0:n.findIndex(p=>!p.disabled))&&void 0!==o?o:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function Hf(u,l){let n=u.length;for(;n--;)if(l(u[n],n,u))return n;return-1}(this.options,n=>!n.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var n,o;this.selectedIndex=null!==(o=null===(n=this.options)||void 0===n?void 0:n.findIndex(p=>p.defaultSelected))&&void 0!==o?o:-1}setSelectedOptions(){var n,o,p;null!==(n=this.options)&&void 0!==n&&n.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(p=null===(o=this.firstSelectedOption)||void 0===o?void 0:o.id)&&void 0!==p?p:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(n,o){this.options=o.reduce((y,k)=>(Vf(k)&&y.push(k),y),[]);const p=`${this.options.length}`;this.options.forEach((y,k)=>{y.id||(y.id=(0,Id.NF)("option-")),y.ariaPosInSet=`${k+1}`,y.ariaSetSize=p}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(n,o){if(this.$fastController.isConnected){const p=this.getTypeaheadMatches();if(p.length){const y=this.options.indexOf(p[0]);y>-1&&(this.selectedIndex=y)}this.typeaheadExpired=!1}}}return u.slottedOptionFilter=l=>Vf(l)&&!l.hidden,u.TYPE_AHEAD_TIMEOUT_MS=1e3,(0,Dt.Cg)([(0,an.CF)({mode:"boolean"})],u.prototype,"disabled",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"selectedIndex",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"selectedOptions",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"slottedOptions",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"typeaheadBuffer",void 0),u})(),Pc=(()=>{class u{}return(0,Dt.Cg)([rn.sH],u.prototype,"ariaActiveDescendant",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"ariaDisabled",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"ariaExpanded",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"ariaMultiSelectable",void 0),u})();(0,gi.X)(Pc,no.z),(0,gi.X)(Vl,Pc);var mi=d(9953),Ro=d(633),Er=d(7788),Nc=d(7947);let Lc=(()=>{class u extends Vl{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var n;return null===(n=this.options)||void 0===n?void 0:n.filter(o=>o.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(n,o){var p,y;this.ariaActiveDescendant=null!==(y=null===(p=this.options[o])||void 0===p?void 0:p.id)&&void 0!==y?y:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const n=this.activeOption;n&&(n.checked=!0)}checkFirstOption(n=!1){n?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((o,p)=>{o.checked=(0,Nc.r4)(p,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(n=!1){n?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((o,p)=>{o.checked=(0,Nc.r4)(p,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(n=!1){n?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((o,p)=>{o.checked=(0,Nc.r4)(p,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(n=!1){n?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach((o,p)=>{o.checked=(0,Nc.r4)(p,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(n){var o;if(!this.multiple)return super.clickHandler(n);const p=null===(o=n.target)||void 0===o?void 0:o.closest("[role=option]");return p&&!p.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(p),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(n){if(!this.multiple)return super.focusinHandler(n);!this.shouldSkipFocus&&n.target===n.currentTarget&&(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(n){this.multiple&&this.uncheckAllOptions()}keydownHandler(n){if(!this.multiple)return super.keydownHandler(n);if(this.disabled)return!0;const{key:o,shiftKey:p}=n;switch(this.shouldSkipFocus=!1,o){case Pn.Tg:return void this.checkFirstOption(p);case Pn.HX:return void this.checkNextOption(p);case Pn.I5:return void this.checkPreviousOption(p);case Pn.FM:return void this.checkLastOption(p);case Pn.J9:return this.focusAndScrollOptionIntoView(),!0;case Pn.F9:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Pn.gG:if(n.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===o.length&&this.handleTypeAhead(`${o}`),!0}}mousedownHandler(n){if(n.offsetX>=0&&n.offsetX<=this.scrollWidth)return super.mousedownHandler(n)}multipleChanged(n,o){var p;this.ariaMultiSelectable=o?"true":null,null===(p=this.options)||void 0===p||p.forEach(y=>{y.checked=!o&&void 0}),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(n=>n.selected),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(n,o){var p;const y=Math.max(0,parseInt(null!==(p=o?.toFixed())&&void 0!==p?p:"",10));y!==o&&Er.dv.queueUpdate(()=>{this.size=y})}toggleSelectedForAllCheckedOptions(){const n=this.checkedOptions.filter(p=>!p.disabled),o=!n.every(p=>p.selected);n.forEach(p=>p.selected=o),this.selectedIndex=this.options.indexOf(n[n.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(n,o){if(this.multiple){if(this.$fastController.isConnected){const p=this.getTypeaheadMatches(),y=this.options.indexOf(p[0]);y>-1&&(this.activeIndex=y,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(n,o)}uncheckAllOptions(n=!1){this.options.forEach(o=>o.checked=!this.multiple&&void 0),n||(this.rangeStartIndex=-1)}}return(0,Dt.Cg)([rn.sH],u.prototype,"activeIndex",void 0),(0,Dt.Cg)([(0,an.CF)({mode:"boolean"})],u.prototype,"multiple",void 0),(0,Dt.Cg)([(0,an.CF)({converter:an.R$})],u.prototype,"size",void 0),u})();var _i=d(9760),Oo=d(8322),Et=d(9457),fl=d(5532);const Fc=class oc extends Vl{}.compose({baseName:"listbox",template:(u,l)=>mi.q`
    <template
        aria-activedescendant="${n=>n.ariaActiveDescendant}"
        aria-multiselectable="${n=>n.ariaMultiSelectable}"
        class="listbox"
        role="listbox"
        tabindex="${n=>n.disabled?null:"0"}"
        @click="${(n,o)=>n.clickHandler(o.event)}"
        @focusin="${(n,o)=>n.focusinHandler(o.event)}"
        @keydown="${(n,o)=>n.keydownHandler(o.event)}"
        @mousedown="${(n,o)=>n.mousedownHandler(o.event)}"
    >
        <slot
            ${(0,Ro.e)({filter:Lc.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,styles:(u,l)=>_i.A`
    ${(0,Oo.V)("inline-flex")} :host {
      border: calc(${Et.XAH} * 1px) solid ${Et.I21};
      border-radius: calc(${Et.PbG} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${Et.vR1} * 1px) 0;
    }

    ::slotted(${u.tagFor(rh)}) {
      margin: 0 calc(${Et.vR1} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${fl.W}
    }
  `});var oh=d(882),jl=d(7043),xd=d(9714),$c=function(u,l,n,o){var k,p=arguments.length,y=p<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(u,l,n,o);else for(var z=u.length-1;z>=0;z--)(k=u[z])&&(y=(p<3?k(y):p>3?k(l,n,y):k(l,n))||y);return p>3&&y&&Object.defineProperty(l,n,y),y},kd=function(u,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(u,l)},zf=function(u,l,n,o){return new(n||(n=Promise))(function(y,k){function z($e){try{xe(o.next($e))}catch(Ze){k(Ze)}}function fe($e){try{xe(o.throw($e))}catch(Ze){k(Ze)}}function xe($e){$e.done?y($e.value):function p(y){return y instanceof n?y:new n(function(k){k(y)})}($e.value).then(z,fe)}xe((o=o.apply(u,l||[])).next())})};let Uc=(()=>{class u extends Bs.N{static get styles(){return Ad}get strings(){return _m}get flyout(){return this.renderRoot.querySelector(".flyout")}static get requiredScopes(){return[...new Set(["user.read",...qa.O$.requiredScopes])]}get _userDetailsKey(){return"-userDetails"}constructor(){super(),this.showPresence=!1,this.loginView="full",this._arrowKeyLocation=-1,this.logout=()=>zf(this,void 0,void 0,function*(){if(!this.fireCustomEvent("logoutInitiated"))return;const n=xi.b.globalProvider;if(n?.logout){const o=n.getActiveAccount();yield n.logout(),this.userDetails=null,n.isMultiAccountSupportedAndEnabled&&localStorage.removeItem(o?.id+this._userDetailsKey),this.hideFlyout(),this.fireCustomEvent("logoutCompleted")}}),this.renderContent=()=>Lt.qy`
      <div class="login-root">
        ${this.renderButton()}
        ${this.renderFlyout()}
      </div>`,this.flyoutOpened=()=>{this._isFlyoutOpen=!0},this.flyoutClosed=()=>{this._isFlyoutOpen=!1},this.onUserKeyDown=n=>{if(!this.flyout.isOpen)return;const o=this.renderRoot.querySelector(".popup-content"),p=o.querySelectorAll("ul, fluent-button"),y=o.querySelector("#signout-button")||p[0],k=o.querySelector("#signin-different-account-button")||p[p.length-1];if("Tab"===n.key&&n.shiftKey&&y===n.target&&(n.preventDefault(),k?.focus()),"Tab"===n.key&&!n.shiftKey&&k===n.target&&(n.preventDefault(),y?.focus()),"Escape"===n.key){const fe=this.renderRoot.querySelector("#login-button");fe?.focus()}const z=this.renderRoot.querySelector("fluent-card");n.shiftKey&&"Tab"===n.key&&n.target===z&&this.hideFlyout()},this.handleAccountListKeyDown=n=>{const o=this.renderRoot.querySelector("ul.account-list");let p;const y=o?.children;for(const fe of y){const xe=fe;xe.setAttribute("tabindex","-1"),xe.blur()}const k=o.childElementCount,z=n.key;if("ArrowDown"===z)this._arrowKeyLocation=(this._arrowKeyLocation+1+k)%k;else if("ArrowUp"===z)this._arrowKeyLocation=(this._arrowKeyLocation-1+k)%k;else if("Tab"===z||"Escape"===z)return this._arrowKeyLocation=-1,o.blur(),void("Escape"===z&&(n.preventDefault(),n.stopPropagation()));this._arrowKeyLocation>-1&&(p=y[this._arrowKeyLocation],p.setAttribute("tabindex","1"),p.focus())},this.onClick=()=>{this.userDetails&&this._isFlyoutOpen?this.hideFlyout():this.userDetails?this.showFlyout():this.login()},this._isFlyoutOpen=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("click",n=>n.stopPropagation())}login(){return zf(this,void 0,void 0,function*(){const n=xi.b.globalProvider;(this.userDetails||!this.fireCustomEvent("loginInitiated"))&&!n.isMultiAccountSupportedAndEnabled||n?.login&&(yield n.login(),this.fireCustomEvent(n.state===Di.HJ.SignedIn?"loginCompleted":"loginFailed"))})}args(){return[this.providerState]}loadState(){return zf(this,void 0,void 0,function*(){const n=xi.b.globalProvider;n&&!this.userDetails&&(n.state===Di.HJ.SignedIn?(this.userDetails=yield(0,ih._)(n.graph.forComponent(this)),this.userDetails.personImage&&(this._image=this.userDetails.personImage),n.isMultiAccountSupportedAndEnabled&&localStorage.setItem(xi.b.globalProvider.getActiveAccount().id+this._userDetailsKey,JSON.stringify(this.userDetails)),this.fireCustomEvent("loginCompleted")):this.userDetails=null)})}renderButton(){var n;const o=(null===(n=xi.b.globalProvider)||void 0===n?void 0:n.state)===Di.HJ.SignedIn,p=(0,Ht.H)({"signed-in":o&&!!this.userDetails,"signed-out":!o,small:"avatar"===this.loginView}),y=o?"stealth":"neutral",k=o&&this.userDetails,z=k?this.renderSignedInButtonContent(this.userDetails,this._image):this.renderSignedOutButtonContent();return Lt.qy`
      <fluent-button
        id="login-button"
        aria-expanded="${(0,Hl.J)(k?this._isFlyoutOpen:void 0)}"
        appearance=${y}
        aria-label="${(0,Hl.J)(o?void 0:this.strings.signInLinkSubtitle)}"
        ?disabled=${this._task.status===xd.e1.PENDING}
        @click=${this.onClick}
        class=${p}>
          ${z}
      </fluent-button>`}renderFlyout(){return or.Q`
      <mgt-flyout
        class="flyout"
        light-dismiss
        @opened=${this.flyoutOpened}
        @closed=${this.flyoutClosed}>
        <fluent-card
          slot="flyout"
          tabindex="0"
          class="flyout-card"
          @keydown=${this.onUserKeyDown}
          >
          ${this.renderFlyoutContent()}
        </fluent-card>
      </mgt-flyout>`}renderFlyoutContent(){if(this.userDetails)return Lt.qy`
       <div class="popup">
         <div class="popup-content">
           <div class="commands">
             ${this.renderFlyoutCommands()}
           </div>
           <div class="content">
             <div class="main-profile">
               ${this.renderFlyoutPersonDetails(this.userDetails,this._image)}
             </div>
             ${this.renderAccounts()}
           </div>
           ${this.renderAddAccountContent()}
         </div>
       </div>
     `}get hasMultipleAccounts(){var n,o,p,y;return(null===(n=xi.b.globalProvider)||void 0===n?void 0:n.isMultiAccountSupportedAndEnabled)&&(null===(y=null===(p=null===(o=xi.b.globalProvider)||void 0===o?void 0:o.getAllAccounts)||void 0===p?void 0:p.call(o))||void 0===y?void 0:y.length)>1}get usesVerticalPersonCard(){return"full"===this.loginView||this.hasMultipleAccounts}renderFlyoutPersonDetails(n,o){return this.renderTemplate("flyout-person-details",{personDetails:n,personImage:o})||or.Q`
        <mgt-person
          .personDetails=${n}
          .personImage=${o}
          view="twolines"
          .line2Property=${"email"}
          ?vertical-layout=${this.usesVerticalPersonCard}
          class="person">
        </mgt-person>`}renderFlyoutCommands(){return this.renderTemplate("flyout-commands",{handleSignOut:()=>this.logout()})||Lt.qy`
        <fluent-button
          id="signout-button"
          appearance="stealth"
          size="medium"
          class="flyout-command"
          @click=${this.logout}
          aria-label=${this.strings.signOutLinkSubtitle}>
            ${this.strings.signOutLinkSubtitle}
        </fluent-button>`}renderButtonContent(){return this.userDetails?this.renderSignedInButtonContent(this.userDetails,this._image):this.renderSignedOutButtonContent()}renderAddAccountContent(){if(xi.b.globalProvider.isMultiAccountSupportedAndEnabled)return Lt.qy`
        <div class="add-account">
          <fluent-button
            id="signin-different-account-button"
            appearance="stealth"
            aria-label="${this.strings.signInWithADifferentAccount}"
            @click=${()=>{this.login()}}>
            <span slot="start"><i>${(0,Vn.r)(Vn.A.SelectAccount,"currentColor")}</i></span>
            ${this.strings.signInWithADifferentAccount}
          </fluent-button>
        </div>`}parsePersonDisplayConfiguration(){const n={view:"twolines",avatarSize:"small"};switch(this.loginView){case"avatar":n.view="image",n.avatarSize="small";break;case"compact":n.view="oneline",n.avatarSize="small";break;default:n.view="twolines",n.avatarSize="auto"}return n}renderSignedInButtonContent(n,o){const p=this.renderTemplate("signed-in-button-content",{personDetails:n,personImage:o}),y=this.parsePersonDisplayConfiguration();return p||or.Q`
        <mgt-person
          .personDetails=${this.userDetails}
          .personImage=${this._image}
          .view=${y.view}
          .showPresence=${this.showPresence}
          .avatarSize=${y.avatarSize}
          line2-property="email"
          class="signed-in-person"
        ></mgt-person>`}renderAccounts(){if(xi.b.globalProvider.state===Di.HJ.SignedIn&&xi.b.globalProvider.isMultiAccountSupportedAndEnabled){const n=xi.b.globalProvider,o=n.getAllAccounts();if(o?.length>1)return Lt.qy`
          <div id="accounts">
            <ul
              tabindex="0"
              class="account-list"
              part="account-list"
              aria-label="${this.ariaLabel}"
              @keydown=${this.handleAccountListKeyDown}
            >
              ${o.filter(p=>p.id!==n.getActiveAccount().id).map(p=>{const y=localStorage.getItem(p.id+this._userDetailsKey);return or.Q`
                    <li
                      tabindex="-1"
                      part="account-item"
                      class="account-item"
                      @click=${()=>this.setActiveAccount(p)}
                      @keyup=${k=>{"Enter"===k.key&&this.setActiveAccount(p)}}
                    >
                      <mgt-person
                        .personDetails=${y?JSON.parse(y):null}
                        .fallbackDetails=${{displayName:p.name,mail:p.mail}}
                        .view=${"twolines"}
                        class="account"
                      ></mgt-person>
                    </li>`})}
            </ul>
          </div>
       `}}setActiveAccount(n){xi.b.globalProvider.setActiveAccount(n)}clearState(){this.userDetails=null,this._image=null}renderSignedOutButtonContent(){return this.renderTemplate("signed-out-button-content",null)||Lt.qy`
        <span>${this.strings.signInLinkSubtitle}</span>`}showFlyout(){const n=this.flyout;n&&n.open()}hideFlyout(){const n=this.flyout;n&&n.close()}}return $c([(0,Mt.MZ)({attribute:"user-details",type:Object}),kd("design:type",Object)],u.prototype,"userDetails",void 0),$c([(0,Mt.MZ)({attribute:"show-presence",type:Boolean}),kd("design:type",Object)],u.prototype,"showPresence",void 0),$c([(0,Mt.MZ)({attribute:"login-view",type:String}),kd("design:type",String)],u.prototype,"loginView",void 0),$c([(0,Mt.wk)(),kd("design:type",Boolean)],u.prototype,"_isFlyoutOpen",void 0),$c([(0,Mt.wk)(),kd("design:type",Object)],u.prototype,"_arrowKeyLocation",void 0),u})();var sc=function(u,l,n,o){return new(n||(n=Promise))(function(y,k){function z($e){try{xe(o.next($e))}catch(Ze){k(Ze)}}function fe($e){try{xe(o.throw($e))}catch(Ze){k(Ze)}}function xe($e){$e.done?y($e.value):function p(y){return y instanceof n?y:new n(function(k){k(y)})}($e.value).then(z,fe)}xe((o=o.apply(u,l||[])).next())})};const Bc=["any","unified","security","mailenabledsecurity","distribution"],Md=u=>"string"==typeof u&&Bc.includes(u),Rd=(u,l="any")=>Md(u)?u:l,ah=()=>qr._.config.groups.invalidationPeriod||qr._.config.defaultInvalidationPeriod,fa=()=>qr._.config.groups.isEnabled&&qr._.config.isEnabled,ac=["GroupMember.Read.All","Group.Read.All","Directory.Read.All","Group.ReadWrite.All","Directory.ReadWrite.All"],Hs=(u,l,n=10,o=["any"],p="")=>sc(void 0,void 0,void 0,function*(){let y;const k=`${l||"*"}*${o.join("+")}*${p}:${n}`;if(fa()){y=qr._.getCache(Mo.j.groups,Mo.j.groups.stores.groupsQuery);const $e=yield y.getValue(k);if($e&&ah()>Date.now()-$e.timeCached&&$e.top>=n)return $e.groups.map(Ze=>JSON.parse(Ze)).slice(0,n+1)}let fe,z="";const xe=[];if(""!==l&&(z=`(startswith(displayName,'${l}') or startswith(mailNickname,'${l}') or startswith(mail,'${l}'))`),p&&(z+=`${l?" and ":""}${p}`),o.includes("any")){if(0===xe.length){const $e=yield u.api("groups").filter(z).top(n).count(!0).header("ConsistencyLevel","eventual").middlewareOptions((0,Rr.F)(ac)).get();return fa()&&$e&&(yield y.putValue(k,{groups:$e.value.map(Ze=>JSON.stringify(Ze)),top:n})),$e?$e.value:null}}else{const $e=u.createBatch(),Ze=[];o.includes("unified")&&Ze.push("groupTypes/any(c:c+eq+'Unified')"),o.includes("security")&&Ze.push("(mailEnabled eq false and securityEnabled eq true)"),o.includes("mailenabledsecurity")&&Ze.push("(mailEnabled eq true and securityEnabled eq true)"),o.includes("distribution")&&Ze.push("(mailEnabled eq true and securityEnabled eq false)"),z=z?`${z} and `:"";for(const zt of Ze)$e.get(zt,`/groups?$filter=${z+zt}`,ac);try{fe=yield $e.executeAll();for(const zt of Ze)if(fe.get(zt).content.value)for(const Jt of fe.get(zt).content.value)xe.find(An=>An.id===Jt.id)||xe.push(Jt)}catch{try{const Jt=[];for(const ln of Ze)Jt.push(u.api("groups").filter(`${z} and ${ln}`).top(n).count(!0).header("ConsistencyLevel","eventual").middlewareOptions((0,Rr.F)(ac)).get());return(yield Promise.all(Jt)).map(ln=>ln.value).reduce((ln,An)=>ln.concat(An),[])}catch{return[]}}}return xe}),Hc=(u,l,n)=>sc(void 0,void 0,void 0,function*(){let o;if(fa()){o=qr._.getCache(Mo.j.groups,Mo.j.groups.stores.groups);const k=yield o.getValue(l);if(k&&ah()>Date.now()-k.timeCached){const z=k.group?JSON.parse(k.group):null,fe=n&&z?n.filter(xe=>!Object.keys(z).includes(xe)):null;if(!fe||fe.length<=1)return z}}let p=`/groups/${l}`;n&&(p=p+"?$select="+n.toString());const y=yield u.api(p).middlewareOptions((0,Rr.F)(ac)).get();return fa()&&(yield o.putValue(l,{group:JSON.stringify(y)})),y}),Vc=(u,l,n="")=>sc(void 0,void 0,void 0,function*(){if(!l||0===l.length)return[];const o=u.createBatch(),p={},y=[];let k;fa()&&(k=qr._.getCache(Mo.j.groups,Mo.j.groups.stores.groups));for(const z of l){let fe;if(p[z]=null,fa()&&(fe=yield k.getValue(z)),fe&&ah()>Date.now()-fe.timeCached)p[z]=fe.group?JSON.parse(fe.group):null;else if(""!==z){let xe=`/groups/${z}`;n&&(xe=`${xe}?$filters=${n}`),o.get(z,xe,ac),y.push(z)}}try{const z=yield o.executeAll();for(const fe of l){const xe=z.get(fe);xe?.content&&(p[fe]=xe.content,fa()&&(yield k.putValue(fe,{group:JSON.stringify(xe.content)})))}return Promise.all(Object.values(p))}catch{try{return l.filter(fe=>y.includes(fe)).forEach(fe=>{p[fe]=Hc(u,fe)}),fa()&&(yield Promise.all(l.filter(fe=>y.includes(fe)).map(fe=>sc(void 0,void 0,void 0,function*(){return yield k.putValue(fe,{group:JSON.stringify(yield p[fe])})})))),Promise.all(Object.values(p))}catch{return[]}}});var er=d(3173);const lh=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{--person-details-wrapper-width:0;width:auto}:host fluent-text-field{width:100%;font-size:var(--people-picker-font-size, 14px)}:host fluent-text-field::part(root){display:flex;flex-wrap:wrap;height:auto;background:padding-box linear-gradient(var(--people-picker-input-background,var(--neutral-fill-input-rest)),var(--people-picker-input-background,var(--neutral-fill-input-rest))),border-box var(--people-picker-input-border-color,var(--neutral-stroke-input-rest))}:host fluent-text-field::part(root):hover{background:padding-box linear-gradient(var(--people-picker-input-hover-background,var(--neutral-fill-input-hover)),var(--people-picker-input-hover-background,var(--neutral-fill-input-hover))),border-box var(--people-picker-input-hover-border-color,var(--neutral-stroke-input-hover))}:host fluent-text-field::part(root):focus,:host fluent-text-field::part(root):focus-within{background:padding-box linear-gradient(var(--people-picker-input-focus-background,var(--neutral-fill-input-focus)),var(--people-picker-input-focus-background,var(--neutral-fill-input-focus))),border-box var(--people-picker-input-focus-border-color,var(--neutral-stroke-input-focus))}:host fluent-text-field::part(start){margin:unset}:host fluent-text-field::part(control){width:auto;flex-grow:1;min-width:25%;height:calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px);word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host fluent-text-field::part(control)::placeholder{color:var(--people-picker-input-placeholder-text-color,var(--input-placeholder-rest))}:host fluent-text-field::part(control):hover::placeholder{color:var(--people-picker-input-placeholder-hover-text-color,var(--input-placeholder-hover))}:host fluent-text-field::part(control):focus-within::placeholder,:host fluent-text-field::part(control):focus::placeholder{color:var(--people-picker-input-placeholder-focus-text-color,var(--input-placeholder-filled))}:host fluent-text-field .search-icon{display:flex;padding-top:10px;padding-inline-start:10px}:host fluent-text-field .search-icon svg path{fill:var(--people-picker-search-icon-color,currentColor)}:host .selected-list{display:flex;flex-wrap:wrap;column-gap:5px;padding:unset;margin:0 5px}:host .selected-list-item{display:flex;column-gap:5px;border-radius:100px;margin-top:3px;background-color:var(--people-picker-selected-option-background-color,var(--person-background-color,var(--neutral-layer-3)))}:host .selected-list-item.highlighted{background-color:var(--people-picker-selected-option-highlight-background-color,var(--accent-fill-rest))}:host .selected-list-item-close-icon{display:flex;justify-content:center;align-items:center;padding-inline-end:8px;cursor:pointer}:host .selected-list-item-close-icon svg path{fill:var(--people-picker-remove-selected-close-icon-color,currentColor)}:host .selected-list-item .person-image-selected{width:max-content;--person-avatar-size:var(--people-picker-selected-person-avatar-size, 24px)}:host fluent-card{margin-top:4px;background-color:var(--people-picker-dropdown-background-color,var(--fill-color))}:host .searched-people-list{list-style:none;padding:4px;margin:auto}:host .searched-people-list-result{padding:4px;border-radius:4px;background:var(--people-picker-dropdown-result-background-color,var(--person-background-color,transparent))}:host .searched-people-list-result:hover{background:var(--people-picker-dropdown-result-hover-background-color,var(--person-background-color,var(--neutral-fill-input-hover)))}:host .searched-people-list-result:focus,:host .searched-people-list-result:focus-within{background:var(--people-picker-dropdown-result-focus-background-color,var(--person-background-color,var(--neutral-fill-input-focus)))}:host .searched-people-list-result .person-image-result{--person-avatar-size:var(--people-picker-result-person-avatar-size, 40px)}:host .message-parent{display:flex;place-content:center;flex-direction:row;padding:10px 15px;column-gap:5px}:host .message-parent .loading-text,:host .message-parent .search-error-text{font-style:normal;font-weight:600;font-size:14px;line-height:19px;text-align:center;color:var(--people-picker-no-results-text-color,var(--neutral-foreground-hint))}
`];var Od=d(8955);const Wf={inputPlaceholderText:"Search for a name",maxSelectionsPlaceHolder:"Max contacts added",maxSelectionsAriaLabel:"Maximum contact selections reached",noResultsFound:"We didn't find any matches.",loadingMessage:"Loading...",selected:"selected",removeSelectedUser:"Remove ",selectContact:"select a contact",suggestionsTitle:"Suggested contacts"};var jc=d(1965),Kf=d(6199),Ki=function(u,l,n,o){var k,p=arguments.length,y=p<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(u,l,n,o);else for(var z=u.length-1;z>=0;z--)(k=u[z])&&(y=(p<3?k(y):p>3?k(l,n,y):k(l,n))||y);return p>3&&y&&Object.defineProperty(l,n,y),y},qi=function(u,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(u,l)},Za=function(u,l,n,o){return new(n||(n=Promise))(function(y,k){function z($e){try{xe(o.next($e))}catch(Ze){k(Ze)}}function fe($e){try{xe(o.throw($e))}catch(Ze){k(Ze)}}function xe($e){$e.done?y($e.value):function p(y){return y instanceof n?y:new n(function(k){k(y)})}($e.value).then(z,fe)}xe((o=o.apply(u,l||[])).next())})};const pl=()=>{(0,ts.E)(Od.oR,Ed.z1),(0,Oc.r)(),(0,qa.sN)(),(0,jc.i)(),(0,jo.N)("people-picker",qf)};let qf=(()=>{class u extends Bs.N{static get styles(){return lh}get strings(){return Wf}get flyout(){return this.renderRoot.querySelector(".flyout")}get input(){return this.renderRoot.querySelector("fluent-text-field")}get selectedPeople(){return this._selectedPeople}set selectedPeople(n){n||(n=[]),(0,Ts.V)(this._selectedPeople,n)||(this._selectedPeople=n,this.fireCustomEvent("selectionChanged",this._selectedPeople))}static get requiredScopes(){return[...new Set(["user.read.all","people.read","group.read.all","user.readbasic.all","contacts.read",...qa.O$.requiredScopes])]}constructor(){super(),this.groupIds=[],this.type="any",this.groupType=["any"],this.userType="any",this.transitiveSearch=!1,this.people=null,this.showMax=6,this.disableImages=!1,this.personCardInteraction="none",this.defaultSelectedUserIds=[],this.defaultSelectedGroupIds=[],this.disabled=!1,this.allowAnyEmail=!1,this.userIds=[],this.disableSuggestions=!1,this.userInput="",this._selectedPeople=[],this._arrowSelectionCount=-1,this.defaultSelectedUsers=[],this.defaultSelectedGroups=[],this._highlightedUsers=[],this._currentHighlightedUserPos=0,this._isFocused=!1,this._setAnyEmail=!1,this.handleSelectionChanged=()=>{0===this.selectedPeople.length&&!this.disabled&&this.enableTextInput()},this.renderLoading=()=>this.renderTemplate("loading",null)||or.Q`
         <div class="message-parent">
           <mgt-spinner></mgt-spinner>
           <div aria-label="${this.strings.loadingMessage}" class="loading-text">
             ${this.strings.loadingMessage}
           </div>
         </div>
       `,this.handleInputClick=()=>{this.flyout.isOpen||this.handleUserSearch()},this.gainedFocus=()=>{this.clearHighlighted(),this._isFocused=!0,this.loadState(),this.showFlyout()},this.lostFocus=()=>{this._isFocused=!1,this.input&&this.input.setAttribute("aria-activedescendant","");const n=this.renderRoot.querySelector(".people-list");if(n)for(const o of n.children)o.classList.remove("focused"),o.setAttribute("aria-selected","false");this.requestUpdate()},this.onUserKeyUp=n=>{const o=n.key,p=n.getModifierState("Control")||n.getModifierState("Meta"),y=p&&"v"===o,k=["ArrowDown","ArrowRight","ArrowUp","ArrowLeft"].includes(o);if(!y&&p||k)return(p||["ArrowLeft","ArrowRight"].includes(o))&&this.hideFlyout(),void("ArrowDown"===o&&!this.flyout.isOpen&&this._isFocused&&this.handleUserSearch());if(!["Tab","Enter","Shift"].includes(o)){if("Escape"===o)return this.clearInput(),this._foundPeople=[],void(this._arrowSelectionCount=-1);if("Backspace"===o&&0===this.userInput.length&&this.selectedPeople.length>0)return this.clearHighlighted(),this.selectedPeople=this.selectedPeople.splice(0,this.selectedPeople.length-1),this.loadState(),void this.hideFlyout();if([";",","].includes(o))return void(this.allowAnyEmail&&(this._setAnyEmail=!0,n.preventDefault(),n.stopPropagation()))}},this.onUserInput=n=>{this.userInput=n.target.value,this.userInput&&((0,er.B9)(this.userInput)&&this.allowAnyEmail?this._setAnyEmail&&this.handleAnyEmail():this.handleUserSearch(),this._setAnyEmail=!1)},this.onUserKeyDown=n=>{n.stopPropagation();const o=n.key,p=this.renderRoot.querySelector(".selected-list"),y=n.getModifierState("Control")||n.getModifierState("Meta");if(y&&p){const k=p.querySelectorAll("mgt-person.person-image-selected");if(this.hideFlyout(),y&&"ArrowLeft"===o)this._currentHighlightedUserPos=(this._currentHighlightedUserPos-1+k.length)%k.length,this._currentHighlightedUserPos>=0&&!Number.isNaN(this._currentHighlightedUserPos)?this._highlightedUsers.push(k[this._currentHighlightedUserPos]):this._currentHighlightedUserPos=0;else if(y&&"ArrowRight"===o){const z=this._highlightedUsers.pop();if(z){const fe=z.parentElement;fe&&(this.clearHighlighted(fe),this._currentHighlightedUserPos++)}}else y&&"a"===o&&(this._highlightedUsers=[],k.forEach(z=>this._highlightedUsers.push(z)));this._highlightedUsers&&this.highlightSelectedPeople(this._highlightedUsers)}else if(this.clearHighlighted(),this.flyout.isOpen){if(("ArrowUp"===o||"ArrowDown"===o)&&(this.handleArrowSelection(n),n.preventDefault()),"Enter"===o){if(!n.shiftKey&&this._foundPeople){n.preventDefault();const k=this._foundPeople[this._arrowSelectionCount];if(k)return this.addPerson(k),this.hideFlyout(),this.input.value="",void(this.hasMaxSelections&&this.disableTextInput())}this.allowAnyEmail?this.handleAnyEmail():this.showFlyout()}[";",",","Tab"].includes(o)&&this.allowAnyEmail&&("Tab"!==o&&n.preventDefault(),this.userInput=this.input.value,this.handleAnyEmail()),"Tab"===o&&this.hideFlyout()}},this.handleCut=()=>{this.writeHighlightedText().then(()=>{this.removeHighlightedOnCut()},()=>{})},this.handleCopy=()=>{this.writeHighlightedText()},this.handlePaste=()=>{navigator.clipboard.readText().then(n=>{if(n)try{const o=JSON.parse(n);if(o&&o.length>0)for(const p of o)this.addPerson(p)}catch(o){if(o instanceof SyntaxError){const p=[",",";"];let y;try{for(const k of p)if(y=n.split(k),y.length>1){this.hideFlyout(),this.selectUsersById(y);break}}catch{}}}},n=>{})},this.addEventListener("copy",this.handleCopy),this.addEventListener("cut",this.handleCut),this.addEventListener("paste",this.handlePaste),this.addEventListener("selectionChanged",this.handleSelectionChanged)}disableTextInput(){const n=this.input.shadowRoot.querySelector("input");n&&(n.setAttribute("disabled","true"),n.value="")}enableTextInput(){const n=this.input.shadowRoot.querySelector("input");n&&(n.removeAttribute("disabled"),n.focus())}get hasMaxSelections(){return"single"===this.selectionMode&&this.selectedPeople.length>=1}focus(n){this.input&&(this.input.focus(n),this.input.select())}selectUsersById(n){var o;return Za(this,void 0,void 0,function*(){const p=xi.b.globalProvider,y=xi.b.globalProvider.graph;if(p&&p.state===Di.HJ.SignedIn)for(const k in n){const z=n[k];try{const fe=yield(0,ko.wz)(y,z,qa.ge);this.addPerson(fe)}catch(fe){(0,Kf.Z)(fe)&&null!==(o=fe.message)&&void 0!==o&&o.includes("does not exist")&&this.allowAnyEmail&&(0,er.B9)(z)&&this.addPerson({mail:z,displayName:z})}}})}selectGroupsById(n){return Za(this,void 0,void 0,function*(){const o=xi.b.globalProvider,p=xi.b.globalProvider.graph;if(o&&o.state===Di.HJ.SignedIn)for(const y in n)try{const k=yield Hc(p,n[y]);this.addPerson(k)}catch{}})}render(){const n=this.renderTemplate("default",{people:this._foundPeople});if(n)return n;const o=this.renderSelectedPeople(this.selectedPeople),p=this.renderInput(o),y=this.renderFlyout(p);return Lt.qy`
      <div>
        ${y}
      </div>
    `}args(){return[this.providerState,this.groupId,this.groupIds,this.type,this.groupType,this.userType,this.transitiveSearch,this.people,this.showMax,this.defaultSelectedUserIds,this.defaultSelectedGroupIds,this.userIds,this.userFilters,this.peopleFilters,this.groupFilters]}clearState(){this.selectedPeople=[],this.userInput="",this._highlightedUsers=[],this._currentHighlightedUserPos=0}renderInput(n){var o,p,y;const k=this.disabled?"":this.placeholder||this.strings.inputPlaceholderText,z=this.hasMaxSelections?this.strings.maxSelectionsAriaLabel:"",fe=Lt.qy`<span class="search-icon">${(0,Vn.r)(Vn.A.Search)}</span>`,xe=(null===(o=this.selectedPeople)||void 0===o?void 0:o.length)>0?n:fe;return Lt.qy`
      <fluent-text-field
        autocomplete="off"
        appearance="outline"
        slot="anchor"
        id="people-picker-input"
        role="combobox"
        placeholder=${this.hasMaxSelections?this.strings.maxSelectionsPlaceHolder:k}
        aria-label=${this.ariaLabel||z||k||this.strings.selectContact}
        aria-expanded=${null!==(y=null===(p=this.flyout)||void 0===p?void 0:p.isOpen)&&void 0!==y&&y}
        @click="${this.hasMaxSelections?void 0:this.handleInputClick}"
        @focus="${this.hasMaxSelections?void 0:this.gainedFocus}"
        @keydown="${this.hasMaxSelections?void 0:this.onUserKeyDown}"
        @input="${this.hasMaxSelections?void 0:this.onUserInput}"
        @blur="${this.lostFocus}"
        ?disabled=${this.disabled}
      >
        <span slot="start">${xe}</span>
      </fluent-text-field>
    `}renderSelectedPeople(n){return n?.length?Lt.qy`
       <ul
        id="selected-list"
        aria-label="${this.strings.selected}"
        class="selected-list">
          ${(0,xo.u)(n,o=>o?.id,o=>{var p;return Lt.qy`
            <li class="selected-list-item">
              ${this.renderTemplate("selected-person",{person:o},`selected-${o?.id?o.id:o.displayName}`)||this.renderSelectedPerson(o)}

              <div
                role="button"
                tabindex="0"
                class="selected-list-item-close-icon"
                aria-label="${this.strings.removeSelectedUser}${null!==(p=o?.displayName)&&void 0!==p?p:""}"
                @click="${y=>this.removePerson(o,y)}"
                @keydown="${y=>this.handleRemovePersonKeyDown(o,y)}">
                  ${(0,Vn.r)(Vn.A.Close)}
              </div>
          </li>`})}
      </ul>`:Lt.qy``}renderFlyout(n){return or.Q`
       <mgt-flyout light-dismiss class="flyout">
         ${n}
         <fluent-card
          tabindex="0"
          slot="flyout"
          class="flyout-root"
          @wheel=${o=>this.handleSectionScroll(o)}
          @keydown=${o=>this.onUserKeyDown(o)}
          class="custom">
           ${this.renderFlyoutContent()}
         </fluent-card>
       </mgt-flyout>
     `}renderFlyoutContent(){if(this._task.status===xd.e1.PENDING)return this.renderLoading();const n=this._foundPeople;return n&&0!==n.length&&0!==this.showMax?this.renderSearchResults(n):this.renderNoData()}renderNoData(){if(this._isFocused)return this.renderTemplate("error",null)||this.renderTemplate("no-data",null)||Lt.qy`
         <div class="message-parent">
           <div aria-label=${this.strings.noResultsFound} class="search-error-text">
             ${this.strings.noResultsFound}
           </div>
         </div>
       `}renderSearchResults(n){const o=n.filter(p=>p.id);return Lt.qy`
      <ul
        id="suggestions-list"
        class="searched-people-list"
        role="listbox"
        aria-live="polite"
        title=${this.strings.suggestionsTitle}
      >
        ${(0,xo.u)(o,p=>p.id,p=>Lt.qy`
          <li
            id="${p.id}"
            class="searched-people-list-result"
            role="option"
            @click="${()=>this.handleSuggestionClick(p)}">
              ${this.renderPersonResult(p)}
          </li>
        `)}
      </ul>
     `}renderPersonResult(n){return this.renderTemplate("person",{person:n},n.id)||or.Q`
         <mgt-person
          class="person-image-result"
          ?show-presence=${this.showPresence}
          view="twolines"
          line2-property="jobTitle,mail"
          .personDetails=${n}
          ?fetch-image=${!this.disableImages}
          person-card="none"
        ></mgt-person>`}renderSelectedPerson(n){return or.Q`
       <mgt-person
         class="person-image-selected"
         .personDetails=${n}
         ?fetch-image=${!this.disableImages}
         view="oneline"
         person-card=${this.personCardInteraction}
        ></mgt-person>
     `}loadState(){var n,o;return Za(this,void 0,void 0,function*(){this._groupPeople=null,this._foundPeople=null,this.defaultPeople=null;let p=this.people;const y=this.userInput.toLowerCase(),k=xi.b.globalProvider;if(p?.length)y&&(p=p.filter(fe=>fe?.displayName.toLowerCase().includes(y)));else if(!p&&k&&k.state===Di.HJ.SignedIn){const z=k.graph.forComponent(this);if(!y.length){if(this.disableSuggestions)return void(this._foundPeople=[]);if(this.defaultPeople)p=this.defaultPeople;else{if(this.groupId||this.groupIds.length){if(null===this._groupPeople)if(this.groupId)try{this._groupPeople="group"===this.type?yield(0,ko.sb)(z,null,this.groupId,this.showMax,this.type,this.transitiveSearch):yield(0,ko.sb)(z,null,this.groupId,this.showMax,this.type,this.transitiveSearch,this.userFilters,this.peopleFilters)}catch{this._groupPeople=[]}else if("group"===this.type)try{this._groupPeople=yield Vc(z,this.groupIds,this.groupFilters)}catch{this._groupPeople=[]}else try{const fe=yield(0,ko.fp)(z,"",this.groupIds,this.showMax,this.type,this.transitiveSearch,this.userFilters);this._groupPeople=fe}catch{this._groupPeople=[]}p=this._groupPeople||[]}else if("person"===this.type||"any"===this.type)p=this.userIds.length?yield(0,ko.$q)(z,this.userIds,"",this.userFilters):!this.userFilters||"user"!==this.userType&&"contact"!==this.userType?yield(0,Gn.cB)(z,this.userType,this.peopleFilters,this.showMax):yield(0,ko.lo)(z,this.userFilters,this.showMax);else if("group"===this.type){let fe=(yield Hs(z,"",this.showMax,this.groupType,this.groupFilters))||[];fe.length>0&&fe[0].value&&(fe=fe[0].value),p=fe}this.defaultPeople=p}}if((this.defaultSelectedUserIds.length>0||this.defaultSelectedGroupIds.length>0)&&!this.selectedPeople.length&&!this.defaultSelectedUsers.length&&!this.defaultSelectedGroups.length&&(this.defaultSelectedUsers=yield(0,ko.$q)(z,this.defaultSelectedUserIds,"",this.userFilters),this.defaultSelectedGroups=yield Vc(z,this.defaultSelectedGroupIds,this.peopleFilters),this.defaultSelectedGroups=this.defaultSelectedGroups.filter(fe=>null!==fe),this.defaultSelectedUsers=this.defaultSelectedUsers.filter(fe=>null!==fe),this.selectedPeople=[...this.defaultSelectedUsers,...this.defaultSelectedGroups],this.hasMaxSelections&&this.disableTextInput(),this.requestUpdate()),y)if(p=[],this.groupId)p=(yield(0,ko.sb)(z,y,this.groupId,this.showMax,this.type,this.transitiveSearch,this.userFilters,this.peopleFilters))||[];else{if("person"===this.type||"any"===this.type){try{if("contact"===this.userType||"user"===this.userType)p=null!==(n=this.userIds)&&void 0!==n&&n.length?yield(0,ko.$q)(z,this.userIds,y,this.userFilters):yield(0,ko.Ei)(z,y,this.showMax,this.userFilters);else if(this.groupIds.length)try{p=yield(0,ko.fp)(z,y,this.groupIds,this.showMax,this.type,this.transitiveSearch,this.userFilters)}catch{}else p=null!==(o=this.userIds)&&void 0!==o&&o.length?yield(0,ko.$q)(z,this.userIds,y,this.userFilters):(yield(0,Gn.lq)(z,y,this.showMax,this.userType,this.peopleFilters))||[]}catch{}if(p&&p.length<this.showMax&&"contact"!==this.userType&&"person"!==this.type)try{const fe=(yield(0,ko.Ei)(z,y,this.showMax,this.userFilters))||[],xe=new Set(p.map($e=>$e.id));for(const $e of fe)xe.has($e.id)||p.push($e)}catch{}}if(("group"===this.type||"any"===this.type)&&p.length<this.showMax)if(this.groupIds.length)try{p=yield((u,l,n,o=10,p=["any"],y="")=>sc(void 0,void 0,void 0,function*(){const k=[],z=yield Hs(u,l,o,p,y);if(z)for(const fe of z)fe.id&&n.includes(fe.id)&&k.push(fe);return k}))(z,y,this.groupIds,this.showMax,this.groupType,this.userFilters)}catch{}else{let fe=[];try{fe=(yield Hs(z,y,this.showMax,this.groupType,this.groupFilters))||[],p=p.concat(fe)}catch{}}}}this._foundPeople=this.filterPeople(p)})}getGroupsForGroupIds(n,o){return Za(this,void 0,void 0,function*(){const p=yield Vc(n,this.groupIds,this.groupFilters);for(const y of p)o=o.concat(y);return o=o.filter(y=>y)})}hideFlyout(){const n=this.flyout;n&&n.close(),this.input&&this.input.setAttribute("aria-activedescendant",""),this._arrowSelectionCount=-1}showFlyout(){const n=this.flyout;n&&n.open(),this._arrowSelectionCount=-1}removePerson(n,o){o.stopPropagation();const p=this.selectedPeople.filter(y=>!n.id&&y.displayName?y.displayName!==n.displayName:y.id!==n.id);this.selectedPeople=p,this.loadState()}handleRemovePersonKeyDown(n,o){"Enter"===o.key&&(this.removePerson(n,o),this.enableTextInput())}addPerson(n){n&&(setTimeout(()=>{this.clearInput()},50),0===this.selectedPeople.filter(p=>!n.id&&p.displayName?p.displayName===n.displayName:p.id===n.id).length&&(this.selectedPeople=[...this.selectedPeople,n],this.loadState(),this._foundPeople=[],this._arrowSelectionCount=-1),this.enableTextInput())}clearInput(){this.clearHighlighted(),"single"!==this.selectionMode&&(this.input.value=""),this.userInput=""}handleAnyEmail(){this._arrowSelectionCount=-1,(0,er.B9)(this.userInput)&&this.addPerson({mail:this.userInput,displayName:this.userInput}),this.hideFlyout(),this.input&&(this.input.focus(),this._isFocused=!0)}handleSuggestionClick(n){this.addPerson(n),this.hasMaxSelections&&(this.disableTextInput(),this.input.value=""),this.hideFlyout()}handleUserSearch(){this._debouncedSearch||(this._debouncedSearch=(0,er.sg)(()=>Za(this,void 0,void 0,function*(){yield this._task.run(),this._arrowSelectionCount=-1,this.showFlyout()}),400)),this._debouncedSearch()}writeHighlightedText(){return Za(this,void 0,void 0,function*(){const n=[];for(const p of this._highlightedUsers){const{id:y,displayName:k,mail:z,userPrincipalName:fe,scoredEmailAddresses:xe}=p._personDetails;let $e;$e=xe&&xe.length>0?xe.pop().address:fe||z,n.push({id:y,displayName:k,email:$e})}let o="";n.length>0&&(o=JSON.stringify(n)),yield navigator.clipboard.writeText(o)})}removeHighlightedOnCut(){this.selectedPeople=this.selectedPeople.splice(0,this.selectedPeople.length-this._highlightedUsers.length),this._highlightedUsers=[],this._currentHighlightedUserPos=0,this.loadState(),this.hideFlyout()}highlightSelectedPeople(n){for(const o of n)(o?.parentElement).classList.add("highlighted")}clearHighlighted(n){if(n)n.classList.remove("highlighted");else{for(const o of this._highlightedUsers){const p=o.parentElement;p&&p.classList.remove("highlighted")}this._highlightedUsers=[],this._currentHighlightedUserPos=0}}handleArrowSelection(n){var o,p;const y=this.renderRoot.querySelector(".searched-people-list");if(null!==(o=y?.children)&&void 0!==o&&o.length){n&&("ArrowUp"===n.key&&(this._arrowSelectionCount=-1===this._arrowSelectionCount?0:(this._arrowSelectionCount-1+y.children.length)%y.children.length),"ArrowDown"===n.key&&(this._arrowSelectionCount=-1===this._arrowSelectionCount?0:(this._arrowSelectionCount+1+y.children.length)%y.children.length));for(const z of null!==(p=y?.children)&&void 0!==p?p:[]){const fe=z;fe.setAttribute("aria-selected","false"),fe.blur(),fe.removeAttribute("tabindex")}const k=y.children[this._arrowSelectionCount];k&&(k.setAttribute("tabindex","0"),k.focus(),k.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"}),k.setAttribute("aria-selected","true"),this.input.setAttribute("aria-activedescendant",k?.id))}}filterPeople(n){const o=[];if(n&&n.length>0){n=n.filter(z=>z);const p=this.selectedPeople.map(z=>z.id?z.id:z.displayName),y=n.filter(z=>z?.id?-1===p.indexOf(z.id):-1===p.indexOf(z?.displayName)),k=new Set;for(const z of y){const fe=JSON.stringify(z);k.add(fe)}k.forEach(z=>{const fe=JSON.parse(z);o.push(fe)})}return o}handleSectionScroll(n){const o=this.renderRoot.querySelector(".flyout-root");o&&!(n.deltaY<0&&0===o.scrollTop)&&!(n.deltaY>0&&o.clientHeight+o.scrollTop>=o.scrollHeight-1)&&n.stopPropagation()}}return Ki([(0,Mt.MZ)({attribute:"group-id",converter:l=>l.trim()}),qi("design:type",String)],u.prototype,"groupId",void 0),Ki([(0,Mt.MZ)({attribute:"group-ids",converter:l=>l.split(",").map(n=>n.trim())}),qi("design:type",Array)],u.prototype,"groupIds",void 0),Ki([(0,Mt.MZ)({attribute:"type",converter:l=>(0,Gn.ys)(l,"any")}),qi("design:type",String)],u.prototype,"type",void 0),Ki([(0,Mt.MZ)({attribute:"group-type",converter:l=>{const n=["any"];if(!l||0===l.length)return n;const o=l.split(","),p=[];for(let y of o)y=y.trim(),Md(y)&&p.push(Rd(y));return 0===p.length?n:p}}),qi("design:type",Array)],u.prototype,"groupType",void 0),Ki([(0,Mt.MZ)({attribute:"user-type",converter:l=>(0,Gn.we)(l)}),qi("design:type",String)],u.prototype,"userType",void 0),Ki([(0,Mt.MZ)({attribute:"transitive-search",type:Boolean}),qi("design:type",Object)],u.prototype,"transitiveSearch",void 0),Ki([(0,Mt.MZ)({attribute:"people",type:Object}),qi("design:type",Array)],u.prototype,"people",void 0),Ki([(0,Mt.MZ)({attribute:"show-max",type:Number}),qi("design:type",Object)],u.prototype,"showMax",void 0),Ki([(0,Mt.MZ)({attribute:"disable-images",type:Boolean}),qi("design:type",Object)],u.prototype,"disableImages",void 0),Ki([(0,Mt.MZ)({attribute:"show-presence",type:Boolean}),qi("design:type",Boolean)],u.prototype,"showPresence",void 0),Ki([(0,Mt.MZ)({attribute:"person-card",converter:l=>(0,$f.e)(l)}),qi("design:type",String)],u.prototype,"personCardInteraction",void 0),Ki([(0,Mt.MZ)({attribute:"selected-people",type:Array}),qi("design:type",Array),qi("design:paramtypes",[Array])],u.prototype,"selectedPeople",null),Ki([(0,Mt.MZ)({attribute:"default-selected-user-ids",converter:l=>l.split(",").map(n=>n.trim()),type:String}),qi("design:type",Array)],u.prototype,"defaultSelectedUserIds",void 0),Ki([(0,Mt.MZ)({attribute:"default-selected-group-ids",converter:l=>l.split(",").map(n=>n.trim()),type:String}),qi("design:type",Array)],u.prototype,"defaultSelectedGroupIds",void 0),Ki([(0,Mt.MZ)({attribute:"placeholder",type:String}),qi("design:type",String)],u.prototype,"placeholder",void 0),Ki([(0,Mt.MZ)({attribute:"disabled",type:Boolean}),qi("design:type",Object)],u.prototype,"disabled",void 0),Ki([(0,Mt.MZ)({attribute:"allow-any-email",type:Boolean}),qi("design:type",Object)],u.prototype,"allowAnyEmail",void 0),Ki([(0,Mt.MZ)({attribute:"selection-mode",type:String}),qi("design:type",String)],u.prototype,"selectionMode",void 0),Ki([(0,Mt.MZ)({attribute:"user-ids",converter:l=>l.split(",").map(n=>n.trim()),type:String}),qi("design:type",Array)],u.prototype,"userIds",void 0),Ki([(0,Mt.MZ)({attribute:"user-filters"}),qi("design:type",String)],u.prototype,"userFilters",void 0),Ki([(0,Mt.MZ)({attribute:"people-filters"}),qi("design:type",String)],u.prototype,"peopleFilters",void 0),Ki([(0,Mt.MZ)({attribute:"group-filters"}),qi("design:type",String)],u.prototype,"groupFilters",void 0),Ki([(0,Mt.MZ)({attribute:"aria-label",type:String}),qi("design:type",String)],u.prototype,"ariaLabel",void 0),Ki([(0,Mt.MZ)({attribute:"disable-suggestions",type:Boolean}),qi("design:type",Object)],u.prototype,"disableSuggestions",void 0),Ki([(0,Mt.wk)(),qi("design:type",Object)],u.prototype,"userInput",void 0),Ki([(0,Mt.wk)(),qi("design:type",Object)],u.prototype,"_arrowSelectionCount",void 0),Ki([(0,Mt.wk)(),qi("design:type",Array)],u.prototype,"_highlightedUsers",void 0),Ki([(0,Mt.wk)(),qi("design:type",Object)],u.prototype,"_isFocused",void 0),Ki([(0,Mt.wk)(),qi("design:type",Object)],u.prototype,"_setAnyEmail",void 0),Ki([(0,Mt.wk)(),qi("design:type",Array)],u.prototype,"_foundPeople",void 0),u})();const Qf=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{background-color:var(--tasks-background-color,transparent);padding:var(--tasks-padding,12px);border:var(--tasks-border,0);border-radius:var(--tasks-border-radius,0);--skeleton-fill:var(--neutral-foreground-active)}:host .header{display:flex;align-items:center;justify-content:space-between;padding:var(--tasks-header-padding,0 0 14px 0);margin:var(--tasks-header-padding,0 0 14px 0);font-size:var(--tasks-header-font-size, 16px);font-weight:var(--tasks-header-font-weight,600);color:var(--tasks-header-text-color,var(--neutral-foreground-hint))}:host .header:hover{color:var(--tasks-header-text-hover-color,var(--neutral-foreground-hover))}:host .header .title{justify-content:left;display:flex;align-items:center}:host .header .title .shimmer{width:80px;height:20px}:host .header .title svg{margin-top:3px;padding:0 4px;width:16px;height:16px}:host .header .new-task-button{justify-content:right}:host .header .new-task-button .shimmer{width:40px;height:24px}:host .header .new-task-button::part(control){font-weight:var(--tasks-new-button-text-font-weight,700);color:var(--tasks-new-button-text-color,var(--foreground-on-accent-rest));width:var(--tasks-new-button-width,none);height:var(--tasks-new-button-height,none);background:var(--tasks-new-button-background,padding-box linear-gradient(var(--accent-fill-rest),var(--accent-fill-rest)),border-box var(--accent-stroke-control-rest))}:host .header .new-task-button::part(control):hover{background:var(--tasks-new-button-background-hover,var(--accent-fill-hover))}:host .header .new-task-button::part(control):active{background:var(--tasks-new-button-background-active,var(--accent-fill-active))}:host .tasks{display:flex;flex-direction:column;row-gap:var(--tasks-gap,20px)}:host .tasks .task{display:flex;column-gap:4px;align-items:flex-start;justify-content:space-between}:host .tasks .task.updating{background:var(--neutral-stroke-rest)!important;pointer-events:none;opacity:.4}:host .tasks .task.complete{border:var(--task-complete-border,2px dotted var(--neutral-foreground-active));border-radius:var(--task-complete-border-radius,4px);background:var(--task-complete-background-color,transparent);padding:var(--task-complete-padding,10px)}:host .tasks .task.incomplete{border:var(--task-incomplete-border,1px solid var(--neutral-foreground-active));border-radius:var(--task-complete-border-radius,4px);background:var(--task-incomplete-background-color,var(--neutral-layer-1));padding:var(--task-incomplete-padding,10px)}:host .tasks .task .task-details-container{display:flex;flex-direction:column;row-gap:12px;width:100%}:host .tasks .task .task-details-container .top{display:flex;justify-content:space-between;column-gap:4px}:host .tasks .task .task-details-container .top.add-new-task{flex-direction:row}:host .tasks .task .task-details-container .top .check-and-title{display:flex;align-items:flex-start;flex-direction:column;width:100%;row-gap:12px}:host .tasks .task .task-details-container .top .check-and-title.shimmer{display:flex;flex-direction:inherit;gap:10px}:host .tasks .task .task-details-container .top .check-and-title.shimmer .checkbox{height:10px;width:10px}:host .tasks .task .task-details-container .top .check-and-title.shimmer .title{height:10px;width:100%}:host .tasks .task .task-details-container .top .check-and-title .task-content{display:grid;grid-template-columns:repeat(auto-fit,250px);gap:12px;justify-content:start;width:100%}:host .tasks .task .task-details-container .top .check-and-title .task-content .picker{max-width:250px}:host .tasks .task .task-details-container .top .check-and-title .task-content .task-due fluent-text-field.dark::part(control){color-scheme:dark}:host .tasks .task .task-details-container .top .task-options .options{height:10px;width:20px}:host .tasks .task .task-details-container .top .task-options.new-task-action-buttons{display:flex;flex-direction:column;row-gap:12px}:host .tasks .task .task-details-container .bottom{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;grid-column-gap:6px}:host .tasks .task .task-details-container .bottom .task-bucket,:host .tasks .task .task-details-container .bottom .task-due,:host .tasks .task .task-details-container .bottom .task-group{display:flex;align-items:center;gap:6px}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon,:host .tasks .task .task-details-container .bottom .task-due .task-icon,:host .tasks .task .task-details-container .bottom .task-group .task-icon{display:flex;place-content:center;width:var(--task-icons-width,20px);height:var(--task-icons-height,20px)}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon .shimmer.icon,:host .tasks .task .task-details-container .bottom .task-due .task-icon .shimmer.icon,:host .tasks .task .task-details-container .bottom .task-group .task-icon .shimmer.icon{width:20px;height:20px}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon svg,:host .tasks .task .task-details-container .bottom .task-due .task-icon svg,:host .tasks .task .task-details-container .bottom .task-group .task-icon svg{width:var(--task-icons-width,20px);height:var(--task-icons-height,20px)}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon svg path,:host .tasks .task .task-details-container .bottom .task-due .task-icon svg path,:host .tasks .task .task-details-container .bottom .task-group .task-icon svg path{fill:var(--task-icons-background-color,var(--neutral-foreground-hint))}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon-text,:host .tasks .task .task-details-container .bottom .task-due .task-icon-text,:host .tasks .task .task-details-container .bottom .task-group .task-icon-text{color:var(--task-icons-text-font-color,var(--neutral-foreground-hint));font-size:var(--task-icons-text-font-size, 12px);font-weight:var(--task-icons-text-font-weight,600);white-space:normal;width:100%}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon-text .shimmer.text,:host .tasks .task .task-details-container .bottom .task-due .task-icon-text .shimmer.text,:host .tasks .task .task-details-container .bottom .task-group .task-icon-text .shimmer.text{width:100%;height:10px}:host .tasks .task .task-details-container .task-details{display:flex;flex-direction:column;row-gap:8px}:host .tasks .task .task-details-container .task-details.shimmer{flex-direction:row;place-items:center;column-gap:6px}:host .tasks .task .task-details-container .task-details.shimmer .shimmer.icon{width:24px;height:24px}:host .tasks .task .task-details-container .task-details.shimmer .shimmer.text{width:100%;height:10px}:host .tasks .task .task-details-container .task-details .task-title{color:var(--foreground-on-neutral-rest)}:host .tasks .task .task-details-container .task-details .task-body{display:flex}:host fluent-button.add-task::part(control){font-weight:var(--task-add-new-button-text-font-weight,initial);color:var(--task-add-new-button-text-color,var(--neutral-foreground-rest));width:var(--task-add-new-button-width,none);height:var(--task-add-new-button-height,none);background:var(--task-add-new-button-background,padding-box linear-gradient(var(--neutral-fill-active),var(--neutral-fill-active)),border-box var(--neutral-stroke-control-active));border:var(--task-add-new-button-border,calc(var(--stroke-width) * 1px) solid transparent)}:host fluent-button.add-task::part(control):hover{background:var(--task-add-new-button-background-hover,padding-box linear-gradient(var(--neutral-fill-hover),var(--neutral-fill-hover)),border-box var(--neutral-stroke-control-hover))}:host fluent-button.add-task::part(control):active{background:var(--task-add-new-button-background-active,padding-box linear-gradient(var(--neutral-fill-active),var(--neutral-fill-active)),border-box var(--neutral-stroke-control-active))}:host fluent-button.cancel-task::part(control){font-weight:var(--task-cancel-new-button-text-font-weight,initial);color:var(--task-cancel-new-button-text-color,var(--neutral-foreground-rest));width:var(--task-cancel-new-button-width,none);height:var(--task-cancel-new-button-height,none);background:var(--task-cancel-new-button-background,padding-box linear-gradient(var(--neutral-fill-active),var(--neutral-fill-active)),border-box var(--neutral-stroke-control-active));border:var(--task-cancel-new-button-border,calc(var(--stroke-width) * 1px) solid transparent)}:host fluent-button.cancel-task::part(control):hover{background:var(--task-cancel-new-button-background-hover,padding-box linear-gradient(var(--neutral-fill-hover),var(--neutral-fill-hover)),border-box var(--neutral-stroke-control-hover))}:host fluent-button.cancel-task::part(control):active{background:var(--task-cancel-new-button-background-active,padding-box linear-gradient(var(--neutral-fill-active),var(--neutral-fill-active)),border-box var(--neutral-stroke-control-active))}:host fluent-option{background:var(--task-new-dropdown-list-background-color,var(--fill-color))}:host fluent-option:hover{background:var(--task-new-dropdown-option-hover-background-color,var(--neutral-fill-stealth-hover))}:host fluent-option::part(content){color:var(--task-new-dropdown-option-text-color,var(--neutral-foreground-rest))}:host fluent-select::part(listbox){background:var(--task-new-dropdown-list-background-color,var(--fill-color))}:host fluent-select::part(control){border:var(--task-new-dropdown-border,calc(var(--stroke-width) * 1px) solid transparent);border-radius:var(--task-new-dropdown-border-radius,calc(var(--control-corner-radius) * 1px));background:var(--task-new-dropdown-background-color,padding-box linear-gradient(var(--neutral-fill-input-rest),var(--neutral-fill-input-rest)),border-box var(--neutral-stroke-input-rest))}:host fluent-select::part(control):hover{background:var(--task-new-dropdown-hover-background-color,padding-box linear-gradient(var(--neutral-fill-input-hover),var(--neutral-fill-input-hover)),border-box var(--neutral-stroke-input-hover))}:host fluent-select::part(control)::placeholder{color:var(--task-new-dropdown-placeholder-color,var(--input-placeholder-rest))}:host fluent-checkbox{padding-top:1px}:host fluent-checkbox::part(control){border-radius:50%;background:var(--task-incomplete-checkbox-background-color,var(--neutral-fill-input-alt-rest))}:host fluent-checkbox::part(control):hover{background:var(--task-incomplete-checkbox-background-hover-color,var(--neutral-fill-input-alt-hover))}:host fluent-checkbox::part(label){font-size:var(--task-title-text-font-size, medium);font-weight:var(--task-title-text-font-weight,600);color:var(--task-incomplete-title-text-color,var(var(--neutral-foreground-rest)))}:host fluent-checkbox.checked::part(control){background:var(--task-complete-checkbox-background-color,var(--accent-fill-rest));color:var(--task-complete-checkbox-text-color,currentColor)}:host fluent-checkbox.checked::part(label){text-decoration:line-through;color:var(--task-complete-title-text-color,var(--neutral-foreground-hint))}:host fluent-text-field.new-task{width:100%}:host fluent-text-field.new-task::part(root){border:var(--task-new-input-border,calc(var(--stroke-width) * 1px) solid transparent);border-radius:var(--task-new-input-border-radius,calc(var(--control-corner-radius) * 1px));background:var(--task-new-input-background-color,padding-box linear-gradient(var(--neutral-fill-input-rest),var(--neutral-fill-input-rest)),border-box var(--neutral-stroke-input-rest))}:host fluent-text-field.new-task::part(root):hover{background:var(--task-new-input-hover-background-color,padding-box linear-gradient(var(--neutral-fill-input-hover),var(--neutral-fill-input-hover)),border-box var(--neutral-stroke-input-hover))}:host fluent-text-field.new-task::part(root)::placeholder{color:var(--task-new-input-placeholder-color,var(--input-placeholder-rest))}:host .people [slot=no-data] fluent-button::part(control){color:var(--task-new-person-icon-text-color,var(--neutral-foreground-hint))}:host .people [slot=no-data] svg{fill:var(--task-new-person-icon-color,var(--neutral-foreground-hint))}@media only screen and (width <= 600px){:host fluent-select{width:100%}:host .tasks .task .task-details-container .bottom{display:grid;grid-auto-flow:row;grid-auto-columns:unset;row-gap:4px}:host .tasks .task .task-details-container .bottom .ask-bucket,:host .tasks .task .task-details-container .bottom .ask-due,:host .tasks .task .task-details-container .bottom .ask-group{margin-inline-start:8px}:host .tasks .task .task-details-container .top.add-new-task{flex-direction:column;row-gap:12px}:host .tasks .task .task-details-container .top.add-new-task .check-and-title .task-content{display:grid;grid-auto-flow:row;row-gap:12px;width:100%}:host .tasks .task .task-details-container .top.add-new-task .task-options.new-task-action-buttons{flex-direction:row;column-gap:4px}}
`],Xf={removeTaskSubtitle:"Delete Task",cancelNewTaskSubtitle:"Cancel",newTaskPlaceholder:"Adding a task...",addTaskButtonSubtitle:"Add",due:"Due ",addTaskDate:"Add the task date",assign:"Assign",planNotFound:"Plan not found",plansSelfAssigned:"All Plans",bucketNotFound:"Bucket not found",bucketsSelfAssigned:"All Tasks",baseSelfAssigned:"Assigned to Me"};class ka extends hl{static fromGraph(l){const n=new ka(l.client);return n.setComponent(l.componentName),n}constructor(l,n="beta"){super(l,n)}forComponent(l){const n=new ka(this.client);return this.setComponent(l),n}}var tr=function(u,l,n,o){return new(n||(n=Promise))(function(y,k){function z($e){try{xe(o.next($e))}catch(Ze){k(Ze)}}function fe($e){try{xe(o.throw($e))}catch(Ze){k(Ze)}}function xe($e){$e.done?y($e.value):function p(y){return y instanceof n?y:new n(function(k){k(y)})}($e.value).then(z,fe)}xe((o=o.apply(u,l||[])).next())})};const ch=["Tasks.ReadWrite","Group.ReadWrite.All"],cc=["Tasks.Read","Group.Read.All","Tasks.ReadWrite","Group.ReadWrite.All"],Nd=(u,l,n)=>tr(void 0,void 0,void 0,function*(){let o;try{o=yield u.api(`/planner/tasks/${l.id}`).header("Cache-Control","no-store").middlewareOptions((0,Rr.F)(ch)).header("Prefer","return=representation").header("If-Match",l.eTag).update(n)}catch{}return o});var Ma=function(u,l,n,o){return new(n||(n=Promise))(function(y,k){function z($e){try{xe(o.next($e))}catch(Ze){k(Ze)}}function fe($e){try{xe(o.throw($e))}catch(Ze){k(Ze)}}function xe($e){$e.done?y($e.value):function p(y){return y instanceof n?y:new n(function(k){k(y)})}($e.value).then(z,fe)}xe((o=o.apply(u,l||[])).next())})};class Jf{constructor(l){this.graph=ka.fromGraph(l)}}class xm extends Jf{getTaskGroups(){return Ma(this,void 0,void 0,function*(){return(yield(u=this.graph,tr(void 0,void 0,void 0,function*(){const l=yield u.api("/me/planner/plans").header("Cache-Control","no-store").middlewareOptions((0,Rr.F)(cc)).get();return l?.value}))).map(n=>{var o;return{id:n.id,title:n.title,containerId:null===(o=n?.container)||void 0===o?void 0:o.containerId}});var u})}getTaskGroupsForGroup(l){return Ma(this,void 0,void 0,function*(){return(yield((u,l)=>tr(void 0,void 0,void 0,function*(){const n=`/groups/${l}/planner/plans`,o=yield u.api(n).header("Cache-Control","no-store").middlewareOptions((0,Rr.F)(cc)).get();return o?.value}))(this.graph,l)).map(o=>({id:o.id,title:o.title}))})}getTaskGroup(l){return Ma(this,void 0,void 0,function*(){const n=yield((u,l)=>tr(void 0,void 0,void 0,function*(){return yield u.api(`/planner/plans/${l}`).header("Cache-Control","no-store").middlewareOptions((0,Rr.F)(cc)).get()}))(this.graph,l);return{id:n.id,title:n.title,_raw:n}})}getTaskFoldersForTaskGroup(l){return Ma(this,void 0,void 0,function*(){return(yield((u,l)=>tr(void 0,void 0,void 0,function*(){const n=yield u.api(`/planner/plans/${l}/buckets`).header("Cache-Control","no-store").middlewareOptions((0,Rr.F)(cc)).get();return n?.value}))(this.graph,l)).map(o=>({_raw:o,id:o.id,name:o.name,parentId:o.planId}))})}getTasksForTaskFolder(l){return Ma(this,void 0,void 0,function*(){return(yield((u,l)=>tr(void 0,void 0,void 0,function*(){const n=yield u.api(`/planner/buckets/${l}/tasks`).header("Cache-Control","no-store").middlewareOptions((0,Rr.F)(cc)).get();return n?.value}))(this.graph,l)).map(o=>({_raw:o,assignments:o.assignments,completed:100===o.percentComplete,dueDate:o.dueDateTime&&new Date(o.dueDateTime),eTag:o["@odata.etag"],id:o.id,immediateParentId:o.bucketId,name:o.title,topParentId:o.planId}))})}setTaskComplete(l){return Ma(this,void 0,void 0,function*(){return yield((u,l)=>tr(void 0,void 0,void 0,function*(){yield Nd(u,l,{percentComplete:100})}))(this.graph,l)})}setTaskIncomplete(l){return Ma(this,void 0,void 0,function*(){return((u,l)=>tr(void 0,void 0,void 0,function*(){yield Nd(u,l,{percentComplete:0})}))(this.graph,l)})}addTask(l){var n;return Ma(this,void 0,void 0,function*(){return yield((u,l)=>tr(void 0,void 0,void 0,function*(){return yield u.api("/planner/tasks").header("Cache-Control","no-store").middlewareOptions((0,Rr.F)(ch)).post(l)}))(this.graph,{assignments:l.assignments,bucketId:l.immediateParentId,dueDateTime:null===(n=l.dueDate)||void 0===n?void 0:n.toISOString(),planId:l.topParentId,title:l.name})})}assignPeopleToTask(l,n){return Ma(this,void 0,void 0,function*(){return((u,l,n)=>tr(void 0,void 0,void 0,function*(){yield Nd(u,l,{assignments:n,appliedCategories:{category4:!0}})}))(this.graph,l,n)})}removeTask(l){return Ma(this,void 0,void 0,function*(){return yield((u,l)=>tr(void 0,void 0,void 0,function*(){yield u.api(`/planner/tasks/${l.id}`).header("Cache-Control","no-store").header("If-Match",l.eTag).middlewareOptions((0,Rr.F)(ch)).delete()}))(this.graph,l)})}isAssignedToMe(l,n){return Object.keys(l.assignments).includes(n)}}var ep=d(8313),io=d(4585);const tp=u=>{const l=Et.li_.getValueFor(u);return(0,ep.H)(io.q.create(l,l,l))};var hh=d(1635),zc=d(8746);class np extends Lc{}class Ss extends((0,zc.rf)(np)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}let Fd=(()=>{class u extends Ss{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=(0,Id.NF)("listbox-"),this.maxHeight=0}openChanged(n,o){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void Er.dv.queueUpdate(()=>this.focus());this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return rn.cP.track(this,"value"),this._value}set value(n){var o,p,y,k,z,fe,xe;const $e=`${this._value}`;if(null!==(o=this._options)&&void 0!==o&&o.length){const Ze=this._options.findIndex(ln=>ln.value===n),zt=null!==(y=null===(p=this._options[this.selectedIndex])||void 0===p?void 0:p.value)&&void 0!==y?y:null,Jt=null!==(z=null===(k=this._options[Ze])||void 0===k?void 0:k.value)&&void 0!==z?z:null;(-1===Ze||zt!==Jt)&&(n="",this.selectedIndex=Ze),n=null!==(xe=null===(fe=this.firstSelectedOption)||void 0===fe?void 0:fe.value)&&void 0!==xe?xe:n}$e!==n&&(this._value=n,super.valueChanged($e,n),rn.cP.notify(this,"value"),this.updateDisplayValue())}updateValue(n){var o,p;this.$fastController.isConnected&&(this.value=null!==(p=null===(o=this.firstSelectedOption)||void 0===o?void 0:o.value)&&void 0!==p?p:""),n&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(n,o){super.selectedIndexChanged(n,o),this.updateValue()}positionChanged(n,o){this.positionAttribute=o,this.setPositioning()}setPositioning(){const n=this.getBoundingClientRect(),p=window.innerHeight-n.bottom;this.position=this.forcedPosition?this.positionAttribute:n.top>p?"above":"below",this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight="above"===this.position?~~n.top:~~p}get displayValue(){var n,o;return rn.cP.track(this,"displayValue"),null!==(o=null===(n=this.firstSelectedOption)||void 0===n?void 0:n.text)&&void 0!==o?o:""}disabledChanged(n,o){super.disabledChanged&&super.disabledChanged(n,o),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(n){if(!this.disabled){if(this.open){const o=n.target.closest("option,[role=option]");if(o&&o.disabled)return}return super.clickHandler(n),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(n){var o;if(super.focusoutHandler(n),!this.open)return!0;const p=n.relatedTarget;this.isSameNode(p)?this.focus():null!==(o=this.options)&&void 0!==o&&o.includes(p)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(n,o){super.handleChange(n,o),"value"===o&&this.updateValue()}slottedOptionsChanged(n,o){this.options.forEach(p=>{rn.cP.getNotifier(p).unsubscribe(this,"value")}),super.slottedOptionsChanged(n,o),this.options.forEach(p=>{rn.cP.getNotifier(p).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(n){var o;return n.offsetX>=0&&n.offsetX<=(null===(o=this.listbox)||void 0===o?void 0:o.scrollWidth)?super.mousedownHandler(n):this.collapsible}multipleChanged(n,o){super.multipleChanged(n,o),this.proxy&&(this.proxy.multiple=o)}selectedOptionsChanged(n,o){var p;super.selectedOptionsChanged(n,o),null===(p=this.options)||void 0===p||p.forEach((y,k)=>{var z;const fe=null===(z=this.proxy)||void 0===z?void 0:z.options.item(k);fe&&(fe.selected=y.selected)})}setDefaultSelectedOption(){var n;const o=null!==(n=this.options)&&void 0!==n?n:Array.from(this.children).filter(Vl.slottedOptionFilter),p=o?.findIndex(y=>y.hasAttribute("selected")||y.selected||y.value===this.value);this.selectedIndex=-1===p?0:p}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(n=>{const o=n.proxy||(n instanceof HTMLOptionElement?n.cloneNode():null);o&&this.proxy.options.add(o)}))}keydownHandler(n){super.keydownHandler(n);const o=n.key||n.key.charCodeAt(0);switch(o){case Pn.gG:n.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case Pn.Tg:case Pn.FM:n.preventDefault();break;case Pn.Mm:n.preventDefault(),this.open=!this.open;break;case Pn.F9:this.collapsible&&this.open&&(n.preventDefault(),this.open=!1);break;case Pn.J9:return this.collapsible&&this.open&&(n.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(o===Pn.HX||o===Pn.I5)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(n,o){super.sizeChanged(n,o),this.proxy&&(this.proxy.size=o)}updateDisplayValue(){this.collapsible&&rn.cP.notify(this,"displayValue")}}return(0,Dt.Cg)([(0,an.CF)({attribute:"open",mode:"boolean"})],u.prototype,"open",void 0),(0,Dt.Cg)([rn.Jg],u.prototype,"collapsible",null),(0,Dt.Cg)([rn.sH],u.prototype,"control",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"position"})],u.prototype,"positionAttribute",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"position",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"maxHeight",void 0),u})(),km=(()=>{class u{}return(0,Dt.Cg)([rn.sH],u.prototype,"ariaControls",void 0),u})();(0,gi.X)(km,Pc),(0,gi.X)(Fd,Hi.qw,km);var is=d(8287),ro=d(1589),vr=d(4932),dc=d(5778),Vs=d(4954),En=d(3226),rp=d(2783),jr=d(4583),uc=d(2622),pa=d(9709),Mm=d(6009),ga=d(3928);const zl=".control",gl=":not([disabled]):not([open])",fh="[disabled]",op=(u,l)=>_i.A`
    ${(0,Oo.V)("inline-flex")}
    
    :host {
      border-radius: calc(${Et.PbG} * 1px);
      box-sizing: border-box;
      color: ${Et.lHw};
      fill: currentcolor;
      font-family: ${Et.OCo};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${rp.H0};
      background: ${Et.pfK};
      border-radius: calc(${Et.JUW} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${jr.D} * 1px));
      padding: calc((${Et.vR1} - ${Et.XAH} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${Et.XAH} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${Et.XAH} * 1px) solid transparent;
      border-radius: calc(${Et.PbG} * 1px);
      height: calc(${jr.D} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${pa.Ah}
      min-height: 100%;
      padding: 0 calc(${Et.vR1} * 2.25px);
      width: 100%;
    }

    :host(:${vr.N}) {
      ${fl.W}
    }

    :host([disabled]) .control {
      cursor: ${dc.Z};
      opacity: ${Et.qB4};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${jr.D} + ${Et.vR1} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${jr.D} + ${Et.vR1} * 2) * 1px);
    }

    .selected-value {
      font-family: inherit;
      flex: 1 1 auto;
      text-align: start;
    }

    .indicator {
      flex: 0 0 auto;
      margin-inline-start: 1em;
    }

    slot[name='listbox'] {
      display: none;
      width: 100%;
    }

    :host([open]) slot[name='listbox'] {
      display: flex;
      position: absolute;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }

    .start,
    .end,
    .indicator,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([role='option']) {
      flex: 0 0 auto;
    }
  `,gh=(()=>{class u extends Fd{appearanceChanged(n,o){n!==o&&(this.classList.add(o),this.classList.remove(n))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&Et.pfK.setValueFor(this.listbox,Et.Tkp)}}return(0,hh.Cg)([(0,an.CF)({mode:"fromView"})],u.prototype,"appearance",void 0),u})().compose({baseName:"select",baseClass:Fd,template:(u,l)=>mi.q`
    <template
        class="${n=>[n.collapsible&&"collapsible",n.collapsible&&n.open&&"open",n.disabled&&"disabled",n.collapsible&&n.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${n=>n.ariaActiveDescendant}"
        aria-controls="${n=>n.ariaControls}"
        aria-disabled="${n=>n.ariaDisabled}"
        aria-expanded="${n=>n.ariaExpanded}"
        aria-haspopup="${n=>n.collapsible?"listbox":null}"
        aria-multiselectable="${n=>n.ariaMultiSelectable}"
        ?open="${n=>n.open}"
        role="combobox"
        tabindex="${n=>n.disabled?null:"0"}"
        @click="${(n,o)=>n.clickHandler(o.event)}"
        @focusin="${(n,o)=>n.focusinHandler(o.event)}"
        @focusout="${(n,o)=>n.focusoutHandler(o.event)}"
        @keydown="${(n,o)=>n.keydownHandler(o.event)}"
        @mousedown="${(n,o)=>n.mousedownHandler(o.event)}"
    >
        ${(0,is.z)(n=>n.collapsible,mi.q`
                <div
                    class="control"
                    part="control"
                    ?disabled="${n=>n.disabled}"
                    ${(0,ro.K)("control")}
                >
                    ${(0,Hi.LT)(u,l)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${n=>n.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${l.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${(0,Hi.aO)(u,l)}
                </div>
            `)}
        <div
            class="listbox"
            id="${n=>n.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${n=>n.disabled}"
            ?hidden="${n=>!!n.collapsible&&!n.open}"
            ${(0,ro.K)("listbox")}
        >
            <slot
                ${(0,Ro.e)({filter:Vl.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(u,l)=>op().withBehaviors((0,uc.f)("outline",(0,Mm._9)(u,l,gl,fh)),(0,uc.f)("filled",(0,ga.dM)(u,l,zl,gl).withBehaviors((0,Vs.mr)((0,ga.lb)(u,l,zl,gl)))),(0,uc.f)("stealth",(0,Mm.ss)(u,l,gl,fh)),(0,Vs.mr)(_i.A`
    :host([open]) .listbox {
      background: ${En.A.ButtonFace};
      border-color: ${En.A.CanvasText};
    }
  `)),indicator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  '});class hc{constructor(l,n){this.cache=new WeakMap,this.ltr=l,this.rtl=n}bind(l){this.attach(l)}unbind(l){const n=this.cache.get(l);n&&Et.oWd.unsubscribe(n)}attach(l){const n=this.cache.get(l)||new sp(this.ltr,this.rtl,l),o=Et.oWd.getValueFor(l);Et.oWd.subscribe(n),n.attach(o),this.cache.set(l,n)}}class sp{constructor(l,n,o){this.ltr=l,this.rtl=n,this.source=o,this.attached=null}handleChange({token:n}){this.attach(n.getValueFor(this.source))}attach(l){this.attached!==this[l]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[l],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const fc=rh.compose({baseName:"option",template:(u,l)=>mi.q`
    <template
        aria-checked="${n=>n.ariaChecked}"
        aria-disabled="${n=>n.ariaDisabled}"
        aria-posinset="${n=>n.ariaPosInSet}"
        aria-selected="${n=>n.ariaSelected}"
        aria-setsize="${n=>n.ariaSetSize}"
        class="${n=>[n.checked&&"checked",n.selected&&"selected",n.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${(0,Hi.LT)(u,l)}
        <span class="content" part="content">
            <slot ${(0,Ro.e)("content")}></slot>
        </span>
        ${(0,Hi.aO)(u,l)}
    </template>
`,styles:(u,l)=>_i.A`
    ${(0,Oo.V)("inline-flex")} :host {
      position: relative;
      ${pa.Ah}
      background: ${Et.WlO};
      border-radius: calc(${Et.PbG} * 1px);
      border: calc(${Et.XAH} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${Et.lHw};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${jr.D} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${Et.vR1} * 3) - ${Et.XAH} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${Et.vdx} - ${Et.XAH}) * 1px);
      top: calc((${jr.D} / 4) - ${Et.vdx} * 1px);
      width: 3px;
      height: calc((${jr.D} / 2) * 1px);
      background: transparent;
      border-radius: calc(${Et.PbG} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${Et.oO8};
    }

    :host(:not([disabled]):active) {
      background: ${Et.wOW};
    }

    :host(:not([disabled]):active)::before {
      background: ${Et.IRh};
      height: calc(((${jr.D} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${Et.IRh};
    }

    :host(:${vr.N}) {
      ${fl.W}
      background: ${Et.UBo};
    }

    :host([aria-selected='true']) {
      background: ${Et.v8G};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${Et.Rgz};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${Et.DKg};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${Et.oO8};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${Et.wOW};
    }

    :host([disabled]) {
      cursor: ${dc.Z};
      opacity: ${Et.qB4};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([slot='end']) {
      margin-inline-start: 1ch;
    }

    ::slotted([slot='start']) {
      margin-inline-end: 1ch;
    }
  `.withBehaviors(new hc(null,_i.A`
      :host::before {
        right: calc((${Et.vdx} - ${Et.XAH}) * 1px);
      }
    `),(0,Vs.mr)(_i.A`
        :host {
          background: ${En.A.ButtonFace};
          border-color: ${En.A.ButtonFace};
          color: ${En.A.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${En.A.Highlight};
          color: ${En.A.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${En.A.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${En.A.Canvas};
          color: ${En.A.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host(:${vr.N}) {
          outline-color: ${En.A.CanvasText};
        }
      `))});var lp=d(9684),cp=d(5017);const dp={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"};var ml=d(9748);const Wc=u=>{const l=u.closest("[dir]");return null!==l&&"rtl"===l.dir?ml.O.rtl:ml.O.ltr};let Co=(()=>{class u extends Qr.g{constructor(){super(...arguments),this.role="menuitem",this.hasSubmenu=!1,this.currentDirection=ml.O.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=n=>{if(n.defaultPrevented)return!1;switch(n.key){case Pn.Mm:case Pn.gG:return this.invoke(),!1;case Pn.bb:return this.expandAndFocus(),!1;case Pn.kT:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=n=>(n.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=n=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=n=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case"menuitemcheckbox":this.checked=!this.checked;break;case"menuitem":this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case"menuitemradio":this.checked||(this.checked=!0)}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(n=>"menu"===n.getAttribute("role")),this.hasSubmenu=void 0!==this.submenu}}expandedChanged(n){if(this.$fastController.isConnected){if(void 0===this.submenu)return;!1===this.expanded?this.submenu.collapseExpandedItem():this.currentDirection=Wc(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(n,o){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),Er.dv.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,void 0!==this.observer&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(n=>!n.hasAttribute("hidden"))}}return(0,Dt.Cg)([(0,an.CF)({mode:"boolean"})],u.prototype,"disabled",void 0),(0,Dt.Cg)([(0,an.CF)({mode:"boolean"})],u.prototype,"expanded",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"startColumnCount",void 0),(0,Dt.Cg)([an.CF],u.prototype,"role",void 0),(0,Dt.Cg)([(0,an.CF)({mode:"boolean"})],u.prototype,"checked",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"submenuRegion",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"hasSubmenu",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"currentDirection",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"submenu",void 0),u})();(0,gi.X)(Co,Hi.qw);let Bd=(()=>{class u extends Qr.g{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>null!==this.parentElement&&(0,rc.sb)(this.parentElement)&&"menuitem"===this.parentElement.getAttribute("role"),this.handleFocusOut=n=>{if(!this.contains(n.relatedTarget)&&void 0!==this.menuItems){this.collapseExpandedItem();const o=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[o].setAttribute("tabindex","0"),this.focusIndex=o}},this.handleItemFocus=n=>{const o=n.target;void 0!==this.menuItems&&o!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(o),o.setAttribute("tabindex","0"))},this.handleExpandedChanged=n=>{if(n.defaultPrevented||null===n.target||void 0===this.menuItems||this.menuItems.indexOf(n.target)<0)return;n.preventDefault();const o=n.target;null===this.expandedItem||o!==this.expandedItem||!1!==o.expanded?o.expanded&&(null!==this.expandedItem&&this.expandedItem!==o&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=o,this.focusIndex=this.menuItems.indexOf(o),o.setAttribute("tabindex","0")):this.expandedItem=null},this.removeItemListeners=()=>{void 0!==this.menuItems&&this.menuItems.forEach(n=>{n.removeEventListener("expanded-change",this.handleExpandedChanged),n.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{const n=this.domChildren();this.removeItemListeners(),this.menuItems=n;const o=this.menuItems.filter(this.isMenuItemElement);o.length&&(this.focusIndex=0);const y=o.reduce((k,z)=>{const fe=function p(k){const z=k.getAttribute("role"),fe=k.querySelector("[slot=start]");return"menuitem"!==z&&null===fe||"menuitem"===z&&null!==fe?1:"menuitem"!==z&&null!==fe?2:0}(z);return k>fe?k:fe},0);o.forEach((k,z)=>{k.setAttribute("tabindex",0===z?"0":"-1"),k.addEventListener("expanded-change",this.handleExpandedChanged),k.addEventListener("focus",this.handleItemFocus),(k instanceof Co||"startColumnCount"in k)&&(k.startColumnCount=y)})},this.changeHandler=n=>{if(void 0===this.menuItems)return;const o=n.target,p=this.menuItems.indexOf(o);if(-1!==p&&"menuitemradio"===o.role&&!0===o.checked){for(let k=p-1;k>=0;--k){const z=this.menuItems[k],fe=z.getAttribute("role");if("menuitemradio"===fe&&(z.checked=!1),"separator"===fe)break}const y=this.menuItems.length-1;for(let k=p+1;k<=y;++k){const z=this.menuItems[k],fe=z.getAttribute("role");if("menuitemradio"===fe&&(z.checked=!1),"separator"===fe)break}}},this.isMenuItemElement=n=>(0,rc.sb)(n)&&u.focusableElementRoles.hasOwnProperty(n.getAttribute("role")),this.isFocusableElement=n=>this.isMenuItemElement(n)}itemsChanged(n,o){this.$fastController.isConnected&&void 0!==this.menuItems&&this.setItems()}connectedCallback(){super.connectedCallback(),Er.dv.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){null!==this.expandedItem&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(n){if(!n.defaultPrevented&&void 0!==this.menuItems)switch(n.key){case Pn.HX:return void this.setFocus(this.focusIndex+1,1);case Pn.I5:return void this.setFocus(this.focusIndex-1,-1);case Pn.FM:return void this.setFocus(this.menuItems.length-1,-1);case Pn.Tg:return void this.setFocus(0,1);default:return!0}}domChildren(){return Array.from(this.children).filter(n=>!n.hasAttribute("hidden"))}setFocus(n,o){if(void 0!==this.menuItems)for(;n>=0&&n<this.menuItems.length;){const p=this.menuItems[n];if(this.isFocusableElement(p)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=n,p.setAttribute("tabindex","0"),p.focus();break}n+=o}}}return u.focusableElementRoles=dp,(0,Dt.Cg)([rn.sH],u.prototype,"items",void 0),u})();let pc=(()=>{class u extends Qr.g{constructor(){super(...arguments),this.role="separator",this.orientation="horizontal"}}return(0,Dt.Cg)([an.CF],u.prototype,"role",void 0),(0,Dt.Cg)([an.CF],u.prototype,"orientation",void 0),u})();const pp=class fp extends Bd{connectedCallback(){super.connectedCallback(),Et.pfK.setValueFor(this,Et.Tkp)}}.compose({baseName:"menu",baseClass:Bd,template:(u,l)=>mi.q`
    <template
        slot="${n=>n.slot?n.slot:n.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(n,o)=>n.handleMenuKeyDown(o.event)}"
        @focusout="${(n,o)=>n.handleFocusOut(o.event)}"
    >
        <slot ${(0,Ro.e)("items")}></slot>
    </template>
`,styles:(u,l)=>_i.A`
    ${(0,Oo.V)("block")} :host {
      background: ${Et.Tkp};
      border: calc(${Et.XAH} * 1px) solid transparent;
      border-radius: calc(${Et.JUW} * 1px);
      box-shadow: ${rp.H0};
      padding: calc((${Et.vR1} - ${Et.XAH}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${Et.vR1} * 2px);
    }

    ::slotted(${u.tagFor(Co)}) {
      margin: 0 calc(${Et.vR1} * 1px);
    }

    ::slotted(${u.tagFor(pc)}) {
      margin: calc(${Et.vR1} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${Et.vR1} * 1px) 0;
      border: none;
      border-top: calc(${Et.XAH} * 1px) solid ${Et.hb6};
    }
  `.withBehaviors((0,Vs.mr)(_i.A`
        :host([slot='submenu']) {
          background: ${En.A.Canvas};
          border-color: ${En.A.CanvasText};
        }
      `))}),Hd="focusin",vl="focusout",Xc="keydown";var Kd=d(5441);class Xn extends Qr.g{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=ml.O.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),null!==this.anchorElement&&(this.requestPositionUpdates(),null!==this.resizeDetector&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{null===this.anchorElement||this.pendingPositioningUpdate||(Xn.intersectionService.requestPosition(this,this.handleIntersection),Xn.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&Xn.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,Xn.intersectionService.cancelRequestPosition(this,this.handleIntersection),null!==this.anchorElement&&Xn.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&Xn.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),null!==this.resizeDetector&&this.resizeDetector.disconnect()},this.getViewport=()=>"string"!=typeof this.viewport||""===this.viewport?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=l=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(l)&&this.updateLayout())},this.applyIntersectionEntries=l=>{const n=l.find(y=>y.target===this),o=l.find(y=>y.target===this.anchorElement),p=l.find(y=>y.target===this.viewportElement);return void 0!==n&&void 0!==p&&void 0!==o&&!!(!this.regionVisible||this.forceUpdate||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect||this.isRectDifferent(this.anchorRect,o.boundingClientRect)||this.isRectDifferent(this.viewportRect,p.boundingClientRect)||this.isRectDifferent(this.regionRect,n.boundingClientRect))&&(this.regionRect=n.boundingClientRect,this.anchorRect=o.boundingClientRect,this.viewportRect=this.viewportElement===document.documentElement?new DOMRectReadOnly(p.boundingClientRect.x+document.documentElement.scrollLeft,p.boundingClientRect.y+document.documentElement.scrollTop,p.boundingClientRect.width,p.boundingClientRect.height):p.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0)},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(l,n)=>Math.abs(l.top-n.top)>this.updateThreshold||Math.abs(l.right-n.right)>this.updateThreshold||Math.abs(l.bottom-n.bottom)>this.updateThreshold||Math.abs(l.left-n.left)>this.updateThreshold,this.handleResize=l=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,null===this.anchorElement&&(this.anchorElement=this.getAnchor()),null===this.viewportElement&&(this.viewportElement=this.getViewport()),this.currentDirection=Wc(this),this.startObservers())},this.updateLayout=()=>{let l,n;if("uncontrolled"!==this.horizontalPositioningMode){const y=this.getPositioningOptions(this.horizontalInset);if("center"===this.horizontalDefaultPosition)n="center";else if("unset"!==this.horizontalDefaultPosition){let zt=this.horizontalDefaultPosition;if("start"===zt||"end"===zt){const Jt=Wc(this);if(Jt!==this.currentDirection)return this.currentDirection=Jt,void this.initialize();zt=this.currentDirection===ml.O.ltr?"start"===zt?"left":"right":"start"===zt?"right":"left"}switch(zt){case"left":n=this.horizontalInset?"insetStart":"start";break;case"right":n=this.horizontalInset?"insetEnd":"end"}}const k=void 0!==this.horizontalThreshold?this.horizontalThreshold:void 0!==this.regionRect?this.regionRect.width:0,z=void 0!==this.anchorRect?this.anchorRect.left:0,fe=void 0!==this.anchorRect?this.anchorRect.right:0,xe=void 0!==this.anchorRect?this.anchorRect.width:0,$e=void 0!==this.viewportRect?this.viewportRect.left:0,Ze=void 0!==this.viewportRect?this.viewportRect.right:0;(void 0===n||"locktodefault"!==this.horizontalPositioningMode&&this.getAvailableSpace(n,z,fe,xe,$e,Ze)<k)&&(n=this.getAvailableSpace(y[0],z,fe,xe,$e,Ze)>this.getAvailableSpace(y[1],z,fe,xe,$e,Ze)?y[0]:y[1])}if("uncontrolled"!==this.verticalPositioningMode){const y=this.getPositioningOptions(this.verticalInset);if("center"===this.verticalDefaultPosition)l="center";else if("unset"!==this.verticalDefaultPosition)switch(this.verticalDefaultPosition){case"top":l=this.verticalInset?"insetStart":"start";break;case"bottom":l=this.verticalInset?"insetEnd":"end"}const k=void 0!==this.verticalThreshold?this.verticalThreshold:void 0!==this.regionRect?this.regionRect.height:0,z=void 0!==this.anchorRect?this.anchorRect.top:0,fe=void 0!==this.anchorRect?this.anchorRect.bottom:0,xe=void 0!==this.anchorRect?this.anchorRect.height:0,$e=void 0!==this.viewportRect?this.viewportRect.top:0,Ze=void 0!==this.viewportRect?this.viewportRect.bottom:0;(void 0===l||"locktodefault"!==this.verticalPositioningMode&&this.getAvailableSpace(l,z,fe,xe,$e,Ze)<k)&&(l=this.getAvailableSpace(y[0],z,fe,xe,$e,Ze)>this.getAvailableSpace(y[1],z,fe,xe,$e,Ze)?y[0]:y[1])}const o=this.getNextRegionDimension(n,l),p=this.horizontalPosition!==n||this.verticalPosition!==l;if(this.setHorizontalPosition(n,o),this.setVerticalPosition(l,o),this.updateRegionStyle(),!this.initialLayoutComplete)return this.initialLayoutComplete=!0,void this.requestPositionUpdates();this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),p&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top","start"===this.verticalPosition),this.classList.toggle("bottom","end"===this.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.verticalPosition),this.classList.toggle("vertical-center","center"===this.verticalPosition),this.classList.toggle("left","start"===this.horizontalPosition),this.classList.toggle("right","end"===this.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.horizontalPosition),this.classList.toggle("horizontal-center","center"===this.horizontalPosition)},this.setHorizontalPosition=(l,n)=>{if(void 0===l||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let o=0;switch(this.horizontalScaling){case"anchor":case"fill":o=this.horizontalViewportLock?this.viewportRect.width:n.width,this.regionWidth=`${o}px`;break;case"content":o=this.regionRect.width,this.regionWidth="unset"}let p=0;switch(l){case"start":this.translateX=this.baseHorizontalOffset-o,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-o+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(p=(this.anchorRect.width-o)/2,this.translateX=this.baseHorizontalOffset+p,this.horizontalViewportLock){const y=this.anchorRect.left+p,k=this.anchorRect.right-p;y<this.viewportRect.left&&!(k>this.viewportRect.right)?this.translateX=this.translateX-(y-this.viewportRect.left):k>this.viewportRect.right&&!(y<this.viewportRect.left)&&(this.translateX=this.translateX-(k-this.viewportRect.right))}}this.horizontalPosition=l},this.setVerticalPosition=(l,n)=>{if(void 0===l||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let o=0;switch(this.verticalScaling){case"anchor":case"fill":o=this.verticalViewportLock?this.viewportRect.height:n.height,this.regionHeight=`${o}px`;break;case"content":o=this.regionRect.height,this.regionHeight="unset"}let p=0;switch(l){case"start":this.translateY=this.baseVerticalOffset-o,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-o+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(p=(this.anchorRect.height-o)/2,this.translateY=this.baseVerticalOffset+p,this.verticalViewportLock){const y=this.anchorRect.top+p,k=this.anchorRect.bottom-p;y<this.viewportRect.top&&!(k>this.viewportRect.bottom)?this.translateY=this.translateY-(y-this.viewportRect.top):k>this.viewportRect.bottom&&!(y<this.viewportRect.top)&&(this.translateY=this.translateY-(k-this.viewportRect.bottom))}}this.verticalPosition=l},this.getPositioningOptions=l=>l?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(l,n,o,p,y,k)=>{const z=n-y,fe=k-(n+p);switch(l){case"start":return z;case"insetStart":return z+p;case"insetEnd":return fe+p;case"end":return fe;case"center":return 2*Math.min(z,fe)+p}},this.getNextRegionDimension=(l,n)=>{const o={height:void 0!==this.regionRect?this.regionRect.height:0,width:void 0!==this.regionRect?this.regionRect.width:0};return void 0!==l&&"fill"===this.horizontalScaling?o.width=this.getAvailableSpace(l,void 0!==this.anchorRect?this.anchorRect.left:0,void 0!==this.anchorRect?this.anchorRect.right:0,void 0!==this.anchorRect?this.anchorRect.width:0,void 0!==this.viewportRect?this.viewportRect.left:0,void 0!==this.viewportRect?this.viewportRect.right:0):"anchor"===this.horizontalScaling&&(o.width=void 0!==this.anchorRect?this.anchorRect.width:0),void 0!==n&&"fill"===this.verticalScaling?o.height=this.getAvailableSpace(n,void 0!==this.anchorRect?this.anchorRect.top:0,void 0!==this.anchorRect?this.anchorRect.bottom:0,void 0!==this.anchorRect?this.anchorRect.height:0,void 0!==this.viewportRect?this.viewportRect.top:0,void 0!==this.viewportRect?this.viewportRect.bottom:0):"anchor"===this.verticalScaling&&(o.height=void 0!==this.anchorRect?this.anchorRect.height:0),o},this.startAutoUpdateEventListeners=()=>{window.addEventListener("resize",this.update,{passive:!0}),window.addEventListener("scroll",this.update,{passive:!0,capture:!0}),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener("resize",this.update),window.removeEventListener("scroll",this.update),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(l,n){this.$fastController.isConnected&&this.initialLayoutComplete&&("auto"===l&&this.stopAutoUpdateEventListeners(),"auto"===n&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),"auto"===this.autoUpdateMode&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),"auto"===this.autoUpdateMode&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){null!==this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),null===this.anchorElement&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&!1===this.pendingReset&&(this.setInitialState(),Er.dv.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}Xn.intersectionService=new class qd{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(l,n)=>{var o;if(null!==this.intersectionDetector){if(this.observedElements.has(l))return void(null===(o=this.observedElements.get(l))||void 0===o||o.push(n));this.observedElements.set(l,[n]),this.intersectionDetector.observe(l)}},this.cancelRequestPosition=(l,n)=>{const o=this.observedElements.get(l);if(void 0!==o){const p=o.indexOf(n);-1!==p&&o.splice(p,1)}},this.initializeIntersectionDetector=()=>{Kd.am.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=l=>{if(null===this.intersectionDetector)return;const n=[],o=[];l.forEach(p=>{var y;null===(y=this.intersectionDetector)||void 0===y||y.unobserve(p.target);const k=this.observedElements.get(p.target);void 0!==k&&(k.forEach(z=>{let fe=n.indexOf(z);-1===fe&&(fe=n.length,n.push(z),o.push([])),o[fe].push(p)}),this.observedElements.delete(p.target))}),n.forEach((p,y)=>{p(o[y])})},this.initializeIntersectionDetector()}},(0,Dt.Cg)([an.CF],Xn.prototype,"anchor",void 0),(0,Dt.Cg)([an.CF],Xn.prototype,"viewport",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"horizontal-positioning-mode"})],Xn.prototype,"horizontalPositioningMode",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"horizontal-default-position"})],Xn.prototype,"horizontalDefaultPosition",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"horizontal-viewport-lock",mode:"boolean"})],Xn.prototype,"horizontalViewportLock",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"horizontal-inset",mode:"boolean"})],Xn.prototype,"horizontalInset",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"horizontal-threshold"})],Xn.prototype,"horizontalThreshold",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"horizontal-scaling"})],Xn.prototype,"horizontalScaling",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"vertical-positioning-mode"})],Xn.prototype,"verticalPositioningMode",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"vertical-default-position"})],Xn.prototype,"verticalDefaultPosition",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"vertical-viewport-lock",mode:"boolean"})],Xn.prototype,"verticalViewportLock",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"vertical-inset",mode:"boolean"})],Xn.prototype,"verticalInset",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"vertical-threshold"})],Xn.prototype,"verticalThreshold",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"vertical-scaling"})],Xn.prototype,"verticalScaling",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"fixed-placement",mode:"boolean"})],Xn.prototype,"fixedPlacement",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"auto-update-mode"})],Xn.prototype,"autoUpdateMode",void 0),(0,Dt.Cg)([rn.sH],Xn.prototype,"anchorElement",void 0),(0,Dt.Cg)([rn.sH],Xn.prototype,"viewportElement",void 0),(0,Dt.Cg)([rn.sH],Xn.prototype,"initialLayoutComplete",void 0);const bl=Co.compose({baseName:"menu-item",template:(u,l)=>mi.q`
    <template
        role="${n=>n.role}"
        aria-haspopup="${n=>n.hasSubmenu?"menu":void 0}"
        aria-checked="${n=>"menuitem"!==n.role?n.checked:void 0}"
        aria-disabled="${n=>n.disabled}"
        aria-expanded="${n=>n.expanded}"
        @keydown="${(n,o)=>n.handleMenuItemKeyDown(o.event)}"
        @click="${(n,o)=>n.handleMenuItemClick(o.event)}"
        @mouseover="${(n,o)=>n.handleMouseOver(o.event)}"
        @mouseout="${(n,o)=>n.handleMouseOut(o.event)}"
        class="${n=>n.disabled?"disabled":""} ${n=>n.expanded?"expanded":""} ${n=>`indent-${n.startColumnCount}`}"
    >
            ${(0,is.z)(n=>"menuitemcheckbox"===n.role,mi.q`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${l.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${(0,is.z)(n=>"menuitemradio"===n.role,mi.q`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${l.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${(0,Hi.LT)(u,l)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${(0,Hi.aO)(u,l)}
        ${(0,is.z)(n=>n.hasSubmenu,mi.q`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${l.expandCollapseGlyph||""}
                        </slot>
                    </span>
                </div>
            `)}
        ${(0,is.z)(n=>n.expanded,mi.q`
                <${u.tagFor(Xn)}
                    :anchorElement="${n=>n}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${n=>n.currentDirection}"
                    @loaded="${n=>n.submenuLoaded()}"
                    ${(0,ro.K)("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${u.tagFor(Xn)}>
            `)}
    </template>
`,styles:(u,l)=>_i.A`
    ${(0,Oo.V)("grid")} :host {
      contain: layout;
      overflow: visible;
      ${pa.Ah}
      box-sizing: border-box;
      height: calc(${jr.D} * 1px);
      grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      white-space: nowrap;
      color: ${Et.lHw};
      fill: currentcolor;
      cursor: pointer;
      border-radius: calc(${Et.PbG} * 1px);
      border: calc(${Et.XAH} * 1px) solid transparent;
      position: relative;
    }

    :host(.indent-0) {
      grid-template-columns: auto 1fr minmax(32px, auto);
    }

    :host(.indent-0) .content {
      grid-column: 1;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-0) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) {
      grid-template-columns: minmax(32px, auto) minmax(32px, auto) 1fr minmax(32px, auto) minmax(32px, auto);
    }

    :host(.indent-2) .content {
      grid-column: 3;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-2) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) .start {
      grid-column: 2;
    }

    :host(.indent-2) .end {
      grid-column: 4;
    }

    :host(:${vr.N}) {
      ${fl.W}
    }

    :host(:not([disabled]):hover) {
      background: ${Et.oO8};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${Et.wOW};
      color: ${Et.lHw};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${dc.Z};
      opacity: ${Et.qB4};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end {
      display: flex;
      justify-content: center;
    }

    :host(.indent-0[aria-haspopup='menu']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-1[aria-haspopup='menu']),
    :host(.indent-1[role='menuitemcheckbox']),
    :host(.indent-1[role='menuitemradio']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-2:not([aria-haspopup='menu'])) .end {
      grid-column: 5;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
      display: none;
    }

    :host([aria-haspopup='menu']) .expand-collapse-glyph-container,
    :host([role='menuitemcheckbox']) .input-container,
    :host([role='menuitemradio']) .input-container {
      display: grid;
    }

    :host([aria-haspopup='menu']) .content,
    :host([role='menuitemcheckbox']) .content,
    :host([role='menuitemradio']) .content {
      grid-column-start: 3;
    }

    :host([aria-haspopup='menu'].indent-0) .content {
      grid-column-start: 1;
    }

    :host([aria-haspopup='menu']) .end,
    :host([role='menuitemcheckbox']) .end,
    :host([role='menuitemradio']) .end {
      grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    slot[name='checkbox-indicator'],
    slot[name='radio-indicator'] {
      display: none;
    }

    ::slotted([slot='end']:not(svg)) {
      margin-inline-end: 10px;
      color: ${Et.cRz};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors((0,Vs.mr)(_i.A`
        :host,
        ::slotted([slot='end']:not(svg)) {
          forced-color-adjust: none;
          color: ${En.A.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled]):hover) {
          background: ${En.A.Highlight};
          color: ${En.A.HighlightText};
          fill: currentcolor;
        }
        :host(:hover) .start,
        :host(:hover) .end,
        :host(:hover)::slotted(svg),
        :host(:active) .start,
        :host(:active) .end,
        :host(:active)::slotted(svg),
        :host(:hover) ::slotted([slot='end']:not(svg)),
        :host(:${vr.N}) ::slotted([slot='end']:not(svg)) {
          color: ${En.A.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${En.A.Highlight};
          color: ${En.A.HighlightText};
        }
        :host(:${vr.N}) {
          background: ${En.A.Highlight};
          outline-color: ${En.A.ButtonText};
          color: ${En.A.HighlightText};
          fill: currentcolor;
        }
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg),
        :host([disabled]:${vr.N}) {
          background: ${En.A.ButtonFace};
          color: ${En.A.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${vr.N}) {
          outline-color: ${En.A.GrayText};
        }
        :host .expanded-toggle,
        :host .checkbox,
        :host .radio {
          border-color: ${En.A.ButtonText};
          background: ${En.A.HighlightText};
        }
        :host([checked]) .checkbox,
        :host([checked]) .radio {
          background: ${En.A.HighlightText};
          border-color: ${En.A.HighlightText};
        }
        :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${vr.N}) .expanded-toggle,
            :host(:${vr.N}) .checkbox,
            :host(:${vr.N}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${vr.N}) .checkbox,
            :host([checked]:${vr.N}) .radio {
          border-color: ${En.A.HighlightText};
        }
        :host([aria-checked='true']) {
          background: ${En.A.Highlight};
          color: ${En.A.HighlightText};
        }
        :host([aria-checked='true']) .checkbox-indicator,
        :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),
        :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
          fill: ${En.A.Highlight};
        }
        :host([aria-checked='true']) .radio-indicator {
          background: ${En.A.Highlight};
        }
      `),new hc(_i.A`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,_i.A`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),checkboxIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',expandCollapseGlyph:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M5.65 3.15a.5.5 0 000 .7L9.79 8l-4.14 4.15a.5.5 0 00.7.7l4.5-4.5a.5.5 0 000-.7l-4.5-4.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  ',radioIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="8" cy="8" r="2"/>\n    </svg>\n  '});var Qd=d(5260);const Rp={dotOptionsTitle:"More options"},Op=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{display:flex;flex-direction:column;align-items:flex-end}:host .dot-icon{font-family:FabricMDL2Icons;min-width:40px;min-height:30px;text-align:center;line-height:30px}:host .menu{position:absolute;box-shadow:var(--neutral-fill-rest) 0 0 40px 5px;background:var(--neutral-fill-rest);z-index:1;display:none;white-space:nowrap;transform:var(--dot-options-translatey,translateY(32px))}:host .menu.open{display:block}:host fluent-button::part(control){background:inherit}
`];var Pp=function(u,l,n,o){var k,p=arguments.length,y=p<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(u,l,n,o);else for(var z=u.length-1;z>=0;z--)(k=u[z])&&(y=(p<3?k(y):p>3?k(l,n,y):k(l,n))||y);return p>3&&y&&Object.defineProperty(l,n,y),y},Np=function(u,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(u,l)};let pv=(()=>{class u extends Qd.S{constructor(){super(...arguments),this._clickHandler=()=>this.open=!1,this.renderContent=()=>{const n=Object.keys(this.options);return Lt.qy`
      <fluent-button
        appearance="stealth"
        aria-label=${this.strings.dotOptionsTitle}
        @click=${this.onDotClick}
        @keydown=${this.onDotKeydown}
        class="dot-icon">${(0,Vn.r)(Vn.A.Dot)}</fluent-button>
      <fluent-menu class=${(0,Ht.H)({menu:!0,open:this.open})}>
        ${n.map(o=>this.getMenuOption(o,this.options[o]))}
      </fluent-menu>`},this.handleItemClick=(n,o)=>{n.preventDefault(),n.stopPropagation(),o(n),this.open=!1},this.handleItemKeydown=(n,o)=>{this.handleKeydownMenuOption(n),o(n),this.open=!1},this.onDotClick=n=>{n.preventDefault(),n.stopPropagation(),this.open=!this.open},this.onDotKeydown=n=>{"Enter"===n.key&&(n.preventDefault(),n.stopPropagation(),this.open=!this.open)}}static get styles(){return Op}get strings(){return Rp}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this._clickHandler)}disconnectedCallback(){window.removeEventListener("click",this._clickHandler),super.disconnectedCallback()}getMenuOption(n,o){return Lt.qy`
      <fluent-menu-item
        @click=${p=>this.handleItemClick(p,o)}
        @keydown=${p=>this.handleItemKeydown(p,o)}>
          ${n}
      </fluent-menu-item>`}handleKeydownMenuOption(n){"Enter"===n.key&&(n.preventDefault(),n.stopPropagation())}}return Pp([(0,Mt.MZ)({type:Boolean}),Np("design:type",Boolean)],u.prototype,"open",void 0),Pp([(0,Mt.MZ)({type:Object}),Np("design:type",Object)],u.prototype,"options",void 0),u})();const Lp=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative}:host .header::part(control){font-size:var(--arrow-options-button-font-size, large);font-weight:var(--arrow-options-button-font-weight,600);color:var(--arrow-options-button-font-color,var(--accent-base-color));background:var(--arrow-options-button-background-color,transparent)}:host .header::part(control):hover{background:var(--neutral-fill-stealth-hover)}:host .header::part(control):active,:host .header::part(control):focus{background:var(--neutral-fill-stealth-active)}:host .menu{position:absolute;left:var(--arrow-options-left,0);z-index:1;display:none}:host .menu.open{display:block;width:max-content}
`];var Fp=function(u,l,n,o){var k,p=arguments.length,y=p<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(u,l,n,o);else for(var z=u.length-1;z>=0;z--)(k=u[z])&&(y=(p<3?k(y):p>3?k(l,n,y):k(l,n))||y);return p>3&&y&&Object.defineProperty(l,n,y),y},$p=function(u,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(u,l)};let gv=(()=>{class u extends Qd.S{static get styles(){return Lp}constructor(){super(),this.onHeaderClick=n=>{Object.keys(this.options).length>1&&(n.preventDefault(),n.stopPropagation(),this.open=!this.open)},this.onHeaderKeyDown=n=>{if("Enter"===n.key){n.preventDefault(),n.stopPropagation(),this.open=!this.open;const o=this.renderRoot.querySelector("fluent-menu");o&&(o.classList.remove("closed"),o.classList.add("open"));const p=n.target;if(p){const y=this.renderRoot.querySelector("fluent-menu-item[tabindex='0']");y&&(p.blur(),y.focus())}}},this.renderContent=()=>Lt.qy`
      <fluent-button
        class="header"
        @click=${this.onHeaderClick}
        @keydown=${this.onHeaderKeyDown}
        appearance="lightweight">
          ${this.value}
      </fluent-button>
      <fluent-menu
        class=${(0,Ht.H)({menu:!0,open:this.open,closed:!this.open})}>
          ${this.getMenuOptions()}
      </fluent-menu>`,this.value="",this.options={},this._clickHandler=()=>this.open=!1,window.addEventListener("onblur",()=>this.open=!1)}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this._clickHandler)}disconnectedCallback(){window.removeEventListener("click",this._clickHandler),super.disconnectedCallback()}getMenuOptions(){return Object.keys(this.options).map(o=>Lt.qy`
          <fluent-menu-item
            @click=${k=>{this.open=!1,this.options[o](k)}}
            @keydown=${k=>{const z=this.renderRoot.querySelector(".header");"Enter"===k.key?(this.open=!1,this.options[o](k),z.focus()):"Tab"===k.key?this.open=!1:"Escape"===k.key&&(this.open=!1,z&&z.focus())}}>
              ${o}
          </fluent-menu-item>`)}}return Fp([(0,Mt.MZ)({type:Boolean}),$p("design:type",Boolean)],u.prototype,"open",void 0),Fp([(0,Mt.MZ)({type:String}),$p("design:type",String)],u.prototype,"value",void 0),Fp([(0,Mt.MZ)({type:Object}),$p("design:type",Object)],u.prototype,"options",void 0),u})();var yr=function(u,l,n,o){var k,p=arguments.length,y=p<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(u,l,n,o);else for(var z=u.length-1;z>=0;z--)(k=u[z])&&(y=(p<3?k(y):p>3?k(l,n,y):k(l,n))||y);return p>3&&y&&Object.defineProperty(l,n,y),y},br=function(u,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(u,l)},As=function(u,l,n,o){return new(n||(n=Promise))(function(y,k){function z($e){try{xe(o.next($e))}catch(Ze){k(Ze)}}function fe($e){try{xe(o.throw($e))}catch(Ze){k(Ze)}}function xe($e){$e.done?y($e.value):function p(y){return y instanceof n?y:new n(function(k){k(y)})}($e.value).then(z,fe)}xe((o=o.apply(u,l||[])).next())})};const Ih={"@odata.type":"#microsoft.graph.plannerAssignment",orderHint:" !"};let vv=(()=>{class u extends Bs.N{static get styles(){return Qf}get strings(){return Xf}get isNewTaskVisible(){return this._isNewTaskVisible}set isNewTaskVisible(n){this._isNewTaskVisible=n,n||(this._newTaskDueDate=null,this._newTaskName="",this._newTaskGroupId="",this._newTaskContainerId="")}static get requiredScopes(){return[...new Set(["group.read.all","group.readwrite.all","tasks.read","tasks.readwrite",...eh.requiredScopes,...qf.requiredScopes])]}get filteredTasks(){const n=this._tasks.filter(o=>this.isTaskInSelectedGroupFilter(o)).filter(o=>this.isTaskInSelectedFolderFilter(o)).filter(o=>!this._hiddenTasks.includes(o.id));return this.taskFilter?n.filter(o=>this.taskFilter(o._raw)):n}constructor(){super(),this._isDarkMode=!1,this._me=null,this.renderLoading=()=>this._hasDoneInitialLoad?this.renderContent():this.renderLoadingTask(),this.renderContent=()=>{const n=this._inTaskLoad&&!this._hasDoneInitialLoad?this.renderLoadingTask():null;let o;return this.hideHeader||(o=Lt.qy`
        <div class="header">
          ${this.renderPlanOptions()}
        </div>
      `),Lt.qy`
      ${o}
      <div class="tasks">
        ${this._isNewTaskVisible?this.renderNewTask():null} ${n}
        ${(0,xo.u)(this.filteredTasks,p=>p.id,p=>this.renderTask(p))}
      </div>
    `},this.onResize=()=>{this.mediaQuery!==this.previousMediaQuery&&(this.previousMediaQuery=this.mediaQuery,this.requestUpdate())},this.onThemeChanged=()=>{this._isDarkMode=tp(this)},this.onAddTaskClick=()=>{var n;const o=this.getPeoplePicker(null),p={};if(o)for(const y of null!==(n=o?.selectedPeople)&&void 0!==n?n:[])p[y.id]=Ih;!this._newTaskBeingAdded&&this._newTaskName&&(this._currentGroup||this._newTaskGroupId)&&this.addTask(this._newTaskName,this._newTaskDueDate,this._currentGroup?this._currentGroup:this._newTaskGroupId,this._currentFolder?this._currentFolder:this._newTaskFolderId,p)},this.onAddTaskKeyDown=n=>{("Enter"===n.key||" "===n.key)&&this.onAddTaskClick()},this.addNewTaskButtonClick=()=>{this.isNewTaskVisible=!this.isNewTaskVisible},this.newTaskVisible=n=>{"Enter"===n.key&&(this.isNewTaskVisible=!1)},this.handleDateChange=n=>{const o=n.target.value;this._newTaskDueDate=o?new Date(o+"T17:00"):null},this.renderPlannerIcon=n=>(0,Vn.r)(Vn.A.Planner,n),this.renderBucketIcon=n=>(0,Vn.r)(Vn.A.Milestone,n),this.handlePeopleClick=(n,o)=>{this.togglePeoplePicker(o),n.stopPropagation()},this.handlePeopleKeydown=(n,o)=>{("Enter"===n.key||" "===n.key)&&(this.togglePeoplePicker(o),n.stopPropagation(),n.preventDefault())},this.handlePeoplePickerKeydown=n=>{"Enter"===n.key&&n.stopPropagation()},this.clearState(),this.previousMediaQuery=this.mediaQuery}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.onResize),window.addEventListener("darkmodechanged",this.onThemeChanged),this.onThemeChanged()}disconnectedCallback(){window.removeEventListener("resize",this.onResize),window.removeEventListener("darkmodechanged",this.onThemeChanged),super.disconnectedCallback()}clearState(){this._newTaskFolderId="",this._newTaskGroupId="",this._newTaskDueDate=null,this._newTaskName="",this._newTaskBeingAdded=!1,this._tasks=[],this._folders=[],this._groups=[],this._hiddenTasks=[],this._hasDoneInitialLoad=!1,this._inTaskLoad=!1}firstUpdated(n){super.firstUpdated(n),this.initialId&&!this._currentGroup&&(this._currentGroup=this.initialId),this.initialBucketId&&!this._currentFolder&&(this._currentFolder=this.initialBucketId)}loadState(){return As(this,void 0,void 0,function*(){const n=this.getTaskSource();if(!n)return;const o=xi.b.globalProvider;if(o&&o.state===Di.HJ.SignedIn){if(this._inTaskLoad=!0,!this._me){const p=o.graph.forComponent(this);this._me=yield(0,ko.jp)(p)}this.groupId?yield this._loadTasksForGroup(n):this.targetId?yield this._loadTargetPlannerTasks(n):yield this._loadAllTasks(n),this._inTaskLoad=!1,this._hasDoneInitialLoad=!0}})}_loadTargetPlannerTasks(n){return As(this,void 0,void 0,function*(){const o=yield n.getTaskGroup(this.targetId);let p=yield n.getTaskFoldersForTaskGroup(o.id);this.targetBucketId&&(p=p.filter(k=>k.id===this.targetBucketId));const y=(yield Promise.all(p.map(k=>n.getTasksForTaskFolder(k.id,k.parentId)))).reduce((k,z)=>[...k,...z],[]);this._tasks=y,this._folders=p,this._groups=[o]})}_loadAllTasks(n){return As(this,void 0,void 0,function*(){const o=yield n.getTaskGroups(),p=(yield Promise.all(o.map(k=>n.getTaskFoldersForTaskGroup(k.id)))).reduce((k,z)=>[...k,...z],[]),y=(yield Promise.all(p.map(k=>n.getTasksForTaskFolder(k.id,k.parentId)))).reduce((k,z)=>[...k,...z],[]);this._tasks=y,this._folders=p,this._groups=o})}_loadTasksForGroup(n){return As(this,void 0,void 0,function*(){const o=yield n.getTaskGroupsForGroup(this.groupId),p=(yield Promise.all(o.map(k=>n.getTaskFoldersForTaskGroup(k.id)))).reduce((k,z)=>[...k,...z],[]),y=(yield Promise.all(p.map(k=>n.getTasksForTaskFolder(k.id,k.parentId)))).reduce((k,z)=>[...k,...z],[]);this._tasks=y,this._folders=p,this._groups=o})}addTask(n,o,p,y,k={}){return As(this,void 0,void 0,function*(){const z=this.getTaskSource();if(!z)return;const fe={assignments:k,dueDate:o,immediateParentId:y,name:n,topParentId:p};this._newTaskBeingAdded=!0,fe._raw=yield z.addTask(fe),this.fireCustomEvent("taskAdded",fe),this._newTaskBeingAdded=!1,this.isNewTaskVisible=!1,yield this._task.run()})}completeTask(n){return As(this,void 0,void 0,function*(){const o=this.getTaskSource();o&&(yield o.setTaskComplete(n),this.fireCustomEvent("taskChanged",n),yield this._task.run())})}uncompleteTask(n){return As(this,void 0,void 0,function*(){const o=this.getTaskSource();o&&(yield o.setTaskIncomplete(n),this.fireCustomEvent("taskChanged",n),yield this._task.run())})}removeTask(n){return As(this,void 0,void 0,function*(){const o=this.getTaskSource();o&&(this._hiddenTasks=[...this._hiddenTasks,n.id],yield o.removeTask(n),this.fireCustomEvent("taskRemoved",n),yield this._task.run(),this._hiddenTasks=this._hiddenTasks.filter(p=>p!==n.id))})}assignPeople(n,o=[]){return As(this,void 0,void 0,function*(){const p=this.getTaskSource();if(!p)return;let y=[];n&&n.assignments&&(y=Object.keys(n.assignments).sort());const k=o.map(xe=>xe.id);if(k.length===y.length&&k.sort().every((xe,$e)=>xe===y[$e]))return;const fe={};for(const xe of y)fe[xe]=k.includes(xe)?Ih:null;k.forEach(xe=>{y.includes(xe)||(fe[xe]=Ih)}),n&&(yield p.assignPeopleToTask(n,fe),yield this._task.run())})}renderPlanOptions(){var n;const o=xi.b.globalProvider;if(!o||o.state!==Di.HJ.SignedIn)return null;if(this._inTaskLoad&&!this._hasDoneInitialLoad)return Lt.qy`<span class="loading-header"></span>`;const p=this.readOnly||this._isNewTaskVisible?null:Lt.qy`
          <fluent-button
            appearance="accent"
            class="new-task-button"
            @click=${this.addNewTaskButtonClick}>
              <span slot="start">${(0,Vn.r)(Vn.A.Add,"currentColor")}</span>
              ${this.strings.addTaskButtonSubtitle}
          </fluent-button>
        `,y=this._groups.find(zt=>zt.id===this._currentGroup)||{title:this.strings.baseSelfAssigned},k={[this.strings.baseSelfAssigned]:()=>{this._currentGroup=null,this._currentFolder=null}};for(const zt of this._groups)k[zt.title]=()=>{this._currentGroup=zt.id,this._currentFolder=null};const z=or.Q`
        <mgt-arrow-options
          class="arrow-options"
          .options="${k}"
          .value="${y.title}"
        ></mgt-arrow-options>`,fe=this._currentGroup?(0,Vn.r)(Vn.A.ChevronRight):null,xe=this._folders.find(zt=>zt.id===this._currentFolder)||{name:this.strings.bucketsSelfAssigned},$e={[this.strings.bucketsSelfAssigned]:()=>{this._currentFolder=null}};for(const zt of this._folders.filter(Jt=>Jt.parentId===this._currentGroup))$e[zt.name]=()=>{this._currentFolder=zt.id};const Ze=this.targetBucketId?Lt.qy`
            <span class="plan-title">
              ${(null===(n=this._folders[0])||void 0===n?void 0:n.name)||""}
            </span>`:or.Q`
            <mgt-arrow-options class="arrow-options" .options="${$e}" .value="${xe.name}"></mgt-arrow-options>
          `;return Lt.qy`
        <div class="title">
          ${z} ${fe} ${this._currentGroup?Ze:null}
        </div>
        ${p}
      `}renderNewTask(){const n="var(--neutral-foreground-hint)",o=Lt.qy`
      <fluent-text-field
        autocomplete="off"
        ?autofocus=${this.isNewTaskVisible}
        placeholder=${this.strings.newTaskPlaceholder}
        .value="${this._newTaskName}"
        class="new-task"
        aria-label=${this.strings.newTaskPlaceholder}
        @input=${Jt=>this._newTaskName=Jt.target.value}>
      </fluent-text-field>`;this._groups.length>0&&!this._newTaskGroupId&&(this._newTaskGroupId=this._groups[0].id);const p=Lt.qy`
      ${(0,xo.u)(this._groups,Jt=>Jt.id,Jt=>Lt.qy`<fluent-option value="${Jt.id}">${Jt.title}</fluent-option>`)}`,y=this._currentGroup?Lt.qy`
          <span class="new-task-group">
            ${this.renderPlannerIcon(n)}
            <span>${this.getPlanTitle(this._currentGroup)}</span>
          </span>`:Lt.qy`
            <fluent-select>
              <span slot="start">${this.renderPlannerIcon(n)}</span>
              ${this._groups.length>0?p:Lt.qy`<fluent-option selected>No groups found</fluent-option>`}
            </fluent-select>`,k=this._folders.filter(Jt=>this._currentGroup&&Jt.parentId===this._currentGroup||!this._currentGroup&&Jt.parentId===this._newTaskGroupId);k.length>0&&!this._newTaskFolderId&&(this._newTaskFolderId=k[0].id);const z=Lt.qy`
      ${(0,xo.u)(k,Jt=>Jt.id,Jt=>Lt.qy`<fluent-option value="${Jt.id}">${Jt.name}</fluent-option>`)}`,fe=this._currentFolder?Lt.qy`
          <span class="new-task-bucket">
            ${this.renderBucketIcon(n)}
            <span>${this.getFolderName(this._currentFolder)}</span>
          </span>
        `:Lt.qy`
         <fluent-select>
          <span slot="start">${this.renderBucketIcon(n)}</span>
          ${k.length>0?z:Lt.qy`<fluent-option selected>No folders found</fluent-option>`}
        </fluent-select>`,$e=Lt.qy`
      <fluent-text-field
        autocomplete="off"
        type="date"
        class=${(0,Ht.H)({dark:this._isDarkMode,"new-task":!0})}
        aria-label="${this.strings.addTaskDate}"
        .value="${this.dateToInputValue(this._newTaskDueDate)}"
        @change=${this.handleDateChange}>
      </fluent-text-field>`,Ze=this.renderAssignedPeople(null),zt=this._newTaskBeingAdded?Lt.qy`<div class="task-add-button-container"></div>`:Lt.qy`
          <fluent-button
            class="add-task"
            ?disabled=${!this._newTaskName}
            @click=${this.onAddTaskClick}
            @keydown=${this.onAddTaskKeyDown}
            appearance="neutral">
              ${this.strings.addTaskButtonSubtitle}
          </fluent-button>
          <fluent-button
            class="cancel-task"
            @click=${()=>this.isNewTaskVisible=!1}
            @keydown=${this.newTaskVisible}
            appearance="neutral">
              ${this.strings.cancelNewTaskSubtitle}
          </fluent-button>`;return Lt.qy`
    <div
      class=${(0,Ht.H)({task:!0,"new-task":!0})}>
      <div class="task-details-container">
        <div class="top add-new-task">
          <div class="check-and-title">
            ${o}
            <div class="task-content">
              <div class="task-group">${y}</div>
              <div class="task-bucket">${fe}</div>
              ${Ze}
              <div class="task-due">${$e}</div>
            </div>
          </div>
          <div class="task-options new-task-action-buttons">${zt}</div>
        </div>
      </div>
    </div>
  `}togglePeoplePicker(n){const o=this.getPeoplePicker(n),p=this.getMgtPeople(n),y=this.getFlyout(n);o&&p&&y&&(y.isOpen?y.close():(o.selectedPeople=p.people,y.open(),setTimeout(()=>o.focus(),100)))}updateAssignedPeople(n){const o=this.getPeoplePicker(n),p=this.getMgtPeople(n);o&&o.selectedPeople!==p.people&&(p.people=o.selectedPeople,this.assignPeople(n,o.selectedPeople))}getPeoplePicker(n){return this.renderRoot.querySelector(`.picker-${n?n.id:"new-task"}`)}getMgtPeople(n){return this.renderRoot.querySelector(`.people-${n?n.id:"new-task"}`)}getFlyout(n){return this.renderRoot.querySelector(`.flyout-${n?n.id:"new-task"}`)}renderTask(n){const{name:o="Task",completed:p=!1,dueDate:y}=n,k=this._currentGroup?null:this.getPlanTitle(n.topParentId),z=this._currentFolder?null:this.getFolderName(n.immediateParentId),fe={task:Object.assign(Object.assign({},n._raw),{groupTitle:k,folderTitle:z})},xe=this.renderTemplate("task",fe,n.id);if(xe)return xe;let $e=this.renderTemplate("task-details",fe,`task-details-${n.id}`);if(!$e){const Jt="var(--neutral-foreground-hint)",ln=this._currentGroup?null:Lt.qy`
              <div class="task-group">
                <span class="task-icon">${this.renderPlannerIcon(Jt)}</span>
                <span class="task-icon-text">${this.getPlanTitle(n.topParentId)}</span>
              </div>
            `,An=this._currentFolder?null:Lt.qy`
            <div class="task-bucket">
              <span class="task-icon">${this.renderBucketIcon(Jt)}</span>
              <span class="task-icon-text">${this.getFolderName(n.immediateParentId)}</span>
            </div>
          `,di=y?Lt.qy`
            <div class="task-due">
              <span class="task-icon-text">${this.strings.due}${(0,er.Gp)(y)}</span>
            </div>
          `:null,nr=this.renderAssignedPeople(n);$e=Lt.qy`${ln} ${An} ${nr} ${di}`}const Ze=this.readOnly||this.hideOptions?null:or.Q`
            <mgt-dot-options
              class="dot-options"
              .options="${{[this.strings.removeTaskSubtitle]:()=>this.removeTask(n)}}"
            ></mgt-dot-options>`,zt=(0,Ht.H)({task:!0,complete:p,incomplete:!p,"read-only":this.readOnly});return Lt.qy`
      <div
        data-id="task-${n.id}"
        class=${zt}
        @click=${()=>this.handleTaskClick(n)}>
        <div class="task-details-container">
          <div class="top">
            <div class="check-and-title">
              <fluent-checkbox
                @click=${Jt=>this.handleTaskCheckClick(Jt,n)}
                @keydown=${Jt=>this.handleTaskCheckKeyDown(Jt,n)}
                ?checked=${p}>
                  ${o}
              </fluent-checkbox>
            </div>
            <div class="task-options">${Ze}</div>
          </div>
          <div class="bottom">${$e}</div>
        </div>
      </div>
    `}handleTaskCheckKeyDown(n,o){return As(this,void 0,void 0,function*(){"Enter"===n.key&&(n.stopPropagation(),n.preventDefault(),yield this.checkTask(o))})}handleTaskCheckClick(n,o){return As(this,void 0,void 0,function*(){n.stopPropagation(),n.preventDefault(),yield this.checkTask(o)})}checkTask(n){return As(this,void 0,void 0,function*(){if(!this.readOnly){const o=this.shadowRoot.querySelector(`[data-id='task-${n.id}'`);o&&o.classList.add("updating"),n.completed?yield this.uncompleteTask(n):yield this.completeTask(n),o&&o.classList.remove("updating")}})}renderAssignedPeople(n){var o;let p;const y={"new-task-assignee":null===n,"task-assignee":null!==n,"task-detail":null!==n},k=n?n.id:"new-task";y[`flyout-${k}`]=!0;const z=n?Object.keys(n.assignments).map(Ze=>Ze):[];if(!this.newTaskVisible){const Ze=n?._raw,zt=Ze?.planId;zt&&(p=null===(o=this._groups.filter(ln=>ln.id===zt).pop())||void 0===o?void 0:o.containerId)}const xe=or.Q`
      <mgt-people
        class="people people-${k}"
        .userIds=${z}
        person-card="none"
        @click=${Ze=>this.handlePeopleClick(Ze,n)}
        @keydown=${Ze=>this.handlePeopleKeydown(Ze,n)}
      >
        <template data-type="no-data">
          <fluent-button>
            <span style="display:flex;place-content:start;gap:4px;padding-inline-start:4px">
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="svg" fill="currentColor">
                <path d="M9 2a4 4 0 100 8 4 4 0 000-8zM6 6a3 3 0 116 0 3 3 0 01-6 0z"></path>
                <path d="M4 11a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 009 18c.41 0 .82-.02 1.21-.06A5.5 5.5 0 019.6 17 12 12 0 019 17a8.16 8.16 0 01-4.33-1.05A3.36 3.36 0 013 13a1 1 0 011-1h5.6c.18-.36.4-.7.66-1H4z"></path>
                <path d="M14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 010 1H15v1.5a.5.5 0 01-1 0V15h-1.5a.5.5 0 010-1H14v-1.5c0-.28.22-.5.5-.5z"></path>
              </svg> Assign</span>
            </fluent-button>
        </template>
      </mgt-people>`,$e=or.Q`
      <mgt-people-picker
        class="people-picker picker-${k}"
        .groupId=${(0,Hl.J)(this.isNewTaskVisible?this._newTaskContainerId:p)}
        @keydown=${this.handlePeoplePickerKeydown}>
      ></mgt-people-picker>`;return or.Q`
      <mgt-flyout
        light-dismiss
        class=${(0,Ht.H)(y)}
        @closed=${()=>this.updateAssignedPeople(n)}
      >
        <div slot="anchor">${xe}</div>
        <div slot="flyout" part="picker" class="picker">${$e}</div>
      </mgt-flyout>
    `}handleTaskClick(n){n&&this.fireCustomEvent("taskClick",n)}renderLoadingTask(){return Lt.qy`
      <div class="header">
        <div class="title">
          <fluent-skeleton shimmer class="shimmer" shape="rect"></fluent-skeleton>
        </div>
        <div class="new-task-button">
          <fluent-skeleton shimmer class="shimmer" shape="rect"></fluent-skeleton>
        </div>
      </div>
      <div class="tasks">
        <div class="task incomplete">
          <div class="task-details-container">
            <div class="top">
              <div class="check-and-title shimmer">
                <fluent-skeleton shimmer class="checkbox" shape="circle"></fluent-skeleton>
                <fluent-skeleton shimmer class="title" shape="rect"></fluent-skeleton>
              </div>
              <div class="task-options">
                <fluent-skeleton shimmer class="options" shape="rect"></fluent-skeleton>
              </div>
            </div>
            <div class="bottom">
              <div class="task-group">
                <div class="task-icon">
                  <fluent-skeleton shimmer class="shimmer icon" shape="rect"></fluent-skeleton>
                </div>
                <div class="task-icon-text">
                  <fluent-skeleton shimmer class="shimmer text" shape="rect"></fluent-skeleton>
                </div>
              </div>
              <div class="task-bucket">
                <div class="task-icon">
                  <fluent-skeleton shimmer class="shimmer icon" shape="rect"></fluent-skeleton>
                </div>
                <div class="task-icon-text">
                  <fluent-skeleton shimmer class="shimmer text" shape="rect"></fluent-skeleton>
                </div>
              </div>
              <div class="task-details shimmer">
                <fluent-skeleton shimmer class="shimmer icon" shape="circle"></fluent-skeleton>
                <fluent-skeleton shimmer class="shimmer icon" shape="circle"></fluent-skeleton>
                <fluent-skeleton shimmer class="shimmer icon" shape="circle"></fluent-skeleton>
              </div>
              <div class="task-due">
                <div class="task-icon-text">
                  <fluent-skeleton shimmer class="shimmer text" shape="rect"></fluent-skeleton>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    `}getTaskSource(){const n=xi.b.globalProvider;if(!n||n.state!==Di.HJ.SignedIn)return null;const o=n.graph.forComponent(this);return new xm(o)}getPlanTitle(n){return n?n===this.strings.plansSelfAssigned?this.strings.plansSelfAssigned:(this._groups.find(o=>o.id===n)||{title:this.strings.planNotFound}).title:this.strings.baseSelfAssigned}getFolderName(n){return n?(this._folders.find(o=>o.id===n)||{name:this.strings.bucketNotFound}).name:this.strings.bucketsSelfAssigned}isTaskInSelectedGroupFilter(n){var o;return!this._currentGroup||n.topParentId===this._currentGroup||!this._currentGroup&&this.getTaskSource().isAssignedToMe(n,null===(o=this._me)||void 0===o?void 0:o.id)}isTaskInSelectedFolderFilter(n){return n.immediateParentId===this._currentFolder||!this._currentFolder}dateToInputValue(n){return n?new Date(n.getTime()-6e4*n.getTimezoneOffset()).toISOString().split("T")[0]:null}}return yr([(0,Mt.MZ)({attribute:"read-only",type:Boolean}),br("design:type",Boolean)],u.prototype,"readOnly",void 0),yr([(0,Mt.MZ)({attribute:"target-id",type:String}),br("design:type",String)],u.prototype,"targetId",void 0),yr([(0,Mt.MZ)({attribute:"target-bucket-id",type:String}),br("design:type",String)],u.prototype,"targetBucketId",void 0),yr([(0,Mt.MZ)({attribute:"initial-id",type:String}),br("design:type",String)],u.prototype,"initialId",void 0),yr([(0,Mt.MZ)({attribute:"initial-bucket-id",type:String}),br("design:type",String)],u.prototype,"initialBucketId",void 0),yr([(0,Mt.MZ)({attribute:"hide-header",type:Boolean}),br("design:type",Boolean)],u.prototype,"hideHeader",void 0),yr([(0,Mt.MZ)({attribute:"hide-options",type:Boolean}),br("design:type",Boolean)],u.prototype,"hideOptions",void 0),yr([(0,Mt.MZ)({attribute:"group-id",type:String}),br("design:type",String)],u.prototype,"groupId",void 0),yr([(0,Mt.wk)(),br("design:type",Boolean)],u.prototype,"_isNewTaskVisible",void 0),yr([(0,Mt.wk)(),br("design:type",Boolean)],u.prototype,"_newTaskBeingAdded",void 0),yr([(0,Mt.wk)(),br("design:type",String)],u.prototype,"_newTaskName",void 0),yr([(0,Mt.wk)(),br("design:type",Date)],u.prototype,"_newTaskDueDate",void 0),yr([(0,Mt.wk)(),br("design:type",String)],u.prototype,"_newTaskGroupId",void 0),yr([(0,Mt.wk)(),br("design:type",String)],u.prototype,"_newTaskFolderId",void 0),yr([(0,Mt.wk)(),br("design:type",String)],u.prototype,"_newTaskContainerId",void 0),yr([(0,Mt.wk)(),br("design:type",Array)],u.prototype,"_groups",void 0),yr([(0,Mt.wk)(),br("design:type",Array)],u.prototype,"_folders",void 0),yr([(0,Mt.wk)(),br("design:type",Array)],u.prototype,"_tasks",void 0),yr([(0,Mt.wk)(),br("design:type",Array)],u.prototype,"_hiddenTasks",void 0),yr([(0,Mt.wk)(),br("design:type",Boolean)],u.prototype,"_inTaskLoad",void 0),yr([(0,Mt.wk)(),br("design:type",Boolean)],u.prototype,"_hasDoneInitialLoad",void 0),yr([(0,Mt.wk)(),br("design:type",String)],u.prototype,"_currentGroup",void 0),yr([(0,Mt.wk)(),br("design:type",String)],u.prototype,"_currentFolder",void 0),yr([(0,Mt.wk)(),br("design:type",Object)],u.prototype,"_isDarkMode",void 0),yr([(0,Mt.wk)(),br("design:type",Object)],u.prototype,"_me",void 0),u})();const yv=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .container{display:flex;flex-direction:column;position:relative}:host .dropdown{display:none;position:absolute;z-index:1000;top:34px}:host .dropdown.visible{display:flex}:host .dropdown .team-photo{width:24px;position:inherit;border-radius:50%;margin:0 6px}:host .dropdown .team-start-slot{width:max-content}:host .dropdown .team-parent-name{width:auto}:host .loading-text,:host .search-error-text{font-style:normal;font-weight:400;font-size:14px;line-height:20px}:host .message-parent{display:flex;flex-direction:row;gap:5px;padding:5px}:host .message-parent .loading-text{margin:auto}:host fluent-card{background:var(--channel-picker-dropdown-background-color,var(--fill-color));padding:2px;--card-height:auto;--width:var(--card-width)}:host fluent-text-field{width:100%}:host fluent-text-field::part(root){background:padding-box linear-gradient(var(--channel-picker-input-background-color,var(--neutral-fill-input-rest)),var(--channel-picker-input-background-color,var(--neutral-fill-input-rest))),border-box var(--channel-picker-input-border-color,var(--neutral-stroke-input-rest))}:host fluent-text-field::part(root):hover{background:padding-box linear-gradient(var(--channel-picker-input-background-color-hover,var(--neutral-fill-input-hover)),var(--channel-picker-input-background-color-hover,var(--neutral-fill-input-hover))),border-box var(--channel-picker-input-hover-border-color,var(--neutral-stroke-input-hover))}:host fluent-text-field::part(root):focus,:host fluent-text-field::part(root):focus-within{background:padding-box linear-gradient(var(--channel-picker-input-background-color-focus,var(--neutral-fill-input-focus)),var(--channel-picker-input-background-color-focus,var(--neutral-fill-input-focus))),border-box var(--channel-picker-input-focus-border-color,var(--neutral-stroke-input-focus))}:host fluent-text-field::part(control){word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host fluent-text-field::part(control)::placeholder{color:var(--channel-picker-input-placeholder-text-color,var(--input-placeholder-rest))}:host fluent-text-field::part(control):hover::placeholder{color:var(--channel-picker-input-placeholder-text-color-hover,var(--input-placeholder-hover))}:host fluent-text-field::part(control):focus-within::placeholder,:host fluent-text-field::part(control):focus::placeholder{color:var(--channel-picker-input-placeholder-text-color-focus,var(--input-placeholder-filled))}:host fluent-text-field .search-icon svg path{fill:var(--channel-picker-search-icon-color,currentColor)}:host fluent-text-field .down-chevron{height:auto;min-width:auto}:host fluent-text-field .down-chevron svg path{fill:var(--channel-picker-down-chevron-color,currentColor)}:host fluent-text-field .up-chevron{height:auto;min-width:auto}:host fluent-text-field .up-chevron svg path{fill:var(--channel-picker-up-chevron-color,currentColor)}:host fluent-text-field .close-icon{height:auto;min-width:auto}:host fluent-text-field .close-icon svg path{fill:var(--channel-picker-close-icon-color,currentColor)}:host fluent-tree-view{min-width:100%;--tree-item-nested-width:2em}:host fluent-tree-item{width:100%;--tree-item-nested-width:2em}:host fluent-tree-item:focus-visible{outline:0}:host fluent-tree-item::part(expand-collapse-button){background:0 0}:host fluent-tree-item::part(content-region),:host fluent-tree-item::part(positioning-region){color:var(--channel-picker-dropdown-item-text-color,currentColor);background:var(--channel-picker-dropdown-background-color,transparent);border:calc(var(--stroke-width) * 2px) solid transparent;height:auto}:host fluent-tree-item::part(content-region):hover,:host fluent-tree-item::part(positioning-region):hover{background:var(--channel-picker-dropdown-item-background-color-hover,var(--neutral-fill-stealth-hover))}:host fluent-tree-item::part(content-region):hover::part(expand-collapse-button),:host fluent-tree-item::part(positioning-region):hover::part(expand-collapse-button){background:var(--channel-picker-dropdown-item-background-color-hover,var(--neutral-fill-stealth-hover))}:host fluent-tree-item fluent-tree-item::part(content-region){height:auto}:host fluent-breadcrumb-item{color:var(--channel-picker-dropdown-item-text-color-selected,var(--neutral-foreground-rest))}:host fluent-breadcrumb-item .team-parent-name{font-weight:700}:host fluent-breadcrumb-item .team-photo{width:19px;position:inherit;border-radius:50%}:host fluent-breadcrumb-item .arrow{margin-left:8px;margin-right:8px}:host fluent-breadcrumb-item .arrow svg{stroke:var(--channel-picker-arrow-fill,var(--neutral-foreground-rest))}[dir=rtl] :host{--direction:rtl}[dir=rtl] .dropdown{text-align:right}[dir=rtl] .arrow{transform:scaleX(-1);filter:fliph;filter:"FlipH";margin-right:0;margin-left:5px}[dir=rtl] .selected-team{padding-left:10px}[dir=rtl] .message-parent .loading-text{right:auto;left:10px;padding-right:8px;text-align:right}@media (forced-colors:active) and (prefers-color-scheme:dark){:host fluent-text-field svg{stroke:rgb(255,255,255)!important}}@media (forced-colors:active) and (prefers-color-scheme:light){:host fluent-text-field svg{stroke:rgb(0,0,0)!important}}
`];var Dh=function(u,l,n,o){return new(n||(n=Promise))(function(y,k){function z($e){try{xe(o.next($e))}catch(Ze){k(Ze)}}function fe($e){try{xe(o.throw($e))}catch(Ze){k(Ze)}}function xe($e){$e.done?y($e.value):function p(y){return y instanceof n?y:new n(function(k){k(y)})}($e.value).then(z,fe)}xe((o=o.apply(u,l||[])).next())})};const bv=["Team.ReadBasic.All","TeamSettings.Read.All","TeamSettings.ReadWrite.All","User.Read.All","User.ReadWrite.All"],xh=["Channel.ReadBasic.All","ChannelSettings.Read.All","ChannelSettings.ReadWrite.All"],Hb=["Team.ReadBasic.All","TeamSettings.Read.All","TeamSettings.ReadWrite.All"],zb={inputPlaceholderText:"Select a channel",noResultsFound:"We didn't find any matches.",loadingMessage:"Loading...",photoFor:"Teams photo for",teamsChannels:"Teams and channels results",closeButtonAriaLabel:"remove the selected channel",downChevronButtonAriaLabel:"Teams show results button",upChevronButtonAriaLabel:"Teams hide results button"};let Cv=(()=>{class u extends Qr.g{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var n;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&null!==(n=this.$fastController.definition.shadowOptions)&&void 0!==n&&n.delegatesFocus&&(this.focus=()=>{var o;null===(o=this.control)||void 0===o||o.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}return(0,Dt.Cg)([an.CF],u.prototype,"download",void 0),(0,Dt.Cg)([an.CF],u.prototype,"href",void 0),(0,Dt.Cg)([an.CF],u.prototype,"hreflang",void 0),(0,Dt.Cg)([an.CF],u.prototype,"ping",void 0),(0,Dt.Cg)([an.CF],u.prototype,"referrerpolicy",void 0),(0,Dt.Cg)([an.CF],u.prototype,"rel",void 0),(0,Dt.Cg)([an.CF],u.prototype,"target",void 0),(0,Dt.Cg)([an.CF],u.prototype,"type",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"defaultSlottedContent",void 0),u})(),Up=(()=>{class u{}return(0,Dt.Cg)([(0,an.CF)({attribute:"aria-expanded"})],u.prototype,"ariaExpanded",void 0),u})();(0,gi.X)(Up,no.z),(0,gi.X)(Cv,Hi.qw,Up);let Mh=(()=>{class u extends Cv{constructor(){super(...arguments),this.separator=!0}}return(0,Dt.Cg)([rn.sH],u.prototype,"separator",void 0),u})();(0,gi.X)(Mh,Hi.qw,Up);let wv=(()=>{class u extends Qr.g{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(void 0===this.slottedBreadcrumbItems||0===this.slottedBreadcrumbItems.length)return;const n=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(o=>{const p=o===n;this.setItemSeparator(o,p),this.setAriaCurrent(o,p)})}}setItemSeparator(n,o){n instanceof Mh&&(n.separator=!o)}findChildWithHref(n){var o,p;return n.childElementCount>0?n.querySelector("a[href]"):null!==(o=n.shadowRoot)&&void 0!==o&&o.childElementCount?null===(p=n.shadowRoot)||void 0===p?void 0:p.querySelector("a[href]"):null}setAriaCurrent(n,o){const p=this.findChildWithHref(n);null===p&&n.hasAttribute("href")&&n instanceof Mh?o?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current"):null!==p&&(o?p.setAttribute("aria-current","page"):p.removeAttribute("aria-current"))}}return(0,Dt.Cg)([rn.sH],u.prototype,"slottedBreadcrumbItems",void 0),u})();var Wl=d(829);const Bp=wv.compose({baseName:"breadcrumb",template:(u,l)=>mi.q`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${(0,Ro.e)({property:"slottedBreadcrumbItems",filter:(0,Wl.Y)()})}
            ></slot>
        </div>
    </template>
`,styles:(u,l)=>_i.A`
  ${(0,Oo.V)("inline-block")} :host {
    box-sizing: border-box;
    ${pa.Ah};
  }

  .list {
    display: flex;
  }
`}),mc=Mh.compose({baseName:"breadcrumb-item",template:(u,l)=>mi.q`
    <div role="listitem" class="listitem" part="listitem">
        ${(0,is.z)(n=>n.href&&n.href.length>0,mi.q`
                ${((u,l)=>mi.q`
    <a
        class="control"
        part="control"
        download="${n=>n.download}"
        href="${n=>n.href}"
        hreflang="${n=>n.hreflang}"
        ping="${n=>n.ping}"
        referrerpolicy="${n=>n.referrerpolicy}"
        rel="${n=>n.rel}"
        target="${n=>n.target}"
        type="${n=>n.type}"
        aria-atomic="${n=>n.ariaAtomic}"
        aria-busy="${n=>n.ariaBusy}"
        aria-controls="${n=>n.ariaControls}"
        aria-current="${n=>n.ariaCurrent}"
        aria-describedby="${n=>n.ariaDescribedby}"
        aria-details="${n=>n.ariaDetails}"
        aria-disabled="${n=>n.ariaDisabled}"
        aria-errormessage="${n=>n.ariaErrormessage}"
        aria-expanded="${n=>n.ariaExpanded}"
        aria-flowto="${n=>n.ariaFlowto}"
        aria-haspopup="${n=>n.ariaHaspopup}"
        aria-hidden="${n=>n.ariaHidden}"
        aria-invalid="${n=>n.ariaInvalid}"
        aria-keyshortcuts="${n=>n.ariaKeyshortcuts}"
        aria-label="${n=>n.ariaLabel}"
        aria-labelledby="${n=>n.ariaLabelledby}"
        aria-live="${n=>n.ariaLive}"
        aria-owns="${n=>n.ariaOwns}"
        aria-relevant="${n=>n.ariaRelevant}"
        aria-roledescription="${n=>n.ariaRoledescription}"
        ${(0,ro.K)("control")}
    >
        ${(0,Hi.LT)(u,l)}
        <span class="content" part="content">
            <slot ${(0,Ro.e)("defaultSlottedContent")}></slot>
        </span>
        ${(0,Hi.aO)(u,l)}
    </a>
`)(u,l)}
            `)}
        ${(0,is.z)(n=>!n.href,mi.q`
                ${(0,Hi.LT)(u,l)}
                <slot></slot>
                ${(0,Hi.aO)(u,l)}
            `)}
        ${(0,is.z)(n=>n.separator,mi.q`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${l.separator||""}</slot>
                </span>
            `)}
    </div>
`,styles:(u,l)=>_i.A`
    ${(0,Oo.V)("inline-flex")} :host {
      background: transparent;
      color: ${Et.lHw};
      fill: currentcolor;
      box-sizing: border-box;
      ${pa.Ah};
      min-width: calc(${jr.D} * 1px);
      border-radius: calc(${Et.PbG} * 1px);
    }

    .listitem {
      display: flex;
      align-items: center;
      border-radius: inherit;
    }

    .control {
      position: relative;
      align-items: center;
      box-sizing: border-box;
      color: inherit;
      fill: inherit;
      cursor: pointer;
      display: flex;
      outline: none;
      text-decoration: none;
      white-space: nowrap;
      border-radius: inherit;
    }

    .control:hover {
      color: ${Et.LnO};
    }

    .control:active {
      color: ${Et.LIX};
    }

    .control:${vr.N} {
      ${fl.v}
    }

    :host(:not([href])),
    :host([aria-current]) .control {
      color: ${Et.lHw};
      fill: currentcolor;
      cursor: default;
    }

    .start {
      display: flex;
      margin-inline-end: 6px;
    }

    .end {
      display: flex;
      margin-inline-start: 6px;
    }

    .separator {
      display: flex;
    }
  `.withBehaviors((0,Vs.mr)(_i.A`
        :host(:not([href])),
        .start,
        .end,
        .separator {
          background: ${En.A.ButtonFace};
          color: ${En.A.ButtonText};
          fill: currentcolor;
        }
        .separator {
          fill: ${En.A.ButtonText};
        }
        :host([href]) {
          forced-color-adjust: none;
          background: ${En.A.ButtonFace};
          color: ${En.A.LinkText};
        }
        :host([href]) .control:hover {
          background: ${En.A.LinkText};
          color: ${En.A.HighlightText};
          fill: currentcolor;
        }
        .control:${vr.N} {
          outline-color: ${En.A.LinkText};
        }
      `)),shadowOptions:{delegatesFocus:!0},separator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  '});function Wo(u){return(0,rc.sb)(u)&&"treeitem"===u.getAttribute("role")}let Is=(()=>{class u extends Qr.g{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>Wo(this.parentElement),this.handleExpandCollapseButtonClick=n=>{!this.disabled&&!n.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=n=>{this.setAttribute("tabindex","0")},this.handleBlur=n=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(n,o){this.$fastController.isConnected&&this.items.forEach(p=>{Wo(p)&&(p.nested=!0)})}static focusItem(n){n.focusable=!0,n.focus()}childItemLength(){const n=this.childItems.filter(o=>Wo(o));return n?n.length:0}}return(0,Dt.Cg)([(0,an.CF)({mode:"boolean"})],u.prototype,"expanded",void 0),(0,Dt.Cg)([(0,an.CF)({mode:"boolean"})],u.prototype,"selected",void 0),(0,Dt.Cg)([(0,an.CF)({mode:"boolean"})],u.prototype,"disabled",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"focusable",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"childItems",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"items",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"nested",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"renderCollapsedChildren",void 0),u})();(0,gi.X)(Is,Hi.qw);const Kb=(()=>{class u extends Qr.g{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=n=>{if(!(this.slottedTreeItems.length<1)){if(n.target===this)return null===this.currentFocused&&(this.currentFocused=this.getValidFocusableItem()),void(null!==this.currentFocused&&Is.focusItem(this.currentFocused));this.contains(n.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=n.target)}},this.handleBlur=n=>{n.target instanceof HTMLElement&&(null===n.relatedTarget||!this.contains(n.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=n=>{if(n.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const o=this.getVisibleNodes();switch(n.key){case Pn.Tg:return void(o.length&&Is.focusItem(o[0]));case Pn.FM:return void(o.length&&Is.focusItem(o[o.length-1]));case Pn.kT:if(n.target&&this.isFocusableElement(n.target)){const p=n.target;p instanceof Is&&p.childItemLength()>0&&p.expanded?p.expanded=!1:p instanceof Is&&p.parentElement instanceof Is&&Is.focusItem(p.parentElement)}return!1;case Pn.bb:if(n.target&&this.isFocusableElement(n.target)){const p=n.target;p instanceof Is&&p.childItemLength()>0&&!p.expanded?p.expanded=!0:p instanceof Is&&p.childItemLength()>0&&this.focusNextNode(1,n.target)}return;case Pn.HX:return void(n.target&&this.isFocusableElement(n.target)&&this.focusNextNode(1,n.target));case Pn.I5:return void(n.target&&this.isFocusableElement(n.target)&&this.focusNextNode(-1,n.target));case Pn.Mm:return void this.handleClick(n)}return!0},this.handleSelectedChange=n=>{if(n.defaultPrevented)return;if(!(n.target instanceof Element&&Wo(n.target)))return!0;const o=n.target;o.selected?(this.currentSelected&&this.currentSelected!==o&&(this.currentSelected.selected=!1),this.currentSelected=o):!o.selected&&this.currentSelected===o&&(this.currentSelected=null)},this.setItems=()=>{const n=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=n,(null===this.currentFocused||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(p=>{Wo(p)&&(p.nested=this.nested)})},this.isFocusableElement=n=>Wo(n),this.isSelectedElement=n=>n.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),Er.dv.queueUpdate(()=>{this.setItems()})}handleClick(n){if(n.defaultPrevented)return;if(!(n.target instanceof Element&&Wo(n.target)))return!0;const o=n.target;o.disabled||(o.selected=!o.selected)}focusNextNode(n,o){const p=this.getVisibleNodes();if(!p)return;const y=p[p.indexOf(o)+n];(0,rc.sb)(y)&&Is.focusItem(y)}getValidFocusableItem(){const n=this.getVisibleNodes();let o=n.findIndex(this.isSelectedElement);return-1===o&&(o=n.findIndex(this.isFocusableElement)),-1!==o?n[o]:null}checkForNestedItems(){return this.slottedTreeItems.some(n=>Wo(n)&&n.querySelector("[role='treeitem']"))}getVisibleNodes(){return(0,rc.JL)(this,"[role='treeitem']")||[]}}return(0,Dt.Cg)([(0,an.CF)({attribute:"render-collapsed-nodes"})],u.prototype,"renderCollapsedNodes",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"currentSelected",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"slottedTreeItems",void 0),u})().compose({baseName:"tree-view",template:(u,l)=>mi.q`
    <template
        role="tree"
        ${(0,ro.K)("treeView")}
        @keydown="${(n,o)=>n.handleKeyDown(o.event)}"
        @focusin="${(n,o)=>n.handleFocus(o.event)}"
        @focusout="${(n,o)=>n.handleBlur(o.event)}"
        @click="${(n,o)=>n.handleClick(o.event)}"
        @selected-change="${(n,o)=>n.handleSelectedChange(o.event)}"
    >
        <slot ${(0,Ro.e)("slottedTreeItems")}></slot>
    </template>
`,styles:(u,l)=>_i.A`
  :host([hidden]) {
    display: none;
  }

  ${(0,Oo.V)("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`});var Oh=d(7179);class qb extends Wl.n{constructor(l,n){super(l,n),this.observer=null,n.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return Array.from("subtree"in this.options?this.target.querySelectorAll(this.options.selector):this.target.childNodes)}}var Cl=d(1859);const Iv=_i.A`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${jr.D} * -1px));
  }
  :host([selected])::after {
    left: calc(${Et.vdx} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,vc=_i.A`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${jr.D} * -1px));
  }
  :host([selected])::after {
    right: calc(${Et.vdx} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Yd=_i.L`((${Et.Sss} / 2) * ${Et.vR1}) + ((${Et.vR1} * ${Et.Brd}) / 2)`,Vp=Cl.G.create("tree-item-expand-collapse-hover").withDefault(u=>{const l=Et.EE_.getValueFor(u);return l.evaluate(u,l.evaluate(u).hover).hover}),Nh=Cl.G.create("tree-item-expand-collapse-selected-hover").withDefault(u=>{const l=Et.jIq.getValueFor(u);return Et.EE_.getValueFor(u).evaluate(u,l.evaluate(u).rest).hover}),Dv=Is.compose({baseName:"tree-item",template:(u,l)=>mi.q`
    <template
        role="treeitem"
        slot="${n=>n.isNestedItem()?"item":void 0}"
        tabindex="-1"
        class="${n=>n.expanded?"expanded":""} ${n=>n.selected?"selected":""} ${n=>n.nested?"nested":""}
            ${n=>n.disabled?"disabled":""}"
        aria-expanded="${n=>n.childItems&&n.childItemLength()>0?n.expanded:void 0}"
        aria-selected="${n=>n.selected}"
        aria-disabled="${n=>n.disabled}"
        @focusin="${(n,o)=>n.handleFocus(o.event)}"
        @focusout="${(n,o)=>n.handleBlur(o.event)}"
        ${function Zd(u){return"string"==typeof u&&(u={property:u}),new Oh.xz("fast-children",qb,u)}({property:"childItems",filter:(0,Wl.Y)()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${(0,is.z)(n=>n.childItems&&n.childItemLength()>0,mi.q`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(n,o)=>n.handleExpandCollapseButtonClick(o.event)}"
                            ${(0,ro.K)("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${l.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${(0,Hi.LT)(u,l)}
                <slot></slot>
                ${(0,Hi.aO)(u,l)}
            </div>
        </div>
        ${(0,is.z)(n=>n.childItems&&n.childItemLength()>0&&(n.expanded||n.renderCollapsedChildren),mi.q`
                <div role="group" class="items" part="items">
                    <slot name="item" ${(0,Ro.e)("items")}></slot>
                </div>
            `)}
    </template>
`,styles:(u,l)=>_i.A`
    ${(0,Oo.V)("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${Et.lHw};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${Et.OCo};
      --expand-collapse-button-size: calc(${jr.D} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${Et.WlO};
      border: calc(${Et.XAH} * 1px) solid transparent;
      border-radius: calc(${Et.PbG} * 1px);
      height: calc((${jr.D} + 1) * 1px);
    }

    :host(:${vr.N}) .positioning-region {
      ${fl.W}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${Et.oO8};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${Et.wOW};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${jr.D} * 1px);
      margin-inline-start: calc(${Et.vR1} * 2px + 8px);
      ${pa.Ah}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${Et.vR1} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${Et.PbG} * 1px);
      ${""} width: calc((${Yd} + (${Et.vR1} * 2)) * 1px);
      height: calc((${Yd} + (${Et.vR1} * 2)) * 1px);
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 0 6px;
    }

    .expand-collapse-button svg {
      transition: transform 0.1s linear;
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
    }

    .start {
      ${""} margin-inline-end: calc(${Et.vR1} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${Et.vR1} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${Et.qB4};
      cursor: ${dc.Z};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${Vp};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${Et.v8G};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${Nh};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${jr.D} / 4) * 1px);
      width: 3px;
      height: calc((${jr.D} / 2) * 1px);
      ${""} background: ${Et.IRh};
      border-radius: calc(${Et.PbG} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${jr.D} * -1px);
    }
  `.withBehaviors(new hc(Iv,vc),(0,Vs.mr)(_i.A`
        :host {
          color: ${En.A.ButtonText};
        }
        .positioning-region {
          border-color: ${En.A.ButtonFace};
          background: ${En.A.ButtonFace};
        }
        :host(:not([disabled])) .positioning-region:hover,
        :host(:not([disabled])) .positioning-region:active,
        :host(:not([disabled])[selected]) .positioning-region {
          background: ${En.A.Highlight};
        }
        :host .positioning-region:hover .content-region,
        :host([selected]) .positioning-region .content-region {
          forced-color-adjust: none;
          color: ${En.A.HighlightText};
        }
        :host([disabled][selected]) .positioning-region .content-region {
          color: ${En.A.GrayText};
        }
        :host([selected])::after {
          background: ${En.A.HighlightText};
        }
        :host(:${vr.N}) .positioning-region {
          forced-color-adjust: none;
          outline-color: ${En.A.ButtonFace};
        }
        :host([disabled]),
        :host([disabled]) .content-region,
        :host([disabled]) .positioning-region:hover .content-region {
          opacity: 1;
          color: ${En.A.GrayText};
        }
        :host(.nested) .expand-collapse-button:hover,
        :host(:not([disabled])[selected]) .expand-collapse-button:hover {
          background: ${En.A.ButtonFace};
          fill: ${En.A.ButtonText};
        }
      `)),expandCollapseGlyph:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  '});var Lh=function(u,l,n,o){var k,p=arguments.length,y=p<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(u,l,n,o);else for(var z=u.length-1;z>=0;z--)(k=u[z])&&(y=(p<3?k(y):p>3?k(l,n,y):k(l,n))||y);return p>3&&y&&Object.defineProperty(l,n,y),y},jp=function(u,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(u,l)},zp=function(u,l,n,o){return new(n||(n=Promise))(function(y,k){function z($e){try{xe(o.next($e))}catch(Ze){k(Ze)}}function fe($e){try{xe(o.throw($e))}catch(Ze){k(Ze)}}function xe($e){$e.done?y($e.value):function p(y){return y instanceof n?y:new n(function(k){k(y)})}($e.value).then(z,fe)}xe((o=o.apply(u,l||[])).next())})};let Gp=(()=>{class u extends Bs.N{static get styles(){return yv}get strings(){return zb}get selectedItem(){return this._selectedItemState?{channel:this._selectedItemState.item,team:this._selectedItemState.parent.item}:null}static get requiredScopes(){return["team.readbasic.all","channel.readbasic.all"]}set items(n){this._items!==n&&(this._items=n,this._treeViewState=n?this.generateTreeViewState(n):[],this.resetFocusState())}get items(){return this._items}get _inputWrapper(){return this.renderRoot.querySelector("fluent-text-field")}get _input(){const n=this._inputWrapper;return n?.shadowRoot.querySelector("input")}constructor(){super(),this.teamsPhotos={},this._inputValue="",this._treeViewState=[],this._focusList=[],this.renderLoading=()=>this.renderContent(),this.renderContent=()=>{var n;const o={dropdown:!0,visible:this._isDropdownVisible};return this.renderTemplate("default",{teams:null!==(n=this.items)&&void 0!==n?n:[]})||Lt.qy`
        <div class="container" @blur=${this.lostFocus}>
          <fluent-text-field
            autocomplete="off"
            appearance="outline"
            id="teams-channel-picker-input"
            role="combobox"
            placeholder="${this._selectedItemState?"":this.strings.inputPlaceholderText} "
            aria-label=${this.strings.inputPlaceholderText}
            aria-expanded="${this._isDropdownVisible}"
            label="teams-channel-picker-input"
            @focus=${this.handleFocus}
            @keyup=${this.handleInputChanged}
            @click=${this.handleInputClick}
            @keydown=${this.handleInputKeydown}
          >
            <div tabindex="0" slot="start" style="width: max-content;">${this.renderSelected()}</div>
            <div tabindex="0" slot="end">${this.renderChevrons()}${this.renderCloseButton()}</div>
          </fluent-text-field>
          <fluent-card
            class=${(0,Ht.H)(o)}
          >
            ${this.renderDropdown()}
          </fluent-card>
        </div>`},this.handleInputClick=n=>{n.stopPropagation(),this.gainedFocus()},this.handleInputKeydown=n=>{const o=n.key;["ArrowDown","Enter"].includes(o)?this._isDropdownVisible?this.renderRoot.querySelector("fluent-tree-item").focus():this.gainedFocus():"Escape"===o&&this.lostFocus()},this.onClickCloseButton=()=>{this.removeSelectedChannel(null)},this.onKeydownCloseButton=n=>{"Enter"===n.key&&this.removeSelectedChannel(null)},this.renderError=()=>this.renderTemplate("error",null,"error")||Lt.qy`
        <div class="message-parent">
          <div
            label="search-error-text"
            aria-live="polite"
            aria-relevant="all"
            aria-atomic="true"
            class="search-error-text"
          >
            ${this.strings.noResultsFound}
          </div>
        </div>
      `,this.renderLoadingIndicator=()=>this.renderTemplate("loading",null,"loading")||or.Q`
        <div class="message-parent">
          <mgt-spinner></mgt-spinner>
          <div label="loading-text" aria-label="loading" class="loading-text">
            ${this.strings.loadingMessage}
          </div>
        </div>
      `,this.onKeydownTreeView=n=>{"Escape"===n.key&&this.lostFocus()},this.handleTeamTreeItemClick=n=>{n.preventDefault(),n.stopImmediatePropagation();const o=n.target;o&&(o.getAttribute("expanded")?o.removeAttribute("expanded"):o.setAttribute("expanded","true"),o.removeAttribute("selected"),o.getAttribute("id")&&o.setAttribute("selected","true"))},this.handleInputChanged=n=>{const o=n.target;this._inputValue!==o?.value&&(this._inputValue=o?.value,this.gainedFocus(),this.debouncedSearch||(this.debouncedSearch=(0,er.sg)(()=>{this.filterList()},400)),this.debouncedSearch())},this.loadTeamsIfNotLoaded=()=>{!this.items&&this._task.status!==xd.e1.PENDING&&this._task.run()},this.handleWindowClick=n=>{n.target!==this&&this.lostFocus()},this.gainedFocus=()=>{const n=this._input;n&&n.focus(),this._isDropdownVisible=!0,this.toggleChevron(),this.resetFocusState(),this.requestUpdate()},this.lostFocus=()=>{this._inputValue="",this._input&&(this._input.value=this._inputValue,this._input.textContent="");const n=this._inputWrapper;n&&(n.value=""),this._isDropdownVisible=!1,this.filterList(),this.toggleChevron(),this.requestUpdate(),void 0!==this._selectedItemState&&this.showCloseIcon()},this.handleFocus=()=>{this.lostFocus(),this.gainedFocus()},this.handleUpChevronClick=n=>{n.stopPropagation(),this.lostFocus()},this._inputValue="",this._treeViewState=[],this._focusList=[],this._isDropdownVisible=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this.handleWindowClick),this.addEventListener("focus",this.loadTeamsIfNotLoaded),this.addEventListener("mouseover",this.loadTeamsIfNotLoaded),this.addEventListener("blur",this.lostFocus);const n=this.renderRoot.ownerDocument;n&&n.documentElement.setAttribute("dir",this.direction)}disconnectedCallback(){window.removeEventListener("click",this.handleWindowClick),this.removeEventListener("focus",this.loadTeamsIfNotLoaded),this.removeEventListener("mouseover",this.loadTeamsIfNotLoaded),this.removeEventListener("blur",this.lostFocus),super.disconnectedCallback()}args(){return[]}selectChannelById(n){return zp(this,void 0,void 0,function*(){const o=xi.b.globalProvider;if(o&&o.state===Di.HJ.SignedIn){this.items||(yield this._task.run());for(const p of this._treeViewState)for(const y of p.channels)if(y.item.id===n)return p.isExpanded=!0,this.selectChannel(y),this.markSelectedChannelInDropdown(n),!0}return!1})}markSelectedChannelInDropdown(n){const o=this.renderRoot.querySelector(`[id='${n}']`);o&&(o.setAttribute("selected","true"),o.parentElement&&o.parentElement.setAttribute("expanded","true"))}renderSelected(){var n,o,p,y,k,z;if(!this._selectedItemState)return this.renderSearchIcon();let fe;if(this._selectedItemState.parent.channels){const Ze=null===(n=this.teamsPhotos[this._selectedItemState.parent.item.id])||void 0===n?void 0:n.photo;fe=Lt.qy`<img
        class="team-photo"
        alt="${this._selectedItemState.parent.item.displayName}"
        role="img"
        src=${Ze} />`}const xe=null===(y=null===(p=null===(o=this._selectedItemState)||void 0===o?void 0:o.parent)||void 0===p?void 0:p.item)||void 0===y?void 0:y.displayName.trim(),$e=null===(z=null===(k=this._selectedItemState)||void 0===k?void 0:k.item)||void 0===z?void 0:z.displayName.trim();return Lt.qy`
      <fluent-breadcrumb title=${this._selectedItemState.item.displayName}>
        <fluent-breadcrumb-item>
          <span slot="start">${fe}</span>
          <span class="team-parent-name">${xe}</span>
          <span slot="separator" class="arrow">${(0,Vn.r)(Vn.A.TeamSeparator,"#000000")}</span>
        </fluent-breadcrumb-item>
        <fluent-breadcrumb-item>${$e}</fluent-breadcrumb-item>
      </fluent-breadcrumb>`}clearState(){this._inputValue="",this._treeViewState=[],this._focusList=[],this._isDropdownVisible=!1}renderSearchIcon(){return Lt.qy`
      <div class="search-icon">
        ${(0,Vn.r)(Vn.A.Search,"#252424")}
      </div>
    `}renderCloseButton(){return Lt.qy`
      <fluent-button
        appearance="stealth"
        class="close-icon"
        style="display:none"
        aria-label=${this.strings.closeButtonAriaLabel}
        @click=${this.onClickCloseButton}
        @keydown=${this.onKeydownCloseButton}>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.0885911 0.215694L0.146447 0.146447C0.320013 -0.0271197 0.589437 -0.046405 0.784306 0.0885911L0.853553 0.146447L4 3.293L7.14645 0.146447C7.34171 -0.0488154 7.65829 -0.0488154 7.85355 0.146447C8.04882 0.341709 8.04882 0.658291 7.85355 0.853553L4.707 4L7.85355 7.14645C8.02712 7.32001 8.0464 7.58944 7.91141 7.78431L7.85355 7.85355C7.67999 8.02712 7.41056 8.0464 7.21569 7.91141L7.14645 7.85355L4 4.707L0.853553 7.85355C0.658291 8.04882 0.341709 8.04882 0.146447 7.85355C-0.0488154 7.65829 -0.0488154 7.34171 0.146447 7.14645L3.293 4L0.146447 0.853553C-0.0271197 0.679987 -0.046405 0.410563 0.0885911 0.215694L0.146447 0.146447L0.0885911 0.215694Z" fill="#212121"/>
        </svg>
      </fluent-button>
    `}showCloseIcon(){const n=this.renderRoot.querySelector(".down-chevron"),o=this.renderRoot.querySelector(".up-chevron"),p=this.renderRoot.querySelector(".close-icon");n&&(n.style.display="none"),o&&(o.style.display="none"),p&&(p.style.display=null)}renderDownChevron(){return Lt.qy`
      <fluent-button
        aria-label=${this.strings.downChevronButtonAriaLabel}
        appearance="stealth"
        class="down-chevron"
        @click=${this.gainedFocus}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.21967 4.46967C2.51256 4.17678 2.98744 4.17678 3.28033 4.46967L6 7.18934L8.71967 4.46967C9.01256 4.17678 9.48744 4.17678 9.78033 4.46967C10.0732 4.76256 10.0732 5.23744 9.78033 5.53033L6.53033 8.78033C6.23744 9.07322 5.76256 9.07322 5.46967 8.78033L2.21967 5.53033C1.92678 5.23744 1.92678 4.76256 2.21967 4.46967Z" fill="#212121" />
        </svg>
      </fluent-button>`}renderUpChevron(){return Lt.qy`
      <fluent-button
        aria-label=${this.strings.upChevronButtonAriaLabel}
        appearance="stealth"
        style="display:none"
        class="up-chevron"
        @click=${this.handleUpChevronClick}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.21967 7.53033C2.51256 7.82322 2.98744 7.82322 3.28033 7.53033L6 4.81066L8.71967 7.53033C9.01256 7.82322 9.48744 7.82322 9.78033 7.53033C10.0732 7.23744 10.0732 6.76256 9.78033 6.46967L6.53033 3.21967C6.23744 2.92678 5.76256 2.92678 5.46967 3.21967L2.21967 6.46967C1.92678 6.76256 1.92678 7.23744 2.21967 7.53033Z" fill="#212121" />
        </svg>
      </fluent-button>`}renderChevrons(){return Lt.qy`${this.renderUpChevron()}${this.renderDownChevron()}`}renderDropdown(){return this._task.status!==xd.e1.PENDING&&this._treeViewState?this._treeViewState?0===this._treeViewState.length&&this._inputValue.length>0?this.renderError():this.renderDropdownList(this._treeViewState):Lt.qy``:this.renderLoadingIndicator()}renderDropdownList(n){if(n&&n.length>0){let o=null;return Lt.qy`
        <fluent-tree-view
          class="tree-view"
          dir=${this.direction}
          aria-live="polite"
          aria-relevant="all"
          aria-atomic="true"
          aria-label=${this.strings.teamsChannels}
          aria-orientation="horizontal"
          @keydown=${this.onKeydownTreeView}>
          ${(0,xo.u)(n,p=>p?.item,p=>{var y;return p.channels&&(o=Lt.qy`<img
                  class="team-photo"
                  alt="${this.strings.photoFor} ${p.item.displayName}"
                  src=${null===(y=this.teamsPhotos[p.item.id])||void 0===y?void 0:y.photo} />`),Lt.qy`
                <fluent-tree-item
                  ?expanded=${p?.isExpanded}
                  @click=${this.handleTeamTreeItemClick}>
                    <span slot="start">${o}</span>${p.item.displayName}
                    ${(0,xo.u)(p?.channels,k=>k.item,k=>this.renderItem(k))}
                </fluent-tree-item>`})}
        </fluent-tree-view>`}return null}renderItem(n){var o;return Lt.qy`
      <fluent-tree-item
        id=${null===(o=n?.item)||void 0===o?void 0:o.id}
        @keydown=${p=>this.onUserKeyDown(p,n)}
        @click=${()=>this.handleItemClick(n)}>
          ${n?.item.displayName}
      </fluent-tree-item>`}loadState(){return zp(this,void 0,void 0,function*(){const n=xi.b.globalProvider;let o;if(n&&n.state===Di.HJ.SignedIn){const p=n.graph.forComponent(this);o=yield(u=>Dh(void 0,void 0,void 0,function*(){const l=bv,n=yield u.api("/me/joinedTeams").select(["displayName","id","isArchived"]).middlewareOptions((0,Rr.F)(l)).get();return n?.value}))(p),o=o.filter(k=>!k.isArchived);const y=o.map(k=>k.id);this.teamsPhotos=yield((u,l)=>Dh(void 0,void 0,void 0,function*(){let n,o={};if((0,Bl.HJ)()){n=qr._.getCache(Mo.j.photos,Mo.j.photos.stores.teams);for(const p of l)try{const y=yield n.getValue(p);y&&(0,Bl.aC)()>Date.now()-y.timeCached&&(o[p]=y)}catch{}if(Object.keys(o).length)return o}o={};for(const p of l)try{const y=yield(0,Bl.e_)(u,`/teams/${p}`,Hb);(0,Bl.HJ)()&&y&&(yield n.putValue(p,y)),o[p]=y}catch{}return o}))(p,y),this._items=yield((u,l)=>Dh(void 0,void 0,void 0,function*(){var n,o;const p=u.createBatch();for(const z of l)p.get(z.id,`teams/${z.id}/channels`,xh);const y=yield p.executeAll(),k=[];for(const z of l){const fe=y.get(z.id);null!==(o=null===(n=fe?.content)||void 0===n?void 0:n.value)&&void 0!==o&&o.length&&k.push({item:z,channels:fe.content.value.map(xe=>({item:xe}))})}return k}))(p,o)}this.filterList(),this.resetFocusState()})}clearSelectedItem(){this.removeSelectedChannel()}removeSelectedChannel(n){this.selectChannel(n);const o=this.renderRoot.querySelectorAll("fluent-tree-item");o&&o.forEach(p=>{p.removeAttribute("expanded"),p.removeAttribute("selected")})}handleItemClick(n){n.channels?n.isExpanded=!n.isExpanded:(this.selectChannel(n),this.lostFocus())}onUserKeyDown(n,o){switch(n.code){case"Enter":this.selectChannel(o),this.resetFocusState(),this.lostFocus(),n.preventDefault();break;case"Backspace":0===this._inputValue.length&&this._selectedItemState&&(this.selectChannel(null),this.resetFocusState(),n.preventDefault())}}filterList(){this.items&&(this._treeViewState=this.generateTreeViewState(this.items,this._inputValue),this.resetFocusState())}generateTreeViewState(n,o="",p=null){const y=[];if(o=o.toLowerCase(),n)for(const k of n){let z;if(0===o.length||k.item.displayName.toLowerCase().includes(o))z={item:k.item,parent:p},k.channels&&(z.channels=this.generateTreeViewState(k.channels,"",z),z.isExpanded=o.length>0);else if(k.channels){const fe={item:k.item,parent:p},xe=this.generateTreeViewState(k.channels,o,fe);xe.length>0&&(z=fe,z.channels=xe,z.isExpanded=!0)}z&&y.push(z)}return y}generateFocusList(n){if(!n||0===n.length)return[];let o=[];for(const p of n)o.push(p),p.channels&&p.isExpanded&&(o=[...o,...this.generateFocusList(p.channels)]);return o}resetFocusState(){this._focusList=this.generateFocusList(this._treeViewState),this.requestUpdate()}selectChannel(n){var o,p;n&&this._selectedItemState!==n?null===(o=this._input)||void 0===o||o.setAttribute("disabled","true"):null===(p=this._input)||void 0===p||p.removeAttribute("disabled"),this._selectedItemState=n,this.lostFocus(),this.fireCustomEvent("selectionChanged",this.selectedItem)}hideCloseIcon(){const n=this.renderRoot.querySelector(".close-icon");n&&(n.style.display="none")}toggleChevron(){const n=this.renderRoot.querySelector(".down-chevron"),o=this.renderRoot.querySelector(".up-chevron");this._isDropdownVisible?(n&&(n.style.display="none"),o&&(o.style.display=null)):(n&&(n.style.display=null,this.hideCloseIcon()),o&&(o.style.display="none")),this.hideCloseIcon()}}return Lh([(0,Mt.wk)(),jp("design:type",Object)],u.prototype,"_selectedItemState",void 0),Lh([(0,Mt.wk)(),jp("design:type",Boolean)],u.prototype,"_isDropdownVisible",void 0),u})();const kv=(()=>{class u extends Qr.g{constructor(){super(...arguments),this.orientation="horizontal",this.radioChangeHandler=n=>{const o=n.target;o.checked&&(this.slottedRadioButtons.forEach(p=>{p!==o&&(p.checked=!1,this.isInsideFoundationToolbar||p.setAttribute("tabindex","-1"))}),this.selectedRadio=o,this.value=o.value,o.setAttribute("tabindex","0"),this.focusedRadio=o),n.stopPropagation()},this.moveToRadioByIndex=(n,o)=>{const p=n[o];this.isInsideToolbar||(p.setAttribute("tabindex","0"),p.readOnly?this.slottedRadioButtons.forEach(y=>{y!==p&&y.setAttribute("tabindex","-1")}):(p.checked=!0,this.selectedRadio=p)),this.focusedRadio=p,p.focus()},this.moveRightOffGroup=()=>{var n;null===(n=this.nextElementSibling)||void 0===n||n.focus()},this.moveLeftOffGroup=()=>{var n;null===(n=this.previousElementSibling)||void 0===n||n.focus()},this.focusOutHandler=n=>{const o=this.slottedRadioButtons,p=n.target,y=null!==p?o.indexOf(p):0,k=this.focusedRadio?o.indexOf(this.focusedRadio):-1;return(0===k&&y===k||k===o.length-1&&k===y)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),o.forEach(z=>{z!==this.selectedRadio&&z.setAttribute("tabindex","-1")}))):(this.focusedRadio=o[0],this.focusedRadio.setAttribute("tabindex","0"),o.forEach(z=>{z!==this.focusedRadio&&z.setAttribute("tabindex","-1")}))),!0},this.clickHandler=n=>{const o=n.target;o&&(o.checked||0===this.slottedRadioButtons.indexOf(o)?(o.setAttribute("tabindex","0"),this.selectedRadio=o):(o.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=o),n.preventDefault()},this.shouldMoveOffGroupToTheRight=(n,o,p)=>n===o.length&&this.isInsideToolbar&&p===Pn.bb,this.shouldMoveOffGroupToTheLeft=(n,o)=>(this.focusedRadio?n.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&o===Pn.kT,this.checkFocusedRadio=()=>{null!==this.focusedRadio&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=n=>{const o=this.slottedRadioButtons;let p=0;if(p=this.focusedRadio?o.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(p,o,n.key))this.moveRightOffGroup();else for(p===o.length&&(p=0);p<o.length&&o.length>1;){if(!o[p].disabled){this.moveToRadioByIndex(o,p);break}if(this.focusedRadio&&p===o.indexOf(this.focusedRadio))break;if(p+1>=o.length){if(this.isInsideToolbar)break;p=0}else p+=1}},this.moveLeft=n=>{const o=this.slottedRadioButtons;let p=0;if(p=this.focusedRadio?o.indexOf(this.focusedRadio)-1:0,p=p<0?o.length-1:p,this.shouldMoveOffGroupToTheLeft(o,n.key))this.moveLeftOffGroup();else for(;p>=0&&o.length>1;){if(!o[p].disabled){this.moveToRadioByIndex(o,p);break}if(this.focusedRadio&&p===o.indexOf(this.focusedRadio))break;p-1<0?p=o.length-1:p-=1}},this.keydownHandler=n=>{const o=n.key;if(o in Pn.Is&&this.isInsideFoundationToolbar)return!0;switch(o){case Pn.Mm:this.checkFocusedRadio();break;case Pn.bb:case Pn.HX:this.direction===ml.O.ltr?this.moveRight(n):this.moveLeft(n);break;case Pn.kT:case Pn.I5:this.direction===ml.O.ltr?this.moveLeft(n):this.moveRight(n);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach(n=>{n.readOnly=!!this.readOnly})}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach(n=>{n.disabled=!!this.disabled})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(n=>{n.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(n=>{n.value===this.value&&(n.checked=!0,this.selectedRadio=n)}),this.$emit("change")}slottedRadioButtonsChanged(n,o){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var n;return null!==(n=this.parentToolbar)&&void 0!==n&&n}get isInsideFoundationToolbar(){var n;return!(null===(n=this.parentToolbar)||void 0===n||!n.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=Wc(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(n=>{n.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const n=this.slottedRadioButtons.filter(y=>y.hasAttribute("checked")),o=n?n.length:0;o>1&&(n[o-1].checked=!0);let p=!1;if(this.slottedRadioButtons.forEach(y=>{void 0!==this.name&&y.setAttribute("name",this.name),this.disabled&&(y.disabled=!0),this.readOnly&&(y.readOnly=!0),this.value&&this.value===y.value?(this.selectedRadio=y,this.focusedRadio=y,y.checked=!0,y.setAttribute("tabindex","0"),p=!0):(this.isInsideFoundationToolbar||y.setAttribute("tabindex","-1"),y.checked=!1),y.addEventListener("change",this.radioChangeHandler)}),void 0===this.value&&this.slottedRadioButtons.length>0){const y=this.slottedRadioButtons.filter(z=>z.hasAttribute("checked")),k=null!==y?y.length:0;if(k>0&&!p){const z=y[k-1];z.checked=!0,this.focusedRadio=z,z.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}return(0,Dt.Cg)([(0,an.CF)({attribute:"readonly",mode:"boolean"})],u.prototype,"readOnly",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"disabled",mode:"boolean"})],u.prototype,"disabled",void 0),(0,Dt.Cg)([an.CF],u.prototype,"name",void 0),(0,Dt.Cg)([an.CF],u.prototype,"value",void 0),(0,Dt.Cg)([an.CF],u.prototype,"orientation",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"childItems",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"slottedRadioButtons",void 0),u})().compose({baseName:"radio-group",template:(u,l)=>mi.q`
    <template
        role="radiogroup"
        aria-disabled="${n=>n.disabled}"
        aria-readonly="${n=>n.readOnly}"
        @click="${(n,o)=>n.clickHandler(o.event)}"
        @keydown="${(n,o)=>n.keydownHandler(o.event)}"
        @focusout="${(n,o)=>n.focusOutHandler(o.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${n=>"horizontal"===n.orientation?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${(0,Ro.e)({property:"slottedRadioButtons",filter:(0,Wl.Y)("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(u,l)=>_i.A`
  ${(0,Oo.V)("flex")} :host {
    align-items: flex-start;
    flex-direction: column;
  }

  .positioning-region {
    display: flex;
    flex-wrap: wrap;
  }

  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
  }

  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }
`});var zs=function(u,l,n,o){return new(n||(n=Promise))(function(y,k){function z($e){try{xe(o.next($e))}catch(Ze){k(Ze)}}function fe($e){try{xe(o.throw($e))}catch(Ze){k(Ze)}}function xe($e){$e.done?y($e.value):function p(y){return y instanceof n?y:new n(function(k){k(y)})}($e.value).then(z,fe)}xe((o=o.apply(u,l||[])).next())})};const Kl=["Tasks.ReadWrite"],Pa=["Tasks.Read","Tasks.ReadWrite"],tu=(u,l)=>zs(void 0,void 0,void 0,function*(){const n=yield u.api(`/me/todo/lists/${l}/tasks`).header("Cache-Control","no-store").middlewareOptions((0,Rr.F)(Pa)).get();return n?.value}),Ov=(u,l)=>zs(void 0,void 0,void 0,function*(){return yield u.api(`/me/todo/lists/${l}`).header("Cache-Control","no-store").middlewareOptions((0,Rr.F)(Pa)).get()}),$h=(u,l,n,o)=>zs(void 0,void 0,void 0,function*(){return yield u.api(`/me/todo/lists/${l}/tasks/${n}`).header("Cache-Control","no-store").middlewareOptions((0,Rr.F)(Kl)).patch(o)}),qp=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{display:flex;flex-direction:column;color:var(--color,var(--neutral-foreground-rest))}:host input[type=date]::-webkit-calendar-picker-indicator,:host input[type=date]::-webkit-inner-spin-button{display:none;appearance:none}:host .task-icon{font-family:FabricMDL2Icons;user-select:none}:host .task-icon.divider{vertical-align:initial;margin:0 12px;font-size:16px}:host .header{margin:var(--tasks-header-margin,0 0 12px 0);padding:var(--tasks-title-padding,0);display:flex;align-items:center;justify-content:space-between}:host .header .header__loading{max-width:90px;width:100%;height:20px;background:#f2f2f2}:host .header select{font-size:var(--tasks-plan-title-font-size, 1.1em);padding:var(--tasks-plan-title-padding,5px);border:none;appearance:none;cursor:pointer}:host .header select::-ms-expand{display:none}:host .header .plan-title{font-size:var(--tasks-plan-title-font-size, 1.1em);padding:var(--tasks-plan-title-padding,5px)}:host .header .add-bar{display:flex}:host .header .add-bar .add-bar-item{flex:1 1 auto}:host .header .new-task-due{display:flex}:host .header .new-task-due input{flex:1 1 auto;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .header .title-cont{flex:1 1 auto;display:flex;align-items:center;height:var(--tasks-new-button-height,34px)}:host .header .new-task-button{flex:0 0 auto;display:flex;justify-content:center;align-items:center;width:var(--tasks-new-button-width,auto);height:var(--tasks-new-button-height,32px);border-radius:2px;padding:0 20px;background:var(--tasks-new-button-background,#0078d4);border:var(--tasks-new-button-border,solid 1px transparent);color:var(--tasks-new-button-color,#fff);user-select:none;cursor:pointer}:host .header .new-task-button span{font-size:14px;font-weight:600;letter-spacing:.1px;line-height:14px}:host .header .new-task-button .task-icon{margin-right:8px}:host .header .new-task-button.hidden{visibility:hidden}:host .header .new-task-button:hover{background:var(--tasks-new-button-hover-background,#106ebe)}:host .header .new-task-button:active{background:var(--tasks-new-button-active-background,#005a9e)}:host .task{position:relative;margin:var(--task-margin,0 0 0 0);padding:var(--task-padding,0 0 0 0);background-color:var(--task-background-color,var(--neutral-layer-floating));border:var(--task-border,var(--neutral-stroke-input-active));border-radius:8px}:host .task .task-content{display:flex}:host .task .task-content .divider{position:absolute;height:2px;left:0;right:0;bottom:0;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .task .task-content .task-details-container{flex:1;display:grid;grid-template-columns:auto 1fr;-ms-grid-columns:auto 1fr;grid-template-rows:auto auto auto auto;-ms-grid-rows:auto auto auto auto;justify-content:space-between;align-items:flex-start;color:var(--task-detail-color,var(--neutral-foreground-hint));font-size:12px;font-weight:600;white-space:normal;margin-bottom:12px}:host .task .task-content .task-details-container .task-detail{width:100%;height:100%;margin:4px 24px 6px 0;display:flex;justify-content:flex-start;align-items:center}:host .task .task-content .task-details-container .task-title{color:var(--task-color,var(--neutral-foreground-rest));font-size:14px;font-weight:600;grid-row:1;grid-column:1/3;grid-column:1;-ms-grid-column-span:2;margin:22px 0 4px}:host .task .task-content .task-details-container .task-group{min-height:24px;grid-row:2;grid-column:1}:host .task .task-content .task-details-container .task-bucket{min-height:24px;grid-row:2;grid-column:2}:host .task .task-content .task-details-container .task-due{justify-content:flex-end;align-items:flex-start;grid-row:4;grid-column:1/3;grid-column:1;-ms-grid-column-span:2}:host .task .task-content .task-details-container.tablet{grid-template-columns:1fr 0.5fr 1fr 0.5fr;-ms-grid-columns:1fr 0.5fr 1fr 0.5fr;grid-template-rows:auto auto;-ms-grid-rows:auto auto}:host .task .task-content .task-details-container.tablet.no-plan{grid-template-columns:0 1fr 1fr 1fr;-ms-grid-columns:0 1fr 1fr 1fr}:host .task .task-content .task-details-container.tablet .task-detail{margin:4px 24px 6px 0}:host .task .task-content .task-details-container.tablet .task-title{grid-row:1;grid-column:1/5;grid-column:1;-ms-grid-column-span:4}:host .task .task-content .task-details-container.tablet .task-group{grid-row:2;grid-column:1}:host .task .task-content .task-details-container.tablet .task-bucket{grid-row:2;grid-column:2}:host .task .task-content .task-details-container.tablet .task-assignee{grid-row:2;grid-column:3}:host .task .task-content .task-details-container.tablet .task-due{justify-content:flex-start;align-items:center;grid-row:2;grid-column:4}:host .task .task-content .task-details-container.desktop{grid-template-columns:2fr 1fr 0.5fr 1fr 0.5fr;-ms-grid-columns:2fr 1fr 0.5fr 1fr 0.5fr;grid-template-rows:auto;-ms-grid-rows:auto;margin:0}:host .task .task-content .task-details-container.desktop.no-plan{grid-template-columns:2fr 0 1fr 1fr 1fr;-ms-grid-columns:2fr 0 1fr 1fr 1fr}:host .task .task-content .task-details-container.desktop .task-detail{margin:0 24px 0 0}:host .task .task-content .task-details-container.desktop .task-title{padding:0;grid-row:1;grid-column:1}:host .task .task-content .task-details-container.desktop .task-group{min-height:61px;grid-row:1;grid-column:2}:host .task .task-content .task-details-container.desktop .task-bucket{grid-row:1;grid-column:3}:host .task .task-content .task-details-container.desktop .task-assignee{grid-row:1;grid-column:4}:host .task .task-content .task-details-container.desktop .task-due{justify-content:flex-start;align-items:center;grid-row:1;grid-column:5}:host .task .task-content .task-details-container svg{vertical-align:middle;margin-right:4px}:host .task .task-content .task-details-container svg path{fill:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task .task-content .task-details-container select,:host .task .task-content .task-details-container span{vertical-align:middle;color:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task .task-content .task-details-container .task-icon{color:#797775;margin-right:8px}:host .task .task-content .task-details-container .people{color:var(--task-detail-color,var(--neutral-foreground-hint));font-size:16px}:host .task .task-content .task-details-container .person{display:inline-block}:host .task .task-content .task-details-container .picker{background-color:var(--task-background-color,var(--neutral-layer-floating));background-clip:padding-box;width:var(--mgt-flyout-set-width,350px);color:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task .task-content .task-details-container .picker .people-picker{--separator-margin:0px 10px 0px 10px}:host .task .task-content .task-details-container input,:host .task .task-content .task-details-container select{color:var(--task-detail-color,var(--neutral-foreground-hint));font-size:.9em;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .task .task-check-container{font-family:FabricMDL2Icons;border-radius:50%;color:#fff;cursor:pointer;display:flex;align-items:var(--task-icon-alignment,flex-start);margin:21px 10px 20px 20px;user-select:none}:host .task .task-check-container.complete .task-check{background-color:var(--task-icon-background-completed,#00ad56);border:var(--task-icon-border-completed,solid 1px #fff);color:var(--task-icon-color-completed,#fff)}:host .task .task-check-container.complete .task-content .task-details-container .task-title{text-decoration:line-through;color:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task .task-check-container .task-check{font-family:FabricMDL2Icons;font-size:12px;width:18px;height:18px;border-radius:var(--task-icon-border-radius,50%);border:var(--task-icon-border,solid 1px #797775);color:var(--task-color,var(--neutral-foreground-rest));display:flex;justify-content:center;align-items:center;background-color:var(--task-icon-background,transparent);user-select:none}:host .task .task-check-container .task-check.loading .task-check-content{animation:rotate-icon 2s infinite linear}:host .task .task-options{cursor:pointer;user-select:none;margin:16px 8px 0 0}:host .task.read-only .task-check-container{cursor:default}:host .task.complete{background:var(--task-complete-background,var(--neutral-layer-1));border:var(--task-complete-border,2px dotted inherit)}:host .task.complete .task-content .task-details-container .task-title{text-decoration:line-through;color:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task.new-task{margin:var(--task-new-margin,var(--task-margin,0 0 24px 0));display:flex;flex-direction:row}:host .task.new-task .self-assign{display:none}:host .task.new-task .assign-to{border:0;background:0 0}:host .task.new-task .fake-check-box{width:15px;height:15px;cursor:pointer;margin:0 5px}:host .task.new-task .fake-check-box::after{font-family:FabricMDL2Icons;content:"uE739"}:host .task.new-task .fake-check-box~:checked{font-family:FabricMDL2Icons;content:"uE73A"}:host .task.new-task .task-content{flex:1 1 auto;align-content:center;vertical-align:middle;margin:0 0 0 12px}:host .task.new-task .task-content .task-details-container{display:flex;flex-direction:column;align-items:stretch;margin:0}:host .task.new-task .task-content .task-details-container .task-title{display:flex;height:32px;padding:2px}:host .task.new-task .task-content .task-details-container .task-title input{flex:1;margin:var(--task-new-input-margin,0 24px 0 16px);padding:var(--task-new-input-padding,6px);font-size:var(--task-new-input-font-size, 14px);font-weight:600;border:var(--task-new-border,none);border-bottom:1px solid #e1dfdd;outline:0;border-radius:0;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .task.new-task .task-content .task-details-container .task-title input:hover{border-bottom:1px solid #106ebe}:host .task.new-task .task-content .task-details-container .task-title input:active{border-bottom:1px solid #005a9e}:host .task.new-task .task-content .task-details-container .task-title input:focus{border-bottom:1px solid #0078d4}:host .task.new-task .task-content .task-details-container .task-details{display:flex;justify-content:stretch;align-items:center;flex-wrap:wrap;margin:14px 0 14px 4px}:host .task.new-task .task-content .task-details-container .task-details .new-task-group{margin:8px 16px}:host .task.new-task .task-content .task-details-container .task-details .new-task-bucket{margin:8px 16px}:host .task.new-task .task-content .task-details-container .task-details .new-task-due{margin:8px 16px}:host .task.new-task .task-content .task-details-container .task-details .new-task-assignee{margin:8px 16px;min-width:80px}:host .task.new-task .task-content .task-details-container .task-details .task-people label{display:flex;align-content:center;align-items:center}:host .task.new-task .task-content .task-details-container .task-details input,:host .task.new-task .task-content .task-details-container .task-details select{font-size:12px;font-weight:600;border:var(--task-new-select-border,none);border-bottom:1px solid #e1dfdd}:host .task.new-task .task-content .task-details-container .task-details input:hover,:host .task.new-task .task-content .task-details-container .task-details select:hover{border-bottom:1px solid #106ebe}:host .task.new-task .task-content .task-details-container .task-details input:active,:host .task.new-task .task-content .task-details-container .task-details select:active{border-bottom:1px solid #005a9e}:host .task.new-task .task-content .task-details-container .task-details input:focus,:host .task.new-task .task-content .task-details-container .task-details select:focus{border-bottom:1px solid #0078d4}:host .task.new-task .task-add-button-container{margin-right:28px}:host .task.new-task .task-add-button-container .task-add,:host .task.new-task .task-add-button-container .task-cancel{justify-content:center;align-items:center;cursor:pointer;flex:0 0 auto;display:flex;width:var(--tasks-new-button-width,100px);height:var(--tasks-new-button-height,32px);border-radius:4px;border:var(--tasks-new-button-border,solid 1px #e5e5e5);font-size:14px;line-height:20px}:host .task.new-task .task-add-button-container .task-add{color:#fff;background:var(--task-new-add-button-background,#0078d4);margin:22px 0 12px auto}:host .task.new-task .task-add-button-container .task-cancel{color:var(--task-new-cancel-button-color,var(--neutral-foreground-rest))}:host .task.new-task .task-add-button-container.disabled .task-add{color:var(--task-new-cancel-button-color,var(--neutral-foreground-rest));background:var(--task-new-add-button-disabled-background,#fff);cursor:default}@keyframes rotate-icon{from{transform:rotate(0)}to{transform:rotate(360deg)}}[dir=rtl] .arrow-options{--arrow-options-left:auto}[dir=rtl] .dot-options{--dot-options-translatex:translateX(60px)}[dir=rtl] .task-details{margin-right:14px!important}[dir=rtl] .task-icon{margin-left:8px}[dir=rtl] .task-detail svg{margin-left:4px}@media (forced-colors:active) and (prefers-color-scheme:dark){:host svg{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}:host svg path{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}@media (forced-colors:active) and (prefers-color-scheme:light){:host svg{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}:host svg path{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}:host{border-radius:8px;width:100%}:host .task,:host.loading-task{margin-block:1px;box-shadow:var(--task-box-shadow,var(--elevation-shadow-card-active));width:100%;display:flex;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .task.new-task,:host.loading-task.new-task{margin:14px 0 1px;box-shadow:var(--task-box-shadow,var(--elevation-shadow-card-active))}:host .task.complete,:host.loading-task.complete{border:1px solid var(--task-border-completed,var(--neutral-stroke-input-active));background:var(--task-complete-background,var(--neutral-layer-1))}:host .task.complete .task-details .task-due,:host .task.complete .task-details .title,:host.loading-task.complete .task-details .task-due,:host.loading-task.complete .task-details .title{text-decoration:line-through}:host .task.read-only,:host.loading-task.read-only{opacity:1}:host .task:hover,:host.loading-task:hover{background-color:var(--task-background-color-hover,var(--neutral-fill-hover));border-radius:8px}:host .task .task-details,:host.loading-task .task-details{box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:2px;line-height:24px;border-radius:4px;width:100%}:host .task .task-details .task>div,:host.loading-task .task-details .task>div{display:flex;align-items:center;width:200px}:host .task .task-details .task-delete,:host.loading-task .task-details .task-delete{display:flex}:host .task .task-details .container,:host.loading-task .task-details .container{display:flex;width:100%}:host .task .task-details .task-due,:host.loading-task .task-details .task-due{min-width:120px;margin-inline-end:12px;height:32px;text-decoration:inherit;display:flex}:host fluent-text-field::part(end),:host fluent-text-field::part(start){margin-inline:unset}:host fluent-text-field::part(control){padding:0;cursor:pointer}:host fluent-text-field::part(root){background:0 0}:host fluent-text-field.new-task{width:100%;height:34px}:host fluent-text-field.new-task div.start .add-icon{display:flex;margin-inline:10px}:host fluent-text-field.new-task div:nth-child(2){display:flex;align-items:center}:host fluent-text-field.new-task div:nth-child(2) .calendar{display:flex;align-items:center}:host fluent-text-field.new-task div:nth-child(2) .calendar svg{fill:var(--task-color,var(--neutral-foreground-rest))}:host fluent-text-field.new-task div:nth-child(2) .calendar .date{margin-inline-start:10px;color:var(--task-color,var(--neutral-foreground-rest));width:auto;cursor:pointer}:host fluent-text-field.new-task div:nth-child(2) .calendar input{flex:1;border:none;border-bottom:1px solid var(--task-color,var(--neutral-foreground-rest));outline:0;border-radius:0}:host fluent-text-field.new-task div:nth-child(2) .calendar input:hover{border-bottom:1px solid var(--task-date-input-hover-color,var(--neutral-layer-1))}:host fluent-text-field.new-task div:nth-child(2) .calendar input:active,:host fluent-text-field.new-task div:nth-child(2) .calendar input:focus{border-bottom:1px solid var(--task-date-input-active-color,var(--accent-fill-rest))}:host fluent-text-field.title{flex-grow:1;display:inline}:host fluent-text-field.date{color:var(--task-detail-color,var(--neutral-foreground-hint))}:host fluent-text-field::after{border-bottom:none}:host fluent-text-field.dark::part(control){color-scheme:dark}:host fluent-button.task-add-icon.neutral,:host fluent-button.task-cancel-icon.neutral,:host fluent-button.task-delete.neutral{fill:var(--task-color,var(--neutral-foreground-rest))}:host fluent-button.task-add-icon.neutral::part(control),:host fluent-button.task-cancel-icon.neutral::part(control),:host fluent-button.task-delete.neutral::part(control){border:none;background:inherit}:host fluent-button.task-add-icon.neutral::part(control) svg,:host fluent-button.task-cancel-icon.neutral::part(control) svg,:host fluent-button.task-delete.neutral::part(control) svg{fill:var(--task-color,var(--neutral-foreground-rest))}:host fluent-checkbox.complete div>svg .filled{display:block}:host fluent-checkbox.complete div>svg .regular{display:none}:host fluent-checkbox.complete div>svg path{fill:var(--task-radio-background-color,var(--accent-fill-rest))}:host fluent-checkbox div>svg .filled{display:none}:host fluent-checkbox div>svg .regular{display:block}:host fluent-checkbox div>svg path{fill:var(--task-background-color,var(--neutral-layer-floating))}:host fluent-checkbox::part(control){margin-inline-start:10px;background:0 0;border-radius:50%}:host fluent-checkbox::part(label){margin-inline-end:unset;width:100%}
`],iu={cancelNewTaskSubtitle:"Cancel",newTaskPlaceholder:"Add a task",newTaskLabel:"New Task Input",editTaskLabel:"Edit Task Input",addTaskButtonSubtitle:"Add",deleteTaskOption:"Delete",editTaskOption:"Edit",dueDate:"Due date",newTaskDateInputLabel:"New Task Date Input",changeTaskDateInputLabel:"Change Task Date Input",newTaskNameInputLabel:"New Task Name Input",cancelAddingTask:"Cancel adding a new task"},td={comboboxPlaceholder:"Select an item"};class Qp extends Vl{}class Uh extends((0,zc.rf)(Qp)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let ru=(()=>{class u extends Uh{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=(0,Id.NF)("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return"inline"===this.autocomplete||this.isAutocompleteBoth}get isAutocompleteList(){return"list"===this.autocomplete||this.isAutocompleteBoth}get isAutocompleteBoth(){return"both"===this.autocomplete}openChanged(){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),void Er.dv.queueUpdate(()=>this.focus());this.ariaControls="",this.ariaExpanded="false"}get options(){return rn.cP.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(n){this._options=n,rn.cP.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(n,o){this.positionAttribute=o,this.setPositioning()}get value(){return rn.cP.track(this,"value"),this._value}set value(n){var o,p,y;const k=`${this._value}`;if(this.$fastController.isConnected&&this.options){const z=this.options.findIndex($e=>$e.text.toLowerCase()===n.toLowerCase()),fe=null===(o=this.options[this.selectedIndex])||void 0===o?void 0:o.text,xe=null===(p=this.options[z])||void 0===p?void 0:p.text;this.selectedIndex=fe!==xe?z:this.selectedIndex,n=(null===(y=this.firstSelectedOption)||void 0===y?void 0:y.text)||n}k!==n&&(this._value=n,super.valueChanged(k,n),rn.cP.notify(this,"value"))}clickHandler(n){if(!this.disabled){if(this.open){const o=n.target.closest("option,[role=option]");if(!o||o.disabled)return;this.selectedOptions=[o],this.control.value=o.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(n,o){super.disabledChanged&&super.disabledChanged(n,o),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||"none"===this.autocomplete)&&(this.filter="");const n=this.filter.toLowerCase();this.filteredOptions=this._options.filter(o=>o.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!n&&(this.filteredOptions=this._options),this._options.forEach(o=>{o.hidden=!this.filteredOptions.includes(o)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var n;null===(n=this.firstSelectedOption)||void 0===n||n.scrollIntoView({block:"nearest"})}))}focusoutHandler(n){if(this.syncValue(),!this.open)return!0;const o=n.relatedTarget;this.isSameNode(o)?this.focus():(!this.options||!this.options.includes(o))&&(this.open=!1)}inputHandler(n){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(o=>o.text).indexOf(this.control.value)),n.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(n){if(n.ctrlKey||n.shiftKey)return!0;switch(n.key){case"Enter":this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break;case"Escape":if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break;case"Tab":if(this.setInputToSelection(),!this.open)return!0;n.preventDefault(),this.open=!1;break;case"ArrowUp":case"ArrowDown":if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(n),this.isAutocompleteInline&&this.setInlineSelection();break;default:return!0}}keyupHandler(n){switch(n.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions()}}selectedIndexChanged(n,o){if(this.$fastController.isConnected){if((o=(0,Nc.AB)(-1,this.options.length-1,o))!==this.selectedIndex)return void(this.selectedIndex=o);super.selectedIndexChanged(n,o)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const n=this.options.findIndex(o=>null!==o.getAttribute("selected")||o.selected);this.selectedIndex=n,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var n;const o=this.selectedIndex>-1?null===(n=this.firstSelectedOption)||void 0===n?void 0:n.text:this.control.value;this.updateValue(this.value!==o)}setPositioning(){const n=this.getBoundingClientRect(),p=window.innerHeight-n.bottom;this.position=this.forcedPosition?this.positionAttribute:n.top>p?"above":"below",this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight="above"===this.position?~~n.top:~~p}selectedOptionsChanged(n,o){this.$fastController.isConnected&&this._options.forEach(p=>{p.selected=o.includes(p)})}slottedOptionsChanged(n,o){super.slottedOptionsChanged(n,o),this.updateValue()}updateValue(n){var o;this.$fastController.isConnected&&(this.value=(null===(o=this.firstSelectedOption)||void 0===o?void 0:o.text)||this.control.value,this.control.value=this.value),n&&this.$emit("change")}clearSelectionRange(){const n=this.control.value.length;this.control.setSelectionRange(n,n)}}return(0,Dt.Cg)([(0,an.CF)({attribute:"autocomplete",mode:"fromView"})],u.prototype,"autocomplete",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"maxHeight",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"open",mode:"boolean"})],u.prototype,"open",void 0),(0,Dt.Cg)([an.CF],u.prototype,"placeholder",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"position"})],u.prototype,"positionAttribute",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"position",void 0),u})(),ou=(()=>{class u{}return(0,Dt.Cg)([rn.sH],u.prototype,"ariaAutoComplete",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"ariaControls",void 0),u})();(0,gi.X)(ou,Pc),(0,gi.X)(ru,Hi.qw,ou);const au=".control",lu=":not([disabled]):not([open])",Xp=(()=>{class u extends ru{appearanceChanged(n,o){n!==o&&(this.classList.add(o),this.classList.remove(n))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&Et.pfK.setValueFor(this.listbox,Et.Tkp)}}return(0,hh.Cg)([(0,an.CF)({mode:"fromView"})],u.prototype,"appearance",void 0),u})().compose({baseName:"combobox",baseClass:ru,shadowOptions:{delegatesFocus:!0},template:(u,l)=>mi.q`
    <template
        aria-disabled="${n=>n.ariaDisabled}"
        autocomplete="${n=>n.autocomplete}"
        class="${n=>n.open?"open":""} ${n=>n.disabled?"disabled":""} ${n=>n.position}"
        ?open="${n=>n.open}"
        tabindex="${n=>n.disabled?null:"0"}"
        @click="${(n,o)=>n.clickHandler(o.event)}"
        @focusout="${(n,o)=>n.focusoutHandler(o.event)}"
        @keydown="${(n,o)=>n.keydownHandler(o.event)}"
    >
        <div class="control" part="control">
            ${(0,Hi.LT)(u,l)}
            <slot name="control">
                <input
                    aria-activedescendant="${n=>n.open?n.ariaActiveDescendant:null}"
                    aria-autocomplete="${n=>n.ariaAutoComplete}"
                    aria-controls="${n=>n.ariaControls}"
                    aria-disabled="${n=>n.ariaDisabled}"
                    aria-expanded="${n=>n.ariaExpanded}"
                    aria-haspopup="listbox"
                    class="selected-value"
                    part="selected-value"
                    placeholder="${n=>n.placeholder}"
                    role="combobox"
                    type="text"
                    ?disabled="${n=>n.disabled}"
                    :value="${n=>n.value}"
                    @input="${(n,o)=>n.inputHandler(o.event)}"
                    @keyup="${(n,o)=>n.keyupHandler(o.event)}"
                    ${(0,ro.K)("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${l.indicator||""}
                    </slot>
                </div>
            </slot>
            ${(0,Hi.aO)(u,l)}
        </div>
        <div
            class="listbox"
            id="${n=>n.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${n=>n.disabled}"
            ?hidden="${n=>!n.open}"
            ${(0,ro.K)("listbox")}
        >
            <slot
                ${(0,Ro.e)({filter:Vl.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(u,l)=>_i.A`
    ${op()}

    ${(0,ga.y$)(u,l,au)}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${dc.Z};
      user-select: none;
    }

    :host(:active) .selected-value {
      user-select: none;
    }

    .selected-value {
      -webkit-appearance: none;
      background: transparent;
      border: none;
      color: inherit;
      ${pa.Ah}
      height: calc(100% - ${Et.XAH} * 1px));
      margin: auto 0;
      width: 100%;
      outline: none;
    }
  `.withBehaviors((0,uc.f)("outline",(0,ga.Tv)(u,l,au,lu)),(0,uc.f)("filled",(0,ga.dM)(u,l,au,lu)),(0,Vs.mr)((0,ga.lb)(u,l,au,lu))),indicator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  '}),Zp=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{--max-height:var(--picker-max-height, 380px);font-family:var(--default-font-family)}:host .picker{background-color:var(--picker-background-color,transparent)}:host fluent-combobox::part(selected-value)::placeholder{color:var(--picker-text-color,var(--input-filled-placeholder-rest))}:host fluent-combobox::part(selected-value):hover::placeholder{color:var(--picker-text-color-hover,var(--secondary-text-hover-color))}[dir=rtl] .picker{direction:rtl}
`];var jn=function(u,l,n,o){var k,p=arguments.length,y=p<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(u,l,n,o);else for(var z=u.length-1;z>=0;z--)(k=u[z])&&(y=(p<3?k(y):p>3?k(l,n,y):k(l,n))||y);return p>3&&y&&Object.defineProperty(l,n,y),y},Gs=function(u,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(u,l)};const Bh=()=>{(0,ts.E)(Xp,fc),nh(),(0,jo.N)("picker",yc)};let yc=(()=>{class u extends Bs.N{get strings(){return td}static get styles(){return Zp}constructor(){super(),this.version="v1.0",this.maxPages=3,this.scopes=[],this.cacheEnabled=!1,this.cacheInvalidationPeriod=0,this.renderLoading=()=>this.response?this.renderContent():this.renderTemplate("loading",null),this.renderContent=()=>{var n;const o=this.error?this.error:null;return o&&this.hasTemplate("error")?this.renderTemplate("error",{error:o},"error"):this.hasTemplate("no-data")?this.renderTemplate("no-data",null):(null===(n=this.response)||void 0===n?void 0:n.length)>0?this.renderPicker():this.renderGet()},this.handleComboboxKeydown=n=>{let o,p;const y=n.key,z=n.target.querySelector(".selected");z&&(o=z.getAttribute("value")),"Enter"===y&&o&&(p=this.response.filter(fe=>fe.id===o).pop(),this.fireCustomEvent("selectionChanged",p,!0,!1,!0))},this.placeholder=this.strings.comboboxPlaceholder,this.entityType=null,this.keyName=null}refresh(n=!1){n&&this.clearState(),this._task.run()}clearState(){this.response=null,this.error=null}renderPicker(){return or.Q`
      <fluent-combobox
        @keydown=${this.handleComboboxKeydown}
        current-value=${(0,Hl.J)(this.selectedValue)}
        part="picker"
        class="picker"
        id="combobox"
        autocomplete="list"
        placeholder=${this.placeholder}>
          ${this.response.map(n=>Lt.qy`
            <fluent-option value=${n.id} @click=${o=>this.handleClick(o,n)}> ${this.getNestedPropertyValue(n,this.keyName)} </fluent-option>`)}
      </fluent-combobox>
     `}getNestedPropertyValue(n,o){const p=o.split(".");let y=n;for(const k of p)if(y=y[k],void 0===y)return console.warn(`mgt-picker: Key '${k}' is undefined.`),"";return y}renderGet(){return or.Q`
      <mgt-get
        class="mgt-get"
        resource=${this.resource}
        version=${this.version}
        .scopes=${this.scopes}
        max-pages=${this.maxPages}
        ?cache-enabled=${this.cacheEnabled}
        ?cache-invalidation-period=${this.cacheInvalidationPeriod}>
      </mgt-get>`}firstUpdated(n){super.firstUpdated(n);const o=this.renderRoot;o?o.addEventListener("dataChange",p=>this.handleDataChange(p)):console.error("\u{1f992}: mgt-picker component requires a renderRoot. Something has gone horribly wrong.")}handleDataChange(n){const p=n.detail.error?n.detail.error:null;this.response=n.detail.response.value,this.error=p}handleClick(n,o){this.fireCustomEvent("selectionChanged",o,!0,!1,!0)}}return jn([(0,Mt.MZ)({attribute:"resource",type:String}),Gs("design:type",String)],u.prototype,"resource",void 0),jn([(0,Mt.MZ)({attribute:"version",type:String}),Gs("design:type",Object)],u.prototype,"version",void 0),jn([(0,Mt.MZ)({attribute:"max-pages",type:Number}),Gs("design:type",Object)],u.prototype,"maxPages",void 0),jn([(0,Mt.MZ)({attribute:"placeholder",type:String}),Gs("design:type",String)],u.prototype,"placeholder",void 0),jn([(0,Mt.MZ)({attribute:"key-name",type:String}),Gs("design:type",String)],u.prototype,"keyName",void 0),jn([(0,Mt.MZ)({attribute:"entity-type",type:String}),Gs("design:type",String)],u.prototype,"entityType",void 0),jn([(0,Mt.MZ)({attribute:"scopes",converter:l=>l?l.toLowerCase().split(","):null}),Gs("design:type",Array)],u.prototype,"scopes",void 0),jn([(0,Mt.MZ)({attribute:"cache-enabled",type:Boolean}),Gs("design:type",Object)],u.prototype,"cacheEnabled",void 0),jn([(0,Mt.MZ)({attribute:"cache-invalidation-period",type:Number}),Gs("design:type",Object)],u.prototype,"cacheInvalidationPeriod",void 0),jn([(0,Mt.MZ)({attribute:"selected-value",type:String}),Gs("design:type",String)],u.prototype,"selectedValue",void 0),jn([(0,Mt.wk)(),Gs("design:type",Array)],u.prototype,"response",void 0),u})();const Yp={cancelNewTaskSubtitle:"Cancel",newTaskPlaceholder:"Add a task",addTaskButtonSubtitle:"Add",removeTaskSubtitle:"Delete Task"};class Jp{constructor(l){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,l)for(const n in l){const o=l[n];"date"===n?this.date=this.getDateObject(o):this[n]=o}}getDateObject(l){if("string"==typeof l){const n=l.split(/[/-]/);return n.length<3?new Date:new Date(parseInt(n[2],10),parseInt(n[0],10)-1,parseInt(n[1],10))}if("day"in l&&"month"in l&&"year"in l){const{day:n,month:o,year:p}=l;return new Date(p,o-1,n)}return l}getDate(l=this.date,n={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},o=this.locale){const p=this.getDateObject(l);if(!p.getTime())return"";const y=Object.assign({timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},n);return new Intl.DateTimeFormat(o,y).format(p)}getDay(l=this.date.getDate(),n=this.dayFormat,o=this.locale){return this.getDate({month:1,day:l,year:2020},{day:n},o)}getMonth(l=this.date.getMonth()+1,n=this.monthFormat,o=this.locale){return this.getDate({month:l,day:2,year:2020},{month:n},o)}getYear(l=this.date.getFullYear(),n=this.yearFormat,o=this.locale){return this.getDate({month:2,day:2,year:l},{year:n},o)}getWeekday(l=0,n=this.weekdayFormat,o=this.locale){return this.getDate(`1-${l+1}-2017`,{weekday:n},o)}getWeekdays(l=this.weekdayFormat,n=this.locale){return Array(7).fill(null).map((o,p)=>this.getWeekday(p,l,n))}}let Fv=(()=>{class u extends Qr.g{constructor(){super(...arguments),this.dateFormatter=new Jp,this.readonly=!1,this.locale="en-US",this.month=(new Date).getMonth()+1,this.year=(new Date).getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(n=this.month,o=this.year){const p=xe=>new Date(xe.getFullYear(),xe.getMonth(),1).getDay(),y=xe=>{const $e=new Date(xe.getFullYear(),xe.getMonth()+1,1);return new Date($e.getTime()-this.oneDayInMs).getDate()},k=new Date(o,n-1),z=new Date(o,n),fe=new Date(o,n-2);return{length:y(k),month:n,start:p(k),year:o,previous:{length:y(fe),month:fe.getMonth()+1,start:p(fe),year:fe.getFullYear()},next:{length:y(z),month:z.getMonth()+1,start:p(z),year:z.getFullYear()}}}getDays(n=this.getMonthInfo(),o=this.minWeeks){o=o>10?10:o;const{start:p,length:y,previous:k,next:z}=n,fe=[];let xe=1-p;for(;xe<y+1||fe.length<o||fe[fe.length-1].length%7!=0;){const{month:$e,year:Ze}=xe<1?k:xe>y?z:n,zt=xe<1?k.length+xe:xe>y?xe-y:xe,Jt=`${$e}-${zt}-${Ze}`,di={day:zt,month:$e,year:Ze,disabled:this.dateInString(Jt,this.disabledDates),selected:this.dateInString(Jt,this.selectedDates)},nr=fe[fe.length-1];0===fe.length||nr.length%7==0?fe.push([di]):nr.push(di),xe++}return fe}dateInString(n,o){const p=o.split(",").map(y=>y.trim());return n="string"==typeof n?n:`${n.getMonth()+1}-${n.getDate()}-${n.getFullYear()}`,p.some(y=>y===n)}getDayClassNames(n,o){const{day:p,month:y,year:k,disabled:z,selected:fe}=n;return["day",o===`${y}-${p}-${k}`&&"today",this.month!==y&&"inactive",z&&"disabled",fe&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const n=this.dateFormatter.getWeekdays().map(o=>({text:o}));if("long"!==this.weekdayFormat){const o=this.dateFormatter.getWeekdays("long");n.forEach((p,y)=>{p.abbr=o[y]})}return n}handleDateSelect(n,o){this.$emit("dateselected",o)}handleKeydown(n,o){return n.key===Pn.Mm&&this.handleDateSelect(n,o),!0}}return(0,Dt.Cg)([(0,an.CF)({mode:"boolean"})],u.prototype,"readonly",void 0),(0,Dt.Cg)([an.CF],u.prototype,"locale",void 0),(0,Dt.Cg)([(0,an.CF)({converter:an.R$})],u.prototype,"month",void 0),(0,Dt.Cg)([(0,an.CF)({converter:an.R$})],u.prototype,"year",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"day-format",mode:"fromView"})],u.prototype,"dayFormat",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"weekday-format",mode:"fromView"})],u.prototype,"weekdayFormat",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"month-format",mode:"fromView"})],u.prototype,"monthFormat",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"year-format",mode:"fromView"})],u.prototype,"yearFormat",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"min-weeks",converter:an.R$})],u.prototype,"minWeeks",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"disabled-dates"})],u.prototype,"disabledDates",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"selected-dates"})],u.prototype,"selectedDates",void 0),u})();function rs(u,l,n){return{index:u,removed:l,addedCount:n}}const ql=0,cu=1,Ql=2,du=3;function zh(u,l,n,o){return l<n||o<u?-1:l===n||o===u?0:u<n?l<o?l-n:o-n:o<l?o-u:l-u}function tg(u,l,n,o,p,y){let k=0,z=0;const fe=Math.min(n-l,y-p);if(0===l&&0===p&&(k=function jh(u,l,n){for(let o=0;o<n;++o)if(u[o]!==l[o])return o;return n}(u,o,fe)),n===u.length&&y===o.length&&(z=function eg(u,l,n){let o=u.length,p=l.length,y=0;for(;y<n&&u[--o]===l[--p];)y++;return y}(u,o,fe-k)),p+=k,y-=z,(n-=z)-(l+=k)==0&&y-p==0)return Kd.tR;if(l===n){const ln=rs(l,[],0);for(;p<y;)ln.removed.push(o[p++]);return[ln]}if(p===y)return[rs(l,[],n-l)];const xe=function Vh(u){let l=u.length-1,n=u[0].length-1,o=u[l][n];const p=[];for(;l>0||n>0;){if(0===l){p.push(Ql),n--;continue}if(0===n){p.push(du),l--;continue}const y=u[l-1][n-1],k=u[l-1][n],z=u[l][n-1];let fe;fe=k<z?k<y?k:y:z<y?z:y,fe===y?(y===o?p.push(ql):(p.push(cu),o=y),l--,n--):fe===k?(p.push(du),l--,o=k):(p.push(Ql),n--,o=z)}return p.reverse(),p}(function Hh(u,l,n,o,p,y){const k=y-p+1,z=n-l+1,fe=new Array(k);let xe,$e;for(let Ze=0;Ze<k;++Ze)fe[Ze]=new Array(z),fe[Ze][0]=Ze;for(let Ze=0;Ze<z;++Ze)fe[0][Ze]=Ze;for(let Ze=1;Ze<k;++Ze)for(let zt=1;zt<z;++zt)u[l+zt-1]===o[p+Ze-1]?fe[Ze][zt]=fe[Ze-1][zt-1]:(xe=fe[Ze-1][zt]+1,$e=fe[Ze][zt-1]+1,fe[Ze][zt]=xe<$e?xe:$e);return fe}(u,l,n,o,p,y)),$e=[];let Ze,zt=l,Jt=p;for(let ln=0;ln<xe.length;++ln)switch(xe[ln]){case ql:void 0!==Ze&&($e.push(Ze),Ze=void 0),zt++,Jt++;break;case cu:void 0===Ze&&(Ze=rs(zt,[],0)),Ze.addedCount++,zt++,Ze.removed.push(o[Jt]),Jt++;break;case Ql:void 0===Ze&&(Ze=rs(zt,[],0)),Ze.addedCount++,zt++;break;case du:void 0===Ze&&(Ze=rs(zt,[],0)),Ze.removed.push(o[Jt]),Jt++}return void 0!==Ze&&$e.push(Ze),$e}const ng=Array.prototype.push;function $v(u,l,n,o){const p=rs(l,n,o);let y=!1,k=0;for(let z=0;z<u.length;z++){const fe=u[z];if(fe.index+=k,y)continue;const xe=zh(p.index,p.index+p.removed.length,fe.index,fe.index+fe.addedCount);if(xe>=0)if(u.splice(z,1),z--,k-=fe.addedCount-fe.removed.length,p.addedCount+=fe.addedCount-xe,p.addedCount||p.removed.length+fe.removed.length-xe){let Ze=fe.removed;if(p.index<fe.index){const zt=p.removed.slice(0,fe.index-p.index);ng.apply(zt,Ze),Ze=zt}if(p.index+p.removed.length>fe.index+fe.addedCount){const zt=p.removed.slice(fe.index+fe.addedCount-p.index);ng.apply(Ze,zt)}p.removed=Ze,fe.index<p.index&&(p.index=fe.index)}else y=!0;else if(p.index<fe.index){y=!0,u.splice(z,0,p),z++;const $e=p.addedCount-p.removed.length;fe.index+=$e,k+=$e}}y||u.push(p)}var Bv=d(5963);let rg=!1;function Gh(u,l){let n=u.index;const o=l.length;return n>o?n=o-u.addedCount:n<0&&(n=o+u.removed.length+n-u.addedCount),n<0&&(n=0),u.index=n,u}class og extends Bv.l{constructor(l){super(l),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(l,"$fastController",{value:this,enumerable:!1})}subscribe(l){this.flush(),super.subscribe(l)}addSplice(l){void 0===this.splices?this.splices=[l]:this.splices.push(l),this.needsQueue&&(this.needsQueue=!1,Er.dv.queueUpdate(this))}reset(l){this.oldCollection=l,this.needsQueue&&(this.needsQueue=!1,Er.dv.queueUpdate(this))}flush(){const l=this.splices,n=this.oldCollection;if(void 0===l&&void 0===n)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const o=void 0===n?function Uv(u,l){let n=[];const o=function ig(u){const l=[];for(let n=0,o=u.length;n<o;n++){const p=u[n];$v(l,p.index,p.removed,p.addedCount)}return l}(l);for(let p=0,y=o.length;p<y;++p){const k=o[p];1!==k.addedCount||1!==k.removed.length?n=n.concat(tg(u,k.index,k.index+k.addedCount,k.removed,0,k.removed.length)):k.removed[0]!==u[k.index]&&n.push(k)}return n}(this.source,l):tg(this.source,0,this.source.length,n,0,n.length);this.notify(o)}}var Hv=d(1831);const ag=Object.freeze({positioning:!1,recycle:!0});function os(u,l,n,o){u.bind(l[n],o)}function Vv(u,l,n,o){const p=Object.create(o);p.index=n,p.length=l.length,u.bind(l[n],p)}class jv{constructor(l,n,o,p,y,k){this.location=l,this.itemsBinding=n,this.templateBinding=p,this.options=k,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=os,this.itemsBindingObserver=rn.cP.binding(n,this,o),this.templateBindingObserver=rn.cP.binding(p,this,y),k.positioning&&(this.bindView=Vv)}bind(l,n){this.source=l,this.originalContext=n,this.childContext=Object.create(n),this.childContext.parent=l,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(l,this.originalContext),this.template=this.templateBindingObserver.observe(l,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(l,n){l===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):l===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(n)}observeItems(l=!1){if(!this.items)return void(this.items=Kd.tR);const n=this.itemsObserver,o=this.itemsObserver=rn.cP.getNotifier(this.items),p=n!==o;p&&null!==n&&n.unsubscribe(this),(p||l)&&o.subscribe(this)}updateViews(l){const n=this.childContext,o=this.views,p=this.bindView,y=this.items,k=this.template,z=this.options.recycle,fe=[];let xe=0,$e=0;for(let Ze=0,zt=l.length;Ze<zt;++Ze){const Jt=l[Ze];let An=0,di=Jt.index;const nr=di+Jt.addedCount,dr=o.splice(Jt.index,Jt.removed.length),ur=$e=fe.length+dr.length;for(;di<nr;++di){const Ai=o[di],Qs=Ai?Ai.firstChild:this.location;let Xr;z&&$e>0?(An<=ur&&dr.length>0?(Xr=dr[An],An++):(Xr=fe[xe],xe++),$e--):Xr=k.create(),o.splice(di,0,Xr),p(Xr,y,di,n),Xr.insertBefore(Qs)}dr[An]&&fe.push(...dr.slice(An))}for(let Ze=xe,zt=fe.length;Ze<zt;++Ze)fe[Ze].dispose();if(this.options.positioning)for(let Ze=0,zt=o.length;Ze<zt;++Ze){const Jt=o[Ze].context;Jt.length=zt,Jt.index=Ze}}refreshAllViews(l=!1){const n=this.items,o=this.childContext,p=this.template,y=this.location,k=this.bindView;let z=n.length,fe=this.views,xe=fe.length;if((0===z||l||!this.options.recycle)&&(Hv.N.disposeContiguousBatch(fe),xe=0),0===xe){this.views=fe=new Array(z);for(let $e=0;$e<z;++$e){const Ze=p.create();k(Ze,n,$e,o),fe[$e]=Ze,Ze.insertBefore(y)}}else{let $e=0;for(;$e<z;++$e)if($e<xe)k(fe[$e],n,$e,o);else{const zt=p.create();k(zt,n,$e,o),fe.push(zt),zt.insertBefore(y)}const Ze=fe.splice($e,xe-$e);for($e=0,z=Ze.length;$e<z;++$e)Ze[$e].dispose()}}unbindAllViews(){const l=this.views;for(let n=0,o=l.length;n<o;++n)l[n].unbind()}}class lg extends Oh.dg{constructor(l,n,o){super(),this.itemsBinding=l,this.templateBinding=n,this.options=o,this.createPlaceholder=Er.dv.createBlockPlaceholder,function sg(){if(rg)return;rg=!0,rn.cP.setArrayObserverFactory(fe=>new og(fe));const u=Array.prototype;if(u.$fastPatch)return;Reflect.defineProperty(u,"$fastPatch",{value:1,enumerable:!1});const l=u.pop,n=u.push,o=u.reverse,p=u.shift,y=u.sort,k=u.splice,z=u.unshift;u.pop=function(){const fe=this.length>0,xe=l.apply(this,arguments),$e=this.$fastController;return void 0!==$e&&fe&&$e.addSplice(rs(this.length,[xe],0)),xe},u.push=function(){const fe=n.apply(this,arguments),xe=this.$fastController;return void 0!==xe&&xe.addSplice(Gh(rs(this.length-arguments.length,[],arguments.length),this)),fe},u.reverse=function(){let fe;const xe=this.$fastController;void 0!==xe&&(xe.flush(),fe=this.slice());const $e=o.apply(this,arguments);return void 0!==xe&&xe.reset(fe),$e},u.shift=function(){const fe=this.length>0,xe=p.apply(this,arguments),$e=this.$fastController;return void 0!==$e&&fe&&$e.addSplice(rs(0,[xe],0)),xe},u.sort=function(){let fe;const xe=this.$fastController;void 0!==xe&&(xe.flush(),fe=this.slice());const $e=y.apply(this,arguments);return void 0!==xe&&xe.reset(fe),$e},u.splice=function(){const fe=k.apply(this,arguments),xe=this.$fastController;return void 0!==xe&&xe.addSplice(Gh(rs(+arguments[0],fe,arguments.length>2?arguments.length-2:0),this)),fe},u.unshift=function(){const fe=z.apply(this,arguments),xe=this.$fastController;return void 0!==xe&&xe.addSplice(Gh(rs(0,[],arguments.length),this)),fe}}(),this.isItemsBindingVolatile=rn.cP.isVolatileBinding(l),this.isTemplateBindingVolatile=rn.cP.isVolatileBinding(n)}createBehavior(l){return new jv(l,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function _l(u,l,n=ag){return new lg(u,"function"==typeof l?l:()=>l,Object.assign(Object.assign({},ag),n))}const zv=mi.q`
    <template>
        ${u=>null===u.rowData||null===u.columnDefinition||null===u.columnDefinition.columnDataKey?null:u.rowData[u.columnDefinition.columnDataKey]}
    </template>
`,cg=mi.q`
    <template>
        ${u=>null===u.columnDefinition?null:void 0===u.columnDefinition.title?u.columnDefinition.columnDataKey:u.columnDefinition.title}
    </template>
`;let dg=(()=>{class u extends Qr.g{constructor(){super(...arguments),this.cellType="default",this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(n,o){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var n;super.connectedCallback(),this.addEventListener(Hd,this.handleFocusin),this.addEventListener(vl,this.handleFocusout),this.addEventListener(Xc,this.handleKeydown),this.style.gridColumn=`${void 0===(null===(n=this.columnDefinition)||void 0===n?void 0:n.gridColumn)?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Hd,this.handleFocusin),this.removeEventListener(vl,this.handleFocusout),this.removeEventListener(Xc,this.handleKeydown),this.disconnectCellView()}handleFocusin(n){if(!this.isActiveCell){if(this.isActiveCell=!0,"columnheader"===this.cellType){if(null!==this.columnDefinition&&!0!==this.columnDefinition.headerCellInternalFocusQueue&&"function"==typeof this.columnDefinition.headerCellFocusTargetCallback){const o=this.columnDefinition.headerCellFocusTargetCallback(this);null!==o&&o.focus()}}else if(null!==this.columnDefinition&&!0!==this.columnDefinition.cellInternalFocusQueue&&"function"==typeof this.columnDefinition.cellFocusTargetCallback){const o=this.columnDefinition.cellFocusTargetCallback(this);null!==o&&o.focus()}this.$emit("cell-focused",this)}}handleFocusout(n){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(n){if(!(n.defaultPrevented||null===this.columnDefinition||"default"===this.cellType&&!0!==this.columnDefinition.cellInternalFocusQueue||"columnheader"===this.cellType&&!0!==this.columnDefinition.headerCellInternalFocusQueue))switch(n.key){case Pn.Mm:case Pn.Ac:if(this.contains(document.activeElement)&&document.activeElement!==this)return;if("columnheader"===this.cellType){if(void 0!==this.columnDefinition.headerCellFocusTargetCallback){const o=this.columnDefinition.headerCellFocusTargetCallback(this);null!==o&&o.focus(),n.preventDefault()}}else if(void 0!==this.columnDefinition.cellFocusTargetCallback){const o=this.columnDefinition.cellFocusTargetCallback(this);null!==o&&o.focus(),n.preventDefault()}break;case Pn.F9:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),n.preventDefault())}}updateCellView(){if(this.disconnectCellView(),null!==this.columnDefinition)switch(this.cellType){case"columnheader":this.customCellView=void 0!==this.columnDefinition.headerCellTemplate?this.columnDefinition.headerCellTemplate.render(this,this):cg.render(this,this);break;case void 0:case"rowheader":case"default":this.customCellView=void 0!==this.columnDefinition.cellTemplate?this.columnDefinition.cellTemplate.render(this,this):zv.render(this,this)}}disconnectCellView(){null!==this.customCellView&&(this.customCellView.dispose(),this.customCellView=null)}}return(0,Dt.Cg)([(0,an.CF)({attribute:"cell-type"})],u.prototype,"cellType",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"grid-column"})],u.prototype,"gridColumn",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"rowData",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"columnDefinition",void 0),u})(),ug=(()=>{class u extends Qr.g{constructor(){super(...arguments),this.rowType="default",this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){null!==this.rowData&&this.isActiveRow&&(this.refocusOnLoad=!0)}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),null===this.cellsRepeatBehavior&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new lg(n=>n.columnDefinitions,n=>n.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(vl,this.handleFocusout),this.addEventListener(Xc,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(vl,this.handleFocusout),this.removeEventListener(Xc,this.handleKeydown)}handleFocusout(n){this.contains(n.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(n){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(n.target),this.$emit("row-focused",this)}handleKeydown(n){if(n.defaultPrevented)return;let o=0;switch(n.key){case Pn.kT:o=Math.max(0,this.focusColumnIndex-1),this.cellElements[o].focus(),n.preventDefault();break;case Pn.bb:o=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[o].focus(),n.preventDefault();break;case Pn.Tg:n.ctrlKey||(this.cellElements[0].focus(),n.preventDefault());break;case Pn.FM:n.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),n.preventDefault())}}updateItemTemplate(){this.activeCellItemTemplate="default"===this.rowType&&void 0!==this.cellItemTemplate?this.cellItemTemplate:"default"===this.rowType&&void 0===this.cellItemTemplate?this.defaultCellItemTemplate:void 0!==this.headerCellItemTemplate?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}return(0,Dt.Cg)([(0,an.CF)({attribute:"grid-template-columns"})],u.prototype,"gridTemplateColumns",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"row-type"})],u.prototype,"rowType",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"rowData",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"columnDefinitions",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"cellItemTemplate",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"headerCellItemTemplate",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"rowIndex",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"isActiveRow",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"activeCellItemTemplate",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"defaultCellItemTemplate",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"defaultHeaderCellItemTemplate",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"cellElements",void 0),u})(),Wh=(()=>{class u extends Qr.g{constructor(){super(),this.noTabbing=!1,this.generateHeader="default",this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(n,o,p)=>{if(0===this.rowElements.length)return this.focusRowIndex=0,void(this.focusColumnIndex=0);const y=Math.max(0,Math.min(this.rowElements.length-1,n)),z=this.rowElements[y].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),xe=z[Math.max(0,Math.min(z.length-1,o))];p&&this.scrollHeight!==this.clientHeight&&(y<this.focusRowIndex&&this.scrollTop>0||y>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&xe.scrollIntoView({block:"center",inline:"center"}),xe.focus()},this.onChildListChange=(n,o)=>{n&&n.length&&(n.forEach(p=>{p.addedNodes.forEach(y=>{1===y.nodeType&&"row"===y.getAttribute("role")&&(y.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,Er.dv.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let n=this.gridTemplateColumns;void 0===n&&(""===this.generatedGridTemplateColumns&&this.rowElements.length>0&&(this.generatedGridTemplateColumns=new Array(this.rowElements[0].cellElements.length).fill("1fr").join(" ")),n=this.generatedGridTemplateColumns),this.rowElements.forEach((o,p)=>{const y=o;y.rowIndex=p,y.gridTemplateColumns=n,this.columnDefinitionsStale&&(y.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(n){let o="";return n.forEach(p=>{o=`${o}${""===o?"":" "}1fr`}),o}noTabbingChanged(){this.$fastController.isConnected&&this.setAttribute("tabIndex",this.noTabbing||this.contains(document.activeElement)||this===document.activeElement?"-1":"0")}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){null===this.columnDefinitions&&this.rowsData.length>0&&(this.columnDefinitions=u.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){null!==this.columnDefinitions?(this.generatedGridTemplateColumns=u.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())):this.generatedGridTemplateColumns=""}headerCellItemTemplateChanged(){this.$fastController.isConnected&&null!==this.generatedHeader&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),void 0===this.rowItemTemplate&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new lg(n=>n.rowsData,n=>n.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener("focus",this.handleFocus),this.addEventListener(Xc,this.handleKeydown),this.addEventListener(vl,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),Er.dv.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener("focus",this.handleFocus),this.removeEventListener(Xc,this.handleKeydown),this.removeEventListener(vl,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(n){this.isUpdatingFocus=!0;const o=n.target;this.focusRowIndex=this.rowElements.indexOf(o),this.focusColumnIndex=o.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(n){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(n){(null===n.relatedTarget||!this.contains(n.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(n){if(n.defaultPrevented)return;let o;const p=this.rowElements.length-1,y=this.offsetHeight+this.scrollTop,k=this.rowElements[p];switch(n.key){case Pn.I5:n.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Pn.HX:n.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case Pn.oK:if(n.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(0===this.focusRowIndex)return void this.focusOnCell(0,this.focusColumnIndex,!1);for(o=this.focusRowIndex-1;o>=0;o--){const z=this.rowElements[o];if(z.offsetTop<this.scrollTop){this.scrollTop=z.offsetTop+z.clientHeight-this.clientHeight;break}}this.focusOnCell(o,this.focusColumnIndex,!1);break;case Pn.f_:if(n.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=p||k.offsetTop+k.offsetHeight<=y)return void this.focusOnCell(p,this.focusColumnIndex,!1);for(o=this.focusRowIndex+1;o<=p;o++){const z=this.rowElements[o];if(z.offsetTop+z.offsetHeight>y){let fe=0;"sticky"===this.generateHeader&&null!==this.generatedHeader&&(fe=this.generatedHeader.clientHeight),this.scrollTop=z.offsetTop-fe;break}}this.focusOnCell(o,this.focusColumnIndex,!1);break;case Pn.Tg:n.ctrlKey&&(n.preventDefault(),this.focusOnCell(0,0,!0));break;case Pn.FM:n.ctrlKey&&null!==this.columnDefinitions&&(n.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0))}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||!1===this.pendingFocusUpdate&&(this.pendingFocusUpdate=!0,Er.dv.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(null!==this.generatedHeader&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),"none"!==this.generateHeader&&this.rowsData.length>0){const n=document.createElement(this.rowElementTag);return this.generatedHeader=n,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType="sticky"===this.generateHeader?"sticky-header":"header",void((null!==this.firstChild||null!==this.rowsPlaceholder)&&this.insertBefore(n,null!==this.firstChild?this.firstChild:this.rowsPlaceholder))}}}return u.generateColumns=l=>Object.getOwnPropertyNames(l).map((n,o)=>({columnDataKey:n,gridColumn:`${o}`})),(0,Dt.Cg)([(0,an.CF)({attribute:"no-tabbing",mode:"boolean"})],u.prototype,"noTabbing",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"generate-header"})],u.prototype,"generateHeader",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"grid-template-columns"})],u.prototype,"gridTemplateColumns",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"rowsData",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"columnDefinitions",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"rowItemTemplate",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"cellItemTemplate",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"headerCellItemTemplate",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"focusRowIndex",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"focusColumnIndex",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"defaultRowItemTemplate",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"rowElementTag",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"rowElements",void 0),u})();const Gv=mi.q`
    <div
        class="title"
        part="title"
        aria-label="${u=>u.dateFormatter.getDate(`${u.month}-2-${u.year}`,{month:"long",year:"numeric"})}"
    >
        <span part="month">
            ${u=>u.dateFormatter.getMonth(u.month)}
        </span>
        <span part="year">${u=>u.dateFormatter.getYear(u.year)}</span>
    </div>
`,Qv=(u,l)=>{const n=u.tagFor(Wh),o=u.tagFor(ug);return mi.q`
    <${n} class="days interact" part="days" generate-header="none">
        <${o}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${_l(p=>p.getWeekdayText(),(u=>{const l=u.tagFor(dg);return mi.q`
        <${l}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(n,o)=>o.index+1}"
            abbr="${n=>n.abbr}"
        >
            ${n=>n.text}
        </${l}>
    `})(u),{positioning:!0})}
        </${o}>
        ${_l(p=>p.getDays(),((u,l)=>{const n=u.tagFor(ug);return mi.q`
        <${n}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${_l(o=>o,((u,l)=>{const n=u.tagFor(dg);return mi.q`
        <${n}
            class="${(o,p)=>p.parentContext.parent.getDayClassNames(o,l)}"
            part="day"
            tabindex="-1"
            role="gridcell"
            grid-column="${(o,p)=>p.index+1}"
            @click="${(o,p)=>p.parentContext.parent.handleDateSelect(p.event,o)}"
            @keydown="${(o,p)=>p.parentContext.parent.handleKeydown(p.event,o)}"
            aria-label="${(o,p)=>p.parentContext.parent.dateFormatter.getDate(`${o.month}-${o.day}-${o.year}`,{month:"long",day:"numeric"})}"
        >
            <div
                class="date"
                part="${o=>l===`${o.month}-${o.day}-${o.year}`?"today":"date"}"
            >
                ${(o,p)=>p.parentContext.parent.dateFormatter.getDay(o.day)}
            </div>
            <slot name="${o=>o.month}-${o=>o.day}-${o=>o.year}"></slot>
        </${n}>
    `})(u,l),{positioning:!0})}
        </${n}>
    `})(u,l))}
    </${n}>
`},Xv=_i.A`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,Zv=_i.A`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`,uu=(()=>{class u extends Fv{constructor(){super(...arguments),this.readonly=!0}}return(0,hh.Cg)([(0,an.CF)({converter:an.Bs})],u.prototype,"readonly",void 0),u})().compose({baseName:"calendar",template:(u,l)=>{var n;const o=new Date,p=`${o.getMonth()+1}-${o.getDate()}-${o.getFullYear()}`;return mi.q`
        <template>
            ${Hi.pS}
            ${l.title instanceof Function?l.title(u,l):null!==(n=l.title)&&void 0!==n?n:""}
            <slot></slot>
            ${(0,is.z)(y=>y.readonly,(u=>mi.q`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${_l(l=>l.getWeekdayText(),mi.q`
                        <div class="week-day" part="week-day" abbr="${l=>l.abbr}">
                            ${l=>l.text}
                        </div>
                    `)}
            </div>
            ${_l(l=>l.getDays(),mi.q`
                    <div class="week">
                        ${_l(l=>l,mi.q`
                                <div
                                    class="${(l,n)=>n.parentContext.parent.getDayClassNames(l,u)}"
                                    part="day"
                                    aria-label="${(l,n)=>n.parentContext.parent.dateFormatter.getDate(`${l.month}-${l.day}-${l.year}`,{month:"long",day:"numeric"})}"
                                >
                                    <div
                                        class="date"
                                        part="${l=>u===`${l.month}-${l.day}-${l.year}`?"today":"date"}"
                                    >
                                        ${(l,n)=>n.parentContext.parent.dateFormatter.getDay(l.day)}
                                    </div>
                                    <slot
                                        name="${l=>l.month}-${l=>l.day}-${l=>l.year}"
                                    ></slot>
                                </div>
                            `)}
                    </div>
                `)}
        </div>
    `)(p),Qv(u,p))}
            ${Hi.Sm}
        </template>
    `},styles:(u,l)=>_i.A`
${(0,Oo.V)("inline-block")} :host {
  --calendar-cell-size: calc((${Et.Sss} + 2 + ${Et.Brd}) * ${Et.vR1} * 1px);
  --calendar-gap: 2px;
  ${pa.Ah}
  color: ${Et.lHw};
}

.title {
  padding: calc(${Et.vR1} * 2px);
  font-weight: 600;
}

.days {
  text-align: center;
}

.week-days,
.week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: var(--calendar-gap);
  border: 0;
  padding: 0;
}

.day,
.week-day {
  border: 0;
  width: var(--calendar-cell-size);
  height: var(--calendar-cell-size);
  line-height: var(--calendar-cell-size);
  padding: 0;
  box-sizing: initial;
}

.week-day {
  font-weight: 600;
}

.day {
  border: calc(${Et.XAH} * 1px) solid transparent;
  border-radius: calc(${Et.PbG} * 1px);
}

.interact .day {
  cursor: pointer;
}

.date {
  height: 100%;
}

.inactive .date,
.inactive.disabled::before {
  color: ${Et.cRz};
}

.disabled::before {
  content: '';
  display: inline-block;
  width: calc(var(--calendar-cell-size) * .8);
  height: calc(${Et.XAH} * 1px);
  background: currentColor;
  position: absolute;
  margin-top: calc(var(--calendar-cell-size) / 2);
  transform-origin: center;
  z-index: 1;
}

.selected {
  color: ${Et.IRh};
  border: 1px solid ${Et.IRh};
  background: ${Et.pfK};
}

.selected + .selected {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-inline-start-width: 0;
  padding-inline-start: calc(var(--calendar-gap) + (${Et.XAH} + ${Et.PbG}) * 1px);
  margin-inline-start: calc((${Et.PbG} * -1px) - var(--calendar-gap));
}

.today.disabled::before {
  color: ${Et.l_5};
}

.today .date {
  color: ${Et.l_5};
  background: ${Et.IRh};
  border-radius: 50%;
  position: relative;
}
`.withBehaviors((0,Vs.mr)(_i.A`
          .day.selected {
              color: ${En.A.Highlight};
          }

          .today .date {
              background: ${En.A.Highlight};
              color: ${En.A.HighlightText};
          }
      `),new hc(Xv,Zv)),title:Gv});var Xl=function(u,l,n,o){var k,p=arguments.length,y=p<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(u,l,n,o);else for(var z=u.length-1;z>=0;z--)(k=u[z])&&(y=(p<3?k(y):p>3?k(l,n,y):k(l,n))||y);return p>3&&y&&Object.defineProperty(l,n,y),y},hu=function(u,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(u,l)};let fg=(()=>{class u extends Bs.N{get strings(){return Yp}constructor(){super(),this.renderLoading=()=>this.renderLoadingTask(),this.renderContent=()=>{const n=xi.b.globalProvider;if(!n||n.state!==Di.HJ.SignedIn)return Lt.qy``;const o=this.renderPicker(),p=this.renderNewTask(),y=this.renderTasks();return Lt.qy`
      ${o}
      ${p}
      <div class="tasks" dir=${this.direction}>
        ${y}
      </div>
    `},this.handleTaskClick=n=>{this.fireCustomEvent("taskClick",{task:n})},this.onResize=()=>{this.mediaQuery!==this._previousMediaQuery&&(this._previousMediaQuery=this.mediaQuery,this.requestUpdate())},(0,ts.E)(Od.oR,jl.zi,uu),this.clearState(),this._previousMediaQuery=this.mediaQuery}args(){return[this.providerState,this.targetId,this.initialId]}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.onResize)}disconnectedCallback(){window.removeEventListener("resize",this.onResize),super.disconnectedCallback()}renderLoadingTask(){return Lt.qy`
      <div class="task loading-task">
        <div class="task-details">
          <div class="title"></div>
          <div class="task-due"></div>
          <div class="task-delete"></div>
        </div>
      </div>
    `}clearState(){this.requestUpdate()}dateToInputValue(n){return n?new Date(n.getTime()-6e4*n.getTimezoneOffset()).toISOString().split("T")[0]:null}}return Xl([(0,Mt.MZ)({attribute:"read-only",type:Boolean}),hu("design:type",Boolean)],u.prototype,"readOnly",void 0),Xl([(0,Mt.MZ)({attribute:"hide-header",type:Boolean}),hu("design:type",Boolean)],u.prototype,"hideHeader",void 0),Xl([(0,Mt.MZ)({attribute:"hide-options",type:Boolean}),hu("design:type",Boolean)],u.prototype,"hideOptions",void 0),Xl([(0,Mt.MZ)({attribute:"target-id",type:String}),hu("design:type",String)],u.prototype,"targetId",void 0),Xl([(0,Mt.MZ)({attribute:"initial-id",type:String}),hu("design:type",String)],u.prototype,"initialId",void 0),u})();var Ws=function(u,l,n,o){var k,p=arguments.length,y=p<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(u,l,n,o);else for(var z=u.length-1;z>=0;z--)(k=u[z])&&(y=(p<3?k(y):p>3?k(l,n,y):k(l,n))||y);return p>3&&y&&Object.defineProperty(l,n,y),y},Ks=function(u,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(u,l)},Ds=function(u,l,n,o){return new(n||(n=Promise))(function(y,k){function z($e){try{xe(o.next($e))}catch(Ze){k(Ze)}}function fe($e){try{xe(o.throw($e))}catch(Ze){k(Ze)}}function xe($e){$e.done?y($e.value):function p(y){return y instanceof n?y:new n(function(k){k(y)})}($e.value).then(z,fe)}xe((o=o.apply(u,l||[])).next())})};let Ya=(()=>{class u extends fg{static get styles(){return qp}get strings(){return iu}static get requiredScopes(){return["tasks.read","tasks.readwrite"]}constructor(){super(),this._isChangedDueDate=!1,this._isDarkMode=!1,this.onThemeChanged=()=>{this._isDarkMode=tp(this)},this.renderNewTask=()=>{const n=this._newTaskName?Lt.qy`
        <fluent-checkbox
          class="task-add-icon"
          @click="${this.addTask}">
        </fluent-checkbox>
      `:Lt.qy`
        <span class="add-icon">${(0,Vn.r)(Vn.A.Add)}</span>
      `,o=Lt.qy`
      <fluent-button
        aria-label=${this.strings.cancelAddingTask}
        class="task-cancel-icon" 
        @click="${this.clearNewTaskData}"
      >
        ${(0,Vn.r)(Vn.A.Cancel)}
      </fluent-button>
    `,y=Lt.qy`
      <fluent-text-field
        autocomplete="off"
        type="date"
        id="new-taskDate-input"
        class="${(0,Ht.H)({dark:this._isDarkMode,date:!0})}"
        aria-label="${this.strings.newTaskDateInputLabel}"
        .value="${this.dateToInputValue(this._newTaskDueDate)}"
        @change="${this.handleDateChange}"
      >
      </fluent-text-field>
    `,k=this.readOnly?Lt.s6:Lt.qy`
      <fluent-text-field
        autocomplete="off"
        appearance="outline"
        class="new-task"
        id="new-task-name-input"
        aria-label="${this.strings.newTaskLabel}"
        .value=${this._newTaskName}
        placeholder="${this.strings.newTaskPlaceholder}"
        @keydown="${this.handleKeyDown}"
        @input="${this.handleInput}"
      >
        <div slot="start" class="start">${n}</div>
        ${this._newTaskName?Lt.qy`
              <div slot="end" class="end">
                <span class="calendar">${y}</span>
                ${o}
              </div> `:Lt.qy``}
      </fluent-text-field>
    `;return Lt.qy`
      ${this.currentList?Lt.qy`
            <div dir=${this.direction} class="task new-task incomplete">
              ${k}
            </div>
        `:Lt.qy``}  
     `},this.handleSelectionChanged=n=>{this.currentList=n.detail,this.loadTasks(this.currentList)},this.renderTaskDetails=n=>{const o={task:n,list:this.currentList};if(this.hasTemplate("task"))return this.renderTemplate("task",o,n.id);let p=null;const y=Lt.qy`
      <fluent-button class="task-delete"
        @click="${()=>this.removeTask(n.id)}"
        aria-label="${this.strings.deleteTaskOption}">
        ${(0,Vn.r)(Vn.A.Delete)}
      </fluent-button>`;if(this.hasTemplate("task-details"))p=this.renderTemplate("task-details",o,`task-details-${n.id}`);else{const z=Lt.qy`
        <fluent-text-field
          autocomplete="off"
          type="date"
          id="${n.id}-taskDate-input"
          class="${(0,Ht.H)({dark:this._isDarkMode,date:!0,"task-due":!0})}"
          aria-label="${this.strings.changeTaskDateInputLabel}"
          .value="${n.dueDateTime?this.dateToInputValue(new Date(n.dueDateTime.dateTime)):this._taskBeingUpdated===n?this.dateToInputValue(this._newTaskDueDate):Lt.s6}"
          @change="${this.handleDateUpdate}"
          @focus="${xe=>this.updatingTask(xe,n)}"
          @blur="${this.handleBlur}"
        >
        </fluent-text-field>
      `,fe=Lt.qy`
          <fluent-text-field 
            autocomplete="off"
            appearance="outline"
            class="title"
            id=${n.id}
            .value="${n.title?n.title:this._taskBeingUpdated===n?this._changedTaskName:""}"
            aria-label="${this.strings.editTaskLabel}"
            @keydown="${xe=>this.handleChange(xe,n)}"
            @input="${xe=>this.handleChange(xe,n)}"
            @focus="${xe=>this.updatingTask(xe,n)}"
          >
          </fluent-text-field>
          ${n.dueDateTime||this._taskBeingUpdated===n?Lt.qy`${z}`:Lt.s6}
          ${y}
      `;p=Lt.qy`
      <div class="task-details">
        ${fe}
      </div>
      `}return Lt.qy`${p}`},this.renderTask=n=>{const o="completed"===n.status,p=(0,Ht.H)({complete:o,"read-only":this.readOnly,task:!0}),y=(0,Ht.H)({complete:o}),k=Lt.qy`${(0,Vn.r)(Vn.A.CheckMark)}`;return Lt.qy`
      <div class=${p} @blur="${this.handleBlur}">
        <fluent-checkbox 
          id=${n.id} 
          class=${y}
          ?checked=${o}
          @click="${()=>this.handleTaskCheckClick(n)}"
          @keydown="${z=>this.handleTaskCheckKeydown(z,n)}"
        >
          <div slot="checked-indicator">
            ${k}
          </div>
        </fluent-checkbox>
        ${this.renderTaskDetails(n)}
      </div>
    `},this.loadState=()=>Ds(this,void 0,void 0,function*(){const n=xi.b.globalProvider;if(n&&n.state===Di.HJ.SignedIn){if(!this._graph){const o=n.graph.forComponent(this);this._graph=o}if(!this.currentList&&!this.initialId){const o=yield(u=>zs(void 0,void 0,void 0,function*(){const l=yield u.api("/me/todo/lists").header("Cache-Control","no-store").middlewareOptions((0,Rr.F)(Pa)).get();return l?.value}))(this._graph),p=o?.find(y=>"defaultList"===y.wellknownListName);p&&(yield this.loadTasks(p))}this.targetId?(this.currentList=yield Ov(this._graph,this.targetId),this._tasks=yield tu(this._graph,this.targetId)):this.initialId&&(this.currentList=yield Ov(this._graph,this.initialId),this._tasks=yield tu(this._graph,this.initialId))}}),this.addTask=()=>Ds(this,void 0,void 0,function*(){if(!this._isNewTaskBeingAdded&&this._newTaskName){this._isNewTaskBeingAdded=!0;try{yield this.createNewTask()}finally{this.clearNewTaskData(),this._isNewTaskBeingAdded=!1}}}),this.updateTask=n=>Ds(this,void 0,void 0,function*(){try{if(!this._changedTaskName&&!this._isChangedDueDate)return;yield this.updateTaskItem(n)}finally{this.clearNewTaskData()}}),this.clearNewTaskData=()=>{this._newTaskDueDate=null,this._newTaskName="",this._changedTaskName="",this._isChangedDueDate=!1,this.focusOnTaskInput()},this.focusOnTaskInput=()=>{const n=this.renderRoot.querySelector("#new-task-name-input"),o=n?.shadowRoot.querySelector("input");o&&o.focus()},this.clearState=()=>{super.clearState(),this.currentList=null,this._tasks=[],this._taskBeingUpdated=null},this.loadTasks=n=>Ds(this,void 0,void 0,function*(){this.currentList=n,this._tasks=yield tu(this._graph,n.id)}),this.updateTaskStatus=(n,o)=>Ds(this,void 0,void 0,function*(){n.status=o;const p=this.currentList.id;n=yield $h(this._graph,p,n.id,n);const y=this._tasks.findIndex(k=>k.id===n.id);this._tasks[y]=n,yield this._task.run()}),this.removeTask=n=>Ds(this,void 0,void 0,function*(){this._tasks=this._tasks.filter(p=>p.id!==n),this.requestUpdate();const o=this.currentList.id;yield((u,l,n)=>zs(void 0,void 0,void 0,function*(){yield u.api(`/me/todo/lists/${l}/tasks/${n}`).header("Cache-Control","no-store").middlewareOptions((0,Rr.F)(Kl)).delete()}))(this._graph,o,n),this._tasks=this._tasks.filter(p=>p.id!==n)}),this.handleInput=n=>{"new-task-name-input"===n.target.id&&(this._newTaskName=n.target.value)},this.handleChange=(n,o)=>Ds(this,void 0,void 0,function*(){var p;n.target.id===o.id&&("Enter"===n.key&&(yield this.updateTask(o),null===(p=n.target)||void 0===p||p.blur()),this._changedTaskName=n.target.value)}),this.handleKeyDown=n=>Ds(this,void 0,void 0,function*(){"Enter"===n.key&&"new-task-name-input"===n.target.id&&(yield this.addTask())}),this.updatingTask=(n,o)=>{n.target.id===o.id&&(this._taskBeingUpdated=o),n.target.id===`${o.id}-taskDate-input`&&(this._updatingTaskDate=!0,this._taskBeingUpdated=o)},this.handleBlur=()=>{const n=this._taskBeingUpdated,o=this.renderRoot.querySelectorAll("fluent-text-field");for(const p of o)n&&(p.id===n.id||p.id===`${n.id}-taskDate-input`)&&(this.updateTask(n),p?.blur(),this._taskBeingUpdated=null,this._updatingTaskDate=!1)},this.handleDateChange=n=>{const o=n.target.value;this._newTaskDueDate=o?new Date(o+"T17:00"):null},this.handleDateUpdate=n=>{const o=this._taskBeingUpdated;if(o){const p=n.target.value;this._newTaskDueDate=p?new Date(p+"T17:00"):null,this._isChangedDueDate=o.dueDateTime&&this._newTaskDueDate?new Date(o.dueDateTime.dateTime)!==this._newTaskDueDate:!(!o.dueDateTime&&!this._newTaskDueDate)}},this._graph=null,this._newTaskDueDate=null,this._tasks=[],this.addEventListener("selectionChanged",this.handleSelectionChanged),this.addEventListener("blur",this.handleBlur)}connectedCallback(){super.connectedCallback(),window.addEventListener("darkmodechanged",this.onThemeChanged),this.onThemeChanged()}disconnectedCallback(){window.removeEventListener("darkmodechanged",this.onThemeChanged),super.disconnectedCallback()}renderTasks(){let n=this._tasks;n&&this.taskFilter&&(n=n.filter(k=>this.taskFilter(k)));const o=n.filter(k=>"completed"===k.status),p=(0,xo.u)(n.filter(k=>"completed"!==k.status),k=>k.id,k=>this.renderTask(k)),y=(0,xo.u)(o.sort((k,z)=>k.lastModifiedDateTime<z.lastModifiedDateTime?-1:1).filter(k=>"completed"===k.status),k=>k.id,k=>this.renderTask(k));return Lt.qy`
      ${p}
      ${y}
    `}renderPicker(){var n,o;return this.targetId?Lt.qy`<p>${null===(n=this.currentList)||void 0===n?void 0:n.displayName}</p>`:or.Q`
        <mgt-picker
          resource="me/todo/lists"
          scopes="tasks.read, tasks.readwrite"
          key-name="displayName"
          selected-value="${(0,Hl.J)(null===(o=this.currentList)||void 0===o?void 0:o.displayName)}"
          placeholder="Select a task list">
        </mgt-picker>`}createNewTask(){return Ds(this,void 0,void 0,function*(){const n=this.currentList.id,o={title:this._newTaskName};this._newTaskDueDate&&(o.dueDateTime={dateTime:new Date(this._newTaskDueDate).toLocaleDateString(),timeZone:"UTC"});const p=yield((u,l,n)=>zs(void 0,void 0,void 0,function*(){return yield u.api(`/me/todo/lists/${l}/tasks`).header("Cache-Control","no-store").middlewareOptions((0,Rr.F)(Kl)).post(n)}))(this._graph,n,o);this._tasks.unshift(p)})}updateTaskItem(n){return Ds(this,void 0,void 0,function*(){const o=this.currentList.id;let p={};if(this._changedTaskName&&this._changedTaskName!==n.title&&(p={title:this._changedTaskName}),this._updatingTaskDate){if(!this._isChangedDueDate)return;p.dueDateTime=this._newTaskDueDate?{dateTime:new Date(this._newTaskDueDate).toLocaleDateString(),timeZone:"UTC"}:null}if(!Object.keys(p).length)return;const y=yield $h(this._graph,o,n.id,p),k=this._tasks.findIndex(z=>z.id===y.id);this._tasks[k]=y})}handleTaskCheckClick(n){this.handleTaskClick(n),this.readOnly||this.updateTaskStatus(n,"completed"===n.status?"notStarted":"completed")}handleTaskCheckKeydown(n,o){"Enter"===n.key&&!this.readOnly&&(this.handleTaskClick(o),this.updateTaskStatus(o,"completed"===o.status?"notStarted":"completed"))}}return Ws([(0,Mt.wk)(),Ks("design:type",Array)],u.prototype,"_tasks",void 0),Ws([(0,Mt.wk)(),Ks("design:type",Object)],u.prototype,"_taskBeingUpdated",void 0),Ws([(0,Mt.wk)(),Ks("design:type",Boolean)],u.prototype,"_updatingTaskDate",void 0),Ws([(0,Mt.wk)(),Ks("design:type",Object)],u.prototype,"_isChangedDueDate",void 0),Ws([(0,Mt.wk)(),Ks("design:type",Date)],u.prototype,"_newTaskDueDate",void 0),Ws([(0,Mt.wk)(),Ks("design:type",String)],u.prototype,"_newTaskName",void 0),Ws([(0,Mt.wk)(),Ks("design:type",String)],u.prototype,"_changedTaskName",void 0),Ws([(0,Mt.wk)(),Ks("design:type",Boolean)],u.prototype,"_isNewTaskBeingAdded",void 0),Ws([(0,Mt.wk)(),Ks("design:type",Object)],u.prototype,"_graph",void 0),Ws([(0,Mt.wk)(),Ks("design:type",Object)],u.prototype,"currentList",void 0),Ws([(0,Mt.wk)(),Ks("design:type",Object)],u.prototype,"_isDarkMode",void 0),u})();var pg=d(9569),Jv=d(8072);const Qh={termsetIdRequired:"The termsetId property or termset-id attribute is required",noTermsFound:"No terms found",comboboxPlaceholder:"Select a term",loadingMessage:"Loading..."},e0=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{--max-height:var(--taxonomy-picker-list-max-height, 380px)}:host .picker{background-color:var(--taxonomy-picker-background-color,transparent)}:host fluent-combobox::part(selected-value)::placeholder{color:var(--taxonomy-picker-placeholder-color,var(--input-filled-placeholder-rest))}:host fluent-combobox::part(selected-value):hover::placeholder{color:var(--taxonomy-picker-placeholder-color-hover,var(--secondary-text-hover-color))}[dir=rtl] .picker{direction:rtl}
`];var po=function(u,l,n,o){var k,p=arguments.length,y=p<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(u,l,n,o);else for(var z=u.length-1;z>=0;z--)(k=u[z])&&(y=(p<3?k(y):p>3?k(l,n,y):k(l,n))||y);return p>3&&y&&Object.defineProperty(l,n,y),y},Ko=function(u,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(u,l)};let rd=(()=>{class u extends Bs.N{get strings(){return Qh}static get styles(){return e0}constructor(){super(),this.version="beta",this.position="below",this.selectedTerm=null,this.cacheEnabled=!1,this.cacheInvalidationPeriod=0,this.renderLoading=()=>this.terms?this.renderContent():this.renderTemplate("loading",null,"loading")||or.Q`
        <div class="message-parent">
          <mgt-spinner></mgt-spinner>
          <div label="loading-text" aria-label="loading">
            ${this.strings.loadingMessage}
          </div>
        </div>
      `,this.renderContent=()=>{var n;return this.error?this.renderError():this.noTerms?this.renderNoData():(null===(n=this.terms)||void 0===n?void 0:n.length)>0?this.renderTaxonomyPicker():this.renderGet()},this.renderError=()=>this.renderTemplate("error",null,"error")||Lt.qy`<span>${this.error}</span>`,this.placeholder=this.strings.comboboxPlaceholder,this.noTerms=!1}refresh(n=!1){n&&this.clearState()}clearState(){this.terms=null,this.error=null,this.noTerms=!1}renderNoData(){return this.renderTemplate("no-data",null)||Lt.qy`<span>${this.strings.noTermsFound}</span>`}renderTaxonomyPicker(){return or.Q`
      <fluent-combobox class="taxonomy-picker" autocomplete="both" placeholder=${this.placeholder} position=${this.position} ?disabled=${this.disabled}>
        ${this.terms.map(n=>this.renderTaxonomyPickerItem(n))}
      </fluent-combobox>
     `}renderTaxonomyPickerItem(n){return Lt.qy`
        <fluent-option value=${n.id} ?selected=${this.defaultSelectedTermId&&this.defaultSelectedTermId===n.id} @click=${p=>this.handleClick(p,n)}> ${this.renderTemplate("term",{term:n},n.id)||n.labels[0].name} </fluent-option>
        `}renderGet(){if(!this.termsetId)return Lt.qy`<span>${this.strings.termsetIdRequired}</span>`;let n=`/termStore/sets/${this.termsetId}/children`;return this.termId&&(n=`/termStore/sets/${this.termsetId}/terms/${this.termId}/children`),this.siteId&&(n=`/sites/${this.siteId}${n}`),n+="?$select=id,labels,descriptions,properties",or.Q`
      <mgt-get
        class="mgt-get"
        resource=${n}
        version=${this.version}
        scopes="TermStore.Read.All, TermStore.ReadWrite.All"
        ?cache-enabled=${this.cacheEnabled}
        ?cache-invalidation-period=${this.cacheInvalidationPeriod}>
      </mgt-get>`}firstUpdated(n){super.firstUpdated(n),this.renderRoot.addEventListener("dataChange",p=>this.handleDataChange(p))}handleDataChange(n){const o=n.detail.error?n.detail.error:null;if(o)return void(this.error=o);this.locale&&(this.locale=this.locale.toLowerCase());const y=n.detail.response.value.map(k=>{const z=k.labels;if(z&&z.length>0&&this.locale){const fe=z.find(xe=>xe.languageTag.toLowerCase()===this.locale);fe&&(k.labels=[fe,...z.filter(xe=>xe.languageTag.toLowerCase()!==this.locale)])}return k});this.terms=y,0===y.length&&(this.noTerms=!0)}handleClick(n,o){this.selectedTerm=o,this.fireCustomEvent("selectionChanged",o)}}return po([(0,Mt.MZ)({attribute:"term-set-id",type:String}),Ko("design:type",String)],u.prototype,"termsetId",void 0),po([(0,Mt.MZ)({attribute:"term-id",type:String}),Ko("design:type",String)],u.prototype,"termId",void 0),po([(0,Mt.MZ)({attribute:"site-id",type:String}),Ko("design:type",String)],u.prototype,"siteId",void 0),po([(0,Mt.MZ)({attribute:"locale",type:String}),Ko("design:type",String)],u.prototype,"locale",void 0),po([(0,Mt.MZ)({attribute:"version",type:String}),Ko("design:type",Object)],u.prototype,"version",void 0),po([(0,Mt.MZ)({attribute:"placeholder",type:String}),Ko("design:type",String)],u.prototype,"placeholder",void 0),po([(0,Mt.MZ)({attribute:"position",type:String,converter:l=>"above"===l?"above":"below"}),Ko("design:type",String)],u.prototype,"position",void 0),po([(0,Mt.MZ)({attribute:"default-selected-term-id",type:String}),Ko("design:type",String)],u.prototype,"defaultSelectedTermId",void 0),po([(0,Mt.MZ)({attribute:"selected-term",type:Object}),Ko("design:type",Object)],u.prototype,"selectedTerm",void 0),po([(0,Mt.MZ)({attribute:"disabled",type:Boolean}),Ko("design:type",Boolean)],u.prototype,"disabled",void 0),po([(0,Mt.MZ)({attribute:"cache-enabled",type:Boolean}),Ko("design:type",Object)],u.prototype,"cacheEnabled",void 0),po([(0,Mt.MZ)({attribute:"cache-invalidation-period",type:Number}),Ko("design:type",Object)],u.prototype,"cacheInvalidationPeriod",void 0),po([(0,Mt.wk)(),Ko("design:type",Array)],u.prototype,"terms",void 0),po([(0,Mt.wk)(),Ko("design:type",Boolean)],u.prototype,"noTerms",void 0),u})();class Xh extends Qr.g{}class od extends((0,zc.dx)(Xh)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const n0=(()=>{class u extends od{constructor(){super(),this.initialValue="on",this.keypressHandler=n=>{if(!this.readOnly)switch(n.key){case Pn.Mm:case Pn.gG:this.checked=!this.checked}},this.clickHandler=n=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(n,o){super.checkedChanged(n,o),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}return(0,Dt.Cg)([(0,an.CF)({attribute:"readonly",mode:"boolean"})],u.prototype,"readOnly",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"defaultSlottedNodes",void 0),u})().compose({baseName:"switch",template:(u,l)=>mi.q`
    <template
        role="switch"
        aria-checked="${n=>n.checked}"
        aria-disabled="${n=>n.disabled}"
        aria-readonly="${n=>n.readOnly}"
        tabindex="${n=>n.disabled?null:0}"
        @keypress="${(n,o)=>n.keypressHandler(o.event)}"
        @click="${(n,o)=>n.clickHandler(o.event)}"
        class="${n=>n.checked?"checked":""}"
    >
        <label
            part="label"
            class="${n=>n.defaultSlottedNodes&&n.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${(0,Ro.e)("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <slot name="switch">${l.switch||""}</slot>
        </div>
        <span class="status-message" part="status-message">
            <span class="checked-message" part="checked-message">
                <slot name="checked-message"></slot>
            </span>
            <span class="unchecked-message" part="unchecked-message">
                <slot name="unchecked-message"></slot>
            </span>
        </span>
    </template>
`,styles:(u,l)=>_i.A`
    :host([hidden]) {
      display: none;
    }

    ${(0,Oo.V)("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${Et.OCo};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${Et.qB4};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${dc.Z};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${jr.D} / 2) + ${Et.vR1}) * 2px);
      height: calc(((${jr.D} / 2) + ${Et.vR1}) * 1px);
      background: ${Et.ymW};
      border-radius: calc(${jr.D} * 1px);
      border: calc(${Et.XAH} * 1px) solid ${Et.nF5};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${Et.IpM};
      border-color: ${Et.vA6};
    }

    :host(:not(.disabled):active) .switch {
      background: ${Et.MPS};
      border-color: ${Et.p4W};
    }

    :host(:${vr.N}) .switch {
      ${fl.v}
      background: ${Et.wsB};
    }

    :host(.checked) .switch {
      background: ${Et.IRh};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${Et.OS0};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${Et.amQ};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${Et.lHw};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${Et.lHw};
      cursor: pointer;
      ${pa.Ah}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${Et.lHw};
      ${pa.Ah}
      margin-inline-end: calc(${Et.vR1} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${Et.vR1} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${Et.IRh};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${Et.l_5};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${Et.OS0};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${Et.XKp};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${Et.amQ};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${Et.J_F};
    }

    .unchecked-message {
      display: block;
    }

    .checked-message {
      display: none;
    }

    :host(.checked) .unchecked-message {
      display: none;
    }

    :host(.checked) .checked-message {
      display: block;
    }
  `.withBehaviors(new hc(_i.A`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,_i.A`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),(0,Vs.mr)(_i.A`
        :host(:not(.disabled)) .switch slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${En.A.FieldText};
        }
        .switch {
          background: ${En.A.Field};
          border-color: ${En.A.FieldText};
        }
        :host(.checked) .switch {
          background: ${En.A.Highlight};
          border-color: ${En.A.Highlight};
        }
        :host(:not(.disabled):hover) .switch ,
        :host(:not(.disabled):active) .switch,
        :host(.checked:not(.disabled):hover) .switch {
          background: ${En.A.HighlightText};
          border-color: ${En.A.Highlight};
        }
        :host(.checked:not(.disabled)) .switch slot[name="switch"] {
          fill: ${En.A.HighlightText};
        }
        :host(.checked:not(.disabled):hover) .switch slot[name='switch'] {
          fill: ${En.A.Highlight};
        }
        :host(:${vr.N}) .switch {
          forced-color-adjust: none;
          background: ${En.A.Field}; 
          border-color: ${En.A.Highlight};
          outline-color: ${En.A.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${En.A.GrayText};
        }
        :host(.disabled) .switch {
          background: ${En.A.Field};
          border-color: ${En.A.GrayText};
        }
        .status-message,
        .label {
          color: ${En.A.FieldText};
        }
      `)),switch:'\n    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n      <rect x="2" y="2" width="12" height="12" rx="6"/>\n    </svg>\n  '});var fu=d(4150),oo=d(3595);const sd="#717171",vg=Cl.G.create("secondary-text-color").withDefault(sd),r0="#1a1a1a",yg=Cl.G.create("secondary-text-hover-color").withDefault(r0),pu={label:"Color mode:",on:"Dark",off:"Light"};var Zh=function(u,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(u,l)};let ad=(()=>{class u extends Qd.S{constructor(){super(),this.onSwitchChanged=o=>{this.darkModeActive=o.target.checked};const n=window.matchMedia("(prefers-color-scheme:dark)").matches;this.darkModeActive=n,this.applyTheme(this.darkModeActive)}get strings(){return pu}updated(n){n.has("darkModeActive")&&this.applyTheme(this.darkModeActive)}render(){return Lt.qy`
      <fluent-switch checked=${this.darkModeActive} @change=${this.onSwitchChanged}>
        <span slot="checked-message">${pu.on}</span>
        <span slot="unchecked-message">${pu.off}</span>
        <label for="direction-switch">${pu.label}</label>
      </fluent-switch>
`}applyTheme(n){const o=n?"dark":"light";((u,l=document.body)=>{const n=(u=>{switch(u){case"contrast":return{accentBaseColor:"#7f85f5",neutralBaseColor:"#adadad",baseLayerLuminance:fu.y.DarkMode};case"default":return{accentBaseColor:"#5b5fc7",neutralBaseColor:"#616161",baseLayerLuminance:fu.y.LightMode};case"dark":return{accentBaseColor:"#479ef5",neutralBaseColor:"#adadad",baseLayerLuminance:fu.y.DarkMode,designTokenOverrides:l=>{Et.IRh.setValueFor(l,io.q.from((0,oo.Hs)("#115ea3"))),Et.OS0.setValueFor(l,io.q.from((0,oo.Hs)("#0f6cbd"))),Et.amQ.setValueFor(l,io.q.from((0,oo.Hs)("#0c3b5e"))),Et.KJd.setValueFor(l,io.q.from((0,oo.Hs)("#0f548c"))),Et.W_m.setValueFor(l,io.q.from((0,oo.Hs)("#479EF5"))),Et.YLI.setValueFor(l,io.q.from((0,oo.Hs)("#62abf5"))),Et.QL0.setValueFor(l,io.q.from((0,oo.Hs)("#2886de"))),Et.iLG.setValueFor(l,io.q.from((0,oo.Hs)("#479ef5"))),Et.enQ.setValueFor(l,io.q.from((0,oo.Hs)("#115ea3"))),Et.eNp.setValueFor(l,io.q.from((0,oo.Hs)("#0f6cbd"))),Et.uB0.setValueFor(l,io.q.from((0,oo.Hs)("#0c3b5e"))),Et.cDQ.setValueFor(l,io.q.from((0,oo.Hs)("#0f548c"))),Et.J_F.setValueFor(l,io.q.from((0,oo.Hs)("#ffffff"))),Et.l_5.setValueFor(l,io.q.from((0,oo.Hs)("#ffffff"))),Et.XKp.setValueFor(l,io.q.from((0,oo.Hs)("#ffffff"))),Et.BgV.setValueFor(l,io.q.from((0,oo.Hs)("#ffffff"))),vg.setValueFor(l,"#8e8e8e"),yg.setValueFor(l,"#ffffff")}};default:return{accentBaseColor:"#0f6cbd",neutralBaseColor:"#616161",baseLayerLuminance:fu.y.LightMode,designTokenOverrides:l=>{vg.setValueFor(l,sd),yg.setValueFor(l,r0)}}}})(u);((u,l=document.body)=>{var n;Et.fdT.setValueFor(l,io.q.from((0,oo.Hs)(u.accentBaseColor))),Et.eQf.setValueFor(l,io.q.from((0,oo.Hs)(u.neutralBaseColor))),Et.li_.setValueFor(l,u.baseLayerLuminance),null===(n=u.designTokenOverrides)||void 0===n||n.call(u,l)})(n,l)})(o),document.body.classList.remove("mgt-dark-mode","mgt-light-mode"),document.body.classList.add(`mgt-${o}-mode`),this.fireCustomEvent("darkmodechanged",this.darkModeActive,!0,!1,!0)}}return function(u,l,n,o){var k,p=arguments.length,y=p<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(u,l,n,o);else for(var z=u.length-1;z>=0;z--)(k=u[z])&&(y=(p<3?k(y):p>3?k(l,n,y):k(l,n))||y);p>3&&y&&Object.defineProperty(l,n,y)}([(0,Mt.MZ)({attribute:"mode",reflect:!0,type:String,converter:{fromAttribute:l=>"dark"===l,toAttribute:l=>l?"dark":"light"}}),Zh("design:type",Boolean)],u.prototype,"darkModeActive",void 0),u})();class ld extends Qr.g{}class cd extends((0,zc.rf)(ld)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Yh=(()=>{class u extends cd{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&Er.dv.queueUpdate(()=>{this.focus()})}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}}return(0,Dt.Cg)([(0,an.CF)({attribute:"readonly",mode:"boolean"})],u.prototype,"readOnly",void 0),(0,Dt.Cg)([(0,an.CF)({mode:"boolean"})],u.prototype,"autofocus",void 0),(0,Dt.Cg)([an.CF],u.prototype,"placeholder",void 0),(0,Dt.Cg)([an.CF],u.prototype,"list",void 0),(0,Dt.Cg)([(0,an.CF)({converter:an.R$})],u.prototype,"maxlength",void 0),(0,Dt.Cg)([(0,an.CF)({converter:an.R$})],u.prototype,"minlength",void 0),(0,Dt.Cg)([an.CF],u.prototype,"pattern",void 0),(0,Dt.Cg)([(0,an.CF)({converter:an.R$})],u.prototype,"size",void 0),(0,Dt.Cg)([(0,an.CF)({mode:"boolean"})],u.prototype,"spellcheck",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"defaultSlottedNodes",void 0),u})();class _g{}(0,gi.X)(_g,no.z),(0,gi.X)(Yh,Hi.qw,_g);var a0=d(7412),Jh=d(3043);const dd=".root",eC=Cl.G.create("clear-button-hover").withDefault(u=>{const l=Et.EE_.getValueFor(u),n=Et.VYG.getValueFor(u);return l.evaluate(u,n.evaluate(u).focus).hover}),tC=Cl.G.create("clear-button-active").withDefault(u=>{const l=Et.EE_.getValueFor(u),n=Et.VYG.getValueFor(u);return l.evaluate(u,n.evaluate(u).focus).active}),iC=(()=>{class u extends Yh{constructor(){super(...arguments),this.appearance="outline"}}return(0,hh.Cg)([an.CF],u.prototype,"appearance",void 0),u})().compose({baseName:"search",baseClass:Yh,template:(u,l)=>mi.q`
  <template
    class="
            ${n=>n.readOnly?"readonly":""}
        "
  >
    <label
      part="label"
      for="control"
      class="${n=>n.defaultSlottedNodes&&n.defaultSlottedNodes.length?"label":"label label__hidden"}"
    >
      <slot ${(0,Ro.e)({property:"defaultSlottedNodes",filter:a0.g})}></slot>
    </label>
    <div class="root" part="root" ${(0,ro.K)("root")}>
      ${(0,Hi.LT)(u,l)}
      <div class="input-wrapper" part="input-wrapper">
        <input
          class="control"
          part="control"
          id="control"
          @input="${n=>n.handleTextInput()}"
          @change="${n=>n.handleChange()}"
          ?autofocus="${n=>n.autofocus}"
          ?disabled="${n=>n.disabled}"
          list="${n=>n.list}"
          maxlength="${n=>n.maxlength}"
          minlength="${n=>n.minlength}"
          pattern="${n=>n.pattern}"
          placeholder="${n=>n.placeholder}"
          ?readonly="${n=>n.readOnly}"
          ?required="${n=>n.required}"
          size="${n=>n.size}"
          ?spellcheck="${n=>n.spellcheck}"
          :value="${n=>n.value}"
          type="search"
          aria-atomic="${n=>n.ariaAtomic}"
          aria-busy="${n=>n.ariaBusy}"
          aria-controls="${n=>n.ariaControls}"
          aria-current="${n=>n.ariaCurrent}"
          aria-describedby="${n=>n.ariaDescribedby}"
          aria-details="${n=>n.ariaDetails}"
          aria-disabled="${n=>n.ariaDisabled}"
          aria-errormessage="${n=>n.ariaErrormessage}"
          aria-flowto="${n=>n.ariaFlowto}"
          aria-haspopup="${n=>n.ariaHaspopup}"
          aria-hidden="${n=>n.ariaHidden}"
          aria-invalid="${n=>n.ariaInvalid}"
          aria-keyshortcuts="${n=>n.ariaKeyshortcuts}"
          aria-label="${n=>n.ariaLabel}"
          aria-labelledby="${n=>n.ariaLabelledby}"
          aria-live="${n=>n.ariaLive}"
          aria-owns="${n=>n.ariaOwns}"
          aria-relevant="${n=>n.ariaRelevant}"
          aria-roledescription="${n=>n.ariaRoledescription}"
          ${(0,ro.K)("control")}
        />
        <slot name="clear-button">
          <button
            class="clear-button ${n=>n.value?"":"clear-button__hidden"}"
            part="clear-button"
            tabindex="-1"
            @click=${n=>n.handleClearInput()}
          >
            <slot name="clear-glyph">
              <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2.09 2.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L6 5.29l3.15-3.14a.5.5 0 1 1 .7.7L6.71 6l3.14 3.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L6 6.71 2.85 9.85a.5.5 0 0 1-.7-.7L5.29 6 2.15 2.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"
                />
              </svg>
            </slot>
          </button>
        </slot>
      </div>
      ${(0,Hi.aO)(u,l)}
    </div>
  </template>
`,styles:(u,l)=>_i.A`
    ${(0,Oo.V)("inline-block")}

    ${(0,ga.aB)(u,l,dd)}

    ${(0,ga.y$)(u,l,dd)}

    .root {
      display: flex;
      flex-direction: row;
    }
    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${Et.vR1} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }
    .clear-button {
      display: inline-flex;
      align-items: center;
      margin: 1px;
      height: calc(100% - 2px);
      opacity: 0;
      background: transparent;
      color: ${Et.lHw};
      fill: currentcolor;
      border: none;
      border-radius: calc(${Et.PbG} * 1px);
      min-width: calc(${jr.D} * 1px);
      ${pa.Ah}
      outline: none;
      padding: 0 calc((10 + (${Et.vR1} * 2 * ${Et.Brd})) * 1px);
    }
    .clear-button:hover {
      background: ${eC};
    }
    .clear-button:active {
      background: ${tC};
    }
    :host(:hover:not([disabled], [readOnly])) .clear-button,
    :host(:active:not([disabled], [readOnly])) .clear-button,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button {
        opacity: 1;
    }
    :host(:hover:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:active:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button__hidden {
        opacity: 0;
    }
    .control::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
    .input-wrapper {
      display: flex;
      position: relative;
      width: 100%;
    }
    .start,
    .end {
      display: flex;
      margin: 1px;
      align-items: center;
    }
    .start {
      display: flex;
      margin-inline-start: 11px;
    }
    ::slotted([slot="end"]) {
      height: 100%
    }
    .clear-button__hidden {
      opacity: 0;
    }
    .end {
        margin-inline-end: 11px;
    }
    ::slotted(${u.tagFor(Jh.$)}) {
      margin-inline-end: 1px;
    }
  `.withBehaviors((0,uc.f)("outline",(0,ga.Tv)(u,l,dd)),(0,uc.f)("filled",(0,ga.dM)(u,l,dd)),(0,Vs.mr)((0,ga.lb)(u,l,dd))),start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}}),Eg={placeholder:"Search",title:"Search"},c0=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host fluent-search{width:100%}
`];var ef=function(u,l,n,o){var k,p=arguments.length,y=p<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(u,l,n,o);else for(var z=u.length-1;z>=0;z--)(k=u[z])&&(y=(p<3?k(y):p>3?k(l,n,y):k(l,n))||y);return p>3&&y&&Object.defineProperty(l,n,y),y},mu=function(u,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(u,l)};let ud=(()=>{class u extends Qd.S{static get styles(){return c0}get strings(){return Eg}get searchTerm(){return this._searchTerm}set searchTerm(n){this._searchTerm=n,this.fireSearchTermChanged()}constructor(){super(),this._searchTerm="",this.renderContent=()=>{var n;return Lt.qy`
      <fluent-search
        autocomplete="off"
        class="search-term-input"
        appearance="outline"
        value=${null!==(n=this.searchTerm)&&void 0!==n?n:""}
        placeholder=${this.placeholder?this.placeholder:Eg.placeholder}
        title=${this.title?this.title:Eg.title}
        @input=${this.onInputChanged}
        @change=${this.onInputChanged}
      >
      </fluent-search>`},this.onInputChanged=n=>{this.searchTerm=n.target.value},this.debounceDelay=300}fireSearchTermChanged(){this.debouncedSearchTermChanged||(this.debouncedSearchTermChanged=(0,er.sg)(()=>{this.fireCustomEvent("searchTermChanged",this.searchTerm)},this.debounceDelay)),this.debouncedSearchTermChanged()}}return ef([(0,Mt.MZ)({attribute:"placeholder",type:String}),mu("design:type",String)],u.prototype,"placeholder",void 0),ef([(0,Mt.MZ)({attribute:"search-term",type:String}),mu("design:type",Object),mu("design:paramtypes",[Object])],u.prototype,"searchTerm",null),ef([(0,Mt.MZ)({attribute:"debounce-delay",type:Number,reflect:!0}),mu("design:type",Number)],u.prototype,"debounceDelay",void 0),u})();const qs={modified:"modified on",back:"Back",next:"Next",pages:"pages",page:"Page"},vu=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}.search-results{scroll-margin:100px}.search-result-grid{font-size:14px;margin:16px 4px;display:grid;grid-template-columns:32px 2fr 0fr;gap:.5rem}.search-result{font-size:14px;margin:16px 4px}.file-icon{--file-type-icon-height:32px}.search-result-info{margin:4px 0;display:inline-flex}.search-result-date{padding-top:3px}.search-result-date__shimmer{border-radius:4px;margin-top:2%;margin-left:5px;height:10px;width:200px}.search-result-summary{margin:4px 0;color:var(--body-subtle-text-color)}.search-result-thumbnail__shimmer{width:126px;height:72px}.search-result-thumbnail img{height:72px;max-width:126px;width:126px;object-fit:cover}.search-result-url{font-size:14px;font-weight:600;margin:4px 0}.search-result-url a{color:var(--color,var(--neutral-foreground-rest));text-decoration:none}.search-result-url a:hover{text-decoration:underline}.search-result-content__shimmer{border-radius:4px;margin-top:10px;height:10px}.search-result-name{font-size:16px;font-weight:600;margin:4px 0}.search-result-name__shimmer{border-radius:4px;margin-top:10px;height:10px;width:20%}.search-result-name a{color:var(--color,var(--neutral-foreground-rest));text-decoration:none}.search-result-name a:hover{text-decoration:underline}.search-result-author__shimmer{width:24px;height:24px}.search-result-icon{width:30px;height:30px}.search-result-icon__shimmer{width:32px;height:32px}.search-result-icon img{width:100%}.search-result-icon svg,.search-result-icon svg>path{width:100%;height:100%;fill:var(--neutral-foreground-rest);fill-rule:nonzero!important;clip-rule:nonzero!important}.search-results-page-active{border-bottom-style:solid;border-bottom-color:var(--accent-base-color)}.search-results-page svg,.search-results-page svg>path{height:12px;fill:var(--neutral-foreground-rest);fill-rule:nonzero!important;clip-rule:nonzero!important}.search-result-answer{box-shadow:var(--answer-box-shadow,0 3.2px 7.2px rgba(0,0,0,.132),0 .6px 1.8px rgba(0,0,0,.108));border-radius:var(--answer-border-radius,4px);border:var(--answer-border,none);padding:var(--answer-padding,10px)}.search-results-pages{margin:16px 4px}
`];let Cc=(()=>{class u extends Qr.g{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=ml.O.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=n=>{this.classList.toggle("top","start"===this.region.verticalPosition),this.classList.toggle("bottom","end"===this.region.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.region.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.region.verticalPosition),this.classList.toggle("center-vertical","center"===this.region.verticalPosition),this.classList.toggle("left","start"===this.region.horizontalPosition),this.classList.toggle("right","end"===this.region.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.region.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.region.horizontalPosition),this.classList.toggle("center-horizontal","center"===this.region.horizontalPosition)},this.handleRegionMouseOver=n=>{this.isRegionHovered=!0},this.handleRegionMouseOut=n=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=n=>{this.tooltipVisible?this.isAnchorHoveredFocused=!0:this.startShowDelayTimer()},this.handleAnchorMouseOut=n=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=n=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=n=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout(()=>{this.updateTooltipVisibility()},60))},this.clearHideDelayTimer=()=>{null!==this.hideDelayTimer&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1)return void(null===this.showDelayTimer&&(this.showDelayTimer=window.setTimeout(()=>{this.startHover()},this.delay)));this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{null!==this.showDelayTimer&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const n=this.getRootNode();return n instanceof ShadowRoot?n.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=n=>{!n.defaultPrevented&&this.tooltipVisible&&n.key===Pn.F9&&(this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss"))},this.updateTooltipVisibility=()=>{if(!1===this.visible)this.hideTooltip();else{if(!0===this.visible)return void this.showTooltip();if(this.isAnchorHoveredFocused||this.isRegionHovered)return void this.showTooltip();this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=Wc(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),Er.dv.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),null!=this.region&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(n){if(this.$fastController.isConnected){if(null!=n&&(n.removeEventListener("mouseover",this.handleAnchorMouseOver),n.removeEventListener("mouseout",this.handleAnchorMouseOut),n.removeEventListener("focusin",this.handleAnchorFocusIn),n.removeEventListener("focusout",this.handleAnchorFocusOut)),null!=this.anchorElement){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const o=this.anchorElement.id;null!==this.anchorElement.parentElement&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(p=>{p.id===o&&this.startShowDelayTimer()})}null!=this.region&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){null!=this.region&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case"top":case"bottom":this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case"right":case"left":case"start":case"end":this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case"top-left":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case"top-right":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case"bottom-left":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case"bottom-right":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case"top-start":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case"top-end":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case"bottom-start":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case"bottom-end":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center"}}}return(0,Dt.Cg)([(0,an.CF)({mode:"boolean"})],u.prototype,"visible",void 0),(0,Dt.Cg)([an.CF],u.prototype,"anchor",void 0),(0,Dt.Cg)([an.CF],u.prototype,"delay",void 0),(0,Dt.Cg)([an.CF],u.prototype,"position",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"auto-update-mode"})],u.prototype,"autoUpdateMode",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"horizontal-viewport-lock"})],u.prototype,"horizontalViewportLock",void 0),(0,Dt.Cg)([(0,an.CF)({attribute:"vertical-viewport-lock"})],u.prototype,"verticalViewportLock",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"anchorElement",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"viewportElement",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"verticalPositioningMode",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"horizontalPositioningMode",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"horizontalInset",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"verticalInset",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"horizontalScaling",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"verticalScaling",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"verticalDefaultPosition",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"horizontalDefaultPosition",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"tooltipVisible",void 0),(0,Dt.Cg)([rn.sH],u.prototype,"currentDirection",void 0),u})();const Sg=class hd extends Cc{connectedCallback(){super.connectedCallback(),Et.pfK.setValueFor(this,Et.Tkp)}}.compose({baseName:"tooltip",baseClass:Cc,template:(u,l)=>mi.q`
        ${(0,is.z)(n=>n.tooltipVisible,mi.q`
            <${u.tagFor(Xn)}
                fixed-placement="true"
                auto-update-mode="${n=>n.autoUpdateMode}"
                vertical-positioning-mode="${n=>n.verticalPositioningMode}"
                vertical-default-position="${n=>n.verticalDefaultPosition}"
                vertical-inset="${n=>n.verticalInset}"
                vertical-scaling="${n=>n.verticalScaling}"
                horizontal-positioning-mode="${n=>n.horizontalPositioningMode}"
                horizontal-default-position="${n=>n.horizontalDefaultPosition}"
                horizontal-scaling="${n=>n.horizontalScaling}"
                horizontal-inset="${n=>n.horizontalInset}"
                vertical-viewport-lock="${n=>n.horizontalViewportLock}"
                horizontal-viewport-lock="${n=>n.verticalViewportLock}"
                dir="${n=>n.currentDirection}"
                ${(0,ro.K)("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${u.tagFor(Xn)}>
        `)}
    `,styles:(u,l)=>_i.A`
    :host {
      position: relative;
      contain: layout;
      overflow: visible;
      height: 0;
      width: 0;
      z-index: 10000;
    }

    .tooltip {
      box-sizing: border-box;
      border-radius: calc(${Et.PbG} * 1px);
      border: calc(${Et.XAH} * 1px) solid ${Et.ppm};
      background: ${Et.pfK};
      color: ${Et.lHw};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${pa.Ah}
      white-space: nowrap;
      box-shadow: ${rp.tf};
    }

    ${u.tagFor(Xn)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${u.tagFor(Xn)}.right,
    ${u.tagFor(Xn)}.left {
      flex-direction: column;
    }

    ${u.tagFor(Xn)}.top .tooltip::after,
    ${u.tagFor(Xn)}.bottom .tooltip::after,
    ${u.tagFor(Xn)}.left .tooltip::after,
    ${u.tagFor(Xn)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${Et.pfK};
      border-top: calc(${Et.XAH} * 1px) solid ${Et.ppm};
      border-left: calc(${Et.XAH} * 1px) solid ${Et.ppm};
      position: absolute;
    }

    ${u.tagFor(Xn)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${u.tagFor(Xn)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${u.tagFor(Xn)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${u.tagFor(Xn)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${u.tagFor(Xn)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${u.tagFor(Xn)}.left .tooltip {
      margin-right: 12px;
    }

    ${u.tagFor(Xn)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${u.tagFor(Xn)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors((0,Vs.mr)(_i.A`
        :host([disabled]) {
          opacity: 1;
        }
        ${u.tagFor(Xn)}.top .tooltip::after,
        ${u.tagFor(Xn)}.bottom .tooltip::after,
        ${u.tagFor(Xn)}.left .tooltip::after,
        ${u.tagFor(Xn)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }
      `))}),h0=pc.compose({baseName:"divider",template:(u,l)=>mi.q`
    <template role="${n=>n.role}" aria-orientation="${n=>n.orientation}"></template>
`,styles:(u,l)=>_i.A`
    ${(0,Oo.V)("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${Et.XAH} * 1px) solid ${Et.hb6};
    }

    :host([orientation="vertical"]) {
      border: none;
      height: 100%;
      margin: 0 calc(${Et.vR1} * 1px);
      border-left: calc(${Et.XAH} * 1px) solid ${Et.hb6};
  }
  `});var Qo=function(u,l,n,o){var k,p=arguments.length,y=p<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(u,l,n,o);else for(var z=u.length-1;z>=0;z--)(k=u[z])&&(y=(p<3?k(y):p>3?k(l,n,y):k(l,n))||y);return p>3&&y&&Object.defineProperty(l,n,y),y},wo=function(u,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(u,l)};let g0=(()=>{class u extends Bs.N{static get styles(){return vu}get strings(){return qs}get queryString(){return this._queryString}set queryString(n){this._queryString!==n&&(this._queryString=n,this.currentPage=1)}get from(){return(this.currentPage-1)*this.size}get size(){return this._size}set size(n){this._size=n>this.maxPageSize?this.maxPageSize:n}get searchEndpoint(){return"/search/query"}get maxPageSize(){return 1e3}constructor(){super(),this._size=10,this.entityTypes=["driveItem","listItem","site"],this.scopes=[],this.contentSources=[],this.version="v1.0",this.pagingMax=7,this.enableTopResults=!1,this.cacheEnabled=!1,this.cacheInvalidationPeriod=3e4,this.isRefreshing=!1,this.defaultFields=["webUrl","lastModifiedBy","lastModifiedDateTime","summary","displayName","name"],this.currentPage=1,this.renderContent=()=>{var n,o,p,y,k,z,fe,xe;let $e=null,Ze=null,zt=null;return this.hasTemplate("header")&&(Ze=this.renderTemplate("header",this.response)),zt=this.renderFooter(null===(o=null===(n=this.response)||void 0===n?void 0:n.value[0])||void 0===o?void 0:o.hitsContainers[0]),$e=this.response&&this.hasTemplate("default")?this.renderTemplate("default",this.response)||Lt.qy``:null!==(y=null===(p=this.response)||void 0===p?void 0:p.value[0])&&void 0!==y&&y.hitsContainers[0]?Lt.qy`${null===(xe=null===(fe=null===(z=null===(k=this.response)||void 0===k?void 0:k.value[0])||void 0===z?void 0:z.hitsContainers[0])||void 0===fe?void 0:fe.hits)||void 0===xe?void 0:xe.map(Jt=>this.renderResult(Jt))}`:this.hasTemplate("no-data")?this.renderTemplate("no-data",null):Lt.qy``,Lt.qy`
      ${Ze}
      <div class="search-results">
        ${$e}
      </div>
      ${zt}`},this.renderLoading=()=>this.renderTemplate("loading",null)||Lt.qy`
        ${[...Array(this.size)].map(()=>Lt.qy`
            <div class="search-result">
              <div class="search-result-grid">
                <div class="search-result-icon">
                  <fluent-skeleton class="search-result-icon__shimmer" shape="rect" shimmer></fluent-skeleton>
                </div>
                <div class="searc-result-content">
                  <div class="search-result-name">
                    <fluent-skeleton class="search-result-name__shimmer" shape="rect" shimmer></fluent-skeleton>
                  </div>
                  <div class="search-result-info">
                    <div class="search-result-author">
                      <fluent-skeleton class="search-result-author__shimmer" shape="circle" shimmer></fluent-skeleton>
                    </div>
                    <div class="search-result-date">
                      <fluent-skeleton class="search-result-date__shimmer" shape="rect" shimmer></fluent-skeleton>
                    </div>
                  </div>
                  <fluent-skeleton class="search-result-content__shimmer" shape="rect" shimmer></fluent-skeleton>
                  <fluent-skeleton class="search-result-content__shimmer" shape="rect" shimmer></fluent-skeleton>
                </div>
                ${this.fetchThumbnail&&Lt.qy`
                    <div class="search-result-thumbnail">
                      <fluent-skeleton class="search-result-thumbnail__shimmer" shape="rect" shimmer></fluent-skeleton>
                    </div>
                  `}
              </div>
              <fluent-divider></fluent-divider>
            </div>
          `)}
       `,this.onFirstPageClick=()=>{this.currentPage=1,this.scrollToFirstResult()},this.onPageBackClick=()=>{this.currentPage--,this.scrollToFirstResult()},this.onPageNextClick=()=>{this.currentPage++,this.scrollToFirstResult()}}args(){return[this.providerState,this.queryString,this.queryTemplate,this.entityTypes,this.contentSources,this.scopes,this.version,this.size,this.fetchThumbnail,this.fields,this.enableTopResults,this.currentPage]}refresh(n=!1){this.isRefreshing=!0,n&&this.clearState(),this._task.run()}clearState(){this.response=null}loadState(){var n,o,p,y,k,z;return function(u,l,n,o){return new(n||(n=Promise))(function(y,k){function z($e){try{xe(o.next($e))}catch(Ze){k(Ze)}}function fe($e){try{xe(o.throw($e))}catch(Ze){k(Ze)}}function xe($e){$e.done?y($e.value):function p(y){return y instanceof n?y:new n(function(k){k(y)})}($e.value).then(z,fe)}xe((o=o.apply(u,l||[])).next())})}(this,void 0,void 0,function*(){const fe=xi.b.globalProvider;if(this.error=null,fe&&fe.state===Di.HJ.SignedIn){if(this.queryString){try{const xe=this.getRequestOptions();let $e;const Ze=JSON.stringify({endpoint:`${this.version}${this.searchEndpoint}`,requestOptions:xe});let zt=null;if(this.shouldRetrieveCache()){$e=qr._.getCache(Mo.j.search,Mo.j.search.stores.responses);const Jt=(0,er.jE)()?yield $e.getValue(Ze):null;Jt&&(0,er.jD)(this.cacheInvalidationPeriod)>Date.now()-Jt.timeCached&&(zt=JSON.parse(Jt.response))}if(!zt){const Jt=fe.graph.forComponent(this);let ln=Jt.api(this.searchEndpoint).version(this.version);if(!(null===(n=this.scopes)||void 0===n)&&n.length&&(ln=ln.middlewareOptions((0,Rr.F)(this.scopes))),zt=yield ln.post({requests:[xe]}),this.fetchThumbnail){const An=Jt.createBatch(),di=ka.fromGraph(Jt).createBatch(),nr=null!==(o=zt.value)&&void 0!==o&&o.length&&null!==(p=zt.value[0].hitsContainers)&&void 0!==p&&p.length&&null!==(k=null===(y=zt.value[0].hitsContainers[0])||void 0===y?void 0:y.hits)&&void 0!==k?k:[];for(const ur of nr){const Ai=ur.resource;(Ai.size>0||null!==(z=Ai.webUrl)&&void 0!==z&&z.endsWith(".aspx"))&&("#microsoft.graph.driveItem"===Ai["@odata.type"]||"#microsoft.graph.listItem"===Ai["@odata.type"])&&("#microsoft.graph.listItem"===Ai["@odata.type"]?di.get(ur.hitId.toString(),`/sites/${Ai.parentReference.siteId}/pages/${Ai.id}`):An.get(ur.hitId.toString(),`/drives/${Ai.parentReference.driveId}/items/${Ai.id}/thumbnails/0/medium`))}const dr=ur=>{if(ur&&ur.size>0)for(const[Ai,Qs]of ur){const Xr=zt.value[0].hitsContainers[0].hits[Ai];Xr.resource.thumbnail="#microsoft.graph.listItem"===Xr.resource["@odata.type"]?{url:Qs.content.thumbnailWebUrl}:{url:Qs.content.url}}};try{dr(yield An.executeAll()),dr(yield di.executeAll())}catch{}}this.shouldUpdateCache()&&zt&&($e=qr._.getCache(Mo.j.search,Mo.j.search.stores.responses),yield $e.putValue(Ze,{response:JSON.stringify(zt)}))}(0,Ts.a)(this.response,zt)||(this.response=zt)}catch(xe){this.error=xe}this.response&&(this.error=null)}else this.response=null;this.isRefreshing=!1,this.fireCustomEvent("dataChange",{response:this.response,error:this.error})}})}renderResult(n){const o=this.getResourceType(n.resource);if(this.hasTemplate(`result-${o}`))return this.renderTemplate(`result-${o}`,n,n.hitId);switch(n.resource["@odata.type"]){case"#microsoft.graph.driveItem":return this.renderDriveItem(n);case"#microsoft.graph.site":return this.renderSite(n);case"#microsoft.graph.person":return this.renderPerson(n);case"#microsoft.graph.drive":case"#microsoft.graph.list":return this.renderList(n);case"#microsoft.graph.listItem":return this.renderListItem(n);case"#microsoft.graph.search.bookmark":return this.renderBookmark(n);case"#microsoft.graph.search.acronym":return this.renderAcronym(n);case"#microsoft.graph.search.qna":return this.renderQnA(n);default:return this.renderDefault(n)}}renderFooter(n){if(this.pagingRequired(n)){const o=this.getActivePages(n.total);return Lt.qy`
        <div class="search-results-pages">
          ${this.renderPreviousPage()}
          ${this.renderFirstPage(o)}
          ${this.renderAllPages(o)}
          ${this.renderNextPage()}
        </div>
      `}}pagingRequired(n){return n?.moreResultsAvailable||this.currentPage*this.size<n?.total}getActivePages(n){const p=[],y=(()=>{const k=this.currentPage-Math.floor(this.pagingMax/2)-1;return k>=Math.floor(this.pagingMax/2)?k:0})();if(y+1>this.pagingMax-this.currentPage||this.pagingMax===this.currentPage)for(let k=y+1;k<Math.ceil(n/this.size)&&k<this.pagingMax+(this.currentPage-1)&&p.length<this.pagingMax-2;++k)p.push(k+1);else for(let k=y;k<this.pagingMax;++k)p.push(k+1);return p}renderAllPages(n){return Lt.qy`
      ${n.map(o=>Lt.qy`
            <fluent-button
              title="${qs.page} ${o}"
              appearance="stealth"
              class="${o===this.currentPage?"search-results-page-active":"search-results-page"}"
              @click="${()=>this.onPageClick(o)}">
                ${o}
            </fluent-button>`)}`}renderFirstPage(n){return Lt.qy`
      ${n.some(o=>1===o)?Lt.s6:Lt.qy`
              <fluent-button
                 title="${qs.page} 1"
                 appearance="stealth"
                 class="search-results-page"
                 @click="${this.onFirstPageClick}">
                 1
               </fluent-button>`?Lt.qy`
              <fluent-button
                id="page-back-dot"
                appearance="stealth"
                class="search-results-page"
                title="${this.getDotButtonTitle()}"
                @click="${()=>this.onPageClick(this.currentPage-Math.ceil(this.pagingMax/2))}"
              >
                ...
              </fluent-button>`:Lt.s6}`}getDotButtonTitle(){return`${qs.back} ${Math.ceil(this.pagingMax/2)} ${qs.pages}`}renderPreviousPage(){return this.currentPage>1?Lt.qy`
          <fluent-button
            appearance="stealth"
            class="search-results-page"
            title="${qs.back}"
            @click="${this.onPageBackClick}">
              ${(0,Vn.r)(Vn.A.ChevronLeft)}
            </fluent-button>`:Lt.s6}renderNextPage(){return this.isLastPage()?Lt.s6:Lt.qy`
          <fluent-button
            appearance="stealth"
            class="search-results-page"
            title="${qs.next}"
            aria-label="${qs.next}"
            @click="${this.onPageNextClick}">
              ${(0,Vn.r)(Vn.A.ChevronRight)}
            </fluent-button>`}onPageClick(n){this.currentPage=n,this.scrollToFirstResult()}isLastPage(){return this.currentPage===Math.ceil(this.response.value[0].hitsContainers[0].total/this.size)}scrollToFirstResult(){this.renderRoot.querySelector(".search-results").scrollIntoView({block:"start",behavior:"smooth"})}getResourceType(n){return n["@odata.type"].split(".").pop()}renderDriveItem(n){var o,p;const y=n.resource;return or.Q`
      <div class="search-result-grid">
        <div class="search-result-icon">
          <mgt-file
            .fileDetails="${n.resource}"
            view="image"
            class="file-icon">
          </mgt-file>
        </div>
        <div class="search-result-content">
          <div class="search-result-name">
            <a href="${y.webUrl}?Web=1" target="_blank">${(0,er.wJ)(y.name)}</a>
          </div>
          <div class="search-result-info">
            <div class="search-result-author">
              <mgt-person
                person-query=${y.lastModifiedBy.user.email}
                view="oneline"
                person-card="hover"
                show-presence="true">
              </mgt-person>
            </div>
            <div class="search-result-date">
              &nbsp; ${qs.modified} ${(0,er.h3)(new Date(y.lastModifiedDateTime))}
            </div>
          </div>
          <div class="search-result-summary" .innerHTML="${(0,er.ez)(n.summary)}"></div>
        </div>
        ${(null===(o=y.thumbnail)||void 0===o?void 0:o.url)&&Lt.qy`
          <div class="search-result-thumbnail">
            <a href="${y.webUrl}" target="_blank"><img alt="${y.name}" src="${null===(p=y.thumbnail)||void 0===p?void 0:p.url}" /></a>
          </div>`}

      </div>
      <fluent-divider></fluent-divider>
    `}renderSite(n){const o=n.resource;return Lt.qy`
      <div class="search-result-grid">
        <div class="search-result-icon">
          ${this.getResourceIcon(o)}
        </div>
        <div class="searc-result-content">
          <div class="search-result-name">
            <a href="${o.webUrl}" target="_blank">${o.displayName}</a>
          </div>
          <div class="search-result-info">
            <div class="search-result-url">
              <a href="${o.webUrl}" target="_blank">${o.webUrl}</a>
            </div>
          </div>
          <div class="search-result-summary" .innerHTML="${(0,er.ez)(n.summary)}"></div>
        </div>
      </div>
      <fluent-divider></fluent-divider>
    `}renderList(n){const o=n.resource;return or.Q`
      <div class="search-result-grid">
        <div class="search-result-icon">
          <mgt-file
            .fileDetails="${n.resource}"
            view="image">
          </mgt-file>
        </div>
        <div class="search-result-content">
          <div class="search-result-name">
            <a href="${o.webUrl}?Web=1" target="_blank">
              ${(0,er.wJ)(o.name||(0,er.x8)(o.webUrl))}
            </a>
          </div>
          <div class="search-result-summary" .innerHTML="${(0,er.ez)(n.summary)}"></div>
        </div>
      </div>
      <fluent-divider></fluent-divider>
    `}renderListItem(n){var o,p;const y=n.resource;return or.Q`
      <div class="search-result-grid">
        <div class="search-result-icon">
          ${y.webUrl.endsWith(".aspx")?(0,Vn.r)(Vn.A.News):(0,Vn.r)(Vn.A.FileOuter)}
        </div>
        <div class="search-result-content">
          <div class="search-result-name">
            <a href="${y.webUrl}?Web=1" target="_blank">
              ${(0,er.wJ)(y.name||(0,er.x8)(y.webUrl))}
            </a>
          </div>
          <div class="search-result-info">
            <div class="search-result-author">
              <mgt-person
                person-query=${y.lastModifiedBy.user.email}
                view="oneline"
                person-card="hover"
                show-presence="true">
              </mgt-person>
            </div>
            <div class="search-result-date">
              &nbsp; ${qs.modified} ${(0,er.h3)(new Date(y.lastModifiedDateTime))}
            </div>
          </div>
          <div class="search-result-summary" .innerHTML="${(0,er.ez)(n.summary)}"></div>
        </div>
        ${(null===(o=y.thumbnail)||void 0===o?void 0:o.url)&&Lt.qy`
          <div class="search-result-thumbnail">
            <a href="${y.webUrl}" target="_blank"><img alt="${(0,er.wJ)(y.name||(0,er.x8)(y.webUrl))}" src="${(null===(p=y.thumbnail)||void 0===p?void 0:p.url)||Lt.s6}" /></a>
          </div>`}
      </div>
      <fluent-divider></fluent-divider>
    `}renderPerson(n){return or.Q`
      <div class="search-result">
        <mgt-person
          view="fourlines"
          person-query=${n.resource.userPrincipalName}
          person-card="hover"
          show-presence="true">
        </mgt-person>
      </div>
      <fluent-divider></fluent-divider>
    `}renderBookmark(n){return this.renderAnswer(n,Vn.A.DoubleBookmark)}renderAcronym(n){return this.renderAnswer(n,Vn.A.BookOpen)}renderQnA(n){return this.renderAnswer(n,Vn.A.BookQuestion)}renderAnswer(n,o){const p=n.resource;return Lt.qy`
      <div class="search-result-grid search-result-answer">
        <div class="search-result-icon">
          ${(0,Vn.r)(o)}
        </div>
        <div class="search-result-content">
          <div class="search-result-name">
            <a href="${this.getResourceUrl(p)}?Web=1" target="_blank">${p.displayName}</a>
          </div>
          <div class="search-result-summary">${p.description}</div>
        </div>
      </div>
      <fluent-divider></fluent-divider>
    `}renderDefault(n){const o=n.resource,p=this.getResourceUrl(o);return Lt.qy`
      <div class="search-result-grid">
        <div class="search-result-icon">
          ${this.getResourceIcon(o)}
        </div>
        <div class="search-result-content">
          <div class="search-result-name">
            ${p?Lt.qy`
                  <a href="${p}?Web=1" target="_blank">${this.getResourceName(o)}</a>
                `:Lt.qy`
                  ${this.getResourceName(o)}
                `}
          </div>
          <div class="search-result-summary" .innerHTML="${this.getResultSummary(n)}"></div>
        </div>
      </div>
      <fluent-divider></fluent-divider>
    `}getResourceUrl(n){return n.webUrl||n.webLink||null}getResourceName(n){return n.displayName||n.subject||(0,er.wJ)(n.name)}getResultSummary(n){var o;return(0,er.ez)(n.summary||(null===(o=n.resource)||void 0===o?void 0:o.description)||null)}getResourceIcon(n){switch(n["@odata.type"]){case"#microsoft.graph.site":return(0,Vn.r)(Vn.A.Globe);case"#microsoft.graph.message":return(0,Vn.r)(Vn.A.Email);case"#microsoft.graph.event":return(0,Vn.r)(Vn.A.Event);case"microsoft.graph.chatMessage":return(0,Vn.r)(Vn.A.SmallChat);default:return(0,Vn.r)(Vn.A.FileOuter)}}shouldRetrieveCache(){return(0,er.jE)()&&this.cacheEnabled&&!this.isRefreshing}shouldUpdateCache(){return(0,er.jE)()&&this.cacheEnabled}getRequestOptions(){const n={entityTypes:this.entityTypes,query:{queryString:this.queryString},from:this.from?this.from:void 0,size:this.size?this.size:void 0,fields:this.getFields(),enableTopResults:this.enableTopResults?this.enableTopResults:void 0};return this.entityTypes.includes("externalItem")&&(n.contentSources=this.contentSources),"beta"===this.version&&(n.query.queryTemplate=this.queryTemplate?this.queryTemplate:void 0),n}getFields(){if(this.fields)return this.defaultFields.concat(this.fields)}}return Qo([(0,Mt.MZ)({attribute:"query-string",type:String}),wo("design:type",String),wo("design:paramtypes",[String])],u.prototype,"queryString",null),Qo([(0,Mt.MZ)({attribute:"query-template",type:String}),wo("design:type",String)],u.prototype,"queryTemplate",void 0),Qo([(0,Mt.MZ)({attribute:"entity-types",converter:l=>l.split(",").map(n=>n.trim()),type:String}),wo("design:type",Array)],u.prototype,"entityTypes",void 0),Qo([(0,Mt.MZ)({attribute:"scopes",converter:(l,n)=>l?l.toLowerCase().split(","):null}),wo("design:type",Array)],u.prototype,"scopes",void 0),Qo([(0,Mt.MZ)({attribute:"content-sources",converter:(l,n)=>l?l.toLowerCase().split(","):null}),wo("design:type",Array)],u.prototype,"contentSources",void 0),Qo([(0,Mt.MZ)({attribute:"version",reflect:!0,type:String}),wo("design:type",Object)],u.prototype,"version",void 0),Qo([(0,Mt.MZ)({attribute:"size",reflect:!0,type:Number}),wo("design:type",Number),wo("design:paramtypes",[Object])],u.prototype,"size",null),Qo([(0,Mt.MZ)({attribute:"paging-max",reflect:!0,type:Number}),wo("design:type",Object)],u.prototype,"pagingMax",void 0),Qo([(0,Mt.MZ)({attribute:"fetch-thumbnail",type:Boolean}),wo("design:type",Boolean)],u.prototype,"fetchThumbnail",void 0),Qo([(0,Mt.MZ)({attribute:"fields",converter:l=>l.split(",").map(n=>n.trim()),type:String}),wo("design:type",Array)],u.prototype,"fields",void 0),Qo([(0,Mt.MZ)({attribute:"enable-top-results",reflect:!0,type:Boolean}),wo("design:type",Object)],u.prototype,"enableTopResults",void 0),Qo([(0,Mt.MZ)({attribute:"cache-enabled",reflect:!0,type:Boolean}),wo("design:type",Object)],u.prototype,"cacheEnabled",void 0),Qo([(0,Mt.MZ)({attribute:"cache-invalidation-period",reflect:!0,type:Number}),wo("design:type",Object)],u.prototype,"cacheInvalidationPeriod",void 0),Qo([(0,Mt.wk)(),wo("design:type",Object)],u.prototype,"response",void 0),Qo([(0,Mt.MZ)({attribute:!1}),wo("design:type",Object)],u.prototype,"currentPage",void 0),u})();const rf=()=>{(0,qa.sN)(),(0,Zu.registerMgtPersonCardComponent)(),(0,ts.E)(Ed.z1),Ju(),(0,jo.N)("agenda",Uf),nh(),(0,ts.E)(Fc,oh.m9,jl.zi,Ed.z1),(0,Oc.r)(),(0,qa.sN)(),(0,jo.N)("login",Uc),pl(),Ju(),(0,ts.E)(gh,fc,Od.oR,jl.zi,lp.c,cp._0),(0,ts.E)(pp,bl,jl.zi),(0,jo.N)("arrow-options",gv),(0,ts.E)(pp,bl,jl.zi),(0,jo.N)("dot-options",pv),(0,Oc.r)(),Ju(),pl(),(0,jo.N)("planner",vv),(0,ts.E)(Bp,mc,Ed.z1,Kb,Dv,Od.oR),(0,jc.i)(),(0,jo.N)("teams-channel-picker",Gp),(0,ts.E)(lp.c,kv,jl.zi),Bh(),(0,jo.N)("todo",Ya),(0,pg.R)(),(0,Jv.x)(),Bh(),(0,ts.E)(Xp,fc),(0,jc.i)(),nh(),(0,jo.N)("taxonomy-picker",rd),(0,ts.E)(n0),(0,jo.N)("theme-toggle",ad),(0,ts.E)(iC),(0,jo.N)("search-box",ud),(0,ts.E)(cp._0,jl.zi,Sg,h0),(0,pg.R)(),(0,qa.sN)(),(0,jo.N)("search-results",g0),(0,jc.i)()};let fd=(()=>{class u{constructor(n){this.authService=n}initializeMgt(){xi.b.globalProvider=new _s({publicClientApplication:this.authService.instance}),rf()}static#e=this.\u0275fac=function(o){return new(o||u)(c.KVO(T.dl))};static#t=this.\u0275prov=c.jDH({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})();function m0(u,l){1&u&&c.nrm(0,"app-sidebar")}let yu=(()=>{class u{constructor(n,o,p,y,k){this.authService=n,this.msalBroadcastService=o,this.mgtService=p,this.accountService=y,this.userService=k,this.isAuthenticated=!1,this._destroying$=new Bo.B}ngOnInit(){this.authService.handleRedirectObservable().subscribe(),this.msalBroadcastService.inProgress$.pipe((0,Ft.p)(n=>n===ta.T$.None),(0,Zt.Q)(this._destroying$)).subscribe(()=>{this.isAuthenticated=this.authService.instance.getAllAccounts().length>0,this.isAuthenticated&&(this.accountService.checkAndSetActiveAccount(),this.userService.getBackendUserProfile().pipe((0,wn.s)(1)).subscribe(),this.mgtService.initializeMgt())})}ngOnDestroy(){this._destroying$.next(void 0),this._destroying$.complete()}static#e=this.\u0275fac=function(o){return new(o||u)(c.rXU(T.dl),c.rXU(T.qb),c.rXU(fd),c.rXU(gr),c.rXU(li.DL))};static#t=this.\u0275cmp=c.VBU({type:u,selectors:[["app-root"]],standalone:!0,features:[c.aNF],decls:6,vars:1,consts:[[1,"p-5","mx-auto","container"]],template:function(o,p){1&o&&(c.nrm(0,"app-nav"),c.j41(1,"main"),c.DNE(2,m0,1,0,"app-sidebar"),c.j41(3,"div",0),c.nrm(4,"router-outlet"),c.k0s()(),c.nrm(5,"app-footer")),2&o&&(c.R7$(2),c.vxM(2,p.isAuthenticated?2:-1))},dependencies:[Q.MD,_.iI,_.n3,Dr,tc,nc],encapsulation:2})}return u})();I.production&&(0,c.SmG)(),(0,s.B8)(yu,et).catch(u=>console.error(u))},7043:(at,ge,d)=>{d.d(ge,{zi:()=>ve});var s=d(1635),c=d(9808),I=d(3043),v=d(9953),T=d(1589),M=d(633),_=d(9605),E=d(9760),N=d(5778),O=d(6009),le=d(2622),V=d(9457);const B=":not([disabled])",S="[disabled]",ve=(()=>{class de extends I.${appearanceChanged($,J){$!==J&&(this.classList.add(J),this.classList.remove($))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const $=this.defaultSlottedContent.filter(J=>J.nodeType===Node.ELEMENT_NODE);1===$.length&&$[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}return(0,s.Cg)([c.CF],de.prototype,"appearance",void 0),de})().compose({baseName:"button",baseClass:I.$,template:(de,W)=>v.q`
    <button
        class="control"
        part="control"
        ?autofocus="${$=>$.autofocus}"
        ?disabled="${$=>$.disabled}"
        form="${$=>$.formId}"
        formaction="${$=>$.formaction}"
        formenctype="${$=>$.formenctype}"
        formmethod="${$=>$.formmethod}"
        formnovalidate="${$=>$.formnovalidate}"
        formtarget="${$=>$.formtarget}"
        name="${$=>$.name}"
        type="${$=>$.type}"
        value="${$=>$.value}"
        aria-atomic="${$=>$.ariaAtomic}"
        aria-busy="${$=>$.ariaBusy}"
        aria-controls="${$=>$.ariaControls}"
        aria-current="${$=>$.ariaCurrent}"
        aria-describedby="${$=>$.ariaDescribedby}"
        aria-details="${$=>$.ariaDetails}"
        aria-disabled="${$=>$.ariaDisabled}"
        aria-errormessage="${$=>$.ariaErrormessage}"
        aria-expanded="${$=>$.ariaExpanded}"
        aria-flowto="${$=>$.ariaFlowto}"
        aria-haspopup="${$=>$.ariaHaspopup}"
        aria-hidden="${$=>$.ariaHidden}"
        aria-invalid="${$=>$.ariaInvalid}"
        aria-keyshortcuts="${$=>$.ariaKeyshortcuts}"
        aria-label="${$=>$.ariaLabel}"
        aria-labelledby="${$=>$.ariaLabelledby}"
        aria-live="${$=>$.ariaLive}"
        aria-owns="${$=>$.ariaOwns}"
        aria-pressed="${$=>$.ariaPressed}"
        aria-relevant="${$=>$.ariaRelevant}"
        aria-roledescription="${$=>$.ariaRoledescription}"
        ${(0,T.K)("control")}
    >
        ${(0,_.LT)(de,W)}
        <span class="content" part="content">
            <slot ${(0,M.e)("defaultSlottedContent")}></slot>
        </span>
        ${(0,_.aO)(de,W)}
    </button>
`,styles:(de,W)=>E.A`
    :host(${B}) .control {
      cursor: pointer;
    }

    :host(${S}) .control {
      cursor: ${N.Z};
    }

    @media (forced-colors: none) {
      :host(${S}) .control {
        opacity: ${V.qB4};
      }
    }

    ${(0,O.wQ)(de,W,B,S)}
  `.withBehaviors((0,le.f)("neutral",(0,O._9)(de,W,B,S)),(0,le.f)("accent",(0,O.Vw)(de,W,B,S)),(0,le.f)("lightweight",(0,O.ZI)(de,W,B,S)),(0,le.f)("outline",(0,O.LA)(de,W,B,S)),(0,le.f)("stealth",(0,O.ss)(de,W,B,S))),shadowOptions:{delegatesFocus:!0}})},5409:(at,ge,d)=>{d.d(ge,{z1:()=>de});var s=d(1635),c=d(4632);class I extends c.g{}var v=d(4645),T=d(9953),_=d(4192),b=d(9808),E=d(3595),N=d(9457),O=d(4585),le=d(9347),V=d(9760),B=d(8322),S=d(4954),K=d(3226),oe=d(2783);const de=(()=>{class $ extends I{cardFillColorChanged(ne,G){if(G){const ue=(0,E.Hs)(G);null!==ue&&(this.neutralPaletteSource=G,N.pfK.setValueFor(this,O.q.create(ue.r,ue.g,ue.b)))}}neutralPaletteSourceChanged(ne,G){if(G){const ue=(0,E.Hs)(G),q=O.q.create(ue.r,ue.g,ue.b);N.roJ.setValueFor(this,le.p.create(q))}}handleChange(ne,G){this.cardFillColor||N.pfK.setValueFor(this,ue=>N.M3E.getValueFor(ue).evaluate(ue,N.pfK.getValueFor(ne)).rest)}connectedCallback(){super.connectedCallback();const ne=(0,v.Z)(this);if(ne){const G=_.cP.getNotifier(ne);G.subscribe(this,"fillColor"),G.subscribe(this,"neutralPalette"),this.handleChange(ne,"fillColor")}}}return(0,s.Cg)([(0,b.CF)({attribute:"card-fill-color",mode:"fromView"})],$.prototype,"cardFillColor",void 0),(0,s.Cg)([(0,b.CF)({attribute:"neutral-palette-source",mode:"fromView"})],$.prototype,"neutralPaletteSource",void 0),$})().compose({baseName:"card",baseClass:I,template:($,J)=>T.q`
    <slot></slot>
`,styles:($,J)=>V.A`
    ${(0,B.V)("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${N.pfK};
      color: ${N.lHw};
      border: calc(${N.XAH} * 1px) solid ${N.ppm};
      border-radius: calc(${N.JUW} * 1px);
      box-shadow: ${oe.eq};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors((0,S.mr)(V.A`
        :host {
          background: ${K.A.Canvas};
          color: ${K.A.CanvasText};
        }
      `))})},9684:(at,ge,d)=>{d.d(ge,{c:()=>ne});var s=d(742),c=d(9808),I=d(4192),v=d(7153),T=d(8746),M=d(4632);class _ extends M.g{}class b extends((0,T.dx)(_)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let E=(()=>{class ue extends b{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=F=>{this.readOnly||F.key!==v.gG||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.clickHandler=F=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}return(0,s.Cg)([(0,c.CF)({attribute:"readonly",mode:"boolean"})],ue.prototype,"readOnly",void 0),(0,s.Cg)([I.sH],ue.prototype,"defaultSlottedNodes",void 0),(0,s.Cg)([I.sH],ue.prototype,"indeterminate",void 0),ue})();var N=d(9953),O=d(633),V=d(9760),B=d(8322),S=d(4932),K=d(5778),oe=d(4954),ve=d(3226),ae=d(4583),de=d(9457),W=d(9709),$=d(5532);const ne=E.compose({baseName:"checkbox",template:(ue,q)=>N.q`
    <template
        role="checkbox"
        aria-checked="${F=>F.checked}"
        aria-required="${F=>F.required}"
        aria-disabled="${F=>F.disabled}"
        aria-readonly="${F=>F.readOnly}"
        tabindex="${F=>F.disabled?null:0}"
        @keypress="${(F,P)=>F.keypressHandler(P.event)}"
        @click="${(F,P)=>F.clickHandler(P.event)}"
        class="${F=>F.readOnly?"readonly":""} ${F=>F.checked?"checked":""} ${F=>F.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${q.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${q.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${F=>F.defaultSlottedNodes&&F.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${(0,O.e)("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(ue,q)=>V.A`
    ${(0,B.V)("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${ae.D} / 2 + ${de.vR1}) * 1px);
      height: calc((${ae.D} / 2 + ${de.vR1}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${de.PbG} * 1px);
      border: calc(${de.XAH} * 1px) solid ${de.nF5};
      background: ${de.ymW};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${W.Ah}
      color: ${de.lHw};
      ${""} padding-inline-start: calc(${de.vR1} * 2px + 2px);
      margin-inline-end: calc(${de.vR1} * 2px + 2px);
      cursor: pointer;
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${de.lHw};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${de.l_5};
    }

    :host(:not(.disabled):hover) .control {
      background: ${de.IpM};
      border-color: ${de.vA6};
    }

    :host(:not(.disabled):active) .control {
      background: ${de.MPS};
      border-color: ${de.p4W};
    }

    :host(:${S.N}) .control {
      background: ${de.wsB};
      ${$.v}
    }

    :host(.checked) .control {
      background: ${de.IRh};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${de.OS0};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${de.amQ};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${K.Z};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${de.qB4};
    }
  `.withBehaviors((0,oe.mr)(V.A`
        .control {
          border-color: ${ve.A.FieldText};
          background: ${ve.A.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${ve.A.Highlight};
          background: ${ve.A.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${ve.A.FieldText};
        }
        :host(:${S.N}) .control {
          forced-color-adjust: none;
          outline-color: ${ve.A.FieldText};
          background: ${ve.A.Field};
          border-color: ${ve.A.Highlight};
        }
        :host(.checked) .control {
          background: ${ve.A.Highlight};
          border-color: ${ve.A.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${ve.A.HighlightText};
          border-color: ${ve.A.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${ve.A.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${ve.A.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${ve.A.GrayText};
          background: ${ve.A.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${ve.A.GrayText};
        }
      `)),checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',indeterminateIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>\n    </svg>\n  '})},9347:(at,ge,d)=>{d.d(ge,{p:()=>W});var s=d(4219),c=d(6691),I=d(7591),v=d(9467),T=d(1379);function M(J,ne,G){return isNaN(J)||J<=0?ne:J>=1?G:new v.M((0,s.Cc)(J,ne.r,G.r),(0,s.Cc)(J,ne.g,G.g),(0,s.Cc)(J,ne.b,G.b),(0,s.Cc)(J,ne.a,G.a))}var B=d(4585);function S(J,ne,G=0,ue=J.length-1){if(ue===G)return J[G];const q=Math.floor((ue-G)/2)+G;return ne(J[q])?S(J,ne,G,q):S(J,ne,q+1,ue)}var K=d(9731),oe=d(9163);const ve={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1},W=Object.freeze({create:function ae(J,ne,G){return W.from("number"==typeof J?B.q.create(J,ne,G):J)},from:function de(J,ne){return(0,B.m)(J)?$.from(J,ne):$.from(B.q.create(J.r,J.g,J.b),ne)}});class ${constructor(ne,G){this.closestIndexCache=new Map,this.source=ne,this.swatches=G,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(ne,G,ue,q){void 0===ue&&(ue=this.closestIndexOf(ne));let F=this.swatches;const P=this.lastIndex;let ee=ue;return void 0===q&&(q=(0,K.F)(ne)),-1===q&&(F=this.reversedSwatches,ee=P-ee),S(F,me=>(0,oe.v)(ne,me)>=G,ee,P)}get(ne){return this.swatches[ne]||this.swatches[(0,s.qE)(ne,0,this.lastIndex)]}closestIndexOf(ne){if(this.closestIndexCache.has(ne.relativeLuminance))return this.closestIndexCache.get(ne.relativeLuminance);let G=this.swatches.indexOf(ne);if(-1!==G)return this.closestIndexCache.set(ne.relativeLuminance,G),G;const ue=this.swatches.reduce((q,F)=>Math.abs(F.relativeLuminance-ne.relativeLuminance)<Math.abs(q.relativeLuminance-ne.relativeLuminance)?F:q);return G=this.swatches.indexOf(ue),this.closestIndexCache.set(ne.relativeLuminance,G),G}static saturationBump(ne,G){const q=(0,c.SU)(ne).s,F=(0,c.SU)(G);if(F.s<q){const P=new I.D(F.h,q,F.l);return(0,c.QX)(P)}return G}static ramp(ne){const G=ne/100;return G>.5?(G-.5)/.5:2*G}static createHighResolutionPalette(ne){const G=[],ue=(0,c.mi)(v.M.fromObject(ne).roundToPrecision(4)),q=(0,c.eK)(new T.h(0,ue.a,ue.b)).clamp().roundToPrecision(4),F=(0,c.eK)(new T.h(50,ue.a,ue.b)).clamp().roundToPrecision(4),P=(0,c.eK)(new T.h(100,ue.a,ue.b)).clamp().roundToPrecision(4),ee=new v.M(0,0,0),Z=new v.M(1,1,1),me=P.equalValue(Z)?0:14,ze=q.equalValue(ee)?0:14;for(let Ue=100+me;Ue>=0-ze;Ue-=.5){let it;it=Ue<0?M(Ue/ze+1,ee,q):Ue<=50?M($.ramp(Ue),q,F):Ue<=100?M($.ramp(Ue),F,P):M((Ue-100)/me,P,Z),it=$.saturationBump(F,it).roundToPrecision(4),G.push(B.q.from(it))}return new $(ne,G)}static adjustEnd(ne,G,ue,q){const F=-1===q?G.swatches:G.reversedSwatches,P=me=>{const ze=G.closestIndexOf(me);return 1===q?G.lastIndex-ze:ze};1===q&&ue.reverse();const ee=ne(ue[ue.length-2]);if((0,s.l)((0,oe.v)(ue[ue.length-1],ue[ue.length-2]),2)<ee){ue.pop();const ze=P(G.colorContrast(F[G.lastIndex],ee,void 0,q)),Ue=P(ue[ue.length-2]);let Me=1;for(let re=ue.length-(ze-Ue)-1;re<ue.length;re++){const Oe=P(ue[re]);ue[re]=F[re===ue.length-1?G.lastIndex:Oe+Me],Me++}}1===q&&ue.reverse()}static createColorPaletteByContrast(ne,G){const ue=$.createHighResolutionPalette(ne),q=ee=>(0,s.l)(G.stepContrast+G.stepContrast*(1-ee.relativeLuminance)*G.stepContrastRamp,2),F=[];let P=G.preserveSource?ne:ue.swatches[0];F.push(P);do{const ee=q(P);P=ue.colorContrast(P,ee,void 0,1),F.push(P)}while(P.relativeLuminance>0);if(G.preserveSource){P=ne;do{const ee=q(P);P=ue.colorContrast(P,ee,void 0,-1),F.unshift(P)}while(P.relativeLuminance<1)}return this.adjustEnd(q,ue,F,-1),G.preserveSource&&this.adjustEnd(q,ue,F,1),F}static from(ne,G){const ue=void 0===G?ve:Object.assign(Object.assign({},ve),G);return new $(ne,Object.freeze($.createColorPaletteByContrast(ne,ue)))}}},4585:(at,ge,d)=>{d.d(ge,{m:()=>T,q:()=>v});var s=d(9467),c=d(6691),I=d(9163);const v=Object.freeze({create:(_,b,E)=>new M(_,b,E),from:_=>new M(_.r,_.g,_.b)});function T(_){const b={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const E in b)if(typeof b[E]!=typeof _[E])return!1;return!0}class M extends s.M{constructor(b,E,N){super(b,E,N,1),this.toColorString=this.toStringHexRGB,this.contrast=I.v.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=(0,c.Z8)(this)}static fromObject(b){return new M(b.r,b.g,b.b)}}},4150:(at,ge,d)=>{d.d(ge,{Z:()=>c,y:()=>I});var s=d(4585);function c(v){return s.q.create(v,v,v)}var I=function(v){return v[v.LightMode=.98]="LightMode",v[v.DarkMode=.15]="DarkMode",v}(I||{})},9731:(at,ge,d)=>{d.d(ge,{F:()=>c});var s=d(8313);function c(I){return(0,s.H)(I)?-1:1}},8313:(at,ge,d)=>{d.d(ge,{H:()=>c});const s=(-.1+Math.sqrt(.21))/2;function c(I){return I.relativeLuminance<=s}},9163:(at,ge,d)=>{function s(c,I){return((c.relativeLuminance>I.relativeLuminance?c:I).relativeLuminance+.05)/((c.relativeLuminance>I.relativeLuminance?I:c).relativeLuminance+.05)}d.d(ge,{v:()=>s})},9457:(at,ge,d)=>{d.d(ge,{fdT:()=>Xo,amQ:()=>Fo,KJd:()=>Io,OS0:()=>Ur,IRh:()=>wr,QL0:()=>Dl,iLG:()=>Os,YLI:()=>pr,W_m:()=>fs,uB0:()=>$a,cDQ:()=>ea,eNp:()=>mo,enQ:()=>ci,Sss:()=>kn,li_:()=>Cn,OCo:()=>Fi,PbG:()=>fn,Brd:()=>Rn,vR1:()=>Ei,oWd:()=>Gt,qB4:()=>tn,pfK:()=>Wi,fFd:()=>Ls,WNM:()=>cl,vdx:()=>On,J_F:()=>Fa,BgV:()=>hs,XKp:()=>Rs,l_5:()=>Jo,JUW:()=>fi,eQf:()=>cs,X4G:()=>Uo,XtK:()=>$o,MPS:()=>to,wsB:()=>vo,IpM:()=>Yn,ymW:()=>Tn,F_x:()=>Le,jMl:()=>Se,VYG:()=>eo,leE:()=>Ee,M3E:()=>Ir,F7s:()=>uo,DKg:()=>Ua,Vtk:()=>kl,Rgz:()=>ta,jIq:()=>ya,v8G:()=>il,wOW:()=>Ba,UBo:()=>Ml,oO8:()=>na,EE_:()=>ps,WlO:()=>ba,LIX:()=>Ha,cRz:()=>wa,g8A:()=>Bo,LnO:()=>Rl,lHw:()=>Pr,Tkp:()=>ks,roJ:()=>ai,MYG:()=>ol,FZQ:()=>ja,H7x:()=>Yl,Fly:()=>ll,hb6:()=>vs,mbK:()=>_a,WvW:()=>Ea,o_b:()=>Ga,ppm:()=>Wr,I21:()=>Va,p4W:()=>Sa,vA6:()=>oa,nF5:()=>ra,XAH:()=>Ln,Kgr:()=>yi,$AV:()=>zi,Z69:()=>ji,kSN:()=>gt,dUM:()=>Ye,FrF:()=>_t,tDF:()=>ft,wxg:()=>un,e9J:()=>qt,YVy:()=>Sn,BZ8:()=>At,vrI:()=>Un,TFp:()=>ui,Knw:()=>Bn,Oc7:()=>Fn,aVA:()=>Qi,PPT:()=>zr,bcZ:()=>Cr,FrW:()=>Bt,onW:()=>Fe,weJ:()=>bt,_UC:()=>dt,x3P:()=>Wt,Z67:()=>$t,X7g:()=>Vt,Ygb:()=>$n,uwi:()=>Qt});var s=d(1859),c=d(9748),I=d(9347),v=d(3595),T=d(4585);const M=T.q.create(1,1,1),_=T.q.create(0,0,0),b=T.q.create(.5,.5,.5),E=(0,v.Hs)("#0078D4"),N=T.q.create(E.r,E.g,E.b);function le(te,St,bn,Qn,Pi){const xr=kr=>kr.contrast(M)>=Pi?M:_,Ni=xr(te),ei=xr(St);return{rest:Ni,hover:ei,active:Ni.relativeLuminance===ei.relativeLuminance?Ni:xr(bn),focus:xr(Qn)}}var V=d(9467),B=d(6691),re=d(9731),Oe=d(9163);class Xe{constructor(St,bn,Qn,Pi){this.toColorString=()=>this.cssGradient,this.contrast=Oe.v.bind(null,this),this.createCSS=this.toColorString,this.color=new V.M(St,bn,Qn),this.cssGradient=Pi,this.relativeLuminance=(0,B.Z8)(this.color),this.r=St,this.g=bn,this.b=Qn}static fromObject(St,bn){return new Xe(St.r,St.g,St.b,bn)}}const He=new V.M(0,0,0),rt=new V.M(1,1,1);function Te(te,St,bn,Qn,Pi,xr,Ni,ei,Nr=10,fo=!1){const kr=te.closestIndexOf(St);function Ho(tt){if(fo){const Nt=te.closestIndexOf(St),kt=te.get(Nt),yn=tt.relativeLuminance<St.relativeLuminance?He:rt,ti=(0,B.Ep)((0,v.Hs)(tt.toColorString()),(0,v.Hs)(kt.toColorString()),yn).roundToPrecision(2),oi=function Me(te,St){return St.a>=1?St:St.a<=0?new V.M(te.r,te.g,te.b,1):new V.M(St.a*St.r+(1-St.a)*te.r,St.a*St.g+(1-St.a)*te.g,St.a*St.b+(1-St.a)*te.b,1)}((0,v.Hs)(St.toColorString()),ti);return T.q.from(oi)}return tt}void 0===ei&&(ei=(0,re.F)(St));const da=kr+ei*bn,A=da+ei*(Qn-bn),L=da+ei*(Pi-bn),D=da+ei*(xr-bn),H=-1===ei?0:100-Nr,we=-1===ei?Nr:100;function Pe(tt,Nt){const kt=te.get(tt);if(Nt){const yn=te.get(tt+ei*Ni),ti=-1===ei?yn:kt,oi=-1===ei?kt:yn,Mr=`linear-gradient(${Ho(ti).toColorString()} ${H}%, ${Ho(oi).toColorString()} ${we}%)`;return Xe.fromObject(ti,Mr)}return Ho(kt)}return{rest:Pe(da,!0),hover:Pe(A,!0),active:Pe(L,!1),focus:Pe(D,!0)}}var Y=d(8313);function be(te,St,bn,Qn,Pi,xr,Ni,ei){null==ei&&(ei=(0,re.F)(St));const Nr=te.closestIndexOf(te.colorContrast(St,bn));return{rest:te.get(Nr+ei*Qn),hover:te.get(Nr+ei*Pi),active:te.get(Nr+ei*xr),focus:te.get(Nr+ei*Ni)}}function Ne(te,St,bn,Qn,Pi,xr,Ni){const ei=te.closestIndexOf(St);return null==Ni&&(Ni=(0,re.F)(St)),{rest:te.get(ei+Ni*bn),hover:te.get(ei+Ni*Qn),active:te.get(ei+Ni*Pi),focus:te.get(ei+Ni*xr)}}function lt(te,St,bn,Qn,Pi,xr,Ni=void 0,ei,Nr,fo,kr,Ho=void 0){return(0,Y.H)(St)?Ne(te,St,ei,Nr,fo,kr,Ho):Ne(te,St,bn,Qn,Pi,xr,Ni)}var pe=d(4150);function j(te,St){return te.closestIndexOf((0,pe.Z)(St))}function Ge(te,St,bn){return te.get(j(te,St)+-1*bn)}const{create:Be}=s.G;function Je(te){return s.G.create({name:te,cssCustomPropertyName:null})}const Gt=Be("direction").withDefault(c.O.ltr),tn=Be("disabled-opacity").withDefault(.3),kn=Be("base-height-multiplier").withDefault(8),Rn=(Be("base-horizontal-spacing-multiplier").withDefault(3),Be("density").withDefault(0)),Ei=Be("design-unit").withDefault(4),fn=Be("control-corner-radius").withDefault(4),fi=Be("layer-corner-radius").withDefault(8),Ln=Be("stroke-width").withDefault(1),On=Be("focus-stroke-width").withDefault(2),Fi=Be("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),Kn=Be("font-weight").withDefault(400);function Mn(te){return St=>{const bn=te.getValueFor(St),Qn=Kn.getValueFor(St);if(bn.endsWith("px")){const Pi=Number.parseFloat(bn.replace("px",""));if(Pi<=12)return`"wght" ${Qn}, "opsz" 8`;if(Pi>24)return`"wght" ${Qn}, "opsz" 36`}return`"wght" ${Qn}, "opsz" 10.5`}}const yi=Be("type-ramp-base-font-size").withDefault("14px"),ji=Be("type-ramp-base-line-height").withDefault("20px"),zi=Be("type-ramp-base-font-variations").withDefault(Mn(yi)),gt=Be("type-ramp-minus-1-font-size").withDefault("12px"),_t=Be("type-ramp-minus-1-line-height").withDefault("16px"),Ye=Be("type-ramp-minus-1-font-variations").withDefault(Mn(gt)),ft=Be("type-ramp-minus-2-font-size").withDefault("10px"),qt=Be("type-ramp-minus-2-line-height").withDefault("14px"),un=Be("type-ramp-minus-2-font-variations").withDefault(Mn(ft)),Sn=Be("type-ramp-plus-1-font-size").withDefault("16px"),Un=Be("type-ramp-plus-1-line-height").withDefault("22px"),At=Be("type-ramp-plus-1-font-variations").withDefault(Mn(Sn)),ui=Be("type-ramp-plus-2-font-size").withDefault("20px"),Fn=Be("type-ramp-plus-2-line-height").withDefault("26px"),Bn=Be("type-ramp-plus-2-font-variations").withDefault(Mn(ui)),Qi=Be("type-ramp-plus-3-font-size").withDefault("24px"),Cr=Be("type-ramp-plus-3-line-height").withDefault("32px"),zr=Be("type-ramp-plus-3-font-variations").withDefault(Mn(Qi)),Bt=Be("type-ramp-plus-4-font-size").withDefault("28px"),bt=Be("type-ramp-plus-4-line-height").withDefault("36px"),Fe=Be("type-ramp-plus-4-font-variations").withDefault(Mn(Bt)),dt=Be("type-ramp-plus-5-font-size").withDefault("32px"),$t=Be("type-ramp-plus-5-line-height").withDefault("40px"),Wt=Be("type-ramp-plus-5-font-variations").withDefault(Mn(dt)),Vt=Be("type-ramp-plus-6-font-size").withDefault("40px"),Qt=Be("type-ramp-plus-6-line-height").withDefault("52px"),$n=Be("type-ramp-plus-6-font-variations").withDefault(Mn(Vt)),Cn=Be("base-layer-luminance").withDefault(pe.y.LightMode),In=Je("accent-fill-rest-delta").withDefault(0),hi=Je("accent-fill-hover-delta").withDefault(-2),Gi=Je("accent-fill-active-delta").withDefault(-5),ki=Je("accent-fill-focus-delta").withDefault(0),bi=Je("accent-foreground-rest-delta").withDefault(0),je=Je("accent-foreground-hover-delta").withDefault(3),ct=Je("accent-foreground-active-delta").withDefault(-8),st=Je("accent-foreground-focus-delta").withDefault(0),Rt=Je("neutral-fill-rest-delta").withDefault(-1),Pt=Je("neutral-fill-hover-delta").withDefault(1),sn=Je("neutral-fill-active-delta").withDefault(0),on=Je("neutral-fill-focus-delta").withDefault(0),vt=Je("neutral-fill-input-rest-delta").withDefault(-1),yt=Je("neutral-fill-input-hover-delta").withDefault(1),Ie=Je("neutral-fill-input-active-delta").withDefault(0),qe=Je("neutral-fill-input-focus-delta").withDefault(-2),nt=Je("neutral-fill-input-alt-rest-delta").withDefault(2),pt=Je("neutral-fill-input-alt-hover-delta").withDefault(4),Kt=Je("neutral-fill-input-alt-active-delta").withDefault(6),Yt=Je("neutral-fill-input-alt-focus-delta").withDefault(2),cn=Je("neutral-fill-layer-rest-delta").withDefault(-2),vn=Je("neutral-fill-layer-hover-delta").withDefault(-3),pn=Je("neutral-fill-layer-active-delta").withDefault(-3),Ci=Je("neutral-fill-layer-alt-rest-delta").withDefault(-1),pi=Je("neutral-fill-secondary-rest-delta").withDefault(3),fr=Je("neutral-fill-secondary-hover-delta").withDefault(2),Fr=Je("neutral-fill-secondary-active-delta").withDefault(1),Or=Je("neutral-fill-secondary-focus-delta").withDefault(3),Nn=Je("neutral-fill-stealth-rest-delta").withDefault(0),Tt=Je("neutral-fill-stealth-hover-delta").withDefault(3),f=Je("neutral-fill-stealth-active-delta").withDefault(2),g=Je("neutral-fill-stealth-focus-delta").withDefault(0),C=Je("neutral-fill-strong-rest-delta").withDefault(0),X=Je("neutral-fill-strong-hover-delta").withDefault(8),ye=Je("neutral-fill-strong-active-delta").withDefault(-5),Re=Je("neutral-fill-strong-focus-delta").withDefault(0),Ke=Je("neutral-stroke-rest-delta").withDefault(8),It=Je("neutral-stroke-hover-delta").withDefault(12),jt=Je("neutral-stroke-active-delta").withDefault(6),Ut=Je("neutral-stroke-focus-delta").withDefault(8),hn=Je("neutral-stroke-control-rest-delta").withDefault(3),_n=Je("neutral-stroke-control-hover-delta").withDefault(5),Hn=Je("neutral-stroke-control-active-delta").withDefault(5),vi=Je("neutral-stroke-control-focus-delta").withDefault(5),Ii=Je("neutral-stroke-divider-rest-delta").withDefault(4),$i=Je("neutral-stroke-layer-rest-delta").withDefault(3),Sr=Je("neutral-stroke-layer-hover-delta").withDefault(3),$r=Je("neutral-stroke-layer-active-delta").withDefault(3),Gr=Je("neutral-stroke-strong-hover-delta").withDefault(0),co=Je("neutral-stroke-strong-active-delta").withDefault(0),Ar=Je("neutral-stroke-strong-focus-delta").withDefault(0),cs=Be("neutral-base-color").withDefault(b),ai=Je("neutral-palette").withDefault(te=>I.p.from(cs.getValueFor(te))),Xo=Be("accent-base-color").withDefault(N),Zi=Je("accent-palette").withDefault(te=>I.p.from(Xo.getValueFor(te))),Zo=Je("neutral-layer-card-container-recipe").withDefault({evaluate:te=>Ge(ai.getValueFor(te),Cn.getValueFor(te),cn.getValueFor(te))}),No=(Be("neutral-layer-card-container").withDefault(te=>Zo.getValueFor(te).evaluate(te)),Je("neutral-layer-floating-recipe").withDefault({evaluate:te=>function ke(te,St,bn){return te.get(j(te,St)+bn)}(ai.getValueFor(te),Cn.getValueFor(te),cn.getValueFor(te))})),ks=Be("neutral-layer-floating").withDefault(te=>No.getValueFor(te).evaluate(te)),Ms=Je("neutral-layer-1-recipe").withDefault({evaluate:te=>function ce(te,St){return te.get(j(te,St))}(ai.getValueFor(te),Cn.getValueFor(te))}),sr=Be("neutral-layer-1").withDefault(te=>Ms.getValueFor(te).evaluate(te)),Js=Je("neutral-layer-2-recipe").withDefault({evaluate:te=>Ge(ai.getValueFor(te),Cn.getValueFor(te),cn.getValueFor(te))}),us=(Be("neutral-layer-2").withDefault(te=>Js.getValueFor(te).evaluate(te)),Je("neutral-layer-3-recipe").withDefault({evaluate:te=>function wt(te,St,bn){return te.get(j(te,St)+-1*bn*2)}(ai.getValueFor(te),Cn.getValueFor(te),cn.getValueFor(te))})),va=(Be("neutral-layer-3").withDefault(te=>us.getValueFor(te).evaluate(te)),Je("neutral-layer-4-recipe").withDefault({evaluate:te=>function ot(te,St,bn){return te.get(j(te,St)+-1*bn*3)}(ai.getValueFor(te),Cn.getValueFor(te),cn.getValueFor(te))})),Wi=(Be("neutral-layer-4").withDefault(te=>va.getValueFor(te).evaluate(te)),Be("fill-color").withDefault(te=>sr.getValueFor(te)));var Yr=function(te){return te[te.normal=4.5]="normal",te[te.large=3]="large",te}(Yr||{});const Lo=Je("accent-fill-recipe").withDefault({evaluate:(te,St)=>function Qe(te,St,bn,Qn,Pi,xr,Ni,ei,Nr,fo,kr,Ho,da,A){return(0,Y.H)(St)?be(te,St,Nr,fo,kr,Ho,da,A):be(te,St,bn,Qn,Pi,xr,Ni,ei)}(Zi.getValueFor(te),St||Wi.getValueFor(te),5,In.getValueFor(te),hi.getValueFor(te),Gi.getValueFor(te),ki.getValueFor(te),void 0,8,In.getValueFor(te),hi.getValueFor(te),Gi.getValueFor(te),ki.getValueFor(te),void 0)}),wr=Be("accent-fill-rest").withDefault(te=>Lo.getValueFor(te).evaluate(te).rest),Ur=Be("accent-fill-hover").withDefault(te=>Lo.getValueFor(te).evaluate(te).hover),Fo=Be("accent-fill-active").withDefault(te=>Lo.getValueFor(te).evaluate(te).active),Io=Be("accent-fill-focus").withDefault(te=>Lo.getValueFor(te).evaluate(te).focus),Xi=Je("foreground-on-accent-recipe").withDefault({evaluate:te=>le(wr.getValueFor(te),Ur.getValueFor(te),Fo.getValueFor(te),Io.getValueFor(te),Yr.normal)}),Jo=Be("foreground-on-accent-rest").withDefault(te=>Xi.getValueFor(te).evaluate(te).rest),Rs=Be("foreground-on-accent-hover").withDefault(te=>Xi.getValueFor(te).evaluate(te).hover),Fa=Be("foreground-on-accent-active").withDefault(te=>Xi.getValueFor(te).evaluate(te).active),hs=Be("foreground-on-accent-focus").withDefault(te=>Xi.getValueFor(te).evaluate(te).focus),Mi=Je("accent-foreground-recipe").withDefault({evaluate:(te,St)=>be(Zi.getValueFor(te),St||Wi.getValueFor(te),9.5,bi.getValueFor(te),je.getValueFor(te),ct.getValueFor(te),st.getValueFor(te))}),fs=Be("accent-foreground-rest").withDefault(te=>Mi.getValueFor(te).evaluate(te).rest),pr=Be("accent-foreground-hover").withDefault(te=>Mi.getValueFor(te).evaluate(te).hover),Dl=Be("accent-foreground-active").withDefault(te=>Mi.getValueFor(te).evaluate(te).active),Os=Be("accent-foreground-focus").withDefault(te=>Mi.getValueFor(te).evaluate(te).focus),_r=Je("accent-stroke-control-recipe").withDefault({evaluate:(te,St)=>Te(ai.getValueFor(te),St||Wi.getValueFor(te),-3,-3,-3,-3,10,1,void 0,!0)}),ci=Be("accent-stroke-control-rest").withDefault(te=>_r.getValueFor(te).evaluate(te,wr.getValueFor(te)).rest),mo=Be("accent-stroke-control-hover").withDefault(te=>_r.getValueFor(te).evaluate(te,Ur.getValueFor(te)).hover),$a=Be("accent-stroke-control-active").withDefault(te=>_r.getValueFor(te).evaluate(te,Fo.getValueFor(te)).active),ea=Be("accent-stroke-control-focus").withDefault(te=>_r.getValueFor(te).evaluate(te,Io.getValueFor(te)).focus),Jr=Je("neutral-fill-recipe").withDefault({evaluate:(te,St)=>lt(ai.getValueFor(te),St||Wi.getValueFor(te),Rt.getValueFor(te),Pt.getValueFor(te),sn.getValueFor(te),on.getValueFor(te),void 0,2,3,1,2,void 0)}),uo=Be("neutral-fill-rest").withDefault(te=>Jr.getValueFor(te).evaluate(te).rest),$o=Be("neutral-fill-hover").withDefault(te=>Jr.getValueFor(te).evaluate(te).hover),Uo=Be("neutral-fill-active").withDefault(te=>Jr.getValueFor(te).evaluate(te).active),eo=(Be("neutral-fill-focus").withDefault(te=>Jr.getValueFor(te).evaluate(te).focus),Je("neutral-fill-input-recipe").withDefault({evaluate:(te,St)=>lt(ai.getValueFor(te),St||Wi.getValueFor(te),vt.getValueFor(te),yt.getValueFor(te),Ie.getValueFor(te),qe.getValueFor(te),void 0,2,3,1,0,void 0)})),Ee=Be("neutral-fill-input-rest").withDefault(te=>eo.getValueFor(te).evaluate(te).rest),Se=Be("neutral-fill-input-hover").withDefault(te=>eo.getValueFor(te).evaluate(te).hover),Le=(Be("neutral-fill-input-active").withDefault(te=>eo.getValueFor(te).evaluate(te).active),Be("neutral-fill-input-focus").withDefault(te=>eo.getValueFor(te).evaluate(te).focus)),ut=Je("neutral-fill-input-alt-recipe").withDefault({evaluate:(te,St)=>lt(ai.getValueFor(te),St||Wi.getValueFor(te),nt.getValueFor(te),pt.getValueFor(te),Kt.getValueFor(te),Yt.getValueFor(te),1,nt.getValueFor(te),nt.getValueFor(te)-pt.getValueFor(te),nt.getValueFor(te)-Kt.getValueFor(te),Yt.getValueFor(te),1)}),Tn=Be("neutral-fill-input-alt-rest").withDefault(te=>ut.getValueFor(te).evaluate(te).rest),Yn=Be("neutral-fill-input-alt-hover").withDefault(te=>ut.getValueFor(te).evaluate(te).hover),to=Be("neutral-fill-input-alt-active").withDefault(te=>ut.getValueFor(te).evaluate(te).active),vo=Be("neutral-fill-input-alt-focus").withDefault(te=>ut.getValueFor(te).evaluate(te).focus),Ir=Je("neutral-fill-layer-recipe").withDefault({evaluate:(te,St)=>Ne(ai.getValueFor(te),St||Wi.getValueFor(te),cn.getValueFor(te),vn.getValueFor(te),pn.getValueFor(te),cn.getValueFor(te),1)}),Ns=(Be("neutral-fill-layer-rest").withDefault(te=>Ir.getValueFor(te).evaluate(te).rest),Be("neutral-fill-layer-hover").withDefault(te=>Ir.getValueFor(te).evaluate(te).hover),Be("neutral-fill-layer-active").withDefault(te=>Ir.getValueFor(te).evaluate(te).active),Je("neutral-fill-layer-alt-recipe").withDefault({evaluate:(te,St)=>Ne(ai.getValueFor(te),St||Wi.getValueFor(te),Ci.getValueFor(te),Ci.getValueFor(te),Ci.getValueFor(te),Ci.getValueFor(te))})),ya=(Be("neutral-fill-layer-alt-rest").withDefault(te=>Ns.getValueFor(te).evaluate(te).rest),Je("neutral-fill-secondary-recipe").withDefault({evaluate:(te,St)=>Ne(ai.getValueFor(te),St||Wi.getValueFor(te),pi.getValueFor(te),fr.getValueFor(te),Fr.getValueFor(te),Or.getValueFor(te))})),il=Be("neutral-fill-secondary-rest").withDefault(te=>ya.getValueFor(te).evaluate(te).rest),ta=Be("neutral-fill-secondary-hover").withDefault(te=>ya.getValueFor(te).evaluate(te).hover),Ua=Be("neutral-fill-secondary-active").withDefault(te=>ya.getValueFor(te).evaluate(te).active),kl=Be("neutral-fill-secondary-focus").withDefault(te=>ya.getValueFor(te).evaluate(te).focus),ps=Je("neutral-fill-stealth-recipe").withDefault({evaluate:(te,St)=>Ne(ai.getValueFor(te),St||Wi.getValueFor(te),Nn.getValueFor(te),Tt.getValueFor(te),f.getValueFor(te),g.getValueFor(te))}),ba=Be("neutral-fill-stealth-rest").withDefault(te=>ps.getValueFor(te).evaluate(te).rest),na=Be("neutral-fill-stealth-hover").withDefault(te=>ps.getValueFor(te).evaluate(te).hover),Ba=Be("neutral-fill-stealth-active").withDefault(te=>ps.getValueFor(te).evaluate(te).active),Ml=Be("neutral-fill-stealth-focus").withDefault(te=>ps.getValueFor(te).evaluate(te).focus),gs=Je("neutral-fill-strong-recipe").withDefault({evaluate:(te,St)=>be(ai.getValueFor(te),St||Wi.getValueFor(te),4.5,C.getValueFor(te),X.getValueFor(te),ye.getValueFor(te),Re.getValueFor(te))}),Br=(Be("neutral-fill-strong-rest").withDefault(te=>gs.getValueFor(te).evaluate(te).rest),Be("neutral-fill-strong-hover").withDefault(te=>gs.getValueFor(te).evaluate(te).hover),Be("neutral-fill-strong-active").withDefault(te=>gs.getValueFor(te).evaluate(te).active),Be("neutral-fill-strong-focus").withDefault(te=>gs.getValueFor(te).evaluate(te).focus),Je("neutral-foreground-recipe").withDefault({evaluate:(te,St)=>be(ai.getValueFor(te),St||Wi.getValueFor(te),16,0,-19,-30,0)})),Pr=Be("neutral-foreground-rest").withDefault(te=>Br.getValueFor(te).evaluate(te).rest),Rl=Be("neutral-foreground-hover").withDefault(te=>Br.getValueFor(te).evaluate(te).hover),Ha=Be("neutral-foreground-active").withDefault(te=>Br.getValueFor(te).evaluate(te).active),Bo=(Be("neutral-foreground-focus").withDefault(te=>Br.getValueFor(te).evaluate(te).focus),Je("neutral-foreground-hint-recipe").withDefault({evaluate:(te,St)=>function U(te,St,bn){return te.colorContrast(St,bn)}(ai.getValueFor(te),St||Wi.getValueFor(te),4.5)})),wa=Be("neutral-foreground-hint").withDefault(te=>Bo.getValueFor(te).evaluate(te)),ms=Je("neutral-stroke-recipe").withDefault({evaluate:(te,St)=>Ne(ai.getValueFor(te),St||Wi.getValueFor(te),Ke.getValueFor(te),It.getValueFor(te),jt.getValueFor(te),Ut.getValueFor(te))}),Va=Be("neutral-stroke-rest").withDefault(te=>ms.getValueFor(te).evaluate(te).rest),_a=Be("neutral-stroke-hover").withDefault(te=>ms.getValueFor(te).evaluate(te).hover),ol=Be("neutral-stroke-active").withDefault(te=>ms.getValueFor(te).evaluate(te).active),al=(Be("neutral-stroke-focus").withDefault(te=>ms.getValueFor(te).evaluate(te).focus),Je("neutral-stroke-control-recipe").withDefault({evaluate:(te,St)=>Te(ai.getValueFor(te),St||Wi.getValueFor(te),hn.getValueFor(te),_n.getValueFor(te),Hn.getValueFor(te),vi.getValueFor(te),5)})),ll=Be("neutral-stroke-control-rest").withDefault(te=>al.getValueFor(te).evaluate(te).rest),Yl=Be("neutral-stroke-control-hover").withDefault(te=>al.getValueFor(te).evaluate(te).hover),ja=Be("neutral-stroke-control-active").withDefault(te=>al.getValueFor(te).evaluate(te).active),Ol=(Be("neutral-stroke-control-focus").withDefault(te=>al.getValueFor(te).evaluate(te).focus),Je("neutral-stroke-divider-recipe").withDefault({evaluate:(te,St)=>function Ce(te,St,bn){return te.get(te.closestIndexOf(St)+(0,re.F)(St)*bn)}(ai.getValueFor(te),St||Wi.getValueFor(te),Ii.getValueFor(te))})),vs=Be("neutral-stroke-divider-rest").withDefault(te=>Ol.getValueFor(te).evaluate(te)),za=Je("neutral-stroke-input-recipe").withDefault({evaluate:(te,St)=>function se(te,St,bn,Qn,Pi,xr,Ni,ei){const Nr=te.closestIndexOf(St),fo=(0,re.F)(St),kr=Nr+fo*bn,Ho=kr+fo*(Qn-bn),da=kr+fo*(Pi-bn),A=kr+fo*(xr-bn),L=`calc(100% - ${ei})`;function D(H,we){const Pe=te.get(H);if(we){const tt=te.get(H+fo*Ni),Nt=`linear-gradient(${Pe.toColorString()} ${L}, ${tt.toColorString()} ${L}, ${tt.toColorString()})`;return Xe.fromObject(Pe,Nt)}return Pe}return{rest:D(kr,!0),hover:D(Ho,!0),active:D(da,!1),focus:D(A,!0)}}(ai.getValueFor(te),St||Wi.getValueFor(te),hn.getValueFor(te),_n.getValueFor(te),Hn.getValueFor(te),vi.getValueFor(te),20,Ln.getValueFor(te)+"px")}),Ga=Be("neutral-stroke-input-rest").withDefault(te=>za.getValueFor(te).evaluate(te).rest),Ea=Be("neutral-stroke-input-hover").withDefault(te=>za.getValueFor(te).evaluate(te).hover),ys=(Be("neutral-stroke-input-active").withDefault(te=>za.getValueFor(te).evaluate(te).active),Be("neutral-stroke-input-focus").withDefault(te=>za.getValueFor(te).evaluate(te).focus),Je("neutral-stroke-layer-recipe").withDefault({evaluate:(te,St)=>Ne(ai.getValueFor(te),St||Wi.getValueFor(te),$i.getValueFor(te),Sr.getValueFor(te),$r.getValueFor(te),$i.getValueFor(te))})),Wr=Be("neutral-stroke-layer-rest").withDefault(te=>ys.getValueFor(te).evaluate(te).rest),es=(Be("neutral-stroke-layer-hover").withDefault(te=>ys.getValueFor(te).evaluate(te).hover),Be("neutral-stroke-layer-active").withDefault(te=>ys.getValueFor(te).evaluate(te).active),Je("neutral-stroke-strong-recipe").withDefault({evaluate:(te,St)=>be(ai.getValueFor(te),St||Wi.getValueFor(te),5.5,0,Gr.getValueFor(te),co.getValueFor(te),Ar.getValueFor(te))})),ra=Be("neutral-stroke-strong-rest").withDefault(te=>es.getValueFor(te).evaluate(te).rest),oa=Be("neutral-stroke-strong-hover").withDefault(te=>es.getValueFor(te).evaluate(te).hover),Sa=Be("neutral-stroke-strong-active").withDefault(te=>es.getValueFor(te).evaluate(te).active),Nl=(Be("neutral-stroke-strong-focus").withDefault(te=>es.getValueFor(te).evaluate(te).focus),Je("focus-stroke-outer-recipe").withDefault({evaluate:te=>function Ot(te,St){return(0,Y.H)(St)?M:_}(ai.getValueFor(te),Wi.getValueFor(te))})),cl=Be("focus-stroke-outer").withDefault(te=>Nl.getValueFor(te).evaluate(te)),Ll=Je("focus-stroke-inner-recipe").withDefault({evaluate:te=>function We(te,St,bn){return(0,Y.H)(St)?_:M}(Zi.getValueFor(te),Wi.getValueFor(te),cl.getValueFor(te))}),Ls=Be("focus-stroke-inner").withDefault(te=>Ll.getValueFor(te).evaluate(te)),Aa=Je("foreground-on-accent-large-recipe").withDefault({evaluate:te=>le(wr.getValueFor(te),Ur.getValueFor(te),Fo.getValueFor(te),Io.getValueFor(te),Yr.large)}),_e=(Be("foreground-on-accent-rest-large").withDefault(te=>Aa.getValueFor(te).evaluate(te).rest),Be("foreground-on-accent-hover-large").withDefault(te=>Aa.getValueFor(te).evaluate(te,Ur.getValueFor(te)).hover),Be("foreground-on-accent-active-large").withDefault(te=>Aa.getValueFor(te).evaluate(te,Fo.getValueFor(te)).active),Be("foreground-on-accent-focus-large").withDefault(te=>Aa.getValueFor(te).evaluate(te,Io.getValueFor(te)).focus),Be("neutral-fill-inverse-rest-delta").withDefault(0)),et=Be("neutral-fill-inverse-hover-delta").withDefault(-3),Ft=Be("neutral-fill-inverse-active-delta").withDefault(7),Zt=Be("neutral-fill-inverse-focus-delta").withDefault(0),wi=Je("neutral-fill-inverse-recipe").withDefault({evaluate:(te,St)=>function wn(te,St,bn,Qn,Pi,xr){const Ni=(0,re.F)(St),ei=te.closestIndexOf(te.colorContrast(St,14)),Nr=ei+Ni*Math.abs(bn-Qn);let kr,Ho;return(1===Ni?bn<Qn:Ni*bn>Ni*Qn)?(kr=ei,Ho=Nr):(kr=Nr,Ho=ei),{rest:te.get(kr),hover:te.get(Ho),active:te.get(kr+Ni*Pi),focus:te.get(kr+Ni*xr)}}(ai.getValueFor(te),St||Wi.getValueFor(te),_e.getValueFor(te),et.getValueFor(te),Ft.getValueFor(te),Zt.getValueFor(te))});Be("neutral-fill-inverse-rest").withDefault(te=>wi.getValueFor(te).evaluate(te).rest),Be("neutral-fill-inverse-hover").withDefault(te=>wi.getValueFor(te).evaluate(te).hover),Be("neutral-fill-inverse-active").withDefault(te=>wi.getValueFor(te).evaluate(te).active),Be("neutral-fill-inverse-focus").withDefault(te=>wi.getValueFor(te).evaluate(te).focus)},882:(at,ge,d)=>{d.d(ge,{m9:()=>B});var s=d(862),c=d(9953),I=d(8287),M=d(9760),_=d(3226),b=d(8322),E=d(4954),N=d(4583),O=d(9457);const B=class V extends s.z{}.compose({baseName:"progress-ring",template:(K,oe)=>c.q`
    <template
        role="progressbar"
        aria-valuenow="${ve=>ve.value}"
        aria-valuemin="${ve=>ve.min}"
        aria-valuemax="${ve=>ve.max}"
        class="${ve=>ve.paused?"paused":""}"
    >
        ${(0,I.z)(ve=>"number"==typeof ve.value,c.q`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${ve=>44*ve.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,c.q`
                <slot name="indeterminate" slot="indeterminate">
                    ${oe.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(K,oe)=>M.A`
    ${(0,b.V)("flex")} :host {
      align-items: center;
      height: calc(${N.D} * 1px);
      width: calc(${N.D} * 1px);
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke-width: 2px;
    }

    .determinate {
      stroke: ${O.IRh};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${O.IRh};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    :host(.paused) .indeterminate-indicator-1 {
      animation: none;
      stroke: ${O.cRz};
    }

    :host(.paused) .determinate {
      stroke: ${O.cRz};
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `.withBehaviors((0,E.mr)(M.A`
        .background {
          stroke: ${_.A.Field};
        }
        .determinate,
        .indeterminate-indicator-1 {
          stroke: ${_.A.ButtonText};
        }
        :host(.paused) .determinate,
        :host(.paused) .indeterminate-indicator-1 {
          stroke: ${_.A.GrayText};
        }
      `)),indeterminateIndicator:'\n    <svg class="progress" part="progress" viewBox="0 0 16 16">\n        <circle\n            class="background"\n            part="background"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n        <circle\n            class="indeterminate-indicator-1"\n            part="indeterminate-indicator-1"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n    </svg>\n  '})},5017:(at,ge,d)=>{d.d(ge,{_0:()=>B});var s=d(742),c=d(9808),I=d(4632);let v=(()=>{class K extends I.g{constructor(){super(...arguments),this.shape="rect"}}return(0,s.Cg)([c.CF],K.prototype,"fill",void 0),(0,s.Cg)([c.CF],K.prototype,"shape",void 0),(0,s.Cg)([c.CF],K.prototype,"pattern",void 0),(0,s.Cg)([(0,c.CF)({mode:"boolean"})],K.prototype,"shimmer",void 0),K})();var T=d(9953),M=d(8287),b=d(9760),E=d(8322),N=d(4954),O=d(3226),le=d(9457);const B=v.compose({baseName:"skeleton",template:(K,oe)=>T.q`
    <template
        class="${ve=>"circle"===ve.shape?"circle":"rect"}"
        pattern="${ve=>ve.pattern}"
        ?shimmer="${ve=>ve.shimmer}"
    >
        ${(0,M.z)(ve=>!0===ve.shimmer,T.q`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${ve=>ve.pattern}" role="presentation">
            <img class="pattern" src="${ve=>ve.pattern}" />
        </object>
        <slot></slot>
    </template>
`,styles:(K,oe)=>b.A`
    ${(0,E.V)("block")} :host {
      --skeleton-fill-default: ${le.v8G};
      overflow: hidden;
      width: 100%;
      position: relative;
      background-color: var(--skeleton-fill, var(--skeleton-fill-default));
      --skeleton-animation-gradient-default: linear-gradient(
        270deg,
        var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
        ${le.Rgz} 51%,
        var(--skeleton-fill, var(--skeleton-fill-default)) 100%
      );
      --skeleton-animation-timing-default: ease-in-out;
    }

    :host(.rect) {
      border-radius: calc(${le.PbG} * 1px);
    }

    :host(.circle) {
      border-radius: 100%;
      overflow: hidden;
    }

    object {
      position: absolute;
      width: 100%;
      height: auto;
      z-index: 2;
    }

    object img {
      width: 100%;
      height: auto;
    }

    ${(0,E.V)("block")} span.shimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: var(--skeleton-animation-gradient, var(--skeleton-animation-gradient-default));
      background-size: 0px 0px / 90% 100%;
      background-repeat: no-repeat;
      background-color: var(--skeleton-animation-fill, ${le.v8G});
      animation: shimmer 2s infinite;
      animation-timing-function: var(--skeleton-animation-timing, var(--skeleton-timing-default));
      animation-direction: normal;
      z-index: 1;
    }

    ::slotted(svg) {
      z-index: 2;
    }

    ::slotted(.pattern) {
      width: 100%;
      height: 100%;
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  `.withBehaviors((0,N.mr)(b.A`
        :host{
          background-color: ${O.A.CanvasText};
        }
      `))})},2783:(at,ge,d)=>{d.d(ge,{Cw:()=>ae,H0:()=>oe,eq:()=>N,tf:()=>S});var s=d(1859);const T=s.G.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(de,W,$)=>{let J=.12,ne=.14;return W>16&&(J=.2,ne=.24),`0 0 2px rgba(0, 0, 0, ${J}), 0 calc(${W} * 0.5px) calc((${W} * 1px)) rgba(0, 0, 0, ${ne})`}}),M=s.G.create("elevation-shadow-card-rest-size").withDefault(4),_=s.G.create("elevation-shadow-card-hover-size").withDefault(8),b=s.G.create("elevation-shadow-card-active-size").withDefault(0),E=s.G.create("elevation-shadow-card-focus-size").withDefault(8),N=s.G.create("elevation-shadow-card-rest").withDefault(de=>T.getValueFor(de).evaluate(de,M.getValueFor(de))),B=(s.G.create("elevation-shadow-card-hover").withDefault(de=>T.getValueFor(de).evaluate(de,_.getValueFor(de))),s.G.create("elevation-shadow-card-active").withDefault(de=>T.getValueFor(de).evaluate(de,b.getValueFor(de))),s.G.create("elevation-shadow-card-focus").withDefault(de=>T.getValueFor(de).evaluate(de,E.getValueFor(de))),s.G.create("elevation-shadow-tooltip-size").withDefault(16)),S=s.G.create("elevation-shadow-tooltip").withDefault(de=>T.getValueFor(de).evaluate(de,B.getValueFor(de))),K=s.G.create("elevation-shadow-flyout-size").withDefault(32),oe=s.G.create("elevation-shadow-flyout").withDefault(de=>T.getValueFor(de).evaluate(de,K.getValueFor(de))),ve=s.G.create("elevation-shadow-dialog-size").withDefault(128),ae=s.G.create("elevation-shadow-dialog").withDefault(de=>T.getValueFor(de).evaluate(de,ve.getValueFor(de)))},5532:(at,ge,d)=>{d.d(ge,{W:()=>I,v:()=>v});var s=d(9760),c=d(9457);const I=s.L`
  outline: calc(${c.vdx} * 1px) solid ${c.WNM};
  outline-offset: calc(${c.vdx} * -1px);
`,v=s.L`
  outline: calc(${c.vdx} * 1px) solid ${c.WNM};
  outline-offset: calc(${c.XAH} * 1px);
`},6009:(at,ge,d)=>{d.d(ge,{LA:()=>S,Vw:()=>le,ZI:()=>B,_9:()=>O,ss:()=>K,wQ:()=>N});var s=d(9760),c=d(3226),I=d(8322),v=d(4932),T=d(4954),M=d(4583),_=d(9457),b=d(9709),E=d(5532);const N=(oe,ve,ae,de="[disabled]")=>s.A`
    ${(0,I.V)("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${b.Ah}
      height: calc(${M.D} * 1px);
      min-width: calc(${M.D} * 1px);
      color: ${_.lHw};
      border-radius: calc(${_.PbG} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${_.XAH} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${_.vR1} * 2 * ${_.Brd})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    .control:${v.N} {
      ${E.W}
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `,O=(oe,ve,ae,de="[disabled]")=>s.A`
    .control {
      background: padding-box linear-gradient(${_.F7s}, ${_.F7s}),
        border-box ${_.Fly};
    }

    :host(${ae}:hover) .control {
      background: padding-box linear-gradient(${_.XtK}, ${_.XtK}),
        border-box ${_.H7x};
    }

    :host(${ae}:active) .control {
      background: padding-box linear-gradient(${_.X4G}, ${_.X4G}),
        border-box ${_.FZQ};
    }

    :host(${de}) .control {
      background: padding-box linear-gradient(${_.F7s}, ${_.F7s}),
        border-box ${_.I21};
    }
  `.withBehaviors((0,T.mr)(s.A`
        .control {
          background: ${c.A.ButtonFace};
          border-color: ${c.A.ButtonText};
          color: ${c.A.ButtonText};
        }

        :host(${ae}:hover) .control,
        :host(${ae}:active) .control {
          forced-color-adjust: none;
          background: ${c.A.HighlightText};
          border-color: ${c.A.Highlight};
          color: ${c.A.Highlight};
        }

        :host(${de}) .control {
          background: transparent;
          border-color: ${c.A.GrayText};
          color: ${c.A.GrayText};
        }

        .control:${v.N} {
          outline-color: ${c.A.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${c.A.LinkText};
          color: ${c.A.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${c.A.CanvasText};
          color: ${c.A.CanvasText};
        }
    `)),le=(oe,ve,ae,de="[disabled]")=>s.A`
    .control {
      background: padding-box linear-gradient(${_.IRh}, ${_.IRh}),
        border-box ${_.enQ};
      color: ${_.l_5};
    }

    :host(${ae}:hover) .control {
      background: padding-box linear-gradient(${_.OS0}, ${_.OS0}),
        border-box ${_.eNp};
      color: ${_.XKp};
    }

    :host(${ae}:active) .control {
      background: padding-box linear-gradient(${_.amQ}, ${_.amQ}),
        border-box ${_.uB0};
      color: ${_.J_F};
    }

    :host(${de}) .control {
      background: ${_.IRh};
    }

    .control:${v.N} {
      box-shadow: 0 0 0 calc(${_.vdx} * 1px) ${_.fFd} inset !important;
    }
  `.withBehaviors((0,T.mr)(s.A`
        .control {
          forced-color-adjust: none;
          background: ${c.A.Highlight};
          color: ${c.A.HighlightText};
        }

        :host(${ae}:hover) .control,
        :host(${ae}:active) .control {
          background: ${c.A.HighlightText};
          border-color: ${c.A.Highlight};
          color: ${c.A.Highlight};
        }

        :host(${de}) .control {
          background: transparent;
          border-color: ${c.A.GrayText};
          color: ${c.A.GrayText};
        }

        .control:${v.N} {
          outline-color: ${c.A.CanvasText};
          box-shadow: 0 0 0 calc(${_.vdx} * 1px) ${c.A.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${c.A.LinkText};
          color: ${c.A.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${c.A.ButtonFace};
          border-color: ${c.A.LinkText};
          color: ${c.A.LinkText};
        }
      `)),B=(oe,ve,ae,de="[disabled]")=>s.A`
    :host {
      color: ${_.W_m};
    }

    .control {
      background: ${_.WlO};
    }

    :host(${ae}:hover) .control {
      background: ${_.oO8};
      color: ${_.YLI};
    }

    :host(${ae}:active) .control {
      background: ${_.wOW};
      color: ${_.QL0};
    }

    :host(${de}) .control {
      background: ${_.WlO};
    }
  `.withBehaviors((0,T.mr)(s.A`
        :host {
          color: ${c.A.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${ae}:hover) .control,
        :host(${ae}:active) .control {
          background: transparent;
          border-color: ${c.A.ButtonText};
          color: ${c.A.ButtonText};
        }

        :host(${de}) .control {
          background: transparent;
          color: ${c.A.GrayText};
        }

        .control:${v.N} {
          outline-color: ${c.A.CanvasText};
        }

        :host([href]) .control {
          color: ${c.A.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${c.A.LinkText};
          color: ${c.A.LinkText};
        }
      `)),S=(oe,ve,ae,de="[disabled]")=>s.A`
    .control {
      background: transparent !important;
      border-color: ${_.I21};
    }

    :host(${ae}:hover) .control {
      border-color: ${_.mbK};
    }

    :host(${ae}:active) .control {
      border-color: ${_.MYG};
    }

    :host(${de}) .control {
      background: transparent !important;
      border-color: ${_.I21};
    }
  `.withBehaviors((0,T.mr)(s.A`
        .control {
          border-color: ${c.A.ButtonText};
          color: ${c.A.ButtonText};
        }

        :host(${ae}:hover) .control,
        :host(${ae}:active) .control {
          background: ${c.A.HighlightText};
          border-color: ${c.A.Highlight};
          color: ${c.A.Highlight};
        }

        :host(${de}) .control {
          border-color: ${c.A.GrayText};
          color: ${c.A.GrayText};
        }

        .control:${v.N} {
          outline-color: ${c.A.CanvasText};
        }

        :host([href]) .control {
          border-color: ${c.A.LinkText};
          color: ${c.A.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${c.A.CanvasText};
          color: ${c.A.CanvasText};
        }
      `)),K=(oe,ve,ae,de="[disabled]")=>s.A`
    .control {
      background: ${_.WlO};
    }

    :host(${ae}:hover) .control {
      background: ${_.oO8};
    }

    :host(${ae}:active) .control {
      background: ${_.wOW};
    }

    :host(${de}) .control {
      background: ${_.WlO};
    }
  `.withBehaviors((0,T.mr)(s.A`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${c.A.ButtonText};
        }

        :host(${ae}:hover) .control,
        :host(${ae}:active) .control {
          background: transparent;
          border-color: ${c.A.ButtonText};
          color: ${c.A.ButtonText};
        }

        :host(${de}) .control {
          background: transparent;
          color: ${c.A.GrayText};
        }
        
        .control:${v.N} {
          outline-color: ${c.A.CanvasText};
        }

        :host([href]) .control {
          color: ${c.A.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${c.A.LinkText};
          color: ${c.A.LinkText};
        }
      `))},3928:(at,ge,d)=>{d.d(ge,{Tv:()=>S,aB:()=>V,dM:()=>K,lb:()=>oe,y$:()=>B});var s=d(9760),c=d(1859),I=d(5778),v=d(3226),T=d(9457),M=d(9709),_=d(4583),b=d(5532);const E=c.G.create("input-placeholder-rest").withDefault(ve=>{const ae=T.VYG.getValueFor(ve);return T.g8A.getValueFor(ve).evaluate(ve,ae.evaluate(ve).rest)}),N=c.G.create("input-placeholder-hover").withDefault(ve=>{const ae=T.VYG.getValueFor(ve);return T.g8A.getValueFor(ve).evaluate(ve,ae.evaluate(ve).hover)}),O=c.G.create("input-filled-placeholder-rest").withDefault(ve=>{const ae=T.jIq.getValueFor(ve);return T.g8A.getValueFor(ve).evaluate(ve,ae.evaluate(ve).rest)}),le=c.G.create("input-filled-placeholder-hover").withDefault(ve=>{const ae=T.jIq.getValueFor(ve);return T.g8A.getValueFor(ve).evaluate(ve,ae.evaluate(ve).hover)}),V=(ve,ae,de)=>s.A`
  :host {
    ${M.Ah}
    color: ${T.lHw};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${de} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${T.XAH} * 1px) solid transparent;
    border-radius: calc(${T.PbG} * 1px);
    height: calc(${_.D} * 1px);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .control {
    width: 100%;
    outline: none;
  }

  .label {
    display: block;
    color: ${T.lHw};
    cursor: pointer;
    ${M.Ah}
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host([disabled]) ${de},
  :host([readonly]) ${de},
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${I.Z};
  }

  :host([disabled]) {
    opacity: ${T.qB4};
  }
`,B=(ve,ae,de)=>s.A`
  @media (forced-colors: none) {
    :host(:not([disabled]):active)::after {
      left: 50%;
      width: 40%;
      transform: translateX(-50%);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(:not([disabled]):focus-within)::after {
      left: 0;
      width: 100%;
      transform: none;
    }

    :host(:not([disabled]):active)::after,
    :host(:not([disabled]):focus-within:not(:active))::after {
      content: '';
      position: absolute;
      height: calc(${T.vdx} * 1px);
      bottom: 0;
      border-bottom: calc(${T.vdx} * 1px) solid ${T.IRh};
      border-bottom-left-radius: calc(${T.PbG} * 1px);
      border-bottom-right-radius: calc(${T.PbG} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,S=(ve,ae,de,W=":not([disabled]):not(:focus-within)")=>s.A`
  ${de} {
    background: padding-box linear-gradient(${T.leE}, ${T.leE}),
      border-box ${T.o_b};
  }

  :host(${W}:hover) ${de} {
    background: padding-box linear-gradient(${T.jMl}, ${T.jMl}),
      border-box ${T.WvW};
  }

  :host(:not([disabled]):focus-within) ${de} {
    background: padding-box linear-gradient(${T.F_x}, ${T.F_x}),
      border-box ${T.o_b};
  }
  
  :host([disabled]) ${de} {
    background: padding-box linear-gradient(${T.leE}, ${T.leE}),
      border-box ${T.I21};
  }

  .control::placeholder {
    color: ${E};
  }

  :host(${W}:hover) .control::placeholder {
    color: ${N};
  }
`,K=(ve,ae,de,W=":not([disabled]):not(:focus-within)")=>s.A`
  ${de} {
    background: ${T.v8G};
  }

  :host(${W}:hover) ${de} {
    background: ${T.Rgz};
  }

  :host(:not([disabled]):focus-within) ${de} {
    background: ${T.Vtk};
  }

  :host([disabled]) ${de} {
    background: ${T.v8G};
  }

  .control::placeholder {
    color: ${O};
  }

  :host(${W}:hover) .control::placeholder {
    color: ${le};
  }
`,oe=(ve,ae,de,W=":not([disabled]):not(:focus-within)")=>s.A`
  :host {
    color: ${v.A.ButtonText};
  }

  ${de} {
    background: ${v.A.ButtonFace};
    border-color: ${v.A.ButtonText};
  }

  :host(${W}:hover) ${de},
  :host(:not([disabled]):focus-within) ${de} {
    border-color: ${v.A.Highlight};
  }

  :host([disabled]) ${de} {
    opacity: 1;
    background: ${v.A.ButtonFace};
    border-color: ${v.A.GrayText};
  }

  .control::placeholder,
  :host(${W}:hover) .control::placeholder {
    color: ${v.A.CanvasText};
  }

  :host(:not([disabled]):focus) ${de} {
    ${b.W}
    outline-color: ${v.A.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${v.A.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${v.A.GrayText};
  }
`},9709:(at,ge,d)=>{d.d(ge,{Ah:()=>I});var s=d(9760),c=d(9457);const I=s.L`
  font-family: ${c.OCo};
  font-size: ${c.Kgr};
  line-height: ${c.Z69};
  font-weight: initial;
  font-variation-settings: ${c.$AV};
`;s.L`
  font-family: ${c.OCo};
  font-size: ${c.kSN};
  line-height: ${c.FrF};
  font-weight: initial;
  font-variation-settings: ${c.dUM};
`,s.L`
  font-family: ${c.OCo};
  font-size: ${c.tDF};
  line-height: ${c.e9J};
  font-weight: initial;
  font-variation-settings: ${c.wxg};
`,s.L`
  font-family: ${c.OCo};
  font-size: ${c.YVy};
  line-height: ${c.vrI};
  font-weight: initial;
  font-variation-settings: ${c.BZ8};
`,s.L`
  font-family: ${c.OCo};
  font-size: ${c.TFp};
  line-height: ${c.Oc7};
  font-weight: initial;
  font-variation-settings: ${c.Knw};
`,s.L`
  font-family: ${c.OCo};
  font-size: ${c.aVA};
  line-height: ${c.bcZ};
  font-weight: initial;
  font-variation-settings: ${c.PPT};
`,s.L`
  font-family: ${c.OCo};
  font-size: ${c.FrW};
  line-height: ${c.weJ};
  font-weight: initial;
  font-variation-settings: ${c.onW};
`,s.L`
  font-family: ${c.OCo};
  font-size: ${c._UC};
  line-height: ${c.Z67};
  font-weight: initial;
  font-variation-settings: ${c.x3P};
`,s.L`
  font-family: ${c.OCo};
  font-size: ${c.X7g};
  line-height: ${c.uwi};
  font-weight: initial;
  font-variation-settings: ${c.Ygb};
`},4583:(at,ge,d)=>{d.d(ge,{D:()=>I});var s=d(9760),c=d(9457);const I=s.L`(${c.Sss} + ${c.Brd}) * ${c.vR1}`},8955:(at,ge,d)=>{d.d(ge,{oR:()=>ee});var s=d(1635),c=d(9808),I=d(742),v=d(7788),T=d(4192),M=d(1230),_=d(9605),b=d(6105),E=d(8746),N=d(4632);class O extends N.g{}class le extends((0,E.rf)(O)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let B=(()=>{class me extends le{constructor(){super(...arguments),this.type="text"}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&v.dv.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}return(0,I.Cg)([(0,c.CF)({attribute:"readonly",mode:"boolean"})],me.prototype,"readOnly",void 0),(0,I.Cg)([(0,c.CF)({mode:"boolean"})],me.prototype,"autofocus",void 0),(0,I.Cg)([c.CF],me.prototype,"placeholder",void 0),(0,I.Cg)([c.CF],me.prototype,"type",void 0),(0,I.Cg)([c.CF],me.prototype,"list",void 0),(0,I.Cg)([(0,c.CF)({converter:c.R$})],me.prototype,"maxlength",void 0),(0,I.Cg)([(0,c.CF)({converter:c.R$})],me.prototype,"minlength",void 0),(0,I.Cg)([c.CF],me.prototype,"pattern",void 0),(0,I.Cg)([(0,c.CF)({converter:c.R$})],me.prototype,"size",void 0),(0,I.Cg)([(0,c.CF)({mode:"boolean"})],me.prototype,"spellcheck",void 0),(0,I.Cg)([T.sH],me.prototype,"defaultSlottedNodes",void 0),me})();class S{}(0,b.X)(S,M.z),(0,b.X)(B,_.qw,S);var K=d(9953),oe=d(633),ve=d(1589),ae=d(7412),W=d(9760),$=d(8322),J=d(4954),ne=d(3928),G=d(2622),ue=d(9457);const q=".root",ee=(()=>{class me extends B{appearanceChanged(Ue,it){Ue!==it&&(this.classList.add(it),this.classList.remove(Ue))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}return(0,s.Cg)([c.CF],me.prototype,"appearance",void 0),me})().compose({baseName:"text-field",baseClass:B,template:(me,ze)=>K.q`
    <template
        class="
            ${Ue=>Ue.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${Ue=>Ue.defaultSlottedNodes&&Ue.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${(0,oe.e)({property:"defaultSlottedNodes",filter:ae.g})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${(0,_.LT)(me,ze)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${Ue=>Ue.handleTextInput()}"
                @change="${Ue=>Ue.handleChange()}"
                ?autofocus="${Ue=>Ue.autofocus}"
                ?disabled="${Ue=>Ue.disabled}"
                list="${Ue=>Ue.list}"
                maxlength="${Ue=>Ue.maxlength}"
                minlength="${Ue=>Ue.minlength}"
                pattern="${Ue=>Ue.pattern}"
                placeholder="${Ue=>Ue.placeholder}"
                ?readonly="${Ue=>Ue.readOnly}"
                ?required="${Ue=>Ue.required}"
                size="${Ue=>Ue.size}"
                ?spellcheck="${Ue=>Ue.spellcheck}"
                :value="${Ue=>Ue.value}"
                type="${Ue=>Ue.type}"
                aria-atomic="${Ue=>Ue.ariaAtomic}"
                aria-busy="${Ue=>Ue.ariaBusy}"
                aria-controls="${Ue=>Ue.ariaControls}"
                aria-current="${Ue=>Ue.ariaCurrent}"
                aria-describedby="${Ue=>Ue.ariaDescribedby}"
                aria-details="${Ue=>Ue.ariaDetails}"
                aria-disabled="${Ue=>Ue.ariaDisabled}"
                aria-errormessage="${Ue=>Ue.ariaErrormessage}"
                aria-flowto="${Ue=>Ue.ariaFlowto}"
                aria-haspopup="${Ue=>Ue.ariaHaspopup}"
                aria-hidden="${Ue=>Ue.ariaHidden}"
                aria-invalid="${Ue=>Ue.ariaInvalid}"
                aria-keyshortcuts="${Ue=>Ue.ariaKeyshortcuts}"
                aria-label="${Ue=>Ue.ariaLabel}"
                aria-labelledby="${Ue=>Ue.ariaLabelledby}"
                aria-live="${Ue=>Ue.ariaLive}"
                aria-owns="${Ue=>Ue.ariaOwns}"
                aria-relevant="${Ue=>Ue.ariaRelevant}"
                aria-roledescription="${Ue=>Ue.ariaRoledescription}"
                ${(0,ve.K)("control")}
            />
            ${(0,_.aO)(me,ze)}
        </div>
    </template>
`,styles:(me,ze)=>W.A`
    ${(0,$.V)("inline-block")}

    ${(0,ne.aB)(me,ze,q)}

    ${(0,ne.y$)(me,ze,q)}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${ue.vR1} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }
  `.withBehaviors((0,G.f)("outline",(0,ne.Tv)(me,ze,q)),(0,G.f)("filled",(0,ne.dM)(me,ze,q)),(0,J.mr)((0,ne.lb)(me,ze,q))),shadowOptions:{delegatesFocus:!0}})},2622:(at,ge,d)=>{d.d(ge,{f:()=>I});var s=d(4192);class c{constructor(T,M,_){this.propertyName=T,this.value=M,this.styles=_}bind(T){s.cP.getNotifier(T).subscribe(this,this.propertyName),this.handleChange(T,this.propertyName)}unbind(T){s.cP.getNotifier(T).unsubscribe(this,this.propertyName),T.$fastController.removeStyles(this.styles)}handleChange(T,M){T[M]===this.value?T.$fastController.addStyles(this.styles):T.$fastController.removeStyles(this.styles)}}function I(v,T){return new c("appearance",v,T)}},54:(at,ge,d)=>{d.d(ge,{e:()=>I});const s=["none","hover","click"],I=(v,T="none")=>(v=>"string"==typeof v&&s.includes(v))(v)?v:T},8072:(at,ge,d)=>{d.d(ge,{R:()=>zr,x:()=>Cr});var s=d(2578),c=d(4709),I=d(4569),v=d(6885),T=d(8324),M=d(9559),_=d(4229),b=d(7768),E=d(2710),N=d(8360);const O=[T.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{font-size:var(--default-font-size)}:host .title{font-size:14px;font-weight:600;padding:20px 0 12px;line-height:19px}:host .file-list-wrapper{background-color:var(--file-list-background-color,var(--neutral-layer-floating));border:var(--file-list-border,none);position:relative;display:flex;flex-direction:column;border-radius:8px}:host .file-list-wrapper .title{font-size:14px;font-weight:600;margin:0 20px -15px}:host .file-list-wrapper .file-list{display:flex;padding:var(--file-list-padding,0);margin:var(--file-list-margin,0);flex-direction:column;list-style:none}:host .file-list-wrapper .file-list .file-item{cursor:pointer;border-radius:var(--file-border-radius)}:host .file-list-wrapper .file-list .file-item:focus,:host .file-list-wrapper .file-list .file-item:focus-within{--file-background-color:var(--file-background-color-focus, var(--neutral-layer-2))}:host .file-list-wrapper .file-list .file-item.selected{--file-background-color:var(--file-background-color-active, var(--neutral-layer-3))}:host .file-list-wrapper .file-list .file-item .mgt-file-item{--file-padding:10px 20px 10px 20px;--file-padding-inline-start:24px;--file-border-radius:2px;--file-background-color:var(--file-item-background-color, var(--neutral-layer-1))}:host .file-list-wrapper .progress-ring{margin:4px auto;width:var(--progress-ring-size,24px);height:var(--progress-ring-size,24px)}:host .file-list-wrapper .show-more{text-align:center;font-size:var(--show-more-button-font-size, 12px);padding:var(--show-more-button-padding,0);border-radius:0 0 var(--show-more-button-border-bottom-right-radius,var(--file-list-border-radius,8px)) var(--show-more-button-border-bottom-left-radius,var(--file-list-border-radius,8px));background-color:var(--show-more-button-background-color,var(--neutral-stroke-divider-rest))}:host .file-list-wrapper .show-more:hover{background-color:var(--show-more-button-background-color-hover,var(--neutral-fill-input-alt-active))}:host .file-list-wrapper .show-more-text{font-size:var(--show-more-button-font-size, 12px)}
`],le={showMoreSubtitle:"Show more items",filesSectionTitle:"Files",sharedTextSubtitle:"Shared"};var V=d(9569),B=d(862),S=d(9953),K=d(8287),ve=d(9760),ae=d(3226),de=d(8322),W=d(4954),$=d(9457);const G=class ne extends B.z{}.compose({baseName:"progress",template:(Bt,bt)=>S.q`
    <template
        role="progressbar"
        aria-valuenow="${Fe=>Fe.value}"
        aria-valuemin="${Fe=>Fe.min}"
        aria-valuemax="${Fe=>Fe.max}"
        class="${Fe=>Fe.paused?"paused":""}"
    >
        ${(0,K.z)(Fe=>"number"==typeof Fe.value,S.q`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${Fe=>Fe.percentComplete}%"
                    ></div>
                </div>
            `,S.q`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${bt.indeterminateIndicator1||""}
                        ${bt.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,styles:(Bt,bt)=>ve.A`
    ${(0,de.V)("flex")} :host {
      align-items: center;
      height: calc((${$.XAH} * 3) * 1px);
    }

    .progress {
      background-color: ${$.nF5};
      border-radius: calc(${$.vR1} * 1px);
      width: 100%;
      height: calc(${$.XAH} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${$.IRh};
      border-radius: calc(${$.vR1} * 1px);
      height: calc((${$.XAH} * 3) * 1px);
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: calc((${$.XAH} * 3) * 1px);
      border-radius: calc(${$.vR1} * 1px);
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .indeterminate-indicator-1 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${$.IRh};
      border-radius: calc(${$.vR1} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${$.IRh};
      border-radius: calc(${$.vR1} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${$.cRz};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${$.cRz};
    }

    @keyframes indeterminate-1 {
      0% {
        opacity: 1;
        transform: translateX(-100%);
      }
      70% {
        opacity: 1;
        transform: translateX(300%);
      }
      70.01% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        transform: translateX(300%);
      }
    }

    @keyframes indeterminate-2 {
      0% {
        opacity: 0;
        transform: translateX(-150%);
      }
      29.99% {
        opacity: 0;
      }
      30% {
        opacity: 1;
        transform: translateX(-150%);
      }
      100% {
        transform: translateX(166.66%);
        opacity: 1;
      }
    }
  `.withBehaviors((0,W.mr)(ve.A`
        .indeterminate-indicator-1,
        .indeterminate-indicator-2,
        .determinate,
        .progress {
          background-color: ${ae.A.ButtonText};
        }
        :host(.paused) .indeterminate-indicator-1,
        :host(.paused) .indeterminate-indicator-2,
        :host(.paused) .determinate {
          background-color: ${ae.A.GrayText};
        }
      `)),indeterminateIndicator1:'\n    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>\n  ',indeterminateIndicator2:'\n    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>\n  '});var q=d(7043),F=d(9684),P=d(742),ee=d(7788),Z=d(4192),me=d(9808),ze=d(7153),it=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"].join(","),Me=typeof Element>"u",re=Me?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Oe=!Me&&Element.prototype.getRootNode?function(Bt){return Bt.getRootNode()}:function(Bt){return Bt.ownerDocument},se=function(bt){return"INPUT"===bt.tagName},lt=function(bt){var Fe=bt.getBoundingClientRect();return 0===Fe.width&&0===Fe.height},j=function(bt,Fe){return!(function(bt){return function(bt){return se(bt)&&"radio"===bt.type}(bt)&&!function(bt){if(!bt.name)return!0;var $t,Fe=bt.form||Oe(bt),dt=function(Qt){return Fe.querySelectorAll('input[type="radio"][name="'+Qt+'"]')};if(typeof window<"u"&&typeof window.CSS<"u"&&"function"==typeof window.CSS.escape)$t=dt(window.CSS.escape(bt.name));else try{$t=dt(bt.name)}catch(Vt){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",Vt.message),!1}var Wt=function(bt,Fe){for(var dt=0;dt<bt.length;dt++)if(bt[dt].checked&&bt[dt].form===Fe)return bt[dt]}($t,bt.form);return!Wt||Wt===bt}(bt)}(Fe)||function(bt,Fe){return bt.tabIndex<0&&(Fe||/^(AUDIO|VIDEO|DETAILS)$/.test(bt.tagName)||bt.isContentEditable)&&isNaN(parseInt(bt.getAttribute("tabindex"),10))?0:bt.tabIndex}(Fe)<0||!function(bt,Fe){return!(Fe.disabled||function(bt){return se(bt)&&"hidden"===bt.type}(Fe)||function(bt,Fe){var dt=Fe.displayCheck,$t=Fe.getShadowRoot;if("hidden"===getComputedStyle(bt).visibility)return!0;var Wt=re.call(bt,"details>summary:first-of-type");if(re.call(Wt?bt.parentElement:bt,"details:not([open]) *"))return!0;var Qt=Oe(bt).host,$n=Qt?.ownerDocument.contains(Qt)||bt.ownerDocument.contains(bt);if(dt&&"full"!==dt){if("non-zero-area"===dt)return lt(bt)}else{if("function"==typeof $t){for(var Cn=bt;bt;){var In=bt.parentElement,hi=Oe(bt);if(In&&!In.shadowRoot&&!0===$t(In))return lt(bt);bt=bt.assignedSlot?bt.assignedSlot:In||hi===bt.ownerDocument?In:hi.host}bt=Cn}if($n)return!bt.getClientRects().length}return!1}(Fe,bt)||function(bt){return"DETAILS"===bt.tagName&&Array.prototype.slice.apply(bt.children).some(function(dt){return"SUMMARY"===dt.tagName})}(Fe)||function(bt){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(bt.tagName))for(var Fe=bt.parentElement;Fe;){if("FIELDSET"===Fe.tagName&&Fe.disabled){for(var dt=0;dt<Fe.children.length;dt++){var $t=Fe.children.item(dt);if("LEGEND"===$t.tagName)return!!re.call(Fe,"fieldset[disabled] *")||!$t.contains(bt)}return!0}Fe=Fe.parentElement}return!1}(Fe))}(bt,Fe))},ot=function(bt,Fe){if(Fe=Fe||{},!bt)throw new Error("No node provided");return!1!==re.call(bt,it)&&j(Fe,bt)},Je=d(4632);let Gt=(()=>{class Bt extends Je.g{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=Fe=>{if(!Fe.defaultPrevented&&!this.hidden)switch(Fe.key){case ze.F9:this.dismiss(),Fe.preventDefault();break;case ze.J9:this.handleTabKeyDown(Fe)}},this.handleDocumentFocus=Fe=>{!Fe.defaultPrevented&&this.shouldForceFocus(Fe.target)&&(this.focusFirstElement(),Fe.preventDefault())},this.handleTabKeyDown=Fe=>{if(!this.trapFocus||this.hidden)return;const dt=this.getTabQueueBounds();if(0!==dt.length){if(1===dt.length)return dt[0].focus(),void Fe.preventDefault();Fe.shiftKey&&Fe.target===dt[0]?(dt[dt.length-1].focus(),Fe.preventDefault()):!Fe.shiftKey&&Fe.target===dt[dt.length-1]&&(dt[0].focus(),Fe.preventDefault())}},this.getTabQueueBounds=()=>Bt.reduceTabbableItems([],this),this.focusFirstElement=()=>{const Fe=this.getTabQueueBounds();Fe.length>0?Fe[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=Fe=>this.isTrappingFocus&&!this.contains(Fe),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=Fe=>{const dt=void 0===Fe?this.shouldTrapFocus():Fe;dt&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),ee.dv.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!dt&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=Z.cP.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(Fe,dt){"hidden"===dt&&this.updateTrapFocus()}static reduceTabbableItems(Fe,dt){return"-1"===dt.getAttribute("tabindex")?Fe:ot(dt)||Bt.isFocusableFastElement(dt)&&Bt.hasTabbableShadow(dt)?(Fe.push(dt),Fe):dt.childElementCount?Fe.concat(Array.from(dt.children).reduce(Bt.reduceTabbableItems,[])):Fe}static isFocusableFastElement(Fe){var dt,$t;return!(null===($t=null===(dt=Fe.$fastController)||void 0===dt?void 0:dt.definition.shadowOptions)||void 0===$t||!$t.delegatesFocus)}static hasTabbableShadow(Fe){var dt,$t;return Array.from(null!==($t=null===(dt=Fe.shadowRoot)||void 0===dt?void 0:dt.querySelectorAll("*"))&&void 0!==$t?$t:[]).some(Wt=>ot(Wt))}}return(0,P.Cg)([(0,me.CF)({mode:"boolean"})],Bt.prototype,"modal",void 0),(0,P.Cg)([(0,me.CF)({mode:"boolean"})],Bt.prototype,"hidden",void 0),(0,P.Cg)([(0,me.CF)({attribute:"trap-focus",mode:"boolean"})],Bt.prototype,"trapFocus",void 0),(0,P.Cg)([(0,me.CF)({attribute:"aria-describedby"})],Bt.prototype,"ariaDescribedby",void 0),(0,P.Cg)([(0,me.CF)({attribute:"aria-labelledby"})],Bt.prototype,"ariaLabelledby",void 0),(0,P.Cg)([(0,me.CF)({attribute:"aria-label"})],Bt.prototype,"ariaLabel",void 0),Bt})();var tn=d(1589),Dn=d(2783);const Ei=Gt.compose({baseName:"dialog",template:(Bt,bt)=>S.q`
    <div class="positioning-region" part="positioning-region">
        ${(0,K.z)(Fe=>Fe.modal,S.q`
                <div
                    class="overlay"
                    part="overlay"
                    role="presentation"
                    @click="${Fe=>Fe.dismiss()}"
                ></div>
            `)}
        <div
            role="dialog"
            tabindex="-1"
            class="control"
            part="control"
            aria-modal="${Fe=>Fe.modal}"
            aria-describedby="${Fe=>Fe.ariaDescribedby}"
            aria-labelledby="${Fe=>Fe.ariaLabelledby}"
            aria-label="${Fe=>Fe.ariaLabel}"
            ${(0,tn.K)("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`,styles:(Bt,bt)=>ve.A`
  :host([hidden]) {
    display: none;
  }

  :host {
    --dialog-height: 480px;
    --dialog-width: 640px;
    display: block;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    touch-action: none;
  }

  .positioning-region {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }

  .control {
    box-shadow: ${Dn.Cw};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${$.JUW} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${$.pfK};
    z-index: 1;
    border: calc(${$.XAH} * 1px) solid transparent;
  }
`});var fi=d(9451),Ln=d(3402),On=d(3601),Fi=d(3173);const Kn=[T.AH`
:host .file-upload-area-button{width:auto;display:flex;align-items:end;justify-content:end;margin-inline-end:36px;margin-top:30px}:host fluent-button .upload-icon path{fill:var(--file-upload-button-text-color,var(--foreground-on-accent-rest))}:host fluent-button.file-upload-button::part(control){border:var(--file-upload-button-border,none);background:var(--file-upload-button-background-color,var(--accent-fill-rest))}:host fluent-button.file-upload-button::part(control):hover{background:var(--file-upload-button-background-color-hover,var(--accent-fill-hover))}:host fluent-button.file-upload-button .upload-text{color:var(--file-upload-button-text-color,var(--foreground-on-accent-rest));font-weight:400;line-height:20px}:host input{display:none}:host fluent-progress.file-upload-bar{width:180px;margin-top:10px}:host fluent-dialog::part(overlay){opacity:.5}:host fluent-dialog::part(control){--dialog-width:$file-upload-dialog-width;--dialog-height:$file-upload-dialog-height;padding:var(--file-upload-dialog-padding,24px);border:var(--file-upload-dialog-border,1px solid var(--neutral-fill-rest))}:host fluent-dialog .file-upload-dialog-ok{background:var(--file-upload-dialog-keep-both-button-background-color,var(--accent-fill-rest));border:var(--file-upload-dialog-keep-both-button-border,none);color:var(--file-upload-dialog-keep-both-button-text-color,var(--foreground-on-accent-rest))}:host fluent-dialog .file-upload-dialog-ok:hover{background:var(--file-upload-dialog-keep-both-button-background-color-hover,var(--accent-fill-hover))}:host fluent-dialog .file-upload-dialog-cancel{background:var(--file-upload-dialog-replace-button-background-color,var(--accent-fill-rest));border:var(--file-upload-dialog-replace-button-border,1px solid var(--neutral-foreground-rest));color:var(--file-upload-dialog-replace-button-text-color,var(--neutral-foreground-rest))}:host fluent-dialog .file-upload-dialog-cancel:hover{background:var(--file-upload-dialog-replace-button-background-color-hover,var(--accent-fill-hover))}:host fluent-checkbox{margin-top:12px}:host fluent-checkbox .file-upload-dialog-check{color:var(--file-upload-dialog-text-color,--foreground-on-accent-rest)}:host .file-upload-table{display:flex}:host .file-upload-table.upload{display:flex}:host .file-upload-table .file-upload-cell{padding:1px 0 1px 1px;display:table-cell;vertical-align:middle;position:relative}:host .file-upload-table .file-upload-cell.percent-indicator{padding-inline-start:10px}:host .file-upload-table .file-upload-cell .description{opacity:.5;position:relative}:host .file-upload-table .file-upload-cell .file-upload-filename{max-width:250px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .file-upload-table .file-upload-cell .file-upload-status{position:absolute;left:28px}:host .file-upload-table .file-upload-cell .file-upload-cancel{cursor:pointer;margin-inline-start:20px}:host .file-upload-table .file-upload-cell .file-upload-name{width:auto}:host .file-upload-table .file-upload-cell .cancel-icon{fill:var(--file-upload-dialog-text-color,var(--neutral-foreground-rest))}:host .mgt-file-item{--file-background-color:transparent;--file-padding:0 12px;--file-padding-inline-start:24px}:host .file-upload-template{clear:both}:host .file-upload-template .file-upload-folder-tab{padding-inline-start:20px}:host .file-upload-dialog{display:none}:host .file-upload-dialog .file-upload-dialog-content{background-color:var(--file-upload-dialog-background-color,var(--accent-fill-rest));color:var(--file-upload-dialog-text-color,var(--neutral-foreground-rest))}:host .file-upload-dialog .file-upload-dialog-content-text{margin-bottom:36px}:host .file-upload-dialog .file-upload-dialog-title{margin-top:0}:host .file-upload-dialog .file-upload-dialog-editor{display:flex;align-items:end;justify-content:end;gap:5px}:host .file-upload-dialog .file-upload-dialog-close{float:right;cursor:pointer}:host .file-upload-dialog .file-upload-dialog-close svg{fill:var(--file-upload-dialog-text-color,var(--neutral-foreground-rest));padding-right:5px}:host .file-upload-dialog.visible{display:block}:host fluent-checkbox.file-upload-dialog-check.hide{display:none}:host .file-upload-dialog-success{cursor:pointer;opacity:.5}:host #file-upload-border{display:none}:host #file-upload-border.visible{border:var(--file-upload-border-drag,1px dashed #0078d4);background-color:var(--file-upload-background-color-drag,rgba(0,120,212,.1));position:absolute;inset:0;z-index:1;display:inline-block}[dir=rtl] :host .file-upload-status{left:0;right:28px}@media (forced-colors:active){:host fluent-button .upload-icon path{fill:highlighttext}:host fluent-button.file-upload-button::part(control){border-width:1px;border-style:solid;border-color:buttontext;background:highlight}:host fluent-button.file-upload-button::part(control):hover{background:highlighttext;border-color:highlight}:host fluent-button.file-upload-button .upload-text{color:highlighttext}:host fluent-button:hover .upload-icon path{fill:highlight}:host fluent-button:hover.file-upload-button::part(control){border-color:highlight;background:highlighttext}:host fluent-button:hover.file-upload-button .upload-text{color:highlight}}
`],Mn={failUploadFile:"File upload fail.",cancelUploadFile:"File cancel.",buttonUploadFile:"Upload Files",maximumFilesTitle:"Maximum files",maximumFiles:"Sorry, the maximum number of files you can upload at once is {MaxNumber}. Do you want to upload the first {MaxNumber} files or reselect?",maximumFileSizeTitle:"Maximum files size",maximumFileSize:'Sorry, the maximum file size to upload is {FileSize}. The file "{FileName}" has ',fileTypeTitle:"File type",fileType:'Sorry, the format of following file "{FileName}" cannot be uploaded.',checkAgain:"Don't show again",checkApplyAll:"Apply to all",buttonOk:"OK",buttonCancel:"Cancel",buttonUpload:"Upload",buttonKeep:"Keep both",buttonReplace:"Replace",buttonReselect:"Reselect",fileReplaceTitle:"Replace file",fileReplace:'Do you want to replace the file "{FileName}" or keep both files?',uploadButtonLabel:"File upload button"};var yi=d(8940),ji=function(Bt,bt,Fe,dt){var Vt,$t=arguments.length,Wt=$t<3?bt:null===dt?dt=Object.getOwnPropertyDescriptor(bt,Fe):dt;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Bt,bt,Fe,dt);else for(var Qt=Bt.length-1;Qt>=0;Qt--)(Vt=Bt[Qt])&&(Wt=($t<3?Vt(Wt):$t>3?Vt(bt,Fe,Wt):Vt(bt,Fe))||Wt);return $t>3&&Wt&&Object.defineProperty(bt,Fe,Wt),Wt},zi=function(Bt,bt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(Bt,bt)},gt=function(Bt,bt,Fe,dt){return new(Fe||(Fe=Promise))(function(Wt,Vt){function Qt(In){try{Cn(dt.next(In))}catch(hi){Vt(hi)}}function $n(In){try{Cn(dt.throw(In))}catch(hi){Vt(hi)}}function Cn(In){In.done?Wt(In.value):function $t(Wt){return Wt instanceof Fe?Wt:new Fe(function(Vt){Vt(Wt)})}(In.value).then(Qt,$n)}Cn((dt=dt.apply(Bt,bt||[])).next())})};const _t=Bt=>Bt.isDirectory,ft=Bt=>"getAsEntry"in Bt&&"function"==typeof Bt.getAsEntry,qt=Bt=>"getAsFile"in Bt&&"function"==typeof Bt.getAsFile||"webkitGetAsEntry"in Bt&&"function"==typeof Bt.webkitGetAsEntry,Un=Bt=>Bt?.length>1?"replace"===Bt[1]?"replace":"rename":null;let At=(()=>{class Bt extends fi.D{static get styles(){return Kn}get strings(){return Mn}static get requiredScopes(){return[...new Set(["files.readwrite","files.readwrite.all","sites.readwrite.all"])]}get _dropEffect(){return"copy"}constructor(){super(),this._dragCounter=0,this._maxChunkSize=4194304,this._dialogTitle="",this._dialogContent="",this._dialogPrimaryButton="",this._dialogSecondaryButton="",this._dialogCheckBox="",this._applyAll=!1,this._applyAllConflictBehavior=null,this._maximumFileSize=!1,this._excludedFileType=!1,this.onFileUploadChange=Fe=>{const dt=Fe.target;!Fe||dt.files.length<1||this.readUploadedFiles(dt.files,()=>dt.value=null)},this.onFileUploadClick=()=>{this.renderRoot.querySelector("#file-upload-input").click()},this.handleonDragOver=Fe=>{Fe.preventDefault(),Fe.stopPropagation(),Fe.dataTransfer.items&&Fe.dataTransfer.items.length>0&&(Fe.dataTransfer.dropEffect=Fe.dataTransfer.dropEffect=this._dropEffect)},this.handleonDragEnter=Fe=>{Fe.preventDefault(),Fe.stopPropagation(),this._dragCounter++,Fe.dataTransfer.items&&Fe.dataTransfer.items.length>0&&(Fe.dataTransfer.dropEffect=this._dropEffect,this.renderRoot.querySelector("#file-upload-border").classList.add("visible"))},this.handleonDragLeave=Fe=>{Fe.preventDefault(),Fe.stopPropagation(),this._dragCounter--,0===this._dragCounter&&this.renderRoot.querySelector("#file-upload-border").classList.remove("visible")},this.handleonDrop=Fe=>{var dt;Fe.preventDefault(),Fe.stopPropagation(),this.renderRoot.querySelector("#file-upload-border").classList.remove("visible"),!(null===(dt=Fe.dataTransfer)||void 0===dt)&&dt.items&&this.readUploadedFiles(Fe.dataTransfer.items,()=>{Fe.dataTransfer.clearData()}),this._dragCounter=0},this.filesToUpload=[]}render(){if(null!==this.parentElement){const Fe=this.parentElement;Fe.addEventListener("dragenter",this.handleonDragEnter),Fe.addEventListener("dragleave",this.handleonDragLeave),Fe.addEventListener("dragover",this.handleonDragOver),Fe.addEventListener("drop",this.handleonDrop)}return T.qy`
        <div id="file-upload-dialog" class="file-upload-dialog">
          <!-- Modal content -->
          <fluent-dialog modal="true" class="file-upload-dialog-content">
            <span
              class="file-upload-dialog-close"
              id="file-upload-dialog-close">
                ${(0,E.r)(E.A.Cancel)}
            </span>
            <div class="file-upload-dialog-content-text">
              <h2 class="file-upload-dialog-title">${this._dialogTitle}</h2>
              <div>${this._dialogContent}</div>
                <fluent-checkbox
                  id="file-upload-dialog-check"
                  class="file-upload-dialog-check">
                    ${this._dialogCheckBox}
                </fluent-checkbox>
            </div>
            <div class="file-upload-dialog-editor">
              <fluent-button
                appearance="accent"
                class="file-upload-dialog-ok">
                ${this._dialogPrimaryButton}
              </fluent-button>
              <fluent-button
                appearance="outline"
                class="file-upload-dialog-cancel">
                ${this._dialogSecondaryButton}
              </fluent-button>
            </div>
          </fluent-dialog>
        </div>
        <div id="file-upload-border"></div>
        <div class="file-upload-area-button">
          <input
            id="file-upload-input"
            title="${this.strings.uploadButtonLabel}"
            tabindex="-1"
            aria-label="file upload input"
            type="file"
            multiple
            @change="${this.onFileUploadChange}"
          />
          <fluent-button
            appearance="accent"
            class="file-upload-button"
            @click=${this.onFileUploadClick}
            label=${this.strings.uploadButtonLabel}>
              <span slot="start">${(0,E.r)(E.A.Upload)}</span>
              <span class="upload-text">${this.strings.buttonUploadFile}</span>
          </fluent-button>
        </div>
        <div class="file-upload-template">
          ${this.renderFolderTemplate(this.filesToUpload)}
        </div>
       `}renderFolderTemplate(Fe){const dt=[];if(Fe.length>0){const $t=Fe.map(Wt=>-1===dt.indexOf(Wt.fullPath.substring(0,Wt.fullPath.lastIndexOf("/")))?Wt.fullPath.endsWith("/")?T.qy`${this.renderFileTemplate(Wt,"")}`:(dt.push(Wt.fullPath.substring(0,Wt.fullPath.lastIndexOf("/"))),I.Q`
            <div class='file-upload-table'>
              <div class='file-upload-cell'>
                <mgt-file
                  .fileDetails=${{name:Wt.fullPath.substring(1,Wt.fullPath.lastIndexOf("/")),folder:"Folder"}}
                  view="oneline"
                  class="mgt-file-item">
                </mgt-file>
              </div>
            </div>
            ${this.renderFileTemplate(Wt,"file-upload-folder-tab")}`):T.qy`${this.renderFileTemplate(Wt,"file-upload-folder-tab")}`);return T.qy`${$t}`}return T.qy``}renderFileTemplate(Fe,dt){const $t=(0,Ln.H)({"file-upload-table":!0,upload:Fe.completed}),Wt=dt+("lastModifiedDateTime"===Fe.fieldUploadResponse?" file-upload-dialog-success":""),Vt=(0,Ln.H)({description:"description"===Fe.fieldUploadResponse}),Qt=Fe.completed?T.qy``:this.renderFileUploadTemplate(Fe);return I.Q`
        <div class="${$t}">
          <div class="${Wt}">
            <div class='file-upload-cell'>
              <div class="${Vt}">
                <div class="file-upload-status">
                  ${Fe.iconStatus}
                </div>
                <mgt-file
                  .fileDetails=${Fe.driveItem}
                  .view=${Fe.view}
                  .line2Property=${Fe.fieldUploadResponse}
                  part="upload"
                  class="mgt-file-item">
                </mgt-file>
              </div>
            </div>
              ${Qt}
            </div>
          </div>
        </div>`}renderFileUploadTemplate(Fe){const dt=(0,Ln.H)({"file-upload-table":!0,upload:Fe.completed});return T.qy`
    <div class='file-upload-cell'>
      <div class='file-upload-table file-upload-name'>
        <div class='file-upload-cell'>
          <div
            title="${Fe.file.name}"
            class='file-upload-filename'>
            ${Fe.file.name}
          </div>
        </div>
      </div>
      <div class='file-upload-table'>
        <div class='file-upload-cell'>
          <div class="${dt}">
            <fluent-progress class="file-upload-bar" value="${Fe.percent}"></fluent-progress>
            <div class='file-upload-cell percent-indicator'>
              <span>${Fe.percent}%</span>
              <span
                class="file-upload-cancel"
                @click=${()=>this.deleteFileUploadSession(Fe)}>
                ${(0,E.r)(E.A.Cancel)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    `}deleteFileUploadSession(Fe){return gt(this,void 0,void 0,function*(){try{void 0!==Fe.uploadUrl?(yield(0,b.mQ)(this.fileUploadList.graph,Fe.uploadUrl),Fe.uploadUrl=void 0,Fe.completed=!0,this.setUploadFail(Fe,Mn.cancelUploadFile)):(Fe.uploadUrl=void 0,Fe.completed=!0,this.setUploadFail(Fe,Mn.cancelUploadFile))}catch{Fe.uploadUrl=void 0,Fe.completed=!0,this.setUploadFail(Fe,Mn.cancelUploadFile)}})}readUploadedFiles(Fe,dt){return gt(this,void 0,void 0,function*(){const $t=yield this.getFilesFromUploadArea(Fe);yield this.getSelectedFiles($t),dt()})}getSelectedFiles(Fe){return gt(this,void 0,void 0,function*(){let dt=[];const $t=[];this._applyAll=!1,this._applyAllConflictBehavior=null,this._maximumFileSize=!1,this._excludedFileType=!1,this.filesToUpload.forEach(Vt=>{Vt.completed?$t.push(Vt):dt.push(Vt)});for(const Vt of Fe){const Qt=""===Vt.fullPath?"/"+Vt.name:Vt.fullPath;if(0===dt.filter($n=>$n.fullPath===Qt).length){let $n=!0;if(void 0!==this.fileUploadList.maxFileSize&&$n&&Vt.size>1024*this.fileUploadList.maxFileSize&&($n=!1,!1===this._maximumFileSize)){const Cn=yield this.getFileUploadStatus(Vt,Qt,"MaxFileSize",this.fileUploadList);null!==Cn&&1===Cn[0]&&(this._maximumFileSize=!0)}if(void 0!==this.fileUploadList.excludedFileExtensions&&this.fileUploadList.excludedFileExtensions.length>0&&$n&&this.fileUploadList.excludedFileExtensions.filter(Cn=>Vt.name.toLowerCase().indexOf(Cn.toLowerCase())>-1).length>0&&($n=!1,!1===this._excludedFileType)){const Cn=yield this.getFileUploadStatus(Vt,Qt,"ExcludedFileType",this.fileUploadList);null!==Cn&&1===Cn[0]&&(this._excludedFileType=!0)}if($n){const Cn=yield this.getFileUploadStatus(Vt,Qt,"Upload",this.fileUploadList);let In=!1;null!==Cn&&(-1===Cn[0]?In=!0:(this._applyAll=!!Cn[0],this._applyAllConflictBehavior=Cn[1]?1:0)),dt.push({file:Vt,driveItem:{name:Vt.name},fullPath:Qt,conflictBehavior:Un(Cn),iconStatus:null,percent:1,view:"image",completed:In,maxSize:this._maxChunkSize,minSize:0})}}}dt=dt.sort((Vt,Qt)=>Vt.fullPath.substring(0,Vt.fullPath.lastIndexOf("/")).localeCompare(Qt.fullPath.substring(0,Qt.fullPath.lastIndexOf("/")))),dt.forEach(Vt=>{if(0!==$t.filter(Qt=>Qt.fullPath===Vt.fullPath).length){const Qt=$t.findIndex($n=>$n.fullPath===Vt.fullPath);$t.splice(Qt,1)}}),dt.push(...$t),this.filesToUpload=dt;const Wt=this.filesToUpload.map(Vt=>this.sendFileItemGraph(Vt));yield Promise.all(Wt)})}getFileUploadStatus(Fe,dt,$t,Wt){const Vt=Object.create(null,{requestStateUpdate:{get:()=>super.requestStateUpdate}});return gt(this,void 0,void 0,function*(){const Qt=this.renderRoot.querySelector("#file-upload-dialog");switch($t){case"Upload":return null!==(yield(0,b.Pq)(this.fileUploadList.graph,`${this.getGrapQuery(dt)}?$select=id`))?!0===this._applyAll?[this._applyAll,this._applyAllConflictBehavior]:(Qt.classList.add("visible"),this._dialogTitle=Mn.fileReplaceTitle,this._dialogContent=Mn.fileReplace.replace("{FileName}",Fe.name),this._dialogCheckBox=Mn.checkApplyAll,this._dialogPrimaryButton=Mn.buttonReplace,this._dialogSecondaryButton=Mn.buttonKeep,yield Vt.requestStateUpdate.call(this,!0),new Promise(Cn=>{const In=this.renderRoot.querySelector(".file-upload-dialog-close"),hi=this.renderRoot.querySelector(".file-upload-dialog-ok"),Gi=this.renderRoot.querySelector(".file-upload-dialog-cancel"),ki=this.renderRoot.querySelector("#file-upload-dialog-check");ki.checked=!1,ki.classList.remove("hide");const bi=()=>{Qt.classList.remove("visible"),Cn([ki.checked?1:0,"replace"])},je=()=>{Qt.classList.remove("visible"),Cn([ki.checked?1:0,"rename"])},ct=()=>{Qt.classList.remove("visible"),Cn([-1])};hi.removeEventListener("click",bi),Gi.removeEventListener("click",je),In.removeEventListener("click",ct),hi.addEventListener("click",bi),Gi.addEventListener("click",je),In.addEventListener("click",ct)})):null;case"ExcludedFileType":return Qt.classList.add("visible"),this._dialogTitle=Mn.fileTypeTitle,this._dialogContent=Mn.fileType.replace("{FileName}",Fe.name)+" ("+Wt.excludedFileExtensions.join(",")+")",this._dialogCheckBox=Mn.checkAgain,this._dialogPrimaryButton=Mn.buttonOk,this._dialogSecondaryButton=Mn.buttonCancel,yield Vt.requestStateUpdate.call(this,!0),new Promise($n=>{const Cn=this.renderRoot.querySelector(".file-upload-dialog-ok"),In=this.renderRoot.querySelector(".file-upload-dialog-cancel"),hi=this.renderRoot.querySelector(".file-upload-dialog-close"),Gi=this.renderRoot.querySelector("#file-upload-dialog-check");Gi.checked=!1,Gi.classList.remove("hide");const ki=()=>{Qt.classList.remove("visible"),$n([Gi.checked?1:0])},bi=()=>{Qt.classList.remove("visible"),$n([0])};Cn.removeEventListener("click",ki),In.removeEventListener("click",bi),hi.removeEventListener("click",bi),Cn.addEventListener("click",ki),In.addEventListener("click",bi),hi.addEventListener("click",bi)});case"MaxFileSize":return Qt.classList.add("visible"),this._dialogTitle=Mn.maximumFileSizeTitle,this._dialogContent=Mn.maximumFileSize.replace("{FileSize}",(0,Fi.z3)(1024*Wt.maxFileSize)).replace("{FileName}",Fe.name)+(0,Fi.z3)(Fe.size)+".",this._dialogCheckBox=Mn.checkAgain,this._dialogPrimaryButton=Mn.buttonOk,this._dialogSecondaryButton=Mn.buttonCancel,yield Vt.requestStateUpdate.call(this,!0),new Promise($n=>{const Cn=this.renderRoot.querySelector(".file-upload-dialog-ok"),In=this.renderRoot.querySelector(".file-upload-dialog-cancel"),hi=this.renderRoot.querySelector(".file-upload-dialog-close"),Gi=this.renderRoot.querySelector("#file-upload-dialog-check");Gi.checked=!1,Gi.classList.remove("hide");const ki=()=>{Qt.classList.remove("visible"),$n([Gi.checked?1:0])},bi=()=>{Qt.classList.remove("visible"),$n([0])};Cn.removeEventListener("click",ki),In.removeEventListener("click",bi),hi.removeEventListener("click",bi),Cn.addEventListener("click",ki),In.addEventListener("click",bi),hi.addEventListener("click",bi)})}})}getGrapQuery(Fe){let dt="";return this.fileUploadList.itemPath&&this.fileUploadList.itemPath.length>0&&(dt=this.fileUploadList.itemPath.startsWith("/")?this.fileUploadList.itemPath:"/"+this.fileUploadList.itemPath),this.fileUploadList.userId&&this.fileUploadList.itemId?`/users/${this.fileUploadList.userId}/drive/items/${this.fileUploadList.itemId}:${Fe}`:this.fileUploadList.userId&&this.fileUploadList.itemPath?`/users/${this.fileUploadList.userId}/drive/root:${dt}${Fe}`:this.fileUploadList.groupId&&this.fileUploadList.itemId?`/groups/${this.fileUploadList.groupId}/drive/items/${this.fileUploadList.itemId}:${Fe}`:this.fileUploadList.groupId&&this.fileUploadList.itemPath?`/groups/${this.fileUploadList.groupId}/drive/root:${dt}${Fe}`:this.fileUploadList.driveId&&this.fileUploadList.itemId?`/drives/${this.fileUploadList.driveId}/items/${this.fileUploadList.itemId}:${Fe}`:this.fileUploadList.driveId&&this.fileUploadList.itemPath?`/drives/${this.fileUploadList.driveId}/root:${dt}${Fe}`:this.fileUploadList.siteId&&this.fileUploadList.itemId?`/sites/${this.fileUploadList.siteId}/drive/items/${this.fileUploadList.itemId}:${Fe}`:this.fileUploadList.siteId&&this.fileUploadList.itemPath?`/sites/${this.fileUploadList.siteId}/drive/root:${dt}${Fe}`:this.fileUploadList.itemId?`/me/drive/items/${this.fileUploadList.itemId}:${Fe}`:this.fileUploadList.itemPath?`/me/drive/root:${dt}${Fe}`:`/me/drive/root:${Fe}`}sendFileItemGraph(Fe){return gt(this,void 0,void 0,function*(){const dt=this.fileUploadList.graph;let $t="";if(Fe.file.size<this._maxChunkSize)try{Fe.completed||((null===Fe.conflictBehavior||"replace"===Fe.conflictBehavior)&&($t=`${this.getGrapQuery(Fe.fullPath)}:/content`),"rename"===Fe.conflictBehavior&&($t=`${this.getGrapQuery(Fe.fullPath)}:/content?@microsoft.graph.conflictBehavior=rename`),Fe.driveItem=yield(0,b.sy)(dt,$t,Fe.file),null!==Fe.driveItem?this.setUploadSuccess(Fe):(Fe.driveItem={name:Fe.file.name},this.setUploadFail(Fe,Mn.failUploadFile)))}catch{this.setUploadFail(Fe,Mn.failUploadFile)}else if(!Fe.completed&&void 0===Fe.uploadUrl){const Wt=yield(0,b.Ay)(dt,`${this.getGrapQuery(Fe.fullPath)}:/createUploadSession`,Fe.conflictBehavior);try{if(null!==Wt){Fe.uploadUrl=Wt.uploadUrl;const Vt=yield this.sendSessionUrlGraph(dt,Fe);null!==Vt?(Fe.driveItem=Vt,this.setUploadSuccess(Fe)):this.setUploadFail(Fe,Mn.failUploadFile)}else this.setUploadFail(Fe,Mn.failUploadFile)}catch{}}})}sendSessionUrlGraph(Fe,dt){const $t=Object.create(null,{requestStateUpdate:{get:()=>super.requestStateUpdate}});return gt(this,void 0,void 0,function*(){for(;dt.file.size>dt.minSize;){void 0===dt.mimeStreamString&&(dt.mimeStreamString=yield this.readFileContent(dt.file));const Wt=new Blob([dt.mimeStreamString.slice(dt.minSize,dt.maxSize)]);if(dt.percent=Math.round(dt.maxSize/dt.file.size*100),yield $t.requestStateUpdate.call(this,!0),void 0===dt.uploadUrl)return null;{const Vt=yield(0,b.mj)(Fe,dt.uploadUrl,""+(dt.maxSize-dt.minSize),`bytes ${dt.minSize}-${dt.maxSize-1}/${dt.file.size}`,Wt);if(null===Vt)return null;if((0,b.gt)(Vt))dt.minSize=parseInt(Vt.nextExpectedRanges[0].split("-")[0],10),dt.maxSize=dt.minSize+this._maxChunkSize,dt.maxSize>dt.file.size&&(dt.maxSize=dt.file.size);else if(void 0!==Vt.id)return Vt}}})}setUploadSuccess(Fe){Fe.percent=100,super.requestStateUpdate(!0),setTimeout(()=>{Fe.iconStatus=(0,E.r)(E.A.Success),Fe.view="twolines",Fe.fieldUploadResponse="lastModifiedDateTime",Fe.completed=!0,super.requestStateUpdate(!0),(0,b.$V)()},500)}setUploadFail(Fe,dt){setTimeout(()=>{Fe.iconStatus=(0,E.r)(E.A.Fail),Fe.view="twolines",Fe.driveItem.description=dt,Fe.fieldUploadResponse="description",Fe.completed=!0,super.requestStateUpdate(!0)},500)}readFileContent(Fe){return new Promise((dt,$t)=>{const Wt=new FileReader;Wt.onloadend=()=>{dt(Wt.result)},Wt.onerror=Vt=>{$t(Vt)},Wt.readAsArrayBuffer(Fe)})}getFilesFromUploadArea(Fe){return gt(this,void 0,void 0,function*(){const dt=[];let $t;const Wt=[];for(const Vt of Fe)if(qt(Vt))if(ft(Vt))if($t=Vt.getAsEntry(),_t($t))dt.push($t);else{const Qt=Vt.getAsFile();Qt&&(this.writeFilePath(Qt,""),Wt.push(Qt))}else if(Vt.webkitGetAsEntry)if($t=Vt.webkitGetAsEntry(),_t($t))dt.push($t);else{const Qt=Vt.getAsFile();Qt&&(this.writeFilePath(Qt,""),Wt.push(Qt))}else{const Qt=Vt.getAsFile();Qt&&(this.writeFilePath(Qt,""),Wt.push(Qt))}else this.writeFilePath(Vt,""),Wt.push(Vt);if(dt.length>0){const Vt=yield this.getFolderFiles(dt);Wt.push(...Vt)}return Wt})}getFolderFiles(Fe){return new Promise(dt=>{let $t=0;const Wt=[];Fe.forEach($n=>{Vt($n,"")});const Vt=($n,Cn)=>{_t($n)?Qt($n.createReader()):(Bt=>Bt.isFile)($n)&&($t++,$n.file(In=>{$t--,this.writeFilePath(In,Cn),Wt.push(In),0===$t&&dt(Wt)}))},Qt=$n=>{$t++,$n.readEntries(Cn=>{$t--;for(const In of Cn)Vt(In,In.fullPath);0===$t&&dt(Wt)})}})}writeFilePath(Fe,dt){Fe.fullPath=dt}}return ji([(0,M.MZ)({type:Object}),zi("design:type",Array)],Bt.prototype,"filesToUpload",void 0),ji([(0,M.MZ)({type:Object}),zi("design:type",Object)],Bt.prototype,"fileUploadList",void 0),Bt})();var ui=d(882),Fn=function(Bt,bt,Fe,dt){var Vt,$t=arguments.length,Wt=$t<3?bt:null===dt?dt=Object.getOwnPropertyDescriptor(bt,Fe):dt;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Bt,bt,Fe,dt);else for(var Qt=Bt.length-1;Qt>=0;Qt--)(Vt=Bt[Qt])&&(Wt=($t<3?Vt(Wt):$t>3?Vt(bt,Fe,Wt):Vt(bt,Fe))||Wt);return $t>3&&Wt&&Object.defineProperty(bt,Fe,Wt),Wt},Bn=function(Bt,bt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(Bt,bt)},Qi=function(Bt,bt,Fe,dt){return new(Fe||(Fe=Promise))(function(Wt,Vt){function Qt(In){try{Cn(dt.next(In))}catch(hi){Vt(hi)}}function $n(In){try{Cn(dt.throw(In))}catch(hi){Vt(hi)}}function Cn(In){In.done?Wt(In.value):function $t(Wt){return Wt instanceof Fe?Wt:new Fe(function(Vt){Vt(Wt)})}(In.value).then(Qt,$n)}Cn((dt=dt.apply(Bt,bt||[])).next())})};const Cr=()=>{(0,On.E)(ui.m9),(0,V.R)(),(0,On.E)(G,q.zi,F.c,Ei),(0,V.R)(),(0,yi.N)("file-upload",At),(0,yi.N)("file-list",zr)};let zr=(()=>{class Bt extends s.N{static get styles(){return O}get strings(){return le}get displayName(){return this.strings.filesSectionTitle}get cardTitle(){return this.strings.filesSectionTitle}renderIcon(){return(0,E.r)(E.A.Files)}static get requiredScopes(){return[...new Set([...V.l.requiredScopes])]}constructor(){super(),this._isCompact=!1,this.fileQueries=null,this.files=null,this.itemView="threelines",this.fileExtensions=[],this.pageSize=10,this.disableOpenOnClick=!1,this.hideMoreFilesButton=!1,this.enableFileUpload=!1,this.maxUploadFile=10,this.excludedFileExtensions=[],this._preloadedFiles=[],this._focusedItemIndex=-1,this.renderLoading=()=>this.files?this.renderContent():this.renderTemplate("loading",null)||T.qy``,this.renderContent=()=>this.files&&0!==this.files.length?this._isCompact?this.renderCompactView():this.renderFullView():this.renderNoData(),this.onFocusFirstItem=()=>this._focusedItemIndex=0,this.onFileListKeyDown=Fe=>{const dt=this.renderRoot.querySelector(".file-list");let $t;if(dt?.children.length){if(("ArrowUp"===Fe.code||"ArrowDown"===Fe.code)&&("ArrowUp"===Fe.code&&(-1===this._focusedItemIndex&&(this._focusedItemIndex=dt.children.length),this._focusedItemIndex=(this._focusedItemIndex-1+dt.children.length)%dt.children.length),"ArrowDown"===Fe.code&&(this._focusedItemIndex=(this._focusedItemIndex+1)%dt.children.length),$t=dt.children[this._focusedItemIndex],this.updateItemBackgroundColor(dt,$t,"focused")),"Enter"===Fe.code||"Space"===Fe.code){$t=dt.children[this._focusedItemIndex];const Wt=$t.children[0];Fe.preventDefault(),this.fireCustomEvent("itemClick",Wt.fileDetails),this.handleFileClick(Wt.fileDetails),this.updateItemBackgroundColor(dt,$t,"selected")}"Tab"===Fe.code&&($t=dt.children[this._focusedItemIndex])}}}clearState(){super.clearState(),this.files=null}asCompactView(){return this._isCompact=!0,this}asFullView(){return this._isCompact=!1,this}args(){return[this.providerState,this.fileListQuery,this.fileQueries,this.siteId,this.driveId,this.groupId,this.itemId,this.itemPath,this.userId,this.insightType,this.fileExtensions,this.pageSize,this.maxFileSize]}renderCompactView(){const Fe=this.files.slice(0,3);return this.renderFiles(Fe)}renderFullView(){return this.renderTemplate("default",{files:this.files})||this.renderFiles(this.files)}renderNoData(){return this.renderTemplate("no-data",null)||(!0===this.enableFileUpload&&void 0!==c.b.globalProvider?T.qy`
            <div class="file-list-wrapper" dir=${this.direction}>
              ${this.renderFileUpload()}
            </div>`:T.qy``)}renderFiles(Fe){return T.qy`
      <div id="file-list-wrapper" class="file-list-wrapper" dir=${this.direction}>
        ${this.enableFileUpload?this.renderFileUpload():null}
        <ul
          id="file-list"
          class="file-list"
        >
          <li
            tabindex="0"
            class="file-item"
            @keydown="${this.onFileListKeyDown}"
            @focus="${this.onFocusFirstItem}"
            @click=${dt=>this.handleItemSelect(Fe[0],dt)}>
            ${this.renderFile(Fe[0])}
          </li>
          ${(0,_.u)(Fe.slice(1),dt=>dt.id,dt=>T.qy`
              <li
                class="file-item"
                @keydown="${this.onFileListKeyDown}"
                @click=${$t=>this.handleItemSelect(dt,$t)}>
                ${this.renderFile(dt)}
              </li>
            `)}
        </ul>
        ${this.hideMoreFilesButton||!this.pageIterator||!this.pageIterator.hasNext&&!this._preloadedFiles.length||this._isCompact?null:this.renderMoreFileButton()}
      </div>
    `}renderFile(Fe){const dt=this.itemView;return this.renderTemplate("file",{file:Fe},Fe.id)||I.Q`
        <mgt-file class="mgt-file-item" .fileDetails=${Fe} .view=${dt}></mgt-file>
      `}renderMoreFileButton(){return this._isLoadingMore?T.qy`
        <fluent-progress-ring role="progressbar" viewBox="0 0 8 8" class="progress-ring"></fluent-progress-ring>
      `:T.qy`
        <fluent-button
          appearance="stealth"
          id="show-more"
          class="show-more"
          @click=${()=>this.renderNextPage()}
        >
          <span class="show-more-text">${this.strings.showMoreSubtitle}</span>
        </fluent-button>`}renderFileUpload(){const Fe={graph:c.b.globalProvider.graph.forComponent(this),driveId:this.driveId,excludedFileExtensions:this.excludedFileExtensions,groupId:this.groupId,itemId:this.itemId,itemPath:this.itemPath,userId:this.userId,siteId:this.siteId,maxFileSize:this.maxFileSize,maxUploadFile:this.maxUploadFile};return I.Q`
        <mgt-file-upload .fileUploadList=${Fe} ></mgt-file-upload>
      `}loadState(){var Fe,dt;return Qi(this,void 0,void 0,function*(){const $t=c.b.globalProvider;if(!$t||$t.state===v.HJ.Loading)return;if($t.state===v.HJ.SignedOut)return void(this.files=null);const Wt=$t.graph.forComponent(this);let Vt,Qt;const $n=!(this.driveId||this.siteId||this.groupId||this.userId);if((this.driveId&&!this.itemId&&!this.itemPath||this.groupId&&!this.itemId&&!this.itemPath||this.siteId&&!this.itemId&&!this.itemPath||this.userId&&!this.insightType&&!this.itemId&&!this.itemPath)&&(this.files=null),!this.files){let Cn;if(this.fileListQuery?Qt=yield(0,b.D)(Wt,this.fileListQuery,this.pageSize):this.fileQueries?Vt=yield(0,b.bJ)(Wt,this.fileQueries):$n?this.itemId?Qt=yield(0,b.Y1)(Wt,this.itemId,this.pageSize):this.itemPath?Qt=yield(0,b.o4)(Wt,this.itemPath,this.pageSize):this.insightType?Vt=yield(0,b.jI)(Wt,this.insightType):Qt=yield(0,b.Ad)(Wt,this.pageSize):this.driveId?this.itemId?Qt=yield(0,b.Kx)(Wt,this.driveId,this.itemId,this.pageSize):this.itemPath&&(Qt=yield(0,b.WU)(Wt,this.driveId,this.itemPath,this.pageSize)):this.groupId?this.itemId?Qt=yield(0,b.$4)(Wt,this.groupId,this.itemId,this.pageSize):this.itemPath&&(Qt=yield(0,b.NO)(Wt,this.groupId,this.itemPath,this.pageSize)):this.siteId?this.itemId?Qt=yield(0,b.Z)(Wt,this.siteId,this.itemId,this.pageSize):this.itemPath&&(Qt=yield(0,b.Rh)(Wt,this.siteId,this.itemPath,this.pageSize)):this.userId&&(this.itemId?Qt=yield(0,b.Zm)(Wt,this.userId,this.itemId,this.pageSize):this.itemPath?Qt=yield(0,b.n)(Wt,this.userId,this.itemPath,this.pageSize):this.insightType&&(Vt=yield(0,b.S0)(Wt,this.userId,this.insightType))),Qt&&(this.pageIterator=Qt,this._preloadedFiles=[...this.pageIterator.value],Vt=this._preloadedFiles.splice(0,this._preloadedFiles.length>=this.pageSize?this.pageSize:this._preloadedFiles.length)),(null===(Fe=this.fileExtensions)||void 0===Fe?void 0:Fe.length)>0){if(null!==(dt=this.pageIterator)&&void 0!==dt&&dt.value){for(;this.pageIterator.hasNext;)yield(0,b.oL)(this.pageIterator);Vt=this.pageIterator.value,this._preloadedFiles=[]}Cn=Vt.filter(In=>{for(const hi of this.fileExtensions)if(hi===this.getFileExtension(In.name))return In})}Cn?.length>=0?(this.files=Cn,this.pageSize&&(Vt=this.files.splice(0,this.pageSize),this.files=Vt)):this.files=Vt}})}handleItemSelect(Fe,dt){if(this.handleFileClick(Fe),this.fireCustomEvent("itemClick",Fe),dt){const $t=this.renderRoot.querySelector(".file-list"),Wt=Array.from($t.children),Vt=dt.target.closest("li"),Qt=Wt.indexOf(Vt);this._focusedItemIndex=Qt,this.updateItemBackgroundColor($t,$t.children[this._focusedItemIndex],"selected")}}renderNextPage(){return Qi(this,void 0,void 0,function*(){if(this._preloadedFiles.length>0)this.files=[...this.files,...this._preloadedFiles.splice(0,Math.min(this.pageSize,this._preloadedFiles.length))];else if(this.pageIterator.hasNext){this._isLoadingMore=!0;const Fe=this.renderRoot.querySelector("#file-list-wrapper");Fe?.animate&&Fe.animate([{height:"auto",transformOrigin:"top left"},{height:"auto",transformOrigin:"top left"}],{duration:1e3,easing:"ease-in-out",fill:"both"}),yield(0,b.oL)(this.pageIterator),this._isLoadingMore=!1,this.files=this.pageIterator.value}this.requestUpdate()})}handleFileClick(Fe){Fe?.webUrl&&!this.disableOpenOnClick&&window.open(Fe.webUrl,"_blank","noreferrer")}getFileExtension(Fe){return/(?:\.([^.]+))?$/.exec(Fe)[1]||""}updateItemBackgroundColor(Fe,dt,$t){for(const Wt of Fe.children)Wt.classList.remove($t),Wt.removeAttribute("tabindex");dt&&(dt.classList.add($t),dt.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"}),dt.setAttribute("tabindex","0"),dt.focus());for(const Wt of Fe.children)Wt.classList.remove("selected")}reload(Fe=!1){Fe&&(0,b.$V)(),this._task.run()}}return Fn([(0,M.wk)(),Bn("design:type",Object)],Bt.prototype,"_isCompact",void 0),Fn([(0,M.MZ)({attribute:"file-list-query"}),Bn("design:type",String)],Bt.prototype,"fileListQuery",void 0),Fn([(0,M.MZ)({attribute:"file-queries",converter:(bt,Fe)=>bt?bt.split(",").map(dt=>dt.trim()):null}),Bn("design:type",Array)],Bt.prototype,"fileQueries",void 0),Fn([(0,M.MZ)({type:Object}),Bn("design:type",Array)],Bt.prototype,"files",void 0),Fn([(0,M.MZ)({attribute:"site-id"}),Bn("design:type",String)],Bt.prototype,"siteId",void 0),Fn([(0,M.MZ)({attribute:"drive-id"}),Bn("design:type",String)],Bt.prototype,"driveId",void 0),Fn([(0,M.MZ)({attribute:"group-id"}),Bn("design:type",String)],Bt.prototype,"groupId",void 0),Fn([(0,M.MZ)({attribute:"item-id"}),Bn("design:type",String)],Bt.prototype,"itemId",void 0),Fn([(0,M.MZ)({attribute:"item-path"}),Bn("design:type",String)],Bt.prototype,"itemPath",void 0),Fn([(0,M.MZ)({attribute:"user-id"}),Bn("design:type",String)],Bt.prototype,"userId",void 0),Fn([(0,M.MZ)({attribute:"insight-type"}),Bn("design:type",String)],Bt.prototype,"insightType",void 0),Fn([(0,M.MZ)({attribute:"item-view",converter:bt=>(0,N.E)(bt,"threelines")}),Bn("design:type",String)],Bt.prototype,"itemView",void 0),Fn([(0,M.MZ)({attribute:"file-extensions",converter:(bt,Fe)=>bt.split(",").map(dt=>dt.trim())}),Bn("design:type",Array)],Bt.prototype,"fileExtensions",void 0),Fn([(0,M.MZ)({attribute:"page-size",type:Number}),Bn("design:type",Object)],Bt.prototype,"pageSize",void 0),Fn([(0,M.MZ)({attribute:"disable-open-on-click",type:Boolean}),Bn("design:type",Object)],Bt.prototype,"disableOpenOnClick",void 0),Fn([(0,M.MZ)({attribute:"hide-more-files-button",type:Boolean}),Bn("design:type",Object)],Bt.prototype,"hideMoreFilesButton",void 0),Fn([(0,M.MZ)({attribute:"max-file-size",type:Number}),Bn("design:type",Number)],Bt.prototype,"maxFileSize",void 0),Fn([(0,M.MZ)({attribute:"enable-file-upload",type:Boolean}),Bn("design:type",Object)],Bt.prototype,"enableFileUpload",void 0),Fn([(0,M.MZ)({attribute:"max-upload-file",type:Number}),Bn("design:type",Object)],Bt.prototype,"maxUploadFile",void 0),Fn([(0,M.MZ)({attribute:"excluded-file-extensions",converter:(bt,Fe)=>bt.split(",").map(dt=>dt.trim())}),Bn("design:type",Array)],Bt.prototype,"excludedFileExtensions",void 0),Fn([(0,M.wk)(),Bn("design:type",Boolean)],Bt.prototype,"_isLoadingMore",void 0),Bt})()},9569:(at,ge,d)=>{d.d(ge,{l:()=>W,R:()=>de});var s=d(8324),c=d(9559);const I=[s.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{font-size:var(--default-font-size);font-weight:var(--default-font-weight,400);border:var(--file-border,1px solid transparent);border-radius:var(--file-border-radius,4px);background-color:var(--file-background-color)}:host .item{display:flex;flex-flow:row nowrap;align-items:center;background-color:var(--file-background-color);padding:var(--file-padding,0);margin:var(--file-margin,0)}:host .item:hover{background-color:var(--file-background-color-hover,var(--neutral-fill-hover));border-radius:var(--file-border-radius,4px);cursor:pointer;--secondary-text-color:var(--secondary-text-hover-color)}:host .item:focus,:host .item:focus-visible{background-color:var(--file-background-color-focus,var(--neutral-fill-hover));border-radius:var(--file-border-radius,4px)}:host .item__file-type-icon{height:var(--file-type-icon-height,28px);display:flex;align-items:center;justify-content:center}:host .item__file-type-icon img{height:var(--file-type-icon-height,28px)}:host .item__details{padding-inline-start:var(--file-padding-inline-start,14px)}:host .item__details .line1{font-size:var(--default-font-size);font-weight:var(--file-line1-font-weight,var(--default-font-weight,400));text-transform:var(--file-line1-text-transform,initial);line-height:20px;color:var(--file-line1-color,var(--neutral-foreground-rest))}:host .item__details .line2{color:var(--file-line2-color,var(--secondary-text-color));font-size:var(--file-line2-font-size, var(--last-modified-font-size, 12px));font-weight:var(--file-line2-font-weight,var(--default-font-weight,400));text-transform:var(--file-line2-text-transform,initial);line-height:16px}:host .item__details .line3{color:var(--file-line3-color,var(--secondary-text-color));font-size:var(--file-line3-font-size, var(--size-font-size, 12px));font-weight:var(--file-line3-font-weight,var(--default-font-weight,400));text-transform:var(--file-line3-text-transform,initial);line-height:16px}[dir=rtl] .item{direction:rtl}[dir=rtl] .item__details{direction:rtl}
`];var v=d(2578),T=d(4709),M=d(6885),_=d(7768),b=d(3173),E=d(8360);const N={PowerPoint:"pptx",Word:"docx",Excel:"xlsx",Pdf:"pdf",OneNote:"onetoc",OneNotePage:"one",InfoPath:"xsn",Visio:"vstx",Publisher:"pub",Project:"mpp",Access:"accdb",Mail:"email",Csv:"csv",Archive:"archive",Xps:"vector",Audio:"audio",Video:"video",Image:"photo",Web:"html",Text:"txt",Xml:"xml",Story:"genericfile",ExternalContent:"genericfile",Folder:"folder",Spsite:"spo",Other:"genericfile"},O="https://spoprod-a.akamaihd.net/files/fabric-cdn-prod_20201008.001/assets/item-types";var B=d(2710);const S={modifiedSubtitle:"Modified",sizeSubtitle:"Size"};var K=d(8940),oe=function($,J,ne,G){var F,ue=arguments.length,q=ue<3?J:null===G?G=Object.getOwnPropertyDescriptor(J,ne):G;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)q=Reflect.decorate($,J,ne,G);else for(var P=$.length-1;P>=0;P--)(F=$[P])&&(q=(ue<3?F(q):ue>3?F(J,ne,q):F(J,ne))||q);return ue>3&&q&&Object.defineProperty(J,ne,q),q},ve=function($,J){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata($,J)};const de=()=>(0,K.N)("file",W);let W=(()=>{class $ extends v.N{static get styles(){return I}get strings(){return S}static get requiredScopes(){return[...new Set(["files.read","files.read.all","sites.read.all"])]}args(){return[this.providerState,this.fileQuery,this.siteId,this.itemId,this.driveId,this.itemPath,this.listId,this.groupId,this.userId,this.insightType,this.insightId,this.fileDetails,this.fileIcon]}constructor(){super(),this.renderContent=()=>{if(!this.driveItem)return this.renderNoData();const ne=this.driveItem;let G;if(G=this.renderTemplate("default",{file:ne}),!G){const ue=this.renderDetails(ne),q=this.renderFileTypeIcon();G=s.qy`
        <div class="item">
          ${q} ${ue}
        </div>`}return G},this.line1Property="name",this.line2Property="lastModifiedDateTime",this.line3Property="size",this.view="threelines"}renderNoData(){return this.renderTemplate("no-data",null)||s.qy``}renderFileTypeIcon(){if(!this.fileIcon&&!this.driveItem.name)return s.qy``;let ne;if(this.fileIcon)ne=this.fileIcon;else{const G=/(?:\.([^.]+))?$/;ne=(($,J,ne)=>Object.keys(N).find(ue=>N[ue]===$)?`${O}/${48..toString()}/${$}.svg`:"jpg"===$||"png"===$?($="photo",`${O}/${48..toString()}/${$}.svg`):null)(void 0===this.driveItem.package&&void 0===this.driveItem.folder?G.exec(this.driveItem.name)[1]?G.exec(this.driveItem.name)[1].toLowerCase():this.driveItem.size?"null":"folder":void 0!==this.driveItem.package&&"oneNote"===this.driveItem.package.type?"onetoc":"folder")}return s.qy`
      <div class="item__file-type-icon">
        ${ne?s.qy`
              <img src=${ne} alt="File icon" />
            `:s.qy`
              ${(0,B.r)(B.A.File)}
            `}
      </div>
    `}renderDetails(ne){if(!ne||"image"===this.view)return s.qy``;const G=[];if(this.view>"image"){const ue=this.getTextFromProperty(ne,this.line1Property);ue&&G.push(s.qy`
          <div class="line1" aria-label="${ue}">${ue}</div>
        `)}if(this.view>"oneline"){const ue=this.getTextFromProperty(ne,this.line2Property);ue&&G.push(s.qy`
          <div class="line2" aria-label="${ue}">${ue}</div>
        `)}if(this.view>"twolines"){const ue=this.getTextFromProperty(ne,this.line3Property);ue&&G.push(s.qy`
          <div class="line3" aria-label="${ue}">${ue}</div>
        `)}return s.qy`
      <div class="item__details">
        ${G}
      </div>
    `}loadState(){return function($,J,ne,G){return new(ne||(ne=Promise))(function(q,F){function P(me){try{Z(G.next(me))}catch(ze){F(ze)}}function ee(me){try{Z(G.throw(me))}catch(ze){F(ze)}}function Z(me){me.done?q(me.value):function ue(q){return q instanceof ne?q:new ne(function(F){F(q)})}(me.value).then(P,ee)}Z((G=G.apply($,J||[])).next())})}(this,void 0,void 0,function*(){if(this.fileDetails)return void(this.driveItem=this.fileDetails);const ne=T.b.globalProvider;if(!ne||ne.state===M.HJ.Loading)return;if(ne.state===M.HJ.SignedOut)return void(this.driveItem=null);const G=ne.graph.forComponent(this);let ue;const q=!(this.driveId||this.siteId||this.groupId||this.listId||this.userId);this.driveId&&!this.itemId&&!this.itemPath||this.siteId&&!this.itemId&&!this.itemPath||this.groupId&&!this.itemId&&!this.itemPath||this.listId&&!this.siteId&&!this.itemId||this.insightType&&!this.insightId||this.userId&&!this.itemId&&!this.itemPath&&!this.insightType&&!this.insightId?ue=null:this.fileQuery?ue=yield(0,_.zn)(G,this.fileQuery):this.itemId&&q?ue=yield(0,_.KE)(G,this.itemId):this.itemPath&&q?ue=yield(0,_.OB)(G,this.itemPath):this.userId?this.itemId?ue=yield(0,_.Nd)(G,this.userId,this.itemId):this.itemPath?ue=yield(0,_.bn)(G,this.userId,this.itemPath):this.insightType&&this.insightId&&(ue=yield(0,_.wH)(G,this.userId,this.insightType,this.insightId)):this.driveId?this.itemId?ue=yield(0,_.Mu)(G,this.driveId,this.itemId):this.itemPath&&(ue=yield(0,_.WW)(G,this.driveId,this.itemPath)):this.siteId&&!this.listId?this.itemId?ue=yield(0,_.LI)(G,this.siteId,this.itemId):this.itemPath&&(ue=yield(0,_.dM)(G,this.siteId,this.itemPath)):this.listId?ue=yield(0,_.Sp)(G,this.siteId,this.listId,this.itemId):this.groupId?this.itemId?ue=yield(0,_.XD)(G,this.groupId,this.itemId):this.itemPath&&(ue=yield(0,_.d$)(G,this.groupId,this.itemPath)):this.insightType&&!this.userId&&(ue=yield(0,_.Pk)(G,this.insightType,this.insightId)),this.driveItem=ue})}getTextFromProperty(ne,G){if(!G||0===G.length)return null;const ue=G.trim().split(",");let q,F=0;for(;!q&&F<ue.length;){const P=ue[F].trim();switch(P){case"size":{let ee="0";ne.size&&(ee=(0,b.z3)(ne.size)),q=`${this.strings.sizeSubtitle}: ${ee}`;break}case"lastModifiedDateTime":{let ee,Z;if(ne.lastModifiedDateTime){const me=new Date(ne.lastModifiedDateTime);ee=(0,b.h3)(me),Z=`${this.strings.modifiedSubtitle} ${ee}`}else Z="";q=Z;break}default:q=ne[P]}F++}return q}}return oe([(0,c.MZ)({attribute:"file-query"}),ve("design:type",String)],$.prototype,"fileQuery",void 0),oe([(0,c.MZ)({attribute:"site-id"}),ve("design:type",String)],$.prototype,"siteId",void 0),oe([(0,c.MZ)({attribute:"drive-id"}),ve("design:type",String)],$.prototype,"driveId",void 0),oe([(0,c.MZ)({attribute:"group-id"}),ve("design:type",String)],$.prototype,"groupId",void 0),oe([(0,c.MZ)({attribute:"list-id"}),ve("design:type",String)],$.prototype,"listId",void 0),oe([(0,c.MZ)({attribute:"user-id"}),ve("design:type",String)],$.prototype,"userId",void 0),oe([(0,c.MZ)({attribute:"item-id"}),ve("design:type",String)],$.prototype,"itemId",void 0),oe([(0,c.MZ)({attribute:"item-path"}),ve("design:type",String)],$.prototype,"itemPath",void 0),oe([(0,c.MZ)({attribute:"insight-type"}),ve("design:type",String)],$.prototype,"insightType",void 0),oe([(0,c.MZ)({attribute:"insight-id"}),ve("design:type",String)],$.prototype,"insightId",void 0),oe([(0,c.MZ)({type:Object}),ve("design:type",Object)],$.prototype,"fileDetails",void 0),oe([(0,c.MZ)({attribute:"file-icon"}),ve("design:type",String)],$.prototype,"fileIcon",void 0),oe([(0,c.MZ)({type:Object}),ve("design:type",Object)],$.prototype,"driveItem",void 0),oe([(0,c.MZ)({attribute:"line1-property"}),ve("design:type",String)],$.prototype,"line1Property",void 0),oe([(0,c.MZ)({attribute:"line2-property"}),ve("design:type",String)],$.prototype,"line2Property",void 0),oe([(0,c.MZ)({attribute:"line3-property"}),ve("design:type",String)],$.prototype,"line3Property",void 0),oe([(0,c.MZ)({attribute:"view",converter:J=>(0,E.E)(J,"threelines")}),ve("design:type",String)],$.prototype,"view",void 0),$})()},7531:(at,ge,d)=>{d.r(ge),d.d(ge,{MgtPersonCard:()=>on,registerMgtPersonCardComponent:()=>sn});var s=d(8324),c=d(9559),I=d(3402),v=d(2578);class T{static get microsoftTeamsLib(){return this._microsoftTeamsLib||window.microsoftTeams}static set microsoftTeamsLib(yt){this._microsoftTeamsLib=yt}static get isAvailable(){return!(!this.microsoftTeamsLib||(window.parent!==window.self||!window.nativeInterface)&&"embedded-page-container"!==window.name&&"extension-tab-frame"!==window.name)}static executeDeepLink(yt,Ie){const qe=this.microsoftTeamsLib;qe.initialize(),qe.executeDeepLink(yt,Ie)}}var M=d(4569),_=d(4709),b=d(6885),E=d(5794),N=d(6692),O=d(4130),le=d(2898),V=d(2710),B=d(1786),S=d(4327);let K=(()=>{class vt{}return vt.sections={files:!0,mailMessages:!0,organization:{showWorksWith:!0},profile:!0},vt.useContactApis=!0,vt.isSendMessageVisible=!0,vt})();var oe=d(5527),ve=d(7768),ae=function(vt,yt,Ie,qe){return new(Ie||(Ie=Promise))(function(pt,Kt){function Yt(pn){try{vn(qe.next(pn))}catch(Ci){Kt(Ci)}}function cn(pn){try{vn(qe.throw(pn))}catch(Ci){Kt(Ci)}}function vn(pn){pn.done?pt(pn.value):function nt(pt){return pt instanceof Ie?pt:new Ie(function(Kt){Kt(pt)})}(pn.value).then(Yt,cn)}vn((qe=qe.apply(vt,yt||[])).next())})};const de="businessPhones,companyName,department,displayName,givenName,jobTitle,mail,mobilePhone,officeLocation,preferredLanguage,surname,userPrincipalName,id,accountEnabled",ne=["People.Read.All"],ue=["Mail.ReadBasic","Mail.Read","Mail.ReadWrite"],P=["User.Read.All","User.ReadWrite.All"],Z=["Chat.Create","Chat.ReadWrite"],ze=["ChatMessage.Send","Chat.ReadWrite"];var it=d(6479);const Me=[s.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{box-shadow:var(--person-card-box-shadow,var(--elevation-shadow-card-rest));width:var(--mgt-flyout-set-width,375px);overflow:hidden;user-select:none;border-radius:8px;background-color:var(--person-card-background-color,var(--neutral-layer-floating));--file-list-background-color:transparent;--file-list-box-shadow:none;--file-item-background-color:transparent}:host .small{max-height:100vh;overflow:hidden auto}:host .nav{height:0;position:relative;z-index:100}:host .nav__back{padding-top:18px;padding-inline-start:12px;height:32px;width:32px}:host .nav__back svg{fill:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .nav__back:hover{cursor:pointer}:host .nav__back:hover svg{fill:var(--person-card-nav-back-arrow-hover-color,var(--neutral-foreground-rest))}:host .close-card-container{position:relative;z-index:100}:host .close-card-container .close-button{position:absolute;right:10px;margin-top:9px;z-index:1;border:1px solid transparent}:host .close-card-container .close-button svg path{fill:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .close-card-container .close-button:hover svg path{fill:var(--person-card-close-button-hover-color,var(--neutral-foreground-rest))}:host .person-details-container{display:flex;flex-direction:column;padding-inline-start:22px;padding-block:36px;border-bottom:1px solid var(--person-card-border-color,var(--neutral-stroke-rest))}:host .person-details-container .person-image{--person-avatar-top-spacing:var(--person-card-avatar-top-spacing, 15px);--person-details-left-spacing:var(--person-card-details-left-spacing, 15px);--person-details-bottom-spacing:var(--person-card-details-bottom-spacing, 0);--person-background-color:var(--person-card-background-color, var(--neutral-layer-floating));--person-line1-font-size:var(--person-card-line1-font-size, 20px);--person-line1-font-weight:var(--person-card-line1-font-weight, 600);--person-line1-text-line-height:var(--person-card-line1-line-height, 28px);--person-line1-text-color:var(--person-card-line1-text-color, var(--neutral-foreground-rest));--person-line2-font-size:var(--person-card-line2-font-size, 14px);--person-line2-font-weight:var(--person-card-line2-font-weight, 400);--person-line2-text-line-height:var(--person-card-line2-line-height, 20px);--person-line2-text-color:var(--person-card-line2-text-color, var(--neutral-foreground-hint));--person-line3-font-size:var(--person-card-line3-font-size, 14px);--person-line3-font-weight:var(--person-card-line3-font-weight, 400);--person-line3-text-line-height:var(--person-card-line3-line-height, 19px);--person-line3-text-color:var(--person-card-line3-text-color, var(--neutral-foreground-hint));--person-avatar-size:var(--person-card-avatar-size, 75px);--person-presence-wrapper-bottom:-15px}:host .person-details-container .base-icons{display:flex;align-items:center;margin-inline-start:var(--person-card-base-icons-left-spacing,calc(var(--person-card-avatar-size,75px) + var(--person-card-details-left-spacing,15px) - 8px));z-index:1}:host .person-details-container .base-icons .icon{display:flex;align-items:center;font-size:13px;white-space:nowrap}:host .person-details-container .base-icons .icon:not(:last-child){margin-inline-end:28px}:host .person-details-container .base-icons .icon svg .filled{display:none}:host .person-details-container .base-icons .icon svg .regular{display:block}:host .person-details-container .base-icons .icon svg path{fill:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .person-details-container .base-icons .icon:active svg .filled,:host .person-details-container .base-icons .icon:hover svg .filled{display:block}:host .person-details-container .base-icons .icon:active svg .regular,:host .person-details-container .base-icons .icon:hover svg .regular{display:none}:host .person-details-container .base-icons .icon:active svg path,:host .person-details-container .base-icons .icon:hover svg path{fill:var(--person-card-icon-hover-color,var(--accent-foreground-hover))}:host .expanded-details-container{display:flex;flex-direction:column;position:relative}:host .expanded-details-container .expanded-details-button{display:flex;justify-content:center;height:32px}:host .expanded-details-container .expanded-details-button svg path{stroke:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .expanded-details-container .expanded-details-button:hover{cursor:pointer;background-color:var(--person-card-expanded-background-color-hover,var(--neutral-fill-hover))}:host .expanded-details-container .sections .section{padding:20px 0;display:flex;flex-direction:column;position:relative}:host .expanded-details-container .sections .section:not(:last-child)::after{position:absolute;content:"";width:90%;transform:translateX(-50%);border-bottom:1px solid var(--person-card-border-color,var(--neutral-stroke-rest));left:50%;bottom:0}:host .expanded-details-container .sections .section__header{display:flex;flex-direction:row;padding:0 20px}:host .expanded-details-container .sections .section__title{flex-grow:1;color:var(--person-card-line1-text-color,var(--neutral-foreground-rest));font-size:14px;font-weight:600;line-height:19px}:host .expanded-details-container .sections .section__show-more{font-size:12px;font-weight:600;align-self:center;vertical-align:top;--base-height-multiplier:6}:host .expanded-details-container .sections .section__show-more:hover{background-color:var(--person-card-fluent-background-color-hover,var(--neutral-fill-hover))}:host .expanded-details-container .sections .section__content{margin-top:14px}:host .expanded-details-container .sections .section .additional-details{padding:0 20px}:host .expanded-details-container .divider{z-index:100;position:relative;width:375px;margin:0;border-style:none;border-bottom:1px solid var(--person-card-border-color,var(--neutral-stroke-rest))}:host .expanded-details-container .section-nav{height:35px}:host .expanded-details-container .section-nav fluent-tabs{grid-template-columns:minmax(1px,0.1fr)}:host .expanded-details-container .section-nav fluent-tabs.horizontal::part(activeIndicator){width:10px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel{max-height:360px;min-height:360px;overflow:hidden auto;padding:0;scrollbar-width:thin}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel .inserted{padding:20px 0;max-width:var(--mgt-flyout-set-width,375px);min-width:var(--mgt-flyout-set-width,360px);--file-list-box-shadow:none;--file-list-padding:0}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel .inserted .title{font-size:14px;font-weight:600;color:var(--title-color-subtitle,var(--neutral-foreground-rest,#1a1a1a));margin:0 20px 20px;line-height:19px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel .overview-panel{max-width:var(--mgt-flyout-set-width,375px)}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar{height:4em;width:4px;border-radius:11px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar-button{height:1px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar-track{border-radius:10px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar-thumb{background:grey;border-radius:10px;height:4px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab{padding-bottom:1px!important;border:1px solid transparent!important}:host .expanded-details-container .section-nav fluent-tabs fluent-tab:focus-visible{border:1px solid #2b2b2b!important}:host .expanded-details-container .section-nav fluent-tabs fluent-tab.section-nav__icon{cursor:pointer;box-sizing:border-box;width:53px;height:36px;display:flex;align-items:center;justify-content:center}:host .expanded-details-container .section-nav fluent-tabs fluent-tab.section-nav__icon svg{fill:var(--person-card-fluent-background-color,transparent)}:host .expanded-details-container .section-nav fluent-tabs fluent-tab.section-nav__icon:hover{background:var(--person-card-fluent-background-color-hover,var(--neutral-fill-hover));border-radius:4px;z-index:0;position:relative}:host .expanded-details-container .section-host{min-height:360px;overflow:hidden auto}:host .expanded-details-container .section-host::-webkit-scrollbar{height:4em;width:4px;border-radius:11px}:host .expanded-details-container .section-host::-webkit-scrollbar-button{background:#fff}:host .expanded-details-container .section-host::-webkit-scrollbar-track{background:#fff;border-radius:10px}:host .expanded-details-container .section-host::-webkit-scrollbar-track-piece{background:#fff}:host .expanded-details-container .section-host::-webkit-scrollbar-thumb{background:grey;border-radius:10px;height:4px}:host .expanded-details-container .section-host.small{overflow-y:hidden}:host .loading{margin:40px 20px;display:flex;justify-content:center;height:360px}:host .message-section{border-bottom:1px solid var(--person-card-chat-input-border-color,var(--neutral-foreground-hint));display:flex}:host .message-section fluent-text-field{margin:10px 10px 10px 16px;--neutral-fill-input-rest:$person-card-background-color;--neutral-fill-input-hover:$person-card-chat-input-hover-color;--neutral-fill-input-focus:$person-card-chat-input-focus-color;width:300px;margin-inline-start:16px;border-radius:4px;border:1px solid var(--person-card-chat-input-border-color,var(--neutral-foreground-hint))}:host .message-section .send-message-icon{max-width:15px;margin-top:10px}:host .message-section svg{height:17px;width:16px;fill:var(--person-card-chat-input-border-color,var(--neutral-foreground-hint))}:host .message-section svg:hover{filter:brightness(.5)}:host .message-section svg:disabled{filter:none}:host .person-root.large,:host .person-root.threelines{--person-avatar-size-3-lines:75px}:host fluent-button.close-button.lightweight::part(control),:host fluent-button.expanded-details-button::part(control),:host fluent-button.section__show-more.lightweight::part(control){background:var(--person-card-fluent-background-color,transparent)}:host fluent-button.icon::part(control),:host fluent-button.nav__back::part(control){border:none;padding:0;background:0 0}:host fluent-button.icon::part(control) :hover,:host fluent-button.nav__back::part(control) :hover{background:0 0}[dir=rtl] .base-icons{right:91px}[dir=rtl] .nav__back{width:20px!important;transform:scaleX(-1);filter:fliph;filter:"FlipH"}[dir=rtl] .close-card-container .close-button{right:auto;left:10px}[dir=rtl] .message-section svg{transform:scale(-1,1)}@media (forced-colors:active) and (prefers-color-scheme:dark){.root{border:1px solid #fff;border-radius:inherit}.root svg,.root svg>path{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.expanded-details-container>svg,.expanded-details-container>svg>path,svg,svg>path{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}@media (forced-colors:active) and (prefers-color-scheme:light){.root{border:1px solid #000;border-radius:inherit}.root svg,.root svg>path{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.expanded-details-container>svg,.expanded-details-container>svg>path,svg,svg>path{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}
`];var re=function(vt,yt,Ie,qe){var Kt,nt=arguments.length,pt=nt<3?yt:null===qe?qe=Object.getOwnPropertyDescriptor(yt,Ie):qe;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pt=Reflect.decorate(vt,yt,Ie,qe);else for(var Yt=vt.length-1;Yt>=0;Yt--)(Kt=vt[Yt])&&(pt=(nt<3?Kt(pt):nt>3?Kt(yt,Ie,pt):Kt(yt,Ie))||pt);return nt>3&&pt&&Object.defineProperty(yt,Ie,pt),pt},Oe=function(vt,yt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(vt,yt)};let Xe=(()=>{class vt extends v.N{get isCompact(){return this._isCompact}constructor(){super(),this.personDetails=null,this.renderLoading=()=>M.Q`
      <div class="loading">
        <mgt-spinner></mgt-spinner>
      </div>
    `,this._isCompact=!1}asCompactView(){return this._isCompact=!0,this}asFullView(){return this._isCompact=!1,this}clearState(){this._isCompact=!1,this.personDetails=null}render(){return this.isCompact?this.renderCompactView():this.renderFullView()}renderNoData(){return s.qy`
      <div class="no-data">No data</div>
    `}navigateCard(Ie){var qe;let nt=this.parentNode;for(;nt;){nt=nt.parentNode;const Kt=nt;if((null===(qe=Kt?.host)||void 0===qe?void 0:qe.tagName)===`${E.U.prefix}-PERSON-CARD`.toUpperCase()){nt=Kt.host;break}}nt.navigate(Ie)}}return re([(0,c.MZ)({attribute:"person-details",type:Object}),Oe("design:type",Object)],vt.prototype,"personDetails",void 0),re([(0,c.wk)(),Oe("design:type",Boolean)],vt.prototype,"_isCompact",void 0),vt})();const He=[s.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none}:host .root .part{display:grid;grid-template-columns:auto 1fr auto}:host .root .part .part__icon{display:flex;min-width:20px;width:20px;height:20px;align-items:center;justify-content:center;margin-left:20px;margin-top:10px;line-height:20px}:host .root .part .part__icon svg{fill:var(--contact-copy-icon-color,var(--neutral-foreground-hint))}:host .root .part .part__details{margin:10px 14px;overflow:hidden}:host .root .part .part__details .part__title{font-size:12px;color:var(--contact-title-color,var(--neutral-foreground-hint));line-height:16px}:host .root .part .part__details .part__value{grid-column:2;color:var(--contact-value-color,var(--neutral-foreground-rest));font-size:14px;font-weight:400;line-height:19px}:host .root .part .part__details .part__value .part__link{color:var(--contact-link-color,var(--accent-foreground-rest));font-size:14px;cursor:pointer;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%;display:inline-block}:host .root .part .part__details .part__value .part__link:hover{color:var(--contact-link-hover-color,var(--accent-foreground-hover))}:host .root .part .part__copy{width:32px;height:100%;background-color:var(--contact-background-color,transparent);visibility:hidden;display:flex;align-items:center;justify-content:flex-start}:host .root .part .part__copy svg{fill:var(--contact-copy-icon-color,var(--neutral-foreground-hint));cursor:pointer}:host .root .part:hover .part__copy{visibility:visible}:host .root.compact{padding:0}:host .root.compact .part{height:30px;align-items:center}:host .root.compact .part__details{margin:0}:host .root.compact .part__title{display:none}:host .root.compact .part__icon{margin-top:0;margin-right:6px;margin-bottom:2px}[dir=rtl] .part__link.phone{text-align:right;direction:ltr}[dir=rtl] .part__icon{margin:10px 20px 0 0!important}[dir=rtl].compact .part__icon{margin-left:6px!important;margin-top:0!important}@media (forced-colors:active) and (prefers-color-scheme:dark){.root svg{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.root svg path,.root svg rect{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}@media (forced-colors:active) and (prefers-color-scheme:light){.root svg{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.root svg path,.root svg rect{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}
`],rt={contactSectionTitle:"Contact",emailTitle:"Email",chatTitle:"Teams",businessPhoneTitle:"Business Phone",cellPhoneTitle:"Mobile Phone",departmentTitle:"Department",personTitle:"Title",officeLocationTitle:"Office Location",copyToClipboardButton:"Copy to clipboard"};var Te=d(8940);class U extends Xe{static get styles(){return He}get strings(){return rt}get hasData(){return!!this._contactParts&&!!Object.values(this._contactParts).filter(Ie=>!!Ie.value).length}constructor(yt){var Ie;super(),this._contactParts={email:{icon:(0,V.r)(V.A.Email),onClick:()=>this.sendEmail((0,N.iu)(this._person)),showCompact:!0,title:this.strings.emailTitle},chat:{icon:(0,V.r)(V.A.Chat),onClick:()=>{var qe;return this.sendChat(null===(qe=this._person)||void 0===qe?void 0:qe.userPrincipalName)},showCompact:!1,title:this.strings.chatTitle},businessPhone:{icon:(0,V.r)(V.A.Phone),onClick:()=>{var qe,nt;return this.sendCall((null===(nt=null===(qe=this._person)||void 0===qe?void 0:qe.businessPhones)||void 0===nt?void 0:nt.length)>0?this._person.businessPhones[0]:null)},showCompact:!0,title:this.strings.businessPhoneTitle},cellPhone:{icon:(0,V.r)(V.A.CellPhone),onClick:()=>{var qe;return this.sendCall(null===(qe=this._person)||void 0===qe?void 0:qe.mobilePhone)},showCompact:!0,title:this.strings.cellPhoneTitle},department:{icon:(0,V.r)(V.A.Department),showCompact:!1,title:this.strings.departmentTitle},title:{icon:(0,V.r)(V.A.Person),showCompact:!1,title:this.strings.personTitle},officeLocation:{icon:(0,V.r)(V.A.OfficeLocation),showCompact:!0,title:this.strings.officeLocationTitle}},this.sendCall=qe=>{this.sendLink("tel:",qe)},this._person=yt,this._contactParts.email.value=(0,N.iu)(this._person),this._contactParts.chat.value=this._person.userPrincipalName,this._contactParts.cellPhone.value=this._person.mobilePhone,this._contactParts.department.value=this._person.department,this._contactParts.title.value=this._person.jobTitle,this._contactParts.officeLocation.value=this._person.officeLocation,null!==(Ie=this._person.businessPhones)&&void 0!==Ie&&Ie.length&&(this._contactParts.businessPhone.value=this._person.businessPhones[0])}get displayName(){return this.strings.contactSectionTitle}get cardTitle(){return this.strings.contactSectionTitle}renderIcon(){return(0,V.r)(V.A.Contact)}clearState(){super.clearState();for(const yt of Object.keys(this._contactParts))this._contactParts[yt].value=null}renderCompactView(){if(!this.hasData)return null;const yt=Object.values(this._contactParts).filter(nt=>!!nt.value);let Ie=Object.values(yt).filter(nt=>!!nt.value&&nt.showCompact);Ie?.length||(Ie=Object.values(yt).slice(0,2));const qe=s.qy`
      ${Ie.map(nt=>this.renderContactPart(nt))}
    `;return s.qy`
      <div class="root compact" dir=${this.direction}>
        ${qe}
      </div>
    `}renderFullView(){let yt;if(this.hasData){const Ie=Object.values(this._contactParts).filter(qe=>!!qe.value);yt=s.qy`
        ${Ie.map(qe=>this.renderContactPart(qe))}
      `}return s.qy`
      <div class="root" dir=${this.direction}>
        ${yt}
      </div>
    `}renderContactPart(yt){let Ie=!1;("Mobile Phone"===yt.title||"Business Phone"===yt.title)&&(Ie=!0);const nt=yt.onClick?s.qy`
          <span class=${(0,I.H)({part__link:!0,phone:Ie})} @click=${pt=>yt.onClick(pt)}>${yt.value}</span>
        `:s.qy`
          ${yt.value}
        `;return s.qy`
      <div class="part" role="button" @click=${pt=>this.handlePartClick(pt,yt.value)} tabindex="0">
        <div class="part__icon" aria-label=${yt.title} title=${yt.title}>${yt.icon}</div>
        <div class="part__details">
          <div class="part__title">${yt.title}</div>
          <div class="part__value" title=${yt.title}>${nt}</div>
        </div>
        <div
          class="part__copy"
          aria-label=${this.strings.copyToClipboardButton}
          title=${this.strings.copyToClipboardButton}
        >
          ${(0,V.r)(V.A.Copy)}
        </div>
      </div>
    `}handlePartClick(yt,Ie){Ie&&navigator.clipboard.writeText(Ie)}sendLink(yt,Ie){Ie?window.open(`${yt}${Ie}`,"_blank","noreferrer"):console.error(`\u{1f992}: Target resource for ${yt} link was not provided: resource: ${Ie}`)}sendChat(yt){if(!yt)return void console.error("\u{1f992}: Can't send chat when upn is not provided");const Ie=`https://teams.microsoft.com/l/chat/0/0?users=${yt}`,qe=()=>window.open(Ie,"_blank","noreferrer");T.isAvailable?T.executeDeepLink(Ie,nt=>{nt||qe()}):qe()}sendEmail(yt){this.sendLink("mailto:",yt)}}var Y=d(8072),be=d(3173);const Qe=[s.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none}:host .root.compact{padding:0}:host .root .message{padding:8px 20px;display:flex;align-items:center;justify-content:space-between}:host .root .message:hover{background-color:var(--message-hover-color,var(--neutral-fill-hover));cursor:pointer}:host .root .message:last-child{margin-bottom:unset}:host .root .message .message__detail{min-width:0;line-height:normal}:host .root .message .message__detail .message__subject{color:var(--message-subject-color,var(--neutral-foreground-color));font-size:var(--message-subject-font-size, 14px);font-weight:var(--message-subject-font-weight,600);line-height:var(--message-subject-line-height, 20px)}:host .root .message .message__detail .message__from{font-size:var(--message-from-font-size, 12px);color:var(--message-from-color,var(--neutral-foreground-color));line-height:var(--message-from-line-height, 16px);font-weight:var(--message-from-font-weight,400)}:host .root .message .message__detail .message__message{font-size:var(--message-from-font-size, 12px);color:var(--message-color,var(--neutral-foreground-hint));line-height:var(--message-from-line-height, 16px);font-weight:var(--message-from-font-weight,400)}:host .root .message .message__detail>div{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host .root .message .message__date{margin-top:8px;font-size:12px;color:var(--message-date-color,var(--neutral-foreground-hint));margin-left:10px;white-space:nowrap}
`],Ce={emailsSectionTitle:"Emails"};var lt=function(vt,yt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(vt,yt)};let We=(()=>{class vt extends Xe{static get styles(){return Qe}get strings(){return Ce}constructor(Ie){super(),this._messages=Ie}get displayName(){return this.strings.emailsSectionTitle}get cardTitle(){return this.strings.emailsSectionTitle}clearState(){super.clearState(),this._messages=[]}renderIcon(){return(0,V.r)(V.A.Messages)}renderCompactView(){var Ie;let qe;if(null!==(Ie=this._messages)&&void 0!==Ie&&Ie.length){const nt=this._messages?this._messages.slice(0,3).map(pt=>this.renderMessage(pt)):[];qe=s.qy`
         ${nt}
       `}else qe=this.renderNoData();return s.qy`
       <div class="root compact">
         ${qe}
       </div>
     `}renderFullView(){var Ie;let qe;return qe=null!==(Ie=this._messages)&&void 0!==Ie&&Ie.length?s.qy`
         ${this._messages.slice(0,5).map(nt=>this.renderMessage(nt))}
       `:this.renderNoData(),s.qy`
       <div class="root">
         ${qe}
       </div>
     `}renderMessage(Ie){return s.qy`
       <div class="message" @click=${()=>this.handleMessageClick(Ie)}>
         <div class="message__detail">
           <div class="message__subject">${Ie.subject}</div>
           <div class="message__from">${Ie.from.emailAddress.name}</div>
           <div class="message__message">${Ie.bodyPreview}</div>
         </div>
         <div class="message__date">${(0,be.h3)(new Date(Ie.receivedDateTime))}</div>
       </div>
     `}handleMessageClick(Ie){window.open(Ie.webLink,"_blank","noreferrer")}}return function(vt,yt,Ie,qe){var Kt,nt=arguments.length,pt=nt<3?yt:null===qe?qe=Object.getOwnPropertyDescriptor(yt,Ie):qe;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pt=Reflect.decorate(vt,yt,Ie,qe);else for(var Yt=vt.length-1;Yt>=0;Yt--)(Kt=vt[Yt])&&(pt=(nt<3?Kt(pt):nt>3?Kt(yt,Ie,pt):Kt(yt,Ie))||pt);nt>3&&pt&&Object.defineProperty(yt,Ie,pt)}([(0,c.wk)(),lt("design:type",Array)],vt.prototype,"_messages",void 0),vt})();const pe=[s.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none}:host .root.compact{padding:0}:host .root.compact .coworker .coworker__person-image{height:40px;width:40px;border-radius:40px;--person-avatar-size:40px;margin-right:12px}:host .root.compact .coworker .coworker__name{font-size:14px}:host .root.compact .coworker .coworker__title{font-size:12px}:host .root .subtitle{color:var(--organization-sub-title-color,var(--neutral-foreground-hint));font-size:14px;margin:0 20px 8px}:host .root .divider{display:flex;background:var(--organization-coworker-border-color,var(--neutral-stroke-rest));height:1px;margin:26px 20px 18px}:host .root .org-member{height:74px;box-sizing:border-box;border-radius:2px;padding:12px;display:flex;align-items:center;margin-inline:20px}:host .root .org-member.org-member--target{background-color:var(--organization-active-org-member-target-background-color,var(--neutral-fill-active));border:1px solid var(--organization-active-org-member-border-color,var(--accent-foreground-rest))}:host .root .org-member:not(.org-member--target){border:1px solid var(--organization-coworker-border-color,var(--neutral-stroke-rest))}:host .root .org-member:not(.org-member--target):hover{cursor:pointer;background-color:var(--organization-hover-color,var(--neutral-fill-hover))}:host .root .org-member .org-member__person{flex-grow:1}:host .root .org-member .org-member__person .org-member__person-image{--person-avatar-size:var(--organization-member-person-avatar-size, 40px)}:host .root .org-member .org-member__details{flex-grow:1}:host .root .org-member .org-member__details .org-member__name{font-size:16px;color:var(--organization-title-color,var(--neutral-foreground-rest));font-weight:600}:host .root .org-member .org-member__details .org-member__department,:host .root .org-member .org-member__details .org-member__title{font-weight:14px;color:var(--organization-sub-title-color,var(--neutral-foreground-hint))}:host .root .org-member__separator:not(:last-child){border:1px solid var(--organization-coworker-border-color,var(--neutral-stroke-rest));box-sizing:border-box;width:0;margin:0 50%;height:14px}:host .root .coworker{display:flex;align-items:center;padding:10px 20px}:host .root .coworker:hover{cursor:pointer;background-color:var(--organization-coworker-hover-color,var(--neutral-fill-hover))}:host .root .coworker .coworker__person{height:46px;border-radius:46px;margin-right:8px}:host .root .coworker .coworker__person .coworker__person-image{--person-avatar-size:var(--organization-coworker-person-avatar-size, 40px)}:host .root .direct-report__compact{padding:12px 20px}:host .root .direct-report__compact .direct-report{margin-right:4px}:host .root .direct-report-list{border:1px solid var(--organization-coworker-border-color,var(--neutral-stroke-rest));margin-inline:20px}:host .root .direct-report-list .org-member--direct-report{border:none;cursor:pointer;margin-inline:0}:host .root .direct-report-list .org-member--direct-report .direct-report__person-image{--person-avatar-size:var(--organization-direct-report-person-avatar-size, 38px)}[dir=rtl] .org-member .org-member__more{transform:scaleX(-1);filter:fliph;filter:"FlipH"}@media (forced-colors:active) and (prefers-color-scheme:dark){:host svg,:host svg>path{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}@media (forced-colors:active) and (prefers-color-scheme:light){:host svg,:host svg>path{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}
`],j={reportsToSectionTitle:"Reports to",directReportsSectionTitle:"Direct reports",organizationSectionTitle:"Organization",youWorkWithSubSectionTitle:"You work with",userWorksWithSubSectionTitle:"works with"};var ce=function(vt,yt,Ie,qe){var Kt,nt=arguments.length,pt=nt<3?yt:null===qe?qe=Object.getOwnPropertyDescriptor(yt,Ie):qe;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pt=Reflect.decorate(vt,yt,Ie,qe);else for(var Yt=vt.length-1;Yt>=0;Yt--)(Kt=vt[Yt])&&(pt=(nt<3?Kt(pt):nt>3?Kt(yt,Ie,pt):Kt(yt,Ie))||pt);return nt>3&&pt&&Object.defineProperty(yt,Ie,pt),pt},ke=function(vt,yt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(vt,yt)};let wt=(()=>{class vt extends Xe{static get styles(){return pe}get strings(){return j}constructor(Ie,qe){super(),this._state=Ie,this._me=qe}clearState(){super.clearState(),this._state=void 0,this._me=void 0}get displayName(){const{person:Ie,directReports:qe}=this._state;return!Ie.manager&&qe?.length?`${this.strings.directReportsSectionTitle} (${qe.length})`:this.strings.reportsToSectionTitle}get cardTitle(){return this.strings.organizationSectionTitle}renderIcon(){return(0,V.r)(V.A.Organization)}renderCompactView(){var Ie;let qe;if(null===(Ie=this._state)||void 0===Ie||!Ie.person)return null;const{person:nt,directReports:pt}=this._state;return nt?(nt.manager?qe=this.renderCoworker(nt.manager):pt?.length&&(qe=this.renderCompactDirectReports()),s.qy`
        <div class="root compact">
          ${qe}
        </div>
      `):null}renderFullView(){var Ie;let qe;if(null===(Ie=this._state)||void 0===Ie||!Ie.person)return null;const{person:nt,directReports:pt,people:Kt}=this._state;if(!nt&&!pt&&!Kt)return null;{const Yt=this.renderManagers(),cn=this.renderCurrentUser(),vn=this.renderDirectReports(),pn=this.renderCoworkers();qe=s.qy`
          ${Yt} ${cn} ${vn} ${pn}
        `}return s.qy`
       <div class="root" dir=${this.direction}>
         ${qe}
       </div>
     `}renderManager(Ie){return M.Q`
      <div
        class="org-member"
        @keydown=${qe=>{("Enter"===qe.code||" "===qe.code)&&this.navigateCard(Ie)}}
        @click=${()=>this.navigateCard(Ie)}
      >
        <div class="org-member__person">
          <mgt-person
            class="org-member__person-image"
            .personDetails=${Ie}
            .fetchImage=${!0}
            view="twolines"
            .showPresence=${!0}
          ></mgt-person>
        </div>
        <div tabindex="0" class="org-member__more">
          ${(0,V.r)(V.A.ExpandRight)}
        </div>
      </div>
      <div class="org-member__separator"></div>
     `}renderManagers(){const{person:Ie}=this._state;if(!Ie?.manager)return null;const qe=[];let nt=Ie;for(;nt.manager;)qe.push(nt.manager),nt=nt.manager;return qe.length?qe.reverse().map(pt=>this.renderManager(pt)):null}renderDirectReports(){const{directReports:Ie}=this._state;return Ie?.length?s.qy`
      <div class="org-member__separator"></div>
      <div class="direct-report-list">
        ${Ie.map(qe=>M.Q`
            <div
              class="org-member org-member--direct-report"
              @keydown=${nt=>{("Enter"===nt.code||" "===nt.code)&&this.navigateCard(qe)}}
              @click=${()=>this.navigateCard(qe)}
            >
              <div class="org-member__person">
                <mgt-person
                  class="org-member__person-image"
                  .personDetails=${qe}
                  .fetchImage=${!0}
                  .showPresence=${!0}
                  view="twolines"
                ></mgt-person>
              </div>
              <div tabindex="0" class="org-member__more">
                ${(0,V.r)(V.A.ExpandRight)}
              </div>
            </div>
          `)}
      </div>
     `:null}renderCompactDirectReports(){const{directReports:Ie}=this._state;return s.qy`
      <div class="direct-report__compact">
        ${Ie.slice(0,6).map(qe=>M.Q`
            <div
              class="direct-report"
              @keydown=${nt=>{("Enter"===nt.code||" "===nt.code)&&this.navigateCard(qe)}}
              @click=${()=>this.navigateCard(qe)}
            >
              <mgt-person
                class="direct-report__person-image"
                .personDetails=${qe}
                .fetchImage=${!0}
                .showPresence=${!0}
                view="twolines"
              ></mgt-person>
            </div>
          `)}
      </div>
    `}renderCurrentUser(){const{person:Ie}=this._state;return M.Q`
       <div class="org-member org-member--target">
         <div class="org-member__person">
           <mgt-person
              class="org-member__person-image"
             .personDetails=${Ie}
             .fetchImage=${!0}
             .showPresence=${!0}
             view="twolines"
           ></mgt-person>
         </div>
       </div>
     `}renderCoworker(Ie){return M.Q`
      <div
        class="coworker"
        @keydown=${qe=>{("Enter"===qe.code||" "===qe.code)&&this.navigateCard(Ie)}}
        @click=${()=>this.navigateCard(Ie)}
      >
        <div class="coworker__person">
          <mgt-person
            class="coworker__person-image"
            .personDetails=${Ie}
            .fetchImage=${!0}
            .showPresence=${!0}
            view="twolines"
          ></mgt-person>
        </div>
      </div>
    `}renderCoworkers(){const{people:Ie}=this._state;return Ie?.length?s.qy`
       <div class="divider"></div>
       <div class="subtitle" tabindex="0">${this._me.id===this._state.person.id?this.strings.youWorkWithSubSectionTitle:`${this._state.person.givenName} ${this.strings.userWorksWithSubSectionTitle}`}</div>
       <div>
         ${Ie.slice(0,6).map(nt=>this.renderCoworker(nt))}
       </div>
     `:null}}return ce([(0,c.wk)(),ke("design:type",Object)],vt.prototype,"_state",void 0),ce([(0,c.wk)(),ke("design:type",Object)],vt.prototype,"_me",void 0),vt})();const ot=[s.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none;background-color:var(--profile-background-color,--neutral-layer-1)}:host .root{padding:20px 0}:host .root.compact{padding:0}:host .root .title{font-size:14px;font-weight:600;color:var(--profile-title-color,var(--neutral-foreground-rest));margin:0 20px 12px}:host .root section{margin-bottom:24px;padding:0 20px}:host .root section:last-child{margin:0}:host .root section .section__title{font-size:14px;color:var(--profile-section-title-color,var(--neutral-foreground-hint))}:host .root section .section__content{display:flex;flex-direction:column;margin-top:10px}:host .root .token-list{display:flex;flex-flow:row wrap;margin-top:-10px}:host .root .token-list .token-list__item{text-overflow:ellipsis;white-space:nowrap;display:inline-block;overflow:hidden;font-size:14px;align-items:center;background:var(--profile-token-item-background-color,var(--neutral-fill-secondary-rest));border-radius:2px;max-height:28px;padding:4px 8px;margin-right:10px;margin-top:10px;color:var(--profile-token-item-color,var(--neutral-foreground-rest))}:host .root .token-list .token-list__item:last-child{margin-right:initial}:host .root .token-list .token-list__item.overflow{display:none}:host .root .token-list .token-list__item.token-list__item--show-overflow{cursor:pointer;user-select:unset;background:0 0;color:var(--profile-token-overflow-color,var(--accent-foreground-rest))}:host .root .data-list__item{margin-bottom:20px}:host .root .data-list__item:last-child{margin-bottom:initial}:host .root .data-list__item .data-list__item__header{display:flex;justify-content:space-between;align-items:center}:host .root .data-list__item .data-list__item__content{font-size:12px;line-height:16px;color:var(--profile-section-title-color,var(--neutral-foreground-hint));margin-top:4px}:host .root .data-list__item .data-list__item__title{font-size:14px;line-height:16px;color:var(--profile-title-color,var(--neutral-foreground-rest))}:host .root .data-list__item .data-list__item__date-range{color:var(--profile-section-title-color,var(--neutral-foreground-hint));font-size:10px;line-height:12px}:host .root .language__proficiency{opacity:.77}:host .root .work-position .work-position__company{color:#023b8f}:host .root .work-position .work-position__location{font-size:10px;color:var(--profile-section-title-color,var(--neutral-foreground-hint));line-height:16px}:host .root .educational-activity .educational-activity__degree{font-size:12px;line-height:14px;color:var(--profile-section-title-color,var(--neutral-foreground-hint))}:host .root .birthday{display:flex;align-items:center;margin-top:-6px}:host .root .birthday .birthday__icon{margin-right:8px}:host .root .birthday .birthday__date{font-size:12px;color:var(--profile-title-color,var(--neutral-foreground-rest))}[dir=rtl] .token-list__item{margin-right:0!important}
`],mt={SkillsAndExperienceSectionTitle:"Skills & Experience",AboutCompactSectionTitle:"About",SkillsSubSectionTitle:"Skills",LanguagesSubSectionTitle:"Languages",WorkExperienceSubSectionTitle:"Work Experience",EducationSubSectionTitle:"Education",professionalInterestsSubSectionTitle:"Professional Interests",personalInterestsSubSectionTitle:"Personal Interests",birthdaySubSectionTitle:"Birthday",currentYearSubtitle:"Current",socialMediaSubSectionTitle:"Social Media"};var Je=function(vt,yt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(vt,yt)};let tn=(()=>{class vt extends Xe{static get styles(){return ot}get strings(){return mt}get displayName(){return this.strings.SkillsAndExperienceSectionTitle}get cardTitle(){return this.strings.AboutCompactSectionTitle}get hasData(){var Ie,qe;if(!this.profile)return!1;const{languages:nt,skills:pt,positions:Kt,educationalActivities:Yt}=this.profile;return[this._birthdayAnniversary,null===(Ie=this._personalInterests)||void 0===Ie?void 0:Ie.length,null===(qe=this._professionalInterests)||void 0===qe?void 0:qe.length,nt?.length,pt?.length,Kt?.length,Yt?.length].filter(cn=>!!cn).length>0}get profile(){return this._profile}set profile(Ie){Ie!==this._profile&&(this._profile=Ie,this._birthdayAnniversary=Ie?.anniversaries?Ie.anniversaries.find(this.isBirthdayAnniversary):null,this._personalInterests=Ie?.interests?Ie.interests.filter(this.isPersonalInterest):null,this._professionalInterests=Ie?.interests?Ie.interests.filter(this.isProfessionalInterest):null)}constructor(Ie){super(),this.isPersonalInterest=qe=>{var nt;return null===(nt=qe.categories)||void 0===nt?void 0:nt.includes("personal")},this.isProfessionalInterest=qe=>{var nt;return null===(nt=qe.categories)||void 0===nt?void 0:nt.includes("professional")},this.isBirthdayAnniversary=qe=>"birthday"===qe.type,this.profile=Ie}renderIcon(){return(0,V.r)(V.A.Profile)}clearState(){super.clearState(),this.profile=null}renderCompactView(){return s.qy`
       <div class="root compact" dir=${this.direction}>
         ${this.renderSubSections().slice(0,2)}
       </div>
     `}renderFullView(){return this.initPostRenderOperations(),s.qy`
       <div class="root" dir=${this.direction}>
         ${this.renderSubSections()}
       </div>
     `}renderSubSections(){return[this.renderSkills(),this.renderBirthday(),this.renderLanguages(),this.renderWorkExperience(),this.renderEducation(),this.renderProfessionalInterests(),this.renderPersonalInterests()].filter(qe=>!!qe)}renderLanguages(){var Ie;const{languages:qe}=this._profile;if(!qe?.length)return null;const nt=[];for(const Kt of qe){let Yt=null;!(null===(Ie=Kt.proficiency)||void 0===Ie)&&Ie.length&&(Yt=s.qy`
           <span class="language__proficiency" tabindex="0">
             &nbsp;(${Kt.proficiency})
           </span>
         `),nt.push(s.qy`
         <div class="token-list__item language">
           <span class="language__title" tabindex="0">${Kt.displayName}</span>
           ${Yt}
         </div>
       `)}return s.qy`
       <section>
         <div class="section__title" tabindex="0">${nt.length?this.strings.LanguagesSubSectionTitle:""}</div>
         <div class="section__content">
           <div class="token-list">
             ${nt}
           </div>
         </div>
       </section>
     `}renderSkills(){const{skills:Ie}=this._profile;if(!Ie?.length)return null;const qe=[];for(const pt of Ie)qe.push(s.qy`
         <div class="token-list__item skill" tabindex="0">
           ${pt.displayName}
         </div>
       `);return s.qy`
       <section>
         <div class="section__title" tabindex="0">${qe.length?this.strings.SkillsSubSectionTitle:""}</div>
         <div class="section__content">
           <div class="token-list">
             ${qe}
           </div>
         </div>
       </section>
     `}renderWorkExperience(){var Ie,qe,nt,pt,Kt;const{positions:Yt}=this._profile;if(!Yt?.length)return null;const cn=[];for(const pn of this._profile.positions)(pn.detail.description||""!==pn.detail.jobTitle)&&cn.push(s.qy`
           <div class="data-list__item work-position">
             <div class="data-list__item__header">
               <div class="data-list__item__title" tabindex="0">${null===(Ie=pn.detail)||void 0===Ie?void 0:Ie.jobTitle}</div>
               <div class="data-list__item__date-range" tabindex="0">
                 ${this.getDisplayDateRange(pn.detail)}
               </div>
             </div>
             <div class="data-list__item__content">
               <div class="work-position__company" tabindex="0">
                 ${null===(nt=null===(qe=pn?.detail)||void 0===qe?void 0:qe.company)||void 0===nt?void 0:nt.displayName}
               </div>
               <div class="work-position__location" tabindex="0">
                 ${this.displayLocation(null===(Kt=null===(pt=pn?.detail)||void 0===pt?void 0:pt.company)||void 0===Kt?void 0:Kt.address)}
               </div>
             </div>
           </div>
         `);return s.qy`
       <section>
         <div class="section__title" tabindex="0">${cn.length?this.strings.WorkExperienceSubSectionTitle:""}</div>
         <div class="section__content">
           <div class="data-list">
             ${cn}
           </div>
         </div>
       </section>
     `}renderEducation(){const{educationalActivities:Ie}=this._profile;if(!Ie?.length)return null;const qe=[];for(const pt of Ie)qe.push(s.qy`
         <div class="data-list__item educational-activity">
           <div class="data-list__item__header">
             <div class="data-list__item__title" tabindex="0">${pt.institution.displayName}</div>
             <div class="data-list__item__date-range" tabindex="0">
               ${this.getDisplayDateRange(pt)}
             </div>
           </div>
           ${pt.program.displayName?s.qy`<div class="data-list__item__content">
                  <div class="educational-activity__degree" tabindex="0">
                  ${pt.program.displayName}
                </div>`:s.s6}
         </div>
       `);return s.qy`
       <section>
         <div class="section__title" tabindex="0">${qe.length?this.strings.EducationSubSectionTitle:""}</div>
         <div class="section__content">
           <div class="data-list">
             ${qe}
           </div>
         </div>
       </section>
     `}renderProfessionalInterests(){var Ie;if(null===(Ie=this._professionalInterests)||void 0===Ie||!Ie.length)return null;const qe=[];for(const pt of this._professionalInterests)qe.push(s.qy`
         <div class="token-list__item interest interest--professional" tabindex="0">
           ${pt.displayName}
         </div>
       `);return s.qy`
       <section>
         <div class="section__title" tabindex="0">${qe.length?this.strings.professionalInterestsSubSectionTitle:""}</div>
         <div class="section__content">
           <div class="token-list">
             ${qe}
           </div>
         </div>
       </section>
     `}renderPersonalInterests(){var Ie;if(null===(Ie=this._personalInterests)||void 0===Ie||!Ie.length)return null;const qe=[];for(const pt of this._personalInterests)qe.push(s.qy`
         <div class="token-list__item interest interest--personal" tabindex="0">
           ${pt.displayName}
         </div>
       `);return s.qy`
       <section>
         <div class="section__title" tabindex="0">${qe.length?this.strings.personalInterestsSubSectionTitle:""}</div>
         <div class="section__content">
           <div class="token-list">
             ${qe}
           </div>
         </div>
       </section>
     `}renderBirthday(){var Ie;return null!==(Ie=this._birthdayAnniversary)&&void 0!==Ie&&Ie.date?s.qy`
       <section>
         <div class="section__title" tabindex="0">Birthday</div>
         <div class="section__content">
           <div class="birthday">
             <div class="birthday__icon">
               ${(0,V.r)(V.A.Birthday)}
             </div>
             <div class="birthday__date" tabindex="0">
               ${this.getDisplayDate(new Date(this._birthdayAnniversary.date))}
             </div>
           </div>
         </div>
       </section>
     `:null}getDisplayDate(Ie){return Ie.toLocaleString("default",{day:"numeric",month:"long"})}getDisplayDateRange(Ie){if(!Ie.startMonthYear)return s.s6;const qe=new Date(Ie.startMonthYear).getFullYear();return 0===qe||1===qe?s.s6:`${qe} \u2014 ${Ie.endMonthYear?new Date(Ie.endMonthYear).getFullYear():this.strings.currentYearSubtitle}`}displayLocation(Ie){return Ie?.city?Ie.state?`${Ie.city}, ${Ie.state}`:Ie.city:s.s6}initPostRenderOperations(){setTimeout(()=>{try{this.shadowRoot.querySelectorAll("section").forEach(qe=>{this.handleTokenOverflow(qe)})}catch{}},0)}handleTokenOverflow(Ie){const qe=Ie.querySelectorAll(".token-list");if(qe?.length)for(const nt of Array.from(qe)){const pt=nt.querySelectorAll(".token-list__item");if(!pt?.length)continue;let Kt=null,Yt=pt[0].getBoundingClientRect();const cn=nt.getBoundingClientRect(),vn=2*Yt.height+cn.top;for(let pn=0;pn<pt.length-1;pn++)if(Yt=pt[pn].getBoundingClientRect(),Yt.top>vn){Kt=Array.from(pt).slice(pn,pt.length);break}if(Kt){Kt.forEach(pi=>pi.classList.add("overflow"));const pn=document.createElement("div");pn.classList.add("token-list__item"),pn.classList.add("token-list__item--show-overflow"),pn.tabIndex=0,pn.innerText=`+ ${Kt.length} more`;const Ci=()=>{pn.remove(),Kt.forEach(pi=>pi.classList.remove("overflow"))};pn.addEventListener("click",()=>{Ci()}),pn.addEventListener("keydown",pi=>{"Enter"===pi.code&&Ci()}),nt.appendChild(pn)}}}}return function(vt,yt,Ie,qe){var Kt,nt=arguments.length,pt=nt<3?yt:null===qe?qe=Object.getOwnPropertyDescriptor(yt,Ie):qe;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pt=Reflect.decorate(vt,yt,Ie,qe);else for(var Yt=vt.length-1;Yt>=0;Yt--)(Kt=vt[Yt])&&(pt=(nt<3?Kt(pt):nt>3?Kt(yt,Ie,pt):Kt(yt,Ie))||pt);nt>3&&pt&&Object.defineProperty(yt,Ie,pt)}([(0,c.MZ)({attribute:!1}),Je("design:type",Object),Je("design:paramtypes",[Object])],vt.prototype,"profile",null),vt})();const Dn={showMoreSectionButton:"Show more",endOfCard:"End of the card",quickMessage:"Send a quick message",expandDetailsLabel:"Expand details",sendMessageLabel:"Send message",emailButtonLabel:"Email",callButtonLabel:"Call",chatButtonLabel:"Chat",closeCardLabel:"Close card",videoButtonLabel:"Video",goBackLabel:"Go Back"};var Rn=d(9546),Ei=d(5409),fn=d(742),fi=d(9808),Ln=d(4192),On=d(7153),Fi=d(175),Kn=d(7947),Mn=d(9605),yi=d(6105),ji=d(4632);let gt=(()=>{class vt extends ji.g{constructor(){super(...arguments),this.orientation="horizontal",this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=Ie=>"true"===Ie.getAttribute("aria-disabled"),this.isHiddenElement=Ie=>Ie.hasAttribute("hidden"),this.isFocusableElement=Ie=>!this.isDisabledElement(Ie)&&!this.isHiddenElement(Ie),this.setTabs=()=>{const Ie="gridColumn",qe="gridRow",nt=this.isHorizontal()?Ie:qe;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((pt,Kt)=>{if("tab"===pt.slot){const Yt=this.activeTabIndex===Kt&&this.isFocusableElement(pt);this.activeindicator&&this.isFocusableElement(pt)&&(this.showActiveIndicator=!0);const cn=this.tabIds[Kt],vn=this.tabpanelIds[Kt];pt.setAttribute("id",cn),pt.setAttribute("aria-selected",Yt?"true":"false"),pt.setAttribute("aria-controls",vn),pt.addEventListener("click",this.handleTabClick),pt.addEventListener("keydown",this.handleTabKeyDown),pt.setAttribute("tabindex",Yt?"0":"-1"),Yt&&(this.activetab=pt,this.activeid=cn)}pt.style[Ie]="",pt.style[qe]="",pt.style[nt]=`${Kt+1}`,this.isHorizontal()?pt.classList.remove("vertical"):pt.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((Ie,qe)=>{const nt=this.tabIds[qe];Ie.setAttribute("id",this.tabpanelIds[qe]),Ie.setAttribute("aria-labelledby",nt),this.activeTabIndex!==qe?Ie.setAttribute("hidden",""):Ie.removeAttribute("hidden")})},this.handleTabClick=Ie=>{const qe=Ie.currentTarget;1===qe.nodeType&&this.isFocusableElement(qe)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(qe),this.setComponent())},this.handleTabKeyDown=Ie=>{if(this.isHorizontal())switch(Ie.key){case On.kT:Ie.preventDefault(),this.adjustBackward(Ie);break;case On.bb:Ie.preventDefault(),this.adjustForward(Ie)}else switch(Ie.key){case On.I5:Ie.preventDefault(),this.adjustBackward(Ie);break;case On.HX:Ie.preventDefault(),this.adjustForward(Ie)}switch(Ie.key){case On.Tg:Ie.preventDefault(),this.adjust(-this.activeTabIndex);break;case On.FM:Ie.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=Ie=>{const qe=this.tabs;let nt=0;for(nt=this.activetab?qe.indexOf(this.activetab)+1:1,nt===qe.length&&(nt=0);nt<qe.length&&qe.length>1;){if(this.isFocusableElement(qe[nt])){this.moveToTabByIndex(qe,nt);break}if(this.activetab&&nt===qe.indexOf(this.activetab))break;nt+1>=qe.length?nt=0:nt+=1}},this.adjustBackward=Ie=>{const qe=this.tabs;let nt=0;for(nt=this.activetab?qe.indexOf(this.activetab)-1:0,nt=nt<0?qe.length-1:nt;nt>=0&&qe.length>1;){if(this.isFocusableElement(qe[nt])){this.moveToTabByIndex(qe,nt);break}nt-1<0?nt=qe.length-1:nt-=1}},this.moveToTabByIndex=(Ie,qe)=>{const nt=Ie[qe];this.activetab=nt,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=qe,nt.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(Ie,qe){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(nt=>nt.id===Ie),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(Ie=>{var qe;return null!==(qe=Ie.getAttribute("id"))&&void 0!==qe?qe:`tab-${(0,Fi.NF)()}`})}getTabPanelIds(){return this.tabpanels.map(Ie=>{var qe;return null!==(qe=Ie.getAttribute("id"))&&void 0!==qe?qe:`panel-${(0,Fi.NF)()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return"horizontal"===this.orientation}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const Ie=this.isHorizontal()?"gridColumn":"gridRow",qe=this.isHorizontal()?"translateX":"translateY",nt=this.isHorizontal()?"offsetLeft":"offsetTop",pt=this.activeIndicatorRef[nt];this.activeIndicatorRef.style[Ie]=`${this.activeTabIndex+1}`;const Kt=this.activeIndicatorRef[nt];this.activeIndicatorRef.style[Ie]=`${this.prevActiveTabIndex+1}`,this.activeIndicatorRef.style.transform=`${qe}(${Kt-pt}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[Ie]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${qe}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(Ie){const qe=this.tabs.filter(Yt=>this.isFocusableElement(Yt)),nt=qe.indexOf(this.activetab),pt=(0,Kn.AB)(0,qe.length-1,nt+Ie),Kt=this.tabs.indexOf(qe[pt]);Kt>-1&&this.moveToTabByIndex(this.tabs,Kt)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}return(0,fn.Cg)([fi.CF],vt.prototype,"orientation",void 0),(0,fn.Cg)([fi.CF],vt.prototype,"activeid",void 0),(0,fn.Cg)([Ln.sH],vt.prototype,"tabs",void 0),(0,fn.Cg)([Ln.sH],vt.prototype,"tabpanels",void 0),(0,fn.Cg)([(0,fi.CF)({mode:"boolean"})],vt.prototype,"activeindicator",void 0),(0,fn.Cg)([Ln.sH],vt.prototype,"activeIndicatorRef",void 0),(0,fn.Cg)([Ln.sH],vt.prototype,"showActiveIndicator",void 0),vt})();(0,yi.X)(gt,Mn.qw);var _t=d(9953),Ye=d(633),ft=d(8287),qt=d(1589),Sn=d(9760),Un=d(3226),At=d(8322),ui=d(4954),Fn=d(9457),Bn=d(4583),Qi=d(9709);const zr=gt.compose({baseName:"tabs",template:(vt,yt)=>_t.q`
    <template class="${Ie=>Ie.orientation}">
        ${(0,Mn.LT)(vt,yt)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${(0,Ye.e)("tabs")}></slot>

            ${(0,ft.z)(Ie=>Ie.showActiveIndicator,_t.q`
                    <div
                        ${(0,qt.K)("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${(0,Mn.aO)(vt,yt)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${(0,Ye.e)("tabpanels")}></slot>
        </div>
    </template>
`,styles:(vt,yt)=>Sn.A`
      ${(0,At.V)("grid")} :host {
        box-sizing: border-box;
        ${Qi.Ah}
        color: ${Fn.lHw};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${Bn.D} * 1px); auto;
        grid-template-columns: auto;
        position: relative;
        width: max-content;
        align-self: end;
      }

      .start,
      .end {
        align-self: center;
      }

      .activeIndicator {
        grid-row: 2;
        grid-column: 1;
        width: 20px;
        height: 3px;
        border-radius: calc(${Fn.PbG} * 1px);
        justify-self: center;
        background: ${Fn.IRh};
      }

      .activeIndicatorTransition {
        transition: transform 0.2s ease-in-out;
      }

      .tabpanel {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 4;
        position: relative;
      }

      :host(.vertical) {
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto 1fr;
      }

      :host(.vertical) .tablist {
        grid-row-start: 2;
        grid-row-end: 2;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto 1fr;
        position: relative;
        width: max-content;
        justify-self: end;
        align-self: flex-start;
        width: 100%;
      }

      :host(.vertical) .tabpanel {
        grid-column: 2;
        grid-row-start: 1;
        grid-row-end: 4;
      }

      :host(.vertical) .end {
        grid-row: 3;
      }

      :host(.vertical) .activeIndicator {
        grid-column: 1;
        grid-row: 1;
        width: 3px;
        height: 20px;
        margin-inline-start: calc(${Fn.vdx} * 1px);
        border-radius: calc(${Fn.PbG} * 1px);
        align-self: center;
        background: ${Fn.IRh};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors((0,ui.mr)(Sn.A`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${Un.A.Highlight};
        }
      `))});let bt=(()=>{class vt extends ji.g{}return(0,fn.Cg)([(0,fi.CF)({mode:"boolean"})],vt.prototype,"disabled",void 0),vt})();var dt=d(4932),$t=d(5532);const Vt=bt.compose({baseName:"tab",template:(vt,yt)=>_t.q`
    <template slot="tab" role="tab" aria-disabled="${Ie=>Ie.disabled}">
        <slot></slot>
    </template>
`,styles:(vt,yt)=>Sn.A`
      ${(0,At.V)("inline-flex")} :host {
        box-sizing: border-box;
        ${Qi.Ah}
        height: calc((${Bn.D} + (${Fn.vR1} * 2)) * 1px);
        padding: 0 calc((6 + (${Fn.vR1} * 2 * ${Fn.Brd})) * 1px);
        color: ${Fn.lHw};
        border-radius: calc(${Fn.PbG} * 1px);
        border: calc(${Fn.XAH} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1 / 3;
        cursor: pointer;
      }

      :host([aria-selected='true']) {
        z-index: 2;
      }

      :host(:hover),
      :host(:active) {
        color: ${Fn.lHw};
      }

      :host(:${dt.N}) {
        ${$t.W}
      }

      :host(.vertical) {
        justify-content: start;
        grid-column: 1 / 3;
      }

      :host(.vertical[aria-selected='true']) {
        z-index: 2;
      }

      :host(.vertical:hover),
      :host(.vertical:active) {
        color: ${Fn.lHw};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors((0,ui.mr)(Sn.A`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${Un.A.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: transparent;
            color: ${Un.A.Highlight};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: transparent;
            color: ${Un.A.Highlight};
            fill: currentcolor;
          }
          :host(:${dt.N}) {
            background: transparent;
            outline-color: ${Un.A.ButtonText};
          }
        `))}),hi=class $n extends ji.g{}.compose({baseName:"tab-panel",template:(vt,yt)=>_t.q`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(vt,yt)=>Sn.A`
  ${(0,At.V)("block")} :host {
    box-sizing: border-box;
    ${Qi.Ah}
    padding: 0 calc((6 + (${Fn.vR1} * 2 * ${Fn.Brd})) * 1px);
  }
`});var ki=d(7043),bi=d(8955),je=d(3601),ct=d(1965),st=function(vt,yt,Ie,qe){var Kt,nt=arguments.length,pt=nt<3?yt:null===qe?qe=Object.getOwnPropertyDescriptor(yt,Ie):qe;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pt=Reflect.decorate(vt,yt,Ie,qe);else for(var Yt=vt.length-1;Yt>=0;Yt--)(Kt=vt[Yt])&&(pt=(nt<3?Kt(pt):nt>3?Kt(yt,Ie,pt):Kt(yt,Ie))||pt);return nt>3&&pt&&Object.defineProperty(yt,Ie,pt),pt},Rt=function(vt,yt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(vt,yt)},Pt=function(vt,yt,Ie,qe){return new(Ie||(Ie=Promise))(function(pt,Kt){function Yt(pn){try{vn(qe.next(pn))}catch(Ci){Kt(Ci)}}function cn(pn){try{vn(qe.throw(pn))}catch(Ci){Kt(Ci)}}function vn(pn){pn.done?pt(pn.value):function nt(pt){return pt instanceof Ie?pt:new Ie(function(Kt){Kt(pt)})}(pn.value).then(Yt,cn)}vn((qe=qe.apply(vt,yt||[])).next())})};const sn=()=>{(0,je.E)(Ei.z1,zr,Vt,hi,ki.zi,bi.oR),(0,Te.N)("person-card",on),(0,ct.i)(),(0,Te.N)("contact",U),(0,it.sN)(),(0,Te.N)("organization",wt),(0,Te.N)("messages",We),(0,Y.x)(),(0,Te.N)("profile",tn),customElements.get((0,Te.F)("person"))||(0,it.sN)()};let on=(()=>{class vt extends v.N{static get styles(){return Me}get strings(){return Dn}static get requiredScopes(){return(()=>{const vt=[];return K.sections.files&&vt.push("Sites.Read.All"),K.sections.mailMessages&&(vt.push("Mail.Read"),vt.push("Mail.ReadBasic")),K.sections.organization&&(vt.push("User.Read.All"),K.sections.organization.showWorksWith&&vt.push("People.Read.All")),K.sections.profile&&vt.push("User.Read.All"),K.useContactApis&&vt.push("Contacts.Read"),vt.indexOf("User.Read.All")<0&&(vt.push("User.ReadBasic.All"),vt.push("User.Read")),vt.indexOf("People.Read.All")<0&&vt.push("People.Read"),K.isSendMessageVisible&&vt.push("Chat.ReadWrite"),[...new Set(vt)]})()}get personDetails(){return this._personDetails}set personDetails(Ie){this._personDetails!==Ie&&(this._personDetails=Ie,this.personImage=this.getImage())}get personQuery(){return this._personQuery}set personQuery(Ie){this._personQuery!==Ie&&(this._personQuery=Ie,this.personDetails=null,this._cardState=null)}get userId(){return this._userId}set userId(Ie){Ie!==this._userId&&(this._userId=Ie,this.personDetails=null,this._cardState=null)}get internalPersonDetails(){var Ie;return(null===(Ie=this._cardState)||void 0===Ie?void 0:Ie.person)||this.personDetails}constructor(){super(),this.isSendingMessage=!1,this.goBack=()=>{var Ie;if(null===(Ie=this._history)||void 0===Ie||!Ie.length)return;const qe=this._history.pop();this._currentSection=null;const nt=this.renderRoot.querySelector("fluent-tab");nt&&nt.click(),this._cardState=qe.state,this._personDetails=qe.state.person,this.personImage=qe.personImage,this.loadSections()},this.renderContent=()=>{var Ie;if(!this.internalPersonDetails)return this.renderNoData();const qe=this.internalPersonDetails,nt=this.getImage();if(this.hasTemplate("default"))return this.renderTemplate("default",{person:this.internalPersonDetails,personImage:nt});let pt;pt=this.strings.closeCardLabel;const Kt=this.isExpanded?s.qy`
           <div class="close-card-container">
             <fluent-button 
              appearance="lightweight" 
              class="close-button" 
              aria-label=${pt}
              @click=${this.closeCard} >
               ${(0,V.r)(V.A.Close)}
             </fluent-button>
           </div>
         `:null;pt=this.strings.goBackLabel;const Yt=null!==(Ie=this._history)&&void 0!==Ie&&Ie.length?s.qy`
            <div class="nav">
              <fluent-button 
                appearance="lightweight"
                class="nav__back" 
                aria-label=${pt} 
                @keydown=${this.handleGoBack}
                @click=${this.goBack}>${(0,V.r)(V.A.Back)}
               </fluent-button>
            </div>
          `:null;let cn=this.renderTemplate("person-details",{person:this.internalPersonDetails,personImage:nt});if(!cn){const Ci=this.renderPerson(),pi=this.renderContactIcons(qe);cn=s.qy`
         ${Ci} ${pi}
       `}const vn=this.isExpanded?this.renderExpandedDetails():this.renderExpandedDetailsButton();this._windowHeight=window.innerHeight&&document.documentElement.clientHeight?Math.min(window.innerHeight,document.documentElement.clientHeight):window.innerHeight||document.documentElement.clientHeight,this._windowHeight<250&&(this._smallView=!0);const pn=this.lockTabNavigation?s.qy`<div @keydown=${this.handleEndOfCard} aria-label=${this.strings.endOfCard} tabindex="0" id="end-of-container"></div>`:s.qy``;return s.qy`
      <div class="root" dir=${this.direction}>
        <div class=${(0,I.H)({small:this._smallView})}>
          ${Yt}
          ${Kt}
          <div class="person-details-container">${cn}</div>
          <div class="expanded-details-container">${vn}</div>
          ${pn}
        </div>
      </div>
     `},this.handleEndOfCard=Ie=>{if(Ie&&"Tab"===Ie.code){const qe=this.renderRoot.querySelector("#end-of-container");if(qe){qe.blur();const nt=this.renderRoot.querySelector("mgt-person");nt&&nt.focus()}}},this.closeCard=()=>{this.updateCurrentSection(null),this.isExpanded=!1},this.sendQuickMessage=()=>Pt(this,void 0,void 0,function*(){const Ie=this._chatInput.trim();if(!Ie?.length)return;const qe=this.personDetails,nt=this._me.userPrincipalName;this.isSendingMessage=!0;const pt=yield((vt,yt,Ie)=>ae(void 0,void 0,void 0,function*(){const qe={chatType:"oneOnOne",members:[{"@odata.type":"#microsoft.graph.aadUserConversationMember",roles:["owner"],"user@odata.bind":`https://graph.microsoft.com/v1.0/users('${Ie}')`},{"@odata.type":"#microsoft.graph.aadUserConversationMember",roles:["owner"],"user@odata.bind":`https://graph.microsoft.com/v1.0/users('${yt}')`}]};return yield vt.api("/chats").header("Cache-Control","no-store").middlewareOptions((0,S.F)(Z)).post(qe)}))(this._graph,qe.userPrincipalName,nt),Kt={body:{content:Ie}};yield((vt,yt,Ie)=>ae(void 0,void 0,void 0,function*(){return yield vt.api(`/chats/${yt}/messages`).header("Cache-Control","no-store").middlewareOptions((0,S.F)(ze)).post(Ie)}))(this._graph,pt.id,Kt),this.isSendingMessage=!1,this.clearInputData()}),this.emailUser=()=>{const Ie=this.internalPersonDetails;if(Ie){const qe=(0,N.iu)(Ie);qe&&window.open("mailto:"+qe,"_blank","noreferrer")}},this.callUser=()=>{var Ie,qe;const nt=this.personDetails,pt=this.personDetails;if(null!==(Ie=nt?.businessPhones)&&void 0!==Ie&&Ie.length){const Kt=nt.businessPhones[0];Kt&&window.open("tel:"+Kt,"_blank","noreferrer")}else if(null!==(qe=pt?.phones)&&void 0!==qe&&qe.length){const Yt=this.getPersonBusinessPhones(pt)[0];Yt&&window.open("tel:"+Yt,"_blank","noreferrer")}},this.chatUser=(Ie=null)=>{const qe=this.personDetails;if(qe?.userPrincipalName){let pt=`https://teams.microsoft.com/l/chat/0/0?users=${qe.userPrincipalName}`;Ie?.length&&(pt+=`&message=${Ie}`);const Kt=()=>window.open(pt,"_blank","noreferrer");T.isAvailable?T.executeDeepLink(pt,Yt=>{Yt||Kt()}):Kt()}},this.videoCallUser=()=>{const Ie=this.personDetails;if(Ie?.userPrincipalName){const nt=`https://teams.microsoft.com/l/call/0/0?users=${Ie.userPrincipalName}&withVideo=true`,pt=()=>window.open(nt,"_blank");T.isAvailable?T.executeDeepLink(nt,Kt=>{Kt||pt()}):pt()}},this.showExpandedDetails=()=>{const Ie=this.renderRoot.querySelector(".root");Ie?.animate&&Ie.animate([{height:"auto",transformOrigin:"top left"},{height:"auto",transformOrigin:"top left"}],{duration:1e3,easing:"ease-in-out",fill:"both"}),this.isExpanded=!0,this.fireCustomEvent("expanded",null,!0)},this.sendQuickMessageOnEnter=Ie=>{"Enter"===Ie.code&&this.sendQuickMessage()},this.handleGoBack=Ie=>{"Enter"===Ie.code&&this.goBack()},this._chatInput="",this._currentSection=null,this._history=[],this.sections=[],this._graph=null}navigate(Ie){this._history.push({personDetails:this.personDetails,personImage:this.getImage(),state:this._cardState}),this.personDetails=Ie,this._cardState=null,this.personImage=null,this._currentSection=null,this.sections=[],this._chatInput=""}clearHistory(){var Ie;if(this._currentSection=null,null===(Ie=this._history)||void 0===Ie||!Ie.length)return;const qe=this._history[0];this._history=[],this._cardState=qe.state,this._personDetails=qe.personDetails,this.personImage=qe.personImage,this.loadSections()}args(){return[this.providerState,this.personDetails,this.personQuery,this.personImage,this.userId]}renderNoData(){return this.renderTemplate("no-data",null)||s.qy``}renderPerson(){return M.Q`
      <mgt-person
        tabindex="0"
        class="person-image"
        .personDetails=${this.internalPersonDetails}
        .personImage=${this.getImage()}
        .personPresence=${this.personPresence}
        .showPresence=${this.showPresence}
        view="threelines"
      ></mgt-person>
    `}renderPersonSubtitle(Ie){if((0,Rn.QY)(Ie=Ie||this.internalPersonDetails)&&Ie.department)return s.qy`
       <div class="department">${Ie.department}</div>
     `}renderContactIcons(Ie){const qe=Ie=Ie||this.internalPersonDetails;let nt,pt,Kt;(0,N.iu)(Ie)&&(nt=`${this.strings.emailButtonLabel} ${Ie.displayName}`,pt=s.qy`
        <fluent-button class="icon"
          aria-label=${nt}
          @click=${this.emailUser}>
          ${(0,V.r)(V.A.SmallEmail)}
        </fluent-button>
      `),qe?.userPrincipalName&&(nt=`${this.strings.chatButtonLabel} ${Ie.displayName}`,Kt=s.qy`
        <fluent-button class="icon"
          aria-label=${nt}
          @click=${this.chatUser}>
          ${(0,V.r)(V.A.SmallChat)}
        </fluent-button>
       `),nt=`${this.strings.videoButtonLabel} ${Ie.displayName}`;const Yt=s.qy`
      <fluent-button class="icon"
        aria-label=${nt}
        @click=${this.videoCallUser}>
        ${(0,V.r)(V.A.Video)}
      </fluent-button>
    `;let cn;return qe.userPrincipalName&&(nt=`${this.strings.callButtonLabel} ${Ie.displayName}`,cn=s.qy`
         <fluent-button class="icon"
          aria-label=${nt}
          @click=${this.callUser}>
          ${(0,V.r)(V.A.Call)}
        </fluent-button>
       `),s.qy`
       <div class="base-icons">
         ${pt} ${Kt} ${Yt} ${cn}
       </div>
     `}renderExpandedDetailsButton(){return s.qy`
      <fluent-button
        aria-label=${this.strings.expandDetailsLabel}
        class="expanded-details-button"
        @click=${this.showExpandedDetails}
      >
        ${(0,V.r)(V.A.ExpandDown)}
      </fluent-button>
     `}renderExpandedDetails(){if(!this._cardState&&this._isStateLoading)return M.Q`
         <div class="loading">
           <mgt-spinner></mgt-spinner>
         </div>
       `;_.b.globalProvider.state===b.HJ.SignedOut&&this.loadSections();const qe=this.renderSectionNavigation();return s.qy`
      <div class="section-nav">
        ${qe}
      </div>
      <hr class="divider"/>
      <div
        class="section-host ${this._smallView?"small":""} ${this._smallView?"small":""}"
        @wheel=${nt=>this.handleSectionScroll(nt)}
        tabindex=0
      ></div>
    `}renderSectionNavigation(){if(!this.sections||this.sections.length<2&&!this.hasTemplate("additional-details"))return;const Ie=this._currentSection?this.sections.indexOf(this._currentSection):-1,qe=this.sections.map((Kt,Yt)=>{const cn=Kt.tagName.toLowerCase(),vn=(0,I.H)({active:Yt===Ie,"section-nav__icon":!0});return s.qy`
        <fluent-tab
          id="${cn}-Tab"
          class=${vn}
          slot="tab"
          @keyup="${()=>this.updateCurrentSection(Kt)}"
          @click=${()=>this.updateCurrentSection(Kt)}
        >
          ${Kt.renderIcon()}
        </fluent-tab>
      `}),nt=this.sections.map(Kt=>s.qy`
        <fluent-tab-panel slot="tabpanel">
          <div class="inserted">
            <div class="title">${Kt.cardTitle}</div>
            ${this._currentSection?Kt.asFullView():null}
          </div>
        </fluent-tab-panel>
      `),pt=(0,I.H)({active:-1===Ie,"section-nav__icon":!0,overviewTab:!0});return s.qy`
      <fluent-tabs
        orientation="horizontal"
        activeindicator
        @wheel=${Kt=>this.handleSectionScroll(Kt)}
      >
        <fluent-tab
          class="${pt}"
          slot="tab"
          @keyup="${()=>this.updateCurrentSection(null)}"
          @click=${()=>this.updateCurrentSection(null)}
        >
          <div>${(0,V.r)(V.A.Overview)}</div>
        </fluent-tab>
        ${qe}
        <fluent-tab-panel slot="tabpanel" >
          <div class="overview-panel">${this._currentSection?null:this.renderOverviewSection()}</div>
        </fluent-tab-panel>
        ${nt}
      </fluent-tabs>
    `}renderOverviewSection(){const Ie=this.sections.map(nt=>s.qy`
        <div class="section">
          <div class="section__header">
            <div class="section__title" tabindex=0>${nt.displayName}</div>
              <fluent-button
                appearance="lightweight"
                class="section__show-more"
                @click=${()=>this.updateCurrentSection(nt)}
              >
                ${this.strings.showMoreSectionButton}
              </fluent-button>
          </div>
          <div class="section__content">${nt.asCompactView()}</div>
        </div>
      `),qe=this.renderTemplate("additional-details",{person:this.internalPersonDetails,personImage:this.getImage(),state:this._cardState});return qe&&Ie.splice(1,0,s.qy`
           <div class="section">
             <div class="additional-details">${qe}</div>
           </div>
         `),s.qy`
       <div class="sections">
          ${this.renderMessagingSection()}
          ${Ie}
       </div>
     `}renderCurrentSection(){var Ie;if(null!==(Ie=this.sections)&&void 0!==Ie&&Ie.length||this.hasTemplate("additional-details"))return 1!==this.sections.length||this.hasTemplate("additional-details")?this._currentSection?s.qy`
       ${this._currentSection.asFullView()}
     `:this.renderOverviewSection():s.qy`
         ${this.sections[0].asFullView()}
       `}renderMessagingSection(){const Ie=this.personDetails,qe=this._me.userPrincipalName,nt=this._chatInput;if(Ie?.userPrincipalName!==qe)return K.isSendMessageVisible?s.qy`
      <div class="message-section">
        <fluent-text-field
          autocomplete="off"
          appearance="outline"
          placeholder="${this.strings.quickMessage}"
          .value=${nt}
          @input=${pt=>{this._chatInput=pt.target.value,this.requestUpdate()}}
          @keydown="${pt=>this.sendQuickMessageOnEnter(pt)}">
        </fluent-text-field>
        <fluent-button class="send-message-icon"
          aria-label=${this.strings.sendMessageLabel}
          @click=${this.sendQuickMessage}
          ?disabled=${this.isSendingMessage}>
          ${(0,V.r)(this.isSendingMessage?V.A.Confirmation:V.A.Send)}
        </fluent-button>
      </div>
      `:s.s6}loadState(){var Ie,qe;return Pt(this,void 0,void 0,function*(){if(this._cardState)return;if(!this.personDetails&&this.inheritDetails){let Yt=this.parentElement;for(;Yt&&Yt.tagName!==`${E.U.prefix}-PERSON`.toUpperCase();)Yt=Yt.parentElement;const cn=Yt.personDetails||Yt.personDetailsInternal;Yt&&cn&&(this.personDetails=cn,this.personImage=Yt.personImage)}const nt=_.b.globalProvider;if(!nt||nt.state!==b.HJ.SignedIn)return;const pt=nt.graph.forComponent(this);if(this._graph=pt,this._isStateLoading=!0,this._me||(this._me=yield _.b.me()),this.personDetails){const Yt=this.personDetails;let cn;if((0,Rn.QY)(Yt)&&(cn=Yt.userPrincipalName||Yt.id),cn&&!(0,N.iu)(Yt)){const vn=yield(0,le._)(pt,cn);this.personDetails=vn,this.personImage=this.getImage()}}else if(this.userId||"me"===this.personQuery){const Yt=yield(0,le._)(pt,this.userId);this.personDetails=Yt,this.personImage=this.getImage()}else if(this.personQuery){const Yt=yield(0,N.lq)(pt,this.personQuery,1);Yt?.length&&(this.personDetails=Yt[0],yield(0,O.f8)(pt,this.personDetails,K.useContactApis).then(cn=>{cn&&(this.personDetails.personImage=cn,this.personImage=cn)}))}const Kt={activity:"Offline",availability:"Offline",id:null};if(!this.personPresence&&this.showPresence)try{this.personPresence=null!==(Ie=this.personDetails)&&void 0!==Ie&&Ie.id?yield(0,B.R)(pt,this.personDetails.id):Kt}catch{this.personPresence=Kt}!(null===(qe=this.personDetails)||void 0===qe)&&qe.id&&(this._cardState=yield((vt,yt,Ie)=>ae(void 0,void 0,void 0,function*(){var qe;const nt=yt.id,pt=(0,N.iu)(yt),Kt="classification"in yt||"personType"in yt&&("PersonalContact"===yt.personType.subclass||"Group"===yt.personType.class),Yt=vt.createBatch();let cn;Kt||K.sections.organization&&(((vt,yt)=>{vt.get("person",`users/${yt}?$expand=manager($levels=max;$select=${de})&$select=${de}&$count=true`,oe.vW,{ConsistencyLevel:"eventual"}),vt.get("directReports",`users/${yt}/directReports?$select=${de}`)})(Yt,nt),K.sections.organization.showWorksWith&&((vt,yt)=>{vt.get("people",`users/${yt}/people?$filter=personType/class eq 'Person'`,ne)})(Yt,nt)),K.sections.mailMessages&&pt&&((vt,yt)=>{vt.get("messages",`me/messages?$search="from:${yt}"`,ue)})(Yt,pt),K.sections.files&&((vt,yt)=>{let Ie;Ie=yt?`me/insights/shared?$filter=lastshared/sharedby/address eq '${yt}'`:"me/insights/used",vt.get("files",Ie,ve.yv)})(Yt,Ie?null:pt);const vn={};try{cn=yield Yt.executeAll()}catch{}if(cn)for(const[pn,Ci]of cn)vn[pn]=(null===(qe=Ci.content)||void 0===qe?void 0:qe.value)||Ci.content;if(!Kt&&K.sections.profile)try{const pn=yield((vt,yt)=>ae(void 0,void 0,void 0,function*(){return yield vt.api(`/users/${yt}/profile`).version("beta").middlewareOptions((0,S.F)(P)).get()}))(vt,nt);pn&&(vn.profile=pn)}catch{}return vn.directReports&&vn.directReports.length>0&&(vn.directReports=vn.directReports.filter(pn=>pn.accountEnabled)),vn}))(pt,this.personDetails,this._me===this.personDetails.id)),this.loadSections(),this._isStateLoading=!1})}get hasPhone(){var Ie,qe;const nt=this.personDetails,pt=this.personDetails;return!(null===(Ie=nt?.businessPhones)||void 0===Ie||!Ie.length)||!(null===(qe=pt?.phones)||void 0===qe||!qe.length)}loadSections(){if(this.sections=[],!this.internalPersonDetails)return;const Ie=new U(this.internalPersonDetails);if(Ie.hasData&&this.sections.push(Ie),!this._cardState)return;const{person:qe,directReports:nt,messages:pt,files:Kt,profile:Yt}=this._cardState;if(K.sections.organization&&(qe?.manager||nt?.length)&&this.sections.push(new wt(this._cardState,this._me)),K.sections.mailMessages&&pt?.length&&this.sections.push(new We(pt)),K.sections.files&&Kt?.length&&this.sections.push(new Y.R),K.sections.profile&&Yt){const cn=new tn(Yt);cn.hasData&&this.sections.push(cn)}}getImage(){if(this.personImage)return this.personImage;const Ie=this.personDetails;return Ie?.personImage?Ie.personImage:null}clearInputData(){this._chatInput="",this.requestUpdate()}getPersonBusinessPhones(Ie){const qe=Ie.phones,nt=[];for(const pt of qe)"business"===pt.type&&nt.push(pt.number);return nt}updateCurrentSection(Ie){if(Ie){const nt=Ie.tagName.toLowerCase();this.renderRoot.querySelector(`#${nt}-Tab`).click()}const qe=this.renderRoot.querySelectorAll("fluent-tab-panel");for(const nt of qe)nt.scrollTop=0;this._currentSection=Ie,this.requestUpdate()}handleSectionScroll(Ie){const qe=this.renderRoot.querySelectorAll("fluent-tab-panel");for(const nt of qe)nt&&!(Ie.deltaY<0&&0===nt.scrollTop)&&!(Ie.deltaY>0&&nt.clientHeight+nt.scrollTop>=nt.scrollHeight-1)&&Ie.stopPropagation()}}return st([(0,c.MZ)({attribute:"person-details",type:Object}),Rt("design:type",Object),Rt("design:paramtypes",[Object])],vt.prototype,"personDetails",null),st([(0,c.MZ)({attribute:"person-query"}),Rt("design:type",String),Rt("design:paramtypes",[String])],vt.prototype,"personQuery",null),st([(0,c.MZ)({attribute:"lock-tab-navigation",type:Boolean}),Rt("design:type",Boolean)],vt.prototype,"lockTabNavigation",void 0),st([(0,c.MZ)({attribute:"user-id"}),Rt("design:type",String),Rt("design:paramtypes",[String])],vt.prototype,"userId",null),st([(0,c.MZ)({attribute:"person-image",type:String}),Rt("design:type",String)],vt.prototype,"personImage",void 0),st([(0,c.MZ)({attribute:"fetch-image",type:Boolean}),Rt("design:type",Boolean)],vt.prototype,"fetchImage",void 0),st([(0,c.MZ)({attribute:"is-expanded",type:Boolean}),Rt("design:type",Boolean)],vt.prototype,"isExpanded",void 0),st([(0,c.MZ)({attribute:"inherit-details",type:Boolean}),Rt("design:type",Boolean)],vt.prototype,"inheritDetails",void 0),st([(0,c.MZ)({attribute:"show-presence",type:Boolean}),Rt("design:type",Boolean)],vt.prototype,"showPresence",void 0),st([(0,c.MZ)({attribute:"person-presence",type:Object}),Rt("design:type",Object)],vt.prototype,"personPresence",void 0),st([(0,c.wk)(),Rt("design:type",Object)],vt.prototype,"isSendingMessage",void 0),st([(0,c.wk)(),Rt("design:type",Object)],vt.prototype,"_cardState",void 0),st([(0,c.wk)(),Rt("design:type",Boolean)],vt.prototype,"_isStateLoading",void 0),st([(0,c.wk)(),Rt("design:type",Object)],vt.prototype,"_currentSection",void 0),vt})()},6479:(at,ge,d)=>{d.d(ge,{O$:()=>Ue,ge:()=>me,sN:()=>ze});var s=d(5017),c=d(8940),I=d(2578),v=d(5794),T=d(4569),M=d(4709),_=d(6885),b=d(8324),E=d(9559),N=d(3402),O=d(6271),le=d(9546),V=d(6692),B=d(4130),S=d(1786),K=d(5527),oe=d(2898),ve=d(8360),ae=d(3601),de=d(2710),W=d(4166),$=d(54);const J=[b.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{font-size:var(--default-font-size)}:host .flyout [slot=anchor]{display:flex;cursor:pointer}:host .flyout [slot=anchor].vertical{flex-direction:column;justify-content:center;align-items:center;margin-inline-start:0}:host .person-root{display:flex;flex-direction:row;align-items:center;background-color:var(--person-background-color,transparent);border-radius:var(--person-border-radius,4px)}:host .person-root.small .avatar-wrapper{min-width:var(--person-avatar-size,24px);width:var(--person-avatar-size,24px);height:var(--person-avatar-size,24px)}:host .person-root.small .contact-icon,:host .person-root.small .initials{font-size:calc(var(--person-avatar-size, 24px) * .4)}:host .person-root.small .presence-wrapper svg{width:calc(var(--person-avatar-size,24px) * .28);height:calc(var(--person-avatar-size,24px) * .28)}:host .person-root.noline .avatar-wrapper,:host .person-root.oneline .avatar-wrapper{min-width:var(--person-avatar-size,24px);width:var(--person-avatar-size,24px);height:var(--person-avatar-size,24px)}:host .person-root.noline .avatar-wrapper .contact-icon,:host .person-root.noline .avatar-wrapper .initials,:host .person-root.oneline .avatar-wrapper .contact-icon,:host .person-root.oneline .avatar-wrapper .initials{font-size:calc(var(--person-avatar-size, 24px) * .4)}:host .person-root.noline .avatar-wrapper .presence-wrapper svg,:host .person-root.oneline .avatar-wrapper .presence-wrapper svg{width:calc(var(--person-avatar-size,24px) * .28);height:calc(var(--person-avatar-size,24px) * .28)}:host .person-root.noline .presence-basic,:host .person-root.oneline .presence-basic{border-width:1px;position:relative;bottom:calc(var(--person-avatar-size,24px) * .12 - 4px)}:host .person-root.twolines .avatar-wrapper{min-width:var(--person-avatar-size,40px);width:var(--person-avatar-size,40px);height:var(--person-avatar-size,40px)}:host .person-root.twolines .avatar-wrapper .contact-icon,:host .person-root.twolines .avatar-wrapper .initials{font-size:calc(var(--person-avatar-size, 40px) * .4)}:host .person-root.twolines .avatar-wrapper .presence-wrapper svg{width:calc(var(--person-avatar-size,40px) * .28);height:calc(var(--person-avatar-size,40px) * .28)}:host .person-root.large .avatar-wrapper,:host .person-root.threelines .avatar-wrapper{min-width:var(--person-avatar-size,56px);width:var(--person-avatar-size,56px);height:var(--person-avatar-size,56px)}:host .person-root.large .avatar-wrapper .contact-icon,:host .person-root.large .avatar-wrapper .initials,:host .person-root.threelines .avatar-wrapper .contact-icon,:host .person-root.threelines .avatar-wrapper .initials{font-size:calc(var(--person-avatar-size, 56px) * .4)}:host .person-root.large .avatar-wrapper .presence-wrapper svg,:host .person-root.threelines .avatar-wrapper .presence-wrapper svg{width:calc(var(--person-avatar-size,56px) * .28);height:calc(var(--person-avatar-size,56px) * .28)}:host .person-root.fourlines .avatar-wrapper,:host .person-root.vertical .avatar-wrapper{min-width:var(--person-avatar-size,72px);width:var(--person-avatar-size,72px);height:var(--person-avatar-size,72px)}:host .person-root.fourlines .avatar-wrapper .contact-icon,:host .person-root.fourlines .avatar-wrapper .initials,:host .person-root.vertical .avatar-wrapper .contact-icon,:host .person-root.vertical .avatar-wrapper .initials{font-size:calc(var(--person-avatar-size, 72px) * .4)}:host .person-root.fourlines .avatar-wrapper .presence-wrapper svg,:host .person-root.vertical .avatar-wrapper .presence-wrapper svg{width:calc(var(--person-avatar-size,72px) * .28);height:calc(var(--person-avatar-size,72px) * .28)}:host .person-root.vertical{flex-direction:column;justify-content:center;align-items:center}:host .person-root .avatar-wrapper{min-width:var(--person-avatar-size,24px);width:var(--person-avatar-size,24px);height:var(--person-avatar-size,24px);position:relative;box-sizing:border-box}:host .person-root .avatar-wrapper .contact-icon,:host .person-root .avatar-wrapper .initials,:host .person-root .avatar-wrapper .shimmer,:host .person-root .avatar-wrapper img{height:100%;width:100%;border:var(--person-avatar-border,none);border-radius:var(--person-avatar-border-radius,50%);margin-block-start:var(--person-avatar-top-spacing,0);object-fit:cover;object-position:center top}:host .person-root .avatar-wrapper .contact-icon,:host .person-root .avatar-wrapper .initials,:host .person-root .avatar-wrapper .shimmer{display:flex;justify-content:center;align-items:center;font-size:calc(var(--person-avatar-size, 24px) * .4);font-weight:400;background:var(--person-initials-background-color,var(--neutral-fill-secondary-rest));color:var(--person-initials-text-color,var(--neutral-fill-strong-hover))}:host .person-root .avatar-wrapper .presence-wrapper{bottom:var(--person-presence-wrapper-bottom,0);right:0;position:absolute;border-radius:50%;background-color:var(--neutral-layer-1);border:1px solid var(--neutral-layer-1)}:host .person-root .avatar-wrapper .presence-wrapper svg{display:flex;width:calc(var(--person-avatar-size,24px) * .28);height:calc(var(--person-avatar-size,24px) * .28)}:host .person-root .details-wrapper{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;min-width:var(--person-details-wrapper-width,168px);margin-inline-start:var(--person-details-left-spacing,12px);margin-block-end:var(--person-details-bottom-spacing,0)}:host .person-root .details-wrapper .shimmer.text{width:200px;height:16px;margin:2px 0}:host .person-root .details-wrapper.vertical{display:inline-flex;flex-direction:column;justify-content:center;align-items:center;margin-inline-start:0}:host .person-root .details-wrapper .line1{font-size:var(--person-line1-font-size, ms-font-size-14);font-weight:var(--person-line1-font-weight,600);color:var(--person-line1-text-color,var(--neutral-foreground-rest));text-transform:var(--person-line1-text-transform,inherit);line-height:var(--person-line1-text-line-height, 20px)}:host .person-root .details-wrapper .line2{font-size:var(--person-line2-font-size, var(--email-font-size, ms-font-size-12));font-weight:var(--person-line2-font-weight,400);color:var(--person-line2-text-color,var(--secondary-text-color));text-transform:var(--person-line2-text-transform,inherit);line-height:var(--person-line2-text-line-height, 16px)}:host .person-root .details-wrapper .line3{font-size:var(--person-line3-font-size, var(--email-font-size, ms-font-size-12));font-weight:var(--person-line3-font-weight,400);color:var(--person-line3-text-color,var(--secondary-text-color));text-transform:var(--person-line3-text-transform,inherit);line-height:var(--person-line3-text-line-height, 16px)}:host .person-root .details-wrapper .line4{font-size:var(--person-line4-font-size, var(--email-font-size, ms-font-size-12));font-weight:var(--person-line4-font-weight,400);color:var(--person-line4-text-color,var(--secondary-text-color));text-transform:var(--person-line4-text-transform,inherit);line-height:var(--person-line4-text-line-height, 16px)}@media (forced-colors:active) and (prefers-color-scheme:dark){:host svg,:host svg>path{fill:rgb(255,255,255);fill-rule:nonzero;clip-rule:nonzero}}[dir=rtl] .presence-wrapper{right:unset!important;left:0}
`],ne=["photo","initials"],F=Object.assign(Object.assign({},{Available:"Available",Away:"Away",BeRightBack:"Be right back",Busy:"Busy",DoNotDisturb:"Do not disturb",InACall:"In a call",InAConferenceCall:"In a conference call",Inactive:"Inactive",InAMeeting:"In a meeting",Offline:"Offline",OffWork:"Off work",OutOfOffice:"Out of office",PresenceUnknown:"Presence unknown",Presenting:"Presenting",UrgentInterruptionsOnly:"Urgent interruptions only"}),{photoFor:"Photo for",emailAddress:"Email address"});var P=function(it,Me,re,Oe){var rt,Xe=arguments.length,He=Xe<3?Me:null===Oe?Oe=Object.getOwnPropertyDescriptor(Me,re):Oe;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)He=Reflect.decorate(it,Me,re,Oe);else for(var Te=it.length-1;Te>=0;Te--)(rt=it[Te])&&(He=(Xe<3?rt(He):Xe>3?rt(Me,re,He):rt(Me,re))||He);return Xe>3&&He&&Object.defineProperty(Me,re,He),He},ee=function(it,Me){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(it,Me)},Z=function(it,Me,re,Oe){return new(re||(re=Promise))(function(He,rt){function Te(Y){try{U(Oe.next(Y))}catch(be){rt(be)}}function se(Y){try{U(Oe.throw(Y))}catch(be){rt(be)}}function U(Y){Y.done?He(Y.value):function Xe(He){return He instanceof re?He:new re(function(rt){rt(He)})}(Y.value).then(Te,se)}U((Oe=Oe.apply(it,Me||[])).next())})};const me=["businessPhones","displayName","givenName","jobTitle","department","mail","mobilePhone","officeLocation","preferredLanguage","surname","userPrincipalName","id","userType"],ze=()=>{(0,ae.E)(s._0),(0,c.N)("person",Ue),(0,W.r)()};let Ue=(()=>{class it extends I.N{static get styles(){return J}get strings(){return F}get personQuery(){return this._personQuery}set personQuery(re){re!==this._personQuery&&(this._personQuery=re,this._personDetails=null,this.personDetailsInternal=null)}get fallbackDetails(){return this._fallbackDetails}set fallbackDetails(re){re!==this._fallbackDetails&&(this._fallbackDetails=re)}get userId(){return this._userId}set userId(re){re!==this._userId&&(this._userId=re,this.personDetailsInternal=null,this._personDetails=null)}get usage(){return this._usage}set usage(re){re!==this._usage&&(this._usage=re)}get personDetailsInternal(){return this._personDetailsInternal}set personDetailsInternal(re){this._personDetailsInternal!==re&&(this._personDetailsInternal=re,this._fetchedImage=null,this._fetchedPresence=null)}get personDetails(){return this._personDetails}set personDetails(re){this._personDetails!==re&&(this._personDetails=re,this._fetchedImage=null,this._fetchedPresence=null)}get personImage(){return this._personImage||this._fetchedImage}set personImage(re){re!==this._personImage&&(this._isInvalidImageSrc=!re,this._personImage=re)}get personPresence(){return this._personPresence||this._fetchedPresence}set personPresence(re){re!==this._personPresence&&(this._personPresence=re)}static get requiredScopes(){const re=["user.readbasic.all","user.read","people.read","presence.read.all","presence.read"];return it.config.useContactApis&&re.push("contacts.read"),re}get flyout(){return this.renderRoot.querySelector(".flyout")}constructor(){super(),this.avatarType="photo",this.personCardInteraction="none",this.view="image",this._hasLoadedPersonCard=!1,this._mouseLeaveTimeout=-1,this._mouseEnterTimeout=-1,this.renderContent=()=>{const re=this.personDetails||this.personDetailsInternal||this.fallbackDetails,Oe=this.getImage(),Xe=this.personPresence||this._fetchedPresence;if(!re&&!Oe)return this.renderNoData();!re?.personImage&&Oe&&(re.personImage=Oe);let He=this.renderTemplate("default",{person:re,personImage:Oe,personPresence:Xe});if(!He){const se=this.renderDetails(re,Xe),U=this.renderAvatar(re,Oe,Xe);He=b.qy`
        ${U}
        ${se}
      `}"none"!==this.personCardInteraction&&(He=this.renderFlyout(He,re,Oe,Xe));const Te=(0,N.H)({"person-root":!0,small:!this.isThreeLines()&&!this.isFourLines()&&!this.isLargeAvatar(),large:"auto"!==this.avatarSize&&this.isLargeAvatar(),noline:this.isNoLine(),oneline:this.isOneLine(),twolines:this.isTwoLines(),threelines:this.isThreeLines(),fourlines:this.isFourLines(),vertical:this.isVertical()});return b.qy`
      <div
        class="${Te}"
        dir=${this.direction}
        @click=${this.handleMouseClick}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
        @keydown=${this.handleKeyDown}
        tabindex="${(0,O.J)("none"!==this.personCardInteraction?"0":void 0)}"
      >
        ${He}
      </div>
    `},this.renderLoading=()=>{const re=(0,N.H)({"person-root":!0,small:!this.isThreeLines()&&!this.isFourLines()&&!this.isLargeAvatar(),large:"auto"!==this.avatarSize&&this.isLargeAvatar(),noline:this.isNoLine(),oneline:this.isOneLine(),twolines:this.isTwoLines(),threelines:this.isThreeLines(),fourlines:this.isFourLines(),vertical:this.isVertical()}),Oe=(0,N.H)({"details-wrapper":!0,vertical:this.isVertical()});return this.renderTemplate("loading",null)||b.qy`
        <div class="${re}">
          <div class="avatar-wrapper">
            <fluent-skeleton shimmer class="shimmer" shape="circle"></fluent-skeleton>
          </div>
          <div class=${Oe}>
            ${this.renderLoadingLines()}
          </div>
        </div>`},this.renderLoadingLines=()=>{const re=[];return this.isNoLine()||(this.isOneLine()&&re.push(this.renderLoadingLine(1)),this.isTwoLines()&&(re.push(this.renderLoadingLine(1)),re.push(this.renderLoadingLine(2))),this.isThreeLines()&&(re.push(this.renderLoadingLine(1)),re.push(this.renderLoadingLine(2)),re.push(this.renderLoadingLine(3))),this.isFourLines()&&(re.push(this.renderLoadingLine(1)),re.push(this.renderLoadingLine(2)),re.push(this.renderLoadingLine(3)),re.push(this.renderLoadingLine(4)))),re},this.renderLoadingLine=re=>b.qy`
      <div class=${`line${re}`}>
        <fluent-skeleton shimmer class="shimmer text" shape="rect"></fluent-skeleton>
      </div>
    `,this.handleMouseClick=re=>{"click"===this.personCardInteraction&&re.target.tagName!==`${v.U.prefix}-PERSON-CARD`.toUpperCase()&&this.showPersonCard()},this.handleKeyDown=re=>{re&&"Enter"===re.key&&this.showPersonCard()},this.handleMouseEnter=()=>{clearTimeout(this._mouseEnterTimeout),clearTimeout(this._mouseLeaveTimeout),"hover"===this.personCardInteraction&&(this._mouseEnterTimeout=window.setTimeout(this.showPersonCard,500))},this.handleMouseLeave=()=>{clearTimeout(this._mouseEnterTimeout),clearTimeout(this._mouseLeaveTimeout),this._mouseLeaveTimeout=window.setTimeout(this.hidePersonCard,500)},this.hidePersonCard=()=>{const re=this.flyout;re&&re.close();const Oe=this.querySelector(".mgt-person-card")||this.renderRoot.querySelector(".mgt-person-card");Oe&&(Oe.isExpanded=!1,Oe.clearHistory())},this.loadPersonCardResources=()=>Z(this,void 0,void 0,function*(){if("none"!==this.personCardInteraction&&!this._hasLoadedPersonCard){const{registerMgtPersonCardComponent:re}=yield Promise.resolve().then(d.bind(d,7531));customElements.get((0,c.F)("person-card"))||re(),this._hasLoadedPersonCard=!0}}),this.showPersonCard=()=>{this._personCardShouldRender||(this._personCardShouldRender=!0,this.loadPersonCardResources());const re=this.flyout;re&&re.open()},this.personCardInteraction="none",this.line1Property="displayName",this.line2Property="jobTitle",this.line3Property="department",this.line4Property="email",this.view="image",this.avatarSize="auto",this.disableImageFetch=!1,this._isInvalidImageSrc=!1,this.avatarType="photo",this.verticalLayout=!1}clearState(){this._personImage="",this._personDetailsInternal=null,this._fetchedImage=null,this._fetchedPresence=null}renderNoData(){const re=this.renderTemplate("no-data",null);if(re)return re;const Oe={"avatar-icon":!0,vertical:this.isVertical(),small:!this.isLargeAvatar(),noline:this.isNoLine(),oneline:this.isOneLine(),twolines:this.isTwoLines(),threelines:this.isThreeLines(),fourlines:this.isFourLines()};return b.qy`
       <i class=${(0,N.H)(Oe)}></i>
     `}renderPersonIcon(){return(0,de.r)(de.A.Person)}renderImage(re,Oe){var Xe;const He=`${this.strings.photoFor} ${re.displayName}`,rt=Oe&&!this._isInvalidImageSrc&&"photo"===this.avatarType,Te="photo"===this.avatarType&&"image"===this.view,se=null!==(Xe=re?.displayName||`${this.strings.emailAddress} ${(0,V.iu)(re)}`)&&void 0!==Xe?Xe:void 0,U=b.qy`<img
      title="${(0,O.J)(Te?se:void 0)}"
      alt=${He}
      src=${Oe}
      @error=${()=>this._isInvalidImageSrc=!0} />`,Y=re?this.getInitials(re):"",be=Y?.length,Qe=(0,N.H)({initials:be&&!rt,"contact-icon":!be}),Ce=b.qy`<i>${this.renderPersonIcon()}</i>`,Ne=b.qy`
      <span 
        title="${(0,O.J)("image"===this.view?se:void 0)}"
        role="${(0,O.J)("image"===this.view?void 0:"presentation")}"
        class="${Qe}"
      >
        ${be?Y:Ce}
      </span>
`;return this.fireCustomEvent(rt?"person-image-rendered":"person-icon-rendered"),rt?U:Ne}renderPresence(re){var Oe;if(!this.showPresence||!re)return b.qy``;let Xe;const{activity:He,availability:rt}=re;switch(rt){case"Available":case"AvailableIdle":Xe=(0,de.r)("OutOfOffice"===He?de.A.PresenceOofAvailable:de.A.PresenceAvailable);break;case"Busy":case"BusyIdle":switch(He){case"OutOfOffice":case"OnACall":Xe=(0,de.r)(de.A.PresenceOofBusy);break;default:Xe=(0,de.r)(de.A.PresenceBusy)}break;case"DoNotDisturb":Xe=(0,de.r)("OutOfOffice"===He?de.A.PresenceOofDnd:de.A.PresenceDnd);break;case"Away":Xe=(0,de.r)("OutOfOffice"===He?de.A.PresenceOofAway:de.A.PresenceAway);break;case"BeRightBack":Xe=(0,de.r)(de.A.PresenceAway);break;case"Offline":switch(He){case"Offline":Xe=(0,de.r)(de.A.PresenceOffline);break;case"OutOfOffice":case"OffWork":Xe=(0,de.r)(de.A.PresenceOofAway);break;default:Xe=(0,de.r)(de.A.PresenceStatusUnknown)}break;default:Xe=(0,de.r)(de.A.PresenceStatusUnknown)}const Te=(0,N.H)({"presence-wrapper":!0,noline:this.isNoLine(),oneline:this.isOneLine()}),se=null!==(Oe=this.strings[He])&&void 0!==Oe?Oe:b.s6;return b.qy`
      <span
        class="${Te}"
        title="${se}"
        aria-label="${se}"
        role="img">
          ${Xe}
      </span>
    `}renderAvatar(re,Oe,Xe){const He=this.renderImage(re,Oe),rt=this.renderPresence(Xe);return b.qy`
      <div class="avatar-wrapper">
        ${He}
        ${rt}
      </div>
    `}handleLine1Clicked(){this.fireCustomEvent("line1clicked",this.personDetailsInternal)}handleLine2Clicked(){this.fireCustomEvent("line2clicked",this.personDetailsInternal)}handleLine3Clicked(){this.fireCustomEvent("line3clicked",this.personDetailsInternal)}handleLine4Clicked(){this.fireCustomEvent("line4clicked",this.personDetailsInternal)}renderDetails(re,Oe){if(!re||"image"===this.view)return b.qy``;const Xe=re;Oe&&(Xe.presenceActivity=Oe?.activity,Xe.presenceAvailability=Oe?.availability);const He=[],rt=this.getTextFromProperty(Xe,this.line1Property);if(this.hasTemplate("line1")){const se=this.renderTemplate("line1",{person:Xe});He.push(b.qy`
           <div class="line1" part="detail-line" @click=${()=>this.handleLine1Clicked()} role="presentation" aria-label="${rt}">${se}</div>
         `)}else rt&&He.push(b.qy`
             <div class="line1" part="detail-line" @click=${()=>this.handleLine1Clicked()} role="presentation" aria-label="${rt}">${rt}</div>
           `);if("oneline"!==this.view){const se=this.getTextFromProperty(Xe,this.line2Property);if(this.hasTemplate("line2")){const U=this.renderTemplate("line2",{person:Xe});He.push(b.qy`
           <div class="line2" part="detail-line" @click=${()=>this.handleLine2Clicked()} role="presentation" aria-label="${se}">${U}</div>
         `)}else se&&He.push(b.qy`
             <div class="line2" part="detail-line" @click=${()=>this.handleLine2Clicked()} role="presentation" aria-label="${se}">${se}</div>
           `)}if("threelines"===this.view||"fourlines"===this.view){const se=this.getTextFromProperty(Xe,this.line3Property);if(this.hasTemplate("line3")){const U=this.renderTemplate("line3",{person:Xe});He.push(b.qy`
           <div class="line3" part="detail-line" @click=${()=>this.handleLine3Clicked()} role="presentation" aria-label="${se}">${U}</div>
         `)}else se&&He.push(b.qy`
             <div class="line3" part="detail-line" @click=${()=>this.handleLine3Clicked()} role="presentation" aria-label="${se}">${se}</div>
           `)}if("fourlines"===this.view){const se=this.getTextFromProperty(Xe,this.line4Property);if(this.hasTemplate("line4")){const U=this.renderTemplate("line4",{person:Xe});He.push(b.qy`
          <div class="line4" part="detail-line" @click=${()=>this.handleLine4Clicked()} role="presentation" aria-label="${se}">${U}</div>
        `)}else se&&He.push(b.qy`
            <div class="line4" part="detail-line" @click=${()=>this.handleLine4Clicked()} role="presentation" aria-label="${se}">${se}</div>
          `)}const Te=(0,N.H)({"details-wrapper":!0,vertical:this.isVertical()});return b.qy`
      <div class="${Te}">
        ${He}
      </div>
    `}renderFlyout(re,Oe,Xe,He){const rt=this._personCardShouldRender&&this._hasLoadedPersonCard?b.qy`
           <div slot="flyout" data-testid="flyout-slot">
             ${this.renderFlyoutContent(Oe,Xe,He)}
           </div>`:b.qy``,Te=(0,N.H)({small:!this.isThreeLines()&&!this.isFourLines()&&!this.isLargeAvatar(),large:"auto"!==this.avatarSize&&this.isLargeAvatar(),noline:this.isNoLine(),oneline:this.isOneLine(),twolines:this.isTwoLines(),threelines:this.isThreeLines(),fourlines:this.isFourLines(),vertical:this.isVertical()});return T.Q`
      <mgt-flyout light-dismiss class="flyout" .avoidHidingAnchor=${!1}>
        <div slot="anchor" class="${Te}">${re}</div>
        ${rt}
      </mgt-flyout>`}renderFlyoutContent(re,Oe,Xe){return this.fireCustomEvent("flyout-content-rendered"),this.renderTemplate("person-card",{person:re,personImage:Oe})||T.Q`
        <mgt-person-card
          class="mgt-person-card"
          lock-tab-navigation
          .personDetails=${re}
          .personImage=${Oe}
          .personPresence=${Xe}
          .showPresence=${this.showPresence}>
        </mgt-person-card>`}args(){return[this.providerState,this.verticalLayout,this.view,this.fallbackDetails,this.line1Property,this.line2Property,this.line3Property,this.line4Property,this.fetchImage,this.avatarType,this.userId,this.personQuery,this.disableImageFetch,this.showPresence,this.personPresence,this.personDetails]}loadState(){return Z(this,void 0,void 0,function*(){const re=M.b.globalProvider;if(!re||re.state===_.HJ.Loading)return;if(re&&re.state===_.HJ.SignedOut)return void(this.personDetailsInternal=null);const Oe=re.graph.forComponent(this);(this.verticalLayout&&"fourlines"!==this.view||this.fallbackDetails)&&(this.line2Property="email");let Xe=[...me,this.line1Property,this.line2Property,this.line3Property,this.line4Property];Xe=Xe.filter(Te=>"email"!==Te);let He=this.personDetailsInternal||this.personDetails;if(He){if(!He.personImage&&this.fetchImage&&"photo"===this.avatarType&&!this.personImage&&!this._fetchedImage){let Te;Te="groupTypes"in He?yield(0,B.t5)(Oe,He):yield(0,B.f8)(Oe,He,it.config.useContactApis),Te&&(He.personImage=Te,this._fetchedImage=Te)}}else if(this.userId||"me"===this.personQuery){let Te;Te="photo"!==this.avatarType||this.disableImageFetch?"me"===this.personQuery?yield(0,K.jp)(Oe,Xe):yield(0,K.wz)(Oe,this.userId,Xe):yield(0,oe._)(Oe,this.userId,Xe),this.personDetailsInternal=Te,this.personDetails=Te,this._fetchedImage=this.getImage()}else if(this.personQuery){let Te=yield(0,V.lq)(Oe,this.personQuery,1);if((!Te||0===Te.length)&&(Te=(yield(0,K.Ei)(Oe,this.personQuery,1))||[]),Te?.length&&(this.personDetailsInternal=Te[0],this.personDetails=Te[0],"photo"===this.avatarType&&!this.disableImageFetch)){const se=yield(0,B.f8)(Oe,Te[0],it.config.useContactApis);se&&(this.personDetailsInternal.personImage=se,this.personDetails.personImage=se,this._fetchedImage=se)}}He=this.personDetailsInternal||this.personDetails||this.fallbackDetails;const rt={activity:"Offline",availability:"Offline",id:null};if(this.showPresence&&!this.personPresence&&!this._fetchedPresence)try{if(He){const Te="me"!==this.personQuery?He?.id:null;this._fetchedPresence=yield(0,S.R)(Oe,Te)}else this._fetchedPresence=rt}catch{this._fetchedPresence=rt}})}getInitials(re){var Oe,Xe,He,rt,Te,se;if(re||(re=this.personDetailsInternal),(0,le.Ts)(re))return re.initials;let U="";if((0,le.QY)(re)&&(U+=null!==(He=null===(Xe=null===(Oe=re.givenName)||void 0===Oe?void 0:Oe[0])||void 0===Xe?void 0:Xe.toUpperCase())&&void 0!==He?He:"",U+=null!==(se=null===(Te=null===(rt=re.surname)||void 0===rt?void 0:rt[0])||void 0===Te?void 0:Te.toUpperCase())&&void 0!==se?se:""),!U&&re.displayName){const Y=re.displayName.split(/\s+/);for(let be=0;be<2&&be<Y.length;be++)Y[be][0]&&this.isLetter(Y[be][0])&&(U+=Y[be][0].toUpperCase())}return U}getImage(){if(this.personImage)return this.personImage;if(this._fetchedImage)return this._fetchedImage;const re=this.personDetailsInternal||this.personDetails;return re?.personImage?re.personImage:null}isLetter(re){try{return re.match(new RegExp("\\p{L}","u"))}catch{return re.toLowerCase()!==re.toUpperCase()}}getTextFromProperty(re,Oe){if(!Oe||0===Oe.length)return null;const Xe=Oe.trim().split(",");let He,rt=0;for(;!He&&rt<Xe.length;){const Te=Xe[rt].trim();switch(Te){case"mail":case"email":He=(0,V.iu)(re);break;default:He=re[Te]}rt++}return He}isLargeAvatar(){return"large"===this.avatarSize||"auto"===this.avatarSize&&"image"!==this.view&&"oneline"!==this.view}isNoLine(){return"image"===this.view}isOneLine(){return"oneline"===this.view}isTwoLines(){return"twolines"===this.view}isThreeLines(){return"threelines"===this.view}isFourLines(){return"fourlines"===this.view}isVertical(){return this.verticalLayout}}return it.config={useContactApis:!0},P([(0,E.MZ)({attribute:"person-query"}),ee("design:type",String),ee("design:paramtypes",[String])],it.prototype,"personQuery",null),P([(0,E.MZ)({attribute:"fallback-details",type:Object}),ee("design:type",Object),ee("design:paramtypes",[Object])],it.prototype,"fallbackDetails",null),P([(0,E.MZ)({attribute:"user-id"}),ee("design:type",String),ee("design:paramtypes",[String])],it.prototype,"userId",null),P([(0,E.MZ)({attribute:"usage"}),ee("design:type",String),ee("design:paramtypes",[String])],it.prototype,"usage",null),P([(0,E.MZ)({attribute:"show-presence",type:Boolean}),ee("design:type",Boolean)],it.prototype,"showPresence",void 0),P([(0,E.MZ)({attribute:"avatar-size",type:String}),ee("design:type",String)],it.prototype,"avatarSize",void 0),P([(0,E.wk)(),ee("design:type",Object),ee("design:paramtypes",[Object])],it.prototype,"personDetailsInternal",null),P([(0,E.MZ)({attribute:"person-details",type:Object}),ee("design:type",Object),ee("design:paramtypes",[Object])],it.prototype,"personDetails",null),P([(0,E.MZ)({attribute:"person-image",type:String}),ee("design:type",String),ee("design:paramtypes",[String])],it.prototype,"personImage",null),P([(0,E.MZ)({attribute:"fetch-image",type:Boolean}),ee("design:type",Boolean)],it.prototype,"fetchImage",void 0),P([(0,E.MZ)({attribute:"disable-image-fetch",type:Boolean}),ee("design:type",Boolean)],it.prototype,"disableImageFetch",void 0),P([(0,E.MZ)({attribute:"vertical-layout",type:Boolean}),ee("design:type",Boolean)],it.prototype,"verticalLayout",void 0),P([(0,E.MZ)({attribute:"avatar-type",converter:Me=>((it,Me="photo")=>(it=>"string"==typeof it&&ne.includes(it))(it)?it:Me)(Me,"photo")}),ee("design:type",String)],it.prototype,"avatarType",void 0),P([(0,E.MZ)({attribute:"person-presence",type:Object}),ee("design:type",Object),ee("design:paramtypes",[Object])],it.prototype,"personPresence",null),P([(0,E.MZ)({attribute:"person-card",converter:Me=>(0,$.e)(Me)}),ee("design:type",String)],it.prototype,"personCardInteraction",void 0),P([(0,E.MZ)({attribute:"line1-property"}),ee("design:type",String)],it.prototype,"line1Property",void 0),P([(0,E.MZ)({attribute:"line2-property"}),ee("design:type",String)],it.prototype,"line2Property",void 0),P([(0,E.MZ)({attribute:"line3-property"}),ee("design:type",String)],it.prototype,"line3Property",void 0),P([(0,E.MZ)({attribute:"line4-property"}),ee("design:type",String)],it.prototype,"line4Property",void 0),P([(0,E.MZ)({converter:Me=>(0,ve.E)(Me,"image")}),ee("design:type",String)],it.prototype,"view",void 0),P([(0,E.wk)(),ee("design:type",String)],it.prototype,"_fetchedImage",void 0),P([(0,E.wk)(),ee("design:type",Object)],it.prototype,"_fetchedPresence",void 0),P([(0,E.wk)(),ee("design:type",Boolean)],it.prototype,"_isInvalidImageSrc",void 0),P([(0,E.wk)(),ee("design:type",Boolean)],it.prototype,"_personCardShouldRender",void 0),P([(0,E.wk)(),ee("design:type",Object)],it.prototype,"_hasLoadedPersonCard",void 0),it})()},4166:(at,ge,d)=>{d.d(ge,{r:()=>O});var s=d(8324),c=d(9559),I=d(3402);const v=()=>void 0!==window.getWindowSegments,M=[s.AH`
.root .scout-top{position:fixed;top:0;left:0}.root .scout-bottom{position:fixed;bottom:0;right:0}.root .flyout{display:none;position:fixed;z-index:9999999;opacity:0;box-shadow:var(--mgt-flyout-box-shadow,var(--elevation-shadow-card-rest));border-radius:8px}.root .flyout.small{overflow:hidden auto}.root.visible .flyout{display:inline-block;animation-name:fade-in;animation-duration:.3s;animation-timing-function:cubic-bezier(0.1,0.9,0.2,1);animation-fill-mode:both;transition:top .3s ease,bottom .3s ease,left .3s ease}.root.visible .flyout.small{overflow:hidden auto}@keyframes fade-in{from{opacity:0;margin-top:-10px;margin-bottom:-10px}to{opacity:1;margin-top:0;margin-bottom:0}}
`];var _=d(8940),b=d(5260),E=function(V,B,S,K){var ae,oe=arguments.length,ve=oe<3?B:null===K?K=Object.getOwnPropertyDescriptor(B,S):K;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)ve=Reflect.decorate(V,B,S,K);else for(var de=V.length-1;de>=0;de--)(ae=V[de])&&(ve=(oe<3?ae(ve):oe>3?ae(B,S,ve):ae(B,S))||ve);return oe>3&&ve&&Object.defineProperty(B,S,ve),ve},N=function(V,B){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(V,B)};const O=()=>(0,_.N)("flyout",le);let le=(()=>{class V extends b.S{static get styles(){return M}get isOpen(){return this._isOpen}set isOpen(S){const K=this._isOpen;K!==S&&(this._isOpen=S,window.requestAnimationFrame(()=>{this.setupWindowEvents(this.isOpen);const oe=this._flyout;!this.isOpen&&oe&&(oe.style.width=null,oe.style.setProperty("--mgt-flyout-set-width",null),oe.style.setProperty("--mgt-flyout-set-height",null),oe.style.maxHeight=null,oe.style.top=null,oe.style.left=null,oe.style.bottom=null)}),this.requestUpdate("isOpen",K),this.dispatchEvent(new Event(S?"opened":"closed")))}get _edgePadding(){return 24}get _flyout(){return this.renderRoot.querySelector(".flyout")}get _anchor(){return this.renderRoot.querySelector(".anchor")}get _topScout(){return this.renderRoot.querySelector(".scout-top")}get _bottomScout(){return this.renderRoot.querySelector(".scout-bottom")}constructor(){super(),this._renderedOnce=!1,this._isOpen=!1,this._smallView=!1,this.handleWindowEvent=S=>{const K=this._flyout;if(K)if(S.composedPath){const oe=S.composedPath();if(oe.includes(K)||"pointerdown"===S.type&&oe.includes(this))return}else{let oe=S.target;for(;oe;)if(oe=oe.parentElement,oe===K||"pointerdown"===S.type&&oe===this)return}this.close()},this.handleResize=()=>{this.close()},this.handleKeyUp=S=>{"Escape"===S.key&&this.close()},this.handleFlyoutWheel=S=>{S.preventDefault()},this.avoidHidingAnchor=!0,this.addEventListener("expanded",()=>{window.requestAnimationFrame(()=>{this.updateFlyout()})})}open(){this.isOpen=!0}close(){this.isOpen=!1}disconnectedCallback(){this.setupWindowEvents(!1),super.disconnectedCallback()}updated(S){super.updated(S),window.requestAnimationFrame(()=>{this.updateFlyout()})}render(){const S={root:!0,visible:this.isOpen},K=this.renderAnchor();let oe=null;if(this._windowHeight=window.innerHeight&&document.documentElement.clientHeight?Math.min(window.innerHeight,document.documentElement.clientHeight):window.innerHeight||document.documentElement.clientHeight,this._windowHeight<250&&(this._smallView=!0),this.isOpen||this._renderedOnce){this._renderedOnce=!0;const ve=(0,I.H)({flyout:!0,small:this._smallView});oe=s.qy`
        <div class=${ve} @wheel=${this.handleFlyoutWheel}>
          ${this.renderFlyout()}
        </div>
      `}return s.qy`
      <div class=${(0,I.H)(S)}>
        <div class="anchor">
          ${K}
        </div>
        <div class="scout-top"></div>
        <div class="scout-bottom"></div>
        ${oe}
      </div>
    `}renderAnchor(){return s.qy`
      <slot name="anchor"></slot>
    `}renderFlyout(){return s.qy`
      <slot name="flyout"></slot>
    `}updateFlyout(S=!0){if(!this.isOpen)return;const K=this._anchor,oe=this._flyout;if(oe&&K){const ve=window.innerWidth&&document.documentElement.clientWidth?Math.min(window.innerWidth,document.documentElement.clientWidth):window.innerWidth||document.documentElement.clientWidth;this._windowHeight=window.innerHeight&&document.documentElement.clientHeight?Math.min(window.innerHeight,document.documentElement.clientHeight):window.innerHeight||document.documentElement.clientHeight;let de,$,J,ae=0,W=0;const ne=oe.getBoundingClientRect(),G=K.getBoundingClientRect(),ue=this._topScout.getBoundingClientRect(),q=this._bottomScout.getBoundingClientRect(),F={height:this._windowHeight,left:0,top:0,width:ve};if(v()){const me=(v()?window:null).getWindowSegments();let ze;const Ue=G.left+G.width/2,it=G.top+G.height/2;for(const Me of me)if(Ue>=Me.left&&it>=Me.top){ze=Me;break}ze&&(F.left=ze.left,F.top=ze.top,F.width=ze.width,F.height=ze.height)}ne.width+2*this._edgePadding>F.width?ne.width>F.width?(J=F.width,ae=0):ae=(F.width-ne.width)/2:ae=G.left+ne.width+this._edgePadding>F.width?G.left-(G.left+ne.width+this._edgePadding-F.width):G.left<this._edgePadding?this._edgePadding:G.left;const P=F.height-(G.top+G.height),ee=G.top;this.avoidHidingAnchor?P<=ne.height?ee<ne.height?ee>P?(de=F.height-G.top,$=ee):(W=G.bottom,$=P):(de=F.height-G.top,$=ee):(W=G.bottom,$=P):ne.height+2*this._edgePadding>F.height?ne.height>=F.height?($=F.height,W=0):W=(F.height-ne.height)/2:W=G.top+G.height+ne.height+this._edgePadding>F.height?F.height-ne.height-this._edgePadding:Math.max(G.top+G.height,this._edgePadding),(0!==ue.top||0!==ue.left)&&(ae-=ue.left,typeof de<"u"?de+=q.top-this._windowHeight:W-=ue.top),"rtl"===this.direction?ae>100&&this.offsetLeft>100&&(oe.style.left=F.width-ae+ne.left-ne.width-30+"px"):oe.style.left=`${ae+F.left}px`,typeof de<"u"?(oe.style.top="unset",oe.style.bottom=`${de}px`):(oe.style.bottom="unset",oe.style.top=`${W+F.top}px`),J&&(oe.style.width=`${J}px`,oe.style.setProperty("--mgt-flyout-set-width",`${J}px`),window.requestAnimationFrame(()=>this.updateFlyout())),$&&!S?(oe.style.maxHeight=`${$}px`,oe.style.setProperty("--mgt-flyout-set-height",`${$}px`)):(oe.style.maxHeight=null,oe.style.setProperty("--mgt-flyout-set-height","unset")),S&&window.requestAnimationFrame(()=>this.updateFlyout(!1))}}setupWindowEvents(S){S&&this.isLightDismiss?(window.addEventListener("wheel",this.handleWindowEvent),window.addEventListener("pointerdown",this.handleWindowEvent),window.addEventListener("resize",this.handleResize),window.addEventListener("keyup",this.handleKeyUp)):(window.removeEventListener("wheel",this.handleWindowEvent),window.removeEventListener("pointerdown",this.handleWindowEvent),window.removeEventListener("resize",this.handleResize),window.removeEventListener("keyup",this.handleKeyUp))}}return E([(0,c.MZ)({attribute:"light-dismiss",type:Boolean}),N("design:type",Boolean)],V.prototype,"isLightDismiss",void 0),E([(0,c.MZ)({attribute:null,type:Boolean}),N("design:type",Boolean)],V.prototype,"avoidHidingAnchor",void 0),E([(0,c.MZ)({attribute:"isOpen",type:Boolean}),N("design:type",Boolean),N("design:paramtypes",[Boolean])],V.prototype,"isOpen",null),V})()},1965:(at,ge,d)=>{d.d(ge,{i:()=>T});var s=d(8324),c=d(5260);const I=[s.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}
`];var v=d(8940);const T=()=>(0,v.N)("spinner",M);class M extends c.S{static get styles(){return I}render(){return s.qy`<fluent-progress-ring title="spinner"></fluent-progress-ring>`}}},5889:(at,ge,d)=>{d.d(ge,{j:()=>s});const s={presence:{name:"presence",stores:{presence:"presence"},version:2},users:{name:"users",stores:{users:"users",usersQuery:"usersQuery",userFilters:"userFilters"},version:3},photos:{name:"photos",stores:{contacts:"contacts",users:"users",groups:"groups",teams:"teams"},version:2},people:{name:"people",stores:{contacts:"contacts",groupPeople:"groupPeople",peopleQuery:"peopleQuery"},version:3},groups:{name:"groups",stores:{groups:"groups",groupsQuery:"groupsQuery"},version:5},get:{name:"responses",stores:{responses:"responses"},version:2},search:{name:"search",stores:{responses:"responses"},version:2},files:{name:"files",stores:{driveFiles:"driveFiles",groupFiles:"groupFiles",siteFiles:"siteFiles",userFiles:"userFiles",insightFiles:"insightFiles",fileQueries:"fileQueries"},version:2},fileLists:{name:"file-lists",stores:{fileLists:"fileLists",insightfileLists:"insightfileLists"},version:2}}},9546:(at,ge,d)=>{d.d(ge,{QY:()=>c,Ts:()=>I});const c=v=>"personType"in v||"userType"in v,I=v=>"initials"in v},7768:(at,ge,d)=>{d.d(ge,{$4:()=>it,$V:()=>E,Ad:()=>me,Ay:()=>ce,D:()=>se,KE:()=>$,Kx:()=>ze,LI:()=>ne,Mu:()=>ve,NO:()=>Me,Nd:()=>q,OB:()=>J,Pk:()=>P,Pq:()=>j,Rh:()=>He,S0:()=>Y,Sp:()=>ue,W1:()=>pe,WU:()=>Ue,WW:()=>ae,XD:()=>de,Y1:()=>re,Z:()=>Xe,Zm:()=>rt,bJ:()=>be,bn:()=>F,d$:()=>W,dM:()=>G,gt:()=>b,jI:()=>U,mQ:()=>wt,mj:()=>ke,n:()=>Te,o4:()=>Oe,oL:()=>We,sy:()=>Ge,wH:()=>ee,yv:()=>S,zn:()=>oe});var s=d(2404),c=d(4327),I=d(7425),v=d(5889),T=d(2657),M=d(3173),_=function(ot,mt,Be,Je){return new(Be||(Be=Promise))(function(tn,kn){function Dn(fn){try{Ei(Je.next(fn))}catch(fi){kn(fi)}}function Rn(fn){try{Ei(Je.throw(fn))}catch(fi){kn(fi)}}function Ei(fn){fn.done?tn(fn.value):function Gt(tn){return tn instanceof Be?tn:new Be(function(kn){kn(tn)})}(fn.value).then(Dn,Rn)}Ei((Je=Je.apply(ot,mt||[])).next())})};const b=ot=>Array.isArray(ot.nextExpectedRanges),E=()=>_(void 0,void 0,void 0,function*(){yield s._.getCache(v.j.fileLists,v.j.fileLists.stores.fileLists).clearStore()}),N=()=>s._.config.files.invalidationPeriod||s._.config.defaultInvalidationPeriod,O=()=>s._.config.files.isEnabled&&s._.config.isEnabled,V=()=>s._.config.fileLists.isEnabled&&s._.config.isEnabled,B=["Files.Read","Files.ReadWrite","Files.Read.All","Files.ReadWrite.All","Group.Read.All","Group.ReadWrite.All","Sites.Read.All","Sites.ReadWrite.All"],S=["Sites.Read.All","Sites.ReadWrite.All"],K=["Files.ReadWrite","Files.ReadWrite.All","Sites.ReadWrite.All"],oe=(ot,mt,Be=v.j.files.stores.fileQueries,Je=B)=>_(void 0,void 0,void 0,function*(){const Gt=s._.getCache(v.j.files,Be),tn=yield lt(Gt,mt);if(tn)return tn;let kn;try{kn=yield ot.api(mt).middlewareOptions((0,c.F)(Je)).get(),O()&&(yield Gt.putValue(mt,{file:JSON.stringify(kn)}))}catch{}return kn||null}),ve=(ot,mt,Be)=>_(void 0,void 0,void 0,function*(){return oe(ot,`/drives/${mt}/items/${Be}`,v.j.files.stores.driveFiles)}),ae=(ot,mt,Be)=>_(void 0,void 0,void 0,function*(){return oe(ot,`/drives/${mt}/root:/${Be}`,v.j.files.stores.driveFiles)}),de=(ot,mt,Be)=>_(void 0,void 0,void 0,function*(){return oe(ot,`/groups/${mt}/drive/items/${Be}`,v.j.files.stores.groupFiles)}),W=(ot,mt,Be)=>_(void 0,void 0,void 0,function*(){return oe(ot,`/groups/${mt}/drive/root:/${Be}`,v.j.files.stores.groupFiles)}),$=(ot,mt)=>_(void 0,void 0,void 0,function*(){return oe(ot,`/me/drive/items/${mt}`,v.j.files.stores.userFiles)}),J=(ot,mt)=>_(void 0,void 0,void 0,function*(){return oe(ot,`/me/drive/root:/${mt}`,v.j.files.stores.userFiles)}),ne=(ot,mt,Be)=>_(void 0,void 0,void 0,function*(){return oe(ot,`/sites/${mt}/drive/items/${Be}`,v.j.files.stores.siteFiles)}),G=(ot,mt,Be)=>_(void 0,void 0,void 0,function*(){return oe(ot,`/sites/${mt}/drive/root:/${Be}`,v.j.files.stores.siteFiles)}),ue=(ot,mt,Be,Je)=>_(void 0,void 0,void 0,function*(){return oe(ot,`/sites/${mt}/lists/${Be}/items/${Je}/driveItem`,v.j.files.stores.siteFiles)}),q=(ot,mt,Be)=>_(void 0,void 0,void 0,function*(){return oe(ot,`/users/${mt}/drive/items/${Be}`,v.j.files.stores.userFiles)}),F=(ot,mt,Be)=>_(void 0,void 0,void 0,function*(){return oe(ot,`/users/${mt}/drive/root:/${Be}`,v.j.files.stores.userFiles)}),P=(ot,mt,Be)=>_(void 0,void 0,void 0,function*(){return oe(ot,`/me/insights/${mt}/${Be}/resource`,v.j.files.stores.insightFiles,S)}),ee=(ot,mt,Be,Je)=>_(void 0,void 0,void 0,function*(){return oe(ot,`/users/${mt}/insights/${Be}/${Je}/resource`,v.j.files.stores.insightFiles,S)}),Z=(ot,mt,Be,Je)=>_(void 0,void 0,void 0,function*(){let Gt;const tn=s._.getCache(v.j.fileLists,Be),kn=yield Ot(tn,Be,`${mt}:${Je}`);if(kn)return Gt=Ne(ot,kn.files,kn.nextLink),Gt;let Dn;try{if(Dn=ot.api(mt).middlewareOptions((0,c.F)(B)),Je&&Dn.top(Je),Gt=yield Ce(ot,Dn),V()){const Rn=Gt.nextLink;yield tn.putValue(mt,{files:Gt.value.map(Ei=>JSON.stringify(Ei)),nextLink:Rn})}}catch{}return Gt||null}),me=(ot,mt)=>_(void 0,void 0,void 0,function*(){return Z(ot,"/me/drive/root/children",v.j.fileLists.stores.fileLists,mt)}),ze=(ot,mt,Be,Je)=>_(void 0,void 0,void 0,function*(){return Z(ot,`/drives/${mt}/items/${Be}/children`,v.j.fileLists.stores.fileLists,Je)}),Ue=(ot,mt,Be,Je)=>_(void 0,void 0,void 0,function*(){return Z(ot,`/drives/${mt}/root:/${Be}:/children`,v.j.fileLists.stores.fileLists,Je)}),it=(ot,mt,Be,Je)=>_(void 0,void 0,void 0,function*(){return Z(ot,`/groups/${mt}/drive/items/${Be}/children`,v.j.fileLists.stores.fileLists,Je)}),Me=(ot,mt,Be,Je)=>_(void 0,void 0,void 0,function*(){return Z(ot,`/groups/${mt}/drive/root:/${Be}:/children`,v.j.fileLists.stores.fileLists,Je)}),re=(ot,mt,Be)=>_(void 0,void 0,void 0,function*(){return Z(ot,`/me/drive/items/${mt}/children`,v.j.fileLists.stores.fileLists,Be)}),Oe=(ot,mt,Be)=>_(void 0,void 0,void 0,function*(){return Z(ot,`/me/drive/root:/${mt}:/children`,v.j.fileLists.stores.fileLists,Be)}),Xe=(ot,mt,Be,Je)=>_(void 0,void 0,void 0,function*(){return Z(ot,`/sites/${mt}/drive/items/${Be}/children`,v.j.fileLists.stores.fileLists,Je)}),He=(ot,mt,Be,Je)=>_(void 0,void 0,void 0,function*(){return Z(ot,`/sites/${mt}/drive/root:/${Be}:/children`,v.j.fileLists.stores.fileLists,Je)}),rt=(ot,mt,Be,Je)=>_(void 0,void 0,void 0,function*(){return Z(ot,`/users/${mt}/drive/items/${Be}/children`,v.j.fileLists.stores.fileLists,Je)}),Te=(ot,mt,Be,Je)=>_(void 0,void 0,void 0,function*(){return Z(ot,`/users/${mt}/drive/root:/${Be}:/children`,v.j.fileLists.stores.fileLists,Je)}),se=(ot,mt,Be)=>_(void 0,void 0,void 0,function*(){return Z(ot,mt,v.j.fileLists.stores.fileLists,Be)}),U=(ot,mt)=>_(void 0,void 0,void 0,function*(){const Be=`/me/insights/${mt}`,Je=v.j.fileLists.stores.insightfileLists,Gt=s._.getCache(v.j.fileLists,Je),tn=yield Ot(Gt,Je,Be);if(tn)return tn.files.map(Rn=>JSON.parse(Rn));let kn;try{kn=yield ot.api(Be).filter("resourceReference/type eq 'microsoft.graph.driveItem'").middlewareOptions((0,c.F)(S)).get()}catch{}const Dn=yield Qe(ot,kn,S);return V()&&(yield Gt.putValue(Be,{files:Dn.map(Rn=>JSON.stringify(Rn))})),Dn||null}),Y=(ot,mt,Be)=>_(void 0,void 0,void 0,function*(){let Je,Gt;"shared"===Be?(Je="/me/insights/shared",Gt=`((lastshared/sharedby/id eq '${mt}') and (resourceReference/type eq 'microsoft.graph.driveItem'))`):(Je=`/users/${mt}/insights/${Be}`,Gt="resourceReference/type eq 'microsoft.graph.driveItem'");const tn=`${Je}?$filter=${Gt}`,kn=v.j.fileLists.stores.insightfileLists,Dn=s._.getCache(v.j.fileLists,kn),Rn=yield Ot(Dn,kn,tn);if(Rn)return Rn.files.map(fi=>JSON.parse(fi));let Ei;try{Ei=yield ot.api(Je).filter(Gt).middlewareOptions((0,c.F)(S)).get()}catch{}const fn=yield Qe(ot,Ei,S);return V()&&(yield Dn.putValue(Je,{files:fn.map(fi=>JSON.stringify(fi))})),fn||null}),be=(ot,mt)=>_(void 0,void 0,void 0,function*(){if(!mt||0===mt.length)return[];const Be=ot.createBatch(),Je=[];let Gt,tn;O()&&(Gt=s._.getCache(v.j.files,v.j.files.stores.fileQueries));for(const kn of mt)O()&&(tn=yield Gt.getValue(kn)),O()&&tn&&N()>Date.now()-tn.timeCached?Je.push(JSON.parse(tn.file)):""!==kn&&Be.get(kn,kn,B);try{const kn=yield Be.executeAll();for(const Dn of mt){const Rn=kn.get(Dn);Rn?.content&&(Je.push(Rn.content),O()&&(yield Gt.putValue(Dn,{file:JSON.stringify(Rn.content)})))}return Je}catch{try{return Promise.all(mt.filter(Dn=>Dn&&""!==Dn).map(Dn=>_(void 0,void 0,void 0,function*(){const Rn=yield oe(ot,Dn);if(Rn)return O()&&(yield Gt.putValue(Dn,{file:JSON.stringify(Rn)})),Rn})))}catch{return[]}}}),Qe=(ot,mt,Be)=>_(void 0,void 0,void 0,function*(){if(!mt)return[];const Je=mt.value,Gt=ot.createBatch(),tn=[];for(const kn of Je){const Dn=kn.resourceReference.id;""!==Dn&&Gt.get(Dn,Dn,Be)}try{const kn=yield Gt.executeAll();for(const Dn of Je){const Rn=kn.get(Dn.resourceReference.id);Rn?.content&&tn.push(Rn.content)}return tn}catch{try{return Promise.all(Je.filter(Dn=>!!Dn.resourceReference.id).map(Dn=>_(void 0,void 0,void 0,function*(){return yield ot.api(Dn.resourceReference.id).middlewareOptions((0,c.F)(Be)).get()})))}catch{return[]}}}),Ce=(ot,mt)=>_(void 0,void 0,void 0,function*(){return I.E.create(ot,mt)}),Ne=(ot,mt,Be)=>I.E.createFromValue(ot,mt.map(Je=>JSON.parse(Je)),Be),lt=(ot,mt)=>_(void 0,void 0,void 0,function*(){if(O()){const Be=yield ot.getValue(mt);if(Be&&N()>Date.now()-Be.timeCached)return JSON.parse(Be.file)}return null}),Ot=(ot,mt,Be)=>_(void 0,void 0,void 0,function*(){if(ot||(ot=s._.getCache(v.j.fileLists,mt)),V()){const Je=yield ot.getValue(Be);if(Je&&(s._.config.fileLists.invalidationPeriod||s._.config.defaultInvalidationPeriod)>Date.now()-Je.timeCached)return Je}return null}),We=ot=>_(void 0,void 0,void 0,function*(){const mt=ot.nextLink;if(ot.hasNext&&(yield ot.next()),V()){const Be=s._.getCache(v.j.fileLists,v.j.fileLists.stores.fileLists),tn=/(graph.microsoft.com\/(v1.0|beta))(.*?)(?=\?)/gi.exec(mt)[3];yield Be.putValue(tn,{files:ot.value.map(kn=>JSON.stringify(kn)),nextLink:mt})}}),pe=(ot,mt,Be)=>_(void 0,void 0,void 0,function*(){try{const Je=yield ot.api(mt).responseType(T.yl.RAW).middlewareOptions((0,c.F)(Be)).get();if(404===Je.status)return{eTag:null,thumbnail:null};if(!Je.ok)return null;return{eTag:Je.headers.get("eTag"),thumbnail:yield(0,M.Sk)(yield Je.blob())}}catch{return null}}),j=(ot,mt)=>_(void 0,void 0,void 0,function*(){try{return(yield ot.api(mt).middlewareOptions((0,c.F)(B)).get())||null}catch{}return null}),ce=(ot,mt,Be)=>_(void 0,void 0,void 0,function*(){try{const Je={item:{"@microsoft.graph.conflictBehavior":Be||"rename"}};let Gt;try{Gt=yield ot.api(mt).middlewareOptions((0,c.F)(K)).post(JSON.stringify(Je))}catch{}return Gt||null}catch{return null}}),ke=(ot,mt,Be,Je,Gt)=>_(void 0,void 0,void 0,function*(){try{const tn={"Content-Length":Be,"Content-Range":Je};let kn;try{kn=yield ot.client.api(mt).middlewareOptions((0,c.F)(K)).headers(tn).put(Gt)}catch{}return kn||null}catch{return null}}),Ge=(ot,mt,Be)=>_(void 0,void 0,void 0,function*(){try{let Je;try{Je=yield ot.client.api(mt).middlewareOptions((0,c.F)(K)).put(Be)}catch{}return Je||null}catch{return null}}),wt=(ot,mt)=>_(void 0,void 0,void 0,function*(){try{yield ot.client.api(mt).middlewareOptions((0,c.F)(K)).delete()}catch{return null}})},6692:(at,ge,d)=>{d.d(ge,{K3:()=>ae,cB:()=>oe,iu:()=>ve,lq:()=>K,ox:()=>de,we:()=>O,ys:()=>b});var s=d(2404),c=d(4327),I=d(3173),v=d(5889),T=function(W,$,J,ne){return new(J||(J=Promise))(function(ue,q){function F(Z){try{ee(ne.next(Z))}catch(me){q(me)}}function P(Z){try{ee(ne.throw(Z))}catch(me){q(me)}}function ee(Z){Z.done?ue(Z.value):function G(ue){return ue instanceof J?ue:new J(function(q){q(ue)})}(Z.value).then(F,P)}ee((ne=ne.apply(W,$||[])).next())})};const M=["any","person","group"],b=(W,$="any")=>(W=>"string"==typeof W&&M.includes(W))(W)?W:$,E=["any","user","contact"],O=(W,$="any")=>(W=>"string"==typeof W&&E.includes(W))(W)?W:$,le=()=>s._.config.people.invalidationPeriod||s._.config.defaultInvalidationPeriod,V=()=>s._.config.people.isEnabled&&s._.config.isEnabled,B=["People.Read","People.Read.All"],S=["Contacts.Read","Contacts.ReadWrite"],K=(W,$,J=10,ne="any",G="")=>T(void 0,void 0,void 0,function*(){const ue=`${$}:${J}:${ne}`;let q;if(V()){q=s._.getCache(v.j.people,v.j.people.stores.peopleQuery);const me=V()?yield q.getValue(ue):null;if(me&&le()>Date.now()-me.timeCached)return me.results.map(ze=>JSON.parse(ze))}let P,F="personType/class eq 'Person'";"any"!==ne&&(F+="user"===ne?"and personType/subclass eq 'OrganizationUser'":"and (personType/subclass eq 'ImplicitContact' or personType/subclass eq 'PersonalContact')"),""!==G&&(F+=` and  ${G}`);try{let ee=W.api("/me/people").search('"'+$+'"').top(J).filter(F).middlewareOptions((0,c.F)(B));if("contact"!==ne&&(ee=ee.header("X-PeopleQuery-QuerySources","Mailbox,Directory")),P=yield ee.get(),V()&&P){const Z={maxResults:J,results:null};Z.results=P.value.map(me=>JSON.stringify(me)),yield q.putValue(ue,Z)}}catch{}return P?.value}),oe=(W,$="any",J="",ne=10)=>T(void 0,void 0,void 0,function*(){let G;const ue=`${J||`*:${$}`}:${ne}`;if(V()){G=s._.getCache(v.j.people,v.j.people.stores.peopleQuery);const ee=yield G.getValue(ue);if(ee&&le()>Date.now()-ee.timeCached)return ee.results.map(Z=>JSON.parse(Z))}let P,F="personType/class eq 'Person'";"any"!==$&&(F+="user"===$?"and personType/subclass eq 'OrganizationUser'":"and (personType/subclass eq 'ImplicitContact' or personType/subclass eq 'PersonalContact')"),J&&(F+=` and ${J}`);try{let ee=W.api("/me/people").middlewareOptions((0,c.F)(B)).top(ne).filter(F);"contact"!==$&&(ee=ee.header("X-PeopleQuery-QuerySources","Mailbox,Directory")),P=yield ee.get(),V()&&P&&(yield G.putValue(ue,{maxResults:10,results:P.value.map(Z=>JSON.stringify(Z))}))}catch{}return P?P.value:null}),ve=W=>{var $,J;const ne=W,ue=W;return W.mail?(0,I.aX)(W.mail):null!==($=ne.scoredEmailAddresses)&&void 0!==$&&$.length?(0,I.aX)(ne.scoredEmailAddresses[0].address):null!==(J=ue.emailAddresses)&&void 0!==J&&J.length?(0,I.aX)(ue.emailAddresses[0].address):null},ae=(W,$)=>T(void 0,void 0,void 0,function*(){let J;if(V()){J=s._.getCache(v.j.people,v.j.people.stores.contacts);const ue=yield J.getValue($);if(ue&&le()>Date.now()-ue.timeCached)return JSON.parse(ue.person)}const ne=`${$.replace(/#/g,"%2523")}`,G=yield W.api("/me/contacts").filter(`emailAddresses/any(a:a/address eq '${ne}')`).middlewareOptions((0,c.F)(S)).get();return V()&&G&&(yield J.putValue($,{person:JSON.stringify(G.value)})),G?G.value:null}),de=(W,$,J,ne)=>T(void 0,void 0,void 0,function*(){var G;let ue;const q=`${$}${J}`;if(V()){ue=s._.getCache(v.j.people,v.j.people.stores.peopleQuery);const ee=yield ue.getValue(q);if(ee&&le()>Date.now()-ee.timeCached)return ee.results.map(Z=>JSON.parse(Z))}let F=W.api(J).version($);ne?.length&&(F=F.middlewareOptions((0,c.F)(ne)));let P=yield F.get();if(P&&Array.isArray(P.value)&&P["@odata.nextLink"]){let ee=P;for(;ee?.["@odata.nextLink"];){const me=ee["@odata.nextLink"].split($)[1];ee=yield W.api(me).version($).get(),null!==(G=ee?.value)&&void 0!==G&&G.length&&(ee.value=P.value.concat(ee.value),P=ee)}}if(V()&&P){const ee={results:null};ee.results=Array.isArray(P.value)?P.value.map(Z=>JSON.stringify(Z)):[JSON.stringify(P)],yield ue.putValue(q,ee)}return P?.value})},4130:(at,ge,d)=>{d.d(ge,{B2:()=>O,HJ:()=>N,aC:()=>E,e_:()=>V,f8:()=>oe,pc:()=>ae,qr:()=>le,r$:()=>de,t5:()=>ve});var s=d(2404),c=d(4327),I=d(2657),v=d(3173),T=d(5889),M=d(6692),_=d(5527),b=function(W,$,J,ne){return new(J||(J=Promise))(function(ue,q){function F(Z){try{ee(ne.next(Z))}catch(me){q(me)}}function P(Z){try{ee(ne.throw(Z))}catch(me){q(me)}}function ee(Z){Z.done?ue(Z.value):function G(ue){return ue instanceof J?ue:new J(function(q){q(ue)})}(Z.value).then(F,P)}ee((ne=ne.apply(W,$||[])).next())})};const E=()=>s._.config.photos.invalidationPeriod||s._.config.defaultInvalidationPeriod,N=()=>s._.config.photos.isEnabled&&s._.config.isEnabled,O=["User.ReadBasic.All","User.Read.All","User.ReadWrite.All"],le=["User.Read","User.ReadWrite",...O],V=(W,$,J)=>b(void 0,void 0,void 0,function*(){try{const ne=yield W.api(`${$}/photo/$value`).responseType(I.yl.RAW).middlewareOptions((0,c.F)(J)).get();return 404===ne.status?{eTag:null,photo:null}:ne.ok?{eTag:ne["@odata.mediaEtag"],photo:yield(0,v.Sk)(yield ne.blob())}:null}catch{return null}}),B=(W,$)=>b(void 0,void 0,void 0,function*(){let J,ne;return N()&&(J=s._.getCache(T.j.photos,T.j.photos.stores.contacts),ne=yield J.getValue($),ne&&E()>Date.now()-ne.timeCached)?ne.photo:(ne=yield V(W,`me/contacts/${$}`,["Contacts.Read","Contacts.ReadWrite"]),N()&&ne&&(yield J.putValue($,ne)),ne?ne.photo:null)}),S=(W,$)=>b(void 0,void 0,void 0,function*(){let J,ne;if(N()){if(J=s._.getCache(T.j.photos,T.j.photos.stores.users),ne=yield J.getValue($),ne&&E()>Date.now()-ne.timeCached)return ne.photo;if(ne)try{const G=yield W.api(`users/${$}/photo`).get();G&&(G["@odata.mediaEtag"]!==ne.eTag||null===G["@odata.mediaEtag"]&&null===ne.eTag)&&(ne=null)}catch{return null}}return ne=ne||(yield V(W,`users/${$}`,O)),N()&&ne&&(yield J.putValue($,ne)),ne?ne.photo:null}),oe=(W,$,J=!0)=>b(void 0,void 0,void 0,function*(){if("personType"in $&&"OrganizationUser"!==$.personType.subclass){if("PersonalContact"===$.personType.subclass&&J){const G=(0,M.iu)($),ue=yield(0,M.K3)(W,G);if(ue?.length&&ue[0].id)return yield B(W,ue[0].id)}return null}if($.userPrincipalName||$.id){const G=$.userPrincipalName||$.id;return yield S(W,G)}if($.id){const G=yield S(W,$.id);if(G)return G}const ne=(0,M.iu)($);if(ne){const G=yield(0,_.Ei)(W,ne,1);if(G?.length)return yield S(W,G[0].id);if(J){const ue=yield(0,M.K3)(W,ne);if(ue?.length)return yield B(W,ue[0].id)}}return null}),ve=(W,$)=>b(void 0,void 0,void 0,function*(){let J,ne;const G=$.id;if(N()){if(ne=s._.getCache(T.j.photos,T.j.photos.stores.groups),J=yield ne.getValue(G),J&&E()>Date.now()-J.timeCached)return J.photo;if(J)try{const q=yield W.api(`groups/${G}/photo`).get();q&&(q["@odata.mediaEtag"]!==J.eTag||null===q["@odata.mediaEtag"]&&null===J.eTag)&&(J=null)}catch{return null}}return J=J||(yield V(W,`groups/${G}`,["Group.Read.All","Group.ReadWrite.All"])),N()&&J&&(yield ne.putValue(G,J)),J?J.photo:null}),ae=(W,$)=>b(void 0,void 0,void 0,function*(){return yield s._.getCache(T.j.photos,$).getValue(W)}),de=(W,$,J)=>b(void 0,void 0,void 0,function*(){yield s._.getCache(T.j.photos,$).putValue(W,J)})},1786:(at,ge,d)=>{d.d(ge,{R:()=>_,u:()=>b});var s=d(2404),c=d(4327),I=d(5889),v=function(E,N,O,le){return new(O||(O=Promise))(function(B,S){function K(ae){try{ve(le.next(ae))}catch(de){S(de)}}function oe(ae){try{ve(le.throw(ae))}catch(de){S(de)}}function ve(ae){ae.done?B(ae.value):function V(B){return B instanceof O?B:new O(function(S){S(B)})}(ae.value).then(K,oe)}ve((le=le.apply(E,N||[])).next())})};const T=()=>s._.config.presence.invalidationPeriod||s._.config.defaultInvalidationPeriod,M=()=>s._.config.presence.isEnabled&&s._.config.isEnabled,_=(E,N)=>v(void 0,void 0,void 0,function*(){let O;if(M()){O=s._.getCache(I.j.presence,I.j.presence.stores.presence);const S=yield O.getValue(N||"me");if(S&&T()>Date.now()-S.timeCached)return JSON.parse(S.presence)}const le=N?["presence.read.all"]:["presence.read","presence.read.all"],V=N?`/users/${N}/presence`:"/me/presence",B=yield E.api(V).middlewareOptions((0,c.F)(le)).get();return M()&&(yield O.putValue(N||"me",{presence:JSON.stringify(B)})),B}),b=(E,N)=>v(void 0,void 0,void 0,function*(){if(!N||0===N.length)return{};const O={},le=[],V=["presence.read.all"];let B;M()&&(B=s._.getCache(I.j.presence,I.j.presence.stores.presence));for(const S of N)if(S?.id){const K=S.id;let oe;O[K]=null,M()&&(oe=yield B.getValue(K)),M()&&oe&&T()>Date.now()-oe.timeCached?O[K]=JSON.parse(oe.presence):le.push(K)}try{if(le.length>0){const S=yield E.api("/communications/getPresencesByUserId").middlewareOptions((0,c.F)(V)).post({ids:le});for(const K of S.value)O[K.id]=K,M()&&(yield B.putValue(K.id,{presence:JSON.stringify(K)}))}return O}catch{try{const K=yield Promise.all(N.filter(oe=>oe?.id&&!O[oe.id]&&"personType"in oe&&"OrganizationUser"===oe.personType.subclass).map(oe=>_(E,oe.id)));for(const oe of K)O[oe.id]=oe;return O}catch{return null}}})},5527:(at,ge,d)=>{d.d(ge,{$q:()=>V,Ei:()=>S,PD:()=>M,cA:()=>_,fp:()=>oe,jp:()=>N,lo:()=>b,sb:()=>K,vW:()=>O,vl:()=>B,wz:()=>le});var s=d(2404),c=d(4327),I=d(5889),v=d(6692),T=function(ve,ae,de,W){return new(de||(de=Promise))(function(J,ne){function G(F){try{q(W.next(F))}catch(P){ne(P)}}function ue(F){try{q(W.throw(F))}catch(P){ne(P)}}function q(F){F.done?J(F.value):function $(J){return J instanceof de?J:new de(function(ne){ne(J)})}(F.value).then(G,ue)}q((W=W.apply(ve,ae||[])).next())})};const M=()=>s._.config.users.invalidationPeriod||s._.config.defaultInvalidationPeriod,_=()=>s._.config.users.isEnabled&&s._.config.isEnabled,b=(ve,ae="",de=10)=>T(void 0,void 0,void 0,function*(){const W=["User.ReadBasic.All","User.Read.All","Directory.Read.All","User.ReadWrite.All","Directory.ReadWrite.All"];let J;const ne=`${""===ae?"*":ae}:${de}`,G={maxResults:de,results:null};if(_()){J=s._.getCache(I.j.users,I.j.users.stores.userFilters);const q=yield J.getValue(ne);if(q&&M()>Date.now()-q.timeCached)return q.results.map(F=>JSON.parse(F))}const ue=ve.api("/users").top(de);ae&&ue.filter(ae).header("ConsistencyLevel","eventual").count(!0);try{const q=yield ue.middlewareOptions((0,c.F)(W)).get();return _()&&q&&(G.results=q.value.map(F=>JSON.stringify(F)),yield J.putValue(ae,G)),q.value}catch{}}),E=["User.Read","User.ReadWrite"],N=(ve,ae)=>T(void 0,void 0,void 0,function*(){let de;if(_()){de=s._.getCache(I.j.users,I.j.users.stores.users);const J=yield de.getValue("me");if(J&&M()>Date.now()-J.timeCached){const ne=JSON.parse(J.user),G=ae?ae.filter(ue=>!Object.keys(ne).includes(ue)):null;if(!G||G.length<=1)return ne}}let W="me";ae&&(W=W+"?$select="+ae.toString());const $=yield ve.api(W).middlewareOptions((0,c.F)(E)).get();return _()&&(yield de.putValue("me",{user:JSON.stringify($)})),$}),O=["User.ReadBasic.All","User.Read.All","Directory.Read.All","User.ReadWrite.All","Directory.ReadWrite.All"],le=(ve,ae,de)=>T(void 0,void 0,void 0,function*(){let W;if(_()){W=s._.getCache(I.j.users,I.j.users.stores.users);const ne=yield W.getValue(ae);if(ne&&M()>Date.now()-ne.timeCached){const G=ne.user?JSON.parse(ne.user):null,ue=de&&G?de.filter(q=>!Object.keys(G).includes(q)):null;if(!ue||ue.length<=1)return G}}let J,$=`/users/${ae}`;de&&($=$+"?$select="+de.toString());try{J=yield ve.api($).middlewareOptions((0,c.F)(O)).get()}catch{}return _()&&(yield W.putValue(ae,{user:JSON.stringify(J)})),J}),V=(ve,ae,de="",W="",$)=>T(void 0,void 0,void 0,function*(){if(!ae||0===ae.length)return[];const J=ve.createBatch(),ne={},G={},ue=[];let q;de=de.toLowerCase(),_()&&(q=s._.getCache(I.j.users,I.j.users.stores.users));for(const F of ae){ne[F]=null;let ee,Z,P=`/users/${F}`;if(_()&&(Z=yield q.getValue(F)),Z?.user&&M()>Date.now()-Z.timeCached)if(ee=JSON.parse(Z?.user),de){if(ee){const me=ee.displayName;me?.toLowerCase().includes(de)&&(G[F]=ee)}}else ee?ne[F]=ee:(J.get(F,P,O),ue.push(F));else""!==F&&("me"===F?ne[F]=yield N(ve):(P=`/users/${F}`,W&&(P+=`${P}?$filter=${W}&$count=true`),J.get(F,P,O,W?{ConsistencyLevel:"eventual"}:{}),ue.push(F)))}try{if(J.hasRequests){const F=yield J.executeAll();for(const P of ae){const ee=F.get(P);if(ee?.content){const Z=ee.content;de?(Z?.displayName.toLowerCase()||"").includes(de)&&(G[P]=Z):ne[P]=Z,_()&&(yield q.putValue(P,{user:JSON.stringify(Z)}))}else{const Z=$.find(me=>Object.values(me).includes(P));Z&&(ne[P]=Z)}}}return de&&Object.keys(G).length?Promise.all(Object.values(G)):Promise.all(Object.values(ne))}catch{try{return ae.filter(P=>ue.includes(P)).forEach(P=>{ne[P]=le(ve,P)}),_()&&(yield Promise.all(ae.filter(P=>ue.includes(P)).map(P=>T(void 0,void 0,void 0,function*(){return yield q.putValue(P,{user:JSON.stringify(yield ne[P])})})))),Promise.all(Object.values(ne))}catch{return[]}}}),B=(ve,ae,de)=>T(void 0,void 0,void 0,function*(){var W;const $=["People.Read","People.Read.All"];if(!ae||0===ae.length)return[];const J=ve.createBatch(),ne=[];let G,ue;_()&&(ue=s._.getCache(I.j.users,I.j.users.stores.usersQuery));for(const q of ae)if(_()&&(G=yield ue.getValue(q)),_()&&G?.results[0]&&M()>Date.now()-G.timeCached){const F=JSON.parse(G.results[0]);ne.push(F)}else J.get(q,`/me/people?$search="${q}"`,$,{"X-PeopleQuery-QuerySources":"Mailbox,Directory"});if(J.hasRequests)try{const q=yield J.executeAll();for(const F of ae){const P=q.get(F);if(null!==(W=P?.content)&&void 0!==W&&W.value&&P.content.value.length>0)ne.push(P.content.value[0]),_()&&(yield ue.putValue(F,{maxResults:1,results:[JSON.stringify(P.content.value[0])]}));else{const ee=de.find(Z=>Object.values(Z).includes(F));ee&&ne.push(ee)}}return ne}catch{try{return Promise.all(ae.filter(F=>F&&""!==F).map(F=>T(void 0,void 0,void 0,function*(){const P=yield(0,v.lq)(ve,F,1);if(P?.length)return _()&&(yield ue.putValue(F,{maxResults:1,results:[JSON.stringify(P[0])]})),P[0]})))}catch{return[]}}return ne}),S=(ve,ae,de=10,W="")=>T(void 0,void 0,void 0,function*(){const $=O,J={maxResults:de,results:null},ne=`${ae}:${de}:${W}`;let G;if(_()){G=s._.getCache(I.j.users,I.j.users.stores.usersQuery);const P=yield G.getValue(ne);if(P&&M()>Date.now()-P.timeCached)return P.results.map(ee=>JSON.parse(ee))}const ue=`${ae.replace(/#/g,"%2523")}`,q=ve.api("users").search(`"displayName:${ue}" OR "mail:${ue}"`).header("ConsistencyLevel","eventual").count(!0);let F;""!==W&&q.filter(W);try{F=yield q.top(de).middlewareOptions((0,c.F)($)).get()}catch{}return _()&&F&&(J.results=F.value.map(P=>JSON.stringify(P)),yield G.putValue(ae,J)),F?F.value:null}),K=(ve,ae,de,W=10,$="person",J=!1,ne="",G="")=>T(void 0,void 0,void 0,function*(){const q={maxResults:W,results:null};let F;const P=`${de||"*"}:${ae||"*"}:${W}:${$}:${J}:${ne}`;if(_()){F=s._.getCache(I.j.users,I.j.users.stores.usersQuery);const Ue=yield F.getValue(P);if(Ue&&M()>Date.now()-Ue.timeCached)return Ue.results.map(it=>JSON.parse(it))}let ee="";ae&&(ee=`startswith(displayName,'${ae}') or startswith(givenName,'${ae}') or startswith(surname,'${ae}') or startswith(mail,'${ae}') or startswith(userPrincipalName,'${ae}')`);let Z=`/groups/${de}/${J?"transitiveMembers":"members"}`;"person"===$?Z+="/microsoft.graph.user":"group"===$&&(Z+="/microsoft.graph.group",ae&&(ee=`startswith(displayName,'${ae}') or startswith(mail,'${ae}')`)),ne&&(ee+=ae?` and ${ne}`:ne),G&&(ee+=ae?` and ${G}`:G);const me=ve.api(Z).top(W).filter(ee);ne&&me.header("ConsistencyLevel","eventual").count(!0);const ze=yield me.middlewareOptions((0,c.F)(["GroupMember.Read.All","Group.Read.All","Directory.Read.All","GroupMember.ReadWrite.All","Group.ReadWrite.All"])).get();return _()&&ze&&(q.results=ze.value.map(Ue=>JSON.stringify(Ue)),yield F.putValue(P,q)),ze?ze.value:null}),oe=(ve,ae,de,W=10,$="person",J=!1,ne="")=>T(void 0,void 0,void 0,function*(){const G=[];for(const ue of de)try{const q=yield K(ve,ae,ue,W,$,J,ne);G.push(...q)}catch{continue}return G})},2898:(at,ge,d)=>{d.d(ge,{_:()=>b});var s=d(2404),c=d(4327),I=d(4130),v=d(5527),T=d(5889),M=d(6199);const b=(E,N,O)=>function(E,N,O,le){return new(O||(O=Promise))(function(B,S){function K(ae){try{ve(le.next(ae))}catch(de){S(de)}}function oe(ae){try{ve(le.throw(ae))}catch(de){S(de)}}function ve(ae){ae.done?B(ae.value):function V(B){return B instanceof O?B:new O(function(S){S(B)})}(ae.value).then(K,oe)}ve((le=le.apply(E,N||[])).next())})}(void 0,void 0,void 0,function*(){const le=["User.ReadBasic.All","User.Read.All","Directory.Read.All","User.ReadWrite.All","Directory.ReadWrite.All"],V=["User.Read","User.ReadWrite",...le],B=N?le:V,S=N?I.B2:I.qr;let K,ve,ae,oe=null;const de=N?`users/${N}`:"me",W=de+(O?`?$select=${O.toString()}`:"");if((0,v.cA)()&&(ae=yield s._.getCache(T.j.users,T.j.users.stores.users).getValue(N||"me"),ae&&(0,v.PD)()>Date.now()-ae.timeCached?(oe=ae.user?JSON.parse(ae.user):null,null!==oe&&O&&O.filter(ne=>!Object.keys(oe).includes(ne)).length>=1&&(oe=null,ae=null)):ae=null),(0,I.HJ)())if(ve=yield(0,I.pc)(N||"me",T.j.photos.stores.users),ve&&(0,I.aC)()>Date.now()-ve.timeCached)K=ve.photo;else if(ve)try{const $=yield E.api(`${de}/photo`).get();$?.["@odata.mediaEtag"]&&$["@odata.mediaEtag"]===ve.eTag?(yield(0,I.r$)(N||"me",T.j.photos.stores.users,ve),K=ve.photo):ve=null}catch($){(0,M.Z)($)&&("ErrorItemNotFound"===$.code||"ImageNotFound"===$.code)&&(yield(0,I.r$)(N||"me",T.j.photos.stores.users,{eTag:null,photo:null}))}if(ve||ae)if(ve){if(!ae)try{const $=yield E.api(W).middlewareOptions((0,c.F)(B)).get();$&&((0,v.cA)()&&(yield s._.getCache(T.j.users,T.j.users.stores.users).putValue(N||"me",{user:JSON.stringify($)})),oe=$)}catch{}}else try{const $=yield(0,I.e_)(E,de,S);$&&((0,I.HJ)()&&(yield(0,I.r$)(N||"me",T.j.photos.stores.users,{eTag:$.eTag,photo:$.photo})),K=$.photo)}catch{}else{let $;const J=E.createBatch();N?(J.get("user",`/users/${N}${O?"?$select="+O.toString():""}`,B),J.get("photo",`users/${N}/photo/$value`,S)):(J.get("user","me",B),J.get("photo","me/photo/$value",S));const ne=yield J.executeAll(),G=ne.get("photo");G&&($=G.headers.ETag,K=G.content);const ue=ne.get("user");ue&&(oe=ue.content),(0,v.cA)()&&(yield s._.getCache(T.j.users,T.j.users.stores.users).putValue(N||"me",{user:JSON.stringify(oe)})),(0,I.HJ)()&&(yield(0,I.r$)(N||"me",T.j.photos.stores.users,{eTag:$,photo:K}))}return oe&&(oe.personImage=K),oe})},6199:(at,ge,d)=>{d.d(ge,{Z:()=>s});const s=c=>c.statusCode&&"code"in c&&"body"in c&&c.date&&"message"in c&&"name"in c&&"requestId"in c},8360:(at,ge,d)=>{d.d(ge,{E:()=>I});const s=["image","oneline","twolines","threelines","fourlines"],I=(v,T="twolines")=>(v=>"string"==typeof v&&s.includes(v))(v)?v:T},3601:(at,ge,d)=>{d.d(ge,{E:()=>oe});var s=d(5204),c=d(4632),I=d(2618),v=d(1859),T=d(2146);const M=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),_=new Map,b=new Map;let E=null;const N=I.DI.createInterface(ve=>ve.cachedCallback(ae=>(null===E&&(E=new V(null,ae)),E))),O=Object.freeze({tagFor:ve=>b.get(ve),responsibleFor:ve=>ve.$$designSystem$$||I.DI.findResponsibleContainer(ve).get(N),getOrCreate(ve){if(!ve)return null===E&&(E=I.DI.getOrCreateDOMContainer().get(N)),E;const ae=ve.$$designSystem$$;if(ae)return ae;const de=I.DI.getOrCreateDOMContainer(ve);if(de.has(N,!1))return de.get(N);{const W=new V(ve,de);return de.register(I.cH.instance(N,W)),W}}});class V{constructor(ae,de){this.owner=ae,this.container=de,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>M.definitionCallbackOnly,null!==ae&&(ae.$$designSystem$$=this)}withPrefix(ae){return this.prefix=ae,this}withShadowRootMode(ae){return this.shadowRootMode=ae,this}withElementDisambiguation(ae){return this.disambiguate=ae,this}withDesignTokenRoot(ae){return this.designTokenRoot=ae,this}register(...ae){const de=this.container,W=[],$=this.disambiguate,J=this.shadowRootMode,ne={elementPrefix:this.prefix,tryDefineElement(G,ue,q){const F=function le(ve,ae,de){return"string"==typeof ve?{name:ve,type:ae,callback:de}:ve}(G,ue,q),{name:P,callback:ee,baseClass:Z}=F;let{type:me}=F,ze=P,Ue=_.get(ze),it=!0;for(;Ue;){const Me=$(ze,me,Ue);switch(Me){case M.ignoreDuplicate:return;case M.definitionCallbackOnly:it=!1,Ue=void 0;break;default:ze=Me,Ue=_.get(ze)}}it&&((b.has(me)||me===c.g)&&(me=class extends me{}),_.set(ze,me),b.set(me,ze),Z&&b.set(Z,ze)),W.push(new B(de,ze,me,J,ee,it))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&v.G.registerRoot(this.designTokenRoot)),de.registerWithContext(ne,...ae);for(const G of W)G.callback(G),G.willDefine&&null!==G.definition&&G.definition.define();return this}}class B{constructor(ae,de,W,$,J,ne){this.container=ae,this.name=de,this.type=W,this.shadowRootMode=$,this.callback=J,this.willDefine=ne,this.definition=null}definePresentation(ae){T.E.define(this.name,ae,this.container)}defineElement(ae){this.definition=new s.I(this.type,Object.assign(Object.assign({},ae),{name:this.name}))}tagFor(ae){return O.tagFor(ae)}}const K=function S(ve){return O.getOrCreate(ve).withPrefix("fluent")}(),oe=(...ve)=>{if(ve?.length)for(const ae of ve)K.register(ae())}},2710:(at,ge,d)=>{d.d(ge,{A:()=>c,r:()=>I});var s=d(8324),c=function(v){return v[v.ArrowDown=0]="ArrowDown",v[v.TeamSeparator=1]="TeamSeparator",v[v.Search=2]="Search",v[v.SkypeArrow=3]="SkypeArrow",v[v.SmallEmail=4]="SmallEmail",v[v.SmallEmailHovered=5]="SmallEmailHovered",v[v.SmallChat=6]="SmallChat",v[v.SmallChatHovered=7]="SmallChatHovered",v[v.Video=8]="Video",v[v.VideoHovered=9]="VideoHovered",v[v.ExpandDown=10]="ExpandDown",v[v.Overview=11]="Overview",v[v.Send=12]="Send",v[v.Contact=13]="Contact",v[v.Copy=14]="Copy",v[v.Phone=15]="Phone",v[v.CellPhone=16]="CellPhone",v[v.Chat=17]="Chat",v[v.Call=18]="Call",v[v.CallHovered=19]="CallHovered",v[v.Confirmation=20]="Confirmation",v[v.Department=21]="Department",v[v.Dot=22]="Dot",v[v.Email=23]="Email",v[v.OfficeLocation=24]="OfficeLocation",v[v.Person=25]="Person",v[v.Messages=26]="Messages",v[v.Organization=27]="Organization",v[v.ExpandRight=28]="ExpandRight",v[v.Profile=29]="Profile",v[v.Birthday=30]="Birthday",v[v.File=31]="File",v[v.Files=32]="Files",v[v.Back=33]="Back",v[v.Close=34]="Close",v[v.Upload=35]="Upload",v[v.FileCloud=36]="FileCloud",v[v.DragFile=37]="DragFile",v[v.Cancel=38]="Cancel",v[v.CheckMark=39]="CheckMark",v[v.Radio=40]="Radio",v[v.Success=41]="Success",v[v.Fail=42]="Fail",v[v.SelectAccount=43]="SelectAccount",v[v.News=44]="News",v[v.DoubleBookmark=45]="DoubleBookmark",v[v.ChevronLeft=46]="ChevronLeft",v[v.ChevronRight=47]="ChevronRight",v[v.Event=48]="Event",v[v.BookOpen=49]="BookOpen",v[v.FileOuter=50]="FileOuter",v[v.BookQuestion=51]="BookQuestion",v[v.Globe=52]="Globe",v[v.Delete=53]="Delete",v[v.Add=54]="Add",v[v.Calendar=55]="Calendar",v[v.Planner=56]="Planner",v[v.Milestone=57]="Milestone",v[v.PersonAdd=58]="PersonAdd",v[v.PresenceAvailable=59]="PresenceAvailable",v[v.PresenceOofAvailable=60]="PresenceOofAvailable",v[v.PresenceBusy=61]="PresenceBusy",v[v.PresenceOofBusy=62]="PresenceOofBusy",v[v.PresenceDnd=63]="PresenceDnd",v[v.PresenceOofDnd=64]="PresenceOofDnd",v[v.PresenceAway=65]="PresenceAway",v[v.PresenceOofAway=66]="PresenceOofAway",v[v.PresenceOffline=67]="PresenceOffline",v[v.PresenceStatusUnknown=68]="PresenceStatusUnknown",v}(c||{});const I=(v,T)=>{switch(v){case c.ArrowDown:return s.qy`
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L2.46447 5.46447H6H9.53553L6 9Z" />
        </svg>
      `;case c.TeamSeparator:return s.qy`
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.70711 5L1.49999 9.20711L0.792886 8.50001L4.29289 5L0.792887 1.49999L1.49999 0.792885L5.70711 5Z"
            fill=${T}
          />
        </svg>
      `;case c.Search:return s.qy`
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.30887 8.01596C6.53903 8.63179 5.56252 9.00004 4.5 9.00004C2.01472 9.00004 0 6.98531 0 4.50002C0 2.01473 2.01472 0 4.5 0C6.98528 0 9 2.01473 9 4.50002C9 5.56252 8.63177 6.53901 8.01597 7.30885L11.8536 11.1464C12.0488 11.3417 12.0488 11.6583 11.8536 11.8536C11.6583 12.0488 11.3417 12.0488 11.1464 11.8536L7.30887 8.01596ZM8 4.50002C8 2.56701 6.433 1 4.5 1C2.567 1 1 2.56701 1 4.50002C1 6.43302 2.567 8.00003 4.5 8.00003C6.433 8.00003 8 6.43302 8 4.50002Z" fill="currentColor"/>
        </svg>`;case c.SkypeArrow:return s.qy`
        <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.95184 0.480534C4.23385 0.10452 4.70926 -0.0724722 5.1685 0.0275755C5.62775 0.127623 5.98645 0.486329 6.0865 0.945575C6.18655 1.40482 6.00956 1.88023 5.63354 2.16224L4.07196 3.72623H10.7988C11.4622 3.72623 12 4.26403 12 4.92744C12 5.59086 11.4622 6.12866 10.7988 6.12866H4.07196L5.63114 7.68784C6.0955 8.15225 6.0955 8.90515 5.63114 9.36955C5.51655 9.48381 5.38119 9.57514 5.23234 9.63862C5.09341 9.69857 4.94399 9.73042 4.79269 9.73232C4.63498 9.73233 4.4789 9.70046 4.33382 9.63862C4.18765 9.57669 4.05593 9.48507 3.94703 9.36955L0.343377 5.7659C-0.114459 5.29881 -0.114459 4.55128 0.343377 4.08419L3.95184 0.480534Z"
            fill="#B4009E"
          />
        </svg>
      `;case c.SmallEmail:return s.qy`
        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="filled" d="M16 3.373V10.5C16 11.8807 14.8807 13 13.5 13H2.5C1.11929 13 -7.62939e-05 11.8807 -7.62939e-05 10.5V3.373L7.74649 7.93097C7.90297 8.02301 8.09704 8.02301 8.25351 7.93097L16 3.373ZM13.5 0C14.7871 0 15.847 0.972604 15.9848 2.22293L8 6.91991L0.0151832 2.22293C0.15304 0.972604 1.21294 0 2.5 0H13.5Z" fill="currentColor"/>
          <path class="regular" d="M13.608 0.833496C14.9887 0.833496 16.108 1.95278 16.108 3.3335V11.3335C16.108 12.7142 14.9887 13.8335 13.608 13.8335H2.60803C1.22732 13.8335 0.108032 12.7142 0.108032 11.3335V3.3335C0.108032 1.95278 1.22732 0.833496 2.60803 0.833496H13.608ZM15.108 4.7945L8.36154 8.76446C8.23115 8.84117 8.07464 8.85395 7.93554 8.80281L7.85452 8.76446L1.10803 4.7965V11.3335C1.10803 12.1619 1.77961 12.8335 2.60803 12.8335H13.608C14.4365 12.8335 15.108 12.1619 15.108 11.3335V4.7945ZM13.608 1.8335H2.60803C1.77961 1.8335 1.10803 2.50507 1.10803 3.3335V3.6355L8.10803 7.75341L15.108 3.6345V3.3335C15.108 2.50507 14.4365 1.8335 13.608 1.8335Z" fill="currentColor"/>
        </svg>
      `;case c.SmallChat:return s.qy`
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="filled" d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C6.72679 16 5.49591 15.7018 4.38669 15.1393L4.266 15.075L0.621091 15.9851C0.311269 16.0625 0.0262241 15.8369 0.00130987 15.5438L0.00114131 15.4624L0.0149329 15.3787L0.925 11.735L0.86169 11.6153C0.406602 10.7186 0.124331 9.74223 0.0327466 8.72826L0.00737596 8.34634L0 8C0 3.58172 3.58172 0 8 0ZM8.5 9H5.5L5.41012 9.00806C5.17688 9.05039 5 9.25454 5 9.5C5 9.74546 5.17688 9.94961 5.41012 9.99194L5.5 10H8.5L8.58988 9.99194C8.82312 9.94961 9 9.74546 9 9.5C9 9.25454 8.82312 9.05039 8.58988 9.00806L8.5 9ZM10.5 6H5.5L5.41012 6.00806C5.17688 6.05039 5 6.25454 5 6.5C5 6.74546 5.17688 6.94961 5.41012 6.99194L5.5 7H10.5L10.5899 6.99194C10.8231 6.94961 11 6.74546 11 6.5C11 6.25454 10.8231 6.05039 10.5899 6.00806L10.5 6Z" fill="currentColor"/>
          <path class="regular" d="M8.38599 0.833496C12.8043 0.833496 16.386 4.41522 16.386 8.8335C16.386 13.2518 12.8043 16.8335 8.38599 16.8335C7.11277 16.8335 5.8819 16.5353 4.77267 15.9728L4.65199 15.9085L1.00708 16.8186C0.697255 16.8959 0.41221 16.6704 0.387296 16.3773L0.387128 16.2959L0.400919 16.2122L1.31099 12.5685L1.24768 12.4488C0.792589 11.5521 0.510317 10.5757 0.418733 9.56176L0.393362 9.17984L0.385986 8.8335C0.385986 4.41522 3.96771 0.833496 8.38599 0.833496ZM8.38599 1.8335C4.51999 1.8335 1.38599 4.9675 1.38599 8.8335C1.38599 10.0505 1.69653 11.2213 2.27951 12.2584C2.32645 12.3419 2.34809 12.4365 2.34291 12.5308L2.32873 12.6247L1.57299 15.6455L4.59703 14.8918C4.65892 14.8764 4.72261 14.8731 4.78472 14.8814L4.87629 14.9026L4.963 14.941C5.9996 15.5233 7.16969 15.8335 8.38599 15.8335C12.252 15.8335 15.386 12.6995 15.386 8.8335C15.386 4.9675 12.252 1.8335 8.38599 1.8335ZM8.88599 9.8335C9.16213 9.8335 9.38599 10.0574 9.38599 10.3335C9.38599 10.579 9.20911 10.7831 8.97586 10.8254L8.88599 10.8335H5.88599C5.60984 10.8335 5.38599 10.6096 5.38599 10.3335C5.38599 10.088 5.56286 9.88389 5.79611 9.84155L5.88599 9.8335H8.88599ZM10.886 6.8335C11.1621 6.8335 11.386 7.05735 11.386 7.3335C11.386 7.57896 11.2091 7.7831 10.9759 7.82544L10.886 7.8335L5.88599 7.8335C5.60984 7.8335 5.38599 7.60964 5.38599 7.3335C5.38599 7.08804 5.56286 6.88389 5.79611 6.84155L5.88599 6.8335L10.886 6.8335Z" fill="currentColor"/>
        </svg>
      `;case c.Video:return s.qy`
        <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="filled" d="M11 2.5C11 1.11929 9.88071 0 8.5 0H2.5C1.11929 0 0 1.11929 0 2.5V9.5C0 10.8807 1.11929 12 2.5 12H8.5C9.88071 12 11 10.8807 11 9.5V2.5ZM12 3.93082V8.08149L14.7642 10.4319C15.2512 10.8461 16 10.4999 16 9.86055V2.19315C16 1.55685 15.2575 1.20962 14.7692 1.61756L12 3.93082Z" fill="currentColor"/>
          <path class="regular" d="M2.72095 0.833496C1.34024 0.833496 0.220947 1.95278 0.220947 3.3335V10.3335C0.220947 11.7142 1.34024 12.8335 2.72095 12.8335H9.72095C11.1017 12.8335 12.2209 11.7142 12.2209 10.3335V9.33348L14.6209 11.1335C15.2802 11.6279 16.2209 11.1575 16.2209 10.3335V3.33348C16.2209 2.50944 15.2802 2.03905 14.6209 2.53348L12.2209 4.33348V3.3335C12.2209 1.95278 11.1017 0.833496 9.72095 0.833496H2.72095ZM12.2209 5.58348L15.2209 3.33348V10.3335L12.2209 8.08348V5.58348ZM11.2209 3.3335V10.3335C11.2209 11.1619 10.5494 11.8335 9.72095 11.8335H2.72095C1.89252 11.8335 1.22095 11.1619 1.22095 10.3335V3.3335C1.22095 2.50507 1.89252 1.8335 2.72095 1.8335H9.72095C10.5494 1.8335 11.2209 2.50507 11.2209 3.3335Z" fill="currentColor"/>
        </svg>
      `;case c.ExpandDown:return s.qy`
        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 1L7.5 7L1 1" stroke="currentColor" />
        </svg>
      `;case c.Overview:return s.qy`
        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.5 10.5C2.67157 10.5 2 9.82843 2 9V4C2 3.17157 2.67157 2.5 3.5 2.5H12.5C13.3284 2.5 14 3.17157 14 4V9C14 9.82843 13.3284 10.5 12.5 10.5H3.5ZM3.5 3.5C3.22386 3.5 3 3.72386 3 4V5.5H13V4C13 3.72386 12.7761 3.5 12.5 3.5H3.5ZM5 6.5H3V9C3 9.27614 3.22386 9.5 3.5 9.5H5V6.5ZM6 9.5H12.5C12.7761 9.5 13 9.27614 13 9V6.5H6V9.5ZM0 3C0 1.61929 1.11929 0.5 2.5 0.5H13.5C14.8807 0.5 16 1.61929 16 3V10C16 11.3807 14.8807 12.5 13.5 12.5H2.5C1.11929 12.5 0 11.3807 0 10V3ZM2.5 1.5C1.67157 1.5 1 2.17157 1 3V10C1 10.8284 1.67157 11.5 2.5 11.5H13.5C14.3284 11.5 15 10.8284 15 10V3C15 2.17157 14.3284 1.5 13.5 1.5H2.5Z" fill="#717171"/>
        </svg>
      `;case c.Send:return s.qy`
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.27144 8.99999L1.72572 2.45387C1.54854 1.99826 1.9928 1.56256 2.43227 1.71743L2.50153 1.74688L16.0015 8.49688C16.3902 8.69122 16.4145 9.22336 16.0744 9.45992L16.0015 9.50311L2.50153 16.2531C2.0643 16.4717 1.58932 16.0697 1.70282 15.6178L1.72572 15.5461L4.27144 8.99999L1.72572 2.45387L4.27144 8.99999ZM3.3028 3.4053L5.25954 8.43705L10.2302 8.43749C10.515 8.43749 10.7503 8.64911 10.7876 8.92367L10.7927 8.99999C10.7927 9.28476 10.5811 9.52011 10.3065 9.55736L10.2302 9.56249L5.25954 9.56205L3.3028 14.5947L14.4922 8.99999L3.3028 3.4053Z"
          />
        </svg>
      `;case c.Contact:return s.qy`
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5ZM2 7.69879C2 7.17479 2.42479 6.75 2.94879 6.75H6.05121C6.57521 6.75 7 7.17479 7 7.69879C7 8.54603 6.42338 9.28454 5.60144 9.49003L5.54243 9.50478C4.85801 9.67589 4.14199 9.67589 3.45757 9.50478L3.39856 9.49003C2.57661 9.28454 2 8.54603 2 7.69879ZM9.5 4C9.22386 4 9 4.22386 9 4.5C9 4.77614 9.22386 5 9.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H9.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8H12.5C12.7761 8 13 7.77614 13 7.5C13 7.22386 12.7761 7 12.5 7H9.5ZM0 1.75C0 0.783502 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V10.25C16 11.2165 15.2165 12 14.25 12H1.75C0.783501 12 0 11.2165 0 10.25V1.75ZM1.75 1C1.33579 1 1 1.33579 1 1.75V10.25C1 10.6642 1.33579 11 1.75 11H14.25C14.6642 11 15 10.6642 15 10.25V1.75C15 1.33579 14.6642 1 14.25 1H1.75Z" fill="#717171"/>
        </svg>
      `;case c.Call:return s.qy`
        <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="filled" d="M3.98706 1.06589C4.89545 0.792081 5.86254 1.19479 6.31418 2.01224L6.38841 2.16075L7.04987 3.63213C7.46246 4.54992 7.28209 5.61908 6.60754 6.3496L6.47529 6.48248L5.43194 7.45541C5.24417 7.63298 5.38512 8.32181 6.06527 9.49986C6.67716 10.5597 7.17487 11.0552 7.41986 11.0823L7.4628 11.082L7.5158 11.0716L9.56651 10.4446C10.1332 10.2713 10.7438 10.4487 11.1298 10.8865L11.2215 11.0014L12.5781 12.8815C13.1299 13.6462 13.0689 14.6842 12.4533 15.378L12.3314 15.5039L11.7886 16.018C10.7948 16.9592 9.34348 17.2346 8.07389 16.7231C6.13867 15.9433 4.38077 14.1607 2.78368 11.3945C1.18323 8.62242 0.519004 6.20438 0.815977 4.13565C0.99977 2.85539 1.87301 1.78674 3.07748 1.3462L3.27036 1.28192L3.98706 1.06589Z" fill="currentColor"/>
          <path class="regular" d="M3.9292 0.399388L3.2125 0.615419C1.90898 1.00834 0.951582 2.1215 0.758116 3.46915C0.461142 5.53787 1.12537 7.95591 2.72582 10.728C4.32291 13.4942 6.0808 15.2768 8.01603 16.0565C9.28562 16.5681 10.7369 16.2927 11.7308 15.3515L12.2736 14.8374C13.0011 14.1485 13.1065 13.0275 12.5202 12.215L11.1636 10.3349C10.788 9.81423 10.1226 9.59039 9.50865 9.7781L7.45794 10.4051L7.40494 10.4154C7.17877 10.4485 6.65754 9.95942 6.00741 8.83335C5.32726 7.65531 5.1863 6.96648 5.37408 6.7889L6.41743 5.81598C7.19937 5.08681 7.43039 3.94078 6.99201 2.96562L6.33055 1.49424C5.91866 0.578005 4.89102 0.109471 3.9292 0.399388ZM5.41847 1.90427L6.07993 3.37564C6.34277 3.96031 6.20426 4.64744 5.73543 5.08463L4.68953 6.05994C4.02044 6.69268 4.24206 7.77567 5.14138 9.33335C5.98759 10.799 6.75958 11.5233 7.58908 11.3977L7.71341 11.3711L9.80102 10.7344C10.0057 10.6718 10.2275 10.7464 10.3527 10.92L11.7093 12.8001C12.0024 13.2064 11.9497 13.7669 11.586 14.1113L11.0432 14.6254C10.3333 15.2977 9.29663 15.4944 8.38977 15.129C6.6917 14.4448 5.08689 12.8175 3.59185 10.228C2.09375 7.63319 1.48745 5.42604 1.74797 3.61125C1.88616 2.64864 2.57001 1.85352 3.5011 1.57287L4.2178 1.35684C4.69871 1.21188 5.21253 1.44615 5.41847 1.90427Z" fill="currentColor"/>
        </svg>
      `;case c.Confirmation:return s.qy`
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.03212 13.9072L3.56056 10.0017C3.28538 9.69214 2.81132 9.66425 2.50174 9.93944C2.19215 10.2146 2.16426 10.6887 2.43945 10.9983L6.43945 15.4983C6.72614 15.8208 7.2252 15.8355 7.53034 15.5303L18.0303 5.03033C18.3232 4.73744 18.3232 4.26256 18.0303 3.96967C17.7374 3.67678 17.2626 3.67678 16.9697 3.96967L7.03212 13.9072Z" fill="#009E00"/>
      </svg>
      `;case c.Copy:return s.qy`
        <svg width="13" height="14" viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.625 5.50293V14H3.875V11.375H0.375V0H6.24707L8.87207 2.625H9.74707L12.625 5.50293ZM10 5.25H11.1279L10 4.12207V5.25ZM3.875 2.625H7.62793L5.87793 0.875H1.25V10.5H3.875V2.625ZM11.75 6.125H9.125V3.5H4.75V13.125H11.75V6.125Z"
          />
        </svg>
      `;case c.Phone:return s.qy`
        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" fill="none">
            <path d="M1607 1213q44 0 84 16t72 48l220 220q31 31 47 71t17 85q0 44-16 84t-48 72l-14 14q-54 54-99 96t-94 70-109 44-143 15q-125 0-257-39t-262-108-256-164-237-207-206-238-162-256T38 775 0 523q0-83 14-142t43-108 70-93 96-99l16-16q31-31 71-48t85-17q44 0 84 17t72 48l220 220q31 31 47 71t17 85q0 44-15 78t-37 63-48 51-49 45-37 44-15 49q0 38 27 65l551 551q27 27 65 27 26 0 48-15t45-37 45-48 51-49 62-37 79-15zm-83 707q72 0 120-13t88-39 76-64 85-86q27-27 27-65 0-18-14-42t-38-52-51-55-56-54-51-47-37-35q-27-27-66-27-26 0-48 15t-44 37-45 48-52 49-62 37-79 15q-44 0-84-16t-72-48L570 927q-31-31-47-71t-17-85q0-44 15-78t37-63 48-51 49-46 37-44 15-48q0-39-27-66-13-13-34-36t-47-51-54-56-56-52-51-37-43-15q-38 0-65 27l-85 85q-37 37-64 76t-40 87-14 120q0 112 36 231t101 238 153 234 192 219 219 190 234 150 236 99 226 36z" fill="${T}"></path>
        </svg>
      `;case c.CellPhone:return s.qy`
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12C3.72386 12 3.5 12.2239 3.5 12.5C3.5 12.7761 3.72386 13 4 13H6C6.27614 13 6.5 12.7761 6.5 12.5C6.5 12.2239 6.27614 12 6 12H4ZM2 0C0.89543 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H8C9.10457 16 10 15.1046 10 14V2C10 0.89543 9.10457 0 8 0H2ZM1 2C1 1.44772 1.44772 1 2 1H8C8.55228 1 9 1.44772 9 2V14C9 14.5523 8.55228 15 8 15H2C1.44772 15 1 14.5523 1 14V2Z" fill="#717171"/>
        </svg>
      `;case c.Chat:return s.qy`
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C6.72679 16 5.49591 15.7018 4.38669 15.1393L4.266 15.075L0.621091 15.9851C0.311269 16.0625 0.0262241 15.8369 0.00130987 15.5438L0.00114131 15.4624L0.0149329 15.3787L0.925 11.735L0.86169 11.6153C0.406602 10.7186 0.124331 9.74223 0.0327466 8.72826L0.00737596 8.34634L0 8C0 3.58172 3.58172 0 8 0ZM8 1C4.13401 1 1 4.13401 1 8C1 9.21704 1.31054 10.3878 1.89352 11.4249C1.94046 11.5084 1.9621 11.603 1.95692 11.6973L1.94274 11.7912L1.187 14.812L4.21104 14.0583C4.27294 14.0429 4.33662 14.0396 4.39873 14.0479L4.4903 14.0691L4.57701 14.1075C5.61362 14.6898 6.7837 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM8.5 9C8.77614 9 9 9.22386 9 9.5C9 9.74546 8.82312 9.94961 8.58988 9.99194L8.5 10H5.5C5.22386 10 5 9.77614 5 9.5C5 9.25454 5.17688 9.05039 5.41012 9.00806L5.5 9H8.5ZM10.5 6C10.7761 6 11 6.22386 11 6.5C11 6.74546 10.8231 6.94961 10.5899 6.99194L10.5 7L5.5 7C5.22386 7 5 6.77614 5 6.5C5 6.25454 5.17688 6.05039 5.41012 6.00806L5.5 6L10.5 6Z" fill="#717171"/>
        </svg>
      `;case c.Department:return s.qy`
        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 1.5V3H2C0.895431 3 0 3.89543 0 5V12C0 13.1046 0.895432 14 2 14H14.0026C15.1071 14 16.0026 13.1046 16.0026 12V5C16.0026 3.89543 15.1071 3 14.0026 3H12V1.5C12 0.671573 11.3284 0 10.5 0H5.5C4.67157 0 4 0.671573 4 1.5ZM5.5 1H10.5C10.7761 1 11 1.22386 11 1.5V3H5V1.5C5 1.22386 5.22386 1 5.5 1ZM2 4H14.0026C14.5549 4 15.0026 4.44772 15.0026 5V7H12L12 6.50073C12 6.22459 11.7761 6.00073 11.5 6.00073C11.2239 6.00073 11 6.22459 11 6.50074L11 7H5V6.50073C5 6.22459 4.77614 6.00073 4.5 6.00073C4.22386 6.00073 4 6.22459 4 6.50073V7H1V5C1 4.44772 1.44772 4 2 4ZM11 8L11 8.5C11 8.77615 11.2239 9 11.5 9C11.7762 9 12 8.77614 12 8.5L12 8H15.0026V12C15.0026 12.5523 14.5549 13 14.0026 13H2C1.44772 13 1 12.5523 1 12V8H4V8.5C4 8.77614 4.22386 9 4.5 9C4.77614 9 5 8.77614 5 8.5V8H11Z" fill="#717171"/>
        </svg>
      `;case c.Dot:return s.qy`
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.25 10C6.25 10.6904 5.69036 11.25 5 11.25C4.30964 11.25 3.75 10.6904 3.75 10C3.75 9.30964 4.30964 8.75 5 8.75C5.69036 8.75 6.25 9.30964 6.25 10ZM11.25 10C11.25 10.6904 10.6904 11.25 10 11.25C9.30964 11.25 8.75 10.6904 8.75 10C8.75 9.30964 9.30964 8.75 10 8.75C10.6904 8.75 11.25 9.30964 11.25 10ZM15 11.25C15.6904 11.25 16.25 10.6904 16.25 10C16.25 9.30964 15.6904 8.75 15 8.75C14.3096 8.75 13.75 9.30964 13.75 10C13.75 10.6904 14.3096 11.25 15 11.25Z" fill="#242424"/>
        </svg>
        `;case c.Email:return s.qy`
        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 0C14.8807 0 16 1.11929 16 2.5V10.5C16 11.8807 14.8807 13 13.5 13H2.5C1.11929 13 0 11.8807 0 10.5V2.5C0 1.11929 1.11929 0 2.5 0H13.5ZM15 3.961L8.25351 7.93097C8.12311 8.00767 7.96661 8.02045 7.82751 7.96932L7.74649 7.93097L1 3.963V10.5C1 11.3284 1.67157 12 2.5 12H13.5C14.3284 12 15 11.3284 15 10.5V3.961ZM13.5 1H2.5C1.67157 1 1 1.67157 1 2.5V2.802L8 6.91991L15 2.801V2.5C15 1.67157 14.3284 1 13.5 1Z" fill="#717171"/>
        </svg>
      `;case c.OfficeLocation:return s.qy`
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>Location icon</title>
          <path d="M10 7C10 8.65685 8.65685 10 7 10C5.34315 10 4 8.65685 4 7C4 5.34315 5.34315 4 7 4C8.65685 4 10 5.34315 10 7ZM9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9C8.10457 9 9 8.10457 9 7ZM11.9497 11.955C14.6834 9.2201 14.6834 4.78601 11.9497 2.05115C9.21608 -0.683716 4.78392 -0.683716 2.05025 2.05115C-0.683418 4.78601 -0.683418 9.2201 2.05025 11.955L3.57128 13.4538L5.61408 15.4389L5.74691 15.5567C6.52168 16.1847 7.65623 16.1455 8.38611 15.4391L10.8223 13.0691L11.9497 11.955ZM2.75499 2.75619C5.09944 0.410715 8.90055 0.410715 11.245 2.75619C13.5294 5.04153 13.5879 8.71039 11.4207 11.0667L11.245 11.2499L9.92371 12.5539L7.69315 14.7225L7.60016 14.8021C7.24594 15.0699 6.7543 15.0698 6.40012 14.802L6.30713 14.7224L3.3263 11.817L2.75499 11.2499L2.57927 11.0667C0.412077 8.71039 0.47065 5.04153 2.75499 2.75619Z" fill="#717171"/>
        </svg>
      `;case c.Birthday:return s.qy`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.81357 0.667333C6.07581 0.320242 6.48151 0 7 0C7.51849 0 7.92419 0.320242 8.18643 0.667333C8.45471 1.0224 8.63508 1.47991 8.69561 1.93392C8.75552 2.3832 8.70532 2.89341 8.42852 3.3086C8.134 3.75039 7.63965 4 7 4C6.36035 4 5.866 3.75039 5.57148 3.3086C5.29468 2.89341 5.24448 2.3832 5.30439 1.93392C5.36492 1.47991 5.54529 1.0224 5.81357 0.667333ZM6.40353 2.7539C6.484 2.87461 6.63965 3 7 3C7.36035 3 7.516 2.87461 7.59647 2.7539C7.69468 2.60659 7.74448 2.3668 7.70439 2.06608C7.66492 1.77009 7.54529 1.4776 7.38857 1.27017C7.22581 1.05476 7.08151 1 7 1C6.91849 1 6.77419 1.05476 6.61143 1.27017C6.45471 1.4776 6.33508 1.77009 6.29561 2.06608C6.25552 2.3668 6.30532 2.60659 6.40353 2.7539ZM1 7C1 5.89543 1.89543 5 3 5H11C12.1046 5 13 5.89543 13 7V12H13.5C13.7761 12 14 12.2239 14 12.5C14 12.7761 13.7761 13 13.5 13H0.5C0.223858 13 0 12.7761 0 12.5C0 12.2239 0.223858 12 0.5 12H1V7ZM2 12H12V9.01931C11.9109 9.10285 11.8174 9.18842 11.7208 9.27412C11.4006 9.55804 11.0346 9.85319 10.6715 10.0802C10.3274 10.2953 9.90815 10.5 9.5 10.5C8.77182 10.5 8.30806 9.98986 8.00471 9.65617C7.9834 9.63273 7.96289 9.61016 7.94312 9.58869C7.5876 9.20261 7.35769 9 7 9C6.64231 9 6.4124 9.20261 6.05688 9.58869C6.03711 9.61016 6.0166 9.63273 5.99529 9.65617C5.69194 9.98986 5.22818 10.5 4.5 10.5C4.10587 10.5 3.69263 10.2897 3.35907 10.0789C3.00198 9.85313 2.63516 9.55951 2.31117 9.27666C2.20329 9.18247 2.09896 9.08844 2 8.9971V12ZM2 7.59993C2.05039 7.65198 2.11363 7.71652 2.1873 7.7902C2.38843 7.99132 2.6649 8.25801 2.96883 8.52334C3.27484 8.79049 3.59802 9.04687 3.89343 9.23362C4.21237 9.43525 4.41413 9.5 4.5 9.5C4.75817 9.5 4.93171 9.33433 5.32125 8.91131L5.32447 8.90781C5.65956 8.5439 6.16039 8 7 8C7.83961 8 8.34044 8.5439 8.67553 8.90781L8.67875 8.91131C9.06828 9.33433 9.24183 9.5 9.5 9.5C9.6106 9.5 9.82569 9.42967 10.1414 9.23229C10.4381 9.04681 10.7573 8.79196 11.0573 8.52588C11.3554 8.26163 11.6238 7.99594 11.8184 7.7955C11.89 7.72165 11.9513 7.65703 12 7.60506V7C12 6.44772 11.5523 6 11 6H3C2.44772 6 2 6.44772 2 7V7.59993Z" fill="#717171"/>
        </svg>
      `;case c.Person:return s.qy`
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0C4.79086 0 3 1.79086 3 4C3 6.20914 4.79086 8 7 8C9.20914 8 11 6.20914 11 4C11 1.79086 9.20914 0 7 0ZM4 4C4 2.34315 5.34315 1 7 1C8.65685 1 10 2.34315 10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4ZM2.00873 9C0.903151 9 0 9.88687 0 11C0 12.6912 0.83281 13.9663 2.13499 14.7966C3.41697 15.614 5.14526 16 7 16C8.85474 16 10.583 15.614 11.865 14.7966C13.1672 13.9663 14 12.6912 14 11C14 9.89557 13.1045 9.00001 12 9.00001L2.00873 9ZM1 11C1 10.4467 1.44786 10 2.00873 10L12 10C12.5522 10 13 10.4478 13 11C13 12.3088 12.3777 13.2837 11.3274 13.9534C10.2568 14.636 8.73511 15 7 15C5.26489 15 3.74318 14.636 2.67262 13.9534C1.62226 13.2837 1 12.3088 1 11Z" fill="#717171"/>
        </svg>
      `;case c.Messages:return s.qy`
        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 0C14.8807 0 16 1.11929 16 2.5V10.5C16 11.8807 14.8807 13 13.5 13H2.5C1.11929 13 0 11.8807 0 10.5V2.5C0 1.11929 1.11929 0 2.5 0H13.5ZM15 3.961L8.25351 7.93097C8.12311 8.00767 7.96661 8.02045 7.82751 7.96932L7.74649 7.93097L1 3.963V10.5C1 11.3284 1.67157 12 2.5 12H13.5C14.3284 12 15 11.3284 15 10.5V3.961ZM13.5 1H2.5C1.67157 1 1 1.67157 1 2.5V2.802L8 6.91991L15 2.801V2.5C15 1.67157 14.3284 1 13.5 1Z" fill="#717171"/>
        </svg>
      `;case c.Organization:return s.qy`
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.99992 0C6.34271 0 4.99927 1.34344 4.99927 3.00066C4.99927 4.48754 6.08073 5.72183 7.49999 5.95985V7.5H4.5C3.67157 7.5 3 8.17157 3 9V10.0416C1.5811 10.2799 0.5 11.514 0.5 13.0007C0.5 14.6579 1.84344 16.0013 3.50066 16.0013C5.15787 16.0013 6.50131 14.6579 6.50131 13.0007C6.50131 11.5136 5.41954 10.2791 4 10.0414V9C4 8.72386 4.22386 8.5 4.5 8.5H11.5C11.7761 8.5 12 8.72386 12 9V10.0416C10.5811 10.2799 9.5 11.514 9.5 13.0007C9.5 14.6579 10.8434 16.0013 12.5007 16.0013C14.1579 16.0013 15.5013 14.6579 15.5013 13.0007C15.5013 11.5136 14.4195 10.2791 13 10.0414V9C13 8.17157 12.3284 7.5 11.5 7.5H8.49999V5.95983C9.91918 5.72176 11.0006 4.48749 11.0006 3.00066C11.0006 1.34344 9.65714 0 7.99992 0ZM5.99927 3.00066C5.99927 1.89572 6.89499 1 7.99992 1C9.10485 1 10.0006 1.89572 10.0006 3.00066C10.0006 4.10559 9.10485 5.00131 7.99992 5.00131C6.89499 5.00131 5.99927 4.10559 5.99927 3.00066ZM1.5 13.0007C1.5 11.8957 2.39572 11 3.50066 11C4.60559 11 5.50131 11.8957 5.50131 13.0007C5.50131 14.1056 4.60559 15.0013 3.50066 15.0013C2.39572 15.0013 1.5 14.1056 1.5 13.0007ZM12.5007 11C13.6056 11 14.5013 11.8957 14.5013 13.0007C14.5013 14.1056 13.6056 15.0013 12.5007 15.0013C11.3957 15.0013 10.5 14.1056 10.5 13.0007C10.5 11.8957 11.3957 11 12.5007 11Z" fill="#717171"/>
        </svg>
      `;case c.ExpandRight:return s.qy`
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12L6.5 6.5L1 1" stroke="#B8B8B8" stroke-width="2" />
        </svg>
      `;case c.Profile:return s.qy`
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0C4.79086 0 3 1.79086 3 4C3 6.20914 4.79086 8 7 8C9.20914 8 11 6.20914 11 4C11 1.79086 9.20914 0 7 0ZM4 4C4 2.34315 5.34315 1 7 1C8.65685 1 10 2.34315 10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4ZM2.00873 9C0.903151 9 0 9.88687 0 11C0 12.6912 0.83281 13.9663 2.13499 14.7966C3.41697 15.614 5.14526 16 7 16C8.85474 16 10.583 15.614 11.865 14.7966C13.1672 13.9663 14 12.6912 14 11C14 9.89557 13.1045 9.00001 12 9.00001L2.00873 9ZM1 11C1 10.4467 1.44786 10 2.00873 10L12 10C12.5522 10 13 10.4478 13 11C13 12.3088 12.3777 13.2837 11.3274 13.9534C10.2568 14.636 8.73511 15 7 15C5.26489 15 3.74318 14.636 2.67262 13.9534C1.62226 13.2837 1 12.3088 1 11Z" fill="#717171"/>
        </svg>
      `;case c.File:return s.qy`
        <svg width="28" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.64"
            d="M19.613 6.993L13.018 0.421C12.7473 0.15221 12.3815 0.000947397 12 0H1.4C0.628 0 0 0.615 0 1.372V24.642C0 25.391 0.622 26 1.386 26H18.6C19.372 26 20 25.385 20 24.628V7.923C20 7.577 19.86 7.237 19.613 6.993Z"
            fill="#605E5C"
          />
          <path
            d="M19 24.628C19 24.83 18.816 25 18.6 25H1.386C1.173 25 1 24.84 1 24.642V1.372C1 1.17 1.184 1 1.4 1H12V6.6C12 7.372 12.628 8 13.4 8H19V24.628Z"
            fill="white"
          />
          <path d="M18.204 6.99994L13 1.81494V6.59994C13 6.81994 13.18 6.99994 13.4 6.99994H18.204Z" fill="white" />
        </svg>
      `;case c.Files:return s.qy`
        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9956 4.07309V4C14.9956 2.61929 13.8763 1.5 12.4956 1.5H7.66418L6.06391 0.299946C5.80428 0.105247 5.48851 0 5.16399 0H2.5C1.11916 0 -0.000181445 1.11949 2.20615e-08 2.50033L0.0011832 11.4978C0.00135142 12.7772 0.962583 13.8321 2.2023 13.9798C2.2867 13.9945 2.37375 14.0021 2.46289 14.0021H13.1798C13.8981 14.0021 14.5156 13.4929 14.6524 12.7877L16.0097 5.78769C16.1587 5.01967 15.696 4.29703 14.9956 4.07309ZM2.5 1H5.16399C5.27216 1 5.37742 1.03508 5.46396 1.09998L7.19756 2.40002C7.2841 2.46492 7.38936 2.5 7.49753 2.5H12.4956C13.324 2.5 13.9956 3.17157 13.9956 4V4.00214H3.824C3.10596 4.00214 2.48863 4.511 2.35158 5.21583L1.05351 11.8916C1.01941 11.7661 1.0012 11.634 1.00118 11.4976L1 2.5002C0.999891 1.67169 1.6715 1 2.5 1ZM3.33319 5.4067C3.37888 5.17176 3.58465 5.00214 3.824 5.00214H14.5372C14.8515 5.00214 15.0879 5.28874 15.028 5.59732L13.6706 12.5973C13.6251 12.8324 13.4192 13.0021 13.1798 13.0021H2.46289C2.14845 13.0021 1.91206 12.7154 1.97208 12.4067L3.33319 5.4067Z" fill="#717171"/>
        </svg>
      `;case c.Back:return s.qy`
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 8.5H1.95312L8.10156 14.6484L7.39844 15.3516L0.046875 8L7.39844 0.648438L8.10156 1.35156L1.95312 7.5H16V8.5Z"
          />
        </svg>
      `;case c.Close:return s.qy`
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.73838 5.032L9.70337 1.067L8.99638 0.360001L5.03137 4.325L1.06637 0.360001L0.359375 1.067L4.32438 5.032L0.359375 8.997L1.06637 9.704L5.03137 5.739L8.99638 9.704L9.70337 8.997L5.73838 5.032Z" fill="currentColor"/>
        </svg>
     `;case c.Upload:return s.qy`
        <svg class="upload-icon" width="21" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 2C4.08579 2 3.75 2.33579 3.75 2.75C3.75 3.16421 4.08579 3.5 4.5 3.5H15C15.4142 3.5 15.75 3.16421 15.75 2.75C15.75 2.33579 15.4142 2 15 2H4.5ZM10.4963 17.3493C10.4466 17.7154 10.1328 17.9976 9.75311 17.9976C9.3389 17.9976 9.00311 17.6618 9.00311 17.2476L9.00249 7.05856L6.02995 10.026L5.94578 10.0986C5.65202 10.3162 5.23537 10.2917 4.96929 10.0253C4.67661 9.73215 4.67695 9.25728 4.97005 8.96459L9.25962 4.67989C9.33377 4.61512 9.42089 4.56485 9.5169 4.53385L9.59777 4.51072C9.64749 4.50019 9.69837 4.4947 9.74849 4.4947L9.80855 4.49661L9.87781 4.50451L9.99828 4.53462L10.0895 4.57254L10.1259 4.59371L10.2169 4.6523L10.2875 4.71481L14.5303 8.96546L14.6029 9.04964C14.8205 9.34345 14.7959 9.7601 14.5294 10.0261L14.4452 10.0987C14.1514 10.3162 13.7347 10.2917 13.4687 10.0251L10.5025 7.05456L10.5031 17.2476L10.4963 17.3493Z" fill="#ffffff"/>
        </svg>
      `;case c.FileCloud:return s.qy`
        <svg width="16" height="16"  xmlns="http://www.w3.org/2000/svg">
          <path
            d="m8,0c2.8166,0 4.4145,1.9233 4.6469,4.246l0.071,0c1.8127,0 3.2821,1.5119 3.2821,3.377c0,0.0953 -0.0038,0.1897 -0.0114,0.283c-0.322,-0.4017 -0.6967,-0.7591 -1.1138,-1.062c-0.3104,-0.9329 -1.1627,-1.598 -2.1568,-1.598l-0.0711,0c-0.5137,0 -0.9439,-0.3893 -0.9951,-0.9005c-0.2021,-2.0206 -1.5433,-3.3455 -3.6518,-3.3455c-2.1139,0 -3.4489,1.3159 -3.6518,3.3455c-0.0511,0.5112 -0.4813,0.9005 -0.9951,0.9005l-0.071,0c-1.2539,0 -2.2821,1.0579 -2.2821,2.377c0,1.3191 1.0282,2.377 2.2821,2.377l2.6655,0c-0.087,0.323 -0.1466,0.6572 -0.1762,1l-2.4893,0c-1.8127,0 -3.2821,-1.5119 -3.2821,-3.377c0,-1.8029 1.3731,-3.2758 3.102,-3.372l0.2511,-0.005c0.2338,-2.338 1.8303,-4.246 4.6469,-4.246zm3.5,16c2.4853,0 4.5,-2.0147 4.5,-4.5c0,-2.4853 -2.0147,-4.5 -4.5,-4.5c-2.4853,0 -4.5,2.0147 -4.5,4.5c0,2.4853 2.0147,4.5 4.5,4.5zm0,-7c0.2761,0 0.5,0.2239 0.5,0.5l0,1.5l1.5,0c0.2761,0 0.5,0.2239 0.5,0.5c0,0.2761 -0.2239,0.5 -0.5,0.5l-1.5,0l0,1.5c0,0.2761 -0.2239,0.5 -0.5,0.5c-0.2761,0 -0.5,-0.2239 -0.5,-0.5l0,-1.5l-1.5,0c-0.2761,0 -0.5,-0.2239 -0.5,-0.5c0,-0.2761 0.2239,-0.5 0.5,-0.5l1.5,0l0,-1.5c0,-0.2761 0.2239,-0.5 0.5,-0.5z" fill="#0078D4"
          />
        </svg>
      `;case c.DragFile:return s.qy`
        <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m0,1.00189c0,-0.8451 0.983,-1.3091 1.636,-0.772l11.006,9.0622c0.724,0.5964 0.302,1.772 -0.636,1.772l-5.592,0c-0.435,0 -0.849,0.1892 -1.134,0.5185l-3.524,4.0725c-0.606,0.7003 -1.756,0.2717 -1.756,-0.6544l0,-13.9988zm12.006,9.0622l-11.006,-9.0622l0,13.9988l3.524,-4.0724c0.475,-0.5488 1.164,-0.8642 1.89,-0.8642l5.592,0z"
          />
        </svg>
      `;case c.Cancel:return s.qy`
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.588591 0.715694L0.646447 0.646447C0.820013 0.47288 1.08944 0.453595 1.28431 0.588591L1.35355 0.646447L6 5.293L10.6464 0.646447C10.8417 0.451185 11.1583 0.451185 11.3536 0.646447C11.5488 0.841709 11.5488 1.15829 11.3536 1.35355L6.707 6L11.3536 10.6464C11.5271 10.82 11.5464 11.0894 11.4114 11.2843L11.3536 11.3536C11.18 11.5271 10.9106 11.5464 10.7157 11.4114L10.6464 11.3536L6 6.707L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451185 11.1583 0.451185 10.8417 0.646447 10.6464L5.293 6L0.646447 1.35355C0.47288 1.17999 0.453595 0.910563 0.588591 0.715694L0.646447 0.646447L0.588591 0.715694Z" fill="currentColor"/>
        </svg>
     `;case c.Success:return s.qy`
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path fill="#009E00" d="m6.322,12c3.492,0 6.323,-2.6863 6.323,-6c0,-3.3137 -2.831,-6 -6.323,-6c-3.491,0 -6.322,2.6863 -6.322,6c0,3.3137 2.831,6 6.322,6z"/>
          <path fill="white" d="m9.629,3.7509c-0.131,-0.125 -0.31,-0.1952 -0.496,-0.1952c-0.187,0 -0.365,0.0702 -0.497,0.1952l-3.267,3.1l-1.393,-1.3222c-0.177,-0.1695 -0.436,-0.2361 -0.68,-0.1746c-0.243,0.0615 -0.433,0.2418 -0.497,0.4725c-0.065,0.2307 0.005,0.4767 0.184,0.6449l1.807,1.7154c0.019,0.0331 0.041,0.0646 0.066,0.094c0.289,0.2562 0.738,0.2562 1.027,0c0.024,-0.0294 0.047,-0.0609 0.065,-0.0941l3.681,-3.4931c0.275,-0.2603 0.275,-0.6824 0,-0.9428z"/>
        </svg>
      `;case c.CheckMark:return s.qy`
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="filled" d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM13.2197 6.96967L8.75 11.4393L6.78033 9.46967C6.48744 9.17678 6.01256 9.17678 5.71967 9.46967C5.42678 9.76256 5.42678 10.2374 5.71967 10.5303L8.21967 13.0303C8.51256 13.3232 8.98744 13.3232 9.28033 13.0303L14.2803 8.03033C14.5732 7.73744 14.5732 7.26256 14.2803 6.96967C13.9874 6.67678 13.5126 6.67678 13.2197 6.96967Z" fill="currentColor"/>
        <path class="regular" d="M10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="currentColor"/>
      </svg>
      `;case c.Radio:return s.qy`
      <svg width="66" height="20" viewBox="0 0 66 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="#F3F3F3"/>
        <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#636363"/>
        <path d="M36.5596 16H35.1924L33.5107 13.2178C33.1963 12.6982 32.9274 12.3656 32.7041 12.2197C32.4808 12.0693 32.2096 11.9941 31.8906 11.9941H30.7627V16H29.6143V6.19727H32.54C33.3923 6.19727 34.1009 6.42285 34.666 6.87402C35.2357 7.3252 35.5205 7.99056 35.5205 8.87012C35.5205 9.56283 35.3405 10.1439 34.9805 10.6133C34.6204 11.0827 34.126 11.4222 33.4971 11.6318V11.6592C33.7021 11.7822 33.8822 11.9167 34.0371 12.0625C34.1921 12.2083 34.3561 12.4225 34.5293 12.7051L36.5596 16ZM30.7627 7.23633V10.9551H32.3213C32.891 10.9551 33.3649 10.7705 33.7432 10.4014C34.126 10.0322 34.3174 9.55371 34.3174 8.96582C34.3174 8.44173 34.1465 8.02246 33.8047 7.70801C33.4674 7.39355 32.9775 7.23633 32.335 7.23633H30.7627ZM42.8008 16H41.6797V14.9062H41.6523C41.4108 15.3255 41.1123 15.64 40.7568 15.8496C40.4059 16.0592 39.9958 16.1641 39.5264 16.1641C38.8701 16.1641 38.3392 15.9727 37.9336 15.5898C37.528 15.207 37.3252 14.6989 37.3252 14.0654C37.3252 13.4684 37.5303 12.974 37.9404 12.582C38.3506 12.1901 38.9316 11.9395 39.6836 11.8301L41.6797 11.5635V11.4062C41.6797 10.8184 41.543 10.4014 41.2695 10.1553C40.9961 9.90462 40.6315 9.7793 40.1758 9.7793C39.8112 9.7793 39.4603 9.84766 39.123 9.98438C38.7858 10.1211 38.4691 10.3307 38.1729 10.6133L37.5166 9.93652C37.9085 9.55827 38.3255 9.28027 38.7676 9.10254C39.2096 8.9248 39.7018 8.83594 40.2441 8.83594C41.0918 8.83594 41.7298 9.05469 42.1582 9.49219C42.5866 9.92513 42.8008 10.5768 42.8008 11.4473V16ZM41.6797 13.1562V12.459L39.9912 12.6914C39.4762 12.7643 39.0889 12.8942 38.8291 13.0811C38.5693 13.2679 38.4395 13.5618 38.4395 13.9629C38.4395 14.3822 38.5602 14.7035 38.8018 14.9268C39.0479 15.1455 39.3464 15.2549 39.6973 15.2549C40.3034 15.2549 40.7842 15.0566 41.1396 14.6602C41.4997 14.2637 41.6797 13.7624 41.6797 13.1562ZM49.7939 14.8105C49.5342 15.2617 49.2038 15.6012 48.8027 15.8291C48.4062 16.0524 47.9346 16.1641 47.3877 16.1641C46.5081 16.1641 45.804 15.8519 45.2754 15.2275C44.7513 14.5986 44.4893 13.7441 44.4893 12.6641C44.4893 11.5065 44.7809 10.5791 45.3643 9.88184C45.9476 9.18457 46.7246 8.83594 47.6953 8.83594C48.1784 8.83594 48.5931 8.93164 48.9395 9.12305C49.2904 9.3099 49.5752 9.59245 49.7939 9.9707H49.8213V5.63672H50.9424V16H49.8213V14.8105H49.7939ZM45.6377 12.6094C45.6377 13.416 45.8245 14.054 46.1982 14.5234C46.5765 14.9883 47.0824 15.2207 47.7158 15.2207C48.3447 15.2207 48.8529 14.9951 49.2402 14.5439C49.6276 14.0928 49.8213 13.5231 49.8213 12.835V11.8027C49.8213 11.2376 49.6322 10.7591 49.2539 10.3672C48.8802 9.97526 48.4085 9.7793 47.8389 9.7793C47.1553 9.7793 46.6175 10.0299 46.2256 10.5312C45.8337 11.0326 45.6377 11.7253 45.6377 12.6094ZM53.7861 7.3252C53.5583 7.3252 53.3669 7.25 53.2119 7.09961C53.057 6.94466 52.9795 6.75553 52.9795 6.53223C52.9795 6.30892 53.057 6.12207 53.2119 5.97168C53.3669 5.81673 53.5583 5.73926 53.7861 5.73926C54.014 5.73926 54.2054 5.81673 54.3604 5.97168C54.5153 6.12207 54.5928 6.30892 54.5928 6.53223C54.5928 6.75553 54.5153 6.94466 54.3604 7.09961C54.2054 7.25 54.014 7.3252 53.7861 7.3252ZM54.333 16H53.2119V9H54.333V16ZM59.5283 16.1641C58.4938 16.1641 57.6667 15.8382 57.0469 15.1865C56.4316 14.5303 56.124 13.6621 56.124 12.582C56.124 11.4108 56.443 10.4948 57.0811 9.83398C57.7191 9.17318 58.5895 8.84049 59.6924 8.83594C60.736 8.83138 61.5495 9.15267 62.1328 9.7998C62.7207 10.4469 63.0146 11.3379 63.0146 12.4727C63.0146 13.5938 62.6979 14.4893 62.0645 15.1592C61.4355 15.8291 60.5902 16.1641 59.5283 16.1641ZM59.6104 15.2207C60.335 15.2207 60.891 14.986 61.2783 14.5166C61.6702 14.0426 61.8662 13.375 61.8662 12.5137C61.8662 11.6341 61.6702 10.9596 61.2783 10.4902C60.8864 10.0163 60.3304 9.7793 59.6104 9.7793C58.8903 9.7793 58.3206 10.0254 57.9014 10.5176C57.4821 11.0098 57.2725 11.6842 57.2725 12.541C57.2725 13.3704 57.4844 14.0244 57.9082 14.5029C58.332 14.9814 58.8994 15.2207 59.6104 15.2207Z" fill="#1A1A1A"/>
      </svg>
      `;case c.Fail:return s.qy`
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path fill="#EF355D" d="m6,12c3.314,0 6,-2.6863 6,-6c0,-3.3137 -2.686,-6 -6,-6c-3.314,0 -6,2.6863 -6,6c0,3.3137 2.686,6 6,6z"/>
          <path fill="white" d="m6.943,6.0004l1.544,-1.5444c0.169,-0.1683 0.236,-0.4142 0.174,-0.6448c-0.061,-0.2306 -0.241,-0.4107 -0.472,-0.4722c-0.231,-0.0616 -0.477,0.0049 -0.645,0.1742l-1.544,1.5443l-1.545,-1.5443c-0.26,-0.259 -0.681,-0.2583 -0.941,0.0014c-0.26,0.2598 -0.26,0.6808 -0.001,0.9414l1.544,1.5444l-1.544,1.5444c-0.259,0.2606 -0.259,0.6815 0.001,0.9413c0.26,0.2598 0.681,0.2604 0.941,0.0015l1.545,-1.5444l1.544,1.5444c0.261,0.2589 0.682,0.2583 0.942,-0.0015c0.259,-0.2598 0.26,-0.6807 0.001,-0.9413l-1.544,-1.5444z" />
        </svg>
      `;case c.SelectAccount:return s.qy`
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
      <path fill=${T} d="M6.22176 13.9567C3.55468 13.653 2 11.8026 2 10V9.5C2 8.67157 2.67157 8 3.5 8H5.59971C5.43777 8.31679 5.30564 8.65136 5.20703 9H3.5C3.22386 9 3 9.22386 3 9.5V10C3 11.1281 3.88187 12.333 5.50235 12.7996C5.69426 13.216 5.93668 13.6043 6.22176 13.9567ZM9.62596 5.06907C9.70657 4.81036 9.75 4.53525 9.75 4.25C9.75 2.73122 8.51878 1.5 7 1.5C5.48122 1.5 4.25 2.73122 4.25 4.25C4.25 5.53662 5.13357 6.61687 6.32704 6.91706C6.64202 6.55055 7.00446 6.226 7.40482 5.95294C7.27488 5.98371 7.13934 6 7 6C6.0335 6 5.25 5.2165 5.25 4.25C5.25 3.2835 6.0335 2.5 7 2.5C7.9665 2.5 8.75 3.2835 8.75 4.25C8.75 4.73141 8.55561 5.16743 8.24104 5.48382C8.67558 5.28783 9.14016 5.14664 9.62596 5.06907ZM10.5 15C12.9853 15 15 12.9853 15 10.5C15 8.01472 12.9853 6 10.5 6C8.01472 6 6 8.01472 6 10.5C6 12.9853 8.01472 15 10.5 15ZM10.5 8C10.7761 8 11 8.22386 11 8.5V10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H11V12.5C11 12.7761 10.7761 13 10.5 13C10.2239 13 10 12.7761 10 12.5V11H8.5C8.22386 11 8 10.7761 8 10.5C8 10.2239 8.22386 10 8.5 10H10V8.5C10 8.22386 10.2239 8 10.5 8Z"/>
    </svg>
  `;case c.News:return s.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.75 20H5.25C3.51697 20 2.10075 18.6435 2.00514 16.9344L2 16.75V6.25C2 5.05914 2.92516 4.08436 4.09595 4.00519L4.25 4H16.75C17.9409 4 18.9156 4.92516 18.9948 6.09595L19 6.25V7H19.75C20.9409 7 21.9156 7.92516 21.9948 9.09595L22 9.25V16.75C22 18.483 20.6435 19.8992 18.9344 19.9949L18.75 20H5.25H18.75ZM5.25 18.5H18.75C19.6682 18.5 20.4212 17.7929 20.4942 16.8935L20.5 16.75V9.25C20.5 8.8703 20.2178 8.55651 19.8518 8.50685L19.75 8.5H19V16.25C19 16.6297 18.7178 16.9435 18.3518 16.9932L18.25 17C17.8703 17 17.5565 16.7178 17.5068 16.3518L17.5 16.25V6.25C17.5 5.8703 17.2178 5.55651 16.8518 5.50685L16.75 5.5H4.25C3.8703 5.5 3.55651 5.78215 3.50685 6.14823L3.5 6.25V16.75C3.5 17.6682 4.20711 18.4212 5.10647 18.4942L5.25 18.5H18.75H5.25ZM12.246 14.5H15.2522C15.6665 14.5 16.0022 14.8358 16.0022 15.25C16.0022 15.6297 15.7201 15.9435 15.354 15.9932L15.2522 16H12.246C11.8318 16 11.496 15.6642 11.496 15.25C11.496 14.8703 11.7782 14.5565 12.1442 14.5068L12.246 14.5H15.2522H12.246ZM9.24328 11.0045C9.6575 11.0045 9.99328 11.3403 9.99328 11.7545V15.25C9.99328 15.6642 9.6575 16 9.24328 16H5.74776C5.33355 16 4.99776 15.6642 4.99776 15.25V11.7545C4.99776 11.3403 5.33355 11.0045 5.74776 11.0045H9.24328ZM8.49328 12.5045H6.49776V14.5H8.49328V12.5045ZM12.246 11.0045H15.2522C15.6665 11.0045 16.0022 11.3403 16.0022 11.7545C16.0022 12.1342 15.7201 12.448 15.354 12.4976L15.2522 12.5045H12.246C11.8318 12.5045 11.496 12.1687 11.496 11.7545C11.496 11.3748 11.7782 11.061 12.1442 11.0113L12.246 11.0045H15.2522H12.246ZM5.74776 7.50247H15.2522C15.6665 7.50247 16.0022 7.83826 16.0022 8.25247C16.0022 8.63217 15.7201 8.94596 15.354 8.99563L15.2522 9.00247H5.74776C5.33355 9.00247 4.99776 8.66669 4.99776 8.25247C4.99776 7.87278 5.27991 7.55898 5.64599 7.50932L5.74776 7.50247H15.2522H5.74776Z" fill="none" />
      </svg>
      `;case c.DoubleBookmark:return s.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6.74814C4 5.50535 5.00742 4.49786 6.25013 4.49786H15.2506C16.4933 4.49786 17.5008 5.50535 17.5008 6.74814V21.2499C17.5008 21.5185 17.3572 21.7666 17.1243 21.9003C16.8914 22.0341 16.6048 22.0332 16.3728 21.8978L10.7504 18.6179L5.12797 21.8978C4.89599 22.0332 4.60936 22.0341 4.37648 21.9003C4.14359 21.7666 4 21.5185 4 21.2499V6.74814ZM6.25013 5.99805C5.83589 5.99805 5.50008 6.33387 5.50008 6.74814V19.944L10.3725 17.1016C10.606 16.9653 10.8948 16.9653 11.1283 17.1016L16.0007 19.944V6.74814C16.0007 6.33387 15.6649 5.99805 15.2506 5.99805H6.25013ZM15.2497 2C17.8732 2 20 4.12691 20 6.75058V18.6232C20 19.0374 19.6642 19.3733 19.25 19.3733C18.8357 19.3733 18.4999 19.0374 18.4999 18.6232V6.75058C18.4999 4.95543 17.0448 3.50018 15.2497 3.50018H6.63687C6.63687 3.50018 6.75016 2.94339 7.43379 2.41948C8.00023 2 8.60182 2 8.60182 2H15.2497Z" fill="none" />
        </svg>
      `;case c.ChevronLeft:return s.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5303 4.21967C15.8232 4.51256 15.8232 4.98744 15.5303 5.28033L8.81066 12L15.5303 18.7197C15.8232 19.0126 15.8232 19.4874 15.5303 19.7803C15.2374 20.0732 14.7626 20.0732 14.4697 19.7803L7.21967 12.5303C6.92678 12.2374 6.92678 11.7626 7.21967 11.4697L14.4697 4.21967C14.7626 3.92678 15.2374 3.92678 15.5303 4.21967Z" fill="none" />
        </svg>`;case c.ChevronRight:return s.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.46967 4.21967C8.17678 4.51256 8.17678 4.98744 8.46967 5.28033L15.1893 12L8.46967 18.7197C8.17678 19.0126 8.17678 19.4874 8.46967 19.7803C8.76256 20.0732 9.23744 20.0732 9.53033 19.7803L16.7803 12.5303C17.0732 12.2374 17.0732 11.7626 16.7803 11.4697L9.53033 4.21967C9.23744 3.92678 8.76256 3.92678 8.46967 4.21967Z" fill="currentColor" />
        </svg>`;case c.Delete:return s.qy`
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 4H11.5C11.5 3.17157 10.8284 2.5 10 2.5C9.17157 2.5 8.5 3.17157 8.5 4ZM7.5 4C7.5 2.61929 8.61929 1.5 10 1.5C11.3807 1.5 12.5 2.61929 12.5 4H17.5C17.7761 4 18 4.22386 18 4.5C18 4.77614 17.7761 5 17.5 5H16.4456L15.2521 15.3439C15.0774 16.8576 13.7957 18 12.2719 18H7.72813C6.20431 18 4.92256 16.8576 4.7479 15.3439L3.55437 5H2.5C2.22386 5 2 4.77614 2 4.5C2 4.22386 2.22386 4 2.5 4H7.5ZM5.74131 15.2292C5.85775 16.2384 6.71225 17 7.72813 17H12.2719C13.2878 17 14.1422 16.2384 14.2587 15.2292L15.439 5H4.56101L5.74131 15.2292ZM8.5 7.5C8.77614 7.5 9 7.72386 9 8V14C9 14.2761 8.77614 14.5 8.5 14.5C8.22386 14.5 8 14.2761 8 14V8C8 7.72386 8.22386 7.5 8.5 7.5ZM12 8C12 7.72386 11.7761 7.5 11.5 7.5C11.2239 7.5 11 7.72386 11 8V14C11 14.2761 11.2239 14.5 11.5 14.5C11.7761 14.5 12 14.2761 12 14V8Z" fill="currentColor"/>
        </svg>
    `;case c.Add:return s.qy`
        <svg width="16" height="15" viewBox="0 0 16 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.39563 0.5C8.39563 0.223858 8.17177 0 7.89563 0C7.61949 0 7.39563 0.223858 7.39563 0.5V7H0.89563C0.619487 7 0.39563 7.22386 0.39563 7.5C0.39563 7.77614 0.619487 8 0.89563 8H7.39563V14.5C7.39563 14.7761 7.61949 15 7.89563 15C8.17177 15 8.39563 14.7761 8.39563 14.5V8H14.8956C15.1718 8 15.3956 7.77614 15.3956 7.5C15.3956 7.22386 15.1718 7 14.8956 7H8.39563V0.5Z" fill="${T}"/>
        </svg>`;case c.Calendar:return s.qy`
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 11C7.55228 11 8 10.5523 8 10C8 9.44771 7.55228 9 7 9C6.44772 9 6 9.44771 6 10C6 10.5523 6.44772 11 7 11ZM8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44771 10.5523 9 10 9C9.44771 9 9 9.44771 9 10C9 10.5523 9.44771 11 10 11ZM11 13C11 13.5523 10.5523 14 10 14C9.44771 14 9 13.5523 9 13C9 12.4477 9.44771 12 10 12C10.5523 12 11 12.4477 11 13ZM13 11C13.5523 11 14 10.5523 14 10C14 9.44771 13.5523 9 13 9C12.4477 9 12 9.44771 12 10C12 10.5523 12.4477 11 13 11ZM17 5.5C17 4.11929 15.8807 3 14.5 3H5.5C4.11929 3 3 4.11929 3 5.5V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V5.5ZM4 7H16V14.5C16 15.3284 15.3284 16 14.5 16H5.5C4.67157 16 4 15.3284 4 14.5V7ZM5.5 4H14.5C15.3284 4 16 4.67157 16 5.5V6H4V5.5C4 4.67157 4.67157 4 5.5 4Z" fill=${T}/>
        </svg>
    `;case c.Planner:return s.qy`
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5Zm1.75 5.5h-15v9.25c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V8.5Zm-11.75 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm-4.25-4a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm1.5-6H6.25A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75Z" fill="${T}"/>
        </svg>`;case c.Milestone:return s.qy`
        <svg width="24" height="24" fill="${T}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.25 13c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 15.25 21H3.75A1.75 1.75 0 0 1 2 19.25v-4.5c0-.966.783-1.75 1.75-1.75h11.5ZM21 14.899v5.351a.75.75 0 0 1-1.494.102l-.006-.102v-5.338a3.006 3.006 0 0 0 1.5-.013Zm-5.75-.399H3.75a.25.25 0 0 0-.25.25v4.5c0 .138.111.25.25.25h11.5a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25Zm5-4.408a1.908 1.908 0 1 1 0 3.816 1.908 1.908 0 0 1 0-3.816ZM15.244 3c.967 0 1.75.784 1.75 1.75v4.5a1.75 1.75 0 0 1-1.75 1.75h-11.5a1.75 1.75 0 0 1-1.75-1.75v-4.5a1.75 1.75 0 0 1 1.607-1.744L3.745 3h11.5Zm0 1.5h-11.5l-.057.007a.25.25 0 0 0-.193.243v4.5c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25ZM20.25 3a.75.75 0 0 1 .743.648L21 3.75v5.351a3.004 3.004 0 0 0-1.5-.013V3.75a.75.75 0 0 1 .75-.75Z" fill="${T}"/>
        </svg>`;case c.PersonAdd:return s.qy`
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="svg" fill="currentColor">
          <path d="M9 2a4 4 0 100 8 4 4 0 000-8zM6 6a3 3 0 116 0 3 3 0 01-6 0z"></path>
          <path d="M4 11a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 009 18c.41 0 .82-.02 1.21-.06A5.5 5.5 0 019.6 17 12 12 0 019 17a8.16 8.16 0 01-4.33-1.05A3.36 3.36 0 013 13a1 1 0 011-1h5.6c.18-.36.4-.7.66-1H4z"></path>
          <path d="M14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 010 1H15v1.5a.5.5 0 01-1 0V15h-1.5a.5.5 0 010-1H14v-1.5c0-.28.22-.5.5-.5z"></path>
        </svg>`;case c.Event:return s.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.75 3C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45507 3 6.25 3H17.75ZM19.5 8.5H4.5V17.75C4.5 18.7165 5.2835 19.5 6.25 19.5H17.75C18.7165 19.5 19.5 18.7165 19.5 17.75V8.5ZM7.75 14.5C8.44036 14.5 9 15.0596 9 15.75C9 16.4404 8.44036 17 7.75 17C7.05964 17 6.5 16.4404 6.5 15.75C6.5 15.0596 7.05964 14.5 7.75 14.5ZM12 14.5C12.6904 14.5 13.25 15.0596 13.25 15.75C13.25 16.4404 12.6904 17 12 17C11.3096 17 10.75 16.4404 10.75 15.75C10.75 15.0596 11.3096 14.5 12 14.5ZM7.75 10.5C8.44036 10.5 9 11.0596 9 11.75C9 12.4404 8.44036 13 7.75 13C7.05964 13 6.5 12.4404 6.5 11.75C6.5 11.0596 7.05964 10.5 7.75 10.5ZM12 10.5C12.6904 10.5 13.25 11.0596 13.25 11.75C13.25 12.4404 12.6904 13 12 13C11.3096 13 10.75 12.4404 10.75 11.75C10.75 11.0596 11.3096 10.5 12 10.5ZM16.25 10.5C16.9404 10.5 17.5 11.0596 17.5 11.75C17.5 12.4404 16.9404 13 16.25 13C15.5596 13 15 12.4404 15 11.75C15 11.0596 15.5596 10.5 16.25 10.5ZM17.75 4.5H6.25C5.2835 4.5 4.5 5.2835 4.5 6.25V7H19.5V6.25C19.5 5.2835 18.7165 4.5 17.75 4.5Z" fill="none" />
        </svg>
      `;case c.BookOpen:return s.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19.1375C11.4986 19.6686 10.788 20 10 20H3.75C2.7835 20 2 19.2165 2 18.25V5.75C2 4.7835 2.7835 4 3.75 4H10C10.788 4 11.4986 4.33145 12 4.86253C12.5014 4.33145 13.212 4 14 4H20.25C21.2165 4 22 4.7835 22 5.75V18.25C22 19.2165 21.2165 20 20.25 20H14C13.212 20 12.5014 19.6686 12 19.1375ZM3.5 5.75V18.25C3.5 18.3881 3.61193 18.5 3.75 18.5H10C10.6904 18.5 11.25 17.9404 11.25 17.25V6.75C11.25 6.05964 10.6904 5.5 10 5.5H3.75C3.61193 5.5 3.5 5.61193 3.5 5.75ZM12.75 17.25C12.75 17.9404 13.3096 18.5 14 18.5H20.25C20.3881 18.5 20.5 18.3881 20.5 18.25V5.75C20.5 5.61193 20.3881 5.5 20.25 5.5H14C13.3096 5.5 12.75 6.05964 12.75 6.75V17.25Z" fill="none" />
        </svg>
      `;case c.FileOuter:return s.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 2C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V9.82777C20 9.29733 19.7893 8.78863 19.4142 8.41355L13.5864 2.58579C13.2114 2.21071 12.7027 2 12.1722 2H6ZM5.5 4C5.5 3.72386 5.72386 3.5 6 3.5H12V8C12 9.10457 12.8954 10 14 10H18.5V20C18.5 20.2761 18.2761 20.5 18 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V4ZM17.3793 8.5H14C13.7239 8.5 13.5 8.27614 13.5 8V4.62066L17.3793 8.5Z" fill="none" />
        </svg>
      `;case c.BookQuestion:return s.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.9998 8.01752C10.9905 8.42363 10.6584 8.74999 10.25 8.74999C9.5 8.74999 9.5 7.9989 9.5 7.9989L9.5 7.99777L9.50001 7.99539L9.50006 7.99017C9.50032 7.9755 9.50072 7.96084 9.50144 7.94618C9.50262 7.92198 9.50473 7.89159 9.50846 7.8559C9.51591 7.78477 9.52996 7.69092 9.55665 7.58186C9.60973 7.36492 9.71565 7.07652 9.92848 6.78906C10.3825 6.17582 11.1982 5.72727 12.513 5.7501C13.4627 5.76659 14.3059 6.16497 14.834 6.82047C15.371 7.48704 15.5517 8.3902 15.1964 9.27853C14.8342 10.1839 14.0149 10.5437 13.5442 10.7503L13.4932 10.7728C13.2147 10.8957 13.0813 10.9599 13.0013 11.024L13 11.0251L13 11.7492C13.0001 12.1634 12.6643 12.4999 12.2501 12.5C11.8359 12.5 11.5001 12.1643 11.5 11.7501L11.5 11C11.5 10.4769 11.752 10.1029 12.0633 9.85345C12.3134 9.65303 12.6276 9.51483 12.8491 9.4174L12.8875 9.40049C13.4292 9.16137 13.6868 9.01346 13.8036 8.72145C13.9483 8.35977 13.8789 8.02596 13.6659 7.76153C13.4439 7.48604 13.0371 7.25943 12.487 7.24988C11.5518 7.23364 11.2425 7.53509 11.134 7.68162C11.0656 7.77404 11.0309 7.86797 11.0137 7.93838C11.0052 7.973 11.0017 7.99908 11.0003 8.01197L10.9998 8.01752ZM12.25 15.5C12.8023 15.5 13.25 15.0523 13.25 14.5C13.25 13.9477 12.8023 13.5 12.25 13.5C11.6977 13.5 11.25 13.9477 11.25 14.5C11.25 15.0523 11.6977 15.5 12.25 15.5ZM4 4.5C4 3.11929 5.11929 2 6.5 2H18C19.3807 2 20.5 3.11929 20.5 4.5V18.75C20.5 19.1642 20.1642 19.5 19.75 19.5H5.5C5.5 20.0523 5.94772 20.5 6.5 20.5H19.75C20.1642 20.5 20.5 20.8358 20.5 21.25C20.5 21.6642 20.1642 22 19.75 22H6.5C5.11929 22 4 20.8807 4 19.5V4.5ZM5.5 4.5V18H19V4.5C19 3.94772 18.5523 3.5 18 3.5H6.5C5.94772 3.5 5.5 3.94772 5.5 4.5Z" fill="none" />
        </svg>
      `;case c.Globe:return s.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0001 1.99805C17.5238 1.99805 22.0016 6.47589 22.0016 11.9996C22.0016 17.5233 17.5238 22.0011 12.0001 22.0011C6.47638 22.0011 1.99854 17.5233 1.99854 11.9996C1.99854 6.47589 6.47638 1.99805 12.0001 1.99805ZM14.939 16.4993H9.06118C9.71322 18.9135 10.8466 20.5011 12.0001 20.5011C13.1536 20.5011 14.2869 18.9135 14.939 16.4993ZM7.5084 16.4999L4.78591 16.4998C5.74425 18.0328 7.1777 19.2384 8.88008 19.9104C8.3578 19.0906 7.92681 18.0643 7.60981 16.8949L7.5084 16.4999ZM19.2143 16.4998L16.4918 16.4999C16.168 17.8337 15.7004 18.9995 15.119 19.9104C16.716 19.2804 18.0757 18.1814 19.0291 16.7833L19.2143 16.4998ZM7.09351 9.99895H3.7359L3.73115 10.0162C3.57906 10.6525 3.49854 11.3166 3.49854 11.9996C3.49854 13.0558 3.69112 14.0669 4.0431 14.9999L7.21626 14.9995C7.07396 14.0504 6.99854 13.0422 6.99854 11.9996C6.99854 11.3156 7.031 10.6464 7.09351 9.99895ZM15.397 9.99901H8.60316C8.53514 10.6393 8.49853 11.309 8.49853 11.9996C8.49853 13.0591 8.58468 14.0694 8.73827 14.9997H15.2619C15.4155 14.0694 15.5016 13.0591 15.5016 11.9996C15.5016 11.309 15.465 10.6393 15.397 9.99901ZM20.2647 9.99811L16.9067 9.99897C16.9692 10.6464 17.0016 11.3156 17.0016 11.9996C17.0016 13.0422 16.9262 14.0504 16.7839 14.9995L19.9571 14.9999C20.309 14.0669 20.5016 13.0558 20.5016 11.9996C20.5016 11.3102 20.4196 10.64 20.2647 9.99811ZM8.88114 4.08875L8.85823 4.09747C6.81092 4.91218 5.1549 6.49949 4.25023 8.49935L7.29835 8.49972C7.61171 6.74693 8.15855 5.221 8.88114 4.08875ZM12.0001 3.49805L11.8844 3.50335C10.619 3.6191 9.39651 5.62107 8.8288 8.4993H15.1714C14.6052 5.62914 13.388 3.63033 12.1264 3.50436L12.0001 3.49805ZM15.1201 4.08881L15.2269 4.2629C15.8961 5.37537 16.4043 6.83525 16.7018 8.49972L19.7499 8.49935C18.8853 6.58795 17.3343 5.05341 15.4113 4.21008L15.1201 4.08881Z" />
        </svg>
      `;case c.PresenceAvailable:return s.qy`
        <svg fill="#13a10e" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10Zm2.1-5.9L4.85 6.35a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.9-1.9a.5.5 0 0 1 .7.71Z" fill="#13a10e"></path>
        </svg>`;case c.PresenceOofAvailable:return s.qy`
        <svg fill="#13a10e" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0ZM1 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm6.1-1.6c.2.2.2.5 0 .7L4.85 6.35a.5.5 0 0 1-.7 0l-1-1a.5.5 0 1 1 .7-.7l.65.64 1.9-1.9c.2-.19.5-.19.7 0Z" fill="#13a10e"></path>
        </svg>`;case c.PresenceBusy:return s.qy`
        <svg fill="#d13438" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 5A5 5 0 1 1 0 5a5 5 0 0 1 10 0Z" fill="#d13438"></path>
        </svg>`;case c.PresenceOofBusy:return s.qy`
        <svg fill="#d13438" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM0 5a5 5 0 1 1 10 0A5 5 0 0 1 0 5Z" fill="#d13438"></path>
        </svg>
      `;case c.PresenceDnd:return s.qy`
        <svg fill="#d13438" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10ZM3.5 4.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Z" fill="#d13438"></path>
        </svg>`;case c.PresenceOofDnd:return s.qy`
        <svg fill="#d13438" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0ZM1 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm2 0c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 3 5Z" fill="#d13438"></path>
        </svg>`;case c.PresenceAway:return s.qy`
        <svg fill="#eaa300" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10Zm0-7v1.8l1.35 1.35a.5.5 0 1 1-.7.7l-1.5-1.5A.5.5 0 0 1 4 5V3a.5.5 0 0 1 1 0Z" fill="#eaa300"></path>
        </svg>`;case c.PresenceOofAway:return s.qy`
        <svg fill="#c239b3" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.35 3.85a.5.5 0 1 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7L4.7 5.5h1.8a.5.5 0 1 0 0-1H4.7l.65-.65ZM5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0ZM1 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" fill="#c239b3"></path>
        </svg>`;case c.PresenceOffline:return s.qy`
        <svg fill="#929292" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.85 3.15c.2.2.2.5 0 .7L5.71 5l1.14 1.15a.5.5 0 1 1-.7.7L5 5.71 3.85 6.85a.5.5 0 1 1-.7-.7L4.29 5 3.15 3.85a.5.5 0 1 1 .7-.7L5 4.29l1.15-1.14c.2-.2.5-.2.7 0ZM0 5a5 5 0 1 1 10 0A5 5 0 0 1 0 5Zm5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" fill="#929292"></path>
        </svg>`;case c.PresenceStatusUnknown:return s.qy`
        <svg fill="#d13438" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM0 5a5 5 0 1 1 10 0A5 5 0 0 1 0 5Z" fill="#d13438"></path>
        </svg>`}}},3173:(at,ge,d)=>{d.d(ge,{B9:()=>le,Gp:()=>v,Sk:()=>N,aX:()=>O,ez:()=>B,h3:()=>c,jD:()=>oe,jE:()=>ve,sg:()=>E,wJ:()=>S,x8:()=>K,z3:()=>V});var s=d(2404);const c=ae=>{const de=new Date,W=new Date(de.getFullYear(),de.getMonth(),de.getDate());if(ae>=W)return ae.toLocaleString("default",{hour:"numeric",minute:"numeric"});const $=new Date(W);if($.setDate(de.getDate()-de.getDay()),ae>=$)return ae.toLocaleString("default",{hour:"numeric",minute:"numeric",weekday:"short"});const J=new Date($);return J.setDate($.getDate()-7),ae.toLocaleString("default",ae>=J?{day:"numeric",month:"numeric",weekday:"short"}:{day:"numeric",month:"numeric",year:"numeric"})},v=ae=>{const de=ae.getMonth(),W=ae.getDate();return`${T(de)} ${W}`},T=ae=>{switch(ae){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December";default:return"Month"}},E=(ae,de)=>{let W;return function(){window.clearTimeout(W),W=window.setTimeout(()=>ae.apply(this,arguments),de)}},N=ae=>new Promise((de,W)=>{const $=new FileReader;$.onerror=W,$.onload=()=>{de($.result)},$.readAsDataURL(ae)}),O=ae=>ae.startsWith("[")?ae.match(/([a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi).toString():ae,le=ae=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(ae),V=(ae,de=2)=>{if(0===ae)return"0 Bytes";const $=de<0?0:de,ne=Math.floor(Math.log(ae)/Math.log(1024));return`${parseFloat((ae/Math.pow(1024,ne)).toFixed($))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][ne]}`},B=ae=>(ae&&(ae=ae?.replace(/<ddd\/>/gi,"..."),ae=ae?.replace(/<c0>/gi,"<b>"),ae=ae?.replace(/<\/c0>/gi,"</b>")),ae),S=ae=>ae?.replace(/\.[^/.]+$/,""),K=ae=>new URL(ae).pathname.split("/").pop().replace(/-/g," "),oe=ae=>ae||s._.config.response.invalidationPeriod||s._.config.defaultInvalidationPeriod,ve=()=>s._.config.response.isEnabled&&s._.config.isEnabled},2657:(at,ge,d)=>{d.d(ge,{yl:()=>q}),Error;var q=function(se){return se.ARRAYBUFFER="arraybuffer",se.BLOB="blob",se.DOCUMENT="document",se.JSON="json",se.RAW="raw",se.STREAM="stream",se.TEXT="text",se}(q||{});Error},5941:(at,ge,d)=>{d.d(ge,{I:()=>s,z:()=>c});const s="https://graph.microsoft.com",c=new Set([s,"https://graph.microsoft.us","https://dod-graph.microsoft.us","https://graph.microsoft.de","https://microsoftgraph.chinacloudapi.cn","https://canary.graph.microsoft.com"])},9451:(at,ge,d)=>{d.d(ge,{D:()=>O,I:()=>N});var s=d(8324),c=d(9559),I=d(6885),v=d(4709),T=d(407),M=d(1212),_=function(le,V,B,S){var ve,K=arguments.length,oe=K<3?V:null===S?S=Object.getOwnPropertyDescriptor(V,B):S;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)oe=Reflect.decorate(le,V,B,S);else for(var ae=le.length-1;ae>=0;ae--)(ve=le[ae])&&(oe=(K<3?ve(oe):K>3?ve(V,B,oe):ve(V,B))||oe);return K>3&&oe&&Object.defineProperty(V,B,oe),oe},b=function(le,V){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(le,V)},E=function(le,V,B,S){return new(B||(B=Promise))(function(oe,ve){function ae($){try{W(S.next($))}catch(J){ve(J)}}function de($){try{W(S.throw($))}catch(J){ve(J)}}function W($){$.done?oe($.value):function K(oe){return oe instanceof B?oe:new B(function(ve){ve(oe)})}($.value).then(ae,de)}W((S=S.apply(le,V||[])).next())})},N=function(le){return le.mobile="",le.tablet="tablet",le.desktop="desktop",le}(N||{});let O=(()=>{class le extends s.WF{static get packageVersion(){return M.i}get mediaQuery(){return this.offsetWidth<768?N.mobile:this.offsetWidth<1200?N.tablet:N.desktop}get isLoadingState(){return this._isLoadingState}get isFirstUpdated(){return this._isFirstUpdated}get strings(){return{}}constructor(){super(),this.providerState=I.HJ.Loading,this.direction="ltr",this._isLoadingState=!1,this._isFirstUpdated=!1,this.setLoadingState=B=>{this._isLoadingState!==B&&(this._isLoadingState=B,this.requestUpdate("isLoadingState"))},this.handleProviderUpdates=()=>{var B,S;this.providerState=null!==(S=null===(B=v.b.globalProvider)||void 0===B?void 0:B.state)&&void 0!==S?S:I.HJ.Loading,this.requestStateUpdate()},this.handleActiveAccountUpdates=()=>{this.clearState(),this.requestStateUpdate()},this.handleLocalizationChanged=()=>{T.w.updateStringsForTag(this.tagName,this.strings),this.requestUpdate()},this.handleDirectionChanged=()=>{this.direction=T.w.getDocumentDirection()},this.handleDirectionChanged(),this.handleLocalizationChanged()}connectedCallback(){super.connectedCallback(),T.w.onStringsUpdated(this.handleLocalizationChanged),T.w.onDirectionUpdated(this.handleDirectionChanged)}disconnectedCallback(){super.disconnectedCallback(),T.w.removeOnStringsUpdated(this.handleLocalizationChanged),T.w.removeOnDirectionUpdated(this.handleDirectionChanged),v.b.removeProviderUpdatedListener(this.handleProviderUpdates),v.b.removeActiveAccountChangedListener(this.handleActiveAccountUpdates)}firstUpdated(B){super.firstUpdated(B),this._isFirstUpdated=!0,v.b.onProviderUpdated(this.handleProviderUpdates),v.b.onActiveAccountChanged(this.handleActiveAccountUpdates),this.requestStateUpdate()}loadState(){return Promise.resolve()}clearState(){}fireCustomEvent(B,S,K=!1,oe=!1,ve=!1){const ae=new CustomEvent(B,{bubbles:K,cancelable:oe,composed:ve,detail:S});return this.dispatchEvent(ae)}updated(B){super.updated(B);const S=new CustomEvent("updated",{bubbles:!0,cancelable:!0});this.dispatchEvent(S)}requestStateUpdate(B=!1){return E(this,void 0,void 0,function*(){if(!this._isFirstUpdated)return;this.isLoadingState&&!B&&(yield this._currentLoadStatePromise);const S=v.b.globalProvider;if(!S)return Promise.resolve();if(S.state!==I.HJ.SignedOut){if(S.state===I.HJ.Loading)return Promise.resolve();{const K=new Promise((oe,ve)=>E(this,void 0,void 0,function*(){try{this.setLoadingState(!0),this.fireCustomEvent("loadingInitiated"),yield this.loadState(),this.setLoadingState(!1),this.fireCustomEvent("loadingCompleted"),oe()}catch(ae){this.clearState(),this.setLoadingState(!1),this.fireCustomEvent("loadingFailed"),ve(ae)}return this._currentLoadStatePromise=this.isLoadingState&&this._currentLoadStatePromise&&B?this._currentLoadStatePromise.then(()=>K):K}))}}else this.clearState()})}}return _([(0,c.wk)(),b("design:type",Number)],le.prototype,"providerState",void 0),_([(0,c.wk)(),b("design:type",String)],le.prototype,"direction",void 0),le})()},5260:(at,ge,d)=>{d.d(ge,{S:()=>le});var s=d(9714),c=d(8324),I=d(9559),v=d(6885),T=d(4709),M=d(407),_=d(1212),b=d(9451),E=function(V,B,S,K){var ae,oe=arguments.length,ve=oe<3?B:null===K?K=Object.getOwnPropertyDescriptor(B,S):K;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)ve=Reflect.decorate(V,B,S,K);else for(var de=V.length-1;de>=0;de--)(ae=V[de])&&(ve=(oe<3?ae(ve):oe>3?ae(B,S,ve):ae(B,S))||ve);return oe>3&&ve&&Object.defineProperty(B,S,ve),ve},N=function(V,B){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(V,B)};let le=(()=>{class V extends c.WF{static get packageVersion(){return _.i}get mediaQuery(){return this.offsetWidth<768?b.I.mobile:this.offsetWidth<1200?b.I.tablet:b.I.desktop}get isFirstUpdated(){return this._isFirstUpdated}get strings(){return{}}constructor(){super(),this.providerState=v.HJ.Loading,this.direction="ltr",this._isFirstUpdated=!1,this._task=new s.YZ(this,{task:()=>this.loadState(),args:()=>this.args()}),this.renderLoading=()=>c.qy`<span>Loading...</span>`,this.renderError=S=>c.qy`<p>Error: ${S}</p>`,this.renderContent=()=>c.qy`<!-- baseTaskComponent, please implement renderContent -->`,this.handleProviderUpdates=()=>{var S,K;this.providerState=null!==(K=null===(S=T.b.globalProvider)||void 0===S?void 0:S.state)&&void 0!==K?K:v.HJ.Loading},this.handleActiveAccountUpdates=()=>{this.clearState()},this.handleLocalizationChanged=()=>{M.w.updateStringsForTag(this.tagName,this.strings),this.requestUpdate()},this.handleDirectionChanged=()=>{this.direction=M.w.getDocumentDirection()},this.handleDirectionChanged(),this.handleLocalizationChanged()}connectedCallback(){super.connectedCallback(),M.w.onStringsUpdated(this.handleLocalizationChanged),M.w.onDirectionUpdated(this.handleDirectionChanged)}disconnectedCallback(){super.disconnectedCallback(),M.w.removeOnStringsUpdated(this.handleLocalizationChanged),M.w.removeOnDirectionUpdated(this.handleDirectionChanged),T.b.removeProviderUpdatedListener(this.handleProviderUpdates),T.b.removeActiveAccountChangedListener(this.handleActiveAccountUpdates)}firstUpdated(S){super.firstUpdated(S),this._isFirstUpdated=!0,T.b.onProviderUpdated(this.handleProviderUpdates),T.b.onActiveAccountChanged(this.handleActiveAccountUpdates)}clearState(){}fireCustomEvent(S,K,oe=!1,ve=!1,ae=!1){const de=new CustomEvent(S,{bubbles:oe,cancelable:ve,composed:ae,detail:K});return this.dispatchEvent(de)}updated(S){super.updated(S),this.fireCustomEvent("updated",void 0,!0,!1)}loadState(){return function(V,B,S,K){return new(S||(S=Promise))(function(ve,ae){function de(J){try{$(K.next(J))}catch(ne){ae(ne)}}function W(J){try{$(K.throw(J))}catch(ne){ae(ne)}}function $(J){J.done?ve(J.value):function oe(ve){return ve instanceof S?ve:new S(function(ae){ae(ve)})}(J.value).then(de,W)}$((K=K.apply(V,B||[])).next())})}(this,void 0,void 0,function*(){return Promise.resolve()})}args(){return[this.providerState]}render(){return this._task.render({pending:this.renderLoading,complete:this.renderContent,error:this.renderError})}}return E([(0,I.wk)(),N("design:type",Number)],V.prototype,"providerState",void 0),E([(0,I.wk)(),N("design:type",String)],V.prototype,"direction",void 0),V})()},5794:(at,ge,d)=>{d.d(ge,{U:()=>c});const c=new class s{constructor(){this._disambiguation=""}get defaultPrefix(){return"mgt"}withDisambiguation(v){return v&&!this._disambiguation&&(this._disambiguation=v.toLowerCase(),v!==this._disambiguation&&console.warn(`\u{1f992}: Disambiguation value, ${v}, should be lowercase. Value has been converted to lowercase, ${this._disambiguation}.`)),this}get prefix(){return this._disambiguation?`${this.defaultPrefix}-${this._disambiguation}`:this.defaultPrefix}get disambiguation(){return this._disambiguation}get isDisambiguated(){return!!this._disambiguation}normalize(v){return this.isDisambiguated?v.toUpperCase().replace(this.prefix.toUpperCase(),this.defaultPrefix.toUpperCase()):v}}},2578:(at,ge,d)=>{d.d(ge,{N:()=>b});var s=d(9559),c=d(8324),I=d(1235);let v=(()=>{class E{static renderTemplate(O,le,V){var B;let S;if(le.$parentTemplateContext&&(V=Object.assign(Object.assign({},V),{$parent:le.$parentTemplateContext})),null!==(B=le.content)&&void 0!==B&&B.childNodes.length){const K=le.content.cloneNode(!0);S=this.renderNode(K,O,V)}else if(le.childNodes.length){const K=document.createElement("div");for(const oe of le.childNodes)K.appendChild(this.simpleCloneNode(oe));S=this.renderNode(K,O,V)}S&&O.appendChild(S)}static setBindingSyntax(O,le){this._startExpression=O,this._endExpression=le;const V=this.escapeRegex(this._startExpression),B=this.escapeRegex(this._endExpression);this._expression=new RegExp(`${V}\\s*([$\\w\\.,'"\\s()\\[\\]]+)\\s*${B}`,"g")}static get globalContext(){return this._globalContext}static get expression(){return this._expression||this.setBindingSyntax("{{","}}"),this._expression}static escapeRegex(O){return O.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}static simpleCloneNode(O){if(!O)return null;const le=O.cloneNode(!1);for(const V of O.childNodes){const B=this.simpleCloneNode(V);B&&le.appendChild(B)}return le}static expandExpressionsAsString(O,le){return O.replace(this.expression,(V,B)=>{const S=this.evalInContext(B||this.trimExpression(V),le);return S?"object"==typeof S?JSON.stringify(S):S.toString():""})}static renderNode(O,le,V){if("#text"===O.nodeName)return O.textContent=this.expandExpressionsAsString(O.textContent,V),O;if("TEMPLATE"===O.nodeName)return O.$parentTemplateContext=V,O;const B=O;if(B.attributes)for(const ve of B.attributes)if("data-props"===ve.name){const ae=this.trimExpression(ve.value);for(const de of ae.split(",")){const W=de.trim().split(":");if(2===W.length){const $=W[0].trim(),J=this.evalInContext(W[1].trim(),V);$.startsWith("@")?"function"==typeof J&&B.addEventListener($.substring(1),ne=>J(ne,V,le)):B[$]=J}}}else B.setAttribute(ve.name,this.expandExpressionsAsString(ve.value,V));const S=[],K=[];let oe=!1;for(const ve of O.childNodes){const ae=ve;let de=!1;if(ae.dataset){let W=!1;ae.dataset.if?this.evalBoolInContext(this.trimExpression(ae.dataset.if),V)?(ae.removeAttribute("data-if"),oe=!0,de=!0):(K.push(ae),W=!0):typeof ae.dataset.else<"u"&&(oe?(K.push(ae),W=!0):ae.removeAttribute("data-else")),ae.dataset.for&&!W?S.push(ae):W||this.renderNode(ve,le,V)}else this.renderNode(ve,le,V);!de&&"#text"!==ve.nodeName&&(oe=!1)}for(const ve of K)B.removeChild(ve);for(const ve of S){const de=this.trimExpression(ve.dataset.for).split(/\s(in|of)\s/i);if(3===de.length){const W=de[0].trim(),$=de[2].trim(),J=this.evalInContext($,V);if(Array.isArray(J)){ve.removeAttribute("data-for");for(let ne=0;ne<J.length;ne++){const G=Object.assign({$index:ne},V);G[W]=J[ne];const ue=ve.cloneNode(!0);this.renderNode(ue,le,G),B.insertBefore(ue,ve)}}B.removeChild(ve)}}return O}static evalBoolInContext(O,le){return le=Object.assign(Object.assign({},le),this.globalContext),new Function("with(this) { return !!("+O+")}").call(le)}static evalInContext(O,le){le=Object.assign(Object.assign({},le),this.globalContext);const V=new Function("with(this) { return "+O+";}");let B;try{B=V.call(le)}catch{}return B}static trimExpression(O){return(O=O.trim()).startsWith(this._startExpression)&&O.endsWith(this._endExpression)&&(O=(O=O.substr(this._startExpression.length,O.length-this._startExpression.length-this._endExpression.length)).trim()),O}}return E._globalContext={},E})();var T=d(5260),M=function(E,N,O,le){var S,V=arguments.length,B=V<3?N:null===le?le=Object.getOwnPropertyDescriptor(N,O):le;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)B=Reflect.decorate(E,N,O,le);else for(var K=E.length-1;K>=0;K--)(S=E[K])&&(B=(V<3?S(B):V>3?S(N,O,B):S(N,O))||B);return V>3&&B&&Object.defineProperty(N,O,B),B},_=function(E,N){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(E,N)};let b=(()=>{class E extends T.S{constructor(){super(),this.templates={},this._renderedSlots=!1,this._renderedTemplates={},this._slotNamesAddedDuringRender=[],this.renderLoading=()=>this.renderTemplate("loading",null)||c.qy``,this.renderError=O=>this.hasTemplate("error")?this.renderTemplate("error",O):c.qy`
      <div class="error">
        ${O}
      </div>
    `,this.templateContext=this.templateContext||{}}update(O){this.templates=this.getTemplates(),this._slotNamesAddedDuringRender=[],super.update(O)}updated(O){super.updated(O),this.removeUnusedSlottedElements()}renderTemplate(O,le,V){if(!this.hasTemplate(O))return null;this._slotNamesAddedDuringRender.push(V=V||O),this._renderedSlots=!0;const B=c.qy`
      <slot name=${V}></slot>
    <span
        part="end"
        ${(0,c.K)("endContainer")}
        class=${N=>E.end?"end":void 0}
    >
        <slot name="end" ${(0,c.K)("end")} @slotchange="${N=>N.handleEndContentChange()}">
            ${E.end||""}
        </slot>
    </span>
`,T=(b,E)=>s.q`
    <span
        part="start"
        ${(0,c.K)("startContainer")}
        class="${N=>E.start?"start":void 0}"
    >
        <slot
            name="start"
            ${(0,c.K)("start")}
            @slotchange="${N=>N.handleStartContentChange()}"
        >
            ${E.start||""}
        </slot>
    </span>
`,M=s.q`
    <span part="end" ${(0,c.K)("endContainer")}>
        <slot
            name="end"
            ${(0,c.K)("end")}
            @slotchange="${b=>b.handleEndContentChange()}"
        ></slot>
    </span>
`,_=s.q`
    <span part="start" ${(0,c.K)("startContainer")}>
        <slot
            name="start"
            ${(0,c.K)("start")}
            @slotchange="${b=>b.handleStartContentChange()}"
        ></slot>
    </span>
`},862:(at,ge,d)=>{d.d(ge,{z:()=>T});var s=d(742),c=d(9808),I=d(4192),v=d(4632);let T=(()=>{class M extends v.g{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const b="number"==typeof this.min?this.min:0,O=("number"==typeof this.max?this.max:100)-b;this.percentComplete=0===O?0:Math.fround((("number"==typeof this.value?this.value:0)-b)/O*100)}}return(0,s.Cg)([(0,c.CF)({converter:c.R$})],M.prototype,"value",void 0),(0,s.Cg)([(0,c.CF)({converter:c.R$})],M.prototype,"min",void 0),(0,s.Cg)([(0,c.CF)({converter:c.R$})],M.prototype,"max",void 0),(0,s.Cg)([(0,c.CF)({mode:"boolean"})],M.prototype,"paused",void 0),(0,s.Cg)([I.sH],M.prototype,"percentComplete",void 0),M})()},6105:(at,ge,d)=>{d.d(ge,{X:()=>c});var s=d(9808);function c(I,...v){const T=s.$u.locate(I);v.forEach(M=>{Object.getOwnPropertyNames(M.prototype).forEach(b=>{"constructor"!==b&&Object.defineProperty(I.prototype,b,Object.getOwnPropertyDescriptor(M.prototype,b))}),s.$u.locate(M).forEach(b=>T.push(b))})}},4645:(at,ge,d)=>{function s(c){const I=c.parentElement;if(I)return I;{const v=c.getRootNode();if(v.host instanceof HTMLElement)return v.host}return null}d.d(ge,{Z:()=>s})},4954:(at,ge,d)=>{d.d(ge,{mr:()=>I});class s{constructor(_){this.listenerCache=new WeakMap,this.query=_}bind(_){const{query:b}=this,E=this.constructListener(_);E.bind(b)(),b.addListener(E),this.listenerCache.set(_,E)}unbind(_){const b=this.listenerCache.get(_);b&&(this.query.removeListener(b),this.listenerCache.delete(_))}}class c extends s{constructor(_,b){super(_),this.styles=b}static with(_){return b=>new c(_,b)}constructListener(_){let b=!1;const E=this.styles;return function(){const{matches:O}=this;O&&!b?(_.$fastController.addStyles(E),b=O):!O&&b&&(_.$fastController.removeStyles(E),b=O)}}unbind(_){super.unbind(_),_.$fastController.removeStyles(this.styles)}}const I=c.with(window.matchMedia("(forced-colors)"));c.with(window.matchMedia("(prefers-color-scheme: dark)")),c.with(window.matchMedia("(prefers-color-scheme: light)"))},5778:(at,ge,d)=>{d.d(ge,{Z:()=>s});const s="not-allowed"},8322:(at,ge,d)=>{d.d(ge,{V:()=>c});const s=":host([hidden]){display:none}";function c(I){return`${s}:host{display:${I}}`}},4932:(at,ge,d)=>{d.d(ge,{N:()=>c});const c=(0,d(9482).UA)()?"focus-visible":"focus"},7412:(at,ge,d)=>{function s(c,I,v){return c.nodeType!==Node.TEXT_NODE||"string"==typeof c.nodeValue&&!!c.nodeValue.trim().length}d.d(ge,{g:()=>s})},9482:(at,ge,d)=>{function c(...V){return V.every(B=>B instanceof HTMLElement)}function I(V,B){return V&&B&&c(V)?Array.from(V.querySelectorAll(B)).filter(K=>null!==K.offsetParent):void 0}let M;function _(){if("boolean"==typeof M)return M;if(!function s(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}())return M=!1,M;const V=document.createElement("style"),B=function T(){const V=document.querySelector('meta[property="csp-nonce"]');return V?V.getAttribute("content"):null}();null!==B&&V.setAttribute("nonce",B),document.head.appendChild(V);try{V.sheet.insertRule("foo:focus-visible {color:inherit}",0),M=!0}catch{M=!1}finally{document.head.removeChild(V)}return M}d.d(ge,{UA:()=>_,JL:()=>I,sb:()=>c})},7153:(at,ge,d)=>{d.d(ge,{Ac:()=>gt,F9:()=>yi,FM:()=>zi,HX:()=>Ln,I5:()=>Kn,Is:()=>Un,J9:()=>qt,Mm:()=>Mn,Tg:()=>ji,bb:()=>Fi,f_:()=>_t,gG:()=>ft,kT:()=>On,oK:()=>Ye});const Ln="ArrowDown",On="ArrowLeft",Fi="ArrowRight",Kn="ArrowUp",Mn="Enter",yi="Escape",ji="Home",zi="End",gt="F2",_t="PageDown",Ye="PageUp",ft=" ",qt="Tab",Un={ArrowDown:Ln,ArrowLeft:On,ArrowRight:Fi,ArrowUp:Kn}},9748:(at,ge,d)=>{d.d(ge,{O:()=>s});var s=function(c){return c.ltr="ltr",c.rtl="rtl",c}(s||{})},7947:(at,ge,d)=>{function c(v,T,M){return Math.min(Math.max(M,v),T)}function I(v,T,M=0){return[T,M]=[T,M].sort((_,b)=>_-b),T<=v&&v<M}d.d(ge,{AB:()=>c,r4:()=>I})},175:(at,ge,d)=>{d.d(ge,{NF:()=>c});let s=0;function c(b=""){return`${b}${s++}`}},3226:(at,ge,d)=>{d.d(ge,{A:()=>s});var s=function(c){return c.Canvas="Canvas",c.CanvasText="CanvasText",c.LinkText="LinkText",c.VisitedText="VisitedText",c.ActiveText="ActiveText",c.ButtonFace="ButtonFace",c.ButtonText="ButtonText",c.Field="Field",c.FieldText="FieldText",c.Highlight="Highlight",c.HighlightText="HighlightText",c.GrayText="GrayText",c}(s||{})},5236:(at,ge,d)=>{d.d(ge,{Wr:()=>ae,h:()=>Xe,D9:()=>Oe,c$:()=>Me});var s=d(4438),c=d(7673),I=d(4402),v=d(7468),T=d(8793),M=d(9030),_=d(6697),b=d(2771),E=d(8750),N=d(1413),O=d(7707),le=d(9974);function B(He,rt,...Te){if(!0===rt)return void He();if(!1===rt)return;const se=new O.Ms({next:()=>{se.unsubscribe(),He()}});return(0,E.Tg)(rt(...Te)).subscribe(se)}function S(He,rt,Te){let se,U=!1;return He&&"object"==typeof He?({bufferSize:se=1/0,windowTime:rt=1/0,refCount:U=!1,scheduler:Te}=He):se=He??1/0,function V(He={}){const{connector:rt=(()=>new N.B),resetOnError:Te=!0,resetOnComplete:se=!0,resetOnRefCountZero:U=!0}=He;return Y=>{let be,Qe,Ce,Ne=0,lt=!1,Ot=!1;const We=()=>{Qe?.unsubscribe(),Qe=void 0},pe=()=>{We(),be=Ce=void 0,lt=Ot=!1},j=()=>{const ce=be;pe(),ce?.unsubscribe()};return(0,le.N)((ce,ke)=>{Ne++,!Ot&&!lt&&We();const Ge=Ce=Ce??rt();ke.add(()=>{Ne--,0===Ne&&!Ot&&!lt&&(Qe=B(j,U))}),Ge.subscribe(ke),!be&&Ne>0&&(be=new O.Ms({next:wt=>Ge.next(wt),error:wt=>{Ot=!0,We(),Qe=B(pe,Te,wt),Ge.error(wt)},complete:()=>{lt=!0,We(),Qe=B(pe,se),Ge.complete()}}),(0,E.Tg)(ce).subscribe(be))})(Y)}}({connector:()=>new b.m(se,rt,Te),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:U})}var K=d(6354),oe=d(274),ve=d(5558);class ae{}let de=(()=>{class He extends ae{getTranslation(Te){return(0,c.of)({})}static \u0275fac=(()=>{let Te;return function(U){return(Te||(Te=s.xGo(He)))(U||He)}})();static \u0275prov=s.jDH({token:He,factory:He.\u0275fac})}return He})();class W{}let $=(()=>{class He{handle(Te){return Te.key}static \u0275fac=function(se){return new(se||He)};static \u0275prov=s.jDH({token:He,factory:He.\u0275fac})}return He})();function J(He,rt){if(He===rt)return!0;if(null===He||null===rt)return!1;if(He!=He&&rt!=rt)return!0;let U,Y,be,Te=typeof He;if(Te==typeof rt&&"object"==Te){if(!Array.isArray(He)){if(Array.isArray(rt))return!1;for(Y in be=Object.create(null),He){if(!J(He[Y],rt[Y]))return!1;be[Y]=!0}for(Y in rt)if(!(Y in be)&&typeof rt[Y]<"u")return!1;return!0}if(!Array.isArray(rt))return!1;if((U=He.length)==rt.length){for(Y=0;Y<U;Y++)if(!J(He[Y],rt[Y]))return!1;return!0}}return!1}function ne(He){return typeof He<"u"&&null!==He}function G(He){return He&&"object"==typeof He&&!Array.isArray(He)}function ue(He,rt){let Te=Object.assign({},He);return G(He)&&G(rt)&&Object.keys(rt).forEach(se=>{G(rt[se])?se in He?Te[se]=ue(He[se],rt[se]):Object.assign(Te,{[se]:rt[se]}):Object.assign(Te,{[se]:rt[se]})}),Te}class q{}let F=(()=>{class He extends q{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(Te,se){let U;return U="string"==typeof Te?this.interpolateString(Te,se):"function"==typeof Te?this.interpolateFunction(Te,se):Te,U}getValue(Te,se){let U="string"==typeof se?se.split("."):[se];se="";do{se+=U.shift(),!ne(Te)||!ne(Te[se])||"object"!=typeof Te[se]&&U.length?U.length?se+=".":Te=void 0:(Te=Te[se],se="")}while(U.length);return Te}interpolateFunction(Te,se){return Te(se)}interpolateString(Te,se){return se?Te.replace(this.templateMatcher,(U,Y)=>{let be=this.getValue(se,Y);return ne(be)?be:U}):Te}static \u0275fac=(()=>{let Te;return function(U){return(Te||(Te=s.xGo(He)))(U||He)}})();static \u0275prov=s.jDH({token:He,factory:He.\u0275fac})}return He})();class P{}let ee=(()=>{class He extends P{compile(Te,se){return Te}compileTranslations(Te,se){return Te}static \u0275fac=(()=>{let Te;return function(U){return(Te||(Te=s.xGo(He)))(U||He)}})();static \u0275prov=s.jDH({token:He,factory:He.\u0275fac})}return He})();class Z{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new s.bkB;onLangChange=new s.bkB;onDefaultLangChange=new s.bkB}const me=new s.nKC("USE_STORE"),ze=new s.nKC("USE_DEFAULT_LANG"),Ue=new s.nKC("DEFAULT_LANGUAGE"),it=new s.nKC("USE_EXTEND");let Me=(()=>{class He{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;isolate;extend;loadingTranslations;pending=!1;_onTranslationChange=new s.bkB;_onLangChange=new s.bkB;_onDefaultLangChange=new s.bkB;_defaultLang;_currentLang;_langs=[];_translations={};_translationRequests={};get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(Te){this.isolate?this._defaultLang=Te:this.store.defaultLang=Te}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(Te){this.isolate?this._currentLang=Te:this.store.currentLang=Te}get langs(){return this.isolate?this._langs:this.store.langs}set langs(Te){this.isolate?this._langs=Te:this.store.langs=Te}get translations(){return this.isolate?this._translations:this.store.translations}set translations(Te){this.isolate?this._translations=Te:this.store.translations=Te}constructor(Te,se,U,Y,be,Qe=!0,Ce=!1,Ne=!1,lt){this.store=Te,this.currentLoader=se,this.compiler=U,this.parser=Y,this.missingTranslationHandler=be,this.useDefaultLang=Qe,this.isolate=Ce,this.extend=Ne,lt&&this.setDefaultLang(lt)}setDefaultLang(Te){if(Te===this.defaultLang)return;let se=this.retrieveTranslations(Te);typeof se<"u"?(null==this.defaultLang&&(this.defaultLang=Te),se.pipe((0,_.s)(1)).subscribe(U=>{this.changeDefaultLang(Te)})):this.changeDefaultLang(Te)}getDefaultLang(){return this.defaultLang}use(Te){if(Te===this.currentLang)return(0,c.of)(this.translations[Te]);let se=this.retrieveTranslations(Te);return typeof se<"u"?(this.currentLang||(this.currentLang=Te),se.pipe((0,_.s)(1)).subscribe(U=>{this.changeLang(Te)}),se):(this.changeLang(Te),(0,c.of)(this.translations[Te]))}retrieveTranslations(Te){let se;return(typeof this.translations[Te]>"u"||this.extend)&&(this._translationRequests[Te]=this._translationRequests[Te]||this.getTranslation(Te),se=this._translationRequests[Te]),se}getTranslation(Te){this.pending=!0;const se=this.currentLoader.getTranslation(Te).pipe(S(1),(0,_.s)(1));return this.loadingTranslations=se.pipe((0,K.T)(U=>this.compiler.compileTranslations(U,Te)),S(1),(0,_.s)(1)),this.loadingTranslations.subscribe({next:U=>{this.translations[Te]=this.extend&&this.translations[Te]?{...U,...this.translations[Te]}:U,this.updateLangs(),this.pending=!1},error:U=>{this.pending=!1}}),se}setTranslation(Te,se,U=!1){se=this.compiler.compileTranslations(se,Te),this.translations[Te]=(U||this.extend)&&this.translations[Te]?ue(this.translations[Te],se):se,this.updateLangs(),this.onTranslationChange.emit({lang:Te,translations:this.translations[Te]})}getLangs(){return this.langs}addLangs(Te){Te.forEach(se=>{-1===this.langs.indexOf(se)&&this.langs.push(se)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(Te,se,U){let Y;if(se instanceof Array){let be={},Qe=!1;for(let Ce of se)be[Ce]=this.getParsedResult(Te,Ce,U),(0,I.A)(be[Ce])&&(Qe=!0);if(Qe){const Ce=se.map(Ne=>(0,I.A)(be[Ne])?be[Ne]:(0,c.of)(be[Ne]));return(0,v.p)(Ce).pipe((0,K.T)(Ne=>{let lt={};return Ne.forEach((Ot,We)=>{lt[se[We]]=Ot}),lt}))}return be}if(Te&&(Y=this.parser.interpolate(this.parser.getValue(Te,se),U)),typeof Y>"u"&&null!=this.defaultLang&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(Y=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],se),U)),typeof Y>"u"){let be={key:se,translateService:this};typeof U<"u"&&(be.interpolateParams=U),Y=this.missingTranslationHandler.handle(be)}return typeof Y<"u"?Y:se}get(Te,se){if(!ne(Te)||!Te.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe((0,oe.H)(U=>(U=this.getParsedResult(U,Te,se),(0,I.A)(U)?U:(0,c.of)(U))));{let U=this.getParsedResult(this.translations[this.currentLang],Te,se);return(0,I.A)(U)?U:(0,c.of)(U)}}getStreamOnTranslationChange(Te,se){if(!ne(Te)||!Te.length)throw new Error('Parameter "key" required');return(0,T.x)((0,M.v)(()=>this.get(Te,se)),this.onTranslationChange.pipe((0,ve.n)(U=>{const Y=this.getParsedResult(U.translations,Te,se);return"function"==typeof Y.subscribe?Y:(0,c.of)(Y)})))}stream(Te,se){if(!ne(Te)||!Te.length)throw new Error('Parameter "key" required');return(0,T.x)((0,M.v)(()=>this.get(Te,se)),this.onLangChange.pipe((0,ve.n)(U=>{const Y=this.getParsedResult(U.translations,Te,se);return(0,I.A)(Y)?Y:(0,c.of)(Y)})))}instant(Te,se){if(!ne(Te)||!Te.length)throw new Error('Parameter "key" required');let U=this.getParsedResult(this.translations[this.currentLang],Te,se);if((0,I.A)(U)){if(Te instanceof Array){let Y={};return Te.forEach((be,Qe)=>{Y[Te[Qe]]=Te[Qe]}),Y}return Te}return U}set(Te,se,U=this.currentLang){this.translations[U][Te]=this.compiler.compile(se,U),this.updateLangs(),this.onTranslationChange.emit({lang:U,translations:this.translations[U]})}changeLang(Te){this.currentLang=Te,this.onLangChange.emit({lang:Te,translations:this.translations[Te]}),null==this.defaultLang&&this.changeDefaultLang(Te)}changeDefaultLang(Te){this.defaultLang=Te,this.onDefaultLangChange.emit({lang:Te,translations:this.translations[Te]})}reloadLang(Te){return this.resetLang(Te),this.getTranslation(Te)}resetLang(Te){this._translationRequests[Te]=void 0,this.translations[Te]=void 0}getBrowserLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let Te=window.navigator.languages?window.navigator.languages[0]:null;return Te=Te||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,typeof Te>"u"?void 0:(-1!==Te.indexOf("-")&&(Te=Te.split("-")[0]),-1!==Te.indexOf("_")&&(Te=Te.split("_")[0]),Te)}getBrowserCultureLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let Te=window.navigator.languages?window.navigator.languages[0]:null;return Te=Te||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,Te}static \u0275fac=function(se){return new(se||He)(s.KVO(Z),s.KVO(ae),s.KVO(P),s.KVO(q),s.KVO(W),s.KVO(ze),s.KVO(me),s.KVO(it),s.KVO(Ue))};static \u0275prov=s.jDH({token:He,factory:He.\u0275fac})}return He})(),Oe=(()=>{class He{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(Te,se){this.translate=Te,this._ref=se}updateValue(Te,se,U){let Y=be=>{this.value=void 0!==be?be:Te,this.lastKey=Te,this._ref.markForCheck()};if(U){let be=this.translate.getParsedResult(U,Te,se);(0,I.A)(be.subscribe)?be.subscribe(Y):Y(be)}this.translate.get(Te,se).subscribe(Y)}transform(Te,...se){if(!Te||!Te.length)return Te;if(J(Te,this.lastKey)&&J(se,this.lastParams))return this.value;let U;if(ne(se[0])&&se.length)if("string"==typeof se[0]&&se[0].length){let Y=se[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g,'"$2":').replace(/:(\s)?(\')(.*?)(\')/g,':"$3"');try{U=JSON.parse(Y)}catch{throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${se[0]}`)}}else"object"==typeof se[0]&&!Array.isArray(se[0])&&(U=se[0]);return this.lastKey=Te,this.lastParams=se,this.updateValue(Te,U),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(Y=>{this.lastKey&&Y.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(Te,U,Y.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(Y=>{this.lastKey&&(this.lastKey=null,this.updateValue(Te,U,Y.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(Te,U))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(se){return new(se||He)(s.rXU(Me,16),s.rXU(s.gRc,16))};static \u0275pipe=s.EJ8({name:"translate",type:He,pure:!1});static \u0275prov=s.jDH({token:He,factory:He.\u0275fac})}return He})(),Xe=(()=>{class He{static forRoot(Te={}){return{ngModule:He,providers:[Te.loader||{provide:ae,useClass:de},Te.compiler||{provide:P,useClass:ee},Te.parser||{provide:q,useClass:F},Te.missingTranslationHandler||{provide:W,useClass:$},Z,{provide:me,useValue:Te.isolate},{provide:ze,useValue:Te.useDefaultLang},{provide:it,useValue:Te.extend},{provide:Ue,useValue:Te.defaultLanguage},Me]}}static forChild(Te={}){return{ngModule:He,providers:[Te.loader||{provide:ae,useClass:de},Te.compiler||{provide:P,useClass:ee},Te.parser||{provide:q,useClass:F},Te.missingTranslationHandler||{provide:W,useClass:$},{provide:me,useValue:Te.isolate},{provide:ze,useValue:Te.useDefaultLang},{provide:it,useValue:Te.extend},{provide:Ue,useValue:Te.defaultLanguage},Me]}}static \u0275fac=function(se){return new(se||He)};static \u0275mod=s.$C({type:He});static \u0275inj=s.G2t({})}return He})()},8971:(at,ge,d)=>{d.d(ge,{OA:()=>s,WL:()=>I,u$:()=>c});const s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},c=v=>(...T)=>({_$litDirective$:v,values:T});class I{constructor(T){}get _$AU(){return this._$AM._$AU}_$AT(T,M,_){this._$Ct=T,this._$AM=M,this._$Ci=_}_$AS(T,M){return this.update(T,M)}update(T,M){return this.render(...M)}}},9009:(at,ge,d)=>{d.d(ge,{XX:()=>rt,c0:()=>ne,ge:()=>Xe,qy:()=>$,s6:()=>G});const s=globalThis,c=s.trustedTypes,I=c?c.createPolicy("lit-html",{createHTML:Te=>Te}):void 0,v="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,M="?"+T,_=`<${M}>`,b=document,E=()=>b.createComment(""),N=Te=>null===Te||"object"!=typeof Te&&"function"!=typeof Te,O=Array.isArray,le=Te=>O(Te)||"function"==typeof Te?.[Symbol.iterator],V="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,K=/>/g,oe=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ve=/'/g,ae=/"/g,de=/^(?:script|style|textarea|title)$/i,W=Te=>(se,...U)=>({_$litType$:Te,strings:se,values:U}),$=W(1),ne=(W(2),Symbol.for("lit-noChange")),G=Symbol.for("lit-nothing"),ue=new WeakMap,q=b.createTreeWalker(b,129);function F(Te,se){if(!Array.isArray(Te)||!Te.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==I?I.createHTML(se):se}const P=(Te,se)=>{const U=Te.length-1,Y=[];let be,Qe=2===se?"<svg>":"",Ce=B;for(let Ne=0;Ne<U;Ne++){const lt=Te[Ne];let Ot,We,pe=-1,j=0;for(;j<lt.length&&(Ce.lastIndex=j,We=Ce.exec(lt),null!==We);)j=Ce.lastIndex,Ce===B?"!--"===We[1]?Ce=S:void 0!==We[1]?Ce=K:void 0!==We[2]?(de.test(We[2])&&(be=RegExp("</"+We[2],"g")),Ce=oe):void 0!==We[3]&&(Ce=oe):Ce===oe?">"===We[0]?(Ce=be??B,pe=-1):void 0===We[1]?pe=-2:(pe=Ce.lastIndex-We[2].length,Ot=We[1],Ce=void 0===We[3]?oe:'"'===We[3]?ae:ve):Ce===ae||Ce===ve?Ce=oe:Ce===S||Ce===K?Ce=B:(Ce=oe,be=void 0);const ce=Ce===oe&&Te[Ne+1].startsWith("/>")?" ":"";Qe+=Ce===B?lt+_:pe>=0?(Y.push(Ot),lt.slice(0,pe)+v+lt.slice(pe)+T+ce):lt+T+(-2===pe?Ne:ce)}return[F(Te,Qe+(Te[U]||"<?>")+(2===se?"</svg>":"")),Y]};class ee{constructor({strings:se,_$litType$:U},Y){let be;this.parts=[];let Qe=0,Ce=0;const Ne=se.length-1,lt=this.parts,[Ot,We]=P(se,U);if(this.el=ee.createElement(Ot,Y),q.currentNode=this.el.content,2===U){const pe=this.el.content.firstChild;pe.replaceWith(...pe.childNodes)}for(;null!==(be=q.nextNode())&&lt.length<Ne;){if(1===be.nodeType){if(be.hasAttributes())for(const pe of be.getAttributeNames())if(pe.endsWith(v)){const j=We[Ce++],ce=be.getAttribute(pe).split(T),ke=/([.?@])?(.*)/.exec(j);lt.push({type:1,index:Qe,name:ke[2],strings:ce,ctor:"."===ke[1]?it:"?"===ke[1]?Me:"@"===ke[1]?re:Ue}),be.removeAttribute(pe)}else pe.startsWith(T)&&(lt.push({type:6,index:Qe}),be.removeAttribute(pe));if(de.test(be.tagName)){const pe=be.textContent.split(T),j=pe.length-1;if(j>0){be.textContent=c?c.emptyScript:"";for(let ce=0;ce<j;ce++)be.append(pe[ce],E()),q.nextNode(),lt.push({type:2,index:++Qe});be.append(pe[j],E())}}}else if(8===be.nodeType)if(be.data===M)lt.push({type:2,index:Qe});else{let pe=-1;for(;-1!==(pe=be.data.indexOf(T,pe+1));)lt.push({type:7,index:Qe}),pe+=T.length-1}Qe++}}static createElement(se,U){const Y=b.createElement("template");return Y.innerHTML=se,Y}}function Z(Te,se,U=Te,Y){if(se===ne)return se;let be=void 0!==Y?U._$Co?.[Y]:U._$Cl;const Qe=N(se)?void 0:se._$litDirective$;return be?.constructor!==Qe&&(be?._$AO?.(!1),void 0===Qe?be=void 0:(be=new Qe(Te),be._$AT(Te,U,Y)),void 0!==Y?(U._$Co??=[])[Y]=be:U._$Cl=be),void 0!==be&&(se=Z(Te,be._$AS(Te,se.values),be,Y)),se}class me{constructor(se,U){this._$AV=[],this._$AN=void 0,this._$AD=se,this._$AM=U}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(se){const{el:{content:U},parts:Y}=this._$AD,be=(se?.creationScope??b).importNode(U,!0);q.currentNode=be;let Qe=q.nextNode(),Ce=0,Ne=0,lt=Y[0];for(;void 0!==lt;){if(Ce===lt.index){let Ot;2===lt.type?Ot=new ze(Qe,Qe.nextSibling,this,se):1===lt.type?Ot=new lt.ctor(Qe,lt.name,lt.strings,this,se):6===lt.type&&(Ot=new Oe(Qe,this,se)),this._$AV.push(Ot),lt=Y[++Ne]}Ce!==lt?.index&&(Qe=q.nextNode(),Ce++)}return q.currentNode=b,be}p(se){let U=0;for(const Y of this._$AV)void 0!==Y&&(void 0!==Y.strings?(Y._$AI(se,Y,U),U+=Y.strings.length-2):Y._$AI(se[U])),U++}}class ze{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(se,U,Y,be){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=se,this._$AB=U,this._$AM=Y,this.options=be,this._$Cv=be?.isConnected??!0}get parentNode(){let se=this._$AA.parentNode;const U=this._$AM;return void 0!==U&&11===se?.nodeType&&(se=U.parentNode),se}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(se,U=this){se=Z(this,se,U),N(se)?se===G||null==se||""===se?(this._$AH!==G&&this._$AR(),this._$AH=G):se!==this._$AH&&se!==ne&&this._(se):void 0!==se._$litType$?this.$(se):void 0!==se.nodeType?this.T(se):le(se)?this.k(se):this._(se)}S(se){return this._$AA.parentNode.insertBefore(se,this._$AB)}T(se){this._$AH!==se&&(this._$AR(),this._$AH=this.S(se))}_(se){this._$AH!==G&&N(this._$AH)?this._$AA.nextSibling.data=se:this.T(b.createTextNode(se)),this._$AH=se}$(se){const{values:U,_$litType$:Y}=se,be="number"==typeof Y?this._$AC(se):(void 0===Y.el&&(Y.el=ee.createElement(F(Y.h,Y.h[0]),this.options)),Y);if(this._$AH?._$AD===be)this._$AH.p(U);else{const Qe=new me(be,this),Ce=Qe.u(this.options);Qe.p(U),this.T(Ce),this._$AH=Qe}}_$AC(se){let U=ue.get(se.strings);return void 0===U&&ue.set(se.strings,U=new ee(se)),U}k(se){O(this._$AH)||(this._$AH=[],this._$AR());const U=this._$AH;let Y,be=0;for(const Qe of se)be===U.length?U.push(Y=new ze(this.S(E()),this.S(E()),this,this.options)):Y=U[be],Y._$AI(Qe),be++;be<U.length&&(this._$AR(Y&&Y._$AB.nextSibling,be),U.length=be)}_$AR(se=this._$AA.nextSibling,U){for(this._$AP?.(!1,!0,U);se&&se!==this._$AB;){const Y=se.nextSibling;se.remove(),se=Y}}setConnected(se){void 0===this._$AM&&(this._$Cv=se,this._$AP?.(se))}}class Ue{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(se,U,Y,be,Qe){this.type=1,this._$AH=G,this._$AN=void 0,this.element=se,this.name=U,this._$AM=be,this.options=Qe,Y.length>2||""!==Y[0]||""!==Y[1]?(this._$AH=Array(Y.length-1).fill(new String),this.strings=Y):this._$AH=G}_$AI(se,U=this,Y,be){const Qe=this.strings;let Ce=!1;if(void 0===Qe)se=Z(this,se,U,0),Ce=!N(se)||se!==this._$AH&&se!==ne,Ce&&(this._$AH=se);else{const Ne=se;let lt,Ot;for(se=Qe[0],lt=0;lt<Qe.length-1;lt++)Ot=Z(this,Ne[Y+lt],U,lt),Ot===ne&&(Ot=this._$AH[lt]),Ce||=!N(Ot)||Ot!==this._$AH[lt],Ot===G?se=G:se!==G&&(se+=(Ot??"")+Qe[lt+1]),this._$AH[lt]=Ot}Ce&&!be&&this.j(se)}j(se){se===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,se??"")}}class it extends Ue{constructor(){super(...arguments),this.type=3}j(se){this.element[this.name]=se===G?void 0:se}}class Me extends Ue{constructor(){super(...arguments),this.type=4}j(se){this.element.toggleAttribute(this.name,!!se&&se!==G)}}class re extends Ue{constructor(se,U,Y,be,Qe){super(se,U,Y,be,Qe),this.type=5}_$AI(se,U=this){if((se=Z(this,se,U,0)??G)===ne)return;const Y=this._$AH,be=se===G&&Y!==G||se.capture!==Y.capture||se.once!==Y.once||se.passive!==Y.passive,Qe=se!==G&&(Y===G||be);be&&this.element.removeEventListener(this.name,this,Y),Qe&&this.element.addEventListener(this.name,this,se),this._$AH=se}handleEvent(se){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,se):this._$AH.handleEvent(se)}}class Oe{constructor(se,U,Y){this.element=se,this.type=6,this._$AN=void 0,this._$AM=U,this.options=Y}get _$AU(){return this._$AM._$AU}_$AI(se){Z(this,se)}}const Xe={P:v,A:T,C:M,M:1,L:P,R:me,D:le,V:Z,I:ze,H:Ue,N:Me,U:re,B:it,F:Oe},He=s.litHtmlPolyfillSupport;He?.(ee,ze),(s.litHtmlVersions??=[]).push("3.1.2");const rt=(Te,se,U)=>{const Y=U?.renderBefore??se;let be=Y._$litPart$;if(void 0===be){const Qe=U?.renderBefore??null;Y._$litPart$=be=new ze(se.insertBefore(E(),Qe),Qe,void 0,U??{})}return be._$AI(Te),be}},9559:(at,ge,d)=>{d.d(ge,{MZ:()=>v,wk:()=>T});var s=d(6693);const c={attribute:!0,type:String,converter:s.W3,reflect:!1,hasChanged:s.Ec},I=(M=c,_,b)=>{const{kind:E,metadata:N}=b;let O=globalThis.litPropertyMetadata.get(N);if(void 0===O&&globalThis.litPropertyMetadata.set(N,O=new Map),O.set(b.name,M),"accessor"===E){const{name:le}=b;return{set(V){const B=_.get.call(this);_.set.call(this,V),this.requestUpdate(le,B,M)},init(V){return void 0!==V&&this.P(le,void 0,M),V}}}if("setter"===E){const{name:le}=b;return function(V){const B=this[le];_.call(this,V),this.requestUpdate(le,B,M)}}throw Error("Unsupported decorator location: "+E)};function v(M){return(_,b)=>"object"==typeof b?I(M,_,b):((E,N,O)=>{const le=N.hasOwnProperty(O);return N.constructor.createProperty(O,le?{...E,wrapped:!0}:E),le?Object.getOwnPropertyDescriptor(N,O):void 0})(M,_,b)}function T(M){return v({...M,state:!0,attribute:!1})}},3402:(at,ge,d)=>{d.d(ge,{H:()=>I});var s=d(9009),c=d(8971);const I=(0,c.u$)(class extends c.WL{constructor(v){if(super(v),v.type!==c.OA.ATTRIBUTE||"class"!==v.name||v.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(v){return" "+Object.keys(v).filter(T=>v[T]).join(" ")+" "}update(v,[T]){if(void 0===this.st){this.st=new Set,void 0!==v.strings&&(this.nt=new Set(v.strings.join(" ").split(/\s/).filter(_=>""!==_)));for(const _ in T)T[_]&&!this.nt?.has(_)&&this.st.add(_);return this.render(T)}const M=v.element.classList;for(const _ of this.st)_ in T||(M.remove(_),this.st.delete(_));for(const _ in T){const b=!!T[_];b===this.st.has(_)||this.nt?.has(_)||(b?(M.add(_),this.st.add(_)):(M.remove(_),this.st.delete(_)))}return s.c0}})},6271:(at,ge,d)=>{d.d(ge,{J:()=>c});var s=d(9009);const c=I=>I??s.s6},4229:(at,ge,d)=>{d.d(ge,{u:()=>de});var s=d(9009),c=d(8971);const{I}=s.ge,O=()=>document.createComment(""),le=(W,$,J)=>{const ne=W._$AA.parentNode,G=void 0===$?W._$AB:$._$AA;if(void 0===J){const ue=ne.insertBefore(O(),G),q=ne.insertBefore(O(),G);J=new I(ue,q,W,W.options)}else{const ue=J._$AB.nextSibling,q=J._$AM,F=q!==W;if(F){let P;J._$AQ?.(W),J._$AM=W,void 0!==J._$AP&&(P=W._$AU)!==q._$AU&&J._$AP(P)}if(ue!==G||F){let P=J._$AA;for(;P!==ue;){const ee=P.nextSibling;ne.insertBefore(P,G),P=ee}}}return J},V=(W,$,J=W)=>(W._$AI($,J),W),B={},oe=W=>{W._$AP?.(!1,!0);let $=W._$AA;const J=W._$AB.nextSibling;for(;$!==J;){const ne=$.nextSibling;$.remove(),$=ne}},ae=(W,$,J)=>{const ne=new Map;for(let G=$;G<=J;G++)ne.set(W[G],G);return ne},de=(0,c.u$)(class extends c.WL{constructor(W){if(super(W),W.type!==c.OA.CHILD)throw Error("repeat() can only be used in text expressions")}dt(W,$,J){let ne;void 0===J?J=$:void 0!==$&&(ne=$);const G=[],ue=[];let q=0;for(const F of W)G[q]=ne?ne(F,q):q,ue[q]=J(F,q),q++;return{values:ue,keys:G}}render(W,$,J){return this.dt(W,$,J).values}update(W,[$,J,ne]){const G=(W=>W._$AH)(W),{values:ue,keys:q}=this.dt($,J,ne);if(!Array.isArray(G))return this.ut=q,ue;const F=this.ut??=[],P=[];let ee,Z,me=0,ze=G.length-1,Ue=0,it=ue.length-1;for(;me<=ze&&Ue<=it;)if(null===G[me])me++;else if(null===G[ze])ze--;else if(F[me]===q[Ue])P[Ue]=V(G[me],ue[Ue]),me++,Ue++;else if(F[ze]===q[it])P[it]=V(G[ze],ue[it]),ze--,it--;else if(F[me]===q[it])P[it]=V(G[me],ue[it]),le(W,P[it+1],G[me]),me++,it--;else if(F[ze]===q[Ue])P[Ue]=V(G[ze],ue[Ue]),le(W,G[me],G[ze]),ze--,Ue++;else if(void 0===ee&&(ee=ae(q,Ue,it),Z=ae(F,me,ze)),ee.has(F[me]))if(ee.has(F[ze])){const Me=Z.get(q[Ue]),re=void 0!==Me?G[Me]:null;if(null===re){const Oe=le(W,G[me]);V(Oe,ue[Ue]),P[Ue]=Oe}else P[Ue]=V(re,ue[Ue]),le(W,G[me],re),G[Me]=null;Ue++}else oe(G[ze]),ze--;else oe(G[me]),me++;for(;Ue<=it;){const Me=le(W,P[it+1]);V(Me,ue[Ue]),P[Ue++]=Me}for(;me<=ze;){const Me=G[me++];null!==Me&&oe(Me)}return this.ut=q,((W,$=B)=>{W._$AH=$})(W,P),s.c0}})},8324:(at,ge,d)=>{d.d(ge,{WF:()=>I,AH:()=>s.AH,qy:()=>c.qy,s6:()=>c.s6});var s=d(6693),c=d(9009);class I extends s.mN{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const _=super.createRenderRoot();return this.renderOptions.renderBefore??=_.firstChild,_}update(_){const b=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(_),this._$Do=(0,c.XX)(b,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return c.c0}}I._$litElement$=!0,I.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:I});const v=globalThis.litElementPolyfillSupport;v?.({LitElement:I}),(globalThis.litElementVersions??=[]).push("4.0.4")},2341:(at,ge,d)=>{d.d(ge,{f6:()=>re,Ov:()=>se,$R:()=>ze,f8:()=>Xe});var s=d(4438),c=d(4412),I=d(7673),v=d(2806),T=d(7786),M=d(7468),_=d(6354),b=d(5558),E=d(9437),N=d(6365),O=d(1594),le=d(1397),V=d(9974),B=d(4360),K=d(5245),oe=d(6697),ve=d(8141),ae=d(803);let W=(()=>{class be{constructor(){this.strategiesSource=new c.t({}),this.strategies$=this.strategiesSource.asObservable()}static#e=this.\u0275fac=function(Ne){return new(Ne||be)};static#t=this.\u0275prov=s.jDH({token:be,factory:be.\u0275fac})}return be})();const $=new s.nKC("USE_CONFIGURATION_STORE");let J=(()=>{class be{constructor(Ce=!1,Ne){this.isolate=Ce,this.configurationStore=Ne,this.strategiesSource=this.isolate?new c.t({}):this.configurationStore.strategiesSource,this.strategies$=this.strategiesSource.asObservable(),this.onAuthorisedDefaultStrategy=this.isolate?void 0:this.configurationStore.onAuthorisedDefaultStrategy,this.onUnAuthorisedDefaultStrategy=this.isolate?void 0:this.configurationStore.onUnAuthorisedDefaultStrategy}setDefaultOnAuthorizedStrategy(Ce){this.isolate?this.onAuthorisedDefaultStrategy=this.getDefinedStrategy(Ce):(this.configurationStore.onAuthorisedDefaultStrategy=this.getDefinedStrategy(Ce),this.onAuthorisedDefaultStrategy=this.configurationStore.onAuthorisedDefaultStrategy)}setDefaultOnUnauthorizedStrategy(Ce){this.isolate?this.onUnAuthorisedDefaultStrategy=this.getDefinedStrategy(Ce):(this.configurationStore.onUnAuthorisedDefaultStrategy=this.getDefinedStrategy(Ce),this.onUnAuthorisedDefaultStrategy=this.configurationStore.onUnAuthorisedDefaultStrategy)}addPermissionStrategy(Ce,Ne){this.strategiesSource.value[Ce]=Ne}getStrategy(Ce){return this.strategiesSource.value[Ce]}getAllStrategies(){return this.strategiesSource.value}getDefinedStrategy(Ce){if(this.strategiesSource.value[Ce]||this.isPredefinedStrategy(Ce))return Ce;throw new Error(`No ' ${Ce} ' strategy is found please define one`)}isPredefinedStrategy(Ce){return"show"===Ce||"remove"===Ce}static#e=this.\u0275fac=function(Ne){return new(Ne||be)(s.KVO($),s.KVO(W))};static#t=this.\u0275prov=s.jDH({token:be,factory:be.\u0275fac})}return be})();function ne(be){return"function"==typeof be}function G(be){if("[object Object]"!==Object.prototype.toString.call(be))return!1;{const Qe=Object.getPrototypeOf(be);return null===Qe||Qe===Object.prototype}}function ue(be){return!!be&&"string"==typeof be}function q(be){return"boolean"==typeof be}function P(be){return Array.isArray(be)?be.length>0:!!be}function ee(be){return ue(be)?[be]:be}let Z=(()=>{class be{constructor(){this.permissionsSource=new c.t({}),this.permissions$=this.permissionsSource.asObservable()}static#e=this.\u0275fac=function(Ne){return new(Ne||be)};static#t=this.\u0275prov=s.jDH({token:be,factory:be.\u0275fac})}return be})();const me=new s.nKC("USE_PERMISSIONS_STORE");let ze=(()=>{class be{constructor(Ce=!1,Ne){this.isolate=Ce,this.permissionsStore=Ne,this.permissionsSource=this.isolate?new c.t({}):this.permissionsStore.permissionsSource,this.permissions$=this.permissionsSource.asObservable()}flushPermissions(){this.permissionsSource.next({})}hasPermission(Ce){return!Ce||Array.isArray(Ce)&&0===Ce.length?Promise.resolve(!0):(Ce=ee(Ce),this.hasArrayPermission(Ce))}loadPermissions(Ce,Ne){const lt=Ce.reduce((Ot,We)=>this.reducePermission(Ot,We,Ne),{});this.permissionsSource.next(lt)}addPermission(Ce,Ne){if(Array.isArray(Ce)){const lt=Ce.reduce((Ot,We)=>this.reducePermission(Ot,We,Ne),this.permissionsSource.value);this.permissionsSource.next(lt)}else{const lt=this.reducePermission(this.permissionsSource.value,Ce,Ne);this.permissionsSource.next(lt)}}removePermission(Ce){const Ne={...this.permissionsSource.value};delete Ne[Ce],this.permissionsSource.next(Ne)}getPermission(Ce){return this.permissionsSource.value[Ce]}getPermissions(){return this.permissionsSource.value}reducePermission(Ce,Ne,lt){return lt&&ne(lt)?{...Ce,[Ne]:{name:Ne,validationFunction:lt}}:{...Ce,[Ne]:{name:Ne}}}hasArrayPermission(Ce){const Ne=Ce.map(lt=>{if(this.hasPermissionValidationFunction(lt)){const Ot=this.permissionsSource.value[lt].validationFunction,We={...this.permissionsSource.value};return(0,I.of)(null).pipe((0,_.T)(()=>Ot(lt,We)),(0,b.n)(pe=>q(pe)?(0,I.of)(pe):pe),(0,E.W)(()=>(0,I.of)(!1)))}return(0,I.of)(!!this.permissionsSource.value[lt])});return(0,v.H)(Ne).pipe((0,N.U)(),(0,O.$)(lt=>!1!==lt,!1),(0,_.T)(lt=>!1!==lt)).toPromise().then(lt=>lt)}hasPermissionValidationFunction(Ce){return!!this.permissionsSource.value[Ce]&&!!this.permissionsSource.value[Ce].validationFunction&&ne(this.permissionsSource.value[Ce].validationFunction)}static#e=this.\u0275fac=function(Ne){return new(Ne||be)(s.KVO(me),s.KVO(Z))};static#t=this.\u0275prov=s.jDH({token:be,factory:be.\u0275fac})}return be})();class Ue{constructor(){this.rolesSource=new c.t({}),this.roles$=this.rolesSource.asObservable()}}const it=new s.nKC("USE_ROLES_STORE");let Me=(()=>{class be{constructor(Ce=!1,Ne,lt){this.isolate=Ce,this.rolesStore=Ne,this.permissionsService=lt,this.rolesSource=this.isolate?new c.t({}):this.rolesStore.rolesSource,this.roles$=this.rolesSource.asObservable()}addRole(Ce,Ne){const lt={...this.rolesSource.value,[Ce]:{name:Ce,validationFunction:Ne}};this.rolesSource.next(lt)}addRoleWithPermissions(Ce,Ne){this.permissionsService.addPermission(Ne),this.addRole(Ce,Ne)}addRoles(Ce){Object.keys(Ce).forEach((Ne,lt)=>{this.addRole(Ne,Ce[Ne])})}addRolesWithPermissions(Ce){Object.keys(Ce).forEach((Ne,lt)=>{this.addRoleWithPermissions(Ne,Ce[Ne])})}flushRoles(){this.rolesSource.next({})}flushRolesAndPermissions(){this.flushRoles(),this.permissionsService.flushPermissions()}removeRole(Ce){const Ne={...this.rolesSource.value};delete Ne[Ce],this.rolesSource.next(Ne)}getRoles(){return this.rolesSource.value}getRole(Ce){return this.rolesSource.value[Ce]}hasOnlyRoles(Ce){return!Ce||Array.isArray(Ce)&&0===Ce.length?Promise.resolve(!0):(Ce=ee(Ce),Promise.all([this.hasRoleKey(Ce),this.hasRolePermission(this.rolesSource.value,Ce)]).then(([lt,Ot])=>lt||Ot))}hasRoleKey(Ce){const Ne=Ce.map(lt=>{if(this.rolesSource.value[lt]&&this.rolesSource.value[lt].validationFunction&&ne(this.rolesSource.value[lt].validationFunction)&&!function F(be){return"[object Promise]"===Object.prototype.toString.call(be)}(this.rolesSource.value[lt].validationFunction)){const We=this.rolesSource.value[lt].validationFunction,pe={...this.rolesSource.value};return(0,I.of)(null).pipe((0,_.T)(()=>We(lt,pe)),(0,b.n)(j=>q(j)?(0,I.of)(j):j),(0,E.W)(()=>(0,I.of)(!1)))}return(0,I.of)(!1)});return(0,v.H)(Ne).pipe((0,N.U)(),(0,O.$)(lt=>!1!==lt,!1),(0,_.T)(lt=>!1!==lt)).toPromise().then(lt=>lt)}hasRolePermission(Ce,Ne){return(0,v.H)(Ne).pipe((0,le.Z)(lt=>Ce[lt]&&Array.isArray(Ce[lt].validationFunction)?(0,v.H)(Ce[lt].validationFunction).pipe((0,le.Z)(Ot=>this.permissionsService.hasPermission(Ot)),function S(be,Qe){return(0,V.N)((Ce,Ne)=>{let lt=0;Ce.subscribe((0,B._)(Ne,Ot=>{be.call(Qe,Ot,lt++,Ce)||(Ne.next(!1),Ne.complete())},()=>{Ne.next(!0),Ne.complete()}))})}(Ot=>!0===Ot)):(0,I.of)(!1)),(0,O.$)(lt=>!0===lt,!1)).toPromise()}static#e=this.\u0275fac=function(Ne){return new(Ne||be)(s.KVO(it),s.KVO(Ue),s.KVO(ze))};static#t=this.\u0275prov=s.jDH({token:be,factory:be.\u0275fac})}return be})(),re=(()=>{class be{constructor(){this.permissionsAuthorized=new s.bkB,this.permissionsUnauthorized=new s.bkB,this.firstMergeUnusedRun=1,this.permissionsService=(0,s.WQX)(ze),this.configurationService=(0,s.WQX)(J),this.rolesService=(0,s.WQX)(Me),this.viewContainer=(0,s.WQX)(s.c1b),this.changeDetector=(0,s.WQX)(s.gRc),this.templateRef=(0,s.WQX)(s.C4Q)}ngOnInit(){this.viewContainer.clear(),this.initPermissionSubscription=this.validateExceptOnlyPermissions()}ngOnChanges(Ce){const Ne=Ce.ngxPermissionsOnly,lt=Ce.ngxPermissionsExcept;if(Ne||lt){if(Ne&&Ne.firstChange||lt&&lt.firstChange)return;(0,T.h)(this.permissionsService.permissions$,this.rolesService.roles$).pipe((0,K.i)(this.firstMergeUnusedRun),(0,oe.s)(1)).subscribe(()=>{P(this.ngxPermissionsExcept)?this.validateExceptAndOnlyPermissions():P(this.ngxPermissionsOnly)?this.validateOnlyPermissions():this.handleAuthorisedPermission(this.getAuthorisedTemplates())})}}ngOnDestroy(){this.initPermissionSubscription&&this.initPermissionSubscription.unsubscribe()}validateExceptOnlyPermissions(){return(0,T.h)(this.permissionsService.permissions$,this.rolesService.roles$).pipe((0,K.i)(this.firstMergeUnusedRun)).subscribe(()=>{P(this.ngxPermissionsExcept)?this.validateExceptAndOnlyPermissions():P(this.ngxPermissionsOnly)?this.validateOnlyPermissions():this.handleAuthorisedPermission(this.getAuthorisedTemplates())})}validateExceptAndOnlyPermissions(){Promise.all([this.permissionsService.hasPermission(this.ngxPermissionsExcept),this.rolesService.hasOnlyRoles(this.ngxPermissionsExcept)]).then(([Ce,Ne])=>{if(Ce||Ne)this.handleUnauthorisedPermission(this.ngxPermissionsExceptElse||this.ngxPermissionsElse);else{if(this.ngxPermissionsOnly)throw!1;this.handleAuthorisedPermission(this.ngxPermissionsExceptThen||this.ngxPermissionsThen||this.templateRef)}}).catch(()=>{this.ngxPermissionsOnly?this.validateOnlyPermissions():this.handleAuthorisedPermission(this.ngxPermissionsExceptThen||this.ngxPermissionsThen||this.templateRef)})}validateOnlyPermissions(){Promise.all([this.permissionsService.hasPermission(this.ngxPermissionsOnly),this.rolesService.hasOnlyRoles(this.ngxPermissionsOnly)]).then(([Ce,Ne])=>{Ce||Ne?this.handleAuthorisedPermission(this.ngxPermissionsOnlyThen||this.ngxPermissionsThen||this.templateRef):this.handleUnauthorisedPermission(this.ngxPermissionsOnlyElse||this.ngxPermissionsElse)}).catch(()=>{this.handleUnauthorisedPermission(this.ngxPermissionsOnlyElse||this.ngxPermissionsElse)})}handleUnauthorisedPermission(Ce){if(!q(this.currentAuthorizedState)||this.currentAuthorizedState){if(this.currentAuthorizedState=!1,this.permissionsUnauthorized.emit(),this.getUnAuthorizedStrategyInput())return void this.applyStrategyAccordingToStrategyType(this.getUnAuthorizedStrategyInput());this.configurationService.onUnAuthorisedDefaultStrategy&&!this.elseBlockDefined()?this.applyStrategy(this.configurationService.onUnAuthorisedDefaultStrategy):this.showTemplateBlockInView(Ce)}}handleAuthorisedPermission(Ce){if(!q(this.currentAuthorizedState)||!this.currentAuthorizedState){if(this.currentAuthorizedState=!0,this.permissionsAuthorized.emit(),this.getAuthorizedStrategyInput())return void this.applyStrategyAccordingToStrategyType(this.getAuthorizedStrategyInput());this.configurationService.onAuthorisedDefaultStrategy&&!this.thenBlockDefined()?this.applyStrategy(this.configurationService.onAuthorisedDefaultStrategy):this.showTemplateBlockInView(Ce)}}applyStrategyAccordingToStrategyType(Ce){if(!ue(Ce))return ne(Ce)?(this.showTemplateBlockInView(this.templateRef),void Ce(this.templateRef)):void 0;this.applyStrategy(Ce)}showTemplateBlockInView(Ce){this.viewContainer.clear(),Ce&&(this.viewContainer.createEmbeddedView(Ce),this.changeDetector.markForCheck())}getAuthorisedTemplates(){return this.ngxPermissionsOnlyThen||this.ngxPermissionsExceptThen||this.ngxPermissionsThen||this.templateRef}elseBlockDefined(){return!!this.ngxPermissionsExceptElse||!!this.ngxPermissionsElse}thenBlockDefined(){return!!this.ngxPermissionsExceptThen||!!this.ngxPermissionsThen}getAuthorizedStrategyInput(){return this.ngxPermissionsOnlyAuthorisedStrategy||this.ngxPermissionsExceptAuthorisedStrategy||this.ngxPermissionsAuthorisedStrategy}getUnAuthorizedStrategyInput(){return this.ngxPermissionsOnlyUnauthorisedStrategy||this.ngxPermissionsExceptUnauthorisedStrategy||this.ngxPermissionsUnauthorisedStrategy}applyStrategy(Ce){if("show"===Ce)return void this.showTemplateBlockInView(this.templateRef);if("remove"===Ce)return void this.viewContainer.clear();const Ne=this.configurationService.getStrategy(Ce);this.showTemplateBlockInView(this.templateRef),Ne(this.templateRef)}static#e=this.\u0275fac=function(Ne){return new(Ne||be)};static#t=this.\u0275dir=s.FsC({type:be,selectors:[["","ngxPermissionsOnly",""],["","ngxPermissionsExcept",""]],inputs:{ngxPermissionsOnly:"ngxPermissionsOnly",ngxPermissionsOnlyThen:"ngxPermissionsOnlyThen",ngxPermissionsOnlyElse:"ngxPermissionsOnlyElse",ngxPermissionsExcept:"ngxPermissionsExcept",ngxPermissionsExceptElse:"ngxPermissionsExceptElse",ngxPermissionsExceptThen:"ngxPermissionsExceptThen",ngxPermissionsThen:"ngxPermissionsThen",ngxPermissionsElse:"ngxPermissionsElse",ngxPermissionsOnlyAuthorisedStrategy:"ngxPermissionsOnlyAuthorisedStrategy",ngxPermissionsOnlyUnauthorisedStrategy:"ngxPermissionsOnlyUnauthorisedStrategy",ngxPermissionsExceptUnauthorisedStrategy:"ngxPermissionsExceptUnauthorisedStrategy",ngxPermissionsExceptAuthorisedStrategy:"ngxPermissionsExceptAuthorisedStrategy",ngxPermissionsUnauthorisedStrategy:"ngxPermissionsUnauthorisedStrategy",ngxPermissionsAuthorisedStrategy:"ngxPermissionsAuthorisedStrategy"},outputs:{permissionsAuthorized:"permissionsAuthorized",permissionsUnauthorized:"permissionsUnauthorized"},features:[s.OA$]})}return be})();const Xe=(be,Qe)=>{const Ce=(0,s.WQX)(He);return Qe instanceof ae.n1?Ce.hasPermissions(be,Qe):Ce.hasPermissions(be)};let He=(()=>{class be{constructor(Ce,Ne,lt){this.permissionsService=Ce,this.rolesService=Ne,this.router=lt}canActivate(Ce,Ne){return this.hasPermissions(Ce,Ne)}canActivateChild(Ce,Ne){return this.hasPermissions(Ce,Ne)}canLoad(Ce){return this.hasPermissions(Ce)}canMatch(Ce){return this.hasPermissions(Ce)}hasPermissions(Ce,Ne){const Ot=this.transformPermission(Ce&&Ce.data?Ce.data.permissions:{},Ce,Ne);return this.isParameterAvailable(Ot.except)?this.passingExceptPermissionsValidation(Ot,Ce,Ne):!this.isParameterAvailable(Ot.only)||this.passingOnlyPermissionsValidation(Ot,Ce,Ne)}transformPermission(Ce,Ne,lt){return{only:ne(Ce.only)?Ce.only(Ne,lt):ee(Ce.only),except:ne(Ce.except)?Ce.except(Ne,lt):ee(Ce.except),redirectTo:Ce.redirectTo}}isParameterAvailable(Ce){return!!Ce&&Ce.length>0}passingExceptPermissionsValidation(Ce,Ne,lt){if(Ce.redirectTo&&(ne(Ce.redirectTo)||G(Ce.redirectTo)&&!this.isRedirectionWithParameters(Ce.redirectTo))){let Ot="";return(0,v.H)(Ce.except).pipe((0,le.Z)(We=>(0,M.p)([this.permissionsService.hasPermission(We),this.rolesService.hasOnlyRoles(We)]).pipe((0,ve.M)(pe=>{pe.every(ce=>!1===ce)||(Ot=We)}))),(0,O.$)(We=>We.some(pe=>!0===pe),!1),(0,le.Z)(We=>Ot?(this.handleRedirectOfFailedPermission(Ce,Ot,Ne,lt),(0,I.of)(!1)):!We&&Ce.only?this.onlyRedirectCheck(Ce,Ne,lt):(0,I.of)(!We))).toPromise()}return Promise.all([this.permissionsService.hasPermission(Ce.except),this.rolesService.hasOnlyRoles(Ce.except)]).then(([Ot,We])=>Ot||We?(Ce.redirectTo&&this.redirectToAnotherRoute(Ce.redirectTo,Ne,lt),!1):!Ce.only||this.checkOnlyPermissions(Ce,Ne,lt))}redirectToAnotherRoute(Ce,Ne,lt,Ot){const We=ne(Ce)?Ce(Ot,Ne,lt):Ce;if(this.isRedirectionWithParameters(We))return We.navigationCommands=this.transformNavigationCommands(We.navigationCommands,Ne,lt),We.navigationExtras=this.transformNavigationExtras(We.navigationExtras,Ne,lt),void this.router.navigate(We.navigationCommands,We.navigationExtras);Array.isArray(We)?this.router.navigate(We):this.router.navigate([We])}isRedirectionWithParameters(Ce){return G(Ce)&&(!!Ce.navigationCommands||!!Ce.navigationExtras)}transformNavigationCommands(Ce,Ne,lt){return ne(Ce)?Ce(Ne,lt):Ce}transformNavigationExtras(Ce,Ne,lt){return ne(Ce)?Ce(Ne,lt):Ce}onlyRedirectCheck(Ce,Ne,lt){let Ot="";return(0,v.H)(Ce.only).pipe((0,le.Z)(We=>(0,M.p)([this.permissionsService.hasPermission(We),this.rolesService.hasOnlyRoles(We)]).pipe((0,ve.M)(pe=>{pe.every(ce=>!1===ce)&&(Ot=We)}))),(0,O.$)(We=>ne(Ce.redirectTo)?We.some(pe=>!0===pe):We.every(pe=>!1===pe),!1),(0,le.Z)(We=>ne(Ce.redirectTo)?We?(0,I.of)(!0):(this.handleRedirectOfFailedPermission(Ce,Ot,Ne,lt),(0,I.of)(!1)):(Ot&&this.handleRedirectOfFailedPermission(Ce,Ot,Ne,lt),(0,I.of)(!We)))).toPromise()}handleRedirectOfFailedPermission(Ce,Ne,lt,Ot){this.isFailedPermissionPropertyOfRedirectTo(Ce,Ne)?this.redirectToAnotherRoute(Ce.redirectTo[Ne],lt,Ot,Ne):ne(Ce.redirectTo)?this.redirectToAnotherRoute(Ce.redirectTo,lt,Ot,Ne):this.redirectToAnotherRoute(Ce.redirectTo.default,lt,Ot,Ne)}isFailedPermissionPropertyOfRedirectTo(Ce,Ne){return!!Ce.redirectTo&&Ce.redirectTo[Ne]}checkOnlyPermissions(Ce,Ne,lt){const Ot={...Ce};return Promise.all([this.permissionsService.hasPermission(Ot.only),this.rolesService.hasOnlyRoles(Ot.only)]).then(([We,pe])=>!(!We&&!pe&&(Ot.redirectTo&&this.redirectToAnotherRoute(Ot.redirectTo,Ne,lt),1)))}passingOnlyPermissionsValidation(Ce,Ne,lt){return ne(Ce.redirectTo)||G(Ce.redirectTo)&&!this.isRedirectionWithParameters(Ce.redirectTo)?this.onlyRedirectCheck(Ce,Ne,lt):this.checkOnlyPermissions(Ce,Ne,lt)}static#e=this.\u0275fac=function(Ne){return new(Ne||be)(s.KVO(ze),s.KVO(Me),s.KVO(ae.Ix))};static#t=this.\u0275prov=s.jDH({token:be,factory:be.\u0275fac})}return be})(),se=(()=>{class be{static forRoot(Ce={}){return{ngModule:be,providers:[Z,Ue,W,ze,He,Me,J,{provide:me,useValue:Ce.permissionsIsolate},{provide:it,useValue:Ce.rolesIsolate},{provide:$,useValue:Ce.configurationIsolate}]}}static forChild(Ce={}){return{ngModule:be,providers:[{provide:me,useValue:Ce.permissionsIsolate},{provide:it,useValue:Ce.rolesIsolate},{provide:$,useValue:Ce.configurationIsolate},J,ze,Me,He]}}static#e=this.\u0275fac=function(Ne){return new(Ne||be)};static#t=this.\u0275mod=s.$C({type:be});static#n=this.\u0275inj=s.G2t({})}return be})()},1635:(at,ge,d)=>{function T(Me,re,Oe,Xe){var Te,He=arguments.length,rt=He<3?re:null===Xe?Xe=Object.getOwnPropertyDescriptor(re,Oe):Xe;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)rt=Reflect.decorate(Me,re,Oe,Xe);else for(var se=Me.length-1;se>=0;se--)(Te=Me[se])&&(rt=(He<3?Te(rt):He>3?Te(re,Oe,rt):Te(re,Oe))||rt);return He>3&&rt&&Object.defineProperty(re,Oe,rt),rt}function O(Me,re){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(Me,re)}function le(Me,re,Oe,Xe){return new(Oe||(Oe=Promise))(function(rt,Te){function se(be){try{Y(Xe.next(be))}catch(Qe){Te(Qe)}}function U(be){try{Y(Xe.throw(be))}catch(Qe){Te(Qe)}}function Y(be){be.done?rt(be.value):function He(rt){return rt instanceof Oe?rt:new Oe(function(Te){Te(rt)})}(be.value).then(se,U)}Y((Xe=Xe.apply(Me,re||[])).next())})}function W(Me){return this instanceof W?(this.v=Me,this):new W(Me)}function $(Me,re,Oe){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var He,Xe=Oe.apply(Me,re||[]),rt=[];return He={},Te("next"),Te("throw"),Te("return"),He[Symbol.asyncIterator]=function(){return this},He;function Te(Ce){Xe[Ce]&&(He[Ce]=function(Ne){return new Promise(function(lt,Ot){rt.push([Ce,Ne,lt,Ot])>1||se(Ce,Ne)})})}function se(Ce,Ne){try{!function U(Ce){Ce.value instanceof W?Promise.resolve(Ce.value.v).then(Y,be):Qe(rt[0][2],Ce)}(Xe[Ce](Ne))}catch(lt){Qe(rt[0][3],lt)}}function Y(Ce){se("next",Ce)}function be(Ce){se("throw",Ce)}function Qe(Ce,Ne){Ce(Ne),rt.shift(),rt.length&&se(rt[0][0],rt[0][1])}}function ne(Me){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var Oe,re=Me[Symbol.asyncIterator];return re?re.call(Me):(Me=function K(Me){var re="function"==typeof Symbol&&Symbol.iterator,Oe=re&&Me[re],Xe=0;if(Oe)return Oe.call(Me);if(Me&&"number"==typeof Me.length)return{next:function(){return Me&&Xe>=Me.length&&(Me=void 0),{value:Me&&Me[Xe++],done:!Me}}};throw new TypeError(re?"Object is not iterable.":"Symbol.iterator is not defined.")}(Me),Oe={},Xe("next"),Xe("throw"),Xe("return"),Oe[Symbol.asyncIterator]=function(){return this},Oe);function Xe(rt){Oe[rt]=Me[rt]&&function(Te){return new Promise(function(se,U){!function He(rt,Te,se,U){Promise.resolve(U).then(function(Y){rt({value:Y,done:se})},Te)}(se,U,(Te=Me[rt](Te)).done,Te.value)})}}}d.d(ge,{AQ:()=>$,Cg:()=>T,N3:()=>W,Sn:()=>O,sH:()=>le,xN:()=>ne}),"function"==typeof SuppressedError&&SuppressedError}},at=>{at(at.s=5328)}]);