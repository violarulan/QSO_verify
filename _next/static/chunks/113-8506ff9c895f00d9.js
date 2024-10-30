(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[113],{239:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(7437),o=r(2265);t.default=function(e){let{html:t,height:r=null,width:i=null,children:a,dataNtpc:s=""}=e;return(0,o.useEffect)(()=>{s&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(s)}})},[s]),(0,n.jsxs)(n.Fragment,{children:[a,t?(0,n.jsx)("div",{style:{height:null!=r?"".concat(r,"px"):"auto",width:null!=i?"".concat(i,"px"):"auto"},"data-ntpc":s,dangerouslySetInnerHTML:{__html:t}}):null]})}},4404:function(e,t,r){"use strict";var n;let o;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let i=r(7437),a=r(2265),s=(n=r(1877))&&n.__esModule?n:{default:n};t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:r="dataLayer"}=e;return void 0===o&&(o=r),(0,a.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(r,"'] = window['").concat(r,"'] || [];\n          function gtag(){window['").concat(r,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"');")}}),(0,i.jsx)(s.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];if(void 0===o){console.warn("@next/third-parties: GA has not been initialized");return}window[o]?window[o].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(o," does not exist"))}},9077:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let o=r(7437),i=r(1772),a=n(r(239));t.default=function(e){let{apiKey:t,...r}=e,n={...r,key:t},{html:s}=(0,i.GoogleMapsEmbed)(n);return(0,o.jsx)(a.default,{height:n.height||null,width:n.width||null,html:s,dataNtpc:"GoogleMapsEmbed"})}},7640:function(e,t,r){"use strict";var n;let o;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let i=r(7437),a=r(2265),s=(n=r(1877))&&n.__esModule?n:{default:n};t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:r="dataLayer",auth:n,preview:l,dataLayer:c}=e;void 0===o&&(o=r);let u="dataLayer"!==r?"&l=".concat(r):"";return(0,a.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(c?"w[l].push(".concat(JSON.stringify(c),")"):"","\n      })(window,'").concat(r,"');")}}),(0,i.jsx)(s.default,{id:"_next-gtm","data-ntpc":"GTM",src:"https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(u).concat(n?"&gtm_auth=".concat(n):"").concat(l?"&gtm_preview=".concat(l,"&gtm_cookies_win=x"):"")})]})},t.sendGTMEvent=e=>{if(void 0===o){console.warn("@next/third-parties: GTM has not been initialized");return}window[o]?window[o].push(e):console.warn("@next/third-parties: GTM dataLayer ".concat(o," does not exist"))}},9881:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=t.sendGTMEvent=t.GoogleTagManager=t.YouTubeEmbed=t.GoogleMapsEmbed=void 0;var o=r(9077);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return n(o).default}});var i=r(5031);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return n(i).default}});var a=r(7640);Object.defineProperty(t,"GoogleTagManager",{enumerable:!0,get:function(){return a.GoogleTagManager}}),Object.defineProperty(t,"sendGTMEvent",{enumerable:!0,get:function(){return a.sendGTMEvent}});var s=r(4404);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return s.GoogleAnalytics}}),Object.defineProperty(t,"sendGAEvent",{enumerable:!0,get:function(){return s.sendGAEvent}})},5031:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let o=r(7437),i=n(r(1877)),a=r(1772),s=n(r(239)),l={server:"beforeInteractive",client:"afterInteractive",idle:"lazyOnload",worker:"worker"};t.default=function(e){let{html:t,scripts:r,stylesheets:n}=(0,a.YouTubeEmbed)(e);return(0,o.jsx)(s.default,{height:e.height||null,width:e.width||null,html:t,dataNtpc:"YouTubeEmbed",children:null==r?void 0:r.map(e=>(0,o.jsx)(i.default,{src:e.url,strategy:l[e.strategy],stylesheets:n},e.url))})}},2572:function(e,t,r){e.exports=r(5921)},5921:function(e,t,r){var n=r(6300).Buffer;let o="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",i=(e,t)=>[Math.floor(e/t),e%t];e.exports={encode:e=>{"string"==typeof e&&(e=n.from(e));let t="";for(let r=0;r<e.length;r+=2)if(e.length-r>1){let[n,a]=i((e[r]<<8)+e[r+1],2025),[s,l]=i(a,45);t+=o[l]+o[s]+o[n]}else{let[n,a]=i(e[r],45);t+=o[a]+o[n]}return t},decode:e=>{let t=Array.from(e).map(e=>o.indexOf(e)),r=[];for(let e=0;e<t.length;e+=3)if(t.length-e>=3){let n=t[e]+45*t[e+1]+2025*t[e+2];if(n>65535)throw Error("Invalid base45 string");r.push(...i(n,256))}else{let n=t[e]+45*t[e+1];if(n>255)throw Error("Invalid base45 string");r.push(n)}return n.from(r)}}},5903:function(e,t,r){"use strict";r.d(t,{wF:function(){return eE}}),(u=d||(d={}))[u.QR_CODE=0]="QR_CODE",u[u.AZTEC=1]="AZTEC",u[u.CODABAR=2]="CODABAR",u[u.CODE_39=3]="CODE_39",u[u.CODE_93=4]="CODE_93",u[u.CODE_128=5]="CODE_128",u[u.DATA_MATRIX=6]="DATA_MATRIX",u[u.MAXICODE=7]="MAXICODE",u[u.ITF=8]="ITF",u[u.EAN_13=9]="EAN_13",u[u.EAN_8=10]="EAN_8",u[u.PDF_417=11]="PDF_417",u[u.RSS_14=12]="RSS_14",u[u.RSS_EXPANDED=13]="RSS_EXPANDED",u[u.UPC_A=14]="UPC_A",u[u.UPC_E=15]="UPC_E",u[u.UPC_EAN_EXTENSION=16]="UPC_EAN_EXTENSION";var n,o,i,a,s,l,c,u,d,f,p,h,g,m,b=new Map([[d.QR_CODE,"QR_CODE"],[d.AZTEC,"AZTEC"],[d.CODABAR,"CODABAR"],[d.CODE_39,"CODE_39"],[d.CODE_93,"CODE_93"],[d.CODE_128,"CODE_128"],[d.DATA_MATRIX,"DATA_MATRIX"],[d.MAXICODE,"MAXICODE"],[d.ITF,"ITF"],[d.EAN_13,"EAN_13"],[d.EAN_8,"EAN_8"],[d.PDF_417,"PDF_417"],[d.RSS_14,"RSS_14"],[d.RSS_EXPANDED,"RSS_EXPANDED"],[d.UPC_A,"UPC_A"],[d.UPC_E,"UPC_E"],[d.UPC_EAN_EXTENSION,"UPC_EAN_EXTENSION"]]);(n=f||(f={}))[n.UNKNOWN=0]="UNKNOWN",n[n.URL=1]="URL",(o=p||(p={}))[o.SCAN_TYPE_CAMERA=0]="SCAN_TYPE_CAMERA",o[o.SCAN_TYPE_FILE=1]="SCAN_TYPE_FILE";var y=function(){function e(){}return e.GITHUB_PROJECT_URL="https://github.com/mebjas/html5-qrcode",e.SCAN_DEFAULT_FPS=2,e.DEFAULT_DISABLE_FLIP=!1,e.DEFAULT_REMEMBER_LAST_CAMERA_USED=!0,e.DEFAULT_SUPPORTED_SCAN_TYPE=[p.SCAN_TYPE_CAMERA,p.SCAN_TYPE_FILE],e}(),v=function(){function e(e,t){this.format=e,this.formatName=t}return e.prototype.toString=function(){return this.formatName},e.create=function(t){if(!b.has(t))throw"".concat(t," not in html5QrcodeSupportedFormatsTextMap");return new e(t,b.get(t))},e}(),A=function(){function e(){}return e.createFromText=function(e){return{decodedText:e,result:{text:e}}},e.createFromQrcodeResult=function(e){return{decodedText:e.text,result:e}},e}();(i=h||(h={}))[i.UNKWOWN_ERROR=0]="UNKWOWN_ERROR",i[i.IMPLEMENTATION_ERROR=1]="IMPLEMENTATION_ERROR",i[i.NO_CODE_FOUND_ERROR=2]="NO_CODE_FOUND_ERROR";var w=function(){function e(){}return e.createFrom=function(e){return{errorMessage:e,type:h.UNKWOWN_ERROR}},e}(),x=function(){function e(e){this.verbose=e}return e.prototype.log=function(e){this.verbose&&console.log(e)},e.prototype.warn=function(e){this.verbose&&console.warn(e)},e.prototype.logError=function(e,t){(this.verbose||!0===t)&&console.error(e)},e.prototype.logErrors=function(e){if(0===e.length)throw"Logger#logError called without arguments";this.verbose&&console.error(e)},e}();function E(e){return null==e}var S=function(){function e(){}return e.codeParseError=function(e){return"QR code parse error, error = ".concat(e)},e.errorGettingUserMedia=function(e){return"Error getting userMedia, error = ".concat(e)},e.onlyDeviceSupportedError=function(){return"The device doesn't support navigator.mediaDevices , only supported cameraIdOrConfig in this case is deviceId parameter (string)."},e.cameraStreamingNotSupported=function(){return"Camera streaming not supported by the browser."},e.unableToQuerySupportedDevices=function(){return"Unable to query supported devices, unknown error."},e.insecureContextCameraQueryError=function(){return"Camera access is only supported in secure context like https or localhost."},e.scannerPaused=function(){return"Scanner paused"},e}(),T=function(){function e(){}return e.scanningStatus=function(){return"Scanning"},e.idleStatus=function(){return"Idle"},e.errorStatus=function(){return"Error"},e.permissionStatus=function(){return"Permission"},e.noCameraFoundErrorStatus=function(){return"No Cameras"},e.lastMatch=function(e){return"Last Match: ".concat(e)},e.codeScannerTitle=function(){return"Code Scanner"},e.cameraPermissionTitle=function(){return"Request Camera Permissions"},e.cameraPermissionRequesting=function(){return"Requesting camera permissions..."},e.noCameraFound=function(){return"No camera found"},e.scanButtonStopScanningText=function(){return"Stop Scanning"},e.scanButtonStartScanningText=function(){return"Start Scanning"},e.torchOnButton=function(){return"Switch On Torch"},e.torchOffButton=function(){return"Switch Off Torch"},e.torchOnFailedMessage=function(){return"Failed to turn on torch"},e.torchOffFailedMessage=function(){return"Failed to turn off torch"},e.scanButtonScanningStarting=function(){return"Launching Camera..."},e.textIfCameraScanSelected=function(){return"Scan an Image File"},e.textIfFileScanSelected=function(){return"Scan using camera directly"},e.selectCamera=function(){return"Select Camera"},e.fileSelectionChooseImage=function(){return"Choose Image"},e.fileSelectionChooseAnother=function(){return"Choose Another"},e.fileSelectionNoImageSelected=function(){return"No image choosen"},e.anonymousCameraPrefix=function(){return"Anonymous Camera"},e.dragAndDropMessage=function(){return"Or drop an image to scan"},e.dragAndDropMessageOnlyImages=function(){return"Or drop an image to scan (other files not supported)"},e.zoom=function(){return"zoom"},e.loadingImage=function(){return"Loading image..."},e.cameraScanAltText=function(){return"Camera based scan"},e.fileScanAltText=function(){return"Fule based scan"},e}(),C=function(){function e(){}return e.poweredBy=function(){return"Powered by "},e.reportIssues=function(){return"Report issues"},e}(),I=function(){function e(){}return e.isMediaStreamConstraintsValid=function(e,t){if("object"!=typeof e){var r=typeof e;return t.logError("videoConstraints should be of type object, the "+"object passed is of type ".concat(r,"."),!0),!1}for(var n=new Set(["autoGainControl","channelCount","echoCancellation","latency","noiseSuppression","sampleRate","sampleSize","volume"]),o=Object.keys(e),i=0;i<o.length;i++){var a=o[i];if(n.has(a))return t.logError("".concat(a," is not supported videoConstaints."),!0),!1}return!0},e}(),M=r(815),D=function(){function e(e,t,r){if(this.formatMap=new Map([[d.QR_CODE,M.BarcodeFormat.QR_CODE],[d.AZTEC,M.BarcodeFormat.AZTEC],[d.CODABAR,M.BarcodeFormat.CODABAR],[d.CODE_39,M.BarcodeFormat.CODE_39],[d.CODE_93,M.BarcodeFormat.CODE_93],[d.CODE_128,M.BarcodeFormat.CODE_128],[d.DATA_MATRIX,M.BarcodeFormat.DATA_MATRIX],[d.MAXICODE,M.BarcodeFormat.MAXICODE],[d.ITF,M.BarcodeFormat.ITF],[d.EAN_13,M.BarcodeFormat.EAN_13],[d.EAN_8,M.BarcodeFormat.EAN_8],[d.PDF_417,M.BarcodeFormat.PDF_417],[d.RSS_14,M.BarcodeFormat.RSS_14],[d.RSS_EXPANDED,M.BarcodeFormat.RSS_EXPANDED],[d.UPC_A,M.BarcodeFormat.UPC_A],[d.UPC_E,M.BarcodeFormat.UPC_E],[d.UPC_EAN_EXTENSION,M.BarcodeFormat.UPC_EAN_EXTENSION]]),this.reverseFormatMap=this.createReverseFormatMap(),!M)throw"Use html5qrcode.min.js without edit, ZXing not found.";this.verbose=t,this.logger=r;var n=this.createZXingFormats(e),o=new Map;o.set(M.DecodeHintType.POSSIBLE_FORMATS,n),o.set(M.DecodeHintType.TRY_HARDER,!1),this.hints=o}return e.prototype.decodeAsync=function(e){var t=this;return new Promise(function(r,n){try{r(t.decode(e))}catch(e){n(e)}})},e.prototype.decode=function(e){var t=new M.MultiFormatReader(this.verbose,this.hints),r=new M.HTMLCanvasElementLuminanceSource(e),n=new M.BinaryBitmap(new M.HybridBinarizer(r)),o=t.decode(n);return{text:o.text,format:v.create(this.toHtml5QrcodeSupportedFormats(o.format)),debugData:this.createDebugData()}},e.prototype.createReverseFormatMap=function(){var e=new Map;return this.formatMap.forEach(function(t,r,n){e.set(t,r)}),e},e.prototype.toHtml5QrcodeSupportedFormats=function(e){if(!this.reverseFormatMap.has(e))throw"reverseFormatMap doesn't have ".concat(e);return this.reverseFormatMap.get(e)},e.prototype.createZXingFormats=function(e){for(var t=[],r=0;r<e.length;r++){var n=e[r];this.formatMap.has(n)?t.push(this.formatMap.get(n)):this.logger.logError("".concat(n," is not supported by")+"ZXingHtml5QrcodeShim")}return t},e.prototype.createDebugData=function(){return{decoderName:"zxing-js"}},e}(),k=function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(r)throw TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}},N=function(){function e(t,r,n){if(this.formatMap=new Map([[d.QR_CODE,"qr_code"],[d.AZTEC,"aztec"],[d.CODABAR,"codabar"],[d.CODE_39,"code_39"],[d.CODE_93,"code_93"],[d.CODE_128,"code_128"],[d.DATA_MATRIX,"data_matrix"],[d.ITF,"itf"],[d.EAN_13,"ean_13"],[d.EAN_8,"ean_8"],[d.PDF_417,"pdf417"],[d.UPC_A,"upc_a"],[d.UPC_E,"upc_e"]]),this.reverseFormatMap=this.createReverseFormatMap(),!e.isSupported())throw"Use html5qrcode.min.js without edit, Use BarcodeDetectorDelegate only if it isSupported();";this.verbose=r,this.logger=n;var o=this.createBarcodeDetectorFormats(t);if(this.detector=new BarcodeDetector(o),!this.detector)throw"BarcodeDetector detector not supported"}return e.isSupported=function(){return"BarcodeDetector"in window&&(new BarcodeDetector({formats:["qr_code"]}),!0)},e.prototype.decodeAsync=function(e){var t,r,n,o;return t=this,r=void 0,n=void 0,o=function(){var t,r;return k(this,function(n){switch(n.label){case 0:return[4,this.detector.detect(e)];case 1:if(!(t=n.sent())||0===t.length)throw"No barcode or QR code detected.";return[2,{text:(r=this.selectLargestBarcode(t)).rawValue,format:v.create(this.toHtml5QrcodeSupportedFormats(r.format)),debugData:this.createDebugData()}]}})},new(n||(n=Promise))(function(e,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var r;t.done?e(t.value):((r=t.value)instanceof n?r:new n(function(e){e(r)})).then(a,s)}l((o=o.apply(t,r||[])).next())})},e.prototype.selectLargestBarcode=function(e){for(var t=null,r=0,n=0;n<e.length;n++){var o=e[n],i=o.boundingBox.width*o.boundingBox.height;i>r&&(r=i,t=o)}if(!t)throw"No largest barcode found";return t},e.prototype.createBarcodeDetectorFormats=function(e){for(var t=[],r=0;r<e.length;r++){var n=e[r];this.formatMap.has(n)?t.push(this.formatMap.get(n)):this.logger.warn("".concat(n," is not supported by")+"BarcodeDetectorDelegate")}return{formats:t}},e.prototype.toHtml5QrcodeSupportedFormats=function(e){if(!this.reverseFormatMap.has(e))throw"reverseFormatMap doesn't have ".concat(e);return this.reverseFormatMap.get(e)},e.prototype.createReverseFormatMap=function(){var e=new Map;return this.formatMap.forEach(function(t,r,n){e.set(t,r)}),e},e.prototype.createDebugData=function(){return{decoderName:"BarcodeDetector"}},e}(),O=function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}l((n=n.apply(e,t||[])).next())})},L=function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(r)throw TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}},B=function(){function e(e,t,r,n){this.EXECUTIONS_TO_REPORT_PERFORMANCE=100,this.executions=0,this.executionResults=[],this.wasPrimaryDecoderUsedInLastDecode=!1,this.verbose=r,t&&N.isSupported()?(this.primaryDecoder=new N(e,r,n),this.secondaryDecoder=new D(e,r,n)):this.primaryDecoder=new D(e,r,n)}return e.prototype.decodeAsync=function(e){return O(this,void 0,void 0,function(){var t;return L(this,function(r){switch(r.label){case 0:t=performance.now(),r.label=1;case 1:return r.trys.push([1,,3,4]),[4,this.getDecoder().decodeAsync(e)];case 2:return[2,r.sent()];case 3:return this.possiblyLogPerformance(t),[7];case 4:return[2]}})})},e.prototype.decodeRobustlyAsync=function(e){return O(this,void 0,void 0,function(){var t,r;return L(this,function(n){switch(n.label){case 0:t=performance.now(),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,this.primaryDecoder.decodeAsync(e)];case 2:return[2,n.sent()];case 3:if(r=n.sent(),this.secondaryDecoder)return[2,this.secondaryDecoder.decodeAsync(e)];throw r;case 4:return this.possiblyLogPerformance(t),[7];case 5:return[2]}})})},e.prototype.getDecoder=function(){return this.secondaryDecoder?!1===this.wasPrimaryDecoderUsedInLastDecode?(this.wasPrimaryDecoderUsedInLastDecode=!0,this.primaryDecoder):(this.wasPrimaryDecoderUsedInLastDecode=!1,this.secondaryDecoder):this.primaryDecoder},e.prototype.possiblyLogPerformance=function(e){if(this.verbose){var t=performance.now()-e;this.executionResults.push(t),this.executions++,this.possiblyFlushPerformanceReport()}},e.prototype.possiblyFlushPerformanceReport=function(){if(!(this.executions<this.EXECUTIONS_TO_REPORT_PERFORMANCE)){for(var e=0,t=0,r=this.executionResults;t<r.length;t++)e+=r[t];var n=e/this.executionResults.length;console.log("".concat(n," ms for ").concat(this.executionResults.length," last runs.")),this.executions=0,this.executionResults=[]}},e}(),R=(a=function(e,t){return(a=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),P=function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}l((n=n.apply(e,t||[])).next())})},j=function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(r)throw TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}},U=function(){function e(e,t){this.name=e,this.track=t}return e.prototype.isSupported=function(){return!!this.track.getCapabilities&&this.name in this.track.getCapabilities()},e.prototype.apply=function(e){var t={};return t[this.name]=e,this.track.applyConstraints({advanced:[t]})},e.prototype.value=function(){var e=this.track.getSettings();return this.name in e?e[this.name]:null},e}(),z=function(e){function t(t){return e.call(this,"zoom",t)||this}return R(t,e),t}(function(e){function t(t,r){return e.call(this,t,r)||this}return R(t,e),t.prototype.min=function(){return this.getCapabilities().min},t.prototype.max=function(){return this.getCapabilities().max},t.prototype.step=function(){return this.getCapabilities().step},t.prototype.apply=function(e){var t={};return t[this.name]=e,this.track.applyConstraints({advanced:[t]})},t.prototype.getCapabilities=function(){this.failIfNotSupported();var e=this.track.getCapabilities()[this.name];return{min:e.min,max:e.max,step:e.step}},t.prototype.failIfNotSupported=function(){if(!this.isSupported())throw Error("".concat(this.name," capability not supported"))},t}(U)),F=function(e){function t(t){return e.call(this,"torch",t)||this}return R(t,e),t}(U),_=function(){function e(e){this.track=e}return e.prototype.zoomFeature=function(){return new z(this.track)},e.prototype.torchFeature=function(){return new F(this.track)},e}(),$=function(){function e(e,t,r){this.isClosed=!1,this.parentElement=e,this.mediaStream=t,this.callbacks=r,this.surface=this.createVideoElement(this.parentElement.clientWidth),e.append(this.surface)}return e.prototype.createVideoElement=function(e){var t=document.createElement("video");return t.style.width="".concat(e,"px"),t.style.display="block",t.muted=!0,t.setAttribute("muted","true"),t.playsInline=!0,t},e.prototype.setupSurface=function(){var e=this;this.surface.onabort=function(){throw"RenderedCameraImpl video surface onabort() called"},this.surface.onerror=function(){throw"RenderedCameraImpl video surface onerror() called"};var t=function(){var r=e.surface.clientWidth,n=e.surface.clientHeight;e.callbacks.onRenderSurfaceReady(r,n),e.surface.removeEventListener("playing",t)};this.surface.addEventListener("playing",t),this.surface.srcObject=this.mediaStream,this.surface.play()},e.create=function(t,r,n,o){return P(this,void 0,void 0,function(){var i,a;return j(this,function(s){switch(s.label){case 0:if(i=new e(t,r,o),!n.aspectRatio)return[3,2];return a={aspectRatio:n.aspectRatio},[4,i.getFirstTrackOrFail().applyConstraints(a)];case 1:s.sent(),s.label=2;case 2:return i.setupSurface(),[2,i]}})})},e.prototype.failIfClosed=function(){if(this.isClosed)throw"The RenderedCamera has already been closed."},e.prototype.getFirstTrackOrFail=function(){if(this.failIfClosed(),0===this.mediaStream.getVideoTracks().length)throw"No video tracks found";return this.mediaStream.getVideoTracks()[0]},e.prototype.pause=function(){this.failIfClosed(),this.surface.pause()},e.prototype.resume=function(e){this.failIfClosed();var t=this,r=function(){setTimeout(e,200),t.surface.removeEventListener("playing",r)};this.surface.addEventListener("playing",r),this.surface.play()},e.prototype.isPaused=function(){return this.failIfClosed(),this.surface.paused},e.prototype.getSurface=function(){return this.failIfClosed(),this.surface},e.prototype.getRunningTrackCapabilities=function(){return this.getFirstTrackOrFail().getCapabilities()},e.prototype.getRunningTrackSettings=function(){return this.getFirstTrackOrFail().getSettings()},e.prototype.applyVideoConstraints=function(e){return P(this,void 0,void 0,function(){return j(this,function(t){if("aspectRatio"in e)throw"Changing 'aspectRatio' in run-time is not yet supported.";return[2,this.getFirstTrackOrFail().applyConstraints(e)]})})},e.prototype.close=function(){if(this.isClosed)return Promise.resolve();var e=this;return new Promise(function(t,r){var n=e.mediaStream.getVideoTracks().length,o=0;e.mediaStream.getVideoTracks().forEach(function(r){e.mediaStream.removeTrack(r),r.stop(),++o>=n&&(e.isClosed=!0,e.parentElement.removeChild(e.surface),t())})})},e.prototype.getCapabilities=function(){return new _(this.getFirstTrackOrFail())},e}(),H=function(){function e(e){this.mediaStream=e}return e.prototype.render=function(e,t,r){return P(this,void 0,void 0,function(){return j(this,function(n){return[2,$.create(e,this.mediaStream,t,r)]})})},e.create=function(t){return P(this,void 0,void 0,function(){var r;return j(this,function(n){switch(n.label){case 0:if(!navigator.mediaDevices)throw"navigator.mediaDevices not supported";return r={audio:!1,video:t},[4,navigator.mediaDevices.getUserMedia(r)];case 1:return[2,new e(n.sent())]}})})},e}(),Q=function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}l((n=n.apply(e,t||[])).next())})},Y=function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(r)throw TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}},Z=function(){function e(){}return e.failIfNotSupported=function(){return Q(this,void 0,void 0,function(){return Y(this,function(t){if(!navigator.mediaDevices)throw"navigator.mediaDevices not supported";return[2,new e]})})},e.prototype.create=function(e){return Q(this,void 0,void 0,function(){return Y(this,function(t){return[2,H.create(e)]})})},e}(),G=function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(r)throw TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}},V=function(){function e(){}return e.retrieve=function(){if(navigator.mediaDevices)return e.getCamerasFromMediaDevices();var t=MediaStreamTrack;return MediaStreamTrack&&t.getSources?e.getCamerasFromMediaStreamTrack():e.rejectWithError()},e.rejectWithError=function(){var t=S.unableToQuerySupportedDevices();return e.isHttpsOrLocalhost()||(t=S.insecureContextCameraQueryError()),Promise.reject(t)},e.isHttpsOrLocalhost=function(){if("https:"===location.protocol)return!0;var e=location.host.split(":")[0];return"127.0.0.1"===e||"localhost"===e},e.getCamerasFromMediaDevices=function(){var e,t,r,n;return e=this,t=void 0,r=void 0,n=function(){var e,t,r,n,o,i,a;return G(this,function(s){switch(s.label){case 0:return e=function(e){for(var t=e.getVideoTracks(),r=0;r<t.length;r++){var n=t[r];n.enabled=!1,n.stop(),e.removeTrack(n)}},[4,navigator.mediaDevices.getUserMedia({audio:!1,video:!0})];case 1:return t=s.sent(),[4,navigator.mediaDevices.enumerateDevices()];case 2:for(o=0,r=s.sent(),n=[],i=r;o<i.length;o++)"videoinput"===(a=i[o]).kind&&n.push({id:a.deviceId,label:a.label});return e(t),[2,n]}})},new(r||(r=Promise))(function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}l((n=n.apply(e,t||[])).next())})},e.getCamerasFromMediaStreamTrack=function(){return new Promise(function(e,t){MediaStreamTrack.getSources(function(t){for(var r=[],n=0;n<t.length;n++){var o=t[n];"video"===o.kind&&r.push({id:o.id,label:o.label})}e(r)})})},e}();(s=g||(g={}))[s.UNKNOWN=0]="UNKNOWN",s[s.NOT_STARTED=1]="NOT_STARTED",s[s.SCANNING=2]="SCANNING",s[s.PAUSED=3]="PAUSED";var X=function(){function e(){this.state=g.NOT_STARTED,this.onGoingTransactionNewState=g.UNKNOWN}return e.prototype.directTransition=function(e){this.failIfTransitionOngoing(),this.validateTransition(e),this.state=e},e.prototype.startTransition=function(e){return this.failIfTransitionOngoing(),this.validateTransition(e),this.onGoingTransactionNewState=e,this},e.prototype.execute=function(){if(this.onGoingTransactionNewState===g.UNKNOWN)throw"Transaction is already cancelled, cannot execute().";var e=this.onGoingTransactionNewState;this.onGoingTransactionNewState=g.UNKNOWN,this.directTransition(e)},e.prototype.cancel=function(){if(this.onGoingTransactionNewState===g.UNKNOWN)throw"Transaction is already cancelled, cannot cancel().";this.onGoingTransactionNewState=g.UNKNOWN},e.prototype.getState=function(){return this.state},e.prototype.failIfTransitionOngoing=function(){if(this.onGoingTransactionNewState!==g.UNKNOWN)throw"Cannot transition to a new state, already under transition"},e.prototype.validateTransition=function(e){switch(this.state){case g.UNKNOWN:throw"Transition from unknown is not allowed";case g.NOT_STARTED:this.failIfNewStateIs(e,[g.PAUSED]);case g.SCANNING:case g.PAUSED:}},e.prototype.failIfNewStateIs=function(e,t){for(var r=0;r<t.length;r++)if(e===t[r])throw"Cannot transition from ".concat(this.state," to ").concat(e)},e}(),W=function(){function e(e){this.stateManager=e}return e.prototype.startTransition=function(e){return this.stateManager.startTransition(e)},e.prototype.directTransition=function(e){this.stateManager.directTransition(e)},e.prototype.getState=function(){return this.stateManager.getState()},e.prototype.canScanFile=function(){return this.stateManager.getState()===g.NOT_STARTED},e.prototype.isScanning=function(){return this.stateManager.getState()!==g.NOT_STARTED},e.prototype.isStrictlyScanning=function(){return this.stateManager.getState()===g.SCANNING},e.prototype.isPaused=function(){return this.stateManager.getState()===g.PAUSED},e}(),q=function(){function e(){}return e.create=function(){return new W(new X)},e}(),K=(l=function(e,t){return(l=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),J=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return K(t,e),t.DEFAULT_WIDTH=300,t.DEFAULT_WIDTH_OFFSET=2,t.FILE_SCAN_MIN_HEIGHT=300,t.FILE_SCAN_HIDDEN_CANVAS_PADDING=100,t.MIN_QR_BOX_SIZE=50,t.SHADED_LEFT=1,t.SHADED_RIGHT=2,t.SHADED_TOP=3,t.SHADED_BOTTOM=4,t.SHADED_REGION_ELEMENT_ID="qr-shaded-region",t.VERBOSE=!1,t.BORDER_SHADER_DEFAULT_COLOR="#ffffff",t.BORDER_SHADER_MATCH_COLOR="rgb(90, 193, 56)",t}(y),ee=function(){function e(e,t){this.logger=t,this.fps=J.SCAN_DEFAULT_FPS,e?(e.fps&&(this.fps=e.fps),this.disableFlip=!0===e.disableFlip,this.qrbox=e.qrbox,this.aspectRatio=e.aspectRatio,this.videoConstraints=e.videoConstraints):this.disableFlip=J.DEFAULT_DISABLE_FLIP}return e.prototype.isMediaStreamConstraintsValid=function(){return this.videoConstraints?I.isMediaStreamConstraintsValid(this.videoConstraints,this.logger):(this.logger.logError("Empty videoConstraints",!0),!1)},e.prototype.isShadedBoxEnabled=function(){return!E(this.qrbox)},e.create=function(t,r){return new e(t,r)},e}(),et=function(){function e(e,t){var r;if(this.element=null,this.canvasElement=null,this.scannerPausedUiElement=null,this.hasBorderShaders=null,this.borderShaders=null,this.qrMatch=null,this.renderedCamera=null,this.qrRegion=null,this.context=null,this.lastScanImageFile=null,this.isScanning=!1,!document.getElementById(e))throw"HTML Element with id=".concat(e," not found");this.elementId=e,this.verbose=!1,"boolean"==typeof t?this.verbose=!0===t:t&&(r=t,this.verbose=!0===r.verbose,r.experimentalFeatures),this.logger=new x(this.verbose),this.qrcode=new B(this.getSupportedFormats(t),this.getUseBarCodeDetectorIfSupported(r),this.verbose,this.logger),this.foreverScanTimeout,this.shouldScan=!0,this.stateManagerProxy=q.create()}return e.prototype.start=function(e,t,r,n){var o,i=this;if(!e)throw"cameraIdOrConfig is required";if(!r||"function"!=typeof r)throw"qrCodeSuccessCallback is required and should be a function.";o=n||(this.verbose?this.logger.log:function(){});var a=ee.create(t,this.logger);this.clearElement();var s=!1;a.videoConstraints&&(a.isMediaStreamConstraintsValid()?s=!0:this.logger.logError("'videoConstraints' is not valid 'MediaStreamConstraints, it will be ignored.'",!0));var l=s,c=document.getElementById(this.elementId);c.clientWidth?c.clientWidth:J.DEFAULT_WIDTH,c.style.position="relative",this.shouldScan=!0,this.element=c;var u=this,d=this.stateManagerProxy.startTransition(g.SCANNING);return new Promise(function(t,n){var s=l?a.videoConstraints:u.createVideoConstraints(e);if(!s){d.cancel(),n("videoConstraints should be defined");return}var c={};(!l||a.aspectRatio)&&(c.aspectRatio=a.aspectRatio);var f={onRenderSurfaceReady:function(e,t){u.setupUi(e,t,a),u.isScanning=!0,u.foreverScan(a,r,o)}};Z.failIfNotSupported().then(function(e){e.create(s).then(function(e){return e.render(i.element,c,f).then(function(e){u.renderedCamera=e,d.execute(),t(null)}).catch(function(e){d.cancel(),n(e)})}).catch(function(e){d.cancel(),n(S.errorGettingUserMedia(e))})}).catch(function(e){d.cancel(),n(S.cameraStreamingNotSupported())})})},e.prototype.pause=function(e){if(!this.stateManagerProxy.isStrictlyScanning())throw"Cannot pause, scanner is not scanning.";this.stateManagerProxy.directTransition(g.PAUSED),this.showPausedState(),(E(e)||!0!==e)&&(e=!1),e&&this.renderedCamera&&this.renderedCamera.pause()},e.prototype.resume=function(){if(!this.stateManagerProxy.isPaused())throw"Cannot result, scanner is not paused.";if(!this.renderedCamera)throw"renderedCamera doesn't exist while trying resume()";var e=this,t=function(){e.stateManagerProxy.directTransition(g.SCANNING),e.hidePausedState()};if(!this.renderedCamera.isPaused()){t();return}this.renderedCamera.resume(function(){t()})},e.prototype.getState=function(){return this.stateManagerProxy.getState()},e.prototype.stop=function(){var e=this;if(!this.stateManagerProxy.isScanning())throw"Cannot stop, scanner is not running or paused.";var t=this.stateManagerProxy.startTransition(g.NOT_STARTED);this.shouldScan=!1,this.foreverScanTimeout&&clearTimeout(this.foreverScanTimeout);var r=function(){if(e.element){var t=document.getElementById(J.SHADED_REGION_ELEMENT_ID);t&&e.element.removeChild(t)}},n=this;return this.renderedCamera.close().then(function(){return n.renderedCamera=null,n.element&&(n.element.removeChild(n.canvasElement),n.canvasElement=null),r(),n.qrRegion&&(n.qrRegion=null),n.context&&(n.context=null),t.execute(),n.hidePausedState(),n.isScanning=!1,Promise.resolve()})},e.prototype.scanFile=function(e,t){return this.scanFileV2(e,t).then(function(e){return e.decodedText})},e.prototype.scanFileV2=function(e,t){var r=this;if(!e||!(e instanceof File))throw"imageFile argument is mandatory and should be instance of File. Use 'event.target.files[0]'.";if(E(t)&&(t=!0),!this.stateManagerProxy.canScanFile())throw"Cannot start file scan - ongoing camera scan";return new Promise(function(n,o){r.possiblyCloseLastScanImageFile(),r.clearElement(),r.lastScanImageFile=URL.createObjectURL(e);var i=new Image;i.onload=function(){var e=i.width,a=i.height,s=document.getElementById(r.elementId),l=s.clientWidth?s.clientWidth:J.DEFAULT_WIDTH,c=Math.max(s.clientHeight?s.clientHeight:a,J.FILE_SCAN_MIN_HEIGHT),u=r.computeCanvasDrawConfig(e,a,l,c);if(t){var d=r.createCanvasElement(l,c,"qr-canvas-visible");d.style.display="inline-block",s.appendChild(d);var f=d.getContext("2d");if(!f)throw"Unable to get 2d context from canvas";f.canvas.width=l,f.canvas.height=c,f.drawImage(i,0,0,e,a,u.x,u.y,u.width,u.height)}var p=J.FILE_SCAN_HIDDEN_CANVAS_PADDING,h=Math.max(i.width,u.width),g=Math.max(i.height,u.height),m=h+2*p,b=g+2*p,y=r.createCanvasElement(m,b);s.appendChild(y);var v=y.getContext("2d");if(!v)throw"Unable to get 2d context from canvas";v.canvas.width=m,v.canvas.height=b,v.drawImage(i,0,0,e,a,p,p,h,g);try{r.qrcode.decodeRobustlyAsync(y).then(function(e){n(A.createFromQrcodeResult(e))}).catch(o)}catch(e){o("QR code parse error, error = ".concat(e))}},i.onerror=o,i.onabort=o,i.onstalled=o,i.onsuspend=o,i.src=URL.createObjectURL(e)})},e.prototype.clear=function(){this.clearElement()},e.getCameras=function(){return V.retrieve()},e.prototype.getRunningTrackCapabilities=function(){return this.getRenderedCameraOrFail().getRunningTrackCapabilities()},e.prototype.getRunningTrackSettings=function(){return this.getRenderedCameraOrFail().getRunningTrackSettings()},e.prototype.getRunningTrackCameraCapabilities=function(){return this.getRenderedCameraOrFail().getCapabilities()},e.prototype.applyVideoConstraints=function(e){if(e){if(!I.isMediaStreamConstraintsValid(e,this.logger))throw"invalid videoConstaints passed, check logs for more details"}else throw"videoConstaints is required argument.";return this.getRenderedCameraOrFail().applyVideoConstraints(e)},e.prototype.getRenderedCameraOrFail=function(){if(null==this.renderedCamera)throw"Scanning is not in running state, call this API only when QR code scanning using camera is in running state.";return this.renderedCamera},e.prototype.getSupportedFormats=function(e){var t=[d.QR_CODE,d.AZTEC,d.CODABAR,d.CODE_39,d.CODE_93,d.CODE_128,d.DATA_MATRIX,d.MAXICODE,d.ITF,d.EAN_13,d.EAN_8,d.PDF_417,d.RSS_14,d.RSS_EXPANDED,d.UPC_A,d.UPC_E,d.UPC_EAN_EXTENSION];if(!e||"boolean"==typeof e||!e.formatsToSupport)return t;if(!Array.isArray(e.formatsToSupport))throw"configOrVerbosityFlag.formatsToSupport should be undefined or an array.";if(0===e.formatsToSupport.length)throw"Atleast 1 formatsToSupport is needed.";for(var r=[],n=0,o=e.formatsToSupport;n<o.length;n++){var i=o[n];Object.values(d).includes(i)?r.push(i):this.logger.warn("Invalid format: ".concat(i," passed in config, ignoring."))}if(0===r.length)throw"None of formatsToSupport match supported values.";return r},e.prototype.getUseBarCodeDetectorIfSupported=function(e){if(E(e))return!0;if(!E(e.useBarCodeDetectorIfSupported))return!1!==e.useBarCodeDetectorIfSupported;if(E(e.experimentalFeatures))return!0;var t=e.experimentalFeatures;return!!E(t.useBarCodeDetectorIfSupported)||!1!==t.useBarCodeDetectorIfSupported},e.prototype.validateQrboxSize=function(e,t,r){var n,o=r.qrbox;this.validateQrboxConfig(o);var i=this.toQrdimensions(e,t,o),a=function(e){if(e<J.MIN_QR_BOX_SIZE)throw"minimum size of 'config.qrbox' dimension value is"+" ".concat(J.MIN_QR_BOX_SIZE,"px.")};a(i.width),a(i.height),i.width=((n=i.width)>e&&(this.logger.warn("`qrbox.width` or `qrbox` is larger than the width of the root element. The width will be truncated to the width of root element."),n=e),n)},e.prototype.validateQrboxConfig=function(e){if("number"!=typeof e&&"function"!=typeof e&&(void 0===e.width||void 0===e.height))throw"Invalid instance of QrDimensions passed for 'config.qrbox'. Both 'width' and 'height' should be set."},e.prototype.toQrdimensions=function(e,t,r){if("number"==typeof r)return{width:r,height:r};if("function"==typeof r)try{return r(e,t)}catch(e){throw Error("qrbox config was passed as a function but it failed with unknown error"+e)}return r},e.prototype.setupUi=function(e,t,r){r.isShadedBoxEnabled()&&this.validateQrboxSize(e,t,r);var n=E(r.qrbox)?{width:e,height:t}:r.qrbox;this.validateQrboxConfig(n);var o=this.toQrdimensions(e,t,n);o.height>t&&this.logger.warn("[Html5Qrcode] config.qrbox has height that isgreater than the height of the video stream. Shading will be ignored");var i=r.isShadedBoxEnabled()&&o.height<=t,a=i?this.getShadedRegionBounds(e,t,o):{x:0,y:0,width:e,height:t},s=this.createCanvasElement(a.width,a.height),l=s.getContext("2d",{willReadFrequently:!0});l.canvas.width=a.width,l.canvas.height=a.height,this.element.append(s),i&&this.possiblyInsertShadingElement(this.element,e,t,o),this.createScannerPausedUiElement(this.element),this.qrRegion=a,this.context=l,this.canvasElement=s},e.prototype.createScannerPausedUiElement=function(e){var t=document.createElement("div");t.innerText=S.scannerPaused(),t.style.display="none",t.style.position="absolute",t.style.top="0px",t.style.zIndex="1",t.style.background="rgba(9, 9, 9, 0.46)",t.style.color="#FFECEC",t.style.textAlign="center",t.style.width="100%",e.appendChild(t),this.scannerPausedUiElement=t},e.prototype.scanContext=function(e,t){var r=this;return this.stateManagerProxy.isPaused()?Promise.resolve(!1):this.qrcode.decodeAsync(this.canvasElement).then(function(t){return e(t.text,A.createFromQrcodeResult(t)),r.possiblyUpdateShaders(!0),!0}).catch(function(e){r.possiblyUpdateShaders(!1);var n=S.codeParseError(e);return t(n,w.createFrom(n)),!1})},e.prototype.foreverScan=function(e,t,r){var n=this;if(this.shouldScan&&this.renderedCamera){var o=this.renderedCamera.getSurface(),i=o.videoWidth/o.clientWidth,a=o.videoHeight/o.clientHeight;if(!this.qrRegion)throw"qrRegion undefined when localMediaStream is ready.";var s=this.qrRegion.width*i,l=this.qrRegion.height*a,c=this.qrRegion.x*i,u=this.qrRegion.y*a;this.context.drawImage(o,c,u,s,l,0,0,this.qrRegion.width,this.qrRegion.height);var d=function(){n.foreverScanTimeout=setTimeout(function(){n.foreverScan(e,t,r)},n.getTimeoutFps(e.fps))};this.scanContext(t,r).then(function(o){o||!0===e.disableFlip?d():(n.context.translate(n.context.canvas.width,0),n.context.scale(-1,1),n.scanContext(t,r).finally(function(){d()}))}).catch(function(e){n.logger.logError("Error happend while scanning context",e),d()})}},e.prototype.createVideoConstraints=function(e){if("string"==typeof e)return{deviceId:{exact:e}};if("object"==typeof e){var t="facingMode",r="deviceId",n={user:!0,environment:!0},o="exact",i=function(e){if(e in n)return!0;throw"config has invalid 'facingMode' value = "+"'".concat(e,"'")},a=Object.keys(e);if(1!==a.length)throw"'cameraIdOrConfig' object should have exactly 1 key,"+" if passed as an object, found ".concat(a.length," keys");var s=Object.keys(e)[0];if(s!==t&&s!==r)throw"Only '".concat(t,"' and '").concat(r,"' ")+" are supported for 'cameraIdOrConfig'";if(s===t){var l=e.facingMode;if("string"==typeof l){if(i(l))return{facingMode:l}}else if("object"==typeof l){if(o in l){if(i(l["".concat(o)]))return{facingMode:{exact:l["".concat(o)]}}}else throw"'facingMode' should be string or object with"+" ".concat(o," as key.")}else{var c=typeof l;throw"Invalid type of 'facingMode' = ".concat(c)}}else{var u=e.deviceId;if("string"==typeof u)return{deviceId:u};if("object"==typeof u){if(o in u)return{deviceId:{exact:u["".concat(o)]}};throw"'deviceId' should be string or object with"+" ".concat(o," as key.")}throw"Invalid type of 'deviceId' = ".concat(typeof u)}}var d=typeof e;throw"Invalid type of 'cameraIdOrConfig' = ".concat(d)},e.prototype.computeCanvasDrawConfig=function(e,t,r,n){if(e<=r&&t<=n)return{x:(r-e)/2,y:(n-t)/2,width:e,height:t};var o=e,i=t;return e>r&&(t=r/e*t,e=r),t>n&&(e=n/t*e,t=n),this.logger.log("Image downsampled from "+"".concat(o,"X").concat(i)+" to ".concat(e,"X").concat(t,".")),this.computeCanvasDrawConfig(e,t,r,n)},e.prototype.clearElement=function(){if(this.stateManagerProxy.isScanning())throw"Cannot clear while scan is ongoing, close it first.";var e=document.getElementById(this.elementId);e&&(e.innerHTML="")},e.prototype.possiblyUpdateShaders=function(e){this.qrMatch!==e&&(this.hasBorderShaders&&this.borderShaders&&this.borderShaders.length&&this.borderShaders.forEach(function(t){t.style.backgroundColor=e?J.BORDER_SHADER_MATCH_COLOR:J.BORDER_SHADER_DEFAULT_COLOR}),this.qrMatch=e)},e.prototype.possiblyCloseLastScanImageFile=function(){this.lastScanImageFile&&(URL.revokeObjectURL(this.lastScanImageFile),this.lastScanImageFile=null)},e.prototype.createCanvasElement=function(e,t,r){var n=document.createElement("canvas");return n.style.width="".concat(e,"px"),n.style.height="".concat(t,"px"),n.style.display="none",n.id=E(r)?"qr-canvas":r,n},e.prototype.getShadedRegionBounds=function(e,t,r){if(r.width>e||r.height>t)throw"'config.qrbox' dimensions should not be greater than the dimensions of the root HTML element.";return{x:(e-r.width)/2,y:(t-r.height)/2,width:r.width,height:r.height}},e.prototype.possiblyInsertShadingElement=function(e,t,r,n){if(!(t-n.width<1)&&!(r-n.height<1)){var o=document.createElement("div");o.style.position="absolute";var i=(t-n.width)/2,a=(r-n.height)/2;o.style.borderLeft="".concat(i,"px solid rgba(0, 0, 0, 0.48)"),o.style.borderRight="".concat(i,"px solid rgba(0, 0, 0, 0.48)"),o.style.borderTop="".concat(a,"px solid rgba(0, 0, 0, 0.48)"),o.style.borderBottom="".concat(a,"px solid rgba(0, 0, 0, 0.48)"),o.style.boxSizing="border-box",o.style.top="0px",o.style.bottom="0px",o.style.left="0px",o.style.right="0px",o.id="".concat(J.SHADED_REGION_ELEMENT_ID),t-n.width<11||r-n.height<11?this.hasBorderShaders=!1:(this.insertShaderBorders(o,40,5,-5,null,0,!0),this.insertShaderBorders(o,40,5,-5,null,0,!1),this.insertShaderBorders(o,40,5,null,-5,0,!0),this.insertShaderBorders(o,40,5,null,-5,0,!1),this.insertShaderBorders(o,5,45,-5,null,-5,!0),this.insertShaderBorders(o,5,45,null,-5,-5,!0),this.insertShaderBorders(o,5,45,-5,null,-5,!1),this.insertShaderBorders(o,5,45,null,-5,-5,!1),this.hasBorderShaders=!0),e.append(o)}},e.prototype.insertShaderBorders=function(e,t,r,n,o,i,a){var s=document.createElement("div");s.style.position="absolute",s.style.backgroundColor=J.BORDER_SHADER_DEFAULT_COLOR,s.style.width="".concat(t,"px"),s.style.height="".concat(r,"px"),null!==n&&(s.style.top="".concat(n,"px")),null!==o&&(s.style.bottom="".concat(o,"px")),a?s.style.left="".concat(i,"px"):s.style.right="".concat(i,"px"),this.borderShaders||(this.borderShaders=[]),this.borderShaders.push(s),e.appendChild(s)},e.prototype.showPausedState=function(){if(!this.scannerPausedUiElement)throw"[internal error] scanner paused UI element not found";this.scannerPausedUiElement.style.display="block"},e.prototype.hidePausedState=function(){if(!this.scannerPausedUiElement)throw"[internal error] scanner paused UI element not found";this.scannerPausedUiElement.style.display="none"},e.prototype.getTimeoutFps=function(e){return 1e3/e},e}(),er="data:image/svg+xml;base64,",en=er+"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzEuNjQzIDM3MS42NDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM3MS42NDMgMzcxLjY0MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTEwNS4wODQgMzguMjcxaDE2My43Njh2MjBIMTA1LjA4NHoiLz48cGF0aCBkPSJNMzExLjU5NiAxOTAuMTg5Yy03LjQ0MS05LjM0Ny0xOC40MDMtMTYuMjA2LTMyLjc0My0yMC41MjJWMzBjMC0xNi41NDItMTMuNDU4LTMwLTMwLTMwSDEyNS4wODRjLTE2LjU0MiAwLTMwIDEzLjQ1OC0zMCAzMHYxMjAuMTQzaC04LjI5NmMtMTYuNTQyIDAtMzAgMTMuNDU4LTMwIDMwdjEuMzMzYTI5LjgwNCAyOS44MDQgMCAwIDAgNC42MDMgMTUuOTM5Yy03LjM0IDUuNDc0LTEyLjEwMyAxNC4yMjEtMTIuMTAzIDI0LjA2MXYxLjMzM2MwIDkuODQgNC43NjMgMTguNTg3IDEyLjEwMyAyNC4wNjJhMjkuODEgMjkuODEgMCAwIDAtNC42MDMgMTUuOTM4djEuMzMzYzAgMTYuNTQyIDEzLjQ1OCAzMCAzMCAzMGg4LjMyNGMuNDI3IDExLjYzMSA3LjUwMyAyMS41ODcgMTcuNTM0IDI2LjE3Ny45MzEgMTAuNTAzIDQuMDg0IDMwLjE4NyAxNC43NjggNDUuNTM3YTkuOTg4IDkuOTg4IDAgMCAwIDguMjE2IDQuMjg4IDkuOTU4IDkuOTU4IDAgMCAwIDUuNzA0LTEuNzkzYzQuNTMzLTMuMTU1IDUuNjUtOS4zODggMi40OTUtMTMuOTIxLTYuNzk4LTkuNzY3LTkuNjAyLTIyLjYwOC0xMC43Ni0zMS40aDgyLjY4NWMuMjcyLjQxNC41NDUuODE4LjgxNSAxLjIxIDMuMTQyIDQuNTQxIDkuMzcyIDUuNjc5IDEzLjkxMyAyLjUzNCA0LjU0Mi0zLjE0MiA1LjY3Ny05LjM3MSAyLjUzNS0xMy45MTMtMTEuOTE5LTE3LjIyOS04Ljc4Ny0zNS44ODQgOS41ODEtNTcuMDEyIDMuMDY3LTIuNjUyIDEyLjMwNy0xMS43MzIgMTEuMjE3LTI0LjAzMy0uODI4LTkuMzQzLTcuMTA5LTE3LjE5NC0xOC42NjktMjMuMzM3YTkuODU3IDkuODU3IDAgMCAwLTEuMDYxLS40ODZjLS40NjYtLjE4Mi0xMS40MDMtNC41NzktOS43NDEtMTUuNzA2IDEuMDA3LTYuNzM3IDE0Ljc2OC04LjI3MyAyMy43NjYtNy42NjYgMjMuMTU2IDEuNTY5IDM5LjY5OCA3LjgwMyA0Ny44MzYgMTguMDI2IDUuNzUyIDcuMjI1IDcuNjA3IDE2LjYyMyA1LjY3MyAyOC43MzMtLjQxMyAyLjU4NS0uODI0IDUuMjQxLTEuMjQ1IDcuOTU5LTUuNzU2IDM3LjE5NC0xMi45MTkgODMuNDgzLTQ5Ljg3IDExNC42NjEtNC4yMjEgMy41NjEtNC43NTYgOS44Ny0xLjE5NCAxNC4wOTJhOS45OCA5Ljk4IDAgMCAwIDcuNjQ4IDMuNTUxIDkuOTU1IDkuOTU1IDAgMCAwIDYuNDQ0LTIuMzU4YzQyLjY3Mi0zNi4wMDUgNTAuODAyLTg4LjUzMyA1Ni43MzctMTI2Ljg4OC40MTUtMi42ODQuODIxLTUuMzA5IDEuMjI5LTcuODYzIDIuODM0LTE3LjcyMS0uNDU1LTMyLjY0MS05Ljc3Mi00NC4zNDV6bS0yMzIuMzA4IDQyLjYyYy01LjUxNCAwLTEwLTQuNDg2LTEwLTEwdi0xLjMzM2MwLTUuNTE0IDQuNDg2LTEwIDEwLTEwaDE1djIxLjMzM2gtMTV6bS0yLjUtNTIuNjY2YzAtNS41MTQgNC40ODYtMTAgMTAtMTBoNy41djIxLjMzM2gtNy41Yy01LjUxNCAwLTEwLTQuNDg2LTEwLTEwdi0xLjMzM3ptMTcuNSA5My45OTloLTcuNWMtNS41MTQgMC0xMC00LjQ4Ni0xMC0xMHYtMS4zMzNjMC01LjUxNCA0LjQ4Ni0xMCAxMC0xMGg3LjV2MjEuMzMzem0zMC43OTYgMjguODg3Yy01LjUxNCAwLTEwLTQuNDg2LTEwLTEwdi04LjI3MWg5MS40NTdjLS44NTEgNi42NjgtLjQzNyAxMi43ODcuNzMxIDE4LjI3MWgtODIuMTg4em03OS40ODItMTEzLjY5OGMtMy4xMjQgMjAuOTA2IDEyLjQyNyAzMy4xODQgMjEuNjI1IDM3LjA0IDUuNDQxIDIuOTY4IDcuNTUxIDUuNjQ3IDcuNzAxIDcuMTg4LjIxIDIuMTUtMi41NTMgNS42ODQtNC40NzcgNy4yNTEtLjQ4Mi4zNzgtLjkyOS44LTEuMzM1IDEuMjYxLTYuOTg3IDcuOTM2LTExLjk4MiAxNS41Mi0xNS40MzIgMjIuNjg4aC05Ny41NjRWMzBjMC01LjUxNCA0LjQ4Ni0xMCAxMC0xMGgxMjMuNzY5YzUuNTE0IDAgMTAgNC40ODYgMTAgMTB2MTM1LjU3OWMtMy4wMzItLjM4MS02LjE1LS42OTQtOS4zODktLjkxNC0yNS4xNTktMS42OTQtNDIuMzcgNy43NDgtNDQuODk4IDI0LjY2NnoiLz48cGF0aCBkPSJNMTc5LjEyOSA4My4xNjdoLTI0LjA2YTUgNSAwIDAgMC01IDV2MjQuMDYxYTUgNSAwIDAgMCA1IDVoMjQuMDZhNSA1IDAgMCAwIDUtNVY4OC4xNjdhNSA1IDAgMCAwLTUtNXpNMTcyLjYyOSAxNDIuODZoLTEyLjU2VjEzMC44YTUgNSAwIDEgMC0xMCAwdjE3LjA2MWE1IDUgMCAwIDAgNSA1aDE3LjU2YTUgNSAwIDEgMCAwLTEwLjAwMXpNMjE2LjU2OCA4My4xNjdoLTI0LjA2YTUgNSAwIDAgMC01IDV2MjQuMDYxYTUgNSAwIDAgMCA1IDVoMjQuMDZhNSA1IDAgMCAwIDUtNVY4OC4xNjdhNSA1IDAgMCAwLTUtNXptLTUgMjQuMDYxaC0xNC4wNlY5My4xNjdoMTQuMDZ2MTQuMDYxek0yMTEuNjY5IDEyNS45MzZIMTk3LjQxYTUgNSAwIDAgMC01IDV2MTQuMjU3YTUgNSAwIDAgMCA1IDVoMTQuMjU5YTUgNSAwIDAgMCA1LTV2LTE0LjI1N2E1IDUgMCAwIDAtNS01eiIvPjwvc3ZnPg==",eo=er+"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OS4wMTggNTkuMDE4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OS4wMTggNTkuMDE4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJtNTguNzQxIDU0LjgwOS01Ljk2OS02LjI0NGExMC43NCAxMC43NCAwIDAgMCAyLjgyLTcuMjVjMC01Ljk1My00Ljg0My0xMC43OTYtMTAuNzk2LTEwLjc5NlMzNCAzNS4zNjEgMzQgNDEuMzE0IDM4Ljg0MyA1Mi4xMSA0NC43OTYgNTIuMTFjMi40NDEgMCA0LjY4OC0uODI0IDYuNDk5LTIuMTk2bDYuMDAxIDYuMjc3YS45OTguOTk4IDAgMCAwIDEuNDE0LjAzMiAxIDEgMCAwIDAgLjAzMS0xLjQxNHpNMzYgNDEuMzE0YzAtNC44NSAzLjk0Ni04Ljc5NiA4Ljc5Ni04Ljc5NnM4Ljc5NiAzLjk0NiA4Ljc5NiA4Ljc5Ni0zLjk0NiA4Ljc5Ni04Ljc5NiA4Ljc5NlMzNiA0Ni4xNjQgMzYgNDEuMzE0ek0xMC40MzEgMTYuMDg4YzAgMy4wNyAyLjQ5OCA1LjU2OCA1LjU2OSA1LjU2OHM1LjU2OS0yLjQ5OCA1LjU2OS01LjU2OGMwLTMuMDcxLTIuNDk4LTUuNTY5LTUuNTY5LTUuNTY5cy01LjU2OSAyLjQ5OC01LjU2OSA1LjU2OXptOS4xMzggMGMwIDEuOTY4LTEuNjAyIDMuNTY4LTMuNTY5IDMuNTY4cy0zLjU2OS0xLjYwMS0zLjU2OS0zLjU2OCAxLjYwMi0zLjU2OSAzLjU2OS0zLjU2OSAzLjU2OSAxLjYwMSAzLjU2OSAzLjU2OXoiLz48cGF0aCBkPSJtMzAuODgyIDI4Ljk4NyA5LjE4LTEwLjA1NCAxMS4yNjIgMTAuMzIzYTEgMSAwIDAgMCAxLjM1MS0xLjQ3NWwtMTItMTFhMSAxIDAgMCAwLTEuNDE0LjA2M2wtOS43OTQgMTAuNzI3LTQuNzQzLTQuNzQzYTEuMDAzIDEuMDAzIDAgMCAwLTEuMzY4LS4wNDRMNi4zMzkgMzcuNzY4YTEgMSAwIDEgMCAxLjMyMiAxLjUwMWwxNi4zMTMtMTQuMzYyIDcuMzE5IDcuMzE4YS45OTkuOTk5IDAgMSAwIDEuNDE0LTEuNDE0bC0xLjgyNS0xLjgyNHoiLz48cGF0aCBkPSJNMzAgNDYuNTE4SDJ2LTQyaDU0djI4YTEgMSAwIDEgMCAyIDB2LTI5YTEgMSAwIDAgMC0xLTFIMWExIDEgMCAwIDAtMSAxdjQ0YTEgMSAwIDAgMCAxIDFoMjlhMSAxIDAgMSAwIDAtMnoiLz48L3N2Zz4=",ei=er+"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NjAgNDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjAgNDYwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMjMwIDBDMTAyLjk3NSAwIDAgMTAyLjk3NSAwIDIzMHMxMDIuOTc1IDIzMCAyMzAgMjMwIDIzMC0xMDIuOTc0IDIzMC0yMzBTMzU3LjAyNSAwIDIzMCAwem0zOC4zMzMgMzc3LjM2YzAgOC42NzYtNy4wMzQgMTUuNzEtMTUuNzEgMTUuNzFoLTQzLjEwMWMtOC42NzYgMC0xNS43MS03LjAzNC0xNS43MS0xNS43MVYyMDIuNDc3YzAtOC42NzYgNy4wMzMtMTUuNzEgMTUuNzEtMTUuNzFoNDMuMTAxYzguNjc2IDAgMTUuNzEgNy4wMzMgMTUuNzEgMTUuNzFWMzc3LjM2ek0yMzAgMTU3Yy0yMS41MzkgMC0zOS0xNy40NjEtMzktMzlzMTcuNDYxLTM5IDM5LTM5IDM5IDE3LjQ2MSAzOSAzOS0xNy40NjEgMzktMzkgMzl6Ii8+PC9zdmc+",ea=function(){function e(){}return e.createDefault=function(){return{hasPermission:!1,lastUsedCameraId:null}},e}(),es=function(){function e(){this.data=ea.createDefault();var t=localStorage.getItem(e.LOCAL_STORAGE_KEY);t?this.data=JSON.parse(t):this.reset()}return e.prototype.hasCameraPermissions=function(){return this.data.hasPermission},e.prototype.getLastUsedCameraId=function(){return this.data.lastUsedCameraId},e.prototype.setHasPermission=function(e){this.data.hasPermission=e,this.flush()},e.prototype.setLastUsedCameraId=function(e){this.data.lastUsedCameraId=e,this.flush()},e.prototype.resetLastUsedCameraId=function(){this.data.lastUsedCameraId=null,this.flush()},e.prototype.reset=function(){this.data=ea.createDefault(),this.flush()},e.prototype.flush=function(){localStorage.setItem(e.LOCAL_STORAGE_KEY,JSON.stringify(this.data))},e.LOCAL_STORAGE_KEY="HTML5_QRCODE_DATA",e}(),el=function(){function e(){this.infoDiv=document.createElement("div")}return e.prototype.renderInto=function(e){this.infoDiv.style.position="absolute",this.infoDiv.style.top="10px",this.infoDiv.style.right="10px",this.infoDiv.style.zIndex="2",this.infoDiv.style.display="none",this.infoDiv.style.padding="5pt",this.infoDiv.style.border="1px solid #171717",this.infoDiv.style.fontSize="10pt",this.infoDiv.style.background="rgb(0 0 0 / 69%)",this.infoDiv.style.borderRadius="5px",this.infoDiv.style.textAlign="center",this.infoDiv.style.fontWeight="400",this.infoDiv.style.color="white",this.infoDiv.innerText=C.poweredBy();var t=document.createElement("a");t.innerText="ScanApp",t.href="https://scanapp.org",t.target="new",t.style.color="white",this.infoDiv.appendChild(t);var r=document.createElement("br"),n=document.createElement("br");this.infoDiv.appendChild(r),this.infoDiv.appendChild(n);var o=document.createElement("a");o.innerText=C.reportIssues(),o.href="https://github.com/mebjas/html5-qrcode/issues",o.target="new",o.style.color="white",this.infoDiv.appendChild(o),e.appendChild(this.infoDiv)},e.prototype.show=function(){this.infoDiv.style.display="block"},e.prototype.hide=function(){this.infoDiv.style.display="none"},e}(),ec=function(){function e(e,t){this.isShowingInfoIcon=!0,this.onTapIn=e,this.onTapOut=t,this.infoIcon=document.createElement("img")}return e.prototype.renderInto=function(e){var t=this;this.infoIcon.alt="Info icon",this.infoIcon.src=ei,this.infoIcon.style.position="absolute",this.infoIcon.style.top="4px",this.infoIcon.style.right="4px",this.infoIcon.style.opacity="0.6",this.infoIcon.style.cursor="pointer",this.infoIcon.style.zIndex="2",this.infoIcon.style.width="16px",this.infoIcon.style.height="16px",this.infoIcon.onmouseover=function(e){return t.onHoverIn()},this.infoIcon.onmouseout=function(e){return t.onHoverOut()},this.infoIcon.onclick=function(e){return t.onClick()},e.appendChild(this.infoIcon)},e.prototype.onHoverIn=function(){this.isShowingInfoIcon&&(this.infoIcon.style.opacity="1")},e.prototype.onHoverOut=function(){this.isShowingInfoIcon&&(this.infoIcon.style.opacity="0.6")},e.prototype.onClick=function(){this.isShowingInfoIcon?(this.isShowingInfoIcon=!1,this.onTapIn(),this.infoIcon.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAQgAAAEIBarqQRAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAE1SURBVDiNfdI7S0NBEAXgLya1otFgpbYSbISAgpXYi6CmiH9KCAiChaVga6OiWPgfRDQ+0itaGVNosXtluWwcuMzePfM4M3sq8lbHBubwg1dc4m1E/J/N4ghDPOIsfk/4xiEao5KX0McFljN4C9d4QTPXuY99jP3DsIoDPGM6BY5i5yI5R7O4q+ImFkJY2DCh3cAH2klyB+9J1xUMMAG7eCh1a+Mr+k48b5diXrFVwwLuS+BJ9MfR7+G0FHOHhTHhnXNWS87VDF4pcnfQK4Ep7XScNLmPTZgURNKKYENYWDpzW1BhscS1WHS8CDgURFJQrWcoF3c13KKbgg1BYQfy8xZWEzTTw1QZbAoKu8FqJnktdu5hcVSHmchiILzzuaDQvjBzV2m8yohCE1jHfPx/xhU+y4G/D75ELlRJsSYAAAAASUVORK5CYII=",this.infoIcon.style.opacity="1"):(this.isShowingInfoIcon=!0,this.onTapOut(),this.infoIcon.src=ei,this.infoIcon.style.opacity="0.6")},e}(),eu=function(){function e(){var e=this;this.infoDiv=new el,this.infoIcon=new ec(function(){e.infoDiv.show()},function(){e.infoDiv.hide()})}return e.prototype.renderInto=function(e){this.infoDiv.renderInto(e),this.infoIcon.renderInto(e)},e}(),ed=function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(r)throw TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}},ef=function(){function e(){}return e.hasPermissions=function(){var e,t,r,n;return e=this,t=void 0,r=void 0,n=function(){var e,t,r;return ed(this,function(n){switch(n.label){case 0:return[4,navigator.mediaDevices.enumerateDevices()];case 1:for(e=0,t=n.sent();e<t.length;e++)if("videoinput"===(r=t[e]).kind&&r.label)return[2,!0];return[2,!1]}})},new(r||(r=Promise))(function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}l((n=n.apply(e,t||[])).next())})},e}(),ep=function(){function e(e){this.supportedScanTypes=this.validateAndReturnScanTypes(e)}return e.prototype.getDefaultScanType=function(){return this.supportedScanTypes[0]},e.prototype.hasMoreThanOneScanType=function(){return this.supportedScanTypes.length>1},e.prototype.isCameraScanRequired=function(){for(var t=0,r=this.supportedScanTypes;t<r.length;t++){var n=r[t];if(e.isCameraScanType(n))return!0}return!1},e.isCameraScanType=function(e){return e===p.SCAN_TYPE_CAMERA},e.isFileScanType=function(e){return e===p.SCAN_TYPE_FILE},e.prototype.validateAndReturnScanTypes=function(e){if(!e||0===e.length)return y.DEFAULT_SUPPORTED_SCAN_TYPE;var t=y.DEFAULT_SUPPORTED_SCAN_TYPE.length;if(e.length>t)throw"Max ".concat(t," values expected for ")+"supportedScanTypes";for(var r=0;r<e.length;r++){var n=e[r];if(!y.DEFAULT_SUPPORTED_SCAN_TYPE.includes(n))throw"Unsupported scan type ".concat(n)}return e},e}(),eh=function(){function e(){}return e.ALL_ELEMENT_CLASS="html5-qrcode-element",e.CAMERA_PERMISSION_BUTTON_ID="html5-qrcode-button-camera-permission",e.CAMERA_START_BUTTON_ID="html5-qrcode-button-camera-start",e.CAMERA_STOP_BUTTON_ID="html5-qrcode-button-camera-stop",e.TORCH_BUTTON_ID="html5-qrcode-button-torch",e.CAMERA_SELECTION_SELECT_ID="html5-qrcode-select-camera",e.FILE_SELECTION_BUTTON_ID="html5-qrcode-button-file-selection",e.ZOOM_SLIDER_ID="html5-qrcode-input-range-zoom",e.SCAN_TYPE_CHANGE_ANCHOR_ID="html5-qrcode-anchor-scan-type-change",e.TORCH_BUTTON_CLASS_TORCH_ON="html5-qrcode-button-torch-on",e.TORCH_BUTTON_CLASS_TORCH_OFF="html5-qrcode-button-torch-off",e}(),eg=function(){function e(){}return e.createElement=function(e,t){var r=document.createElement(e);return r.id=t,r.classList.add(eh.ALL_ELEMENT_CLASS),"button"===e&&r.setAttribute("type","button"),r},e}(),em=function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}l((n=n.apply(e,t||[])).next())})},eb=function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(r)throw TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}},ey=function(){function e(e,t,r){this.isTorchOn=!1,this.torchCapability=e,this.buttonController=t,this.onTorchActionFailureCallback=r}return e.prototype.isTorchEnabled=function(){return this.isTorchOn},e.prototype.flipState=function(){return em(this,void 0,void 0,function(){var e,t;return eb(this,function(r){switch(r.label){case 0:this.buttonController.disable(),e=!this.isTorchOn,r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.torchCapability.apply(e)];case 2:return r.sent(),this.updateUiBasedOnLatestSettings(this.torchCapability.value(),e),[3,4];case 3:return t=r.sent(),this.propagateFailure(e,t),this.buttonController.enable(),[3,4];case 4:return[2]}})})},e.prototype.updateUiBasedOnLatestSettings=function(e,t){e===t?(this.buttonController.setText(t?T.torchOffButton():T.torchOnButton()),this.isTorchOn=t):this.propagateFailure(t),this.buttonController.enable()},e.prototype.propagateFailure=function(e,t){var r=e?T.torchOnFailedMessage():T.torchOffFailedMessage();t&&(r+="; Error = "+t),this.onTorchActionFailureCallback(r)},e.prototype.reset=function(){this.isTorchOn=!1},e}(),ev=function(){function e(e,t){this.onTorchActionFailureCallback=t,this.torchButton=eg.createElement("button",eh.TORCH_BUTTON_ID),this.torchController=new ey(e,this,t)}return e.prototype.render=function(e,t){var r=this;this.torchButton.innerText=T.torchOnButton(),this.torchButton.style.display=t.display,this.torchButton.style.marginLeft=t.marginLeft;var n=this;this.torchButton.addEventListener("click",function(e){return em(r,void 0,void 0,function(){return eb(this,function(e){switch(e.label){case 0:return[4,n.torchController.flipState()];case 1:return e.sent(),n.torchController.isTorchEnabled()?(n.torchButton.classList.remove(eh.TORCH_BUTTON_CLASS_TORCH_OFF),n.torchButton.classList.add(eh.TORCH_BUTTON_CLASS_TORCH_ON)):(n.torchButton.classList.remove(eh.TORCH_BUTTON_CLASS_TORCH_ON),n.torchButton.classList.add(eh.TORCH_BUTTON_CLASS_TORCH_OFF)),[2]}})})}),e.appendChild(this.torchButton)},e.prototype.updateTorchCapability=function(e){this.torchController=new ey(e,this,this.onTorchActionFailureCallback)},e.prototype.getTorchButton=function(){return this.torchButton},e.prototype.hide=function(){this.torchButton.style.display="none"},e.prototype.show=function(){this.torchButton.style.display="inline-block"},e.prototype.disable=function(){this.torchButton.disabled=!0},e.prototype.enable=function(){this.torchButton.disabled=!1},e.prototype.setText=function(e){this.torchButton.innerText=e},e.prototype.reset=function(){this.torchButton.innerText=T.torchOnButton(),this.torchController.reset()},e.create=function(t,r,n,o){var i=new e(r,o);return i.render(t,n),i},e}(),eA=function(){function e(e,t,r){this.fileBasedScanRegion=this.createFileBasedScanRegion(),this.fileBasedScanRegion.style.display=t?"block":"none",e.appendChild(this.fileBasedScanRegion);var n=document.createElement("label");n.setAttribute("for",this.getFileScanInputId()),n.style.display="inline-block",this.fileBasedScanRegion.appendChild(n),this.fileSelectionButton=eg.createElement("button",eh.FILE_SELECTION_BUTTON_ID),this.setInitialValueToButton(),this.fileSelectionButton.addEventListener("click",function(e){n.click()}),n.append(this.fileSelectionButton),this.fileScanInput=eg.createElement("input",this.getFileScanInputId()),this.fileScanInput.type="file",this.fileScanInput.accept="image/*",this.fileScanInput.style.display="none",n.appendChild(this.fileScanInput);var o=this;this.fileScanInput.addEventListener("change",function(e){if(null!=e&&null!=e.target){var t=e.target;if(!t.files||0!==t.files.length){var n=t.files[0],i=n.name;o.setImageNameToButton(i),r(n)}}});var i=this.createDragAndDropMessage();this.fileBasedScanRegion.appendChild(i),this.fileBasedScanRegion.addEventListener("dragenter",function(e){o.fileBasedScanRegion.style.border=o.fileBasedScanRegionActiveBorder(),e.stopPropagation(),e.preventDefault()}),this.fileBasedScanRegion.addEventListener("dragleave",function(e){o.fileBasedScanRegion.style.border=o.fileBasedScanRegionDefaultBorder(),e.stopPropagation(),e.preventDefault()}),this.fileBasedScanRegion.addEventListener("dragover",function(e){o.fileBasedScanRegion.style.border=o.fileBasedScanRegionActiveBorder(),e.stopPropagation(),e.preventDefault()}),this.fileBasedScanRegion.addEventListener("drop",function(e){e.stopPropagation(),e.preventDefault(),o.fileBasedScanRegion.style.border=o.fileBasedScanRegionDefaultBorder();var t=e.dataTransfer;if(t){var n=t.files;if(!n||0===n.length)return;for(var a=!1,s=0;s<n.length;++s){var l=n.item(s);if(l){var c=/image.*/;if(l.type.match(c)){a=!0;var u=l.name;o.setImageNameToButton(u),r(l),i.innerText=T.dragAndDropMessage();break}}}a||(i.innerText=T.dragAndDropMessageOnlyImages())}})}return e.prototype.hide=function(){this.fileBasedScanRegion.style.display="none",this.fileScanInput.disabled=!0},e.prototype.show=function(){this.fileBasedScanRegion.style.display="block",this.fileScanInput.disabled=!1},e.prototype.isShowing=function(){return"block"===this.fileBasedScanRegion.style.display},e.prototype.resetValue=function(){this.fileScanInput.value="",this.setInitialValueToButton()},e.prototype.createFileBasedScanRegion=function(){var e=document.createElement("div");return e.style.textAlign="center",e.style.margin="auto",e.style.width="80%",e.style.maxWidth="600px",e.style.border=this.fileBasedScanRegionDefaultBorder(),e.style.padding="10px",e.style.marginBottom="10px",e},e.prototype.fileBasedScanRegionDefaultBorder=function(){return"6px dashed #ebebeb"},e.prototype.fileBasedScanRegionActiveBorder=function(){return"6px dashed rgb(153 151 151)"},e.prototype.createDragAndDropMessage=function(){var e=document.createElement("div");return e.innerText=T.dragAndDropMessage(),e.style.fontWeight="400",e},e.prototype.setImageNameToButton=function(e){if(e.length>20){var t=e.substring(0,8),r=e.length,n=e.substring(r-8,r);e="".concat(t,"....").concat(n)}var o=T.fileSelectionChooseAnother()+" - "+e;this.fileSelectionButton.innerText=o},e.prototype.setInitialValueToButton=function(){var e=T.fileSelectionChooseImage()+" - "+T.fileSelectionNoImageSelected();this.fileSelectionButton.innerText=e},e.prototype.getFileScanInputId=function(){return"html5-qrcode-private-filescan-input"},e.create=function(t,r,n){return new e(t,r,n)},e}(),ew=function(){function e(e){this.selectElement=eg.createElement("select",eh.CAMERA_SELECTION_SELECT_ID),this.cameras=e,this.options=[]}return e.prototype.render=function(e){var t=document.createElement("span");t.style.marginRight="10px";var r=this.cameras.length;if(0===r)throw Error("No cameras found");if(1===r)t.style.display="none";else{var n=T.selectCamera();t.innerText="".concat(n," (").concat(this.cameras.length,")  ")}for(var o=1,i=0,a=this.cameras;i<a.length;i++){var s=a[i],l=s.id,c=null==s.label?l:s.label;c&&""!==c||(c=[T.anonymousCameraPrefix(),o++].join(" "));var u=document.createElement("option");u.value=l,u.innerText=c,this.options.push(u),this.selectElement.appendChild(u)}t.appendChild(this.selectElement),e.appendChild(t)},e.prototype.disable=function(){this.selectElement.disabled=!0},e.prototype.isDisabled=function(){return!0===this.selectElement.disabled},e.prototype.enable=function(){this.selectElement.disabled=!1},e.prototype.getValue=function(){return this.selectElement.value},e.prototype.hasValue=function(e){for(var t=0,r=this.options;t<r.length;t++)if(r[t].value===e)return!0;return!1},e.prototype.setValue=function(e){if(!this.hasValue(e))throw Error("".concat(e," is not present in the camera list."));this.selectElement.value=e},e.prototype.hasSingleItem=function(){return 1===this.cameras.length},e.prototype.numCameras=function(){return this.cameras.length},e.create=function(t,r){var n=new e(r);return n.render(t),n},e}(),ex=function(){function e(){this.onChangeCallback=null,this.zoomElementContainer=document.createElement("div"),this.rangeInput=eg.createElement("input",eh.ZOOM_SLIDER_ID),this.rangeInput.type="range",this.rangeText=document.createElement("span"),this.rangeInput.min="1",this.rangeInput.max="5",this.rangeInput.value="1",this.rangeInput.step="0.1"}return e.prototype.render=function(e,t){this.zoomElementContainer.style.display=t?"block":"none",this.zoomElementContainer.style.padding="5px 10px",this.zoomElementContainer.style.textAlign="center",e.appendChild(this.zoomElementContainer),this.rangeInput.style.display="inline-block",this.rangeInput.style.width="50%",this.rangeInput.style.height="5px",this.rangeInput.style.background="#d3d3d3",this.rangeInput.style.outline="none",this.rangeInput.style.opacity="0.7";var r=T.zoom();this.rangeText.innerText="".concat(this.rangeInput.value,"x ").concat(r),this.rangeText.style.marginRight="10px";var n=this;this.rangeInput.addEventListener("input",function(){return n.onValueChange()}),this.rangeInput.addEventListener("change",function(){return n.onValueChange()}),this.zoomElementContainer.appendChild(this.rangeInput),this.zoomElementContainer.appendChild(this.rangeText)},e.prototype.onValueChange=function(){var e=T.zoom();this.rangeText.innerText="".concat(this.rangeInput.value,"x ").concat(e),this.onChangeCallback&&this.onChangeCallback(parseFloat(this.rangeInput.value))},e.prototype.setValues=function(e,t,r,n){this.rangeInput.min=e.toString(),this.rangeInput.max=t.toString(),this.rangeInput.step=n.toString(),this.rangeInput.value=r.toString(),this.onValueChange()},e.prototype.show=function(){this.zoomElementContainer.style.display="block"},e.prototype.hide=function(){this.zoomElementContainer.style.display="none"},e.prototype.setOnCameraZoomValueChangeCallback=function(e){this.onChangeCallback=e},e.prototype.removeOnCameraZoomValueChangeCallback=function(){this.onChangeCallback=null},e.create=function(t,r){var n=new e;return n.render(t,r),n},e}();(c=m||(m={}))[c.STATUS_DEFAULT=0]="STATUS_DEFAULT",c[c.STATUS_SUCCESS=1]="STATUS_SUCCESS",c[c.STATUS_WARNING=2]="STATUS_WARNING",c[c.STATUS_REQUESTING_PERMISSION=3]="STATUS_REQUESTING_PERMISSION";var eE=function(){function e(e,t,r){if(this.lastMatchFound=null,this.cameraScanImage=null,this.fileScanImage=null,this.fileSelectionUi=null,this.elementId=e,this.config=this.createConfig(t),this.verbose=!0===r,!document.getElementById(e))throw"HTML Element with id=".concat(e," not found");this.scanTypeSelector=new ep(this.config.supportedScanTypes),this.currentScanType=this.scanTypeSelector.getDefaultScanType(),this.sectionSwapAllowed=!0,this.logger=new x(this.verbose),this.persistedDataManager=new es,!0!==t.rememberLastUsedCamera&&this.persistedDataManager.reset()}return e.prototype.render=function(e,t){var r,n,o=this;this.lastMatchFound=null,this.qrCodeSuccessCallback=function(t,r){if(e)e(t,r);else{if(o.lastMatchFound===t)return;o.lastMatchFound=t,o.setHeaderMessage(T.lastMatch(t),m.STATUS_SUCCESS)}},this.qrCodeErrorCallback=function(e,r){t&&t(e,r)};var i=document.getElementById(this.elementId);if(!i)throw"HTML Element with id=".concat(this.elementId," not found");i.innerHTML="",this.createBasicLayout(i),this.html5Qrcode=new et(this.getScanRegionId(),(r=this.config,n=this.verbose,{formatsToSupport:r.formatsToSupport,useBarCodeDetectorIfSupported:r.useBarCodeDetectorIfSupported,experimentalFeatures:r.experimentalFeatures,verbose:n}))},e.prototype.pause=function(e){(E(e)||!0!==e)&&(e=!1),this.getHtml5QrcodeOrFail().pause(e)},e.prototype.resume=function(){this.getHtml5QrcodeOrFail().resume()},e.prototype.getState=function(){return this.getHtml5QrcodeOrFail().getState()},e.prototype.clear=function(){var e=this,t=function(){var t=document.getElementById(e.elementId);t&&(t.innerHTML="",e.resetBasicLayout(t))};return this.html5Qrcode?new Promise(function(r,n){if(!e.html5Qrcode){r();return}e.html5Qrcode.isScanning?e.html5Qrcode.stop().then(function(n){if(!e.html5Qrcode){r();return}e.html5Qrcode.clear(),t(),r()}).catch(function(t){e.verbose&&e.logger.logError("Unable to stop qrcode scanner",t),n(t)}):(e.html5Qrcode.clear(),t(),r())}):Promise.resolve()},e.prototype.getRunningTrackCapabilities=function(){return this.getHtml5QrcodeOrFail().getRunningTrackCapabilities()},e.prototype.getRunningTrackSettings=function(){return this.getHtml5QrcodeOrFail().getRunningTrackSettings()},e.prototype.applyVideoConstraints=function(e){return this.getHtml5QrcodeOrFail().applyVideoConstraints(e)},e.prototype.getHtml5QrcodeOrFail=function(){if(!this.html5Qrcode)throw"Code scanner not initialized.";return this.html5Qrcode},e.prototype.createConfig=function(e){return e?(e.fps||(e.fps=y.SCAN_DEFAULT_FPS),!y.DEFAULT_REMEMBER_LAST_CAMERA_USED!==e.rememberLastUsedCamera&&(e.rememberLastUsedCamera=y.DEFAULT_REMEMBER_LAST_CAMERA_USED),e.supportedScanTypes||(e.supportedScanTypes=y.DEFAULT_SUPPORTED_SCAN_TYPE),e):{fps:y.SCAN_DEFAULT_FPS,rememberLastUsedCamera:y.DEFAULT_REMEMBER_LAST_CAMERA_USED,supportedScanTypes:y.DEFAULT_SUPPORTED_SCAN_TYPE}},e.prototype.createBasicLayout=function(e){e.style.position="relative",e.style.padding="0px",e.style.border="1px solid silver",this.createHeader(e);var t=document.createElement("div"),r=this.getScanRegionId();t.id=r,t.style.width="100%",t.style.minHeight="100px",t.style.textAlign="center",e.appendChild(t),ep.isCameraScanType(this.currentScanType)?this.insertCameraScanImageToScanRegion():this.insertFileScanImageToScanRegion();var n=document.createElement("div"),o=this.getDashboardId();n.id=o,n.style.width="100%",e.appendChild(n),this.setupInitialDashboard(n)},e.prototype.resetBasicLayout=function(e){e.style.border="none"},e.prototype.setupInitialDashboard=function(e){this.createSection(e),this.createSectionControlPanel(),this.scanTypeSelector.hasMoreThanOneScanType()&&this.createSectionSwap()},e.prototype.createHeader=function(e){var t=document.createElement("div");t.style.textAlign="left",t.style.margin="0px",e.appendChild(t),new eu().renderInto(t);var r=document.createElement("div");r.id=this.getHeaderMessageContainerId(),r.style.display="none",r.style.textAlign="center",r.style.fontSize="14px",r.style.padding="2px 10px",r.style.margin="4px",r.style.borderTop="1px solid #f6f6f6",t.appendChild(r)},e.prototype.createSection=function(e){var t=document.createElement("div");t.id=this.getDashboardSectionId(),t.style.width="100%",t.style.padding="10px 0px 10px 0px",t.style.textAlign="left",e.appendChild(t)},e.prototype.createCameraListUi=function(e,t,r){var n=this;n.showHideScanTypeSwapLink(!1),n.setHeaderMessage(T.cameraPermissionRequesting());var o=function(){r||n.createPermissionButton(e,t)};et.getCameras().then(function(r){n.persistedDataManager.setHasPermission(!0),n.showHideScanTypeSwapLink(!0),n.resetHeaderMessage(),r&&r.length>0?(e.removeChild(t),n.renderCameraSelection(r)):(n.setHeaderMessage(T.noCameraFound(),m.STATUS_WARNING),o())}).catch(function(e){n.persistedDataManager.setHasPermission(!1),r?r.disabled=!1:o(),n.setHeaderMessage(e,m.STATUS_WARNING),n.showHideScanTypeSwapLink(!0)})},e.prototype.createPermissionButton=function(e,t){var r=this,n=eg.createElement("button",this.getCameraPermissionButtonId());n.innerText=T.cameraPermissionTitle(),n.addEventListener("click",function(){n.disabled=!0,r.createCameraListUi(e,t,n)}),t.appendChild(n)},e.prototype.createPermissionsUi=function(e,t){var r=this;if(ep.isCameraScanType(this.currentScanType)&&this.persistedDataManager.hasCameraPermissions()){ef.hasPermissions().then(function(n){n?r.createCameraListUi(e,t):(r.persistedDataManager.setHasPermission(!1),r.createPermissionButton(e,t))}).catch(function(n){r.persistedDataManager.setHasPermission(!1),r.createPermissionButton(e,t)});return}this.createPermissionButton(e,t)},e.prototype.createSectionControlPanel=function(){var e=document.getElementById(this.getDashboardSectionId()),t=document.createElement("div");e.appendChild(t);var r=document.createElement("div");r.id=this.getDashboardSectionCameraScanRegionId(),r.style.display=ep.isCameraScanType(this.currentScanType)?"block":"none",t.appendChild(r);var n=document.createElement("div");n.style.textAlign="center",r.appendChild(n),this.scanTypeSelector.isCameraScanRequired()&&this.createPermissionsUi(r,n),this.renderFileScanUi(t)},e.prototype.renderFileScanUi=function(e){var t=ep.isFileScanType(this.currentScanType),r=this;this.fileSelectionUi=eA.create(e,t,function(e){if(!r.html5Qrcode)throw"html5Qrcode not defined";ep.isFileScanType(r.currentScanType)&&(r.setHeaderMessage(T.loadingImage()),r.html5Qrcode.scanFileV2(e,!0).then(function(e){r.resetHeaderMessage(),r.qrCodeSuccessCallback(e.decodedText,e)}).catch(function(e){r.setHeaderMessage(e,m.STATUS_WARNING),r.qrCodeErrorCallback(e,w.createFrom(e))}))})},e.prototype.renderCameraSelection=function(e){var t,r=this,n=this,o=document.getElementById(this.getDashboardSectionCameraScanRegionId());o.style.textAlign="center";var i=ex.create(o,!1),a=function(e){var t,n,o,a=e.zoomFeature();if(a.isSupported()){i.setOnCameraZoomValueChangeCallback(function(e){a.apply(e)});var s=1;r.config.defaultZoomValueIfSupported&&(s=r.config.defaultZoomValueIfSupported),t=s,n=a.min(),s=t>(o=a.max())?o:t<n?n:t,i.setValues(a.min(),a.max(),s,a.step()),i.show()}},s=ew.create(o,e),l=document.createElement("span"),c=eg.createElement("button",eh.CAMERA_START_BUTTON_ID);c.innerText=T.scanButtonStartScanningText(),l.appendChild(c);var u=eg.createElement("button",eh.CAMERA_STOP_BUTTON_ID);u.innerText=T.scanButtonStopScanningText(),u.style.display="none",u.disabled=!0,l.appendChild(u);var d=function(e){if(!e.torchFeature().isSupported()){t&&t.hide();return}t?t.updateTorchCapability(e.torchFeature()):t=ev.create(l,e.torchFeature(),{display:"none",marginLeft:"5px"},function(e){n.setHeaderMessage(e,m.STATUS_WARNING)}),t.show()};o.appendChild(l);var f=function(e){e||(c.style.display="none"),c.innerText=T.scanButtonStartScanningText(),c.style.opacity="1",c.disabled=!1,e&&(c.style.display="inline-block")};if(c.addEventListener("click",function(e){c.innerText=T.scanButtonScanningStarting(),s.disable(),c.disabled=!0,c.style.opacity="0.5",r.scanTypeSelector.hasMoreThanOneScanType()&&n.showHideScanTypeSwapLink(!1),n.resetHeaderMessage();var t,o=s.getValue();n.persistedDataManager.setLastUsedCameraId(o),n.html5Qrcode.start(o,{fps:(t=n.config).fps,qrbox:t.qrbox,aspectRatio:t.aspectRatio,disableFlip:t.disableFlip,videoConstraints:t.videoConstraints},n.qrCodeSuccessCallback,n.qrCodeErrorCallback).then(function(e){u.disabled=!1,u.style.display="inline-block",f(!1);var t=n.html5Qrcode.getRunningTrackCameraCapabilities();!0===r.config.showTorchButtonIfSupported&&d(t),!0===r.config.showZoomSliderIfSupported&&a(t)}).catch(function(e){n.showHideScanTypeSwapLink(!0),s.enable(),f(!0),n.setHeaderMessage(e,m.STATUS_WARNING)})}),s.hasSingleItem()&&c.click(),u.addEventListener("click",function(e){if(!n.html5Qrcode)throw"html5Qrcode not defined";u.disabled=!0,n.html5Qrcode.stop().then(function(e){r.scanTypeSelector.hasMoreThanOneScanType()&&n.showHideScanTypeSwapLink(!0),s.enable(),c.disabled=!1,u.style.display="none",c.style.display="inline-block",t&&(t.reset(),t.hide()),i.removeOnCameraZoomValueChangeCallback(),i.hide(),n.insertCameraScanImageToScanRegion()}).catch(function(e){u.disabled=!1,n.setHeaderMessage(e,m.STATUS_WARNING)})}),n.persistedDataManager.getLastUsedCameraId()){var p=n.persistedDataManager.getLastUsedCameraId();s.hasValue(p)?(s.setValue(p),c.click()):n.persistedDataManager.resetLastUsedCameraId()}},e.prototype.createSectionSwap=function(){var e=this,t=T.textIfCameraScanSelected(),r=T.textIfFileScanSelected(),n=document.getElementById(this.getDashboardSectionId()),o=document.createElement("div");o.style.textAlign="center";var i=eg.createElement("span",this.getDashboardSectionSwapLinkId());i.style.textDecoration="underline",i.style.cursor="pointer",i.innerText=ep.isCameraScanType(this.currentScanType)?t:r,i.addEventListener("click",function(){if(!e.sectionSwapAllowed){e.verbose&&e.logger.logError("Section swap called when not allowed");return}e.resetHeaderMessage(),e.fileSelectionUi.resetValue(),e.sectionSwapAllowed=!1,ep.isCameraScanType(e.currentScanType)?(e.clearScanRegion(),e.getCameraScanRegion().style.display="none",e.fileSelectionUi.show(),i.innerText=r,e.currentScanType=p.SCAN_TYPE_FILE,e.insertFileScanImageToScanRegion()):(e.clearScanRegion(),e.getCameraScanRegion().style.display="block",e.fileSelectionUi.hide(),i.innerText=t,e.currentScanType=p.SCAN_TYPE_CAMERA,e.insertCameraScanImageToScanRegion(),e.startCameraScanIfPermissionExistsOnSwap()),e.sectionSwapAllowed=!0}),o.appendChild(i),n.appendChild(o)},e.prototype.startCameraScanIfPermissionExistsOnSwap=function(){var e=this,t=this;if(this.persistedDataManager.hasCameraPermissions()){ef.hasPermissions().then(function(r){if(r){var n=document.getElementById(t.getCameraPermissionButtonId());if(!n)throw e.logger.logError("Permission button not found, fail;"),"Permission button not found";n.click()}else t.persistedDataManager.setHasPermission(!1)}).catch(function(e){t.persistedDataManager.setHasPermission(!1)});return}},e.prototype.resetHeaderMessage=function(){document.getElementById(this.getHeaderMessageContainerId()).style.display="none"},e.prototype.setHeaderMessage=function(e,t){t||(t=m.STATUS_DEFAULT);var r=this.getHeaderMessageDiv();switch(r.innerText=e,r.style.display="block",t){case m.STATUS_SUCCESS:r.style.background="rgba(106, 175, 80, 0.26)",r.style.color="#477735";break;case m.STATUS_WARNING:r.style.background="rgba(203, 36, 49, 0.14)",r.style.color="#cb2431";break;case m.STATUS_DEFAULT:default:r.style.background="rgba(0, 0, 0, 0)",r.style.color="rgb(17, 17, 17)"}},e.prototype.showHideScanTypeSwapLink=function(e){this.scanTypeSelector.hasMoreThanOneScanType()&&(!0!==e&&(e=!1),this.sectionSwapAllowed=e,this.getDashboardSectionSwapLink().style.display=e?"inline-block":"none")},e.prototype.insertCameraScanImageToScanRegion=function(){var e=this,t=document.getElementById(this.getScanRegionId());if(this.cameraScanImage){t.innerHTML="<br>",t.appendChild(this.cameraScanImage);return}this.cameraScanImage=new Image,this.cameraScanImage.onload=function(r){t.innerHTML="<br>",t.appendChild(e.cameraScanImage)},this.cameraScanImage.width=64,this.cameraScanImage.style.opacity="0.8",this.cameraScanImage.src=en,this.cameraScanImage.alt=T.cameraScanAltText()},e.prototype.insertFileScanImageToScanRegion=function(){var e=this,t=document.getElementById(this.getScanRegionId());if(this.fileScanImage){t.innerHTML="<br>",t.appendChild(this.fileScanImage);return}this.fileScanImage=new Image,this.fileScanImage.onload=function(r){t.innerHTML="<br>",t.appendChild(e.fileScanImage)},this.fileScanImage.width=64,this.fileScanImage.style.opacity="0.8",this.fileScanImage.src=eo,this.fileScanImage.alt=T.fileScanAltText()},e.prototype.clearScanRegion=function(){document.getElementById(this.getScanRegionId()).innerHTML=""},e.prototype.getDashboardSectionId=function(){return"".concat(this.elementId,"__dashboard_section")},e.prototype.getDashboardSectionCameraScanRegionId=function(){return"".concat(this.elementId,"__dashboard_section_csr")},e.prototype.getDashboardSectionSwapLinkId=function(){return eh.SCAN_TYPE_CHANGE_ANCHOR_ID},e.prototype.getScanRegionId=function(){return"".concat(this.elementId,"__scan_region")},e.prototype.getDashboardId=function(){return"".concat(this.elementId,"__dashboard")},e.prototype.getHeaderMessageContainerId=function(){return"".concat(this.elementId,"__header_message")},e.prototype.getCameraPermissionButtonId=function(){return eh.CAMERA_PERMISSION_BUTTON_ID},e.prototype.getCameraScanRegion=function(){return document.getElementById(this.getDashboardSectionCameraScanRegionId())},e.prototype.getDashboardSectionSwapLink=function(){return document.getElementById(this.getDashboardSectionSwapLinkId())},e.prototype.getHeaderMessageDiv=function(){return document.getElementById(this.getHeaderMessageContainerId())},e}()},7818:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var n=r(551),o=r.n(n)},1877:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o.a}});var n=r(4080),o=r.n(n),i={};for(var a in n)"default"!==a&&(i[a]=(function(e){return n[e]}).bind(0,a));r.d(t,i)},357:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(8081)},1069:function(e,t,r){"use strict";let n;r.d(t,{zx:function(){return O},RQ:function(){return e1},qy:function(){return P},MF:function(){return R},Z0:function(){return X},OK:function(){return tH},Dg:function(){return tY},mQ:function(){return tV},oi:function(){return ep},o8:function(){return ez},Rz:function(){return eZ},GH:function(){return e_},ib:function(){return eH},mw:function(){return o}});var o=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`,i=r(7041),a=r(6300).Buffer;let s="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",l="inset 2px 2px 3px rgba(0,0,0,0.2)",c=()=>(0,i.iv)`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,u=({background:e="material",color:t="materialText"}={})=>(0,i.iv)`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:t})=>t[e]};
  color: ${({theme:e})=>e[t]};
`,d=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:r=2})=>(0,i.iv)`
  background-image: ${`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    ),linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`};
  background-color: ${t};
  background-size: ${`${2*r}px ${2*r}px`};
  background-position: 0 0, ${`${r}px ${r}px`};
`,f=()=>(0,i.iv)`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,p={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},h=({theme:e,topLeftInner:t,bottomRightInner:r,hasShadow:n=!1,hasInsetShadow:o=!1})=>[!!n&&s,!!o&&l,null!==t&&`inset 1px 1px 0px 1px ${e[t]}`,null!==r&&`inset -1px -1px 0 1px ${e[r]}`].filter(Boolean).join(", "),g=({invert:e=!1,style:t="button"}={})=>{let r={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return(0,i.iv)`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e[p[t][r.topLeftOuter]]};
    border-top-color: ${({theme:e})=>e[p[t][r.topLeftOuter]]};
    border-right-color: ${({theme:e})=>e[p[t][r.bottomRightOuter]]};
    border-bottom-color: ${({theme:e})=>e[p[t][r.bottomRightOuter]]};
    box-shadow: ${({theme:e,shadow:n})=>h({theme:e,topLeftInner:p[t][r.topLeftInner],bottomRightInner:p[t][r.bottomRightInner],hasShadow:n})};
  `},m=()=>(0,i.iv)`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,b="undefined"!=typeof btoa?btoa:e=>a.from(e).toString("base64"),y=(e,t=0)=>{let r=b(`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`);return`url(data:image/svg+xml;base64,${r})`},v=(e="default")=>(0,i.iv)`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>d({mainColor:"flat"===e?t.flatLight:t.material,secondaryColor:"flat"===e?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${u()}
    ${"flat"===e?f():g({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:e})=>e.material};
  }
  ::-webkit-scrollbar-button {
    ${u()}
    ${"flat"===e?f():g({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${"default"===e?g({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:e})=>y(e.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:e})=>y(e.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:e})=>y(e.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:e})=>y(e.materialText,0)};
  }
`;var A=r(2265);let w=i.ZP.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`;(0,A.forwardRef)(({children:e,underline:t=!0,...r},n)=>A.createElement(w,{ref:n,underline:t,...r},e)).displayName="Anchor";let x=i.ZP.header`
  ${g()};
  ${u()};

  position: ${e=>{var t;return null!==(t=e.position)&&void 0!==t?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;(0,A.forwardRef)(({children:e,fixed:t=!0,position:r="fixed",...n},o)=>A.createElement(x,{fixed:t,position:!1!==t?r:void 0,ref:o,...n},e)).displayName="AppBar";let E=()=>{};function S(e,t,r){return null!==r&&e>r?r:null!==t&&e<t?t:e}function T(e,t,r){return Number((Math.round((e-r)/t)*t+r).toFixed(function(e){if(1>Math.abs(e)){let t=e.toExponential().split("e-"),r=t[0].split(".")[1];return(r?r.length:0)+parseInt(t[1],10)}let t=e.toString().split(".")[1];return t?t.length:0}(t)))}function C(e){return"number"==typeof e?`${e}px`:e}let I=i.ZP.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:e})=>`
    height: ${e};
    width: ${e};
    `}
  border-radius: ${({square:e})=>e?0:"50%"};
  overflow: hidden;
  ${({noBorder:e,theme:t})=>!e&&`
    border-top: 2px solid ${t.borderDark};
    border-left: 2px solid ${t.borderDark};
    border-bottom: 2px solid ${t.borderLightest};
    border-right: 2px solid ${t.borderLightest};
    background: ${t.material};
  `}
  ${({src:e})=>!e&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,M=i.ZP.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;(0,A.forwardRef)(({alt:e="",children:t,noBorder:r=!1,size:n=35,square:o=!1,src:i,...a},s)=>A.createElement(I,{noBorder:r,ref:s,size:C(n),square:o,src:i,...a},i?A.createElement(M,{src:i,alt:e}):t)).displayName="Avatar";let D={sm:"28px",md:"36px",lg:"44px"},k=(0,i.iv)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>D[e]};
  width: ${({fullWidth:e,size:t="md",square:r})=>e?"100%":r?D[t]:"auto"};
  padding: ${({square:e})=>e?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:e})=>!e&&"2px"};
  }
  padding-top: ${({active:e,disabled:t})=>e&&!t&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,N=i.ZP.button`
  ${({active:e,disabled:t,primary:r,theme:n,variant:o})=>"flat"===o?(0,i.iv)`
          ${f()}
          ${r?`
          border: 2px solid ${n.checkmark};
            outline: 2px solid ${n.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${n.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!e&&!t&&m}
            outline-offset: -4px;
          }
        `:"menu"===o||"thin"===o?(0,i.iv)`
          ${u()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&g({style:"buttonThin"})}
          }
          &:active {
            ${!t&&g({style:"buttonThinPressed"})}
          }
          ${e&&g({style:"buttonThinPressed"})}
          ${t&&c()}
        `:(0,i.iv)`
          ${u()};
          border: none;
          ${t&&c()}
          ${e?d({mainColor:n.material,secondaryColor:n.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${r?(0,i.iv)`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${n.borderDarkest};
                `:(0,i.iv)`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${e?g({style:"raised"===o?"window":"button",invert:!0}):g({style:"raised"===o?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&g({style:"raised"===o?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&m}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${k}
`,O=(0,A.forwardRef)(({onClick:e,disabled:t=!1,children:r,type:n="button",fullWidth:o=!1,size:i="md",square:a=!1,active:s=!1,onTouchStart:l=E,primary:c=!1,variant:u="default",...d},f)=>A.createElement(N,{active:s,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:l,primary:c,ref:f,size:i,square:a,type:n,variant:u,...d},r));function L({defaultValue:e,onChange:t,onChangePropName:r="onChange",readOnly:n,value:o,valuePropName:i="value"}){let a=void 0!==o,[s,l]=(0,A.useState)(e),c=(0,A.useCallback)(e=>{a||l(e)},[a]);return a&&"function"!=typeof t&&!n&&console.warn(`Warning: You provided a \`${i}\` prop to a component without an \`${r}\` handler.${"value"===i?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${r}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${r}\` function that updates \`${i}\`.`}`),[a?o:s,c]}O.displayName="Button";let B=i.ZP.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>D[e.size]};
  width: ${e=>e.square?D[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>D[e.size]};
  color: ${({theme:e})=>e.materialText};
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  font-weight: ${({primary:e})=>e?"bold":"normal"};
  &:hover {
    ${({theme:e,$disabled:t})=>!t&&`
        color: ${e.materialTextInvert};
        background: ${e.hoverBackground};
      `}

    cursor: default;
  }
  ${e=>e.$disabled&&c()}
`,R=(0,A.forwardRef)(({size:e="lg",disabled:t,square:r,children:n,onClick:o,primary:i,...a},s)=>A.createElement(B,{$disabled:t,size:e,square:r,onClick:t?void 0:o,primary:i,role:"menuitem",ref:s,"aria-disabled":t,...a},n));R.displayName="MenuListItem";let P=i.ZP.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${g({style:"window"})}
  ${u()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;P.displayName="MenuList";let j=i.ZP.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${20}px;
  height: ${20}px;
  opacity: 0;
  z-index: -1;
`,U=i.ZP.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&c()}

  ${B} & {
    margin: 0;
    height: 100%;
  }
  ${B}:hover & {
    ${({$disabled:e,theme:t})=>!e&&(0,i.iv)`
        color: ${t.materialTextInvert};
      `};
  }
`,z=i.ZP.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${j}:focus ~ & {
    ${m}
  }
  ${j}:not(:disabled) ~ &:active {
    ${m}
  }
`,F=i.ZP.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:e})=>e.borderDark};
  border-top-color: ${({theme:e})=>e.borderDark};
  border-right-color: ${({theme:e})=>e.borderLightest};
  border-bottom-color: ${({theme:e})=>e.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e.borderDarkest};
    border-top-color: ${({theme:e})=>e.borderDarkest};
    border-right-color: ${({theme:e})=>e.borderLight};
    border-bottom-color: ${({theme:e})=>e.borderLight};

    pointer-events: none;
    ${e=>e.shadow&&`box-shadow:${l};`}
  }
`,_=i.ZP.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${v()}
`,$=(0,A.forwardRef)(({children:e,shadow:t=!0,...r},n)=>A.createElement(F,{ref:n,shadow:t,...r},A.createElement(_,null,e)));$.displayName="ScrollView";let H=(0,i.iv)`
  width: ${20}px;
  height: ${20}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Q=(0,i.ZP)(F)`
  ${H}
  width: ${20}px;
  height: ${20}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,Y=i.ZP.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${H}
  width: ${16}px;
  height: ${16}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,Z=i.ZP.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:e,theme:t})=>e?t.checkmarkDisabled:t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
  }
`,G=i.ZP.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>d({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,V={flat:Y,default:Q};(0,A.forwardRef)(({checked:e,className:t="",defaultChecked:r=!1,disabled:n=!1,indeterminate:o=!1,label:i="",onChange:a=E,style:s={},value:l,variant:c="default",...u},d)=>{var f;let[p,h]=L({defaultValue:r,onChange:a,readOnly:null!==(f=u.readOnly)&&void 0!==f?f:n,value:e}),g=(0,A.useCallback)(e=>{h(e.target.checked),a(e)},[a,h]),m=V[c],b=null;return o?b=G:p&&(b=Z),A.createElement(U,{$disabled:n,className:t,style:s},A.createElement(j,{disabled:n,onChange:n?void 0:g,readOnly:n,type:"checkbox",value:l,checked:p,"data-indeterminate":o,ref:d,...u}),A.createElement(m,{$disabled:n,role:"presentation"},b&&A.createElement(b,{$disabled:n,variant:c})),i&&A.createElement(z,null,i))}).displayName="Checkbox";let X=i.ZP.div`
  ${({orientation:e,theme:t,size:r="100%"})=>"vertical"===e?`
    height: ${C(r)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${C(r)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;X.displayName="Separator";let W=(0,i.ZP)(N)`
  padding-left: 8px;
`,q=(0,i.ZP)(X)`
  height: 21px;
  position: relative;
  top: 0;
`,K=i.ZP.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,J=i.ZP.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?(0,i.iv)`
          border: 2px solid ${({theme:e})=>e.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
          );
        `:(0,i.iv)`
          border: 2px solid ${({theme:e})=>e.materialText};
        `}
  ${K}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${m}
    outline-offset: -8px;
  }
`,ee=i.ZP.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?(0,i.iv)`
          border-top: 6px solid ${({theme:e})=>e.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
          );
        `:(0,i.iv)`
          border-top: 6px solid ${({theme:e})=>e.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:e})=>"flat"===e?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`;(0,A.forwardRef)(({value:e,defaultValue:t,onChange:r=E,disabled:n=!1,variant:o="default",...i},a)=>{var s;let[l,c]=L({defaultValue:t,onChange:r,readOnly:null!==(s=i.readOnly)&&void 0!==s?s:n,value:e});return A.createElement(W,{disabled:n,as:"div",variant:o,size:"md"},A.createElement(K,{onChange:e=>{c(e.target.value),r(e)},readOnly:n,disabled:n,value:null!=l?l:"#008080",type:"color",ref:a,...i}),A.createElement(J,{$disabled:n,color:null!=l?l:"#008080",role:"presentation"}),"default"===o&&A.createElement(q,{orientation:"vertical"}),A.createElement(ee,{$disabled:n,variant:o}))}).displayName="ColorInput";let et=i.ZP.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>(0,i.iv)`
    width: ${11*e}px;
    height: ${21*e}px;
    margin: ${e}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${d({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${e}px;
      width: ${9*e}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${e}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${2*e}px);
      top: ${2*e}px;
      left: ${e}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${e}px;
      width: ${9*e}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${e}px;
    }
    span.center:after {
      bottom: ${e}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${e}px;
      border-top: ${e}px solid var(--react95-digit-bg-color);
      border-bottom: ${e}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*e}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${e}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${2*e}px);
      top: ${e}px;
      left: ${2*e}px;
    }
  `}
`,er=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],en=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function eo({digit:e=0,pixelSize:t=2,...r}){let n=en[Number(e)].map((e,t)=>e?`${er[t]} active`:er[t]);return A.createElement(et,{pixelSize:t,...r},n.map((e,t)=>A.createElement("span",{className:e,key:t})))}let ei=i.ZP.div`
  ${g({style:"status"})}
  display: inline-flex;
  background: #000000;
`,ea={sm:1,md:2,lg:3,xl:4};(0,A.forwardRef)(({value:e=0,minLength:t=3,size:r="md",...n},o)=>{let i=(0,A.useMemo)(()=>e.toString().padStart(t,"0").split(""),[t,e]);return A.createElement(ei,{ref:o,...n},i.map((e,t)=>A.createElement(eo,{digit:e,pixelSize:ea[r],key:t})))}).displayName="Counter";let es=(0,i.iv)`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${D.md};
`,el=(0,i.ZP)(F).attrs({"data-testid":"variant-default"})`
  ${es}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,ec=i.ZP.div.attrs({"data-testid":"variant-flat"})`
  ${f()}
  ${es}
  position: relative;
`,eu=(0,i.iv)`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:e})=>e.canvasText};
  ${({disabled:e,variant:t})=>"flat"!==t&&e&&c()}
`,ed=i.ZP.input`
  ${eu}
  padding: 0 8px;
`,ef=i.ZP.textarea`
  ${eu}
  padding: 8px;
  resize: none;
  ${({variant:e})=>v(e)}
`,ep=(0,A.forwardRef)(({className:e,disabled:t=!1,fullWidth:r,onChange:n=E,shadow:o=!0,style:i,variant:a="default",...s},l)=>{let c="flat"===a?ec:el,u=(0,A.useMemo)(()=>{var e;return s.multiline?A.createElement(ef,{disabled:t,onChange:t?void 0:n,readOnly:t,ref:l,variant:a,...s}):A.createElement(ed,{disabled:t,onChange:t?void 0:n,readOnly:t,ref:l,type:null!==(e=s.type)&&void 0!==e?e:"text",variant:a,...s})},[t,n,s,l,a]);return A.createElement(c,{className:e,fullWidth:r,$disabled:t,shadow:o,style:i},u)});ep.displayName="TextInput";let eh=i.ZP.div`
  display: inline-flex;
  align-items: center;
`,eg=(0,i.ZP)(O)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>"flat"===e?(0,i.iv)`
          height: calc(50% - 1px);
        `:(0,i.iv)`
          height: 50%;
        `}
`,em=i.ZP.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>"flat"===e?(0,i.iv)`
          height: calc(${D.md} - 4px);
        `:(0,i.iv)`
          height: ${D.md};
          margin-left: 2px;
        `}
`,eb=i.ZP.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?(0,i.iv)`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:e})=>e.materialText};
        `:(0,i.iv)`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:e})=>e.materialText};
        `}
  ${eg}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?(0,i.iv)`
            border-bottom-color: ${({theme:e})=>e.materialTextDisabled};
          `:(0,i.iv)`
            border-top-color: ${({theme:e})=>e.materialTextDisabled};
          `}
  }
`,ey=(0,A.forwardRef)(({className:e,defaultValue:t,disabled:r=!1,max:n,min:o,onChange:i,readOnly:a,step:s=1,style:l,value:c,variant:u="default",width:d,...f},p)=>{let[h,g]=L({defaultValue:t,onChange:i,readOnly:a,value:c}),m=(0,A.useCallback)(e=>{g(parseFloat(e.target.value))},[g]),b=(0,A.useCallback)(e=>{let t=S(parseFloat(((null!=h?h:0)+e).toFixed(2)),null!=o?o:null,null!=n?n:null);g(t),null==i||i(t)},[n,o,i,g,h]),y=(0,A.useCallback)(()=>{void 0!==h&&(null==i||i(h))},[i,h]),v=(0,A.useCallback)(()=>{b(s)},[b,s]),w=(0,A.useCallback)(()=>{b(-s)},[b,s]),x="flat"===u?"flat":"raised";return A.createElement(eh,{className:e,style:{...l,width:void 0!==d?C(d):"auto"},...f},A.createElement(ep,{value:h,variant:u,onChange:m,disabled:r,type:"number",readOnly:a,ref:p,fullWidth:!0,onBlur:y}),A.createElement(em,{variant:u},A.createElement(eg,{"data-testid":"increment",variant:x,disabled:r||a,onClick:v},A.createElement(eb,{invert:!0})),A.createElement(eg,{"data-testid":"decrement",variant:x,disabled:r||a,onClick:w},A.createElement(eb,null))))});ey.displayName="NumberInput";let ev=e=>(0,A.useMemo)(()=>null!=e?e:function(){let e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",t="";for(let r=0;r<10;r+=1)t+=e[Math.floor(Math.random()*e.length)];return t}(),[e]),eA=(0,i.iv)`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,ew=(0,i.iv)`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,ex=i.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,eE=i.ZP.div`
  ${eA}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${ex}:focus & {
    ${ew}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,eS=(0,i.iv)`
  height: ${D.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?c():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,eT=(0,i.ZP)(F)`
  ${eS}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,eC=i.ZP.div`
  ${f()}
  ${eS}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,eI=i.ZP.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${eA}
  cursor: pointer;
  &:disabled {
    ${c()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,eM=(0,i.ZP)(N).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>"flat"===e?(0,i.iv)`
          height: 100%;
          margin-right: 0;
        `:(0,i.iv)`
          height: 100%;
        `}
  ${({native:e=!1,variant:t="default"})=>e&&("flat"===t?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:e=!1,native:t=!1})=>e||t?"none":"auto"}
`,eD=i.ZP.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:e=!1,theme:t})=>e?t.materialTextDisabled:t.materialText};
  ${({$disabled:e=!1,theme:t})=>e&&`
    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});
    border-top-color: ${t.materialTextDisabled};
    `}
  ${eM}:active & {
    margin-top: 2px;
  }
