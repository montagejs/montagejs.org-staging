"use strict";function SortedArraySet(e,t,n,r){if(!(this instanceof SortedArraySet))return new SortedArraySet(e,t,n,r);SortedArray.call(this,e,t,n,r)}module.exports=SortedArraySet;var Shim=require("./shim"),SortedArray=require("./sorted-array"),GenericSet=require("./generic-set"),PropertyChanges=require("./listen/property-changes");SortedArraySet.prototype=Object.create(SortedArray.prototype),SortedArraySet.prototype.constructor=SortedArraySet,Object.addEach(SortedArraySet.prototype,GenericSet.prototype),Object.addEach(SortedArraySet.prototype,PropertyChanges.prototype),SortedArraySet.prototype.add=function(e){return this.has(e)?!1:(SortedArray.prototype.add.call(this,e),!0)},SortedArraySet.prototype.reduce=function(e,t){var n=this,r=arguments[2];return this.array.reduce(function(t,i,s){return e.call(r,t,i,s,n)},t)},SortedArraySet.prototype.reduceRight=function(e,t){var n=this,r=arguments[2];return this.array.reduceRight(function(t,i,s){return e.call(r,t,i,s,n)},t)}