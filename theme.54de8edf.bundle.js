!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=19)}([function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(a){"object"==typeof window&&(n=window)}e.exports=n},,,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}n(14);var r=n(12),i=a(r),o=n(13),s=a(o),l=n(11),c=a(l);n(8),n(7),n(15),function(){c["default"].init(),i["default"].init({offset:40,activeClass:"sw-active"}),s["default"].init({selector:"[data-scroll]",selectorHeader:"[data-gumshoe-header]",speed:500,easing:"easeInOutCubic",offset:40,updateURL:!0})}()},,,,function(e,t){!function(){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.hooks.add("complete",function(e){if(e.code){var t=e.element.parentNode,n=/\s*\bline-numbers\b\s*/;if(t&&/pre/i.test(t.nodeName)&&(n.test(t.className)||n.test(e.element.className))&&!e.element.querySelector(".line-numbers-rows")){n.test(e.element.className)&&(e.element.className=e.element.className.replace(n,"")),n.test(t.className)||(t.className+=" line-numbers");var a,r=e.code.match(/\n(?!$)/g),i=r?r.length+1:1,o=new Array(i+1);o=o.join("<span></span>"),a=document.createElement("span"),a.className="line-numbers-rows",a.innerHTML=o,t.hasAttribute("data-start")&&(t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)),e.element.appendChild(a)}}})}()},function(e,t,n){(function(t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,a=n.Prism={util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=a.util.type(e);switch(t){case"Object":var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=a.util.clone(e[r]));return n;case"Array":return e.map&&e.map(function(e){return a.util.clone(e)})}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){r=r||a.languages;var i=r[e];if(2==arguments.length){n=arguments[1];for(var o in n)n.hasOwnProperty(o)&&(i[o]=n[o]);return i}var s={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var o in n)n.hasOwnProperty(o)&&(s[o]=n[o]);s[l]=i[l]}return a.languages.DFS(a.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=s)}),r[e]=s},DFS:function(e,t,n,r){r=r||{};for(var i in e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==a.util.type(e[i])||r[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||r[a.util.objId(e[i])]||(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,i,r)):(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",n);for(var r,i=n.elements||document.querySelectorAll(n.selector),o=0;r=i[o++];)a.highlightElement(r,e===!0,n.callback)},highlightElement:function(t,r,i){for(var o,s,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(o=(l.className.match(e)||[,""])[1],s=a.languages[o]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var c=t.textContent,u={element:t,language:o,grammar:s,code:c};if(a.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return void a.hooks.run("complete",u);if(a.hooks.run("before-highlight",u),r&&n.Worker){var d=new Worker(a.filename);d.onmessage=function(e){u.highlightedCode=e.data,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(u.element),a.hooks.run("after-highlight",u),a.hooks.run("complete",u)},d.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=a.highlight(u.code,u.grammar,u.language),a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(t),a.hooks.run("after-highlight",u),a.hooks.run("complete",u)},highlight:function(e,t,n){var i=a.tokenize(e,t);return r.stringify(a.util.encode(i),n)},tokenize:function(e,t,n){var r=a.Token,i=[e],o=t.rest;if(o){for(var s in o)t[s]=o[s];delete t.rest}e:for(var s in t)if(t.hasOwnProperty(s)&&t[s]){var l=t[s];l="Array"===a.util.type(l)?l:[l];for(var c=0;c<l.length;++c){var u=l[c],d=u.inside,f=!!u.lookbehind,p=!!u.greedy,g=0,m=u.alias;u=u.pattern||u;for(var h=0;h<i.length;h++){var v=i[h];if(i.length>e.length)break e;if(!(v instanceof r)){u.lastIndex=0;var _=u.exec(v),y=1;if(!_&&p&&h!=i.length-1){var b=i[h+1].matchedStr||i[h+1],x=v+b;if(h<i.length-2&&(x+=i[h+2].matchedStr||i[h+2]),u.lastIndex=0,_=u.exec(x),!_)continue;var w=_.index+(f?_[1].length:0);if(w>=v.length)continue;var k=_.index+_[0].length,S=v.length+b.length;if(y=3,k<=S){if(i[h+1].greedy)continue;y=2,x=x.slice(0,S)}v=x}if(_){f&&(g=_[1].length);var w=_.index+g,_=_[0].slice(g),k=w+_.length,O=v.slice(0,w),j=v.slice(k),N=[h,y];O&&N.push(O);var E=new r(s,d?a.tokenize(_,d):_,m,_,p);N.push(E),j&&N.push(j),Array.prototype.splice.apply(i,N)}}}}}return i},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}}},r=a.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.matchedStr=a||null,this.greedy=!!r};if(r.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(n){return r.stringify(n,t,e)}).join("");var i={type:e.type,content:r.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var o="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,o)}a.hooks.run("wrap",i);var s="";for(var l in i.attributes)s+=(s?" ":"")+l+'="'+(i.attributes[l]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+s+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(n.addEventListener("message",function(e){var t=JSON.parse(e.data),r=t.language,i=t.code,o=t.immediateClose;n.postMessage(a.highlight(i,a.languages[r],r)),o&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,document.addEventListener&&!i.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",a.highlightAll)),n.Prism}();"undefined"!=typeof e&&e.exports&&(e.exports=a),"undefined"!=typeof t&&(t.Prism=a),a.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.util.clone(a.languages.css),a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css"}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),a.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript"}}),a.languages.js=a.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,r=t.getAttribute("data-src"),i=t,o=/\blang(?:uage)?-(?!\*)(\w+)\b/i;i&&!o.test(i.className);)i=i.parentNode;if(i&&(n=(t.className.match(o)||[,""])[1]),!n){var s=(r.match(/\.(\w+)$/)||[,""])[1];n=e[s]||s}var l=document.createElement("code");l.className="language-"+n,t.textContent="",l.textContent="Loading…",t.appendChild(l);var c=new XMLHttpRequest;c.open("GET",r,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,a.highlightElement(l)):c.status>=400?l.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:l.textContent="✖ Error: File does not exist or is empty")},c.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}()}).call(t,n(0))},,,function(e,t,n){"use strict";(function(n){var a,r,i;"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(n,o){r=[],a=o(n),i="function"==typeof a?a.apply(t,r):a,!(void 0!==i&&(e.exports=i))}("undefined"!=typeof n?n:(void 0).window||(void 0).global,function(e){var t={};return t.init=function(){var e=document.getElementsByClassName("sd-accordion"),t=void 0;for(t=0;t<e.length;t++)e[t].onclick=function(){this.classList.toggle("sd-accordion-active"),this.nextElementSibling.classList.toggle("sd-show")}},t})}).call(t,n(0))},function(e,t,n){"use strict";(function(n){var a,r,i;"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(n,o){r=[],a=o(n),i="function"==typeof a?a.apply(t,r):a,!(void 0!==i&&(e.exports=i))}("undefined"!=typeof n?n:(void 0).window||(void 0).global,function(e){var t,n,a,r,i,o,s={},l="querySelector"in document&&"addEventListener"in e&&"classList"in document.createElement("_"),c=[],u={selector:"[data-gumshoe] a",selectorHeader:"[data-gumshoe-header]",offset:0,activeClass:"active",callback:function(){}},d=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(n,e[a],a,e);else for(var r=0,i=e.length;r<i;r++)t.call(n,e[r],r,e)},f=function k(){var e={},t=!1,n=0,a=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t&&"[object Object]"===Object.prototype.toString.call(n[a])?e[a]=k(!0,e[a],n[a]):e[a]=n[a])};n<a;n++){var i=arguments[n];r(i)}return e},p=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},g=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},m=function(e){var n=0;if(e.offsetParent){do n+=e.offsetTop,e=e.offsetParent;while(e)}else n=e.offsetTop;return n=n-i-t.offset,n>=0?n:0},h=function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},v=function(){c.sort(function(e,t){return e.distance>t.distance?-1:e.distance<t.distance?1:0})};s.setDistances=function(){a=g(),i=r?p(r)+m(r):0,d(c,function(e){e.distance=m(e.target)}),v()};var _=function(){var e=document.querySelectorAll(t.selector);d(e,function(e){if(e.hash){var t=document.querySelector(e.hash);t&&c.push({nav:e,target:t,parent:"li"===e.parentNode.tagName.toLowerCase()?e.parentNode:null,distance:0})}})},y=function(){o&&(o.nav.classList.remove(t.activeClass),o.parent&&o.parent.classList.remove(t.activeClass))},b=function(e){y(),e.nav.classList.add(t.activeClass),e.parent&&e.parent.classList.add(t.activeClass),t.callback(e),o={nav:e.nav,parent:e.parent}};s.getCurrentNav=function(){var n=e.pageYOffset;if(e.innerHeight+n>=a&&h(c[0].target))return b(c[0]),c[0];for(var r=0,i=c.length;r<i;r++){var o=c[r];if(o.distance<=n)return b(o),o}y(),t.callback()};var x=function(){d(c,function(e){e.nav.classList.contains(t.activeClass)&&(o={nav:e.nav,parent:e.parent})})};s.destroy=function(){t&&(e.removeEventListener("resize",w,!1),e.removeEventListener("scroll",w,!1),c=[],t=null,n=null,a=null,r=null,i=null,o=null)};var w=function(e){n||(n=setTimeout(function(){n=null,"scroll"===e.type&&s.getCurrentNav(),"resize"===e.type&&(s.setDistances(),s.getCurrentNav())},66))};return s.init=function(n){l&&(s.destroy(),t=f(u,n||{}),r=document.querySelector(t.selectorHeader),_(),0!==c.length&&(x(),s.setDistances(),s.getCurrentNav(),e.addEventListener("resize",w,!1),e.addEventListener("scroll",w,!1)))},s})}).call(t,n(0))},function(e,t,n){"use strict";(function(n){var a,r,i,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(n,o){r=[],a=o(n),i="function"==typeof a?a.apply(t,r):a,!(void 0!==i&&(e.exports=i))}("undefined"!=typeof n?n:(void 0).window||(void 0).global,function(e){var t,n,a,r,i,s={},l="querySelector"in document&&"addEventListener"in e,c={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},u=function w(){var e={},t=!1,n=0,a=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t&&"[object Object]"===Object.prototype.toString.call(n[a])?e[a]=w(!0,e[a],n[a]):e[a]=n[a])};n<a;n++){var i=arguments[n];r(i)}return e},d=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},f=function(e,t){var n,a,r=t.charAt(0),i="classList"in document.documentElement;for("["===r&&(t=t.substr(1,t.length-2),n=t.split("="),n.length>1&&(a=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,"")));e&&e!==document&&1===e.nodeType;e=e.parentNode){if("."===r)if(i){if(e.classList.contains(t.substr(1)))return e}else if(new RegExp("(^|\\s)"+t.substr(1)+"(\\s|$)").test(e.className))return e;if("#"===r&&e.id===t.substr(1))return e;if("["===r&&e.hasAttribute(n[0])){if(!a)return e;if(e.getAttribute(n[0])===n[1])return e}if(e.tagName.toLowerCase()===t)return e}return null};s.escapeCharacters=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),a=n.length,r=-1,i="",o=n.charCodeAt(0);++r<a;){if(t=n.charCodeAt(r),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=t>=1&&t<=31||127==t||0===r&&t>=48&&t<=57||1===r&&t>=48&&t<=57&&45===o?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+i};var p=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=t<.5?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},g=function(e,t,n){var a=0;if(e.offsetParent)do a+=e.offsetTop,e=e.offsetParent;while(e);return a=Math.max(a-t-n,0),Math.min(a,h()-m())},m=function(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)},h=function(){return Math.max(e.document.body.scrollHeight,e.document.documentElement.scrollHeight,e.document.body.offsetHeight,e.document.documentElement.offsetHeight,e.document.body.clientHeight,e.document.documentElement.clientHeight)},v=function(e){return e&&"object"===("undefined"==typeof JSON?"undefined":o(JSON))&&"function"==typeof JSON.parse?JSON.parse(e):{}},_=function(t,n){e.history.pushState&&(n||"true"===n)&&"file:"!==e.location.protocol&&e.history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))},y=function(e){return null===e?0:d(e)+e.offsetTop};s.animateScroll=function(n,o,s){var l=v(o?o.getAttribute("data-options"):null),d=u(t||c,s||{},l),f="[object Number]"===Object.prototype.toString.call(n),m=f?null:"#"===n?e.document.documentElement:e.document.querySelector(n);if(f||m){var b=e.pageYOffset;a||(a=e.document.querySelector(d.selectorHeader)),r||(r=y(a));var x,w,k=f?n:g(m,r,parseInt(d.offset,10)),S=k-b,O=h(),j=0;f||_(n,d.updateURL);var N=function(t,a,r){var i=e.pageYOffset;(t==a||i==a||e.innerHeight+i>=O)&&(clearInterval(r),f||m.focus(),d.callback(n,o))},E=function(){j+=16,x=j/parseInt(d.speed,10),x=x>1?1:x,w=b+S*p(d.easing,x),e.scrollTo(0,Math.floor(w)),N(w,k,i)},C=function(){clearInterval(i),i=setInterval(E,16)};0===e.pageYOffset&&e.scrollTo(0,0),C()}};var b=function(e){if(0===e.button&&!e.metaKey&&!e.ctrlKey){var n=f(e.target,t.selector);if(n&&"a"===n.tagName.toLowerCase()){e.preventDefault();var a=s.escapeCharacters(n.hash);s.animateScroll(a,n,t)}}},x=function(e){n||(n=setTimeout(function(){n=null,r=y(a)},66))};return s.destroy=function(){t&&(e.document.removeEventListener("click",b,!1),e.removeEventListener("resize",x,!1),t=null,n=null,a=null,r=null,i=null)},s.init=function(n){l&&(s.destroy(),t=u(c,n||{}),a=e.document.querySelector(t.selectorHeader),r=y(a),e.document.addEventListener("click",b,!1),a&&e.addEventListener("resize",x,!1))},s})}).call(t,n(0))},function(e,t){"use strict";function n(){i.classList.contains(a)?i.classList.remove(a):i.classList.add(a)}Object.defineProperty(t,"__esModule",{value:!0});var a="show-nav",r=void 0,i=void 0;t["default"]=function(){i=document.getElementsByTagName("body")[0],r=document.getElementById("navToggle"),r.addEventListener("click",n)}()},function(e,t){e.exports={clearfix:"index_clearfix__2l8I1",section:"index_section__3pKKD",row:"index_row__xFT_d","example-wrapper":"index_example-wrapper__1rmrT",anchors:"index_anchors__14jbY",table:"index_table__3OZrL","input-arguments":"index_input-arguments__2IQ4D","variables-matrix":"index_variables-matrix__iEWNJ",td:"index_td__XNYfS",th:"index_th__1HaB0",brand:"index_brand__1MNWq",logo:"index_logo__37AHe","nav-toggle":"index_nav-toggle__1DbU_","icon-bar":"index_icon-bar__1w0lt",callout:"index_callout__3tbnO",pre:"index_pre__1NbAA",code:"index_code__1xZ6k","code-snippet":"index_code-snippet__2nwN_","render-preview":"index_render-preview__3UNHe","code-preview":"index_code-preview__1DHyC","code-wrapper":"index_code-wrapper__2Xtjw","window-bar":"index_window-bar__1Utgl",circles:"index_circles__3dWmI",circle:"index_circle__1YRmC","circle-red":"index_circle-red__gmRjJ","circle-yellow":"index_circle-yellow__31Y6o","circle-green":"index_circle-green__2jL_l",version:"index_version__2hSgz","top-line":"index_top-line__3R2WR",hr:"index_hr__2X_4O",github:"index_github__2lE9t",ul:"index_ul__1PwYZ",ol:"index_ol__2MKlU",navigation:"index_navigation__vSRZc",a:"index_a__jj5Md",li:"index_li__17-DQ",active:"index_active__2JHLv",sidebar:"index_sidebar__1dvxO",tr:"index_tr__1uiXL",h1:"index_h1__1Vczh",h2:"index_h2__1M44z",h3:"index_h3__3fG9k",h4:"index_h4__2w1cz",h5:"index_h5__2_E8c",h6:"index_h6__3aVO4",strong:"index_strong__3slXg",blockquote:"index_blockquote__-jrjQ",p:"index_p__3pr0N",em:"index_em__1wAtZ","column-layout":"index_column-layout__3F4AY",lead:"index_lead__19M9F","page-header":"index_page-header__2WR42","text-block":"index_text-block__32TVc","text-center":"index_text-center__1Onf4","outer-wrap":"index_outer-wrap__2-436",main:"index_main__2jdi8","has-anchors":"index_has-anchors__zjx9D"}},,,,function(e,t,n){e.exports=n(3)}]);
//# sourceMappingURL=theme.54de8edf.bundle.js.map