`,ek=i.ZP.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:e})=>e.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${s};
  ${({variant:e="default"})=>"flat"===e?(0,i.iv)`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:e})=>e.flatDark};
        `:(0,i.iv)`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:e})=>e.borderDarkest};
        `}
  ${({variant:e="default"})=>v(e)}
`,eN=i.ZP.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${D.md} - 4px);
  line-height: calc(${D.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?ew:""}
  user-select: none;
`,eO=[],eL=({className:e,defaultValue:t,disabled:r,native:n,onChange:o,options:i=eO,readOnly:a,style:s,value:l,variant:c,width:u})=>{var d;let f=(0,A.useMemo)(()=>i.filter(Boolean),[i]),[p,h]=L({defaultValue:null!=t?t:null===(d=null==f?void 0:f[0])||void 0===d?void 0:d.value,onChange:o,readOnly:a,value:l}),g=!(r||a),m=(0,A.useMemo)(()=>({className:e,style:{...s,width:u}}),[e,s,u]),b=(0,A.useMemo)(()=>A.createElement(eM,{as:"div","data-testid":"select-button",$disabled:r,native:n,tabIndex:-1,variant:"flat"===c?"flat":"raised"},A.createElement(eD,{"data-testid":"select-icon",$disabled:r})),[r,n,c]),y=(0,A.useMemo)(()=>"flat"===c?eC:eT,[c]);return(0,A.useMemo)(()=>({isEnabled:g,options:f,value:p,setValue:h,wrapperProps:m,DropdownButton:b,Wrapper:y}),[b,y,g,f,h,p,m])},eB={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},eR=({onBlur:e,onChange:t,onClose:r,onFocus:n,onKeyDown:o,onMouseDown:i,onOpen:a,open:s,options:l,readOnly:c,value:u,selectRef:d,setValue:f,wrapperRef:p})=>{let h=(0,A.useRef)(null),g=(0,A.useRef)([]),m=(0,A.useRef)(0),b=(0,A.useRef)(0),y=(0,A.useRef)(),v=(0,A.useRef)("search"),w=(0,A.useRef)(""),x=(0,A.useRef)(),[E,T]=L({defaultValue:!1,onChange:a,onChangePropName:"onOpen",readOnly:c,value:s,valuePropName:"open"}),C=(0,A.useMemo)(()=>{let e=l.findIndex(e=>e.value===u);return m.current=S(e,0,null),l[e]},[l,u]),[I,M]=(0,A.useState)(l[0]),D=(0,A.useCallback)(e=>{let t=h.current,r=g.current[e];if(!r||!t){y.current=e;return}y.current=void 0;let n=t.clientHeight,o=t.scrollTop,i=t.scrollTop+n,a=r.offsetTop,s=r.offsetHeight,l=r.offsetTop+r.offsetHeight;a<o&&t.scrollTo(0,a),l>i&&t.scrollTo(0,a-n+s),r.focus({preventScroll:!0})},[h]),k=(0,A.useCallback)((e,{scroll:t}={})=>{var r;let n;let o=l.length-1;switch(e){case"first":n=0;break;case"last":n=o;break;case"next":n=S(b.current+1,0,o);break;case"previous":n=S(b.current-1,0,o);break;case"selected":n=S(null!==(r=m.current)&&void 0!==r?r:0,0,o);break;default:n=e}b.current=n,M(l[n]),t&&D(n)},[b,l,D]),N=(0,A.useCallback)(({fromEvent:e})=>{T(!0),k("selected",{scroll:!0}),null==a||a({fromEvent:e})},[k,a,T]),O=(0,A.useCallback)(()=>{v.current="search",w.current="",clearTimeout(x.current)},[]),B=(0,A.useCallback)(({focusSelect:e,fromEvent:t})=>{var n;null==r||r({fromEvent:t}),T(!1),M(l[0]),O(),y.current=void 0,e&&(null===(n=d.current)||void 0===n||n.focus())},[O,r,l,d,T]),R=(0,A.useCallback)(({fromEvent:e})=>{E?B({focusSelect:!1,fromEvent:e}):N({fromEvent:e})},[B,N,E]),P=(0,A.useCallback)((e,{fromEvent:r})=>{m.current!==e&&(m.current=e,f(l[e].value),null==t||t(l[e],{fromEvent:r}))},[t,l,f]),j=(0,A.useCallback)(({focusSelect:e,fromEvent:t})=>{P(b.current,{fromEvent:t}),B({focusSelect:e,fromEvent:t})},[B,P]),U=(0,A.useCallback)((e,{fromEvent:t,select:r})=>{var n;switch("cycleFirstLetter"===v.current&&e!==w.current&&(v.current="search"),e===w.current?v.current="cycleFirstLetter":w.current+=e,v.current){case"search":{let n=l.findIndex(e=>{var t;return(null===(t=e.label)||void 0===t?void 0:t.toLocaleUpperCase().indexOf(w.current))===0});n<0&&(n=l.findIndex(t=>{var r;return(null===(r=t.label)||void 0===r?void 0:r.toLocaleUpperCase().indexOf(e))===0}),w.current=e),n>=0&&(r?P(n,{fromEvent:t}):k(n,{scroll:!0}));break}case"cycleFirstLetter":{let o=r?null!==(n=m.current)&&void 0!==n?n:-1:b.current,i=l.findIndex((t,r)=>{var n;return r>o&&(null===(n=t.label)||void 0===n?void 0:n.toLocaleUpperCase().indexOf(e))===0});i<0&&(i=l.findIndex(t=>{var r;return(null===(r=t.label)||void 0===r?void 0:r.toLocaleUpperCase().indexOf(e))===0})),i>=0&&(r?P(i,{fromEvent:t}):k(i,{scroll:!0}))}}clearTimeout(x.current),x.current=setTimeout(()=>{"search"===v.current&&(w.current="")},1e3)},[k,l,P]),z=(0,A.useCallback)(e=>{var t;0===e.button&&(e.preventDefault(),null===(t=d.current)||void 0===t||t.focus(),R({fromEvent:e}),null==i||i(e))},[i,d,R]),F=(0,A.useCallback)(e=>{j({focusSelect:!0,fromEvent:e})},[j]),_=(0,A.useCallback)(e=>{let{altKey:t,code:r,ctrlKey:n,metaKey:o,shiftKey:i}=e,{ARROW_DOWN:a,ARROW_UP:s,END:l,ENTER:c,ESC:u,HOME:d,SPACE:f,TAB:p}=eB,h=t||n||o||i;if((r!==p||!t&&!n&&!o)&&(r===p||!h))switch(r){case a:if(e.preventDefault(),!E){N({fromEvent:e});return}k("next",{scroll:!0});break;case s:if(e.preventDefault(),!E){N({fromEvent:e});return}k("previous",{scroll:!0});break;case l:if(e.preventDefault(),!E){N({fromEvent:e});return}k("last",{scroll:!0});break;case c:if(!E)return;e.preventDefault(),j({focusSelect:!0,fromEvent:e});break;case u:if(!E)return;e.preventDefault(),B({focusSelect:!0,fromEvent:e});break;case d:if(e.preventDefault(),!E){N({fromEvent:e});return}k("first",{scroll:!0});break;case f:e.preventDefault(),E?j({focusSelect:!0,fromEvent:e}):N({fromEvent:e});break;case p:if(!E)return;i||e.preventDefault(),j({focusSelect:!i,fromEvent:e});break;default:!h&&r.match(/^Key/)&&(e.preventDefault(),e.stopPropagation(),U(r.replace(/^Key/,""),{select:!E,fromEvent:e}))}},[k,B,E,N,U,j]),$=(0,A.useCallback)(e=>{_(e),null==o||o(e)},[_,o]),H=(0,A.useCallback)(e=>{k(e)},[k]),Q=(0,A.useCallback)(t=>{E||(O(),null==e||e(t))},[O,e,E]),Y=(0,A.useCallback)(e=>{O(),null==n||n(e)},[O,n]),Z=(0,A.useCallback)(e=>{h.current=e,void 0!==y.current&&D(y.current)},[D]),G=(0,A.useCallback)((e,t)=>{g.current[t]=e,y.current===t&&D(y.current)},[D]);return(0,A.useEffect)(()=>{if(!E)return()=>{};let e=e=>{var t;let r=e.target;(null===(t=p.current)||void 0===t?void 0:t.contains(r))||(e.preventDefault(),B({focusSelect:!1,fromEvent:e}))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[B,E,p]),(0,A.useMemo)(()=>({activeOption:I,handleActivateOptionIndex:H,handleBlur:Q,handleButtonKeyDown:$,handleDropdownKeyDown:_,handleFocus:Y,handleMouseDown:z,handleOptionClick:F,handleSetDropdownRef:Z,handleSetOptionRef:G,open:E,selectedOption:C}),[I,H,Q,$,Y,_,z,F,Z,G,E,C])};function eP({activateOptionIndex:e,active:t,index:r,onClick:n,option:o,selected:i,setRef:a}){let s=(0,A.useCallback)(()=>{e(r)},[e,r]),l=(0,A.useCallback)(e=>{a(e,r)},[r,a]),c=ev();return A.createElement(eN,{active:t,"aria-selected":i?"true":void 0,"data-value":o.value,id:c,onClick:n,onMouseEnter:s,ref:l,role:"option",tabIndex:0},o.label)}(0,A.forwardRef)(({className:e,defaultValue:t,disabled:r,onChange:n,options:o,readOnly:i,style:a,value:s,variant:l,width:c,...u},d)=>{let{isEnabled:f,options:p,setValue:h,value:g,DropdownButton:m,Wrapper:b}=eL({defaultValue:t,disabled:r,native:!0,onChange:n,options:o,readOnly:i,value:s,variant:l}),y=(0,A.useCallback)(e=>{let t=p.find(t=>t.value===e.target.value);t&&(h(t.value),null==n||n(t,{fromEvent:e}))},[n,p,h]);return A.createElement(b,{className:e,style:{...a,width:c}},A.createElement(ex,null,A.createElement(eI,{...u,disabled:r,onChange:f?y:E,ref:d,value:g},p.map((e,t)=>{var r;return A.createElement("option",{key:`${e.value}-${t}`,value:e.value},null!==(r=e.label)&&void 0!==r?r:e.value)})),m))}).displayName="SelectNative";let ej=(0,A.forwardRef)(function({"aria-label":e,"aria-labelledby":t,className:r,defaultValue:n,disabled:o=!1,formatDisplay:i,inputProps:a,labelId:s,menuMaxHeight:l,name:c,onBlur:u,onChange:d,onClose:f,onFocus:p,onKeyDown:h,onMouseDown:g,onOpen:m,open:b,options:y,readOnly:v,shadow:w=!0,style:x,variant:E="default",value:S,width:T="auto",...C},I){let{isEnabled:M,options:D,setValue:k,value:N,wrapperProps:O,DropdownButton:L,Wrapper:B}=eL({className:r,defaultValue:n,disabled:o,native:!1,onChange:d,options:y,style:x,readOnly:v,value:S,variant:E,width:T}),R=(0,A.useRef)(null),P=(0,A.useRef)(null),j=(0,A.useRef)(null),{activeOption:U,handleActivateOptionIndex:z,handleBlur:F,handleButtonKeyDown:_,handleDropdownKeyDown:$,handleFocus:H,handleMouseDown:Q,handleOptionClick:Y,handleSetDropdownRef:Z,handleSetOptionRef:G,open:V,selectedOption:X}=eR({onBlur:u,onChange:d,onClose:f,onFocus:p,onKeyDown:h,onMouseDown:g,onOpen:m,open:b,options:D,value:N,selectRef:P,setValue:k,wrapperRef:j});(0,A.useImperativeHandle)(I,()=>({focus:e=>{var t;null===(t=P.current)||void 0===t||t.focus(e)},node:R.current,value:String(N)}),[N]);let W=(0,A.useMemo)(()=>X?"function"==typeof i?i(X):X.label:"",[i,X]),q=(0,A.useMemo)(()=>l?{overflow:"auto",maxHeight:l}:void 0,[l]),K=ev(),J=(0,A.useMemo)(()=>D.map((e,t)=>{let r=`${N}-${t}`,n=e===U,o=e===X;return A.createElement(eP,{activateOptionIndex:z,active:n,index:t,key:r,onClick:Y,option:e,selected:o,setRef:G})}),[U,z,Y,G,D,X,N]);return A.createElement(B,{...O,$disabled:o,ref:j,shadow:w,style:{...x,width:T}},A.createElement("input",{name:c,ref:R,type:"hidden",value:String(N),...a}),A.createElement(ex,{"aria-disabled":o,"aria-expanded":V,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":null!=t?t:s,"aria-owns":M&&V?K:void 0,onBlur:F,onFocus:H,onKeyDown:_,onMouseDown:M?Q:g,ref:P,role:"button",tabIndex:M?1:void 0,...C},A.createElement(eE,null,W),L),M&&V&&A.createElement(ek,{id:K,onKeyDown:$,ref:Z,role:"listbox",style:q,tabIndex:0,variant:E},J))});ej.displayName="Select";let eU=i.ZP.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,ez=(0,A.forwardRef)(function({children:e,noPadding:t=!1,...r},n){return A.createElement(eU,{noPadding:t,ref:n,...r},e)});ez.displayName="Toolbar";let eF=i.ZP.div`
  padding: 16px;
`,e_=(0,A.forwardRef)(function({children:e,...t},r){return A.createElement(eF,{ref:r,...t},e)});e_.displayName="WindowContent";let e$=i.ZP.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>!1===e?(0,i.iv)`
          background: ${({theme:e})=>e.headerNotActiveBackground};
          color: ${({theme:e})=>e.headerNotActiveText};
        `:(0,i.iv)`
          background: ${({theme:e})=>e.headerBackground};
          color: ${({theme:e})=>e.headerText};
        `}

  ${N} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,eH=(0,A.forwardRef)(function({active:e=!0,children:t,...r},n){return A.createElement(e$,{active:e,ref:n,...r},t)});eH.displayName="WindowHeader";let eQ=i.ZP.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${g({style:"window"})}
  ${u()}
`,eY=i.ZP.span`
  ${({theme:e})=>(0,i.iv)`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${e.borderLightest} 16.67%,
      ${e.material} 16.67%,
      ${e.material} 33.33%,
      ${e.borderDark} 33.33%,
      ${e.borderDark} 50%,
      ${e.borderLightest} 50%,
      ${e.borderLightest} 66.67%,
      ${e.material} 66.67%,
      ${e.material} 83.33%,
      ${e.borderDark} 83.33%,
      ${e.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,eZ=(0,A.forwardRef)(({children:e,resizable:t=!1,resizeRef:r,shadow:n=!0,...o},i)=>A.createElement(eQ,{ref:i,shadow:n,...o},e,t&&A.createElement(eY,{"data-testid":"resizeHandle",ref:r})));eZ.displayName="Window";let eG=(0,i.ZP)($)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,eV=i.ZP.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,eX=i.ZP.div`
  display: flex;
  flex-wrap: wrap;
`,eW=i.ZP.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,eq=i.ZP.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,eK=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];(0,A.forwardRef)(({className:e,date:t=new Date().toISOString(),onAccept:r,onCancel:n,shadow:o=!0},i)=>{let[a,s]=(0,A.useState)(()=>(function(e){let t=new Date(Date.parse(e));return{day:t.getUTCDate(),month:t.getUTCMonth(),year:t.getUTCFullYear()}})(t)),{year:l,month:c,day:u}=a,d=(0,A.useCallback)(({value:e})=>{s(t=>({...t,month:e}))},[]),f=(0,A.useCallback)(e=>{s(t=>({...t,year:e}))},[]),p=(0,A.useCallback)(e=>{s(t=>({...t,day:e}))},[]),h=(0,A.useCallback)(()=>{let e=[a.year,a.month+1,a.day].map(e=>String(e).padStart(2,"0")).join("-");null==r||r(e)},[a.day,a.month,a.year,r]),g=(0,A.useMemo)(()=>{let e=Array.from({length:42}),t=new Date(l,c,1).getDay(),r=u,n=new Date(l,c+1,0).getDate();return r=r<n?r:n,e.forEach((o,i)=>{if(i>=t&&i<n+t){let n=i-t+1;e[i]=A.createElement(eW,{key:i,onClick:()=>{p(n)}},A.createElement(eq,{active:n===r},n))}else e[i]=A.createElement(eW,{key:i})}),e},[u,p,c,l]);return A.createElement(eZ,{className:e,ref:i,shadow:o,style:{margin:20}},A.createElement(eH,null,A.createElement("span",{role:"img","aria-label":"\uD83D\uDCC6"},"\uD83D\uDCC6"),"Date"),A.createElement(e_,null,A.createElement(ez,{noPadding:!0,style:{justifyContent:"space-between"}},A.createElement(ej,{options:eK,value:c,onChange:d,width:128,menuMaxHeight:200}),A.createElement(ey,{value:l,onChange:f,width:100})),A.createElement(eG,null,A.createElement(eV,null,A.createElement(eW,null,"S"),A.createElement(eW,null,"M"),A.createElement(eW,null,"T"),A.createElement(eW,null,"W"),A.createElement(eW,null,"T"),A.createElement(eW,null,"F"),A.createElement(eW,null,"S")),A.createElement(eX,null,g)),A.createElement(ez,{noPadding:!0,style:{justifyContent:"space-between"}},A.createElement(O,{fullWidth:!0,onClick:n,disabled:!n},"Cancel"),A.createElement(O,{fullWidth:!0,onClick:r?h:void 0,disabled:!r},"OK"))))}).displayName="DatePicker";let eJ=e=>{switch(e){case"status":case"well":return(0,i.iv)`
        ${g({style:"status"})}
      `;case"window":case"outside":return(0,i.iv)`
        ${g({style:"window"})}
      `;case"field":return(0,i.iv)`
        ${g({style:"field"})}
      `;default:return(0,i.iv)`
        ${g()}
      `}},e0=i.ZP.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>eJ(e)}
  ${({variant:e})=>u("field"===e?{background:"canvas",color:"canvasText"}:void 0)}
