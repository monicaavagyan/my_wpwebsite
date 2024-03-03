!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=jQuery,n=e.n(t),a=wp.i18n;function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(r=a.key,i=void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==o(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===o(i)?i:String(i)),a)}var r,i}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.deactivatePlugins(),this.updateModules(),this.initializeClipBoard(),this.modeSelector(),this.dashboardWidget()}var t,i,u;return t=e,(i=[{key:"deactivatePlugins",value:function(){n()(".dashboard-deactivate-plugin").on("click",(function(e){e.preventDefault();var t=n()(this);return n().ajax({url:window.ajaxurl,type:"POST",data:{action:"rank_math_deactivate_plugins",security:rankMath.security,plugin:"all"}}).always((function(e){"1"===e&&t.parents(".rank-math-notice").remove()})),!1}))}},{key:"updateModules",value:function(){n()(".rank-math-box.is-pro").on("click",(function(e){return e.preventDefault(),window.open("//rankmath.com/pricing/?utm_source=Plugin&utm_medium=Unlock%20PRO%20Module%20Box&utm_campaign=WP"),!1})),n()(".rank-math-modules").on("change",(function(){var e=n()(this),t=e.closest(".rank-math-box"),a=e.is(":checked"),r=e.val();t.addClass("saving"),n().ajax({url:rankMath.api.root+"rankmath/v1/saveModule",method:"POST",beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",rankMath.api.nonce)},data:{module:r,state:a?"on":"off"}}).done((function(e){e?(t.removeClass("saving"),t.toggleClass("active",a),n().ajax({url:window.location.pathname+window.location.search,method:"GET"}).done((function(e){if(e){var t=n()(e).find("#toplevel_page_rank-math"),a=n()("#toplevel_page_rank-math > .wp-submenu");t.length&&t.find("> .wp-submenu > li").length!==a.children("li").length&&a.fadeOut(200,(function(){a.html(t.find("> .wp-submenu").hide().children()).fadeIn(400)}))}})),n()(".rank-math-modules").each((function(){var e=n()(this),t=e.data("depmodules");if("object"===o(t)&&t.length){var a=t.filter((function(e){return!n()("#module-"+e).is(":checked")})).length>0;e.prop("disabled",a),a?e.closest(".rank-math-box").removeClass("active"):e.is(":checked")&&e.closest(".rank-math-box").addClass("active")}}))):window.alert("Something went wrong! Please try again.")}))}))}},{key:"initializeClipBoard",value:function(){"undefined"!=typeof ClipboardJS&&(n()(".get-debug-report").on("click",(function(){return n()("#debug-report").slideDown(),n()("#debug-report textarea").trigger("focus").trigger("select"),n()(this).parent().fadeOut(),!1})),new ClipboardJS("#copy-for-support"))}},{key:"modeSelector",value:function(){n()(".rank-math-mode-selector a").on("click",(function(e){e.preventDefault();var t=n()(this).data("mode");return n().ajax({url:rankMath.api.root+"rankmath/v1/updateMode",method:"POST",beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",rankMath.api.nonce)},data:{mode:t}}).done((function(e){e?window.location.reload():window.alert("Something went wrong! Please try again.")})),!1}))}},{key:"dashboardWidget",value:function(){var e=n()("#rank-math-dashboard-widget");e.length&&n().ajax({url:rankMath.api.root+"rankmath/v1/dashboardWidget",method:"GET",beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",rankMath.api.nonce)}}).done((function(t){t?e.removeClass("rank-math-loading").html(t):e.removeClass("rank-math-loading").html((0,a.__)("Something went wrong! Please try again.","rank-math"))}))}}])&&r(t.prototype,i),u&&r(t,u),Object.defineProperty(t,"prototype",{writable:!1}),e}();n()((function(){new i}))}();