(this.webpackJsonppart6=this.webpackJsonppart6||[]).push([[0],{19:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(2),o=t.n(c),r=t(14),a=t.n(r),u=(t(19),t(3)),i=t(0),s=function(e){var n=e.filter,t=e.filterChange;return console.log(n),Object(i.jsxs)("div",{children:["Etsi: ",Object(i.jsx)("input",{value:n,onChange:t})]})},l=function(e){var n=e.person;return console.log(n),Object(i.jsxs)("li",{children:[n.name," ",n.number]})},d=function(e){var n=e.addPerson,t=e.newName,c=e.handleNameChange,o=e.newNumber,r=e.handleNumberChange;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:t,onChange:c})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:o,onChange:r})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},j=t(4),b=t.n(j),h="/api/persons",f=function(){return b.a.get(h).then((function(e){return e.data}))},g=function(e){return b.a.post(h,e).then((function(e){return e.data}))},m=function(e,n){return console.log("update kutsuttiin"),console.log(e,n),b.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},O=function(){Object(c.useEffect)((function(){f().then((function(e){o(e)}))}),[]);var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],r=Object(c.useState)(""),a=Object(u.a)(r,2),j=a[0],b=a[1],h=Object(c.useState)(""),O=Object(u.a)(h,2),p=O[0],v=O[1],x=Object(c.useState)(""),C=Object(u.a)(x,2),N=C[0],w=C[1],S=function(){return p?t.filter((function(e){return!!e.name&&e.name.toUpperCase().includes(p.toUpperCase())})):t};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(s,{filter:p,filterChange:function(e){console.log(e.target.value),v(e.target.value),S()}}),Object(i.jsx)("h3",{children:"Lis\xe4\xe4 dude"}),Object(i.jsx)(d,{addPerson:function(e){console.log(e),e.preventDefault();var n={name:j,number:N};if(t.find((function(e){return e.name===j}))){var c=t.find((function(e){return e.name===j})),r=window.confirm("".concat(j," is already added to phonebook. Update phone number?"));if(console.log(r),!r)return;m(c.id,n).then((function(e){c.number=e.number,b(""),w("")})).catch((function(e){console.log(e)}))}else g(n).then((function(e){o(t.concat(n)),b(""),w("")})).catch((function(e){console.log(e)}))},newName:j,handleNameChange:function(e){console.log(e.target.value),b(e.target.value)},newNumber:N,handleNumberChange:function(e){console.log(e.target.value),w(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)("ul",{children:S().map((function(e){return console.log(e),Object(i.jsx)(l,{person:e},e.name)}))})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),o(e),r(e),a(e)}))};a.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),p()}},[[39,1,2]]]);
//# sourceMappingURL=main.a5f7665a.chunk.js.map