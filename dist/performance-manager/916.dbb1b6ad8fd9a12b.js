"use strict";(self.webpackChunkfrontend_performance_manager=self.webpackChunkfrontend_performance_manager||[]).push([[916],{4916:(P,d,p)=>{p.r(d),p.d(d,{FILL_SURVEY_ROUTES:()=>Y});var u=p(803),r=p(9417),f=p(2341),_=p(177),v=p(2806),C=p(274),$=p(6649),F=p(9974);const T=(o,s)=>(o.push(s),o);var x=p(3089),j=p(8501),t=p(4438),c=p(7052);const h=(o,s)=>s.id,g=o=>["/create-form/template/",o];function I(o,s){1&o&&t.nrm(0,"app-loading-spinner")}function y(o,s){if(1&o&&(t.j41(0,"div",5)(1,"a",6),t.EFF(2," Wybieram ten szablon! "),t.k0s()()),2&o){const e=t.XpG(3);t.R7$(),t.Y8G("routerLink",t.eq3(1,g,e.templateId))}}function k(o,s){if(1&o&&(t.j41(0,"div",0)(1,"div",2)(2,"h3",3)(3,"b"),t.EFF(4),t.k0s()(),t.j41(5,"p",4),t.EFF(6),t.nI1(7,"date"),t.k0s(),t.j41(8,"p"),t.EFF(9,"Wska\u017c najbardziej pasuj\u0105c\u0105 odpowiedz i podaj uzasadnienie"),t.k0s()(),t.DNE(10,y,3,3,"div",5),t.k0s()),2&o){const e=t.XpG(2);t.R7$(4),t.JRh(e.form.name),t.R7$(2),t.SpI(" Data wyga\u015bni\u0119cia ankiety: ",t.bMT(7,3,e.form.endTimestamp)," "),t.R7$(4),t.vxM(10,e.templateId?10:-1)}}function E(o,s){1&o&&(t.j41(0,"p"),t.EFF(1,"Formularz jeszcze nie ma dodanych pyta\u0144 lub jest nieprawid\u0142owy \u{1f63f}"),t.k0s())}function G(o,s){1&o&&(t.j41(0,"h5",11),t.EFF(1,"Pracownik"),t.k0s())}function S(o,s){if(1&o&&(t.j41(0,"i",21),t.EFF(1),t.k0s()),2&o){const e=t.XpG().$implicit;t.R7$(),t.SpI(" (+",e.points,"pkt) ")}}function U(o,s){if(1&o&&(t.j41(0,"div",17),t.nrm(1,"input",18),t.j41(2,"label",19),t.EFF(3),t.k0s(),t.DNE(4,S,2,1,"i",20),t.k0s()),2&o){const e=s.$implicit,i=s.$index,n=t.XpG(2).$index,l=t.XpG(2);t.R7$(),t.FCK("id","question",n,"userOption",i,""),t.Y8G("value",e.id),t.BMQ("name","question-"+n+"-user-"+i),t.R7$(),t.FCK("for","question",n,"userOption",i,""),t.R7$(),t.SpI(" ",e.content," "),t.R7$(),t.Y8G("ngxPermissionsExcept",l.Role.user)}}function X(o,s){if(1&o&&(t.j41(0,"label",12),t.EFF(1),t.k0s(),t.j41(2,"div",16),t.Z7z(3,U,5,10,"div",17,h),t.k0s()),2&o){const e=t.XpG(),i=e.$implicit;t.Mz_("for","question",e.$index,""),t.R7$(),t.SpI(" ",i.selectedUserOption?"Wybrano opcj\u0119":"Wybierz opcj\u0119"," "),t.R7$(2),t.Dyx(i.options)}}function z(o,s){1&o&&(t.j41(0,"h5",11),t.EFF(1,"Prze\u0142o\u017cony"),t.k0s())}function O(o,s){if(1&o&&(t.j41(0,"i",21),t.EFF(1),t.k0s()),2&o){const e=t.XpG().$implicit;t.R7$(),t.SpI(" (+",e.points,"pkt) ")}}function M(o,s){if(1&o&&(t.j41(0,"div",17),t.nrm(1,"input",24),t.j41(2,"label",19),t.EFF(3),t.k0s(),t.DNE(4,O,2,1,"i",20),t.k0s()),2&o){const e=s.$implicit,i=s.$index,n=t.XpG(3).$index,l=t.XpG(2);t.R7$(),t.FCK("id","question",n,"supervisorOption",i,""),t.Y8G("value",e.id),t.BMQ("name","question-"+n+"-supervisor-"+i),t.R7$(),t.FCK("for","question",n,"supervisorOption",i,""),t.R7$(),t.SpI(" ",e.content," "),t.R7$(),t.Y8G("ngxPermissionsExcept",l.Role.user)}}function w(o,s){if(1&o&&(t.j41(0,"label",12),t.EFF(1),t.k0s(),t.j41(2,"div",16),t.Z7z(3,M,5,10,"div",17,h),t.k0s()),2&o){const e=t.XpG(2),i=e.$implicit;t.Mz_("for","question",e.$index,""),t.R7$(),t.SpI(" ",i.selectedUserOption?"Wybrano opcj\u0119":"Wybierz opcj\u0119"," "),t.R7$(2),t.Dyx(i.supervisorOptions)}}function N(o,s){if(1&o){const e=t.RV6();t.j41(0,"div",22),t.DNE(1,z,2,0,"h5",11)(2,w,5,3),t.j41(3,"label",12),t.EFF(4),t.k0s(),t.nrm(5,"textarea",23),t.j41(6,"button",14),t.bIt("click",function(){t.eBV(e);const n=t.XpG(),l=n.$implicit,m=n.$index,a=t.XpG(2);return t.Njj(a.saveAnswer(l,m))}),t.EFF(7),t.k0s()()}if(2&o){const e=t.XpG(),i=e.$implicit,n=e.$index,l=t.XpG(2);t.R7$(),t.vxM(1,l.isUser?-1:1),t.R7$(),t.vxM(2,null!=i.supervisorOptions&&i.supervisorOptions.length?2:-1),t.R7$(),t.Mz_("for","question",n,"supervisorText"),t.R7$(),t.SpI(" ",i.supervisorText?"Podane uzasadnienie":"Uzasadnij wyb\xf3r"," "),t.R7$(),t.Mz_("id","question",n,"supervisorText"),t.R7$(),t.Y8G("disabled",!!i.supervisorText||l.isUser||l.templateId),t.R7$(),t.SpI(" ",i.supervisorText?"Zapisane":"Zapisz"," ")}}function D(o,s){if(1&o){const e=t.RV6();t.j41(0,"div",7)(1,"h5",8),t.EFF(2),t.k0s(),t.j41(3,"h4",9),t.EFF(4),t.k0s(),t.j41(5,"div",10),t.DNE(6,G,2,0,"h5",11)(7,X,5,3),t.j41(8,"label",12),t.EFF(9),t.k0s(),t.nrm(10,"textarea",13),t.j41(11,"button",14),t.bIt("click",function(){const n=t.eBV(e),l=n.$implicit,m=n.$index,a=t.XpG(2);return t.Njj(a.saveAnswer(l,m))}),t.EFF(12),t.k0s()(),t.DNE(13,N,8,9,"div",15),t.k0s(),t.nrm(14,"hr")}if(2&o){const e=s.$implicit,i=s.$index,n=t.XpG(2);t.Y8G("formGroupName",i),t.R7$(2),t.Lme("Pytanie ",i+1," z ",null==n.form.questions?null:n.form.questions.length,""),t.R7$(2),t.JRh(e.name),t.R7$(),t.Y8G("ngClass",n.isUser?"p-2":"bg-light p-5"),t.R7$(),t.vxM(6,n.isUser?-1:6),t.R7$(),t.vxM(7,null!=e.options&&e.options.length?7:-1),t.R7$(),t.Mz_("for","question",i,"userText"),t.R7$(),t.SpI(" ",e.userText?"Podane uzasadnienie":"Uzasadnij wyb\xf3r"," "),t.R7$(),t.Mz_("id","question",i,"userText"),t.R7$(),t.Y8G("disabled",e.userText||!n.isUser||n.templateId),t.R7$(),t.SpI(" ",e.userText?"Zapisane":"Zapisz"," "),t.R7$(),t.Y8G("ngxPermissionsExcept",n.Role.user)}}function q(o,s){if(1&o&&(t.DNE(0,k,11,5,"div",0)(1,E,2,0),t.j41(2,"form",1),t.Z7z(3,D,15,15,null,null,t.fX1),t.k0s()),2&o){const e=t.XpG();t.vxM(0,e.form&&e.form.name&&null!=e.form.questions&&e.form.questions.length?0:1),t.R7$(2),t.Y8G("formGroup",e.formGroup),t.R7$(),t.Dyx(e.form.questions)}}const Y=[{path:"",component:(()=>{class o{constructor(e,i,n,l,m,a){this.route=e,this.userService=i,this.formsService=n,this.templateService=l,this.questionService=m,this.fb=a,this.formGroup=this.fb.group({}),this.Role=x.X,this.formId="",this.templateId="",this.isUser=this.userService.currentRole===x.X.user}ngOnInit(){this.formId=this.route.snapshot.paramMap.get("formId")||"",this.templateId=this.route.snapshot.paramMap.get("templateId")||"",this.formId?this.fetchSurvey():this.templateId&&this.fetchTemplate()}fetchSurvey(){this.formsService.getFormById(this.formId).subscribe({next:e=>{this.form=e,this.initForm()}})}fetchTemplateQuestions(e){(0,v.H)(e.questions).pipe((0,C.H)(n=>this.questionService.getQuestionById(n)),function b(){return(0,F.N)((o,s)=>{(function R(o,s){return(0,F.N)((0,$.S)(o,s,arguments.length>=2,!1,!0))})(T,[])(o).subscribe(s)})}()).subscribe({next:n=>{const l={...e,questions:n};this.form=l,this.initForm()}})}fetchTemplate(){this.templateService.getTemplatesById(this.templateId).subscribe({next:e=>{this.fetchTemplateQuestions(e)}})}initForm(){const e={};this.form.questions?.forEach((i,n)=>{void 0!==i.id&&(e[n]=this.fb.group({userText:new r.MJ({value:i.userText,disabled:!!i.userText||!this.isUser||!!this.templateId},r.k0.required),selectedUserOption:new r.MJ({value:i.selectedUserOption?.id,disabled:!!i.selectedUserOption||!this.isUser||!!this.templateId},r.k0.required),supervisorText:new r.MJ({value:i.supervisorText,disabled:!!i.supervisorText||this.isUser||!!this.templateId},r.k0.required),selectedSupervisorOption:new r.MJ({value:i.selectedSupervisorOption?.id,disabled:!!i.selectedSupervisorOption||this.isUser||!!this.templateId},r.k0.required)}))}),this.formGroup=this.fb.group(e)}saveAnswer(e,i){const n=this.formGroup.get(`${i}`)?.value;console.log("formid: ",this.formId,"questionId: ",e.id,"questionUserText: ",n.userText,"selectedOptionid: ",n.selectedUserOption),e&&e.id&&n.userText&&n.selectedUserOption&&this.questionService.saveQuestionAnswer(this.formId,e.id,n,n.id)}static#t=this.\u0275fac=function(i){return new(i||o)(t.rXU(u.nX),t.rXU(c.DL),t.rXU(c.fS),t.rXU(c.ze),t.rXU(c.rp),t.rXU(r.ok))};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["app-fill-form"]],standalone:!0,features:[t.aNF],decls:2,vars:1,consts:[[1,"row"],[3,"formGroup"],[1,"col"],[1,"fw-normal","mb-2"],[1,"my-1"],[1,"col","d-flex","justify-content-center","align-items-center"],[1,"btn","btn-white","border","fw-medium","border-2","border-primary","text-nowrap","text-primary","rounded-4","py-2","px-4",3,"routerLink"],[1,"row","mt-5",3,"formGroupName"],[1,"my-2"],[1,"my-3"],[1,"col","d-flex","flex-column","flex-nowrap","justify-content-end","m-2","rounded-4",3,"ngClass"],[1,"text-center","mb-3"],[1,"form-label",3,"for"],["formControlName","userText","rows","3","type","text",1,"form-control","form-control-lg","bg-light",3,"id"],[1,"btn","btn-primary","w-25","text-white","py-2","px-4","my-3",3,"click","disabled"],["class","col d-flex flex-column flex-nowrap justify-content-end p-5 m-2 rounded-4",4,"ngxPermissionsExcept"],[1,"flex-grow-1"],[1,"d-flex","flex-row","align-items-center","fs-5","mb-3"],["type","radio","formControlName","selectedUserOption",1,"form-check-input",3,"value","id"],[1,"form-check-label","flex-grow-1",3,"for"],["class","text-muted ms-3",4,"ngxPermissionsExcept"],[1,"text-muted","ms-3"],[1,"col","d-flex","flex-column","flex-nowrap","justify-content-end","p-5","m-2","rounded-4"],["formControlName","supervisorText","rows","3","type","text",1,"form-control","form-control-lg","bg-light",3,"id"],["type","radio","formControlName","selectedSupervisorOption",1,"form-check-input",3,"value","id"]],template:function(i,n){1&i&&t.DNE(0,I,1,0,"app-loading-spinner")(1,q,5,2),2&i&&t.vxM(0,n.formsService.isProcessingSomething?0:1)},dependencies:[r.X1,r.qT,r.me,r.Fm,r.BC,r.cb,r.j4,r.JD,r.$R,_.YU,f.Ov,f.f6,_.vh,j.N,u.Wk],encapsulation:2})}return o})()}]}}]);