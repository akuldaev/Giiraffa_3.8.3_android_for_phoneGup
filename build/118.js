webpackJsonp([118],{2010:function(e,n,l){"use strict";function View_AddonModChoiceIndexPage_0(e){return a._57(0,[a._52(402653184,1,{choiceComponent:0}),(e()(),a._31(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),a._30(2,16384,null,0,L.a,[k.a,a.t,a.V,[2,T.a]],null,null),(e()(),a._55(-1,null,["\n    "])),(e()(),a._31(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,F.b,F.a)),a._30(5,49152,null,0,G.a,[H.a,[2,T.a],[2,J.a],k.a,a.t,a.V],null,null),a._30(6,212992,null,0,K.a,[G.a,N.a,U.a,q.a],null,null),(e()(),a._55(-1,3,["\n        "])),(e()(),a._31(8,0,null,3,3,"ion-title",[],null,null,null,z.b,z.a)),a._30(9,49152,null,0,B.a,[k.a,a.t,a.V,[2,E.a],[2,G.a]],null,null),(e()(),a._31(10,16777216,null,0,1,"core-format-text",[["contextLevel","module"]],null,null,null,null,null)),a._30(11,540672,null,0,Q.a,[a.t,S.a,W.a,X.a,U.a,N.a,Y.a,Z.a,$.a,ee.a,ne.a,le.a,[2,J.a],[2,ae.a],[2,te.a],oe.a,q.a,ue.a,de.a,ie.a,a._11],{text:[0,"text"],contextLevel:[1,"contextLevel"],contextInstanceId:[2,"contextInstanceId"],courseId:[3,"courseId"]},null),(e()(),a._55(-1,3,["\n\n        "])),(e()(),a._31(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),a._30(14,16384,null,1,ce.a,[k.a,a.t,a.V,[2,E.a],[2,G.a]],null,null),a._52(603979776,2,{_buttons:1}),(e()(),a._55(-1,null,["\n            "])),(e()(),a._55(-1,null,["\n        "])),(e()(),a._55(-1,3,["\n    "])),(e()(),a._55(-1,null,["\n"])),(e()(),a._55(-1,null,["\n"])),(e()(),a._31(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,re.b,re.a)),a._30(22,4374528,null,0,ae.a,[k.a,N.a,_e.a,a.t,a.V,H.a,se.a,a.M,[2,T.a],[2,J.a]],null,null),(e()(),a._55(-1,1,["\n    "])),(e()(),a._31(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(e,n,l){var a=!0;if("ionRefresh"===n){a=!1!==e.component.choiceComponent.doRefresh(l)&&a}return a},null,null)),a._30(25,212992,null,0,fe.a,[N.a,ae.a,a.M,he.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(e()(),a._55(-1,null,["\n        "])),(e()(),a._31(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,be.b,be.a)),a._30(28,114688,null,0,pe.a,[fe.a,k.a],{pullingText:[0,"pullingText"]},null),a._47(131072,me.a,[U.a,a.j]),(e()(),a._55(-1,null,["\n    "])),(e()(),a._55(-1,1,["\n\n    "])),(e()(),a._31(32,0,null,1,1,"addon-mod-choice-index",[],null,[[null,"dataRetrieved"]],function(e,n,l){var a=!0;if("dataRetrieved"===n){a=!1!==e.component.updateData(l)&&a}return a},D.c,D.b)),a._30(33,245760,[[1,4]],0,i.a,[a.C,ge.a,[2,ae.a],xe.a,ve.a,Ie.a],{module:[0,"module"],courseId:[1,"courseId"]},{dataRetrieved:"dataRetrieved"}),(e()(),a._55(-1,1,["\n"])),(e()(),a._55(-1,null,["\n"]))],function(e,n){var l=n.component;e(n,6,0);e(n,11,0,l.title,"module",l.module.id,l.courseId);e(n,25,0,l.choiceComponent.loaded);e(n,28,0,a._34(1,"",a._56(n,28,0,a._44(n,29).transform("core.pulltorefresh")),""));e(n,33,0,l.module,l.courseId)},function(e,n){e(n,4,0,a._44(n,5)._hidden,a._44(n,5)._sbPadding);e(n,21,0,a._44(n,22).statusbarPadding,a._44(n,22)._hasRefresher);e(n,24,0,"inactive"!==a._44(n,25).state,a._44(n,25)._top);e(n,27,0,a._44(n,28).r.state)})}Object.defineProperty(n,"__esModule",{value:!0});var a=l(0),t=l(5),o=l(3),u=l(32),d=l(757),i=l(500),c=this&&this.__decorate||function(e,n,l,a){var t,o=arguments.length,u=o<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,l):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,n,l,a);else for(var d=e.length-1;d>=0;d--)(t=e[d])&&(u=(o<3?t(u):o>3?t(n,l,u):t(n,l))||u);return o>3&&u&&Object.defineProperty(n,l,u),u},r=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},_=function(){function AddonModChoiceIndexPage(e){this.module=e.get("module")||{},this.courseId=e.get("courseId"),this.title=this.module.name}return AddonModChoiceIndexPage.prototype.updateData=function(e){this.title=e.name||this.title},c([Object(a._9)(i.a),r("design:type",i.a)],AddonModChoiceIndexPage.prototype,"choiceComponent",void 0),AddonModChoiceIndexPage=c([Object(a.m)({selector:"page-addon-mod-choice-index",templateUrl:"index.html"}),r("design:paramtypes",[t.t])],AddonModChoiceIndexPage)}(),s=this&&this.__decorate||function(e,n,l,a){var t,o=arguments.length,u=o<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,l):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,n,l,a);else for(var d=e.length-1;d>=0;d--)(t=e[d])&&(u=(o<3?t(u):o>3?t(n,l,u):t(n,l))||u);return o>3&&u&&Object.defineProperty(n,l,u),u},f=function(){function AddonModChoiceIndexPageModule(){}return AddonModChoiceIndexPageModule=s([Object(a.I)({declarations:[_],imports:[u.a,d.a,t.l.forChild(_),o.b.forChild()]})],AddonModChoiceIndexPageModule)}(),h=l(1522),b=l(1523),p=l(1524),m=l(1525),g=l(1526),x=l(1527),v=l(1528),I=l(1529),C=l(1530),M=l(1531),P=l(1532),R=l(1533),y=l(1534),j=l(1537),A=l(1538),O=l(1535),V=l(1536),w=l(1539),D=l(1589),L=l(371),k=l(8),T=l(39),F=l(723),G=l(212),H=l(35),J=l(20),K=l(473),N=l(16),U=l(18),q=l(9),z=l(724),B=l(314),E=l(247),Q=l(47),S=l(1),W=l(4),X=l(11),Y=l(2),Z=l(22),$=l(6),ee=l(17),ne=l(10),le=l(15),ae=l(29),te=l(28),oe=l(42),ue=l(40),de=l(30),ie=l(36),ce=l(372),re=l(181),_e=l(34),se=l(107),fe=l(159),he=l(44),be=l(213),pe=l(173),me=l(25),ge=l(294),xe=l(295),ve=l(296),Ie=l(24),Ce=l(69),Me=a._29({encapsulation:2,styles:[],data:{}}),Pe=a._27("page-addon-mod-choice-index",_,function View_AddonModChoiceIndexPage_Host_0(e){return a._57(0,[(e()(),a._31(0,0,null,null,1,"page-addon-mod-choice-index",[],null,null,null,View_AddonModChoiceIndexPage_0,Me)),a._30(1,49152,null,0,_,[Ce.a],null,null)],null,null)},{},{},[]),Re=l(7),ye=l(23),je=l(367),Ae=l(368),Oe=l(370),Ve=l(369),we=l(472),De=l(722),Le=l(106),ke=l(26),Te=l(271),Fe=l(74),Ge=l(270);l.d(n,"AddonModChoiceIndexPageModuleNgFactory",function(){return He});var He=a._28(f,[],function(e){return a._40([a._41(512,a.o,a._21,[[8,[h.a,b.a,p.a,m.a,g.a,x.a,v.a,I.a,C.a,M.a,P.a,R.a,y.a,j.a,A.a,O.a,V.a,w.a,D.a,Pe]],[3,a.o],a.K]),a._41(4608,Re.m,Re.l,[a.G,[2,Re.w]]),a._41(4608,ye.x,ye.x,[]),a._41(4608,ye.d,ye.d,[]),a._41(4608,je.b,je.a,[]),a._41(4608,Ae.a,Ae.b,[]),a._41(4608,Oe.b,Oe.a,[]),a._41(4608,Ve.b,Ve.a,[]),a._41(4608,U.a,U.a,[we.a,je.b,Ae.a,Oe.b,Ve.b,U.b,U.c]),a._41(512,u.a,u.a,[]),a._41(512,Re.b,Re.b,[]),a._41(512,ye.v,ye.v,[]),a._41(512,ye.i,ye.i,[]),a._41(512,ye.s,ye.s,[]),a._41(512,De.a,De.a,[]),a._41(512,o.b,o.b,[]),a._41(512,Le.a,Le.a,[]),a._41(512,ke.a,ke.a,[]),a._41(512,Te.a,Te.a,[]),a._41(512,Fe.a,Fe.a,[]),a._41(512,d.a,d.a,[]),a._41(512,De.b,De.b,[]),a._41(512,f,f,[]),a._41(256,U.c,void 0,[]),a._41(256,U.b,void 0,[]),a._41(256,Ge.a,_,[])])})}});