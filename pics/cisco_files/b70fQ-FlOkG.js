/*!CK:307331973!*//*1458859479,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["DdwL2"]); }

__d('PagesComposerPostButtonUtils',['ReactComposerPhotoCarouselUtils','ReactComposerPostUtils','ReactComposerSlideshowUtils','ReactComposerStore'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={isPagePostButtonDisabled:function(i,j){return c('ReactComposerPostUtils').isPostButtonDisabled(i,j)||c('ReactComposerPhotoCarouselUtils').isPagePostButtonDisabled(i)||c('ReactComposerSlideshowUtils').isPagePostButtonDisabled(i);},isPageDropdownButtonDisabled:function(i){return c('ReactComposerStore').isPosting(i)||c('ReactComposerPhotoCarouselUtils').isPagePostButtonDisabled(i)||c('ReactComposerSlideshowUtils').isPagePostButtonDisabled(i);}};f.exports=h;},null);