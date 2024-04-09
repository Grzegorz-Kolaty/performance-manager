"use strict";(self.webpackChunkfrontend_performance_manager=self.webpackChunkfrontend_performance_manager||[]).push([[792],{3089:(rt,pe,h)=>{h.d(pe,{X:()=>s});var s=function(c){return c.user="ROLE_USER",c.supervisor="ROLE_SUPERVISOR",c.admin="ROLE_ADMIN",c}(s||{})},4441:(rt,pe,h)=>{h.d(pe,{n:()=>s});var s=function(c){return c.All="",c.Todo="todo",c.Finished="finished",c.WaitingForStart="waitingForStart",c}(s||{})},7052:(rt,pe,h)=>{h.d(pe,{fS:()=>ve,rp:()=>W,ze:()=>B,DL:()=>b});var s=h(8141),c=h(9437),x=h(8810),y=h(4438),E=h(1626),R=h(2341),_=h(803);let b=(()=>{class re{constructor(G,$,Z){this.http=G,this.permissionsService=$,this.router=Z}getBackendUserProfile(){return console.log(this.userProfile),this.http.get("users/@me").pipe((0,s.M)(G=>{G&&(this.userProfile=G,this.updateAvailableRoles(G.roles),this.setDefaultRole())}),(0,c.W)(G=>(console.error(G),(0,x.$)(()=>new Error(G)))))}updateAvailableRoles(G){this.availableRoles=G}updateCurrentRole(G){this.currentRole=G,this.permissionsService.flushPermissions(),this.permissionsService.loadPermissions([G]),this.router.navigateByUrl("/dashboard")}setDefaultRole(){!this.currentRole&&this.availableRoles&&this.updateCurrentRole(this.availableRoles[0])}getUserRolesById(G){return this.http.get(`users/${G}`)}addRoleByUserId(G,$){return this.http.patch(`users/${G}/roles`,{role:$})}removeRoleByUserId(G,$){return this.http.delete(`users/${G}/roles`,{body:{role:$}})}static#e=this.\u0275fac=function($){return new($||re)(y.KVO(E.Qq),y.KVO(R.$R),y.KVO(_.Ix))};static#t=this.\u0275prov=y.jDH({token:re,factory:re.\u0275fac,providedIn:"root"})}return re})();var A=h(4412),H=h(7673),O=h(8793),se=h(3294),V=h(5558);let B=(()=>{class re{constructor(G){this.http=G,this.searchTemplateValue=new A.t(""),this.submittedQuestionsIds$=new A.t([]),this.isProcessingSomething=!1,this.templates$=(0,H.of)([])}getTemplates(G){return this.http.get("templates",G?{params:{name:G,page:0}}:{params:{page:0}})}getTemplatesById(G){return this.http.get(`templates/${G}`)}createTemplate(G){return this.http.post("templates",G)}addQuestionToSubmission(G){const $=this.submittedQuestionsIds$.getValue();this.submittedQuestionsIds$.next([...$,G])}removeQuestionFromSubmission(G){const $=this.submittedQuestionsIds$.getValue(),Z=$.indexOf(G);Z>-1&&($.splice(Z,1),this.submittedQuestionsIds$.next($))}loadTemplates(){this.templates$=(0,O.x)((0,H.of)([]),this.searchTemplateValue.pipe((0,se.F)(),(0,s.M)(()=>this.isProcessingSomething=!0),(0,V.n)(G=>this.getTemplates(G).pipe((0,c.W)(()=>(0,H.of)([])),(0,s.M)(()=>this.isProcessingSomething=!1)))))}static#e=this.\u0275fac=function($){return new($||re)(y.KVO(E.Qq))};static#t=this.\u0275prov=y.jDH({token:re,factory:re.\u0275fac,providedIn:"root"})}return re})();var T=h(3089);let W=(()=>{class re{constructor(G,$,Z){this.http=G,this.permissionsService=$,this.userService=Z,this.searchQuestionValue=new A.t(""),this.isProcessingSomething=!1,this.questions$=(0,H.of)([])}getQuestions(G){return this.http.get("questions",G?{params:{name:G,page:0}}:{params:{page:0}})}getQuestionById(G){return this.http.get(`questions/${G}`)}createQuestion(G){return this.http.post("questions",G)}editQuestion(G){const Z=Object.keys(this.permissionsService.getPermissions()||{}),ee=(new E.Nl).set("role",Z[0]);return this.http.patch("/questions",G,{params:ee})}saveQuestionAnswer(G,$,Z,ee){this.http.post(`answers/${G}/${$}/${ee}${this.userService.currentRole===T.X.supervisor&&T.X.admin?"/supervisor":""}`,{answer:Z}).subscribe({complete:()=>{this.isProcessingSomething=!1}})}loadQuestions(){this.questions$=(0,O.x)((0,H.of)([]),this.searchQuestionValue.pipe((0,se.F)(),(0,s.M)(()=>this.isProcessingSomething=!0),(0,V.n)(G=>this.getQuestions(G).pipe((0,c.W)(()=>(0,H.of)([])),(0,s.M)(()=>this.isProcessingSomething=!1)))))}static#e=this.\u0275fac=function($){return new($||re)(y.KVO(E.Qq),y.KVO(R.$R),y.KVO(b))};static#t=this.\u0275prov=y.jDH({token:re,factory:re.\u0275fac,providedIn:"root"})}return re})();var te=h(4441);let ve=(()=>{class re{constructor(G){this.http=G,this.formsStatus=new A.t(te.n.All),this.searchFormValue=new A.t(""),this.isProcessingSomething=!1,this.forms$=(0,H.of)([])}getForms(G){return this.http.get("forms",G?{params:{page:0,name:G}}:{params:{page:0}})}getFormById(G){return this.http.get(`forms/${G}`)}removeUserFromForm(G,$){this.isProcessingSomething=!0,this.http.delete(`forms/${G}/users/${$}`).subscribe({complete:()=>{this.loadForms()}})}createFormFromTemplate(G,$){this.isProcessingSomething=!0,this.http.post("forms",$,{params:{templateId:G}}).subscribe({error:()=>{this.isProcessingSomething=!1},complete:()=>{this.isProcessingSomething=!1}})}addUserToForm(G,$){this.http.post(`forms/${G}/users/${$}`,{}).subscribe({complete:()=>{this.loadForms()}})}removeForm(G){this.isProcessingSomething=!0,this.http.delete(`forms/${G}`).subscribe({complete:()=>{this.loadForms()}})}changeFormsStatus(G){this.formsStatus.next(G)}loadForms(){this.forms$=(0,O.x)((0,H.of)([]),this.searchFormValue.pipe((0,se.F)(),(0,s.M)(()=>this.isProcessingSomething=!0),(0,V.n)(G=>this.getForms(G).pipe((0,c.W)(()=>(0,H.of)([])),(0,s.M)(()=>this.isProcessingSomething=!1)))))}static#e=this.\u0275fac=function($){return new($||re)(y.KVO(E.Qq))};static#t=this.\u0275prov=y.jDH({token:re,factory:re.\u0275fac,providedIn:"root"})}return re})()},8569:(rt,pe,h)=>{var s=h(345),c=h(4438);const x={production:!0,BACKEND_API:"http://localhost:8080/api/v1/",EXCLUDED_URLS:["./assets/","/i18n","https://graph.microsoft"],MSAL:{CLIENT_ID:"dc1aea2d-2982-4e88-8756-9cbc93936d3b",AUTHORITY:"https://login.microsoftonline.com/common/",REDIRECT_URI:"/performance-manager/",POST_LOGOUT_URI:"/",SCOPES_ARRAY:["GroupMember.Read.All","People.Read","user.read","User.Read.All","User.ReadBasic.All","presence.read.all","openid","profile","offline_access","email"]}};var y=h(1626),E=h(7554),R=h(3212);class _{static getInteractionStatusFromEvent(l,n){switch(l.eventType){case R.B.LOGIN_START:return E.T$.Login;case R.B.SSO_SILENT_START:return E.T$.SsoSilent;case R.B.ACQUIRE_TOKEN_START:if(l.interactionType===E.X8.Redirect||l.interactionType===E.X8.Popup)return E.T$.AcquireToken;break;case R.B.HANDLE_REDIRECT_START:return E.T$.HandleRedirect;case R.B.LOGOUT_START:return E.T$.Logout;case R.B.SSO_SILENT_SUCCESS:case R.B.SSO_SILENT_FAILURE:if(n&&n!==E.T$.SsoSilent)break;return E.T$.None;case R.B.LOGOUT_END:if(n&&n!==E.T$.Logout)break;return E.T$.None;case R.B.HANDLE_REDIRECT_END:if(n&&n!==E.T$.HandleRedirect)break;return E.T$.None;case R.B.LOGIN_SUCCESS:case R.B.LOGIN_FAILURE:case R.B.ACQUIRE_TOKEN_SUCCESS:case R.B.ACQUIRE_TOKEN_FAILURE:case R.B.RESTORE_FROM_BFCACHE:if(l.interactionType===E.X8.Redirect||l.interactionType===E.X8.Popup){if(n&&n!==E.T$.Login&&n!==E.T$.AcquireToken)break;return E.T$.None}}return null}}var b=h(4064),A=h(1564),H=h(1474),O=h(2030),se=h(2806),V=h(1413),B=h(6129);class T extends V.B{constructor(l=1/0,n=1/0,o=B.U){super(),this._bufferSize=l,this._windowTime=n,this._timestampProvider=o,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=n===1/0,this._bufferSize=Math.max(1,l),this._windowTime=Math.max(1,n)}next(l){const{isStopped:n,_buffer:o,_infiniteTimeWindow:f,_timestampProvider:m,_windowTime:I}=this;n||(o.push(l),!f&&o.push(m.now()+I)),this._trimBuffer(),super.next(l)}_subscribe(l){this._throwIfClosed(),this._trimBuffer();const n=this._innerSubscribe(l),{_infiniteTimeWindow:o,_buffer:f}=this,m=f.slice();for(let I=0;I<m.length&&!l.closed;I+=o?1:2)l.next(m[I]);return this._checkFinalizedStatuses(l),n}_trimBuffer(){const{_bufferSize:l,_timestampProvider:n,_buffer:o,_infiniteTimeWindow:f}=this,m=(f?1:2)*l;if(l<1/0&&m<o.length&&o.splice(0,o.length-m),!f){const I=n.now();let F=0;for(let ae=1;ae<o.length&&o[ae]<=I;ae+=2)F=ae;F&&o.splice(0,F+1)}}}var W=h(4412),te=h(7673),ve=h(983),re=h(177),de=h(6354),G=h(274),$=h(9437),Z=h(5558),ee=h(6697),z=h(5964),le=h(803);const K="@azure/msal-angular",L="3.0.15",P=new c.nKC("MSAL_INSTANCE"),J=new c.nKC("MSAL_GUARD_CONFIG"),X=new c.nKC("MSAL_INTERCEPTOR_CONFIG"),ge=new c.nKC("MSAL_BROADCAST_CONFIG");let Be=(()=>{class d{constructor(n,o){this.instance=n,this.location=o;const f=this.location.path(!0).split("#").pop();f&&(this.redirectHash=`#${f}`),this.instance.initializeWrapperLibrary(E.f7.Angular,L)}initialize(){return(0,se.H)(this.instance.initialize())}acquireTokenPopup(n){return(0,se.H)(this.instance.acquireTokenPopup(n))}acquireTokenRedirect(n){return(0,se.H)(this.instance.acquireTokenRedirect(n))}acquireTokenSilent(n){return(0,se.H)(this.instance.acquireTokenSilent(n))}handleRedirectObservable(n){return(0,se.H)(this.instance.initialize().then(()=>this.instance.handleRedirectPromise(n||this.redirectHash)))}loginPopup(n){return(0,se.H)(this.instance.loginPopup(n))}loginRedirect(n){return(0,se.H)(this.instance.loginRedirect(n))}logout(n){return(0,se.H)(this.instance.logout(n))}logoutRedirect(n){return(0,se.H)(this.instance.logoutRedirect(n))}logoutPopup(n){return(0,se.H)(this.instance.logoutPopup(n))}ssoSilent(n){return(0,se.H)(this.instance.ssoSilent(n))}getLogger(){return this.logger||(this.logger=this.instance.getLogger().clone(K,L)),this.logger}setLogger(n){this.logger=n.clone(K,L),this.instance.setLogger(n)}}return d.\u0275fac=function(n){return new(n||d)(c.KVO(P),c.KVO(re.aZ))},d.\u0275prov=c.jDH({token:d,factory:d.\u0275fac}),d})(),Le=(()=>{class d{constructor(n,o,f){this.msalInstance=n,this.authService=o,this.msalBroadcastConfig=f,this.msalBroadcastConfig&&this.msalBroadcastConfig.eventsToReplay>0?(this.authService.getLogger().verbose(`BroadcastService - eventsToReplay set on BroadcastConfig, replaying the last ${this.msalBroadcastConfig.eventsToReplay} events`),this._msalSubject=new T(this.msalBroadcastConfig.eventsToReplay)):this._msalSubject=new V.B,this.msalSubject$=this._msalSubject.asObservable(),this._inProgress=new W.t(E.T$.Startup),this.inProgress$=this._inProgress.asObservable(),this.msalInstance.addEventCallback(m=>{this._msalSubject.next(m);const I=_.getInteractionStatusFromEvent(m,this._inProgress.value);null!==I&&(this.authService.getLogger().verbose(`BroadcastService - ${m.eventType} results in setting inProgress from ${this._inProgress.value} to ${I}`),this._inProgress.next(I))})}}return d.\u0275fac=function(n){return new(n||d)(c.KVO(P),c.KVO(Be),c.KVO(ge,8))},d.\u0275prov=c.jDH({token:d,factory:d.\u0275fac}),d})(),nt=(()=>{class d{constructor(n,o,f,m,I){this.msalGuardConfig=n,this.msalBroadcastService=o,this.authService=f,this.location=m,this.router=I,this.msalBroadcastService.inProgress$.subscribe()}parseUrl(n){return this.router.parseUrl(n)}getDestinationUrl(n){this.authService.getLogger().verbose("Guard - getting destination url");const o=document.getElementsByTagName("base"),f=this.location.normalize(o.length?o[0].href:window.location.origin),m=this.location.prepareExternalUrl(n);return m.startsWith("#")?(this.authService.getLogger().verbose("Guard - destination by hash routing"),`${f}/${m}`):`${f}${n}`}loginInteractively(n){const o="function"==typeof this.msalGuardConfig.authRequest?this.msalGuardConfig.authRequest(this.authService,n):{...this.msalGuardConfig.authRequest};if(this.msalGuardConfig.interactionType===E.X8.Popup)return this.authService.getLogger().verbose("Guard - logging in by popup"),this.authService.loginPopup(o).pipe((0,de.T)(m=>(this.authService.getLogger().verbose("Guard - login by popup successful, can activate, setting active account"),this.authService.instance.setActiveAccount(m.account),!0)));this.authService.getLogger().verbose("Guard - logging in by redirect");const f=this.getDestinationUrl(n.url);return this.authService.loginRedirect({redirectStartPage:f,...o}).pipe((0,de.T)(()=>!1))}activateHelper(n){if(this.msalGuardConfig.interactionType!==E.X8.Popup&&this.msalGuardConfig.interactionType!==E.X8.Redirect)throw new b.XX("invalid_interaction_type","Invalid interaction type provided to MSAL Guard. InteractionType.Popup or InteractionType.Redirect must be provided in the MsalGuardConfiguration");if(this.authService.getLogger().verbose("MSAL Guard activated"),!(typeof window<"u"))return this.authService.getLogger().info("Guard - window is undefined, MSAL does not support server-side token acquisition"),(0,te.of)(!0);if(A.H.hashContainsKnownProperties(window.location.hash)&&H.GZ()&&!this.authService.instance.getConfiguration().system.allowRedirectInIframe)return this.authService.getLogger().warning("Guard - redirectUri set to page with MSAL Guard. It is recommended to not set redirectUri to a page that requires authentication."),(0,te.of)(!1);this.msalGuardConfig.loginFailedRoute&&(this.loginFailedRoute=this.parseUrl(this.msalGuardConfig.loginFailedRoute));const o=this.location.path(!0);return this.authService.initialize().pipe((0,G.H)(()=>this.authService.handleRedirectObservable()),(0,G.H)(()=>{if(!this.authService.instance.getAllAccounts().length)return n?(this.authService.getLogger().verbose("Guard - no accounts retrieved, log in required to activate"),this.loginInteractively(n)):(this.authService.getLogger().verbose("Guard - no accounts retrieved, no state, cannot load"),(0,te.of)(!1));if(this.authService.getLogger().verbose("Guard - at least 1 account exists, can activate or load"),n){const f=this.includesCode(n.url),m=!!n.root&&!!n.root.fragment&&this.includesCode(`#${n.root.fragment}`),I=0===this.location.prepareExternalUrl(n.url).indexOf("#");if(f&&(m||I))return this.authService.getLogger().info("Guard - Hash contains known code response, stopping navigation."),o.indexOf("#")>-1?(0,te.of)(this.parseUrl(this.location.path())):(0,te.of)(this.parseUrl(""))}return(0,te.of)(!0)}),(0,$.W)(f=>(this.authService.getLogger().error("Guard - error while logging in, unable to activate"),this.authService.getLogger().errorPii(`Guard - error: ${f.message}`),this.loginFailedRoute&&n?(this.authService.getLogger().verbose("Guard - loginFailedRoute set, redirecting"),(0,te.of)(this.loginFailedRoute)):(0,te.of)(!1))))}includesCode(n){return n.lastIndexOf("/code")>-1&&n.lastIndexOf("/code")===n.length-5||n.indexOf("#code=")>-1||n.indexOf("&code=")>-1}canActivate(n,o){return this.authService.getLogger().verbose("Guard - canActivate"),this.activateHelper(o)}canActivateChild(n,o){return this.authService.getLogger().verbose("Guard - canActivateChild"),this.activateHelper(o)}canMatch(){return this.authService.getLogger().verbose("Guard - canLoad"),this.activateHelper()}}return d.\u0275fac=function(n){return new(n||d)(c.KVO(J),c.KVO(Le),c.KVO(Be),c.KVO(re.aZ),c.KVO(le.Ix))},d.\u0275prov=c.jDH({token:d,factory:d.\u0275fac}),d})(),Pe=(()=>{class d{constructor(n,o,f,m,I){this.msalInterceptorConfig=n,this.authService=o,this.location=f,this.msalBroadcastService=m,this._document=I}intercept(n,o){if(this.msalInterceptorConfig.interactionType!==E.X8.Popup&&this.msalInterceptorConfig.interactionType!==E.X8.Redirect)throw new b.XX("invalid_interaction_type","Invalid interaction type provided to MSAL Interceptor. InteractionType.Popup, InteractionType.Redirect must be provided in the msalInterceptorConfiguration");this.authService.getLogger().verbose("MSAL Interceptor activated");const f=this.getScopesForEndpoint(n.url,n.method);if(!f||0===f.length)return this.authService.getLogger().verbose("Interceptor - no scopes for endpoint"),o.handle(n);let m;this.authService.instance.getActiveAccount()?(this.authService.getLogger().verbose("Interceptor - active account selected"),m=this.authService.instance.getActiveAccount()):(this.authService.getLogger().verbose("Interceptor - no active account, fallback to first account"),m=this.authService.instance.getAllAccounts()[0]);const I="function"==typeof this.msalInterceptorConfig.authRequest?this.msalInterceptorConfig.authRequest(this.authService,n,{account:m}):{...this.msalInterceptorConfig.authRequest,account:m};return this.authService.getLogger().info(`Interceptor - ${f.length} scopes found for endpoint`),this.authService.getLogger().infoPii(`Interceptor - [${f}] scopes found for ${n.url}`),this.acquireToken(I,f,m).pipe((0,Z.n)(F=>{this.authService.getLogger().verbose("Interceptor - setting authorization headers");const ae=n.headers.set("Authorization",`Bearer ${F.accessToken}`),Se=n.clone({headers:ae});return o.handle(Se)}))}acquireToken(n,o,f){return this.authService.acquireTokenSilent({...n,scopes:o,account:f}).pipe((0,$.W)(()=>(this.authService.getLogger().error("Interceptor - acquireTokenSilent rejected with error. Invoking interaction to resolve."),this.msalBroadcastService.inProgress$.pipe((0,ee.s)(1),(0,Z.n)(m=>m===E.T$.None?this.acquireTokenInteractively(n,o):this.msalBroadcastService.inProgress$.pipe((0,z.p)(I=>I===E.T$.None),(0,ee.s)(1),(0,Z.n)(()=>this.acquireToken(n,o,f))))))),(0,Z.n)(m=>m.accessToken?(0,te.of)(m):(this.authService.getLogger().error("Interceptor - acquireTokenSilent resolved with null access token. Known issue with B2C tenants, invoking interaction to resolve."),this.msalBroadcastService.inProgress$.pipe((0,z.p)(I=>I===E.T$.None),(0,ee.s)(1),(0,Z.n)(()=>this.acquireTokenInteractively(n,o))))))}acquireTokenInteractively(n,o){if(this.msalInterceptorConfig.interactionType===E.X8.Popup)return this.authService.getLogger().verbose("Interceptor - error acquiring token silently, acquiring by popup"),this.authService.acquireTokenPopup({...n,scopes:o});this.authService.getLogger().verbose("Interceptor - error acquiring token silently, acquiring by redirect");const f=window.location.href;return this.authService.acquireTokenRedirect({...n,scopes:o,redirectStartPage:f}),ve.w}getScopesForEndpoint(n,o){this.authService.getLogger().verbose("Interceptor - getting scopes for endpoint");const f=this.location.normalize(n),m=Array.from(this.msalInterceptorConfig.protectedResourceMap.keys()),I=this.matchResourcesToEndpoint(m,f);return I.absoluteResources.length>0?this.matchScopesToEndpoint(this.msalInterceptorConfig.protectedResourceMap,I.absoluteResources,o):I.relativeResources.length>0?this.matchScopesToEndpoint(this.msalInterceptorConfig.protectedResourceMap,I.relativeResources,o):null}matchResourcesToEndpoint(n,o){const f={absoluteResources:[],relativeResources:[]};return n.forEach(m=>{const I=this.location.normalize(m);O.$.matchPattern(I,o)&&f.absoluteResources.push(m);const F=this.getAbsoluteUrl(m),ae=new A.H(F).getUrlComponents(),Se=this.getAbsoluteUrl(o),Re=new A.H(Se).getUrlComponents(),We=ae.QueryString?`${ae.AbsolutePath}?${ae.QueryString}`:this.location.normalize(ae.AbsolutePath);ae.HostNameAndPort===Re.HostNameAndPort&&O.$.matchPattern(We,Se)&&""!==We&&"/*"!==We&&f.relativeResources.push(m)}),f}getAbsoluteUrl(n){const o=this._document.createElement("a");return o.href=n,o.href}matchScopesToEndpoint(n,o,f){const m=[];return o.forEach(I=>{const F=[],ae=n.get(I);null!==ae?(ae.forEach(Se=>{if("string"==typeof Se)F.push(Se);else{const Re=f.toLowerCase();Se.httpMethod.toLowerCase()===Re&&(null===Se.scopes?m.push(null):Se.scopes.forEach(jt=>{F.push(jt)}))}}),F.length>0&&m.push(F)):m.push(null)}),m.length>0?(m.length>1&&this.authService.getLogger().warning("Interceptor - More than 1 matching scopes for endpoint found."),m[0]):null}}return d.\u0275fac=function(n){return new(n||d)(c.KVO(X),c.KVO(Be),c.KVO(re.aZ),c.KVO(Le),c.KVO(re.qQ))},d.\u0275prov=c.jDH({token:d,factory:d.\u0275fac}),d})();var mt=h(2341),Tt=h(4402),ct=h(7468),Te=h(8793),ie=h(9030),ue=h(8750),_e=h(7707),Ke=h(9974);function Fe(d,l,...n){if(!0===l)return void d();if(!1===l)return;const o=new _e.Ms({next:()=>{o.unsubscribe(),d()}});return(0,ue.Tg)(l(...n)).subscribe(o)}function at(d,l,n){let o,f=!1;return d&&"object"==typeof d?({bufferSize:o=1/0,windowTime:l=1/0,refCount:f=!1,scheduler:n}=d):o=d??1/0,function we(d={}){const{connector:l=(()=>new V.B),resetOnError:n=!0,resetOnComplete:o=!0,resetOnRefCountZero:f=!0}=d;return m=>{let I,F,ae,Se=0,Re=!1,We=!1;const jt=()=>{F?.unsubscribe(),F=void 0},Jt=()=>{jt(),I=ae=void 0,Re=We=!1},an=()=>{const wn=I;Jt(),wn?.unsubscribe()};return(0,Ke.N)((wn,Zn)=>{Se++,!We&&!Re&&jt();const bi=ae=ae??l();Zn.add(()=>{Se--,0===Se&&!We&&!Re&&(F=Fe(an,f))}),bi.subscribe(Zn),!I&&Se>0&&(I=new _e.Ms({next:Hi=>bi.next(Hi),error:Hi=>{We=!0,jt(),F=Fe(Jt,n,Hi),bi.error(Hi)},complete:()=>{Re=!0,jt(),F=Fe(Jt,o),bi.complete()}}),(0,ue.Tg)(wn).subscribe(I))})(m)}}({connector:()=>new T(o,l,n),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:f})}class Nt{}let Ge=(()=>{class d extends Nt{getTranslation(n){return(0,te.of)({})}static \u0275fac=(()=>{let n;return function(f){return(n||(n=c.xGo(d)))(f||d)}})();static \u0275prov=c.jDH({token:d,factory:d.\u0275fac})}return d})();class fe{}let j=(()=>{class d{handle(n){return n.key}static \u0275fac=function(o){return new(o||d)};static \u0275prov=c.jDH({token:d,factory:d.\u0275fac})}return d})();function ce(d,l){if(d===l)return!0;if(null===d||null===l)return!1;if(d!=d&&l!=l)return!0;let f,m,I,n=typeof d;if(n==typeof l&&"object"==n){if(!Array.isArray(d)){if(Array.isArray(l))return!1;for(m in I=Object.create(null),d){if(!ce(d[m],l[m]))return!1;I[m]=!0}for(m in l)if(!(m in I)&&typeof l[m]<"u")return!1;return!0}if(!Array.isArray(l))return!1;if((f=d.length)==l.length){for(m=0;m<f;m++)if(!ce(d[m],l[m]))return!1;return!0}}return!1}function xe(d){return typeof d<"u"&&null!==d}function Ve(d){return d&&"object"==typeof d&&!Array.isArray(d)}function wt(d,l){let n=Object.assign({},d);return Ve(d)&&Ve(l)&&Object.keys(l).forEach(o=>{Ve(l[o])?o in d?n[o]=wt(d[o],l[o]):Object.assign(n,{[o]:l[o]}):Object.assign(n,{[o]:l[o]})}),n}class it{}let gt=(()=>{class d extends it{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(n,o){let f;return f="string"==typeof n?this.interpolateString(n,o):"function"==typeof n?this.interpolateFunction(n,o):n,f}getValue(n,o){let f="string"==typeof o?o.split("."):[o];o="";do{o+=f.shift(),!xe(n)||!xe(n[o])||"object"!=typeof n[o]&&f.length?f.length?o+=".":n=void 0:(n=n[o],o="")}while(f.length);return n}interpolateFunction(n,o){return n(o)}interpolateString(n,o){return o?n.replace(this.templateMatcher,(f,m)=>{let I=this.getValue(o,m);return xe(I)?I:f}):n}static \u0275fac=(()=>{let n;return function(f){return(n||(n=c.xGo(d)))(f||d)}})();static \u0275prov=c.jDH({token:d,factory:d.\u0275fac})}return d})();class $e{}let Xe=(()=>{class d extends $e{compile(n,o){return n}compileTranslations(n,o){return n}static \u0275fac=(()=>{let n;return function(f){return(n||(n=c.xGo(d)))(f||d)}})();static \u0275prov=c.jDH({token:d,factory:d.\u0275fac})}return d})();class Gt{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new c.bkB;onLangChange=new c.bkB;onDefaultLangChange=new c.bkB}const nn=new c.nKC("USE_STORE"),xn=new c.nKC("USE_DEFAULT_LANG"),An=new c.nKC("DEFAULT_LANGUAGE"),Mn=new c.nKC("USE_EXTEND");let gi=(()=>{class d{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;isolate;extend;loadingTranslations;pending=!1;_onTranslationChange=new c.bkB;_onLangChange=new c.bkB;_onDefaultLangChange=new c.bkB;_defaultLang;_currentLang;_langs=[];_translations={};_translationRequests={};get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(n){this.isolate?this._defaultLang=n:this.store.defaultLang=n}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(n){this.isolate?this._currentLang=n:this.store.currentLang=n}get langs(){return this.isolate?this._langs:this.store.langs}set langs(n){this.isolate?this._langs=n:this.store.langs=n}get translations(){return this.isolate?this._translations:this.store.translations}set translations(n){this.isolate?this._translations=n:this.store.translations=n}constructor(n,o,f,m,I,F=!0,ae=!1,Se=!1,Re){this.store=n,this.currentLoader=o,this.compiler=f,this.parser=m,this.missingTranslationHandler=I,this.useDefaultLang=F,this.isolate=ae,this.extend=Se,Re&&this.setDefaultLang(Re)}setDefaultLang(n){if(n===this.defaultLang)return;let o=this.retrieveTranslations(n);typeof o<"u"?(null==this.defaultLang&&(this.defaultLang=n),o.pipe((0,ee.s)(1)).subscribe(f=>{this.changeDefaultLang(n)})):this.changeDefaultLang(n)}getDefaultLang(){return this.defaultLang}use(n){if(n===this.currentLang)return(0,te.of)(this.translations[n]);let o=this.retrieveTranslations(n);return typeof o<"u"?(this.currentLang||(this.currentLang=n),o.pipe((0,ee.s)(1)).subscribe(f=>{this.changeLang(n)}),o):(this.changeLang(n),(0,te.of)(this.translations[n]))}retrieveTranslations(n){let o;return(typeof this.translations[n]>"u"||this.extend)&&(this._translationRequests[n]=this._translationRequests[n]||this.getTranslation(n),o=this._translationRequests[n]),o}getTranslation(n){this.pending=!0;const o=this.currentLoader.getTranslation(n).pipe(at(1),(0,ee.s)(1));return this.loadingTranslations=o.pipe((0,de.T)(f=>this.compiler.compileTranslations(f,n)),at(1),(0,ee.s)(1)),this.loadingTranslations.subscribe({next:f=>{this.translations[n]=this.extend&&this.translations[n]?{...f,...this.translations[n]}:f,this.updateLangs(),this.pending=!1},error:f=>{this.pending=!1}}),o}setTranslation(n,o,f=!1){o=this.compiler.compileTranslations(o,n),this.translations[n]=(f||this.extend)&&this.translations[n]?wt(this.translations[n],o):o,this.updateLangs(),this.onTranslationChange.emit({lang:n,translations:this.translations[n]})}getLangs(){return this.langs}addLangs(n){n.forEach(o=>{-1===this.langs.indexOf(o)&&this.langs.push(o)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(n,o,f){let m;if(o instanceof Array){let I={},F=!1;for(let ae of o)I[ae]=this.getParsedResult(n,ae,f),(0,Tt.A)(I[ae])&&(F=!0);if(F){const ae=o.map(Se=>(0,Tt.A)(I[Se])?I[Se]:(0,te.of)(I[Se]));return(0,ct.p)(ae).pipe((0,de.T)(Se=>{let Re={};return Se.forEach((We,jt)=>{Re[o[jt]]=We}),Re}))}return I}if(n&&(m=this.parser.interpolate(this.parser.getValue(n,o),f)),typeof m>"u"&&null!=this.defaultLang&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(m=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],o),f)),typeof m>"u"){let I={key:o,translateService:this};typeof f<"u"&&(I.interpolateParams=f),m=this.missingTranslationHandler.handle(I)}return typeof m<"u"?m:o}get(n,o){if(!xe(n)||!n.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe((0,G.H)(f=>(f=this.getParsedResult(f,n,o),(0,Tt.A)(f)?f:(0,te.of)(f))));{let f=this.getParsedResult(this.translations[this.currentLang],n,o);return(0,Tt.A)(f)?f:(0,te.of)(f)}}getStreamOnTranslationChange(n,o){if(!xe(n)||!n.length)throw new Error('Parameter "key" required');return(0,Te.x)((0,ie.v)(()=>this.get(n,o)),this.onTranslationChange.pipe((0,Z.n)(f=>{const m=this.getParsedResult(f.translations,n,o);return"function"==typeof m.subscribe?m:(0,te.of)(m)})))}stream(n,o){if(!xe(n)||!n.length)throw new Error('Parameter "key" required');return(0,Te.x)((0,ie.v)(()=>this.get(n,o)),this.onLangChange.pipe((0,Z.n)(f=>{const m=this.getParsedResult(f.translations,n,o);return(0,Tt.A)(m)?m:(0,te.of)(m)})))}instant(n,o){if(!xe(n)||!n.length)throw new Error('Parameter "key" required');let f=this.getParsedResult(this.translations[this.currentLang],n,o);if((0,Tt.A)(f)){if(n instanceof Array){let m={};return n.forEach((I,F)=>{m[n[F]]=n[F]}),m}return n}return f}set(n,o,f=this.currentLang){this.translations[f][n]=this.compiler.compile(o,f),this.updateLangs(),this.onTranslationChange.emit({lang:f,translations:this.translations[f]})}changeLang(n){this.currentLang=n,this.onLangChange.emit({lang:n,translations:this.translations[n]}),null==this.defaultLang&&this.changeDefaultLang(n)}changeDefaultLang(n){this.defaultLang=n,this.onDefaultLangChange.emit({lang:n,translations:this.translations[n]})}reloadLang(n){return this.resetLang(n),this.getTranslation(n)}resetLang(n){this._translationRequests[n]=void 0,this.translations[n]=void 0}getBrowserLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let n=window.navigator.languages?window.navigator.languages[0]:null;return n=n||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,typeof n>"u"?void 0:(-1!==n.indexOf("-")&&(n=n.split("-")[0]),-1!==n.indexOf("_")&&(n=n.split("_")[0]),n)}getBrowserCultureLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let n=window.navigator.languages?window.navigator.languages[0]:null;return n=n||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,n}static \u0275fac=function(o){return new(o||d)(c.KVO(Gt),c.KVO(Nt),c.KVO($e),c.KVO(it),c.KVO(fe),c.KVO(xn),c.KVO(nn),c.KVO(Mn),c.KVO(An))};static \u0275prov=c.jDH({token:d,factory:d.\u0275fac})}return d})(),hi=(()=>{class d{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(n,o){this.translate=n,this._ref=o}updateValue(n,o,f){let m=I=>{this.value=void 0!==I?I:n,this.lastKey=n,this._ref.markForCheck()};if(f){let I=this.translate.getParsedResult(f,n,o);(0,Tt.A)(I.subscribe)?I.subscribe(m):m(I)}this.translate.get(n,o).subscribe(m)}transform(n,...o){if(!n||!n.length)return n;if(ce(n,this.lastKey)&&ce(o,this.lastParams))return this.value;let f;if(xe(o[0])&&o.length)if("string"==typeof o[0]&&o[0].length){let m=o[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g,'"$2":').replace(/:(\s)?(\')(.*?)(\')/g,':"$3"');try{f=JSON.parse(m)}catch{throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${o[0]}`)}}else"object"==typeof o[0]&&!Array.isArray(o[0])&&(f=o[0]);return this.lastKey=n,this.lastParams=o,this.updateValue(n,f),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(m=>{this.lastKey&&m.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(n,f,m.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(m=>{this.lastKey&&(this.lastKey=null,this.updateValue(n,f,m.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(n,f))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(o){return new(o||d)(c.rXU(gi,16),c.rXU(c.gRc,16))};static \u0275pipe=c.EJ8({name:"translate",type:d,pure:!1});static \u0275prov=c.jDH({token:d,factory:d.\u0275fac})}return d})(),Fn=(()=>{class d{static forRoot(n={}){return{ngModule:d,providers:[n.loader||{provide:Nt,useClass:Ge},n.compiler||{provide:$e,useClass:Xe},n.parser||{provide:it,useClass:gt},n.missingTranslationHandler||{provide:fe,useClass:j},Gt,{provide:nn,useValue:n.isolate},{provide:xn,useValue:n.useDefaultLang},{provide:Mn,useValue:n.extend},{provide:An,useValue:n.defaultLanguage},gi]}}static forChild(n={}){return{ngModule:d,providers:[n.loader||{provide:Nt,useClass:Ge},n.compiler||{provide:$e,useClass:Xe},n.parser||{provide:it,useClass:gt},n.missingTranslationHandler||{provide:fe,useClass:j},{provide:nn,useValue:n.isolate},{provide:xn,useValue:n.useDefaultLang},{provide:Mn,useValue:n.extend},{provide:An,useValue:n.defaultLanguage},gi]}}static \u0275fac=function(o){return new(o||d)};static \u0275mod=c.$C({type:d});static \u0275inj=c.G2t({})}return d})();const Fi=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:(()=>{class d{constructor(n,o){this.authService=n,this.router=o,this.imageTemplate="/assets/images/template.png",this.imageLogo="/assets/images/logo_Certum.png"}ngOnInit(){this.authService.instance.getActiveAccount()?this.router.navigate(["dashboard"]):(sessionStorage.clear(),localStorage.clear())}static#e=this.\u0275fac=function(o){return new(o||d)(c.rXU(Be),c.rXU(le.Ix))};static#t=this.\u0275cmp=c.VBU({type:d,selectors:[["app-home"]],standalone:!0,features:[c.aNF],decls:25,vars:18,consts:[[1,"row"],[1,"col"],[1,"my-2"],[1,"col-3","d-flex","justify-content-end"],["alt","certumLogo","src","./assets/images/template.png",1,"img-fluid"],[1,"row","text-center","py-5"],[1,"col","d-flex","flex-column","align-items-center"],[1,"text-center","text-muted","py-3","m-0"]],template:function(o,f){1&o&&(c.j41(0,"div",0)(1,"div",1)(2,"h1"),c.EFF(3),c.nI1(4,"translate"),c.k0s(),c.j41(5,"h5"),c.EFF(6),c.nI1(7,"translate"),c.k0s(),c.j41(8,"h5",2),c.EFF(9),c.nI1(10,"translate"),c.k0s()(),c.j41(11,"div",3),c.nrm(12,"img",4),c.k0s()(),c.j41(13,"div",5)(14,"div",6)(15,"p"),c.EFF(16),c.nI1(17,"translate"),c.k0s()(),c.j41(18,"div",6)(19,"p"),c.EFF(20),c.nI1(21,"translate"),c.k0s()()(),c.j41(22,"p",7),c.EFF(23),c.nI1(24,"translate"),c.k0s()),2&o&&(c.R7$(3),c.JRh(c.bMT(4,6,"homepage.hero_title")),c.R7$(3),c.JRh(c.bMT(7,8,"homepage.hero_subtitle")),c.R7$(3),c.JRh(c.bMT(10,10,"homepage.get_started_button")),c.R7$(7),c.JRh(c.bMT(17,12,"homepage.footer_website")),c.R7$(4),c.JRh(c.bMT(21,14,"homepage.footer_about_us")),c.R7$(3),c.SpI(" ",c.bMT(24,16,"homepage.footer_copyright"),"\n"))},dependencies:[Fn,hi],encapsulation:2})}return d})()},{path:"no-permissions",loadComponent:()=>h.e(195).then(h.bind(h,8195)).then(d=>d.NoPermissionsComponent)},{path:"dashboard",loadComponent:()=>h.e(152).then(h.bind(h,5152)).then(d=>d.DashboardComponent)},{path:"browse-forms",loadComponent:()=>Promise.all([h.e(76),h.e(944)]).then(h.bind(h,4944)).then(d=>d.BrowseSurveysComponent)},{path:"create-template",loadComponent:()=>Promise.all([h.e(76),h.e(37)]).then(h.bind(h,2037)).then(d=>d.CreateTemplateComponent)},{path:"create-form/template/:templateId",loadComponent:()=>Promise.all([h.e(76),h.e(875)]).then(h.bind(h,875)).then(d=>d.CreateFormComponent)},{path:"create-form",loadComponent:()=>Promise.all([h.e(76),h.e(875)]).then(h.bind(h,875)).then(d=>d.CreateFormComponent)},{path:"fill-form/template/:templateId",loadComponent:()=>Promise.all([h.e(76),h.e(810)]).then(h.bind(h,810)).then(d=>d.FillFormComponent)},{path:"fill-form/form/:formId/user/:userId",loadComponent:()=>Promise.all([h.e(76),h.e(810)]).then(h.bind(h,810)).then(d=>d.FillFormComponent)},{path:"settings",loadComponent:()=>h.e(948).then(h.bind(h,3948)).then(d=>d.SettingsComponent)},{path:"**",redirectTo:"home"}];var en=h(9969);function Ci(d){return new c.wOt(3e3,!1)}function Mt(d){switch(d.length){case 0:return new en.sf;case 1:return d[0];default:return new en.ui(d)}}function ln(d,l,n=new Map,o=new Map){const f=[],m=[];let I=-1,F=null;if(l.forEach(ae=>{const Se=ae.get("offset"),Re=Se==I,We=Re&&F||new Map;ae.forEach((jt,Jt)=>{let an=Jt,wn=jt;if("offset"!==Jt)switch(an=d.normalizePropertyName(an,f),wn){case en.FX:wn=n.get(Jt);break;case en.kp:wn=o.get(Jt);break;default:wn=d.normalizeStyleValue(Jt,an,wn,f)}We.set(an,wn)}),Re||m.push(We),F=We,I=Se}),f.length)throw function Ht(d){return new c.wOt(3502,!1)}();return m}function sn(d,l,n,o){switch(l){case"start":d.onStart(()=>o(n&&ht(n,"start",d)));break;case"done":d.onDone(()=>o(n&&ht(n,"done",d)));break;case"destroy":d.onDestroy(()=>o(n&&ht(n,"destroy",d)))}}function ht(d,l,n){const m=vt(d.element,d.triggerName,d.fromState,d.toState,l||d.phaseName,n.totalTime??d.totalTime,!!n.disabled),I=d._data;return null!=I&&(m._data=I),m}function vt(d,l,n,o,f="",m=0,I){return{element:d,triggerName:l,fromState:n,toState:o,phaseName:f,totalTime:m,disabled:!!I}}function Ae(d,l,n){let o=d.get(l);return o||d.set(l,o=n),o}function ze(d){const l=d.indexOf(":");return[d.substring(1,l),d.slice(l+1)]}const Je=typeof document>"u"?null:document.documentElement;function ut(d){const l=d.parentNode||d.host||null;return l===Je?null:l}let Xt=null,cn=!1;function vi(d,l){for(;l;){if(l===d)return!0;l=ut(l)}return!1}function lr(d,l,n){if(n)return Array.from(d.querySelectorAll(l));const o=d.querySelector(l);return o?[o]:[]}let Cr=(()=>{class d{validateStyleProperty(n){return function En(d){Xt||(Xt=function wi(){return typeof document<"u"?document.body:null}()||{},cn=!!Xt.style&&"WebkitAppearance"in Xt.style);let l=!0;return Xt.style&&!function Kt(d){return"ebkit"==d.substring(1,6)}(d)&&(l=d in Xt.style,!l&&cn&&(l="Webkit"+d.charAt(0).toUpperCase()+d.slice(1)in Xt.style)),l}(n)}matchesElement(n,o){return!1}containsElement(n,o){return vi(n,o)}getParentElement(n){return ut(n)}query(n,o,f){return lr(n,o,f)}computeStyle(n,o,f){return f||""}animate(n,o,f,m,I,F=[],ae){return new en.sf(f,m)}static#e=this.\u0275fac=function(o){return new(o||d)};static#t=this.\u0275prov=c.jDH({token:d,factory:d.\u0275fac})}return d})();class Ln{static#e=this.NOOP=new Cr}class _t{}const g=1e3,me="ng-enter",ke="ng-leave",je="ng-trigger",It=".ng-trigger",Vt="ng-animating",Ut=".ng-animating";function hn(d){if("number"==typeof d)return d;const l=d.match(/^(-?[\.\d]+)(m?s)/);return!l||l.length<2?0:Cn(parseFloat(l[1]),l[2])}function Cn(d,l){return"s"===l?d*g:d}function Hn(d,l,n){return d.hasOwnProperty("duration")?d:function yi(d,l,n){let f,m=0,I="";if("string"==typeof d){const F=d.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);if(null===F)return l.push(Ci()),{duration:0,delay:0,easing:""};f=Cn(parseFloat(F[1]),F[2]);const ae=F[3];null!=ae&&(m=Cn(parseFloat(ae),F[4]));const Se=F[5];Se&&(I=Se)}else f=d;if(!n){let F=!1,ae=l.length;f<0&&(l.push(function nr(){return new c.wOt(3100,!1)}()),F=!0),m<0&&(l.push(function Zi(){return new c.wOt(3101,!1)}()),F=!0),F&&l.splice(ae,0,Ci())}return{duration:f,delay:m,easing:I}}(d,l,n)}function Ui(d,l,n){l.forEach((o,f)=>{const m=zi(f);n&&!n.has(f)&&n.set(f,d.style[m]),d.style[m]=o})}function sr(d,l){l.forEach((n,o)=>{const f=zi(o);d.style[f]=""})}function Er(d){return Array.isArray(d)?1==d.length?d[0]:(0,en.K2)(d):d}const fr=new RegExp("{{\\s*(.+?)\\s*}}","g");function as(d){let l=[];if("string"==typeof d){let n;for(;n=fr.exec(d);)l.push(n[1]);fr.lastIndex=0}return l}function Jn(d,l,n){const o=`${d}`,f=o.replace(fr,(m,I)=>{let F=l[I];return null==F&&(n.push(function Et(d){return new c.wOt(3003,!1)}()),F=""),F.toString()});return f==o?d:f}const Es=/-+([a-z0-9])/g;function zi(d){return d.replace(Es,(...l)=>l[1].toUpperCase())}function Tr(d,l,n){switch(l.type){case en.If.Trigger:return d.visitTrigger(l,n);case en.If.State:return d.visitState(l,n);case en.If.Transition:return d.visitTransition(l,n);case en.If.Sequence:return d.visitSequence(l,n);case en.If.Group:return d.visitGroup(l,n);case en.If.Animate:return d.visitAnimate(l,n);case en.If.Keyframes:return d.visitKeyframes(l,n);case en.If.Style:return d.visitStyle(l,n);case en.If.Reference:return d.visitReference(l,n);case en.If.AnimateChild:return d.visitAnimateChild(l,n);case en.If.AnimateRef:return d.visitAnimateRef(l,n);case en.If.Query:return d.visitQuery(l,n);case en.If.Stagger:return d.visitStagger(l,n);default:throw function qe(d){return new c.wOt(3004,!1)}()}}function qo(d,l){return window.getComputedStyle(d)[l]}const Mo=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]);class pa extends _t{normalizePropertyName(l,n){return zi(l)}normalizeStyleValue(l,n,o,f){let m="";const I=o.toString().trim();if(Mo.has(n)&&0!==o&&"0"!==o)if("number"==typeof o)m="px";else{const F=o.match(/^[+-]?[\d\.]+([a-z]*)$/);F&&0==F[1].length&&f.push(function pt(d,l){return new c.wOt(3005,!1)}())}return I+m}}const Or="*";const wo=new Set(["true","1"]),ho=new Set(["false","0"]);function qr(d,l){const n=wo.has(d)||ho.has(d),o=wo.has(l)||ho.has(l);return(f,m)=>{let I=d==Or||d==f,F=l==Or||l==m;return!I&&n&&"boolean"==typeof f&&(I=f?wo.has(d):ho.has(d)),!F&&o&&"boolean"==typeof m&&(F=m?wo.has(l):ho.has(l)),I&&F}}const Ss=new RegExp("s*:selfs*,?","g");function Xs(d,l,n,o){return new Oi(d).build(l,n,o)}class Oi{constructor(l){this._driver=l}build(l,n,o){const f=new kl(n);return this._resetContextStyleTimingState(f),Tr(this,Er(l),f)}_resetContextStyleTimingState(l){l.currentQuerySelector="",l.collectedStyles=new Map,l.collectedStyles.set("",new Map),l.currentTime=0}visitTrigger(l,n){let o=n.queryCount=0,f=n.depCount=0;const m=[],I=[];return"@"==l.name.charAt(0)&&n.errors.push(function qt(){return new c.wOt(3006,!1)}()),l.definitions.forEach(F=>{if(this._resetContextStyleTimingState(n),F.type==en.If.State){const ae=F,Se=ae.name;Se.toString().split(/\s*,\s*/).forEach(Re=>{ae.name=Re,m.push(this.visitState(ae,n))}),ae.name=Se}else if(F.type==en.If.Transition){const ae=this.visitTransition(F,n);o+=ae.queryCount,f+=ae.depCount,I.push(ae)}else n.errors.push(function fn(){return new c.wOt(3007,!1)}())}),{type:en.If.Trigger,name:l.name,states:m,transitions:I,queryCount:o,depCount:f,options:null}}visitState(l,n){const o=this.visitStyle(l.styles,n),f=l.options&&l.options.params||null;if(o.containsDynamicStyles){const m=new Set,I=f||{};o.styles.forEach(F=>{F instanceof Map&&F.forEach(ae=>{as(ae).forEach(Se=>{I.hasOwnProperty(Se)||m.add(Se)})})}),m.size&&n.errors.push(function In(d,l){return new c.wOt(3008,!1)}(0,m.values()))}return{type:en.If.State,name:l.name,style:o,options:f?{params:f}:null}}visitTransition(l,n){n.queryCount=0,n.depCount=0;const o=Tr(this,Er(l.animation),n),f=function Ts(d,l){const n=[];return"string"==typeof d?d.split(/\s*,\s*/).forEach(o=>function wr(d,l,n){if(":"==d[0]){const ae=function Kr(d,l){switch(d){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(n,o)=>parseFloat(o)>parseFloat(n);case":decrement":return(n,o)=>parseFloat(o)<parseFloat(n);default:return l.push(function Ne(d){return new c.wOt(3016,!1)}()),"* => *"}}(d,n);if("function"==typeof ae)return void l.push(ae);d=ae}const o=d.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==o||o.length<4)return n.push(function yt(d){return new c.wOt(3015,!1)}()),l;const f=o[1],m=o[2],I=o[3];l.push(qr(f,I)),"<"==m[0]&&(f!=Or||I!=Or)&&l.push(qr(I,f))}(o,n,l)):n.push(d),n}(l.expr,n.errors);return{type:en.If.Transition,matchers:f,animation:o,queryCount:n.queryCount,depCount:n.depCount,options:qn(l.options)}}visitSequence(l,n){return{type:en.If.Sequence,steps:l.steps.map(o=>Tr(this,o,n)),options:qn(l.options)}}visitGroup(l,n){const o=n.currentTime;let f=0;const m=l.steps.map(I=>{n.currentTime=o;const F=Tr(this,I,n);return f=Math.max(f,n.currentTime),F});return n.currentTime=f,{type:en.If.Group,steps:m,options:qn(l.options)}}visitAnimate(l,n){const o=function Pr(d,l){if(d.hasOwnProperty("duration"))return d;if("number"==typeof d)return fo(Hn(d,l).duration,0,"");const n=d;if(n.split(/\s+/).some(m=>"{"==m.charAt(0)&&"{"==m.charAt(1))){const m=fo(0,0,"");return m.dynamic=!0,m.strValue=n,m}const f=Hn(n,l);return fo(f.duration,f.delay,f.easing)}(l.timings,n.errors);n.currentAnimateTimings=o;let f,m=l.styles?l.styles:(0,en.iF)({});if(m.type==en.If.Keyframes)f=this.visitKeyframes(m,n);else{let I=l.styles,F=!1;if(!I){F=!0;const Se={};o.easing&&(Se.easing=o.easing),I=(0,en.iF)(Se)}n.currentTime+=o.duration+o.delay;const ae=this.visitStyle(I,n);ae.isEmptyStep=F,f=ae}return n.currentAnimateTimings=null,{type:en.If.Animate,timings:o,style:f,options:null}}visitStyle(l,n){const o=this._makeStyleAst(l,n);return this._validateStyleAst(o,n),o}_makeStyleAst(l,n){const o=[],f=Array.isArray(l.styles)?l.styles:[l.styles];for(let F of f)"string"==typeof F?F===en.kp?o.push(F):n.errors.push(new c.wOt(3002,!1)):o.push(new Map(Object.entries(F)));let m=!1,I=null;return o.forEach(F=>{if(F instanceof Map&&(F.has("easing")&&(I=F.get("easing"),F.delete("easing")),!m))for(let ae of F.values())if(ae.toString().indexOf("{{")>=0){m=!0;break}}),{type:en.If.Style,styles:o,easing:I,offset:l.offset,containsDynamicStyles:m,options:null}}_validateStyleAst(l,n){const o=n.currentAnimateTimings;let f=n.currentTime,m=n.currentTime;o&&m>0&&(m-=o.duration+o.delay),l.styles.forEach(I=>{"string"!=typeof I&&I.forEach((F,ae)=>{const Se=n.collectedStyles.get(n.currentQuerySelector),Re=Se.get(ae);let We=!0;Re&&(m!=f&&m>=Re.startTime&&f<=Re.endTime&&(n.errors.push(function mi(d,l,n,o,f){return new c.wOt(3010,!1)}()),We=!1),m=Re.startTime),We&&Se.set(ae,{startTime:m,endTime:f}),n.options&&function Co(d,l,n){const o=l.params||{},f=as(d);f.length&&f.forEach(m=>{o.hasOwnProperty(m)||n.push(function ft(d){return new c.wOt(3001,!1)}())})}(F,n.options,n.errors)})})}visitKeyframes(l,n){const o={type:en.If.Keyframes,styles:[],options:null};if(!n.currentAnimateTimings)return n.errors.push(function $n(){return new c.wOt(3011,!1)}()),o;let m=0;const I=[];let F=!1,ae=!1,Se=0;const Re=l.steps.map(bi=>{const Hi=this._makeStyleAst(bi,n);let ur=null!=Hi.offset?Hi.offset:function ll(d){if("string"==typeof d)return null;let l=null;if(Array.isArray(d))d.forEach(n=>{if(n instanceof Map&&n.has("offset")){const o=n;l=parseFloat(o.get("offset")),o.delete("offset")}});else if(d instanceof Map&&d.has("offset")){const n=d;l=parseFloat(n.get("offset")),n.delete("offset")}return l}(Hi.styles),Vi=0;return null!=ur&&(m++,Vi=Hi.offset=ur),ae=ae||Vi<0||Vi>1,F=F||Vi<Se,Se=Vi,I.push(Vi),Hi});ae&&n.errors.push(function Vn(){return new c.wOt(3012,!1)}()),F&&n.errors.push(function Ji(){return new c.wOt(3200,!1)}());const We=l.steps.length;let jt=0;m>0&&m<We?n.errors.push(function zr(){return new c.wOt(3202,!1)}()):0==m&&(jt=1/(We-1));const Jt=We-1,an=n.currentTime,wn=n.currentAnimateTimings,Zn=wn.duration;return Re.forEach((bi,Hi)=>{const ur=jt>0?Hi==Jt?1:jt*Hi:I[Hi],Vi=ur*Zn;n.currentTime=an+wn.delay+Vi,wn.duration=Vi,this._validateStyleAst(bi,n),bi.offset=ur,o.styles.push(bi)}),o}visitReference(l,n){return{type:en.If.Reference,animation:Tr(this,Er(l.animation),n),options:qn(l.options)}}visitAnimateChild(l,n){return n.depCount++,{type:en.If.AnimateChild,options:qn(l.options)}}visitAnimateRef(l,n){return{type:en.If.AnimateRef,animation:this.visitReference(l.animation,n),options:qn(l.options)}}visitQuery(l,n){const o=n.currentQuerySelector,f=l.options||{};n.queryCount++,n.currentQuery=l;const[m,I]=function As(d){const l=!!d.split(/\s*,\s*/).find(n=>":self"==n);return l&&(d=d.replace(Ss,"")),d=d.replace(/@\*/g,It).replace(/@\w+/g,n=>It+"-"+n.slice(1)).replace(/:animating/g,Ut),[d,l]}(l.selector);n.currentQuerySelector=o.length?o+" "+m:m,Ae(n.collectedStyles,n.currentQuerySelector,new Map);const F=Tr(this,Er(l.animation),n);return n.currentQuery=null,n.currentQuerySelector=o,{type:en.If.Query,selector:m,limit:f.limit||0,optional:!!f.optional,includeSelf:I,animation:F,originalSelector:l.selector,options:qn(l.options)}}visitStagger(l,n){n.currentQuery||n.errors.push(function Gr(){return new c.wOt(3013,!1)}());const o="full"===l.timings?{duration:0,delay:0,easing:"full"}:Hn(l.timings,n.errors,!0);return{type:en.If.Stagger,animation:Tr(this,Er(l.animation),n),timings:o,options:null}}}class kl{constructor(l){this.errors=l,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles=new Map,this.options=null,this.unsupportedCSSPropertiesFound=new Set}}function qn(d){return d?(d={...d}).params&&(d.params=function Ur(d){return d?{...d}:null}(d.params)):d={},d}function fo(d,l,n){return{duration:d,delay:l,easing:n}}function va(d,l,n,o,f,m,I=null,F=!1){return{type:1,element:d,keyframes:l,preStyleProps:n,postStyleProps:o,duration:f,delay:m,totalTime:f+m,easing:I,subTimeline:F}}class Lo{constructor(){this._map=new Map}get(l){return this._map.get(l)||[]}append(l,n){let o=this._map.get(l);o||this._map.set(l,o=[]),o.push(...n)}has(l){return this._map.has(l)}clear(){this._map.clear()}}const Qo=new RegExp(":enter","g"),Is=new RegExp(":leave","g");function Br(d,l,n,o,f,m=new Map,I=new Map,F,ae,Se=[]){return(new Ce).buildKeyframes(d,l,n,o,f,m,I,F,ae,Se)}class Ce{buildKeyframes(l,n,o,f,m,I,F,ae,Se,Re=[]){Se=Se||new Lo;const We=new q(l,n,Se,f,m,Re,[]);We.options=ae;const jt=ae.delay?hn(ae.delay):0;We.currentTimeline.delayNextStep(jt),We.currentTimeline.setStyles([I],null,We.errors,ae),Tr(this,o,We);const Jt=We.timelines.filter(an=>an.containsAnimation());if(Jt.length&&F.size){let an;for(let wn=Jt.length-1;wn>=0;wn--){const Zn=Jt[wn];if(Zn.element===n){an=Zn;break}}an&&!an.allowOnlyTimelineStyles()&&an.setStyles([F],null,We.errors,ae)}return Jt.length?Jt.map(an=>an.buildKeyframes()):[va(n,[],[],[],0,jt,"",!1)]}visitTrigger(l,n){}visitState(l,n){}visitTransition(l,n){}visitAnimateChild(l,n){const o=n.subInstructions.get(n.element);if(o){const f=n.createSubContext(l.options),m=n.currentTimeline.currentTime,I=this._visitSubInstructions(o,f,f.options);m!=I&&n.transformIntoNewTimeline(I)}n.previousNode=l}visitAnimateRef(l,n){const o=n.createSubContext(l.options);o.transformIntoNewTimeline(),this._applyAnimationRefDelays([l.options,l.animation.options],n,o),this.visitReference(l.animation,o),n.transformIntoNewTimeline(o.currentTimeline.currentTime),n.previousNode=l}_applyAnimationRefDelays(l,n,o){for(const f of l){const m=f?.delay;if(m){const I="number"==typeof m?m:hn(Jn(m,f?.params??{},n.errors));o.delayNextStep(I)}}}_visitSubInstructions(l,n,o){let m=n.currentTimeline.currentTime;const I=null!=o.duration?hn(o.duration):null,F=null!=o.delay?hn(o.delay):null;return 0!==I&&l.forEach(ae=>{const Se=n.appendInstructionToTimeline(ae,I,F);m=Math.max(m,Se.duration+Se.delay)}),m}visitReference(l,n){n.updateOptions(l.options,!0),Tr(this,l.animation,n),n.previousNode=l}visitSequence(l,n){const o=n.subContextCount;let f=n;const m=l.options;if(m&&(m.params||m.delay)&&(f=n.createSubContext(m),f.transformIntoNewTimeline(),null!=m.delay)){f.previousNode.type==en.If.Style&&(f.currentTimeline.snapshotCurrentStyles(),f.previousNode=Ee);const I=hn(m.delay);f.delayNextStep(I)}l.steps.length&&(l.steps.forEach(I=>Tr(this,I,f)),f.currentTimeline.applyStylesToKeyframe(),f.subContextCount>o&&f.transformIntoNewTimeline()),n.previousNode=l}visitGroup(l,n){const o=[];let f=n.currentTimeline.currentTime;const m=l.options&&l.options.delay?hn(l.options.delay):0;l.steps.forEach(I=>{const F=n.createSubContext(l.options);m&&F.delayNextStep(m),Tr(this,I,F),f=Math.max(f,F.currentTimeline.currentTime),o.push(F.currentTimeline)}),o.forEach(I=>n.currentTimeline.mergeTimelineCollectedStyles(I)),n.transformIntoNewTimeline(f),n.previousNode=l}_visitTiming(l,n){if(l.dynamic){const o=l.strValue;return Hn(n.params?Jn(o,n.params,n.errors):o,n.errors)}return{duration:l.duration,delay:l.delay,easing:l.easing}}visitAnimate(l,n){const o=n.currentAnimateTimings=this._visitTiming(l.timings,n),f=n.currentTimeline;o.delay&&(n.incrementTime(o.delay),f.snapshotCurrentStyles());const m=l.style;m.type==en.If.Keyframes?this.visitKeyframes(m,n):(n.incrementTime(o.duration),this.visitStyle(m,n),f.applyStylesToKeyframe()),n.currentAnimateTimings=null,n.previousNode=l}visitStyle(l,n){const o=n.currentTimeline,f=n.currentAnimateTimings;!f&&o.hasCurrentStyleProperties()&&o.forwardFrame();const m=f&&f.easing||l.easing;l.isEmptyStep?o.applyEmptyStep(m):o.setStyles(l.styles,m,n.errors,n.options),n.previousNode=l}visitKeyframes(l,n){const o=n.currentAnimateTimings,f=n.currentTimeline.duration,m=o.duration,F=n.createSubContext().currentTimeline;F.easing=o.easing,l.styles.forEach(ae=>{F.forwardTime((ae.offset||0)*m),F.setStyles(ae.styles,ae.easing,n.errors,n.options),F.applyStylesToKeyframe()}),n.currentTimeline.mergeTimelineCollectedStyles(F),n.transformIntoNewTimeline(f+m),n.previousNode=l}visitQuery(l,n){const o=n.currentTimeline.currentTime,f=l.options||{},m=f.delay?hn(f.delay):0;m&&(n.previousNode.type===en.If.Style||0==o&&n.currentTimeline.hasCurrentStyleProperties())&&(n.currentTimeline.snapshotCurrentStyles(),n.previousNode=Ee);let I=o;const F=n.invokeQuery(l.selector,l.originalSelector,l.limit,l.includeSelf,!!f.optional,n.errors);n.currentQueryTotal=F.length;let ae=null;F.forEach((Se,Re)=>{n.currentQueryIndex=Re;const We=n.createSubContext(l.options,Se);m&&We.delayNextStep(m),Se===n.element&&(ae=We.currentTimeline),Tr(this,l.animation,We),We.currentTimeline.applyStylesToKeyframe(),I=Math.max(I,We.currentTimeline.currentTime)}),n.currentQueryIndex=0,n.currentQueryTotal=0,n.transformIntoNewTimeline(I),ae&&(n.currentTimeline.mergeTimelineCollectedStyles(ae),n.currentTimeline.snapshotCurrentStyles()),n.previousNode=l}visitStagger(l,n){const o=n.parentContext,f=n.currentTimeline,m=l.timings,I=Math.abs(m.duration),F=I*(n.currentQueryTotal-1);let ae=I*n.currentQueryIndex;switch(m.duration<0?"reverse":m.easing){case"reverse":ae=F-ae;break;case"full":ae=o.currentStaggerTime}const Re=n.currentTimeline;ae&&Re.delayNextStep(ae);const We=Re.currentTime;Tr(this,l.animation,n),n.previousNode=l,o.currentStaggerTime=f.currentTime-We+(f.startTime-o.currentTimeline.startTime)}}const Ee={};class q{constructor(l,n,o,f,m,I,F,ae){this._driver=l,this.element=n,this.subInstructions=o,this._enterClassName=f,this._leaveClassName=m,this.errors=I,this.timelines=F,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=Ee,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=ae||new Oe(this._driver,n,0),F.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(l,n){if(!l)return;const o=l;let f=this.options;null!=o.duration&&(f.duration=hn(o.duration)),null!=o.delay&&(f.delay=hn(o.delay));const m=o.params;if(m){let I=f.params;I||(I=this.options.params={}),Object.keys(m).forEach(F=>{(!n||!I.hasOwnProperty(F))&&(I[F]=Jn(m[F],I,this.errors))})}}_copyOptions(){const l={};if(this.options){const n=this.options.params;if(n){const o=l.params={};Object.keys(n).forEach(f=>{o[f]=n[f]})}}return l}createSubContext(l=null,n,o){const f=n||this.element,m=new q(this._driver,f,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(f,o||0));return m.previousNode=this.previousNode,m.currentAnimateTimings=this.currentAnimateTimings,m.options=this._copyOptions(),m.updateOptions(l),m.currentQueryIndex=this.currentQueryIndex,m.currentQueryTotal=this.currentQueryTotal,m.parentContext=this,this.subContextCount++,m}transformIntoNewTimeline(l){return this.previousNode=Ee,this.currentTimeline=this.currentTimeline.fork(this.element,l),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(l,n,o){const f={duration:n??l.duration,delay:this.currentTimeline.currentTime+(o??0)+l.delay,easing:""},m=new lt(this._driver,l.element,l.keyframes,l.preStyleProps,l.postStyleProps,f,l.stretchStartingKeyframe);return this.timelines.push(m),f}incrementTime(l){this.currentTimeline.forwardTime(this.currentTimeline.duration+l)}delayNextStep(l){l>0&&this.currentTimeline.delayNextStep(l)}invokeQuery(l,n,o,f,m,I){let F=[];if(f&&F.push(this.element),l.length>0){l=(l=l.replace(Qo,"."+this._enterClassName)).replace(Is,"."+this._leaveClassName);let Se=this._driver.query(this.element,l,1!=o);0!==o&&(Se=o<0?Se.slice(Se.length+o,Se.length):Se.slice(0,o)),F.push(...Se)}return!m&&0==F.length&&I.push(function Bt(d){return new c.wOt(3014,!1)}()),F}}class Oe{constructor(l,n,o,f){this._driver=l,this.element=n,this.startTime=o,this._elementTimelineStylesLookup=f,this.duration=0,this.easing=null,this._previousKeyframe=new Map,this._currentKeyframe=new Map,this._keyframes=new Map,this._styleSummary=new Map,this._localTimelineStyles=new Map,this._pendingStyles=new Map,this._backFill=new Map,this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(n),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(n,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(l){const n=1===this._keyframes.size&&this._pendingStyles.size;this.duration||n?(this.forwardTime(this.currentTime+l),n&&this.snapshotCurrentStyles()):this.startTime+=l}fork(l,n){return this.applyStylesToKeyframe(),new Oe(this._driver,l,n||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=1,this._loadKeyframe()}forwardTime(l){this.applyStylesToKeyframe(),this.duration=l,this._loadKeyframe()}_updateStyle(l,n){this._localTimelineStyles.set(l,n),this._globalTimelineStyles.set(l,n),this._styleSummary.set(l,{time:this.currentTime,value:n})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(l){l&&this._previousKeyframe.set("easing",l);for(let[n,o]of this._globalTimelineStyles)this._backFill.set(n,o||en.kp),this._currentKeyframe.set(n,en.kp);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(l,n,o,f){n&&this._previousKeyframe.set("easing",n);const m=f&&f.params||{},I=function Qn(d,l){const n=new Map;let o;return d.forEach(f=>{if("*"===f){o??=l.keys();for(let m of o)n.set(m,en.kp)}else for(let[m,I]of f)n.set(m,I)}),n}(l,this._globalTimelineStyles);for(let[F,ae]of I){const Se=Jn(ae,m,o);this._pendingStyles.set(F,Se),this._localTimelineStyles.has(F)||this._backFill.set(F,this._globalTimelineStyles.get(F)??en.kp),this._updateStyle(F,Se)}}applyStylesToKeyframe(){0!=this._pendingStyles.size&&(this._pendingStyles.forEach((l,n)=>{this._currentKeyframe.set(n,l)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((l,n)=>{this._currentKeyframe.has(n)||this._currentKeyframe.set(n,l)}))}snapshotCurrentStyles(){for(let[l,n]of this._localTimelineStyles)this._pendingStyles.set(l,n),this._updateStyle(l,n)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){const l=[];for(let n in this._currentKeyframe)l.push(n);return l}mergeTimelineCollectedStyles(l){l._styleSummary.forEach((n,o)=>{const f=this._styleSummary.get(o);(!f||n.time>f.time)&&this._updateStyle(o,n.value)})}buildKeyframes(){this.applyStylesToKeyframe();const l=new Set,n=new Set,o=1===this._keyframes.size&&0===this.duration;let f=[];this._keyframes.forEach((F,ae)=>{const Se=new Map([...this._backFill,...F]);Se.forEach((Re,We)=>{Re===en.FX?l.add(We):Re===en.kp&&n.add(We)}),o||Se.set("offset",ae/this.duration),f.push(Se)});const m=[...l.values()],I=[...n.values()];if(o){const F=f[0],ae=new Map(F);F.set("offset",0),ae.set("offset",1),f=[F,ae]}return va(this.element,f,m,I,this.duration,this.startTime,this.easing,!1)}}class lt extends Oe{constructor(l,n,o,f,m,I,F=!1){super(l,n,I.delay),this.keyframes=o,this.preStyleProps=f,this.postStyleProps=m,this._stretchStartingKeyframe=F,this.timings={duration:I.duration,delay:I.delay,easing:I.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let l=this.keyframes,{delay:n,duration:o,easing:f}=this.timings;if(this._stretchStartingKeyframe&&n){const m=[],I=o+n,F=n/I,ae=new Map(l[0]);ae.set("offset",0),m.push(ae);const Se=new Map(l[0]);Se.set("offset",Tn(F)),m.push(Se);const Re=l.length-1;for(let We=1;We<=Re;We++){let jt=new Map(l[We]);const Jt=jt.get("offset");jt.set("offset",Tn((n+Jt*o)/I)),m.push(jt)}o=I,n=0,f="",l=m}return va(this.element,l,this.preStyleProps,this.postStyleProps,o,n,f,!0)}}function Tn(d,l=3){const n=Math.pow(10,l-1);return Math.round(d*n)/n}function Xr(d,l,n,o,f,m,I,F,ae,Se,Re,We,jt){return{type:0,element:d,triggerName:l,isRemovalTransition:f,fromState:n,fromStyles:m,toState:o,toStyles:I,timelines:F,queriedElements:ae,preStyleProps:Se,postStyleProps:Re,totalTime:We,errors:jt}}const eo={};class pr{constructor(l,n,o){this._triggerName=l,this.ast=n,this._stateStyles=o}match(l,n,o,f){return function rc(d,l,n,o,f){return d.some(m=>m(l,n,o,f))}(this.ast.matchers,l,n,o,f)}buildStyles(l,n,o){let f=this._stateStyles.get("*");return void 0!==l&&(f=this._stateStyles.get(l?.toString())||f),f?f.buildStyles(n,o):new Map}build(l,n,o,f,m,I,F,ae,Se,Re){const We=[],jt=this.ast.options&&this.ast.options.params||eo,an=this.buildStyles(o,F&&F.params||eo,We),wn=ae&&ae.params||eo,Zn=this.buildStyles(f,wn,We),bi=new Set,Hi=new Map,ur=new Map,Vi="void"===f,ua={params:cl(wn,jt),delay:this.ast.options?.delay},Jr=Re?[]:Br(l,n,this.ast.animation,m,I,an,Zn,ua,Se,We);let Ao=0;return Jr.forEach(os=>{Ao=Math.max(os.duration+os.delay,Ao)}),We.length?Xr(n,this._triggerName,o,f,Vi,an,Zn,[],[],Hi,ur,Ao,We):(Jr.forEach(os=>{const nc=os.element,il=Ae(Hi,nc,new Set);os.preStyleProps.forEach(ic=>il.add(ic));const Xg=Ae(ur,nc,new Set);os.postStyleProps.forEach(ic=>Xg.add(ic)),nc!==n&&bi.add(nc)}),Xr(n,this._triggerName,o,f,Vi,an,Zn,Jr,[...bi.values()],Hi,ur,Ao))}}function cl(d,l){const n={...l};return Object.entries(d).forEach(([o,f])=>{null!=f&&(n[o]=f)}),n}class Ml{constructor(l,n,o){this.styles=l,this.defaultParams=n,this.normalizer=o}buildStyles(l,n){const o=new Map,f=cl(l,this.defaultParams);return this.styles.styles.forEach(m=>{"string"!=typeof m&&m.forEach((I,F)=>{I&&(I=Jn(I,f,n));const ae=this.normalizer.normalizePropertyName(F,n);I=this.normalizer.normalizeStyleValue(F,ae,I,n),o.set(F,I)})}),o}}class ya{constructor(l,n,o){this.name=l,this.ast=n,this._normalizer=o,this.transitionFactories=[],this.states=new Map,n.states.forEach(f=>{this.states.set(f.name,new Ml(f.style,f.options&&f.options.params||{},o))}),Ol(this.states,"true","1"),Ol(this.states,"false","0"),n.transitions.forEach(f=>{this.transitionFactories.push(new pr(l,f,this.states))}),this.fallbackTransition=function Rl(d,l,n){return new pr(d,{type:en.If.Transition,animation:{type:en.If.Sequence,steps:[],options:null},matchers:[(I,F)=>!0],options:null,queryCount:0,depCount:0},l)}(l,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(l,n,o,f){return this.transitionFactories.find(I=>I.match(l,n,o,f))||null}matchStyles(l,n,o){return this.fallbackTransition.buildStyles(l,n,o)}}function Ol(d,l,n){d.has(l)?d.has(n)||d.set(n,d.get(l)):d.has(n)&&d.set(l,d.get(n))}const Pl=new Lo;class oc{constructor(l,n,o){this.bodyNode=l,this._driver=n,this._normalizer=o,this._animations=new Map,this._playersById=new Map,this.players=[]}register(l,n){const o=[],m=Xs(this._driver,n,o,[]);if(o.length)throw function Qt(d){return new c.wOt(3503,!1)}();this._animations.set(l,m)}_buildPlayer(l,n,o){const f=l.element,m=ln(this._normalizer,l.keyframes,n,o);return this._driver.animate(f,m,l.duration,l.delay,l.easing,[],!0)}create(l,n,o={}){const f=[],m=this._animations.get(l);let I;const F=new Map;if(m?(I=Br(this._driver,n,m,me,ke,new Map,new Map,o,Pl,f),I.forEach(Re=>{const We=Ae(F,Re.element,new Map);Re.postStyleProps.forEach(jt=>We.set(jt,null))})):(f.push(function Un(){return new c.wOt(3300,!1)}()),I=[]),f.length)throw function _n(d){return new c.wOt(3504,!1)}();F.forEach((Re,We)=>{Re.forEach((jt,Jt)=>{Re.set(Jt,this._driver.computeStyle(We,Jt,en.kp))})});const Se=Mt(I.map(Re=>{const We=F.get(Re.element);return this._buildPlayer(Re,new Map,We)}));return this._playersById.set(l,Se),Se.onDestroy(()=>this.destroy(l)),this.players.push(Se),Se}destroy(l){const n=this._getPlayer(l);n.destroy(),this._playersById.delete(l);const o=this.players.indexOf(n);o>=0&&this.players.splice(o,1)}_getPlayer(l){const n=this._playersById.get(l);if(!n)throw function Dn(d){return new c.wOt(3301,!1)}();return n}listen(l,n,o,f){const m=vt(n,"","","");return sn(this._getPlayer(l),o,m,f),()=>{}}command(l,n,o,f){if("register"==o)return void this.register(l,f[0]);if("create"==o)return void this.create(l,n,f[0]||{});const m=this._getPlayer(l);switch(o){case"play":m.play();break;case"pause":m.pause();break;case"reset":m.reset();break;case"restart":m.restart();break;case"finish":m.finish();break;case"init":m.init();break;case"setPosition":m.setPosition(parseFloat(f[0]));break;case"destroy":this.destroy(l)}}}const Zo="ng-animate-queued",Yo="ng-animate-disabled",ul=[],ri={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},_r={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},_i="__ng_removed";class Sr{get params(){return this.options.params}constructor(l,n=""){this.namespaceId=n;const o=l&&l.hasOwnProperty("value");if(this.value=function ds(d){return d??null}(o?l.value:l),o){const{value:m,...I}=l;this.options=I}else this.options={};this.options.params||(this.options.params={})}absorbOptions(l){const n=l.params;if(n){const o=this.options.params;Object.keys(n).forEach(f=>{null==o[f]&&(o[f]=n[f])})}}}const cr="void",Fa=new Sr(cr);class $a{constructor(l,n,o){this.id=l,this.hostElement=n,this._engine=o,this.players=[],this._triggers=new Map,this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+l,to(n,this._hostClassName)}listen(l,n,o,f){if(!this._triggers.has(n))throw function di(d,l){return new c.wOt(3302,!1)}();if(null==o||0==o.length)throw function $i(d){return new c.wOt(3303,!1)}();if(!function wa(d){return"start"==d||"done"==d}(o))throw function ki(d,l){return new c.wOt(3400,!1)}();const m=Ae(this._elementListeners,l,[]),I={name:n,phase:o,callback:f};m.push(I);const F=Ae(this._engine.statesByElement,l,new Map);return F.has(n)||(to(l,je),to(l,je+"-"+n),F.set(n,Fa)),()=>{this._engine.afterFlush(()=>{const ae=m.indexOf(I);ae>=0&&m.splice(ae,1),this._triggers.has(n)||F.delete(n)})}}register(l,n){return!this._triggers.has(l)&&(this._triggers.set(l,n),!0)}_getTrigger(l){const n=this._triggers.get(l);if(!n)throw function Ti(d){return new c.wOt(3401,!1)}();return n}trigger(l,n,o,f=!0){const m=this._getTrigger(n),I=new Ua(this.id,n,l);let F=this._engine.statesByElement.get(l);F||(to(l,je),to(l,je+"-"+n),this._engine.statesByElement.set(l,F=new Map));let ae=F.get(n);const Se=new Sr(o,this.id);if(!(o&&o.hasOwnProperty("value"))&&ae&&Se.absorbOptions(ae.options),F.set(n,Se),ae||(ae=Fa),Se.value!==cr&&ae.value===Se.value){if(!function us(d,l){const n=Object.keys(d),o=Object.keys(l);if(n.length!=o.length)return!1;for(let f=0;f<n.length;f++){const m=n[f];if(!l.hasOwnProperty(m)||d[m]!==l[m])return!1}return!0}(ae.params,Se.params)){const wn=[],Zn=m.matchStyles(ae.value,ae.params,wn),bi=m.matchStyles(Se.value,Se.params,wn);wn.length?this._engine.reportError(wn):this._engine.afterFlush(()=>{sr(l,Zn),Ui(l,bi)})}return}const jt=Ae(this._engine.playersByElement,l,[]);jt.forEach(wn=>{wn.namespaceId==this.id&&wn.triggerName==n&&wn.queued&&wn.destroy()});let Jt=m.matchTransition(ae.value,Se.value,l,Se.params),an=!1;if(!Jt){if(!f)return;Jt=m.fallbackTransition,an=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:l,triggerName:n,transition:Jt,fromState:ae,toState:Se,player:I,isFallbackTransition:an}),an||(to(l,Zo),I.onStart(()=>{Zs(l,Zo)})),I.onDone(()=>{let wn=this.players.indexOf(I);wn>=0&&this.players.splice(wn,1);const Zn=this._engine.playersByElement.get(l);if(Zn){let bi=Zn.indexOf(I);bi>=0&&Zn.splice(bi,1)}}),this.players.push(I),jt.push(I),I}deregister(l){this._triggers.delete(l),this._engine.statesByElement.forEach(n=>n.delete(l)),this._elementListeners.forEach((n,o)=>{this._elementListeners.set(o,n.filter(f=>f.name!=l))})}clearElementCache(l){this._engine.statesByElement.delete(l),this._elementListeners.delete(l);const n=this._engine.playersByElement.get(l);n&&(n.forEach(o=>o.destroy()),this._engine.playersByElement.delete(l))}_signalRemovalForInnerTriggers(l,n){const o=this._engine.driver.query(l,It,!0);o.forEach(f=>{if(f[_i])return;const m=this._engine.fetchNamespacesByElement(f);m.size?m.forEach(I=>I.triggerLeaveAnimation(f,n,!1,!0)):this.clearElementCache(f)}),this._engine.afterFlushAnimationsDone(()=>o.forEach(f=>this.clearElementCache(f)))}triggerLeaveAnimation(l,n,o,f){const m=this._engine.statesByElement.get(l),I=new Map;if(m){const F=[];if(m.forEach((ae,Se)=>{if(I.set(Se,ae.value),this._triggers.has(Se)){const Re=this.trigger(l,Se,cr,f);Re&&F.push(Re)}}),F.length)return this._engine.markElementAsRemoved(this.id,l,!0,n,I),o&&Mt(F).onDone(()=>this._engine.processLeaveNode(l)),!0}return!1}prepareLeaveAnimationListeners(l){const n=this._elementListeners.get(l),o=this._engine.statesByElement.get(l);if(n&&o){const f=new Set;n.forEach(m=>{const I=m.name;if(f.has(I))return;f.add(I);const ae=this._triggers.get(I).fallbackTransition,Se=o.get(I)||Fa,Re=new Sr(cr),We=new Ua(this.id,I,l);this._engine.totalQueuedPlayers++,this._queue.push({element:l,triggerName:I,transition:ae,fromState:Se,toState:Re,player:We,isFallbackTransition:!0})})}}removeNode(l,n){const o=this._engine;if(l.childElementCount&&this._signalRemovalForInnerTriggers(l,n),this.triggerLeaveAnimation(l,n,!0))return;let f=!1;if(o.totalAnimations){const m=o.players.length?o.playersByQueriedElement.get(l):[];if(m&&m.length)f=!0;else{let I=l;for(;I=I.parentNode;)if(o.statesByElement.get(I)){f=!0;break}}}if(this.prepareLeaveAnimationListeners(l),f)o.markElementAsRemoved(this.id,l,!1,n);else{const m=l[_i];(!m||m===ri)&&(o.afterFlush(()=>this.clearElementCache(l)),o.destroyInnerAnimations(l),o._onRemovalComplete(l,n))}}insertNode(l,n){to(l,this._hostClassName)}drainQueuedTransitions(l){const n=[];return this._queue.forEach(o=>{const f=o.player;if(f.destroyed)return;const m=o.element,I=this._elementListeners.get(m);I&&I.forEach(F=>{if(F.name==o.triggerName){const ae=vt(m,o.triggerName,o.fromState.value,o.toState.value);ae._data=l,sn(o.player,F.phase,ae,F.callback)}}),f.markedForDestroy?this._engine.afterFlush(()=>{f.destroy()}):n.push(o)}),this._queue=[],n.sort((o,f)=>{const m=o.transition.ast.depCount,I=f.transition.ast.depCount;return 0==m||0==I?m-I:this._engine.driver.containsElement(o.element,f.element)?1:-1})}destroy(l){this.players.forEach(n=>n.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,l)}}class Ca{_onRemovalComplete(l,n){this.onRemovalComplete(l,n)}constructor(l,n,o,f){this.bodyNode=l,this.driver=n,this._normalizer=o,this.scheduler=f,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(m,I)=>{}}get queuedPlayers(){const l=[];return this._namespaceList.forEach(n=>{n.players.forEach(o=>{o.queued&&l.push(o)})}),l}createNamespace(l,n){const o=new $a(l,n,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,n)?this._balanceNamespaceList(o,n):(this.newHostElements.set(n,o),this.collectEnterElement(n)),this._namespaceLookup[l]=o}_balanceNamespaceList(l,n){const o=this._namespaceList,f=this.namespacesByHostElement;if(o.length-1>=0){let I=!1,F=this.driver.getParentElement(n);for(;F;){const ae=f.get(F);if(ae){const Se=o.indexOf(ae);o.splice(Se+1,0,l),I=!0;break}F=this.driver.getParentElement(F)}I||o.unshift(l)}else o.push(l);return f.set(n,l),l}register(l,n){let o=this._namespaceLookup[l];return o||(o=this.createNamespace(l,n)),o}registerTrigger(l,n,o){let f=this._namespaceLookup[l];f&&f.register(n,o)&&this.totalAnimations++}destroy(l,n){l&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{const o=this._fetchNamespace(l);this.namespacesByHostElement.delete(o.hostElement);const f=this._namespaceList.indexOf(o);f>=0&&this._namespaceList.splice(f,1),o.destroy(n),delete this._namespaceLookup[l]}))}_fetchNamespace(l){return this._namespaceLookup[l]}fetchNamespacesByElement(l){const n=new Set,o=this.statesByElement.get(l);if(o)for(let f of o.values())if(f.namespaceId){const m=this._fetchNamespace(f.namespaceId);m&&n.add(m)}return n}trigger(l,n,o,f){if(Ds(n)){const m=this._fetchNamespace(l);if(m)return m.trigger(n,o,f),!0}return!1}insertNode(l,n,o,f){if(!Ds(n))return;const m=n[_i];if(m&&m.setForRemoval){m.setForRemoval=!1,m.setForMove=!0;const I=this.collectedLeaveElements.indexOf(n);I>=0&&this.collectedLeaveElements.splice(I,1)}if(l){const I=this._fetchNamespace(l);I&&I.insertNode(n,o)}f&&this.collectEnterElement(n)}collectEnterElement(l){this.collectedEnterElements.push(l)}markElementAsDisabled(l,n){n?this.disabledNodes.has(l)||(this.disabledNodes.add(l),to(l,Yo)):this.disabledNodes.has(l)&&(this.disabledNodes.delete(l),Zs(l,Yo))}removeNode(l,n,o){if(Ds(n)){this.scheduler?.notify();const f=l?this._fetchNamespace(l):null;f?f.removeNode(n,o):this.markElementAsRemoved(l,n,!1,o);const m=this.namespacesByHostElement.get(n);m&&m.id!==l&&m.removeNode(n,o)}else this._onRemovalComplete(n,o)}markElementAsRemoved(l,n,o,f,m){this.collectedLeaveElements.push(n),n[_i]={namespaceId:l,setForRemoval:f,hasAnimation:o,removedBeforeQueried:!1,previousTriggersValues:m}}listen(l,n,o,f,m){return Ds(n)?this._fetchNamespace(l).listen(n,o,f,m):()=>{}}_buildInstruction(l,n,o,f,m){return l.transition.build(this.driver,l.element,l.fromState.value,l.toState.value,o,f,l.fromState.options,l.toState.options,n,m)}destroyInnerAnimations(l){let n=this.driver.query(l,It,!0);n.forEach(o=>this.destroyActiveAnimationsForElement(o)),0!=this.playersByQueriedElement.size&&(n=this.driver.query(l,Ut,!0),n.forEach(o=>this.finishActiveQueriedAnimationOnElement(o)))}destroyActiveAnimationsForElement(l){const n=this.playersByElement.get(l);n&&n.forEach(o=>{o.queued?o.markedForDestroy=!0:o.destroy()})}finishActiveQueriedAnimationOnElement(l){const n=this.playersByQueriedElement.get(l);n&&n.forEach(o=>o.finish())}whenRenderingDone(){return new Promise(l=>{if(this.players.length)return Mt(this.players).onDone(()=>l());l()})}processLeaveNode(l){const n=l[_i];if(n&&n.setForRemoval){if(l[_i]=ri,n.namespaceId){this.destroyInnerAnimations(l);const o=this._fetchNamespace(n.namespaceId);o&&o.clearElementCache(l)}this._onRemovalComplete(l,n.setForRemoval)}l.classList?.contains(Yo)&&this.markElementAsDisabled(l,!1),this.driver.query(l,".ng-animate-disabled",!0).forEach(o=>{this.markElementAsDisabled(o,!1)})}flush(l=-1){let n=[];if(this.newHostElements.size&&(this.newHostElements.forEach((o,f)=>this._balanceNamespaceList(o,f)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let o=0;o<this.collectedEnterElements.length;o++)to(this.collectedEnterElements[o],"ng-star-inserted");if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){const o=[];try{n=this._flushAnimations(o,l)}finally{for(let f=0;f<o.length;f++)o[f]()}}else for(let o=0;o<this.collectedLeaveElements.length;o++)this.processLeaveNode(this.collectedLeaveElements[o]);if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(o=>o()),this._flushFns=[],this._whenQuietFns.length){const o=this._whenQuietFns;this._whenQuietFns=[],n.length?Mt(n).onDone(()=>{o.forEach(f=>f())}):o.forEach(f=>f())}}reportError(l){throw function He(d){return new c.wOt(3402,!1)}()}_flushAnimations(l,n){const o=new Lo,f=[],m=new Map,I=[],F=new Map,ae=new Map,Se=new Map,Re=new Set;this.disabledNodes.forEach(On=>{Re.add(On);const zn=this.driver.query(On,".ng-animate-queued",!0);for(let Kn=0;Kn<zn.length;Kn++)Re.add(zn[Kn])});const We=this.bodyNode,jt=Array.from(this.statesByElement.keys()),Jt=ja(jt,this.collectedEnterElements),an=new Map;let wn=0;Jt.forEach((On,zn)=>{const Kn=me+wn++;an.set(zn,Kn),On.forEach(xi=>to(xi,Kn))});const Zn=[],bi=new Set,Hi=new Set;for(let On=0;On<this.collectedLeaveElements.length;On++){const zn=this.collectedLeaveElements[On],Kn=zn[_i];Kn&&Kn.setForRemoval&&(Zn.push(zn),bi.add(zn),Kn.hasAnimation?this.driver.query(zn,".ng-star-inserted",!0).forEach(xi=>bi.add(xi)):Hi.add(zn))}const ur=new Map,Vi=ja(jt,Array.from(bi));Vi.forEach((On,zn)=>{const Kn=ke+wn++;ur.set(zn,Kn),On.forEach(xi=>to(xi,Kn))}),l.push(()=>{Jt.forEach((On,zn)=>{const Kn=an.get(zn);On.forEach(xi=>Zs(xi,Kn))}),Vi.forEach((On,zn)=>{const Kn=ur.get(zn);On.forEach(xi=>Zs(xi,Kn))}),Zn.forEach(On=>{this.processLeaveNode(On)})});const ua=[],Jr=[];for(let On=this._namespaceList.length-1;On>=0;On--)this._namespaceList[On].drainQueuedTransitions(n).forEach(Kn=>{const xi=Kn.player,so=Kn.element;if(ua.push(xi),this.collectedEnterElements.length){const Io=so[_i];if(Io&&Io.setForMove){if(Io.previousTriggersValues&&Io.previousTriggersValues.has(Kn.triggerName)){const rl=Io.previousTriggersValues.get(Kn.triggerName),ss=this.statesByElement.get(Kn.element);if(ss&&ss.has(Kn.triggerName)){const Fu=ss.get(Kn.triggerName);Fu.value=rl,ss.set(Kn.triggerName,Fu)}}return void xi.destroy()}}const ha=!We||!this.driver.containsElement(We,so),ws=ur.get(so),Al=an.get(so),Rr=this._buildInstruction(Kn,o,Al,ws,ha);if(Rr.errors&&Rr.errors.length)return void Jr.push(Rr);if(ha)return xi.onStart(()=>sr(so,Rr.fromStyles)),xi.onDestroy(()=>Ui(so,Rr.toStyles)),void f.push(xi);if(Kn.isFallbackTransition)return xi.onStart(()=>sr(so,Rr.fromStyles)),xi.onDestroy(()=>Ui(so,Rr.toStyles)),void f.push(xi);const Lu=[];Rr.timelines.forEach(Io=>{Io.stretchStartingKeyframe=!0,this.disabledNodes.has(Io.element)||Lu.push(Io)}),Rr.timelines=Lu,o.append(so,Rr.timelines),I.push({instruction:Rr,player:xi,element:so}),Rr.queriedElements.forEach(Io=>Ae(F,Io,[]).push(xi)),Rr.preStyleProps.forEach((Io,rl)=>{if(Io.size){let ss=ae.get(rl);ss||ae.set(rl,ss=new Set),Io.forEach((Fu,Nf)=>ss.add(Nf))}}),Rr.postStyleProps.forEach((Io,rl)=>{let ss=Se.get(rl);ss||Se.set(rl,ss=new Set),Io.forEach((Fu,Nf)=>ss.add(Nf))})});if(Jr.length){const On=[];Jr.forEach(zn=>{On.push(function et(d,l){return new c.wOt(3505,!1)}())}),ua.forEach(zn=>zn.destroy()),this.reportError(On)}const Ao=new Map,os=new Map;I.forEach(On=>{const zn=On.element;o.has(zn)&&(os.set(zn,zn),this._beforeAnimationBuild(On.player.namespaceId,On.instruction,Ao))}),f.forEach(On=>{const zn=On.element;this._getPreviousPlayers(zn,!1,On.namespaceId,On.triggerName,null).forEach(xi=>{Ae(Ao,zn,[]).push(xi),xi.destroy()})});const nc=Zn.filter(On=>Ys(On,ae,Se)),il=new Map;Va(il,this.driver,Hi,Se,en.kp).forEach(On=>{Ys(On,ae,Se)&&nc.push(On)});const ic=new Map;Jt.forEach((On,zn)=>{Va(ic,this.driver,new Set(On),ae,en.FX)}),nc.forEach(On=>{const zn=il.get(On),Kn=ic.get(On);il.set(On,new Map([...zn?.entries()??[],...Kn?.entries()??[]]))});const Pu=[],Of=[],Nu={};I.forEach(On=>{const{element:zn,player:Kn,instruction:xi}=On;if(o.has(zn)){if(Re.has(zn))return Kn.onDestroy(()=>Ui(zn,xi.toStyles)),Kn.disabled=!0,Kn.overrideTotalTime(xi.totalTime),void f.push(Kn);let so=Nu;if(os.size>1){let ws=zn;const Al=[];for(;ws=ws.parentNode;){const Rr=os.get(ws);if(Rr){so=Rr;break}Al.push(ws)}Al.forEach(Rr=>os.set(Rr,so))}const ha=this._buildAnimation(Kn.namespaceId,xi,Ao,m,ic,il);if(Kn.setRealPlayer(ha),so===Nu)Pu.push(Kn);else{const ws=this.playersByElement.get(so);ws&&ws.length&&(Kn.parentPlayer=Mt(ws)),f.push(Kn)}}else sr(zn,xi.fromStyles),Kn.onDestroy(()=>Ui(zn,xi.toStyles)),Of.push(Kn),Re.has(zn)&&f.push(Kn)}),Of.forEach(On=>{const zn=m.get(On.element);if(zn&&zn.length){const Kn=Mt(zn);On.setRealPlayer(Kn)}}),f.forEach(On=>{On.parentPlayer?On.syncPlayerEvents(On.parentPlayer):On.destroy()});for(let On=0;On<Zn.length;On++){const zn=Zn[On],Kn=zn[_i];if(Zs(zn,ke),Kn&&Kn.hasAnimation)continue;let xi=[];if(F.size){let ha=F.get(zn);ha&&ha.length&&xi.push(...ha);let ws=this.driver.query(zn,Ut,!0);for(let Al=0;Al<ws.length;Al++){let Rr=F.get(ws[Al]);Rr&&Rr.length&&xi.push(...Rr)}}const so=xi.filter(ha=>!ha.destroyed);so.length?za(this,zn,so):this.processLeaveNode(zn)}return Zn.length=0,Pu.forEach(On=>{this.players.push(On),On.onDone(()=>{On.destroy();const zn=this.players.indexOf(On);this.players.splice(zn,1)}),On.play()}),Pu}afterFlush(l){this._flushFns.push(l)}afterFlushAnimationsDone(l){this._whenQuietFns.push(l)}_getPreviousPlayers(l,n,o,f,m){let I=[];if(n){const F=this.playersByQueriedElement.get(l);F&&(I=F)}else{const F=this.playersByElement.get(l);if(F){const ae=!m||m==cr;F.forEach(Se=>{Se.queued||!ae&&Se.triggerName!=f||I.push(Se)})}}return(o||f)&&(I=I.filter(F=>!(o&&o!=F.namespaceId||f&&f!=F.triggerName))),I}_beforeAnimationBuild(l,n,o){const m=n.element,I=n.isRemovalTransition?void 0:l,F=n.isRemovalTransition?void 0:n.triggerName;for(const ae of n.timelines){const Se=ae.element,Re=Se!==m,We=Ae(o,Se,[]);this._getPreviousPlayers(Se,Re,I,F,n.toState).forEach(Jt=>{const an=Jt.getRealPlayer();an.beforeDestroy&&an.beforeDestroy(),Jt.destroy(),We.push(Jt)})}sr(m,n.fromStyles)}_buildAnimation(l,n,o,f,m,I){const F=n.triggerName,ae=n.element,Se=[],Re=new Set,We=new Set,jt=n.timelines.map(an=>{const wn=an.element;Re.add(wn);const Zn=wn[_i];if(Zn&&Zn.removedBeforeQueried)return new en.sf(an.duration,an.delay);const bi=wn!==ae,Hi=function jc(d){const l=[];return hl(d,l),l}((o.get(wn)||ul).map(Ao=>Ao.getRealPlayer())).filter(Ao=>!!Ao.element&&Ao.element===wn),ur=m.get(wn),Vi=I.get(wn),ua=ln(this._normalizer,an.keyframes,ur,Vi),Jr=this._buildPlayer(an,ua,Hi);if(an.subTimeline&&f&&We.add(wn),bi){const Ao=new Ua(l,F,wn);Ao.setRealPlayer(Jr),Se.push(Ao)}return Jr});Se.forEach(an=>{Ae(this.playersByQueriedElement,an.element,[]).push(an),an.onDone(()=>function Ba(d,l,n){let o=d.get(l);if(o){if(o.length){const f=o.indexOf(n);o.splice(f,1)}0==o.length&&d.delete(l)}return o}(this.playersByQueriedElement,an.element,an))}),Re.forEach(an=>to(an,Vt));const Jt=Mt(jt);return Jt.onDestroy(()=>{Re.forEach(an=>Zs(an,Vt)),Ui(ae,n.toStyles)}),We.forEach(an=>{Ae(f,an,[]).push(Jt)}),Jt}_buildPlayer(l,n,o){return n.length>0?this.driver.animate(l.element,n,l.duration,l.delay,l.easing,o):new en.sf(l.duration,l.delay)}}class Ua{constructor(l,n,o){this.namespaceId=l,this.triggerName=n,this.element=o,this._player=new en.sf,this._containsRealPlayer=!1,this._queuedCallbacks=new Map,this.destroyed=!1,this.parentPlayer=null,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(l){this._containsRealPlayer||(this._player=l,this._queuedCallbacks.forEach((n,o)=>{n.forEach(f=>sn(l,o,void 0,f))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(l.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(l){this.totalTime=l}syncPlayerEvents(l){const n=this._player;n.triggerCallback&&l.onStart(()=>n.triggerCallback("start")),l.onDone(()=>this.finish()),l.onDestroy(()=>this.destroy())}_queueEvent(l,n){Ae(this._queuedCallbacks,l,[]).push(n)}onDone(l){this.queued&&this._queueEvent("done",l),this._player.onDone(l)}onStart(l){this.queued&&this._queueEvent("start",l),this._player.onStart(l)}onDestroy(l){this.queued&&this._queueEvent("destroy",l),this._player.onDestroy(l)}init(){this._player.init()}hasStarted(){return!this.queued&&this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(l){this.queued||this._player.setPosition(l)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(l){const n=this._player;n.triggerCallback&&n.triggerCallback(l)}}function Ds(d){return d&&1===d.nodeType}function Ha(d,l){const n=d.style.display;return d.style.display=l??"none",n}function Va(d,l,n,o,f){const m=[];n.forEach(ae=>m.push(Ha(ae)));const I=[];o.forEach((ae,Se)=>{const Re=new Map;ae.forEach(We=>{const jt=l.computeStyle(Se,We,f);Re.set(We,jt),(!jt||0==jt.length)&&(Se[_i]=_r,I.push(Se))}),d.set(Se,Re)});let F=0;return n.forEach(ae=>Ha(ae,m[F++])),I}function ja(d,l){const n=new Map;if(d.forEach(F=>n.set(F,[])),0==l.length)return n;const f=new Set(l),m=new Map;function I(F){if(!F)return 1;let ae=m.get(F);if(ae)return ae;const Se=F.parentNode;return ae=n.has(Se)?Se:f.has(Se)?1:I(Se),m.set(F,ae),ae}return l.forEach(F=>{const ae=I(F);1!==ae&&n.get(ae).push(F)}),n}function to(d,l){d.classList?.add(l)}function Zs(d,l){d.classList?.remove(l)}function za(d,l,n){Mt(n).onDone(()=>d.processLeaveNode(l))}function hl(d,l){for(let n=0;n<d.length;n++){const o=d[n];o instanceof en.ui?hl(o.players,l):l.push(o)}}function Ys(d,l,n){const o=n.get(d);if(!o)return!1;let f=l.get(d);return f?o.forEach(m=>f.add(m)):l.set(d,o),n.delete(d),!0}class hs{constructor(l,n,o,f){this._driver=n,this._normalizer=o,this._triggerCache={},this.onRemovalComplete=(m,I)=>{},this._transitionEngine=new Ca(l.body,n,o,f),this._timelineEngine=new oc(l.body,n,o),this._transitionEngine.onRemovalComplete=(m,I)=>this.onRemovalComplete(m,I)}registerTrigger(l,n,o,f,m){const I=l+"-"+f;let F=this._triggerCache[I];if(!F){const ae=[],Re=Xs(this._driver,m,ae,[]);if(ae.length)throw function Wt(d,l){return new c.wOt(3404,!1)}();F=function Gi(d,l,n){return new ya(d,l,n)}(f,Re,this._normalizer),this._triggerCache[I]=F}this._transitionEngine.registerTrigger(n,f,F)}register(l,n){this._transitionEngine.register(l,n)}destroy(l,n){this._transitionEngine.destroy(l,n)}onInsert(l,n,o,f){this._transitionEngine.insertNode(l,n,o,f)}onRemove(l,n,o){this._transitionEngine.removeNode(l,n,o)}disableAnimations(l,n){this._transitionEngine.markElementAsDisabled(l,n)}process(l,n,o,f){if("@"==o.charAt(0)){const[m,I]=ze(o);this._timelineEngine.command(m,n,I,f)}else this._transitionEngine.trigger(l,n,o,f)}listen(l,n,o,f,m){if("@"==o.charAt(0)){const[I,F]=ze(o);return this._timelineEngine.listen(I,n,F,m)}return this._transitionEngine.listen(l,n,o,f,m)}flush(l=-1){this._transitionEngine.flush(l)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(l){this._transitionEngine.afterFlushAnimationsDone(l)}}class Ea{static#e=this.initialStylesByElement=new WeakMap;constructor(l,n,o){this._element=l,this._startStyles=n,this._endStyles=o,this._state=0;let f=Ea.initialStylesByElement.get(l);f||Ea.initialStylesByElement.set(l,f=new Map),this._initialStyles=f}start(){this._state<1&&(this._startStyles&&Ui(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Ui(this._element,this._initialStyles),this._endStyles&&(Ui(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(Ea.initialStylesByElement.delete(this._element),this._startStyles&&(sr(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(sr(this._element,this._endStyles),this._endStyles=null),Ui(this._element,this._initialStyles),this._state=3)}}function Ga(d){let l=null;return d.forEach((n,o)=>{(function xs(d){return"display"===d||"position"===d})(o)&&(l=l||new Map,l.set(o,n))}),l}class Zr{constructor(l,n,o,f){this.element=l,this.keyframes=n,this.options=o,this._specialStyles=f,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this._originalOnDoneFns=[],this._originalOnStartFns=[],this.time=0,this.parentPlayer=null,this.currentSnapshot=new Map,this._duration=o.duration,this._delay=o.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(l=>l()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;const l=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,l,this.options),this._finalKeyframe=l.length?l[l.length-1]:new Map;const n=()=>this._onFinish();this.domPlayer.addEventListener("finish",n),this.onDestroy(()=>{this.domPlayer.removeEventListener("finish",n)})}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_convertKeyframesToObject(l){const n=[];return l.forEach(o=>{n.push(Object.fromEntries(o))}),n}_triggerWebAnimation(l,n,o){return l.animate(this._convertKeyframesToObject(n),o)}onStart(l){this._originalOnStartFns.push(l),this._onStartFns.push(l)}onDone(l){this._originalOnDoneFns.push(l),this._onDoneFns.push(l)}onDestroy(l){this._onDestroyFns.push(l)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(l=>l()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(l=>l()),this._onDestroyFns=[])}setPosition(l){void 0===this.domPlayer&&this.init(),this.domPlayer.currentTime=l*this.time}getPosition(){return+(this.domPlayer.currentTime??0)/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){const l=new Map;this.hasStarted()&&this._finalKeyframe.forEach((o,f)=>{"offset"!==f&&l.set(f,this._finished?o:qo(this.element,f))}),this.currentSnapshot=l}triggerCallback(l){const n="start"===l?this._onStartFns:this._onDoneFns;n.forEach(o=>o()),n.length=0}}class ks{validateStyleProperty(l){return!0}validateAnimatableStyleProperty(l){return!0}matchesElement(l,n){return!1}containsElement(l,n){return vi(l,n)}getParentElement(l){return ut(l)}query(l,n,o){return lr(l,n,o)}computeStyle(l,n,o){return qo(l,n)}animate(l,n,o,f,m,I=[]){const ae={duration:o,delay:f,fill:0==f?"both":"forwards"};m&&(ae.easing=m);const Se=new Map,Re=I.filter(Jt=>Jt instanceof Zr);(function jn(d,l){return 0===d||0===l})(o,f)&&Re.forEach(Jt=>{Jt.currentSnapshot.forEach((an,wn)=>Se.set(wn,an))});let We=function Si(d){return d.length?d[0]instanceof Map?d:d.map(l=>new Map(Object.entries(l))):[]}(n).map(Jt=>new Map(Jt));We=function No(d,l,n){if(n.size&&l.length){let o=l[0],f=[];if(n.forEach((m,I)=>{o.has(I)||f.push(I),o.set(I,m)}),f.length)for(let m=1;m<l.length;m++){let I=l[m];f.forEach(F=>I.set(F,qo(d,F)))}}return l}(l,We,Se);const jt=function _a(d,l){let n=null,o=null;return Array.isArray(l)&&l.length?(n=Ga(l[0]),l.length>1&&(o=Ga(l[l.length-1]))):l instanceof Map&&(n=Ga(l)),n||o?new Ea(d,n,o):null}(l,We);return new Zr(l,We,ae,jt)}}const Ta="@.disabled";class Ms{constructor(l,n,o,f){this.namespaceId=l,this.delegate=n,this.engine=o,this._onDestroy=f,this.\u0275type=0}get data(){return this.delegate.data}destroyNode(l){this.delegate.destroyNode?.(l)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(l,n){return this.delegate.createElement(l,n)}createComment(l){return this.delegate.createComment(l)}createText(l){return this.delegate.createText(l)}appendChild(l,n){this.delegate.appendChild(l,n),this.engine.onInsert(this.namespaceId,n,l,!1)}insertBefore(l,n,o,f=!0){this.delegate.insertBefore(l,n,o),this.engine.onInsert(this.namespaceId,n,l,f)}removeChild(l,n,o){this.engine.onRemove(this.namespaceId,n,this.delegate)}selectRootElement(l,n){return this.delegate.selectRootElement(l,n)}parentNode(l){return this.delegate.parentNode(l)}nextSibling(l){return this.delegate.nextSibling(l)}setAttribute(l,n,o,f){this.delegate.setAttribute(l,n,o,f)}removeAttribute(l,n,o){this.delegate.removeAttribute(l,n,o)}addClass(l,n){this.delegate.addClass(l,n)}removeClass(l,n){this.delegate.removeClass(l,n)}setStyle(l,n,o,f){this.delegate.setStyle(l,n,o,f)}removeStyle(l,n,o){this.delegate.removeStyle(l,n,o)}setProperty(l,n,o){"@"==n.charAt(0)&&n==Ta?this.disableAnimations(l,!!o):this.delegate.setProperty(l,n,o)}setValue(l,n){this.delegate.setValue(l,n)}listen(l,n,o){return this.delegate.listen(l,n,o)}disableAnimations(l,n){this.engine.disableAnimations(l,n)}}class zc extends Ms{constructor(l,n,o,f,m){super(n,o,f,m),this.factory=l,this.namespaceId=n}setProperty(l,n,o){"@"==n.charAt(0)?"."==n.charAt(1)&&n==Ta?this.disableAnimations(l,o=void 0===o||!!o):this.engine.process(this.namespaceId,l,n.slice(1),o):this.delegate.setProperty(l,n,o)}listen(l,n,o){if("@"==n.charAt(0)){const f=function Fl(d){switch(d){case"body":return document.body;case"document":return document;case"window":return window;default:return d}}(l);let m=n.slice(1),I="";return"@"!=m.charAt(0)&&([m,I]=function Wa(d){const l=d.indexOf(".");return[d.substring(0,l),d.slice(l+1)]}(m)),this.engine.listen(this.namespaceId,f,m,I,F=>{this.factory.scheduleListenerCallback(F._data||-1,o,F)})}return this.delegate.listen(l,n,o)}}class fl{constructor(l,n,o){this.delegate=l,this.engine=n,this._zone=o,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,n.onRemovalComplete=(f,m)=>{const I=m?.parentNode(f);I&&m.removeChild(I,f)}}createRenderer(l,n){const f=this.delegate.createRenderer(l,n);if(!l||!n?.data?.animation){const Se=this._rendererCache;let Re=Se.get(f);return Re||(Re=new Ms("",f,this.engine,()=>Se.delete(f)),Se.set(f,Re)),Re}const m=n.id,I=n.id+"-"+this._currentId;this._currentId++,this.engine.register(I,l);const F=Se=>{Array.isArray(Se)?Se.forEach(F):this.engine.registerTrigger(m,I,l,Se.name,Se)};return n.data.animation.forEach(F),new zc(this,I,f,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(l,n,o){if(l>=0&&l<this._microtaskId)return void this._zone.run(()=>n(o));const f=this._animationCallbacksBuffer;0==f.length&&queueMicrotask(()=>{this._zone.run(()=>{f.forEach(m=>{const[I,F]=m;I(F)}),this._animationCallbacksBuffer=[]})}),f.push([n,o])}end(){this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}const M=[{provide:_t,useFactory:function Js(){return new pa}},{provide:hs,useClass:(()=>{class d extends hs{constructor(n,o,f){super(n,o,f,(0,c.WQX)(c.An2,{optional:!0}))}ngOnDestroy(){this.flush()}static#e=this.\u0275fac=function(o){return new(o||d)(c.KVO(re.qQ),c.KVO(Ln),c.KVO(_t))};static#t=this.\u0275prov=c.jDH({token:d,factory:d.\u0275fac})}return d})()},{provide:c._9s,useFactory:function Ka(d,l,n){return new fl(d,l,n)},deps:[s.B7,hs,c.SKi]}],De=[{provide:Ln,useFactory:()=>new ks},{provide:c.bc$,useValue:"BrowserAnimations"},...M],ne=[{provide:Ln,useClass:Cr},{provide:c.bc$,useValue:"NoopAnimations"},...M];var yn=h(4523),ai=h(8173),Pi=h(5189),Ni=h(7306);class si{static loggerCallback(l,n){switch(l){case ai.$.Error:return void console.error(n);case ai.$.Info:return void console.info(n);case ai.$.Verbose:return void console.debug(n);case ai.$.Warning:return void console.warn(n);default:return void console.log(n)}}constructor(l){let n;this.browserEnvironment=typeof window<"u",this.config=(0,Pi.tD)(l,this.browserEnvironment);try{n=window[E.Al.SessionStorage]}catch{}const o=n?.getItem(E.L$),f=n?.getItem(E.P3)?.toLowerCase(),m="true"===f||"false"!==f&&void 0,I={...this.config.system.loggerOptions},F=o&&Object.keys(ai.$).includes(o)?ai.$[o]:void 0;F&&(I.loggerCallback=si.loggerCallback,I.logLevel=F),void 0!==m&&(I.piiLoggingEnabled=m),this.logger=new ai.V(I,Ni.U,Ni.r),this.available=!1}getConfig(){return this.config}getLogger(){return this.logger}isAvailable(){return this.available}isBrowserEnvironment(){return this.browserEnvironment}}let ir=(()=>{class d extends si{getModuleName(){return d.MODULE_NAME}getId(){return d.ID}initialize(){var n=this;return(0,yn.A)(function*(){return n.available=typeof window<"u",n.available})()}}return d.MODULE_NAME="",d.ID="StandardOperatingContext",d})();function rr(){return(rr=(0,yn.A)(function*(d){const l=new ir(d);return yield l.initialize(),(yield Promise.resolve().then(h.bind(h,1190))).StandardController.createController(l)})).apply(this,arguments)}var kn=h(1190);class Ei{static createPublicClientApplication(l){return(0,yn.A)(function*(){const n=yield function oi(d){return rr.apply(this,arguments)}(l);return new Ei(l,n)})()}constructor(l,n){if(n)this.controller=n;else{const o=new ir(l);this.controller=new kn.StandardController(o)}}initialize(){var l=this;return(0,yn.A)(function*(){return l.controller.initialize()})()}acquireTokenPopup(l){var n=this;return(0,yn.A)(function*(){return n.controller.acquireTokenPopup(l)})()}acquireTokenRedirect(l){return this.controller.acquireTokenRedirect(l)}acquireTokenSilent(l){return this.controller.acquireTokenSilent(l)}acquireTokenByCode(l){return this.controller.acquireTokenByCode(l)}addEventCallback(l){return this.controller.addEventCallback(l)}removeEventCallback(l){return this.controller.removeEventCallback(l)}addPerformanceCallback(l){return this.controller.addPerformanceCallback(l)}removePerformanceCallback(l){return this.controller.removePerformanceCallback(l)}enableAccountStorageEvents(){this.controller.enableAccountStorageEvents()}disableAccountStorageEvents(){this.controller.disableAccountStorageEvents()}getAccount(l){return this.controller.getAccount(l)}getAccountByHomeId(l){return this.controller.getAccountByHomeId(l)}getAccountByLocalId(l){return this.controller.getAccountByLocalId(l)}getAccountByUsername(l){return this.controller.getAccountByUsername(l)}getAllAccounts(l){return this.controller.getAllAccounts(l)}handleRedirectPromise(l){return this.controller.handleRedirectPromise(l)}loginPopup(l){return this.controller.loginPopup(l)}loginRedirect(l){return this.controller.loginRedirect(l)}logout(l){return this.controller.logout(l)}logoutRedirect(l){return this.controller.logoutRedirect(l)}logoutPopup(l){return this.controller.logoutPopup(l)}ssoSilent(l){return this.controller.ssoSilent(l)}getTokenCache(){return this.controller.getTokenCache()}getLogger(){return this.controller.getLogger()}setLogger(l){this.controller.setLogger(l)}setActiveAccount(l){this.controller.setActiveAccount(l)}getActiveAccount(){return this.controller.getActiveAccount()}initializeWrapperLibrary(l,n){return this.controller.initializeWrapperLibrary(l,n)}setNavigationClient(l){this.controller.setNavigationClient(l)}getConfiguration(){return this.controller.getConfiguration()}hydrateCache(l,n){var o=this;return(0,yn.A)(function*(){return o.controller.hydrateCache(l,n)})()}clearCache(l){return this.controller.clearCache(l)}}const ar=new Ei({auth:{clientId:x.MSAL.CLIENT_ID,authority:x.MSAL.AUTHORITY,redirectUri:x.MSAL.REDIRECT_URI,postLogoutRedirectUri:x.MSAL.POST_LOGOUT_URI,scopes:x.MSAL.SCOPES_ARRAY},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1}});let Ir=(()=>{class d{constructor(n,o){this.msalGuardConfig=n,this.authService=o}checkAndSetActiveAccount(){if(!this.authService.instance.getActiveAccount()&&this.authService.instance.getAllAccounts().length>0){const o=this.authService.instance.getAllAccounts();this.authService.instance.setActiveAccount(o[0])}}loginRedirect(){this.authService.instance.loginRedirect({redirectStartPage:"dashboard",...this.msalGuardConfig.authRequest})}logout(){this.authService.instance.logoutRedirect()}static#e=this.\u0275fac=function(o){return new(o||d)(c.KVO(J),c.KVO(Be))};static#t=this.\u0275prov=c.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})();var Hr=h(8810);const $o=["toast-component",""];function Gn(d,l){if(1&d){const n=c.RV6();c.j41(0,"button",5),c.bIt("click",function(){c.eBV(n);const f=c.XpG();return c.Njj(f.remove())}),c.j41(1,"span",6),c.EFF(2,"\xd7"),c.k0s()()}}function _o(d,l){if(1&d&&(c.qex(0),c.EFF(1),c.bVm()),2&d){const n=c.XpG(2);c.R7$(),c.SpI("[",n.duplicatesCount+1,"]")}}function Gc(d,l){if(1&d&&(c.j41(0,"div"),c.EFF(1),c.DNE(2,_o,2,1,"ng-container",4),c.k0s()),2&d){const n=c.XpG();c.HbH(n.options.titleClass),c.BMQ("aria-label",n.title),c.R7$(),c.SpI(" ",n.title," "),c.R7$(),c.Y8G("ngIf",n.duplicatesCount)}}function pl(d,l){if(1&d&&c.nrm(0,"div",7),2&d){const n=c.XpG();c.HbH(n.options.messageClass),c.Y8G("innerHTML",n.message,c.npT)}}function gr(d,l){if(1&d&&(c.j41(0,"div",8),c.EFF(1),c.k0s()),2&d){const n=c.XpG();c.HbH(n.options.messageClass),c.BMQ("aria-label",n.message),c.R7$(),c.SpI(" ",n.message," ")}}function $l(d,l){if(1&d&&(c.j41(0,"div"),c.nrm(1,"div",9),c.k0s()),2&d){const n=c.XpG();c.R7$(),c.xc7("width",n.width+"%")}}class ei{_attachedHost;component;viewContainerRef;injector;constructor(l,n){this.component=l,this.injector=n}attach(l,n){return this._attachedHost=l,l.attach(this,n)}detach(){const l=this._attachedHost;if(l)return this._attachedHost=void 0,l.detach()}get isAttached(){return null!=this._attachedHost}setAttachedHost(l){this._attachedHost=l}}class Kc{_attachedPortal;_disposeFn;attach(l,n){return this._attachedPortal=l,this.attachComponentPortal(l,n)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(l){this._disposeFn=l}}class Ul{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new V.B;_activate=new V.B;_manualClose=new V.B;_resetTimeout=new V.B;_countDuplicate=new V.B;constructor(l){this._overlayRef=l}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(l,n){l&&this._resetTimeout.next(),n&&this._countDuplicate.next(++this.duplicatesCount)}}class Uo{toastId;config;message;title;toastType;toastRef;_onTap=new V.B;_onAction=new V.B;constructor(l,n,o,f,m,I){this.toastId=l,this.config=n,this.message=o,this.title=f,this.toastType=m,this.toastRef=I,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(l){this._onAction.next(l)}onAction(){return this._onAction.asObservable()}}const Da=new c.nKC("ToastConfig");class Dr extends Kc{_hostDomElement;_componentFactoryResolver;_appRef;constructor(l,n,o){super(),this._hostDomElement=l,this._componentFactoryResolver=n,this._appRef=o}attachComponentPortal(l,n){const o=this._componentFactoryResolver.resolveComponentFactory(l.component);let f;return f=o.create(l.injector),this._appRef.attachView(f.hostView),this.setDisposeFn(()=>{this._appRef.detachView(f.hostView),f.destroy()}),n?this._hostDomElement.insertBefore(this._getComponentRootNode(f),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(f)),f}_getComponentRootNode(l){return l.hostView.rootNodes[0]}}let Bl=(()=>{class d{_document=(0,c.WQX)(re.qQ);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){const n=this._document.createElement("div");n.classList.add("overlay-container"),n.setAttribute("aria-live","polite"),this._document.body.appendChild(n),this._containerElement=n}static \u0275fac=function(o){return new(o||d)};static \u0275prov=c.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})();class no{_portalHost;constructor(l){this._portalHost=l}attach(l,n=!0){return this._portalHost.attach(l,n)}detach(){return this._portalHost.detach()}}let io=(()=>{class d{_overlayContainer=(0,c.WQX)(Bl);_componentFactoryResolver=(0,c.WQX)(c.OM3);_appRef=(0,c.WQX)(c.o8S);_document=(0,c.WQX)(re.qQ);_paneElements=new Map;create(n,o){return this._createOverlayRef(this.getPaneElement(n,o))}getPaneElement(n="",o){return this._paneElements.get(o)||this._paneElements.set(o,{}),this._paneElements.get(o)[n]||(this._paneElements.get(o)[n]=this._createPaneElement(n,o)),this._paneElements.get(o)[n]}_createPaneElement(n,o){const f=this._document.createElement("div");return f.id="toast-container",f.classList.add(n),f.classList.add("toast-container"),o?o.getContainerElement().appendChild(f):this._overlayContainer.getContainerElement().appendChild(f),f}_createPortalHost(n){return new Dr(n,this._componentFactoryResolver,this._appRef)}_createOverlayRef(n){return new no(this._createPortalHost(n))}static \u0275fac=function(o){return new(o||d)};static \u0275prov=c.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})(),Y=(()=>{class d{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(n,o,f,m,I){this.overlay=o,this._injector=f,this.sanitizer=m,this.ngZone=I,this.toastrConfig={...n.default,...n.config},n.config.iconClasses&&(this.toastrConfig.iconClasses={...n.default.iconClasses,...n.config.iconClasses})}show(n,o,f={},m=""){return this._preBuildNotification(m,n,o,this.applyConfig(f))}success(n,o,f={}){return this._preBuildNotification(this.toastrConfig.iconClasses.success||"",n,o,this.applyConfig(f))}error(n,o,f={}){return this._preBuildNotification(this.toastrConfig.iconClasses.error||"",n,o,this.applyConfig(f))}info(n,o,f={}){return this._preBuildNotification(this.toastrConfig.iconClasses.info||"",n,o,this.applyConfig(f))}warning(n,o,f={}){return this._preBuildNotification(this.toastrConfig.iconClasses.warning||"",n,o,this.applyConfig(f))}clear(n){for(const o of this.toasts)if(void 0!==n){if(o.toastId===n)return void o.toastRef.manualClose()}else o.toastRef.manualClose()}remove(n){const o=this._findToast(n);if(!o||(o.activeToast.toastRef.close(),this.toasts.splice(o.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){const f=this.toasts[this.currentlyActive].toastRef;f.isInactive()||(this.currentlyActive=this.currentlyActive+1,f.activate())}return!0}findDuplicate(n="",o="",f,m){const{includeTitleDuplicates:I}=this.toastrConfig;for(const F of this.toasts)if((!I||I&&F.title===n)&&F.message===o)return F.toastRef.onDuplicate(f,m),F;return null}applyConfig(n={}){return{...this.toastrConfig,...n}}_findToast(n){for(let o=0;o<this.toasts.length;o++)if(this.toasts[o].toastId===n)return{index:o,activeToast:this.toasts[o]};return null}_preBuildNotification(n,o,f,m){return m.onActivateTick?this.ngZone.run(()=>this._buildNotification(n,o,f,m)):this._buildNotification(n,o,f,m)}_buildNotification(n,o,f,m){if(!m.toastComponent)throw new Error("toastComponent required");const I=this.findDuplicate(f,o,this.toastrConfig.resetTimeoutOnDuplicate&&m.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&f||o)&&this.toastrConfig.preventDuplicates&&null!==I)return I;this.previousToastMessage=o;let F=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(F=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));const ae=this.overlay.create(m.positionClass,this.overlayContainer);this.index=this.index+1;let Se=o;o&&m.enableHtml&&(Se=this.sanitizer.sanitize(c.WPN.HTML,o));const Re=new Ul(ae),We=new Uo(this.index,m,Se,f,n,Re),Jt=c.zZn.create({providers:[{provide:Uo,useValue:We}],parent:this._injector}),an=new ei(m.toastComponent,Jt),wn=ae.attach(an,m.newestOnTop);Re.componentInstance=wn.instance;const Zn={toastId:this.index,title:f||"",message:o||"",toastRef:Re,onShown:Re.afterActivate(),onHidden:Re.afterClosed(),onTap:We.onTap(),onAction:We.onAction(),portal:wn};return F||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{Zn.toastRef.activate()})),this.toasts.push(Zn),Zn}static \u0275fac=function(o){return new(o||d)(c.KVO(Da),c.KVO(io),c.KVO(c.zZn),c.KVO(s.up),c.KVO(c.SKi))};static \u0275prov=c.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})();const bn={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing",toastComponent:(()=>{class d{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=-1;toastClasses="";state;get displayStyle(){if("inactive"===this.state.value)return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(n,o,f){this.toastrService=n,this.toastPackage=o,this.ngZone=f,this.message=o.message,this.title=o.title,this.options=o.config,this.originalTimeout=o.config.timeOut,this.toastClasses=`${o.toastType} ${o.config.toastClass}`,this.sub=o.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=o.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=o.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=o.toastRef.countDuplicate().subscribe(m=>{this.duplicatesCount=m}),this.state={value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}}}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state={...this.state,value:"active"},!0!==this.options.disableTimeOut&&"timeOut"!==this.options.disableTimeOut&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=(new Date).getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(0===this.width||100===this.width||!this.options.timeOut)return;const n=(new Date).getTime();this.width=(this.hideTime-n)/this.options.timeOut*100,"increasing"===this.options.progressAnimation&&(this.width=100-this.width),this.width<=0&&(this.width=0),this.width>=100&&(this.width=100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state={...this.state,value:"active"},this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=(new Date).getTime()+(this.options.timeOut||0),this.width=-1,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){"removed"!==this.state.value&&(clearTimeout(this.timeout),this.state={...this.state,value:"removed"},this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){"removed"!==this.state.value&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){"removed"!==this.state.value&&"extendedTimeOut"!==this.options.disableTimeOut&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width=0)}delayedHideToast(){!0===this.options.disableTimeOut||"extendedTimeOut"===this.options.disableTimeOut||0===this.options.extendedTimeOut||"removed"===this.state.value||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=(new Date).getTime()+(this.options.timeOut||0),this.width=-1,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(n,o){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(n),o)):this.timeout=setTimeout(()=>n(),o)}outsideInterval(n,o){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(n),o)):this.intervalId=setInterval(()=>n(),o)}runInsideAngular(n){this.ngZone?this.ngZone.run(()=>n()):n()}static \u0275fac=function(o){return new(o||d)(c.rXU(Y),c.rXU(Uo),c.rXU(c.SKi))};static \u0275cmp=c.VBU({type:d,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(o,f){1&o&&c.bIt("click",function(){return f.tapToast()})("mouseenter",function(){return f.stickAround()})("mouseleave",function(){return f.delayedHideToast()}),2&o&&(c.zvX("@flyInOut",f.state),c.HbH(f.toastClasses),c.xc7("display",f.displayStyle))},standalone:!0,features:[c.aNF],attrs:$o,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(o,f){1&o&&c.DNE(0,Gn,3,0,"button",0)(1,Gc,3,5,"div",1)(2,pl,1,3,"div",2)(3,gr,2,4,"div",3)(4,$l,2,2,"div",4),2&o&&(c.Y8G("ngIf",f.options.closeButton),c.R7$(),c.Y8G("ngIf",f.title),c.R7$(),c.Y8G("ngIf",f.message&&f.options.enableHtml),c.R7$(),c.Y8G("ngIf",f.message&&!f.options.enableHtml),c.R7$(),c.Y8G("ngIf",f.options.progressBar))},dependencies:[re.bT],encapsulation:2,data:{animation:[(0,en.hZ)("flyInOut",[(0,en.wk)("inactive",(0,en.iF)({opacity:0})),(0,en.wk)("active",(0,en.iF)({opacity:1})),(0,en.wk)("removed",(0,en.iF)({opacity:0})),(0,en.kY)("inactive => active",(0,en.i0)("{{ easeTime }}ms {{ easing }}")),(0,en.kY)("active => removed",(0,en.i0)("{{ easeTime }}ms {{ easing }}"))])]}})}return d})()};class xr{http;prefix;suffix;constructor(l,n="/assets/i18n/",o=".json"){this.http=l,this.prefix=n,this.suffix=o}getTranslation(l){return this.http.get(`${this.prefix}${l}${this.suffix}`)}}const xa={providers:[(0,le.lh)(Fi),(0,c.oKB)(s.Bb,Fn.forRoot({loader:{provide:Nt,useFactory:function Bo(d){return new xr(d,"./assets/i18n/",".json")},deps:[y.Qq]}}),mt.Ov.forRoot()),function Yt(){return[...ne]}(),(0,y.$R)((0,y.b$)([(d,l)=>{const n=(0,c.WQX)(Be),o=(0,c.WQX)(Y);return x.EXCLUDED_URLS.some(m=>d.url.startsWith(m))?l(d):(0,se.H)(n.instance.acquireTokenSilent({scopes:x.MSAL.SCOPES_ARRAY})).pipe((0,Z.n)(m=>{const F=d.clone({url:`${x.BACKEND_API}${d.url}`,setHeaders:{Authorization:`${m.accessToken??""}`}});return l(F).pipe((0,$.W)(ae=>(o.error("Wyst\u0105pi\u0142 nieznany b\u0142\u0105d, spr\xf3buj p\xf3\u017aniej"),(0,Hr.$)(()=>new Error("An error occurred. Please try again later.")))))}))}])),{provide:y.a7,useClass:Pe,multi:!0},{provide:X,useFactory:function gs(){const d=new Map;return d.set(x.MSAL.REDIRECT_URI,x.MSAL.SCOPES_ARRAY),{interactionType:E.X8.Redirect,protectedResourceMap:d}}},{provide:P,useValue:ar},{provide:J,useFactory:function Wi(){return{interactionType:E.X8.Redirect,authRequest:{scopes:x.MSAL.SCOPES_ARRAY},loginFailedRoute:"/"}}},Be,nt,Le,function Ze(){return(0,c.ngT)("NgEagerAnimations"),[...De]}(),((d={})=>(0,c.EmA)([{provide:Da,useValue:{default:bn,config:d}}]))()]};var S=h(6977),N=h(9417);function D(d,l){if(1&d){const n=c.RV6();c.j41(0,"button",2),c.bIt("click",function(){const f=c.eBV(n).$implicit,m=c.XpG();return c.Njj(m.translate.use(f))}),c.EFF(1),c.nI1(2,"uppercase"),c.k0s()}if(2&d){const n=l.$implicit,o=c.XpG();c.AVh("active",o.translate.currentLang===n),c.R7$(),c.SpI(" ",c.bMT(2,3,n)," ")}}let U=(()=>{class d{constructor(n){this.translate=n,n.addLangs(["pl","en"]),n.setDefaultLang("pl"),n.currentLang=n.getDefaultLang()}static#e=this.\u0275fac=function(o){return new(o||d)(c.rXU(gi))};static#t=this.\u0275cmp=c.VBU({type:d,selectors:[["app-language-selector"]],standalone:!0,features:[c.aNF],decls:3,vars:0,consts:[[1,"btn-group","mx-4"],[1,"btn",3,"active"],[1,"btn",3,"click"]],template:function(o,f){1&o&&(c.j41(0,"div",0),c.Z7z(1,D,3,5,"button",1,c.fX1),c.k0s()),2&o&&(c.R7$(),c.Dyx(f.translate.getLangs()))},dependencies:[Fn,N.X1,re.Pc],encapsulation:2})}return d})();var ye=h(7052);const Me=()=>["/dashboard"];function Ye(d,l){if(1&d){const n=c.RV6();c.j41(0,"button",6),c.bIt("click",function(){c.eBV(n);const f=c.XpG();return c.Njj(f.accountService.loginRedirect())}),c.EFF(1," Zaloguj "),c.k0s()}}function Ft(d,l){1&d&&(c.j41(0,"button",7)(1,"span",10),c.EFF(2,"Toggle Dropdown"),c.k0s()())}function kt(d,l){if(1&d){const n=c.RV6();c.j41(0,"div",9)(1,"button",11),c.bIt("click",function(){const f=c.eBV(n).$implicit,m=c.XpG(2);return c.Njj(m.userService.updateCurrentRole(f))}),c.j41(2,"span"),c.EFF(3),c.k0s()()()}if(2&d){const n=l.$implicit,o=l.$index,f=c.XpG(2);c.R7$(),c.AVh("active",f.userService.currentRole===n),c.Mz_("id","btnradio",o,""),c.Mz_("name","btnradio",o,""),c.R7$(2),c.SpI(" ",n," ")}}function vn(d,l){if(1&d&&(c.j41(0,"div",5),c.nrm(1,"mgt-login"),c.DNE(2,Ft,3,0,"button",7),c.j41(3,"ul",8),c.Z7z(4,kt,4,7,"div",9,c.fX1),c.k0s()()),2&d){const n=c.XpG();c.R7$(2),c.vxM(2,n.userService.availableRoles?2:-1),c.R7$(2),c.Dyx(n.userService.availableRoles)}}let ti=(()=>{class d{constructor(n,o,f){this.msalService=n,this.userService=o,this.accountService=f}static#e=this.\u0275fac=function(o){return new(o||d)(c.rXU(Be),c.rXU(ye.DL),c.rXU(Ir))};static#t=this.\u0275cmp=c.VBU({type:d,selectors:[["app-nav"]],standalone:!0,features:[c.aNF],decls:7,vars:4,consts:[[1,"d-flex","flex-row","flex-nowrap","justify-content-between","align-items-center","bg-white","h-100","px-5","py-3","z-2"],["tabindex","0",1,"navbar-brand",3,"routerLink"],["alt","certumLogo","src","./assets/images/certum-logo.svg",1,"img"],[1,"d-flex","flex-nowrap","justify-content-center","align-items-center"],["type","button",1,"btn","btn-lg","btn-primary","text-white","px-4"],[1,"btn-group"],["type","button",1,"btn","btn-lg","btn-primary","text-white","px-4",3,"click"],["aria-expanded","false","data-bs-toggle","dropdown","type","button",1,"btn","btn-lg","btn-secondary","dropdown-toggle","dropdown-toggle-split"],[1,"dropdown-menu","p-3","row"],[1,"btn-group","btn-group-md"],[1,"visually-hidden"],[1,"btn","my-1",3,"click","id","name"]],template:function(o,f){1&o&&(c.j41(0,"nav",0)(1,"a",1),c.nrm(2,"img",2),c.k0s(),c.j41(3,"div",3),c.nrm(4,"app-language-selector"),c.DNE(5,Ye,2,0,"button",4)(6,vn,6,1,"div",5),c.k0s()()),2&o&&(c.R7$(),c.Y8G("routerLink",c.lJ4(3,Me)),c.R7$(4),c.vxM(5,f.msalService.instance.getActiveAccount()?-1:5),c.R7$(),c.vxM(6,f.msalService.instance.getActiveAccount()?6:-1))},dependencies:[le.Wk,U],encapsulation:2})}return d})();function Hl(d){return Array.isArray(d)?d:[d]}var dh=h(4572),tp=h(1985),Rm=h(5245),Om=h(152),np=h(9172);let zd;try{zd=typeof Intl<"u"&&Intl.v8BreakIterator}catch{zd=!1}let Pm=(()=>{class d{constructor(n){this._platformId=n,this.isBrowser=this._platformId?(0,re.UE)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!zd)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static#e=this.\u0275fac=function(o){return new(o||d)(c.KVO(c.Agw))};static#t=this.\u0275prov=c.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})(),Lm=(()=>{class d{static#e=this.\u0275fac=function(o){return new(o||d)};static#t=this.\u0275mod=c.$C({type:d});static#n=this.\u0275inj=c.G2t({})}return d})();const na=new Set;let ml,Fm=(()=>{class d{constructor(n,o){this._platform=n,this._nonce=o,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):hh}matchMedia(n){return(this._platform.WEBKIT||this._platform.BLINK)&&function sp(d,l){if(!na.has(d))try{ml||(ml=document.createElement("style"),l&&ml.setAttribute("nonce",l),ml.setAttribute("type","text/css"),document.head.appendChild(ml)),ml.sheet&&(ml.sheet.insertRule(`@media ${d} {body{ }}`,0),na.add(d))}catch(n){console.error(n)}}(n,this._nonce),this._matchMedia(n)}static#e=this.\u0275fac=function(o){return new(o||d)(c.KVO(Pm),c.KVO(c.BIS,8))};static#t=this.\u0275prov=c.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})();function hh(d){return{matches:"all"===d||""===d,media:d,addListener:()=>{},removeListener:()=>{}}}let fh=(()=>{class d{constructor(n,o){this._mediaMatcher=n,this._zone=o,this._queries=new Map,this._destroySubject=new V.B}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(n){return uc(Hl(n)).some(f=>this._registerQuery(f).mql.matches)}observe(n){const f=uc(Hl(n)).map(I=>this._registerQuery(I).observable);let m=(0,dh.z)(f);return m=(0,Te.x)(m.pipe((0,ee.s)(1)),m.pipe((0,Rm.i)(1),(0,Om.B)(0))),m.pipe((0,de.T)(I=>{const F={matches:!1,breakpoints:{}};return I.forEach(({matches:ae,query:Se})=>{F.matches=F.matches||ae,F.breakpoints[Se]=ae}),F}))}_registerQuery(n){if(this._queries.has(n))return this._queries.get(n);const o=this._mediaMatcher.matchMedia(n),m={observable:new tp.c(I=>{const F=ae=>this._zone.run(()=>I.next(ae));return o.addListener(F),()=>{o.removeListener(F)}}).pipe((0,np.Z)(o),(0,de.T)(({matches:I})=>({query:n,matches:I})),(0,S.Q)(this._destroySubject)),mql:o};return this._queries.set(n,m),m}static#e=this.\u0275fac=function(o){return new(o||d)(c.KVO(Fm),c.KVO(c.SKi))};static#t=this.\u0275prov=c.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})();function uc(d){return d.map(l=>l.split(",")).reduce((l,n)=>l.concat(n)).map(l=>l.trim())}const gh=()=>["/dashboard"],Vl=()=>["/browse-forms"],ni=()=>["/create-template"],ap=()=>["/create-form"],hb=()=>["/fill-form"],$m=()=>["/settings"];function Um(d,l){1&d&&(c.j41(0,"span",3),c.EFF(1,"Dashboard"),c.k0s())}function Bm(d,l){1&d&&(c.j41(0,"span",3),c.EFF(1,"Browse surveys"),c.k0s())}function lp(d,l){1&d&&(c.j41(0,"span",3),c.EFF(1,"Create template"),c.k0s())}function hc(d,l){1&d&&(c.j41(0,"span",3),c.EFF(1,"Create form"),c.k0s())}function Hm(d,l){1&d&&(c.j41(0,"span",3),c.EFF(1,"Fill survey"),c.k0s())}function Vm(d,l){1&d&&(c.j41(0,"span",3),c.EFF(1,"Settings"),c.k0s())}let jm=(()=>{class d{constructor(n){this.observer=n,this.isVisible=!0,this.observer.observe("(max-width: 1400px)").subscribe(o=>{this.isVisible=!o.matches})}static#e=this.\u0275fac=function(o){return new(o||d)(c.rXU(fh))};static#t=this.\u0275cmp=c.VBU({type:d,selectors:[["app-sidebar"]],standalone:!0,features:[c.aNF],decls:19,vars:18,consts:[["id","menu",1,"h-100","py-5","px-3","bg-white","nav-pills","fw-medium","text-nowrap"],["routerLinkActive","active",1,"nav-link","p-3",3,"routerLink"],[1,"fs-4","bi","bi-house","fw-bold"],[1,"fs-6","ms-3","text-dark"],[1,"fs-4","bi","bi-clipboard","fw-bold"],[1,"fs-4","bi","bi-pen","fw-bold"],[1,"fs-4","bi","bi-pencil-square","fw-bold"],[1,"fs-4","bi","bi-clipboard-check-fill","fw-bold"],["routerLinkActive","active",1,"nav-link","align-self-end","p-3",3,"routerLink"],[1,"fs-4","bi","bi-gear-fill","fw-bold"]],template:function(o,f){1&o&&(c.j41(0,"nav",0)(1,"a",1),c.nrm(2,"i",2),c.DNE(3,Um,2,0,"span",3),c.k0s(),c.j41(4,"a",1),c.nrm(5,"i",4),c.DNE(6,Bm,2,0,"span",3),c.k0s(),c.j41(7,"a",1),c.nrm(8,"i",5),c.DNE(9,lp,2,0,"span",3),c.k0s(),c.j41(10,"a",1),c.nrm(11,"i",6),c.DNE(12,hc,2,0,"span",3),c.k0s(),c.j41(13,"a",1),c.nrm(14,"i",7),c.DNE(15,Hm,2,0,"span",3),c.k0s(),c.j41(16,"a",8),c.nrm(17,"i",9),c.DNE(18,Vm,2,0,"span",3),c.k0s()()),2&o&&(c.R7$(),c.Y8G("routerLink",c.lJ4(12,gh)),c.R7$(2),c.vxM(3,f.isVisible?3:-1),c.R7$(),c.Y8G("routerLink",c.lJ4(13,Vl)),c.R7$(2),c.vxM(6,f.isVisible?6:-1),c.R7$(),c.Y8G("routerLink",c.lJ4(14,ni)),c.R7$(2),c.vxM(9,f.isVisible?9:-1),c.R7$(),c.Y8G("routerLink",c.lJ4(15,ap)),c.R7$(2),c.vxM(12,f.isVisible?12:-1),c.R7$(),c.Y8G("routerLink",c.lJ4(16,hb)),c.R7$(2),c.vxM(15,f.isVisible?15:-1),c.R7$(),c.Y8G("routerLink",c.lJ4(17,$m)),c.R7$(2),c.vxM(18,f.isVisible?18:-1))},dependencies:[le.wQ,le.Wk,Lm],encapsulation:2})}return d})(),zm=(()=>{class d{static#e=this.\u0275fac=function(o){return new(o||d)};static#t=this.\u0275cmp=c.VBU({type:d,selectors:[["app-footer"]],standalone:!0,features:[c.aNF],decls:2,vars:0,consts:[[1,"d-flex","flex-row","flex-nowrap","justify-content-between","align-items-center","h-100","px-5","py-3","z-2","bg-dark"],["alt","certumLogo","src","./assets/images/footer-logo.svg",1,"img-fluid"]],template:function(o,f){1&o&&(c.j41(0,"footer",0),c.nrm(1,"img",1),c.k0s())},encapsulation:2})}return d})();var er=h(4709),Pt=h(6885),ui=h(1018),cp=h(5941);class dp{}var dr=h(4327);class ka{constructor(l,n,o,f){this.resource=o.startsWith("/")?o:`/${o}`,this.method=f,this.index=l,this.id=n}}var Kd=function(d,l,n,o){return new(n||(n=Promise))(function(m,I){function F(Re){try{Se(o.next(Re))}catch(We){I(We)}}function ae(Re){try{Se(o.throw(Re))}catch(We){I(We)}}function Se(Re){Re.done?m(Re.value):function f(m){return m instanceof n?m:new n(function(I){I(m)})}(Re.value).then(F,ae)}Se((o=o.apply(d,l||[])).next())})};class Zc{static get baseUrl(){return"https://graph.microsoft.com"}constructor(l){this.graph=l,this.allRequests=[],this.requestsQueue=[],this.scopes=[],this.nextIndex=0,this.retryAfter=0}get hasRequests(){return this.requestsQueue.length>0}get(l,n,o,f){const m=this.nextIndex++,I=new ka(m,l,n,"GET");I.headers=f,this.allRequests.push(I),this.requestsQueue.push(m),o&&(this.scopes=this.scopes.concat(o))}executeNext(){return Kd(this,void 0,void 0,function*(){const l=new Map;if(this.retryAfter&&(yield(d=1e3*this.retryAfter,function(d,l,n,o){return new(n||(n=Promise))(function(m,I){function F(Re){try{Se(o.next(Re))}catch(We){I(We)}}function ae(Re){try{Se(o.throw(Re))}catch(We){I(We)}}function Se(Re){Re.done?m(Re.value):function f(m){return m instanceof n?m:new n(function(I){I(m)})}(Re.value).then(F,ae)}Se((o=o.apply(d,l||[])).next())})}(void 0,void 0,void 0,function*(){return new Promise(l=>{setTimeout(l,d)})})),this.retryAfter=0),!this.hasRequests)return l;var d;const n=this.requestsQueue.splice(0,20),o=new ui.Tz;for(const ae of n.map(Se=>this.allRequests[Se]))o.addRequest({id:ae.index.toString(),request:new Request(Zc.baseUrl+ae.resource,{method:ae.method,headers:ae.headers})});const f=this.scopes.length?(0,dr.F)(this.scopes):[],m=this.graph.api("$batch").middlewareOptions(f),I=yield o.getContent(),F=yield m.post(I);for(const ae of F.responses){const Se=new dp,Re=parseInt(ae.id,10),We=this.allRequests[Re];Se.id=We.id,Se.index=We.index,Se.headers=ae.headers,200===ae.status?("string"==typeof ae.body?ae.headers["Content-Type"].includes("image/jpeg")?Se.content="data:image/jpeg;base64,"+ae.body:ae.headers["Content-Type"].includes("image/pjpeg")?Se.content="data:image/pjpeg;base64,"+ae.body:ae.headers["Content-Type"].includes("image/png")&&(Se.content="data:image/png;base64,"+ae.body):Se.content=ae.body,l.set(We.id,Se)):429===ae.status&&(this.requestsQueue.unshift(Re),this.retryAfter=Math.max(this.retryAfter,parseInt(ae.headers["Retry-After"],10)||1))}return l})}executeAll(){return Kd(this,void 0,void 0,function*(){const l=new Map;for(;this.hasRequests;){const n=yield this.executeNext();for(const[o,f]of n)l.set(o,f)}return l})}}class hp{constructor(l){this.componentName="string"==typeof l?l:l.tagName.toLowerCase()}}const fb=(...d)=>{const l=d[0];let n=l;for(let o=1;o<d.length;++o){const f=d[o];n.setNext&&n.setNext(f),n=f}return l};var mh=h(9629),Ho=h(7388);class fp{constructor(l,n){this._packageVersion=l,this._providerName=n}execute(l){var n;return function(d,l,n,o){return new(n||(n=Promise))(function(m,I){function F(Re){try{Se(o.next(Re))}catch(We){I(We)}}function ae(Re){try{Se(o.throw(Re))}catch(We){I(We)}}function Se(Re){Re.done?m(Re.value):function f(m){return m instanceof n?m:new n(function(I){I(m)})}(Re.value).then(F,ae)}Se((o=o.apply(d,l||[])).next())})}(this,void 0,void 0,function*(){try{if("string"==typeof l.request)if((0,Ho.N)(l.request)){const o=[],f=l.middlewareControl.getMiddlewareOptions(hp);f&&o.push(`${f.componentName}/${this._packageVersion}`),this._providerName&&o.push(`${this._providerName}/${this._packageVersion}`),o.push(`mgt/${this._packageVersion}`),o.push((0,mh.XH)(l.request,l.options,"SdkVersion"));const I=o.join(", ");(0,mh.RO)(l.request,l.options,"SdkVersion",I)}else null===(n=l?.options)||void 0===n||delete n.headers.SdkVersion}catch{}return yield this._nextMiddleware.execute(l)})}setNext(l){this._nextMiddleware=l}}var ia=h(1212),Za=h(5794);class Yc{get client(){return this._client}get componentName(){return this._componentName}get version(){return this._version}constructor(l,n="v1.0"){this._client=l,this._version=n}forComponent(l){const n=new Yc(this._client,this._version);return n.setComponent(l),n}api(l){let n=this._client.api(l).version(this._version);return this._componentName&&(n.middlewareOptions=o=>(n._middlewareOptions=n._middlewareOptions.concat(o),n),n=n.middlewareOptions([new hp(this._componentName)])),n}createBatch(){return new Zc(this)}setComponent(l){this._componentName=l instanceof Element?Za.U.normalize(l.tagName):l}}var Km=h(194),jl=function(d,l,n,o){return new(n||(n=Promise))(function(m,I){function F(Re){try{Se(o.next(Re))}catch(We){I(We)}}function ae(Re){try{Se(o.throw(Re))}catch(We){I(We)}}function Se(Re){Re.done?m(Re.value):function f(m){return m instanceof n?m:new n(function(I){I(m)})}(Re.value).then(F,ae)}Se((o=o.apply(d,l||[])).next())})},qd=function(d){return d.SELECT_ACCOUNT="select_account",d.LOGIN="login",d.CONSENT="consent",d}(qd||{});class vh extends Pt.DH{get publicClientApplication(){return this._publicClientApplication}get name(){return"MgtMsal2Provider"}get isMultiAccountDisabled(){return!this.isMultipleAccountEnabled}set isMultiAccountDisabled(l){this.isMultipleAccountEnabled=!l}get isMultiAccountSupportedAndEnabled(){return this.isMultipleAccountEnabled}get sessionStorageRequestedScopesKey(){return"mgt-requested-scopes"}get sessionStorageDeniedScopesKey(){return"mgt-denied-scopes"}get homeAccountKey(){return"275f3731-e4a4-468a-bf9c-baca24b31e26"}constructor(l){super(),this.isMultipleAccountEnabled=!0,this.handleMsalEvent=n=>{"msal:acquireTokenSuccess"===n.eventType&&"scopes"in n.payload&&(this.approvedScopes=n.payload.scopes)},this.initProvider(l)}initProvider(l){return jl(this,void 0,void 0,function*(){const n=l.options||{auth:{clientId:""}};if(this.ms_config=n,this.ms_config.cache=n.cache||{},this.ms_config.cache.cacheLocation=n.cache.cacheLocation||"localStorage",(typeof this.ms_config.cache.storeAuthStateInCookie>"u"||null===this.ms_config.cache.storeAuthStateInCookie)&&(this.ms_config.cache.storeAuthStateInCookie=!0),this.ms_config.system=n.system||{},this.ms_config.system.iframeHashTimeout=n.system.iframeHashTimeout||1e4,l.authority&&(this.ms_config.auth.authority=l.authority),l.redirectUri&&(this.ms_config.auth.redirectUri=l.redirectUri),"clientId"in l){if(!l.clientId)throw new Error("clientId must be provided");this.ms_config.auth.clientId=l.clientId,this._publicClientApplication=new Ei(this.ms_config)}else{if(!("publicClientApplication"in l))throw new Error("either clientId or publicClientApplication must be provided");if(!l.publicClientApplication)throw new Error("publicClientApplication must be provided");this._publicClientApplication=l.publicClientApplication}this._publicClientApplication.addEventCallback(this.handleMsalEvent),yield this._publicClientApplication.initialize(),this.ms_config.system=n.system||{},this.ms_config.system.iframeHashTimeout=n.system.iframeHashTimeout||1e4,this._loginType=typeof l.loginType<"u"?l.loginType:Pt.Gb.Redirect,this._loginHint=typeof l.loginHint<"u"?l.loginHint:null,this._sid=typeof l.sid<"u"?l.sid:null,this.isIncrementalConsentDisabled=typeof l.isIncrementalConsentDisabled<"u"&&l.isIncrementalConsentDisabled,this._domainHint=typeof l.domainHint<"u"?l.domainHint:null,this.scopes=typeof l.scopes<"u"?l.scopes:["user.read"],this._prompt=typeof l.prompt<"u"?l.prompt:qd.SELECT_ACCOUNT;const o=l;this.isMultipleAccountEnabled=!(typeof o.isMultiAccountEnabled<"u")||o.isMultiAccountEnabled,this.baseURL=typeof o.baseURL<"u"?o.baseURL:this.baseURL,this.customHosts=o.customHosts,this.graph=((d,l,n)=>{const o=[new ui.zA(d),new ui.Z$(new ui.Rz),new ui.MD,new fp(ia.i,d.name),new ui.eg],f=d.baseURL?d.baseURL:cp.I,m=ui.Kj.initWithMiddleware({middleware:fb(...o),customHosts:d.customHosts?new Set(d.customHosts):null,baseUrl:f}),I=new Yc(m,void 0);return I})(this);try{const f=yield this._publicClientApplication.handleRedirectPromise();null!==f?this.handleResponse(f?.account):yield this.trySilentSignIn()}catch(f){throw console.error("\u{1f992}: Problem attempting to sign in",f),f}})}trySilentSignIn(){return jl(this,void 0,void 0,function*(){const l={scopes:this.scopes,domainHint:this._domainHint};if(this._sid||this._loginHint){l.sid=this._sid,l.loginHint=this._loginHint;try{this.setState(Pt.HJ.Loading);const n=yield this._publicClientApplication.ssoSilent(l);n&&this.handleResponse(n?.account)}catch{this.setState(Pt.HJ.SignedOut)}}else{const n=this.getAccount();if(n&&(yield this.getAccessToken(null)))return void this.handleResponse(n);this.setState(Pt.HJ.SignedOut)}})}login(){return jl(this,void 0,void 0,function*(){const l={scopes:this.scopes,loginHint:this._loginHint,prompt:this._prompt,domainHint:this._domainHint};if(this._loginType===Pt.Gb.Popup){const n=yield this._publicClientApplication.loginPopup(l);this.handleResponse(n?.account)}else{const n=Object.assign({},l);yield this._publicClientApplication.loginRedirect(n)}})}getAllAccounts(){const l=[];return this._publicClientApplication.getAllAccounts().forEach(n=>{l.push({name:n.name,mail:n.username,id:n.homeAccountId})}),l}setActiveAccount(l){const n=this._publicClientApplication.getAccountByHomeId(l.id),o=this._publicClientApplication.getActiveAccount(),f=this.getStoredAccount();f&&n&&o&&f.homeAccountId===n.homeAccountId&&o.homeAccountId===n.homeAccountId||(this._publicClientApplication.setActiveAccount(n),this.setStoredAccount(),super.setActiveAccount(l))}getActiveAccount(){const l=this._publicClientApplication.getActiveAccount();if(l)return{name:l.name,mail:l.username,id:l.homeAccountId,tenantId:l.tenantId}}handleResponse(l){null!==l?(this.setActiveAccount({name:l.name,id:l.homeAccountId,mail:l.username}),this.setState(Pt.HJ.SignedIn)):this.setState(Pt.HJ.SignedOut),this.clearRequestedScopes()}storage(){return"localStorage"===this.ms_config.cache.cacheLocation?window.localStorage:window.sessionStorage}setStoredAccount(){this.clearStoredAccount(),this.storage().setItem(this.homeAccountKey,this._publicClientApplication.getActiveAccount().homeAccountId)}getStoredAccount(){const l=this.storage().getItem(this.homeAccountKey);return this._publicClientApplication.getAccountByHomeId(l)}clearStoredAccount(){this.storage().removeItem(this.homeAccountKey)}setRequestedScopes(l){l&&sessionStorage.setItem(this.sessionStorageRequestedScopesKey,JSON.stringify(l))}addDeniedScopes(l){if(l){let n=this.getDeniedScopes()||[];n=n.concat(l);let o=n.indexOf("openid");-1!==o&&n.splice(o,1),o=n.indexOf("profile"),-1!==o&&n.splice(o,1),sessionStorage.setItem(this.sessionStorageDeniedScopesKey,JSON.stringify(n))}}getDeniedScopes(){const l=sessionStorage.getItem(this.sessionStorageDeniedScopesKey);return l?JSON.parse(l):null}areScopesDenied(l){if(l){const n=this.getDeniedScopes();if(n&&n.filter(o=>-1!==l.indexOf(o)).length>0)return!0}return!1}clearRequestedScopes(){sessionStorage.removeItem(this.sessionStorageRequestedScopesKey)}getAccount(){return this.getStoredAccount()||(this._publicClientApplication.getAllAccounts().length>0?this._publicClientApplication.getAllAccounts()[0]:null)}logout(){return jl(this,void 0,void 0,function*(){const n={account:this._publicClientApplication.getActiveAccount()};this.clearStoredAccount(),this._loginType===Pt.Gb.Redirect?(this.setState(Pt.HJ.SignedOut),yield this._publicClientApplication.logoutRedirect(n)):(yield this._publicClientApplication.logoutPopup(Object.assign({},n)),1!==this._publicClientApplication.getAllAccounts.length&&this.isMultipleAccountEnabled?yield this.trySilentSignIn():this.setState(Pt.HJ.SignedOut))})}getAccessToken(l){return jl(this,void 0,void 0,function*(){const n=l&&l.scopes||this.scopes,o={scopes:n,account:this.getAccount()};try{const f=o;return(yield this._publicClientApplication.acquireTokenSilent(f)).accessToken}catch(f){if(f instanceof Km.CB){if(this.isIncrementalConsentDisabled)return null;if(this._loginType===Pt.Gb.Redirect){if(this.areScopesDenied(n))throw f;this.setRequestedScopes(n),yield this._publicClientApplication.acquireTokenRedirect(o)}else try{return(yield this._publicClientApplication.acquireTokenPopup(o)).accessToken}catch(m){throw console.error("\u{1f992}: problem with pop-up sign in",m),m}}else this.setState(Pt.HJ.SignedOut)}throw null})}}var Os=h(6479),qm=h(7531),Lt=h(8324),Ot=h(9559),Ps=h(2578),or=h(4569);const pp=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{--card-height:auto;--card-width:99%;background-color:var(--agenda-background-color,transparent)}:host .header{margin:var(--agenda-header-margin,18px 0 12px 10px);font-size:var(--agenda-header-font-size, 24px);font-style:normal;font-weight:400;line-height:32px;color:var(--agenda-header-color,var(--neutral-foreground-rest));opacity:.9}:host .agenda,:host .group{display:flex;flex-direction:column;row-gap:var(--agenda-event-row-gap,14px)}:host .agenda>.group:first-child>.header,:host .group>.group:first-child>.header{margin-top:0}:host .agenda .event,:host .group .event{background:var(--agenda-event-background-color,var(--fill-color));border:var(--agenda-event-border,solid 2px transparent);box-shadow:var(--agenda-event-box-shadow,var(--elevation-shadow-card-rest));padding:var(--agenda-event-padding,12px);position:relative;display:flex;flex:1 1 auto;content-visibility:visible;contain:none}:host .agenda .event-container,:host .group .event-container{border-radius:calc(var(--layer-corner-radius) * 1px);padding:1px}:host .agenda .event.narrow,:host .group .event.narrow{display:flex;flex-direction:column;inset:0}:host .agenda .event-time-container,:host .group .event-time-container{font-style:normal;font-weight:600;font-size:12px;color:var(--agenda-event-time-color,var(--neutral-foreground-rest));width:112px;height:16px}:host .agenda .event-time-container.narrow,:host .group .event-time-container.narrow{margin-bottom:1px;width:100%}:host .agenda .event-time,:host .group .event-time{font-size:var(--agenda-event-time-font-size, 12px);color:var(--agenda-event-time-color,var(--neutral-foreground-rest));font-weight:600}:host .agenda .event-details-container,:host .group .event-details-container{display:flex;flex-direction:column;position:relative;bottom:8px;top:0;padding-inline-start:32px}:host .agenda .event-details-container.narrow,:host .group .event-details-container.narrow{position:inherit;left:6px;display:flex;flex-direction:column;padding-inline-start:0}:host .agenda .event-subject,:host .group .event-subject{font-style:normal;font-weight:400;font-size:var(--agenda-event-subject-font-size, 20px);line-height:28px;color:var(--agenda-event-subject-color,var(--neutral-foreground-rest));mix-blend-mode:normal;position:inherit;bottom:8px}:host .agenda .event-location-container,:host .group .event-location-container{display:inline-flex;flex-direction:row}:host .agenda .event-location-container .event-location,:host .group .event-location-container .event-location{padding-inline-start:3px;font-style:normal;font-weight:400;font-size:var(--agenda-event-location-font-size, 12px);line-height:16px;color:var(--agenda-event-location-color,var(--neutral-foreground-rest))}:host .agenda .event-location-container .event-location-loading,:host .group .event-location-container .event-location-loading{width:90px;height:10px;margin:2px 0 0 4px}:host .agenda .event-location-container .event-location-icon,:host .group .event-location-container .event-location-icon{display:inline-flex}:host .agenda .event-location-container .event-location-icon svg,:host .group .event-location-container .event-location-icon svg{position:relative;top:2px;width:12px;height:12px}:host .agenda .event-location-container .event-location-icon svg path,:host .group .event-location-container .event-location-icon svg path{stroke:var(--agenda-event-location-color,var(--neutral-foreground-rest))}:host .agenda .event-location-container .event-location-icon-loading,:host .group .event-location-container .event-location-icon-loading{width:14px;height:14px}:host .agenda .event-location-container .event-attendee-loading,:host .group .event-location-container .event-attendee-loading{width:20px;height:20px;border-radius:10px;margin:0 2px 0 0}:host .agenda .event-attendees,:host .group .event-attendees{--list-margin:8px 0 0 0;--person-avatar-size:20px}fluent-card.event.event-loading{--card-height:90px}:host .event-attendees{--color:$agenda-event-attendees-color}:host fluent-tooltip{width:auto;contain:inline-size}[dir=rtl] :host{direction:rtl}[dir=rtl] .event-time-container{direction:ltr;display:flex;justify-content:flex-end}@media (forced-colors:active) and (prefers-color-scheme:dark){:host .agenda .event-location-container .event-location-icon svg path{stroke:rgb(255,255,255)!important}}@media (forced-colors:active) and (prefers-color-scheme:light){:host .agenda .event-location-container .event-location-icon svg path{stroke:rgb(0,0,0)!important}}
`];var gp=h(7425),Qd=function(d,l,n,o){return new(n||(n=Promise))(function(m,I){function F(Re){try{Se(o.next(Re))}catch(We){I(We)}}function ae(Re){try{Se(o.throw(Re))}catch(We){I(We)}}function Se(Re){Re.done?m(Re.value):function f(m){return m instanceof n?m:new n(function(I){I(m)})}(Re.value).then(F,ae)}Se((o=o.apply(d,l||[])).next())})};const mp=(d,l,n)=>Qd(void 0,void 0,void 0,function*(){const o=d.api(l).middlewareOptions((0,dr.F)(n)).orderby("start/dateTime");return gp.E.create(d,o)});var Bn=h(2710),Ii=h(4229),fc=h(6692),Qm=h(1786),Eo=h(5527),vp=h(54);const yp=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .people-list{list-style:none;margin:var(--people-list-margin,8px 4px 8px 8px);padding:unset;display:flex;align-items:center;gap:var(--people-avatar-gap,4px)}:host .people-list .people-person{--person-avatar-size:var(--people-person-avatar-size, 24px)}:host .overflow span{vertical-align:middle;color:var(--people-overflow-font-color,currentColor);font-size:var(--people-overflow-font-size, 12px);font-weight:var(--people-overflow-font-weight,400)}
`];var Oo=h(8940),Po=function(d,l,n,o){var I,f=arguments.length,m=f<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,l,n,o);else for(var F=d.length-1;F>=0;F--)(I=d[F])&&(m=(f<3?I(m):f>3?I(l,n,m):I(l,n))||m);return f>3&&m&&Object.defineProperty(l,n,m),m},jr=function(d,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,l)};const pc=()=>{(0,Os.sN)(),(0,Oo.N)("people",gc)};let gc=(()=>{class d extends Ps.N{static get styles(){return yp}static get requiredScopes(){return[...new Set(["user.read.all","people.read","user.readbasic.all","presence.read.all","contacts.read",...Os.O$.requiredScopes])]}constructor(){super(),this.personCardInteraction="hover",this.version="v1.0",this.scopes=[],this._peoplePresence={},this._arrowKeyLocation=-1,this.renderContent=()=>this.people&&0!==this.people.length?this.renderTemplate("default",{people:this.people,max:this.showMax})||this.renderPeople():this.renderNoData(),this.renderLoading=()=>this.renderTemplate("loading",null)||Lt.qy``,this.handleKeyDown=n=>{const o=this.shadowRoot.querySelector(".people-list");let f;const m=o?.children;for(const ae of m){const Se=ae;Se.setAttribute("tabindex","-1"),Se.blur()}const I=o.childElementCount,F=n.key;if("ArrowRight"===F)this._arrowKeyLocation=(this._arrowKeyLocation+1+I)%I;else if("ArrowLeft"===F)this._arrowKeyLocation=(this._arrowKeyLocation-1+I)%I;else if("Tab"===F||"Escape"===F)this._arrowKeyLocation=-1,o.blur();else if(["Enter","space"," "].includes(F)&&"none"!==this.personCardInteraction){const Se=m[this._arrowKeyLocation].querySelector("mgt-person");Se&&Se.showPersonCard()}this._arrowKeyLocation>-1&&(f=m[this._arrowKeyLocation],f.setAttribute("tabindex","1"),f.focus())},this.showMax=3}clearState(){this.people=null}args(){return[this.providerState,this.groupId,this.userIds,this.peopleQueries,this.showMax,this.resource,this.version,this.fallbackDetails]}renderPeople(){const n=this.people.slice(0,this.showMax).filter(o=>o);return Lt.qy`
      <ul
        tabindex="0"
        class="people-list"
        aria-label="people"
        @keydown=${this.handleKeyDown}>
        ${(0,Ii.u)(n,o=>o.id?o.id:o.displayName,o=>Lt.qy`
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
      `}renderNoData(){return this.renderTemplate("no-data",null)||Lt.qy``}loadState(){return function(d,l,n,o){return new(n||(n=Promise))(function(m,I){function F(Re){try{Se(o.next(Re))}catch(We){I(We)}}function ae(Re){try{Se(o.throw(Re))}catch(We){I(We)}}function Se(Re){Re.done?m(Re.value):function f(m){return m instanceof n?m:new n(function(I){I(m)})}(Re.value).then(F,ae)}Se((o=o.apply(d,l||[])).next())})}(this,void 0,void 0,function*(){if(!this.people){const n=er.b.globalProvider;if(n&&n.state===Pt.HJ.SignedIn){const o=n.graph.forComponent(this);this.people=this.groupId?yield(0,Eo.sb)(o,null,this.groupId,this.showMax,"person"):this.userIds?yield(0,Eo.$q)(o,this.userIds,"","",this.fallbackDetails):this.peopleQueries?yield(0,Eo.vl)(o,this.peopleQueries,this.fallbackDetails):this.resource?yield(0,fc.ox)(o,this.version,this.resource,this.scopes):yield(0,fc.cB)(o),this._peoplePresence=this.showPresence?yield(0,Qm.u)(o,this.people):null}}})}}return Po([(0,Ot.MZ)({attribute:"group-id",type:String}),jr("design:type",String)],d.prototype,"groupId",void 0),Po([(0,Ot.MZ)({attribute:"user-ids",converter:(l,n)=>l.split(",").map(o=>o.trim())}),jr("design:type",Array)],d.prototype,"userIds",void 0),Po([(0,Ot.MZ)({attribute:"people",type:Object}),jr("design:type",Array)],d.prototype,"people",void 0),Po([(0,Ot.MZ)({attribute:"people-queries",converter:(l,n)=>l.split(",").map(o=>o.trim())}),jr("design:type",Array)],d.prototype,"peopleQueries",void 0),Po([(0,Ot.MZ)({attribute:"show-max",type:Number}),jr("design:type",Number)],d.prototype,"showMax",void 0),Po([(0,Ot.MZ)({attribute:"show-presence",type:Boolean}),jr("design:type",Boolean)],d.prototype,"showPresence",void 0),Po([(0,Ot.MZ)({attribute:"person-card",converter:(l,n)=>(0,vp.e)(l,"hover")}),jr("design:type",String)],d.prototype,"personCardInteraction",void 0),Po([(0,Ot.MZ)({attribute:"resource",type:String}),jr("design:type",String)],d.prototype,"resource",void 0),Po([(0,Ot.MZ)({attribute:"version",type:String}),jr("design:type",Object)],d.prototype,"version",void 0),Po([(0,Ot.MZ)({attribute:"scopes",converter:l=>l?l.toLowerCase().split(","):null,reflect:!0}),jr("design:type",Array)],d.prototype,"scopes",void 0),Po([(0,Ot.MZ)({attribute:"fallback-details",type:Array}),jr("design:type",Array)],d.prototype,"fallbackDetails",void 0),Po([(0,Ot.wk)(),jr("design:type",Object)],d.prototype,"_arrowKeyLocation",void 0),d})();var To=h(3601),mc=h(5409),go=h(3402),Ma=function(d,l,n,o){var I,f=arguments.length,m=f<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,l,n,o);else for(var F=d.length-1;F>=0;F--)(I=d[F])&&(m=(f<3?I(m):f>3?I(l,n,m):I(l,n))||m);return f>3&&m&&Object.defineProperty(l,n,m),m},Ya=function(d,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,l)},vl=function(d,l,n,o){return new(n||(n=Promise))(function(m,I){function F(Re){try{Se(o.next(Re))}catch(We){I(We)}}function ae(Re){try{Se(o.throw(Re))}catch(We){I(We)}}function Se(Re){Re.done?m(Re.value):function f(m){return m instanceof n?m:new n(function(I){I(m)})}(Re.value).then(F,ae)}Se((o=o.apply(d,l||[])).next())})};let Zm=(()=>{class d extends Ps.N{constructor(){super(...arguments),this.days=3,this.renderContent=()=>{if(!this.events||0===this.events.length)return this.renderNoData();const n=this.showMax&&this.showMax>0?this.events.slice(0,this.showMax):this.events,o=this.renderTemplate("default",{events:n});return o||Lt.qy`
      <div dir=${this.direction} class="${(0,go.H)({agenda:!0,grouped:this.groupByDay})}">
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
        </fluent-card>`,this.onResize=()=>{this._isNarrow=this.offsetWidth<600}}static get styles(){return pp}static get requiredScopes(){return[...new Set(["calendars.read",...gc.requiredScopes])]}connectedCallback(){this._isNarrow=this.offsetWidth<600,super.connectedCallback(),window.addEventListener("resize",this.onResize)}disconnectedCallback(){window.removeEventListener("resize",this.onResize),super.disconnectedCallback()}reload(){return vl(this,void 0,void 0,function*(){this.events=yield this.loadEvents()})}clearState(){this.events=null}renderNoData(){return this.renderTemplate("no-data",null)||Lt.qy``}renderEvent(n){this._isNarrow=this.offsetWidth<600;const o={narrow:this._isNarrow};return Lt.qy`
      <fluent-card class="${(0,go.H)(Object.assign({event:!0},o))}">
        <div class="${(0,go.H)(Object.assign({"event-time-container":!0},o))}">
          <div class="event-time" aria-label="${this.getEventTimeString(n)}">${this.getEventTimeString(n)}</div>
        </div>
        <div class="${(0,go.H)(Object.assign({"event-details-container":!0},o))}">
          ${this.renderTitle(n)} ${this.renderLocation(n)} ${this.renderAttendees(n)}
        </div>
        <div class="event-other-container">${this.renderOther(n)}</div>
      </fluent-card>
    `}renderHeader(n){return this.renderTemplate("header",{header:n},"header-"+n)||Lt.qy`
        <div class="header" aria-label="${n}">${n}</div>
      `}renderTitle(n){return Lt.qy`
      <div
        aria-label=${n.subject}
        class="${(0,go.H)({"event-subject":!0,narrow:this._isNarrow})}"
      >
        ${n.subject}
      </div>`}renderLocation(n){return n.location.displayName?Lt.qy`
      <div class="event-location-container">
        <div class="event-location-icon">${(0,Bn.r)(Bn.A.OfficeLocation)}</div>
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
        `:null}renderGroups(n){const o={};return n.forEach(f=>{var m;let I=null===(m=f?.start)||void 0===m?void 0:m.dateTime;"UTC"===f.end.timeZone&&(I+="Z");const F=this.getDateHeaderFromDateTimeString(I);o[F]=o[F]||[],o[F].push(f)}),Lt.qy`
      ${Object.keys(o).map(f=>Lt.qy`
            <div class="group">${this.renderHeader(f)} ${this.renderEvents(o[f])}</div>
          `)}
    `}renderEvents(n){return Lt.qy`
        ${n.map(o=>Lt.qy`
              <div
                class="event-container"
                tabindex="0"
                @focus=${()=>this.eventClicked(o)}>
                ${this.renderTemplate("event",{event:o},o.id)||this.renderEvent(o)}
              </div>`)}`}args(){return[this.providerState,this.preferredTimezone,this.eventQuery,this.date,this.groupId,this.days]}loadState(){return vl(this,void 0,void 0,function*(){if(this.events)return;const n=yield this.loadEvents();n?.length>0&&(this.events=n)})}eventClicked(n){this.fireCustomEvent("eventClick",n)}getEventTimeString(n){if(n.isAllDay)return"ALL DAY";let o=n.start.dateTime;"UTC"===n.start.timeZone&&(o+="Z");let f=n.end.dateTime;return"UTC"===n.end.timeZone&&(f+="Z"),`${this.prettyPrintTimeFromDateTime(new Date(o))} - ${this.prettyPrintTimeFromDateTime(new Date(f))}`}loadEvents(){return vl(this,void 0,void 0,function*(){const n=er.b.globalProvider;let o=[];if(n?.state===Pt.HJ.SignedIn){const f=n.graph.forComponent(this);if(this.eventQuery)try{const m=this.eventQuery.split("|");let I,F;m.length>1?(F=m[0].trim(),I=m[1].trim()):F=this.eventQuery;const ae=yield mp(f,F,I?[I]:[]);if(ae?.value)for(o=ae.value;ae.hasNext;)yield ae.next(),o=ae.value}catch{}else{const m=this.date?new Date(this.date):new Date,I=new Date(m.getTime());I.setDate(m.getDate()+this.days);try{const F=yield((d,l,n,o)=>Qd(void 0,void 0,void 0,function*(){const f=`startdatetime=${l.toISOString()}`,m=`enddatetime=${n.toISOString()}`;return mp(d,o?`groups/${o}/calendar/calendarview?${f}&${m}`:`me/calendarview?${f}&${m}`,o?["Group.Read.All","Group.ReadWrite.All"]:["Calendars.ReadBasic","Calendars.Read","Calendars.ReadWrite"])}))(f,m,I,this.groupId);if(F?.value)for(o=F.value;F.hasNext;)yield F.next(),o=F.value}catch{}}}return o})}prettyPrintTimeFromDateTime(n){return n.toLocaleTimeString(navigator.language,{timeStyle:"short",timeZone:this.preferredTimezone})}getDateHeaderFromDateTimeString(n){return new Date(n).toLocaleDateString(navigator.language,{dateStyle:"full",timeZone:this.preferredTimezone})}}return Ma([(0,Ot.MZ)({attribute:"date",type:String}),Ya("design:type",String)],d.prototype,"date",void 0),Ma([(0,Ot.MZ)({attribute:"group-id",type:String}),Ya("design:type",String)],d.prototype,"groupId",void 0),Ma([(0,Ot.MZ)({attribute:"days",type:Number}),Ya("design:type",Object)],d.prototype,"days",void 0),Ma([(0,Ot.MZ)({attribute:"event-query",type:String}),Ya("design:type",String)],d.prototype,"eventQuery",void 0),Ma([(0,Ot.MZ)({attribute:"events",type:Array,hasChanged:(l,n)=>l!==n}),Ya("design:type",Array)],d.prototype,"events",void 0),Ma([(0,Ot.MZ)({attribute:"show-max",type:Number}),Ya("design:type",Number)],d.prototype,"showMax",void 0),Ma([(0,Ot.MZ)({attribute:"group-by-day",type:Boolean}),Ya("design:type",Boolean)],d.prototype,"groupByDay",void 0),Ma([(0,Ot.MZ)({attribute:"preferred-timezone",type:String}),Ya("design:type",String)],d.prototype,"preferredTimezone",void 0),Ma([(0,Ot.MZ)({attribute:!1}),Ya("design:type",Boolean)],d.prototype,"_isNarrow",void 0),d})();var mo=h(2404),Xd=h(1235),ed=h(4130),Ym=h(7768),Vo=h(5889),Ja=function(d,l,n,o){var I,f=arguments.length,m=f<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,l,n,o);else for(var F=d.length-1;F>=0;F--)(I=d[F])&&(m=(f<3?I(m):f>3?I(l,n,m):I(l,n))||m);return f>3&&m&&Object.defineProperty(l,n,m),m},Ns=function(d,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,l)};const vc=d=>Array.isArray(d?.value),nd=["json","image"],Yd=()=>mo._.config.response.isEnabled&&mo._.config.isEnabled,Jd=()=>(0,Oo.N)("get",Jm);let Jm=(()=>{class d extends Ps.N{constructor(){super(...arguments),this.scopes=[],this.version="v1.0",this.type="json",this.maxPages=3,this.pollingRate=0,this.cacheEnabled=!1,this.cacheInvalidationPeriod=0,this.isPolling=!1,this.isRefreshing=!1,this.renderLoading=()=>{const n=this.renderTemplate("loading",null);return vc(this.response)?this.renderValueContentWithDefaultTemplate(Lt.qy`${this.response.value.map(o=>this.renderTemplate("value",o,o.id))} ${n} `):n},this.renderContent=()=>{if(this.hasTemplate("value")&&vc(this.response)){const n=vc(this.response)?Lt.qy`
          ${this.response.value.map(o=>this.renderTemplate("value",o,o.id))}
        `:this.renderTemplate("value",this.response);return this.renderValueContentWithDefaultTemplate(n)}return this.response?this.renderTemplate("default",this.response)||Lt.qy``:this.hasTemplate("no-data")?this.renderTemplate("no-data",null):Lt.qy``}}refresh(n=!1){this.isRefreshing=!0,n&&this.clearState(),this._task.run()}clearState(){this.response=null}args(){return[this.providerState,this.resource,this.scopes,this.version,this.pollingRate,this.type,this.maxPages,this.cacheEnabled,this.cacheInvalidationPeriod]}renderValueContentWithDefaultTemplate(n){var o,f;if(this.hasTemplate("default")){const m=this.renderTemplate("default",this.response);return(null!==(f=null===(o=this.templates.value)||void 0===o?void 0:o.templateOrder)&&void 0!==f?f:999)>this.templates.default.templateOrder?Lt.qy`
          ${m}${n}
        `:Lt.qy`
          ${n}${m}
        `}return n}loadState(){var n,o,f;return function(d,l,n,o){return new(n||(n=Promise))(function(m,I){function F(Re){try{Se(o.next(Re))}catch(We){I(We)}}function ae(Re){try{Se(o.throw(Re))}catch(We){I(We)}}function Se(Re){Re.done?m(Re.value):function f(m){return m instanceof n?m:new n(function(I){I(m)})}(Re.value).then(F,ae)}Se((o=o.apply(d,l||[])).next())})}(this,void 0,void 0,function*(){const m=er.b.globalProvider;if(this.error=null,m&&m.state===Pt.HJ.SignedIn){if(this.resource){try{let I;const F=`${this.version}${this.resource}`;let ae=null;if(this.shouldRetrieveCache()){I=mo._.getCache(Vo.j.get,Vo.j.get.stores.responses);const Se=Yd()?yield I.getValue(F):null;Se&&(d=>this.cacheInvalidationPeriod||mo._.config.response.invalidationPeriod||mo._.config.defaultInvalidationPeriod)()>Date.now()-Se.timeCached&&(ae=JSON.parse(Se.response))}if(!ae){let Se=this.resource,Re=!1;null!==(n=this.response)&&void 0!==n&&n["@odata.deltaLink"]?(Se=this.response["@odata.deltaLink"],Re=!0):Re=new URL(Se,"https://graph.microsoft.com").pathname.endsWith("delta");const We=m.graph.forComponent(this);let jt=We.api(Se).version(this.version);if(!(null===(o=this.scopes)||void 0===o)&&o.length&&(jt=jt.middlewareOptions((0,dr.F)(this.scopes))),"json"===this.type){if(ae=yield jt.get(),Re&&vc(this.response)&&vc(ae)&&(ae.value=this.response.value.concat(ae.value)),!this.isPolling&&!(0,Xd.a)(this.response,ae)&&(this.response=ae),vc(ae)&&ae["@odata.nextLink"]){let Jt=1,an=ae;for(;(Jt<this.maxPages||this.maxPages<=0||Re&&this.pollingRate)&&an?.["@odata.nextLink"];){Jt++;const wn=an["@odata.nextLink"].split(this.version)[1];an=yield We.api(wn).version(this.version).get(),null!==(f=an?.value)&&void 0!==f&&f.length&&(an.value=ae.value.concat(an.value),ae=an,this.isPolling||(this.response=ae))}}}else{if(-1===this.resource.indexOf("/photo/$value")&&-1===this.resource.indexOf("/thumbnails/"))throw new Error("Only /photo/$value and /thumbnails/ endpoints support the image type");let Jt;if(this.resource.indexOf("/photo/$value")>-1){const an=this.resource.replace("/photo/$value",""),wn=yield(0,ed.e_)(We,an,this.scopes);wn&&(Jt=wn.photo)}else if(this.resource.indexOf("/thumbnails/")>-1){const an=yield(0,Ym.W1)(We,this.resource,this.scopes);an&&(Jt=an.thumbnail)}Jt&&(ae={image:Jt})}this.shouldUpdateCache()&&ae&&(I=mo._.getCache(Vo.j.get,Vo.j.get.stores.responses),yield I.putValue(F,{response:JSON.stringify(ae)}))}(0,Xd.a)(this.response,ae)||(this.response=ae)}catch(I){this.error=I}this.response&&(this.error=null,this.pollingRate&&setTimeout(()=>{this.isPolling=!0,this.loadState().finally(()=>{this.isPolling=!1})},this.pollingRate))}else this.response=null;this.isRefreshing=!1,this.fireCustomEvent("dataChange",{response:this.response,error:this.error},!0,!1,!0)}})}shouldRetrieveCache(){return Yd()&&this.cacheEnabled&&!(this.isRefreshing||this.isPolling)}shouldUpdateCache(){return Yd()&&this.cacheEnabled}}return Ja([(0,Ot.MZ)({attribute:"resource",reflect:!0,type:String}),Ns("design:type",String)],d.prototype,"resource",void 0),Ja([(0,Ot.MZ)({attribute:"scopes",converter:(l,n)=>l?l.toLowerCase().split(","):null,reflect:!0}),Ns("design:type",Array)],d.prototype,"scopes",void 0),Ja([(0,Ot.MZ)({attribute:"version",reflect:!0,type:String}),Ns("design:type",Object)],d.prototype,"version",void 0),Ja([(0,Ot.MZ)({attribute:"type",reflect:!0,type:String,converter:l=>((d,l="json")=>(d=>"string"==typeof d&&nd.includes(d))(d)?d:l)(l,"json")}),Ns("design:type",String)],d.prototype,"type",void 0),Ja([(0,Ot.MZ)({attribute:"max-pages",reflect:!0,type:Number}),Ns("design:type",Object)],d.prototype,"maxPages",void 0),Ja([(0,Ot.MZ)({attribute:"polling-rate",reflect:!0,type:Number}),Ns("design:type",Object)],d.prototype,"pollingRate",void 0),Ja([(0,Ot.MZ)({attribute:"cache-enabled",reflect:!0,type:Boolean}),Ns("design:type",Object)],d.prototype,"cacheEnabled",void 0),Ja([(0,Ot.MZ)({attribute:"cache-invalidation-period",type:Number}),Ns("design:type",Object)],d.prototype,"cacheInvalidationPeriod",void 0),Ja([(0,Ot.MZ)({attribute:!1}),Ns("design:type",Object)],d.prototype,"response",void 0),Ja([(0,Ot.MZ)({attribute:!1}),Ns("design:type",Object)],d.prototype,"error",void 0),d})();var ts=h(6271),bh=h(4166),eu=h(2898);const Ch=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .signed-in-person{--person-background-color:$signed-in-background-color;padding:var(--login-button-padding,10px 16px)}:host .account{padding:0;margin:7px 0}:host .account,:host .person,:host .signed-in-person{--person-avatar-size:var(--login-person-avatar-size, 40px)}:host fluent-button.signed-in{height:auto;min-width:auto}:host fluent-button.signed-in::part(control){width:100%;height:100%;padding:var(--login-button-padding,0);background:var(--login-signed-in-background,transparent);word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host fluent-button.signed-in::part(control):focus-within,:host fluent-button.signed-in::part(control):hover{background:var(--login-signed-in-hover-background,var(--neutral-fill-stealth-hover));--secondary-text-color:var(--secondary-text-hover-color)}:host fluent-button.signed-out::part(control){color:var(--login-signed-out-button-text-color,var(--neutral-fill-foreground-rest));background:var(--login-signed-out-button-background,padding-box linear-gradient(var(--neutral-fill-rest),var(--neutral-fill-rest)),border-box var(--neutral-stroke-control-rest))}:host fluent-button.signed-out::part(control):focus-within,:host fluent-button.signed-out::part(control):hover{background:var(--login-signed-out-button-hover-background,var(--neutral-fill-stealth-hover))}:host fluent-button.small::part(control):hover{background:0 0}:host fluent-button:focus-visible{outline-style:var(--focus-ring-style,auto)}:host fluent-card{--fill-color:var(--login-popup-background-color, var(--neutral-layer-1));padding:var(--login-popup-padding,16px)}:host .login-root .small .signed-in-person{padding:0;background:0 0}:host .login-root .small .signed-in-person:focus-within,:host .login-root .small .signed-in-person:hover{background:0 0}:host .login-root .account-list{padding:calc(var(--design-unit) * 1px) 0;margin:0}:host .login-root .account-item{height:auto;min-width:auto;margin-top:4px;background:var(--login-popup-background-color,var(--neutral-layer-1));list-style-type:none;cursor:pointer}:host .login-root .account-item:hover{background:var(--login-account-item-hover-bg-color,var(--neutral-fill-stealth-hover));--person-background-color:$login-account-item-hover-bg-color}:host .login-root .flyout .flyout-command{color:var(--login-flyout-command-text-color,var(--accent-foreground-rest))}:host .login-root .flyout .popup-content .commands{display:flex;align-items:flex-end;justify-content:flex-end}:host .login-root .flyout .popup-content .commands fluent-button::part(control){color:var(--login-command-button-text-color,var(--neutral-fill-foreground-rest));background:var(--login-command-button-background-color,var(--neutral-fill-stealth-rest));word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host .login-root .flyout .popup-content .commands fluent-button::part(control):hover{background:var(--login-command-button-hover-background-color,var(--neutral-fill-stealth-hover))}:host .login-root .flyout .popup-content .content .main-profile{margin-bottom:56px;margin-top:27px}:host .login-root .flyout .popup-content .add-account{padding-top:16px}:host .login-root .flyout .popup-content .add-account fluent-button::part(control){color:var(--login-add-account-button-text-color,var(--neutral-fill-foreground-rest));background:var(--login-add-account-button-background-color,var(--neutral-fill-stealth-rest));word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host .login-root .flyout .popup-content .add-account fluent-button::part(control):hover{background:var(--login-add-account-button-hover-background-color,var(--neutral-fill-stealth-hover))}
`],bp={signInLinkSubtitle:"Sign In",signOutLinkSubtitle:"Sign Out",signInWithADifferentAccount:"Sign in with a different account"};var Dt=h(742),on=h(4192),dn=h(9808),Rn=h(7153),tu=h(175),ro=h(4632),yc=h(9482),zl=h(1230),Bi=h(9605),jo=h(6105);function wh(d){return(0,yc.sb)(d)&&("option"===d.getAttribute("role")||d instanceof HTMLOptionElement)}let nu=(()=>{class d extends ro.g{constructor(n,o,f,m){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,n&&(this.textContent=n),o&&(this.initialValue=o),f&&(this.defaultSelected=f),m&&(this.selected=m),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(n,o){this.ariaChecked="boolean"!=typeof o?null:o?"true":"false"}contentChanged(n,o){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(n,o){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(n,o){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var n;return null!==(n=this.value)&&void 0!==n?n:this.text}get text(){var n,o;return null!==(o=null===(n=this.textContent)||void 0===n?void 0:n.replace(/\s+/g," ").trim())&&void 0!==o?o:""}set value(n){const o=`${n??""}`;this._value=o,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=o),on.cP.notify(this,"value")}get value(){var n;return on.cP.track(this,"value"),null!==(n=this._value)&&void 0!==n?n:this.text}get form(){return this.proxy?this.proxy.form:null}}return(0,Dt.Cg)([on.sH],d.prototype,"checked",void 0),(0,Dt.Cg)([on.sH],d.prototype,"content",void 0),(0,Dt.Cg)([on.sH],d.prototype,"defaultSelected",void 0),(0,Dt.Cg)([(0,dn.CF)({mode:"boolean"})],d.prototype,"disabled",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"selected",mode:"boolean"})],d.prototype,"selectedAttribute",void 0),(0,Dt.Cg)([on.sH],d.prototype,"selected",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"value",mode:"fromView"})],d.prototype,"initialValue",void 0),d})(),Gl=(()=>{class d{}return(0,Dt.Cg)([on.sH],d.prototype,"ariaChecked",void 0),(0,Dt.Cg)([on.sH],d.prototype,"ariaPosInSet",void 0),(0,Dt.Cg)([on.sH],d.prototype,"ariaSelected",void 0),(0,Dt.Cg)([on.sH],d.prototype,"ariaSetSize",void 0),d})();(0,jo.X)(Gl,zl.z),(0,jo.X)(nu,Bi.qw,Gl);let Ls=(()=>{class d extends ro.g{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var n;return null!==(n=this.selectedOptions[0])&&void 0!==n?n:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(n=>n.disabled)}get length(){var n,o;return null!==(o=null===(n=this.options)||void 0===n?void 0:n.length)&&void 0!==o?o:0}get options(){return on.cP.track(this,"options"),this._options}set options(n){this._options=n,on.cP.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(n){this.typeaheadExpired=n}clickHandler(n){const o=n.target.closest("option,[role=option]");if(o&&!o.disabled)return this.selectedIndex=this.options.indexOf(o),!0}focusAndScrollOptionIntoView(n=this.firstSelectedOption){this.contains(document.activeElement)&&null!==n&&(n.focus(),requestAnimationFrame(()=>{n.scrollIntoView({block:"nearest"})}))}focusinHandler(n){!this.shouldSkipFocus&&n.target===n.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const n=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`^${n}`,"gi");return this.options.filter(f=>f.text.trim().match(o))}getSelectableIndex(n=this.selectedIndex,o){const f=n>o?-1:n<o?1:0,m=n+f;let I=null;switch(f){case-1:I=this.options.reduceRight((F,ae,Se)=>!F&&!ae.disabled&&Se<m?ae:F,I);break;case 1:I=this.options.reduce((F,ae,Se)=>!F&&!ae.disabled&&Se>m?ae:F,I)}return this.options.indexOf(I)}handleChange(n,o){"selected"===o&&(d.slottedOptionFilter(n)&&(this.selectedIndex=this.options.indexOf(n)),this.setSelectedOptions())}handleTypeAhead(n){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,d.TYPE_AHEAD_TIMEOUT_MS),!(n.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${n}`)}keydownHandler(n){if(this.disabled)return!0;this.shouldSkipFocus=!1;const o=n.key;switch(o){case Rn.Tg:n.shiftKey||(n.preventDefault(),this.selectFirstOption());break;case Rn.HX:n.shiftKey||(n.preventDefault(),this.selectNextOption());break;case Rn.I5:n.shiftKey||(n.preventDefault(),this.selectPreviousOption());break;case Rn.FM:n.preventDefault(),this.selectLastOption();break;case Rn.J9:return this.focusAndScrollOptionIntoView(),!0;case Rn.Mm:case Rn.F9:return!0;case Rn.gG:if(this.typeaheadExpired)return!0;default:return 1===o.length&&this.handleTypeAhead(`${o}`),!0}}mousedownHandler(n){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(n,o){this.ariaMultiSelectable=o?"true":null}selectedIndexChanged(n,o){var f;if(this.hasSelectableOptions){if(null!==(f=this.options[this.selectedIndex])&&void 0!==f&&f.disabled&&"number"==typeof n){const m=this.getSelectableIndex(n,o),I=m>-1?m:n;return this.selectedIndex=I,void(o===I&&this.selectedIndexChanged(o,I))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(n,o){var f;const m=o.filter(d.slottedOptionFilter);null===(f=this.options)||void 0===f||f.forEach(I=>{const F=on.cP.getNotifier(I);F.unsubscribe(this,"selected"),I.selected=m.includes(I),F.subscribe(this,"selected")})}selectFirstOption(){var n,o;this.disabled||(this.selectedIndex=null!==(o=null===(n=this.options)||void 0===n?void 0:n.findIndex(f=>!f.disabled))&&void 0!==o?o:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function Cp(d,l){let n=d.length;for(;n--;)if(l(d[n],n,d))return n;return-1}(this.options,n=>!n.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var n,o;this.selectedIndex=null!==(o=null===(n=this.options)||void 0===n?void 0:n.findIndex(f=>f.defaultSelected))&&void 0!==o?o:-1}setSelectedOptions(){var n,o,f;null!==(n=this.options)&&void 0!==n&&n.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(f=null===(o=this.firstSelectedOption)||void 0===o?void 0:o.id)&&void 0!==f?f:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(n,o){this.options=o.reduce((m,I)=>(wh(I)&&m.push(I),m),[]);const f=`${this.options.length}`;this.options.forEach((m,I)=>{m.id||(m.id=(0,tu.NF)("option-")),m.ariaPosInSet=`${I+1}`,m.ariaSetSize=f}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(n,o){if(this.$fastController.isConnected){const f=this.getTypeaheadMatches();if(f.length){const m=this.options.indexOf(f[0]);m>-1&&(this.selectedIndex=m)}this.typeaheadExpired=!1}}}return d.slottedOptionFilter=l=>wh(l)&&!l.hidden,d.TYPE_AHEAD_TIMEOUT_MS=1e3,(0,Dt.Cg)([(0,dn.CF)({mode:"boolean"})],d.prototype,"disabled",void 0),(0,Dt.Cg)([on.sH],d.prototype,"selectedIndex",void 0),(0,Dt.Cg)([on.sH],d.prototype,"selectedOptions",void 0),(0,Dt.Cg)([on.sH],d.prototype,"slottedOptions",void 0),(0,Dt.Cg)([on.sH],d.prototype,"typeaheadBuffer",void 0),d})(),Fr=(()=>{class d{}return(0,Dt.Cg)([on.sH],d.prototype,"ariaActiveDescendant",void 0),(0,Dt.Cg)([on.sH],d.prototype,"ariaDisabled",void 0),(0,Dt.Cg)([on.sH],d.prototype,"ariaExpanded",void 0),(0,Dt.Cg)([on.sH],d.prototype,"ariaMultiSelectable",void 0),d})();(0,jo.X)(Fr,zl.z),(0,jo.X)(Ls,Fr);var pi=h(9953),vs=h(633),So=h(7788),id=h(7947);let _h=(()=>{class d extends Ls{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var n;return null===(n=this.options)||void 0===n?void 0:n.filter(o=>o.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(n,o){var f,m;this.ariaActiveDescendant=null!==(m=null===(f=this.options[o])||void 0===f?void 0:f.id)&&void 0!==m?m:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const n=this.activeOption;n&&(n.checked=!0)}checkFirstOption(n=!1){n?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((o,f)=>{o.checked=(0,id.r4)(f,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(n=!1){n?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((o,f)=>{o.checked=(0,id.r4)(f,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(n=!1){n?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((o,f)=>{o.checked=(0,id.r4)(f,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(n=!1){n?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach((o,f)=>{o.checked=(0,id.r4)(f,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(n){var o;if(!this.multiple)return super.clickHandler(n);const f=null===(o=n.target)||void 0===o?void 0:o.closest("[role=option]");return f&&!f.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(f),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(n){if(!this.multiple)return super.focusinHandler(n);!this.shouldSkipFocus&&n.target===n.currentTarget&&(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(n){this.multiple&&this.uncheckAllOptions()}keydownHandler(n){if(!this.multiple)return super.keydownHandler(n);if(this.disabled)return!0;const{key:o,shiftKey:f}=n;switch(this.shouldSkipFocus=!1,o){case Rn.Tg:return void this.checkFirstOption(f);case Rn.HX:return void this.checkNextOption(f);case Rn.I5:return void this.checkPreviousOption(f);case Rn.FM:return void this.checkLastOption(f);case Rn.J9:return this.focusAndScrollOptionIntoView(),!0;case Rn.F9:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Rn.gG:if(n.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===o.length&&this.handleTypeAhead(`${o}`),!0}}mousedownHandler(n){if(n.offsetX>=0&&n.offsetX<=this.scrollWidth)return super.mousedownHandler(n)}multipleChanged(n,o){var f;this.ariaMultiSelectable=o?"true":null,null===(f=this.options)||void 0===f||f.forEach(m=>{m.checked=!o&&void 0}),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(n=>n.selected),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(n,o){var f;const m=Math.max(0,parseInt(null!==(f=o?.toFixed())&&void 0!==f?f:"",10));m!==o&&So.dv.queueUpdate(()=>{this.size=m})}toggleSelectedForAllCheckedOptions(){const n=this.checkedOptions.filter(f=>!f.disabled),o=!n.every(f=>f.selected);n.forEach(f=>f.selected=o),this.selectedIndex=this.options.indexOf(n[n.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(n,o){if(this.multiple){if(this.$fastController.isConnected){const f=this.getTypeaheadMatches(),m=this.options.indexOf(f[0]);m>-1&&(this.activeIndex=m,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(n,o)}uncheckAllOptions(n=!1){this.options.forEach(o=>o.checked=!this.multiple&&void 0),n||(this.rangeStartIndex=-1)}}return(0,Dt.Cg)([on.sH],d.prototype,"activeIndex",void 0),(0,Dt.Cg)([(0,dn.CF)({mode:"boolean"})],d.prototype,"multiple",void 0),(0,Dt.Cg)([(0,dn.CF)({converter:dn.R$})],d.prototype,"size",void 0),d})();var Di=h(9760),zo=h(8322),Ct=h(9457),Ra=h(5532);const tv=class ev extends Ls{}.compose({baseName:"listbox",template:(d,l)=>pi.q`
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
            ${(0,vs.e)({filter:_h.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,styles:(d,l)=>Di.A`
    ${(0,zo.V)("inline-flex")} :host {
      border: calc(${Ct.XAH} * 1px) solid ${Ct.I21};
      border-radius: calc(${Ct.PbG} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${Ct.vR1} * 1px) 0;
    }

    ::slotted(${d.tagFor(nu)}) {
      margin: 0 calc(${Ct.vR1} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${Ra.W}
    }
  `});var _p=h(882),Wl=h(7043),rd=h(9714),od=function(d,l,n,o){var I,f=arguments.length,m=f<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,l,n,o);else for(var F=d.length-1;F>=0;F--)(I=d[F])&&(m=(f<3?I(m):f>3?I(l,n,m):I(l,n))||m);return f>3&&m&&Object.defineProperty(l,n,m),m},sd=function(d,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,l)},Ep=function(d,l,n,o){return new(n||(n=Promise))(function(m,I){function F(Re){try{Se(o.next(Re))}catch(We){I(We)}}function ae(Re){try{Se(o.throw(Re))}catch(We){I(We)}}function Se(Re){Re.done?m(Re.value):function f(m){return m instanceof n?m:new n(function(I){I(m)})}(Re.value).then(F,ae)}Se((o=o.apply(d,l||[])).next())})};let Sp=(()=>{class d extends Ps.N{static get styles(){return Ch}get strings(){return bp}get flyout(){return this.renderRoot.querySelector(".flyout")}static get requiredScopes(){return[...new Set(["user.read",...Os.O$.requiredScopes])]}get _userDetailsKey(){return"-userDetails"}constructor(){super(),this.showPresence=!1,this.loginView="full",this._arrowKeyLocation=-1,this.logout=()=>Ep(this,void 0,void 0,function*(){if(!this.fireCustomEvent("logoutInitiated"))return;const n=er.b.globalProvider;if(n?.logout){const o=n.getActiveAccount();yield n.logout(),this.userDetails=null,n.isMultiAccountSupportedAndEnabled&&localStorage.removeItem(o?.id+this._userDetailsKey),this.hideFlyout(),this.fireCustomEvent("logoutCompleted")}}),this.renderContent=()=>Lt.qy`
      <div class="login-root">
        ${this.renderButton()}
        ${this.renderFlyout()}
      </div>`,this.flyoutOpened=()=>{this._isFlyoutOpen=!0},this.flyoutClosed=()=>{this._isFlyoutOpen=!1},this.onUserKeyDown=n=>{if(!this.flyout.isOpen)return;const o=this.renderRoot.querySelector(".popup-content"),f=o.querySelectorAll("ul, fluent-button"),m=o.querySelector("#signout-button")||f[0],I=o.querySelector("#signin-different-account-button")||f[f.length-1];if("Tab"===n.key&&n.shiftKey&&m===n.target&&(n.preventDefault(),I?.focus()),"Tab"===n.key&&!n.shiftKey&&I===n.target&&(n.preventDefault(),m?.focus()),"Escape"===n.key){const ae=this.renderRoot.querySelector("#login-button");ae?.focus()}const F=this.renderRoot.querySelector("fluent-card");n.shiftKey&&"Tab"===n.key&&n.target===F&&this.hideFlyout()},this.handleAccountListKeyDown=n=>{const o=this.renderRoot.querySelector("ul.account-list");let f;const m=o?.children;for(const ae of m){const Se=ae;Se.setAttribute("tabindex","-1"),Se.blur()}const I=o.childElementCount,F=n.key;if("ArrowDown"===F)this._arrowKeyLocation=(this._arrowKeyLocation+1+I)%I;else if("ArrowUp"===F)this._arrowKeyLocation=(this._arrowKeyLocation-1+I)%I;else if("Tab"===F||"Escape"===F)return this._arrowKeyLocation=-1,o.blur(),void("Escape"===F&&(n.preventDefault(),n.stopPropagation()));this._arrowKeyLocation>-1&&(f=m[this._arrowKeyLocation],f.setAttribute("tabindex","1"),f.focus())},this.onClick=()=>{this.userDetails&&this._isFlyoutOpen?this.hideFlyout():this.userDetails?this.showFlyout():this.login()},this._isFlyoutOpen=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("click",n=>n.stopPropagation())}login(){return Ep(this,void 0,void 0,function*(){const n=er.b.globalProvider;(this.userDetails||!this.fireCustomEvent("loginInitiated"))&&!n.isMultiAccountSupportedAndEnabled||n?.login&&(yield n.login(),this.fireCustomEvent(n.state===Pt.HJ.SignedIn?"loginCompleted":"loginFailed"))})}args(){return[this.providerState]}loadState(){return Ep(this,void 0,void 0,function*(){const n=er.b.globalProvider;n&&!this.userDetails&&(n.state===Pt.HJ.SignedIn?(this.userDetails=yield(0,eu._)(n.graph.forComponent(this)),this.userDetails.personImage&&(this._image=this.userDetails.personImage),n.isMultiAccountSupportedAndEnabled&&localStorage.setItem(er.b.globalProvider.getActiveAccount().id+this._userDetailsKey,JSON.stringify(this.userDetails)),this.fireCustomEvent("loginCompleted")):this.userDetails=null)})}renderButton(){var n;const o=(null===(n=er.b.globalProvider)||void 0===n?void 0:n.state)===Pt.HJ.SignedIn,f=(0,go.H)({"signed-in":o&&!!this.userDetails,"signed-out":!o,small:"avatar"===this.loginView}),m=o?"stealth":"neutral",I=o&&this.userDetails,F=I?this.renderSignedInButtonContent(this.userDetails,this._image):this.renderSignedOutButtonContent();return Lt.qy`
      <fluent-button
        id="login-button"
        aria-expanded="${(0,ts.J)(I?this._isFlyoutOpen:void 0)}"
        appearance=${m}
        aria-label="${(0,ts.J)(o?void 0:this.strings.signInLinkSubtitle)}"
        ?disabled=${this._task.status===rd.e1.PENDING}
        @click=${this.onClick}
        class=${f}>
          ${F}
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
     `}get hasMultipleAccounts(){var n,o,f,m;return(null===(n=er.b.globalProvider)||void 0===n?void 0:n.isMultiAccountSupportedAndEnabled)&&(null===(m=null===(f=null===(o=er.b.globalProvider)||void 0===o?void 0:o.getAllAccounts)||void 0===f?void 0:f.call(o))||void 0===m?void 0:m.length)>1}get usesVerticalPersonCard(){return"full"===this.loginView||this.hasMultipleAccounts}renderFlyoutPersonDetails(n,o){return this.renderTemplate("flyout-person-details",{personDetails:n,personImage:o})||or.Q`
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
        </fluent-button>`}renderButtonContent(){return this.userDetails?this.renderSignedInButtonContent(this.userDetails,this._image):this.renderSignedOutButtonContent()}renderAddAccountContent(){if(er.b.globalProvider.isMultiAccountSupportedAndEnabled)return Lt.qy`
        <div class="add-account">
          <fluent-button
            id="signin-different-account-button"
            appearance="stealth"
            aria-label="${this.strings.signInWithADifferentAccount}"
            @click=${()=>{this.login()}}>
            <span slot="start"><i>${(0,Bn.r)(Bn.A.SelectAccount,"currentColor")}</i></span>
            ${this.strings.signInWithADifferentAccount}
          </fluent-button>
        </div>`}parsePersonDisplayConfiguration(){const n={view:"twolines",avatarSize:"small"};switch(this.loginView){case"avatar":n.view="image",n.avatarSize="small";break;case"compact":n.view="oneline",n.avatarSize="small";break;default:n.view="twolines",n.avatarSize="auto"}return n}renderSignedInButtonContent(n,o){const f=this.renderTemplate("signed-in-button-content",{personDetails:n,personImage:o}),m=this.parsePersonDisplayConfiguration();return f||or.Q`
        <mgt-person
          .personDetails=${this.userDetails}
          .personImage=${this._image}
          .view=${m.view}
          .showPresence=${this.showPresence}
          .avatarSize=${m.avatarSize}
          line2-property="email"
          class="signed-in-person"
        ></mgt-person>`}renderAccounts(){if(er.b.globalProvider.state===Pt.HJ.SignedIn&&er.b.globalProvider.isMultiAccountSupportedAndEnabled){const n=er.b.globalProvider,o=n.getAllAccounts();if(o?.length>1)return Lt.qy`
          <div id="accounts">
            <ul
              tabindex="0"
              class="account-list"
              part="account-list"
              aria-label="${this.ariaLabel}"
              @keydown=${this.handleAccountListKeyDown}
            >
              ${o.filter(f=>f.id!==n.getActiveAccount().id).map(f=>{const m=localStorage.getItem(f.id+this._userDetailsKey);return or.Q`
                    <li
                      tabindex="-1"
                      part="account-item"
                      class="account-item"
                      @click=${()=>this.setActiveAccount(f)}
                      @keyup=${I=>{"Enter"===I.key&&this.setActiveAccount(f)}}
                    >
                      <mgt-person
                        .personDetails=${m?JSON.parse(m):null}
                        .fallbackDetails=${{displayName:f.name,mail:f.mail}}
                        .view=${"twolines"}
                        class="account"
                      ></mgt-person>
                    </li>`})}
            </ul>
          </div>
       `}}setActiveAccount(n){er.b.globalProvider.setActiveAccount(n)}clearState(){this.userDetails=null,this._image=null}renderSignedOutButtonContent(){return this.renderTemplate("signed-out-button-content",null)||Lt.qy`
        <span>${this.strings.signInLinkSubtitle}</span>`}showFlyout(){const n=this.flyout;n&&n.open()}hideFlyout(){const n=this.flyout;n&&n.close()}}return od([(0,Ot.MZ)({attribute:"user-details",type:Object}),sd("design:type",Object)],d.prototype,"userDetails",void 0),od([(0,Ot.MZ)({attribute:"show-presence",type:Boolean}),sd("design:type",Object)],d.prototype,"showPresence",void 0),od([(0,Ot.MZ)({attribute:"login-view",type:String}),sd("design:type",String)],d.prototype,"loginView",void 0),od([(0,Ot.wk)(),sd("design:type",Boolean)],d.prototype,"_isFlyoutOpen",void 0),od([(0,Ot.wk)(),sd("design:type",Object)],d.prototype,"_arrowKeyLocation",void 0),d})();var vo=function(d,l,n,o){return new(n||(n=Promise))(function(m,I){function F(Re){try{Se(o.next(Re))}catch(We){I(We)}}function ae(Re){try{Se(o.throw(Re))}catch(We){I(We)}}function Se(Re){Re.done?m(Re.value):function f(m){return m instanceof n?m:new n(function(I){I(m)})}(Re.value).then(F,ae)}Se((o=o.apply(d,l||[])).next())})};const mb=["any","unified","security","mailenabledsecurity","distribution"],Eh=d=>"string"==typeof d&&mb.includes(d),vb=(d,l="any")=>Eh(d)?d:l,bc=()=>mo._.config.groups.invalidationPeriod||mo._.config.defaultInvalidationPeriod,yo=()=>mo._.config.groups.isEnabled&&mo._.config.isEnabled,Cc=["GroupMember.Read.All","Group.Read.All","Directory.Read.All","Group.ReadWrite.All","Directory.ReadWrite.All"],Th=(d,l,n=10,o=["any"],f="")=>vo(void 0,void 0,void 0,function*(){let m;const I=`${l||"*"}*${o.join("+")}*${f}:${n}`;if(yo()){m=mo._.getCache(Vo.j.groups,Vo.j.groups.stores.groupsQuery);const Re=yield m.getValue(I);if(Re&&bc()>Date.now()-Re.timeCached&&Re.top>=n)return Re.groups.map(We=>JSON.parse(We)).slice(0,n+1)}let ae,F="";const Se=[];if(""!==l&&(F=`(startswith(displayName,'${l}') or startswith(mailNickname,'${l}') or startswith(mail,'${l}'))`),f&&(F+=`${l?" and ":""}${f}`),o.includes("any")){if(0===Se.length){const Re=yield d.api("groups").filter(F).top(n).count(!0).header("ConsistencyLevel","eventual").middlewareOptions((0,dr.F)(Cc)).get();return yo()&&Re&&(yield m.putValue(I,{groups:Re.value.map(We=>JSON.stringify(We)),top:n})),Re?Re.value:null}}else{const Re=d.createBatch(),We=[];o.includes("unified")&&We.push("groupTypes/any(c:c+eq+'Unified')"),o.includes("security")&&We.push("(mailEnabled eq false and securityEnabled eq true)"),o.includes("mailenabledsecurity")&&We.push("(mailEnabled eq true and securityEnabled eq true)"),o.includes("distribution")&&We.push("(mailEnabled eq true and securityEnabled eq false)"),F=F?`${F} and `:"";for(const jt of We)Re.get(jt,`/groups?$filter=${F+jt}`,Cc);try{ae=yield Re.executeAll();for(const jt of We)if(ae.get(jt).content.value)for(const Jt of ae.get(jt).content.value)Se.find(wn=>wn.id===Jt.id)||Se.push(Jt)}catch{try{const Jt=[];for(const an of We)Jt.push(d.api("groups").filter(`${F} and ${an}`).top(n).count(!0).header("ConsistencyLevel","eventual").middlewareOptions((0,dr.F)(Cc)).get());return(yield Promise.all(Jt)).map(an=>an.value).reduce((an,wn)=>an.concat(wn),[])}catch{return[]}}}return Se}),Sh=(d,l,n)=>vo(void 0,void 0,void 0,function*(){let o;if(yo()){o=mo._.getCache(Vo.j.groups,Vo.j.groups.stores.groups);const I=yield o.getValue(l);if(I&&bc()>Date.now()-I.timeCached){const F=I.group?JSON.parse(I.group):null,ae=n&&F?n.filter(Se=>!Object.keys(F).includes(Se)):null;if(!ae||ae.length<=1)return F}}let f=`/groups/${l}`;n&&(f=f+"?$select="+n.toString());const m=yield d.api(f).middlewareOptions((0,dr.F)(Cc)).get();return yo()&&(yield o.putValue(l,{group:JSON.stringify(m)})),m}),Ap=(d,l,n="")=>vo(void 0,void 0,void 0,function*(){if(!l||0===l.length)return[];const o=d.createBatch(),f={},m=[];let I;yo()&&(I=mo._.getCache(Vo.j.groups,Vo.j.groups.stores.groups));for(const F of l){let ae;if(f[F]=null,yo()&&(ae=yield I.getValue(F)),ae&&bc()>Date.now()-ae.timeCached)f[F]=ae.group?JSON.parse(ae.group):null;else if(""!==F){let Se=`/groups/${F}`;n&&(Se=`${Se}?$filters=${n}`),o.get(F,Se,Cc),m.push(F)}}try{const F=yield o.executeAll();for(const ae of l){const Se=F.get(ae);Se?.content&&(f[ae]=Se.content,yo()&&(yield I.putValue(ae,{group:JSON.stringify(Se.content)})))}return Promise.all(Object.values(f))}catch{try{return l.filter(ae=>m.includes(ae)).forEach(ae=>{f[ae]=Sh(d,ae)}),yo()&&(yield Promise.all(l.filter(ae=>m.includes(ae)).map(ae=>vo(void 0,void 0,void 0,function*(){return yield I.putValue(ae,{group:JSON.stringify(yield f[ae])})})))),Promise.all(Object.values(f))}catch{return[]}}});var mr=h(3173);const Cb=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{--person-details-wrapper-width:0;width:auto}:host fluent-text-field{width:100%;font-size:var(--people-picker-font-size, 14px)}:host fluent-text-field::part(root){display:flex;flex-wrap:wrap;height:auto;background:padding-box linear-gradient(var(--people-picker-input-background,var(--neutral-fill-input-rest)),var(--people-picker-input-background,var(--neutral-fill-input-rest))),border-box var(--people-picker-input-border-color,var(--neutral-stroke-input-rest))}:host fluent-text-field::part(root):hover{background:padding-box linear-gradient(var(--people-picker-input-hover-background,var(--neutral-fill-input-hover)),var(--people-picker-input-hover-background,var(--neutral-fill-input-hover))),border-box var(--people-picker-input-hover-border-color,var(--neutral-stroke-input-hover))}:host fluent-text-field::part(root):focus,:host fluent-text-field::part(root):focus-within{background:padding-box linear-gradient(var(--people-picker-input-focus-background,var(--neutral-fill-input-focus)),var(--people-picker-input-focus-background,var(--neutral-fill-input-focus))),border-box var(--people-picker-input-focus-border-color,var(--neutral-stroke-input-focus))}:host fluent-text-field::part(start){margin:unset}:host fluent-text-field::part(control){width:auto;flex-grow:1;min-width:25%;height:calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px);word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host fluent-text-field::part(control)::placeholder{color:var(--people-picker-input-placeholder-text-color,var(--input-placeholder-rest))}:host fluent-text-field::part(control):hover::placeholder{color:var(--people-picker-input-placeholder-hover-text-color,var(--input-placeholder-hover))}:host fluent-text-field::part(control):focus-within::placeholder,:host fluent-text-field::part(control):focus::placeholder{color:var(--people-picker-input-placeholder-focus-text-color,var(--input-placeholder-filled))}:host fluent-text-field .search-icon{display:flex;padding-top:10px;padding-inline-start:10px}:host fluent-text-field .search-icon svg path{fill:var(--people-picker-search-icon-color,currentColor)}:host .selected-list{display:flex;flex-wrap:wrap;column-gap:5px;padding:unset;margin:0 5px}:host .selected-list-item{display:flex;column-gap:5px;border-radius:100px;margin-top:3px;background-color:var(--people-picker-selected-option-background-color,var(--person-background-color,var(--neutral-layer-3)))}:host .selected-list-item.highlighted{background-color:var(--people-picker-selected-option-highlight-background-color,var(--accent-fill-rest))}:host .selected-list-item-close-icon{display:flex;justify-content:center;align-items:center;padding-inline-end:8px;cursor:pointer}:host .selected-list-item-close-icon svg path{fill:var(--people-picker-remove-selected-close-icon-color,currentColor)}:host .selected-list-item .person-image-selected{width:max-content;--person-avatar-size:var(--people-picker-selected-person-avatar-size, 24px)}:host fluent-card{margin-top:4px;background-color:var(--people-picker-dropdown-background-color,var(--fill-color))}:host .searched-people-list{list-style:none;padding:4px;margin:auto}:host .searched-people-list-result{padding:4px;border-radius:4px;background:var(--people-picker-dropdown-result-background-color,var(--person-background-color,transparent))}:host .searched-people-list-result:hover{background:var(--people-picker-dropdown-result-hover-background-color,var(--person-background-color,var(--neutral-fill-input-hover)))}:host .searched-people-list-result:focus,:host .searched-people-list-result:focus-within{background:var(--people-picker-dropdown-result-focus-background-color,var(--person-background-color,var(--neutral-fill-input-focus)))}:host .searched-people-list-result .person-image-result{--person-avatar-size:var(--people-picker-result-person-avatar-size, 40px)}:host .message-parent{display:flex;place-content:center;flex-direction:row;padding:10px 15px;column-gap:5px}:host .message-parent .loading-text,:host .message-parent .search-error-text{font-style:normal;font-weight:600;font-size:14px;line-height:19px;text-align:center;color:var(--people-picker-no-results-text-color,var(--neutral-foreground-hint))}
`];var Ah=h(8955);const nv={inputPlaceholderText:"Search for a name",maxSelectionsPlaceHolder:"Max contacts added",maxSelectionsAriaLabel:"Maximum contact selections reached",noResultsFound:"We didn't find any matches.",loadingMessage:"Loading...",selected:"selected",removeSelectedUser:"Remove ",selectContact:"select a contact",suggestionsTitle:"Suggested contacts"};var el=h(1965),ad=h(6199),Qi=function(d,l,n,o){var I,f=arguments.length,m=f<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,l,n,o);else for(var F=d.length-1;F>=0;F--)(I=d[F])&&(m=(f<3?I(m):f>3?I(l,n,m):I(l,n))||m);return f>3&&m&&Object.defineProperty(l,n,m),m},Xi=function(d,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,l)},yl=function(d,l,n,o){return new(n||(n=Promise))(function(m,I){function F(Re){try{Se(o.next(Re))}catch(We){I(We)}}function ae(Re){try{Se(o.throw(Re))}catch(We){I(We)}}function Se(Re){Re.done?m(Re.value):function f(m){return m instanceof n?m:new n(function(I){I(m)})}(Re.value).then(F,ae)}Se((o=o.apply(d,l||[])).next())})};const ra=()=>{(0,To.E)(Ah.oR,mc.z1),(0,bh.r)(),(0,Os.sN)(),(0,el.i)(),(0,Oo.N)("people-picker",Ip)};let Ip=(()=>{class d extends Ps.N{static get styles(){return Cb}get strings(){return nv}get flyout(){return this.renderRoot.querySelector(".flyout")}get input(){return this.renderRoot.querySelector("fluent-text-field")}get selectedPeople(){return this._selectedPeople}set selectedPeople(n){n||(n=[]),(0,Xd.V)(this._selectedPeople,n)||(this._selectedPeople=n,this.fireCustomEvent("selectionChanged",this._selectedPeople))}static get requiredScopes(){return[...new Set(["user.read.all","people.read","group.read.all","user.readbasic.all","contacts.read",...Os.O$.requiredScopes])]}constructor(){super(),this.groupIds=[],this.type="any",this.groupType=["any"],this.userType="any",this.transitiveSearch=!1,this.people=null,this.showMax=6,this.disableImages=!1,this.personCardInteraction="none",this.defaultSelectedUserIds=[],this.defaultSelectedGroupIds=[],this.disabled=!1,this.allowAnyEmail=!1,this.userIds=[],this.disableSuggestions=!1,this.userInput="",this._selectedPeople=[],this._arrowSelectionCount=-1,this.defaultSelectedUsers=[],this.defaultSelectedGroups=[],this._highlightedUsers=[],this._currentHighlightedUserPos=0,this._isFocused=!1,this._setAnyEmail=!1,this.handleSelectionChanged=()=>{0===this.selectedPeople.length&&!this.disabled&&this.enableTextInput()},this.renderLoading=()=>this.renderTemplate("loading",null)||or.Q`
         <div class="message-parent">
           <mgt-spinner></mgt-spinner>
           <div aria-label="${this.strings.loadingMessage}" class="loading-text">
             ${this.strings.loadingMessage}
           </div>
         </div>
       `,this.handleInputClick=()=>{this.flyout.isOpen||this.handleUserSearch()},this.gainedFocus=()=>{this.clearHighlighted(),this._isFocused=!0,this.loadState(),this.showFlyout()},this.lostFocus=()=>{this._isFocused=!1,this.input&&this.input.setAttribute("aria-activedescendant","");const n=this.renderRoot.querySelector(".people-list");if(n)for(const o of n.children)o.classList.remove("focused"),o.setAttribute("aria-selected","false");this.requestUpdate()},this.onUserKeyUp=n=>{const o=n.key,f=n.getModifierState("Control")||n.getModifierState("Meta"),m=f&&"v"===o,I=["ArrowDown","ArrowRight","ArrowUp","ArrowLeft"].includes(o);if(!m&&f||I)return(f||["ArrowLeft","ArrowRight"].includes(o))&&this.hideFlyout(),void("ArrowDown"===o&&!this.flyout.isOpen&&this._isFocused&&this.handleUserSearch());if(!["Tab","Enter","Shift"].includes(o)){if("Escape"===o)return this.clearInput(),this._foundPeople=[],void(this._arrowSelectionCount=-1);if("Backspace"===o&&0===this.userInput.length&&this.selectedPeople.length>0)return this.clearHighlighted(),this.selectedPeople=this.selectedPeople.splice(0,this.selectedPeople.length-1),this.loadState(),void this.hideFlyout();if([";",","].includes(o))return void(this.allowAnyEmail&&(this._setAnyEmail=!0,n.preventDefault(),n.stopPropagation()))}},this.onUserInput=n=>{this.userInput=n.target.value,this.userInput&&((0,mr.B9)(this.userInput)&&this.allowAnyEmail?this._setAnyEmail&&this.handleAnyEmail():this.handleUserSearch(),this._setAnyEmail=!1)},this.onUserKeyDown=n=>{n.stopPropagation();const o=n.key,f=this.renderRoot.querySelector(".selected-list"),m=n.getModifierState("Control")||n.getModifierState("Meta");if(m&&f){const I=f.querySelectorAll("mgt-person.person-image-selected");if(this.hideFlyout(),m&&"ArrowLeft"===o)this._currentHighlightedUserPos=(this._currentHighlightedUserPos-1+I.length)%I.length,this._currentHighlightedUserPos>=0&&!Number.isNaN(this._currentHighlightedUserPos)?this._highlightedUsers.push(I[this._currentHighlightedUserPos]):this._currentHighlightedUserPos=0;else if(m&&"ArrowRight"===o){const F=this._highlightedUsers.pop();if(F){const ae=F.parentElement;ae&&(this.clearHighlighted(ae),this._currentHighlightedUserPos++)}}else m&&"a"===o&&(this._highlightedUsers=[],I.forEach(F=>this._highlightedUsers.push(F)));this._highlightedUsers&&this.highlightSelectedPeople(this._highlightedUsers)}else if(this.clearHighlighted(),this.flyout.isOpen){if(("ArrowUp"===o||"ArrowDown"===o)&&(this.handleArrowSelection(n),n.preventDefault()),"Enter"===o){if(!n.shiftKey&&this._foundPeople){n.preventDefault();const I=this._foundPeople[this._arrowSelectionCount];if(I)return this.addPerson(I),this.hideFlyout(),this.input.value="",void(this.hasMaxSelections&&this.disableTextInput())}this.allowAnyEmail?this.handleAnyEmail():this.showFlyout()}[";",",","Tab"].includes(o)&&this.allowAnyEmail&&("Tab"!==o&&n.preventDefault(),this.userInput=this.input.value,this.handleAnyEmail()),"Tab"===o&&this.hideFlyout()}},this.handleCut=()=>{this.writeHighlightedText().then(()=>{this.removeHighlightedOnCut()},()=>{})},this.handleCopy=()=>{this.writeHighlightedText()},this.handlePaste=()=>{navigator.clipboard.readText().then(n=>{if(n)try{const o=JSON.parse(n);if(o&&o.length>0)for(const f of o)this.addPerson(f)}catch(o){if(o instanceof SyntaxError){const f=[",",";"];let m;try{for(const I of f)if(m=n.split(I),m.length>1){this.hideFlyout(),this.selectUsersById(m);break}}catch{}}}},n=>{})},this.addEventListener("copy",this.handleCopy),this.addEventListener("cut",this.handleCut),this.addEventListener("paste",this.handlePaste),this.addEventListener("selectionChanged",this.handleSelectionChanged)}disableTextInput(){const n=this.input.shadowRoot.querySelector("input");n&&(n.setAttribute("disabled","true"),n.value="")}enableTextInput(){const n=this.input.shadowRoot.querySelector("input");n&&(n.removeAttribute("disabled"),n.focus())}get hasMaxSelections(){return"single"===this.selectionMode&&this.selectedPeople.length>=1}focus(n){this.input&&(this.input.focus(n),this.input.select())}selectUsersById(n){var o;return yl(this,void 0,void 0,function*(){const f=er.b.globalProvider,m=er.b.globalProvider.graph;if(f&&f.state===Pt.HJ.SignedIn)for(const I in n){const F=n[I];try{const ae=yield(0,Eo.wz)(m,F,Os.ge);this.addPerson(ae)}catch(ae){(0,ad.Z)(ae)&&null!==(o=ae.message)&&void 0!==o&&o.includes("does not exist")&&this.allowAnyEmail&&(0,mr.B9)(F)&&this.addPerson({mail:F,displayName:F})}}})}selectGroupsById(n){return yl(this,void 0,void 0,function*(){const o=er.b.globalProvider,f=er.b.globalProvider.graph;if(o&&o.state===Pt.HJ.SignedIn)for(const m in n)try{const I=yield Sh(f,n[m]);this.addPerson(I)}catch{}})}render(){const n=this.renderTemplate("default",{people:this._foundPeople});if(n)return n;const o=this.renderSelectedPeople(this.selectedPeople),f=this.renderInput(o),m=this.renderFlyout(f);return Lt.qy`
      <div>
        ${m}
      </div>
    `}args(){return[this.providerState,this.groupId,this.groupIds,this.type,this.groupType,this.userType,this.transitiveSearch,this.people,this.showMax,this.defaultSelectedUserIds,this.defaultSelectedGroupIds,this.userIds,this.userFilters,this.peopleFilters,this.groupFilters]}clearState(){this.selectedPeople=[],this.userInput="",this._highlightedUsers=[],this._currentHighlightedUserPos=0}renderInput(n){var o,f,m;const I=this.disabled?"":this.placeholder||this.strings.inputPlaceholderText,F=this.hasMaxSelections?this.strings.maxSelectionsAriaLabel:"",ae=Lt.qy`<span class="search-icon">${(0,Bn.r)(Bn.A.Search)}</span>`,Se=(null===(o=this.selectedPeople)||void 0===o?void 0:o.length)>0?n:ae;return Lt.qy`
      <fluent-text-field
        autocomplete="off"
        appearance="outline"
        slot="anchor"
        id="people-picker-input"
        role="combobox"
        placeholder=${this.hasMaxSelections?this.strings.maxSelectionsPlaceHolder:I}
        aria-label=${this.ariaLabel||F||I||this.strings.selectContact}
        aria-expanded=${null!==(m=null===(f=this.flyout)||void 0===f?void 0:f.isOpen)&&void 0!==m&&m}
        @click="${this.hasMaxSelections?void 0:this.handleInputClick}"
        @focus="${this.hasMaxSelections?void 0:this.gainedFocus}"
        @keydown="${this.hasMaxSelections?void 0:this.onUserKeyDown}"
        @input="${this.hasMaxSelections?void 0:this.onUserInput}"
        @blur="${this.lostFocus}"
        ?disabled=${this.disabled}
      >
        <span slot="start">${Se}</span>
      </fluent-text-field>
    `}renderSelectedPeople(n){return n?.length?Lt.qy`
       <ul
        id="selected-list"
        aria-label="${this.strings.selected}"
        class="selected-list">
          ${(0,Ii.u)(n,o=>o?.id,o=>{var f;return Lt.qy`
            <li class="selected-list-item">
              ${this.renderTemplate("selected-person",{person:o},`selected-${o?.id?o.id:o.displayName}`)||this.renderSelectedPerson(o)}

              <div
                role="button"
                tabindex="0"
                class="selected-list-item-close-icon"
                aria-label="${this.strings.removeSelectedUser}${null!==(f=o?.displayName)&&void 0!==f?f:""}"
                @click="${m=>this.removePerson(o,m)}"
                @keydown="${m=>this.handleRemovePersonKeyDown(o,m)}">
                  ${(0,Bn.r)(Bn.A.Close)}
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
     `}renderFlyoutContent(){if(this._task.status===rd.e1.PENDING)return this.renderLoading();const n=this._foundPeople;return n&&0!==n.length&&0!==this.showMax?this.renderSearchResults(n):this.renderNoData()}renderNoData(){if(this._isFocused)return this.renderTemplate("error",null)||this.renderTemplate("no-data",null)||Lt.qy`
         <div class="message-parent">
           <div aria-label=${this.strings.noResultsFound} class="search-error-text">
             ${this.strings.noResultsFound}
           </div>
         </div>
       `}renderSearchResults(n){const o=n.filter(f=>f.id);return Lt.qy`
      <ul
        id="suggestions-list"
        class="searched-people-list"
        role="listbox"
        aria-live="polite"
        title=${this.strings.suggestionsTitle}
      >
        ${(0,Ii.u)(o,f=>f.id,f=>Lt.qy`
          <li
            id="${f.id}"
            class="searched-people-list-result"
            role="option"
            @click="${()=>this.handleSuggestionClick(f)}">
              ${this.renderPersonResult(f)}
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
     `}loadState(){var n,o;return yl(this,void 0,void 0,function*(){this._groupPeople=null,this._foundPeople=null,this.defaultPeople=null;let f=this.people;const m=this.userInput.toLowerCase(),I=er.b.globalProvider;if(f?.length)m&&(f=f.filter(ae=>ae?.displayName.toLowerCase().includes(m)));else if(!f&&I&&I.state===Pt.HJ.SignedIn){const F=I.graph.forComponent(this);if(!m.length){if(this.disableSuggestions)return void(this._foundPeople=[]);if(this.defaultPeople)f=this.defaultPeople;else{if(this.groupId||this.groupIds.length){if(null===this._groupPeople)if(this.groupId)try{this._groupPeople="group"===this.type?yield(0,Eo.sb)(F,null,this.groupId,this.showMax,this.type,this.transitiveSearch):yield(0,Eo.sb)(F,null,this.groupId,this.showMax,this.type,this.transitiveSearch,this.userFilters,this.peopleFilters)}catch{this._groupPeople=[]}else if("group"===this.type)try{this._groupPeople=yield Ap(F,this.groupIds,this.groupFilters)}catch{this._groupPeople=[]}else try{const ae=yield(0,Eo.fp)(F,"",this.groupIds,this.showMax,this.type,this.transitiveSearch,this.userFilters);this._groupPeople=ae}catch{this._groupPeople=[]}f=this._groupPeople||[]}else if("person"===this.type||"any"===this.type)f=this.userIds.length?yield(0,Eo.$q)(F,this.userIds,"",this.userFilters):!this.userFilters||"user"!==this.userType&&"contact"!==this.userType?yield(0,fc.cB)(F,this.userType,this.peopleFilters,this.showMax):yield(0,Eo.lo)(F,this.userFilters,this.showMax);else if("group"===this.type){let ae=(yield Th(F,"",this.showMax,this.groupType,this.groupFilters))||[];ae.length>0&&ae[0].value&&(ae=ae[0].value),f=ae}this.defaultPeople=f}}if((this.defaultSelectedUserIds.length>0||this.defaultSelectedGroupIds.length>0)&&!this.selectedPeople.length&&!this.defaultSelectedUsers.length&&!this.defaultSelectedGroups.length&&(this.defaultSelectedUsers=yield(0,Eo.$q)(F,this.defaultSelectedUserIds,"",this.userFilters),this.defaultSelectedGroups=yield Ap(F,this.defaultSelectedGroupIds,this.peopleFilters),this.defaultSelectedGroups=this.defaultSelectedGroups.filter(ae=>null!==ae),this.defaultSelectedUsers=this.defaultSelectedUsers.filter(ae=>null!==ae),this.selectedPeople=[...this.defaultSelectedUsers,...this.defaultSelectedGroups],this.hasMaxSelections&&this.disableTextInput(),this.requestUpdate()),m)if(f=[],this.groupId)f=(yield(0,Eo.sb)(F,m,this.groupId,this.showMax,this.type,this.transitiveSearch,this.userFilters,this.peopleFilters))||[];else{if("person"===this.type||"any"===this.type){try{if("contact"===this.userType||"user"===this.userType)f=null!==(n=this.userIds)&&void 0!==n&&n.length?yield(0,Eo.$q)(F,this.userIds,m,this.userFilters):yield(0,Eo.Ei)(F,m,this.showMax,this.userFilters);else if(this.groupIds.length)try{f=yield(0,Eo.fp)(F,m,this.groupIds,this.showMax,this.type,this.transitiveSearch,this.userFilters)}catch{}else f=null!==(o=this.userIds)&&void 0!==o&&o.length?yield(0,Eo.$q)(F,this.userIds,m,this.userFilters):(yield(0,fc.lq)(F,m,this.showMax,this.userType,this.peopleFilters))||[]}catch{}if(f&&f.length<this.showMax&&"contact"!==this.userType&&"person"!==this.type)try{const ae=(yield(0,Eo.Ei)(F,m,this.showMax,this.userFilters))||[],Se=new Set(f.map(Re=>Re.id));for(const Re of ae)Se.has(Re.id)||f.push(Re)}catch{}}if(("group"===this.type||"any"===this.type)&&f.length<this.showMax)if(this.groupIds.length)try{f=yield((d,l,n,o=10,f=["any"],m="")=>vo(void 0,void 0,void 0,function*(){const I=[],F=yield Th(d,l,o,f,m);if(F)for(const ae of F)ae.id&&n.includes(ae.id)&&I.push(ae);return I}))(F,m,this.groupIds,this.showMax,this.groupType,this.userFilters)}catch{}else{let ae=[];try{ae=(yield Th(F,m,this.showMax,this.groupType,this.groupFilters))||[],f=f.concat(ae)}catch{}}}}this._foundPeople=this.filterPeople(f)})}getGroupsForGroupIds(n,o){return yl(this,void 0,void 0,function*(){const f=yield Ap(n,this.groupIds,this.groupFilters);for(const m of f)o=o.concat(m);return o=o.filter(m=>m)})}hideFlyout(){const n=this.flyout;n&&n.close(),this.input&&this.input.setAttribute("aria-activedescendant",""),this._arrowSelectionCount=-1}showFlyout(){const n=this.flyout;n&&n.open(),this._arrowSelectionCount=-1}removePerson(n,o){o.stopPropagation();const f=this.selectedPeople.filter(m=>!n.id&&m.displayName?m.displayName!==n.displayName:m.id!==n.id);this.selectedPeople=f,this.loadState()}handleRemovePersonKeyDown(n,o){"Enter"===o.key&&(this.removePerson(n,o),this.enableTextInput())}addPerson(n){n&&(setTimeout(()=>{this.clearInput()},50),0===this.selectedPeople.filter(f=>!n.id&&f.displayName?f.displayName===n.displayName:f.id===n.id).length&&(this.selectedPeople=[...this.selectedPeople,n],this.loadState(),this._foundPeople=[],this._arrowSelectionCount=-1),this.enableTextInput())}clearInput(){this.clearHighlighted(),"single"!==this.selectionMode&&(this.input.value=""),this.userInput=""}handleAnyEmail(){this._arrowSelectionCount=-1,(0,mr.B9)(this.userInput)&&this.addPerson({mail:this.userInput,displayName:this.userInput}),this.hideFlyout(),this.input&&(this.input.focus(),this._isFocused=!0)}handleSuggestionClick(n){this.addPerson(n),this.hasMaxSelections&&(this.disableTextInput(),this.input.value=""),this.hideFlyout()}handleUserSearch(){this._debouncedSearch||(this._debouncedSearch=(0,mr.sg)(()=>yl(this,void 0,void 0,function*(){yield this._task.run(),this._arrowSelectionCount=-1,this.showFlyout()}),400)),this._debouncedSearch()}writeHighlightedText(){return yl(this,void 0,void 0,function*(){const n=[];for(const f of this._highlightedUsers){const{id:m,displayName:I,mail:F,userPrincipalName:ae,scoredEmailAddresses:Se}=f._personDetails;let Re;Re=Se&&Se.length>0?Se.pop().address:ae||F,n.push({id:m,displayName:I,email:Re})}let o="";n.length>0&&(o=JSON.stringify(n)),yield navigator.clipboard.writeText(o)})}removeHighlightedOnCut(){this.selectedPeople=this.selectedPeople.splice(0,this.selectedPeople.length-this._highlightedUsers.length),this._highlightedUsers=[],this._currentHighlightedUserPos=0,this.loadState(),this.hideFlyout()}highlightSelectedPeople(n){for(const o of n)(o?.parentElement).classList.add("highlighted")}clearHighlighted(n){if(n)n.classList.remove("highlighted");else{for(const o of this._highlightedUsers){const f=o.parentElement;f&&f.classList.remove("highlighted")}this._highlightedUsers=[],this._currentHighlightedUserPos=0}}handleArrowSelection(n){var o,f;const m=this.renderRoot.querySelector(".searched-people-list");if(null!==(o=m?.children)&&void 0!==o&&o.length){n&&("ArrowUp"===n.key&&(this._arrowSelectionCount=-1===this._arrowSelectionCount?0:(this._arrowSelectionCount-1+m.children.length)%m.children.length),"ArrowDown"===n.key&&(this._arrowSelectionCount=-1===this._arrowSelectionCount?0:(this._arrowSelectionCount+1+m.children.length)%m.children.length));for(const F of null!==(f=m?.children)&&void 0!==f?f:[]){const ae=F;ae.setAttribute("aria-selected","false"),ae.blur(),ae.removeAttribute("tabindex")}const I=m.children[this._arrowSelectionCount];I&&(I.setAttribute("tabindex","0"),I.focus(),I.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"}),I.setAttribute("aria-selected","true"),this.input.setAttribute("aria-activedescendant",I?.id))}}filterPeople(n){const o=[];if(n&&n.length>0){n=n.filter(F=>F);const f=this.selectedPeople.map(F=>F.id?F.id:F.displayName),m=n.filter(F=>F?.id?-1===f.indexOf(F.id):-1===f.indexOf(F?.displayName)),I=new Set;for(const F of m){const ae=JSON.stringify(F);I.add(ae)}I.forEach(F=>{const ae=JSON.parse(F);o.push(ae)})}return o}handleSectionScroll(n){const o=this.renderRoot.querySelector(".flyout-root");o&&!(n.deltaY<0&&0===o.scrollTop)&&!(n.deltaY>0&&o.clientHeight+o.scrollTop>=o.scrollHeight-1)&&n.stopPropagation()}}return Qi([(0,Ot.MZ)({attribute:"group-id",converter:l=>l.trim()}),Xi("design:type",String)],d.prototype,"groupId",void 0),Qi([(0,Ot.MZ)({attribute:"group-ids",converter:l=>l.split(",").map(n=>n.trim())}),Xi("design:type",Array)],d.prototype,"groupIds",void 0),Qi([(0,Ot.MZ)({attribute:"type",converter:l=>(0,fc.ys)(l,"any")}),Xi("design:type",String)],d.prototype,"type",void 0),Qi([(0,Ot.MZ)({attribute:"group-type",converter:l=>{const n=["any"];if(!l||0===l.length)return n;const o=l.split(","),f=[];for(let m of o)m=m.trim(),Eh(m)&&f.push(vb(m));return 0===f.length?n:f}}),Xi("design:type",Array)],d.prototype,"groupType",void 0),Qi([(0,Ot.MZ)({attribute:"user-type",converter:l=>(0,fc.we)(l)}),Xi("design:type",String)],d.prototype,"userType",void 0),Qi([(0,Ot.MZ)({attribute:"transitive-search",type:Boolean}),Xi("design:type",Object)],d.prototype,"transitiveSearch",void 0),Qi([(0,Ot.MZ)({attribute:"people",type:Object}),Xi("design:type",Array)],d.prototype,"people",void 0),Qi([(0,Ot.MZ)({attribute:"show-max",type:Number}),Xi("design:type",Object)],d.prototype,"showMax",void 0),Qi([(0,Ot.MZ)({attribute:"disable-images",type:Boolean}),Xi("design:type",Object)],d.prototype,"disableImages",void 0),Qi([(0,Ot.MZ)({attribute:"show-presence",type:Boolean}),Xi("design:type",Boolean)],d.prototype,"showPresence",void 0),Qi([(0,Ot.MZ)({attribute:"person-card",converter:l=>(0,vp.e)(l)}),Xi("design:type",String)],d.prototype,"personCardInteraction",void 0),Qi([(0,Ot.MZ)({attribute:"selected-people",type:Array}),Xi("design:type",Array),Xi("design:paramtypes",[Array])],d.prototype,"selectedPeople",null),Qi([(0,Ot.MZ)({attribute:"default-selected-user-ids",converter:l=>l.split(",").map(n=>n.trim()),type:String}),Xi("design:type",Array)],d.prototype,"defaultSelectedUserIds",void 0),Qi([(0,Ot.MZ)({attribute:"default-selected-group-ids",converter:l=>l.split(",").map(n=>n.trim()),type:String}),Xi("design:type",Array)],d.prototype,"defaultSelectedGroupIds",void 0),Qi([(0,Ot.MZ)({attribute:"placeholder",type:String}),Xi("design:type",String)],d.prototype,"placeholder",void 0),Qi([(0,Ot.MZ)({attribute:"disabled",type:Boolean}),Xi("design:type",Object)],d.prototype,"disabled",void 0),Qi([(0,Ot.MZ)({attribute:"allow-any-email",type:Boolean}),Xi("design:type",Object)],d.prototype,"allowAnyEmail",void 0),Qi([(0,Ot.MZ)({attribute:"selection-mode",type:String}),Xi("design:type",String)],d.prototype,"selectionMode",void 0),Qi([(0,Ot.MZ)({attribute:"user-ids",converter:l=>l.split(",").map(n=>n.trim()),type:String}),Xi("design:type",Array)],d.prototype,"userIds",void 0),Qi([(0,Ot.MZ)({attribute:"user-filters"}),Xi("design:type",String)],d.prototype,"userFilters",void 0),Qi([(0,Ot.MZ)({attribute:"people-filters"}),Xi("design:type",String)],d.prototype,"peopleFilters",void 0),Qi([(0,Ot.MZ)({attribute:"group-filters"}),Xi("design:type",String)],d.prototype,"groupFilters",void 0),Qi([(0,Ot.MZ)({attribute:"aria-label",type:String}),Xi("design:type",String)],d.prototype,"ariaLabel",void 0),Qi([(0,Ot.MZ)({attribute:"disable-suggestions",type:Boolean}),Xi("design:type",Object)],d.prototype,"disableSuggestions",void 0),Qi([(0,Ot.wk)(),Xi("design:type",Object)],d.prototype,"userInput",void 0),Qi([(0,Ot.wk)(),Xi("design:type",Object)],d.prototype,"_arrowSelectionCount",void 0),Qi([(0,Ot.wk)(),Xi("design:type",Array)],d.prototype,"_highlightedUsers",void 0),Qi([(0,Ot.wk)(),Xi("design:type",Object)],d.prototype,"_isFocused",void 0),Qi([(0,Ot.wk)(),Xi("design:type",Object)],d.prototype,"_setAnyEmail",void 0),Qi([(0,Ot.wk)(),Xi("design:type",Array)],d.prototype,"_foundPeople",void 0),d})();const Ih=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{background-color:var(--tasks-background-color,transparent);padding:var(--tasks-padding,12px);border:var(--tasks-border,0);border-radius:var(--tasks-border-radius,0);--skeleton-fill:var(--neutral-foreground-active)}:host .header{display:flex;align-items:center;justify-content:space-between;padding:var(--tasks-header-padding,0 0 14px 0);margin:var(--tasks-header-padding,0 0 14px 0);font-size:var(--tasks-header-font-size, 16px);font-weight:var(--tasks-header-font-weight,600);color:var(--tasks-header-text-color,var(--neutral-foreground-hint))}:host .header:hover{color:var(--tasks-header-text-hover-color,var(--neutral-foreground-hover))}:host .header .title{justify-content:left;display:flex;align-items:center}:host .header .title .shimmer{width:80px;height:20px}:host .header .title svg{margin-top:3px;padding:0 4px;width:16px;height:16px}:host .header .new-task-button{justify-content:right}:host .header .new-task-button .shimmer{width:40px;height:24px}:host .header .new-task-button::part(control){font-weight:var(--tasks-new-button-text-font-weight,700);color:var(--tasks-new-button-text-color,var(--foreground-on-accent-rest));width:var(--tasks-new-button-width,none);height:var(--tasks-new-button-height,none);background:var(--tasks-new-button-background,padding-box linear-gradient(var(--accent-fill-rest),var(--accent-fill-rest)),border-box var(--accent-stroke-control-rest))}:host .header .new-task-button::part(control):hover{background:var(--tasks-new-button-background-hover,var(--accent-fill-hover))}:host .header .new-task-button::part(control):active{background:var(--tasks-new-button-background-active,var(--accent-fill-active))}:host .tasks{display:flex;flex-direction:column;row-gap:var(--tasks-gap,20px)}:host .tasks .task{display:flex;column-gap:4px;align-items:flex-start;justify-content:space-between}:host .tasks .task.updating{background:var(--neutral-stroke-rest)!important;pointer-events:none;opacity:.4}:host .tasks .task.complete{border:var(--task-complete-border,2px dotted var(--neutral-foreground-active));border-radius:var(--task-complete-border-radius,4px);background:var(--task-complete-background-color,transparent);padding:var(--task-complete-padding,10px)}:host .tasks .task.incomplete{border:var(--task-incomplete-border,1px solid var(--neutral-foreground-active));border-radius:var(--task-complete-border-radius,4px);background:var(--task-incomplete-background-color,var(--neutral-layer-1));padding:var(--task-incomplete-padding,10px)}:host .tasks .task .task-details-container{display:flex;flex-direction:column;row-gap:12px;width:100%}:host .tasks .task .task-details-container .top{display:flex;justify-content:space-between;column-gap:4px}:host .tasks .task .task-details-container .top.add-new-task{flex-direction:row}:host .tasks .task .task-details-container .top .check-and-title{display:flex;align-items:flex-start;flex-direction:column;width:100%;row-gap:12px}:host .tasks .task .task-details-container .top .check-and-title.shimmer{display:flex;flex-direction:inherit;gap:10px}:host .tasks .task .task-details-container .top .check-and-title.shimmer .checkbox{height:10px;width:10px}:host .tasks .task .task-details-container .top .check-and-title.shimmer .title{height:10px;width:100%}:host .tasks .task .task-details-container .top .check-and-title .task-content{display:grid;grid-template-columns:repeat(auto-fit,250px);gap:12px;justify-content:start;width:100%}:host .tasks .task .task-details-container .top .check-and-title .task-content .picker{max-width:250px}:host .tasks .task .task-details-container .top .check-and-title .task-content .task-due fluent-text-field.dark::part(control){color-scheme:dark}:host .tasks .task .task-details-container .top .task-options .options{height:10px;width:20px}:host .tasks .task .task-details-container .top .task-options.new-task-action-buttons{display:flex;flex-direction:column;row-gap:12px}:host .tasks .task .task-details-container .bottom{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;grid-column-gap:6px}:host .tasks .task .task-details-container .bottom .task-bucket,:host .tasks .task .task-details-container .bottom .task-due,:host .tasks .task .task-details-container .bottom .task-group{display:flex;align-items:center;gap:6px}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon,:host .tasks .task .task-details-container .bottom .task-due .task-icon,:host .tasks .task .task-details-container .bottom .task-group .task-icon{display:flex;place-content:center;width:var(--task-icons-width,20px);height:var(--task-icons-height,20px)}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon .shimmer.icon,:host .tasks .task .task-details-container .bottom .task-due .task-icon .shimmer.icon,:host .tasks .task .task-details-container .bottom .task-group .task-icon .shimmer.icon{width:20px;height:20px}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon svg,:host .tasks .task .task-details-container .bottom .task-due .task-icon svg,:host .tasks .task .task-details-container .bottom .task-group .task-icon svg{width:var(--task-icons-width,20px);height:var(--task-icons-height,20px)}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon svg path,:host .tasks .task .task-details-container .bottom .task-due .task-icon svg path,:host .tasks .task .task-details-container .bottom .task-group .task-icon svg path{fill:var(--task-icons-background-color,var(--neutral-foreground-hint))}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon-text,:host .tasks .task .task-details-container .bottom .task-due .task-icon-text,:host .tasks .task .task-details-container .bottom .task-group .task-icon-text{color:var(--task-icons-text-font-color,var(--neutral-foreground-hint));font-size:var(--task-icons-text-font-size, 12px);font-weight:var(--task-icons-text-font-weight,600);white-space:normal;width:100%}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon-text .shimmer.text,:host .tasks .task .task-details-container .bottom .task-due .task-icon-text .shimmer.text,:host .tasks .task .task-details-container .bottom .task-group .task-icon-text .shimmer.text{width:100%;height:10px}:host .tasks .task .task-details-container .task-details{display:flex;flex-direction:column;row-gap:8px}:host .tasks .task .task-details-container .task-details.shimmer{flex-direction:row;place-items:center;column-gap:6px}:host .tasks .task .task-details-container .task-details.shimmer .shimmer.icon{width:24px;height:24px}:host .tasks .task .task-details-container .task-details.shimmer .shimmer.text{width:100%;height:10px}:host .tasks .task .task-details-container .task-details .task-title{color:var(--foreground-on-neutral-rest)}:host .tasks .task .task-details-container .task-details .task-body{display:flex}:host fluent-button.add-task::part(control){font-weight:var(--task-add-new-button-text-font-weight,initial);color:var(--task-add-new-button-text-color,var(--neutral-foreground-rest));width:var(--task-add-new-button-width,none);height:var(--task-add-new-button-height,none);background:var(--task-add-new-button-background,padding-box linear-gradient(var(--neutral-fill-active),var(--neutral-fill-active)),border-box var(--neutral-stroke-control-active));border:var(--task-add-new-button-border,calc(var(--stroke-width) * 1px) solid transparent)}:host fluent-button.add-task::part(control):hover{background:var(--task-add-new-button-background-hover,padding-box linear-gradient(var(--neutral-fill-hover),var(--neutral-fill-hover)),border-box var(--neutral-stroke-control-hover))}:host fluent-button.add-task::part(control):active{background:var(--task-add-new-button-background-active,padding-box linear-gradient(var(--neutral-fill-active),var(--neutral-fill-active)),border-box var(--neutral-stroke-control-active))}:host fluent-button.cancel-task::part(control){font-weight:var(--task-cancel-new-button-text-font-weight,initial);color:var(--task-cancel-new-button-text-color,var(--neutral-foreground-rest));width:var(--task-cancel-new-button-width,none);height:var(--task-cancel-new-button-height,none);background:var(--task-cancel-new-button-background,padding-box linear-gradient(var(--neutral-fill-active),var(--neutral-fill-active)),border-box var(--neutral-stroke-control-active));border:var(--task-cancel-new-button-border,calc(var(--stroke-width) * 1px) solid transparent)}:host fluent-button.cancel-task::part(control):hover{background:var(--task-cancel-new-button-background-hover,padding-box linear-gradient(var(--neutral-fill-hover),var(--neutral-fill-hover)),border-box var(--neutral-stroke-control-hover))}:host fluent-button.cancel-task::part(control):active{background:var(--task-cancel-new-button-background-active,padding-box linear-gradient(var(--neutral-fill-active),var(--neutral-fill-active)),border-box var(--neutral-stroke-control-active))}:host fluent-option{background:var(--task-new-dropdown-list-background-color,var(--fill-color))}:host fluent-option:hover{background:var(--task-new-dropdown-option-hover-background-color,var(--neutral-fill-stealth-hover))}:host fluent-option::part(content){color:var(--task-new-dropdown-option-text-color,var(--neutral-foreground-rest))}:host fluent-select::part(listbox){background:var(--task-new-dropdown-list-background-color,var(--fill-color))}:host fluent-select::part(control){border:var(--task-new-dropdown-border,calc(var(--stroke-width) * 1px) solid transparent);border-radius:var(--task-new-dropdown-border-radius,calc(var(--control-corner-radius) * 1px));background:var(--task-new-dropdown-background-color,padding-box linear-gradient(var(--neutral-fill-input-rest),var(--neutral-fill-input-rest)),border-box var(--neutral-stroke-input-rest))}:host fluent-select::part(control):hover{background:var(--task-new-dropdown-hover-background-color,padding-box linear-gradient(var(--neutral-fill-input-hover),var(--neutral-fill-input-hover)),border-box var(--neutral-stroke-input-hover))}:host fluent-select::part(control)::placeholder{color:var(--task-new-dropdown-placeholder-color,var(--input-placeholder-rest))}:host fluent-checkbox{padding-top:1px}:host fluent-checkbox::part(control){border-radius:50%;background:var(--task-incomplete-checkbox-background-color,var(--neutral-fill-input-alt-rest))}:host fluent-checkbox::part(control):hover{background:var(--task-incomplete-checkbox-background-hover-color,var(--neutral-fill-input-alt-hover))}:host fluent-checkbox::part(label){font-size:var(--task-title-text-font-size, medium);font-weight:var(--task-title-text-font-weight,600);color:var(--task-incomplete-title-text-color,var(var(--neutral-foreground-rest)))}:host fluent-checkbox.checked::part(control){background:var(--task-complete-checkbox-background-color,var(--accent-fill-rest));color:var(--task-complete-checkbox-text-color,currentColor)}:host fluent-checkbox.checked::part(label){text-decoration:line-through;color:var(--task-complete-title-text-color,var(--neutral-foreground-hint))}:host fluent-text-field.new-task{width:100%}:host fluent-text-field.new-task::part(root){border:var(--task-new-input-border,calc(var(--stroke-width) * 1px) solid transparent);border-radius:var(--task-new-input-border-radius,calc(var(--control-corner-radius) * 1px));background:var(--task-new-input-background-color,padding-box linear-gradient(var(--neutral-fill-input-rest),var(--neutral-fill-input-rest)),border-box var(--neutral-stroke-input-rest))}:host fluent-text-field.new-task::part(root):hover{background:var(--task-new-input-hover-background-color,padding-box linear-gradient(var(--neutral-fill-input-hover),var(--neutral-fill-input-hover)),border-box var(--neutral-stroke-input-hover))}:host fluent-text-field.new-task::part(root)::placeholder{color:var(--task-new-input-placeholder-color,var(--input-placeholder-rest))}:host .people [slot=no-data] fluent-button::part(control){color:var(--task-new-person-icon-text-color,var(--neutral-foreground-hint))}:host .people [slot=no-data] svg{fill:var(--task-new-person-icon-color,var(--neutral-foreground-hint))}@media only screen and (width <= 600px){:host fluent-select{width:100%}:host .tasks .task .task-details-container .bottom{display:grid;grid-auto-flow:row;grid-auto-columns:unset;row-gap:4px}:host .tasks .task .task-details-container .bottom .ask-bucket,:host .tasks .task .task-details-container .bottom .ask-due,:host .tasks .task .task-details-container .bottom .ask-group{margin-inline-start:8px}:host .tasks .task .task-details-container .top.add-new-task{flex-direction:column;row-gap:12px}:host .tasks .task .task-details-container .top.add-new-task .check-and-title .task-content{display:grid;grid-auto-flow:row;row-gap:12px;width:100%}:host .tasks .task .task-details-container .top.add-new-task .task-options.new-task-action-buttons{flex-direction:row;column-gap:4px}}
`],ld={removeTaskSubtitle:"Delete Task",cancelNewTaskSubtitle:"Cancel",newTaskPlaceholder:"Adding a task...",addTaskButtonSubtitle:"Add",due:"Due ",addTaskDate:"Add the task date",assign:"Assign",planNotFound:"Plan not found",plansSelfAssigned:"All Plans",bucketNotFound:"Bucket not found",bucketsSelfAssigned:"All Tasks",baseSelfAssigned:"Assigned to Me"};class wc extends Yc{static fromGraph(l){const n=new wc(l.client);return n.setComponent(l.componentName),n}constructor(l,n="beta"){super(l,n)}forComponent(l){const n=new wc(this.client);return this.setComponent(l),n}}var Fs=function(d,l,n,o){return new(n||(n=Promise))(function(m,I){function F(Re){try{Se(o.next(Re))}catch(We){I(We)}}function ae(Re){try{Se(o.throw(Re))}catch(We){I(We)}}function Se(Re){Re.done?m(Re.value):function f(m){return m instanceof n?m:new n(function(I){I(m)})}(Re.value).then(F,ae)}Se((o=o.apply(d,l||[])).next())})};const _c=["Tasks.ReadWrite","Group.ReadWrite.All"],bl=["Tasks.Read","Group.Read.All","Tasks.ReadWrite","Group.ReadWrite.All"],xh=(d,l,n)=>Fs(void 0,void 0,void 0,function*(){let o;try{o=yield d.api(`/planner/tasks/${l.id}`).header("Cache-Control","no-store").middlewareOptions((0,dr.F)(_c)).header("Prefer","return=representation").header("If-Match",l.eTag).update(n)}catch{}return o});var vr=function(d,l,n,o){return new(n||(n=Promise))(function(m,I){function F(Re){try{Se(o.next(Re))}catch(We){I(We)}}function ae(Re){try{Se(o.throw(Re))}catch(We){I(We)}}function Se(Re){Re.done?m(Re.value):function f(m){return m instanceof n?m:new n(function(I){I(m)})}(Re.value).then(F,ae)}Se((o=o.apply(d,l||[])).next())})};class cd{constructor(l){this.graph=wc.fromGraph(l)}}class kp extends cd{getTaskGroups(){return vr(this,void 0,void 0,function*(){return(yield(d=this.graph,Fs(void 0,void 0,void 0,function*(){const l=yield d.api("/me/planner/plans").header("Cache-Control","no-store").middlewareOptions((0,dr.F)(bl)).get();return l?.value}))).map(n=>{var o;return{id:n.id,title:n.title,containerId:null===(o=n?.container)||void 0===o?void 0:o.containerId}});var d})}getTaskGroupsForGroup(l){return vr(this,void 0,void 0,function*(){return(yield((d,l)=>Fs(void 0,void 0,void 0,function*(){const n=`/groups/${l}/planner/plans`,o=yield d.api(n).header("Cache-Control","no-store").middlewareOptions((0,dr.F)(bl)).get();return o?.value}))(this.graph,l)).map(o=>({id:o.id,title:o.title}))})}getTaskGroup(l){return vr(this,void 0,void 0,function*(){const n=yield((d,l)=>Fs(void 0,void 0,void 0,function*(){return yield d.api(`/planner/plans/${l}`).header("Cache-Control","no-store").middlewareOptions((0,dr.F)(bl)).get()}))(this.graph,l);return{id:n.id,title:n.title,_raw:n}})}getTaskFoldersForTaskGroup(l){return vr(this,void 0,void 0,function*(){return(yield((d,l)=>Fs(void 0,void 0,void 0,function*(){const n=yield d.api(`/planner/plans/${l}/buckets`).header("Cache-Control","no-store").middlewareOptions((0,dr.F)(bl)).get();return n?.value}))(this.graph,l)).map(o=>({_raw:o,id:o.id,name:o.name,parentId:o.planId}))})}getTasksForTaskFolder(l){return vr(this,void 0,void 0,function*(){return(yield((d,l)=>Fs(void 0,void 0,void 0,function*(){const n=yield d.api(`/planner/buckets/${l}/tasks`).header("Cache-Control","no-store").middlewareOptions((0,dr.F)(bl)).get();return n?.value}))(this.graph,l)).map(o=>({_raw:o,assignments:o.assignments,completed:100===o.percentComplete,dueDate:o.dueDateTime&&new Date(o.dueDateTime),eTag:o["@odata.etag"],id:o.id,immediateParentId:o.bucketId,name:o.title,topParentId:o.planId}))})}setTaskComplete(l){return vr(this,void 0,void 0,function*(){return yield((d,l)=>Fs(void 0,void 0,void 0,function*(){yield xh(d,l,{percentComplete:100})}))(this.graph,l)})}setTaskIncomplete(l){return vr(this,void 0,void 0,function*(){return((d,l)=>Fs(void 0,void 0,void 0,function*(){yield xh(d,l,{percentComplete:0})}))(this.graph,l)})}addTask(l){var n;return vr(this,void 0,void 0,function*(){return yield((d,l)=>Fs(void 0,void 0,void 0,function*(){return yield d.api("/planner/tasks").header("Cache-Control","no-store").middlewareOptions((0,dr.F)(_c)).post(l)}))(this.graph,{assignments:l.assignments,bucketId:l.immediateParentId,dueDateTime:null===(n=l.dueDate)||void 0===n?void 0:n.toISOString(),planId:l.topParentId,title:l.name})})}assignPeopleToTask(l,n){return vr(this,void 0,void 0,function*(){return((d,l,n)=>Fs(void 0,void 0,void 0,function*(){yield xh(d,l,{assignments:n,appliedCategories:{category4:!0}})}))(this.graph,l,n)})}removeTask(l){return vr(this,void 0,void 0,function*(){return yield((d,l)=>Fs(void 0,void 0,void 0,function*(){yield d.api(`/planner/tasks/${l.id}`).header("Cache-Control","no-store").header("If-Match",l.eTag).middlewareOptions((0,dr.F)(_c)).delete()}))(this.graph,l)})}isAssignedToMe(l,n){return Object.keys(l.assignments).includes(n)}}var Mp=h(8313),oo=h(4585);const Rh=d=>{const l=Ct.li_.getValueFor(d);return(0,Mp.H)(oo.q.create(l,l,l))};var ru=h(1635),dd=h(8746);class lv extends _h{}class Rp extends((0,dd.rf)(lv)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}let Oh=(()=>{class d extends Rp{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=(0,tu.NF)("listbox-"),this.maxHeight=0}openChanged(n,o){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void So.dv.queueUpdate(()=>this.focus());this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return on.cP.track(this,"value"),this._value}set value(n){var o,f,m,I,F,ae,Se;const Re=`${this._value}`;if(null!==(o=this._options)&&void 0!==o&&o.length){const We=this._options.findIndex(an=>an.value===n),jt=null!==(m=null===(f=this._options[this.selectedIndex])||void 0===f?void 0:f.value)&&void 0!==m?m:null,Jt=null!==(F=null===(I=this._options[We])||void 0===I?void 0:I.value)&&void 0!==F?F:null;(-1===We||jt!==Jt)&&(n="",this.selectedIndex=We),n=null!==(Se=null===(ae=this.firstSelectedOption)||void 0===ae?void 0:ae.value)&&void 0!==Se?Se:n}Re!==n&&(this._value=n,super.valueChanged(Re,n),on.cP.notify(this,"value"),this.updateDisplayValue())}updateValue(n){var o,f;this.$fastController.isConnected&&(this.value=null!==(f=null===(o=this.firstSelectedOption)||void 0===o?void 0:o.value)&&void 0!==f?f:""),n&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(n,o){super.selectedIndexChanged(n,o),this.updateValue()}positionChanged(n,o){this.positionAttribute=o,this.setPositioning()}setPositioning(){const n=this.getBoundingClientRect(),f=window.innerHeight-n.bottom;this.position=this.forcedPosition?this.positionAttribute:n.top>f?"above":"below",this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight="above"===this.position?~~n.top:~~f}get displayValue(){var n,o;return on.cP.track(this,"displayValue"),null!==(o=null===(n=this.firstSelectedOption)||void 0===n?void 0:n.text)&&void 0!==o?o:""}disabledChanged(n,o){super.disabledChanged&&super.disabledChanged(n,o),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(n){if(!this.disabled){if(this.open){const o=n.target.closest("option,[role=option]");if(o&&o.disabled)return}return super.clickHandler(n),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(n){var o;if(super.focusoutHandler(n),!this.open)return!0;const f=n.relatedTarget;this.isSameNode(f)?this.focus():null!==(o=this.options)&&void 0!==o&&o.includes(f)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(n,o){super.handleChange(n,o),"value"===o&&this.updateValue()}slottedOptionsChanged(n,o){this.options.forEach(f=>{on.cP.getNotifier(f).unsubscribe(this,"value")}),super.slottedOptionsChanged(n,o),this.options.forEach(f=>{on.cP.getNotifier(f).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(n){var o;return n.offsetX>=0&&n.offsetX<=(null===(o=this.listbox)||void 0===o?void 0:o.scrollWidth)?super.mousedownHandler(n):this.collapsible}multipleChanged(n,o){super.multipleChanged(n,o),this.proxy&&(this.proxy.multiple=o)}selectedOptionsChanged(n,o){var f;super.selectedOptionsChanged(n,o),null===(f=this.options)||void 0===f||f.forEach((m,I)=>{var F;const ae=null===(F=this.proxy)||void 0===F?void 0:F.options.item(I);ae&&(ae.selected=m.selected)})}setDefaultSelectedOption(){var n;const o=null!==(n=this.options)&&void 0!==n?n:Array.from(this.children).filter(Ls.slottedOptionFilter),f=o?.findIndex(m=>m.hasAttribute("selected")||m.selected||m.value===this.value);this.selectedIndex=-1===f?0:f}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(n=>{const o=n.proxy||(n instanceof HTMLOptionElement?n.cloneNode():null);o&&this.proxy.options.add(o)}))}keydownHandler(n){super.keydownHandler(n);const o=n.key||n.key.charCodeAt(0);switch(o){case Rn.gG:n.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case Rn.Tg:case Rn.FM:n.preventDefault();break;case Rn.Mm:n.preventDefault(),this.open=!this.open;break;case Rn.F9:this.collapsible&&this.open&&(n.preventDefault(),this.open=!1);break;case Rn.J9:return this.collapsible&&this.open&&(n.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(o===Rn.HX||o===Rn.I5)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(n,o){super.sizeChanged(n,o),this.proxy&&(this.proxy.size=o)}updateDisplayValue(){this.collapsible&&on.cP.notify(this,"displayValue")}}return(0,Dt.Cg)([(0,dn.CF)({attribute:"open",mode:"boolean"})],d.prototype,"open",void 0),(0,Dt.Cg)([on.Jg],d.prototype,"collapsible",null),(0,Dt.Cg)([on.sH],d.prototype,"control",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"position"})],d.prototype,"positionAttribute",void 0),(0,Dt.Cg)([on.sH],d.prototype,"position",void 0),(0,Dt.Cg)([on.sH],d.prototype,"maxHeight",void 0),d})(),Op=(()=>{class d{}return(0,Dt.Cg)([on.sH],d.prototype,"ariaControls",void 0),d})();(0,jo.X)(Op,Fr),(0,jo.X)(Oh,Bi.qw,Op);var $s=h(8287),Us=h(1589),Yr=h(4932),tl=h(5778),ys=h(4954),Sn=h(3226),ou=h(2783),kr=h(4583),ql=h(2622),Bs=h(9709),Np=h(6009),oa=h(3928);const Ph=".control",Nh=":not([disabled]):not([open])",Lh="[disabled]",Lp=(d,l)=>Di.A`
    ${(0,zo.V)("inline-flex")}
    
    :host {
      border-radius: calc(${Ct.PbG} * 1px);
      box-sizing: border-box;
      color: ${Ct.lHw};
      fill: currentcolor;
      font-family: ${Ct.OCo};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${ou.H0};
      background: ${Ct.pfK};
      border-radius: calc(${Ct.JUW} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${kr.D} * 1px));
      padding: calc((${Ct.vR1} - ${Ct.XAH} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${Ct.XAH} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${Ct.XAH} * 1px) solid transparent;
      border-radius: calc(${Ct.PbG} * 1px);
      height: calc(${kr.D} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${Bs.Ah}
      min-height: 100%;
      padding: 0 calc(${Ct.vR1} * 2.25px);
      width: 100%;
    }

    :host(:${Yr.N}) {
      ${Ra.W}
    }

    :host([disabled]) .control {
      cursor: ${tl.Z};
      opacity: ${Ct.qB4};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${kr.D} + ${Ct.vR1} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${kr.D} + ${Ct.vR1} * 2) * 1px);
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
  `,Fp=(()=>{class d extends Oh{appearanceChanged(n,o){n!==o&&(this.classList.add(o),this.classList.remove(n))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&Ct.pfK.setValueFor(this.listbox,Ct.Tkp)}}return(0,ru.Cg)([(0,dn.CF)({mode:"fromView"})],d.prototype,"appearance",void 0),d})().compose({baseName:"select",baseClass:Oh,template:(d,l)=>pi.q`
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
        ${(0,$s.z)(n=>n.collapsible,pi.q`
                <div
                    class="control"
                    part="control"
                    ?disabled="${n=>n.disabled}"
                    ${(0,Us.K)("control")}
                >
                    ${(0,Bi.LT)(d,l)}
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
                    ${(0,Bi.aO)(d,l)}
                </div>
            `)}
        <div
            class="listbox"
            id="${n=>n.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${n=>n.disabled}"
            ?hidden="${n=>!!n.collapsible&&!n.open}"
            ${(0,Us.K)("listbox")}
        >
            <slot
                ${(0,vs.e)({filter:Ls.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(d,l)=>Lp().withBehaviors((0,ql.f)("outline",(0,Np._9)(d,l,Nh,Lh)),(0,ql.f)("filled",(0,oa.dM)(d,l,Ph,Nh).withBehaviors((0,ys.mr)((0,oa.lb)(d,l,Ph,Nh)))),(0,ql.f)("stealth",(0,Np.ss)(d,l,Nh,Lh)),(0,ys.mr)(Di.A`
    :host([open]) .listbox {
      background: ${Sn.A.ButtonFace};
      border-color: ${Sn.A.CanvasText};
    }
  `)),indicator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  '});class Hs{constructor(l,n){this.cache=new WeakMap,this.ltr=l,this.rtl=n}bind(l){this.attach(l)}unbind(l){const n=this.cache.get(l);n&&Ct.oWd.unsubscribe(n)}attach(l){const n=this.cache.get(l)||new Up(this.ltr,this.rtl,l),o=Ct.oWd.getValueFor(l);Ct.oWd.subscribe(n),n.attach(o),this.cache.set(l,n)}}class Up{constructor(l,n,o){this.ltr=l,this.rtl=n,this.source=o,this.attached=null}handleChange({token:n}){this.attach(n.getValueFor(this.source))}attach(l){this.attached!==this[l]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[l],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const su=nu.compose({baseName:"option",template:(d,l)=>pi.q`
    <template
        aria-checked="${n=>n.ariaChecked}"
        aria-disabled="${n=>n.ariaDisabled}"
        aria-posinset="${n=>n.ariaPosInSet}"
        aria-selected="${n=>n.ariaSelected}"
        aria-setsize="${n=>n.ariaSetSize}"
        class="${n=>[n.checked&&"checked",n.selected&&"selected",n.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${(0,Bi.LT)(d,l)}
        <span class="content" part="content">
            <slot ${(0,vs.e)("content")}></slot>
        </span>
        ${(0,Bi.aO)(d,l)}
    </template>
`,styles:(d,l)=>Di.A`
    ${(0,zo.V)("inline-flex")} :host {
      position: relative;
      ${Bs.Ah}
      background: ${Ct.WlO};
      border-radius: calc(${Ct.PbG} * 1px);
      border: calc(${Ct.XAH} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${Ct.lHw};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${kr.D} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${Ct.vR1} * 3) - ${Ct.XAH} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${Ct.vdx} - ${Ct.XAH}) * 1px);
      top: calc((${kr.D} / 4) - ${Ct.vdx} * 1px);
      width: 3px;
      height: calc((${kr.D} / 2) * 1px);
      background: transparent;
      border-radius: calc(${Ct.PbG} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${Ct.oO8};
    }

    :host(:not([disabled]):active) {
      background: ${Ct.wOW};
    }

    :host(:not([disabled]):active)::before {
      background: ${Ct.IRh};
      height: calc(((${kr.D} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${Ct.IRh};
    }

    :host(:${Yr.N}) {
      ${Ra.W}
      background: ${Ct.UBo};
    }

    :host([aria-selected='true']) {
      background: ${Ct.v8G};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${Ct.Rgz};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${Ct.DKg};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${Ct.oO8};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${Ct.wOW};
    }

    :host([disabled]) {
      cursor: ${tl.Z};
      opacity: ${Ct.qB4};
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
  `.withBehaviors(new Hs(null,Di.A`
      :host::before {
        right: calc((${Ct.vdx} - ${Ct.XAH}) * 1px);
      }
    `),(0,ys.mr)(Di.A`
        :host {
          background: ${Sn.A.ButtonFace};
          border-color: ${Sn.A.ButtonFace};
          color: ${Sn.A.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${Sn.A.Highlight};
          color: ${Sn.A.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${Sn.A.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${Sn.A.Canvas};
          color: ${Sn.A.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host(:${Yr.N}) {
          outline-color: ${Sn.A.CanvasText};
        }
      `))});var hv=h(9684),Hp=h(5017);const fv={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"};var Cl=h(9748);const au=d=>{const l=d.closest("[dir]");return null!==l&&"rtl"===l.dir?Cl.O.rtl:Cl.O.ltr};let Fh=(()=>{class d extends ro.g{constructor(){super(...arguments),this.role="menuitem",this.hasSubmenu=!1,this.currentDirection=Cl.O.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=n=>{if(n.defaultPrevented)return!1;switch(n.key){case Rn.Mm:case Rn.gG:return this.invoke(),!1;case Rn.bb:return this.expandAndFocus(),!1;case Rn.kT:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=n=>(n.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=n=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=n=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case"menuitemcheckbox":this.checked=!this.checked;break;case"menuitem":this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case"menuitemradio":this.checked||(this.checked=!0)}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(n=>"menu"===n.getAttribute("role")),this.hasSubmenu=void 0!==this.submenu}}expandedChanged(n){if(this.$fastController.isConnected){if(void 0===this.submenu)return;!1===this.expanded?this.submenu.collapseExpandedItem():this.currentDirection=au(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(n,o){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),So.dv.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,void 0!==this.observer&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(n=>!n.hasAttribute("hidden"))}}return(0,Dt.Cg)([(0,dn.CF)({mode:"boolean"})],d.prototype,"disabled",void 0),(0,Dt.Cg)([(0,dn.CF)({mode:"boolean"})],d.prototype,"expanded",void 0),(0,Dt.Cg)([on.sH],d.prototype,"startColumnCount",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"role",void 0),(0,Dt.Cg)([(0,dn.CF)({mode:"boolean"})],d.prototype,"checked",void 0),(0,Dt.Cg)([on.sH],d.prototype,"submenuRegion",void 0),(0,Dt.Cg)([on.sH],d.prototype,"hasSubmenu",void 0),(0,Dt.Cg)([on.sH],d.prototype,"currentDirection",void 0),(0,Dt.Cg)([on.sH],d.prototype,"submenu",void 0),d})();(0,jo.X)(Fh,Bi.qw);let ud=(()=>{class d extends ro.g{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>null!==this.parentElement&&(0,yc.sb)(this.parentElement)&&"menuitem"===this.parentElement.getAttribute("role"),this.handleFocusOut=n=>{if(!this.contains(n.relatedTarget)&&void 0!==this.menuItems){this.collapseExpandedItem();const o=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[o].setAttribute("tabindex","0"),this.focusIndex=o}},this.handleItemFocus=n=>{const o=n.target;void 0!==this.menuItems&&o!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(o),o.setAttribute("tabindex","0"))},this.handleExpandedChanged=n=>{if(n.defaultPrevented||null===n.target||void 0===this.menuItems||this.menuItems.indexOf(n.target)<0)return;n.preventDefault();const o=n.target;null===this.expandedItem||o!==this.expandedItem||!1!==o.expanded?o.expanded&&(null!==this.expandedItem&&this.expandedItem!==o&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=o,this.focusIndex=this.menuItems.indexOf(o),o.setAttribute("tabindex","0")):this.expandedItem=null},this.removeItemListeners=()=>{void 0!==this.menuItems&&this.menuItems.forEach(n=>{n.removeEventListener("expanded-change",this.handleExpandedChanged),n.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{const n=this.domChildren();this.removeItemListeners(),this.menuItems=n;const o=this.menuItems.filter(this.isMenuItemElement);o.length&&(this.focusIndex=0);const m=o.reduce((I,F)=>{const ae=function f(I){const F=I.getAttribute("role"),ae=I.querySelector("[slot=start]");return"menuitem"!==F&&null===ae||"menuitem"===F&&null!==ae?1:"menuitem"!==F&&null!==ae?2:0}(F);return I>ae?I:ae},0);o.forEach((I,F)=>{I.setAttribute("tabindex",0===F?"0":"-1"),I.addEventListener("expanded-change",this.handleExpandedChanged),I.addEventListener("focus",this.handleItemFocus),(I instanceof Fh||"startColumnCount"in I)&&(I.startColumnCount=m)})},this.changeHandler=n=>{if(void 0===this.menuItems)return;const o=n.target,f=this.menuItems.indexOf(o);if(-1!==f&&"menuitemradio"===o.role&&!0===o.checked){for(let I=f-1;I>=0;--I){const F=this.menuItems[I],ae=F.getAttribute("role");if("menuitemradio"===ae&&(F.checked=!1),"separator"===ae)break}const m=this.menuItems.length-1;for(let I=f+1;I<=m;++I){const F=this.menuItems[I],ae=F.getAttribute("role");if("menuitemradio"===ae&&(F.checked=!1),"separator"===ae)break}}},this.isMenuItemElement=n=>(0,yc.sb)(n)&&d.focusableElementRoles.hasOwnProperty(n.getAttribute("role")),this.isFocusableElement=n=>this.isMenuItemElement(n)}itemsChanged(n,o){this.$fastController.isConnected&&void 0!==this.menuItems&&this.setItems()}connectedCallback(){super.connectedCallback(),So.dv.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){null!==this.expandedItem&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(n){if(!n.defaultPrevented&&void 0!==this.menuItems)switch(n.key){case Rn.HX:return void this.setFocus(this.focusIndex+1,1);case Rn.I5:return void this.setFocus(this.focusIndex-1,-1);case Rn.FM:return void this.setFocus(this.menuItems.length-1,-1);case Rn.Tg:return void this.setFocus(0,1);default:return!0}}domChildren(){return Array.from(this.children).filter(n=>!n.hasAttribute("hidden"))}setFocus(n,o){if(void 0!==this.menuItems)for(;n>=0&&n<this.menuItems.length;){const f=this.menuItems[n];if(this.isFocusableElement(f)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=n,f.setAttribute("tabindex","0"),f.focus();break}n+=o}}}return d.focusableElementRoles=fv,(0,Dt.Cg)([on.sH],d.prototype,"items",void 0),d})();let Ql=(()=>{class d extends ro.g{constructor(){super(...arguments),this.role="separator",this.orientation="horizontal"}}return(0,Dt.Cg)([dn.CF],d.prototype,"role",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"orientation",void 0),d})();const Tc=class Bh extends ud{connectedCallback(){super.connectedCallback(),Ct.pfK.setValueFor(this,Ct.Tkp)}}.compose({baseName:"menu",baseClass:ud,template:(d,l)=>pi.q`
    <template
        slot="${n=>n.slot?n.slot:n.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(n,o)=>n.handleMenuKeyDown(o.event)}"
        @focusout="${(n,o)=>n.handleFocusOut(o.event)}"
    >
        <slot ${(0,vs.e)("items")}></slot>
    </template>
`,styles:(d,l)=>Di.A`
    ${(0,zo.V)("block")} :host {
      background: ${Ct.Tkp};
      border: calc(${Ct.XAH} * 1px) solid transparent;
      border-radius: calc(${Ct.JUW} * 1px);
      box-shadow: ${ou.H0};
      padding: calc((${Ct.vR1} - ${Ct.XAH}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${Ct.vR1} * 2px);
    }

    ::slotted(${d.tagFor(Fh)}) {
      margin: 0 calc(${Ct.vR1} * 1px);
    }

    ::slotted(${d.tagFor(Ql)}) {
      margin: calc(${Ct.vR1} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${Ct.vR1} * 1px) 0;
      border: none;
      border-top: calc(${Ct.XAH} * 1px) solid ${Ct.hb6};
    }
  `.withBehaviors((0,ys.mr)(Di.A`
        :host([slot='submenu']) {
          background: ${Sn.A.Canvas};
          border-color: ${Sn.A.CanvasText};
        }
      `))}),wl="focusin",Sc="focusout",Ac="keydown";var Jh=h(5441);class Xn extends ro.g{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=Cl.O.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),null!==this.anchorElement&&(this.requestPositionUpdates(),null!==this.resizeDetector&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{null===this.anchorElement||this.pendingPositioningUpdate||(Xn.intersectionService.requestPosition(this,this.handleIntersection),Xn.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&Xn.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,Xn.intersectionService.cancelRequestPosition(this,this.handleIntersection),null!==this.anchorElement&&Xn.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&Xn.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),null!==this.resizeDetector&&this.resizeDetector.disconnect()},this.getViewport=()=>"string"!=typeof this.viewport||""===this.viewport?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=l=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(l)&&this.updateLayout())},this.applyIntersectionEntries=l=>{const n=l.find(m=>m.target===this),o=l.find(m=>m.target===this.anchorElement),f=l.find(m=>m.target===this.viewportElement);return void 0!==n&&void 0!==f&&void 0!==o&&!!(!this.regionVisible||this.forceUpdate||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect||this.isRectDifferent(this.anchorRect,o.boundingClientRect)||this.isRectDifferent(this.viewportRect,f.boundingClientRect)||this.isRectDifferent(this.regionRect,n.boundingClientRect))&&(this.regionRect=n.boundingClientRect,this.anchorRect=o.boundingClientRect,this.viewportRect=this.viewportElement===document.documentElement?new DOMRectReadOnly(f.boundingClientRect.x+document.documentElement.scrollLeft,f.boundingClientRect.y+document.documentElement.scrollTop,f.boundingClientRect.width,f.boundingClientRect.height):f.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0)},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(l,n)=>Math.abs(l.top-n.top)>this.updateThreshold||Math.abs(l.right-n.right)>this.updateThreshold||Math.abs(l.bottom-n.bottom)>this.updateThreshold||Math.abs(l.left-n.left)>this.updateThreshold,this.handleResize=l=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,null===this.anchorElement&&(this.anchorElement=this.getAnchor()),null===this.viewportElement&&(this.viewportElement=this.getViewport()),this.currentDirection=au(this),this.startObservers())},this.updateLayout=()=>{let l,n;if("uncontrolled"!==this.horizontalPositioningMode){const m=this.getPositioningOptions(this.horizontalInset);if("center"===this.horizontalDefaultPosition)n="center";else if("unset"!==this.horizontalDefaultPosition){let jt=this.horizontalDefaultPosition;if("start"===jt||"end"===jt){const Jt=au(this);if(Jt!==this.currentDirection)return this.currentDirection=Jt,void this.initialize();jt=this.currentDirection===Cl.O.ltr?"start"===jt?"left":"right":"start"===jt?"right":"left"}switch(jt){case"left":n=this.horizontalInset?"insetStart":"start";break;case"right":n=this.horizontalInset?"insetEnd":"end"}}const I=void 0!==this.horizontalThreshold?this.horizontalThreshold:void 0!==this.regionRect?this.regionRect.width:0,F=void 0!==this.anchorRect?this.anchorRect.left:0,ae=void 0!==this.anchorRect?this.anchorRect.right:0,Se=void 0!==this.anchorRect?this.anchorRect.width:0,Re=void 0!==this.viewportRect?this.viewportRect.left:0,We=void 0!==this.viewportRect?this.viewportRect.right:0;(void 0===n||"locktodefault"!==this.horizontalPositioningMode&&this.getAvailableSpace(n,F,ae,Se,Re,We)<I)&&(n=this.getAvailableSpace(m[0],F,ae,Se,Re,We)>this.getAvailableSpace(m[1],F,ae,Se,Re,We)?m[0]:m[1])}if("uncontrolled"!==this.verticalPositioningMode){const m=this.getPositioningOptions(this.verticalInset);if("center"===this.verticalDefaultPosition)l="center";else if("unset"!==this.verticalDefaultPosition)switch(this.verticalDefaultPosition){case"top":l=this.verticalInset?"insetStart":"start";break;case"bottom":l=this.verticalInset?"insetEnd":"end"}const I=void 0!==this.verticalThreshold?this.verticalThreshold:void 0!==this.regionRect?this.regionRect.height:0,F=void 0!==this.anchorRect?this.anchorRect.top:0,ae=void 0!==this.anchorRect?this.anchorRect.bottom:0,Se=void 0!==this.anchorRect?this.anchorRect.height:0,Re=void 0!==this.viewportRect?this.viewportRect.top:0,We=void 0!==this.viewportRect?this.viewportRect.bottom:0;(void 0===l||"locktodefault"!==this.verticalPositioningMode&&this.getAvailableSpace(l,F,ae,Se,Re,We)<I)&&(l=this.getAvailableSpace(m[0],F,ae,Se,Re,We)>this.getAvailableSpace(m[1],F,ae,Se,Re,We)?m[0]:m[1])}const o=this.getNextRegionDimension(n,l),f=this.horizontalPosition!==n||this.verticalPosition!==l;if(this.setHorizontalPosition(n,o),this.setVerticalPosition(l,o),this.updateRegionStyle(),!this.initialLayoutComplete)return this.initialLayoutComplete=!0,void this.requestPositionUpdates();this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),f&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top","start"===this.verticalPosition),this.classList.toggle("bottom","end"===this.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.verticalPosition),this.classList.toggle("vertical-center","center"===this.verticalPosition),this.classList.toggle("left","start"===this.horizontalPosition),this.classList.toggle("right","end"===this.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.horizontalPosition),this.classList.toggle("horizontal-center","center"===this.horizontalPosition)},this.setHorizontalPosition=(l,n)=>{if(void 0===l||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let o=0;switch(this.horizontalScaling){case"anchor":case"fill":o=this.horizontalViewportLock?this.viewportRect.width:n.width,this.regionWidth=`${o}px`;break;case"content":o=this.regionRect.width,this.regionWidth="unset"}let f=0;switch(l){case"start":this.translateX=this.baseHorizontalOffset-o,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-o+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(f=(this.anchorRect.width-o)/2,this.translateX=this.baseHorizontalOffset+f,this.horizontalViewportLock){const m=this.anchorRect.left+f,I=this.anchorRect.right-f;m<this.viewportRect.left&&!(I>this.viewportRect.right)?this.translateX=this.translateX-(m-this.viewportRect.left):I>this.viewportRect.right&&!(m<this.viewportRect.left)&&(this.translateX=this.translateX-(I-this.viewportRect.right))}}this.horizontalPosition=l},this.setVerticalPosition=(l,n)=>{if(void 0===l||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let o=0;switch(this.verticalScaling){case"anchor":case"fill":o=this.verticalViewportLock?this.viewportRect.height:n.height,this.regionHeight=`${o}px`;break;case"content":o=this.regionRect.height,this.regionHeight="unset"}let f=0;switch(l){case"start":this.translateY=this.baseVerticalOffset-o,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-o+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(f=(this.anchorRect.height-o)/2,this.translateY=this.baseVerticalOffset+f,this.verticalViewportLock){const m=this.anchorRect.top+f,I=this.anchorRect.bottom-f;m<this.viewportRect.top&&!(I>this.viewportRect.bottom)?this.translateY=this.translateY-(m-this.viewportRect.top):I>this.viewportRect.bottom&&!(m<this.viewportRect.top)&&(this.translateY=this.translateY-(I-this.viewportRect.bottom))}}this.verticalPosition=l},this.getPositioningOptions=l=>l?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(l,n,o,f,m,I)=>{const F=n-m,ae=I-(n+f);switch(l){case"start":return F;case"insetStart":return F+f;case"insetEnd":return ae+f;case"end":return ae;case"center":return 2*Math.min(F,ae)+f}},this.getNextRegionDimension=(l,n)=>{const o={height:void 0!==this.regionRect?this.regionRect.height:0,width:void 0!==this.regionRect?this.regionRect.width:0};return void 0!==l&&"fill"===this.horizontalScaling?o.width=this.getAvailableSpace(l,void 0!==this.anchorRect?this.anchorRect.left:0,void 0!==this.anchorRect?this.anchorRect.right:0,void 0!==this.anchorRect?this.anchorRect.width:0,void 0!==this.viewportRect?this.viewportRect.left:0,void 0!==this.viewportRect?this.viewportRect.right:0):"anchor"===this.horizontalScaling&&(o.width=void 0!==this.anchorRect?this.anchorRect.width:0),void 0!==n&&"fill"===this.verticalScaling?o.height=this.getAvailableSpace(n,void 0!==this.anchorRect?this.anchorRect.top:0,void 0!==this.anchorRect?this.anchorRect.bottom:0,void 0!==this.anchorRect?this.anchorRect.height:0,void 0!==this.viewportRect?this.viewportRect.top:0,void 0!==this.viewportRect?this.viewportRect.bottom:0):"anchor"===this.verticalScaling&&(o.height=void 0!==this.anchorRect?this.anchorRect.height:0),o},this.startAutoUpdateEventListeners=()=>{window.addEventListener("resize",this.update,{passive:!0}),window.addEventListener("scroll",this.update,{passive:!0,capture:!0}),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener("resize",this.update),window.removeEventListener("scroll",this.update),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(l,n){this.$fastController.isConnected&&this.initialLayoutComplete&&("auto"===l&&this.stopAutoUpdateEventListeners(),"auto"===n&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),"auto"===this.autoUpdateMode&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),"auto"===this.autoUpdateMode&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){null!==this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),null===this.anchorElement&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&!1===this.pendingReset&&(this.setInitialState(),So.dv.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}Xn.intersectionService=new class vC{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(l,n)=>{var o;if(null!==this.intersectionDetector){if(this.observedElements.has(l))return void(null===(o=this.observedElements.get(l))||void 0===o||o.push(n));this.observedElements.set(l,[n]),this.intersectionDetector.observe(l)}},this.cancelRequestPosition=(l,n)=>{const o=this.observedElements.get(l);if(void 0!==o){const f=o.indexOf(n);-1!==f&&o.splice(f,1)}},this.initializeIntersectionDetector=()=>{Jh.am.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=l=>{if(null===this.intersectionDetector)return;const n=[],o=[];l.forEach(f=>{var m;null===(m=this.intersectionDetector)||void 0===m||m.unobserve(f.target);const I=this.observedElements.get(f.target);void 0!==I&&(I.forEach(F=>{let ae=n.indexOf(F);-1===ae&&(ae=n.length,n.push(F),o.push([])),o[ae].push(f)}),this.observedElements.delete(f.target))}),n.forEach((f,m)=>{f(o[m])})},this.initializeIntersectionDetector()}},(0,Dt.Cg)([dn.CF],Xn.prototype,"anchor",void 0),(0,Dt.Cg)([dn.CF],Xn.prototype,"viewport",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"horizontal-positioning-mode"})],Xn.prototype,"horizontalPositioningMode",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"horizontal-default-position"})],Xn.prototype,"horizontalDefaultPosition",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"horizontal-viewport-lock",mode:"boolean"})],Xn.prototype,"horizontalViewportLock",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"horizontal-inset",mode:"boolean"})],Xn.prototype,"horizontalInset",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"horizontal-threshold"})],Xn.prototype,"horizontalThreshold",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"horizontal-scaling"})],Xn.prototype,"horizontalScaling",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"vertical-positioning-mode"})],Xn.prototype,"verticalPositioningMode",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"vertical-default-position"})],Xn.prototype,"verticalDefaultPosition",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"vertical-viewport-lock",mode:"boolean"})],Xn.prototype,"verticalViewportLock",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"vertical-inset",mode:"boolean"})],Xn.prototype,"verticalInset",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"vertical-threshold"})],Xn.prototype,"verticalThreshold",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"vertical-scaling"})],Xn.prototype,"verticalScaling",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"fixed-placement",mode:"boolean"})],Xn.prototype,"fixedPlacement",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"auto-update-mode"})],Xn.prototype,"autoUpdateMode",void 0),(0,Dt.Cg)([on.sH],Xn.prototype,"anchorElement",void 0),(0,Dt.Cg)([on.sH],Xn.prototype,"viewportElement",void 0),(0,Dt.Cg)([on.sH],Xn.prototype,"initialLayoutComplete",void 0);const jv=Fh.compose({baseName:"menu-item",template:(d,l)=>pi.q`
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
            ${(0,$s.z)(n=>"menuitemcheckbox"===n.role,pi.q`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${l.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${(0,$s.z)(n=>"menuitemradio"===n.role,pi.q`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${l.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${(0,Bi.LT)(d,l)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${(0,Bi.aO)(d,l)}
        ${(0,$s.z)(n=>n.hasSubmenu,pi.q`
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
        ${(0,$s.z)(n=>n.expanded,pi.q`
                <${d.tagFor(Xn)}
                    :anchorElement="${n=>n}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${n=>n.currentDirection}"
                    @loaded="${n=>n.submenuLoaded()}"
                    ${(0,Us.K)("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${d.tagFor(Xn)}>
            `)}
    </template>
`,styles:(d,l)=>Di.A`
    ${(0,zo.V)("grid")} :host {
      contain: layout;
      overflow: visible;
      ${Bs.Ah}
      box-sizing: border-box;
      height: calc(${kr.D} * 1px);
      grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      white-space: nowrap;
      color: ${Ct.lHw};
      fill: currentcolor;
      cursor: pointer;
      border-radius: calc(${Ct.PbG} * 1px);
      border: calc(${Ct.XAH} * 1px) solid transparent;
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

    :host(:${Yr.N}) {
      ${Ra.W}
    }

    :host(:not([disabled]):hover) {
      background: ${Ct.oO8};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${Ct.wOW};
      color: ${Ct.lHw};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${tl.Z};
      opacity: ${Ct.qB4};
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
      color: ${Ct.cRz};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors((0,ys.mr)(Di.A`
        :host,
        ::slotted([slot='end']:not(svg)) {
          forced-color-adjust: none;
          color: ${Sn.A.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled]):hover) {
          background: ${Sn.A.Highlight};
          color: ${Sn.A.HighlightText};
          fill: currentcolor;
        }
        :host(:hover) .start,
        :host(:hover) .end,
        :host(:hover)::slotted(svg),
        :host(:active) .start,
        :host(:active) .end,
        :host(:active)::slotted(svg),
        :host(:hover) ::slotted([slot='end']:not(svg)),
        :host(:${Yr.N}) ::slotted([slot='end']:not(svg)) {
          color: ${Sn.A.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${Sn.A.Highlight};
          color: ${Sn.A.HighlightText};
        }
        :host(:${Yr.N}) {
          background: ${Sn.A.Highlight};
          outline-color: ${Sn.A.ButtonText};
          color: ${Sn.A.HighlightText};
          fill: currentcolor;
        }
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg),
        :host([disabled]:${Yr.N}) {
          background: ${Sn.A.ButtonFace};
          color: ${Sn.A.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${Yr.N}) {
          outline-color: ${Sn.A.GrayText};
        }
        :host .expanded-toggle,
        :host .checkbox,
        :host .radio {
          border-color: ${Sn.A.ButtonText};
          background: ${Sn.A.HighlightText};
        }
        :host([checked]) .checkbox,
        :host([checked]) .radio {
          background: ${Sn.A.HighlightText};
          border-color: ${Sn.A.HighlightText};
        }
        :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${Yr.N}) .expanded-toggle,
            :host(:${Yr.N}) .checkbox,
            :host(:${Yr.N}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${Yr.N}) .checkbox,
            :host([checked]:${Yr.N}) .radio {
          border-color: ${Sn.A.HighlightText};
        }
        :host([aria-checked='true']) {
          background: ${Sn.A.Highlight};
          color: ${Sn.A.HighlightText};
        }
        :host([aria-checked='true']) .checkbox-indicator,
        :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),
        :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
          fill: ${Sn.A.Highlight};
        }
        :host([aria-checked='true']) .radio-indicator {
          background: ${Sn.A.Highlight};
        }
      `),new Hs(Di.A`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,Di.A`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),checkboxIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',expandCollapseGlyph:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M5.65 3.15a.5.5 0 000 .7L9.79 8l-4.14 4.15a.5.5 0 00.7.7l4.5-4.5a.5.5 0 000-.7l-4.5-4.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  ',radioIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="8" cy="8" r="2"/>\n    </svg>\n  '});var xc=h(5260);const tf={dotOptionsTitle:"More options"},zv=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{display:flex;flex-direction:column;align-items:flex-end}:host .dot-icon{font-family:FabricMDL2Icons;min-width:40px;min-height:30px;text-align:center;line-height:30px}:host .menu{position:absolute;box-shadow:var(--neutral-fill-rest) 0 0 40px 5px;background:var(--neutral-fill-rest);z-index:1;display:none;white-space:nowrap;transform:var(--dot-options-translatey,translateY(32px))}:host .menu.open{display:block}:host fluent-button::part(control){background:inherit}
`];var Zl=function(d,l,n,o){var I,f=arguments.length,m=f<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,l,n,o);else for(var F=d.length-1;F>=0;F--)(I=d[F])&&(m=(f<3?I(m):f>3?I(l,n,m):I(l,n))||m);return f>3&&m&&Object.defineProperty(l,n,m),m},hu=function(d,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,l)};let nf=(()=>{class d extends xc.S{constructor(){super(...arguments),this._clickHandler=()=>this.open=!1,this.renderContent=()=>{const n=Object.keys(this.options);return Lt.qy`
      <fluent-button
        appearance="stealth"
        aria-label=${this.strings.dotOptionsTitle}
        @click=${this.onDotClick}
        @keydown=${this.onDotKeydown}
        class="dot-icon">${(0,Bn.r)(Bn.A.Dot)}</fluent-button>
      <fluent-menu class=${(0,go.H)({menu:!0,open:this.open})}>
        ${n.map(o=>this.getMenuOption(o,this.options[o]))}
      </fluent-menu>`},this.handleItemClick=(n,o)=>{n.preventDefault(),n.stopPropagation(),o(n),this.open=!1},this.handleItemKeydown=(n,o)=>{this.handleKeydownMenuOption(n),o(n),this.open=!1},this.onDotClick=n=>{n.preventDefault(),n.stopPropagation(),this.open=!this.open},this.onDotKeydown=n=>{"Enter"===n.key&&(n.preventDefault(),n.stopPropagation(),this.open=!this.open)}}static get styles(){return zv}get strings(){return tf}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this._clickHandler)}disconnectedCallback(){window.removeEventListener("click",this._clickHandler),super.disconnectedCallback()}getMenuOption(n,o){return Lt.qy`
      <fluent-menu-item
        @click=${f=>this.handleItemClick(f,o)}
        @keydown=${f=>this.handleItemKeydown(f,o)}>
          ${n}
      </fluent-menu-item>`}handleKeydownMenuOption(n){"Enter"===n.key&&(n.preventDefault(),n.stopPropagation())}}return Zl([(0,Ot.MZ)({type:Boolean}),hu("design:type",Boolean)],d.prototype,"open",void 0),Zl([(0,Ot.MZ)({type:Object}),hu("design:type",Object)],d.prototype,"options",void 0),d})();const fu=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative}:host .header::part(control){font-size:var(--arrow-options-button-font-size, large);font-weight:var(--arrow-options-button-font-weight,600);color:var(--arrow-options-button-font-color,var(--accent-base-color));background:var(--arrow-options-button-background-color,transparent)}:host .header::part(control):hover{background:var(--neutral-fill-stealth-hover)}:host .header::part(control):active,:host .header::part(control):focus{background:var(--neutral-fill-stealth-active)}:host .menu{position:absolute;left:var(--arrow-options-left,0);z-index:1;display:none}:host .menu.open{display:block;width:max-content}
`];var rf=function(d,l,n,o){var I,f=arguments.length,m=f<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,l,n,o);else for(var F=d.length-1;F>=0;F--)(I=d[F])&&(m=(f<3?I(m):f>3?I(l,n,m):I(l,n))||m);return f>3&&m&&Object.defineProperty(l,n,m),m},sf=function(d,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,l)};let Gv=(()=>{class d extends xc.S{static get styles(){return fu}constructor(){super(),this.onHeaderClick=n=>{Object.keys(this.options).length>1&&(n.preventDefault(),n.stopPropagation(),this.open=!this.open)},this.onHeaderKeyDown=n=>{if("Enter"===n.key){n.preventDefault(),n.stopPropagation(),this.open=!this.open;const o=this.renderRoot.querySelector("fluent-menu");o&&(o.classList.remove("closed"),o.classList.add("open"));const f=n.target;if(f){const m=this.renderRoot.querySelector("fluent-menu-item[tabindex='0']");m&&(f.blur(),m.focus())}}},this.renderContent=()=>Lt.qy`
      <fluent-button
        class="header"
        @click=${this.onHeaderClick}
        @keydown=${this.onHeaderKeyDown}
        appearance="lightweight">
          ${this.value}
      </fluent-button>
      <fluent-menu
        class=${(0,go.H)({menu:!0,open:this.open,closed:!this.open})}>
          ${this.getMenuOptions()}
      </fluent-menu>`,this.value="",this.options={},this._clickHandler=()=>this.open=!1,window.addEventListener("onblur",()=>this.open=!1)}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this._clickHandler)}disconnectedCallback(){window.removeEventListener("click",this._clickHandler),super.disconnectedCallback()}getMenuOptions(){return Object.keys(this.options).map(o=>Lt.qy`
          <fluent-menu-item
            @click=${I=>{this.open=!1,this.options[o](I)}}
            @keydown=${I=>{const F=this.renderRoot.querySelector(".header");"Enter"===I.key?(this.open=!1,this.options[o](I),F.focus()):"Tab"===I.key?this.open=!1:"Escape"===I.key&&(this.open=!1,F&&F.focus())}}>
              ${o}
          </fluent-menu-item>`)}}return rf([(0,Ot.MZ)({type:Boolean}),sf("design:type",Boolean)],d.prototype,"open",void 0),rf([(0,Ot.MZ)({type:String}),sf("design:type",String)],d.prototype,"value",void 0),rf([(0,Ot.MZ)({type:Object}),sf("design:type",Object)],d.prototype,"options",void 0),d})();var yr=function(d,l,n,o){var I,f=arguments.length,m=f<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,l,n,o);else for(var F=d.length-1;F>=0;F--)(I=d[F])&&(m=(f<3?I(m):f>3?I(l,n,m):I(l,n))||m);return f>3&&m&&Object.defineProperty(l,n,m),m},br=function(d,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,l)},bs=function(d,l,n,o){return new(n||(n=Promise))(function(m,I){function F(Re){try{Se(o.next(Re))}catch(We){I(We)}}function ae(Re){try{Se(o.throw(Re))}catch(We){I(We)}}function Se(Re){Re.done?m(Re.value):function f(m){return m instanceof n?m:new n(function(I){I(m)})}(Re.value).then(F,ae)}Se((o=o.apply(d,l||[])).next())})};const Yl={"@odata.type":"#microsoft.graph.plannerAssignment",orderHint:" !"};let af=(()=>{class d extends Ps.N{static get styles(){return Ih}get strings(){return ld}get isNewTaskVisible(){return this._isNewTaskVisible}set isNewTaskVisible(n){this._isNewTaskVisible=n,n||(this._newTaskDueDate=null,this._newTaskName="",this._newTaskGroupId="",this._newTaskContainerId="")}static get requiredScopes(){return[...new Set(["group.read.all","group.readwrite.all","tasks.read","tasks.readwrite",...gc.requiredScopes,...Ip.requiredScopes])]}get filteredTasks(){const n=this._tasks.filter(o=>this.isTaskInSelectedGroupFilter(o)).filter(o=>this.isTaskInSelectedFolderFilter(o)).filter(o=>!this._hiddenTasks.includes(o.id));return this.taskFilter?n.filter(o=>this.taskFilter(o._raw)):n}constructor(){super(),this._isDarkMode=!1,this._me=null,this.renderLoading=()=>this._hasDoneInitialLoad?this.renderContent():this.renderLoadingTask(),this.renderContent=()=>{const n=this._inTaskLoad&&!this._hasDoneInitialLoad?this.renderLoadingTask():null;let o;return this.hideHeader||(o=Lt.qy`
        <div class="header">
          ${this.renderPlanOptions()}
        </div>
      `),Lt.qy`
      ${o}
      <div class="tasks">
        ${this._isNewTaskVisible?this.renderNewTask():null} ${n}
        ${(0,Ii.u)(this.filteredTasks,f=>f.id,f=>this.renderTask(f))}
      </div>
    `},this.onResize=()=>{this.mediaQuery!==this.previousMediaQuery&&(this.previousMediaQuery=this.mediaQuery,this.requestUpdate())},this.onThemeChanged=()=>{this._isDarkMode=Rh(this)},this.onAddTaskClick=()=>{var n;const o=this.getPeoplePicker(null),f={};if(o)for(const m of null!==(n=o?.selectedPeople)&&void 0!==n?n:[])f[m.id]=Yl;!this._newTaskBeingAdded&&this._newTaskName&&(this._currentGroup||this._newTaskGroupId)&&this.addTask(this._newTaskName,this._newTaskDueDate,this._currentGroup?this._currentGroup:this._newTaskGroupId,this._currentFolder?this._currentFolder:this._newTaskFolderId,f)},this.onAddTaskKeyDown=n=>{("Enter"===n.key||" "===n.key)&&this.onAddTaskClick()},this.addNewTaskButtonClick=()=>{this.isNewTaskVisible=!this.isNewTaskVisible},this.newTaskVisible=n=>{"Enter"===n.key&&(this.isNewTaskVisible=!1)},this.handleDateChange=n=>{const o=n.target.value;this._newTaskDueDate=o?new Date(o+"T17:00"):null},this.renderPlannerIcon=n=>(0,Bn.r)(Bn.A.Planner,n),this.renderBucketIcon=n=>(0,Bn.r)(Bn.A.Milestone,n),this.handlePeopleClick=(n,o)=>{this.togglePeoplePicker(o),n.stopPropagation()},this.handlePeopleKeydown=(n,o)=>{("Enter"===n.key||" "===n.key)&&(this.togglePeoplePicker(o),n.stopPropagation(),n.preventDefault())},this.handlePeoplePickerKeydown=n=>{"Enter"===n.key&&n.stopPropagation()},this.clearState(),this.previousMediaQuery=this.mediaQuery}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.onResize),window.addEventListener("darkmodechanged",this.onThemeChanged),this.onThemeChanged()}disconnectedCallback(){window.removeEventListener("resize",this.onResize),window.removeEventListener("darkmodechanged",this.onThemeChanged),super.disconnectedCallback()}clearState(){this._newTaskFolderId="",this._newTaskGroupId="",this._newTaskDueDate=null,this._newTaskName="",this._newTaskBeingAdded=!1,this._tasks=[],this._folders=[],this._groups=[],this._hiddenTasks=[],this._hasDoneInitialLoad=!1,this._inTaskLoad=!1}firstUpdated(n){super.firstUpdated(n),this.initialId&&!this._currentGroup&&(this._currentGroup=this.initialId),this.initialBucketId&&!this._currentFolder&&(this._currentFolder=this.initialBucketId)}loadState(){return bs(this,void 0,void 0,function*(){const n=this.getTaskSource();if(!n)return;const o=er.b.globalProvider;if(o&&o.state===Pt.HJ.SignedIn){if(this._inTaskLoad=!0,!this._me){const f=o.graph.forComponent(this);this._me=yield(0,Eo.jp)(f)}this.groupId?yield this._loadTasksForGroup(n):this.targetId?yield this._loadTargetPlannerTasks(n):yield this._loadAllTasks(n),this._inTaskLoad=!1,this._hasDoneInitialLoad=!0}})}_loadTargetPlannerTasks(n){return bs(this,void 0,void 0,function*(){const o=yield n.getTaskGroup(this.targetId);let f=yield n.getTaskFoldersForTaskGroup(o.id);this.targetBucketId&&(f=f.filter(I=>I.id===this.targetBucketId));const m=(yield Promise.all(f.map(I=>n.getTasksForTaskFolder(I.id,I.parentId)))).reduce((I,F)=>[...I,...F],[]);this._tasks=m,this._folders=f,this._groups=[o]})}_loadAllTasks(n){return bs(this,void 0,void 0,function*(){const o=yield n.getTaskGroups(),f=(yield Promise.all(o.map(I=>n.getTaskFoldersForTaskGroup(I.id)))).reduce((I,F)=>[...I,...F],[]),m=(yield Promise.all(f.map(I=>n.getTasksForTaskFolder(I.id,I.parentId)))).reduce((I,F)=>[...I,...F],[]);this._tasks=m,this._folders=f,this._groups=o})}_loadTasksForGroup(n){return bs(this,void 0,void 0,function*(){const o=yield n.getTaskGroupsForGroup(this.groupId),f=(yield Promise.all(o.map(I=>n.getTaskFoldersForTaskGroup(I.id)))).reduce((I,F)=>[...I,...F],[]),m=(yield Promise.all(f.map(I=>n.getTasksForTaskFolder(I.id,I.parentId)))).reduce((I,F)=>[...I,...F],[]);this._tasks=m,this._folders=f,this._groups=o})}addTask(n,o,f,m,I={}){return bs(this,void 0,void 0,function*(){const F=this.getTaskSource();if(!F)return;const ae={assignments:I,dueDate:o,immediateParentId:m,name:n,topParentId:f};this._newTaskBeingAdded=!0,ae._raw=yield F.addTask(ae),this.fireCustomEvent("taskAdded",ae),this._newTaskBeingAdded=!1,this.isNewTaskVisible=!1,yield this._task.run()})}completeTask(n){return bs(this,void 0,void 0,function*(){const o=this.getTaskSource();o&&(yield o.setTaskComplete(n),this.fireCustomEvent("taskChanged",n),yield this._task.run())})}uncompleteTask(n){return bs(this,void 0,void 0,function*(){const o=this.getTaskSource();o&&(yield o.setTaskIncomplete(n),this.fireCustomEvent("taskChanged",n),yield this._task.run())})}removeTask(n){return bs(this,void 0,void 0,function*(){const o=this.getTaskSource();o&&(this._hiddenTasks=[...this._hiddenTasks,n.id],yield o.removeTask(n),this.fireCustomEvent("taskRemoved",n),yield this._task.run(),this._hiddenTasks=this._hiddenTasks.filter(f=>f!==n.id))})}assignPeople(n,o=[]){return bs(this,void 0,void 0,function*(){const f=this.getTaskSource();if(!f)return;let m=[];n&&n.assignments&&(m=Object.keys(n.assignments).sort());const I=o.map(Se=>Se.id);if(I.length===m.length&&I.sort().every((Se,Re)=>Se===m[Re]))return;const ae={};for(const Se of m)ae[Se]=I.includes(Se)?Yl:null;I.forEach(Se=>{m.includes(Se)||(ae[Se]=Yl)}),n&&(yield f.assignPeopleToTask(n,ae),yield this._task.run())})}renderPlanOptions(){var n;const o=er.b.globalProvider;if(!o||o.state!==Pt.HJ.SignedIn)return null;if(this._inTaskLoad&&!this._hasDoneInitialLoad)return Lt.qy`<span class="loading-header"></span>`;const f=this.readOnly||this._isNewTaskVisible?null:Lt.qy`
          <fluent-button
            appearance="accent"
            class="new-task-button"
            @click=${this.addNewTaskButtonClick}>
              <span slot="start">${(0,Bn.r)(Bn.A.Add,"currentColor")}</span>
              ${this.strings.addTaskButtonSubtitle}
          </fluent-button>
        `,m=this._groups.find(jt=>jt.id===this._currentGroup)||{title:this.strings.baseSelfAssigned},I={[this.strings.baseSelfAssigned]:()=>{this._currentGroup=null,this._currentFolder=null}};for(const jt of this._groups)I[jt.title]=()=>{this._currentGroup=jt.id,this._currentFolder=null};const F=or.Q`
        <mgt-arrow-options
          class="arrow-options"
          .options="${I}"
          .value="${m.title}"
        ></mgt-arrow-options>`,ae=this._currentGroup?(0,Bn.r)(Bn.A.ChevronRight):null,Se=this._folders.find(jt=>jt.id===this._currentFolder)||{name:this.strings.bucketsSelfAssigned},Re={[this.strings.bucketsSelfAssigned]:()=>{this._currentFolder=null}};for(const jt of this._folders.filter(Jt=>Jt.parentId===this._currentGroup))Re[jt.name]=()=>{this._currentFolder=jt.id};const We=this.targetBucketId?Lt.qy`
            <span class="plan-title">
              ${(null===(n=this._folders[0])||void 0===n?void 0:n.name)||""}
            </span>`:or.Q`
            <mgt-arrow-options class="arrow-options" .options="${Re}" .value="${Se.name}"></mgt-arrow-options>
          `;return Lt.qy`
        <div class="title">
          ${F} ${ae} ${this._currentGroup?We:null}
        </div>
        ${f}
      `}renderNewTask(){const n="var(--neutral-foreground-hint)",o=Lt.qy`
      <fluent-text-field
        autocomplete="off"
        ?autofocus=${this.isNewTaskVisible}
        placeholder=${this.strings.newTaskPlaceholder}
        .value="${this._newTaskName}"
        class="new-task"
        aria-label=${this.strings.newTaskPlaceholder}
        @input=${Jt=>this._newTaskName=Jt.target.value}>
      </fluent-text-field>`;this._groups.length>0&&!this._newTaskGroupId&&(this._newTaskGroupId=this._groups[0].id);const f=Lt.qy`
      ${(0,Ii.u)(this._groups,Jt=>Jt.id,Jt=>Lt.qy`<fluent-option value="${Jt.id}">${Jt.title}</fluent-option>`)}`,m=this._currentGroup?Lt.qy`
          <span class="new-task-group">
            ${this.renderPlannerIcon(n)}
            <span>${this.getPlanTitle(this._currentGroup)}</span>
          </span>`:Lt.qy`
            <fluent-select>
              <span slot="start">${this.renderPlannerIcon(n)}</span>
              ${this._groups.length>0?f:Lt.qy`<fluent-option selected>No groups found</fluent-option>`}
            </fluent-select>`,I=this._folders.filter(Jt=>this._currentGroup&&Jt.parentId===this._currentGroup||!this._currentGroup&&Jt.parentId===this._newTaskGroupId);I.length>0&&!this._newTaskFolderId&&(this._newTaskFolderId=I[0].id);const F=Lt.qy`
      ${(0,Ii.u)(I,Jt=>Jt.id,Jt=>Lt.qy`<fluent-option value="${Jt.id}">${Jt.name}</fluent-option>`)}`,ae=this._currentFolder?Lt.qy`
          <span class="new-task-bucket">
            ${this.renderBucketIcon(n)}
            <span>${this.getFolderName(this._currentFolder)}</span>
          </span>
        `:Lt.qy`
         <fluent-select>
          <span slot="start">${this.renderBucketIcon(n)}</span>
          ${I.length>0?F:Lt.qy`<fluent-option selected>No folders found</fluent-option>`}
        </fluent-select>`,Re=Lt.qy`
      <fluent-text-field
        autocomplete="off"
        type="date"
        class=${(0,go.H)({dark:this._isDarkMode,"new-task":!0})}
        aria-label="${this.strings.addTaskDate}"
        .value="${this.dateToInputValue(this._newTaskDueDate)}"
        @change=${this.handleDateChange}>
      </fluent-text-field>`,We=this.renderAssignedPeople(null),jt=this._newTaskBeingAdded?Lt.qy`<div class="task-add-button-container"></div>`:Lt.qy`
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
      class=${(0,go.H)({task:!0,"new-task":!0})}>
      <div class="task-details-container">
        <div class="top add-new-task">
          <div class="check-and-title">
            ${o}
            <div class="task-content">
              <div class="task-group">${m}</div>
              <div class="task-bucket">${ae}</div>
              ${We}
              <div class="task-due">${Re}</div>
            </div>
          </div>
          <div class="task-options new-task-action-buttons">${jt}</div>
        </div>
      </div>
    </div>
  `}togglePeoplePicker(n){const o=this.getPeoplePicker(n),f=this.getMgtPeople(n),m=this.getFlyout(n);o&&f&&m&&(m.isOpen?m.close():(o.selectedPeople=f.people,m.open(),setTimeout(()=>o.focus(),100)))}updateAssignedPeople(n){const o=this.getPeoplePicker(n),f=this.getMgtPeople(n);o&&o.selectedPeople!==f.people&&(f.people=o.selectedPeople,this.assignPeople(n,o.selectedPeople))}getPeoplePicker(n){return this.renderRoot.querySelector(`.picker-${n?n.id:"new-task"}`)}getMgtPeople(n){return this.renderRoot.querySelector(`.people-${n?n.id:"new-task"}`)}getFlyout(n){return this.renderRoot.querySelector(`.flyout-${n?n.id:"new-task"}`)}renderTask(n){const{name:o="Task",completed:f=!1,dueDate:m}=n,I=this._currentGroup?null:this.getPlanTitle(n.topParentId),F=this._currentFolder?null:this.getFolderName(n.immediateParentId),ae={task:Object.assign(Object.assign({},n._raw),{groupTitle:I,folderTitle:F})},Se=this.renderTemplate("task",ae,n.id);if(Se)return Se;let Re=this.renderTemplate("task-details",ae,`task-details-${n.id}`);if(!Re){const Jt="var(--neutral-foreground-hint)",an=this._currentGroup?null:Lt.qy`
              <div class="task-group">
                <span class="task-icon">${this.renderPlannerIcon(Jt)}</span>
                <span class="task-icon-text">${this.getPlanTitle(n.topParentId)}</span>
              </div>
            `,wn=this._currentFolder?null:Lt.qy`
            <div class="task-bucket">
              <span class="task-icon">${this.renderBucketIcon(Jt)}</span>
              <span class="task-icon-text">${this.getFolderName(n.immediateParentId)}</span>
            </div>
          `,Zn=m?Lt.qy`
            <div class="task-due">
              <span class="task-icon-text">${this.strings.due}${(0,mr.Gp)(m)}</span>
            </div>
          `:null,bi=this.renderAssignedPeople(n);Re=Lt.qy`${an} ${wn} ${bi} ${Zn}`}const We=this.readOnly||this.hideOptions?null:or.Q`
            <mgt-dot-options
              class="dot-options"
              .options="${{[this.strings.removeTaskSubtitle]:()=>this.removeTask(n)}}"
            ></mgt-dot-options>`,jt=(0,go.H)({task:!0,complete:f,incomplete:!f,"read-only":this.readOnly});return Lt.qy`
      <div
        data-id="task-${n.id}"
        class=${jt}
        @click=${()=>this.handleTaskClick(n)}>
        <div class="task-details-container">
          <div class="top">
            <div class="check-and-title">
              <fluent-checkbox
                @click=${Jt=>this.handleTaskCheckClick(Jt,n)}
                @keydown=${Jt=>this.handleTaskCheckKeyDown(Jt,n)}
                ?checked=${f}>
                  ${o}
              </fluent-checkbox>
            </div>
            <div class="task-options">${We}</div>
          </div>
          <div class="bottom">${Re}</div>
        </div>
      </div>
    `}handleTaskCheckKeyDown(n,o){return bs(this,void 0,void 0,function*(){"Enter"===n.key&&(n.stopPropagation(),n.preventDefault(),yield this.checkTask(o))})}handleTaskCheckClick(n,o){return bs(this,void 0,void 0,function*(){n.stopPropagation(),n.preventDefault(),yield this.checkTask(o)})}checkTask(n){return bs(this,void 0,void 0,function*(){if(!this.readOnly){const o=this.shadowRoot.querySelector(`[data-id='task-${n.id}'`);o&&o.classList.add("updating"),n.completed?yield this.uncompleteTask(n):yield this.completeTask(n),o&&o.classList.remove("updating")}})}renderAssignedPeople(n){var o;let f;const m={"new-task-assignee":null===n,"task-assignee":null!==n,"task-detail":null!==n},I=n?n.id:"new-task";m[`flyout-${I}`]=!0;const F=n?Object.keys(n.assignments).map(We=>We):[];if(!this.newTaskVisible){const We=n?._raw,jt=We?.planId;jt&&(f=null===(o=this._groups.filter(an=>an.id===jt).pop())||void 0===o?void 0:o.containerId)}const Se=or.Q`
      <mgt-people
        class="people people-${I}"
        .userIds=${F}
        person-card="none"
        @click=${We=>this.handlePeopleClick(We,n)}
        @keydown=${We=>this.handlePeopleKeydown(We,n)}
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
      </mgt-people>`,Re=or.Q`
      <mgt-people-picker
        class="people-picker picker-${I}"
        .groupId=${(0,ts.J)(this.isNewTaskVisible?this._newTaskContainerId:f)}
        @keydown=${this.handlePeoplePickerKeydown}>
      ></mgt-people-picker>`;return or.Q`
      <mgt-flyout
        light-dismiss
        class=${(0,go.H)(m)}
        @closed=${()=>this.updateAssignedPeople(n)}
      >
        <div slot="anchor">${Se}</div>
        <div slot="flyout" part="picker" class="picker">${Re}</div>
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
    `}getTaskSource(){const n=er.b.globalProvider;if(!n||n.state!==Pt.HJ.SignedIn)return null;const o=n.graph.forComponent(this);return new kp(o)}getPlanTitle(n){return n?n===this.strings.plansSelfAssigned?this.strings.plansSelfAssigned:(this._groups.find(o=>o.id===n)||{title:this.strings.planNotFound}).title:this.strings.baseSelfAssigned}getFolderName(n){return n?(this._folders.find(o=>o.id===n)||{name:this.strings.bucketNotFound}).name:this.strings.bucketsSelfAssigned}isTaskInSelectedGroupFilter(n){var o;return!this._currentGroup||n.topParentId===this._currentGroup||!this._currentGroup&&this.getTaskSource().isAssignedToMe(n,null===(o=this._me)||void 0===o?void 0:o.id)}isTaskInSelectedFolderFilter(n){return n.immediateParentId===this._currentFolder||!this._currentFolder}dateToInputValue(n){return n?new Date(n.getTime()-6e4*n.getTimezoneOffset()).toISOString().split("T")[0]:null}}return yr([(0,Ot.MZ)({attribute:"read-only",type:Boolean}),br("design:type",Boolean)],d.prototype,"readOnly",void 0),yr([(0,Ot.MZ)({attribute:"target-id",type:String}),br("design:type",String)],d.prototype,"targetId",void 0),yr([(0,Ot.MZ)({attribute:"target-bucket-id",type:String}),br("design:type",String)],d.prototype,"targetBucketId",void 0),yr([(0,Ot.MZ)({attribute:"initial-id",type:String}),br("design:type",String)],d.prototype,"initialId",void 0),yr([(0,Ot.MZ)({attribute:"initial-bucket-id",type:String}),br("design:type",String)],d.prototype,"initialBucketId",void 0),yr([(0,Ot.MZ)({attribute:"hide-header",type:Boolean}),br("design:type",Boolean)],d.prototype,"hideHeader",void 0),yr([(0,Ot.MZ)({attribute:"hide-options",type:Boolean}),br("design:type",Boolean)],d.prototype,"hideOptions",void 0),yr([(0,Ot.MZ)({attribute:"group-id",type:String}),br("design:type",String)],d.prototype,"groupId",void 0),yr([(0,Ot.wk)(),br("design:type",Boolean)],d.prototype,"_isNewTaskVisible",void 0),yr([(0,Ot.wk)(),br("design:type",Boolean)],d.prototype,"_newTaskBeingAdded",void 0),yr([(0,Ot.wk)(),br("design:type",String)],d.prototype,"_newTaskName",void 0),yr([(0,Ot.wk)(),br("design:type",Date)],d.prototype,"_newTaskDueDate",void 0),yr([(0,Ot.wk)(),br("design:type",String)],d.prototype,"_newTaskGroupId",void 0),yr([(0,Ot.wk)(),br("design:type",String)],d.prototype,"_newTaskFolderId",void 0),yr([(0,Ot.wk)(),br("design:type",String)],d.prototype,"_newTaskContainerId",void 0),yr([(0,Ot.wk)(),br("design:type",Array)],d.prototype,"_groups",void 0),yr([(0,Ot.wk)(),br("design:type",Array)],d.prototype,"_folders",void 0),yr([(0,Ot.wk)(),br("design:type",Array)],d.prototype,"_tasks",void 0),yr([(0,Ot.wk)(),br("design:type",Array)],d.prototype,"_hiddenTasks",void 0),yr([(0,Ot.wk)(),br("design:type",Boolean)],d.prototype,"_inTaskLoad",void 0),yr([(0,Ot.wk)(),br("design:type",Boolean)],d.prototype,"_hasDoneInitialLoad",void 0),yr([(0,Ot.wk)(),br("design:type",String)],d.prototype,"_currentGroup",void 0),yr([(0,Ot.wk)(),br("design:type",String)],d.prototype,"_currentFolder",void 0),yr([(0,Ot.wk)(),br("design:type",Object)],d.prototype,"_isDarkMode",void 0),yr([(0,Ot.wk)(),br("design:type",Object)],d.prototype,"_me",void 0),d})();const Wv=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .container{display:flex;flex-direction:column;position:relative}:host .dropdown{display:none;position:absolute;z-index:1000;top:34px}:host .dropdown.visible{display:flex}:host .dropdown .team-photo{width:24px;position:inherit;border-radius:50%;margin:0 6px}:host .dropdown .team-start-slot{width:max-content}:host .dropdown .team-parent-name{width:auto}:host .loading-text,:host .search-error-text{font-style:normal;font-weight:400;font-size:14px;line-height:20px}:host .message-parent{display:flex;flex-direction:row;gap:5px;padding:5px}:host .message-parent .loading-text{margin:auto}:host fluent-card{background:var(--channel-picker-dropdown-background-color,var(--fill-color));padding:2px;--card-height:auto;--width:var(--card-width)}:host fluent-text-field{width:100%}:host fluent-text-field::part(root){background:padding-box linear-gradient(var(--channel-picker-input-background-color,var(--neutral-fill-input-rest)),var(--channel-picker-input-background-color,var(--neutral-fill-input-rest))),border-box var(--channel-picker-input-border-color,var(--neutral-stroke-input-rest))}:host fluent-text-field::part(root):hover{background:padding-box linear-gradient(var(--channel-picker-input-background-color-hover,var(--neutral-fill-input-hover)),var(--channel-picker-input-background-color-hover,var(--neutral-fill-input-hover))),border-box var(--channel-picker-input-hover-border-color,var(--neutral-stroke-input-hover))}:host fluent-text-field::part(root):focus,:host fluent-text-field::part(root):focus-within{background:padding-box linear-gradient(var(--channel-picker-input-background-color-focus,var(--neutral-fill-input-focus)),var(--channel-picker-input-background-color-focus,var(--neutral-fill-input-focus))),border-box var(--channel-picker-input-focus-border-color,var(--neutral-stroke-input-focus))}:host fluent-text-field::part(control){word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host fluent-text-field::part(control)::placeholder{color:var(--channel-picker-input-placeholder-text-color,var(--input-placeholder-rest))}:host fluent-text-field::part(control):hover::placeholder{color:var(--channel-picker-input-placeholder-text-color-hover,var(--input-placeholder-hover))}:host fluent-text-field::part(control):focus-within::placeholder,:host fluent-text-field::part(control):focus::placeholder{color:var(--channel-picker-input-placeholder-text-color-focus,var(--input-placeholder-filled))}:host fluent-text-field .search-icon svg path{fill:var(--channel-picker-search-icon-color,currentColor)}:host fluent-text-field .down-chevron{height:auto;min-width:auto}:host fluent-text-field .down-chevron svg path{fill:var(--channel-picker-down-chevron-color,currentColor)}:host fluent-text-field .up-chevron{height:auto;min-width:auto}:host fluent-text-field .up-chevron svg path{fill:var(--channel-picker-up-chevron-color,currentColor)}:host fluent-text-field .close-icon{height:auto;min-width:auto}:host fluent-text-field .close-icon svg path{fill:var(--channel-picker-close-icon-color,currentColor)}:host fluent-tree-view{min-width:100%;--tree-item-nested-width:2em}:host fluent-tree-item{width:100%;--tree-item-nested-width:2em}:host fluent-tree-item:focus-visible{outline:0}:host fluent-tree-item::part(expand-collapse-button){background:0 0}:host fluent-tree-item::part(content-region),:host fluent-tree-item::part(positioning-region){color:var(--channel-picker-dropdown-item-text-color,currentColor);background:var(--channel-picker-dropdown-background-color,transparent);border:calc(var(--stroke-width) * 2px) solid transparent;height:auto}:host fluent-tree-item::part(content-region):hover,:host fluent-tree-item::part(positioning-region):hover{background:var(--channel-picker-dropdown-item-background-color-hover,var(--neutral-fill-stealth-hover))}:host fluent-tree-item::part(content-region):hover::part(expand-collapse-button),:host fluent-tree-item::part(positioning-region):hover::part(expand-collapse-button){background:var(--channel-picker-dropdown-item-background-color-hover,var(--neutral-fill-stealth-hover))}:host fluent-tree-item fluent-tree-item::part(content-region){height:auto}:host fluent-breadcrumb-item{color:var(--channel-picker-dropdown-item-text-color-selected,var(--neutral-foreground-rest))}:host fluent-breadcrumb-item .team-parent-name{font-weight:700}:host fluent-breadcrumb-item .team-photo{width:19px;position:inherit;border-radius:50%}:host fluent-breadcrumb-item .arrow{margin-left:8px;margin-right:8px}:host fluent-breadcrumb-item .arrow svg{stroke:var(--channel-picker-arrow-fill,var(--neutral-foreground-rest))}[dir=rtl] :host{--direction:rtl}[dir=rtl] .dropdown{text-align:right}[dir=rtl] .arrow{transform:scaleX(-1);filter:fliph;filter:"FlipH";margin-right:0;margin-left:5px}[dir=rtl] .selected-team{padding-left:10px}[dir=rtl] .message-parent .loading-text{right:auto;left:10px;padding-right:8px;text-align:right}@media (forced-colors:active) and (prefers-color-scheme:dark){:host fluent-text-field svg{stroke:rgb(255,255,255)!important}}@media (forced-colors:active) and (prefers-color-scheme:light){:host fluent-text-field svg{stroke:rgb(0,0,0)!important}}
`];var lf=function(d,l,n,o){return new(n||(n=Promise))(function(m,I){function F(Re){try{Se(o.next(Re))}catch(We){I(We)}}function ae(Re){try{Se(o.throw(Re))}catch(We){I(We)}}function Se(Re){Re.done?m(Re.value):function f(m){return m instanceof n?m:new n(function(I){I(m)})}(Re.value).then(F,ae)}Se((o=o.apply(d,l||[])).next())})};const cf=["Team.ReadBasic.All","TeamSettings.Read.All","TeamSettings.ReadWrite.All","User.Read.All","User.ReadWrite.All"],ag=["Channel.ReadBasic.All","ChannelSettings.Read.All","ChannelSettings.ReadWrite.All"],Jl=["Team.ReadBasic.All","TeamSettings.Read.All","TeamSettings.ReadWrite.All"],yC={inputPlaceholderText:"Select a channel",noResultsFound:"We didn't find any matches.",loadingMessage:"Loading...",photoFor:"Teams photo for",teamsChannels:"Teams and channels results",closeButtonAriaLabel:"remove the selected channel",downChevronButtonAriaLabel:"Teams show results button",upChevronButtonAriaLabel:"Teams hide results button"};let vd=(()=>{class d extends ro.g{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var n;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&null!==(n=this.$fastController.definition.shadowOptions)&&void 0!==n&&n.delegatesFocus&&(this.focus=()=>{var o;null===(o=this.control)||void 0===o||o.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}return(0,Dt.Cg)([dn.CF],d.prototype,"download",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"href",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"hreflang",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"ping",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"referrerpolicy",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"rel",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"target",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"type",void 0),(0,Dt.Cg)([on.sH],d.prototype,"defaultSlottedContent",void 0),d})(),df=(()=>{class d{}return(0,Dt.Cg)([(0,dn.CF)({attribute:"aria-expanded"})],d.prototype,"ariaExpanded",void 0),d})();(0,jo.X)(df,zl.z),(0,jo.X)(vd,Bi.qw,df);let yd=(()=>{class d extends vd{constructor(){super(...arguments),this.separator=!0}}return(0,Dt.Cg)([on.sH],d.prototype,"separator",void 0),d})();(0,jo.X)(yd,Bi.qw,df);let dg=(()=>{class d extends ro.g{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(void 0===this.slottedBreadcrumbItems||0===this.slottedBreadcrumbItems.length)return;const n=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(o=>{const f=o===n;this.setItemSeparator(o,f),this.setAriaCurrent(o,f)})}}setItemSeparator(n,o){n instanceof yd&&(n.separator=!o)}findChildWithHref(n){var o,f;return n.childElementCount>0?n.querySelector("a[href]"):null!==(o=n.shadowRoot)&&void 0!==o&&o.childElementCount?null===(f=n.shadowRoot)||void 0===f?void 0:f.querySelector("a[href]"):null}setAriaCurrent(n,o){const f=this.findChildWithHref(n);null===f&&n.hasAttribute("href")&&n instanceof yd?o?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current"):null!==f&&(o?f.setAttribute("aria-current","page"):f.removeAttribute("aria-current"))}}return(0,Dt.Cg)([on.sH],d.prototype,"slottedBreadcrumbItems",void 0),d})();var bd=h(829);const gu=dg.compose({baseName:"breadcrumb",template:(d,l)=>pi.q`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${(0,vs.e)({property:"slottedBreadcrumbItems",filter:(0,bd.Y)()})}
            ></slot>
        </div>
    </template>
`,styles:(d,l)=>Di.A`
  ${(0,zo.V)("inline-block")} :host {
    box-sizing: border-box;
    ${Bs.Ah};
  }

  .list {
    display: flex;
  }
`}),fg=yd.compose({baseName:"breadcrumb-item",template:(d,l)=>pi.q`
    <div role="listitem" class="listitem" part="listitem">
        ${(0,$s.z)(n=>n.href&&n.href.length>0,pi.q`
                ${((d,l)=>pi.q`
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
        ${(0,Us.K)("control")}
    >
        ${(0,Bi.LT)(d,l)}
        <span class="content" part="content">
            <slot ${(0,vs.e)("defaultSlottedContent")}></slot>
        </span>
        ${(0,Bi.aO)(d,l)}
    </a>
`)(d,l)}
            `)}
        ${(0,$s.z)(n=>!n.href,pi.q`
                ${(0,Bi.LT)(d,l)}
                <slot></slot>
                ${(0,Bi.aO)(d,l)}
            `)}
        ${(0,$s.z)(n=>n.separator,pi.q`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${l.separator||""}</slot>
                </span>
            `)}
    </div>
`,styles:(d,l)=>Di.A`
    ${(0,zo.V)("inline-flex")} :host {
      background: transparent;
      color: ${Ct.lHw};
      fill: currentcolor;
      box-sizing: border-box;
      ${Bs.Ah};
      min-width: calc(${kr.D} * 1px);
      border-radius: calc(${Ct.PbG} * 1px);
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
      color: ${Ct.LnO};
    }

    .control:active {
      color: ${Ct.LIX};
    }

    .control:${Yr.N} {
      ${Ra.v}
    }

    :host(:not([href])),
    :host([aria-current]) .control {
      color: ${Ct.lHw};
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
  `.withBehaviors((0,ys.mr)(Di.A`
        :host(:not([href])),
        .start,
        .end,
        .separator {
          background: ${Sn.A.ButtonFace};
          color: ${Sn.A.ButtonText};
          fill: currentcolor;
        }
        .separator {
          fill: ${Sn.A.ButtonText};
        }
        :host([href]) {
          forced-color-adjust: none;
          background: ${Sn.A.ButtonFace};
          color: ${Sn.A.LinkText};
        }
        :host([href]) .control:hover {
          background: ${Sn.A.LinkText};
          color: ${Sn.A.HighlightText};
          fill: currentcolor;
        }
        .control:${Yr.N} {
          outline-color: ${Sn.A.LinkText};
        }
      `)),shadowOptions:{delegatesFocus:!0},separator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  '});function sa(d){return(0,yc.sb)(d)&&"treeitem"===d.getAttribute("role")}let js=(()=>{class d extends ro.g{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>sa(this.parentElement),this.handleExpandCollapseButtonClick=n=>{!this.disabled&&!n.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=n=>{this.setAttribute("tabindex","0")},this.handleBlur=n=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(n,o){this.$fastController.isConnected&&this.items.forEach(f=>{sa(f)&&(f.nested=!0)})}static focusItem(n){n.focusable=!0,n.focus()}childItemLength(){const n=this.childItems.filter(o=>sa(o));return n?n.length:0}}return(0,Dt.Cg)([(0,dn.CF)({mode:"boolean"})],d.prototype,"expanded",void 0),(0,Dt.Cg)([(0,dn.CF)({mode:"boolean"})],d.prototype,"selected",void 0),(0,Dt.Cg)([(0,dn.CF)({mode:"boolean"})],d.prototype,"disabled",void 0),(0,Dt.Cg)([on.sH],d.prototype,"focusable",void 0),(0,Dt.Cg)([on.sH],d.prototype,"childItems",void 0),(0,Dt.Cg)([on.sH],d.prototype,"items",void 0),(0,Dt.Cg)([on.sH],d.prototype,"nested",void 0),(0,Dt.Cg)([on.sH],d.prototype,"renderCollapsedChildren",void 0),d})();(0,jo.X)(js,Bi.qw);const Xv=(()=>{class d extends ro.g{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=n=>{if(!(this.slottedTreeItems.length<1)){if(n.target===this)return null===this.currentFocused&&(this.currentFocused=this.getValidFocusableItem()),void(null!==this.currentFocused&&js.focusItem(this.currentFocused));this.contains(n.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=n.target)}},this.handleBlur=n=>{n.target instanceof HTMLElement&&(null===n.relatedTarget||!this.contains(n.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=n=>{if(n.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const o=this.getVisibleNodes();switch(n.key){case Rn.Tg:return void(o.length&&js.focusItem(o[0]));case Rn.FM:return void(o.length&&js.focusItem(o[o.length-1]));case Rn.kT:if(n.target&&this.isFocusableElement(n.target)){const f=n.target;f instanceof js&&f.childItemLength()>0&&f.expanded?f.expanded=!1:f instanceof js&&f.parentElement instanceof js&&js.focusItem(f.parentElement)}return!1;case Rn.bb:if(n.target&&this.isFocusableElement(n.target)){const f=n.target;f instanceof js&&f.childItemLength()>0&&!f.expanded?f.expanded=!0:f instanceof js&&f.childItemLength()>0&&this.focusNextNode(1,n.target)}return;case Rn.HX:return void(n.target&&this.isFocusableElement(n.target)&&this.focusNextNode(1,n.target));case Rn.I5:return void(n.target&&this.isFocusableElement(n.target)&&this.focusNextNode(-1,n.target));case Rn.Mm:return void this.handleClick(n)}return!0},this.handleSelectedChange=n=>{if(n.defaultPrevented)return;if(!(n.target instanceof Element&&sa(n.target)))return!0;const o=n.target;o.selected?(this.currentSelected&&this.currentSelected!==o&&(this.currentSelected.selected=!1),this.currentSelected=o):!o.selected&&this.currentSelected===o&&(this.currentSelected=null)},this.setItems=()=>{const n=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=n,(null===this.currentFocused||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(f=>{sa(f)&&(f.nested=this.nested)})},this.isFocusableElement=n=>sa(n),this.isSelectedElement=n=>n.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),So.dv.queueUpdate(()=>{this.setItems()})}handleClick(n){if(n.defaultPrevented)return;if(!(n.target instanceof Element&&sa(n.target)))return!0;const o=n.target;o.disabled||(o.selected=!o.selected)}focusNextNode(n,o){const f=this.getVisibleNodes();if(!f)return;const m=f[f.indexOf(o)+n];(0,yc.sb)(m)&&js.focusItem(m)}getValidFocusableItem(){const n=this.getVisibleNodes();let o=n.findIndex(this.isSelectedElement);return-1===o&&(o=n.findIndex(this.isFocusableElement)),-1!==o?n[o]:null}checkForNestedItems(){return this.slottedTreeItems.some(n=>sa(n)&&n.querySelector("[role='treeitem']"))}getVisibleNodes(){return(0,yc.JL)(this,"[role='treeitem']")||[]}}return(0,Dt.Cg)([(0,dn.CF)({attribute:"render-collapsed-nodes"})],d.prototype,"renderCollapsedNodes",void 0),(0,Dt.Cg)([on.sH],d.prototype,"currentSelected",void 0),(0,Dt.Cg)([on.sH],d.prototype,"slottedTreeItems",void 0),d})().compose({baseName:"tree-view",template:(d,l)=>pi.q`
    <template
        role="tree"
        ${(0,Us.K)("treeView")}
        @keydown="${(n,o)=>n.handleKeyDown(o.event)}"
        @focusin="${(n,o)=>n.handleFocus(o.event)}"
        @focusout="${(n,o)=>n.handleBlur(o.event)}"
        @click="${(n,o)=>n.handleClick(o.event)}"
        @selected-change="${(n,o)=>n.handleSelectedChange(o.event)}"
    >
        <slot ${(0,vs.e)("slottedTreeItems")}></slot>
    </template>
`,styles:(d,l)=>Di.A`
  :host([hidden]) {
    display: none;
  }

  ${(0,zo.V)("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`});var ff=h(7179);class ci extends bd.n{constructor(l,n){super(l,n),this.observer=null,n.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return Array.from("subtree"in this.options?this.target.querySelectorAll(this.options.selector):this.target.childNodes)}}var aa=h(1859);const yg=Di.A`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${kr.D} * -1px));
  }
  :host([selected])::after {
    left: calc(${Ct.vdx} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,bg=Di.A`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${kr.D} * -1px));
  }
  :host([selected])::after {
    right: calc(${Ct.vdx} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Cg=Di.L`((${Ct.Sss} / 2) * ${Ct.vR1}) + ((${Ct.vR1} * ${Ct.Brd}) / 2)`,vu=aa.G.create("tree-item-expand-collapse-hover").withDefault(d=>{const l=Ct.EE_.getValueFor(d);return l.evaluate(d,l.evaluate(d).hover).hover}),kc=aa.G.create("tree-item-expand-collapse-selected-hover").withDefault(d=>{const l=Ct.jIq.getValueFor(d);return Ct.EE_.getValueFor(d).evaluate(d,l.evaluate(d).rest).hover}),wd=js.compose({baseName:"tree-item",template:(d,l)=>pi.q`
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
        ${function mg(d){return"string"==typeof d&&(d={property:d}),new ff.xz("fast-children",ci,d)}({property:"childItems",filter:(0,bd.Y)()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${(0,$s.z)(n=>n.childItems&&n.childItemLength()>0,pi.q`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(n,o)=>n.handleExpandCollapseButtonClick(o.event)}"
                            ${(0,Us.K)("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${l.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${(0,Bi.LT)(d,l)}
                <slot></slot>
                ${(0,Bi.aO)(d,l)}
            </div>
        </div>
        ${(0,$s.z)(n=>n.childItems&&n.childItemLength()>0&&(n.expanded||n.renderCollapsedChildren),pi.q`
                <div role="group" class="items" part="items">
                    <slot name="item" ${(0,vs.e)("items")}></slot>
                </div>
            `)}
    </template>
`,styles:(d,l)=>Di.A`
    ${(0,zo.V)("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${Ct.lHw};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${Ct.OCo};
      --expand-collapse-button-size: calc(${kr.D} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${Ct.WlO};
      border: calc(${Ct.XAH} * 1px) solid transparent;
      border-radius: calc(${Ct.PbG} * 1px);
      height: calc((${kr.D} + 1) * 1px);
    }

    :host(:${Yr.N}) .positioning-region {
      ${Ra.W}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${Ct.oO8};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${Ct.wOW};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${kr.D} * 1px);
      margin-inline-start: calc(${Ct.vR1} * 2px + 8px);
      ${Bs.Ah}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${Ct.vR1} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${Ct.PbG} * 1px);
      ${""} width: calc((${Cg} + (${Ct.vR1} * 2)) * 1px);
      height: calc((${Cg} + (${Ct.vR1} * 2)) * 1px);
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
      ${""} margin-inline-end: calc(${Ct.vR1} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${Ct.vR1} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${Ct.qB4};
      cursor: ${tl.Z};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${vu};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${Ct.v8G};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${kc};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${kr.D} / 4) * 1px);
      width: 3px;
      height: calc((${kr.D} / 2) * 1px);
      ${""} background: ${Ct.IRh};
      border-radius: calc(${Ct.PbG} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${kr.D} * -1px);
    }
  `.withBehaviors(new Hs(yg,bg),(0,ys.mr)(Di.A`
        :host {
          color: ${Sn.A.ButtonText};
        }
        .positioning-region {
          border-color: ${Sn.A.ButtonFace};
          background: ${Sn.A.ButtonFace};
        }
        :host(:not([disabled])) .positioning-region:hover,
        :host(:not([disabled])) .positioning-region:active,
        :host(:not([disabled])[selected]) .positioning-region {
          background: ${Sn.A.Highlight};
        }
        :host .positioning-region:hover .content-region,
        :host([selected]) .positioning-region .content-region {
          forced-color-adjust: none;
          color: ${Sn.A.HighlightText};
        }
        :host([disabled][selected]) .positioning-region .content-region {
          color: ${Sn.A.GrayText};
        }
        :host([selected])::after {
          background: ${Sn.A.HighlightText};
        }
        :host(:${Yr.N}) .positioning-region {
          forced-color-adjust: none;
          outline-color: ${Sn.A.ButtonFace};
        }
        :host([disabled]),
        :host([disabled]) .content-region,
        :host([disabled]) .positioning-region:hover .content-region {
          opacity: 1;
          color: ${Sn.A.GrayText};
        }
        :host(.nested) .expand-collapse-button:hover,
        :host(:not([disabled])[selected]) .expand-collapse-button:hover {
          background: ${Sn.A.ButtonFace};
          fill: ${Sn.A.ButtonText};
        }
      `)),expandCollapseGlyph:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  '});var yu=function(d,l,n,o){var I,f=arguments.length,m=f<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,l,n,o);else for(var F=d.length-1;F>=0;F--)(I=d[F])&&(m=(f<3?I(m):f>3?I(l,n,m):I(l,n))||m);return f>3&&m&&Object.defineProperty(l,n,m),m},bu=function(d,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,l)},Cu=function(d,l,n,o){return new(n||(n=Promise))(function(m,I){function F(Re){try{Se(o.next(Re))}catch(We){I(We)}}function ae(Re){try{Se(o.throw(Re))}catch(We){I(We)}}function Se(Re){Re.done?m(Re.value):function f(m){return m instanceof n?m:new n(function(I){I(m)})}(Re.value).then(F,ae)}Se((o=o.apply(d,l||[])).next())})};let gf=(()=>{class d extends Ps.N{static get styles(){return Wv}get strings(){return yC}get selectedItem(){return this._selectedItemState?{channel:this._selectedItemState.item,team:this._selectedItemState.parent.item}:null}static get requiredScopes(){return["team.readbasic.all","channel.readbasic.all"]}set items(n){this._items!==n&&(this._items=n,this._treeViewState=n?this.generateTreeViewState(n):[],this.resetFocusState())}get items(){return this._items}get _inputWrapper(){return this.renderRoot.querySelector("fluent-text-field")}get _input(){const n=this._inputWrapper;return n?.shadowRoot.querySelector("input")}constructor(){super(),this.teamsPhotos={},this._inputValue="",this._treeViewState=[],this._focusList=[],this.renderLoading=()=>this.renderContent(),this.renderContent=()=>{var n;const o={dropdown:!0,visible:this._isDropdownVisible};return this.renderTemplate("default",{teams:null!==(n=this.items)&&void 0!==n?n:[]})||Lt.qy`
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
            class=${(0,go.H)(o)}
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
      `,this.onKeydownTreeView=n=>{"Escape"===n.key&&this.lostFocus()},this.handleTeamTreeItemClick=n=>{n.preventDefault(),n.stopImmediatePropagation();const o=n.target;o&&(o.getAttribute("expanded")?o.removeAttribute("expanded"):o.setAttribute("expanded","true"),o.removeAttribute("selected"),o.getAttribute("id")&&o.setAttribute("selected","true"))},this.handleInputChanged=n=>{const o=n.target;this._inputValue!==o?.value&&(this._inputValue=o?.value,this.gainedFocus(),this.debouncedSearch||(this.debouncedSearch=(0,mr.sg)(()=>{this.filterList()},400)),this.debouncedSearch())},this.loadTeamsIfNotLoaded=()=>{!this.items&&this._task.status!==rd.e1.PENDING&&this._task.run()},this.handleWindowClick=n=>{n.target!==this&&this.lostFocus()},this.gainedFocus=()=>{const n=this._input;n&&n.focus(),this._isDropdownVisible=!0,this.toggleChevron(),this.resetFocusState(),this.requestUpdate()},this.lostFocus=()=>{this._inputValue="",this._input&&(this._input.value=this._inputValue,this._input.textContent="");const n=this._inputWrapper;n&&(n.value=""),this._isDropdownVisible=!1,this.filterList(),this.toggleChevron(),this.requestUpdate(),void 0!==this._selectedItemState&&this.showCloseIcon()},this.handleFocus=()=>{this.lostFocus(),this.gainedFocus()},this.handleUpChevronClick=n=>{n.stopPropagation(),this.lostFocus()},this._inputValue="",this._treeViewState=[],this._focusList=[],this._isDropdownVisible=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this.handleWindowClick),this.addEventListener("focus",this.loadTeamsIfNotLoaded),this.addEventListener("mouseover",this.loadTeamsIfNotLoaded),this.addEventListener("blur",this.lostFocus);const n=this.renderRoot.ownerDocument;n&&n.documentElement.setAttribute("dir",this.direction)}disconnectedCallback(){window.removeEventListener("click",this.handleWindowClick),this.removeEventListener("focus",this.loadTeamsIfNotLoaded),this.removeEventListener("mouseover",this.loadTeamsIfNotLoaded),this.removeEventListener("blur",this.lostFocus),super.disconnectedCallback()}args(){return[]}selectChannelById(n){return Cu(this,void 0,void 0,function*(){const o=er.b.globalProvider;if(o&&o.state===Pt.HJ.SignedIn){this.items||(yield this._task.run());for(const f of this._treeViewState)for(const m of f.channels)if(m.item.id===n)return f.isExpanded=!0,this.selectChannel(m),this.markSelectedChannelInDropdown(n),!0}return!1})}markSelectedChannelInDropdown(n){const o=this.renderRoot.querySelector(`[id='${n}']`);o&&(o.setAttribute("selected","true"),o.parentElement&&o.parentElement.setAttribute("expanded","true"))}renderSelected(){var n,o,f,m,I,F;if(!this._selectedItemState)return this.renderSearchIcon();let ae;if(this._selectedItemState.parent.channels){const We=null===(n=this.teamsPhotos[this._selectedItemState.parent.item.id])||void 0===n?void 0:n.photo;ae=Lt.qy`<img
        class="team-photo"
        alt="${this._selectedItemState.parent.item.displayName}"
        role="img"
        src=${We} />`}const Se=null===(m=null===(f=null===(o=this._selectedItemState)||void 0===o?void 0:o.parent)||void 0===f?void 0:f.item)||void 0===m?void 0:m.displayName.trim(),Re=null===(F=null===(I=this._selectedItemState)||void 0===I?void 0:I.item)||void 0===F?void 0:F.displayName.trim();return Lt.qy`
      <fluent-breadcrumb title=${this._selectedItemState.item.displayName}>
        <fluent-breadcrumb-item>
          <span slot="start">${ae}</span>
          <span class="team-parent-name">${Se}</span>
          <span slot="separator" class="arrow">${(0,Bn.r)(Bn.A.TeamSeparator,"#000000")}</span>
        </fluent-breadcrumb-item>
        <fluent-breadcrumb-item>${Re}</fluent-breadcrumb-item>
      </fluent-breadcrumb>`}clearState(){this._inputValue="",this._treeViewState=[],this._focusList=[],this._isDropdownVisible=!1}renderSearchIcon(){return Lt.qy`
      <div class="search-icon">
        ${(0,Bn.r)(Bn.A.Search,"#252424")}
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
    `}showCloseIcon(){const n=this.renderRoot.querySelector(".down-chevron"),o=this.renderRoot.querySelector(".up-chevron"),f=this.renderRoot.querySelector(".close-icon");n&&(n.style.display="none"),o&&(o.style.display="none"),f&&(f.style.display=null)}renderDownChevron(){return Lt.qy`
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
      </fluent-button>`}renderChevrons(){return Lt.qy`${this.renderUpChevron()}${this.renderDownChevron()}`}renderDropdown(){return this._task.status!==rd.e1.PENDING&&this._treeViewState?this._treeViewState?0===this._treeViewState.length&&this._inputValue.length>0?this.renderError():this.renderDropdownList(this._treeViewState):Lt.qy``:this.renderLoadingIndicator()}renderDropdownList(n){if(n&&n.length>0){let o=null;return Lt.qy`
        <fluent-tree-view
          class="tree-view"
          dir=${this.direction}
          aria-live="polite"
          aria-relevant="all"
          aria-atomic="true"
          aria-label=${this.strings.teamsChannels}
          aria-orientation="horizontal"
          @keydown=${this.onKeydownTreeView}>
          ${(0,Ii.u)(n,f=>f?.item,f=>{var m;return f.channels&&(o=Lt.qy`<img
                  class="team-photo"
                  alt="${this.strings.photoFor} ${f.item.displayName}"
                  src=${null===(m=this.teamsPhotos[f.item.id])||void 0===m?void 0:m.photo} />`),Lt.qy`
                <fluent-tree-item
                  ?expanded=${f?.isExpanded}
                  @click=${this.handleTeamTreeItemClick}>
                    <span slot="start">${o}</span>${f.item.displayName}
                    ${(0,Ii.u)(f?.channels,I=>I.item,I=>this.renderItem(I))}
                </fluent-tree-item>`})}
        </fluent-tree-view>`}return null}renderItem(n){var o;return Lt.qy`
      <fluent-tree-item
        id=${null===(o=n?.item)||void 0===o?void 0:o.id}
        @keydown=${f=>this.onUserKeyDown(f,n)}
        @click=${()=>this.handleItemClick(n)}>
          ${n?.item.displayName}
      </fluent-tree-item>`}loadState(){return Cu(this,void 0,void 0,function*(){const n=er.b.globalProvider;let o;if(n&&n.state===Pt.HJ.SignedIn){const f=n.graph.forComponent(this);o=yield(d=>lf(void 0,void 0,void 0,function*(){const l=cf,n=yield d.api("/me/joinedTeams").select(["displayName","id","isArchived"]).middlewareOptions((0,dr.F)(l)).get();return n?.value}))(f),o=o.filter(I=>!I.isArchived);const m=o.map(I=>I.id);this.teamsPhotos=yield((d,l)=>lf(void 0,void 0,void 0,function*(){let n,o={};if((0,ed.HJ)()){n=mo._.getCache(Vo.j.photos,Vo.j.photos.stores.teams);for(const f of l)try{const m=yield n.getValue(f);m&&(0,ed.aC)()>Date.now()-m.timeCached&&(o[f]=m)}catch{}if(Object.keys(o).length)return o}o={};for(const f of l)try{const m=yield(0,ed.e_)(d,`/teams/${f}`,Jl);(0,ed.HJ)()&&m&&(yield n.putValue(f,m)),o[f]=m}catch{}return o}))(f,m),this._items=yield((d,l)=>lf(void 0,void 0,void 0,function*(){var n,o;const f=d.createBatch();for(const F of l)f.get(F.id,`teams/${F.id}/channels`,ag);const m=yield f.executeAll(),I=[];for(const F of l){const ae=m.get(F.id);null!==(o=null===(n=ae?.content)||void 0===n?void 0:n.value)&&void 0!==o&&o.length&&I.push({item:F,channels:ae.content.value.map(Se=>({item:Se}))})}return I}))(f,o)}this.filterList(),this.resetFocusState()})}clearSelectedItem(){this.removeSelectedChannel()}removeSelectedChannel(n){this.selectChannel(n);const o=this.renderRoot.querySelectorAll("fluent-tree-item");o&&o.forEach(f=>{f.removeAttribute("expanded"),f.removeAttribute("selected")})}handleItemClick(n){n.channels?n.isExpanded=!n.isExpanded:(this.selectChannel(n),this.lostFocus())}onUserKeyDown(n,o){switch(n.code){case"Enter":this.selectChannel(o),this.resetFocusState(),this.lostFocus(),n.preventDefault();break;case"Backspace":0===this._inputValue.length&&this._selectedItemState&&(this.selectChannel(null),this.resetFocusState(),n.preventDefault())}}filterList(){this.items&&(this._treeViewState=this.generateTreeViewState(this.items,this._inputValue),this.resetFocusState())}generateTreeViewState(n,o="",f=null){const m=[];if(o=o.toLowerCase(),n)for(const I of n){let F;if(0===o.length||I.item.displayName.toLowerCase().includes(o))F={item:I.item,parent:f},I.channels&&(F.channels=this.generateTreeViewState(I.channels,"",F),F.isExpanded=o.length>0);else if(I.channels){const ae={item:I.item,parent:f},Se=this.generateTreeViewState(I.channels,o,ae);Se.length>0&&(F=ae,F.channels=Se,F.isExpanded=!0)}F&&m.push(F)}return m}generateFocusList(n){if(!n||0===n.length)return[];let o=[];for(const f of n)o.push(f),f.channels&&f.isExpanded&&(o=[...o,...this.generateFocusList(f.channels)]);return o}resetFocusState(){this._focusList=this.generateFocusList(this._treeViewState),this.requestUpdate()}selectChannel(n){var o,f;n&&this._selectedItemState!==n?null===(o=this._input)||void 0===o||o.setAttribute("disabled","true"):null===(f=this._input)||void 0===f||f.removeAttribute("disabled"),this._selectedItemState=n,this.lostFocus(),this.fireCustomEvent("selectionChanged",this.selectedItem)}hideCloseIcon(){const n=this.renderRoot.querySelector(".close-icon");n&&(n.style.display="none")}toggleChevron(){const n=this.renderRoot.querySelector(".down-chevron"),o=this.renderRoot.querySelector(".up-chevron");this._isDropdownVisible?(n&&(n.style.display="none"),o&&(o.style.display=null)):(n&&(n.style.display=null,this.hideCloseIcon()),o&&(o.style.display="none")),this.hideCloseIcon()}}return yu([(0,Ot.wk)(),bu("design:type",Object)],d.prototype,"_selectedItemState",void 0),yu([(0,Ot.wk)(),bu("design:type",Boolean)],d.prototype,"_isDropdownVisible",void 0),d})();const _g=(()=>{class d extends ro.g{constructor(){super(...arguments),this.orientation="horizontal",this.radioChangeHandler=n=>{const o=n.target;o.checked&&(this.slottedRadioButtons.forEach(f=>{f!==o&&(f.checked=!1,this.isInsideFoundationToolbar||f.setAttribute("tabindex","-1"))}),this.selectedRadio=o,this.value=o.value,o.setAttribute("tabindex","0"),this.focusedRadio=o),n.stopPropagation()},this.moveToRadioByIndex=(n,o)=>{const f=n[o];this.isInsideToolbar||(f.setAttribute("tabindex","0"),f.readOnly?this.slottedRadioButtons.forEach(m=>{m!==f&&m.setAttribute("tabindex","-1")}):(f.checked=!0,this.selectedRadio=f)),this.focusedRadio=f,f.focus()},this.moveRightOffGroup=()=>{var n;null===(n=this.nextElementSibling)||void 0===n||n.focus()},this.moveLeftOffGroup=()=>{var n;null===(n=this.previousElementSibling)||void 0===n||n.focus()},this.focusOutHandler=n=>{const o=this.slottedRadioButtons,f=n.target,m=null!==f?o.indexOf(f):0,I=this.focusedRadio?o.indexOf(this.focusedRadio):-1;return(0===I&&m===I||I===o.length-1&&I===m)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),o.forEach(F=>{F!==this.selectedRadio&&F.setAttribute("tabindex","-1")}))):(this.focusedRadio=o[0],this.focusedRadio.setAttribute("tabindex","0"),o.forEach(F=>{F!==this.focusedRadio&&F.setAttribute("tabindex","-1")}))),!0},this.clickHandler=n=>{const o=n.target;o&&(o.checked||0===this.slottedRadioButtons.indexOf(o)?(o.setAttribute("tabindex","0"),this.selectedRadio=o):(o.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=o),n.preventDefault()},this.shouldMoveOffGroupToTheRight=(n,o,f)=>n===o.length&&this.isInsideToolbar&&f===Rn.bb,this.shouldMoveOffGroupToTheLeft=(n,o)=>(this.focusedRadio?n.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&o===Rn.kT,this.checkFocusedRadio=()=>{null!==this.focusedRadio&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=n=>{const o=this.slottedRadioButtons;let f=0;if(f=this.focusedRadio?o.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(f,o,n.key))this.moveRightOffGroup();else for(f===o.length&&(f=0);f<o.length&&o.length>1;){if(!o[f].disabled){this.moveToRadioByIndex(o,f);break}if(this.focusedRadio&&f===o.indexOf(this.focusedRadio))break;if(f+1>=o.length){if(this.isInsideToolbar)break;f=0}else f+=1}},this.moveLeft=n=>{const o=this.slottedRadioButtons;let f=0;if(f=this.focusedRadio?o.indexOf(this.focusedRadio)-1:0,f=f<0?o.length-1:f,this.shouldMoveOffGroupToTheLeft(o,n.key))this.moveLeftOffGroup();else for(;f>=0&&o.length>1;){if(!o[f].disabled){this.moveToRadioByIndex(o,f);break}if(this.focusedRadio&&f===o.indexOf(this.focusedRadio))break;f-1<0?f=o.length-1:f-=1}},this.keydownHandler=n=>{const o=n.key;if(o in Rn.Is&&this.isInsideFoundationToolbar)return!0;switch(o){case Rn.Mm:this.checkFocusedRadio();break;case Rn.bb:case Rn.HX:this.direction===Cl.O.ltr?this.moveRight(n):this.moveLeft(n);break;case Rn.kT:case Rn.I5:this.direction===Cl.O.ltr?this.moveLeft(n):this.moveRight(n);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach(n=>{n.readOnly=!!this.readOnly})}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach(n=>{n.disabled=!!this.disabled})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(n=>{n.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(n=>{n.value===this.value&&(n.checked=!0,this.selectedRadio=n)}),this.$emit("change")}slottedRadioButtonsChanged(n,o){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var n;return null!==(n=this.parentToolbar)&&void 0!==n&&n}get isInsideFoundationToolbar(){var n;return!(null===(n=this.parentToolbar)||void 0===n||!n.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=au(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(n=>{n.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const n=this.slottedRadioButtons.filter(m=>m.hasAttribute("checked")),o=n?n.length:0;o>1&&(n[o-1].checked=!0);let f=!1;if(this.slottedRadioButtons.forEach(m=>{void 0!==this.name&&m.setAttribute("name",this.name),this.disabled&&(m.disabled=!0),this.readOnly&&(m.readOnly=!0),this.value&&this.value===m.value?(this.selectedRadio=m,this.focusedRadio=m,m.checked=!0,m.setAttribute("tabindex","0"),f=!0):(this.isInsideFoundationToolbar||m.setAttribute("tabindex","-1"),m.checked=!1),m.addEventListener("change",this.radioChangeHandler)}),void 0===this.value&&this.slottedRadioButtons.length>0){const m=this.slottedRadioButtons.filter(F=>F.hasAttribute("checked")),I=null!==m?m.length:0;if(I>0&&!f){const F=m[I-1];F.checked=!0,this.focusedRadio=F,F.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}return(0,Dt.Cg)([(0,dn.CF)({attribute:"readonly",mode:"boolean"})],d.prototype,"readOnly",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"disabled",mode:"boolean"})],d.prototype,"disabled",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"name",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"value",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"orientation",void 0),(0,Dt.Cg)([on.sH],d.prototype,"childItems",void 0),(0,Dt.Cg)([on.sH],d.prototype,"slottedRadioButtons",void 0),d})().compose({baseName:"radio-group",template:(d,l)=>pi.q`
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
                ${(0,vs.e)({property:"slottedRadioButtons",filter:(0,bd.Y)("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(d,l)=>Di.A`
  ${(0,zo.V)("flex")} :host {
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
`});var Oa=function(d,l,n,o){return new(n||(n=Promise))(function(m,I){function F(Re){try{Se(o.next(Re))}catch(We){I(We)}}function ae(Re){try{Se(o.throw(Re))}catch(We){I(We)}}function Se(Re){Re.done?m(Re.value):function f(m){return m instanceof n?m:new n(function(I){I(m)})}(Re.value).then(F,ae)}Se((o=o.apply(d,l||[])).next())})};const Mc=["Tasks.ReadWrite"],wu=["Tasks.Read","Tasks.ReadWrite"],_u=(d,l)=>Oa(void 0,void 0,void 0,function*(){const n=yield d.api(`/me/todo/lists/${l}/tasks`).header("Cache-Control","no-store").middlewareOptions((0,dr.F)(wu)).get();return n?.value}),Eg=(d,l)=>Oa(void 0,void 0,void 0,function*(){return yield d.api(`/me/todo/lists/${l}`).header("Cache-Control","no-store").middlewareOptions((0,dr.F)(wu)).get()}),Eu=(d,l,n,o)=>Oa(void 0,void 0,void 0,function*(){return yield d.api(`/me/todo/lists/${l}/tasks/${n}`).header("Cache-Control","no-store").middlewareOptions((0,dr.F)(Mc)).patch(o)}),a0=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{display:flex;flex-direction:column;color:var(--color,var(--neutral-foreground-rest))}:host input[type=date]::-webkit-calendar-picker-indicator,:host input[type=date]::-webkit-inner-spin-button{display:none;appearance:none}:host .task-icon{font-family:FabricMDL2Icons;user-select:none}:host .task-icon.divider{vertical-align:initial;margin:0 12px;font-size:16px}:host .header{margin:var(--tasks-header-margin,0 0 12px 0);padding:var(--tasks-title-padding,0);display:flex;align-items:center;justify-content:space-between}:host .header .header__loading{max-width:90px;width:100%;height:20px;background:#f2f2f2}:host .header select{font-size:var(--tasks-plan-title-font-size, 1.1em);padding:var(--tasks-plan-title-padding,5px);border:none;appearance:none;cursor:pointer}:host .header select::-ms-expand{display:none}:host .header .plan-title{font-size:var(--tasks-plan-title-font-size, 1.1em);padding:var(--tasks-plan-title-padding,5px)}:host .header .add-bar{display:flex}:host .header .add-bar .add-bar-item{flex:1 1 auto}:host .header .new-task-due{display:flex}:host .header .new-task-due input{flex:1 1 auto;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .header .title-cont{flex:1 1 auto;display:flex;align-items:center;height:var(--tasks-new-button-height,34px)}:host .header .new-task-button{flex:0 0 auto;display:flex;justify-content:center;align-items:center;width:var(--tasks-new-button-width,auto);height:var(--tasks-new-button-height,32px);border-radius:2px;padding:0 20px;background:var(--tasks-new-button-background,#0078d4);border:var(--tasks-new-button-border,solid 1px transparent);color:var(--tasks-new-button-color,#fff);user-select:none;cursor:pointer}:host .header .new-task-button span{font-size:14px;font-weight:600;letter-spacing:.1px;line-height:14px}:host .header .new-task-button .task-icon{margin-right:8px}:host .header .new-task-button.hidden{visibility:hidden}:host .header .new-task-button:hover{background:var(--tasks-new-button-hover-background,#106ebe)}:host .header .new-task-button:active{background:var(--tasks-new-button-active-background,#005a9e)}:host .task{position:relative;margin:var(--task-margin,0 0 0 0);padding:var(--task-padding,0 0 0 0);background-color:var(--task-background-color,var(--neutral-layer-floating));border:var(--task-border,var(--neutral-stroke-input-active));border-radius:8px}:host .task .task-content{display:flex}:host .task .task-content .divider{position:absolute;height:2px;left:0;right:0;bottom:0;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .task .task-content .task-details-container{flex:1;display:grid;grid-template-columns:auto 1fr;-ms-grid-columns:auto 1fr;grid-template-rows:auto auto auto auto;-ms-grid-rows:auto auto auto auto;justify-content:space-between;align-items:flex-start;color:var(--task-detail-color,var(--neutral-foreground-hint));font-size:12px;font-weight:600;white-space:normal;margin-bottom:12px}:host .task .task-content .task-details-container .task-detail{width:100%;height:100%;margin:4px 24px 6px 0;display:flex;justify-content:flex-start;align-items:center}:host .task .task-content .task-details-container .task-title{color:var(--task-color,var(--neutral-foreground-rest));font-size:14px;font-weight:600;grid-row:1;grid-column:1/3;grid-column:1;-ms-grid-column-span:2;margin:22px 0 4px}:host .task .task-content .task-details-container .task-group{min-height:24px;grid-row:2;grid-column:1}:host .task .task-content .task-details-container .task-bucket{min-height:24px;grid-row:2;grid-column:2}:host .task .task-content .task-details-container .task-due{justify-content:flex-end;align-items:flex-start;grid-row:4;grid-column:1/3;grid-column:1;-ms-grid-column-span:2}:host .task .task-content .task-details-container.tablet{grid-template-columns:1fr 0.5fr 1fr 0.5fr;-ms-grid-columns:1fr 0.5fr 1fr 0.5fr;grid-template-rows:auto auto;-ms-grid-rows:auto auto}:host .task .task-content .task-details-container.tablet.no-plan{grid-template-columns:0 1fr 1fr 1fr;-ms-grid-columns:0 1fr 1fr 1fr}:host .task .task-content .task-details-container.tablet .task-detail{margin:4px 24px 6px 0}:host .task .task-content .task-details-container.tablet .task-title{grid-row:1;grid-column:1/5;grid-column:1;-ms-grid-column-span:4}:host .task .task-content .task-details-container.tablet .task-group{grid-row:2;grid-column:1}:host .task .task-content .task-details-container.tablet .task-bucket{grid-row:2;grid-column:2}:host .task .task-content .task-details-container.tablet .task-assignee{grid-row:2;grid-column:3}:host .task .task-content .task-details-container.tablet .task-due{justify-content:flex-start;align-items:center;grid-row:2;grid-column:4}:host .task .task-content .task-details-container.desktop{grid-template-columns:2fr 1fr 0.5fr 1fr 0.5fr;-ms-grid-columns:2fr 1fr 0.5fr 1fr 0.5fr;grid-template-rows:auto;-ms-grid-rows:auto;margin:0}:host .task .task-content .task-details-container.desktop.no-plan{grid-template-columns:2fr 0 1fr 1fr 1fr;-ms-grid-columns:2fr 0 1fr 1fr 1fr}:host .task .task-content .task-details-container.desktop .task-detail{margin:0 24px 0 0}:host .task .task-content .task-details-container.desktop .task-title{padding:0;grid-row:1;grid-column:1}:host .task .task-content .task-details-container.desktop .task-group{min-height:61px;grid-row:1;grid-column:2}:host .task .task-content .task-details-container.desktop .task-bucket{grid-row:1;grid-column:3}:host .task .task-content .task-details-container.desktop .task-assignee{grid-row:1;grid-column:4}:host .task .task-content .task-details-container.desktop .task-due{justify-content:flex-start;align-items:center;grid-row:1;grid-column:5}:host .task .task-content .task-details-container svg{vertical-align:middle;margin-right:4px}:host .task .task-content .task-details-container svg path{fill:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task .task-content .task-details-container select,:host .task .task-content .task-details-container span{vertical-align:middle;color:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task .task-content .task-details-container .task-icon{color:#797775;margin-right:8px}:host .task .task-content .task-details-container .people{color:var(--task-detail-color,var(--neutral-foreground-hint));font-size:16px}:host .task .task-content .task-details-container .person{display:inline-block}:host .task .task-content .task-details-container .picker{background-color:var(--task-background-color,var(--neutral-layer-floating));background-clip:padding-box;width:var(--mgt-flyout-set-width,350px);color:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task .task-content .task-details-container .picker .people-picker{--separator-margin:0px 10px 0px 10px}:host .task .task-content .task-details-container input,:host .task .task-content .task-details-container select{color:var(--task-detail-color,var(--neutral-foreground-hint));font-size:.9em;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .task .task-check-container{font-family:FabricMDL2Icons;border-radius:50%;color:#fff;cursor:pointer;display:flex;align-items:var(--task-icon-alignment,flex-start);margin:21px 10px 20px 20px;user-select:none}:host .task .task-check-container.complete .task-check{background-color:var(--task-icon-background-completed,#00ad56);border:var(--task-icon-border-completed,solid 1px #fff);color:var(--task-icon-color-completed,#fff)}:host .task .task-check-container.complete .task-content .task-details-container .task-title{text-decoration:line-through;color:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task .task-check-container .task-check{font-family:FabricMDL2Icons;font-size:12px;width:18px;height:18px;border-radius:var(--task-icon-border-radius,50%);border:var(--task-icon-border,solid 1px #797775);color:var(--task-color,var(--neutral-foreground-rest));display:flex;justify-content:center;align-items:center;background-color:var(--task-icon-background,transparent);user-select:none}:host .task .task-check-container .task-check.loading .task-check-content{animation:rotate-icon 2s infinite linear}:host .task .task-options{cursor:pointer;user-select:none;margin:16px 8px 0 0}:host .task.read-only .task-check-container{cursor:default}:host .task.complete{background:var(--task-complete-background,var(--neutral-layer-1));border:var(--task-complete-border,2px dotted inherit)}:host .task.complete .task-content .task-details-container .task-title{text-decoration:line-through;color:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task.new-task{margin:var(--task-new-margin,var(--task-margin,0 0 24px 0));display:flex;flex-direction:row}:host .task.new-task .self-assign{display:none}:host .task.new-task .assign-to{border:0;background:0 0}:host .task.new-task .fake-check-box{width:15px;height:15px;cursor:pointer;margin:0 5px}:host .task.new-task .fake-check-box::after{font-family:FabricMDL2Icons;content:"uE739"}:host .task.new-task .fake-check-box~:checked{font-family:FabricMDL2Icons;content:"uE73A"}:host .task.new-task .task-content{flex:1 1 auto;align-content:center;vertical-align:middle;margin:0 0 0 12px}:host .task.new-task .task-content .task-details-container{display:flex;flex-direction:column;align-items:stretch;margin:0}:host .task.new-task .task-content .task-details-container .task-title{display:flex;height:32px;padding:2px}:host .task.new-task .task-content .task-details-container .task-title input{flex:1;margin:var(--task-new-input-margin,0 24px 0 16px);padding:var(--task-new-input-padding,6px);font-size:var(--task-new-input-font-size, 14px);font-weight:600;border:var(--task-new-border,none);border-bottom:1px solid #e1dfdd;outline:0;border-radius:0;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .task.new-task .task-content .task-details-container .task-title input:hover{border-bottom:1px solid #106ebe}:host .task.new-task .task-content .task-details-container .task-title input:active{border-bottom:1px solid #005a9e}:host .task.new-task .task-content .task-details-container .task-title input:focus{border-bottom:1px solid #0078d4}:host .task.new-task .task-content .task-details-container .task-details{display:flex;justify-content:stretch;align-items:center;flex-wrap:wrap;margin:14px 0 14px 4px}:host .task.new-task .task-content .task-details-container .task-details .new-task-group{margin:8px 16px}:host .task.new-task .task-content .task-details-container .task-details .new-task-bucket{margin:8px 16px}:host .task.new-task .task-content .task-details-container .task-details .new-task-due{margin:8px 16px}:host .task.new-task .task-content .task-details-container .task-details .new-task-assignee{margin:8px 16px;min-width:80px}:host .task.new-task .task-content .task-details-container .task-details .task-people label{display:flex;align-content:center;align-items:center}:host .task.new-task .task-content .task-details-container .task-details input,:host .task.new-task .task-content .task-details-container .task-details select{font-size:12px;font-weight:600;border:var(--task-new-select-border,none);border-bottom:1px solid #e1dfdd}:host .task.new-task .task-content .task-details-container .task-details input:hover,:host .task.new-task .task-content .task-details-container .task-details select:hover{border-bottom:1px solid #106ebe}:host .task.new-task .task-content .task-details-container .task-details input:active,:host .task.new-task .task-content .task-details-container .task-details select:active{border-bottom:1px solid #005a9e}:host .task.new-task .task-content .task-details-container .task-details input:focus,:host .task.new-task .task-content .task-details-container .task-details select:focus{border-bottom:1px solid #0078d4}:host .task.new-task .task-add-button-container{margin-right:28px}:host .task.new-task .task-add-button-container .task-add,:host .task.new-task .task-add-button-container .task-cancel{justify-content:center;align-items:center;cursor:pointer;flex:0 0 auto;display:flex;width:var(--tasks-new-button-width,100px);height:var(--tasks-new-button-height,32px);border-radius:4px;border:var(--tasks-new-button-border,solid 1px #e5e5e5);font-size:14px;line-height:20px}:host .task.new-task .task-add-button-container .task-add{color:#fff;background:var(--task-new-add-button-background,#0078d4);margin:22px 0 12px auto}:host .task.new-task .task-add-button-container .task-cancel{color:var(--task-new-cancel-button-color,var(--neutral-foreground-rest))}:host .task.new-task .task-add-button-container.disabled .task-add{color:var(--task-new-cancel-button-color,var(--neutral-foreground-rest));background:var(--task-new-add-button-disabled-background,#fff);cursor:default}@keyframes rotate-icon{from{transform:rotate(0)}to{transform:rotate(360deg)}}[dir=rtl] .arrow-options{--arrow-options-left:auto}[dir=rtl] .dot-options{--dot-options-translatex:translateX(60px)}[dir=rtl] .task-details{margin-right:14px!important}[dir=rtl] .task-icon{margin-left:8px}[dir=rtl] .task-detail svg{margin-left:4px}@media (forced-colors:active) and (prefers-color-scheme:dark){:host svg{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}:host svg path{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}@media (forced-colors:active) and (prefers-color-scheme:light){:host svg{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}:host svg path{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}:host{border-radius:8px;width:100%}:host .task,:host.loading-task{margin-block:1px;box-shadow:var(--task-box-shadow,var(--elevation-shadow-card-active));width:100%;display:flex;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .task.new-task,:host.loading-task.new-task{margin:14px 0 1px;box-shadow:var(--task-box-shadow,var(--elevation-shadow-card-active))}:host .task.complete,:host.loading-task.complete{border:1px solid var(--task-border-completed,var(--neutral-stroke-input-active));background:var(--task-complete-background,var(--neutral-layer-1))}:host .task.complete .task-details .task-due,:host .task.complete .task-details .title,:host.loading-task.complete .task-details .task-due,:host.loading-task.complete .task-details .title{text-decoration:line-through}:host .task.read-only,:host.loading-task.read-only{opacity:1}:host .task:hover,:host.loading-task:hover{background-color:var(--task-background-color-hover,var(--neutral-fill-hover));border-radius:8px}:host .task .task-details,:host.loading-task .task-details{box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:2px;line-height:24px;border-radius:4px;width:100%}:host .task .task-details .task>div,:host.loading-task .task-details .task>div{display:flex;align-items:center;width:200px}:host .task .task-details .task-delete,:host.loading-task .task-details .task-delete{display:flex}:host .task .task-details .container,:host.loading-task .task-details .container{display:flex;width:100%}:host .task .task-details .task-due,:host.loading-task .task-details .task-due{min-width:120px;margin-inline-end:12px;height:32px;text-decoration:inherit;display:flex}:host fluent-text-field::part(end),:host fluent-text-field::part(start){margin-inline:unset}:host fluent-text-field::part(control){padding:0;cursor:pointer}:host fluent-text-field::part(root){background:0 0}:host fluent-text-field.new-task{width:100%;height:34px}:host fluent-text-field.new-task div.start .add-icon{display:flex;margin-inline:10px}:host fluent-text-field.new-task div:nth-child(2){display:flex;align-items:center}:host fluent-text-field.new-task div:nth-child(2) .calendar{display:flex;align-items:center}:host fluent-text-field.new-task div:nth-child(2) .calendar svg{fill:var(--task-color,var(--neutral-foreground-rest))}:host fluent-text-field.new-task div:nth-child(2) .calendar .date{margin-inline-start:10px;color:var(--task-color,var(--neutral-foreground-rest));width:auto;cursor:pointer}:host fluent-text-field.new-task div:nth-child(2) .calendar input{flex:1;border:none;border-bottom:1px solid var(--task-color,var(--neutral-foreground-rest));outline:0;border-radius:0}:host fluent-text-field.new-task div:nth-child(2) .calendar input:hover{border-bottom:1px solid var(--task-date-input-hover-color,var(--neutral-layer-1))}:host fluent-text-field.new-task div:nth-child(2) .calendar input:active,:host fluent-text-field.new-task div:nth-child(2) .calendar input:focus{border-bottom:1px solid var(--task-date-input-active-color,var(--accent-fill-rest))}:host fluent-text-field.title{flex-grow:1;display:inline}:host fluent-text-field.date{color:var(--task-detail-color,var(--neutral-foreground-hint))}:host fluent-text-field::after{border-bottom:none}:host fluent-text-field.dark::part(control){color-scheme:dark}:host fluent-button.task-add-icon.neutral,:host fluent-button.task-cancel-icon.neutral,:host fluent-button.task-delete.neutral{fill:var(--task-color,var(--neutral-foreground-rest))}:host fluent-button.task-add-icon.neutral::part(control),:host fluent-button.task-cancel-icon.neutral::part(control),:host fluent-button.task-delete.neutral::part(control){border:none;background:inherit}:host fluent-button.task-add-icon.neutral::part(control) svg,:host fluent-button.task-cancel-icon.neutral::part(control) svg,:host fluent-button.task-delete.neutral::part(control) svg{fill:var(--task-color,var(--neutral-foreground-rest))}:host fluent-checkbox.complete div>svg .filled{display:block}:host fluent-checkbox.complete div>svg .regular{display:none}:host fluent-checkbox.complete div>svg path{fill:var(--task-radio-background-color,var(--accent-fill-rest))}:host fluent-checkbox div>svg .filled{display:none}:host fluent-checkbox div>svg .regular{display:block}:host fluent-checkbox div>svg path{fill:var(--task-background-color,var(--neutral-layer-floating))}:host fluent-checkbox::part(control){margin-inline-start:10px;background:0 0;border-radius:50%}:host fluent-checkbox::part(label){margin-inline-end:unset;width:100%}
`],l0={cancelNewTaskSubtitle:"Cancel",newTaskPlaceholder:"Add a task",newTaskLabel:"New Task Input",editTaskLabel:"Edit Task Input",addTaskButtonSubtitle:"Add",deleteTaskOption:"Delete",editTaskOption:"Edit",dueDate:"Due date",newTaskDateInputLabel:"New Task Date Input",changeTaskDateInputLabel:"Change Task Date Input",newTaskNameInputLabel:"New Task Name Input",cancelAddingTask:"Cancel adding a new task"},c0={comboboxPlaceholder:"Select an item"};class Tg extends Ls{}class d0 extends((0,dd.rf)(Tg)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let _d=(()=>{class d extends d0{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=(0,tu.NF)("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return"inline"===this.autocomplete||this.isAutocompleteBoth}get isAutocompleteList(){return"list"===this.autocomplete||this.isAutocompleteBoth}get isAutocompleteBoth(){return"both"===this.autocomplete}openChanged(){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),void So.dv.queueUpdate(()=>this.focus());this.ariaControls="",this.ariaExpanded="false"}get options(){return on.cP.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(n){this._options=n,on.cP.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(n,o){this.positionAttribute=o,this.setPositioning()}get value(){return on.cP.track(this,"value"),this._value}set value(n){var o,f,m;const I=`${this._value}`;if(this.$fastController.isConnected&&this.options){const F=this.options.findIndex(Re=>Re.text.toLowerCase()===n.toLowerCase()),ae=null===(o=this.options[this.selectedIndex])||void 0===o?void 0:o.text,Se=null===(f=this.options[F])||void 0===f?void 0:f.text;this.selectedIndex=ae!==Se?F:this.selectedIndex,n=(null===(m=this.firstSelectedOption)||void 0===m?void 0:m.text)||n}I!==n&&(this._value=n,super.valueChanged(I,n),on.cP.notify(this,"value"))}clickHandler(n){if(!this.disabled){if(this.open){const o=n.target.closest("option,[role=option]");if(!o||o.disabled)return;this.selectedOptions=[o],this.control.value=o.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(n,o){super.disabledChanged&&super.disabledChanged(n,o),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||"none"===this.autocomplete)&&(this.filter="");const n=this.filter.toLowerCase();this.filteredOptions=this._options.filter(o=>o.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!n&&(this.filteredOptions=this._options),this._options.forEach(o=>{o.hidden=!this.filteredOptions.includes(o)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var n;null===(n=this.firstSelectedOption)||void 0===n||n.scrollIntoView({block:"nearest"})}))}focusoutHandler(n){if(this.syncValue(),!this.open)return!0;const o=n.relatedTarget;this.isSameNode(o)?this.focus():(!this.options||!this.options.includes(o))&&(this.open=!1)}inputHandler(n){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(o=>o.text).indexOf(this.control.value)),n.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(n){if(n.ctrlKey||n.shiftKey)return!0;switch(n.key){case"Enter":this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break;case"Escape":if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break;case"Tab":if(this.setInputToSelection(),!this.open)return!0;n.preventDefault(),this.open=!1;break;case"ArrowUp":case"ArrowDown":if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(n),this.isAutocompleteInline&&this.setInlineSelection();break;default:return!0}}keyupHandler(n){switch(n.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions()}}selectedIndexChanged(n,o){if(this.$fastController.isConnected){if((o=(0,id.AB)(-1,this.options.length-1,o))!==this.selectedIndex)return void(this.selectedIndex=o);super.selectedIndexChanged(n,o)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const n=this.options.findIndex(o=>null!==o.getAttribute("selected")||o.selected);this.selectedIndex=n,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var n;const o=this.selectedIndex>-1?null===(n=this.firstSelectedOption)||void 0===n?void 0:n.text:this.control.value;this.updateValue(this.value!==o)}setPositioning(){const n=this.getBoundingClientRect(),f=window.innerHeight-n.bottom;this.position=this.forcedPosition?this.positionAttribute:n.top>f?"above":"below",this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight="above"===this.position?~~n.top:~~f}selectedOptionsChanged(n,o){this.$fastController.isConnected&&this._options.forEach(f=>{f.selected=o.includes(f)})}slottedOptionsChanged(n,o){super.slottedOptionsChanged(n,o),this.updateValue()}updateValue(n){var o;this.$fastController.isConnected&&(this.value=(null===(o=this.firstSelectedOption)||void 0===o?void 0:o.text)||this.control.value,this.control.value=this.value),n&&this.$emit("change")}clearSelectionRange(){const n=this.control.value.length;this.control.setSelectionRange(n,n)}}return(0,Dt.Cg)([(0,dn.CF)({attribute:"autocomplete",mode:"fromView"})],d.prototype,"autocomplete",void 0),(0,Dt.Cg)([on.sH],d.prototype,"maxHeight",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"open",mode:"boolean"})],d.prototype,"open",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"placeholder",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"position"})],d.prototype,"positionAttribute",void 0),(0,Dt.Cg)([on.sH],d.prototype,"position",void 0),d})(),Sg=(()=>{class d{}return(0,Dt.Cg)([on.sH],d.prototype,"ariaAutoComplete",void 0),(0,Dt.Cg)([on.sH],d.prototype,"ariaControls",void 0),d})();(0,jo.X)(Sg,Fr),(0,jo.X)(_d,Bi.qw,Sg);const Su=".control",mf=":not([disabled]):not([open])",Au=(()=>{class d extends _d{appearanceChanged(n,o){n!==o&&(this.classList.add(o),this.classList.remove(n))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&Ct.pfK.setValueFor(this.listbox,Ct.Tkp)}}return(0,ru.Cg)([(0,dn.CF)({mode:"fromView"})],d.prototype,"appearance",void 0),d})().compose({baseName:"combobox",baseClass:_d,shadowOptions:{delegatesFocus:!0},template:(d,l)=>pi.q`
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
            ${(0,Bi.LT)(d,l)}
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
                    ${(0,Us.K)("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${l.indicator||""}
                    </slot>
                </div>
            </slot>
            ${(0,Bi.aO)(d,l)}
        </div>
        <div
            class="listbox"
            id="${n=>n.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${n=>n.disabled}"
            ?hidden="${n=>!n.open}"
            ${(0,Us.K)("listbox")}
        >
            <slot
                ${(0,vs.e)({filter:Ls.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(d,l)=>Di.A`
    ${Lp()}

    ${(0,oa.y$)(d,l,Su)}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${tl.Z};
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
      ${Bs.Ah}
      height: calc(100% - ${Ct.XAH} * 1px));
      margin: auto 0;
      width: 100%;
      outline: none;
    }
  `.withBehaviors((0,ql.f)("outline",(0,oa.Tv)(d,l,Su,mf)),(0,ql.f)("filled",(0,oa.dM)(d,l,Su,mf)),(0,ys.mr)((0,oa.lb)(d,l,Su,mf))),indicator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  '}),f0=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{--max-height:var(--picker-max-height, 380px);font-family:var(--default-font-family)}:host .picker{background-color:var(--picker-background-color,transparent)}:host fluent-combobox::part(selected-value)::placeholder{color:var(--picker-text-color,var(--input-filled-placeholder-rest))}:host fluent-combobox::part(selected-value):hover::placeholder{color:var(--picker-text-color-hover,var(--secondary-text-hover-color))}[dir=rtl] .picker{direction:rtl}
`];var zs=function(d,l,n,o){var I,f=arguments.length,m=f<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,l,n,o);else for(var F=d.length-1;F>=0;F--)(I=d[F])&&(m=(f<3?I(m):f>3?I(l,n,m):I(l,n))||m);return f>3&&m&&Object.defineProperty(l,n,m),m},Gs=function(d,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,l)};const Ed=()=>{(0,To.E)(Au,su),Jd(),(0,Oo.N)("picker",vf)};let vf=(()=>{class d extends Ps.N{get strings(){return c0}static get styles(){return f0}constructor(){super(),this.version="v1.0",this.maxPages=3,this.scopes=[],this.cacheEnabled=!1,this.cacheInvalidationPeriod=0,this.renderLoading=()=>this.response?this.renderContent():this.renderTemplate("loading",null),this.renderContent=()=>{var n;const o=this.error?this.error:null;return o&&this.hasTemplate("error")?this.renderTemplate("error",{error:o},"error"):this.hasTemplate("no-data")?this.renderTemplate("no-data",null):(null===(n=this.response)||void 0===n?void 0:n.length)>0?this.renderPicker():this.renderGet()},this.handleComboboxKeydown=n=>{let o,f;const m=n.key,F=n.target.querySelector(".selected");F&&(o=F.getAttribute("value")),"Enter"===m&&o&&(f=this.response.filter(ae=>ae.id===o).pop(),this.fireCustomEvent("selectionChanged",f,!0,!1,!0))},this.placeholder=this.strings.comboboxPlaceholder,this.entityType=null,this.keyName=null}refresh(n=!1){n&&this.clearState(),this._task.run()}clearState(){this.response=null,this.error=null}renderPicker(){return or.Q`
      <fluent-combobox
        @keydown=${this.handleComboboxKeydown}
        current-value=${(0,ts.J)(this.selectedValue)}
        part="picker"
        class="picker"
        id="combobox"
        autocomplete="list"
        placeholder=${this.placeholder}>
          ${this.response.map(n=>Lt.qy`
            <fluent-option value=${n.id} @click=${o=>this.handleClick(o,n)}> ${this.getNestedPropertyValue(n,this.keyName)} </fluent-option>`)}
      </fluent-combobox>
     `}getNestedPropertyValue(n,o){const f=o.split(".");let m=n;for(const I of f)if(m=m[I],void 0===m)return console.warn(`mgt-picker: Key '${I}' is undefined.`),"";return m}renderGet(){return or.Q`
      <mgt-get
        class="mgt-get"
        resource=${this.resource}
        version=${this.version}
        .scopes=${this.scopes}
        max-pages=${this.maxPages}
        ?cache-enabled=${this.cacheEnabled}
        ?cache-invalidation-period=${this.cacheInvalidationPeriod}>
      </mgt-get>`}firstUpdated(n){super.firstUpdated(n);const o=this.renderRoot;o?o.addEventListener("dataChange",f=>this.handleDataChange(f)):console.error("\u{1f992}: mgt-picker component requires a renderRoot. Something has gone horribly wrong.")}handleDataChange(n){const f=n.detail.error?n.detail.error:null;this.response=n.detail.response.value,this.error=f}handleClick(n,o){this.fireCustomEvent("selectionChanged",o,!0,!1,!0)}}return zs([(0,Ot.MZ)({attribute:"resource",type:String}),Gs("design:type",String)],d.prototype,"resource",void 0),zs([(0,Ot.MZ)({attribute:"version",type:String}),Gs("design:type",Object)],d.prototype,"version",void 0),zs([(0,Ot.MZ)({attribute:"max-pages",type:Number}),Gs("design:type",Object)],d.prototype,"maxPages",void 0),zs([(0,Ot.MZ)({attribute:"placeholder",type:String}),Gs("design:type",String)],d.prototype,"placeholder",void 0),zs([(0,Ot.MZ)({attribute:"key-name",type:String}),Gs("design:type",String)],d.prototype,"keyName",void 0),zs([(0,Ot.MZ)({attribute:"entity-type",type:String}),Gs("design:type",String)],d.prototype,"entityType",void 0),zs([(0,Ot.MZ)({attribute:"scopes",converter:l=>l?l.toLowerCase().split(","):null}),Gs("design:type",Array)],d.prototype,"scopes",void 0),zs([(0,Ot.MZ)({attribute:"cache-enabled",type:Boolean}),Gs("design:type",Object)],d.prototype,"cacheEnabled",void 0),zs([(0,Ot.MZ)({attribute:"cache-invalidation-period",type:Number}),Gs("design:type",Object)],d.prototype,"cacheInvalidationPeriod",void 0),zs([(0,Ot.MZ)({attribute:"selected-value",type:String}),Gs("design:type",String)],d.prototype,"selectedValue",void 0),zs([(0,Ot.wk)(),Gs("design:type",Array)],d.prototype,"response",void 0),d})();const _C={cancelNewTaskSubtitle:"Cancel",newTaskPlaceholder:"Add a task",addTaskButtonSubtitle:"Add",removeTaskSubtitle:"Delete Task"};class Ag{constructor(l){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,l)for(const n in l){const o=l[n];"date"===n?this.date=this.getDateObject(o):this[n]=o}}getDateObject(l){if("string"==typeof l){const n=l.split(/[/-]/);return n.length<3?new Date:new Date(parseInt(n[2],10),parseInt(n[0],10)-1,parseInt(n[1],10))}if("day"in l&&"month"in l&&"year"in l){const{day:n,month:o,year:f}=l;return new Date(f,o-1,n)}return l}getDate(l=this.date,n={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},o=this.locale){const f=this.getDateObject(l);if(!f.getTime())return"";const m=Object.assign({timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},n);return new Intl.DateTimeFormat(o,m).format(f)}getDay(l=this.date.getDate(),n=this.dayFormat,o=this.locale){return this.getDate({month:1,day:l,year:2020},{day:n},o)}getMonth(l=this.date.getMonth()+1,n=this.monthFormat,o=this.locale){return this.getDate({month:l,day:2,year:2020},{month:n},o)}getYear(l=this.date.getFullYear(),n=this.yearFormat,o=this.locale){return this.getDate({month:2,day:2,year:l},{year:n},o)}getWeekday(l=0,n=this.weekdayFormat,o=this.locale){return this.getDate(`1-${l+1}-2017`,{weekday:n},o)}getWeekdays(l=this.weekdayFormat,n=this.locale){return Array(7).fill(null).map((o,f)=>this.getWeekday(f,l,n))}}let Ig=(()=>{class d extends ro.g{constructor(){super(...arguments),this.dateFormatter=new Ag,this.readonly=!1,this.locale="en-US",this.month=(new Date).getMonth()+1,this.year=(new Date).getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(n=this.month,o=this.year){const f=Se=>new Date(Se.getFullYear(),Se.getMonth(),1).getDay(),m=Se=>{const Re=new Date(Se.getFullYear(),Se.getMonth()+1,1);return new Date(Re.getTime()-this.oneDayInMs).getDate()},I=new Date(o,n-1),F=new Date(o,n),ae=new Date(o,n-2);return{length:m(I),month:n,start:f(I),year:o,previous:{length:m(ae),month:ae.getMonth()+1,start:f(ae),year:ae.getFullYear()},next:{length:m(F),month:F.getMonth()+1,start:f(F),year:F.getFullYear()}}}getDays(n=this.getMonthInfo(),o=this.minWeeks){o=o>10?10:o;const{start:f,length:m,previous:I,next:F}=n,ae=[];let Se=1-f;for(;Se<m+1||ae.length<o||ae[ae.length-1].length%7!=0;){const{month:Re,year:We}=Se<1?I:Se>m?F:n,jt=Se<1?I.length+Se:Se>m?Se-m:Se,Jt=`${Re}-${jt}-${We}`,Zn={day:jt,month:Re,year:We,disabled:this.dateInString(Jt,this.disabledDates),selected:this.dateInString(Jt,this.selectedDates)},bi=ae[ae.length-1];0===ae.length||bi.length%7==0?ae.push([Zn]):bi.push(Zn),Se++}return ae}dateInString(n,o){const f=o.split(",").map(m=>m.trim());return n="string"==typeof n?n:`${n.getMonth()+1}-${n.getDate()}-${n.getFullYear()}`,f.some(m=>m===n)}getDayClassNames(n,o){const{day:f,month:m,year:I,disabled:F,selected:ae}=n;return["day",o===`${m}-${f}-${I}`&&"today",this.month!==m&&"inactive",F&&"disabled",ae&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const n=this.dateFormatter.getWeekdays().map(o=>({text:o}));if("long"!==this.weekdayFormat){const o=this.dateFormatter.getWeekdays("long");n.forEach((f,m)=>{f.abbr=o[m]})}return n}handleDateSelect(n,o){this.$emit("dateselected",o)}handleKeydown(n,o){return n.key===Rn.Mm&&this.handleDateSelect(n,o),!0}}return(0,Dt.Cg)([(0,dn.CF)({mode:"boolean"})],d.prototype,"readonly",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"locale",void 0),(0,Dt.Cg)([(0,dn.CF)({converter:dn.R$})],d.prototype,"month",void 0),(0,Dt.Cg)([(0,dn.CF)({converter:dn.R$})],d.prototype,"year",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"day-format",mode:"fromView"})],d.prototype,"dayFormat",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"weekday-format",mode:"fromView"})],d.prototype,"weekdayFormat",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"month-format",mode:"fromView"})],d.prototype,"monthFormat",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"year-format",mode:"fromView"})],d.prototype,"yearFormat",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"min-weeks",converter:dn.R$})],d.prototype,"minWeeks",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"disabled-dates"})],d.prototype,"disabledDates",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"selected-dates"})],d.prototype,"selectedDates",void 0),d})();function Ws(d,l,n){return{index:d,removed:l,addedCount:n}}const Td=0,Iu=1,la=2,yf=3;function Dg(d,l,n,o){return l<n||o<d?-1:l===n||o===d?0:d<n?l<o?l-n:o-n:o<l?o-d:l-d}function ec(d,l,n,o,f,m){let I=0,F=0;const ae=Math.min(n-l,m-f);if(0===l&&0===f&&(I=function g0(d,l,n){for(let o=0;o<n;++o)if(d[o]!==l[o])return o;return n}(d,o,ae)),n===d.length&&m===o.length&&(F=function Sd(d,l,n){let o=d.length,f=l.length,m=0;for(;m<n&&d[--o]===l[--f];)m++;return m}(d,o,ae-I)),f+=I,m-=F,(n-=F)-(l+=I)==0&&m-f==0)return Jh.tR;if(l===n){const an=Ws(l,[],0);for(;f<m;)an.removed.push(o[f++]);return[an]}if(f===m)return[Ws(l,[],n-l)];const Se=function bf(d){let l=d.length-1,n=d[0].length-1,o=d[l][n];const f=[];for(;l>0||n>0;){if(0===l){f.push(la),n--;continue}if(0===n){f.push(yf),l--;continue}const m=d[l-1][n-1],I=d[l-1][n],F=d[l][n-1];let ae;ae=I<F?I<m?I:m:F<m?F:m,ae===m?(m===o?f.push(Td):(f.push(Iu),o=m),l--,n--):ae===I?(f.push(yf),l--,o=I):(f.push(la),n--,o=F)}return f.reverse(),f}(function p0(d,l,n,o,f,m){const I=m-f+1,F=n-l+1,ae=new Array(I);let Se,Re;for(let We=0;We<I;++We)ae[We]=new Array(F),ae[We][0]=We;for(let We=0;We<F;++We)ae[0][We]=We;for(let We=1;We<I;++We)for(let jt=1;jt<F;++jt)d[l+jt-1]===o[f+We-1]?ae[We][jt]=ae[We-1][jt-1]:(Se=ae[We-1][jt]+1,Re=ae[We][jt-1]+1,ae[We][jt]=Se<Re?Se:Re);return ae}(d,l,n,o,f,m)),Re=[];let We,jt=l,Jt=f;for(let an=0;an<Se.length;++an)switch(Se[an]){case Td:void 0!==We&&(Re.push(We),We=void 0),jt++,Jt++;break;case Iu:void 0===We&&(We=Ws(jt,[],0)),We.addedCount++,jt++,We.removed.push(o[Jt]),Jt++;break;case la:void 0===We&&(We=Ws(jt,[],0)),We.addedCount++,jt++;break;case yf:void 0===We&&(We=Ws(jt,[],0)),We.removed.push(o[Jt]),Jt++}return void 0!==We&&Re.push(We),Re}const Rc=Array.prototype.push;function Cf(d,l,n,o){const f=Ws(l,n,o);let m=!1,I=0;for(let F=0;F<d.length;F++){const ae=d[F];if(ae.index+=I,m)continue;const Se=Dg(f.index,f.index+f.removed.length,ae.index,ae.index+ae.addedCount);if(Se>=0)if(d.splice(F,1),F--,I-=ae.addedCount-ae.removed.length,f.addedCount+=ae.addedCount-Se,f.addedCount||f.removed.length+ae.removed.length-Se){let We=ae.removed;if(f.index<ae.index){const jt=f.removed.slice(0,ae.index-f.index);Rc.apply(jt,We),We=jt}if(f.index+f.removed.length>ae.index+ae.addedCount){const jt=f.removed.slice(ae.index+ae.addedCount-f.index);Rc.apply(We,jt)}f.removed=We,ae.index<f.index&&(f.index=ae.index)}else m=!0;else if(f.index<ae.index){m=!0,d.splice(F,0,f),F++;const Re=f.addedCount-f.removed.length;ae.index+=Re,I+=Re}}m||d.push(f)}var kg=h(5963);let Mg=!1;function wf(d,l){let n=d.index;const o=l.length;return n>o?n=o-d.addedCount:n<0&&(n=o+d.removed.length+n-d.addedCount),n<0&&(n=0),d.index=n,d}class m0 extends kg.l{constructor(l){super(l),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(l,"$fastController",{value:this,enumerable:!1})}subscribe(l){this.flush(),super.subscribe(l)}addSplice(l){void 0===this.splices?this.splices=[l]:this.splices.push(l),this.needsQueue&&(this.needsQueue=!1,So.dv.queueUpdate(this))}reset(l){this.oldCollection=l,this.needsQueue&&(this.needsQueue=!1,So.dv.queueUpdate(this))}flush(){const l=this.splices,n=this.oldCollection;if(void 0===l&&void 0===n)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const o=void 0===n?function xg(d,l){let n=[];const o=function Ad(d){const l=[];for(let n=0,o=d.length;n<o;n++){const f=d[n];Cf(l,f.index,f.removed,f.addedCount)}return l}(l);for(let f=0,m=o.length;f<m;++f){const I=o[f];1!==I.addedCount||1!==I.removed.length?n=n.concat(ec(d,I.index,I.index+I.addedCount,I.removed,0,I.removed.length)):I.removed[0]!==d[I.index]&&n.push(I)}return n}(this.source,l):ec(this.source,0,this.source.length,n,0,n.length);this.notify(o)}}var Rg=h(1831);const Id=Object.freeze({positioning:!1,recycle:!0});function y0(d,l,n,o){d.bind(l[n],o)}function EC(d,l,n,o){const f=Object.create(o);f.index=n,f.length=l.length,d.bind(l[n],f)}class b0{constructor(l,n,o,f,m,I){this.location=l,this.itemsBinding=n,this.templateBinding=f,this.options=I,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=y0,this.itemsBindingObserver=on.cP.binding(n,this,o),this.templateBindingObserver=on.cP.binding(f,this,m),I.positioning&&(this.bindView=EC)}bind(l,n){this.source=l,this.originalContext=n,this.childContext=Object.create(n),this.childContext.parent=l,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(l,this.originalContext),this.template=this.templateBindingObserver.observe(l,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(l,n){l===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):l===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(n)}observeItems(l=!1){if(!this.items)return void(this.items=Jh.tR);const n=this.itemsObserver,o=this.itemsObserver=on.cP.getNotifier(this.items),f=n!==o;f&&null!==n&&n.unsubscribe(this),(f||l)&&o.subscribe(this)}updateViews(l){const n=this.childContext,o=this.views,f=this.bindView,m=this.items,I=this.template,F=this.options.recycle,ae=[];let Se=0,Re=0;for(let We=0,jt=l.length;We<jt;++We){const Jt=l[We];let wn=0,Zn=Jt.index;const bi=Zn+Jt.addedCount,Hi=o.splice(Jt.index,Jt.removed.length),ur=Re=ae.length+Hi.length;for(;Zn<bi;++Zn){const Vi=o[Zn],ua=Vi?Vi.firstChild:this.location;let Jr;F&&Re>0?(wn<=ur&&Hi.length>0?(Jr=Hi[wn],wn++):(Jr=ae[Se],Se++),Re--):Jr=I.create(),o.splice(Zn,0,Jr),f(Jr,m,Zn,n),Jr.insertBefore(ua)}Hi[wn]&&ae.push(...Hi.slice(wn))}for(let We=Se,jt=ae.length;We<jt;++We)ae[We].dispose();if(this.options.positioning)for(let We=0,jt=o.length;We<jt;++We){const Jt=o[We].context;Jt.length=jt,Jt.index=We}}refreshAllViews(l=!1){const n=this.items,o=this.childContext,f=this.template,m=this.location,I=this.bindView;let F=n.length,ae=this.views,Se=ae.length;if((0===F||l||!this.options.recycle)&&(Rg.N.disposeContiguousBatch(ae),Se=0),0===Se){this.views=ae=new Array(F);for(let Re=0;Re<F;++Re){const We=f.create();I(We,n,Re,o),ae[Re]=We,We.insertBefore(m)}}else{let Re=0;for(;Re<F;++Re)if(Re<Se)I(ae[Re],n,Re,o);else{const jt=f.create();I(jt,n,Re,o),ae.push(jt),jt.insertBefore(m)}const We=ae.splice(Re,Se-Re);for(Re=0,F=We.length;Re<F;++Re)We[Re].dispose()}}unbindAllViews(){const l=this.views;for(let n=0,o=l.length;n<o;++n)l[n].unbind()}}class _f extends ff.dg{constructor(l,n,o){super(),this.itemsBinding=l,this.templateBinding=n,this.options=o,this.createPlaceholder=So.dv.createBlockPlaceholder,function v0(){if(Mg)return;Mg=!0,on.cP.setArrayObserverFactory(ae=>new m0(ae));const d=Array.prototype;if(d.$fastPatch)return;Reflect.defineProperty(d,"$fastPatch",{value:1,enumerable:!1});const l=d.pop,n=d.push,o=d.reverse,f=d.shift,m=d.sort,I=d.splice,F=d.unshift;d.pop=function(){const ae=this.length>0,Se=l.apply(this,arguments),Re=this.$fastController;return void 0!==Re&&ae&&Re.addSplice(Ws(this.length,[Se],0)),Se},d.push=function(){const ae=n.apply(this,arguments),Se=this.$fastController;return void 0!==Se&&Se.addSplice(wf(Ws(this.length-arguments.length,[],arguments.length),this)),ae},d.reverse=function(){let ae;const Se=this.$fastController;void 0!==Se&&(Se.flush(),ae=this.slice());const Re=o.apply(this,arguments);return void 0!==Se&&Se.reset(ae),Re},d.shift=function(){const ae=this.length>0,Se=f.apply(this,arguments),Re=this.$fastController;return void 0!==Re&&ae&&Re.addSplice(Ws(0,[Se],0)),Se},d.sort=function(){let ae;const Se=this.$fastController;void 0!==Se&&(Se.flush(),ae=this.slice());const Re=m.apply(this,arguments);return void 0!==Se&&Se.reset(ae),Re},d.splice=function(){const ae=I.apply(this,arguments),Se=this.$fastController;return void 0!==Se&&Se.addSplice(wf(Ws(+arguments[0],ae,arguments.length>2?arguments.length-2:0),this)),ae},d.unshift=function(){const ae=F.apply(this,arguments),Se=this.$fastController;return void 0!==Se&&Se.addSplice(wf(Ws(0,[],arguments.length),this)),ae}}(),this.isItemsBindingVolatile=on.cP.isVolatileBinding(l),this.isTemplateBindingVolatile=on.cP.isVolatileBinding(n)}createBehavior(l){return new b0(l,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function tc(d,l,n=Id){return new _f(d,"function"==typeof l?l:()=>l,Object.assign(Object.assign({},Id),n))}const Ef=pi.q`
    <template>
        ${d=>null===d.rowData||null===d.columnDefinition||null===d.columnDefinition.columnDataKey?null:d.rowData[d.columnDefinition.columnDataKey]}
    </template>
`,Og=pi.q`
    <template>
        ${d=>null===d.columnDefinition?null:void 0===d.columnDefinition.title?d.columnDefinition.columnDataKey:d.columnDefinition.title}
    </template>
`;let Pc=(()=>{class d extends ro.g{constructor(){super(...arguments),this.cellType="default",this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(n,o){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var n;super.connectedCallback(),this.addEventListener(wl,this.handleFocusin),this.addEventListener(Sc,this.handleFocusout),this.addEventListener(Ac,this.handleKeydown),this.style.gridColumn=`${void 0===(null===(n=this.columnDefinition)||void 0===n?void 0:n.gridColumn)?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(wl,this.handleFocusin),this.removeEventListener(Sc,this.handleFocusout),this.removeEventListener(Ac,this.handleKeydown),this.disconnectCellView()}handleFocusin(n){if(!this.isActiveCell){if(this.isActiveCell=!0,"columnheader"===this.cellType){if(null!==this.columnDefinition&&!0!==this.columnDefinition.headerCellInternalFocusQueue&&"function"==typeof this.columnDefinition.headerCellFocusTargetCallback){const o=this.columnDefinition.headerCellFocusTargetCallback(this);null!==o&&o.focus()}}else if(null!==this.columnDefinition&&!0!==this.columnDefinition.cellInternalFocusQueue&&"function"==typeof this.columnDefinition.cellFocusTargetCallback){const o=this.columnDefinition.cellFocusTargetCallback(this);null!==o&&o.focus()}this.$emit("cell-focused",this)}}handleFocusout(n){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(n){if(!(n.defaultPrevented||null===this.columnDefinition||"default"===this.cellType&&!0!==this.columnDefinition.cellInternalFocusQueue||"columnheader"===this.cellType&&!0!==this.columnDefinition.headerCellInternalFocusQueue))switch(n.key){case Rn.Mm:case Rn.Ac:if(this.contains(document.activeElement)&&document.activeElement!==this)return;if("columnheader"===this.cellType){if(void 0!==this.columnDefinition.headerCellFocusTargetCallback){const o=this.columnDefinition.headerCellFocusTargetCallback(this);null!==o&&o.focus(),n.preventDefault()}}else if(void 0!==this.columnDefinition.cellFocusTargetCallback){const o=this.columnDefinition.cellFocusTargetCallback(this);null!==o&&o.focus(),n.preventDefault()}break;case Rn.F9:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),n.preventDefault())}}updateCellView(){if(this.disconnectCellView(),null!==this.columnDefinition)switch(this.cellType){case"columnheader":this.customCellView=void 0!==this.columnDefinition.headerCellTemplate?this.columnDefinition.headerCellTemplate.render(this,this):Og.render(this,this);break;case void 0:case"rowheader":case"default":this.customCellView=void 0!==this.columnDefinition.cellTemplate?this.columnDefinition.cellTemplate.render(this,this):Ef.render(this,this)}}disconnectCellView(){null!==this.customCellView&&(this.customCellView.dispose(),this.customCellView=null)}}return(0,Dt.Cg)([(0,dn.CF)({attribute:"cell-type"})],d.prototype,"cellType",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"grid-column"})],d.prototype,"gridColumn",void 0),(0,Dt.Cg)([on.sH],d.prototype,"rowData",void 0),(0,Dt.Cg)([on.sH],d.prototype,"columnDefinition",void 0),d})(),Nc=(()=>{class d extends ro.g{constructor(){super(...arguments),this.rowType="default",this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){null!==this.rowData&&this.isActiveRow&&(this.refocusOnLoad=!0)}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),null===this.cellsRepeatBehavior&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new _f(n=>n.columnDefinitions,n=>n.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Sc,this.handleFocusout),this.addEventListener(Ac,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Sc,this.handleFocusout),this.removeEventListener(Ac,this.handleKeydown)}handleFocusout(n){this.contains(n.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(n){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(n.target),this.$emit("row-focused",this)}handleKeydown(n){if(n.defaultPrevented)return;let o=0;switch(n.key){case Rn.kT:o=Math.max(0,this.focusColumnIndex-1),this.cellElements[o].focus(),n.preventDefault();break;case Rn.bb:o=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[o].focus(),n.preventDefault();break;case Rn.Tg:n.ctrlKey||(this.cellElements[0].focus(),n.preventDefault());break;case Rn.FM:n.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),n.preventDefault())}}updateItemTemplate(){this.activeCellItemTemplate="default"===this.rowType&&void 0!==this.cellItemTemplate?this.cellItemTemplate:"default"===this.rowType&&void 0===this.cellItemTemplate?this.defaultCellItemTemplate:void 0!==this.headerCellItemTemplate?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}return(0,Dt.Cg)([(0,dn.CF)({attribute:"grid-template-columns"})],d.prototype,"gridTemplateColumns",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"row-type"})],d.prototype,"rowType",void 0),(0,Dt.Cg)([on.sH],d.prototype,"rowData",void 0),(0,Dt.Cg)([on.sH],d.prototype,"columnDefinitions",void 0),(0,Dt.Cg)([on.sH],d.prototype,"cellItemTemplate",void 0),(0,Dt.Cg)([on.sH],d.prototype,"headerCellItemTemplate",void 0),(0,Dt.Cg)([on.sH],d.prototype,"rowIndex",void 0),(0,Dt.Cg)([on.sH],d.prototype,"isActiveRow",void 0),(0,Dt.Cg)([on.sH],d.prototype,"activeCellItemTemplate",void 0),(0,Dt.Cg)([on.sH],d.prototype,"defaultCellItemTemplate",void 0),(0,Dt.Cg)([on.sH],d.prototype,"defaultHeaderCellItemTemplate",void 0),(0,Dt.Cg)([on.sH],d.prototype,"cellElements",void 0),d})(),Dd=(()=>{class d extends ro.g{constructor(){super(),this.noTabbing=!1,this.generateHeader="default",this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(n,o,f)=>{if(0===this.rowElements.length)return this.focusRowIndex=0,void(this.focusColumnIndex=0);const m=Math.max(0,Math.min(this.rowElements.length-1,n)),F=this.rowElements[m].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),Se=F[Math.max(0,Math.min(F.length-1,o))];f&&this.scrollHeight!==this.clientHeight&&(m<this.focusRowIndex&&this.scrollTop>0||m>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&Se.scrollIntoView({block:"center",inline:"center"}),Se.focus()},this.onChildListChange=(n,o)=>{n&&n.length&&(n.forEach(f=>{f.addedNodes.forEach(m=>{1===m.nodeType&&"row"===m.getAttribute("role")&&(m.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,So.dv.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let n=this.gridTemplateColumns;void 0===n&&(""===this.generatedGridTemplateColumns&&this.rowElements.length>0&&(this.generatedGridTemplateColumns=new Array(this.rowElements[0].cellElements.length).fill("1fr").join(" ")),n=this.generatedGridTemplateColumns),this.rowElements.forEach((o,f)=>{const m=o;m.rowIndex=f,m.gridTemplateColumns=n,this.columnDefinitionsStale&&(m.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(n){let o="";return n.forEach(f=>{o=`${o}${""===o?"":" "}1fr`}),o}noTabbingChanged(){this.$fastController.isConnected&&this.setAttribute("tabIndex",this.noTabbing||this.contains(document.activeElement)||this===document.activeElement?"-1":"0")}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){null===this.columnDefinitions&&this.rowsData.length>0&&(this.columnDefinitions=d.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){null!==this.columnDefinitions?(this.generatedGridTemplateColumns=d.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())):this.generatedGridTemplateColumns=""}headerCellItemTemplateChanged(){this.$fastController.isConnected&&null!==this.generatedHeader&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),void 0===this.rowItemTemplate&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new _f(n=>n.rowsData,n=>n.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener("focus",this.handleFocus),this.addEventListener(Ac,this.handleKeydown),this.addEventListener(Sc,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),So.dv.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener("focus",this.handleFocus),this.removeEventListener(Ac,this.handleKeydown),this.removeEventListener(Sc,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(n){this.isUpdatingFocus=!0;const o=n.target;this.focusRowIndex=this.rowElements.indexOf(o),this.focusColumnIndex=o.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(n){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(n){(null===n.relatedTarget||!this.contains(n.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(n){if(n.defaultPrevented)return;let o;const f=this.rowElements.length-1,m=this.offsetHeight+this.scrollTop,I=this.rowElements[f];switch(n.key){case Rn.I5:n.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Rn.HX:n.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case Rn.oK:if(n.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(0===this.focusRowIndex)return void this.focusOnCell(0,this.focusColumnIndex,!1);for(o=this.focusRowIndex-1;o>=0;o--){const F=this.rowElements[o];if(F.offsetTop<this.scrollTop){this.scrollTop=F.offsetTop+F.clientHeight-this.clientHeight;break}}this.focusOnCell(o,this.focusColumnIndex,!1);break;case Rn.f_:if(n.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=f||I.offsetTop+I.offsetHeight<=m)return void this.focusOnCell(f,this.focusColumnIndex,!1);for(o=this.focusRowIndex+1;o<=f;o++){const F=this.rowElements[o];if(F.offsetTop+F.offsetHeight>m){let ae=0;"sticky"===this.generateHeader&&null!==this.generatedHeader&&(ae=this.generatedHeader.clientHeight),this.scrollTop=F.offsetTop-ae;break}}this.focusOnCell(o,this.focusColumnIndex,!1);break;case Rn.Tg:n.ctrlKey&&(n.preventDefault(),this.focusOnCell(0,0,!0));break;case Rn.FM:n.ctrlKey&&null!==this.columnDefinitions&&(n.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0))}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||!1===this.pendingFocusUpdate&&(this.pendingFocusUpdate=!0,So.dv.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(null!==this.generatedHeader&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),"none"!==this.generateHeader&&this.rowsData.length>0){const n=document.createElement(this.rowElementTag);return this.generatedHeader=n,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType="sticky"===this.generateHeader?"sticky-header":"header",void((null!==this.firstChild||null!==this.rowsPlaceholder)&&this.insertBefore(n,null!==this.firstChild?this.firstChild:this.rowsPlaceholder))}}}return d.generateColumns=l=>Object.getOwnPropertyNames(l).map((n,o)=>({columnDataKey:n,gridColumn:`${o}`})),(0,Dt.Cg)([(0,dn.CF)({attribute:"no-tabbing",mode:"boolean"})],d.prototype,"noTabbing",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"generate-header"})],d.prototype,"generateHeader",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"grid-template-columns"})],d.prototype,"gridTemplateColumns",void 0),(0,Dt.Cg)([on.sH],d.prototype,"rowsData",void 0),(0,Dt.Cg)([on.sH],d.prototype,"columnDefinitions",void 0),(0,Dt.Cg)([on.sH],d.prototype,"rowItemTemplate",void 0),(0,Dt.Cg)([on.sH],d.prototype,"cellItemTemplate",void 0),(0,Dt.Cg)([on.sH],d.prototype,"headerCellItemTemplate",void 0),(0,Dt.Cg)([on.sH],d.prototype,"focusRowIndex",void 0),(0,Dt.Cg)([on.sH],d.prototype,"focusColumnIndex",void 0),(0,Dt.Cg)([on.sH],d.prototype,"defaultRowItemTemplate",void 0),(0,Dt.Cg)([on.sH],d.prototype,"rowElementTag",void 0),(0,Dt.Cg)([on.sH],d.prototype,"rowElements",void 0),d})();const C0=pi.q`
    <div
        class="title"
        part="title"
        aria-label="${d=>d.dateFormatter.getDate(`${d.month}-2-${d.year}`,{month:"long",year:"numeric"})}"
    >
        <span part="month">
            ${d=>d.dateFormatter.getMonth(d.month)}
        </span>
        <span part="year">${d=>d.dateFormatter.getYear(d.year)}</span>
    </div>
`,Tf=(d,l)=>{const n=d.tagFor(Dd),o=d.tagFor(Nc);return pi.q`
    <${n} class="days interact" part="days" generate-header="none">
        <${o}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${tc(f=>f.getWeekdayText(),(d=>{const l=d.tagFor(Pc);return pi.q`
        <${l}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(n,o)=>o.index+1}"
            abbr="${n=>n.abbr}"
        >
            ${n=>n.text}
        </${l}>
    `})(d),{positioning:!0})}
        </${o}>
        ${tc(f=>f.getDays(),((d,l)=>{const n=d.tagFor(Nc);return pi.q`
        <${n}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${tc(o=>o,((d,l)=>{const n=d.tagFor(Pc);return pi.q`
        <${n}
            class="${(o,f)=>f.parentContext.parent.getDayClassNames(o,l)}"
            part="day"
            tabindex="-1"
            role="gridcell"
            grid-column="${(o,f)=>f.index+1}"
            @click="${(o,f)=>f.parentContext.parent.handleDateSelect(f.event,o)}"
            @keydown="${(o,f)=>f.parentContext.parent.handleKeydown(f.event,o)}"
            aria-label="${(o,f)=>f.parentContext.parent.dateFormatter.getDate(`${o.month}-${o.day}-${o.year}`,{month:"long",day:"numeric"})}"
        >
            <div
                class="date"
                part="${o=>l===`${o.month}-${o.day}-${o.year}`?"today":"date"}"
            >
                ${(o,f)=>f.parentContext.parent.dateFormatter.getDay(o.day)}
            </div>
            <slot name="${o=>o.month}-${o=>o.day}-${o=>o.year}"></slot>
        </${n}>
    `})(d,l),{positioning:!0})}
        </${n}>
    `})(d,l))}
    </${n}>
`},SC=Di.A`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,T0=Di.A`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`,A0=(()=>{class d extends Ig{constructor(){super(...arguments),this.readonly=!0}}return(0,ru.Cg)([(0,dn.CF)({converter:dn.Bs})],d.prototype,"readonly",void 0),d})().compose({baseName:"calendar",template:(d,l)=>{var n;const o=new Date,f=`${o.getMonth()+1}-${o.getDate()}-${o.getFullYear()}`;return pi.q`
        <template>
            ${Bi.pS}
            ${l.title instanceof Function?l.title(d,l):null!==(n=l.title)&&void 0!==n?n:""}
            <slot></slot>
            ${(0,$s.z)(m=>m.readonly,(d=>pi.q`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${tc(l=>l.getWeekdayText(),pi.q`
                        <div class="week-day" part="week-day" abbr="${l=>l.abbr}">
                            ${l=>l.text}
                        </div>
                    `)}
            </div>
            ${tc(l=>l.getDays(),pi.q`
                    <div class="week">
                        ${tc(l=>l,pi.q`
                                <div
                                    class="${(l,n)=>n.parentContext.parent.getDayClassNames(l,d)}"
                                    part="day"
                                    aria-label="${(l,n)=>n.parentContext.parent.dateFormatter.getDate(`${l.month}-${l.day}-${l.year}`,{month:"long",day:"numeric"})}"
                                >
                                    <div
                                        class="date"
                                        part="${l=>d===`${l.month}-${l.day}-${l.year}`?"today":"date"}"
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
    `)(f),Tf(d,f))}
            ${Bi.Sm}
        </template>
    `},styles:(d,l)=>Di.A`
${(0,zo.V)("inline-block")} :host {
  --calendar-cell-size: calc((${Ct.Sss} + 2 + ${Ct.Brd}) * ${Ct.vR1} * 1px);
  --calendar-gap: 2px;
  ${Bs.Ah}
  color: ${Ct.lHw};
}

.title {
  padding: calc(${Ct.vR1} * 2px);
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
  border: calc(${Ct.XAH} * 1px) solid transparent;
  border-radius: calc(${Ct.PbG} * 1px);
}

.interact .day {
  cursor: pointer;
}

.date {
  height: 100%;
}

.inactive .date,
.inactive.disabled::before {
  color: ${Ct.cRz};
}

.disabled::before {
  content: '';
  display: inline-block;
  width: calc(var(--calendar-cell-size) * .8);
  height: calc(${Ct.XAH} * 1px);
  background: currentColor;
  position: absolute;
  margin-top: calc(var(--calendar-cell-size) / 2);
  transform-origin: center;
  z-index: 1;
}

.selected {
  color: ${Ct.IRh};
  border: 1px solid ${Ct.IRh};
  background: ${Ct.pfK};
}

.selected + .selected {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-inline-start-width: 0;
  padding-inline-start: calc(var(--calendar-gap) + (${Ct.XAH} + ${Ct.PbG}) * 1px);
  margin-inline-start: calc((${Ct.PbG} * -1px) - var(--calendar-gap));
}

.today.disabled::before {
  color: ${Ct.l_5};
}

.today .date {
  color: ${Ct.l_5};
  background: ${Ct.IRh};
  border-radius: 50%;
  position: relative;
}
`.withBehaviors((0,ys.mr)(Di.A`
          .day.selected {
              color: ${Sn.A.Highlight};
          }

          .today .date {
              background: ${Sn.A.Highlight};
              color: ${Sn.A.HighlightText};
          }
      `),new Hs(SC,T0)),title:C0});var ku=function(d,l,n,o){var I,f=arguments.length,m=f<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,l,n,o);else for(var F=d.length-1;F>=0;F--)(I=d[F])&&(m=(f<3?I(m):f>3?I(l,n,m):I(l,n))||m);return f>3&&m&&Object.defineProperty(l,n,m),m},xd=function(d,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,l)};let I0=(()=>{class d extends Ps.N{get strings(){return _C}constructor(){super(),this.renderLoading=()=>this.renderLoadingTask(),this.renderContent=()=>{const n=er.b.globalProvider;if(!n||n.state!==Pt.HJ.SignedIn)return Lt.qy``;const o=this.renderPicker(),f=this.renderNewTask(),m=this.renderTasks();return Lt.qy`
      ${o}
      ${f}
      <div class="tasks" dir=${this.direction}>
        ${m}
      </div>
    `},this.handleTaskClick=n=>{this.fireCustomEvent("taskClick",{task:n})},this.onResize=()=>{this.mediaQuery!==this._previousMediaQuery&&(this._previousMediaQuery=this.mediaQuery,this.requestUpdate())},(0,To.E)(Ah.oR,Wl.zi,A0),this.clearState(),this._previousMediaQuery=this.mediaQuery}args(){return[this.providerState,this.targetId,this.initialId]}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.onResize)}disconnectedCallback(){window.removeEventListener("resize",this.onResize),super.disconnectedCallback()}renderLoadingTask(){return Lt.qy`
      <div class="task loading-task">
        <div class="task-details">
          <div class="title"></div>
          <div class="task-due"></div>
          <div class="task-delete"></div>
        </div>
      </div>
    `}clearState(){this.requestUpdate()}dateToInputValue(n){return n?new Date(n.getTime()-6e4*n.getTimezoneOffset()).toISOString().split("T")[0]:null}}return ku([(0,Ot.MZ)({attribute:"read-only",type:Boolean}),xd("design:type",Boolean)],d.prototype,"readOnly",void 0),ku([(0,Ot.MZ)({attribute:"hide-header",type:Boolean}),xd("design:type",Boolean)],d.prototype,"hideHeader",void 0),ku([(0,Ot.MZ)({attribute:"hide-options",type:Boolean}),xd("design:type",Boolean)],d.prototype,"hideOptions",void 0),ku([(0,Ot.MZ)({attribute:"target-id",type:String}),xd("design:type",String)],d.prototype,"targetId",void 0),ku([(0,Ot.MZ)({attribute:"initial-id",type:String}),xd("design:type",String)],d.prototype,"initialId",void 0),d})();var ca=function(d,l,n,o){var I,f=arguments.length,m=f<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,l,n,o);else for(var F=d.length-1;F>=0;F--)(I=d[F])&&(m=(f<3?I(m):f>3?I(l,n,m):I(l,n))||m);return f>3&&m&&Object.defineProperty(l,n,m),m},Cs=function(d,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,l)},rs=function(d,l,n,o){return new(n||(n=Promise))(function(m,I){function F(Re){try{Se(o.next(Re))}catch(We){I(We)}}function ae(Re){try{Se(o.throw(Re))}catch(We){I(We)}}function Se(Re){Re.done?m(Re.value):function f(m){return m instanceof n?m:new n(function(I){I(m)})}(Re.value).then(F,ae)}Se((o=o.apply(d,l||[])).next())})};let Mu=(()=>{class d extends I0{static get styles(){return a0}get strings(){return l0}static get requiredScopes(){return["tasks.read","tasks.readwrite"]}constructor(){super(),this._isChangedDueDate=!1,this._isDarkMode=!1,this.onThemeChanged=()=>{this._isDarkMode=Rh(this)},this.renderNewTask=()=>{const n=this._newTaskName?Lt.qy`
        <fluent-checkbox
          class="task-add-icon"
          @click="${this.addTask}">
        </fluent-checkbox>
      `:Lt.qy`
        <span class="add-icon">${(0,Bn.r)(Bn.A.Add)}</span>
      `,o=Lt.qy`
      <fluent-button
        aria-label=${this.strings.cancelAddingTask}
        class="task-cancel-icon" 
        @click="${this.clearNewTaskData}"
      >
        ${(0,Bn.r)(Bn.A.Cancel)}
      </fluent-button>
    `,m=Lt.qy`
      <fluent-text-field
        autocomplete="off"
        type="date"
        id="new-taskDate-input"
        class="${(0,go.H)({dark:this._isDarkMode,date:!0})}"
        aria-label="${this.strings.newTaskDateInputLabel}"
        .value="${this.dateToInputValue(this._newTaskDueDate)}"
        @change="${this.handleDateChange}"
      >
      </fluent-text-field>
    `,I=this.readOnly?Lt.s6:Lt.qy`
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
                <span class="calendar">${m}</span>
                ${o}
              </div> `:Lt.qy``}
      </fluent-text-field>
    `;return Lt.qy`
      ${this.currentList?Lt.qy`
            <div dir=${this.direction} class="task new-task incomplete">
              ${I}
            </div>
        `:Lt.qy``}  
     `},this.handleSelectionChanged=n=>{this.currentList=n.detail,this.loadTasks(this.currentList)},this.renderTaskDetails=n=>{const o={task:n,list:this.currentList};if(this.hasTemplate("task"))return this.renderTemplate("task",o,n.id);let f=null;const m=Lt.qy`
      <fluent-button class="task-delete"
        @click="${()=>this.removeTask(n.id)}"
        aria-label="${this.strings.deleteTaskOption}">
        ${(0,Bn.r)(Bn.A.Delete)}
      </fluent-button>`;if(this.hasTemplate("task-details"))f=this.renderTemplate("task-details",o,`task-details-${n.id}`);else{const F=Lt.qy`
        <fluent-text-field
          autocomplete="off"
          type="date"
          id="${n.id}-taskDate-input"
          class="${(0,go.H)({dark:this._isDarkMode,date:!0,"task-due":!0})}"
          aria-label="${this.strings.changeTaskDateInputLabel}"
          .value="${n.dueDateTime?this.dateToInputValue(new Date(n.dueDateTime.dateTime)):this._taskBeingUpdated===n?this.dateToInputValue(this._newTaskDueDate):Lt.s6}"
          @change="${this.handleDateUpdate}"
          @focus="${Se=>this.updatingTask(Se,n)}"
          @blur="${this.handleBlur}"
        >
        </fluent-text-field>
      `,ae=Lt.qy`
          <fluent-text-field 
            autocomplete="off"
            appearance="outline"
            class="title"
            id=${n.id}
            .value="${n.title?n.title:this._taskBeingUpdated===n?this._changedTaskName:""}"
            aria-label="${this.strings.editTaskLabel}"
            @keydown="${Se=>this.handleChange(Se,n)}"
            @input="${Se=>this.handleChange(Se,n)}"
            @focus="${Se=>this.updatingTask(Se,n)}"
          >
          </fluent-text-field>
          ${n.dueDateTime||this._taskBeingUpdated===n?Lt.qy`${F}`:Lt.s6}
          ${m}
      `;f=Lt.qy`
      <div class="task-details">
        ${ae}
      </div>
      `}return Lt.qy`${f}`},this.renderTask=n=>{const o="completed"===n.status,f=(0,go.H)({complete:o,"read-only":this.readOnly,task:!0}),m=(0,go.H)({complete:o}),I=Lt.qy`${(0,Bn.r)(Bn.A.CheckMark)}`;return Lt.qy`
      <div class=${f} @blur="${this.handleBlur}">
        <fluent-checkbox 
          id=${n.id} 
          class=${m}
          ?checked=${o}
          @click="${()=>this.handleTaskCheckClick(n)}"
          @keydown="${F=>this.handleTaskCheckKeydown(F,n)}"
        >
          <div slot="checked-indicator">
            ${I}
          </div>
        </fluent-checkbox>
        ${this.renderTaskDetails(n)}
      </div>
    `},this.loadState=()=>rs(this,void 0,void 0,function*(){const n=er.b.globalProvider;if(n&&n.state===Pt.HJ.SignedIn){if(!this._graph){const o=n.graph.forComponent(this);this._graph=o}if(!this.currentList&&!this.initialId){const o=yield(d=>Oa(void 0,void 0,void 0,function*(){const l=yield d.api("/me/todo/lists").header("Cache-Control","no-store").middlewareOptions((0,dr.F)(wu)).get();return l?.value}))(this._graph),f=o?.find(m=>"defaultList"===m.wellknownListName);f&&(yield this.loadTasks(f))}this.targetId?(this.currentList=yield Eg(this._graph,this.targetId),this._tasks=yield _u(this._graph,this.targetId)):this.initialId&&(this.currentList=yield Eg(this._graph,this.initialId),this._tasks=yield _u(this._graph,this.initialId))}}),this.addTask=()=>rs(this,void 0,void 0,function*(){if(!this._isNewTaskBeingAdded&&this._newTaskName){this._isNewTaskBeingAdded=!0;try{yield this.createNewTask()}finally{this.clearNewTaskData(),this._isNewTaskBeingAdded=!1}}}),this.updateTask=n=>rs(this,void 0,void 0,function*(){try{if(!this._changedTaskName&&!this._isChangedDueDate)return;yield this.updateTaskItem(n)}finally{this.clearNewTaskData()}}),this.clearNewTaskData=()=>{this._newTaskDueDate=null,this._newTaskName="",this._changedTaskName="",this._isChangedDueDate=!1,this.focusOnTaskInput()},this.focusOnTaskInput=()=>{const n=this.renderRoot.querySelector("#new-task-name-input"),o=n?.shadowRoot.querySelector("input");o&&o.focus()},this.clearState=()=>{super.clearState(),this.currentList=null,this._tasks=[],this._taskBeingUpdated=null},this.loadTasks=n=>rs(this,void 0,void 0,function*(){this.currentList=n,this._tasks=yield _u(this._graph,n.id)}),this.updateTaskStatus=(n,o)=>rs(this,void 0,void 0,function*(){n.status=o;const f=this.currentList.id;n=yield Eu(this._graph,f,n.id,n);const m=this._tasks.findIndex(I=>I.id===n.id);this._tasks[m]=n,yield this._task.run()}),this.removeTask=n=>rs(this,void 0,void 0,function*(){this._tasks=this._tasks.filter(f=>f.id!==n),this.requestUpdate();const o=this.currentList.id;yield((d,l,n)=>Oa(void 0,void 0,void 0,function*(){yield d.api(`/me/todo/lists/${l}/tasks/${n}`).header("Cache-Control","no-store").middlewareOptions((0,dr.F)(Mc)).delete()}))(this._graph,o,n),this._tasks=this._tasks.filter(f=>f.id!==n)}),this.handleInput=n=>{"new-task-name-input"===n.target.id&&(this._newTaskName=n.target.value)},this.handleChange=(n,o)=>rs(this,void 0,void 0,function*(){var f;n.target.id===o.id&&("Enter"===n.key&&(yield this.updateTask(o),null===(f=n.target)||void 0===f||f.blur()),this._changedTaskName=n.target.value)}),this.handleKeyDown=n=>rs(this,void 0,void 0,function*(){"Enter"===n.key&&"new-task-name-input"===n.target.id&&(yield this.addTask())}),this.updatingTask=(n,o)=>{n.target.id===o.id&&(this._taskBeingUpdated=o),n.target.id===`${o.id}-taskDate-input`&&(this._updatingTaskDate=!0,this._taskBeingUpdated=o)},this.handleBlur=()=>{const n=this._taskBeingUpdated,o=this.renderRoot.querySelectorAll("fluent-text-field");for(const f of o)n&&(f.id===n.id||f.id===`${n.id}-taskDate-input`)&&(this.updateTask(n),f?.blur(),this._taskBeingUpdated=null,this._updatingTaskDate=!1)},this.handleDateChange=n=>{const o=n.target.value;this._newTaskDueDate=o?new Date(o+"T17:00"):null},this.handleDateUpdate=n=>{const o=this._taskBeingUpdated;if(o){const f=n.target.value;this._newTaskDueDate=f?new Date(f+"T17:00"):null,this._isChangedDueDate=o.dueDateTime&&this._newTaskDueDate?new Date(o.dueDateTime.dateTime)!==this._newTaskDueDate:!(!o.dueDateTime&&!this._newTaskDueDate)}},this._graph=null,this._newTaskDueDate=null,this._tasks=[],this.addEventListener("selectionChanged",this.handleSelectionChanged),this.addEventListener("blur",this.handleBlur)}connectedCallback(){super.connectedCallback(),window.addEventListener("darkmodechanged",this.onThemeChanged),this.onThemeChanged()}disconnectedCallback(){window.removeEventListener("darkmodechanged",this.onThemeChanged),super.disconnectedCallback()}renderTasks(){let n=this._tasks;n&&this.taskFilter&&(n=n.filter(I=>this.taskFilter(I)));const o=n.filter(I=>"completed"===I.status),f=(0,Ii.u)(n.filter(I=>"completed"!==I.status),I=>I.id,I=>this.renderTask(I)),m=(0,Ii.u)(o.sort((I,F)=>I.lastModifiedDateTime<F.lastModifiedDateTime?-1:1).filter(I=>"completed"===I.status),I=>I.id,I=>this.renderTask(I));return Lt.qy`
      ${f}
      ${m}
    `}renderPicker(){var n,o;return this.targetId?Lt.qy`<p>${null===(n=this.currentList)||void 0===n?void 0:n.displayName}</p>`:or.Q`
        <mgt-picker
          resource="me/todo/lists"
          scopes="tasks.read, tasks.readwrite"
          key-name="displayName"
          selected-value="${(0,ts.J)(null===(o=this.currentList)||void 0===o?void 0:o.displayName)}"
          placeholder="Select a task list">
        </mgt-picker>`}createNewTask(){return rs(this,void 0,void 0,function*(){const n=this.currentList.id,o={title:this._newTaskName};this._newTaskDueDate&&(o.dueDateTime={dateTime:new Date(this._newTaskDueDate).toLocaleDateString(),timeZone:"UTC"});const f=yield((d,l,n)=>Oa(void 0,void 0,void 0,function*(){return yield d.api(`/me/todo/lists/${l}/tasks`).header("Cache-Control","no-store").middlewareOptions((0,dr.F)(Mc)).post(n)}))(this._graph,n,o);this._tasks.unshift(f)})}updateTaskItem(n){return rs(this,void 0,void 0,function*(){const o=this.currentList.id;let f={};if(this._changedTaskName&&this._changedTaskName!==n.title&&(f={title:this._changedTaskName}),this._updatingTaskDate){if(!this._isChangedDueDate)return;f.dueDateTime=this._newTaskDueDate?{dateTime:new Date(this._newTaskDueDate).toLocaleDateString(),timeZone:"UTC"}:null}if(!Object.keys(f).length)return;const m=yield Eu(this._graph,o,n.id,f),I=this._tasks.findIndex(F=>F.id===m.id);this._tasks[I]=m})}handleTaskCheckClick(n){this.handleTaskClick(n),this.readOnly||this.updateTaskStatus(n,"completed"===n.status?"notStarted":"completed")}handleTaskCheckKeydown(n,o){"Enter"===n.key&&!this.readOnly&&(this.handleTaskClick(o),this.updateTaskStatus(o,"completed"===o.status?"notStarted":"completed"))}}return ca([(0,Ot.wk)(),Cs("design:type",Array)],d.prototype,"_tasks",void 0),ca([(0,Ot.wk)(),Cs("design:type",Object)],d.prototype,"_taskBeingUpdated",void 0),ca([(0,Ot.wk)(),Cs("design:type",Boolean)],d.prototype,"_updatingTaskDate",void 0),ca([(0,Ot.wk)(),Cs("design:type",Object)],d.prototype,"_isChangedDueDate",void 0),ca([(0,Ot.wk)(),Cs("design:type",Date)],d.prototype,"_newTaskDueDate",void 0),ca([(0,Ot.wk)(),Cs("design:type",String)],d.prototype,"_newTaskName",void 0),ca([(0,Ot.wk)(),Cs("design:type",String)],d.prototype,"_changedTaskName",void 0),ca([(0,Ot.wk)(),Cs("design:type",Boolean)],d.prototype,"_isNewTaskBeingAdded",void 0),ca([(0,Ot.wk)(),Cs("design:type",Object)],d.prototype,"_graph",void 0),ca([(0,Ot.wk)(),Cs("design:type",Object)],d.prototype,"currentList",void 0),ca([(0,Ot.wk)(),Cs("design:type",Object)],d.prototype,"_isDarkMode",void 0),d})();var Af=h(9569),kd=h(8072);const Pg={termsetIdRequired:"The termsetId property or termset-id attribute is required",noTermsFound:"No terms found",comboboxPlaceholder:"Select a term",loadingMessage:"Loading..."},D0=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{--max-height:var(--taxonomy-picker-list-max-height, 380px)}:host .picker{background-color:var(--taxonomy-picker-background-color,transparent)}:host fluent-combobox::part(selected-value)::placeholder{color:var(--taxonomy-picker-placeholder-color,var(--input-filled-placeholder-rest))}:host fluent-combobox::part(selected-value):hover::placeholder{color:var(--taxonomy-picker-placeholder-color-hover,var(--secondary-text-hover-color))}[dir=rtl] .picker{direction:rtl}
`];var bo=function(d,l,n,o){var I,f=arguments.length,m=f<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,l,n,o);else for(var F=d.length-1;F>=0;F--)(I=d[F])&&(m=(f<3?I(m):f>3?I(l,n,m):I(l,n))||m);return f>3&&m&&Object.defineProperty(l,n,m),m},Wo=function(d,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,l)};let Ng=(()=>{class d extends Ps.N{get strings(){return Pg}static get styles(){return D0}constructor(){super(),this.version="beta",this.position="below",this.selectedTerm=null,this.cacheEnabled=!1,this.cacheInvalidationPeriod=0,this.renderLoading=()=>this.terms?this.renderContent():this.renderTemplate("loading",null,"loading")||or.Q`
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
        <fluent-option value=${n.id} ?selected=${this.defaultSelectedTermId&&this.defaultSelectedTermId===n.id} @click=${f=>this.handleClick(f,n)}> ${this.renderTemplate("term",{term:n},n.id)||n.labels[0].name} </fluent-option>
        `}renderGet(){if(!this.termsetId)return Lt.qy`<span>${this.strings.termsetIdRequired}</span>`;let n=`/termStore/sets/${this.termsetId}/children`;return this.termId&&(n=`/termStore/sets/${this.termsetId}/terms/${this.termId}/children`),this.siteId&&(n=`/sites/${this.siteId}${n}`),n+="?$select=id,labels,descriptions,properties",or.Q`
      <mgt-get
        class="mgt-get"
        resource=${n}
        version=${this.version}
        scopes="TermStore.Read.All, TermStore.ReadWrite.All"
        ?cache-enabled=${this.cacheEnabled}
        ?cache-invalidation-period=${this.cacheInvalidationPeriod}>
      </mgt-get>`}firstUpdated(n){super.firstUpdated(n),this.renderRoot.addEventListener("dataChange",f=>this.handleDataChange(f))}handleDataChange(n){const o=n.detail.error?n.detail.error:null;if(o)return void(this.error=o);this.locale&&(this.locale=this.locale.toLowerCase());const m=n.detail.response.value.map(I=>{const F=I.labels;if(F&&F.length>0&&this.locale){const ae=F.find(Se=>Se.languageTag.toLowerCase()===this.locale);ae&&(I.labels=[ae,...F.filter(Se=>Se.languageTag.toLowerCase()!==this.locale)])}return I});this.terms=m,0===m.length&&(this.noTerms=!0)}handleClick(n,o){this.selectedTerm=o,this.fireCustomEvent("selectionChanged",o)}}return bo([(0,Ot.MZ)({attribute:"term-set-id",type:String}),Wo("design:type",String)],d.prototype,"termsetId",void 0),bo([(0,Ot.MZ)({attribute:"term-id",type:String}),Wo("design:type",String)],d.prototype,"termId",void 0),bo([(0,Ot.MZ)({attribute:"site-id",type:String}),Wo("design:type",String)],d.prototype,"siteId",void 0),bo([(0,Ot.MZ)({attribute:"locale",type:String}),Wo("design:type",String)],d.prototype,"locale",void 0),bo([(0,Ot.MZ)({attribute:"version",type:String}),Wo("design:type",Object)],d.prototype,"version",void 0),bo([(0,Ot.MZ)({attribute:"placeholder",type:String}),Wo("design:type",String)],d.prototype,"placeholder",void 0),bo([(0,Ot.MZ)({attribute:"position",type:String,converter:l=>"above"===l?"above":"below"}),Wo("design:type",String)],d.prototype,"position",void 0),bo([(0,Ot.MZ)({attribute:"default-selected-term-id",type:String}),Wo("design:type",String)],d.prototype,"defaultSelectedTermId",void 0),bo([(0,Ot.MZ)({attribute:"selected-term",type:Object}),Wo("design:type",Object)],d.prototype,"selectedTerm",void 0),bo([(0,Ot.MZ)({attribute:"disabled",type:Boolean}),Wo("design:type",Boolean)],d.prototype,"disabled",void 0),bo([(0,Ot.MZ)({attribute:"cache-enabled",type:Boolean}),Wo("design:type",Object)],d.prototype,"cacheEnabled",void 0),bo([(0,Ot.MZ)({attribute:"cache-invalidation-period",type:Number}),Wo("design:type",Object)],d.prototype,"cacheInvalidationPeriod",void 0),bo([(0,Ot.wk)(),Wo("design:type",Array)],d.prototype,"terms",void 0),bo([(0,Ot.wk)(),Wo("design:type",Boolean)],d.prototype,"noTerms",void 0),d})();class k0 extends ro.g{}class Ru extends((0,dd.dx)(k0)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const P0=(()=>{class d extends Ru{constructor(){super(),this.initialValue="on",this.keypressHandler=n=>{if(!this.readOnly)switch(n.key){case Rn.Mm:case Rn.gG:this.checked=!this.checked}},this.clickHandler=n=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(n,o){super.checkedChanged(n,o),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}return(0,Dt.Cg)([(0,dn.CF)({attribute:"readonly",mode:"boolean"})],d.prototype,"readOnly",void 0),(0,Dt.Cg)([on.sH],d.prototype,"defaultSlottedNodes",void 0),d})().compose({baseName:"switch",template:(d,l)=>pi.q`
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
            <slot ${(0,vs.e)("defaultSlottedNodes")}></slot>
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
`,styles:(d,l)=>Di.A`
    :host([hidden]) {
      display: none;
    }

    ${(0,zo.V)("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${Ct.OCo};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${Ct.qB4};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${tl.Z};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${kr.D} / 2) + ${Ct.vR1}) * 2px);
      height: calc(((${kr.D} / 2) + ${Ct.vR1}) * 1px);
      background: ${Ct.ymW};
      border-radius: calc(${kr.D} * 1px);
      border: calc(${Ct.XAH} * 1px) solid ${Ct.nF5};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${Ct.IpM};
      border-color: ${Ct.vA6};
    }

    :host(:not(.disabled):active) .switch {
      background: ${Ct.MPS};
      border-color: ${Ct.p4W};
    }

    :host(:${Yr.N}) .switch {
      ${Ra.v}
      background: ${Ct.wsB};
    }

    :host(.checked) .switch {
      background: ${Ct.IRh};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${Ct.OS0};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${Ct.amQ};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${Ct.lHw};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${Ct.lHw};
      cursor: pointer;
      ${Bs.Ah}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${Ct.lHw};
      ${Bs.Ah}
      margin-inline-end: calc(${Ct.vR1} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${Ct.vR1} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${Ct.IRh};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${Ct.l_5};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${Ct.OS0};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${Ct.XKp};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${Ct.amQ};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${Ct.J_F};
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
  `.withBehaviors(new Hs(Di.A`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,Di.A`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),(0,ys.mr)(Di.A`
        :host(:not(.disabled)) .switch slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${Sn.A.FieldText};
        }
        .switch {
          background: ${Sn.A.Field};
          border-color: ${Sn.A.FieldText};
        }
        :host(.checked) .switch {
          background: ${Sn.A.Highlight};
          border-color: ${Sn.A.Highlight};
        }
        :host(:not(.disabled):hover) .switch ,
        :host(:not(.disabled):active) .switch,
        :host(.checked:not(.disabled):hover) .switch {
          background: ${Sn.A.HighlightText};
          border-color: ${Sn.A.Highlight};
        }
        :host(.checked:not(.disabled)) .switch slot[name="switch"] {
          fill: ${Sn.A.HighlightText};
        }
        :host(.checked:not(.disabled):hover) .switch slot[name='switch'] {
          fill: ${Sn.A.Highlight};
        }
        :host(:${Yr.N}) .switch {
          forced-color-adjust: none;
          background: ${Sn.A.Field}; 
          border-color: ${Sn.A.Highlight};
          outline-color: ${Sn.A.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${Sn.A.GrayText};
        }
        :host(.disabled) .switch {
          background: ${Sn.A.Field};
          border-color: ${Sn.A.GrayText};
        }
        .status-message,
        .label {
          color: ${Sn.A.FieldText};
        }
      `)),switch:'\n    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n      <rect x="2" y="2" width="12" height="12" rx="6"/>\n    </svg>\n  '});var Lc=h(4150),$r=h(3595);const Lg="#717171",Md=aa.G.create("secondary-text-color").withDefault(Lg),Rd="#1a1a1a",N0=aa.G.create("secondary-text-hover-color").withDefault(Rd),Ou={label:"Color mode:",on:"Dark",off:"Light"};var $0=function(d,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,l)};let $g=(()=>{class d extends xc.S{constructor(){super(),this.onSwitchChanged=o=>{this.darkModeActive=o.target.checked};const n=window.matchMedia("(prefers-color-scheme:dark)").matches;this.darkModeActive=n,this.applyTheme(this.darkModeActive)}get strings(){return Ou}updated(n){n.has("darkModeActive")&&this.applyTheme(this.darkModeActive)}render(){return Lt.qy`
      <fluent-switch checked=${this.darkModeActive} @change=${this.onSwitchChanged}>
        <span slot="checked-message">${Ou.on}</span>
        <span slot="unchecked-message">${Ou.off}</span>
        <label for="direction-switch">${Ou.label}</label>
      </fluent-switch>
`}applyTheme(n){const o=n?"dark":"light";((d,l=document.body)=>{const n=(d=>{switch(d){case"contrast":return{accentBaseColor:"#7f85f5",neutralBaseColor:"#adadad",baseLayerLuminance:Lc.y.DarkMode};case"default":return{accentBaseColor:"#5b5fc7",neutralBaseColor:"#616161",baseLayerLuminance:Lc.y.LightMode};case"dark":return{accentBaseColor:"#479ef5",neutralBaseColor:"#adadad",baseLayerLuminance:Lc.y.DarkMode,designTokenOverrides:l=>{Ct.IRh.setValueFor(l,oo.q.from((0,$r.Hs)("#115ea3"))),Ct.OS0.setValueFor(l,oo.q.from((0,$r.Hs)("#0f6cbd"))),Ct.amQ.setValueFor(l,oo.q.from((0,$r.Hs)("#0c3b5e"))),Ct.KJd.setValueFor(l,oo.q.from((0,$r.Hs)("#0f548c"))),Ct.W_m.setValueFor(l,oo.q.from((0,$r.Hs)("#479EF5"))),Ct.YLI.setValueFor(l,oo.q.from((0,$r.Hs)("#62abf5"))),Ct.QL0.setValueFor(l,oo.q.from((0,$r.Hs)("#2886de"))),Ct.iLG.setValueFor(l,oo.q.from((0,$r.Hs)("#479ef5"))),Ct.enQ.setValueFor(l,oo.q.from((0,$r.Hs)("#115ea3"))),Ct.eNp.setValueFor(l,oo.q.from((0,$r.Hs)("#0f6cbd"))),Ct.uB0.setValueFor(l,oo.q.from((0,$r.Hs)("#0c3b5e"))),Ct.cDQ.setValueFor(l,oo.q.from((0,$r.Hs)("#0f548c"))),Ct.J_F.setValueFor(l,oo.q.from((0,$r.Hs)("#ffffff"))),Ct.l_5.setValueFor(l,oo.q.from((0,$r.Hs)("#ffffff"))),Ct.XKp.setValueFor(l,oo.q.from((0,$r.Hs)("#ffffff"))),Ct.BgV.setValueFor(l,oo.q.from((0,$r.Hs)("#ffffff"))),Md.setValueFor(l,"#8e8e8e"),N0.setValueFor(l,"#ffffff")}};default:return{accentBaseColor:"#0f6cbd",neutralBaseColor:"#616161",baseLayerLuminance:Lc.y.LightMode,designTokenOverrides:l=>{Md.setValueFor(l,Lg),N0.setValueFor(l,Rd)}}}})(d);((d,l=document.body)=>{var n;Ct.fdT.setValueFor(l,oo.q.from((0,$r.Hs)(d.accentBaseColor))),Ct.eQf.setValueFor(l,oo.q.from((0,$r.Hs)(d.neutralBaseColor))),Ct.li_.setValueFor(l,d.baseLayerLuminance),null===(n=d.designTokenOverrides)||void 0===n||n.call(d,l)})(n,l)})(o),document.body.classList.remove("mgt-dark-mode","mgt-light-mode"),document.body.classList.add(`mgt-${o}-mode`),this.fireCustomEvent("darkmodechanged",this.darkModeActive,!0,!1,!0)}}return function(d,l,n,o){var I,f=arguments.length,m=f<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,l,n,o);else for(var F=d.length-1;F>=0;F--)(I=d[F])&&(m=(f<3?I(m):f>3?I(l,n,m):I(l,n))||m);f>3&&m&&Object.defineProperty(l,n,m)}([(0,Ot.MZ)({attribute:"mode",reflect:!0,type:String,converter:{fromAttribute:l=>"dark"===l,toAttribute:l=>l?"dark":"light"}}),$0("design:type",Boolean)],d.prototype,"darkModeActive",void 0),d})();class B0 extends ro.g{}class H0 extends((0,dd.rf)(B0)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Sl=(()=>{class d extends H0{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&So.dv.queueUpdate(()=>{this.focus()})}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}}return(0,Dt.Cg)([(0,dn.CF)({attribute:"readonly",mode:"boolean"})],d.prototype,"readOnly",void 0),(0,Dt.Cg)([(0,dn.CF)({mode:"boolean"})],d.prototype,"autofocus",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"placeholder",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"list",void 0),(0,Dt.Cg)([(0,dn.CF)({converter:dn.R$})],d.prototype,"maxlength",void 0),(0,Dt.Cg)([(0,dn.CF)({converter:dn.R$})],d.prototype,"minlength",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"pattern",void 0),(0,Dt.Cg)([(0,dn.CF)({converter:dn.R$})],d.prototype,"size",void 0),(0,Dt.Cg)([(0,dn.CF)({mode:"boolean"})],d.prototype,"spellcheck",void 0),(0,Dt.Cg)([on.sH],d.prototype,"defaultSlottedNodes",void 0),d})();class Od{}(0,jo.X)(Od,zl.z),(0,jo.X)(Sl,Bi.qw,Od);var V0=h(7412),j0=h(3043);const Fc=".root",IC=aa.G.create("clear-button-hover").withDefault(d=>{const l=Ct.EE_.getValueFor(d),n=Ct.VYG.getValueFor(d);return l.evaluate(d,n.evaluate(d).focus).hover}),z0=aa.G.create("clear-button-active").withDefault(d=>{const l=Ct.EE_.getValueFor(d),n=Ct.VYG.getValueFor(d);return l.evaluate(d,n.evaluate(d).focus).active}),W0=(()=>{class d extends Sl{constructor(){super(...arguments),this.appearance="outline"}}return(0,ru.Cg)([dn.CF],d.prototype,"appearance",void 0),d})().compose({baseName:"search",baseClass:Sl,template:(d,l)=>pi.q`
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
      <slot ${(0,vs.e)({property:"defaultSlottedNodes",filter:V0.g})}></slot>
    </label>
    <div class="root" part="root" ${(0,Us.K)("root")}>
      ${(0,Bi.LT)(d,l)}
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
          ${(0,Us.K)("control")}
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
      ${(0,Bi.aO)(d,l)}
    </div>
  </template>
`,styles:(d,l)=>Di.A`
    ${(0,zo.V)("inline-block")}

    ${(0,oa.aB)(d,l,Fc)}

    ${(0,oa.y$)(d,l,Fc)}

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
      padding: 0 calc(${Ct.vR1} * 2px + 1px);
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
      color: ${Ct.lHw};
      fill: currentcolor;
      border: none;
      border-radius: calc(${Ct.PbG} * 1px);
      min-width: calc(${kr.D} * 1px);
      ${Bs.Ah}
      outline: none;
      padding: 0 calc((10 + (${Ct.vR1} * 2 * ${Ct.Brd})) * 1px);
    }
    .clear-button:hover {
      background: ${IC};
    }
    .clear-button:active {
      background: ${z0};
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
    ::slotted(${d.tagFor(j0.$)}) {
      margin-inline-end: 1px;
    }
  `.withBehaviors((0,ql.f)("outline",(0,oa.Tv)(d,l,Fc)),(0,ql.f)("filled",(0,oa.dM)(d,l,Fc)),(0,ys.mr)((0,oa.lb)(d,l,Fc))),start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}}),Df={placeholder:"Search",title:"Search"},xf=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host fluent-search{width:100%}
`];var Bg=function(d,l,n,o){var I,f=arguments.length,m=f<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,l,n,o);else for(var F=d.length-1;F>=0;F--)(I=d[F])&&(m=(f<3?I(m):f>3?I(l,n,m):I(l,n))||m);return f>3&&m&&Object.defineProperty(l,n,m),m},Nd=function(d,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,l)};let Hg=(()=>{class d extends xc.S{static get styles(){return xf}get strings(){return Df}get searchTerm(){return this._searchTerm}set searchTerm(n){this._searchTerm=n,this.fireSearchTermChanged()}constructor(){super(),this._searchTerm="",this.renderContent=()=>{var n;return Lt.qy`
      <fluent-search
        autocomplete="off"
        class="search-term-input"
        appearance="outline"
        value=${null!==(n=this.searchTerm)&&void 0!==n?n:""}
        placeholder=${this.placeholder?this.placeholder:Df.placeholder}
        title=${this.title?this.title:Df.title}
        @input=${this.onInputChanged}
        @change=${this.onInputChanged}
      >
      </fluent-search>`},this.onInputChanged=n=>{this.searchTerm=n.target.value},this.debounceDelay=300}fireSearchTermChanged(){this.debouncedSearchTermChanged||(this.debouncedSearchTermChanged=(0,mr.sg)(()=>{this.fireCustomEvent("searchTermChanged",this.searchTerm)},this.debounceDelay)),this.debouncedSearchTermChanged()}}return Bg([(0,Ot.MZ)({attribute:"placeholder",type:String}),Nd("design:type",String)],d.prototype,"placeholder",void 0),Bg([(0,Ot.MZ)({attribute:"search-term",type:String}),Nd("design:type",Object),Nd("design:paramtypes",[Object])],d.prototype,"searchTerm",null),Bg([(0,Ot.MZ)({attribute:"debounce-delay",type:Number,reflect:!0}),Nd("design:type",Number)],d.prototype,"debounceDelay",void 0),d})();const Pa={modified:"modified on",back:"Back",next:"Next",pages:"pages",page:"Page"},xC=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}.search-results{scroll-margin:100px}.search-result-grid{font-size:14px;margin:16px 4px;display:grid;grid-template-columns:32px 2fr 0fr;gap:.5rem}.search-result{font-size:14px;margin:16px 4px}.file-icon{--file-type-icon-height:32px}.search-result-info{margin:4px 0;display:inline-flex}.search-result-date{padding-top:3px}.search-result-date__shimmer{border-radius:4px;margin-top:2%;margin-left:5px;height:10px;width:200px}.search-result-summary{margin:4px 0;color:var(--body-subtle-text-color)}.search-result-thumbnail__shimmer{width:126px;height:72px}.search-result-thumbnail img{height:72px;max-width:126px;width:126px;object-fit:cover}.search-result-url{font-size:14px;font-weight:600;margin:4px 0}.search-result-url a{color:var(--color,var(--neutral-foreground-rest));text-decoration:none}.search-result-url a:hover{text-decoration:underline}.search-result-content__shimmer{border-radius:4px;margin-top:10px;height:10px}.search-result-name{font-size:16px;font-weight:600;margin:4px 0}.search-result-name__shimmer{border-radius:4px;margin-top:10px;height:10px;width:20%}.search-result-name a{color:var(--color,var(--neutral-foreground-rest));text-decoration:none}.search-result-name a:hover{text-decoration:underline}.search-result-author__shimmer{width:24px;height:24px}.search-result-icon{width:30px;height:30px}.search-result-icon__shimmer{width:32px;height:32px}.search-result-icon img{width:100%}.search-result-icon svg,.search-result-icon svg>path{width:100%;height:100%;fill:var(--neutral-foreground-rest);fill-rule:nonzero!important;clip-rule:nonzero!important}.search-results-page-active{border-bottom-style:solid;border-bottom-color:var(--accent-base-color)}.search-results-page svg,.search-results-page svg>path{height:12px;fill:var(--neutral-foreground-rest);fill-rule:nonzero!important;clip-rule:nonzero!important}.search-result-answer{box-shadow:var(--answer-box-shadow,0 3.2px 7.2px rgba(0,0,0,.132),0 .6px 1.8px rgba(0,0,0,.108));border-radius:var(--answer-border-radius,4px);border:var(--answer-border,none);padding:var(--answer-padding,10px)}.search-results-pages{margin:16px 4px}
`];let Vg=(()=>{class d extends ro.g{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=Cl.O.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=n=>{this.classList.toggle("top","start"===this.region.verticalPosition),this.classList.toggle("bottom","end"===this.region.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.region.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.region.verticalPosition),this.classList.toggle("center-vertical","center"===this.region.verticalPosition),this.classList.toggle("left","start"===this.region.horizontalPosition),this.classList.toggle("right","end"===this.region.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.region.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.region.horizontalPosition),this.classList.toggle("center-horizontal","center"===this.region.horizontalPosition)},this.handleRegionMouseOver=n=>{this.isRegionHovered=!0},this.handleRegionMouseOut=n=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=n=>{this.tooltipVisible?this.isAnchorHoveredFocused=!0:this.startShowDelayTimer()},this.handleAnchorMouseOut=n=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=n=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=n=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout(()=>{this.updateTooltipVisibility()},60))},this.clearHideDelayTimer=()=>{null!==this.hideDelayTimer&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1)return void(null===this.showDelayTimer&&(this.showDelayTimer=window.setTimeout(()=>{this.startHover()},this.delay)));this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{null!==this.showDelayTimer&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const n=this.getRootNode();return n instanceof ShadowRoot?n.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=n=>{!n.defaultPrevented&&this.tooltipVisible&&n.key===Rn.F9&&(this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss"))},this.updateTooltipVisibility=()=>{if(!1===this.visible)this.hideTooltip();else{if(!0===this.visible)return void this.showTooltip();if(this.isAnchorHoveredFocused||this.isRegionHovered)return void this.showTooltip();this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=au(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),So.dv.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),null!=this.region&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(n){if(this.$fastController.isConnected){if(null!=n&&(n.removeEventListener("mouseover",this.handleAnchorMouseOver),n.removeEventListener("mouseout",this.handleAnchorMouseOut),n.removeEventListener("focusin",this.handleAnchorFocusIn),n.removeEventListener("focusout",this.handleAnchorFocusOut)),null!=this.anchorElement){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const o=this.anchorElement.id;null!==this.anchorElement.parentElement&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(f=>{f.id===o&&this.startShowDelayTimer()})}null!=this.region&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){null!=this.region&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case"top":case"bottom":this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case"right":case"left":case"start":case"end":this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case"top-left":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case"top-right":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case"bottom-left":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case"bottom-right":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case"top-start":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case"top-end":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case"bottom-start":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case"bottom-end":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center"}}}return(0,Dt.Cg)([(0,dn.CF)({mode:"boolean"})],d.prototype,"visible",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"anchor",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"delay",void 0),(0,Dt.Cg)([dn.CF],d.prototype,"position",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"auto-update-mode"})],d.prototype,"autoUpdateMode",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"horizontal-viewport-lock"})],d.prototype,"horizontalViewportLock",void 0),(0,Dt.Cg)([(0,dn.CF)({attribute:"vertical-viewport-lock"})],d.prototype,"verticalViewportLock",void 0),(0,Dt.Cg)([on.sH],d.prototype,"anchorElement",void 0),(0,Dt.Cg)([on.sH],d.prototype,"viewportElement",void 0),(0,Dt.Cg)([on.sH],d.prototype,"verticalPositioningMode",void 0),(0,Dt.Cg)([on.sH],d.prototype,"horizontalPositioningMode",void 0),(0,Dt.Cg)([on.sH],d.prototype,"horizontalInset",void 0),(0,Dt.Cg)([on.sH],d.prototype,"verticalInset",void 0),(0,Dt.Cg)([on.sH],d.prototype,"horizontalScaling",void 0),(0,Dt.Cg)([on.sH],d.prototype,"verticalScaling",void 0),(0,Dt.Cg)([on.sH],d.prototype,"verticalDefaultPosition",void 0),(0,Dt.Cg)([on.sH],d.prototype,"horizontalDefaultPosition",void 0),(0,Dt.Cg)([on.sH],d.prototype,"tooltipVisible",void 0),(0,Dt.Cg)([on.sH],d.prototype,"currentDirection",void 0),d})();const Mf=class q0 extends Vg{connectedCallback(){super.connectedCallback(),Ct.pfK.setValueFor(this,Ct.Tkp)}}.compose({baseName:"tooltip",baseClass:Vg,template:(d,l)=>pi.q`
        ${(0,$s.z)(n=>n.tooltipVisible,pi.q`
            <${d.tagFor(Xn)}
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
                ${(0,Us.K)("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${d.tagFor(Xn)}>
        `)}
    `,styles:(d,l)=>Di.A`
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
      border-radius: calc(${Ct.PbG} * 1px);
      border: calc(${Ct.XAH} * 1px) solid ${Ct.ppm};
      background: ${Ct.pfK};
      color: ${Ct.lHw};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${Bs.Ah}
      white-space: nowrap;
      box-shadow: ${ou.tf};
    }

    ${d.tagFor(Xn)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${d.tagFor(Xn)}.right,
    ${d.tagFor(Xn)}.left {
      flex-direction: column;
    }

    ${d.tagFor(Xn)}.top .tooltip::after,
    ${d.tagFor(Xn)}.bottom .tooltip::after,
    ${d.tagFor(Xn)}.left .tooltip::after,
    ${d.tagFor(Xn)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${Ct.pfK};
      border-top: calc(${Ct.XAH} * 1px) solid ${Ct.ppm};
      border-left: calc(${Ct.XAH} * 1px) solid ${Ct.ppm};
      position: absolute;
    }

    ${d.tagFor(Xn)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${d.tagFor(Xn)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${d.tagFor(Xn)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${d.tagFor(Xn)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${d.tagFor(Xn)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${d.tagFor(Xn)}.left .tooltip {
      margin-right: 12px;
    }

    ${d.tagFor(Xn)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${d.tagFor(Xn)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors((0,ys.mr)(Di.A`
        :host([disabled]) {
          opacity: 1;
        }
        ${d.tagFor(Xn)}.top .tooltip::after,
        ${d.tagFor(Xn)}.bottom .tooltip::after,
        ${d.tagFor(Xn)}.left .tooltip::after,
        ${d.tagFor(Xn)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }
      `))}),Gg=Ql.compose({baseName:"divider",template:(d,l)=>pi.q`
    <template role="${n=>n.role}" aria-orientation="${n=>n.orientation}"></template>
`,styles:(d,l)=>Di.A`
    ${(0,zo.V)("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${Ct.XAH} * 1px) solid ${Ct.hb6};
    }

    :host([orientation="vertical"]) {
      border: none;
      height: 100%;
      margin: 0 calc(${Ct.vR1} * 1px);
      border-left: calc(${Ct.XAH} * 1px) solid ${Ct.hb6};
  }
  `});var Ko=function(d,l,n,o){var I,f=arguments.length,m=f<3?l:null===o?o=Object.getOwnPropertyDescriptor(l,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,l,n,o);else for(var F=d.length-1;F>=0;F--)(I=d[F])&&(m=(f<3?I(m):f>3?I(l,n,m):I(l,n))||m);return f>3&&m&&Object.defineProperty(l,n,m),m},Mr=function(d,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,l)};let Q0=(()=>{class d extends Ps.N{static get styles(){return xC}get strings(){return Pa}get queryString(){return this._queryString}set queryString(n){this._queryString!==n&&(this._queryString=n,this.currentPage=1)}get from(){return(this.currentPage-1)*this.size}get size(){return this._size}set size(n){this._size=n>this.maxPageSize?this.maxPageSize:n}get searchEndpoint(){return"/search/query"}get maxPageSize(){return 1e3}constructor(){super(),this._size=10,this.entityTypes=["driveItem","listItem","site"],this.scopes=[],this.contentSources=[],this.version="v1.0",this.pagingMax=7,this.enableTopResults=!1,this.cacheEnabled=!1,this.cacheInvalidationPeriod=3e4,this.isRefreshing=!1,this.defaultFields=["webUrl","lastModifiedBy","lastModifiedDateTime","summary","displayName","name"],this.currentPage=1,this.renderContent=()=>{var n,o,f,m,I,F,ae,Se;let Re=null,We=null,jt=null;return this.hasTemplate("header")&&(We=this.renderTemplate("header",this.response)),jt=this.renderFooter(null===(o=null===(n=this.response)||void 0===n?void 0:n.value[0])||void 0===o?void 0:o.hitsContainers[0]),Re=this.response&&this.hasTemplate("default")?this.renderTemplate("default",this.response)||Lt.qy``:null!==(m=null===(f=this.response)||void 0===f?void 0:f.value[0])&&void 0!==m&&m.hitsContainers[0]?Lt.qy`${null===(Se=null===(ae=null===(F=null===(I=this.response)||void 0===I?void 0:I.value[0])||void 0===F?void 0:F.hitsContainers[0])||void 0===ae?void 0:ae.hits)||void 0===Se?void 0:Se.map(Jt=>this.renderResult(Jt))}`:this.hasTemplate("no-data")?this.renderTemplate("no-data",null):Lt.qy``,Lt.qy`
      ${We}
      <div class="search-results">
        ${Re}
      </div>
      ${jt}`},this.renderLoading=()=>this.renderTemplate("loading",null)||Lt.qy`
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
       `,this.onFirstPageClick=()=>{this.currentPage=1,this.scrollToFirstResult()},this.onPageBackClick=()=>{this.currentPage--,this.scrollToFirstResult()},this.onPageNextClick=()=>{this.currentPage++,this.scrollToFirstResult()}}args(){return[this.providerState,this.queryString,this.queryTemplate,this.entityTypes,this.contentSources,this.scopes,this.version,this.size,this.fetchThumbnail,this.fields,this.enableTopResults,this.currentPage]}refresh(n=!1){this.isRefreshing=!0,n&&this.clearState(),this._task.run()}clearState(){this.response=null}loadState(){var n,o,f,m,I,F;return function(d,l,n,o){return new(n||(n=Promise))(function(m,I){function F(Re){try{Se(o.next(Re))}catch(We){I(We)}}function ae(Re){try{Se(o.throw(Re))}catch(We){I(We)}}function Se(Re){Re.done?m(Re.value):function f(m){return m instanceof n?m:new n(function(I){I(m)})}(Re.value).then(F,ae)}Se((o=o.apply(d,l||[])).next())})}(this,void 0,void 0,function*(){const ae=er.b.globalProvider;if(this.error=null,ae&&ae.state===Pt.HJ.SignedIn){if(this.queryString){try{const Se=this.getRequestOptions();let Re;const We=JSON.stringify({endpoint:`${this.version}${this.searchEndpoint}`,requestOptions:Se});let jt=null;if(this.shouldRetrieveCache()){Re=mo._.getCache(Vo.j.search,Vo.j.search.stores.responses);const Jt=(0,mr.jE)()?yield Re.getValue(We):null;Jt&&(0,mr.jD)(this.cacheInvalidationPeriod)>Date.now()-Jt.timeCached&&(jt=JSON.parse(Jt.response))}if(!jt){const Jt=ae.graph.forComponent(this);let an=Jt.api(this.searchEndpoint).version(this.version);if(!(null===(n=this.scopes)||void 0===n)&&n.length&&(an=an.middlewareOptions((0,dr.F)(this.scopes))),jt=yield an.post({requests:[Se]}),this.fetchThumbnail){const wn=Jt.createBatch(),Zn=wc.fromGraph(Jt).createBatch(),bi=null!==(o=jt.value)&&void 0!==o&&o.length&&null!==(f=jt.value[0].hitsContainers)&&void 0!==f&&f.length&&null!==(I=null===(m=jt.value[0].hitsContainers[0])||void 0===m?void 0:m.hits)&&void 0!==I?I:[];for(const ur of bi){const Vi=ur.resource;(Vi.size>0||null!==(F=Vi.webUrl)&&void 0!==F&&F.endsWith(".aspx"))&&("#microsoft.graph.driveItem"===Vi["@odata.type"]||"#microsoft.graph.listItem"===Vi["@odata.type"])&&("#microsoft.graph.listItem"===Vi["@odata.type"]?Zn.get(ur.hitId.toString(),`/sites/${Vi.parentReference.siteId}/pages/${Vi.id}`):wn.get(ur.hitId.toString(),`/drives/${Vi.parentReference.driveId}/items/${Vi.id}/thumbnails/0/medium`))}const Hi=ur=>{if(ur&&ur.size>0)for(const[Vi,ua]of ur){const Jr=jt.value[0].hitsContainers[0].hits[Vi];Jr.resource.thumbnail="#microsoft.graph.listItem"===Jr.resource["@odata.type"]?{url:ua.content.thumbnailWebUrl}:{url:ua.content.url}}};try{Hi(yield wn.executeAll()),Hi(yield Zn.executeAll())}catch{}}this.shouldUpdateCache()&&jt&&(Re=mo._.getCache(Vo.j.search,Vo.j.search.stores.responses),yield Re.putValue(We,{response:JSON.stringify(jt)}))}(0,Xd.a)(this.response,jt)||(this.response=jt)}catch(Se){this.error=Se}this.response&&(this.error=null)}else this.response=null;this.isRefreshing=!1,this.fireCustomEvent("dataChange",{response:this.response,error:this.error})}})}renderResult(n){const o=this.getResourceType(n.resource);if(this.hasTemplate(`result-${o}`))return this.renderTemplate(`result-${o}`,n,n.hitId);switch(n.resource["@odata.type"]){case"#microsoft.graph.driveItem":return this.renderDriveItem(n);case"#microsoft.graph.site":return this.renderSite(n);case"#microsoft.graph.person":return this.renderPerson(n);case"#microsoft.graph.drive":case"#microsoft.graph.list":return this.renderList(n);case"#microsoft.graph.listItem":return this.renderListItem(n);case"#microsoft.graph.search.bookmark":return this.renderBookmark(n);case"#microsoft.graph.search.acronym":return this.renderAcronym(n);case"#microsoft.graph.search.qna":return this.renderQnA(n);default:return this.renderDefault(n)}}renderFooter(n){if(this.pagingRequired(n)){const o=this.getActivePages(n.total);return Lt.qy`
        <div class="search-results-pages">
          ${this.renderPreviousPage()}
          ${this.renderFirstPage(o)}
          ${this.renderAllPages(o)}
          ${this.renderNextPage()}
        </div>
      `}}pagingRequired(n){return n?.moreResultsAvailable||this.currentPage*this.size<n?.total}getActivePages(n){const f=[],m=(()=>{const I=this.currentPage-Math.floor(this.pagingMax/2)-1;return I>=Math.floor(this.pagingMax/2)?I:0})();if(m+1>this.pagingMax-this.currentPage||this.pagingMax===this.currentPage)for(let I=m+1;I<Math.ceil(n/this.size)&&I<this.pagingMax+(this.currentPage-1)&&f.length<this.pagingMax-2;++I)f.push(I+1);else for(let I=m;I<this.pagingMax;++I)f.push(I+1);return f}renderAllPages(n){return Lt.qy`
      ${n.map(o=>Lt.qy`
            <fluent-button
              title="${Pa.page} ${o}"
              appearance="stealth"
              class="${o===this.currentPage?"search-results-page-active":"search-results-page"}"
              @click="${()=>this.onPageClick(o)}">
                ${o}
            </fluent-button>`)}`}renderFirstPage(n){return Lt.qy`
      ${n.some(o=>1===o)?Lt.s6:Lt.qy`
              <fluent-button
                 title="${Pa.page} 1"
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
              </fluent-button>`:Lt.s6}`}getDotButtonTitle(){return`${Pa.back} ${Math.ceil(this.pagingMax/2)} ${Pa.pages}`}renderPreviousPage(){return this.currentPage>1?Lt.qy`
          <fluent-button
            appearance="stealth"
            class="search-results-page"
            title="${Pa.back}"
            @click="${this.onPageBackClick}">
              ${(0,Bn.r)(Bn.A.ChevronLeft)}
            </fluent-button>`:Lt.s6}renderNextPage(){return this.isLastPage()?Lt.s6:Lt.qy`
          <fluent-button
            appearance="stealth"
            class="search-results-page"
            title="${Pa.next}"
            aria-label="${Pa.next}"
            @click="${this.onPageNextClick}">
              ${(0,Bn.r)(Bn.A.ChevronRight)}
            </fluent-button>`}onPageClick(n){this.currentPage=n,this.scrollToFirstResult()}isLastPage(){return this.currentPage===Math.ceil(this.response.value[0].hitsContainers[0].total/this.size)}scrollToFirstResult(){this.renderRoot.querySelector(".search-results").scrollIntoView({block:"start",behavior:"smooth"})}getResourceType(n){return n["@odata.type"].split(".").pop()}renderDriveItem(n){var o,f;const m=n.resource;return or.Q`
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
            <a href="${m.webUrl}?Web=1" target="_blank">${(0,mr.wJ)(m.name)}</a>
          </div>
          <div class="search-result-info">
            <div class="search-result-author">
              <mgt-person
                person-query=${m.lastModifiedBy.user.email}
                view="oneline"
                person-card="hover"
                show-presence="true">
              </mgt-person>
            </div>
            <div class="search-result-date">
              &nbsp; ${Pa.modified} ${(0,mr.h3)(new Date(m.lastModifiedDateTime))}
            </div>
          </div>
          <div class="search-result-summary" .innerHTML="${(0,mr.ez)(n.summary)}"></div>
        </div>
        ${(null===(o=m.thumbnail)||void 0===o?void 0:o.url)&&Lt.qy`
          <div class="search-result-thumbnail">
            <a href="${m.webUrl}" target="_blank"><img alt="${m.name}" src="${null===(f=m.thumbnail)||void 0===f?void 0:f.url}" /></a>
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
          <div class="search-result-summary" .innerHTML="${(0,mr.ez)(n.summary)}"></div>
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
              ${(0,mr.wJ)(o.name||(0,mr.x8)(o.webUrl))}
            </a>
          </div>
          <div class="search-result-summary" .innerHTML="${(0,mr.ez)(n.summary)}"></div>
        </div>
      </div>
      <fluent-divider></fluent-divider>
    `}renderListItem(n){var o,f;const m=n.resource;return or.Q`
      <div class="search-result-grid">
        <div class="search-result-icon">
          ${m.webUrl.endsWith(".aspx")?(0,Bn.r)(Bn.A.News):(0,Bn.r)(Bn.A.FileOuter)}
        </div>
        <div class="search-result-content">
          <div class="search-result-name">
            <a href="${m.webUrl}?Web=1" target="_blank">
              ${(0,mr.wJ)(m.name||(0,mr.x8)(m.webUrl))}
            </a>
          </div>
          <div class="search-result-info">
            <div class="search-result-author">
              <mgt-person
                person-query=${m.lastModifiedBy.user.email}
                view="oneline"
                person-card="hover"
                show-presence="true">
              </mgt-person>
            </div>
            <div class="search-result-date">
              &nbsp; ${Pa.modified} ${(0,mr.h3)(new Date(m.lastModifiedDateTime))}
            </div>
          </div>
          <div class="search-result-summary" .innerHTML="${(0,mr.ez)(n.summary)}"></div>
        </div>
        ${(null===(o=m.thumbnail)||void 0===o?void 0:o.url)&&Lt.qy`
          <div class="search-result-thumbnail">
            <a href="${m.webUrl}" target="_blank"><img alt="${(0,mr.wJ)(m.name||(0,mr.x8)(m.webUrl))}" src="${(null===(f=m.thumbnail)||void 0===f?void 0:f.url)||Lt.s6}" /></a>
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
    `}renderBookmark(n){return this.renderAnswer(n,Bn.A.DoubleBookmark)}renderAcronym(n){return this.renderAnswer(n,Bn.A.BookOpen)}renderQnA(n){return this.renderAnswer(n,Bn.A.BookQuestion)}renderAnswer(n,o){const f=n.resource;return Lt.qy`
      <div class="search-result-grid search-result-answer">
        <div class="search-result-icon">
          ${(0,Bn.r)(o)}
        </div>
        <div class="search-result-content">
          <div class="search-result-name">
            <a href="${this.getResourceUrl(f)}?Web=1" target="_blank">${f.displayName}</a>
          </div>
          <div class="search-result-summary">${f.description}</div>
        </div>
      </div>
      <fluent-divider></fluent-divider>
    `}renderDefault(n){const o=n.resource,f=this.getResourceUrl(o);return Lt.qy`
      <div class="search-result-grid">
        <div class="search-result-icon">
          ${this.getResourceIcon(o)}
        </div>
        <div class="search-result-content">
          <div class="search-result-name">
            ${f?Lt.qy`
                  <a href="${f}?Web=1" target="_blank">${this.getResourceName(o)}</a>
                `:Lt.qy`
                  ${this.getResourceName(o)}
                `}
          </div>
          <div class="search-result-summary" .innerHTML="${this.getResultSummary(n)}"></div>
        </div>
      </div>
      <fluent-divider></fluent-divider>
    `}getResourceUrl(n){return n.webUrl||n.webLink||null}getResourceName(n){return n.displayName||n.subject||(0,mr.wJ)(n.name)}getResultSummary(n){var o;return(0,mr.ez)(n.summary||(null===(o=n.resource)||void 0===o?void 0:o.description)||null)}getResourceIcon(n){switch(n["@odata.type"]){case"#microsoft.graph.site":return(0,Bn.r)(Bn.A.Globe);case"#microsoft.graph.message":return(0,Bn.r)(Bn.A.Email);case"#microsoft.graph.event":return(0,Bn.r)(Bn.A.Event);case"microsoft.graph.chatMessage":return(0,Bn.r)(Bn.A.SmallChat);default:return(0,Bn.r)(Bn.A.FileOuter)}}shouldRetrieveCache(){return(0,mr.jE)()&&this.cacheEnabled&&!this.isRefreshing}shouldUpdateCache(){return(0,mr.jE)()&&this.cacheEnabled}getRequestOptions(){const n={entityTypes:this.entityTypes,query:{queryString:this.queryString},from:this.from?this.from:void 0,size:this.size?this.size:void 0,fields:this.getFields(),enableTopResults:this.enableTopResults?this.enableTopResults:void 0};return this.entityTypes.includes("externalItem")&&(n.contentSources=this.contentSources),"beta"===this.version&&(n.query.queryTemplate=this.queryTemplate?this.queryTemplate:void 0),n}getFields(){if(this.fields)return this.defaultFields.concat(this.fields)}}return Ko([(0,Ot.MZ)({attribute:"query-string",type:String}),Mr("design:type",String),Mr("design:paramtypes",[String])],d.prototype,"queryString",null),Ko([(0,Ot.MZ)({attribute:"query-template",type:String}),Mr("design:type",String)],d.prototype,"queryTemplate",void 0),Ko([(0,Ot.MZ)({attribute:"entity-types",converter:l=>l.split(",").map(n=>n.trim()),type:String}),Mr("design:type",Array)],d.prototype,"entityTypes",void 0),Ko([(0,Ot.MZ)({attribute:"scopes",converter:(l,n)=>l?l.toLowerCase().split(","):null}),Mr("design:type",Array)],d.prototype,"scopes",void 0),Ko([(0,Ot.MZ)({attribute:"content-sources",converter:(l,n)=>l?l.toLowerCase().split(","):null}),Mr("design:type",Array)],d.prototype,"contentSources",void 0),Ko([(0,Ot.MZ)({attribute:"version",reflect:!0,type:String}),Mr("design:type",Object)],d.prototype,"version",void 0),Ko([(0,Ot.MZ)({attribute:"size",reflect:!0,type:Number}),Mr("design:type",Number),Mr("design:paramtypes",[Object])],d.prototype,"size",null),Ko([(0,Ot.MZ)({attribute:"paging-max",reflect:!0,type:Number}),Mr("design:type",Object)],d.prototype,"pagingMax",void 0),Ko([(0,Ot.MZ)({attribute:"fetch-thumbnail",type:Boolean}),Mr("design:type",Boolean)],d.prototype,"fetchThumbnail",void 0),Ko([(0,Ot.MZ)({attribute:"fields",converter:l=>l.split(",").map(n=>n.trim()),type:String}),Mr("design:type",Array)],d.prototype,"fields",void 0),Ko([(0,Ot.MZ)({attribute:"enable-top-results",reflect:!0,type:Boolean}),Mr("design:type",Object)],d.prototype,"enableTopResults",void 0),Ko([(0,Ot.MZ)({attribute:"cache-enabled",reflect:!0,type:Boolean}),Mr("design:type",Object)],d.prototype,"cacheEnabled",void 0),Ko([(0,Ot.MZ)({attribute:"cache-invalidation-period",reflect:!0,type:Number}),Mr("design:type",Object)],d.prototype,"cacheInvalidationPeriod",void 0),Ko([(0,Ot.wk)(),Mr("design:type",Object)],d.prototype,"response",void 0),Ko([(0,Ot.MZ)({attribute:!1}),Mr("design:type",Object)],d.prototype,"currentPage",void 0),d})();const Kg=()=>{(0,Os.sN)(),(0,qm.registerMgtPersonCardComponent)(),(0,To.E)(mc.z1),pc(),(0,Oo.N)("agenda",Zm),Jd(),(0,To.E)(tv,_p.m9,Wl.zi,mc.z1),(0,bh.r)(),(0,Os.sN)(),(0,Oo.N)("login",Sp),ra(),pc(),(0,To.E)(Fp,su,Ah.oR,Wl.zi,hv.c,Hp._0),(0,To.E)(Tc,jv,Wl.zi),(0,Oo.N)("arrow-options",Gv),(0,To.E)(Tc,jv,Wl.zi),(0,Oo.N)("dot-options",nf),(0,bh.r)(),pc(),ra(),(0,Oo.N)("planner",af),(0,To.E)(gu,fg,mc.z1,Xv,wd,Ah.oR),(0,el.i)(),(0,Oo.N)("teams-channel-picker",gf),(0,To.E)(hv.c,_g,Wl.zi),Ed(),(0,Oo.N)("todo",Mu),(0,Af.R)(),(0,kd.x)(),Ed(),(0,To.E)(Au,su),(0,el.i)(),Jd(),(0,Oo.N)("taxonomy-picker",Ng),(0,To.E)(P0),(0,Oo.N)("theme-toggle",$g),(0,To.E)(W0),(0,Oo.N)("search-box",Hg),(0,To.E)(Hp._0,Wl.zi,Mf,Gg),(0,Af.R)(),(0,Os.sN)(),(0,Oo.N)("search-results",Q0),(0,el.i)()};let qg=(()=>{class d{constructor(n){this.authService=n}initializeMgt(){er.b.globalProvider=new vh({publicClientApplication:this.authService.instance}),Kg()}static#e=this.\u0275fac=function(o){return new(o||d)(c.KVO(Be))};static#t=this.\u0275prov=c.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})();function Qg(d,l){1&d&&c.nrm(0,"app-sidebar")}let Ld=(()=>{class d{constructor(n,o,f,m,I){this.authService=n,this.msalBroadcastService=o,this.mgtService=f,this.accountService=m,this.userService=I,this.isAuthenticated=!1,this._destroying$=new V.B}ngOnInit(){this.authService.handleRedirectObservable().subscribe(),this.msalBroadcastService.inProgress$.pipe((0,z.p)(n=>n===E.T$.None),(0,S.Q)(this._destroying$)).subscribe(()=>{this.isAuthenticated=this.authService.instance.getAllAccounts().length>0,this.isAuthenticated&&(this.accountService.checkAndSetActiveAccount(),this.userService.getBackendUserProfile().pipe((0,ee.s)(1)).subscribe(),this.mgtService.initializeMgt())})}ngOnDestroy(){this._destroying$.next(void 0),this._destroying$.complete()}static#e=this.\u0275fac=function(o){return new(o||d)(c.rXU(Be),c.rXU(Le),c.rXU(qg),c.rXU(Ir),c.rXU(ye.DL))};static#t=this.\u0275cmp=c.VBU({type:d,selectors:[["app-root"]],standalone:!0,features:[c.aNF],decls:6,vars:1,consts:[[1,"p-5","mx-auto","container"]],template:function(o,f){1&o&&(c.nrm(0,"app-nav"),c.j41(1,"main"),c.DNE(2,Qg,1,0,"app-sidebar"),c.j41(3,"div",0),c.nrm(4,"router-outlet"),c.k0s()(),c.nrm(5,"app-footer")),2&o&&(c.R7$(2),c.vxM(2,f.isAuthenticated?2:-1))},dependencies:[re.MD,le.iI,le.n3,ti,jm,zm],encapsulation:2})}return d})();x.production&&(0,c.SmG)(),(0,s.B8)(Ld,xa).catch(d=>console.error(d))},7043:(rt,pe,h)=>{h.d(pe,{zi:()=>ve});var s=h(1635),c=h(9808),x=h(3043),y=h(9953),E=h(1589),R=h(633),_=h(9605),A=h(9760),H=h(5778),O=h(6009),se=h(2622),V=h(9457);const B=":not([disabled])",T="[disabled]",ve=(()=>{class de extends x.${appearanceChanged($,Z){$!==Z&&(this.classList.add(Z),this.classList.remove($))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const $=this.defaultSlottedContent.filter(Z=>Z.nodeType===Node.ELEMENT_NODE);1===$.length&&$[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}return(0,s.Cg)([c.CF],de.prototype,"appearance",void 0),de})().compose({baseName:"button",baseClass:x.$,template:(de,G)=>y.q`
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
        ${(0,E.K)("control")}
    >
        ${(0,_.LT)(de,G)}
        <span class="content" part="content">
            <slot ${(0,R.e)("defaultSlottedContent")}></slot>
        </span>
        ${(0,_.aO)(de,G)}
    </button>
`,styles:(de,G)=>A.A`
    :host(${B}) .control {
      cursor: pointer;
    }

    :host(${T}) .control {
      cursor: ${H.Z};
    }

    @media (forced-colors: none) {
      :host(${T}) .control {
        opacity: ${V.qB4};
      }
    }

    ${(0,O.wQ)(de,G,B,T)}
  `.withBehaviors((0,se.f)("neutral",(0,O._9)(de,G,B,T)),(0,se.f)("accent",(0,O.Vw)(de,G,B,T)),(0,se.f)("lightweight",(0,O.ZI)(de,G,B,T)),(0,se.f)("outline",(0,O.LA)(de,G,B,T)),(0,se.f)("stealth",(0,O.ss)(de,G,B,T))),shadowOptions:{delegatesFocus:!0}})},5409:(rt,pe,h)=>{h.d(pe,{z1:()=>de});var s=h(1635),c=h(4632);class x extends c.g{}var y=h(4645),E=h(9953),_=h(4192),b=h(9808),A=h(3595),H=h(9457),O=h(4585),se=h(9347),V=h(9760),B=h(8322),T=h(4954),W=h(3226),te=h(2783);const de=(()=>{class $ extends x{cardFillColorChanged(ee,z){if(z){const le=(0,A.Hs)(z);null!==le&&(this.neutralPaletteSource=z,H.pfK.setValueFor(this,O.q.create(le.r,le.g,le.b)))}}neutralPaletteSourceChanged(ee,z){if(z){const le=(0,A.Hs)(z),K=O.q.create(le.r,le.g,le.b);H.roJ.setValueFor(this,se.p.create(K))}}handleChange(ee,z){this.cardFillColor||H.pfK.setValueFor(this,le=>H.M3E.getValueFor(le).evaluate(le,H.pfK.getValueFor(ee)).rest)}connectedCallback(){super.connectedCallback();const ee=(0,y.Z)(this);if(ee){const z=_.cP.getNotifier(ee);z.subscribe(this,"fillColor"),z.subscribe(this,"neutralPalette"),this.handleChange(ee,"fillColor")}}}return(0,s.Cg)([(0,b.CF)({attribute:"card-fill-color",mode:"fromView"})],$.prototype,"cardFillColor",void 0),(0,s.Cg)([(0,b.CF)({attribute:"neutral-palette-source",mode:"fromView"})],$.prototype,"neutralPaletteSource",void 0),$})().compose({baseName:"card",baseClass:x,template:($,Z)=>E.q`
    <slot></slot>
`,styles:($,Z)=>V.A`
    ${(0,B.V)("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${H.pfK};
      color: ${H.lHw};
      border: calc(${H.XAH} * 1px) solid ${H.ppm};
      border-radius: calc(${H.JUW} * 1px);
      box-shadow: ${te.eq};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors((0,T.mr)(V.A`
        :host {
          background: ${W.A.Canvas};
          color: ${W.A.CanvasText};
        }
      `))})},9684:(rt,pe,h)=>{h.d(pe,{c:()=>ee});var s=h(742),c=h(9808),x=h(4192),y=h(7153),E=h(8746),R=h(4632);class _ extends R.g{}class b extends((0,E.dx)(_)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let A=(()=>{class le extends b{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=L=>{this.readOnly||L.key!==y.gG||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.clickHandler=L=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}return(0,s.Cg)([(0,c.CF)({attribute:"readonly",mode:"boolean"})],le.prototype,"readOnly",void 0),(0,s.Cg)([x.sH],le.prototype,"defaultSlottedNodes",void 0),(0,s.Cg)([x.sH],le.prototype,"indeterminate",void 0),le})();var H=h(9953),O=h(633),V=h(9760),B=h(8322),T=h(4932),W=h(5778),te=h(4954),ve=h(3226),re=h(4583),de=h(9457),G=h(9709),$=h(5532);const ee=A.compose({baseName:"checkbox",template:(le,K)=>H.q`
    <template
        role="checkbox"
        aria-checked="${L=>L.checked}"
        aria-required="${L=>L.required}"
        aria-disabled="${L=>L.disabled}"
        aria-readonly="${L=>L.readOnly}"
        tabindex="${L=>L.disabled?null:0}"
        @keypress="${(L,P)=>L.keypressHandler(P.event)}"
        @click="${(L,P)=>L.clickHandler(P.event)}"
        class="${L=>L.readOnly?"readonly":""} ${L=>L.checked?"checked":""} ${L=>L.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${K.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${K.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${L=>L.defaultSlottedNodes&&L.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${(0,O.e)("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(le,K)=>V.A`
    ${(0,B.V)("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${re.D} / 2 + ${de.vR1}) * 1px);
      height: calc((${re.D} / 2 + ${de.vR1}) * 1px);
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
      ${G.Ah}
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

    :host(:${T.N}) .control {
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
      cursor: ${W.Z};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${de.qB4};
    }
  `.withBehaviors((0,te.mr)(V.A`
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
        :host(:${T.N}) .control {
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
      `)),checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',indeterminateIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>\n    </svg>\n  '})},9347:(rt,pe,h)=>{h.d(pe,{p:()=>G});var s=h(4219),c=h(6691),x=h(7591),y=h(9467),E=h(1379);function R(Z,ee,z){return isNaN(Z)||Z<=0?ee:Z>=1?z:new y.M((0,s.Cc)(Z,ee.r,z.r),(0,s.Cc)(Z,ee.g,z.g),(0,s.Cc)(Z,ee.b,z.b),(0,s.Cc)(Z,ee.a,z.a))}var B=h(4585);function T(Z,ee,z=0,le=Z.length-1){if(le===z)return Z[z];const K=Math.floor((le-z)/2)+z;return ee(Z[K])?T(Z,ee,z,K):T(Z,ee,K+1,le)}var W=h(9731),te=h(9163);const ve={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1},G=Object.freeze({create:function re(Z,ee,z){return G.from("number"==typeof Z?B.q.create(Z,ee,z):Z)},from:function de(Z,ee){return(0,B.m)(Z)?$.from(Z,ee):$.from(B.q.create(Z.r,Z.g,Z.b),ee)}});class ${constructor(ee,z){this.closestIndexCache=new Map,this.source=ee,this.swatches=z,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(ee,z,le,K){void 0===le&&(le=this.closestIndexOf(ee));let L=this.swatches;const P=this.lastIndex;let J=le;return void 0===K&&(K=(0,W.F)(ee)),-1===K&&(L=this.reversedSwatches,J=P-J),T(L,ge=>(0,te.v)(ee,ge)>=z,J,P)}get(ee){return this.swatches[ee]||this.swatches[(0,s.qE)(ee,0,this.lastIndex)]}closestIndexOf(ee){if(this.closestIndexCache.has(ee.relativeLuminance))return this.closestIndexCache.get(ee.relativeLuminance);let z=this.swatches.indexOf(ee);if(-1!==z)return this.closestIndexCache.set(ee.relativeLuminance,z),z;const le=this.swatches.reduce((K,L)=>Math.abs(L.relativeLuminance-ee.relativeLuminance)<Math.abs(K.relativeLuminance-ee.relativeLuminance)?L:K);return z=this.swatches.indexOf(le),this.closestIndexCache.set(ee.relativeLuminance,z),z}static saturationBump(ee,z){const K=(0,c.SU)(ee).s,L=(0,c.SU)(z);if(L.s<K){const P=new x.D(L.h,K,L.l);return(0,c.QX)(P)}return z}static ramp(ee){const z=ee/100;return z>.5?(z-.5)/.5:2*z}static createHighResolutionPalette(ee){const z=[],le=(0,c.mi)(y.M.fromObject(ee).roundToPrecision(4)),K=(0,c.eK)(new E.h(0,le.a,le.b)).clamp().roundToPrecision(4),L=(0,c.eK)(new E.h(50,le.a,le.b)).clamp().roundToPrecision(4),P=(0,c.eK)(new E.h(100,le.a,le.b)).clamp().roundToPrecision(4),J=new y.M(0,0,0),X=new y.M(1,1,1),ge=P.equalValue(X)?0:14,Be=K.equalValue(J)?0:14;for(let Le=100+ge;Le>=0-Be;Le-=.5){let nt;nt=Le<0?R(Le/Be+1,J,K):Le<=50?R($.ramp(Le),K,L):Le<=100?R($.ramp(Le),L,P):R((Le-100)/ge,P,X),nt=$.saturationBump(L,nt).roundToPrecision(4),z.push(B.q.from(nt))}return new $(ee,z)}static adjustEnd(ee,z,le,K){const L=-1===K?z.swatches:z.reversedSwatches,P=ge=>{const Be=z.closestIndexOf(ge);return 1===K?z.lastIndex-Be:Be};1===K&&le.reverse();const J=ee(le[le.length-2]);if((0,s.l)((0,te.v)(le[le.length-1],le[le.length-2]),2)<J){le.pop();const Be=P(z.colorContrast(L[z.lastIndex],J,void 0,K)),Le=P(le[le.length-2]);let Pe=1;for(let oe=le.length-(Be-Le)-1;oe<le.length;oe++){const Qe=P(le[oe]);le[oe]=L[oe===le.length-1?z.lastIndex:Qe+Pe],Pe++}}1===K&&le.reverse()}static createColorPaletteByContrast(ee,z){const le=$.createHighResolutionPalette(ee),K=J=>(0,s.l)(z.stepContrast+z.stepContrast*(1-J.relativeLuminance)*z.stepContrastRamp,2),L=[];let P=z.preserveSource?ee:le.swatches[0];L.push(P);do{const J=K(P);P=le.colorContrast(P,J,void 0,1),L.push(P)}while(P.relativeLuminance>0);if(z.preserveSource){P=ee;do{const J=K(P);P=le.colorContrast(P,J,void 0,-1),L.unshift(P)}while(P.relativeLuminance<1)}return this.adjustEnd(K,le,L,-1),z.preserveSource&&this.adjustEnd(K,le,L,1),L}static from(ee,z){const le=void 0===z?ve:Object.assign(Object.assign({},ve),z);return new $(ee,Object.freeze($.createColorPaletteByContrast(ee,le)))}}},4585:(rt,pe,h)=>{h.d(pe,{m:()=>E,q:()=>y});var s=h(9467),c=h(6691),x=h(9163);const y=Object.freeze({create:(_,b,A)=>new R(_,b,A),from:_=>new R(_.r,_.g,_.b)});function E(_){const b={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const A in b)if(typeof b[A]!=typeof _[A])return!1;return!0}class R extends s.M{constructor(b,A,H){super(b,A,H,1),this.toColorString=this.toStringHexRGB,this.contrast=x.v.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=(0,c.Z8)(this)}static fromObject(b){return new R(b.r,b.g,b.b)}}},4150:(rt,pe,h)=>{h.d(pe,{Z:()=>c,y:()=>x});var s=h(4585);function c(y){return s.q.create(y,y,y)}var x=function(y){return y[y.LightMode=.98]="LightMode",y[y.DarkMode=.15]="DarkMode",y}(x||{})},9731:(rt,pe,h)=>{h.d(pe,{F:()=>c});var s=h(8313);function c(x){return(0,s.H)(x)?-1:1}},8313:(rt,pe,h)=>{h.d(pe,{H:()=>c});const s=(-.1+Math.sqrt(.21))/2;function c(x){return x.relativeLuminance<=s}},9163:(rt,pe,h)=>{function s(c,x){return((c.relativeLuminance>x.relativeLuminance?c:x).relativeLuminance+.05)/((c.relativeLuminance>x.relativeLuminance?x:c).relativeLuminance+.05)}h.d(pe,{v:()=>s})},9457:(rt,pe,h)=>{h.d(pe,{fdT:()=>Es,amQ:()=>wo,KJd:()=>ho,OS0:()=>Kr,IRh:()=>wr,QL0:()=>kl,iLG:()=>ll,YLI:()=>Ur,W_m:()=>As,uB0:()=>va,cDQ:()=>Lo,eNp:()=>fo,enQ:()=>qn,Sss:()=>xn,li_:()=>_n,OCo:()=>Fi,PbG:()=>gn,Brd:()=>Mn,vR1:()=>gi,oWd:()=>Gt,qB4:()=>nn,pfK:()=>Yi,fFd:()=>ps,WNM:()=>Wa,vdx:()=>Pn,J_F:()=>Xs,BgV:()=>cs,XKp:()=>Ss,l_5:()=>ma,JUW:()=>hi,eQf:()=>as,X4G:()=>Xo,XtK:()=>Qo,MPS:()=>Xr,wsB:()=>eo,IpM:()=>Qn,ymW:()=>Tn,F_x:()=>Oe,jMl:()=>Ee,VYG:()=>Br,leE:()=>Ce,M3E:()=>pr,F7s:()=>Fo,DKg:()=>Pl,Vtk:()=>oc,Rgz:()=>Ol,jIq:()=>ya,v8G:()=>Rl,wOW:()=>Nl,UBo:()=>Ll,oO8:()=>Yo,EE_:()=>Zo,WlO:()=>dl,LIX:()=>$a,cRz:()=>Ba,g8A:()=>Ua,LnO:()=>Fa,lHw:()=>cr,Tkp:()=>Tr,roJ:()=>Jn,MYG:()=>Ha,FZQ:()=>za,H7x:()=>Zs,Fly:()=>to,hb6:()=>us,mbK:()=>wa,WvW:()=>_a,o_b:()=>hs,ppm:()=>Zr,I21:()=>Ds,p4W:()=>Ms,vA6:()=>Ta,nF5:()=>Jo,XAH:()=>Fn,Kgr:()=>Ci,$AV:()=>Zi,Z69:()=>nr,kSN:()=>ft,dUM:()=>qe,FrF:()=>Et,tDF:()=>pt,wxg:()=>fn,e9J:()=>qt,YVy:()=>In,BZ8:()=>At,vrI:()=>ii,TFp:()=>mi,Knw:()=>Vn,Oc7:()=>$n,aVA:()=>Ji,PPT:()=>Gr,bcZ:()=>zr,FrW:()=>Bt,onW:()=>Ne,weJ:()=>yt,_UC:()=>st,x3P:()=>Wt,Z67:()=>zt,X7g:()=>Ht,Ygb:()=>Un,uwi:()=>Qt});var s=h(1859),c=h(9748),x=h(9347),y=h(3595),E=h(4585);const R=E.q.create(1,1,1),_=E.q.create(0,0,0),b=E.q.create(.5,.5,.5),A=(0,y.Hs)("#0078D4"),H=E.q.create(A.r,A.g,A.b);function se(Y,St,bn,Wn,Li){const Nr=xr=>xr.contrast(R)>=Li?R:_,Ki=Nr(Y),fi=Nr(St);return{rest:Ki,hover:fi,active:Ki.relativeLuminance===fi.relativeLuminance?Ki:Nr(bn),focus:Nr(Wn)}}var V=h(9467),B=h(6691),oe=h(9731),Qe=h(9163);class tt{constructor(St,bn,Wn,Li){this.toColorString=()=>this.cssGradient,this.contrast=Qe.v.bind(null,this),this.createCSS=this.toColorString,this.color=new V.M(St,bn,Wn),this.cssGradient=Li,this.relativeLuminance=(0,B.Z8)(this.color),this.r=St,this.g=bn,this.b=Wn}static fromObject(St,bn){return new tt(St.r,St.g,St.b,bn)}}const mt=new V.M(0,0,0),Tt=new V.M(1,1,1);function ct(Y,St,bn,Wn,Li,Nr,Ki,fi,Vr=10,po=!1){const xr=Y.closestIndexOf(St);function Bo(Ye){if(po){const Ft=Y.closestIndexOf(St),kt=Y.get(Ft),vn=Ye.relativeLuminance<St.relativeLuminance?mt:Tt,ti=(0,B.Ep)((0,y.Hs)(Ye.toColorString()),(0,y.Hs)(kt.toColorString()),vn).roundToPrecision(2),li=function Pe(Y,St){return St.a>=1?St:St.a<=0?new V.M(Y.r,Y.g,Y.b,1):new V.M(St.a*St.r+(1-St.a)*Y.r,St.a*St.g+(1-St.a)*Y.g,St.a*St.b+(1-St.a)*Y.b,1)}((0,y.Hs)(St.toColorString()),ti);return E.q.from(li)}return Ye}void 0===fi&&(fi=(0,oe.F)(St));const xa=xr+fi*bn,S=xa+fi*(Wn-bn),N=xa+fi*(Li-bn),D=xa+fi*(Nr-bn),U=-1===fi?0:100-Vr,ye=-1===fi?Vr:100;function Me(Ye,Ft){const kt=Y.get(Ye);if(Ft){const vn=Y.get(Ye+fi*Ki),ti=-1===fi?vn:kt,li=-1===fi?kt:vn,Lr=`linear-gradient(${Bo(ti).toColorString()} ${U}%, ${Bo(li).toColorString()} ${ye}%)`;return tt.fromObject(ti,Lr)}return Bo(kt)}return{rest:Me(xa,!0),hover:Me(S,!0),active:Me(N,!1),focus:Me(D,!0)}}var ue=h(8313);function _e(Y,St,bn,Wn,Li,Nr,Ki,fi){null==fi&&(fi=(0,oe.F)(St));const Vr=Y.closestIndexOf(Y.colorContrast(St,bn));return{rest:Y.get(Vr+fi*Wn),hover:Y.get(Vr+fi*Li),active:Y.get(Vr+fi*Nr),focus:Y.get(Vr+fi*Ki)}}function Fe(Y,St,bn,Wn,Li,Nr,Ki){const fi=Y.closestIndexOf(St);return null==Ki&&(Ki=(0,oe.F)(St)),{rest:Y.get(fi+Ki*bn),hover:Y.get(fi+Ki*Wn),active:Y.get(fi+Ki*Li),focus:Y.get(fi+Ki*Nr)}}function at(Y,St,bn,Wn,Li,Nr,Ki=void 0,fi,Vr,po,xr,Bo=void 0){return(0,ue.H)(St)?Fe(Y,St,fi,Vr,po,xr,Bo):Fe(Y,St,bn,Wn,Li,Nr,Ki)}var fe=h(4150);function j(Y,St){return Y.closestIndexOf((0,fe.Z)(St))}function Ve(Y,St,bn){return Y.get(j(Y,St)+-1*bn)}const{create:$e}=s.G;function Xe(Y){return s.G.create({name:Y,cssCustomPropertyName:null})}const Gt=$e("direction").withDefault(c.O.ltr),nn=$e("disabled-opacity").withDefault(.3),xn=$e("base-height-multiplier").withDefault(8),Mn=($e("base-horizontal-spacing-multiplier").withDefault(3),$e("density").withDefault(0)),gi=$e("design-unit").withDefault(4),gn=$e("control-corner-radius").withDefault(4),hi=$e("layer-corner-radius").withDefault(8),Fn=$e("stroke-width").withDefault(1),Pn=$e("focus-stroke-width").withDefault(2),Fi=$e("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),en=$e("font-weight").withDefault(400);function Nn(Y){return St=>{const bn=Y.getValueFor(St),Wn=en.getValueFor(St);if(bn.endsWith("px")){const Li=Number.parseFloat(bn.replace("px",""));if(Li<=12)return`"wght" ${Wn}, "opsz" 8`;if(Li>24)return`"wght" ${Wn}, "opsz" 36`}return`"wght" ${Wn}, "opsz" 10.5`}}const Ci=$e("type-ramp-base-font-size").withDefault("14px"),nr=$e("type-ramp-base-line-height").withDefault("20px"),Zi=$e("type-ramp-base-font-variations").withDefault(Nn(Ci)),ft=$e("type-ramp-minus-1-font-size").withDefault("12px"),Et=$e("type-ramp-minus-1-line-height").withDefault("16px"),qe=$e("type-ramp-minus-1-font-variations").withDefault(Nn(ft)),pt=$e("type-ramp-minus-2-font-size").withDefault("10px"),qt=$e("type-ramp-minus-2-line-height").withDefault("14px"),fn=$e("type-ramp-minus-2-font-variations").withDefault(Nn(pt)),In=$e("type-ramp-plus-1-font-size").withDefault("16px"),ii=$e("type-ramp-plus-1-line-height").withDefault("22px"),At=$e("type-ramp-plus-1-font-variations").withDefault(Nn(In)),mi=$e("type-ramp-plus-2-font-size").withDefault("20px"),$n=$e("type-ramp-plus-2-line-height").withDefault("26px"),Vn=$e("type-ramp-plus-2-font-variations").withDefault(Nn(mi)),Ji=$e("type-ramp-plus-3-font-size").withDefault("24px"),zr=$e("type-ramp-plus-3-line-height").withDefault("32px"),Gr=$e("type-ramp-plus-3-font-variations").withDefault(Nn(Ji)),Bt=$e("type-ramp-plus-4-font-size").withDefault("28px"),yt=$e("type-ramp-plus-4-line-height").withDefault("36px"),Ne=$e("type-ramp-plus-4-font-variations").withDefault(Nn(Bt)),st=$e("type-ramp-plus-5-font-size").withDefault("32px"),zt=$e("type-ramp-plus-5-line-height").withDefault("40px"),Wt=$e("type-ramp-plus-5-font-variations").withDefault(Nn(st)),Ht=$e("type-ramp-plus-6-font-size").withDefault("40px"),Qt=$e("type-ramp-plus-6-line-height").withDefault("52px"),Un=$e("type-ramp-plus-6-font-variations").withDefault(Nn(Ht)),_n=$e("base-layer-luminance").withDefault(fe.y.LightMode),Dn=Xe("accent-fill-rest-delta").withDefault(0),di=Xe("accent-fill-hover-delta").withDefault(-2),$i=Xe("accent-fill-active-delta").withDefault(-5),ki=Xe("accent-fill-focus-delta").withDefault(0),Ti=Xe("accent-foreground-rest-delta").withDefault(0),He=Xe("accent-foreground-hover-delta").withDefault(3),ot=Xe("accent-foreground-active-delta").withDefault(-8),et=Xe("accent-foreground-focus-delta").withDefault(0),Rt=Xe("neutral-fill-rest-delta").withDefault(-1),Mt=Xe("neutral-fill-hover-delta").withDefault(1),ln=Xe("neutral-fill-active-delta").withDefault(0),sn=Xe("neutral-fill-focus-delta").withDefault(0),ht=Xe("neutral-fill-input-rest-delta").withDefault(-1),vt=Xe("neutral-fill-input-hover-delta").withDefault(1),Ae=Xe("neutral-fill-input-active-delta").withDefault(0),ze=Xe("neutral-fill-input-focus-delta").withDefault(-2),Je=Xe("neutral-fill-input-alt-rest-delta").withDefault(2),ut=Xe("neutral-fill-input-alt-hover-delta").withDefault(4),Kt=Xe("neutral-fill-input-alt-active-delta").withDefault(6),Xt=Xe("neutral-fill-input-alt-focus-delta").withDefault(2),cn=Xe("neutral-fill-layer-rest-delta").withDefault(-2),En=Xe("neutral-fill-layer-hover-delta").withDefault(-3),mn=Xe("neutral-fill-layer-active-delta").withDefault(-3),wi=Xe("neutral-fill-layer-alt-rest-delta").withDefault(-1),vi=Xe("neutral-fill-secondary-rest-delta").withDefault(3),lr=Xe("neutral-fill-secondary-hover-delta").withDefault(2),Wr=Xe("neutral-fill-secondary-active-delta").withDefault(1),Cr=Xe("neutral-fill-secondary-focus-delta").withDefault(3),Ln=Xe("neutral-fill-stealth-rest-delta").withDefault(0),_t=Xe("neutral-fill-stealth-hover-delta").withDefault(3),p=Xe("neutral-fill-stealth-active-delta").withDefault(2),g=Xe("neutral-fill-stealth-focus-delta").withDefault(0),C=Xe("neutral-fill-strong-rest-delta").withDefault(0),Q=Xe("neutral-fill-strong-hover-delta").withDefault(8),me=Xe("neutral-fill-strong-active-delta").withDefault(-5),ke=Xe("neutral-fill-strong-focus-delta").withDefault(0),je=Xe("neutral-stroke-rest-delta").withDefault(8),It=Xe("neutral-stroke-hover-delta").withDefault(12),Vt=Xe("neutral-stroke-active-delta").withDefault(6),Ut=Xe("neutral-stroke-focus-delta").withDefault(8),hn=Xe("neutral-stroke-control-rest-delta").withDefault(3),Cn=Xe("neutral-stroke-control-hover-delta").withDefault(5),Hn=Xe("neutral-stroke-control-active-delta").withDefault(5),yi=Xe("neutral-stroke-control-focus-delta").withDefault(5),Si=Xe("neutral-stroke-divider-rest-delta").withDefault(4),Ri=Xe("neutral-stroke-layer-rest-delta").withDefault(3),Ui=Xe("neutral-stroke-layer-hover-delta").withDefault(3),sr=Xe("neutral-stroke-layer-active-delta").withDefault(3),Er=Xe("neutral-stroke-strong-hover-delta").withDefault(0),Co=Xe("neutral-stroke-strong-active-delta").withDefault(0),fr=Xe("neutral-stroke-strong-focus-delta").withDefault(0),as=$e("neutral-base-color").withDefault(b),Jn=Xe("neutral-palette").withDefault(Y=>x.p.from(as.getValueFor(Y))),Es=$e("accent-base-color").withDefault(H),zi=Xe("accent-palette").withDefault(Y=>x.p.from(Es.getValueFor(Y))),ls=Xe("neutral-layer-card-container-recipe").withDefault({evaluate:Y=>Ve(Jn.getValueFor(Y),_n.getValueFor(Y),cn.getValueFor(Y))}),No=($e("neutral-layer-card-container").withDefault(Y=>ls.getValueFor(Y).evaluate(Y)),Xe("neutral-layer-floating-recipe").withDefault({evaluate:Y=>function xe(Y,St,bn){return Y.get(j(Y,St)+bn)}(Jn.getValueFor(Y),_n.getValueFor(Y),cn.getValueFor(Y))})),Tr=$e("neutral-layer-floating").withDefault(Y=>No.getValueFor(Y).evaluate(Y)),qo=Xe("neutral-layer-1-recipe").withDefault({evaluate:Y=>function ce(Y,St){return Y.get(j(Y,St))}(Jn.getValueFor(Y),_n.getValueFor(Y))}),Mo=$e("neutral-layer-1").withDefault(Y=>qo.getValueFor(Y).evaluate(Y)),pa=Xe("neutral-layer-2-recipe").withDefault({evaluate:Y=>Ve(Jn.getValueFor(Y),_n.getValueFor(Y),cn.getValueFor(Y))}),ga=($e("neutral-layer-2").withDefault(Y=>pa.getValueFor(Y).evaluate(Y)),Xe("neutral-layer-3-recipe").withDefault({evaluate:Y=>function wt(Y,St,bn){return Y.get(j(Y,St)+-1*bn*2)}(Jn.getValueFor(Y),_n.getValueFor(Y),cn.getValueFor(Y))})),La=($e("neutral-layer-3").withDefault(Y=>ga.getValueFor(Y).evaluate(Y)),Xe("neutral-layer-4-recipe").withDefault({evaluate:Y=>function it(Y,St,bn){return Y.get(j(Y,St)+-1*bn*3)}(Jn.getValueFor(Y),_n.getValueFor(Y),cn.getValueFor(Y))})),Yi=($e("neutral-layer-4").withDefault(Y=>La.getValueFor(Y).evaluate(Y)),$e("fill-color").withDefault(Y=>Mo.getValueFor(Y)));var Or=function(Y){return Y[Y.normal=4.5]="normal",Y[Y.large=3]="large",Y}(Or||{});const Ts=Xe("accent-fill-recipe").withDefault({evaluate:(Y,St)=>function Ke(Y,St,bn,Wn,Li,Nr,Ki,fi,Vr,po,xr,Bo,xa,S){return(0,ue.H)(St)?_e(Y,St,Vr,po,xr,Bo,xa,S):_e(Y,St,bn,Wn,Li,Nr,Ki,fi)}(zi.getValueFor(Y),St||Yi.getValueFor(Y),5,Dn.getValueFor(Y),di.getValueFor(Y),$i.getValueFor(Y),ki.getValueFor(Y),void 0,8,Dn.getValueFor(Y),di.getValueFor(Y),$i.getValueFor(Y),ki.getValueFor(Y),void 0)}),wr=$e("accent-fill-rest").withDefault(Y=>Ts.getValueFor(Y).evaluate(Y).rest),Kr=$e("accent-fill-hover").withDefault(Y=>Ts.getValueFor(Y).evaluate(Y).hover),wo=$e("accent-fill-active").withDefault(Y=>Ts.getValueFor(Y).evaluate(Y).active),ho=$e("accent-fill-focus").withDefault(Y=>Ts.getValueFor(Y).evaluate(Y).focus),qr=Xe("foreground-on-accent-recipe").withDefault({evaluate:Y=>se(wr.getValueFor(Y),Kr.getValueFor(Y),wo.getValueFor(Y),ho.getValueFor(Y),Or.normal)}),ma=$e("foreground-on-accent-rest").withDefault(Y=>qr.getValueFor(Y).evaluate(Y).rest),Ss=$e("foreground-on-accent-hover").withDefault(Y=>qr.getValueFor(Y).evaluate(Y).hover),Xs=$e("foreground-on-accent-active").withDefault(Y=>qr.getValueFor(Y).evaluate(Y).active),cs=$e("foreground-on-accent-focus").withDefault(Y=>qr.getValueFor(Y).evaluate(Y).focus),Oi=Xe("accent-foreground-recipe").withDefault({evaluate:(Y,St)=>_e(zi.getValueFor(Y),St||Yi.getValueFor(Y),9.5,Ti.getValueFor(Y),He.getValueFor(Y),ot.getValueFor(Y),et.getValueFor(Y))}),As=$e("accent-foreground-rest").withDefault(Y=>Oi.getValueFor(Y).evaluate(Y).rest),Ur=$e("accent-foreground-hover").withDefault(Y=>Oi.getValueFor(Y).evaluate(Y).hover),kl=$e("accent-foreground-active").withDefault(Y=>Oi.getValueFor(Y).evaluate(Y).active),ll=$e("accent-foreground-focus").withDefault(Y=>Oi.getValueFor(Y).evaluate(Y).focus),Pr=Xe("accent-stroke-control-recipe").withDefault({evaluate:(Y,St)=>ct(Jn.getValueFor(Y),St||Yi.getValueFor(Y),-3,-3,-3,-3,10,1,void 0,!0)}),qn=$e("accent-stroke-control-rest").withDefault(Y=>Pr.getValueFor(Y).evaluate(Y,wr.getValueFor(Y)).rest),fo=$e("accent-stroke-control-hover").withDefault(Y=>Pr.getValueFor(Y).evaluate(Y,Kr.getValueFor(Y)).hover),va=$e("accent-stroke-control-active").withDefault(Y=>Pr.getValueFor(Y).evaluate(Y,wo.getValueFor(Y)).active),Lo=$e("accent-stroke-control-focus").withDefault(Y=>Pr.getValueFor(Y).evaluate(Y,ho.getValueFor(Y)).focus),Qr=Xe("neutral-fill-recipe").withDefault({evaluate:(Y,St)=>at(Jn.getValueFor(Y),St||Yi.getValueFor(Y),Rt.getValueFor(Y),Mt.getValueFor(Y),ln.getValueFor(Y),sn.getValueFor(Y),void 0,2,3,1,2,void 0)}),Fo=$e("neutral-fill-rest").withDefault(Y=>Qr.getValueFor(Y).evaluate(Y).rest),Qo=$e("neutral-fill-hover").withDefault(Y=>Qr.getValueFor(Y).evaluate(Y).hover),Xo=$e("neutral-fill-active").withDefault(Y=>Qr.getValueFor(Y).evaluate(Y).active),Br=($e("neutral-fill-focus").withDefault(Y=>Qr.getValueFor(Y).evaluate(Y).focus),Xe("neutral-fill-input-recipe").withDefault({evaluate:(Y,St)=>at(Jn.getValueFor(Y),St||Yi.getValueFor(Y),ht.getValueFor(Y),vt.getValueFor(Y),Ae.getValueFor(Y),ze.getValueFor(Y),void 0,2,3,1,0,void 0)})),Ce=$e("neutral-fill-input-rest").withDefault(Y=>Br.getValueFor(Y).evaluate(Y).rest),Ee=$e("neutral-fill-input-hover").withDefault(Y=>Br.getValueFor(Y).evaluate(Y).hover),Oe=($e("neutral-fill-input-active").withDefault(Y=>Br.getValueFor(Y).evaluate(Y).active),$e("neutral-fill-input-focus").withDefault(Y=>Br.getValueFor(Y).evaluate(Y).focus)),lt=Xe("neutral-fill-input-alt-recipe").withDefault({evaluate:(Y,St)=>at(Jn.getValueFor(Y),St||Yi.getValueFor(Y),Je.getValueFor(Y),ut.getValueFor(Y),Kt.getValueFor(Y),Xt.getValueFor(Y),1,Je.getValueFor(Y),Je.getValueFor(Y)-ut.getValueFor(Y),Je.getValueFor(Y)-Kt.getValueFor(Y),Xt.getValueFor(Y),1)}),Tn=$e("neutral-fill-input-alt-rest").withDefault(Y=>lt.getValueFor(Y).evaluate(Y).rest),Qn=$e("neutral-fill-input-alt-hover").withDefault(Y=>lt.getValueFor(Y).evaluate(Y).hover),Xr=$e("neutral-fill-input-alt-active").withDefault(Y=>lt.getValueFor(Y).evaluate(Y).active),eo=$e("neutral-fill-input-alt-focus").withDefault(Y=>lt.getValueFor(Y).evaluate(Y).focus),pr=Xe("neutral-fill-layer-recipe").withDefault({evaluate:(Y,St)=>Fe(Jn.getValueFor(Y),St||Yi.getValueFor(Y),cn.getValueFor(Y),En.getValueFor(Y),mn.getValueFor(Y),cn.getValueFor(Y),1)}),Ml=($e("neutral-fill-layer-rest").withDefault(Y=>pr.getValueFor(Y).evaluate(Y).rest),$e("neutral-fill-layer-hover").withDefault(Y=>pr.getValueFor(Y).evaluate(Y).hover),$e("neutral-fill-layer-active").withDefault(Y=>pr.getValueFor(Y).evaluate(Y).active),Xe("neutral-fill-layer-alt-recipe").withDefault({evaluate:(Y,St)=>Fe(Jn.getValueFor(Y),St||Yi.getValueFor(Y),wi.getValueFor(Y),wi.getValueFor(Y),wi.getValueFor(Y),wi.getValueFor(Y))})),ya=($e("neutral-fill-layer-alt-rest").withDefault(Y=>Ml.getValueFor(Y).evaluate(Y).rest),Xe("neutral-fill-secondary-recipe").withDefault({evaluate:(Y,St)=>Fe(Jn.getValueFor(Y),St||Yi.getValueFor(Y),vi.getValueFor(Y),lr.getValueFor(Y),Wr.getValueFor(Y),Cr.getValueFor(Y))})),Rl=$e("neutral-fill-secondary-rest").withDefault(Y=>ya.getValueFor(Y).evaluate(Y).rest),Ol=$e("neutral-fill-secondary-hover").withDefault(Y=>ya.getValueFor(Y).evaluate(Y).hover),Pl=$e("neutral-fill-secondary-active").withDefault(Y=>ya.getValueFor(Y).evaluate(Y).active),oc=$e("neutral-fill-secondary-focus").withDefault(Y=>ya.getValueFor(Y).evaluate(Y).focus),Zo=Xe("neutral-fill-stealth-recipe").withDefault({evaluate:(Y,St)=>Fe(Jn.getValueFor(Y),St||Yi.getValueFor(Y),Ln.getValueFor(Y),_t.getValueFor(Y),p.getValueFor(Y),g.getValueFor(Y))}),dl=$e("neutral-fill-stealth-rest").withDefault(Y=>Zo.getValueFor(Y).evaluate(Y).rest),Yo=$e("neutral-fill-stealth-hover").withDefault(Y=>Zo.getValueFor(Y).evaluate(Y).hover),Nl=$e("neutral-fill-stealth-active").withDefault(Y=>Zo.getValueFor(Y).evaluate(Y).active),Ll=$e("neutral-fill-stealth-focus").withDefault(Y=>Zo.getValueFor(Y).evaluate(Y).focus),ba=Xe("neutral-fill-strong-recipe").withDefault({evaluate:(Y,St)=>_e(Jn.getValueFor(Y),St||Yi.getValueFor(Y),4.5,C.getValueFor(Y),Q.getValueFor(Y),me.getValueFor(Y),ke.getValueFor(Y))}),Sr=($e("neutral-fill-strong-rest").withDefault(Y=>ba.getValueFor(Y).evaluate(Y).rest),$e("neutral-fill-strong-hover").withDefault(Y=>ba.getValueFor(Y).evaluate(Y).hover),$e("neutral-fill-strong-active").withDefault(Y=>ba.getValueFor(Y).evaluate(Y).active),$e("neutral-fill-strong-focus").withDefault(Y=>ba.getValueFor(Y).evaluate(Y).focus),Xe("neutral-foreground-recipe").withDefault({evaluate:(Y,St)=>_e(Jn.getValueFor(Y),St||Yi.getValueFor(Y),16,0,-19,-30,0)})),cr=$e("neutral-foreground-rest").withDefault(Y=>Sr.getValueFor(Y).evaluate(Y).rest),Fa=$e("neutral-foreground-hover").withDefault(Y=>Sr.getValueFor(Y).evaluate(Y).hover),$a=$e("neutral-foreground-active").withDefault(Y=>Sr.getValueFor(Y).evaluate(Y).active),Ua=($e("neutral-foreground-focus").withDefault(Y=>Sr.getValueFor(Y).evaluate(Y).focus),Xe("neutral-foreground-hint-recipe").withDefault({evaluate:(Y,St)=>function ie(Y,St,bn){return Y.colorContrast(St,bn)}(Jn.getValueFor(Y),St||Yi.getValueFor(Y),4.5)})),Ba=$e("neutral-foreground-hint").withDefault(Y=>Ua.getValueFor(Y).evaluate(Y)),ds=Xe("neutral-stroke-recipe").withDefault({evaluate:(Y,St)=>Fe(Jn.getValueFor(Y),St||Yi.getValueFor(Y),je.getValueFor(Y),It.getValueFor(Y),Vt.getValueFor(Y),Ut.getValueFor(Y))}),Ds=$e("neutral-stroke-rest").withDefault(Y=>ds.getValueFor(Y).evaluate(Y).rest),wa=$e("neutral-stroke-hover").withDefault(Y=>ds.getValueFor(Y).evaluate(Y).hover),Ha=$e("neutral-stroke-active").withDefault(Y=>ds.getValueFor(Y).evaluate(Y).active),ja=($e("neutral-stroke-focus").withDefault(Y=>ds.getValueFor(Y).evaluate(Y).focus),Xe("neutral-stroke-control-recipe").withDefault({evaluate:(Y,St)=>ct(Jn.getValueFor(Y),St||Yi.getValueFor(Y),hn.getValueFor(Y),Cn.getValueFor(Y),Hn.getValueFor(Y),yi.getValueFor(Y),5)})),to=$e("neutral-stroke-control-rest").withDefault(Y=>ja.getValueFor(Y).evaluate(Y).rest),Zs=$e("neutral-stroke-control-hover").withDefault(Y=>ja.getValueFor(Y).evaluate(Y).hover),za=$e("neutral-stroke-control-active").withDefault(Y=>ja.getValueFor(Y).evaluate(Y).active),hl=($e("neutral-stroke-control-focus").withDefault(Y=>ja.getValueFor(Y).evaluate(Y).focus),Xe("neutral-stroke-divider-recipe").withDefault({evaluate:(Y,St)=>function we(Y,St,bn){return Y.get(Y.closestIndexOf(St)+(0,oe.F)(St)*bn)}(Jn.getValueFor(Y),St||Yi.getValueFor(Y),Si.getValueFor(Y))})),us=$e("neutral-stroke-divider-rest").withDefault(Y=>hl.getValueFor(Y).evaluate(Y)),Ys=Xe("neutral-stroke-input-recipe").withDefault({evaluate:(Y,St)=>function Te(Y,St,bn,Wn,Li,Nr,Ki,fi){const Vr=Y.closestIndexOf(St),po=(0,oe.F)(St),xr=Vr+po*bn,Bo=xr+po*(Wn-bn),xa=xr+po*(Li-bn),S=xr+po*(Nr-bn),N=`calc(100% - ${fi})`;function D(U,ye){const Me=Y.get(U);if(ye){const Ye=Y.get(U+po*Ki),Ft=`linear-gradient(${Me.toColorString()} ${N}, ${Ye.toColorString()} ${N}, ${Ye.toColorString()})`;return tt.fromObject(Me,Ft)}return Me}return{rest:D(xr,!0),hover:D(Bo,!0),active:D(xa,!1),focus:D(S,!0)}}(Jn.getValueFor(Y),St||Yi.getValueFor(Y),hn.getValueFor(Y),Cn.getValueFor(Y),Hn.getValueFor(Y),yi.getValueFor(Y),20,Fn.getValueFor(Y)+"px")}),hs=$e("neutral-stroke-input-rest").withDefault(Y=>Ys.getValueFor(Y).evaluate(Y).rest),_a=$e("neutral-stroke-input-hover").withDefault(Y=>Ys.getValueFor(Y).evaluate(Y).hover),xs=($e("neutral-stroke-input-active").withDefault(Y=>Ys.getValueFor(Y).evaluate(Y).active),$e("neutral-stroke-input-focus").withDefault(Y=>Ys.getValueFor(Y).evaluate(Y).focus),Xe("neutral-stroke-layer-recipe").withDefault({evaluate:(Y,St)=>Fe(Jn.getValueFor(Y),St||Yi.getValueFor(Y),Ri.getValueFor(Y),Ui.getValueFor(Y),sr.getValueFor(Y),Ri.getValueFor(Y))})),Zr=$e("neutral-stroke-layer-rest").withDefault(Y=>xs.getValueFor(Y).evaluate(Y).rest),fs=($e("neutral-stroke-layer-hover").withDefault(Y=>xs.getValueFor(Y).evaluate(Y).hover),$e("neutral-stroke-layer-active").withDefault(Y=>xs.getValueFor(Y).evaluate(Y).active),Xe("neutral-stroke-strong-recipe").withDefault({evaluate:(Y,St)=>_e(Jn.getValueFor(Y),St||Yi.getValueFor(Y),5.5,0,Er.getValueFor(Y),Co.getValueFor(Y),fr.getValueFor(Y))})),Jo=$e("neutral-stroke-strong-rest").withDefault(Y=>fs.getValueFor(Y).evaluate(Y).rest),Ta=$e("neutral-stroke-strong-hover").withDefault(Y=>fs.getValueFor(Y).evaluate(Y).hover),Ms=$e("neutral-stroke-strong-active").withDefault(Y=>fs.getValueFor(Y).evaluate(Y).active),Fl=($e("neutral-stroke-strong-focus").withDefault(Y=>fs.getValueFor(Y).evaluate(Y).focus),Xe("focus-stroke-outer-recipe").withDefault({evaluate:Y=>function Nt(Y,St){return(0,ue.H)(St)?R:_}(Jn.getValueFor(Y),Yi.getValueFor(Y))})),Wa=$e("focus-stroke-outer").withDefault(Y=>Fl.getValueFor(Y).evaluate(Y)),fl=Xe("focus-stroke-inner-recipe").withDefault({evaluate:Y=>function Ge(Y,St,bn){return(0,ue.H)(St)?_:R}(zi.getValueFor(Y),Yi.getValueFor(Y),Wa.getValueFor(Y))}),ps=$e("focus-stroke-inner").withDefault(Y=>fl.getValueFor(Y).evaluate(Y)),Js=Xe("foreground-on-accent-large-recipe").withDefault({evaluate:Y=>se(wr.getValueFor(Y),Kr.getValueFor(Y),wo.getValueFor(Y),ho.getValueFor(Y),Or.large)}),be=($e("foreground-on-accent-rest-large").withDefault(Y=>Js.getValueFor(Y).evaluate(Y).rest),$e("foreground-on-accent-hover-large").withDefault(Y=>Js.getValueFor(Y).evaluate(Y,Kr.getValueFor(Y)).hover),$e("foreground-on-accent-active-large").withDefault(Y=>Js.getValueFor(Y).evaluate(Y,wo.getValueFor(Y)).active),$e("foreground-on-accent-focus-large").withDefault(Y=>Js.getValueFor(Y).evaluate(Y,ho.getValueFor(Y)).focus),$e("neutral-fill-inverse-rest-delta").withDefault(0)),Ze=$e("neutral-fill-inverse-hover-delta").withDefault(-3),$t=$e("neutral-fill-inverse-active-delta").withDefault(7),Yt=$e("neutral-fill-inverse-focus-delta").withDefault(0),ai=Xe("neutral-fill-inverse-recipe").withDefault({evaluate:(Y,St)=>function yn(Y,St,bn,Wn,Li,Nr){const Ki=(0,oe.F)(St),fi=Y.closestIndexOf(Y.colorContrast(St,14)),Vr=fi+Ki*Math.abs(bn-Wn);let xr,Bo;return(1===Ki?bn<Wn:Ki*bn>Ki*Wn)?(xr=fi,Bo=Vr):(xr=Vr,Bo=fi),{rest:Y.get(xr),hover:Y.get(Bo),active:Y.get(xr+Ki*Li),focus:Y.get(xr+Ki*Nr)}}(Jn.getValueFor(Y),St||Yi.getValueFor(Y),be.getValueFor(Y),Ze.getValueFor(Y),$t.getValueFor(Y),Yt.getValueFor(Y))});$e("neutral-fill-inverse-rest").withDefault(Y=>ai.getValueFor(Y).evaluate(Y).rest),$e("neutral-fill-inverse-hover").withDefault(Y=>ai.getValueFor(Y).evaluate(Y).hover),$e("neutral-fill-inverse-active").withDefault(Y=>ai.getValueFor(Y).evaluate(Y).active),$e("neutral-fill-inverse-focus").withDefault(Y=>ai.getValueFor(Y).evaluate(Y).focus)},882:(rt,pe,h)=>{h.d(pe,{m9:()=>B});var s=h(862),c=h(9953),x=h(8287),R=h(9760),_=h(3226),b=h(8322),A=h(4954),H=h(4583),O=h(9457);const B=class V extends s.z{}.compose({baseName:"progress-ring",template:(W,te)=>c.q`
    <template
        role="progressbar"
        aria-valuenow="${ve=>ve.value}"
        aria-valuemin="${ve=>ve.min}"
        aria-valuemax="${ve=>ve.max}"
        class="${ve=>ve.paused?"paused":""}"
    >
        ${(0,x.z)(ve=>"number"==typeof ve.value,c.q`
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
                    ${te.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(W,te)=>R.A`
    ${(0,b.V)("flex")} :host {
      align-items: center;
      height: calc(${H.D} * 1px);
      width: calc(${H.D} * 1px);
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
  `.withBehaviors((0,A.mr)(R.A`
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
      `)),indeterminateIndicator:'\n    <svg class="progress" part="progress" viewBox="0 0 16 16">\n        <circle\n            class="background"\n            part="background"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n        <circle\n            class="indeterminate-indicator-1"\n            part="indeterminate-indicator-1"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n    </svg>\n  '})},5017:(rt,pe,h)=>{h.d(pe,{_0:()=>B});var s=h(742),c=h(9808),x=h(4632);let y=(()=>{class W extends x.g{constructor(){super(...arguments),this.shape="rect"}}return(0,s.Cg)([c.CF],W.prototype,"fill",void 0),(0,s.Cg)([c.CF],W.prototype,"shape",void 0),(0,s.Cg)([c.CF],W.prototype,"pattern",void 0),(0,s.Cg)([(0,c.CF)({mode:"boolean"})],W.prototype,"shimmer",void 0),W})();var E=h(9953),R=h(8287),b=h(9760),A=h(8322),H=h(4954),O=h(3226),se=h(9457);const B=y.compose({baseName:"skeleton",template:(W,te)=>E.q`
    <template
        class="${ve=>"circle"===ve.shape?"circle":"rect"}"
        pattern="${ve=>ve.pattern}"
        ?shimmer="${ve=>ve.shimmer}"
    >
        ${(0,R.z)(ve=>!0===ve.shimmer,E.q`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${ve=>ve.pattern}" role="presentation">
            <img class="pattern" src="${ve=>ve.pattern}" />
        </object>
        <slot></slot>
    </template>
`,styles:(W,te)=>b.A`
    ${(0,A.V)("block")} :host {
      --skeleton-fill-default: ${se.v8G};
      overflow: hidden;
      width: 100%;
      position: relative;
      background-color: var(--skeleton-fill, var(--skeleton-fill-default));
      --skeleton-animation-gradient-default: linear-gradient(
        270deg,
        var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
        ${se.Rgz} 51%,
        var(--skeleton-fill, var(--skeleton-fill-default)) 100%
      );
      --skeleton-animation-timing-default: ease-in-out;
    }

    :host(.rect) {
      border-radius: calc(${se.PbG} * 1px);
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

    ${(0,A.V)("block")} span.shimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: var(--skeleton-animation-gradient, var(--skeleton-animation-gradient-default));
      background-size: 0px 0px / 90% 100%;
      background-repeat: no-repeat;
      background-color: var(--skeleton-animation-fill, ${se.v8G});
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
  `.withBehaviors((0,H.mr)(b.A`
        :host{
          background-color: ${O.A.CanvasText};
        }
      `))})},2783:(rt,pe,h)=>{h.d(pe,{Cw:()=>re,H0:()=>te,eq:()=>H,tf:()=>T});var s=h(1859);const E=s.G.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(de,G,$)=>{let Z=.12,ee=.14;return G>16&&(Z=.2,ee=.24),`0 0 2px rgba(0, 0, 0, ${Z}), 0 calc(${G} * 0.5px) calc((${G} * 1px)) rgba(0, 0, 0, ${ee})`}}),R=s.G.create("elevation-shadow-card-rest-size").withDefault(4),_=s.G.create("elevation-shadow-card-hover-size").withDefault(8),b=s.G.create("elevation-shadow-card-active-size").withDefault(0),A=s.G.create("elevation-shadow-card-focus-size").withDefault(8),H=s.G.create("elevation-shadow-card-rest").withDefault(de=>E.getValueFor(de).evaluate(de,R.getValueFor(de))),B=(s.G.create("elevation-shadow-card-hover").withDefault(de=>E.getValueFor(de).evaluate(de,_.getValueFor(de))),s.G.create("elevation-shadow-card-active").withDefault(de=>E.getValueFor(de).evaluate(de,b.getValueFor(de))),s.G.create("elevation-shadow-card-focus").withDefault(de=>E.getValueFor(de).evaluate(de,A.getValueFor(de))),s.G.create("elevation-shadow-tooltip-size").withDefault(16)),T=s.G.create("elevation-shadow-tooltip").withDefault(de=>E.getValueFor(de).evaluate(de,B.getValueFor(de))),W=s.G.create("elevation-shadow-flyout-size").withDefault(32),te=s.G.create("elevation-shadow-flyout").withDefault(de=>E.getValueFor(de).evaluate(de,W.getValueFor(de))),ve=s.G.create("elevation-shadow-dialog-size").withDefault(128),re=s.G.create("elevation-shadow-dialog").withDefault(de=>E.getValueFor(de).evaluate(de,ve.getValueFor(de)))},5532:(rt,pe,h)=>{h.d(pe,{W:()=>x,v:()=>y});var s=h(9760),c=h(9457);const x=s.L`
  outline: calc(${c.vdx} * 1px) solid ${c.WNM};
  outline-offset: calc(${c.vdx} * -1px);
`,y=s.L`
  outline: calc(${c.vdx} * 1px) solid ${c.WNM};
  outline-offset: calc(${c.XAH} * 1px);
`},6009:(rt,pe,h)=>{h.d(pe,{LA:()=>T,Vw:()=>se,ZI:()=>B,_9:()=>O,ss:()=>W,wQ:()=>H});var s=h(9760),c=h(3226),x=h(8322),y=h(4932),E=h(4954),R=h(4583),_=h(9457),b=h(9709),A=h(5532);const H=(te,ve,re,de="[disabled]")=>s.A`
    ${(0,x.V)("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${b.Ah}
      height: calc(${R.D} * 1px);
      min-width: calc(${R.D} * 1px);
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

    .control:${y.N} {
      ${A.W}
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
  `,O=(te,ve,re,de="[disabled]")=>s.A`
    .control {
      background: padding-box linear-gradient(${_.F7s}, ${_.F7s}),
        border-box ${_.Fly};
    }

    :host(${re}:hover) .control {
      background: padding-box linear-gradient(${_.XtK}, ${_.XtK}),
        border-box ${_.H7x};
    }

    :host(${re}:active) .control {
      background: padding-box linear-gradient(${_.X4G}, ${_.X4G}),
        border-box ${_.FZQ};
    }

    :host(${de}) .control {
      background: padding-box linear-gradient(${_.F7s}, ${_.F7s}),
        border-box ${_.I21};
    }
  `.withBehaviors((0,E.mr)(s.A`
        .control {
          background: ${c.A.ButtonFace};
          border-color: ${c.A.ButtonText};
          color: ${c.A.ButtonText};
        }

        :host(${re}:hover) .control,
        :host(${re}:active) .control {
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

        .control:${y.N} {
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
    `)),se=(te,ve,re,de="[disabled]")=>s.A`
    .control {
      background: padding-box linear-gradient(${_.IRh}, ${_.IRh}),
        border-box ${_.enQ};
      color: ${_.l_5};
    }

    :host(${re}:hover) .control {
      background: padding-box linear-gradient(${_.OS0}, ${_.OS0}),
        border-box ${_.eNp};
      color: ${_.XKp};
    }

    :host(${re}:active) .control {
      background: padding-box linear-gradient(${_.amQ}, ${_.amQ}),
        border-box ${_.uB0};
      color: ${_.J_F};
    }

    :host(${de}) .control {
      background: ${_.IRh};
    }

    .control:${y.N} {
      box-shadow: 0 0 0 calc(${_.vdx} * 1px) ${_.fFd} inset !important;
    }
  `.withBehaviors((0,E.mr)(s.A`
        .control {
          forced-color-adjust: none;
          background: ${c.A.Highlight};
          color: ${c.A.HighlightText};
        }

        :host(${re}:hover) .control,
        :host(${re}:active) .control {
          background: ${c.A.HighlightText};
          border-color: ${c.A.Highlight};
          color: ${c.A.Highlight};
        }

        :host(${de}) .control {
          background: transparent;
          border-color: ${c.A.GrayText};
          color: ${c.A.GrayText};
        }

        .control:${y.N} {
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
      `)),B=(te,ve,re,de="[disabled]")=>s.A`
    :host {
      color: ${_.W_m};
    }

    .control {
      background: ${_.WlO};
    }

    :host(${re}:hover) .control {
      background: ${_.oO8};
      color: ${_.YLI};
    }

    :host(${re}:active) .control {
      background: ${_.wOW};
      color: ${_.QL0};
    }

    :host(${de}) .control {
      background: ${_.WlO};
    }
  `.withBehaviors((0,E.mr)(s.A`
        :host {
          color: ${c.A.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${re}:hover) .control,
        :host(${re}:active) .control {
          background: transparent;
          border-color: ${c.A.ButtonText};
          color: ${c.A.ButtonText};
        }

        :host(${de}) .control {
          background: transparent;
          color: ${c.A.GrayText};
        }

        .control:${y.N} {
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
      `)),T=(te,ve,re,de="[disabled]")=>s.A`
    .control {
      background: transparent !important;
      border-color: ${_.I21};
    }

    :host(${re}:hover) .control {
      border-color: ${_.mbK};
    }

    :host(${re}:active) .control {
      border-color: ${_.MYG};
    }

    :host(${de}) .control {
      background: transparent !important;
      border-color: ${_.I21};
    }
  `.withBehaviors((0,E.mr)(s.A`
        .control {
          border-color: ${c.A.ButtonText};
          color: ${c.A.ButtonText};
        }

        :host(${re}:hover) .control,
        :host(${re}:active) .control {
          background: ${c.A.HighlightText};
          border-color: ${c.A.Highlight};
          color: ${c.A.Highlight};
        }

        :host(${de}) .control {
          border-color: ${c.A.GrayText};
          color: ${c.A.GrayText};
        }

        .control:${y.N} {
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
      `)),W=(te,ve,re,de="[disabled]")=>s.A`
    .control {
      background: ${_.WlO};
    }

    :host(${re}:hover) .control {
      background: ${_.oO8};
    }

    :host(${re}:active) .control {
      background: ${_.wOW};
    }

    :host(${de}) .control {
      background: ${_.WlO};
    }
  `.withBehaviors((0,E.mr)(s.A`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${c.A.ButtonText};
        }

        :host(${re}:hover) .control,
        :host(${re}:active) .control {
          background: transparent;
          border-color: ${c.A.ButtonText};
          color: ${c.A.ButtonText};
        }

        :host(${de}) .control {
          background: transparent;
          color: ${c.A.GrayText};
        }
        
        .control:${y.N} {
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
      `))},3928:(rt,pe,h)=>{h.d(pe,{Tv:()=>T,aB:()=>V,dM:()=>W,lb:()=>te,y$:()=>B});var s=h(9760),c=h(1859),x=h(5778),y=h(3226),E=h(9457),R=h(9709),_=h(4583),b=h(5532);const A=c.G.create("input-placeholder-rest").withDefault(ve=>{const re=E.VYG.getValueFor(ve);return E.g8A.getValueFor(ve).evaluate(ve,re.evaluate(ve).rest)}),H=c.G.create("input-placeholder-hover").withDefault(ve=>{const re=E.VYG.getValueFor(ve);return E.g8A.getValueFor(ve).evaluate(ve,re.evaluate(ve).hover)}),O=c.G.create("input-filled-placeholder-rest").withDefault(ve=>{const re=E.jIq.getValueFor(ve);return E.g8A.getValueFor(ve).evaluate(ve,re.evaluate(ve).rest)}),se=c.G.create("input-filled-placeholder-hover").withDefault(ve=>{const re=E.jIq.getValueFor(ve);return E.g8A.getValueFor(ve).evaluate(ve,re.evaluate(ve).hover)}),V=(ve,re,de)=>s.A`
  :host {
    ${R.Ah}
    color: ${E.lHw};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${de} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${E.XAH} * 1px) solid transparent;
    border-radius: calc(${E.PbG} * 1px);
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
    color: ${E.lHw};
    cursor: pointer;
    ${R.Ah}
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
    cursor: ${x.Z};
  }

  :host([disabled]) {
    opacity: ${E.qB4};
  }
`,B=(ve,re,de)=>s.A`
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
      height: calc(${E.vdx} * 1px);
      bottom: 0;
      border-bottom: calc(${E.vdx} * 1px) solid ${E.IRh};
      border-bottom-left-radius: calc(${E.PbG} * 1px);
      border-bottom-right-radius: calc(${E.PbG} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,T=(ve,re,de,G=":not([disabled]):not(:focus-within)")=>s.A`
  ${de} {
    background: padding-box linear-gradient(${E.leE}, ${E.leE}),
      border-box ${E.o_b};
  }

  :host(${G}:hover) ${de} {
    background: padding-box linear-gradient(${E.jMl}, ${E.jMl}),
      border-box ${E.WvW};
  }

  :host(:not([disabled]):focus-within) ${de} {
    background: padding-box linear-gradient(${E.F_x}, ${E.F_x}),
      border-box ${E.o_b};
  }
  
  :host([disabled]) ${de} {
    background: padding-box linear-gradient(${E.leE}, ${E.leE}),
      border-box ${E.I21};
  }

  .control::placeholder {
    color: ${A};
  }

  :host(${G}:hover) .control::placeholder {
    color: ${H};
  }
`,W=(ve,re,de,G=":not([disabled]):not(:focus-within)")=>s.A`
  ${de} {
    background: ${E.v8G};
  }

  :host(${G}:hover) ${de} {
    background: ${E.Rgz};
  }

  :host(:not([disabled]):focus-within) ${de} {
    background: ${E.Vtk};
  }

  :host([disabled]) ${de} {
    background: ${E.v8G};
  }

  .control::placeholder {
    color: ${O};
  }

  :host(${G}:hover) .control::placeholder {
    color: ${se};
  }
`,te=(ve,re,de,G=":not([disabled]):not(:focus-within)")=>s.A`
  :host {
    color: ${y.A.ButtonText};
  }

  ${de} {
    background: ${y.A.ButtonFace};
    border-color: ${y.A.ButtonText};
  }

  :host(${G}:hover) ${de},
  :host(:not([disabled]):focus-within) ${de} {
    border-color: ${y.A.Highlight};
  }

  :host([disabled]) ${de} {
    opacity: 1;
    background: ${y.A.ButtonFace};
    border-color: ${y.A.GrayText};
  }

  .control::placeholder,
  :host(${G}:hover) .control::placeholder {
    color: ${y.A.CanvasText};
  }

  :host(:not([disabled]):focus) ${de} {
    ${b.W}
    outline-color: ${y.A.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${y.A.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${y.A.GrayText};
  }
`},9709:(rt,pe,h)=>{h.d(pe,{Ah:()=>x});var s=h(9760),c=h(9457);const x=s.L`
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
`},4583:(rt,pe,h)=>{h.d(pe,{D:()=>x});var s=h(9760),c=h(9457);const x=s.L`(${c.Sss} + ${c.Brd}) * ${c.vR1}`},8955:(rt,pe,h)=>{h.d(pe,{oR:()=>J});var s=h(1635),c=h(9808),x=h(742),y=h(7788),E=h(4192),R=h(1230),_=h(9605),b=h(6105),A=h(8746),H=h(4632);class O extends H.g{}class se extends((0,A.rf)(O)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let B=(()=>{class ge extends se{constructor(){super(...arguments),this.type="text"}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&y.dv.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}return(0,x.Cg)([(0,c.CF)({attribute:"readonly",mode:"boolean"})],ge.prototype,"readOnly",void 0),(0,x.Cg)([(0,c.CF)({mode:"boolean"})],ge.prototype,"autofocus",void 0),(0,x.Cg)([c.CF],ge.prototype,"placeholder",void 0),(0,x.Cg)([c.CF],ge.prototype,"type",void 0),(0,x.Cg)([c.CF],ge.prototype,"list",void 0),(0,x.Cg)([(0,c.CF)({converter:c.R$})],ge.prototype,"maxlength",void 0),(0,x.Cg)([(0,c.CF)({converter:c.R$})],ge.prototype,"minlength",void 0),(0,x.Cg)([c.CF],ge.prototype,"pattern",void 0),(0,x.Cg)([(0,c.CF)({converter:c.R$})],ge.prototype,"size",void 0),(0,x.Cg)([(0,c.CF)({mode:"boolean"})],ge.prototype,"spellcheck",void 0),(0,x.Cg)([E.sH],ge.prototype,"defaultSlottedNodes",void 0),ge})();class T{}(0,b.X)(T,R.z),(0,b.X)(B,_.qw,T);var W=h(9953),te=h(633),ve=h(1589),re=h(7412),G=h(9760),$=h(8322),Z=h(4954),ee=h(3928),z=h(2622),le=h(9457);const K=".root",J=(()=>{class ge extends B{appearanceChanged(Le,nt){Le!==nt&&(this.classList.add(nt),this.classList.remove(Le))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}return(0,s.Cg)([c.CF],ge.prototype,"appearance",void 0),ge})().compose({baseName:"text-field",baseClass:B,template:(ge,Be)=>W.q`
    <template
        class="
            ${Le=>Le.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${Le=>Le.defaultSlottedNodes&&Le.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${(0,te.e)({property:"defaultSlottedNodes",filter:re.g})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${(0,_.LT)(ge,Be)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${Le=>Le.handleTextInput()}"
                @change="${Le=>Le.handleChange()}"
                ?autofocus="${Le=>Le.autofocus}"
                ?disabled="${Le=>Le.disabled}"
                list="${Le=>Le.list}"
                maxlength="${Le=>Le.maxlength}"
                minlength="${Le=>Le.minlength}"
                pattern="${Le=>Le.pattern}"
                placeholder="${Le=>Le.placeholder}"
                ?readonly="${Le=>Le.readOnly}"
                ?required="${Le=>Le.required}"
                size="${Le=>Le.size}"
                ?spellcheck="${Le=>Le.spellcheck}"
                :value="${Le=>Le.value}"
                type="${Le=>Le.type}"
                aria-atomic="${Le=>Le.ariaAtomic}"
                aria-busy="${Le=>Le.ariaBusy}"
                aria-controls="${Le=>Le.ariaControls}"
                aria-current="${Le=>Le.ariaCurrent}"
                aria-describedby="${Le=>Le.ariaDescribedby}"
                aria-details="${Le=>Le.ariaDetails}"
                aria-disabled="${Le=>Le.ariaDisabled}"
                aria-errormessage="${Le=>Le.ariaErrormessage}"
                aria-flowto="${Le=>Le.ariaFlowto}"
                aria-haspopup="${Le=>Le.ariaHaspopup}"
                aria-hidden="${Le=>Le.ariaHidden}"
                aria-invalid="${Le=>Le.ariaInvalid}"
                aria-keyshortcuts="${Le=>Le.ariaKeyshortcuts}"
                aria-label="${Le=>Le.ariaLabel}"
                aria-labelledby="${Le=>Le.ariaLabelledby}"
                aria-live="${Le=>Le.ariaLive}"
                aria-owns="${Le=>Le.ariaOwns}"
                aria-relevant="${Le=>Le.ariaRelevant}"
                aria-roledescription="${Le=>Le.ariaRoledescription}"
                ${(0,ve.K)("control")}
            />
            ${(0,_.aO)(ge,Be)}
        </div>
    </template>
`,styles:(ge,Be)=>G.A`
    ${(0,$.V)("inline-block")}

    ${(0,ee.aB)(ge,Be,K)}

    ${(0,ee.y$)(ge,Be,K)}

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
      padding: 0 calc(${le.vR1} * 2px + 1px);
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
  `.withBehaviors((0,z.f)("outline",(0,ee.Tv)(ge,Be,K)),(0,z.f)("filled",(0,ee.dM)(ge,Be,K)),(0,Z.mr)((0,ee.lb)(ge,Be,K))),shadowOptions:{delegatesFocus:!0}})},2622:(rt,pe,h)=>{h.d(pe,{f:()=>x});var s=h(4192);class c{constructor(E,R,_){this.propertyName=E,this.value=R,this.styles=_}bind(E){s.cP.getNotifier(E).subscribe(this,this.propertyName),this.handleChange(E,this.propertyName)}unbind(E){s.cP.getNotifier(E).unsubscribe(this,this.propertyName),E.$fastController.removeStyles(this.styles)}handleChange(E,R){E[R]===this.value?E.$fastController.addStyles(this.styles):E.$fastController.removeStyles(this.styles)}}function x(y,E){return new c("appearance",y,E)}},54:(rt,pe,h)=>{h.d(pe,{e:()=>x});const s=["none","hover","click"],x=(y,E="none")=>(y=>"string"==typeof y&&s.includes(y))(y)?y:E},8072:(rt,pe,h)=>{h.d(pe,{R:()=>Gr,x:()=>zr});var s=h(2578),c=h(4709),x=h(4569),y=h(6885),E=h(8324),R=h(9559),_=h(4229),b=h(7768),A=h(2710),H=h(8360);const O=[E.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{font-size:var(--default-font-size)}:host .title{font-size:14px;font-weight:600;padding:20px 0 12px;line-height:19px}:host .file-list-wrapper{background-color:var(--file-list-background-color,var(--neutral-layer-floating));border:var(--file-list-border,none);position:relative;display:flex;flex-direction:column;border-radius:8px}:host .file-list-wrapper .title{font-size:14px;font-weight:600;margin:0 20px -15px}:host .file-list-wrapper .file-list{display:flex;padding:var(--file-list-padding,0);margin:var(--file-list-margin,0);flex-direction:column;list-style:none}:host .file-list-wrapper .file-list .file-item{cursor:pointer;border-radius:var(--file-border-radius)}:host .file-list-wrapper .file-list .file-item:focus,:host .file-list-wrapper .file-list .file-item:focus-within{--file-background-color:var(--file-background-color-focus, var(--neutral-layer-2))}:host .file-list-wrapper .file-list .file-item.selected{--file-background-color:var(--file-background-color-active, var(--neutral-layer-3))}:host .file-list-wrapper .file-list .file-item .mgt-file-item{--file-padding:10px 20px 10px 20px;--file-padding-inline-start:24px;--file-border-radius:2px;--file-background-color:var(--file-item-background-color, var(--neutral-layer-1))}:host .file-list-wrapper .progress-ring{margin:4px auto;width:var(--progress-ring-size,24px);height:var(--progress-ring-size,24px)}:host .file-list-wrapper .show-more{text-align:center;font-size:var(--show-more-button-font-size, 12px);padding:var(--show-more-button-padding,0);border-radius:0 0 var(--show-more-button-border-bottom-right-radius,var(--file-list-border-radius,8px)) var(--show-more-button-border-bottom-left-radius,var(--file-list-border-radius,8px));background-color:var(--show-more-button-background-color,var(--neutral-stroke-divider-rest))}:host .file-list-wrapper .show-more:hover{background-color:var(--show-more-button-background-color-hover,var(--neutral-fill-input-alt-active))}:host .file-list-wrapper .show-more-text{font-size:var(--show-more-button-font-size, 12px)}
`],se={showMoreSubtitle:"Show more items",filesSectionTitle:"Files",sharedTextSubtitle:"Shared"};var V=h(9569),B=h(862),T=h(9953),W=h(8287),ve=h(9760),re=h(3226),de=h(8322),G=h(4954),$=h(9457);const z=class ee extends B.z{}.compose({baseName:"progress",template:(Bt,yt)=>T.q`
    <template
        role="progressbar"
        aria-valuenow="${Ne=>Ne.value}"
        aria-valuemin="${Ne=>Ne.min}"
        aria-valuemax="${Ne=>Ne.max}"
        class="${Ne=>Ne.paused?"paused":""}"
    >
        ${(0,W.z)(Ne=>"number"==typeof Ne.value,T.q`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${Ne=>Ne.percentComplete}%"
                    ></div>
                </div>
            `,T.q`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${yt.indeterminateIndicator1||""}
                        ${yt.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,styles:(Bt,yt)=>ve.A`
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
  `.withBehaviors((0,G.mr)(ve.A`
        .indeterminate-indicator-1,
        .indeterminate-indicator-2,
        .determinate,
        .progress {
          background-color: ${re.A.ButtonText};
        }
        :host(.paused) .indeterminate-indicator-1,
        :host(.paused) .indeterminate-indicator-2,
        :host(.paused) .determinate {
          background-color: ${re.A.GrayText};
        }
      `)),indeterminateIndicator1:'\n    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>\n  ',indeterminateIndicator2:'\n    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>\n  '});var K=h(7043),L=h(9684),P=h(742),J=h(7788),X=h(4192),ge=h(9808),Be=h(7153),nt=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"].join(","),Pe=typeof Element>"u",oe=Pe?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Qe=!Pe&&Element.prototype.getRootNode?function(Bt){return Bt.getRootNode()}:function(Bt){return Bt.ownerDocument},Te=function(yt){return"INPUT"===yt.tagName},at=function(yt){var Ne=yt.getBoundingClientRect();return 0===Ne.width&&0===Ne.height},j=function(yt,Ne){return!(function(yt){return function(yt){return Te(yt)&&"radio"===yt.type}(yt)&&!function(yt){if(!yt.name)return!0;var zt,Ne=yt.form||Qe(yt),st=function(Qt){return Ne.querySelectorAll('input[type="radio"][name="'+Qt+'"]')};if(typeof window<"u"&&typeof window.CSS<"u"&&"function"==typeof window.CSS.escape)zt=st(window.CSS.escape(yt.name));else try{zt=st(yt.name)}catch(Ht){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",Ht.message),!1}var Wt=function(yt,Ne){for(var st=0;st<yt.length;st++)if(yt[st].checked&&yt[st].form===Ne)return yt[st]}(zt,yt.form);return!Wt||Wt===yt}(yt)}(Ne)||function(yt,Ne){return yt.tabIndex<0&&(Ne||/^(AUDIO|VIDEO|DETAILS)$/.test(yt.tagName)||yt.isContentEditable)&&isNaN(parseInt(yt.getAttribute("tabindex"),10))?0:yt.tabIndex}(Ne)<0||!function(yt,Ne){return!(Ne.disabled||function(yt){return Te(yt)&&"hidden"===yt.type}(Ne)||function(yt,Ne){var st=Ne.displayCheck,zt=Ne.getShadowRoot;if("hidden"===getComputedStyle(yt).visibility)return!0;var Wt=oe.call(yt,"details>summary:first-of-type");if(oe.call(Wt?yt.parentElement:yt,"details:not([open]) *"))return!0;var Qt=Qe(yt).host,Un=Qt?.ownerDocument.contains(Qt)||yt.ownerDocument.contains(yt);if(st&&"full"!==st){if("non-zero-area"===st)return at(yt)}else{if("function"==typeof zt){for(var _n=yt;yt;){var Dn=yt.parentElement,di=Qe(yt);if(Dn&&!Dn.shadowRoot&&!0===zt(Dn))return at(yt);yt=yt.assignedSlot?yt.assignedSlot:Dn||di===yt.ownerDocument?Dn:di.host}yt=_n}if(Un)return!yt.getClientRects().length}return!1}(Ne,yt)||function(yt){return"DETAILS"===yt.tagName&&Array.prototype.slice.apply(yt.children).some(function(st){return"SUMMARY"===st.tagName})}(Ne)||function(yt){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(yt.tagName))for(var Ne=yt.parentElement;Ne;){if("FIELDSET"===Ne.tagName&&Ne.disabled){for(var st=0;st<Ne.children.length;st++){var zt=Ne.children.item(st);if("LEGEND"===zt.tagName)return!!oe.call(Ne,"fieldset[disabled] *")||!zt.contains(yt)}return!0}Ne=Ne.parentElement}return!1}(Ne))}(yt,Ne))},it=function(yt,Ne){if(Ne=Ne||{},!yt)throw new Error("No node provided");return!1!==oe.call(yt,nt)&&j(Ne,yt)},Xe=h(4632);let Gt=(()=>{class Bt extends Xe.g{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=Ne=>{if(!Ne.defaultPrevented&&!this.hidden)switch(Ne.key){case Be.F9:this.dismiss(),Ne.preventDefault();break;case Be.J9:this.handleTabKeyDown(Ne)}},this.handleDocumentFocus=Ne=>{!Ne.defaultPrevented&&this.shouldForceFocus(Ne.target)&&(this.focusFirstElement(),Ne.preventDefault())},this.handleTabKeyDown=Ne=>{if(!this.trapFocus||this.hidden)return;const st=this.getTabQueueBounds();if(0!==st.length){if(1===st.length)return st[0].focus(),void Ne.preventDefault();Ne.shiftKey&&Ne.target===st[0]?(st[st.length-1].focus(),Ne.preventDefault()):!Ne.shiftKey&&Ne.target===st[st.length-1]&&(st[0].focus(),Ne.preventDefault())}},this.getTabQueueBounds=()=>Bt.reduceTabbableItems([],this),this.focusFirstElement=()=>{const Ne=this.getTabQueueBounds();Ne.length>0?Ne[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=Ne=>this.isTrappingFocus&&!this.contains(Ne),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=Ne=>{const st=void 0===Ne?this.shouldTrapFocus():Ne;st&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),J.dv.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!st&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=X.cP.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(Ne,st){"hidden"===st&&this.updateTrapFocus()}static reduceTabbableItems(Ne,st){return"-1"===st.getAttribute("tabindex")?Ne:it(st)||Bt.isFocusableFastElement(st)&&Bt.hasTabbableShadow(st)?(Ne.push(st),Ne):st.childElementCount?Ne.concat(Array.from(st.children).reduce(Bt.reduceTabbableItems,[])):Ne}static isFocusableFastElement(Ne){var st,zt;return!(null===(zt=null===(st=Ne.$fastController)||void 0===st?void 0:st.definition.shadowOptions)||void 0===zt||!zt.delegatesFocus)}static hasTabbableShadow(Ne){var st,zt;return Array.from(null!==(zt=null===(st=Ne.shadowRoot)||void 0===st?void 0:st.querySelectorAll("*"))&&void 0!==zt?zt:[]).some(Wt=>it(Wt))}}return(0,P.Cg)([(0,ge.CF)({mode:"boolean"})],Bt.prototype,"modal",void 0),(0,P.Cg)([(0,ge.CF)({mode:"boolean"})],Bt.prototype,"hidden",void 0),(0,P.Cg)([(0,ge.CF)({attribute:"trap-focus",mode:"boolean"})],Bt.prototype,"trapFocus",void 0),(0,P.Cg)([(0,ge.CF)({attribute:"aria-describedby"})],Bt.prototype,"ariaDescribedby",void 0),(0,P.Cg)([(0,ge.CF)({attribute:"aria-labelledby"})],Bt.prototype,"ariaLabelledby",void 0),(0,P.Cg)([(0,ge.CF)({attribute:"aria-label"})],Bt.prototype,"ariaLabel",void 0),Bt})();var nn=h(1589),An=h(2783);const gi=Gt.compose({baseName:"dialog",template:(Bt,yt)=>T.q`
    <div class="positioning-region" part="positioning-region">
        ${(0,W.z)(Ne=>Ne.modal,T.q`
                <div
                    class="overlay"
                    part="overlay"
                    role="presentation"
                    @click="${Ne=>Ne.dismiss()}"
                ></div>
            `)}
        <div
            role="dialog"
            tabindex="-1"
            class="control"
            part="control"
            aria-modal="${Ne=>Ne.modal}"
            aria-describedby="${Ne=>Ne.ariaDescribedby}"
            aria-labelledby="${Ne=>Ne.ariaLabelledby}"
            aria-label="${Ne=>Ne.ariaLabel}"
            ${(0,nn.K)("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`,styles:(Bt,yt)=>ve.A`
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
    box-shadow: ${An.Cw};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${$.JUW} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${$.pfK};
    z-index: 1;
    border: calc(${$.XAH} * 1px) solid transparent;
  }
`});var hi=h(9451),Fn=h(3402),Pn=h(3601),Fi=h(3173);const en=[E.AH`
:host .file-upload-area-button{width:auto;display:flex;align-items:end;justify-content:end;margin-inline-end:36px;margin-top:30px}:host fluent-button .upload-icon path{fill:var(--file-upload-button-text-color,var(--foreground-on-accent-rest))}:host fluent-button.file-upload-button::part(control){border:var(--file-upload-button-border,none);background:var(--file-upload-button-background-color,var(--accent-fill-rest))}:host fluent-button.file-upload-button::part(control):hover{background:var(--file-upload-button-background-color-hover,var(--accent-fill-hover))}:host fluent-button.file-upload-button .upload-text{color:var(--file-upload-button-text-color,var(--foreground-on-accent-rest));font-weight:400;line-height:20px}:host input{display:none}:host fluent-progress.file-upload-bar{width:180px;margin-top:10px}:host fluent-dialog::part(overlay){opacity:.5}:host fluent-dialog::part(control){--dialog-width:$file-upload-dialog-width;--dialog-height:$file-upload-dialog-height;padding:var(--file-upload-dialog-padding,24px);border:var(--file-upload-dialog-border,1px solid var(--neutral-fill-rest))}:host fluent-dialog .file-upload-dialog-ok{background:var(--file-upload-dialog-keep-both-button-background-color,var(--accent-fill-rest));border:var(--file-upload-dialog-keep-both-button-border,none);color:var(--file-upload-dialog-keep-both-button-text-color,var(--foreground-on-accent-rest))}:host fluent-dialog .file-upload-dialog-ok:hover{background:var(--file-upload-dialog-keep-both-button-background-color-hover,var(--accent-fill-hover))}:host fluent-dialog .file-upload-dialog-cancel{background:var(--file-upload-dialog-replace-button-background-color,var(--accent-fill-rest));border:var(--file-upload-dialog-replace-button-border,1px solid var(--neutral-foreground-rest));color:var(--file-upload-dialog-replace-button-text-color,var(--neutral-foreground-rest))}:host fluent-dialog .file-upload-dialog-cancel:hover{background:var(--file-upload-dialog-replace-button-background-color-hover,var(--accent-fill-hover))}:host fluent-checkbox{margin-top:12px}:host fluent-checkbox .file-upload-dialog-check{color:var(--file-upload-dialog-text-color,--foreground-on-accent-rest)}:host .file-upload-table{display:flex}:host .file-upload-table.upload{display:flex}:host .file-upload-table .file-upload-cell{padding:1px 0 1px 1px;display:table-cell;vertical-align:middle;position:relative}:host .file-upload-table .file-upload-cell.percent-indicator{padding-inline-start:10px}:host .file-upload-table .file-upload-cell .description{opacity:.5;position:relative}:host .file-upload-table .file-upload-cell .file-upload-filename{max-width:250px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .file-upload-table .file-upload-cell .file-upload-status{position:absolute;left:28px}:host .file-upload-table .file-upload-cell .file-upload-cancel{cursor:pointer;margin-inline-start:20px}:host .file-upload-table .file-upload-cell .file-upload-name{width:auto}:host .file-upload-table .file-upload-cell .cancel-icon{fill:var(--file-upload-dialog-text-color,var(--neutral-foreground-rest))}:host .mgt-file-item{--file-background-color:transparent;--file-padding:0 12px;--file-padding-inline-start:24px}:host .file-upload-template{clear:both}:host .file-upload-template .file-upload-folder-tab{padding-inline-start:20px}:host .file-upload-dialog{display:none}:host .file-upload-dialog .file-upload-dialog-content{background-color:var(--file-upload-dialog-background-color,var(--accent-fill-rest));color:var(--file-upload-dialog-text-color,var(--neutral-foreground-rest))}:host .file-upload-dialog .file-upload-dialog-content-text{margin-bottom:36px}:host .file-upload-dialog .file-upload-dialog-title{margin-top:0}:host .file-upload-dialog .file-upload-dialog-editor{display:flex;align-items:end;justify-content:end;gap:5px}:host .file-upload-dialog .file-upload-dialog-close{float:right;cursor:pointer}:host .file-upload-dialog .file-upload-dialog-close svg{fill:var(--file-upload-dialog-text-color,var(--neutral-foreground-rest));padding-right:5px}:host .file-upload-dialog.visible{display:block}:host fluent-checkbox.file-upload-dialog-check.hide{display:none}:host .file-upload-dialog-success{cursor:pointer;opacity:.5}:host #file-upload-border{display:none}:host #file-upload-border.visible{border:var(--file-upload-border-drag,1px dashed #0078d4);background-color:var(--file-upload-background-color-drag,rgba(0,120,212,.1));position:absolute;inset:0;z-index:1;display:inline-block}[dir=rtl] :host .file-upload-status{left:0;right:28px}@media (forced-colors:active){:host fluent-button .upload-icon path{fill:highlighttext}:host fluent-button.file-upload-button::part(control){border-width:1px;border-style:solid;border-color:buttontext;background:highlight}:host fluent-button.file-upload-button::part(control):hover{background:highlighttext;border-color:highlight}:host fluent-button.file-upload-button .upload-text{color:highlighttext}:host fluent-button:hover .upload-icon path{fill:highlight}:host fluent-button:hover.file-upload-button::part(control){border-color:highlight;background:highlighttext}:host fluent-button:hover.file-upload-button .upload-text{color:highlight}}
`],Nn={failUploadFile:"File upload fail.",cancelUploadFile:"File cancel.",buttonUploadFile:"Upload Files",maximumFilesTitle:"Maximum files",maximumFiles:"Sorry, the maximum number of files you can upload at once is {MaxNumber}. Do you want to upload the first {MaxNumber} files or reselect?",maximumFileSizeTitle:"Maximum files size",maximumFileSize:'Sorry, the maximum file size to upload is {FileSize}. The file "{FileName}" has ',fileTypeTitle:"File type",fileType:'Sorry, the format of following file "{FileName}" cannot be uploaded.',checkAgain:"Don't show again",checkApplyAll:"Apply to all",buttonOk:"OK",buttonCancel:"Cancel",buttonUpload:"Upload",buttonKeep:"Keep both",buttonReplace:"Replace",buttonReselect:"Reselect",fileReplaceTitle:"Replace file",fileReplace:'Do you want to replace the file "{FileName}" or keep both files?',uploadButtonLabel:"File upload button"};var Ci=h(8940),nr=function(Bt,yt,Ne,st){var Ht,zt=arguments.length,Wt=zt<3?yt:null===st?st=Object.getOwnPropertyDescriptor(yt,Ne):st;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Bt,yt,Ne,st);else for(var Qt=Bt.length-1;Qt>=0;Qt--)(Ht=Bt[Qt])&&(Wt=(zt<3?Ht(Wt):zt>3?Ht(yt,Ne,Wt):Ht(yt,Ne))||Wt);return zt>3&&Wt&&Object.defineProperty(yt,Ne,Wt),Wt},Zi=function(Bt,yt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(Bt,yt)},ft=function(Bt,yt,Ne,st){return new(Ne||(Ne=Promise))(function(Wt,Ht){function Qt(Dn){try{_n(st.next(Dn))}catch(di){Ht(di)}}function Un(Dn){try{_n(st.throw(Dn))}catch(di){Ht(di)}}function _n(Dn){Dn.done?Wt(Dn.value):function zt(Wt){return Wt instanceof Ne?Wt:new Ne(function(Ht){Ht(Wt)})}(Dn.value).then(Qt,Un)}_n((st=st.apply(Bt,yt||[])).next())})};const Et=Bt=>Bt.isDirectory,pt=Bt=>"getAsEntry"in Bt&&"function"==typeof Bt.getAsEntry,qt=Bt=>"getAsFile"in Bt&&"function"==typeof Bt.getAsFile||"webkitGetAsEntry"in Bt&&"function"==typeof Bt.webkitGetAsEntry,ii=Bt=>Bt?.length>1?"replace"===Bt[1]?"replace":"rename":null;let At=(()=>{class Bt extends hi.D{static get styles(){return en}get strings(){return Nn}static get requiredScopes(){return[...new Set(["files.readwrite","files.readwrite.all","sites.readwrite.all"])]}get _dropEffect(){return"copy"}constructor(){super(),this._dragCounter=0,this._maxChunkSize=4194304,this._dialogTitle="",this._dialogContent="",this._dialogPrimaryButton="",this._dialogSecondaryButton="",this._dialogCheckBox="",this._applyAll=!1,this._applyAllConflictBehavior=null,this._maximumFileSize=!1,this._excludedFileType=!1,this.onFileUploadChange=Ne=>{const st=Ne.target;!Ne||st.files.length<1||this.readUploadedFiles(st.files,()=>st.value=null)},this.onFileUploadClick=()=>{this.renderRoot.querySelector("#file-upload-input").click()},this.handleonDragOver=Ne=>{Ne.preventDefault(),Ne.stopPropagation(),Ne.dataTransfer.items&&Ne.dataTransfer.items.length>0&&(Ne.dataTransfer.dropEffect=Ne.dataTransfer.dropEffect=this._dropEffect)},this.handleonDragEnter=Ne=>{Ne.preventDefault(),Ne.stopPropagation(),this._dragCounter++,Ne.dataTransfer.items&&Ne.dataTransfer.items.length>0&&(Ne.dataTransfer.dropEffect=this._dropEffect,this.renderRoot.querySelector("#file-upload-border").classList.add("visible"))},this.handleonDragLeave=Ne=>{Ne.preventDefault(),Ne.stopPropagation(),this._dragCounter--,0===this._dragCounter&&this.renderRoot.querySelector("#file-upload-border").classList.remove("visible")},this.handleonDrop=Ne=>{var st;Ne.preventDefault(),Ne.stopPropagation(),this.renderRoot.querySelector("#file-upload-border").classList.remove("visible"),!(null===(st=Ne.dataTransfer)||void 0===st)&&st.items&&this.readUploadedFiles(Ne.dataTransfer.items,()=>{Ne.dataTransfer.clearData()}),this._dragCounter=0},this.filesToUpload=[]}render(){if(null!==this.parentElement){const Ne=this.parentElement;Ne.addEventListener("dragenter",this.handleonDragEnter),Ne.addEventListener("dragleave",this.handleonDragLeave),Ne.addEventListener("dragover",this.handleonDragOver),Ne.addEventListener("drop",this.handleonDrop)}return E.qy`
        <div id="file-upload-dialog" class="file-upload-dialog">
          <!-- Modal content -->
          <fluent-dialog modal="true" class="file-upload-dialog-content">
            <span
              class="file-upload-dialog-close"
              id="file-upload-dialog-close">
                ${(0,A.r)(A.A.Cancel)}
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
              <span slot="start">${(0,A.r)(A.A.Upload)}</span>
              <span class="upload-text">${this.strings.buttonUploadFile}</span>
          </fluent-button>
        </div>
        <div class="file-upload-template">
          ${this.renderFolderTemplate(this.filesToUpload)}
        </div>
       `}renderFolderTemplate(Ne){const st=[];if(Ne.length>0){const zt=Ne.map(Wt=>-1===st.indexOf(Wt.fullPath.substring(0,Wt.fullPath.lastIndexOf("/")))?Wt.fullPath.endsWith("/")?E.qy`${this.renderFileTemplate(Wt,"")}`:(st.push(Wt.fullPath.substring(0,Wt.fullPath.lastIndexOf("/"))),x.Q`
            <div class='file-upload-table'>
              <div class='file-upload-cell'>
                <mgt-file
                  .fileDetails=${{name:Wt.fullPath.substring(1,Wt.fullPath.lastIndexOf("/")),folder:"Folder"}}
                  view="oneline"
                  class="mgt-file-item">
                </mgt-file>
              </div>
            </div>
            ${this.renderFileTemplate(Wt,"file-upload-folder-tab")}`):E.qy`${this.renderFileTemplate(Wt,"file-upload-folder-tab")}`);return E.qy`${zt}`}return E.qy``}renderFileTemplate(Ne,st){const zt=(0,Fn.H)({"file-upload-table":!0,upload:Ne.completed}),Wt=st+("lastModifiedDateTime"===Ne.fieldUploadResponse?" file-upload-dialog-success":""),Ht=(0,Fn.H)({description:"description"===Ne.fieldUploadResponse}),Qt=Ne.completed?E.qy``:this.renderFileUploadTemplate(Ne);return x.Q`
        <div class="${zt}">
          <div class="${Wt}">
            <div class='file-upload-cell'>
              <div class="${Ht}">
                <div class="file-upload-status">
                  ${Ne.iconStatus}
                </div>
                <mgt-file
                  .fileDetails=${Ne.driveItem}
                  .view=${Ne.view}
                  .line2Property=${Ne.fieldUploadResponse}
                  part="upload"
                  class="mgt-file-item">
                </mgt-file>
              </div>
            </div>
              ${Qt}
            </div>
          </div>
        </div>`}renderFileUploadTemplate(Ne){const st=(0,Fn.H)({"file-upload-table":!0,upload:Ne.completed});return E.qy`
    <div class='file-upload-cell'>
      <div class='file-upload-table file-upload-name'>
        <div class='file-upload-cell'>
          <div
            title="${Ne.file.name}"
            class='file-upload-filename'>
            ${Ne.file.name}
          </div>
        </div>
      </div>
      <div class='file-upload-table'>
        <div class='file-upload-cell'>
          <div class="${st}">
            <fluent-progress class="file-upload-bar" value="${Ne.percent}"></fluent-progress>
            <div class='file-upload-cell percent-indicator'>
              <span>${Ne.percent}%</span>
              <span
                class="file-upload-cancel"
                @click=${()=>this.deleteFileUploadSession(Ne)}>
                ${(0,A.r)(A.A.Cancel)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    `}deleteFileUploadSession(Ne){return ft(this,void 0,void 0,function*(){try{void 0!==Ne.uploadUrl?(yield(0,b.mQ)(this.fileUploadList.graph,Ne.uploadUrl),Ne.uploadUrl=void 0,Ne.completed=!0,this.setUploadFail(Ne,Nn.cancelUploadFile)):(Ne.uploadUrl=void 0,Ne.completed=!0,this.setUploadFail(Ne,Nn.cancelUploadFile))}catch{Ne.uploadUrl=void 0,Ne.completed=!0,this.setUploadFail(Ne,Nn.cancelUploadFile)}})}readUploadedFiles(Ne,st){return ft(this,void 0,void 0,function*(){const zt=yield this.getFilesFromUploadArea(Ne);yield this.getSelectedFiles(zt),st()})}getSelectedFiles(Ne){return ft(this,void 0,void 0,function*(){let st=[];const zt=[];this._applyAll=!1,this._applyAllConflictBehavior=null,this._maximumFileSize=!1,this._excludedFileType=!1,this.filesToUpload.forEach(Ht=>{Ht.completed?zt.push(Ht):st.push(Ht)});for(const Ht of Ne){const Qt=""===Ht.fullPath?"/"+Ht.name:Ht.fullPath;if(0===st.filter(Un=>Un.fullPath===Qt).length){let Un=!0;if(void 0!==this.fileUploadList.maxFileSize&&Un&&Ht.size>1024*this.fileUploadList.maxFileSize&&(Un=!1,!1===this._maximumFileSize)){const _n=yield this.getFileUploadStatus(Ht,Qt,"MaxFileSize",this.fileUploadList);null!==_n&&1===_n[0]&&(this._maximumFileSize=!0)}if(void 0!==this.fileUploadList.excludedFileExtensions&&this.fileUploadList.excludedFileExtensions.length>0&&Un&&this.fileUploadList.excludedFileExtensions.filter(_n=>Ht.name.toLowerCase().indexOf(_n.toLowerCase())>-1).length>0&&(Un=!1,!1===this._excludedFileType)){const _n=yield this.getFileUploadStatus(Ht,Qt,"ExcludedFileType",this.fileUploadList);null!==_n&&1===_n[0]&&(this._excludedFileType=!0)}if(Un){const _n=yield this.getFileUploadStatus(Ht,Qt,"Upload",this.fileUploadList);let Dn=!1;null!==_n&&(-1===_n[0]?Dn=!0:(this._applyAll=!!_n[0],this._applyAllConflictBehavior=_n[1]?1:0)),st.push({file:Ht,driveItem:{name:Ht.name},fullPath:Qt,conflictBehavior:ii(_n),iconStatus:null,percent:1,view:"image",completed:Dn,maxSize:this._maxChunkSize,minSize:0})}}}st=st.sort((Ht,Qt)=>Ht.fullPath.substring(0,Ht.fullPath.lastIndexOf("/")).localeCompare(Qt.fullPath.substring(0,Qt.fullPath.lastIndexOf("/")))),st.forEach(Ht=>{if(0!==zt.filter(Qt=>Qt.fullPath===Ht.fullPath).length){const Qt=zt.findIndex(Un=>Un.fullPath===Ht.fullPath);zt.splice(Qt,1)}}),st.push(...zt),this.filesToUpload=st;const Wt=this.filesToUpload.map(Ht=>this.sendFileItemGraph(Ht));yield Promise.all(Wt)})}getFileUploadStatus(Ne,st,zt,Wt){const Ht=Object.create(null,{requestStateUpdate:{get:()=>super.requestStateUpdate}});return ft(this,void 0,void 0,function*(){const Qt=this.renderRoot.querySelector("#file-upload-dialog");switch(zt){case"Upload":return null!==(yield(0,b.Pq)(this.fileUploadList.graph,`${this.getGrapQuery(st)}?$select=id`))?!0===this._applyAll?[this._applyAll,this._applyAllConflictBehavior]:(Qt.classList.add("visible"),this._dialogTitle=Nn.fileReplaceTitle,this._dialogContent=Nn.fileReplace.replace("{FileName}",Ne.name),this._dialogCheckBox=Nn.checkApplyAll,this._dialogPrimaryButton=Nn.buttonReplace,this._dialogSecondaryButton=Nn.buttonKeep,yield Ht.requestStateUpdate.call(this,!0),new Promise(_n=>{const Dn=this.renderRoot.querySelector(".file-upload-dialog-close"),di=this.renderRoot.querySelector(".file-upload-dialog-ok"),$i=this.renderRoot.querySelector(".file-upload-dialog-cancel"),ki=this.renderRoot.querySelector("#file-upload-dialog-check");ki.checked=!1,ki.classList.remove("hide");const Ti=()=>{Qt.classList.remove("visible"),_n([ki.checked?1:0,"replace"])},He=()=>{Qt.classList.remove("visible"),_n([ki.checked?1:0,"rename"])},ot=()=>{Qt.classList.remove("visible"),_n([-1])};di.removeEventListener("click",Ti),$i.removeEventListener("click",He),Dn.removeEventListener("click",ot),di.addEventListener("click",Ti),$i.addEventListener("click",He),Dn.addEventListener("click",ot)})):null;case"ExcludedFileType":return Qt.classList.add("visible"),this._dialogTitle=Nn.fileTypeTitle,this._dialogContent=Nn.fileType.replace("{FileName}",Ne.name)+" ("+Wt.excludedFileExtensions.join(",")+")",this._dialogCheckBox=Nn.checkAgain,this._dialogPrimaryButton=Nn.buttonOk,this._dialogSecondaryButton=Nn.buttonCancel,yield Ht.requestStateUpdate.call(this,!0),new Promise(Un=>{const _n=this.renderRoot.querySelector(".file-upload-dialog-ok"),Dn=this.renderRoot.querySelector(".file-upload-dialog-cancel"),di=this.renderRoot.querySelector(".file-upload-dialog-close"),$i=this.renderRoot.querySelector("#file-upload-dialog-check");$i.checked=!1,$i.classList.remove("hide");const ki=()=>{Qt.classList.remove("visible"),Un([$i.checked?1:0])},Ti=()=>{Qt.classList.remove("visible"),Un([0])};_n.removeEventListener("click",ki),Dn.removeEventListener("click",Ti),di.removeEventListener("click",Ti),_n.addEventListener("click",ki),Dn.addEventListener("click",Ti),di.addEventListener("click",Ti)});case"MaxFileSize":return Qt.classList.add("visible"),this._dialogTitle=Nn.maximumFileSizeTitle,this._dialogContent=Nn.maximumFileSize.replace("{FileSize}",(0,Fi.z3)(1024*Wt.maxFileSize)).replace("{FileName}",Ne.name)+(0,Fi.z3)(Ne.size)+".",this._dialogCheckBox=Nn.checkAgain,this._dialogPrimaryButton=Nn.buttonOk,this._dialogSecondaryButton=Nn.buttonCancel,yield Ht.requestStateUpdate.call(this,!0),new Promise(Un=>{const _n=this.renderRoot.querySelector(".file-upload-dialog-ok"),Dn=this.renderRoot.querySelector(".file-upload-dialog-cancel"),di=this.renderRoot.querySelector(".file-upload-dialog-close"),$i=this.renderRoot.querySelector("#file-upload-dialog-check");$i.checked=!1,$i.classList.remove("hide");const ki=()=>{Qt.classList.remove("visible"),Un([$i.checked?1:0])},Ti=()=>{Qt.classList.remove("visible"),Un([0])};_n.removeEventListener("click",ki),Dn.removeEventListener("click",Ti),di.removeEventListener("click",Ti),_n.addEventListener("click",ki),Dn.addEventListener("click",Ti),di.addEventListener("click",Ti)})}})}getGrapQuery(Ne){let st="";return this.fileUploadList.itemPath&&this.fileUploadList.itemPath.length>0&&(st=this.fileUploadList.itemPath.startsWith("/")?this.fileUploadList.itemPath:"/"+this.fileUploadList.itemPath),this.fileUploadList.userId&&this.fileUploadList.itemId?`/users/${this.fileUploadList.userId}/drive/items/${this.fileUploadList.itemId}:${Ne}`:this.fileUploadList.userId&&this.fileUploadList.itemPath?`/users/${this.fileUploadList.userId}/drive/root:${st}${Ne}`:this.fileUploadList.groupId&&this.fileUploadList.itemId?`/groups/${this.fileUploadList.groupId}/drive/items/${this.fileUploadList.itemId}:${Ne}`:this.fileUploadList.groupId&&this.fileUploadList.itemPath?`/groups/${this.fileUploadList.groupId}/drive/root:${st}${Ne}`:this.fileUploadList.driveId&&this.fileUploadList.itemId?`/drives/${this.fileUploadList.driveId}/items/${this.fileUploadList.itemId}:${Ne}`:this.fileUploadList.driveId&&this.fileUploadList.itemPath?`/drives/${this.fileUploadList.driveId}/root:${st}${Ne}`:this.fileUploadList.siteId&&this.fileUploadList.itemId?`/sites/${this.fileUploadList.siteId}/drive/items/${this.fileUploadList.itemId}:${Ne}`:this.fileUploadList.siteId&&this.fileUploadList.itemPath?`/sites/${this.fileUploadList.siteId}/drive/root:${st}${Ne}`:this.fileUploadList.itemId?`/me/drive/items/${this.fileUploadList.itemId}:${Ne}`:this.fileUploadList.itemPath?`/me/drive/root:${st}${Ne}`:`/me/drive/root:${Ne}`}sendFileItemGraph(Ne){return ft(this,void 0,void 0,function*(){const st=this.fileUploadList.graph;let zt="";if(Ne.file.size<this._maxChunkSize)try{Ne.completed||((null===Ne.conflictBehavior||"replace"===Ne.conflictBehavior)&&(zt=`${this.getGrapQuery(Ne.fullPath)}:/content`),"rename"===Ne.conflictBehavior&&(zt=`${this.getGrapQuery(Ne.fullPath)}:/content?@microsoft.graph.conflictBehavior=rename`),Ne.driveItem=yield(0,b.sy)(st,zt,Ne.file),null!==Ne.driveItem?this.setUploadSuccess(Ne):(Ne.driveItem={name:Ne.file.name},this.setUploadFail(Ne,Nn.failUploadFile)))}catch{this.setUploadFail(Ne,Nn.failUploadFile)}else if(!Ne.completed&&void 0===Ne.uploadUrl){const Wt=yield(0,b.Ay)(st,`${this.getGrapQuery(Ne.fullPath)}:/createUploadSession`,Ne.conflictBehavior);try{if(null!==Wt){Ne.uploadUrl=Wt.uploadUrl;const Ht=yield this.sendSessionUrlGraph(st,Ne);null!==Ht?(Ne.driveItem=Ht,this.setUploadSuccess(Ne)):this.setUploadFail(Ne,Nn.failUploadFile)}else this.setUploadFail(Ne,Nn.failUploadFile)}catch{}}})}sendSessionUrlGraph(Ne,st){const zt=Object.create(null,{requestStateUpdate:{get:()=>super.requestStateUpdate}});return ft(this,void 0,void 0,function*(){for(;st.file.size>st.minSize;){void 0===st.mimeStreamString&&(st.mimeStreamString=yield this.readFileContent(st.file));const Wt=new Blob([st.mimeStreamString.slice(st.minSize,st.maxSize)]);if(st.percent=Math.round(st.maxSize/st.file.size*100),yield zt.requestStateUpdate.call(this,!0),void 0===st.uploadUrl)return null;{const Ht=yield(0,b.mj)(Ne,st.uploadUrl,""+(st.maxSize-st.minSize),`bytes ${st.minSize}-${st.maxSize-1}/${st.file.size}`,Wt);if(null===Ht)return null;if((0,b.gt)(Ht))st.minSize=parseInt(Ht.nextExpectedRanges[0].split("-")[0],10),st.maxSize=st.minSize+this._maxChunkSize,st.maxSize>st.file.size&&(st.maxSize=st.file.size);else if(void 0!==Ht.id)return Ht}}})}setUploadSuccess(Ne){Ne.percent=100,super.requestStateUpdate(!0),setTimeout(()=>{Ne.iconStatus=(0,A.r)(A.A.Success),Ne.view="twolines",Ne.fieldUploadResponse="lastModifiedDateTime",Ne.completed=!0,super.requestStateUpdate(!0),(0,b.$V)()},500)}setUploadFail(Ne,st){setTimeout(()=>{Ne.iconStatus=(0,A.r)(A.A.Fail),Ne.view="twolines",Ne.driveItem.description=st,Ne.fieldUploadResponse="description",Ne.completed=!0,super.requestStateUpdate(!0)},500)}readFileContent(Ne){return new Promise((st,zt)=>{const Wt=new FileReader;Wt.onloadend=()=>{st(Wt.result)},Wt.onerror=Ht=>{zt(Ht)},Wt.readAsArrayBuffer(Ne)})}getFilesFromUploadArea(Ne){return ft(this,void 0,void 0,function*(){const st=[];let zt;const Wt=[];for(const Ht of Ne)if(qt(Ht))if(pt(Ht))if(zt=Ht.getAsEntry(),Et(zt))st.push(zt);else{const Qt=Ht.getAsFile();Qt&&(this.writeFilePath(Qt,""),Wt.push(Qt))}else if(Ht.webkitGetAsEntry)if(zt=Ht.webkitGetAsEntry(),Et(zt))st.push(zt);else{const Qt=Ht.getAsFile();Qt&&(this.writeFilePath(Qt,""),Wt.push(Qt))}else{const Qt=Ht.getAsFile();Qt&&(this.writeFilePath(Qt,""),Wt.push(Qt))}else this.writeFilePath(Ht,""),Wt.push(Ht);if(st.length>0){const Ht=yield this.getFolderFiles(st);Wt.push(...Ht)}return Wt})}getFolderFiles(Ne){return new Promise(st=>{let zt=0;const Wt=[];Ne.forEach(Un=>{Ht(Un,"")});const Ht=(Un,_n)=>{Et(Un)?Qt(Un.createReader()):(Bt=>Bt.isFile)(Un)&&(zt++,Un.file(Dn=>{zt--,this.writeFilePath(Dn,_n),Wt.push(Dn),0===zt&&st(Wt)}))},Qt=Un=>{zt++,Un.readEntries(_n=>{zt--;for(const Dn of _n)Ht(Dn,Dn.fullPath);0===zt&&st(Wt)})}})}writeFilePath(Ne,st){Ne.fullPath=st}}return nr([(0,R.MZ)({type:Object}),Zi("design:type",Array)],Bt.prototype,"filesToUpload",void 0),nr([(0,R.MZ)({type:Object}),Zi("design:type",Object)],Bt.prototype,"fileUploadList",void 0),Bt})();var mi=h(882),$n=function(Bt,yt,Ne,st){var Ht,zt=arguments.length,Wt=zt<3?yt:null===st?st=Object.getOwnPropertyDescriptor(yt,Ne):st;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Bt,yt,Ne,st);else for(var Qt=Bt.length-1;Qt>=0;Qt--)(Ht=Bt[Qt])&&(Wt=(zt<3?Ht(Wt):zt>3?Ht(yt,Ne,Wt):Ht(yt,Ne))||Wt);return zt>3&&Wt&&Object.defineProperty(yt,Ne,Wt),Wt},Vn=function(Bt,yt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(Bt,yt)},Ji=function(Bt,yt,Ne,st){return new(Ne||(Ne=Promise))(function(Wt,Ht){function Qt(Dn){try{_n(st.next(Dn))}catch(di){Ht(di)}}function Un(Dn){try{_n(st.throw(Dn))}catch(di){Ht(di)}}function _n(Dn){Dn.done?Wt(Dn.value):function zt(Wt){return Wt instanceof Ne?Wt:new Ne(function(Ht){Ht(Wt)})}(Dn.value).then(Qt,Un)}_n((st=st.apply(Bt,yt||[])).next())})};const zr=()=>{(0,Pn.E)(mi.m9),(0,V.R)(),(0,Pn.E)(z,K.zi,L.c,gi),(0,V.R)(),(0,Ci.N)("file-upload",At),(0,Ci.N)("file-list",Gr)};let Gr=(()=>{class Bt extends s.N{static get styles(){return O}get strings(){return se}get displayName(){return this.strings.filesSectionTitle}get cardTitle(){return this.strings.filesSectionTitle}renderIcon(){return(0,A.r)(A.A.Files)}static get requiredScopes(){return[...new Set([...V.l.requiredScopes])]}constructor(){super(),this._isCompact=!1,this.fileQueries=null,this.files=null,this.itemView="threelines",this.fileExtensions=[],this.pageSize=10,this.disableOpenOnClick=!1,this.hideMoreFilesButton=!1,this.enableFileUpload=!1,this.maxUploadFile=10,this.excludedFileExtensions=[],this._preloadedFiles=[],this._focusedItemIndex=-1,this.renderLoading=()=>this.files?this.renderContent():this.renderTemplate("loading",null)||E.qy``,this.renderContent=()=>this.files&&0!==this.files.length?this._isCompact?this.renderCompactView():this.renderFullView():this.renderNoData(),this.onFocusFirstItem=()=>this._focusedItemIndex=0,this.onFileListKeyDown=Ne=>{const st=this.renderRoot.querySelector(".file-list");let zt;if(st?.children.length){if(("ArrowUp"===Ne.code||"ArrowDown"===Ne.code)&&("ArrowUp"===Ne.code&&(-1===this._focusedItemIndex&&(this._focusedItemIndex=st.children.length),this._focusedItemIndex=(this._focusedItemIndex-1+st.children.length)%st.children.length),"ArrowDown"===Ne.code&&(this._focusedItemIndex=(this._focusedItemIndex+1)%st.children.length),zt=st.children[this._focusedItemIndex],this.updateItemBackgroundColor(st,zt,"focused")),"Enter"===Ne.code||"Space"===Ne.code){zt=st.children[this._focusedItemIndex];const Wt=zt.children[0];Ne.preventDefault(),this.fireCustomEvent("itemClick",Wt.fileDetails),this.handleFileClick(Wt.fileDetails),this.updateItemBackgroundColor(st,zt,"selected")}"Tab"===Ne.code&&(zt=st.children[this._focusedItemIndex])}}}clearState(){super.clearState(),this.files=null}asCompactView(){return this._isCompact=!0,this}asFullView(){return this._isCompact=!1,this}args(){return[this.providerState,this.fileListQuery,this.fileQueries,this.siteId,this.driveId,this.groupId,this.itemId,this.itemPath,this.userId,this.insightType,this.fileExtensions,this.pageSize,this.maxFileSize]}renderCompactView(){const Ne=this.files.slice(0,3);return this.renderFiles(Ne)}renderFullView(){return this.renderTemplate("default",{files:this.files})||this.renderFiles(this.files)}renderNoData(){return this.renderTemplate("no-data",null)||(!0===this.enableFileUpload&&void 0!==c.b.globalProvider?E.qy`
            <div class="file-list-wrapper" dir=${this.direction}>
              ${this.renderFileUpload()}
            </div>`:E.qy``)}renderFiles(Ne){return E.qy`
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
            @click=${st=>this.handleItemSelect(Ne[0],st)}>
            ${this.renderFile(Ne[0])}
          </li>
          ${(0,_.u)(Ne.slice(1),st=>st.id,st=>E.qy`
              <li
                class="file-item"
                @keydown="${this.onFileListKeyDown}"
                @click=${zt=>this.handleItemSelect(st,zt)}>
                ${this.renderFile(st)}
              </li>
            `)}
        </ul>
        ${this.hideMoreFilesButton||!this.pageIterator||!this.pageIterator.hasNext&&!this._preloadedFiles.length||this._isCompact?null:this.renderMoreFileButton()}
      </div>
    `}renderFile(Ne){const st=this.itemView;return this.renderTemplate("file",{file:Ne},Ne.id)||x.Q`
        <mgt-file class="mgt-file-item" .fileDetails=${Ne} .view=${st}></mgt-file>
      `}renderMoreFileButton(){return this._isLoadingMore?E.qy`
        <fluent-progress-ring role="progressbar" viewBox="0 0 8 8" class="progress-ring"></fluent-progress-ring>
      `:E.qy`
        <fluent-button
          appearance="stealth"
          id="show-more"
          class="show-more"
          @click=${()=>this.renderNextPage()}
        >
          <span class="show-more-text">${this.strings.showMoreSubtitle}</span>
        </fluent-button>`}renderFileUpload(){const Ne={graph:c.b.globalProvider.graph.forComponent(this),driveId:this.driveId,excludedFileExtensions:this.excludedFileExtensions,groupId:this.groupId,itemId:this.itemId,itemPath:this.itemPath,userId:this.userId,siteId:this.siteId,maxFileSize:this.maxFileSize,maxUploadFile:this.maxUploadFile};return x.Q`
        <mgt-file-upload .fileUploadList=${Ne} ></mgt-file-upload>
      `}loadState(){var Ne,st;return Ji(this,void 0,void 0,function*(){const zt=c.b.globalProvider;if(!zt||zt.state===y.HJ.Loading)return;if(zt.state===y.HJ.SignedOut)return void(this.files=null);const Wt=zt.graph.forComponent(this);let Ht,Qt;const Un=!(this.driveId||this.siteId||this.groupId||this.userId);if((this.driveId&&!this.itemId&&!this.itemPath||this.groupId&&!this.itemId&&!this.itemPath||this.siteId&&!this.itemId&&!this.itemPath||this.userId&&!this.insightType&&!this.itemId&&!this.itemPath)&&(this.files=null),!this.files){let _n;if(this.fileListQuery?Qt=yield(0,b.D)(Wt,this.fileListQuery,this.pageSize):this.fileQueries?Ht=yield(0,b.bJ)(Wt,this.fileQueries):Un?this.itemId?Qt=yield(0,b.Y1)(Wt,this.itemId,this.pageSize):this.itemPath?Qt=yield(0,b.o4)(Wt,this.itemPath,this.pageSize):this.insightType?Ht=yield(0,b.jI)(Wt,this.insightType):Qt=yield(0,b.Ad)(Wt,this.pageSize):this.driveId?this.itemId?Qt=yield(0,b.Kx)(Wt,this.driveId,this.itemId,this.pageSize):this.itemPath&&(Qt=yield(0,b.WU)(Wt,this.driveId,this.itemPath,this.pageSize)):this.groupId?this.itemId?Qt=yield(0,b.$4)(Wt,this.groupId,this.itemId,this.pageSize):this.itemPath&&(Qt=yield(0,b.NO)(Wt,this.groupId,this.itemPath,this.pageSize)):this.siteId?this.itemId?Qt=yield(0,b.Z)(Wt,this.siteId,this.itemId,this.pageSize):this.itemPath&&(Qt=yield(0,b.Rh)(Wt,this.siteId,this.itemPath,this.pageSize)):this.userId&&(this.itemId?Qt=yield(0,b.Zm)(Wt,this.userId,this.itemId,this.pageSize):this.itemPath?Qt=yield(0,b.n)(Wt,this.userId,this.itemPath,this.pageSize):this.insightType&&(Ht=yield(0,b.S0)(Wt,this.userId,this.insightType))),Qt&&(this.pageIterator=Qt,this._preloadedFiles=[...this.pageIterator.value],Ht=this._preloadedFiles.splice(0,this._preloadedFiles.length>=this.pageSize?this.pageSize:this._preloadedFiles.length)),(null===(Ne=this.fileExtensions)||void 0===Ne?void 0:Ne.length)>0){if(null!==(st=this.pageIterator)&&void 0!==st&&st.value){for(;this.pageIterator.hasNext;)yield(0,b.oL)(this.pageIterator);Ht=this.pageIterator.value,this._preloadedFiles=[]}_n=Ht.filter(Dn=>{for(const di of this.fileExtensions)if(di===this.getFileExtension(Dn.name))return Dn})}_n?.length>=0?(this.files=_n,this.pageSize&&(Ht=this.files.splice(0,this.pageSize),this.files=Ht)):this.files=Ht}})}handleItemSelect(Ne,st){if(this.handleFileClick(Ne),this.fireCustomEvent("itemClick",Ne),st){const zt=this.renderRoot.querySelector(".file-list"),Wt=Array.from(zt.children),Ht=st.target.closest("li"),Qt=Wt.indexOf(Ht);this._focusedItemIndex=Qt,this.updateItemBackgroundColor(zt,zt.children[this._focusedItemIndex],"selected")}}renderNextPage(){return Ji(this,void 0,void 0,function*(){if(this._preloadedFiles.length>0)this.files=[...this.files,...this._preloadedFiles.splice(0,Math.min(this.pageSize,this._preloadedFiles.length))];else if(this.pageIterator.hasNext){this._isLoadingMore=!0;const Ne=this.renderRoot.querySelector("#file-list-wrapper");Ne?.animate&&Ne.animate([{height:"auto",transformOrigin:"top left"},{height:"auto",transformOrigin:"top left"}],{duration:1e3,easing:"ease-in-out",fill:"both"}),yield(0,b.oL)(this.pageIterator),this._isLoadingMore=!1,this.files=this.pageIterator.value}this.requestUpdate()})}handleFileClick(Ne){Ne?.webUrl&&!this.disableOpenOnClick&&window.open(Ne.webUrl,"_blank","noreferrer")}getFileExtension(Ne){return/(?:\.([^.]+))?$/.exec(Ne)[1]||""}updateItemBackgroundColor(Ne,st,zt){for(const Wt of Ne.children)Wt.classList.remove(zt),Wt.removeAttribute("tabindex");st&&(st.classList.add(zt),st.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"}),st.setAttribute("tabindex","0"),st.focus());for(const Wt of Ne.children)Wt.classList.remove("selected")}reload(Ne=!1){Ne&&(0,b.$V)(),this._task.run()}}return $n([(0,R.wk)(),Vn("design:type",Object)],Bt.prototype,"_isCompact",void 0),$n([(0,R.MZ)({attribute:"file-list-query"}),Vn("design:type",String)],Bt.prototype,"fileListQuery",void 0),$n([(0,R.MZ)({attribute:"file-queries",converter:(yt,Ne)=>yt?yt.split(",").map(st=>st.trim()):null}),Vn("design:type",Array)],Bt.prototype,"fileQueries",void 0),$n([(0,R.MZ)({type:Object}),Vn("design:type",Array)],Bt.prototype,"files",void 0),$n([(0,R.MZ)({attribute:"site-id"}),Vn("design:type",String)],Bt.prototype,"siteId",void 0),$n([(0,R.MZ)({attribute:"drive-id"}),Vn("design:type",String)],Bt.prototype,"driveId",void 0),$n([(0,R.MZ)({attribute:"group-id"}),Vn("design:type",String)],Bt.prototype,"groupId",void 0),$n([(0,R.MZ)({attribute:"item-id"}),Vn("design:type",String)],Bt.prototype,"itemId",void 0),$n([(0,R.MZ)({attribute:"item-path"}),Vn("design:type",String)],Bt.prototype,"itemPath",void 0),$n([(0,R.MZ)({attribute:"user-id"}),Vn("design:type",String)],Bt.prototype,"userId",void 0),$n([(0,R.MZ)({attribute:"insight-type"}),Vn("design:type",String)],Bt.prototype,"insightType",void 0),$n([(0,R.MZ)({attribute:"item-view",converter:yt=>(0,H.E)(yt,"threelines")}),Vn("design:type",String)],Bt.prototype,"itemView",void 0),$n([(0,R.MZ)({attribute:"file-extensions",converter:(yt,Ne)=>yt.split(",").map(st=>st.trim())}),Vn("design:type",Array)],Bt.prototype,"fileExtensions",void 0),$n([(0,R.MZ)({attribute:"page-size",type:Number}),Vn("design:type",Object)],Bt.prototype,"pageSize",void 0),$n([(0,R.MZ)({attribute:"disable-open-on-click",type:Boolean}),Vn("design:type",Object)],Bt.prototype,"disableOpenOnClick",void 0),$n([(0,R.MZ)({attribute:"hide-more-files-button",type:Boolean}),Vn("design:type",Object)],Bt.prototype,"hideMoreFilesButton",void 0),$n([(0,R.MZ)({attribute:"max-file-size",type:Number}),Vn("design:type",Number)],Bt.prototype,"maxFileSize",void 0),$n([(0,R.MZ)({attribute:"enable-file-upload",type:Boolean}),Vn("design:type",Object)],Bt.prototype,"enableFileUpload",void 0),$n([(0,R.MZ)({attribute:"max-upload-file",type:Number}),Vn("design:type",Object)],Bt.prototype,"maxUploadFile",void 0),$n([(0,R.MZ)({attribute:"excluded-file-extensions",converter:(yt,Ne)=>yt.split(",").map(st=>st.trim())}),Vn("design:type",Array)],Bt.prototype,"excludedFileExtensions",void 0),$n([(0,R.wk)(),Vn("design:type",Boolean)],Bt.prototype,"_isLoadingMore",void 0),Bt})()},9569:(rt,pe,h)=>{h.d(pe,{l:()=>G,R:()=>de});var s=h(8324),c=h(9559);const x=[s.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{font-size:var(--default-font-size);font-weight:var(--default-font-weight,400);border:var(--file-border,1px solid transparent);border-radius:var(--file-border-radius,4px);background-color:var(--file-background-color)}:host .item{display:flex;flex-flow:row nowrap;align-items:center;background-color:var(--file-background-color);padding:var(--file-padding,0);margin:var(--file-margin,0)}:host .item:hover{background-color:var(--file-background-color-hover,var(--neutral-fill-hover));border-radius:var(--file-border-radius,4px);cursor:pointer;--secondary-text-color:var(--secondary-text-hover-color)}:host .item:focus,:host .item:focus-visible{background-color:var(--file-background-color-focus,var(--neutral-fill-hover));border-radius:var(--file-border-radius,4px)}:host .item__file-type-icon{height:var(--file-type-icon-height,28px);display:flex;align-items:center;justify-content:center}:host .item__file-type-icon img{height:var(--file-type-icon-height,28px)}:host .item__details{padding-inline-start:var(--file-padding-inline-start,14px)}:host .item__details .line1{font-size:var(--default-font-size);font-weight:var(--file-line1-font-weight,var(--default-font-weight,400));text-transform:var(--file-line1-text-transform,initial);line-height:20px;color:var(--file-line1-color,var(--neutral-foreground-rest))}:host .item__details .line2{color:var(--file-line2-color,var(--secondary-text-color));font-size:var(--file-line2-font-size, var(--last-modified-font-size, 12px));font-weight:var(--file-line2-font-weight,var(--default-font-weight,400));text-transform:var(--file-line2-text-transform,initial);line-height:16px}:host .item__details .line3{color:var(--file-line3-color,var(--secondary-text-color));font-size:var(--file-line3-font-size, var(--size-font-size, 12px));font-weight:var(--file-line3-font-weight,var(--default-font-weight,400));text-transform:var(--file-line3-text-transform,initial);line-height:16px}[dir=rtl] .item{direction:rtl}[dir=rtl] .item__details{direction:rtl}
`];var y=h(2578),E=h(4709),R=h(6885),_=h(7768),b=h(3173),A=h(8360);const H={PowerPoint:"pptx",Word:"docx",Excel:"xlsx",Pdf:"pdf",OneNote:"onetoc",OneNotePage:"one",InfoPath:"xsn",Visio:"vstx",Publisher:"pub",Project:"mpp",Access:"accdb",Mail:"email",Csv:"csv",Archive:"archive",Xps:"vector",Audio:"audio",Video:"video",Image:"photo",Web:"html",Text:"txt",Xml:"xml",Story:"genericfile",ExternalContent:"genericfile",Folder:"folder",Spsite:"spo",Other:"genericfile"},O="https://spoprod-a.akamaihd.net/files/fabric-cdn-prod_20201008.001/assets/item-types";var B=h(2710);const T={modifiedSubtitle:"Modified",sizeSubtitle:"Size"};var W=h(8940),te=function($,Z,ee,z){var L,le=arguments.length,K=le<3?Z:null===z?z=Object.getOwnPropertyDescriptor(Z,ee):z;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)K=Reflect.decorate($,Z,ee,z);else for(var P=$.length-1;P>=0;P--)(L=$[P])&&(K=(le<3?L(K):le>3?L(Z,ee,K):L(Z,ee))||K);return le>3&&K&&Object.defineProperty(Z,ee,K),K},ve=function($,Z){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata($,Z)};const de=()=>(0,W.N)("file",G);let G=(()=>{class $ extends y.N{static get styles(){return x}get strings(){return T}static get requiredScopes(){return[...new Set(["files.read","files.read.all","sites.read.all"])]}args(){return[this.providerState,this.fileQuery,this.siteId,this.itemId,this.driveId,this.itemPath,this.listId,this.groupId,this.userId,this.insightType,this.insightId,this.fileDetails,this.fileIcon]}constructor(){super(),this.renderContent=()=>{if(!this.driveItem)return this.renderNoData();const ee=this.driveItem;let z;if(z=this.renderTemplate("default",{file:ee}),!z){const le=this.renderDetails(ee),K=this.renderFileTypeIcon();z=s.qy`
        <div class="item">
          ${K} ${le}
        </div>`}return z},this.line1Property="name",this.line2Property="lastModifiedDateTime",this.line3Property="size",this.view="threelines"}renderNoData(){return this.renderTemplate("no-data",null)||s.qy``}renderFileTypeIcon(){if(!this.fileIcon&&!this.driveItem.name)return s.qy``;let ee;if(this.fileIcon)ee=this.fileIcon;else{const z=/(?:\.([^.]+))?$/;ee=(($,Z,ee)=>Object.keys(H).find(le=>H[le]===$)?`${O}/${48..toString()}/${$}.svg`:"jpg"===$||"png"===$?($="photo",`${O}/${48..toString()}/${$}.svg`):null)(void 0===this.driveItem.package&&void 0===this.driveItem.folder?z.exec(this.driveItem.name)[1]?z.exec(this.driveItem.name)[1].toLowerCase():this.driveItem.size?"null":"folder":void 0!==this.driveItem.package&&"oneNote"===this.driveItem.package.type?"onetoc":"folder")}return s.qy`
      <div class="item__file-type-icon">
        ${ee?s.qy`
              <img src=${ee} alt="File icon" />
            `:s.qy`
              ${(0,B.r)(B.A.File)}
            `}
      </div>
    `}renderDetails(ee){if(!ee||"image"===this.view)return s.qy``;const z=[];if(this.view>"image"){const le=this.getTextFromProperty(ee,this.line1Property);le&&z.push(s.qy`
          <div class="line1" aria-label="${le}">${le}</div>
        `)}if(this.view>"oneline"){const le=this.getTextFromProperty(ee,this.line2Property);le&&z.push(s.qy`
          <div class="line2" aria-label="${le}">${le}</div>
        `)}if(this.view>"twolines"){const le=this.getTextFromProperty(ee,this.line3Property);le&&z.push(s.qy`
          <div class="line3" aria-label="${le}">${le}</div>
        `)}return s.qy`
      <div class="item__details">
        ${z}
      </div>
    `}loadState(){return function($,Z,ee,z){return new(ee||(ee=Promise))(function(K,L){function P(ge){try{X(z.next(ge))}catch(Be){L(Be)}}function J(ge){try{X(z.throw(ge))}catch(Be){L(Be)}}function X(ge){ge.done?K(ge.value):function le(K){return K instanceof ee?K:new ee(function(L){L(K)})}(ge.value).then(P,J)}X((z=z.apply($,Z||[])).next())})}(this,void 0,void 0,function*(){if(this.fileDetails)return void(this.driveItem=this.fileDetails);const ee=E.b.globalProvider;if(!ee||ee.state===R.HJ.Loading)return;if(ee.state===R.HJ.SignedOut)return void(this.driveItem=null);const z=ee.graph.forComponent(this);let le;const K=!(this.driveId||this.siteId||this.groupId||this.listId||this.userId);this.driveId&&!this.itemId&&!this.itemPath||this.siteId&&!this.itemId&&!this.itemPath||this.groupId&&!this.itemId&&!this.itemPath||this.listId&&!this.siteId&&!this.itemId||this.insightType&&!this.insightId||this.userId&&!this.itemId&&!this.itemPath&&!this.insightType&&!this.insightId?le=null:this.fileQuery?le=yield(0,_.zn)(z,this.fileQuery):this.itemId&&K?le=yield(0,_.KE)(z,this.itemId):this.itemPath&&K?le=yield(0,_.OB)(z,this.itemPath):this.userId?this.itemId?le=yield(0,_.Nd)(z,this.userId,this.itemId):this.itemPath?le=yield(0,_.bn)(z,this.userId,this.itemPath):this.insightType&&this.insightId&&(le=yield(0,_.wH)(z,this.userId,this.insightType,this.insightId)):this.driveId?this.itemId?le=yield(0,_.Mu)(z,this.driveId,this.itemId):this.itemPath&&(le=yield(0,_.WW)(z,this.driveId,this.itemPath)):this.siteId&&!this.listId?this.itemId?le=yield(0,_.LI)(z,this.siteId,this.itemId):this.itemPath&&(le=yield(0,_.dM)(z,this.siteId,this.itemPath)):this.listId?le=yield(0,_.Sp)(z,this.siteId,this.listId,this.itemId):this.groupId?this.itemId?le=yield(0,_.XD)(z,this.groupId,this.itemId):this.itemPath&&(le=yield(0,_.d$)(z,this.groupId,this.itemPath)):this.insightType&&!this.userId&&(le=yield(0,_.Pk)(z,this.insightType,this.insightId)),this.driveItem=le})}getTextFromProperty(ee,z){if(!z||0===z.length)return null;const le=z.trim().split(",");let K,L=0;for(;!K&&L<le.length;){const P=le[L].trim();switch(P){case"size":{let J="0";ee.size&&(J=(0,b.z3)(ee.size)),K=`${this.strings.sizeSubtitle}: ${J}`;break}case"lastModifiedDateTime":{let J,X;if(ee.lastModifiedDateTime){const ge=new Date(ee.lastModifiedDateTime);J=(0,b.h3)(ge),X=`${this.strings.modifiedSubtitle} ${J}`}else X="";K=X;break}default:K=ee[P]}L++}return K}}return te([(0,c.MZ)({attribute:"file-query"}),ve("design:type",String)],$.prototype,"fileQuery",void 0),te([(0,c.MZ)({attribute:"site-id"}),ve("design:type",String)],$.prototype,"siteId",void 0),te([(0,c.MZ)({attribute:"drive-id"}),ve("design:type",String)],$.prototype,"driveId",void 0),te([(0,c.MZ)({attribute:"group-id"}),ve("design:type",String)],$.prototype,"groupId",void 0),te([(0,c.MZ)({attribute:"list-id"}),ve("design:type",String)],$.prototype,"listId",void 0),te([(0,c.MZ)({attribute:"user-id"}),ve("design:type",String)],$.prototype,"userId",void 0),te([(0,c.MZ)({attribute:"item-id"}),ve("design:type",String)],$.prototype,"itemId",void 0),te([(0,c.MZ)({attribute:"item-path"}),ve("design:type",String)],$.prototype,"itemPath",void 0),te([(0,c.MZ)({attribute:"insight-type"}),ve("design:type",String)],$.prototype,"insightType",void 0),te([(0,c.MZ)({attribute:"insight-id"}),ve("design:type",String)],$.prototype,"insightId",void 0),te([(0,c.MZ)({type:Object}),ve("design:type",Object)],$.prototype,"fileDetails",void 0),te([(0,c.MZ)({attribute:"file-icon"}),ve("design:type",String)],$.prototype,"fileIcon",void 0),te([(0,c.MZ)({type:Object}),ve("design:type",Object)],$.prototype,"driveItem",void 0),te([(0,c.MZ)({attribute:"line1-property"}),ve("design:type",String)],$.prototype,"line1Property",void 0),te([(0,c.MZ)({attribute:"line2-property"}),ve("design:type",String)],$.prototype,"line2Property",void 0),te([(0,c.MZ)({attribute:"line3-property"}),ve("design:type",String)],$.prototype,"line3Property",void 0),te([(0,c.MZ)({attribute:"view",converter:Z=>(0,A.E)(Z,"threelines")}),ve("design:type",String)],$.prototype,"view",void 0),$})()},7531:(rt,pe,h)=>{h.r(pe),h.d(pe,{MgtPersonCard:()=>sn,registerMgtPersonCardComponent:()=>ln});var s=h(8324),c=h(9559),x=h(3402),y=h(2578);class E{static get microsoftTeamsLib(){return this._microsoftTeamsLib||window.microsoftTeams}static set microsoftTeamsLib(vt){this._microsoftTeamsLib=vt}static get isAvailable(){return!(!this.microsoftTeamsLib||(window.parent!==window.self||!window.nativeInterface)&&"embedded-page-container"!==window.name&&"extension-tab-frame"!==window.name)}static executeDeepLink(vt,Ae){const ze=this.microsoftTeamsLib;ze.initialize(),ze.executeDeepLink(vt,Ae)}}var R=h(4569),_=h(4709),b=h(6885),A=h(5794),H=h(6692),O=h(4130),se=h(2898),V=h(2710),B=h(1786),T=h(4327);let W=(()=>{class ht{}return ht.sections={files:!0,mailMessages:!0,organization:{showWorksWith:!0},profile:!0},ht.useContactApis=!0,ht.isSendMessageVisible=!0,ht})();var te=h(5527),ve=h(7768),re=function(ht,vt,Ae,ze){return new(Ae||(Ae=Promise))(function(ut,Kt){function Xt(mn){try{En(ze.next(mn))}catch(wi){Kt(wi)}}function cn(mn){try{En(ze.throw(mn))}catch(wi){Kt(wi)}}function En(mn){mn.done?ut(mn.value):function Je(ut){return ut instanceof Ae?ut:new Ae(function(Kt){Kt(ut)})}(mn.value).then(Xt,cn)}En((ze=ze.apply(ht,vt||[])).next())})};const de="businessPhones,companyName,department,displayName,givenName,jobTitle,mail,mobilePhone,officeLocation,preferredLanguage,surname,userPrincipalName,id,accountEnabled",ee=["People.Read.All"],le=["Mail.ReadBasic","Mail.Read","Mail.ReadWrite"],P=["User.Read.All","User.ReadWrite.All"],X=["Chat.Create","Chat.ReadWrite"],Be=["ChatMessage.Send","Chat.ReadWrite"];var nt=h(6479);const Pe=[s.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{box-shadow:var(--person-card-box-shadow,var(--elevation-shadow-card-rest));width:var(--mgt-flyout-set-width,375px);overflow:hidden;user-select:none;border-radius:8px;background-color:var(--person-card-background-color,var(--neutral-layer-floating));--file-list-background-color:transparent;--file-list-box-shadow:none;--file-item-background-color:transparent}:host .small{max-height:100vh;overflow:hidden auto}:host .nav{height:0;position:relative;z-index:100}:host .nav__back{padding-top:18px;padding-inline-start:12px;height:32px;width:32px}:host .nav__back svg{fill:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .nav__back:hover{cursor:pointer}:host .nav__back:hover svg{fill:var(--person-card-nav-back-arrow-hover-color,var(--neutral-foreground-rest))}:host .close-card-container{position:relative;z-index:100}:host .close-card-container .close-button{position:absolute;right:10px;margin-top:9px;z-index:1;border:1px solid transparent}:host .close-card-container .close-button svg path{fill:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .close-card-container .close-button:hover svg path{fill:var(--person-card-close-button-hover-color,var(--neutral-foreground-rest))}:host .person-details-container{display:flex;flex-direction:column;padding-inline-start:22px;padding-block:36px;border-bottom:1px solid var(--person-card-border-color,var(--neutral-stroke-rest))}:host .person-details-container .person-image{--person-avatar-top-spacing:var(--person-card-avatar-top-spacing, 15px);--person-details-left-spacing:var(--person-card-details-left-spacing, 15px);--person-details-bottom-spacing:var(--person-card-details-bottom-spacing, 0);--person-background-color:var(--person-card-background-color, var(--neutral-layer-floating));--person-line1-font-size:var(--person-card-line1-font-size, 20px);--person-line1-font-weight:var(--person-card-line1-font-weight, 600);--person-line1-text-line-height:var(--person-card-line1-line-height, 28px);--person-line1-text-color:var(--person-card-line1-text-color, var(--neutral-foreground-rest));--person-line2-font-size:var(--person-card-line2-font-size, 14px);--person-line2-font-weight:var(--person-card-line2-font-weight, 400);--person-line2-text-line-height:var(--person-card-line2-line-height, 20px);--person-line2-text-color:var(--person-card-line2-text-color, var(--neutral-foreground-hint));--person-line3-font-size:var(--person-card-line3-font-size, 14px);--person-line3-font-weight:var(--person-card-line3-font-weight, 400);--person-line3-text-line-height:var(--person-card-line3-line-height, 19px);--person-line3-text-color:var(--person-card-line3-text-color, var(--neutral-foreground-hint));--person-avatar-size:var(--person-card-avatar-size, 75px);--person-presence-wrapper-bottom:-15px}:host .person-details-container .base-icons{display:flex;align-items:center;margin-inline-start:var(--person-card-base-icons-left-spacing,calc(var(--person-card-avatar-size,75px) + var(--person-card-details-left-spacing,15px) - 8px));z-index:1}:host .person-details-container .base-icons .icon{display:flex;align-items:center;font-size:13px;white-space:nowrap}:host .person-details-container .base-icons .icon:not(:last-child){margin-inline-end:28px}:host .person-details-container .base-icons .icon svg .filled{display:none}:host .person-details-container .base-icons .icon svg .regular{display:block}:host .person-details-container .base-icons .icon svg path{fill:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .person-details-container .base-icons .icon:active svg .filled,:host .person-details-container .base-icons .icon:hover svg .filled{display:block}:host .person-details-container .base-icons .icon:active svg .regular,:host .person-details-container .base-icons .icon:hover svg .regular{display:none}:host .person-details-container .base-icons .icon:active svg path,:host .person-details-container .base-icons .icon:hover svg path{fill:var(--person-card-icon-hover-color,var(--accent-foreground-hover))}:host .expanded-details-container{display:flex;flex-direction:column;position:relative}:host .expanded-details-container .expanded-details-button{display:flex;justify-content:center;height:32px}:host .expanded-details-container .expanded-details-button svg path{stroke:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .expanded-details-container .expanded-details-button:hover{cursor:pointer;background-color:var(--person-card-expanded-background-color-hover,var(--neutral-fill-hover))}:host .expanded-details-container .sections .section{padding:20px 0;display:flex;flex-direction:column;position:relative}:host .expanded-details-container .sections .section:not(:last-child)::after{position:absolute;content:"";width:90%;transform:translateX(-50%);border-bottom:1px solid var(--person-card-border-color,var(--neutral-stroke-rest));left:50%;bottom:0}:host .expanded-details-container .sections .section__header{display:flex;flex-direction:row;padding:0 20px}:host .expanded-details-container .sections .section__title{flex-grow:1;color:var(--person-card-line1-text-color,var(--neutral-foreground-rest));font-size:14px;font-weight:600;line-height:19px}:host .expanded-details-container .sections .section__show-more{font-size:12px;font-weight:600;align-self:center;vertical-align:top;--base-height-multiplier:6}:host .expanded-details-container .sections .section__show-more:hover{background-color:var(--person-card-fluent-background-color-hover,var(--neutral-fill-hover))}:host .expanded-details-container .sections .section__content{margin-top:14px}:host .expanded-details-container .sections .section .additional-details{padding:0 20px}:host .expanded-details-container .divider{z-index:100;position:relative;width:375px;margin:0;border-style:none;border-bottom:1px solid var(--person-card-border-color,var(--neutral-stroke-rest))}:host .expanded-details-container .section-nav{height:35px}:host .expanded-details-container .section-nav fluent-tabs{grid-template-columns:minmax(1px,0.1fr)}:host .expanded-details-container .section-nav fluent-tabs.horizontal::part(activeIndicator){width:10px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel{max-height:360px;min-height:360px;overflow:hidden auto;padding:0;scrollbar-width:thin}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel .inserted{padding:20px 0;max-width:var(--mgt-flyout-set-width,375px);min-width:var(--mgt-flyout-set-width,360px);--file-list-box-shadow:none;--file-list-padding:0}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel .inserted .title{font-size:14px;font-weight:600;color:var(--title-color-subtitle,var(--neutral-foreground-rest,#1a1a1a));margin:0 20px 20px;line-height:19px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel .overview-panel{max-width:var(--mgt-flyout-set-width,375px)}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar{height:4em;width:4px;border-radius:11px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar-button{height:1px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar-track{border-radius:10px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar-thumb{background:grey;border-radius:10px;height:4px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab{padding-bottom:1px!important;border:1px solid transparent!important}:host .expanded-details-container .section-nav fluent-tabs fluent-tab:focus-visible{border:1px solid #2b2b2b!important}:host .expanded-details-container .section-nav fluent-tabs fluent-tab.section-nav__icon{cursor:pointer;box-sizing:border-box;width:53px;height:36px;display:flex;align-items:center;justify-content:center}:host .expanded-details-container .section-nav fluent-tabs fluent-tab.section-nav__icon svg{fill:var(--person-card-fluent-background-color,transparent)}:host .expanded-details-container .section-nav fluent-tabs fluent-tab.section-nav__icon:hover{background:var(--person-card-fluent-background-color-hover,var(--neutral-fill-hover));border-radius:4px;z-index:0;position:relative}:host .expanded-details-container .section-host{min-height:360px;overflow:hidden auto}:host .expanded-details-container .section-host::-webkit-scrollbar{height:4em;width:4px;border-radius:11px}:host .expanded-details-container .section-host::-webkit-scrollbar-button{background:#fff}:host .expanded-details-container .section-host::-webkit-scrollbar-track{background:#fff;border-radius:10px}:host .expanded-details-container .section-host::-webkit-scrollbar-track-piece{background:#fff}:host .expanded-details-container .section-host::-webkit-scrollbar-thumb{background:grey;border-radius:10px;height:4px}:host .expanded-details-container .section-host.small{overflow-y:hidden}:host .loading{margin:40px 20px;display:flex;justify-content:center;height:360px}:host .message-section{border-bottom:1px solid var(--person-card-chat-input-border-color,var(--neutral-foreground-hint));display:flex}:host .message-section fluent-text-field{margin:10px 10px 10px 16px;--neutral-fill-input-rest:$person-card-background-color;--neutral-fill-input-hover:$person-card-chat-input-hover-color;--neutral-fill-input-focus:$person-card-chat-input-focus-color;width:300px;margin-inline-start:16px;border-radius:4px;border:1px solid var(--person-card-chat-input-border-color,var(--neutral-foreground-hint))}:host .message-section .send-message-icon{max-width:15px;margin-top:10px}:host .message-section svg{height:17px;width:16px;fill:var(--person-card-chat-input-border-color,var(--neutral-foreground-hint))}:host .message-section svg:hover{filter:brightness(.5)}:host .message-section svg:disabled{filter:none}:host .person-root.large,:host .person-root.threelines{--person-avatar-size-3-lines:75px}:host fluent-button.close-button.lightweight::part(control),:host fluent-button.expanded-details-button::part(control),:host fluent-button.section__show-more.lightweight::part(control){background:var(--person-card-fluent-background-color,transparent)}:host fluent-button.icon::part(control),:host fluent-button.nav__back::part(control){border:none;padding:0;background:0 0}:host fluent-button.icon::part(control) :hover,:host fluent-button.nav__back::part(control) :hover{background:0 0}[dir=rtl] .base-icons{right:91px}[dir=rtl] .nav__back{width:20px!important;transform:scaleX(-1);filter:fliph;filter:"FlipH"}[dir=rtl] .close-card-container .close-button{right:auto;left:10px}[dir=rtl] .message-section svg{transform:scale(-1,1)}@media (forced-colors:active) and (prefers-color-scheme:dark){.root{border:1px solid #fff;border-radius:inherit}.root svg,.root svg>path{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.expanded-details-container>svg,.expanded-details-container>svg>path,svg,svg>path{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}@media (forced-colors:active) and (prefers-color-scheme:light){.root{border:1px solid #000;border-radius:inherit}.root svg,.root svg>path{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.expanded-details-container>svg,.expanded-details-container>svg>path,svg,svg>path{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}
`];var oe=function(ht,vt,Ae,ze){var Kt,Je=arguments.length,ut=Je<3?vt:null===ze?ze=Object.getOwnPropertyDescriptor(vt,Ae):ze;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)ut=Reflect.decorate(ht,vt,Ae,ze);else for(var Xt=ht.length-1;Xt>=0;Xt--)(Kt=ht[Xt])&&(ut=(Je<3?Kt(ut):Je>3?Kt(vt,Ae,ut):Kt(vt,Ae))||ut);return Je>3&&ut&&Object.defineProperty(vt,Ae,ut),ut},Qe=function(ht,vt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(ht,vt)};let tt=(()=>{class ht extends y.N{get isCompact(){return this._isCompact}constructor(){super(),this.personDetails=null,this.renderLoading=()=>R.Q`
      <div class="loading">
        <mgt-spinner></mgt-spinner>
      </div>
    `,this._isCompact=!1}asCompactView(){return this._isCompact=!0,this}asFullView(){return this._isCompact=!1,this}clearState(){this._isCompact=!1,this.personDetails=null}render(){return this.isCompact?this.renderCompactView():this.renderFullView()}renderNoData(){return s.qy`
      <div class="no-data">No data</div>
    `}navigateCard(Ae){var ze;let Je=this.parentNode;for(;Je;){Je=Je.parentNode;const Kt=Je;if((null===(ze=Kt?.host)||void 0===ze?void 0:ze.tagName)===`${A.U.prefix}-PERSON-CARD`.toUpperCase()){Je=Kt.host;break}}Je.navigate(Ae)}}return oe([(0,c.MZ)({attribute:"person-details",type:Object}),Qe("design:type",Object)],ht.prototype,"personDetails",void 0),oe([(0,c.wk)(),Qe("design:type",Boolean)],ht.prototype,"_isCompact",void 0),ht})();const mt=[s.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none}:host .root .part{display:grid;grid-template-columns:auto 1fr auto}:host .root .part .part__icon{display:flex;min-width:20px;width:20px;height:20px;align-items:center;justify-content:center;margin-left:20px;margin-top:10px;line-height:20px}:host .root .part .part__icon svg{fill:var(--contact-copy-icon-color,var(--neutral-foreground-hint))}:host .root .part .part__details{margin:10px 14px;overflow:hidden}:host .root .part .part__details .part__title{font-size:12px;color:var(--contact-title-color,var(--neutral-foreground-hint));line-height:16px}:host .root .part .part__details .part__value{grid-column:2;color:var(--contact-value-color,var(--neutral-foreground-rest));font-size:14px;font-weight:400;line-height:19px}:host .root .part .part__details .part__value .part__link{color:var(--contact-link-color,var(--accent-foreground-rest));font-size:14px;cursor:pointer;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%;display:inline-block}:host .root .part .part__details .part__value .part__link:hover{color:var(--contact-link-hover-color,var(--accent-foreground-hover))}:host .root .part .part__copy{width:32px;height:100%;background-color:var(--contact-background-color,transparent);visibility:hidden;display:flex;align-items:center;justify-content:flex-start}:host .root .part .part__copy svg{fill:var(--contact-copy-icon-color,var(--neutral-foreground-hint));cursor:pointer}:host .root .part:hover .part__copy{visibility:visible}:host .root.compact{padding:0}:host .root.compact .part{height:30px;align-items:center}:host .root.compact .part__details{margin:0}:host .root.compact .part__title{display:none}:host .root.compact .part__icon{margin-top:0;margin-right:6px;margin-bottom:2px}[dir=rtl] .part__link.phone{text-align:right;direction:ltr}[dir=rtl] .part__icon{margin:10px 20px 0 0!important}[dir=rtl].compact .part__icon{margin-left:6px!important;margin-top:0!important}@media (forced-colors:active) and (prefers-color-scheme:dark){.root svg{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.root svg path,.root svg rect{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}@media (forced-colors:active) and (prefers-color-scheme:light){.root svg{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.root svg path,.root svg rect{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}
`],Tt={contactSectionTitle:"Contact",emailTitle:"Email",chatTitle:"Teams",businessPhoneTitle:"Business Phone",cellPhoneTitle:"Mobile Phone",departmentTitle:"Department",personTitle:"Title",officeLocationTitle:"Office Location",copyToClipboardButton:"Copy to clipboard"};var ct=h(8940);class ie extends tt{static get styles(){return mt}get strings(){return Tt}get hasData(){return!!this._contactParts&&!!Object.values(this._contactParts).filter(Ae=>!!Ae.value).length}constructor(vt){var Ae;super(),this._contactParts={email:{icon:(0,V.r)(V.A.Email),onClick:()=>this.sendEmail((0,H.iu)(this._person)),showCompact:!0,title:this.strings.emailTitle},chat:{icon:(0,V.r)(V.A.Chat),onClick:()=>{var ze;return this.sendChat(null===(ze=this._person)||void 0===ze?void 0:ze.userPrincipalName)},showCompact:!1,title:this.strings.chatTitle},businessPhone:{icon:(0,V.r)(V.A.Phone),onClick:()=>{var ze,Je;return this.sendCall((null===(Je=null===(ze=this._person)||void 0===ze?void 0:ze.businessPhones)||void 0===Je?void 0:Je.length)>0?this._person.businessPhones[0]:null)},showCompact:!0,title:this.strings.businessPhoneTitle},cellPhone:{icon:(0,V.r)(V.A.CellPhone),onClick:()=>{var ze;return this.sendCall(null===(ze=this._person)||void 0===ze?void 0:ze.mobilePhone)},showCompact:!0,title:this.strings.cellPhoneTitle},department:{icon:(0,V.r)(V.A.Department),showCompact:!1,title:this.strings.departmentTitle},title:{icon:(0,V.r)(V.A.Person),showCompact:!1,title:this.strings.personTitle},officeLocation:{icon:(0,V.r)(V.A.OfficeLocation),showCompact:!0,title:this.strings.officeLocationTitle}},this.sendCall=ze=>{this.sendLink("tel:",ze)},this._person=vt,this._contactParts.email.value=(0,H.iu)(this._person),this._contactParts.chat.value=this._person.userPrincipalName,this._contactParts.cellPhone.value=this._person.mobilePhone,this._contactParts.department.value=this._person.department,this._contactParts.title.value=this._person.jobTitle,this._contactParts.officeLocation.value=this._person.officeLocation,null!==(Ae=this._person.businessPhones)&&void 0!==Ae&&Ae.length&&(this._contactParts.businessPhone.value=this._person.businessPhones[0])}get displayName(){return this.strings.contactSectionTitle}get cardTitle(){return this.strings.contactSectionTitle}renderIcon(){return(0,V.r)(V.A.Contact)}clearState(){super.clearState();for(const vt of Object.keys(this._contactParts))this._contactParts[vt].value=null}renderCompactView(){if(!this.hasData)return null;const vt=Object.values(this._contactParts).filter(Je=>!!Je.value);let Ae=Object.values(vt).filter(Je=>!!Je.value&&Je.showCompact);Ae?.length||(Ae=Object.values(vt).slice(0,2));const ze=s.qy`
      ${Ae.map(Je=>this.renderContactPart(Je))}
    `;return s.qy`
      <div class="root compact" dir=${this.direction}>
        ${ze}
      </div>
    `}renderFullView(){let vt;if(this.hasData){const Ae=Object.values(this._contactParts).filter(ze=>!!ze.value);vt=s.qy`
        ${Ae.map(ze=>this.renderContactPart(ze))}
      `}return s.qy`
      <div class="root" dir=${this.direction}>
        ${vt}
      </div>
    `}renderContactPart(vt){let Ae=!1;("Mobile Phone"===vt.title||"Business Phone"===vt.title)&&(Ae=!0);const Je=vt.onClick?s.qy`
          <span class=${(0,x.H)({part__link:!0,phone:Ae})} @click=${ut=>vt.onClick(ut)}>${vt.value}</span>
        `:s.qy`
          ${vt.value}
        `;return s.qy`
      <div class="part" role="button" @click=${ut=>this.handlePartClick(ut,vt.value)} tabindex="0">
        <div class="part__icon" aria-label=${vt.title} title=${vt.title}>${vt.icon}</div>
        <div class="part__details">
          <div class="part__title">${vt.title}</div>
          <div class="part__value" title=${vt.title}>${Je}</div>
        </div>
        <div
          class="part__copy"
          aria-label=${this.strings.copyToClipboardButton}
          title=${this.strings.copyToClipboardButton}
        >
          ${(0,V.r)(V.A.Copy)}
        </div>
      </div>
    `}handlePartClick(vt,Ae){Ae&&navigator.clipboard.writeText(Ae)}sendLink(vt,Ae){Ae?window.open(`${vt}${Ae}`,"_blank","noreferrer"):console.error(`\u{1f992}: Target resource for ${vt} link was not provided: resource: ${Ae}`)}sendChat(vt){if(!vt)return void console.error("\u{1f992}: Can't send chat when upn is not provided");const Ae=`https://teams.microsoft.com/l/chat/0/0?users=${vt}`,ze=()=>window.open(Ae,"_blank","noreferrer");E.isAvailable?E.executeDeepLink(Ae,Je=>{Je||ze()}):ze()}sendEmail(vt){this.sendLink("mailto:",vt)}}var ue=h(8072),_e=h(3173);const Ke=[s.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none}:host .root.compact{padding:0}:host .root .message{padding:8px 20px;display:flex;align-items:center;justify-content:space-between}:host .root .message:hover{background-color:var(--message-hover-color,var(--neutral-fill-hover));cursor:pointer}:host .root .message:last-child{margin-bottom:unset}:host .root .message .message__detail{min-width:0;line-height:normal}:host .root .message .message__detail .message__subject{color:var(--message-subject-color,var(--neutral-foreground-color));font-size:var(--message-subject-font-size, 14px);font-weight:var(--message-subject-font-weight,600);line-height:var(--message-subject-line-height, 20px)}:host .root .message .message__detail .message__from{font-size:var(--message-from-font-size, 12px);color:var(--message-from-color,var(--neutral-foreground-color));line-height:var(--message-from-line-height, 16px);font-weight:var(--message-from-font-weight,400)}:host .root .message .message__detail .message__message{font-size:var(--message-from-font-size, 12px);color:var(--message-color,var(--neutral-foreground-hint));line-height:var(--message-from-line-height, 16px);font-weight:var(--message-from-font-weight,400)}:host .root .message .message__detail>div{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host .root .message .message__date{margin-top:8px;font-size:12px;color:var(--message-date-color,var(--neutral-foreground-hint));margin-left:10px;white-space:nowrap}
`],we={emailsSectionTitle:"Emails"};var at=function(ht,vt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(ht,vt)};let Ge=(()=>{class ht extends tt{static get styles(){return Ke}get strings(){return we}constructor(Ae){super(),this._messages=Ae}get displayName(){return this.strings.emailsSectionTitle}get cardTitle(){return this.strings.emailsSectionTitle}clearState(){super.clearState(),this._messages=[]}renderIcon(){return(0,V.r)(V.A.Messages)}renderCompactView(){var Ae;let ze;if(null!==(Ae=this._messages)&&void 0!==Ae&&Ae.length){const Je=this._messages?this._messages.slice(0,3).map(ut=>this.renderMessage(ut)):[];ze=s.qy`
         ${Je}
       `}else ze=this.renderNoData();return s.qy`
       <div class="root compact">
         ${ze}
       </div>
     `}renderFullView(){var Ae;let ze;return ze=null!==(Ae=this._messages)&&void 0!==Ae&&Ae.length?s.qy`
         ${this._messages.slice(0,5).map(Je=>this.renderMessage(Je))}
       `:this.renderNoData(),s.qy`
       <div class="root">
         ${ze}
       </div>
     `}renderMessage(Ae){return s.qy`
       <div class="message" @click=${()=>this.handleMessageClick(Ae)}>
         <div class="message__detail">
           <div class="message__subject">${Ae.subject}</div>
           <div class="message__from">${Ae.from.emailAddress.name}</div>
           <div class="message__message">${Ae.bodyPreview}</div>
         </div>
         <div class="message__date">${(0,_e.h3)(new Date(Ae.receivedDateTime))}</div>
       </div>
     `}handleMessageClick(Ae){window.open(Ae.webLink,"_blank","noreferrer")}}return function(ht,vt,Ae,ze){var Kt,Je=arguments.length,ut=Je<3?vt:null===ze?ze=Object.getOwnPropertyDescriptor(vt,Ae):ze;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)ut=Reflect.decorate(ht,vt,Ae,ze);else for(var Xt=ht.length-1;Xt>=0;Xt--)(Kt=ht[Xt])&&(ut=(Je<3?Kt(ut):Je>3?Kt(vt,Ae,ut):Kt(vt,Ae))||ut);Je>3&&ut&&Object.defineProperty(vt,Ae,ut)}([(0,c.wk)(),at("design:type",Array)],ht.prototype,"_messages",void 0),ht})();const fe=[s.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none}:host .root.compact{padding:0}:host .root.compact .coworker .coworker__person-image{height:40px;width:40px;border-radius:40px;--person-avatar-size:40px;margin-right:12px}:host .root.compact .coworker .coworker__name{font-size:14px}:host .root.compact .coworker .coworker__title{font-size:12px}:host .root .subtitle{color:var(--organization-sub-title-color,var(--neutral-foreground-hint));font-size:14px;margin:0 20px 8px}:host .root .divider{display:flex;background:var(--organization-coworker-border-color,var(--neutral-stroke-rest));height:1px;margin:26px 20px 18px}:host .root .org-member{height:74px;box-sizing:border-box;border-radius:2px;padding:12px;display:flex;align-items:center;margin-inline:20px}:host .root .org-member.org-member--target{background-color:var(--organization-active-org-member-target-background-color,var(--neutral-fill-active));border:1px solid var(--organization-active-org-member-border-color,var(--accent-foreground-rest))}:host .root .org-member:not(.org-member--target){border:1px solid var(--organization-coworker-border-color,var(--neutral-stroke-rest))}:host .root .org-member:not(.org-member--target):hover{cursor:pointer;background-color:var(--organization-hover-color,var(--neutral-fill-hover))}:host .root .org-member .org-member__person{flex-grow:1}:host .root .org-member .org-member__person .org-member__person-image{--person-avatar-size:var(--organization-member-person-avatar-size, 40px)}:host .root .org-member .org-member__details{flex-grow:1}:host .root .org-member .org-member__details .org-member__name{font-size:16px;color:var(--organization-title-color,var(--neutral-foreground-rest));font-weight:600}:host .root .org-member .org-member__details .org-member__department,:host .root .org-member .org-member__details .org-member__title{font-weight:14px;color:var(--organization-sub-title-color,var(--neutral-foreground-hint))}:host .root .org-member__separator:not(:last-child){border:1px solid var(--organization-coworker-border-color,var(--neutral-stroke-rest));box-sizing:border-box;width:0;margin:0 50%;height:14px}:host .root .coworker{display:flex;align-items:center;padding:10px 20px}:host .root .coworker:hover{cursor:pointer;background-color:var(--organization-coworker-hover-color,var(--neutral-fill-hover))}:host .root .coworker .coworker__person{height:46px;border-radius:46px;margin-right:8px}:host .root .coworker .coworker__person .coworker__person-image{--person-avatar-size:var(--organization-coworker-person-avatar-size, 40px)}:host .root .direct-report__compact{padding:12px 20px}:host .root .direct-report__compact .direct-report{margin-right:4px}:host .root .direct-report-list{border:1px solid var(--organization-coworker-border-color,var(--neutral-stroke-rest));margin-inline:20px}:host .root .direct-report-list .org-member--direct-report{border:none;cursor:pointer;margin-inline:0}:host .root .direct-report-list .org-member--direct-report .direct-report__person-image{--person-avatar-size:var(--organization-direct-report-person-avatar-size, 38px)}[dir=rtl] .org-member .org-member__more{transform:scaleX(-1);filter:fliph;filter:"FlipH"}@media (forced-colors:active) and (prefers-color-scheme:dark){:host svg,:host svg>path{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}@media (forced-colors:active) and (prefers-color-scheme:light){:host svg,:host svg>path{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}
`],j={reportsToSectionTitle:"Reports to",directReportsSectionTitle:"Direct reports",organizationSectionTitle:"Organization",youWorkWithSubSectionTitle:"You work with",userWorksWithSubSectionTitle:"works with"};var ce=function(ht,vt,Ae,ze){var Kt,Je=arguments.length,ut=Je<3?vt:null===ze?ze=Object.getOwnPropertyDescriptor(vt,Ae):ze;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)ut=Reflect.decorate(ht,vt,Ae,ze);else for(var Xt=ht.length-1;Xt>=0;Xt--)(Kt=ht[Xt])&&(ut=(Je<3?Kt(ut):Je>3?Kt(vt,Ae,ut):Kt(vt,Ae))||ut);return Je>3&&ut&&Object.defineProperty(vt,Ae,ut),ut},xe=function(ht,vt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(ht,vt)};let wt=(()=>{class ht extends tt{static get styles(){return fe}get strings(){return j}constructor(Ae,ze){super(),this._state=Ae,this._me=ze}clearState(){super.clearState(),this._state=void 0,this._me=void 0}get displayName(){const{person:Ae,directReports:ze}=this._state;return!Ae.manager&&ze?.length?`${this.strings.directReportsSectionTitle} (${ze.length})`:this.strings.reportsToSectionTitle}get cardTitle(){return this.strings.organizationSectionTitle}renderIcon(){return(0,V.r)(V.A.Organization)}renderCompactView(){var Ae;let ze;if(null===(Ae=this._state)||void 0===Ae||!Ae.person)return null;const{person:Je,directReports:ut}=this._state;return Je?(Je.manager?ze=this.renderCoworker(Je.manager):ut?.length&&(ze=this.renderCompactDirectReports()),s.qy`
        <div class="root compact">
          ${ze}
        </div>
      `):null}renderFullView(){var Ae;let ze;if(null===(Ae=this._state)||void 0===Ae||!Ae.person)return null;const{person:Je,directReports:ut,people:Kt}=this._state;if(!Je&&!ut&&!Kt)return null;{const Xt=this.renderManagers(),cn=this.renderCurrentUser(),En=this.renderDirectReports(),mn=this.renderCoworkers();ze=s.qy`
          ${Xt} ${cn} ${En} ${mn}
        `}return s.qy`
       <div class="root" dir=${this.direction}>
         ${ze}
       </div>
     `}renderManager(Ae){return R.Q`
      <div
        class="org-member"
        @keydown=${ze=>{("Enter"===ze.code||" "===ze.code)&&this.navigateCard(Ae)}}
        @click=${()=>this.navigateCard(Ae)}
      >
        <div class="org-member__person">
          <mgt-person
            class="org-member__person-image"
            .personDetails=${Ae}
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
     `}renderManagers(){const{person:Ae}=this._state;if(!Ae?.manager)return null;const ze=[];let Je=Ae;for(;Je.manager;)ze.push(Je.manager),Je=Je.manager;return ze.length?ze.reverse().map(ut=>this.renderManager(ut)):null}renderDirectReports(){const{directReports:Ae}=this._state;return Ae?.length?s.qy`
      <div class="org-member__separator"></div>
      <div class="direct-report-list">
        ${Ae.map(ze=>R.Q`
            <div
              class="org-member org-member--direct-report"
              @keydown=${Je=>{("Enter"===Je.code||" "===Je.code)&&this.navigateCard(ze)}}
              @click=${()=>this.navigateCard(ze)}
            >
              <div class="org-member__person">
                <mgt-person
                  class="org-member__person-image"
                  .personDetails=${ze}
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
     `:null}renderCompactDirectReports(){const{directReports:Ae}=this._state;return s.qy`
      <div class="direct-report__compact">
        ${Ae.slice(0,6).map(ze=>R.Q`
            <div
              class="direct-report"
              @keydown=${Je=>{("Enter"===Je.code||" "===Je.code)&&this.navigateCard(ze)}}
              @click=${()=>this.navigateCard(ze)}
            >
              <mgt-person
                class="direct-report__person-image"
                .personDetails=${ze}
                .fetchImage=${!0}
                .showPresence=${!0}
                view="twolines"
              ></mgt-person>
            </div>
          `)}
      </div>
    `}renderCurrentUser(){const{person:Ae}=this._state;return R.Q`
       <div class="org-member org-member--target">
         <div class="org-member__person">
           <mgt-person
              class="org-member__person-image"
             .personDetails=${Ae}
             .fetchImage=${!0}
             .showPresence=${!0}
             view="twolines"
           ></mgt-person>
         </div>
       </div>
     `}renderCoworker(Ae){return R.Q`
      <div
        class="coworker"
        @keydown=${ze=>{("Enter"===ze.code||" "===ze.code)&&this.navigateCard(Ae)}}
        @click=${()=>this.navigateCard(Ae)}
      >
        <div class="coworker__person">
          <mgt-person
            class="coworker__person-image"
            .personDetails=${Ae}
            .fetchImage=${!0}
            .showPresence=${!0}
            view="twolines"
          ></mgt-person>
        </div>
      </div>
    `}renderCoworkers(){const{people:Ae}=this._state;return Ae?.length?s.qy`
       <div class="divider"></div>
       <div class="subtitle" tabindex="0">${this._me.id===this._state.person.id?this.strings.youWorkWithSubSectionTitle:`${this._state.person.givenName} ${this.strings.userWorksWithSubSectionTitle}`}</div>
       <div>
         ${Ae.slice(0,6).map(Je=>this.renderCoworker(Je))}
       </div>
     `:null}}return ce([(0,c.wk)(),xe("design:type",Object)],ht.prototype,"_state",void 0),ce([(0,c.wk)(),xe("design:type",Object)],ht.prototype,"_me",void 0),ht})();const it=[s.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none;background-color:var(--profile-background-color,--neutral-layer-1)}:host .root{padding:20px 0}:host .root.compact{padding:0}:host .root .title{font-size:14px;font-weight:600;color:var(--profile-title-color,var(--neutral-foreground-rest));margin:0 20px 12px}:host .root section{margin-bottom:24px;padding:0 20px}:host .root section:last-child{margin:0}:host .root section .section__title{font-size:14px;color:var(--profile-section-title-color,var(--neutral-foreground-hint))}:host .root section .section__content{display:flex;flex-direction:column;margin-top:10px}:host .root .token-list{display:flex;flex-flow:row wrap;margin-top:-10px}:host .root .token-list .token-list__item{text-overflow:ellipsis;white-space:nowrap;display:inline-block;overflow:hidden;font-size:14px;align-items:center;background:var(--profile-token-item-background-color,var(--neutral-fill-secondary-rest));border-radius:2px;max-height:28px;padding:4px 8px;margin-right:10px;margin-top:10px;color:var(--profile-token-item-color,var(--neutral-foreground-rest))}:host .root .token-list .token-list__item:last-child{margin-right:initial}:host .root .token-list .token-list__item.overflow{display:none}:host .root .token-list .token-list__item.token-list__item--show-overflow{cursor:pointer;user-select:unset;background:0 0;color:var(--profile-token-overflow-color,var(--accent-foreground-rest))}:host .root .data-list__item{margin-bottom:20px}:host .root .data-list__item:last-child{margin-bottom:initial}:host .root .data-list__item .data-list__item__header{display:flex;justify-content:space-between;align-items:center}:host .root .data-list__item .data-list__item__content{font-size:12px;line-height:16px;color:var(--profile-section-title-color,var(--neutral-foreground-hint));margin-top:4px}:host .root .data-list__item .data-list__item__title{font-size:14px;line-height:16px;color:var(--profile-title-color,var(--neutral-foreground-rest))}:host .root .data-list__item .data-list__item__date-range{color:var(--profile-section-title-color,var(--neutral-foreground-hint));font-size:10px;line-height:12px}:host .root .language__proficiency{opacity:.77}:host .root .work-position .work-position__company{color:#023b8f}:host .root .work-position .work-position__location{font-size:10px;color:var(--profile-section-title-color,var(--neutral-foreground-hint));line-height:16px}:host .root .educational-activity .educational-activity__degree{font-size:12px;line-height:14px;color:var(--profile-section-title-color,var(--neutral-foreground-hint))}:host .root .birthday{display:flex;align-items:center;margin-top:-6px}:host .root .birthday .birthday__icon{margin-right:8px}:host .root .birthday .birthday__date{font-size:12px;color:var(--profile-title-color,var(--neutral-foreground-rest))}[dir=rtl] .token-list__item{margin-right:0!important}
`],gt={SkillsAndExperienceSectionTitle:"Skills & Experience",AboutCompactSectionTitle:"About",SkillsSubSectionTitle:"Skills",LanguagesSubSectionTitle:"Languages",WorkExperienceSubSectionTitle:"Work Experience",EducationSubSectionTitle:"Education",professionalInterestsSubSectionTitle:"Professional Interests",personalInterestsSubSectionTitle:"Personal Interests",birthdaySubSectionTitle:"Birthday",currentYearSubtitle:"Current",socialMediaSubSectionTitle:"Social Media"};var Xe=function(ht,vt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(ht,vt)};let nn=(()=>{class ht extends tt{static get styles(){return it}get strings(){return gt}get displayName(){return this.strings.SkillsAndExperienceSectionTitle}get cardTitle(){return this.strings.AboutCompactSectionTitle}get hasData(){var Ae,ze;if(!this.profile)return!1;const{languages:Je,skills:ut,positions:Kt,educationalActivities:Xt}=this.profile;return[this._birthdayAnniversary,null===(Ae=this._personalInterests)||void 0===Ae?void 0:Ae.length,null===(ze=this._professionalInterests)||void 0===ze?void 0:ze.length,Je?.length,ut?.length,Kt?.length,Xt?.length].filter(cn=>!!cn).length>0}get profile(){return this._profile}set profile(Ae){Ae!==this._profile&&(this._profile=Ae,this._birthdayAnniversary=Ae?.anniversaries?Ae.anniversaries.find(this.isBirthdayAnniversary):null,this._personalInterests=Ae?.interests?Ae.interests.filter(this.isPersonalInterest):null,this._professionalInterests=Ae?.interests?Ae.interests.filter(this.isProfessionalInterest):null)}constructor(Ae){super(),this.isPersonalInterest=ze=>{var Je;return null===(Je=ze.categories)||void 0===Je?void 0:Je.includes("personal")},this.isProfessionalInterest=ze=>{var Je;return null===(Je=ze.categories)||void 0===Je?void 0:Je.includes("professional")},this.isBirthdayAnniversary=ze=>"birthday"===ze.type,this.profile=Ae}renderIcon(){return(0,V.r)(V.A.Profile)}clearState(){super.clearState(),this.profile=null}renderCompactView(){return s.qy`
       <div class="root compact" dir=${this.direction}>
         ${this.renderSubSections().slice(0,2)}
       </div>
     `}renderFullView(){return this.initPostRenderOperations(),s.qy`
       <div class="root" dir=${this.direction}>
         ${this.renderSubSections()}
       </div>
     `}renderSubSections(){return[this.renderSkills(),this.renderBirthday(),this.renderLanguages(),this.renderWorkExperience(),this.renderEducation(),this.renderProfessionalInterests(),this.renderPersonalInterests()].filter(ze=>!!ze)}renderLanguages(){var Ae;const{languages:ze}=this._profile;if(!ze?.length)return null;const Je=[];for(const Kt of ze){let Xt=null;!(null===(Ae=Kt.proficiency)||void 0===Ae)&&Ae.length&&(Xt=s.qy`
           <span class="language__proficiency" tabindex="0">
             &nbsp;(${Kt.proficiency})
           </span>
         `),Je.push(s.qy`
         <div class="token-list__item language">
           <span class="language__title" tabindex="0">${Kt.displayName}</span>
           ${Xt}
         </div>
       `)}return s.qy`
       <section>
         <div class="section__title" tabindex="0">${Je.length?this.strings.LanguagesSubSectionTitle:""}</div>
         <div class="section__content">
           <div class="token-list">
             ${Je}
           </div>
         </div>
       </section>
     `}renderSkills(){const{skills:Ae}=this._profile;if(!Ae?.length)return null;const ze=[];for(const ut of Ae)ze.push(s.qy`
         <div class="token-list__item skill" tabindex="0">
           ${ut.displayName}
         </div>
       `);return s.qy`
       <section>
         <div class="section__title" tabindex="0">${ze.length?this.strings.SkillsSubSectionTitle:""}</div>
         <div class="section__content">
           <div class="token-list">
             ${ze}
           </div>
         </div>
       </section>
     `}renderWorkExperience(){var Ae,ze,Je,ut,Kt;const{positions:Xt}=this._profile;if(!Xt?.length)return null;const cn=[];for(const mn of this._profile.positions)(mn.detail.description||""!==mn.detail.jobTitle)&&cn.push(s.qy`
           <div class="data-list__item work-position">
             <div class="data-list__item__header">
               <div class="data-list__item__title" tabindex="0">${null===(Ae=mn.detail)||void 0===Ae?void 0:Ae.jobTitle}</div>
               <div class="data-list__item__date-range" tabindex="0">
                 ${this.getDisplayDateRange(mn.detail)}
               </div>
             </div>
             <div class="data-list__item__content">
               <div class="work-position__company" tabindex="0">
                 ${null===(Je=null===(ze=mn?.detail)||void 0===ze?void 0:ze.company)||void 0===Je?void 0:Je.displayName}
               </div>
               <div class="work-position__location" tabindex="0">
                 ${this.displayLocation(null===(Kt=null===(ut=mn?.detail)||void 0===ut?void 0:ut.company)||void 0===Kt?void 0:Kt.address)}
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
     `}renderEducation(){const{educationalActivities:Ae}=this._profile;if(!Ae?.length)return null;const ze=[];for(const ut of Ae)ze.push(s.qy`
         <div class="data-list__item educational-activity">
           <div class="data-list__item__header">
             <div class="data-list__item__title" tabindex="0">${ut.institution.displayName}</div>
             <div class="data-list__item__date-range" tabindex="0">
               ${this.getDisplayDateRange(ut)}
             </div>
           </div>
           ${ut.program.displayName?s.qy`<div class="data-list__item__content">
                  <div class="educational-activity__degree" tabindex="0">
                  ${ut.program.displayName}
                </div>`:s.s6}
         </div>
       `);return s.qy`
       <section>
         <div class="section__title" tabindex="0">${ze.length?this.strings.EducationSubSectionTitle:""}</div>
         <div class="section__content">
           <div class="data-list">
             ${ze}
           </div>
         </div>
       </section>
     `}renderProfessionalInterests(){var Ae;if(null===(Ae=this._professionalInterests)||void 0===Ae||!Ae.length)return null;const ze=[];for(const ut of this._professionalInterests)ze.push(s.qy`
         <div class="token-list__item interest interest--professional" tabindex="0">
           ${ut.displayName}
         </div>
       `);return s.qy`
       <section>
         <div class="section__title" tabindex="0">${ze.length?this.strings.professionalInterestsSubSectionTitle:""}</div>
         <div class="section__content">
           <div class="token-list">
             ${ze}
           </div>
         </div>
       </section>
     `}renderPersonalInterests(){var Ae;if(null===(Ae=this._personalInterests)||void 0===Ae||!Ae.length)return null;const ze=[];for(const ut of this._personalInterests)ze.push(s.qy`
         <div class="token-list__item interest interest--personal" tabindex="0">
           ${ut.displayName}
         </div>
       `);return s.qy`
       <section>
         <div class="section__title" tabindex="0">${ze.length?this.strings.personalInterestsSubSectionTitle:""}</div>
         <div class="section__content">
           <div class="token-list">
             ${ze}
           </div>
         </div>
       </section>
     `}renderBirthday(){var Ae;return null!==(Ae=this._birthdayAnniversary)&&void 0!==Ae&&Ae.date?s.qy`
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
     `:null}getDisplayDate(Ae){return Ae.toLocaleString("default",{day:"numeric",month:"long"})}getDisplayDateRange(Ae){if(!Ae.startMonthYear)return s.s6;const ze=new Date(Ae.startMonthYear).getFullYear();return 0===ze||1===ze?s.s6:`${ze} \u2014 ${Ae.endMonthYear?new Date(Ae.endMonthYear).getFullYear():this.strings.currentYearSubtitle}`}displayLocation(Ae){return Ae?.city?Ae.state?`${Ae.city}, ${Ae.state}`:Ae.city:s.s6}initPostRenderOperations(){setTimeout(()=>{try{this.shadowRoot.querySelectorAll("section").forEach(ze=>{this.handleTokenOverflow(ze)})}catch{}},0)}handleTokenOverflow(Ae){const ze=Ae.querySelectorAll(".token-list");if(ze?.length)for(const Je of Array.from(ze)){const ut=Je.querySelectorAll(".token-list__item");if(!ut?.length)continue;let Kt=null,Xt=ut[0].getBoundingClientRect();const cn=Je.getBoundingClientRect(),En=2*Xt.height+cn.top;for(let mn=0;mn<ut.length-1;mn++)if(Xt=ut[mn].getBoundingClientRect(),Xt.top>En){Kt=Array.from(ut).slice(mn,ut.length);break}if(Kt){Kt.forEach(vi=>vi.classList.add("overflow"));const mn=document.createElement("div");mn.classList.add("token-list__item"),mn.classList.add("token-list__item--show-overflow"),mn.tabIndex=0,mn.innerText=`+ ${Kt.length} more`;const wi=()=>{mn.remove(),Kt.forEach(vi=>vi.classList.remove("overflow"))};mn.addEventListener("click",()=>{wi()}),mn.addEventListener("keydown",vi=>{"Enter"===vi.code&&wi()}),Je.appendChild(mn)}}}}return function(ht,vt,Ae,ze){var Kt,Je=arguments.length,ut=Je<3?vt:null===ze?ze=Object.getOwnPropertyDescriptor(vt,Ae):ze;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)ut=Reflect.decorate(ht,vt,Ae,ze);else for(var Xt=ht.length-1;Xt>=0;Xt--)(Kt=ht[Xt])&&(ut=(Je<3?Kt(ut):Je>3?Kt(vt,Ae,ut):Kt(vt,Ae))||ut);Je>3&&ut&&Object.defineProperty(vt,Ae,ut)}([(0,c.MZ)({attribute:!1}),Xe("design:type",Object),Xe("design:paramtypes",[Object])],ht.prototype,"profile",null),ht})();const An={showMoreSectionButton:"Show more",endOfCard:"End of the card",quickMessage:"Send a quick message",expandDetailsLabel:"Expand details",sendMessageLabel:"Send message",emailButtonLabel:"Email",callButtonLabel:"Call",chatButtonLabel:"Chat",closeCardLabel:"Close card",videoButtonLabel:"Video",goBackLabel:"Go Back"};var Mn=h(9546),gi=h(5409),gn=h(742),hi=h(9808),Fn=h(4192),Pn=h(7153),Fi=h(175),en=h(7947),Nn=h(9605),Ci=h(6105),nr=h(4632);let ft=(()=>{class ht extends nr.g{constructor(){super(...arguments),this.orientation="horizontal",this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=Ae=>"true"===Ae.getAttribute("aria-disabled"),this.isHiddenElement=Ae=>Ae.hasAttribute("hidden"),this.isFocusableElement=Ae=>!this.isDisabledElement(Ae)&&!this.isHiddenElement(Ae),this.setTabs=()=>{const Ae="gridColumn",ze="gridRow",Je=this.isHorizontal()?Ae:ze;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((ut,Kt)=>{if("tab"===ut.slot){const Xt=this.activeTabIndex===Kt&&this.isFocusableElement(ut);this.activeindicator&&this.isFocusableElement(ut)&&(this.showActiveIndicator=!0);const cn=this.tabIds[Kt],En=this.tabpanelIds[Kt];ut.setAttribute("id",cn),ut.setAttribute("aria-selected",Xt?"true":"false"),ut.setAttribute("aria-controls",En),ut.addEventListener("click",this.handleTabClick),ut.addEventListener("keydown",this.handleTabKeyDown),ut.setAttribute("tabindex",Xt?"0":"-1"),Xt&&(this.activetab=ut,this.activeid=cn)}ut.style[Ae]="",ut.style[ze]="",ut.style[Je]=`${Kt+1}`,this.isHorizontal()?ut.classList.remove("vertical"):ut.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((Ae,ze)=>{const Je=this.tabIds[ze];Ae.setAttribute("id",this.tabpanelIds[ze]),Ae.setAttribute("aria-labelledby",Je),this.activeTabIndex!==ze?Ae.setAttribute("hidden",""):Ae.removeAttribute("hidden")})},this.handleTabClick=Ae=>{const ze=Ae.currentTarget;1===ze.nodeType&&this.isFocusableElement(ze)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(ze),this.setComponent())},this.handleTabKeyDown=Ae=>{if(this.isHorizontal())switch(Ae.key){case Pn.kT:Ae.preventDefault(),this.adjustBackward(Ae);break;case Pn.bb:Ae.preventDefault(),this.adjustForward(Ae)}else switch(Ae.key){case Pn.I5:Ae.preventDefault(),this.adjustBackward(Ae);break;case Pn.HX:Ae.preventDefault(),this.adjustForward(Ae)}switch(Ae.key){case Pn.Tg:Ae.preventDefault(),this.adjust(-this.activeTabIndex);break;case Pn.FM:Ae.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=Ae=>{const ze=this.tabs;let Je=0;for(Je=this.activetab?ze.indexOf(this.activetab)+1:1,Je===ze.length&&(Je=0);Je<ze.length&&ze.length>1;){if(this.isFocusableElement(ze[Je])){this.moveToTabByIndex(ze,Je);break}if(this.activetab&&Je===ze.indexOf(this.activetab))break;Je+1>=ze.length?Je=0:Je+=1}},this.adjustBackward=Ae=>{const ze=this.tabs;let Je=0;for(Je=this.activetab?ze.indexOf(this.activetab)-1:0,Je=Je<0?ze.length-1:Je;Je>=0&&ze.length>1;){if(this.isFocusableElement(ze[Je])){this.moveToTabByIndex(ze,Je);break}Je-1<0?Je=ze.length-1:Je-=1}},this.moveToTabByIndex=(Ae,ze)=>{const Je=Ae[ze];this.activetab=Je,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=ze,Je.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(Ae,ze){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(Je=>Je.id===Ae),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(Ae=>{var ze;return null!==(ze=Ae.getAttribute("id"))&&void 0!==ze?ze:`tab-${(0,Fi.NF)()}`})}getTabPanelIds(){return this.tabpanels.map(Ae=>{var ze;return null!==(ze=Ae.getAttribute("id"))&&void 0!==ze?ze:`panel-${(0,Fi.NF)()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return"horizontal"===this.orientation}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const Ae=this.isHorizontal()?"gridColumn":"gridRow",ze=this.isHorizontal()?"translateX":"translateY",Je=this.isHorizontal()?"offsetLeft":"offsetTop",ut=this.activeIndicatorRef[Je];this.activeIndicatorRef.style[Ae]=`${this.activeTabIndex+1}`;const Kt=this.activeIndicatorRef[Je];this.activeIndicatorRef.style[Ae]=`${this.prevActiveTabIndex+1}`,this.activeIndicatorRef.style.transform=`${ze}(${Kt-ut}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[Ae]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${ze}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(Ae){const ze=this.tabs.filter(Xt=>this.isFocusableElement(Xt)),Je=ze.indexOf(this.activetab),ut=(0,en.AB)(0,ze.length-1,Je+Ae),Kt=this.tabs.indexOf(ze[ut]);Kt>-1&&this.moveToTabByIndex(this.tabs,Kt)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}return(0,gn.Cg)([hi.CF],ht.prototype,"orientation",void 0),(0,gn.Cg)([hi.CF],ht.prototype,"activeid",void 0),(0,gn.Cg)([Fn.sH],ht.prototype,"tabs",void 0),(0,gn.Cg)([Fn.sH],ht.prototype,"tabpanels",void 0),(0,gn.Cg)([(0,hi.CF)({mode:"boolean"})],ht.prototype,"activeindicator",void 0),(0,gn.Cg)([Fn.sH],ht.prototype,"activeIndicatorRef",void 0),(0,gn.Cg)([Fn.sH],ht.prototype,"showActiveIndicator",void 0),ht})();(0,Ci.X)(ft,Nn.qw);var Et=h(9953),qe=h(633),pt=h(8287),qt=h(1589),In=h(9760),ii=h(3226),At=h(8322),mi=h(4954),$n=h(9457),Vn=h(4583),Ji=h(9709);const Gr=ft.compose({baseName:"tabs",template:(ht,vt)=>Et.q`
    <template class="${Ae=>Ae.orientation}">
        ${(0,Nn.LT)(ht,vt)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${(0,qe.e)("tabs")}></slot>

            ${(0,pt.z)(Ae=>Ae.showActiveIndicator,Et.q`
                    <div
                        ${(0,qt.K)("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${(0,Nn.aO)(ht,vt)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${(0,qe.e)("tabpanels")}></slot>
        </div>
    </template>
`,styles:(ht,vt)=>In.A`
      ${(0,At.V)("grid")} :host {
        box-sizing: border-box;
        ${Ji.Ah}
        color: ${$n.lHw};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${Vn.D} * 1px); auto;
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
        border-radius: calc(${$n.PbG} * 1px);
        justify-self: center;
        background: ${$n.IRh};
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
        margin-inline-start: calc(${$n.vdx} * 1px);
        border-radius: calc(${$n.PbG} * 1px);
        align-self: center;
        background: ${$n.IRh};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors((0,mi.mr)(In.A`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${ii.A.Highlight};
        }
      `))});let yt=(()=>{class ht extends nr.g{}return(0,gn.Cg)([(0,hi.CF)({mode:"boolean"})],ht.prototype,"disabled",void 0),ht})();var st=h(4932),zt=h(5532);const Ht=yt.compose({baseName:"tab",template:(ht,vt)=>Et.q`
    <template slot="tab" role="tab" aria-disabled="${Ae=>Ae.disabled}">
        <slot></slot>
    </template>
`,styles:(ht,vt)=>In.A`
      ${(0,At.V)("inline-flex")} :host {
        box-sizing: border-box;
        ${Ji.Ah}
        height: calc((${Vn.D} + (${$n.vR1} * 2)) * 1px);
        padding: 0 calc((6 + (${$n.vR1} * 2 * ${$n.Brd})) * 1px);
        color: ${$n.lHw};
        border-radius: calc(${$n.PbG} * 1px);
        border: calc(${$n.XAH} * 1px) solid transparent;
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
        color: ${$n.lHw};
      }

      :host(:${st.N}) {
        ${zt.W}
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
        color: ${$n.lHw};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors((0,mi.mr)(In.A`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${ii.A.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: transparent;
            color: ${ii.A.Highlight};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: transparent;
            color: ${ii.A.Highlight};
            fill: currentcolor;
          }
          :host(:${st.N}) {
            background: transparent;
            outline-color: ${ii.A.ButtonText};
          }
        `))}),di=class Un extends nr.g{}.compose({baseName:"tab-panel",template:(ht,vt)=>Et.q`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(ht,vt)=>In.A`
  ${(0,At.V)("block")} :host {
    box-sizing: border-box;
    ${Ji.Ah}
    padding: 0 calc((6 + (${$n.vR1} * 2 * ${$n.Brd})) * 1px);
  }
`});var ki=h(7043),Ti=h(8955),He=h(3601),ot=h(1965),et=function(ht,vt,Ae,ze){var Kt,Je=arguments.length,ut=Je<3?vt:null===ze?ze=Object.getOwnPropertyDescriptor(vt,Ae):ze;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)ut=Reflect.decorate(ht,vt,Ae,ze);else for(var Xt=ht.length-1;Xt>=0;Xt--)(Kt=ht[Xt])&&(ut=(Je<3?Kt(ut):Je>3?Kt(vt,Ae,ut):Kt(vt,Ae))||ut);return Je>3&&ut&&Object.defineProperty(vt,Ae,ut),ut},Rt=function(ht,vt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(ht,vt)},Mt=function(ht,vt,Ae,ze){return new(Ae||(Ae=Promise))(function(ut,Kt){function Xt(mn){try{En(ze.next(mn))}catch(wi){Kt(wi)}}function cn(mn){try{En(ze.throw(mn))}catch(wi){Kt(wi)}}function En(mn){mn.done?ut(mn.value):function Je(ut){return ut instanceof Ae?ut:new Ae(function(Kt){Kt(ut)})}(mn.value).then(Xt,cn)}En((ze=ze.apply(ht,vt||[])).next())})};const ln=()=>{(0,He.E)(gi.z1,Gr,Ht,di,ki.zi,Ti.oR),(0,ct.N)("person-card",sn),(0,ot.i)(),(0,ct.N)("contact",ie),(0,nt.sN)(),(0,ct.N)("organization",wt),(0,ct.N)("messages",Ge),(0,ue.x)(),(0,ct.N)("profile",nn),customElements.get((0,ct.F)("person"))||(0,nt.sN)()};let sn=(()=>{class ht extends y.N{static get styles(){return Pe}get strings(){return An}static get requiredScopes(){return(()=>{const ht=[];return W.sections.files&&ht.push("Sites.Read.All"),W.sections.mailMessages&&(ht.push("Mail.Read"),ht.push("Mail.ReadBasic")),W.sections.organization&&(ht.push("User.Read.All"),W.sections.organization.showWorksWith&&ht.push("People.Read.All")),W.sections.profile&&ht.push("User.Read.All"),W.useContactApis&&ht.push("Contacts.Read"),ht.indexOf("User.Read.All")<0&&(ht.push("User.ReadBasic.All"),ht.push("User.Read")),ht.indexOf("People.Read.All")<0&&ht.push("People.Read"),W.isSendMessageVisible&&ht.push("Chat.ReadWrite"),[...new Set(ht)]})()}get personDetails(){return this._personDetails}set personDetails(Ae){this._personDetails!==Ae&&(this._personDetails=Ae,this.personImage=this.getImage())}get personQuery(){return this._personQuery}set personQuery(Ae){this._personQuery!==Ae&&(this._personQuery=Ae,this.personDetails=null,this._cardState=null)}get userId(){return this._userId}set userId(Ae){Ae!==this._userId&&(this._userId=Ae,this.personDetails=null,this._cardState=null)}get internalPersonDetails(){var Ae;return(null===(Ae=this._cardState)||void 0===Ae?void 0:Ae.person)||this.personDetails}constructor(){super(),this.isSendingMessage=!1,this.goBack=()=>{var Ae;if(null===(Ae=this._history)||void 0===Ae||!Ae.length)return;const ze=this._history.pop();this._currentSection=null;const Je=this.renderRoot.querySelector("fluent-tab");Je&&Je.click(),this._cardState=ze.state,this._personDetails=ze.state.person,this.personImage=ze.personImage,this.loadSections()},this.renderContent=()=>{var Ae;if(!this.internalPersonDetails)return this.renderNoData();const ze=this.internalPersonDetails,Je=this.getImage();if(this.hasTemplate("default"))return this.renderTemplate("default",{person:this.internalPersonDetails,personImage:Je});let ut;ut=this.strings.closeCardLabel;const Kt=this.isExpanded?s.qy`
           <div class="close-card-container">
             <fluent-button 
              appearance="lightweight" 
              class="close-button" 
              aria-label=${ut}
              @click=${this.closeCard} >
               ${(0,V.r)(V.A.Close)}
             </fluent-button>
           </div>
         `:null;ut=this.strings.goBackLabel;const Xt=null!==(Ae=this._history)&&void 0!==Ae&&Ae.length?s.qy`
            <div class="nav">
              <fluent-button 
                appearance="lightweight"
                class="nav__back" 
                aria-label=${ut} 
                @keydown=${this.handleGoBack}
                @click=${this.goBack}>${(0,V.r)(V.A.Back)}
               </fluent-button>
            </div>
          `:null;let cn=this.renderTemplate("person-details",{person:this.internalPersonDetails,personImage:Je});if(!cn){const wi=this.renderPerson(),vi=this.renderContactIcons(ze);cn=s.qy`
         ${wi} ${vi}
       `}const En=this.isExpanded?this.renderExpandedDetails():this.renderExpandedDetailsButton();this._windowHeight=window.innerHeight&&document.documentElement.clientHeight?Math.min(window.innerHeight,document.documentElement.clientHeight):window.innerHeight||document.documentElement.clientHeight,this._windowHeight<250&&(this._smallView=!0);const mn=this.lockTabNavigation?s.qy`<div @keydown=${this.handleEndOfCard} aria-label=${this.strings.endOfCard} tabindex="0" id="end-of-container"></div>`:s.qy``;return s.qy`
      <div class="root" dir=${this.direction}>
        <div class=${(0,x.H)({small:this._smallView})}>
          ${Xt}
          ${Kt}
          <div class="person-details-container">${cn}</div>
          <div class="expanded-details-container">${En}</div>
          ${mn}
        </div>
      </div>
     `},this.handleEndOfCard=Ae=>{if(Ae&&"Tab"===Ae.code){const ze=this.renderRoot.querySelector("#end-of-container");if(ze){ze.blur();const Je=this.renderRoot.querySelector("mgt-person");Je&&Je.focus()}}},this.closeCard=()=>{this.updateCurrentSection(null),this.isExpanded=!1},this.sendQuickMessage=()=>Mt(this,void 0,void 0,function*(){const Ae=this._chatInput.trim();if(!Ae?.length)return;const ze=this.personDetails,Je=this._me.userPrincipalName;this.isSendingMessage=!0;const ut=yield((ht,vt,Ae)=>re(void 0,void 0,void 0,function*(){const ze={chatType:"oneOnOne",members:[{"@odata.type":"#microsoft.graph.aadUserConversationMember",roles:["owner"],"user@odata.bind":`https://graph.microsoft.com/v1.0/users('${Ae}')`},{"@odata.type":"#microsoft.graph.aadUserConversationMember",roles:["owner"],"user@odata.bind":`https://graph.microsoft.com/v1.0/users('${vt}')`}]};return yield ht.api("/chats").header("Cache-Control","no-store").middlewareOptions((0,T.F)(X)).post(ze)}))(this._graph,ze.userPrincipalName,Je),Kt={body:{content:Ae}};yield((ht,vt,Ae)=>re(void 0,void 0,void 0,function*(){return yield ht.api(`/chats/${vt}/messages`).header("Cache-Control","no-store").middlewareOptions((0,T.F)(Be)).post(Ae)}))(this._graph,ut.id,Kt),this.isSendingMessage=!1,this.clearInputData()}),this.emailUser=()=>{const Ae=this.internalPersonDetails;if(Ae){const ze=(0,H.iu)(Ae);ze&&window.open("mailto:"+ze,"_blank","noreferrer")}},this.callUser=()=>{var Ae,ze;const Je=this.personDetails,ut=this.personDetails;if(null!==(Ae=Je?.businessPhones)&&void 0!==Ae&&Ae.length){const Kt=Je.businessPhones[0];Kt&&window.open("tel:"+Kt,"_blank","noreferrer")}else if(null!==(ze=ut?.phones)&&void 0!==ze&&ze.length){const Xt=this.getPersonBusinessPhones(ut)[0];Xt&&window.open("tel:"+Xt,"_blank","noreferrer")}},this.chatUser=(Ae=null)=>{const ze=this.personDetails;if(ze?.userPrincipalName){let ut=`https://teams.microsoft.com/l/chat/0/0?users=${ze.userPrincipalName}`;Ae?.length&&(ut+=`&message=${Ae}`);const Kt=()=>window.open(ut,"_blank","noreferrer");E.isAvailable?E.executeDeepLink(ut,Xt=>{Xt||Kt()}):Kt()}},this.videoCallUser=()=>{const Ae=this.personDetails;if(Ae?.userPrincipalName){const Je=`https://teams.microsoft.com/l/call/0/0?users=${Ae.userPrincipalName}&withVideo=true`,ut=()=>window.open(Je,"_blank");E.isAvailable?E.executeDeepLink(Je,Kt=>{Kt||ut()}):ut()}},this.showExpandedDetails=()=>{const Ae=this.renderRoot.querySelector(".root");Ae?.animate&&Ae.animate([{height:"auto",transformOrigin:"top left"},{height:"auto",transformOrigin:"top left"}],{duration:1e3,easing:"ease-in-out",fill:"both"}),this.isExpanded=!0,this.fireCustomEvent("expanded",null,!0)},this.sendQuickMessageOnEnter=Ae=>{"Enter"===Ae.code&&this.sendQuickMessage()},this.handleGoBack=Ae=>{"Enter"===Ae.code&&this.goBack()},this._chatInput="",this._currentSection=null,this._history=[],this.sections=[],this._graph=null}navigate(Ae){this._history.push({personDetails:this.personDetails,personImage:this.getImage(),state:this._cardState}),this.personDetails=Ae,this._cardState=null,this.personImage=null,this._currentSection=null,this.sections=[],this._chatInput=""}clearHistory(){var Ae;if(this._currentSection=null,null===(Ae=this._history)||void 0===Ae||!Ae.length)return;const ze=this._history[0];this._history=[],this._cardState=ze.state,this._personDetails=ze.personDetails,this.personImage=ze.personImage,this.loadSections()}args(){return[this.providerState,this.personDetails,this.personQuery,this.personImage,this.userId]}renderNoData(){return this.renderTemplate("no-data",null)||s.qy``}renderPerson(){return R.Q`
      <mgt-person
        tabindex="0"
        class="person-image"
        .personDetails=${this.internalPersonDetails}
        .personImage=${this.getImage()}
        .personPresence=${this.personPresence}
        .showPresence=${this.showPresence}
        view="threelines"
      ></mgt-person>
    `}renderPersonSubtitle(Ae){if((0,Mn.QY)(Ae=Ae||this.internalPersonDetails)&&Ae.department)return s.qy`
       <div class="department">${Ae.department}</div>
     `}renderContactIcons(Ae){const ze=Ae=Ae||this.internalPersonDetails;let Je,ut,Kt;(0,H.iu)(Ae)&&(Je=`${this.strings.emailButtonLabel} ${Ae.displayName}`,ut=s.qy`
        <fluent-button class="icon"
          aria-label=${Je}
          @click=${this.emailUser}>
          ${(0,V.r)(V.A.SmallEmail)}
        </fluent-button>
      `),ze?.userPrincipalName&&(Je=`${this.strings.chatButtonLabel} ${Ae.displayName}`,Kt=s.qy`
        <fluent-button class="icon"
          aria-label=${Je}
          @click=${this.chatUser}>
          ${(0,V.r)(V.A.SmallChat)}
        </fluent-button>
       `),Je=`${this.strings.videoButtonLabel} ${Ae.displayName}`;const Xt=s.qy`
      <fluent-button class="icon"
        aria-label=${Je}
        @click=${this.videoCallUser}>
        ${(0,V.r)(V.A.Video)}
      </fluent-button>
    `;let cn;return ze.userPrincipalName&&(Je=`${this.strings.callButtonLabel} ${Ae.displayName}`,cn=s.qy`
         <fluent-button class="icon"
          aria-label=${Je}
          @click=${this.callUser}>
          ${(0,V.r)(V.A.Call)}
        </fluent-button>
       `),s.qy`
       <div class="base-icons">
         ${ut} ${Kt} ${Xt} ${cn}
       </div>
     `}renderExpandedDetailsButton(){return s.qy`
      <fluent-button
        aria-label=${this.strings.expandDetailsLabel}
        class="expanded-details-button"
        @click=${this.showExpandedDetails}
      >
        ${(0,V.r)(V.A.ExpandDown)}
      </fluent-button>
     `}renderExpandedDetails(){if(!this._cardState&&this._isStateLoading)return R.Q`
         <div class="loading">
           <mgt-spinner></mgt-spinner>
         </div>
       `;_.b.globalProvider.state===b.HJ.SignedOut&&this.loadSections();const ze=this.renderSectionNavigation();return s.qy`
      <div class="section-nav">
        ${ze}
      </div>
      <hr class="divider"/>
      <div
        class="section-host ${this._smallView?"small":""} ${this._smallView?"small":""}"
        @wheel=${Je=>this.handleSectionScroll(Je)}
        tabindex=0
      ></div>
    `}renderSectionNavigation(){if(!this.sections||this.sections.length<2&&!this.hasTemplate("additional-details"))return;const Ae=this._currentSection?this.sections.indexOf(this._currentSection):-1,ze=this.sections.map((Kt,Xt)=>{const cn=Kt.tagName.toLowerCase(),En=(0,x.H)({active:Xt===Ae,"section-nav__icon":!0});return s.qy`
        <fluent-tab
          id="${cn}-Tab"
          class=${En}
          slot="tab"
          @keyup="${()=>this.updateCurrentSection(Kt)}"
          @click=${()=>this.updateCurrentSection(Kt)}
        >
          ${Kt.renderIcon()}
        </fluent-tab>
      `}),Je=this.sections.map(Kt=>s.qy`
        <fluent-tab-panel slot="tabpanel">
          <div class="inserted">
            <div class="title">${Kt.cardTitle}</div>
            ${this._currentSection?Kt.asFullView():null}
          </div>
        </fluent-tab-panel>
      `),ut=(0,x.H)({active:-1===Ae,"section-nav__icon":!0,overviewTab:!0});return s.qy`
      <fluent-tabs
        orientation="horizontal"
        activeindicator
        @wheel=${Kt=>this.handleSectionScroll(Kt)}
      >
        <fluent-tab
          class="${ut}"
          slot="tab"
          @keyup="${()=>this.updateCurrentSection(null)}"
          @click=${()=>this.updateCurrentSection(null)}
        >
          <div>${(0,V.r)(V.A.Overview)}</div>
        </fluent-tab>
        ${ze}
        <fluent-tab-panel slot="tabpanel" >
          <div class="overview-panel">${this._currentSection?null:this.renderOverviewSection()}</div>
        </fluent-tab-panel>
        ${Je}
      </fluent-tabs>
    `}renderOverviewSection(){const Ae=this.sections.map(Je=>s.qy`
        <div class="section">
          <div class="section__header">
            <div class="section__title" tabindex=0>${Je.displayName}</div>
              <fluent-button
                appearance="lightweight"
                class="section__show-more"
                @click=${()=>this.updateCurrentSection(Je)}
              >
                ${this.strings.showMoreSectionButton}
              </fluent-button>
          </div>
          <div class="section__content">${Je.asCompactView()}</div>
        </div>
      `),ze=this.renderTemplate("additional-details",{person:this.internalPersonDetails,personImage:this.getImage(),state:this._cardState});return ze&&Ae.splice(1,0,s.qy`
           <div class="section">
             <div class="additional-details">${ze}</div>
           </div>
         `),s.qy`
       <div class="sections">
          ${this.renderMessagingSection()}
          ${Ae}
       </div>
     `}renderCurrentSection(){var Ae;if(null!==(Ae=this.sections)&&void 0!==Ae&&Ae.length||this.hasTemplate("additional-details"))return 1!==this.sections.length||this.hasTemplate("additional-details")?this._currentSection?s.qy`
       ${this._currentSection.asFullView()}
     `:this.renderOverviewSection():s.qy`
         ${this.sections[0].asFullView()}
       `}renderMessagingSection(){const Ae=this.personDetails,ze=this._me.userPrincipalName,Je=this._chatInput;if(Ae?.userPrincipalName!==ze)return W.isSendMessageVisible?s.qy`
      <div class="message-section">
        <fluent-text-field
          autocomplete="off"
          appearance="outline"
          placeholder="${this.strings.quickMessage}"
          .value=${Je}
          @input=${ut=>{this._chatInput=ut.target.value,this.requestUpdate()}}
          @keydown="${ut=>this.sendQuickMessageOnEnter(ut)}">
        </fluent-text-field>
        <fluent-button class="send-message-icon"
          aria-label=${this.strings.sendMessageLabel}
          @click=${this.sendQuickMessage}
          ?disabled=${this.isSendingMessage}>
          ${(0,V.r)(this.isSendingMessage?V.A.Confirmation:V.A.Send)}
        </fluent-button>
      </div>
      `:s.s6}loadState(){var Ae,ze;return Mt(this,void 0,void 0,function*(){if(this._cardState)return;if(!this.personDetails&&this.inheritDetails){let Xt=this.parentElement;for(;Xt&&Xt.tagName!==`${A.U.prefix}-PERSON`.toUpperCase();)Xt=Xt.parentElement;const cn=Xt.personDetails||Xt.personDetailsInternal;Xt&&cn&&(this.personDetails=cn,this.personImage=Xt.personImage)}const Je=_.b.globalProvider;if(!Je||Je.state!==b.HJ.SignedIn)return;const ut=Je.graph.forComponent(this);if(this._graph=ut,this._isStateLoading=!0,this._me||(this._me=yield _.b.me()),this.personDetails){const Xt=this.personDetails;let cn;if((0,Mn.QY)(Xt)&&(cn=Xt.userPrincipalName||Xt.id),cn&&!(0,H.iu)(Xt)){const En=yield(0,se._)(ut,cn);this.personDetails=En,this.personImage=this.getImage()}}else if(this.userId||"me"===this.personQuery){const Xt=yield(0,se._)(ut,this.userId);this.personDetails=Xt,this.personImage=this.getImage()}else if(this.personQuery){const Xt=yield(0,H.lq)(ut,this.personQuery,1);Xt?.length&&(this.personDetails=Xt[0],yield(0,O.f8)(ut,this.personDetails,W.useContactApis).then(cn=>{cn&&(this.personDetails.personImage=cn,this.personImage=cn)}))}const Kt={activity:"Offline",availability:"Offline",id:null};if(!this.personPresence&&this.showPresence)try{this.personPresence=null!==(Ae=this.personDetails)&&void 0!==Ae&&Ae.id?yield(0,B.R)(ut,this.personDetails.id):Kt}catch{this.personPresence=Kt}!(null===(ze=this.personDetails)||void 0===ze)&&ze.id&&(this._cardState=yield((ht,vt,Ae)=>re(void 0,void 0,void 0,function*(){var ze;const Je=vt.id,ut=(0,H.iu)(vt),Kt="classification"in vt||"personType"in vt&&("PersonalContact"===vt.personType.subclass||"Group"===vt.personType.class),Xt=ht.createBatch();let cn;Kt||W.sections.organization&&(((ht,vt)=>{ht.get("person",`users/${vt}?$expand=manager($levels=max;$select=${de})&$select=${de}&$count=true`,te.vW,{ConsistencyLevel:"eventual"}),ht.get("directReports",`users/${vt}/directReports?$select=${de}`)})(Xt,Je),W.sections.organization.showWorksWith&&((ht,vt)=>{ht.get("people",`users/${vt}/people?$filter=personType/class eq 'Person'`,ee)})(Xt,Je)),W.sections.mailMessages&&ut&&((ht,vt)=>{ht.get("messages",`me/messages?$search="from:${vt}"`,le)})(Xt,ut),W.sections.files&&((ht,vt)=>{let Ae;Ae=vt?`me/insights/shared?$filter=lastshared/sharedby/address eq '${vt}'`:"me/insights/used",ht.get("files",Ae,ve.yv)})(Xt,Ae?null:ut);const En={};try{cn=yield Xt.executeAll()}catch{}if(cn)for(const[mn,wi]of cn)En[mn]=(null===(ze=wi.content)||void 0===ze?void 0:ze.value)||wi.content;if(!Kt&&W.sections.profile)try{const mn=yield((ht,vt)=>re(void 0,void 0,void 0,function*(){return yield ht.api(`/users/${vt}/profile`).version("beta").middlewareOptions((0,T.F)(P)).get()}))(ht,Je);mn&&(En.profile=mn)}catch{}return En.directReports&&En.directReports.length>0&&(En.directReports=En.directReports.filter(mn=>mn.accountEnabled)),En}))(ut,this.personDetails,this._me===this.personDetails.id)),this.loadSections(),this._isStateLoading=!1})}get hasPhone(){var Ae,ze;const Je=this.personDetails,ut=this.personDetails;return!(null===(Ae=Je?.businessPhones)||void 0===Ae||!Ae.length)||!(null===(ze=ut?.phones)||void 0===ze||!ze.length)}loadSections(){if(this.sections=[],!this.internalPersonDetails)return;const Ae=new ie(this.internalPersonDetails);if(Ae.hasData&&this.sections.push(Ae),!this._cardState)return;const{person:ze,directReports:Je,messages:ut,files:Kt,profile:Xt}=this._cardState;if(W.sections.organization&&(ze?.manager||Je?.length)&&this.sections.push(new wt(this._cardState,this._me)),W.sections.mailMessages&&ut?.length&&this.sections.push(new Ge(ut)),W.sections.files&&Kt?.length&&this.sections.push(new ue.R),W.sections.profile&&Xt){const cn=new nn(Xt);cn.hasData&&this.sections.push(cn)}}getImage(){if(this.personImage)return this.personImage;const Ae=this.personDetails;return Ae?.personImage?Ae.personImage:null}clearInputData(){this._chatInput="",this.requestUpdate()}getPersonBusinessPhones(Ae){const ze=Ae.phones,Je=[];for(const ut of ze)"business"===ut.type&&Je.push(ut.number);return Je}updateCurrentSection(Ae){if(Ae){const Je=Ae.tagName.toLowerCase();this.renderRoot.querySelector(`#${Je}-Tab`).click()}const ze=this.renderRoot.querySelectorAll("fluent-tab-panel");for(const Je of ze)Je.scrollTop=0;this._currentSection=Ae,this.requestUpdate()}handleSectionScroll(Ae){const ze=this.renderRoot.querySelectorAll("fluent-tab-panel");for(const Je of ze)Je&&!(Ae.deltaY<0&&0===Je.scrollTop)&&!(Ae.deltaY>0&&Je.clientHeight+Je.scrollTop>=Je.scrollHeight-1)&&Ae.stopPropagation()}}return et([(0,c.MZ)({attribute:"person-details",type:Object}),Rt("design:type",Object),Rt("design:paramtypes",[Object])],ht.prototype,"personDetails",null),et([(0,c.MZ)({attribute:"person-query"}),Rt("design:type",String),Rt("design:paramtypes",[String])],ht.prototype,"personQuery",null),et([(0,c.MZ)({attribute:"lock-tab-navigation",type:Boolean}),Rt("design:type",Boolean)],ht.prototype,"lockTabNavigation",void 0),et([(0,c.MZ)({attribute:"user-id"}),Rt("design:type",String),Rt("design:paramtypes",[String])],ht.prototype,"userId",null),et([(0,c.MZ)({attribute:"person-image",type:String}),Rt("design:type",String)],ht.prototype,"personImage",void 0),et([(0,c.MZ)({attribute:"fetch-image",type:Boolean}),Rt("design:type",Boolean)],ht.prototype,"fetchImage",void 0),et([(0,c.MZ)({attribute:"is-expanded",type:Boolean}),Rt("design:type",Boolean)],ht.prototype,"isExpanded",void 0),et([(0,c.MZ)({attribute:"inherit-details",type:Boolean}),Rt("design:type",Boolean)],ht.prototype,"inheritDetails",void 0),et([(0,c.MZ)({attribute:"show-presence",type:Boolean}),Rt("design:type",Boolean)],ht.prototype,"showPresence",void 0),et([(0,c.MZ)({attribute:"person-presence",type:Object}),Rt("design:type",Object)],ht.prototype,"personPresence",void 0),et([(0,c.wk)(),Rt("design:type",Object)],ht.prototype,"isSendingMessage",void 0),et([(0,c.wk)(),Rt("design:type",Object)],ht.prototype,"_cardState",void 0),et([(0,c.wk)(),Rt("design:type",Boolean)],ht.prototype,"_isStateLoading",void 0),et([(0,c.wk)(),Rt("design:type",Object)],ht.prototype,"_currentSection",void 0),ht})()},6479:(rt,pe,h)=>{h.d(pe,{O$:()=>Le,ge:()=>ge,sN:()=>Be});var s=h(5017),c=h(8940),x=h(2578),y=h(5794),E=h(4569),R=h(4709),_=h(6885),b=h(8324),A=h(9559),H=h(3402),O=h(6271),se=h(9546),V=h(6692),B=h(4130),T=h(1786),W=h(5527),te=h(2898),ve=h(8360),re=h(3601),de=h(2710),G=h(4166),$=h(54);const Z=[b.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{font-size:var(--default-font-size)}:host .flyout [slot=anchor]{display:flex;cursor:pointer}:host .flyout [slot=anchor].vertical{flex-direction:column;justify-content:center;align-items:center;margin-inline-start:0}:host .person-root{display:flex;flex-direction:row;align-items:center;background-color:var(--person-background-color,transparent);border-radius:var(--person-border-radius,4px)}:host .person-root.small .avatar-wrapper{min-width:var(--person-avatar-size,24px);width:var(--person-avatar-size,24px);height:var(--person-avatar-size,24px)}:host .person-root.small .contact-icon,:host .person-root.small .initials{font-size:calc(var(--person-avatar-size, 24px) * .4)}:host .person-root.small .presence-wrapper svg{width:calc(var(--person-avatar-size,24px) * .28);height:calc(var(--person-avatar-size,24px) * .28)}:host .person-root.noline .avatar-wrapper,:host .person-root.oneline .avatar-wrapper{min-width:var(--person-avatar-size,24px);width:var(--person-avatar-size,24px);height:var(--person-avatar-size,24px)}:host .person-root.noline .avatar-wrapper .contact-icon,:host .person-root.noline .avatar-wrapper .initials,:host .person-root.oneline .avatar-wrapper .contact-icon,:host .person-root.oneline .avatar-wrapper .initials{font-size:calc(var(--person-avatar-size, 24px) * .4)}:host .person-root.noline .avatar-wrapper .presence-wrapper svg,:host .person-root.oneline .avatar-wrapper .presence-wrapper svg{width:calc(var(--person-avatar-size,24px) * .28);height:calc(var(--person-avatar-size,24px) * .28)}:host .person-root.noline .presence-basic,:host .person-root.oneline .presence-basic{border-width:1px;position:relative;bottom:calc(var(--person-avatar-size,24px) * .12 - 4px)}:host .person-root.twolines .avatar-wrapper{min-width:var(--person-avatar-size,40px);width:var(--person-avatar-size,40px);height:var(--person-avatar-size,40px)}:host .person-root.twolines .avatar-wrapper .contact-icon,:host .person-root.twolines .avatar-wrapper .initials{font-size:calc(var(--person-avatar-size, 40px) * .4)}:host .person-root.twolines .avatar-wrapper .presence-wrapper svg{width:calc(var(--person-avatar-size,40px) * .28);height:calc(var(--person-avatar-size,40px) * .28)}:host .person-root.large .avatar-wrapper,:host .person-root.threelines .avatar-wrapper{min-width:var(--person-avatar-size,56px);width:var(--person-avatar-size,56px);height:var(--person-avatar-size,56px)}:host .person-root.large .avatar-wrapper .contact-icon,:host .person-root.large .avatar-wrapper .initials,:host .person-root.threelines .avatar-wrapper .contact-icon,:host .person-root.threelines .avatar-wrapper .initials{font-size:calc(var(--person-avatar-size, 56px) * .4)}:host .person-root.large .avatar-wrapper .presence-wrapper svg,:host .person-root.threelines .avatar-wrapper .presence-wrapper svg{width:calc(var(--person-avatar-size,56px) * .28);height:calc(var(--person-avatar-size,56px) * .28)}:host .person-root.fourlines .avatar-wrapper,:host .person-root.vertical .avatar-wrapper{min-width:var(--person-avatar-size,72px);width:var(--person-avatar-size,72px);height:var(--person-avatar-size,72px)}:host .person-root.fourlines .avatar-wrapper .contact-icon,:host .person-root.fourlines .avatar-wrapper .initials,:host .person-root.vertical .avatar-wrapper .contact-icon,:host .person-root.vertical .avatar-wrapper .initials{font-size:calc(var(--person-avatar-size, 72px) * .4)}:host .person-root.fourlines .avatar-wrapper .presence-wrapper svg,:host .person-root.vertical .avatar-wrapper .presence-wrapper svg{width:calc(var(--person-avatar-size,72px) * .28);height:calc(var(--person-avatar-size,72px) * .28)}:host .person-root.vertical{flex-direction:column;justify-content:center;align-items:center}:host .person-root .avatar-wrapper{min-width:var(--person-avatar-size,24px);width:var(--person-avatar-size,24px);height:var(--person-avatar-size,24px);position:relative;box-sizing:border-box}:host .person-root .avatar-wrapper .contact-icon,:host .person-root .avatar-wrapper .initials,:host .person-root .avatar-wrapper .shimmer,:host .person-root .avatar-wrapper img{height:100%;width:100%;border:var(--person-avatar-border,none);border-radius:var(--person-avatar-border-radius,50%);margin-block-start:var(--person-avatar-top-spacing,0);object-fit:cover;object-position:center top}:host .person-root .avatar-wrapper .contact-icon,:host .person-root .avatar-wrapper .initials,:host .person-root .avatar-wrapper .shimmer{display:flex;justify-content:center;align-items:center;font-size:calc(var(--person-avatar-size, 24px) * .4);font-weight:400;background:var(--person-initials-background-color,var(--neutral-fill-secondary-rest));color:var(--person-initials-text-color,var(--neutral-fill-strong-hover))}:host .person-root .avatar-wrapper .presence-wrapper{bottom:var(--person-presence-wrapper-bottom,0);right:0;position:absolute;border-radius:50%;background-color:var(--neutral-layer-1);border:1px solid var(--neutral-layer-1)}:host .person-root .avatar-wrapper .presence-wrapper svg{display:flex;width:calc(var(--person-avatar-size,24px) * .28);height:calc(var(--person-avatar-size,24px) * .28)}:host .person-root .details-wrapper{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;min-width:var(--person-details-wrapper-width,168px);margin-inline-start:var(--person-details-left-spacing,12px);margin-block-end:var(--person-details-bottom-spacing,0)}:host .person-root .details-wrapper .shimmer.text{width:200px;height:16px;margin:2px 0}:host .person-root .details-wrapper.vertical{display:inline-flex;flex-direction:column;justify-content:center;align-items:center;margin-inline-start:0}:host .person-root .details-wrapper .line1{font-size:var(--person-line1-font-size, ms-font-size-14);font-weight:var(--person-line1-font-weight,600);color:var(--person-line1-text-color,var(--neutral-foreground-rest));text-transform:var(--person-line1-text-transform,inherit);line-height:var(--person-line1-text-line-height, 20px)}:host .person-root .details-wrapper .line2{font-size:var(--person-line2-font-size, var(--email-font-size, ms-font-size-12));font-weight:var(--person-line2-font-weight,400);color:var(--person-line2-text-color,var(--secondary-text-color));text-transform:var(--person-line2-text-transform,inherit);line-height:var(--person-line2-text-line-height, 16px)}:host .person-root .details-wrapper .line3{font-size:var(--person-line3-font-size, var(--email-font-size, ms-font-size-12));font-weight:var(--person-line3-font-weight,400);color:var(--person-line3-text-color,var(--secondary-text-color));text-transform:var(--person-line3-text-transform,inherit);line-height:var(--person-line3-text-line-height, 16px)}:host .person-root .details-wrapper .line4{font-size:var(--person-line4-font-size, var(--email-font-size, ms-font-size-12));font-weight:var(--person-line4-font-weight,400);color:var(--person-line4-text-color,var(--secondary-text-color));text-transform:var(--person-line4-text-transform,inherit);line-height:var(--person-line4-text-line-height, 16px)}@media (forced-colors:active) and (prefers-color-scheme:dark){:host svg,:host svg>path{fill:rgb(255,255,255);fill-rule:nonzero;clip-rule:nonzero}}[dir=rtl] .presence-wrapper{right:unset!important;left:0}
`],ee=["photo","initials"],L=Object.assign(Object.assign({},{Available:"Available",Away:"Away",BeRightBack:"Be right back",Busy:"Busy",DoNotDisturb:"Do not disturb",InACall:"In a call",InAConferenceCall:"In a conference call",Inactive:"Inactive",InAMeeting:"In a meeting",Offline:"Offline",OffWork:"Off work",OutOfOffice:"Out of office",PresenceUnknown:"Presence unknown",Presenting:"Presenting",UrgentInterruptionsOnly:"Urgent interruptions only"}),{photoFor:"Photo for",emailAddress:"Email address"});var P=function(nt,Pe,oe,Qe){var Tt,tt=arguments.length,mt=tt<3?Pe:null===Qe?Qe=Object.getOwnPropertyDescriptor(Pe,oe):Qe;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)mt=Reflect.decorate(nt,Pe,oe,Qe);else for(var ct=nt.length-1;ct>=0;ct--)(Tt=nt[ct])&&(mt=(tt<3?Tt(mt):tt>3?Tt(Pe,oe,mt):Tt(Pe,oe))||mt);return tt>3&&mt&&Object.defineProperty(Pe,oe,mt),mt},J=function(nt,Pe){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(nt,Pe)},X=function(nt,Pe,oe,Qe){return new(oe||(oe=Promise))(function(mt,Tt){function ct(ue){try{ie(Qe.next(ue))}catch(_e){Tt(_e)}}function Te(ue){try{ie(Qe.throw(ue))}catch(_e){Tt(_e)}}function ie(ue){ue.done?mt(ue.value):function tt(mt){return mt instanceof oe?mt:new oe(function(Tt){Tt(mt)})}(ue.value).then(ct,Te)}ie((Qe=Qe.apply(nt,Pe||[])).next())})};const ge=["businessPhones","displayName","givenName","jobTitle","department","mail","mobilePhone","officeLocation","preferredLanguage","surname","userPrincipalName","id","userType"],Be=()=>{(0,re.E)(s._0),(0,c.N)("person",Le),(0,G.r)()};let Le=(()=>{class nt extends x.N{static get styles(){return Z}get strings(){return L}get personQuery(){return this._personQuery}set personQuery(oe){oe!==this._personQuery&&(this._personQuery=oe,this._personDetails=null,this.personDetailsInternal=null)}get fallbackDetails(){return this._fallbackDetails}set fallbackDetails(oe){oe!==this._fallbackDetails&&(this._fallbackDetails=oe)}get userId(){return this._userId}set userId(oe){oe!==this._userId&&(this._userId=oe,this.personDetailsInternal=null,this._personDetails=null)}get usage(){return this._usage}set usage(oe){oe!==this._usage&&(this._usage=oe)}get personDetailsInternal(){return this._personDetailsInternal}set personDetailsInternal(oe){this._personDetailsInternal!==oe&&(this._personDetailsInternal=oe,this._fetchedImage=null,this._fetchedPresence=null)}get personDetails(){return this._personDetails}set personDetails(oe){this._personDetails!==oe&&(this._personDetails=oe,this._fetchedImage=null,this._fetchedPresence=null)}get personImage(){return this._personImage||this._fetchedImage}set personImage(oe){oe!==this._personImage&&(this._isInvalidImageSrc=!oe,this._personImage=oe)}get personPresence(){return this._personPresence||this._fetchedPresence}set personPresence(oe){oe!==this._personPresence&&(this._personPresence=oe)}static get requiredScopes(){const oe=["user.readbasic.all","user.read","people.read","presence.read.all","presence.read"];return nt.config.useContactApis&&oe.push("contacts.read"),oe}get flyout(){return this.renderRoot.querySelector(".flyout")}constructor(){super(),this.avatarType="photo",this.personCardInteraction="none",this.view="image",this._hasLoadedPersonCard=!1,this._mouseLeaveTimeout=-1,this._mouseEnterTimeout=-1,this.renderContent=()=>{const oe=this.personDetails||this.personDetailsInternal||this.fallbackDetails,Qe=this.getImage(),tt=this.personPresence||this._fetchedPresence;if(!oe&&!Qe)return this.renderNoData();!oe?.personImage&&Qe&&(oe.personImage=Qe);let mt=this.renderTemplate("default",{person:oe,personImage:Qe,personPresence:tt});if(!mt){const Te=this.renderDetails(oe,tt),ie=this.renderAvatar(oe,Qe,tt);mt=b.qy`
        ${ie}
        ${Te}
      `}"none"!==this.personCardInteraction&&(mt=this.renderFlyout(mt,oe,Qe,tt));const ct=(0,H.H)({"person-root":!0,small:!this.isThreeLines()&&!this.isFourLines()&&!this.isLargeAvatar(),large:"auto"!==this.avatarSize&&this.isLargeAvatar(),noline:this.isNoLine(),oneline:this.isOneLine(),twolines:this.isTwoLines(),threelines:this.isThreeLines(),fourlines:this.isFourLines(),vertical:this.isVertical()});return b.qy`
      <div
        class="${ct}"
        dir=${this.direction}
        @click=${this.handleMouseClick}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
        @keydown=${this.handleKeyDown}
        tabindex="${(0,O.J)("none"!==this.personCardInteraction?"0":void 0)}"
      >
        ${mt}
      </div>
    `},this.renderLoading=()=>{const oe=(0,H.H)({"person-root":!0,small:!this.isThreeLines()&&!this.isFourLines()&&!this.isLargeAvatar(),large:"auto"!==this.avatarSize&&this.isLargeAvatar(),noline:this.isNoLine(),oneline:this.isOneLine(),twolines:this.isTwoLines(),threelines:this.isThreeLines(),fourlines:this.isFourLines(),vertical:this.isVertical()}),Qe=(0,H.H)({"details-wrapper":!0,vertical:this.isVertical()});return this.renderTemplate("loading",null)||b.qy`
        <div class="${oe}">
          <div class="avatar-wrapper">
            <fluent-skeleton shimmer class="shimmer" shape="circle"></fluent-skeleton>
          </div>
          <div class=${Qe}>
            ${this.renderLoadingLines()}
          </div>
        </div>`},this.renderLoadingLines=()=>{const oe=[];return this.isNoLine()||(this.isOneLine()&&oe.push(this.renderLoadingLine(1)),this.isTwoLines()&&(oe.push(this.renderLoadingLine(1)),oe.push(this.renderLoadingLine(2))),this.isThreeLines()&&(oe.push(this.renderLoadingLine(1)),oe.push(this.renderLoadingLine(2)),oe.push(this.renderLoadingLine(3))),this.isFourLines()&&(oe.push(this.renderLoadingLine(1)),oe.push(this.renderLoadingLine(2)),oe.push(this.renderLoadingLine(3)),oe.push(this.renderLoadingLine(4)))),oe},this.renderLoadingLine=oe=>b.qy`
      <div class=${`line${oe}`}>
        <fluent-skeleton shimmer class="shimmer text" shape="rect"></fluent-skeleton>
      </div>
    `,this.handleMouseClick=oe=>{"click"===this.personCardInteraction&&oe.target.tagName!==`${y.U.prefix}-PERSON-CARD`.toUpperCase()&&this.showPersonCard()},this.handleKeyDown=oe=>{oe&&"Enter"===oe.key&&this.showPersonCard()},this.handleMouseEnter=()=>{clearTimeout(this._mouseEnterTimeout),clearTimeout(this._mouseLeaveTimeout),"hover"===this.personCardInteraction&&(this._mouseEnterTimeout=window.setTimeout(this.showPersonCard,500))},this.handleMouseLeave=()=>{clearTimeout(this._mouseEnterTimeout),clearTimeout(this._mouseLeaveTimeout),this._mouseLeaveTimeout=window.setTimeout(this.hidePersonCard,500)},this.hidePersonCard=()=>{const oe=this.flyout;oe&&oe.close();const Qe=this.querySelector(".mgt-person-card")||this.renderRoot.querySelector(".mgt-person-card");Qe&&(Qe.isExpanded=!1,Qe.clearHistory())},this.loadPersonCardResources=()=>X(this,void 0,void 0,function*(){if("none"!==this.personCardInteraction&&!this._hasLoadedPersonCard){const{registerMgtPersonCardComponent:oe}=yield Promise.resolve().then(h.bind(h,7531));customElements.get((0,c.F)("person-card"))||oe(),this._hasLoadedPersonCard=!0}}),this.showPersonCard=()=>{this._personCardShouldRender||(this._personCardShouldRender=!0,this.loadPersonCardResources());const oe=this.flyout;oe&&oe.open()},this.personCardInteraction="none",this.line1Property="displayName",this.line2Property="jobTitle",this.line3Property="department",this.line4Property="email",this.view="image",this.avatarSize="auto",this.disableImageFetch=!1,this._isInvalidImageSrc=!1,this.avatarType="photo",this.verticalLayout=!1}clearState(){this._personImage="",this._personDetailsInternal=null,this._fetchedImage=null,this._fetchedPresence=null}renderNoData(){const oe=this.renderTemplate("no-data",null);if(oe)return oe;const Qe={"avatar-icon":!0,vertical:this.isVertical(),small:!this.isLargeAvatar(),noline:this.isNoLine(),oneline:this.isOneLine(),twolines:this.isTwoLines(),threelines:this.isThreeLines(),fourlines:this.isFourLines()};return b.qy`
       <i class=${(0,H.H)(Qe)}></i>
     `}renderPersonIcon(){return(0,de.r)(de.A.Person)}renderImage(oe,Qe){var tt;const mt=`${this.strings.photoFor} ${oe.displayName}`,Tt=Qe&&!this._isInvalidImageSrc&&"photo"===this.avatarType,ct="photo"===this.avatarType&&"image"===this.view,Te=null!==(tt=oe?.displayName||`${this.strings.emailAddress} ${(0,V.iu)(oe)}`)&&void 0!==tt?tt:void 0,ie=b.qy`<img
      title="${(0,O.J)(ct?Te:void 0)}"
      alt=${mt}
      src=${Qe}
      @error=${()=>this._isInvalidImageSrc=!0} />`,ue=oe?this.getInitials(oe):"",_e=ue?.length,Ke=(0,H.H)({initials:_e&&!Tt,"contact-icon":!_e}),we=b.qy`<i>${this.renderPersonIcon()}</i>`,Fe=b.qy`
      <span 
        title="${(0,O.J)("image"===this.view?Te:void 0)}"
        role="${(0,O.J)("image"===this.view?void 0:"presentation")}"
        class="${Ke}"
      >
        ${_e?ue:we}
      </span>
`;return this.fireCustomEvent(Tt?"person-image-rendered":"person-icon-rendered"),Tt?ie:Fe}renderPresence(oe){var Qe;if(!this.showPresence||!oe)return b.qy``;let tt;const{activity:mt,availability:Tt}=oe;switch(Tt){case"Available":case"AvailableIdle":tt=(0,de.r)("OutOfOffice"===mt?de.A.PresenceOofAvailable:de.A.PresenceAvailable);break;case"Busy":case"BusyIdle":switch(mt){case"OutOfOffice":case"OnACall":tt=(0,de.r)(de.A.PresenceOofBusy);break;default:tt=(0,de.r)(de.A.PresenceBusy)}break;case"DoNotDisturb":tt=(0,de.r)("OutOfOffice"===mt?de.A.PresenceOofDnd:de.A.PresenceDnd);break;case"Away":tt=(0,de.r)("OutOfOffice"===mt?de.A.PresenceOofAway:de.A.PresenceAway);break;case"BeRightBack":tt=(0,de.r)(de.A.PresenceAway);break;case"Offline":switch(mt){case"Offline":tt=(0,de.r)(de.A.PresenceOffline);break;case"OutOfOffice":case"OffWork":tt=(0,de.r)(de.A.PresenceOofAway);break;default:tt=(0,de.r)(de.A.PresenceStatusUnknown)}break;default:tt=(0,de.r)(de.A.PresenceStatusUnknown)}const ct=(0,H.H)({"presence-wrapper":!0,noline:this.isNoLine(),oneline:this.isOneLine()}),Te=null!==(Qe=this.strings[mt])&&void 0!==Qe?Qe:b.s6;return b.qy`
      <span
        class="${ct}"
        title="${Te}"
        aria-label="${Te}"
        role="img">
          ${tt}
      </span>
    `}renderAvatar(oe,Qe,tt){const mt=this.renderImage(oe,Qe),Tt=this.renderPresence(tt);return b.qy`
      <div class="avatar-wrapper">
        ${mt}
        ${Tt}
      </div>
    `}handleLine1Clicked(){this.fireCustomEvent("line1clicked",this.personDetailsInternal)}handleLine2Clicked(){this.fireCustomEvent("line2clicked",this.personDetailsInternal)}handleLine3Clicked(){this.fireCustomEvent("line3clicked",this.personDetailsInternal)}handleLine4Clicked(){this.fireCustomEvent("line4clicked",this.personDetailsInternal)}renderDetails(oe,Qe){if(!oe||"image"===this.view)return b.qy``;const tt=oe;Qe&&(tt.presenceActivity=Qe?.activity,tt.presenceAvailability=Qe?.availability);const mt=[],Tt=this.getTextFromProperty(tt,this.line1Property);if(this.hasTemplate("line1")){const Te=this.renderTemplate("line1",{person:tt});mt.push(b.qy`
           <div class="line1" part="detail-line" @click=${()=>this.handleLine1Clicked()} role="presentation" aria-label="${Tt}">${Te}</div>
         `)}else Tt&&mt.push(b.qy`
             <div class="line1" part="detail-line" @click=${()=>this.handleLine1Clicked()} role="presentation" aria-label="${Tt}">${Tt}</div>
           `);if("oneline"!==this.view){const Te=this.getTextFromProperty(tt,this.line2Property);if(this.hasTemplate("line2")){const ie=this.renderTemplate("line2",{person:tt});mt.push(b.qy`
           <div class="line2" part="detail-line" @click=${()=>this.handleLine2Clicked()} role="presentation" aria-label="${Te}">${ie}</div>
         `)}else Te&&mt.push(b.qy`
             <div class="line2" part="detail-line" @click=${()=>this.handleLine2Clicked()} role="presentation" aria-label="${Te}">${Te}</div>
           `)}if("threelines"===this.view||"fourlines"===this.view){const Te=this.getTextFromProperty(tt,this.line3Property);if(this.hasTemplate("line3")){const ie=this.renderTemplate("line3",{person:tt});mt.push(b.qy`
           <div class="line3" part="detail-line" @click=${()=>this.handleLine3Clicked()} role="presentation" aria-label="${Te}">${ie}</div>
         `)}else Te&&mt.push(b.qy`
             <div class="line3" part="detail-line" @click=${()=>this.handleLine3Clicked()} role="presentation" aria-label="${Te}">${Te}</div>
           `)}if("fourlines"===this.view){const Te=this.getTextFromProperty(tt,this.line4Property);if(this.hasTemplate("line4")){const ie=this.renderTemplate("line4",{person:tt});mt.push(b.qy`
          <div class="line4" part="detail-line" @click=${()=>this.handleLine4Clicked()} role="presentation" aria-label="${Te}">${ie}</div>
        `)}else Te&&mt.push(b.qy`
            <div class="line4" part="detail-line" @click=${()=>this.handleLine4Clicked()} role="presentation" aria-label="${Te}">${Te}</div>
          `)}const ct=(0,H.H)({"details-wrapper":!0,vertical:this.isVertical()});return b.qy`
      <div class="${ct}">
        ${mt}
      </div>
    `}renderFlyout(oe,Qe,tt,mt){const Tt=this._personCardShouldRender&&this._hasLoadedPersonCard?b.qy`
           <div slot="flyout" data-testid="flyout-slot">
             ${this.renderFlyoutContent(Qe,tt,mt)}
           </div>`:b.qy``,ct=(0,H.H)({small:!this.isThreeLines()&&!this.isFourLines()&&!this.isLargeAvatar(),large:"auto"!==this.avatarSize&&this.isLargeAvatar(),noline:this.isNoLine(),oneline:this.isOneLine(),twolines:this.isTwoLines(),threelines:this.isThreeLines(),fourlines:this.isFourLines(),vertical:this.isVertical()});return E.Q`
      <mgt-flyout light-dismiss class="flyout" .avoidHidingAnchor=${!1}>
        <div slot="anchor" class="${ct}">${oe}</div>
        ${Tt}
      </mgt-flyout>`}renderFlyoutContent(oe,Qe,tt){return this.fireCustomEvent("flyout-content-rendered"),this.renderTemplate("person-card",{person:oe,personImage:Qe})||E.Q`
        <mgt-person-card
          class="mgt-person-card"
          lock-tab-navigation
          .personDetails=${oe}
          .personImage=${Qe}
          .personPresence=${tt}
          .showPresence=${this.showPresence}>
        </mgt-person-card>`}args(){return[this.providerState,this.verticalLayout,this.view,this.fallbackDetails,this.line1Property,this.line2Property,this.line3Property,this.line4Property,this.fetchImage,this.avatarType,this.userId,this.personQuery,this.disableImageFetch,this.showPresence,this.personPresence,this.personDetails]}loadState(){return X(this,void 0,void 0,function*(){const oe=R.b.globalProvider;if(!oe||oe.state===_.HJ.Loading)return;if(oe&&oe.state===_.HJ.SignedOut)return void(this.personDetailsInternal=null);const Qe=oe.graph.forComponent(this);(this.verticalLayout&&"fourlines"!==this.view||this.fallbackDetails)&&(this.line2Property="email");let tt=[...ge,this.line1Property,this.line2Property,this.line3Property,this.line4Property];tt=tt.filter(ct=>"email"!==ct);let mt=this.personDetailsInternal||this.personDetails;if(mt){if(!mt.personImage&&this.fetchImage&&"photo"===this.avatarType&&!this.personImage&&!this._fetchedImage){let ct;ct="groupTypes"in mt?yield(0,B.t5)(Qe,mt):yield(0,B.f8)(Qe,mt,nt.config.useContactApis),ct&&(mt.personImage=ct,this._fetchedImage=ct)}}else if(this.userId||"me"===this.personQuery){let ct;ct="photo"!==this.avatarType||this.disableImageFetch?"me"===this.personQuery?yield(0,W.jp)(Qe,tt):yield(0,W.wz)(Qe,this.userId,tt):yield(0,te._)(Qe,this.userId,tt),this.personDetailsInternal=ct,this.personDetails=ct,this._fetchedImage=this.getImage()}else if(this.personQuery){let ct=yield(0,V.lq)(Qe,this.personQuery,1);if((!ct||0===ct.length)&&(ct=(yield(0,W.Ei)(Qe,this.personQuery,1))||[]),ct?.length&&(this.personDetailsInternal=ct[0],this.personDetails=ct[0],"photo"===this.avatarType&&!this.disableImageFetch)){const Te=yield(0,B.f8)(Qe,ct[0],nt.config.useContactApis);Te&&(this.personDetailsInternal.personImage=Te,this.personDetails.personImage=Te,this._fetchedImage=Te)}}mt=this.personDetailsInternal||this.personDetails||this.fallbackDetails;const Tt={activity:"Offline",availability:"Offline",id:null};if(this.showPresence&&!this.personPresence&&!this._fetchedPresence)try{if(mt){const ct="me"!==this.personQuery?mt?.id:null;this._fetchedPresence=yield(0,T.R)(Qe,ct)}else this._fetchedPresence=Tt}catch{this._fetchedPresence=Tt}})}getInitials(oe){var Qe,tt,mt,Tt,ct,Te;if(oe||(oe=this.personDetailsInternal),(0,se.Ts)(oe))return oe.initials;let ie="";if((0,se.QY)(oe)&&(ie+=null!==(mt=null===(tt=null===(Qe=oe.givenName)||void 0===Qe?void 0:Qe[0])||void 0===tt?void 0:tt.toUpperCase())&&void 0!==mt?mt:"",ie+=null!==(Te=null===(ct=null===(Tt=oe.surname)||void 0===Tt?void 0:Tt[0])||void 0===ct?void 0:ct.toUpperCase())&&void 0!==Te?Te:""),!ie&&oe.displayName){const ue=oe.displayName.split(/\s+/);for(let _e=0;_e<2&&_e<ue.length;_e++)ue[_e][0]&&this.isLetter(ue[_e][0])&&(ie+=ue[_e][0].toUpperCase())}return ie}getImage(){if(this.personImage)return this.personImage;if(this._fetchedImage)return this._fetchedImage;const oe=this.personDetailsInternal||this.personDetails;return oe?.personImage?oe.personImage:null}isLetter(oe){try{return oe.match(new RegExp("\\p{L}","u"))}catch{return oe.toLowerCase()!==oe.toUpperCase()}}getTextFromProperty(oe,Qe){if(!Qe||0===Qe.length)return null;const tt=Qe.trim().split(",");let mt,Tt=0;for(;!mt&&Tt<tt.length;){const ct=tt[Tt].trim();switch(ct){case"mail":case"email":mt=(0,V.iu)(oe);break;default:mt=oe[ct]}Tt++}return mt}isLargeAvatar(){return"large"===this.avatarSize||"auto"===this.avatarSize&&"image"!==this.view&&"oneline"!==this.view}isNoLine(){return"image"===this.view}isOneLine(){return"oneline"===this.view}isTwoLines(){return"twolines"===this.view}isThreeLines(){return"threelines"===this.view}isFourLines(){return"fourlines"===this.view}isVertical(){return this.verticalLayout}}return nt.config={useContactApis:!0},P([(0,A.MZ)({attribute:"person-query"}),J("design:type",String),J("design:paramtypes",[String])],nt.prototype,"personQuery",null),P([(0,A.MZ)({attribute:"fallback-details",type:Object}),J("design:type",Object),J("design:paramtypes",[Object])],nt.prototype,"fallbackDetails",null),P([(0,A.MZ)({attribute:"user-id"}),J("design:type",String),J("design:paramtypes",[String])],nt.prototype,"userId",null),P([(0,A.MZ)({attribute:"usage"}),J("design:type",String),J("design:paramtypes",[String])],nt.prototype,"usage",null),P([(0,A.MZ)({attribute:"show-presence",type:Boolean}),J("design:type",Boolean)],nt.prototype,"showPresence",void 0),P([(0,A.MZ)({attribute:"avatar-size",type:String}),J("design:type",String)],nt.prototype,"avatarSize",void 0),P([(0,A.wk)(),J("design:type",Object),J("design:paramtypes",[Object])],nt.prototype,"personDetailsInternal",null),P([(0,A.MZ)({attribute:"person-details",type:Object}),J("design:type",Object),J("design:paramtypes",[Object])],nt.prototype,"personDetails",null),P([(0,A.MZ)({attribute:"person-image",type:String}),J("design:type",String),J("design:paramtypes",[String])],nt.prototype,"personImage",null),P([(0,A.MZ)({attribute:"fetch-image",type:Boolean}),J("design:type",Boolean)],nt.prototype,"fetchImage",void 0),P([(0,A.MZ)({attribute:"disable-image-fetch",type:Boolean}),J("design:type",Boolean)],nt.prototype,"disableImageFetch",void 0),P([(0,A.MZ)({attribute:"vertical-layout",type:Boolean}),J("design:type",Boolean)],nt.prototype,"verticalLayout",void 0),P([(0,A.MZ)({attribute:"avatar-type",converter:Pe=>((nt,Pe="photo")=>(nt=>"string"==typeof nt&&ee.includes(nt))(nt)?nt:Pe)(Pe,"photo")}),J("design:type",String)],nt.prototype,"avatarType",void 0),P([(0,A.MZ)({attribute:"person-presence",type:Object}),J("design:type",Object),J("design:paramtypes",[Object])],nt.prototype,"personPresence",null),P([(0,A.MZ)({attribute:"person-card",converter:Pe=>(0,$.e)(Pe)}),J("design:type",String)],nt.prototype,"personCardInteraction",void 0),P([(0,A.MZ)({attribute:"line1-property"}),J("design:type",String)],nt.prototype,"line1Property",void 0),P([(0,A.MZ)({attribute:"line2-property"}),J("design:type",String)],nt.prototype,"line2Property",void 0),P([(0,A.MZ)({attribute:"line3-property"}),J("design:type",String)],nt.prototype,"line3Property",void 0),P([(0,A.MZ)({attribute:"line4-property"}),J("design:type",String)],nt.prototype,"line4Property",void 0),P([(0,A.MZ)({converter:Pe=>(0,ve.E)(Pe,"image")}),J("design:type",String)],nt.prototype,"view",void 0),P([(0,A.wk)(),J("design:type",String)],nt.prototype,"_fetchedImage",void 0),P([(0,A.wk)(),J("design:type",Object)],nt.prototype,"_fetchedPresence",void 0),P([(0,A.wk)(),J("design:type",Boolean)],nt.prototype,"_isInvalidImageSrc",void 0),P([(0,A.wk)(),J("design:type",Boolean)],nt.prototype,"_personCardShouldRender",void 0),P([(0,A.wk)(),J("design:type",Object)],nt.prototype,"_hasLoadedPersonCard",void 0),nt})()},4166:(rt,pe,h)=>{h.d(pe,{r:()=>O});var s=h(8324),c=h(9559),x=h(3402);const y=()=>void 0!==window.getWindowSegments,R=[s.AH`
.root .scout-top{position:fixed;top:0;left:0}.root .scout-bottom{position:fixed;bottom:0;right:0}.root .flyout{display:none;position:fixed;z-index:9999999;opacity:0;box-shadow:var(--mgt-flyout-box-shadow,var(--elevation-shadow-card-rest));border-radius:8px}.root .flyout.small{overflow:hidden auto}.root.visible .flyout{display:inline-block;animation-name:fade-in;animation-duration:.3s;animation-timing-function:cubic-bezier(0.1,0.9,0.2,1);animation-fill-mode:both;transition:top .3s ease,bottom .3s ease,left .3s ease}.root.visible .flyout.small{overflow:hidden auto}@keyframes fade-in{from{opacity:0;margin-top:-10px;margin-bottom:-10px}to{opacity:1;margin-top:0;margin-bottom:0}}
`];var _=h(8940),b=h(5260),A=function(V,B,T,W){var re,te=arguments.length,ve=te<3?B:null===W?W=Object.getOwnPropertyDescriptor(B,T):W;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)ve=Reflect.decorate(V,B,T,W);else for(var de=V.length-1;de>=0;de--)(re=V[de])&&(ve=(te<3?re(ve):te>3?re(B,T,ve):re(B,T))||ve);return te>3&&ve&&Object.defineProperty(B,T,ve),ve},H=function(V,B){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(V,B)};const O=()=>(0,_.N)("flyout",se);let se=(()=>{class V extends b.S{static get styles(){return R}get isOpen(){return this._isOpen}set isOpen(T){const W=this._isOpen;W!==T&&(this._isOpen=T,window.requestAnimationFrame(()=>{this.setupWindowEvents(this.isOpen);const te=this._flyout;!this.isOpen&&te&&(te.style.width=null,te.style.setProperty("--mgt-flyout-set-width",null),te.style.setProperty("--mgt-flyout-set-height",null),te.style.maxHeight=null,te.style.top=null,te.style.left=null,te.style.bottom=null)}),this.requestUpdate("isOpen",W),this.dispatchEvent(new Event(T?"opened":"closed")))}get _edgePadding(){return 24}get _flyout(){return this.renderRoot.querySelector(".flyout")}get _anchor(){return this.renderRoot.querySelector(".anchor")}get _topScout(){return this.renderRoot.querySelector(".scout-top")}get _bottomScout(){return this.renderRoot.querySelector(".scout-bottom")}constructor(){super(),this._renderedOnce=!1,this._isOpen=!1,this._smallView=!1,this.handleWindowEvent=T=>{const W=this._flyout;if(W)if(T.composedPath){const te=T.composedPath();if(te.includes(W)||"pointerdown"===T.type&&te.includes(this))return}else{let te=T.target;for(;te;)if(te=te.parentElement,te===W||"pointerdown"===T.type&&te===this)return}this.close()},this.handleResize=()=>{this.close()},this.handleKeyUp=T=>{"Escape"===T.key&&this.close()},this.handleFlyoutWheel=T=>{T.preventDefault()},this.avoidHidingAnchor=!0,this.addEventListener("expanded",()=>{window.requestAnimationFrame(()=>{this.updateFlyout()})})}open(){this.isOpen=!0}close(){this.isOpen=!1}disconnectedCallback(){this.setupWindowEvents(!1),super.disconnectedCallback()}updated(T){super.updated(T),window.requestAnimationFrame(()=>{this.updateFlyout()})}render(){const T={root:!0,visible:this.isOpen},W=this.renderAnchor();let te=null;if(this._windowHeight=window.innerHeight&&document.documentElement.clientHeight?Math.min(window.innerHeight,document.documentElement.clientHeight):window.innerHeight||document.documentElement.clientHeight,this._windowHeight<250&&(this._smallView=!0),this.isOpen||this._renderedOnce){this._renderedOnce=!0;const ve=(0,x.H)({flyout:!0,small:this._smallView});te=s.qy`
        <div class=${ve} @wheel=${this.handleFlyoutWheel}>
          ${this.renderFlyout()}
        </div>
      `}return s.qy`
      <div class=${(0,x.H)(T)}>
        <div class="anchor">
          ${W}
        </div>
        <div class="scout-top"></div>
        <div class="scout-bottom"></div>
        ${te}
      </div>
    `}renderAnchor(){return s.qy`
      <slot name="anchor"></slot>
    `}renderFlyout(){return s.qy`
      <slot name="flyout"></slot>
    `}updateFlyout(T=!0){if(!this.isOpen)return;const W=this._anchor,te=this._flyout;if(te&&W){const ve=window.innerWidth&&document.documentElement.clientWidth?Math.min(window.innerWidth,document.documentElement.clientWidth):window.innerWidth||document.documentElement.clientWidth;this._windowHeight=window.innerHeight&&document.documentElement.clientHeight?Math.min(window.innerHeight,document.documentElement.clientHeight):window.innerHeight||document.documentElement.clientHeight;let de,$,Z,re=0,G=0;const ee=te.getBoundingClientRect(),z=W.getBoundingClientRect(),le=this._topScout.getBoundingClientRect(),K=this._bottomScout.getBoundingClientRect(),L={height:this._windowHeight,left:0,top:0,width:ve};if(y()){const ge=(y()?window:null).getWindowSegments();let Be;const Le=z.left+z.width/2,nt=z.top+z.height/2;for(const Pe of ge)if(Le>=Pe.left&&nt>=Pe.top){Be=Pe;break}Be&&(L.left=Be.left,L.top=Be.top,L.width=Be.width,L.height=Be.height)}ee.width+2*this._edgePadding>L.width?ee.width>L.width?(Z=L.width,re=0):re=(L.width-ee.width)/2:re=z.left+ee.width+this._edgePadding>L.width?z.left-(z.left+ee.width+this._edgePadding-L.width):z.left<this._edgePadding?this._edgePadding:z.left;const P=L.height-(z.top+z.height),J=z.top;this.avoidHidingAnchor?P<=ee.height?J<ee.height?J>P?(de=L.height-z.top,$=J):(G=z.bottom,$=P):(de=L.height-z.top,$=J):(G=z.bottom,$=P):ee.height+2*this._edgePadding>L.height?ee.height>=L.height?($=L.height,G=0):G=(L.height-ee.height)/2:G=z.top+z.height+ee.height+this._edgePadding>L.height?L.height-ee.height-this._edgePadding:Math.max(z.top+z.height,this._edgePadding),(0!==le.top||0!==le.left)&&(re-=le.left,typeof de<"u"?de+=K.top-this._windowHeight:G-=le.top),"rtl"===this.direction?re>100&&this.offsetLeft>100&&(te.style.left=L.width-re+ee.left-ee.width-30+"px"):te.style.left=`${re+L.left}px`,typeof de<"u"?(te.style.top="unset",te.style.bottom=`${de}px`):(te.style.bottom="unset",te.style.top=`${G+L.top}px`),Z&&(te.style.width=`${Z}px`,te.style.setProperty("--mgt-flyout-set-width",`${Z}px`),window.requestAnimationFrame(()=>this.updateFlyout())),$&&!T?(te.style.maxHeight=`${$}px`,te.style.setProperty("--mgt-flyout-set-height",`${$}px`)):(te.style.maxHeight=null,te.style.setProperty("--mgt-flyout-set-height","unset")),T&&window.requestAnimationFrame(()=>this.updateFlyout(!1))}}setupWindowEvents(T){T&&this.isLightDismiss?(window.addEventListener("wheel",this.handleWindowEvent),window.addEventListener("pointerdown",this.handleWindowEvent),window.addEventListener("resize",this.handleResize),window.addEventListener("keyup",this.handleKeyUp)):(window.removeEventListener("wheel",this.handleWindowEvent),window.removeEventListener("pointerdown",this.handleWindowEvent),window.removeEventListener("resize",this.handleResize),window.removeEventListener("keyup",this.handleKeyUp))}}return A([(0,c.MZ)({attribute:"light-dismiss",type:Boolean}),H("design:type",Boolean)],V.prototype,"isLightDismiss",void 0),A([(0,c.MZ)({attribute:null,type:Boolean}),H("design:type",Boolean)],V.prototype,"avoidHidingAnchor",void 0),A([(0,c.MZ)({attribute:"isOpen",type:Boolean}),H("design:type",Boolean),H("design:paramtypes",[Boolean])],V.prototype,"isOpen",null),V})()},1965:(rt,pe,h)=>{h.d(pe,{i:()=>E});var s=h(8324),c=h(5260);const x=[s.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}
`];var y=h(8940);const E=()=>(0,y.N)("spinner",R);class R extends c.S{static get styles(){return x}render(){return s.qy`<fluent-progress-ring title="spinner"></fluent-progress-ring>`}}},5889:(rt,pe,h)=>{h.d(pe,{j:()=>s});const s={presence:{name:"presence",stores:{presence:"presence"},version:2},users:{name:"users",stores:{users:"users",usersQuery:"usersQuery",userFilters:"userFilters"},version:3},photos:{name:"photos",stores:{contacts:"contacts",users:"users",groups:"groups",teams:"teams"},version:2},people:{name:"people",stores:{contacts:"contacts",groupPeople:"groupPeople",peopleQuery:"peopleQuery"},version:3},groups:{name:"groups",stores:{groups:"groups",groupsQuery:"groupsQuery"},version:5},get:{name:"responses",stores:{responses:"responses"},version:2},search:{name:"search",stores:{responses:"responses"},version:2},files:{name:"files",stores:{driveFiles:"driveFiles",groupFiles:"groupFiles",siteFiles:"siteFiles",userFiles:"userFiles",insightFiles:"insightFiles",fileQueries:"fileQueries"},version:2},fileLists:{name:"file-lists",stores:{fileLists:"fileLists",insightfileLists:"insightfileLists"},version:2}}},9546:(rt,pe,h)=>{h.d(pe,{QY:()=>c,Ts:()=>x});const c=y=>"personType"in y||"userType"in y,x=y=>"initials"in y},7768:(rt,pe,h)=>{h.d(pe,{$4:()=>nt,$V:()=>A,Ad:()=>ge,Ay:()=>ce,D:()=>Te,KE:()=>$,Kx:()=>Be,LI:()=>ee,Mu:()=>ve,NO:()=>Pe,Nd:()=>K,OB:()=>Z,Pk:()=>P,Pq:()=>j,Rh:()=>mt,S0:()=>ue,Sp:()=>le,W1:()=>fe,WU:()=>Le,WW:()=>re,XD:()=>de,Y1:()=>oe,Z:()=>tt,Zm:()=>Tt,bJ:()=>_e,bn:()=>L,d$:()=>G,dM:()=>z,gt:()=>b,jI:()=>ie,mQ:()=>wt,mj:()=>xe,n:()=>ct,o4:()=>Qe,oL:()=>Ge,sy:()=>Ve,wH:()=>J,yv:()=>T,zn:()=>te});var s=h(2404),c=h(4327),x=h(7425),y=h(5889),E=h(2657),R=h(3173),_=function(it,gt,$e,Xe){return new($e||($e=Promise))(function(nn,xn){function An(gn){try{gi(Xe.next(gn))}catch(hi){xn(hi)}}function Mn(gn){try{gi(Xe.throw(gn))}catch(hi){xn(hi)}}function gi(gn){gn.done?nn(gn.value):function Gt(nn){return nn instanceof $e?nn:new $e(function(xn){xn(nn)})}(gn.value).then(An,Mn)}gi((Xe=Xe.apply(it,gt||[])).next())})};const b=it=>Array.isArray(it.nextExpectedRanges),A=()=>_(void 0,void 0,void 0,function*(){yield s._.getCache(y.j.fileLists,y.j.fileLists.stores.fileLists).clearStore()}),H=()=>s._.config.files.invalidationPeriod||s._.config.defaultInvalidationPeriod,O=()=>s._.config.files.isEnabled&&s._.config.isEnabled,V=()=>s._.config.fileLists.isEnabled&&s._.config.isEnabled,B=["Files.Read","Files.ReadWrite","Files.Read.All","Files.ReadWrite.All","Group.Read.All","Group.ReadWrite.All","Sites.Read.All","Sites.ReadWrite.All"],T=["Sites.Read.All","Sites.ReadWrite.All"],W=["Files.ReadWrite","Files.ReadWrite.All","Sites.ReadWrite.All"],te=(it,gt,$e=y.j.files.stores.fileQueries,Xe=B)=>_(void 0,void 0,void 0,function*(){const Gt=s._.getCache(y.j.files,$e),nn=yield at(Gt,gt);if(nn)return nn;let xn;try{xn=yield it.api(gt).middlewareOptions((0,c.F)(Xe)).get(),O()&&(yield Gt.putValue(gt,{file:JSON.stringify(xn)}))}catch{}return xn||null}),ve=(it,gt,$e)=>_(void 0,void 0,void 0,function*(){return te(it,`/drives/${gt}/items/${$e}`,y.j.files.stores.driveFiles)}),re=(it,gt,$e)=>_(void 0,void 0,void 0,function*(){return te(it,`/drives/${gt}/root:/${$e}`,y.j.files.stores.driveFiles)}),de=(it,gt,$e)=>_(void 0,void 0,void 0,function*(){return te(it,`/groups/${gt}/drive/items/${$e}`,y.j.files.stores.groupFiles)}),G=(it,gt,$e)=>_(void 0,void 0,void 0,function*(){return te(it,`/groups/${gt}/drive/root:/${$e}`,y.j.files.stores.groupFiles)}),$=(it,gt)=>_(void 0,void 0,void 0,function*(){return te(it,`/me/drive/items/${gt}`,y.j.files.stores.userFiles)}),Z=(it,gt)=>_(void 0,void 0,void 0,function*(){return te(it,`/me/drive/root:/${gt}`,y.j.files.stores.userFiles)}),ee=(it,gt,$e)=>_(void 0,void 0,void 0,function*(){return te(it,`/sites/${gt}/drive/items/${$e}`,y.j.files.stores.siteFiles)}),z=(it,gt,$e)=>_(void 0,void 0,void 0,function*(){return te(it,`/sites/${gt}/drive/root:/${$e}`,y.j.files.stores.siteFiles)}),le=(it,gt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return te(it,`/sites/${gt}/lists/${$e}/items/${Xe}/driveItem`,y.j.files.stores.siteFiles)}),K=(it,gt,$e)=>_(void 0,void 0,void 0,function*(){return te(it,`/users/${gt}/drive/items/${$e}`,y.j.files.stores.userFiles)}),L=(it,gt,$e)=>_(void 0,void 0,void 0,function*(){return te(it,`/users/${gt}/drive/root:/${$e}`,y.j.files.stores.userFiles)}),P=(it,gt,$e)=>_(void 0,void 0,void 0,function*(){return te(it,`/me/insights/${gt}/${$e}/resource`,y.j.files.stores.insightFiles,T)}),J=(it,gt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return te(it,`/users/${gt}/insights/${$e}/${Xe}/resource`,y.j.files.stores.insightFiles,T)}),X=(it,gt,$e,Xe)=>_(void 0,void 0,void 0,function*(){let Gt;const nn=s._.getCache(y.j.fileLists,$e),xn=yield Nt(nn,$e,`${gt}:${Xe}`);if(xn)return Gt=Fe(it,xn.files,xn.nextLink),Gt;let An;try{if(An=it.api(gt).middlewareOptions((0,c.F)(B)),Xe&&An.top(Xe),Gt=yield we(it,An),V()){const Mn=Gt.nextLink;yield nn.putValue(gt,{files:Gt.value.map(gi=>JSON.stringify(gi)),nextLink:Mn})}}catch{}return Gt||null}),ge=(it,gt)=>_(void 0,void 0,void 0,function*(){return X(it,"/me/drive/root/children",y.j.fileLists.stores.fileLists,gt)}),Be=(it,gt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return X(it,`/drives/${gt}/items/${$e}/children`,y.j.fileLists.stores.fileLists,Xe)}),Le=(it,gt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return X(it,`/drives/${gt}/root:/${$e}:/children`,y.j.fileLists.stores.fileLists,Xe)}),nt=(it,gt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return X(it,`/groups/${gt}/drive/items/${$e}/children`,y.j.fileLists.stores.fileLists,Xe)}),Pe=(it,gt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return X(it,`/groups/${gt}/drive/root:/${$e}:/children`,y.j.fileLists.stores.fileLists,Xe)}),oe=(it,gt,$e)=>_(void 0,void 0,void 0,function*(){return X(it,`/me/drive/items/${gt}/children`,y.j.fileLists.stores.fileLists,$e)}),Qe=(it,gt,$e)=>_(void 0,void 0,void 0,function*(){return X(it,`/me/drive/root:/${gt}:/children`,y.j.fileLists.stores.fileLists,$e)}),tt=(it,gt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return X(it,`/sites/${gt}/drive/items/${$e}/children`,y.j.fileLists.stores.fileLists,Xe)}),mt=(it,gt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return X(it,`/sites/${gt}/drive/root:/${$e}:/children`,y.j.fileLists.stores.fileLists,Xe)}),Tt=(it,gt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return X(it,`/users/${gt}/drive/items/${$e}/children`,y.j.fileLists.stores.fileLists,Xe)}),ct=(it,gt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return X(it,`/users/${gt}/drive/root:/${$e}:/children`,y.j.fileLists.stores.fileLists,Xe)}),Te=(it,gt,$e)=>_(void 0,void 0,void 0,function*(){return X(it,gt,y.j.fileLists.stores.fileLists,$e)}),ie=(it,gt)=>_(void 0,void 0,void 0,function*(){const $e=`/me/insights/${gt}`,Xe=y.j.fileLists.stores.insightfileLists,Gt=s._.getCache(y.j.fileLists,Xe),nn=yield Nt(Gt,Xe,$e);if(nn)return nn.files.map(Mn=>JSON.parse(Mn));let xn;try{xn=yield it.api($e).filter("resourceReference/type eq 'microsoft.graph.driveItem'").middlewareOptions((0,c.F)(T)).get()}catch{}const An=yield Ke(it,xn,T);return V()&&(yield Gt.putValue($e,{files:An.map(Mn=>JSON.stringify(Mn))})),An||null}),ue=(it,gt,$e)=>_(void 0,void 0,void 0,function*(){let Xe,Gt;"shared"===$e?(Xe="/me/insights/shared",Gt=`((lastshared/sharedby/id eq '${gt}') and (resourceReference/type eq 'microsoft.graph.driveItem'))`):(Xe=`/users/${gt}/insights/${$e}`,Gt="resourceReference/type eq 'microsoft.graph.driveItem'");const nn=`${Xe}?$filter=${Gt}`,xn=y.j.fileLists.stores.insightfileLists,An=s._.getCache(y.j.fileLists,xn),Mn=yield Nt(An,xn,nn);if(Mn)return Mn.files.map(hi=>JSON.parse(hi));let gi;try{gi=yield it.api(Xe).filter(Gt).middlewareOptions((0,c.F)(T)).get()}catch{}const gn=yield Ke(it,gi,T);return V()&&(yield An.putValue(Xe,{files:gn.map(hi=>JSON.stringify(hi))})),gn||null}),_e=(it,gt)=>_(void 0,void 0,void 0,function*(){if(!gt||0===gt.length)return[];const $e=it.createBatch(),Xe=[];let Gt,nn;O()&&(Gt=s._.getCache(y.j.files,y.j.files.stores.fileQueries));for(const xn of gt)O()&&(nn=yield Gt.getValue(xn)),O()&&nn&&H()>Date.now()-nn.timeCached?Xe.push(JSON.parse(nn.file)):""!==xn&&$e.get(xn,xn,B);try{const xn=yield $e.executeAll();for(const An of gt){const Mn=xn.get(An);Mn?.content&&(Xe.push(Mn.content),O()&&(yield Gt.putValue(An,{file:JSON.stringify(Mn.content)})))}return Xe}catch{try{return Promise.all(gt.filter(An=>An&&""!==An).map(An=>_(void 0,void 0,void 0,function*(){const Mn=yield te(it,An);if(Mn)return O()&&(yield Gt.putValue(An,{file:JSON.stringify(Mn)})),Mn})))}catch{return[]}}}),Ke=(it,gt,$e)=>_(void 0,void 0,void 0,function*(){if(!gt)return[];const Xe=gt.value,Gt=it.createBatch(),nn=[];for(const xn of Xe){const An=xn.resourceReference.id;""!==An&&Gt.get(An,An,$e)}try{const xn=yield Gt.executeAll();for(const An of Xe){const Mn=xn.get(An.resourceReference.id);Mn?.content&&nn.push(Mn.content)}return nn}catch{try{return Promise.all(Xe.filter(An=>!!An.resourceReference.id).map(An=>_(void 0,void 0,void 0,function*(){return yield it.api(An.resourceReference.id).middlewareOptions((0,c.F)($e)).get()})))}catch{return[]}}}),we=(it,gt)=>_(void 0,void 0,void 0,function*(){return x.E.create(it,gt)}),Fe=(it,gt,$e)=>x.E.createFromValue(it,gt.map(Xe=>JSON.parse(Xe)),$e),at=(it,gt)=>_(void 0,void 0,void 0,function*(){if(O()){const $e=yield it.getValue(gt);if($e&&H()>Date.now()-$e.timeCached)return JSON.parse($e.file)}return null}),Nt=(it,gt,$e)=>_(void 0,void 0,void 0,function*(){if(it||(it=s._.getCache(y.j.fileLists,gt)),V()){const Xe=yield it.getValue($e);if(Xe&&(s._.config.fileLists.invalidationPeriod||s._.config.defaultInvalidationPeriod)>Date.now()-Xe.timeCached)return Xe}return null}),Ge=it=>_(void 0,void 0,void 0,function*(){const gt=it.nextLink;if(it.hasNext&&(yield it.next()),V()){const $e=s._.getCache(y.j.fileLists,y.j.fileLists.stores.fileLists),nn=/(graph.microsoft.com\/(v1.0|beta))(.*?)(?=\?)/gi.exec(gt)[3];yield $e.putValue(nn,{files:it.value.map(xn=>JSON.stringify(xn)),nextLink:gt})}}),fe=(it,gt,$e)=>_(void 0,void 0,void 0,function*(){try{const Xe=yield it.api(gt).responseType(E.yl.RAW).middlewareOptions((0,c.F)($e)).get();if(404===Xe.status)return{eTag:null,thumbnail:null};if(!Xe.ok)return null;return{eTag:Xe.headers.get("eTag"),thumbnail:yield(0,R.Sk)(yield Xe.blob())}}catch{return null}}),j=(it,gt)=>_(void 0,void 0,void 0,function*(){try{return(yield it.api(gt).middlewareOptions((0,c.F)(B)).get())||null}catch{}return null}),ce=(it,gt,$e)=>_(void 0,void 0,void 0,function*(){try{const Xe={item:{"@microsoft.graph.conflictBehavior":$e||"rename"}};let Gt;try{Gt=yield it.api(gt).middlewareOptions((0,c.F)(W)).post(JSON.stringify(Xe))}catch{}return Gt||null}catch{return null}}),xe=(it,gt,$e,Xe,Gt)=>_(void 0,void 0,void 0,function*(){try{const nn={"Content-Length":$e,"Content-Range":Xe};let xn;try{xn=yield it.client.api(gt).middlewareOptions((0,c.F)(W)).headers(nn).put(Gt)}catch{}return xn||null}catch{return null}}),Ve=(it,gt,$e)=>_(void 0,void 0,void 0,function*(){try{let Xe;try{Xe=yield it.client.api(gt).middlewareOptions((0,c.F)(W)).put($e)}catch{}return Xe||null}catch{return null}}),wt=(it,gt)=>_(void 0,void 0,void 0,function*(){try{yield it.client.api(gt).middlewareOptions((0,c.F)(W)).delete()}catch{return null}})},6692:(rt,pe,h)=>{h.d(pe,{K3:()=>re,cB:()=>te,iu:()=>ve,lq:()=>W,ox:()=>de,we:()=>O,ys:()=>b});var s=h(2404),c=h(4327),x=h(3173),y=h(5889),E=function(G,$,Z,ee){return new(Z||(Z=Promise))(function(le,K){function L(X){try{J(ee.next(X))}catch(ge){K(ge)}}function P(X){try{J(ee.throw(X))}catch(ge){K(ge)}}function J(X){X.done?le(X.value):function z(le){return le instanceof Z?le:new Z(function(K){K(le)})}(X.value).then(L,P)}J((ee=ee.apply(G,$||[])).next())})};const R=["any","person","group"],b=(G,$="any")=>(G=>"string"==typeof G&&R.includes(G))(G)?G:$,A=["any","user","contact"],O=(G,$="any")=>(G=>"string"==typeof G&&A.includes(G))(G)?G:$,se=()=>s._.config.people.invalidationPeriod||s._.config.defaultInvalidationPeriod,V=()=>s._.config.people.isEnabled&&s._.config.isEnabled,B=["People.Read","People.Read.All"],T=["Contacts.Read","Contacts.ReadWrite"],W=(G,$,Z=10,ee="any",z="")=>E(void 0,void 0,void 0,function*(){const le=`${$}:${Z}:${ee}`;let K;if(V()){K=s._.getCache(y.j.people,y.j.people.stores.peopleQuery);const ge=V()?yield K.getValue(le):null;if(ge&&se()>Date.now()-ge.timeCached)return ge.results.map(Be=>JSON.parse(Be))}let P,L="personType/class eq 'Person'";"any"!==ee&&(L+="user"===ee?"and personType/subclass eq 'OrganizationUser'":"and (personType/subclass eq 'ImplicitContact' or personType/subclass eq 'PersonalContact')"),""!==z&&(L+=` and  ${z}`);try{let J=G.api("/me/people").search('"'+$+'"').top(Z).filter(L).middlewareOptions((0,c.F)(B));if("contact"!==ee&&(J=J.header("X-PeopleQuery-QuerySources","Mailbox,Directory")),P=yield J.get(),V()&&P){const X={maxResults:Z,results:null};X.results=P.value.map(ge=>JSON.stringify(ge)),yield K.putValue(le,X)}}catch{}return P?.value}),te=(G,$="any",Z="",ee=10)=>E(void 0,void 0,void 0,function*(){let z;const le=`${Z||`*:${$}`}:${ee}`;if(V()){z=s._.getCache(y.j.people,y.j.people.stores.peopleQuery);const J=yield z.getValue(le);if(J&&se()>Date.now()-J.timeCached)return J.results.map(X=>JSON.parse(X))}let P,L="personType/class eq 'Person'";"any"!==$&&(L+="user"===$?"and personType/subclass eq 'OrganizationUser'":"and (personType/subclass eq 'ImplicitContact' or personType/subclass eq 'PersonalContact')"),Z&&(L+=` and ${Z}`);try{let J=G.api("/me/people").middlewareOptions((0,c.F)(B)).top(ee).filter(L);"contact"!==$&&(J=J.header("X-PeopleQuery-QuerySources","Mailbox,Directory")),P=yield J.get(),V()&&P&&(yield z.putValue(le,{maxResults:10,results:P.value.map(X=>JSON.stringify(X))}))}catch{}return P?P.value:null}),ve=G=>{var $,Z;const ee=G,le=G;return G.mail?(0,x.aX)(G.mail):null!==($=ee.scoredEmailAddresses)&&void 0!==$&&$.length?(0,x.aX)(ee.scoredEmailAddresses[0].address):null!==(Z=le.emailAddresses)&&void 0!==Z&&Z.length?(0,x.aX)(le.emailAddresses[0].address):null},re=(G,$)=>E(void 0,void 0,void 0,function*(){let Z;if(V()){Z=s._.getCache(y.j.people,y.j.people.stores.contacts);const le=yield Z.getValue($);if(le&&se()>Date.now()-le.timeCached)return JSON.parse(le.person)}const ee=`${$.replace(/#/g,"%2523")}`,z=yield G.api("/me/contacts").filter(`emailAddresses/any(a:a/address eq '${ee}')`).middlewareOptions((0,c.F)(T)).get();return V()&&z&&(yield Z.putValue($,{person:JSON.stringify(z.value)})),z?z.value:null}),de=(G,$,Z,ee)=>E(void 0,void 0,void 0,function*(){var z;let le;const K=`${$}${Z}`;if(V()){le=s._.getCache(y.j.people,y.j.people.stores.peopleQuery);const J=yield le.getValue(K);if(J&&se()>Date.now()-J.timeCached)return J.results.map(X=>JSON.parse(X))}let L=G.api(Z).version($);ee?.length&&(L=L.middlewareOptions((0,c.F)(ee)));let P=yield L.get();if(P&&Array.isArray(P.value)&&P["@odata.nextLink"]){let J=P;for(;J?.["@odata.nextLink"];){const ge=J["@odata.nextLink"].split($)[1];J=yield G.api(ge).version($).get(),null!==(z=J?.value)&&void 0!==z&&z.length&&(J.value=P.value.concat(J.value),P=J)}}if(V()&&P){const J={results:null};J.results=Array.isArray(P.value)?P.value.map(X=>JSON.stringify(X)):[JSON.stringify(P)],yield le.putValue(K,J)}return P?.value})},4130:(rt,pe,h)=>{h.d(pe,{B2:()=>O,HJ:()=>H,aC:()=>A,e_:()=>V,f8:()=>te,pc:()=>re,qr:()=>se,r$:()=>de,t5:()=>ve});var s=h(2404),c=h(4327),x=h(2657),y=h(3173),E=h(5889),R=h(6692),_=h(5527),b=function(G,$,Z,ee){return new(Z||(Z=Promise))(function(le,K){function L(X){try{J(ee.next(X))}catch(ge){K(ge)}}function P(X){try{J(ee.throw(X))}catch(ge){K(ge)}}function J(X){X.done?le(X.value):function z(le){return le instanceof Z?le:new Z(function(K){K(le)})}(X.value).then(L,P)}J((ee=ee.apply(G,$||[])).next())})};const A=()=>s._.config.photos.invalidationPeriod||s._.config.defaultInvalidationPeriod,H=()=>s._.config.photos.isEnabled&&s._.config.isEnabled,O=["User.ReadBasic.All","User.Read.All","User.ReadWrite.All"],se=["User.Read","User.ReadWrite",...O],V=(G,$,Z)=>b(void 0,void 0,void 0,function*(){try{const ee=yield G.api(`${$}/photo/$value`).responseType(x.yl.RAW).middlewareOptions((0,c.F)(Z)).get();return 404===ee.status?{eTag:null,photo:null}:ee.ok?{eTag:ee["@odata.mediaEtag"],photo:yield(0,y.Sk)(yield ee.blob())}:null}catch{return null}}),B=(G,$)=>b(void 0,void 0,void 0,function*(){let Z,ee;return H()&&(Z=s._.getCache(E.j.photos,E.j.photos.stores.contacts),ee=yield Z.getValue($),ee&&A()>Date.now()-ee.timeCached)?ee.photo:(ee=yield V(G,`me/contacts/${$}`,["Contacts.Read","Contacts.ReadWrite"]),H()&&ee&&(yield Z.putValue($,ee)),ee?ee.photo:null)}),T=(G,$)=>b(void 0,void 0,void 0,function*(){let Z,ee;if(H()){if(Z=s._.getCache(E.j.photos,E.j.photos.stores.users),ee=yield Z.getValue($),ee&&A()>Date.now()-ee.timeCached)return ee.photo;if(ee)try{const z=yield G.api(`users/${$}/photo`).get();z&&(z["@odata.mediaEtag"]!==ee.eTag||null===z["@odata.mediaEtag"]&&null===ee.eTag)&&(ee=null)}catch{return null}}return ee=ee||(yield V(G,`users/${$}`,O)),H()&&ee&&(yield Z.putValue($,ee)),ee?ee.photo:null}),te=(G,$,Z=!0)=>b(void 0,void 0,void 0,function*(){if("personType"in $&&"OrganizationUser"!==$.personType.subclass){if("PersonalContact"===$.personType.subclass&&Z){const z=(0,R.iu)($),le=yield(0,R.K3)(G,z);if(le?.length&&le[0].id)return yield B(G,le[0].id)}return null}if($.userPrincipalName||$.id){const z=$.userPrincipalName||$.id;return yield T(G,z)}if($.id){const z=yield T(G,$.id);if(z)return z}const ee=(0,R.iu)($);if(ee){const z=yield(0,_.Ei)(G,ee,1);if(z?.length)return yield T(G,z[0].id);if(Z){const le=yield(0,R.K3)(G,ee);if(le?.length)return yield B(G,le[0].id)}}return null}),ve=(G,$)=>b(void 0,void 0,void 0,function*(){let Z,ee;const z=$.id;if(H()){if(ee=s._.getCache(E.j.photos,E.j.photos.stores.groups),Z=yield ee.getValue(z),Z&&A()>Date.now()-Z.timeCached)return Z.photo;if(Z)try{const K=yield G.api(`groups/${z}/photo`).get();K&&(K["@odata.mediaEtag"]!==Z.eTag||null===K["@odata.mediaEtag"]&&null===Z.eTag)&&(Z=null)}catch{return null}}return Z=Z||(yield V(G,`groups/${z}`,["Group.Read.All","Group.ReadWrite.All"])),H()&&Z&&(yield ee.putValue(z,Z)),Z?Z.photo:null}),re=(G,$)=>b(void 0,void 0,void 0,function*(){return yield s._.getCache(E.j.photos,$).getValue(G)}),de=(G,$,Z)=>b(void 0,void 0,void 0,function*(){yield s._.getCache(E.j.photos,$).putValue(G,Z)})},1786:(rt,pe,h)=>{h.d(pe,{R:()=>_,u:()=>b});var s=h(2404),c=h(4327),x=h(5889),y=function(A,H,O,se){return new(O||(O=Promise))(function(B,T){function W(re){try{ve(se.next(re))}catch(de){T(de)}}function te(re){try{ve(se.throw(re))}catch(de){T(de)}}function ve(re){re.done?B(re.value):function V(B){return B instanceof O?B:new O(function(T){T(B)})}(re.value).then(W,te)}ve((se=se.apply(A,H||[])).next())})};const E=()=>s._.config.presence.invalidationPeriod||s._.config.defaultInvalidationPeriod,R=()=>s._.config.presence.isEnabled&&s._.config.isEnabled,_=(A,H)=>y(void 0,void 0,void 0,function*(){let O;if(R()){O=s._.getCache(x.j.presence,x.j.presence.stores.presence);const T=yield O.getValue(H||"me");if(T&&E()>Date.now()-T.timeCached)return JSON.parse(T.presence)}const se=H?["presence.read.all"]:["presence.read","presence.read.all"],V=H?`/users/${H}/presence`:"/me/presence",B=yield A.api(V).middlewareOptions((0,c.F)(se)).get();return R()&&(yield O.putValue(H||"me",{presence:JSON.stringify(B)})),B}),b=(A,H)=>y(void 0,void 0,void 0,function*(){if(!H||0===H.length)return{};const O={},se=[],V=["presence.read.all"];let B;R()&&(B=s._.getCache(x.j.presence,x.j.presence.stores.presence));for(const T of H)if(T?.id){const W=T.id;let te;O[W]=null,R()&&(te=yield B.getValue(W)),R()&&te&&E()>Date.now()-te.timeCached?O[W]=JSON.parse(te.presence):se.push(W)}try{if(se.length>0){const T=yield A.api("/communications/getPresencesByUserId").middlewareOptions((0,c.F)(V)).post({ids:se});for(const W of T.value)O[W.id]=W,R()&&(yield B.putValue(W.id,{presence:JSON.stringify(W)}))}return O}catch{try{const W=yield Promise.all(H.filter(te=>te?.id&&!O[te.id]&&"personType"in te&&"OrganizationUser"===te.personType.subclass).map(te=>_(A,te.id)));for(const te of W)O[te.id]=te;return O}catch{return null}}})},5527:(rt,pe,h)=>{h.d(pe,{$q:()=>V,Ei:()=>T,PD:()=>R,cA:()=>_,fp:()=>te,jp:()=>H,lo:()=>b,sb:()=>W,vW:()=>O,vl:()=>B,wz:()=>se});var s=h(2404),c=h(4327),x=h(5889),y=h(6692),E=function(ve,re,de,G){return new(de||(de=Promise))(function(Z,ee){function z(L){try{K(G.next(L))}catch(P){ee(P)}}function le(L){try{K(G.throw(L))}catch(P){ee(P)}}function K(L){L.done?Z(L.value):function $(Z){return Z instanceof de?Z:new de(function(ee){ee(Z)})}(L.value).then(z,le)}K((G=G.apply(ve,re||[])).next())})};const R=()=>s._.config.users.invalidationPeriod||s._.config.defaultInvalidationPeriod,_=()=>s._.config.users.isEnabled&&s._.config.isEnabled,b=(ve,re="",de=10)=>E(void 0,void 0,void 0,function*(){const G=["User.ReadBasic.All","User.Read.All","Directory.Read.All","User.ReadWrite.All","Directory.ReadWrite.All"];let Z;const ee=`${""===re?"*":re}:${de}`,z={maxResults:de,results:null};if(_()){Z=s._.getCache(x.j.users,x.j.users.stores.userFilters);const K=yield Z.getValue(ee);if(K&&R()>Date.now()-K.timeCached)return K.results.map(L=>JSON.parse(L))}const le=ve.api("/users").top(de);re&&le.filter(re).header("ConsistencyLevel","eventual").count(!0);try{const K=yield le.middlewareOptions((0,c.F)(G)).get();return _()&&K&&(z.results=K.value.map(L=>JSON.stringify(L)),yield Z.putValue(re,z)),K.value}catch{}}),A=["User.Read","User.ReadWrite"],H=(ve,re)=>E(void 0,void 0,void 0,function*(){let de;if(_()){de=s._.getCache(x.j.users,x.j.users.stores.users);const Z=yield de.getValue("me");if(Z&&R()>Date.now()-Z.timeCached){const ee=JSON.parse(Z.user),z=re?re.filter(le=>!Object.keys(ee).includes(le)):null;if(!z||z.length<=1)return ee}}let G="me";re&&(G=G+"?$select="+re.toString());const $=yield ve.api(G).middlewareOptions((0,c.F)(A)).get();return _()&&(yield de.putValue("me",{user:JSON.stringify($)})),$}),O=["User.ReadBasic.All","User.Read.All","Directory.Read.All","User.ReadWrite.All","Directory.ReadWrite.All"],se=(ve,re,de)=>E(void 0,void 0,void 0,function*(){let G;if(_()){G=s._.getCache(x.j.users,x.j.users.stores.users);const ee=yield G.getValue(re);if(ee&&R()>Date.now()-ee.timeCached){const z=ee.user?JSON.parse(ee.user):null,le=de&&z?de.filter(K=>!Object.keys(z).includes(K)):null;if(!le||le.length<=1)return z}}let Z,$=`/users/${re}`;de&&($=$+"?$select="+de.toString());try{Z=yield ve.api($).middlewareOptions((0,c.F)(O)).get()}catch{}return _()&&(yield G.putValue(re,{user:JSON.stringify(Z)})),Z}),V=(ve,re,de="",G="",$)=>E(void 0,void 0,void 0,function*(){if(!re||0===re.length)return[];const Z=ve.createBatch(),ee={},z={},le=[];let K;de=de.toLowerCase(),_()&&(K=s._.getCache(x.j.users,x.j.users.stores.users));for(const L of re){ee[L]=null;let J,X,P=`/users/${L}`;if(_()&&(X=yield K.getValue(L)),X?.user&&R()>Date.now()-X.timeCached)if(J=JSON.parse(X?.user),de){if(J){const ge=J.displayName;ge?.toLowerCase().includes(de)&&(z[L]=J)}}else J?ee[L]=J:(Z.get(L,P,O),le.push(L));else""!==L&&("me"===L?ee[L]=yield H(ve):(P=`/users/${L}`,G&&(P+=`${P}?$filter=${G}&$count=true`),Z.get(L,P,O,G?{ConsistencyLevel:"eventual"}:{}),le.push(L)))}try{if(Z.hasRequests){const L=yield Z.executeAll();for(const P of re){const J=L.get(P);if(J?.content){const X=J.content;de?(X?.displayName.toLowerCase()||"").includes(de)&&(z[P]=X):ee[P]=X,_()&&(yield K.putValue(P,{user:JSON.stringify(X)}))}else{const X=$.find(ge=>Object.values(ge).includes(P));X&&(ee[P]=X)}}}return de&&Object.keys(z).length?Promise.all(Object.values(z)):Promise.all(Object.values(ee))}catch{try{return re.filter(P=>le.includes(P)).forEach(P=>{ee[P]=se(ve,P)}),_()&&(yield Promise.all(re.filter(P=>le.includes(P)).map(P=>E(void 0,void 0,void 0,function*(){return yield K.putValue(P,{user:JSON.stringify(yield ee[P])})})))),Promise.all(Object.values(ee))}catch{return[]}}}),B=(ve,re,de)=>E(void 0,void 0,void 0,function*(){var G;const $=["People.Read","People.Read.All"];if(!re||0===re.length)return[];const Z=ve.createBatch(),ee=[];let z,le;_()&&(le=s._.getCache(x.j.users,x.j.users.stores.usersQuery));for(const K of re)if(_()&&(z=yield le.getValue(K)),_()&&z?.results[0]&&R()>Date.now()-z.timeCached){const L=JSON.parse(z.results[0]);ee.push(L)}else Z.get(K,`/me/people?$search="${K}"`,$,{"X-PeopleQuery-QuerySources":"Mailbox,Directory"});if(Z.hasRequests)try{const K=yield Z.executeAll();for(const L of re){const P=K.get(L);if(null!==(G=P?.content)&&void 0!==G&&G.value&&P.content.value.length>0)ee.push(P.content.value[0]),_()&&(yield le.putValue(L,{maxResults:1,results:[JSON.stringify(P.content.value[0])]}));else{const J=de.find(X=>Object.values(X).includes(L));J&&ee.push(J)}}return ee}catch{try{return Promise.all(re.filter(L=>L&&""!==L).map(L=>E(void 0,void 0,void 0,function*(){const P=yield(0,y.lq)(ve,L,1);if(P?.length)return _()&&(yield le.putValue(L,{maxResults:1,results:[JSON.stringify(P[0])]})),P[0]})))}catch{return[]}}return ee}),T=(ve,re,de=10,G="")=>E(void 0,void 0,void 0,function*(){const $=O,Z={maxResults:de,results:null},ee=`${re}:${de}:${G}`;let z;if(_()){z=s._.getCache(x.j.users,x.j.users.stores.usersQuery);const P=yield z.getValue(ee);if(P&&R()>Date.now()-P.timeCached)return P.results.map(J=>JSON.parse(J))}const le=`${re.replace(/#/g,"%2523")}`,K=ve.api("users").search(`"displayName:${le}" OR "mail:${le}"`).header("ConsistencyLevel","eventual").count(!0);let L;""!==G&&K.filter(G);try{L=yield K.top(de).middlewareOptions((0,c.F)($)).get()}catch{}return _()&&L&&(Z.results=L.value.map(P=>JSON.stringify(P)),yield z.putValue(re,Z)),L?L.value:null}),W=(ve,re,de,G=10,$="person",Z=!1,ee="",z="")=>E(void 0,void 0,void 0,function*(){const K={maxResults:G,results:null};let L;const P=`${de||"*"}:${re||"*"}:${G}:${$}:${Z}:${ee}`;if(_()){L=s._.getCache(x.j.users,x.j.users.stores.usersQuery);const Le=yield L.getValue(P);if(Le&&R()>Date.now()-Le.timeCached)return Le.results.map(nt=>JSON.parse(nt))}let J="";re&&(J=`startswith(displayName,'${re}') or startswith(givenName,'${re}') or startswith(surname,'${re}') or startswith(mail,'${re}') or startswith(userPrincipalName,'${re}')`);let X=`/groups/${de}/${Z?"transitiveMembers":"members"}`;"person"===$?X+="/microsoft.graph.user":"group"===$&&(X+="/microsoft.graph.group",re&&(J=`startswith(displayName,'${re}') or startswith(mail,'${re}')`)),ee&&(J+=re?` and ${ee}`:ee),z&&(J+=re?` and ${z}`:z);const ge=ve.api(X).top(G).filter(J);ee&&ge.header("ConsistencyLevel","eventual").count(!0);const Be=yield ge.middlewareOptions((0,c.F)(["GroupMember.Read.All","Group.Read.All","Directory.Read.All","GroupMember.ReadWrite.All","Group.ReadWrite.All"])).get();return _()&&Be&&(K.results=Be.value.map(Le=>JSON.stringify(Le)),yield L.putValue(P,K)),Be?Be.value:null}),te=(ve,re,de,G=10,$="person",Z=!1,ee="")=>E(void 0,void 0,void 0,function*(){const z=[];for(const le of de)try{const K=yield W(ve,re,le,G,$,Z,ee);z.push(...K)}catch{continue}return z})},2898:(rt,pe,h)=>{h.d(pe,{_:()=>b});var s=h(2404),c=h(4327),x=h(4130),y=h(5527),E=h(5889),R=h(6199);const b=(A,H,O)=>function(A,H,O,se){return new(O||(O=Promise))(function(B,T){function W(re){try{ve(se.next(re))}catch(de){T(de)}}function te(re){try{ve(se.throw(re))}catch(de){T(de)}}function ve(re){re.done?B(re.value):function V(B){return B instanceof O?B:new O(function(T){T(B)})}(re.value).then(W,te)}ve((se=se.apply(A,H||[])).next())})}(void 0,void 0,void 0,function*(){const se=["User.ReadBasic.All","User.Read.All","Directory.Read.All","User.ReadWrite.All","Directory.ReadWrite.All"],V=["User.Read","User.ReadWrite",...se],B=H?se:V,T=H?x.B2:x.qr;let W,ve,re,te=null;const de=H?`users/${H}`:"me",G=de+(O?`?$select=${O.toString()}`:"");if((0,y.cA)()&&(re=yield s._.getCache(E.j.users,E.j.users.stores.users).getValue(H||"me"),re&&(0,y.PD)()>Date.now()-re.timeCached?(te=re.user?JSON.parse(re.user):null,null!==te&&O&&O.filter(ee=>!Object.keys(te).includes(ee)).length>=1&&(te=null,re=null)):re=null),(0,x.HJ)())if(ve=yield(0,x.pc)(H||"me",E.j.photos.stores.users),ve&&(0,x.aC)()>Date.now()-ve.timeCached)W=ve.photo;else if(ve)try{const $=yield A.api(`${de}/photo`).get();$?.["@odata.mediaEtag"]&&$["@odata.mediaEtag"]===ve.eTag?(yield(0,x.r$)(H||"me",E.j.photos.stores.users,ve),W=ve.photo):ve=null}catch($){(0,R.Z)($)&&("ErrorItemNotFound"===$.code||"ImageNotFound"===$.code)&&(yield(0,x.r$)(H||"me",E.j.photos.stores.users,{eTag:null,photo:null}))}if(ve||re)if(ve){if(!re)try{const $=yield A.api(G).middlewareOptions((0,c.F)(B)).get();$&&((0,y.cA)()&&(yield s._.getCache(E.j.users,E.j.users.stores.users).putValue(H||"me",{user:JSON.stringify($)})),te=$)}catch{}}else try{const $=yield(0,x.e_)(A,de,T);$&&((0,x.HJ)()&&(yield(0,x.r$)(H||"me",E.j.photos.stores.users,{eTag:$.eTag,photo:$.photo})),W=$.photo)}catch{}else{let $;const Z=A.createBatch();H?(Z.get("user",`/users/${H}${O?"?$select="+O.toString():""}`,B),Z.get("photo",`users/${H}/photo/$value`,T)):(Z.get("user","me",B),Z.get("photo","me/photo/$value",T));const ee=yield Z.executeAll(),z=ee.get("photo");z&&($=z.headers.ETag,W=z.content);const le=ee.get("user");le&&(te=le.content),(0,y.cA)()&&(yield s._.getCache(E.j.users,E.j.users.stores.users).putValue(H||"me",{user:JSON.stringify(te)})),(0,x.HJ)()&&(yield(0,x.r$)(H||"me",E.j.photos.stores.users,{eTag:$,photo:W}))}return te&&(te.personImage=W),te})},6199:(rt,pe,h)=>{h.d(pe,{Z:()=>s});const s=c=>c.statusCode&&"code"in c&&"body"in c&&c.date&&"message"in c&&"name"in c&&"requestId"in c},8360:(rt,pe,h)=>{h.d(pe,{E:()=>x});const s=["image","oneline","twolines","threelines","fourlines"],x=(y,E="twolines")=>(y=>"string"==typeof y&&s.includes(y))(y)?y:E},3601:(rt,pe,h)=>{h.d(pe,{E:()=>te});var s=h(5204),c=h(4632),x=h(2618),y=h(1859),E=h(2146);const R=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),_=new Map,b=new Map;let A=null;const H=x.DI.createInterface(ve=>ve.cachedCallback(re=>(null===A&&(A=new V(null,re)),A))),O=Object.freeze({tagFor:ve=>b.get(ve),responsibleFor:ve=>ve.$$designSystem$$||x.DI.findResponsibleContainer(ve).get(H),getOrCreate(ve){if(!ve)return null===A&&(A=x.DI.getOrCreateDOMContainer().get(H)),A;const re=ve.$$designSystem$$;if(re)return re;const de=x.DI.getOrCreateDOMContainer(ve);if(de.has(H,!1))return de.get(H);{const G=new V(ve,de);return de.register(x.cH.instance(H,G)),G}}});class V{constructor(re,de){this.owner=re,this.container=de,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>R.definitionCallbackOnly,null!==re&&(re.$$designSystem$$=this)}withPrefix(re){return this.prefix=re,this}withShadowRootMode(re){return this.shadowRootMode=re,this}withElementDisambiguation(re){return this.disambiguate=re,this}withDesignTokenRoot(re){return this.designTokenRoot=re,this}register(...re){const de=this.container,G=[],$=this.disambiguate,Z=this.shadowRootMode,ee={elementPrefix:this.prefix,tryDefineElement(z,le,K){const L=function se(ve,re,de){return"string"==typeof ve?{name:ve,type:re,callback:de}:ve}(z,le,K),{name:P,callback:J,baseClass:X}=L;let{type:ge}=L,Be=P,Le=_.get(Be),nt=!0;for(;Le;){const Pe=$(Be,ge,Le);switch(Pe){case R.ignoreDuplicate:return;case R.definitionCallbackOnly:nt=!1,Le=void 0;break;default:Be=Pe,Le=_.get(Be)}}nt&&((b.has(ge)||ge===c.g)&&(ge=class extends ge{}),_.set(Be,ge),b.set(ge,Be),X&&b.set(X,Be)),G.push(new B(de,Be,ge,Z,J,nt))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&y.G.registerRoot(this.designTokenRoot)),de.registerWithContext(ee,...re);for(const z of G)z.callback(z),z.willDefine&&null!==z.definition&&z.definition.define();return this}}class B{constructor(re,de,G,$,Z,ee){this.container=re,this.name=de,this.type=G,this.shadowRootMode=$,this.callback=Z,this.willDefine=ee,this.definition=null}definePresentation(re){E.E.define(this.name,re,this.container)}defineElement(re){this.definition=new s.I(this.type,Object.assign(Object.assign({},re),{name:this.name}))}tagFor(re){return O.tagFor(re)}}const W=function T(ve){return O.getOrCreate(ve).withPrefix("fluent")}(),te=(...ve)=>{if(ve?.length)for(const re of ve)W.register(re())}},2710:(rt,pe,h)=>{h.d(pe,{A:()=>c,r:()=>x});var s=h(8324),c=function(y){return y[y.ArrowDown=0]="ArrowDown",y[y.TeamSeparator=1]="TeamSeparator",y[y.Search=2]="Search",y[y.SkypeArrow=3]="SkypeArrow",y[y.SmallEmail=4]="SmallEmail",y[y.SmallEmailHovered=5]="SmallEmailHovered",y[y.SmallChat=6]="SmallChat",y[y.SmallChatHovered=7]="SmallChatHovered",y[y.Video=8]="Video",y[y.VideoHovered=9]="VideoHovered",y[y.ExpandDown=10]="ExpandDown",y[y.Overview=11]="Overview",y[y.Send=12]="Send",y[y.Contact=13]="Contact",y[y.Copy=14]="Copy",y[y.Phone=15]="Phone",y[y.CellPhone=16]="CellPhone",y[y.Chat=17]="Chat",y[y.Call=18]="Call",y[y.CallHovered=19]="CallHovered",y[y.Confirmation=20]="Confirmation",y[y.Department=21]="Department",y[y.Dot=22]="Dot",y[y.Email=23]="Email",y[y.OfficeLocation=24]="OfficeLocation",y[y.Person=25]="Person",y[y.Messages=26]="Messages",y[y.Organization=27]="Organization",y[y.ExpandRight=28]="ExpandRight",y[y.Profile=29]="Profile",y[y.Birthday=30]="Birthday",y[y.File=31]="File",y[y.Files=32]="Files",y[y.Back=33]="Back",y[y.Close=34]="Close",y[y.Upload=35]="Upload",y[y.FileCloud=36]="FileCloud",y[y.DragFile=37]="DragFile",y[y.Cancel=38]="Cancel",y[y.CheckMark=39]="CheckMark",y[y.Radio=40]="Radio",y[y.Success=41]="Success",y[y.Fail=42]="Fail",y[y.SelectAccount=43]="SelectAccount",y[y.News=44]="News",y[y.DoubleBookmark=45]="DoubleBookmark",y[y.ChevronLeft=46]="ChevronLeft",y[y.ChevronRight=47]="ChevronRight",y[y.Event=48]="Event",y[y.BookOpen=49]="BookOpen",y[y.FileOuter=50]="FileOuter",y[y.BookQuestion=51]="BookQuestion",y[y.Globe=52]="Globe",y[y.Delete=53]="Delete",y[y.Add=54]="Add",y[y.Calendar=55]="Calendar",y[y.Planner=56]="Planner",y[y.Milestone=57]="Milestone",y[y.PersonAdd=58]="PersonAdd",y[y.PresenceAvailable=59]="PresenceAvailable",y[y.PresenceOofAvailable=60]="PresenceOofAvailable",y[y.PresenceBusy=61]="PresenceBusy",y[y.PresenceOofBusy=62]="PresenceOofBusy",y[y.PresenceDnd=63]="PresenceDnd",y[y.PresenceOofDnd=64]="PresenceOofDnd",y[y.PresenceAway=65]="PresenceAway",y[y.PresenceOofAway=66]="PresenceOofAway",y[y.PresenceOffline=67]="PresenceOffline",y[y.PresenceStatusUnknown=68]="PresenceStatusUnknown",y}(c||{});const x=(y,E)=>{switch(y){case c.ArrowDown:return s.qy`
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L2.46447 5.46447H6H9.53553L6 9Z" />
        </svg>
      `;case c.TeamSeparator:return s.qy`
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.70711 5L1.49999 9.20711L0.792886 8.50001L4.29289 5L0.792887 1.49999L1.49999 0.792885L5.70711 5Z"
            fill=${E}
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
            <path d="M1607 1213q44 0 84 16t72 48l220 220q31 31 47 71t17 85q0 44-16 84t-48 72l-14 14q-54 54-99 96t-94 70-109 44-143 15q-125 0-257-39t-262-108-256-164-237-207-206-238-162-256T38 775 0 523q0-83 14-142t43-108 70-93 96-99l16-16q31-31 71-48t85-17q44 0 84 17t72 48l220 220q31 31 47 71t17 85q0 44-15 78t-37 63-48 51-49 45-37 44-15 49q0 38 27 65l551 551q27 27 65 27 26 0 48-15t45-37 45-48 51-49 62-37 79-15zm-83 707q72 0 120-13t88-39 76-64 85-86q27-27 27-65 0-18-14-42t-38-52-51-55-56-54-51-47-37-35q-27-27-66-27-26 0-48 15t-44 37-45 48-52 49-62 37-79 15q-44 0-84-16t-72-48L570 927q-31-31-47-71t-17-85q0-44 15-78t37-63 48-51 49-46 37-44 15-48q0-39-27-66-13-13-34-36t-47-51-54-56-56-52-51-37-43-15q-38 0-65 27l-85 85q-37 37-64 76t-40 87-14 120q0 112 36 231t101 238 153 234 192 219 219 190 234 150 236 99 226 36z" fill="${E}"></path>
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
      <path fill=${E} d="M6.22176 13.9567C3.55468 13.653 2 11.8026 2 10V9.5C2 8.67157 2.67157 8 3.5 8H5.59971C5.43777 8.31679 5.30564 8.65136 5.20703 9H3.5C3.22386 9 3 9.22386 3 9.5V10C3 11.1281 3.88187 12.333 5.50235 12.7996C5.69426 13.216 5.93668 13.6043 6.22176 13.9567ZM9.62596 5.06907C9.70657 4.81036 9.75 4.53525 9.75 4.25C9.75 2.73122 8.51878 1.5 7 1.5C5.48122 1.5 4.25 2.73122 4.25 4.25C4.25 5.53662 5.13357 6.61687 6.32704 6.91706C6.64202 6.55055 7.00446 6.226 7.40482 5.95294C7.27488 5.98371 7.13934 6 7 6C6.0335 6 5.25 5.2165 5.25 4.25C5.25 3.2835 6.0335 2.5 7 2.5C7.9665 2.5 8.75 3.2835 8.75 4.25C8.75 4.73141 8.55561 5.16743 8.24104 5.48382C8.67558 5.28783 9.14016 5.14664 9.62596 5.06907ZM10.5 15C12.9853 15 15 12.9853 15 10.5C15 8.01472 12.9853 6 10.5 6C8.01472 6 6 8.01472 6 10.5C6 12.9853 8.01472 15 10.5 15ZM10.5 8C10.7761 8 11 8.22386 11 8.5V10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H11V12.5C11 12.7761 10.7761 13 10.5 13C10.2239 13 10 12.7761 10 12.5V11H8.5C8.22386 11 8 10.7761 8 10.5C8 10.2239 8.22386 10 8.5 10H10V8.5C10 8.22386 10.2239 8 10.5 8Z"/>
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
          <path d="M8.39563 0.5C8.39563 0.223858 8.17177 0 7.89563 0C7.61949 0 7.39563 0.223858 7.39563 0.5V7H0.89563C0.619487 7 0.39563 7.22386 0.39563 7.5C0.39563 7.77614 0.619487 8 0.89563 8H7.39563V14.5C7.39563 14.7761 7.61949 15 7.89563 15C8.17177 15 8.39563 14.7761 8.39563 14.5V8H14.8956C15.1718 8 15.3956 7.77614 15.3956 7.5C15.3956 7.22386 15.1718 7 14.8956 7H8.39563V0.5Z" fill="${E}"/>
        </svg>`;case c.Calendar:return s.qy`
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 11C7.55228 11 8 10.5523 8 10C8 9.44771 7.55228 9 7 9C6.44772 9 6 9.44771 6 10C6 10.5523 6.44772 11 7 11ZM8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44771 10.5523 9 10 9C9.44771 9 9 9.44771 9 10C9 10.5523 9.44771 11 10 11ZM11 13C11 13.5523 10.5523 14 10 14C9.44771 14 9 13.5523 9 13C9 12.4477 9.44771 12 10 12C10.5523 12 11 12.4477 11 13ZM13 11C13.5523 11 14 10.5523 14 10C14 9.44771 13.5523 9 13 9C12.4477 9 12 9.44771 12 10C12 10.5523 12.4477 11 13 11ZM17 5.5C17 4.11929 15.8807 3 14.5 3H5.5C4.11929 3 3 4.11929 3 5.5V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V5.5ZM4 7H16V14.5C16 15.3284 15.3284 16 14.5 16H5.5C4.67157 16 4 15.3284 4 14.5V7ZM5.5 4H14.5C15.3284 4 16 4.67157 16 5.5V6H4V5.5C4 4.67157 4.67157 4 5.5 4Z" fill=${E}/>
        </svg>
    `;case c.Planner:return s.qy`
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5Zm1.75 5.5h-15v9.25c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V8.5Zm-11.75 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm-4.25-4a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm1.5-6H6.25A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75Z" fill="${E}"/>
        </svg>`;case c.Milestone:return s.qy`
        <svg width="24" height="24" fill="${E}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.25 13c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 15.25 21H3.75A1.75 1.75 0 0 1 2 19.25v-4.5c0-.966.783-1.75 1.75-1.75h11.5ZM21 14.899v5.351a.75.75 0 0 1-1.494.102l-.006-.102v-5.338a3.006 3.006 0 0 0 1.5-.013Zm-5.75-.399H3.75a.25.25 0 0 0-.25.25v4.5c0 .138.111.25.25.25h11.5a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25Zm5-4.408a1.908 1.908 0 1 1 0 3.816 1.908 1.908 0 0 1 0-3.816ZM15.244 3c.967 0 1.75.784 1.75 1.75v4.5a1.75 1.75 0 0 1-1.75 1.75h-11.5a1.75 1.75 0 0 1-1.75-1.75v-4.5a1.75 1.75 0 0 1 1.607-1.744L3.745 3h11.5Zm0 1.5h-11.5l-.057.007a.25.25 0 0 0-.193.243v4.5c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25ZM20.25 3a.75.75 0 0 1 .743.648L21 3.75v5.351a3.004 3.004 0 0 0-1.5-.013V3.75a.75.75 0 0 1 .75-.75Z" fill="${E}"/>
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
        </svg>`}}},3173:(rt,pe,h)=>{h.d(pe,{B9:()=>se,Gp:()=>y,Sk:()=>H,aX:()=>O,ez:()=>B,h3:()=>c,jD:()=>te,jE:()=>ve,sg:()=>A,wJ:()=>T,x8:()=>W,z3:()=>V});var s=h(2404);const c=re=>{const de=new Date,G=new Date(de.getFullYear(),de.getMonth(),de.getDate());if(re>=G)return re.toLocaleString("default",{hour:"numeric",minute:"numeric"});const $=new Date(G);if($.setDate(de.getDate()-de.getDay()),re>=$)return re.toLocaleString("default",{hour:"numeric",minute:"numeric",weekday:"short"});const Z=new Date($);return Z.setDate($.getDate()-7),re.toLocaleString("default",re>=Z?{day:"numeric",month:"numeric",weekday:"short"}:{day:"numeric",month:"numeric",year:"numeric"})},y=re=>{const de=re.getMonth(),G=re.getDate();return`${E(de)} ${G}`},E=re=>{switch(re){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December";default:return"Month"}},A=(re,de)=>{let G;return function(){window.clearTimeout(G),G=window.setTimeout(()=>re.apply(this,arguments),de)}},H=re=>new Promise((de,G)=>{const $=new FileReader;$.onerror=G,$.onload=()=>{de($.result)},$.readAsDataURL(re)}),O=re=>re.startsWith("[")?re.match(/([a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi).toString():re,se=re=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(re),V=(re,de=2)=>{if(0===re)return"0 Bytes";const $=de<0?0:de,ee=Math.floor(Math.log(re)/Math.log(1024));return`${parseFloat((re/Math.pow(1024,ee)).toFixed($))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][ee]}`},B=re=>(re&&(re=re?.replace(/<ddd\/>/gi,"..."),re=re?.replace(/<c0>/gi,"<b>"),re=re?.replace(/<\/c0>/gi,"</b>")),re),T=re=>re?.replace(/\.[^/.]+$/,""),W=re=>new URL(re).pathname.split("/").pop().replace(/-/g," "),te=re=>re||s._.config.response.invalidationPeriod||s._.config.defaultInvalidationPeriod,ve=()=>s._.config.response.isEnabled&&s._.config.isEnabled},2657:(rt,pe,h)=>{h.d(pe,{yl:()=>K}),Error;var K=function(Te){return Te.ARRAYBUFFER="arraybuffer",Te.BLOB="blob",Te.DOCUMENT="document",Te.JSON="json",Te.RAW="raw",Te.STREAM="stream",Te.TEXT="text",Te}(K||{});Error},5941:(rt,pe,h)=>{h.d(pe,{I:()=>s,z:()=>c});const s="https://graph.microsoft.com",c=new Set([s,"https://graph.microsoft.us","https://dod-graph.microsoft.us","https://graph.microsoft.de","https://microsoftgraph.chinacloudapi.cn","https://canary.graph.microsoft.com"])},9451:(rt,pe,h)=>{h.d(pe,{D:()=>O,I:()=>H});var s=h(8324),c=h(9559),x=h(6885),y=h(4709),E=h(407),R=h(1212),_=function(se,V,B,T){var ve,W=arguments.length,te=W<3?V:null===T?T=Object.getOwnPropertyDescriptor(V,B):T;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)te=Reflect.decorate(se,V,B,T);else for(var re=se.length-1;re>=0;re--)(ve=se[re])&&(te=(W<3?ve(te):W>3?ve(V,B,te):ve(V,B))||te);return W>3&&te&&Object.defineProperty(V,B,te),te},b=function(se,V){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(se,V)},A=function(se,V,B,T){return new(B||(B=Promise))(function(te,ve){function re($){try{G(T.next($))}catch(Z){ve(Z)}}function de($){try{G(T.throw($))}catch(Z){ve(Z)}}function G($){$.done?te($.value):function W(te){return te instanceof B?te:new B(function(ve){ve(te)})}($.value).then(re,de)}G((T=T.apply(se,V||[])).next())})},H=function(se){return se.mobile="",se.tablet="tablet",se.desktop="desktop",se}(H||{});let O=(()=>{class se extends s.WF{static get packageVersion(){return R.i}get mediaQuery(){return this.offsetWidth<768?H.mobile:this.offsetWidth<1200?H.tablet:H.desktop}get isLoadingState(){return this._isLoadingState}get isFirstUpdated(){return this._isFirstUpdated}get strings(){return{}}constructor(){super(),this.providerState=x.HJ.Loading,this.direction="ltr",this._isLoadingState=!1,this._isFirstUpdated=!1,this.setLoadingState=B=>{this._isLoadingState!==B&&(this._isLoadingState=B,this.requestUpdate("isLoadingState"))},this.handleProviderUpdates=()=>{var B,T;this.providerState=null!==(T=null===(B=y.b.globalProvider)||void 0===B?void 0:B.state)&&void 0!==T?T:x.HJ.Loading,this.requestStateUpdate()},this.handleActiveAccountUpdates=()=>{this.clearState(),this.requestStateUpdate()},this.handleLocalizationChanged=()=>{E.w.updateStringsForTag(this.tagName,this.strings),this.requestUpdate()},this.handleDirectionChanged=()=>{this.direction=E.w.getDocumentDirection()},this.handleDirectionChanged(),this.handleLocalizationChanged()}connectedCallback(){super.connectedCallback(),E.w.onStringsUpdated(this.handleLocalizationChanged),E.w.onDirectionUpdated(this.handleDirectionChanged)}disconnectedCallback(){super.disconnectedCallback(),E.w.removeOnStringsUpdated(this.handleLocalizationChanged),E.w.removeOnDirectionUpdated(this.handleDirectionChanged),y.b.removeProviderUpdatedListener(this.handleProviderUpdates),y.b.removeActiveAccountChangedListener(this.handleActiveAccountUpdates)}firstUpdated(B){super.firstUpdated(B),this._isFirstUpdated=!0,y.b.onProviderUpdated(this.handleProviderUpdates),y.b.onActiveAccountChanged(this.handleActiveAccountUpdates),this.requestStateUpdate()}loadState(){return Promise.resolve()}clearState(){}fireCustomEvent(B,T,W=!1,te=!1,ve=!1){const re=new CustomEvent(B,{bubbles:W,cancelable:te,composed:ve,detail:T});return this.dispatchEvent(re)}updated(B){super.updated(B);const T=new CustomEvent("updated",{bubbles:!0,cancelable:!0});this.dispatchEvent(T)}requestStateUpdate(B=!1){return A(this,void 0,void 0,function*(){if(!this._isFirstUpdated)return;this.isLoadingState&&!B&&(yield this._currentLoadStatePromise);const T=y.b.globalProvider;if(!T)return Promise.resolve();if(T.state!==x.HJ.SignedOut){if(T.state===x.HJ.Loading)return Promise.resolve();{const W=new Promise((te,ve)=>A(this,void 0,void 0,function*(){try{this.setLoadingState(!0),this.fireCustomEvent("loadingInitiated"),yield this.loadState(),this.setLoadingState(!1),this.fireCustomEvent("loadingCompleted"),te()}catch(re){this.clearState(),this.setLoadingState(!1),this.fireCustomEvent("loadingFailed"),ve(re)}return this._currentLoadStatePromise=this.isLoadingState&&this._currentLoadStatePromise&&B?this._currentLoadStatePromise.then(()=>W):W}))}}else this.clearState()})}}return _([(0,c.wk)(),b("design:type",Number)],se.prototype,"providerState",void 0),_([(0,c.wk)(),b("design:type",String)],se.prototype,"direction",void 0),se})()},5260:(rt,pe,h)=>{h.d(pe,{S:()=>se});var s=h(9714),c=h(8324),x=h(9559),y=h(6885),E=h(4709),R=h(407),_=h(1212),b=h(9451),A=function(V,B,T,W){var re,te=arguments.length,ve=te<3?B:null===W?W=Object.getOwnPropertyDescriptor(B,T):W;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)ve=Reflect.decorate(V,B,T,W);else for(var de=V.length-1;de>=0;de--)(re=V[de])&&(ve=(te<3?re(ve):te>3?re(B,T,ve):re(B,T))||ve);return te>3&&ve&&Object.defineProperty(B,T,ve),ve},H=function(V,B){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(V,B)};let se=(()=>{class V extends c.WF{static get packageVersion(){return _.i}get mediaQuery(){return this.offsetWidth<768?b.I.mobile:this.offsetWidth<1200?b.I.tablet:b.I.desktop}get isFirstUpdated(){return this._isFirstUpdated}get strings(){return{}}constructor(){super(),this.providerState=y.HJ.Loading,this.direction="ltr",this._isFirstUpdated=!1,this._task=new s.YZ(this,{task:()=>this.loadState(),args:()=>this.args()}),this.renderLoading=()=>c.qy`<span>Loading...</span>`,this.renderError=T=>c.qy`<p>Error: ${T}</p>`,this.renderContent=()=>c.qy`<!-- baseTaskComponent, please implement renderContent -->`,this.handleProviderUpdates=()=>{var T,W;this.providerState=null!==(W=null===(T=E.b.globalProvider)||void 0===T?void 0:T.state)&&void 0!==W?W:y.HJ.Loading},this.handleActiveAccountUpdates=()=>{this.clearState()},this.handleLocalizationChanged=()=>{R.w.updateStringsForTag(this.tagName,this.strings),this.requestUpdate()},this.handleDirectionChanged=()=>{this.direction=R.w.getDocumentDirection()},this.handleDirectionChanged(),this.handleLocalizationChanged()}connectedCallback(){super.connectedCallback(),R.w.onStringsUpdated(this.handleLocalizationChanged),R.w.onDirectionUpdated(this.handleDirectionChanged)}disconnectedCallback(){super.disconnectedCallback(),R.w.removeOnStringsUpdated(this.handleLocalizationChanged),R.w.removeOnDirectionUpdated(this.handleDirectionChanged),E.b.removeProviderUpdatedListener(this.handleProviderUpdates),E.b.removeActiveAccountChangedListener(this.handleActiveAccountUpdates)}firstUpdated(T){super.firstUpdated(T),this._isFirstUpdated=!0,E.b.onProviderUpdated(this.handleProviderUpdates),E.b.onActiveAccountChanged(this.handleActiveAccountUpdates)}clearState(){}fireCustomEvent(T,W,te=!1,ve=!1,re=!1){const de=new CustomEvent(T,{bubbles:te,cancelable:ve,composed:re,detail:W});return this.dispatchEvent(de)}updated(T){super.updated(T),this.fireCustomEvent("updated",void 0,!0,!1)}loadState(){return function(V,B,T,W){return new(T||(T=Promise))(function(ve,re){function de(Z){try{$(W.next(Z))}catch(ee){re(ee)}}function G(Z){try{$(W.throw(Z))}catch(ee){re(ee)}}function $(Z){Z.done?ve(Z.value):function te(ve){return ve instanceof T?ve:new T(function(re){re(ve)})}(Z.value).then(de,G)}$((W=W.apply(V,B||[])).next())})}(this,void 0,void 0,function*(){return Promise.resolve()})}args(){return[this.providerState]}render(){return this._task.render({pending:this.renderLoading,complete:this.renderContent,error:this.renderError})}}return A([(0,x.wk)(),H("design:type",Number)],V.prototype,"providerState",void 0),A([(0,x.wk)(),H("design:type",String)],V.prototype,"direction",void 0),V})()},5794:(rt,pe,h)=>{h.d(pe,{U:()=>c});const c=new class s{constructor(){this._disambiguation=""}get defaultPrefix(){return"mgt"}withDisambiguation(y){return y&&!this._disambiguation&&(this._disambiguation=y.toLowerCase(),y!==this._disambiguation&&console.warn(`\u{1f992}: Disambiguation value, ${y}, should be lowercase. Value has been converted to lowercase, ${this._disambiguation}.`)),this}get prefix(){return this._disambiguation?`${this.defaultPrefix}-${this._disambiguation}`:this.defaultPrefix}get disambiguation(){return this._disambiguation}get isDisambiguated(){return!!this._disambiguation}normalize(y){return this.isDisambiguated?y.toUpperCase().replace(this.prefix.toUpperCase(),this.defaultPrefix.toUpperCase()):y}}},2578:(rt,pe,h)=>{h.d(pe,{N:()=>b});var s=h(9559),c=h(8324),x=h(1235);let y=(()=>{class A{static renderTemplate(O,se,V){var B;let T;if(se.$parentTemplateContext&&(V=Object.assign(Object.assign({},V),{$parent:se.$parentTemplateContext})),null!==(B=se.content)&&void 0!==B&&B.childNodes.length){const W=se.content.cloneNode(!0);T=this.renderNode(W,O,V)}else if(se.childNodes.length){const W=document.createElement("div");for(const te of se.childNodes)W.appendChild(this.simpleCloneNode(te));T=this.renderNode(W,O,V)}T&&O.appendChild(T)}static setBindingSyntax(O,se){this._startExpression=O,this._endExpression=se;const V=this.escapeRegex(this._startExpression),B=this.escapeRegex(this._endExpression);this._expression=new RegExp(`${V}\\s*([$\\w\\.,'"\\s()\\[\\]]+)\\s*${B}`,"g")}static get globalContext(){return this._globalContext}static get expression(){return this._expression||this.setBindingSyntax("{{","}}"),this._expression}static escapeRegex(O){return O.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}static simpleCloneNode(O){if(!O)return null;const se=O.cloneNode(!1);for(const V of O.childNodes){const B=this.simpleCloneNode(V);B&&se.appendChild(B)}return se}static expandExpressionsAsString(O,se){return O.replace(this.expression,(V,B)=>{const T=this.evalInContext(B||this.trimExpression(V),se);return T?"object"==typeof T?JSON.stringify(T):T.toString():""})}static renderNode(O,se,V){if("#text"===O.nodeName)return O.textContent=this.expandExpressionsAsString(O.textContent,V),O;if("TEMPLATE"===O.nodeName)return O.$parentTemplateContext=V,O;const B=O;if(B.attributes)for(const ve of B.attributes)if("data-props"===ve.name){const re=this.trimExpression(ve.value);for(const de of re.split(",")){const G=de.trim().split(":");if(2===G.length){const $=G[0].trim(),Z=this.evalInContext(G[1].trim(),V);$.startsWith("@")?"function"==typeof Z&&B.addEventListener($.substring(1),ee=>Z(ee,V,se)):B[$]=Z}}}else B.setAttribute(ve.name,this.expandExpressionsAsString(ve.value,V));const T=[],W=[];let te=!1;for(const ve of O.childNodes){const re=ve;let de=!1;if(re.dataset){let G=!1;re.dataset.if?this.evalBoolInContext(this.trimExpression(re.dataset.if),V)?(re.removeAttribute("data-if"),te=!0,de=!0):(W.push(re),G=!0):typeof re.dataset.else<"u"&&(te?(W.push(re),G=!0):re.removeAttribute("data-else")),re.dataset.for&&!G?T.push(re):G||this.renderNode(ve,se,V)}else this.renderNode(ve,se,V);!de&&"#text"!==ve.nodeName&&(te=!1)}for(const ve of W)B.removeChild(ve);for(const ve of T){const de=this.trimExpression(ve.dataset.for).split(/\s(in|of)\s/i);if(3===de.length){const G=de[0].trim(),$=de[2].trim(),Z=this.evalInContext($,V);if(Array.isArray(Z)){ve.removeAttribute("data-for");for(let ee=0;ee<Z.length;ee++){const z=Object.assign({$index:ee},V);z[G]=Z[ee];const le=ve.cloneNode(!0);this.renderNode(le,se,z),B.insertBefore(le,ve)}}B.removeChild(ve)}}return O}static evalBoolInContext(O,se){return se=Object.assign(Object.assign({},se),this.globalContext),new Function("with(this) { return !!("+O+")}").call(se)}static evalInContext(O,se){se=Object.assign(Object.assign({},se),this.globalContext);const V=new Function("with(this) { return "+O+";}");let B;try{B=V.call(se)}catch{}return B}static trimExpression(O){return(O=O.trim()).startsWith(this._startExpression)&&O.endsWith(this._endExpression)&&(O=(O=O.substr(this._startExpression.length,O.length-this._startExpression.length-this._endExpression.length)).trim()),O}}return A._globalContext={},A})();var E=h(5260),R=function(A,H,O,se){var T,V=arguments.length,B=V<3?H:null===se?se=Object.getOwnPropertyDescriptor(H,O):se;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)B=Reflect.decorate(A,H,O,se);else for(var W=A.length-1;W>=0;W--)(T=A[W])&&(B=(V<3?T(B):V>3?T(H,O,B):T(H,O))||B);return V>3&&B&&Object.defineProperty(H,O,B),B},_=function(A,H){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(A,H)};let b=(()=>{class A extends E.S{constructor(){super(),this.templates={},this._renderedSlots=!1,this._renderedTemplates={},this._slotNamesAddedDuringRender=[],this.renderLoading=()=>this.renderTemplate("loading",null)||c.qy``,this.renderError=O=>this.hasTemplate("error")?this.renderTemplate("error",O):c.qy`
      <div class="error">
        ${O}
      </div>
    `,this.templateContext=this.templateContext||{}}update(O){this.templates=this.getTemplates(),this._slotNamesAddedDuringRender=[],super.update(O)}updated(O){super.updated(O),this.removeUnusedSlottedElements()}renderTemplate(O,se,V){if(!this.hasTemplate(O))return null;this._slotNamesAddedDuringRender.push(V=V||O),this._renderedSlots=!0;const B=c.qy`
      <slot name=${V}></slot>
    <span
        part="end"
        ${(0,c.K)("endContainer")}
        class=${H=>A.end?"end":void 0}
    >
        <slot name="end" ${(0,c.K)("end")} @slotchange="${H=>H.handleEndContentChange()}">
            ${A.end||""}
        </slot>
    </span>
`,E=(b,A)=>s.q`
    <span
        part="start"
        ${(0,c.K)("startContainer")}
        class="${H=>A.start?"start":void 0}"
    >
        <slot
            name="start"
            ${(0,c.K)("start")}
            @slotchange="${H=>H.handleStartContentChange()}"
        >
            ${A.start||""}
        </slot>
    </span>
`,R=s.q`
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
`},862:(rt,pe,h)=>{h.d(pe,{z:()=>E});var s=h(742),c=h(9808),x=h(4192),y=h(4632);let E=(()=>{class R extends y.g{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const b="number"==typeof this.min?this.min:0,O=("number"==typeof this.max?this.max:100)-b;this.percentComplete=0===O?0:Math.fround((("number"==typeof this.value?this.value:0)-b)/O*100)}}return(0,s.Cg)([(0,c.CF)({converter:c.R$})],R.prototype,"value",void 0),(0,s.Cg)([(0,c.CF)({converter:c.R$})],R.prototype,"min",void 0),(0,s.Cg)([(0,c.CF)({converter:c.R$})],R.prototype,"max",void 0),(0,s.Cg)([(0,c.CF)({mode:"boolean"})],R.prototype,"paused",void 0),(0,s.Cg)([x.sH],R.prototype,"percentComplete",void 0),R})()},6105:(rt,pe,h)=>{h.d(pe,{X:()=>c});var s=h(9808);function c(x,...y){const E=s.$u.locate(x);y.forEach(R=>{Object.getOwnPropertyNames(R.prototype).forEach(b=>{"constructor"!==b&&Object.defineProperty(x.prototype,b,Object.getOwnPropertyDescriptor(R.prototype,b))}),s.$u.locate(R).forEach(b=>E.push(b))})}},4645:(rt,pe,h)=>{function s(c){const x=c.parentElement;if(x)return x;{const y=c.getRootNode();if(y.host instanceof HTMLElement)return y.host}return null}h.d(pe,{Z:()=>s})},4954:(rt,pe,h)=>{h.d(pe,{mr:()=>x});class s{constructor(_){this.listenerCache=new WeakMap,this.query=_}bind(_){const{query:b}=this,A=this.constructListener(_);A.bind(b)(),b.addListener(A),this.listenerCache.set(_,A)}unbind(_){const b=this.listenerCache.get(_);b&&(this.query.removeListener(b),this.listenerCache.delete(_))}}class c extends s{constructor(_,b){super(_),this.styles=b}static with(_){return b=>new c(_,b)}constructListener(_){let b=!1;const A=this.styles;return function(){const{matches:O}=this;O&&!b?(_.$fastController.addStyles(A),b=O):!O&&b&&(_.$fastController.removeStyles(A),b=O)}}unbind(_){super.unbind(_),_.$fastController.removeStyles(this.styles)}}const x=c.with(window.matchMedia("(forced-colors)"));c.with(window.matchMedia("(prefers-color-scheme: dark)")),c.with(window.matchMedia("(prefers-color-scheme: light)"))},5778:(rt,pe,h)=>{h.d(pe,{Z:()=>s});const s="not-allowed"},8322:(rt,pe,h)=>{h.d(pe,{V:()=>c});const s=":host([hidden]){display:none}";function c(x){return`${s}:host{display:${x}}`}},4932:(rt,pe,h)=>{h.d(pe,{N:()=>c});const c=(0,h(9482).UA)()?"focus-visible":"focus"},7412:(rt,pe,h)=>{function s(c,x,y){return c.nodeType!==Node.TEXT_NODE||"string"==typeof c.nodeValue&&!!c.nodeValue.trim().length}h.d(pe,{g:()=>s})},9482:(rt,pe,h)=>{function c(...V){return V.every(B=>B instanceof HTMLElement)}function x(V,B){return V&&B&&c(V)?Array.from(V.querySelectorAll(B)).filter(W=>null!==W.offsetParent):void 0}let R;function _(){if("boolean"==typeof R)return R;if(!function s(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}())return R=!1,R;const V=document.createElement("style"),B=function E(){const V=document.querySelector('meta[property="csp-nonce"]');return V?V.getAttribute("content"):null}();null!==B&&V.setAttribute("nonce",B),document.head.appendChild(V);try{V.sheet.insertRule("foo:focus-visible {color:inherit}",0),R=!0}catch{R=!1}finally{document.head.removeChild(V)}return R}h.d(pe,{UA:()=>_,JL:()=>x,sb:()=>c})},7153:(rt,pe,h)=>{h.d(pe,{Ac:()=>ft,F9:()=>Ci,FM:()=>Zi,HX:()=>Fn,I5:()=>en,Is:()=>ii,J9:()=>qt,Mm:()=>Nn,Tg:()=>nr,bb:()=>Fi,f_:()=>Et,gG:()=>pt,kT:()=>Pn,oK:()=>qe});const Fn="ArrowDown",Pn="ArrowLeft",Fi="ArrowRight",en="ArrowUp",Nn="Enter",Ci="Escape",nr="Home",Zi="End",ft="F2",Et="PageDown",qe="PageUp",pt=" ",qt="Tab",ii={ArrowDown:Fn,ArrowLeft:Pn,ArrowRight:Fi,ArrowUp:en}},9748:(rt,pe,h)=>{h.d(pe,{O:()=>s});var s=function(c){return c.ltr="ltr",c.rtl="rtl",c}(s||{})},7947:(rt,pe,h)=>{function c(y,E,R){return Math.min(Math.max(R,y),E)}function x(y,E,R=0){return[E,R]=[E,R].sort((_,b)=>_-b),E<=y&&y<R}h.d(pe,{AB:()=>c,r4:()=>x})},175:(rt,pe,h)=>{h.d(pe,{NF:()=>c});let s=0;function c(b=""){return`${b}${s++}`}},3226:(rt,pe,h)=>{h.d(pe,{A:()=>s});var s=function(c){return c.Canvas="Canvas",c.CanvasText="CanvasText",c.LinkText="LinkText",c.VisitedText="VisitedText",c.ActiveText="ActiveText",c.ButtonFace="ButtonFace",c.ButtonText="ButtonText",c.Field="Field",c.FieldText="FieldText",c.Highlight="Highlight",c.HighlightText="HighlightText",c.GrayText="GrayText",c}(s||{})},8971:(rt,pe,h)=>{h.d(pe,{OA:()=>s,WL:()=>x,u$:()=>c});const s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},c=y=>(...E)=>({_$litDirective$:y,values:E});class x{constructor(E){}get _$AU(){return this._$AM._$AU}_$AT(E,R,_){this._$Ct=E,this._$AM=R,this._$Ci=_}_$AS(E,R){return this.update(E,R)}update(E,R){return this.render(...R)}}},9009:(rt,pe,h)=>{h.d(pe,{XX:()=>Tt,c0:()=>ee,ge:()=>tt,qy:()=>$,s6:()=>z});const s=globalThis,c=s.trustedTypes,x=c?c.createPolicy("lit-html",{createHTML:ct=>ct}):void 0,y="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,R="?"+E,_=`<${R}>`,b=document,A=()=>b.createComment(""),H=ct=>null===ct||"object"!=typeof ct&&"function"!=typeof ct,O=Array.isArray,se=ct=>O(ct)||"function"==typeof ct?.[Symbol.iterator],V="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,W=/>/g,te=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ve=/'/g,re=/"/g,de=/^(?:script|style|textarea|title)$/i,G=ct=>(Te,...ie)=>({_$litType$:ct,strings:Te,values:ie}),$=G(1),ee=(G(2),Symbol.for("lit-noChange")),z=Symbol.for("lit-nothing"),le=new WeakMap,K=b.createTreeWalker(b,129);function L(ct,Te){if(!Array.isArray(ct)||!ct.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(Te):Te}const P=(ct,Te)=>{const ie=ct.length-1,ue=[];let _e,Ke=2===Te?"<svg>":"",we=B;for(let Fe=0;Fe<ie;Fe++){const at=ct[Fe];let Nt,Ge,fe=-1,j=0;for(;j<at.length&&(we.lastIndex=j,Ge=we.exec(at),null!==Ge);)j=we.lastIndex,we===B?"!--"===Ge[1]?we=T:void 0!==Ge[1]?we=W:void 0!==Ge[2]?(de.test(Ge[2])&&(_e=RegExp("</"+Ge[2],"g")),we=te):void 0!==Ge[3]&&(we=te):we===te?">"===Ge[0]?(we=_e??B,fe=-1):void 0===Ge[1]?fe=-2:(fe=we.lastIndex-Ge[2].length,Nt=Ge[1],we=void 0===Ge[3]?te:'"'===Ge[3]?re:ve):we===re||we===ve?we=te:we===T||we===W?we=B:(we=te,_e=void 0);const ce=we===te&&ct[Fe+1].startsWith("/>")?" ":"";Ke+=we===B?at+_:fe>=0?(ue.push(Nt),at.slice(0,fe)+y+at.slice(fe)+E+ce):at+E+(-2===fe?Fe:ce)}return[L(ct,Ke+(ct[ie]||"<?>")+(2===Te?"</svg>":"")),ue]};class J{constructor({strings:Te,_$litType$:ie},ue){let _e;this.parts=[];let Ke=0,we=0;const Fe=Te.length-1,at=this.parts,[Nt,Ge]=P(Te,ie);if(this.el=J.createElement(Nt,ue),K.currentNode=this.el.content,2===ie){const fe=this.el.content.firstChild;fe.replaceWith(...fe.childNodes)}for(;null!==(_e=K.nextNode())&&at.length<Fe;){if(1===_e.nodeType){if(_e.hasAttributes())for(const fe of _e.getAttributeNames())if(fe.endsWith(y)){const j=Ge[we++],ce=_e.getAttribute(fe).split(E),xe=/([.?@])?(.*)/.exec(j);at.push({type:1,index:Ke,name:xe[2],strings:ce,ctor:"."===xe[1]?nt:"?"===xe[1]?Pe:"@"===xe[1]?oe:Le}),_e.removeAttribute(fe)}else fe.startsWith(E)&&(at.push({type:6,index:Ke}),_e.removeAttribute(fe));if(de.test(_e.tagName)){const fe=_e.textContent.split(E),j=fe.length-1;if(j>0){_e.textContent=c?c.emptyScript:"";for(let ce=0;ce<j;ce++)_e.append(fe[ce],A()),K.nextNode(),at.push({type:2,index:++Ke});_e.append(fe[j],A())}}}else if(8===_e.nodeType)if(_e.data===R)at.push({type:2,index:Ke});else{let fe=-1;for(;-1!==(fe=_e.data.indexOf(E,fe+1));)at.push({type:7,index:Ke}),fe+=E.length-1}Ke++}}static createElement(Te,ie){const ue=b.createElement("template");return ue.innerHTML=Te,ue}}function X(ct,Te,ie=ct,ue){if(Te===ee)return Te;let _e=void 0!==ue?ie._$Co?.[ue]:ie._$Cl;const Ke=H(Te)?void 0:Te._$litDirective$;return _e?.constructor!==Ke&&(_e?._$AO?.(!1),void 0===Ke?_e=void 0:(_e=new Ke(ct),_e._$AT(ct,ie,ue)),void 0!==ue?(ie._$Co??=[])[ue]=_e:ie._$Cl=_e),void 0!==_e&&(Te=X(ct,_e._$AS(ct,Te.values),_e,ue)),Te}class ge{constructor(Te,ie){this._$AV=[],this._$AN=void 0,this._$AD=Te,this._$AM=ie}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(Te){const{el:{content:ie},parts:ue}=this._$AD,_e=(Te?.creationScope??b).importNode(ie,!0);K.currentNode=_e;let Ke=K.nextNode(),we=0,Fe=0,at=ue[0];for(;void 0!==at;){if(we===at.index){let Nt;2===at.type?Nt=new Be(Ke,Ke.nextSibling,this,Te):1===at.type?Nt=new at.ctor(Ke,at.name,at.strings,this,Te):6===at.type&&(Nt=new Qe(Ke,this,Te)),this._$AV.push(Nt),at=ue[++Fe]}we!==at?.index&&(Ke=K.nextNode(),we++)}return K.currentNode=b,_e}p(Te){let ie=0;for(const ue of this._$AV)void 0!==ue&&(void 0!==ue.strings?(ue._$AI(Te,ue,ie),ie+=ue.strings.length-2):ue._$AI(Te[ie])),ie++}}class Be{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(Te,ie,ue,_e){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=Te,this._$AB=ie,this._$AM=ue,this.options=_e,this._$Cv=_e?.isConnected??!0}get parentNode(){let Te=this._$AA.parentNode;const ie=this._$AM;return void 0!==ie&&11===Te?.nodeType&&(Te=ie.parentNode),Te}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(Te,ie=this){Te=X(this,Te,ie),H(Te)?Te===z||null==Te||""===Te?(this._$AH!==z&&this._$AR(),this._$AH=z):Te!==this._$AH&&Te!==ee&&this._(Te):void 0!==Te._$litType$?this.$(Te):void 0!==Te.nodeType?this.T(Te):se(Te)?this.k(Te):this._(Te)}S(Te){return this._$AA.parentNode.insertBefore(Te,this._$AB)}T(Te){this._$AH!==Te&&(this._$AR(),this._$AH=this.S(Te))}_(Te){this._$AH!==z&&H(this._$AH)?this._$AA.nextSibling.data=Te:this.T(b.createTextNode(Te)),this._$AH=Te}$(Te){const{values:ie,_$litType$:ue}=Te,_e="number"==typeof ue?this._$AC(Te):(void 0===ue.el&&(ue.el=J.createElement(L(ue.h,ue.h[0]),this.options)),ue);if(this._$AH?._$AD===_e)this._$AH.p(ie);else{const Ke=new ge(_e,this),we=Ke.u(this.options);Ke.p(ie),this.T(we),this._$AH=Ke}}_$AC(Te){let ie=le.get(Te.strings);return void 0===ie&&le.set(Te.strings,ie=new J(Te)),ie}k(Te){O(this._$AH)||(this._$AH=[],this._$AR());const ie=this._$AH;let ue,_e=0;for(const Ke of Te)_e===ie.length?ie.push(ue=new Be(this.S(A()),this.S(A()),this,this.options)):ue=ie[_e],ue._$AI(Ke),_e++;_e<ie.length&&(this._$AR(ue&&ue._$AB.nextSibling,_e),ie.length=_e)}_$AR(Te=this._$AA.nextSibling,ie){for(this._$AP?.(!1,!0,ie);Te&&Te!==this._$AB;){const ue=Te.nextSibling;Te.remove(),Te=ue}}setConnected(Te){void 0===this._$AM&&(this._$Cv=Te,this._$AP?.(Te))}}class Le{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(Te,ie,ue,_e,Ke){this.type=1,this._$AH=z,this._$AN=void 0,this.element=Te,this.name=ie,this._$AM=_e,this.options=Ke,ue.length>2||""!==ue[0]||""!==ue[1]?(this._$AH=Array(ue.length-1).fill(new String),this.strings=ue):this._$AH=z}_$AI(Te,ie=this,ue,_e){const Ke=this.strings;let we=!1;if(void 0===Ke)Te=X(this,Te,ie,0),we=!H(Te)||Te!==this._$AH&&Te!==ee,we&&(this._$AH=Te);else{const Fe=Te;let at,Nt;for(Te=Ke[0],at=0;at<Ke.length-1;at++)Nt=X(this,Fe[ue+at],ie,at),Nt===ee&&(Nt=this._$AH[at]),we||=!H(Nt)||Nt!==this._$AH[at],Nt===z?Te=z:Te!==z&&(Te+=(Nt??"")+Ke[at+1]),this._$AH[at]=Nt}we&&!_e&&this.j(Te)}j(Te){Te===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,Te??"")}}class nt extends Le{constructor(){super(...arguments),this.type=3}j(Te){this.element[this.name]=Te===z?void 0:Te}}class Pe extends Le{constructor(){super(...arguments),this.type=4}j(Te){this.element.toggleAttribute(this.name,!!Te&&Te!==z)}}class oe extends Le{constructor(Te,ie,ue,_e,Ke){super(Te,ie,ue,_e,Ke),this.type=5}_$AI(Te,ie=this){if((Te=X(this,Te,ie,0)??z)===ee)return;const ue=this._$AH,_e=Te===z&&ue!==z||Te.capture!==ue.capture||Te.once!==ue.once||Te.passive!==ue.passive,Ke=Te!==z&&(ue===z||_e);_e&&this.element.removeEventListener(this.name,this,ue),Ke&&this.element.addEventListener(this.name,this,Te),this._$AH=Te}handleEvent(Te){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,Te):this._$AH.handleEvent(Te)}}class Qe{constructor(Te,ie,ue){this.element=Te,this.type=6,this._$AN=void 0,this._$AM=ie,this.options=ue}get _$AU(){return this._$AM._$AU}_$AI(Te){X(this,Te)}}const tt={P:y,A:E,C:R,M:1,L:P,R:ge,D:se,V:X,I:Be,H:Le,N:Pe,U:oe,B:nt,F:Qe},mt=s.litHtmlPolyfillSupport;mt?.(J,Be),(s.litHtmlVersions??=[]).push("3.1.2");const Tt=(ct,Te,ie)=>{const ue=ie?.renderBefore??Te;let _e=ue._$litPart$;if(void 0===_e){const Ke=ie?.renderBefore??null;ue._$litPart$=_e=new Be(Te.insertBefore(A(),Ke),Ke,void 0,ie??{})}return _e._$AI(ct),_e}},9559:(rt,pe,h)=>{h.d(pe,{MZ:()=>y,wk:()=>E});var s=h(6693);const c={attribute:!0,type:String,converter:s.W3,reflect:!1,hasChanged:s.Ec},x=(R=c,_,b)=>{const{kind:A,metadata:H}=b;let O=globalThis.litPropertyMetadata.get(H);if(void 0===O&&globalThis.litPropertyMetadata.set(H,O=new Map),O.set(b.name,R),"accessor"===A){const{name:se}=b;return{set(V){const B=_.get.call(this);_.set.call(this,V),this.requestUpdate(se,B,R)},init(V){return void 0!==V&&this.P(se,void 0,R),V}}}if("setter"===A){const{name:se}=b;return function(V){const B=this[se];_.call(this,V),this.requestUpdate(se,B,R)}}throw Error("Unsupported decorator location: "+A)};function y(R){return(_,b)=>"object"==typeof b?x(R,_,b):((A,H,O)=>{const se=H.hasOwnProperty(O);return H.constructor.createProperty(O,se?{...A,wrapped:!0}:A),se?Object.getOwnPropertyDescriptor(H,O):void 0})(R,_,b)}function E(R){return y({...R,state:!0,attribute:!1})}},3402:(rt,pe,h)=>{h.d(pe,{H:()=>x});var s=h(9009),c=h(8971);const x=(0,c.u$)(class extends c.WL{constructor(y){if(super(y),y.type!==c.OA.ATTRIBUTE||"class"!==y.name||y.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(y){return" "+Object.keys(y).filter(E=>y[E]).join(" ")+" "}update(y,[E]){if(void 0===this.st){this.st=new Set,void 0!==y.strings&&(this.nt=new Set(y.strings.join(" ").split(/\s/).filter(_=>""!==_)));for(const _ in E)E[_]&&!this.nt?.has(_)&&this.st.add(_);return this.render(E)}const R=y.element.classList;for(const _ of this.st)_ in E||(R.remove(_),this.st.delete(_));for(const _ in E){const b=!!E[_];b===this.st.has(_)||this.nt?.has(_)||(b?(R.add(_),this.st.add(_)):(R.remove(_),this.st.delete(_)))}return s.c0}})},6271:(rt,pe,h)=>{h.d(pe,{J:()=>c});var s=h(9009);const c=x=>x??s.s6},4229:(rt,pe,h)=>{h.d(pe,{u:()=>de});var s=h(9009),c=h(8971);const{I:x}=s.ge,O=()=>document.createComment(""),se=(G,$,Z)=>{const ee=G._$AA.parentNode,z=void 0===$?G._$AB:$._$AA;if(void 0===Z){const le=ee.insertBefore(O(),z),K=ee.insertBefore(O(),z);Z=new x(le,K,G,G.options)}else{const le=Z._$AB.nextSibling,K=Z._$AM,L=K!==G;if(L){let P;Z._$AQ?.(G),Z._$AM=G,void 0!==Z._$AP&&(P=G._$AU)!==K._$AU&&Z._$AP(P)}if(le!==z||L){let P=Z._$AA;for(;P!==le;){const J=P.nextSibling;ee.insertBefore(P,z),P=J}}}return Z},V=(G,$,Z=G)=>(G._$AI($,Z),G),B={},te=G=>{G._$AP?.(!1,!0);let $=G._$AA;const Z=G._$AB.nextSibling;for(;$!==Z;){const ee=$.nextSibling;$.remove(),$=ee}},re=(G,$,Z)=>{const ee=new Map;for(let z=$;z<=Z;z++)ee.set(G[z],z);return ee},de=(0,c.u$)(class extends c.WL{constructor(G){if(super(G),G.type!==c.OA.CHILD)throw Error("repeat() can only be used in text expressions")}dt(G,$,Z){let ee;void 0===Z?Z=$:void 0!==$&&(ee=$);const z=[],le=[];let K=0;for(const L of G)z[K]=ee?ee(L,K):K,le[K]=Z(L,K),K++;return{values:le,keys:z}}render(G,$,Z){return this.dt(G,$,Z).values}update(G,[$,Z,ee]){const z=(G=>G._$AH)(G),{values:le,keys:K}=this.dt($,Z,ee);if(!Array.isArray(z))return this.ut=K,le;const L=this.ut??=[],P=[];let J,X,ge=0,Be=z.length-1,Le=0,nt=le.length-1;for(;ge<=Be&&Le<=nt;)if(null===z[ge])ge++;else if(null===z[Be])Be--;else if(L[ge]===K[Le])P[Le]=V(z[ge],le[Le]),ge++,Le++;else if(L[Be]===K[nt])P[nt]=V(z[Be],le[nt]),Be--,nt--;else if(L[ge]===K[nt])P[nt]=V(z[ge],le[nt]),se(G,P[nt+1],z[ge]),ge++,nt--;else if(L[Be]===K[Le])P[Le]=V(z[Be],le[Le]),se(G,z[ge],z[Be]),Be--,Le++;else if(void 0===J&&(J=re(K,Le,nt),X=re(L,ge,Be)),J.has(L[ge]))if(J.has(L[Be])){const Pe=X.get(K[Le]),oe=void 0!==Pe?z[Pe]:null;if(null===oe){const Qe=se(G,z[ge]);V(Qe,le[Le]),P[Le]=Qe}else P[Le]=V(oe,le[Le]),se(G,z[ge],oe),z[Pe]=null;Le++}else te(z[Be]),Be--;else te(z[ge]),ge++;for(;Le<=nt;){const Pe=se(G,P[nt+1]);V(Pe,le[Le]),P[Le++]=Pe}for(;ge<=Be;){const Pe=z[ge++];null!==Pe&&te(Pe)}return this.ut=K,((G,$=B)=>{G._$AH=$})(G,P),s.c0}})},8324:(rt,pe,h)=>{h.d(pe,{WF:()=>x,AH:()=>s.AH,qy:()=>c.qy,s6:()=>c.s6});var s=h(6693),c=h(9009);class x extends s.mN{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const _=super.createRenderRoot();return this.renderOptions.renderBefore??=_.firstChild,_}update(_){const b=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(_),this._$Do=(0,c.XX)(b,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return c.c0}}x._$litElement$=!0,x.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:x});const y=globalThis.litElementPolyfillSupport;y?.({LitElement:x}),(globalThis.litElementVersions??=[]).push("4.0.4")},2341:(rt,pe,h)=>{h.d(pe,{f6:()=>oe,Ov:()=>Te,$R:()=>Be});var s=h(4438),c=h(4412),x=h(7673),y=h(2806),E=h(7786),R=h(7468),_=h(6354),b=h(5558),A=h(9437),H=h(6365),O=h(1594),se=h(1397),V=h(9974),B=h(4360),W=h(5245),te=h(6697),ve=h(8141),re=h(803);let G=(()=>{class _e{constructor(){this.strategiesSource=new c.t({}),this.strategies$=this.strategiesSource.asObservable()}static#e=this.\u0275fac=function(Fe){return new(Fe||_e)};static#t=this.\u0275prov=s.jDH({token:_e,factory:_e.\u0275fac})}return _e})();const $=new s.nKC("USE_CONFIGURATION_STORE");let Z=(()=>{class _e{constructor(we=!1,Fe){this.isolate=we,this.configurationStore=Fe,this.strategiesSource=this.isolate?new c.t({}):this.configurationStore.strategiesSource,this.strategies$=this.strategiesSource.asObservable(),this.onAuthorisedDefaultStrategy=this.isolate?void 0:this.configurationStore.onAuthorisedDefaultStrategy,this.onUnAuthorisedDefaultStrategy=this.isolate?void 0:this.configurationStore.onUnAuthorisedDefaultStrategy}setDefaultOnAuthorizedStrategy(we){this.isolate?this.onAuthorisedDefaultStrategy=this.getDefinedStrategy(we):(this.configurationStore.onAuthorisedDefaultStrategy=this.getDefinedStrategy(we),this.onAuthorisedDefaultStrategy=this.configurationStore.onAuthorisedDefaultStrategy)}setDefaultOnUnauthorizedStrategy(we){this.isolate?this.onUnAuthorisedDefaultStrategy=this.getDefinedStrategy(we):(this.configurationStore.onUnAuthorisedDefaultStrategy=this.getDefinedStrategy(we),this.onUnAuthorisedDefaultStrategy=this.configurationStore.onUnAuthorisedDefaultStrategy)}addPermissionStrategy(we,Fe){this.strategiesSource.value[we]=Fe}getStrategy(we){return this.strategiesSource.value[we]}getAllStrategies(){return this.strategiesSource.value}getDefinedStrategy(we){if(this.strategiesSource.value[we]||this.isPredefinedStrategy(we))return we;throw new Error(`No ' ${we} ' strategy is found please define one`)}isPredefinedStrategy(we){return"show"===we||"remove"===we}static#e=this.\u0275fac=function(Fe){return new(Fe||_e)(s.KVO($),s.KVO(G))};static#t=this.\u0275prov=s.jDH({token:_e,factory:_e.\u0275fac})}return _e})();function ee(_e){return"function"==typeof _e}function z(_e){if("[object Object]"!==Object.prototype.toString.call(_e))return!1;{const Ke=Object.getPrototypeOf(_e);return null===Ke||Ke===Object.prototype}}function le(_e){return!!_e&&"string"==typeof _e}function K(_e){return"boolean"==typeof _e}function P(_e){return Array.isArray(_e)?_e.length>0:!!_e}function J(_e){return le(_e)?[_e]:_e}let X=(()=>{class _e{constructor(){this.permissionsSource=new c.t({}),this.permissions$=this.permissionsSource.asObservable()}static#e=this.\u0275fac=function(Fe){return new(Fe||_e)};static#t=this.\u0275prov=s.jDH({token:_e,factory:_e.\u0275fac})}return _e})();const ge=new s.nKC("USE_PERMISSIONS_STORE");let Be=(()=>{class _e{constructor(we=!1,Fe){this.isolate=we,this.permissionsStore=Fe,this.permissionsSource=this.isolate?new c.t({}):this.permissionsStore.permissionsSource,this.permissions$=this.permissionsSource.asObservable()}flushPermissions(){this.permissionsSource.next({})}hasPermission(we){return!we||Array.isArray(we)&&0===we.length?Promise.resolve(!0):(we=J(we),this.hasArrayPermission(we))}loadPermissions(we,Fe){const at=we.reduce((Nt,Ge)=>this.reducePermission(Nt,Ge,Fe),{});this.permissionsSource.next(at)}addPermission(we,Fe){if(Array.isArray(we)){const at=we.reduce((Nt,Ge)=>this.reducePermission(Nt,Ge,Fe),this.permissionsSource.value);this.permissionsSource.next(at)}else{const at=this.reducePermission(this.permissionsSource.value,we,Fe);this.permissionsSource.next(at)}}removePermission(we){const Fe={...this.permissionsSource.value};delete Fe[we],this.permissionsSource.next(Fe)}getPermission(we){return this.permissionsSource.value[we]}getPermissions(){return this.permissionsSource.value}reducePermission(we,Fe,at){return at&&ee(at)?{...we,[Fe]:{name:Fe,validationFunction:at}}:{...we,[Fe]:{name:Fe}}}hasArrayPermission(we){const Fe=we.map(at=>{if(this.hasPermissionValidationFunction(at)){const Nt=this.permissionsSource.value[at].validationFunction,Ge={...this.permissionsSource.value};return(0,x.of)(null).pipe((0,_.T)(()=>Nt(at,Ge)),(0,b.n)(fe=>K(fe)?(0,x.of)(fe):fe),(0,A.W)(()=>(0,x.of)(!1)))}return(0,x.of)(!!this.permissionsSource.value[at])});return(0,y.H)(Fe).pipe((0,H.U)(),(0,O.$)(at=>!1!==at,!1),(0,_.T)(at=>!1!==at)).toPromise().then(at=>at)}hasPermissionValidationFunction(we){return!!this.permissionsSource.value[we]&&!!this.permissionsSource.value[we].validationFunction&&ee(this.permissionsSource.value[we].validationFunction)}static#e=this.\u0275fac=function(Fe){return new(Fe||_e)(s.KVO(ge),s.KVO(X))};static#t=this.\u0275prov=s.jDH({token:_e,factory:_e.\u0275fac})}return _e})();class Le{constructor(){this.rolesSource=new c.t({}),this.roles$=this.rolesSource.asObservable()}}const nt=new s.nKC("USE_ROLES_STORE");let Pe=(()=>{class _e{constructor(we=!1,Fe,at){this.isolate=we,this.rolesStore=Fe,this.permissionsService=at,this.rolesSource=this.isolate?new c.t({}):this.rolesStore.rolesSource,this.roles$=this.rolesSource.asObservable()}addRole(we,Fe){const at={...this.rolesSource.value,[we]:{name:we,validationFunction:Fe}};this.rolesSource.next(at)}addRoleWithPermissions(we,Fe){this.permissionsService.addPermission(Fe),this.addRole(we,Fe)}addRoles(we){Object.keys(we).forEach((Fe,at)=>{this.addRole(Fe,we[Fe])})}addRolesWithPermissions(we){Object.keys(we).forEach((Fe,at)=>{this.addRoleWithPermissions(Fe,we[Fe])})}flushRoles(){this.rolesSource.next({})}flushRolesAndPermissions(){this.flushRoles(),this.permissionsService.flushPermissions()}removeRole(we){const Fe={...this.rolesSource.value};delete Fe[we],this.rolesSource.next(Fe)}getRoles(){return this.rolesSource.value}getRole(we){return this.rolesSource.value[we]}hasOnlyRoles(we){return!we||Array.isArray(we)&&0===we.length?Promise.resolve(!0):(we=J(we),Promise.all([this.hasRoleKey(we),this.hasRolePermission(this.rolesSource.value,we)]).then(([at,Nt])=>at||Nt))}hasRoleKey(we){const Fe=we.map(at=>{if(this.rolesSource.value[at]&&this.rolesSource.value[at].validationFunction&&ee(this.rolesSource.value[at].validationFunction)&&!function L(_e){return"[object Promise]"===Object.prototype.toString.call(_e)}(this.rolesSource.value[at].validationFunction)){const Ge=this.rolesSource.value[at].validationFunction,fe={...this.rolesSource.value};return(0,x.of)(null).pipe((0,_.T)(()=>Ge(at,fe)),(0,b.n)(j=>K(j)?(0,x.of)(j):j),(0,A.W)(()=>(0,x.of)(!1)))}return(0,x.of)(!1)});return(0,y.H)(Fe).pipe((0,H.U)(),(0,O.$)(at=>!1!==at,!1),(0,_.T)(at=>!1!==at)).toPromise().then(at=>at)}hasRolePermission(we,Fe){return(0,y.H)(Fe).pipe((0,se.Z)(at=>we[at]&&Array.isArray(we[at].validationFunction)?(0,y.H)(we[at].validationFunction).pipe((0,se.Z)(Nt=>this.permissionsService.hasPermission(Nt)),function T(_e,Ke){return(0,V.N)((we,Fe)=>{let at=0;we.subscribe((0,B._)(Fe,Nt=>{_e.call(Ke,Nt,at++,we)||(Fe.next(!1),Fe.complete())},()=>{Fe.next(!0),Fe.complete()}))})}(Nt=>!0===Nt)):(0,x.of)(!1)),(0,O.$)(at=>!0===at,!1)).toPromise()}static#e=this.\u0275fac=function(Fe){return new(Fe||_e)(s.KVO(nt),s.KVO(Le),s.KVO(Be))};static#t=this.\u0275prov=s.jDH({token:_e,factory:_e.\u0275fac})}return _e})(),oe=(()=>{class _e{constructor(){this.permissionsAuthorized=new s.bkB,this.permissionsUnauthorized=new s.bkB,this.firstMergeUnusedRun=1,this.permissionsService=(0,s.WQX)(Be),this.configurationService=(0,s.WQX)(Z),this.rolesService=(0,s.WQX)(Pe),this.viewContainer=(0,s.WQX)(s.c1b),this.changeDetector=(0,s.WQX)(s.gRc),this.templateRef=(0,s.WQX)(s.C4Q)}ngOnInit(){this.viewContainer.clear(),this.initPermissionSubscription=this.validateExceptOnlyPermissions()}ngOnChanges(we){const Fe=we.ngxPermissionsOnly,at=we.ngxPermissionsExcept;if(Fe||at){if(Fe&&Fe.firstChange||at&&at.firstChange)return;(0,E.h)(this.permissionsService.permissions$,this.rolesService.roles$).pipe((0,W.i)(this.firstMergeUnusedRun),(0,te.s)(1)).subscribe(()=>{P(this.ngxPermissionsExcept)?this.validateExceptAndOnlyPermissions():P(this.ngxPermissionsOnly)?this.validateOnlyPermissions():this.handleAuthorisedPermission(this.getAuthorisedTemplates())})}}ngOnDestroy(){this.initPermissionSubscription&&this.initPermissionSubscription.unsubscribe()}validateExceptOnlyPermissions(){return(0,E.h)(this.permissionsService.permissions$,this.rolesService.roles$).pipe((0,W.i)(this.firstMergeUnusedRun)).subscribe(()=>{P(this.ngxPermissionsExcept)?this.validateExceptAndOnlyPermissions():P(this.ngxPermissionsOnly)?this.validateOnlyPermissions():this.handleAuthorisedPermission(this.getAuthorisedTemplates())})}validateExceptAndOnlyPermissions(){Promise.all([this.permissionsService.hasPermission(this.ngxPermissionsExcept),this.rolesService.hasOnlyRoles(this.ngxPermissionsExcept)]).then(([we,Fe])=>{if(we||Fe)this.handleUnauthorisedPermission(this.ngxPermissionsExceptElse||this.ngxPermissionsElse);else{if(this.ngxPermissionsOnly)throw!1;this.handleAuthorisedPermission(this.ngxPermissionsExceptThen||this.ngxPermissionsThen||this.templateRef)}}).catch(()=>{this.ngxPermissionsOnly?this.validateOnlyPermissions():this.handleAuthorisedPermission(this.ngxPermissionsExceptThen||this.ngxPermissionsThen||this.templateRef)})}validateOnlyPermissions(){Promise.all([this.permissionsService.hasPermission(this.ngxPermissionsOnly),this.rolesService.hasOnlyRoles(this.ngxPermissionsOnly)]).then(([we,Fe])=>{we||Fe?this.handleAuthorisedPermission(this.ngxPermissionsOnlyThen||this.ngxPermissionsThen||this.templateRef):this.handleUnauthorisedPermission(this.ngxPermissionsOnlyElse||this.ngxPermissionsElse)}).catch(()=>{this.handleUnauthorisedPermission(this.ngxPermissionsOnlyElse||this.ngxPermissionsElse)})}handleUnauthorisedPermission(we){if(!K(this.currentAuthorizedState)||this.currentAuthorizedState){if(this.currentAuthorizedState=!1,this.permissionsUnauthorized.emit(),this.getUnAuthorizedStrategyInput())return void this.applyStrategyAccordingToStrategyType(this.getUnAuthorizedStrategyInput());this.configurationService.onUnAuthorisedDefaultStrategy&&!this.elseBlockDefined()?this.applyStrategy(this.configurationService.onUnAuthorisedDefaultStrategy):this.showTemplateBlockInView(we)}}handleAuthorisedPermission(we){if(!K(this.currentAuthorizedState)||!this.currentAuthorizedState){if(this.currentAuthorizedState=!0,this.permissionsAuthorized.emit(),this.getAuthorizedStrategyInput())return void this.applyStrategyAccordingToStrategyType(this.getAuthorizedStrategyInput());this.configurationService.onAuthorisedDefaultStrategy&&!this.thenBlockDefined()?this.applyStrategy(this.configurationService.onAuthorisedDefaultStrategy):this.showTemplateBlockInView(we)}}applyStrategyAccordingToStrategyType(we){if(!le(we))return ee(we)?(this.showTemplateBlockInView(this.templateRef),void we(this.templateRef)):void 0;this.applyStrategy(we)}showTemplateBlockInView(we){this.viewContainer.clear(),we&&(this.viewContainer.createEmbeddedView(we),this.changeDetector.markForCheck())}getAuthorisedTemplates(){return this.ngxPermissionsOnlyThen||this.ngxPermissionsExceptThen||this.ngxPermissionsThen||this.templateRef}elseBlockDefined(){return!!this.ngxPermissionsExceptElse||!!this.ngxPermissionsElse}thenBlockDefined(){return!!this.ngxPermissionsExceptThen||!!this.ngxPermissionsThen}getAuthorizedStrategyInput(){return this.ngxPermissionsOnlyAuthorisedStrategy||this.ngxPermissionsExceptAuthorisedStrategy||this.ngxPermissionsAuthorisedStrategy}getUnAuthorizedStrategyInput(){return this.ngxPermissionsOnlyUnauthorisedStrategy||this.ngxPermissionsExceptUnauthorisedStrategy||this.ngxPermissionsUnauthorisedStrategy}applyStrategy(we){if("show"===we)return void this.showTemplateBlockInView(this.templateRef);if("remove"===we)return void this.viewContainer.clear();const Fe=this.configurationService.getStrategy(we);this.showTemplateBlockInView(this.templateRef),Fe(this.templateRef)}static#e=this.\u0275fac=function(Fe){return new(Fe||_e)};static#t=this.\u0275dir=s.FsC({type:_e,selectors:[["","ngxPermissionsOnly",""],["","ngxPermissionsExcept",""]],inputs:{ngxPermissionsOnly:"ngxPermissionsOnly",ngxPermissionsOnlyThen:"ngxPermissionsOnlyThen",ngxPermissionsOnlyElse:"ngxPermissionsOnlyElse",ngxPermissionsExcept:"ngxPermissionsExcept",ngxPermissionsExceptElse:"ngxPermissionsExceptElse",ngxPermissionsExceptThen:"ngxPermissionsExceptThen",ngxPermissionsThen:"ngxPermissionsThen",ngxPermissionsElse:"ngxPermissionsElse",ngxPermissionsOnlyAuthorisedStrategy:"ngxPermissionsOnlyAuthorisedStrategy",ngxPermissionsOnlyUnauthorisedStrategy:"ngxPermissionsOnlyUnauthorisedStrategy",ngxPermissionsExceptUnauthorisedStrategy:"ngxPermissionsExceptUnauthorisedStrategy",ngxPermissionsExceptAuthorisedStrategy:"ngxPermissionsExceptAuthorisedStrategy",ngxPermissionsUnauthorisedStrategy:"ngxPermissionsUnauthorisedStrategy",ngxPermissionsAuthorisedStrategy:"ngxPermissionsAuthorisedStrategy"},outputs:{permissionsAuthorized:"permissionsAuthorized",permissionsUnauthorized:"permissionsUnauthorized"},features:[s.OA$]})}return _e})(),mt=(()=>{class _e{constructor(we,Fe,at){this.permissionsService=we,this.rolesService=Fe,this.router=at}canActivate(we,Fe){return this.hasPermissions(we,Fe)}canActivateChild(we,Fe){return this.hasPermissions(we,Fe)}canLoad(we){return this.hasPermissions(we)}canMatch(we){return this.hasPermissions(we)}hasPermissions(we,Fe){const Nt=this.transformPermission(we&&we.data?we.data.permissions:{},we,Fe);return this.isParameterAvailable(Nt.except)?this.passingExceptPermissionsValidation(Nt,we,Fe):!this.isParameterAvailable(Nt.only)||this.passingOnlyPermissionsValidation(Nt,we,Fe)}transformPermission(we,Fe,at){return{only:ee(we.only)?we.only(Fe,at):J(we.only),except:ee(we.except)?we.except(Fe,at):J(we.except),redirectTo:we.redirectTo}}isParameterAvailable(we){return!!we&&we.length>0}passingExceptPermissionsValidation(we,Fe,at){if(we.redirectTo&&(ee(we.redirectTo)||z(we.redirectTo)&&!this.isRedirectionWithParameters(we.redirectTo))){let Nt="";return(0,y.H)(we.except).pipe((0,se.Z)(Ge=>(0,R.p)([this.permissionsService.hasPermission(Ge),this.rolesService.hasOnlyRoles(Ge)]).pipe((0,ve.M)(fe=>{fe.every(ce=>!1===ce)||(Nt=Ge)}))),(0,O.$)(Ge=>Ge.some(fe=>!0===fe),!1),(0,se.Z)(Ge=>Nt?(this.handleRedirectOfFailedPermission(we,Nt,Fe,at),(0,x.of)(!1)):!Ge&&we.only?this.onlyRedirectCheck(we,Fe,at):(0,x.of)(!Ge))).toPromise()}return Promise.all([this.permissionsService.hasPermission(we.except),this.rolesService.hasOnlyRoles(we.except)]).then(([Nt,Ge])=>Nt||Ge?(we.redirectTo&&this.redirectToAnotherRoute(we.redirectTo,Fe,at),!1):!we.only||this.checkOnlyPermissions(we,Fe,at))}redirectToAnotherRoute(we,Fe,at,Nt){const Ge=ee(we)?we(Nt,Fe,at):we;if(this.isRedirectionWithParameters(Ge))return Ge.navigationCommands=this.transformNavigationCommands(Ge.navigationCommands,Fe,at),Ge.navigationExtras=this.transformNavigationExtras(Ge.navigationExtras,Fe,at),void this.router.navigate(Ge.navigationCommands,Ge.navigationExtras);Array.isArray(Ge)?this.router.navigate(Ge):this.router.navigate([Ge])}isRedirectionWithParameters(we){return z(we)&&(!!we.navigationCommands||!!we.navigationExtras)}transformNavigationCommands(we,Fe,at){return ee(we)?we(Fe,at):we}transformNavigationExtras(we,Fe,at){return ee(we)?we(Fe,at):we}onlyRedirectCheck(we,Fe,at){let Nt="";return(0,y.H)(we.only).pipe((0,se.Z)(Ge=>(0,R.p)([this.permissionsService.hasPermission(Ge),this.rolesService.hasOnlyRoles(Ge)]).pipe((0,ve.M)(fe=>{fe.every(ce=>!1===ce)&&(Nt=Ge)}))),(0,O.$)(Ge=>ee(we.redirectTo)?Ge.some(fe=>!0===fe):Ge.every(fe=>!1===fe),!1),(0,se.Z)(Ge=>ee(we.redirectTo)?Ge?(0,x.of)(!0):(this.handleRedirectOfFailedPermission(we,Nt,Fe,at),(0,x.of)(!1)):(Nt&&this.handleRedirectOfFailedPermission(we,Nt,Fe,at),(0,x.of)(!Ge)))).toPromise()}handleRedirectOfFailedPermission(we,Fe,at,Nt){this.isFailedPermissionPropertyOfRedirectTo(we,Fe)?this.redirectToAnotherRoute(we.redirectTo[Fe],at,Nt,Fe):ee(we.redirectTo)?this.redirectToAnotherRoute(we.redirectTo,at,Nt,Fe):this.redirectToAnotherRoute(we.redirectTo.default,at,Nt,Fe)}isFailedPermissionPropertyOfRedirectTo(we,Fe){return!!we.redirectTo&&we.redirectTo[Fe]}checkOnlyPermissions(we,Fe,at){const Nt={...we};return Promise.all([this.permissionsService.hasPermission(Nt.only),this.rolesService.hasOnlyRoles(Nt.only)]).then(([Ge,fe])=>!(!Ge&&!fe&&(Nt.redirectTo&&this.redirectToAnotherRoute(Nt.redirectTo,Fe,at),1)))}passingOnlyPermissionsValidation(we,Fe,at){return ee(we.redirectTo)||z(we.redirectTo)&&!this.isRedirectionWithParameters(we.redirectTo)?this.onlyRedirectCheck(we,Fe,at):this.checkOnlyPermissions(we,Fe,at)}static#e=this.\u0275fac=function(Fe){return new(Fe||_e)(s.KVO(Be),s.KVO(Pe),s.KVO(re.Ix))};static#t=this.\u0275prov=s.jDH({token:_e,factory:_e.\u0275fac})}return _e})(),Te=(()=>{class _e{static forRoot(we={}){return{ngModule:_e,providers:[X,Le,G,Be,mt,Pe,Z,{provide:ge,useValue:we.permissionsIsolate},{provide:nt,useValue:we.rolesIsolate},{provide:$,useValue:we.configurationIsolate}]}}static forChild(we={}){return{ngModule:_e,providers:[{provide:ge,useValue:we.permissionsIsolate},{provide:nt,useValue:we.rolesIsolate},{provide:$,useValue:we.configurationIsolate},Z,Be,Pe,mt]}}static#e=this.\u0275fac=function(Fe){return new(Fe||_e)};static#t=this.\u0275mod=s.$C({type:_e});static#n=this.\u0275inj=s.G2t({})}return _e})()},1635:(rt,pe,h)=>{function E(Pe,oe,Qe,tt){var ct,mt=arguments.length,Tt=mt<3?oe:null===tt?tt=Object.getOwnPropertyDescriptor(oe,Qe):tt;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Tt=Reflect.decorate(Pe,oe,Qe,tt);else for(var Te=Pe.length-1;Te>=0;Te--)(ct=Pe[Te])&&(Tt=(mt<3?ct(Tt):mt>3?ct(oe,Qe,Tt):ct(oe,Qe))||Tt);return mt>3&&Tt&&Object.defineProperty(oe,Qe,Tt),Tt}function O(Pe,oe){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(Pe,oe)}function se(Pe,oe,Qe,tt){return new(Qe||(Qe=Promise))(function(Tt,ct){function Te(_e){try{ue(tt.next(_e))}catch(Ke){ct(Ke)}}function ie(_e){try{ue(tt.throw(_e))}catch(Ke){ct(Ke)}}function ue(_e){_e.done?Tt(_e.value):function mt(Tt){return Tt instanceof Qe?Tt:new Qe(function(ct){ct(Tt)})}(_e.value).then(Te,ie)}ue((tt=tt.apply(Pe,oe||[])).next())})}function G(Pe){return this instanceof G?(this.v=Pe,this):new G(Pe)}function $(Pe,oe,Qe){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var mt,tt=Qe.apply(Pe,oe||[]),Tt=[];return mt={},ct("next"),ct("throw"),ct("return"),mt[Symbol.asyncIterator]=function(){return this},mt;function ct(we){tt[we]&&(mt[we]=function(Fe){return new Promise(function(at,Nt){Tt.push([we,Fe,at,Nt])>1||Te(we,Fe)})})}function Te(we,Fe){try{!function ie(we){we.value instanceof G?Promise.resolve(we.value.v).then(ue,_e):Ke(Tt[0][2],we)}(tt[we](Fe))}catch(at){Ke(Tt[0][3],at)}}function ue(we){Te("next",we)}function _e(we){Te("throw",we)}function Ke(we,Fe){we(Fe),Tt.shift(),Tt.length&&Te(Tt[0][0],Tt[0][1])}}function ee(Pe){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var Qe,oe=Pe[Symbol.asyncIterator];return oe?oe.call(Pe):(Pe=function W(Pe){var oe="function"==typeof Symbol&&Symbol.iterator,Qe=oe&&Pe[oe],tt=0;if(Qe)return Qe.call(Pe);if(Pe&&"number"==typeof Pe.length)return{next:function(){return Pe&&tt>=Pe.length&&(Pe=void 0),{value:Pe&&Pe[tt++],done:!Pe}}};throw new TypeError(oe?"Object is not iterable.":"Symbol.iterator is not defined.")}(Pe),Qe={},tt("next"),tt("throw"),tt("return"),Qe[Symbol.asyncIterator]=function(){return this},Qe);function tt(Tt){Qe[Tt]=Pe[Tt]&&function(ct){return new Promise(function(Te,ie){!function mt(Tt,ct,Te,ie){Promise.resolve(ie).then(function(ue){Tt({value:ue,done:Te})},ct)}(Te,ie,(ct=Pe[Tt](ct)).done,ct.value)})}}}h.d(pe,{AQ:()=>$,Cg:()=>E,N3:()=>G,Sn:()=>O,sH:()=>se,xN:()=>ee}),"function"==typeof SuppressedError&&SuppressedError}},rt=>{rt(rt.s=8569)}]);