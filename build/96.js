webpackJsonp([96],{2038:function(e,n,l){"use strict";function View_AddonModPageIndexPage_0(e){return a._57(0,[a._52(402653184,1,{pageComponent:0}),(e()(),a._31(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),a._30(2,16384,null,0,L.a,[k.a,a.t,a.V,[2,T.a]],null,null),(e()(),a._55(-1,null,["\n    "])),(e()(),a._31(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,F.b,F.a)),a._30(5,49152,null,0,G.a,[H.a,[2,T.a],[2,J.a],k.a,a.t,a.V],null,null),a._30(6,212992,null,0,K.a,[G.a,N.a,U.a,q.a],null,null),(e()(),a._55(-1,3,["\n        "])),(e()(),a._31(8,0,null,3,3,"ion-title",[],null,null,null,z.b,z.a)),a._30(9,49152,null,0,B.a,[k.a,a.t,a.V,[2,E.a],[2,G.a]],null,null),(e()(),a._31(10,16777216,null,0,1,"core-format-text",[["contextLevel","module"]],null,null,null,null,null)),a._30(11,540672,null,0,Q.a,[a.t,S.a,W.a,X.a,U.a,N.a,Y.a,Z.a,$.a,ee.a,ne.a,le.a,[2,J.a],[2,ae.a],[2,te.a],oe.a,q.a,ue.a,de.a,re.a,a._11],{text:[0,"text"],contextLevel:[1,"contextLevel"],contextInstanceId:[2,"contextInstanceId"],courseId:[3,"courseId"]},null),(e()(),a._55(-1,3,["\n\n        "])),(e()(),a._31(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),a._30(14,16384,null,1,_e.a,[k.a,a.t,a.V,[2,E.a],[2,G.a]],null,null),a._52(603979776,2,{_buttons:1}),(e()(),a._55(-1,null,["\n            "])),(e()(),a._55(-1,null,["\n        "])),(e()(),a._55(-1,3,["\n    "])),(e()(),a._55(-1,null,["\n"])),(e()(),a._55(-1,null,["\n"])),(e()(),a._31(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,ie.b,ie.a)),a._30(22,4374528,null,0,ae.a,[k.a,N.a,ce.a,a.t,a.V,H.a,se.a,a.M,[2,T.a],[2,J.a]],null,null),(e()(),a._55(-1,1,["\n    "])),(e()(),a._31(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(e,n,l){var a=!0;if("ionRefresh"===n){a=!1!==e.component.pageComponent.doRefresh(l)&&a}return a},null,null)),a._30(25,212992,null,0,fe.a,[N.a,ae.a,a.M,ge.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(e()(),a._55(-1,null,["\n        "])),(e()(),a._31(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,pe.b,pe.a)),a._30(28,114688,null,0,be.a,[fe.a,k.a],{pullingText:[0,"pullingText"]},null),a._47(131072,he.a,[U.a,a.j]),(e()(),a._55(-1,null,["\n    "])),(e()(),a._55(-1,1,["\n\n    "])),(e()(),a._31(32,0,null,1,1,"addon-mod-page-index",[],null,[[null,"dataRetrieved"]],function(e,n,l){var a=!0;if("dataRetrieved"===n){a=!1!==e.component.updateData(l)&&a}return a},D.c,D.b)),a._30(33,245760,[[1,4]],0,r.a,[a.C,me.a,Pe.a,ne.a,xe.a,ve.a,Y.a],{module:[0,"module"],courseId:[1,"courseId"]},{dataRetrieved:"dataRetrieved"}),(e()(),a._55(-1,1,["\n"])),(e()(),a._55(-1,null,["\n"]))],function(e,n){var l=n.component;e(n,6,0);e(n,11,0,l.title,"module",l.module.id,l.courseId);e(n,25,0,l.pageComponent.loaded);e(n,28,0,a._34(1,"",a._56(n,28,0,a._44(n,29).transform("core.pulltorefresh")),""));e(n,33,0,l.module,l.courseId)},function(e,n){e(n,4,0,a._44(n,5)._hidden,a._44(n,5)._sbPadding);e(n,21,0,a._44(n,22).statusbarPadding,a._44(n,22)._hasRefresher);e(n,24,0,"inactive"!==a._44(n,25).state,a._44(n,25)._top);e(n,27,0,a._44(n,28).r.state)})}Object.defineProperty(n,"__esModule",{value:!0});var a=l(0),t=l(5),o=l(3),u=l(32),d=l(764),r=l(511),_=this&&this.__decorate||function(e,n,l,a){var t,o=arguments.length,u=o<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,l):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,n,l,a);else for(var d=e.length-1;d>=0;d--)(t=e[d])&&(u=(o<3?t(u):o>3?t(n,l,u):t(n,l))||u);return o>3&&u&&Object.defineProperty(n,l,u),u},i=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},c=function(){function AddonModPageIndexPage(e){this.module=e.get("module")||{},this.courseId=e.get("courseId"),this.title=this.module.name}return AddonModPageIndexPage.prototype.updateData=function(e){this.title=e.name||this.title},_([Object(a._9)(r.a),i("design:type",r.a)],AddonModPageIndexPage.prototype,"pageComponent",void 0),AddonModPageIndexPage=_([Object(a.m)({selector:"page-addon-mod-page-index",templateUrl:"index.html"}),i("design:paramtypes",[t.t])],AddonModPageIndexPage)}(),s=this&&this.__decorate||function(e,n,l,a){var t,o=arguments.length,u=o<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,l):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,n,l,a);else for(var d=e.length-1;d>=0;d--)(t=e[d])&&(u=(o<3?t(u):o>3?t(n,l,u):t(n,l))||u);return o>3&&u&&Object.defineProperty(n,l,u),u},f=function(){function AddonModPageIndexPageModule(){}return AddonModPageIndexPageModule=s([Object(a.I)({declarations:[c],imports:[u.a,d.a,t.l.forChild(c),o.b.forChild()]})],AddonModPageIndexPageModule)}(),g=l(1522),p=l(1523),b=l(1524),h=l(1525),m=l(1526),P=l(1527),x=l(1528),v=l(1529),I=l(1530),M=l(1531),R=l(1532),y=l(1533),j=l(1534),A=l(1537),O=l(1538),V=l(1535),w=l(1536),C=l(1539),D=l(1598),L=l(371),k=l(8),T=l(39),F=l(723),G=l(212),H=l(35),J=l(20),K=l(473),N=l(16),U=l(18),q=l(9),z=l(724),B=l(314),E=l(247),Q=l(47),S=l(1),W=l(4),X=l(11),Y=l(2),Z=l(22),$=l(6),ee=l(17),ne=l(10),le=l(15),ae=l(29),te=l(28),oe=l(42),ue=l(40),de=l(30),re=l(36),_e=l(372),ie=l(181),ce=l(34),se=l(107),fe=l(159),ge=l(44),pe=l(213),be=l(173),he=l(25),me=l(222),Pe=l(13),xe=l(331),ve=l(404),Ie=l(69),Me=a._29({encapsulation:2,styles:[],data:{}}),Re=a._27("page-addon-mod-page-index",c,function View_AddonModPageIndexPage_Host_0(e){return a._57(0,[(e()(),a._31(0,0,null,null,1,"page-addon-mod-page-index",[],null,null,null,View_AddonModPageIndexPage_0,Me)),a._30(1,49152,null,0,c,[Ie.a],null,null)],null,null)},{},{},[]),ye=l(7),je=l(23),Ae=l(367),Oe=l(368),Ve=l(370),we=l(369),Ce=l(472),De=l(722),Le=l(106),ke=l(26),Te=l(271),Fe=l(74),Ge=l(270);l.d(n,"AddonModPageIndexPageModuleNgFactory",function(){return He});var He=a._28(f,[],function(e){return a._40([a._41(512,a.o,a._21,[[8,[g.a,p.a,b.a,h.a,m.a,P.a,x.a,v.a,I.a,M.a,R.a,y.a,j.a,A.a,O.a,V.a,w.a,C.a,D.a,Re]],[3,a.o],a.K]),a._41(4608,ye.m,ye.l,[a.G,[2,ye.w]]),a._41(4608,je.x,je.x,[]),a._41(4608,je.d,je.d,[]),a._41(4608,Ae.b,Ae.a,[]),a._41(4608,Oe.a,Oe.b,[]),a._41(4608,Ve.b,Ve.a,[]),a._41(4608,we.b,we.a,[]),a._41(4608,U.a,U.a,[Ce.a,Ae.b,Oe.a,Ve.b,we.b,U.b,U.c]),a._41(512,u.a,u.a,[]),a._41(512,ye.b,ye.b,[]),a._41(512,je.v,je.v,[]),a._41(512,je.i,je.i,[]),a._41(512,je.s,je.s,[]),a._41(512,De.a,De.a,[]),a._41(512,o.b,o.b,[]),a._41(512,Le.a,Le.a,[]),a._41(512,ke.a,ke.a,[]),a._41(512,Te.a,Te.a,[]),a._41(512,Fe.a,Fe.a,[]),a._41(512,d.a,d.a,[]),a._41(512,De.b,De.b,[]),a._41(512,f,f,[]),a._41(256,U.c,void 0,[]),a._41(256,U.b,void 0,[]),a._41(256,Ge.a,c,[])])})}});