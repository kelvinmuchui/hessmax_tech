/*!CK:3925286122!*//*1458859476,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["EvLEY"]); }

__d('ChatUnreadCount',['ArbiterMixin','Map','MercuryIDs','MercurySingletonProvider','MercuryThreadInformer','MercuryThreads','MercuryUnreadState','mixin'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;j.getForFBID=function(l){'use strict';return k.getForFBID(l);};j.get=function(){'use strict';return k.get();};function j(l){'use strict';i.constructor.call(this);this.$ChatUnreadCount1=l;this.$ChatUnreadCount2=c('MercuryThreadInformer').getForFBID(l);this.$ChatUnreadCount3=c('MercuryThreads').getForFBID(l);this.$ChatUnreadCount4=new (c('Map'))();this.$ChatUnreadCount5=c('MercuryUnreadState').getForFBID(l);this.setupSubscriptions();}j.prototype.getUnreadCountForUID=function(l){'use strict';if(!l)return null;var m=c('MercuryIDs').getThreadIDFromUserID(l);if(!this.$ChatUnreadCount5.getIsThreadUnread(m)){this.$ChatUnreadCount4['delete'](l);return 0;}var n=this.$ChatUnreadCount3.getOrFetch(m),o=n&&n.unread_count;this.$ChatUnreadCount4.set(l,o);return o;};j.prototype.setupSubscriptions=function(){'use strict';this.$ChatUnreadCount2.subscribe('threads-updated',function(l,m){var n=Object.keys(m).some(function(o){var p=c('MercuryIDs').getUserIDFromThreadID(o);if(p===null)return false;var q=this.$ChatUnreadCount4.get(p)||0;return this.getUnreadCountForUID(p)!==q;}.bind(this));if(n)this.inform('unread-count-changed');}.bind(this));this.$ChatUnreadCount2.subscribe('unread-updated',function(){return this.inform('unread-count-changed');}.bind(this));};var k=new (c('MercurySingletonProvider'))(j);f.exports=j;},null);