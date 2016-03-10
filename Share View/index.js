/*! v3.0.1 Build Mon Nov 16 2015 12:13:02 GMT+0300 (MSK) */
!function(){var mashup={},define=function(){var t,e,n,a=Array.prototype.slice.call(arguments,0);"string"==typeof a[0]?(n=a[0],t=a[1],e=a[2]):Array.isArray(a[0])&&(t=a[0],e=a[1]);var r=t.reduce(function(t,e){return t.addDependency(e)},tau.mashups);return r=r.addDependency(n+"/config"),r=r.addMashup(function(){var a=Array.prototype.slice.call(arguments,0);if(t.length>0&&1===a.length)throw new Error("Can't properly load dependencies for mashup \""+n+'", mashup is stopped.');return mashup.variables=a[a.length-1],a.length-t.length===2?mashup.config=a[a.length-2]:mashup.config={},Object.freeze&&(Object.freeze(mashup.variables),Object.freeze(mashup.config),Object.freeze(mashup)),e.apply(null,a)})};define("ShareBoard",["Underscore","jQuery","tau/configurator","tau/init.points/init.points"],function(__WEBPACK_EXTERNAL_MODULE_4__,__WEBPACK_EXTERNAL_MODULE_5__,__WEBPACK_EXTERNAL_MODULE_6__,__WEBPACK_EXTERNAL_MODULE_11__){return function(t){function e(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return t[a].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e.p=mashup.variables?mashup.variables.mashupPath:e.p,e(0)}([function(t,e,n){t.exports=n(3)},,,function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var r=n(4),o=a(r),i=n(5),u=a(i),s=n(6),l=a(s),d=n(7),c=a(d),p=n(8),f=a(p),h=n(9),b=a(h),_=n(10),v=a(_),g=n(11),m=a(g);n(12);var y,x,w,j,k,E=mashup.config,A=E.serviceUrl,C=E.title||"Share %s",S="tauboard_user_shares_"+(window.loggedUser||{id:0}).id,O=l["default"].getBusRegistry(),U=l["default"].getGlobalBus(),L=l["default"].getRestStorage(),R=l["default"].getLoggedUser(),T=function(t){try{return JSON.parse(window.localStorage.getItem(t))}catch(e){return void 0}},D=function(t,e){window.localStorage.setItem(t,JSON.stringify(e))},z=function(t){return function(){t.apply(null,o["default"].rest(o["default"].toArray(arguments)))}},B=function(t,e,n){O.on("create",z(function(a){var r=a.bus;r.name===t&&r.on(e,n)})),O.on("destroy",z(function(a){var r=a.bus;r.name===t&&r.removeListener(e,n)}))},M=function(){if(!w)return"";var t=function(t){return o["default"].pluck(w[t]||[],"abbreviation")},e=t("selectedTeams").concat(t("selectedProjects")).join(",");return e.length>200&&(e=e.substr(0,200)+"..."),e},P=function(){return y&&x?x+"_"+y:void 0},N=m["default"].ajaxIdle.then(function(){return u["default"].ajax({type:"GET",url:l["default"].getApplicationPath()+"/api/v1/authentication?format=json"}).then(function(t){return t.Token})}),W=function(){return u["default"].when(N).then(function(t){var e={tick:(new Date).getTime(),serviceUrl:A,boardId:x,viewType:j,acid:y,title:document.title,system:window.tauSystemInfo||{},token:t,host:l["default"].getApplicationPath(),user:R||{id:0},viewportSize:{width:window.innerWidth,height:window.innerHeight},useContact:u["default"]("[name=useContact]").is(":checked")};return u["default"].ajax({method:"POST",url:A+"/capture/",data:JSON.stringify(e),contentType:"application/json",processData:!1,dataType:"json"})}).then(function(t){var e=P(),n=document.title+" ("+M()+")",a=t.url;return L.data(S,e,{url:a,title:n})})},K=function(t,e){return u["default"].when(N).then(function(t){return u["default"].ajax({method:"POST",url:A+"/stop/"+e,data:JSON.stringify({token:t}),contentType:"application/json",processData:!1,dataType:"json"})}).then(function(){return L.remove(S,{$key:t})})},X=function $(t){var e=T("isUseContactChecked");return e=e===!1?e:!0,u["default"].when(P()).then(function(t){return u["default"].when(L.data(S,t),t)}).then(function(t,n){return u["default"](c["default"]({share:t.value,key:n,serviceUrl:A,isUseContactChecked:Boolean(e)}))}).then(function(e){return e.on("click",".i-role-remove-share",function(e){e.stopPropagation(),e.preventDefault();var n=u["default"](this).data("key"),a=u["default"](this).data("url");K(n,a).then(function(){return $(t)})}),e.on("click",".i-role-create-share",function(e){e.stopPropagation(),e.preventDefault(),u["default"](e.target).attr("disabled","disabled"),W().then(function(){return $(t)})}),e.on("click",".i-role-manage-shares",function(e){return e.stopPropagation(),e.preventDefault(),I(t)}),e.on("click","[name=useContact]",function(t){D("isUseContactChecked",Boolean(u["default"](this).prop("checked")))}),e}).then(function(e){return t.html(e),e})},I=function G(t){return L.select(S,{$where:{scope:"private"},$fields:["key","userData.url AS url","userData.title AS title"]}).then(function(t){return u["default"](f["default"]({shares:t.data,serviceUrl:A}))}).then(function(e){return e.on("click",".i-role-remove-share",function(e){e.stopPropagation(),e.preventDefault(),u["default"](e.target).parents("li:first").css("opacity",.5),u["default"](e.target).remove();var n=u["default"](this).data("key"),a=u["default"](this).data("url");K(n,a).then(function(){return G(t)})}),e.on("click",".i-role-current-share",function(e){return e.stopPropagation(),e.preventDefault(),X(t)}),e}).then(function(e){t.html(e)})},F=function(t,e){e||(e=b["default"]),E.removeOld&&setTimeout(function(){t.find('[class="tau-board-actions-item share-board-action"]').remove()},100);var n={newlist:"list"}[k||j],a=o["default"].sprintf(C,o["default"].capitalize(n||k||j)),r=u["default"](e({title:a}));t.append(r);var i=u["default"]("<div />");X(i);var s=r.is("button")?r:r.find("button");s.tauBubble({className:"tau-share-board-bubble",content:i,onPositionConfig:function(t){t.at="center bottom",t.my="center top"},onShow:function(t){t.css("z-index",1e3),u["default"](".tau-in-text",t).focus().select()}})},J=function(t){F(t,v["default"])};U.on("application.context.data",function(t,e){w=e}),U.on("acid.ready",function(t,e){y=e}),B("board_plus","boardSettings.ready",function(t,e){x=e.boardSettings.settings.id,j="board",k=e.boardSettings.settings.viewMode}),B("newlist","boardSettings.ready",function(t,e){x=e.boardSettings.settings.id,j="board",k=e.boardSettings.settings.viewMode}),B("dashboard.toolbar","boardSettings.ready",function(t,e){x=e.boardSettings.settings.id,j="dashboard",k=null}),B("customReport","boardSettings.ready",function(t,e){x=e.boardSettings.settings.id,j="report",k=null}),R.isAdministrator||B("dashboard.toolbar","afterRender",function(t,e){j="dashboard",k=null;var n=e.element;n.find(".tau-actions-btn").length||J(n)}),B("dashboard-actions-bubble","afterRender",function(t,e){j="dashboard",k=null,F(e.element)}),B("report-actions-bubble","afterRender",function(t,e){j="report",k=null,F(e.element)}),B("actions-bubble","afterRenderAll",function(t,e){var n=["board","timeline","newlist"].indexOf(k)>=0;n&&F(e.element)})},function(t,e){t.exports=__WEBPACK_EXTERNAL_MODULE_4__},function(t,e){t.exports=__WEBPACK_EXTERNAL_MODULE_5__},function(t,e){t.exports=__WEBPACK_EXTERNAL_MODULE_6__},function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";Array.prototype.join;with(obj)__p+='<div class="tau-share-content">\n    ',share||(__p+='\n        <button type="button" class="tau-btn tau-board-new-share i-role-create-share">Share this view</button>\n        <span class="tau-txt tau-board-new-share">with anyone</span>\n    '),__p+="\n    ",share&&(__p+='\n        <textarea class="tau-in-text tau-existing-share" readonly="readonly">'+(null==(__t=serviceUrl)?"":__t)+"/v/"+(null==(__t=share.url)?"":__t)+'</textarea>\n\n        <div class="tau-link-actions tau-existing-share">\n            <a class="tau-remove i-role-remove-share" data-key="'+(null==(__t=key)?"":__t)+'" data-url="'+(null==(__t=share.url)?"":__t)+'">Remove</a>\n            <span class="tau-open">Copy link or <a target="_blank" href="'+(null==(__t=serviceUrl)?"":__t)+"/v/"+(null==(__t=share.url)?"":__t)+'">Open the page</a></span>\n        </div>\n    '),__p+="\n    <div class=\"tau-note\">There\\'s no need to grant permissions for that, so don\\'t give this link to bad guys. The\n        snapshot will refresh every two minutes with the card, zoom and focus currently applied to this view.\n    </div>\n\n    ",share||(__p+='\n        <div class="shareboard__mashupinput">\n            <label><input type="checkbox" name="useContact" ',isUseContactChecked&&(__p+="checked "),__p+="/> Show my contact button on shared view</label>\n        </div>\n    "),__p+='\n\n</div>\n\n<div class="tau-distinct">\n    <div class="tau-actions"><a class="tau-board-shares-manage i-role-manage-shares">Manage your public views</a></div>\n</div>\n';return __p}},function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";Array.prototype.join;with(obj)__p+='<div class="tau-share-content">\n    <h3>Shared views</h3>\n    <ul class="tau-boards-list">\n        ',shares.forEach(function(t){__p+='\n            <li>\n                <a href="'+(null==(__t=serviceUrl)?"":__t)+"/v/"+(null==(__t=t.url)?"":__t)+'" class="tau-board-item" target="_blank" title="'+(null==(__t=t.title)?"":__t)+'">\n                    <span class="tau-board-name">'+(null==(__t=t.title)?"":__t)+'</span>\n                </a>\n                <a class="tau-remove i-role-remove-share" data-key="'+(null==(__t=t.key)?"":__t)+'" data-url="'+(null==(__t=t.url)?"":__t)+'">Remove</a>\n            </li>\n        '}),__p+="\n        ",0==shares.length&&(__p+="\n            <li>You have no shared views</li>\n        "),__p+='\n    </ul>\n</div>\n\n<div class="tau-distinct">\n    <div class="tau-actions"><a class="tau-board-shares-main i-role-current-share">Share View Menu</a></div>\n</div>\n';return __p}},function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<div class="tau-board-actions-item share-board-action shareboard">\n   <span class="share-board">\n       <div class="tau-inline-group">\n           <div>\n               <button type="button" class="tau-btn tau-share tau-share-board-button tau-board-customize-beta">\n                   '+(null==(__t=title)?"":__t)+'\n               </button>\n               </div>\n       </div>\n    </span>\n    <div class="tau-txt">Share the view with the whole world.</div>\n</div>\n\n';return __p}},function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<button type="button" style="margin-left: 10px;" class="tau-btn tau-share tau-share-board-button tau-board-customize-beta">\n   '+(null==(__t=title)?"":__t)+"\n</button>\n";return __p}},function(t,e){t.exports=__WEBPACK_EXTERNAL_MODULE_11__},function(t,e,n){var a=n(13);"string"==typeof a&&(a=[[t.id,a,""]]);n(15)(a,{});a.locals&&(t.exports=a.locals)},function(t,e,n){e=t.exports=n(14)(),e.push([t.id,".tau-share-board-bubble .tau-boards-list .tau-remove,.tau-share-board-bubble .tau-link-actions .tau-remove{float:right}.tau-chart-tooltip .tau-bubble__inner{min-width:inherit;font-family:OpenSans;font-size:.917em;padding:3px 6px}.tau-bubble .tau-distinct{position:relative;background-color:#FAFBFE;border-top:1px solid #C3CED9}.tau-bubble .tau-distinct:before{content:'';position:absolute;top:0;left:0;right:0;height:1px;display:block;background-color:#DFE4EB}.tau-share-board-bubble .tau-txt{font-size:13px}.tau-share-board-bubble .tau-bubble__inner{width:280px;font-size:13px;z-index:1000}.tau-share-board-bubble .tau-share-content{padding:10px}.tau-share-board-bubble .tau-share-content .tau-txt{display:inline-block;vertical-align:middle;margin-left:6px}.tau-share-board-bubble .tau-share-content .tau-note{color:#728397;padding-top:8px;font-size:11px}.tau-share-board-bubble .tau-distinct{padding:10px}.tau-share-board-bubble .tau-distinct .tau-actions{text-align:center;padding-bottom:3px}.tau-share-board-bubble .tau-actions a{text-decoration:none;color:#728397;border-bottom:dashed 1px #728397;display:inline-block;line-height:13px}.tau-share-board-bubble .tau-share-content .tau-in-text{width:100%;height:46px;color:#000;resize:none;overflow:hidden}.tau-share-board-bubble .tau-link-actions{overflow:hidden;padding-top:8px}.tau-share-board-bubble .tau-remove{color:#C33}.tau-share-board-bubble a{color:#2e94e5}.tau-share-board-bubble a:hover{text-decoration:none}.tau-share-board-bubble h3{color:#A3B1BF;font-size:13px;line-height:13px;text-transform:uppercase;margin:0}.tau-share-board-bubble .tau-boards-list{margin:0;padding:5px 0 0;list-style:none}.tau-share-board-bubble .tau-boards-list li{padding:4px 0;overflow:hidden}.tau-share-board-bubble .tau-boards-list .tau-board-item{float:left;padding-left:23px;position:relative}.tau-share-board-bubble .tau-boards-list .tau-board-item:before{content:'';display:block;position:absolute;top:2px;left:0;height:13px;width:1pc}.tau-share-board-bubble .tau-boards-list .tau-board-item .tau-board-name{display:block;max-width:170px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.tau-share-board-bubble a{cursor:pointer;text-decoration:underline}.shareboard__mashupinput{margin-top:8px;cursor:pointer}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(a[o]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(t,e,n){function a(t,e){for(var n=0;n<t.length;n++){var a=t[n],r=c[a.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](a.parts[o]);for(;o<a.parts.length;o++)r.parts.push(u(a.parts[o],e))}else{for(var i=[],o=0;o<a.parts.length;o++)i.push(u(a.parts[o],e));c[a.id]={id:a.id,refs:1,parts:i}}}}function r(t){for(var e=[],n={},a=0;a<t.length;a++){var r=t[a],o=r[0],i=r[1],u=r[2],s=r[3],l={css:i,media:u,sourceMap:s};n[o]?n[o].parts.push(l):e.push(n[o]={id:o,parts:[l]})}return e}function o(){var t=document.createElement("style"),e=h();return t.type="text/css",e.appendChild(t),t}function i(){var t=document.createElement("link"),e=h();return t.rel="stylesheet",e.appendChild(t),t}function u(t,e){var n,a,r;if(e.singleton){var u=_++;n=b||(b=o()),a=s.bind(null,n,u,!1),r=s.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=i(),a=d.bind(null,n),r=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=o(),a=l.bind(null,n),r=function(){n.parentNode.removeChild(n)});return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else r()}}function s(t,e,n,a){var r=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=v(e,r);else{var o=document.createTextNode(r),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function l(t,e){var n=e.css,a=e.media;e.sourceMap;if(a&&t.setAttribute("media",a),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e){var n=e.css,a=(e.media,e.sourceMap);a&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var r=new Blob([n],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(r),o&&URL.revokeObjectURL(o)}var c={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},f=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=p(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,_=0;t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=f());var n=r(t);return a(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var u=n[i],s=c[u.id];s.refs--,o.push(s)}if(t){var l=r(t);a(l,e)}for(var i=0;i<o.length;i++){var s=o[i];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete c[s.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()}])})}();