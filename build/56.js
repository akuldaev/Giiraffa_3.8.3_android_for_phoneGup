webpackJsonp([56],{2089:function(e,t,n){"use strict";function View_CoreLoginInitPage_0(e){return i._57(0,[(e()(),i._31(0,0,null,null,8,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,R.b,R.a)),i._30(1,4374528,null,0,O.a,[j.a,w.a,S.a,i.t,i.V,D.a,H.a,i.M,[2,M.a],[2,V.a]],null,null),(e()(),i._55(-1,1,["\n    "])),(e()(),i._31(3,0,null,1,4,"div",[["class","core-bglogo"]],null,null,null,null,null)),(e()(),i._55(-1,null,["\n        "])),(e()(),i._31(5,0,null,null,1,"ion-spinner",[],[[2,"spinner-paused",null]],null,null,T.b,T.a)),i._30(6,114688,null,0,N.a,[j.a,i.t,i.V],null,null),(e()(),i._55(-1,null,["\n    "])),(e()(),i._55(-1,1,["\n"])),(e()(),i._55(-1,null,["\n"]))],function(e,t){e(t,6,0)},function(e,t){e(t,0,0,i._44(t,1).statusbarPadding,i._44(t,1)._hasRefresher);e(t,5,0,i._44(t,6)._paused)})}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=n(5),a=n(758),l=n(10),r=n(154),u=n(1),s=n(41),c=n(125),g=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,l=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,n,l):o(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(){function CoreLoginInitPage(e,t,n,i,o,a){this.navCtrl=e,this.appProvider=t,this.initDelegate=n,this.sitesProvider=i,this.loginHelper=o,this.splashScreen=a}return CoreLoginInitPage.prototype.ionViewDidLoad=function(){var e=this;this.initDelegate.ready().then(function(){var t=e.appProvider.getRedirect();return t.siteId&&(e.appProvider.storeRedirect("","",""),Date.now()-t.timemodified<2e4)?t.siteId!=s.a.NO_SITE_ID?e.sitesProvider.loadSite(t.siteId,t.page,t.params).then(function(n){if(n)return e.loginHelper.goToSiteInitialPage(e.navCtrl,t.page,t.params,{animate:!1})}).catch(function(){return e.loadPage()}):e.loginHelper.goToNoSitePage(e.navCtrl,t.page,t.params):e.loadPage()}).then(function(){setTimeout(function(){e.splashScreen.hide()},100)})},CoreLoginInitPage.prototype.loadPage=function(){var e=this;return this.sitesProvider.isLoggedIn()?this.loginHelper.isSiteLoggedOut()?this.sitesProvider.logout().then(function(){return e.loadPage()}):this.loginHelper.goToSiteInitialPage():this.navCtrl.setRoot("CoreLoginSitesPage")},CoreLoginInitPage=g([Object(i.m)({selector:"page-core-login-init",templateUrl:"init.html"}),d("design:paramtypes",[o.s,l.a,r.a,u.a,c.a,a.a])],CoreLoginInitPage)}(),_=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,l=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,n,l):o(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l},p=function(){function CoreLoginInitPageModule(){}return CoreLoginInitPageModule=_([Object(i.I)({declarations:[f],imports:[o.l.forChild(f)]})],CoreLoginInitPageModule)}(),h=n(1522),P=n(1523),v=n(1524),I=n(1525),b=n(1526),C=n(1527),y=n(1528),m=n(1529),L=n(1530),R=n(181),O=n(29),j=n(8),w=n(16),S=n(34),D=n(35),H=n(107),M=n(39),V=n(20),T=n(121),N=n(101),x=i._29({encapsulation:2,styles:[],data:{}}),k=i._27("page-core-login-init",f,function View_CoreLoginInitPage_Host_0(e){return i._57(0,[(e()(),i._31(0,0,null,null,1,"page-core-login-init",[],null,null,null,View_CoreLoginInitPage_0,x)),i._30(1,49152,null,0,f,[V.a,l.a,r.a,u.a,c.a,a.a],null,null)],null,null)},{},{},[]),E=n(7),F=n(23),G=n(722),J=n(270);n.d(t,"CoreLoginInitPageModuleNgFactory",function(){return K});var K=i._28(p,[],function(e){return i._40([i._41(512,i.o,i._21,[[8,[h.a,P.a,v.a,I.a,b.a,C.a,y.a,m.a,L.a,k]],[3,i.o],i.K]),i._41(4608,E.m,E.l,[i.G,[2,E.w]]),i._41(4608,F.x,F.x,[]),i._41(4608,F.d,F.d,[]),i._41(512,E.b,E.b,[]),i._41(512,F.v,F.v,[]),i._41(512,F.i,F.i,[]),i._41(512,F.s,F.s,[]),i._41(512,G.a,G.a,[]),i._41(512,G.b,G.b,[]),i._41(512,p,p,[]),i._41(256,J.a,f,[])])})}});