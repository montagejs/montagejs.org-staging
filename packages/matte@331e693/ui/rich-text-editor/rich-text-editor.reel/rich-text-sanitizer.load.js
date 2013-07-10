montageDefine("331e693","ui/rich-text-editor/rich-text-editor.reel/rich-text-sanitizer",{dependencies:["montage"],factory:function(e,t){var n=e("montage").Montage;t.Sanitizer=n.specialize({willSetValue:{value:function(e,t){return this._scopeCSS(e,t)}},didGetValue:{value:function(e,t){return this._unscopeCSS(e,t)}},willInsertHtmlData:{value:function(e,t){return this._scopeCSS(this._removeScript(e),t)}},_scopeCSS:{enumerable:!0,value:function(e,t){var n=".editor-"+t+" ";return"string"==typeof e&&(e=e.replace(/(<style ?[^>]*>)([^<]*)(<\/style>)/gi,function(e,t,a,s){return a=a.replace(/\t|\n|\r/g,function(e){return"	"==e?" ":""}),a=a.replace(/\*\.editor-[^ ] +/g,"body"),a=a.replace(/\.editor-[^ ]+ /g,""),a=a.replace(/([^{]+)({[^}]*})/gi,function(e,t,a){return t=t.replace(/ *([^,]+)/g,function(e,t){return"body"==t.toLowerCase()?"*"+n:n+t}),t+a}),t+a+s})),e}},_unscopeCSS:{enumerable:!0,value:function(e){return"string"==typeof e&&(e=e.replace(/(<style ?[^>]*>)([^<]*)(<\/style>)/gi,function(e,t,n,a){return n=n.replace(/\*\.editor-[^ ] +/g,"body"),n=n.replace(/\.editor-[^ ]+ /g,""),t+n+a})),e}},_removeScript:{enumerable:!0,value:function(e){var t=document.createElement("div"),n=function(e){var t,a,s,r=e.children,i=r.length,o=e.attributes,l=o.length;for(s=0;l>s;s++)a=o[s],(a.name.match(/^on[a-z]+/i)||a.value.match(/^javascript:/))&&(e.removeAttribute(a.name),s--,l--);for(s=0;i>s;s++)t=r[s],"SCRIPT"==t.tagName?(t.parentNode.removeChild(t),s--,i--):n(t)};return t.innerHTML=e,n(t),t.innerHTML}}})}});