import{A as a,B as v,C as F,D as U,E as B,F as l,G as I,H as c,I as q,J as ge,K as ve,L as ye,M as R,N as _e,O as Ce,P as Ve,Q as ie,R as H,S as De,T as L,U as be,X as Me,Y as Ae,Z as ne,a as g,b as D,c as ce,d as he,e as pe,f as P,g as k,h as y,i as b,j as E,k as p,l as _,m,n as fe,o as me,p as Q,q as w,r as T,s as u,t as d,u as ee,v as C,w as j,x as G,y as te,z as s}from"./chunk-4ORIW474.js";var Ee=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-navbar"]],decls:14,vars:0,consts:[[1,"navbar","navbar-expand-lg","bg-light"],[1,"container-fluid"],["routerLink","/homepage/home",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarTogglerDemo02","aria-controls","navbarTogglerDemo02","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarTogglerDemo02",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0","d-flex","flex-row","justify-content-around"],[1,"nav-item"],["routerLink","weather-app",1,"nav-link"],["routerLink","about-us",1,"nav-link"]],template:function(r,o){r&1&&(s(0,"nav",0)(1,"div",1)(2,"a",2),l(3,"Weather App"),a(),s(4,"button",3),v(5,"span",4),a(),s(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),l(10,"Home"),a()(),s(11,"li",7)(12,"a",9),l(13,"About"),a()()()()()())},dependencies:[Ae]});let t=e;return t})();var we=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-footer"]],decls:10,vars:0,consts:[[1,"fixed-bottom","d-flex","flex-row","justify-content-center"],[1,"text-center","footer-data"],[1,"list","d-flex","flex-row","justify-content-around","footer-content","mt-2"],[1,"item","align-self-start"],[1,"item","align-self-center"],[1,"item","align-self-end"]],template:function(r,o){r&1&&(s(0,"div",0)(1,"div",1),l(2," More about us: "),s(3,"ul",2)(4,"li",3),l(5,"Wikipedia"),a(),s(6,"li",4),l(7,"YouTube"),a(),s(8,"li",5),l(9,"Google"),a()()()())},styles:[".footer-data[_ngcontent-%COMP%]{width:max(80vw,10vw)}.footer-content[_ngcontent-%COMP%]{list-style:none}"]});let t=e;return t})();function ut(t,e){if(t&1&&(s(0,"div",2)(1,"p",3),l(2),a(),s(3,"p"),l(4),a(),s(5,"ul",4)(6,"li",5)(7,"p",6),l(8),a()(),s(9,"li",5)(10,"p",6),l(11),a()(),s(12,"li",5)(13,"p",6),l(14),a()(),s(15,"li",5)(16,"p",6),l(17),a()(),s(18,"li",5)(19,"p",6),l(20),v(21,"img",7),a()()()()),t&2){let n=U();u(2),I(n.weatherData.location.name),u(2),q("",n.weatherData.location.region,",",n.weatherData.location.country,""),u(4),c("Humidity: ",n.weatherData.current.humidity,"%"),u(3),c("Visiblity: ",n.weatherData.current.vis_km,"km"),u(3),c("Wind Direction: ",n.weatherData.current.wind_dir,""),u(3),c("Wind Speed: ",n.weatherData.current.wind_kph,"km/hr"),u(3),c("",n.weatherData.current.temp_c,"\xB0C "),u(),B("src",n.weatherData.current.condition.icon,T)}}var Fe=(()=>{let e=class e{constructor(i){this.http=i,this.coords=[],navigator.geolocation.getCurrentPosition(r=>{console.log(r.coords),this.locationsecondMethod=r.coords,this.locationlatitude=this.locationsecondMethod.latitude,this.locationlongitude=this.locationsecondMethod.longitude,console.log(this.locationlatitude),console.log(this.locationlongitude),this.coords=[this.locationlatitude,this.locationlongitude],console.warn(this.coords),this.http.get(`https://weatherapi-com.p.rapidapi.com/current.json?q=${this.coords}`,{headers:{"X-RapidAPI-Key":"9037939a91msh6613bfac2da4929p15ee2cjsn0cee449337cd","X-RapidAPI-Host":"weatherapi-com.p.rapidapi.com"}}).subscribe(o=>{console.log(o),this.weatherData=o})})}};e.\u0275fac=function(r){return new(r||e)(d(L))},e.\u0275cmp=p({type:e,selectors:[["app-homepage"]],decls:5,vars:1,consts:[[1,"navbar","navbar-expand-lg","bg-light"],["class","container-fluid",4,"ngIf"],[1,"container-fluid"],[1,"navbar-brand"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0","d-flex","flex-row","justify-content-end","w-100"],[1,"nav-item"],[1,"nav-link","me-2"],[3,"src"]],template:function(r,o){r&1&&(v(0,"app-navbar"),s(1,"nav",0),j(2,ut,22,9,"div",1),a(),v(3,"router-outlet")(4,"app-footer")),r&2&&(u(2),G("ngIf",o.weatherData))},dependencies:[H,Me,Ee,we]});let t=e;return t})();var Ie=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-about-us"]],decls:5,vars:0,consts:[[1,"about-us"],[1,"about"],[1,"ms-5"]],template:function(r,o){r&1&&(s(0,"div",0)(1,"h1",1),l(2,"About Us"),a(),s(3,"p",2),l(4,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis expedita, vel vitae nemo repellendus itaque quas aliquam delectus, maiores quaerat eligendi minima nisi consequatur sint est sequi maxime natus! Nulla, dolorum eveniet molestiae voluptates mollitia modi quos. Eaque magnam quae repudiandae modi deserunt nam aut ipsam provident aspernatur earum quod inventore, debitis hic odit nisi aliquid ipsa tempora accusamus ex et dolorum quibusdam rerum explicabo non! Eos fugiat sapiente cumque praesentium nihil sit accusantium labore, reiciendis, suscipit quia amet laboriosam earum magnam maiores iure dolorem impedit ab soluta dolores libero aliquam sint excepturi culpa? Amet et sit blanditiis, odio minus vel accusantium aut aspernatur dicta deserunt dolorum fuga culpa animi eius debitis nostrum est, eligendi nihil inventore at modi voluptatem mollitia! Nemo accusantium modi, ducimus ullam numquam odit nisi inventore quaerat et vero incidunt perspiciatis suscipit amet consequuntur? Debitis tenetur aperiam unde at, obcaecati vel odit qui repudiandae blanditiis minima cumque, pariatur, saepe iure expedita facilis numquam alias enim. Ex sequi molestias assumenda excepturi dolores tempore necessitatibus repudiandae sunt. Ipsum numquam ducimus facilis ex dignissimos tempore, laborum molestiae in atque facere a quod itaque ipsa quaerat laudantium et harum eius, ut qui voluptates architecto sit cum quia saepe. Odio quae impedit maxime adipisci deserunt molestias enim est quaerat quidem obcaecati? Totam, enim sed! Animi, architecto! Dicta repellat quas deleniti illo, nisi doloremque mollitia sed iste sapiente aliquid necessitatibus molestias, quos blanditiis soluta? Voluptatibus, repellendus earum ullam excepturi assumenda porro a voluptatem dignissimos autem sapiente accusantium cupiditate. Enim quisquam dolore, quibusdam ipsa vero consequatur quis porro maiores voluptatibus ullam minima facere inventore asperiores eius corrupti assumenda unde voluptatum illo reiciendis! Culpa itaque provident, sit soluta nesciunt illo. Minima vel dolorum fuga porro cumque rem, est, sunt non atque impedit doloribus! Eum corporis vero soluta, voluptatem ipsa facere consectetur unde distinctio enim ea vitae ex rerum! Asperiores laborum iure, architecto saepe itaque beatae quam voluptatum tenetur quas molestias pariatur inventore deserunt voluptatibus soluta reprehenderit dolore error, dicta, explicabo suscipit dolorem rerum commodi. Facere, explicabo numquam. Vero inventore vitae nesciunt perspiciatis iusto similique error voluptates perferendis officia quia, debitis aliquid dolor eligendi distinctio! Corporis, commodi possimus recusandae obcaecati voluptatum minus beatae unde. Omnis amet nemo optio sapiente cupiditate illo distinctio. Cumque assumenda id fugit impedit. Assumenda, omnis temporibus. Officiis, eum. Cupiditate aliquid corporis suscipit, pariatur harum hic qui eum aperiam deserunt tenetur eaque quibusdam adipisci illum ut dolorem voluptatem rem dolorum officia quidem?"),a()())},styles:[".about-us[_ngcontent-%COMP%]{margin:2em 4em}.about[_ngcontent-%COMP%]{font-size:larger;font-size:4rem}"]});let t=e;return t})();var je=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(d(ee),d(Q))},e.\u0275dir=m({type:e});let t=e;return t})(),dt=(()=>{let e=class e extends je{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=me(e)))(o||e)}})(),e.\u0275dir=m({type:e,features:[C]});let t=e;return t})(),Ge=new b("");var ct={provide:Ge,useExisting:k(()=>Y),multi:!0};function ht(){let t=ie()?ie().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var pt=new b(""),Y=(()=>{let e=class e extends je{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!ht())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(d(ee),d(Q),d(pt,8))},e.\u0275dir=m({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&F("input",function(h){return o._handleInput(h.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(h){return o._compositionEnd(h.target.value)})},features:[R([ct]),C]});let t=e;return t})();var Ue=new b(""),Be=new b("");function qe(t){return t!=null}function Re(t){return _e(t)?ce(t):t}function He(t){let e={};return t.forEach(n=>{e=n!=null?g(g({},e),n):e}),Object.keys(e).length===0?null:e}function Le(t,e){return e.map(n=>n(t))}function ft(t){return!t.validate}function We(t){return t.map(e=>ft(e)?e:n=>e.validate(n))}function mt(t){if(!t)return null;let e=t.filter(qe);return e.length==0?null:function(n){return He(Le(n,e))}}function oe(t){return t!=null?mt(We(t)):null}function gt(t){if(!t)return null;let e=t.filter(qe);return e.length==0?null:function(n){let i=Le(n,e).map(Re);return pe(i).pipe(he(He))}}function se(t){return t!=null?gt(We(t)):null}function xe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function vt(t){return t._rawValidators}function yt(t){return t._rawAsyncValidators}function re(t){return t?Array.isArray(t)?t:[t]:[]}function $(t,e){return Array.isArray(t)?t.includes(e):t===e}function Se(t,e){let n=re(e);return re(t).forEach(r=>{$(n,r)||n.push(r)}),n}function Ne(t,e){return re(e).filter(n=>!$(t,n))}var z=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=oe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=se(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},A=class extends z{get formDirective(){return null}get path(){return null}},O=class extends z{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},X=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},_t={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ui=D(g({},_t),{"[class.ng-submitted]":"isSubmitted"}),$e=(()=>{let e=class e extends X{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(d(O,2))},e.\u0275dir=m({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&te("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[C]});let t=e;return t})(),ze=(()=>{let e=class e extends X{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(d(A,10))},e.\u0275dir=m({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&te("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[C]});let t=e;return t})();var x="VALID",W="INVALID",M="PENDING",S="DISABLED";function Xe(t){return(J(t)?t.validators:t)||null}function Ct(t){return Array.isArray(t)?oe(t):t||null}function Ze(t,e){return(J(e)?e.asyncValidators:t)||null}function Vt(t){return Array.isArray(t)?se(t):t||null}function J(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Dt(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new P(1e3,"");if(!i[n])throw new P(1001,"")}function bt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new P(1002,"")})}var Z=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===x}get invalid(){return this.status===W}get pending(){return this.status==M}get disabled(){return this.status===S}get enabled(){return this.status!==S}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Se(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Se(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ne(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ne(e,this._rawAsyncValidators))}hasValidator(e){return $(this._rawValidators,e)}hasAsyncValidator(e){return $(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=M,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=S,this.errors=null,this._forEachChild(i=>{i.disable(D(g({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(D(g({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=x,this._forEachChild(i=>{i.enable(D(g({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(D(g({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===x||this.status===M)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:x}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=M,this._hasOwnPendingAsyncValidator=!0;let n=Re(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new w,this.statusChanges=new w}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?W:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(M)?M:this._anyControlsHaveStatus(W)?W:x}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){J(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ct(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Vt(this._rawAsyncValidators)}},K=class extends Z{constructor(e,n,i){super(Xe(n),Ze(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){bt(this,!0,e),Object.keys(e).forEach(i=>{Dt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ae=new b("CallSetDisabledState",{providedIn:"root",factory:()=>le}),le="always";function Mt(t,e){return[...e.path,t]}function Ke(t,e,n=le){Ye(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Et(t,e),Ft(t,e),wt(t,e),At(t,e)}function Oe(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function At(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function Ye(t,e){let n=vt(t);e.validator!==null?t.setValidators(xe(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=yt(t);e.asyncValidator!==null?t.setAsyncValidators(xe(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Oe(e._rawValidators,r),Oe(e._rawAsyncValidators,r)}function Et(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Je(t,e)})}function wt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Je(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Je(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ft(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function It(t,e){t==null,Ye(t,e)}function xt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function St(t){return Object.getPrototypeOf(t.constructor)===dt}function Nt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Ot(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===Y?n=o:St(o)?i=o:r=o}),r||i||n||null}var Pt={provide:A,useExisting:k(()=>ue)},N=Promise.resolve(),ue=(()=>{let e=class e extends A{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new w,this.form=new K({},oe(i),se(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(i){N.then(()=>{let r=this._findContainer(i.path);i.control=r.registerControl(i.name,i.control),Ke(i.control,i,this.callSetDisabledState),i.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(i)})}getControl(i){return this.form.get(i.path)}removeControl(i){N.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name),this._directives.delete(i)})}addFormGroup(i){N.then(()=>{let r=this._findContainer(i.path),o=new K({});It(o,i),r.registerControl(i.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(i){N.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name)})}getFormGroup(i){return this.form.get(i.path)}updateModel(i,r){N.then(()=>{this.form.get(i.path).setValue(r)})}setValue(i){this.control.setValue(i)}onSubmit(i){return this.submitted=!0,Nt(this.form,this._directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(i){return i.pop(),i.length?this.form.get(i):this.form}};e.\u0275fac=function(r){return new(r||e)(d(Ue,10),d(Be,10),d(ae,8))},e.\u0275dir=m({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&F("submit",function(h){return o.onSubmit(h)})("reset",function(){return o.onReset()})},inputs:{options:[E.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[R([Pt]),C]});let t=e;return t})();function Pe(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function ke(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var kt=class extends Z{constructor(e=null,n,i){super(Xe(n),Ze(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),J(n)&&(n.nonNullable||n.initialValueIsDefault)&&(ke(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Pe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Pe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ke(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Tt={provide:O,useExisting:k(()=>de)},Te=Promise.resolve(),de=(()=>{let e=class e extends O{constructor(i,r,o,f,h,nt){super(),this._changeDetectorRef=h,this.callSetDisabledState=nt,this.control=new kt,this._registered=!1,this.name="",this.update=new w,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Ot(this,f)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),xt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Ke(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Te.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&Ve(r);Te.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Mt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(d(A,9),d(Ue,10),d(Be,10),d(Ge,10),d(Ce,8),d(ae,8))},e.\u0275dir=m({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[E.None,"disabled","isDisabled"],model:[E.None,"ngModel","model"],options:[E.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[R([Tt]),C,fe]});let t=e;return t})(),Qe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=m({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var jt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=_({type:e}),e.\u0275inj=y({});let t=e;return t})();var et=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ae,useValue:i.callSetDisabledState??le}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=_({type:e}),e.\u0275inj=y({imports:[jt]});let t=e;return t})();function Ut(t,e){if(t&1&&(s(0,"div",7)(1,"div",8)(2,"div",9)(3,"div",10)(4,"p",11),l(5),a(),s(6,"p",12),l(7),a(),s(8,"p",13),l(9),a()()(),s(10,"div",14)(11,"div",15),l(12),v(13,"img",16),a(),s(14,"div",17)(15,"p"),l(16),a(),s(17,"p",18),l(18),a(),s(19,"p",18),l(20),a()()()(),s(21,"div",19)(22,"div",20)(23,"p",18),l(24),a()(),s(25,"div",21)(26,"p",18),l(27),a()()(),s(28,"div",22)(29,"p",18),l(30),a(),s(31,"p",18),l(32),a()()()),t&2){let n=U();u(5),I(n.weatherData.location.name),u(2),q("",n.weatherData.location.region,",",n.weatherData.location.country,""),u(2),c("Last updated: ",n.weatherData.current.last_updated,""),u(3),c(" ",n.weatherData.current.temp_c,"\xB0C "),u(),B("src",n.weatherData.current.condition.icon,T),u(3),I(n.weatherData.current.condition.text),u(2),c("Feels like: ",n.weatherData.current.feelslike_c,"\xB0C"),u(2),c("UV: ",n.weatherData.current.uv,""),u(4),c("Humidity: ",n.weatherData.current.humidity,"%"),u(3),c("Visiblity: ",n.weatherData.current.vis_km,"km"),u(3),c("Wind Direction: ",n.weatherData.current.wind_dir,""),u(2),c("Wind Speed: ",n.weatherData.current.wind_kph,"km/hr")}}var tt=(()=>{let e=class e{constructor(i){this.http=i,this.city=""}getWeather(i){this.http.get(`https://weatherapi-com.p.rapidapi.com/current.json?q=${i}`,{headers:{"X-RapidAPI-Key":"9037939a91msh6613bfac2da4929p15ee2cjsn0cee449337cd","X-RapidAPI-Host":"weatherapi-com.p.rapidapi.com"}}).subscribe(r=>{this.weatherData=r})}};e.\u0275fac=function(r){return new(r||e)(d(L))},e.\u0275cmp=p({type:e,selectors:[["app-weather-app"]],decls:8,vars:2,consts:[[1,"app-body","mt-3","d-flex","justify-content-center","mb-5"],[1,"dataWeather","mt-5","mb-5"],[1,"searchLocation","text-center"],["role","search",1,"d-flex"],["type","text","placeholder","E.g. London","aria-label","E.g. London","name","city",1,"form-control","me-2","inputSearch",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-outline-success",3,"click"],["class","data mt-3 ms-5",4,"ngIf"],[1,"data","mt-3","ms-5"],[1,"locIcon","d-flex","flex-row"],[1,"d-flex","flex-column"],[1,"location"],[1,"locationName"],[1,"locationCountry"],[1,"last_updated_time"],[1,"tempIcon","ms-5"],[1,"temp"],[3,"src"],[1,"feelTemp"],[1,"dataShown"],[1,"humidVisible","d-flex","flex-row"],[1,"humidity"],[1,"ms-2","visiblity"],[1,"windDetails"]],template:function(r,o){r&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3)(4,"input",4),ye("ngModelChange",function(h){return ve(o.city,h)||(o.city=h),h}),a(),s(5,"button",5),F("click",function(){return o.getWeather(o.city)}),l(6,"Search"),a()()(),j(7,Ut,33,13,"div",6),a()()),r&2&&(u(4),ge("ngModel",o.city),u(3),G("ngIf",o.weatherData))},dependencies:[H,Qe,Y,$e,ze,de,ue],styles:["*[_ngcontent-%COMP%]{font-family:Times New Roman,Times,serif}.locationName[_ngcontent-%COMP%]{font-weight:600;font-size:2em}.inputSearch[_ngcontent-%COMP%]{width:max(50vw,30vw)}.locationCountry[_ngcontent-%COMP%]{font-size:1em}.last_updated_time[_ngcontent-%COMP%]{font-size:.85em}.tempClass[_ngcontent-%COMP%]{font-weight:600;font-size:2em}.dataShown[_ngcontent-%COMP%]{font-weight:500}"]});let t=e;return t})();var Bt=[{path:"home",component:Fe,children:[{path:"weather-app",component:tt},{path:"about-us",component:Ie}]}],it=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=_({type:e}),e.\u0275inj=y({imports:[ne.forChild(Bt),ne]});let t=e;return t})();var Ni=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=_({type:e}),e.\u0275inj=y({imports:[De,it,be,et]});let t=e;return t})();export{Ni as ComponentsModule};
