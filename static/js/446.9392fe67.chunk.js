"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[446],{5446:function(n,e,t){t.r(e),t.d(e,{default:function(){return an}});var r=t(2791),o=t(9434),i=t(3634),a=t(6916),c=function(n){return n.contacts.items},s=function(n){return n.contacts.isLoading},u=function(n){return n.contacts.error},l=function(n){return n.filter},h=(0,a.P1)([c,l],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),m=t(3682),d=t(5243),f=t(3329);function p(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(d.g4,{height:"50",width:"50",radius:"9",color:"#fff",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},wrapperClassName:"",visible:!0})})}var x,g,b,Z,j=t(5705),w=t(7103),v=t(5562),y=t(168),P=t(6444),z=P.ZP.label(x||(x=(0,y.Z)(["\n  display: block;\n  text-align: left;\n  font-weight: ",";\n  margin-top: ","px;\n  color: ",";\n"])),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.text})),k=(0,P.ZP)(j.gN)(g||(g=(0,y.Z)(["\n  width: 100%;\n  font-size: ",";\n  padding: ","px 4px;\n  margin-top: 6px;\n  outline: none;\n  border: "," ",";\n  border-radius: ",";\n  box-sizing: border-box;\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.radii.normal})),C=P.ZP.button(b||(b=(0,y.Z)(["\n  display: block;\n  width: 100%;\n  margin-top: ","px;\n  padding: ","px;\n  border: ",";\n  border-radius: ",";\n  font-weight: ",";\n  font-size: ",";\n  color: ",";\n  transition: all 100ms linear;\n  background-color: ",";\n\n  :hover,\n  :focus {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.secondary})),S=P.ZP.p(Z||(Z=(0,y.Z)(["\n  color: red;\n  text-align: left;\n  margin: 4px 0 8px;\n"])));function N(n){var e=n.name;return(0,f.jsx)(j.Bc,{name:e,render:function(n){return(0,f.jsx)(S,{children:n})}})}var _={name:"",phone:""},L=w.Ry().shape({name:w.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces.").required("Please fill in the name"),phone:w.Z_().matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Please fill in the number")});function A(){var n=(0,o.I0)(),e=(0,o.v9)(c);return(0,f.jsx)(j.J9,{initialValues:_,validationSchema:L,onSubmit:function(t,r){var o=r.resetForm;if(function(n){return e.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))}(t))return v.Notify.info("".concat(t.name," is already in contacts."));n((0,i.uK)(t)),o()},children:(0,f.jsxs)(j.l0,{autoComplete:"off",children:[(0,f.jsxs)(z,{children:["Name",(0,f.jsx)(k,{type:"text",name:"name"})]}),(0,f.jsx)(N,{name:"name"}),(0,f.jsxs)(z,{children:["Number",(0,f.jsx)(k,{type:"tel",name:"phone"})]}),(0,f.jsx)(N,{name:"phone"}),(0,f.jsx)(C,{type:"submit",children:"Add contact"})]})})}v.Notify.init({position:"center-top",fontSize:"16px",timeout:4e3,width:"400px"});var F,I,W,q,K=t(8820),R=t(6355),$=(0,P.ZP)(R.DNl)(F||(F=(0,y.Z)(["\n  margin-right: ","px;\n"])),(function(n){return n.theme.space[3]})),B=(0,P.ZP)(C)(I||(I=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  width: auto;\n  text-align: right;\n  margin-top: 0;\n  margin-left: auto;\n"])));function D(n){var e=n.contact,t=(0,o.I0)(),r=e.name,a=e.phone,c=e.id;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)($,{}),r,": ",a,(0,f.jsx)(B,{type:"button",onClick:function(){return t((0,i.GK)(c))},children:(0,f.jsx)(K.oHP,{size:18})})]})}var E=P.ZP.ul(W||(W=(0,y.Z)(["\n    text-align: left;\n"]))),G=P.ZP.li(q||(q=(0,y.Z)(["\n    display: flex;\n    align-items: center;\n    color: ",";\n    font-size: ",";\n    \n    :not(:last-child) {\n        margin-bottom: 10px;\n    };\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.s}));function H(){var n=(0,o.v9)(h);return(0,f.jsx)(E,{children:n.map((function(n){return(0,f.jsx)(G,{children:(0,f.jsx)(D,{contact:n})},n.id)}))})}var J,M,T,V,O,Q,U=t(1273),X=(0,P.ZP)(z)(J||(J=(0,y.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.white})),Y=P.ZP.input(M||(M=(0,y.Z)(["\n  width: 100%;\n  font-size: ",";\n  padding: ","px 4px;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  outline: none;\n  border: "," ",";\n  border-radius: ",";\n  box-sizing: border-box;\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.text}));function nn(){var n=(0,o.v9)(l),e=(0,o.I0)();return(0,f.jsxs)(X,{children:["Find contacts by name",(0,f.jsx)(Y,{type:"text",value:n,onChange:function(n){var t=n.target.value;e((0,U.M)(t))}})]})}var en=P.ZP.h1(T||(T=(0,y.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.primary})),tn=P.ZP.h2(V||(V=(0,y.Z)(["\n  color: ",";\n  letter-spacing: 0.02em;\n"])),(function(n){return n.theme.colors.white})),rn=P.ZP.p(O||(O=(0,y.Z)(["\n  font-weight: ",";\n  padding: ","px;\n  border-radius: ",";\n  background-color: ",";\n  color: white;\n"])),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.secondary})),on=(0,P.ZP)(rn)(Q||(Q=(0,y.Z)(["\n  background-color: ",";\n"])),(function(n){return n.theme.colors.bad}));function an(){var n=(0,o.I0)(),e=(0,o.v9)(h),t=(0,o.v9)(s),a=(0,o.v9)(u),c=(0,o.v9)(l);return(0,r.useEffect)((function(){n((0,i.yF)())}),[n]),(0,f.jsxs)(m.Z,{as:"section",maxWidth:"400px",width:"80vw",textAlign:"center",mx:"auto",mt:5,pt:5,bg:"white",borderRadius:"normal",boxShadow:"normal",overflow:"hidden",children:[(0,f.jsxs)(m.Z,{px:5,children:[(0,f.jsx)(en,{children:"Phonebook"}),(0,f.jsx)(A,{})]}),(0,f.jsxs)(m.Z,{mt:5,py:5,px:5,bg:"primary",children:[(0,f.jsx)(tn,{children:"Contacts"}),(0,f.jsx)(nn,{}),t&&(0,f.jsx)(p,{}),a&&(0,f.jsxs)(on,{children:["Something goes wrong. ",a,"."]}),e.length>0&&(0,f.jsx)(H,{}),""!==c&&0===e.length&&(0,f.jsx)(rn,{children:"This name was not found"})]})]})}}}]);
//# sourceMappingURL=446.9392fe67.chunk.js.map