(this.webpackJsonpcode_voting=this.webpackJsonpcode_voting||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(13),a=n.n(c),s=(n(94),n(95),n(96),n(148)),o=n(149),j=n(140),u=n(142),d=n(2);var h=function(e){return Object(d.jsx)(j.a,{position:"static",children:Object(d.jsx)(u.a,{children:Object(d.jsx)("h1",{children:"Wahlapp"})})})},l=n(17),b=n(143),x=n(144),O=n(145),v=n(146),f=n(147),g=n(150),p=n(56);var m=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(p.a,{variant:"h5",children:"Herzlich Willkommen in der Wahlapp!"})})},S=n(83),k=n.n(S);var C=function(e){return Object(d.jsx)(k.a,{className:"Camera",videoConstraints:{width:{min:480},height:{min:720},facingMode:"environment",aspectRatio:.75},audio:!1,height:720})};var w=function(e){var t=i.a.useState(!1),n=Object(l.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){!1===c&&(setTimeout((function(){return e.handleNext()}),e.timeout),a(!0))}),[c,e]),Object(d.jsx)("div",{children:Object(d.jsx)(C,{})})};var N=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(p.a,{variant:"h4",children:"Pr\xfcfcode"}),Object(d.jsx)(p.a,{variant:"h4",children:"6523"}),Object(d.jsx)(p.a,{variant:"h6",color:"textSecondary",children:"Sollte der Code nicht korrekt sein, kontaktieren Sie den Support!"})]})};var W=function(e){var t=i.a.useState(!1),n=Object(l.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){!1===c&&(setTimeout((function(){return e.handleNext()}),e.timeout),a(!0))}),[c,e]),Object(d.jsx)("div",{children:Object(d.jsx)(C,{})})};var F=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(p.a,{variant:"h4",children:"Finalisierungscode"}),Object(d.jsx)(p.a,{variant:"h4",children:"2535-5412"}),Object(d.jsx)(p.a,{variant:"h6",color:"textSecondary",children:"Sollte der Code nicht korrekt sein, kontaktieren Sie den Support!"})]})};var T=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(p.a,{variant:"h6",children:"Die Stimmabgabe war erfolgreich. Sie k\xf6nnen die Wahlapp nun beenden."})})};var y=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(p.a,{variant:"h5",children:"Fahren Sie nun mit den Anweisungen auf den Wahlunterlagen fort."})})};var B=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(p.a,{variant:"h6",children:'Hinweis: Im n\xe4chsten Schritt werden Sie aufgefordert, Zugriff auf Ihre Kamera zu gew\xe4hren. W\xe4hlen Sie dort "Zulassen".'})})},D=Object(b.a)((function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)}}}));function I(e,t){switch(e){case 0:return Object(d.jsx)(m,{});case 1:return Object(d.jsx)(y,{});case 2:return Object(d.jsx)(B,{});case 3:return Object(d.jsx)(w,{handleNext:t,timeout:5e3});case 4:return Object(d.jsx)(N,{});case 5:return Object(d.jsx)(W,{handleNext:t,timeout:5e3});case 6:return Object(d.jsx)(F,{});case 7:return Object(d.jsx)(T,{});default:return"Unknown step"}}function P(e){switch(e){case 0:case 1:return[!0,"Weiter"];case 2:return[!0,"Verstanden"];case 3:return[!1,""];case 4:return[!0,"Der Code ist korrekt"];case 5:return[!1,""];case 6:return[!0,"Der Code ist korrekt"];case 7:return[!1,""];default:return[!0,"Next"]}}function z(){var e=D(),t=i.a.useState(0),n=Object(l.a)(t,2),r=n[0],c=n[1],a=["1. Wahlapp","2. Auswahl","3. Wahlprozess starten","4. Wahl","5. Pr\xfcfcode","6. Best\xe4tigung","7. Finalisierung","8. Abschluss"],s=function(){c((function(e){return e+1}))};return Object(d.jsx)("div",{className:e.root,children:Object(d.jsx)(x.a,{activeStep:r,orientation:"vertical",children:a.map((function(t,n){return Object(d.jsxs)(O.a,{children:[Object(d.jsx)(v.a,{children:t}),Object(d.jsxs)(f.a,{children:[I(n,s),P(n)[0]&&Object(d.jsx)("div",{className:e.actionsContainer,children:Object(d.jsx)("div",{children:Object(d.jsx)(g.a,{variant:"contained",color:"primary",onClick:s,className:e.button,children:P(n)[1]})})})]})]},t)}))})})}n(84),n(62),n(63),n(61),Object(b.a)((function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)}}}));var A=function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)(s.a,{container:!0,direction:"column",children:[Object(d.jsx)(h,{className:"Topnav"}),Object(d.jsx)("div",{className:"ContainerStyles",children:Object(d.jsx)(z,{})})]}),Object(d.jsx)(o.a,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,151)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),E()},94:function(e,t,n){},95:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.44bd9485.chunk.js.map