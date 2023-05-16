"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[378],{8378:function(e,n,t){t.r(n),t.d(n,{default:function(){return ge}});var r=t(9434),a=t(1413),i=t(5705),o=t(176),s=t(4087),l=t(2764),c=t(2392),d=t(8208),u=t(6069),v=t(9439),f=t(4363),h=t(9886),m=t(7872),p=t(9219),x=t(2996),b=t(2503),g=t(6992),y=t(184),k=(0,h.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),Z=(0,v.Z)(k,2),w=Z[0],C=Z[1],j=(0,m.G)((function(e,n){var t=(0,p.jC)("FormError",e),r=(0,x.Lr)(e),i=(0,c.NJ)();return(null==i?void 0:i.isInvalid)?(0,y.jsx)(w,{value:t,children:(0,y.jsx)(b.m.div,(0,a.Z)((0,a.Z)({},null==i?void 0:i.getErrorMessageProps(r,n)),{},{className:(0,g.cx)("chakra-form__error-message",e.className),__css:(0,a.Z)({display:"flex",alignItems:"center"},t.text)}))}):null}));j.displayName="FormErrorMessage",(0,m.G)((function(e,n){var t=C(),r=(0,c.NJ)();if(!(null==r?void 0:r.isInvalid))return null;var i=(0,g.cx)("chakra-form__error-icon",e.className);return(0,y.jsx)(f.J,(0,a.Z)((0,a.Z)({ref:n,"aria-hidden":!0},e),{},{__css:t.icon,className:i,children:(0,y.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})}))})).displayName="FormErrorIcon";var I=t(4925),P=t(2791);var S=(0,h.k)({name:"CheckboxGroupContext",strict:!1}),E=(0,v.Z)(S,2),N=(E[0],E[1]),B=["isIndeterminate","isChecked"];function L(e){return(0,y.jsx)(b.m.svg,(0,a.Z)((0,a.Z)({width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16}},e),{},{children:(0,y.jsx)("polyline",{points:"1.5 6 4.5 9 10.5 1"})}))}function M(e){return(0,y.jsx)(b.m.svg,(0,a.Z)((0,a.Z)({width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4}},e),{},{children:(0,y.jsx)("line",{x1:"21",x2:"3",y1:"12",y2:"12"})}))}function _(e){var n=e.isIndeterminate,t=e.isChecked,r=(0,I.Z)(e,B),i=n?M:L;return t||n?(0,y.jsx)(b.m.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:(0,y.jsx)(i,(0,a.Z)({},r))}):null}var F=t(7762),D=t(3461),A=t(9205),z=t(5280),R=t(6367),G=t(4591),K={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},q=!1,J=null,O=!1,U=!1,W=new Set;function T(e,n){W.forEach((function(t){return t(e,n)}))}var H="undefined"!==typeof window&&null!=window.navigator&&/^Mac/.test(window.navigator.platform);function X(e){var n;O=!0,(n=e).metaKey||!H&&n.altKey||n.ctrlKey||"Control"===n.key||"Shift"===n.key||"Meta"===n.key||(J="keyboard",T("keyboard",e))}function V(e){if(J="pointer","mousedown"===e.type||"pointerdown"===e.type){O=!0;var n=e.composedPath?e.composedPath()[0]:e.target,t=!1;try{t=n.matches(":focus-visible")}catch(r){}if(t)return;T("pointer",e)}}function Q(e){var n;(0===(n=e).mozInputSource&&n.isTrusted||0===n.detail&&!n.pointerType)&&(O=!0,J="virtual")}function Y(e){e.target!==window&&e.target!==document&&(O||U||(J="virtual",T("virtual",e)),O=!1,U=!1)}function $(){O=!1,U=!0}function ee(){return"pointer"!==J}function ne(){if("undefined"!==typeof window&&!q){var e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){O=!0;for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];e.apply(this,t)},document.addEventListener("keydown",X,!0),document.addEventListener("keyup",X,!0),document.addEventListener("click",Q,!0),window.addEventListener("focus",Y,!0),window.addEventListener("blur",$,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",V,!0),document.addEventListener("pointermove",V,!0),document.addEventListener("pointerup",V,!0)):(document.addEventListener("mousedown",V,!0),document.addEventListener("mousemove",V,!0),document.addEventListener("mouseup",V,!0)),q=!0}}function te(e){ne(),e(ee());var n=function(){return e(ee())};return W.add(n),function(){W.delete(n)}}var re=["defaultChecked","isChecked","isFocusable","onChange","isIndeterminate","name","value","tabIndex","aria-label","aria-labelledby","aria-invalid"];function ae(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object.assign({},e),a=(0,F.Z)(t);try{for(a.s();!(n=a.n()).done;){var i=n.value;i in r&&delete r[i]}}catch(o){a.e(o)}finally{a.f()}return r}function ie(e){e.preventDefault(),e.stopPropagation()}var oe=t(2554),se=["spacing","className","children","iconColor","iconSize","icon","isChecked","isDisabled","onChange","inputProps"],le={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},ce={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},de=(0,oe.F4)({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),ue=(0,oe.F4)({from:{opacity:0},to:{opacity:1}}),ve=(0,oe.F4)({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),fe=(0,m.G)((function(e,n){var t=N(),r=(0,a.Z)((0,a.Z)({},t),e),i=(0,p.jC)("Checkbox",r),o=(0,x.Lr)(e),s=o.spacing,l=void 0===s?"0.5rem":s,c=o.className,d=o.children,u=o.iconColor,f=o.iconSize,h=o.icon,m=void 0===h?(0,y.jsx)(_,{}):h,k=o.isChecked,Z=o.isDisabled,w=void 0===Z?null==t?void 0:t.isDisabled:Z,C=o.onChange,j=o.inputProps,S=(0,I.Z)(o,se),E=k;(null==t?void 0:t.value)&&o.value&&(E=t.value.includes(o.value));var B=C;(null==t?void 0:t.onChange)&&o.value&&(B=(0,g.PP)(t.onChange,C));var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,D.K)(e),t=n.isDisabled,r=n.isReadOnly,i=n.isRequired,o=n.isInvalid,s=n.id,l=n.onBlur,c=n.onFocus,d=n["aria-describedby"],u=e.defaultChecked,f=e.isChecked,h=e.isFocusable,m=e.onChange,p=e.isIndeterminate,x=e.name,b=e.value,y=e.tabIndex,k=void 0===y?void 0:y,Z=e["aria-label"],w=e["aria-labelledby"],C=e["aria-invalid"],j=ae((0,I.Z)(e,re),["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),S=(0,R.W)(m),E=(0,R.W)(l),N=(0,R.W)(c),B=(0,P.useState)(!1),L=(0,v.Z)(B,2),M=L[0],_=L[1],F=(0,P.useState)(!1),q=(0,v.Z)(F,2),J=q[0],O=q[1],U=(0,P.useState)(!1),W=(0,v.Z)(U,2),T=W[0],H=W[1],X=(0,P.useState)(!1),V=(0,v.Z)(X,2),Q=V[0],Y=V[1];(0,P.useEffect)((function(){return te(_)}),[]);var $=(0,P.useRef)(null),ee=(0,P.useState)(!0),ne=(0,v.Z)(ee,2),oe=ne[0],se=ne[1],le=(0,P.useState)(!!u),ce=(0,v.Z)(le,2),de=ce[0],ue=ce[1],ve=void 0!==f,fe=ve?f:de,he=(0,P.useCallback)((function(e){r||t?e.preventDefault():(ve||ue(fe?e.target.checked:!!p||e.target.checked),null==S||S(e))}),[r,t,fe,ve,p,S]);(0,A.G)((function(){$.current&&($.current.indeterminate=Boolean(p))}),[p]),(0,z.r)((function(){t&&O(!1)}),[t,O]),(0,A.G)((function(){var e=$.current;(null==e?void 0:e.form)&&(e.form.onreset=function(){ue(!!u)})}),[]);var me=t&&!h,pe=(0,P.useCallback)((function(e){" "===e.key&&Y(!0)}),[Y]),xe=(0,P.useCallback)((function(e){" "===e.key&&Y(!1)}),[Y]);(0,A.G)((function(){$.current&&$.current.checked!==fe&&ue($.current.checked)}),[$.current]);var be=(0,P.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=function(e){J&&e.preventDefault(),Y(!0)};return(0,a.Z)((0,a.Z)({},e),{},{ref:n,"data-active":(0,g.PB)(Q),"data-hover":(0,g.PB)(T),"data-checked":(0,g.PB)(fe),"data-focus":(0,g.PB)(J),"data-focus-visible":(0,g.PB)(J&&M),"data-indeterminate":(0,g.PB)(p),"data-disabled":(0,g.PB)(t),"data-invalid":(0,g.PB)(o),"data-readonly":(0,g.PB)(r),"aria-hidden":!0,onMouseDown:(0,g.v0)(e.onMouseDown,i),onMouseUp:(0,g.v0)(e.onMouseUp,(function(){return Y(!1)})),onMouseEnter:(0,g.v0)(e.onMouseEnter,(function(){return H(!0)})),onMouseLeave:(0,g.v0)(e.onMouseLeave,(function(){return H(!1)}))})}),[Q,fe,t,J,M,T,p,o,r]),ge=(0,P.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)((0,a.Z)({},j),e),{},{ref:(0,G.lq)(n,(function(e){e&&se("LABEL"===e.tagName)})),onClick:(0,g.v0)(e.onClick,(function(){var e;oe||(null==(e=$.current)||e.click(),requestAnimationFrame((function(){var e;null==(e=$.current)||e.focus({preventScroll:!0})})))})),"data-disabled":(0,g.PB)(t),"data-checked":(0,g.PB)(fe),"data-invalid":(0,g.PB)(o)})}),[j,t,fe,o,oe]),ye=(0,P.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:(0,G.lq)($,n),type:"checkbox",name:x,value:b,id:s,tabIndex:k,onChange:(0,g.v0)(e.onChange,he),onBlur:(0,g.v0)(e.onBlur,E,(function(){return O(!1)})),onFocus:(0,g.v0)(e.onFocus,N,(function(){return O(!0)})),onKeyDown:(0,g.v0)(e.onKeyDown,pe),onKeyUp:(0,g.v0)(e.onKeyUp,xe),required:i,checked:fe,disabled:me,readOnly:r,"aria-label":Z,"aria-labelledby":w,"aria-invalid":C?Boolean(C):o,"aria-describedby":d,"aria-disabled":t,style:K})}),[x,b,s,he,E,N,pe,xe,i,fe,me,r,Z,w,C,o,d,t,k]),ke=(0,P.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:n,onMouseDown:(0,g.v0)(e.onMouseDown,ie),"data-disabled":(0,g.PB)(t),"data-checked":(0,g.PB)(fe),"data-invalid":(0,g.PB)(o)})}),[fe,t,o]);return{state:{isInvalid:o,isFocused:J,isChecked:fe,isActive:Q,isHovered:T,isIndeterminate:p,isDisabled:t,isReadOnly:r,isRequired:i},getRootProps:ge,getCheckboxProps:be,getInputProps:ye,getLabelProps:ke,htmlProps:j}}((0,a.Z)((0,a.Z)({},S),{},{isDisabled:w,isChecked:E,onChange:B})),M=L.state,F=L.getInputProps,q=L.getCheckboxProps,J=L.getLabelProps,O=L.getRootProps,U=function(e){var n=(0,P.useState)(e),t=(0,v.Z)(n,2),r=t[0],a=t[1],i=(0,P.useState)(!1),o=(0,v.Z)(i,2),s=o[0],l=o[1];return e!==r&&(l(!0),a(e)),s}(M.isChecked),W=(0,P.useMemo)((function(){return(0,a.Z)({animation:U?M.isIndeterminate?"".concat(ue," 20ms linear, ").concat(ve," 200ms linear"):"".concat(de," 200ms linear"):void 0,fontSize:f,color:u},i.icon)}),[u,f,U,M.isIndeterminate,i.icon]),T=(0,P.cloneElement)(m,{__css:W,isIndeterminate:M.isIndeterminate,isChecked:M.isChecked});return(0,y.jsxs)(b.m.label,(0,a.Z)((0,a.Z)({__css:(0,a.Z)((0,a.Z)({},ce),i.container),className:(0,g.cx)("chakra-checkbox",c)},O()),{},{children:[(0,y.jsx)("input",(0,a.Z)({className:"chakra-checkbox__input"},F(j,n))),(0,y.jsx)(b.m.span,(0,a.Z)((0,a.Z)({__css:(0,a.Z)((0,a.Z)({},le),i.control),className:"chakra-checkbox__control"},q()),{},{children:T})),d&&(0,y.jsx)(b.m.span,(0,a.Z)((0,a.Z)({className:"chakra-checkbox__label"},J()),{},{__css:(0,a.Z)({marginStart:l},i.label),children:d}))]}))}));fe.displayName="Checkbox";var he=t(4224),me=t(5171),pe=(0,t(5903).I)({displayName:"ArrowRightIcon",path:(0,y.jsxs)("g",{fill:"currentColor",children:[(0,y.jsx)("path",{d:"M13.584,12a2.643,2.643,0,0,1-.775,1.875L3.268,23.416a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L.768,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,13.584,12Z"}),(0,y.jsx)("path",{d:"M23.75,12a2.643,2.643,0,0,1-.775,1.875l-9.541,9.541a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L10.934,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,23.75,12Z"})]})}),xe=function(){var e=(0,r.I0)();return(0,y.jsx)(o.k,{bg:"blue.100",align:"center",justify:"center",h:"100vh",children:(0,y.jsx)(s.xu,{bg:"blue.300",p:6,rounded:"md",w:"20%",position:"fixed",top:150,children:(0,y.jsx)(i.J9,{initialValues:{name:"",email:"",password:"",rememberMe:!1},onSubmit:function(e){alert(JSON.stringify(e,null,2))},children:function(n){n.handleSubmit;var t=n.errors,r=n.touched;return(0,y.jsx)("form",{onSubmit:function(n,t){e((0,me.z2)((0,a.Z)({},n))),t.resetForm()},children:(0,y.jsxs)(l.g,{spacing:4,align:"flex-start",children:[(0,y.jsxs)(c.NI,{children:[(0,y.jsx)(d.l,{htmlFor:"name",fontSize:"30px",children:"Username"}),(0,y.jsx)(i.gN,{as:u.I,id:"name",name:"name",type:"name",variant:"filled",fontSize:"20px",bg:"blue.100"})]}),(0,y.jsxs)(c.NI,{children:[(0,y.jsx)(d.l,{htmlFor:"email",fontSize:"30px",children:"Email Address"}),(0,y.jsx)(i.gN,{as:u.I,id:"email",name:"email",type:"email",variant:"filled",fontSize:"20px",bg:"blue.100"})]}),(0,y.jsxs)(c.NI,{isInvalid:!!t.password&&r.password,children:[(0,y.jsx)(d.l,{htmlFor:"password",fontSize:"30px",children:"Password"}),(0,y.jsx)(i.gN,{as:u.I,id:"password",name:"password",type:"password",variant:"filled",fontSize:"20px",bg:"blue.100",validate:function(e){var n;return e.length<5&&(n="Password must contain at least 6 characters"),n}}),(0,y.jsx)(j,{children:t.password})]}),(0,y.jsx)(i.gN,{as:fe,id:"rememberMe",name:"rememberMe",colorScheme:"blue.100",children:"Remember me?"}),(0,y.jsx)(he.z,{type:"submit",colorScheme:"yellow",fontSize:"20px",rightIcon:(0,y.jsx)(pe,{}),width:"full",children:"Login"})]})})}})})})},be=t(4217);function ge(){var e=(0,r.v9)(be.Ao),n=(0,r.v9)(be.J);return(0,y.jsxs)("div",{children:[(0,y.jsx)("title",{children:"Registration"}),(0,y.jsx)(xe,{}),e&&!n&&(0,y.jsx)("b",{children:"Loading..."})]})}},5903:function(e,n,t){t.d(n,{I:function(){return l}});var r=t(1413),a=t(4363),i=t(7872),o=t(2791),s=t(184);function l(e){var n=e.viewBox,t=void 0===n?"0 0 24 24":n,l=e.d,c=e.displayName,d=e.defaultProps,u=void 0===d?{}:d,v=o.Children.toArray(e.path),f=(0,i.G)((function(e,n){return(0,s.jsx)(a.J,(0,r.Z)((0,r.Z)((0,r.Z)({ref:n,viewBox:t},u),e),{},{children:v.length?v:(0,s.jsx)("path",{fill:"currentColor",d:l})}))}));return f.displayName=c,f}}}]);
//# sourceMappingURL=378.896dbfe6.chunk.js.map