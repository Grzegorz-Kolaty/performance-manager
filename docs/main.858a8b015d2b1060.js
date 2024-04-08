"use strict";(self.webpackChunkfrontend_performance_manager=self.webpackChunkfrontend_performance_manager||[]).push([[792],{3089:(rt,pe,h)=>{h.d(pe,{X:()=>a});var a=function(s){return s.user="ROLE_USER",s.supervisor="ROLE_SUPERVISOR",s.admin="ROLE_ADMIN",s}(a||{})},4441:(rt,pe,h)=>{h.d(pe,{n:()=>a});var a=function(s){return s.All="",s.Todo="todo",s.Finished="finished",s.WaitingForStart="waitingForStart",s}(a||{})},7052:(rt,pe,h)=>{h.d(pe,{fS:()=>ve,rp:()=>X,ze:()=>Q,DL:()=>b});var a=h(8141),s=h(9437),x=h(8810),y=h(4438),E=h(1626),O=h(2341),_=h(803);let b=(()=>{class oe{constructor(z,$,Y){this.http=z,this.permissionsService=$,this.router=Y}getBackendUserProfile(){return console.log(this.userProfile),this.http.get("users/@me").pipe((0,a.M)(z=>{z&&(this.userProfile=z,this.updateAvailableRoles(z.roles),this.setDefaultRole())}),(0,s.W)(z=>(console.error(z),(0,x.$)(()=>new Error(z)))))}updateAvailableRoles(z){this.availableRoles=z}updateCurrentRole(z){this.currentRole=z,this.permissionsService.flushPermissions(),this.permissionsService.loadPermissions([z]),this.router.navigateByUrl("/dashboard")}setDefaultRole(){!this.currentRole&&this.availableRoles&&this.updateCurrentRole(this.availableRoles[0])}getUserRolesById(z){return this.http.get(`users/${z}`)}addRoleByUserId(z,$){return this.http.patch(`users/${z}/roles`,{role:$})}removeRoleByUserId(z,$){return this.http.delete(`users/${z}/roles`,{body:{role:$}})}static#e=this.\u0275fac=function($){return new($||oe)(y.KVO(E.Qq),y.KVO(O.$R),y.KVO(_.Ix))};static#t=this.\u0275prov=y.jDH({token:oe,factory:oe.\u0275fac,providedIn:"root"})}return oe})();var S=h(4412),B=h(7673),R=h(8793),W=h(3294),H=h(5558);let Q=(()=>{class oe{constructor(z){this.http=z,this.searchTemplateValue=new S.t(""),this.submittedQuestionsIds$=new S.t([]),this.isProcessingSomething=!1,this.templates$=(0,B.of)([])}getTemplates(z){return this.http.get("templates",z?{params:{name:z,page:0}}:{params:{page:0}})}getTemplatesById(z){return this.http.get(`templates/${z}`)}createTemplate(z){return this.http.post("templates",z)}addQuestionToSubmission(z){const $=this.submittedQuestionsIds$.getValue();this.submittedQuestionsIds$.next([...$,z])}removeQuestionFromSubmission(z){const $=this.submittedQuestionsIds$.getValue(),Y=$.indexOf(z);Y>-1&&($.splice(Y,1),this.submittedQuestionsIds$.next($))}loadTemplates(){this.templates$=(0,R.x)((0,B.of)([]),this.searchTemplateValue.pipe((0,W.F)(),(0,a.M)(()=>this.isProcessingSomething=!0),(0,H.n)(z=>this.getTemplates(z).pipe((0,s.W)(()=>(0,B.of)([])),(0,a.M)(()=>this.isProcessingSomething=!1)))))}static#e=this.\u0275fac=function($){return new($||oe)(y.KVO(E.Qq))};static#t=this.\u0275prov=y.jDH({token:oe,factory:oe.\u0275fac,providedIn:"root"})}return oe})();var I=h(3089);let X=(()=>{class oe{constructor(z,$,Y){this.http=z,this.permissionsService=$,this.userService=Y,this.searchQuestionValue=new S.t(""),this.isProcessingSomething=!1,this.questions$=(0,B.of)([])}getQuestions(z){return this.http.get("questions",z?{params:{name:z,page:0}}:{params:{page:0}})}getQuestionById(z){return this.http.get(`questions/${z}`)}createQuestion(z){return this.http.post("questions",z)}editQuestion(z){const Y=Object.keys(this.permissionsService.getPermissions()||{}),te=(new E.Nl).set("role",Y[0]);return this.http.patch("/questions",z,{params:te})}saveQuestionAnswer(z,$,Y,te){this.http.post(`answers/${z}/${$}/${te}${this.userService.currentRole===I.X.supervisor&&I.X.admin?"/supervisor":""}`,{answer:Y}).subscribe({complete:()=>{this.isProcessingSomething=!1}})}loadQuestions(){this.questions$=(0,R.x)((0,B.of)([]),this.searchQuestionValue.pipe((0,W.F)(),(0,a.M)(()=>this.isProcessingSomething=!0),(0,H.n)(z=>this.getQuestions(z).pipe((0,s.W)(()=>(0,B.of)([])),(0,a.M)(()=>this.isProcessingSomething=!1)))))}static#e=this.\u0275fac=function($){return new($||oe)(y.KVO(E.Qq),y.KVO(O.$R),y.KVO(b))};static#t=this.\u0275prov=y.jDH({token:oe,factory:oe.\u0275fac,providedIn:"root"})}return oe})();var re=h(4441);let ve=(()=>{class oe{constructor(z){this.http=z,this.formsStatus=new S.t(re.n.All),this.searchFormValue=new S.t(""),this.isProcessingSomething=!1,this.forms$=(0,B.of)([])}getForms(z){return this.http.get("forms",z?{params:{page:0,name:z}}:{params:{page:0}})}getFormById(z){return this.http.get(`forms/${z}`)}removeUserFromForm(z,$){this.isProcessingSomething=!0,this.http.delete(`forms/${z}/users/${$}`).subscribe({complete:()=>{this.loadForms()}})}createFormFromTemplate(z,$){this.isProcessingSomething=!0,this.http.post("forms",$,{params:{templateId:z}}).subscribe({error:()=>{this.isProcessingSomething=!1},complete:()=>{this.isProcessingSomething=!1}})}addUserToForm(z,$){this.http.post(`forms/${z}/users/${$}`,{}).subscribe({complete:()=>{this.loadForms()}})}removeForm(z){this.isProcessingSomething=!0,this.http.delete(`forms/${z}`).subscribe({complete:()=>{this.loadForms()}})}changeFormsStatus(z){this.formsStatus.next(z)}loadForms(){this.forms$=(0,R.x)((0,B.of)([]),this.searchFormValue.pipe((0,W.F)(),(0,a.M)(()=>this.isProcessingSomething=!0),(0,H.n)(z=>this.getForms(z).pipe((0,s.W)(()=>(0,B.of)([])),(0,a.M)(()=>this.isProcessingSomething=!1)))))}static#e=this.\u0275fac=function($){return new($||oe)(y.KVO(E.Qq))};static#t=this.\u0275prov=y.jDH({token:oe,factory:oe.\u0275fac,providedIn:"root"})}return oe})()},9057:(rt,pe,h)=>{var a=h(345),s=h(4438);const x={production:!0,BACKEND_API:"http://localhost:8080/api/v1/",EXCLUDED_URLS:["./assets/","/i18n","https://graph.microsoft"],MSAL:{CLIENT_ID:"dc1aea2d-2982-4e88-8756-9cbc93936d3b",AUTHORITY:"https://login.microsoftonline.com/common/",REDIRECT_URI:"/performance-manager/",POST_LOGOUT_URI:"/",SCOPES_ARRAY:["GroupMember.Read.All","People.Read","user.read","User.Read.All","User.ReadBasic.All","presence.read.all","openid","profile","offline_access","email"]}};var y=h(1626),E=h(7554),O=h(3212);class _{static getInteractionStatusFromEvent(c,n){switch(c.eventType){case O.B.LOGIN_START:return E.T$.Login;case O.B.SSO_SILENT_START:return E.T$.SsoSilent;case O.B.ACQUIRE_TOKEN_START:if(c.interactionType===E.X8.Redirect||c.interactionType===E.X8.Popup)return E.T$.AcquireToken;break;case O.B.HANDLE_REDIRECT_START:return E.T$.HandleRedirect;case O.B.LOGOUT_START:return E.T$.Logout;case O.B.SSO_SILENT_SUCCESS:case O.B.SSO_SILENT_FAILURE:if(n&&n!==E.T$.SsoSilent)break;return E.T$.None;case O.B.LOGOUT_END:if(n&&n!==E.T$.Logout)break;return E.T$.None;case O.B.HANDLE_REDIRECT_END:if(n&&n!==E.T$.HandleRedirect)break;return E.T$.None;case O.B.LOGIN_SUCCESS:case O.B.LOGIN_FAILURE:case O.B.ACQUIRE_TOKEN_SUCCESS:case O.B.ACQUIRE_TOKEN_FAILURE:case O.B.RESTORE_FROM_BFCACHE:if(c.interactionType===E.X8.Redirect||c.interactionType===E.X8.Popup){if(n&&n!==E.T$.Login&&n!==E.T$.AcquireToken)break;return E.T$.None}}return null}}var b=h(4064),S=h(1564),B=h(1474),R=h(2030),W=h(2806),H=h(1413),Q=h(6129);class I extends H.B{constructor(c=1/0,n=1/0,o=Q.U){super(),this._bufferSize=c,this._windowTime=n,this._timestampProvider=o,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=n===1/0,this._bufferSize=Math.max(1,c),this._windowTime=Math.max(1,n)}next(c){const{isStopped:n,_buffer:o,_infiniteTimeWindow:f,_timestampProvider:m,_windowTime:A}=this;n||(o.push(c),!f&&o.push(m.now()+A)),this._trimBuffer(),super.next(c)}_subscribe(c){this._throwIfClosed(),this._trimBuffer();const n=this._innerSubscribe(c),{_infiniteTimeWindow:o,_buffer:f}=this,m=f.slice();for(let A=0;A<m.length&&!c.closed;A+=o?1:2)c.next(m[A]);return this._checkFinalizedStatuses(c),n}_trimBuffer(){const{_bufferSize:c,_timestampProvider:n,_buffer:o,_infiniteTimeWindow:f}=this,m=(f?1:2)*c;if(c<1/0&&m<o.length&&o.splice(0,o.length-m),!f){const A=n.now();let F=0;for(let ae=1;ae<o.length&&o[ae]<=A;ae+=2)F=ae;F&&o.splice(0,F+1)}}}var X=h(4412),re=h(7673),ve=h(983),oe=h(177),de=h(6354),z=h(274),$=h(9437),Y=h(5558),te=h(6697),j=h(5964),le=h(803);const G="@azure/msal-angular",L="3.0.15",P=new s.nKC("MSAL_INSTANCE"),ee=new s.nKC("MSAL_GUARD_CONFIG"),Z=new s.nKC("MSAL_INTERCEPTOR_CONFIG"),ge=new s.nKC("MSAL_BROADCAST_CONFIG");let Be=(()=>{class d{constructor(n,o){this.instance=n,this.location=o;const f=this.location.path(!0).split("#").pop();f&&(this.redirectHash=`#${f}`),this.instance.initializeWrapperLibrary(E.f7.Angular,L)}initialize(){return(0,W.H)(this.instance.initialize())}acquireTokenPopup(n){return(0,W.H)(this.instance.acquireTokenPopup(n))}acquireTokenRedirect(n){return(0,W.H)(this.instance.acquireTokenRedirect(n))}acquireTokenSilent(n){return(0,W.H)(this.instance.acquireTokenSilent(n))}handleRedirectObservable(n){return(0,W.H)(this.instance.initialize().then(()=>this.instance.handleRedirectPromise(n||this.redirectHash)))}loginPopup(n){return(0,W.H)(this.instance.loginPopup(n))}loginRedirect(n){return(0,W.H)(this.instance.loginRedirect(n))}logout(n){return(0,W.H)(this.instance.logout(n))}logoutRedirect(n){return(0,W.H)(this.instance.logoutRedirect(n))}logoutPopup(n){return(0,W.H)(this.instance.logoutPopup(n))}ssoSilent(n){return(0,W.H)(this.instance.ssoSilent(n))}getLogger(){return this.logger||(this.logger=this.instance.getLogger().clone(G,L)),this.logger}setLogger(n){this.logger=n.clone(G,L),this.instance.setLogger(n)}}return d.\u0275fac=function(n){return new(n||d)(s.KVO(P),s.KVO(oe.aZ))},d.\u0275prov=s.jDH({token:d,factory:d.\u0275fac}),d})(),Le=(()=>{class d{constructor(n,o,f){this.msalInstance=n,this.authService=o,this.msalBroadcastConfig=f,this.msalBroadcastConfig&&this.msalBroadcastConfig.eventsToReplay>0?(this.authService.getLogger().verbose(`BroadcastService - eventsToReplay set on BroadcastConfig, replaying the last ${this.msalBroadcastConfig.eventsToReplay} events`),this._msalSubject=new I(this.msalBroadcastConfig.eventsToReplay)):this._msalSubject=new H.B,this.msalSubject$=this._msalSubject.asObservable(),this._inProgress=new X.t(E.T$.Startup),this.inProgress$=this._inProgress.asObservable(),this.msalInstance.addEventCallback(m=>{this._msalSubject.next(m);const A=_.getInteractionStatusFromEvent(m,this._inProgress.value);null!==A&&(this.authService.getLogger().verbose(`BroadcastService - ${m.eventType} results in setting inProgress from ${this._inProgress.value} to ${A}`),this._inProgress.next(A))})}}return d.\u0275fac=function(n){return new(n||d)(s.KVO(P),s.KVO(Be),s.KVO(ge,8))},d.\u0275prov=s.jDH({token:d,factory:d.\u0275fac}),d})(),et=(()=>{class d{constructor(n,o,f,m,A){this.msalGuardConfig=n,this.msalBroadcastService=o,this.authService=f,this.location=m,this.router=A,this.msalBroadcastService.inProgress$.subscribe()}parseUrl(n){return this.router.parseUrl(n)}getDestinationUrl(n){this.authService.getLogger().verbose("Guard - getting destination url");const o=document.getElementsByTagName("base"),f=this.location.normalize(o.length?o[0].href:window.location.origin),m=this.location.prepareExternalUrl(n);return m.startsWith("#")?(this.authService.getLogger().verbose("Guard - destination by hash routing"),`${f}/${m}`):`${f}${n}`}loginInteractively(n){const o="function"==typeof this.msalGuardConfig.authRequest?this.msalGuardConfig.authRequest(this.authService,n):{...this.msalGuardConfig.authRequest};if(this.msalGuardConfig.interactionType===E.X8.Popup)return this.authService.getLogger().verbose("Guard - logging in by popup"),this.authService.loginPopup(o).pipe((0,de.T)(m=>(this.authService.getLogger().verbose("Guard - login by popup successful, can activate, setting active account"),this.authService.instance.setActiveAccount(m.account),!0)));this.authService.getLogger().verbose("Guard - logging in by redirect");const f=this.getDestinationUrl(n.url);return this.authService.loginRedirect({redirectStartPage:f,...o}).pipe((0,de.T)(()=>!1))}activateHelper(n){if(this.msalGuardConfig.interactionType!==E.X8.Popup&&this.msalGuardConfig.interactionType!==E.X8.Redirect)throw new b.XX("invalid_interaction_type","Invalid interaction type provided to MSAL Guard. InteractionType.Popup or InteractionType.Redirect must be provided in the MsalGuardConfiguration");if(this.authService.getLogger().verbose("MSAL Guard activated"),!(typeof window<"u"))return this.authService.getLogger().info("Guard - window is undefined, MSAL does not support server-side token acquisition"),(0,re.of)(!0);if(S.H.hashContainsKnownProperties(window.location.hash)&&B.GZ()&&!this.authService.instance.getConfiguration().system.allowRedirectInIframe)return this.authService.getLogger().warning("Guard - redirectUri set to page with MSAL Guard. It is recommended to not set redirectUri to a page that requires authentication."),(0,re.of)(!1);this.msalGuardConfig.loginFailedRoute&&(this.loginFailedRoute=this.parseUrl(this.msalGuardConfig.loginFailedRoute));const o=this.location.path(!0);return this.authService.initialize().pipe((0,z.H)(()=>this.authService.handleRedirectObservable()),(0,z.H)(()=>{if(!this.authService.instance.getAllAccounts().length)return n?(this.authService.getLogger().verbose("Guard - no accounts retrieved, log in required to activate"),this.loginInteractively(n)):(this.authService.getLogger().verbose("Guard - no accounts retrieved, no state, cannot load"),(0,re.of)(!1));if(this.authService.getLogger().verbose("Guard - at least 1 account exists, can activate or load"),n){const f=this.includesCode(n.url),m=!!n.root&&!!n.root.fragment&&this.includesCode(`#${n.root.fragment}`),A=0===this.location.prepareExternalUrl(n.url).indexOf("#");if(f&&(m||A))return this.authService.getLogger().info("Guard - Hash contains known code response, stopping navigation."),o.indexOf("#")>-1?(0,re.of)(this.parseUrl(this.location.path())):(0,re.of)(this.parseUrl(""))}return(0,re.of)(!0)}),(0,$.W)(f=>(this.authService.getLogger().error("Guard - error while logging in, unable to activate"),this.authService.getLogger().errorPii(`Guard - error: ${f.message}`),this.loginFailedRoute&&n?(this.authService.getLogger().verbose("Guard - loginFailedRoute set, redirecting"),(0,re.of)(this.loginFailedRoute)):(0,re.of)(!1))))}includesCode(n){return n.lastIndexOf("/code")>-1&&n.lastIndexOf("/code")===n.length-5||n.indexOf("#code=")>-1||n.indexOf("&code=")>-1}canActivate(n,o){return this.authService.getLogger().verbose("Guard - canActivate"),this.activateHelper(o)}canActivateChild(n,o){return this.authService.getLogger().verbose("Guard - canActivateChild"),this.activateHelper(o)}canMatch(){return this.authService.getLogger().verbose("Guard - canLoad"),this.activateHelper()}}return d.\u0275fac=function(n){return new(n||d)(s.KVO(ee),s.KVO(Le),s.KVO(Be),s.KVO(oe.aZ),s.KVO(le.Ix))},d.\u0275prov=s.jDH({token:d,factory:d.\u0275fac}),d})(),Pe=(()=>{class d{constructor(n,o,f,m,A){this.msalInterceptorConfig=n,this.authService=o,this.location=f,this.msalBroadcastService=m,this._document=A}intercept(n,o){if(this.msalInterceptorConfig.interactionType!==E.X8.Popup&&this.msalInterceptorConfig.interactionType!==E.X8.Redirect)throw new b.XX("invalid_interaction_type","Invalid interaction type provided to MSAL Interceptor. InteractionType.Popup, InteractionType.Redirect must be provided in the msalInterceptorConfiguration");this.authService.getLogger().verbose("MSAL Interceptor activated");const f=this.getScopesForEndpoint(n.url,n.method);if(!f||0===f.length)return this.authService.getLogger().verbose("Interceptor - no scopes for endpoint"),o.handle(n);let m;this.authService.instance.getActiveAccount()?(this.authService.getLogger().verbose("Interceptor - active account selected"),m=this.authService.instance.getActiveAccount()):(this.authService.getLogger().verbose("Interceptor - no active account, fallback to first account"),m=this.authService.instance.getAllAccounts()[0]);const A="function"==typeof this.msalInterceptorConfig.authRequest?this.msalInterceptorConfig.authRequest(this.authService,n,{account:m}):{...this.msalInterceptorConfig.authRequest,account:m};return this.authService.getLogger().info(`Interceptor - ${f.length} scopes found for endpoint`),this.authService.getLogger().infoPii(`Interceptor - [${f}] scopes found for ${n.url}`),this.acquireToken(A,f,m).pipe((0,Y.n)(F=>{this.authService.getLogger().verbose("Interceptor - setting authorization headers");const ae=n.headers.set("Authorization",`Bearer ${F.accessToken}`),Se=n.clone({headers:ae});return o.handle(Se)}))}acquireToken(n,o,f){return this.authService.acquireTokenSilent({...n,scopes:o,account:f}).pipe((0,$.W)(()=>(this.authService.getLogger().error("Interceptor - acquireTokenSilent rejected with error. Invoking interaction to resolve."),this.msalBroadcastService.inProgress$.pipe((0,te.s)(1),(0,Y.n)(m=>m===E.T$.None?this.acquireTokenInteractively(n,o):this.msalBroadcastService.inProgress$.pipe((0,j.p)(A=>A===E.T$.None),(0,te.s)(1),(0,Y.n)(()=>this.acquireToken(n,o,f))))))),(0,Y.n)(m=>m.accessToken?(0,re.of)(m):(this.authService.getLogger().error("Interceptor - acquireTokenSilent resolved with null access token. Known issue with B2C tenants, invoking interaction to resolve."),this.msalBroadcastService.inProgress$.pipe((0,j.p)(A=>A===E.T$.None),(0,te.s)(1),(0,Y.n)(()=>this.acquireTokenInteractively(n,o))))))}acquireTokenInteractively(n,o){if(this.msalInterceptorConfig.interactionType===E.X8.Popup)return this.authService.getLogger().verbose("Interceptor - error acquiring token silently, acquiring by popup"),this.authService.acquireTokenPopup({...n,scopes:o});this.authService.getLogger().verbose("Interceptor - error acquiring token silently, acquiring by redirect");const f=window.location.href;return this.authService.acquireTokenRedirect({...n,scopes:o,redirectStartPage:f}),ve.w}getScopesForEndpoint(n,o){this.authService.getLogger().verbose("Interceptor - getting scopes for endpoint");const f=this.location.normalize(n),m=Array.from(this.msalInterceptorConfig.protectedResourceMap.keys()),A=this.matchResourcesToEndpoint(m,f);return A.absoluteResources.length>0?this.matchScopesToEndpoint(this.msalInterceptorConfig.protectedResourceMap,A.absoluteResources,o):A.relativeResources.length>0?this.matchScopesToEndpoint(this.msalInterceptorConfig.protectedResourceMap,A.relativeResources,o):null}matchResourcesToEndpoint(n,o){const f={absoluteResources:[],relativeResources:[]};return n.forEach(m=>{const A=this.location.normalize(m);R.$.matchPattern(A,o)&&f.absoluteResources.push(m);const F=this.getAbsoluteUrl(m),ae=new S.H(F).getUrlComponents(),Se=this.getAbsoluteUrl(o),Me=new S.H(Se).getUrlComponents(),We=ae.QueryString?`${ae.AbsolutePath}?${ae.QueryString}`:this.location.normalize(ae.AbsolutePath);ae.HostNameAndPort===Me.HostNameAndPort&&R.$.matchPattern(We,Se)&&""!==We&&"/*"!==We&&f.relativeResources.push(m)}),f}getAbsoluteUrl(n){const o=this._document.createElement("a");return o.href=n,o.href}matchScopesToEndpoint(n,o,f){const m=[];return o.forEach(A=>{const F=[],ae=n.get(A);null!==ae?(ae.forEach(Se=>{if("string"==typeof Se)F.push(Se);else{const Me=f.toLowerCase();Se.httpMethod.toLowerCase()===Me&&(null===Se.scopes?m.push(null):Se.scopes.forEach(Vt=>{F.push(Vt)}))}}),F.length>0&&m.push(F)):m.push(null)}),m.length>0?(m.length>1&&this.authService.getLogger().warning("Interceptor - More than 1 matching scopes for endpoint found."),m[0]):null}}return d.\u0275fac=function(n){return new(n||d)(s.KVO(Z),s.KVO(Be),s.KVO(oe.aZ),s.KVO(Le),s.KVO(oe.qQ))},d.\u0275prov=s.jDH({token:d,factory:d.\u0275fac}),d})();var ft=h(2341),Tt=h(4402),ct=h(7468),Te=h(8793),ie=h(9030),ue=h(8750),_e=h(7707),Ke=h(9974);function Fe(d,c,...n){if(!0===c)return void d();if(!1===c)return;const o=new _e.Ms({next:()=>{o.unsubscribe(),d()}});return(0,ue.Tg)(c(...n)).subscribe(o)}function at(d,c,n){let o,f=!1;return d&&"object"==typeof d?({bufferSize:o=1/0,windowTime:c=1/0,refCount:f=!1,scheduler:n}=d):o=d??1/0,function we(d={}){const{connector:c=(()=>new H.B),resetOnError:n=!0,resetOnComplete:o=!0,resetOnRefCountZero:f=!0}=d;return m=>{let A,F,ae,Se=0,Me=!1,We=!1;const Vt=()=>{F?.unsubscribe(),F=void 0},Yt=()=>{Vt(),A=ae=void 0,Me=We=!1},rn=()=>{const bn=A;Yt(),bn?.unsubscribe()};return(0,Ke.N)((bn,ai)=>{Se++,!We&&!Me&&Vt();const Ni=ae=ae??c();ai.add(()=>{Se--,0===Se&&!We&&!Me&&(F=Fe(rn,f))}),Ni.subscribe(ai),!A&&Se>0&&(A=new _e.Ms({next:Hi=>Ni.next(Hi),error:Hi=>{We=!0,Vt(),F=Fe(Yt,n,Hi),Ni.error(Hi)},complete:()=>{Me=!0,Vt(),F=Fe(Yt,o),Ni.complete()}}),(0,ue.Tg)(bn).subscribe(A))})(m)}}({connector:()=>new I(o,c,n),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:f})}class Ot{}let Ge=(()=>{class d extends Ot{getTranslation(n){return(0,re.of)({})}static \u0275fac=(()=>{let n;return function(f){return(n||(n=s.xGo(d)))(f||d)}})();static \u0275prov=s.jDH({token:d,factory:d.\u0275fac})}return d})();class fe{}let V=(()=>{class d{handle(n){return n.key}static \u0275fac=function(o){return new(o||d)};static \u0275prov=s.jDH({token:d,factory:d.\u0275fac})}return d})();function ce(d,c){if(d===c)return!0;if(null===d||null===c)return!1;if(d!=d&&c!=c)return!0;let f,m,A,n=typeof d;if(n==typeof c&&"object"==n){if(!Array.isArray(d)){if(Array.isArray(c))return!1;for(m in A=Object.create(null),d){if(!ce(d[m],c[m]))return!1;A[m]=!0}for(m in c)if(!(m in A)&&typeof c[m]<"u")return!1;return!0}if(!Array.isArray(c))return!1;if((f=d.length)==c.length){for(m=0;m<f;m++)if(!ce(d[m],c[m]))return!1;return!0}}return!1}function xe(d){return typeof d<"u"&&null!==d}function Ve(d){return d&&"object"==typeof d&&!Array.isArray(d)}function Ct(d,c){let n=Object.assign({},d);return Ve(d)&&Ve(c)&&Object.keys(c).forEach(o=>{Ve(c[o])?o in d?n[o]=Ct(d[o],c[o]):Object.assign(n,{[o]:c[o]}):Object.assign(n,{[o]:c[o]})}),n}class it{}let mt=(()=>{class d extends it{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(n,o){let f;return f="string"==typeof n?this.interpolateString(n,o):"function"==typeof n?this.interpolateFunction(n,o):n,f}getValue(n,o){let f="string"==typeof o?o.split("."):[o];o="";do{o+=f.shift(),!xe(n)||!xe(n[o])||"object"!=typeof n[o]&&f.length?f.length?o+=".":n=void 0:(n=n[o],o="")}while(f.length);return n}interpolateFunction(n,o){return n(o)}interpolateString(n,o){return o?n.replace(this.templateMatcher,(f,m)=>{let A=this.getValue(o,m);return xe(A)?A:f}):n}static \u0275fac=(()=>{let n;return function(f){return(n||(n=s.xGo(d)))(f||d)}})();static \u0275prov=s.jDH({token:d,factory:d.\u0275fac})}return d})();class $e{}let Xe=(()=>{class d extends $e{compile(n,o){return n}compileTranslations(n,o){return n}static \u0275fac=(()=>{let n;return function(f){return(n||(n=s.xGo(d)))(f||d)}})();static \u0275prov=s.jDH({token:d,factory:d.\u0275fac})}return d})();class zt{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new s.bkB;onLangChange=new s.bkB;onDefaultLangChange=new s.bkB}const tn=new s.nKC("USE_STORE"),kn=new s.nKC("USE_DEFAULT_LANG"),An=new s.nKC("DEFAULT_LANGUAGE"),Rn=new s.nKC("USE_EXTEND");let vi=(()=>{class d{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;isolate;extend;loadingTranslations;pending=!1;_onTranslationChange=new s.bkB;_onLangChange=new s.bkB;_onDefaultLangChange=new s.bkB;_defaultLang;_currentLang;_langs=[];_translations={};_translationRequests={};get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(n){this.isolate?this._defaultLang=n:this.store.defaultLang=n}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(n){this.isolate?this._currentLang=n:this.store.currentLang=n}get langs(){return this.isolate?this._langs:this.store.langs}set langs(n){this.isolate?this._langs=n:this.store.langs=n}get translations(){return this.isolate?this._translations:this.store.translations}set translations(n){this.isolate?this._translations=n:this.store.translations=n}constructor(n,o,f,m,A,F=!0,ae=!1,Se=!1,Me){this.store=n,this.currentLoader=o,this.compiler=f,this.parser=m,this.missingTranslationHandler=A,this.useDefaultLang=F,this.isolate=ae,this.extend=Se,Me&&this.setDefaultLang(Me)}setDefaultLang(n){if(n===this.defaultLang)return;let o=this.retrieveTranslations(n);typeof o<"u"?(null==this.defaultLang&&(this.defaultLang=n),o.pipe((0,te.s)(1)).subscribe(f=>{this.changeDefaultLang(n)})):this.changeDefaultLang(n)}getDefaultLang(){return this.defaultLang}use(n){if(n===this.currentLang)return(0,re.of)(this.translations[n]);let o=this.retrieveTranslations(n);return typeof o<"u"?(this.currentLang||(this.currentLang=n),o.pipe((0,te.s)(1)).subscribe(f=>{this.changeLang(n)}),o):(this.changeLang(n),(0,re.of)(this.translations[n]))}retrieveTranslations(n){let o;return(typeof this.translations[n]>"u"||this.extend)&&(this._translationRequests[n]=this._translationRequests[n]||this.getTranslation(n),o=this._translationRequests[n]),o}getTranslation(n){this.pending=!0;const o=this.currentLoader.getTranslation(n).pipe(at(1),(0,te.s)(1));return this.loadingTranslations=o.pipe((0,de.T)(f=>this.compiler.compileTranslations(f,n)),at(1),(0,te.s)(1)),this.loadingTranslations.subscribe({next:f=>{this.translations[n]=this.extend&&this.translations[n]?{...f,...this.translations[n]}:f,this.updateLangs(),this.pending=!1},error:f=>{this.pending=!1}}),o}setTranslation(n,o,f=!1){o=this.compiler.compileTranslations(o,n),this.translations[n]=(f||this.extend)&&this.translations[n]?Ct(this.translations[n],o):o,this.updateLangs(),this.onTranslationChange.emit({lang:n,translations:this.translations[n]})}getLangs(){return this.langs}addLangs(n){n.forEach(o=>{-1===this.langs.indexOf(o)&&this.langs.push(o)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(n,o,f){let m;if(o instanceof Array){let A={},F=!1;for(let ae of o)A[ae]=this.getParsedResult(n,ae,f),(0,Tt.A)(A[ae])&&(F=!0);if(F){const ae=o.map(Se=>(0,Tt.A)(A[Se])?A[Se]:(0,re.of)(A[Se]));return(0,ct.p)(ae).pipe((0,de.T)(Se=>{let Me={};return Se.forEach((We,Vt)=>{Me[o[Vt]]=We}),Me}))}return A}if(n&&(m=this.parser.interpolate(this.parser.getValue(n,o),f)),typeof m>"u"&&null!=this.defaultLang&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(m=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],o),f)),typeof m>"u"){let A={key:o,translateService:this};typeof f<"u"&&(A.interpolateParams=f),m=this.missingTranslationHandler.handle(A)}return typeof m<"u"?m:o}get(n,o){if(!xe(n)||!n.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe((0,z.H)(f=>(f=this.getParsedResult(f,n,o),(0,Tt.A)(f)?f:(0,re.of)(f))));{let f=this.getParsedResult(this.translations[this.currentLang],n,o);return(0,Tt.A)(f)?f:(0,re.of)(f)}}getStreamOnTranslationChange(n,o){if(!xe(n)||!n.length)throw new Error('Parameter "key" required');return(0,Te.x)((0,ie.v)(()=>this.get(n,o)),this.onTranslationChange.pipe((0,Y.n)(f=>{const m=this.getParsedResult(f.translations,n,o);return"function"==typeof m.subscribe?m:(0,re.of)(m)})))}stream(n,o){if(!xe(n)||!n.length)throw new Error('Parameter "key" required');return(0,Te.x)((0,ie.v)(()=>this.get(n,o)),this.onLangChange.pipe((0,Y.n)(f=>{const m=this.getParsedResult(f.translations,n,o);return(0,Tt.A)(m)?m:(0,re.of)(m)})))}instant(n,o){if(!xe(n)||!n.length)throw new Error('Parameter "key" required');let f=this.getParsedResult(this.translations[this.currentLang],n,o);if((0,Tt.A)(f)){if(n instanceof Array){let m={};return n.forEach((A,F)=>{m[n[F]]=n[F]}),m}return n}return f}set(n,o,f=this.currentLang){this.translations[f][n]=this.compiler.compile(o,f),this.updateLangs(),this.onTranslationChange.emit({lang:f,translations:this.translations[f]})}changeLang(n){this.currentLang=n,this.onLangChange.emit({lang:n,translations:this.translations[n]}),null==this.defaultLang&&this.changeDefaultLang(n)}changeDefaultLang(n){this.defaultLang=n,this.onDefaultLangChange.emit({lang:n,translations:this.translations[n]})}reloadLang(n){return this.resetLang(n),this.getTranslation(n)}resetLang(n){this._translationRequests[n]=void 0,this.translations[n]=void 0}getBrowserLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let n=window.navigator.languages?window.navigator.languages[0]:null;return n=n||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,typeof n>"u"?void 0:(-1!==n.indexOf("-")&&(n=n.split("-")[0]),-1!==n.indexOf("_")&&(n=n.split("_")[0]),n)}getBrowserCultureLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let n=window.navigator.languages?window.navigator.languages[0]:null;return n=n||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,n}static \u0275fac=function(o){return new(o||d)(s.KVO(zt),s.KVO(Ot),s.KVO($e),s.KVO(it),s.KVO(fe),s.KVO(kn),s.KVO(tn),s.KVO(Rn),s.KVO(An))};static \u0275prov=s.jDH({token:d,factory:d.\u0275fac})}return d})(),fi=(()=>{class d{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(n,o){this.translate=n,this._ref=o}updateValue(n,o,f){let m=A=>{this.value=void 0!==A?A:n,this.lastKey=n,this._ref.markForCheck()};if(f){let A=this.translate.getParsedResult(f,n,o);(0,Tt.A)(A.subscribe)?A.subscribe(m):m(A)}this.translate.get(n,o).subscribe(m)}transform(n,...o){if(!n||!n.length)return n;if(ce(n,this.lastKey)&&ce(o,this.lastParams))return this.value;let f;if(xe(o[0])&&o.length)if("string"==typeof o[0]&&o[0].length){let m=o[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g,'"$2":').replace(/:(\s)?(\')(.*?)(\')/g,':"$3"');try{f=JSON.parse(m)}catch{throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${o[0]}`)}}else"object"==typeof o[0]&&!Array.isArray(o[0])&&(f=o[0]);return this.lastKey=n,this.lastParams=o,this.updateValue(n,f),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(m=>{this.lastKey&&m.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(n,f,m.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(m=>{this.lastKey&&(this.lastKey=null,this.updateValue(n,f,m.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(n,f))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(o){return new(o||d)(s.rXU(vi,16),s.rXU(s.gRc,16))};static \u0275pipe=s.EJ8({name:"translate",type:d,pure:!1});static \u0275prov=s.jDH({token:d,factory:d.\u0275fac})}return d})(),Ln=(()=>{class d{static forRoot(n={}){return{ngModule:d,providers:[n.loader||{provide:Ot,useClass:Ge},n.compiler||{provide:$e,useClass:Xe},n.parser||{provide:it,useClass:mt},n.missingTranslationHandler||{provide:fe,useClass:V},zt,{provide:tn,useValue:n.isolate},{provide:kn,useValue:n.useDefaultLang},{provide:Rn,useValue:n.extend},{provide:An,useValue:n.defaultLanguage},vi]}}static forChild(n={}){return{ngModule:d,providers:[n.loader||{provide:Ot,useClass:Ge},n.compiler||{provide:$e,useClass:Xe},n.parser||{provide:it,useClass:mt},n.missingTranslationHandler||{provide:fe,useClass:V},{provide:tn,useValue:n.isolate},{provide:kn,useValue:n.useDefaultLang},{provide:Rn,useValue:n.extend},{provide:An,useValue:n.defaultLanguage},vi]}}static \u0275fac=function(o){return new(o||d)};static \u0275mod=s.$C({type:d});static \u0275inj=s.G2t({})}return d})(),Pn=(()=>{class d{constructor(n,o){this.authService=n,this.router=o,this.imageTemplate="/assets/images/template.png",this.imageLogo="/assets/images/logo_Certum.png"}ngOnInit(){this.authService.instance.getActiveAccount()?this.router.navigate(["dashboard"]):(sessionStorage.clear(),localStorage.clear())}static#e=this.\u0275fac=function(o){return new(o||d)(s.rXU(Be),s.rXU(le.Ix))};static#t=this.\u0275cmp=s.VBU({type:d,selectors:[["app-home"]],standalone:!0,features:[s.aNF],decls:25,vars:18,consts:[[1,"row"],[1,"col"],[1,"my-2"],[1,"col-3","d-flex","justify-content-end"],["alt","certumLogo","src","./assets/images/template.png",1,"img-fluid"],[1,"row","text-center","py-5"],[1,"col","d-flex","flex-column","align-items-center"],[1,"text-center","text-muted","py-3","m-0"]],template:function(o,f){1&o&&(s.j41(0,"div",0)(1,"div",1)(2,"h1"),s.EFF(3),s.nI1(4,"translate"),s.k0s(),s.j41(5,"h5"),s.EFF(6),s.nI1(7,"translate"),s.k0s(),s.j41(8,"h5",2),s.EFF(9),s.nI1(10,"translate"),s.k0s()(),s.j41(11,"div",3),s.nrm(12,"img",4),s.k0s()(),s.j41(13,"div",5)(14,"div",6)(15,"p"),s.EFF(16),s.nI1(17,"translate"),s.k0s()(),s.j41(18,"div",6)(19,"p"),s.EFF(20),s.nI1(21,"translate"),s.k0s()()(),s.j41(22,"p",7),s.EFF(23),s.nI1(24,"translate"),s.k0s()),2&o&&(s.R7$(3),s.JRh(s.bMT(4,6,"homepage.hero_title")),s.R7$(3),s.JRh(s.bMT(7,8,"homepage.hero_subtitle")),s.R7$(3),s.JRh(s.bMT(10,10,"homepage.get_started_button")),s.R7$(7),s.JRh(s.bMT(17,12,"homepage.footer_website")),s.R7$(4),s.JRh(s.bMT(21,14,"homepage.footer_about_us")),s.R7$(3),s.SpI(" ",s.bMT(24,16,"homepage.footer_copyright"),"\n"))},dependencies:[Ln,fi],encapsulation:2})}return d})();var ti=h(3089);const Ii=[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"home",component:Pn},{path:"no-permissions",component:(()=>{class d{static#e=this.\u0275fac=function(o){return new(o||d)};static#t=this.\u0275cmp=s.VBU({type:d,selectors:[["app-no-permissions"]],standalone:!0,features:[s.aNF],decls:6,vars:0,consts:[[1,"container","mt-5"],["role","alert",1,"alert","alert-danger"],[1,"alert-heading"]],template:function(o,f){1&o&&(s.j41(0,"div",0)(1,"div",1)(2,"h4",2),s.EFF(3,"Permission Denied!"),s.k0s(),s.j41(4,"p"),s.EFF(5,"You do not have the required permissions to view this content."),s.k0s()()())},encapsulation:2})}return d})()},{path:"dashboard",component:(()=>{class d{static#e=this.\u0275fac=function(o){return new(o||d)};static#t=this.\u0275cmp=s.VBU({type:d,selectors:[["app-dashboard"]],standalone:!0,features:[s.aNF],decls:40,vars:0,consts:[[1,"container","mt-5"],[1,"row"],[1,"col"],[1,"card","h-100"],["alt","...","src","https://via.placeholder.com/300",1,"card-img"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["href","#",1,"btn","btn-primary"]],template:function(o,f){1&o&&(s.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),s.nrm(4,"img",4),s.j41(5,"div",5)(6,"h3",6),s.EFF(7,"Witaj,"),s.k0s(),s.j41(8,"p",7),s.EFF(9," Znajdujesz si\u0119 w serwisie, kt\xf3ry pomo\u017ce Ci w poprawieniu jako\u015bci Twojej pracy! "),s.k0s()()()(),s.j41(10,"div",2)(11,"div",3),s.nrm(12,"img",4),s.j41(13,"div",5)(14,"h5",6),s.EFF(15,"Ocena Pracownicza"),s.k0s(),s.j41(16,"p",7),s.EFF(17,"Zobacz wyniki oceny pracowniczej."),s.k0s(),s.j41(18,"a",8),s.EFF(19,"Przejd\u017a do oceny"),s.k0s()()()(),s.j41(20,"div",2)(21,"div",3),s.nrm(22,"img",4),s.j41(23,"div",5)(24,"h5",6),s.EFF(25,"Raporty"),s.k0s(),s.j41(26,"p",7),s.EFF(27," Generuj i przegl\u0105daj raporty dotycz\u0105ce wynik\xf3w oceny pracownik\xf3w. "),s.k0s(),s.j41(28,"a",8),s.EFF(29,"Przejd\u017a do raport\xf3w"),s.k0s()()()(),s.j41(30,"div",2)(31,"div",3),s.nrm(32,"img",4),s.j41(33,"div",5)(34,"h5",6),s.EFF(35,"Ustawienia"),s.k0s(),s.j41(36,"p",7),s.EFF(37," Dostosuj ustawienia aplikacji do swoich potrzeb. "),s.k0s(),s.j41(38,"a",8),s.EFF(39,"Przejd\u017a do ustawie\u0144"),s.k0s()()()()()())},encapsulation:2})}return d})()},{path:"browse-forms",loadChildren:()=>Promise.all([h.e(76),h.e(7)]).then(h.bind(h,7007)).then(d=>d.BROWSE_SURVEYS_ROUTES),canActivate:[et,ft.f8],data:{permissions:{only:[ti.X.user,ti.X.supervisor,ti.X.admin],redirectTo:"/no-permissions"}}},{path:"create-template",loadChildren:()=>Promise.all([h.e(76),h.e(967)]).then(h.bind(h,4967)).then(d=>d.CREATE_SURVEY_ROUTES),canActivate:[et,ft.f8],data:{permissions:{only:[ti.X.supervisor,ti.X.admin],redirectTo:"/no-permissions"}}},{path:"create-form/template/:templateId",loadChildren:()=>Promise.all([h.e(76),h.e(221)]).then(h.bind(h,7221)).then(d=>d.CREATE_FORM_ROUTES),canActivate:[et,ft.f8],data:{permissions:{only:[ti.X.supervisor,ti.X.admin],redirectTo:"/no-permissions"}}},{path:"create-form",loadChildren:()=>Promise.all([h.e(76),h.e(221)]).then(h.bind(h,7221)).then(d=>d.CREATE_FORM_ROUTES),canActivate:[et,ft.f8],data:{permissions:{only:[ti.X.supervisor,ti.X.admin],redirectTo:"/no-permissions"}}},{path:"fill-form/template/:templateId",loadChildren:()=>Promise.all([h.e(76),h.e(916)]).then(h.bind(h,4916)).then(d=>d.FILL_SURVEY_ROUTES),canActivate:[et,ft.f8],data:{permissions:{only:[ti.X.user,ti.X.supervisor,ti.X.admin],redirectTo:"/no-permissions"}}},{path:"fill-form/form/:formId/user/:userId",loadChildren:()=>Promise.all([h.e(76),h.e(916)]).then(h.bind(h,4916)).then(d=>d.FILL_SURVEY_ROUTES),canActivate:[et,ft.f8],data:{permissions:{only:[ti.X.user,ti.X.supervisor,ti.X.admin],redirectTo:"/no-permissions"}}},{path:"settings",loadChildren:()=>h.e(737).then(h.bind(h,3737)).then(d=>d.SETTINGS_ROUTES),canActivate:[et,ft.f8],data:{permissions:{only:[ti.X.admin],redirectTo:"/no-permissions"}}}];var un=h(9969);function pt(d){return new s.wOt(3e3,!1)}function ht(d){switch(d.length){case 0:return new un.sf;case 1:return d[0];default:return new un.ui(d)}}function vt(d,c,n=new Map,o=new Map){const f=[],m=[];let A=-1,F=null;if(c.forEach(ae=>{const Se=ae.get("offset"),Me=Se==A,We=Me&&F||new Map;ae.forEach((Vt,Yt)=>{let rn=Yt,bn=Vt;if("offset"!==Yt)switch(rn=d.normalizePropertyName(rn,f),bn){case un.FX:bn=n.get(Yt);break;case un.kp:bn=o.get(Yt);break;default:bn=d.normalizeStyleValue(Yt,rn,bn,f)}We.set(rn,bn)}),Me||m.push(We),F=We,A=Se}),f.length)throw function Cn(d){return new s.wOt(3502,!1)}();return m}function Ie(d,c,n,o){switch(c){case"start":d.onStart(()=>o(n&&je(n,"start",d)));break;case"done":d.onDone(()=>o(n&&je(n,"done",d)));break;case"destroy":d.onDestroy(()=>o(n&&je(n,"destroy",d)))}}function je(d,c,n){const m=Ze(d.element,d.triggerName,d.fromState,d.toState,c||d.phaseName,n.totalTime??d.totalTime,!!n.disabled),A=d._data;return null!=A&&(m._data=A),m}function Ze(d,c,n,o,f="",m=0,A){return{element:d,triggerName:c,fromState:n,toState:o,phaseName:f,totalTime:m,disabled:!!A}}function dt(d,c,n){let o=d.get(c);return o||d.set(c,o=n),o}function Gt(d){const c=d.indexOf(":");return[d.substring(1,c),d.slice(c+1)]}const Jt=typeof document>"u"?null:document.documentElement;function an(d){const c=d.parentNode||d.host||null;return c===Jt?null:c}let pn=null,Ci=!1;function Er(d,c){for(;c;){if(c===d)return!0;c=an(c)}return!1}function Fn(d,c,n){if(n)return Array.from(d.querySelectorAll(c));const o=d.querySelector(c);return o?[o]:[]}let p=(()=>{class d{validateStyleProperty(n){return function wi(d){pn||(pn=function Ur(){return typeof document<"u"?document.body:null}()||{},Ci=!!pn.style&&"WebkitAppearance"in pn.style);let c=!0;return pn.style&&!function wn(d){return"ebkit"==d.substring(1,6)}(d)&&(c=d in pn.style,!c&&Ci&&(c="Webkit"+d.charAt(0).toUpperCase()+d.slice(1)in pn.style)),c}(n)}matchesElement(n,o){return!1}containsElement(n,o){return Er(n,o)}getParentElement(n){return an(n)}query(n,o,f){return Fn(n,o,f)}computeStyle(n,o,f){return f||""}animate(n,o,f,m,A,F=[],ae){return new un.sf(f,m)}static#e=this.\u0275fac=function(o){return new(o||d)};static#t=this.\u0275prov=s.jDH({token:d,factory:d.\u0275fac})}return d})();class g{static#e=this.NOOP=new p}class C{}const me=1e3,It="ng-enter",Ut="ng-leave",$t="ng-trigger",fn=".ng-trigger",_n="ng-animating",Bn=".ng-animating";function oi(d){if("number"==typeof d)return d;const c=d.match(/^(-?[\.\d]+)(m?s)/);return!c||c.length<2?0:_i(parseFloat(c[1]),c[2])}function _i(d,c){return"s"===c?d*me:d}function xi(d,c,n){return d.hasOwnProperty("duration")?d:function Tr(d,c,n){let f,m=0,A="";if("string"==typeof d){const F=d.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);if(null===F)return c.push(pt()),{duration:0,delay:0,easing:""};f=_i(parseFloat(F[1]),F[2]);const ae=F[3];null!=ae&&(m=_i(parseFloat(ae),F[4]));const Se=F[5];Se&&(A=Se)}else f=d;if(!n){let F=!1,ae=c.length;f<0&&(c.push(function Et(){return new s.wOt(3100,!1)}()),F=!0),m<0&&(c.push(function qe(){return new s.wOt(3101,!1)}()),F=!0),F&&c.splice(ae,0,pt())}return{duration:f,delay:m,easing:A}}(d,c,n)}function rr(d,c,n){c.forEach((o,f)=>{const m=Co(f);n&&!n.has(f)&&n.set(f,d.style[m]),d.style[m]=o})}function Yi(d,c){c.forEach((n,o)=>{const f=Co(o);d.style[f]=""})}function Ro(d){return Array.isArray(d)?1==d.length?d[0]:(0,un.K2)(d):d}const Yo=new RegExp("{{\\s*(.+?)\\s*}}","g");function Ki(d){let c=[];if("string"==typeof d){let n;for(;n=Yo.exec(d);)c.push(n[1]);Yo.lastIndex=0}return c}function ho(d,c,n){const o=`${d}`,f=o.replace(Yo,(m,A)=>{let F=c[A];return null==F&&(n.push(function Kt(d){return new s.wOt(3003,!1)}()),F=""),F.toString()});return f==o?d:f}const zn=/-+([a-z0-9])/g;function Co(d){return d.replace(zn,(...c)=>c[1].toUpperCase())}function Hr(d,c,n){switch(c.type){case un.If.Trigger:return d.visitTrigger(c,n);case un.If.State:return d.visitState(c,n);case un.If.Transition:return d.visitTransition(c,n);case un.If.Sequence:return d.visitSequence(c,n);case un.If.Group:return d.visitGroup(c,n);case un.If.Animate:return d.visitAnimate(c,n);case un.If.Keyframes:return d.visitKeyframes(c,n);case un.If.Style:return d.visitStyle(c,n);case un.If.Reference:return d.visitReference(c,n);case un.If.AnimateChild:return d.visitAnimateChild(c,n);case un.If.AnimateRef:return d.visitAnimateRef(c,n);case un.If.Query:return d.visitQuery(c,n);case un.If.Stagger:return d.visitStagger(c,n);default:throw function hn(d){return new s.wOt(3004,!1)}()}}function Xs(d,c){return window.getComputedStyle(d)[c]}const Zs=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]);class Qr extends C{normalizePropertyName(c,n){return Co(c)}normalizeStyleValue(c,n,o,f){let m="";const A=o.toString().trim();if(Zs.has(n)&&0!==o&&"0"!==o)if("number"==typeof o)m="px";else{const F=o.match(/^[+-]?[\d\.]+([a-z]*)$/);F&&0==F[1].length&&f.push(function In(d,c){return new s.wOt(3005,!1)}())}return A+m}}const Ar="*";const Ps=new Set(["true","1"]),Ho=new Set(["false","0"]);function ba(d,c){const n=Ps.has(d)||Ho.has(d),o=Ps.has(c)||Ho.has(c);return(f,m)=>{let A=d==Ar||d==f,F=c==Ar||c==m;return!A&&n&&"boolean"==typeof f&&(A=f?Ps.has(d):Ho.has(d)),!F&&o&&"boolean"==typeof m&&(F=m?Ps.has(c):Ho.has(c)),A&&F}}const Mi=new RegExp("s*:selfs*,?","g");function es(d,c,n,o){return new Bl(d).build(c,n,o)}class Bl{constructor(c){this._driver=c}build(c,n,o){const f=new hi(n);return this._resetContextStyleTimingState(f),Hr(this,Ro(c),f)}_resetContextStyleTimingState(c){c.currentQuerySelector="",c.collectedStyles=new Map,c.collectedStyles.set("",new Map),c.currentTime=0}visitTrigger(c,n){let o=n.queryCount=0,f=n.depCount=0;const m=[],A=[];return"@"==c.name.charAt(0)&&n.errors.push(function ni(){return new s.wOt(3006,!1)}()),c.definitions.forEach(F=>{if(this._resetContextStyleTimingState(n),F.type==un.If.State){const ae=F,Se=ae.name;Se.toString().split(/\s*,\s*/).forEach(Me=>{ae.name=Me,m.push(this.visitState(ae,n))}),ae.name=Se}else if(F.type==un.If.Transition){const ae=this.visitTransition(F,n);o+=ae.queryCount,f+=ae.depCount,A.push(ae)}else n.errors.push(function At(){return new s.wOt(3007,!1)}())}),{type:un.If.Trigger,name:c.name,states:m,transitions:A,queryCount:o,depCount:f,options:null}}visitState(c,n){const o=this.visitStyle(c.styles,n),f=c.options&&c.options.params||null;if(o.containsDynamicStyles){const m=new Set,A=f||{};o.styles.forEach(F=>{F instanceof Map&&F.forEach(ae=>{Ki(ae).forEach(Se=>{A.hasOwnProperty(Se)||m.add(Se)})})}),m.size&&n.errors.push(function yi(d,c){return new s.wOt(3008,!1)}(0,m.values()))}return{type:un.If.State,name:c.name,style:o,options:f?{params:f}:null}}visitTransition(c,n){n.queryCount=0,n.depCount=0;const o=Hr(this,Ro(c.animation),n),f=function Jo(d,c){const n=[];return"string"==typeof d?d.split(/\s*,\s*/).forEach(o=>function Bo(d,c,n){if(":"==d[0]){const ae=function io(d,c){switch(d){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(n,o)=>parseFloat(o)>parseFloat(n);case":decrement":return(n,o)=>parseFloat(o)<parseFloat(n);default:return c.push(function Wt(d){return new s.wOt(3016,!1)}()),"* => *"}}(d,n);if("function"==typeof ae)return void c.push(ae);d=ae}const o=d.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==o||o.length<4)return n.push(function jt(d){return new s.wOt(3015,!1)}()),c;const f=o[1],m=o[2],A=o[3];c.push(ba(f,A)),"<"==m[0]&&(f!=Ar||A!=Ar)&&c.push(ba(A,f))}(o,n,c)):n.push(d),n}(c.expr,n.errors);return{type:un.If.Transition,matchers:f,animation:o,queryCount:n.queryCount,depCount:n.depCount,options:po(c.options)}}visitSequence(c,n){return{type:un.If.Sequence,steps:c.steps.map(o=>Hr(this,o,n)),options:po(c.options)}}visitGroup(c,n){const o=n.currentTime;let f=0;const m=c.steps.map(A=>{n.currentTime=o;const F=Hr(this,A,n);return f=Math.max(f,n.currentTime),F});return n.currentTime=f,{type:un.If.Group,steps:m,options:po(c.options)}}visitAnimate(c,n){const o=function ul(d,c){if(d.hasOwnProperty("duration"))return d;if("number"==typeof d)return Mr(xi(d,c).duration,0,"");const n=d;if(n.split(/\s+/).some(m=>"{"==m.charAt(0)&&"{"==m.charAt(1))){const m=Mr(0,0,"");return m.dynamic=!0,m.strValue=n,m}const f=xi(n,c);return Mr(f.duration,f.delay,f.easing)}(c.timings,n.errors);n.currentAnimateTimings=o;let f,m=c.styles?c.styles:(0,un.iF)({});if(m.type==un.If.Keyframes)f=this.visitKeyframes(m,n);else{let A=c.styles,F=!1;if(!A){F=!0;const Se={};o.easing&&(Se.easing=o.easing),A=(0,un.iF)(Se)}n.currentTime+=o.duration+o.delay;const ae=this.visitStyle(A,n);ae.isEmptyStep=F,f=ae}return n.currentAnimateTimings=null,{type:un.If.Animate,timings:o,style:f,options:null}}visitStyle(c,n){const o=this._makeStyleAst(c,n);return this._validateStyleAst(o,n),o}_makeStyleAst(c,n){const o=[],f=Array.isArray(c.styles)?c.styles:[c.styles];for(let F of f)"string"==typeof F?F===un.kp?o.push(F):n.errors.push(new s.wOt(3002,!1)):o.push(new Map(Object.entries(F)));let m=!1,A=null;return o.forEach(F=>{if(F instanceof Map&&(F.has("easing")&&(A=F.get("easing"),F.delete("easing")),!m))for(let ae of F.values())if(ae.toString().indexOf("{{")>=0){m=!0;break}}),{type:un.If.Style,styles:o,easing:A,offset:c.offset,containsDynamicStyles:m,options:null}}_validateStyleAst(c,n){const o=n.currentAnimateTimings;let f=n.currentTime,m=n.currentTime;o&&m>0&&(m-=o.duration+o.delay),c.styles.forEach(A=>{"string"!=typeof A&&A.forEach((F,ae)=>{const Se=n.collectedStyles.get(n.currentQuerySelector),Me=Se.get(ae);let We=!0;Me&&(m!=f&&m>=Me.startTime&&f<=Me.endTime&&(n.errors.push(function Zi(d,c,n,o,f){return new s.wOt(3010,!1)}()),We=!1),m=Me.startTime),We&&Se.set(ae,{startTime:m,endTime:f}),n.options&&function ci(d,c,n){const o=c.params||{},f=Ki(d);f.length&&f.forEach(m=>{o.hasOwnProperty(m)||n.push(function gt(d){return new s.wOt(3001,!1)}())})}(F,n.options,n.errors)})})}visitKeyframes(c,n){const o={type:un.If.Keyframes,styles:[],options:null};if(!n.currentAnimateTimings)return n.errors.push(function Wr(){return new s.wOt(3011,!1)}()),o;let m=0;const A=[];let F=!1,ae=!1,Se=0;const Me=c.steps.map(Ni=>{const Hi=this._makeStyleAst(Ni,n);let hr=null!=Hi.offset?Hi.offset:function Oo(d){if("string"==typeof d)return null;let c=null;if(Array.isArray(d))d.forEach(n=>{if(n instanceof Map&&n.has("offset")){const o=n;c=parseFloat(o.get("offset")),o.delete("offset")}});else if(d instanceof Map&&d.has("offset")){const n=d;c=parseFloat(n.get("offset")),n.delete("offset")}return c}(Hi.styles),Vi=0;return null!=hr&&(m++,Vi=Hi.offset=hr),ae=ae||Vi<0||Vi>1,F=F||Vi<Se,Se=Vi,A.push(Vi),Hi});ae&&n.errors.push(function Kr(){return new s.wOt(3012,!1)}()),F&&n.errors.push(function Bt(){return new s.wOt(3200,!1)}());const We=c.steps.length;let Vt=0;m>0&&m<We?n.errors.push(function yt(){return new s.wOt(3202,!1)}()):0==m&&(Vt=1/(We-1));const Yt=We-1,rn=n.currentTime,bn=n.currentAnimateTimings,ai=bn.duration;return Me.forEach((Ni,Hi)=>{const hr=Vt>0?Hi==Yt?1:Vt*Hi:A[Hi],Vi=hr*ai;n.currentTime=rn+bn.delay+Vi,bn.duration=Vi,this._validateStyleAst(Ni,n),Ni.offset=hr,o.styles.push(Ni)}),o}visitReference(c,n){return{type:un.If.Reference,animation:Hr(this,Ro(c.animation),n),options:po(c.options)}}visitAnimateChild(c,n){return n.depCount++,{type:un.If.AnimateChild,options:po(c.options)}}visitAnimateRef(c,n){return{type:un.If.AnimateRef,animation:this.visitReference(c.animation,n),options:po(c.options)}}visitQuery(c,n){const o=n.currentQuerySelector,f=c.options||{};n.queryCount++,n.currentQuery=c;const[m,A]=function dl(d){const c=!!d.split(/\s*,\s*/).find(n=>":self"==n);return c&&(d=d.replace(Mi,"")),d=d.replace(/@\*/g,fn).replace(/@\w+/g,n=>fn+"-"+n.slice(1)).replace(/:animating/g,Bn),[d,c]}(c.selector);n.currentQuerySelector=o.length?o+" "+m:m,dt(n.collectedStyles,n.currentQuerySelector,new Map);const F=Hr(this,Ro(c.animation),n);return n.currentQuery=null,n.currentQuerySelector=o,{type:un.If.Query,selector:m,limit:f.limit||0,optional:!!f.optional,includeSelf:A,animation:F,originalSelector:c.selector,options:po(c.options)}}visitStagger(c,n){n.currentQuery||n.errors.push(function Ne(){return new s.wOt(3013,!1)}());const o="full"===c.timings?{duration:0,delay:0,easing:"full"}:xi(c.timings,n.errors,!0);return{type:un.If.Stagger,animation:Hr(this,Ro(c.animation),n),timings:o,options:null}}}class hi{constructor(c){this.errors=c,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles=new Map,this.options=null,this.unsupportedCSSPropertiesFound=new Set}}function po(d){return d?(d={...d}).params&&(d.params=function Rr(d){return d?{...d}:null}(d.params)):d={},d}function Mr(d,c,n){return{duration:d,delay:c,easing:n}}function wo(d,c,n,o,f,m,A=null,F=!1){return{type:1,element:d,keyframes:c,preStyleProps:n,postStyleProps:o,duration:f,delay:m,totalTime:f+m,easing:A,subTimeline:F}}class _o{constructor(){this._map=new Map}get(c){return this._map.get(c)||[]}append(c,n){let o=this._map.get(c);o||this._map.set(c,o=[]),o.push(...n)}has(c){return this._map.has(c)}clear(){this._map.clear()}}const ro=new RegExp(":enter","g"),Ee=new RegExp(":leave","g");function K(d,c,n,o,f,m=new Map,A=new Map,F,ae,Se=[]){return(new Oe).buildKeyframes(d,c,n,o,f,m,A,F,ae,Se)}class Oe{buildKeyframes(c,n,o,f,m,A,F,ae,Se,Me=[]){Se=Se||new _o;const We=new En(c,n,Se,f,m,Me,[]);We.options=ae;const Vt=ae.delay?oi(ae.delay):0;We.currentTimeline.delayNextStep(Vt),We.currentTimeline.setStyles([A],null,We.errors,ae),Hr(this,o,We);const Yt=We.timelines.filter(rn=>rn.containsAnimation());if(Yt.length&&F.size){let rn;for(let bn=Yt.length-1;bn>=0;bn--){const ai=Yt[bn];if(ai.element===n){rn=ai;break}}rn&&!rn.allowOnlyTimelineStyles()&&rn.setStyles([F],null,We.errors,ae)}return Yt.length?Yt.map(rn=>rn.buildKeyframes()):[wo(n,[],[],[],0,Vt,"",!1)]}visitTrigger(c,n){}visitState(c,n){}visitTransition(c,n){}visitAnimateChild(c,n){const o=n.subInstructions.get(n.element);if(o){const f=n.createSubContext(c.options),m=n.currentTimeline.currentTime,A=this._visitSubInstructions(o,f,f.options);m!=A&&n.transformIntoNewTimeline(A)}n.previousNode=c}visitAnimateRef(c,n){const o=n.createSubContext(c.options);o.transformIntoNewTimeline(),this._applyAnimationRefDelays([c.options,c.animation.options],n,o),this.visitReference(c.animation,o),n.transformIntoNewTimeline(o.currentTimeline.currentTime),n.previousNode=c}_applyAnimationRefDelays(c,n,o){for(const f of c){const m=f?.delay;if(m){const A="number"==typeof m?m:oi(ho(m,f?.params??{},n.errors));o.delayNextStep(A)}}}_visitSubInstructions(c,n,o){let m=n.currentTimeline.currentTime;const A=null!=o.duration?oi(o.duration):null,F=null!=o.delay?oi(o.delay):null;return 0!==A&&c.forEach(ae=>{const Se=n.appendInstructionToTimeline(ae,A,F);m=Math.max(m,Se.duration+Se.delay)}),m}visitReference(c,n){n.updateOptions(c.options,!0),Hr(this,c.animation,n),n.previousNode=c}visitSequence(c,n){const o=n.subContextCount;let f=n;const m=c.options;if(m&&(m.params||m.delay)&&(f=n.createSubContext(m),f.transformIntoNewTimeline(),null!=m.delay)){f.previousNode.type==un.If.Style&&(f.currentTimeline.snapshotCurrentStyles(),f.previousNode=lt);const A=oi(m.delay);f.delayNextStep(A)}c.steps.length&&(c.steps.forEach(A=>Hr(this,A,f)),f.currentTimeline.applyStylesToKeyframe(),f.subContextCount>o&&f.transformIntoNewTimeline()),n.previousNode=c}visitGroup(c,n){const o=[];let f=n.currentTimeline.currentTime;const m=c.options&&c.options.delay?oi(c.options.delay):0;c.steps.forEach(A=>{const F=n.createSubContext(c.options);m&&F.delayNextStep(m),Hr(this,A,F),f=Math.max(f,F.currentTimeline.currentTime),o.push(F.currentTimeline)}),o.forEach(A=>n.currentTimeline.mergeTimelineCollectedStyles(A)),n.transformIntoNewTimeline(f),n.previousNode=c}_visitTiming(c,n){if(c.dynamic){const o=c.strValue;return xi(n.params?ho(o,n.params,n.errors):o,n.errors)}return{duration:c.duration,delay:c.delay,easing:c.easing}}visitAnimate(c,n){const o=n.currentAnimateTimings=this._visitTiming(c.timings,n),f=n.currentTimeline;o.delay&&(n.incrementTime(o.delay),f.snapshotCurrentStyles());const m=c.style;m.type==un.If.Keyframes?this.visitKeyframes(m,n):(n.incrementTime(o.duration),this.visitStyle(m,n),f.applyStylesToKeyframe()),n.currentAnimateTimings=null,n.previousNode=c}visitStyle(c,n){const o=n.currentTimeline,f=n.currentAnimateTimings;!f&&o.hasCurrentStyleProperties()&&o.forwardFrame();const m=f&&f.easing||c.easing;c.isEmptyStep?o.applyEmptyStep(m):o.setStyles(c.styles,m,n.errors,n.options),n.previousNode=c}visitKeyframes(c,n){const o=n.currentAnimateTimings,f=n.currentTimeline.duration,m=o.duration,F=n.createSubContext().currentTimeline;F.easing=o.easing,c.styles.forEach(ae=>{F.forwardTime((ae.offset||0)*m),F.setStyles(ae.styles,ae.easing,n.errors,n.options),F.applyStylesToKeyframe()}),n.currentTimeline.mergeTimelineCollectedStyles(F),n.transformIntoNewTimeline(f+m),n.previousNode=c}visitQuery(c,n){const o=n.currentTimeline.currentTime,f=c.options||{},m=f.delay?oi(f.delay):0;m&&(n.previousNode.type===un.If.Style||0==o&&n.currentTimeline.hasCurrentStyleProperties())&&(n.currentTimeline.snapshotCurrentStyles(),n.previousNode=lt);let A=o;const F=n.invokeQuery(c.selector,c.originalSelector,c.limit,c.includeSelf,!!f.optional,n.errors);n.currentQueryTotal=F.length;let ae=null;F.forEach((Se,Me)=>{n.currentQueryIndex=Me;const We=n.createSubContext(c.options,Se);m&&We.delayNextStep(m),Se===n.element&&(ae=We.currentTimeline),Hr(this,c.animation,We),We.currentTimeline.applyStylesToKeyframe(),A=Math.max(A,We.currentTimeline.currentTime)}),n.currentQueryIndex=0,n.currentQueryTotal=0,n.transformIntoNewTimeline(A),ae&&(n.currentTimeline.mergeTimelineCollectedStyles(ae),n.currentTimeline.snapshotCurrentStyles()),n.previousNode=c}visitStagger(c,n){const o=n.parentContext,f=n.currentTimeline,m=c.timings,A=Math.abs(m.duration),F=A*(n.currentQueryTotal-1);let ae=A*n.currentQueryIndex;switch(m.duration<0?"reverse":m.easing){case"reverse":ae=F-ae;break;case"full":ae=o.currentStaggerTime}const Me=n.currentTimeline;ae&&Me.delayNextStep(ae);const We=Me.currentTime;Hr(this,c.animation,n),n.previousNode=c,o.currentStaggerTime=f.currentTime-We+(f.startTime-o.currentTimeline.startTime)}}const lt={};class En{constructor(c,n,o,f,m,A,F,ae){this._driver=c,this.element=n,this.subInstructions=o,this._enterClassName=f,this._leaveClassName=m,this.errors=A,this.timelines=F,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=lt,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=ae||new Gn(this._driver,n,0),F.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(c,n){if(!c)return;const o=c;let f=this.options;null!=o.duration&&(f.duration=oi(o.duration)),null!=o.delay&&(f.delay=oi(o.delay));const m=o.params;if(m){let A=f.params;A||(A=this.options.params={}),Object.keys(m).forEach(F=>{(!n||!A.hasOwnProperty(F))&&(A[F]=ho(m[F],A,this.errors))})}}_copyOptions(){const c={};if(this.options){const n=this.options.params;if(n){const o=c.params={};Object.keys(n).forEach(f=>{o[f]=n[f]})}}return c}createSubContext(c=null,n,o){const f=n||this.element,m=new En(this._driver,f,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(f,o||0));return m.previousNode=this.previousNode,m.currentAnimateTimings=this.currentAnimateTimings,m.options=this._copyOptions(),m.updateOptions(c),m.currentQueryIndex=this.currentQueryIndex,m.currentQueryTotal=this.currentQueryTotal,m.parentContext=this,this.subContextCount++,m}transformIntoNewTimeline(c){return this.previousNode=lt,this.currentTimeline=this.currentTimeline.fork(this.element,c),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(c,n,o){const f={duration:n??c.duration,delay:this.currentTimeline.currentTime+(o??0)+c.delay,easing:""},m=new oo(this._driver,c.element,c.keyframes,c.preStyleProps,c.postStyleProps,f,c.stretchStartingKeyframe);return this.timelines.push(m),f}incrementTime(c){this.currentTimeline.forwardTime(this.currentTimeline.duration+c)}delayNextStep(c){c>0&&this.currentTimeline.delayNextStep(c)}invokeQuery(c,n,o,f,m,A){let F=[];if(f&&F.push(this.element),c.length>0){c=(c=c.replace(ro,"."+this._enterClassName)).replace(Ee,"."+this._leaveClassName);let Se=this._driver.query(this.element,c,1!=o);0!==o&&(Se=o<0?Se.slice(Se.length+o,Se.length):Se.slice(0,o)),F.push(...Se)}return!m&&0==F.length&&A.push(function st(d){return new s.wOt(3014,!1)}()),F}}class Gn{constructor(c,n,o,f){this._driver=c,this.element=n,this.startTime=o,this._elementTimelineStylesLookup=f,this.duration=0,this.easing=null,this._previousKeyframe=new Map,this._currentKeyframe=new Map,this._keyframes=new Map,this._styleSummary=new Map,this._localTimelineStyles=new Map,this._pendingStyles=new Map,this._backFill=new Map,this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(n),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(n,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(c){const n=1===this._keyframes.size&&this._pendingStyles.size;this.duration||n?(this.forwardTime(this.currentTime+c),n&&this.snapshotCurrentStyles()):this.startTime+=c}fork(c,n){return this.applyStylesToKeyframe(),new Gn(this._driver,c,n||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=1,this._loadKeyframe()}forwardTime(c){this.applyStylesToKeyframe(),this.duration=c,this._loadKeyframe()}_updateStyle(c,n){this._localTimelineStyles.set(c,n),this._globalTimelineStyles.set(c,n),this._styleSummary.set(c,{time:this.currentTime,value:n})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(c){c&&this._previousKeyframe.set("easing",c);for(let[n,o]of this._globalTimelineStyles)this._backFill.set(n,o||un.kp),this._currentKeyframe.set(n,un.kp);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(c,n,o,f){n&&this._previousKeyframe.set("easing",n);const m=f&&f.params||{},A=function yr(d,c){const n=new Map;let o;return d.forEach(f=>{if("*"===f){o??=c.keys();for(let m of o)n.set(m,un.kp)}else for(let[m,A]of f)n.set(m,A)}),n}(c,this._globalTimelineStyles);for(let[F,ae]of A){const Se=ho(ae,m,o);this._pendingStyles.set(F,Se),this._localTimelineStyles.has(F)||this._backFill.set(F,this._globalTimelineStyles.get(F)??un.kp),this._updateStyle(F,Se)}}applyStylesToKeyframe(){0!=this._pendingStyles.size&&(this._pendingStyles.forEach((c,n)=>{this._currentKeyframe.set(n,c)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((c,n)=>{this._currentKeyframe.has(n)||this._currentKeyframe.set(n,c)}))}snapshotCurrentStyles(){for(let[c,n]of this._localTimelineStyles)this._pendingStyles.set(c,n),this._updateStyle(c,n)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){const c=[];for(let n in this._currentKeyframe)c.push(n);return c}mergeTimelineCollectedStyles(c){c._styleSummary.forEach((n,o)=>{const f=this._styleSummary.get(o);(!f||n.time>f.time)&&this._updateStyle(o,n.value)})}buildKeyframes(){this.applyStylesToKeyframe();const c=new Set,n=new Set,o=1===this._keyframes.size&&0===this.duration;let f=[];this._keyframes.forEach((F,ae)=>{const Se=new Map([...this._backFill,...F]);Se.forEach((Me,We)=>{Me===un.FX?c.add(We):Me===un.kp&&n.add(We)}),o||Se.set("offset",ae/this.duration),f.push(Se)});const m=[...c.values()],A=[...n.values()];if(o){const F=f[0],ae=new Map(F);F.set("offset",0),ae.set("offset",1),f=[F,ae]}return wo(this.element,f,m,A,this.duration,this.startTime,this.easing,!1)}}class oo extends Gn{constructor(c,n,o,f,m,A,F=!1){super(c,n,A.delay),this.keyframes=o,this.preStyleProps=f,this.postStyleProps=m,this._stretchStartingKeyframe=F,this.timings={duration:A.duration,delay:A.delay,easing:A.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let c=this.keyframes,{delay:n,duration:o,easing:f}=this.timings;if(this._stretchStartingKeyframe&&n){const m=[],A=o+n,F=n/A,ae=new Map(c[0]);ae.set("offset",0),m.push(ae);const Se=new Map(c[0]);Se.set("offset",go(F)),m.push(Se);const Me=c.length-1;for(let We=1;We<=Me;We++){let Vt=new Map(c[We]);const Yt=Vt.get("offset");Vt.set("offset",go((n+Yt*o)/A)),m.push(Vt)}o=A,n=0,f="",c=m}return wo(this.element,c,this.preStyleProps,this.postStyleProps,o,n,f,!0)}}function go(d,c=3){const n=Math.pow(10,c-1);return Math.round(d*n)/n}function Hl(d,c,n,o,f,m,A,F,ae,Se,Me,We,Vt){return{type:0,element:d,triggerName:c,isRemovalTransition:f,fromState:n,fromStyles:m,toState:o,toStyles:A,timelines:F,queriedElements:ae,preStyleProps:Se,postStyleProps:Me,totalTime:We,errors:Vt}}const hl={};class fl{constructor(c,n,o){this._triggerName=c,this.ast=n,this._stateStyles=o}match(c,n,o,f){return function zi(d,c,n,o,f){return d.some(m=>m(c,n,o,f))}(this.ast.matchers,c,n,o,f)}buildStyles(c,n,o){let f=this._stateStyles.get("*");return void 0!==c&&(f=this._stateStyles.get(c?.toString())||f),f?f.buildStyles(n,o):new Map}build(c,n,o,f,m,A,F,ae,Se,Me){const We=[],Vt=this.ast.options&&this.ast.options.params||hl,rn=this.buildStyles(o,F&&F.params||hl,We),bn=ae&&ae.params||hl,ai=this.buildStyles(f,bn,We),Ni=new Set,Hi=new Map,hr=new Map,Vi="void"===f,ma={params:ea(bn,Vt),delay:this.ast.options?.delay},to=Me?[]:K(c,n,this.ast.animation,m,A,rn,ai,ma,Se,We);let no=0;return to.forEach(ps=>{no=Math.max(ps.duration+ps.delay,no)}),We.length?Hl(n,this._triggerName,o,f,Vi,rn,ai,[],[],Hi,hr,no,We):(to.forEach(ps=>{const hc=ps.element,fc=dt(Hi,hc,new Set);ps.preStyleProps.forEach(al=>fc.add(al));const Mf=dt(hr,hc,new Set);ps.postStyleProps.forEach(al=>Mf.add(al)),hc!==n&&Ni.add(hc)}),Hl(n,this._triggerName,o,f,Vi,rn,ai,to,[...Ni.values()],Hi,hr,no))}}function ea(d,c){const n={...c};return Object.entries(d).forEach(([o,f])=>{null!=f&&(n[o]=f)}),n}class Vl{constructor(c,n,o){this.styles=c,this.defaultParams=n,this.normalizer=o}buildStyles(c,n){const o=new Map,f=ea(c,this.defaultParams);return this.styles.styles.forEach(m=>{"string"!=typeof m&&m.forEach((A,F)=>{A&&(A=ho(A,f,n));const ae=this.normalizer.normalizePropertyName(F,n);A=this.normalizer.normalizeStyleValue(F,ae,A,n),o.set(F,A)})}),o}}class jl{constructor(c,n,o){this.name=c,this.ast=n,this._normalizer=o,this.transitionFactories=[],this.states=new Map,n.states.forEach(f=>{this.states.set(f.name,new Vl(f.style,f.options&&f.options.params||{},o))}),ns(this.states,"true","1"),ns(this.states,"false","0"),n.transitions.forEach(f=>{this.transitionFactories.push(new fl(c,f,this.states))}),this.fallbackTransition=function vc(d,c,n){return new fl(d,{type:un.If.Transition,animation:{type:un.If.Sequence,steps:[],options:null},matchers:[(A,F)=>!0],options:null,queryCount:0,depCount:0},c)}(c,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(c,n,o,f){return this.transitionFactories.find(A=>A.match(c,n,o,f))||null}matchStyles(c,n,o){return this.fallbackTransition.buildStyles(c,n,o)}}function ns(d,c,n){d.has(c)?d.has(n)||d.set(n,d.get(c)):d.has(n)&&d.set(c,d.get(n))}const pl=new _o;class Ls{constructor(c,n,o){this.bodyNode=c,this._driver=n,this._normalizer=o,this._animations=new Map,this._playersById=new Map,this.players=[]}register(c,n){const o=[],m=es(this._driver,n,o,[]);if(o.length)throw function Dn(d){return new s.wOt(3503,!1)}();this._animations.set(c,m)}_buildPlayer(c,n,o){const f=c.element,m=vt(this._normalizer,c.keyframes,n,o);return this._driver.animate(f,m,c.duration,c.delay,c.easing,[],!0)}create(c,n,o={}){const f=[],m=this._animations.get(c);let A;const F=new Map;if(m?(A=K(this._driver,n,m,It,Ut,new Map,new Map,o,pl,f),A.forEach(Me=>{const We=dt(F,Me.element,new Map);Me.postStyleProps.forEach(Vt=>We.set(Vt,null))})):(f.push(function ui(){return new s.wOt(3300,!1)}()),A=[]),f.length)throw function Fi(d){return new s.wOt(3504,!1)}();F.forEach((Me,We)=>{Me.forEach((Vt,Yt)=>{Me.set(Yt,this._driver.computeStyle(We,Yt,un.kp))})});const Se=ht(A.map(Me=>{const We=F.get(Me.element);return this._buildPlayer(Me,new Map,We)}));return this._playersById.set(c,Se),Se.onDestroy(()=>this.destroy(c)),this.players.push(Se),Se}destroy(c){const n=this._getPlayer(c);n.destroy(),this._playersById.delete(c);const o=this.players.indexOf(n);o>=0&&this.players.splice(o,1)}_getPlayer(c){const n=this._playersById.get(c);if(!n)throw function Ri(d){return new s.wOt(3301,!1)}();return n}listen(c,n,o,f){const m=Ze(n,"","","");return Ie(this._getPlayer(c),o,m,f),()=>{}}command(c,n,o,f){if("register"==o)return void this.register(c,f[0]);if("create"==o)return void this.create(c,n,f[0]||{});const m=this._getPlayer(c);switch(o){case"play":m.play();break;case"pause":m.pause();break;case"reset":m.reset();break;case"restart":m.restart();break;case"finish":m.finish();break;case"init":m.init();break;case"setPosition":m.setPosition(parseFloat(f[0]));break;case"destroy":this.destroy(c)}}}const gl="ng-animate-queued",Fs="ng-animate-disabled",cr=[],Or={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},Pr={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},Eo="__ng_removed";class ta{get params(){return this.options.params}constructor(c,n=""){this.namespaceId=n;const o=c&&c.hasOwnProperty("value");if(this.value=function vl(d){return d??null}(o?c.value:c),o){const{value:m,...A}=c;this.options=A}else this.options={};this.options.params||(this.options.params={})}absorbOptions(c){const n=c.params;if(n){const o=this.options.params;Object.keys(n).forEach(f=>{null==o[f]&&(o[f]=n[f])})}}}const is="void",za=new ta(is);class Ga{constructor(c,n,o){this.id=c,this.hostElement=n,this._engine=o,this.players=[],this._triggers=new Map,this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+c,Po(n,this._hostClassName)}listen(c,n,o,f){if(!this._triggers.has(n))throw function Di(d,c){return new s.wOt(3302,!1)}();if(null==o||0==o.length)throw function He(d){return new s.wOt(3303,!1)}();if(!function yl(d){return"start"==d||"done"==d}(o))throw function ot(d,c){return new s.wOt(3400,!1)}();const m=dt(this._elementListeners,c,[]),A={name:n,phase:o,callback:f};m.push(A);const F=dt(this._engine.statesByElement,c,new Map);return F.has(n)||(Po(c,$t),Po(c,$t+"-"+n),F.set(n,za)),()=>{this._engine.afterFlush(()=>{const ae=m.indexOf(A);ae>=0&&m.splice(ae,1),this._triggers.has(n)||F.delete(n)})}}register(c,n){return!this._triggers.has(c)&&(this._triggers.set(c,n),!0)}_getTrigger(c){const n=this._triggers.get(c);if(!n)throw function nt(d){return new s.wOt(3401,!1)}();return n}trigger(c,n,o,f=!0){const m=this._getTrigger(n),A=new na(this.id,n,c);let F=this._engine.statesByElement.get(c);F||(Po(c,$t),Po(c,$t+"-"+n),this._engine.statesByElement.set(c,F=new Map));let ae=F.get(n);const Se=new ta(o,this.id);if(!(o&&o.hasOwnProperty("value"))&&ae&&Se.absorbOptions(ae.options),F.set(n,Se),ae||(ae=za),Se.value!==is&&ae.value===Se.value){if(!function Ta(d,c){const n=Object.keys(d),o=Object.keys(c);if(n.length!=o.length)return!1;for(let f=0;f<n.length;f++){const m=n[f];if(!c.hasOwnProperty(m)||d[m]!==c[m])return!1}return!0}(ae.params,Se.params)){const bn=[],ai=m.matchStyles(ae.value,ae.params,bn),Ni=m.matchStyles(Se.value,Se.params,bn);bn.length?this._engine.reportError(bn):this._engine.afterFlush(()=>{Yi(c,ai),rr(c,Ni)})}return}const Vt=dt(this._engine.playersByElement,c,[]);Vt.forEach(bn=>{bn.namespaceId==this.id&&bn.triggerName==n&&bn.queued&&bn.destroy()});let Yt=m.matchTransition(ae.value,Se.value,c,Se.params),rn=!1;if(!Yt){if(!f)return;Yt=m.fallbackTransition,rn=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:c,triggerName:n,transition:Yt,fromState:ae,toState:Se,player:A,isFallbackTransition:rn}),rn||(Po(c,gl),A.onStart(()=>{$s(c,gl)})),A.onDone(()=>{let bn=this.players.indexOf(A);bn>=0&&this.players.splice(bn,1);const ai=this._engine.playersByElement.get(c);if(ai){let Ni=ai.indexOf(A);Ni>=0&&ai.splice(Ni,1)}}),this.players.push(A),Vt.push(A),A}deregister(c){this._triggers.delete(c),this._engine.statesByElement.forEach(n=>n.delete(c)),this._elementListeners.forEach((n,o)=>{this._elementListeners.set(o,n.filter(f=>f.name!=c))})}clearElementCache(c){this._engine.statesByElement.delete(c),this._elementListeners.delete(c);const n=this._engine.playersByElement.get(c);n&&(n.forEach(o=>o.destroy()),this._engine.playersByElement.delete(c))}_signalRemovalForInnerTriggers(c,n){const o=this._engine.driver.query(c,fn,!0);o.forEach(f=>{if(f[Eo])return;const m=this._engine.fetchNamespacesByElement(f);m.size?m.forEach(A=>A.triggerLeaveAnimation(f,n,!1,!0)):this.clearElementCache(f)}),this._engine.afterFlushAnimationsDone(()=>o.forEach(f=>this.clearElementCache(f)))}triggerLeaveAnimation(c,n,o,f){const m=this._engine.statesByElement.get(c),A=new Map;if(m){const F=[];if(m.forEach((ae,Se)=>{if(A.set(Se,ae.value),this._triggers.has(Se)){const Me=this.trigger(c,Se,is,f);Me&&F.push(Me)}}),F.length)return this._engine.markElementAsRemoved(this.id,c,!0,n,A),o&&ht(F).onDone(()=>this._engine.processLeaveNode(c)),!0}return!1}prepareLeaveAnimationListeners(c){const n=this._elementListeners.get(c),o=this._engine.statesByElement.get(c);if(n&&o){const f=new Set;n.forEach(m=>{const A=m.name;if(f.has(A))return;f.add(A);const ae=this._triggers.get(A).fallbackTransition,Se=o.get(A)||za,Me=new ta(is),We=new na(this.id,A,c);this._engine.totalQueuedPlayers++,this._queue.push({element:c,triggerName:A,transition:ae,fromState:Se,toState:Me,player:We,isFallbackTransition:!0})})}}removeNode(c,n){const o=this._engine;if(c.childElementCount&&this._signalRemovalForInnerTriggers(c,n),this.triggerLeaveAnimation(c,n,!0))return;let f=!1;if(o.totalAnimations){const m=o.players.length?o.playersByQueriedElement.get(c):[];if(m&&m.length)f=!0;else{let A=c;for(;A=A.parentNode;)if(o.statesByElement.get(A)){f=!0;break}}}if(this.prepareLeaveAnimationListeners(c),f)o.markElementAsRemoved(this.id,c,!1,n);else{const m=c[Eo];(!m||m===Or)&&(o.afterFlush(()=>this.clearElementCache(c)),o.destroyInnerAnimations(c),o._onRemovalComplete(c,n))}}insertNode(c,n){Po(c,this._hostClassName)}drainQueuedTransitions(c){const n=[];return this._queue.forEach(o=>{const f=o.player;if(f.destroyed)return;const m=o.element,A=this._elementListeners.get(m);A&&A.forEach(F=>{if(F.name==o.triggerName){const ae=Ze(m,o.triggerName,o.fromState.value,o.toState.value);ae._data=c,Ie(o.player,F.phase,ae,F.callback)}}),f.markedForDestroy?this._engine.afterFlush(()=>{f.destroy()}):n.push(o)}),this._queue=[],n.sort((o,f)=>{const m=o.transition.ast.depCount,A=f.transition.ast.depCount;return 0==m||0==A?m-A:this._engine.driver.containsElement(o.element,f.element)?1:-1})}destroy(c){this.players.forEach(n=>n.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,c)}}class ms{_onRemovalComplete(c,n){this.onRemovalComplete(c,n)}constructor(c,n,o,f){this.bodyNode=c,this.driver=n,this._normalizer=o,this.scheduler=f,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(m,A)=>{}}get queuedPlayers(){const c=[];return this._namespaceList.forEach(n=>{n.players.forEach(o=>{o.queued&&c.push(o)})}),c}createNamespace(c,n){const o=new Ga(c,n,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,n)?this._balanceNamespaceList(o,n):(this.newHostElements.set(n,o),this.collectEnterElement(n)),this._namespaceLookup[c]=o}_balanceNamespaceList(c,n){const o=this._namespaceList,f=this.namespacesByHostElement;if(o.length-1>=0){let A=!1,F=this.driver.getParentElement(n);for(;F;){const ae=f.get(F);if(ae){const Se=o.indexOf(ae);o.splice(Se+1,0,c),A=!0;break}F=this.driver.getParentElement(F)}A||o.unshift(c)}else o.push(c);return f.set(n,c),c}register(c,n){let o=this._namespaceLookup[c];return o||(o=this.createNamespace(c,n)),o}registerTrigger(c,n,o){let f=this._namespaceLookup[c];f&&f.register(n,o)&&this.totalAnimations++}destroy(c,n){c&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{const o=this._fetchNamespace(c);this.namespacesByHostElement.delete(o.hostElement);const f=this._namespaceList.indexOf(o);f>=0&&this._namespaceList.splice(f,1),o.destroy(n),delete this._namespaceLookup[c]}))}_fetchNamespace(c){return this._namespaceLookup[c]}fetchNamespacesByElement(c){const n=new Set,o=this.statesByElement.get(c);if(o)for(let f of o.values())if(f.namespaceId){const m=this._fetchNamespace(f.namespaceId);m&&n.add(m)}return n}trigger(c,n,o,f){if(ia(n)){const m=this._fetchNamespace(c);if(m)return m.trigger(n,o,f),!0}return!1}insertNode(c,n,o,f){if(!ia(n))return;const m=n[Eo];if(m&&m.setForRemoval){m.setForRemoval=!1,m.setForMove=!0;const A=this.collectedLeaveElements.indexOf(n);A>=0&&this.collectedLeaveElements.splice(A,1)}if(c){const A=this._fetchNamespace(c);A&&A.insertNode(n,o)}f&&this.collectEnterElement(n)}collectEnterElement(c){this.collectedEnterElements.push(c)}markElementAsDisabled(c,n){n?this.disabledNodes.has(c)||(this.disabledNodes.add(c),Po(c,Fs)):this.disabledNodes.has(c)&&(this.disabledNodes.delete(c),$s(c,Fs))}removeNode(c,n,o){if(ia(n)){this.scheduler?.notify();const f=c?this._fetchNamespace(c):null;f?f.removeNode(n,o):this.markElementAsRemoved(c,n,!1,o);const m=this.namespacesByHostElement.get(n);m&&m.id!==c&&m.removeNode(n,o)}else this._onRemovalComplete(n,o)}markElementAsRemoved(c,n,o,f,m){this.collectedLeaveElements.push(n),n[Eo]={namespaceId:c,setForRemoval:f,hasAnimation:o,removedBeforeQueried:!1,previousTriggersValues:m}}listen(c,n,o,f,m){return ia(n)?this._fetchNamespace(c).listen(n,o,f,m):()=>{}}_buildInstruction(c,n,o,f,m){return c.transition.build(this.driver,c.element,c.fromState.value,c.toState.value,o,f,c.fromState.options,c.toState.options,n,m)}destroyInnerAnimations(c){let n=this.driver.query(c,fn,!0);n.forEach(o=>this.destroyActiveAnimationsForElement(o)),0!=this.playersByQueriedElement.size&&(n=this.driver.query(c,Bn,!0),n.forEach(o=>this.finishActiveQueriedAnimationOnElement(o)))}destroyActiveAnimationsForElement(c){const n=this.playersByElement.get(c);n&&n.forEach(o=>{o.queued?o.markedForDestroy=!0:o.destroy()})}finishActiveQueriedAnimationOnElement(c){const n=this.playersByQueriedElement.get(c);n&&n.forEach(o=>o.finish())}whenRenderingDone(){return new Promise(c=>{if(this.players.length)return ht(this.players).onDone(()=>c());c()})}processLeaveNode(c){const n=c[Eo];if(n&&n.setForRemoval){if(c[Eo]=Or,n.namespaceId){this.destroyInnerAnimations(c);const o=this._fetchNamespace(n.namespaceId);o&&o.clearElementCache(c)}this._onRemovalComplete(c,n.setForRemoval)}c.classList?.contains(Fs)&&this.markElementAsDisabled(c,!1),this.driver.query(c,".ng-animate-disabled",!0).forEach(o=>{this.markElementAsDisabled(o,!1)})}flush(c=-1){let n=[];if(this.newHostElements.size&&(this.newHostElements.forEach((o,f)=>this._balanceNamespaceList(o,f)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let o=0;o<this.collectedEnterElements.length;o++)Po(this.collectedEnterElements[o],"ng-star-inserted");if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){const o=[];try{n=this._flushAnimations(o,c)}finally{for(let f=0;f<o.length;f++)o[f]()}}else for(let o=0;o<this.collectedLeaveElements.length;o++)this.processLeaveNode(this.collectedLeaveElements[o]);if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(o=>o()),this._flushFns=[],this._whenQuietFns.length){const o=this._whenQuietFns;this._whenQuietFns=[],n.length?ht(n).onDone(()=>{o.forEach(f=>f())}):o.forEach(f=>f())}}reportError(c){throw function Rt(d){return new s.wOt(3402,!1)}()}_flushAnimations(c,n){const o=new _o,f=[],m=new Map,A=[],F=new Map,ae=new Map,Se=new Map,Me=new Set;this.disabledNodes.forEach(On=>{Me.add(On);const Vn=this.driver.query(On,".ng-animate-queued",!0);for(let qn=0;qn<Vn.length;qn++)Me.add(Vn[qn])});const We=this.bodyNode,Vt=Array.from(this.statesByElement.keys()),Yt=wa(Vt,this.collectedEnterElements),rn=new Map;let bn=0;Yt.forEach((On,Vn)=>{const qn=It+bn++;rn.set(Vn,qn),On.forEach(Li=>Po(Li,qn))});const ai=[],Ni=new Set,Hi=new Set;for(let On=0;On<this.collectedLeaveElements.length;On++){const Vn=this.collectedLeaveElements[On],qn=Vn[Eo];qn&&qn.setForRemoval&&(ai.push(Vn),Ni.add(Vn),qn.hasAnimation?this.driver.query(Vn,".ng-star-inserted",!0).forEach(Li=>Ni.add(Li)):Hi.add(Vn))}const hr=new Map,Vi=wa(Vt,Array.from(Ni));Vi.forEach((On,Vn)=>{const qn=Ut+bn++;hr.set(Vn,qn),On.forEach(Li=>Po(Li,qn))}),c.push(()=>{Yt.forEach((On,Vn)=>{const qn=rn.get(Vn);On.forEach(Li=>$s(Li,qn))}),Vi.forEach((On,Vn)=>{const qn=hr.get(Vn);On.forEach(Li=>$s(Li,qn))}),ai.forEach(On=>{this.processLeaveNode(On)})});const ma=[],to=[];for(let On=this._namespaceList.length-1;On>=0;On--)this._namespaceList[On].drainQueuedTransitions(n).forEach(qn=>{const Li=qn.player,bo=qn.element;if(ma.push(Li),this.collectedEnterElements.length){const Uo=bo[Eo];if(Uo&&Uo.setForMove){if(Uo.previousTriggersValues&&Uo.previousTriggersValues.has(qn.triggerName)){const pc=Uo.previousTriggersValues.get(qn.triggerName),Ks=this.statesByElement.get(qn.element);if(Ks&&Ks.has(qn.triggerName)){const ju=Ks.get(qn.triggerName);ju.value=pc,Ks.set(qn.triggerName,ju)}}return void Li.destroy()}}const Ba=!We||!this.driver.containsElement(We,bo),Zo=hr.get(bo),Ha=rn.get(bo),_r=this._buildInstruction(qn,o,Ha,Zo,Ba);if(_r.errors&&_r.errors.length)return void to.push(_r);if(Ba)return Li.onStart(()=>Yi(bo,_r.fromStyles)),Li.onDestroy(()=>rr(bo,_r.toStyles)),void f.push(Li);if(qn.isFallbackTransition)return Li.onStart(()=>Yi(bo,_r.fromStyles)),Li.onDestroy(()=>rr(bo,_r.toStyles)),void f.push(Li);const Vu=[];_r.timelines.forEach(Uo=>{Uo.stretchStartingKeyframe=!0,this.disabledNodes.has(Uo.element)||Vu.push(Uo)}),_r.timelines=Vu,o.append(bo,_r.timelines),A.push({instruction:_r,player:Li,element:bo}),_r.queriedElements.forEach(Uo=>dt(F,Uo,[]).push(Li)),_r.preStyleProps.forEach((Uo,pc)=>{if(Uo.size){let Ks=ae.get(pc);Ks||ae.set(pc,Ks=new Set),Uo.forEach((ju,zu)=>Ks.add(zu))}}),_r.postStyleProps.forEach((Uo,pc)=>{let Ks=Se.get(pc);Ks||Se.set(pc,Ks=new Set),Uo.forEach((ju,zu)=>Ks.add(zu))})});if(to.length){const On=[];to.forEach(Vn=>{On.push(function cn(d,c){return new s.wOt(3505,!1)}())}),ma.forEach(Vn=>Vn.destroy()),this.reportError(On)}const no=new Map,ps=new Map;A.forEach(On=>{const Vn=On.element;o.has(Vn)&&(ps.set(Vn,Vn),this._beforeAnimationBuild(On.player.namespaceId,On.instruction,no))}),f.forEach(On=>{const Vn=On.element;this._getPreviousPlayers(Vn,!1,On.namespaceId,On.triggerName,null).forEach(Li=>{dt(no,Vn,[]).push(Li),Li.destroy()})});const hc=ai.filter(On=>Wl(On,ae,Se)),fc=new Map;Gl(fc,this.driver,Hi,Se,un.kp).forEach(On=>{Wl(On,ae,Se)&&hc.push(On)});const al=new Map;Yt.forEach((On,Vn)=>{Gl(al,this.driver,new Set(On),ae,un.FX)}),hc.forEach(On=>{const Vn=fc.get(On),qn=al.get(On);fc.set(On,new Map([...Vn?.entries()??[],...qn?.entries()??[]]))});const Hu=[],em=[],Of={};A.forEach(On=>{const{element:Vn,player:qn,instruction:Li}=On;if(o.has(Vn)){if(Me.has(Vn))return qn.onDestroy(()=>rr(Vn,Li.toStyles)),qn.disabled=!0,qn.overrideTotalTime(Li.totalTime),void f.push(qn);let bo=Of;if(ps.size>1){let Zo=Vn;const Ha=[];for(;Zo=Zo.parentNode;){const _r=ps.get(Zo);if(_r){bo=_r;break}Ha.push(Zo)}Ha.forEach(_r=>ps.set(_r,bo))}const Ba=this._buildAnimation(qn.namespaceId,Li,no,m,al,fc);if(qn.setRealPlayer(Ba),bo===Of)Hu.push(qn);else{const Zo=this.playersByElement.get(bo);Zo&&Zo.length&&(qn.parentPlayer=ht(Zo)),f.push(qn)}}else Yi(Vn,Li.fromStyles),qn.onDestroy(()=>rr(Vn,Li.toStyles)),em.push(qn),Me.has(Vn)&&f.push(qn)}),em.forEach(On=>{const Vn=m.get(On.element);if(Vn&&Vn.length){const qn=ht(Vn);On.setRealPlayer(qn)}}),f.forEach(On=>{On.parentPlayer?On.syncPlayerEvents(On.parentPlayer):On.destroy()});for(let On=0;On<ai.length;On++){const Vn=ai[On],qn=Vn[Eo];if($s(Vn,Ut),qn&&qn.hasAnimation)continue;let Li=[];if(F.size){let Ba=F.get(Vn);Ba&&Ba.length&&Li.push(...Ba);let Zo=this.driver.query(Vn,Bn,!0);for(let Ha=0;Ha<Zo.length;Ha++){let _r=F.get(Zo[Ha]);_r&&_r.length&&Li.push(..._r)}}const bo=Li.filter(Ba=>!Ba.destroyed);bo.length?vs(this,Vn,bo):this.processLeaveNode(Vn)}return ai.length=0,Hu.forEach(On=>{this.players.push(On),On.onDone(()=>{On.destroy();const Vn=this.players.indexOf(On);this.players.splice(Vn,1)}),On.play()}),Hu}afterFlush(c){this._flushFns.push(c)}afterFlushAnimationsDone(c){this._whenQuietFns.push(c)}_getPreviousPlayers(c,n,o,f,m){let A=[];if(n){const F=this.playersByQueriedElement.get(c);F&&(A=F)}else{const F=this.playersByElement.get(c);if(F){const ae=!m||m==is;F.forEach(Se=>{Se.queued||!ae&&Se.triggerName!=f||A.push(Se)})}}return(o||f)&&(A=A.filter(F=>!(o&&o!=F.namespaceId||f&&f!=F.triggerName))),A}_beforeAnimationBuild(c,n,o){const m=n.element,A=n.isRemovalTransition?void 0:c,F=n.isRemovalTransition?void 0:n.triggerName;for(const ae of n.timelines){const Se=ae.element,Me=Se!==m,We=dt(o,Se,[]);this._getPreviousPlayers(Se,Me,A,F,n.toState).forEach(Yt=>{const rn=Yt.getRealPlayer();rn.beforeDestroy&&rn.beforeDestroy(),Yt.destroy(),We.push(Yt)})}Yi(m,n.fromStyles)}_buildAnimation(c,n,o,f,m,A){const F=n.triggerName,ae=n.element,Se=[],Me=new Set,We=new Set,Vt=n.timelines.map(rn=>{const bn=rn.element;Me.add(bn);const ai=bn[Eo];if(ai&&ai.removedBeforeQueried)return new un.sf(rn.duration,rn.delay);const Ni=bn!==ae,Hi=function _a(d){const c=[];return Ea(d,c),c}((o.get(bn)||cr).map(no=>no.getRealPlayer())).filter(no=>!!no.element&&no.element===bn),hr=m.get(bn),Vi=A.get(bn),ma=vt(this._normalizer,rn.keyframes,hr,Vi),to=this._buildPlayer(rn,ma,Hi);if(rn.subTimeline&&f&&We.add(bn),Ni){const no=new na(c,F,bn);no.setRealPlayer(to),Se.push(no)}return to});Se.forEach(rn=>{dt(this.playersByQueriedElement,rn.element,[]).push(rn),rn.onDone(()=>function Ca(d,c,n){let o=d.get(c);if(o){if(o.length){const f=o.indexOf(n);o.splice(f,1)}0==o.length&&d.delete(c)}return o}(this.playersByQueriedElement,rn.element,rn))}),Me.forEach(rn=>Po(rn,_n));const Yt=ht(Vt);return Yt.onDestroy(()=>{Me.forEach(rn=>$s(rn,_n)),rr(ae,n.toStyles)}),We.forEach(rn=>{dt(f,rn,[]).push(Yt)}),Yt}_buildPlayer(c,n,o){return n.length>0?this.driver.animate(c.element,n,c.duration,c.delay,c.easing,o):new un.sf(c.duration,c.delay)}}class na{constructor(c,n,o){this.namespaceId=c,this.triggerName=n,this.element=o,this._player=new un.sf,this._containsRealPlayer=!1,this._queuedCallbacks=new Map,this.destroyed=!1,this.parentPlayer=null,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(c){this._containsRealPlayer||(this._player=c,this._queuedCallbacks.forEach((n,o)=>{n.forEach(f=>Ie(c,o,void 0,f))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(c.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(c){this.totalTime=c}syncPlayerEvents(c){const n=this._player;n.triggerCallback&&c.onStart(()=>n.triggerCallback("start")),c.onDone(()=>this.finish()),c.onDestroy(()=>this.destroy())}_queueEvent(c,n){dt(this._queuedCallbacks,c,[]).push(n)}onDone(c){this.queued&&this._queueEvent("done",c),this._player.onDone(c)}onStart(c){this.queued&&this._queueEvent("start",c),this._player.onStart(c)}onDestroy(c){this.queued&&this._queueEvent("destroy",c),this._player.onDestroy(c)}init(){this._player.init()}hasStarted(){return!this.queued&&this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(c){this.queued||this._player.setPosition(c)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(c){const n=this._player;n.triggerCallback&&n.triggerCallback(c)}}function ia(d){return d&&1===d.nodeType}function Wa(d,c){const n=d.style.display;return d.style.display=c??"none",n}function Gl(d,c,n,o,f){const m=[];n.forEach(ae=>m.push(Wa(ae)));const A=[];o.forEach((ae,Se)=>{const Me=new Map;ae.forEach(We=>{const Vt=c.computeStyle(Se,We,f);Me.set(We,Vt),(!Vt||0==Vt.length)&&(Se[Eo]=Pr,A.push(Se))}),d.set(Se,Me)});let F=0;return n.forEach(ae=>Wa(ae,m[F++])),A}function wa(d,c){const n=new Map;if(d.forEach(F=>n.set(F,[])),0==c.length)return n;const f=new Set(c),m=new Map;function A(F){if(!F)return 1;let ae=m.get(F);if(ae)return ae;const Se=F.parentNode;return ae=n.has(Se)?Se:f.has(Se)?1:A(Se),m.set(F,ae),ae}return c.forEach(F=>{const ae=A(F);1!==ae&&n.get(ae).push(F)}),n}function Po(d,c){d.classList?.add(c)}function $s(d,c){d.classList?.remove(c)}function vs(d,c,n){ht(n).onDone(()=>d.processLeaveNode(c))}function Ea(d,c){for(let n=0;n<d.length;n++){const o=d[n];o instanceof un.ui?Ea(o.players,c):c.push(o)}}function Wl(d,c,n){const o=n.get(d);if(!o)return!1;let f=c.get(d);return f?o.forEach(m=>f.add(m)):c.set(d,o),n.delete(d),!0}class ra{constructor(c,n,o,f){this._driver=n,this._normalizer=o,this._triggerCache={},this.onRemovalComplete=(m,A)=>{},this._transitionEngine=new ms(c.body,n,o,f),this._timelineEngine=new Ls(c.body,n,o),this._transitionEngine.onRemovalComplete=(m,A)=>this.onRemovalComplete(m,A)}registerTrigger(c,n,o,f,m){const A=c+"-"+f;let F=this._triggerCache[A];if(!F){const ae=[],Me=es(this._driver,m,ae,[]);if(ae.length)throw function Un(d,c){return new s.wOt(3404,!1)}();F=function mc(d,c,n){return new jl(d,c,n)}(f,Me,this._normalizer),this._triggerCache[A]=F}this._transitionEngine.registerTrigger(n,f,F)}register(c,n){this._transitionEngine.register(c,n)}destroy(c,n){this._transitionEngine.destroy(c,n)}onInsert(c,n,o,f){this._transitionEngine.insertNode(c,n,o,f)}onRemove(c,n,o){this._transitionEngine.removeNode(c,n,o)}disableAnimations(c,n){this._transitionEngine.markElementAsDisabled(c,n)}process(c,n,o,f){if("@"==o.charAt(0)){const[m,A]=Gt(o);this._timelineEngine.command(m,n,A,f)}else this._transitionEngine.trigger(c,n,o,f)}listen(c,n,o,f,m){if("@"==o.charAt(0)){const[A,F]=Gt(o);return this._timelineEngine.listen(A,n,F,m)}return this._transitionEngine.listen(c,n,o,f,m)}flush(c=-1){this._transitionEngine.flush(c)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(c){this._transitionEngine.afterFlushAnimationsDone(c)}}class Ir{static#e=this.initialStylesByElement=new WeakMap;constructor(c,n,o){this._element=c,this._startStyles=n,this._endStyles=o,this._state=0;let f=Ir.initialStylesByElement.get(c);f||Ir.initialStylesByElement.set(c,f=new Map),this._initialStyles=f}start(){this._state<1&&(this._startStyles&&rr(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(rr(this._element,this._initialStyles),this._endStyles&&(rr(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(Ir.initialStylesByElement.delete(this._element),this._startStyles&&(Yi(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Yi(this._element,this._endStyles),this._endStyles=null),rr(this._element,this._initialStyles),this._state=3)}}function ys(d){let c=null;return d.forEach((n,o)=>{(function Kl(d){return"display"===d||"position"===d})(o)&&(c=c||new Map,c.set(o,n))}),c}class Vo{constructor(c,n,o,f){this.element=c,this.keyframes=n,this.options=o,this._specialStyles=f,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this._originalOnDoneFns=[],this._originalOnStartFns=[],this.time=0,this.parentPlayer=null,this.currentSnapshot=new Map,this._duration=o.duration,this._delay=o.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(c=>c()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;const c=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,c,this.options),this._finalKeyframe=c.length?c[c.length-1]:new Map;const n=()=>this._onFinish();this.domPlayer.addEventListener("finish",n),this.onDestroy(()=>{this.domPlayer.removeEventListener("finish",n)})}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_convertKeyframesToObject(c){const n=[];return c.forEach(o=>{n.push(Object.fromEntries(o))}),n}_triggerWebAnimation(c,n,o){return c.animate(this._convertKeyframesToObject(n),o)}onStart(c){this._originalOnStartFns.push(c),this._onStartFns.push(c)}onDone(c){this._originalOnDoneFns.push(c),this._onDoneFns.push(c)}onDestroy(c){this._onDestroyFns.push(c)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(c=>c()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(c=>c()),this._onDestroyFns=[])}setPosition(c){void 0===this.domPlayer&&this.init(),this.domPlayer.currentTime=c*this.time}getPosition(){return+(this.domPlayer.currentTime??0)/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){const c=new Map;this.hasStarted()&&this._finalKeyframe.forEach((o,f)=>{"offset"!==f&&c.set(f,this._finished?o:Xs(this.element,f))}),this.currentSnapshot=c}triggerCallback(c){const n="start"===c?this._onStartFns:this._onDoneFns;n.forEach(o=>o()),n.length=0}}class Bs{validateStyleProperty(c){return!0}validateAnimatableStyleProperty(c){return!0}matchesElement(c,n){return!1}containsElement(c,n){return Er(c,n)}getParentElement(c){return an(c)}query(c,n,o){return Fn(c,n,o)}computeStyle(c,n,o){return Xs(c,n)}animate(c,n,o,f,m,A=[]){const ae={duration:o,delay:f,fill:0==f?"both":"forwards"};m&&(ae.easing=m);const Se=new Map,Me=A.filter(Yt=>Yt instanceof Vo);(function Os(d,c){return 0===d||0===c})(o,f)&&Me.forEach(Yt=>{Yt.currentSnapshot.forEach((rn,bn)=>Se.set(bn,rn))});let We=function Br(d){return d.length?d[0]instanceof Map?d:d.map(c=>new Map(Object.entries(c))):[]}(n).map(Yt=>new Map(Yt));We=function Mo(d,c,n){if(n.size&&c.length){let o=c[0],f=[];if(n.forEach((m,A)=>{o.has(A)||f.push(A),o.set(A,m)}),f.length)for(let m=1;m<c.length;m++){let A=c[m];f.forEach(F=>A.set(F,Xs(d,F)))}}return c}(c,We,Se);const Vt=function Us(d,c){let n=null,o=null;return Array.isArray(c)&&c.length?(n=ys(c[0]),c.length>1&&(o=ys(c[c.length-1]))):c instanceof Map&&(n=ys(c)),n||o?new Ir(d,n,o):null}(c,We);return new Vo(c,We,ae,Vt)}}const wl="@.disabled";class Aa{constructor(c,n,o,f){this.namespaceId=c,this.delegate=n,this.engine=o,this._onDestroy=f,this.\u0275type=0}get data(){return this.delegate.data}destroyNode(c){this.delegate.destroyNode?.(c)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(c,n){return this.delegate.createElement(c,n)}createComment(c){return this.delegate.createComment(c)}createText(c){return this.delegate.createText(c)}appendChild(c,n){this.delegate.appendChild(c,n),this.engine.onInsert(this.namespaceId,n,c,!1)}insertBefore(c,n,o,f=!0){this.delegate.insertBefore(c,n,o),this.engine.onInsert(this.namespaceId,n,c,f)}removeChild(c,n,o){this.engine.onRemove(this.namespaceId,n,this.delegate)}selectRootElement(c,n){return this.delegate.selectRootElement(c,n)}parentNode(c){return this.delegate.parentNode(c)}nextSibling(c){return this.delegate.nextSibling(c)}setAttribute(c,n,o,f){this.delegate.setAttribute(c,n,o,f)}removeAttribute(c,n,o){this.delegate.removeAttribute(c,n,o)}addClass(c,n){this.delegate.addClass(c,n)}removeClass(c,n){this.delegate.removeClass(c,n)}setStyle(c,n,o,f){this.delegate.setStyle(c,n,o,f)}removeStyle(c,n,o){this.delegate.removeStyle(c,n,o)}setProperty(c,n,o){"@"==n.charAt(0)&&n==wl?this.disableAnimations(c,!!o):this.delegate.setProperty(c,n,o)}setValue(c,n){this.delegate.setValue(c,n)}listen(c,n,o){return this.delegate.listen(c,n,o)}disableAnimations(c,n){this.engine.disableAnimations(c,n)}}class _l extends Aa{constructor(c,n,o,f,m){super(n,o,f,m),this.factory=c,this.namespaceId=n}setProperty(c,n,o){"@"==n.charAt(0)?"."==n.charAt(1)&&n==wl?this.disableAnimations(c,o=void 0===o||!!o):this.engine.process(this.namespaceId,c,n.slice(1),o):this.delegate.setProperty(c,n,o)}listen(c,n,o){if("@"==n.charAt(0)){const f=function bs(d){switch(d){case"body":return document.body;case"document":return document;case"window":return window;default:return d}}(c);let m=n.slice(1),A="";return"@"!=m.charAt(0)&&([m,A]=function oa(d){const c=d.indexOf(".");return[d.substring(0,c),d.slice(c+1)]}(m)),this.engine.listen(this.namespaceId,f,m,A,F=>{this.factory.scheduleListenerCallback(F._data||-1,o,F)})}return this.delegate.listen(c,n,o)}}class Ka{constructor(c,n,o){this.delegate=c,this.engine=n,this._zone=o,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,n.onRemovalComplete=(f,m)=>{const A=m?.parentNode(f);A&&m.removeChild(A,f)}}createRenderer(c,n){const f=this.delegate.createRenderer(c,n);if(!c||!n?.data?.animation){const Se=this._rendererCache;let Me=Se.get(f);return Me||(Me=new Aa("",f,this.engine,()=>Se.delete(f)),Se.set(f,Me)),Me}const m=n.id,A=n.id+"-"+this._currentId;this._currentId++,this.engine.register(A,c);const F=Se=>{Array.isArray(Se)?Se.forEach(F):this.engine.registerTrigger(m,A,c,Se.name,Se)};return n.data.animation.forEach(F),new _l(this,A,f,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(c,n,o){if(c>=0&&c<this._microtaskId)return void this._zone.run(()=>n(o));const f=this._animationCallbacksBuffer;0==f.length&&queueMicrotask(()=>{this._zone.run(()=>{f.forEach(m=>{const[A,F]=m;A(F)}),this._animationCallbacksBuffer=[]})}),f.push([n,o])}end(){this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}const ye=[{provide:C,useFactory:function De(){return new Qr}},{provide:ra,useClass:(()=>{class d extends ra{constructor(n,o,f){super(n,o,f,(0,s.WQX)(s.An2,{optional:!0}))}ngOnDestroy(){this.flush()}static#e=this.\u0275fac=function(o){return new(o||d)(s.KVO(oe.qQ),s.KVO(g),s.KVO(C))};static#t=this.\u0275prov=s.jDH({token:d,factory:d.\u0275fac})}return d})()},{provide:s._9s,useFactory:function ne(d,c,n){return new Ka(d,c,n)},deps:[a.B7,ra,s.SKi]}],Ye=[{provide:g,useFactory:()=>new Bs},{provide:s.bc$,useValue:"BrowserAnimations"},...ye],Ft=[{provide:g,useClass:p},{provide:s.bc$,useValue:"NoopAnimations"},...ye];var Ti=h(4523),Xn=h(8173),or=h(5189),ii=h(7306);class tr{static loggerCallback(c,n){switch(c){case Xn.$.Error:return void console.error(n);case Xn.$.Info:return void console.info(n);case Xn.$.Verbose:return void console.debug(n);case Xn.$.Warning:return void console.warn(n);default:return void console.log(n)}}constructor(c){let n;this.browserEnvironment=typeof window<"u",this.config=(0,or.tD)(c,this.browserEnvironment);try{n=window[E.Al.SessionStorage]}catch{}const o=n?.getItem(E.L$),f=n?.getItem(E.P3)?.toLowerCase(),m="true"===f||"false"!==f&&void 0,A={...this.config.system.loggerOptions},F=o&&Object.keys(Xn.$).includes(o)?Xn.$[o]:void 0;F&&(A.loggerCallback=tr.loggerCallback,A.logLevel=F),void 0!==m&&(A.piiLoggingEnabled=m),this.logger=new Xn.V(A,ii.U,ii.r),this.available=!1}getConfig(){return this.config}getLogger(){return this.logger}isAvailable(){return this.available}isBrowserEnvironment(){return this.browserEnvironment}}let Si=(()=>{class d extends tr{getModuleName(){return d.MODULE_NAME}getId(){return d.ID}initialize(){var n=this;return(0,Ti.A)(function*(){return n.available=typeof window<"u",n.available})()}}return d.MODULE_NAME="",d.ID="StandardOperatingContext",d})();function xn(){return(xn=(0,Ti.A)(function*(d){const c=new Si(d);return yield c.initialize(),(yield Promise.resolve().then(h.bind(h,1190))).StandardController.createController(c)})).apply(this,arguments)}var sr=h(1190);class gr{static createPublicClientApplication(c){return(0,Ti.A)(function*(){const n=yield function nn(d){return xn.apply(this,arguments)}(c);return new gr(c,n)})()}constructor(c,n){if(n)this.controller=n;else{const o=new Si(c);this.controller=new sr.StandardController(o)}}initialize(){var c=this;return(0,Ti.A)(function*(){return c.controller.initialize()})()}acquireTokenPopup(c){var n=this;return(0,Ti.A)(function*(){return n.controller.acquireTokenPopup(c)})()}acquireTokenRedirect(c){return this.controller.acquireTokenRedirect(c)}acquireTokenSilent(c){return this.controller.acquireTokenSilent(c)}acquireTokenByCode(c){return this.controller.acquireTokenByCode(c)}addEventCallback(c){return this.controller.addEventCallback(c)}removeEventCallback(c){return this.controller.removeEventCallback(c)}addPerformanceCallback(c){return this.controller.addPerformanceCallback(c)}removePerformanceCallback(c){return this.controller.removePerformanceCallback(c)}enableAccountStorageEvents(){this.controller.enableAccountStorageEvents()}disableAccountStorageEvents(){this.controller.disableAccountStorageEvents()}getAccount(c){return this.controller.getAccount(c)}getAccountByHomeId(c){return this.controller.getAccountByHomeId(c)}getAccountByLocalId(c){return this.controller.getAccountByLocalId(c)}getAccountByUsername(c){return this.controller.getAccountByUsername(c)}getAllAccounts(c){return this.controller.getAllAccounts(c)}handleRedirectPromise(c){return this.controller.handleRedirectPromise(c)}loginPopup(c){return this.controller.loginPopup(c)}loginRedirect(c){return this.controller.loginRedirect(c)}logout(c){return this.controller.logout(c)}logoutRedirect(c){return this.controller.logoutRedirect(c)}logoutPopup(c){return this.controller.logoutPopup(c)}ssoSilent(c){return this.controller.ssoSilent(c)}getTokenCache(){return this.controller.getTokenCache()}getLogger(){return this.controller.getLogger()}setLogger(c){this.controller.setLogger(c)}setActiveAccount(c){this.controller.setActiveAccount(c)}getActiveAccount(){return this.controller.getActiveAccount()}initializeWrapperLibrary(c,n){return this.controller.initializeWrapperLibrary(c,n)}setNavigationClient(c){this.controller.setNavigationClient(c)}getConfiguration(){return this.controller.getConfiguration()}hydrateCache(c,n){var o=this;return(0,Ti.A)(function*(){return o.controller.hydrateCache(c,n)})()}clearCache(c){return this.controller.clearCache(c)}}const Gi=new gr({auth:{clientId:x.MSAL.CLIENT_ID,authority:x.MSAL.AUTHORITY,redirectUri:x.MSAL.REDIRECT_URI,postLogoutRedirectUri:x.MSAL.POST_LOGOUT_URI,scopes:x.MSAL.SCOPES_ARRAY},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1}});let Nr=(()=>{class d{constructor(n,o){this.msalGuardConfig=n,this.authService=o}checkAndSetActiveAccount(){if(!this.authService.instance.getActiveAccount()&&this.authService.instance.getAllAccounts().length>0){const o=this.authService.instance.getAllAccounts();this.authService.instance.setActiveAccount(o[0])}}loginRedirect(){this.authService.instance.loginRedirect({redirectStartPage:"/performance-manager/dashboard/",...this.msalGuardConfig.authRequest})}logout(){this.authService.instance.logoutRedirect()}static#e=this.\u0275fac=function(o){return new(o||d)(s.KVO(ee),s.KVO(Be))};static#t=this.\u0275prov=s.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})();var To=h(8810);const yc=["toast-component",""];function El(d,c){if(1&d){const n=s.RV6();s.j41(0,"button",5),s.bIt("click",function(){s.eBV(n);const f=s.XpG();return s.Njj(f.remove())}),s.j41(1,"span",6),s.EFF(2,"\xd7"),s.k0s()()}}function mr(d,c){if(1&d&&(s.qex(0),s.EFF(1),s.bVm()),2&d){const n=s.XpG(2);s.R7$(),s.SpI("[",n.duplicatesCount+1,"]")}}function ql(d,c){if(1&d&&(s.j41(0,"div"),s.EFF(1),s.DNE(2,mr,2,1,"ng-container",4),s.k0s()),2&d){const n=s.XpG();s.HbH(n.options.titleClass),s.BMQ("aria-label",n.title),s.R7$(),s.SpI(" ",n.title," "),s.R7$(),s.Y8G("ngIf",n.duplicatesCount)}}function Ia(d,c){if(1&d&&s.nrm(0,"div",7),2&d){const n=s.XpG();s.HbH(n.options.messageClass),s.Y8G("innerHTML",n.message,s.npT)}}function ws(d,c){if(1&d&&(s.j41(0,"div",8),s.EFF(1),s.k0s()),2&d){const n=s.XpG();s.HbH(n.options.messageClass),s.BMQ("aria-label",n.message),s.R7$(),s.SpI(" ",n.message," ")}}function Da(d,c){if(1&d&&(s.j41(0,"div"),s.nrm(1,"div",9),s.k0s()),2&d){const n=s.XpG();s.R7$(),s.xc7("width",n.width+"%")}}class Hs{_attachedHost;component;viewContainerRef;injector;constructor(c,n){this.component=c,this.injector=n}attach(c,n){return this._attachedHost=c,c.attach(this,n)}detach(){const c=this._attachedHost;if(c)return this._attachedHost=void 0,c.detach()}get isAttached(){return null!=this._attachedHost}setAttachedHost(c){this._attachedHost=c}}class Ql{_attachedPortal;_disposeFn;attach(c,n){return this._attachedPortal=c,this.attachComponentPortal(c,n)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(c){this._disposeFn=c}}class qa{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new H.B;_activate=new H.B;_manualClose=new H.B;_resetTimeout=new H.B;_countDuplicate=new H.B;constructor(c){this._overlayRef=c}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(c,n){c&&this._resetTimeout.next(),n&&this._countDuplicate.next(++this.duplicatesCount)}}class dr{toastId;config;message;title;toastType;toastRef;_onTap=new H.B;_onAction=new H.B;constructor(c,n,o,f,m,A){this.toastId=c,this.config=n,this.message=o,this.title=f,this.toastType=m,this.toastRef=A,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(c){this._onAction.next(c)}onAction(){return this._onAction.asObservable()}}const Xr=new s.nKC("ToastConfig");class so extends Ql{_hostDomElement;_componentFactoryResolver;_appRef;constructor(c,n,o){super(),this._hostDomElement=c,this._componentFactoryResolver=n,this._appRef=o}attachComponentPortal(c,n){const o=this._componentFactoryResolver.resolveComponentFactory(c.component);let f;return f=o.create(c.injector),this._appRef.attachView(f.hostView),this.setDisposeFn(()=>{this._appRef.detachView(f.hostView),f.destroy()}),n?this._hostDomElement.insertBefore(this._getComponentRootNode(f),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(f)),f}_getComponentRootNode(c){return c.hostView.rootNodes[0]}}let J=(()=>{class d{_document=(0,s.WQX)(oe.qQ);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){const n=this._document.createElement("div");n.classList.add("overlay-container"),n.setAttribute("aria-live","polite"),this._document.body.appendChild(n),this._containerElement=n}static \u0275fac=function(o){return new(o||d)};static \u0275prov=s.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})();class St{_portalHost;constructor(c){this._portalHost=c}attach(c,n=!0){return this._portalHost.attach(c,n)}detach(){return this._portalHost.detach()}}let yn=(()=>{class d{_overlayContainer=(0,s.WQX)(J);_componentFactoryResolver=(0,s.WQX)(s.OM3);_appRef=(0,s.WQX)(s.o8S);_document=(0,s.WQX)(oe.qQ);_paneElements=new Map;create(n,o){return this._createOverlayRef(this.getPaneElement(n,o))}getPaneElement(n="",o){return this._paneElements.get(o)||this._paneElements.set(o,{}),this._paneElements.get(o)[n]||(this._paneElements.get(o)[n]=this._createPaneElement(n,o)),this._paneElements.get(o)[n]}_createPaneElement(n,o){const f=this._document.createElement("div");return f.id="toast-container",f.classList.add(n),f.classList.add("toast-container"),o?o.getContainerElement().appendChild(f):this._overlayContainer.getContainerElement().appendChild(f),f}_createPortalHost(n){return new so(n,this._componentFactoryResolver,this._appRef)}_createOverlayRef(n){return new St(this._createPortalHost(n))}static \u0275fac=function(o){return new(o||d)};static \u0275prov=s.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})(),Hn=(()=>{class d{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(n,o,f,m,A){this.overlay=o,this._injector=f,this.sanitizer=m,this.ngZone=A,this.toastrConfig={...n.default,...n.config},n.config.iconClasses&&(this.toastrConfig.iconClasses={...n.default.iconClasses,...n.config.iconClasses})}show(n,o,f={},m=""){return this._preBuildNotification(m,n,o,this.applyConfig(f))}success(n,o,f={}){return this._preBuildNotification(this.toastrConfig.iconClasses.success||"",n,o,this.applyConfig(f))}error(n,o,f={}){return this._preBuildNotification(this.toastrConfig.iconClasses.error||"",n,o,this.applyConfig(f))}info(n,o,f={}){return this._preBuildNotification(this.toastrConfig.iconClasses.info||"",n,o,this.applyConfig(f))}warning(n,o,f={}){return this._preBuildNotification(this.toastrConfig.iconClasses.warning||"",n,o,this.applyConfig(f))}clear(n){for(const o of this.toasts)if(void 0!==n){if(o.toastId===n)return void o.toastRef.manualClose()}else o.toastRef.manualClose()}remove(n){const o=this._findToast(n);if(!o||(o.activeToast.toastRef.close(),this.toasts.splice(o.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){const f=this.toasts[this.currentlyActive].toastRef;f.isInactive()||(this.currentlyActive=this.currentlyActive+1,f.activate())}return!0}findDuplicate(n="",o="",f,m){const{includeTitleDuplicates:A}=this.toastrConfig;for(const F of this.toasts)if((!A||A&&F.title===n)&&F.message===o)return F.toastRef.onDuplicate(f,m),F;return null}applyConfig(n={}){return{...this.toastrConfig,...n}}_findToast(n){for(let o=0;o<this.toasts.length;o++)if(this.toasts[o].toastId===n)return{index:o,activeToast:this.toasts[o]};return null}_preBuildNotification(n,o,f,m){return m.onActivateTick?this.ngZone.run(()=>this._buildNotification(n,o,f,m)):this._buildNotification(n,o,f,m)}_buildNotification(n,o,f,m){if(!m.toastComponent)throw new Error("toastComponent required");const A=this.findDuplicate(f,o,this.toastrConfig.resetTimeoutOnDuplicate&&m.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&f||o)&&this.toastrConfig.preventDuplicates&&null!==A)return A;this.previousToastMessage=o;let F=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(F=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));const ae=this.overlay.create(m.positionClass,this.overlayContainer);this.index=this.index+1;let Se=o;o&&m.enableHtml&&(Se=this.sanitizer.sanitize(s.WPN.HTML,o));const Me=new qa(ae),We=new dr(this.index,m,Se,f,n,Me),Yt=s.zZn.create({providers:[{provide:dr,useValue:We}],parent:this._injector}),rn=new Hs(m.toastComponent,Yt),bn=ae.attach(rn,m.newestOnTop);Me.componentInstance=bn.instance;const ai={toastId:this.index,title:f||"",message:o||"",toastRef:Me,onShown:Me.afterActivate(),onHidden:Me.afterClosed(),onTap:We.onTap(),onAction:We.onAction(),portal:bn};return F||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{ai.toastRef.activate()})),this.toasts.push(ai),ai}static \u0275fac=function(o){return new(o||d)(s.KVO(Xr),s.KVO(yn),s.KVO(s.zZn),s.KVO(a.up),s.KVO(s.SKi))};static \u0275prov=s.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})();const Dr={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing",toastComponent:(()=>{class d{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=-1;toastClasses="";state;get displayStyle(){if("inactive"===this.state.value)return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(n,o,f){this.toastrService=n,this.toastPackage=o,this.ngZone=f,this.message=o.message,this.title=o.title,this.options=o.config,this.originalTimeout=o.config.timeOut,this.toastClasses=`${o.toastType} ${o.config.toastClass}`,this.sub=o.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=o.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=o.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=o.toastRef.countDuplicate().subscribe(m=>{this.duplicatesCount=m}),this.state={value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}}}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state={...this.state,value:"active"},!0!==this.options.disableTimeOut&&"timeOut"!==this.options.disableTimeOut&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=(new Date).getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(0===this.width||100===this.width||!this.options.timeOut)return;const n=(new Date).getTime();this.width=(this.hideTime-n)/this.options.timeOut*100,"increasing"===this.options.progressAnimation&&(this.width=100-this.width),this.width<=0&&(this.width=0),this.width>=100&&(this.width=100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state={...this.state,value:"active"},this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=(new Date).getTime()+(this.options.timeOut||0),this.width=-1,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){"removed"!==this.state.value&&(clearTimeout(this.timeout),this.state={...this.state,value:"removed"},this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){"removed"!==this.state.value&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){"removed"!==this.state.value&&"extendedTimeOut"!==this.options.disableTimeOut&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width=0)}delayedHideToast(){!0===this.options.disableTimeOut||"extendedTimeOut"===this.options.disableTimeOut||0===this.options.extendedTimeOut||"removed"===this.state.value||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=(new Date).getTime()+(this.options.timeOut||0),this.width=-1,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(n,o){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(n),o)):this.timeout=setTimeout(()=>n(),o)}outsideInterval(n,o){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(n),o)):this.intervalId=setInterval(()=>n(),o)}runInsideAngular(n){this.ngZone?this.ngZone.run(()=>n()):n()}static \u0275fac=function(o){return new(o||d)(s.rXU(Hn),s.rXU(dr),s.rXU(s.SKi))};static \u0275cmp=s.VBU({type:d,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(o,f){1&o&&s.bIt("click",function(){return f.tapToast()})("mouseenter",function(){return f.stickAround()})("mouseleave",function(){return f.delayedHideToast()}),2&o&&(s.zvX("@flyInOut",f.state),s.HbH(f.toastClasses),s.xc7("display",f.displayStyle))},standalone:!0,features:[s.aNF],attrs:yc,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(o,f){1&o&&s.DNE(0,El,3,0,"button",0)(1,ql,3,5,"div",1)(2,Ia,1,3,"div",2)(3,ws,2,4,"div",3)(4,Da,2,2,"div",4),2&o&&(s.Y8G("ngIf",f.options.closeButton),s.R7$(),s.Y8G("ngIf",f.title),s.R7$(),s.Y8G("ngIf",f.message&&f.options.enableHtml),s.R7$(),s.Y8G("ngIf",f.message&&!f.options.enableHtml),s.R7$(),s.Y8G("ngIf",f.options.progressBar))},dependencies:[oe.bT],encapsulation:2,data:{animation:[(0,un.hZ)("flyInOut",[(0,un.wk)("inactive",(0,un.iF)({opacity:0})),(0,un.wk)("active",(0,un.iF)({opacity:1})),(0,un.wk)("removed",(0,un.iF)({opacity:0})),(0,un.kY)("inactive => active",(0,un.i0)("{{ easeTime }}ms {{ easing }}")),(0,un.kY)("active => removed",(0,un.i0)("{{ easeTime }}ms {{ easing }}"))])]}})}return d})()};class T{http;prefix;suffix;constructor(c,n="/assets/i18n/",o=".json"){this.http=c,this.prefix=n,this.suffix=o}getTranslation(c){return this.http.get(`${this.prefix}${c}${this.suffix}`)}}const D={providers:[(0,le.lh)(Ii),(0,s.oKB)(a.Bb,Ln.forRoot({loader:{provide:Ot,useFactory:function N(d){return new T(d,"./assets/i18n/",".json")},deps:[y.Qq]}}),ft.Ov.forRoot()),function Oi(){return[...Ft]}(),(0,y.$R)((0,y.b$)([(d,c)=>{const n=(0,s.WQX)(Be),o=(0,s.WQX)(Hn);return x.EXCLUDED_URLS.some(m=>d.url.startsWith(m))?c(d):(0,W.H)(n.instance.acquireTokenSilent({scopes:x.MSAL.SCOPES_ARRAY})).pipe((0,Y.n)(m=>{const F=d.clone({url:`${x.BACKEND_API}${d.url}`,setHeaders:{Authorization:`${m.accessToken??""}`}});return c(F).pipe((0,$.W)(ae=>(o.error("Wyst\u0105pi\u0142 nieznany b\u0142\u0105d, spr\xf3buj p\xf3\u017aniej"),(0,To.$)(()=>new Error("An error occurred. Please try again later.")))))}))}])),{provide:y.a7,useClass:Pe,multi:!0},{provide:Z,useFactory:function rs(){const d=new Map;return d.set(x.MSAL.REDIRECT_URI,x.MSAL.SCOPES_ARRAY),{interactionType:E.X8.Redirect,protectedResourceMap:d}}},{provide:P,useValue:Gi},{provide:ee,useFactory:function Wn(){return{interactionType:E.X8.Redirect,authRequest:{scopes:x.MSAL.SCOPES_ARRAY},loginFailedRoute:"/"}}},Be,et,Le,function Tn(){return(0,s.ngT)("NgEagerAnimations"),[...Ye]}(),((d={})=>(0,s.EmA)([{provide:Xr,useValue:{default:Dr,config:d}}]))()]};var U=h(6977),be=h(9417);function Re(d,c){if(1&d){const n=s.RV6();s.j41(0,"button",2),s.bIt("click",function(){const f=s.eBV(n).$implicit,m=s.XpG();return s.Njj(m.translate.use(f))}),s.EFF(1),s.nI1(2,"uppercase"),s.k0s()}if(2&d){const n=c.$implicit,o=s.XpG();s.AVh("active",o.translate.currentLang===n),s.R7$(),s.SpI(" ",s.bMT(2,3,n)," ")}}let Je=(()=>{class d{constructor(n){this.translate=n,n.addLangs(["pl","en"]),n.setDefaultLang("pl"),n.currentLang=n.getDefaultLang()}static#e=this.\u0275fac=function(o){return new(o||d)(s.rXU(vi))};static#t=this.\u0275cmp=s.VBU({type:d,selectors:[["app-language-selector"]],standalone:!0,features:[s.aNF],decls:3,vars:0,consts:[[1,"btn-group","mx-4"],[1,"btn",3,"active"],[1,"btn",3,"click"]],template:function(o,f){1&o&&(s.j41(0,"div",0),s.Z7z(1,Re,3,5,"button",1,s.fX1),s.k0s()),2&o&&(s.R7$(),s.Dyx(f.translate.getLangs()))},dependencies:[Ln,be.X1,oe.Pc],encapsulation:2})}return d})();var Nt=h(7052);const kt=()=>["/dashboard"];function vn(d,c){if(1&d){const n=s.RV6();s.j41(0,"button",6),s.bIt("click",function(){s.eBV(n);const f=s.XpG();return s.Njj(f.accountService.loginRedirect())}),s.EFF(1," Zaloguj "),s.k0s()}}function ei(d,c){1&d&&(s.j41(0,"button",7)(1,"span",10),s.EFF(2,"Toggle Dropdown"),s.k0s()())}function li(d,c){if(1&d){const n=s.RV6();s.j41(0,"div",9)(1,"button",11),s.bIt("click",function(){const f=s.eBV(n).$implicit,m=s.XpG(2);return s.Njj(m.userService.updateCurrentRole(f))}),s.j41(2,"span"),s.EFF(3),s.k0s()()()}if(2&d){const n=c.$implicit,o=c.$index,f=s.XpG(2);s.R7$(),s.AVh("active",f.userService.currentRole===n),s.Mz_("id","btnradio",o,""),s.Mz_("name","btnradio",o,""),s.R7$(2),s.SpI(" ",n," ")}}function xr(d,c){if(1&d&&(s.j41(0,"div",5),s.nrm(1,"mgt-login"),s.DNE(2,ei,3,0,"button",7),s.j41(3,"ul",8),s.Z7z(4,li,4,7,"div",9,s.fX1),s.k0s()()),2&d){const n=s.XpG();s.R7$(2),s.vxM(2,n.userService.availableRoles?2:-1),s.R7$(2),s.Dyx(n.userService.availableRoles)}}let wc=(()=>{class d{constructor(n,o,f){this.msalService=n,this.userService=o,this.accountService=f}static#e=this.\u0275fac=function(o){return new(o||d)(s.rXU(Be),s.rXU(Nt.DL),s.rXU(Nr))};static#t=this.\u0275cmp=s.VBU({type:d,selectors:[["app-nav"]],standalone:!0,features:[s.aNF],decls:7,vars:4,consts:[[1,"d-flex","flex-row","flex-nowrap","justify-content-between","align-items-center","bg-white","h-100","px-5","py-3","z-2"],["tabindex","0",1,"navbar-brand",3,"routerLink"],["alt","certumLogo","src","./assets/images/certum-logo.svg",1,"img"],[1,"d-flex","flex-nowrap","justify-content-center","align-items-center"],["type","button",1,"btn","btn-lg","btn-primary","text-white","px-4"],[1,"btn-group"],["type","button",1,"btn","btn-lg","btn-primary","text-white","px-4",3,"click"],["aria-expanded","false","data-bs-toggle","dropdown","type","button",1,"btn","btn-lg","btn-secondary","dropdown-toggle","dropdown-toggle-split"],[1,"dropdown-menu","p-3","row"],[1,"btn-group","btn-group-md"],[1,"visually-hidden"],[1,"btn","my-1",3,"click","id","name"]],template:function(o,f){1&o&&(s.j41(0,"nav",0)(1,"a",1),s.nrm(2,"img",2),s.k0s(),s.j41(3,"div",3),s.nrm(4,"app-language-selector"),s.DNE(5,vn,2,0,"button",4)(6,xr,6,1,"div",5),s.k0s()()),2&o&&(s.R7$(),s.Y8G("routerLink",s.lJ4(3,kt)),s.R7$(4),s.vxM(5,f.msalService.instance.getActiveAccount()?-1:5),s.R7$(),s.vxM(6,f.msalService.instance.getActiveAccount()?6:-1))},dependencies:[le.Wk,Je],encapsulation:2})}return d})();function la(d){return Array.isArray(d)?d:[d]}var Fm=h(4572),tp=h(1985),np=h(5245),$m=h(152),vh=h(9172);let yh;try{yh=typeof Intl<"u"&&Intl.v8BreakIterator}catch{yh=!1}let ka=(()=>{class d{constructor(n){this._platformId=n,this.isBrowser=this._platformId?(0,oe.UE)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!yh)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static#e=this.\u0275fac=function(o){return new(o||d)(s.KVO(s.Agw))};static#t=this.\u0275prov=s.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})(),Vm=(()=>{class d{static#e=this.\u0275fac=function(o){return new(o||d)};static#t=this.\u0275mod=s.$C({type:d});static#n=this.\u0275inj=s.G2t({})}return d})();const Ch=new Set;let Za,wh=(()=>{class d{constructor(n,o){this._platform=n,this._nonce=o,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Wd}matchMedia(n){return(this._platform.WEBKIT||this._platform.BLINK)&&function sd(d,c){if(!Ch.has(d))try{Za||(Za=document.createElement("style"),c&&Za.setAttribute("nonce",c),Za.setAttribute("type","text/css"),document.head.appendChild(Za)),Za.sheet&&(Za.sheet.insertRule(`@media ${d} {body{ }}`,0),Ch.add(d))}catch(n){console.error(n)}}(n,this._nonce),this._matchMedia(n)}static#e=this.\u0275fac=function(o){return new(o||d)(s.KVO(ka),s.KVO(s.BIS,8))};static#t=this.\u0275prov=s.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})();function Wd(d){return{matches:"all"===d||""===d,media:d,addListener:()=>{},removeListener:()=>{}}}let _h=(()=>{class d{constructor(n,o){this._mediaMatcher=n,this._zone=o,this._queries=new Map,this._destroySubject=new H.B}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(n){return Sl(la(n)).some(f=>this._registerQuery(f).mql.matches)}observe(n){const f=Sl(la(n)).map(A=>this._registerQuery(A).observable);let m=(0,Fm.z)(f);return m=(0,Te.x)(m.pipe((0,te.s)(1)),m.pipe((0,np.i)(1),(0,$m.B)(0))),m.pipe((0,de.T)(A=>{const F={matches:!1,breakpoints:{}};return A.forEach(({matches:ae,query:Se})=>{F.matches=F.matches||ae,F.breakpoints[Se]=ae}),F}))}_registerQuery(n){if(this._queries.has(n))return this._queries.get(n);const o=this._mediaMatcher.matchMedia(n),m={observable:new tp.c(A=>{const F=ae=>this._zone.run(()=>A.next(ae));return o.addListener(F),()=>{o.removeListener(F)}}).pipe((0,vh.Z)(o),(0,de.T)(({matches:A})=>({query:n,matches:A})),(0,U.Q)(this._destroySubject)),mql:o};return this._queries.set(n,m),m}static#e=this.\u0275fac=function(o){return new(o||d)(s.KVO(wh),s.KVO(s.SKi))};static#t=this.\u0275prov=s.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})();function Sl(d){return d.map(c=>c.split(",")).reduce((c,n)=>c.concat(n)).map(c=>c.trim())}const op=()=>["/dashboard"],pb=()=>["/browse-forms"],jm=()=>["/create-template"],zm=()=>["/create-form"],Gm=()=>["/fill-form"],sp=()=>["/settings"];function _c(d,c){1&d&&(s.j41(0,"span",3),s.EFF(1,"Dashboard"),s.k0s())}function Wm(d,c){1&d&&(s.j41(0,"span",3),s.EFF(1,"Browse surveys"),s.k0s())}function Km(d,c){1&d&&(s.j41(0,"span",3),s.EFF(1,"Create template"),s.k0s())}function qm(d,c){1&d&&(s.j41(0,"span",3),s.EFF(1,"Create form"),s.k0s())}function Qm(d,c){1&d&&(s.j41(0,"span",3),s.EFF(1,"Fill survey"),s.k0s())}function Xm(d,c){1&d&&(s.j41(0,"span",3),s.EFF(1,"Settings"),s.k0s())}let Qt=(()=>{class d{constructor(n){this.observer=n,this.isVisible=!0,this.observer.observe("(max-width: 1400px)").subscribe(o=>{this.isVisible=!o.matches})}static#e=this.\u0275fac=function(o){return new(o||d)(s.rXU(_h))};static#t=this.\u0275cmp=s.VBU({type:d,selectors:[["app-sidebar"]],standalone:!0,features:[s.aNF],decls:19,vars:18,consts:[["id","menu",1,"h-100","py-5","px-3","bg-white","nav-pills","fw-medium","text-nowrap"],["routerLinkActive","active",1,"nav-link","p-3",3,"routerLink"],[1,"fs-4","bi","bi-house","fw-bold"],[1,"fs-6","ms-3","text-dark"],[1,"fs-4","bi","bi-clipboard","fw-bold"],[1,"fs-4","bi","bi-pen","fw-bold"],[1,"fs-4","bi","bi-pencil-square","fw-bold"],[1,"fs-4","bi","bi-clipboard-check-fill","fw-bold"],["routerLinkActive","active",1,"nav-link","align-self-end","p-3",3,"routerLink"],[1,"fs-4","bi","bi-gear-fill","fw-bold"]],template:function(o,f){1&o&&(s.j41(0,"nav",0)(1,"a",1),s.nrm(2,"i",2),s.DNE(3,_c,2,0,"span",3),s.k0s(),s.j41(4,"a",1),s.nrm(5,"i",4),s.DNE(6,Wm,2,0,"span",3),s.k0s(),s.j41(7,"a",1),s.nrm(8,"i",5),s.DNE(9,Km,2,0,"span",3),s.k0s(),s.j41(10,"a",1),s.nrm(11,"i",6),s.DNE(12,qm,2,0,"span",3),s.k0s(),s.j41(13,"a",1),s.nrm(14,"i",7),s.DNE(15,Qm,2,0,"span",3),s.k0s(),s.j41(16,"a",8),s.nrm(17,"i",9),s.DNE(18,Xm,2,0,"span",3),s.k0s()()),2&o&&(s.R7$(),s.Y8G("routerLink",s.lJ4(12,op)),s.R7$(2),s.vxM(3,f.isVisible?3:-1),s.R7$(),s.Y8G("routerLink",s.lJ4(13,pb)),s.R7$(2),s.vxM(6,f.isVisible?6:-1),s.R7$(),s.Y8G("routerLink",s.lJ4(14,jm)),s.R7$(2),s.vxM(9,f.isVisible?9:-1),s.R7$(),s.Y8G("routerLink",s.lJ4(15,zm)),s.R7$(2),s.vxM(12,f.isVisible?12:-1),s.R7$(),s.Y8G("routerLink",s.lJ4(16,Gm)),s.R7$(2),s.vxM(15,f.isVisible?15:-1),s.R7$(),s.Y8G("routerLink",s.lJ4(17,sp)),s.R7$(2),s.vxM(18,f.isVisible?18:-1))},dependencies:[le.wQ,le.Wk,Vm],encapsulation:2})}return d})(),Ai=(()=>{class d{static#e=this.\u0275fac=function(o){return new(o||d)};static#t=this.\u0275cmp=s.VBU({type:d,selectors:[["app-footer"]],standalone:!0,features:[s.aNF],decls:2,vars:0,consts:[[1,"d-flex","flex-row","flex-nowrap","justify-content-between","align-items-center","h-100","px-5","py-3","z-2","bg-dark"],["alt","certumLogo","src","./assets/images/footer-logo.svg",1,"img-fluid"]],template:function(o,f){1&o&&(s.j41(0,"footer",0),s.nrm(1,"img",1),s.k0s())},encapsulation:2})}return d})();var Qi=h(4709),Bi=h(6885),ki=h(1018),ap=h(5941);class ad{}var Cr=h(4327);class Zm{constructor(c,n,o,f){this.resource=o.startsWith("/")?o:`/${o}`,this.method=f,this.index=c,this.id=n}}var Ym=function(d,c,n,o){return new(n||(n=Promise))(function(m,A){function F(Me){try{Se(o.next(Me))}catch(We){A(We)}}function ae(Me){try{Se(o.throw(Me))}catch(We){A(We)}}function Se(Me){Me.done?m(Me.value):function f(m){return m instanceof n?m:new n(function(A){A(m)})}(Me.value).then(F,ae)}Se((o=o.apply(d,c||[])).next())})};class Kd{static get baseUrl(){return"https://graph.microsoft.com"}constructor(c){this.graph=c,this.allRequests=[],this.requestsQueue=[],this.scopes=[],this.nextIndex=0,this.retryAfter=0}get hasRequests(){return this.requestsQueue.length>0}get(c,n,o,f){const m=this.nextIndex++,A=new Zm(m,c,n,"GET");A.headers=f,this.allRequests.push(A),this.requestsQueue.push(m),o&&(this.scopes=this.scopes.concat(o))}executeNext(){return Ym(this,void 0,void 0,function*(){const c=new Map;if(this.retryAfter&&(yield(d=1e3*this.retryAfter,function(d,c,n,o){return new(n||(n=Promise))(function(m,A){function F(Me){try{Se(o.next(Me))}catch(We){A(We)}}function ae(Me){try{Se(o.throw(Me))}catch(We){A(We)}}function Se(Me){Me.done?m(Me.value):function f(m){return m instanceof n?m:new n(function(A){A(m)})}(Me.value).then(F,ae)}Se((o=o.apply(d,c||[])).next())})}(void 0,void 0,void 0,function*(){return new Promise(c=>{setTimeout(c,d)})})),this.retryAfter=0),!this.hasRequests)return c;var d;const n=this.requestsQueue.splice(0,20),o=new ki.Tz;for(const ae of n.map(Se=>this.allRequests[Se]))o.addRequest({id:ae.index.toString(),request:new Request(Kd.baseUrl+ae.resource,{method:ae.method,headers:ae.headers})});const f=this.scopes.length?(0,Cr.F)(this.scopes):[],m=this.graph.api("$batch").middlewareOptions(f),A=yield o.getContent(),F=yield m.post(A);for(const ae of F.responses){const Se=new ad,Me=parseInt(ae.id,10),We=this.allRequests[Me];Se.id=We.id,Se.index=We.index,Se.headers=ae.headers,200===ae.status?("string"==typeof ae.body?ae.headers["Content-Type"].includes("image/jpeg")?Se.content="data:image/jpeg;base64,"+ae.body:ae.headers["Content-Type"].includes("image/pjpeg")?Se.content="data:image/pjpeg;base64,"+ae.body:ae.headers["Content-Type"].includes("image/png")&&(Se.content="data:image/png;base64,"+ae.body):Se.content=ae.body,c.set(We.id,Se)):429===ae.status&&(this.requestsQueue.unshift(Me),this.retryAfter=Math.max(this.retryAfter,parseInt(ae.headers["Retry-After"],10)||1))}return c})}executeAll(){return Ym(this,void 0,void 0,function*(){const c=new Map;for(;this.hasRequests;){const n=yield this.executeNext();for(const[o,f]of n)c.set(o,f)}return c})}}class No{constructor(c){this.componentName="string"==typeof c?c:c.tagName.toLowerCase()}}const Ya=(...d)=>{const c=d[0];let n=c;for(let o=1;o<d.length;++o){const f=d[o];n.setNext&&n.setNext(f),n=f}return c};var Th=h(9629),ca=h(7388);class Jm{constructor(c,n){this._packageVersion=c,this._providerName=n}execute(c){var n;return function(d,c,n,o){return new(n||(n=Promise))(function(m,A){function F(Me){try{Se(o.next(Me))}catch(We){A(We)}}function ae(Me){try{Se(o.throw(Me))}catch(We){A(We)}}function Se(Me){Me.done?m(Me.value):function f(m){return m instanceof n?m:new n(function(A){A(m)})}(Me.value).then(F,ae)}Se((o=o.apply(d,c||[])).next())})}(this,void 0,void 0,function*(){try{if("string"==typeof c.request)if((0,ca.N)(c.request)){const o=[],f=c.middlewareControl.getMiddlewareOptions(No);f&&o.push(`${f.componentName}/${this._packageVersion}`),this._providerName&&o.push(`${this._providerName}/${this._packageVersion}`),o.push(`mgt/${this._packageVersion}`),o.push((0,Th.XH)(c.request,c.options,"SdkVersion"));const A=o.join(", ");(0,Th.RO)(c.request,c.options,"SdkVersion",A)}else null===(n=c?.options)||void 0===n||delete n.headers.SdkVersion}catch{}return yield this._nextMiddleware.execute(c)})}setNext(c){this._nextMiddleware=c}}var lp=h(1212),ev=h(5794);class Ec{get client(){return this._client}get componentName(){return this._componentName}get version(){return this._version}constructor(c,n="v1.0"){this._client=c,this._version=n}forComponent(c){const n=new Ec(this._client,this._version);return n.setComponent(c),n}api(c){let n=this._client.api(c).version(this._version);return this._componentName&&(n.middlewareOptions=o=>(n._middlewareOptions=n._middlewareOptions.concat(o),n),n=n.middlewareOptions([new No(this._componentName)])),n}createBatch(){return new Kd(this)}setComponent(c){this._componentName=c instanceof Element?ev.U.normalize(c.tagName):c}}var Ah=h(194),Al=function(d,c,n,o){return new(n||(n=Promise))(function(m,A){function F(Me){try{Se(o.next(Me))}catch(We){A(We)}}function ae(Me){try{Se(o.throw(Me))}catch(We){A(We)}}function Se(Me){Me.done?m(Me.value):function f(m){return m instanceof n?m:new n(function(A){A(m)})}(Me.value).then(F,ae)}Se((o=o.apply(d,c||[])).next())})},cp=function(d){return d.SELECT_ACCOUNT="select_account",d.LOGIN="login",d.CONSENT="consent",d}(cp||{});class dp extends Bi.DH{get publicClientApplication(){return this._publicClientApplication}get name(){return"MgtMsal2Provider"}get isMultiAccountDisabled(){return!this.isMultipleAccountEnabled}set isMultiAccountDisabled(c){this.isMultipleAccountEnabled=!c}get isMultiAccountSupportedAndEnabled(){return this.isMultipleAccountEnabled}get sessionStorageRequestedScopesKey(){return"mgt-requested-scopes"}get sessionStorageDeniedScopesKey(){return"mgt-denied-scopes"}get homeAccountKey(){return"275f3731-e4a4-468a-bf9c-baca24b31e26"}constructor(c){super(),this.isMultipleAccountEnabled=!0,this.handleMsalEvent=n=>{"msal:acquireTokenSuccess"===n.eventType&&"scopes"in n.payload&&(this.approvedScopes=n.payload.scopes)},this.initProvider(c)}initProvider(c){return Al(this,void 0,void 0,function*(){const n=c.options||{auth:{clientId:""}};if(this.ms_config=n,this.ms_config.cache=n.cache||{},this.ms_config.cache.cacheLocation=n.cache.cacheLocation||"localStorage",(typeof this.ms_config.cache.storeAuthStateInCookie>"u"||null===this.ms_config.cache.storeAuthStateInCookie)&&(this.ms_config.cache.storeAuthStateInCookie=!0),this.ms_config.system=n.system||{},this.ms_config.system.iframeHashTimeout=n.system.iframeHashTimeout||1e4,c.authority&&(this.ms_config.auth.authority=c.authority),c.redirectUri&&(this.ms_config.auth.redirectUri=c.redirectUri),"clientId"in c){if(!c.clientId)throw new Error("clientId must be provided");this.ms_config.auth.clientId=c.clientId,this._publicClientApplication=new gr(this.ms_config)}else{if(!("publicClientApplication"in c))throw new Error("either clientId or publicClientApplication must be provided");if(!c.publicClientApplication)throw new Error("publicClientApplication must be provided");this._publicClientApplication=c.publicClientApplication}this._publicClientApplication.addEventCallback(this.handleMsalEvent),yield this._publicClientApplication.initialize(),this.ms_config.system=n.system||{},this.ms_config.system.iframeHashTimeout=n.system.iframeHashTimeout||1e4,this._loginType=typeof c.loginType<"u"?c.loginType:Bi.Gb.Redirect,this._loginHint=typeof c.loginHint<"u"?c.loginHint:null,this._sid=typeof c.sid<"u"?c.sid:null,this.isIncrementalConsentDisabled=typeof c.isIncrementalConsentDisabled<"u"&&c.isIncrementalConsentDisabled,this._domainHint=typeof c.domainHint<"u"?c.domainHint:null,this.scopes=typeof c.scopes<"u"?c.scopes:["user.read"],this._prompt=typeof c.prompt<"u"?c.prompt:cp.SELECT_ACCOUNT;const o=c;this.isMultipleAccountEnabled=!(typeof o.isMultiAccountEnabled<"u")||o.isMultiAccountEnabled,this.baseURL=typeof o.baseURL<"u"?o.baseURL:this.baseURL,this.customHosts=o.customHosts,this.graph=((d,c,n)=>{const o=[new ki.zA(d),new ki.Z$(new ki.Rz),new ki.MD,new Jm(lp.i,d.name),new ki.eg],f=d.baseURL?d.baseURL:ap.I,m=ki.Kj.initWithMiddleware({middleware:Ya(...o),customHosts:d.customHosts?new Set(d.customHosts):null,baseUrl:f}),A=new Ec(m,void 0);return A})(this);try{const f=yield this._publicClientApplication.handleRedirectPromise();null!==f?this.handleResponse(f?.account):yield this.trySilentSignIn()}catch(f){throw console.error("\u{1f992}: Problem attempting to sign in",f),f}})}trySilentSignIn(){return Al(this,void 0,void 0,function*(){const c={scopes:this.scopes,domainHint:this._domainHint};if(this._sid||this._loginHint){c.sid=this._sid,c.loginHint=this._loginHint;try{this.setState(Bi.HJ.Loading);const n=yield this._publicClientApplication.ssoSilent(c);n&&this.handleResponse(n?.account)}catch{this.setState(Bi.HJ.SignedOut)}}else{const n=this.getAccount();if(n&&(yield this.getAccessToken(null)))return void this.handleResponse(n);this.setState(Bi.HJ.SignedOut)}})}login(){return Al(this,void 0,void 0,function*(){const c={scopes:this.scopes,loginHint:this._loginHint,prompt:this._prompt,domainHint:this._domainHint};if(this._loginType===Bi.Gb.Popup){const n=yield this._publicClientApplication.loginPopup(c);this.handleResponse(n?.account)}else{const n=Object.assign({},c);yield this._publicClientApplication.loginRedirect(n)}})}getAllAccounts(){const c=[];return this._publicClientApplication.getAllAccounts().forEach(n=>{c.push({name:n.name,mail:n.username,id:n.homeAccountId})}),c}setActiveAccount(c){const n=this._publicClientApplication.getAccountByHomeId(c.id),o=this._publicClientApplication.getActiveAccount(),f=this.getStoredAccount();f&&n&&o&&f.homeAccountId===n.homeAccountId&&o.homeAccountId===n.homeAccountId||(this._publicClientApplication.setActiveAccount(n),this.setStoredAccount(),super.setActiveAccount(c))}getActiveAccount(){const c=this._publicClientApplication.getActiveAccount();if(c)return{name:c.name,mail:c.username,id:c.homeAccountId,tenantId:c.tenantId}}handleResponse(c){null!==c?(this.setActiveAccount({name:c.name,id:c.homeAccountId,mail:c.username}),this.setState(Bi.HJ.SignedIn)):this.setState(Bi.HJ.SignedOut),this.clearRequestedScopes()}storage(){return"localStorage"===this.ms_config.cache.cacheLocation?window.localStorage:window.sessionStorage}setStoredAccount(){this.clearStoredAccount(),this.storage().setItem(this.homeAccountKey,this._publicClientApplication.getActiveAccount().homeAccountId)}getStoredAccount(){const c=this.storage().getItem(this.homeAccountKey);return this._publicClientApplication.getAccountByHomeId(c)}clearStoredAccount(){this.storage().removeItem(this.homeAccountKey)}setRequestedScopes(c){c&&sessionStorage.setItem(this.sessionStorageRequestedScopesKey,JSON.stringify(c))}addDeniedScopes(c){if(c){let n=this.getDeniedScopes()||[];n=n.concat(c);let o=n.indexOf("openid");-1!==o&&n.splice(o,1),o=n.indexOf("profile"),-1!==o&&n.splice(o,1),sessionStorage.setItem(this.sessionStorageDeniedScopesKey,JSON.stringify(n))}}getDeniedScopes(){const c=sessionStorage.getItem(this.sessionStorageDeniedScopesKey);return c?JSON.parse(c):null}areScopesDenied(c){if(c){const n=this.getDeniedScopes();if(n&&n.filter(o=>-1!==c.indexOf(o)).length>0)return!0}return!1}clearRequestedScopes(){sessionStorage.removeItem(this.sessionStorageRequestedScopesKey)}getAccount(){return this.getStoredAccount()||(this._publicClientApplication.getAllAccounts().length>0?this._publicClientApplication.getAllAccounts()[0]:null)}logout(){return Al(this,void 0,void 0,function*(){const n={account:this._publicClientApplication.getActiveAccount()};this.clearStoredAccount(),this._loginType===Bi.Gb.Redirect?(this.setState(Bi.HJ.SignedOut),yield this._publicClientApplication.logoutRedirect(n)):(yield this._publicClientApplication.logoutPopup(Object.assign({},n)),1!==this._publicClientApplication.getAllAccounts.length&&this.isMultipleAccountEnabled?yield this.trySilentSignIn():this.setState(Bi.HJ.SignedOut))})}getAccessToken(c){return Al(this,void 0,void 0,function*(){const n=c&&c.scopes||this.scopes,o={scopes:n,account:this.getAccount()};try{const f=o;return(yield this._publicClientApplication.acquireTokenSilent(f)).accessToken}catch(f){if(f instanceof Ah.CB){if(this.isIncrementalConsentDisabled)return null;if(this._loginType===Bi.Gb.Redirect){if(this.areScopesDenied(n))throw f;this.setRequestedScopes(n),yield this._publicClientApplication.acquireTokenRedirect(o)}else try{return(yield this._publicClientApplication.acquireTokenPopup(o)).accessToken}catch(m){throw console.error("\u{1f992}: problem with pop-up sign in",m),m}}else this.setState(Bi.HJ.SignedOut)}throw null})}}var da=h(6479),up=h(7531),Lt=h(8324),Mt=h(9559),Vs=h(2578),Ji=h(4569);const nv=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{--card-height:auto;--card-width:99%;background-color:var(--agenda-background-color,transparent)}:host .header{margin:var(--agenda-header-margin,18px 0 12px 10px);font-size:var(--agenda-header-font-size, 24px);font-style:normal;font-weight:400;line-height:32px;color:var(--agenda-header-color,var(--neutral-foreground-rest));opacity:.9}:host .agenda,:host .group{display:flex;flex-direction:column;row-gap:var(--agenda-event-row-gap,14px)}:host .agenda>.group:first-child>.header,:host .group>.group:first-child>.header{margin-top:0}:host .agenda .event,:host .group .event{background:var(--agenda-event-background-color,var(--fill-color));border:var(--agenda-event-border,solid 2px transparent);box-shadow:var(--agenda-event-box-shadow,var(--elevation-shadow-card-rest));padding:var(--agenda-event-padding,12px);position:relative;display:flex;flex:1 1 auto;content-visibility:visible;contain:none}:host .agenda .event-container,:host .group .event-container{border-radius:calc(var(--layer-corner-radius) * 1px);padding:1px}:host .agenda .event.narrow,:host .group .event.narrow{display:flex;flex-direction:column;inset:0}:host .agenda .event-time-container,:host .group .event-time-container{font-style:normal;font-weight:600;font-size:12px;color:var(--agenda-event-time-color,var(--neutral-foreground-rest));width:112px;height:16px}:host .agenda .event-time-container.narrow,:host .group .event-time-container.narrow{margin-bottom:1px;width:100%}:host .agenda .event-time,:host .group .event-time{font-size:var(--agenda-event-time-font-size, 12px);color:var(--agenda-event-time-color,var(--neutral-foreground-rest));font-weight:600}:host .agenda .event-details-container,:host .group .event-details-container{display:flex;flex-direction:column;position:relative;bottom:8px;top:0;padding-inline-start:32px}:host .agenda .event-details-container.narrow,:host .group .event-details-container.narrow{position:inherit;left:6px;display:flex;flex-direction:column;padding-inline-start:0}:host .agenda .event-subject,:host .group .event-subject{font-style:normal;font-weight:400;font-size:var(--agenda-event-subject-font-size, 20px);line-height:28px;color:var(--agenda-event-subject-color,var(--neutral-foreground-rest));mix-blend-mode:normal;position:inherit;bottom:8px}:host .agenda .event-location-container,:host .group .event-location-container{display:inline-flex;flex-direction:row}:host .agenda .event-location-container .event-location,:host .group .event-location-container .event-location{padding-inline-start:3px;font-style:normal;font-weight:400;font-size:var(--agenda-event-location-font-size, 12px);line-height:16px;color:var(--agenda-event-location-color,var(--neutral-foreground-rest))}:host .agenda .event-location-container .event-location-loading,:host .group .event-location-container .event-location-loading{width:90px;height:10px;margin:2px 0 0 4px}:host .agenda .event-location-container .event-location-icon,:host .group .event-location-container .event-location-icon{display:inline-flex}:host .agenda .event-location-container .event-location-icon svg,:host .group .event-location-container .event-location-icon svg{position:relative;top:2px;width:12px;height:12px}:host .agenda .event-location-container .event-location-icon svg path,:host .group .event-location-container .event-location-icon svg path{stroke:var(--agenda-event-location-color,var(--neutral-foreground-rest))}:host .agenda .event-location-container .event-location-icon-loading,:host .group .event-location-container .event-location-icon-loading{width:14px;height:14px}:host .agenda .event-location-container .event-attendee-loading,:host .group .event-location-container .event-attendee-loading{width:20px;height:20px;border-radius:10px;margin:0 2px 0 0}:host .agenda .event-attendees,:host .group .event-attendees{--list-margin:8px 0 0 0;--person-avatar-size:20px}fluent-card.event.event-loading{--card-height:90px}:host .event-attendees{--color:$agenda-event-attendees-color}:host fluent-tooltip{width:auto;contain:inline-size}[dir=rtl] :host{direction:rtl}[dir=rtl] .event-time-container{direction:ltr;display:flex;justify-content:flex-end}@media (forced-colors:active) and (prefers-color-scheme:dark){:host .agenda .event-location-container .event-location-icon svg path{stroke:rgb(255,255,255)!important}}@media (forced-colors:active) and (prefers-color-scheme:light){:host .agenda .event-location-container .event-location-icon svg path{stroke:rgb(0,0,0)!important}}
`];var Lo=h(7425),Il=function(d,c,n,o){return new(n||(n=Promise))(function(m,A){function F(Me){try{Se(o.next(Me))}catch(We){A(We)}}function ae(Me){try{Se(o.throw(Me))}catch(We){A(We)}}function Se(Me){Me.done?m(Me.value):function f(m){return m instanceof n?m:new n(function(A){A(m)})}(Me.value).then(F,ae)}Se((o=o.apply(d,c||[])).next())})};const ar=(d,c,n)=>Il(void 0,void 0,void 0,function*(){const o=d.api(c).middlewareOptions((0,Cr.F)(n)).orderby("start/dateTime");return Lo.E.create(d,o)});var Kn=h(2710),Ma=h(4229),Tc=h(6692),hp=h(1786),vo=h(5527),Sc=h(54);const Oa=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .people-list{list-style:none;margin:var(--people-list-margin,8px 4px 8px 8px);padding:unset;display:flex;align-items:center;gap:var(--people-avatar-gap,4px)}:host .people-list .people-person{--person-avatar-size:var(--people-person-avatar-size, 24px)}:host .overflow span{vertical-align:middle;color:var(--people-overflow-font-color,currentColor);font-size:var(--people-overflow-font-size, 12px);font-weight:var(--people-overflow-font-weight,400)}
`];var zo=h(8940),Go=function(d,c,n,o){var A,f=arguments.length,m=f<3?c:null===o?o=Object.getOwnPropertyDescriptor(c,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,c,n,o);else for(var F=d.length-1;F>=0;F--)(A=d[F])&&(m=(f<3?A(m):f>3?A(c,n,m):A(c,n))||m);return f>3&&m&&Object.defineProperty(c,n,m),m},Wo=function(d,c){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,c)};const ld=()=>{(0,da.sN)(),(0,zo.N)("people",Qd)};let Qd=(()=>{class d extends Vs.N{static get styles(){return Oa}static get requiredScopes(){return[...new Set(["user.read.all","people.read","user.readbasic.all","presence.read.all","contacts.read",...da.O$.requiredScopes])]}constructor(){super(),this.personCardInteraction="hover",this.version="v1.0",this.scopes=[],this._peoplePresence={},this._arrowKeyLocation=-1,this.renderContent=()=>this.people&&0!==this.people.length?this.renderTemplate("default",{people:this.people,max:this.showMax})||this.renderPeople():this.renderNoData(),this.renderLoading=()=>this.renderTemplate("loading",null)||Lt.qy``,this.handleKeyDown=n=>{const o=this.shadowRoot.querySelector(".people-list");let f;const m=o?.children;for(const ae of m){const Se=ae;Se.setAttribute("tabindex","-1"),Se.blur()}const A=o.childElementCount,F=n.key;if("ArrowRight"===F)this._arrowKeyLocation=(this._arrowKeyLocation+1+A)%A;else if("ArrowLeft"===F)this._arrowKeyLocation=(this._arrowKeyLocation-1+A)%A;else if("Tab"===F||"Escape"===F)this._arrowKeyLocation=-1,o.blur();else if(["Enter","space"," "].includes(F)&&"none"!==this.personCardInteraction){const Se=m[this._arrowKeyLocation].querySelector("mgt-person");Se&&Se.showPersonCard()}this._arrowKeyLocation>-1&&(f=m[this._arrowKeyLocation],f.setAttribute("tabindex","1"),f.focus())},this.showMax=3}clearState(){this.people=null}args(){return[this.providerState,this.groupId,this.userIds,this.peopleQueries,this.showMax,this.resource,this.version,this.fallbackDetails]}renderPeople(){const n=this.people.slice(0,this.showMax).filter(o=>o);return Lt.qy`
      <ul
        tabindex="0"
        class="people-list"
        aria-label="people"
        @keydown=${this.handleKeyDown}>
        ${(0,Ma.u)(n,o=>o.id?o.id:o.displayName,o=>Lt.qy`
            <li tabindex="-1" class="people-person">
              ${this.renderPerson(o)}
            </li>
          `)}
        ${this.people.length>this.showMax?this.renderOverflow():null}
      </ul>
    `}renderOverflow(){const n=this.people.length-this.showMax;return this.renderTemplate("overflow",{extra:n,max:this.showMax,people:this.people})||Lt.qy`
        <li tabindex="-1" aria-label="and ${n} more attendees" class="overflow"><span>+${n}</span></li>
      `}renderPerson(n){let o={activity:"Offline",availability:"Offline",id:null};return this.showPresence&&this._peoplePresence&&(o=this._peoplePresence[n.id]),this.renderTemplate("person",{person:n},n.id)||Ji.Q`
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
      `}renderNoData(){return this.renderTemplate("no-data",null)||Lt.qy``}loadState(){return function(d,c,n,o){return new(n||(n=Promise))(function(m,A){function F(Me){try{Se(o.next(Me))}catch(We){A(We)}}function ae(Me){try{Se(o.throw(Me))}catch(We){A(We)}}function Se(Me){Me.done?m(Me.value):function f(m){return m instanceof n?m:new n(function(A){A(m)})}(Me.value).then(F,ae)}Se((o=o.apply(d,c||[])).next())})}(this,void 0,void 0,function*(){if(!this.people){const n=Qi.b.globalProvider;if(n&&n.state===Bi.HJ.SignedIn){const o=n.graph.forComponent(this);this.people=this.groupId?yield(0,vo.sb)(o,null,this.groupId,this.showMax,"person"):this.userIds?yield(0,vo.$q)(o,this.userIds,"","",this.fallbackDetails):this.peopleQueries?yield(0,vo.vl)(o,this.peopleQueries,this.fallbackDetails):this.resource?yield(0,Tc.ox)(o,this.version,this.resource,this.scopes):yield(0,Tc.cB)(o),this._peoplePresence=this.showPresence?yield(0,hp.u)(o,this.people):null}}})}}return Go([(0,Mt.MZ)({attribute:"group-id",type:String}),Wo("design:type",String)],d.prototype,"groupId",void 0),Go([(0,Mt.MZ)({attribute:"user-ids",converter:(c,n)=>c.split(",").map(o=>o.trim())}),Wo("design:type",Array)],d.prototype,"userIds",void 0),Go([(0,Mt.MZ)({attribute:"people",type:Object}),Wo("design:type",Array)],d.prototype,"people",void 0),Go([(0,Mt.MZ)({attribute:"people-queries",converter:(c,n)=>c.split(",").map(o=>o.trim())}),Wo("design:type",Array)],d.prototype,"peopleQueries",void 0),Go([(0,Mt.MZ)({attribute:"show-max",type:Number}),Wo("design:type",Number)],d.prototype,"showMax",void 0),Go([(0,Mt.MZ)({attribute:"show-presence",type:Boolean}),Wo("design:type",Boolean)],d.prototype,"showPresence",void 0),Go([(0,Mt.MZ)({attribute:"person-card",converter:(c,n)=>(0,Sc.e)(c,"hover")}),Wo("design:type",String)],d.prototype,"personCardInteraction",void 0),Go([(0,Mt.MZ)({attribute:"resource",type:String}),Wo("design:type",String)],d.prototype,"resource",void 0),Go([(0,Mt.MZ)({attribute:"version",type:String}),Wo("design:type",Object)],d.prototype,"version",void 0),Go([(0,Mt.MZ)({attribute:"scopes",converter:c=>c?c.toLowerCase().split(","):null,reflect:!0}),Wo("design:type",Array)],d.prototype,"scopes",void 0),Go([(0,Mt.MZ)({attribute:"fallback-details",type:Array}),Wo("design:type",Array)],d.prototype,"fallbackDetails",void 0),Go([(0,Mt.wk)(),Wo("design:type",Object)],d.prototype,"_arrowKeyLocation",void 0),d})();var Ko=h(3601),Xd=h(5409),Fr=h(3402),_s=function(d,c,n,o){var A,f=arguments.length,m=f<3?c:null===o?o=Object.getOwnPropertyDescriptor(c,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,c,n,o);else for(var F=d.length-1;F>=0;F--)(A=d[F])&&(m=(f<3?A(m):f>3?A(c,n,m):A(c,n))||m);return f>3&&m&&Object.defineProperty(c,n,m),m},el=function(d,c){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,c)},cd=function(d,c,n,o){return new(n||(n=Promise))(function(m,A){function F(Me){try{Se(o.next(Me))}catch(We){A(We)}}function ae(Me){try{Se(o.throw(Me))}catch(We){A(We)}}function Se(Me){Me.done?m(Me.value):function f(m){return m instanceof n?m:new n(function(A){A(m)})}(Me.value).then(F,ae)}Se((o=o.apply(d,c||[])).next())})};let ov=(()=>{class d extends Vs.N{constructor(){super(...arguments),this.days=3,this.renderContent=()=>{if(!this.events||0===this.events.length)return this.renderNoData();const n=this.showMax&&this.showMax>0?this.events.slice(0,this.showMax):this.events,o=this.renderTemplate("default",{events:n});return o||Lt.qy`
      <div dir=${this.direction} class="${(0,Fr.H)({agenda:!0,grouped:this.groupByDay})}">
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
        </fluent-card>`,this.onResize=()=>{this._isNarrow=this.offsetWidth<600}}static get styles(){return nv}static get requiredScopes(){return[...new Set(["calendars.read",...Qd.requiredScopes])]}connectedCallback(){this._isNarrow=this.offsetWidth<600,super.connectedCallback(),window.addEventListener("resize",this.onResize)}disconnectedCallback(){window.removeEventListener("resize",this.onResize),super.disconnectedCallback()}reload(){return cd(this,void 0,void 0,function*(){this.events=yield this.loadEvents()})}clearState(){this.events=null}renderNoData(){return this.renderTemplate("no-data",null)||Lt.qy``}renderEvent(n){this._isNarrow=this.offsetWidth<600;const o={narrow:this._isNarrow};return Lt.qy`
      <fluent-card class="${(0,Fr.H)(Object.assign({event:!0},o))}">
        <div class="${(0,Fr.H)(Object.assign({"event-time-container":!0},o))}">
          <div class="event-time" aria-label="${this.getEventTimeString(n)}">${this.getEventTimeString(n)}</div>
        </div>
        <div class="${(0,Fr.H)(Object.assign({"event-details-container":!0},o))}">
          ${this.renderTitle(n)} ${this.renderLocation(n)} ${this.renderAttendees(n)}
        </div>
        <div class="event-other-container">${this.renderOther(n)}</div>
      </fluent-card>
    `}renderHeader(n){return this.renderTemplate("header",{header:n},"header-"+n)||Lt.qy`
        <div class="header" aria-label="${n}">${n}</div>
      `}renderTitle(n){return Lt.qy`
      <div
        aria-label=${n.subject}
        class="${(0,Fr.H)({"event-subject":!0,narrow:this._isNarrow})}"
      >
        ${n.subject}
      </div>`}renderLocation(n){return n.location.displayName?Lt.qy`
      <div class="event-location-container">
        <div class="event-location-icon">${(0,Kn.r)(Kn.A.OfficeLocation)}</div>
        <div class="event-location" aria-label="${n.location.displayName}">${n.location.displayName}</div>
      </div>
    `:null}renderAttendees(n){return n.attendees.length?Ji.Q`
      <mgt-people
        show-max="5"
        show-presence
        class="event-attendees"
        .peopleQueries=${n.attendees.map(o=>o.emailAddress.address)}
      ></mgt-people>
    `:null}renderOther(n){return this.hasTemplate("event-other")?Lt.qy`
          ${this.renderTemplate("event-other",{event:n},n.id+"-other")}
        `:null}renderGroups(n){const o={};return n.forEach(f=>{var m;let A=null===(m=f?.start)||void 0===m?void 0:m.dateTime;"UTC"===f.end.timeZone&&(A+="Z");const F=this.getDateHeaderFromDateTimeString(A);o[F]=o[F]||[],o[F].push(f)}),Lt.qy`
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
              </div>`)}`}args(){return[this.providerState,this.preferredTimezone,this.eventQuery,this.date,this.groupId,this.days]}loadState(){return cd(this,void 0,void 0,function*(){if(this.events)return;const n=yield this.loadEvents();n?.length>0&&(this.events=n)})}eventClicked(n){this.fireCustomEvent("eventClick",n)}getEventTimeString(n){if(n.isAllDay)return"ALL DAY";let o=n.start.dateTime;"UTC"===n.start.timeZone&&(o+="Z");let f=n.end.dateTime;return"UTC"===n.end.timeZone&&(f+="Z"),`${this.prettyPrintTimeFromDateTime(new Date(o))} - ${this.prettyPrintTimeFromDateTime(new Date(f))}`}loadEvents(){return cd(this,void 0,void 0,function*(){const n=Qi.b.globalProvider;let o=[];if(n?.state===Bi.HJ.SignedIn){const f=n.graph.forComponent(this);if(this.eventQuery)try{const m=this.eventQuery.split("|");let A,F;m.length>1?(F=m[0].trim(),A=m[1].trim()):F=this.eventQuery;const ae=yield ar(f,F,A?[A]:[]);if(ae?.value)for(o=ae.value;ae.hasNext;)yield ae.next(),o=ae.value}catch{}else{const m=this.date?new Date(this.date):new Date,A=new Date(m.getTime());A.setDate(m.getDate()+this.days);try{const F=yield((d,c,n,o)=>Il(void 0,void 0,void 0,function*(){const f=`startdatetime=${c.toISOString()}`,m=`enddatetime=${n.toISOString()}`;return ar(d,o?`groups/${o}/calendar/calendarview?${f}&${m}`:`me/calendarview?${f}&${m}`,o?["Group.Read.All","Group.ReadWrite.All"]:["Calendars.ReadBasic","Calendars.Read","Calendars.ReadWrite"])}))(f,m,A,this.groupId);if(F?.value)for(o=F.value;F.hasNext;)yield F.next(),o=F.value}catch{}}}return o})}prettyPrintTimeFromDateTime(n){return n.toLocaleTimeString(navigator.language,{timeStyle:"short",timeZone:this.preferredTimezone})}getDateHeaderFromDateTimeString(n){return new Date(n).toLocaleDateString(navigator.language,{dateStyle:"full",timeZone:this.preferredTimezone})}}return _s([(0,Mt.MZ)({attribute:"date",type:String}),el("design:type",String)],d.prototype,"date",void 0),_s([(0,Mt.MZ)({attribute:"group-id",type:String}),el("design:type",String)],d.prototype,"groupId",void 0),_s([(0,Mt.MZ)({attribute:"days",type:Number}),el("design:type",Object)],d.prototype,"days",void 0),_s([(0,Mt.MZ)({attribute:"event-query",type:String}),el("design:type",String)],d.prototype,"eventQuery",void 0),_s([(0,Mt.MZ)({attribute:"events",type:Array,hasChanged:(c,n)=>c!==n}),el("design:type",Array)],d.prototype,"events",void 0),_s([(0,Mt.MZ)({attribute:"show-max",type:Number}),el("design:type",Number)],d.prototype,"showMax",void 0),_s([(0,Mt.MZ)({attribute:"group-by-day",type:Boolean}),el("design:type",Boolean)],d.prototype,"groupByDay",void 0),_s([(0,Mt.MZ)({attribute:"preferred-timezone",type:String}),el("design:type",String)],d.prototype,"preferredTimezone",void 0),_s([(0,Mt.MZ)({attribute:!1}),el("design:type",Boolean)],d.prototype,"_isNarrow",void 0),d})();var Fo=h(2404),Ih=h(1235),Zd=h(4130),Dh=h(7768),Zr=h(5889),Pa=function(d,c,n,o){var A,f=arguments.length,m=f<3?c:null===o?o=Object.getOwnPropertyDescriptor(c,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,c,n,o);else for(var F=d.length-1;F>=0;F--)(A=d[F])&&(m=(f<3?A(m):f>3?A(c,n,m):A(c,n))||m);return f>3&&m&&Object.defineProperty(c,n,m),m},ss=function(d,c){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,c)};const tl=d=>Array.isArray(d?.value),gb=["json","image"],js=()=>Fo._.config.response.isEnabled&&Fo._.config.isEnabled,kh=()=>(0,zo.N)("get",Yd);let Yd=(()=>{class d extends Vs.N{constructor(){super(...arguments),this.scopes=[],this.version="v1.0",this.type="json",this.maxPages=3,this.pollingRate=0,this.cacheEnabled=!1,this.cacheInvalidationPeriod=0,this.isPolling=!1,this.isRefreshing=!1,this.renderLoading=()=>{const n=this.renderTemplate("loading",null);return tl(this.response)?this.renderValueContentWithDefaultTemplate(Lt.qy`${this.response.value.map(o=>this.renderTemplate("value",o,o.id))} ${n} `):n},this.renderContent=()=>{if(this.hasTemplate("value")&&tl(this.response)){const n=tl(this.response)?Lt.qy`
          ${this.response.value.map(o=>this.renderTemplate("value",o,o.id))}
        `:this.renderTemplate("value",this.response);return this.renderValueContentWithDefaultTemplate(n)}return this.response?this.renderTemplate("default",this.response)||Lt.qy``:this.hasTemplate("no-data")?this.renderTemplate("no-data",null):Lt.qy``}}refresh(n=!1){this.isRefreshing=!0,n&&this.clearState(),this._task.run()}clearState(){this.response=null}args(){return[this.providerState,this.resource,this.scopes,this.version,this.pollingRate,this.type,this.maxPages,this.cacheEnabled,this.cacheInvalidationPeriod]}renderValueContentWithDefaultTemplate(n){var o,f;if(this.hasTemplate("default")){const m=this.renderTemplate("default",this.response);return(null!==(f=null===(o=this.templates.value)||void 0===o?void 0:o.templateOrder)&&void 0!==f?f:999)>this.templates.default.templateOrder?Lt.qy`
          ${m}${n}
        `:Lt.qy`
          ${n}${m}
        `}return n}loadState(){var n,o,f;return function(d,c,n,o){return new(n||(n=Promise))(function(m,A){function F(Me){try{Se(o.next(Me))}catch(We){A(We)}}function ae(Me){try{Se(o.throw(Me))}catch(We){A(We)}}function Se(Me){Me.done?m(Me.value):function f(m){return m instanceof n?m:new n(function(A){A(m)})}(Me.value).then(F,ae)}Se((o=o.apply(d,c||[])).next())})}(this,void 0,void 0,function*(){const m=Qi.b.globalProvider;if(this.error=null,m&&m.state===Bi.HJ.SignedIn){if(this.resource){try{let A;const F=`${this.version}${this.resource}`;let ae=null;if(this.shouldRetrieveCache()){A=Fo._.getCache(Zr.j.get,Zr.j.get.stores.responses);const Se=js()?yield A.getValue(F):null;Se&&(d=>this.cacheInvalidationPeriod||Fo._.config.response.invalidationPeriod||Fo._.config.defaultInvalidationPeriod)()>Date.now()-Se.timeCached&&(ae=JSON.parse(Se.response))}if(!ae){let Se=this.resource,Me=!1;null!==(n=this.response)&&void 0!==n&&n["@odata.deltaLink"]?(Se=this.response["@odata.deltaLink"],Me=!0):Me=new URL(Se,"https://graph.microsoft.com").pathname.endsWith("delta");const We=m.graph.forComponent(this);let Vt=We.api(Se).version(this.version);if(!(null===(o=this.scopes)||void 0===o)&&o.length&&(Vt=Vt.middlewareOptions((0,Cr.F)(this.scopes))),"json"===this.type){if(ae=yield Vt.get(),Me&&tl(this.response)&&tl(ae)&&(ae.value=this.response.value.concat(ae.value)),!this.isPolling&&!(0,Ih.a)(this.response,ae)&&(this.response=ae),tl(ae)&&ae["@odata.nextLink"]){let Yt=1,rn=ae;for(;(Yt<this.maxPages||this.maxPages<=0||Me&&this.pollingRate)&&rn?.["@odata.nextLink"];){Yt++;const bn=rn["@odata.nextLink"].split(this.version)[1];rn=yield We.api(bn).version(this.version).get(),null!==(f=rn?.value)&&void 0!==f&&f.length&&(rn.value=ae.value.concat(rn.value),ae=rn,this.isPolling||(this.response=ae))}}}else{if(-1===this.resource.indexOf("/photo/$value")&&-1===this.resource.indexOf("/thumbnails/"))throw new Error("Only /photo/$value and /thumbnails/ endpoints support the image type");let Yt;if(this.resource.indexOf("/photo/$value")>-1){const rn=this.resource.replace("/photo/$value",""),bn=yield(0,Zd.e_)(We,rn,this.scopes);bn&&(Yt=bn.photo)}else if(this.resource.indexOf("/thumbnails/")>-1){const rn=yield(0,Dh.W1)(We,this.resource,this.scopes);rn&&(Yt=rn.thumbnail)}Yt&&(ae={image:Yt})}this.shouldUpdateCache()&&ae&&(A=Fo._.getCache(Zr.j.get,Zr.j.get.stores.responses),yield A.putValue(F,{response:JSON.stringify(ae)}))}(0,Ih.a)(this.response,ae)||(this.response=ae)}catch(A){this.error=A}this.response&&(this.error=null,this.pollingRate&&setTimeout(()=>{this.isPolling=!0,this.loadState().finally(()=>{this.isPolling=!1})},this.pollingRate))}else this.response=null;this.isRefreshing=!1,this.fireCustomEvent("dataChange",{response:this.response,error:this.error},!0,!1,!0)}})}shouldRetrieveCache(){return js()&&this.cacheEnabled&&!(this.isRefreshing||this.isPolling)}shouldUpdateCache(){return js()&&this.cacheEnabled}}return Pa([(0,Mt.MZ)({attribute:"resource",reflect:!0,type:String}),ss("design:type",String)],d.prototype,"resource",void 0),Pa([(0,Mt.MZ)({attribute:"scopes",converter:(c,n)=>c?c.toLowerCase().split(","):null,reflect:!0}),ss("design:type",Array)],d.prototype,"scopes",void 0),Pa([(0,Mt.MZ)({attribute:"version",reflect:!0,type:String}),ss("design:type",Object)],d.prototype,"version",void 0),Pa([(0,Mt.MZ)({attribute:"type",reflect:!0,type:String,converter:c=>((d,c="json")=>(d=>"string"==typeof d&&gb.includes(d))(d)?d:c)(c,"json")}),ss("design:type",String)],d.prototype,"type",void 0),Pa([(0,Mt.MZ)({attribute:"max-pages",reflect:!0,type:Number}),ss("design:type",Object)],d.prototype,"maxPages",void 0),Pa([(0,Mt.MZ)({attribute:"polling-rate",reflect:!0,type:Number}),ss("design:type",Object)],d.prototype,"pollingRate",void 0),Pa([(0,Mt.MZ)({attribute:"cache-enabled",reflect:!0,type:Boolean}),ss("design:type",Object)],d.prototype,"cacheEnabled",void 0),Pa([(0,Mt.MZ)({attribute:"cache-invalidation-period",type:Number}),ss("design:type",Object)],d.prototype,"cacheInvalidationPeriod",void 0),Pa([(0,Mt.MZ)({attribute:!1}),ss("design:type",Object)],d.prototype,"response",void 0),Pa([(0,Mt.MZ)({attribute:!1}),ss("design:type",Object)],d.prototype,"error",void 0),d})();var Yl=h(6271),Jd=h(4166),eu=h(2898);const Rh=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .signed-in-person{--person-background-color:$signed-in-background-color;padding:var(--login-button-padding,10px 16px)}:host .account{padding:0;margin:7px 0}:host .account,:host .person,:host .signed-in-person{--person-avatar-size:var(--login-person-avatar-size, 40px)}:host fluent-button.signed-in{height:auto;min-width:auto}:host fluent-button.signed-in::part(control){width:100%;height:100%;padding:var(--login-button-padding,0);background:var(--login-signed-in-background,transparent);word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host fluent-button.signed-in::part(control):focus-within,:host fluent-button.signed-in::part(control):hover{background:var(--login-signed-in-hover-background,var(--neutral-fill-stealth-hover));--secondary-text-color:var(--secondary-text-hover-color)}:host fluent-button.signed-out::part(control){color:var(--login-signed-out-button-text-color,var(--neutral-fill-foreground-rest));background:var(--login-signed-out-button-background,padding-box linear-gradient(var(--neutral-fill-rest),var(--neutral-fill-rest)),border-box var(--neutral-stroke-control-rest))}:host fluent-button.signed-out::part(control):focus-within,:host fluent-button.signed-out::part(control):hover{background:var(--login-signed-out-button-hover-background,var(--neutral-fill-stealth-hover))}:host fluent-button.small::part(control):hover{background:0 0}:host fluent-button:focus-visible{outline-style:var(--focus-ring-style,auto)}:host fluent-card{--fill-color:var(--login-popup-background-color, var(--neutral-layer-1));padding:var(--login-popup-padding,16px)}:host .login-root .small .signed-in-person{padding:0;background:0 0}:host .login-root .small .signed-in-person:focus-within,:host .login-root .small .signed-in-person:hover{background:0 0}:host .login-root .account-list{padding:calc(var(--design-unit) * 1px) 0;margin:0}:host .login-root .account-item{height:auto;min-width:auto;margin-top:4px;background:var(--login-popup-background-color,var(--neutral-layer-1));list-style-type:none;cursor:pointer}:host .login-root .account-item:hover{background:var(--login-account-item-hover-bg-color,var(--neutral-fill-stealth-hover));--person-background-color:$login-account-item-hover-bg-color}:host .login-root .flyout .flyout-command{color:var(--login-flyout-command-text-color,var(--accent-foreground-rest))}:host .login-root .flyout .popup-content .commands{display:flex;align-items:flex-end;justify-content:flex-end}:host .login-root .flyout .popup-content .commands fluent-button::part(control){color:var(--login-command-button-text-color,var(--neutral-fill-foreground-rest));background:var(--login-command-button-background-color,var(--neutral-fill-stealth-rest));word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host .login-root .flyout .popup-content .commands fluent-button::part(control):hover{background:var(--login-command-button-hover-background-color,var(--neutral-fill-stealth-hover))}:host .login-root .flyout .popup-content .content .main-profile{margin-bottom:56px;margin-top:27px}:host .login-root .flyout .popup-content .add-account{padding-top:16px}:host .login-root .flyout .popup-content .add-account fluent-button::part(control){color:var(--login-add-account-button-text-color,var(--neutral-fill-foreground-rest));background:var(--login-add-account-button-background-color,var(--neutral-fill-stealth-rest));word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host .login-root .flyout .popup-content .add-account fluent-button::part(control):hover{background:var(--login-add-account-button-hover-background-color,var(--neutral-fill-stealth-hover))}
`],av={signInLinkSubtitle:"Sign In",signOutLinkSubtitle:"Sign Out",signInWithADifferentAccount:"Sign in with a different account"};var Dt=h(742),on=h(4192),ln=h(9808),Mn=h(7153),Ac=h(175),wr=h(4632),Ic=h(9482),dd=h(1230),lr=h(9605),Yr=h(6105);function Jl(d){return(0,Ic.sb)(d)&&("option"===d.getAttribute("role")||d instanceof HTMLOptionElement)}let jr=(()=>{class d extends wr.g{constructor(n,o,f,m){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,n&&(this.textContent=n),o&&(this.initialValue=o),f&&(this.defaultSelected=f),m&&(this.selected=m),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(n,o){this.ariaChecked="boolean"!=typeof o?null:o?"true":"false"}contentChanged(n,o){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(n,o){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(n,o){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var n;return null!==(n=this.value)&&void 0!==n?n:this.text}get text(){var n,o;return null!==(o=null===(n=this.textContent)||void 0===n?void 0:n.replace(/\s+/g," ").trim())&&void 0!==o?o:""}set value(n){const o=`${n??""}`;this._value=o,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=o),on.cP.notify(this,"value")}get value(){var n;return on.cP.track(this,"value"),null!==(n=this._value)&&void 0!==n?n:this.text}get form(){return this.proxy?this.proxy.form:null}}return(0,Dt.Cg)([on.sH],d.prototype,"checked",void 0),(0,Dt.Cg)([on.sH],d.prototype,"content",void 0),(0,Dt.Cg)([on.sH],d.prototype,"defaultSelected",void 0),(0,Dt.Cg)([(0,ln.CF)({mode:"boolean"})],d.prototype,"disabled",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"selected",mode:"boolean"})],d.prototype,"selectedAttribute",void 0),(0,Dt.Cg)([on.sH],d.prototype,"selected",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"value",mode:"fromView"})],d.prototype,"initialValue",void 0),d})(),gp=(()=>{class d{}return(0,Dt.Cg)([on.sH],d.prototype,"ariaChecked",void 0),(0,Dt.Cg)([on.sH],d.prototype,"ariaPosInSet",void 0),(0,Dt.Cg)([on.sH],d.prototype,"ariaSelected",void 0),(0,Dt.Cg)([on.sH],d.prototype,"ariaSetSize",void 0),d})();(0,Yr.X)(gp,dd.z),(0,Yr.X)(jr,lr.qw,gp);let Dl=(()=>{class d extends wr.g{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var n;return null!==(n=this.selectedOptions[0])&&void 0!==n?n:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(n=>n.disabled)}get length(){var n,o;return null!==(o=null===(n=this.options)||void 0===n?void 0:n.length)&&void 0!==o?o:0}get options(){return on.cP.track(this,"options"),this._options}set options(n){this._options=n,on.cP.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(n){this.typeaheadExpired=n}clickHandler(n){const o=n.target.closest("option,[role=option]");if(o&&!o.disabled)return this.selectedIndex=this.options.indexOf(o),!0}focusAndScrollOptionIntoView(n=this.firstSelectedOption){this.contains(document.activeElement)&&null!==n&&(n.focus(),requestAnimationFrame(()=>{n.scrollIntoView({block:"nearest"})}))}focusinHandler(n){!this.shouldSkipFocus&&n.target===n.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const n=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`^${n}`,"gi");return this.options.filter(f=>f.text.trim().match(o))}getSelectableIndex(n=this.selectedIndex,o){const f=n>o?-1:n<o?1:0,m=n+f;let A=null;switch(f){case-1:A=this.options.reduceRight((F,ae,Se)=>!F&&!ae.disabled&&Se<m?ae:F,A);break;case 1:A=this.options.reduce((F,ae,Se)=>!F&&!ae.disabled&&Se>m?ae:F,A)}return this.options.indexOf(A)}handleChange(n,o){"selected"===o&&(d.slottedOptionFilter(n)&&(this.selectedIndex=this.options.indexOf(n)),this.setSelectedOptions())}handleTypeAhead(n){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,d.TYPE_AHEAD_TIMEOUT_MS),!(n.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${n}`)}keydownHandler(n){if(this.disabled)return!0;this.shouldSkipFocus=!1;const o=n.key;switch(o){case Mn.Tg:n.shiftKey||(n.preventDefault(),this.selectFirstOption());break;case Mn.HX:n.shiftKey||(n.preventDefault(),this.selectNextOption());break;case Mn.I5:n.shiftKey||(n.preventDefault(),this.selectPreviousOption());break;case Mn.FM:n.preventDefault(),this.selectLastOption();break;case Mn.J9:return this.focusAndScrollOptionIntoView(),!0;case Mn.Mm:case Mn.F9:return!0;case Mn.gG:if(this.typeaheadExpired)return!0;default:return 1===o.length&&this.handleTypeAhead(`${o}`),!0}}mousedownHandler(n){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(n,o){this.ariaMultiSelectable=o?"true":null}selectedIndexChanged(n,o){var f;if(this.hasSelectableOptions){if(null!==(f=this.options[this.selectedIndex])&&void 0!==f&&f.disabled&&"number"==typeof n){const m=this.getSelectableIndex(n,o),A=m>-1?m:n;return this.selectedIndex=A,void(o===A&&this.selectedIndexChanged(o,A))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(n,o){var f;const m=o.filter(d.slottedOptionFilter);null===(f=this.options)||void 0===f||f.forEach(A=>{const F=on.cP.getNotifier(A);F.unsubscribe(this,"selected"),A.selected=m.includes(A),F.subscribe(this,"selected")})}selectFirstOption(){var n,o;this.disabled||(this.selectedIndex=null!==(o=null===(n=this.options)||void 0===n?void 0:n.findIndex(f=>!f.disabled))&&void 0!==o?o:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function lv(d,c){let n=d.length;for(;n--;)if(c(d[n],n,d))return n;return-1}(this.options,n=>!n.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var n,o;this.selectedIndex=null!==(o=null===(n=this.options)||void 0===n?void 0:n.findIndex(f=>f.defaultSelected))&&void 0!==o?o:-1}setSelectedOptions(){var n,o,f;null!==(n=this.options)&&void 0!==n&&n.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(f=null===(o=this.firstSelectedOption)||void 0===o?void 0:o.id)&&void 0!==f?f:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(n,o){this.options=o.reduce((m,A)=>(Jl(A)&&m.push(A),m),[]);const f=`${this.options.length}`;this.options.forEach((m,A)=>{m.id||(m.id=(0,Ac.NF)("option-")),m.ariaPosInSet=`${A+1}`,m.ariaSetSize=f}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(n,o){if(this.$fastController.isConnected){const f=this.getTypeaheadMatches();if(f.length){const m=this.options.indexOf(f[0]);m>-1&&(this.selectedIndex=m)}this.typeaheadExpired=!1}}}return d.slottedOptionFilter=c=>Jl(c)&&!c.hidden,d.TYPE_AHEAD_TIMEOUT_MS=1e3,(0,Dt.Cg)([(0,ln.CF)({mode:"boolean"})],d.prototype,"disabled",void 0),(0,Dt.Cg)([on.sH],d.prototype,"selectedIndex",void 0),(0,Dt.Cg)([on.sH],d.prototype,"selectedOptions",void 0),(0,Dt.Cg)([on.sH],d.prototype,"slottedOptions",void 0),(0,Dt.Cg)([on.sH],d.prototype,"typeaheadBuffer",void 0),d})(),Dc=(()=>{class d{}return(0,Dt.Cg)([on.sH],d.prototype,"ariaActiveDescendant",void 0),(0,Dt.Cg)([on.sH],d.prototype,"ariaDisabled",void 0),(0,Dt.Cg)([on.sH],d.prototype,"ariaExpanded",void 0),(0,Dt.Cg)([on.sH],d.prototype,"ariaMultiSelectable",void 0),d})();(0,Yr.X)(Dc,dd.z),(0,Yr.X)(Dl,Dc);var gi=h(9953),Es=h(633),yo=h(7788),ud=h(7947);let Mh=(()=>{class d extends Dl{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var n;return null===(n=this.options)||void 0===n?void 0:n.filter(o=>o.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(n,o){var f,m;this.ariaActiveDescendant=null!==(m=null===(f=this.options[o])||void 0===f?void 0:f.id)&&void 0!==m?m:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const n=this.activeOption;n&&(n.checked=!0)}checkFirstOption(n=!1){n?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((o,f)=>{o.checked=(0,ud.r4)(f,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(n=!1){n?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((o,f)=>{o.checked=(0,ud.r4)(f,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(n=!1){n?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((o,f)=>{o.checked=(0,ud.r4)(f,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(n=!1){n?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach((o,f)=>{o.checked=(0,ud.r4)(f,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(n){var o;if(!this.multiple)return super.clickHandler(n);const f=null===(o=n.target)||void 0===o?void 0:o.closest("[role=option]");return f&&!f.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(f),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(n){if(!this.multiple)return super.focusinHandler(n);!this.shouldSkipFocus&&n.target===n.currentTarget&&(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(n){this.multiple&&this.uncheckAllOptions()}keydownHandler(n){if(!this.multiple)return super.keydownHandler(n);if(this.disabled)return!0;const{key:o,shiftKey:f}=n;switch(this.shouldSkipFocus=!1,o){case Mn.Tg:return void this.checkFirstOption(f);case Mn.HX:return void this.checkNextOption(f);case Mn.I5:return void this.checkPreviousOption(f);case Mn.FM:return void this.checkLastOption(f);case Mn.J9:return this.focusAndScrollOptionIntoView(),!0;case Mn.F9:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Mn.gG:if(n.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===o.length&&this.handleTypeAhead(`${o}`),!0}}mousedownHandler(n){if(n.offsetX>=0&&n.offsetX<=this.scrollWidth)return super.mousedownHandler(n)}multipleChanged(n,o){var f;this.ariaMultiSelectable=o?"true":null,null===(f=this.options)||void 0===f||f.forEach(m=>{m.checked=!o&&void 0}),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(n=>n.selected),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(n,o){var f;const m=Math.max(0,parseInt(null!==(f=o?.toFixed())&&void 0!==f?f:"",10));m!==o&&yo.dv.queueUpdate(()=>{this.size=m})}toggleSelectedForAllCheckedOptions(){const n=this.checkedOptions.filter(f=>!f.disabled),o=!n.every(f=>f.selected);n.forEach(f=>f.selected=o),this.selectedIndex=this.options.indexOf(n[n.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(n,o){if(this.multiple){if(this.$fastController.isConnected){const f=this.getTypeaheadMatches(),m=this.options.indexOf(f[0]);m>-1&&(this.activeIndex=m,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(n,o)}uncheckAllOptions(n=!1){this.options.forEach(o=>o.checked=!this.multiple&&void 0),n||(this.rangeStartIndex=-1)}}return(0,Dt.Cg)([on.sH],d.prototype,"activeIndex",void 0),(0,Dt.Cg)([(0,ln.CF)({mode:"boolean"})],d.prototype,"multiple",void 0),(0,Dt.Cg)([(0,ln.CF)({converter:ln.R$})],d.prototype,"size",void 0),d})();var bi=h(9760),qo=h(8322),wt=h(9457),ec=h(5532);const dv=class mp extends Dl{}.compose({baseName:"listbox",template:(d,c)=>gi.q`
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
            ${(0,Es.e)({filter:Mh.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,styles:(d,c)=>bi.A`
    ${(0,qo.V)("inline-flex")} :host {
      border: calc(${wt.XAH} * 1px) solid ${wt.I21};
      border-radius: calc(${wt.PbG} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${wt.vR1} * 1px) 0;
    }

    ::slotted(${d.tagFor(jr)}) {
      margin: 0 calc(${wt.vR1} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${ec.W}
    }
  `});var hv=h(882),tc=h(7043),Ph=h(9714),xc=function(d,c,n,o){var A,f=arguments.length,m=f<3?c:null===o?o=Object.getOwnPropertyDescriptor(c,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,c,n,o);else for(var F=d.length-1;F>=0;F--)(A=d[F])&&(m=(f<3?A(m):f>3?A(c,n,m):A(c,n))||m);return f>3&&m&&Object.defineProperty(c,n,m),m},kc=function(d,c){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,c)},Qo=function(d,c,n,o){return new(n||(n=Promise))(function(m,A){function F(Me){try{Se(o.next(Me))}catch(We){A(We)}}function ae(Me){try{Se(o.throw(Me))}catch(We){A(We)}}function Se(Me){Me.done?m(Me.value):function f(m){return m instanceof n?m:new n(function(A){A(m)})}(Me.value).then(F,ae)}Se((o=o.apply(d,c||[])).next())})};let vp=(()=>{class d extends Vs.N{static get styles(){return Rh}get strings(){return av}get flyout(){return this.renderRoot.querySelector(".flyout")}static get requiredScopes(){return[...new Set(["user.read",...da.O$.requiredScopes])]}get _userDetailsKey(){return"-userDetails"}constructor(){super(),this.showPresence=!1,this.loginView="full",this._arrowKeyLocation=-1,this.logout=()=>Qo(this,void 0,void 0,function*(){if(!this.fireCustomEvent("logoutInitiated"))return;const n=Qi.b.globalProvider;if(n?.logout){const o=n.getActiveAccount();yield n.logout(),this.userDetails=null,n.isMultiAccountSupportedAndEnabled&&localStorage.removeItem(o?.id+this._userDetailsKey),this.hideFlyout(),this.fireCustomEvent("logoutCompleted")}}),this.renderContent=()=>Lt.qy`
      <div class="login-root">
        ${this.renderButton()}
        ${this.renderFlyout()}
      </div>`,this.flyoutOpened=()=>{this._isFlyoutOpen=!0},this.flyoutClosed=()=>{this._isFlyoutOpen=!1},this.onUserKeyDown=n=>{if(!this.flyout.isOpen)return;const o=this.renderRoot.querySelector(".popup-content"),f=o.querySelectorAll("ul, fluent-button"),m=o.querySelector("#signout-button")||f[0],A=o.querySelector("#signin-different-account-button")||f[f.length-1];if("Tab"===n.key&&n.shiftKey&&m===n.target&&(n.preventDefault(),A?.focus()),"Tab"===n.key&&!n.shiftKey&&A===n.target&&(n.preventDefault(),m?.focus()),"Escape"===n.key){const ae=this.renderRoot.querySelector("#login-button");ae?.focus()}const F=this.renderRoot.querySelector("fluent-card");n.shiftKey&&"Tab"===n.key&&n.target===F&&this.hideFlyout()},this.handleAccountListKeyDown=n=>{const o=this.renderRoot.querySelector("ul.account-list");let f;const m=o?.children;for(const ae of m){const Se=ae;Se.setAttribute("tabindex","-1"),Se.blur()}const A=o.childElementCount,F=n.key;if("ArrowDown"===F)this._arrowKeyLocation=(this._arrowKeyLocation+1+A)%A;else if("ArrowUp"===F)this._arrowKeyLocation=(this._arrowKeyLocation-1+A)%A;else if("Tab"===F||"Escape"===F)return this._arrowKeyLocation=-1,o.blur(),void("Escape"===F&&(n.preventDefault(),n.stopPropagation()));this._arrowKeyLocation>-1&&(f=m[this._arrowKeyLocation],f.setAttribute("tabindex","1"),f.focus())},this.onClick=()=>{this.userDetails&&this._isFlyoutOpen?this.hideFlyout():this.userDetails?this.showFlyout():this.login()},this._isFlyoutOpen=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("click",n=>n.stopPropagation())}login(){return Qo(this,void 0,void 0,function*(){const n=Qi.b.globalProvider;(this.userDetails||!this.fireCustomEvent("loginInitiated"))&&!n.isMultiAccountSupportedAndEnabled||n?.login&&(yield n.login(),this.fireCustomEvent(n.state===Bi.HJ.SignedIn?"loginCompleted":"loginFailed"))})}args(){return[this.providerState]}loadState(){return Qo(this,void 0,void 0,function*(){const n=Qi.b.globalProvider;n&&!this.userDetails&&(n.state===Bi.HJ.SignedIn?(this.userDetails=yield(0,eu._)(n.graph.forComponent(this)),this.userDetails.personImage&&(this._image=this.userDetails.personImage),n.isMultiAccountSupportedAndEnabled&&localStorage.setItem(Qi.b.globalProvider.getActiveAccount().id+this._userDetailsKey,JSON.stringify(this.userDetails)),this.fireCustomEvent("loginCompleted")):this.userDetails=null)})}renderButton(){var n;const o=(null===(n=Qi.b.globalProvider)||void 0===n?void 0:n.state)===Bi.HJ.SignedIn,f=(0,Fr.H)({"signed-in":o&&!!this.userDetails,"signed-out":!o,small:"avatar"===this.loginView}),m=o?"stealth":"neutral",A=o&&this.userDetails,F=A?this.renderSignedInButtonContent(this.userDetails,this._image):this.renderSignedOutButtonContent();return Lt.qy`
      <fluent-button
        id="login-button"
        aria-expanded="${(0,Yl.J)(A?this._isFlyoutOpen:void 0)}"
        appearance=${m}
        aria-label="${(0,Yl.J)(o?void 0:this.strings.signInLinkSubtitle)}"
        ?disabled=${this._task.status===Ph.e1.PENDING}
        @click=${this.onClick}
        class=${f}>
          ${F}
      </fluent-button>`}renderFlyout(){return Ji.Q`
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
     `}get hasMultipleAccounts(){var n,o,f,m;return(null===(n=Qi.b.globalProvider)||void 0===n?void 0:n.isMultiAccountSupportedAndEnabled)&&(null===(m=null===(f=null===(o=Qi.b.globalProvider)||void 0===o?void 0:o.getAllAccounts)||void 0===f?void 0:f.call(o))||void 0===m?void 0:m.length)>1}get usesVerticalPersonCard(){return"full"===this.loginView||this.hasMultipleAccounts}renderFlyoutPersonDetails(n,o){return this.renderTemplate("flyout-person-details",{personDetails:n,personImage:o})||Ji.Q`
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
        </fluent-button>`}renderButtonContent(){return this.userDetails?this.renderSignedInButtonContent(this.userDetails,this._image):this.renderSignedOutButtonContent()}renderAddAccountContent(){if(Qi.b.globalProvider.isMultiAccountSupportedAndEnabled)return Lt.qy`
        <div class="add-account">
          <fluent-button
            id="signin-different-account-button"
            appearance="stealth"
            aria-label="${this.strings.signInWithADifferentAccount}"
            @click=${()=>{this.login()}}>
            <span slot="start"><i>${(0,Kn.r)(Kn.A.SelectAccount,"currentColor")}</i></span>
            ${this.strings.signInWithADifferentAccount}
          </fluent-button>
        </div>`}parsePersonDisplayConfiguration(){const n={view:"twolines",avatarSize:"small"};switch(this.loginView){case"avatar":n.view="image",n.avatarSize="small";break;case"compact":n.view="oneline",n.avatarSize="small";break;default:n.view="twolines",n.avatarSize="auto"}return n}renderSignedInButtonContent(n,o){const f=this.renderTemplate("signed-in-button-content",{personDetails:n,personImage:o}),m=this.parsePersonDisplayConfiguration();return f||Ji.Q`
        <mgt-person
          .personDetails=${this.userDetails}
          .personImage=${this._image}
          .view=${m.view}
          .showPresence=${this.showPresence}
          .avatarSize=${m.avatarSize}
          line2-property="email"
          class="signed-in-person"
        ></mgt-person>`}renderAccounts(){if(Qi.b.globalProvider.state===Bi.HJ.SignedIn&&Qi.b.globalProvider.isMultiAccountSupportedAndEnabled){const n=Qi.b.globalProvider,o=n.getAllAccounts();if(o?.length>1)return Lt.qy`
          <div id="accounts">
            <ul
              tabindex="0"
              class="account-list"
              part="account-list"
              aria-label="${this.ariaLabel}"
              @keydown=${this.handleAccountListKeyDown}
            >
              ${o.filter(f=>f.id!==n.getActiveAccount().id).map(f=>{const m=localStorage.getItem(f.id+this._userDetailsKey);return Ji.Q`
                    <li
                      tabindex="-1"
                      part="account-item"
                      class="account-item"
                      @click=${()=>this.setActiveAccount(f)}
                      @keyup=${A=>{"Enter"===A.key&&this.setActiveAccount(f)}}
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
       `}}setActiveAccount(n){Qi.b.globalProvider.setActiveAccount(n)}clearState(){this.userDetails=null,this._image=null}renderSignedOutButtonContent(){return this.renderTemplate("signed-out-button-content",null)||Lt.qy`
        <span>${this.strings.signInLinkSubtitle}</span>`}showFlyout(){const n=this.flyout;n&&n.open()}hideFlyout(){const n=this.flyout;n&&n.close()}}return xc([(0,Mt.MZ)({attribute:"user-details",type:Object}),kc("design:type",Object)],d.prototype,"userDetails",void 0),xc([(0,Mt.MZ)({attribute:"show-presence",type:Boolean}),kc("design:type",Object)],d.prototype,"showPresence",void 0),xc([(0,Mt.MZ)({attribute:"login-view",type:String}),kc("design:type",String)],d.prototype,"loginView",void 0),xc([(0,Mt.wk)(),kc("design:type",Boolean)],d.prototype,"_isFlyoutOpen",void 0),xc([(0,Mt.wk)(),kc("design:type",Object)],d.prototype,"_arrowKeyLocation",void 0),d})();var hd=function(d,c,n,o){return new(n||(n=Promise))(function(m,A){function F(Me){try{Se(o.next(Me))}catch(We){A(We)}}function ae(Me){try{Se(o.throw(Me))}catch(We){A(We)}}function Se(Me){Me.done?m(Me.value):function f(m){return m instanceof n?m:new n(function(A){A(m)})}(Me.value).then(F,ae)}Se((o=o.apply(d,c||[])).next())})};const Nh=["any","unified","security","mailenabledsecurity","distribution"],Na=d=>"string"==typeof d&&Nh.includes(d),yp=(d,c="any")=>Na(d)?d:c,La=()=>Fo._.config.groups.invalidationPeriod||Fo._.config.defaultInvalidationPeriod,Fa=()=>Fo._.config.groups.isEnabled&&Fo._.config.isEnabled,fd=["GroupMember.Read.All","Group.Read.All","Directory.Read.All","Group.ReadWrite.All","Directory.ReadWrite.All"],Cp=(d,c,n=10,o=["any"],f="")=>hd(void 0,void 0,void 0,function*(){let m;const A=`${c||"*"}*${o.join("+")}*${f}:${n}`;if(Fa()){m=Fo._.getCache(Zr.j.groups,Zr.j.groups.stores.groupsQuery);const Me=yield m.getValue(A);if(Me&&La()>Date.now()-Me.timeCached&&Me.top>=n)return Me.groups.map(We=>JSON.parse(We)).slice(0,n+1)}let ae,F="";const Se=[];if(""!==c&&(F=`(startswith(displayName,'${c}') or startswith(mailNickname,'${c}') or startswith(mail,'${c}'))`),f&&(F+=`${c?" and ":""}${f}`),o.includes("any")){if(0===Se.length){const Me=yield d.api("groups").filter(F).top(n).count(!0).header("ConsistencyLevel","eventual").middlewareOptions((0,Cr.F)(fd)).get();return Fa()&&Me&&(yield m.putValue(A,{groups:Me.value.map(We=>JSON.stringify(We)),top:n})),Me?Me.value:null}}else{const Me=d.createBatch(),We=[];o.includes("unified")&&We.push("groupTypes/any(c:c+eq+'Unified')"),o.includes("security")&&We.push("(mailEnabled eq false and securityEnabled eq true)"),o.includes("mailenabledsecurity")&&We.push("(mailEnabled eq true and securityEnabled eq true)"),o.includes("distribution")&&We.push("(mailEnabled eq true and securityEnabled eq false)"),F=F?`${F} and `:"";for(const Vt of We)Me.get(Vt,`/groups?$filter=${F+Vt}`,fd);try{ae=yield Me.executeAll();for(const Vt of We)if(ae.get(Vt).content.value)for(const Yt of ae.get(Vt).content.value)Se.find(bn=>bn.id===Yt.id)||Se.push(Yt)}catch{try{const Yt=[];for(const rn of We)Yt.push(d.api("groups").filter(`${F} and ${rn}`).top(n).count(!0).header("ConsistencyLevel","eventual").middlewareOptions((0,Cr.F)(fd)).get());return(yield Promise.all(Yt)).map(rn=>rn.value).reduce((rn,bn)=>rn.concat(bn),[])}catch{return[]}}}return Se}),fv=(d,c,n)=>hd(void 0,void 0,void 0,function*(){let o;if(Fa()){o=Fo._.getCache(Zr.j.groups,Zr.j.groups.stores.groups);const A=yield o.getValue(c);if(A&&La()>Date.now()-A.timeCached){const F=A.group?JSON.parse(A.group):null,ae=n&&F?n.filter(Se=>!Object.keys(F).includes(Se)):null;if(!ae||ae.length<=1)return F}}let f=`/groups/${c}`;n&&(f=f+"?$select="+n.toString());const m=yield d.api(f).middlewareOptions((0,Cr.F)(fd)).get();return Fa()&&(yield o.putValue(c,{group:JSON.stringify(m)})),m}),wp=(d,c,n="")=>hd(void 0,void 0,void 0,function*(){if(!c||0===c.length)return[];const o=d.createBatch(),f={},m=[];let A;Fa()&&(A=Fo._.getCache(Zr.j.groups,Zr.j.groups.stores.groups));for(const F of c){let ae;if(f[F]=null,Fa()&&(ae=yield A.getValue(F)),ae&&La()>Date.now()-ae.timeCached)f[F]=ae.group?JSON.parse(ae.group):null;else if(""!==F){let Se=`/groups/${F}`;n&&(Se=`${Se}?$filters=${n}`),o.get(F,Se,fd),m.push(F)}}try{const F=yield o.executeAll();for(const ae of c){const Se=F.get(ae);Se?.content&&(f[ae]=Se.content,Fa()&&(yield A.putValue(ae,{group:JSON.stringify(Se.content)})))}return Promise.all(Object.values(f))}catch{try{return c.filter(ae=>m.includes(ae)).forEach(ae=>{f[ae]=fv(d,ae)}),Fa()&&(yield Promise.all(c.filter(ae=>m.includes(ae)).map(ae=>hd(void 0,void 0,void 0,function*(){return yield A.putValue(ae,{group:JSON.stringify(yield f[ae])})})))),Promise.all(Object.values(f))}catch{return[]}}});var ur=h(3173);const Rc=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{--person-details-wrapper-width:0;width:auto}:host fluent-text-field{width:100%;font-size:var(--people-picker-font-size, 14px)}:host fluent-text-field::part(root){display:flex;flex-wrap:wrap;height:auto;background:padding-box linear-gradient(var(--people-picker-input-background,var(--neutral-fill-input-rest)),var(--people-picker-input-background,var(--neutral-fill-input-rest))),border-box var(--people-picker-input-border-color,var(--neutral-stroke-input-rest))}:host fluent-text-field::part(root):hover{background:padding-box linear-gradient(var(--people-picker-input-hover-background,var(--neutral-fill-input-hover)),var(--people-picker-input-hover-background,var(--neutral-fill-input-hover))),border-box var(--people-picker-input-hover-border-color,var(--neutral-stroke-input-hover))}:host fluent-text-field::part(root):focus,:host fluent-text-field::part(root):focus-within{background:padding-box linear-gradient(var(--people-picker-input-focus-background,var(--neutral-fill-input-focus)),var(--people-picker-input-focus-background,var(--neutral-fill-input-focus))),border-box var(--people-picker-input-focus-border-color,var(--neutral-stroke-input-focus))}:host fluent-text-field::part(start){margin:unset}:host fluent-text-field::part(control){width:auto;flex-grow:1;min-width:25%;height:calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px);word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host fluent-text-field::part(control)::placeholder{color:var(--people-picker-input-placeholder-text-color,var(--input-placeholder-rest))}:host fluent-text-field::part(control):hover::placeholder{color:var(--people-picker-input-placeholder-hover-text-color,var(--input-placeholder-hover))}:host fluent-text-field::part(control):focus-within::placeholder,:host fluent-text-field::part(control):focus::placeholder{color:var(--people-picker-input-placeholder-focus-text-color,var(--input-placeholder-filled))}:host fluent-text-field .search-icon{display:flex;padding-top:10px;padding-inline-start:10px}:host fluent-text-field .search-icon svg path{fill:var(--people-picker-search-icon-color,currentColor)}:host .selected-list{display:flex;flex-wrap:wrap;column-gap:5px;padding:unset;margin:0 5px}:host .selected-list-item{display:flex;column-gap:5px;border-radius:100px;margin-top:3px;background-color:var(--people-picker-selected-option-background-color,var(--person-background-color,var(--neutral-layer-3)))}:host .selected-list-item.highlighted{background-color:var(--people-picker-selected-option-highlight-background-color,var(--accent-fill-rest))}:host .selected-list-item-close-icon{display:flex;justify-content:center;align-items:center;padding-inline-end:8px;cursor:pointer}:host .selected-list-item-close-icon svg path{fill:var(--people-picker-remove-selected-close-icon-color,currentColor)}:host .selected-list-item .person-image-selected{width:max-content;--person-avatar-size:var(--people-picker-selected-person-avatar-size, 24px)}:host fluent-card{margin-top:4px;background-color:var(--people-picker-dropdown-background-color,var(--fill-color))}:host .searched-people-list{list-style:none;padding:4px;margin:auto}:host .searched-people-list-result{padding:4px;border-radius:4px;background:var(--people-picker-dropdown-result-background-color,var(--person-background-color,transparent))}:host .searched-people-list-result:hover{background:var(--people-picker-dropdown-result-hover-background-color,var(--person-background-color,var(--neutral-fill-input-hover)))}:host .searched-people-list-result:focus,:host .searched-people-list-result:focus-within{background:var(--people-picker-dropdown-result-focus-background-color,var(--person-background-color,var(--neutral-fill-input-focus)))}:host .searched-people-list-result .person-image-result{--person-avatar-size:var(--people-picker-result-person-avatar-size, 40px)}:host .message-parent{display:flex;place-content:center;flex-direction:row;padding:10px 15px;column-gap:5px}:host .message-parent .loading-text,:host .message-parent .search-error-text{font-style:normal;font-weight:600;font-size:14px;line-height:19px;text-align:center;color:var(--people-picker-no-results-text-color,var(--neutral-foreground-hint))}
`];var xl=h(8955);const _p={inputPlaceholderText:"Search for a name",maxSelectionsPlaceHolder:"Max contacts added",maxSelectionsAriaLabel:"Maximum contact selections reached",noResultsFound:"We didn't find any matches.",loadingMessage:"Loading...",selected:"selected",removeSelectedUser:"Remove ",selectContact:"select a contact",suggestionsTitle:"Suggested contacts"};var tu=h(1965),Lh=h(6199),mi=function(d,c,n,o){var A,f=arguments.length,m=f<3?c:null===o?o=Object.getOwnPropertyDescriptor(c,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,c,n,o);else for(var F=d.length-1;F>=0;F--)(A=d[F])&&(m=(f<3?A(m):f>3?A(c,n,m):A(c,n))||m);return f>3&&m&&Object.defineProperty(c,n,m),m},Wi=function(d,c){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,c)},kl=function(d,c,n,o){return new(n||(n=Promise))(function(m,A){function F(Me){try{Se(o.next(Me))}catch(We){A(We)}}function ae(Me){try{Se(o.throw(Me))}catch(We){A(We)}}function Se(Me){Me.done?m(Me.value):function f(m){return m instanceof n?m:new n(function(A){A(m)})}(Me.value).then(F,ae)}Se((o=o.apply(d,c||[])).next())})};const Mc=()=>{(0,Ko.E)(xl.oR,Xd.z1),(0,Jd.r)(),(0,da.sN)(),(0,tu.i)(),(0,zo.N)("people-picker",Ep)};let Ep=(()=>{class d extends Vs.N{static get styles(){return Rc}get strings(){return _p}get flyout(){return this.renderRoot.querySelector(".flyout")}get input(){return this.renderRoot.querySelector("fluent-text-field")}get selectedPeople(){return this._selectedPeople}set selectedPeople(n){n||(n=[]),(0,Ih.V)(this._selectedPeople,n)||(this._selectedPeople=n,this.fireCustomEvent("selectionChanged",this._selectedPeople))}static get requiredScopes(){return[...new Set(["user.read.all","people.read","group.read.all","user.readbasic.all","contacts.read",...da.O$.requiredScopes])]}constructor(){super(),this.groupIds=[],this.type="any",this.groupType=["any"],this.userType="any",this.transitiveSearch=!1,this.people=null,this.showMax=6,this.disableImages=!1,this.personCardInteraction="none",this.defaultSelectedUserIds=[],this.defaultSelectedGroupIds=[],this.disabled=!1,this.allowAnyEmail=!1,this.userIds=[],this.disableSuggestions=!1,this.userInput="",this._selectedPeople=[],this._arrowSelectionCount=-1,this.defaultSelectedUsers=[],this.defaultSelectedGroups=[],this._highlightedUsers=[],this._currentHighlightedUserPos=0,this._isFocused=!1,this._setAnyEmail=!1,this.handleSelectionChanged=()=>{0===this.selectedPeople.length&&!this.disabled&&this.enableTextInput()},this.renderLoading=()=>this.renderTemplate("loading",null)||Ji.Q`
         <div class="message-parent">
           <mgt-spinner></mgt-spinner>
           <div aria-label="${this.strings.loadingMessage}" class="loading-text">
             ${this.strings.loadingMessage}
           </div>
         </div>
       `,this.handleInputClick=()=>{this.flyout.isOpen||this.handleUserSearch()},this.gainedFocus=()=>{this.clearHighlighted(),this._isFocused=!0,this.loadState(),this.showFlyout()},this.lostFocus=()=>{this._isFocused=!1,this.input&&this.input.setAttribute("aria-activedescendant","");const n=this.renderRoot.querySelector(".people-list");if(n)for(const o of n.children)o.classList.remove("focused"),o.setAttribute("aria-selected","false");this.requestUpdate()},this.onUserKeyUp=n=>{const o=n.key,f=n.getModifierState("Control")||n.getModifierState("Meta"),m=f&&"v"===o,A=["ArrowDown","ArrowRight","ArrowUp","ArrowLeft"].includes(o);if(!m&&f||A)return(f||["ArrowLeft","ArrowRight"].includes(o))&&this.hideFlyout(),void("ArrowDown"===o&&!this.flyout.isOpen&&this._isFocused&&this.handleUserSearch());if(!["Tab","Enter","Shift"].includes(o)){if("Escape"===o)return this.clearInput(),this._foundPeople=[],void(this._arrowSelectionCount=-1);if("Backspace"===o&&0===this.userInput.length&&this.selectedPeople.length>0)return this.clearHighlighted(),this.selectedPeople=this.selectedPeople.splice(0,this.selectedPeople.length-1),this.loadState(),void this.hideFlyout();if([";",","].includes(o))return void(this.allowAnyEmail&&(this._setAnyEmail=!0,n.preventDefault(),n.stopPropagation()))}},this.onUserInput=n=>{this.userInput=n.target.value,this.userInput&&((0,ur.B9)(this.userInput)&&this.allowAnyEmail?this._setAnyEmail&&this.handleAnyEmail():this.handleUserSearch(),this._setAnyEmail=!1)},this.onUserKeyDown=n=>{n.stopPropagation();const o=n.key,f=this.renderRoot.querySelector(".selected-list"),m=n.getModifierState("Control")||n.getModifierState("Meta");if(m&&f){const A=f.querySelectorAll("mgt-person.person-image-selected");if(this.hideFlyout(),m&&"ArrowLeft"===o)this._currentHighlightedUserPos=(this._currentHighlightedUserPos-1+A.length)%A.length,this._currentHighlightedUserPos>=0&&!Number.isNaN(this._currentHighlightedUserPos)?this._highlightedUsers.push(A[this._currentHighlightedUserPos]):this._currentHighlightedUserPos=0;else if(m&&"ArrowRight"===o){const F=this._highlightedUsers.pop();if(F){const ae=F.parentElement;ae&&(this.clearHighlighted(ae),this._currentHighlightedUserPos++)}}else m&&"a"===o&&(this._highlightedUsers=[],A.forEach(F=>this._highlightedUsers.push(F)));this._highlightedUsers&&this.highlightSelectedPeople(this._highlightedUsers)}else if(this.clearHighlighted(),this.flyout.isOpen){if(("ArrowUp"===o||"ArrowDown"===o)&&(this.handleArrowSelection(n),n.preventDefault()),"Enter"===o){if(!n.shiftKey&&this._foundPeople){n.preventDefault();const A=this._foundPeople[this._arrowSelectionCount];if(A)return this.addPerson(A),this.hideFlyout(),this.input.value="",void(this.hasMaxSelections&&this.disableTextInput())}this.allowAnyEmail?this.handleAnyEmail():this.showFlyout()}[";",",","Tab"].includes(o)&&this.allowAnyEmail&&("Tab"!==o&&n.preventDefault(),this.userInput=this.input.value,this.handleAnyEmail()),"Tab"===o&&this.hideFlyout()}},this.handleCut=()=>{this.writeHighlightedText().then(()=>{this.removeHighlightedOnCut()},()=>{})},this.handleCopy=()=>{this.writeHighlightedText()},this.handlePaste=()=>{navigator.clipboard.readText().then(n=>{if(n)try{const o=JSON.parse(n);if(o&&o.length>0)for(const f of o)this.addPerson(f)}catch(o){if(o instanceof SyntaxError){const f=[",",";"];let m;try{for(const A of f)if(m=n.split(A),m.length>1){this.hideFlyout(),this.selectUsersById(m);break}}catch{}}}},n=>{})},this.addEventListener("copy",this.handleCopy),this.addEventListener("cut",this.handleCut),this.addEventListener("paste",this.handlePaste),this.addEventListener("selectionChanged",this.handleSelectionChanged)}disableTextInput(){const n=this.input.shadowRoot.querySelector("input");n&&(n.setAttribute("disabled","true"),n.value="")}enableTextInput(){const n=this.input.shadowRoot.querySelector("input");n&&(n.removeAttribute("disabled"),n.focus())}get hasMaxSelections(){return"single"===this.selectionMode&&this.selectedPeople.length>=1}focus(n){this.input&&(this.input.focus(n),this.input.select())}selectUsersById(n){var o;return kl(this,void 0,void 0,function*(){const f=Qi.b.globalProvider,m=Qi.b.globalProvider.graph;if(f&&f.state===Bi.HJ.SignedIn)for(const A in n){const F=n[A];try{const ae=yield(0,vo.wz)(m,F,da.ge);this.addPerson(ae)}catch(ae){(0,Lh.Z)(ae)&&null!==(o=ae.message)&&void 0!==o&&o.includes("does not exist")&&this.allowAnyEmail&&(0,ur.B9)(F)&&this.addPerson({mail:F,displayName:F})}}})}selectGroupsById(n){return kl(this,void 0,void 0,function*(){const o=Qi.b.globalProvider,f=Qi.b.globalProvider.graph;if(o&&o.state===Bi.HJ.SignedIn)for(const m in n)try{const A=yield fv(f,n[m]);this.addPerson(A)}catch{}})}render(){const n=this.renderTemplate("default",{people:this._foundPeople});if(n)return n;const o=this.renderSelectedPeople(this.selectedPeople),f=this.renderInput(o),m=this.renderFlyout(f);return Lt.qy`
      <div>
        ${m}
      </div>
    `}args(){return[this.providerState,this.groupId,this.groupIds,this.type,this.groupType,this.userType,this.transitiveSearch,this.people,this.showMax,this.defaultSelectedUserIds,this.defaultSelectedGroupIds,this.userIds,this.userFilters,this.peopleFilters,this.groupFilters]}clearState(){this.selectedPeople=[],this.userInput="",this._highlightedUsers=[],this._currentHighlightedUserPos=0}renderInput(n){var o,f,m;const A=this.disabled?"":this.placeholder||this.strings.inputPlaceholderText,F=this.hasMaxSelections?this.strings.maxSelectionsAriaLabel:"",ae=Lt.qy`<span class="search-icon">${(0,Kn.r)(Kn.A.Search)}</span>`,Se=(null===(o=this.selectedPeople)||void 0===o?void 0:o.length)>0?n:ae;return Lt.qy`
      <fluent-text-field
        autocomplete="off"
        appearance="outline"
        slot="anchor"
        id="people-picker-input"
        role="combobox"
        placeholder=${this.hasMaxSelections?this.strings.maxSelectionsPlaceHolder:A}
        aria-label=${this.ariaLabel||F||A||this.strings.selectContact}
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
          ${(0,Ma.u)(n,o=>o?.id,o=>{var f;return Lt.qy`
            <li class="selected-list-item">
              ${this.renderTemplate("selected-person",{person:o},`selected-${o?.id?o.id:o.displayName}`)||this.renderSelectedPerson(o)}

              <div
                role="button"
                tabindex="0"
                class="selected-list-item-close-icon"
                aria-label="${this.strings.removeSelectedUser}${null!==(f=o?.displayName)&&void 0!==f?f:""}"
                @click="${m=>this.removePerson(o,m)}"
                @keydown="${m=>this.handleRemovePersonKeyDown(o,m)}">
                  ${(0,Kn.r)(Kn.A.Close)}
              </div>
          </li>`})}
      </ul>`:Lt.qy``}renderFlyout(n){return Ji.Q`
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
     `}renderFlyoutContent(){if(this._task.status===Ph.e1.PENDING)return this.renderLoading();const n=this._foundPeople;return n&&0!==n.length&&0!==this.showMax?this.renderSearchResults(n):this.renderNoData()}renderNoData(){if(this._isFocused)return this.renderTemplate("error",null)||this.renderTemplate("no-data",null)||Lt.qy`
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
        ${(0,Ma.u)(o,f=>f.id,f=>Lt.qy`
          <li
            id="${f.id}"
            class="searched-people-list-result"
            role="option"
            @click="${()=>this.handleSuggestionClick(f)}">
              ${this.renderPersonResult(f)}
          </li>
        `)}
      </ul>
     `}renderPersonResult(n){return this.renderTemplate("person",{person:n},n.id)||Ji.Q`
         <mgt-person
          class="person-image-result"
          ?show-presence=${this.showPresence}
          view="twolines"
          line2-property="jobTitle,mail"
          .personDetails=${n}
          ?fetch-image=${!this.disableImages}
          person-card="none"
        ></mgt-person>`}renderSelectedPerson(n){return Ji.Q`
       <mgt-person
         class="person-image-selected"
         .personDetails=${n}
         ?fetch-image=${!this.disableImages}
         view="oneline"
         person-card=${this.personCardInteraction}
        ></mgt-person>
     `}loadState(){var n,o;return kl(this,void 0,void 0,function*(){this._groupPeople=null,this._foundPeople=null,this.defaultPeople=null;let f=this.people;const m=this.userInput.toLowerCase(),A=Qi.b.globalProvider;if(f?.length)m&&(f=f.filter(ae=>ae?.displayName.toLowerCase().includes(m)));else if(!f&&A&&A.state===Bi.HJ.SignedIn){const F=A.graph.forComponent(this);if(!m.length){if(this.disableSuggestions)return void(this._foundPeople=[]);if(this.defaultPeople)f=this.defaultPeople;else{if(this.groupId||this.groupIds.length){if(null===this._groupPeople)if(this.groupId)try{this._groupPeople="group"===this.type?yield(0,vo.sb)(F,null,this.groupId,this.showMax,this.type,this.transitiveSearch):yield(0,vo.sb)(F,null,this.groupId,this.showMax,this.type,this.transitiveSearch,this.userFilters,this.peopleFilters)}catch{this._groupPeople=[]}else if("group"===this.type)try{this._groupPeople=yield wp(F,this.groupIds,this.groupFilters)}catch{this._groupPeople=[]}else try{const ae=yield(0,vo.fp)(F,"",this.groupIds,this.showMax,this.type,this.transitiveSearch,this.userFilters);this._groupPeople=ae}catch{this._groupPeople=[]}f=this._groupPeople||[]}else if("person"===this.type||"any"===this.type)f=this.userIds.length?yield(0,vo.$q)(F,this.userIds,"",this.userFilters):!this.userFilters||"user"!==this.userType&&"contact"!==this.userType?yield(0,Tc.cB)(F,this.userType,this.peopleFilters,this.showMax):yield(0,vo.lo)(F,this.userFilters,this.showMax);else if("group"===this.type){let ae=(yield Cp(F,"",this.showMax,this.groupType,this.groupFilters))||[];ae.length>0&&ae[0].value&&(ae=ae[0].value),f=ae}this.defaultPeople=f}}if((this.defaultSelectedUserIds.length>0||this.defaultSelectedGroupIds.length>0)&&!this.selectedPeople.length&&!this.defaultSelectedUsers.length&&!this.defaultSelectedGroups.length&&(this.defaultSelectedUsers=yield(0,vo.$q)(F,this.defaultSelectedUserIds,"",this.userFilters),this.defaultSelectedGroups=yield wp(F,this.defaultSelectedGroupIds,this.peopleFilters),this.defaultSelectedGroups=this.defaultSelectedGroups.filter(ae=>null!==ae),this.defaultSelectedUsers=this.defaultSelectedUsers.filter(ae=>null!==ae),this.selectedPeople=[...this.defaultSelectedUsers,...this.defaultSelectedGroups],this.hasMaxSelections&&this.disableTextInput(),this.requestUpdate()),m)if(f=[],this.groupId)f=(yield(0,vo.sb)(F,m,this.groupId,this.showMax,this.type,this.transitiveSearch,this.userFilters,this.peopleFilters))||[];else{if("person"===this.type||"any"===this.type){try{if("contact"===this.userType||"user"===this.userType)f=null!==(n=this.userIds)&&void 0!==n&&n.length?yield(0,vo.$q)(F,this.userIds,m,this.userFilters):yield(0,vo.Ei)(F,m,this.showMax,this.userFilters);else if(this.groupIds.length)try{f=yield(0,vo.fp)(F,m,this.groupIds,this.showMax,this.type,this.transitiveSearch,this.userFilters)}catch{}else f=null!==(o=this.userIds)&&void 0!==o&&o.length?yield(0,vo.$q)(F,this.userIds,m,this.userFilters):(yield(0,Tc.lq)(F,m,this.showMax,this.userType,this.peopleFilters))||[]}catch{}if(f&&f.length<this.showMax&&"contact"!==this.userType&&"person"!==this.type)try{const ae=(yield(0,vo.Ei)(F,m,this.showMax,this.userFilters))||[],Se=new Set(f.map(Me=>Me.id));for(const Me of ae)Se.has(Me.id)||f.push(Me)}catch{}}if(("group"===this.type||"any"===this.type)&&f.length<this.showMax)if(this.groupIds.length)try{f=yield((d,c,n,o=10,f=["any"],m="")=>hd(void 0,void 0,void 0,function*(){const A=[],F=yield Cp(d,c,o,f,m);if(F)for(const ae of F)ae.id&&n.includes(ae.id)&&A.push(ae);return A}))(F,m,this.groupIds,this.showMax,this.groupType,this.userFilters)}catch{}else{let ae=[];try{ae=(yield Cp(F,m,this.showMax,this.groupType,this.groupFilters))||[],f=f.concat(ae)}catch{}}}}this._foundPeople=this.filterPeople(f)})}getGroupsForGroupIds(n,o){return kl(this,void 0,void 0,function*(){const f=yield wp(n,this.groupIds,this.groupFilters);for(const m of f)o=o.concat(m);return o=o.filter(m=>m)})}hideFlyout(){const n=this.flyout;n&&n.close(),this.input&&this.input.setAttribute("aria-activedescendant",""),this._arrowSelectionCount=-1}showFlyout(){const n=this.flyout;n&&n.open(),this._arrowSelectionCount=-1}removePerson(n,o){o.stopPropagation();const f=this.selectedPeople.filter(m=>!n.id&&m.displayName?m.displayName!==n.displayName:m.id!==n.id);this.selectedPeople=f,this.loadState()}handleRemovePersonKeyDown(n,o){"Enter"===o.key&&(this.removePerson(n,o),this.enableTextInput())}addPerson(n){n&&(setTimeout(()=>{this.clearInput()},50),0===this.selectedPeople.filter(f=>!n.id&&f.displayName?f.displayName===n.displayName:f.id===n.id).length&&(this.selectedPeople=[...this.selectedPeople,n],this.loadState(),this._foundPeople=[],this._arrowSelectionCount=-1),this.enableTextInput())}clearInput(){this.clearHighlighted(),"single"!==this.selectionMode&&(this.input.value=""),this.userInput=""}handleAnyEmail(){this._arrowSelectionCount=-1,(0,ur.B9)(this.userInput)&&this.addPerson({mail:this.userInput,displayName:this.userInput}),this.hideFlyout(),this.input&&(this.input.focus(),this._isFocused=!0)}handleSuggestionClick(n){this.addPerson(n),this.hasMaxSelections&&(this.disableTextInput(),this.input.value=""),this.hideFlyout()}handleUserSearch(){this._debouncedSearch||(this._debouncedSearch=(0,ur.sg)(()=>kl(this,void 0,void 0,function*(){yield this._task.run(),this._arrowSelectionCount=-1,this.showFlyout()}),400)),this._debouncedSearch()}writeHighlightedText(){return kl(this,void 0,void 0,function*(){const n=[];for(const f of this._highlightedUsers){const{id:m,displayName:A,mail:F,userPrincipalName:ae,scoredEmailAddresses:Se}=f._personDetails;let Me;Me=Se&&Se.length>0?Se.pop().address:ae||F,n.push({id:m,displayName:A,email:Me})}let o="";n.length>0&&(o=JSON.stringify(n)),yield navigator.clipboard.writeText(o)})}removeHighlightedOnCut(){this.selectedPeople=this.selectedPeople.splice(0,this.selectedPeople.length-this._highlightedUsers.length),this._highlightedUsers=[],this._currentHighlightedUserPos=0,this.loadState(),this.hideFlyout()}highlightSelectedPeople(n){for(const o of n)(o?.parentElement).classList.add("highlighted")}clearHighlighted(n){if(n)n.classList.remove("highlighted");else{for(const o of this._highlightedUsers){const f=o.parentElement;f&&f.classList.remove("highlighted")}this._highlightedUsers=[],this._currentHighlightedUserPos=0}}handleArrowSelection(n){var o,f;const m=this.renderRoot.querySelector(".searched-people-list");if(null!==(o=m?.children)&&void 0!==o&&o.length){n&&("ArrowUp"===n.key&&(this._arrowSelectionCount=-1===this._arrowSelectionCount?0:(this._arrowSelectionCount-1+m.children.length)%m.children.length),"ArrowDown"===n.key&&(this._arrowSelectionCount=-1===this._arrowSelectionCount?0:(this._arrowSelectionCount+1+m.children.length)%m.children.length));for(const F of null!==(f=m?.children)&&void 0!==f?f:[]){const ae=F;ae.setAttribute("aria-selected","false"),ae.blur(),ae.removeAttribute("tabindex")}const A=m.children[this._arrowSelectionCount];A&&(A.setAttribute("tabindex","0"),A.focus(),A.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"}),A.setAttribute("aria-selected","true"),this.input.setAttribute("aria-activedescendant",A?.id))}}filterPeople(n){const o=[];if(n&&n.length>0){n=n.filter(F=>F);const f=this.selectedPeople.map(F=>F.id?F.id:F.displayName),m=n.filter(F=>F?.id?-1===f.indexOf(F.id):-1===f.indexOf(F?.displayName)),A=new Set;for(const F of m){const ae=JSON.stringify(F);A.add(ae)}A.forEach(F=>{const ae=JSON.parse(F);o.push(ae)})}return o}handleSectionScroll(n){const o=this.renderRoot.querySelector(".flyout-root");o&&!(n.deltaY<0&&0===o.scrollTop)&&!(n.deltaY>0&&o.clientHeight+o.scrollTop>=o.scrollHeight-1)&&n.stopPropagation()}}return mi([(0,Mt.MZ)({attribute:"group-id",converter:c=>c.trim()}),Wi("design:type",String)],d.prototype,"groupId",void 0),mi([(0,Mt.MZ)({attribute:"group-ids",converter:c=>c.split(",").map(n=>n.trim())}),Wi("design:type",Array)],d.prototype,"groupIds",void 0),mi([(0,Mt.MZ)({attribute:"type",converter:c=>(0,Tc.ys)(c,"any")}),Wi("design:type",String)],d.prototype,"type",void 0),mi([(0,Mt.MZ)({attribute:"group-type",converter:c=>{const n=["any"];if(!c||0===c.length)return n;const o=c.split(","),f=[];for(let m of o)m=m.trim(),Na(m)&&f.push(yp(m));return 0===f.length?n:f}}),Wi("design:type",Array)],d.prototype,"groupType",void 0),mi([(0,Mt.MZ)({attribute:"user-type",converter:c=>(0,Tc.we)(c)}),Wi("design:type",String)],d.prototype,"userType",void 0),mi([(0,Mt.MZ)({attribute:"transitive-search",type:Boolean}),Wi("design:type",Object)],d.prototype,"transitiveSearch",void 0),mi([(0,Mt.MZ)({attribute:"people",type:Object}),Wi("design:type",Array)],d.prototype,"people",void 0),mi([(0,Mt.MZ)({attribute:"show-max",type:Number}),Wi("design:type",Object)],d.prototype,"showMax",void 0),mi([(0,Mt.MZ)({attribute:"disable-images",type:Boolean}),Wi("design:type",Object)],d.prototype,"disableImages",void 0),mi([(0,Mt.MZ)({attribute:"show-presence",type:Boolean}),Wi("design:type",Boolean)],d.prototype,"showPresence",void 0),mi([(0,Mt.MZ)({attribute:"person-card",converter:c=>(0,Sc.e)(c)}),Wi("design:type",String)],d.prototype,"personCardInteraction",void 0),mi([(0,Mt.MZ)({attribute:"selected-people",type:Array}),Wi("design:type",Array),Wi("design:paramtypes",[Array])],d.prototype,"selectedPeople",null),mi([(0,Mt.MZ)({attribute:"default-selected-user-ids",converter:c=>c.split(",").map(n=>n.trim()),type:String}),Wi("design:type",Array)],d.prototype,"defaultSelectedUserIds",void 0),mi([(0,Mt.MZ)({attribute:"default-selected-group-ids",converter:c=>c.split(",").map(n=>n.trim()),type:String}),Wi("design:type",Array)],d.prototype,"defaultSelectedGroupIds",void 0),mi([(0,Mt.MZ)({attribute:"placeholder",type:String}),Wi("design:type",String)],d.prototype,"placeholder",void 0),mi([(0,Mt.MZ)({attribute:"disabled",type:Boolean}),Wi("design:type",Object)],d.prototype,"disabled",void 0),mi([(0,Mt.MZ)({attribute:"allow-any-email",type:Boolean}),Wi("design:type",Object)],d.prototype,"allowAnyEmail",void 0),mi([(0,Mt.MZ)({attribute:"selection-mode",type:String}),Wi("design:type",String)],d.prototype,"selectionMode",void 0),mi([(0,Mt.MZ)({attribute:"user-ids",converter:c=>c.split(",").map(n=>n.trim()),type:String}),Wi("design:type",Array)],d.prototype,"userIds",void 0),mi([(0,Mt.MZ)({attribute:"user-filters"}),Wi("design:type",String)],d.prototype,"userFilters",void 0),mi([(0,Mt.MZ)({attribute:"people-filters"}),Wi("design:type",String)],d.prototype,"peopleFilters",void 0),mi([(0,Mt.MZ)({attribute:"group-filters"}),Wi("design:type",String)],d.prototype,"groupFilters",void 0),mi([(0,Mt.MZ)({attribute:"aria-label",type:String}),Wi("design:type",String)],d.prototype,"ariaLabel",void 0),mi([(0,Mt.MZ)({attribute:"disable-suggestions",type:Boolean}),Wi("design:type",Object)],d.prototype,"disableSuggestions",void 0),mi([(0,Mt.wk)(),Wi("design:type",Object)],d.prototype,"userInput",void 0),mi([(0,Mt.wk)(),Wi("design:type",Object)],d.prototype,"_arrowSelectionCount",void 0),mi([(0,Mt.wk)(),Wi("design:type",Array)],d.prototype,"_highlightedUsers",void 0),mi([(0,Mt.wk)(),Wi("design:type",Object)],d.prototype,"_isFocused",void 0),mi([(0,Mt.wk)(),Wi("design:type",Object)],d.prototype,"_setAnyEmail",void 0),mi([(0,Mt.wk)(),Wi("design:type",Array)],d.prototype,"_foundPeople",void 0),d})();const Tp=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{background-color:var(--tasks-background-color,transparent);padding:var(--tasks-padding,12px);border:var(--tasks-border,0);border-radius:var(--tasks-border-radius,0);--skeleton-fill:var(--neutral-foreground-active)}:host .header{display:flex;align-items:center;justify-content:space-between;padding:var(--tasks-header-padding,0 0 14px 0);margin:var(--tasks-header-padding,0 0 14px 0);font-size:var(--tasks-header-font-size, 16px);font-weight:var(--tasks-header-font-weight,600);color:var(--tasks-header-text-color,var(--neutral-foreground-hint))}:host .header:hover{color:var(--tasks-header-text-hover-color,var(--neutral-foreground-hover))}:host .header .title{justify-content:left;display:flex;align-items:center}:host .header .title .shimmer{width:80px;height:20px}:host .header .title svg{margin-top:3px;padding:0 4px;width:16px;height:16px}:host .header .new-task-button{justify-content:right}:host .header .new-task-button .shimmer{width:40px;height:24px}:host .header .new-task-button::part(control){font-weight:var(--tasks-new-button-text-font-weight,700);color:var(--tasks-new-button-text-color,var(--foreground-on-accent-rest));width:var(--tasks-new-button-width,none);height:var(--tasks-new-button-height,none);background:var(--tasks-new-button-background,padding-box linear-gradient(var(--accent-fill-rest),var(--accent-fill-rest)),border-box var(--accent-stroke-control-rest))}:host .header .new-task-button::part(control):hover{background:var(--tasks-new-button-background-hover,var(--accent-fill-hover))}:host .header .new-task-button::part(control):active{background:var(--tasks-new-button-background-active,var(--accent-fill-active))}:host .tasks{display:flex;flex-direction:column;row-gap:var(--tasks-gap,20px)}:host .tasks .task{display:flex;column-gap:4px;align-items:flex-start;justify-content:space-between}:host .tasks .task.updating{background:var(--neutral-stroke-rest)!important;pointer-events:none;opacity:.4}:host .tasks .task.complete{border:var(--task-complete-border,2px dotted var(--neutral-foreground-active));border-radius:var(--task-complete-border-radius,4px);background:var(--task-complete-background-color,transparent);padding:var(--task-complete-padding,10px)}:host .tasks .task.incomplete{border:var(--task-incomplete-border,1px solid var(--neutral-foreground-active));border-radius:var(--task-complete-border-radius,4px);background:var(--task-incomplete-background-color,var(--neutral-layer-1));padding:var(--task-incomplete-padding,10px)}:host .tasks .task .task-details-container{display:flex;flex-direction:column;row-gap:12px;width:100%}:host .tasks .task .task-details-container .top{display:flex;justify-content:space-between;column-gap:4px}:host .tasks .task .task-details-container .top.add-new-task{flex-direction:row}:host .tasks .task .task-details-container .top .check-and-title{display:flex;align-items:flex-start;flex-direction:column;width:100%;row-gap:12px}:host .tasks .task .task-details-container .top .check-and-title.shimmer{display:flex;flex-direction:inherit;gap:10px}:host .tasks .task .task-details-container .top .check-and-title.shimmer .checkbox{height:10px;width:10px}:host .tasks .task .task-details-container .top .check-and-title.shimmer .title{height:10px;width:100%}:host .tasks .task .task-details-container .top .check-and-title .task-content{display:grid;grid-template-columns:repeat(auto-fit,250px);gap:12px;justify-content:start;width:100%}:host .tasks .task .task-details-container .top .check-and-title .task-content .picker{max-width:250px}:host .tasks .task .task-details-container .top .check-and-title .task-content .task-due fluent-text-field.dark::part(control){color-scheme:dark}:host .tasks .task .task-details-container .top .task-options .options{height:10px;width:20px}:host .tasks .task .task-details-container .top .task-options.new-task-action-buttons{display:flex;flex-direction:column;row-gap:12px}:host .tasks .task .task-details-container .bottom{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;grid-column-gap:6px}:host .tasks .task .task-details-container .bottom .task-bucket,:host .tasks .task .task-details-container .bottom .task-due,:host .tasks .task .task-details-container .bottom .task-group{display:flex;align-items:center;gap:6px}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon,:host .tasks .task .task-details-container .bottom .task-due .task-icon,:host .tasks .task .task-details-container .bottom .task-group .task-icon{display:flex;place-content:center;width:var(--task-icons-width,20px);height:var(--task-icons-height,20px)}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon .shimmer.icon,:host .tasks .task .task-details-container .bottom .task-due .task-icon .shimmer.icon,:host .tasks .task .task-details-container .bottom .task-group .task-icon .shimmer.icon{width:20px;height:20px}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon svg,:host .tasks .task .task-details-container .bottom .task-due .task-icon svg,:host .tasks .task .task-details-container .bottom .task-group .task-icon svg{width:var(--task-icons-width,20px);height:var(--task-icons-height,20px)}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon svg path,:host .tasks .task .task-details-container .bottom .task-due .task-icon svg path,:host .tasks .task .task-details-container .bottom .task-group .task-icon svg path{fill:var(--task-icons-background-color,var(--neutral-foreground-hint))}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon-text,:host .tasks .task .task-details-container .bottom .task-due .task-icon-text,:host .tasks .task .task-details-container .bottom .task-group .task-icon-text{color:var(--task-icons-text-font-color,var(--neutral-foreground-hint));font-size:var(--task-icons-text-font-size, 12px);font-weight:var(--task-icons-text-font-weight,600);white-space:normal;width:100%}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon-text .shimmer.text,:host .tasks .task .task-details-container .bottom .task-due .task-icon-text .shimmer.text,:host .tasks .task .task-details-container .bottom .task-group .task-icon-text .shimmer.text{width:100%;height:10px}:host .tasks .task .task-details-container .task-details{display:flex;flex-direction:column;row-gap:8px}:host .tasks .task .task-details-container .task-details.shimmer{flex-direction:row;place-items:center;column-gap:6px}:host .tasks .task .task-details-container .task-details.shimmer .shimmer.icon{width:24px;height:24px}:host .tasks .task .task-details-container .task-details.shimmer .shimmer.text{width:100%;height:10px}:host .tasks .task .task-details-container .task-details .task-title{color:var(--foreground-on-neutral-rest)}:host .tasks .task .task-details-container .task-details .task-body{display:flex}:host fluent-button.add-task::part(control){font-weight:var(--task-add-new-button-text-font-weight,initial);color:var(--task-add-new-button-text-color,var(--neutral-foreground-rest));width:var(--task-add-new-button-width,none);height:var(--task-add-new-button-height,none);background:var(--task-add-new-button-background,padding-box linear-gradient(var(--neutral-fill-active),var(--neutral-fill-active)),border-box var(--neutral-stroke-control-active));border:var(--task-add-new-button-border,calc(var(--stroke-width) * 1px) solid transparent)}:host fluent-button.add-task::part(control):hover{background:var(--task-add-new-button-background-hover,padding-box linear-gradient(var(--neutral-fill-hover),var(--neutral-fill-hover)),border-box var(--neutral-stroke-control-hover))}:host fluent-button.add-task::part(control):active{background:var(--task-add-new-button-background-active,padding-box linear-gradient(var(--neutral-fill-active),var(--neutral-fill-active)),border-box var(--neutral-stroke-control-active))}:host fluent-button.cancel-task::part(control){font-weight:var(--task-cancel-new-button-text-font-weight,initial);color:var(--task-cancel-new-button-text-color,var(--neutral-foreground-rest));width:var(--task-cancel-new-button-width,none);height:var(--task-cancel-new-button-height,none);background:var(--task-cancel-new-button-background,padding-box linear-gradient(var(--neutral-fill-active),var(--neutral-fill-active)),border-box var(--neutral-stroke-control-active));border:var(--task-cancel-new-button-border,calc(var(--stroke-width) * 1px) solid transparent)}:host fluent-button.cancel-task::part(control):hover{background:var(--task-cancel-new-button-background-hover,padding-box linear-gradient(var(--neutral-fill-hover),var(--neutral-fill-hover)),border-box var(--neutral-stroke-control-hover))}:host fluent-button.cancel-task::part(control):active{background:var(--task-cancel-new-button-background-active,padding-box linear-gradient(var(--neutral-fill-active),var(--neutral-fill-active)),border-box var(--neutral-stroke-control-active))}:host fluent-option{background:var(--task-new-dropdown-list-background-color,var(--fill-color))}:host fluent-option:hover{background:var(--task-new-dropdown-option-hover-background-color,var(--neutral-fill-stealth-hover))}:host fluent-option::part(content){color:var(--task-new-dropdown-option-text-color,var(--neutral-foreground-rest))}:host fluent-select::part(listbox){background:var(--task-new-dropdown-list-background-color,var(--fill-color))}:host fluent-select::part(control){border:var(--task-new-dropdown-border,calc(var(--stroke-width) * 1px) solid transparent);border-radius:var(--task-new-dropdown-border-radius,calc(var(--control-corner-radius) * 1px));background:var(--task-new-dropdown-background-color,padding-box linear-gradient(var(--neutral-fill-input-rest),var(--neutral-fill-input-rest)),border-box var(--neutral-stroke-input-rest))}:host fluent-select::part(control):hover{background:var(--task-new-dropdown-hover-background-color,padding-box linear-gradient(var(--neutral-fill-input-hover),var(--neutral-fill-input-hover)),border-box var(--neutral-stroke-input-hover))}:host fluent-select::part(control)::placeholder{color:var(--task-new-dropdown-placeholder-color,var(--input-placeholder-rest))}:host fluent-checkbox{padding-top:1px}:host fluent-checkbox::part(control){border-radius:50%;background:var(--task-incomplete-checkbox-background-color,var(--neutral-fill-input-alt-rest))}:host fluent-checkbox::part(control):hover{background:var(--task-incomplete-checkbox-background-hover-color,var(--neutral-fill-input-alt-hover))}:host fluent-checkbox::part(label){font-size:var(--task-title-text-font-size, medium);font-weight:var(--task-title-text-font-weight,600);color:var(--task-incomplete-title-text-color,var(var(--neutral-foreground-rest)))}:host fluent-checkbox.checked::part(control){background:var(--task-complete-checkbox-background-color,var(--accent-fill-rest));color:var(--task-complete-checkbox-text-color,currentColor)}:host fluent-checkbox.checked::part(label){text-decoration:line-through;color:var(--task-complete-title-text-color,var(--neutral-foreground-hint))}:host fluent-text-field.new-task{width:100%}:host fluent-text-field.new-task::part(root){border:var(--task-new-input-border,calc(var(--stroke-width) * 1px) solid transparent);border-radius:var(--task-new-input-border-radius,calc(var(--control-corner-radius) * 1px));background:var(--task-new-input-background-color,padding-box linear-gradient(var(--neutral-fill-input-rest),var(--neutral-fill-input-rest)),border-box var(--neutral-stroke-input-rest))}:host fluent-text-field.new-task::part(root):hover{background:var(--task-new-input-hover-background-color,padding-box linear-gradient(var(--neutral-fill-input-hover),var(--neutral-fill-input-hover)),border-box var(--neutral-stroke-input-hover))}:host fluent-text-field.new-task::part(root)::placeholder{color:var(--task-new-input-placeholder-color,var(--input-placeholder-rest))}:host .people [slot=no-data] fluent-button::part(control){color:var(--task-new-person-icon-text-color,var(--neutral-foreground-hint))}:host .people [slot=no-data] svg{fill:var(--task-new-person-icon-color,var(--neutral-foreground-hint))}@media only screen and (width <= 600px){:host fluent-select{width:100%}:host .tasks .task .task-details-container .bottom{display:grid;grid-auto-flow:row;grid-auto-columns:unset;row-gap:4px}:host .tasks .task .task-details-container .bottom .ask-bucket,:host .tasks .task .task-details-container .bottom .ask-due,:host .tasks .task .task-details-container .bottom .ask-group{margin-inline-start:8px}:host .tasks .task .task-details-container .top.add-new-task{flex-direction:column;row-gap:12px}:host .tasks .task .task-details-container .top.add-new-task .check-and-title .task-content{display:grid;grid-auto-flow:row;row-gap:12px;width:100%}:host .tasks .task .task-details-container .top.add-new-task .task-options.new-task-action-buttons{flex-direction:row;column-gap:4px}}
`],Sp={removeTaskSubtitle:"Delete Task",cancelNewTaskSubtitle:"Cancel",newTaskPlaceholder:"Adding a task...",addTaskButtonSubtitle:"Add",due:"Due ",addTaskDate:"Add the task date",assign:"Assign",planNotFound:"Plan not found",plansSelfAssigned:"All Plans",bucketNotFound:"Bucket not found",bucketsSelfAssigned:"All Tasks",baseSelfAssigned:"Assigned to Me"};class Rl extends Ec{static fromGraph(c){const n=new Rl(c.client);return n.setComponent(c.componentName),n}constructor(c,n="beta"){super(c,n)}forComponent(c){const n=new Rl(this.client);return this.setComponent(c),n}}var Ts=function(d,c,n,o){return new(n||(n=Promise))(function(m,A){function F(Me){try{Se(o.next(Me))}catch(We){A(We)}}function ae(Me){try{Se(o.throw(Me))}catch(We){A(We)}}function Se(Me){Me.done?m(Me.value):function f(m){return m instanceof n?m:new n(function(A){A(m)})}(Me.value).then(F,ae)}Se((o=o.apply(d,c||[])).next())})};const Fh=["Tasks.ReadWrite","Group.ReadWrite.All"],pd=["Tasks.Read","Group.Read.All","Tasks.ReadWrite","Group.ReadWrite.All"],gd=(d,c,n)=>Ts(void 0,void 0,void 0,function*(){let o;try{o=yield d.api(`/planner/tasks/${c.id}`).header("Cache-Control","no-store").middlewareOptions((0,Cr.F)(Fh)).header("Prefer","return=representation").header("If-Match",c.eTag).update(n)}catch{}return o});var ua=function(d,c,n,o){return new(n||(n=Promise))(function(m,A){function F(Me){try{Se(o.next(Me))}catch(We){A(We)}}function ae(Me){try{Se(o.throw(Me))}catch(We){A(We)}}function Se(Me){Me.done?m(Me.value):function f(m){return m instanceof n?m:new n(function(A){A(m)})}(Me.value).then(F,ae)}Se((o=o.apply(d,c||[])).next())})};class vv{constructor(c){this.graph=Rl.fromGraph(c)}}class xp extends vv{getTaskGroups(){return ua(this,void 0,void 0,function*(){return(yield(d=this.graph,Ts(void 0,void 0,void 0,function*(){const c=yield d.api("/me/planner/plans").header("Cache-Control","no-store").middlewareOptions((0,Cr.F)(pd)).get();return c?.value}))).map(n=>{var o;return{id:n.id,title:n.title,containerId:null===(o=n?.container)||void 0===o?void 0:o.containerId}});var d})}getTaskGroupsForGroup(c){return ua(this,void 0,void 0,function*(){return(yield((d,c)=>Ts(void 0,void 0,void 0,function*(){const n=`/groups/${c}/planner/plans`,o=yield d.api(n).header("Cache-Control","no-store").middlewareOptions((0,Cr.F)(pd)).get();return o?.value}))(this.graph,c)).map(o=>({id:o.id,title:o.title}))})}getTaskGroup(c){return ua(this,void 0,void 0,function*(){const n=yield((d,c)=>Ts(void 0,void 0,void 0,function*(){return yield d.api(`/planner/plans/${c}`).header("Cache-Control","no-store").middlewareOptions((0,Cr.F)(pd)).get()}))(this.graph,c);return{id:n.id,title:n.title,_raw:n}})}getTaskFoldersForTaskGroup(c){return ua(this,void 0,void 0,function*(){return(yield((d,c)=>Ts(void 0,void 0,void 0,function*(){const n=yield d.api(`/planner/plans/${c}/buckets`).header("Cache-Control","no-store").middlewareOptions((0,Cr.F)(pd)).get();return n?.value}))(this.graph,c)).map(o=>({_raw:o,id:o.id,name:o.name,parentId:o.planId}))})}getTasksForTaskFolder(c){return ua(this,void 0,void 0,function*(){return(yield((d,c)=>Ts(void 0,void 0,void 0,function*(){const n=yield d.api(`/planner/buckets/${c}/tasks`).header("Cache-Control","no-store").middlewareOptions((0,Cr.F)(pd)).get();return n?.value}))(this.graph,c)).map(o=>({_raw:o,assignments:o.assignments,completed:100===o.percentComplete,dueDate:o.dueDateTime&&new Date(o.dueDateTime),eTag:o["@odata.etag"],id:o.id,immediateParentId:o.bucketId,name:o.title,topParentId:o.planId}))})}setTaskComplete(c){return ua(this,void 0,void 0,function*(){return yield((d,c)=>Ts(void 0,void 0,void 0,function*(){yield gd(d,c,{percentComplete:100})}))(this.graph,c)})}setTaskIncomplete(c){return ua(this,void 0,void 0,function*(){return((d,c)=>Ts(void 0,void 0,void 0,function*(){yield gd(d,c,{percentComplete:0})}))(this.graph,c)})}addTask(c){var n;return ua(this,void 0,void 0,function*(){return yield((d,c)=>Ts(void 0,void 0,void 0,function*(){return yield d.api("/planner/tasks").header("Cache-Control","no-store").middlewareOptions((0,Cr.F)(Fh)).post(c)}))(this.graph,{assignments:c.assignments,bucketId:c.immediateParentId,dueDateTime:null===(n=c.dueDate)||void 0===n?void 0:n.toISOString(),planId:c.topParentId,title:c.name})})}assignPeopleToTask(c,n){return ua(this,void 0,void 0,function*(){return((d,c,n)=>Ts(void 0,void 0,void 0,function*(){yield gd(d,c,{assignments:n,appliedCategories:{category4:!0}})}))(this.graph,c,n)})}removeTask(c){return ua(this,void 0,void 0,function*(){return yield((d,c)=>Ts(void 0,void 0,void 0,function*(){yield d.api(`/planner/tasks/${c.id}`).header("Cache-Control","no-store").header("If-Match",c.eTag).middlewareOptions((0,Cr.F)(Fh)).delete()}))(this.graph,c)})}isAssignedToMe(c,n){return Object.keys(c.assignments).includes(n)}}var yv=h(8313),Jr=h(4585);const kp=d=>{const c=wt.li_.getValueFor(d);return(0,yv.H)(Jr.q.create(c,c,c))};var vd=h(1635),iu=h(8746);class bv extends Mh{}class Cv extends((0,iu.rf)(bv)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}let ru=(()=>{class d extends Cv{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=(0,Ac.NF)("listbox-"),this.maxHeight=0}openChanged(n,o){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void yo.dv.queueUpdate(()=>this.focus());this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return on.cP.track(this,"value"),this._value}set value(n){var o,f,m,A,F,ae,Se;const Me=`${this._value}`;if(null!==(o=this._options)&&void 0!==o&&o.length){const We=this._options.findIndex(rn=>rn.value===n),Vt=null!==(m=null===(f=this._options[this.selectedIndex])||void 0===f?void 0:f.value)&&void 0!==m?m:null,Yt=null!==(F=null===(A=this._options[We])||void 0===A?void 0:A.value)&&void 0!==F?F:null;(-1===We||Vt!==Yt)&&(n="",this.selectedIndex=We),n=null!==(Se=null===(ae=this.firstSelectedOption)||void 0===ae?void 0:ae.value)&&void 0!==Se?Se:n}Me!==n&&(this._value=n,super.valueChanged(Me,n),on.cP.notify(this,"value"),this.updateDisplayValue())}updateValue(n){var o,f;this.$fastController.isConnected&&(this.value=null!==(f=null===(o=this.firstSelectedOption)||void 0===o?void 0:o.value)&&void 0!==f?f:""),n&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(n,o){super.selectedIndexChanged(n,o),this.updateValue()}positionChanged(n,o){this.positionAttribute=o,this.setPositioning()}setPositioning(){const n=this.getBoundingClientRect(),f=window.innerHeight-n.bottom;this.position=this.forcedPosition?this.positionAttribute:n.top>f?"above":"below",this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight="above"===this.position?~~n.top:~~f}get displayValue(){var n,o;return on.cP.track(this,"displayValue"),null!==(o=null===(n=this.firstSelectedOption)||void 0===n?void 0:n.text)&&void 0!==o?o:""}disabledChanged(n,o){super.disabledChanged&&super.disabledChanged(n,o),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(n){if(!this.disabled){if(this.open){const o=n.target.closest("option,[role=option]");if(o&&o.disabled)return}return super.clickHandler(n),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(n){var o;if(super.focusoutHandler(n),!this.open)return!0;const f=n.relatedTarget;this.isSameNode(f)?this.focus():null!==(o=this.options)&&void 0!==o&&o.includes(f)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(n,o){super.handleChange(n,o),"value"===o&&this.updateValue()}slottedOptionsChanged(n,o){this.options.forEach(f=>{on.cP.getNotifier(f).unsubscribe(this,"value")}),super.slottedOptionsChanged(n,o),this.options.forEach(f=>{on.cP.getNotifier(f).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(n){var o;return n.offsetX>=0&&n.offsetX<=(null===(o=this.listbox)||void 0===o?void 0:o.scrollWidth)?super.mousedownHandler(n):this.collapsible}multipleChanged(n,o){super.multipleChanged(n,o),this.proxy&&(this.proxy.multiple=o)}selectedOptionsChanged(n,o){var f;super.selectedOptionsChanged(n,o),null===(f=this.options)||void 0===f||f.forEach((m,A)=>{var F;const ae=null===(F=this.proxy)||void 0===F?void 0:F.options.item(A);ae&&(ae.selected=m.selected)})}setDefaultSelectedOption(){var n;const o=null!==(n=this.options)&&void 0!==n?n:Array.from(this.children).filter(Dl.slottedOptionFilter),f=o?.findIndex(m=>m.hasAttribute("selected")||m.selected||m.value===this.value);this.selectedIndex=-1===f?0:f}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(n=>{const o=n.proxy||(n instanceof HTMLOptionElement?n.cloneNode():null);o&&this.proxy.options.add(o)}))}keydownHandler(n){super.keydownHandler(n);const o=n.key||n.key.charCodeAt(0);switch(o){case Mn.gG:n.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case Mn.Tg:case Mn.FM:n.preventDefault();break;case Mn.Mm:n.preventDefault(),this.open=!this.open;break;case Mn.F9:this.collapsible&&this.open&&(n.preventDefault(),this.open=!1);break;case Mn.J9:return this.collapsible&&this.open&&(n.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(o===Mn.HX||o===Mn.I5)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(n,o){super.sizeChanged(n,o),this.proxy&&(this.proxy.size=o)}updateDisplayValue(){this.collapsible&&on.cP.notify(this,"displayValue")}}return(0,Dt.Cg)([(0,ln.CF)({attribute:"open",mode:"boolean"})],d.prototype,"open",void 0),(0,Dt.Cg)([on.Jg],d.prototype,"collapsible",null),(0,Dt.Cg)([on.sH],d.prototype,"control",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"position"})],d.prototype,"positionAttribute",void 0),(0,Dt.Cg)([on.sH],d.prototype,"position",void 0),(0,Dt.Cg)([on.sH],d.prototype,"maxHeight",void 0),d})(),Uh=(()=>{class d{}return(0,Dt.Cg)([on.sH],d.prototype,"ariaControls",void 0),d})();(0,Yr.X)(Uh,Dc),(0,Yr.X)(ru,lr.qw,Uh);var Ss=h(8287),ls=h(1589),eo=h(4932),nc=h(5778),As=h(4954),Sn=h(3226),Bh=h(2783),$r=h(4583),ic=h(2622),Is=h(9709),wv=h(6009),zs=h(3928);const Mp=".control",ou=":not([disabled]):not([open])",_v="[disabled]",Op=(d,c)=>bi.A`
    ${(0,qo.V)("inline-flex")}
    
    :host {
      border-radius: calc(${wt.PbG} * 1px);
      box-sizing: border-box;
      color: ${wt.lHw};
      fill: currentcolor;
      font-family: ${wt.OCo};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${Bh.H0};
      background: ${wt.pfK};
      border-radius: calc(${wt.JUW} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${$r.D} * 1px));
      padding: calc((${wt.vR1} - ${wt.XAH} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${wt.XAH} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${wt.XAH} * 1px) solid transparent;
      border-radius: calc(${wt.PbG} * 1px);
      height: calc(${$r.D} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${Is.Ah}
      min-height: 100%;
      padding: 0 calc(${wt.vR1} * 2.25px);
      width: 100%;
    }

    :host(:${eo.N}) {
      ${ec.W}
    }

    :host([disabled]) .control {
      cursor: ${nc.Z};
      opacity: ${wt.qB4};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${$r.D} + ${wt.vR1} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${$r.D} + ${wt.vR1} * 2) * 1px);
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
  `,Ml=(()=>{class d extends ru{appearanceChanged(n,o){n!==o&&(this.classList.add(o),this.classList.remove(n))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&wt.pfK.setValueFor(this.listbox,wt.Tkp)}}return(0,vd.Cg)([(0,ln.CF)({mode:"fromView"})],d.prototype,"appearance",void 0),d})().compose({baseName:"select",baseClass:ru,template:(d,c)=>gi.q`
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
        ${(0,Ss.z)(n=>n.collapsible,gi.q`
                <div
                    class="control"
                    part="control"
                    ?disabled="${n=>n.disabled}"
                    ${(0,ls.K)("control")}
                >
                    ${(0,lr.LT)(d,c)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${n=>n.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${c.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${(0,lr.aO)(d,c)}
                </div>
            `)}
        <div
            class="listbox"
            id="${n=>n.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${n=>n.disabled}"
            ?hidden="${n=>!!n.collapsible&&!n.open}"
            ${(0,ls.K)("listbox")}
        >
            <slot
                ${(0,Es.e)({filter:Dl.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(d,c)=>Op().withBehaviors((0,ic.f)("outline",(0,wv._9)(d,c,ou,_v)),(0,ic.f)("filled",(0,zs.dM)(d,c,Mp,ou).withBehaviors((0,As.mr)((0,zs.lb)(d,c,Mp,ou)))),(0,ic.f)("stealth",(0,wv.ss)(d,c,ou,_v)),(0,As.mr)(bi.A`
    :host([open]) .listbox {
      background: ${Sn.A.ButtonFace};
      border-color: ${Sn.A.CanvasText};
    }
  `)),indicator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  '});class Pc{constructor(c,n){this.cache=new WeakMap,this.ltr=c,this.rtl=n}bind(c){this.attach(c)}unbind(c){const n=this.cache.get(c);n&&wt.oWd.unsubscribe(n)}attach(c){const n=this.cache.get(c)||new Vh(this.ltr,this.rtl,c),o=wt.oWd.getValueFor(c);wt.oWd.subscribe(n),n.attach(o),this.cache.set(c,n)}}class Vh{constructor(c,n,o){this.ltr=c,this.rtl=n,this.source=o,this.attached=null}handleChange({token:n}){this.attach(n.getValueFor(this.source))}attach(c){this.attached!==this[c]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[c],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const jh=jr.compose({baseName:"option",template:(d,c)=>gi.q`
    <template
        aria-checked="${n=>n.ariaChecked}"
        aria-disabled="${n=>n.ariaDisabled}"
        aria-posinset="${n=>n.ariaPosInSet}"
        aria-selected="${n=>n.ariaSelected}"
        aria-setsize="${n=>n.ariaSetSize}"
        class="${n=>[n.checked&&"checked",n.selected&&"selected",n.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${(0,lr.LT)(d,c)}
        <span class="content" part="content">
            <slot ${(0,Es.e)("content")}></slot>
        </span>
        ${(0,lr.aO)(d,c)}
    </template>
`,styles:(d,c)=>bi.A`
    ${(0,qo.V)("inline-flex")} :host {
      position: relative;
      ${Is.Ah}
      background: ${wt.WlO};
      border-radius: calc(${wt.PbG} * 1px);
      border: calc(${wt.XAH} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${wt.lHw};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${$r.D} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${wt.vR1} * 3) - ${wt.XAH} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${wt.vdx} - ${wt.XAH}) * 1px);
      top: calc((${$r.D} / 4) - ${wt.vdx} * 1px);
      width: 3px;
      height: calc((${$r.D} / 2) * 1px);
      background: transparent;
      border-radius: calc(${wt.PbG} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${wt.oO8};
    }

    :host(:not([disabled]):active) {
      background: ${wt.wOW};
    }

    :host(:not([disabled]):active)::before {
      background: ${wt.IRh};
      height: calc(((${$r.D} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${wt.IRh};
    }

    :host(:${eo.N}) {
      ${ec.W}
      background: ${wt.UBo};
    }

    :host([aria-selected='true']) {
      background: ${wt.v8G};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${wt.Rgz};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${wt.DKg};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${wt.oO8};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${wt.wOW};
    }

    :host([disabled]) {
      cursor: ${nc.Z};
      opacity: ${wt.qB4};
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
  `.withBehaviors(new Pc(null,bi.A`
      :host::before {
        right: calc((${wt.vdx} - ${wt.XAH}) * 1px);
      }
    `),(0,As.mr)(bi.A`
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
        :host(:${eo.N}) {
          outline-color: ${Sn.A.CanvasText};
        }
      `))});var Np=h(9684),Lp=h(5017);const wb={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"};var ha=h(9748);const yd=d=>{const c=d.closest("[dir]");return null!==c&&"rtl"===c.dir?ha.O.rtl:ha.O.ltr};let Nc=(()=>{class d extends wr.g{constructor(){super(...arguments),this.role="menuitem",this.hasSubmenu=!1,this.currentDirection=ha.O.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=n=>{if(n.defaultPrevented)return!1;switch(n.key){case Mn.Mm:case Mn.gG:return this.invoke(),!1;case Mn.bb:return this.expandAndFocus(),!1;case Mn.kT:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=n=>(n.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=n=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=n=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case"menuitemcheckbox":this.checked=!this.checked;break;case"menuitem":this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case"menuitemradio":this.checked||(this.checked=!0)}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(n=>"menu"===n.getAttribute("role")),this.hasSubmenu=void 0!==this.submenu}}expandedChanged(n){if(this.$fastController.isConnected){if(void 0===this.submenu)return;!1===this.expanded?this.submenu.collapseExpandedItem():this.currentDirection=yd(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(n,o){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),yo.dv.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,void 0!==this.observer&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(n=>!n.hasAttribute("hidden"))}}return(0,Dt.Cg)([(0,ln.CF)({mode:"boolean"})],d.prototype,"disabled",void 0),(0,Dt.Cg)([(0,ln.CF)({mode:"boolean"})],d.prototype,"expanded",void 0),(0,Dt.Cg)([on.sH],d.prototype,"startColumnCount",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"role",void 0),(0,Dt.Cg)([(0,ln.CF)({mode:"boolean"})],d.prototype,"checked",void 0),(0,Dt.Cg)([on.sH],d.prototype,"submenuRegion",void 0),(0,Dt.Cg)([on.sH],d.prototype,"hasSubmenu",void 0),(0,Dt.Cg)([on.sH],d.prototype,"currentDirection",void 0),(0,Dt.Cg)([on.sH],d.prototype,"submenu",void 0),d})();(0,Yr.X)(Nc,lr.qw);let su=(()=>{class d extends wr.g{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>null!==this.parentElement&&(0,Ic.sb)(this.parentElement)&&"menuitem"===this.parentElement.getAttribute("role"),this.handleFocusOut=n=>{if(!this.contains(n.relatedTarget)&&void 0!==this.menuItems){this.collapseExpandedItem();const o=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[o].setAttribute("tabindex","0"),this.focusIndex=o}},this.handleItemFocus=n=>{const o=n.target;void 0!==this.menuItems&&o!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(o),o.setAttribute("tabindex","0"))},this.handleExpandedChanged=n=>{if(n.defaultPrevented||null===n.target||void 0===this.menuItems||this.menuItems.indexOf(n.target)<0)return;n.preventDefault();const o=n.target;null===this.expandedItem||o!==this.expandedItem||!1!==o.expanded?o.expanded&&(null!==this.expandedItem&&this.expandedItem!==o&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=o,this.focusIndex=this.menuItems.indexOf(o),o.setAttribute("tabindex","0")):this.expandedItem=null},this.removeItemListeners=()=>{void 0!==this.menuItems&&this.menuItems.forEach(n=>{n.removeEventListener("expanded-change",this.handleExpandedChanged),n.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{const n=this.domChildren();this.removeItemListeners(),this.menuItems=n;const o=this.menuItems.filter(this.isMenuItemElement);o.length&&(this.focusIndex=0);const m=o.reduce((A,F)=>{const ae=function f(A){const F=A.getAttribute("role"),ae=A.querySelector("[slot=start]");return"menuitem"!==F&&null===ae||"menuitem"===F&&null!==ae?1:"menuitem"!==F&&null!==ae?2:0}(F);return A>ae?A:ae},0);o.forEach((A,F)=>{A.setAttribute("tabindex",0===F?"0":"-1"),A.addEventListener("expanded-change",this.handleExpandedChanged),A.addEventListener("focus",this.handleItemFocus),(A instanceof Nc||"startColumnCount"in A)&&(A.startColumnCount=m)})},this.changeHandler=n=>{if(void 0===this.menuItems)return;const o=n.target,f=this.menuItems.indexOf(o);if(-1!==f&&"menuitemradio"===o.role&&!0===o.checked){for(let A=f-1;A>=0;--A){const F=this.menuItems[A],ae=F.getAttribute("role");if("menuitemradio"===ae&&(F.checked=!1),"separator"===ae)break}const m=this.menuItems.length-1;for(let A=f+1;A<=m;++A){const F=this.menuItems[A],ae=F.getAttribute("role");if("menuitemradio"===ae&&(F.checked=!1),"separator"===ae)break}}},this.isMenuItemElement=n=>(0,Ic.sb)(n)&&d.focusableElementRoles.hasOwnProperty(n.getAttribute("role")),this.isFocusableElement=n=>this.isMenuItemElement(n)}itemsChanged(n,o){this.$fastController.isConnected&&void 0!==this.menuItems&&this.setItems()}connectedCallback(){super.connectedCallback(),yo.dv.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){null!==this.expandedItem&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(n){if(!n.defaultPrevented&&void 0!==this.menuItems)switch(n.key){case Mn.HX:return void this.setFocus(this.focusIndex+1,1);case Mn.I5:return void this.setFocus(this.focusIndex-1,-1);case Mn.FM:return void this.setFocus(this.menuItems.length-1,-1);case Mn.Tg:return void this.setFocus(0,1);default:return!0}}domChildren(){return Array.from(this.children).filter(n=>!n.hasAttribute("hidden"))}setFocus(n,o){if(void 0!==this.menuItems)for(;n>=0&&n<this.menuItems.length;){const f=this.menuItems[n];if(this.isFocusableElement(f)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=n,f.setAttribute("tabindex","0"),f.focus();break}n+=o}}}return d.focusableElementRoles=wb,(0,Dt.Cg)([on.sH],d.prototype,"items",void 0),d})();let Fc=(()=>{class d extends wr.g{constructor(){super(...arguments),this.role="separator",this.orientation="horizontal"}}return(0,Dt.Cg)([ln.CF],d.prototype,"role",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"orientation",void 0),d})();const lu=class $c extends su{connectedCallback(){super.connectedCallback(),wt.pfK.setValueFor(this,wt.Tkp)}}.compose({baseName:"menu",baseClass:su,template:(d,c)=>gi.q`
    <template
        slot="${n=>n.slot?n.slot:n.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(n,o)=>n.handleMenuKeyDown(o.event)}"
        @focusout="${(n,o)=>n.handleFocusOut(o.event)}"
    >
        <slot ${(0,Es.e)("items")}></slot>
    </template>
`,styles:(d,c)=>bi.A`
    ${(0,qo.V)("block")} :host {
      background: ${wt.Tkp};
      border: calc(${wt.XAH} * 1px) solid transparent;
      border-radius: calc(${wt.JUW} * 1px);
      box-shadow: ${Bh.H0};
      padding: calc((${wt.vR1} - ${wt.XAH}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${wt.vR1} * 2px);
    }

    ::slotted(${d.tagFor(Nc)}) {
      margin: 0 calc(${wt.vR1} * 1px);
    }

    ::slotted(${d.tagFor(Fc)}) {
      margin: calc(${wt.vR1} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${wt.vR1} * 1px) 0;
      border: none;
      border-top: calc(${wt.XAH} * 1px) solid ${wt.hb6};
    }
  `.withBehaviors((0,As.mr)(bi.A`
        :host([slot='submenu']) {
          background: ${Sn.A.Canvas};
          border-color: ${Sn.A.CanvasText};
        }
      `))}),Wp="focusin",Bc="focusout",rc="keydown";var pu=h(5441);class Zn extends wr.g{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=ha.O.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),null!==this.anchorElement&&(this.requestPositionUpdates(),null!==this.resizeDetector&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{null===this.anchorElement||this.pendingPositioningUpdate||(Zn.intersectionService.requestPosition(this,this.handleIntersection),Zn.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&Zn.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,Zn.intersectionService.cancelRequestPosition(this,this.handleIntersection),null!==this.anchorElement&&Zn.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&Zn.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),null!==this.resizeDetector&&this.resizeDetector.disconnect()},this.getViewport=()=>"string"!=typeof this.viewport||""===this.viewport?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=c=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(c)&&this.updateLayout())},this.applyIntersectionEntries=c=>{const n=c.find(m=>m.target===this),o=c.find(m=>m.target===this.anchorElement),f=c.find(m=>m.target===this.viewportElement);return void 0!==n&&void 0!==f&&void 0!==o&&!!(!this.regionVisible||this.forceUpdate||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect||this.isRectDifferent(this.anchorRect,o.boundingClientRect)||this.isRectDifferent(this.viewportRect,f.boundingClientRect)||this.isRectDifferent(this.regionRect,n.boundingClientRect))&&(this.regionRect=n.boundingClientRect,this.anchorRect=o.boundingClientRect,this.viewportRect=this.viewportElement===document.documentElement?new DOMRectReadOnly(f.boundingClientRect.x+document.documentElement.scrollLeft,f.boundingClientRect.y+document.documentElement.scrollTop,f.boundingClientRect.width,f.boundingClientRect.height):f.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0)},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(c,n)=>Math.abs(c.top-n.top)>this.updateThreshold||Math.abs(c.right-n.right)>this.updateThreshold||Math.abs(c.bottom-n.bottom)>this.updateThreshold||Math.abs(c.left-n.left)>this.updateThreshold,this.handleResize=c=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,null===this.anchorElement&&(this.anchorElement=this.getAnchor()),null===this.viewportElement&&(this.viewportElement=this.getViewport()),this.currentDirection=yd(this),this.startObservers())},this.updateLayout=()=>{let c,n;if("uncontrolled"!==this.horizontalPositioningMode){const m=this.getPositioningOptions(this.horizontalInset);if("center"===this.horizontalDefaultPosition)n="center";else if("unset"!==this.horizontalDefaultPosition){let Vt=this.horizontalDefaultPosition;if("start"===Vt||"end"===Vt){const Yt=yd(this);if(Yt!==this.currentDirection)return this.currentDirection=Yt,void this.initialize();Vt=this.currentDirection===ha.O.ltr?"start"===Vt?"left":"right":"start"===Vt?"right":"left"}switch(Vt){case"left":n=this.horizontalInset?"insetStart":"start";break;case"right":n=this.horizontalInset?"insetEnd":"end"}}const A=void 0!==this.horizontalThreshold?this.horizontalThreshold:void 0!==this.regionRect?this.regionRect.width:0,F=void 0!==this.anchorRect?this.anchorRect.left:0,ae=void 0!==this.anchorRect?this.anchorRect.right:0,Se=void 0!==this.anchorRect?this.anchorRect.width:0,Me=void 0!==this.viewportRect?this.viewportRect.left:0,We=void 0!==this.viewportRect?this.viewportRect.right:0;(void 0===n||"locktodefault"!==this.horizontalPositioningMode&&this.getAvailableSpace(n,F,ae,Se,Me,We)<A)&&(n=this.getAvailableSpace(m[0],F,ae,Se,Me,We)>this.getAvailableSpace(m[1],F,ae,Se,Me,We)?m[0]:m[1])}if("uncontrolled"!==this.verticalPositioningMode){const m=this.getPositioningOptions(this.verticalInset);if("center"===this.verticalDefaultPosition)c="center";else if("unset"!==this.verticalDefaultPosition)switch(this.verticalDefaultPosition){case"top":c=this.verticalInset?"insetStart":"start";break;case"bottom":c=this.verticalInset?"insetEnd":"end"}const A=void 0!==this.verticalThreshold?this.verticalThreshold:void 0!==this.regionRect?this.regionRect.height:0,F=void 0!==this.anchorRect?this.anchorRect.top:0,ae=void 0!==this.anchorRect?this.anchorRect.bottom:0,Se=void 0!==this.anchorRect?this.anchorRect.height:0,Me=void 0!==this.viewportRect?this.viewportRect.top:0,We=void 0!==this.viewportRect?this.viewportRect.bottom:0;(void 0===c||"locktodefault"!==this.verticalPositioningMode&&this.getAvailableSpace(c,F,ae,Se,Me,We)<A)&&(c=this.getAvailableSpace(m[0],F,ae,Se,Me,We)>this.getAvailableSpace(m[1],F,ae,Se,Me,We)?m[0]:m[1])}const o=this.getNextRegionDimension(n,c),f=this.horizontalPosition!==n||this.verticalPosition!==c;if(this.setHorizontalPosition(n,o),this.setVerticalPosition(c,o),this.updateRegionStyle(),!this.initialLayoutComplete)return this.initialLayoutComplete=!0,void this.requestPositionUpdates();this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),f&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top","start"===this.verticalPosition),this.classList.toggle("bottom","end"===this.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.verticalPosition),this.classList.toggle("vertical-center","center"===this.verticalPosition),this.classList.toggle("left","start"===this.horizontalPosition),this.classList.toggle("right","end"===this.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.horizontalPosition),this.classList.toggle("horizontal-center","center"===this.horizontalPosition)},this.setHorizontalPosition=(c,n)=>{if(void 0===c||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let o=0;switch(this.horizontalScaling){case"anchor":case"fill":o=this.horizontalViewportLock?this.viewportRect.width:n.width,this.regionWidth=`${o}px`;break;case"content":o=this.regionRect.width,this.regionWidth="unset"}let f=0;switch(c){case"start":this.translateX=this.baseHorizontalOffset-o,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-o+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(f=(this.anchorRect.width-o)/2,this.translateX=this.baseHorizontalOffset+f,this.horizontalViewportLock){const m=this.anchorRect.left+f,A=this.anchorRect.right-f;m<this.viewportRect.left&&!(A>this.viewportRect.right)?this.translateX=this.translateX-(m-this.viewportRect.left):A>this.viewportRect.right&&!(m<this.viewportRect.left)&&(this.translateX=this.translateX-(A-this.viewportRect.right))}}this.horizontalPosition=c},this.setVerticalPosition=(c,n)=>{if(void 0===c||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let o=0;switch(this.verticalScaling){case"anchor":case"fill":o=this.verticalViewportLock?this.viewportRect.height:n.height,this.regionHeight=`${o}px`;break;case"content":o=this.regionRect.height,this.regionHeight="unset"}let f=0;switch(c){case"start":this.translateY=this.baseVerticalOffset-o,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-o+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(f=(this.anchorRect.height-o)/2,this.translateY=this.baseVerticalOffset+f,this.verticalViewportLock){const m=this.anchorRect.top+f,A=this.anchorRect.bottom-f;m<this.viewportRect.top&&!(A>this.viewportRect.bottom)?this.translateY=this.translateY-(m-this.viewportRect.top):A>this.viewportRect.bottom&&!(m<this.viewportRect.top)&&(this.translateY=this.translateY-(A-this.viewportRect.bottom))}}this.verticalPosition=c},this.getPositioningOptions=c=>c?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(c,n,o,f,m,A)=>{const F=n-m,ae=A-(n+f);switch(c){case"start":return F;case"insetStart":return F+f;case"insetEnd":return ae+f;case"end":return ae;case"center":return 2*Math.min(F,ae)+f}},this.getNextRegionDimension=(c,n)=>{const o={height:void 0!==this.regionRect?this.regionRect.height:0,width:void 0!==this.regionRect?this.regionRect.width:0};return void 0!==c&&"fill"===this.horizontalScaling?o.width=this.getAvailableSpace(c,void 0!==this.anchorRect?this.anchorRect.left:0,void 0!==this.anchorRect?this.anchorRect.right:0,void 0!==this.anchorRect?this.anchorRect.width:0,void 0!==this.viewportRect?this.viewportRect.left:0,void 0!==this.viewportRect?this.viewportRect.right:0):"anchor"===this.horizontalScaling&&(o.width=void 0!==this.anchorRect?this.anchorRect.width:0),void 0!==n&&"fill"===this.verticalScaling?o.height=this.getAvailableSpace(n,void 0!==this.anchorRect?this.anchorRect.top:0,void 0!==this.anchorRect?this.anchorRect.bottom:0,void 0!==this.anchorRect?this.anchorRect.height:0,void 0!==this.viewportRect?this.viewportRect.top:0,void 0!==this.viewportRect?this.viewportRect.bottom:0):"anchor"===this.verticalScaling&&(o.height=void 0!==this.anchorRect?this.anchorRect.height:0),o},this.startAutoUpdateEventListeners=()=>{window.addEventListener("resize",this.update,{passive:!0}),window.addEventListener("scroll",this.update,{passive:!0,capture:!0}),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener("resize",this.update),window.removeEventListener("scroll",this.update),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(c,n){this.$fastController.isConnected&&this.initialLayoutComplete&&("auto"===c&&this.stopAutoUpdateEventListeners(),"auto"===n&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),"auto"===this.autoUpdateMode&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),"auto"===this.autoUpdateMode&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){null!==this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),null===this.anchorElement&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&!1===this.pendingReset&&(this.setInitialState(),yo.dv.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}Zn.intersectionService=new class tg{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(c,n)=>{var o;if(null!==this.intersectionDetector){if(this.observedElements.has(c))return void(null===(o=this.observedElements.get(c))||void 0===o||o.push(n));this.observedElements.set(c,[n]),this.intersectionDetector.observe(c)}},this.cancelRequestPosition=(c,n)=>{const o=this.observedElements.get(c);if(void 0!==o){const f=o.indexOf(n);-1!==f&&o.splice(f,1)}},this.initializeIntersectionDetector=()=>{pu.am.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=c=>{if(null===this.intersectionDetector)return;const n=[],o=[];c.forEach(f=>{var m;null===(m=this.intersectionDetector)||void 0===m||m.unobserve(f.target);const A=this.observedElements.get(f.target);void 0!==A&&(A.forEach(F=>{let ae=n.indexOf(F);-1===ae&&(ae=n.length,n.push(F),o.push([])),o[ae].push(f)}),this.observedElements.delete(f.target))}),n.forEach((f,m)=>{f(o[m])})},this.initializeIntersectionDetector()}},(0,Dt.Cg)([ln.CF],Zn.prototype,"anchor",void 0),(0,Dt.Cg)([ln.CF],Zn.prototype,"viewport",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"horizontal-positioning-mode"})],Zn.prototype,"horizontalPositioningMode",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"horizontal-default-position"})],Zn.prototype,"horizontalDefaultPosition",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"horizontal-viewport-lock",mode:"boolean"})],Zn.prototype,"horizontalViewportLock",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"horizontal-inset",mode:"boolean"})],Zn.prototype,"horizontalInset",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"horizontal-threshold"})],Zn.prototype,"horizontalThreshold",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"horizontal-scaling"})],Zn.prototype,"horizontalScaling",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"vertical-positioning-mode"})],Zn.prototype,"verticalPositioningMode",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"vertical-default-position"})],Zn.prototype,"verticalDefaultPosition",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"vertical-viewport-lock",mode:"boolean"})],Zn.prototype,"verticalViewportLock",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"vertical-inset",mode:"boolean"})],Zn.prototype,"verticalInset",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"vertical-threshold"})],Zn.prototype,"verticalThreshold",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"vertical-scaling"})],Zn.prototype,"verticalScaling",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"fixed-placement",mode:"boolean"})],Zn.prototype,"fixedPlacement",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"auto-update-mode"})],Zn.prototype,"autoUpdateMode",void 0),(0,Dt.Cg)([on.sH],Zn.prototype,"anchorElement",void 0),(0,Dt.Cg)([on.sH],Zn.prototype,"viewportElement",void 0),(0,Dt.Cg)([on.sH],Zn.prototype,"initialLayoutComplete",void 0);const mu=Nc.compose({baseName:"menu-item",template:(d,c)=>gi.q`
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
            ${(0,Ss.z)(n=>"menuitemcheckbox"===n.role,gi.q`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${c.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${(0,Ss.z)(n=>"menuitemradio"===n.role,gi.q`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${c.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${(0,lr.LT)(d,c)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${(0,lr.aO)(d,c)}
        ${(0,Ss.z)(n=>n.hasSubmenu,gi.q`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${c.expandCollapseGlyph||""}
                        </slot>
                    </span>
                </div>
            `)}
        ${(0,Ss.z)(n=>n.expanded,gi.q`
                <${d.tagFor(Zn)}
                    :anchorElement="${n=>n}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${n=>n.currentDirection}"
                    @loaded="${n=>n.submenuLoaded()}"
                    ${(0,ls.K)("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${d.tagFor(Zn)}>
            `)}
    </template>
`,styles:(d,c)=>bi.A`
    ${(0,qo.V)("grid")} :host {
      contain: layout;
      overflow: visible;
      ${Is.Ah}
      box-sizing: border-box;
      height: calc(${$r.D} * 1px);
      grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      white-space: nowrap;
      color: ${wt.lHw};
      fill: currentcolor;
      cursor: pointer;
      border-radius: calc(${wt.PbG} * 1px);
      border: calc(${wt.XAH} * 1px) solid transparent;
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

    :host(:${eo.N}) {
      ${ec.W}
    }

    :host(:not([disabled]):hover) {
      background: ${wt.oO8};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${wt.wOW};
      color: ${wt.lHw};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${nc.Z};
      opacity: ${wt.qB4};
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
      color: ${wt.cRz};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors((0,As.mr)(bi.A`
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
        :host(:${eo.N}) ::slotted([slot='end']:not(svg)) {
          color: ${Sn.A.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${Sn.A.Highlight};
          color: ${Sn.A.HighlightText};
        }
        :host(:${eo.N}) {
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
        :host([disabled]:${eo.N}) {
          background: ${Sn.A.ButtonFace};
          color: ${Sn.A.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${eo.N}) {
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
            :host(:${eo.N}) .expanded-toggle,
            :host(:${eo.N}) .checkbox,
            :host(:${eo.N}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${eo.N}) .checkbox,
            :host([checked]:${eo.N}) .radio {
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
      `),new Pc(bi.A`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,bi.A`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),checkboxIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',expandCollapseGlyph:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M5.65 3.15a.5.5 0 000 .7L9.79 8l-4.14 4.15a.5.5 0 00.7.7l4.5-4.5a.5.5 0 000-.7l-4.5-4.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  ',radioIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="8" cy="8" r="2"/>\n    </svg>\n  '});var nl=h(5260);const nf={dotOptionsTitle:"More options"},ng=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{display:flex;flex-direction:column;align-items:flex-end}:host .dot-icon{font-family:FabricMDL2Icons;min-width:40px;min-height:30px;text-align:center;line-height:30px}:host .menu{position:absolute;box-shadow:var(--neutral-fill-rest) 0 0 40px 5px;background:var(--neutral-fill-rest);z-index:1;display:none;white-space:nowrap;transform:var(--dot-options-translatey,translateY(32px))}:host .menu.open{display:block}:host fluent-button::part(control){background:inherit}
`];var vu=function(d,c,n,o){var A,f=arguments.length,m=f<3?c:null===o?o=Object.getOwnPropertyDescriptor(c,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,c,n,o);else for(var F=d.length-1;F>=0;F--)(A=d[F])&&(m=(f<3?A(m):f>3?A(c,n,m):A(c,n))||m);return f>3&&m&&Object.defineProperty(c,n,m),m},Ed=function(d,c){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,c)};let Jv=(()=>{class d extends nl.S{constructor(){super(...arguments),this._clickHandler=()=>this.open=!1,this.renderContent=()=>{const n=Object.keys(this.options);return Lt.qy`
      <fluent-button
        appearance="stealth"
        aria-label=${this.strings.dotOptionsTitle}
        @click=${this.onDotClick}
        @keydown=${this.onDotKeydown}
        class="dot-icon">${(0,Kn.r)(Kn.A.Dot)}</fluent-button>
      <fluent-menu class=${(0,Fr.H)({menu:!0,open:this.open})}>
        ${n.map(o=>this.getMenuOption(o,this.options[o]))}
      </fluent-menu>`},this.handleItemClick=(n,o)=>{n.preventDefault(),n.stopPropagation(),o(n),this.open=!1},this.handleItemKeydown=(n,o)=>{this.handleKeydownMenuOption(n),o(n),this.open=!1},this.onDotClick=n=>{n.preventDefault(),n.stopPropagation(),this.open=!this.open},this.onDotKeydown=n=>{"Enter"===n.key&&(n.preventDefault(),n.stopPropagation(),this.open=!this.open)}}static get styles(){return ng}get strings(){return nf}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this._clickHandler)}disconnectedCallback(){window.removeEventListener("click",this._clickHandler),super.disconnectedCallback()}getMenuOption(n,o){return Lt.qy`
      <fluent-menu-item
        @click=${f=>this.handleItemClick(f,o)}
        @keydown=${f=>this.handleItemKeydown(f,o)}>
          ${n}
      </fluent-menu-item>`}handleKeydownMenuOption(n){"Enter"===n.key&&(n.preventDefault(),n.stopPropagation())}}return vu([(0,Mt.MZ)({type:Boolean}),Ed("design:type",Boolean)],d.prototype,"open",void 0),vu([(0,Mt.MZ)({type:Object}),Ed("design:type",Object)],d.prototype,"options",void 0),d})();const ig=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative}:host .header::part(control){font-size:var(--arrow-options-button-font-size, large);font-weight:var(--arrow-options-button-font-weight,600);color:var(--arrow-options-button-font-color,var(--accent-base-color));background:var(--arrow-options-button-background-color,transparent)}:host .header::part(control):hover{background:var(--neutral-fill-stealth-hover)}:host .header::part(control):active,:host .header::part(control):focus{background:var(--neutral-fill-stealth-active)}:host .menu{position:absolute;left:var(--arrow-options-left,0);z-index:1;display:none}:host .menu.open{display:block;width:max-content}
`];var rf=function(d,c,n,o){var A,f=arguments.length,m=f<3?c:null===o?o=Object.getOwnPropertyDescriptor(c,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,c,n,o);else for(var F=d.length-1;F>=0;F--)(A=d[F])&&(m=(f<3?A(m):f>3?A(c,n,m):A(c,n))||m);return f>3&&m&&Object.defineProperty(c,n,m),m},sf=function(d,c){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,c)};let rg=(()=>{class d extends nl.S{static get styles(){return ig}constructor(){super(),this.onHeaderClick=n=>{Object.keys(this.options).length>1&&(n.preventDefault(),n.stopPropagation(),this.open=!this.open)},this.onHeaderKeyDown=n=>{if("Enter"===n.key){n.preventDefault(),n.stopPropagation(),this.open=!this.open;const o=this.renderRoot.querySelector("fluent-menu");o&&(o.classList.remove("closed"),o.classList.add("open"));const f=n.target;if(f){const m=this.renderRoot.querySelector("fluent-menu-item[tabindex='0']");m&&(f.blur(),m.focus())}}},this.renderContent=()=>Lt.qy`
      <fluent-button
        class="header"
        @click=${this.onHeaderClick}
        @keydown=${this.onHeaderKeyDown}
        appearance="lightweight">
          ${this.value}
      </fluent-button>
      <fluent-menu
        class=${(0,Fr.H)({menu:!0,open:this.open,closed:!this.open})}>
          ${this.getMenuOptions()}
      </fluent-menu>`,this.value="",this.options={},this._clickHandler=()=>this.open=!1,window.addEventListener("onblur",()=>this.open=!1)}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this._clickHandler)}disconnectedCallback(){window.removeEventListener("click",this._clickHandler),super.disconnectedCallback()}getMenuOptions(){return Object.keys(this.options).map(o=>Lt.qy`
          <fluent-menu-item
            @click=${A=>{this.open=!1,this.options[o](A)}}
            @keydown=${A=>{const F=this.renderRoot.querySelector(".header");"Enter"===A.key?(this.open=!1,this.options[o](A),F.focus()):"Tab"===A.key?this.open=!1:"Escape"===A.key&&(this.open=!1,F&&F.focus())}}>
              ${o}
          </fluent-menu-item>`)}}return rf([(0,Mt.MZ)({type:Boolean}),sf("design:type",Boolean)],d.prototype,"open",void 0),rf([(0,Mt.MZ)({type:String}),sf("design:type",String)],d.prototype,"value",void 0),rf([(0,Mt.MZ)({type:Object}),sf("design:type",Object)],d.prototype,"options",void 0),d})();var er=function(d,c,n,o){var A,f=arguments.length,m=f<3?c:null===o?o=Object.getOwnPropertyDescriptor(c,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,c,n,o);else for(var F=d.length-1;F>=0;F--)(A=d[F])&&(m=(f<3?A(m):f>3?A(c,n,m):A(c,n))||m);return f>3&&m&&Object.defineProperty(c,n,m),m},ir=function(d,c){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,c)},ds=function(d,c,n,o){return new(n||(n=Promise))(function(m,A){function F(Me){try{Se(o.next(Me))}catch(We){A(We)}}function ae(Me){try{Se(o.throw(Me))}catch(We){A(We)}}function Se(Me){Me.done?m(Me.value):function f(m){return m instanceof n?m:new n(function(A){A(m)})}(Me.value).then(F,ae)}Se((o=o.apply(d,c||[])).next())})};const af={"@odata.type":"#microsoft.graph.plannerAssignment",orderHint:" !"};let lf=(()=>{class d extends Vs.N{static get styles(){return Tp}get strings(){return Sp}get isNewTaskVisible(){return this._isNewTaskVisible}set isNewTaskVisible(n){this._isNewTaskVisible=n,n||(this._newTaskDueDate=null,this._newTaskName="",this._newTaskGroupId="",this._newTaskContainerId="")}static get requiredScopes(){return[...new Set(["group.read.all","group.readwrite.all","tasks.read","tasks.readwrite",...Qd.requiredScopes,...Ep.requiredScopes])]}get filteredTasks(){const n=this._tasks.filter(o=>this.isTaskInSelectedGroupFilter(o)).filter(o=>this.isTaskInSelectedFolderFilter(o)).filter(o=>!this._hiddenTasks.includes(o.id));return this.taskFilter?n.filter(o=>this.taskFilter(o._raw)):n}constructor(){super(),this._isDarkMode=!1,this._me=null,this.renderLoading=()=>this._hasDoneInitialLoad?this.renderContent():this.renderLoadingTask(),this.renderContent=()=>{const n=this._inTaskLoad&&!this._hasDoneInitialLoad?this.renderLoadingTask():null;let o;return this.hideHeader||(o=Lt.qy`
        <div class="header">
          ${this.renderPlanOptions()}
        </div>
      `),Lt.qy`
      ${o}
      <div class="tasks">
        ${this._isNewTaskVisible?this.renderNewTask():null} ${n}
        ${(0,Ma.u)(this.filteredTasks,f=>f.id,f=>this.renderTask(f))}
      </div>
    `},this.onResize=()=>{this.mediaQuery!==this.previousMediaQuery&&(this.previousMediaQuery=this.mediaQuery,this.requestUpdate())},this.onThemeChanged=()=>{this._isDarkMode=kp(this)},this.onAddTaskClick=()=>{var n;const o=this.getPeoplePicker(null),f={};if(o)for(const m of null!==(n=o?.selectedPeople)&&void 0!==n?n:[])f[m.id]=af;!this._newTaskBeingAdded&&this._newTaskName&&(this._currentGroup||this._newTaskGroupId)&&this.addTask(this._newTaskName,this._newTaskDueDate,this._currentGroup?this._currentGroup:this._newTaskGroupId,this._currentFolder?this._currentFolder:this._newTaskFolderId,f)},this.onAddTaskKeyDown=n=>{("Enter"===n.key||" "===n.key)&&this.onAddTaskClick()},this.addNewTaskButtonClick=()=>{this.isNewTaskVisible=!this.isNewTaskVisible},this.newTaskVisible=n=>{"Enter"===n.key&&(this.isNewTaskVisible=!1)},this.handleDateChange=n=>{const o=n.target.value;this._newTaskDueDate=o?new Date(o+"T17:00"):null},this.renderPlannerIcon=n=>(0,Kn.r)(Kn.A.Planner,n),this.renderBucketIcon=n=>(0,Kn.r)(Kn.A.Milestone,n),this.handlePeopleClick=(n,o)=>{this.togglePeoplePicker(o),n.stopPropagation()},this.handlePeopleKeydown=(n,o)=>{("Enter"===n.key||" "===n.key)&&(this.togglePeoplePicker(o),n.stopPropagation(),n.preventDefault())},this.handlePeoplePickerKeydown=n=>{"Enter"===n.key&&n.stopPropagation()},this.clearState(),this.previousMediaQuery=this.mediaQuery}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.onResize),window.addEventListener("darkmodechanged",this.onThemeChanged),this.onThemeChanged()}disconnectedCallback(){window.removeEventListener("resize",this.onResize),window.removeEventListener("darkmodechanged",this.onThemeChanged),super.disconnectedCallback()}clearState(){this._newTaskFolderId="",this._newTaskGroupId="",this._newTaskDueDate=null,this._newTaskName="",this._newTaskBeingAdded=!1,this._tasks=[],this._folders=[],this._groups=[],this._hiddenTasks=[],this._hasDoneInitialLoad=!1,this._inTaskLoad=!1}firstUpdated(n){super.firstUpdated(n),this.initialId&&!this._currentGroup&&(this._currentGroup=this.initialId),this.initialBucketId&&!this._currentFolder&&(this._currentFolder=this.initialBucketId)}loadState(){return ds(this,void 0,void 0,function*(){const n=this.getTaskSource();if(!n)return;const o=Qi.b.globalProvider;if(o&&o.state===Bi.HJ.SignedIn){if(this._inTaskLoad=!0,!this._me){const f=o.graph.forComponent(this);this._me=yield(0,vo.jp)(f)}this.groupId?yield this._loadTasksForGroup(n):this.targetId?yield this._loadTargetPlannerTasks(n):yield this._loadAllTasks(n),this._inTaskLoad=!1,this._hasDoneInitialLoad=!0}})}_loadTargetPlannerTasks(n){return ds(this,void 0,void 0,function*(){const o=yield n.getTaskGroup(this.targetId);let f=yield n.getTaskFoldersForTaskGroup(o.id);this.targetBucketId&&(f=f.filter(A=>A.id===this.targetBucketId));const m=(yield Promise.all(f.map(A=>n.getTasksForTaskFolder(A.id,A.parentId)))).reduce((A,F)=>[...A,...F],[]);this._tasks=m,this._folders=f,this._groups=[o]})}_loadAllTasks(n){return ds(this,void 0,void 0,function*(){const o=yield n.getTaskGroups(),f=(yield Promise.all(o.map(A=>n.getTaskFoldersForTaskGroup(A.id)))).reduce((A,F)=>[...A,...F],[]),m=(yield Promise.all(f.map(A=>n.getTasksForTaskFolder(A.id,A.parentId)))).reduce((A,F)=>[...A,...F],[]);this._tasks=m,this._folders=f,this._groups=o})}_loadTasksForGroup(n){return ds(this,void 0,void 0,function*(){const o=yield n.getTaskGroupsForGroup(this.groupId),f=(yield Promise.all(o.map(A=>n.getTaskFoldersForTaskGroup(A.id)))).reduce((A,F)=>[...A,...F],[]),m=(yield Promise.all(f.map(A=>n.getTasksForTaskFolder(A.id,A.parentId)))).reduce((A,F)=>[...A,...F],[]);this._tasks=m,this._folders=f,this._groups=o})}addTask(n,o,f,m,A={}){return ds(this,void 0,void 0,function*(){const F=this.getTaskSource();if(!F)return;const ae={assignments:A,dueDate:o,immediateParentId:m,name:n,topParentId:f};this._newTaskBeingAdded=!0,ae._raw=yield F.addTask(ae),this.fireCustomEvent("taskAdded",ae),this._newTaskBeingAdded=!1,this.isNewTaskVisible=!1,yield this._task.run()})}completeTask(n){return ds(this,void 0,void 0,function*(){const o=this.getTaskSource();o&&(yield o.setTaskComplete(n),this.fireCustomEvent("taskChanged",n),yield this._task.run())})}uncompleteTask(n){return ds(this,void 0,void 0,function*(){const o=this.getTaskSource();o&&(yield o.setTaskIncomplete(n),this.fireCustomEvent("taskChanged",n),yield this._task.run())})}removeTask(n){return ds(this,void 0,void 0,function*(){const o=this.getTaskSource();o&&(this._hiddenTasks=[...this._hiddenTasks,n.id],yield o.removeTask(n),this.fireCustomEvent("taskRemoved",n),yield this._task.run(),this._hiddenTasks=this._hiddenTasks.filter(f=>f!==n.id))})}assignPeople(n,o=[]){return ds(this,void 0,void 0,function*(){const f=this.getTaskSource();if(!f)return;let m=[];n&&n.assignments&&(m=Object.keys(n.assignments).sort());const A=o.map(Se=>Se.id);if(A.length===m.length&&A.sort().every((Se,Me)=>Se===m[Me]))return;const ae={};for(const Se of m)ae[Se]=A.includes(Se)?af:null;A.forEach(Se=>{m.includes(Se)||(ae[Se]=af)}),n&&(yield f.assignPeopleToTask(n,ae),yield this._task.run())})}renderPlanOptions(){var n;const o=Qi.b.globalProvider;if(!o||o.state!==Bi.HJ.SignedIn)return null;if(this._inTaskLoad&&!this._hasDoneInitialLoad)return Lt.qy`<span class="loading-header"></span>`;const f=this.readOnly||this._isNewTaskVisible?null:Lt.qy`
          <fluent-button
            appearance="accent"
            class="new-task-button"
            @click=${this.addNewTaskButtonClick}>
              <span slot="start">${(0,Kn.r)(Kn.A.Add,"currentColor")}</span>
              ${this.strings.addTaskButtonSubtitle}
          </fluent-button>
        `,m=this._groups.find(Vt=>Vt.id===this._currentGroup)||{title:this.strings.baseSelfAssigned},A={[this.strings.baseSelfAssigned]:()=>{this._currentGroup=null,this._currentFolder=null}};for(const Vt of this._groups)A[Vt.title]=()=>{this._currentGroup=Vt.id,this._currentFolder=null};const F=Ji.Q`
        <mgt-arrow-options
          class="arrow-options"
          .options="${A}"
          .value="${m.title}"
        ></mgt-arrow-options>`,ae=this._currentGroup?(0,Kn.r)(Kn.A.ChevronRight):null,Se=this._folders.find(Vt=>Vt.id===this._currentFolder)||{name:this.strings.bucketsSelfAssigned},Me={[this.strings.bucketsSelfAssigned]:()=>{this._currentFolder=null}};for(const Vt of this._folders.filter(Yt=>Yt.parentId===this._currentGroup))Me[Vt.name]=()=>{this._currentFolder=Vt.id};const We=this.targetBucketId?Lt.qy`
            <span class="plan-title">
              ${(null===(n=this._folders[0])||void 0===n?void 0:n.name)||""}
            </span>`:Ji.Q`
            <mgt-arrow-options class="arrow-options" .options="${Me}" .value="${Se.name}"></mgt-arrow-options>
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
        @input=${Yt=>this._newTaskName=Yt.target.value}>
      </fluent-text-field>`;this._groups.length>0&&!this._newTaskGroupId&&(this._newTaskGroupId=this._groups[0].id);const f=Lt.qy`
      ${(0,Ma.u)(this._groups,Yt=>Yt.id,Yt=>Lt.qy`<fluent-option value="${Yt.id}">${Yt.title}</fluent-option>`)}`,m=this._currentGroup?Lt.qy`
          <span class="new-task-group">
            ${this.renderPlannerIcon(n)}
            <span>${this.getPlanTitle(this._currentGroup)}</span>
          </span>`:Lt.qy`
            <fluent-select>
              <span slot="start">${this.renderPlannerIcon(n)}</span>
              ${this._groups.length>0?f:Lt.qy`<fluent-option selected>No groups found</fluent-option>`}
            </fluent-select>`,A=this._folders.filter(Yt=>this._currentGroup&&Yt.parentId===this._currentGroup||!this._currentGroup&&Yt.parentId===this._newTaskGroupId);A.length>0&&!this._newTaskFolderId&&(this._newTaskFolderId=A[0].id);const F=Lt.qy`
      ${(0,Ma.u)(A,Yt=>Yt.id,Yt=>Lt.qy`<fluent-option value="${Yt.id}">${Yt.name}</fluent-option>`)}`,ae=this._currentFolder?Lt.qy`
          <span class="new-task-bucket">
            ${this.renderBucketIcon(n)}
            <span>${this.getFolderName(this._currentFolder)}</span>
          </span>
        `:Lt.qy`
         <fluent-select>
          <span slot="start">${this.renderBucketIcon(n)}</span>
          ${A.length>0?F:Lt.qy`<fluent-option selected>No folders found</fluent-option>`}
        </fluent-select>`,Me=Lt.qy`
      <fluent-text-field
        autocomplete="off"
        type="date"
        class=${(0,Fr.H)({dark:this._isDarkMode,"new-task":!0})}
        aria-label="${this.strings.addTaskDate}"
        .value="${this.dateToInputValue(this._newTaskDueDate)}"
        @change=${this.handleDateChange}>
      </fluent-text-field>`,We=this.renderAssignedPeople(null),Vt=this._newTaskBeingAdded?Lt.qy`<div class="task-add-button-container"></div>`:Lt.qy`
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
      class=${(0,Fr.H)({task:!0,"new-task":!0})}>
      <div class="task-details-container">
        <div class="top add-new-task">
          <div class="check-and-title">
            ${o}
            <div class="task-content">
              <div class="task-group">${m}</div>
              <div class="task-bucket">${ae}</div>
              ${We}
              <div class="task-due">${Me}</div>
            </div>
          </div>
          <div class="task-options new-task-action-buttons">${Vt}</div>
        </div>
      </div>
    </div>
  `}togglePeoplePicker(n){const o=this.getPeoplePicker(n),f=this.getMgtPeople(n),m=this.getFlyout(n);o&&f&&m&&(m.isOpen?m.close():(o.selectedPeople=f.people,m.open(),setTimeout(()=>o.focus(),100)))}updateAssignedPeople(n){const o=this.getPeoplePicker(n),f=this.getMgtPeople(n);o&&o.selectedPeople!==f.people&&(f.people=o.selectedPeople,this.assignPeople(n,o.selectedPeople))}getPeoplePicker(n){return this.renderRoot.querySelector(`.picker-${n?n.id:"new-task"}`)}getMgtPeople(n){return this.renderRoot.querySelector(`.people-${n?n.id:"new-task"}`)}getFlyout(n){return this.renderRoot.querySelector(`.flyout-${n?n.id:"new-task"}`)}renderTask(n){const{name:o="Task",completed:f=!1,dueDate:m}=n,A=this._currentGroup?null:this.getPlanTitle(n.topParentId),F=this._currentFolder?null:this.getFolderName(n.immediateParentId),ae={task:Object.assign(Object.assign({},n._raw),{groupTitle:A,folderTitle:F})},Se=this.renderTemplate("task",ae,n.id);if(Se)return Se;let Me=this.renderTemplate("task-details",ae,`task-details-${n.id}`);if(!Me){const Yt="var(--neutral-foreground-hint)",rn=this._currentGroup?null:Lt.qy`
              <div class="task-group">
                <span class="task-icon">${this.renderPlannerIcon(Yt)}</span>
                <span class="task-icon-text">${this.getPlanTitle(n.topParentId)}</span>
              </div>
            `,bn=this._currentFolder?null:Lt.qy`
            <div class="task-bucket">
              <span class="task-icon">${this.renderBucketIcon(Yt)}</span>
              <span class="task-icon-text">${this.getFolderName(n.immediateParentId)}</span>
            </div>
          `,ai=m?Lt.qy`
            <div class="task-due">
              <span class="task-icon-text">${this.strings.due}${(0,ur.Gp)(m)}</span>
            </div>
          `:null,Ni=this.renderAssignedPeople(n);Me=Lt.qy`${rn} ${bn} ${Ni} ${ai}`}const We=this.readOnly||this.hideOptions?null:Ji.Q`
            <mgt-dot-options
              class="dot-options"
              .options="${{[this.strings.removeTaskSubtitle]:()=>this.removeTask(n)}}"
            ></mgt-dot-options>`,Vt=(0,Fr.H)({task:!0,complete:f,incomplete:!f,"read-only":this.readOnly});return Lt.qy`
      <div
        data-id="task-${n.id}"
        class=${Vt}
        @click=${()=>this.handleTaskClick(n)}>
        <div class="task-details-container">
          <div class="top">
            <div class="check-and-title">
              <fluent-checkbox
                @click=${Yt=>this.handleTaskCheckClick(Yt,n)}
                @keydown=${Yt=>this.handleTaskCheckKeyDown(Yt,n)}
                ?checked=${f}>
                  ${o}
              </fluent-checkbox>
            </div>
            <div class="task-options">${We}</div>
          </div>
          <div class="bottom">${Me}</div>
        </div>
      </div>
    `}handleTaskCheckKeyDown(n,o){return ds(this,void 0,void 0,function*(){"Enter"===n.key&&(n.stopPropagation(),n.preventDefault(),yield this.checkTask(o))})}handleTaskCheckClick(n,o){return ds(this,void 0,void 0,function*(){n.stopPropagation(),n.preventDefault(),yield this.checkTask(o)})}checkTask(n){return ds(this,void 0,void 0,function*(){if(!this.readOnly){const o=this.shadowRoot.querySelector(`[data-id='task-${n.id}'`);o&&o.classList.add("updating"),n.completed?yield this.uncompleteTask(n):yield this.completeTask(n),o&&o.classList.remove("updating")}})}renderAssignedPeople(n){var o;let f;const m={"new-task-assignee":null===n,"task-assignee":null!==n,"task-detail":null!==n},A=n?n.id:"new-task";m[`flyout-${A}`]=!0;const F=n?Object.keys(n.assignments).map(We=>We):[];if(!this.newTaskVisible){const We=n?._raw,Vt=We?.planId;Vt&&(f=null===(o=this._groups.filter(rn=>rn.id===Vt).pop())||void 0===o?void 0:o.containerId)}const Se=Ji.Q`
      <mgt-people
        class="people people-${A}"
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
      </mgt-people>`,Me=Ji.Q`
      <mgt-people-picker
        class="people-picker picker-${A}"
        .groupId=${(0,Yl.J)(this.isNewTaskVisible?this._newTaskContainerId:f)}
        @keydown=${this.handlePeoplePickerKeydown}>
      ></mgt-people-picker>`;return Ji.Q`
      <mgt-flyout
        light-dismiss
        class=${(0,Fr.H)(m)}
        @closed=${()=>this.updateAssignedPeople(n)}
      >
        <div slot="anchor">${Se}</div>
        <div slot="flyout" part="picker" class="picker">${Me}</div>
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
    `}getTaskSource(){const n=Qi.b.globalProvider;if(!n||n.state!==Bi.HJ.SignedIn)return null;const o=n.graph.forComponent(this);return new xp(o)}getPlanTitle(n){return n?n===this.strings.plansSelfAssigned?this.strings.plansSelfAssigned:(this._groups.find(o=>o.id===n)||{title:this.strings.planNotFound}).title:this.strings.baseSelfAssigned}getFolderName(n){return n?(this._folders.find(o=>o.id===n)||{name:this.strings.bucketNotFound}).name:this.strings.bucketsSelfAssigned}isTaskInSelectedGroupFilter(n){var o;return!this._currentGroup||n.topParentId===this._currentGroup||!this._currentGroup&&this.getTaskSource().isAssignedToMe(n,null===(o=this._me)||void 0===o?void 0:o.id)}isTaskInSelectedFolderFilter(n){return n.immediateParentId===this._currentFolder||!this._currentFolder}dateToInputValue(n){return n?new Date(n.getTime()-6e4*n.getTimezoneOffset()).toISOString().split("T")[0]:null}}return er([(0,Mt.MZ)({attribute:"read-only",type:Boolean}),ir("design:type",Boolean)],d.prototype,"readOnly",void 0),er([(0,Mt.MZ)({attribute:"target-id",type:String}),ir("design:type",String)],d.prototype,"targetId",void 0),er([(0,Mt.MZ)({attribute:"target-bucket-id",type:String}),ir("design:type",String)],d.prototype,"targetBucketId",void 0),er([(0,Mt.MZ)({attribute:"initial-id",type:String}),ir("design:type",String)],d.prototype,"initialId",void 0),er([(0,Mt.MZ)({attribute:"initial-bucket-id",type:String}),ir("design:type",String)],d.prototype,"initialBucketId",void 0),er([(0,Mt.MZ)({attribute:"hide-header",type:Boolean}),ir("design:type",Boolean)],d.prototype,"hideHeader",void 0),er([(0,Mt.MZ)({attribute:"hide-options",type:Boolean}),ir("design:type",Boolean)],d.prototype,"hideOptions",void 0),er([(0,Mt.MZ)({attribute:"group-id",type:String}),ir("design:type",String)],d.prototype,"groupId",void 0),er([(0,Mt.wk)(),ir("design:type",Boolean)],d.prototype,"_isNewTaskVisible",void 0),er([(0,Mt.wk)(),ir("design:type",Boolean)],d.prototype,"_newTaskBeingAdded",void 0),er([(0,Mt.wk)(),ir("design:type",String)],d.prototype,"_newTaskName",void 0),er([(0,Mt.wk)(),ir("design:type",Date)],d.prototype,"_newTaskDueDate",void 0),er([(0,Mt.wk)(),ir("design:type",String)],d.prototype,"_newTaskGroupId",void 0),er([(0,Mt.wk)(),ir("design:type",String)],d.prototype,"_newTaskFolderId",void 0),er([(0,Mt.wk)(),ir("design:type",String)],d.prototype,"_newTaskContainerId",void 0),er([(0,Mt.wk)(),ir("design:type",Array)],d.prototype,"_groups",void 0),er([(0,Mt.wk)(),ir("design:type",Array)],d.prototype,"_folders",void 0),er([(0,Mt.wk)(),ir("design:type",Array)],d.prototype,"_tasks",void 0),er([(0,Mt.wk)(),ir("design:type",Array)],d.prototype,"_hiddenTasks",void 0),er([(0,Mt.wk)(),ir("design:type",Boolean)],d.prototype,"_inTaskLoad",void 0),er([(0,Mt.wk)(),ir("design:type",Boolean)],d.prototype,"_hasDoneInitialLoad",void 0),er([(0,Mt.wk)(),ir("design:type",String)],d.prototype,"_currentGroup",void 0),er([(0,Mt.wk)(),ir("design:type",String)],d.prototype,"_currentFolder",void 0),er([(0,Mt.wk)(),ir("design:type",Object)],d.prototype,"_isDarkMode",void 0),er([(0,Mt.wk)(),ir("design:type",Object)],d.prototype,"_me",void 0),d})();const og=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .container{display:flex;flex-direction:column;position:relative}:host .dropdown{display:none;position:absolute;z-index:1000;top:34px}:host .dropdown.visible{display:flex}:host .dropdown .team-photo{width:24px;position:inherit;border-radius:50%;margin:0 6px}:host .dropdown .team-start-slot{width:max-content}:host .dropdown .team-parent-name{width:auto}:host .loading-text,:host .search-error-text{font-style:normal;font-weight:400;font-size:14px;line-height:20px}:host .message-parent{display:flex;flex-direction:row;gap:5px;padding:5px}:host .message-parent .loading-text{margin:auto}:host fluent-card{background:var(--channel-picker-dropdown-background-color,var(--fill-color));padding:2px;--card-height:auto;--width:var(--card-width)}:host fluent-text-field{width:100%}:host fluent-text-field::part(root){background:padding-box linear-gradient(var(--channel-picker-input-background-color,var(--neutral-fill-input-rest)),var(--channel-picker-input-background-color,var(--neutral-fill-input-rest))),border-box var(--channel-picker-input-border-color,var(--neutral-stroke-input-rest))}:host fluent-text-field::part(root):hover{background:padding-box linear-gradient(var(--channel-picker-input-background-color-hover,var(--neutral-fill-input-hover)),var(--channel-picker-input-background-color-hover,var(--neutral-fill-input-hover))),border-box var(--channel-picker-input-hover-border-color,var(--neutral-stroke-input-hover))}:host fluent-text-field::part(root):focus,:host fluent-text-field::part(root):focus-within{background:padding-box linear-gradient(var(--channel-picker-input-background-color-focus,var(--neutral-fill-input-focus)),var(--channel-picker-input-background-color-focus,var(--neutral-fill-input-focus))),border-box var(--channel-picker-input-focus-border-color,var(--neutral-stroke-input-focus))}:host fluent-text-field::part(control){word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host fluent-text-field::part(control)::placeholder{color:var(--channel-picker-input-placeholder-text-color,var(--input-placeholder-rest))}:host fluent-text-field::part(control):hover::placeholder{color:var(--channel-picker-input-placeholder-text-color-hover,var(--input-placeholder-hover))}:host fluent-text-field::part(control):focus-within::placeholder,:host fluent-text-field::part(control):focus::placeholder{color:var(--channel-picker-input-placeholder-text-color-focus,var(--input-placeholder-filled))}:host fluent-text-field .search-icon svg path{fill:var(--channel-picker-search-icon-color,currentColor)}:host fluent-text-field .down-chevron{height:auto;min-width:auto}:host fluent-text-field .down-chevron svg path{fill:var(--channel-picker-down-chevron-color,currentColor)}:host fluent-text-field .up-chevron{height:auto;min-width:auto}:host fluent-text-field .up-chevron svg path{fill:var(--channel-picker-up-chevron-color,currentColor)}:host fluent-text-field .close-icon{height:auto;min-width:auto}:host fluent-text-field .close-icon svg path{fill:var(--channel-picker-close-icon-color,currentColor)}:host fluent-tree-view{min-width:100%;--tree-item-nested-width:2em}:host fluent-tree-item{width:100%;--tree-item-nested-width:2em}:host fluent-tree-item:focus-visible{outline:0}:host fluent-tree-item::part(expand-collapse-button){background:0 0}:host fluent-tree-item::part(content-region),:host fluent-tree-item::part(positioning-region){color:var(--channel-picker-dropdown-item-text-color,currentColor);background:var(--channel-picker-dropdown-background-color,transparent);border:calc(var(--stroke-width) * 2px) solid transparent;height:auto}:host fluent-tree-item::part(content-region):hover,:host fluent-tree-item::part(positioning-region):hover{background:var(--channel-picker-dropdown-item-background-color-hover,var(--neutral-fill-stealth-hover))}:host fluent-tree-item::part(content-region):hover::part(expand-collapse-button),:host fluent-tree-item::part(positioning-region):hover::part(expand-collapse-button){background:var(--channel-picker-dropdown-item-background-color-hover,var(--neutral-fill-stealth-hover))}:host fluent-tree-item fluent-tree-item::part(content-region){height:auto}:host fluent-breadcrumb-item{color:var(--channel-picker-dropdown-item-text-color-selected,var(--neutral-foreground-rest))}:host fluent-breadcrumb-item .team-parent-name{font-weight:700}:host fluent-breadcrumb-item .team-photo{width:19px;position:inherit;border-radius:50%}:host fluent-breadcrumb-item .arrow{margin-left:8px;margin-right:8px}:host fluent-breadcrumb-item .arrow svg{stroke:var(--channel-picker-arrow-fill,var(--neutral-foreground-rest))}[dir=rtl] :host{--direction:rtl}[dir=rtl] .dropdown{text-align:right}[dir=rtl] .arrow{transform:scaleX(-1);filter:fliph;filter:"FlipH";margin-right:0;margin-left:5px}[dir=rtl] .selected-team{padding-left:10px}[dir=rtl] .message-parent .loading-text{right:auto;left:10px;padding-right:8px;text-align:right}@media (forced-colors:active) and (prefers-color-scheme:dark){:host fluent-text-field svg{stroke:rgb(255,255,255)!important}}@media (forced-colors:active) and (prefers-color-scheme:light){:host fluent-text-field svg{stroke:rgb(0,0,0)!important}}
`];var il=function(d,c,n,o){return new(n||(n=Promise))(function(m,A){function F(Me){try{Se(o.next(Me))}catch(We){A(We)}}function ae(Me){try{Se(o.throw(Me))}catch(We){A(We)}}function Se(Me){Me.done?m(Me.value):function f(m){return m instanceof n?m:new n(function(A){A(m)})}(Me.value).then(F,ae)}Se((o=o.apply(d,c||[])).next())})};const sg=["Team.ReadBasic.All","TeamSettings.Read.All","TeamSettings.ReadWrite.All","User.Read.All","User.ReadWrite.All"],ag=["Channel.ReadBasic.All","ChannelSettings.Read.All","ChannelSettings.ReadWrite.All"],n0=["Team.ReadBasic.All","TeamSettings.Read.All","TeamSettings.ReadWrite.All"],lg={inputPlaceholderText:"Select a channel",noResultsFound:"We didn't find any matches.",loadingMessage:"Loading...",photoFor:"Teams photo for",teamsChannels:"Teams and channels results",closeButtonAriaLabel:"remove the selected channel",downChevronButtonAriaLabel:"Teams show results button",upChevronButtonAriaLabel:"Teams hide results button"};let cf=(()=>{class d extends wr.g{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var n;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&null!==(n=this.$fastController.definition.shadowOptions)&&void 0!==n&&n.delegatesFocus&&(this.focus=()=>{var o;null===(o=this.control)||void 0===o||o.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}return(0,Dt.Cg)([ln.CF],d.prototype,"download",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"href",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"hreflang",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"ping",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"referrerpolicy",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"rel",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"target",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"type",void 0),(0,Dt.Cg)([on.sH],d.prototype,"defaultSlottedContent",void 0),d})(),bu=(()=>{class d{}return(0,Dt.Cg)([(0,ln.CF)({attribute:"aria-expanded"})],d.prototype,"ariaExpanded",void 0),d})();(0,Yr.X)(bu,dd.z),(0,Yr.X)(cf,lr.qw,bu);let Vc=(()=>{class d extends cf{constructor(){super(...arguments),this.separator=!0}}return(0,Dt.Cg)([on.sH],d.prototype,"separator",void 0),d})();(0,Yr.X)(Vc,lr.qw,bu);let cg=(()=>{class d extends wr.g{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(void 0===this.slottedBreadcrumbItems||0===this.slottedBreadcrumbItems.length)return;const n=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(o=>{const f=o===n;this.setItemSeparator(o,f),this.setAriaCurrent(o,f)})}}setItemSeparator(n,o){n instanceof Vc&&(n.separator=!o)}findChildWithHref(n){var o,f;return n.childElementCount>0?n.querySelector("a[href]"):null!==(o=n.shadowRoot)&&void 0!==o&&o.childElementCount?null===(f=n.shadowRoot)||void 0===f?void 0:f.querySelector("a[href]"):null}setAriaCurrent(n,o){const f=this.findChildWithHref(n);null===f&&n.hasAttribute("href")&&n instanceof Vc?o?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current"):null!==f&&(o?f.setAttribute("aria-current","page"):f.removeAttribute("aria-current"))}}return(0,Dt.Cg)([on.sH],d.prototype,"slottedBreadcrumbItems",void 0),d})();var sc=h(829);const df=cg.compose({baseName:"breadcrumb",template:(d,c)=>gi.q`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${(0,Es.e)({property:"slottedBreadcrumbItems",filter:(0,sc.Y)()})}
            ></slot>
        </div>
    </template>
`,styles:(d,c)=>bi.A`
  ${(0,qo.V)("inline-block")} :host {
    box-sizing: border-box;
    ${Is.Ah};
  }

  .list {
    display: flex;
  }
`}),o0=Vc.compose({baseName:"breadcrumb-item",template:(d,c)=>gi.q`
    <div role="listitem" class="listitem" part="listitem">
        ${(0,Ss.z)(n=>n.href&&n.href.length>0,gi.q`
                ${((d,c)=>gi.q`
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
        ${(0,ls.K)("control")}
    >
        ${(0,lr.LT)(d,c)}
        <span class="content" part="content">
            <slot ${(0,Es.e)("defaultSlottedContent")}></slot>
        </span>
        ${(0,lr.aO)(d,c)}
    </a>
`)(d,c)}
            `)}
        ${(0,Ss.z)(n=>!n.href,gi.q`
                ${(0,lr.LT)(d,c)}
                <slot></slot>
                ${(0,lr.aO)(d,c)}
            `)}
        ${(0,Ss.z)(n=>n.separator,gi.q`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${c.separator||""}</slot>
                </span>
            `)}
    </div>
`,styles:(d,c)=>bi.A`
    ${(0,qo.V)("inline-flex")} :host {
      background: transparent;
      color: ${wt.lHw};
      fill: currentcolor;
      box-sizing: border-box;
      ${Is.Ah};
      min-width: calc(${$r.D} * 1px);
      border-radius: calc(${wt.PbG} * 1px);
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
      color: ${wt.LnO};
    }

    .control:active {
      color: ${wt.LIX};
    }

    .control:${eo.N} {
      ${ec.v}
    }

    :host(:not([href])),
    :host([aria-current]) .control {
      color: ${wt.lHw};
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
  `.withBehaviors((0,As.mr)(bi.A`
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
        .control:${eo.N} {
          outline-color: ${Sn.A.LinkText};
        }
      `)),shadowOptions:{delegatesFocus:!0},separator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  '});function Nl(d){return(0,Ic.sb)(d)&&"treeitem"===d.getAttribute("role")}let Ws=(()=>{class d extends wr.g{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>Nl(this.parentElement),this.handleExpandCollapseButtonClick=n=>{!this.disabled&&!n.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=n=>{this.setAttribute("tabindex","0")},this.handleBlur=n=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(n,o){this.$fastController.isConnected&&this.items.forEach(f=>{Nl(f)&&(f.nested=!0)})}static focusItem(n){n.focusable=!0,n.focus()}childItemLength(){const n=this.childItems.filter(o=>Nl(o));return n?n.length:0}}return(0,Dt.Cg)([(0,ln.CF)({mode:"boolean"})],d.prototype,"expanded",void 0),(0,Dt.Cg)([(0,ln.CF)({mode:"boolean"})],d.prototype,"selected",void 0),(0,Dt.Cg)([(0,ln.CF)({mode:"boolean"})],d.prototype,"disabled",void 0),(0,Dt.Cg)([on.sH],d.prototype,"focusable",void 0),(0,Dt.Cg)([on.sH],d.prototype,"childItems",void 0),(0,Dt.Cg)([on.sH],d.prototype,"items",void 0),(0,Dt.Cg)([on.sH],d.prototype,"nested",void 0),(0,Dt.Cg)([on.sH],d.prototype,"renderCollapsedChildren",void 0),d})();(0,Yr.X)(Ws,lr.qw);const di=(()=>{class d extends wr.g{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=n=>{if(!(this.slottedTreeItems.length<1)){if(n.target===this)return null===this.currentFocused&&(this.currentFocused=this.getValidFocusableItem()),void(null!==this.currentFocused&&Ws.focusItem(this.currentFocused));this.contains(n.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=n.target)}},this.handleBlur=n=>{n.target instanceof HTMLElement&&(null===n.relatedTarget||!this.contains(n.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=n=>{if(n.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const o=this.getVisibleNodes();switch(n.key){case Mn.Tg:return void(o.length&&Ws.focusItem(o[0]));case Mn.FM:return void(o.length&&Ws.focusItem(o[o.length-1]));case Mn.kT:if(n.target&&this.isFocusableElement(n.target)){const f=n.target;f instanceof Ws&&f.childItemLength()>0&&f.expanded?f.expanded=!1:f instanceof Ws&&f.parentElement instanceof Ws&&Ws.focusItem(f.parentElement)}return!1;case Mn.bb:if(n.target&&this.isFocusableElement(n.target)){const f=n.target;f instanceof Ws&&f.childItemLength()>0&&!f.expanded?f.expanded=!0:f instanceof Ws&&f.childItemLength()>0&&this.focusNextNode(1,n.target)}return;case Mn.HX:return void(n.target&&this.isFocusableElement(n.target)&&this.focusNextNode(1,n.target));case Mn.I5:return void(n.target&&this.isFocusableElement(n.target)&&this.focusNextNode(-1,n.target));case Mn.Mm:return void this.handleClick(n)}return!0},this.handleSelectedChange=n=>{if(n.defaultPrevented)return;if(!(n.target instanceof Element&&Nl(n.target)))return!0;const o=n.target;o.selected?(this.currentSelected&&this.currentSelected!==o&&(this.currentSelected.selected=!1),this.currentSelected=o):!o.selected&&this.currentSelected===o&&(this.currentSelected=null)},this.setItems=()=>{const n=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=n,(null===this.currentFocused||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(f=>{Nl(f)&&(f.nested=this.nested)})},this.isFocusableElement=n=>Nl(n),this.isSelectedElement=n=>n.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),yo.dv.queueUpdate(()=>{this.setItems()})}handleClick(n){if(n.defaultPrevented)return;if(!(n.target instanceof Element&&Nl(n.target)))return!0;const o=n.target;o.disabled||(o.selected=!o.selected)}focusNextNode(n,o){const f=this.getVisibleNodes();if(!f)return;const m=f[f.indexOf(o)+n];(0,Ic.sb)(m)&&Ws.focusItem(m)}getValidFocusableItem(){const n=this.getVisibleNodes();let o=n.findIndex(this.isSelectedElement);return-1===o&&(o=n.findIndex(this.isFocusableElement)),-1!==o?n[o]:null}checkForNestedItems(){return this.slottedTreeItems.some(n=>Nl(n)&&n.querySelector("[role='treeitem']"))}getVisibleNodes(){return(0,Ic.JL)(this,"[role='treeitem']")||[]}}return(0,Dt.Cg)([(0,ln.CF)({attribute:"render-collapsed-nodes"})],d.prototype,"renderCollapsedNodes",void 0),(0,Dt.Cg)([on.sH],d.prototype,"currentSelected",void 0),(0,Dt.Cg)([on.sH],d.prototype,"slottedTreeItems",void 0),d})().compose({baseName:"tree-view",template:(d,c)=>gi.q`
    <template
        role="tree"
        ${(0,ls.K)("treeView")}
        @keydown="${(n,o)=>n.handleKeyDown(o.event)}"
        @focusin="${(n,o)=>n.handleFocus(o.event)}"
        @focusout="${(n,o)=>n.handleBlur(o.event)}"
        @click="${(n,o)=>n.handleClick(o.event)}"
        @selected-change="${(n,o)=>n.handleSelectedChange(o.event)}"
    >
        <slot ${(0,Es.e)("slottedTreeItems")}></slot>
    </template>
`,styles:(d,c)=>bi.A`
  :host([hidden]) {
    display: none;
  }

  ${(0,qo.V)("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`});var hf=h(7179);class jc extends sc.n{constructor(c,n){super(c,n),this.observer=null,n.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return Array.from("subtree"in this.options?this.target.querySelectorAll(this.options.selector):this.target.childNodes)}}var zc=h(1859);const _u=bi.A`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${$r.D} * -1px));
  }
  :host([selected])::after {
    left: calc(${wt.vdx} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Gc=bi.A`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${$r.D} * -1px));
  }
  :host([selected])::after {
    right: calc(${wt.vdx} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Eu=bi.L`((${wt.Sss} / 2) * ${wt.vR1}) + ((${wt.vR1} * ${wt.Brd}) / 2)`,Sd=zc.G.create("tree-item-expand-collapse-hover").withDefault(d=>{const c=wt.EE_.getValueFor(d);return c.evaluate(d,c.evaluate(d).hover).hover}),mg=zc.G.create("tree-item-expand-collapse-selected-hover").withDefault(d=>{const c=wt.jIq.getValueFor(d);return wt.EE_.getValueFor(d).evaluate(d,c.evaluate(d).rest).hover}),pf=Ws.compose({baseName:"tree-item",template:(d,c)=>gi.q`
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
        ${function pg(d){return"string"==typeof d&&(d={property:d}),new hf.xz("fast-children",jc,d)}({property:"childItems",filter:(0,sc.Y)()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${(0,Ss.z)(n=>n.childItems&&n.childItemLength()>0,gi.q`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(n,o)=>n.handleExpandCollapseButtonClick(o.event)}"
                            ${(0,ls.K)("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${c.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${(0,lr.LT)(d,c)}
                <slot></slot>
                ${(0,lr.aO)(d,c)}
            </div>
        </div>
        ${(0,Ss.z)(n=>n.childItems&&n.childItemLength()>0&&(n.expanded||n.renderCollapsedChildren),gi.q`
                <div role="group" class="items" part="items">
                    <slot name="item" ${(0,Es.e)("items")}></slot>
                </div>
            `)}
    </template>
`,styles:(d,c)=>bi.A`
    ${(0,qo.V)("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${wt.lHw};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${wt.OCo};
      --expand-collapse-button-size: calc(${$r.D} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${wt.WlO};
      border: calc(${wt.XAH} * 1px) solid transparent;
      border-radius: calc(${wt.PbG} * 1px);
      height: calc((${$r.D} + 1) * 1px);
    }

    :host(:${eo.N}) .positioning-region {
      ${ec.W}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${wt.oO8};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${wt.wOW};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${$r.D} * 1px);
      margin-inline-start: calc(${wt.vR1} * 2px + 8px);
      ${Is.Ah}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${wt.vR1} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${wt.PbG} * 1px);
      ${""} width: calc((${Eu} + (${wt.vR1} * 2)) * 1px);
      height: calc((${Eu} + (${wt.vR1} * 2)) * 1px);
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
      ${""} margin-inline-end: calc(${wt.vR1} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${wt.vR1} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${wt.qB4};
      cursor: ${nc.Z};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${Sd};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${wt.v8G};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${mg};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${$r.D} / 4) * 1px);
      width: 3px;
      height: calc((${$r.D} / 2) * 1px);
      ${""} background: ${wt.IRh};
      border-radius: calc(${wt.PbG} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${$r.D} * -1px);
    }
  `.withBehaviors(new Pc(_u,Gc),(0,As.mr)(bi.A`
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
        :host(:${eo.N}) .positioning-region {
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
      `)),expandCollapseGlyph:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  '});var gf=function(d,c,n,o){var A,f=arguments.length,m=f<3?c:null===o?o=Object.getOwnPropertyDescriptor(c,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,c,n,o);else for(var F=d.length-1;F>=0;F--)(A=d[F])&&(m=(f<3?A(m):f>3?A(c,n,m):A(c,n))||m);return f>3&&m&&Object.defineProperty(c,n,m),m},Tu=function(d,c){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,c)},yg=function(d,c,n,o){return new(n||(n=Promise))(function(m,A){function F(Me){try{Se(o.next(Me))}catch(We){A(We)}}function ae(Me){try{Se(o.throw(Me))}catch(We){A(We)}}function Se(Me){Me.done?m(Me.value):function f(m){return m instanceof n?m:new n(function(A){A(m)})}(Me.value).then(F,ae)}Se((o=o.apply(d,c||[])).next())})};let d0=(()=>{class d extends Vs.N{static get styles(){return og}get strings(){return lg}get selectedItem(){return this._selectedItemState?{channel:this._selectedItemState.item,team:this._selectedItemState.parent.item}:null}static get requiredScopes(){return["team.readbasic.all","channel.readbasic.all"]}set items(n){this._items!==n&&(this._items=n,this._treeViewState=n?this.generateTreeViewState(n):[],this.resetFocusState())}get items(){return this._items}get _inputWrapper(){return this.renderRoot.querySelector("fluent-text-field")}get _input(){const n=this._inputWrapper;return n?.shadowRoot.querySelector("input")}constructor(){super(),this.teamsPhotos={},this._inputValue="",this._treeViewState=[],this._focusList=[],this.renderLoading=()=>this.renderContent(),this.renderContent=()=>{var n;const o={dropdown:!0,visible:this._isDropdownVisible};return this.renderTemplate("default",{teams:null!==(n=this.items)&&void 0!==n?n:[]})||Lt.qy`
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
            class=${(0,Fr.H)(o)}
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
      `,this.renderLoadingIndicator=()=>this.renderTemplate("loading",null,"loading")||Ji.Q`
        <div class="message-parent">
          <mgt-spinner></mgt-spinner>
          <div label="loading-text" aria-label="loading" class="loading-text">
            ${this.strings.loadingMessage}
          </div>
        </div>
      `,this.onKeydownTreeView=n=>{"Escape"===n.key&&this.lostFocus()},this.handleTeamTreeItemClick=n=>{n.preventDefault(),n.stopImmediatePropagation();const o=n.target;o&&(o.getAttribute("expanded")?o.removeAttribute("expanded"):o.setAttribute("expanded","true"),o.removeAttribute("selected"),o.getAttribute("id")&&o.setAttribute("selected","true"))},this.handleInputChanged=n=>{const o=n.target;this._inputValue!==o?.value&&(this._inputValue=o?.value,this.gainedFocus(),this.debouncedSearch||(this.debouncedSearch=(0,ur.sg)(()=>{this.filterList()},400)),this.debouncedSearch())},this.loadTeamsIfNotLoaded=()=>{!this.items&&this._task.status!==Ph.e1.PENDING&&this._task.run()},this.handleWindowClick=n=>{n.target!==this&&this.lostFocus()},this.gainedFocus=()=>{const n=this._input;n&&n.focus(),this._isDropdownVisible=!0,this.toggleChevron(),this.resetFocusState(),this.requestUpdate()},this.lostFocus=()=>{this._inputValue="",this._input&&(this._input.value=this._inputValue,this._input.textContent="");const n=this._inputWrapper;n&&(n.value=""),this._isDropdownVisible=!1,this.filterList(),this.toggleChevron(),this.requestUpdate(),void 0!==this._selectedItemState&&this.showCloseIcon()},this.handleFocus=()=>{this.lostFocus(),this.gainedFocus()},this.handleUpChevronClick=n=>{n.stopPropagation(),this.lostFocus()},this._inputValue="",this._treeViewState=[],this._focusList=[],this._isDropdownVisible=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this.handleWindowClick),this.addEventListener("focus",this.loadTeamsIfNotLoaded),this.addEventListener("mouseover",this.loadTeamsIfNotLoaded),this.addEventListener("blur",this.lostFocus);const n=this.renderRoot.ownerDocument;n&&n.documentElement.setAttribute("dir",this.direction)}disconnectedCallback(){window.removeEventListener("click",this.handleWindowClick),this.removeEventListener("focus",this.loadTeamsIfNotLoaded),this.removeEventListener("mouseover",this.loadTeamsIfNotLoaded),this.removeEventListener("blur",this.lostFocus),super.disconnectedCallback()}args(){return[]}selectChannelById(n){return yg(this,void 0,void 0,function*(){const o=Qi.b.globalProvider;if(o&&o.state===Bi.HJ.SignedIn){this.items||(yield this._task.run());for(const f of this._treeViewState)for(const m of f.channels)if(m.item.id===n)return f.isExpanded=!0,this.selectChannel(m),this.markSelectedChannelInDropdown(n),!0}return!1})}markSelectedChannelInDropdown(n){const o=this.renderRoot.querySelector(`[id='${n}']`);o&&(o.setAttribute("selected","true"),o.parentElement&&o.parentElement.setAttribute("expanded","true"))}renderSelected(){var n,o,f,m,A,F;if(!this._selectedItemState)return this.renderSearchIcon();let ae;if(this._selectedItemState.parent.channels){const We=null===(n=this.teamsPhotos[this._selectedItemState.parent.item.id])||void 0===n?void 0:n.photo;ae=Lt.qy`<img
        class="team-photo"
        alt="${this._selectedItemState.parent.item.displayName}"
        role="img"
        src=${We} />`}const Se=null===(m=null===(f=null===(o=this._selectedItemState)||void 0===o?void 0:o.parent)||void 0===f?void 0:f.item)||void 0===m?void 0:m.displayName.trim(),Me=null===(F=null===(A=this._selectedItemState)||void 0===A?void 0:A.item)||void 0===F?void 0:F.displayName.trim();return Lt.qy`
      <fluent-breadcrumb title=${this._selectedItemState.item.displayName}>
        <fluent-breadcrumb-item>
          <span slot="start">${ae}</span>
          <span class="team-parent-name">${Se}</span>
          <span slot="separator" class="arrow">${(0,Kn.r)(Kn.A.TeamSeparator,"#000000")}</span>
        </fluent-breadcrumb-item>
        <fluent-breadcrumb-item>${Me}</fluent-breadcrumb-item>
      </fluent-breadcrumb>`}clearState(){this._inputValue="",this._treeViewState=[],this._focusList=[],this._isDropdownVisible=!1}renderSearchIcon(){return Lt.qy`
      <div class="search-icon">
        ${(0,Kn.r)(Kn.A.Search,"#252424")}
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
      </fluent-button>`}renderChevrons(){return Lt.qy`${this.renderUpChevron()}${this.renderDownChevron()}`}renderDropdown(){return this._task.status!==Ph.e1.PENDING&&this._treeViewState?this._treeViewState?0===this._treeViewState.length&&this._inputValue.length>0?this.renderError():this.renderDropdownList(this._treeViewState):Lt.qy``:this.renderLoadingIndicator()}renderDropdownList(n){if(n&&n.length>0){let o=null;return Lt.qy`
        <fluent-tree-view
          class="tree-view"
          dir=${this.direction}
          aria-live="polite"
          aria-relevant="all"
          aria-atomic="true"
          aria-label=${this.strings.teamsChannels}
          aria-orientation="horizontal"
          @keydown=${this.onKeydownTreeView}>
          ${(0,Ma.u)(n,f=>f?.item,f=>{var m;return f.channels&&(o=Lt.qy`<img
                  class="team-photo"
                  alt="${this.strings.photoFor} ${f.item.displayName}"
                  src=${null===(m=this.teamsPhotos[f.item.id])||void 0===m?void 0:m.photo} />`),Lt.qy`
                <fluent-tree-item
                  ?expanded=${f?.isExpanded}
                  @click=${this.handleTeamTreeItemClick}>
                    <span slot="start">${o}</span>${f.item.displayName}
                    ${(0,Ma.u)(f?.channels,A=>A.item,A=>this.renderItem(A))}
                </fluent-tree-item>`})}
        </fluent-tree-view>`}return null}renderItem(n){var o;return Lt.qy`
      <fluent-tree-item
        id=${null===(o=n?.item)||void 0===o?void 0:o.id}
        @keydown=${f=>this.onUserKeyDown(f,n)}
        @click=${()=>this.handleItemClick(n)}>
          ${n?.item.displayName}
      </fluent-tree-item>`}loadState(){return yg(this,void 0,void 0,function*(){const n=Qi.b.globalProvider;let o;if(n&&n.state===Bi.HJ.SignedIn){const f=n.graph.forComponent(this);o=yield(d=>il(void 0,void 0,void 0,function*(){const c=sg,n=yield d.api("/me/joinedTeams").select(["displayName","id","isArchived"]).middlewareOptions((0,Cr.F)(c)).get();return n?.value}))(f),o=o.filter(A=>!A.isArchived);const m=o.map(A=>A.id);this.teamsPhotos=yield((d,c)=>il(void 0,void 0,void 0,function*(){let n,o={};if((0,Zd.HJ)()){n=Fo._.getCache(Zr.j.photos,Zr.j.photos.stores.teams);for(const f of c)try{const m=yield n.getValue(f);m&&(0,Zd.aC)()>Date.now()-m.timeCached&&(o[f]=m)}catch{}if(Object.keys(o).length)return o}o={};for(const f of c)try{const m=yield(0,Zd.e_)(d,`/teams/${f}`,n0);(0,Zd.HJ)()&&m&&(yield n.putValue(f,m)),o[f]=m}catch{}return o}))(f,m),this._items=yield((d,c)=>il(void 0,void 0,void 0,function*(){var n,o;const f=d.createBatch();for(const F of c)f.get(F.id,`teams/${F.id}/channels`,ag);const m=yield f.executeAll(),A=[];for(const F of c){const ae=m.get(F.id);null!==(o=null===(n=ae?.content)||void 0===n?void 0:n.value)&&void 0!==o&&o.length&&A.push({item:F,channels:ae.content.value.map(Se=>({item:Se}))})}return A}))(f,o)}this.filterList(),this.resetFocusState()})}clearSelectedItem(){this.removeSelectedChannel()}removeSelectedChannel(n){this.selectChannel(n);const o=this.renderRoot.querySelectorAll("fluent-tree-item");o&&o.forEach(f=>{f.removeAttribute("expanded"),f.removeAttribute("selected")})}handleItemClick(n){n.channels?n.isExpanded=!n.isExpanded:(this.selectChannel(n),this.lostFocus())}onUserKeyDown(n,o){switch(n.code){case"Enter":this.selectChannel(o),this.resetFocusState(),this.lostFocus(),n.preventDefault();break;case"Backspace":0===this._inputValue.length&&this._selectedItemState&&(this.selectChannel(null),this.resetFocusState(),n.preventDefault())}}filterList(){this.items&&(this._treeViewState=this.generateTreeViewState(this.items,this._inputValue),this.resetFocusState())}generateTreeViewState(n,o="",f=null){const m=[];if(o=o.toLowerCase(),n)for(const A of n){let F;if(0===o.length||A.item.displayName.toLowerCase().includes(o))F={item:A.item,parent:f},A.channels&&(F.channels=this.generateTreeViewState(A.channels,"",F),F.isExpanded=o.length>0);else if(A.channels){const ae={item:A.item,parent:f},Se=this.generateTreeViewState(A.channels,o,ae);Se.length>0&&(F=ae,F.channels=Se,F.isExpanded=!0)}F&&m.push(F)}return m}generateFocusList(n){if(!n||0===n.length)return[];let o=[];for(const f of n)o.push(f),f.channels&&f.isExpanded&&(o=[...o,...this.generateFocusList(f.channels)]);return o}resetFocusState(){this._focusList=this.generateFocusList(this._treeViewState),this.requestUpdate()}selectChannel(n){var o,f;n&&this._selectedItemState!==n?null===(o=this._input)||void 0===o||o.setAttribute("disabled","true"):null===(f=this._input)||void 0===f||f.removeAttribute("disabled"),this._selectedItemState=n,this.lostFocus(),this.fireCustomEvent("selectionChanged",this.selectedItem)}hideCloseIcon(){const n=this.renderRoot.querySelector(".close-icon");n&&(n.style.display="none")}toggleChevron(){const n=this.renderRoot.querySelector(".down-chevron"),o=this.renderRoot.querySelector(".up-chevron");this._isDropdownVisible?(n&&(n.style.display="none"),o&&(o.style.display=null)):(n&&(n.style.display=null,this.hideCloseIcon()),o&&(o.style.display="none")),this.hideCloseIcon()}}return gf([(0,Mt.wk)(),Tu("design:type",Object)],d.prototype,"_selectedItemState",void 0),gf([(0,Mt.wk)(),Tu("design:type",Boolean)],d.prototype,"_isDropdownVisible",void 0),d})();const f0=(()=>{class d extends wr.g{constructor(){super(...arguments),this.orientation="horizontal",this.radioChangeHandler=n=>{const o=n.target;o.checked&&(this.slottedRadioButtons.forEach(f=>{f!==o&&(f.checked=!1,this.isInsideFoundationToolbar||f.setAttribute("tabindex","-1"))}),this.selectedRadio=o,this.value=o.value,o.setAttribute("tabindex","0"),this.focusedRadio=o),n.stopPropagation()},this.moveToRadioByIndex=(n,o)=>{const f=n[o];this.isInsideToolbar||(f.setAttribute("tabindex","0"),f.readOnly?this.slottedRadioButtons.forEach(m=>{m!==f&&m.setAttribute("tabindex","-1")}):(f.checked=!0,this.selectedRadio=f)),this.focusedRadio=f,f.focus()},this.moveRightOffGroup=()=>{var n;null===(n=this.nextElementSibling)||void 0===n||n.focus()},this.moveLeftOffGroup=()=>{var n;null===(n=this.previousElementSibling)||void 0===n||n.focus()},this.focusOutHandler=n=>{const o=this.slottedRadioButtons,f=n.target,m=null!==f?o.indexOf(f):0,A=this.focusedRadio?o.indexOf(this.focusedRadio):-1;return(0===A&&m===A||A===o.length-1&&A===m)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),o.forEach(F=>{F!==this.selectedRadio&&F.setAttribute("tabindex","-1")}))):(this.focusedRadio=o[0],this.focusedRadio.setAttribute("tabindex","0"),o.forEach(F=>{F!==this.focusedRadio&&F.setAttribute("tabindex","-1")}))),!0},this.clickHandler=n=>{const o=n.target;o&&(o.checked||0===this.slottedRadioButtons.indexOf(o)?(o.setAttribute("tabindex","0"),this.selectedRadio=o):(o.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=o),n.preventDefault()},this.shouldMoveOffGroupToTheRight=(n,o,f)=>n===o.length&&this.isInsideToolbar&&f===Mn.bb,this.shouldMoveOffGroupToTheLeft=(n,o)=>(this.focusedRadio?n.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&o===Mn.kT,this.checkFocusedRadio=()=>{null!==this.focusedRadio&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=n=>{const o=this.slottedRadioButtons;let f=0;if(f=this.focusedRadio?o.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(f,o,n.key))this.moveRightOffGroup();else for(f===o.length&&(f=0);f<o.length&&o.length>1;){if(!o[f].disabled){this.moveToRadioByIndex(o,f);break}if(this.focusedRadio&&f===o.indexOf(this.focusedRadio))break;if(f+1>=o.length){if(this.isInsideToolbar)break;f=0}else f+=1}},this.moveLeft=n=>{const o=this.slottedRadioButtons;let f=0;if(f=this.focusedRadio?o.indexOf(this.focusedRadio)-1:0,f=f<0?o.length-1:f,this.shouldMoveOffGroupToTheLeft(o,n.key))this.moveLeftOffGroup();else for(;f>=0&&o.length>1;){if(!o[f].disabled){this.moveToRadioByIndex(o,f);break}if(this.focusedRadio&&f===o.indexOf(this.focusedRadio))break;f-1<0?f=o.length-1:f-=1}},this.keydownHandler=n=>{const o=n.key;if(o in Mn.Is&&this.isInsideFoundationToolbar)return!0;switch(o){case Mn.Mm:this.checkFocusedRadio();break;case Mn.bb:case Mn.HX:this.direction===ha.O.ltr?this.moveRight(n):this.moveLeft(n);break;case Mn.kT:case Mn.I5:this.direction===ha.O.ltr?this.moveLeft(n):this.moveRight(n);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach(n=>{n.readOnly=!!this.readOnly})}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach(n=>{n.disabled=!!this.disabled})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(n=>{n.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(n=>{n.value===this.value&&(n.checked=!0,this.selectedRadio=n)}),this.$emit("change")}slottedRadioButtonsChanged(n,o){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var n;return null!==(n=this.parentToolbar)&&void 0!==n&&n}get isInsideFoundationToolbar(){var n;return!(null===(n=this.parentToolbar)||void 0===n||!n.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=yd(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(n=>{n.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const n=this.slottedRadioButtons.filter(m=>m.hasAttribute("checked")),o=n?n.length:0;o>1&&(n[o-1].checked=!0);let f=!1;if(this.slottedRadioButtons.forEach(m=>{void 0!==this.name&&m.setAttribute("name",this.name),this.disabled&&(m.disabled=!0),this.readOnly&&(m.readOnly=!0),this.value&&this.value===m.value?(this.selectedRadio=m,this.focusedRadio=m,m.checked=!0,m.setAttribute("tabindex","0"),f=!0):(this.isInsideFoundationToolbar||m.setAttribute("tabindex","-1"),m.checked=!1),m.addEventListener("change",this.radioChangeHandler)}),void 0===this.value&&this.slottedRadioButtons.length>0){const m=this.slottedRadioButtons.filter(F=>F.hasAttribute("checked")),A=null!==m?m.length:0;if(A>0&&!f){const F=m[A-1];F.checked=!0,this.focusedRadio=F,F.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}return(0,Dt.Cg)([(0,ln.CF)({attribute:"readonly",mode:"boolean"})],d.prototype,"readOnly",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"disabled",mode:"boolean"})],d.prototype,"disabled",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"name",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"value",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"orientation",void 0),(0,Dt.Cg)([on.sH],d.prototype,"childItems",void 0),(0,Dt.Cg)([on.sH],d.prototype,"slottedRadioButtons",void 0),d})().compose({baseName:"radio-group",template:(d,c)=>gi.q`
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
                ${(0,Es.e)({property:"slottedRadioButtons",filter:(0,sc.Y)("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(d,c)=>bi.A`
  ${(0,qo.V)("flex")} :host {
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
`});var fa=function(d,c,n,o){return new(n||(n=Promise))(function(m,A){function F(Me){try{Se(o.next(Me))}catch(We){A(We)}}function ae(Me){try{Se(o.throw(Me))}catch(We){A(We)}}function Se(Me){Me.done?m(Me.value):function f(m){return m instanceof n?m:new n(function(A){A(m)})}(Me.value).then(F,ae)}Se((o=o.apply(d,c||[])).next())})};const ac=["Tasks.ReadWrite"],Su=["Tasks.Read","Tasks.ReadWrite"],mf=(d,c)=>fa(void 0,void 0,void 0,function*(){const n=yield d.api(`/me/todo/lists/${c}/tasks`).header("Cache-Control","no-store").middlewareOptions((0,Cr.F)(Su)).get();return n?.value}),Cg=(d,c)=>fa(void 0,void 0,void 0,function*(){return yield d.api(`/me/todo/lists/${c}`).header("Cache-Control","no-store").middlewareOptions((0,Cr.F)(Su)).get()}),Eg=(d,c,n,o)=>fa(void 0,void 0,void 0,function*(){return yield d.api(`/me/todo/lists/${c}/tasks/${n}`).header("Cache-Control","no-store").middlewareOptions((0,Cr.F)(ac)).patch(o)}),Tg=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{display:flex;flex-direction:column;color:var(--color,var(--neutral-foreground-rest))}:host input[type=date]::-webkit-calendar-picker-indicator,:host input[type=date]::-webkit-inner-spin-button{display:none;appearance:none}:host .task-icon{font-family:FabricMDL2Icons;user-select:none}:host .task-icon.divider{vertical-align:initial;margin:0 12px;font-size:16px}:host .header{margin:var(--tasks-header-margin,0 0 12px 0);padding:var(--tasks-title-padding,0);display:flex;align-items:center;justify-content:space-between}:host .header .header__loading{max-width:90px;width:100%;height:20px;background:#f2f2f2}:host .header select{font-size:var(--tasks-plan-title-font-size, 1.1em);padding:var(--tasks-plan-title-padding,5px);border:none;appearance:none;cursor:pointer}:host .header select::-ms-expand{display:none}:host .header .plan-title{font-size:var(--tasks-plan-title-font-size, 1.1em);padding:var(--tasks-plan-title-padding,5px)}:host .header .add-bar{display:flex}:host .header .add-bar .add-bar-item{flex:1 1 auto}:host .header .new-task-due{display:flex}:host .header .new-task-due input{flex:1 1 auto;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .header .title-cont{flex:1 1 auto;display:flex;align-items:center;height:var(--tasks-new-button-height,34px)}:host .header .new-task-button{flex:0 0 auto;display:flex;justify-content:center;align-items:center;width:var(--tasks-new-button-width,auto);height:var(--tasks-new-button-height,32px);border-radius:2px;padding:0 20px;background:var(--tasks-new-button-background,#0078d4);border:var(--tasks-new-button-border,solid 1px transparent);color:var(--tasks-new-button-color,#fff);user-select:none;cursor:pointer}:host .header .new-task-button span{font-size:14px;font-weight:600;letter-spacing:.1px;line-height:14px}:host .header .new-task-button .task-icon{margin-right:8px}:host .header .new-task-button.hidden{visibility:hidden}:host .header .new-task-button:hover{background:var(--tasks-new-button-hover-background,#106ebe)}:host .header .new-task-button:active{background:var(--tasks-new-button-active-background,#005a9e)}:host .task{position:relative;margin:var(--task-margin,0 0 0 0);padding:var(--task-padding,0 0 0 0);background-color:var(--task-background-color,var(--neutral-layer-floating));border:var(--task-border,var(--neutral-stroke-input-active));border-radius:8px}:host .task .task-content{display:flex}:host .task .task-content .divider{position:absolute;height:2px;left:0;right:0;bottom:0;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .task .task-content .task-details-container{flex:1;display:grid;grid-template-columns:auto 1fr;-ms-grid-columns:auto 1fr;grid-template-rows:auto auto auto auto;-ms-grid-rows:auto auto auto auto;justify-content:space-between;align-items:flex-start;color:var(--task-detail-color,var(--neutral-foreground-hint));font-size:12px;font-weight:600;white-space:normal;margin-bottom:12px}:host .task .task-content .task-details-container .task-detail{width:100%;height:100%;margin:4px 24px 6px 0;display:flex;justify-content:flex-start;align-items:center}:host .task .task-content .task-details-container .task-title{color:var(--task-color,var(--neutral-foreground-rest));font-size:14px;font-weight:600;grid-row:1;grid-column:1/3;grid-column:1;-ms-grid-column-span:2;margin:22px 0 4px}:host .task .task-content .task-details-container .task-group{min-height:24px;grid-row:2;grid-column:1}:host .task .task-content .task-details-container .task-bucket{min-height:24px;grid-row:2;grid-column:2}:host .task .task-content .task-details-container .task-due{justify-content:flex-end;align-items:flex-start;grid-row:4;grid-column:1/3;grid-column:1;-ms-grid-column-span:2}:host .task .task-content .task-details-container.tablet{grid-template-columns:1fr 0.5fr 1fr 0.5fr;-ms-grid-columns:1fr 0.5fr 1fr 0.5fr;grid-template-rows:auto auto;-ms-grid-rows:auto auto}:host .task .task-content .task-details-container.tablet.no-plan{grid-template-columns:0 1fr 1fr 1fr;-ms-grid-columns:0 1fr 1fr 1fr}:host .task .task-content .task-details-container.tablet .task-detail{margin:4px 24px 6px 0}:host .task .task-content .task-details-container.tablet .task-title{grid-row:1;grid-column:1/5;grid-column:1;-ms-grid-column-span:4}:host .task .task-content .task-details-container.tablet .task-group{grid-row:2;grid-column:1}:host .task .task-content .task-details-container.tablet .task-bucket{grid-row:2;grid-column:2}:host .task .task-content .task-details-container.tablet .task-assignee{grid-row:2;grid-column:3}:host .task .task-content .task-details-container.tablet .task-due{justify-content:flex-start;align-items:center;grid-row:2;grid-column:4}:host .task .task-content .task-details-container.desktop{grid-template-columns:2fr 1fr 0.5fr 1fr 0.5fr;-ms-grid-columns:2fr 1fr 0.5fr 1fr 0.5fr;grid-template-rows:auto;-ms-grid-rows:auto;margin:0}:host .task .task-content .task-details-container.desktop.no-plan{grid-template-columns:2fr 0 1fr 1fr 1fr;-ms-grid-columns:2fr 0 1fr 1fr 1fr}:host .task .task-content .task-details-container.desktop .task-detail{margin:0 24px 0 0}:host .task .task-content .task-details-container.desktop .task-title{padding:0;grid-row:1;grid-column:1}:host .task .task-content .task-details-container.desktop .task-group{min-height:61px;grid-row:1;grid-column:2}:host .task .task-content .task-details-container.desktop .task-bucket{grid-row:1;grid-column:3}:host .task .task-content .task-details-container.desktop .task-assignee{grid-row:1;grid-column:4}:host .task .task-content .task-details-container.desktop .task-due{justify-content:flex-start;align-items:center;grid-row:1;grid-column:5}:host .task .task-content .task-details-container svg{vertical-align:middle;margin-right:4px}:host .task .task-content .task-details-container svg path{fill:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task .task-content .task-details-container select,:host .task .task-content .task-details-container span{vertical-align:middle;color:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task .task-content .task-details-container .task-icon{color:#797775;margin-right:8px}:host .task .task-content .task-details-container .people{color:var(--task-detail-color,var(--neutral-foreground-hint));font-size:16px}:host .task .task-content .task-details-container .person{display:inline-block}:host .task .task-content .task-details-container .picker{background-color:var(--task-background-color,var(--neutral-layer-floating));background-clip:padding-box;width:var(--mgt-flyout-set-width,350px);color:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task .task-content .task-details-container .picker .people-picker{--separator-margin:0px 10px 0px 10px}:host .task .task-content .task-details-container input,:host .task .task-content .task-details-container select{color:var(--task-detail-color,var(--neutral-foreground-hint));font-size:.9em;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .task .task-check-container{font-family:FabricMDL2Icons;border-radius:50%;color:#fff;cursor:pointer;display:flex;align-items:var(--task-icon-alignment,flex-start);margin:21px 10px 20px 20px;user-select:none}:host .task .task-check-container.complete .task-check{background-color:var(--task-icon-background-completed,#00ad56);border:var(--task-icon-border-completed,solid 1px #fff);color:var(--task-icon-color-completed,#fff)}:host .task .task-check-container.complete .task-content .task-details-container .task-title{text-decoration:line-through;color:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task .task-check-container .task-check{font-family:FabricMDL2Icons;font-size:12px;width:18px;height:18px;border-radius:var(--task-icon-border-radius,50%);border:var(--task-icon-border,solid 1px #797775);color:var(--task-color,var(--neutral-foreground-rest));display:flex;justify-content:center;align-items:center;background-color:var(--task-icon-background,transparent);user-select:none}:host .task .task-check-container .task-check.loading .task-check-content{animation:rotate-icon 2s infinite linear}:host .task .task-options{cursor:pointer;user-select:none;margin:16px 8px 0 0}:host .task.read-only .task-check-container{cursor:default}:host .task.complete{background:var(--task-complete-background,var(--neutral-layer-1));border:var(--task-complete-border,2px dotted inherit)}:host .task.complete .task-content .task-details-container .task-title{text-decoration:line-through;color:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task.new-task{margin:var(--task-new-margin,var(--task-margin,0 0 24px 0));display:flex;flex-direction:row}:host .task.new-task .self-assign{display:none}:host .task.new-task .assign-to{border:0;background:0 0}:host .task.new-task .fake-check-box{width:15px;height:15px;cursor:pointer;margin:0 5px}:host .task.new-task .fake-check-box::after{font-family:FabricMDL2Icons;content:"uE739"}:host .task.new-task .fake-check-box~:checked{font-family:FabricMDL2Icons;content:"uE73A"}:host .task.new-task .task-content{flex:1 1 auto;align-content:center;vertical-align:middle;margin:0 0 0 12px}:host .task.new-task .task-content .task-details-container{display:flex;flex-direction:column;align-items:stretch;margin:0}:host .task.new-task .task-content .task-details-container .task-title{display:flex;height:32px;padding:2px}:host .task.new-task .task-content .task-details-container .task-title input{flex:1;margin:var(--task-new-input-margin,0 24px 0 16px);padding:var(--task-new-input-padding,6px);font-size:var(--task-new-input-font-size, 14px);font-weight:600;border:var(--task-new-border,none);border-bottom:1px solid #e1dfdd;outline:0;border-radius:0;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .task.new-task .task-content .task-details-container .task-title input:hover{border-bottom:1px solid #106ebe}:host .task.new-task .task-content .task-details-container .task-title input:active{border-bottom:1px solid #005a9e}:host .task.new-task .task-content .task-details-container .task-title input:focus{border-bottom:1px solid #0078d4}:host .task.new-task .task-content .task-details-container .task-details{display:flex;justify-content:stretch;align-items:center;flex-wrap:wrap;margin:14px 0 14px 4px}:host .task.new-task .task-content .task-details-container .task-details .new-task-group{margin:8px 16px}:host .task.new-task .task-content .task-details-container .task-details .new-task-bucket{margin:8px 16px}:host .task.new-task .task-content .task-details-container .task-details .new-task-due{margin:8px 16px}:host .task.new-task .task-content .task-details-container .task-details .new-task-assignee{margin:8px 16px;min-width:80px}:host .task.new-task .task-content .task-details-container .task-details .task-people label{display:flex;align-content:center;align-items:center}:host .task.new-task .task-content .task-details-container .task-details input,:host .task.new-task .task-content .task-details-container .task-details select{font-size:12px;font-weight:600;border:var(--task-new-select-border,none);border-bottom:1px solid #e1dfdd}:host .task.new-task .task-content .task-details-container .task-details input:hover,:host .task.new-task .task-content .task-details-container .task-details select:hover{border-bottom:1px solid #106ebe}:host .task.new-task .task-content .task-details-container .task-details input:active,:host .task.new-task .task-content .task-details-container .task-details select:active{border-bottom:1px solid #005a9e}:host .task.new-task .task-content .task-details-container .task-details input:focus,:host .task.new-task .task-content .task-details-container .task-details select:focus{border-bottom:1px solid #0078d4}:host .task.new-task .task-add-button-container{margin-right:28px}:host .task.new-task .task-add-button-container .task-add,:host .task.new-task .task-add-button-container .task-cancel{justify-content:center;align-items:center;cursor:pointer;flex:0 0 auto;display:flex;width:var(--tasks-new-button-width,100px);height:var(--tasks-new-button-height,32px);border-radius:4px;border:var(--tasks-new-button-border,solid 1px #e5e5e5);font-size:14px;line-height:20px}:host .task.new-task .task-add-button-container .task-add{color:#fff;background:var(--task-new-add-button-background,#0078d4);margin:22px 0 12px auto}:host .task.new-task .task-add-button-container .task-cancel{color:var(--task-new-cancel-button-color,var(--neutral-foreground-rest))}:host .task.new-task .task-add-button-container.disabled .task-add{color:var(--task-new-cancel-button-color,var(--neutral-foreground-rest));background:var(--task-new-add-button-disabled-background,#fff);cursor:default}@keyframes rotate-icon{from{transform:rotate(0)}to{transform:rotate(360deg)}}[dir=rtl] .arrow-options{--arrow-options-left:auto}[dir=rtl] .dot-options{--dot-options-translatex:translateX(60px)}[dir=rtl] .task-details{margin-right:14px!important}[dir=rtl] .task-icon{margin-left:8px}[dir=rtl] .task-detail svg{margin-left:4px}@media (forced-colors:active) and (prefers-color-scheme:dark){:host svg{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}:host svg path{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}@media (forced-colors:active) and (prefers-color-scheme:light){:host svg{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}:host svg path{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}:host{border-radius:8px;width:100%}:host .task,:host.loading-task{margin-block:1px;box-shadow:var(--task-box-shadow,var(--elevation-shadow-card-active));width:100%;display:flex;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .task.new-task,:host.loading-task.new-task{margin:14px 0 1px;box-shadow:var(--task-box-shadow,var(--elevation-shadow-card-active))}:host .task.complete,:host.loading-task.complete{border:1px solid var(--task-border-completed,var(--neutral-stroke-input-active));background:var(--task-complete-background,var(--neutral-layer-1))}:host .task.complete .task-details .task-due,:host .task.complete .task-details .title,:host.loading-task.complete .task-details .task-due,:host.loading-task.complete .task-details .title{text-decoration:line-through}:host .task.read-only,:host.loading-task.read-only{opacity:1}:host .task:hover,:host.loading-task:hover{background-color:var(--task-background-color-hover,var(--neutral-fill-hover));border-radius:8px}:host .task .task-details,:host.loading-task .task-details{box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:2px;line-height:24px;border-radius:4px;width:100%}:host .task .task-details .task>div,:host.loading-task .task-details .task>div{display:flex;align-items:center;width:200px}:host .task .task-details .task-delete,:host.loading-task .task-details .task-delete{display:flex}:host .task .task-details .container,:host.loading-task .task-details .container{display:flex;width:100%}:host .task .task-details .task-due,:host.loading-task .task-details .task-due{min-width:120px;margin-inline-end:12px;height:32px;text-decoration:inherit;display:flex}:host fluent-text-field::part(end),:host fluent-text-field::part(start){margin-inline:unset}:host fluent-text-field::part(control){padding:0;cursor:pointer}:host fluent-text-field::part(root){background:0 0}:host fluent-text-field.new-task{width:100%;height:34px}:host fluent-text-field.new-task div.start .add-icon{display:flex;margin-inline:10px}:host fluent-text-field.new-task div:nth-child(2){display:flex;align-items:center}:host fluent-text-field.new-task div:nth-child(2) .calendar{display:flex;align-items:center}:host fluent-text-field.new-task div:nth-child(2) .calendar svg{fill:var(--task-color,var(--neutral-foreground-rest))}:host fluent-text-field.new-task div:nth-child(2) .calendar .date{margin-inline-start:10px;color:var(--task-color,var(--neutral-foreground-rest));width:auto;cursor:pointer}:host fluent-text-field.new-task div:nth-child(2) .calendar input{flex:1;border:none;border-bottom:1px solid var(--task-color,var(--neutral-foreground-rest));outline:0;border-radius:0}:host fluent-text-field.new-task div:nth-child(2) .calendar input:hover{border-bottom:1px solid var(--task-date-input-hover-color,var(--neutral-layer-1))}:host fluent-text-field.new-task div:nth-child(2) .calendar input:active,:host fluent-text-field.new-task div:nth-child(2) .calendar input:focus{border-bottom:1px solid var(--task-date-input-active-color,var(--accent-fill-rest))}:host fluent-text-field.title{flex-grow:1;display:inline}:host fluent-text-field.date{color:var(--task-detail-color,var(--neutral-foreground-hint))}:host fluent-text-field::after{border-bottom:none}:host fluent-text-field.dark::part(control){color-scheme:dark}:host fluent-button.task-add-icon.neutral,:host fluent-button.task-cancel-icon.neutral,:host fluent-button.task-delete.neutral{fill:var(--task-color,var(--neutral-foreground-rest))}:host fluent-button.task-add-icon.neutral::part(control),:host fluent-button.task-cancel-icon.neutral::part(control),:host fluent-button.task-delete.neutral::part(control){border:none;background:inherit}:host fluent-button.task-add-icon.neutral::part(control) svg,:host fluent-button.task-cancel-icon.neutral::part(control) svg,:host fluent-button.task-delete.neutral::part(control) svg{fill:var(--task-color,var(--neutral-foreground-rest))}:host fluent-checkbox.complete div>svg .filled{display:block}:host fluent-checkbox.complete div>svg .regular{display:none}:host fluent-checkbox.complete div>svg path{fill:var(--task-radio-background-color,var(--accent-fill-rest))}:host fluent-checkbox div>svg .filled{display:none}:host fluent-checkbox div>svg .regular{display:block}:host fluent-checkbox div>svg path{fill:var(--task-background-color,var(--neutral-layer-floating))}:host fluent-checkbox::part(control){margin-inline-start:10px;background:0 0;border-radius:50%}:host fluent-checkbox::part(label){margin-inline-end:unset;width:100%}
`],g0={cancelNewTaskSubtitle:"Cancel",newTaskPlaceholder:"Add a task",newTaskLabel:"New Task Input",editTaskLabel:"Edit Task Input",addTaskButtonSubtitle:"Add",deleteTaskOption:"Delete",editTaskOption:"Edit",dueDate:"Due date",newTaskDateInputLabel:"New Task Date Input",changeTaskDateInputLabel:"Change Task Date Input",newTaskNameInputLabel:"New Task Name Input",cancelAddingTask:"Cancel adding a new task"},m0={comboboxPlaceholder:"Select an item"};class vf extends Dl{}class v0 extends((0,iu.rf)(vf)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let yf=(()=>{class d extends v0{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=(0,Ac.NF)("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return"inline"===this.autocomplete||this.isAutocompleteBoth}get isAutocompleteList(){return"list"===this.autocomplete||this.isAutocompleteBoth}get isAutocompleteBoth(){return"both"===this.autocomplete}openChanged(){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),void yo.dv.queueUpdate(()=>this.focus());this.ariaControls="",this.ariaExpanded="false"}get options(){return on.cP.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(n){this._options=n,on.cP.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(n,o){this.positionAttribute=o,this.setPositioning()}get value(){return on.cP.track(this,"value"),this._value}set value(n){var o,f,m;const A=`${this._value}`;if(this.$fastController.isConnected&&this.options){const F=this.options.findIndex(Me=>Me.text.toLowerCase()===n.toLowerCase()),ae=null===(o=this.options[this.selectedIndex])||void 0===o?void 0:o.text,Se=null===(f=this.options[F])||void 0===f?void 0:f.text;this.selectedIndex=ae!==Se?F:this.selectedIndex,n=(null===(m=this.firstSelectedOption)||void 0===m?void 0:m.text)||n}A!==n&&(this._value=n,super.valueChanged(A,n),on.cP.notify(this,"value"))}clickHandler(n){if(!this.disabled){if(this.open){const o=n.target.closest("option,[role=option]");if(!o||o.disabled)return;this.selectedOptions=[o],this.control.value=o.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(n,o){super.disabledChanged&&super.disabledChanged(n,o),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||"none"===this.autocomplete)&&(this.filter="");const n=this.filter.toLowerCase();this.filteredOptions=this._options.filter(o=>o.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!n&&(this.filteredOptions=this._options),this._options.forEach(o=>{o.hidden=!this.filteredOptions.includes(o)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var n;null===(n=this.firstSelectedOption)||void 0===n||n.scrollIntoView({block:"nearest"})}))}focusoutHandler(n){if(this.syncValue(),!this.open)return!0;const o=n.relatedTarget;this.isSameNode(o)?this.focus():(!this.options||!this.options.includes(o))&&(this.open=!1)}inputHandler(n){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(o=>o.text).indexOf(this.control.value)),n.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(n){if(n.ctrlKey||n.shiftKey)return!0;switch(n.key){case"Enter":this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break;case"Escape":if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break;case"Tab":if(this.setInputToSelection(),!this.open)return!0;n.preventDefault(),this.open=!1;break;case"ArrowUp":case"ArrowDown":if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(n),this.isAutocompleteInline&&this.setInlineSelection();break;default:return!0}}keyupHandler(n){switch(n.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions()}}selectedIndexChanged(n,o){if(this.$fastController.isConnected){if((o=(0,ud.AB)(-1,this.options.length-1,o))!==this.selectedIndex)return void(this.selectedIndex=o);super.selectedIndexChanged(n,o)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const n=this.options.findIndex(o=>null!==o.getAttribute("selected")||o.selected);this.selectedIndex=n,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var n;const o=this.selectedIndex>-1?null===(n=this.firstSelectedOption)||void 0===n?void 0:n.text:this.control.value;this.updateValue(this.value!==o)}setPositioning(){const n=this.getBoundingClientRect(),f=window.innerHeight-n.bottom;this.position=this.forcedPosition?this.positionAttribute:n.top>f?"above":"below",this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight="above"===this.position?~~n.top:~~f}selectedOptionsChanged(n,o){this.$fastController.isConnected&&this._options.forEach(f=>{f.selected=o.includes(f)})}slottedOptionsChanged(n,o){super.slottedOptionsChanged(n,o),this.updateValue()}updateValue(n){var o;this.$fastController.isConnected&&(this.value=(null===(o=this.firstSelectedOption)||void 0===o?void 0:o.text)||this.control.value,this.control.value=this.value),n&&this.$emit("change")}clearSelectionRange(){const n=this.control.value.length;this.control.setSelectionRange(n,n)}}return(0,Dt.Cg)([(0,ln.CF)({attribute:"autocomplete",mode:"fromView"})],d.prototype,"autocomplete",void 0),(0,Dt.Cg)([on.sH],d.prototype,"maxHeight",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"open",mode:"boolean"})],d.prototype,"open",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"placeholder",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"position"})],d.prototype,"positionAttribute",void 0),(0,Dt.Cg)([on.sH],d.prototype,"position",void 0),d})(),Sg=(()=>{class d{}return(0,Dt.Cg)([on.sH],d.prototype,"ariaAutoComplete",void 0),(0,Dt.Cg)([on.sH],d.prototype,"ariaControls",void 0),d})();(0,Yr.X)(Sg,Dc),(0,Yr.X)(yf,lr.qw,Sg);const xs=".control",Ad=":not([disabled]):not([open])",bf=(()=>{class d extends yf{appearanceChanged(n,o){n!==o&&(this.classList.add(o),this.classList.remove(n))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&wt.pfK.setValueFor(this.listbox,wt.Tkp)}}return(0,vd.Cg)([(0,ln.CF)({mode:"fromView"})],d.prototype,"appearance",void 0),d})().compose({baseName:"combobox",baseClass:yf,shadowOptions:{delegatesFocus:!0},template:(d,c)=>gi.q`
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
            ${(0,lr.LT)(d,c)}
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
                    ${(0,ls.K)("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${c.indicator||""}
                    </slot>
                </div>
            </slot>
            ${(0,lr.aO)(d,c)}
        </div>
        <div
            class="listbox"
            id="${n=>n.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${n=>n.disabled}"
            ?hidden="${n=>!n.open}"
            ${(0,ls.K)("listbox")}
        >
            <slot
                ${(0,Es.e)({filter:Dl.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(d,c)=>bi.A`
    ${Op()}

    ${(0,zs.y$)(d,c,xs)}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${nc.Z};
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
      ${Is.Ah}
      height: calc(100% - ${wt.XAH} * 1px));
      margin: auto 0;
      width: 100%;
      outline: none;
    }
  `.withBehaviors((0,ic.f)("outline",(0,zs.Tv)(d,c,xs,Ad)),(0,ic.f)("filled",(0,zs.dM)(d,c,xs,Ad)),(0,As.mr)((0,zs.lb)(d,c,xs,Ad))),indicator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  '}),Iu=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{--max-height:var(--picker-max-height, 380px);font-family:var(--default-font-family)}:host .picker{background-color:var(--picker-background-color,transparent)}:host fluent-combobox::part(selected-value)::placeholder{color:var(--picker-text-color,var(--input-filled-placeholder-rest))}:host fluent-combobox::part(selected-value):hover::placeholder{color:var(--picker-text-color-hover,var(--secondary-text-hover-color))}[dir=rtl] .picker{direction:rtl}
`];var ks=function(d,c,n,o){var A,f=arguments.length,m=f<3?c:null===o?o=Object.getOwnPropertyDescriptor(c,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,c,n,o);else for(var F=d.length-1;F>=0;F--)(A=d[F])&&(m=(f<3?A(m):f>3?A(c,n,m):A(c,n))||m);return f>3&&m&&Object.defineProperty(c,n,m),m},$a=function(d,c){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,c)};const Cf=()=>{(0,Ko.E)(bf,jh),kh(),(0,zo.N)("picker",Ag)};let Ag=(()=>{class d extends Vs.N{get strings(){return m0}static get styles(){return Iu}constructor(){super(),this.version="v1.0",this.maxPages=3,this.scopes=[],this.cacheEnabled=!1,this.cacheInvalidationPeriod=0,this.renderLoading=()=>this.response?this.renderContent():this.renderTemplate("loading",null),this.renderContent=()=>{var n;const o=this.error?this.error:null;return o&&this.hasTemplate("error")?this.renderTemplate("error",{error:o},"error"):this.hasTemplate("no-data")?this.renderTemplate("no-data",null):(null===(n=this.response)||void 0===n?void 0:n.length)>0?this.renderPicker():this.renderGet()},this.handleComboboxKeydown=n=>{let o,f;const m=n.key,F=n.target.querySelector(".selected");F&&(o=F.getAttribute("value")),"Enter"===m&&o&&(f=this.response.filter(ae=>ae.id===o).pop(),this.fireCustomEvent("selectionChanged",f,!0,!1,!0))},this.placeholder=this.strings.comboboxPlaceholder,this.entityType=null,this.keyName=null}refresh(n=!1){n&&this.clearState(),this._task.run()}clearState(){this.response=null,this.error=null}renderPicker(){return Ji.Q`
      <fluent-combobox
        @keydown=${this.handleComboboxKeydown}
        current-value=${(0,Yl.J)(this.selectedValue)}
        part="picker"
        class="picker"
        id="combobox"
        autocomplete="list"
        placeholder=${this.placeholder}>
          ${this.response.map(n=>Lt.qy`
            <fluent-option value=${n.id} @click=${o=>this.handleClick(o,n)}> ${this.getNestedPropertyValue(n,this.keyName)} </fluent-option>`)}
      </fluent-combobox>
     `}getNestedPropertyValue(n,o){const f=o.split(".");let m=n;for(const A of f)if(m=m[A],void 0===m)return console.warn(`mgt-picker: Key '${A}' is undefined.`),"";return m}renderGet(){return Ji.Q`
      <mgt-get
        class="mgt-get"
        resource=${this.resource}
        version=${this.version}
        .scopes=${this.scopes}
        max-pages=${this.maxPages}
        ?cache-enabled=${this.cacheEnabled}
        ?cache-invalidation-period=${this.cacheInvalidationPeriod}>
      </mgt-get>`}firstUpdated(n){super.firstUpdated(n);const o=this.renderRoot;o?o.addEventListener("dataChange",f=>this.handleDataChange(f)):console.error("\u{1f992}: mgt-picker component requires a renderRoot. Something has gone horribly wrong.")}handleDataChange(n){const f=n.detail.error?n.detail.error:null;this.response=n.detail.response.value,this.error=f}handleClick(n,o){this.fireCustomEvent("selectionChanged",o,!0,!1,!0)}}return ks([(0,Mt.MZ)({attribute:"resource",type:String}),$a("design:type",String)],d.prototype,"resource",void 0),ks([(0,Mt.MZ)({attribute:"version",type:String}),$a("design:type",Object)],d.prototype,"version",void 0),ks([(0,Mt.MZ)({attribute:"max-pages",type:Number}),$a("design:type",Object)],d.prototype,"maxPages",void 0),ks([(0,Mt.MZ)({attribute:"placeholder",type:String}),$a("design:type",String)],d.prototype,"placeholder",void 0),ks([(0,Mt.MZ)({attribute:"key-name",type:String}),$a("design:type",String)],d.prototype,"keyName",void 0),ks([(0,Mt.MZ)({attribute:"entity-type",type:String}),$a("design:type",String)],d.prototype,"entityType",void 0),ks([(0,Mt.MZ)({attribute:"scopes",converter:c=>c?c.toLowerCase().split(","):null}),$a("design:type",Array)],d.prototype,"scopes",void 0),ks([(0,Mt.MZ)({attribute:"cache-enabled",type:Boolean}),$a("design:type",Object)],d.prototype,"cacheEnabled",void 0),ks([(0,Mt.MZ)({attribute:"cache-invalidation-period",type:Number}),$a("design:type",Object)],d.prototype,"cacheInvalidationPeriod",void 0),ks([(0,Mt.MZ)({attribute:"selected-value",type:String}),$a("design:type",String)],d.prototype,"selectedValue",void 0),ks([(0,Mt.wk)(),$a("design:type",Array)],d.prototype,"response",void 0),d})();const Ig={cancelNewTaskSubtitle:"Cancel",newTaskPlaceholder:"Add a task",addTaskButtonSubtitle:"Add",removeTaskSubtitle:"Delete Task"};class Du{constructor(c){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,c)for(const n in c){const o=c[n];"date"===n?this.date=this.getDateObject(o):this[n]=o}}getDateObject(c){if("string"==typeof c){const n=c.split(/[/-]/);return n.length<3?new Date:new Date(parseInt(n[2],10),parseInt(n[0],10)-1,parseInt(n[1],10))}if("day"in c&&"month"in c&&"year"in c){const{day:n,month:o,year:f}=c;return new Date(f,o-1,n)}return c}getDate(c=this.date,n={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},o=this.locale){const f=this.getDateObject(c);if(!f.getTime())return"";const m=Object.assign({timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},n);return new Intl.DateTimeFormat(o,m).format(f)}getDay(c=this.date.getDate(),n=this.dayFormat,o=this.locale){return this.getDate({month:1,day:c,year:2020},{day:n},o)}getMonth(c=this.date.getMonth()+1,n=this.monthFormat,o=this.locale){return this.getDate({month:c,day:2,year:2020},{month:n},o)}getYear(c=this.date.getFullYear(),n=this.yearFormat,o=this.locale){return this.getDate({month:2,day:2,year:c},{year:n},o)}getWeekday(c=0,n=this.weekdayFormat,o=this.locale){return this.getDate(`1-${c+1}-2017`,{weekday:n},o)}getWeekdays(c=this.weekdayFormat,n=this.locale){return Array(7).fill(null).map((o,f)=>this.getWeekday(f,c,n))}}let wf=(()=>{class d extends wr.g{constructor(){super(...arguments),this.dateFormatter=new Du,this.readonly=!1,this.locale="en-US",this.month=(new Date).getMonth()+1,this.year=(new Date).getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(n=this.month,o=this.year){const f=Se=>new Date(Se.getFullYear(),Se.getMonth(),1).getDay(),m=Se=>{const Me=new Date(Se.getFullYear(),Se.getMonth()+1,1);return new Date(Me.getTime()-this.oneDayInMs).getDate()},A=new Date(o,n-1),F=new Date(o,n),ae=new Date(o,n-2);return{length:m(A),month:n,start:f(A),year:o,previous:{length:m(ae),month:ae.getMonth()+1,start:f(ae),year:ae.getFullYear()},next:{length:m(F),month:F.getMonth()+1,start:f(F),year:F.getFullYear()}}}getDays(n=this.getMonthInfo(),o=this.minWeeks){o=o>10?10:o;const{start:f,length:m,previous:A,next:F}=n,ae=[];let Se=1-f;for(;Se<m+1||ae.length<o||ae[ae.length-1].length%7!=0;){const{month:Me,year:We}=Se<1?A:Se>m?F:n,Vt=Se<1?A.length+Se:Se>m?Se-m:Se,Yt=`${Me}-${Vt}-${We}`,ai={day:Vt,month:Me,year:We,disabled:this.dateInString(Yt,this.disabledDates),selected:this.dateInString(Yt,this.selectedDates)},Ni=ae[ae.length-1];0===ae.length||Ni.length%7==0?ae.push([ai]):Ni.push(ai),Se++}return ae}dateInString(n,o){const f=o.split(",").map(m=>m.trim());return n="string"==typeof n?n:`${n.getMonth()+1}-${n.getDate()}-${n.getFullYear()}`,f.some(m=>m===n)}getDayClassNames(n,o){const{day:f,month:m,year:A,disabled:F,selected:ae}=n;return["day",o===`${m}-${f}-${A}`&&"today",this.month!==m&&"inactive",F&&"disabled",ae&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const n=this.dateFormatter.getWeekdays().map(o=>({text:o}));if("long"!==this.weekdayFormat){const o=this.dateFormatter.getWeekdays("long");n.forEach((f,m)=>{f.abbr=o[m]})}return n}handleDateSelect(n,o){this.$emit("dateselected",o)}handleKeydown(n,o){return n.key===Mn.Mm&&this.handleDateSelect(n,o),!0}}return(0,Dt.Cg)([(0,ln.CF)({mode:"boolean"})],d.prototype,"readonly",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"locale",void 0),(0,Dt.Cg)([(0,ln.CF)({converter:ln.R$})],d.prototype,"month",void 0),(0,Dt.Cg)([(0,ln.CF)({converter:ln.R$})],d.prototype,"year",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"day-format",mode:"fromView"})],d.prototype,"dayFormat",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"weekday-format",mode:"fromView"})],d.prototype,"weekdayFormat",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"month-format",mode:"fromView"})],d.prototype,"monthFormat",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"year-format",mode:"fromView"})],d.prototype,"yearFormat",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"min-weeks",converter:ln.R$})],d.prototype,"minWeeks",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"disabled-dates"})],d.prototype,"disabledDates",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"selected-dates"})],d.prototype,"selectedDates",void 0),d})();function ao(d,c,n){return{index:d,removed:c,addedCount:n}}const Dg=0,xg=1,Id=2,_f=3;function Ef(d,c,n,o){return c<n||o<d?-1:c===n||o===d?0:d<n?c<o?c-n:o-n:o<c?o-d:c-d}function Kc(d,c,n,o,f,m){let A=0,F=0;const ae=Math.min(n-c,m-f);if(0===c&&0===f&&(A=function Wc(d,c,n){for(let o=0;o<n;++o)if(d[o]!==c[o])return o;return n}(d,o,ae)),n===d.length&&m===o.length&&(F=function xd(d,c,n){let o=d.length,f=c.length,m=0;for(;m<n&&d[--o]===c[--f];)m++;return m}(d,o,ae-A)),f+=A,m-=F,(n-=F)-(c+=A)==0&&m-f==0)return pu.tR;if(c===n){const rn=ao(c,[],0);for(;f<m;)rn.removed.push(o[f++]);return[rn]}if(f===m)return[ao(c,[],n-c)];const Se=function kg(d){let c=d.length-1,n=d[0].length-1,o=d[c][n];const f=[];for(;c>0||n>0;){if(0===c){f.push(Id),n--;continue}if(0===n){f.push(_f),c--;continue}const m=d[c-1][n-1],A=d[c-1][n],F=d[c][n-1];let ae;ae=A<F?A<m?A:m:F<m?F:m,ae===m?(m===o?f.push(Dg):(f.push(xg),o=m),c--,n--):ae===A?(f.push(_f),c--,o=A):(f.push(Id),n--,o=F)}return f.reverse(),f}(function Dd(d,c,n,o,f,m){const A=m-f+1,F=n-c+1,ae=new Array(A);let Se,Me;for(let We=0;We<A;++We)ae[We]=new Array(F),ae[We][0]=We;for(let We=0;We<F;++We)ae[0][We]=We;for(let We=1;We<A;++We)for(let Vt=1;Vt<F;++Vt)d[c+Vt-1]===o[f+We-1]?ae[We][Vt]=ae[We-1][Vt-1]:(Se=ae[We-1][Vt]+1,Me=ae[We][Vt-1]+1,ae[We][Vt]=Se<Me?Se:Me);return ae}(d,c,n,o,f,m)),Me=[];let We,Vt=c,Yt=f;for(let rn=0;rn<Se.length;++rn)switch(Se[rn]){case Dg:void 0!==We&&(Me.push(We),We=void 0),Vt++,Yt++;break;case xg:void 0===We&&(We=ao(Vt,[],0)),We.addedCount++,Vt++,We.removed.push(o[Yt]),Yt++;break;case Id:void 0===We&&(We=ao(Vt,[],0)),We.addedCount++,Vt++;break;case _f:void 0===We&&(We=ao(Vt,[],0)),We.removed.push(o[Yt]),Yt++}return void 0!==We&&Me.push(We),Me}const Tf=Array.prototype.push;function Rg(d,c,n,o){const f=ao(c,n,o);let m=!1,A=0;for(let F=0;F<d.length;F++){const ae=d[F];if(ae.index+=A,m)continue;const Se=Ef(f.index,f.index+f.removed.length,ae.index,ae.index+ae.addedCount);if(Se>=0)if(d.splice(F,1),F--,A-=ae.addedCount-ae.removed.length,f.addedCount+=ae.addedCount-Se,f.addedCount||f.removed.length+ae.removed.length-Se){let We=ae.removed;if(f.index<ae.index){const Vt=f.removed.slice(0,ae.index-f.index);Tf.apply(Vt,We),We=Vt}if(f.index+f.removed.length>ae.index+ae.addedCount){const Vt=f.removed.slice(ae.index+ae.addedCount-f.index);Tf.apply(We,Vt)}f.removed=We,ae.index<f.index&&(f.index=ae.index)}else m=!0;else if(f.index<ae.index){m=!0,d.splice(F,0,f),F++;const Me=f.addedCount-f.removed.length;ae.index+=Me,A+=Me}}m||d.push(f)}var E0=h(5963);let Mg=!1;function xu(d,c){let n=d.index;const o=c.length;return n>o?n=o-d.addedCount:n<0&&(n=o+d.removed.length+n-d.addedCount),n<0&&(n=0),d.index=n,d}class ku extends E0.l{constructor(c){super(c),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(c,"$fastController",{value:this,enumerable:!1})}subscribe(c){this.flush(),super.subscribe(c)}addSplice(c){void 0===this.splices?this.splices=[c]:this.splices.push(c),this.needsQueue&&(this.needsQueue=!1,yo.dv.queueUpdate(this))}reset(c){this.oldCollection=c,this.needsQueue&&(this.needsQueue=!1,yo.dv.queueUpdate(this))}flush(){const c=this.splices,n=this.oldCollection;if(void 0===c&&void 0===n)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const o=void 0===n?function _0(d,c){let n=[];const o=function w0(d){const c=[];for(let n=0,o=d.length;n<o;n++){const f=d[n];Rg(c,f.index,f.removed,f.addedCount)}return c}(c);for(let f=0,m=o.length;f<m;++f){const A=o[f];1!==A.addedCount||1!==A.removed.length?n=n.concat(Kc(d,A.index,A.index+A.addedCount,A.removed,0,A.removed.length)):A.removed[0]!==d[A.index]&&n.push(A)}return n}(this.source,c):Kc(this.source,0,this.source.length,n,0,n.length);this.notify(o)}}var wC=h(1831);const Og=Object.freeze({positioning:!1,recycle:!0});function S0(d,c,n,o){d.bind(c[n],o)}function Pg(d,c,n,o){const f=Object.create(o);f.index=n,f.length=c.length,d.bind(c[n],f)}class A0{constructor(c,n,o,f,m,A){this.location=c,this.itemsBinding=n,this.templateBinding=f,this.options=A,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=S0,this.itemsBindingObserver=on.cP.binding(n,this,o),this.templateBindingObserver=on.cP.binding(f,this,m),A.positioning&&(this.bindView=Pg)}bind(c,n){this.source=c,this.originalContext=n,this.childContext=Object.create(n),this.childContext.parent=c,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(c,this.originalContext),this.template=this.templateBindingObserver.observe(c,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(c,n){c===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):c===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(n)}observeItems(c=!1){if(!this.items)return void(this.items=pu.tR);const n=this.itemsObserver,o=this.itemsObserver=on.cP.getNotifier(this.items),f=n!==o;f&&null!==n&&n.unsubscribe(this),(f||c)&&o.subscribe(this)}updateViews(c){const n=this.childContext,o=this.views,f=this.bindView,m=this.items,A=this.template,F=this.options.recycle,ae=[];let Se=0,Me=0;for(let We=0,Vt=c.length;We<Vt;++We){const Yt=c[We];let bn=0,ai=Yt.index;const Ni=ai+Yt.addedCount,Hi=o.splice(Yt.index,Yt.removed.length),hr=Me=ae.length+Hi.length;for(;ai<Ni;++ai){const Vi=o[ai],ma=Vi?Vi.firstChild:this.location;let to;F&&Me>0?(bn<=hr&&Hi.length>0?(to=Hi[bn],bn++):(to=ae[Se],Se++),Me--):to=A.create(),o.splice(ai,0,to),f(to,m,ai,n),to.insertBefore(ma)}Hi[bn]&&ae.push(...Hi.slice(bn))}for(let We=Se,Vt=ae.length;We<Vt;++We)ae[We].dispose();if(this.options.positioning)for(let We=0,Vt=o.length;We<Vt;++We){const Yt=o[We].context;Yt.length=Vt,Yt.index=We}}refreshAllViews(c=!1){const n=this.items,o=this.childContext,f=this.template,m=this.location,A=this.bindView;let F=n.length,ae=this.views,Se=ae.length;if((0===F||c||!this.options.recycle)&&(wC.N.disposeContiguousBatch(ae),Se=0),0===Se){this.views=ae=new Array(F);for(let Me=0;Me<F;++Me){const We=f.create();A(We,n,Me,o),ae[Me]=We,We.insertBefore(m)}}else{let Me=0;for(;Me<F;++Me)if(Me<Se)A(ae[Me],n,Me,o);else{const Vt=f.create();A(Vt,n,Me,o),ae.push(Vt),Vt.insertBefore(m)}const We=ae.splice(Me,Se-Me);for(Me=0,F=We.length;Me<F;++Me)We[Me].dispose()}}unbindAllViews(){const c=this.views;for(let n=0,o=c.length;n<o;++n)c[n].unbind()}}class Sf extends hf.dg{constructor(c,n,o){super(),this.itemsBinding=c,this.templateBinding=n,this.options=o,this.createPlaceholder=yo.dv.createBlockPlaceholder,function T0(){if(Mg)return;Mg=!0,on.cP.setArrayObserverFactory(ae=>new ku(ae));const d=Array.prototype;if(d.$fastPatch)return;Reflect.defineProperty(d,"$fastPatch",{value:1,enumerable:!1});const c=d.pop,n=d.push,o=d.reverse,f=d.shift,m=d.sort,A=d.splice,F=d.unshift;d.pop=function(){const ae=this.length>0,Se=c.apply(this,arguments),Me=this.$fastController;return void 0!==Me&&ae&&Me.addSplice(ao(this.length,[Se],0)),Se},d.push=function(){const ae=n.apply(this,arguments),Se=this.$fastController;return void 0!==Se&&Se.addSplice(xu(ao(this.length-arguments.length,[],arguments.length),this)),ae},d.reverse=function(){let ae;const Se=this.$fastController;void 0!==Se&&(Se.flush(),ae=this.slice());const Me=o.apply(this,arguments);return void 0!==Se&&Se.reset(ae),Me},d.shift=function(){const ae=this.length>0,Se=f.apply(this,arguments),Me=this.$fastController;return void 0!==Me&&ae&&Me.addSplice(ao(0,[Se],0)),Se},d.sort=function(){let ae;const Se=this.$fastController;void 0!==Se&&(Se.flush(),ae=this.slice());const Me=m.apply(this,arguments);return void 0!==Se&&Se.reset(ae),Me},d.splice=function(){const ae=A.apply(this,arguments),Se=this.$fastController;return void 0!==Se&&Se.addSplice(xu(ao(+arguments[0],ae,arguments.length>2?arguments.length-2:0),this)),ae},d.unshift=function(){const ae=F.apply(this,arguments),Se=this.$fastController;return void 0!==Se&&Se.addSplice(xu(ao(0,[],arguments.length),this)),ae}}(),this.isItemsBindingVolatile=on.cP.isVolatileBinding(c),this.isTemplateBindingVolatile=on.cP.isVolatileBinding(n)}createBehavior(c){return new A0(c,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function lc(d,c,n=Og){return new Sf(d,"function"==typeof c?c:()=>c,Object.assign(Object.assign({},Og),n))}const kd=gi.q`
    <template>
        ${d=>null===d.rowData||null===d.columnDefinition||null===d.columnDefinition.columnDataKey?null:d.rowData[d.columnDefinition.columnDataKey]}
    </template>
`,Rd=gi.q`
    <template>
        ${d=>null===d.columnDefinition?null:void 0===d.columnDefinition.title?d.columnDefinition.columnDataKey:d.columnDefinition.title}
    </template>
`;let Ng=(()=>{class d extends wr.g{constructor(){super(...arguments),this.cellType="default",this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(n,o){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var n;super.connectedCallback(),this.addEventListener(Wp,this.handleFocusin),this.addEventListener(Bc,this.handleFocusout),this.addEventListener(rc,this.handleKeydown),this.style.gridColumn=`${void 0===(null===(n=this.columnDefinition)||void 0===n?void 0:n.gridColumn)?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Wp,this.handleFocusin),this.removeEventListener(Bc,this.handleFocusout),this.removeEventListener(rc,this.handleKeydown),this.disconnectCellView()}handleFocusin(n){if(!this.isActiveCell){if(this.isActiveCell=!0,"columnheader"===this.cellType){if(null!==this.columnDefinition&&!0!==this.columnDefinition.headerCellInternalFocusQueue&&"function"==typeof this.columnDefinition.headerCellFocusTargetCallback){const o=this.columnDefinition.headerCellFocusTargetCallback(this);null!==o&&o.focus()}}else if(null!==this.columnDefinition&&!0!==this.columnDefinition.cellInternalFocusQueue&&"function"==typeof this.columnDefinition.cellFocusTargetCallback){const o=this.columnDefinition.cellFocusTargetCallback(this);null!==o&&o.focus()}this.$emit("cell-focused",this)}}handleFocusout(n){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(n){if(!(n.defaultPrevented||null===this.columnDefinition||"default"===this.cellType&&!0!==this.columnDefinition.cellInternalFocusQueue||"columnheader"===this.cellType&&!0!==this.columnDefinition.headerCellInternalFocusQueue))switch(n.key){case Mn.Mm:case Mn.Ac:if(this.contains(document.activeElement)&&document.activeElement!==this)return;if("columnheader"===this.cellType){if(void 0!==this.columnDefinition.headerCellFocusTargetCallback){const o=this.columnDefinition.headerCellFocusTargetCallback(this);null!==o&&o.focus(),n.preventDefault()}}else if(void 0!==this.columnDefinition.cellFocusTargetCallback){const o=this.columnDefinition.cellFocusTargetCallback(this);null!==o&&o.focus(),n.preventDefault()}break;case Mn.F9:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),n.preventDefault())}}updateCellView(){if(this.disconnectCellView(),null!==this.columnDefinition)switch(this.cellType){case"columnheader":this.customCellView=void 0!==this.columnDefinition.headerCellTemplate?this.columnDefinition.headerCellTemplate.render(this,this):Rd.render(this,this);break;case void 0:case"rowheader":case"default":this.customCellView=void 0!==this.columnDefinition.cellTemplate?this.columnDefinition.cellTemplate.render(this,this):kd.render(this,this)}}disconnectCellView(){null!==this.customCellView&&(this.customCellView.dispose(),this.customCellView=null)}}return(0,Dt.Cg)([(0,ln.CF)({attribute:"cell-type"})],d.prototype,"cellType",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"grid-column"})],d.prototype,"gridColumn",void 0),(0,Dt.Cg)([on.sH],d.prototype,"rowData",void 0),(0,Dt.Cg)([on.sH],d.prototype,"columnDefinition",void 0),d})(),Lg=(()=>{class d extends wr.g{constructor(){super(...arguments),this.rowType="default",this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){null!==this.rowData&&this.isActiveRow&&(this.refocusOnLoad=!0)}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),null===this.cellsRepeatBehavior&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Sf(n=>n.columnDefinitions,n=>n.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Bc,this.handleFocusout),this.addEventListener(rc,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Bc,this.handleFocusout),this.removeEventListener(rc,this.handleKeydown)}handleFocusout(n){this.contains(n.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(n){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(n.target),this.$emit("row-focused",this)}handleKeydown(n){if(n.defaultPrevented)return;let o=0;switch(n.key){case Mn.kT:o=Math.max(0,this.focusColumnIndex-1),this.cellElements[o].focus(),n.preventDefault();break;case Mn.bb:o=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[o].focus(),n.preventDefault();break;case Mn.Tg:n.ctrlKey||(this.cellElements[0].focus(),n.preventDefault());break;case Mn.FM:n.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),n.preventDefault())}}updateItemTemplate(){this.activeCellItemTemplate="default"===this.rowType&&void 0!==this.cellItemTemplate?this.cellItemTemplate:"default"===this.rowType&&void 0===this.cellItemTemplate?this.defaultCellItemTemplate:void 0!==this.headerCellItemTemplate?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}return(0,Dt.Cg)([(0,ln.CF)({attribute:"grid-template-columns"})],d.prototype,"gridTemplateColumns",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"row-type"})],d.prototype,"rowType",void 0),(0,Dt.Cg)([on.sH],d.prototype,"rowData",void 0),(0,Dt.Cg)([on.sH],d.prototype,"columnDefinitions",void 0),(0,Dt.Cg)([on.sH],d.prototype,"cellItemTemplate",void 0),(0,Dt.Cg)([on.sH],d.prototype,"headerCellItemTemplate",void 0),(0,Dt.Cg)([on.sH],d.prototype,"rowIndex",void 0),(0,Dt.Cg)([on.sH],d.prototype,"isActiveRow",void 0),(0,Dt.Cg)([on.sH],d.prototype,"activeCellItemTemplate",void 0),(0,Dt.Cg)([on.sH],d.prototype,"defaultCellItemTemplate",void 0),(0,Dt.Cg)([on.sH],d.prototype,"defaultHeaderCellItemTemplate",void 0),(0,Dt.Cg)([on.sH],d.prototype,"cellElements",void 0),d})(),I0=(()=>{class d extends wr.g{constructor(){super(),this.noTabbing=!1,this.generateHeader="default",this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(n,o,f)=>{if(0===this.rowElements.length)return this.focusRowIndex=0,void(this.focusColumnIndex=0);const m=Math.max(0,Math.min(this.rowElements.length-1,n)),F=this.rowElements[m].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),Se=F[Math.max(0,Math.min(F.length-1,o))];f&&this.scrollHeight!==this.clientHeight&&(m<this.focusRowIndex&&this.scrollTop>0||m>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&Se.scrollIntoView({block:"center",inline:"center"}),Se.focus()},this.onChildListChange=(n,o)=>{n&&n.length&&(n.forEach(f=>{f.addedNodes.forEach(m=>{1===m.nodeType&&"row"===m.getAttribute("role")&&(m.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,yo.dv.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let n=this.gridTemplateColumns;void 0===n&&(""===this.generatedGridTemplateColumns&&this.rowElements.length>0&&(this.generatedGridTemplateColumns=new Array(this.rowElements[0].cellElements.length).fill("1fr").join(" ")),n=this.generatedGridTemplateColumns),this.rowElements.forEach((o,f)=>{const m=o;m.rowIndex=f,m.gridTemplateColumns=n,this.columnDefinitionsStale&&(m.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(n){let o="";return n.forEach(f=>{o=`${o}${""===o?"":" "}1fr`}),o}noTabbingChanged(){this.$fastController.isConnected&&this.setAttribute("tabIndex",this.noTabbing||this.contains(document.activeElement)||this===document.activeElement?"-1":"0")}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){null===this.columnDefinitions&&this.rowsData.length>0&&(this.columnDefinitions=d.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){null!==this.columnDefinitions?(this.generatedGridTemplateColumns=d.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())):this.generatedGridTemplateColumns=""}headerCellItemTemplateChanged(){this.$fastController.isConnected&&null!==this.generatedHeader&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),void 0===this.rowItemTemplate&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Sf(n=>n.rowsData,n=>n.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener("focus",this.handleFocus),this.addEventListener(rc,this.handleKeydown),this.addEventListener(Bc,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),yo.dv.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener("focus",this.handleFocus),this.removeEventListener(rc,this.handleKeydown),this.removeEventListener(Bc,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(n){this.isUpdatingFocus=!0;const o=n.target;this.focusRowIndex=this.rowElements.indexOf(o),this.focusColumnIndex=o.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(n){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(n){(null===n.relatedTarget||!this.contains(n.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(n){if(n.defaultPrevented)return;let o;const f=this.rowElements.length-1,m=this.offsetHeight+this.scrollTop,A=this.rowElements[f];switch(n.key){case Mn.I5:n.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Mn.HX:n.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case Mn.oK:if(n.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(0===this.focusRowIndex)return void this.focusOnCell(0,this.focusColumnIndex,!1);for(o=this.focusRowIndex-1;o>=0;o--){const F=this.rowElements[o];if(F.offsetTop<this.scrollTop){this.scrollTop=F.offsetTop+F.clientHeight-this.clientHeight;break}}this.focusOnCell(o,this.focusColumnIndex,!1);break;case Mn.f_:if(n.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=f||A.offsetTop+A.offsetHeight<=m)return void this.focusOnCell(f,this.focusColumnIndex,!1);for(o=this.focusRowIndex+1;o<=f;o++){const F=this.rowElements[o];if(F.offsetTop+F.offsetHeight>m){let ae=0;"sticky"===this.generateHeader&&null!==this.generatedHeader&&(ae=this.generatedHeader.clientHeight),this.scrollTop=F.offsetTop-ae;break}}this.focusOnCell(o,this.focusColumnIndex,!1);break;case Mn.Tg:n.ctrlKey&&(n.preventDefault(),this.focusOnCell(0,0,!0));break;case Mn.FM:n.ctrlKey&&null!==this.columnDefinitions&&(n.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0))}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||!1===this.pendingFocusUpdate&&(this.pendingFocusUpdate=!0,yo.dv.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(null!==this.generatedHeader&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),"none"!==this.generateHeader&&this.rowsData.length>0){const n=document.createElement(this.rowElementTag);return this.generatedHeader=n,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType="sticky"===this.generateHeader?"sticky-header":"header",void((null!==this.firstChild||null!==this.rowsPlaceholder)&&this.insertBefore(n,null!==this.firstChild?this.firstChild:this.rowsPlaceholder))}}}return d.generateColumns=c=>Object.getOwnPropertyNames(c).map((n,o)=>({columnDataKey:n,gridColumn:`${o}`})),(0,Dt.Cg)([(0,ln.CF)({attribute:"no-tabbing",mode:"boolean"})],d.prototype,"noTabbing",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"generate-header"})],d.prototype,"generateHeader",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"grid-template-columns"})],d.prototype,"gridTemplateColumns",void 0),(0,Dt.Cg)([on.sH],d.prototype,"rowsData",void 0),(0,Dt.Cg)([on.sH],d.prototype,"columnDefinitions",void 0),(0,Dt.Cg)([on.sH],d.prototype,"rowItemTemplate",void 0),(0,Dt.Cg)([on.sH],d.prototype,"cellItemTemplate",void 0),(0,Dt.Cg)([on.sH],d.prototype,"headerCellItemTemplate",void 0),(0,Dt.Cg)([on.sH],d.prototype,"focusRowIndex",void 0),(0,Dt.Cg)([on.sH],d.prototype,"focusColumnIndex",void 0),(0,Dt.Cg)([on.sH],d.prototype,"defaultRowItemTemplate",void 0),(0,Dt.Cg)([on.sH],d.prototype,"rowElementTag",void 0),(0,Dt.Cg)([on.sH],d.prototype,"rowElements",void 0),d})();const Ru=gi.q`
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
`,EC=(d,c)=>{const n=d.tagFor(I0),o=d.tagFor(Lg);return gi.q`
    <${n} class="days interact" part="days" generate-header="none">
        <${o}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${lc(f=>f.getWeekdayText(),(d=>{const c=d.tagFor(Ng);return gi.q`
        <${c}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(n,o)=>o.index+1}"
            abbr="${n=>n.abbr}"
        >
            ${n=>n.text}
        </${c}>
    `})(d),{positioning:!0})}
        </${o}>
        ${lc(f=>f.getDays(),((d,c)=>{const n=d.tagFor(Lg);return gi.q`
        <${n}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${lc(o=>o,((d,c)=>{const n=d.tagFor(Ng);return gi.q`
        <${n}
            class="${(o,f)=>f.parentContext.parent.getDayClassNames(o,c)}"
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
                part="${o=>c===`${o.month}-${o.day}-${o.year}`?"today":"date"}"
            >
                ${(o,f)=>f.parentContext.parent.dateFormatter.getDay(o.day)}
            </div>
            <slot name="${o=>o.month}-${o=>o.day}-${o=>o.year}"></slot>
        </${n}>
    `})(d,c),{positioning:!0})}
        </${n}>
    `})(d,c))}
    </${n}>
`},TC=bi.A`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,R0=bi.A`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`,M0=(()=>{class d extends wf{constructor(){super(...arguments),this.readonly=!0}}return(0,vd.Cg)([(0,ln.CF)({converter:ln.Bs})],d.prototype,"readonly",void 0),d})().compose({baseName:"calendar",template:(d,c)=>{var n;const o=new Date,f=`${o.getMonth()+1}-${o.getDate()}-${o.getFullYear()}`;return gi.q`
        <template>
            ${lr.pS}
            ${c.title instanceof Function?c.title(d,c):null!==(n=c.title)&&void 0!==n?n:""}
            <slot></slot>
            ${(0,Ss.z)(m=>m.readonly,(d=>gi.q`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${lc(c=>c.getWeekdayText(),gi.q`
                        <div class="week-day" part="week-day" abbr="${c=>c.abbr}">
                            ${c=>c.text}
                        </div>
                    `)}
            </div>
            ${lc(c=>c.getDays(),gi.q`
                    <div class="week">
                        ${lc(c=>c,gi.q`
                                <div
                                    class="${(c,n)=>n.parentContext.parent.getDayClassNames(c,d)}"
                                    part="day"
                                    aria-label="${(c,n)=>n.parentContext.parent.dateFormatter.getDate(`${c.month}-${c.day}-${c.year}`,{month:"long",day:"numeric"})}"
                                >
                                    <div
                                        class="date"
                                        part="${c=>d===`${c.month}-${c.day}-${c.year}`?"today":"date"}"
                                    >
                                        ${(c,n)=>n.parentContext.parent.dateFormatter.getDay(c.day)}
                                    </div>
                                    <slot
                                        name="${c=>c.month}-${c=>c.day}-${c=>c.year}"
                                    ></slot>
                                </div>
                            `)}
                    </div>
                `)}
        </div>
    `)(f),EC(d,f))}
            ${lr.Sm}
        </template>
    `},styles:(d,c)=>bi.A`
${(0,qo.V)("inline-block")} :host {
  --calendar-cell-size: calc((${wt.Sss} + 2 + ${wt.Brd}) * ${wt.vR1} * 1px);
  --calendar-gap: 2px;
  ${Is.Ah}
  color: ${wt.lHw};
}

.title {
  padding: calc(${wt.vR1} * 2px);
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
  border: calc(${wt.XAH} * 1px) solid transparent;
  border-radius: calc(${wt.PbG} * 1px);
}

.interact .day {
  cursor: pointer;
}

.date {
  height: 100%;
}

.inactive .date,
.inactive.disabled::before {
  color: ${wt.cRz};
}

.disabled::before {
  content: '';
  display: inline-block;
  width: calc(var(--calendar-cell-size) * .8);
  height: calc(${wt.XAH} * 1px);
  background: currentColor;
  position: absolute;
  margin-top: calc(var(--calendar-cell-size) / 2);
  transform-origin: center;
  z-index: 1;
}

.selected {
  color: ${wt.IRh};
  border: 1px solid ${wt.IRh};
  background: ${wt.pfK};
}

.selected + .selected {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-inline-start-width: 0;
  padding-inline-start: calc(var(--calendar-gap) + (${wt.XAH} + ${wt.PbG}) * 1px);
  margin-inline-start: calc((${wt.PbG} * -1px) - var(--calendar-gap));
}

.today.disabled::before {
  color: ${wt.l_5};
}

.today .date {
  color: ${wt.l_5};
  background: ${wt.IRh};
  border-radius: 50%;
  position: relative;
}
`.withBehaviors((0,As.mr)(bi.A`
          .day.selected {
              color: ${Sn.A.Highlight};
          }

          .today .date {
              background: ${Sn.A.Highlight};
              color: ${Sn.A.HighlightText};
          }
      `),new Pc(TC,R0)),title:Ru});var Md=function(d,c,n,o){var A,f=arguments.length,m=f<3?c:null===o?o=Object.getOwnPropertyDescriptor(c,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,c,n,o);else for(var F=d.length-1;F>=0;F--)(A=d[F])&&(m=(f<3?A(m):f>3?A(c,n,m):A(c,n))||m);return f>3&&m&&Object.defineProperty(c,n,m),m},cc=function(d,c){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,c)};let Od=(()=>{class d extends Vs.N{get strings(){return Ig}constructor(){super(),this.renderLoading=()=>this.renderLoadingTask(),this.renderContent=()=>{const n=Qi.b.globalProvider;if(!n||n.state!==Bi.HJ.SignedIn)return Lt.qy``;const o=this.renderPicker(),f=this.renderNewTask(),m=this.renderTasks();return Lt.qy`
      ${o}
      ${f}
      <div class="tasks" dir=${this.direction}>
        ${m}
      </div>
    `},this.handleTaskClick=n=>{this.fireCustomEvent("taskClick",{task:n})},this.onResize=()=>{this.mediaQuery!==this._previousMediaQuery&&(this._previousMediaQuery=this.mediaQuery,this.requestUpdate())},(0,Ko.E)(xl.oR,tc.zi,M0),this.clearState(),this._previousMediaQuery=this.mediaQuery}args(){return[this.providerState,this.targetId,this.initialId]}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.onResize)}disconnectedCallback(){window.removeEventListener("resize",this.onResize),super.disconnectedCallback()}renderLoadingTask(){return Lt.qy`
      <div class="task loading-task">
        <div class="task-details">
          <div class="title"></div>
          <div class="task-due"></div>
          <div class="task-delete"></div>
        </div>
      </div>
    `}clearState(){this.requestUpdate()}dateToInputValue(n){return n?new Date(n.getTime()-6e4*n.getTimezoneOffset()).toISOString().split("T")[0]:null}}return Md([(0,Mt.MZ)({attribute:"read-only",type:Boolean}),cc("design:type",Boolean)],d.prototype,"readOnly",void 0),Md([(0,Mt.MZ)({attribute:"hide-header",type:Boolean}),cc("design:type",Boolean)],d.prototype,"hideHeader",void 0),Md([(0,Mt.MZ)({attribute:"hide-options",type:Boolean}),cc("design:type",Boolean)],d.prototype,"hideOptions",void 0),Md([(0,Mt.MZ)({attribute:"target-id",type:String}),cc("design:type",String)],d.prototype,"targetId",void 0),Md([(0,Mt.MZ)({attribute:"initial-id",type:String}),cc("design:type",String)],d.prototype,"initialId",void 0),d})();var Rs=function(d,c,n,o){var A,f=arguments.length,m=f<3?c:null===o?o=Object.getOwnPropertyDescriptor(c,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,c,n,o);else for(var F=d.length-1;F>=0;F--)(A=d[F])&&(m=(f<3?A(m):f>3?A(c,n,m):A(c,n))||m);return f>3&&m&&Object.defineProperty(c,n,m),m},us=function(d,c){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,c)},pa=function(d,c,n,o){return new(n||(n=Promise))(function(m,A){function F(Me){try{Se(o.next(Me))}catch(We){A(We)}}function ae(Me){try{Se(o.throw(Me))}catch(We){A(We)}}function Se(Me){Me.done?m(Me.value):function f(m){return m instanceof n?m:new n(function(A){A(m)})}(Me.value).then(F,ae)}Se((o=o.apply(d,c||[])).next())})};let Fg=(()=>{class d extends Od{static get styles(){return Tg}get strings(){return g0}static get requiredScopes(){return["tasks.read","tasks.readwrite"]}constructor(){super(),this._isChangedDueDate=!1,this._isDarkMode=!1,this.onThemeChanged=()=>{this._isDarkMode=kp(this)},this.renderNewTask=()=>{const n=this._newTaskName?Lt.qy`
        <fluent-checkbox
          class="task-add-icon"
          @click="${this.addTask}">
        </fluent-checkbox>
      `:Lt.qy`
        <span class="add-icon">${(0,Kn.r)(Kn.A.Add)}</span>
      `,o=Lt.qy`
      <fluent-button
        aria-label=${this.strings.cancelAddingTask}
        class="task-cancel-icon" 
        @click="${this.clearNewTaskData}"
      >
        ${(0,Kn.r)(Kn.A.Cancel)}
      </fluent-button>
    `,m=Lt.qy`
      <fluent-text-field
        autocomplete="off"
        type="date"
        id="new-taskDate-input"
        class="${(0,Fr.H)({dark:this._isDarkMode,date:!0})}"
        aria-label="${this.strings.newTaskDateInputLabel}"
        .value="${this.dateToInputValue(this._newTaskDueDate)}"
        @change="${this.handleDateChange}"
      >
      </fluent-text-field>
    `,A=this.readOnly?Lt.s6:Lt.qy`
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
              ${A}
            </div>
        `:Lt.qy``}  
     `},this.handleSelectionChanged=n=>{this.currentList=n.detail,this.loadTasks(this.currentList)},this.renderTaskDetails=n=>{const o={task:n,list:this.currentList};if(this.hasTemplate("task"))return this.renderTemplate("task",o,n.id);let f=null;const m=Lt.qy`
      <fluent-button class="task-delete"
        @click="${()=>this.removeTask(n.id)}"
        aria-label="${this.strings.deleteTaskOption}">
        ${(0,Kn.r)(Kn.A.Delete)}
      </fluent-button>`;if(this.hasTemplate("task-details"))f=this.renderTemplate("task-details",o,`task-details-${n.id}`);else{const F=Lt.qy`
        <fluent-text-field
          autocomplete="off"
          type="date"
          id="${n.id}-taskDate-input"
          class="${(0,Fr.H)({dark:this._isDarkMode,date:!0,"task-due":!0})}"
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
      `}return Lt.qy`${f}`},this.renderTask=n=>{const o="completed"===n.status,f=(0,Fr.H)({complete:o,"read-only":this.readOnly,task:!0}),m=(0,Fr.H)({complete:o}),A=Lt.qy`${(0,Kn.r)(Kn.A.CheckMark)}`;return Lt.qy`
      <div class=${f} @blur="${this.handleBlur}">
        <fluent-checkbox 
          id=${n.id} 
          class=${m}
          ?checked=${o}
          @click="${()=>this.handleTaskCheckClick(n)}"
          @keydown="${F=>this.handleTaskCheckKeydown(F,n)}"
        >
          <div slot="checked-indicator">
            ${A}
          </div>
        </fluent-checkbox>
        ${this.renderTaskDetails(n)}
      </div>
    `},this.loadState=()=>pa(this,void 0,void 0,function*(){const n=Qi.b.globalProvider;if(n&&n.state===Bi.HJ.SignedIn){if(!this._graph){const o=n.graph.forComponent(this);this._graph=o}if(!this.currentList&&!this.initialId){const o=yield(d=>fa(void 0,void 0,void 0,function*(){const c=yield d.api("/me/todo/lists").header("Cache-Control","no-store").middlewareOptions((0,Cr.F)(Su)).get();return c?.value}))(this._graph),f=o?.find(m=>"defaultList"===m.wellknownListName);f&&(yield this.loadTasks(f))}this.targetId?(this.currentList=yield Cg(this._graph,this.targetId),this._tasks=yield mf(this._graph,this.targetId)):this.initialId&&(this.currentList=yield Cg(this._graph,this.initialId),this._tasks=yield mf(this._graph,this.initialId))}}),this.addTask=()=>pa(this,void 0,void 0,function*(){if(!this._isNewTaskBeingAdded&&this._newTaskName){this._isNewTaskBeingAdded=!0;try{yield this.createNewTask()}finally{this.clearNewTaskData(),this._isNewTaskBeingAdded=!1}}}),this.updateTask=n=>pa(this,void 0,void 0,function*(){try{if(!this._changedTaskName&&!this._isChangedDueDate)return;yield this.updateTaskItem(n)}finally{this.clearNewTaskData()}}),this.clearNewTaskData=()=>{this._newTaskDueDate=null,this._newTaskName="",this._changedTaskName="",this._isChangedDueDate=!1,this.focusOnTaskInput()},this.focusOnTaskInput=()=>{const n=this.renderRoot.querySelector("#new-task-name-input"),o=n?.shadowRoot.querySelector("input");o&&o.focus()},this.clearState=()=>{super.clearState(),this.currentList=null,this._tasks=[],this._taskBeingUpdated=null},this.loadTasks=n=>pa(this,void 0,void 0,function*(){this.currentList=n,this._tasks=yield mf(this._graph,n.id)}),this.updateTaskStatus=(n,o)=>pa(this,void 0,void 0,function*(){n.status=o;const f=this.currentList.id;n=yield Eg(this._graph,f,n.id,n);const m=this._tasks.findIndex(A=>A.id===n.id);this._tasks[m]=n,yield this._task.run()}),this.removeTask=n=>pa(this,void 0,void 0,function*(){this._tasks=this._tasks.filter(f=>f.id!==n),this.requestUpdate();const o=this.currentList.id;yield((d,c,n)=>fa(void 0,void 0,void 0,function*(){yield d.api(`/me/todo/lists/${c}/tasks/${n}`).header("Cache-Control","no-store").middlewareOptions((0,Cr.F)(ac)).delete()}))(this._graph,o,n),this._tasks=this._tasks.filter(f=>f.id!==n)}),this.handleInput=n=>{"new-task-name-input"===n.target.id&&(this._newTaskName=n.target.value)},this.handleChange=(n,o)=>pa(this,void 0,void 0,function*(){var f;n.target.id===o.id&&("Enter"===n.key&&(yield this.updateTask(o),null===(f=n.target)||void 0===f||f.blur()),this._changedTaskName=n.target.value)}),this.handleKeyDown=n=>pa(this,void 0,void 0,function*(){"Enter"===n.key&&"new-task-name-input"===n.target.id&&(yield this.addTask())}),this.updatingTask=(n,o)=>{n.target.id===o.id&&(this._taskBeingUpdated=o),n.target.id===`${o.id}-taskDate-input`&&(this._updatingTaskDate=!0,this._taskBeingUpdated=o)},this.handleBlur=()=>{const n=this._taskBeingUpdated,o=this.renderRoot.querySelectorAll("fluent-text-field");for(const f of o)n&&(f.id===n.id||f.id===`${n.id}-taskDate-input`)&&(this.updateTask(n),f?.blur(),this._taskBeingUpdated=null,this._updatingTaskDate=!1)},this.handleDateChange=n=>{const o=n.target.value;this._newTaskDueDate=o?new Date(o+"T17:00"):null},this.handleDateUpdate=n=>{const o=this._taskBeingUpdated;if(o){const f=n.target.value;this._newTaskDueDate=f?new Date(f+"T17:00"):null,this._isChangedDueDate=o.dueDateTime&&this._newTaskDueDate?new Date(o.dueDateTime.dateTime)!==this._newTaskDueDate:!(!o.dueDateTime&&!this._newTaskDueDate)}},this._graph=null,this._newTaskDueDate=null,this._tasks=[],this.addEventListener("selectionChanged",this.handleSelectionChanged),this.addEventListener("blur",this.handleBlur)}connectedCallback(){super.connectedCallback(),window.addEventListener("darkmodechanged",this.onThemeChanged),this.onThemeChanged()}disconnectedCallback(){window.removeEventListener("darkmodechanged",this.onThemeChanged),super.disconnectedCallback()}renderTasks(){let n=this._tasks;n&&this.taskFilter&&(n=n.filter(A=>this.taskFilter(A)));const o=n.filter(A=>"completed"===A.status),f=(0,Ma.u)(n.filter(A=>"completed"!==A.status),A=>A.id,A=>this.renderTask(A)),m=(0,Ma.u)(o.sort((A,F)=>A.lastModifiedDateTime<F.lastModifiedDateTime?-1:1).filter(A=>"completed"===A.status),A=>A.id,A=>this.renderTask(A));return Lt.qy`
      ${f}
      ${m}
    `}renderPicker(){var n,o;return this.targetId?Lt.qy`<p>${null===(n=this.currentList)||void 0===n?void 0:n.displayName}</p>`:Ji.Q`
        <mgt-picker
          resource="me/todo/lists"
          scopes="tasks.read, tasks.readwrite"
          key-name="displayName"
          selected-value="${(0,Yl.J)(null===(o=this.currentList)||void 0===o?void 0:o.displayName)}"
          placeholder="Select a task list">
        </mgt-picker>`}createNewTask(){return pa(this,void 0,void 0,function*(){const n=this.currentList.id,o={title:this._newTaskName};this._newTaskDueDate&&(o.dueDateTime={dateTime:new Date(this._newTaskDueDate).toLocaleDateString(),timeZone:"UTC"});const f=yield((d,c,n)=>fa(void 0,void 0,void 0,function*(){return yield d.api(`/me/todo/lists/${c}/tasks`).header("Cache-Control","no-store").middlewareOptions((0,Cr.F)(ac)).post(n)}))(this._graph,n,o);this._tasks.unshift(f)})}updateTaskItem(n){return pa(this,void 0,void 0,function*(){const o=this.currentList.id;let f={};if(this._changedTaskName&&this._changedTaskName!==n.title&&(f={title:this._changedTaskName}),this._updatingTaskDate){if(!this._isChangedDueDate)return;f.dueDateTime=this._newTaskDueDate?{dateTime:new Date(this._newTaskDueDate).toLocaleDateString(),timeZone:"UTC"}:null}if(!Object.keys(f).length)return;const m=yield Eg(this._graph,o,n.id,f),A=this._tasks.findIndex(F=>F.id===m.id);this._tasks[A]=m})}handleTaskCheckClick(n){this.handleTaskClick(n),this.readOnly||this.updateTaskStatus(n,"completed"===n.status?"notStarted":"completed")}handleTaskCheckKeydown(n,o){"Enter"===n.key&&!this.readOnly&&(this.handleTaskClick(o),this.updateTaskStatus(o,"completed"===o.status?"notStarted":"completed"))}}return Rs([(0,Mt.wk)(),us("design:type",Array)],d.prototype,"_tasks",void 0),Rs([(0,Mt.wk)(),us("design:type",Object)],d.prototype,"_taskBeingUpdated",void 0),Rs([(0,Mt.wk)(),us("design:type",Boolean)],d.prototype,"_updatingTaskDate",void 0),Rs([(0,Mt.wk)(),us("design:type",Object)],d.prototype,"_isChangedDueDate",void 0),Rs([(0,Mt.wk)(),us("design:type",Date)],d.prototype,"_newTaskDueDate",void 0),Rs([(0,Mt.wk)(),us("design:type",String)],d.prototype,"_newTaskName",void 0),Rs([(0,Mt.wk)(),us("design:type",String)],d.prototype,"_changedTaskName",void 0),Rs([(0,Mt.wk)(),us("design:type",Boolean)],d.prototype,"_isNewTaskBeingAdded",void 0),Rs([(0,Mt.wk)(),us("design:type",Object)],d.prototype,"_graph",void 0),Rs([(0,Mt.wk)(),us("design:type",Object)],d.prototype,"currentList",void 0),Rs([(0,Mt.wk)(),us("design:type",Object)],d.prototype,"_isDarkMode",void 0),d})();var $g=h(9569),Nd=h(8072);const Ug={termsetIdRequired:"The termsetId property or termset-id attribute is required",noTermsFound:"No terms found",comboboxPlaceholder:"Select a term",loadingMessage:"Loading..."},O0=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{--max-height:var(--taxonomy-picker-list-max-height, 380px)}:host .picker{background-color:var(--taxonomy-picker-background-color,transparent)}:host fluent-combobox::part(selected-value)::placeholder{color:var(--taxonomy-picker-placeholder-color,var(--input-filled-placeholder-rest))}:host fluent-combobox::part(selected-value):hover::placeholder{color:var(--taxonomy-picker-placeholder-color-hover,var(--secondary-text-hover-color))}[dir=rtl] .picker{direction:rtl}
`];var Xo=function(d,c,n,o){var A,f=arguments.length,m=f<3?c:null===o?o=Object.getOwnPropertyDescriptor(c,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,c,n,o);else for(var F=d.length-1;F>=0;F--)(A=d[F])&&(m=(f<3?A(m):f>3?A(c,n,m):A(c,n))||m);return f>3&&m&&Object.defineProperty(c,n,m),m},hs=function(d,c){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,c)};let P0=(()=>{class d extends Vs.N{get strings(){return Ug}static get styles(){return O0}constructor(){super(),this.version="beta",this.position="below",this.selectedTerm=null,this.cacheEnabled=!1,this.cacheInvalidationPeriod=0,this.renderLoading=()=>this.terms?this.renderContent():this.renderTemplate("loading",null,"loading")||Ji.Q`
        <div class="message-parent">
          <mgt-spinner></mgt-spinner>
          <div label="loading-text" aria-label="loading">
            ${this.strings.loadingMessage}
          </div>
        </div>
      `,this.renderContent=()=>{var n;return this.error?this.renderError():this.noTerms?this.renderNoData():(null===(n=this.terms)||void 0===n?void 0:n.length)>0?this.renderTaxonomyPicker():this.renderGet()},this.renderError=()=>this.renderTemplate("error",null,"error")||Lt.qy`<span>${this.error}</span>`,this.placeholder=this.strings.comboboxPlaceholder,this.noTerms=!1}refresh(n=!1){n&&this.clearState()}clearState(){this.terms=null,this.error=null,this.noTerms=!1}renderNoData(){return this.renderTemplate("no-data",null)||Lt.qy`<span>${this.strings.noTermsFound}</span>`}renderTaxonomyPicker(){return Ji.Q`
      <fluent-combobox class="taxonomy-picker" autocomplete="both" placeholder=${this.placeholder} position=${this.position} ?disabled=${this.disabled}>
        ${this.terms.map(n=>this.renderTaxonomyPickerItem(n))}
      </fluent-combobox>
     `}renderTaxonomyPickerItem(n){return Lt.qy`
        <fluent-option value=${n.id} ?selected=${this.defaultSelectedTermId&&this.defaultSelectedTermId===n.id} @click=${f=>this.handleClick(f,n)}> ${this.renderTemplate("term",{term:n},n.id)||n.labels[0].name} </fluent-option>
        `}renderGet(){if(!this.termsetId)return Lt.qy`<span>${this.strings.termsetIdRequired}</span>`;let n=`/termStore/sets/${this.termsetId}/children`;return this.termId&&(n=`/termStore/sets/${this.termsetId}/terms/${this.termId}/children`),this.siteId&&(n=`/sites/${this.siteId}${n}`),n+="?$select=id,labels,descriptions,properties",Ji.Q`
      <mgt-get
        class="mgt-get"
        resource=${n}
        version=${this.version}
        scopes="TermStore.Read.All, TermStore.ReadWrite.All"
        ?cache-enabled=${this.cacheEnabled}
        ?cache-invalidation-period=${this.cacheInvalidationPeriod}>
      </mgt-get>`}firstUpdated(n){super.firstUpdated(n),this.renderRoot.addEventListener("dataChange",f=>this.handleDataChange(f))}handleDataChange(n){const o=n.detail.error?n.detail.error:null;if(o)return void(this.error=o);this.locale&&(this.locale=this.locale.toLowerCase());const m=n.detail.response.value.map(A=>{const F=A.labels;if(F&&F.length>0&&this.locale){const ae=F.find(Se=>Se.languageTag.toLowerCase()===this.locale);ae&&(A.labels=[ae,...F.filter(Se=>Se.languageTag.toLowerCase()!==this.locale)])}return A});this.terms=m,0===m.length&&(this.noTerms=!0)}handleClick(n,o){this.selectedTerm=o,this.fireCustomEvent("selectionChanged",o)}}return Xo([(0,Mt.MZ)({attribute:"term-set-id",type:String}),hs("design:type",String)],d.prototype,"termsetId",void 0),Xo([(0,Mt.MZ)({attribute:"term-id",type:String}),hs("design:type",String)],d.prototype,"termId",void 0),Xo([(0,Mt.MZ)({attribute:"site-id",type:String}),hs("design:type",String)],d.prototype,"siteId",void 0),Xo([(0,Mt.MZ)({attribute:"locale",type:String}),hs("design:type",String)],d.prototype,"locale",void 0),Xo([(0,Mt.MZ)({attribute:"version",type:String}),hs("design:type",Object)],d.prototype,"version",void 0),Xo([(0,Mt.MZ)({attribute:"placeholder",type:String}),hs("design:type",String)],d.prototype,"placeholder",void 0),Xo([(0,Mt.MZ)({attribute:"position",type:String,converter:c=>"above"===c?"above":"below"}),hs("design:type",String)],d.prototype,"position",void 0),Xo([(0,Mt.MZ)({attribute:"default-selected-term-id",type:String}),hs("design:type",String)],d.prototype,"defaultSelectedTermId",void 0),Xo([(0,Mt.MZ)({attribute:"selected-term",type:Object}),hs("design:type",Object)],d.prototype,"selectedTerm",void 0),Xo([(0,Mt.MZ)({attribute:"disabled",type:Boolean}),hs("design:type",Boolean)],d.prototype,"disabled",void 0),Xo([(0,Mt.MZ)({attribute:"cache-enabled",type:Boolean}),hs("design:type",Object)],d.prototype,"cacheEnabled",void 0),Xo([(0,Mt.MZ)({attribute:"cache-invalidation-period",type:Number}),hs("design:type",Object)],d.prototype,"cacheInvalidationPeriod",void 0),Xo([(0,Mt.wk)(),hs("design:type",Array)],d.prototype,"terms",void 0),Xo([(0,Mt.wk)(),hs("design:type",Boolean)],d.prototype,"noTerms",void 0),d})();class N0 extends wr.g{}class L0 extends((0,iu.dx)(N0)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Ld=(()=>{class d extends L0{constructor(){super(),this.initialValue="on",this.keypressHandler=n=>{if(!this.readOnly)switch(n.key){case Mn.Mm:case Mn.gG:this.checked=!this.checked}},this.clickHandler=n=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(n,o){super.checkedChanged(n,o),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}return(0,Dt.Cg)([(0,ln.CF)({attribute:"readonly",mode:"boolean"})],d.prototype,"readOnly",void 0),(0,Dt.Cg)([on.sH],d.prototype,"defaultSlottedNodes",void 0),d})().compose({baseName:"switch",template:(d,c)=>gi.q`
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
            <slot ${(0,Es.e)("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <slot name="switch">${c.switch||""}</slot>
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
`,styles:(d,c)=>bi.A`
    :host([hidden]) {
      display: none;
    }

    ${(0,qo.V)("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${wt.OCo};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${wt.qB4};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${nc.Z};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${$r.D} / 2) + ${wt.vR1}) * 2px);
      height: calc(((${$r.D} / 2) + ${wt.vR1}) * 1px);
      background: ${wt.ymW};
      border-radius: calc(${$r.D} * 1px);
      border: calc(${wt.XAH} * 1px) solid ${wt.nF5};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${wt.IpM};
      border-color: ${wt.vA6};
    }

    :host(:not(.disabled):active) .switch {
      background: ${wt.MPS};
      border-color: ${wt.p4W};
    }

    :host(:${eo.N}) .switch {
      ${ec.v}
      background: ${wt.wsB};
    }

    :host(.checked) .switch {
      background: ${wt.IRh};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${wt.OS0};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${wt.amQ};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${wt.lHw};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${wt.lHw};
      cursor: pointer;
      ${Is.Ah}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${wt.lHw};
      ${Is.Ah}
      margin-inline-end: calc(${wt.vR1} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${wt.vR1} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${wt.IRh};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${wt.l_5};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${wt.OS0};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${wt.XKp};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${wt.amQ};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${wt.J_F};
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
  `.withBehaviors(new Pc(bi.A`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,bi.A`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),(0,As.mr)(bi.A`
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
        :host(:${eo.N}) .switch {
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
      `)),switch:'\n    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n      <rect x="2" y="2" width="12" height="12" rx="6"/>\n    </svg>\n  '});var dc=h(4150),zr=h(3595);const U0="#717171",Bg=zc.G.create("secondary-text-color").withDefault(U0),Hg="#1a1a1a",Ou=zc.G.create("secondary-text-hover-color").withDefault(Hg),Pu={label:"Color mode:",on:"Dark",off:"Light"};var V0=function(d,c){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,c)};let Qc=(()=>{class d extends nl.S{constructor(){super(),this.onSwitchChanged=o=>{this.darkModeActive=o.target.checked};const n=window.matchMedia("(prefers-color-scheme:dark)").matches;this.darkModeActive=n,this.applyTheme(this.darkModeActive)}get strings(){return Pu}updated(n){n.has("darkModeActive")&&this.applyTheme(this.darkModeActive)}render(){return Lt.qy`
      <fluent-switch checked=${this.darkModeActive} @change=${this.onSwitchChanged}>
        <span slot="checked-message">${Pu.on}</span>
        <span slot="unchecked-message">${Pu.off}</span>
        <label for="direction-switch">${Pu.label}</label>
      </fluent-switch>
`}applyTheme(n){const o=n?"dark":"light";((d,c=document.body)=>{const n=(d=>{switch(d){case"contrast":return{accentBaseColor:"#7f85f5",neutralBaseColor:"#adadad",baseLayerLuminance:dc.y.DarkMode};case"default":return{accentBaseColor:"#5b5fc7",neutralBaseColor:"#616161",baseLayerLuminance:dc.y.LightMode};case"dark":return{accentBaseColor:"#479ef5",neutralBaseColor:"#adadad",baseLayerLuminance:dc.y.DarkMode,designTokenOverrides:c=>{wt.IRh.setValueFor(c,Jr.q.from((0,zr.Hs)("#115ea3"))),wt.OS0.setValueFor(c,Jr.q.from((0,zr.Hs)("#0f6cbd"))),wt.amQ.setValueFor(c,Jr.q.from((0,zr.Hs)("#0c3b5e"))),wt.KJd.setValueFor(c,Jr.q.from((0,zr.Hs)("#0f548c"))),wt.W_m.setValueFor(c,Jr.q.from((0,zr.Hs)("#479EF5"))),wt.YLI.setValueFor(c,Jr.q.from((0,zr.Hs)("#62abf5"))),wt.QL0.setValueFor(c,Jr.q.from((0,zr.Hs)("#2886de"))),wt.iLG.setValueFor(c,Jr.q.from((0,zr.Hs)("#479ef5"))),wt.enQ.setValueFor(c,Jr.q.from((0,zr.Hs)("#115ea3"))),wt.eNp.setValueFor(c,Jr.q.from((0,zr.Hs)("#0f6cbd"))),wt.uB0.setValueFor(c,Jr.q.from((0,zr.Hs)("#0c3b5e"))),wt.cDQ.setValueFor(c,Jr.q.from((0,zr.Hs)("#0f548c"))),wt.J_F.setValueFor(c,Jr.q.from((0,zr.Hs)("#ffffff"))),wt.l_5.setValueFor(c,Jr.q.from((0,zr.Hs)("#ffffff"))),wt.XKp.setValueFor(c,Jr.q.from((0,zr.Hs)("#ffffff"))),wt.BgV.setValueFor(c,Jr.q.from((0,zr.Hs)("#ffffff"))),Bg.setValueFor(c,"#8e8e8e"),Ou.setValueFor(c,"#ffffff")}};default:return{accentBaseColor:"#0f6cbd",neutralBaseColor:"#616161",baseLayerLuminance:dc.y.LightMode,designTokenOverrides:c=>{Bg.setValueFor(c,U0),Ou.setValueFor(c,Hg)}}}})(d);((d,c=document.body)=>{var n;wt.fdT.setValueFor(c,Jr.q.from((0,zr.Hs)(d.accentBaseColor))),wt.eQf.setValueFor(c,Jr.q.from((0,zr.Hs)(d.neutralBaseColor))),wt.li_.setValueFor(c,d.baseLayerLuminance),null===(n=d.designTokenOverrides)||void 0===n||n.call(d,c)})(n,c)})(o),document.body.classList.remove("mgt-dark-mode","mgt-light-mode"),document.body.classList.add(`mgt-${o}-mode`),this.fireCustomEvent("darkmodechanged",this.darkModeActive,!0,!1,!0)}}return function(d,c,n,o){var A,f=arguments.length,m=f<3?c:null===o?o=Object.getOwnPropertyDescriptor(c,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,c,n,o);else for(var F=d.length-1;F>=0;F--)(A=d[F])&&(m=(f<3?A(m):f>3?A(c,n,m):A(c,n))||m);f>3&&m&&Object.defineProperty(c,n,m)}([(0,Mt.MZ)({attribute:"mode",reflect:!0,type:String,converter:{fromAttribute:c=>"dark"===c,toAttribute:c=>c?"dark":"light"}}),V0("design:type",Boolean)],d.prototype,"darkModeActive",void 0),d})();class Nu extends wr.g{}class z0 extends((0,iu.rf)(Nu)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Lu=(()=>{class d extends z0{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&yo.dv.queueUpdate(()=>{this.focus()})}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}}return(0,Dt.Cg)([(0,ln.CF)({attribute:"readonly",mode:"boolean"})],d.prototype,"readOnly",void 0),(0,Dt.Cg)([(0,ln.CF)({mode:"boolean"})],d.prototype,"autofocus",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"placeholder",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"list",void 0),(0,Dt.Cg)([(0,ln.CF)({converter:ln.R$})],d.prototype,"maxlength",void 0),(0,Dt.Cg)([(0,ln.CF)({converter:ln.R$})],d.prototype,"minlength",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"pattern",void 0),(0,Dt.Cg)([(0,ln.CF)({converter:ln.R$})],d.prototype,"size",void 0),(0,Dt.Cg)([(0,ln.CF)({mode:"boolean"})],d.prototype,"spellcheck",void 0),(0,Dt.Cg)([on.sH],d.prototype,"defaultSlottedNodes",void 0),d})();class zg{}(0,Yr.X)(zg,dd.z),(0,Yr.X)(Lu,lr.qw,zg);var Gg=h(7412),G0=h(3043);const sl=".root",Wg=zc.G.create("clear-button-hover").withDefault(d=>{const c=wt.EE_.getValueFor(d),n=wt.VYG.getValueFor(d);return c.evaluate(d,n.evaluate(d).focus).hover}),W0=zc.G.create("clear-button-active").withDefault(d=>{const c=wt.EE_.getValueFor(d),n=wt.VYG.getValueFor(d);return c.evaluate(d,n.evaluate(d).focus).active}),Df=(()=>{class d extends Lu{constructor(){super(...arguments),this.appearance="outline"}}return(0,vd.Cg)([ln.CF],d.prototype,"appearance",void 0),d})().compose({baseName:"search",baseClass:Lu,template:(d,c)=>gi.q`
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
      <slot ${(0,Es.e)({property:"defaultSlottedNodes",filter:Gg.g})}></slot>
    </label>
    <div class="root" part="root" ${(0,ls.K)("root")}>
      ${(0,lr.LT)(d,c)}
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
          ${(0,ls.K)("control")}
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
      ${(0,lr.aO)(d,c)}
    </div>
  </template>
`,styles:(d,c)=>bi.A`
    ${(0,qo.V)("inline-block")}

    ${(0,zs.aB)(d,c,sl)}

    ${(0,zs.y$)(d,c,sl)}

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
      padding: 0 calc(${wt.vR1} * 2px + 1px);
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
      color: ${wt.lHw};
      fill: currentcolor;
      border: none;
      border-radius: calc(${wt.PbG} * 1px);
      min-width: calc(${$r.D} * 1px);
      ${Is.Ah}
      outline: none;
      padding: 0 calc((10 + (${wt.vR1} * 2 * ${wt.Brd})) * 1px);
    }
    .clear-button:hover {
      background: ${Wg};
    }
    .clear-button:active {
      background: ${W0};
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
    ::slotted(${d.tagFor(G0.$)}) {
      margin-inline-end: 1px;
    }
  `.withBehaviors((0,ic.f)("outline",(0,zs.Tv)(d,c,sl)),(0,ic.f)("filled",(0,zs.dM)(d,c,sl)),(0,As.mr)((0,zs.lb)(d,c,sl))),start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}}),Fu={placeholder:"Search",title:"Search"},ga=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host fluent-search{width:100%}
`];var $u=function(d,c,n,o){var A,f=arguments.length,m=f<3?c:null===o?o=Object.getOwnPropertyDescriptor(c,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,c,n,o);else for(var F=d.length-1;F>=0;F--)(A=d[F])&&(m=(f<3?A(m):f>3?A(c,n,m):A(c,n))||m);return f>3&&m&&Object.defineProperty(c,n,m),m},Uu=function(d,c){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,c)};let Gr=(()=>{class d extends nl.S{static get styles(){return ga}get strings(){return Fu}get searchTerm(){return this._searchTerm}set searchTerm(n){this._searchTerm=n,this.fireSearchTermChanged()}constructor(){super(),this._searchTerm="",this.renderContent=()=>{var n;return Lt.qy`
      <fluent-search
        autocomplete="off"
        class="search-term-input"
        appearance="outline"
        value=${null!==(n=this.searchTerm)&&void 0!==n?n:""}
        placeholder=${this.placeholder?this.placeholder:Fu.placeholder}
        title=${this.title?this.title:Fu.title}
        @input=${this.onInputChanged}
        @change=${this.onInputChanged}
      >
      </fluent-search>`},this.onInputChanged=n=>{this.searchTerm=n.target.value},this.debounceDelay=300}fireSearchTermChanged(){this.debouncedSearchTermChanged||(this.debouncedSearchTermChanged=(0,ur.sg)(()=>{this.fireCustomEvent("searchTermChanged",this.searchTerm)},this.debounceDelay)),this.debouncedSearchTermChanged()}}return $u([(0,Mt.MZ)({attribute:"placeholder",type:String}),Uu("design:type",String)],d.prototype,"placeholder",void 0),$u([(0,Mt.MZ)({attribute:"search-term",type:String}),Uu("design:type",Object),Uu("design:paramtypes",[Object])],d.prototype,"searchTerm",null),$u([(0,Mt.MZ)({attribute:"debounce-delay",type:Number,reflect:!0}),Uu("design:type",Number)],d.prototype,"debounceDelay",void 0),d})();const Ua={modified:"modified on",back:"Back",next:"Next",pages:"pages",page:"Page"},xf=[Lt.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}.search-results{scroll-margin:100px}.search-result-grid{font-size:14px;margin:16px 4px;display:grid;grid-template-columns:32px 2fr 0fr;gap:.5rem}.search-result{font-size:14px;margin:16px 4px}.file-icon{--file-type-icon-height:32px}.search-result-info{margin:4px 0;display:inline-flex}.search-result-date{padding-top:3px}.search-result-date__shimmer{border-radius:4px;margin-top:2%;margin-left:5px;height:10px;width:200px}.search-result-summary{margin:4px 0;color:var(--body-subtle-text-color)}.search-result-thumbnail__shimmer{width:126px;height:72px}.search-result-thumbnail img{height:72px;max-width:126px;width:126px;object-fit:cover}.search-result-url{font-size:14px;font-weight:600;margin:4px 0}.search-result-url a{color:var(--color,var(--neutral-foreground-rest));text-decoration:none}.search-result-url a:hover{text-decoration:underline}.search-result-content__shimmer{border-radius:4px;margin-top:10px;height:10px}.search-result-name{font-size:16px;font-weight:600;margin:4px 0}.search-result-name__shimmer{border-radius:4px;margin-top:10px;height:10px;width:20%}.search-result-name a{color:var(--color,var(--neutral-foreground-rest));text-decoration:none}.search-result-name a:hover{text-decoration:underline}.search-result-author__shimmer{width:24px;height:24px}.search-result-icon{width:30px;height:30px}.search-result-icon__shimmer{width:32px;height:32px}.search-result-icon img{width:100%}.search-result-icon svg,.search-result-icon svg>path{width:100%;height:100%;fill:var(--neutral-foreground-rest);fill-rule:nonzero!important;clip-rule:nonzero!important}.search-results-page-active{border-bottom-style:solid;border-bottom-color:var(--accent-base-color)}.search-results-page svg,.search-results-page svg>path{height:12px;fill:var(--neutral-foreground-rest);fill-rule:nonzero!important;clip-rule:nonzero!important}.search-result-answer{box-shadow:var(--answer-box-shadow,0 3.2px 7.2px rgba(0,0,0,.132),0 .6px 1.8px rgba(0,0,0,.108));border-radius:var(--answer-border-radius,4px);border:var(--answer-border,none);padding:var(--answer-padding,10px)}.search-results-pages{margin:16px 4px}
`];let Kg=(()=>{class d extends wr.g{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=ha.O.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=n=>{this.classList.toggle("top","start"===this.region.verticalPosition),this.classList.toggle("bottom","end"===this.region.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.region.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.region.verticalPosition),this.classList.toggle("center-vertical","center"===this.region.verticalPosition),this.classList.toggle("left","start"===this.region.horizontalPosition),this.classList.toggle("right","end"===this.region.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.region.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.region.horizontalPosition),this.classList.toggle("center-horizontal","center"===this.region.horizontalPosition)},this.handleRegionMouseOver=n=>{this.isRegionHovered=!0},this.handleRegionMouseOut=n=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=n=>{this.tooltipVisible?this.isAnchorHoveredFocused=!0:this.startShowDelayTimer()},this.handleAnchorMouseOut=n=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=n=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=n=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout(()=>{this.updateTooltipVisibility()},60))},this.clearHideDelayTimer=()=>{null!==this.hideDelayTimer&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1)return void(null===this.showDelayTimer&&(this.showDelayTimer=window.setTimeout(()=>{this.startHover()},this.delay)));this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{null!==this.showDelayTimer&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const n=this.getRootNode();return n instanceof ShadowRoot?n.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=n=>{!n.defaultPrevented&&this.tooltipVisible&&n.key===Mn.F9&&(this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss"))},this.updateTooltipVisibility=()=>{if(!1===this.visible)this.hideTooltip();else{if(!0===this.visible)return void this.showTooltip();if(this.isAnchorHoveredFocused||this.isRegionHovered)return void this.showTooltip();this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=yd(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),yo.dv.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),null!=this.region&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(n){if(this.$fastController.isConnected){if(null!=n&&(n.removeEventListener("mouseover",this.handleAnchorMouseOver),n.removeEventListener("mouseout",this.handleAnchorMouseOut),n.removeEventListener("focusin",this.handleAnchorFocusIn),n.removeEventListener("focusout",this.handleAnchorFocusOut)),null!=this.anchorElement){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const o=this.anchorElement.id;null!==this.anchorElement.parentElement&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(f=>{f.id===o&&this.startShowDelayTimer()})}null!=this.region&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){null!=this.region&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case"top":case"bottom":this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case"right":case"left":case"start":case"end":this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case"top-left":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case"top-right":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case"bottom-left":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case"bottom-right":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case"top-start":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case"top-end":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case"bottom-start":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case"bottom-end":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center"}}}return(0,Dt.Cg)([(0,ln.CF)({mode:"boolean"})],d.prototype,"visible",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"anchor",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"delay",void 0),(0,Dt.Cg)([ln.CF],d.prototype,"position",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"auto-update-mode"})],d.prototype,"autoUpdateMode",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"horizontal-viewport-lock"})],d.prototype,"horizontalViewportLock",void 0),(0,Dt.Cg)([(0,ln.CF)({attribute:"vertical-viewport-lock"})],d.prototype,"verticalViewportLock",void 0),(0,Dt.Cg)([on.sH],d.prototype,"anchorElement",void 0),(0,Dt.Cg)([on.sH],d.prototype,"viewportElement",void 0),(0,Dt.Cg)([on.sH],d.prototype,"verticalPositioningMode",void 0),(0,Dt.Cg)([on.sH],d.prototype,"horizontalPositioningMode",void 0),(0,Dt.Cg)([on.sH],d.prototype,"horizontalInset",void 0),(0,Dt.Cg)([on.sH],d.prototype,"verticalInset",void 0),(0,Dt.Cg)([on.sH],d.prototype,"horizontalScaling",void 0),(0,Dt.Cg)([on.sH],d.prototype,"verticalScaling",void 0),(0,Dt.Cg)([on.sH],d.prototype,"verticalDefaultPosition",void 0),(0,Dt.Cg)([on.sH],d.prototype,"horizontalDefaultPosition",void 0),(0,Dt.Cg)([on.sH],d.prototype,"tooltipVisible",void 0),(0,Dt.Cg)([on.sH],d.prototype,"currentDirection",void 0),d})();const Xg=class Qg extends Kg{connectedCallback(){super.connectedCallback(),wt.pfK.setValueFor(this,wt.Tkp)}}.compose({baseName:"tooltip",baseClass:Kg,template:(d,c)=>gi.q`
        ${(0,Ss.z)(n=>n.tooltipVisible,gi.q`
            <${d.tagFor(Zn)}
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
                ${(0,ls.K)("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${d.tagFor(Zn)}>
        `)}
    `,styles:(d,c)=>bi.A`
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
      border-radius: calc(${wt.PbG} * 1px);
      border: calc(${wt.XAH} * 1px) solid ${wt.ppm};
      background: ${wt.pfK};
      color: ${wt.lHw};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${Is.Ah}
      white-space: nowrap;
      box-shadow: ${Bh.tf};
    }

    ${d.tagFor(Zn)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${d.tagFor(Zn)}.right,
    ${d.tagFor(Zn)}.left {
      flex-direction: column;
    }

    ${d.tagFor(Zn)}.top .tooltip::after,
    ${d.tagFor(Zn)}.bottom .tooltip::after,
    ${d.tagFor(Zn)}.left .tooltip::after,
    ${d.tagFor(Zn)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${wt.pfK};
      border-top: calc(${wt.XAH} * 1px) solid ${wt.ppm};
      border-left: calc(${wt.XAH} * 1px) solid ${wt.ppm};
      position: absolute;
    }

    ${d.tagFor(Zn)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${d.tagFor(Zn)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${d.tagFor(Zn)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${d.tagFor(Zn)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${d.tagFor(Zn)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${d.tagFor(Zn)}.left .tooltip {
      margin-right: 12px;
    }

    ${d.tagFor(Zn)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${d.tagFor(Zn)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors((0,As.mr)(bi.A`
        :host([disabled]) {
          opacity: 1;
        }
        ${d.tagFor(Zn)}.top .tooltip::after,
        ${d.tagFor(Zn)}.bottom .tooltip::after,
        ${d.tagFor(Zn)}.left .tooltip::after,
        ${d.tagFor(Zn)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }
      `))}),uc=Fc.compose({baseName:"divider",template:(d,c)=>gi.q`
    <template role="${n=>n.role}" aria-orientation="${n=>n.orientation}"></template>
`,styles:(d,c)=>bi.A`
    ${(0,qo.V)("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${wt.XAH} * 1px) solid ${wt.hb6};
    }

    :host([orientation="vertical"]) {
      border: none;
      height: 100%;
      margin: 0 calc(${wt.vR1} * 1px);
      border-left: calc(${wt.XAH} * 1px) solid ${wt.hb6};
  }
  `});var Ao=function(d,c,n,o){var A,f=arguments.length,m=f<3?c:null===o?o=Object.getOwnPropertyDescriptor(c,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(d,c,n,o);else for(var F=d.length-1;F>=0;F--)(A=d[F])&&(m=(f<3?A(m):f>3?A(c,n,m):A(c,n))||m);return f>3&&m&&Object.defineProperty(c,n,m),m},Io=function(d,c){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,c)};let Jg=(()=>{class d extends Vs.N{static get styles(){return xf}get strings(){return Ua}get queryString(){return this._queryString}set queryString(n){this._queryString!==n&&(this._queryString=n,this.currentPage=1)}get from(){return(this.currentPage-1)*this.size}get size(){return this._size}set size(n){this._size=n>this.maxPageSize?this.maxPageSize:n}get searchEndpoint(){return"/search/query"}get maxPageSize(){return 1e3}constructor(){super(),this._size=10,this.entityTypes=["driveItem","listItem","site"],this.scopes=[],this.contentSources=[],this.version="v1.0",this.pagingMax=7,this.enableTopResults=!1,this.cacheEnabled=!1,this.cacheInvalidationPeriod=3e4,this.isRefreshing=!1,this.defaultFields=["webUrl","lastModifiedBy","lastModifiedDateTime","summary","displayName","name"],this.currentPage=1,this.renderContent=()=>{var n,o,f,m,A,F,ae,Se;let Me=null,We=null,Vt=null;return this.hasTemplate("header")&&(We=this.renderTemplate("header",this.response)),Vt=this.renderFooter(null===(o=null===(n=this.response)||void 0===n?void 0:n.value[0])||void 0===o?void 0:o.hitsContainers[0]),Me=this.response&&this.hasTemplate("default")?this.renderTemplate("default",this.response)||Lt.qy``:null!==(m=null===(f=this.response)||void 0===f?void 0:f.value[0])&&void 0!==m&&m.hitsContainers[0]?Lt.qy`${null===(Se=null===(ae=null===(F=null===(A=this.response)||void 0===A?void 0:A.value[0])||void 0===F?void 0:F.hitsContainers[0])||void 0===ae?void 0:ae.hits)||void 0===Se?void 0:Se.map(Yt=>this.renderResult(Yt))}`:this.hasTemplate("no-data")?this.renderTemplate("no-data",null):Lt.qy``,Lt.qy`
      ${We}
      <div class="search-results">
        ${Me}
      </div>
      ${Vt}`},this.renderLoading=()=>this.renderTemplate("loading",null)||Lt.qy`
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
       `,this.onFirstPageClick=()=>{this.currentPage=1,this.scrollToFirstResult()},this.onPageBackClick=()=>{this.currentPage--,this.scrollToFirstResult()},this.onPageNextClick=()=>{this.currentPage++,this.scrollToFirstResult()}}args(){return[this.providerState,this.queryString,this.queryTemplate,this.entityTypes,this.contentSources,this.scopes,this.version,this.size,this.fetchThumbnail,this.fields,this.enableTopResults,this.currentPage]}refresh(n=!1){this.isRefreshing=!0,n&&this.clearState(),this._task.run()}clearState(){this.response=null}loadState(){var n,o,f,m,A,F;return function(d,c,n,o){return new(n||(n=Promise))(function(m,A){function F(Me){try{Se(o.next(Me))}catch(We){A(We)}}function ae(Me){try{Se(o.throw(Me))}catch(We){A(We)}}function Se(Me){Me.done?m(Me.value):function f(m){return m instanceof n?m:new n(function(A){A(m)})}(Me.value).then(F,ae)}Se((o=o.apply(d,c||[])).next())})}(this,void 0,void 0,function*(){const ae=Qi.b.globalProvider;if(this.error=null,ae&&ae.state===Bi.HJ.SignedIn){if(this.queryString){try{const Se=this.getRequestOptions();let Me;const We=JSON.stringify({endpoint:`${this.version}${this.searchEndpoint}`,requestOptions:Se});let Vt=null;if(this.shouldRetrieveCache()){Me=Fo._.getCache(Zr.j.search,Zr.j.search.stores.responses);const Yt=(0,ur.jE)()?yield Me.getValue(We):null;Yt&&(0,ur.jD)(this.cacheInvalidationPeriod)>Date.now()-Yt.timeCached&&(Vt=JSON.parse(Yt.response))}if(!Vt){const Yt=ae.graph.forComponent(this);let rn=Yt.api(this.searchEndpoint).version(this.version);if(!(null===(n=this.scopes)||void 0===n)&&n.length&&(rn=rn.middlewareOptions((0,Cr.F)(this.scopes))),Vt=yield rn.post({requests:[Se]}),this.fetchThumbnail){const bn=Yt.createBatch(),ai=Rl.fromGraph(Yt).createBatch(),Ni=null!==(o=Vt.value)&&void 0!==o&&o.length&&null!==(f=Vt.value[0].hitsContainers)&&void 0!==f&&f.length&&null!==(A=null===(m=Vt.value[0].hitsContainers[0])||void 0===m?void 0:m.hits)&&void 0!==A?A:[];for(const hr of Ni){const Vi=hr.resource;(Vi.size>0||null!==(F=Vi.webUrl)&&void 0!==F&&F.endsWith(".aspx"))&&("#microsoft.graph.driveItem"===Vi["@odata.type"]||"#microsoft.graph.listItem"===Vi["@odata.type"])&&("#microsoft.graph.listItem"===Vi["@odata.type"]?ai.get(hr.hitId.toString(),`/sites/${Vi.parentReference.siteId}/pages/${Vi.id}`):bn.get(hr.hitId.toString(),`/drives/${Vi.parentReference.driveId}/items/${Vi.id}/thumbnails/0/medium`))}const Hi=hr=>{if(hr&&hr.size>0)for(const[Vi,ma]of hr){const to=Vt.value[0].hitsContainers[0].hits[Vi];to.resource.thumbnail="#microsoft.graph.listItem"===to.resource["@odata.type"]?{url:ma.content.thumbnailWebUrl}:{url:ma.content.url}}};try{Hi(yield bn.executeAll()),Hi(yield ai.executeAll())}catch{}}this.shouldUpdateCache()&&Vt&&(Me=Fo._.getCache(Zr.j.search,Zr.j.search.stores.responses),yield Me.putValue(We,{response:JSON.stringify(Vt)}))}(0,Ih.a)(this.response,Vt)||(this.response=Vt)}catch(Se){this.error=Se}this.response&&(this.error=null)}else this.response=null;this.isRefreshing=!1,this.fireCustomEvent("dataChange",{response:this.response,error:this.error})}})}renderResult(n){const o=this.getResourceType(n.resource);if(this.hasTemplate(`result-${o}`))return this.renderTemplate(`result-${o}`,n,n.hitId);switch(n.resource["@odata.type"]){case"#microsoft.graph.driveItem":return this.renderDriveItem(n);case"#microsoft.graph.site":return this.renderSite(n);case"#microsoft.graph.person":return this.renderPerson(n);case"#microsoft.graph.drive":case"#microsoft.graph.list":return this.renderList(n);case"#microsoft.graph.listItem":return this.renderListItem(n);case"#microsoft.graph.search.bookmark":return this.renderBookmark(n);case"#microsoft.graph.search.acronym":return this.renderAcronym(n);case"#microsoft.graph.search.qna":return this.renderQnA(n);default:return this.renderDefault(n)}}renderFooter(n){if(this.pagingRequired(n)){const o=this.getActivePages(n.total);return Lt.qy`
        <div class="search-results-pages">
          ${this.renderPreviousPage()}
          ${this.renderFirstPage(o)}
          ${this.renderAllPages(o)}
          ${this.renderNextPage()}
        </div>
      `}}pagingRequired(n){return n?.moreResultsAvailable||this.currentPage*this.size<n?.total}getActivePages(n){const f=[],m=(()=>{const A=this.currentPage-Math.floor(this.pagingMax/2)-1;return A>=Math.floor(this.pagingMax/2)?A:0})();if(m+1>this.pagingMax-this.currentPage||this.pagingMax===this.currentPage)for(let A=m+1;A<Math.ceil(n/this.size)&&A<this.pagingMax+(this.currentPage-1)&&f.length<this.pagingMax-2;++A)f.push(A+1);else for(let A=m;A<this.pagingMax;++A)f.push(A+1);return f}renderAllPages(n){return Lt.qy`
      ${n.map(o=>Lt.qy`
            <fluent-button
              title="${Ua.page} ${o}"
              appearance="stealth"
              class="${o===this.currentPage?"search-results-page-active":"search-results-page"}"
              @click="${()=>this.onPageClick(o)}">
                ${o}
            </fluent-button>`)}`}renderFirstPage(n){return Lt.qy`
      ${n.some(o=>1===o)?Lt.s6:Lt.qy`
              <fluent-button
                 title="${Ua.page} 1"
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
              </fluent-button>`:Lt.s6}`}getDotButtonTitle(){return`${Ua.back} ${Math.ceil(this.pagingMax/2)} ${Ua.pages}`}renderPreviousPage(){return this.currentPage>1?Lt.qy`
          <fluent-button
            appearance="stealth"
            class="search-results-page"
            title="${Ua.back}"
            @click="${this.onPageBackClick}">
              ${(0,Kn.r)(Kn.A.ChevronLeft)}
            </fluent-button>`:Lt.s6}renderNextPage(){return this.isLastPage()?Lt.s6:Lt.qy`
          <fluent-button
            appearance="stealth"
            class="search-results-page"
            title="${Ua.next}"
            aria-label="${Ua.next}"
            @click="${this.onPageNextClick}">
              ${(0,Kn.r)(Kn.A.ChevronRight)}
            </fluent-button>`}onPageClick(n){this.currentPage=n,this.scrollToFirstResult()}isLastPage(){return this.currentPage===Math.ceil(this.response.value[0].hitsContainers[0].total/this.size)}scrollToFirstResult(){this.renderRoot.querySelector(".search-results").scrollIntoView({block:"start",behavior:"smooth"})}getResourceType(n){return n["@odata.type"].split(".").pop()}renderDriveItem(n){var o,f;const m=n.resource;return Ji.Q`
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
            <a href="${m.webUrl}?Web=1" target="_blank">${(0,ur.wJ)(m.name)}</a>
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
              &nbsp; ${Ua.modified} ${(0,ur.h3)(new Date(m.lastModifiedDateTime))}
            </div>
          </div>
          <div class="search-result-summary" .innerHTML="${(0,ur.ez)(n.summary)}"></div>
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
          <div class="search-result-summary" .innerHTML="${(0,ur.ez)(n.summary)}"></div>
        </div>
      </div>
      <fluent-divider></fluent-divider>
    `}renderList(n){const o=n.resource;return Ji.Q`
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
              ${(0,ur.wJ)(o.name||(0,ur.x8)(o.webUrl))}
            </a>
          </div>
          <div class="search-result-summary" .innerHTML="${(0,ur.ez)(n.summary)}"></div>
        </div>
      </div>
      <fluent-divider></fluent-divider>
    `}renderListItem(n){var o,f;const m=n.resource;return Ji.Q`
      <div class="search-result-grid">
        <div class="search-result-icon">
          ${m.webUrl.endsWith(".aspx")?(0,Kn.r)(Kn.A.News):(0,Kn.r)(Kn.A.FileOuter)}
        </div>
        <div class="search-result-content">
          <div class="search-result-name">
            <a href="${m.webUrl}?Web=1" target="_blank">
              ${(0,ur.wJ)(m.name||(0,ur.x8)(m.webUrl))}
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
              &nbsp; ${Ua.modified} ${(0,ur.h3)(new Date(m.lastModifiedDateTime))}
            </div>
          </div>
          <div class="search-result-summary" .innerHTML="${(0,ur.ez)(n.summary)}"></div>
        </div>
        ${(null===(o=m.thumbnail)||void 0===o?void 0:o.url)&&Lt.qy`
          <div class="search-result-thumbnail">
            <a href="${m.webUrl}" target="_blank"><img alt="${(0,ur.wJ)(m.name||(0,ur.x8)(m.webUrl))}" src="${(null===(f=m.thumbnail)||void 0===f?void 0:f.url)||Lt.s6}" /></a>
          </div>`}
      </div>
      <fluent-divider></fluent-divider>
    `}renderPerson(n){return Ji.Q`
      <div class="search-result">
        <mgt-person
          view="fourlines"
          person-query=${n.resource.userPrincipalName}
          person-card="hover"
          show-presence="true">
        </mgt-person>
      </div>
      <fluent-divider></fluent-divider>
    `}renderBookmark(n){return this.renderAnswer(n,Kn.A.DoubleBookmark)}renderAcronym(n){return this.renderAnswer(n,Kn.A.BookOpen)}renderQnA(n){return this.renderAnswer(n,Kn.A.BookQuestion)}renderAnswer(n,o){const f=n.resource;return Lt.qy`
      <div class="search-result-grid search-result-answer">
        <div class="search-result-icon">
          ${(0,Kn.r)(o)}
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
    `}getResourceUrl(n){return n.webUrl||n.webLink||null}getResourceName(n){return n.displayName||n.subject||(0,ur.wJ)(n.name)}getResultSummary(n){var o;return(0,ur.ez)(n.summary||(null===(o=n.resource)||void 0===o?void 0:o.description)||null)}getResourceIcon(n){switch(n["@odata.type"]){case"#microsoft.graph.site":return(0,Kn.r)(Kn.A.Globe);case"#microsoft.graph.message":return(0,Kn.r)(Kn.A.Email);case"#microsoft.graph.event":return(0,Kn.r)(Kn.A.Event);case"microsoft.graph.chatMessage":return(0,Kn.r)(Kn.A.SmallChat);default:return(0,Kn.r)(Kn.A.FileOuter)}}shouldRetrieveCache(){return(0,ur.jE)()&&this.cacheEnabled&&!this.isRefreshing}shouldUpdateCache(){return(0,ur.jE)()&&this.cacheEnabled}getRequestOptions(){const n={entityTypes:this.entityTypes,query:{queryString:this.queryString},from:this.from?this.from:void 0,size:this.size?this.size:void 0,fields:this.getFields(),enableTopResults:this.enableTopResults?this.enableTopResults:void 0};return this.entityTypes.includes("externalItem")&&(n.contentSources=this.contentSources),"beta"===this.version&&(n.query.queryTemplate=this.queryTemplate?this.queryTemplate:void 0),n}getFields(){if(this.fields)return this.defaultFields.concat(this.fields)}}return Ao([(0,Mt.MZ)({attribute:"query-string",type:String}),Io("design:type",String),Io("design:paramtypes",[String])],d.prototype,"queryString",null),Ao([(0,Mt.MZ)({attribute:"query-template",type:String}),Io("design:type",String)],d.prototype,"queryTemplate",void 0),Ao([(0,Mt.MZ)({attribute:"entity-types",converter:c=>c.split(",").map(n=>n.trim()),type:String}),Io("design:type",Array)],d.prototype,"entityTypes",void 0),Ao([(0,Mt.MZ)({attribute:"scopes",converter:(c,n)=>c?c.toLowerCase().split(","):null}),Io("design:type",Array)],d.prototype,"scopes",void 0),Ao([(0,Mt.MZ)({attribute:"content-sources",converter:(c,n)=>c?c.toLowerCase().split(","):null}),Io("design:type",Array)],d.prototype,"contentSources",void 0),Ao([(0,Mt.MZ)({attribute:"version",reflect:!0,type:String}),Io("design:type",Object)],d.prototype,"version",void 0),Ao([(0,Mt.MZ)({attribute:"size",reflect:!0,type:Number}),Io("design:type",Number),Io("design:paramtypes",[Object])],d.prototype,"size",null),Ao([(0,Mt.MZ)({attribute:"paging-max",reflect:!0,type:Number}),Io("design:type",Object)],d.prototype,"pagingMax",void 0),Ao([(0,Mt.MZ)({attribute:"fetch-thumbnail",type:Boolean}),Io("design:type",Boolean)],d.prototype,"fetchThumbnail",void 0),Ao([(0,Mt.MZ)({attribute:"fields",converter:c=>c.split(",").map(n=>n.trim()),type:String}),Io("design:type",Array)],d.prototype,"fields",void 0),Ao([(0,Mt.MZ)({attribute:"enable-top-results",reflect:!0,type:Boolean}),Io("design:type",Object)],d.prototype,"enableTopResults",void 0),Ao([(0,Mt.MZ)({attribute:"cache-enabled",reflect:!0,type:Boolean}),Io("design:type",Object)],d.prototype,"cacheEnabled",void 0),Ao([(0,Mt.MZ)({attribute:"cache-invalidation-period",reflect:!0,type:Number}),Io("design:type",Object)],d.prototype,"cacheInvalidationPeriod",void 0),Ao([(0,Mt.wk)(),Io("design:type",Object)],d.prototype,"response",void 0),Ao([(0,Mt.MZ)({attribute:!1}),Io("design:type",Object)],d.prototype,"currentPage",void 0),d})();const Fd=()=>{(0,da.sN)(),(0,up.registerMgtPersonCardComponent)(),(0,Ko.E)(Xd.z1),ld(),(0,zo.N)("agenda",ov),kh(),(0,Ko.E)(dv,hv.m9,tc.zi,Xd.z1),(0,Jd.r)(),(0,da.sN)(),(0,zo.N)("login",vp),Mc(),ld(),(0,Ko.E)(Ml,jh,xl.oR,tc.zi,Np.c,Lp._0),(0,Ko.E)(lu,mu,tc.zi),(0,zo.N)("arrow-options",rg),(0,Ko.E)(lu,mu,tc.zi),(0,zo.N)("dot-options",Jv),(0,Jd.r)(),ld(),Mc(),(0,zo.N)("planner",lf),(0,Ko.E)(df,o0,Xd.z1,di,pf,xl.oR),(0,tu.i)(),(0,zo.N)("teams-channel-picker",d0),(0,Ko.E)(Np.c,f0,tc.zi),Cf(),(0,zo.N)("todo",Fg),(0,$g.R)(),(0,Nd.x)(),Cf(),(0,Ko.E)(bf,jh),(0,tu.i)(),kh(),(0,zo.N)("taxonomy-picker",P0),(0,Ko.E)(Ld),(0,zo.N)("theme-toggle",Qc),(0,Ko.E)(Df),(0,zo.N)("search-box",Gr),(0,Ko.E)(Lp._0,tc.zi,Xg,uc),(0,$g.R)(),(0,da.sN)(),(0,zo.N)("search-results",Jg),(0,tu.i)()};let Rf=(()=>{class d{constructor(n){this.authService=n}initializeMgt(){Qi.b.globalProvider=new dp({publicClientApplication:this.authService.instance}),Fd()}static#e=this.\u0275fac=function(o){return new(o||d)(s.KVO(Be))};static#t=this.\u0275prov=s.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})();function Ll(d,c){1&d&&s.nrm(0,"app-sidebar")}let Bu=(()=>{class d{constructor(n,o,f,m,A){this.authService=n,this.msalBroadcastService=o,this.mgtService=f,this.accountService=m,this.userService=A,this.isAuthenticated=!1,this._destroying$=new H.B}ngOnInit(){this.authService.handleRedirectObservable().subscribe(),this.msalBroadcastService.inProgress$.pipe((0,j.p)(n=>n===E.T$.None),(0,U.Q)(this._destroying$)).subscribe(()=>{this.isAuthenticated=this.authService.instance.getAllAccounts().length>0,this.isAuthenticated&&(this.accountService.checkAndSetActiveAccount(),this.userService.getBackendUserProfile().pipe((0,te.s)(1)).subscribe(),this.mgtService.initializeMgt())})}ngOnDestroy(){this._destroying$.next(void 0),this._destroying$.complete()}static#e=this.\u0275fac=function(o){return new(o||d)(s.rXU(Be),s.rXU(Le),s.rXU(Rf),s.rXU(Nr),s.rXU(Nt.DL))};static#t=this.\u0275cmp=s.VBU({type:d,selectors:[["app-root"]],standalone:!0,features:[s.aNF],decls:6,vars:1,consts:[[1,"p-5","mx-auto","container"]],template:function(o,f){1&o&&(s.nrm(0,"app-nav"),s.j41(1,"main"),s.DNE(2,Ll,1,0,"app-sidebar"),s.j41(3,"div",0),s.nrm(4,"router-outlet"),s.k0s()(),s.nrm(5,"app-footer")),2&o&&(s.R7$(2),s.vxM(2,f.isAuthenticated?2:-1))},dependencies:[oe.MD,le.iI,le.n3,wc,Qt,Ai],encapsulation:2})}return d})();x.production&&(0,s.SmG)(),(0,a.B8)(Bu,D).catch(d=>console.error(d))},7043:(rt,pe,h)=>{h.d(pe,{zi:()=>ve});var a=h(1635),s=h(9808),x=h(3043),y=h(9953),E=h(1589),O=h(633),_=h(9605),S=h(9760),B=h(5778),R=h(6009),W=h(2622),H=h(9457);const Q=":not([disabled])",I="[disabled]",ve=(()=>{class de extends x.${appearanceChanged($,Y){$!==Y&&(this.classList.add(Y),this.classList.remove($))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const $=this.defaultSlottedContent.filter(Y=>Y.nodeType===Node.ELEMENT_NODE);1===$.length&&$[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}return(0,a.Cg)([s.CF],de.prototype,"appearance",void 0),de})().compose({baseName:"button",baseClass:x.$,template:(de,z)=>y.q`
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
        ${(0,_.LT)(de,z)}
        <span class="content" part="content">
            <slot ${(0,O.e)("defaultSlottedContent")}></slot>
        </span>
        ${(0,_.aO)(de,z)}
    </button>
`,styles:(de,z)=>S.A`
    :host(${Q}) .control {
      cursor: pointer;
    }

    :host(${I}) .control {
      cursor: ${B.Z};
    }

    @media (forced-colors: none) {
      :host(${I}) .control {
        opacity: ${H.qB4};
      }
    }

    ${(0,R.wQ)(de,z,Q,I)}
  `.withBehaviors((0,W.f)("neutral",(0,R._9)(de,z,Q,I)),(0,W.f)("accent",(0,R.Vw)(de,z,Q,I)),(0,W.f)("lightweight",(0,R.ZI)(de,z,Q,I)),(0,W.f)("outline",(0,R.LA)(de,z,Q,I)),(0,W.f)("stealth",(0,R.ss)(de,z,Q,I))),shadowOptions:{delegatesFocus:!0}})},5409:(rt,pe,h)=>{h.d(pe,{z1:()=>de});var a=h(1635),s=h(4632);class x extends s.g{}var y=h(4645),E=h(9953),_=h(4192),b=h(9808),S=h(3595),B=h(9457),R=h(4585),W=h(9347),H=h(9760),Q=h(8322),I=h(4954),X=h(3226),re=h(2783);const de=(()=>{class $ extends x{cardFillColorChanged(te,j){if(j){const le=(0,S.Hs)(j);null!==le&&(this.neutralPaletteSource=j,B.pfK.setValueFor(this,R.q.create(le.r,le.g,le.b)))}}neutralPaletteSourceChanged(te,j){if(j){const le=(0,S.Hs)(j),G=R.q.create(le.r,le.g,le.b);B.roJ.setValueFor(this,W.p.create(G))}}handleChange(te,j){this.cardFillColor||B.pfK.setValueFor(this,le=>B.M3E.getValueFor(le).evaluate(le,B.pfK.getValueFor(te)).rest)}connectedCallback(){super.connectedCallback();const te=(0,y.Z)(this);if(te){const j=_.cP.getNotifier(te);j.subscribe(this,"fillColor"),j.subscribe(this,"neutralPalette"),this.handleChange(te,"fillColor")}}}return(0,a.Cg)([(0,b.CF)({attribute:"card-fill-color",mode:"fromView"})],$.prototype,"cardFillColor",void 0),(0,a.Cg)([(0,b.CF)({attribute:"neutral-palette-source",mode:"fromView"})],$.prototype,"neutralPaletteSource",void 0),$})().compose({baseName:"card",baseClass:x,template:($,Y)=>E.q`
    <slot></slot>
`,styles:($,Y)=>H.A`
    ${(0,Q.V)("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${B.pfK};
      color: ${B.lHw};
      border: calc(${B.XAH} * 1px) solid ${B.ppm};
      border-radius: calc(${B.JUW} * 1px);
      box-shadow: ${re.eq};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors((0,I.mr)(H.A`
        :host {
          background: ${X.A.Canvas};
          color: ${X.A.CanvasText};
        }
      `))})},9684:(rt,pe,h)=>{h.d(pe,{c:()=>te});var a=h(742),s=h(9808),x=h(4192),y=h(7153),E=h(8746),O=h(4632);class _ extends O.g{}class b extends((0,E.dx)(_)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let S=(()=>{class le extends b{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=L=>{this.readOnly||L.key!==y.gG||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.clickHandler=L=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}return(0,a.Cg)([(0,s.CF)({attribute:"readonly",mode:"boolean"})],le.prototype,"readOnly",void 0),(0,a.Cg)([x.sH],le.prototype,"defaultSlottedNodes",void 0),(0,a.Cg)([x.sH],le.prototype,"indeterminate",void 0),le})();var B=h(9953),R=h(633),H=h(9760),Q=h(8322),I=h(4932),X=h(5778),re=h(4954),ve=h(3226),oe=h(4583),de=h(9457),z=h(9709),$=h(5532);const te=S.compose({baseName:"checkbox",template:(le,G)=>B.q`
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
                ${G.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${G.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${L=>L.defaultSlottedNodes&&L.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${(0,R.e)("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(le,G)=>H.A`
    ${(0,Q.V)("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${oe.D} / 2 + ${de.vR1}) * 1px);
      height: calc((${oe.D} / 2 + ${de.vR1}) * 1px);
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
      ${z.Ah}
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

    :host(:${I.N}) .control {
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
      cursor: ${X.Z};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${de.qB4};
    }
  `.withBehaviors((0,re.mr)(H.A`
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
        :host(:${I.N}) .control {
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
      `)),checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',indeterminateIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>\n    </svg>\n  '})},9347:(rt,pe,h)=>{h.d(pe,{p:()=>z});var a=h(4219),s=h(6691),x=h(7591),y=h(9467),E=h(1379);function O(Y,te,j){return isNaN(Y)||Y<=0?te:Y>=1?j:new y.M((0,a.Cc)(Y,te.r,j.r),(0,a.Cc)(Y,te.g,j.g),(0,a.Cc)(Y,te.b,j.b),(0,a.Cc)(Y,te.a,j.a))}var Q=h(4585);function I(Y,te,j=0,le=Y.length-1){if(le===j)return Y[j];const G=Math.floor((le-j)/2)+j;return te(Y[G])?I(Y,te,j,G):I(Y,te,G+1,le)}var X=h(9731),re=h(9163);const ve={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1},z=Object.freeze({create:function oe(Y,te,j){return z.from("number"==typeof Y?Q.q.create(Y,te,j):Y)},from:function de(Y,te){return(0,Q.m)(Y)?$.from(Y,te):$.from(Q.q.create(Y.r,Y.g,Y.b),te)}});class ${constructor(te,j){this.closestIndexCache=new Map,this.source=te,this.swatches=j,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(te,j,le,G){void 0===le&&(le=this.closestIndexOf(te));let L=this.swatches;const P=this.lastIndex;let ee=le;return void 0===G&&(G=(0,X.F)(te)),-1===G&&(L=this.reversedSwatches,ee=P-ee),I(L,ge=>(0,re.v)(te,ge)>=j,ee,P)}get(te){return this.swatches[te]||this.swatches[(0,a.qE)(te,0,this.lastIndex)]}closestIndexOf(te){if(this.closestIndexCache.has(te.relativeLuminance))return this.closestIndexCache.get(te.relativeLuminance);let j=this.swatches.indexOf(te);if(-1!==j)return this.closestIndexCache.set(te.relativeLuminance,j),j;const le=this.swatches.reduce((G,L)=>Math.abs(L.relativeLuminance-te.relativeLuminance)<Math.abs(G.relativeLuminance-te.relativeLuminance)?L:G);return j=this.swatches.indexOf(le),this.closestIndexCache.set(te.relativeLuminance,j),j}static saturationBump(te,j){const G=(0,s.SU)(te).s,L=(0,s.SU)(j);if(L.s<G){const P=new x.D(L.h,G,L.l);return(0,s.QX)(P)}return j}static ramp(te){const j=te/100;return j>.5?(j-.5)/.5:2*j}static createHighResolutionPalette(te){const j=[],le=(0,s.mi)(y.M.fromObject(te).roundToPrecision(4)),G=(0,s.eK)(new E.h(0,le.a,le.b)).clamp().roundToPrecision(4),L=(0,s.eK)(new E.h(50,le.a,le.b)).clamp().roundToPrecision(4),P=(0,s.eK)(new E.h(100,le.a,le.b)).clamp().roundToPrecision(4),ee=new y.M(0,0,0),Z=new y.M(1,1,1),ge=P.equalValue(Z)?0:14,Be=G.equalValue(ee)?0:14;for(let Le=100+ge;Le>=0-Be;Le-=.5){let et;et=Le<0?O(Le/Be+1,ee,G):Le<=50?O($.ramp(Le),G,L):Le<=100?O($.ramp(Le),L,P):O((Le-100)/ge,P,Z),et=$.saturationBump(L,et).roundToPrecision(4),j.push(Q.q.from(et))}return new $(te,j)}static adjustEnd(te,j,le,G){const L=-1===G?j.swatches:j.reversedSwatches,P=ge=>{const Be=j.closestIndexOf(ge);return 1===G?j.lastIndex-Be:Be};1===G&&le.reverse();const ee=te(le[le.length-2]);if((0,a.l)((0,re.v)(le[le.length-1],le[le.length-2]),2)<ee){le.pop();const Be=P(j.colorContrast(L[j.lastIndex],ee,void 0,G)),Le=P(le[le.length-2]);let Pe=1;for(let se=le.length-(Be-Le)-1;se<le.length;se++){const Qe=P(le[se]);le[se]=L[se===le.length-1?j.lastIndex:Qe+Pe],Pe++}}1===G&&le.reverse()}static createColorPaletteByContrast(te,j){const le=$.createHighResolutionPalette(te),G=ee=>(0,a.l)(j.stepContrast+j.stepContrast*(1-ee.relativeLuminance)*j.stepContrastRamp,2),L=[];let P=j.preserveSource?te:le.swatches[0];L.push(P);do{const ee=G(P);P=le.colorContrast(P,ee,void 0,1),L.push(P)}while(P.relativeLuminance>0);if(j.preserveSource){P=te;do{const ee=G(P);P=le.colorContrast(P,ee,void 0,-1),L.unshift(P)}while(P.relativeLuminance<1)}return this.adjustEnd(G,le,L,-1),j.preserveSource&&this.adjustEnd(G,le,L,1),L}static from(te,j){const le=void 0===j?ve:Object.assign(Object.assign({},ve),j);return new $(te,Object.freeze($.createColorPaletteByContrast(te,le)))}}},4585:(rt,pe,h)=>{h.d(pe,{m:()=>E,q:()=>y});var a=h(9467),s=h(6691),x=h(9163);const y=Object.freeze({create:(_,b,S)=>new O(_,b,S),from:_=>new O(_.r,_.g,_.b)});function E(_){const b={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const S in b)if(typeof b[S]!=typeof _[S])return!1;return!0}class O extends a.M{constructor(b,S,B){super(b,S,B,1),this.toColorString=this.toStringHexRGB,this.contrast=x.v.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=(0,s.Z8)(this)}static fromObject(b){return new O(b.r,b.g,b.b)}}},4150:(rt,pe,h)=>{h.d(pe,{Z:()=>s,y:()=>x});var a=h(4585);function s(y){return a.q.create(y,y,y)}var x=function(y){return y[y.LightMode=.98]="LightMode",y[y.DarkMode=.15]="DarkMode",y}(x||{})},9731:(rt,pe,h)=>{h.d(pe,{F:()=>s});var a=h(8313);function s(x){return(0,a.H)(x)?-1:1}},8313:(rt,pe,h)=>{h.d(pe,{H:()=>s});const a=(-.1+Math.sqrt(.21))/2;function s(x){return x.relativeLuminance<=a}},9163:(rt,pe,h)=>{function a(s,x){return((s.relativeLuminance>x.relativeLuminance?s:x).relativeLuminance+.05)/((s.relativeLuminance>x.relativeLuminance?x:s).relativeLuminance+.05)}h.d(pe,{v:()=>a})},9457:(rt,pe,h)=>{h.d(pe,{fdT:()=>Yo,amQ:()=>Jo,KJd:()=>Bo,OS0:()=>Ar,IRh:()=>Sr,QL0:()=>Bl,iLG:()=>dl,YLI:()=>kr,W_m:()=>es,uB0:()=>ul,cDQ:()=>po,eNp:()=>Oo,enQ:()=>hi,Sss:()=>kn,li_:()=>Cn,OCo:()=>ti,PbG:()=>mn,Brd:()=>Rn,vR1:()=>vi,oWd:()=>zt,qB4:()=>tn,pfK:()=>qi,fFd:()=>bs,WNM:()=>Aa,vdx:()=>Pn,J_F:()=>ba,BgV:()=>gs,XKp:()=>Ho,l_5:()=>Ps,JUW:()=>fi,eQf:()=>Ro,X4G:()=>ts,XtK:()=>_o,MPS:()=>oo,wsB:()=>go,IpM:()=>Gn,ymW:()=>En,F_x:()=>Oe,jMl:()=>Ee,VYG:()=>ro,leE:()=>Ce,M3E:()=>yr,F7s:()=>wo,DKg:()=>jl,Vtk:()=>vc,Rgz:()=>mc,jIq:()=>ea,v8G:()=>Vl,wOW:()=>gl,UBo:()=>zl,oO8:()=>Ls,EE_:()=>ns,WlO:()=>pl,LIX:()=>ta,cRz:()=>Ga,g8A:()=>za,LnO:()=>Eo,lHw:()=>Pr,Tkp:()=>ya,roJ:()=>ci,MYG:()=>vl,FZQ:()=>wa,H7x:()=>Gl,Fly:()=>Wa,hb6:()=>vs,mbK:()=>Ca,WvW:()=>Ta,o_b:()=>Ea,ppm:()=>Ir,I21:()=>na,p4W:()=>Sa,vA6:()=>bl,nF5:()=>Bs,XAH:()=>Ln,Kgr:()=>Ii,$AV:()=>Xi,Z69:()=>un,kSN:()=>pt,dUM:()=>qe,FrF:()=>Et,tDF:()=>gt,wxg:()=>hn,e9J:()=>Kt,YVy:()=>In,BZ8:()=>At,vrI:()=>ni,TFp:()=>yi,Knw:()=>jn,Oc7:()=>$n,aVA:()=>Zi,PPT:()=>Kr,bcZ:()=>Wr,FrW:()=>Bt,onW:()=>Ne,weJ:()=>yt,_UC:()=>st,x3P:()=>Wt,Z67:()=>jt,X7g:()=>Ht,Ygb:()=>Un,uwi:()=>qt});var a=h(1859),s=h(9748),x=h(9347),y=h(3595),E=h(4585);const O=E.q.create(1,1,1),_=E.q.create(0,0,0),b=E.q.create(.5,.5,.5),S=(0,y.Hs)("#0078D4"),B=E.q.create(S.r,S.g,S.b);function W(J,St,yn,Hn,Pi){const Dr=Lr=>Lr.contrast(O)>=Pi?O:_,Ui=Dr(J),pi=Dr(St);return{rest:Ui,hover:pi,active:Ui.relativeLuminance===pi.relativeLuminance?Ui:Dr(yn),focus:Dr(Hn)}}var H=h(9467),Q=h(6691),se=h(9731),Qe=h(9163);class tt{constructor(St,yn,Hn,Pi){this.toColorString=()=>this.cssGradient,this.contrast=Qe.v.bind(null,this),this.createCSS=this.toColorString,this.color=new H.M(St,yn,Hn),this.cssGradient=Pi,this.relativeLuminance=(0,Q.Z8)(this.color),this.r=St,this.g=yn,this.b=Hn}static fromObject(St,yn){return new tt(St.r,St.g,St.b,yn)}}const ft=new H.M(0,0,0),Tt=new H.M(1,1,1);function ct(J,St,yn,Hn,Pi,Dr,Ui,pi,Vr=10,So=!1){const Lr=J.closestIndexOf(St);function os(Je){if(So){const Nt=J.closestIndexOf(St),kt=J.get(Nt),vn=Je.relativeLuminance<St.relativeLuminance?ft:Tt,ei=(0,Q.Ep)((0,y.Hs)(Je.toColorString()),(0,y.Hs)(kt.toColorString()),vn).roundToPrecision(2),li=function Pe(J,St){return St.a>=1?St:St.a<=0?new H.M(J.r,J.g,J.b,1):new H.M(St.a*St.r+(1-St.a)*J.r,St.a*St.g+(1-St.a)*J.g,St.a*St.b+(1-St.a)*J.b,1)}((0,y.Hs)(St.toColorString()),ei);return E.q.from(li)}return Je}void 0===pi&&(pi=(0,se.F)(St));const xa=Lr+pi*yn,T=xa+pi*(Hn-yn),N=xa+pi*(Pi-yn),D=xa+pi*(Dr-yn),U=-1===pi?0:100-Vr,be=-1===pi?Vr:100;function Re(Je,Nt){const kt=J.get(Je);if(Nt){const vn=J.get(Je+pi*Ui),ei=-1===pi?vn:kt,li=-1===pi?kt:vn,xr=`linear-gradient(${os(ei).toColorString()} ${U}%, ${os(li).toColorString()} ${be}%)`;return tt.fromObject(ei,xr)}return os(kt)}return{rest:Re(xa,!0),hover:Re(T,!0),active:Re(N,!1),focus:Re(D,!0)}}var ue=h(8313);function _e(J,St,yn,Hn,Pi,Dr,Ui,pi){null==pi&&(pi=(0,se.F)(St));const Vr=J.closestIndexOf(J.colorContrast(St,yn));return{rest:J.get(Vr+pi*Hn),hover:J.get(Vr+pi*Pi),active:J.get(Vr+pi*Dr),focus:J.get(Vr+pi*Ui)}}function Fe(J,St,yn,Hn,Pi,Dr,Ui){const pi=J.closestIndexOf(St);return null==Ui&&(Ui=(0,se.F)(St)),{rest:J.get(pi+Ui*yn),hover:J.get(pi+Ui*Hn),active:J.get(pi+Ui*Pi),focus:J.get(pi+Ui*Dr)}}function at(J,St,yn,Hn,Pi,Dr,Ui=void 0,pi,Vr,So,Lr,os=void 0){return(0,ue.H)(St)?Fe(J,St,pi,Vr,So,Lr,os):Fe(J,St,yn,Hn,Pi,Dr,Ui)}var fe=h(4150);function V(J,St){return J.closestIndexOf((0,fe.Z)(St))}function Ve(J,St,yn){return J.get(V(J,St)+-1*yn)}const{create:$e}=a.G;function Xe(J){return a.G.create({name:J,cssCustomPropertyName:null})}const zt=$e("direction").withDefault(s.O.ltr),tn=$e("disabled-opacity").withDefault(.3),kn=$e("base-height-multiplier").withDefault(8),Rn=($e("base-horizontal-spacing-multiplier").withDefault(3),$e("density").withDefault(0)),vi=$e("design-unit").withDefault(4),mn=$e("control-corner-radius").withDefault(4),fi=$e("layer-corner-radius").withDefault(8),Ln=$e("stroke-width").withDefault(1),Pn=$e("focus-stroke-width").withDefault(2),ti=$e("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),Qn=$e("font-weight").withDefault(400);function Nn(J){return St=>{const yn=J.getValueFor(St),Hn=Qn.getValueFor(St);if(yn.endsWith("px")){const Pi=Number.parseFloat(yn.replace("px",""));if(Pi<=12)return`"wght" ${Hn}, "opsz" 8`;if(Pi>24)return`"wght" ${Hn}, "opsz" 36`}return`"wght" ${Hn}, "opsz" 10.5`}}const Ii=$e("type-ramp-base-font-size").withDefault("14px"),un=$e("type-ramp-base-line-height").withDefault("20px"),Xi=$e("type-ramp-base-font-variations").withDefault(Nn(Ii)),pt=$e("type-ramp-minus-1-font-size").withDefault("12px"),Et=$e("type-ramp-minus-1-line-height").withDefault("16px"),qe=$e("type-ramp-minus-1-font-variations").withDefault(Nn(pt)),gt=$e("type-ramp-minus-2-font-size").withDefault("10px"),Kt=$e("type-ramp-minus-2-line-height").withDefault("14px"),hn=$e("type-ramp-minus-2-font-variations").withDefault(Nn(gt)),In=$e("type-ramp-plus-1-font-size").withDefault("16px"),ni=$e("type-ramp-plus-1-line-height").withDefault("22px"),At=$e("type-ramp-plus-1-font-variations").withDefault(Nn(In)),yi=$e("type-ramp-plus-2-font-size").withDefault("20px"),$n=$e("type-ramp-plus-2-line-height").withDefault("26px"),jn=$e("type-ramp-plus-2-font-variations").withDefault(Nn(yi)),Zi=$e("type-ramp-plus-3-font-size").withDefault("24px"),Wr=$e("type-ramp-plus-3-line-height").withDefault("32px"),Kr=$e("type-ramp-plus-3-font-variations").withDefault(Nn(Zi)),Bt=$e("type-ramp-plus-4-font-size").withDefault("28px"),yt=$e("type-ramp-plus-4-line-height").withDefault("36px"),Ne=$e("type-ramp-plus-4-font-variations").withDefault(Nn(Bt)),st=$e("type-ramp-plus-5-font-size").withDefault("32px"),jt=$e("type-ramp-plus-5-line-height").withDefault("40px"),Wt=$e("type-ramp-plus-5-font-variations").withDefault(Nn(st)),Ht=$e("type-ramp-plus-6-font-size").withDefault("40px"),qt=$e("type-ramp-plus-6-line-height").withDefault("52px"),Un=$e("type-ramp-plus-6-font-variations").withDefault(Nn(Ht)),Cn=$e("base-layer-luminance").withDefault(fe.y.LightMode),Dn=Xe("accent-fill-rest-delta").withDefault(0),ui=Xe("accent-fill-hover-delta").withDefault(-2),Fi=Xe("accent-fill-active-delta").withDefault(-5),Ri=Xe("accent-fill-focus-delta").withDefault(0),Di=Xe("accent-foreground-rest-delta").withDefault(0),He=Xe("accent-foreground-hover-delta").withDefault(3),ot=Xe("accent-foreground-active-delta").withDefault(-8),nt=Xe("accent-foreground-focus-delta").withDefault(0),Rt=Xe("neutral-fill-rest-delta").withDefault(-1),Pt=Xe("neutral-fill-hover-delta").withDefault(1),cn=Xe("neutral-fill-active-delta").withDefault(0),sn=Xe("neutral-fill-focus-delta").withDefault(0),ht=Xe("neutral-fill-input-rest-delta").withDefault(-1),vt=Xe("neutral-fill-input-hover-delta").withDefault(1),Ie=Xe("neutral-fill-input-active-delta").withDefault(0),je=Xe("neutral-fill-input-focus-delta").withDefault(-2),Ze=Xe("neutral-fill-input-alt-rest-delta").withDefault(2),dt=Xe("neutral-fill-input-alt-hover-delta").withDefault(4),Gt=Xe("neutral-fill-input-alt-active-delta").withDefault(6),Jt=Xe("neutral-fill-input-alt-focus-delta").withDefault(2),an=Xe("neutral-fill-layer-rest-delta").withDefault(-2),wn=Xe("neutral-fill-layer-hover-delta").withDefault(-3),pn=Xe("neutral-fill-layer-active-delta").withDefault(-3),Ci=Xe("neutral-fill-layer-alt-rest-delta").withDefault(-1),wi=Xe("neutral-fill-secondary-rest-delta").withDefault(3),vr=Xe("neutral-fill-secondary-hover-delta").withDefault(2),Ur=Xe("neutral-fill-secondary-active-delta").withDefault(1),Er=Xe("neutral-fill-secondary-focus-delta").withDefault(3),Fn=Xe("neutral-fill-stealth-rest-delta").withDefault(0),_t=Xe("neutral-fill-stealth-hover-delta").withDefault(3),p=Xe("neutral-fill-stealth-active-delta").withDefault(2),g=Xe("neutral-fill-stealth-focus-delta").withDefault(0),C=Xe("neutral-fill-strong-rest-delta").withDefault(0),q=Xe("neutral-fill-strong-hover-delta").withDefault(8),me=Xe("neutral-fill-strong-active-delta").withDefault(-5),ke=Xe("neutral-fill-strong-focus-delta").withDefault(0),ze=Xe("neutral-stroke-rest-delta").withDefault(8),It=Xe("neutral-stroke-hover-delta").withDefault(12),Ut=Xe("neutral-stroke-active-delta").withDefault(6),$t=Xe("neutral-stroke-focus-delta").withDefault(8),fn=Xe("neutral-stroke-control-rest-delta").withDefault(3),_n=Xe("neutral-stroke-control-hover-delta").withDefault(5),Bn=Xe("neutral-stroke-control-active-delta").withDefault(5),oi=Xe("neutral-stroke-control-focus-delta").withDefault(5),_i=Xe("neutral-stroke-divider-rest-delta").withDefault(4),xi=Xe("neutral-stroke-layer-rest-delta").withDefault(3),Tr=Xe("neutral-stroke-layer-hover-delta").withDefault(3),Br=Xe("neutral-stroke-layer-active-delta").withDefault(3),qr=Xe("neutral-stroke-strong-hover-delta").withDefault(0),rr=Xe("neutral-stroke-strong-active-delta").withDefault(0),Yi=Xe("neutral-stroke-strong-focus-delta").withDefault(0),Ro=$e("neutral-base-color").withDefault(b),ci=Xe("neutral-palette").withDefault(J=>x.p.from(Ro.getValueFor(J))),Yo=$e("accent-base-color").withDefault(B),Ki=Xe("accent-palette").withDefault(J=>x.p.from(Yo.getValueFor(J))),ho=Xe("neutral-layer-card-container-recipe").withDefault({evaluate:J=>Ve(ci.getValueFor(J),Cn.getValueFor(J),an.getValueFor(J))}),Co=($e("neutral-layer-card-container").withDefault(J=>ho.getValueFor(J).evaluate(J)),Xe("neutral-layer-floating-recipe").withDefault({evaluate:J=>function xe(J,St,yn){return J.get(V(J,St)+yn)}(ci.getValueFor(J),Cn.getValueFor(J),an.getValueFor(J))})),ya=$e("neutral-layer-floating").withDefault(J=>Co.getValueFor(J).evaluate(J)),Os=Xe("neutral-layer-1-recipe").withDefault({evaluate:J=>function ce(J,St){return J.get(V(J,St))}(ci.getValueFor(J),Cn.getValueFor(J))}),Mo=$e("neutral-layer-1").withDefault(J=>Os.getValueFor(J).evaluate(J)),Hr=Xe("neutral-layer-2-recipe").withDefault({evaluate:J=>Ve(ci.getValueFor(J),Cn.getValueFor(J),an.getValueFor(J))}),Zs=($e("neutral-layer-2").withDefault(J=>Hr.getValueFor(J).evaluate(J)),Xe("neutral-layer-3-recipe").withDefault({evaluate:J=>function Ct(J,St,yn){return J.get(V(J,St)+-1*yn*2)}(ci.getValueFor(J),Cn.getValueFor(J),an.getValueFor(J))})),ja=($e("neutral-layer-3").withDefault(J=>Zs.getValueFor(J).evaluate(J)),Xe("neutral-layer-4-recipe").withDefault({evaluate:J=>function it(J,St,yn){return J.get(V(J,St)+-1*yn*3)}(ci.getValueFor(J),Cn.getValueFor(J),an.getValueFor(J))})),qi=($e("neutral-layer-4").withDefault(J=>ja.getValueFor(J).evaluate(J)),$e("fill-color").withDefault(J=>Mo.getValueFor(J)));var fo=function(J){return J[J.normal=4.5]="normal",J[J.large=3]="large",J}(fo||{});const Js=Xe("accent-fill-recipe").withDefault({evaluate:(J,St)=>function Ke(J,St,yn,Hn,Pi,Dr,Ui,pi,Vr,So,Lr,os,xa,T){return(0,ue.H)(St)?_e(J,St,Vr,So,Lr,os,xa,T):_e(J,St,yn,Hn,Pi,Dr,Ui,pi)}(Ki.getValueFor(J),St||qi.getValueFor(J),5,Dn.getValueFor(J),ui.getValueFor(J),Fi.getValueFor(J),Ri.getValueFor(J),void 0,8,Dn.getValueFor(J),ui.getValueFor(J),Fi.getValueFor(J),Ri.getValueFor(J),void 0)}),Sr=$e("accent-fill-rest").withDefault(J=>Js.getValueFor(J).evaluate(J).rest),Ar=$e("accent-fill-hover").withDefault(J=>Js.getValueFor(J).evaluate(J).hover),Jo=$e("accent-fill-active").withDefault(J=>Js.getValueFor(J).evaluate(J).active),Bo=$e("accent-fill-focus").withDefault(J=>Js.getValueFor(J).evaluate(J).focus),io=Xe("foreground-on-accent-recipe").withDefault({evaluate:J=>W(Sr.getValueFor(J),Ar.getValueFor(J),Jo.getValueFor(J),Bo.getValueFor(J),fo.normal)}),Ps=$e("foreground-on-accent-rest").withDefault(J=>io.getValueFor(J).evaluate(J).rest),Ho=$e("foreground-on-accent-hover").withDefault(J=>io.getValueFor(J).evaluate(J).hover),ba=$e("foreground-on-accent-active").withDefault(J=>io.getValueFor(J).evaluate(J).active),gs=$e("foreground-on-accent-focus").withDefault(J=>io.getValueFor(J).evaluate(J).focus),Mi=Xe("accent-foreground-recipe").withDefault({evaluate:(J,St)=>_e(Ki.getValueFor(J),St||qi.getValueFor(J),9.5,Di.getValueFor(J),He.getValueFor(J),ot.getValueFor(J),nt.getValueFor(J))}),es=$e("accent-foreground-rest").withDefault(J=>Mi.getValueFor(J).evaluate(J).rest),kr=$e("accent-foreground-hover").withDefault(J=>Mi.getValueFor(J).evaluate(J).hover),Bl=$e("accent-foreground-active").withDefault(J=>Mi.getValueFor(J).evaluate(J).active),dl=$e("accent-foreground-focus").withDefault(J=>Mi.getValueFor(J).evaluate(J).focus),Rr=Xe("accent-stroke-control-recipe").withDefault({evaluate:(J,St)=>ct(ci.getValueFor(J),St||qi.getValueFor(J),-3,-3,-3,-3,10,1,void 0,!0)}),hi=$e("accent-stroke-control-rest").withDefault(J=>Rr.getValueFor(J).evaluate(J,Sr.getValueFor(J)).rest),Oo=$e("accent-stroke-control-hover").withDefault(J=>Rr.getValueFor(J).evaluate(J,Ar.getValueFor(J)).hover),ul=$e("accent-stroke-control-active").withDefault(J=>Rr.getValueFor(J).evaluate(J,Jo.getValueFor(J)).active),po=$e("accent-stroke-control-focus").withDefault(J=>Rr.getValueFor(J).evaluate(J,Bo.getValueFor(J)).focus),Mr=Xe("neutral-fill-recipe").withDefault({evaluate:(J,St)=>at(ci.getValueFor(J),St||qi.getValueFor(J),Rt.getValueFor(J),Pt.getValueFor(J),cn.getValueFor(J),sn.getValueFor(J),void 0,2,3,1,2,void 0)}),wo=$e("neutral-fill-rest").withDefault(J=>Mr.getValueFor(J).evaluate(J).rest),_o=$e("neutral-fill-hover").withDefault(J=>Mr.getValueFor(J).evaluate(J).hover),ts=$e("neutral-fill-active").withDefault(J=>Mr.getValueFor(J).evaluate(J).active),ro=($e("neutral-fill-focus").withDefault(J=>Mr.getValueFor(J).evaluate(J).focus),Xe("neutral-fill-input-recipe").withDefault({evaluate:(J,St)=>at(ci.getValueFor(J),St||qi.getValueFor(J),ht.getValueFor(J),vt.getValueFor(J),Ie.getValueFor(J),je.getValueFor(J),void 0,2,3,1,0,void 0)})),Ce=$e("neutral-fill-input-rest").withDefault(J=>ro.getValueFor(J).evaluate(J).rest),Ee=$e("neutral-fill-input-hover").withDefault(J=>ro.getValueFor(J).evaluate(J).hover),Oe=($e("neutral-fill-input-active").withDefault(J=>ro.getValueFor(J).evaluate(J).active),$e("neutral-fill-input-focus").withDefault(J=>ro.getValueFor(J).evaluate(J).focus)),lt=Xe("neutral-fill-input-alt-recipe").withDefault({evaluate:(J,St)=>at(ci.getValueFor(J),St||qi.getValueFor(J),Ze.getValueFor(J),dt.getValueFor(J),Gt.getValueFor(J),Jt.getValueFor(J),1,Ze.getValueFor(J),Ze.getValueFor(J)-dt.getValueFor(J),Ze.getValueFor(J)-Gt.getValueFor(J),Jt.getValueFor(J),1)}),En=$e("neutral-fill-input-alt-rest").withDefault(J=>lt.getValueFor(J).evaluate(J).rest),Gn=$e("neutral-fill-input-alt-hover").withDefault(J=>lt.getValueFor(J).evaluate(J).hover),oo=$e("neutral-fill-input-alt-active").withDefault(J=>lt.getValueFor(J).evaluate(J).active),go=$e("neutral-fill-input-alt-focus").withDefault(J=>lt.getValueFor(J).evaluate(J).focus),yr=Xe("neutral-fill-layer-recipe").withDefault({evaluate:(J,St)=>Fe(ci.getValueFor(J),St||qi.getValueFor(J),an.getValueFor(J),wn.getValueFor(J),pn.getValueFor(J),an.getValueFor(J),1)}),gc=($e("neutral-fill-layer-rest").withDefault(J=>yr.getValueFor(J).evaluate(J).rest),$e("neutral-fill-layer-hover").withDefault(J=>yr.getValueFor(J).evaluate(J).hover),$e("neutral-fill-layer-active").withDefault(J=>yr.getValueFor(J).evaluate(J).active),Xe("neutral-fill-layer-alt-recipe").withDefault({evaluate:(J,St)=>Fe(ci.getValueFor(J),St||qi.getValueFor(J),Ci.getValueFor(J),Ci.getValueFor(J),Ci.getValueFor(J),Ci.getValueFor(J))})),ea=($e("neutral-fill-layer-alt-rest").withDefault(J=>gc.getValueFor(J).evaluate(J).rest),Xe("neutral-fill-secondary-recipe").withDefault({evaluate:(J,St)=>Fe(ci.getValueFor(J),St||qi.getValueFor(J),wi.getValueFor(J),vr.getValueFor(J),Ur.getValueFor(J),Er.getValueFor(J))})),Vl=$e("neutral-fill-secondary-rest").withDefault(J=>ea.getValueFor(J).evaluate(J).rest),mc=$e("neutral-fill-secondary-hover").withDefault(J=>ea.getValueFor(J).evaluate(J).hover),jl=$e("neutral-fill-secondary-active").withDefault(J=>ea.getValueFor(J).evaluate(J).active),vc=$e("neutral-fill-secondary-focus").withDefault(J=>ea.getValueFor(J).evaluate(J).focus),ns=Xe("neutral-fill-stealth-recipe").withDefault({evaluate:(J,St)=>Fe(ci.getValueFor(J),St||qi.getValueFor(J),Fn.getValueFor(J),_t.getValueFor(J),p.getValueFor(J),g.getValueFor(J))}),pl=$e("neutral-fill-stealth-rest").withDefault(J=>ns.getValueFor(J).evaluate(J).rest),Ls=$e("neutral-fill-stealth-hover").withDefault(J=>ns.getValueFor(J).evaluate(J).hover),gl=$e("neutral-fill-stealth-active").withDefault(J=>ns.getValueFor(J).evaluate(J).active),zl=$e("neutral-fill-stealth-focus").withDefault(J=>ns.getValueFor(J).evaluate(J).focus),Fs=Xe("neutral-fill-strong-recipe").withDefault({evaluate:(J,St)=>_e(ci.getValueFor(J),St||qi.getValueFor(J),4.5,C.getValueFor(J),q.getValueFor(J),me.getValueFor(J),ke.getValueFor(J))}),Or=($e("neutral-fill-strong-rest").withDefault(J=>Fs.getValueFor(J).evaluate(J).rest),$e("neutral-fill-strong-hover").withDefault(J=>Fs.getValueFor(J).evaluate(J).hover),$e("neutral-fill-strong-active").withDefault(J=>Fs.getValueFor(J).evaluate(J).active),$e("neutral-fill-strong-focus").withDefault(J=>Fs.getValueFor(J).evaluate(J).focus),Xe("neutral-foreground-recipe").withDefault({evaluate:(J,St)=>_e(ci.getValueFor(J),St||qi.getValueFor(J),16,0,-19,-30,0)})),Pr=$e("neutral-foreground-rest").withDefault(J=>Or.getValueFor(J).evaluate(J).rest),Eo=$e("neutral-foreground-hover").withDefault(J=>Or.getValueFor(J).evaluate(J).hover),ta=$e("neutral-foreground-active").withDefault(J=>Or.getValueFor(J).evaluate(J).active),za=($e("neutral-foreground-focus").withDefault(J=>Or.getValueFor(J).evaluate(J).focus),Xe("neutral-foreground-hint-recipe").withDefault({evaluate:(J,St)=>function ie(J,St,yn){return J.colorContrast(St,yn)}(ci.getValueFor(J),St||qi.getValueFor(J),4.5)})),Ga=$e("neutral-foreground-hint").withDefault(J=>za.getValueFor(J).evaluate(J)),ms=Xe("neutral-stroke-recipe").withDefault({evaluate:(J,St)=>Fe(ci.getValueFor(J),St||qi.getValueFor(J),ze.getValueFor(J),It.getValueFor(J),Ut.getValueFor(J),$t.getValueFor(J))}),na=$e("neutral-stroke-rest").withDefault(J=>ms.getValueFor(J).evaluate(J).rest),Ca=$e("neutral-stroke-hover").withDefault(J=>ms.getValueFor(J).evaluate(J).hover),vl=$e("neutral-stroke-active").withDefault(J=>ms.getValueFor(J).evaluate(J).active),yl=($e("neutral-stroke-focus").withDefault(J=>ms.getValueFor(J).evaluate(J).focus),Xe("neutral-stroke-control-recipe").withDefault({evaluate:(J,St)=>ct(ci.getValueFor(J),St||qi.getValueFor(J),fn.getValueFor(J),_n.getValueFor(J),Bn.getValueFor(J),oi.getValueFor(J),5)})),Wa=$e("neutral-stroke-control-rest").withDefault(J=>yl.getValueFor(J).evaluate(J).rest),Gl=$e("neutral-stroke-control-hover").withDefault(J=>yl.getValueFor(J).evaluate(J).hover),wa=$e("neutral-stroke-control-active").withDefault(J=>yl.getValueFor(J).evaluate(J).active),$s=($e("neutral-stroke-control-focus").withDefault(J=>yl.getValueFor(J).evaluate(J).focus),Xe("neutral-stroke-divider-recipe").withDefault({evaluate:(J,St)=>function we(J,St,yn){return J.get(J.closestIndexOf(St)+(0,se.F)(St)*yn)}(ci.getValueFor(J),St||qi.getValueFor(J),_i.getValueFor(J))})),vs=$e("neutral-stroke-divider-rest").withDefault(J=>$s.getValueFor(J).evaluate(J)),_a=Xe("neutral-stroke-input-recipe").withDefault({evaluate:(J,St)=>function Te(J,St,yn,Hn,Pi,Dr,Ui,pi){const Vr=J.closestIndexOf(St),So=(0,se.F)(St),Lr=Vr+So*yn,os=Lr+So*(Hn-yn),xa=Lr+So*(Pi-yn),T=Lr+So*(Dr-yn),N=`calc(100% - ${pi})`;function D(U,be){const Re=J.get(U);if(be){const Je=J.get(U+So*Ui),Nt=`linear-gradient(${Re.toColorString()} ${N}, ${Je.toColorString()} ${N}, ${Je.toColorString()})`;return tt.fromObject(Re,Nt)}return Re}return{rest:D(Lr,!0),hover:D(os,!0),active:D(xa,!1),focus:D(T,!0)}}(ci.getValueFor(J),St||qi.getValueFor(J),fn.getValueFor(J),_n.getValueFor(J),Bn.getValueFor(J),oi.getValueFor(J),20,Ln.getValueFor(J)+"px")}),Ea=$e("neutral-stroke-input-rest").withDefault(J=>_a.getValueFor(J).evaluate(J).rest),Ta=$e("neutral-stroke-input-hover").withDefault(J=>_a.getValueFor(J).evaluate(J).hover),Us=($e("neutral-stroke-input-active").withDefault(J=>_a.getValueFor(J).evaluate(J).active),$e("neutral-stroke-input-focus").withDefault(J=>_a.getValueFor(J).evaluate(J).focus),Xe("neutral-stroke-layer-recipe").withDefault({evaluate:(J,St)=>Fe(ci.getValueFor(J),St||qi.getValueFor(J),xi.getValueFor(J),Tr.getValueFor(J),Br.getValueFor(J),xi.getValueFor(J))})),Ir=$e("neutral-stroke-layer-rest").withDefault(J=>Us.getValueFor(J).evaluate(J).rest),Vo=($e("neutral-stroke-layer-hover").withDefault(J=>Us.getValueFor(J).evaluate(J).hover),$e("neutral-stroke-layer-active").withDefault(J=>Us.getValueFor(J).evaluate(J).active),Xe("neutral-stroke-strong-recipe").withDefault({evaluate:(J,St)=>_e(ci.getValueFor(J),St||qi.getValueFor(J),5.5,0,qr.getValueFor(J),rr.getValueFor(J),Yi.getValueFor(J))})),Bs=$e("neutral-stroke-strong-rest").withDefault(J=>Vo.getValueFor(J).evaluate(J).rest),bl=$e("neutral-stroke-strong-hover").withDefault(J=>Vo.getValueFor(J).evaluate(J).hover),Sa=$e("neutral-stroke-strong-active").withDefault(J=>Vo.getValueFor(J).evaluate(J).active),wl=($e("neutral-stroke-strong-focus").withDefault(J=>Vo.getValueFor(J).evaluate(J).focus),Xe("focus-stroke-outer-recipe").withDefault({evaluate:J=>function Ot(J,St){return(0,ue.H)(St)?O:_}(ci.getValueFor(J),qi.getValueFor(J))})),Aa=$e("focus-stroke-outer").withDefault(J=>wl.getValueFor(J).evaluate(J)),_l=Xe("focus-stroke-inner-recipe").withDefault({evaluate:J=>function Ge(J,St,yn){return(0,ue.H)(St)?_:O}(Ki.getValueFor(J),qi.getValueFor(J),Aa.getValueFor(J))}),bs=$e("focus-stroke-inner").withDefault(J=>_l.getValueFor(J).evaluate(J)),oa=Xe("foreground-on-accent-large-recipe").withDefault({evaluate:J=>W(Sr.getValueFor(J),Ar.getValueFor(J),Jo.getValueFor(J),Bo.getValueFor(J),fo.large)}),ye=($e("foreground-on-accent-rest-large").withDefault(J=>oa.getValueFor(J).evaluate(J).rest),$e("foreground-on-accent-hover-large").withDefault(J=>oa.getValueFor(J).evaluate(J,Ar.getValueFor(J)).hover),$e("foreground-on-accent-active-large").withDefault(J=>oa.getValueFor(J).evaluate(J,Jo.getValueFor(J)).active),$e("foreground-on-accent-focus-large").withDefault(J=>oa.getValueFor(J).evaluate(J,Bo.getValueFor(J)).focus),$e("neutral-fill-inverse-rest-delta").withDefault(0)),Ye=$e("neutral-fill-inverse-hover-delta").withDefault(-3),Ft=$e("neutral-fill-inverse-active-delta").withDefault(7),Zt=$e("neutral-fill-inverse-focus-delta").withDefault(0),Ei=Xe("neutral-fill-inverse-recipe").withDefault({evaluate:(J,St)=>function Tn(J,St,yn,Hn,Pi,Dr){const Ui=(0,se.F)(St),pi=J.closestIndexOf(J.colorContrast(St,14)),Vr=pi+Ui*Math.abs(yn-Hn);let Lr,os;return(1===Ui?yn<Hn:Ui*yn>Ui*Hn)?(Lr=pi,os=Vr):(Lr=Vr,os=pi),{rest:J.get(Lr),hover:J.get(os),active:J.get(Lr+Ui*Pi),focus:J.get(Lr+Ui*Dr)}}(ci.getValueFor(J),St||qi.getValueFor(J),ye.getValueFor(J),Ye.getValueFor(J),Ft.getValueFor(J),Zt.getValueFor(J))});$e("neutral-fill-inverse-rest").withDefault(J=>Ei.getValueFor(J).evaluate(J).rest),$e("neutral-fill-inverse-hover").withDefault(J=>Ei.getValueFor(J).evaluate(J).hover),$e("neutral-fill-inverse-active").withDefault(J=>Ei.getValueFor(J).evaluate(J).active),$e("neutral-fill-inverse-focus").withDefault(J=>Ei.getValueFor(J).evaluate(J).focus)},882:(rt,pe,h)=>{h.d(pe,{m9:()=>Q});var a=h(862),s=h(9953),x=h(8287),O=h(9760),_=h(3226),b=h(8322),S=h(4954),B=h(4583),R=h(9457);const Q=class H extends a.z{}.compose({baseName:"progress-ring",template:(X,re)=>s.q`
    <template
        role="progressbar"
        aria-valuenow="${ve=>ve.value}"
        aria-valuemin="${ve=>ve.min}"
        aria-valuemax="${ve=>ve.max}"
        class="${ve=>ve.paused?"paused":""}"
    >
        ${(0,x.z)(ve=>"number"==typeof ve.value,s.q`
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
            `,s.q`
                <slot name="indeterminate" slot="indeterminate">
                    ${re.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(X,re)=>O.A`
    ${(0,b.V)("flex")} :host {
      align-items: center;
      height: calc(${B.D} * 1px);
      width: calc(${B.D} * 1px);
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
      stroke: ${R.IRh};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${R.IRh};
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
      stroke: ${R.cRz};
    }

    :host(.paused) .determinate {
      stroke: ${R.cRz};
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
  `.withBehaviors((0,S.mr)(O.A`
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
      `)),indeterminateIndicator:'\n    <svg class="progress" part="progress" viewBox="0 0 16 16">\n        <circle\n            class="background"\n            part="background"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n        <circle\n            class="indeterminate-indicator-1"\n            part="indeterminate-indicator-1"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n    </svg>\n  '})},5017:(rt,pe,h)=>{h.d(pe,{_0:()=>Q});var a=h(742),s=h(9808),x=h(4632);let y=(()=>{class X extends x.g{constructor(){super(...arguments),this.shape="rect"}}return(0,a.Cg)([s.CF],X.prototype,"fill",void 0),(0,a.Cg)([s.CF],X.prototype,"shape",void 0),(0,a.Cg)([s.CF],X.prototype,"pattern",void 0),(0,a.Cg)([(0,s.CF)({mode:"boolean"})],X.prototype,"shimmer",void 0),X})();var E=h(9953),O=h(8287),b=h(9760),S=h(8322),B=h(4954),R=h(3226),W=h(9457);const Q=y.compose({baseName:"skeleton",template:(X,re)=>E.q`
    <template
        class="${ve=>"circle"===ve.shape?"circle":"rect"}"
        pattern="${ve=>ve.pattern}"
        ?shimmer="${ve=>ve.shimmer}"
    >
        ${(0,O.z)(ve=>!0===ve.shimmer,E.q`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${ve=>ve.pattern}" role="presentation">
            <img class="pattern" src="${ve=>ve.pattern}" />
        </object>
        <slot></slot>
    </template>
`,styles:(X,re)=>b.A`
    ${(0,S.V)("block")} :host {
      --skeleton-fill-default: ${W.v8G};
      overflow: hidden;
      width: 100%;
      position: relative;
      background-color: var(--skeleton-fill, var(--skeleton-fill-default));
      --skeleton-animation-gradient-default: linear-gradient(
        270deg,
        var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
        ${W.Rgz} 51%,
        var(--skeleton-fill, var(--skeleton-fill-default)) 100%
      );
      --skeleton-animation-timing-default: ease-in-out;
    }

    :host(.rect) {
      border-radius: calc(${W.PbG} * 1px);
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

    ${(0,S.V)("block")} span.shimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: var(--skeleton-animation-gradient, var(--skeleton-animation-gradient-default));
      background-size: 0px 0px / 90% 100%;
      background-repeat: no-repeat;
      background-color: var(--skeleton-animation-fill, ${W.v8G});
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
  `.withBehaviors((0,B.mr)(b.A`
        :host{
          background-color: ${R.A.CanvasText};
        }
      `))})},2783:(rt,pe,h)=>{h.d(pe,{Cw:()=>oe,H0:()=>re,eq:()=>B,tf:()=>I});var a=h(1859);const E=a.G.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(de,z,$)=>{let Y=.12,te=.14;return z>16&&(Y=.2,te=.24),`0 0 2px rgba(0, 0, 0, ${Y}), 0 calc(${z} * 0.5px) calc((${z} * 1px)) rgba(0, 0, 0, ${te})`}}),O=a.G.create("elevation-shadow-card-rest-size").withDefault(4),_=a.G.create("elevation-shadow-card-hover-size").withDefault(8),b=a.G.create("elevation-shadow-card-active-size").withDefault(0),S=a.G.create("elevation-shadow-card-focus-size").withDefault(8),B=a.G.create("elevation-shadow-card-rest").withDefault(de=>E.getValueFor(de).evaluate(de,O.getValueFor(de))),Q=(a.G.create("elevation-shadow-card-hover").withDefault(de=>E.getValueFor(de).evaluate(de,_.getValueFor(de))),a.G.create("elevation-shadow-card-active").withDefault(de=>E.getValueFor(de).evaluate(de,b.getValueFor(de))),a.G.create("elevation-shadow-card-focus").withDefault(de=>E.getValueFor(de).evaluate(de,S.getValueFor(de))),a.G.create("elevation-shadow-tooltip-size").withDefault(16)),I=a.G.create("elevation-shadow-tooltip").withDefault(de=>E.getValueFor(de).evaluate(de,Q.getValueFor(de))),X=a.G.create("elevation-shadow-flyout-size").withDefault(32),re=a.G.create("elevation-shadow-flyout").withDefault(de=>E.getValueFor(de).evaluate(de,X.getValueFor(de))),ve=a.G.create("elevation-shadow-dialog-size").withDefault(128),oe=a.G.create("elevation-shadow-dialog").withDefault(de=>E.getValueFor(de).evaluate(de,ve.getValueFor(de)))},5532:(rt,pe,h)=>{h.d(pe,{W:()=>x,v:()=>y});var a=h(9760),s=h(9457);const x=a.L`
  outline: calc(${s.vdx} * 1px) solid ${s.WNM};
  outline-offset: calc(${s.vdx} * -1px);
`,y=a.L`
  outline: calc(${s.vdx} * 1px) solid ${s.WNM};
  outline-offset: calc(${s.XAH} * 1px);
`},6009:(rt,pe,h)=>{h.d(pe,{LA:()=>I,Vw:()=>W,ZI:()=>Q,_9:()=>R,ss:()=>X,wQ:()=>B});var a=h(9760),s=h(3226),x=h(8322),y=h(4932),E=h(4954),O=h(4583),_=h(9457),b=h(9709),S=h(5532);const B=(re,ve,oe,de="[disabled]")=>a.A`
    ${(0,x.V)("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${b.Ah}
      height: calc(${O.D} * 1px);
      min-width: calc(${O.D} * 1px);
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
      ${S.W}
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
  `,R=(re,ve,oe,de="[disabled]")=>a.A`
    .control {
      background: padding-box linear-gradient(${_.F7s}, ${_.F7s}),
        border-box ${_.Fly};
    }

    :host(${oe}:hover) .control {
      background: padding-box linear-gradient(${_.XtK}, ${_.XtK}),
        border-box ${_.H7x};
    }

    :host(${oe}:active) .control {
      background: padding-box linear-gradient(${_.X4G}, ${_.X4G}),
        border-box ${_.FZQ};
    }

    :host(${de}) .control {
      background: padding-box linear-gradient(${_.F7s}, ${_.F7s}),
        border-box ${_.I21};
    }
  `.withBehaviors((0,E.mr)(a.A`
        .control {
          background: ${s.A.ButtonFace};
          border-color: ${s.A.ButtonText};
          color: ${s.A.ButtonText};
        }

        :host(${oe}:hover) .control,
        :host(${oe}:active) .control {
          forced-color-adjust: none;
          background: ${s.A.HighlightText};
          border-color: ${s.A.Highlight};
          color: ${s.A.Highlight};
        }

        :host(${de}) .control {
          background: transparent;
          border-color: ${s.A.GrayText};
          color: ${s.A.GrayText};
        }

        .control:${y.N} {
          outline-color: ${s.A.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${s.A.LinkText};
          color: ${s.A.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${s.A.CanvasText};
          color: ${s.A.CanvasText};
        }
    `)),W=(re,ve,oe,de="[disabled]")=>a.A`
    .control {
      background: padding-box linear-gradient(${_.IRh}, ${_.IRh}),
        border-box ${_.enQ};
      color: ${_.l_5};
    }

    :host(${oe}:hover) .control {
      background: padding-box linear-gradient(${_.OS0}, ${_.OS0}),
        border-box ${_.eNp};
      color: ${_.XKp};
    }

    :host(${oe}:active) .control {
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
  `.withBehaviors((0,E.mr)(a.A`
        .control {
          forced-color-adjust: none;
          background: ${s.A.Highlight};
          color: ${s.A.HighlightText};
        }

        :host(${oe}:hover) .control,
        :host(${oe}:active) .control {
          background: ${s.A.HighlightText};
          border-color: ${s.A.Highlight};
          color: ${s.A.Highlight};
        }

        :host(${de}) .control {
          background: transparent;
          border-color: ${s.A.GrayText};
          color: ${s.A.GrayText};
        }

        .control:${y.N} {
          outline-color: ${s.A.CanvasText};
          box-shadow: 0 0 0 calc(${_.vdx} * 1px) ${s.A.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${s.A.LinkText};
          color: ${s.A.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${s.A.ButtonFace};
          border-color: ${s.A.LinkText};
          color: ${s.A.LinkText};
        }
      `)),Q=(re,ve,oe,de="[disabled]")=>a.A`
    :host {
      color: ${_.W_m};
    }

    .control {
      background: ${_.WlO};
    }

    :host(${oe}:hover) .control {
      background: ${_.oO8};
      color: ${_.YLI};
    }

    :host(${oe}:active) .control {
      background: ${_.wOW};
      color: ${_.QL0};
    }

    :host(${de}) .control {
      background: ${_.WlO};
    }
  `.withBehaviors((0,E.mr)(a.A`
        :host {
          color: ${s.A.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${oe}:hover) .control,
        :host(${oe}:active) .control {
          background: transparent;
          border-color: ${s.A.ButtonText};
          color: ${s.A.ButtonText};
        }

        :host(${de}) .control {
          background: transparent;
          color: ${s.A.GrayText};
        }

        .control:${y.N} {
          outline-color: ${s.A.CanvasText};
        }

        :host([href]) .control {
          color: ${s.A.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${s.A.LinkText};
          color: ${s.A.LinkText};
        }
      `)),I=(re,ve,oe,de="[disabled]")=>a.A`
    .control {
      background: transparent !important;
      border-color: ${_.I21};
    }

    :host(${oe}:hover) .control {
      border-color: ${_.mbK};
    }

    :host(${oe}:active) .control {
      border-color: ${_.MYG};
    }

    :host(${de}) .control {
      background: transparent !important;
      border-color: ${_.I21};
    }
  `.withBehaviors((0,E.mr)(a.A`
        .control {
          border-color: ${s.A.ButtonText};
          color: ${s.A.ButtonText};
        }

        :host(${oe}:hover) .control,
        :host(${oe}:active) .control {
          background: ${s.A.HighlightText};
          border-color: ${s.A.Highlight};
          color: ${s.A.Highlight};
        }

        :host(${de}) .control {
          border-color: ${s.A.GrayText};
          color: ${s.A.GrayText};
        }

        .control:${y.N} {
          outline-color: ${s.A.CanvasText};
        }

        :host([href]) .control {
          border-color: ${s.A.LinkText};
          color: ${s.A.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${s.A.CanvasText};
          color: ${s.A.CanvasText};
        }
      `)),X=(re,ve,oe,de="[disabled]")=>a.A`
    .control {
      background: ${_.WlO};
    }

    :host(${oe}:hover) .control {
      background: ${_.oO8};
    }

    :host(${oe}:active) .control {
      background: ${_.wOW};
    }

    :host(${de}) .control {
      background: ${_.WlO};
    }
  `.withBehaviors((0,E.mr)(a.A`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${s.A.ButtonText};
        }

        :host(${oe}:hover) .control,
        :host(${oe}:active) .control {
          background: transparent;
          border-color: ${s.A.ButtonText};
          color: ${s.A.ButtonText};
        }

        :host(${de}) .control {
          background: transparent;
          color: ${s.A.GrayText};
        }
        
        .control:${y.N} {
          outline-color: ${s.A.CanvasText};
        }

        :host([href]) .control {
          color: ${s.A.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${s.A.LinkText};
          color: ${s.A.LinkText};
        }
      `))},3928:(rt,pe,h)=>{h.d(pe,{Tv:()=>I,aB:()=>H,dM:()=>X,lb:()=>re,y$:()=>Q});var a=h(9760),s=h(1859),x=h(5778),y=h(3226),E=h(9457),O=h(9709),_=h(4583),b=h(5532);const S=s.G.create("input-placeholder-rest").withDefault(ve=>{const oe=E.VYG.getValueFor(ve);return E.g8A.getValueFor(ve).evaluate(ve,oe.evaluate(ve).rest)}),B=s.G.create("input-placeholder-hover").withDefault(ve=>{const oe=E.VYG.getValueFor(ve);return E.g8A.getValueFor(ve).evaluate(ve,oe.evaluate(ve).hover)}),R=s.G.create("input-filled-placeholder-rest").withDefault(ve=>{const oe=E.jIq.getValueFor(ve);return E.g8A.getValueFor(ve).evaluate(ve,oe.evaluate(ve).rest)}),W=s.G.create("input-filled-placeholder-hover").withDefault(ve=>{const oe=E.jIq.getValueFor(ve);return E.g8A.getValueFor(ve).evaluate(ve,oe.evaluate(ve).hover)}),H=(ve,oe,de)=>a.A`
  :host {
    ${O.Ah}
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
    ${O.Ah}
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
`,Q=(ve,oe,de)=>a.A`
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
`,I=(ve,oe,de,z=":not([disabled]):not(:focus-within)")=>a.A`
  ${de} {
    background: padding-box linear-gradient(${E.leE}, ${E.leE}),
      border-box ${E.o_b};
  }

  :host(${z}:hover) ${de} {
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
    color: ${S};
  }

  :host(${z}:hover) .control::placeholder {
    color: ${B};
  }
`,X=(ve,oe,de,z=":not([disabled]):not(:focus-within)")=>a.A`
  ${de} {
    background: ${E.v8G};
  }

  :host(${z}:hover) ${de} {
    background: ${E.Rgz};
  }

  :host(:not([disabled]):focus-within) ${de} {
    background: ${E.Vtk};
  }

  :host([disabled]) ${de} {
    background: ${E.v8G};
  }

  .control::placeholder {
    color: ${R};
  }

  :host(${z}:hover) .control::placeholder {
    color: ${W};
  }
`,re=(ve,oe,de,z=":not([disabled]):not(:focus-within)")=>a.A`
  :host {
    color: ${y.A.ButtonText};
  }

  ${de} {
    background: ${y.A.ButtonFace};
    border-color: ${y.A.ButtonText};
  }

  :host(${z}:hover) ${de},
  :host(:not([disabled]):focus-within) ${de} {
    border-color: ${y.A.Highlight};
  }

  :host([disabled]) ${de} {
    opacity: 1;
    background: ${y.A.ButtonFace};
    border-color: ${y.A.GrayText};
  }

  .control::placeholder,
  :host(${z}:hover) .control::placeholder {
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
`},9709:(rt,pe,h)=>{h.d(pe,{Ah:()=>x});var a=h(9760),s=h(9457);const x=a.L`
  font-family: ${s.OCo};
  font-size: ${s.Kgr};
  line-height: ${s.Z69};
  font-weight: initial;
  font-variation-settings: ${s.$AV};
`;a.L`
  font-family: ${s.OCo};
  font-size: ${s.kSN};
  line-height: ${s.FrF};
  font-weight: initial;
  font-variation-settings: ${s.dUM};
`,a.L`
  font-family: ${s.OCo};
  font-size: ${s.tDF};
  line-height: ${s.e9J};
  font-weight: initial;
  font-variation-settings: ${s.wxg};
`,a.L`
  font-family: ${s.OCo};
  font-size: ${s.YVy};
  line-height: ${s.vrI};
  font-weight: initial;
  font-variation-settings: ${s.BZ8};
`,a.L`
  font-family: ${s.OCo};
  font-size: ${s.TFp};
  line-height: ${s.Oc7};
  font-weight: initial;
  font-variation-settings: ${s.Knw};
`,a.L`
  font-family: ${s.OCo};
  font-size: ${s.aVA};
  line-height: ${s.bcZ};
  font-weight: initial;
  font-variation-settings: ${s.PPT};
`,a.L`
  font-family: ${s.OCo};
  font-size: ${s.FrW};
  line-height: ${s.weJ};
  font-weight: initial;
  font-variation-settings: ${s.onW};
`,a.L`
  font-family: ${s.OCo};
  font-size: ${s._UC};
  line-height: ${s.Z67};
  font-weight: initial;
  font-variation-settings: ${s.x3P};
`,a.L`
  font-family: ${s.OCo};
  font-size: ${s.X7g};
  line-height: ${s.uwi};
  font-weight: initial;
  font-variation-settings: ${s.Ygb};
`},4583:(rt,pe,h)=>{h.d(pe,{D:()=>x});var a=h(9760),s=h(9457);const x=a.L`(${s.Sss} + ${s.Brd}) * ${s.vR1}`},8955:(rt,pe,h)=>{h.d(pe,{oR:()=>ee});var a=h(1635),s=h(9808),x=h(742),y=h(7788),E=h(4192),O=h(1230),_=h(9605),b=h(6105),S=h(8746),B=h(4632);class R extends B.g{}class W extends((0,S.rf)(R)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Q=(()=>{class ge extends W{constructor(){super(...arguments),this.type="text"}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&y.dv.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}return(0,x.Cg)([(0,s.CF)({attribute:"readonly",mode:"boolean"})],ge.prototype,"readOnly",void 0),(0,x.Cg)([(0,s.CF)({mode:"boolean"})],ge.prototype,"autofocus",void 0),(0,x.Cg)([s.CF],ge.prototype,"placeholder",void 0),(0,x.Cg)([s.CF],ge.prototype,"type",void 0),(0,x.Cg)([s.CF],ge.prototype,"list",void 0),(0,x.Cg)([(0,s.CF)({converter:s.R$})],ge.prototype,"maxlength",void 0),(0,x.Cg)([(0,s.CF)({converter:s.R$})],ge.prototype,"minlength",void 0),(0,x.Cg)([s.CF],ge.prototype,"pattern",void 0),(0,x.Cg)([(0,s.CF)({converter:s.R$})],ge.prototype,"size",void 0),(0,x.Cg)([(0,s.CF)({mode:"boolean"})],ge.prototype,"spellcheck",void 0),(0,x.Cg)([E.sH],ge.prototype,"defaultSlottedNodes",void 0),ge})();class I{}(0,b.X)(I,O.z),(0,b.X)(Q,_.qw,I);var X=h(9953),re=h(633),ve=h(1589),oe=h(7412),z=h(9760),$=h(8322),Y=h(4954),te=h(3928),j=h(2622),le=h(9457);const G=".root",ee=(()=>{class ge extends Q{appearanceChanged(Le,et){Le!==et&&(this.classList.add(et),this.classList.remove(Le))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}return(0,a.Cg)([s.CF],ge.prototype,"appearance",void 0),ge})().compose({baseName:"text-field",baseClass:Q,template:(ge,Be)=>X.q`
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
                ${(0,re.e)({property:"defaultSlottedNodes",filter:oe.g})}
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
`,styles:(ge,Be)=>z.A`
    ${(0,$.V)("inline-block")}

    ${(0,te.aB)(ge,Be,G)}

    ${(0,te.y$)(ge,Be,G)}

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
  `.withBehaviors((0,j.f)("outline",(0,te.Tv)(ge,Be,G)),(0,j.f)("filled",(0,te.dM)(ge,Be,G)),(0,Y.mr)((0,te.lb)(ge,Be,G))),shadowOptions:{delegatesFocus:!0}})},2622:(rt,pe,h)=>{h.d(pe,{f:()=>x});var a=h(4192);class s{constructor(E,O,_){this.propertyName=E,this.value=O,this.styles=_}bind(E){a.cP.getNotifier(E).subscribe(this,this.propertyName),this.handleChange(E,this.propertyName)}unbind(E){a.cP.getNotifier(E).unsubscribe(this,this.propertyName),E.$fastController.removeStyles(this.styles)}handleChange(E,O){E[O]===this.value?E.$fastController.addStyles(this.styles):E.$fastController.removeStyles(this.styles)}}function x(y,E){return new s("appearance",y,E)}},54:(rt,pe,h)=>{h.d(pe,{e:()=>x});const a=["none","hover","click"],x=(y,E="none")=>(y=>"string"==typeof y&&a.includes(y))(y)?y:E},8072:(rt,pe,h)=>{h.d(pe,{R:()=>Kr,x:()=>Wr});var a=h(2578),s=h(4709),x=h(4569),y=h(6885),E=h(8324),O=h(9559),_=h(4229),b=h(7768),S=h(2710),B=h(8360);const R=[E.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{font-size:var(--default-font-size)}:host .title{font-size:14px;font-weight:600;padding:20px 0 12px;line-height:19px}:host .file-list-wrapper{background-color:var(--file-list-background-color,var(--neutral-layer-floating));border:var(--file-list-border,none);position:relative;display:flex;flex-direction:column;border-radius:8px}:host .file-list-wrapper .title{font-size:14px;font-weight:600;margin:0 20px -15px}:host .file-list-wrapper .file-list{display:flex;padding:var(--file-list-padding,0);margin:var(--file-list-margin,0);flex-direction:column;list-style:none}:host .file-list-wrapper .file-list .file-item{cursor:pointer;border-radius:var(--file-border-radius)}:host .file-list-wrapper .file-list .file-item:focus,:host .file-list-wrapper .file-list .file-item:focus-within{--file-background-color:var(--file-background-color-focus, var(--neutral-layer-2))}:host .file-list-wrapper .file-list .file-item.selected{--file-background-color:var(--file-background-color-active, var(--neutral-layer-3))}:host .file-list-wrapper .file-list .file-item .mgt-file-item{--file-padding:10px 20px 10px 20px;--file-padding-inline-start:24px;--file-border-radius:2px;--file-background-color:var(--file-item-background-color, var(--neutral-layer-1))}:host .file-list-wrapper .progress-ring{margin:4px auto;width:var(--progress-ring-size,24px);height:var(--progress-ring-size,24px)}:host .file-list-wrapper .show-more{text-align:center;font-size:var(--show-more-button-font-size, 12px);padding:var(--show-more-button-padding,0);border-radius:0 0 var(--show-more-button-border-bottom-right-radius,var(--file-list-border-radius,8px)) var(--show-more-button-border-bottom-left-radius,var(--file-list-border-radius,8px));background-color:var(--show-more-button-background-color,var(--neutral-stroke-divider-rest))}:host .file-list-wrapper .show-more:hover{background-color:var(--show-more-button-background-color-hover,var(--neutral-fill-input-alt-active))}:host .file-list-wrapper .show-more-text{font-size:var(--show-more-button-font-size, 12px)}
`],W={showMoreSubtitle:"Show more items",filesSectionTitle:"Files",sharedTextSubtitle:"Shared"};var H=h(9569),Q=h(862),I=h(9953),X=h(8287),ve=h(9760),oe=h(3226),de=h(8322),z=h(4954),$=h(9457);const j=class te extends Q.z{}.compose({baseName:"progress",template:(Bt,yt)=>I.q`
    <template
        role="progressbar"
        aria-valuenow="${Ne=>Ne.value}"
        aria-valuemin="${Ne=>Ne.min}"
        aria-valuemax="${Ne=>Ne.max}"
        class="${Ne=>Ne.paused?"paused":""}"
    >
        ${(0,X.z)(Ne=>"number"==typeof Ne.value,I.q`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${Ne=>Ne.percentComplete}%"
                    ></div>
                </div>
            `,I.q`
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
  `.withBehaviors((0,z.mr)(ve.A`
        .indeterminate-indicator-1,
        .indeterminate-indicator-2,
        .determinate,
        .progress {
          background-color: ${oe.A.ButtonText};
        }
        :host(.paused) .indeterminate-indicator-1,
        :host(.paused) .indeterminate-indicator-2,
        :host(.paused) .determinate {
          background-color: ${oe.A.GrayText};
        }
      `)),indeterminateIndicator1:'\n    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>\n  ',indeterminateIndicator2:'\n    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>\n  '});var G=h(7043),L=h(9684),P=h(742),ee=h(7788),Z=h(4192),ge=h(9808),Be=h(7153),et=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"].join(","),Pe=typeof Element>"u",se=Pe?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Qe=!Pe&&Element.prototype.getRootNode?function(Bt){return Bt.getRootNode()}:function(Bt){return Bt.ownerDocument},Te=function(yt){return"INPUT"===yt.tagName},at=function(yt){var Ne=yt.getBoundingClientRect();return 0===Ne.width&&0===Ne.height},V=function(yt,Ne){return!(function(yt){return function(yt){return Te(yt)&&"radio"===yt.type}(yt)&&!function(yt){if(!yt.name)return!0;var jt,Ne=yt.form||Qe(yt),st=function(qt){return Ne.querySelectorAll('input[type="radio"][name="'+qt+'"]')};if(typeof window<"u"&&typeof window.CSS<"u"&&"function"==typeof window.CSS.escape)jt=st(window.CSS.escape(yt.name));else try{jt=st(yt.name)}catch(Ht){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",Ht.message),!1}var Wt=function(yt,Ne){for(var st=0;st<yt.length;st++)if(yt[st].checked&&yt[st].form===Ne)return yt[st]}(jt,yt.form);return!Wt||Wt===yt}(yt)}(Ne)||function(yt,Ne){return yt.tabIndex<0&&(Ne||/^(AUDIO|VIDEO|DETAILS)$/.test(yt.tagName)||yt.isContentEditable)&&isNaN(parseInt(yt.getAttribute("tabindex"),10))?0:yt.tabIndex}(Ne)<0||!function(yt,Ne){return!(Ne.disabled||function(yt){return Te(yt)&&"hidden"===yt.type}(Ne)||function(yt,Ne){var st=Ne.displayCheck,jt=Ne.getShadowRoot;if("hidden"===getComputedStyle(yt).visibility)return!0;var Wt=se.call(yt,"details>summary:first-of-type");if(se.call(Wt?yt.parentElement:yt,"details:not([open]) *"))return!0;var qt=Qe(yt).host,Un=qt?.ownerDocument.contains(qt)||yt.ownerDocument.contains(yt);if(st&&"full"!==st){if("non-zero-area"===st)return at(yt)}else{if("function"==typeof jt){for(var Cn=yt;yt;){var Dn=yt.parentElement,ui=Qe(yt);if(Dn&&!Dn.shadowRoot&&!0===jt(Dn))return at(yt);yt=yt.assignedSlot?yt.assignedSlot:Dn||ui===yt.ownerDocument?Dn:ui.host}yt=Cn}if(Un)return!yt.getClientRects().length}return!1}(Ne,yt)||function(yt){return"DETAILS"===yt.tagName&&Array.prototype.slice.apply(yt.children).some(function(st){return"SUMMARY"===st.tagName})}(Ne)||function(yt){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(yt.tagName))for(var Ne=yt.parentElement;Ne;){if("FIELDSET"===Ne.tagName&&Ne.disabled){for(var st=0;st<Ne.children.length;st++){var jt=Ne.children.item(st);if("LEGEND"===jt.tagName)return!!se.call(Ne,"fieldset[disabled] *")||!jt.contains(yt)}return!0}Ne=Ne.parentElement}return!1}(Ne))}(yt,Ne))},it=function(yt,Ne){if(Ne=Ne||{},!yt)throw new Error("No node provided");return!1!==se.call(yt,et)&&V(Ne,yt)},Xe=h(4632);let zt=(()=>{class Bt extends Xe.g{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=Ne=>{if(!Ne.defaultPrevented&&!this.hidden)switch(Ne.key){case Be.F9:this.dismiss(),Ne.preventDefault();break;case Be.J9:this.handleTabKeyDown(Ne)}},this.handleDocumentFocus=Ne=>{!Ne.defaultPrevented&&this.shouldForceFocus(Ne.target)&&(this.focusFirstElement(),Ne.preventDefault())},this.handleTabKeyDown=Ne=>{if(!this.trapFocus||this.hidden)return;const st=this.getTabQueueBounds();if(0!==st.length){if(1===st.length)return st[0].focus(),void Ne.preventDefault();Ne.shiftKey&&Ne.target===st[0]?(st[st.length-1].focus(),Ne.preventDefault()):!Ne.shiftKey&&Ne.target===st[st.length-1]&&(st[0].focus(),Ne.preventDefault())}},this.getTabQueueBounds=()=>Bt.reduceTabbableItems([],this),this.focusFirstElement=()=>{const Ne=this.getTabQueueBounds();Ne.length>0?Ne[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=Ne=>this.isTrappingFocus&&!this.contains(Ne),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=Ne=>{const st=void 0===Ne?this.shouldTrapFocus():Ne;st&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),ee.dv.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!st&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=Z.cP.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(Ne,st){"hidden"===st&&this.updateTrapFocus()}static reduceTabbableItems(Ne,st){return"-1"===st.getAttribute("tabindex")?Ne:it(st)||Bt.isFocusableFastElement(st)&&Bt.hasTabbableShadow(st)?(Ne.push(st),Ne):st.childElementCount?Ne.concat(Array.from(st.children).reduce(Bt.reduceTabbableItems,[])):Ne}static isFocusableFastElement(Ne){var st,jt;return!(null===(jt=null===(st=Ne.$fastController)||void 0===st?void 0:st.definition.shadowOptions)||void 0===jt||!jt.delegatesFocus)}static hasTabbableShadow(Ne){var st,jt;return Array.from(null!==(jt=null===(st=Ne.shadowRoot)||void 0===st?void 0:st.querySelectorAll("*"))&&void 0!==jt?jt:[]).some(Wt=>it(Wt))}}return(0,P.Cg)([(0,ge.CF)({mode:"boolean"})],Bt.prototype,"modal",void 0),(0,P.Cg)([(0,ge.CF)({mode:"boolean"})],Bt.prototype,"hidden",void 0),(0,P.Cg)([(0,ge.CF)({attribute:"trap-focus",mode:"boolean"})],Bt.prototype,"trapFocus",void 0),(0,P.Cg)([(0,ge.CF)({attribute:"aria-describedby"})],Bt.prototype,"ariaDescribedby",void 0),(0,P.Cg)([(0,ge.CF)({attribute:"aria-labelledby"})],Bt.prototype,"ariaLabelledby",void 0),(0,P.Cg)([(0,ge.CF)({attribute:"aria-label"})],Bt.prototype,"ariaLabel",void 0),Bt})();var tn=h(1589),An=h(2783);const vi=zt.compose({baseName:"dialog",template:(Bt,yt)=>I.q`
    <div class="positioning-region" part="positioning-region">
        ${(0,X.z)(Ne=>Ne.modal,I.q`
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
            ${(0,tn.K)("dialog")}
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
`});var fi=h(9451),Ln=h(3402),Pn=h(3601),ti=h(3173);const Qn=[E.AH`
:host .file-upload-area-button{width:auto;display:flex;align-items:end;justify-content:end;margin-inline-end:36px;margin-top:30px}:host fluent-button .upload-icon path{fill:var(--file-upload-button-text-color,var(--foreground-on-accent-rest))}:host fluent-button.file-upload-button::part(control){border:var(--file-upload-button-border,none);background:var(--file-upload-button-background-color,var(--accent-fill-rest))}:host fluent-button.file-upload-button::part(control):hover{background:var(--file-upload-button-background-color-hover,var(--accent-fill-hover))}:host fluent-button.file-upload-button .upload-text{color:var(--file-upload-button-text-color,var(--foreground-on-accent-rest));font-weight:400;line-height:20px}:host input{display:none}:host fluent-progress.file-upload-bar{width:180px;margin-top:10px}:host fluent-dialog::part(overlay){opacity:.5}:host fluent-dialog::part(control){--dialog-width:$file-upload-dialog-width;--dialog-height:$file-upload-dialog-height;padding:var(--file-upload-dialog-padding,24px);border:var(--file-upload-dialog-border,1px solid var(--neutral-fill-rest))}:host fluent-dialog .file-upload-dialog-ok{background:var(--file-upload-dialog-keep-both-button-background-color,var(--accent-fill-rest));border:var(--file-upload-dialog-keep-both-button-border,none);color:var(--file-upload-dialog-keep-both-button-text-color,var(--foreground-on-accent-rest))}:host fluent-dialog .file-upload-dialog-ok:hover{background:var(--file-upload-dialog-keep-both-button-background-color-hover,var(--accent-fill-hover))}:host fluent-dialog .file-upload-dialog-cancel{background:var(--file-upload-dialog-replace-button-background-color,var(--accent-fill-rest));border:var(--file-upload-dialog-replace-button-border,1px solid var(--neutral-foreground-rest));color:var(--file-upload-dialog-replace-button-text-color,var(--neutral-foreground-rest))}:host fluent-dialog .file-upload-dialog-cancel:hover{background:var(--file-upload-dialog-replace-button-background-color-hover,var(--accent-fill-hover))}:host fluent-checkbox{margin-top:12px}:host fluent-checkbox .file-upload-dialog-check{color:var(--file-upload-dialog-text-color,--foreground-on-accent-rest)}:host .file-upload-table{display:flex}:host .file-upload-table.upload{display:flex}:host .file-upload-table .file-upload-cell{padding:1px 0 1px 1px;display:table-cell;vertical-align:middle;position:relative}:host .file-upload-table .file-upload-cell.percent-indicator{padding-inline-start:10px}:host .file-upload-table .file-upload-cell .description{opacity:.5;position:relative}:host .file-upload-table .file-upload-cell .file-upload-filename{max-width:250px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .file-upload-table .file-upload-cell .file-upload-status{position:absolute;left:28px}:host .file-upload-table .file-upload-cell .file-upload-cancel{cursor:pointer;margin-inline-start:20px}:host .file-upload-table .file-upload-cell .file-upload-name{width:auto}:host .file-upload-table .file-upload-cell .cancel-icon{fill:var(--file-upload-dialog-text-color,var(--neutral-foreground-rest))}:host .mgt-file-item{--file-background-color:transparent;--file-padding:0 12px;--file-padding-inline-start:24px}:host .file-upload-template{clear:both}:host .file-upload-template .file-upload-folder-tab{padding-inline-start:20px}:host .file-upload-dialog{display:none}:host .file-upload-dialog .file-upload-dialog-content{background-color:var(--file-upload-dialog-background-color,var(--accent-fill-rest));color:var(--file-upload-dialog-text-color,var(--neutral-foreground-rest))}:host .file-upload-dialog .file-upload-dialog-content-text{margin-bottom:36px}:host .file-upload-dialog .file-upload-dialog-title{margin-top:0}:host .file-upload-dialog .file-upload-dialog-editor{display:flex;align-items:end;justify-content:end;gap:5px}:host .file-upload-dialog .file-upload-dialog-close{float:right;cursor:pointer}:host .file-upload-dialog .file-upload-dialog-close svg{fill:var(--file-upload-dialog-text-color,var(--neutral-foreground-rest));padding-right:5px}:host .file-upload-dialog.visible{display:block}:host fluent-checkbox.file-upload-dialog-check.hide{display:none}:host .file-upload-dialog-success{cursor:pointer;opacity:.5}:host #file-upload-border{display:none}:host #file-upload-border.visible{border:var(--file-upload-border-drag,1px dashed #0078d4);background-color:var(--file-upload-background-color-drag,rgba(0,120,212,.1));position:absolute;inset:0;z-index:1;display:inline-block}[dir=rtl] :host .file-upload-status{left:0;right:28px}@media (forced-colors:active){:host fluent-button .upload-icon path{fill:highlighttext}:host fluent-button.file-upload-button::part(control){border-width:1px;border-style:solid;border-color:buttontext;background:highlight}:host fluent-button.file-upload-button::part(control):hover{background:highlighttext;border-color:highlight}:host fluent-button.file-upload-button .upload-text{color:highlighttext}:host fluent-button:hover .upload-icon path{fill:highlight}:host fluent-button:hover.file-upload-button::part(control){border-color:highlight;background:highlighttext}:host fluent-button:hover.file-upload-button .upload-text{color:highlight}}
`],Nn={failUploadFile:"File upload fail.",cancelUploadFile:"File cancel.",buttonUploadFile:"Upload Files",maximumFilesTitle:"Maximum files",maximumFiles:"Sorry, the maximum number of files you can upload at once is {MaxNumber}. Do you want to upload the first {MaxNumber} files or reselect?",maximumFileSizeTitle:"Maximum files size",maximumFileSize:'Sorry, the maximum file size to upload is {FileSize}. The file "{FileName}" has ',fileTypeTitle:"File type",fileType:'Sorry, the format of following file "{FileName}" cannot be uploaded.',checkAgain:"Don't show again",checkApplyAll:"Apply to all",buttonOk:"OK",buttonCancel:"Cancel",buttonUpload:"Upload",buttonKeep:"Keep both",buttonReplace:"Replace",buttonReselect:"Reselect",fileReplaceTitle:"Replace file",fileReplace:'Do you want to replace the file "{FileName}" or keep both files?',uploadButtonLabel:"File upload button"};var Ii=h(8940),un=function(Bt,yt,Ne,st){var Ht,jt=arguments.length,Wt=jt<3?yt:null===st?st=Object.getOwnPropertyDescriptor(yt,Ne):st;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Bt,yt,Ne,st);else for(var qt=Bt.length-1;qt>=0;qt--)(Ht=Bt[qt])&&(Wt=(jt<3?Ht(Wt):jt>3?Ht(yt,Ne,Wt):Ht(yt,Ne))||Wt);return jt>3&&Wt&&Object.defineProperty(yt,Ne,Wt),Wt},Xi=function(Bt,yt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(Bt,yt)},pt=function(Bt,yt,Ne,st){return new(Ne||(Ne=Promise))(function(Wt,Ht){function qt(Dn){try{Cn(st.next(Dn))}catch(ui){Ht(ui)}}function Un(Dn){try{Cn(st.throw(Dn))}catch(ui){Ht(ui)}}function Cn(Dn){Dn.done?Wt(Dn.value):function jt(Wt){return Wt instanceof Ne?Wt:new Ne(function(Ht){Ht(Wt)})}(Dn.value).then(qt,Un)}Cn((st=st.apply(Bt,yt||[])).next())})};const Et=Bt=>Bt.isDirectory,gt=Bt=>"getAsEntry"in Bt&&"function"==typeof Bt.getAsEntry,Kt=Bt=>"getAsFile"in Bt&&"function"==typeof Bt.getAsFile||"webkitGetAsEntry"in Bt&&"function"==typeof Bt.webkitGetAsEntry,ni=Bt=>Bt?.length>1?"replace"===Bt[1]?"replace":"rename":null;let At=(()=>{class Bt extends fi.D{static get styles(){return Qn}get strings(){return Nn}static get requiredScopes(){return[...new Set(["files.readwrite","files.readwrite.all","sites.readwrite.all"])]}get _dropEffect(){return"copy"}constructor(){super(),this._dragCounter=0,this._maxChunkSize=4194304,this._dialogTitle="",this._dialogContent="",this._dialogPrimaryButton="",this._dialogSecondaryButton="",this._dialogCheckBox="",this._applyAll=!1,this._applyAllConflictBehavior=null,this._maximumFileSize=!1,this._excludedFileType=!1,this.onFileUploadChange=Ne=>{const st=Ne.target;!Ne||st.files.length<1||this.readUploadedFiles(st.files,()=>st.value=null)},this.onFileUploadClick=()=>{this.renderRoot.querySelector("#file-upload-input").click()},this.handleonDragOver=Ne=>{Ne.preventDefault(),Ne.stopPropagation(),Ne.dataTransfer.items&&Ne.dataTransfer.items.length>0&&(Ne.dataTransfer.dropEffect=Ne.dataTransfer.dropEffect=this._dropEffect)},this.handleonDragEnter=Ne=>{Ne.preventDefault(),Ne.stopPropagation(),this._dragCounter++,Ne.dataTransfer.items&&Ne.dataTransfer.items.length>0&&(Ne.dataTransfer.dropEffect=this._dropEffect,this.renderRoot.querySelector("#file-upload-border").classList.add("visible"))},this.handleonDragLeave=Ne=>{Ne.preventDefault(),Ne.stopPropagation(),this._dragCounter--,0===this._dragCounter&&this.renderRoot.querySelector("#file-upload-border").classList.remove("visible")},this.handleonDrop=Ne=>{var st;Ne.preventDefault(),Ne.stopPropagation(),this.renderRoot.querySelector("#file-upload-border").classList.remove("visible"),!(null===(st=Ne.dataTransfer)||void 0===st)&&st.items&&this.readUploadedFiles(Ne.dataTransfer.items,()=>{Ne.dataTransfer.clearData()}),this._dragCounter=0},this.filesToUpload=[]}render(){if(null!==this.parentElement){const Ne=this.parentElement;Ne.addEventListener("dragenter",this.handleonDragEnter),Ne.addEventListener("dragleave",this.handleonDragLeave),Ne.addEventListener("dragover",this.handleonDragOver),Ne.addEventListener("drop",this.handleonDrop)}return E.qy`
        <div id="file-upload-dialog" class="file-upload-dialog">
          <!-- Modal content -->
          <fluent-dialog modal="true" class="file-upload-dialog-content">
            <span
              class="file-upload-dialog-close"
              id="file-upload-dialog-close">
                ${(0,S.r)(S.A.Cancel)}
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
              <span slot="start">${(0,S.r)(S.A.Upload)}</span>
              <span class="upload-text">${this.strings.buttonUploadFile}</span>
          </fluent-button>
        </div>
        <div class="file-upload-template">
          ${this.renderFolderTemplate(this.filesToUpload)}
        </div>
       `}renderFolderTemplate(Ne){const st=[];if(Ne.length>0){const jt=Ne.map(Wt=>-1===st.indexOf(Wt.fullPath.substring(0,Wt.fullPath.lastIndexOf("/")))?Wt.fullPath.endsWith("/")?E.qy`${this.renderFileTemplate(Wt,"")}`:(st.push(Wt.fullPath.substring(0,Wt.fullPath.lastIndexOf("/"))),x.Q`
            <div class='file-upload-table'>
              <div class='file-upload-cell'>
                <mgt-file
                  .fileDetails=${{name:Wt.fullPath.substring(1,Wt.fullPath.lastIndexOf("/")),folder:"Folder"}}
                  view="oneline"
                  class="mgt-file-item">
                </mgt-file>
              </div>
            </div>
            ${this.renderFileTemplate(Wt,"file-upload-folder-tab")}`):E.qy`${this.renderFileTemplate(Wt,"file-upload-folder-tab")}`);return E.qy`${jt}`}return E.qy``}renderFileTemplate(Ne,st){const jt=(0,Ln.H)({"file-upload-table":!0,upload:Ne.completed}),Wt=st+("lastModifiedDateTime"===Ne.fieldUploadResponse?" file-upload-dialog-success":""),Ht=(0,Ln.H)({description:"description"===Ne.fieldUploadResponse}),qt=Ne.completed?E.qy``:this.renderFileUploadTemplate(Ne);return x.Q`
        <div class="${jt}">
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
              ${qt}
            </div>
          </div>
        </div>`}renderFileUploadTemplate(Ne){const st=(0,Ln.H)({"file-upload-table":!0,upload:Ne.completed});return E.qy`
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
                ${(0,S.r)(S.A.Cancel)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    `}deleteFileUploadSession(Ne){return pt(this,void 0,void 0,function*(){try{void 0!==Ne.uploadUrl?(yield(0,b.mQ)(this.fileUploadList.graph,Ne.uploadUrl),Ne.uploadUrl=void 0,Ne.completed=!0,this.setUploadFail(Ne,Nn.cancelUploadFile)):(Ne.uploadUrl=void 0,Ne.completed=!0,this.setUploadFail(Ne,Nn.cancelUploadFile))}catch{Ne.uploadUrl=void 0,Ne.completed=!0,this.setUploadFail(Ne,Nn.cancelUploadFile)}})}readUploadedFiles(Ne,st){return pt(this,void 0,void 0,function*(){const jt=yield this.getFilesFromUploadArea(Ne);yield this.getSelectedFiles(jt),st()})}getSelectedFiles(Ne){return pt(this,void 0,void 0,function*(){let st=[];const jt=[];this._applyAll=!1,this._applyAllConflictBehavior=null,this._maximumFileSize=!1,this._excludedFileType=!1,this.filesToUpload.forEach(Ht=>{Ht.completed?jt.push(Ht):st.push(Ht)});for(const Ht of Ne){const qt=""===Ht.fullPath?"/"+Ht.name:Ht.fullPath;if(0===st.filter(Un=>Un.fullPath===qt).length){let Un=!0;if(void 0!==this.fileUploadList.maxFileSize&&Un&&Ht.size>1024*this.fileUploadList.maxFileSize&&(Un=!1,!1===this._maximumFileSize)){const Cn=yield this.getFileUploadStatus(Ht,qt,"MaxFileSize",this.fileUploadList);null!==Cn&&1===Cn[0]&&(this._maximumFileSize=!0)}if(void 0!==this.fileUploadList.excludedFileExtensions&&this.fileUploadList.excludedFileExtensions.length>0&&Un&&this.fileUploadList.excludedFileExtensions.filter(Cn=>Ht.name.toLowerCase().indexOf(Cn.toLowerCase())>-1).length>0&&(Un=!1,!1===this._excludedFileType)){const Cn=yield this.getFileUploadStatus(Ht,qt,"ExcludedFileType",this.fileUploadList);null!==Cn&&1===Cn[0]&&(this._excludedFileType=!0)}if(Un){const Cn=yield this.getFileUploadStatus(Ht,qt,"Upload",this.fileUploadList);let Dn=!1;null!==Cn&&(-1===Cn[0]?Dn=!0:(this._applyAll=!!Cn[0],this._applyAllConflictBehavior=Cn[1]?1:0)),st.push({file:Ht,driveItem:{name:Ht.name},fullPath:qt,conflictBehavior:ni(Cn),iconStatus:null,percent:1,view:"image",completed:Dn,maxSize:this._maxChunkSize,minSize:0})}}}st=st.sort((Ht,qt)=>Ht.fullPath.substring(0,Ht.fullPath.lastIndexOf("/")).localeCompare(qt.fullPath.substring(0,qt.fullPath.lastIndexOf("/")))),st.forEach(Ht=>{if(0!==jt.filter(qt=>qt.fullPath===Ht.fullPath).length){const qt=jt.findIndex(Un=>Un.fullPath===Ht.fullPath);jt.splice(qt,1)}}),st.push(...jt),this.filesToUpload=st;const Wt=this.filesToUpload.map(Ht=>this.sendFileItemGraph(Ht));yield Promise.all(Wt)})}getFileUploadStatus(Ne,st,jt,Wt){const Ht=Object.create(null,{requestStateUpdate:{get:()=>super.requestStateUpdate}});return pt(this,void 0,void 0,function*(){const qt=this.renderRoot.querySelector("#file-upload-dialog");switch(jt){case"Upload":return null!==(yield(0,b.Pq)(this.fileUploadList.graph,`${this.getGrapQuery(st)}?$select=id`))?!0===this._applyAll?[this._applyAll,this._applyAllConflictBehavior]:(qt.classList.add("visible"),this._dialogTitle=Nn.fileReplaceTitle,this._dialogContent=Nn.fileReplace.replace("{FileName}",Ne.name),this._dialogCheckBox=Nn.checkApplyAll,this._dialogPrimaryButton=Nn.buttonReplace,this._dialogSecondaryButton=Nn.buttonKeep,yield Ht.requestStateUpdate.call(this,!0),new Promise(Cn=>{const Dn=this.renderRoot.querySelector(".file-upload-dialog-close"),ui=this.renderRoot.querySelector(".file-upload-dialog-ok"),Fi=this.renderRoot.querySelector(".file-upload-dialog-cancel"),Ri=this.renderRoot.querySelector("#file-upload-dialog-check");Ri.checked=!1,Ri.classList.remove("hide");const Di=()=>{qt.classList.remove("visible"),Cn([Ri.checked?1:0,"replace"])},He=()=>{qt.classList.remove("visible"),Cn([Ri.checked?1:0,"rename"])},ot=()=>{qt.classList.remove("visible"),Cn([-1])};ui.removeEventListener("click",Di),Fi.removeEventListener("click",He),Dn.removeEventListener("click",ot),ui.addEventListener("click",Di),Fi.addEventListener("click",He),Dn.addEventListener("click",ot)})):null;case"ExcludedFileType":return qt.classList.add("visible"),this._dialogTitle=Nn.fileTypeTitle,this._dialogContent=Nn.fileType.replace("{FileName}",Ne.name)+" ("+Wt.excludedFileExtensions.join(",")+")",this._dialogCheckBox=Nn.checkAgain,this._dialogPrimaryButton=Nn.buttonOk,this._dialogSecondaryButton=Nn.buttonCancel,yield Ht.requestStateUpdate.call(this,!0),new Promise(Un=>{const Cn=this.renderRoot.querySelector(".file-upload-dialog-ok"),Dn=this.renderRoot.querySelector(".file-upload-dialog-cancel"),ui=this.renderRoot.querySelector(".file-upload-dialog-close"),Fi=this.renderRoot.querySelector("#file-upload-dialog-check");Fi.checked=!1,Fi.classList.remove("hide");const Ri=()=>{qt.classList.remove("visible"),Un([Fi.checked?1:0])},Di=()=>{qt.classList.remove("visible"),Un([0])};Cn.removeEventListener("click",Ri),Dn.removeEventListener("click",Di),ui.removeEventListener("click",Di),Cn.addEventListener("click",Ri),Dn.addEventListener("click",Di),ui.addEventListener("click",Di)});case"MaxFileSize":return qt.classList.add("visible"),this._dialogTitle=Nn.maximumFileSizeTitle,this._dialogContent=Nn.maximumFileSize.replace("{FileSize}",(0,ti.z3)(1024*Wt.maxFileSize)).replace("{FileName}",Ne.name)+(0,ti.z3)(Ne.size)+".",this._dialogCheckBox=Nn.checkAgain,this._dialogPrimaryButton=Nn.buttonOk,this._dialogSecondaryButton=Nn.buttonCancel,yield Ht.requestStateUpdate.call(this,!0),new Promise(Un=>{const Cn=this.renderRoot.querySelector(".file-upload-dialog-ok"),Dn=this.renderRoot.querySelector(".file-upload-dialog-cancel"),ui=this.renderRoot.querySelector(".file-upload-dialog-close"),Fi=this.renderRoot.querySelector("#file-upload-dialog-check");Fi.checked=!1,Fi.classList.remove("hide");const Ri=()=>{qt.classList.remove("visible"),Un([Fi.checked?1:0])},Di=()=>{qt.classList.remove("visible"),Un([0])};Cn.removeEventListener("click",Ri),Dn.removeEventListener("click",Di),ui.removeEventListener("click",Di),Cn.addEventListener("click",Ri),Dn.addEventListener("click",Di),ui.addEventListener("click",Di)})}})}getGrapQuery(Ne){let st="";return this.fileUploadList.itemPath&&this.fileUploadList.itemPath.length>0&&(st=this.fileUploadList.itemPath.startsWith("/")?this.fileUploadList.itemPath:"/"+this.fileUploadList.itemPath),this.fileUploadList.userId&&this.fileUploadList.itemId?`/users/${this.fileUploadList.userId}/drive/items/${this.fileUploadList.itemId}:${Ne}`:this.fileUploadList.userId&&this.fileUploadList.itemPath?`/users/${this.fileUploadList.userId}/drive/root:${st}${Ne}`:this.fileUploadList.groupId&&this.fileUploadList.itemId?`/groups/${this.fileUploadList.groupId}/drive/items/${this.fileUploadList.itemId}:${Ne}`:this.fileUploadList.groupId&&this.fileUploadList.itemPath?`/groups/${this.fileUploadList.groupId}/drive/root:${st}${Ne}`:this.fileUploadList.driveId&&this.fileUploadList.itemId?`/drives/${this.fileUploadList.driveId}/items/${this.fileUploadList.itemId}:${Ne}`:this.fileUploadList.driveId&&this.fileUploadList.itemPath?`/drives/${this.fileUploadList.driveId}/root:${st}${Ne}`:this.fileUploadList.siteId&&this.fileUploadList.itemId?`/sites/${this.fileUploadList.siteId}/drive/items/${this.fileUploadList.itemId}:${Ne}`:this.fileUploadList.siteId&&this.fileUploadList.itemPath?`/sites/${this.fileUploadList.siteId}/drive/root:${st}${Ne}`:this.fileUploadList.itemId?`/me/drive/items/${this.fileUploadList.itemId}:${Ne}`:this.fileUploadList.itemPath?`/me/drive/root:${st}${Ne}`:`/me/drive/root:${Ne}`}sendFileItemGraph(Ne){return pt(this,void 0,void 0,function*(){const st=this.fileUploadList.graph;let jt="";if(Ne.file.size<this._maxChunkSize)try{Ne.completed||((null===Ne.conflictBehavior||"replace"===Ne.conflictBehavior)&&(jt=`${this.getGrapQuery(Ne.fullPath)}:/content`),"rename"===Ne.conflictBehavior&&(jt=`${this.getGrapQuery(Ne.fullPath)}:/content?@microsoft.graph.conflictBehavior=rename`),Ne.driveItem=yield(0,b.sy)(st,jt,Ne.file),null!==Ne.driveItem?this.setUploadSuccess(Ne):(Ne.driveItem={name:Ne.file.name},this.setUploadFail(Ne,Nn.failUploadFile)))}catch{this.setUploadFail(Ne,Nn.failUploadFile)}else if(!Ne.completed&&void 0===Ne.uploadUrl){const Wt=yield(0,b.Ay)(st,`${this.getGrapQuery(Ne.fullPath)}:/createUploadSession`,Ne.conflictBehavior);try{if(null!==Wt){Ne.uploadUrl=Wt.uploadUrl;const Ht=yield this.sendSessionUrlGraph(st,Ne);null!==Ht?(Ne.driveItem=Ht,this.setUploadSuccess(Ne)):this.setUploadFail(Ne,Nn.failUploadFile)}else this.setUploadFail(Ne,Nn.failUploadFile)}catch{}}})}sendSessionUrlGraph(Ne,st){const jt=Object.create(null,{requestStateUpdate:{get:()=>super.requestStateUpdate}});return pt(this,void 0,void 0,function*(){for(;st.file.size>st.minSize;){void 0===st.mimeStreamString&&(st.mimeStreamString=yield this.readFileContent(st.file));const Wt=new Blob([st.mimeStreamString.slice(st.minSize,st.maxSize)]);if(st.percent=Math.round(st.maxSize/st.file.size*100),yield jt.requestStateUpdate.call(this,!0),void 0===st.uploadUrl)return null;{const Ht=yield(0,b.mj)(Ne,st.uploadUrl,""+(st.maxSize-st.minSize),`bytes ${st.minSize}-${st.maxSize-1}/${st.file.size}`,Wt);if(null===Ht)return null;if((0,b.gt)(Ht))st.minSize=parseInt(Ht.nextExpectedRanges[0].split("-")[0],10),st.maxSize=st.minSize+this._maxChunkSize,st.maxSize>st.file.size&&(st.maxSize=st.file.size);else if(void 0!==Ht.id)return Ht}}})}setUploadSuccess(Ne){Ne.percent=100,super.requestStateUpdate(!0),setTimeout(()=>{Ne.iconStatus=(0,S.r)(S.A.Success),Ne.view="twolines",Ne.fieldUploadResponse="lastModifiedDateTime",Ne.completed=!0,super.requestStateUpdate(!0),(0,b.$V)()},500)}setUploadFail(Ne,st){setTimeout(()=>{Ne.iconStatus=(0,S.r)(S.A.Fail),Ne.view="twolines",Ne.driveItem.description=st,Ne.fieldUploadResponse="description",Ne.completed=!0,super.requestStateUpdate(!0)},500)}readFileContent(Ne){return new Promise((st,jt)=>{const Wt=new FileReader;Wt.onloadend=()=>{st(Wt.result)},Wt.onerror=Ht=>{jt(Ht)},Wt.readAsArrayBuffer(Ne)})}getFilesFromUploadArea(Ne){return pt(this,void 0,void 0,function*(){const st=[];let jt;const Wt=[];for(const Ht of Ne)if(Kt(Ht))if(gt(Ht))if(jt=Ht.getAsEntry(),Et(jt))st.push(jt);else{const qt=Ht.getAsFile();qt&&(this.writeFilePath(qt,""),Wt.push(qt))}else if(Ht.webkitGetAsEntry)if(jt=Ht.webkitGetAsEntry(),Et(jt))st.push(jt);else{const qt=Ht.getAsFile();qt&&(this.writeFilePath(qt,""),Wt.push(qt))}else{const qt=Ht.getAsFile();qt&&(this.writeFilePath(qt,""),Wt.push(qt))}else this.writeFilePath(Ht,""),Wt.push(Ht);if(st.length>0){const Ht=yield this.getFolderFiles(st);Wt.push(...Ht)}return Wt})}getFolderFiles(Ne){return new Promise(st=>{let jt=0;const Wt=[];Ne.forEach(Un=>{Ht(Un,"")});const Ht=(Un,Cn)=>{Et(Un)?qt(Un.createReader()):(Bt=>Bt.isFile)(Un)&&(jt++,Un.file(Dn=>{jt--,this.writeFilePath(Dn,Cn),Wt.push(Dn),0===jt&&st(Wt)}))},qt=Un=>{jt++,Un.readEntries(Cn=>{jt--;for(const Dn of Cn)Ht(Dn,Dn.fullPath);0===jt&&st(Wt)})}})}writeFilePath(Ne,st){Ne.fullPath=st}}return un([(0,O.MZ)({type:Object}),Xi("design:type",Array)],Bt.prototype,"filesToUpload",void 0),un([(0,O.MZ)({type:Object}),Xi("design:type",Object)],Bt.prototype,"fileUploadList",void 0),Bt})();var yi=h(882),$n=function(Bt,yt,Ne,st){var Ht,jt=arguments.length,Wt=jt<3?yt:null===st?st=Object.getOwnPropertyDescriptor(yt,Ne):st;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Bt,yt,Ne,st);else for(var qt=Bt.length-1;qt>=0;qt--)(Ht=Bt[qt])&&(Wt=(jt<3?Ht(Wt):jt>3?Ht(yt,Ne,Wt):Ht(yt,Ne))||Wt);return jt>3&&Wt&&Object.defineProperty(yt,Ne,Wt),Wt},jn=function(Bt,yt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(Bt,yt)},Zi=function(Bt,yt,Ne,st){return new(Ne||(Ne=Promise))(function(Wt,Ht){function qt(Dn){try{Cn(st.next(Dn))}catch(ui){Ht(ui)}}function Un(Dn){try{Cn(st.throw(Dn))}catch(ui){Ht(ui)}}function Cn(Dn){Dn.done?Wt(Dn.value):function jt(Wt){return Wt instanceof Ne?Wt:new Ne(function(Ht){Ht(Wt)})}(Dn.value).then(qt,Un)}Cn((st=st.apply(Bt,yt||[])).next())})};const Wr=()=>{(0,Pn.E)(yi.m9),(0,H.R)(),(0,Pn.E)(j,G.zi,L.c,vi),(0,H.R)(),(0,Ii.N)("file-upload",At),(0,Ii.N)("file-list",Kr)};let Kr=(()=>{class Bt extends a.N{static get styles(){return R}get strings(){return W}get displayName(){return this.strings.filesSectionTitle}get cardTitle(){return this.strings.filesSectionTitle}renderIcon(){return(0,S.r)(S.A.Files)}static get requiredScopes(){return[...new Set([...H.l.requiredScopes])]}constructor(){super(),this._isCompact=!1,this.fileQueries=null,this.files=null,this.itemView="threelines",this.fileExtensions=[],this.pageSize=10,this.disableOpenOnClick=!1,this.hideMoreFilesButton=!1,this.enableFileUpload=!1,this.maxUploadFile=10,this.excludedFileExtensions=[],this._preloadedFiles=[],this._focusedItemIndex=-1,this.renderLoading=()=>this.files?this.renderContent():this.renderTemplate("loading",null)||E.qy``,this.renderContent=()=>this.files&&0!==this.files.length?this._isCompact?this.renderCompactView():this.renderFullView():this.renderNoData(),this.onFocusFirstItem=()=>this._focusedItemIndex=0,this.onFileListKeyDown=Ne=>{const st=this.renderRoot.querySelector(".file-list");let jt;if(st?.children.length){if(("ArrowUp"===Ne.code||"ArrowDown"===Ne.code)&&("ArrowUp"===Ne.code&&(-1===this._focusedItemIndex&&(this._focusedItemIndex=st.children.length),this._focusedItemIndex=(this._focusedItemIndex-1+st.children.length)%st.children.length),"ArrowDown"===Ne.code&&(this._focusedItemIndex=(this._focusedItemIndex+1)%st.children.length),jt=st.children[this._focusedItemIndex],this.updateItemBackgroundColor(st,jt,"focused")),"Enter"===Ne.code||"Space"===Ne.code){jt=st.children[this._focusedItemIndex];const Wt=jt.children[0];Ne.preventDefault(),this.fireCustomEvent("itemClick",Wt.fileDetails),this.handleFileClick(Wt.fileDetails),this.updateItemBackgroundColor(st,jt,"selected")}"Tab"===Ne.code&&(jt=st.children[this._focusedItemIndex])}}}clearState(){super.clearState(),this.files=null}asCompactView(){return this._isCompact=!0,this}asFullView(){return this._isCompact=!1,this}args(){return[this.providerState,this.fileListQuery,this.fileQueries,this.siteId,this.driveId,this.groupId,this.itemId,this.itemPath,this.userId,this.insightType,this.fileExtensions,this.pageSize,this.maxFileSize]}renderCompactView(){const Ne=this.files.slice(0,3);return this.renderFiles(Ne)}renderFullView(){return this.renderTemplate("default",{files:this.files})||this.renderFiles(this.files)}renderNoData(){return this.renderTemplate("no-data",null)||(!0===this.enableFileUpload&&void 0!==s.b.globalProvider?E.qy`
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
                @click=${jt=>this.handleItemSelect(st,jt)}>
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
        </fluent-button>`}renderFileUpload(){const Ne={graph:s.b.globalProvider.graph.forComponent(this),driveId:this.driveId,excludedFileExtensions:this.excludedFileExtensions,groupId:this.groupId,itemId:this.itemId,itemPath:this.itemPath,userId:this.userId,siteId:this.siteId,maxFileSize:this.maxFileSize,maxUploadFile:this.maxUploadFile};return x.Q`
        <mgt-file-upload .fileUploadList=${Ne} ></mgt-file-upload>
      `}loadState(){var Ne,st;return Zi(this,void 0,void 0,function*(){const jt=s.b.globalProvider;if(!jt||jt.state===y.HJ.Loading)return;if(jt.state===y.HJ.SignedOut)return void(this.files=null);const Wt=jt.graph.forComponent(this);let Ht,qt;const Un=!(this.driveId||this.siteId||this.groupId||this.userId);if((this.driveId&&!this.itemId&&!this.itemPath||this.groupId&&!this.itemId&&!this.itemPath||this.siteId&&!this.itemId&&!this.itemPath||this.userId&&!this.insightType&&!this.itemId&&!this.itemPath)&&(this.files=null),!this.files){let Cn;if(this.fileListQuery?qt=yield(0,b.D)(Wt,this.fileListQuery,this.pageSize):this.fileQueries?Ht=yield(0,b.bJ)(Wt,this.fileQueries):Un?this.itemId?qt=yield(0,b.Y1)(Wt,this.itemId,this.pageSize):this.itemPath?qt=yield(0,b.o4)(Wt,this.itemPath,this.pageSize):this.insightType?Ht=yield(0,b.jI)(Wt,this.insightType):qt=yield(0,b.Ad)(Wt,this.pageSize):this.driveId?this.itemId?qt=yield(0,b.Kx)(Wt,this.driveId,this.itemId,this.pageSize):this.itemPath&&(qt=yield(0,b.WU)(Wt,this.driveId,this.itemPath,this.pageSize)):this.groupId?this.itemId?qt=yield(0,b.$4)(Wt,this.groupId,this.itemId,this.pageSize):this.itemPath&&(qt=yield(0,b.NO)(Wt,this.groupId,this.itemPath,this.pageSize)):this.siteId?this.itemId?qt=yield(0,b.Z)(Wt,this.siteId,this.itemId,this.pageSize):this.itemPath&&(qt=yield(0,b.Rh)(Wt,this.siteId,this.itemPath,this.pageSize)):this.userId&&(this.itemId?qt=yield(0,b.Zm)(Wt,this.userId,this.itemId,this.pageSize):this.itemPath?qt=yield(0,b.n)(Wt,this.userId,this.itemPath,this.pageSize):this.insightType&&(Ht=yield(0,b.S0)(Wt,this.userId,this.insightType))),qt&&(this.pageIterator=qt,this._preloadedFiles=[...this.pageIterator.value],Ht=this._preloadedFiles.splice(0,this._preloadedFiles.length>=this.pageSize?this.pageSize:this._preloadedFiles.length)),(null===(Ne=this.fileExtensions)||void 0===Ne?void 0:Ne.length)>0){if(null!==(st=this.pageIterator)&&void 0!==st&&st.value){for(;this.pageIterator.hasNext;)yield(0,b.oL)(this.pageIterator);Ht=this.pageIterator.value,this._preloadedFiles=[]}Cn=Ht.filter(Dn=>{for(const ui of this.fileExtensions)if(ui===this.getFileExtension(Dn.name))return Dn})}Cn?.length>=0?(this.files=Cn,this.pageSize&&(Ht=this.files.splice(0,this.pageSize),this.files=Ht)):this.files=Ht}})}handleItemSelect(Ne,st){if(this.handleFileClick(Ne),this.fireCustomEvent("itemClick",Ne),st){const jt=this.renderRoot.querySelector(".file-list"),Wt=Array.from(jt.children),Ht=st.target.closest("li"),qt=Wt.indexOf(Ht);this._focusedItemIndex=qt,this.updateItemBackgroundColor(jt,jt.children[this._focusedItemIndex],"selected")}}renderNextPage(){return Zi(this,void 0,void 0,function*(){if(this._preloadedFiles.length>0)this.files=[...this.files,...this._preloadedFiles.splice(0,Math.min(this.pageSize,this._preloadedFiles.length))];else if(this.pageIterator.hasNext){this._isLoadingMore=!0;const Ne=this.renderRoot.querySelector("#file-list-wrapper");Ne?.animate&&Ne.animate([{height:"auto",transformOrigin:"top left"},{height:"auto",transformOrigin:"top left"}],{duration:1e3,easing:"ease-in-out",fill:"both"}),yield(0,b.oL)(this.pageIterator),this._isLoadingMore=!1,this.files=this.pageIterator.value}this.requestUpdate()})}handleFileClick(Ne){Ne?.webUrl&&!this.disableOpenOnClick&&window.open(Ne.webUrl,"_blank","noreferrer")}getFileExtension(Ne){return/(?:\.([^.]+))?$/.exec(Ne)[1]||""}updateItemBackgroundColor(Ne,st,jt){for(const Wt of Ne.children)Wt.classList.remove(jt),Wt.removeAttribute("tabindex");st&&(st.classList.add(jt),st.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"}),st.setAttribute("tabindex","0"),st.focus());for(const Wt of Ne.children)Wt.classList.remove("selected")}reload(Ne=!1){Ne&&(0,b.$V)(),this._task.run()}}return $n([(0,O.wk)(),jn("design:type",Object)],Bt.prototype,"_isCompact",void 0),$n([(0,O.MZ)({attribute:"file-list-query"}),jn("design:type",String)],Bt.prototype,"fileListQuery",void 0),$n([(0,O.MZ)({attribute:"file-queries",converter:(yt,Ne)=>yt?yt.split(",").map(st=>st.trim()):null}),jn("design:type",Array)],Bt.prototype,"fileQueries",void 0),$n([(0,O.MZ)({type:Object}),jn("design:type",Array)],Bt.prototype,"files",void 0),$n([(0,O.MZ)({attribute:"site-id"}),jn("design:type",String)],Bt.prototype,"siteId",void 0),$n([(0,O.MZ)({attribute:"drive-id"}),jn("design:type",String)],Bt.prototype,"driveId",void 0),$n([(0,O.MZ)({attribute:"group-id"}),jn("design:type",String)],Bt.prototype,"groupId",void 0),$n([(0,O.MZ)({attribute:"item-id"}),jn("design:type",String)],Bt.prototype,"itemId",void 0),$n([(0,O.MZ)({attribute:"item-path"}),jn("design:type",String)],Bt.prototype,"itemPath",void 0),$n([(0,O.MZ)({attribute:"user-id"}),jn("design:type",String)],Bt.prototype,"userId",void 0),$n([(0,O.MZ)({attribute:"insight-type"}),jn("design:type",String)],Bt.prototype,"insightType",void 0),$n([(0,O.MZ)({attribute:"item-view",converter:yt=>(0,B.E)(yt,"threelines")}),jn("design:type",String)],Bt.prototype,"itemView",void 0),$n([(0,O.MZ)({attribute:"file-extensions",converter:(yt,Ne)=>yt.split(",").map(st=>st.trim())}),jn("design:type",Array)],Bt.prototype,"fileExtensions",void 0),$n([(0,O.MZ)({attribute:"page-size",type:Number}),jn("design:type",Object)],Bt.prototype,"pageSize",void 0),$n([(0,O.MZ)({attribute:"disable-open-on-click",type:Boolean}),jn("design:type",Object)],Bt.prototype,"disableOpenOnClick",void 0),$n([(0,O.MZ)({attribute:"hide-more-files-button",type:Boolean}),jn("design:type",Object)],Bt.prototype,"hideMoreFilesButton",void 0),$n([(0,O.MZ)({attribute:"max-file-size",type:Number}),jn("design:type",Number)],Bt.prototype,"maxFileSize",void 0),$n([(0,O.MZ)({attribute:"enable-file-upload",type:Boolean}),jn("design:type",Object)],Bt.prototype,"enableFileUpload",void 0),$n([(0,O.MZ)({attribute:"max-upload-file",type:Number}),jn("design:type",Object)],Bt.prototype,"maxUploadFile",void 0),$n([(0,O.MZ)({attribute:"excluded-file-extensions",converter:(yt,Ne)=>yt.split(",").map(st=>st.trim())}),jn("design:type",Array)],Bt.prototype,"excludedFileExtensions",void 0),$n([(0,O.wk)(),jn("design:type",Boolean)],Bt.prototype,"_isLoadingMore",void 0),Bt})()},9569:(rt,pe,h)=>{h.d(pe,{l:()=>z,R:()=>de});var a=h(8324),s=h(9559);const x=[a.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{font-size:var(--default-font-size);font-weight:var(--default-font-weight,400);border:var(--file-border,1px solid transparent);border-radius:var(--file-border-radius,4px);background-color:var(--file-background-color)}:host .item{display:flex;flex-flow:row nowrap;align-items:center;background-color:var(--file-background-color);padding:var(--file-padding,0);margin:var(--file-margin,0)}:host .item:hover{background-color:var(--file-background-color-hover,var(--neutral-fill-hover));border-radius:var(--file-border-radius,4px);cursor:pointer;--secondary-text-color:var(--secondary-text-hover-color)}:host .item:focus,:host .item:focus-visible{background-color:var(--file-background-color-focus,var(--neutral-fill-hover));border-radius:var(--file-border-radius,4px)}:host .item__file-type-icon{height:var(--file-type-icon-height,28px);display:flex;align-items:center;justify-content:center}:host .item__file-type-icon img{height:var(--file-type-icon-height,28px)}:host .item__details{padding-inline-start:var(--file-padding-inline-start,14px)}:host .item__details .line1{font-size:var(--default-font-size);font-weight:var(--file-line1-font-weight,var(--default-font-weight,400));text-transform:var(--file-line1-text-transform,initial);line-height:20px;color:var(--file-line1-color,var(--neutral-foreground-rest))}:host .item__details .line2{color:var(--file-line2-color,var(--secondary-text-color));font-size:var(--file-line2-font-size, var(--last-modified-font-size, 12px));font-weight:var(--file-line2-font-weight,var(--default-font-weight,400));text-transform:var(--file-line2-text-transform,initial);line-height:16px}:host .item__details .line3{color:var(--file-line3-color,var(--secondary-text-color));font-size:var(--file-line3-font-size, var(--size-font-size, 12px));font-weight:var(--file-line3-font-weight,var(--default-font-weight,400));text-transform:var(--file-line3-text-transform,initial);line-height:16px}[dir=rtl] .item{direction:rtl}[dir=rtl] .item__details{direction:rtl}
`];var y=h(2578),E=h(4709),O=h(6885),_=h(7768),b=h(3173),S=h(8360);const B={PowerPoint:"pptx",Word:"docx",Excel:"xlsx",Pdf:"pdf",OneNote:"onetoc",OneNotePage:"one",InfoPath:"xsn",Visio:"vstx",Publisher:"pub",Project:"mpp",Access:"accdb",Mail:"email",Csv:"csv",Archive:"archive",Xps:"vector",Audio:"audio",Video:"video",Image:"photo",Web:"html",Text:"txt",Xml:"xml",Story:"genericfile",ExternalContent:"genericfile",Folder:"folder",Spsite:"spo",Other:"genericfile"},R="https://spoprod-a.akamaihd.net/files/fabric-cdn-prod_20201008.001/assets/item-types";var Q=h(2710);const I={modifiedSubtitle:"Modified",sizeSubtitle:"Size"};var X=h(8940),re=function($,Y,te,j){var L,le=arguments.length,G=le<3?Y:null===j?j=Object.getOwnPropertyDescriptor(Y,te):j;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)G=Reflect.decorate($,Y,te,j);else for(var P=$.length-1;P>=0;P--)(L=$[P])&&(G=(le<3?L(G):le>3?L(Y,te,G):L(Y,te))||G);return le>3&&G&&Object.defineProperty(Y,te,G),G},ve=function($,Y){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata($,Y)};const de=()=>(0,X.N)("file",z);let z=(()=>{class $ extends y.N{static get styles(){return x}get strings(){return I}static get requiredScopes(){return[...new Set(["files.read","files.read.all","sites.read.all"])]}args(){return[this.providerState,this.fileQuery,this.siteId,this.itemId,this.driveId,this.itemPath,this.listId,this.groupId,this.userId,this.insightType,this.insightId,this.fileDetails,this.fileIcon]}constructor(){super(),this.renderContent=()=>{if(!this.driveItem)return this.renderNoData();const te=this.driveItem;let j;if(j=this.renderTemplate("default",{file:te}),!j){const le=this.renderDetails(te),G=this.renderFileTypeIcon();j=a.qy`
        <div class="item">
          ${G} ${le}
        </div>`}return j},this.line1Property="name",this.line2Property="lastModifiedDateTime",this.line3Property="size",this.view="threelines"}renderNoData(){return this.renderTemplate("no-data",null)||a.qy``}renderFileTypeIcon(){if(!this.fileIcon&&!this.driveItem.name)return a.qy``;let te;if(this.fileIcon)te=this.fileIcon;else{const j=/(?:\.([^.]+))?$/;te=(($,Y,te)=>Object.keys(B).find(le=>B[le]===$)?`${R}/${48..toString()}/${$}.svg`:"jpg"===$||"png"===$?($="photo",`${R}/${48..toString()}/${$}.svg`):null)(void 0===this.driveItem.package&&void 0===this.driveItem.folder?j.exec(this.driveItem.name)[1]?j.exec(this.driveItem.name)[1].toLowerCase():this.driveItem.size?"null":"folder":void 0!==this.driveItem.package&&"oneNote"===this.driveItem.package.type?"onetoc":"folder")}return a.qy`
      <div class="item__file-type-icon">
        ${te?a.qy`
              <img src=${te} alt="File icon" />
            `:a.qy`
              ${(0,Q.r)(Q.A.File)}
            `}
      </div>
    `}renderDetails(te){if(!te||"image"===this.view)return a.qy``;const j=[];if(this.view>"image"){const le=this.getTextFromProperty(te,this.line1Property);le&&j.push(a.qy`
          <div class="line1" aria-label="${le}">${le}</div>
        `)}if(this.view>"oneline"){const le=this.getTextFromProperty(te,this.line2Property);le&&j.push(a.qy`
          <div class="line2" aria-label="${le}">${le}</div>
        `)}if(this.view>"twolines"){const le=this.getTextFromProperty(te,this.line3Property);le&&j.push(a.qy`
          <div class="line3" aria-label="${le}">${le}</div>
        `)}return a.qy`
      <div class="item__details">
        ${j}
      </div>
    `}loadState(){return function($,Y,te,j){return new(te||(te=Promise))(function(G,L){function P(ge){try{Z(j.next(ge))}catch(Be){L(Be)}}function ee(ge){try{Z(j.throw(ge))}catch(Be){L(Be)}}function Z(ge){ge.done?G(ge.value):function le(G){return G instanceof te?G:new te(function(L){L(G)})}(ge.value).then(P,ee)}Z((j=j.apply($,Y||[])).next())})}(this,void 0,void 0,function*(){if(this.fileDetails)return void(this.driveItem=this.fileDetails);const te=E.b.globalProvider;if(!te||te.state===O.HJ.Loading)return;if(te.state===O.HJ.SignedOut)return void(this.driveItem=null);const j=te.graph.forComponent(this);let le;const G=!(this.driveId||this.siteId||this.groupId||this.listId||this.userId);this.driveId&&!this.itemId&&!this.itemPath||this.siteId&&!this.itemId&&!this.itemPath||this.groupId&&!this.itemId&&!this.itemPath||this.listId&&!this.siteId&&!this.itemId||this.insightType&&!this.insightId||this.userId&&!this.itemId&&!this.itemPath&&!this.insightType&&!this.insightId?le=null:this.fileQuery?le=yield(0,_.zn)(j,this.fileQuery):this.itemId&&G?le=yield(0,_.KE)(j,this.itemId):this.itemPath&&G?le=yield(0,_.OB)(j,this.itemPath):this.userId?this.itemId?le=yield(0,_.Nd)(j,this.userId,this.itemId):this.itemPath?le=yield(0,_.bn)(j,this.userId,this.itemPath):this.insightType&&this.insightId&&(le=yield(0,_.wH)(j,this.userId,this.insightType,this.insightId)):this.driveId?this.itemId?le=yield(0,_.Mu)(j,this.driveId,this.itemId):this.itemPath&&(le=yield(0,_.WW)(j,this.driveId,this.itemPath)):this.siteId&&!this.listId?this.itemId?le=yield(0,_.LI)(j,this.siteId,this.itemId):this.itemPath&&(le=yield(0,_.dM)(j,this.siteId,this.itemPath)):this.listId?le=yield(0,_.Sp)(j,this.siteId,this.listId,this.itemId):this.groupId?this.itemId?le=yield(0,_.XD)(j,this.groupId,this.itemId):this.itemPath&&(le=yield(0,_.d$)(j,this.groupId,this.itemPath)):this.insightType&&!this.userId&&(le=yield(0,_.Pk)(j,this.insightType,this.insightId)),this.driveItem=le})}getTextFromProperty(te,j){if(!j||0===j.length)return null;const le=j.trim().split(",");let G,L=0;for(;!G&&L<le.length;){const P=le[L].trim();switch(P){case"size":{let ee="0";te.size&&(ee=(0,b.z3)(te.size)),G=`${this.strings.sizeSubtitle}: ${ee}`;break}case"lastModifiedDateTime":{let ee,Z;if(te.lastModifiedDateTime){const ge=new Date(te.lastModifiedDateTime);ee=(0,b.h3)(ge),Z=`${this.strings.modifiedSubtitle} ${ee}`}else Z="";G=Z;break}default:G=te[P]}L++}return G}}return re([(0,s.MZ)({attribute:"file-query"}),ve("design:type",String)],$.prototype,"fileQuery",void 0),re([(0,s.MZ)({attribute:"site-id"}),ve("design:type",String)],$.prototype,"siteId",void 0),re([(0,s.MZ)({attribute:"drive-id"}),ve("design:type",String)],$.prototype,"driveId",void 0),re([(0,s.MZ)({attribute:"group-id"}),ve("design:type",String)],$.prototype,"groupId",void 0),re([(0,s.MZ)({attribute:"list-id"}),ve("design:type",String)],$.prototype,"listId",void 0),re([(0,s.MZ)({attribute:"user-id"}),ve("design:type",String)],$.prototype,"userId",void 0),re([(0,s.MZ)({attribute:"item-id"}),ve("design:type",String)],$.prototype,"itemId",void 0),re([(0,s.MZ)({attribute:"item-path"}),ve("design:type",String)],$.prototype,"itemPath",void 0),re([(0,s.MZ)({attribute:"insight-type"}),ve("design:type",String)],$.prototype,"insightType",void 0),re([(0,s.MZ)({attribute:"insight-id"}),ve("design:type",String)],$.prototype,"insightId",void 0),re([(0,s.MZ)({type:Object}),ve("design:type",Object)],$.prototype,"fileDetails",void 0),re([(0,s.MZ)({attribute:"file-icon"}),ve("design:type",String)],$.prototype,"fileIcon",void 0),re([(0,s.MZ)({type:Object}),ve("design:type",Object)],$.prototype,"driveItem",void 0),re([(0,s.MZ)({attribute:"line1-property"}),ve("design:type",String)],$.prototype,"line1Property",void 0),re([(0,s.MZ)({attribute:"line2-property"}),ve("design:type",String)],$.prototype,"line2Property",void 0),re([(0,s.MZ)({attribute:"line3-property"}),ve("design:type",String)],$.prototype,"line3Property",void 0),re([(0,s.MZ)({attribute:"view",converter:Y=>(0,S.E)(Y,"threelines")}),ve("design:type",String)],$.prototype,"view",void 0),$})()},7531:(rt,pe,h)=>{h.r(pe),h.d(pe,{MgtPersonCard:()=>sn,registerMgtPersonCardComponent:()=>cn});var a=h(8324),s=h(9559),x=h(3402),y=h(2578);class E{static get microsoftTeamsLib(){return this._microsoftTeamsLib||window.microsoftTeams}static set microsoftTeamsLib(vt){this._microsoftTeamsLib=vt}static get isAvailable(){return!(!this.microsoftTeamsLib||(window.parent!==window.self||!window.nativeInterface)&&"embedded-page-container"!==window.name&&"extension-tab-frame"!==window.name)}static executeDeepLink(vt,Ie){const je=this.microsoftTeamsLib;je.initialize(),je.executeDeepLink(vt,Ie)}}var O=h(4569),_=h(4709),b=h(6885),S=h(5794),B=h(6692),R=h(4130),W=h(2898),H=h(2710),Q=h(1786),I=h(4327);let X=(()=>{class ht{}return ht.sections={files:!0,mailMessages:!0,organization:{showWorksWith:!0},profile:!0},ht.useContactApis=!0,ht.isSendMessageVisible=!0,ht})();var re=h(5527),ve=h(7768),oe=function(ht,vt,Ie,je){return new(Ie||(Ie=Promise))(function(dt,Gt){function Jt(pn){try{wn(je.next(pn))}catch(Ci){Gt(Ci)}}function an(pn){try{wn(je.throw(pn))}catch(Ci){Gt(Ci)}}function wn(pn){pn.done?dt(pn.value):function Ze(dt){return dt instanceof Ie?dt:new Ie(function(Gt){Gt(dt)})}(pn.value).then(Jt,an)}wn((je=je.apply(ht,vt||[])).next())})};const de="businessPhones,companyName,department,displayName,givenName,jobTitle,mail,mobilePhone,officeLocation,preferredLanguage,surname,userPrincipalName,id,accountEnabled",te=["People.Read.All"],le=["Mail.ReadBasic","Mail.Read","Mail.ReadWrite"],P=["User.Read.All","User.ReadWrite.All"],Z=["Chat.Create","Chat.ReadWrite"],Be=["ChatMessage.Send","Chat.ReadWrite"];var et=h(6479);const Pe=[a.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{box-shadow:var(--person-card-box-shadow,var(--elevation-shadow-card-rest));width:var(--mgt-flyout-set-width,375px);overflow:hidden;user-select:none;border-radius:8px;background-color:var(--person-card-background-color,var(--neutral-layer-floating));--file-list-background-color:transparent;--file-list-box-shadow:none;--file-item-background-color:transparent}:host .small{max-height:100vh;overflow:hidden auto}:host .nav{height:0;position:relative;z-index:100}:host .nav__back{padding-top:18px;padding-inline-start:12px;height:32px;width:32px}:host .nav__back svg{fill:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .nav__back:hover{cursor:pointer}:host .nav__back:hover svg{fill:var(--person-card-nav-back-arrow-hover-color,var(--neutral-foreground-rest))}:host .close-card-container{position:relative;z-index:100}:host .close-card-container .close-button{position:absolute;right:10px;margin-top:9px;z-index:1;border:1px solid transparent}:host .close-card-container .close-button svg path{fill:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .close-card-container .close-button:hover svg path{fill:var(--person-card-close-button-hover-color,var(--neutral-foreground-rest))}:host .person-details-container{display:flex;flex-direction:column;padding-inline-start:22px;padding-block:36px;border-bottom:1px solid var(--person-card-border-color,var(--neutral-stroke-rest))}:host .person-details-container .person-image{--person-avatar-top-spacing:var(--person-card-avatar-top-spacing, 15px);--person-details-left-spacing:var(--person-card-details-left-spacing, 15px);--person-details-bottom-spacing:var(--person-card-details-bottom-spacing, 0);--person-background-color:var(--person-card-background-color, var(--neutral-layer-floating));--person-line1-font-size:var(--person-card-line1-font-size, 20px);--person-line1-font-weight:var(--person-card-line1-font-weight, 600);--person-line1-text-line-height:var(--person-card-line1-line-height, 28px);--person-line1-text-color:var(--person-card-line1-text-color, var(--neutral-foreground-rest));--person-line2-font-size:var(--person-card-line2-font-size, 14px);--person-line2-font-weight:var(--person-card-line2-font-weight, 400);--person-line2-text-line-height:var(--person-card-line2-line-height, 20px);--person-line2-text-color:var(--person-card-line2-text-color, var(--neutral-foreground-hint));--person-line3-font-size:var(--person-card-line3-font-size, 14px);--person-line3-font-weight:var(--person-card-line3-font-weight, 400);--person-line3-text-line-height:var(--person-card-line3-line-height, 19px);--person-line3-text-color:var(--person-card-line3-text-color, var(--neutral-foreground-hint));--person-avatar-size:var(--person-card-avatar-size, 75px);--person-presence-wrapper-bottom:-15px}:host .person-details-container .base-icons{display:flex;align-items:center;margin-inline-start:var(--person-card-base-icons-left-spacing,calc(var(--person-card-avatar-size,75px) + var(--person-card-details-left-spacing,15px) - 8px));z-index:1}:host .person-details-container .base-icons .icon{display:flex;align-items:center;font-size:13px;white-space:nowrap}:host .person-details-container .base-icons .icon:not(:last-child){margin-inline-end:28px}:host .person-details-container .base-icons .icon svg .filled{display:none}:host .person-details-container .base-icons .icon svg .regular{display:block}:host .person-details-container .base-icons .icon svg path{fill:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .person-details-container .base-icons .icon:active svg .filled,:host .person-details-container .base-icons .icon:hover svg .filled{display:block}:host .person-details-container .base-icons .icon:active svg .regular,:host .person-details-container .base-icons .icon:hover svg .regular{display:none}:host .person-details-container .base-icons .icon:active svg path,:host .person-details-container .base-icons .icon:hover svg path{fill:var(--person-card-icon-hover-color,var(--accent-foreground-hover))}:host .expanded-details-container{display:flex;flex-direction:column;position:relative}:host .expanded-details-container .expanded-details-button{display:flex;justify-content:center;height:32px}:host .expanded-details-container .expanded-details-button svg path{stroke:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .expanded-details-container .expanded-details-button:hover{cursor:pointer;background-color:var(--person-card-expanded-background-color-hover,var(--neutral-fill-hover))}:host .expanded-details-container .sections .section{padding:20px 0;display:flex;flex-direction:column;position:relative}:host .expanded-details-container .sections .section:not(:last-child)::after{position:absolute;content:"";width:90%;transform:translateX(-50%);border-bottom:1px solid var(--person-card-border-color,var(--neutral-stroke-rest));left:50%;bottom:0}:host .expanded-details-container .sections .section__header{display:flex;flex-direction:row;padding:0 20px}:host .expanded-details-container .sections .section__title{flex-grow:1;color:var(--person-card-line1-text-color,var(--neutral-foreground-rest));font-size:14px;font-weight:600;line-height:19px}:host .expanded-details-container .sections .section__show-more{font-size:12px;font-weight:600;align-self:center;vertical-align:top;--base-height-multiplier:6}:host .expanded-details-container .sections .section__show-more:hover{background-color:var(--person-card-fluent-background-color-hover,var(--neutral-fill-hover))}:host .expanded-details-container .sections .section__content{margin-top:14px}:host .expanded-details-container .sections .section .additional-details{padding:0 20px}:host .expanded-details-container .divider{z-index:100;position:relative;width:375px;margin:0;border-style:none;border-bottom:1px solid var(--person-card-border-color,var(--neutral-stroke-rest))}:host .expanded-details-container .section-nav{height:35px}:host .expanded-details-container .section-nav fluent-tabs{grid-template-columns:minmax(1px,0.1fr)}:host .expanded-details-container .section-nav fluent-tabs.horizontal::part(activeIndicator){width:10px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel{max-height:360px;min-height:360px;overflow:hidden auto;padding:0;scrollbar-width:thin}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel .inserted{padding:20px 0;max-width:var(--mgt-flyout-set-width,375px);min-width:var(--mgt-flyout-set-width,360px);--file-list-box-shadow:none;--file-list-padding:0}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel .inserted .title{font-size:14px;font-weight:600;color:var(--title-color-subtitle,var(--neutral-foreground-rest,#1a1a1a));margin:0 20px 20px;line-height:19px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel .overview-panel{max-width:var(--mgt-flyout-set-width,375px)}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar{height:4em;width:4px;border-radius:11px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar-button{height:1px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar-track{border-radius:10px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar-thumb{background:grey;border-radius:10px;height:4px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab{padding-bottom:1px!important;border:1px solid transparent!important}:host .expanded-details-container .section-nav fluent-tabs fluent-tab:focus-visible{border:1px solid #2b2b2b!important}:host .expanded-details-container .section-nav fluent-tabs fluent-tab.section-nav__icon{cursor:pointer;box-sizing:border-box;width:53px;height:36px;display:flex;align-items:center;justify-content:center}:host .expanded-details-container .section-nav fluent-tabs fluent-tab.section-nav__icon svg{fill:var(--person-card-fluent-background-color,transparent)}:host .expanded-details-container .section-nav fluent-tabs fluent-tab.section-nav__icon:hover{background:var(--person-card-fluent-background-color-hover,var(--neutral-fill-hover));border-radius:4px;z-index:0;position:relative}:host .expanded-details-container .section-host{min-height:360px;overflow:hidden auto}:host .expanded-details-container .section-host::-webkit-scrollbar{height:4em;width:4px;border-radius:11px}:host .expanded-details-container .section-host::-webkit-scrollbar-button{background:#fff}:host .expanded-details-container .section-host::-webkit-scrollbar-track{background:#fff;border-radius:10px}:host .expanded-details-container .section-host::-webkit-scrollbar-track-piece{background:#fff}:host .expanded-details-container .section-host::-webkit-scrollbar-thumb{background:grey;border-radius:10px;height:4px}:host .expanded-details-container .section-host.small{overflow-y:hidden}:host .loading{margin:40px 20px;display:flex;justify-content:center;height:360px}:host .message-section{border-bottom:1px solid var(--person-card-chat-input-border-color,var(--neutral-foreground-hint));display:flex}:host .message-section fluent-text-field{margin:10px 10px 10px 16px;--neutral-fill-input-rest:$person-card-background-color;--neutral-fill-input-hover:$person-card-chat-input-hover-color;--neutral-fill-input-focus:$person-card-chat-input-focus-color;width:300px;margin-inline-start:16px;border-radius:4px;border:1px solid var(--person-card-chat-input-border-color,var(--neutral-foreground-hint))}:host .message-section .send-message-icon{max-width:15px;margin-top:10px}:host .message-section svg{height:17px;width:16px;fill:var(--person-card-chat-input-border-color,var(--neutral-foreground-hint))}:host .message-section svg:hover{filter:brightness(.5)}:host .message-section svg:disabled{filter:none}:host .person-root.large,:host .person-root.threelines{--person-avatar-size-3-lines:75px}:host fluent-button.close-button.lightweight::part(control),:host fluent-button.expanded-details-button::part(control),:host fluent-button.section__show-more.lightweight::part(control){background:var(--person-card-fluent-background-color,transparent)}:host fluent-button.icon::part(control),:host fluent-button.nav__back::part(control){border:none;padding:0;background:0 0}:host fluent-button.icon::part(control) :hover,:host fluent-button.nav__back::part(control) :hover{background:0 0}[dir=rtl] .base-icons{right:91px}[dir=rtl] .nav__back{width:20px!important;transform:scaleX(-1);filter:fliph;filter:"FlipH"}[dir=rtl] .close-card-container .close-button{right:auto;left:10px}[dir=rtl] .message-section svg{transform:scale(-1,1)}@media (forced-colors:active) and (prefers-color-scheme:dark){.root{border:1px solid #fff;border-radius:inherit}.root svg,.root svg>path{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.expanded-details-container>svg,.expanded-details-container>svg>path,svg,svg>path{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}@media (forced-colors:active) and (prefers-color-scheme:light){.root{border:1px solid #000;border-radius:inherit}.root svg,.root svg>path{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.expanded-details-container>svg,.expanded-details-container>svg>path,svg,svg>path{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}
`];var se=function(ht,vt,Ie,je){var Gt,Ze=arguments.length,dt=Ze<3?vt:null===je?je=Object.getOwnPropertyDescriptor(vt,Ie):je;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)dt=Reflect.decorate(ht,vt,Ie,je);else for(var Jt=ht.length-1;Jt>=0;Jt--)(Gt=ht[Jt])&&(dt=(Ze<3?Gt(dt):Ze>3?Gt(vt,Ie,dt):Gt(vt,Ie))||dt);return Ze>3&&dt&&Object.defineProperty(vt,Ie,dt),dt},Qe=function(ht,vt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(ht,vt)};let tt=(()=>{class ht extends y.N{get isCompact(){return this._isCompact}constructor(){super(),this.personDetails=null,this.renderLoading=()=>O.Q`
      <div class="loading">
        <mgt-spinner></mgt-spinner>
      </div>
    `,this._isCompact=!1}asCompactView(){return this._isCompact=!0,this}asFullView(){return this._isCompact=!1,this}clearState(){this._isCompact=!1,this.personDetails=null}render(){return this.isCompact?this.renderCompactView():this.renderFullView()}renderNoData(){return a.qy`
      <div class="no-data">No data</div>
    `}navigateCard(Ie){var je;let Ze=this.parentNode;for(;Ze;){Ze=Ze.parentNode;const Gt=Ze;if((null===(je=Gt?.host)||void 0===je?void 0:je.tagName)===`${S.U.prefix}-PERSON-CARD`.toUpperCase()){Ze=Gt.host;break}}Ze.navigate(Ie)}}return se([(0,s.MZ)({attribute:"person-details",type:Object}),Qe("design:type",Object)],ht.prototype,"personDetails",void 0),se([(0,s.wk)(),Qe("design:type",Boolean)],ht.prototype,"_isCompact",void 0),ht})();const ft=[a.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none}:host .root .part{display:grid;grid-template-columns:auto 1fr auto}:host .root .part .part__icon{display:flex;min-width:20px;width:20px;height:20px;align-items:center;justify-content:center;margin-left:20px;margin-top:10px;line-height:20px}:host .root .part .part__icon svg{fill:var(--contact-copy-icon-color,var(--neutral-foreground-hint))}:host .root .part .part__details{margin:10px 14px;overflow:hidden}:host .root .part .part__details .part__title{font-size:12px;color:var(--contact-title-color,var(--neutral-foreground-hint));line-height:16px}:host .root .part .part__details .part__value{grid-column:2;color:var(--contact-value-color,var(--neutral-foreground-rest));font-size:14px;font-weight:400;line-height:19px}:host .root .part .part__details .part__value .part__link{color:var(--contact-link-color,var(--accent-foreground-rest));font-size:14px;cursor:pointer;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%;display:inline-block}:host .root .part .part__details .part__value .part__link:hover{color:var(--contact-link-hover-color,var(--accent-foreground-hover))}:host .root .part .part__copy{width:32px;height:100%;background-color:var(--contact-background-color,transparent);visibility:hidden;display:flex;align-items:center;justify-content:flex-start}:host .root .part .part__copy svg{fill:var(--contact-copy-icon-color,var(--neutral-foreground-hint));cursor:pointer}:host .root .part:hover .part__copy{visibility:visible}:host .root.compact{padding:0}:host .root.compact .part{height:30px;align-items:center}:host .root.compact .part__details{margin:0}:host .root.compact .part__title{display:none}:host .root.compact .part__icon{margin-top:0;margin-right:6px;margin-bottom:2px}[dir=rtl] .part__link.phone{text-align:right;direction:ltr}[dir=rtl] .part__icon{margin:10px 20px 0 0!important}[dir=rtl].compact .part__icon{margin-left:6px!important;margin-top:0!important}@media (forced-colors:active) and (prefers-color-scheme:dark){.root svg{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.root svg path,.root svg rect{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}@media (forced-colors:active) and (prefers-color-scheme:light){.root svg{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.root svg path,.root svg rect{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}
`],Tt={contactSectionTitle:"Contact",emailTitle:"Email",chatTitle:"Teams",businessPhoneTitle:"Business Phone",cellPhoneTitle:"Mobile Phone",departmentTitle:"Department",personTitle:"Title",officeLocationTitle:"Office Location",copyToClipboardButton:"Copy to clipboard"};var ct=h(8940);class ie extends tt{static get styles(){return ft}get strings(){return Tt}get hasData(){return!!this._contactParts&&!!Object.values(this._contactParts).filter(Ie=>!!Ie.value).length}constructor(vt){var Ie;super(),this._contactParts={email:{icon:(0,H.r)(H.A.Email),onClick:()=>this.sendEmail((0,B.iu)(this._person)),showCompact:!0,title:this.strings.emailTitle},chat:{icon:(0,H.r)(H.A.Chat),onClick:()=>{var je;return this.sendChat(null===(je=this._person)||void 0===je?void 0:je.userPrincipalName)},showCompact:!1,title:this.strings.chatTitle},businessPhone:{icon:(0,H.r)(H.A.Phone),onClick:()=>{var je,Ze;return this.sendCall((null===(Ze=null===(je=this._person)||void 0===je?void 0:je.businessPhones)||void 0===Ze?void 0:Ze.length)>0?this._person.businessPhones[0]:null)},showCompact:!0,title:this.strings.businessPhoneTitle},cellPhone:{icon:(0,H.r)(H.A.CellPhone),onClick:()=>{var je;return this.sendCall(null===(je=this._person)||void 0===je?void 0:je.mobilePhone)},showCompact:!0,title:this.strings.cellPhoneTitle},department:{icon:(0,H.r)(H.A.Department),showCompact:!1,title:this.strings.departmentTitle},title:{icon:(0,H.r)(H.A.Person),showCompact:!1,title:this.strings.personTitle},officeLocation:{icon:(0,H.r)(H.A.OfficeLocation),showCompact:!0,title:this.strings.officeLocationTitle}},this.sendCall=je=>{this.sendLink("tel:",je)},this._person=vt,this._contactParts.email.value=(0,B.iu)(this._person),this._contactParts.chat.value=this._person.userPrincipalName,this._contactParts.cellPhone.value=this._person.mobilePhone,this._contactParts.department.value=this._person.department,this._contactParts.title.value=this._person.jobTitle,this._contactParts.officeLocation.value=this._person.officeLocation,null!==(Ie=this._person.businessPhones)&&void 0!==Ie&&Ie.length&&(this._contactParts.businessPhone.value=this._person.businessPhones[0])}get displayName(){return this.strings.contactSectionTitle}get cardTitle(){return this.strings.contactSectionTitle}renderIcon(){return(0,H.r)(H.A.Contact)}clearState(){super.clearState();for(const vt of Object.keys(this._contactParts))this._contactParts[vt].value=null}renderCompactView(){if(!this.hasData)return null;const vt=Object.values(this._contactParts).filter(Ze=>!!Ze.value);let Ie=Object.values(vt).filter(Ze=>!!Ze.value&&Ze.showCompact);Ie?.length||(Ie=Object.values(vt).slice(0,2));const je=a.qy`
      ${Ie.map(Ze=>this.renderContactPart(Ze))}
    `;return a.qy`
      <div class="root compact" dir=${this.direction}>
        ${je}
      </div>
    `}renderFullView(){let vt;if(this.hasData){const Ie=Object.values(this._contactParts).filter(je=>!!je.value);vt=a.qy`
        ${Ie.map(je=>this.renderContactPart(je))}
      `}return a.qy`
      <div class="root" dir=${this.direction}>
        ${vt}
      </div>
    `}renderContactPart(vt){let Ie=!1;("Mobile Phone"===vt.title||"Business Phone"===vt.title)&&(Ie=!0);const Ze=vt.onClick?a.qy`
          <span class=${(0,x.H)({part__link:!0,phone:Ie})} @click=${dt=>vt.onClick(dt)}>${vt.value}</span>
        `:a.qy`
          ${vt.value}
        `;return a.qy`
      <div class="part" role="button" @click=${dt=>this.handlePartClick(dt,vt.value)} tabindex="0">
        <div class="part__icon" aria-label=${vt.title} title=${vt.title}>${vt.icon}</div>
        <div class="part__details">
          <div class="part__title">${vt.title}</div>
          <div class="part__value" title=${vt.title}>${Ze}</div>
        </div>
        <div
          class="part__copy"
          aria-label=${this.strings.copyToClipboardButton}
          title=${this.strings.copyToClipboardButton}
        >
          ${(0,H.r)(H.A.Copy)}
        </div>
      </div>
    `}handlePartClick(vt,Ie){Ie&&navigator.clipboard.writeText(Ie)}sendLink(vt,Ie){Ie?window.open(`${vt}${Ie}`,"_blank","noreferrer"):console.error(`\u{1f992}: Target resource for ${vt} link was not provided: resource: ${Ie}`)}sendChat(vt){if(!vt)return void console.error("\u{1f992}: Can't send chat when upn is not provided");const Ie=`https://teams.microsoft.com/l/chat/0/0?users=${vt}`,je=()=>window.open(Ie,"_blank","noreferrer");E.isAvailable?E.executeDeepLink(Ie,Ze=>{Ze||je()}):je()}sendEmail(vt){this.sendLink("mailto:",vt)}}var ue=h(8072),_e=h(3173);const Ke=[a.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none}:host .root.compact{padding:0}:host .root .message{padding:8px 20px;display:flex;align-items:center;justify-content:space-between}:host .root .message:hover{background-color:var(--message-hover-color,var(--neutral-fill-hover));cursor:pointer}:host .root .message:last-child{margin-bottom:unset}:host .root .message .message__detail{min-width:0;line-height:normal}:host .root .message .message__detail .message__subject{color:var(--message-subject-color,var(--neutral-foreground-color));font-size:var(--message-subject-font-size, 14px);font-weight:var(--message-subject-font-weight,600);line-height:var(--message-subject-line-height, 20px)}:host .root .message .message__detail .message__from{font-size:var(--message-from-font-size, 12px);color:var(--message-from-color,var(--neutral-foreground-color));line-height:var(--message-from-line-height, 16px);font-weight:var(--message-from-font-weight,400)}:host .root .message .message__detail .message__message{font-size:var(--message-from-font-size, 12px);color:var(--message-color,var(--neutral-foreground-hint));line-height:var(--message-from-line-height, 16px);font-weight:var(--message-from-font-weight,400)}:host .root .message .message__detail>div{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host .root .message .message__date{margin-top:8px;font-size:12px;color:var(--message-date-color,var(--neutral-foreground-hint));margin-left:10px;white-space:nowrap}
`],we={emailsSectionTitle:"Emails"};var at=function(ht,vt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(ht,vt)};let Ge=(()=>{class ht extends tt{static get styles(){return Ke}get strings(){return we}constructor(Ie){super(),this._messages=Ie}get displayName(){return this.strings.emailsSectionTitle}get cardTitle(){return this.strings.emailsSectionTitle}clearState(){super.clearState(),this._messages=[]}renderIcon(){return(0,H.r)(H.A.Messages)}renderCompactView(){var Ie;let je;if(null!==(Ie=this._messages)&&void 0!==Ie&&Ie.length){const Ze=this._messages?this._messages.slice(0,3).map(dt=>this.renderMessage(dt)):[];je=a.qy`
         ${Ze}
       `}else je=this.renderNoData();return a.qy`
       <div class="root compact">
         ${je}
       </div>
     `}renderFullView(){var Ie;let je;return je=null!==(Ie=this._messages)&&void 0!==Ie&&Ie.length?a.qy`
         ${this._messages.slice(0,5).map(Ze=>this.renderMessage(Ze))}
       `:this.renderNoData(),a.qy`
       <div class="root">
         ${je}
       </div>
     `}renderMessage(Ie){return a.qy`
       <div class="message" @click=${()=>this.handleMessageClick(Ie)}>
         <div class="message__detail">
           <div class="message__subject">${Ie.subject}</div>
           <div class="message__from">${Ie.from.emailAddress.name}</div>
           <div class="message__message">${Ie.bodyPreview}</div>
         </div>
         <div class="message__date">${(0,_e.h3)(new Date(Ie.receivedDateTime))}</div>
       </div>
     `}handleMessageClick(Ie){window.open(Ie.webLink,"_blank","noreferrer")}}return function(ht,vt,Ie,je){var Gt,Ze=arguments.length,dt=Ze<3?vt:null===je?je=Object.getOwnPropertyDescriptor(vt,Ie):je;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)dt=Reflect.decorate(ht,vt,Ie,je);else for(var Jt=ht.length-1;Jt>=0;Jt--)(Gt=ht[Jt])&&(dt=(Ze<3?Gt(dt):Ze>3?Gt(vt,Ie,dt):Gt(vt,Ie))||dt);Ze>3&&dt&&Object.defineProperty(vt,Ie,dt)}([(0,s.wk)(),at("design:type",Array)],ht.prototype,"_messages",void 0),ht})();const fe=[a.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none}:host .root.compact{padding:0}:host .root.compact .coworker .coworker__person-image{height:40px;width:40px;border-radius:40px;--person-avatar-size:40px;margin-right:12px}:host .root.compact .coworker .coworker__name{font-size:14px}:host .root.compact .coworker .coworker__title{font-size:12px}:host .root .subtitle{color:var(--organization-sub-title-color,var(--neutral-foreground-hint));font-size:14px;margin:0 20px 8px}:host .root .divider{display:flex;background:var(--organization-coworker-border-color,var(--neutral-stroke-rest));height:1px;margin:26px 20px 18px}:host .root .org-member{height:74px;box-sizing:border-box;border-radius:2px;padding:12px;display:flex;align-items:center;margin-inline:20px}:host .root .org-member.org-member--target{background-color:var(--organization-active-org-member-target-background-color,var(--neutral-fill-active));border:1px solid var(--organization-active-org-member-border-color,var(--accent-foreground-rest))}:host .root .org-member:not(.org-member--target){border:1px solid var(--organization-coworker-border-color,var(--neutral-stroke-rest))}:host .root .org-member:not(.org-member--target):hover{cursor:pointer;background-color:var(--organization-hover-color,var(--neutral-fill-hover))}:host .root .org-member .org-member__person{flex-grow:1}:host .root .org-member .org-member__person .org-member__person-image{--person-avatar-size:var(--organization-member-person-avatar-size, 40px)}:host .root .org-member .org-member__details{flex-grow:1}:host .root .org-member .org-member__details .org-member__name{font-size:16px;color:var(--organization-title-color,var(--neutral-foreground-rest));font-weight:600}:host .root .org-member .org-member__details .org-member__department,:host .root .org-member .org-member__details .org-member__title{font-weight:14px;color:var(--organization-sub-title-color,var(--neutral-foreground-hint))}:host .root .org-member__separator:not(:last-child){border:1px solid var(--organization-coworker-border-color,var(--neutral-stroke-rest));box-sizing:border-box;width:0;margin:0 50%;height:14px}:host .root .coworker{display:flex;align-items:center;padding:10px 20px}:host .root .coworker:hover{cursor:pointer;background-color:var(--organization-coworker-hover-color,var(--neutral-fill-hover))}:host .root .coworker .coworker__person{height:46px;border-radius:46px;margin-right:8px}:host .root .coworker .coworker__person .coworker__person-image{--person-avatar-size:var(--organization-coworker-person-avatar-size, 40px)}:host .root .direct-report__compact{padding:12px 20px}:host .root .direct-report__compact .direct-report{margin-right:4px}:host .root .direct-report-list{border:1px solid var(--organization-coworker-border-color,var(--neutral-stroke-rest));margin-inline:20px}:host .root .direct-report-list .org-member--direct-report{border:none;cursor:pointer;margin-inline:0}:host .root .direct-report-list .org-member--direct-report .direct-report__person-image{--person-avatar-size:var(--organization-direct-report-person-avatar-size, 38px)}[dir=rtl] .org-member .org-member__more{transform:scaleX(-1);filter:fliph;filter:"FlipH"}@media (forced-colors:active) and (prefers-color-scheme:dark){:host svg,:host svg>path{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}@media (forced-colors:active) and (prefers-color-scheme:light){:host svg,:host svg>path{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}
`],V={reportsToSectionTitle:"Reports to",directReportsSectionTitle:"Direct reports",organizationSectionTitle:"Organization",youWorkWithSubSectionTitle:"You work with",userWorksWithSubSectionTitle:"works with"};var ce=function(ht,vt,Ie,je){var Gt,Ze=arguments.length,dt=Ze<3?vt:null===je?je=Object.getOwnPropertyDescriptor(vt,Ie):je;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)dt=Reflect.decorate(ht,vt,Ie,je);else for(var Jt=ht.length-1;Jt>=0;Jt--)(Gt=ht[Jt])&&(dt=(Ze<3?Gt(dt):Ze>3?Gt(vt,Ie,dt):Gt(vt,Ie))||dt);return Ze>3&&dt&&Object.defineProperty(vt,Ie,dt),dt},xe=function(ht,vt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(ht,vt)};let Ct=(()=>{class ht extends tt{static get styles(){return fe}get strings(){return V}constructor(Ie,je){super(),this._state=Ie,this._me=je}clearState(){super.clearState(),this._state=void 0,this._me=void 0}get displayName(){const{person:Ie,directReports:je}=this._state;return!Ie.manager&&je?.length?`${this.strings.directReportsSectionTitle} (${je.length})`:this.strings.reportsToSectionTitle}get cardTitle(){return this.strings.organizationSectionTitle}renderIcon(){return(0,H.r)(H.A.Organization)}renderCompactView(){var Ie;let je;if(null===(Ie=this._state)||void 0===Ie||!Ie.person)return null;const{person:Ze,directReports:dt}=this._state;return Ze?(Ze.manager?je=this.renderCoworker(Ze.manager):dt?.length&&(je=this.renderCompactDirectReports()),a.qy`
        <div class="root compact">
          ${je}
        </div>
      `):null}renderFullView(){var Ie;let je;if(null===(Ie=this._state)||void 0===Ie||!Ie.person)return null;const{person:Ze,directReports:dt,people:Gt}=this._state;if(!Ze&&!dt&&!Gt)return null;{const Jt=this.renderManagers(),an=this.renderCurrentUser(),wn=this.renderDirectReports(),pn=this.renderCoworkers();je=a.qy`
          ${Jt} ${an} ${wn} ${pn}
        `}return a.qy`
       <div class="root" dir=${this.direction}>
         ${je}
       </div>
     `}renderManager(Ie){return O.Q`
      <div
        class="org-member"
        @keydown=${je=>{("Enter"===je.code||" "===je.code)&&this.navigateCard(Ie)}}
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
          ${(0,H.r)(H.A.ExpandRight)}
        </div>
      </div>
      <div class="org-member__separator"></div>
     `}renderManagers(){const{person:Ie}=this._state;if(!Ie?.manager)return null;const je=[];let Ze=Ie;for(;Ze.manager;)je.push(Ze.manager),Ze=Ze.manager;return je.length?je.reverse().map(dt=>this.renderManager(dt)):null}renderDirectReports(){const{directReports:Ie}=this._state;return Ie?.length?a.qy`
      <div class="org-member__separator"></div>
      <div class="direct-report-list">
        ${Ie.map(je=>O.Q`
            <div
              class="org-member org-member--direct-report"
              @keydown=${Ze=>{("Enter"===Ze.code||" "===Ze.code)&&this.navigateCard(je)}}
              @click=${()=>this.navigateCard(je)}
            >
              <div class="org-member__person">
                <mgt-person
                  class="org-member__person-image"
                  .personDetails=${je}
                  .fetchImage=${!0}
                  .showPresence=${!0}
                  view="twolines"
                ></mgt-person>
              </div>
              <div tabindex="0" class="org-member__more">
                ${(0,H.r)(H.A.ExpandRight)}
              </div>
            </div>
          `)}
      </div>
     `:null}renderCompactDirectReports(){const{directReports:Ie}=this._state;return a.qy`
      <div class="direct-report__compact">
        ${Ie.slice(0,6).map(je=>O.Q`
            <div
              class="direct-report"
              @keydown=${Ze=>{("Enter"===Ze.code||" "===Ze.code)&&this.navigateCard(je)}}
              @click=${()=>this.navigateCard(je)}
            >
              <mgt-person
                class="direct-report__person-image"
                .personDetails=${je}
                .fetchImage=${!0}
                .showPresence=${!0}
                view="twolines"
              ></mgt-person>
            </div>
          `)}
      </div>
    `}renderCurrentUser(){const{person:Ie}=this._state;return O.Q`
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
     `}renderCoworker(Ie){return O.Q`
      <div
        class="coworker"
        @keydown=${je=>{("Enter"===je.code||" "===je.code)&&this.navigateCard(Ie)}}
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
    `}renderCoworkers(){const{people:Ie}=this._state;return Ie?.length?a.qy`
       <div class="divider"></div>
       <div class="subtitle" tabindex="0">${this._me.id===this._state.person.id?this.strings.youWorkWithSubSectionTitle:`${this._state.person.givenName} ${this.strings.userWorksWithSubSectionTitle}`}</div>
       <div>
         ${Ie.slice(0,6).map(Ze=>this.renderCoworker(Ze))}
       </div>
     `:null}}return ce([(0,s.wk)(),xe("design:type",Object)],ht.prototype,"_state",void 0),ce([(0,s.wk)(),xe("design:type",Object)],ht.prototype,"_me",void 0),ht})();const it=[a.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none;background-color:var(--profile-background-color,--neutral-layer-1)}:host .root{padding:20px 0}:host .root.compact{padding:0}:host .root .title{font-size:14px;font-weight:600;color:var(--profile-title-color,var(--neutral-foreground-rest));margin:0 20px 12px}:host .root section{margin-bottom:24px;padding:0 20px}:host .root section:last-child{margin:0}:host .root section .section__title{font-size:14px;color:var(--profile-section-title-color,var(--neutral-foreground-hint))}:host .root section .section__content{display:flex;flex-direction:column;margin-top:10px}:host .root .token-list{display:flex;flex-flow:row wrap;margin-top:-10px}:host .root .token-list .token-list__item{text-overflow:ellipsis;white-space:nowrap;display:inline-block;overflow:hidden;font-size:14px;align-items:center;background:var(--profile-token-item-background-color,var(--neutral-fill-secondary-rest));border-radius:2px;max-height:28px;padding:4px 8px;margin-right:10px;margin-top:10px;color:var(--profile-token-item-color,var(--neutral-foreground-rest))}:host .root .token-list .token-list__item:last-child{margin-right:initial}:host .root .token-list .token-list__item.overflow{display:none}:host .root .token-list .token-list__item.token-list__item--show-overflow{cursor:pointer;user-select:unset;background:0 0;color:var(--profile-token-overflow-color,var(--accent-foreground-rest))}:host .root .data-list__item{margin-bottom:20px}:host .root .data-list__item:last-child{margin-bottom:initial}:host .root .data-list__item .data-list__item__header{display:flex;justify-content:space-between;align-items:center}:host .root .data-list__item .data-list__item__content{font-size:12px;line-height:16px;color:var(--profile-section-title-color,var(--neutral-foreground-hint));margin-top:4px}:host .root .data-list__item .data-list__item__title{font-size:14px;line-height:16px;color:var(--profile-title-color,var(--neutral-foreground-rest))}:host .root .data-list__item .data-list__item__date-range{color:var(--profile-section-title-color,var(--neutral-foreground-hint));font-size:10px;line-height:12px}:host .root .language__proficiency{opacity:.77}:host .root .work-position .work-position__company{color:#023b8f}:host .root .work-position .work-position__location{font-size:10px;color:var(--profile-section-title-color,var(--neutral-foreground-hint));line-height:16px}:host .root .educational-activity .educational-activity__degree{font-size:12px;line-height:14px;color:var(--profile-section-title-color,var(--neutral-foreground-hint))}:host .root .birthday{display:flex;align-items:center;margin-top:-6px}:host .root .birthday .birthday__icon{margin-right:8px}:host .root .birthday .birthday__date{font-size:12px;color:var(--profile-title-color,var(--neutral-foreground-rest))}[dir=rtl] .token-list__item{margin-right:0!important}
`],mt={SkillsAndExperienceSectionTitle:"Skills & Experience",AboutCompactSectionTitle:"About",SkillsSubSectionTitle:"Skills",LanguagesSubSectionTitle:"Languages",WorkExperienceSubSectionTitle:"Work Experience",EducationSubSectionTitle:"Education",professionalInterestsSubSectionTitle:"Professional Interests",personalInterestsSubSectionTitle:"Personal Interests",birthdaySubSectionTitle:"Birthday",currentYearSubtitle:"Current",socialMediaSubSectionTitle:"Social Media"};var Xe=function(ht,vt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(ht,vt)};let tn=(()=>{class ht extends tt{static get styles(){return it}get strings(){return mt}get displayName(){return this.strings.SkillsAndExperienceSectionTitle}get cardTitle(){return this.strings.AboutCompactSectionTitle}get hasData(){var Ie,je;if(!this.profile)return!1;const{languages:Ze,skills:dt,positions:Gt,educationalActivities:Jt}=this.profile;return[this._birthdayAnniversary,null===(Ie=this._personalInterests)||void 0===Ie?void 0:Ie.length,null===(je=this._professionalInterests)||void 0===je?void 0:je.length,Ze?.length,dt?.length,Gt?.length,Jt?.length].filter(an=>!!an).length>0}get profile(){return this._profile}set profile(Ie){Ie!==this._profile&&(this._profile=Ie,this._birthdayAnniversary=Ie?.anniversaries?Ie.anniversaries.find(this.isBirthdayAnniversary):null,this._personalInterests=Ie?.interests?Ie.interests.filter(this.isPersonalInterest):null,this._professionalInterests=Ie?.interests?Ie.interests.filter(this.isProfessionalInterest):null)}constructor(Ie){super(),this.isPersonalInterest=je=>{var Ze;return null===(Ze=je.categories)||void 0===Ze?void 0:Ze.includes("personal")},this.isProfessionalInterest=je=>{var Ze;return null===(Ze=je.categories)||void 0===Ze?void 0:Ze.includes("professional")},this.isBirthdayAnniversary=je=>"birthday"===je.type,this.profile=Ie}renderIcon(){return(0,H.r)(H.A.Profile)}clearState(){super.clearState(),this.profile=null}renderCompactView(){return a.qy`
       <div class="root compact" dir=${this.direction}>
         ${this.renderSubSections().slice(0,2)}
       </div>
     `}renderFullView(){return this.initPostRenderOperations(),a.qy`
       <div class="root" dir=${this.direction}>
         ${this.renderSubSections()}
       </div>
     `}renderSubSections(){return[this.renderSkills(),this.renderBirthday(),this.renderLanguages(),this.renderWorkExperience(),this.renderEducation(),this.renderProfessionalInterests(),this.renderPersonalInterests()].filter(je=>!!je)}renderLanguages(){var Ie;const{languages:je}=this._profile;if(!je?.length)return null;const Ze=[];for(const Gt of je){let Jt=null;!(null===(Ie=Gt.proficiency)||void 0===Ie)&&Ie.length&&(Jt=a.qy`
           <span class="language__proficiency" tabindex="0">
             &nbsp;(${Gt.proficiency})
           </span>
         `),Ze.push(a.qy`
         <div class="token-list__item language">
           <span class="language__title" tabindex="0">${Gt.displayName}</span>
           ${Jt}
         </div>
       `)}return a.qy`
       <section>
         <div class="section__title" tabindex="0">${Ze.length?this.strings.LanguagesSubSectionTitle:""}</div>
         <div class="section__content">
           <div class="token-list">
             ${Ze}
           </div>
         </div>
       </section>
     `}renderSkills(){const{skills:Ie}=this._profile;if(!Ie?.length)return null;const je=[];for(const dt of Ie)je.push(a.qy`
         <div class="token-list__item skill" tabindex="0">
           ${dt.displayName}
         </div>
       `);return a.qy`
       <section>
         <div class="section__title" tabindex="0">${je.length?this.strings.SkillsSubSectionTitle:""}</div>
         <div class="section__content">
           <div class="token-list">
             ${je}
           </div>
         </div>
       </section>
     `}renderWorkExperience(){var Ie,je,Ze,dt,Gt;const{positions:Jt}=this._profile;if(!Jt?.length)return null;const an=[];for(const pn of this._profile.positions)(pn.detail.description||""!==pn.detail.jobTitle)&&an.push(a.qy`
           <div class="data-list__item work-position">
             <div class="data-list__item__header">
               <div class="data-list__item__title" tabindex="0">${null===(Ie=pn.detail)||void 0===Ie?void 0:Ie.jobTitle}</div>
               <div class="data-list__item__date-range" tabindex="0">
                 ${this.getDisplayDateRange(pn.detail)}
               </div>
             </div>
             <div class="data-list__item__content">
               <div class="work-position__company" tabindex="0">
                 ${null===(Ze=null===(je=pn?.detail)||void 0===je?void 0:je.company)||void 0===Ze?void 0:Ze.displayName}
               </div>
               <div class="work-position__location" tabindex="0">
                 ${this.displayLocation(null===(Gt=null===(dt=pn?.detail)||void 0===dt?void 0:dt.company)||void 0===Gt?void 0:Gt.address)}
               </div>
             </div>
           </div>
         `);return a.qy`
       <section>
         <div class="section__title" tabindex="0">${an.length?this.strings.WorkExperienceSubSectionTitle:""}</div>
         <div class="section__content">
           <div class="data-list">
             ${an}
           </div>
         </div>
       </section>
     `}renderEducation(){const{educationalActivities:Ie}=this._profile;if(!Ie?.length)return null;const je=[];for(const dt of Ie)je.push(a.qy`
         <div class="data-list__item educational-activity">
           <div class="data-list__item__header">
             <div class="data-list__item__title" tabindex="0">${dt.institution.displayName}</div>
             <div class="data-list__item__date-range" tabindex="0">
               ${this.getDisplayDateRange(dt)}
             </div>
           </div>
           ${dt.program.displayName?a.qy`<div class="data-list__item__content">
                  <div class="educational-activity__degree" tabindex="0">
                  ${dt.program.displayName}
                </div>`:a.s6}
         </div>
       `);return a.qy`
       <section>
         <div class="section__title" tabindex="0">${je.length?this.strings.EducationSubSectionTitle:""}</div>
         <div class="section__content">
           <div class="data-list">
             ${je}
           </div>
         </div>
       </section>
     `}renderProfessionalInterests(){var Ie;if(null===(Ie=this._professionalInterests)||void 0===Ie||!Ie.length)return null;const je=[];for(const dt of this._professionalInterests)je.push(a.qy`
         <div class="token-list__item interest interest--professional" tabindex="0">
           ${dt.displayName}
         </div>
       `);return a.qy`
       <section>
         <div class="section__title" tabindex="0">${je.length?this.strings.professionalInterestsSubSectionTitle:""}</div>
         <div class="section__content">
           <div class="token-list">
             ${je}
           </div>
         </div>
       </section>
     `}renderPersonalInterests(){var Ie;if(null===(Ie=this._personalInterests)||void 0===Ie||!Ie.length)return null;const je=[];for(const dt of this._personalInterests)je.push(a.qy`
         <div class="token-list__item interest interest--personal" tabindex="0">
           ${dt.displayName}
         </div>
       `);return a.qy`
       <section>
         <div class="section__title" tabindex="0">${je.length?this.strings.personalInterestsSubSectionTitle:""}</div>
         <div class="section__content">
           <div class="token-list">
             ${je}
           </div>
         </div>
       </section>
     `}renderBirthday(){var Ie;return null!==(Ie=this._birthdayAnniversary)&&void 0!==Ie&&Ie.date?a.qy`
       <section>
         <div class="section__title" tabindex="0">Birthday</div>
         <div class="section__content">
           <div class="birthday">
             <div class="birthday__icon">
               ${(0,H.r)(H.A.Birthday)}
             </div>
             <div class="birthday__date" tabindex="0">
               ${this.getDisplayDate(new Date(this._birthdayAnniversary.date))}
             </div>
           </div>
         </div>
       </section>
     `:null}getDisplayDate(Ie){return Ie.toLocaleString("default",{day:"numeric",month:"long"})}getDisplayDateRange(Ie){if(!Ie.startMonthYear)return a.s6;const je=new Date(Ie.startMonthYear).getFullYear();return 0===je||1===je?a.s6:`${je} \u2014 ${Ie.endMonthYear?new Date(Ie.endMonthYear).getFullYear():this.strings.currentYearSubtitle}`}displayLocation(Ie){return Ie?.city?Ie.state?`${Ie.city}, ${Ie.state}`:Ie.city:a.s6}initPostRenderOperations(){setTimeout(()=>{try{this.shadowRoot.querySelectorAll("section").forEach(je=>{this.handleTokenOverflow(je)})}catch{}},0)}handleTokenOverflow(Ie){const je=Ie.querySelectorAll(".token-list");if(je?.length)for(const Ze of Array.from(je)){const dt=Ze.querySelectorAll(".token-list__item");if(!dt?.length)continue;let Gt=null,Jt=dt[0].getBoundingClientRect();const an=Ze.getBoundingClientRect(),wn=2*Jt.height+an.top;for(let pn=0;pn<dt.length-1;pn++)if(Jt=dt[pn].getBoundingClientRect(),Jt.top>wn){Gt=Array.from(dt).slice(pn,dt.length);break}if(Gt){Gt.forEach(wi=>wi.classList.add("overflow"));const pn=document.createElement("div");pn.classList.add("token-list__item"),pn.classList.add("token-list__item--show-overflow"),pn.tabIndex=0,pn.innerText=`+ ${Gt.length} more`;const Ci=()=>{pn.remove(),Gt.forEach(wi=>wi.classList.remove("overflow"))};pn.addEventListener("click",()=>{Ci()}),pn.addEventListener("keydown",wi=>{"Enter"===wi.code&&Ci()}),Ze.appendChild(pn)}}}}return function(ht,vt,Ie,je){var Gt,Ze=arguments.length,dt=Ze<3?vt:null===je?je=Object.getOwnPropertyDescriptor(vt,Ie):je;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)dt=Reflect.decorate(ht,vt,Ie,je);else for(var Jt=ht.length-1;Jt>=0;Jt--)(Gt=ht[Jt])&&(dt=(Ze<3?Gt(dt):Ze>3?Gt(vt,Ie,dt):Gt(vt,Ie))||dt);Ze>3&&dt&&Object.defineProperty(vt,Ie,dt)}([(0,s.MZ)({attribute:!1}),Xe("design:type",Object),Xe("design:paramtypes",[Object])],ht.prototype,"profile",null),ht})();const An={showMoreSectionButton:"Show more",endOfCard:"End of the card",quickMessage:"Send a quick message",expandDetailsLabel:"Expand details",sendMessageLabel:"Send message",emailButtonLabel:"Email",callButtonLabel:"Call",chatButtonLabel:"Chat",closeCardLabel:"Close card",videoButtonLabel:"Video",goBackLabel:"Go Back"};var Rn=h(9546),vi=h(5409),mn=h(742),fi=h(9808),Ln=h(4192),Pn=h(7153),ti=h(175),Qn=h(7947),Nn=h(9605),Ii=h(6105),un=h(4632);let pt=(()=>{class ht extends un.g{constructor(){super(...arguments),this.orientation="horizontal",this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=Ie=>"true"===Ie.getAttribute("aria-disabled"),this.isHiddenElement=Ie=>Ie.hasAttribute("hidden"),this.isFocusableElement=Ie=>!this.isDisabledElement(Ie)&&!this.isHiddenElement(Ie),this.setTabs=()=>{const Ie="gridColumn",je="gridRow",Ze=this.isHorizontal()?Ie:je;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((dt,Gt)=>{if("tab"===dt.slot){const Jt=this.activeTabIndex===Gt&&this.isFocusableElement(dt);this.activeindicator&&this.isFocusableElement(dt)&&(this.showActiveIndicator=!0);const an=this.tabIds[Gt],wn=this.tabpanelIds[Gt];dt.setAttribute("id",an),dt.setAttribute("aria-selected",Jt?"true":"false"),dt.setAttribute("aria-controls",wn),dt.addEventListener("click",this.handleTabClick),dt.addEventListener("keydown",this.handleTabKeyDown),dt.setAttribute("tabindex",Jt?"0":"-1"),Jt&&(this.activetab=dt,this.activeid=an)}dt.style[Ie]="",dt.style[je]="",dt.style[Ze]=`${Gt+1}`,this.isHorizontal()?dt.classList.remove("vertical"):dt.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((Ie,je)=>{const Ze=this.tabIds[je];Ie.setAttribute("id",this.tabpanelIds[je]),Ie.setAttribute("aria-labelledby",Ze),this.activeTabIndex!==je?Ie.setAttribute("hidden",""):Ie.removeAttribute("hidden")})},this.handleTabClick=Ie=>{const je=Ie.currentTarget;1===je.nodeType&&this.isFocusableElement(je)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(je),this.setComponent())},this.handleTabKeyDown=Ie=>{if(this.isHorizontal())switch(Ie.key){case Pn.kT:Ie.preventDefault(),this.adjustBackward(Ie);break;case Pn.bb:Ie.preventDefault(),this.adjustForward(Ie)}else switch(Ie.key){case Pn.I5:Ie.preventDefault(),this.adjustBackward(Ie);break;case Pn.HX:Ie.preventDefault(),this.adjustForward(Ie)}switch(Ie.key){case Pn.Tg:Ie.preventDefault(),this.adjust(-this.activeTabIndex);break;case Pn.FM:Ie.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=Ie=>{const je=this.tabs;let Ze=0;for(Ze=this.activetab?je.indexOf(this.activetab)+1:1,Ze===je.length&&(Ze=0);Ze<je.length&&je.length>1;){if(this.isFocusableElement(je[Ze])){this.moveToTabByIndex(je,Ze);break}if(this.activetab&&Ze===je.indexOf(this.activetab))break;Ze+1>=je.length?Ze=0:Ze+=1}},this.adjustBackward=Ie=>{const je=this.tabs;let Ze=0;for(Ze=this.activetab?je.indexOf(this.activetab)-1:0,Ze=Ze<0?je.length-1:Ze;Ze>=0&&je.length>1;){if(this.isFocusableElement(je[Ze])){this.moveToTabByIndex(je,Ze);break}Ze-1<0?Ze=je.length-1:Ze-=1}},this.moveToTabByIndex=(Ie,je)=>{const Ze=Ie[je];this.activetab=Ze,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=je,Ze.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(Ie,je){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(Ze=>Ze.id===Ie),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(Ie=>{var je;return null!==(je=Ie.getAttribute("id"))&&void 0!==je?je:`tab-${(0,ti.NF)()}`})}getTabPanelIds(){return this.tabpanels.map(Ie=>{var je;return null!==(je=Ie.getAttribute("id"))&&void 0!==je?je:`panel-${(0,ti.NF)()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return"horizontal"===this.orientation}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const Ie=this.isHorizontal()?"gridColumn":"gridRow",je=this.isHorizontal()?"translateX":"translateY",Ze=this.isHorizontal()?"offsetLeft":"offsetTop",dt=this.activeIndicatorRef[Ze];this.activeIndicatorRef.style[Ie]=`${this.activeTabIndex+1}`;const Gt=this.activeIndicatorRef[Ze];this.activeIndicatorRef.style[Ie]=`${this.prevActiveTabIndex+1}`,this.activeIndicatorRef.style.transform=`${je}(${Gt-dt}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[Ie]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${je}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(Ie){const je=this.tabs.filter(Jt=>this.isFocusableElement(Jt)),Ze=je.indexOf(this.activetab),dt=(0,Qn.AB)(0,je.length-1,Ze+Ie),Gt=this.tabs.indexOf(je[dt]);Gt>-1&&this.moveToTabByIndex(this.tabs,Gt)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}return(0,mn.Cg)([fi.CF],ht.prototype,"orientation",void 0),(0,mn.Cg)([fi.CF],ht.prototype,"activeid",void 0),(0,mn.Cg)([Ln.sH],ht.prototype,"tabs",void 0),(0,mn.Cg)([Ln.sH],ht.prototype,"tabpanels",void 0),(0,mn.Cg)([(0,fi.CF)({mode:"boolean"})],ht.prototype,"activeindicator",void 0),(0,mn.Cg)([Ln.sH],ht.prototype,"activeIndicatorRef",void 0),(0,mn.Cg)([Ln.sH],ht.prototype,"showActiveIndicator",void 0),ht})();(0,Ii.X)(pt,Nn.qw);var Et=h(9953),qe=h(633),gt=h(8287),Kt=h(1589),In=h(9760),ni=h(3226),At=h(8322),yi=h(4954),$n=h(9457),jn=h(4583),Zi=h(9709);const Kr=pt.compose({baseName:"tabs",template:(ht,vt)=>Et.q`
    <template class="${Ie=>Ie.orientation}">
        ${(0,Nn.LT)(ht,vt)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${(0,qe.e)("tabs")}></slot>

            ${(0,gt.z)(Ie=>Ie.showActiveIndicator,Et.q`
                    <div
                        ${(0,Kt.K)("activeIndicatorRef")}
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
        ${Zi.Ah}
        color: ${$n.lHw};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${jn.D} * 1px); auto;
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
    `.withBehaviors((0,yi.mr)(In.A`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${ni.A.Highlight};
        }
      `))});let yt=(()=>{class ht extends un.g{}return(0,mn.Cg)([(0,fi.CF)({mode:"boolean"})],ht.prototype,"disabled",void 0),ht})();var st=h(4932),jt=h(5532);const Ht=yt.compose({baseName:"tab",template:(ht,vt)=>Et.q`
    <template slot="tab" role="tab" aria-disabled="${Ie=>Ie.disabled}">
        <slot></slot>
    </template>
`,styles:(ht,vt)=>In.A`
      ${(0,At.V)("inline-flex")} :host {
        box-sizing: border-box;
        ${Zi.Ah}
        height: calc((${jn.D} + (${$n.vR1} * 2)) * 1px);
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
        ${jt.W}
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
    `.withBehaviors((0,yi.mr)(In.A`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${ni.A.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: transparent;
            color: ${ni.A.Highlight};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: transparent;
            color: ${ni.A.Highlight};
            fill: currentcolor;
          }
          :host(:${st.N}) {
            background: transparent;
            outline-color: ${ni.A.ButtonText};
          }
        `))}),ui=class Un extends un.g{}.compose({baseName:"tab-panel",template:(ht,vt)=>Et.q`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(ht,vt)=>In.A`
  ${(0,At.V)("block")} :host {
    box-sizing: border-box;
    ${Zi.Ah}
    padding: 0 calc((6 + (${$n.vR1} * 2 * ${$n.Brd})) * 1px);
  }
`});var Ri=h(7043),Di=h(8955),He=h(3601),ot=h(1965),nt=function(ht,vt,Ie,je){var Gt,Ze=arguments.length,dt=Ze<3?vt:null===je?je=Object.getOwnPropertyDescriptor(vt,Ie):je;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)dt=Reflect.decorate(ht,vt,Ie,je);else for(var Jt=ht.length-1;Jt>=0;Jt--)(Gt=ht[Jt])&&(dt=(Ze<3?Gt(dt):Ze>3?Gt(vt,Ie,dt):Gt(vt,Ie))||dt);return Ze>3&&dt&&Object.defineProperty(vt,Ie,dt),dt},Rt=function(ht,vt){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(ht,vt)},Pt=function(ht,vt,Ie,je){return new(Ie||(Ie=Promise))(function(dt,Gt){function Jt(pn){try{wn(je.next(pn))}catch(Ci){Gt(Ci)}}function an(pn){try{wn(je.throw(pn))}catch(Ci){Gt(Ci)}}function wn(pn){pn.done?dt(pn.value):function Ze(dt){return dt instanceof Ie?dt:new Ie(function(Gt){Gt(dt)})}(pn.value).then(Jt,an)}wn((je=je.apply(ht,vt||[])).next())})};const cn=()=>{(0,He.E)(vi.z1,Kr,Ht,ui,Ri.zi,Di.oR),(0,ct.N)("person-card",sn),(0,ot.i)(),(0,ct.N)("contact",ie),(0,et.sN)(),(0,ct.N)("organization",Ct),(0,ct.N)("messages",Ge),(0,ue.x)(),(0,ct.N)("profile",tn),customElements.get((0,ct.F)("person"))||(0,et.sN)()};let sn=(()=>{class ht extends y.N{static get styles(){return Pe}get strings(){return An}static get requiredScopes(){return(()=>{const ht=[];return X.sections.files&&ht.push("Sites.Read.All"),X.sections.mailMessages&&(ht.push("Mail.Read"),ht.push("Mail.ReadBasic")),X.sections.organization&&(ht.push("User.Read.All"),X.sections.organization.showWorksWith&&ht.push("People.Read.All")),X.sections.profile&&ht.push("User.Read.All"),X.useContactApis&&ht.push("Contacts.Read"),ht.indexOf("User.Read.All")<0&&(ht.push("User.ReadBasic.All"),ht.push("User.Read")),ht.indexOf("People.Read.All")<0&&ht.push("People.Read"),X.isSendMessageVisible&&ht.push("Chat.ReadWrite"),[...new Set(ht)]})()}get personDetails(){return this._personDetails}set personDetails(Ie){this._personDetails!==Ie&&(this._personDetails=Ie,this.personImage=this.getImage())}get personQuery(){return this._personQuery}set personQuery(Ie){this._personQuery!==Ie&&(this._personQuery=Ie,this.personDetails=null,this._cardState=null)}get userId(){return this._userId}set userId(Ie){Ie!==this._userId&&(this._userId=Ie,this.personDetails=null,this._cardState=null)}get internalPersonDetails(){var Ie;return(null===(Ie=this._cardState)||void 0===Ie?void 0:Ie.person)||this.personDetails}constructor(){super(),this.isSendingMessage=!1,this.goBack=()=>{var Ie;if(null===(Ie=this._history)||void 0===Ie||!Ie.length)return;const je=this._history.pop();this._currentSection=null;const Ze=this.renderRoot.querySelector("fluent-tab");Ze&&Ze.click(),this._cardState=je.state,this._personDetails=je.state.person,this.personImage=je.personImage,this.loadSections()},this.renderContent=()=>{var Ie;if(!this.internalPersonDetails)return this.renderNoData();const je=this.internalPersonDetails,Ze=this.getImage();if(this.hasTemplate("default"))return this.renderTemplate("default",{person:this.internalPersonDetails,personImage:Ze});let dt;dt=this.strings.closeCardLabel;const Gt=this.isExpanded?a.qy`
           <div class="close-card-container">
             <fluent-button 
              appearance="lightweight" 
              class="close-button" 
              aria-label=${dt}
              @click=${this.closeCard} >
               ${(0,H.r)(H.A.Close)}
             </fluent-button>
           </div>
         `:null;dt=this.strings.goBackLabel;const Jt=null!==(Ie=this._history)&&void 0!==Ie&&Ie.length?a.qy`
            <div class="nav">
              <fluent-button 
                appearance="lightweight"
                class="nav__back" 
                aria-label=${dt} 
                @keydown=${this.handleGoBack}
                @click=${this.goBack}>${(0,H.r)(H.A.Back)}
               </fluent-button>
            </div>
          `:null;let an=this.renderTemplate("person-details",{person:this.internalPersonDetails,personImage:Ze});if(!an){const Ci=this.renderPerson(),wi=this.renderContactIcons(je);an=a.qy`
         ${Ci} ${wi}
       `}const wn=this.isExpanded?this.renderExpandedDetails():this.renderExpandedDetailsButton();this._windowHeight=window.innerHeight&&document.documentElement.clientHeight?Math.min(window.innerHeight,document.documentElement.clientHeight):window.innerHeight||document.documentElement.clientHeight,this._windowHeight<250&&(this._smallView=!0);const pn=this.lockTabNavigation?a.qy`<div @keydown=${this.handleEndOfCard} aria-label=${this.strings.endOfCard} tabindex="0" id="end-of-container"></div>`:a.qy``;return a.qy`
      <div class="root" dir=${this.direction}>
        <div class=${(0,x.H)({small:this._smallView})}>
          ${Jt}
          ${Gt}
          <div class="person-details-container">${an}</div>
          <div class="expanded-details-container">${wn}</div>
          ${pn}
        </div>
      </div>
     `},this.handleEndOfCard=Ie=>{if(Ie&&"Tab"===Ie.code){const je=this.renderRoot.querySelector("#end-of-container");if(je){je.blur();const Ze=this.renderRoot.querySelector("mgt-person");Ze&&Ze.focus()}}},this.closeCard=()=>{this.updateCurrentSection(null),this.isExpanded=!1},this.sendQuickMessage=()=>Pt(this,void 0,void 0,function*(){const Ie=this._chatInput.trim();if(!Ie?.length)return;const je=this.personDetails,Ze=this._me.userPrincipalName;this.isSendingMessage=!0;const dt=yield((ht,vt,Ie)=>oe(void 0,void 0,void 0,function*(){const je={chatType:"oneOnOne",members:[{"@odata.type":"#microsoft.graph.aadUserConversationMember",roles:["owner"],"user@odata.bind":`https://graph.microsoft.com/v1.0/users('${Ie}')`},{"@odata.type":"#microsoft.graph.aadUserConversationMember",roles:["owner"],"user@odata.bind":`https://graph.microsoft.com/v1.0/users('${vt}')`}]};return yield ht.api("/chats").header("Cache-Control","no-store").middlewareOptions((0,I.F)(Z)).post(je)}))(this._graph,je.userPrincipalName,Ze),Gt={body:{content:Ie}};yield((ht,vt,Ie)=>oe(void 0,void 0,void 0,function*(){return yield ht.api(`/chats/${vt}/messages`).header("Cache-Control","no-store").middlewareOptions((0,I.F)(Be)).post(Ie)}))(this._graph,dt.id,Gt),this.isSendingMessage=!1,this.clearInputData()}),this.emailUser=()=>{const Ie=this.internalPersonDetails;if(Ie){const je=(0,B.iu)(Ie);je&&window.open("mailto:"+je,"_blank","noreferrer")}},this.callUser=()=>{var Ie,je;const Ze=this.personDetails,dt=this.personDetails;if(null!==(Ie=Ze?.businessPhones)&&void 0!==Ie&&Ie.length){const Gt=Ze.businessPhones[0];Gt&&window.open("tel:"+Gt,"_blank","noreferrer")}else if(null!==(je=dt?.phones)&&void 0!==je&&je.length){const Jt=this.getPersonBusinessPhones(dt)[0];Jt&&window.open("tel:"+Jt,"_blank","noreferrer")}},this.chatUser=(Ie=null)=>{const je=this.personDetails;if(je?.userPrincipalName){let dt=`https://teams.microsoft.com/l/chat/0/0?users=${je.userPrincipalName}`;Ie?.length&&(dt+=`&message=${Ie}`);const Gt=()=>window.open(dt,"_blank","noreferrer");E.isAvailable?E.executeDeepLink(dt,Jt=>{Jt||Gt()}):Gt()}},this.videoCallUser=()=>{const Ie=this.personDetails;if(Ie?.userPrincipalName){const Ze=`https://teams.microsoft.com/l/call/0/0?users=${Ie.userPrincipalName}&withVideo=true`,dt=()=>window.open(Ze,"_blank");E.isAvailable?E.executeDeepLink(Ze,Gt=>{Gt||dt()}):dt()}},this.showExpandedDetails=()=>{const Ie=this.renderRoot.querySelector(".root");Ie?.animate&&Ie.animate([{height:"auto",transformOrigin:"top left"},{height:"auto",transformOrigin:"top left"}],{duration:1e3,easing:"ease-in-out",fill:"both"}),this.isExpanded=!0,this.fireCustomEvent("expanded",null,!0)},this.sendQuickMessageOnEnter=Ie=>{"Enter"===Ie.code&&this.sendQuickMessage()},this.handleGoBack=Ie=>{"Enter"===Ie.code&&this.goBack()},this._chatInput="",this._currentSection=null,this._history=[],this.sections=[],this._graph=null}navigate(Ie){this._history.push({personDetails:this.personDetails,personImage:this.getImage(),state:this._cardState}),this.personDetails=Ie,this._cardState=null,this.personImage=null,this._currentSection=null,this.sections=[],this._chatInput=""}clearHistory(){var Ie;if(this._currentSection=null,null===(Ie=this._history)||void 0===Ie||!Ie.length)return;const je=this._history[0];this._history=[],this._cardState=je.state,this._personDetails=je.personDetails,this.personImage=je.personImage,this.loadSections()}args(){return[this.providerState,this.personDetails,this.personQuery,this.personImage,this.userId]}renderNoData(){return this.renderTemplate("no-data",null)||a.qy``}renderPerson(){return O.Q`
      <mgt-person
        tabindex="0"
        class="person-image"
        .personDetails=${this.internalPersonDetails}
        .personImage=${this.getImage()}
        .personPresence=${this.personPresence}
        .showPresence=${this.showPresence}
        view="threelines"
      ></mgt-person>
    `}renderPersonSubtitle(Ie){if((0,Rn.QY)(Ie=Ie||this.internalPersonDetails)&&Ie.department)return a.qy`
       <div class="department">${Ie.department}</div>
     `}renderContactIcons(Ie){const je=Ie=Ie||this.internalPersonDetails;let Ze,dt,Gt;(0,B.iu)(Ie)&&(Ze=`${this.strings.emailButtonLabel} ${Ie.displayName}`,dt=a.qy`
        <fluent-button class="icon"
          aria-label=${Ze}
          @click=${this.emailUser}>
          ${(0,H.r)(H.A.SmallEmail)}
        </fluent-button>
      `),je?.userPrincipalName&&(Ze=`${this.strings.chatButtonLabel} ${Ie.displayName}`,Gt=a.qy`
        <fluent-button class="icon"
          aria-label=${Ze}
          @click=${this.chatUser}>
          ${(0,H.r)(H.A.SmallChat)}
        </fluent-button>
       `),Ze=`${this.strings.videoButtonLabel} ${Ie.displayName}`;const Jt=a.qy`
      <fluent-button class="icon"
        aria-label=${Ze}
        @click=${this.videoCallUser}>
        ${(0,H.r)(H.A.Video)}
      </fluent-button>
    `;let an;return je.userPrincipalName&&(Ze=`${this.strings.callButtonLabel} ${Ie.displayName}`,an=a.qy`
         <fluent-button class="icon"
          aria-label=${Ze}
          @click=${this.callUser}>
          ${(0,H.r)(H.A.Call)}
        </fluent-button>
       `),a.qy`
       <div class="base-icons">
         ${dt} ${Gt} ${Jt} ${an}
       </div>
     `}renderExpandedDetailsButton(){return a.qy`
      <fluent-button
        aria-label=${this.strings.expandDetailsLabel}
        class="expanded-details-button"
        @click=${this.showExpandedDetails}
      >
        ${(0,H.r)(H.A.ExpandDown)}
      </fluent-button>
     `}renderExpandedDetails(){if(!this._cardState&&this._isStateLoading)return O.Q`
         <div class="loading">
           <mgt-spinner></mgt-spinner>
         </div>
       `;_.b.globalProvider.state===b.HJ.SignedOut&&this.loadSections();const je=this.renderSectionNavigation();return a.qy`
      <div class="section-nav">
        ${je}
      </div>
      <hr class="divider"/>
      <div
        class="section-host ${this._smallView?"small":""} ${this._smallView?"small":""}"
        @wheel=${Ze=>this.handleSectionScroll(Ze)}
        tabindex=0
      ></div>
    `}renderSectionNavigation(){if(!this.sections||this.sections.length<2&&!this.hasTemplate("additional-details"))return;const Ie=this._currentSection?this.sections.indexOf(this._currentSection):-1,je=this.sections.map((Gt,Jt)=>{const an=Gt.tagName.toLowerCase(),wn=(0,x.H)({active:Jt===Ie,"section-nav__icon":!0});return a.qy`
        <fluent-tab
          id="${an}-Tab"
          class=${wn}
          slot="tab"
          @keyup="${()=>this.updateCurrentSection(Gt)}"
          @click=${()=>this.updateCurrentSection(Gt)}
        >
          ${Gt.renderIcon()}
        </fluent-tab>
      `}),Ze=this.sections.map(Gt=>a.qy`
        <fluent-tab-panel slot="tabpanel">
          <div class="inserted">
            <div class="title">${Gt.cardTitle}</div>
            ${this._currentSection?Gt.asFullView():null}
          </div>
        </fluent-tab-panel>
      `),dt=(0,x.H)({active:-1===Ie,"section-nav__icon":!0,overviewTab:!0});return a.qy`
      <fluent-tabs
        orientation="horizontal"
        activeindicator
        @wheel=${Gt=>this.handleSectionScroll(Gt)}
      >
        <fluent-tab
          class="${dt}"
          slot="tab"
          @keyup="${()=>this.updateCurrentSection(null)}"
          @click=${()=>this.updateCurrentSection(null)}
        >
          <div>${(0,H.r)(H.A.Overview)}</div>
        </fluent-tab>
        ${je}
        <fluent-tab-panel slot="tabpanel" >
          <div class="overview-panel">${this._currentSection?null:this.renderOverviewSection()}</div>
        </fluent-tab-panel>
        ${Ze}
      </fluent-tabs>
    `}renderOverviewSection(){const Ie=this.sections.map(Ze=>a.qy`
        <div class="section">
          <div class="section__header">
            <div class="section__title" tabindex=0>${Ze.displayName}</div>
              <fluent-button
                appearance="lightweight"
                class="section__show-more"
                @click=${()=>this.updateCurrentSection(Ze)}
              >
                ${this.strings.showMoreSectionButton}
              </fluent-button>
          </div>
          <div class="section__content">${Ze.asCompactView()}</div>
        </div>
      `),je=this.renderTemplate("additional-details",{person:this.internalPersonDetails,personImage:this.getImage(),state:this._cardState});return je&&Ie.splice(1,0,a.qy`
           <div class="section">
             <div class="additional-details">${je}</div>
           </div>
         `),a.qy`
       <div class="sections">
          ${this.renderMessagingSection()}
          ${Ie}
       </div>
     `}renderCurrentSection(){var Ie;if(null!==(Ie=this.sections)&&void 0!==Ie&&Ie.length||this.hasTemplate("additional-details"))return 1!==this.sections.length||this.hasTemplate("additional-details")?this._currentSection?a.qy`
       ${this._currentSection.asFullView()}
     `:this.renderOverviewSection():a.qy`
         ${this.sections[0].asFullView()}
       `}renderMessagingSection(){const Ie=this.personDetails,je=this._me.userPrincipalName,Ze=this._chatInput;if(Ie?.userPrincipalName!==je)return X.isSendMessageVisible?a.qy`
      <div class="message-section">
        <fluent-text-field
          autocomplete="off"
          appearance="outline"
          placeholder="${this.strings.quickMessage}"
          .value=${Ze}
          @input=${dt=>{this._chatInput=dt.target.value,this.requestUpdate()}}
          @keydown="${dt=>this.sendQuickMessageOnEnter(dt)}">
        </fluent-text-field>
        <fluent-button class="send-message-icon"
          aria-label=${this.strings.sendMessageLabel}
          @click=${this.sendQuickMessage}
          ?disabled=${this.isSendingMessage}>
          ${(0,H.r)(this.isSendingMessage?H.A.Confirmation:H.A.Send)}
        </fluent-button>
      </div>
      `:a.s6}loadState(){var Ie,je;return Pt(this,void 0,void 0,function*(){if(this._cardState)return;if(!this.personDetails&&this.inheritDetails){let Jt=this.parentElement;for(;Jt&&Jt.tagName!==`${S.U.prefix}-PERSON`.toUpperCase();)Jt=Jt.parentElement;const an=Jt.personDetails||Jt.personDetailsInternal;Jt&&an&&(this.personDetails=an,this.personImage=Jt.personImage)}const Ze=_.b.globalProvider;if(!Ze||Ze.state!==b.HJ.SignedIn)return;const dt=Ze.graph.forComponent(this);if(this._graph=dt,this._isStateLoading=!0,this._me||(this._me=yield _.b.me()),this.personDetails){const Jt=this.personDetails;let an;if((0,Rn.QY)(Jt)&&(an=Jt.userPrincipalName||Jt.id),an&&!(0,B.iu)(Jt)){const wn=yield(0,W._)(dt,an);this.personDetails=wn,this.personImage=this.getImage()}}else if(this.userId||"me"===this.personQuery){const Jt=yield(0,W._)(dt,this.userId);this.personDetails=Jt,this.personImage=this.getImage()}else if(this.personQuery){const Jt=yield(0,B.lq)(dt,this.personQuery,1);Jt?.length&&(this.personDetails=Jt[0],yield(0,R.f8)(dt,this.personDetails,X.useContactApis).then(an=>{an&&(this.personDetails.personImage=an,this.personImage=an)}))}const Gt={activity:"Offline",availability:"Offline",id:null};if(!this.personPresence&&this.showPresence)try{this.personPresence=null!==(Ie=this.personDetails)&&void 0!==Ie&&Ie.id?yield(0,Q.R)(dt,this.personDetails.id):Gt}catch{this.personPresence=Gt}!(null===(je=this.personDetails)||void 0===je)&&je.id&&(this._cardState=yield((ht,vt,Ie)=>oe(void 0,void 0,void 0,function*(){var je;const Ze=vt.id,dt=(0,B.iu)(vt),Gt="classification"in vt||"personType"in vt&&("PersonalContact"===vt.personType.subclass||"Group"===vt.personType.class),Jt=ht.createBatch();let an;Gt||X.sections.organization&&(((ht,vt)=>{ht.get("person",`users/${vt}?$expand=manager($levels=max;$select=${de})&$select=${de}&$count=true`,re.vW,{ConsistencyLevel:"eventual"}),ht.get("directReports",`users/${vt}/directReports?$select=${de}`)})(Jt,Ze),X.sections.organization.showWorksWith&&((ht,vt)=>{ht.get("people",`users/${vt}/people?$filter=personType/class eq 'Person'`,te)})(Jt,Ze)),X.sections.mailMessages&&dt&&((ht,vt)=>{ht.get("messages",`me/messages?$search="from:${vt}"`,le)})(Jt,dt),X.sections.files&&((ht,vt)=>{let Ie;Ie=vt?`me/insights/shared?$filter=lastshared/sharedby/address eq '${vt}'`:"me/insights/used",ht.get("files",Ie,ve.yv)})(Jt,Ie?null:dt);const wn={};try{an=yield Jt.executeAll()}catch{}if(an)for(const[pn,Ci]of an)wn[pn]=(null===(je=Ci.content)||void 0===je?void 0:je.value)||Ci.content;if(!Gt&&X.sections.profile)try{const pn=yield((ht,vt)=>oe(void 0,void 0,void 0,function*(){return yield ht.api(`/users/${vt}/profile`).version("beta").middlewareOptions((0,I.F)(P)).get()}))(ht,Ze);pn&&(wn.profile=pn)}catch{}return wn.directReports&&wn.directReports.length>0&&(wn.directReports=wn.directReports.filter(pn=>pn.accountEnabled)),wn}))(dt,this.personDetails,this._me===this.personDetails.id)),this.loadSections(),this._isStateLoading=!1})}get hasPhone(){var Ie,je;const Ze=this.personDetails,dt=this.personDetails;return!(null===(Ie=Ze?.businessPhones)||void 0===Ie||!Ie.length)||!(null===(je=dt?.phones)||void 0===je||!je.length)}loadSections(){if(this.sections=[],!this.internalPersonDetails)return;const Ie=new ie(this.internalPersonDetails);if(Ie.hasData&&this.sections.push(Ie),!this._cardState)return;const{person:je,directReports:Ze,messages:dt,files:Gt,profile:Jt}=this._cardState;if(X.sections.organization&&(je?.manager||Ze?.length)&&this.sections.push(new Ct(this._cardState,this._me)),X.sections.mailMessages&&dt?.length&&this.sections.push(new Ge(dt)),X.sections.files&&Gt?.length&&this.sections.push(new ue.R),X.sections.profile&&Jt){const an=new tn(Jt);an.hasData&&this.sections.push(an)}}getImage(){if(this.personImage)return this.personImage;const Ie=this.personDetails;return Ie?.personImage?Ie.personImage:null}clearInputData(){this._chatInput="",this.requestUpdate()}getPersonBusinessPhones(Ie){const je=Ie.phones,Ze=[];for(const dt of je)"business"===dt.type&&Ze.push(dt.number);return Ze}updateCurrentSection(Ie){if(Ie){const Ze=Ie.tagName.toLowerCase();this.renderRoot.querySelector(`#${Ze}-Tab`).click()}const je=this.renderRoot.querySelectorAll("fluent-tab-panel");for(const Ze of je)Ze.scrollTop=0;this._currentSection=Ie,this.requestUpdate()}handleSectionScroll(Ie){const je=this.renderRoot.querySelectorAll("fluent-tab-panel");for(const Ze of je)Ze&&!(Ie.deltaY<0&&0===Ze.scrollTop)&&!(Ie.deltaY>0&&Ze.clientHeight+Ze.scrollTop>=Ze.scrollHeight-1)&&Ie.stopPropagation()}}return nt([(0,s.MZ)({attribute:"person-details",type:Object}),Rt("design:type",Object),Rt("design:paramtypes",[Object])],ht.prototype,"personDetails",null),nt([(0,s.MZ)({attribute:"person-query"}),Rt("design:type",String),Rt("design:paramtypes",[String])],ht.prototype,"personQuery",null),nt([(0,s.MZ)({attribute:"lock-tab-navigation",type:Boolean}),Rt("design:type",Boolean)],ht.prototype,"lockTabNavigation",void 0),nt([(0,s.MZ)({attribute:"user-id"}),Rt("design:type",String),Rt("design:paramtypes",[String])],ht.prototype,"userId",null),nt([(0,s.MZ)({attribute:"person-image",type:String}),Rt("design:type",String)],ht.prototype,"personImage",void 0),nt([(0,s.MZ)({attribute:"fetch-image",type:Boolean}),Rt("design:type",Boolean)],ht.prototype,"fetchImage",void 0),nt([(0,s.MZ)({attribute:"is-expanded",type:Boolean}),Rt("design:type",Boolean)],ht.prototype,"isExpanded",void 0),nt([(0,s.MZ)({attribute:"inherit-details",type:Boolean}),Rt("design:type",Boolean)],ht.prototype,"inheritDetails",void 0),nt([(0,s.MZ)({attribute:"show-presence",type:Boolean}),Rt("design:type",Boolean)],ht.prototype,"showPresence",void 0),nt([(0,s.MZ)({attribute:"person-presence",type:Object}),Rt("design:type",Object)],ht.prototype,"personPresence",void 0),nt([(0,s.wk)(),Rt("design:type",Object)],ht.prototype,"isSendingMessage",void 0),nt([(0,s.wk)(),Rt("design:type",Object)],ht.prototype,"_cardState",void 0),nt([(0,s.wk)(),Rt("design:type",Boolean)],ht.prototype,"_isStateLoading",void 0),nt([(0,s.wk)(),Rt("design:type",Object)],ht.prototype,"_currentSection",void 0),ht})()},6479:(rt,pe,h)=>{h.d(pe,{O$:()=>Le,ge:()=>ge,sN:()=>Be});var a=h(5017),s=h(8940),x=h(2578),y=h(5794),E=h(4569),O=h(4709),_=h(6885),b=h(8324),S=h(9559),B=h(3402),R=h(6271),W=h(9546),H=h(6692),Q=h(4130),I=h(1786),X=h(5527),re=h(2898),ve=h(8360),oe=h(3601),de=h(2710),z=h(4166),$=h(54);const Y=[b.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{font-size:var(--default-font-size)}:host .flyout [slot=anchor]{display:flex;cursor:pointer}:host .flyout [slot=anchor].vertical{flex-direction:column;justify-content:center;align-items:center;margin-inline-start:0}:host .person-root{display:flex;flex-direction:row;align-items:center;background-color:var(--person-background-color,transparent);border-radius:var(--person-border-radius,4px)}:host .person-root.small .avatar-wrapper{min-width:var(--person-avatar-size,24px);width:var(--person-avatar-size,24px);height:var(--person-avatar-size,24px)}:host .person-root.small .contact-icon,:host .person-root.small .initials{font-size:calc(var(--person-avatar-size, 24px) * .4)}:host .person-root.small .presence-wrapper svg{width:calc(var(--person-avatar-size,24px) * .28);height:calc(var(--person-avatar-size,24px) * .28)}:host .person-root.noline .avatar-wrapper,:host .person-root.oneline .avatar-wrapper{min-width:var(--person-avatar-size,24px);width:var(--person-avatar-size,24px);height:var(--person-avatar-size,24px)}:host .person-root.noline .avatar-wrapper .contact-icon,:host .person-root.noline .avatar-wrapper .initials,:host .person-root.oneline .avatar-wrapper .contact-icon,:host .person-root.oneline .avatar-wrapper .initials{font-size:calc(var(--person-avatar-size, 24px) * .4)}:host .person-root.noline .avatar-wrapper .presence-wrapper svg,:host .person-root.oneline .avatar-wrapper .presence-wrapper svg{width:calc(var(--person-avatar-size,24px) * .28);height:calc(var(--person-avatar-size,24px) * .28)}:host .person-root.noline .presence-basic,:host .person-root.oneline .presence-basic{border-width:1px;position:relative;bottom:calc(var(--person-avatar-size,24px) * .12 - 4px)}:host .person-root.twolines .avatar-wrapper{min-width:var(--person-avatar-size,40px);width:var(--person-avatar-size,40px);height:var(--person-avatar-size,40px)}:host .person-root.twolines .avatar-wrapper .contact-icon,:host .person-root.twolines .avatar-wrapper .initials{font-size:calc(var(--person-avatar-size, 40px) * .4)}:host .person-root.twolines .avatar-wrapper .presence-wrapper svg{width:calc(var(--person-avatar-size,40px) * .28);height:calc(var(--person-avatar-size,40px) * .28)}:host .person-root.large .avatar-wrapper,:host .person-root.threelines .avatar-wrapper{min-width:var(--person-avatar-size,56px);width:var(--person-avatar-size,56px);height:var(--person-avatar-size,56px)}:host .person-root.large .avatar-wrapper .contact-icon,:host .person-root.large .avatar-wrapper .initials,:host .person-root.threelines .avatar-wrapper .contact-icon,:host .person-root.threelines .avatar-wrapper .initials{font-size:calc(var(--person-avatar-size, 56px) * .4)}:host .person-root.large .avatar-wrapper .presence-wrapper svg,:host .person-root.threelines .avatar-wrapper .presence-wrapper svg{width:calc(var(--person-avatar-size,56px) * .28);height:calc(var(--person-avatar-size,56px) * .28)}:host .person-root.fourlines .avatar-wrapper,:host .person-root.vertical .avatar-wrapper{min-width:var(--person-avatar-size,72px);width:var(--person-avatar-size,72px);height:var(--person-avatar-size,72px)}:host .person-root.fourlines .avatar-wrapper .contact-icon,:host .person-root.fourlines .avatar-wrapper .initials,:host .person-root.vertical .avatar-wrapper .contact-icon,:host .person-root.vertical .avatar-wrapper .initials{font-size:calc(var(--person-avatar-size, 72px) * .4)}:host .person-root.fourlines .avatar-wrapper .presence-wrapper svg,:host .person-root.vertical .avatar-wrapper .presence-wrapper svg{width:calc(var(--person-avatar-size,72px) * .28);height:calc(var(--person-avatar-size,72px) * .28)}:host .person-root.vertical{flex-direction:column;justify-content:center;align-items:center}:host .person-root .avatar-wrapper{min-width:var(--person-avatar-size,24px);width:var(--person-avatar-size,24px);height:var(--person-avatar-size,24px);position:relative;box-sizing:border-box}:host .person-root .avatar-wrapper .contact-icon,:host .person-root .avatar-wrapper .initials,:host .person-root .avatar-wrapper .shimmer,:host .person-root .avatar-wrapper img{height:100%;width:100%;border:var(--person-avatar-border,none);border-radius:var(--person-avatar-border-radius,50%);margin-block-start:var(--person-avatar-top-spacing,0);object-fit:cover;object-position:center top}:host .person-root .avatar-wrapper .contact-icon,:host .person-root .avatar-wrapper .initials,:host .person-root .avatar-wrapper .shimmer{display:flex;justify-content:center;align-items:center;font-size:calc(var(--person-avatar-size, 24px) * .4);font-weight:400;background:var(--person-initials-background-color,var(--neutral-fill-secondary-rest));color:var(--person-initials-text-color,var(--neutral-fill-strong-hover))}:host .person-root .avatar-wrapper .presence-wrapper{bottom:var(--person-presence-wrapper-bottom,0);right:0;position:absolute;border-radius:50%;background-color:var(--neutral-layer-1);border:1px solid var(--neutral-layer-1)}:host .person-root .avatar-wrapper .presence-wrapper svg{display:flex;width:calc(var(--person-avatar-size,24px) * .28);height:calc(var(--person-avatar-size,24px) * .28)}:host .person-root .details-wrapper{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;min-width:var(--person-details-wrapper-width,168px);margin-inline-start:var(--person-details-left-spacing,12px);margin-block-end:var(--person-details-bottom-spacing,0)}:host .person-root .details-wrapper .shimmer.text{width:200px;height:16px;margin:2px 0}:host .person-root .details-wrapper.vertical{display:inline-flex;flex-direction:column;justify-content:center;align-items:center;margin-inline-start:0}:host .person-root .details-wrapper .line1{font-size:var(--person-line1-font-size, ms-font-size-14);font-weight:var(--person-line1-font-weight,600);color:var(--person-line1-text-color,var(--neutral-foreground-rest));text-transform:var(--person-line1-text-transform,inherit);line-height:var(--person-line1-text-line-height, 20px)}:host .person-root .details-wrapper .line2{font-size:var(--person-line2-font-size, var(--email-font-size, ms-font-size-12));font-weight:var(--person-line2-font-weight,400);color:var(--person-line2-text-color,var(--secondary-text-color));text-transform:var(--person-line2-text-transform,inherit);line-height:var(--person-line2-text-line-height, 16px)}:host .person-root .details-wrapper .line3{font-size:var(--person-line3-font-size, var(--email-font-size, ms-font-size-12));font-weight:var(--person-line3-font-weight,400);color:var(--person-line3-text-color,var(--secondary-text-color));text-transform:var(--person-line3-text-transform,inherit);line-height:var(--person-line3-text-line-height, 16px)}:host .person-root .details-wrapper .line4{font-size:var(--person-line4-font-size, var(--email-font-size, ms-font-size-12));font-weight:var(--person-line4-font-weight,400);color:var(--person-line4-text-color,var(--secondary-text-color));text-transform:var(--person-line4-text-transform,inherit);line-height:var(--person-line4-text-line-height, 16px)}@media (forced-colors:active) and (prefers-color-scheme:dark){:host svg,:host svg>path{fill:rgb(255,255,255);fill-rule:nonzero;clip-rule:nonzero}}[dir=rtl] .presence-wrapper{right:unset!important;left:0}
`],te=["photo","initials"],L=Object.assign(Object.assign({},{Available:"Available",Away:"Away",BeRightBack:"Be right back",Busy:"Busy",DoNotDisturb:"Do not disturb",InACall:"In a call",InAConferenceCall:"In a conference call",Inactive:"Inactive",InAMeeting:"In a meeting",Offline:"Offline",OffWork:"Off work",OutOfOffice:"Out of office",PresenceUnknown:"Presence unknown",Presenting:"Presenting",UrgentInterruptionsOnly:"Urgent interruptions only"}),{photoFor:"Photo for",emailAddress:"Email address"});var P=function(et,Pe,se,Qe){var Tt,tt=arguments.length,ft=tt<3?Pe:null===Qe?Qe=Object.getOwnPropertyDescriptor(Pe,se):Qe;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)ft=Reflect.decorate(et,Pe,se,Qe);else for(var ct=et.length-1;ct>=0;ct--)(Tt=et[ct])&&(ft=(tt<3?Tt(ft):tt>3?Tt(Pe,se,ft):Tt(Pe,se))||ft);return tt>3&&ft&&Object.defineProperty(Pe,se,ft),ft},ee=function(et,Pe){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(et,Pe)},Z=function(et,Pe,se,Qe){return new(se||(se=Promise))(function(ft,Tt){function ct(ue){try{ie(Qe.next(ue))}catch(_e){Tt(_e)}}function Te(ue){try{ie(Qe.throw(ue))}catch(_e){Tt(_e)}}function ie(ue){ue.done?ft(ue.value):function tt(ft){return ft instanceof se?ft:new se(function(Tt){Tt(ft)})}(ue.value).then(ct,Te)}ie((Qe=Qe.apply(et,Pe||[])).next())})};const ge=["businessPhones","displayName","givenName","jobTitle","department","mail","mobilePhone","officeLocation","preferredLanguage","surname","userPrincipalName","id","userType"],Be=()=>{(0,oe.E)(a._0),(0,s.N)("person",Le),(0,z.r)()};let Le=(()=>{class et extends x.N{static get styles(){return Y}get strings(){return L}get personQuery(){return this._personQuery}set personQuery(se){se!==this._personQuery&&(this._personQuery=se,this._personDetails=null,this.personDetailsInternal=null)}get fallbackDetails(){return this._fallbackDetails}set fallbackDetails(se){se!==this._fallbackDetails&&(this._fallbackDetails=se)}get userId(){return this._userId}set userId(se){se!==this._userId&&(this._userId=se,this.personDetailsInternal=null,this._personDetails=null)}get usage(){return this._usage}set usage(se){se!==this._usage&&(this._usage=se)}get personDetailsInternal(){return this._personDetailsInternal}set personDetailsInternal(se){this._personDetailsInternal!==se&&(this._personDetailsInternal=se,this._fetchedImage=null,this._fetchedPresence=null)}get personDetails(){return this._personDetails}set personDetails(se){this._personDetails!==se&&(this._personDetails=se,this._fetchedImage=null,this._fetchedPresence=null)}get personImage(){return this._personImage||this._fetchedImage}set personImage(se){se!==this._personImage&&(this._isInvalidImageSrc=!se,this._personImage=se)}get personPresence(){return this._personPresence||this._fetchedPresence}set personPresence(se){se!==this._personPresence&&(this._personPresence=se)}static get requiredScopes(){const se=["user.readbasic.all","user.read","people.read","presence.read.all","presence.read"];return et.config.useContactApis&&se.push("contacts.read"),se}get flyout(){return this.renderRoot.querySelector(".flyout")}constructor(){super(),this.avatarType="photo",this.personCardInteraction="none",this.view="image",this._hasLoadedPersonCard=!1,this._mouseLeaveTimeout=-1,this._mouseEnterTimeout=-1,this.renderContent=()=>{const se=this.personDetails||this.personDetailsInternal||this.fallbackDetails,Qe=this.getImage(),tt=this.personPresence||this._fetchedPresence;if(!se&&!Qe)return this.renderNoData();!se?.personImage&&Qe&&(se.personImage=Qe);let ft=this.renderTemplate("default",{person:se,personImage:Qe,personPresence:tt});if(!ft){const Te=this.renderDetails(se,tt),ie=this.renderAvatar(se,Qe,tt);ft=b.qy`
        ${ie}
        ${Te}
      `}"none"!==this.personCardInteraction&&(ft=this.renderFlyout(ft,se,Qe,tt));const ct=(0,B.H)({"person-root":!0,small:!this.isThreeLines()&&!this.isFourLines()&&!this.isLargeAvatar(),large:"auto"!==this.avatarSize&&this.isLargeAvatar(),noline:this.isNoLine(),oneline:this.isOneLine(),twolines:this.isTwoLines(),threelines:this.isThreeLines(),fourlines:this.isFourLines(),vertical:this.isVertical()});return b.qy`
      <div
        class="${ct}"
        dir=${this.direction}
        @click=${this.handleMouseClick}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
        @keydown=${this.handleKeyDown}
        tabindex="${(0,R.J)("none"!==this.personCardInteraction?"0":void 0)}"
      >
        ${ft}
      </div>
    `},this.renderLoading=()=>{const se=(0,B.H)({"person-root":!0,small:!this.isThreeLines()&&!this.isFourLines()&&!this.isLargeAvatar(),large:"auto"!==this.avatarSize&&this.isLargeAvatar(),noline:this.isNoLine(),oneline:this.isOneLine(),twolines:this.isTwoLines(),threelines:this.isThreeLines(),fourlines:this.isFourLines(),vertical:this.isVertical()}),Qe=(0,B.H)({"details-wrapper":!0,vertical:this.isVertical()});return this.renderTemplate("loading",null)||b.qy`
        <div class="${se}">
          <div class="avatar-wrapper">
            <fluent-skeleton shimmer class="shimmer" shape="circle"></fluent-skeleton>
          </div>
          <div class=${Qe}>
            ${this.renderLoadingLines()}
          </div>
        </div>`},this.renderLoadingLines=()=>{const se=[];return this.isNoLine()||(this.isOneLine()&&se.push(this.renderLoadingLine(1)),this.isTwoLines()&&(se.push(this.renderLoadingLine(1)),se.push(this.renderLoadingLine(2))),this.isThreeLines()&&(se.push(this.renderLoadingLine(1)),se.push(this.renderLoadingLine(2)),se.push(this.renderLoadingLine(3))),this.isFourLines()&&(se.push(this.renderLoadingLine(1)),se.push(this.renderLoadingLine(2)),se.push(this.renderLoadingLine(3)),se.push(this.renderLoadingLine(4)))),se},this.renderLoadingLine=se=>b.qy`
      <div class=${`line${se}`}>
        <fluent-skeleton shimmer class="shimmer text" shape="rect"></fluent-skeleton>
      </div>
    `,this.handleMouseClick=se=>{"click"===this.personCardInteraction&&se.target.tagName!==`${y.U.prefix}-PERSON-CARD`.toUpperCase()&&this.showPersonCard()},this.handleKeyDown=se=>{se&&"Enter"===se.key&&this.showPersonCard()},this.handleMouseEnter=()=>{clearTimeout(this._mouseEnterTimeout),clearTimeout(this._mouseLeaveTimeout),"hover"===this.personCardInteraction&&(this._mouseEnterTimeout=window.setTimeout(this.showPersonCard,500))},this.handleMouseLeave=()=>{clearTimeout(this._mouseEnterTimeout),clearTimeout(this._mouseLeaveTimeout),this._mouseLeaveTimeout=window.setTimeout(this.hidePersonCard,500)},this.hidePersonCard=()=>{const se=this.flyout;se&&se.close();const Qe=this.querySelector(".mgt-person-card")||this.renderRoot.querySelector(".mgt-person-card");Qe&&(Qe.isExpanded=!1,Qe.clearHistory())},this.loadPersonCardResources=()=>Z(this,void 0,void 0,function*(){if("none"!==this.personCardInteraction&&!this._hasLoadedPersonCard){const{registerMgtPersonCardComponent:se}=yield Promise.resolve().then(h.bind(h,7531));customElements.get((0,s.F)("person-card"))||se(),this._hasLoadedPersonCard=!0}}),this.showPersonCard=()=>{this._personCardShouldRender||(this._personCardShouldRender=!0,this.loadPersonCardResources());const se=this.flyout;se&&se.open()},this.personCardInteraction="none",this.line1Property="displayName",this.line2Property="jobTitle",this.line3Property="department",this.line4Property="email",this.view="image",this.avatarSize="auto",this.disableImageFetch=!1,this._isInvalidImageSrc=!1,this.avatarType="photo",this.verticalLayout=!1}clearState(){this._personImage="",this._personDetailsInternal=null,this._fetchedImage=null,this._fetchedPresence=null}renderNoData(){const se=this.renderTemplate("no-data",null);if(se)return se;const Qe={"avatar-icon":!0,vertical:this.isVertical(),small:!this.isLargeAvatar(),noline:this.isNoLine(),oneline:this.isOneLine(),twolines:this.isTwoLines(),threelines:this.isThreeLines(),fourlines:this.isFourLines()};return b.qy`
       <i class=${(0,B.H)(Qe)}></i>
     `}renderPersonIcon(){return(0,de.r)(de.A.Person)}renderImage(se,Qe){var tt;const ft=`${this.strings.photoFor} ${se.displayName}`,Tt=Qe&&!this._isInvalidImageSrc&&"photo"===this.avatarType,ct="photo"===this.avatarType&&"image"===this.view,Te=null!==(tt=se?.displayName||`${this.strings.emailAddress} ${(0,H.iu)(se)}`)&&void 0!==tt?tt:void 0,ie=b.qy`<img
      title="${(0,R.J)(ct?Te:void 0)}"
      alt=${ft}
      src=${Qe}
      @error=${()=>this._isInvalidImageSrc=!0} />`,ue=se?this.getInitials(se):"",_e=ue?.length,Ke=(0,B.H)({initials:_e&&!Tt,"contact-icon":!_e}),we=b.qy`<i>${this.renderPersonIcon()}</i>`,Fe=b.qy`
      <span 
        title="${(0,R.J)("image"===this.view?Te:void 0)}"
        role="${(0,R.J)("image"===this.view?void 0:"presentation")}"
        class="${Ke}"
      >
        ${_e?ue:we}
      </span>
`;return this.fireCustomEvent(Tt?"person-image-rendered":"person-icon-rendered"),Tt?ie:Fe}renderPresence(se){var Qe;if(!this.showPresence||!se)return b.qy``;let tt;const{activity:ft,availability:Tt}=se;switch(Tt){case"Available":case"AvailableIdle":tt=(0,de.r)("OutOfOffice"===ft?de.A.PresenceOofAvailable:de.A.PresenceAvailable);break;case"Busy":case"BusyIdle":switch(ft){case"OutOfOffice":case"OnACall":tt=(0,de.r)(de.A.PresenceOofBusy);break;default:tt=(0,de.r)(de.A.PresenceBusy)}break;case"DoNotDisturb":tt=(0,de.r)("OutOfOffice"===ft?de.A.PresenceOofDnd:de.A.PresenceDnd);break;case"Away":tt=(0,de.r)("OutOfOffice"===ft?de.A.PresenceOofAway:de.A.PresenceAway);break;case"BeRightBack":tt=(0,de.r)(de.A.PresenceAway);break;case"Offline":switch(ft){case"Offline":tt=(0,de.r)(de.A.PresenceOffline);break;case"OutOfOffice":case"OffWork":tt=(0,de.r)(de.A.PresenceOofAway);break;default:tt=(0,de.r)(de.A.PresenceStatusUnknown)}break;default:tt=(0,de.r)(de.A.PresenceStatusUnknown)}const ct=(0,B.H)({"presence-wrapper":!0,noline:this.isNoLine(),oneline:this.isOneLine()}),Te=null!==(Qe=this.strings[ft])&&void 0!==Qe?Qe:b.s6;return b.qy`
      <span
        class="${ct}"
        title="${Te}"
        aria-label="${Te}"
        role="img">
          ${tt}
      </span>
    `}renderAvatar(se,Qe,tt){const ft=this.renderImage(se,Qe),Tt=this.renderPresence(tt);return b.qy`
      <div class="avatar-wrapper">
        ${ft}
        ${Tt}
      </div>
    `}handleLine1Clicked(){this.fireCustomEvent("line1clicked",this.personDetailsInternal)}handleLine2Clicked(){this.fireCustomEvent("line2clicked",this.personDetailsInternal)}handleLine3Clicked(){this.fireCustomEvent("line3clicked",this.personDetailsInternal)}handleLine4Clicked(){this.fireCustomEvent("line4clicked",this.personDetailsInternal)}renderDetails(se,Qe){if(!se||"image"===this.view)return b.qy``;const tt=se;Qe&&(tt.presenceActivity=Qe?.activity,tt.presenceAvailability=Qe?.availability);const ft=[],Tt=this.getTextFromProperty(tt,this.line1Property);if(this.hasTemplate("line1")){const Te=this.renderTemplate("line1",{person:tt});ft.push(b.qy`
           <div class="line1" part="detail-line" @click=${()=>this.handleLine1Clicked()} role="presentation" aria-label="${Tt}">${Te}</div>
         `)}else Tt&&ft.push(b.qy`
             <div class="line1" part="detail-line" @click=${()=>this.handleLine1Clicked()} role="presentation" aria-label="${Tt}">${Tt}</div>
           `);if("oneline"!==this.view){const Te=this.getTextFromProperty(tt,this.line2Property);if(this.hasTemplate("line2")){const ie=this.renderTemplate("line2",{person:tt});ft.push(b.qy`
           <div class="line2" part="detail-line" @click=${()=>this.handleLine2Clicked()} role="presentation" aria-label="${Te}">${ie}</div>
         `)}else Te&&ft.push(b.qy`
             <div class="line2" part="detail-line" @click=${()=>this.handleLine2Clicked()} role="presentation" aria-label="${Te}">${Te}</div>
           `)}if("threelines"===this.view||"fourlines"===this.view){const Te=this.getTextFromProperty(tt,this.line3Property);if(this.hasTemplate("line3")){const ie=this.renderTemplate("line3",{person:tt});ft.push(b.qy`
           <div class="line3" part="detail-line" @click=${()=>this.handleLine3Clicked()} role="presentation" aria-label="${Te}">${ie}</div>
         `)}else Te&&ft.push(b.qy`
             <div class="line3" part="detail-line" @click=${()=>this.handleLine3Clicked()} role="presentation" aria-label="${Te}">${Te}</div>
           `)}if("fourlines"===this.view){const Te=this.getTextFromProperty(tt,this.line4Property);if(this.hasTemplate("line4")){const ie=this.renderTemplate("line4",{person:tt});ft.push(b.qy`
          <div class="line4" part="detail-line" @click=${()=>this.handleLine4Clicked()} role="presentation" aria-label="${Te}">${ie}</div>
        `)}else Te&&ft.push(b.qy`
            <div class="line4" part="detail-line" @click=${()=>this.handleLine4Clicked()} role="presentation" aria-label="${Te}">${Te}</div>
          `)}const ct=(0,B.H)({"details-wrapper":!0,vertical:this.isVertical()});return b.qy`
      <div class="${ct}">
        ${ft}
      </div>
    `}renderFlyout(se,Qe,tt,ft){const Tt=this._personCardShouldRender&&this._hasLoadedPersonCard?b.qy`
           <div slot="flyout" data-testid="flyout-slot">
             ${this.renderFlyoutContent(Qe,tt,ft)}
           </div>`:b.qy``,ct=(0,B.H)({small:!this.isThreeLines()&&!this.isFourLines()&&!this.isLargeAvatar(),large:"auto"!==this.avatarSize&&this.isLargeAvatar(),noline:this.isNoLine(),oneline:this.isOneLine(),twolines:this.isTwoLines(),threelines:this.isThreeLines(),fourlines:this.isFourLines(),vertical:this.isVertical()});return E.Q`
      <mgt-flyout light-dismiss class="flyout" .avoidHidingAnchor=${!1}>
        <div slot="anchor" class="${ct}">${se}</div>
        ${Tt}
      </mgt-flyout>`}renderFlyoutContent(se,Qe,tt){return this.fireCustomEvent("flyout-content-rendered"),this.renderTemplate("person-card",{person:se,personImage:Qe})||E.Q`
        <mgt-person-card
          class="mgt-person-card"
          lock-tab-navigation
          .personDetails=${se}
          .personImage=${Qe}
          .personPresence=${tt}
          .showPresence=${this.showPresence}>
        </mgt-person-card>`}args(){return[this.providerState,this.verticalLayout,this.view,this.fallbackDetails,this.line1Property,this.line2Property,this.line3Property,this.line4Property,this.fetchImage,this.avatarType,this.userId,this.personQuery,this.disableImageFetch,this.showPresence,this.personPresence,this.personDetails]}loadState(){return Z(this,void 0,void 0,function*(){const se=O.b.globalProvider;if(!se||se.state===_.HJ.Loading)return;if(se&&se.state===_.HJ.SignedOut)return void(this.personDetailsInternal=null);const Qe=se.graph.forComponent(this);(this.verticalLayout&&"fourlines"!==this.view||this.fallbackDetails)&&(this.line2Property="email");let tt=[...ge,this.line1Property,this.line2Property,this.line3Property,this.line4Property];tt=tt.filter(ct=>"email"!==ct);let ft=this.personDetailsInternal||this.personDetails;if(ft){if(!ft.personImage&&this.fetchImage&&"photo"===this.avatarType&&!this.personImage&&!this._fetchedImage){let ct;ct="groupTypes"in ft?yield(0,Q.t5)(Qe,ft):yield(0,Q.f8)(Qe,ft,et.config.useContactApis),ct&&(ft.personImage=ct,this._fetchedImage=ct)}}else if(this.userId||"me"===this.personQuery){let ct;ct="photo"!==this.avatarType||this.disableImageFetch?"me"===this.personQuery?yield(0,X.jp)(Qe,tt):yield(0,X.wz)(Qe,this.userId,tt):yield(0,re._)(Qe,this.userId,tt),this.personDetailsInternal=ct,this.personDetails=ct,this._fetchedImage=this.getImage()}else if(this.personQuery){let ct=yield(0,H.lq)(Qe,this.personQuery,1);if((!ct||0===ct.length)&&(ct=(yield(0,X.Ei)(Qe,this.personQuery,1))||[]),ct?.length&&(this.personDetailsInternal=ct[0],this.personDetails=ct[0],"photo"===this.avatarType&&!this.disableImageFetch)){const Te=yield(0,Q.f8)(Qe,ct[0],et.config.useContactApis);Te&&(this.personDetailsInternal.personImage=Te,this.personDetails.personImage=Te,this._fetchedImage=Te)}}ft=this.personDetailsInternal||this.personDetails||this.fallbackDetails;const Tt={activity:"Offline",availability:"Offline",id:null};if(this.showPresence&&!this.personPresence&&!this._fetchedPresence)try{if(ft){const ct="me"!==this.personQuery?ft?.id:null;this._fetchedPresence=yield(0,I.R)(Qe,ct)}else this._fetchedPresence=Tt}catch{this._fetchedPresence=Tt}})}getInitials(se){var Qe,tt,ft,Tt,ct,Te;if(se||(se=this.personDetailsInternal),(0,W.Ts)(se))return se.initials;let ie="";if((0,W.QY)(se)&&(ie+=null!==(ft=null===(tt=null===(Qe=se.givenName)||void 0===Qe?void 0:Qe[0])||void 0===tt?void 0:tt.toUpperCase())&&void 0!==ft?ft:"",ie+=null!==(Te=null===(ct=null===(Tt=se.surname)||void 0===Tt?void 0:Tt[0])||void 0===ct?void 0:ct.toUpperCase())&&void 0!==Te?Te:""),!ie&&se.displayName){const ue=se.displayName.split(/\s+/);for(let _e=0;_e<2&&_e<ue.length;_e++)ue[_e][0]&&this.isLetter(ue[_e][0])&&(ie+=ue[_e][0].toUpperCase())}return ie}getImage(){if(this.personImage)return this.personImage;if(this._fetchedImage)return this._fetchedImage;const se=this.personDetailsInternal||this.personDetails;return se?.personImage?se.personImage:null}isLetter(se){try{return se.match(new RegExp("\\p{L}","u"))}catch{return se.toLowerCase()!==se.toUpperCase()}}getTextFromProperty(se,Qe){if(!Qe||0===Qe.length)return null;const tt=Qe.trim().split(",");let ft,Tt=0;for(;!ft&&Tt<tt.length;){const ct=tt[Tt].trim();switch(ct){case"mail":case"email":ft=(0,H.iu)(se);break;default:ft=se[ct]}Tt++}return ft}isLargeAvatar(){return"large"===this.avatarSize||"auto"===this.avatarSize&&"image"!==this.view&&"oneline"!==this.view}isNoLine(){return"image"===this.view}isOneLine(){return"oneline"===this.view}isTwoLines(){return"twolines"===this.view}isThreeLines(){return"threelines"===this.view}isFourLines(){return"fourlines"===this.view}isVertical(){return this.verticalLayout}}return et.config={useContactApis:!0},P([(0,S.MZ)({attribute:"person-query"}),ee("design:type",String),ee("design:paramtypes",[String])],et.prototype,"personQuery",null),P([(0,S.MZ)({attribute:"fallback-details",type:Object}),ee("design:type",Object),ee("design:paramtypes",[Object])],et.prototype,"fallbackDetails",null),P([(0,S.MZ)({attribute:"user-id"}),ee("design:type",String),ee("design:paramtypes",[String])],et.prototype,"userId",null),P([(0,S.MZ)({attribute:"usage"}),ee("design:type",String),ee("design:paramtypes",[String])],et.prototype,"usage",null),P([(0,S.MZ)({attribute:"show-presence",type:Boolean}),ee("design:type",Boolean)],et.prototype,"showPresence",void 0),P([(0,S.MZ)({attribute:"avatar-size",type:String}),ee("design:type",String)],et.prototype,"avatarSize",void 0),P([(0,S.wk)(),ee("design:type",Object),ee("design:paramtypes",[Object])],et.prototype,"personDetailsInternal",null),P([(0,S.MZ)({attribute:"person-details",type:Object}),ee("design:type",Object),ee("design:paramtypes",[Object])],et.prototype,"personDetails",null),P([(0,S.MZ)({attribute:"person-image",type:String}),ee("design:type",String),ee("design:paramtypes",[String])],et.prototype,"personImage",null),P([(0,S.MZ)({attribute:"fetch-image",type:Boolean}),ee("design:type",Boolean)],et.prototype,"fetchImage",void 0),P([(0,S.MZ)({attribute:"disable-image-fetch",type:Boolean}),ee("design:type",Boolean)],et.prototype,"disableImageFetch",void 0),P([(0,S.MZ)({attribute:"vertical-layout",type:Boolean}),ee("design:type",Boolean)],et.prototype,"verticalLayout",void 0),P([(0,S.MZ)({attribute:"avatar-type",converter:Pe=>((et,Pe="photo")=>(et=>"string"==typeof et&&te.includes(et))(et)?et:Pe)(Pe,"photo")}),ee("design:type",String)],et.prototype,"avatarType",void 0),P([(0,S.MZ)({attribute:"person-presence",type:Object}),ee("design:type",Object),ee("design:paramtypes",[Object])],et.prototype,"personPresence",null),P([(0,S.MZ)({attribute:"person-card",converter:Pe=>(0,$.e)(Pe)}),ee("design:type",String)],et.prototype,"personCardInteraction",void 0),P([(0,S.MZ)({attribute:"line1-property"}),ee("design:type",String)],et.prototype,"line1Property",void 0),P([(0,S.MZ)({attribute:"line2-property"}),ee("design:type",String)],et.prototype,"line2Property",void 0),P([(0,S.MZ)({attribute:"line3-property"}),ee("design:type",String)],et.prototype,"line3Property",void 0),P([(0,S.MZ)({attribute:"line4-property"}),ee("design:type",String)],et.prototype,"line4Property",void 0),P([(0,S.MZ)({converter:Pe=>(0,ve.E)(Pe,"image")}),ee("design:type",String)],et.prototype,"view",void 0),P([(0,S.wk)(),ee("design:type",String)],et.prototype,"_fetchedImage",void 0),P([(0,S.wk)(),ee("design:type",Object)],et.prototype,"_fetchedPresence",void 0),P([(0,S.wk)(),ee("design:type",Boolean)],et.prototype,"_isInvalidImageSrc",void 0),P([(0,S.wk)(),ee("design:type",Boolean)],et.prototype,"_personCardShouldRender",void 0),P([(0,S.wk)(),ee("design:type",Object)],et.prototype,"_hasLoadedPersonCard",void 0),et})()},4166:(rt,pe,h)=>{h.d(pe,{r:()=>R});var a=h(8324),s=h(9559),x=h(3402);const y=()=>void 0!==window.getWindowSegments,O=[a.AH`
.root .scout-top{position:fixed;top:0;left:0}.root .scout-bottom{position:fixed;bottom:0;right:0}.root .flyout{display:none;position:fixed;z-index:9999999;opacity:0;box-shadow:var(--mgt-flyout-box-shadow,var(--elevation-shadow-card-rest));border-radius:8px}.root .flyout.small{overflow:hidden auto}.root.visible .flyout{display:inline-block;animation-name:fade-in;animation-duration:.3s;animation-timing-function:cubic-bezier(0.1,0.9,0.2,1);animation-fill-mode:both;transition:top .3s ease,bottom .3s ease,left .3s ease}.root.visible .flyout.small{overflow:hidden auto}@keyframes fade-in{from{opacity:0;margin-top:-10px;margin-bottom:-10px}to{opacity:1;margin-top:0;margin-bottom:0}}
`];var _=h(8940),b=h(5260),S=function(H,Q,I,X){var oe,re=arguments.length,ve=re<3?Q:null===X?X=Object.getOwnPropertyDescriptor(Q,I):X;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)ve=Reflect.decorate(H,Q,I,X);else for(var de=H.length-1;de>=0;de--)(oe=H[de])&&(ve=(re<3?oe(ve):re>3?oe(Q,I,ve):oe(Q,I))||ve);return re>3&&ve&&Object.defineProperty(Q,I,ve),ve},B=function(H,Q){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(H,Q)};const R=()=>(0,_.N)("flyout",W);let W=(()=>{class H extends b.S{static get styles(){return O}get isOpen(){return this._isOpen}set isOpen(I){const X=this._isOpen;X!==I&&(this._isOpen=I,window.requestAnimationFrame(()=>{this.setupWindowEvents(this.isOpen);const re=this._flyout;!this.isOpen&&re&&(re.style.width=null,re.style.setProperty("--mgt-flyout-set-width",null),re.style.setProperty("--mgt-flyout-set-height",null),re.style.maxHeight=null,re.style.top=null,re.style.left=null,re.style.bottom=null)}),this.requestUpdate("isOpen",X),this.dispatchEvent(new Event(I?"opened":"closed")))}get _edgePadding(){return 24}get _flyout(){return this.renderRoot.querySelector(".flyout")}get _anchor(){return this.renderRoot.querySelector(".anchor")}get _topScout(){return this.renderRoot.querySelector(".scout-top")}get _bottomScout(){return this.renderRoot.querySelector(".scout-bottom")}constructor(){super(),this._renderedOnce=!1,this._isOpen=!1,this._smallView=!1,this.handleWindowEvent=I=>{const X=this._flyout;if(X)if(I.composedPath){const re=I.composedPath();if(re.includes(X)||"pointerdown"===I.type&&re.includes(this))return}else{let re=I.target;for(;re;)if(re=re.parentElement,re===X||"pointerdown"===I.type&&re===this)return}this.close()},this.handleResize=()=>{this.close()},this.handleKeyUp=I=>{"Escape"===I.key&&this.close()},this.handleFlyoutWheel=I=>{I.preventDefault()},this.avoidHidingAnchor=!0,this.addEventListener("expanded",()=>{window.requestAnimationFrame(()=>{this.updateFlyout()})})}open(){this.isOpen=!0}close(){this.isOpen=!1}disconnectedCallback(){this.setupWindowEvents(!1),super.disconnectedCallback()}updated(I){super.updated(I),window.requestAnimationFrame(()=>{this.updateFlyout()})}render(){const I={root:!0,visible:this.isOpen},X=this.renderAnchor();let re=null;if(this._windowHeight=window.innerHeight&&document.documentElement.clientHeight?Math.min(window.innerHeight,document.documentElement.clientHeight):window.innerHeight||document.documentElement.clientHeight,this._windowHeight<250&&(this._smallView=!0),this.isOpen||this._renderedOnce){this._renderedOnce=!0;const ve=(0,x.H)({flyout:!0,small:this._smallView});re=a.qy`
        <div class=${ve} @wheel=${this.handleFlyoutWheel}>
          ${this.renderFlyout()}
        </div>
      `}return a.qy`
      <div class=${(0,x.H)(I)}>
        <div class="anchor">
          ${X}
        </div>
        <div class="scout-top"></div>
        <div class="scout-bottom"></div>
        ${re}
      </div>
    `}renderAnchor(){return a.qy`
      <slot name="anchor"></slot>
    `}renderFlyout(){return a.qy`
      <slot name="flyout"></slot>
    `}updateFlyout(I=!0){if(!this.isOpen)return;const X=this._anchor,re=this._flyout;if(re&&X){const ve=window.innerWidth&&document.documentElement.clientWidth?Math.min(window.innerWidth,document.documentElement.clientWidth):window.innerWidth||document.documentElement.clientWidth;this._windowHeight=window.innerHeight&&document.documentElement.clientHeight?Math.min(window.innerHeight,document.documentElement.clientHeight):window.innerHeight||document.documentElement.clientHeight;let de,$,Y,oe=0,z=0;const te=re.getBoundingClientRect(),j=X.getBoundingClientRect(),le=this._topScout.getBoundingClientRect(),G=this._bottomScout.getBoundingClientRect(),L={height:this._windowHeight,left:0,top:0,width:ve};if(y()){const ge=(y()?window:null).getWindowSegments();let Be;const Le=j.left+j.width/2,et=j.top+j.height/2;for(const Pe of ge)if(Le>=Pe.left&&et>=Pe.top){Be=Pe;break}Be&&(L.left=Be.left,L.top=Be.top,L.width=Be.width,L.height=Be.height)}te.width+2*this._edgePadding>L.width?te.width>L.width?(Y=L.width,oe=0):oe=(L.width-te.width)/2:oe=j.left+te.width+this._edgePadding>L.width?j.left-(j.left+te.width+this._edgePadding-L.width):j.left<this._edgePadding?this._edgePadding:j.left;const P=L.height-(j.top+j.height),ee=j.top;this.avoidHidingAnchor?P<=te.height?ee<te.height?ee>P?(de=L.height-j.top,$=ee):(z=j.bottom,$=P):(de=L.height-j.top,$=ee):(z=j.bottom,$=P):te.height+2*this._edgePadding>L.height?te.height>=L.height?($=L.height,z=0):z=(L.height-te.height)/2:z=j.top+j.height+te.height+this._edgePadding>L.height?L.height-te.height-this._edgePadding:Math.max(j.top+j.height,this._edgePadding),(0!==le.top||0!==le.left)&&(oe-=le.left,typeof de<"u"?de+=G.top-this._windowHeight:z-=le.top),"rtl"===this.direction?oe>100&&this.offsetLeft>100&&(re.style.left=L.width-oe+te.left-te.width-30+"px"):re.style.left=`${oe+L.left}px`,typeof de<"u"?(re.style.top="unset",re.style.bottom=`${de}px`):(re.style.bottom="unset",re.style.top=`${z+L.top}px`),Y&&(re.style.width=`${Y}px`,re.style.setProperty("--mgt-flyout-set-width",`${Y}px`),window.requestAnimationFrame(()=>this.updateFlyout())),$&&!I?(re.style.maxHeight=`${$}px`,re.style.setProperty("--mgt-flyout-set-height",`${$}px`)):(re.style.maxHeight=null,re.style.setProperty("--mgt-flyout-set-height","unset")),I&&window.requestAnimationFrame(()=>this.updateFlyout(!1))}}setupWindowEvents(I){I&&this.isLightDismiss?(window.addEventListener("wheel",this.handleWindowEvent),window.addEventListener("pointerdown",this.handleWindowEvent),window.addEventListener("resize",this.handleResize),window.addEventListener("keyup",this.handleKeyUp)):(window.removeEventListener("wheel",this.handleWindowEvent),window.removeEventListener("pointerdown",this.handleWindowEvent),window.removeEventListener("resize",this.handleResize),window.removeEventListener("keyup",this.handleKeyUp))}}return S([(0,s.MZ)({attribute:"light-dismiss",type:Boolean}),B("design:type",Boolean)],H.prototype,"isLightDismiss",void 0),S([(0,s.MZ)({attribute:null,type:Boolean}),B("design:type",Boolean)],H.prototype,"avoidHidingAnchor",void 0),S([(0,s.MZ)({attribute:"isOpen",type:Boolean}),B("design:type",Boolean),B("design:paramtypes",[Boolean])],H.prototype,"isOpen",null),H})()},1965:(rt,pe,h)=>{h.d(pe,{i:()=>E});var a=h(8324),s=h(5260);const x=[a.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}
`];var y=h(8940);const E=()=>(0,y.N)("spinner",O);class O extends s.S{static get styles(){return x}render(){return a.qy`<fluent-progress-ring title="spinner"></fluent-progress-ring>`}}},5889:(rt,pe,h)=>{h.d(pe,{j:()=>a});const a={presence:{name:"presence",stores:{presence:"presence"},version:2},users:{name:"users",stores:{users:"users",usersQuery:"usersQuery",userFilters:"userFilters"},version:3},photos:{name:"photos",stores:{contacts:"contacts",users:"users",groups:"groups",teams:"teams"},version:2},people:{name:"people",stores:{contacts:"contacts",groupPeople:"groupPeople",peopleQuery:"peopleQuery"},version:3},groups:{name:"groups",stores:{groups:"groups",groupsQuery:"groupsQuery"},version:5},get:{name:"responses",stores:{responses:"responses"},version:2},search:{name:"search",stores:{responses:"responses"},version:2},files:{name:"files",stores:{driveFiles:"driveFiles",groupFiles:"groupFiles",siteFiles:"siteFiles",userFiles:"userFiles",insightFiles:"insightFiles",fileQueries:"fileQueries"},version:2},fileLists:{name:"file-lists",stores:{fileLists:"fileLists",insightfileLists:"insightfileLists"},version:2}}},9546:(rt,pe,h)=>{h.d(pe,{QY:()=>s,Ts:()=>x});const s=y=>"personType"in y||"userType"in y,x=y=>"initials"in y},7768:(rt,pe,h)=>{h.d(pe,{$4:()=>et,$V:()=>S,Ad:()=>ge,Ay:()=>ce,D:()=>Te,KE:()=>$,Kx:()=>Be,LI:()=>te,Mu:()=>ve,NO:()=>Pe,Nd:()=>G,OB:()=>Y,Pk:()=>P,Pq:()=>V,Rh:()=>ft,S0:()=>ue,Sp:()=>le,W1:()=>fe,WU:()=>Le,WW:()=>oe,XD:()=>de,Y1:()=>se,Z:()=>tt,Zm:()=>Tt,bJ:()=>_e,bn:()=>L,d$:()=>z,dM:()=>j,gt:()=>b,jI:()=>ie,mQ:()=>Ct,mj:()=>xe,n:()=>ct,o4:()=>Qe,oL:()=>Ge,sy:()=>Ve,wH:()=>ee,yv:()=>I,zn:()=>re});var a=h(2404),s=h(4327),x=h(7425),y=h(5889),E=h(2657),O=h(3173),_=function(it,mt,$e,Xe){return new($e||($e=Promise))(function(tn,kn){function An(mn){try{vi(Xe.next(mn))}catch(fi){kn(fi)}}function Rn(mn){try{vi(Xe.throw(mn))}catch(fi){kn(fi)}}function vi(mn){mn.done?tn(mn.value):function zt(tn){return tn instanceof $e?tn:new $e(function(kn){kn(tn)})}(mn.value).then(An,Rn)}vi((Xe=Xe.apply(it,mt||[])).next())})};const b=it=>Array.isArray(it.nextExpectedRanges),S=()=>_(void 0,void 0,void 0,function*(){yield a._.getCache(y.j.fileLists,y.j.fileLists.stores.fileLists).clearStore()}),B=()=>a._.config.files.invalidationPeriod||a._.config.defaultInvalidationPeriod,R=()=>a._.config.files.isEnabled&&a._.config.isEnabled,H=()=>a._.config.fileLists.isEnabled&&a._.config.isEnabled,Q=["Files.Read","Files.ReadWrite","Files.Read.All","Files.ReadWrite.All","Group.Read.All","Group.ReadWrite.All","Sites.Read.All","Sites.ReadWrite.All"],I=["Sites.Read.All","Sites.ReadWrite.All"],X=["Files.ReadWrite","Files.ReadWrite.All","Sites.ReadWrite.All"],re=(it,mt,$e=y.j.files.stores.fileQueries,Xe=Q)=>_(void 0,void 0,void 0,function*(){const zt=a._.getCache(y.j.files,$e),tn=yield at(zt,mt);if(tn)return tn;let kn;try{kn=yield it.api(mt).middlewareOptions((0,s.F)(Xe)).get(),R()&&(yield zt.putValue(mt,{file:JSON.stringify(kn)}))}catch{}return kn||null}),ve=(it,mt,$e)=>_(void 0,void 0,void 0,function*(){return re(it,`/drives/${mt}/items/${$e}`,y.j.files.stores.driveFiles)}),oe=(it,mt,$e)=>_(void 0,void 0,void 0,function*(){return re(it,`/drives/${mt}/root:/${$e}`,y.j.files.stores.driveFiles)}),de=(it,mt,$e)=>_(void 0,void 0,void 0,function*(){return re(it,`/groups/${mt}/drive/items/${$e}`,y.j.files.stores.groupFiles)}),z=(it,mt,$e)=>_(void 0,void 0,void 0,function*(){return re(it,`/groups/${mt}/drive/root:/${$e}`,y.j.files.stores.groupFiles)}),$=(it,mt)=>_(void 0,void 0,void 0,function*(){return re(it,`/me/drive/items/${mt}`,y.j.files.stores.userFiles)}),Y=(it,mt)=>_(void 0,void 0,void 0,function*(){return re(it,`/me/drive/root:/${mt}`,y.j.files.stores.userFiles)}),te=(it,mt,$e)=>_(void 0,void 0,void 0,function*(){return re(it,`/sites/${mt}/drive/items/${$e}`,y.j.files.stores.siteFiles)}),j=(it,mt,$e)=>_(void 0,void 0,void 0,function*(){return re(it,`/sites/${mt}/drive/root:/${$e}`,y.j.files.stores.siteFiles)}),le=(it,mt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return re(it,`/sites/${mt}/lists/${$e}/items/${Xe}/driveItem`,y.j.files.stores.siteFiles)}),G=(it,mt,$e)=>_(void 0,void 0,void 0,function*(){return re(it,`/users/${mt}/drive/items/${$e}`,y.j.files.stores.userFiles)}),L=(it,mt,$e)=>_(void 0,void 0,void 0,function*(){return re(it,`/users/${mt}/drive/root:/${$e}`,y.j.files.stores.userFiles)}),P=(it,mt,$e)=>_(void 0,void 0,void 0,function*(){return re(it,`/me/insights/${mt}/${$e}/resource`,y.j.files.stores.insightFiles,I)}),ee=(it,mt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return re(it,`/users/${mt}/insights/${$e}/${Xe}/resource`,y.j.files.stores.insightFiles,I)}),Z=(it,mt,$e,Xe)=>_(void 0,void 0,void 0,function*(){let zt;const tn=a._.getCache(y.j.fileLists,$e),kn=yield Ot(tn,$e,`${mt}:${Xe}`);if(kn)return zt=Fe(it,kn.files,kn.nextLink),zt;let An;try{if(An=it.api(mt).middlewareOptions((0,s.F)(Q)),Xe&&An.top(Xe),zt=yield we(it,An),H()){const Rn=zt.nextLink;yield tn.putValue(mt,{files:zt.value.map(vi=>JSON.stringify(vi)),nextLink:Rn})}}catch{}return zt||null}),ge=(it,mt)=>_(void 0,void 0,void 0,function*(){return Z(it,"/me/drive/root/children",y.j.fileLists.stores.fileLists,mt)}),Be=(it,mt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return Z(it,`/drives/${mt}/items/${$e}/children`,y.j.fileLists.stores.fileLists,Xe)}),Le=(it,mt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return Z(it,`/drives/${mt}/root:/${$e}:/children`,y.j.fileLists.stores.fileLists,Xe)}),et=(it,mt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return Z(it,`/groups/${mt}/drive/items/${$e}/children`,y.j.fileLists.stores.fileLists,Xe)}),Pe=(it,mt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return Z(it,`/groups/${mt}/drive/root:/${$e}:/children`,y.j.fileLists.stores.fileLists,Xe)}),se=(it,mt,$e)=>_(void 0,void 0,void 0,function*(){return Z(it,`/me/drive/items/${mt}/children`,y.j.fileLists.stores.fileLists,$e)}),Qe=(it,mt,$e)=>_(void 0,void 0,void 0,function*(){return Z(it,`/me/drive/root:/${mt}:/children`,y.j.fileLists.stores.fileLists,$e)}),tt=(it,mt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return Z(it,`/sites/${mt}/drive/items/${$e}/children`,y.j.fileLists.stores.fileLists,Xe)}),ft=(it,mt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return Z(it,`/sites/${mt}/drive/root:/${$e}:/children`,y.j.fileLists.stores.fileLists,Xe)}),Tt=(it,mt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return Z(it,`/users/${mt}/drive/items/${$e}/children`,y.j.fileLists.stores.fileLists,Xe)}),ct=(it,mt,$e,Xe)=>_(void 0,void 0,void 0,function*(){return Z(it,`/users/${mt}/drive/root:/${$e}:/children`,y.j.fileLists.stores.fileLists,Xe)}),Te=(it,mt,$e)=>_(void 0,void 0,void 0,function*(){return Z(it,mt,y.j.fileLists.stores.fileLists,$e)}),ie=(it,mt)=>_(void 0,void 0,void 0,function*(){const $e=`/me/insights/${mt}`,Xe=y.j.fileLists.stores.insightfileLists,zt=a._.getCache(y.j.fileLists,Xe),tn=yield Ot(zt,Xe,$e);if(tn)return tn.files.map(Rn=>JSON.parse(Rn));let kn;try{kn=yield it.api($e).filter("resourceReference/type eq 'microsoft.graph.driveItem'").middlewareOptions((0,s.F)(I)).get()}catch{}const An=yield Ke(it,kn,I);return H()&&(yield zt.putValue($e,{files:An.map(Rn=>JSON.stringify(Rn))})),An||null}),ue=(it,mt,$e)=>_(void 0,void 0,void 0,function*(){let Xe,zt;"shared"===$e?(Xe="/me/insights/shared",zt=`((lastshared/sharedby/id eq '${mt}') and (resourceReference/type eq 'microsoft.graph.driveItem'))`):(Xe=`/users/${mt}/insights/${$e}`,zt="resourceReference/type eq 'microsoft.graph.driveItem'");const tn=`${Xe}?$filter=${zt}`,kn=y.j.fileLists.stores.insightfileLists,An=a._.getCache(y.j.fileLists,kn),Rn=yield Ot(An,kn,tn);if(Rn)return Rn.files.map(fi=>JSON.parse(fi));let vi;try{vi=yield it.api(Xe).filter(zt).middlewareOptions((0,s.F)(I)).get()}catch{}const mn=yield Ke(it,vi,I);return H()&&(yield An.putValue(Xe,{files:mn.map(fi=>JSON.stringify(fi))})),mn||null}),_e=(it,mt)=>_(void 0,void 0,void 0,function*(){if(!mt||0===mt.length)return[];const $e=it.createBatch(),Xe=[];let zt,tn;R()&&(zt=a._.getCache(y.j.files,y.j.files.stores.fileQueries));for(const kn of mt)R()&&(tn=yield zt.getValue(kn)),R()&&tn&&B()>Date.now()-tn.timeCached?Xe.push(JSON.parse(tn.file)):""!==kn&&$e.get(kn,kn,Q);try{const kn=yield $e.executeAll();for(const An of mt){const Rn=kn.get(An);Rn?.content&&(Xe.push(Rn.content),R()&&(yield zt.putValue(An,{file:JSON.stringify(Rn.content)})))}return Xe}catch{try{return Promise.all(mt.filter(An=>An&&""!==An).map(An=>_(void 0,void 0,void 0,function*(){const Rn=yield re(it,An);if(Rn)return R()&&(yield zt.putValue(An,{file:JSON.stringify(Rn)})),Rn})))}catch{return[]}}}),Ke=(it,mt,$e)=>_(void 0,void 0,void 0,function*(){if(!mt)return[];const Xe=mt.value,zt=it.createBatch(),tn=[];for(const kn of Xe){const An=kn.resourceReference.id;""!==An&&zt.get(An,An,$e)}try{const kn=yield zt.executeAll();for(const An of Xe){const Rn=kn.get(An.resourceReference.id);Rn?.content&&tn.push(Rn.content)}return tn}catch{try{return Promise.all(Xe.filter(An=>!!An.resourceReference.id).map(An=>_(void 0,void 0,void 0,function*(){return yield it.api(An.resourceReference.id).middlewareOptions((0,s.F)($e)).get()})))}catch{return[]}}}),we=(it,mt)=>_(void 0,void 0,void 0,function*(){return x.E.create(it,mt)}),Fe=(it,mt,$e)=>x.E.createFromValue(it,mt.map(Xe=>JSON.parse(Xe)),$e),at=(it,mt)=>_(void 0,void 0,void 0,function*(){if(R()){const $e=yield it.getValue(mt);if($e&&B()>Date.now()-$e.timeCached)return JSON.parse($e.file)}return null}),Ot=(it,mt,$e)=>_(void 0,void 0,void 0,function*(){if(it||(it=a._.getCache(y.j.fileLists,mt)),H()){const Xe=yield it.getValue($e);if(Xe&&(a._.config.fileLists.invalidationPeriod||a._.config.defaultInvalidationPeriod)>Date.now()-Xe.timeCached)return Xe}return null}),Ge=it=>_(void 0,void 0,void 0,function*(){const mt=it.nextLink;if(it.hasNext&&(yield it.next()),H()){const $e=a._.getCache(y.j.fileLists,y.j.fileLists.stores.fileLists),tn=/(graph.microsoft.com\/(v1.0|beta))(.*?)(?=\?)/gi.exec(mt)[3];yield $e.putValue(tn,{files:it.value.map(kn=>JSON.stringify(kn)),nextLink:mt})}}),fe=(it,mt,$e)=>_(void 0,void 0,void 0,function*(){try{const Xe=yield it.api(mt).responseType(E.yl.RAW).middlewareOptions((0,s.F)($e)).get();if(404===Xe.status)return{eTag:null,thumbnail:null};if(!Xe.ok)return null;return{eTag:Xe.headers.get("eTag"),thumbnail:yield(0,O.Sk)(yield Xe.blob())}}catch{return null}}),V=(it,mt)=>_(void 0,void 0,void 0,function*(){try{return(yield it.api(mt).middlewareOptions((0,s.F)(Q)).get())||null}catch{}return null}),ce=(it,mt,$e)=>_(void 0,void 0,void 0,function*(){try{const Xe={item:{"@microsoft.graph.conflictBehavior":$e||"rename"}};let zt;try{zt=yield it.api(mt).middlewareOptions((0,s.F)(X)).post(JSON.stringify(Xe))}catch{}return zt||null}catch{return null}}),xe=(it,mt,$e,Xe,zt)=>_(void 0,void 0,void 0,function*(){try{const tn={"Content-Length":$e,"Content-Range":Xe};let kn;try{kn=yield it.client.api(mt).middlewareOptions((0,s.F)(X)).headers(tn).put(zt)}catch{}return kn||null}catch{return null}}),Ve=(it,mt,$e)=>_(void 0,void 0,void 0,function*(){try{let Xe;try{Xe=yield it.client.api(mt).middlewareOptions((0,s.F)(X)).put($e)}catch{}return Xe||null}catch{return null}}),Ct=(it,mt)=>_(void 0,void 0,void 0,function*(){try{yield it.client.api(mt).middlewareOptions((0,s.F)(X)).delete()}catch{return null}})},6692:(rt,pe,h)=>{h.d(pe,{K3:()=>oe,cB:()=>re,iu:()=>ve,lq:()=>X,ox:()=>de,we:()=>R,ys:()=>b});var a=h(2404),s=h(4327),x=h(3173),y=h(5889),E=function(z,$,Y,te){return new(Y||(Y=Promise))(function(le,G){function L(Z){try{ee(te.next(Z))}catch(ge){G(ge)}}function P(Z){try{ee(te.throw(Z))}catch(ge){G(ge)}}function ee(Z){Z.done?le(Z.value):function j(le){return le instanceof Y?le:new Y(function(G){G(le)})}(Z.value).then(L,P)}ee((te=te.apply(z,$||[])).next())})};const O=["any","person","group"],b=(z,$="any")=>(z=>"string"==typeof z&&O.includes(z))(z)?z:$,S=["any","user","contact"],R=(z,$="any")=>(z=>"string"==typeof z&&S.includes(z))(z)?z:$,W=()=>a._.config.people.invalidationPeriod||a._.config.defaultInvalidationPeriod,H=()=>a._.config.people.isEnabled&&a._.config.isEnabled,Q=["People.Read","People.Read.All"],I=["Contacts.Read","Contacts.ReadWrite"],X=(z,$,Y=10,te="any",j="")=>E(void 0,void 0,void 0,function*(){const le=`${$}:${Y}:${te}`;let G;if(H()){G=a._.getCache(y.j.people,y.j.people.stores.peopleQuery);const ge=H()?yield G.getValue(le):null;if(ge&&W()>Date.now()-ge.timeCached)return ge.results.map(Be=>JSON.parse(Be))}let P,L="personType/class eq 'Person'";"any"!==te&&(L+="user"===te?"and personType/subclass eq 'OrganizationUser'":"and (personType/subclass eq 'ImplicitContact' or personType/subclass eq 'PersonalContact')"),""!==j&&(L+=` and  ${j}`);try{let ee=z.api("/me/people").search('"'+$+'"').top(Y).filter(L).middlewareOptions((0,s.F)(Q));if("contact"!==te&&(ee=ee.header("X-PeopleQuery-QuerySources","Mailbox,Directory")),P=yield ee.get(),H()&&P){const Z={maxResults:Y,results:null};Z.results=P.value.map(ge=>JSON.stringify(ge)),yield G.putValue(le,Z)}}catch{}return P?.value}),re=(z,$="any",Y="",te=10)=>E(void 0,void 0,void 0,function*(){let j;const le=`${Y||`*:${$}`}:${te}`;if(H()){j=a._.getCache(y.j.people,y.j.people.stores.peopleQuery);const ee=yield j.getValue(le);if(ee&&W()>Date.now()-ee.timeCached)return ee.results.map(Z=>JSON.parse(Z))}let P,L="personType/class eq 'Person'";"any"!==$&&(L+="user"===$?"and personType/subclass eq 'OrganizationUser'":"and (personType/subclass eq 'ImplicitContact' or personType/subclass eq 'PersonalContact')"),Y&&(L+=` and ${Y}`);try{let ee=z.api("/me/people").middlewareOptions((0,s.F)(Q)).top(te).filter(L);"contact"!==$&&(ee=ee.header("X-PeopleQuery-QuerySources","Mailbox,Directory")),P=yield ee.get(),H()&&P&&(yield j.putValue(le,{maxResults:10,results:P.value.map(Z=>JSON.stringify(Z))}))}catch{}return P?P.value:null}),ve=z=>{var $,Y;const te=z,le=z;return z.mail?(0,x.aX)(z.mail):null!==($=te.scoredEmailAddresses)&&void 0!==$&&$.length?(0,x.aX)(te.scoredEmailAddresses[0].address):null!==(Y=le.emailAddresses)&&void 0!==Y&&Y.length?(0,x.aX)(le.emailAddresses[0].address):null},oe=(z,$)=>E(void 0,void 0,void 0,function*(){let Y;if(H()){Y=a._.getCache(y.j.people,y.j.people.stores.contacts);const le=yield Y.getValue($);if(le&&W()>Date.now()-le.timeCached)return JSON.parse(le.person)}const te=`${$.replace(/#/g,"%2523")}`,j=yield z.api("/me/contacts").filter(`emailAddresses/any(a:a/address eq '${te}')`).middlewareOptions((0,s.F)(I)).get();return H()&&j&&(yield Y.putValue($,{person:JSON.stringify(j.value)})),j?j.value:null}),de=(z,$,Y,te)=>E(void 0,void 0,void 0,function*(){var j;let le;const G=`${$}${Y}`;if(H()){le=a._.getCache(y.j.people,y.j.people.stores.peopleQuery);const ee=yield le.getValue(G);if(ee&&W()>Date.now()-ee.timeCached)return ee.results.map(Z=>JSON.parse(Z))}let L=z.api(Y).version($);te?.length&&(L=L.middlewareOptions((0,s.F)(te)));let P=yield L.get();if(P&&Array.isArray(P.value)&&P["@odata.nextLink"]){let ee=P;for(;ee?.["@odata.nextLink"];){const ge=ee["@odata.nextLink"].split($)[1];ee=yield z.api(ge).version($).get(),null!==(j=ee?.value)&&void 0!==j&&j.length&&(ee.value=P.value.concat(ee.value),P=ee)}}if(H()&&P){const ee={results:null};ee.results=Array.isArray(P.value)?P.value.map(Z=>JSON.stringify(Z)):[JSON.stringify(P)],yield le.putValue(G,ee)}return P?.value})},4130:(rt,pe,h)=>{h.d(pe,{B2:()=>R,HJ:()=>B,aC:()=>S,e_:()=>H,f8:()=>re,pc:()=>oe,qr:()=>W,r$:()=>de,t5:()=>ve});var a=h(2404),s=h(4327),x=h(2657),y=h(3173),E=h(5889),O=h(6692),_=h(5527),b=function(z,$,Y,te){return new(Y||(Y=Promise))(function(le,G){function L(Z){try{ee(te.next(Z))}catch(ge){G(ge)}}function P(Z){try{ee(te.throw(Z))}catch(ge){G(ge)}}function ee(Z){Z.done?le(Z.value):function j(le){return le instanceof Y?le:new Y(function(G){G(le)})}(Z.value).then(L,P)}ee((te=te.apply(z,$||[])).next())})};const S=()=>a._.config.photos.invalidationPeriod||a._.config.defaultInvalidationPeriod,B=()=>a._.config.photos.isEnabled&&a._.config.isEnabled,R=["User.ReadBasic.All","User.Read.All","User.ReadWrite.All"],W=["User.Read","User.ReadWrite",...R],H=(z,$,Y)=>b(void 0,void 0,void 0,function*(){try{const te=yield z.api(`${$}/photo/$value`).responseType(x.yl.RAW).middlewareOptions((0,s.F)(Y)).get();return 404===te.status?{eTag:null,photo:null}:te.ok?{eTag:te["@odata.mediaEtag"],photo:yield(0,y.Sk)(yield te.blob())}:null}catch{return null}}),Q=(z,$)=>b(void 0,void 0,void 0,function*(){let Y,te;return B()&&(Y=a._.getCache(E.j.photos,E.j.photos.stores.contacts),te=yield Y.getValue($),te&&S()>Date.now()-te.timeCached)?te.photo:(te=yield H(z,`me/contacts/${$}`,["Contacts.Read","Contacts.ReadWrite"]),B()&&te&&(yield Y.putValue($,te)),te?te.photo:null)}),I=(z,$)=>b(void 0,void 0,void 0,function*(){let Y,te;if(B()){if(Y=a._.getCache(E.j.photos,E.j.photos.stores.users),te=yield Y.getValue($),te&&S()>Date.now()-te.timeCached)return te.photo;if(te)try{const j=yield z.api(`users/${$}/photo`).get();j&&(j["@odata.mediaEtag"]!==te.eTag||null===j["@odata.mediaEtag"]&&null===te.eTag)&&(te=null)}catch{return null}}return te=te||(yield H(z,`users/${$}`,R)),B()&&te&&(yield Y.putValue($,te)),te?te.photo:null}),re=(z,$,Y=!0)=>b(void 0,void 0,void 0,function*(){if("personType"in $&&"OrganizationUser"!==$.personType.subclass){if("PersonalContact"===$.personType.subclass&&Y){const j=(0,O.iu)($),le=yield(0,O.K3)(z,j);if(le?.length&&le[0].id)return yield Q(z,le[0].id)}return null}if($.userPrincipalName||$.id){const j=$.userPrincipalName||$.id;return yield I(z,j)}if($.id){const j=yield I(z,$.id);if(j)return j}const te=(0,O.iu)($);if(te){const j=yield(0,_.Ei)(z,te,1);if(j?.length)return yield I(z,j[0].id);if(Y){const le=yield(0,O.K3)(z,te);if(le?.length)return yield Q(z,le[0].id)}}return null}),ve=(z,$)=>b(void 0,void 0,void 0,function*(){let Y,te;const j=$.id;if(B()){if(te=a._.getCache(E.j.photos,E.j.photos.stores.groups),Y=yield te.getValue(j),Y&&S()>Date.now()-Y.timeCached)return Y.photo;if(Y)try{const G=yield z.api(`groups/${j}/photo`).get();G&&(G["@odata.mediaEtag"]!==Y.eTag||null===G["@odata.mediaEtag"]&&null===Y.eTag)&&(Y=null)}catch{return null}}return Y=Y||(yield H(z,`groups/${j}`,["Group.Read.All","Group.ReadWrite.All"])),B()&&Y&&(yield te.putValue(j,Y)),Y?Y.photo:null}),oe=(z,$)=>b(void 0,void 0,void 0,function*(){return yield a._.getCache(E.j.photos,$).getValue(z)}),de=(z,$,Y)=>b(void 0,void 0,void 0,function*(){yield a._.getCache(E.j.photos,$).putValue(z,Y)})},1786:(rt,pe,h)=>{h.d(pe,{R:()=>_,u:()=>b});var a=h(2404),s=h(4327),x=h(5889),y=function(S,B,R,W){return new(R||(R=Promise))(function(Q,I){function X(oe){try{ve(W.next(oe))}catch(de){I(de)}}function re(oe){try{ve(W.throw(oe))}catch(de){I(de)}}function ve(oe){oe.done?Q(oe.value):function H(Q){return Q instanceof R?Q:new R(function(I){I(Q)})}(oe.value).then(X,re)}ve((W=W.apply(S,B||[])).next())})};const E=()=>a._.config.presence.invalidationPeriod||a._.config.defaultInvalidationPeriod,O=()=>a._.config.presence.isEnabled&&a._.config.isEnabled,_=(S,B)=>y(void 0,void 0,void 0,function*(){let R;if(O()){R=a._.getCache(x.j.presence,x.j.presence.stores.presence);const I=yield R.getValue(B||"me");if(I&&E()>Date.now()-I.timeCached)return JSON.parse(I.presence)}const W=B?["presence.read.all"]:["presence.read","presence.read.all"],H=B?`/users/${B}/presence`:"/me/presence",Q=yield S.api(H).middlewareOptions((0,s.F)(W)).get();return O()&&(yield R.putValue(B||"me",{presence:JSON.stringify(Q)})),Q}),b=(S,B)=>y(void 0,void 0,void 0,function*(){if(!B||0===B.length)return{};const R={},W=[],H=["presence.read.all"];let Q;O()&&(Q=a._.getCache(x.j.presence,x.j.presence.stores.presence));for(const I of B)if(I?.id){const X=I.id;let re;R[X]=null,O()&&(re=yield Q.getValue(X)),O()&&re&&E()>Date.now()-re.timeCached?R[X]=JSON.parse(re.presence):W.push(X)}try{if(W.length>0){const I=yield S.api("/communications/getPresencesByUserId").middlewareOptions((0,s.F)(H)).post({ids:W});for(const X of I.value)R[X.id]=X,O()&&(yield Q.putValue(X.id,{presence:JSON.stringify(X)}))}return R}catch{try{const X=yield Promise.all(B.filter(re=>re?.id&&!R[re.id]&&"personType"in re&&"OrganizationUser"===re.personType.subclass).map(re=>_(S,re.id)));for(const re of X)R[re.id]=re;return R}catch{return null}}})},5527:(rt,pe,h)=>{h.d(pe,{$q:()=>H,Ei:()=>I,PD:()=>O,cA:()=>_,fp:()=>re,jp:()=>B,lo:()=>b,sb:()=>X,vW:()=>R,vl:()=>Q,wz:()=>W});var a=h(2404),s=h(4327),x=h(5889),y=h(6692),E=function(ve,oe,de,z){return new(de||(de=Promise))(function(Y,te){function j(L){try{G(z.next(L))}catch(P){te(P)}}function le(L){try{G(z.throw(L))}catch(P){te(P)}}function G(L){L.done?Y(L.value):function $(Y){return Y instanceof de?Y:new de(function(te){te(Y)})}(L.value).then(j,le)}G((z=z.apply(ve,oe||[])).next())})};const O=()=>a._.config.users.invalidationPeriod||a._.config.defaultInvalidationPeriod,_=()=>a._.config.users.isEnabled&&a._.config.isEnabled,b=(ve,oe="",de=10)=>E(void 0,void 0,void 0,function*(){const z=["User.ReadBasic.All","User.Read.All","Directory.Read.All","User.ReadWrite.All","Directory.ReadWrite.All"];let Y;const te=`${""===oe?"*":oe}:${de}`,j={maxResults:de,results:null};if(_()){Y=a._.getCache(x.j.users,x.j.users.stores.userFilters);const G=yield Y.getValue(te);if(G&&O()>Date.now()-G.timeCached)return G.results.map(L=>JSON.parse(L))}const le=ve.api("/users").top(de);oe&&le.filter(oe).header("ConsistencyLevel","eventual").count(!0);try{const G=yield le.middlewareOptions((0,s.F)(z)).get();return _()&&G&&(j.results=G.value.map(L=>JSON.stringify(L)),yield Y.putValue(oe,j)),G.value}catch{}}),S=["User.Read","User.ReadWrite"],B=(ve,oe)=>E(void 0,void 0,void 0,function*(){let de;if(_()){de=a._.getCache(x.j.users,x.j.users.stores.users);const Y=yield de.getValue("me");if(Y&&O()>Date.now()-Y.timeCached){const te=JSON.parse(Y.user),j=oe?oe.filter(le=>!Object.keys(te).includes(le)):null;if(!j||j.length<=1)return te}}let z="me";oe&&(z=z+"?$select="+oe.toString());const $=yield ve.api(z).middlewareOptions((0,s.F)(S)).get();return _()&&(yield de.putValue("me",{user:JSON.stringify($)})),$}),R=["User.ReadBasic.All","User.Read.All","Directory.Read.All","User.ReadWrite.All","Directory.ReadWrite.All"],W=(ve,oe,de)=>E(void 0,void 0,void 0,function*(){let z;if(_()){z=a._.getCache(x.j.users,x.j.users.stores.users);const te=yield z.getValue(oe);if(te&&O()>Date.now()-te.timeCached){const j=te.user?JSON.parse(te.user):null,le=de&&j?de.filter(G=>!Object.keys(j).includes(G)):null;if(!le||le.length<=1)return j}}let Y,$=`/users/${oe}`;de&&($=$+"?$select="+de.toString());try{Y=yield ve.api($).middlewareOptions((0,s.F)(R)).get()}catch{}return _()&&(yield z.putValue(oe,{user:JSON.stringify(Y)})),Y}),H=(ve,oe,de="",z="",$)=>E(void 0,void 0,void 0,function*(){if(!oe||0===oe.length)return[];const Y=ve.createBatch(),te={},j={},le=[];let G;de=de.toLowerCase(),_()&&(G=a._.getCache(x.j.users,x.j.users.stores.users));for(const L of oe){te[L]=null;let ee,Z,P=`/users/${L}`;if(_()&&(Z=yield G.getValue(L)),Z?.user&&O()>Date.now()-Z.timeCached)if(ee=JSON.parse(Z?.user),de){if(ee){const ge=ee.displayName;ge?.toLowerCase().includes(de)&&(j[L]=ee)}}else ee?te[L]=ee:(Y.get(L,P,R),le.push(L));else""!==L&&("me"===L?te[L]=yield B(ve):(P=`/users/${L}`,z&&(P+=`${P}?$filter=${z}&$count=true`),Y.get(L,P,R,z?{ConsistencyLevel:"eventual"}:{}),le.push(L)))}try{if(Y.hasRequests){const L=yield Y.executeAll();for(const P of oe){const ee=L.get(P);if(ee?.content){const Z=ee.content;de?(Z?.displayName.toLowerCase()||"").includes(de)&&(j[P]=Z):te[P]=Z,_()&&(yield G.putValue(P,{user:JSON.stringify(Z)}))}else{const Z=$.find(ge=>Object.values(ge).includes(P));Z&&(te[P]=Z)}}}return de&&Object.keys(j).length?Promise.all(Object.values(j)):Promise.all(Object.values(te))}catch{try{return oe.filter(P=>le.includes(P)).forEach(P=>{te[P]=W(ve,P)}),_()&&(yield Promise.all(oe.filter(P=>le.includes(P)).map(P=>E(void 0,void 0,void 0,function*(){return yield G.putValue(P,{user:JSON.stringify(yield te[P])})})))),Promise.all(Object.values(te))}catch{return[]}}}),Q=(ve,oe,de)=>E(void 0,void 0,void 0,function*(){var z;const $=["People.Read","People.Read.All"];if(!oe||0===oe.length)return[];const Y=ve.createBatch(),te=[];let j,le;_()&&(le=a._.getCache(x.j.users,x.j.users.stores.usersQuery));for(const G of oe)if(_()&&(j=yield le.getValue(G)),_()&&j?.results[0]&&O()>Date.now()-j.timeCached){const L=JSON.parse(j.results[0]);te.push(L)}else Y.get(G,`/me/people?$search="${G}"`,$,{"X-PeopleQuery-QuerySources":"Mailbox,Directory"});if(Y.hasRequests)try{const G=yield Y.executeAll();for(const L of oe){const P=G.get(L);if(null!==(z=P?.content)&&void 0!==z&&z.value&&P.content.value.length>0)te.push(P.content.value[0]),_()&&(yield le.putValue(L,{maxResults:1,results:[JSON.stringify(P.content.value[0])]}));else{const ee=de.find(Z=>Object.values(Z).includes(L));ee&&te.push(ee)}}return te}catch{try{return Promise.all(oe.filter(L=>L&&""!==L).map(L=>E(void 0,void 0,void 0,function*(){const P=yield(0,y.lq)(ve,L,1);if(P?.length)return _()&&(yield le.putValue(L,{maxResults:1,results:[JSON.stringify(P[0])]})),P[0]})))}catch{return[]}}return te}),I=(ve,oe,de=10,z="")=>E(void 0,void 0,void 0,function*(){const $=R,Y={maxResults:de,results:null},te=`${oe}:${de}:${z}`;let j;if(_()){j=a._.getCache(x.j.users,x.j.users.stores.usersQuery);const P=yield j.getValue(te);if(P&&O()>Date.now()-P.timeCached)return P.results.map(ee=>JSON.parse(ee))}const le=`${oe.replace(/#/g,"%2523")}`,G=ve.api("users").search(`"displayName:${le}" OR "mail:${le}"`).header("ConsistencyLevel","eventual").count(!0);let L;""!==z&&G.filter(z);try{L=yield G.top(de).middlewareOptions((0,s.F)($)).get()}catch{}return _()&&L&&(Y.results=L.value.map(P=>JSON.stringify(P)),yield j.putValue(oe,Y)),L?L.value:null}),X=(ve,oe,de,z=10,$="person",Y=!1,te="",j="")=>E(void 0,void 0,void 0,function*(){const G={maxResults:z,results:null};let L;const P=`${de||"*"}:${oe||"*"}:${z}:${$}:${Y}:${te}`;if(_()){L=a._.getCache(x.j.users,x.j.users.stores.usersQuery);const Le=yield L.getValue(P);if(Le&&O()>Date.now()-Le.timeCached)return Le.results.map(et=>JSON.parse(et))}let ee="";oe&&(ee=`startswith(displayName,'${oe}') or startswith(givenName,'${oe}') or startswith(surname,'${oe}') or startswith(mail,'${oe}') or startswith(userPrincipalName,'${oe}')`);let Z=`/groups/${de}/${Y?"transitiveMembers":"members"}`;"person"===$?Z+="/microsoft.graph.user":"group"===$&&(Z+="/microsoft.graph.group",oe&&(ee=`startswith(displayName,'${oe}') or startswith(mail,'${oe}')`)),te&&(ee+=oe?` and ${te}`:te),j&&(ee+=oe?` and ${j}`:j);const ge=ve.api(Z).top(z).filter(ee);te&&ge.header("ConsistencyLevel","eventual").count(!0);const Be=yield ge.middlewareOptions((0,s.F)(["GroupMember.Read.All","Group.Read.All","Directory.Read.All","GroupMember.ReadWrite.All","Group.ReadWrite.All"])).get();return _()&&Be&&(G.results=Be.value.map(Le=>JSON.stringify(Le)),yield L.putValue(P,G)),Be?Be.value:null}),re=(ve,oe,de,z=10,$="person",Y=!1,te="")=>E(void 0,void 0,void 0,function*(){const j=[];for(const le of de)try{const G=yield X(ve,oe,le,z,$,Y,te);j.push(...G)}catch{continue}return j})},2898:(rt,pe,h)=>{h.d(pe,{_:()=>b});var a=h(2404),s=h(4327),x=h(4130),y=h(5527),E=h(5889),O=h(6199);const b=(S,B,R)=>function(S,B,R,W){return new(R||(R=Promise))(function(Q,I){function X(oe){try{ve(W.next(oe))}catch(de){I(de)}}function re(oe){try{ve(W.throw(oe))}catch(de){I(de)}}function ve(oe){oe.done?Q(oe.value):function H(Q){return Q instanceof R?Q:new R(function(I){I(Q)})}(oe.value).then(X,re)}ve((W=W.apply(S,B||[])).next())})}(void 0,void 0,void 0,function*(){const W=["User.ReadBasic.All","User.Read.All","Directory.Read.All","User.ReadWrite.All","Directory.ReadWrite.All"],H=["User.Read","User.ReadWrite",...W],Q=B?W:H,I=B?x.B2:x.qr;let X,ve,oe,re=null;const de=B?`users/${B}`:"me",z=de+(R?`?$select=${R.toString()}`:"");if((0,y.cA)()&&(oe=yield a._.getCache(E.j.users,E.j.users.stores.users).getValue(B||"me"),oe&&(0,y.PD)()>Date.now()-oe.timeCached?(re=oe.user?JSON.parse(oe.user):null,null!==re&&R&&R.filter(te=>!Object.keys(re).includes(te)).length>=1&&(re=null,oe=null)):oe=null),(0,x.HJ)())if(ve=yield(0,x.pc)(B||"me",E.j.photos.stores.users),ve&&(0,x.aC)()>Date.now()-ve.timeCached)X=ve.photo;else if(ve)try{const $=yield S.api(`${de}/photo`).get();$?.["@odata.mediaEtag"]&&$["@odata.mediaEtag"]===ve.eTag?(yield(0,x.r$)(B||"me",E.j.photos.stores.users,ve),X=ve.photo):ve=null}catch($){(0,O.Z)($)&&("ErrorItemNotFound"===$.code||"ImageNotFound"===$.code)&&(yield(0,x.r$)(B||"me",E.j.photos.stores.users,{eTag:null,photo:null}))}if(ve||oe)if(ve){if(!oe)try{const $=yield S.api(z).middlewareOptions((0,s.F)(Q)).get();$&&((0,y.cA)()&&(yield a._.getCache(E.j.users,E.j.users.stores.users).putValue(B||"me",{user:JSON.stringify($)})),re=$)}catch{}}else try{const $=yield(0,x.e_)(S,de,I);$&&((0,x.HJ)()&&(yield(0,x.r$)(B||"me",E.j.photos.stores.users,{eTag:$.eTag,photo:$.photo})),X=$.photo)}catch{}else{let $;const Y=S.createBatch();B?(Y.get("user",`/users/${B}${R?"?$select="+R.toString():""}`,Q),Y.get("photo",`users/${B}/photo/$value`,I)):(Y.get("user","me",Q),Y.get("photo","me/photo/$value",I));const te=yield Y.executeAll(),j=te.get("photo");j&&($=j.headers.ETag,X=j.content);const le=te.get("user");le&&(re=le.content),(0,y.cA)()&&(yield a._.getCache(E.j.users,E.j.users.stores.users).putValue(B||"me",{user:JSON.stringify(re)})),(0,x.HJ)()&&(yield(0,x.r$)(B||"me",E.j.photos.stores.users,{eTag:$,photo:X}))}return re&&(re.personImage=X),re})},6199:(rt,pe,h)=>{h.d(pe,{Z:()=>a});const a=s=>s.statusCode&&"code"in s&&"body"in s&&s.date&&"message"in s&&"name"in s&&"requestId"in s},8360:(rt,pe,h)=>{h.d(pe,{E:()=>x});const a=["image","oneline","twolines","threelines","fourlines"],x=(y,E="twolines")=>(y=>"string"==typeof y&&a.includes(y))(y)?y:E},3601:(rt,pe,h)=>{h.d(pe,{E:()=>re});var a=h(5204),s=h(4632),x=h(2618),y=h(1859),E=h(2146);const O=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),_=new Map,b=new Map;let S=null;const B=x.DI.createInterface(ve=>ve.cachedCallback(oe=>(null===S&&(S=new H(null,oe)),S))),R=Object.freeze({tagFor:ve=>b.get(ve),responsibleFor:ve=>ve.$$designSystem$$||x.DI.findResponsibleContainer(ve).get(B),getOrCreate(ve){if(!ve)return null===S&&(S=x.DI.getOrCreateDOMContainer().get(B)),S;const oe=ve.$$designSystem$$;if(oe)return oe;const de=x.DI.getOrCreateDOMContainer(ve);if(de.has(B,!1))return de.get(B);{const z=new H(ve,de);return de.register(x.cH.instance(B,z)),z}}});class H{constructor(oe,de){this.owner=oe,this.container=de,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>O.definitionCallbackOnly,null!==oe&&(oe.$$designSystem$$=this)}withPrefix(oe){return this.prefix=oe,this}withShadowRootMode(oe){return this.shadowRootMode=oe,this}withElementDisambiguation(oe){return this.disambiguate=oe,this}withDesignTokenRoot(oe){return this.designTokenRoot=oe,this}register(...oe){const de=this.container,z=[],$=this.disambiguate,Y=this.shadowRootMode,te={elementPrefix:this.prefix,tryDefineElement(j,le,G){const L=function W(ve,oe,de){return"string"==typeof ve?{name:ve,type:oe,callback:de}:ve}(j,le,G),{name:P,callback:ee,baseClass:Z}=L;let{type:ge}=L,Be=P,Le=_.get(Be),et=!0;for(;Le;){const Pe=$(Be,ge,Le);switch(Pe){case O.ignoreDuplicate:return;case O.definitionCallbackOnly:et=!1,Le=void 0;break;default:Be=Pe,Le=_.get(Be)}}et&&((b.has(ge)||ge===s.g)&&(ge=class extends ge{}),_.set(Be,ge),b.set(ge,Be),Z&&b.set(Z,Be)),z.push(new Q(de,Be,ge,Y,ee,et))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&y.G.registerRoot(this.designTokenRoot)),de.registerWithContext(te,...oe);for(const j of z)j.callback(j),j.willDefine&&null!==j.definition&&j.definition.define();return this}}class Q{constructor(oe,de,z,$,Y,te){this.container=oe,this.name=de,this.type=z,this.shadowRootMode=$,this.callback=Y,this.willDefine=te,this.definition=null}definePresentation(oe){E.E.define(this.name,oe,this.container)}defineElement(oe){this.definition=new a.I(this.type,Object.assign(Object.assign({},oe),{name:this.name}))}tagFor(oe){return R.tagFor(oe)}}const X=function I(ve){return R.getOrCreate(ve).withPrefix("fluent")}(),re=(...ve)=>{if(ve?.length)for(const oe of ve)X.register(oe())}},2710:(rt,pe,h)=>{h.d(pe,{A:()=>s,r:()=>x});var a=h(8324),s=function(y){return y[y.ArrowDown=0]="ArrowDown",y[y.TeamSeparator=1]="TeamSeparator",y[y.Search=2]="Search",y[y.SkypeArrow=3]="SkypeArrow",y[y.SmallEmail=4]="SmallEmail",y[y.SmallEmailHovered=5]="SmallEmailHovered",y[y.SmallChat=6]="SmallChat",y[y.SmallChatHovered=7]="SmallChatHovered",y[y.Video=8]="Video",y[y.VideoHovered=9]="VideoHovered",y[y.ExpandDown=10]="ExpandDown",y[y.Overview=11]="Overview",y[y.Send=12]="Send",y[y.Contact=13]="Contact",y[y.Copy=14]="Copy",y[y.Phone=15]="Phone",y[y.CellPhone=16]="CellPhone",y[y.Chat=17]="Chat",y[y.Call=18]="Call",y[y.CallHovered=19]="CallHovered",y[y.Confirmation=20]="Confirmation",y[y.Department=21]="Department",y[y.Dot=22]="Dot",y[y.Email=23]="Email",y[y.OfficeLocation=24]="OfficeLocation",y[y.Person=25]="Person",y[y.Messages=26]="Messages",y[y.Organization=27]="Organization",y[y.ExpandRight=28]="ExpandRight",y[y.Profile=29]="Profile",y[y.Birthday=30]="Birthday",y[y.File=31]="File",y[y.Files=32]="Files",y[y.Back=33]="Back",y[y.Close=34]="Close",y[y.Upload=35]="Upload",y[y.FileCloud=36]="FileCloud",y[y.DragFile=37]="DragFile",y[y.Cancel=38]="Cancel",y[y.CheckMark=39]="CheckMark",y[y.Radio=40]="Radio",y[y.Success=41]="Success",y[y.Fail=42]="Fail",y[y.SelectAccount=43]="SelectAccount",y[y.News=44]="News",y[y.DoubleBookmark=45]="DoubleBookmark",y[y.ChevronLeft=46]="ChevronLeft",y[y.ChevronRight=47]="ChevronRight",y[y.Event=48]="Event",y[y.BookOpen=49]="BookOpen",y[y.FileOuter=50]="FileOuter",y[y.BookQuestion=51]="BookQuestion",y[y.Globe=52]="Globe",y[y.Delete=53]="Delete",y[y.Add=54]="Add",y[y.Calendar=55]="Calendar",y[y.Planner=56]="Planner",y[y.Milestone=57]="Milestone",y[y.PersonAdd=58]="PersonAdd",y[y.PresenceAvailable=59]="PresenceAvailable",y[y.PresenceOofAvailable=60]="PresenceOofAvailable",y[y.PresenceBusy=61]="PresenceBusy",y[y.PresenceOofBusy=62]="PresenceOofBusy",y[y.PresenceDnd=63]="PresenceDnd",y[y.PresenceOofDnd=64]="PresenceOofDnd",y[y.PresenceAway=65]="PresenceAway",y[y.PresenceOofAway=66]="PresenceOofAway",y[y.PresenceOffline=67]="PresenceOffline",y[y.PresenceStatusUnknown=68]="PresenceStatusUnknown",y}(s||{});const x=(y,E)=>{switch(y){case s.ArrowDown:return a.qy`
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L2.46447 5.46447H6H9.53553L6 9Z" />
        </svg>
      `;case s.TeamSeparator:return a.qy`
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.70711 5L1.49999 9.20711L0.792886 8.50001L4.29289 5L0.792887 1.49999L1.49999 0.792885L5.70711 5Z"
            fill=${E}
          />
        </svg>
      `;case s.Search:return a.qy`
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.30887 8.01596C6.53903 8.63179 5.56252 9.00004 4.5 9.00004C2.01472 9.00004 0 6.98531 0 4.50002C0 2.01473 2.01472 0 4.5 0C6.98528 0 9 2.01473 9 4.50002C9 5.56252 8.63177 6.53901 8.01597 7.30885L11.8536 11.1464C12.0488 11.3417 12.0488 11.6583 11.8536 11.8536C11.6583 12.0488 11.3417 12.0488 11.1464 11.8536L7.30887 8.01596ZM8 4.50002C8 2.56701 6.433 1 4.5 1C2.567 1 1 2.56701 1 4.50002C1 6.43302 2.567 8.00003 4.5 8.00003C6.433 8.00003 8 6.43302 8 4.50002Z" fill="currentColor"/>
        </svg>`;case s.SkypeArrow:return a.qy`
        <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.95184 0.480534C4.23385 0.10452 4.70926 -0.0724722 5.1685 0.0275755C5.62775 0.127623 5.98645 0.486329 6.0865 0.945575C6.18655 1.40482 6.00956 1.88023 5.63354 2.16224L4.07196 3.72623H10.7988C11.4622 3.72623 12 4.26403 12 4.92744C12 5.59086 11.4622 6.12866 10.7988 6.12866H4.07196L5.63114 7.68784C6.0955 8.15225 6.0955 8.90515 5.63114 9.36955C5.51655 9.48381 5.38119 9.57514 5.23234 9.63862C5.09341 9.69857 4.94399 9.73042 4.79269 9.73232C4.63498 9.73233 4.4789 9.70046 4.33382 9.63862C4.18765 9.57669 4.05593 9.48507 3.94703 9.36955L0.343377 5.7659C-0.114459 5.29881 -0.114459 4.55128 0.343377 4.08419L3.95184 0.480534Z"
            fill="#B4009E"
          />
        </svg>
      `;case s.SmallEmail:return a.qy`
        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="filled" d="M16 3.373V10.5C16 11.8807 14.8807 13 13.5 13H2.5C1.11929 13 -7.62939e-05 11.8807 -7.62939e-05 10.5V3.373L7.74649 7.93097C7.90297 8.02301 8.09704 8.02301 8.25351 7.93097L16 3.373ZM13.5 0C14.7871 0 15.847 0.972604 15.9848 2.22293L8 6.91991L0.0151832 2.22293C0.15304 0.972604 1.21294 0 2.5 0H13.5Z" fill="currentColor"/>
          <path class="regular" d="M13.608 0.833496C14.9887 0.833496 16.108 1.95278 16.108 3.3335V11.3335C16.108 12.7142 14.9887 13.8335 13.608 13.8335H2.60803C1.22732 13.8335 0.108032 12.7142 0.108032 11.3335V3.3335C0.108032 1.95278 1.22732 0.833496 2.60803 0.833496H13.608ZM15.108 4.7945L8.36154 8.76446C8.23115 8.84117 8.07464 8.85395 7.93554 8.80281L7.85452 8.76446L1.10803 4.7965V11.3335C1.10803 12.1619 1.77961 12.8335 2.60803 12.8335H13.608C14.4365 12.8335 15.108 12.1619 15.108 11.3335V4.7945ZM13.608 1.8335H2.60803C1.77961 1.8335 1.10803 2.50507 1.10803 3.3335V3.6355L8.10803 7.75341L15.108 3.6345V3.3335C15.108 2.50507 14.4365 1.8335 13.608 1.8335Z" fill="currentColor"/>
        </svg>
      `;case s.SmallChat:return a.qy`
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="filled" d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C6.72679 16 5.49591 15.7018 4.38669 15.1393L4.266 15.075L0.621091 15.9851C0.311269 16.0625 0.0262241 15.8369 0.00130987 15.5438L0.00114131 15.4624L0.0149329 15.3787L0.925 11.735L0.86169 11.6153C0.406602 10.7186 0.124331 9.74223 0.0327466 8.72826L0.00737596 8.34634L0 8C0 3.58172 3.58172 0 8 0ZM8.5 9H5.5L5.41012 9.00806C5.17688 9.05039 5 9.25454 5 9.5C5 9.74546 5.17688 9.94961 5.41012 9.99194L5.5 10H8.5L8.58988 9.99194C8.82312 9.94961 9 9.74546 9 9.5C9 9.25454 8.82312 9.05039 8.58988 9.00806L8.5 9ZM10.5 6H5.5L5.41012 6.00806C5.17688 6.05039 5 6.25454 5 6.5C5 6.74546 5.17688 6.94961 5.41012 6.99194L5.5 7H10.5L10.5899 6.99194C10.8231 6.94961 11 6.74546 11 6.5C11 6.25454 10.8231 6.05039 10.5899 6.00806L10.5 6Z" fill="currentColor"/>
          <path class="regular" d="M8.38599 0.833496C12.8043 0.833496 16.386 4.41522 16.386 8.8335C16.386 13.2518 12.8043 16.8335 8.38599 16.8335C7.11277 16.8335 5.8819 16.5353 4.77267 15.9728L4.65199 15.9085L1.00708 16.8186C0.697255 16.8959 0.41221 16.6704 0.387296 16.3773L0.387128 16.2959L0.400919 16.2122L1.31099 12.5685L1.24768 12.4488C0.792589 11.5521 0.510317 10.5757 0.418733 9.56176L0.393362 9.17984L0.385986 8.8335C0.385986 4.41522 3.96771 0.833496 8.38599 0.833496ZM8.38599 1.8335C4.51999 1.8335 1.38599 4.9675 1.38599 8.8335C1.38599 10.0505 1.69653 11.2213 2.27951 12.2584C2.32645 12.3419 2.34809 12.4365 2.34291 12.5308L2.32873 12.6247L1.57299 15.6455L4.59703 14.8918C4.65892 14.8764 4.72261 14.8731 4.78472 14.8814L4.87629 14.9026L4.963 14.941C5.9996 15.5233 7.16969 15.8335 8.38599 15.8335C12.252 15.8335 15.386 12.6995 15.386 8.8335C15.386 4.9675 12.252 1.8335 8.38599 1.8335ZM8.88599 9.8335C9.16213 9.8335 9.38599 10.0574 9.38599 10.3335C9.38599 10.579 9.20911 10.7831 8.97586 10.8254L8.88599 10.8335H5.88599C5.60984 10.8335 5.38599 10.6096 5.38599 10.3335C5.38599 10.088 5.56286 9.88389 5.79611 9.84155L5.88599 9.8335H8.88599ZM10.886 6.8335C11.1621 6.8335 11.386 7.05735 11.386 7.3335C11.386 7.57896 11.2091 7.7831 10.9759 7.82544L10.886 7.8335L5.88599 7.8335C5.60984 7.8335 5.38599 7.60964 5.38599 7.3335C5.38599 7.08804 5.56286 6.88389 5.79611 6.84155L5.88599 6.8335L10.886 6.8335Z" fill="currentColor"/>
        </svg>
      `;case s.Video:return a.qy`
        <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="filled" d="M11 2.5C11 1.11929 9.88071 0 8.5 0H2.5C1.11929 0 0 1.11929 0 2.5V9.5C0 10.8807 1.11929 12 2.5 12H8.5C9.88071 12 11 10.8807 11 9.5V2.5ZM12 3.93082V8.08149L14.7642 10.4319C15.2512 10.8461 16 10.4999 16 9.86055V2.19315C16 1.55685 15.2575 1.20962 14.7692 1.61756L12 3.93082Z" fill="currentColor"/>
          <path class="regular" d="M2.72095 0.833496C1.34024 0.833496 0.220947 1.95278 0.220947 3.3335V10.3335C0.220947 11.7142 1.34024 12.8335 2.72095 12.8335H9.72095C11.1017 12.8335 12.2209 11.7142 12.2209 10.3335V9.33348L14.6209 11.1335C15.2802 11.6279 16.2209 11.1575 16.2209 10.3335V3.33348C16.2209 2.50944 15.2802 2.03905 14.6209 2.53348L12.2209 4.33348V3.3335C12.2209 1.95278 11.1017 0.833496 9.72095 0.833496H2.72095ZM12.2209 5.58348L15.2209 3.33348V10.3335L12.2209 8.08348V5.58348ZM11.2209 3.3335V10.3335C11.2209 11.1619 10.5494 11.8335 9.72095 11.8335H2.72095C1.89252 11.8335 1.22095 11.1619 1.22095 10.3335V3.3335C1.22095 2.50507 1.89252 1.8335 2.72095 1.8335H9.72095C10.5494 1.8335 11.2209 2.50507 11.2209 3.3335Z" fill="currentColor"/>
        </svg>
      `;case s.ExpandDown:return a.qy`
        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 1L7.5 7L1 1" stroke="currentColor" />
        </svg>
      `;case s.Overview:return a.qy`
        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.5 10.5C2.67157 10.5 2 9.82843 2 9V4C2 3.17157 2.67157 2.5 3.5 2.5H12.5C13.3284 2.5 14 3.17157 14 4V9C14 9.82843 13.3284 10.5 12.5 10.5H3.5ZM3.5 3.5C3.22386 3.5 3 3.72386 3 4V5.5H13V4C13 3.72386 12.7761 3.5 12.5 3.5H3.5ZM5 6.5H3V9C3 9.27614 3.22386 9.5 3.5 9.5H5V6.5ZM6 9.5H12.5C12.7761 9.5 13 9.27614 13 9V6.5H6V9.5ZM0 3C0 1.61929 1.11929 0.5 2.5 0.5H13.5C14.8807 0.5 16 1.61929 16 3V10C16 11.3807 14.8807 12.5 13.5 12.5H2.5C1.11929 12.5 0 11.3807 0 10V3ZM2.5 1.5C1.67157 1.5 1 2.17157 1 3V10C1 10.8284 1.67157 11.5 2.5 11.5H13.5C14.3284 11.5 15 10.8284 15 10V3C15 2.17157 14.3284 1.5 13.5 1.5H2.5Z" fill="#717171"/>
        </svg>
      `;case s.Send:return a.qy`
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.27144 8.99999L1.72572 2.45387C1.54854 1.99826 1.9928 1.56256 2.43227 1.71743L2.50153 1.74688L16.0015 8.49688C16.3902 8.69122 16.4145 9.22336 16.0744 9.45992L16.0015 9.50311L2.50153 16.2531C2.0643 16.4717 1.58932 16.0697 1.70282 15.6178L1.72572 15.5461L4.27144 8.99999L1.72572 2.45387L4.27144 8.99999ZM3.3028 3.4053L5.25954 8.43705L10.2302 8.43749C10.515 8.43749 10.7503 8.64911 10.7876 8.92367L10.7927 8.99999C10.7927 9.28476 10.5811 9.52011 10.3065 9.55736L10.2302 9.56249L5.25954 9.56205L3.3028 14.5947L14.4922 8.99999L3.3028 3.4053Z"
          />
        </svg>
      `;case s.Contact:return a.qy`
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5ZM2 7.69879C2 7.17479 2.42479 6.75 2.94879 6.75H6.05121C6.57521 6.75 7 7.17479 7 7.69879C7 8.54603 6.42338 9.28454 5.60144 9.49003L5.54243 9.50478C4.85801 9.67589 4.14199 9.67589 3.45757 9.50478L3.39856 9.49003C2.57661 9.28454 2 8.54603 2 7.69879ZM9.5 4C9.22386 4 9 4.22386 9 4.5C9 4.77614 9.22386 5 9.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H9.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8H12.5C12.7761 8 13 7.77614 13 7.5C13 7.22386 12.7761 7 12.5 7H9.5ZM0 1.75C0 0.783502 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V10.25C16 11.2165 15.2165 12 14.25 12H1.75C0.783501 12 0 11.2165 0 10.25V1.75ZM1.75 1C1.33579 1 1 1.33579 1 1.75V10.25C1 10.6642 1.33579 11 1.75 11H14.25C14.6642 11 15 10.6642 15 10.25V1.75C15 1.33579 14.6642 1 14.25 1H1.75Z" fill="#717171"/>
        </svg>
      `;case s.Call:return a.qy`
        <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="filled" d="M3.98706 1.06589C4.89545 0.792081 5.86254 1.19479 6.31418 2.01224L6.38841 2.16075L7.04987 3.63213C7.46246 4.54992 7.28209 5.61908 6.60754 6.3496L6.47529 6.48248L5.43194 7.45541C5.24417 7.63298 5.38512 8.32181 6.06527 9.49986C6.67716 10.5597 7.17487 11.0552 7.41986 11.0823L7.4628 11.082L7.5158 11.0716L9.56651 10.4446C10.1332 10.2713 10.7438 10.4487 11.1298 10.8865L11.2215 11.0014L12.5781 12.8815C13.1299 13.6462 13.0689 14.6842 12.4533 15.378L12.3314 15.5039L11.7886 16.018C10.7948 16.9592 9.34348 17.2346 8.07389 16.7231C6.13867 15.9433 4.38077 14.1607 2.78368 11.3945C1.18323 8.62242 0.519004 6.20438 0.815977 4.13565C0.99977 2.85539 1.87301 1.78674 3.07748 1.3462L3.27036 1.28192L3.98706 1.06589Z" fill="currentColor"/>
          <path class="regular" d="M3.9292 0.399388L3.2125 0.615419C1.90898 1.00834 0.951582 2.1215 0.758116 3.46915C0.461142 5.53787 1.12537 7.95591 2.72582 10.728C4.32291 13.4942 6.0808 15.2768 8.01603 16.0565C9.28562 16.5681 10.7369 16.2927 11.7308 15.3515L12.2736 14.8374C13.0011 14.1485 13.1065 13.0275 12.5202 12.215L11.1636 10.3349C10.788 9.81423 10.1226 9.59039 9.50865 9.7781L7.45794 10.4051L7.40494 10.4154C7.17877 10.4485 6.65754 9.95942 6.00741 8.83335C5.32726 7.65531 5.1863 6.96648 5.37408 6.7889L6.41743 5.81598C7.19937 5.08681 7.43039 3.94078 6.99201 2.96562L6.33055 1.49424C5.91866 0.578005 4.89102 0.109471 3.9292 0.399388ZM5.41847 1.90427L6.07993 3.37564C6.34277 3.96031 6.20426 4.64744 5.73543 5.08463L4.68953 6.05994C4.02044 6.69268 4.24206 7.77567 5.14138 9.33335C5.98759 10.799 6.75958 11.5233 7.58908 11.3977L7.71341 11.3711L9.80102 10.7344C10.0057 10.6718 10.2275 10.7464 10.3527 10.92L11.7093 12.8001C12.0024 13.2064 11.9497 13.7669 11.586 14.1113L11.0432 14.6254C10.3333 15.2977 9.29663 15.4944 8.38977 15.129C6.6917 14.4448 5.08689 12.8175 3.59185 10.228C2.09375 7.63319 1.48745 5.42604 1.74797 3.61125C1.88616 2.64864 2.57001 1.85352 3.5011 1.57287L4.2178 1.35684C4.69871 1.21188 5.21253 1.44615 5.41847 1.90427Z" fill="currentColor"/>
        </svg>
      `;case s.Confirmation:return a.qy`
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.03212 13.9072L3.56056 10.0017C3.28538 9.69214 2.81132 9.66425 2.50174 9.93944C2.19215 10.2146 2.16426 10.6887 2.43945 10.9983L6.43945 15.4983C6.72614 15.8208 7.2252 15.8355 7.53034 15.5303L18.0303 5.03033C18.3232 4.73744 18.3232 4.26256 18.0303 3.96967C17.7374 3.67678 17.2626 3.67678 16.9697 3.96967L7.03212 13.9072Z" fill="#009E00"/>
      </svg>
      `;case s.Copy:return a.qy`
        <svg width="13" height="14" viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.625 5.50293V14H3.875V11.375H0.375V0H6.24707L8.87207 2.625H9.74707L12.625 5.50293ZM10 5.25H11.1279L10 4.12207V5.25ZM3.875 2.625H7.62793L5.87793 0.875H1.25V10.5H3.875V2.625ZM11.75 6.125H9.125V3.5H4.75V13.125H11.75V6.125Z"
          />
        </svg>
      `;case s.Phone:return a.qy`
        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" fill="none">
            <path d="M1607 1213q44 0 84 16t72 48l220 220q31 31 47 71t17 85q0 44-16 84t-48 72l-14 14q-54 54-99 96t-94 70-109 44-143 15q-125 0-257-39t-262-108-256-164-237-207-206-238-162-256T38 775 0 523q0-83 14-142t43-108 70-93 96-99l16-16q31-31 71-48t85-17q44 0 84 17t72 48l220 220q31 31 47 71t17 85q0 44-15 78t-37 63-48 51-49 45-37 44-15 49q0 38 27 65l551 551q27 27 65 27 26 0 48-15t45-37 45-48 51-49 62-37 79-15zm-83 707q72 0 120-13t88-39 76-64 85-86q27-27 27-65 0-18-14-42t-38-52-51-55-56-54-51-47-37-35q-27-27-66-27-26 0-48 15t-44 37-45 48-52 49-62 37-79 15q-44 0-84-16t-72-48L570 927q-31-31-47-71t-17-85q0-44 15-78t37-63 48-51 49-46 37-44 15-48q0-39-27-66-13-13-34-36t-47-51-54-56-56-52-51-37-43-15q-38 0-65 27l-85 85q-37 37-64 76t-40 87-14 120q0 112 36 231t101 238 153 234 192 219 219 190 234 150 236 99 226 36z" fill="${E}"></path>
        </svg>
      `;case s.CellPhone:return a.qy`
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12C3.72386 12 3.5 12.2239 3.5 12.5C3.5 12.7761 3.72386 13 4 13H6C6.27614 13 6.5 12.7761 6.5 12.5C6.5 12.2239 6.27614 12 6 12H4ZM2 0C0.89543 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H8C9.10457 16 10 15.1046 10 14V2C10 0.89543 9.10457 0 8 0H2ZM1 2C1 1.44772 1.44772 1 2 1H8C8.55228 1 9 1.44772 9 2V14C9 14.5523 8.55228 15 8 15H2C1.44772 15 1 14.5523 1 14V2Z" fill="#717171"/>
        </svg>
      `;case s.Chat:return a.qy`
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C6.72679 16 5.49591 15.7018 4.38669 15.1393L4.266 15.075L0.621091 15.9851C0.311269 16.0625 0.0262241 15.8369 0.00130987 15.5438L0.00114131 15.4624L0.0149329 15.3787L0.925 11.735L0.86169 11.6153C0.406602 10.7186 0.124331 9.74223 0.0327466 8.72826L0.00737596 8.34634L0 8C0 3.58172 3.58172 0 8 0ZM8 1C4.13401 1 1 4.13401 1 8C1 9.21704 1.31054 10.3878 1.89352 11.4249C1.94046 11.5084 1.9621 11.603 1.95692 11.6973L1.94274 11.7912L1.187 14.812L4.21104 14.0583C4.27294 14.0429 4.33662 14.0396 4.39873 14.0479L4.4903 14.0691L4.57701 14.1075C5.61362 14.6898 6.7837 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM8.5 9C8.77614 9 9 9.22386 9 9.5C9 9.74546 8.82312 9.94961 8.58988 9.99194L8.5 10H5.5C5.22386 10 5 9.77614 5 9.5C5 9.25454 5.17688 9.05039 5.41012 9.00806L5.5 9H8.5ZM10.5 6C10.7761 6 11 6.22386 11 6.5C11 6.74546 10.8231 6.94961 10.5899 6.99194L10.5 7L5.5 7C5.22386 7 5 6.77614 5 6.5C5 6.25454 5.17688 6.05039 5.41012 6.00806L5.5 6L10.5 6Z" fill="#717171"/>
        </svg>
      `;case s.Department:return a.qy`
        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 1.5V3H2C0.895431 3 0 3.89543 0 5V12C0 13.1046 0.895432 14 2 14H14.0026C15.1071 14 16.0026 13.1046 16.0026 12V5C16.0026 3.89543 15.1071 3 14.0026 3H12V1.5C12 0.671573 11.3284 0 10.5 0H5.5C4.67157 0 4 0.671573 4 1.5ZM5.5 1H10.5C10.7761 1 11 1.22386 11 1.5V3H5V1.5C5 1.22386 5.22386 1 5.5 1ZM2 4H14.0026C14.5549 4 15.0026 4.44772 15.0026 5V7H12L12 6.50073C12 6.22459 11.7761 6.00073 11.5 6.00073C11.2239 6.00073 11 6.22459 11 6.50074L11 7H5V6.50073C5 6.22459 4.77614 6.00073 4.5 6.00073C4.22386 6.00073 4 6.22459 4 6.50073V7H1V5C1 4.44772 1.44772 4 2 4ZM11 8L11 8.5C11 8.77615 11.2239 9 11.5 9C11.7762 9 12 8.77614 12 8.5L12 8H15.0026V12C15.0026 12.5523 14.5549 13 14.0026 13H2C1.44772 13 1 12.5523 1 12V8H4V8.5C4 8.77614 4.22386 9 4.5 9C4.77614 9 5 8.77614 5 8.5V8H11Z" fill="#717171"/>
        </svg>
      `;case s.Dot:return a.qy`
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.25 10C6.25 10.6904 5.69036 11.25 5 11.25C4.30964 11.25 3.75 10.6904 3.75 10C3.75 9.30964 4.30964 8.75 5 8.75C5.69036 8.75 6.25 9.30964 6.25 10ZM11.25 10C11.25 10.6904 10.6904 11.25 10 11.25C9.30964 11.25 8.75 10.6904 8.75 10C8.75 9.30964 9.30964 8.75 10 8.75C10.6904 8.75 11.25 9.30964 11.25 10ZM15 11.25C15.6904 11.25 16.25 10.6904 16.25 10C16.25 9.30964 15.6904 8.75 15 8.75C14.3096 8.75 13.75 9.30964 13.75 10C13.75 10.6904 14.3096 11.25 15 11.25Z" fill="#242424"/>
        </svg>
        `;case s.Email:return a.qy`
        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 0C14.8807 0 16 1.11929 16 2.5V10.5C16 11.8807 14.8807 13 13.5 13H2.5C1.11929 13 0 11.8807 0 10.5V2.5C0 1.11929 1.11929 0 2.5 0H13.5ZM15 3.961L8.25351 7.93097C8.12311 8.00767 7.96661 8.02045 7.82751 7.96932L7.74649 7.93097L1 3.963V10.5C1 11.3284 1.67157 12 2.5 12H13.5C14.3284 12 15 11.3284 15 10.5V3.961ZM13.5 1H2.5C1.67157 1 1 1.67157 1 2.5V2.802L8 6.91991L15 2.801V2.5C15 1.67157 14.3284 1 13.5 1Z" fill="#717171"/>
        </svg>
      `;case s.OfficeLocation:return a.qy`
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>Location icon</title>
          <path d="M10 7C10 8.65685 8.65685 10 7 10C5.34315 10 4 8.65685 4 7C4 5.34315 5.34315 4 7 4C8.65685 4 10 5.34315 10 7ZM9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9C8.10457 9 9 8.10457 9 7ZM11.9497 11.955C14.6834 9.2201 14.6834 4.78601 11.9497 2.05115C9.21608 -0.683716 4.78392 -0.683716 2.05025 2.05115C-0.683418 4.78601 -0.683418 9.2201 2.05025 11.955L3.57128 13.4538L5.61408 15.4389L5.74691 15.5567C6.52168 16.1847 7.65623 16.1455 8.38611 15.4391L10.8223 13.0691L11.9497 11.955ZM2.75499 2.75619C5.09944 0.410715 8.90055 0.410715 11.245 2.75619C13.5294 5.04153 13.5879 8.71039 11.4207 11.0667L11.245 11.2499L9.92371 12.5539L7.69315 14.7225L7.60016 14.8021C7.24594 15.0699 6.7543 15.0698 6.40012 14.802L6.30713 14.7224L3.3263 11.817L2.75499 11.2499L2.57927 11.0667C0.412077 8.71039 0.47065 5.04153 2.75499 2.75619Z" fill="#717171"/>
        </svg>
      `;case s.Birthday:return a.qy`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.81357 0.667333C6.07581 0.320242 6.48151 0 7 0C7.51849 0 7.92419 0.320242 8.18643 0.667333C8.45471 1.0224 8.63508 1.47991 8.69561 1.93392C8.75552 2.3832 8.70532 2.89341 8.42852 3.3086C8.134 3.75039 7.63965 4 7 4C6.36035 4 5.866 3.75039 5.57148 3.3086C5.29468 2.89341 5.24448 2.3832 5.30439 1.93392C5.36492 1.47991 5.54529 1.0224 5.81357 0.667333ZM6.40353 2.7539C6.484 2.87461 6.63965 3 7 3C7.36035 3 7.516 2.87461 7.59647 2.7539C7.69468 2.60659 7.74448 2.3668 7.70439 2.06608C7.66492 1.77009 7.54529 1.4776 7.38857 1.27017C7.22581 1.05476 7.08151 1 7 1C6.91849 1 6.77419 1.05476 6.61143 1.27017C6.45471 1.4776 6.33508 1.77009 6.29561 2.06608C6.25552 2.3668 6.30532 2.60659 6.40353 2.7539ZM1 7C1 5.89543 1.89543 5 3 5H11C12.1046 5 13 5.89543 13 7V12H13.5C13.7761 12 14 12.2239 14 12.5C14 12.7761 13.7761 13 13.5 13H0.5C0.223858 13 0 12.7761 0 12.5C0 12.2239 0.223858 12 0.5 12H1V7ZM2 12H12V9.01931C11.9109 9.10285 11.8174 9.18842 11.7208 9.27412C11.4006 9.55804 11.0346 9.85319 10.6715 10.0802C10.3274 10.2953 9.90815 10.5 9.5 10.5C8.77182 10.5 8.30806 9.98986 8.00471 9.65617C7.9834 9.63273 7.96289 9.61016 7.94312 9.58869C7.5876 9.20261 7.35769 9 7 9C6.64231 9 6.4124 9.20261 6.05688 9.58869C6.03711 9.61016 6.0166 9.63273 5.99529 9.65617C5.69194 9.98986 5.22818 10.5 4.5 10.5C4.10587 10.5 3.69263 10.2897 3.35907 10.0789C3.00198 9.85313 2.63516 9.55951 2.31117 9.27666C2.20329 9.18247 2.09896 9.08844 2 8.9971V12ZM2 7.59993C2.05039 7.65198 2.11363 7.71652 2.1873 7.7902C2.38843 7.99132 2.6649 8.25801 2.96883 8.52334C3.27484 8.79049 3.59802 9.04687 3.89343 9.23362C4.21237 9.43525 4.41413 9.5 4.5 9.5C4.75817 9.5 4.93171 9.33433 5.32125 8.91131L5.32447 8.90781C5.65956 8.5439 6.16039 8 7 8C7.83961 8 8.34044 8.5439 8.67553 8.90781L8.67875 8.91131C9.06828 9.33433 9.24183 9.5 9.5 9.5C9.6106 9.5 9.82569 9.42967 10.1414 9.23229C10.4381 9.04681 10.7573 8.79196 11.0573 8.52588C11.3554 8.26163 11.6238 7.99594 11.8184 7.7955C11.89 7.72165 11.9513 7.65703 12 7.60506V7C12 6.44772 11.5523 6 11 6H3C2.44772 6 2 6.44772 2 7V7.59993Z" fill="#717171"/>
        </svg>
      `;case s.Person:return a.qy`
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0C4.79086 0 3 1.79086 3 4C3 6.20914 4.79086 8 7 8C9.20914 8 11 6.20914 11 4C11 1.79086 9.20914 0 7 0ZM4 4C4 2.34315 5.34315 1 7 1C8.65685 1 10 2.34315 10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4ZM2.00873 9C0.903151 9 0 9.88687 0 11C0 12.6912 0.83281 13.9663 2.13499 14.7966C3.41697 15.614 5.14526 16 7 16C8.85474 16 10.583 15.614 11.865 14.7966C13.1672 13.9663 14 12.6912 14 11C14 9.89557 13.1045 9.00001 12 9.00001L2.00873 9ZM1 11C1 10.4467 1.44786 10 2.00873 10L12 10C12.5522 10 13 10.4478 13 11C13 12.3088 12.3777 13.2837 11.3274 13.9534C10.2568 14.636 8.73511 15 7 15C5.26489 15 3.74318 14.636 2.67262 13.9534C1.62226 13.2837 1 12.3088 1 11Z" fill="#717171"/>
        </svg>
      `;case s.Messages:return a.qy`
        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 0C14.8807 0 16 1.11929 16 2.5V10.5C16 11.8807 14.8807 13 13.5 13H2.5C1.11929 13 0 11.8807 0 10.5V2.5C0 1.11929 1.11929 0 2.5 0H13.5ZM15 3.961L8.25351 7.93097C8.12311 8.00767 7.96661 8.02045 7.82751 7.96932L7.74649 7.93097L1 3.963V10.5C1 11.3284 1.67157 12 2.5 12H13.5C14.3284 12 15 11.3284 15 10.5V3.961ZM13.5 1H2.5C1.67157 1 1 1.67157 1 2.5V2.802L8 6.91991L15 2.801V2.5C15 1.67157 14.3284 1 13.5 1Z" fill="#717171"/>
        </svg>
      `;case s.Organization:return a.qy`
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.99992 0C6.34271 0 4.99927 1.34344 4.99927 3.00066C4.99927 4.48754 6.08073 5.72183 7.49999 5.95985V7.5H4.5C3.67157 7.5 3 8.17157 3 9V10.0416C1.5811 10.2799 0.5 11.514 0.5 13.0007C0.5 14.6579 1.84344 16.0013 3.50066 16.0013C5.15787 16.0013 6.50131 14.6579 6.50131 13.0007C6.50131 11.5136 5.41954 10.2791 4 10.0414V9C4 8.72386 4.22386 8.5 4.5 8.5H11.5C11.7761 8.5 12 8.72386 12 9V10.0416C10.5811 10.2799 9.5 11.514 9.5 13.0007C9.5 14.6579 10.8434 16.0013 12.5007 16.0013C14.1579 16.0013 15.5013 14.6579 15.5013 13.0007C15.5013 11.5136 14.4195 10.2791 13 10.0414V9C13 8.17157 12.3284 7.5 11.5 7.5H8.49999V5.95983C9.91918 5.72176 11.0006 4.48749 11.0006 3.00066C11.0006 1.34344 9.65714 0 7.99992 0ZM5.99927 3.00066C5.99927 1.89572 6.89499 1 7.99992 1C9.10485 1 10.0006 1.89572 10.0006 3.00066C10.0006 4.10559 9.10485 5.00131 7.99992 5.00131C6.89499 5.00131 5.99927 4.10559 5.99927 3.00066ZM1.5 13.0007C1.5 11.8957 2.39572 11 3.50066 11C4.60559 11 5.50131 11.8957 5.50131 13.0007C5.50131 14.1056 4.60559 15.0013 3.50066 15.0013C2.39572 15.0013 1.5 14.1056 1.5 13.0007ZM12.5007 11C13.6056 11 14.5013 11.8957 14.5013 13.0007C14.5013 14.1056 13.6056 15.0013 12.5007 15.0013C11.3957 15.0013 10.5 14.1056 10.5 13.0007C10.5 11.8957 11.3957 11 12.5007 11Z" fill="#717171"/>
        </svg>
      `;case s.ExpandRight:return a.qy`
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12L6.5 6.5L1 1" stroke="#B8B8B8" stroke-width="2" />
        </svg>
      `;case s.Profile:return a.qy`
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0C4.79086 0 3 1.79086 3 4C3 6.20914 4.79086 8 7 8C9.20914 8 11 6.20914 11 4C11 1.79086 9.20914 0 7 0ZM4 4C4 2.34315 5.34315 1 7 1C8.65685 1 10 2.34315 10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4ZM2.00873 9C0.903151 9 0 9.88687 0 11C0 12.6912 0.83281 13.9663 2.13499 14.7966C3.41697 15.614 5.14526 16 7 16C8.85474 16 10.583 15.614 11.865 14.7966C13.1672 13.9663 14 12.6912 14 11C14 9.89557 13.1045 9.00001 12 9.00001L2.00873 9ZM1 11C1 10.4467 1.44786 10 2.00873 10L12 10C12.5522 10 13 10.4478 13 11C13 12.3088 12.3777 13.2837 11.3274 13.9534C10.2568 14.636 8.73511 15 7 15C5.26489 15 3.74318 14.636 2.67262 13.9534C1.62226 13.2837 1 12.3088 1 11Z" fill="#717171"/>
        </svg>
      `;case s.File:return a.qy`
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
      `;case s.Files:return a.qy`
        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9956 4.07309V4C14.9956 2.61929 13.8763 1.5 12.4956 1.5H7.66418L6.06391 0.299946C5.80428 0.105247 5.48851 0 5.16399 0H2.5C1.11916 0 -0.000181445 1.11949 2.20615e-08 2.50033L0.0011832 11.4978C0.00135142 12.7772 0.962583 13.8321 2.2023 13.9798C2.2867 13.9945 2.37375 14.0021 2.46289 14.0021H13.1798C13.8981 14.0021 14.5156 13.4929 14.6524 12.7877L16.0097 5.78769C16.1587 5.01967 15.696 4.29703 14.9956 4.07309ZM2.5 1H5.16399C5.27216 1 5.37742 1.03508 5.46396 1.09998L7.19756 2.40002C7.2841 2.46492 7.38936 2.5 7.49753 2.5H12.4956C13.324 2.5 13.9956 3.17157 13.9956 4V4.00214H3.824C3.10596 4.00214 2.48863 4.511 2.35158 5.21583L1.05351 11.8916C1.01941 11.7661 1.0012 11.634 1.00118 11.4976L1 2.5002C0.999891 1.67169 1.6715 1 2.5 1ZM3.33319 5.4067C3.37888 5.17176 3.58465 5.00214 3.824 5.00214H14.5372C14.8515 5.00214 15.0879 5.28874 15.028 5.59732L13.6706 12.5973C13.6251 12.8324 13.4192 13.0021 13.1798 13.0021H2.46289C2.14845 13.0021 1.91206 12.7154 1.97208 12.4067L3.33319 5.4067Z" fill="#717171"/>
        </svg>
      `;case s.Back:return a.qy`
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 8.5H1.95312L8.10156 14.6484L7.39844 15.3516L0.046875 8L7.39844 0.648438L8.10156 1.35156L1.95312 7.5H16V8.5Z"
          />
        </svg>
      `;case s.Close:return a.qy`
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.73838 5.032L9.70337 1.067L8.99638 0.360001L5.03137 4.325L1.06637 0.360001L0.359375 1.067L4.32438 5.032L0.359375 8.997L1.06637 9.704L5.03137 5.739L8.99638 9.704L9.70337 8.997L5.73838 5.032Z" fill="currentColor"/>
        </svg>
     `;case s.Upload:return a.qy`
        <svg class="upload-icon" width="21" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 2C4.08579 2 3.75 2.33579 3.75 2.75C3.75 3.16421 4.08579 3.5 4.5 3.5H15C15.4142 3.5 15.75 3.16421 15.75 2.75C15.75 2.33579 15.4142 2 15 2H4.5ZM10.4963 17.3493C10.4466 17.7154 10.1328 17.9976 9.75311 17.9976C9.3389 17.9976 9.00311 17.6618 9.00311 17.2476L9.00249 7.05856L6.02995 10.026L5.94578 10.0986C5.65202 10.3162 5.23537 10.2917 4.96929 10.0253C4.67661 9.73215 4.67695 9.25728 4.97005 8.96459L9.25962 4.67989C9.33377 4.61512 9.42089 4.56485 9.5169 4.53385L9.59777 4.51072C9.64749 4.50019 9.69837 4.4947 9.74849 4.4947L9.80855 4.49661L9.87781 4.50451L9.99828 4.53462L10.0895 4.57254L10.1259 4.59371L10.2169 4.6523L10.2875 4.71481L14.5303 8.96546L14.6029 9.04964C14.8205 9.34345 14.7959 9.7601 14.5294 10.0261L14.4452 10.0987C14.1514 10.3162 13.7347 10.2917 13.4687 10.0251L10.5025 7.05456L10.5031 17.2476L10.4963 17.3493Z" fill="#ffffff"/>
        </svg>
      `;case s.FileCloud:return a.qy`
        <svg width="16" height="16"  xmlns="http://www.w3.org/2000/svg">
          <path
            d="m8,0c2.8166,0 4.4145,1.9233 4.6469,4.246l0.071,0c1.8127,0 3.2821,1.5119 3.2821,3.377c0,0.0953 -0.0038,0.1897 -0.0114,0.283c-0.322,-0.4017 -0.6967,-0.7591 -1.1138,-1.062c-0.3104,-0.9329 -1.1627,-1.598 -2.1568,-1.598l-0.0711,0c-0.5137,0 -0.9439,-0.3893 -0.9951,-0.9005c-0.2021,-2.0206 -1.5433,-3.3455 -3.6518,-3.3455c-2.1139,0 -3.4489,1.3159 -3.6518,3.3455c-0.0511,0.5112 -0.4813,0.9005 -0.9951,0.9005l-0.071,0c-1.2539,0 -2.2821,1.0579 -2.2821,2.377c0,1.3191 1.0282,2.377 2.2821,2.377l2.6655,0c-0.087,0.323 -0.1466,0.6572 -0.1762,1l-2.4893,0c-1.8127,0 -3.2821,-1.5119 -3.2821,-3.377c0,-1.8029 1.3731,-3.2758 3.102,-3.372l0.2511,-0.005c0.2338,-2.338 1.8303,-4.246 4.6469,-4.246zm3.5,16c2.4853,0 4.5,-2.0147 4.5,-4.5c0,-2.4853 -2.0147,-4.5 -4.5,-4.5c-2.4853,0 -4.5,2.0147 -4.5,4.5c0,2.4853 2.0147,4.5 4.5,4.5zm0,-7c0.2761,0 0.5,0.2239 0.5,0.5l0,1.5l1.5,0c0.2761,0 0.5,0.2239 0.5,0.5c0,0.2761 -0.2239,0.5 -0.5,0.5l-1.5,0l0,1.5c0,0.2761 -0.2239,0.5 -0.5,0.5c-0.2761,0 -0.5,-0.2239 -0.5,-0.5l0,-1.5l-1.5,0c-0.2761,0 -0.5,-0.2239 -0.5,-0.5c0,-0.2761 0.2239,-0.5 0.5,-0.5l1.5,0l0,-1.5c0,-0.2761 0.2239,-0.5 0.5,-0.5z" fill="#0078D4"
          />
        </svg>
      `;case s.DragFile:return a.qy`
        <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m0,1.00189c0,-0.8451 0.983,-1.3091 1.636,-0.772l11.006,9.0622c0.724,0.5964 0.302,1.772 -0.636,1.772l-5.592,0c-0.435,0 -0.849,0.1892 -1.134,0.5185l-3.524,4.0725c-0.606,0.7003 -1.756,0.2717 -1.756,-0.6544l0,-13.9988zm12.006,9.0622l-11.006,-9.0622l0,13.9988l3.524,-4.0724c0.475,-0.5488 1.164,-0.8642 1.89,-0.8642l5.592,0z"
          />
        </svg>
      `;case s.Cancel:return a.qy`
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.588591 0.715694L0.646447 0.646447C0.820013 0.47288 1.08944 0.453595 1.28431 0.588591L1.35355 0.646447L6 5.293L10.6464 0.646447C10.8417 0.451185 11.1583 0.451185 11.3536 0.646447C11.5488 0.841709 11.5488 1.15829 11.3536 1.35355L6.707 6L11.3536 10.6464C11.5271 10.82 11.5464 11.0894 11.4114 11.2843L11.3536 11.3536C11.18 11.5271 10.9106 11.5464 10.7157 11.4114L10.6464 11.3536L6 6.707L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451185 11.1583 0.451185 10.8417 0.646447 10.6464L5.293 6L0.646447 1.35355C0.47288 1.17999 0.453595 0.910563 0.588591 0.715694L0.646447 0.646447L0.588591 0.715694Z" fill="currentColor"/>
        </svg>
     `;case s.Success:return a.qy`
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path fill="#009E00" d="m6.322,12c3.492,0 6.323,-2.6863 6.323,-6c0,-3.3137 -2.831,-6 -6.323,-6c-3.491,0 -6.322,2.6863 -6.322,6c0,3.3137 2.831,6 6.322,6z"/>
          <path fill="white" d="m9.629,3.7509c-0.131,-0.125 -0.31,-0.1952 -0.496,-0.1952c-0.187,0 -0.365,0.0702 -0.497,0.1952l-3.267,3.1l-1.393,-1.3222c-0.177,-0.1695 -0.436,-0.2361 -0.68,-0.1746c-0.243,0.0615 -0.433,0.2418 -0.497,0.4725c-0.065,0.2307 0.005,0.4767 0.184,0.6449l1.807,1.7154c0.019,0.0331 0.041,0.0646 0.066,0.094c0.289,0.2562 0.738,0.2562 1.027,0c0.024,-0.0294 0.047,-0.0609 0.065,-0.0941l3.681,-3.4931c0.275,-0.2603 0.275,-0.6824 0,-0.9428z"/>
        </svg>
      `;case s.CheckMark:return a.qy`
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="filled" d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM13.2197 6.96967L8.75 11.4393L6.78033 9.46967C6.48744 9.17678 6.01256 9.17678 5.71967 9.46967C5.42678 9.76256 5.42678 10.2374 5.71967 10.5303L8.21967 13.0303C8.51256 13.3232 8.98744 13.3232 9.28033 13.0303L14.2803 8.03033C14.5732 7.73744 14.5732 7.26256 14.2803 6.96967C13.9874 6.67678 13.5126 6.67678 13.2197 6.96967Z" fill="currentColor"/>
        <path class="regular" d="M10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="currentColor"/>
      </svg>
      `;case s.Radio:return a.qy`
      <svg width="66" height="20" viewBox="0 0 66 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="#F3F3F3"/>
        <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#636363"/>
        <path d="M36.5596 16H35.1924L33.5107 13.2178C33.1963 12.6982 32.9274 12.3656 32.7041 12.2197C32.4808 12.0693 32.2096 11.9941 31.8906 11.9941H30.7627V16H29.6143V6.19727H32.54C33.3923 6.19727 34.1009 6.42285 34.666 6.87402C35.2357 7.3252 35.5205 7.99056 35.5205 8.87012C35.5205 9.56283 35.3405 10.1439 34.9805 10.6133C34.6204 11.0827 34.126 11.4222 33.4971 11.6318V11.6592C33.7021 11.7822 33.8822 11.9167 34.0371 12.0625C34.1921 12.2083 34.3561 12.4225 34.5293 12.7051L36.5596 16ZM30.7627 7.23633V10.9551H32.3213C32.891 10.9551 33.3649 10.7705 33.7432 10.4014C34.126 10.0322 34.3174 9.55371 34.3174 8.96582C34.3174 8.44173 34.1465 8.02246 33.8047 7.70801C33.4674 7.39355 32.9775 7.23633 32.335 7.23633H30.7627ZM42.8008 16H41.6797V14.9062H41.6523C41.4108 15.3255 41.1123 15.64 40.7568 15.8496C40.4059 16.0592 39.9958 16.1641 39.5264 16.1641C38.8701 16.1641 38.3392 15.9727 37.9336 15.5898C37.528 15.207 37.3252 14.6989 37.3252 14.0654C37.3252 13.4684 37.5303 12.974 37.9404 12.582C38.3506 12.1901 38.9316 11.9395 39.6836 11.8301L41.6797 11.5635V11.4062C41.6797 10.8184 41.543 10.4014 41.2695 10.1553C40.9961 9.90462 40.6315 9.7793 40.1758 9.7793C39.8112 9.7793 39.4603 9.84766 39.123 9.98438C38.7858 10.1211 38.4691 10.3307 38.1729 10.6133L37.5166 9.93652C37.9085 9.55827 38.3255 9.28027 38.7676 9.10254C39.2096 8.9248 39.7018 8.83594 40.2441 8.83594C41.0918 8.83594 41.7298 9.05469 42.1582 9.49219C42.5866 9.92513 42.8008 10.5768 42.8008 11.4473V16ZM41.6797 13.1562V12.459L39.9912 12.6914C39.4762 12.7643 39.0889 12.8942 38.8291 13.0811C38.5693 13.2679 38.4395 13.5618 38.4395 13.9629C38.4395 14.3822 38.5602 14.7035 38.8018 14.9268C39.0479 15.1455 39.3464 15.2549 39.6973 15.2549C40.3034 15.2549 40.7842 15.0566 41.1396 14.6602C41.4997 14.2637 41.6797 13.7624 41.6797 13.1562ZM49.7939 14.8105C49.5342 15.2617 49.2038 15.6012 48.8027 15.8291C48.4062 16.0524 47.9346 16.1641 47.3877 16.1641C46.5081 16.1641 45.804 15.8519 45.2754 15.2275C44.7513 14.5986 44.4893 13.7441 44.4893 12.6641C44.4893 11.5065 44.7809 10.5791 45.3643 9.88184C45.9476 9.18457 46.7246 8.83594 47.6953 8.83594C48.1784 8.83594 48.5931 8.93164 48.9395 9.12305C49.2904 9.3099 49.5752 9.59245 49.7939 9.9707H49.8213V5.63672H50.9424V16H49.8213V14.8105H49.7939ZM45.6377 12.6094C45.6377 13.416 45.8245 14.054 46.1982 14.5234C46.5765 14.9883 47.0824 15.2207 47.7158 15.2207C48.3447 15.2207 48.8529 14.9951 49.2402 14.5439C49.6276 14.0928 49.8213 13.5231 49.8213 12.835V11.8027C49.8213 11.2376 49.6322 10.7591 49.2539 10.3672C48.8802 9.97526 48.4085 9.7793 47.8389 9.7793C47.1553 9.7793 46.6175 10.0299 46.2256 10.5312C45.8337 11.0326 45.6377 11.7253 45.6377 12.6094ZM53.7861 7.3252C53.5583 7.3252 53.3669 7.25 53.2119 7.09961C53.057 6.94466 52.9795 6.75553 52.9795 6.53223C52.9795 6.30892 53.057 6.12207 53.2119 5.97168C53.3669 5.81673 53.5583 5.73926 53.7861 5.73926C54.014 5.73926 54.2054 5.81673 54.3604 5.97168C54.5153 6.12207 54.5928 6.30892 54.5928 6.53223C54.5928 6.75553 54.5153 6.94466 54.3604 7.09961C54.2054 7.25 54.014 7.3252 53.7861 7.3252ZM54.333 16H53.2119V9H54.333V16ZM59.5283 16.1641C58.4938 16.1641 57.6667 15.8382 57.0469 15.1865C56.4316 14.5303 56.124 13.6621 56.124 12.582C56.124 11.4108 56.443 10.4948 57.0811 9.83398C57.7191 9.17318 58.5895 8.84049 59.6924 8.83594C60.736 8.83138 61.5495 9.15267 62.1328 9.7998C62.7207 10.4469 63.0146 11.3379 63.0146 12.4727C63.0146 13.5938 62.6979 14.4893 62.0645 15.1592C61.4355 15.8291 60.5902 16.1641 59.5283 16.1641ZM59.6104 15.2207C60.335 15.2207 60.891 14.986 61.2783 14.5166C61.6702 14.0426 61.8662 13.375 61.8662 12.5137C61.8662 11.6341 61.6702 10.9596 61.2783 10.4902C60.8864 10.0163 60.3304 9.7793 59.6104 9.7793C58.8903 9.7793 58.3206 10.0254 57.9014 10.5176C57.4821 11.0098 57.2725 11.6842 57.2725 12.541C57.2725 13.3704 57.4844 14.0244 57.9082 14.5029C58.332 14.9814 58.8994 15.2207 59.6104 15.2207Z" fill="#1A1A1A"/>
      </svg>
      `;case s.Fail:return a.qy`
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path fill="#EF355D" d="m6,12c3.314,0 6,-2.6863 6,-6c0,-3.3137 -2.686,-6 -6,-6c-3.314,0 -6,2.6863 -6,6c0,3.3137 2.686,6 6,6z"/>
          <path fill="white" d="m6.943,6.0004l1.544,-1.5444c0.169,-0.1683 0.236,-0.4142 0.174,-0.6448c-0.061,-0.2306 -0.241,-0.4107 -0.472,-0.4722c-0.231,-0.0616 -0.477,0.0049 -0.645,0.1742l-1.544,1.5443l-1.545,-1.5443c-0.26,-0.259 -0.681,-0.2583 -0.941,0.0014c-0.26,0.2598 -0.26,0.6808 -0.001,0.9414l1.544,1.5444l-1.544,1.5444c-0.259,0.2606 -0.259,0.6815 0.001,0.9413c0.26,0.2598 0.681,0.2604 0.941,0.0015l1.545,-1.5444l1.544,1.5444c0.261,0.2589 0.682,0.2583 0.942,-0.0015c0.259,-0.2598 0.26,-0.6807 0.001,-0.9413l-1.544,-1.5444z" />
        </svg>
      `;case s.SelectAccount:return a.qy`
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
      <path fill=${E} d="M6.22176 13.9567C3.55468 13.653 2 11.8026 2 10V9.5C2 8.67157 2.67157 8 3.5 8H5.59971C5.43777 8.31679 5.30564 8.65136 5.20703 9H3.5C3.22386 9 3 9.22386 3 9.5V10C3 11.1281 3.88187 12.333 5.50235 12.7996C5.69426 13.216 5.93668 13.6043 6.22176 13.9567ZM9.62596 5.06907C9.70657 4.81036 9.75 4.53525 9.75 4.25C9.75 2.73122 8.51878 1.5 7 1.5C5.48122 1.5 4.25 2.73122 4.25 4.25C4.25 5.53662 5.13357 6.61687 6.32704 6.91706C6.64202 6.55055 7.00446 6.226 7.40482 5.95294C7.27488 5.98371 7.13934 6 7 6C6.0335 6 5.25 5.2165 5.25 4.25C5.25 3.2835 6.0335 2.5 7 2.5C7.9665 2.5 8.75 3.2835 8.75 4.25C8.75 4.73141 8.55561 5.16743 8.24104 5.48382C8.67558 5.28783 9.14016 5.14664 9.62596 5.06907ZM10.5 15C12.9853 15 15 12.9853 15 10.5C15 8.01472 12.9853 6 10.5 6C8.01472 6 6 8.01472 6 10.5C6 12.9853 8.01472 15 10.5 15ZM10.5 8C10.7761 8 11 8.22386 11 8.5V10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H11V12.5C11 12.7761 10.7761 13 10.5 13C10.2239 13 10 12.7761 10 12.5V11H8.5C8.22386 11 8 10.7761 8 10.5C8 10.2239 8.22386 10 8.5 10H10V8.5C10 8.22386 10.2239 8 10.5 8Z"/>
    </svg>
  `;case s.News:return a.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.75 20H5.25C3.51697 20 2.10075 18.6435 2.00514 16.9344L2 16.75V6.25C2 5.05914 2.92516 4.08436 4.09595 4.00519L4.25 4H16.75C17.9409 4 18.9156 4.92516 18.9948 6.09595L19 6.25V7H19.75C20.9409 7 21.9156 7.92516 21.9948 9.09595L22 9.25V16.75C22 18.483 20.6435 19.8992 18.9344 19.9949L18.75 20H5.25H18.75ZM5.25 18.5H18.75C19.6682 18.5 20.4212 17.7929 20.4942 16.8935L20.5 16.75V9.25C20.5 8.8703 20.2178 8.55651 19.8518 8.50685L19.75 8.5H19V16.25C19 16.6297 18.7178 16.9435 18.3518 16.9932L18.25 17C17.8703 17 17.5565 16.7178 17.5068 16.3518L17.5 16.25V6.25C17.5 5.8703 17.2178 5.55651 16.8518 5.50685L16.75 5.5H4.25C3.8703 5.5 3.55651 5.78215 3.50685 6.14823L3.5 6.25V16.75C3.5 17.6682 4.20711 18.4212 5.10647 18.4942L5.25 18.5H18.75H5.25ZM12.246 14.5H15.2522C15.6665 14.5 16.0022 14.8358 16.0022 15.25C16.0022 15.6297 15.7201 15.9435 15.354 15.9932L15.2522 16H12.246C11.8318 16 11.496 15.6642 11.496 15.25C11.496 14.8703 11.7782 14.5565 12.1442 14.5068L12.246 14.5H15.2522H12.246ZM9.24328 11.0045C9.6575 11.0045 9.99328 11.3403 9.99328 11.7545V15.25C9.99328 15.6642 9.6575 16 9.24328 16H5.74776C5.33355 16 4.99776 15.6642 4.99776 15.25V11.7545C4.99776 11.3403 5.33355 11.0045 5.74776 11.0045H9.24328ZM8.49328 12.5045H6.49776V14.5H8.49328V12.5045ZM12.246 11.0045H15.2522C15.6665 11.0045 16.0022 11.3403 16.0022 11.7545C16.0022 12.1342 15.7201 12.448 15.354 12.4976L15.2522 12.5045H12.246C11.8318 12.5045 11.496 12.1687 11.496 11.7545C11.496 11.3748 11.7782 11.061 12.1442 11.0113L12.246 11.0045H15.2522H12.246ZM5.74776 7.50247H15.2522C15.6665 7.50247 16.0022 7.83826 16.0022 8.25247C16.0022 8.63217 15.7201 8.94596 15.354 8.99563L15.2522 9.00247H5.74776C5.33355 9.00247 4.99776 8.66669 4.99776 8.25247C4.99776 7.87278 5.27991 7.55898 5.64599 7.50932L5.74776 7.50247H15.2522H5.74776Z" fill="none" />
      </svg>
      `;case s.DoubleBookmark:return a.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6.74814C4 5.50535 5.00742 4.49786 6.25013 4.49786H15.2506C16.4933 4.49786 17.5008 5.50535 17.5008 6.74814V21.2499C17.5008 21.5185 17.3572 21.7666 17.1243 21.9003C16.8914 22.0341 16.6048 22.0332 16.3728 21.8978L10.7504 18.6179L5.12797 21.8978C4.89599 22.0332 4.60936 22.0341 4.37648 21.9003C4.14359 21.7666 4 21.5185 4 21.2499V6.74814ZM6.25013 5.99805C5.83589 5.99805 5.50008 6.33387 5.50008 6.74814V19.944L10.3725 17.1016C10.606 16.9653 10.8948 16.9653 11.1283 17.1016L16.0007 19.944V6.74814C16.0007 6.33387 15.6649 5.99805 15.2506 5.99805H6.25013ZM15.2497 2C17.8732 2 20 4.12691 20 6.75058V18.6232C20 19.0374 19.6642 19.3733 19.25 19.3733C18.8357 19.3733 18.4999 19.0374 18.4999 18.6232V6.75058C18.4999 4.95543 17.0448 3.50018 15.2497 3.50018H6.63687C6.63687 3.50018 6.75016 2.94339 7.43379 2.41948C8.00023 2 8.60182 2 8.60182 2H15.2497Z" fill="none" />
        </svg>
      `;case s.ChevronLeft:return a.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5303 4.21967C15.8232 4.51256 15.8232 4.98744 15.5303 5.28033L8.81066 12L15.5303 18.7197C15.8232 19.0126 15.8232 19.4874 15.5303 19.7803C15.2374 20.0732 14.7626 20.0732 14.4697 19.7803L7.21967 12.5303C6.92678 12.2374 6.92678 11.7626 7.21967 11.4697L14.4697 4.21967C14.7626 3.92678 15.2374 3.92678 15.5303 4.21967Z" fill="none" />
        </svg>`;case s.ChevronRight:return a.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.46967 4.21967C8.17678 4.51256 8.17678 4.98744 8.46967 5.28033L15.1893 12L8.46967 18.7197C8.17678 19.0126 8.17678 19.4874 8.46967 19.7803C8.76256 20.0732 9.23744 20.0732 9.53033 19.7803L16.7803 12.5303C17.0732 12.2374 17.0732 11.7626 16.7803 11.4697L9.53033 4.21967C9.23744 3.92678 8.76256 3.92678 8.46967 4.21967Z" fill="currentColor" />
        </svg>`;case s.Delete:return a.qy`
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 4H11.5C11.5 3.17157 10.8284 2.5 10 2.5C9.17157 2.5 8.5 3.17157 8.5 4ZM7.5 4C7.5 2.61929 8.61929 1.5 10 1.5C11.3807 1.5 12.5 2.61929 12.5 4H17.5C17.7761 4 18 4.22386 18 4.5C18 4.77614 17.7761 5 17.5 5H16.4456L15.2521 15.3439C15.0774 16.8576 13.7957 18 12.2719 18H7.72813C6.20431 18 4.92256 16.8576 4.7479 15.3439L3.55437 5H2.5C2.22386 5 2 4.77614 2 4.5C2 4.22386 2.22386 4 2.5 4H7.5ZM5.74131 15.2292C5.85775 16.2384 6.71225 17 7.72813 17H12.2719C13.2878 17 14.1422 16.2384 14.2587 15.2292L15.439 5H4.56101L5.74131 15.2292ZM8.5 7.5C8.77614 7.5 9 7.72386 9 8V14C9 14.2761 8.77614 14.5 8.5 14.5C8.22386 14.5 8 14.2761 8 14V8C8 7.72386 8.22386 7.5 8.5 7.5ZM12 8C12 7.72386 11.7761 7.5 11.5 7.5C11.2239 7.5 11 7.72386 11 8V14C11 14.2761 11.2239 14.5 11.5 14.5C11.7761 14.5 12 14.2761 12 14V8Z" fill="currentColor"/>
        </svg>
    `;case s.Add:return a.qy`
        <svg width="16" height="15" viewBox="0 0 16 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.39563 0.5C8.39563 0.223858 8.17177 0 7.89563 0C7.61949 0 7.39563 0.223858 7.39563 0.5V7H0.89563C0.619487 7 0.39563 7.22386 0.39563 7.5C0.39563 7.77614 0.619487 8 0.89563 8H7.39563V14.5C7.39563 14.7761 7.61949 15 7.89563 15C8.17177 15 8.39563 14.7761 8.39563 14.5V8H14.8956C15.1718 8 15.3956 7.77614 15.3956 7.5C15.3956 7.22386 15.1718 7 14.8956 7H8.39563V0.5Z" fill="${E}"/>
        </svg>`;case s.Calendar:return a.qy`
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 11C7.55228 11 8 10.5523 8 10C8 9.44771 7.55228 9 7 9C6.44772 9 6 9.44771 6 10C6 10.5523 6.44772 11 7 11ZM8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44771 10.5523 9 10 9C9.44771 9 9 9.44771 9 10C9 10.5523 9.44771 11 10 11ZM11 13C11 13.5523 10.5523 14 10 14C9.44771 14 9 13.5523 9 13C9 12.4477 9.44771 12 10 12C10.5523 12 11 12.4477 11 13ZM13 11C13.5523 11 14 10.5523 14 10C14 9.44771 13.5523 9 13 9C12.4477 9 12 9.44771 12 10C12 10.5523 12.4477 11 13 11ZM17 5.5C17 4.11929 15.8807 3 14.5 3H5.5C4.11929 3 3 4.11929 3 5.5V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V5.5ZM4 7H16V14.5C16 15.3284 15.3284 16 14.5 16H5.5C4.67157 16 4 15.3284 4 14.5V7ZM5.5 4H14.5C15.3284 4 16 4.67157 16 5.5V6H4V5.5C4 4.67157 4.67157 4 5.5 4Z" fill=${E}/>
        </svg>
    `;case s.Planner:return a.qy`
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5Zm1.75 5.5h-15v9.25c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V8.5Zm-11.75 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm-4.25-4a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm1.5-6H6.25A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75Z" fill="${E}"/>
        </svg>`;case s.Milestone:return a.qy`
        <svg width="24" height="24" fill="${E}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.25 13c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 15.25 21H3.75A1.75 1.75 0 0 1 2 19.25v-4.5c0-.966.783-1.75 1.75-1.75h11.5ZM21 14.899v5.351a.75.75 0 0 1-1.494.102l-.006-.102v-5.338a3.006 3.006 0 0 0 1.5-.013Zm-5.75-.399H3.75a.25.25 0 0 0-.25.25v4.5c0 .138.111.25.25.25h11.5a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25Zm5-4.408a1.908 1.908 0 1 1 0 3.816 1.908 1.908 0 0 1 0-3.816ZM15.244 3c.967 0 1.75.784 1.75 1.75v4.5a1.75 1.75 0 0 1-1.75 1.75h-11.5a1.75 1.75 0 0 1-1.75-1.75v-4.5a1.75 1.75 0 0 1 1.607-1.744L3.745 3h11.5Zm0 1.5h-11.5l-.057.007a.25.25 0 0 0-.193.243v4.5c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25ZM20.25 3a.75.75 0 0 1 .743.648L21 3.75v5.351a3.004 3.004 0 0 0-1.5-.013V3.75a.75.75 0 0 1 .75-.75Z" fill="${E}"/>
        </svg>`;case s.PersonAdd:return a.qy`
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="svg" fill="currentColor">
          <path d="M9 2a4 4 0 100 8 4 4 0 000-8zM6 6a3 3 0 116 0 3 3 0 01-6 0z"></path>
          <path d="M4 11a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 009 18c.41 0 .82-.02 1.21-.06A5.5 5.5 0 019.6 17 12 12 0 019 17a8.16 8.16 0 01-4.33-1.05A3.36 3.36 0 013 13a1 1 0 011-1h5.6c.18-.36.4-.7.66-1H4z"></path>
          <path d="M14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 010 1H15v1.5a.5.5 0 01-1 0V15h-1.5a.5.5 0 010-1H14v-1.5c0-.28.22-.5.5-.5z"></path>
        </svg>`;case s.Event:return a.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.75 3C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45507 3 6.25 3H17.75ZM19.5 8.5H4.5V17.75C4.5 18.7165 5.2835 19.5 6.25 19.5H17.75C18.7165 19.5 19.5 18.7165 19.5 17.75V8.5ZM7.75 14.5C8.44036 14.5 9 15.0596 9 15.75C9 16.4404 8.44036 17 7.75 17C7.05964 17 6.5 16.4404 6.5 15.75C6.5 15.0596 7.05964 14.5 7.75 14.5ZM12 14.5C12.6904 14.5 13.25 15.0596 13.25 15.75C13.25 16.4404 12.6904 17 12 17C11.3096 17 10.75 16.4404 10.75 15.75C10.75 15.0596 11.3096 14.5 12 14.5ZM7.75 10.5C8.44036 10.5 9 11.0596 9 11.75C9 12.4404 8.44036 13 7.75 13C7.05964 13 6.5 12.4404 6.5 11.75C6.5 11.0596 7.05964 10.5 7.75 10.5ZM12 10.5C12.6904 10.5 13.25 11.0596 13.25 11.75C13.25 12.4404 12.6904 13 12 13C11.3096 13 10.75 12.4404 10.75 11.75C10.75 11.0596 11.3096 10.5 12 10.5ZM16.25 10.5C16.9404 10.5 17.5 11.0596 17.5 11.75C17.5 12.4404 16.9404 13 16.25 13C15.5596 13 15 12.4404 15 11.75C15 11.0596 15.5596 10.5 16.25 10.5ZM17.75 4.5H6.25C5.2835 4.5 4.5 5.2835 4.5 6.25V7H19.5V6.25C19.5 5.2835 18.7165 4.5 17.75 4.5Z" fill="none" />
        </svg>
      `;case s.BookOpen:return a.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19.1375C11.4986 19.6686 10.788 20 10 20H3.75C2.7835 20 2 19.2165 2 18.25V5.75C2 4.7835 2.7835 4 3.75 4H10C10.788 4 11.4986 4.33145 12 4.86253C12.5014 4.33145 13.212 4 14 4H20.25C21.2165 4 22 4.7835 22 5.75V18.25C22 19.2165 21.2165 20 20.25 20H14C13.212 20 12.5014 19.6686 12 19.1375ZM3.5 5.75V18.25C3.5 18.3881 3.61193 18.5 3.75 18.5H10C10.6904 18.5 11.25 17.9404 11.25 17.25V6.75C11.25 6.05964 10.6904 5.5 10 5.5H3.75C3.61193 5.5 3.5 5.61193 3.5 5.75ZM12.75 17.25C12.75 17.9404 13.3096 18.5 14 18.5H20.25C20.3881 18.5 20.5 18.3881 20.5 18.25V5.75C20.5 5.61193 20.3881 5.5 20.25 5.5H14C13.3096 5.5 12.75 6.05964 12.75 6.75V17.25Z" fill="none" />
        </svg>
      `;case s.FileOuter:return a.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 2C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V9.82777C20 9.29733 19.7893 8.78863 19.4142 8.41355L13.5864 2.58579C13.2114 2.21071 12.7027 2 12.1722 2H6ZM5.5 4C5.5 3.72386 5.72386 3.5 6 3.5H12V8C12 9.10457 12.8954 10 14 10H18.5V20C18.5 20.2761 18.2761 20.5 18 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V4ZM17.3793 8.5H14C13.7239 8.5 13.5 8.27614 13.5 8V4.62066L17.3793 8.5Z" fill="none" />
        </svg>
      `;case s.BookQuestion:return a.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.9998 8.01752C10.9905 8.42363 10.6584 8.74999 10.25 8.74999C9.5 8.74999 9.5 7.9989 9.5 7.9989L9.5 7.99777L9.50001 7.99539L9.50006 7.99017C9.50032 7.9755 9.50072 7.96084 9.50144 7.94618C9.50262 7.92198 9.50473 7.89159 9.50846 7.8559C9.51591 7.78477 9.52996 7.69092 9.55665 7.58186C9.60973 7.36492 9.71565 7.07652 9.92848 6.78906C10.3825 6.17582 11.1982 5.72727 12.513 5.7501C13.4627 5.76659 14.3059 6.16497 14.834 6.82047C15.371 7.48704 15.5517 8.3902 15.1964 9.27853C14.8342 10.1839 14.0149 10.5437 13.5442 10.7503L13.4932 10.7728C13.2147 10.8957 13.0813 10.9599 13.0013 11.024L13 11.0251L13 11.7492C13.0001 12.1634 12.6643 12.4999 12.2501 12.5C11.8359 12.5 11.5001 12.1643 11.5 11.7501L11.5 11C11.5 10.4769 11.752 10.1029 12.0633 9.85345C12.3134 9.65303 12.6276 9.51483 12.8491 9.4174L12.8875 9.40049C13.4292 9.16137 13.6868 9.01346 13.8036 8.72145C13.9483 8.35977 13.8789 8.02596 13.6659 7.76153C13.4439 7.48604 13.0371 7.25943 12.487 7.24988C11.5518 7.23364 11.2425 7.53509 11.134 7.68162C11.0656 7.77404 11.0309 7.86797 11.0137 7.93838C11.0052 7.973 11.0017 7.99908 11.0003 8.01197L10.9998 8.01752ZM12.25 15.5C12.8023 15.5 13.25 15.0523 13.25 14.5C13.25 13.9477 12.8023 13.5 12.25 13.5C11.6977 13.5 11.25 13.9477 11.25 14.5C11.25 15.0523 11.6977 15.5 12.25 15.5ZM4 4.5C4 3.11929 5.11929 2 6.5 2H18C19.3807 2 20.5 3.11929 20.5 4.5V18.75C20.5 19.1642 20.1642 19.5 19.75 19.5H5.5C5.5 20.0523 5.94772 20.5 6.5 20.5H19.75C20.1642 20.5 20.5 20.8358 20.5 21.25C20.5 21.6642 20.1642 22 19.75 22H6.5C5.11929 22 4 20.8807 4 19.5V4.5ZM5.5 4.5V18H19V4.5C19 3.94772 18.5523 3.5 18 3.5H6.5C5.94772 3.5 5.5 3.94772 5.5 4.5Z" fill="none" />
        </svg>
      `;case s.Globe:return a.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0001 1.99805C17.5238 1.99805 22.0016 6.47589 22.0016 11.9996C22.0016 17.5233 17.5238 22.0011 12.0001 22.0011C6.47638 22.0011 1.99854 17.5233 1.99854 11.9996C1.99854 6.47589 6.47638 1.99805 12.0001 1.99805ZM14.939 16.4993H9.06118C9.71322 18.9135 10.8466 20.5011 12.0001 20.5011C13.1536 20.5011 14.2869 18.9135 14.939 16.4993ZM7.5084 16.4999L4.78591 16.4998C5.74425 18.0328 7.1777 19.2384 8.88008 19.9104C8.3578 19.0906 7.92681 18.0643 7.60981 16.8949L7.5084 16.4999ZM19.2143 16.4998L16.4918 16.4999C16.168 17.8337 15.7004 18.9995 15.119 19.9104C16.716 19.2804 18.0757 18.1814 19.0291 16.7833L19.2143 16.4998ZM7.09351 9.99895H3.7359L3.73115 10.0162C3.57906 10.6525 3.49854 11.3166 3.49854 11.9996C3.49854 13.0558 3.69112 14.0669 4.0431 14.9999L7.21626 14.9995C7.07396 14.0504 6.99854 13.0422 6.99854 11.9996C6.99854 11.3156 7.031 10.6464 7.09351 9.99895ZM15.397 9.99901H8.60316C8.53514 10.6393 8.49853 11.309 8.49853 11.9996C8.49853 13.0591 8.58468 14.0694 8.73827 14.9997H15.2619C15.4155 14.0694 15.5016 13.0591 15.5016 11.9996C15.5016 11.309 15.465 10.6393 15.397 9.99901ZM20.2647 9.99811L16.9067 9.99897C16.9692 10.6464 17.0016 11.3156 17.0016 11.9996C17.0016 13.0422 16.9262 14.0504 16.7839 14.9995L19.9571 14.9999C20.309 14.0669 20.5016 13.0558 20.5016 11.9996C20.5016 11.3102 20.4196 10.64 20.2647 9.99811ZM8.88114 4.08875L8.85823 4.09747C6.81092 4.91218 5.1549 6.49949 4.25023 8.49935L7.29835 8.49972C7.61171 6.74693 8.15855 5.221 8.88114 4.08875ZM12.0001 3.49805L11.8844 3.50335C10.619 3.6191 9.39651 5.62107 8.8288 8.4993H15.1714C14.6052 5.62914 13.388 3.63033 12.1264 3.50436L12.0001 3.49805ZM15.1201 4.08881L15.2269 4.2629C15.8961 5.37537 16.4043 6.83525 16.7018 8.49972L19.7499 8.49935C18.8853 6.58795 17.3343 5.05341 15.4113 4.21008L15.1201 4.08881Z" />
        </svg>
      `;case s.PresenceAvailable:return a.qy`
        <svg fill="#13a10e" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10Zm2.1-5.9L4.85 6.35a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.9-1.9a.5.5 0 0 1 .7.71Z" fill="#13a10e"></path>
        </svg>`;case s.PresenceOofAvailable:return a.qy`
        <svg fill="#13a10e" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0ZM1 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm6.1-1.6c.2.2.2.5 0 .7L4.85 6.35a.5.5 0 0 1-.7 0l-1-1a.5.5 0 1 1 .7-.7l.65.64 1.9-1.9c.2-.19.5-.19.7 0Z" fill="#13a10e"></path>
        </svg>`;case s.PresenceBusy:return a.qy`
        <svg fill="#d13438" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 5A5 5 0 1 1 0 5a5 5 0 0 1 10 0Z" fill="#d13438"></path>
        </svg>`;case s.PresenceOofBusy:return a.qy`
        <svg fill="#d13438" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM0 5a5 5 0 1 1 10 0A5 5 0 0 1 0 5Z" fill="#d13438"></path>
        </svg>
      `;case s.PresenceDnd:return a.qy`
        <svg fill="#d13438" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10ZM3.5 4.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Z" fill="#d13438"></path>
        </svg>`;case s.PresenceOofDnd:return a.qy`
        <svg fill="#d13438" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0ZM1 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm2 0c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 3 5Z" fill="#d13438"></path>
        </svg>`;case s.PresenceAway:return a.qy`
        <svg fill="#eaa300" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10Zm0-7v1.8l1.35 1.35a.5.5 0 1 1-.7.7l-1.5-1.5A.5.5 0 0 1 4 5V3a.5.5 0 0 1 1 0Z" fill="#eaa300"></path>
        </svg>`;case s.PresenceOofAway:return a.qy`
        <svg fill="#c239b3" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.35 3.85a.5.5 0 1 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7L4.7 5.5h1.8a.5.5 0 1 0 0-1H4.7l.65-.65ZM5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0ZM1 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" fill="#c239b3"></path>
        </svg>`;case s.PresenceOffline:return a.qy`
        <svg fill="#929292" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.85 3.15c.2.2.2.5 0 .7L5.71 5l1.14 1.15a.5.5 0 1 1-.7.7L5 5.71 3.85 6.85a.5.5 0 1 1-.7-.7L4.29 5 3.15 3.85a.5.5 0 1 1 .7-.7L5 4.29l1.15-1.14c.2-.2.5-.2.7 0ZM0 5a5 5 0 1 1 10 0A5 5 0 0 1 0 5Zm5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" fill="#929292"></path>
        </svg>`;case s.PresenceStatusUnknown:return a.qy`
        <svg fill="#d13438" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM0 5a5 5 0 1 1 10 0A5 5 0 0 1 0 5Z" fill="#d13438"></path>
        </svg>`}}},3173:(rt,pe,h)=>{h.d(pe,{B9:()=>W,Gp:()=>y,Sk:()=>B,aX:()=>R,ez:()=>Q,h3:()=>s,jD:()=>re,jE:()=>ve,sg:()=>S,wJ:()=>I,x8:()=>X,z3:()=>H});var a=h(2404);const s=oe=>{const de=new Date,z=new Date(de.getFullYear(),de.getMonth(),de.getDate());if(oe>=z)return oe.toLocaleString("default",{hour:"numeric",minute:"numeric"});const $=new Date(z);if($.setDate(de.getDate()-de.getDay()),oe>=$)return oe.toLocaleString("default",{hour:"numeric",minute:"numeric",weekday:"short"});const Y=new Date($);return Y.setDate($.getDate()-7),oe.toLocaleString("default",oe>=Y?{day:"numeric",month:"numeric",weekday:"short"}:{day:"numeric",month:"numeric",year:"numeric"})},y=oe=>{const de=oe.getMonth(),z=oe.getDate();return`${E(de)} ${z}`},E=oe=>{switch(oe){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December";default:return"Month"}},S=(oe,de)=>{let z;return function(){window.clearTimeout(z),z=window.setTimeout(()=>oe.apply(this,arguments),de)}},B=oe=>new Promise((de,z)=>{const $=new FileReader;$.onerror=z,$.onload=()=>{de($.result)},$.readAsDataURL(oe)}),R=oe=>oe.startsWith("[")?oe.match(/([a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi).toString():oe,W=oe=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(oe),H=(oe,de=2)=>{if(0===oe)return"0 Bytes";const $=de<0?0:de,te=Math.floor(Math.log(oe)/Math.log(1024));return`${parseFloat((oe/Math.pow(1024,te)).toFixed($))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][te]}`},Q=oe=>(oe&&(oe=oe?.replace(/<ddd\/>/gi,"..."),oe=oe?.replace(/<c0>/gi,"<b>"),oe=oe?.replace(/<\/c0>/gi,"</b>")),oe),I=oe=>oe?.replace(/\.[^/.]+$/,""),X=oe=>new URL(oe).pathname.split("/").pop().replace(/-/g," "),re=oe=>oe||a._.config.response.invalidationPeriod||a._.config.defaultInvalidationPeriod,ve=()=>a._.config.response.isEnabled&&a._.config.isEnabled},2657:(rt,pe,h)=>{h.d(pe,{yl:()=>G}),Error;var G=function(Te){return Te.ARRAYBUFFER="arraybuffer",Te.BLOB="blob",Te.DOCUMENT="document",Te.JSON="json",Te.RAW="raw",Te.STREAM="stream",Te.TEXT="text",Te}(G||{});Error},5941:(rt,pe,h)=>{h.d(pe,{I:()=>a,z:()=>s});const a="https://graph.microsoft.com",s=new Set([a,"https://graph.microsoft.us","https://dod-graph.microsoft.us","https://graph.microsoft.de","https://microsoftgraph.chinacloudapi.cn","https://canary.graph.microsoft.com"])},9451:(rt,pe,h)=>{h.d(pe,{D:()=>R,I:()=>B});var a=h(8324),s=h(9559),x=h(6885),y=h(4709),E=h(407),O=h(1212),_=function(W,H,Q,I){var ve,X=arguments.length,re=X<3?H:null===I?I=Object.getOwnPropertyDescriptor(H,Q):I;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)re=Reflect.decorate(W,H,Q,I);else for(var oe=W.length-1;oe>=0;oe--)(ve=W[oe])&&(re=(X<3?ve(re):X>3?ve(H,Q,re):ve(H,Q))||re);return X>3&&re&&Object.defineProperty(H,Q,re),re},b=function(W,H){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(W,H)},S=function(W,H,Q,I){return new(Q||(Q=Promise))(function(re,ve){function oe($){try{z(I.next($))}catch(Y){ve(Y)}}function de($){try{z(I.throw($))}catch(Y){ve(Y)}}function z($){$.done?re($.value):function X(re){return re instanceof Q?re:new Q(function(ve){ve(re)})}($.value).then(oe,de)}z((I=I.apply(W,H||[])).next())})},B=function(W){return W.mobile="",W.tablet="tablet",W.desktop="desktop",W}(B||{});let R=(()=>{class W extends a.WF{static get packageVersion(){return O.i}get mediaQuery(){return this.offsetWidth<768?B.mobile:this.offsetWidth<1200?B.tablet:B.desktop}get isLoadingState(){return this._isLoadingState}get isFirstUpdated(){return this._isFirstUpdated}get strings(){return{}}constructor(){super(),this.providerState=x.HJ.Loading,this.direction="ltr",this._isLoadingState=!1,this._isFirstUpdated=!1,this.setLoadingState=Q=>{this._isLoadingState!==Q&&(this._isLoadingState=Q,this.requestUpdate("isLoadingState"))},this.handleProviderUpdates=()=>{var Q,I;this.providerState=null!==(I=null===(Q=y.b.globalProvider)||void 0===Q?void 0:Q.state)&&void 0!==I?I:x.HJ.Loading,this.requestStateUpdate()},this.handleActiveAccountUpdates=()=>{this.clearState(),this.requestStateUpdate()},this.handleLocalizationChanged=()=>{E.w.updateStringsForTag(this.tagName,this.strings),this.requestUpdate()},this.handleDirectionChanged=()=>{this.direction=E.w.getDocumentDirection()},this.handleDirectionChanged(),this.handleLocalizationChanged()}connectedCallback(){super.connectedCallback(),E.w.onStringsUpdated(this.handleLocalizationChanged),E.w.onDirectionUpdated(this.handleDirectionChanged)}disconnectedCallback(){super.disconnectedCallback(),E.w.removeOnStringsUpdated(this.handleLocalizationChanged),E.w.removeOnDirectionUpdated(this.handleDirectionChanged),y.b.removeProviderUpdatedListener(this.handleProviderUpdates),y.b.removeActiveAccountChangedListener(this.handleActiveAccountUpdates)}firstUpdated(Q){super.firstUpdated(Q),this._isFirstUpdated=!0,y.b.onProviderUpdated(this.handleProviderUpdates),y.b.onActiveAccountChanged(this.handleActiveAccountUpdates),this.requestStateUpdate()}loadState(){return Promise.resolve()}clearState(){}fireCustomEvent(Q,I,X=!1,re=!1,ve=!1){const oe=new CustomEvent(Q,{bubbles:X,cancelable:re,composed:ve,detail:I});return this.dispatchEvent(oe)}updated(Q){super.updated(Q);const I=new CustomEvent("updated",{bubbles:!0,cancelable:!0});this.dispatchEvent(I)}requestStateUpdate(Q=!1){return S(this,void 0,void 0,function*(){if(!this._isFirstUpdated)return;this.isLoadingState&&!Q&&(yield this._currentLoadStatePromise);const I=y.b.globalProvider;if(!I)return Promise.resolve();if(I.state!==x.HJ.SignedOut){if(I.state===x.HJ.Loading)return Promise.resolve();{const X=new Promise((re,ve)=>S(this,void 0,void 0,function*(){try{this.setLoadingState(!0),this.fireCustomEvent("loadingInitiated"),yield this.loadState(),this.setLoadingState(!1),this.fireCustomEvent("loadingCompleted"),re()}catch(oe){this.clearState(),this.setLoadingState(!1),this.fireCustomEvent("loadingFailed"),ve(oe)}return this._currentLoadStatePromise=this.isLoadingState&&this._currentLoadStatePromise&&Q?this._currentLoadStatePromise.then(()=>X):X}))}}else this.clearState()})}}return _([(0,s.wk)(),b("design:type",Number)],W.prototype,"providerState",void 0),_([(0,s.wk)(),b("design:type",String)],W.prototype,"direction",void 0),W})()},5260:(rt,pe,h)=>{h.d(pe,{S:()=>W});var a=h(9714),s=h(8324),x=h(9559),y=h(6885),E=h(4709),O=h(407),_=h(1212),b=h(9451),S=function(H,Q,I,X){var oe,re=arguments.length,ve=re<3?Q:null===X?X=Object.getOwnPropertyDescriptor(Q,I):X;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)ve=Reflect.decorate(H,Q,I,X);else for(var de=H.length-1;de>=0;de--)(oe=H[de])&&(ve=(re<3?oe(ve):re>3?oe(Q,I,ve):oe(Q,I))||ve);return re>3&&ve&&Object.defineProperty(Q,I,ve),ve},B=function(H,Q){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(H,Q)};let W=(()=>{class H extends s.WF{static get packageVersion(){return _.i}get mediaQuery(){return this.offsetWidth<768?b.I.mobile:this.offsetWidth<1200?b.I.tablet:b.I.desktop}get isFirstUpdated(){return this._isFirstUpdated}get strings(){return{}}constructor(){super(),this.providerState=y.HJ.Loading,this.direction="ltr",this._isFirstUpdated=!1,this._task=new a.YZ(this,{task:()=>this.loadState(),args:()=>this.args()}),this.renderLoading=()=>s.qy`<span>Loading...</span>`,this.renderError=I=>s.qy`<p>Error: ${I}</p>`,this.renderContent=()=>s.qy`<!-- baseTaskComponent, please implement renderContent -->`,this.handleProviderUpdates=()=>{var I,X;this.providerState=null!==(X=null===(I=E.b.globalProvider)||void 0===I?void 0:I.state)&&void 0!==X?X:y.HJ.Loading},this.handleActiveAccountUpdates=()=>{this.clearState()},this.handleLocalizationChanged=()=>{O.w.updateStringsForTag(this.tagName,this.strings),this.requestUpdate()},this.handleDirectionChanged=()=>{this.direction=O.w.getDocumentDirection()},this.handleDirectionChanged(),this.handleLocalizationChanged()}connectedCallback(){super.connectedCallback(),O.w.onStringsUpdated(this.handleLocalizationChanged),O.w.onDirectionUpdated(this.handleDirectionChanged)}disconnectedCallback(){super.disconnectedCallback(),O.w.removeOnStringsUpdated(this.handleLocalizationChanged),O.w.removeOnDirectionUpdated(this.handleDirectionChanged),E.b.removeProviderUpdatedListener(this.handleProviderUpdates),E.b.removeActiveAccountChangedListener(this.handleActiveAccountUpdates)}firstUpdated(I){super.firstUpdated(I),this._isFirstUpdated=!0,E.b.onProviderUpdated(this.handleProviderUpdates),E.b.onActiveAccountChanged(this.handleActiveAccountUpdates)}clearState(){}fireCustomEvent(I,X,re=!1,ve=!1,oe=!1){const de=new CustomEvent(I,{bubbles:re,cancelable:ve,composed:oe,detail:X});return this.dispatchEvent(de)}updated(I){super.updated(I),this.fireCustomEvent("updated",void 0,!0,!1)}loadState(){return function(H,Q,I,X){return new(I||(I=Promise))(function(ve,oe){function de(Y){try{$(X.next(Y))}catch(te){oe(te)}}function z(Y){try{$(X.throw(Y))}catch(te){oe(te)}}function $(Y){Y.done?ve(Y.value):function re(ve){return ve instanceof I?ve:new I(function(oe){oe(ve)})}(Y.value).then(de,z)}$((X=X.apply(H,Q||[])).next())})}(this,void 0,void 0,function*(){return Promise.resolve()})}args(){return[this.providerState]}render(){return this._task.render({pending:this.renderLoading,complete:this.renderContent,error:this.renderError})}}return S([(0,x.wk)(),B("design:type",Number)],H.prototype,"providerState",void 0),S([(0,x.wk)(),B("design:type",String)],H.prototype,"direction",void 0),H})()},5794:(rt,pe,h)=>{h.d(pe,{U:()=>s});const s=new class a{constructor(){this._disambiguation=""}get defaultPrefix(){return"mgt"}withDisambiguation(y){return y&&!this._disambiguation&&(this._disambiguation=y.toLowerCase(),y!==this._disambiguation&&console.warn(`\u{1f992}: Disambiguation value, ${y}, should be lowercase. Value has been converted to lowercase, ${this._disambiguation}.`)),this}get prefix(){return this._disambiguation?`${this.defaultPrefix}-${this._disambiguation}`:this.defaultPrefix}get disambiguation(){return this._disambiguation}get isDisambiguated(){return!!this._disambiguation}normalize(y){return this.isDisambiguated?y.toUpperCase().replace(this.prefix.toUpperCase(),this.defaultPrefix.toUpperCase()):y}}},2578:(rt,pe,h)=>{h.d(pe,{N:()=>b});var a=h(9559),s=h(8324),x=h(1235);let y=(()=>{class S{static renderTemplate(R,W,H){var Q;let I;if(W.$parentTemplateContext&&(H=Object.assign(Object.assign({},H),{$parent:W.$parentTemplateContext})),null!==(Q=W.content)&&void 0!==Q&&Q.childNodes.length){const X=W.content.cloneNode(!0);I=this.renderNode(X,R,H)}else if(W.childNodes.length){const X=document.createElement("div");for(const re of W.childNodes)X.appendChild(this.simpleCloneNode(re));I=this.renderNode(X,R,H)}I&&R.appendChild(I)}static setBindingSyntax(R,W){this._startExpression=R,this._endExpression=W;const H=this.escapeRegex(this._startExpression),Q=this.escapeRegex(this._endExpression);this._expression=new RegExp(`${H}\\s*([$\\w\\.,'"\\s()\\[\\]]+)\\s*${Q}`,"g")}static get globalContext(){return this._globalContext}static get expression(){return this._expression||this.setBindingSyntax("{{","}}"),this._expression}static escapeRegex(R){return R.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}static simpleCloneNode(R){if(!R)return null;const W=R.cloneNode(!1);for(const H of R.childNodes){const Q=this.simpleCloneNode(H);Q&&W.appendChild(Q)}return W}static expandExpressionsAsString(R,W){return R.replace(this.expression,(H,Q)=>{const I=this.evalInContext(Q||this.trimExpression(H),W);return I?"object"==typeof I?JSON.stringify(I):I.toString():""})}static renderNode(R,W,H){if("#text"===R.nodeName)return R.textContent=this.expandExpressionsAsString(R.textContent,H),R;if("TEMPLATE"===R.nodeName)return R.$parentTemplateContext=H,R;const Q=R;if(Q.attributes)for(const ve of Q.attributes)if("data-props"===ve.name){const oe=this.trimExpression(ve.value);for(const de of oe.split(",")){const z=de.trim().split(":");if(2===z.length){const $=z[0].trim(),Y=this.evalInContext(z[1].trim(),H);$.startsWith("@")?"function"==typeof Y&&Q.addEventListener($.substring(1),te=>Y(te,H,W)):Q[$]=Y}}}else Q.setAttribute(ve.name,this.expandExpressionsAsString(ve.value,H));const I=[],X=[];let re=!1;for(const ve of R.childNodes){const oe=ve;let de=!1;if(oe.dataset){let z=!1;oe.dataset.if?this.evalBoolInContext(this.trimExpression(oe.dataset.if),H)?(oe.removeAttribute("data-if"),re=!0,de=!0):(X.push(oe),z=!0):typeof oe.dataset.else<"u"&&(re?(X.push(oe),z=!0):oe.removeAttribute("data-else")),oe.dataset.for&&!z?I.push(oe):z||this.renderNode(ve,W,H)}else this.renderNode(ve,W,H);!de&&"#text"!==ve.nodeName&&(re=!1)}for(const ve of X)Q.removeChild(ve);for(const ve of I){const de=this.trimExpression(ve.dataset.for).split(/\s(in|of)\s/i);if(3===de.length){const z=de[0].trim(),$=de[2].trim(),Y=this.evalInContext($,H);if(Array.isArray(Y)){ve.removeAttribute("data-for");for(let te=0;te<Y.length;te++){const j=Object.assign({$index:te},H);j[z]=Y[te];const le=ve.cloneNode(!0);this.renderNode(le,W,j),Q.insertBefore(le,ve)}}Q.removeChild(ve)}}return R}static evalBoolInContext(R,W){return W=Object.assign(Object.assign({},W),this.globalContext),new Function("with(this) { return !!("+R+")}").call(W)}static evalInContext(R,W){W=Object.assign(Object.assign({},W),this.globalContext);const H=new Function("with(this) { return "+R+";}");let Q;try{Q=H.call(W)}catch{}return Q}static trimExpression(R){return(R=R.trim()).startsWith(this._startExpression)&&R.endsWith(this._endExpression)&&(R=(R=R.substr(this._startExpression.length,R.length-this._startExpression.length-this._endExpression.length)).trim()),R}}return S._globalContext={},S})();var E=h(5260),O=function(S,B,R,W){var I,H=arguments.length,Q=H<3?B:null===W?W=Object.getOwnPropertyDescriptor(B,R):W;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Q=Reflect.decorate(S,B,R,W);else for(var X=S.length-1;X>=0;X--)(I=S[X])&&(Q=(H<3?I(Q):H>3?I(B,R,Q):I(B,R))||Q);return H>3&&Q&&Object.defineProperty(B,R,Q),Q},_=function(S,B){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(S,B)};let b=(()=>{class S extends E.S{constructor(){super(),this.templates={},this._renderedSlots=!1,this._renderedTemplates={},this._slotNamesAddedDuringRender=[],this.renderLoading=()=>this.renderTemplate("loading",null)||s.qy``,this.renderError=R=>this.hasTemplate("error")?this.renderTemplate("error",R):s.qy`
      <div class="error">
        ${R}
      </div>
    `,this.templateContext=this.templateContext||{}}update(R){this.templates=this.getTemplates(),this._slotNamesAddedDuringRender=[],super.update(R)}updated(R){super.updated(R),this.removeUnusedSlottedElements()}renderTemplate(R,W,H){if(!this.hasTemplate(R))return null;this._slotNamesAddedDuringRender.push(H=H||R),this._renderedSlots=!0;const Q=s.qy`
      <slot name=${H}></slot>
    <span
        part="end"
        ${(0,s.K)("endContainer")}
        class=${B=>S.end?"end":void 0}
    >
        <slot name="end" ${(0,s.K)("end")} @slotchange="${B=>B.handleEndContentChange()}">
            ${S.end||""}
        </slot>
    </span>
`,E=(b,S)=>a.q`
    <span
        part="start"
        ${(0,s.K)("startContainer")}
        class="${B=>S.start?"start":void 0}"
    >
        <slot
            name="start"
            ${(0,s.K)("start")}
            @slotchange="${B=>B.handleStartContentChange()}"
        >
            ${S.start||""}
        </slot>
    </span>
`,O=a.q`
    <span part="end" ${(0,s.K)("endContainer")}>
        <slot
            name="end"
            ${(0,s.K)("end")}
            @slotchange="${b=>b.handleEndContentChange()}"
        ></slot>
    </span>
`,_=a.q`
    <span part="start" ${(0,s.K)("startContainer")}>
        <slot
            name="start"
            ${(0,s.K)("start")}
            @slotchange="${b=>b.handleStartContentChange()}"
        ></slot>
    </span>
`},862:(rt,pe,h)=>{h.d(pe,{z:()=>E});var a=h(742),s=h(9808),x=h(4192),y=h(4632);let E=(()=>{class O extends y.g{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const b="number"==typeof this.min?this.min:0,R=("number"==typeof this.max?this.max:100)-b;this.percentComplete=0===R?0:Math.fround((("number"==typeof this.value?this.value:0)-b)/R*100)}}return(0,a.Cg)([(0,s.CF)({converter:s.R$})],O.prototype,"value",void 0),(0,a.Cg)([(0,s.CF)({converter:s.R$})],O.prototype,"min",void 0),(0,a.Cg)([(0,s.CF)({converter:s.R$})],O.prototype,"max",void 0),(0,a.Cg)([(0,s.CF)({mode:"boolean"})],O.prototype,"paused",void 0),(0,a.Cg)([x.sH],O.prototype,"percentComplete",void 0),O})()},6105:(rt,pe,h)=>{h.d(pe,{X:()=>s});var a=h(9808);function s(x,...y){const E=a.$u.locate(x);y.forEach(O=>{Object.getOwnPropertyNames(O.prototype).forEach(b=>{"constructor"!==b&&Object.defineProperty(x.prototype,b,Object.getOwnPropertyDescriptor(O.prototype,b))}),a.$u.locate(O).forEach(b=>E.push(b))})}},4645:(rt,pe,h)=>{function a(s){const x=s.parentElement;if(x)return x;{const y=s.getRootNode();if(y.host instanceof HTMLElement)return y.host}return null}h.d(pe,{Z:()=>a})},4954:(rt,pe,h)=>{h.d(pe,{mr:()=>x});class a{constructor(_){this.listenerCache=new WeakMap,this.query=_}bind(_){const{query:b}=this,S=this.constructListener(_);S.bind(b)(),b.addListener(S),this.listenerCache.set(_,S)}unbind(_){const b=this.listenerCache.get(_);b&&(this.query.removeListener(b),this.listenerCache.delete(_))}}class s extends a{constructor(_,b){super(_),this.styles=b}static with(_){return b=>new s(_,b)}constructListener(_){let b=!1;const S=this.styles;return function(){const{matches:R}=this;R&&!b?(_.$fastController.addStyles(S),b=R):!R&&b&&(_.$fastController.removeStyles(S),b=R)}}unbind(_){super.unbind(_),_.$fastController.removeStyles(this.styles)}}const x=s.with(window.matchMedia("(forced-colors)"));s.with(window.matchMedia("(prefers-color-scheme: dark)")),s.with(window.matchMedia("(prefers-color-scheme: light)"))},5778:(rt,pe,h)=>{h.d(pe,{Z:()=>a});const a="not-allowed"},8322:(rt,pe,h)=>{h.d(pe,{V:()=>s});const a=":host([hidden]){display:none}";function s(x){return`${a}:host{display:${x}}`}},4932:(rt,pe,h)=>{h.d(pe,{N:()=>s});const s=(0,h(9482).UA)()?"focus-visible":"focus"},7412:(rt,pe,h)=>{function a(s,x,y){return s.nodeType!==Node.TEXT_NODE||"string"==typeof s.nodeValue&&!!s.nodeValue.trim().length}h.d(pe,{g:()=>a})},9482:(rt,pe,h)=>{function s(...H){return H.every(Q=>Q instanceof HTMLElement)}function x(H,Q){return H&&Q&&s(H)?Array.from(H.querySelectorAll(Q)).filter(X=>null!==X.offsetParent):void 0}let O;function _(){if("boolean"==typeof O)return O;if(!function a(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}())return O=!1,O;const H=document.createElement("style"),Q=function E(){const H=document.querySelector('meta[property="csp-nonce"]');return H?H.getAttribute("content"):null}();null!==Q&&H.setAttribute("nonce",Q),document.head.appendChild(H);try{H.sheet.insertRule("foo:focus-visible {color:inherit}",0),O=!0}catch{O=!1}finally{document.head.removeChild(H)}return O}h.d(pe,{UA:()=>_,JL:()=>x,sb:()=>s})},7153:(rt,pe,h)=>{h.d(pe,{Ac:()=>pt,F9:()=>Ii,FM:()=>Xi,HX:()=>Ln,I5:()=>Qn,Is:()=>ni,J9:()=>Kt,Mm:()=>Nn,Tg:()=>un,bb:()=>ti,f_:()=>Et,gG:()=>gt,kT:()=>Pn,oK:()=>qe});const Ln="ArrowDown",Pn="ArrowLeft",ti="ArrowRight",Qn="ArrowUp",Nn="Enter",Ii="Escape",un="Home",Xi="End",pt="F2",Et="PageDown",qe="PageUp",gt=" ",Kt="Tab",ni={ArrowDown:Ln,ArrowLeft:Pn,ArrowRight:ti,ArrowUp:Qn}},9748:(rt,pe,h)=>{h.d(pe,{O:()=>a});var a=function(s){return s.ltr="ltr",s.rtl="rtl",s}(a||{})},7947:(rt,pe,h)=>{function s(y,E,O){return Math.min(Math.max(O,y),E)}function x(y,E,O=0){return[E,O]=[E,O].sort((_,b)=>_-b),E<=y&&y<O}h.d(pe,{AB:()=>s,r4:()=>x})},175:(rt,pe,h)=>{h.d(pe,{NF:()=>s});let a=0;function s(b=""){return`${b}${a++}`}},3226:(rt,pe,h)=>{h.d(pe,{A:()=>a});var a=function(s){return s.Canvas="Canvas",s.CanvasText="CanvasText",s.LinkText="LinkText",s.VisitedText="VisitedText",s.ActiveText="ActiveText",s.ButtonFace="ButtonFace",s.ButtonText="ButtonText",s.Field="Field",s.FieldText="FieldText",s.Highlight="Highlight",s.HighlightText="HighlightText",s.GrayText="GrayText",s}(a||{})},8971:(rt,pe,h)=>{h.d(pe,{OA:()=>a,WL:()=>x,u$:()=>s});const a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=y=>(...E)=>({_$litDirective$:y,values:E});class x{constructor(E){}get _$AU(){return this._$AM._$AU}_$AT(E,O,_){this._$Ct=E,this._$AM=O,this._$Ci=_}_$AS(E,O){return this.update(E,O)}update(E,O){return this.render(...O)}}},9009:(rt,pe,h)=>{h.d(pe,{XX:()=>Tt,c0:()=>te,ge:()=>tt,qy:()=>$,s6:()=>j});const a=globalThis,s=a.trustedTypes,x=s?s.createPolicy("lit-html",{createHTML:ct=>ct}):void 0,y="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,O="?"+E,_=`<${O}>`,b=document,S=()=>b.createComment(""),B=ct=>null===ct||"object"!=typeof ct&&"function"!=typeof ct,R=Array.isArray,W=ct=>R(ct)||"function"==typeof ct?.[Symbol.iterator],H="[ \t\n\f\r]",Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,X=/>/g,re=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ve=/'/g,oe=/"/g,de=/^(?:script|style|textarea|title)$/i,z=ct=>(Te,...ie)=>({_$litType$:ct,strings:Te,values:ie}),$=z(1),te=(z(2),Symbol.for("lit-noChange")),j=Symbol.for("lit-nothing"),le=new WeakMap,G=b.createTreeWalker(b,129);function L(ct,Te){if(!Array.isArray(ct)||!ct.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(Te):Te}const P=(ct,Te)=>{const ie=ct.length-1,ue=[];let _e,Ke=2===Te?"<svg>":"",we=Q;for(let Fe=0;Fe<ie;Fe++){const at=ct[Fe];let Ot,Ge,fe=-1,V=0;for(;V<at.length&&(we.lastIndex=V,Ge=we.exec(at),null!==Ge);)V=we.lastIndex,we===Q?"!--"===Ge[1]?we=I:void 0!==Ge[1]?we=X:void 0!==Ge[2]?(de.test(Ge[2])&&(_e=RegExp("</"+Ge[2],"g")),we=re):void 0!==Ge[3]&&(we=re):we===re?">"===Ge[0]?(we=_e??Q,fe=-1):void 0===Ge[1]?fe=-2:(fe=we.lastIndex-Ge[2].length,Ot=Ge[1],we=void 0===Ge[3]?re:'"'===Ge[3]?oe:ve):we===oe||we===ve?we=re:we===I||we===X?we=Q:(we=re,_e=void 0);const ce=we===re&&ct[Fe+1].startsWith("/>")?" ":"";Ke+=we===Q?at+_:fe>=0?(ue.push(Ot),at.slice(0,fe)+y+at.slice(fe)+E+ce):at+E+(-2===fe?Fe:ce)}return[L(ct,Ke+(ct[ie]||"<?>")+(2===Te?"</svg>":"")),ue]};class ee{constructor({strings:Te,_$litType$:ie},ue){let _e;this.parts=[];let Ke=0,we=0;const Fe=Te.length-1,at=this.parts,[Ot,Ge]=P(Te,ie);if(this.el=ee.createElement(Ot,ue),G.currentNode=this.el.content,2===ie){const fe=this.el.content.firstChild;fe.replaceWith(...fe.childNodes)}for(;null!==(_e=G.nextNode())&&at.length<Fe;){if(1===_e.nodeType){if(_e.hasAttributes())for(const fe of _e.getAttributeNames())if(fe.endsWith(y)){const V=Ge[we++],ce=_e.getAttribute(fe).split(E),xe=/([.?@])?(.*)/.exec(V);at.push({type:1,index:Ke,name:xe[2],strings:ce,ctor:"."===xe[1]?et:"?"===xe[1]?Pe:"@"===xe[1]?se:Le}),_e.removeAttribute(fe)}else fe.startsWith(E)&&(at.push({type:6,index:Ke}),_e.removeAttribute(fe));if(de.test(_e.tagName)){const fe=_e.textContent.split(E),V=fe.length-1;if(V>0){_e.textContent=s?s.emptyScript:"";for(let ce=0;ce<V;ce++)_e.append(fe[ce],S()),G.nextNode(),at.push({type:2,index:++Ke});_e.append(fe[V],S())}}}else if(8===_e.nodeType)if(_e.data===O)at.push({type:2,index:Ke});else{let fe=-1;for(;-1!==(fe=_e.data.indexOf(E,fe+1));)at.push({type:7,index:Ke}),fe+=E.length-1}Ke++}}static createElement(Te,ie){const ue=b.createElement("template");return ue.innerHTML=Te,ue}}function Z(ct,Te,ie=ct,ue){if(Te===te)return Te;let _e=void 0!==ue?ie._$Co?.[ue]:ie._$Cl;const Ke=B(Te)?void 0:Te._$litDirective$;return _e?.constructor!==Ke&&(_e?._$AO?.(!1),void 0===Ke?_e=void 0:(_e=new Ke(ct),_e._$AT(ct,ie,ue)),void 0!==ue?(ie._$Co??=[])[ue]=_e:ie._$Cl=_e),void 0!==_e&&(Te=Z(ct,_e._$AS(ct,Te.values),_e,ue)),Te}class ge{constructor(Te,ie){this._$AV=[],this._$AN=void 0,this._$AD=Te,this._$AM=ie}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(Te){const{el:{content:ie},parts:ue}=this._$AD,_e=(Te?.creationScope??b).importNode(ie,!0);G.currentNode=_e;let Ke=G.nextNode(),we=0,Fe=0,at=ue[0];for(;void 0!==at;){if(we===at.index){let Ot;2===at.type?Ot=new Be(Ke,Ke.nextSibling,this,Te):1===at.type?Ot=new at.ctor(Ke,at.name,at.strings,this,Te):6===at.type&&(Ot=new Qe(Ke,this,Te)),this._$AV.push(Ot),at=ue[++Fe]}we!==at?.index&&(Ke=G.nextNode(),we++)}return G.currentNode=b,_e}p(Te){let ie=0;for(const ue of this._$AV)void 0!==ue&&(void 0!==ue.strings?(ue._$AI(Te,ue,ie),ie+=ue.strings.length-2):ue._$AI(Te[ie])),ie++}}class Be{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(Te,ie,ue,_e){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=Te,this._$AB=ie,this._$AM=ue,this.options=_e,this._$Cv=_e?.isConnected??!0}get parentNode(){let Te=this._$AA.parentNode;const ie=this._$AM;return void 0!==ie&&11===Te?.nodeType&&(Te=ie.parentNode),Te}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(Te,ie=this){Te=Z(this,Te,ie),B(Te)?Te===j||null==Te||""===Te?(this._$AH!==j&&this._$AR(),this._$AH=j):Te!==this._$AH&&Te!==te&&this._(Te):void 0!==Te._$litType$?this.$(Te):void 0!==Te.nodeType?this.T(Te):W(Te)?this.k(Te):this._(Te)}S(Te){return this._$AA.parentNode.insertBefore(Te,this._$AB)}T(Te){this._$AH!==Te&&(this._$AR(),this._$AH=this.S(Te))}_(Te){this._$AH!==j&&B(this._$AH)?this._$AA.nextSibling.data=Te:this.T(b.createTextNode(Te)),this._$AH=Te}$(Te){const{values:ie,_$litType$:ue}=Te,_e="number"==typeof ue?this._$AC(Te):(void 0===ue.el&&(ue.el=ee.createElement(L(ue.h,ue.h[0]),this.options)),ue);if(this._$AH?._$AD===_e)this._$AH.p(ie);else{const Ke=new ge(_e,this),we=Ke.u(this.options);Ke.p(ie),this.T(we),this._$AH=Ke}}_$AC(Te){let ie=le.get(Te.strings);return void 0===ie&&le.set(Te.strings,ie=new ee(Te)),ie}k(Te){R(this._$AH)||(this._$AH=[],this._$AR());const ie=this._$AH;let ue,_e=0;for(const Ke of Te)_e===ie.length?ie.push(ue=new Be(this.S(S()),this.S(S()),this,this.options)):ue=ie[_e],ue._$AI(Ke),_e++;_e<ie.length&&(this._$AR(ue&&ue._$AB.nextSibling,_e),ie.length=_e)}_$AR(Te=this._$AA.nextSibling,ie){for(this._$AP?.(!1,!0,ie);Te&&Te!==this._$AB;){const ue=Te.nextSibling;Te.remove(),Te=ue}}setConnected(Te){void 0===this._$AM&&(this._$Cv=Te,this._$AP?.(Te))}}class Le{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(Te,ie,ue,_e,Ke){this.type=1,this._$AH=j,this._$AN=void 0,this.element=Te,this.name=ie,this._$AM=_e,this.options=Ke,ue.length>2||""!==ue[0]||""!==ue[1]?(this._$AH=Array(ue.length-1).fill(new String),this.strings=ue):this._$AH=j}_$AI(Te,ie=this,ue,_e){const Ke=this.strings;let we=!1;if(void 0===Ke)Te=Z(this,Te,ie,0),we=!B(Te)||Te!==this._$AH&&Te!==te,we&&(this._$AH=Te);else{const Fe=Te;let at,Ot;for(Te=Ke[0],at=0;at<Ke.length-1;at++)Ot=Z(this,Fe[ue+at],ie,at),Ot===te&&(Ot=this._$AH[at]),we||=!B(Ot)||Ot!==this._$AH[at],Ot===j?Te=j:Te!==j&&(Te+=(Ot??"")+Ke[at+1]),this._$AH[at]=Ot}we&&!_e&&this.j(Te)}j(Te){Te===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,Te??"")}}class et extends Le{constructor(){super(...arguments),this.type=3}j(Te){this.element[this.name]=Te===j?void 0:Te}}class Pe extends Le{constructor(){super(...arguments),this.type=4}j(Te){this.element.toggleAttribute(this.name,!!Te&&Te!==j)}}class se extends Le{constructor(Te,ie,ue,_e,Ke){super(Te,ie,ue,_e,Ke),this.type=5}_$AI(Te,ie=this){if((Te=Z(this,Te,ie,0)??j)===te)return;const ue=this._$AH,_e=Te===j&&ue!==j||Te.capture!==ue.capture||Te.once!==ue.once||Te.passive!==ue.passive,Ke=Te!==j&&(ue===j||_e);_e&&this.element.removeEventListener(this.name,this,ue),Ke&&this.element.addEventListener(this.name,this,Te),this._$AH=Te}handleEvent(Te){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,Te):this._$AH.handleEvent(Te)}}class Qe{constructor(Te,ie,ue){this.element=Te,this.type=6,this._$AN=void 0,this._$AM=ie,this.options=ue}get _$AU(){return this._$AM._$AU}_$AI(Te){Z(this,Te)}}const tt={P:y,A:E,C:O,M:1,L:P,R:ge,D:W,V:Z,I:Be,H:Le,N:Pe,U:se,B:et,F:Qe},ft=a.litHtmlPolyfillSupport;ft?.(ee,Be),(a.litHtmlVersions??=[]).push("3.1.2");const Tt=(ct,Te,ie)=>{const ue=ie?.renderBefore??Te;let _e=ue._$litPart$;if(void 0===_e){const Ke=ie?.renderBefore??null;ue._$litPart$=_e=new Be(Te.insertBefore(S(),Ke),Ke,void 0,ie??{})}return _e._$AI(ct),_e}},9559:(rt,pe,h)=>{h.d(pe,{MZ:()=>y,wk:()=>E});var a=h(6693);const s={attribute:!0,type:String,converter:a.W3,reflect:!1,hasChanged:a.Ec},x=(O=s,_,b)=>{const{kind:S,metadata:B}=b;let R=globalThis.litPropertyMetadata.get(B);if(void 0===R&&globalThis.litPropertyMetadata.set(B,R=new Map),R.set(b.name,O),"accessor"===S){const{name:W}=b;return{set(H){const Q=_.get.call(this);_.set.call(this,H),this.requestUpdate(W,Q,O)},init(H){return void 0!==H&&this.P(W,void 0,O),H}}}if("setter"===S){const{name:W}=b;return function(H){const Q=this[W];_.call(this,H),this.requestUpdate(W,Q,O)}}throw Error("Unsupported decorator location: "+S)};function y(O){return(_,b)=>"object"==typeof b?x(O,_,b):((S,B,R)=>{const W=B.hasOwnProperty(R);return B.constructor.createProperty(R,W?{...S,wrapped:!0}:S),W?Object.getOwnPropertyDescriptor(B,R):void 0})(O,_,b)}function E(O){return y({...O,state:!0,attribute:!1})}},3402:(rt,pe,h)=>{h.d(pe,{H:()=>x});var a=h(9009),s=h(8971);const x=(0,s.u$)(class extends s.WL{constructor(y){if(super(y),y.type!==s.OA.ATTRIBUTE||"class"!==y.name||y.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(y){return" "+Object.keys(y).filter(E=>y[E]).join(" ")+" "}update(y,[E]){if(void 0===this.st){this.st=new Set,void 0!==y.strings&&(this.nt=new Set(y.strings.join(" ").split(/\s/).filter(_=>""!==_)));for(const _ in E)E[_]&&!this.nt?.has(_)&&this.st.add(_);return this.render(E)}const O=y.element.classList;for(const _ of this.st)_ in E||(O.remove(_),this.st.delete(_));for(const _ in E){const b=!!E[_];b===this.st.has(_)||this.nt?.has(_)||(b?(O.add(_),this.st.add(_)):(O.remove(_),this.st.delete(_)))}return a.c0}})},6271:(rt,pe,h)=>{h.d(pe,{J:()=>s});var a=h(9009);const s=x=>x??a.s6},4229:(rt,pe,h)=>{h.d(pe,{u:()=>de});var a=h(9009),s=h(8971);const{I:x}=a.ge,R=()=>document.createComment(""),W=(z,$,Y)=>{const te=z._$AA.parentNode,j=void 0===$?z._$AB:$._$AA;if(void 0===Y){const le=te.insertBefore(R(),j),G=te.insertBefore(R(),j);Y=new x(le,G,z,z.options)}else{const le=Y._$AB.nextSibling,G=Y._$AM,L=G!==z;if(L){let P;Y._$AQ?.(z),Y._$AM=z,void 0!==Y._$AP&&(P=z._$AU)!==G._$AU&&Y._$AP(P)}if(le!==j||L){let P=Y._$AA;for(;P!==le;){const ee=P.nextSibling;te.insertBefore(P,j),P=ee}}}return Y},H=(z,$,Y=z)=>(z._$AI($,Y),z),Q={},re=z=>{z._$AP?.(!1,!0);let $=z._$AA;const Y=z._$AB.nextSibling;for(;$!==Y;){const te=$.nextSibling;$.remove(),$=te}},oe=(z,$,Y)=>{const te=new Map;for(let j=$;j<=Y;j++)te.set(z[j],j);return te},de=(0,s.u$)(class extends s.WL{constructor(z){if(super(z),z.type!==s.OA.CHILD)throw Error("repeat() can only be used in text expressions")}dt(z,$,Y){let te;void 0===Y?Y=$:void 0!==$&&(te=$);const j=[],le=[];let G=0;for(const L of z)j[G]=te?te(L,G):G,le[G]=Y(L,G),G++;return{values:le,keys:j}}render(z,$,Y){return this.dt(z,$,Y).values}update(z,[$,Y,te]){const j=(z=>z._$AH)(z),{values:le,keys:G}=this.dt($,Y,te);if(!Array.isArray(j))return this.ut=G,le;const L=this.ut??=[],P=[];let ee,Z,ge=0,Be=j.length-1,Le=0,et=le.length-1;for(;ge<=Be&&Le<=et;)if(null===j[ge])ge++;else if(null===j[Be])Be--;else if(L[ge]===G[Le])P[Le]=H(j[ge],le[Le]),ge++,Le++;else if(L[Be]===G[et])P[et]=H(j[Be],le[et]),Be--,et--;else if(L[ge]===G[et])P[et]=H(j[ge],le[et]),W(z,P[et+1],j[ge]),ge++,et--;else if(L[Be]===G[Le])P[Le]=H(j[Be],le[Le]),W(z,j[ge],j[Be]),Be--,Le++;else if(void 0===ee&&(ee=oe(G,Le,et),Z=oe(L,ge,Be)),ee.has(L[ge]))if(ee.has(L[Be])){const Pe=Z.get(G[Le]),se=void 0!==Pe?j[Pe]:null;if(null===se){const Qe=W(z,j[ge]);H(Qe,le[Le]),P[Le]=Qe}else P[Le]=H(se,le[Le]),W(z,j[ge],se),j[Pe]=null;Le++}else re(j[Be]),Be--;else re(j[ge]),ge++;for(;Le<=et;){const Pe=W(z,P[et+1]);H(Pe,le[Le]),P[Le++]=Pe}for(;ge<=Be;){const Pe=j[ge++];null!==Pe&&re(Pe)}return this.ut=G,((z,$=Q)=>{z._$AH=$})(z,P),a.c0}})},8324:(rt,pe,h)=>{h.d(pe,{WF:()=>x,AH:()=>a.AH,qy:()=>s.qy,s6:()=>s.s6});var a=h(6693),s=h(9009);class x extends a.mN{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const _=super.createRenderRoot();return this.renderOptions.renderBefore??=_.firstChild,_}update(_){const b=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(_),this._$Do=(0,s.XX)(b,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return s.c0}}x._$litElement$=!0,x.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:x});const y=globalThis.litElementPolyfillSupport;y?.({LitElement:x}),(globalThis.litElementVersions??=[]).push("4.0.4")},2341:(rt,pe,h)=>{h.d(pe,{f6:()=>se,Ov:()=>Te,$R:()=>Be,f8:()=>tt});var a=h(4438),s=h(4412),x=h(7673),y=h(2806),E=h(7786),O=h(7468),_=h(6354),b=h(5558),S=h(9437),B=h(6365),R=h(1594),W=h(1397),H=h(9974),Q=h(4360),X=h(5245),re=h(6697),ve=h(8141),oe=h(803);let z=(()=>{class _e{constructor(){this.strategiesSource=new s.t({}),this.strategies$=this.strategiesSource.asObservable()}static#e=this.\u0275fac=function(Fe){return new(Fe||_e)};static#t=this.\u0275prov=a.jDH({token:_e,factory:_e.\u0275fac})}return _e})();const $=new a.nKC("USE_CONFIGURATION_STORE");let Y=(()=>{class _e{constructor(we=!1,Fe){this.isolate=we,this.configurationStore=Fe,this.strategiesSource=this.isolate?new s.t({}):this.configurationStore.strategiesSource,this.strategies$=this.strategiesSource.asObservable(),this.onAuthorisedDefaultStrategy=this.isolate?void 0:this.configurationStore.onAuthorisedDefaultStrategy,this.onUnAuthorisedDefaultStrategy=this.isolate?void 0:this.configurationStore.onUnAuthorisedDefaultStrategy}setDefaultOnAuthorizedStrategy(we){this.isolate?this.onAuthorisedDefaultStrategy=this.getDefinedStrategy(we):(this.configurationStore.onAuthorisedDefaultStrategy=this.getDefinedStrategy(we),this.onAuthorisedDefaultStrategy=this.configurationStore.onAuthorisedDefaultStrategy)}setDefaultOnUnauthorizedStrategy(we){this.isolate?this.onUnAuthorisedDefaultStrategy=this.getDefinedStrategy(we):(this.configurationStore.onUnAuthorisedDefaultStrategy=this.getDefinedStrategy(we),this.onUnAuthorisedDefaultStrategy=this.configurationStore.onUnAuthorisedDefaultStrategy)}addPermissionStrategy(we,Fe){this.strategiesSource.value[we]=Fe}getStrategy(we){return this.strategiesSource.value[we]}getAllStrategies(){return this.strategiesSource.value}getDefinedStrategy(we){if(this.strategiesSource.value[we]||this.isPredefinedStrategy(we))return we;throw new Error(`No ' ${we} ' strategy is found please define one`)}isPredefinedStrategy(we){return"show"===we||"remove"===we}static#e=this.\u0275fac=function(Fe){return new(Fe||_e)(a.KVO($),a.KVO(z))};static#t=this.\u0275prov=a.jDH({token:_e,factory:_e.\u0275fac})}return _e})();function te(_e){return"function"==typeof _e}function j(_e){if("[object Object]"!==Object.prototype.toString.call(_e))return!1;{const Ke=Object.getPrototypeOf(_e);return null===Ke||Ke===Object.prototype}}function le(_e){return!!_e&&"string"==typeof _e}function G(_e){return"boolean"==typeof _e}function P(_e){return Array.isArray(_e)?_e.length>0:!!_e}function ee(_e){return le(_e)?[_e]:_e}let Z=(()=>{class _e{constructor(){this.permissionsSource=new s.t({}),this.permissions$=this.permissionsSource.asObservable()}static#e=this.\u0275fac=function(Fe){return new(Fe||_e)};static#t=this.\u0275prov=a.jDH({token:_e,factory:_e.\u0275fac})}return _e})();const ge=new a.nKC("USE_PERMISSIONS_STORE");let Be=(()=>{class _e{constructor(we=!1,Fe){this.isolate=we,this.permissionsStore=Fe,this.permissionsSource=this.isolate?new s.t({}):this.permissionsStore.permissionsSource,this.permissions$=this.permissionsSource.asObservable()}flushPermissions(){this.permissionsSource.next({})}hasPermission(we){return!we||Array.isArray(we)&&0===we.length?Promise.resolve(!0):(we=ee(we),this.hasArrayPermission(we))}loadPermissions(we,Fe){const at=we.reduce((Ot,Ge)=>this.reducePermission(Ot,Ge,Fe),{});this.permissionsSource.next(at)}addPermission(we,Fe){if(Array.isArray(we)){const at=we.reduce((Ot,Ge)=>this.reducePermission(Ot,Ge,Fe),this.permissionsSource.value);this.permissionsSource.next(at)}else{const at=this.reducePermission(this.permissionsSource.value,we,Fe);this.permissionsSource.next(at)}}removePermission(we){const Fe={...this.permissionsSource.value};delete Fe[we],this.permissionsSource.next(Fe)}getPermission(we){return this.permissionsSource.value[we]}getPermissions(){return this.permissionsSource.value}reducePermission(we,Fe,at){return at&&te(at)?{...we,[Fe]:{name:Fe,validationFunction:at}}:{...we,[Fe]:{name:Fe}}}hasArrayPermission(we){const Fe=we.map(at=>{if(this.hasPermissionValidationFunction(at)){const Ot=this.permissionsSource.value[at].validationFunction,Ge={...this.permissionsSource.value};return(0,x.of)(null).pipe((0,_.T)(()=>Ot(at,Ge)),(0,b.n)(fe=>G(fe)?(0,x.of)(fe):fe),(0,S.W)(()=>(0,x.of)(!1)))}return(0,x.of)(!!this.permissionsSource.value[at])});return(0,y.H)(Fe).pipe((0,B.U)(),(0,R.$)(at=>!1!==at,!1),(0,_.T)(at=>!1!==at)).toPromise().then(at=>at)}hasPermissionValidationFunction(we){return!!this.permissionsSource.value[we]&&!!this.permissionsSource.value[we].validationFunction&&te(this.permissionsSource.value[we].validationFunction)}static#e=this.\u0275fac=function(Fe){return new(Fe||_e)(a.KVO(ge),a.KVO(Z))};static#t=this.\u0275prov=a.jDH({token:_e,factory:_e.\u0275fac})}return _e})();class Le{constructor(){this.rolesSource=new s.t({}),this.roles$=this.rolesSource.asObservable()}}const et=new a.nKC("USE_ROLES_STORE");let Pe=(()=>{class _e{constructor(we=!1,Fe,at){this.isolate=we,this.rolesStore=Fe,this.permissionsService=at,this.rolesSource=this.isolate?new s.t({}):this.rolesStore.rolesSource,this.roles$=this.rolesSource.asObservable()}addRole(we,Fe){const at={...this.rolesSource.value,[we]:{name:we,validationFunction:Fe}};this.rolesSource.next(at)}addRoleWithPermissions(we,Fe){this.permissionsService.addPermission(Fe),this.addRole(we,Fe)}addRoles(we){Object.keys(we).forEach((Fe,at)=>{this.addRole(Fe,we[Fe])})}addRolesWithPermissions(we){Object.keys(we).forEach((Fe,at)=>{this.addRoleWithPermissions(Fe,we[Fe])})}flushRoles(){this.rolesSource.next({})}flushRolesAndPermissions(){this.flushRoles(),this.permissionsService.flushPermissions()}removeRole(we){const Fe={...this.rolesSource.value};delete Fe[we],this.rolesSource.next(Fe)}getRoles(){return this.rolesSource.value}getRole(we){return this.rolesSource.value[we]}hasOnlyRoles(we){return!we||Array.isArray(we)&&0===we.length?Promise.resolve(!0):(we=ee(we),Promise.all([this.hasRoleKey(we),this.hasRolePermission(this.rolesSource.value,we)]).then(([at,Ot])=>at||Ot))}hasRoleKey(we){const Fe=we.map(at=>{if(this.rolesSource.value[at]&&this.rolesSource.value[at].validationFunction&&te(this.rolesSource.value[at].validationFunction)&&!function L(_e){return"[object Promise]"===Object.prototype.toString.call(_e)}(this.rolesSource.value[at].validationFunction)){const Ge=this.rolesSource.value[at].validationFunction,fe={...this.rolesSource.value};return(0,x.of)(null).pipe((0,_.T)(()=>Ge(at,fe)),(0,b.n)(V=>G(V)?(0,x.of)(V):V),(0,S.W)(()=>(0,x.of)(!1)))}return(0,x.of)(!1)});return(0,y.H)(Fe).pipe((0,B.U)(),(0,R.$)(at=>!1!==at,!1),(0,_.T)(at=>!1!==at)).toPromise().then(at=>at)}hasRolePermission(we,Fe){return(0,y.H)(Fe).pipe((0,W.Z)(at=>we[at]&&Array.isArray(we[at].validationFunction)?(0,y.H)(we[at].validationFunction).pipe((0,W.Z)(Ot=>this.permissionsService.hasPermission(Ot)),function I(_e,Ke){return(0,H.N)((we,Fe)=>{let at=0;we.subscribe((0,Q._)(Fe,Ot=>{_e.call(Ke,Ot,at++,we)||(Fe.next(!1),Fe.complete())},()=>{Fe.next(!0),Fe.complete()}))})}(Ot=>!0===Ot)):(0,x.of)(!1)),(0,R.$)(at=>!0===at,!1)).toPromise()}static#e=this.\u0275fac=function(Fe){return new(Fe||_e)(a.KVO(et),a.KVO(Le),a.KVO(Be))};static#t=this.\u0275prov=a.jDH({token:_e,factory:_e.\u0275fac})}return _e})(),se=(()=>{class _e{constructor(){this.permissionsAuthorized=new a.bkB,this.permissionsUnauthorized=new a.bkB,this.firstMergeUnusedRun=1,this.permissionsService=(0,a.WQX)(Be),this.configurationService=(0,a.WQX)(Y),this.rolesService=(0,a.WQX)(Pe),this.viewContainer=(0,a.WQX)(a.c1b),this.changeDetector=(0,a.WQX)(a.gRc),this.templateRef=(0,a.WQX)(a.C4Q)}ngOnInit(){this.viewContainer.clear(),this.initPermissionSubscription=this.validateExceptOnlyPermissions()}ngOnChanges(we){const Fe=we.ngxPermissionsOnly,at=we.ngxPermissionsExcept;if(Fe||at){if(Fe&&Fe.firstChange||at&&at.firstChange)return;(0,E.h)(this.permissionsService.permissions$,this.rolesService.roles$).pipe((0,X.i)(this.firstMergeUnusedRun),(0,re.s)(1)).subscribe(()=>{P(this.ngxPermissionsExcept)?this.validateExceptAndOnlyPermissions():P(this.ngxPermissionsOnly)?this.validateOnlyPermissions():this.handleAuthorisedPermission(this.getAuthorisedTemplates())})}}ngOnDestroy(){this.initPermissionSubscription&&this.initPermissionSubscription.unsubscribe()}validateExceptOnlyPermissions(){return(0,E.h)(this.permissionsService.permissions$,this.rolesService.roles$).pipe((0,X.i)(this.firstMergeUnusedRun)).subscribe(()=>{P(this.ngxPermissionsExcept)?this.validateExceptAndOnlyPermissions():P(this.ngxPermissionsOnly)?this.validateOnlyPermissions():this.handleAuthorisedPermission(this.getAuthorisedTemplates())})}validateExceptAndOnlyPermissions(){Promise.all([this.permissionsService.hasPermission(this.ngxPermissionsExcept),this.rolesService.hasOnlyRoles(this.ngxPermissionsExcept)]).then(([we,Fe])=>{if(we||Fe)this.handleUnauthorisedPermission(this.ngxPermissionsExceptElse||this.ngxPermissionsElse);else{if(this.ngxPermissionsOnly)throw!1;this.handleAuthorisedPermission(this.ngxPermissionsExceptThen||this.ngxPermissionsThen||this.templateRef)}}).catch(()=>{this.ngxPermissionsOnly?this.validateOnlyPermissions():this.handleAuthorisedPermission(this.ngxPermissionsExceptThen||this.ngxPermissionsThen||this.templateRef)})}validateOnlyPermissions(){Promise.all([this.permissionsService.hasPermission(this.ngxPermissionsOnly),this.rolesService.hasOnlyRoles(this.ngxPermissionsOnly)]).then(([we,Fe])=>{we||Fe?this.handleAuthorisedPermission(this.ngxPermissionsOnlyThen||this.ngxPermissionsThen||this.templateRef):this.handleUnauthorisedPermission(this.ngxPermissionsOnlyElse||this.ngxPermissionsElse)}).catch(()=>{this.handleUnauthorisedPermission(this.ngxPermissionsOnlyElse||this.ngxPermissionsElse)})}handleUnauthorisedPermission(we){if(!G(this.currentAuthorizedState)||this.currentAuthorizedState){if(this.currentAuthorizedState=!1,this.permissionsUnauthorized.emit(),this.getUnAuthorizedStrategyInput())return void this.applyStrategyAccordingToStrategyType(this.getUnAuthorizedStrategyInput());this.configurationService.onUnAuthorisedDefaultStrategy&&!this.elseBlockDefined()?this.applyStrategy(this.configurationService.onUnAuthorisedDefaultStrategy):this.showTemplateBlockInView(we)}}handleAuthorisedPermission(we){if(!G(this.currentAuthorizedState)||!this.currentAuthorizedState){if(this.currentAuthorizedState=!0,this.permissionsAuthorized.emit(),this.getAuthorizedStrategyInput())return void this.applyStrategyAccordingToStrategyType(this.getAuthorizedStrategyInput());this.configurationService.onAuthorisedDefaultStrategy&&!this.thenBlockDefined()?this.applyStrategy(this.configurationService.onAuthorisedDefaultStrategy):this.showTemplateBlockInView(we)}}applyStrategyAccordingToStrategyType(we){if(!le(we))return te(we)?(this.showTemplateBlockInView(this.templateRef),void we(this.templateRef)):void 0;this.applyStrategy(we)}showTemplateBlockInView(we){this.viewContainer.clear(),we&&(this.viewContainer.createEmbeddedView(we),this.changeDetector.markForCheck())}getAuthorisedTemplates(){return this.ngxPermissionsOnlyThen||this.ngxPermissionsExceptThen||this.ngxPermissionsThen||this.templateRef}elseBlockDefined(){return!!this.ngxPermissionsExceptElse||!!this.ngxPermissionsElse}thenBlockDefined(){return!!this.ngxPermissionsExceptThen||!!this.ngxPermissionsThen}getAuthorizedStrategyInput(){return this.ngxPermissionsOnlyAuthorisedStrategy||this.ngxPermissionsExceptAuthorisedStrategy||this.ngxPermissionsAuthorisedStrategy}getUnAuthorizedStrategyInput(){return this.ngxPermissionsOnlyUnauthorisedStrategy||this.ngxPermissionsExceptUnauthorisedStrategy||this.ngxPermissionsUnauthorisedStrategy}applyStrategy(we){if("show"===we)return void this.showTemplateBlockInView(this.templateRef);if("remove"===we)return void this.viewContainer.clear();const Fe=this.configurationService.getStrategy(we);this.showTemplateBlockInView(this.templateRef),Fe(this.templateRef)}static#e=this.\u0275fac=function(Fe){return new(Fe||_e)};static#t=this.\u0275dir=a.FsC({type:_e,selectors:[["","ngxPermissionsOnly",""],["","ngxPermissionsExcept",""]],inputs:{ngxPermissionsOnly:"ngxPermissionsOnly",ngxPermissionsOnlyThen:"ngxPermissionsOnlyThen",ngxPermissionsOnlyElse:"ngxPermissionsOnlyElse",ngxPermissionsExcept:"ngxPermissionsExcept",ngxPermissionsExceptElse:"ngxPermissionsExceptElse",ngxPermissionsExceptThen:"ngxPermissionsExceptThen",ngxPermissionsThen:"ngxPermissionsThen",ngxPermissionsElse:"ngxPermissionsElse",ngxPermissionsOnlyAuthorisedStrategy:"ngxPermissionsOnlyAuthorisedStrategy",ngxPermissionsOnlyUnauthorisedStrategy:"ngxPermissionsOnlyUnauthorisedStrategy",ngxPermissionsExceptUnauthorisedStrategy:"ngxPermissionsExceptUnauthorisedStrategy",ngxPermissionsExceptAuthorisedStrategy:"ngxPermissionsExceptAuthorisedStrategy",ngxPermissionsUnauthorisedStrategy:"ngxPermissionsUnauthorisedStrategy",ngxPermissionsAuthorisedStrategy:"ngxPermissionsAuthorisedStrategy"},outputs:{permissionsAuthorized:"permissionsAuthorized",permissionsUnauthorized:"permissionsUnauthorized"},features:[a.OA$]})}return _e})();const tt=(_e,Ke)=>{const we=(0,a.WQX)(ft);return Ke instanceof oe.n1?we.hasPermissions(_e,Ke):we.hasPermissions(_e)};let ft=(()=>{class _e{constructor(we,Fe,at){this.permissionsService=we,this.rolesService=Fe,this.router=at}canActivate(we,Fe){return this.hasPermissions(we,Fe)}canActivateChild(we,Fe){return this.hasPermissions(we,Fe)}canLoad(we){return this.hasPermissions(we)}canMatch(we){return this.hasPermissions(we)}hasPermissions(we,Fe){const Ot=this.transformPermission(we&&we.data?we.data.permissions:{},we,Fe);return this.isParameterAvailable(Ot.except)?this.passingExceptPermissionsValidation(Ot,we,Fe):!this.isParameterAvailable(Ot.only)||this.passingOnlyPermissionsValidation(Ot,we,Fe)}transformPermission(we,Fe,at){return{only:te(we.only)?we.only(Fe,at):ee(we.only),except:te(we.except)?we.except(Fe,at):ee(we.except),redirectTo:we.redirectTo}}isParameterAvailable(we){return!!we&&we.length>0}passingExceptPermissionsValidation(we,Fe,at){if(we.redirectTo&&(te(we.redirectTo)||j(we.redirectTo)&&!this.isRedirectionWithParameters(we.redirectTo))){let Ot="";return(0,y.H)(we.except).pipe((0,W.Z)(Ge=>(0,O.p)([this.permissionsService.hasPermission(Ge),this.rolesService.hasOnlyRoles(Ge)]).pipe((0,ve.M)(fe=>{fe.every(ce=>!1===ce)||(Ot=Ge)}))),(0,R.$)(Ge=>Ge.some(fe=>!0===fe),!1),(0,W.Z)(Ge=>Ot?(this.handleRedirectOfFailedPermission(we,Ot,Fe,at),(0,x.of)(!1)):!Ge&&we.only?this.onlyRedirectCheck(we,Fe,at):(0,x.of)(!Ge))).toPromise()}return Promise.all([this.permissionsService.hasPermission(we.except),this.rolesService.hasOnlyRoles(we.except)]).then(([Ot,Ge])=>Ot||Ge?(we.redirectTo&&this.redirectToAnotherRoute(we.redirectTo,Fe,at),!1):!we.only||this.checkOnlyPermissions(we,Fe,at))}redirectToAnotherRoute(we,Fe,at,Ot){const Ge=te(we)?we(Ot,Fe,at):we;if(this.isRedirectionWithParameters(Ge))return Ge.navigationCommands=this.transformNavigationCommands(Ge.navigationCommands,Fe,at),Ge.navigationExtras=this.transformNavigationExtras(Ge.navigationExtras,Fe,at),void this.router.navigate(Ge.navigationCommands,Ge.navigationExtras);Array.isArray(Ge)?this.router.navigate(Ge):this.router.navigate([Ge])}isRedirectionWithParameters(we){return j(we)&&(!!we.navigationCommands||!!we.navigationExtras)}transformNavigationCommands(we,Fe,at){return te(we)?we(Fe,at):we}transformNavigationExtras(we,Fe,at){return te(we)?we(Fe,at):we}onlyRedirectCheck(we,Fe,at){let Ot="";return(0,y.H)(we.only).pipe((0,W.Z)(Ge=>(0,O.p)([this.permissionsService.hasPermission(Ge),this.rolesService.hasOnlyRoles(Ge)]).pipe((0,ve.M)(fe=>{fe.every(ce=>!1===ce)&&(Ot=Ge)}))),(0,R.$)(Ge=>te(we.redirectTo)?Ge.some(fe=>!0===fe):Ge.every(fe=>!1===fe),!1),(0,W.Z)(Ge=>te(we.redirectTo)?Ge?(0,x.of)(!0):(this.handleRedirectOfFailedPermission(we,Ot,Fe,at),(0,x.of)(!1)):(Ot&&this.handleRedirectOfFailedPermission(we,Ot,Fe,at),(0,x.of)(!Ge)))).toPromise()}handleRedirectOfFailedPermission(we,Fe,at,Ot){this.isFailedPermissionPropertyOfRedirectTo(we,Fe)?this.redirectToAnotherRoute(we.redirectTo[Fe],at,Ot,Fe):te(we.redirectTo)?this.redirectToAnotherRoute(we.redirectTo,at,Ot,Fe):this.redirectToAnotherRoute(we.redirectTo.default,at,Ot,Fe)}isFailedPermissionPropertyOfRedirectTo(we,Fe){return!!we.redirectTo&&we.redirectTo[Fe]}checkOnlyPermissions(we,Fe,at){const Ot={...we};return Promise.all([this.permissionsService.hasPermission(Ot.only),this.rolesService.hasOnlyRoles(Ot.only)]).then(([Ge,fe])=>!(!Ge&&!fe&&(Ot.redirectTo&&this.redirectToAnotherRoute(Ot.redirectTo,Fe,at),1)))}passingOnlyPermissionsValidation(we,Fe,at){return te(we.redirectTo)||j(we.redirectTo)&&!this.isRedirectionWithParameters(we.redirectTo)?this.onlyRedirectCheck(we,Fe,at):this.checkOnlyPermissions(we,Fe,at)}static#e=this.\u0275fac=function(Fe){return new(Fe||_e)(a.KVO(Be),a.KVO(Pe),a.KVO(oe.Ix))};static#t=this.\u0275prov=a.jDH({token:_e,factory:_e.\u0275fac})}return _e})(),Te=(()=>{class _e{static forRoot(we={}){return{ngModule:_e,providers:[Z,Le,z,Be,ft,Pe,Y,{provide:ge,useValue:we.permissionsIsolate},{provide:et,useValue:we.rolesIsolate},{provide:$,useValue:we.configurationIsolate}]}}static forChild(we={}){return{ngModule:_e,providers:[{provide:ge,useValue:we.permissionsIsolate},{provide:et,useValue:we.rolesIsolate},{provide:$,useValue:we.configurationIsolate},Y,Be,Pe,ft]}}static#e=this.\u0275fac=function(Fe){return new(Fe||_e)};static#t=this.\u0275mod=a.$C({type:_e});static#n=this.\u0275inj=a.G2t({})}return _e})()},1635:(rt,pe,h)=>{function E(Pe,se,Qe,tt){var ct,ft=arguments.length,Tt=ft<3?se:null===tt?tt=Object.getOwnPropertyDescriptor(se,Qe):tt;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Tt=Reflect.decorate(Pe,se,Qe,tt);else for(var Te=Pe.length-1;Te>=0;Te--)(ct=Pe[Te])&&(Tt=(ft<3?ct(Tt):ft>3?ct(se,Qe,Tt):ct(se,Qe))||Tt);return ft>3&&Tt&&Object.defineProperty(se,Qe,Tt),Tt}function R(Pe,se){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(Pe,se)}function W(Pe,se,Qe,tt){return new(Qe||(Qe=Promise))(function(Tt,ct){function Te(_e){try{ue(tt.next(_e))}catch(Ke){ct(Ke)}}function ie(_e){try{ue(tt.throw(_e))}catch(Ke){ct(Ke)}}function ue(_e){_e.done?Tt(_e.value):function ft(Tt){return Tt instanceof Qe?Tt:new Qe(function(ct){ct(Tt)})}(_e.value).then(Te,ie)}ue((tt=tt.apply(Pe,se||[])).next())})}function z(Pe){return this instanceof z?(this.v=Pe,this):new z(Pe)}function $(Pe,se,Qe){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var ft,tt=Qe.apply(Pe,se||[]),Tt=[];return ft={},ct("next"),ct("throw"),ct("return"),ft[Symbol.asyncIterator]=function(){return this},ft;function ct(we){tt[we]&&(ft[we]=function(Fe){return new Promise(function(at,Ot){Tt.push([we,Fe,at,Ot])>1||Te(we,Fe)})})}function Te(we,Fe){try{!function ie(we){we.value instanceof z?Promise.resolve(we.value.v).then(ue,_e):Ke(Tt[0][2],we)}(tt[we](Fe))}catch(at){Ke(Tt[0][3],at)}}function ue(we){Te("next",we)}function _e(we){Te("throw",we)}function Ke(we,Fe){we(Fe),Tt.shift(),Tt.length&&Te(Tt[0][0],Tt[0][1])}}function te(Pe){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var Qe,se=Pe[Symbol.asyncIterator];return se?se.call(Pe):(Pe=function X(Pe){var se="function"==typeof Symbol&&Symbol.iterator,Qe=se&&Pe[se],tt=0;if(Qe)return Qe.call(Pe);if(Pe&&"number"==typeof Pe.length)return{next:function(){return Pe&&tt>=Pe.length&&(Pe=void 0),{value:Pe&&Pe[tt++],done:!Pe}}};throw new TypeError(se?"Object is not iterable.":"Symbol.iterator is not defined.")}(Pe),Qe={},tt("next"),tt("throw"),tt("return"),Qe[Symbol.asyncIterator]=function(){return this},Qe);function tt(Tt){Qe[Tt]=Pe[Tt]&&function(ct){return new Promise(function(Te,ie){!function ft(Tt,ct,Te,ie){Promise.resolve(ie).then(function(ue){Tt({value:ue,done:Te})},ct)}(Te,ie,(ct=Pe[Tt](ct)).done,ct.value)})}}}h.d(pe,{AQ:()=>$,Cg:()=>E,N3:()=>z,Sn:()=>R,sH:()=>W,xN:()=>te}),"function"==typeof SuppressedError&&SuppressedError}},rt=>{rt(rt.s=9057)}]);