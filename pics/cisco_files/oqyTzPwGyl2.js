/*!CK:1394874418!*//*1458859450,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["rMV0i"]); }

__d('ReactComposerMediaActions',['ReactComposerMediaActionType','ReactComposerDispatcher','ReactComposerMediaStore'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();c('ReactComposerMediaStore');h.prototype.setConfig=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerMediaActionType').SET_MEDIA_CONFIG,config:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.createAlbumSelectorClicked=function(i){'use strict';c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerMediaActionType').CREATE_ALBUM_SELECTOR_CLICKED});};function h(){'use strict';}f.exports=new h();},null);
__d('ReactComposerMediaAttachmentBootstrapper',['ReactComposerMediaActions','ReactComposerStatusActions','ReactComposerTaggerActions'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={bootstrap:function(i,j){c('ReactComposerTaggerActions').updateTaggersSource(i,j.taggersSource);c('ReactComposerStatusActions').setMentionsSource(i,j.mentionsSource);c('ReactComposerMediaActions').setConfig(i,j);}};f.exports=h;},null);