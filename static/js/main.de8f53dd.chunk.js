(this["webpackJsonpgithub-loc-rank-docs"]=this["webpackJsonpgithub-loc-rank-docs"]||[]).push([[0],{29:function(e,t,a){e.exports=a(66)},34:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),i=a.n(o),s=(a(34),a(15)),c=a(7),l=a.n(c),u=a(9),h=a(2),p=a(6),d=a(4),g=a(1),m=a(8),f=a(3),b=a(20),v=a.n(b),k=a(17),O=(a(59),"ascending"),j="descending",E=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.sortState,n=t.sort,o=t.children;if(o.toLowerCase()===a.type.toLowerCase())switch(a.direction){case O:e=O;break;case j:e=j}return r.a.createElement("span",{onClick:function(){n(o)},className:e},o)}}]),t}(n.PureComponent),y=(a(60),function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.option;return r.a.createElement("option",{value:e.name},e.name||"null"," -- ",e.count)}}]),t}(n.PureComponent)),S=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.languageList,a=e.filter;return r.a.createElement("select",{onChange:a},r.a.createElement("option",{value:"-"},"--language--"),t.map((function(e){return r.a.createElement(y,{option:e,key:e.name})})))}}]),t}(n.PureComponent),w=(a(61),function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.token,a=e.setToken,n=e.githubRequest;return r.a.createElement("div",{className:"tokenSection"},r.a.createElement("input",{type:"text",className:"tokenInput",value:t,onChange:a,placeholder:"github token"}),r.a.createElement("button",{onClick:n},"enter"))}}]),t}(n.PureComponent)),C=(a(62),function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.loadding,a=e.loadMore,n=this.props.page,o=n.next,i=n.total,s=o>i;return r.a.createElement("div",{className:"loadMore"},t?r.a.createElement("div",null,r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))):1!==i?s?r.a.createElement("div",null,"last page"):r.a.createElement("button",{onClick:a},"more"):void 0)}}]),t}(n.PureComponent)),L=(a(63),function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.repositories,a=e.sort,n=e.filter;return r.a.createElement("tbody",null,t.filter((function(e){return"-"===n||e.mainLanguage===n})).sort((function(e,t){if(""===a.type||""===a.direction)return!0;var n=e[a.type.toLowerCase()]-t[a.type.toLowerCase()];switch(a.direction){case"ascending":n*=1;break;case"descending":n*=-1}return n})).map((function(e){return r.a.createElement("tr",{key:e.repoName},r.a.createElement("td",null,r.a.createElement("a",{href:e.htmlUrl},e.repoName)),r.a.createElement("td",null,e.mainLanguage||"-"),r.a.createElement("td",null,e.loc),r.a.createElement("td",null,e.stars))})))}}]),t}(n.PureComponent)),x=(a(64),function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.page,t=e.next,a=e.total;return r.a.createElement("div",{className:"hint"},1===a?r.a.createElement("div",null,"apply for a"," ",r.a.createElement("a",{href:"https://github.com/settings/tokens"},"github token")," ",'with authoritization of "read:packages"'):t<=a?r.a.createElement("div",null,"\u221a there are ",a," pages, ",t-1," pages loadded"):t>a?r.a.createElement("div",null,"\u221a there are ",a," pages, all pages loadded"):void 0)}}]),t}(n.PureComponent));var N=function(e){var t=Object(s.a)(new Set(e.map((function(e){return e.mainLanguage})))).map((function(t){return{name:t,count:e.filter((function(e){return e.mainLanguage===t})).length}}));return t.sort((function(e,t){return t.count-e.count})),t},P=(a(65),function(e){function t(e){var a;Object(h.a)(this,t),a=Object(d.a)(this,Object(g.a)(t).call(this,e));var n=JSON.parse(localStorage.getItem("token"))||"",r=JSON.parse(localStorage.getItem("page"))||{next:1,total:1},o=JSON.parse(localStorage.getItem("repositories"))||[],i=JSON.parse(localStorage.getItem("languageList"))||[],s=null;return n&&0!==o.length&&((s=new v.a).restore({page:r,token:n}),n=""),a.state={filter:"-",sort:{type:"",direction:""},loadding:!1,token:n,repositories:o,page:r,languageList:i,githubLOC:s},a.sort=a.sort.bind(Object(m.a)(a)),a.filter=a.filter.bind(Object(m.a)(a)),a.setToken=a.setToken.bind(Object(m.a)(a)),a.githubRequest=a.githubRequest.bind(Object(m.a)(a)),a.loadMore=a.loadMore.bind(Object(m.a)(a)),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;["page","repositories","languageList"].forEach((function(t){localStorage.setItem(t,JSON.stringify(e.state[t]))}))}},{key:"sort",value:function(e){var t;this.state.sort.type===e?"ascending"===this.state.sort.direction?t="descending":"descending"===this.state.sort.direction&&(t="ascending"):this.state.sort.type!==e&&(t="ascending"),this.setState({sort:{type:e,direction:t}})}},{key:"filter",value:function(e){this.setState({filter:e.target.value})}},{key:"setToken",value:function(e){this.setState({token:e.target.value})}},{key:"githubRequest",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,n,r,o,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new v.a,e.prev=1,this.setState({loadding:!0}),e.next=5,t.init(this.state.token);case 5:a=e.sent,n=a.nextPage,r=a.pageLength,o=a.data,this.setState({loadding:!1}),s=N(i=o),k.a.success("token added"),localStorage.setItem("token",this.state.token),this.setState({githubLOC:t,repositories:i,languageList:s,token:"",page:{next:n,total:r}}),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),k.a.error("invalid token or failed network"),console.error(e.t0);case 21:case"end":return e.stop()}}),e,this,[[1,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"loadMore",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,n,r,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({loadding:!0}),e.next=4,this.state.githubLOC.load();case 4:t=e.sent,a=t.nextPage,n=t.pageLength,r=t.data,o=[].concat(Object(s.a)(this.state.repositories),Object(s.a)(r)),i=N(o),this.setState({repositories:o,languageList:i,page:{next:a,total:n},loadding:!1}),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),k.a.error("invalid token or failed network"),console.error(e.t0),this.setState({loadding:!1});case 18:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(w,{token:this.state.token,setToken:this.setToken,githubRequest:this.githubRequest}),r.a.createElement(x,{page:this.state.page}),r.a.createElement("div",{className:"tableContent"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"reponame"),r.a.createElement("th",null,r.a.createElement(S,{languageList:this.state.languageList,filter:this.filter})),r.a.createElement("th",null,r.a.createElement(E,{sort:this.sort,sortState:this.state.sort},"LOC")),r.a.createElement("th",null,r.a.createElement(E,{sort:this.sort,sortState:this.state.sort},"Stars")))),r.a.createElement(L,{repositories:this.state.repositories,sort:this.state.sort,filter:this.state.filter}))),r.a.createElement(C,{loadding:this.state.loadding,page:this.state.page,loadMore:this.loadMore}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.de8f53dd.chunk.js.map