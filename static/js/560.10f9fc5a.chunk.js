/*! For license information please see 560.10f9fc5a.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[560],{5560:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return Te}});var t=r(2791),n=r(9434),s=r(6052),i=r(1413),o=r(5705),l=r(4925),c=r(1694),d=r.n(c),f=r(2007),u=r.n(f),m=r(184),v=["as","className","type","tooltip"],p={type:u().string,tooltip:u().bool,as:u().elementType},b=t.forwardRef((function(e,a){var r=e.as,t=void 0===r?"div":r,n=e.className,s=e.type,o=void 0===s?"valid":s,c=e.tooltip,f=void 0!==c&&c,u=(0,l.Z)(e,v);return(0,m.jsx)(t,(0,i.Z)((0,i.Z)({},u),{},{ref:a,className:d()(n,"".concat(o,"-").concat(f?"tooltip":"feedback"))}))}));b.displayName="Feedback",b.propTypes=p;var x=b,h=t.createContext({}),y=["xxl","xl","lg","md","sm","xs"],N=t.createContext({prefixes:{},breakpoints:y,minBreakpoint:"xs"});N.Consumer,N.Provider;function Z(e,a){var r=(0,t.useContext)(N).prefixes;return e||r[a]||a}var g=["id","bsPrefix","className","type","isValid","isInvalid","as"],j=t.forwardRef((function(e,a){var r=e.id,n=e.bsPrefix,s=e.className,o=e.type,c=void 0===o?"checkbox":o,f=e.isValid,u=void 0!==f&&f,v=e.isInvalid,p=void 0!==v&&v,b=e.as,x=void 0===b?"input":b,y=(0,l.Z)(e,g),N=(0,t.useContext)(h).controlId;return n=Z(n,"form-check-input"),(0,m.jsx)(x,(0,i.Z)((0,i.Z)({},y),{},{ref:a,type:c,id:r||N,className:d()(s,n,u&&"is-valid",p&&"is-invalid")}))}));j.displayName="FormCheckInput";var P=j,C=["bsPrefix","className","htmlFor"],I=t.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,s=e.htmlFor,o=(0,l.Z)(e,C),c=(0,t.useContext)(h).controlId;return r=Z(r,"form-check-label"),(0,m.jsx)("label",(0,i.Z)((0,i.Z)({},o),{},{ref:a,htmlFor:s||c,className:d()(n,r)}))}));I.displayName="FormCheckLabel";var k=I;var w=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],F=t.forwardRef((function(e,a){var r=e.id,n=e.bsPrefix,s=e.bsSwitchPrefix,o=e.inline,c=void 0!==o&&o,f=e.reverse,u=void 0!==f&&f,v=e.disabled,p=void 0!==v&&v,b=e.isValid,y=void 0!==b&&b,N=e.isInvalid,g=void 0!==N&&N,j=e.feedbackTooltip,C=void 0!==j&&j,I=e.feedback,F=e.feedbackType,R=e.className,T=e.style,S=e.title,O=void 0===S?"":S,L=e.type,_=void 0===L?"checkbox":L,z=e.label,V=e.children,A=e.as,E=void 0===A?"input":A,B=(0,l.Z)(e,w);n=Z(n,"form-check"),s=Z(s,"form-switch");var D=(0,t.useContext)(h).controlId,G=(0,t.useMemo)((function(){return{controlId:r||D}}),[D,r]),q=!V&&null!=z&&!1!==z||function(e,a){return t.Children.toArray(e).some((function(e){return t.isValidElement(e)&&e.type===a}))}(V,k),U=(0,m.jsx)(P,(0,i.Z)((0,i.Z)({},B),{},{type:"switch"===_?"checkbox":_,ref:a,isValid:y,isInvalid:g,disabled:p,as:E}));return(0,m.jsx)(h.Provider,{value:G,children:(0,m.jsx)("div",{style:T,className:d()(R,q&&n,c&&"".concat(n,"-inline"),u&&"".concat(n,"-reverse"),"switch"===_&&s),children:V||(0,m.jsxs)(m.Fragment,{children:[U,q&&(0,m.jsx)(k,{title:O,children:z}),I&&(0,m.jsx)(x,{type:F,tooltip:C,children:I})]})})})}));F.displayName="FormCheck";var R=Object.assign(F,{Input:P,Label:k}),T=r(4942),S=(r(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),O=t.forwardRef((function(e,a){var r,n,s=e.bsPrefix,o=e.type,c=e.size,f=e.htmlSize,u=e.id,v=e.className,p=e.isValid,b=void 0!==p&&p,x=e.isInvalid,y=void 0!==x&&x,N=e.plaintext,g=e.readOnly,j=e.as,P=void 0===j?"input":j,C=(0,l.Z)(e,S),I=(0,t.useContext)(h).controlId;(s=Z(s,"form-control"),N)?r=(0,T.Z)({},"".concat(s,"-plaintext"),!0):(n={},(0,T.Z)(n,s,!0),(0,T.Z)(n,"".concat(s,"-").concat(c),c),r=n);return(0,m.jsx)(P,(0,i.Z)((0,i.Z)({},C),{},{type:o,size:f,ref:a,readOnly:g,id:u||I,className:d()(v,r,b&&"is-valid",y&&"is-invalid","color"===o&&"".concat(s,"-color"))}))}));O.displayName="FormControl";var L=Object.assign(O,{Feedback:x}),_=/-(.)/g;var z=["className","bsPrefix","as"],V=function(e){return e[0].toUpperCase()+(a=e,a.replace(_,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var A=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.displayName,n=void 0===r?V(e):r,s=a.Component,o=a.defaultProps,c=t.forwardRef((function(a,r){var t=a.className,n=a.bsPrefix,c=a.as,f=void 0===c?s||"div":c,u=(0,l.Z)(a,z),v=(0,i.Z)((0,i.Z)({},o),u),p=Z(n,e);return(0,m.jsx)(f,(0,i.Z)({ref:r,className:d()(t,p)},v))}));return c.displayName=n,c}("form-floating"),E=["controlId","as"],B=t.forwardRef((function(e,a){var r=e.controlId,n=e.as,s=void 0===n?"div":n,o=(0,l.Z)(e,E),c=(0,t.useMemo)((function(){return{controlId:r}}),[r]);return(0,m.jsx)(h.Provider,{value:c,children:(0,m.jsx)(s,(0,i.Z)((0,i.Z)({},o),{},{ref:a}))})}));B.displayName="FormGroup";var D=B,G=r(9439),q=["as","bsPrefix","className"],U=["className"];function W(e){var a=e.as,r=e.bsPrefix,n=e.className,s=(0,l.Z)(e,q);r=Z(r,"col");var o=(0,t.useContext)(N).breakpoints,c=(0,t.useContext)(N).minBreakpoint,f=[],u=[];return o.forEach((function(e){var a,t,n,i=s[e];delete s[e],"object"===typeof i&&null!=i?(a=i.span,t=i.offset,n=i.order):a=i;var o=e!==c?"-".concat(e):"";a&&f.push(!0===a?"".concat(r).concat(o):"".concat(r).concat(o,"-").concat(a)),null!=n&&u.push("order".concat(o,"-").concat(n)),null!=t&&u.push("offset".concat(o,"-").concat(t))})),[(0,i.Z)((0,i.Z)({},s),{},{className:d().apply(void 0,[n].concat(f,u))}),{as:a,bsPrefix:r,spans:f}]}var H=t.forwardRef((function(e,a){var r=W(e),t=(0,G.Z)(r,2),n=t[0],s=n.className,o=(0,l.Z)(n,U),c=t[1],f=c.as,u=void 0===f?"div":f,v=c.bsPrefix,p=c.spans;return(0,m.jsx)(u,(0,i.Z)((0,i.Z)({},o),{},{ref:a,className:d()(s,!p.length&&v)}))}));H.displayName="Col";var Y=H,K=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],M=t.forwardRef((function(e,a){var r=e.as,n=void 0===r?"label":r,s=e.bsPrefix,o=e.column,c=void 0!==o&&o,f=e.visuallyHidden,u=void 0!==f&&f,v=e.className,p=e.htmlFor,b=(0,l.Z)(e,K),x=(0,t.useContext)(h).controlId;s=Z(s,"form-label");var y="col-form-label";"string"===typeof c&&(y="".concat(y," ").concat(y,"-").concat(c));var N=d()(v,s,u&&"visually-hidden",c&&y);return p=p||x,c?(0,m.jsx)(Y,(0,i.Z)({ref:a,as:"label",className:N,htmlFor:p},b)):(0,m.jsx)(n,(0,i.Z)({ref:a,className:N,htmlFor:p},b))}));M.displayName="FormLabel";var J=M,$=["bsPrefix","className","id"],Q=t.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,s=e.id,o=(0,l.Z)(e,$),c=(0,t.useContext)(h).controlId;return r=Z(r,"form-range"),(0,m.jsx)("input",(0,i.Z)((0,i.Z)({},o),{},{type:"range",ref:a,className:d()(n,r),id:s||c}))}));Q.displayName="FormRange";var X=Q,ee=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],ae=t.forwardRef((function(e,a){var r=e.bsPrefix,n=e.size,s=e.htmlSize,o=e.className,c=e.isValid,f=void 0!==c&&c,u=e.isInvalid,v=void 0!==u&&u,p=e.id,b=(0,l.Z)(e,ee),x=(0,t.useContext)(h).controlId;return r=Z(r,"form-select"),(0,m.jsx)("select",(0,i.Z)((0,i.Z)({},b),{},{size:s,ref:a,className:d()(o,r,n&&"".concat(r,"-").concat(n),f&&"is-valid",v&&"is-invalid"),id:p||x}))}));ae.displayName="FormSelect";var re=ae,te=["bsPrefix","className","as","muted"],ne=t.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,n=e.as,s=void 0===n?"small":n,o=e.muted,c=(0,l.Z)(e,te);return r=Z(r,"form-text"),(0,m.jsx)(s,(0,i.Z)((0,i.Z)({},c),{},{ref:a,className:d()(t,r,o&&"text-muted")}))}));ne.displayName="FormText";var se=ne,ie=t.forwardRef((function(e,a){return(0,m.jsx)(R,(0,i.Z)((0,i.Z)({},e),{},{ref:a,type:"switch"}))}));ie.displayName="Switch";var oe=Object.assign(ie,{Input:R.Input,Label:R.Label}),le=["bsPrefix","className","children","controlId","label"],ce=t.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,n=e.children,s=e.controlId,o=e.label,c=(0,l.Z)(e,le);return r=Z(r,"form-floating"),(0,m.jsxs)(D,(0,i.Z)((0,i.Z)({ref:a,className:d()(t,r),controlId:s},c),{},{children:[n,(0,m.jsx)("label",{htmlFor:s,children:o})]}))}));ce.displayName="FloatingLabel";var de=ce,fe=["className","validated","as"],ue={_ref:u().any,validated:u().bool,as:u().elementType},me=t.forwardRef((function(e,a){var r=e.className,t=e.validated,n=e.as,s=void 0===n?"form":n,o=(0,l.Z)(e,fe);return(0,m.jsx)(s,(0,i.Z)((0,i.Z)({},o),{},{ref:a,className:d()(r,t&&"was-validated")}))}));me.displayName="Form",me.propTypes=ue;var ve=Object.assign(me,{Group:D,Control:L,Floating:A,Check:R,Switch:oe,Label:J,Text:se,Range:X,Select:re,FloatingLabel:de}),pe=["as","disabled"];function be(e){var a=e.tagName,r=e.disabled,t=e.href,n=e.target,s=e.rel,i=e.role,o=e.onClick,l=e.tabIndex,c=void 0===l?0:l,d=e.type;a||(a=null!=t||null!=n||null!=s?"a":"button");var f={tagName:a};if("button"===a)return[{type:d||"button",disabled:r},f];var u=function(e){(r||"a"===a&&function(e){return!e||"#"===e.trim()}(t))&&e.preventDefault(),r?e.stopPropagation():null==o||o(e)};return"a"===a&&(t||(t="#"),r&&(t=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:r?void 0:c,href:t,target:"a"===a?n:void 0,"aria-disabled":r||void 0,rel:"a"===a?s:void 0,onClick:u,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),u(e))}},f]}var xe=t.forwardRef((function(e,a){var r=e.as,t=e.disabled,n=function(e,a){if(null==e)return{};var r,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,pe),s=be(Object.assign({tagName:r,disabled:t},n)),i=(0,G.Z)(s,2),o=i[0],l=i[1].tagName;return(0,m.jsx)(l,Object.assign({},n,o,{ref:a}))}));xe.displayName="Button";var he=["as","bsPrefix","variant","size","active","disabled","className"],ye=t.forwardRef((function(e,a){var r=e.as,t=e.bsPrefix,n=e.variant,s=void 0===n?"primary":n,o=e.size,c=e.active,f=void 0!==c&&c,u=e.disabled,v=void 0!==u&&u,p=e.className,b=(0,l.Z)(e,he),x=Z(t,"btn"),h=be((0,i.Z)({tagName:r,disabled:v},b)),y=(0,G.Z)(h,2),N=y[0],g=y[1].tagName;return(0,m.jsx)(g,(0,i.Z)((0,i.Z)((0,i.Z)({},N),b),{},{ref:a,disabled:v,className:d()(p,x,f&&"active",s&&"".concat(x,"-").concat(s),o&&"".concat(x,"-").concat(o),b.href&&v&&"disabled")}))}));ye.displayName="Button";var Ne=ye,Ze=r(8007),ge=function(e){return e.contacts.items},je=function(e){return e.contacts.isLoading},Pe=function(e){return e.contacts.error},Ce={name:"",number:""},Ie=Ze.Ry().shape({name:Ze.Z_().min(2,"Too Short!").max(20,"Too Long!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/gm,"Name may contain only letters, apostrophe, dash and spaces").required(),number:Ze.Z_().min(6,"Too Short!").max(15,"Too Long!").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/gm,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required()}),ke=function(){var e=(0,n.I0)(),a=(0,n.v9)(ge);return(0,m.jsx)(o.J9,{initialValues:Ce,onSubmit:function(r,t){if(a.find((function(e){return e.name.toLowerCase()===r.name.toLowerCase()})))return alert(r.name+" is already in contacts.");e((0,s.uK)((0,i.Z)({},r))),t.resetForm()},validationSchema:Ie,children:(0,m.jsxs)(ve,{as:o.l0,className:"mb-5",children:[(0,m.jsx)(ve.Group,{className:"mb-3",controlId:"formContactName",children:(0,m.jsxs)(ve.Label,{children:["Name",(0,m.jsx)(ve.Control,{as:o.gN,type:"text",name:"name"}),(0,m.jsx)(o.Bc,{name:"name",component:"div"})]})}),(0,m.jsxs)(ve.Group,{className:"mb-3",controlId:"formContactPhone",children:[(0,m.jsxs)(ve.Label,{children:["Phone",(0,m.jsx)(ve.Control,{as:o.gN,type:"tel",name:"number"})]}),(0,m.jsx)(o.Bc,{name:"number",component:"div"})]}),(0,m.jsx)(Ne,{type:"submit",children:"Add contact"})]})})},we=r(1634),Fe=function(e){return e.filter.filter},Re=function(){var e=(0,n.I0)(),a=(0,n.v9)(Fe);return(0,m.jsxs)(ve.Group,{className:"mb-3",controlId:"findContacts",children:[(0,m.jsx)(ve.Label,{children:" Find contacts by name"}),(0,m.jsx)(ve.Control,{type:"text",onChange:function(a){var r=a.target.value.toLowerCase();e((0,we.W)(r))},placeholder:"Taras",value:a})]})};function Te(){var e=(0,n.I0)(),a=(0,n.v9)(je),r=(0,n.v9)(Pe),i=(0,n.v9)(ge);return(0,t.useEffect)((function(){e((0,s.yF)())}),[e]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("title",{children:"Your Phone book"}),(0,m.jsx)(ke,{}),a&&!r&&(0,m.jsx)("b",{children:"Request in progress..."}),i.length>0?(0,m.jsx)("div",{children:(0,m.jsx)(Re,{})}):"You have no contacts"]})}},1694:function(e,a){var r;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&e.push(i)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var o in r)t.call(r,o)&&r[o]&&e.push(o)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(a,[]))||(e.exports=r)}()},888:function(e,a,r){"use strict";var t=r(9047);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,a,r,n,s,i){if(i!==t){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:s,resetWarningCache:n};return r.PropTypes=r,r}},2007:function(e,a,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2391:function(e){"use strict";var a=function(){};e.exports=a}}]);
//# sourceMappingURL=560.10f9fc5a.chunk.js.map