`,e1=(0,A.forwardRef)(({children:e,shadow:t=!1,variant:r="window",...n},o)=>A.createElement(e0,{ref:o,shadow:t,variant:r,...n},e));e1.displayName="Frame";let e2=i.ZP.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>"flat"===t?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>"flat"!==e&&(0,i.iv)`
      box-shadow: -1px -1px 0 1px ${({theme:e})=>e.borderDark},
        inset -1px -1px 0 1px ${({theme:e})=>e.borderDark};
    `}
  ${e=>e.$disabled&&c()}
`,e4=i.ZP.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>"flat"===t?e.canvas:e.material};
`;(0,A.forwardRef)(({label:e,disabled:t=!1,variant:r="default",children:n,...o},i)=>A.createElement(e2,{"aria-disabled":t,$disabled:t,variant:r,ref:i,...o},e&&A.createElement(e4,{variant:r},e),n)).displayName="GroupBox",i.ZP.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${C(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`.displayName="Handle";let e5=i.ZP.div`
  display: inline-block;
  height: ${({size:e})=>C(e)};
  width: ${({size:e})=>C(e)};
`,e3=i.ZP.span`
  display: block;
  background: ${"url('data:image/gif;base64,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')"};
  background-size: cover;
  width: 100%;
  height: 100%;
`;(0,A.forwardRef)(({size:e=30,...t},r)=>A.createElement(e5,{size:e,ref:r,...t},A.createElement(e3,null))).displayName="Hourglass";let e6=i.ZP.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,e8=i.ZP.div`
  position: relative;
`,e7=i.ZP.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:e})=>e.material};
  border-top: 4px solid ${({theme:e})=>e.borderLightest};
  border-left: 4px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 4px solid ${({theme:e})=>e.borderDark};
  border-right: 4px solid ${({theme:e})=>e.borderDark};

  outline: 1px dotted ${({theme:e})=>e.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:e})=>e.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:e})=>e.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,e9=(0,i.ZP)(F).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,te=i.ZP.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:e})=>e.material};
  border-left: 2px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 2px solid ${({theme:e})=>e.borderDarkest};
  border-right: 2px solid ${({theme:e})=>e.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:e})=>e.material};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:e})=>e.material};
    border: 2px solid ${({theme:e})=>e.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
      1px 1px 0 1px ${({theme:e})=>e.borderDarkest};
  }
