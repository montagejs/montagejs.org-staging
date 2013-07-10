montageDefine("32cf89f","deserialization/reviver",{dependencies:["q"],factory:function(e,t){(function(t){function n(){}function a(e){var t=n.prototype.getCustomObjectTypeOf;return function(n){return e(n)||t(n)}}var s=function(){return this}(),r=e("q");Object.defineProperties(n.prototype,{_createAssignValueFunction:{value:function(e,t){return function(n){e[t]=n}}},getTypeOf:{value:function(e){var t=typeof e;return null===e?"null":Array.isArray(e)?"array":"object"===t&&1===Object.keys(e).length?"@"in e?"reference":"/"in e?"regexp":"object":t}},getCustomObjectTypeOf:{writable:!0,value:function(){}},reviveRootObject:{value:function(e,t,n){var a;return e.debugger,"value"in e?t.hasUserObject(n)?(a=t.getUserObject(n),t.setObjectLabel(a,n),a):this.reviveValue(e.value,t,n):0===Object.keys(e).length?t.hasUserObject(n)?(a=t.getUserObject(n),t.setObjectLabel(a,n),a):this.reviveExternalObject(e,t,n):this.reviveCustomObject(e,t,n)}},reviveValue:{value:function(e,t,n){var a=this.getTypeOf(e);return"string"===a||"number"===a||"boolean"===a||"null"===a||"undefined"===a?this.reviveNativeValue(e,t,n):"regexp"===a?this.reviveRegExp(e,t,n):"reference"===a?this.reviveObjectReference(e,t,n):"array"===a?this.reviveArray(e,t,n):"object"===a?this.reviveObjectLiteral(e,t,n):this._callReviveMethod("revive"+a,e,t,n)}},reviveNativeValue:{value:function(e,t,n){return n&&t.setObjectLabel(e,n),e}},reviveObjectLiteral:{value:function(e,t,n){var a,s=[];n&&t.setObjectLabel(e,n);for(var i in e)a=this.reviveValue(e[i],t),r.isPromise(a)?s.push(a.then(this._createAssignValueFunction(e,i))):e[i]=a;return 0===s.length?e:r.all(s).then(function(){return e})}},reviveRegExp:{value:function(e,t,n){var e=e["/"],a=RegExp(e.source,e.flags);return n&&t.setObjectLabel(a,n),a}},reviveObjectReference:{value:function(e,t){var e=e["@"],n=t.getObject(e);return n}},reviveArray:{value:function(e,t,n){var a,s=[];n&&t.setObjectLabel(e,n);for(var i=0,o=e.length;o>i;i++)a=this.reviveValue(e[i],t),r.isPromise(a)?s.push(a.then(this._createAssignValueFunction(e,i))):e[i]=a;return 0===s.length?e:r.all(s).then(function(){return e})}},reviveCustomObject:{value:function(e,t,n){var a=this.getCustomObjectTypeOf(e),o=i["revive"+a];return a?o.call(s,e,t,n):r.reject(Error("Object's type is unknown: "+JSON.stringify(e)))}},reviveExternalObject:{value:function(e,t,n){return r.reject(Error("External object '"+n+"' not found in user objects."))}},_callReviveMethod:{value:function(e,t,n,a){return this[e](t,n,a)}}});var i=Object.create(null);n.addCustomObjectReviver=function(e){for(var t in e)if("getTypeOf"!==t&&"function"==typeof e[t]&&/^revive/.test(t)){if(void 0!==i[t])return Error("Reviver '"+t+"' is already registered.");i[t]=e[t].bind(e)}this.prototype.getCustomObjectTypeOf=a(e.getTypeOf)},n.resetCustomObjectRevivers=function(){i=Object.create(null),this.prototype.getCustomObjectTypeOf=function(){}},t.Reviver=n})(t),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)})}});