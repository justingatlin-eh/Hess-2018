webpackJsonp([0x67ef26645b2a,60335399758886],{119:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Hess Annual Report"}}},layoutContext:{}}},245:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),i=r(a),u=n(257),A=r(u),l=n(119),c=r(l);t.default=function(e){return i.default.createElement(A.default,o({},e,c.default))},e.exports=t.default},349:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,c;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(A(e))return!!A(t)&&(e=i.call(e),t=i.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var f=u(e),s=u(t)}catch(e){return!1}if(f.length!=s.length)return!1;for(f.sort(),s.sort(),a=f.length-1;a>=0;a--)if(f[a]!=s[a])return!1;for(a=f.length-1;a>=0;a--)if(c=f[a],!l(e[c],t[c],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=n(351),A=n(350),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},350:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},351:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},358:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},590:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),f=r(c),s=n(8),d=r(s),E=n(609),T=r(E),p=n(349),h=r(p),g=n(591),m=n(232),y=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,h.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case m.TAG_NAMES.SCRIPT:case m.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case m.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return A({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[A({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case m.TAG_NAMES.TITLE:return A({},o,(t={},t[r.type]=i,t.titleAttributes=A({},a),t));case m.TAG_NAMES.BODY:return A({},o,{bodyAttributes:A({},a)});case m.TAG_NAMES.HTML:return A({},o,{htmlAttributes:A({},a)})}return A({},o,(n={},n[r.type]=A({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=A({},t);return Object.keys(e).forEach(function(t){var r;n=A({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,u=o(a,["children"]),A=(0,g.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,i),e.type){case m.TAG_NAMES.LINK:case m.TAG_NAMES.META:case m.TAG_NAMES.NOSCRIPT:case m.TAG_NAMES.SCRIPT:case m.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:A,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:A,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=A({},r);return n&&(a=this.mapChildrenToProps(n,a)),f.default.createElement(e,a)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:d.default.object,bodyAttributes:d.default.object,children:d.default.oneOfType([d.default.arrayOf(d.default.node),d.default.node]),defaultTitle:d.default.string,defer:d.default.bool,encodeSpecialCharacters:d.default.bool,htmlAttributes:d.default.object,link:d.default.arrayOf(d.default.object),meta:d.default.arrayOf(d.default.object),noscript:d.default.arrayOf(d.default.object),onChangeClientState:d.default.func,script:d.default.arrayOf(d.default.object),style:d.default.arrayOf(d.default.object),title:d.default.string,titleAttributes:d.default.object,titleTemplate:d.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,g.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},b=function(){return null},M=(0,T.default)(g.reducePropsToState,g.handleClientStateChange,g.mapStateOnServer)(b),S=y(M);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},232:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},591:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(2),u=r(i),A=n(5),l=r(A),c=n(232),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},s=function(e){var t=h(e,c.TAG_NAMES.TITLE),n=h(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=h(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return h(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},T=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[c.TAG_NAMES.BASE]}).map(function(e){return e[c.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},p=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],A=u.toLowerCase();t.indexOf(A)===-1||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||A===c.TAG_PROPERTIES.REL&&"stylesheet"===e[A].toLowerCase()||(n=A),t.indexOf(u)===-1||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],A=(0,l.default)({},r[u],o[u]);r[u]=A}return e},[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},g=function(e){return{baseTag:T([c.TAG_PROPERTIES.HREF],e),bodyAttributes:E(c.ATTRIBUTE_NAMES.BODY,e),defer:h(e,c.HELMET_PROPS.DEFER),encode:h(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(c.ATTRIBUTE_NAMES.HTML,e),linkTags:p(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:p(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:p(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:p(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:p(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:s(e),titleAttributes:E(c.ATTRIBUTE_NAMES.TITLE,e)}},m=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){m(t)},0)}}(),y=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,M="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},I=null,v=function(e){I&&M(I),e.defer?I=b(function(){C(e,function(){I=null})}):(C(e),I=null)},C=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,A=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,s=e.title,d=e.titleAttributes;R(c.TAG_NAMES.BODY,r),R(c.TAG_NAMES.HTML,o),w(s,d);var E={baseTag:P(c.TAG_NAMES.BASE,n),linkTags:P(c.TAG_NAMES.LINK,a),metaTags:P(c.TAG_NAMES.META,i),noscriptTags:P(c.TAG_NAMES.NOSCRIPT,u),scriptTags:P(c.TAG_NAMES.SCRIPT,l),styleTags:P(c.TAG_NAMES.STYLE,f)},T={},p={};Object.keys(E).forEach(function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(p[e]=E[e].oldTags)}),t&&t(),A(e,T,p)},O=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=O(e)),R(c.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var A=i[u],l=t[A]||"";n.getAttribute(A)!==l&&n.setAttribute(A,l),o.indexOf(A)===-1&&o.push(A);var f=a.indexOf(A);f!==-1&&a.splice(f,1)}for(var s=a.length-1;s>=0;s--)n.removeAttribute(a[s]);o.length===a.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},P=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},G=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},N=function(e,t,n,r){var o=G(n),a=O(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+f(a,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+f(a,r)+"</"+e+">"},B=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=c.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t},t)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t},t)},Q=function(e,t,n){var r,o=(r={key:t},r[c.HELMET_ATTRIBUTE]=!0,r),a=L(n,o);return[u.default.createElement(c.TAG_NAMES.TITLE,a,t)]},_=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},x=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return Q(e,t.title,t.titleAttributes,n)},toString:function(){return N(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return L(t)},toString:function(){return G(t)}};default:return{toComponent:function(){return _(e,t)},toString:function(){return B(e,t,n)}}}},D=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,A=e.scriptTags,l=e.styleTags,f=e.title,s=void 0===f?"":f,d=e.titleAttributes;return{base:x(c.TAG_NAMES.BASE,t,r),bodyAttributes:x(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(c.ATTRIBUTE_NAMES.HTML,o,r),link:x(c.TAG_NAMES.LINK,a,r),meta:x(c.TAG_NAMES.META,i,r),noscript:x(c.TAG_NAMES.NOSCRIPT,u,r),script:x(c.TAG_NAMES.SCRIPT,A,r),style:x(c.TAG_NAMES.STYLE,l,r),title:x(c.TAG_NAMES.TITLE,{title:s,titleAttributes:d},r)}};t.convertReactPropstoHtmlAttributes=j,t.handleClientStateChange=v,t.mapStateOnServer=D,t.reducePropsToState=g,t.requestAnimationFrame=b,t.warn=S}).call(t,function(){return this}())},609:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function s(){E=e(d.map(function(e){return e.props})),T.canUseDOM?t(E):n&&(E=n(E))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var d=[],E=void 0,T=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return E},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=E;return E=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!f(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),s()},t.prototype.componentDidUpdate=function(){s()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),s()},t.prototype.render=function(){return l.createElement(u,this.props)},t}(A.Component);return T.displayName="SideEffect("+r(u)+")",T.canUseDOM=c.canUseDOM,T}}var A=n(2),l=r(A),c=r(n(358)),f=r(n(626));e.exports=u},626:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),A=0;A<a.length;A++){var l=a[A];if(!u(l))return!1;var c=e[l],f=t[l];if(o=n?n.call(r,c,f,l):void 0,o===!1||void 0===o&&c!==f)return!1}return!0}},631:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAwCAYAAADjCA+IAAAACXBIWXMAAAsSAAALEgHS3X78AAAD1UlEQVR4Xu2YwW0jMQxFXcKmg4UrCJAGdEgLufuUFtKCW0gLacEXFpBDGkgLxnbANRF9mGKsIe3NSFpABB48o/lfQ4kazcAbZt78xxDXgxZ8w+MKBoe4HrTgGx5XMDjE9aAF3/C4gsEhrgct+IbHFQwOcT1owTc8rmBwiOtBC77hcQWDQ1wPWvANjysYjN8nkuKD6/FhtOL1+h8GV9AA4jLSgvbXiT98fYhHvLV+k9HTgrYJrqABxGUkR3/P1xVHtOJZ6jMZDzn61XEFDSAuIwU80eJEiiIk46OAZ1VcQQOIy0gBj+AVJ1oUIRkvBTyr4goaQFxGCnjAPdcjWhQhGS8FPKviChpAXEYKeDQ7/h67gE+TjJ8CnlVxBQ0gLiMFPJad8u8CekviMijgWRVX0ADiMlLAc4kd31aUDc/CXIS4jBTw/DSJy6CAZ1VcQQOIy0gBz0+TuAwKeFbFFTSAuIwU8Pw0icuggGdVXEEDiMv4yG0tsf+5SdumJ66gAcTjheTk5b0qrqABxOOF5OTlvSquoAHE44Xk5OW9Kq6gAfLXSRqMa/7OWQVXMOmDK5j0wRVM+uAKJn1wBZM+uIJJH1xBgM8TR/4KOX478WA0Tyfes0Z+n43/RZ2/5v5w/pB92xOP+fhJXUcb7oNjy1IO4CVf1/3bMcrvwfjv+Gvcx4wez024ggASSFImEROL4jzn88d8/shl8m8Z9PeZ+9zm85fcBi+rc92Ge+FY4+UADtmv87Fj3Gaf+Pe57T177jK2sFfjCgJI2NV3yEiSxwvXMYFyXU/8XW6XcwxOBvyaj1GEdz5PqleYSA763lj53hi1/9L1f8IVBJCwSWFFYdIweIDByHW9VWG7eeVzMY58LhL6w4q/Y78wkRy0F/mgvTZG+CU37BIv/P0+N+EKAkjUVlNta7E+TL4McJ/bpUCYJAxWF+GQ9V5hojngKUc+WBi1Mdr2PZ/fMcNuZdieoqtVJkQGJsWQQaEgKBB8ughag7Zbnxgc6/eefo9J2DFulV/3uc/teEfehCsIIGGTlkFJgrX9Fy9jTJZMCL6Y0HbMbXjBCrowwqvyoV99fcOxHPA1ZwOTzvzdjyckOidX4QoCSCAJWcWy+u2kX/oi0onrlzra8IWkV6QtDFYt2mrblpeDPCH63vhgwKJgLse4N23yu1XHzAM8Mfi8PeZjWcU2KWxJzOftyvajJ2LD5xWptyBbGOjQdmnlY3tayuHSV5v0i+3MjlEKiSJLfliMx3ysF9NNuIJJH1zBpA+uYNIHVzDpgyuY9MEVTPrgCiZ9cAWTPriCSR/+Apvyijg3MRM+AAAAAElFTkSuQmCC"},632:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkMAAAFZCAYAAACbnCv7AAAACXBIWXMAAAsSAAALEgHS3X78AAATOElEQVR4Ae3d4XUbx7mA4UmO/gsdEK5AdAVCKhBTgegKLFcgugIzFZiqwFIHUAUhKzBYwSUr8D17Pes72YAEKAC7s/M9zzk4chI6BHZE4OXM7O7f/vjjj8uUUvcAGMNNfjzlOqV0biSAkXx4lVJappTeOuLASNY7vs259yRgRIu/O9oAQGRiCAAITQwBAKGJIQAgNDEEAIQmhgCA0MQQABCaGAIAQhNDAEBoYggACE0MAQChiSEAIDQxBACEJoYAgNDEEAAQmhgCAEITQwBAaGIIAAhNDAEAoYkhACA0MQQAhPYq+gGAwO5SSg97vPzbPb9uX+sdX3ezx9e8xDI/dum+5uyI3xeYCTEEddsWLNtC4al4OGZUjOWmwuf0VFBt++8XKaXzLV8ntKBSYghO72vxHTb50RvGyhzjJYLhuB1qGEzDqDrPX5Pyn2+iDwCckhiCl3nMy0Ypz9js+mfY5uGA8F3t+GfxBC8khuBP98Vv/v2HVDkbcOx9M/CtyojaFVTljFM/21TOSnV/vjYSRCeGiKDfd9PHTTlzY1mKlm22RP42fTSVodTPNAkmmieGaEG/J2c9+NNsDuynjKbPT/wby2ceNocza2KIOeiXsG6LWZ1D9lwAL7drE/kwls6LmSYzS1RNDFGLuyJwHgbhA9RvVyytijgqg0koMTkxxJj6M7Fut4QP0LZ+JnfbMlwZSv2M0lt/HxiLGOIU+mWtdfHbov07wFOeCqV+BmkYS2aTOCoxxCG2RY99PMCxPPW+UoZRv9xmJolvJobYR7m81c/yiB5gKv0y+/B9qJxJ6iPJBSjZSQwxdF+ETxlAALV7aibpfMvDUht/EUOx3W0JH/t6gNbcbjlRY1kE0srNdGMTQ3EMw8cyFxBZP4tUbtpeFHHUh5JACkAMtek+x47wAdjftr1IiyKOVs5ma5MYmr/HInzWlroAjuohzx6VM0jLweyRM9lmTgzNz90gfmxuBhhX9757M/iOw9kjy2szIobqNpz1sdwFUKf+Pfo6P7vlII7MHlVMDNXlvviB2nb2AwDzsG2D9qp42HtUETE0LUteAHEMZ/jPB4EkjiYihsZ1V/wwrG10BgitXwHol9bOB4Fk39FIxNBpiR8A9tXHUb85e1mE0YWZo9MRQ8d1n9eHxQ8Ah+rPWuvjyLLaiYihw9wPZn7s+QHgVLYtq/WzRs5WO4AYerkvgzO+AGAKwzjqw2jlbv0vI4Z26/f9fHadHwAqVp6ttijCyH6jHcTQf3sc7Pux9AXA3Dw8sd/IktoWYuhPd8W9Zyx9AdCackltMVhSC38Kf9QYehwsfZn9ASCK4c1nz3MYXUTdaxQphu6LAPq8x9cDQAT9rNFVcW2jLozeRRn91mOov+7PjeUvANipvLZRmE3YLcaQAAKAww03YV8Uj6bCqJUY6s8AuxZAAHAS/TaTRRFFTSyl/b2C53CI7gKI/8wDcymEAODk+hmjLoa+Syn9lFdlZmuOMdTNAv2cB+DCZmgAmMwmr8p0G6//kVL6NMehmFMMddX5Q54FunI6PABUZZ1Xab7LkxaPcxmeOcRQH0HLYhMXAFCnTXGa/iyiqOYYEkEAMF8PgyiqVq0x9HO+IqYIAoB566OoWz77WuMrqS2GunuEfZ8P2kMFzwcAOI5NvoDjT7UtndUUQ5/ybJDT4wGgXdf58/6ulldYSwz9kHegAwDt62eJvtTwSmuIoR/sDQKAcB7y9QInvzbR1DEkhAAgtsupN1ZPGUOfhBAAkGeIJrulx1Qx1L3gDxN9bwCgLg9T7h2eKoYunToPABTWU+0fmiKGvuYXDABQupriaEwRQ5O8UACgepspZofGjqF7s0IAwDOuxz44Y8fQ6C8QAJiV27GvTj12DJkVAgB2GbUXxoyhR/cdAwD28HnMgzRmDJkVAgD20ezMkFkhAGBfo+0bEkMAQI02Yz2nMWPIFacBgH2NNolizxAAUKPRJlGmvGs9AMBTmpsZmuy2/AAAzxkrhkbbBAUA8BKWyQCAGo2211gMAQChiSEAIDR7hgCA0MQQABCaZTIAIDQxBACEJoYAgNDEEAAQmhgCAEITQwBAaGIIAAhNDAEAoYkhACA0MQQAhCaGAIDQxBAAEJoYAgBCE0MAQGhiCAAITQwBAKGJIQAgNDEEAIQmhgCA0F41+uLXE3//m/xoyWV+TGk1wvfuvscyPxYppfPGxnFKY/xcGL9pjPWeV45vGuk9gZRuU0ofWj4OrcbQ24m//9QxdgrLCo7rKSxy5F00+vpqcoqfi/M8ft2H4pv5HprZO9V73jL/bPr55KRajSHYpYug65TSe0dqlrr4ufIB2axl/vl8F/1AMA4xREQXeUr/tdGfpe5D8sfoB6FhXeR+jH4QGJcYIppuSeVXoz5Li7wcYzmsXTdma5mCs8mI5EIIzdqNEGqaZWsmI4aIYtHgGX6RfLB/pGkrS59MSQwRxbU9QrO1yPtIaJdfVJiUGCKCpen3WbsUsk3rxvcs+kFgWmKICC6M8qw1fbE3/HwyPTFEBFNfOZtvd27WoGkLe8GogRiidUtnIM2aWYO2GV+qIIZonXsXzZvxa5t7x1EFMUTrvNnOm/Frm/GlCmKI1nmzna+Fs8ia595yVEEM0ToxNF/Grm3L6AeAeoghWmdmYb58WLbN+FINMUTLvNnOm/EDRiGGaJkPU6iXMwWphhgCaiVmgVGIIaBWYggYhRiiZabhAdhJDAEwhYWjTi3EEABTcB0pqiGGAIDQxBAAEJoYAgBCE0MAQGhiCAAITQwBAKGJIQAgtFfRDwCc0NeU0toB/svcjsWnlNKmgucxB3P8e25899f8cRJDcDrdB8SV4ztbN2K2acaXv1gmAwBCE0MAQGhiCAAITQwBAKGJIQAgNDEEAIQmhgCA0MQQABCaGAIAQhNDAEBoYggACE0MAQChiSEAIDR3rT+NZUpp1eBr4uXHrLW/B4fY5MdcnM/yKB/HbUrpoYUX8ozI4zu3n8WTE0On8T4/iM3fg//0c0rpqqYntMMvVT+78dznD84ukNb50UIoGd8/lePbPT4HCOH/YpkMgOecpZTeppR+TCn9llL6n5TSjdniZpTj+2vU8RVDALzU+zyLcOnINakb399nNpN7EDEEwLd4nWcSBFG7PuZZouaJIQAO8asTBZr2PkLwiiEADhVi9iCw65TSouWXL4YAONSZ5bKmdUuiH1p+gWIIgGO4cBSb1nTsiiEAjuFd60spwZ21fKFKMQTAsdhI3bZmx1cMAXAsL/mwvHXUZ0cMAcAOL1lGCXfLhwZYJgOAHSLf/DSCs1ZfoxgCamXmYH5eRz8AATS5VCaGgFrZUzJPZoeYHTEEwDHte3r9xlGfpSbvZi+GAJiCGJonMQQworWDPUuWyZgdMQTAMe27TCZ2qYYYAmrlw7J9j9EPwAxZJgMY2b0D3jRnDM6PGAIYmQ/Ltpn9owpiCKiZD8u2iV2qIIaAmn02Ok37bN8QNRBDQM26a9F8NUJNE7xMTgwBtbsyQk0zvkxODAG1W5sdalo3+/ev6AeBaYkhYA4unGbftG526C76QWA6YgiYg4eU0soHZrP68TUDyCTEEDAXm3zfq5/NEjWpD6IfjC9jE0PA3Fzlq+B+n8PoixmFptwU4/uT8WUMrxzlk/iUf6BbcplSet/Yazq1Fv8eHGJz5P+/2x0X7Vu2euuAHbrZs1+qfob76cf3+omvNr4cjRg6jU2DV85dVfAc5qbFvwdzsjlBgFEP48vRWCYDAEITQwBAaGIIAAhNDAEAoYkhACA0MQQAhCaGAIDQxBAAEJoYAgBCE0MAQGhiCAAITQwBAKGJIQAgNHeth9Pp7vR/5fj+Zf3Cu/hfppSWJ35OLZrLMTO+38YxOwExBKfzNj/4fy+NIcevXcaXalgmAwBCE0MAQGhiCAAITQwBAKGJIQAgNDEEAIQmhgCA0MQQABCaGAIAQhNDtOwlVzsGYLfbFo+RGAIA9vXQ4pESQwAcU5MzB7RNDNGyjdGF0TU5c8BfzAzBzIghGJ8Yaps9QzBDjwYNRmWZjNkRQ7TOGzOMxy8f7WvyLF0xROvEEIzHz1vb7lt9dWKI1nlzhvG4tlfbmn0/FUO0zpszjMcvH21r9v1UDNG6TctTu1CZzwakac2OrxgighujDCf3xSFu2l3LlysRQ0QghuD0rh3jpjU9vmKICLrfZj4ZaTiZO/vzmvbY+hKoGCKKK9dAgZP54NA27UPrVxYXQ0Sx8YYNJ/Evs0JN+xRhq4EYIpLuB/oHIw5H88kvGU27izK+Yoho+iCyZAaH+TmldOkYNqub8TuPcuNdMUREN/mH3KZqeLmvKaXv8z482tON7z+izfiJIaLa5N9qv8u/Ad35mwBPuss/J93Py8qVpptzn8f3+zy+4faAvargOcCUyo3VizxjdJ7/eTV4Xt1/98Zo0Zi7wVLIQ46d/s/bKEsljRqObypiZ218/9RqDP2tgufQmqsA0+IP+c3BmTF1GMYoxhdOwjIZABCaGAIAQhNDAEBoYggACE0MAQChiSEAIDQxBACEJoYAgNDEEAAQmhgCAEITQwBAaGIIAAhNDAEAoYkhACA0MQQAhCaGAIDQxBAAEJoYAgBCE0MAQGhjxdAi+oEGAOo0VgydG38AoEaWyQCA0MQQABCaGAIAarQc6znZQA0A1Ki5GHoz0vcBAHgRy2QAQI2amxlKY74oAGD2xBAAEFqTMeTCiwDAvsQQABDa27FevBgCAGozajOMGUNvXG8IANjDasyDNPap9Rcjfz8AYH7EEAAQVreK9G7MFz92DL1zij0A8IzLsQ/OFFegHv1FAgCz8WHsJzpFDH2wkRoA2KKbMDkb+8BMEUOvU0rXE3xfAKBei6n6YKobtb63mRoAKNzkCZPRTXnX+hsXYgQA8haaUc8gK00ZQ139fbZ/CABC6/YJ/TLlAZgyhlLeJLV2uj0AhNSF0K9Tv/CpYyjl23TcWjIDgFCuagihVEkMpbxk9u8pri0AAIxqkbfJfKzlsNcSQ71fLJsBQLO6M8k3U26W3qa2GOq8TSn9nqfPbK4GgPlb5smO36Y6ff45NcZQ72OuR1EEAPO0zJfS+T1PdlSp5hhKuR5FEQDMSxlB72t/5rXHUK+Momt7igCgShd5OWwWEdSbSwz1uij6MR/ktTvgA8Dklvls8E3eE1TtcthT5hZDpbf5+gQPebbIdYoAYDyX+RT53/PZ4KPfbf5Y5hxDvX626N/F3iLLaABwfBd5L9BDnpCo6hT5b9VCDJXO8t6i3/NVrT8IIwA4SBlAv+W9QNWdHn+IV/N96ju9ydN23eM+T+Xd5EgCALbrztxe5Qi6aC18tmk5hkpneSntxxxG6xxHn+t5igAwmWURQE0sfb1ElBgqneUpvv6Uvy9FHG3qeIoAcHLneRP0Kq+mhBUxhobe5Ue5nLY2awRAYxZ55mcVZflrX2LoP5XLacmsEQAztyoCKPTsz3PE0POGs0brYubooeYnDkBIyyJ+VmZ/9iOG9jfca3RXhNF6Di8AgOYsBvEz2wsfTkkMfbs3+fEx/z98KcLI6fsAnEoZP5a+jkAMHc+74nTExyKM7DcC4BCr4jG7+37NgRg6jddP7DfqH+IIgKeIn5GJoXEM9xuJIwB64mdiYmga2+Lo1p4jgBDET2XEUB3O8mPbnqNbZ6sBzNaiCJ9z8VMnMVSn14MN2Z2vgzhynSOA+iwH8eNsrxkQQ/PxdvAbxV0RRreW1gAmUYaPixzOlBiar/46R/2+o8ct+47MHgEcz7IIH0teDRFD7XhdzB71F4K8K2aNbMwG2N+imO0x69M4MdS24exRynuPbgcPgOjKGR+3tQhGDMUz3HuUBBIQTBk+Njkjhvg/Aglo0WIQPcKHrcQQT3kqkDaDQLJJG6jBckv4WOpiL2KIl+gDqdyDdD+Io41ZJODEVlvix+ZmvpkY4lDDq2f3+lmkTXH/NfdgA17ifEv0mO3h6MQQp1Ius30svodIAoaG0bO0t4cxiSHG9lwkPVhug2YtitBZFktdZnqYnBiiFn0gDZfb7oswKv80mwR1Wm0JH3t6qJoYonb9nqRtl72/y7NJ/V3918XsEnA6goemiCHmrN9TsG3Z7b6YQdr2AJ52XsRO+ad7cdEkMUSrnptRSs/EkpklIljl19j/WUaP2R3CEUNEtSuWUt7UnYqLS5Z7ldbP/HswlT5oUhE6/TLWwhlasJ0Ygqf1ofRcMN1vCaRydslmb46hn7lJWyInmdGBw4ghOMxZcWrwrv0Ud8XtS8pbmZTBZJmufeXsTRqEzvCfBQ6MQAzBeMolin03ot4N7v82XJ4b3h9OTI1jNfgu5SzNtv8sbKBiYgjqNtzj8S1n8zw+EUi7lvD23Rc1ZYANZ1kO+dph4PScQQWNE0PQvtdPfKDv+pD/uON//1Y/p5Sunvl31wIEGNPfHW0AIDIxBACEJoYAgNDEEAAQmhgCAEITQwBAaGIIAAhNDAEAoYkhACA0MQQAhCaGAIDQxBAAEJoYAgBCE0MAQGhiCAAITQwBAKGJIQAgNDEEAIQmhgCA0MQQABBXSul/AWDZU+lw/1gLAAAAAElFTkSuQmCC"},634:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAsCAYAAAAJpsrIAAAACXBIWXMAAAsSAAALEgHS3X78AAABWklEQVRYR+2U3Q3CMAyEswIrsEJXYAVWYIW+8sgKrMAKrMAKrNAVjE7Y4KatrkUV9kMtXZq4F/ORnxbJFwUqzBUQG9jS+IClFDVEiRqiRA1RooYooTknUxFJ/rnIFvnB2J7/W0Uk+a1MKWqIEjVEiRqihCZbbGBLIz9YSlFDlKghStQQJWqIEjVEiRqihGYn77hVLxvNtzo+yjCQO7i+zbWcn+drj+UGYHs1ddXLq+YvOj5NFDOI50huat5UrR6YrQwK+3/dae5KihnEQ76ruwoYigACALadx5EcA7M6O1kJDBBPVxg5wAAKK3CvivmoIe46bxUwmOx8dPIFxHMMbGrF0Ldj4b0/g/kfv2nfVs5DzwGDsGIPl7P3e+dp1TMbzK6xP/BLweyW+5xdImx9o+NWhrV6YP6A2zetkT6o7/tA8RoMulQ5wNpOUCiR5F/+lKKGKFFDlKghSi8Lf6spQ503iAAAAABJRU5ErkJggg=="},248:function(e,t){"use strict";t.__esModule=!0;t.COMPANY="/our-company",t.FINANCIAL="/financial-highlights",t.LETTER="/letter-to-shareholders",t.global="/global-operations",t.sustain="/sustainability",t.board="/board",t.download="/downloads"},249:function(e,t){"use strict";t.__esModule=!0;t.toggleMenu=function(e){var t=document.querySelector(".sub-header"),n=t.getAttribute("data-hide"),r=String(!/true/i.test(n));t.setAttribute("data-hide",r)}},250:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),a=r(o),i=n(15),u=r(i),A=n(631),l=r(A);t.default=function(){return a.default.createElement("div",{className:"download-button"},a.default.createElement(u.default,{to:"/downloads"},a.default.createElement("img",{src:l.default,alt:"Download"})))},e.exports=t.default},251:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),a=r(o),i=n(15),u=(r(i),n(632)),A=r(u);t.default=function(){return a.default.createElement("div",{className:"logo"},a.default.createElement("a",{href:"http://hess.com"},a.default.createElement("img",{src:A.default,alt:"Logo"})))},e.exports=t.default},252:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),a=r(o),i=n(253),u=(r(i),n(634)),A=r(u),l=n(249);t.default=function(e){e.children;return a.default.createElement("div",{className:"menu-button"},a.default.createElement("div",null,a.default.createElement("div",null,a.default.createElement("a",{href:"javascript: void(0);"},a.default.createElement("img",{src:A.default,alt:"Menu Button",onClick:function(e){return(0,l.toggleMenu)(e)}})))))},e.exports=t.default},253:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),a=r(o),i=n(15),u=r(i),A=function(e){return a.default.createElement("li",null,a.default.createElement(u.default,{to:e.to},e.children))};t.default=A,e.exports=t.default},254:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),a=r(o),i=n(15),u=r(i),A=n(248),l=(r(A),function(e){return a.default.createElement("li",null,a.default.createElement(u.default,{onClick:function(e){return toggleMenu(e)},to:""+e.to},e.children))});t.default=function(e){e.children,e.data;return a.default.createElement("ul",{className:"sub-header container-fluid","data-hide":"true"},a.default.createElement(l,{to:"/our-company"},"Our Company"),a.default.createElement(l,{to:"/financial-highlights"},"Financial and",a.default.createElement("br",null),"Organizational Highlights"),a.default.createElement(l,{to:"/letter-to-shareholders"},"Letter to",a.default.createElement("br",null),"Shareholders"),a.default.createElement(l,{to:"/global-operations"},"Global",a.default.createElement("br",null),"Operations"),a.default.createElement(l,{to:"/sustainability"},"Sustainablity"),a.default.createElement(l,{to:"/board-and-officers"},"Board of Directors and",a.default.createElement("br",null),"Corporate Officers"))},e.exports=t.default},255:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),A=r(u),l=n(251),c=r(l),f=n(252),s=r(f),d=n(250),E=r(d),T=n(254),p=r(T),h=function(e){
function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return A.default.createElement("div",null,A.default.createElement("header",null,A.default.createElement("div",null,A.default.createElement(s.default,null),A.default.createElement(c.default,null),A.default.createElement(E.default,null)),A.default.createElement("nav",{className:"navbar navbar-default"},A.default.createElement(p.default,null))))},t}(A.default.Component);t.default=h,e.exports=t.default},257:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=n(2),a=r(o),i=n(8),u=r(i),A=n(590),l=r(A),c=n(255),f=r(c),s=n(15);n(523);var d=function(e){function t(){return o?"":a.default.createElement(f.default,null)}var n=e.children,r=(e.data,e.location),o=r.pathname===(0,s.withPrefix)("/"),i=o?"hero":"wrapper";return a.default.createElement("div",null,a.default.createElement(l.default,null,a.default.createElement("title",null,"Hess Annual Report")),t(),a.default.createElement("div",{className:i},n()))};d.propTypes={children:u.default.func},t.default=d;t.query="** extracted graphql fragment **"},523:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-f15d3d9ec0c708ebdcac.js.map