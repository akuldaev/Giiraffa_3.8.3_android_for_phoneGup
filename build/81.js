webpackJsonp([81],{2054:function(n,e,l){"use strict";function View_AddonModWorkshopIndexPage_0(n){return a._57(0,[a._52(402653184,1,{workshopComponent:0}),(n()(),a._31(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),a._30(2,16384,null,0,D.a,[G.a,a.t,a.V,[2,L.a]],null,null),(n()(),a._55(-1,null,["\n    "])),(n()(),a._31(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,T.b,T.a)),a._30(5,49152,null,0,F.a,[H.a,[2,L.a],[2,J.a],G.a,a.t,a.V],null,null),a._30(6,212992,null,0,K.a,[F.a,N.a,U.a,q.a],null,null),(n()(),a._55(-1,3,["\n        "])),(n()(),a._31(8,0,null,3,3,"ion-title",[],null,null,null,z.b,z.a)),a._30(9,49152,null,0,B.a,[G.a,a.t,a.V,[2,E.a],[2,F.a]],null,null),(n()(),a._31(10,16777216,null,0,1,"core-format-text",[["contextLevel","module"]],null,null,null,null,null)),a._30(11,540672,null,0,Q.a,[a.t,S.a,X.a,Y.a,U.a,N.a,Z.a,$.a,nn.a,en.a,ln.a,an.a,[2,J.a],[2,on.a],[2,tn.a],un.a,q.a,dn.a,rn.a,_n.a,a._11],{text:[0,"text"],contextLevel:[1,"contextLevel"],contextInstanceId:[2,"contextInstanceId"],courseId:[3,"courseId"]},null),(n()(),a._55(-1,3,["\n\n        "])),(n()(),a._31(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),a._30(14,16384,null,1,sn.a,[G.a,a.t,a.V,[2,E.a],[2,F.a]],null,null),a._52(603979776,2,{_buttons:1}),(n()(),a._55(-1,null,["\n            "])),(n()(),a._55(-1,null,["\n        "])),(n()(),a._55(-1,3,["\n    "])),(n()(),a._55(-1,null,["\n"])),(n()(),a._55(-1,null,["\n"])),(n()(),a._31(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,cn.b,cn.a)),a._30(22,4374528,null,0,on.a,[G.a,N.a,pn.a,a.t,a.V,H.a,fn.a,a.M,[2,L.a],[2,J.a]],null,null),(n()(),a._55(-1,1,["\n    "])),(n()(),a._31(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(n,e,l){var a=!0;if("ionRefresh"===e){a=!1!==n.component.workshopComponent.doRefresh(l)&&a}return a},null,null)),a._30(25,212992,null,0,hn.a,[N.a,on.a,a.M,bn.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(n()(),a._55(-1,null,["\n        "])),(n()(),a._31(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,gn.b,gn.a)),a._30(28,114688,null,0,mn.a,[hn.a,G.a],{pullingText:[0,"pullingText"]},null),a._47(131072,xn.a,[U.a,a.j]),(n()(),a._55(-1,null,["\n    "])),(n()(),a._55(-1,1,["\n\n    "])),(n()(),a._31(32,0,null,1,1,"addon-mod-workshop-index",[],null,[[null,"dataRetrieved"]],function(n,e,l){var a=!0;if("dataRetrieved"===e){a=!1!==n.component.updateData(l)&&a}return a},C.c,C.b)),a._30(33,245760,[[1,4]],0,r.a,[a.C,vn.a,[2,on.a],In.a,kn.a,J.a,Mn.a,Z.a,N.a,Pn.a,Rn.a],{module:[0,"module"],courseId:[1,"courseId"],group:[2,"group"]},{dataRetrieved:"dataRetrieved"}),(n()(),a._55(-1,1,["\n"])),(n()(),a._55(-1,null,["\n"]))],function(n,e){var l=e.component;n(e,6,0);n(e,11,0,l.title,"module",l.module.id,l.courseId);n(e,25,0,l.workshopComponent.loaded);n(e,28,0,a._34(1,"",a._56(e,28,0,a._44(e,29).transform("core.pulltorefresh")),""));n(e,33,0,l.module,l.courseId,l.selectedGroup)},function(n,e){n(e,4,0,a._44(e,5)._hidden,a._44(e,5)._sbPadding);n(e,21,0,a._44(e,22).statusbarPadding,a._44(e,22)._hasRefresher);n(e,24,0,"inactive"!==a._44(e,25).state,a._44(e,25)._top);n(e,27,0,a._44(e,28).r.state)})}Object.defineProperty(e,"__esModule",{value:!0});var a=l(0),o=l(5),t=l(3),u=l(32),d=l(484),r=l(519),_=this&&this.__decorate||function(n,e,l,a){var o,t=arguments.length,u=t<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,l):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(n,e,l,a);else for(var d=n.length-1;d>=0;d--)(o=n[d])&&(u=(t<3?o(u):t>3?o(e,l,u):o(e,l))||u);return t>3&&u&&Object.defineProperty(e,l,u),u},i=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},s=function(){function AddonModWorkshopIndexPage(n){this.module=n.get("module")||{},this.courseId=n.get("courseId"),this.selectedGroup=n.get("group")||0,this.title=this.module.name}return AddonModWorkshopIndexPage.prototype.updateData=function(n){this.title=n.name||this.title},_([Object(a._9)(r.a),i("design:type",r.a)],AddonModWorkshopIndexPage.prototype,"workshopComponent",void 0),AddonModWorkshopIndexPage=_([Object(a.m)({selector:"page-addon-mod-workshop-index",templateUrl:"index.html"}),i("design:paramtypes",[o.t])],AddonModWorkshopIndexPage)}(),c=this&&this.__decorate||function(n,e,l,a){var o,t=arguments.length,u=t<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,l):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(n,e,l,a);else for(var d=n.length-1;d>=0;d--)(o=n[d])&&(u=(t<3?o(u):t>3?o(e,l,u):o(e,l))||u);return t>3&&u&&Object.defineProperty(e,l,u),u},p=function(){function AddonModWorkshopIndexPageModule(){}return AddonModWorkshopIndexPageModule=c([Object(a.I)({declarations:[s],imports:[u.a,d.a,o.l.forChild(s),t.b.forChild()]})],AddonModWorkshopIndexPageModule)}(),f=l(1522),h=l(1523),b=l(1524),g=l(1525),m=l(1526),x=l(1527),v=l(1528),I=l(1529),k=l(1530),M=l(1531),P=l(1532),R=l(1533),y=l(1534),w=l(1537),j=l(1538),A=l(1535),W=l(1536),O=l(1539),V=l(272),C=l(1567),D=l(371),G=l(8),L=l(39),T=l(723),F=l(212),H=l(35),J=l(20),K=l(473),N=l(16),U=l(18),q=l(9),z=l(724),B=l(314),E=l(247),Q=l(47),S=l(1),X=l(4),Y=l(11),Z=l(2),$=l(22),nn=l(6),en=l(17),ln=l(10),an=l(15),on=l(29),tn=l(28),un=l(42),dn=l(40),rn=l(30),_n=l(36),sn=l(372),cn=l(181),pn=l(34),fn=l(107),hn=l(159),bn=l(44),gn=l(213),mn=l(173),xn=l(25),vn=l(175),In=l(189),kn=l(71),Mn=l(162),Pn=l(203),Rn=l(291),yn=l(69),wn=a._29({encapsulation:2,styles:[],data:{}}),jn=a._27("page-addon-mod-workshop-index",s,function View_AddonModWorkshopIndexPage_Host_0(n){return a._57(0,[(n()(),a._31(0,0,null,null,1,"page-addon-mod-workshop-index",[],null,null,null,View_AddonModWorkshopIndexPage_0,wn)),a._30(1,49152,null,0,s,[yn.a],null,null)],null,null)},{},{},[]),An=l(7),Wn=l(23),On=l(367),Vn=l(368),Cn=l(370),Dn=l(369),Gn=l(472),Ln=l(722),Tn=l(106),Fn=l(26),Hn=l(271),Jn=l(74),Kn=l(198),Nn=l(270);l.d(e,"AddonModWorkshopIndexPageModuleNgFactory",function(){return Un});var Un=a._28(p,[],function(n){return a._40([a._41(512,a.o,a._21,[[8,[f.a,h.a,b.a,g.a,m.a,x.a,v.a,I.a,k.a,M.a,P.a,R.a,y.a,w.a,j.a,A.a,W.a,O.a,V.a,C.a,jn]],[3,a.o],a.K]),a._41(4608,An.m,An.l,[a.G,[2,An.w]]),a._41(4608,Wn.x,Wn.x,[]),a._41(4608,Wn.d,Wn.d,[]),a._41(4608,On.b,On.a,[]),a._41(4608,Vn.a,Vn.b,[]),a._41(4608,Cn.b,Cn.a,[]),a._41(4608,Dn.b,Dn.a,[]),a._41(4608,U.a,U.a,[Gn.a,On.b,Vn.a,Cn.b,Dn.b,U.b,U.c]),a._41(512,u.a,u.a,[]),a._41(512,An.b,An.b,[]),a._41(512,Wn.v,Wn.v,[]),a._41(512,Wn.i,Wn.i,[]),a._41(512,Wn.s,Wn.s,[]),a._41(512,Ln.a,Ln.a,[]),a._41(512,t.b,t.b,[]),a._41(512,Tn.a,Tn.a,[]),a._41(512,Fn.a,Fn.a,[]),a._41(512,Hn.a,Hn.a,[]),a._41(512,Jn.a,Jn.a,[]),a._41(512,Kn.a,Kn.a,[]),a._41(512,d.a,d.a,[]),a._41(512,Ln.b,Ln.b,[]),a._41(512,p,p,[]),a._41(256,U.c,void 0,[]),a._41(256,U.b,void 0,[]),a._41(256,Nn.a,s,[])])})}});