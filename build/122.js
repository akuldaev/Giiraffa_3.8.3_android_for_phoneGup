webpackJsonp([122],{2006:function(n,e,l){"use strict";function View_AddonModChatIndexPage_0(n){return a._57(0,[a._52(402653184,1,{chatComponent:0}),(n()(),a._31(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),a._30(2,16384,null,0,L.a,[k.a,a.t,a.V,[2,T.a]],null,null),(n()(),a._55(-1,null,["\n    "])),(n()(),a._31(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,F.b,F.a)),a._30(5,49152,null,0,G.a,[H.a,[2,T.a],[2,J.a],k.a,a.t,a.V],null,null),a._30(6,212992,null,0,K.a,[G.a,N.a,U.a,q.a],null,null),(n()(),a._55(-1,3,["\n        "])),(n()(),a._31(8,0,null,3,3,"ion-title",[],null,null,null,z.b,z.a)),a._30(9,49152,null,0,B.a,[k.a,a.t,a.V,[2,E.a],[2,G.a]],null,null),(n()(),a._31(10,16777216,null,0,1,"core-format-text",[["contextLevel","module"]],null,null,null,null,null)),a._30(11,540672,null,0,Q.a,[a.t,S.a,W.a,X.a,U.a,N.a,Y.a,Z.a,$.a,nn.a,en.a,ln.a,[2,J.a],[2,an.a],[2,tn.a],on.a,q.a,un.a,dn.a,rn.a,a._11],{text:[0,"text"],contextLevel:[1,"contextLevel"],contextInstanceId:[2,"contextInstanceId"],courseId:[3,"courseId"]},null),(n()(),a._55(-1,3,["\n\n        "])),(n()(),a._31(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),a._30(14,16384,null,1,_n.a,[k.a,a.t,a.V,[2,E.a],[2,G.a]],null,null),a._52(603979776,2,{_buttons:1}),(n()(),a._55(-1,null,["\n            "])),(n()(),a._55(-1,null,["\n        "])),(n()(),a._55(-1,3,["\n    "])),(n()(),a._55(-1,null,["\n"])),(n()(),a._55(-1,null,["\n"])),(n()(),a._31(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,cn.b,cn.a)),a._30(22,4374528,null,0,an.a,[k.a,N.a,sn.a,a.t,a.V,H.a,fn.a,a.M,[2,T.a],[2,J.a]],null,null),(n()(),a._55(-1,1,["\n    "])),(n()(),a._31(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(n,e,l){var a=!0;if("ionRefresh"===e){a=!1!==n.component.chatComponent.doRefresh(l)&&a}return a},null,null)),a._30(25,212992,null,0,hn.a,[N.a,an.a,a.M,bn.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(n()(),a._55(-1,null,["\n        "])),(n()(),a._31(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,pn.b,pn.a)),a._30(28,114688,null,0,mn.a,[hn.a,k.a],{pullingText:[0,"pullingText"]},null),a._47(131072,gn.a,[U.a,a.j]),(n()(),a._55(-1,null,["\n    "])),(n()(),a._55(-1,1,["\n\n    "])),(n()(),a._31(32,0,null,1,1,"addon-mod-chat-index",[],null,[[null,"dataRetrieved"]],function(n,e,l){var a=!0;if("dataRetrieved"===e){a=!1!==n.component.updateData(l)&&a}return a},D.c,D.b)),a._30(33,245760,[[1,4]],0,r.a,[a.C,xn.a,vn.a,J.a],{module:[0,"module"],courseId:[1,"courseId"]},{dataRetrieved:"dataRetrieved"}),(n()(),a._55(-1,1,["\n"])),(n()(),a._55(-1,null,["\n"]))],function(n,e){var l=e.component;n(e,6,0);n(e,11,0,l.title,"module",l.module.id,l.courseId);n(e,25,0,l.chatComponent.loaded);n(e,28,0,a._34(1,"",a._56(e,28,0,a._44(e,29).transform("core.pulltorefresh")),""));n(e,33,0,l.module,l.courseId)},function(n,e){n(e,4,0,a._44(e,5)._hidden,a._44(e,5)._sbPadding);n(e,21,0,a._44(e,22).statusbarPadding,a._44(e,22)._hasRefresher);n(e,24,0,"inactive"!==a._44(e,25).state,a._44(e,25)._top);n(e,27,0,a._44(e,28).r.state)})}Object.defineProperty(e,"__esModule",{value:!0});var a=l(0),t=l(5),o=l(3),u=l(32),d=l(736),r=l(498),_=this&&this.__decorate||function(n,e,l,a){var t,o=arguments.length,u=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,l):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(n,e,l,a);else for(var d=n.length-1;d>=0;d--)(t=n[d])&&(u=(o<3?t(u):o>3?t(e,l,u):t(e,l))||u);return o>3&&u&&Object.defineProperty(e,l,u),u},i=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},c=function(){function AddonModChatIndexPage(n){this.module=n.get("module")||{},this.courseId=n.get("courseId"),this.title=this.module.name}return AddonModChatIndexPage.prototype.updateData=function(n){this.title=n.name||this.title},_([Object(a._9)(r.a),i("design:type",r.a)],AddonModChatIndexPage.prototype,"chatComponent",void 0),AddonModChatIndexPage=_([Object(a.m)({selector:"page-addon-mod-chat-index",templateUrl:"index.html"}),i("design:paramtypes",[t.t])],AddonModChatIndexPage)}(),s=this&&this.__decorate||function(n,e,l,a){var t,o=arguments.length,u=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,l):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(n,e,l,a);else for(var d=n.length-1;d>=0;d--)(t=n[d])&&(u=(o<3?t(u):o>3?t(e,l,u):t(e,l))||u);return o>3&&u&&Object.defineProperty(e,l,u),u},f=function(){function AddonModChatIndexPageModule(){}return AddonModChatIndexPageModule=s([Object(a.I)({declarations:[c],imports:[u.a,d.a,t.l.forChild(c),o.b.forChild()]})],AddonModChatIndexPageModule)}(),h=l(1522),b=l(1523),p=l(1524),m=l(1525),g=l(1526),x=l(1527),v=l(1528),I=l(1529),C=l(1530),M=l(1531),P=l(1532),R=l(1533),y=l(1534),j=l(1537),A=l(1538),O=l(1535),V=l(1536),w=l(1539),D=l(1557),L=l(371),k=l(8),T=l(39),F=l(723),G=l(212),H=l(35),J=l(20),K=l(473),N=l(16),U=l(18),q=l(9),z=l(724),B=l(314),E=l(247),Q=l(47),S=l(1),W=l(4),X=l(11),Y=l(2),Z=l(22),$=l(6),nn=l(17),en=l(10),ln=l(15),an=l(29),tn=l(28),on=l(42),un=l(40),dn=l(30),rn=l(36),_n=l(372),cn=l(181),sn=l(34),fn=l(107),hn=l(159),bn=l(44),pn=l(213),mn=l(173),gn=l(25),xn=l(279),vn=l(24),In=l(69),Cn=a._29({encapsulation:2,styles:[],data:{}}),Mn=a._27("page-addon-mod-chat-index",c,function View_AddonModChatIndexPage_Host_0(n){return a._57(0,[(n()(),a._31(0,0,null,null,1,"page-addon-mod-chat-index",[],null,null,null,View_AddonModChatIndexPage_0,Cn)),a._30(1,49152,null,0,c,[In.a],null,null)],null,null)},{},{},[]),Pn=l(7),Rn=l(23),yn=l(367),jn=l(368),An=l(370),On=l(369),Vn=l(472),wn=l(722),Dn=l(106),Ln=l(26),kn=l(271),Tn=l(74),Fn=l(270);l.d(e,"AddonModChatIndexPageModuleNgFactory",function(){return Gn});var Gn=a._28(f,[],function(n){return a._40([a._41(512,a.o,a._21,[[8,[h.a,b.a,p.a,m.a,g.a,x.a,v.a,I.a,C.a,M.a,P.a,R.a,y.a,j.a,A.a,O.a,V.a,w.a,D.a,Mn]],[3,a.o],a.K]),a._41(4608,Pn.m,Pn.l,[a.G,[2,Pn.w]]),a._41(4608,Rn.x,Rn.x,[]),a._41(4608,Rn.d,Rn.d,[]),a._41(4608,yn.b,yn.a,[]),a._41(4608,jn.a,jn.b,[]),a._41(4608,An.b,An.a,[]),a._41(4608,On.b,On.a,[]),a._41(4608,U.a,U.a,[Vn.a,yn.b,jn.a,An.b,On.b,U.b,U.c]),a._41(512,u.a,u.a,[]),a._41(512,Pn.b,Pn.b,[]),a._41(512,Rn.v,Rn.v,[]),a._41(512,Rn.i,Rn.i,[]),a._41(512,Rn.s,Rn.s,[]),a._41(512,wn.a,wn.a,[]),a._41(512,o.b,o.b,[]),a._41(512,Dn.a,Dn.a,[]),a._41(512,Ln.a,Ln.a,[]),a._41(512,kn.a,kn.a,[]),a._41(512,Tn.a,Tn.a,[]),a._41(512,d.a,d.a,[]),a._41(512,wn.b,wn.b,[]),a._41(512,f,f,[]),a._41(256,U.c,void 0,[]),a._41(256,U.b,void 0,[]),a._41(256,Fn.a,c,[])])})}});