var mainJs=function(){"use strict";return $(document).ready(function(){$(".Scroll-Down").click(function(a){$("html, body").animate({scrollTop:$(".section2").offset().top+0},"300")})}),$(window).load(function(){}),$(window).resize(function(){}),{}}();!function(){"use strict";function a(){var a=$("body").find('[data-toggle="modal"]');a.click(function(){var a=$(this).data("target"),b=$(this).attr("data-theVideo"),c=b;b&&($(a+" iframe").attr("src",c),$(a).on("click",function(){$(this).find("iframe").attr("src",b)}))})}function b(){c.length>0&&a()}var c=$(".modal");return $(document).ready(function(){$(".modal-video .close").click(function(a){$("#video")[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")})}),{autoPlayYouTubeModal:a,hasModal:b}}(),!function(a,b){"function"==typeof define&&define.amd?define(["ScrollMagic","TweenMax","TimelineMax"],b):"object"==typeof exports?(require("gsap"),b(require("scrollmagic"),TweenMax,TimelineMax)):b(a.ScrollMagic||a.jQuery&&a.jQuery.ScrollMagic,a.TweenMax||a.TweenLite,a.TimelineMax||a.TimelineLite)}(this,function(a,b,c){"use strict";a.Scene.addOption("tweenChanges",!1,function(a){return!!a}),a.Scene.extend(function(){var a,d=this;d.on("progress.plugin_gsap",function(){e()}),d.on("destroy.plugin_gsap",function(a){d.removeTween(a.reset)});var e=function(){if(a){var b=d.progress(),c=d.state();a.repeat&&-1===a.repeat()?"DURING"===c&&a.paused()?a.play():"DURING"===c||a.paused()||a.pause():b!=a.progress()&&(0===d.duration()?b>0?a.play():a.reverse():d.tweenChanges()&&a.tweenTo?a.tweenTo(b*a.duration()):a.progress(b).pause())}};d.setTween=function(f,g,h){var i;arguments.length>1&&(arguments.length<3&&(h=g,g=1),f=b.to(f,g,h));try{i=c?new c({smoothChildTiming:!0}).add(f):f,i.pause()}catch(j){return d}return a&&d.removeTween(),a=i,f.repeat&&-1===f.repeat()&&(a.repeat(-1),a.yoyo(f.yoyo())),e(),d},d.removeTween=function(b){return a&&(b&&a.progress(0).pause(),a.kill(),a=void 0),d}})}),!function(a,b){"function"==typeof define&&define.amd?define(["ScrollMagic"],b):b("object"==typeof exports?require("scrollmagic"):a.ScrollMagic||a.jQuery&&a.jQuery.ScrollMagic)}(this,function(a){"use strict";var b="0.85em",c="9999",d=15,e=a._util,f=0;a.Scene.extend(function(){var a,b=this;b.addIndicators=function(c){if(!a){var d={name:"",indent:0,parent:void 0,colorStart:"green",colorEnd:"red",colorTrigger:"blue"};c=e.extend({},d,c),f++,a=new g(b,c),b.on("add.plugin_addIndicators",a.add),b.on("remove.plugin_addIndicators",a.remove),b.on("destroy.plugin_addIndicators",b.removeIndicators),b.controller()&&a.add()}return b},b.removeIndicators=function(){return a&&(a.remove(),this.off("*.plugin_addIndicators"),a=void 0),b}}),a.Controller.addOption("addIndicators",!1),a.Controller.extend(function(){var b=this,c=b.info(),f=c.container,g=c.isDocument,h=c.vertical,i={groups:[]};this._indicators=i;var j=function(){i.updateBoundsPositions()},k=function(){i.updateTriggerGroupPositions()};return f.addEventListener("resize",k),g||(window.addEventListener("resize",k),window.addEventListener("scroll",k)),f.addEventListener("resize",j),f.addEventListener("scroll",j),this._indicators.updateBoundsPositions=function(a){for(var b,c,g,j=a?[e.extend({},a.triggerGroup,{members:[a]})]:i.groups,k=j.length,l={},m=h?"left":"top",n=h?"width":"height",o=h?e.get.scrollLeft(f)+e.get.width(f)-d:e.get.scrollTop(f)+e.get.height(f)-d;k--;)for(g=j[k],b=g.members.length,c=e.get[n](g.element.firstChild);b--;)l[m]=o-c,e.css(g.members[b].bounds,l)},this._indicators.updateTriggerGroupPositions=function(a){for(var c,j,k,l,m,n=a?[a]:i.groups,o=n.length,p=g?document.body:f,q=g?{top:0,left:0}:e.get.offset(p,!0),r=h?e.get.width(f)-d:e.get.height(f)-d,s=h?"width":"height",t=h?"Y":"X";o--;)c=n[o],j=c.element,k=c.triggerHook*b.info("size"),l=e.get[s](j.firstChild.firstChild),m=k>l?"translate"+t+"(-100%)":"",e.css(j,{top:q.top+(h?k:r-c.members[0].options.indent),left:q.left+(h?r-c.members[0].options.indent:k)}),e.css(j.firstChild.firstChild,{"-ms-transform":m,"-webkit-transform":m,transform:m})},this._indicators.updateTriggerGroupLabel=function(a){var b="trigger"+(a.members.length>1?"":" "+a.members[0].options.name),c=a.element.firstChild.firstChild,d=c.textContent!==b;d&&(c.textContent=b,h&&i.updateBoundsPositions())},this.addScene=function(c){this._options.addIndicators&&c instanceof a.Scene&&c.controller()===b&&c.addIndicators(),this.$super.addScene.apply(this,arguments)},this.destroy=function(){f.removeEventListener("resize",k),g||(window.removeEventListener("resize",k),window.removeEventListener("scroll",k)),f.removeEventListener("resize",j),f.removeEventListener("scroll",j),this.$super.destroy.apply(this,arguments)},b});var g=function(a,b){var c,d,g=this,i=h.bounds(),j=h.start(b.colorStart),k=h.end(b.colorEnd),l=b.parent&&e.get.elements(b.parent)[0];b.name=b.name||f,j.firstChild.textContent+=" "+b.name,k.textContent+=" "+b.name,i.appendChild(j),i.appendChild(k),g.options=b,g.bounds=i,g.triggerGroup=void 0,this.add=function(){d=a.controller(),c=d.info("vertical");var b=d.info("isDocument");l||(l=b?document.body:d.info("container")),b||"static"!==e.css(l,"position")||e.css(l,{position:"relative"}),a.on("change.plugin_addIndicators",n),a.on("shift.plugin_addIndicators",m),t(),q(),setTimeout(function(){d._indicators.updateBoundsPositions(g)},0)},this.remove=function(){if(g.triggerGroup){if(a.off("change.plugin_addIndicators",n),a.off("shift.plugin_addIndicators",m),g.triggerGroup.members.length>1){var b=g.triggerGroup;b.members.splice(b.members.indexOf(g),1),d._indicators.updateTriggerGroupLabel(b),d._indicators.updateTriggerGroupPositions(b),g.triggerGroup=void 0}else s();p()}};var m=function(){q()},n=function(a){"triggerHook"===a.what&&t()},o=function(){var a=d.info("vertical");e.css(j.firstChild,{"border-bottom-width":a?1:0,"border-right-width":a?0:1,bottom:a?-1:b.indent,right:a?b.indent:-1,padding:a?"0 8px":"2px 4px"}),e.css(k,{"border-top-width":a?1:0,"border-left-width":a?0:1,top:a?"100%":"",right:a?b.indent:"",bottom:a?"":b.indent,left:a?"":"100%",padding:a?"0 8px":"2px 4px"}),l.appendChild(i)},p=function(){i.parentNode.removeChild(i)},q=function(){i.parentNode!==l&&o();var b={};b[c?"top":"left"]=a.triggerPosition(),b[c?"height":"width"]=a.duration(),e.css(i,b),e.css(k,{display:a.duration()>0?"":"none"})},r=function(){var f=h.trigger(b.colorTrigger),i={};i[c?"right":"bottom"]=0,i[c?"border-top-width":"border-left-width"]=1,e.css(f.firstChild,i),e.css(f.firstChild.firstChild,{padding:c?"0 8px 3px 8px":"3px 4px"}),document.body.appendChild(f);var j={triggerHook:a.triggerHook(),element:f,members:[g]};d._indicators.groups.push(j),g.triggerGroup=j,d._indicators.updateTriggerGroupLabel(j),d._indicators.updateTriggerGroupPositions(j)},s=function(){d._indicators.groups.splice(d._indicators.groups.indexOf(g.triggerGroup),1),g.triggerGroup.element.parentNode.removeChild(g.triggerGroup.element),g.triggerGroup=void 0},t=function(){var b=a.triggerHook(),c=1e-4;if(!(g.triggerGroup&&Math.abs(g.triggerGroup.triggerHook-b)<c)){for(var e,f=d._indicators.groups,h=f.length;h--;)if(e=f[h],Math.abs(e.triggerHook-b)<c)return g.triggerGroup&&(1===g.triggerGroup.members.length?s():(g.triggerGroup.members.splice(g.triggerGroup.members.indexOf(g),1),d._indicators.updateTriggerGroupLabel(g.triggerGroup),d._indicators.updateTriggerGroupPositions(g.triggerGroup))),e.members.push(g),g.triggerGroup=e,void d._indicators.updateTriggerGroupLabel(e);if(g.triggerGroup){if(1===g.triggerGroup.members.length)return g.triggerGroup.triggerHook=b,void d._indicators.updateTriggerGroupPositions(g.triggerGroup);g.triggerGroup.members.splice(g.triggerGroup.members.indexOf(g),1),d._indicators.updateTriggerGroupLabel(g.triggerGroup),d._indicators.updateTriggerGroupPositions(g.triggerGroup),g.triggerGroup=void 0}r()}}},h={start:function(a){var b=document.createElement("div");b.textContent="start",e.css(b,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:a,"border-color":a});var c=document.createElement("div");return e.css(c,{position:"absolute",overflow:"visible",width:0,height:0}),c.appendChild(b),c},end:function(a){var b=document.createElement("div");return b.textContent="end",e.css(b,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:a,"border-color":a}),b},bounds:function(){var a=document.createElement("div");return e.css(a,{position:"absolute",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":b}),a.style.zIndex=c,a},trigger:function(a){var d=document.createElement("div");d.textContent="trigger",e.css(d,{position:"relative"});var f=document.createElement("div");e.css(f,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:a,"border-color":a}),f.appendChild(d);var g=document.createElement("div");return e.css(g,{position:"fixed",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":b}),g.style.zIndex=c,g.appendChild(f),g}}}),function(){"use strict";function a(){if(b.length>0){var a=new TimelineMax({onComplete:function(){a.kill()}});a.staggerFromTo(".l-slogan .table-cell > *",.5,{y:"+=30",alpha:0},{y:0,opacity:1},.2),new ScrollMagic.Scene({triggerElement:".l-slogan",offset:-(c/3)}).setTween(a).addTo(d);var e=new TimelineMax({onComplete:function(){e.kill()}});e.staggerFromTo("#animation-one > *",.5,{y:"+=70",alpha:0},{y:0,opacity:1},.2),new ScrollMagic.Scene({triggerElement:"#animation-one",offset:-(c/3)}).setTween(e).addTo(d);var f=new TimelineMax({onComplete:function(){f.kill()}});f.staggerFromTo("#animation-two > *",.5,{y:"+=70",alpha:0},{y:0,opacity:1},.2),new ScrollMagic.Scene({triggerElement:"#animation-two",offset:-(c/3)}).setTween(f).addTo(d);var g=new TimelineMax({onComplete:function(){g.kill()}});g.staggerFromTo(".header-port .container > *",.5,{y:"+=30",alpha:0},{y:0,opacity:1},.2),new ScrollMagic.Scene({triggerElement:".header-port",offset:-(c/3)}).setTween(g).addTo(d);var h=new TimelineMax({onComplete:function(){h.kill()}});h.staggerFromTo("#animation-three > *",.5,{y:"+=70",alpha:0},{y:0,opacity:1},.2),new ScrollMagic.Scene({triggerElement:"#animation-three",offset:-(c/3)}).setTween(h).addTo(d);var i=new TimelineMax({onComplete:function(){i.kill()}});i.staggerFromTo("#animation-four > *",.5,{y:"+=70",alpha:0},{y:0,opacity:1},.2),new ScrollMagic.Scene({triggerElement:"#animation-four",offset:-(c/3)}).setTween(i).addTo(d);var j=new TimelineMax({onComplete:function(){j.kill()}});j.staggerFromTo(".header-product .container > *",.5,{y:"+=30",alpha:0},{y:0,opacity:1},.2),new ScrollMagic.Scene({triggerElement:".header-product",offset:-(c/3)}).setTween(j).addTo(d);var k=new TimelineMax({onComplete:function(){k.kill()}});k.staggerFromTo("#animation-five > *",.5,{y:"+=70",alpha:0},{y:0,opacity:1},.2),new ScrollMagic.Scene({triggerElement:"#animation-five",offset:-(c/3)}).setTween(k).addTo(d);var l=new TimelineMax({onComplete:function(){l.kill()}});l.staggerFromTo("#animation-six > *",.5,{y:"+=30",alpha:0},{y:0,opacity:1},.2),new ScrollMagic.Scene({triggerElement:"#animation-six",offset:-(c/3)}).setTween(l).addTo(d);var m=new TimelineMax({onComplete:function(){m.kill()}});m.staggerFromTo(".list-logo ul > *",.5,{y:"+=30",alpha:0},{y:0,opacity:1},.2),new ScrollMagic.Scene({triggerElement:".list-logo",offset:-(c/3)}).setTween(m).addTo(d);var n=new TimelineMax({onComplete:function(){n.kill()}});n.staggerFromTo(".text-about > *",.5,{y:"+=40",alpha:0},{y:0,opacity:1},.2),new ScrollMagic.Scene({triggerElement:".text-about",offset:-(c/3)}).setTween(n).addTo(d)}}var b=$(".home-page"),c=$(window).innerHeight(),d=new ScrollMagic.Controller;$(document).ready(function(){a()})}(),function(){console.log("templates/home/script.js execute")}(),function(){console.log("modules/global/footer/script.js execute")}(),function(){console.log("modules/global/header/script.js execute")}(),function(){console.log("modules/global/banner/script.js execute")}(),function(){console.log("modules/global/check-box/script.js execute")}(),function(){console.log("modules/global/logo/script.js execute")}(),function(){$(".menu-control").click(function(a){$(this).hasClass("active")?($(this).removeClass("active"),$(".menu-home").removeClass("active")):($(this).addClass("active"),$(".menu-home").addClass("active"))})}(),function(){console.log("modules/global/page-list/script.js execute")}(),function(){console.log("modules/global/social/script.js execute")}();