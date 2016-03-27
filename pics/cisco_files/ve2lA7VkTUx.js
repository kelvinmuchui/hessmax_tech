/*!CK:3631770558!*//*1458859489,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["\/mEq2"]); }

__d('ReactComposerGroupStore',['ReactComposerActionStore','ReactComposerMediaConfig','ReactComposerPostUtils'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('ReactComposerActionStore'));i=h&&h.prototype;function j(){'use strict';i.constructor.call(this);}j.prototype.__onPostStarted=function(k){'use strict';c('ReactComposerPostUtils').post({actorID:k.actorID,composerID:k.composerID,contextInfo:k.config.contextInfo,targetID:k.targetID});};j.prototype.__canPost=function(k){'use strict';return !c('ReactComposerPostUtils').isPostButtonDisabled(k.composerID,c('ReactComposerMediaConfig').photo.limit);};f.exports=new j();},null);