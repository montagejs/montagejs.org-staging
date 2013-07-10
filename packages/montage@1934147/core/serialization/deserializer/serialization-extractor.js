var Montage=require("core/core").Montage,MontageReviver=require("./montage-reviver").MontageReviver,parse=require("frb/parse"),SerializationExtractor=Montage.specialize({_serialization:{value:null},initWithSerialization:{value:function(e){this._serialization=e}},extractObjects:{value:function(e,n){var s=this._serialization,a={};n=n||[];for(var t,o=0;t=e[o];o++)t in s&&(a[t]=s[t],this._findLabels(t,n));for(var t,o=0;t=n[o];o++)!(t in a)&&t in s&&(a[t]={});return JSON.parse(JSON.stringify(a))}},_findLabels:{value:function(e,n){var s;if(-1===n.indexOf(e)){if(!(e in this._serialization))throw Error("Object '"+e+"' not found.");n.push(e),s=this._serialization[e],this._collectLabels(s,n),this._collectLabelsInUnits(s,n)}}},_collectLabels:{value:function(e,n){var s,a=MontageReviver.getTypeOf(e);if("reference"===a)s=e["@"],this._findLabels(s,n);else if("array"===a)for(var t=0,o=e.length;o>t;t++)this._collectLabels(e[t],n);else if("object"===a)for(var i in e)this._collectLabels(e[i],n)}},_collectLabelsInUnits:{value:function(e,n){"bindings"in e?this._collectLabelsInBindings(e.bindings,n):"localizations"in e&&this._collectLabelsInLocalizations(e.localizations,n)}},_collectLabelsInBindings:{value:function(e,n){var s,a;for(var t in e)s=e[t],a=s["<-"]||s["<->"],this._collectLabelsInBindingPath(a,n)}},_collectLabelsInBindingPath:{value:function(e,n){var s=this,a=parse(e);this._traverseBindingParseTree(a,function(e){s._findLabels(e.label,n)})}},_traverseBindingParseTree:{value:function(e,n){var s=e.args;if("component"===e.type&&n(e),s)for(var a=0,t=s.length;t>a;a++)this._traverseBindingParseTree(s[a],n)}},_collectLabelsInLocalizations:{value:function(e,n){for(var s in e)this._collectLabelsInLocalizationProperty(e[s],n)}},_collectLabelsInLocalizationProperty:{value:function(e,n){var s;if("key"in e&&this._collectLabelsInLocalizationBinding(e.key,n),"default"in e&&this._collectLabelsInLocalizationBinding(e.default,n),"data"in e){s=e.data;for(var a in s)this._collectLabelsInLocalizationBinding(s[a],n)}}},_collectLabelsInLocalizationBinding:{value:function(e,n){var s=e["<-"]||e["<->"];s&&this._collectLabelsInBindingPath(s,n)}}});exports.SerializationExtractor=SerializationExtractor;