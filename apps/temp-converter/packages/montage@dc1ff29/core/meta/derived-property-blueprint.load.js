montageDefine("dc1ff29","core/meta/derived-property-blueprint",{dependencies:["montage","core/meta/property-blueprint","core/logger"],factory:function(e,t){"use strict";e("montage").Montage;var n=e("core/meta/property-blueprint").PropertyBlueprint;e("core/logger").logger("blueprint");var r={dependencies:[],getterDefinition:"",setterDefinition:""};t.DerivedPropertyBlueprint=n.specialize({constructor:{value:function(){this.super()}},serializeSelf:{value:function(e){this.dependencies.length>0&&this._setPropertyWithDefaults(e,"dependencies",this.dependencies),this._setPropertyWithDefaults(e,"getterDefinition",this.getterDefinition),this._setPropertyWithDefaults(e,"setterDefinition",this.setterDefinition)}},deserializeSelf:{value:function(e){this.dependencies=this._getPropertyWithDefaults(e,"dependencies"),this.getterDefinition=this._getPropertyWithDefaults(e,"getterDefinition"),this.setterDefinition=this._getPropertyWithDefaults(e,"setterDefinition")}},_setPropertyWithDefaults:{value:function(e,t,n){n!=r[t]&&e.setProperty(t,n)}},_getPropertyWithDefaults:{value:function(e,t){var n=e.getProperty(t);return n?n:r[t]}},isDerived:{get:function(){return!0},serializable:!1},dependencies:{value:[],distinct:!0},getterDefinition:{value:r.getterDefinition},setterDefinition:{value:r.setterDefinition}})}});