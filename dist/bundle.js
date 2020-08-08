!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).tinyJest=e()}}((function(){var e={},t=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(o,s){function r(e){try{u(n.next(e))}catch(t){s(t)}}function f(e){try{u(n.throw(e))}catch(t){s(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,f)}u((n=n.apply(e,t||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(e){this.suite=[],this.results=[],this.it=(e,t)=>{this.suite.push({title:e,fn:t})},this.xit=(e,t)=>{this.suite.push({title:e})},this.run=()=>t(this,void 0,void 0,(function*(){this.results=[];for(let t of this.suite)if(t.fn)try{yield t.fn(),this.results.push({title:t.title,passed:!0})}catch(e){this.results.push({title:t.title,error:e,passed:!1})}else this.results.push({title:t.title,skipped:!0});return this.results})),this.title=e}};var i={};Object.defineProperty(i,"__esModule",{value:!0});class n extends Error{constructor(e,t,i,n){super(n),this.extensions={matcher:e,expected:t,actual:i}}}const o={toBe:(e,t)=>t!==e&&`Expected ${JSON.stringify(e)} to be ${JSON.stringify(t)}`,toEqual:(e,t)=>t!=e&&`Expected ${JSON.stringify(e)} to equal ${JSON.stringify(t)}`,toBeTruthy:e=>!e&&`Expected ${JSON.stringify(e)} to be truthy`,toBeFalsy:e=>!!e&&`Expected ${JSON.stringify(e)} to be falsy`,toMatchObject:(e,t)=>{for(let i in t){if(typeof e[i]!=typeof t[i])return`Types mismatch for ${i}: ${typeof e[i]} != ${typeof t[i]}`;if("object"!=typeof t[i]){if(o.toBe(e[i],t[i]))return`Mismatched "${i}": ${JSON.stringify(e[i])} != ${JSON.stringify(t[i])}`;continue}const n=o.toMatchObject(e[i],t[i]);if(n)return n}return!1}};i.default=function(e){const t={not:{}};return Object.keys(o).forEach(i=>{t[i]=t=>{const s=o[i](e,t);if(s)throw new n(i,t,e,s)},t.not[i]=t=>{if(!1===o[i](e,t))throw new n(i,t,e,`Expected ${JSON.stringify(e)} not ${i.replace(/[A-Z]/g,e=>" "+e.toLowerCase())}${void 0!==t?" "+JSON.stringify(t):""}`)}}),t};var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e){e.forEach(({title:e,passed:t,skipped:i,error:n})=>t?console.info("\x1b[32m","\u2713 "+e):i?console.info("\x1b[33m","\u25a1 "+e):t?void 0:console.error("\x1b[31m","\ud800\udd02 "+e,"\n  Failed:",n.message)),console.log("\x1b[0m")};var r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Test",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(r,"expect",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(r,"prettify",{enumerable:!0,get:function(){return s.default}}),r}));