"use strict";var Montage=require("montage").Montage,Promise=require("core/promise").Promise,BlueprintModule=require("core/meta/blueprint"),BinderModule=require("core/meta/binder"),RemoteReference=require("core/meta/remote-reference").RemoteReference,BinderReference=require("core/meta/binder-reference").BinderReference,logger=require("core/logger").logger("blueprint");exports.BlueprintReference=RemoteReference.specialize({constructor:{value:function(){this.super()}},identifier:{get:function(){return this._reference||(this._reference=this.referenceFromValue(this._value)),["blueprint",this._reference.blueprintName.toLowerCase(),"reference"].join("_")}},valueFromReference:{value:function(e,t){e.blueprintName;var n=e.blueprintModuleId,r=e.prototypeName,i=e.moduleId,a=e.binderReference,o=Promise.resolve(BinderModule.Binder.manager.defaultBinder);a&&(o=BinderReference.valueFromReference(a,require));var s=Promise.defer();return o.then(function(e){if(e){var a=e.blueprintForPrototype(r,i);if(a)s.resolve(a);else try{BlueprintModule.Blueprint.getBlueprintWithModuleId(n,t).then(function(t){t?(e.addBlueprint(t),s.resolve(t)):s.reject(Error("Error cannot find Blueprint "+n))},s.reject)}catch(o){s.reject(Error("Error cannot find Blueprint "+n))}}else try{s=BlueprintModule.Blueprint.getBlueprintWithModuleId(n,require)}catch(o){s.reject(Error("Error cannot find Blueprint "+n))}}),s.promise}},referenceFromValue:{value:function(e){var t={};return t.blueprintName=e.name,t.blueprintModuleId=e.blueprintModuleId,t.prototypeName=e.prototypeName,t.moduleId=e.moduleId,e.binder&&!e.binder.isDefault&&(t.binderReference=BinderReference.referenceFromValue(e.binder)),t}}});