`;(0,A.forwardRef)(({backgroundStyles:e,children:t,...r},n)=>A.createElement(e6,{ref:n,...r},A.createElement(e8,null,A.createElement(e7,null,A.createElement(e9,{style:e},t)),A.createElement(te,null)))).displayName="Monitor";let tt=i.ZP.div`
  display: inline-block;
  height: ${D.md};
  width: 100%;
`,tr=(0,i.ZP)(F)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,tn=(0,i.iv)`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,to=i.ZP.div`
  position: relative;
  top: 4px;
  ${tn}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,ti=i.ZP.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${tn}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,ta=i.ZP.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,ts=i.ZP.span`
  display: inline-block;
  width: ${17}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`;(0,A.forwardRef)(({hideValue:e=!1,shadow:t=!0,value:r,variant:n="default",...o},i)=>{let a=e?null:`${r}%`,s=(0,A.useRef)(null),[l,c]=(0,A.useState)([]),u=(0,A.useCallback)(()=>{s.current&&void 0!==r&&c(Array.from({length:Math.round(r/100*s.current.getBoundingClientRect().width/17)}))},[r]);return(0,A.useEffect)(()=>(u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)),[u]),A.createElement(tt,{"aria-valuenow":void 0!==r?Math.round(r):void 0,ref:i,role:"progressbar",variant:n,...o},A.createElement(tr,{variant:n,shadow:t},"default"===n?A.createElement(A.Fragment,null,A.createElement(to,{"data-testid":"defaultProgress1"},a),A.createElement(ti,{"data-testid":"defaultProgress2",value:r},a)):A.createElement(ta,{ref:s,"data-testid":"tileProgress"},l.map((e,t)=>A.createElement(ts,{key:t})))))}).displayName="ProgressBar";let tl=(0,i.iv)`
  width: ${20}px;
  height: ${20}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,tc=(0,i.ZP)(F)`
  ${tl}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,tu=i.ZP.div`
  ${f()}
  ${tl}
  outline: none;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:e})=>e.flatDark};
    border-radius: 50%;
  }
