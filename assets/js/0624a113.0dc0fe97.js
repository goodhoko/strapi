"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9081],{728:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=o(3117),n=(o(7294),o(3905));const a={title:"useAPIErrorHandler",slug:"/hooks/use-api-error-handler",description:"API reference for the useAPIErrorHandler() hook",tags:["hooks","api","error-handling"]},i=void 0,s={unversionedId:"docs/core/helper-plugin/hooks/use-api-error-handler",id:"docs/core/helper-plugin/hooks/use-api-error-handler",title:"useAPIErrorHandler",description:"API reference for the useAPIErrorHandler() hook",source:"@site/docs/docs/01-core/helper-plugin/hooks/use-api-error-handler.mdx",sourceDirName:"docs/01-core/helper-plugin/hooks",slug:"/hooks/use-api-error-handler",permalink:"/hooks/use-api-error-handler",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/helper-plugin/hooks/use-api-error-handler.mdx",tags:[{label:"hooks",permalink:"/tags/hooks"},{label:"api",permalink:"/tags/api"},{label:"error-handling",permalink:"/tags/error-handling"}],version:"current",frontMatter:{title:"useAPIErrorHandler",slug:"/hooks/use-api-error-handler",description:"API reference for the useAPIErrorHandler() hook",tags:["hooks","api","error-handling"]},sidebar:"docs",previous:{title:"Transactions",permalink:"/docs/core/database/transactions"},next:{title:"useCallbackRef",permalink:"/docs/core/helper-plugin/hooks/use-callback-ref"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>formatAPIError(error: ResponseError): string</code>",id:"formatapierrorerror-responseerror-string",level:3},{value:"<code>normalizeAPIError(error: ResponseError): Object</code>",id:"normalizeapierrorerror-responseerror-object",level:3}],c={toc:p};function d(e){let{components:r,...o}=e;return(0,n.kt)("wrapper",(0,t.Z)({},c,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The purpose of this hook is to offer a unified way to handle errors thrown by API endpoints, regardless of the type of error (",(0,n.kt)("inlineCode",{parentName:"p"},"ValidationError"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ApplicationErrror")," ...)\nthat has been thrown."),(0,n.kt)("p",null,"It receives an optional error prefixing function (often ",(0,n.kt)("inlineCode",{parentName:"p"},"getTrad"),"), which will be used to make the error message translateable."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"The following example shows a basic way to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"useAPIErrorHandler")," hook:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nimport { useAPIErrorHandler, useFetchClient, useNotification } from '@strapi/helper-plugin';\nimport getTrad from '../utils';\n\nconst Component = () => {\n    const { get } = useFetchClient();\n    const { formatAPIError } = useAPIErrorHandler(getTrad);\n    const toggleNotification = useNotification();\n\n    const handleDeleteItem = async () => {\n        try {\n            return await get('/admin');\n        } catch(error) {\n            toggleNotification({\n                type: 'warning',\n                message: formatAPIError(error)\n            })\n        }\n    }\n\n    return (\n        <button onClick={handleDeleteItem}>Delete item</button>\n    )\n}\n")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"formatapierrorerror-responseerror-string"},(0,n.kt)("inlineCode",{parentName:"h3"},"formatAPIError(error: ResponseError): string")),(0,n.kt)("p",null,"This method stringifies the ",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseObject")," into a string. If multiple errors are thrown by the API, which happens e.g.\nin the case of a ",(0,n.kt)("inlineCode",{parentName:"p"},"ValidationError"),", all errors will bo concatenated into a single string."),(0,n.kt)("h3",{id:"normalizeapierrorerror-responseerror-object"},(0,n.kt)("inlineCode",{parentName:"h3"},"normalizeAPIError(error: ResponseError): Object")),(0,n.kt)("p",null,"This method is exported alongside from the ",(0,n.kt)("inlineCode",{parentName:"p"},"@strapi/helper-plugin"),". It can be used to normalize the format of ",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseError"),"\nin places where the hook can not called (e.g. outside of a React component)."))}d.isMDXComponent=!0},3905:(e,r,o)=>{o.d(r,{Zo:()=>c,kt:()=>h});var t=o(7294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=t.createContext({}),p=function(e){var r=t.useContext(l),o=r;return e&&(o="function"==typeof e?e(r):i(i({},r),e)),o},c=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(o),h=n,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return o?t.createElement(m,i(i({ref:r},c),{},{components:o})):t.createElement(m,i({ref:r},c))}));function h(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);