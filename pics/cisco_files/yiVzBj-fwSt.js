/*!CK:3986949301!*//*1458859427,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["BWGEQ"]); }

__d('ReactComposerPromptsActionTypes',['keyMirror'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports=c('keyMirror')({SET_PROMPT_XHP:null});},null);
__d('ReactComposerPromptsActions',['ReactComposerDispatcher','ReactComposerPromptsActionTypes'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();h.prototype.setPromptXHP=function(i,j){'use strict';c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerPromptsActionTypes').SET_PROMPT_XHP,promptXHP:j});};function h(){'use strict';}f.exports=new h();},null);
__d('ReactComposerPromptsStore',['ReactComposerPromptsActionTypes','ReactComposerStoreBase'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('ReactComposerStoreBase'));i=h&&h.prototype;function j(){'use strict';var k;i.constructor.call(this,function(){return {promptXHP:null};},function(l){k&&k.handler(l);});k=this;}j.prototype.handler=function(k){'use strict';switch(k.type){case c('ReactComposerPromptsActionTypes').SET_PROMPT_XHP:this.$ReactComposerPromptsStore1(k);break;default:}};j.prototype.$ReactComposerPromptsStore1=function(k){'use strict';var l=this.validateAction(k,['composerID','promptXHP']),m=l[0],n=l[1],o=this.getComposerData(m);o.promptXHP=n;this.emitChange(m);};j.prototype.getPromptXHP=function(k){'use strict';return this.getComposerData(k).promptXHP;};f.exports=new j();},null);