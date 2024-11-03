(this.webpackJsonpquiltapp=this.webpackJsonpquiltapp||[]).push([[0],[,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAHYcAAB2HAY/l8WUAAACoSURBVFhH7ZgxEoAwCASD//9zpLCIUUGSAeNw28hYJDtwUki11rIe2/FcjCAtIjqqc/1EhBZ7tFHhWjVzz5ZgIFwdEfmuW8z1TUfEENmg7ZnqxER0a4DcC8KKMkThO5pHuFrXmg/f7SHyyciWhcRaA+nEEC0k1hrYyRiihcRa2FvOJNbC3nIGWhYitLBOnUmshXXqzKJa//xj8xXIlgVoWYCWBWi9p5QdEyBFS1G8qFEAAAAASUVORK5CYII="},,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAHYcAAB2HAY/l8WUAAAChSURBVFhH7ZfBCoNADAV3+///vC5t8GaSKZZ6mLmYwCMOGoWda63xPF5xfRhqEdQiqEVo/bfmnFGl7FH9ZFQXdLXqQe9MPxnNBcVL3CM20VSgZB6ud6vzOD/cmPRLJBTbtzdgB/I9OKHJ5NYtrWhuJZ/sbhHUIqhFUIugFkEtgloEtQhqEdQiqEVQi1AfX6P6Ad+fqv+Fu0VQi6AWQa0+YxxFYUVPNkjbeAAAAABJRU5ErkJggg=="},function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(4),l=a.n(i),r=(a(11),a(1)),s=(a(12),a(13),a(5)),o=a.n(s);var h=function(e){var t=e.title,a=e.graphic,n=e.onSelect,i=a||o.a,l=n?function(){return n(t)}:function(){console.log("got here "+t)};return c.a.createElement("div",{className:"QuiltButton",onClick:l},c.a.createElement("div",{className:"QuiltButton-title"},t),c.a.createElement("img",{src:i,alt:"grpahic goes here"}))};var u=function(e){var t=e.width,a=e.height,i=e.rows,l=e.cols,r=Object(n.useRef)();return Object(n.useEffect)((function(){if(r.current){var e=r.current.getContext("2d");e.clearRect(0,0,t,a);var n=t-10,c=a-10;e.rect(10,10,n-10,c-10),e.stroke();for(var s=(t-20)/l,o=(a-20)/i,h=0;h<i;h++)e.beginPath(),e.moveTo(10,10+h*o),e.lineTo(n,10+h*o),e.stroke();for(var u=0;u<l;u++)e.beginPath(),e.moveTo(10+u*s,10),e.lineTo(10+u*s,c),e.stroke()}}),[i,l]),c.a.createElement("div",{className:"CanvasVisualization"},c.a.createElement("canvas",{ref:r,width:t,height:a}))},m=a(2),A=a.n(m),E={undefined:{width_inches:0,height_inches:0},Twin:{width_inches:38,height_inches:75},"Twin XL":{width_inches:38,height_inches:80},Full:{width_inches:54,height_inches:75},Queen:{width_inches:60,height_inches:80},King:{width_inches:76,height_inches:80},"California King":{width_inches:72,height_inches:84}},d={"1/4inch":.25,"3/8inch":.375,"1/2inch":.5,"5/8inch":.625,"3/4inch":.75};var g=function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)(void 0),s=Object(r.a)(l,2),o=s[0],m=s[1],g=Object(n.useState)(void 0),v=Object(r.a)(g,2),f=v[0],S=v[1],w=Object(n.useState)(0),b=Object(r.a)(w,2),p=b[0],N=b[1],C=Object(n.useState)(0),O=Object(r.a)(C,2),j=O[0],R=O[1],U=Object(n.useState)(0),q=Object(r.a)(U,2),B=q[0],Q=q[1],F=Object(n.useState)(0),Y=Object(r.a)(F,2),x=Y[0],I=Y[1];Object(n.useEffect)((function(){j&&B&&I(j*B)}),[j,B]),Object(n.useEffect)((function(){if(o&&f&&p){var e=function(e){var t=e/(p-2*d[f]);return Math.ceil(t)};!function(){var t=E[o].height_inches;R(e(t))}(),function(){var t=E[o].width_inches;Q(e(t))}()}}),[o,f,p]);var _=function(e){m(e),i(1)},k=function(e){S(e),i(2)};return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"row-container header-background"},c.a.createElement("h1",{className:"page-title"},"Quilt Calculator")),c.a.createElement("div",{className:"row-container"},c.a.createElement("div",{className:"div-partner entry-form"},c.a.createElement("p",null,"Use the Quilt Calculator to see how many fabric squares, rows, and columns needed to create quilts of certain sizes."),c.a.createElement("h2",null,"Step 1: Select Quilt Size ",!a&&c.a.createElement("span",{className:"youarehere"},"\u21d0 You are here")),!a&&c.a.createElement("div",{className:"section section-0"},c.a.createElement("div",{className:"bed-selection"},c.a.createElement(h,{title:"Twin",onSelect:_}),c.a.createElement(h,{title:"Twin XL",onSelect:_}),c.a.createElement(h,{title:"Full",onSelect:_}),c.a.createElement(h,{title:"Queen",onSelect:_}),c.a.createElement(h,{title:"King",onSelect:_}),c.a.createElement(h,{title:"California King",onSelect:_}))),c.a.createElement("h2",null,"Step 2: Select Seam Allowance ",1===a&&c.a.createElement("span",{className:"youarehere"},"\u21d0 You are here")),1===a&&c.a.createElement("div",{className:"section section-1"},c.a.createElement("div",{className:"seam-selection"},c.a.createElement(h,{title:"1/4inch",graphic:A.a,onSelect:k}),c.a.createElement(h,{title:"3/8inch",graphic:A.a,onSelect:k}),c.a.createElement(h,{title:"1/2inch",graphic:A.a,onSelect:k}),c.a.createElement(h,{title:"5/8inch",graphic:A.a,onSelect:k}),c.a.createElement(h,{title:"3/4inch",graphic:A.a,onSelect:k}))),c.a.createElement("h2",null,"Step 3: Square size (inches) ",2===a&&c.a.createElement("span",{className:"youarehere"},"\u21d0 You are here")),2===a&&c.a.createElement("div",{className:"section section-1"},c.a.createElement("div",null,c.a.createElement("input",{type:"number",value:p,onChange:function(e){var t;t=e.target.value,N(t)},min:1,max:12}),c.a.createElement("button",{onClick:function(){i(3)}}," Confirm "))),c.a.createElement("h2",null,"Results: ",3===a&&c.a.createElement("span",{className:"youarehere"},"\u21d0 You are here")),c.a.createElement("div",{className:"results"},c.a.createElement("div",{className:"single-result"},c.a.createElement("b",null,"Size:")," ",o),c.a.createElement("div",{className:"single-result"},c.a.createElement("b",null,"Seam Allowance:")," ",f),c.a.createElement("div",{className:"single-result"},c.a.createElement("b",null,"Square Size:")," ",p),c.a.createElement("div",{className:"single-result"},c.a.createElement("b",null,"Dimensions (inches):")," ",E[o].width_inches," x ",E[o].height_inches),c.a.createElement("div",{className:"single-result"},c.a.createElement("b",null,"Rows needed:")," ",j),c.a.createElement("div",{className:"single-result"},c.a.createElement("b",null,"Columns needed:")," ",B),c.a.createElement("div",{className:"single-result"},c.a.createElement("b",null,"Squares needed:")," ",x))),c.a.createElement("div",{className:"div-partner quilt-visualization"},c.a.createElement(u,{width:"400",height:"500",rows:j,cols:B}),c.a.createElement("p",null,c.a.createElement("strong",null,"Note: "),"Canvas Visualization is not an exact rendering and should not be relied upon to make critical quilt decisions.",c.a.createElement("br",null)," Additionally there is a bug resulting in erronious renders when square size is re-entered. "))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.8cbdcae6.chunk.js.map