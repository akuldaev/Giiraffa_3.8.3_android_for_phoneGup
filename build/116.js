webpackJsonp([116],{2012:function(a,n,e){"use strict";function View_AddonModDataIndexPage_0(a){return l._57(0,[l._52(402653184,1,{dataComponent:0}),(a()(),l._31(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),l._30(2,16384,null,0,T.a,[F.a,l.t,l.V,[2,G.a]],null,null),(a()(),l._55(-1,null,["\n    "])),(a()(),l._31(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,H.b,H.a)),l._30(5,49152,null,0,J.a,[K.a,[2,G.a],[2,N.a],F.a,l.t,l.V],null,null),l._30(6,212992,null,0,U.a,[J.a,q.a,z.a,B.a],null,null),(a()(),l._55(-1,3,["\n        "])),(a()(),l._31(8,0,null,3,3,"ion-title",[],null,null,null,E.b,E.a)),l._30(9,49152,null,0,Q.a,[F.a,l.t,l.V,[2,S.a],[2,J.a]],null,null),(a()(),l._31(10,16777216,null,0,1,"core-format-text",[["contextLevel","module"]],null,null,null,null,null)),l._30(11,540672,null,0,W.a,[l.t,X.a,Y.a,Z.a,z.a,q.a,$.a,aa.a,na.a,ea.a,la.a,ta.a,[2,N.a],[2,oa.a],[2,ua.a],da.a,B.a,ra.a,_a.a,ia.a,l._11],{text:[0,"text"],contextLevel:[1,"contextLevel"],contextInstanceId:[2,"contextInstanceId"],courseId:[3,"courseId"]},null),(a()(),l._55(-1,3,["\n\n        "])),(a()(),l._31(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),l._30(14,16384,null,1,ca.a,[F.a,l.t,l.V,[2,S.a],[2,J.a]],null,null),l._52(603979776,2,{_buttons:1}),(a()(),l._55(-1,null,["\n            "])),(a()(),l._55(-1,null,["\n        "])),(a()(),l._55(-1,3,["\n    "])),(a()(),l._55(-1,null,["\n"])),(a()(),l._55(-1,null,["\n"])),(a()(),l._31(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,sa.b,sa.a)),l._30(22,4374528,null,0,oa.a,[F.a,q.a,fa.a,l.t,l.V,K.a,pa.a,l.M,[2,G.a],[2,N.a]],null,null),(a()(),l._55(-1,1,["\n    "])),(a()(),l._31(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(a,n,e){var l=!0;if("ionRefresh"===n){l=!1!==a.component.dataComponent.doRefresh(e)&&l}return l},null,null)),l._30(25,212992,null,0,ba.a,[q.a,oa.a,l.M,ga.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(a()(),l._55(-1,null,["\n        "])),(a()(),l._31(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,ha.b,ha.a)),l._30(28,114688,null,0,ma.a,[ba.a,F.a],{pullingText:[0,"pullingText"]},null),l._47(131072,xa.a,[z.a,l.j]),(a()(),l._55(-1,null,["\n    "])),(a()(),l._55(-1,1,["\n\n    "])),(a()(),l._31(32,0,null,1,1,"addon-mod-data-index",[],null,[[null,"dataRetrieved"]],function(a,n,e){var l=!0;if("dataRetrieved"===n){l=!1!==a.component.updateData(e)&&l}return l},k.c,k.b)),l._30(33,245760,[[1,4]],0,r.a,[l.C,[2,oa.a],va.a,Ia.a,Ma.a,Pa.a,Ra.a,ya.a,$.a,N.a],{module:[0,"module"],courseId:[1,"courseId"],group:[2,"group"]},{dataRetrieved:"dataRetrieved"}),(a()(),l._55(-1,1,["\n"])),(a()(),l._55(-1,null,["\n"]))],function(a,n){var e=n.component;a(n,6,0);a(n,11,0,e.title,"module",e.module.id,e.courseId);a(n,25,0,e.dataComponent.loaded);a(n,28,0,l._34(1,"",l._56(n,28,0,l._44(n,29).transform("core.pulltorefresh")),""));a(n,33,0,e.module,e.courseId,e.group)},function(a,n){a(n,4,0,l._44(n,5)._hidden,l._44(n,5)._sbPadding);a(n,21,0,l._44(n,22).statusbarPadding,l._44(n,22)._hasRefresher);a(n,24,0,"inactive"!==l._44(n,25).state,l._44(n,25)._top);a(n,27,0,l._44(n,28).r.state)})}Object.defineProperty(n,"__esModule",{value:!0});var l=e(0),t=e(5),o=e(3),u=e(32),d=e(476),r=e(501),_=this&&this.__decorate||function(a,n,e,l){var t,o=arguments.length,u=o<3?n:null===l?l=Object.getOwnPropertyDescriptor(n,e):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(a,n,e,l);else for(var d=a.length-1;d>=0;d--)(t=a[d])&&(u=(o<3?t(u):o>3?t(n,e,u):t(n,e))||u);return o>3&&u&&Object.defineProperty(n,e,u),u},i=this&&this.__metadata||function(a,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,n)},c=function(){function AddonModDataIndexPage(a){this.module=a.get("module")||{},this.courseId=a.get("courseId"),this.group=a.get("group")||0,this.title=this.module.name}return AddonModDataIndexPage.prototype.updateData=function(a){this.title=a.name||this.title},_([Object(l._9)(r.a),i("design:type",r.a)],AddonModDataIndexPage.prototype,"dataComponent",void 0),AddonModDataIndexPage=_([Object(l.m)({selector:"page-addon-mod-data-index",templateUrl:"index.html"}),i("design:paramtypes",[t.t])],AddonModDataIndexPage)}(),s=this&&this.__decorate||function(a,n,e,l){var t,o=arguments.length,u=o<3?n:null===l?l=Object.getOwnPropertyDescriptor(n,e):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(a,n,e,l);else for(var d=a.length-1;d>=0;d--)(t=a[d])&&(u=(o<3?t(u):o>3?t(n,e,u):t(n,e))||u);return o>3&&u&&Object.defineProperty(n,e,u),u},f=function(){function AddonModDataIndexPageModule(){}return AddonModDataIndexPageModule=s([Object(l.I)({declarations:[c],imports:[u.a,d.a,t.l.forChild(c),o.b.forChild()]})],AddonModDataIndexPageModule)}(),p=e(1522),b=e(1523),g=e(1524),h=e(1525),m=e(1526),x=e(1527),v=e(1528),I=e(1529),M=e(1530),P=e(1531),R=e(1532),y=e(1533),D=e(1534),j=e(1537),A=e(1538),O=e(1535),V=e(1536),w=e(1539),C=e(480),L=e(1540),k=e(1553),T=e(371),F=e(8),G=e(39),H=e(723),J=e(212),K=e(35),N=e(20),U=e(473),q=e(16),z=e(18),B=e(9),E=e(724),Q=e(314),S=e(247),W=e(47),X=e(1),Y=e(4),Z=e(11),$=e(2),aa=e(22),na=e(6),ea=e(17),la=e(10),ta=e(15),oa=e(29),ua=e(28),da=e(42),ra=e(40),_a=e(30),ia=e(36),ca=e(372),sa=e(181),fa=e(34),pa=e(107),ba=e(159),ga=e(44),ha=e(213),ma=e(173),xa=e(25),va=e(97),Ia=e(217),Ma=e(399),Pa=e(24),Ra=e(71),ya=e(162),Da=e(69),ja=l._29({encapsulation:2,styles:[],data:{}}),Aa=l._27("page-addon-mod-data-index",c,function View_AddonModDataIndexPage_Host_0(a){return l._57(0,[(a()(),l._31(0,0,null,null,1,"page-addon-mod-data-index",[],null,null,null,View_AddonModDataIndexPage_0,ja)),l._30(1,49152,null,0,c,[Da.a],null,null)],null,null)},{},{},[]),Oa=e(7),Va=e(23),wa=e(367),Ca=e(368),La=e(370),ka=e(369),Ta=e(472),Fa=e(722),Ga=e(106),Ha=e(26),Ja=e(271),Ka=e(74),Na=e(477),Ua=e(374),qa=e(274),za=e(270);e.d(n,"AddonModDataIndexPageModuleNgFactory",function(){return Ba});var Ba=l._28(f,[],function(a){return l._40([l._41(512,l.o,l._21,[[8,[p.a,b.a,g.a,h.a,m.a,x.a,v.a,I.a,M.a,P.a,R.a,y.a,D.a,j.a,A.a,O.a,V.a,w.a,C.a,L.a,k.a,Aa]],[3,l.o],l.K]),l._41(4608,Oa.m,Oa.l,[l.G,[2,Oa.w]]),l._41(4608,Va.x,Va.x,[]),l._41(4608,Va.d,Va.d,[]),l._41(4608,wa.b,wa.a,[]),l._41(4608,Ca.a,Ca.b,[]),l._41(4608,La.b,La.a,[]),l._41(4608,ka.b,ka.a,[]),l._41(4608,z.a,z.a,[Ta.a,wa.b,Ca.a,La.b,ka.b,z.b,z.c]),l._41(512,u.a,u.a,[]),l._41(512,Oa.b,Oa.b,[]),l._41(512,Va.v,Va.v,[]),l._41(512,Va.i,Va.i,[]),l._41(512,Va.s,Va.s,[]),l._41(512,Fa.a,Fa.a,[]),l._41(512,o.b,o.b,[]),l._41(512,Ga.a,Ga.a,[]),l._41(512,Ha.a,Ha.a,[]),l._41(512,Ja.a,Ja.a,[]),l._41(512,Ka.a,Ka.a,[]),l._41(512,Na.a,Na.a,[]),l._41(512,Ua.a,Ua.a,[]),l._41(512,qa.a,qa.a,[]),l._41(512,d.a,d.a,[]),l._41(512,Fa.b,Fa.b,[]),l._41(512,f,f,[]),l._41(256,z.c,void 0,[]),l._41(256,z.b,void 0,[]),l._41(256,za.a,c,[])])})}});