`,td=i.ZP.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
`,tf={flat:tu,default:tc};(0,A.forwardRef)(({checked:e,className:t="",disabled:r=!1,label:n="",onChange:o,style:i={},variant:a="default",...s},l)=>{let c=tf[a];return A.createElement(U,{$disabled:r,className:t,style:i},A.createElement(c,{$disabled:r,role:"presentation"},e&&A.createElement(td,{$disabled:r,variant:a})),A.createElement(j,{disabled:r,onChange:r?void 0:o,readOnly:r,type:"radio",checked:e,ref:l,...s}),n&&A.createElement(z,null,n))}).displayName="Radio";let tp="undefined"!=typeof window?A.useLayoutEffect:A.useEffect;function th(e){let t=A.useRef(e);return tp(()=>{t.current=e}),A.useCallback((...e)=>(0,t.current)(...e),[])}function tg(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function tm(e,t){return(0,A.useMemo)(()=>null==e&&null==t?null:r=>{tg(e,r),tg(t,r)},[e,t])}var tb=r(4887);let ty=!0,tv=!1,tA={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function tw(e){e.metaKey||e.altKey||e.ctrlKey||(ty=!0)}function tx(){ty=!1}function tE(){"hidden"===this.visibilityState&&tv&&(ty=!0)}function tS(e){let{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return ty||function(e){if("type"in e){let{type:t,tagName:r}=e;if("INPUT"===r&&tA[t]&&!e.readOnly||"TEXTAREA"===r&&!e.readOnly)return!0}return"isContentEditable"in e&&!!e.isContentEditable}(t)}function tT(){tv=!0,window.clearTimeout(n),n=window.setTimeout(()=>{tv=!1},100)}function tC(e,t){if(void 0!==t&&"changedTouches"in e){for(let r=0;r<e.changedTouches.length;r+=1){let n=e.changedTouches[r];if(n.identifier===t)return{x:n.clientX,y:n.clientY}}return!1}return"clientX"in e&&{x:e.clientX,y:e.clientY}}function tI(e){return e&&e.ownerDocument||document}let tM=i.ZP.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:e})=>e?"41px":"39px"};
    ${({isFocused:e,theme:t})=>e&&`
        outline: 2px dotted ${t.materialText};
        `}
  }

  ${({orientation:e,size:t})=>"vertical"===e?(0,i.iv)`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:e})=>e?"41px":"39px"};
          }
        `:(0,i.iv)`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:e})=>e?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
`,tD=()=>(0,i.iv)`
  position: absolute;
  ${({orientation:e})=>"vertical"===e?(0,i.iv)`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:(0,i.iv)`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,tk=(0,i.ZP)(F)`
  ${tD()}
`,tN=(0,i.ZP)(F)`
  ${tD()}

  border-left-color: ${({theme:e})=>e.flatLight};
  border-top-color: ${({theme:e})=>e.flatLight};
  border-right-color: ${({theme:e})=>e.canvas};
  border-bottom-color: ${({theme:e})=>e.canvas};
  &:before {
    border-left-color: ${({theme:e})=>e.flatDark};
    border-top-color: ${({theme:e})=>e.flatDark};
    border-right-color: ${({theme:e})=>e.flatLight};
    border-bottom-color: ${({theme:e})=>e.flatLight};
  }
`,tO=i.ZP.span`
  position: relative;
  ${({orientation:e})=>"vertical"===e?(0,i.iv)`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:(0,i.iv)`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>"flat"===e?(0,i.iv)`
          ${f()}
          outline: 2px solid ${({theme:e})=>e.flatDark};
          background: ${({theme:e})=>e.flatLight};
        `:(0,i.iv)`
          ${u()}
          ${g()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&d({mainColor:t.material,secondaryColor:t.borderLightest})}
`,tL=i.ZP.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>"vertical"===e?(0,i.iv)`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${6}px;
          border-bottom: 2px solid ${({theme:e})=>e.materialText};
        `:(0,i.iv)`
          bottom: ${-6}px;
          height: ${6}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:e})=>e.materialText};
          border-right: 1px solid ${({theme:e})=>e.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&(0,i.iv)`
      ${c()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,tB=i.ZP.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>"vertical"===e?(0,i.iv)`
          transform: translate(${8}px, ${7}px);
        `:(0,i.iv)`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`;(0,A.forwardRef)(({defaultValue:e,disabled:t=!1,marks:r=!1,max:n=100,min:o=0,name:i,onChange:a,onChangeCommitted:s,onMouseDown:l,orientation:c="horizontal",size:u="100%",step:d=1,value:f,variant:p="default",...h},g)=>{let m="flat"===p?tN:tk,b="vertical"===c,[y=o,v]=L({defaultValue:e,onChange:null!=a?a:s,value:f}),{isFocusVisible:w,onBlurVisible:x,ref:E}={isFocusVisible:tS,onBlurVisible:tT,ref:(0,A.useCallback)(e=>{let t=(0,tb.findDOMNode)(e);if(null!=t){var r;(r=t.ownerDocument).addEventListener("keydown",tw,!0),r.addEventListener("mousedown",tx,!0),r.addEventListener("pointerdown",tx,!0),r.addEventListener("touchstart",tx,!0),r.addEventListener("visibilitychange",tE,!0)}},[])},[I,M]=(0,A.useState)(!1),D=(0,A.useRef)(),k=(0,A.useRef)(null),N=tm(E,D),O=tm(g,N),B=th(e=>{w(e)&&M(!0)}),R=th(()=>{!1!==I&&(M(!1),x())}),P=(0,A.useRef)(),j=(0,A.useMemo)(()=>!0===r&&Number.isFinite(d)?[...Array(Math.round((n-o)/d)+1)].map((e,t)=>({label:void 0,value:o+d*t})):Array.isArray(r)?r:[],[r,n,o,d]),U=th(e=>{let t=(n-o)/10,r=j.map(e=>e.value),i=r.indexOf(y),l=0;switch(e.key){case"Home":l=o;break;case"End":l=n;break;case"PageUp":d&&(l=y+t);break;case"PageDown":d&&(l=y-t);break;case"ArrowRight":case"ArrowUp":l=d?y+d:r[i+1]||r[r.length-1];break;case"ArrowLeft":case"ArrowDown":l=d?y-d:r[i-1]||r[0];break;default:return}e.preventDefault(),d&&(l=T(l,d,o)),v(l=S(l,o,n)),M(!0),null==a||a(l),null==s||s(l)}),z=(0,A.useCallback)(e=>{let t;if(!D.current)return 0;let r=D.current.getBoundingClientRect();if(t=(n-o)*(b?(r.bottom-e.y)/r.height:(e.x-r.left)/r.width)+o,d)t=T(t,d,o);else{let e=j.map(e=>e.value),r=function(e,t){var r;let{index:n}=null!==(r=e.reduce((e,r,n)=>{let o=Math.abs(t-r);return null===e||o<e.distance||o===e.distance?{distance:o,index:n}:e},null))&&void 0!==r?r:{};return null!=n?n:-1}(e,t);t=e[r]}return S(t,o,n)},[j,n,o,d,b]),F=th(e=>{var t;let r=tC(e,P.current);if(!r)return;let n=z(r);null===(t=k.current)||void 0===t||t.focus(),v(n),M(!0),null==a||a(n)}),_=th(e=>{let t=tC(e,P.current);if(!t)return;let r=z(t);null==s||s(r),P.current=void 0;let n=tI(D.current);n.removeEventListener("mousemove",F),n.removeEventListener("mouseup",_),n.removeEventListener("touchmove",F),n.removeEventListener("touchend",_)}),$=th(e=>{var t;null==l||l(e),e.preventDefault(),null===(t=k.current)||void 0===t||t.focus(),M(!0);let r=tC(e,P.current);if(r){let e=z(r);v(e),null==a||a(e)}let n=tI(D.current);n.addEventListener("mousemove",F),n.addEventListener("mouseup",_)}),H=th(e=>{var t;e.preventDefault();let r=e.changedTouches[0];null!=r&&(P.current=r.identifier),null===(t=k.current)||void 0===t||t.focus(),M(!0);let n=tC(e,P.current);if(n){let e=z(n);v(e),null==a||a(e)}let o=tI(D.current);o.addEventListener("touchmove",F),o.addEventListener("touchend",_)});return(0,A.useEffect)(()=>{let{current:e}=D;null==e||e.addEventListener("touchstart",H);let t=tI(e);return()=>{null==e||e.removeEventListener("touchstart",H),t.removeEventListener("mousemove",F),t.removeEventListener("mouseup",_),t.removeEventListener("touchmove",F),t.removeEventListener("touchend",_)}},[_,F,H]),A.createElement(tM,{$disabled:t,hasMarks:!!j.length,isFocused:I,onMouseDown:$,orientation:c,ref:O,size:C(u),...h},A.createElement("input",{disabled:t,name:i,type:"hidden",value:null!=y?y:0}),j&&j.map(e=>A.createElement(tL,{$disabled:t,"data-testid":"tick",key:e.value/(n-o)*100,orientation:c,style:{[b?"bottom":"left"]:`${(e.value-o)/(n-o)*100}%`}},e.label&&A.createElement(tB,{"aria-hidden":!0,"data-testid":"mark",orientation:c},e.label))),A.createElement(m,{orientation:c,variant:p}),A.createElement(tO,{$disabled:t,"aria-disabled":!!t||void 0,"aria-orientation":c,"aria-valuemax":n,"aria-valuemin":o,"aria-valuenow":y,onBlur:R,onFocus:B,onKeyDown:U,orientation:c,ref:k,role:"slider",style:{[b?"bottom":"left"]:`${(b?-100:0)+100*(y-o)/(n-o)}%`},tabIndex:t?void 0:0,variant:p}))}).displayName="Slider";let tR=i.ZP.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${l};
  overflow-y: auto;
`;(0,A.forwardRef)(function({children:e,...t},r){return A.createElement(tR,{ref:r,...t},e)}).displayName="TableBody";let tP=i.ZP.td`
  padding: 0 8px;
`;(0,A.forwardRef)(function({children:e,...t},r){return A.createElement(tP,{ref:r,...t},e)}).displayName="TableDataCell";let tj=i.ZP.thead`
  display: table-header-group;
`;(0,A.forwardRef)(function({children:e,...t},r){return A.createElement(tj,{ref:r,...t},e)}).displayName="TableHead";let tU=i.ZP.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:e})=>e.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${g()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&(0,i.iv)`
      &:active {
        &:before {
          ${g({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:e})=>e.materialText};
  ${({$disabled:e})=>e&&c()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&c()}
  }
`;(0,A.forwardRef)(function({disabled:e=!1,children:t,onClick:r,onTouchStart:n=E,sort:o,...i},a){return A.createElement(tU,{$disabled:e,"aria-disabled":e,"aria-sort":"asc"===o?"ascending":"desc"===o?"descending":void 0,onClick:e?void 0:r,onTouchStart:e?void 0:n,ref:a,...i},A.createElement("div",null,t))}).displayName="TableHeadCell";let tz=i.ZP.tr`
  color: inherit;
  display: table-row;
  height: calc(${D.md} - 2px);
  line-height: calc(${D.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`;(0,A.forwardRef)(function({children:e,...t},r){return A.createElement(tz,{ref:r,...t},e)}).displayName="TableRow";let tF=i.ZP.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,t_=(0,i.ZP)(F)`
  &:before {
    box-shadow: none;
  }
`;(0,A.forwardRef)(({children:e,...t},r)=>A.createElement(t_,null,A.createElement(tF,{ref:r,...t},e))).displayName="Table";let t$=i.ZP.button`
  ${u()}
  ${g()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${D.md};
  line-height: ${D.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${m}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${D.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:e})=>e.material};
    bottom: -4px;
    left: 2px;
  }
`,tH=(0,A.forwardRef)(({value:e,onClick:t,selected:r=!1,children:n,...o},i)=>A.createElement(t$,{"aria-selected":r,selected:r,onClick:r=>null==t?void 0:t(e,r),ref:i,role:"tab",...o},n));tH.displayName="Tab";let tQ=i.ZP.div`
  ${u()}
  ${g()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,tY=(0,A.forwardRef)(({children:e,...t},r)=>A.createElement(tQ,{ref:r,...t},e));tY.displayName="TabBody";let tZ=i.ZP.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,tG=i.ZP.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
  }
`,tV=(0,A.forwardRef)(({value:e,onChange:t=E,children:r,rows:n=1,...o},i)=>{let a=(0,A.useMemo)(()=>{var o;let i=(function(e,t){let r=[];for(let n=t;n>0;n-=1)r.push(e.splice(0,Math.ceil(e.length/n)));return r})(null!==(o=A.Children.map(r,r=>{if(!A.isValidElement(r))return null;let n={selected:r.props.value===e,onClick:t};return A.cloneElement(r,n)}))&&void 0!==o?o:[],n).map((e,t)=>({key:t,tabs:e})),a=i.findIndex(e=>e.tabs.some(e=>e.props.selected));return i.push(i.splice(a,1)[0]),i},[r,t,n,e]);return A.createElement(tZ,{...o,isMultiRow:n>1,role:"tablist",ref:i},a.map(e=>A.createElement(tG,{key:e.key},e.tabs)))});tV.displayName="Tabs";let tX=["blur","focus"],tW=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function tq(e){return"nativeEvent"in e&&tX.includes(e.type)}function tK(e){return"nativeEvent"in e&&tW.includes(e.type)}let tJ={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},t0=i.ZP.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${s};
  text-align: center;
  font-size: 1rem;
  ${e=>tJ[e.position]}
`,t1=i.ZP.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`;(0,A.forwardRef)(({className:e,children:t,disableFocusListener:r=!1,disableMouseListener:n=!1,enterDelay:o=1e3,leaveDelay:i=0,onBlur:a,onClose:s,onFocus:l,onMouseEnter:c,onMouseLeave:u,onOpen:d,style:f,text:p,position:h="top",...g},m)=>{let[b,y]=(0,A.useState)(!1),[v,w]=(0,A.useState)(),[x,E]=(0,A.useState)(),S=!r,T=!n,C=e=>{window.clearTimeout(v),window.clearTimeout(x),w(window.setTimeout(()=>{y(!0),null==d||d(e)},o))},I=e=>{e.persist(),tq(e)?null==l||l(e):tK(e)&&(null==c||c(e)),C(e)},M=e=>{window.clearTimeout(v),window.clearTimeout(x),E(window.setTimeout(()=>{y(!1),null==s||s(e)},i))},D=e=>{e.persist(),tq(e)?null==a||a(e):tK(e)&&(null==u||u(e)),M(e)},k=S?D:void 0,N=S?I:void 0,O=T?I:void 0,L=T?D:void 0;return A.createElement(t1,{"data-testid":"tooltip-wrapper",onBlur:k,onFocus:N,onMouseEnter:O,onMouseLeave:L,tabIndex:S?0:void 0},A.createElement(t0,{className:e,"data-testid":"tooltip",position:h,ref:m,show:b,style:f,...g},p),t)}).displayName="Tooltip";let t2=(0,i.ZP)(z)`
  white-space: nowrap;
`,t4=(0,i.iv)`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":(0,i.iv)`
          cursor: pointer;

          :focus {
            ${t2} {
              background: ${({theme:e})=>e.hoverBackground};
              color: ${({theme:e})=>e.materialTextInvert};
              outline: 2px dotted ${({theme:e})=>e.focusSecondary};
            }
          }
        `}
`,t5=i.ZP.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&(0,i.iv)`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:e})=>e.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:e})=>e.borderDark};
      font-size: 12px;
    }
  }
`,t3=i.ZP.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?(0,i.iv)`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:e})=>e.material};
            }
          }
        `:(0,i.iv)`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:e})=>e.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:e})=>e.borderDark};
    }
  }
`,t6=i.ZP.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,t8=i.ZP.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${t4};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,t7=(0,i.ZP)(U)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${t4};
`,t9=i.ZP.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function re(e,t){return e.includes(t)?e.filter(e=>e!==t):[...e,t]}function rt(e){e.preventDefault()}function rr({className:e,disabled:t,expanded:r,innerRef:n,level:o,select:i,selected:a,style:s,tree:l=[]}){let c=0===o,u=(0,A.useCallback)(n=>{var l,u;let d=!!(n.items&&n.items.length>0),f=r.includes(n.id),p=null!==(l=t||n.disabled)&&void 0!==l&&l,h=p?rt:e=>i(e,n),g=p?rt:e=>i(e,n),m=a===n.id,b=A.createElement(t9,{"aria-hidden":!0},n.icon);return A.createElement(t3,{key:n.label,isRootLevel:c,role:"treeitem","aria-expanded":f,"aria-selected":m,hasItems:d},d?A.createElement(t6,{open:f},A.createElement(t8,{onClick:h,$disabled:p},A.createElement(t7,{$disabled:p},b,A.createElement(t2,null,n.label))),f&&A.createElement(rr,{className:e,disabled:p,expanded:r,level:o+1,select:i,selected:a,style:s,tree:null!==(u=n.items)&&void 0!==u?u:[]})):A.createElement(t7,{as:"button",$disabled:p,onClick:g},b,A.createElement(t2,null,n.label)))},[e,t,r,c,o,i,a,s]);return A.createElement(t5,{className:c?e:void 0,style:c?s:void 0,ref:c?n:void 0,role:c?"tree":"group",isRootLevel:c},l.map(u))}(0,A.forwardRef)(function({className:e,defaultExpanded:t=[],defaultSelected:r,disabled:n=!1,expanded:o,onNodeSelect:i,onNodeToggle:a,selected:s,style:l,tree:c=[]},u){let[d,f]=L({defaultValue:t,onChange:a,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[p,h]=L({defaultValue:r,onChange:i,onChangePropName:"onNodeSelect",value:s,valuePropName:"selected"}),g=(0,A.useCallback)((e,t)=>{a&&a(e,re(d,t)),f(e=>re(e,t))},[d,a,f]),m=(0,A.useCallback)((e,t)=>{h(t),i&&i(e,t)},[i,h]),b=(0,A.useCallback)((e,t)=>{e.preventDefault(),m(e,t.id),t.items&&t.items.length&&g(e,t.id)},[m,g]);return A.createElement(rr,{className:e,disabled:n,expanded:d,level:0,innerRef:u,select:b,selected:p,style:l,tree:c})}).displayName="TreeView"},2316:function(e){"use strict";e.exports={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"}},905:function(e,t){"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DOMAttributeNames:function(){return n},default:function(){return a},isEqualNode:function(){return i}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:r}=e,o=document.createElement(t);for(let e in r){if(!r.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===r[e])continue;let i=n[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?o[i]=!!r[e]:o.setAttribute(i,r[e])}let{children:i,dangerouslySetInnerHTML:a}=r;return a?o.innerHTML=a.__html||"":i&&(o.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),o}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let r=t.getAttribute("nonce");if(r&&!e.getAttribute("nonce")){let n=t.cloneNode(!0);return n.setAttribute("nonce",""),n.nonce=r,r===e.nonce&&e.isEqualNode(n)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let r=t[e.type]||[];r.push(e),t[e.type]=r});let n=t.title?t.title[0]:null,o="";if(n){let{children:e}=n.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{r(e,t[e]||[])})}}}r=(e,t)=>{let r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]"),a=Number(n.content),s=[];for(let t=0,r=n.previousElementSibling;t<a;t++,r=(null==r?void 0:r.previousElementSibling)||null){var l;(null==r?void 0:null==(l=r.tagName)?void 0:l.toLowerCase())===e&&s.push(r)}let c=t.map(o).filter(e=>{for(let t=0,r=s.length;t<r;t++)if(i(s[t],e))return s.splice(t,1),!1;return!0});s.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>r.insertBefore(e,n)),n.content=(a-s.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9189:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4080:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return v},handleClientScriptLoad:function(){return m},initScriptLoader:function(){return b}});let n=r(9920),o=r(1452),i=r(7437),a=n._(r(4887)),s=o._(r(2265)),l=r(6590),c=r(905),u=r(9189),d=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],h=e=>{if(a.default.preinit){e.forEach(e=>{a.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}},g=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:a="",strategy:s="afterInteractive",onError:l,stylesheets:u}=e,g=r||t;if(g&&f.has(g))return;if(d.has(t)){f.add(g),d.get(t).then(n,l);return}let m=()=>{o&&o(),f.add(g)},b=document.createElement("script"),y=new Promise((e,t)=>{b.addEventListener("load",function(t){e(),n&&n.call(this,t),m()}),b.addEventListener("error",function(e){t(e)})}).catch(function(e){l&&l(e)});for(let[r,n]of(i?(b.innerHTML=i.__html||"",m()):a?(b.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",m()):t&&(b.src=t,d.set(t,y)),Object.entries(e))){if(void 0===n||p.includes(r))continue;let e=c.DOMAttributeNames[r]||r.toLowerCase();b.setAttribute(e,n)}"worker"===s&&b.setAttribute("type","text/partytown"),b.setAttribute("data-nscript",s),u&&h(u),document.body.appendChild(b)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>g(e))}):g(e)}function b(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function y(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:o=null,strategy:c="afterInteractive",onError:d,stylesheets:p,...h}=e,{updateScripts:m,scripts:b,getIsSsr:y,appDir:v,nonce:A}=(0,s.useContext)(l.HeadManagerContext),w=(0,s.useRef)(!1);(0,s.useEffect)(()=>{let e=t||r;w.current||(o&&e&&f.has(e)&&o(),w.current=!0)},[o,t,r]);let x=(0,s.useRef)(!1);if((0,s.useEffect)(()=>{!x.current&&("afterInteractive"===c?g(e):"lazyOnload"===c&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>g(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>g(e))})),x.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(m?(b[c]=(b[c]||[]).concat([{id:t,src:r,onLoad:n,onReady:o,onError:d,...h}]),m(b)):y&&y()?f.add(t||r):y&&!y()&&g(e)),v){if(p&&p.forEach(e=>{a.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return r?(a.default.preload(r,h.integrity?{as:"script",integrity:h.integrity,nonce:A}:{as:"script",nonce:A}),(0,i.jsx)("script",{nonce:A,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r,{...h,id:t}])+")"}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,i.jsx)("script",{nonce:A,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...h,id:t}])+")"}}));"afterInteractive"===c&&r&&a.default.preload(r,h.integrity?{as:"script",integrity:h.integrity,nonce:A}:{as:"script",nonce:A})}return null}Object.defineProperty(y,"__nextScript",{value:!0});let v=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6300:function(e){!function(){var t={675:function(e,t){"use strict";t.byteLength=function(e){var t=l(e),r=t[0],n=t[1];return(r+n)*3/4-n},t.toByteArray=function(e){var t,r,i=l(e),a=i[0],s=i[1],c=new o((a+s)*3/4-s),u=0,d=s>0?a-4:a;for(r=0;r<d;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=255&t;return 2===s&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,c[u++]=255&t),1===s&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,c[u++]=t>>8&255,c[u++]=255&t),c},t.fromByteArray=function(e){for(var t,n=e.length,o=n%3,i=[],a=0,s=n-o;a<s;a+=16383)i.push(function(e,t,n){for(var o,i=[],a=t;a<n;a+=3)i.push(r[(o=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]))>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return i.join("")}(e,a,a+16383>s?s:a+16383));return 1===o?i.push(r[(t=e[n-1])>>2]+r[t<<4&63]+"=="):2===o&&i.push(r[(t=(e[n-2]<<8)+e[n-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),i.join("")};for(var r=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,s=i.length;a<s;++a)r[a]=i[a],n[i.charCodeAt(a)]=a;function l(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},72:function(e,t,r){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var n=r(675),o=r(783),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function a(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,s.prototype),t}function s(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return u(e)}return l(e,t,r)}function l(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!s.isEncoding(t))throw TypeError("Unknown encoding: "+t);var r=0|p(e,t),n=a(r),o=n.write(e,t);return o!==r&&(n=n.slice(0,o)),n}(e,t);if(ArrayBuffer.isView(e))return d(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(D(e,ArrayBuffer)||e&&D(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(D(e,SharedArrayBuffer)||e&&D(e.buffer,SharedArrayBuffer)))return function(e,t,r){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),s.prototype),n}(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return s.from(n,t,r);var o=function(e){if(s.isBuffer(e)){var t,r=0|f(e.length),n=a(r);return 0===n.length||e.copy(n,0,0,r),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?a(0):d(e):"Buffer"===e.type&&Array.isArray(e.data)?d(e.data):void 0}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return s.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function c(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function u(e){return c(e),a(e<0?0:0|f(e))}function d(e){for(var t=e.length<0?0:0|f(e.length),r=a(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function f(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function p(e,t){if(s.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||D(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var o=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return T(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return I(e).length;default:if(o)return n?-1:T(e).length;t=(""+t).toLowerCase(),o=!0}}function h(e,t,r){var o,i,a=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=t;i<r;++i)o+=k[e[i]];return o}(this,t,r);case"utf8":case"utf-8":return y(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}(this,t,r);case"base64":return o=t,i=r,0===o&&i===this.length?n.fromByteArray(this):n.fromByteArray(this.slice(o,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){for(var n=e.slice(t,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(this,t,r);default:if(a)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),a=!0}}function g(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function m(e,t,r,n,o){var i;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(i=r=+r)!=i&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return -1;r=e.length-1}else if(r<0){if(!o)return -1;r=0}if("string"==typeof t&&(t=s.from(t,n)),s.isBuffer(t))return 0===t.length?-1:b(e,t,r,n,o);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):b(e,[t],r,n,o);throw TypeError("val must be string, number or Buffer")}function b(e,t,r,n,o){var i,a=1,s=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;a=2,s/=2,l/=2,r/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(o){var u=-1;for(i=r;i<s;i++)if(c(e,i)===c(t,-1===u?0:i-u)){if(-1===u&&(u=i),i-u+1===l)return u*a}else -1!==u&&(i-=i-u),u=-1}else for(r+l>s&&(r=s-l),i=r;i>=0;i--){for(var d=!0,f=0;f<l;f++)if(c(e,i+f)!==c(t,f)){d=!1;break}if(d)return i}return -1}function y(e,t,r){r=Math.min(e.length,r);for(var n=[],o=t;o<r;){var i,a,s,l,c=e[o],u=null,d=c>239?4:c>223?3:c>191?2:1;if(o+d<=r)switch(d){case 1:c<128&&(u=c);break;case 2:(192&(i=e[o+1]))==128&&(l=(31&c)<<6|63&i)>127&&(u=l);break;case 3:i=e[o+1],a=e[o+2],(192&i)==128&&(192&a)==128&&(l=(15&c)<<12|(63&i)<<6|63&a)>2047&&(l<55296||l>57343)&&(u=l);break;case 4:i=e[o+1],a=e[o+2],s=e[o+3],(192&i)==128&&(192&a)==128&&(192&s)==128&&(l=(15&c)<<18|(63&i)<<12|(63&a)<<6|63&s)>65535&&l<1114112&&(u=l)}null===u?(u=65533,d=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),o+=d}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);for(var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function v(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function A(e,t,r,n,o,i){if(!s.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<i)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function w(e,t,r,n,o,i){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function x(e,t,r,n,i){return t=+t,r>>>=0,i||w(e,t,r,4,34028234663852886e22,-34028234663852886e22),o.write(e,t,r,n,23,4),r+4}function E(e,t,r,n,i){return t=+t,r>>>=0,i||w(e,t,r,8,17976931348623157e292,-17976931348623157e292),o.write(e,t,r,n,52,8),r+8}t.Buffer=s,t.SlowBuffer=function(e){return+e!=e&&(e=0),s.alloc(+e)},t.INSPECT_MAX_BYTES=50,t.kMaxLength=2147483647,s.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),s.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}}),s.poolSize=8192,s.from=function(e,t,r){return l(e,t,r)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array),s.alloc=function(e,t,r){return(c(e),e<=0)?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)},s.allocUnsafe=function(e){return u(e)},s.allocUnsafeSlow=function(e){return u(e)},s.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==s.prototype},s.compare=function(e,t){if(D(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),D(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(e)||!s.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},s.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return s.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,n=s.allocUnsafe(t),o=0;for(r=0;r<e.length;++r){var i=e[r];if(D(i,Uint8Array)&&(i=s.from(i)),!s.isBuffer(i))throw TypeError('"list" argument must be an Array of Buffers');i.copy(n,o),o+=i.length}return n},s.byteLength=p,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)g(this,t,t+1);return this},s.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},s.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},s.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?y(this,0,e):h.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(e){if(!s.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===s.compare(this,e)},s.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},i&&(s.prototype[i]=s.prototype.inspect),s.prototype.compare=function(e,t,r,n,o){if(D(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,o>>>=0,this===e)return 0;for(var i=o-n,a=r-t,l=Math.min(i,a),c=this.slice(n,o),u=e.slice(t,r),d=0;d<l;++d)if(c[d]!==u[d]){i=c[d],a=u[d];break}return i<a?-1:a<i?1:0},s.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},s.prototype.indexOf=function(e,t,r){return m(this,e,t,r,!0)},s.prototype.lastIndexOf=function(e,t,r){return m(this,e,t,r,!1)},s.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,i,a,s,l,c,u,d,f,p,h,g,m=this.length-t;if((void 0===r||r>m)&&(r=m),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var b=!1;;)switch(n){case"hex":return function(e,t,r,n){r=Number(r)||0;var o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=t.length;n>i/2&&(n=i/2);for(var a=0;a<n;++a){var s=parseInt(t.substr(2*a,2),16);if(s!=s)break;e[r+a]=s}return a}(this,e,t,r);case"utf8":case"utf-8":return l=t,c=r,M(T(e,this.length-l),this,l,c);case"ascii":return u=t,d=r,M(C(e),this,u,d);case"latin1":case"binary":return o=this,i=e,a=t,s=r,M(C(i),o,a,s);case"base64":return f=t,p=r,M(I(e),this,f,p);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h=t,g=r,M(function(e,t){for(var r,n,o=[],i=0;i<e.length&&!((t-=2)<0);++i)n=(r=e.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(e,this.length-h),this,h,g);default:if(b)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),b=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},s.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,s.prototype),n},s.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n},s.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);for(var n=this[e+--t],o=1;t>0&&(o*=256);)n+=this[e+--t]*o;return n},s.prototype.readUInt8=function(e,t){return e>>>=0,t||v(e,1,this.length),this[e]},s.prototype.readUInt16LE=function(e,t){return e>>>=0,t||v(e,2,this.length),this[e]|this[e+1]<<8},s.prototype.readUInt16BE=function(e,t){return e>>>=0,t||v(e,2,this.length),this[e]<<8|this[e+1]},s.prototype.readUInt32LE=function(e,t){return e>>>=0,t||v(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},s.prototype.readUInt32BE=function(e,t){return e>>>=0,t||v(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},s.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*t)),n},s.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);for(var n=t,o=1,i=this[e+--n];n>0&&(o*=256);)i+=this[e+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*t)),i},s.prototype.readInt8=function(e,t){return(e>>>=0,t||v(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},s.prototype.readInt16LE=function(e,t){e>>>=0,t||v(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(e,t){e>>>=0,t||v(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(e,t){return e>>>=0,t||v(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},s.prototype.readInt32BE=function(e,t){return e>>>=0,t||v(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},s.prototype.readFloatLE=function(e,t){return e>>>=0,t||v(e,4,this.length),o.read(this,e,!0,23,4)},s.prototype.readFloatBE=function(e,t){return e>>>=0,t||v(e,4,this.length),o.read(this,e,!1,23,4)},s.prototype.readDoubleLE=function(e,t){return e>>>=0,t||v(e,8,this.length),o.read(this,e,!0,52,8)},s.prototype.readDoubleBE=function(e,t){return e>>>=0,t||v(e,8,this.length),o.read(this,e,!1,52,8)},s.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;A(this,e,t,r,o,0)}var i=1,a=0;for(this[t]=255&e;++a<r&&(i*=256);)this[t+a]=e/i&255;return t+r},s.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;A(this,e,t,r,o,0)}var i=r-1,a=1;for(this[t+i]=255&e;--i>=0&&(a*=256);)this[t+i]=e/a&255;return t+r},s.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,1,255,0),this[t]=255&e,t+1},s.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},s.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var o=Math.pow(2,8*r-1);A(this,e,t,r,o-1,-o)}var i=0,a=1,s=0;for(this[t]=255&e;++i<r&&(a*=256);)e<0&&0===s&&0!==this[t+i-1]&&(s=1),this[t+i]=(e/a>>0)-s&255;return t+r},s.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var o=Math.pow(2,8*r-1);A(this,e,t,r,o-1,-o)}var i=r-1,a=1,s=0;for(this[t+i]=255&e;--i>=0&&(a*=256);)e<0&&0===s&&0!==this[t+i+1]&&(s=1),this[t+i]=(e/a>>0)-s&255;return t+r},s.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},s.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},s.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeFloatLE=function(e,t,r){return x(this,e,t,!0,r)},s.prototype.writeFloatBE=function(e,t,r){return x(this,e,t,!1,r)},s.prototype.writeDoubleLE=function(e,t,r){return E(this,e,t,!0,r)},s.prototype.writeDoubleBE=function(e,t,r){return E(this,e,t,!1,r)},s.prototype.copy=function(e,t,r,n){if(!s.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var o=n-r;if(this===e&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(t,r,n);else if(this===e&&r<t&&t<n)for(var i=o-1;i>=0;--i)e[i+t]=this[i+r];else Uint8Array.prototype.set.call(e,this.subarray(r,n),t);return o},s.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!s.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var o,i=e.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{var a=s.isBuffer(e)?e:s.from(e,n),l=a.length;if(0===l)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=a[o%l]}return this};var S=/[^+/0-9A-Za-z-_]/g;function T(e,t){t=t||1/0;for(var r,n=e.length,o=null,i=[],a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!o){if(r>56319||a+1===n){(t-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),o=r;continue}r=(o-55296<<10|r-56320)+65536}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function C(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}function I(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(S,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function M(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length)&&!(o>=e.length);++o)t[o+r]=e[o];return o}function D(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}var k=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var n=16*r,o=0;o<16;++o)t[n+o]=e[r]+e[o];return t}()},783:function(e,t){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */t.read=function(e,t,r,n,o){var i,a,s=8*o-n-1,l=(1<<s)-1,c=l>>1,u=-7,d=r?o-1:0,f=r?-1:1,p=e[t+d];for(d+=f,i=p&(1<<-u)-1,p>>=-u,u+=s;u>0;i=256*i+e[t+d],d+=f,u-=8);for(a=i&(1<<-u)-1,i>>=-u,u+=n;u>0;a=256*a+e[t+d],d+=f,u-=8);if(0===i)i=1-c;else{if(i===l)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,n),i-=c}return(p?-1:1)*a*Math.pow(2,i-n)},t.write=function(e,t,r,n,o,i){var a,s,l,c=8*i-o-1,u=(1<<c)-1,d=u>>1,f=23===o?5960464477539062e-23:0,p=n?0:i-1,h=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(s=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+d>=1?t+=f/l:t+=f*Math.pow(2,1-d),t*l>=2&&(a++,l/=2),a+d>=u?(s=0,a=u):a+d>=1?(s=(t*l-1)*Math.pow(2,o),a+=d):(s=t*Math.pow(2,d-1)*Math.pow(2,o),a=0));o>=8;e[r+p]=255&s,p+=h,s/=256,o-=8);for(a=a<<o|s,c+=o;c>0;e[r+p]=255&a,p+=h,a/=256,c-=8);e[r+p-h]|=128*g}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},a=!0;try{t[e](i,i.exports,n),a=!1}finally{a&&delete r[e]}return i.exports}n.ab="//";var o=n(72);e.exports=o}()},8081:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l=[],c=!1,u=-1;function d(){c&&n&&(c=!1,n.length?l=n.concat(l):u=-1,l.length&&f())}function f(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||c||s(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},a=!0;try{t[e](i,i.exports,n),a=!1}finally{a&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let n=r(9920);r(7437),r(2265);let o=n._(r(148));function i(e,t){var r;let n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};"function"==typeof e&&(n.loader=e);let i={...n,...t};return(0,o.default)({...i,modules:null==(r=i.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},912:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let n=r(5592);function o(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return r}},148:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let n=r(7437),o=r(2265),i=r(912),a=r(1481);function s(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},c=function(e){let t={...l,...e},r=(0,o.lazy)(()=>t.loader().then(s)),c=t.loading;function u(e){let s=c?(0,n.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,l=t.ssr?(0,n.jsxs)(n.Fragment,{children:["undefined"==typeof window?(0,n.jsx)(a.PreloadCss,{moduleIds:t.modules}):null,(0,n.jsx)(r,{...e})]}):(0,n.jsx)(i.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(r,{...e})});return(0,n.jsx)(o.Suspense,{fallback:s,children:l})}return u.displayName="LoadableComponent",u}},1481:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return i}});let n=r(7437),o=r(8512);function i(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let r=(0,o.getExpectedRequestStore)("next/dynamic css"),i=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files.filter(e=>e.endsWith(".css"));i.push(...t)}}return 0===i.length?null:(0,n.jsx)(n.Fragment,{children:i.map(e=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:r.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},6889:function(e){e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var c=i[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(o=r?r.call(n,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}},7041:function(e,t,r){"use strict";r.d(t,{f6:function(){return ta},vJ:function(){return tg},iv:function(){return td},ZP:function(){return tp}});var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t,r){if(r||2==arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var i=r(2265),a=r(6889),s=r.n(a),l="-ms-",c="-moz-",u="-webkit-",d="comm",f="rule",p="decl",h="@keyframes",g=Math.abs,m=String.fromCharCode,b=Object.assign;function y(e,t){return(e=t.exec(e))?e[0]:e}function v(e,t,r){return e.replace(t,r)}function A(e,t,r){return e.indexOf(t,r)}function w(e,t){return 0|e.charCodeAt(t)}function x(e,t,r){return e.slice(t,r)}function E(e){return e.length}function S(e,t){return t.push(e),e}function T(e,t){return e.filter(function(e){return!y(e,t)})}var C=1,I=1,M=0,D=0,k=0,N="";function O(e,t,r,n,o,i,a,s){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:C,column:I,length:a,return:"",siblings:s}}function L(e,t){return b(O("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function B(e){for(;e.root;)e=L(e.root,{children:[e]});S(e,e.siblings)}function R(){return k=D<M?w(N,D++):0,I++,10===k&&(I=1,C++),k}function P(){return w(N,D)}function j(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function U(e){var t,r;return(t=D-1,r=function e(t){for(;R();)switch(k){case t:return D;case 34:case 39:34!==t&&39!==t&&e(k);break;case 40:41===t&&e(t);break;case 92:R()}return D}(91===e?e+2:40===e?e+1:e),x(N,t,r)).trim()}function z(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function F(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case p:return e.return=e.return||e.value;case d:return"";case h:return e.return=e.value+"{"+z(e.children,n)+"}";case f:if(!E(e.value=e.props.join(",")))return""}return E(r=z(e.children,n))?e.return=e.value+"{"+r+"}":""}function _(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case p:e.return=function e(t,r,n){var o;switch(o=r,45^w(t,0)?(((o<<2^w(t,0))<<2^w(t,1))<<2^w(t,2))<<2^w(t,3):0){case 5103:return u+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+t+t;case 4789:return c+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return u+t+c+t+l+t+t;case 5936:switch(w(t,r+11)){case 114:return u+t+l+v(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return u+t+l+v(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return u+t+l+v(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return u+t+l+t+t;case 6165:return u+t+l+"flex-"+t+t;case 5187:return u+t+v(t,/(\w+).+(:[^]+)/,u+"box-$1$2"+l+"flex-$1$2")+t;case 5443:return u+t+l+"flex-item-"+v(t,/flex-|-self/g,"")+(y(t,/flex-|baseline/)?"":l+"grid-row-"+v(t,/flex-|-self/g,""))+t;case 4675:return u+t+l+"flex-line-pack"+v(t,/align-content|flex-|-self/g,"")+t;case 5548:return u+t+l+v(t,"shrink","negative")+t;case 5292:return u+t+l+v(t,"basis","preferred-size")+t;case 6060:return u+"box-"+v(t,"-grow","")+u+t+l+v(t,"grow","positive")+t;case 4554:return u+v(t,/([^-])(transform)/g,"$1"+u+"$2")+t;case 6187:return v(v(v(t,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),t,"")+t;case 5495:case 3959:return v(t,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return v(v(t,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+t+t;case 4200:if(!y(t,/flex-|baseline/))return l+"grid-column-align"+x(t,r)+t;break;case 2592:case 3360:return l+v(t,"template-","")+t;case 4384:case 3616:if(n&&n.some(function(e,t){return r=t,y(e.props,/grid-\w+-end/)}))return~A(t+(n=n[r].value),"span",0)?t:l+v(t,"-start","")+t+l+"grid-row-span:"+(~A(n,"span",0)?y(n,/\d+/):+y(n,/\d+/)-+y(t,/\d+/))+";";return l+v(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(e){return y(e.props,/grid-\w+-start/)})?t:l+v(v(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return v(t,/(.+)-inline(.+)/,u+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(E(t)-1-r>6)switch(w(t,r+1)){case 109:if(45!==w(t,r+4))break;case 102:return v(t,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+c+(108==w(t,r+3)?"$3":"$2-$3"))+t;case 115:return~A(t,"stretch",0)?e(v(t,"stretch","fill-available"),r,n)+t:t}break;case 5152:case 5920:return v(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,r,n,o,i,a,s){return l+r+":"+n+s+(o?l+r+"-span:"+(i?a:+a-+n)+s:"")+t});case 4949:if(121===w(t,r+6))return v(t,":",":"+u)+t;break;case 6444:switch(w(t,45===w(t,14)?18:11)){case 120:return v(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(45===w(t,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+l+"$2box$3")+t;case 100:return v(t,":",":"+l)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return v(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,r);return;case h:return z([L(e,{value:v(e.value,"@","@"+u)})],n);case f:if(e.length){var o,i;return o=r=e.props,i=function(t){switch(y(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":B(L(e,{props:[v(t,/:(read-\w+)/,":"+c+"$1")]})),B(L(e,{props:[t]})),b(e,{props:T(r,n)});break;case"::placeholder":B(L(e,{props:[v(t,/:(plac\w+)/,":"+u+"input-$1")]})),B(L(e,{props:[v(t,/:(plac\w+)/,":"+c+"$1")]})),B(L(e,{props:[v(t,/:(plac\w+)/,l+"input-$1")]})),B(L(e,{props:[t]})),b(e,{props:T(r,n)})}return""},o.map(i).join("")}}}function $(e,t,r,n,o,i,a,s,l,c,u,d){for(var p=o-1,h=0===o?i:[""],m=h.length,b=0,y=0,A=0;b<n;++b)for(var w=0,E=x(e,p+1,p=g(y=a[b])),S=e;w<m;++w)(S=(y>0?h[w]+" "+E:v(E,/&\f/g,h[w])).trim())&&(l[A++]=S);return O(e,t,r,0===o?f:s,l,c,u,d)}function H(e,t,r,n,o){return O(e,t,r,p,x(e,0,n),x(e,n+1,-1),n,o)}var Q={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Y=r(357),Z=void 0!==Y&&void 0!==Y.env&&(Y.env.REACT_APP_SC_ATTR||Y.env.SC_ATTR)||"data-styled",G="active",V="data-styled-version",X="6.1.11",W="/*!sc*/\n",q="undefined"!=typeof window&&"HTMLElement"in window,K=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==Y&&void 0!==Y.env&&void 0!==Y.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==Y.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==Y.env.REACT_APP_SC_DISABLE_SPEEDY&&Y.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==Y&&void 0!==Y.env&&void 0!==Y.env.SC_DISABLE_SPEEDY&&""!==Y.env.SC_DISABLE_SPEEDY&&"false"!==Y.env.SC_DISABLE_SPEEDY&&Y.env.SC_DISABLE_SPEEDY),J={},ee=Object.freeze([]),et=Object.freeze({});function er(e,t,r){return void 0===r&&(r=et),e.theme!==r.theme&&e.theme||t||r.theme}var en=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),eo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ei=/(^-|-$)/g;function ea(e){return e.replace(eo,"-").replace(ei,"")}var es=/(a)(d)/gi,el=function(e){return String.fromCharCode(e+(e>25?39:97))};function ec(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=el(t%52)+r;return(el(t%52)+r).replace(es,"$1-$2")}var eu,ed=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},ef=function(e){return ed(5381,e)};function ep(e){return"string"==typeof e}var eh="function"==typeof Symbol&&Symbol.for,eg=eh?Symbol.for("react.memo"):60115,em=eh?Symbol.for("react.forward_ref"):60112,eb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ey={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ev={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},eA=((eu={})[em]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},eu[eg]=ev,eu);function ew(e){return("type"in e&&e.type.$$typeof)===eg?ev:"$$typeof"in e?eA[e.$$typeof]:eb}var ex=Object.defineProperty,eE=Object.getOwnPropertyNames,eS=Object.getOwnPropertySymbols,eT=Object.getOwnPropertyDescriptor,eC=Object.getPrototypeOf,eI=Object.prototype;function eM(e){return"function"==typeof e}function eD(e){return"object"==typeof e&&"styledComponentId"in e}function ek(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function eN(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function eO(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function eL(e,t){Object.defineProperty(e,"toString",{value:t})}function eB(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var eR=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw eB(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=n;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,i=n;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(W);return t},e}(),eP=new Map,ej=new Map,eU=1,ez=function(e){if(eP.has(e))return eP.get(e);for(;ej.has(eU);)eU++;var t=eU++;return eP.set(e,t),ej.set(t,e),t},eF=function(e,t){eU=t+1,eP.set(e,t),ej.set(t,e)},e_="style[".concat(Z,"][").concat(V,'="').concat(X,'"]'),e$=new RegExp("^".concat(Z,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),eH=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},eQ=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(W),o=[],i=0,a=n.length;i<a;i++){var s=n[i].trim();if(s){var l=s.match(e$);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(eF(u,c),eH(e,u,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}},eY=function(e){var t,n=document.head,o=e||n,i=document.createElement("style"),a=(t=Array.from(o.querySelectorAll("style[".concat(Z,"]"))))[t.length-1],s=void 0!==a?a.nextSibling:null;i.setAttribute(Z,G),i.setAttribute(V,X);var l=r.nc;return l&&i.setAttribute("nonce",l),o.insertBefore(i,s),i},eZ=function(){function e(e){this.element=eY(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw eB(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),eG=function(){function e(e){this.element=eY(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),eV=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),eX=q,eW={isServer:!q,useCSSOMInjection:!K},eq=function(){function e(e,t,r){void 0===e&&(e=et),void 0===t&&(t={});var o=this;this.options=n(n({},eW),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&q&&eX&&(eX=!1,function(e){for(var t=document.querySelectorAll(e_),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(Z)!==G&&(eQ(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),eL(this,function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=0;o<r;o++)(function(r){var o=ej.get(r);if(void 0!==o){var i=e.names.get(o),a=t.getGroup(r);if(void 0!==i&&0!==a.length){var s="".concat(Z,".g").concat(r,'[id="').concat(o,'"]'),l="";void 0!==i&&i.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),n+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(W)}}})(o);return n}(o)})}return e.registerId=function(e){return ez(e)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(n(n({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){var e,t,r;return this.tag||(this.tag=(t=(e=this.options).useCSSOMInjection,r=e.target,new eR(e.isServer?new eV(r):t?new eZ(r):new eG(r))))},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(ez(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(ez(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(ez(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),eK=/&/g,eJ=/^\s*\/\/.*$/gm;function e0(e){var t,r,n,o=void 0===e?et:e,i=o.options,a=void 0===i?et:i,s=o.plugins,l=void 0===s?ee:s,c=function(e,n,o){return o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},u=l.slice();u.push(function(e){e.type===f&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(eK,r).replace(n,c))}),a.prefix&&u.push(_),u.push(F);var p=function(e,o,i,s){void 0===o&&(o=""),void 0===i&&(i=""),void 0===s&&(s="&"),t=s,r=o,n=RegExp("\\".concat(r,"\\b"),"g");var l,c,f,p,h,b,y=e.replace(eJ,""),T=(h=function e(t,r,n,o,i,a,s,l,c){for(var u,f=0,p=0,h=s,b=0,y=0,T=0,M=1,L=1,B=1,z=0,F="",_=i,Q=a,Y=o,Z=F;L;)switch(T=z,z=R()){case 40:if(108!=T&&58==w(Z,h-1)){-1!=A(Z+=v(U(z),"&","&\f"),"&\f",g(f?l[f-1]:0))&&(B=-1);break}case 34:case 39:case 91:Z+=U(z);break;case 9:case 10:case 13:case 32:Z+=function(e){for(;k=P();)if(k<33)R();else break;return j(e)>2||j(k)>3?"":" "}(T);break;case 92:Z+=function(e,t){for(var r;--t&&R()&&!(k<48)&&!(k>102)&&(!(k>57)||!(k<65))&&(!(k>70)||!(k<97)););return r=D+(t<6&&32==P()&&32==R()),x(N,e,r)}(D-1,7);continue;case 47:switch(P()){case 42:case 47:S(O(u=function(e,t){for(;R();)if(e+k===57)break;else if(e+k===84&&47===P())break;return"/*"+x(N,t,D-1)+"*"+m(47===e?e:R())}(R(),D),r,n,d,m(k),x(u,2,-2),0,c),c);break;default:Z+="/"}break;case 123*M:l[f++]=E(Z)*B;case 125*M:case 59:case 0:switch(z){case 0:case 125:L=0;case 59+p:-1==B&&(Z=v(Z,/\f/g,"")),y>0&&E(Z)-h&&S(y>32?H(Z+";",o,n,h-1,c):H(v(Z," ","")+";",o,n,h-2,c),c);break;case 59:Z+=";";default:if(S(Y=$(Z,r,n,f,p,i,l,F,_=[],Q=[],h,a),a),123===z){if(0===p)e(Z,r,Y,Y,_,a,h,l,Q);else switch(99===b&&110===w(Z,3)?100:b){case 100:case 108:case 109:case 115:e(t,Y,Y,o&&S($(t,Y,Y,0,0,i,l,F,i,_=[],h,Q),Q),i,Q,h,l,o?_:Q);break;default:e(Z,Y,Y,Y,[""],Q,0,l,Q)}}}f=p=y=0,M=B=1,F=Z="",h=s;break;case 58:h=1+E(Z),y=T;default:if(M<1){if(123==z)--M;else if(125==z&&0==M++&&125==(k=D>0?w(N,--D):0,I--,10===k&&(I=1,C--),k))continue}switch(Z+=m(z),z*M){case 38:B=p>0?1:(Z+="\f",-1);break;case 44:l[f++]=(E(Z)-1)*B,B=1;break;case 64:45===P()&&(Z+=U(R())),b=P(),p=h=E(F=Z+=function(e){for(;!j(P());)R();return x(N,e,D)}(D)),z++;break;case 45:45===T&&2==E(Z)&&(M=0)}}return a}("",null,null,null,[""],(p=f=i||o?"".concat(i," ").concat(o," { ").concat(y," }"):y,C=I=1,M=E(N=p),D=0,f=[]),0,[0],f),N="",h);a.namespace&&(T=function e(t,r){return t.map(function(t){return"rule"===t.type&&(t.value="".concat(r," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(r," ")),t.props=t.props.map(function(e){return"".concat(r," ").concat(e)})),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=e(t.children,r)),t})}(T,a.namespace));var L=[];return z(T,(c=(l=u.concat((b=function(e){return L.push(e)},function(e){!e.root&&(e=e.return)&&b(e)}))).length,function(e,t,r,n){for(var o="",i=0;i<c;i++)o+=l[i](e,t,r,n)||"";return o})),L};return p.hash=l.length?l.reduce(function(e,t){return t.name||eB(15),ed(e,t.name)},5381).toString():"",p}var e1=new eq,e2=e0(),e4=i.createContext({shouldForwardProp:void 0,styleSheet:e1,stylis:e2}),e5=(e4.Consumer,i.createContext(void 0));function e3(){return(0,i.useContext)(e4)}function e6(e){var t=(0,i.useState)(e.stylisPlugins),r=t[0],n=t[1],o=e3().styleSheet,a=(0,i.useMemo)(function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,o]),l=(0,i.useMemo)(function(){return e0({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,i.useEffect)(function(){s()(r,e.stylisPlugins)||n(e.stylisPlugins)},[e.stylisPlugins]);var c=(0,i.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:l}},[e.shouldForwardProp,a,l]);return i.createElement(e4.Provider,{value:c},i.createElement(e5.Provider,{value:l},e.children))}var e8=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=e2);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,eL(this,function(){throw eB(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=e2),this.name+e.hash},e}();function e7(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;n>="A"&&n<="Z"?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var e9=function(e){return null==e||!1===e||""===e},te=function(e){var t=[];for(var r in e){var n=e[r];e.hasOwnProperty(r)&&!e9(n)&&(Array.isArray(n)&&n.isCss||eM(n)?t.push("".concat(e7(r),":"),n,";"):eO(n)?t.push.apply(t,o(o(["".concat(r," {")],te(n),!1),["}"],!1)):t.push("".concat(e7(r),": ").concat(null==n||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||r in Q||r.startsWith("--")?String(n).trim():"".concat(n,"px"),";")))}return t};function tt(e,t,r,n){return e9(e)?[]:eD(e)?[".".concat(e.styledComponentId)]:eM(e)?!eM(e)||e.prototype&&e.prototype.isReactComponent||!t?[e]:tt(e(t),t,r,n):e instanceof e8?r?(e.inject(r,n),[e.getName(n)]):[e]:eO(e)?te(e):Array.isArray(e)?Array.prototype.concat.apply(ee,e.map(function(e){return tt(e,t,r,n)})):[e.toString()]}function tr(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(eM(r)&&!eD(r))return!1}return!0}var tn=ef(X),to=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&tr(e),this.componentId=t,this.baseHash=ed(tn,t),this.baseStyle=r,eq.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash){if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=ek(n,this.staticRulesId);else{var o=eN(tt(this.rules,e,t,r)),i=ec(ed(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=r(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}n=ek(n,i),this.staticRulesId=i}}else{for(var s=ed(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=eN(tt(u,e,t,r));s=ed(s,d+c),l+=d}}if(l){var f=ec(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,r(l,".".concat(f),void 0,this.componentId)),n=ek(n,f)}}return n},e}(),ti=i.createContext(void 0);function ta(e){var t=i.useContext(ti),r=(0,i.useMemo)(function(){return function(e,t){if(!e)throw eB(14);if(eM(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw eB(8);return t?n(n({},t),e):e}(e.theme,t)},[e.theme,t]);return e.children?i.createElement(ti.Provider,{value:r},e.children):null}ti.Consumer;var ts={};function tl(e,t,r){var o,a,s,l,c=eD(e),u=!ep(e),d=t.attrs,f=void 0===d?ee:d,p=t.componentId,h=void 0===p?(o=t.displayName,a=t.parentComponentId,ts[s="string"!=typeof o?"sc":ea(o)]=(ts[s]||0)+1,l="".concat(s,"-").concat(ec(ef(X+s+ts[s])>>>0)),a?"".concat(a,"-").concat(l):l):p,g=t.displayName,m=void 0===g?ep(e)?"styled.".concat(e):"Styled(".concat(e.displayName||e.name||"Component",")"):g,b=t.displayName&&t.componentId?"".concat(ea(t.displayName),"-").concat(t.componentId):t.componentId||h,y=c&&e.attrs?e.attrs.concat(f).filter(Boolean):f,v=t.shouldForwardProp;if(c&&e.shouldForwardProp){var A=e.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;v=function(e,t){return A(e,t)&&w(e,t)}}else v=A}var x=new to(r,b,c?e.componentStyle:void 0);function E(e,t){return function(e,t,r){var o,a=e.attrs,s=e.componentStyle,l=e.defaultProps,c=e.foldedComponentIds,u=e.styledComponentId,d=e.target,f=i.useContext(ti),p=e3(),h=e.shouldForwardProp||p.shouldForwardProp,g=er(t,f,l)||et,m=function(e,t,r){for(var o,i=n(n({},t),{className:void 0,theme:r}),a=0;a<e.length;a+=1){var s=eM(o=e[a])?o(i):o;for(var l in s)i[l]="className"===l?ek(i[l],s[l]):"style"===l?n(n({},i[l]),s[l]):s[l]}return t.className&&(i.className=ek(i.className,t.className)),i}(a,t,g),b=m.as||d,y={};for(var v in m)void 0===m[v]||"$"===v[0]||"as"===v||"theme"===v&&m.theme===g||("forwardedAs"===v?y.as=m.forwardedAs:h&&!h(v,b)||(y[v]=m[v]));var A=(o=e3(),s.generateAndInjectStyles(m,o.styleSheet,o.stylis)),w=ek(c,u);return A&&(w+=" "+A),m.className&&(w+=" "+m.className),y[ep(b)&&!en.has(b)?"class":"className"]=w,y.ref=r,(0,i.createElement)(b,y)}(S,e,t)}E.displayName=m;var S=i.forwardRef(E);return S.attrs=y,S.componentStyle=x,S.displayName=m,S.shouldForwardProp=v,S.foldedComponentIds=c?ek(e.foldedComponentIds,e.styledComponentId):"",S.styledComponentId=b,S.target=c?e.target:e,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=c?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0;n<t.length;n++)(function e(t,r,n){if(void 0===n&&(n=!1),!n&&!eO(t)&&!Array.isArray(t))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)t[o]=e(t[o],r[o]);else if(eO(r))for(var o in r)t[o]=e(t[o],r[o]);return t})(e,t[n],!0);return e}({},e.defaultProps,t):t}}),eL(S,function(){return".".concat(S.styledComponentId)}),u&&function e(t,r,n){if("string"!=typeof r){if(eI){var o=eC(r);o&&o!==eI&&e(t,o,n)}var i=eE(r);eS&&(i=i.concat(eS(r)));for(var a=ew(t),s=ew(r),l=0;l<i.length;++l){var c=i[l];if(!(c in ey||n&&n[c]||s&&c in s||a&&c in a)){var u=eT(r,c);try{ex(t,c,u)}catch(e){}}}}return t}(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function tc(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var tu=function(e){return Object.assign(e,{isCss:!0})};function td(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return eM(e)||eO(e)?tu(tt(tc(ee,o([e],t,!0)))):0===t.length&&1===e.length&&"string"==typeof e[0]?tt(e):tu(tt(tc(e,t)))}var tf=function(e){return function e(t,r,i){if(void 0===i&&(i=et),!r)throw eB(1,r);var a=function(e){for(var n=[],a=1;a<arguments.length;a++)n[a-1]=arguments[a];return t(r,i,td.apply(void 0,o([e],n,!1)))};return a.attrs=function(o){return e(t,r,n(n({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return e(t,r,n(n({},i),o))},a}(tl,e)},tp=tf;en.forEach(function(e){tp[e]=tf(e)});var th=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=tr(e),eq.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,r,n){var o=n(eN(tt(this.rules,t,r,n)),""),i=this.componentId+e;r.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&eq.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();function tg(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var a=td.apply(void 0,o([e],t,!1)),s="sc-global-".concat(ec(ef(JSON.stringify(a))>>>0)),l=new th(a,s),c=function(e){var t=e3(),r=i.useContext(ti),n=i.useRef(t.styleSheet.allocateGSInstance(s)).current;return t.styleSheet.server&&u(n,e,t.styleSheet,r,t.stylis),i.useLayoutEffect(function(){if(!t.styleSheet.server)return u(n,e,t.styleSheet,r,t.stylis),function(){return l.removeStyles(n,t.styleSheet)}},[n,e,t.styleSheet,r,t.stylis]),null};function u(e,t,r,o,i){if(l.isStatic)l.renderStyles(e,J,r,i);else{var a=n(n({},t),{theme:er(t,o,c.defaultProps)});l.renderStyles(e,a,r,i)}}return i.memo(c)}!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=r.nc,o=eN([n&&'nonce="'.concat(n,'"'),"".concat(Z,'="true"'),"".concat(V,'="').concat(X,'"')].filter(Boolean)," ");return"<style ".concat(o,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw eB(2);return e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)throw eB(2);var t,o=((t={})[Z]="",t[V]=X,t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),a=r.nc;return a&&(o.nonce=a),[i.createElement("style",n({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new eq({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw eB(2);return i.createElement(e6,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw eB(3)}}()},1772:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=t.GoogleMapsEmbed=t.GoogleAnalytics=void 0;var n=r(5081);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return n.GoogleAnalytics}});var o=r(4062);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return o.GoogleMapsEmbed}});var i=r(1432);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return i.YouTubeEmbed}})},5081:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;let i=o(r(6893)),a=r(5783);t.GoogleAnalytics=e=>{var t=n(e,[]);return(0,a.formatData)(i.default,t)}},4062:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleMapsEmbed=void 0;let i=o(r(6362)),a=r(5783);t.GoogleMapsEmbed=e=>{var t=n(e,[]);return(0,a.formatData)(i.default,t)}},1432:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=void 0;let i=o(r(5825)),a=r(5783);t.YouTubeEmbed=e=>{var t=n(e,[]);return(0,a.formatData)(i.default,t)}},5783:function(e,t){"use strict";function r(e,t,r=!1){return t?Object.keys(e).filter(e=>r?!t.includes(e):t.includes(e)).reduce((t,r)=>(t[r]=e[r],t),{}):{}}function n(e,t,r,n){let o=n&&Object.keys(n).length>0?new URL(Object.values(n)[0],e):new URL(e);return t&&r&&t.forEach(e=>{r[e]&&o.searchParams.set(e,r[e])}),o.toString()}function o(e,t,r,o,i){var a;if(!t)return`<${e}></${e}>`;let s=(null===(a=t.src)||void 0===a?void 0:a.url)?Object.assign(Object.assign({},t),{src:n(t.src.url,t.src.params,o,i)}):t,l=Object.keys(Object.assign(Object.assign({},s),r)).reduce((e,t)=>{let n=null==r?void 0:r[t],o=s[t],i=null!=n?n:o,a=!0===i?t:`${t}="${i}"`;return i?e+` ${a}`:e},"");return`<${e}${l}></${e}>`}Object.defineProperty(t,"__esModule",{value:!0}),t.formatData=t.createHtml=t.formatUrl=void 0,t.formatUrl=n,t.createHtml=o,t.formatData=function(e,t){var i,a,s,l,c;let u=r(t,null===(i=e.scripts)||void 0===i?void 0:i.reduce((e,t)=>[...e,...Array.isArray(t.params)?t.params:[]],[])),d=r(t,null===(s=null===(a=e.html)||void 0===a?void 0:a.attributes.src)||void 0===s?void 0:s.params),f=r(t,[null===(c=null===(l=e.html)||void 0===l?void 0:l.attributes.src)||void 0===c?void 0:c.slugParam]),p=r(t,[...Object.keys(u),...Object.keys(d),...Object.keys(f)],!0);return Object.assign(Object.assign({},e),{html:e.html?o(e.html.element,e.html.attributes,p,d,f):null,scripts:e.scripts?e.scripts.map(e=>Object.assign(Object.assign({},e),{url:n(e.url,e.params,u)})):null})}},6115:function(e,t){"use strict";t.Z="data:font/woff2;base64,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"},2910:function(e,t){"use strict";t.Z="data:font/woff2;base64,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"},8646:function(e,t,r){"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,{_:function(){return n}})},6893:function(e){"use strict";e.exports=JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')},6362:function(e){"use strict";e.exports=JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')},5825:function(e){"use strict";e.exports=JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')}}]);