(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{2189:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/post/[slug]",function(){return e(6809)}])},4082:function(n,t,e){"use strict";var r=e(2729),i=e(5893),o=e(1664),l=e.n(o),a=e(4217);function _templateObject(){let n=(0,r._)(["\n	margin: 0.4rem;\n	padding: 0.4rem;\n	background-color: var(--background-alt);\n	border-radius: 0.6rem;\n	transition: 0.4s ease background-color;\n	color: var(--foreground-alt);\n	cursor: pointer;\n\n	&:hover {\n		background-color: var(--background-sat);\n	}\n"]);return _templateObject=function(){return n},n}function _templateObject1(){let n=(0,r._)(["\n	margin: "," 0;\n"]);return _templateObject1=function(){return n},n}function SmallCategory(n){let{category:t}=n,e=t.attributes;return null==e?null:(0,i.jsx)(l(),{href:"/blog/category/".concat(e.slug),children:(0,i.jsx)(c,{children:e.title})})}let c=a.Z.span(_templateObject()),u=a.Z.div(_templateObject1(),n=>{let{marginVertical:t}=n;return t?"2rem":0});t.Z=function(n){let{category:t,marginVertical:e}=n,r=null==t?void 0:t.data;return null===r?null:(0,i.jsxs)(u,{marginVertical:e,children:["Posted in",(0,i.jsx)(SmallCategory,{category:t.data})]})}},7219:function(n,t,e){"use strict";e.d(t,{IH:function(){return FilledButton},tS:function(){return HollowButton},ui:function(){return ButtonList}});var r=e(2729),i=e(5893),o=e(4217),l=e(1664),a=e.n(l);function _templateObject(){let n=(0,r._)(["\n	position: relative;\n	display: inline-block;\n	margin: 0.5rem 0;\n	padding: 1rem 2rem;\n	border: none;\n	color: white;\n	border-radius: 4px;\n	font-weight: bold;\n	text-transform: uppercase;\n	cursor: pointer;\n	text-align: center;\n	transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);\n"]);return _templateObject=function(){return n},n}function _templateObject1(){let n=(0,r._)(["\n	color: #4a8da5;\n	border: 2px solid #fff;\n	overflow: hidden;\n	font-size: 0.8rem;\n\n	&:after {\n		content: '';\n		position: absolute;\n		background: #fff;\n		width: 100%;\n		height: 100%;\n		left: 0;\n		top: 0;\n		transform: translateY(0%);\n		transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);\n	}\n\n	&:hover {\n		color: #fff;\n		&:after {\n			transform: translateY(-100%);\n		}\n	}\n"]);return _templateObject1=function(){return n},n}function _templateObject2(){let n=(0,r._)(["\n	border: 2px solid #fff;\n	overflow: hidden;\n	font-size: 0.8rem;\n\n	&:after {\n		content: '';\n		position: absolute;\n		background: #fff;\n		width: 100%;\n		height: 100%;\n		left: 0;\n		top: 0;\n		transform: translateY(100%);\n		transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);\n	}\n\n	&:hover {\n		color: #4a8da5;\n		&:after {\n			transform: translateY(0%);\n		}\n	}\n"]);return _templateObject2=function(){return n},n}function _templateObject3(){let n=(0,r._)(["\n	position: relative;\n	z-index: 1;\n"]);return _templateObject3=function(){return n},n}function _templateObject4(){let n=(0,r._)(["\n	& > * {\n		margin-right: 1rem;\n	}\n"]);return _templateObject4=function(){return n},n}let c=o.Z.span(_templateObject()),u=(0,o.Z)(c)(_templateObject1()),s=(0,o.Z)(c)(_templateObject2()),d=o.Z.span(_templateObject3()),HollowButton=n=>{let{href:t,children:e,rel:r,className:o}=n;return(0,i.jsx)(a(),{href:t,children:(0,i.jsx)(s,{className:o,children:(0,i.jsx)(d,{children:e})})})},FilledButton=n=>{let{href:t,children:e,rel:r,className:o}=n;return(0,i.jsx)(a(),{href:t,children:(0,i.jsx)(u,{className:o,children:(0,i.jsx)(d,{children:e})})})},f=o.Z.div(_templateObject4()),ButtonList=n=>{let{children:t}=n;return(0,i.jsx)(f,{children:t})}},1894:function(n,t,e){"use strict";function getFromServer(n){return"/assets/images".concat(n)}e.d(t,{e:function(){return getFromServer}})},6809:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return m},default:function(){return _slug_}});var r=e(5893),i=e(2729),o=e(4740),l=e(4217);function _templateObject(){let n=(0,i._)(["\n	margin: 0 auto;\n	width: calc(100% - 4rem);\n	max-width: var(--main-width);\n	padding: 4rem 0;\n\n	p, hr, div {\n		margin: 0 auto;\n		max-width: 60ch;\n		font-size: 1.5rem;\n		\n		@media screen and (max-width: 55rem) {\n			font-size: 1.2rem;\n		}\n\n		@media screen and (max-width: 30rem) {\n			font-size: 1rem;\n		}\n	}\n\n	hr {\n		margin: 1rem auto;\n	}\n\n	p {\n		padding: 1rem 0;\n		text-indent: 3rem;\n	}\n"]);return _templateObject=function(){return n},n}let a=l.Z.div(_templateObject());var Individual=function(n){let t=n.post;return(0,r.jsx)(a,{children:(0,r.jsx)(o.D,{children:t.content})})},c=e(7184),u=e(337),s=e(7219),d=e(1894),f=e(4082),m=!0,_slug_=function(n){var t;let e=null==n?void 0:null===(t=n.post)||void 0===t?void 0:t.data[0],i=null==e?void 0:e.attributes,o=null!=e,l="Post: Connection Issue",a=(0,r.jsx)("p",{children:"There was an issue retrieving the category."}),m=null,b="";if(void 0!==i){if(null!==i){l=i.title,m=(0,r.jsx)(Individual,{post:i}),a=(0,r.jsx)(f.Z,{category:i.blogCategory,marginVertical:!0});let n=i.featuredImage.data.attributes.url;void 0!==n&&(b=(0,d.e)(n))}else l="Post not found",a=(0,r.jsx)("p",{children:"Unable to find the post you were looking for."}),b=""}return(0,r.jsxs)(c.Z,{title:"".concat(l," | Karim's Blog"),desc:"Karim Abdel Hamid's blog, full of stories,\n				dev logs, programming rants, and more.",children:[(0,r.jsx)(u.Z,{background:b,height:o?"50rem":"100vh",fadeVarName:o?"background":void 0,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:l}),a,(0,r.jsx)(s.tS,{href:"/blog",children:"View all posts"})]})}),m]})}}},function(n){n.O(0,[122,740,615,774,888,179],function(){return n(n.s=2189)}),_N_E=n.O()}]);