"use strict";(self.webpackChunkfrontend_performance_manager=self.webpackChunkfrontend_performance_manager||[]).push([[737],{3737:(b,u,a)=>{a.r(u),a.d(u,{SETTINGS_ROUTES:()=>g});var o=a(9417),l=a(3089),e=a(4438),m=a(7052);const p=["mgtPicker"];function d(s,c){if(1&s&&(e.j41(0,"div",6),e.nrm(1,"input",7),e.j41(2,"label",8),e.EFF(3),e.k0s()()),2&s){const t=c.$implicit;e.R7$(),e.Y8G("id",t),e.R7$(),e.Y8G("for",t),e.R7$(),e.SpI(" ",t," ")}}function f(s,c){if(1&s&&(e.j41(0,"div",3),e.nrm(1,"mgt-person-card",4),e.j41(2,"h6",5),e.EFF(3,"Uprawnienia"),e.k0s(),e.Z7z(4,d,4,3,"div",6,e.fX1),e.k0s()),2&s){const t=e.XpG();e.R7$(4),e.Dyx(t.userService.availableRoles)}}function h(s,c){if(1&s&&(e.j41(0,"form",12)(1,"div",6),e.nrm(2,"input",13),e.j41(3,"label",8),e.EFF(4," Admin Role "),e.k0s()(),e.j41(5,"div",6),e.nrm(6,"input",13),e.j41(7,"label",8),e.EFF(8," Supervisor Role "),e.k0s()(),e.j41(9,"div",6),e.nrm(10,"input",13),e.j41(11,"label",8),e.EFF(12," User Role "),e.k0s()()()),2&s){const t=e.XpG(2);e.Y8G("formGroup",t.roleForm),e.R7$(2),e.Y8G("formControlName",t.Role.admin)("id",t.Role.admin),e.R7$(),e.Y8G("for",t.Role.admin),e.R7$(3),e.Y8G("formControlName",t.Role.supervisor)("id",t.Role.supervisor),e.R7$(),e.Y8G("for",t.Role.supervisor),e.R7$(3),e.Y8G("formControlName",t.Role.user)("id",t.Role.user),e.R7$(),e.Y8G("for",t.Role.user)}}function R(s,c){if(1&s){const t=e.RV6();e.j41(0,"div",9)(1,"label",10),e.EFF(2,"Wska\u017c u\u017cytkownika"),e.k0s(),e.j41(3,"mgt-people-picker",11,0),e.bIt("selectionChanged",function(i){e.eBV(t);const r=e.XpG();return e.Njj(r.handleSelectionChanged(i))}),e.k0s()(),e.DNE(5,h,13,10,"form",12)}if(2&s){const t=e.XpG();e.R7$(5),e.vxM(5,t.roleForm.value.userId?5:-1)}}const g=[{path:"",component:(()=>{class s{constructor(t,n){this.userService=t,this.fb=n,this.mgtPicker=null,this.currentView="profile",this.subscriptions=[],this.Role=l.X,this.handleSelectionChanged=i=>{this.getRolesForSelectedUser(i.detail.map(r=>r.id))},this.roleForm=this.fb.group({ROLE_ADMIN:void 0,ROLE_SUPERVISOR:void 0,ROLE_USER:void 0,userId:!1})}ngOnInit(){[l.X.admin,l.X.supervisor,l.X.user].forEach(t=>{const n=this.roleForm.get(t)?.valueChanges.subscribe(i=>{this.handleCheckboxChange(t,i)});n&&this.subscriptions.push(n)})}setCurrentView(t){this.currentView=t}handleCheckboxChange(t,n){n?this.userService.addRoleByUserId(this.roleForm.value.userId,t).subscribe():this.userService.removeRoleByUserId(this.roleForm.value.userId,t).subscribe()}getRolesForSelectedUser(t){t.length?this.userService.getUserRolesById(t[0]).subscribe(n=>{this.roleForm.patchValue({ROLE_ADMIN:n.roles.includes(l.X.admin),ROLE_SUPERVISOR:n.roles.includes(l.X.supervisor),ROLE_USER:n.roles.includes(l.X.user),userId:n.id},{emitEvent:!1})}):this.roleForm.patchValue({usedId:!1})}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(m.DL),e.rXU(o.ok))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["app-settings"]],viewQuery:function(n,i){if(1&n&&e.GBs(p,5),2&n){let r;e.mGM(r=e.lsd())&&(i.mgtPicker=r.first)}},standalone:!0,features:[e.aNF],decls:11,vars:5,consts:[["mgtPicker",""],[1,"btn-group","btn-group-lg","mb-3"],[1,"btn",3,"click"],[1,"col-4"],["person-query","me",1,"person-card"],[1,"my-2"],[1,"d-flex","flex-row","align-items-center","my-2"],["type","checkbox","checked","","disabled","",1,"form-check-input","fs-5",3,"id"],[1,"form-check-label","mx-2",3,"for"],[1,"col-6"],[1,"form-label"],["type","person","selection-mode","single","user-filters","not startsWith(displayName,'disabled') and endsWith(mail,'@assecods.pl') and givenName ne null","user-type","user",3,"selectionChanged"],[3,"formGroup"],["type","checkbox",1,"form-check-input","fs-5",3,"formControlName","id"]],template:function(n,i){if(1&n&&(e.j41(0,"h3"),e.EFF(1,"Ustawienia"),e.k0s(),e.j41(2,"div",1)(3,"button",2),e.bIt("click",function(){return i.setCurrentView("profile")}),e.j41(4,"span"),e.EFF(5,"Tw\xf3j profil"),e.k0s()(),e.j41(6,"button",2),e.bIt("click",function(){return i.setCurrentView("manage")}),e.j41(7,"span"),e.EFF(8,"Zarz\u0105dzaj uprawnieniami"),e.k0s()()(),e.DNE(9,f,6,0)(10,R,6,1)),2&n){let r;e.R7$(3),e.AVh("active","profile"===i.currentView),e.R7$(3),e.AVh("active","manage"===i.currentView),e.R7$(3),e.vxM(9,"profile"===(r=i.currentView)?9:"manage"===r?10:-1)}},dependencies:[o.X1,o.qT,o.Zm,o.BC,o.cb,o.j4,o.JD],encapsulation:2})}return s})()}]}}]);