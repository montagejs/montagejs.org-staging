montageDefine("4f13e82","core/tree-controller",{dependencies:["core/core"],factory:function(e,t){var n=e("core/core").Montage,r=n.specialize({constructor:{value:function(){this.depth=null,this.node=null,this.content=null,this.defineBinding("content",{"<->":"node.content"}),this.defineBinding("expanded",{"<->":"node.expanded"}),this.defineBinding("parent",{"<-":"node.parent"}),this.defineBinding("children",{"<-":"node.children"})}},initWithNodeAndDepth:{value:function(e,t){return this.depth=t,this.node=e,this}}}),i=t.TreeController=n.specialize({constructor:{value:function(){this.content=null,this.parent=null,this.expanded=!1,this.childrenPath=null,this.children=[],this.childNodes=[],this.childIterations=[],this.indentedChildIterations=[],this.iterations=[],this.defineBinding("children.rangeContent()",{"<-":"content.path(childrenPath)"}),this.children.addRangeChangeListener(this,"children"),this.defineBinding("length",{"<-":"1 + (expanded ? childNodes.sum{length} : 0)"}),this.defineBinding("childIterations.rangeContent()",{"<-":"expanded ? childNodes.flatten{iterations} : []"}),this.childIterations.addRangeChangeListener(this,"childIterations"),this.iteration=(new r).initWithNodeAndDepth(this,0),this.defineBinding("iterations.rangeContent()",{"<-":"[[iteration], indentedChildIterations].flatten()"})}},init:{value:function(e,t,n){return this.parent=n||null,this.content=e,this.childrenPath=t,this}},handleChildrenRangeChange:{value:function(e,t,n){this.childNodes.swap(n,t.length,e.map(function(e){return(new i).init(e,this.childrenPath,this)},this))}},handleChildIterationsRangeChange:{value:function(e,t,n){this.indentedChildIterations.swap(n,t.length,e.map(function(e){return(new this.Iteration).initWithNodeAndDepth(e.node,e.depth+1)},this))}},Iteration:{value:r}})}});