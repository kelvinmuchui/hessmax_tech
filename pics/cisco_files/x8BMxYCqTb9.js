/*!CK:2247675175!*//*1458859477,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["UcN+L"]); }

__d("NavigationMetricsEnumJS",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={NAVIGATION_START:"navigationStart",UNLOAD_EVENT_START:"unloadEventStart",UNLOAD_EVENT_END:"unloadEventEnd",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",CONNECT_END:"connectEnd",SECURE_CONNECTION_START:"secureConnectionStart",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd",DOM_LOADING:"domLoading",DOM_INTERACTIVE:"domInteractive",DOM_CONTENT_LOADED_EVENT_START:"domContentLoadedEventStart",DOM_CONTENT_LOADED_EVENT_END:"domContentLoadedEventEnd",DOM_COMPLETE:"domComplete",LOAD_EVENT_START:"loadEventStart",LOAD_EVENT_END:"loadEventEnd"};},null);
__d("PagePluginActions",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={PAGE_AVATAR:"page_avatar",PAGE_CTA:"page_cta",PAGE_LIKE:"page_like",PAGE_PERMALINK:"page_permalink",PAGE_SHARE:"page_share",PAGE_UNLIKE:"page_unlike"};},null);
__d("PagePluginActionTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CLICK:"click"};},null);
__d("PerfXClientMetricsConfig",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={LOGGER_CONFIG:"PerfXClientMetricsLoggerConfig"};},null);
__d("ResourceTimingMetricsEnumJS",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={START_TIME:"startTime",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",SECURE_CONNECTION_START:"secureConnectionStart",CONNECT_END:"connectEnd",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd"};},null);
__d('getHashtagRegexString',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){var i='\xc0-\xd6'+'\xd8-\xf6'+'\xf8-\xff'+'\u0100-\u024f'+'\u0253-\u0254'+'\u0256-\u0257'+'\u0259'+'\u025b'+'\u0263'+'\u0268'+'\u026f'+'\u0272'+'\u0289'+'\u028b'+'\u02bb'+'\u0300-\u036f'+'\u1e00-\u1eff',j='\u0400-\u04ff'+'\u0500-\u0527'+'\u2de0-\u2dff'+'\ua640-\ua69f'+'\u0591-\u05bf'+'\u05c1-\u05c2'+'\u05c4-\u05c5'+'\u05c7'+'\u05d0-\u05ea'+'\u05f0-\u05f4'+'\ufb12-\ufb28'+'\ufb2a-\ufb36'+'\ufb38-\ufb3c'+'\ufb3e'+'\ufb40-\ufb41'+'\ufb43-\ufb44'+'\ufb46-\ufb4f'+'\u0610-\u061a'+'\u0620-\u065f'+'\u066e-\u06d3'+'\u06d5-\u06dc'+'\u06de-\u06e8'+'\u06ea-\u06ef'+'\u06fa-\u06fc'+'\u06ff'+'\u0750-\u077f'+'\u08a0'+'\u08a2-\u08ac'+'\u08e4-\u08fe'+'\ufb50-\ufbb1'+'\ufbd3-\ufd3d'+'\ufd50-\ufd8f'+'\ufd92-\ufdc7'+'\ufdf0-\ufdfb'+'\ufe70-\ufe74'+'\ufe76-\ufefc'+'\u200c-\u200c'+'\u0e01-\u0e3a'+'\u0e40-\u0e4e'+'\u1100-\u11ff'+'\u3130-\u3185'+'\uA960-\uA97F'+'\uAC00-\uD7AF'+'\uD7B0-\uD7FF'+'\uFFA1-\uFFDC',k=String.fromCharCode,l='\u30A1-\u30FA\u30FC-\u30FE'+'\uFF66-\uFF9F'+'\uFF10-\uFF19\uFF21-\uFF3A'+'\uFF41-\uFF5A'+'\u3041-\u3096\u3099-\u309E'+'\u3400-\u4DBF'+'\u4E00-\u9FFF'+k(173824)+'-'+k(177983)+k(177984)+'-'+k(178207)+k(194560)+'-'+k(195103)+'\u3003\u3005\u303B',m=i+j+l,n='\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6'+'\u00F8-\u0241\u0250-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EE\u037A\u0386'+'\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03CE\u03D0-\u03F5\u03F7-\u0481'+'\u048A-\u04CE\u04D0-\u04F9\u0500-\u050F\u0531-\u0556\u0559\u0561-\u0587'+'\u05D0-\u05EA\u05F0-\u05F2\u0621-\u063A\u0640-\u064A\u066E-\u066F'+'\u0671-\u06D3\u06D5\u06E5-\u06E6\u06EE-\u06EF\u06FA-\u06FC\u06FF\u0710'+'\u0712-\u072F\u074D-\u076D\u0780-\u07A5\u07B1\u0904-\u0939\u093D\u0950'+'\u0958-\u0961\u097D\u0985-\u098C\u098F-\u0990\u0993-\u09A8\u09AA-\u09B0'+'\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC-\u09DD\u09DF-\u09E1\u09F0-\u09F1'+'\u0A05-\u0A0A\u0A0F-\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32-\u0A33'+'\u0A35-\u0A36\u0A38-\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D'+'\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2-\u0AB3\u0AB5-\u0AB9\u0ABD'+'\u0AD0\u0AE0-\u0AE1\u0B05-\u0B0C\u0B0F-\u0B10\u0B13-\u0B28\u0B2A-\u0B30'+'\u0B32-\u0B33\u0B35-\u0B39\u0B3D\u0B5C-\u0B5D\u0B5F-\u0B61\u0B71\u0B83'+'\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99-\u0B9A\u0B9C\u0B9E-\u0B9F'+'\u0BA3-\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0C05-\u0C0C\u0C0E-\u0C10'+'\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C60-\u0C61\u0C85-\u0C8C'+'\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE'+'\u0CE0-\u0CE1\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39'+'\u0D60-\u0D61\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6'+'\u0E01-\u0E30\u0E32-\u0E33\u0E40-\u0E46\u0E81-\u0E82\u0E84\u0E87-\u0E88'+'\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7'+'\u0EAA-\u0EAB\u0EAD-\u0EB0\u0EB2-\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6'+'\u0EDC-\u0EDD\u0F00\u0F40-\u0F47\u0F49-\u0F6A\u0F88-\u0F8B\u1000-\u1021'+'\u1023-\u1027\u1029-\u102A\u1050-\u1055\u10A0-\u10C5\u10D0-\u10FA\u10FC'+'\u1100-\u1159\u115F-\u11A2\u11A8-\u11F9\u1200-\u1248\u124A-\u124D'+'\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0'+'\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310'+'\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C'+'\u166F-\u1676\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711'+'\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7'+'\u17DC\u1820-\u1877\u1880-\u18A8\u1900-\u191C\u1950-\u196D\u1970-\u1974'+'\u1980-\u19A9\u19C1-\u19C7\u1A00-\u1A16\u1D00-\u1DBF\u1E00-\u1E9B'+'\u1EA0-\u1EF9\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D'+'\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC'+'\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC'+'\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u2094\u2102\u2107'+'\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D'+'\u212F-\u2131\u2133-\u2139\u213C-\u213F\u2145-\u2149\u2C00-\u2C2E'+'\u2C30-\u2C5E\u2C80-\u2CE4\u2D00-\u2D25\u2D30-\u2D65\u2D6F\u2D80-\u2D96'+'\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6'+'\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3006\u3031-\u3035'+'\u303B-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF'+'\u3105-\u312C\u3131-\u318E\u31A0-\u31B7\u31F0-\u31FF\u3400-\u4DB5'+'\u4E00-\u9FBB\uA000-\uA48C\uA800-\uA801\uA803-\uA805\uA807-\uA80A'+'\uA80C-\uA822\uAC00-\uD7A3\uF900-\uFA2D\uFA30-\uFA6A\uFA70-\uFAD9'+'\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C'+'\uFB3E\uFB40-\uFB41\uFB43-\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F'+'\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A'+'\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7'+'\uFFDA-\uFFDC',o='\u0300-\u036F\u0483-\u0486\u0591-\u05B9\u05BB-\u05BD\u05BF'+'\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u0615\u064B-\u065E\u0670'+'\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\u0711\u0730-\u074A'+'\u07A6-\u07B0\u0901-\u0903\u093C\u093E-\u094D\u0951-\u0954\u0962-\u0963'+'\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7-\u09C8\u09CB-\u09CD\u09D7'+'\u09E2-\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47-\u0A48\u0A4B-\u0A4D'+'\u0A70-\u0A71\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD'+'\u0AE2-\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B43\u0B47-\u0B48\u0B4B-\u0B4D'+'\u0B56-\u0B57\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7'+'\u0C01-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55-\u0C56'+'\u0C82-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5-\u0CD6'+'\u0D02-\u0D03\u0D3E-\u0D43\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D82-\u0D83'+'\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2-\u0DF3\u0E31\u0E34-\u0E3A'+'\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB-\u0EBC\u0EC8-\u0ECD\u0F18-\u0F19'+'\u0F35\u0F37\u0F39\u0F3E-\u0F3F\u0F71-\u0F84\u0F86-\u0F87\u0F90-\u0F97'+'\u0F99-\u0FBC\u0FC6\u102C-\u1032\u1036-\u1039\u1056-\u1059\u135F'+'\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17B6-\u17D3\u17DD'+'\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8-\u19C9'+'\u1A17-\u1A1B\u1DC0-\u1DC3\u20D0-\u20DC\u20E1\u20E5-\u20EB\u302A-\u302F'+'\u3099-\u309A\uA802\uA806\uA80B\uA823-\uA827\uFB1E\uFE00-\uFE0F'+'\uFE20-\uFE23',p='\u0030-\u0039\u0660-\u0669\u06F0-\u06F9\u0966-\u096F\u09E6-\u09EF'+'\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F'+'\u0CE6-\u0CEF\u0D66-\u0D6F\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29'+'\u1040-\u1049\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9'+'\uFF10-\uFF19',q=n+o+m,r=p+'_',s=q+r,t='['+q+']',u='['+s+']',v='^|$|[^&/'+s+']',w='[#\\uFF03]',x='('+v+')('+w+')('+u+'*'+t+u+'*)';return x;}f.exports=h;},null);
__d('getHashtagRegex',['getHashtagRegexString'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){return new RegExp(c('getHashtagRegexString')(),'ig');}f.exports=h;},null);
__d('sourceMetaToString',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k;if(i.name){k=i.name;if(i.module)k=i.module+'.'+k;}else if(i.module)k=i.module+'.<anonymous>';if(j&&i.line){k=(k?k:'<anonymous>')+':'+i.line;if(i.column)k+=':'+i.column;}return k;}f.exports=h;},null);
__d('NavigationTimingHelper',['NavigationMetricsEnumJS','forEachObject','performance'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k){var l={};c('forEachObject')(c('NavigationMetricsEnumJS'),function(m){var n=k[m];if(n)l[m]=n+j;});return l;}var i={getAsyncRequestTimings:function(j){if(!j||!c('performance').timing||!c('performance').getEntriesByName)return undefined;var k=c('performance').getEntriesByName(j);if(k.length===0)return undefined;return h(c('performance').timing.navigationStart,k[0]);},getNavTimings:function(){if(!c('performance').timing)return undefined;return h(0,c('performance').timing);}};f.exports=i;},null);
__d('TimeSliceHelper',['ArtilleryExperiments','LogBuffer','sourceMetaToString'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={getMetrics:function(i,j,k,l){var m=c('LogBuffer').read('time_slice'),n,o=[],p=function(q){var r;if(q.guard){var s=c('sourceMetaToString')(q),t=q.guard.toString();r=s?t+' at '+s:t;}else r='JS['+q.count+']';if(c('ArtilleryExperiments').artillery_timeslice_edges){o.push({begin:q.begin,end:q.end,name:r,id:q.id,parentID:q.parentID});}else o.push({begin:q.begin,end:q.end,name:r});};m.forEach(function(q){if(i&&q.end<i||j&&q.begin>j)return;if(q.end-q.begin<k){if(n&&q.begin-n.end<l){n.end=q.end;n.count++;}else{if(n)p(n.count==1?n.first:n);n={begin:q.begin,end:q.end,count:1,first:q,guard:false,id:undefined,parentID:undefined};}}else p(q);});if(n)p(n.count==1?n.first:n);return o;}};f.exports=h;},null);
__d('PerfXFlusher',['invariant','BanzaiLogger','PerfXClientMetricsConfig'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('PerfXClientMetricsConfig').LOGGER_CONFIG,j=['perfx_page','perfx_page_type','tti','e2e'];function k(m){j.forEach(function(n){!(n in m)?h(0):void 0;});}var l={flush:function(m,n){k(n);n.lid=m;if(n.fbtrace_id){c('BanzaiLogger').log(i,n,{delay:10*1000});}else c('BanzaiLogger').log(i,n);}};f.exports=l;},null);
__d('legacy:onload-action',['PageHooks'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b._domreadyHook=c('PageHooks')._domreadyHook;b._onloadHook=c('PageHooks')._onloadHook;b.runHook=c('PageHooks').runHook;b.runHooks=c('PageHooks').runHooks;b.keep_window_set_as_loaded=c('PageHooks').keepWindowSetAsLoaded;},3);
__d('AsyncRequestNectarLogging',['AsyncRequest','Nectar'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();Object.assign(c('AsyncRequest').prototype,{setNectarModuleData:function(h){if(this.method=='POST')c('Nectar').addModuleData(this.data,h);},setNectarImpressionId:function(){if(this.method=='POST')c('Nectar').addImpressionID(this.data);}});},null);
__d('ClickRefUtils',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={get_intern_ref:function(i){if(!!i){var j={profile_minifeed:1,gb_content_and_toolbar:1,gb_muffin_area:1,ego:1,bookmarks_menu:1,jewelBoxNotif:1,jewelNotif:1,BeeperBox:1,searchBarClickRef:1};for(var k=i;k&&k!=document.body;k=k.parentNode){if(!k.id||typeof k.id!=='string')continue;if(k.id.substr(0,8)=='pagelet_')return k.id.substr(8);if(k.id.substr(0,8)=='box_app_')return k.id;if(j[k.id])return k.id;}}return '-';},get_href:function(i){var j=i.getAttribute&&(i.getAttribute('ajaxify')||i.getAttribute('data-endpoint'))||i.action||i.href||i.name;return typeof j==='string'?j:null;},should_report:function(i,j){if(j=='FORCE')return true;if(j=='INDIRECT')return false;return i&&(h.get_href(i)||i.getAttribute&&i.getAttribute('data-ft'));}};f.exports=h;},null);
__d("setUECookie",["Env"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){if(!c("Env").no_cookies)document.cookie="act="+encodeURIComponent(i)+"; path=/; domain="+window.location.hostname.replace(/^.*(\.facebook\..*)$/i,'$1');}f.exports=h;},null);
__d('ClickRefLogger',['Arbiter','Banzai','ClickRefUtils','Env','ScriptPath','SessionName','Vector','$','collectDataAttributes','ge','pageID','setUECookie'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={delay:0,retry:true};function i(m){if(!c('ge')('content'))return [0,0,0,0];var n=c('$')('content'),o=c('Vector').getEventPosition(m);return [o.x,o.y,n.offsetLeft,n.clientWidth];}function j(m,n,event,o){var p='r',q=[0,0,0,0],r,s;if(!!event){r=event.type;if(r=='click'&&c('ge')('content'))q=i(event);var t=0;event.ctrlKey&&(t+=1);event.shiftKey&&(t+=2);event.altKey&&(t+=4);event.metaKey&&(t+=8);if(t)r+=t;}if(!!n)s=c('ClickRefUtils').get_href(n);var u=c('collectDataAttributes')(!!event?event.target||event.srcElement:n,['ft','gt']);Object.assign(u.ft,o.ft);Object.assign(u.gt,o.gt);if(typeof u.ft.ei==='string')delete u.ft.ei;var v=[m._ue_ts,m._ue_count,s||'-',m._context,r||'-',c('ClickRefUtils').get_intern_ref(n),p,b.URI?b.URI.getRequestURI(true,true).getUnqualifiedURI().toString():location.pathname+location.search+location.hash,u].concat(q).concat(c('pageID')).concat(c('ScriptPath').getScriptPath());return v;}c('Arbiter').subscribe("ClickRefAction/new",function(m,n){if(c('ClickRefUtils').should_report(n.node,n.mode)){var o=j(n.cfa,n.node,n.event,n.extra_data);c('setUECookie')(n.cfa.ue);var p=[c('SessionName').getName(),Date.now(),'act'];c('Banzai').post('click_ref_logger',Array.prototype.concat(p,o),h);}});function k(m){function n(v){var w='';for(var x=0;x<v.length;x++)w+=String.fromCharCode(1^v.charCodeAt(x));return w;}function o(v,w,x,y){var z=w[x];if(z&&v&&z in v)if(x+1<w.length){o(v[z],w,x+1,y);}else{var aa=v[z],ba=function(){setTimeout(y.bind(null,arguments));return aa.apply(this,arguments);};ba.toString=aa.toString.bind(aa);Object.defineProperty(v,z,{configurable:false,writable:true,value:ba});}}var p={},q={},r=false;function s(v,w){if(q[v])return;q[v]=p[v]=1;}var t=m[n('jiri')];if(t){var u=[];n(t).split(',').map(function(v,w){var x=v.substring(1).split(':'),y;switch(v.charAt(0)){case '1':y=new RegExp('\\b('+x[0]+')\\b','i');u.push(function(z){var aa=y.exec(Object.keys(window));if(aa)s(w,''+aa);});break;case '2':y=new RegExp(x[0]);o(window,x,2,function(z){var aa=z[x[1]];if(typeof aa==='string'&&y.test(aa))s(w,v);});break;case '3':o(window,x,0,function(){for(var z=u.length;z--;)u[z]();var aa=Object.keys(p);if(aa.length){p={};setTimeout(c('Banzai')[n('qnru')].bind(c('Banzai'),n('islg'),{m:''+aa}),5000);}});break;case '4':r=true;break;}});}}try{k(c('Env'));}catch(l){}},null);
__d('PostLoadJS',['Bootloader','Run','emptyFunction'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k){c('Run').onAfterLoad(function(){c('Bootloader').loadModules.call(c('Bootloader'),[j],k);});}var i={loadAndRequire:function(j){h(j,c('emptyFunction'));},loadAndCall:function(j,k,l){h(j,function(m){m[k].apply(m,l);});}};f.exports=i;},null);
__d('UserActionHistory',['Arbiter','ClickRefUtils','ScriptPath','throttle','WebStorage'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={click:1,submit:1},i=false,j={log:[],len:0},k=c('throttle').acrossTransitions(function(){try{i._ua_log=JSON.stringify(j);}catch(n){i=false;}},1000);function l(){var n=c('WebStorage').getSessionStorage();if(n){i=n;i._ua_log&&(j=JSON.parse(i._ua_log));}else i=false;j.log[j.len%10]={ts:Date.now(),path:'-',index:j.len,type:'init',iref:'-'};j.len++;c('Arbiter').subscribe("UserAction/new",function(o,p){var q=p.ua,r=p.node,event=p.event;if(!event||!(event.type in h))return;var s={path:c('ScriptPath').getScriptPath(),type:event.type,ts:q._ue_ts,iref:c('ClickRefUtils').get_intern_ref(r)||'-',index:j.len};j.log[j.len++%10]=s;i&&k();});}function m(){return j.log.sort(function(n,o){return o.ts!=n.ts?o.ts-n.ts:o.index-n.index;});}l();f.exports={getHistory:m};},null);
__d('ImageTimingHelper',['Arbiter','BigPipe','URI'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i={};c('Arbiter').subscribe(c('BigPipe').Events.init,function(j,k){if(k.lid&&k.lid!=='0')k.arbiter.subscribe('images_displayed',function(l,m){var n=h[m.lid];if(!n)n=h[m.lid]=[];m.images.forEach(function(o){try{var q=new (c('URI'))(o);o=q.setFragment('').toString();}catch(p){return;}if(i[o])return;i[o]=true;n.push({pagelet:m.pagelet,timeslice:m.timeslice,ts:m.ts,uri:o});});});});f.exports.getImageTimings=function(j){return h[j]||[];};},null);
__d('PageletEventsHelper',['Arbiter','PageletEventConstsJS'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='BigPipe/init',i='pagelet_event',j='phase_begin',k={},l=false;function m(){return {pagelets:{},categories:{},phase_start:{}};}function n(q,r,s,t){if(k[t].pagelets[r]==undefined)k[t].pagelets[r]={};k[t].pagelets[r][q]=s;}function o(q){q.subscribe(i,function(r,s){var event=s.event,t=s.ts,u=s.id,v=s.lid,w=s.phase,x=s.categories;n(event,u,t,v);var y=k[v],z=y.pagelets[u];if(event===c('PageletEventConstsJS').ARRIVE_END)z.phase=w;if((event===c('PageletEventConstsJS').ONLOAD_END||event===c('PageletEventConstsJS').DISPLAY_END)&&x)x.forEach(function(aa){if(y.categories[aa]==undefined)y.categories[aa]={};y.categories[aa][event]=t;});});q.subscribe(j,function(event,r){k[r.lid].phase_start[r.phase]=r.ts;});}var p={init:function(){if(l)return;c('Arbiter').subscribe(h,function(event,q){var r=q.lid,s=q.arbiter;k[r]=m();o(s);});l=true;},getMetrics:function(q){if(k[q])return JSON.parse(JSON.stringify(k[q]));return null;}};f.exports=p;},null);
__d('PerfXLogger',['Arbiter','LogBuffer','PageEvents','PerfXFlusher','NavigationMetrics','Set','performance'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i=['e2e','tti','all_pagelets_displayed','all_pagelets_loaded'],j={},k,l={_listenersSetUp:false,_setupListeners:function(){if(this.listenersSetUp)return;this._subscribeToNavigationDoneEvent();this.listenersSetUp=true;},_init:function(m,n,o){h[m]={perfx_page:n,perfx_page_type:o,tags:new (c('Set'))()};this._setupListeners();},initForPageLoad:function(m,n,o){k=m;this._init(m,n,o);},initForQuickling:function(m,n,o,p){this._init(m,n,o);j[m]=p;},updateProperties:function(m,n,o){var p=h[m];if(p){p.perfx_page=n;p.perfx_page_type=o;}},addTag:function(m,n){var o=h[m];if(o)o.tags.add(n);},_subscribeToNavigationDoneEvent:function(){c('NavigationMetrics').addListener(c('NavigationMetrics').Events.NAVIGATION_DONE,function(m,n){var o=n.serverLID;if(!(o in h))return;h[o].tti=n.tti;h[o].e2e=n.e2e;h[o].all_pagelets_displayed=n.extras.all_pagelets_displayed;h[o].all_pagelets_loaded=n.extras.all_pagelets_loaded;var p=n.pageType;if(this._validateValues(o))if(p==='normal'){this._finishPageload(o);}else if(p==='quickling')this._finishQuickling(o);}.bind(this));},_generatePayload:function(m,n){var o=h[m];if(o.fbtrace_id){o.js_tti=this._getJSTime(n,o.tti);o.js_e2e=this._getJSTime(n,o.e2e);}var p=Object.assign({},o),q=document.querySelector('[id^="hyperfeed_story_id"]');if(q){var r=JSON.parse(q.getAttribute('data-ft'));if(r)p.mf_query_id=r.qid;}p.tags=Array.from(o.tags);this._adjustValues(p,n);return p;},_getPageloadPayload:function(m){if(!(m in h))return;if(!c('performance').timing){delete h[m];return;}var n=c('performance').timing.fetchStart;return this._generatePayload(m,n);},_getQuicklingPayload:function(m){if(!(m in j)||!(m in h))return;if(!c('performance').timing||!c('performance').getEntriesByName){delete j[m];delete h[m];return;}var n=j[m],o=c('performance').getEntriesByName(n);if(o.length===0)return;var p=o[0],q=c('performance').timing.navigationStart+p.fetchStart;return this._generatePayload(m,q);},_finishPageload:function(m){var n=this._getPageloadPayload(m);if(n)this._log(m,n);},_finishQuickling:function(m){var n=this._getQuicklingPayload(m);if(n)this._log(m,n);},_log:function(m,n){c('PerfXFlusher').flush(m,n);},_adjustValues:function(m,n){for(var o=0;o<i.length;o++){var p=i[o],q=m[p];m[p]=q-n;}},_validateValues:function(m){if(!(m in h))return false;var n=h[m];for(var o=0;o<i.length;o++){var p=i[o];if(!n[p])return false;}return true;},getPayload:function(m){if(!(m in h))return;var n=h[m].perfx_page_type;if(n==="normal"){return this._getPageloadPayload(m);}else if(n==="quickling")return this._getQuicklingPayload(m);},setFBTraceID:function(m,n){if(m in h)h[m].fbtrace_id=n;},_getJSTime:function(m,n){if(m>n)return 0;var o=0;c('LogBuffer').read('time_slice').forEach(function(p){var q=p.begin,r=p.end;if(q>r)return;if(m<=q&&r<=n){o+=r-q;}else if(q<=m&&n<=r){o+=n-m;}else if(q<=m&&m<=r){o+=r-m;}else if(q<=n&&n<=r)o+=n-q;});return o;}};f.exports=l;},null);
__d('PluginCSSReflowHack',['Style'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={trigger:function(i){setTimeout(function(){var j='border-bottom-width',k=c('Style').get(i,j);c('Style').set(i,j,parseInt(k,10)+1+'px');var l=i.offsetHeight;c('Style').set(i,j,k);return l;},1000);}};f.exports=h;},null);
__d('PluginPageActionLogger',['BanzaiLogger','DOM','Event','PagePluginActions','PagePluginActionTypes'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={initializeClickLoggers:function(i,j,k,l,m,n,o,p,q,r){var s=function(t,u){try{var w=c('DOM').find(l,'.'+t);c('Event').listen(w,'click',function(x){c('BanzaiLogger').log('PagePluginActionsLoggerConfig',{page_id:j,page_plugin_action:u,page_plugin_action_type:c('PagePluginActionTypes').CLICK,referer_url:k,is_sdk:i});});}catch(v){}};s(m,c('PagePluginActions').PAGE_LIKE);s(n,c('PagePluginActions').PAGE_UNLIKE);s(o,c('PagePluginActions').PAGE_AVATAR);s(p,c('PagePluginActions').PAGE_PERMALINK);s(q,c('PagePluginActions').PAGE_SHARE);s(r,c('PagePluginActions').PAGE_CTA);}};f.exports=h;},null);
__d('KappaWrapper',['AsyncSignal','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false;f.exports={forceStart:function(i,j,k){var l=0,m=function(){new (c('AsyncSignal'))('/si/kappa/',{Ko:"a"}).send();if(++l<i)c('setTimeoutAcrossTransitions')(m,j*1000);};c('setTimeoutAcrossTransitions')(m,(j+k)*1000);},start:function(i,j,k){if(!h){h=true;this.forceStart(i,j,k);}}};},null);
__d('Chromedome',['fbt'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();g.start=function(i){if(i.off||top!==window||!/(^|\.)facebook\.(com|sg)$/.test(document.domain))return;var j=i.stop||h._("Stop!"),k=i.text||h._("This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a Facebook feature or \"hack\" someone's account, it is a scam and will give them access to your Facebook account."),l=i.more||h._("See {url} for more information.",[h.param('url','https://www.facebook.com/selfxss')]);if((window.chrome||window.safari)&&!i.textonly){var m='font-family:helvetica; font-size:20px; ';[[j,i.c1||m+'font-size:50px; font-weight:bold; '+'color:red; -webkit-text-stroke:1px black;'],[k,i.c2||m],[l,i.c3||m],['','']].map(function(s){setTimeout(console.log.bind(console,'\n%c'+s[0],s[1]));});}else{var n=['',' .d8888b.  888                       888','d88P  Y88b 888                       888','Y88b.      888                       888',' "Y888b.   888888  .d88b.  88888b.   888','    "Y88b. 888    d88""88b 888 "88b  888','      "888 888    888  888 888  888  Y8P','Y88b  d88P Y88b.  Y88..88P 888 d88P',' "Y8888P"   "Y888  "Y88P"  88888P"   888','                           888','                           888','                           888'],o=(''+k).match(/.{35}.+?\s+|.+$/g),p=Math.floor(Math.max(0,(n.length-o.length)/2));for(var q=0;q<n.length||q<o.length;q++){var r=n[q];n[q]=r+new Array(45-r.length).join(' ')+(o[q-p]||'');}console.log('\n\n\n'+n.join('\n')+'\n\n'+l+'\n');return;}};},null);