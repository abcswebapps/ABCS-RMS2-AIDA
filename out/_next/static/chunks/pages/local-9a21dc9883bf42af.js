(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[909],{1430:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/local",function(){return n(9139)}])},9139:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return A}});var t=n(4051),a=n.n(t),s=n(5893),l=n(7294),i=n(1664),c=n(9008),o=n(1163),u=n(3153),d={};var h=function(e,r){var n=(0,l.useState)((function(){return Object.prototype.hasOwnProperty.call(d,e)?d[e]:"function"===typeof r?r():r})),t=n[0],a=n[1];return[t,function(r){d[e]=r,a(r)}]};function f(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return r.filter(Boolean).join(" ")}var x=function(e){var r=e.node,n=e.handleOpenDirectory,t=(0,o.useRouter)();return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"w-full flex align-middle hover:bg-gray-100 cursor-pointer",onClick:function(){"directory"===r.type?n(r):t.push(r.path)},children:[(0,s.jsx)("div",{className:"py-2 mr-2 h-5 w-5 ",children:"directory"===r.type?(0,s.jsx)("svg",{className:f(r.isOpen?"text-gray-400 rotate-90":"text-gray-300","flex-shrink-0 transform "),viewBox:"0 0 20 20","aria-hidden":"true",children:(0,s.jsx)("path",{d:"M6 6L14 10L6 14V6Z",fill:"currentColor"})}):null}),(0,s.jsx)("div",{className:"py-2 whitespace-nowrap text-sm",children:r.name})]},r.name),(0,s.jsx)("div",{className:"border-l ml-2",children:r.isOpen&&r.children.length>0?r.children.map((function(e){return(0,s.jsx)("div",{className:"pl-4",children:(0,s.jsx)(x,{node:e,handleOpenDirectory:n})},e.name)})):null})]})},m=x;function p(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function v(e,r,n,t,a,s,l){try{var i=e[s](l),c=i.value}catch(o){return void n(o)}i.done?r(c):Promise.resolve(c).then(t,a)}function y(e){return function(){var r=this,n=arguments;return new Promise((function(t,a){var s=e.apply(r,n);function l(e){v(s,t,a,l,i,"next",e)}function i(e){v(s,t,a,l,i,"throw",e)}l(void 0)}))}}function j(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,s=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(t=n.next()).done)&&(s.push(t.value),!r||s.length!==r);l=!0);}catch(c){i=!0,a=c}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return s}}(e,r)||g(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,r){if(e){if("string"===typeof e)return p(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,r):void 0}}var b=function(){var e=y(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"http://localhost:8000",e.next=4,fetch("".concat("http://localhost:8000","/getItemsAtPath"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:r})});case 4:return n=e.sent,e.abrupt("return",n.json());case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),N=function(){var e=(0,l.useRef)(null),r=j(h("tree",[]),2),n=r[0],t=r[1],i=j(h("breadcrumbs",[]),2),c=i[0];i[1];(0,l.useEffect)((function(){y(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.length){e.next=5;break}return e.next=3,b("/");case 3:r=e.sent,t(r);case 5:case"end":return e.stop()}}),e)})))()}),[n.length,t]),(0,l.useEffect)((function(){var r=function(r){"k"===r.key&&r.ctrlKey&&(r.preventDefault(),e.current&&e.current.focus())};return document.addEventListener("keydown",r),function(){document.removeEventListener("keydown",r)}}));var o=function(){var e=y(a().mark((function e(r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.isOpen=!r.isOpen,e.next=3,b(r.path);case 3:r.children=e.sent,t(w(n));case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow px-5 py-6 sm:px-6",children:[(0,s.jsx)("div",{className:"flex-1 flex items-center justify-center",children:(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("label",{htmlFor:"search",className:"sr-only",children:"Search"}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,s.jsx)(u.W1M,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),(0,s.jsx)("input",{id:"search",name:"search",className:"block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm",placeholder:"Search",type:"search",ref:e}),(0,s.jsx)("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500 text-sm",children:"Ctrl+k"})]})]})}),(0,s.jsx)("nav",{className:"flex py-8","aria-label":"Breadcrumb",children:(0,s.jsxs)("ol",{role:"list",className:"flex items-center space-x-4",children:[(0,s.jsx)("li",{children:(0,s.jsx)("div",{children:(0,s.jsxs)("a",{href:"#",className:"text-gray-400 hover:text-gray-500",children:[(0,s.jsx)(u.tvw,{className:"flex-shrink-0 h-5 w-5","aria-hidden":"true"}),(0,s.jsx)("span",{className:"sr-only",children:"Home"})]})})}),c.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("svg",{className:"flex-shrink-0 h-5 w-5 text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20","aria-hidden":"true",children:(0,s.jsx)("path",{d:"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"})}),(0,s.jsx)("a",{className:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700",children:e})]})},e)}))]})}),(0,s.jsx)("div",{className:"flex flex-col",children:(0,s.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:(0,s.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:(0,s.jsx)("div",{className:"min-w-full",children:n.map((function(e){return(0,s.jsx)(m,{node:e,handleOpenDirectory:o},e.name)}))})})})})]})};function k(e,r,n,t,a,s,l){try{var i=e[s](l),c=i.value}catch(o){return void n(o)}i.done?r(c):Promise.resolve(c).then(t,a)}function A(){var e=(0,o.useRouter)(),r=(0,l.useState)(!0),n=r[0],t=r[1],u=(0,l.useState)(!1),d=u[0],h=u[1];return(0,l.useEffect)((function(){var e;(e=a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8000/ping");case 3:t(!1),h(!0),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),t(!1),h(!1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var r=this,n=arguments;return new Promise((function(t,a){var s=e.apply(r,n);function l(e){k(s,t,a,l,i,"next",e)}function i(e){k(s,t,a,l,i,"throw",e)}l(void 0)}))})()})),(0,l.useEffect)((function(){e.prefetch("/[...aida]")})),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.default,{children:(0,s.jsx)("title",{children:"Local Dashboard - AIDA"})}),(0,s.jsxs)("div",{className:"min-h-full",children:[(0,s.jsxs)("div",{className:"bg-teal-700 pb-32",children:[(0,s.jsx)("nav",{className:"bg-teal-700 border-b border-teal-300 border-opacity-25 lg:border-none",children:(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-4 lg:px-8",children:(0,s.jsx)("div",{className:"relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25",children:(0,s.jsx)("div",{className:"px-2 flex items-center lg:px-0",children:(0,s.jsx)("div",{className:"flex-shrink-0 text-white text-4xl",children:(0,s.jsx)(i.default,{href:"/",children:"AIDA"})})})})})}),(0,s.jsx)("header",{className:"py-10",children:(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,s.jsx)("h1",{className:"text-3xl font-bold text-white",children:"Dashboard"})})})]}),(0,s.jsx)("main",{className:"-mt-32",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8",children:[n&&(0,s.jsx)("div",{className:"bg-white rounded-lg shadow px-5 py-6 sm:px-6 h-72 justify-center flex items-center",children:(0,s.jsxs)("svg",{className:"animate-spin h-8 w-8 text-teal-700",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,s.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,s.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}),!n&&d&&(0,s.jsx)(N,{}),!n&&!d&&(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow px-5 py-6 sm:px-6 h-72 justify-center flex items-center flex-col",children:[(0,s.jsx)("p",{children:"Failed to reach server... are you running a local image server?"}),(0,s.jsxs)("p",{className:"pt-2",children:["See"," ",(0,s.jsx)("a",{href:"https://github.com/alanaberdeen/AIDA#run-locally",className:"text-teal-800 hover:underline",children:"the Github docs"})," ","for details."]})]})]})})]})]})}},1163:function(e,r,n){e.exports=n(387)}},function(e){e.O(0,[785,774,888,179],(function(){return r=1430,e(e.s=r);var r}));var r=e.O();_N_E=r}]);