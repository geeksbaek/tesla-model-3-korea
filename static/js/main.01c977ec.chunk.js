(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{208:function(e,t,a){e.exports=a(376)},213:function(e,t,a){},214:function(e,t,a){},358:function(e,t,a){},376:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(50),c=a.n(r),s=(a(213),a(16)),o=a(17),i=a(19),u=a(18),m=a(20),d=(a(214),a(99)),p=a(52),h=a(385),E=a(395),_=a(386),b=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return null}}]),t}(l.a.Component),g=a(130),y=a(393),f=a(384),C=a(399),v=a(197),k=a(387),w=a(398),x=a(392),O=a(40),I=a(75),T=a.n(I),j=a(126),H=a.n(j),P=function(e){return Number(e).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},F=a(390),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).onClick=function(e,t){a.props.onChange(e,t),a.props.calcTotalPrice()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(F.a,{compact:"very",singleLine:!0,size:"small",celled:!0,selectable:!0,fixed:!0},l.a.createElement(F.a.Header,null,l.a.createElement(F.a.Row,null,l.a.createElement(F.a.HeaderCell,null,"\ubaa8\ub378\uba85"),l.a.createElement(F.a.HeaderCell,null,"\uac00\uaca9"),l.a.createElement(F.a.HeaderCell,null,"\uc8fc\ud589\uac70\ub9ac(EPA)"),l.a.createElement(F.a.HeaderCell,null,"0-60mph"),l.a.createElement(F.a.HeaderCell,null,"\uad6c\ub3d9\ubc29\uc2dd"))),l.a.createElement(F.a.Body,null,this.props.trims.map(function(t,a){return l.a.createElement(F.a.Row,{key:a,active:e.props.base_selected===a,onClick:function(){return e.onClick(a,t)},style:{cursor:"pointer"}},l.a.createElement(F.a.Cell,null,t["\uc774\ub984"]),l.a.createElement(F.a.Cell,null,P(e.props.usdTokrw(t["\uac00\uaca9"]))+" \uc6d0"),l.a.createElement(F.a.Cell,null,t["\uc8fc\ud589\uac70\ub9ac(km)"]+" km"),l.a.createElement(F.a.Cell,null,t["0-60"]+" \ucd08"),l.a.createElement(F.a.Cell,null,t["\uad6c\ub3d9\ubc29\uc2dd"]))})))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).onClick=function(e,t){a.props.onChange(e,t),a.props.calcTotalPrice()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(F.a,{compact:"very",singleLine:!0,size:"small",celled:!0,selectable:!0,fixed:!0},l.a.createElement(F.a.Header,null,l.a.createElement(F.a.Row,null,l.a.createElement(F.a.HeaderCell,null,"\uc0c9\uc0c1"),l.a.createElement(F.a.HeaderCell,null,"\uac00\uaca9"))),l.a.createElement(F.a.Body,null,this.props.options.color.map(function(t,a){return l.a.createElement(F.a.Row,{key:a,active:e.props.color_selected===a,onClick:function(){return e.onClick(a,t)},style:{cursor:"pointer"}},l.a.createElement(F.a.Cell,null,t["\uc774\ub984"]),l.a.createElement(F.a.Cell,null,P(e.props.usdTokrw(t["\uac00\uaca9"]))+" \uc6d0"))})))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).onClick=function(e,t){a.props.onChange(e,t),a.props.calcTotalPrice()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(F.a,{compact:"very",singleLine:!0,size:"small",celled:!0,selectable:!0,fixed:!0},l.a.createElement(F.a.Header,null,l.a.createElement(F.a.Row,null,l.a.createElement(F.a.HeaderCell,null,"\ud720"),l.a.createElement(F.a.HeaderCell,null,"\uac00\uaca9"))),l.a.createElement(F.a.Body,null,this.props.options.wheels.map(function(t,a){return l.a.createElement(F.a.Row,{key:a,active:e.props.wheels_selected===a,disabled:!e.props.performance&&"Performance"===t._only||e.props.performance&&"!Performance"===t._only,onClick:function(){return e.onClick(a,t)},style:{cursor:"pointer"}},l.a.createElement(F.a.Cell,null,t["\uc774\ub984"]),l.a.createElement(F.a.Cell,null,P(e.props.usdTokrw(t["\uac00\uaca9"]))+" \uc6d0"))})))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).onClick=function(e,t){a.props.onChange(e,t),a.props.calcTotalPrice()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(F.a,{compact:"very",singleLine:!0,size:"small",celled:!0,selectable:!0,fixed:!0},l.a.createElement(F.a.Header,null,l.a.createElement(F.a.Row,null,l.a.createElement(F.a.HeaderCell,null,"\uc778\ud14c\ub9ac\uc5b4"),l.a.createElement(F.a.HeaderCell,null,"\uac00\uaca9"))),l.a.createElement(F.a.Body,null,this.props.options.interior.map(function(t,a){return l.a.createElement(F.a.Row,{key:a,active:e.props.interior_selected===a,onClick:function(){return e.onClick(a,t)},style:{cursor:"pointer"}},l.a.createElement(F.a.Cell,null,t["\uc774\ub984"]),l.a.createElement(F.a.Cell,null,P(e.props.usdTokrw(t["\uac00\uaca9"]))+" \uc6d0"))})))}}]),t}(n.Component),M=a(394),z=a(388),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).onClick=function(e,t){a.props.onChange(e,t),a.props.calcTotalPrice()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(F.a,{compact:"very",singleLine:!0,size:"small",celled:!0,selectable:!0,fixed:!0},l.a.createElement(F.a.Header,null,l.a.createElement(F.a.Row,null,l.a.createElement(F.a.HeaderCell,null,"\uc624\ud1a0\ud30c\uc77c\ub7ff"),l.a.createElement(F.a.HeaderCell,null,"\uac00\uaca9"))),l.a.createElement(F.a.Body,null,this.props.options.autopilot.map(function(t,a){return l.a.createElement(F.a.Row,{key:a,active:e.props.autopilot_selected===a,onClick:function(){return e.onClick(a,t)},style:{cursor:"pointer"}},l.a.createElement(F.a.Cell,null,t["\uc774\ub984"]," ",l.a.createElement(M.a,{trigger:l.a.createElement(O.a,{name:"question circle outline"}),position:"top center"},l.a.createElement(M.a.Content,null,l.a.createElement(z.a,{as:"ul"},t["\uc124\uba85"].split("\n").map(function(e,t){return l.a.createElement(z.a.Item,{as:"li",key:t},e)}))))),l.a.createElement(F.a.Cell,null,P(e.props.usdTokrw(t["\uac00\uaca9"]))+" \uc6d0"))})))}}]),t}(n.Component),G=a(396),L=a(389),B=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.gov_subsidy.map(function(e,t){return{key:t,value:t,text:"".concat(e.name," (").concat(P(e.subsidy),"\uc6d0)")}}),t=this.props.local_subsidy.map(function(e,t){return{key:t,value:t,text:"".concat(e.name," (").concat(P(e.subsidy),"\uc6d0)")}});return l.a.createElement("div",{style:{width:"100%"}},l.a.createElement(k.a.Group,{widths:"equal"},l.a.createElement(k.a.Field,null,l.a.createElement(G.a,{sub:!0},"\uc815\ubd80 \ubcf4\uc870\uae08"),l.a.createElement(f.a,{hidden:!0,fitted:!0}),l.a.createElement(f.a,{hidden:!0,fitted:!0}),l.a.createElement(L.a,{defaultValue:e[0]?e[0].value:0,fluid:!0,deburr:!0,options:e,selection:!0,search:!0,onChange:this.props.onGovSubsidyChange})),l.a.createElement(f.a,{hidden:!0,fitted:!0}),l.a.createElement(f.a,{hidden:!0,fitted:!0}),l.a.createElement(f.a,{hidden:!0,fitted:!0}),l.a.createElement(f.a,{hidden:!0,fitted:!0}),l.a.createElement(f.a,{hidden:!0,fitted:!0}),l.a.createElement(f.a,{hidden:!0,fitted:!0}),l.a.createElement(f.a,{hidden:!0,fitted:!0}),l.a.createElement(f.a,{hidden:!0,fitted:!0}),l.a.createElement(k.a.Field,null,l.a.createElement(G.a,{sub:!0},"\uc9c0\ubc29\uc790\uce58\ub2e8\uccb4 \ubcf4\uc870\uae08"),l.a.createElement(f.a,{hidden:!0,fitted:!0}),l.a.createElement(f.a,{hidden:!0,fitted:!0}),l.a.createElement(L.a,{defaultValue:t[0]?t[0].value:0,fluid:!0,deburr:!0,options:t,placeholder:"\uac70\uc8fc\uc9c0\ub97c \uc120\ud0dd\ud558\uc138\uc694",selection:!0,search:!0,onChange:this.props.onLocalSubsidyChange}))))}}]),t}(n.Component),W=a(391),q=a(74),U=a(377),K=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(W.a,{fluid:!0},l.a.createElement(W.a.Content,null,l.a.createElement(W.a.Header,{textAlign:"center"},"\uc608\uc0c1 \ud604\uae08 \uac00\uaca9")),l.a.createElement(W.a.Content,null,l.a.createElement(z.a,null,l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Description,null,l.a.createElement(z.a,null,this.props.selectedOptions().map(function(t,a){return l.a.createElement(z.a.Item,{key:a},l.a.createElement(q.a,{as:"a",horizontal:!0,color:t["\uac00\uaca9"]>0?"red":null},t["\uc774\ub984"],l.a.createElement(q.a.Detail,null,P(e.props.usdTokrw(t["\uac00\uaca9"]))+"\uc6d0")))}))))),l.a.createElement(f.a,null),l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Icon,{name:"car"}),l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Header,{style:{color:"grey"}},P(this.props.total_price)+" \uc6d0"),l.a.createElement(z.a.Description,null,"\ucc28\ub7c9 \uacf5\uc7a5\ub3c4 \uac00\uaca9"))),l.a.createElement(f.a,null),l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Icon,{name:"plus"}),l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Header,{style:{color:"orange"}},P(this.props.calcFuncs()["\ubd80\uac00\uac00\uce58\uc138_\uacfc\uc138"]())+" \uc6d0"),l.a.createElement(M.a,{trigger:l.a.createElement(z.a.Description,null,"\ubd80\uac00\uac00\uce58\uc138"),content:"\ucde8\ub4dd \ub2f9\uc2dc \uac00\uc561\uc758 10%",size:"small"}))),l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Icon,{name:"plus"}),l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Header,{style:{color:"orange"}},P(this.props.calcFuncs()["\uac1c\ubcc4\uc18c\ube44\uc138_\uacfc\uc138"]())+" \uc6d0"),l.a.createElement(M.a,{trigger:l.a.createElement(z.a.Description,null,"\uac1c\ubcc4\uc18c\ube44\uc138"),content:"\uacf5\uc7a5\ub3c4 \uac00\uaca9\uc758 5%",size:"small"}))),l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Icon,{name:"minus"}),l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Header,{style:{color:"green"}},P(this.props.calcFuncs()["\uac1c\ubcc4\uc18c\ube44\uc138_\uac10\uba74"]())+" \uc6d0"),l.a.createElement(M.a,{trigger:l.a.createElement(z.a.Description,null,"\uac1c\ubcc4\uc18c\ube44\uc138 \uac10\uba74"),content:"\ucd5c\ub300 300\ub9cc\uc6d0 \uac10\uba74",size:"small"}))),l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Icon,{name:"plus"}),l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Header,{style:{color:"orange"}},P(this.props.calcFuncs()["\uad50\uc721\uc138_\uacfc\uc138"]())+" \uc6d0"),l.a.createElement(M.a,{trigger:l.a.createElement(z.a.Description,null,"\uad50\uc721\uc138"),content:"\uac1c\ubcc4\uc18c\ube44\uc138\uc758 30%",size:"small"}))),l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Icon,{name:"minus"}),l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Header,{style:{color:"green"}},P(this.props.calcFuncs()["\uad50\uc721\uc138_\uac10\uba74"]())+" \uc6d0"),l.a.createElement(M.a,{trigger:l.a.createElement(z.a.Description,null,"\uad50\uc721\uc138 \uac10\uba74"),content:"\ucd5c\ub300 90\ub9cc\uc6d0 \uac10\uba74",size:"small"}))),l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Icon,{name:"plus"}),l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Header,{style:{color:"orange"}},P(this.props.calcFuncs()["\ucde8\ub4dd\uc138_\uacfc\uc138"]())+" \uc6d0"),l.a.createElement(M.a,{trigger:l.a.createElement(z.a.Description,null,"\ucde8\ub4dd\uc138"),content:"(\uacf5\uc7a5\ub3c4 \uac00\uaca9 + \uac1c\ubcc4\uc18c\ube44\uc138 + \uad50\uc721\uc138)\uc758 7%",size:"small"}))),l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Icon,{name:"minus"}),l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Header,{style:{color:"green"}},P(this.props.calcFuncs()["\ucde8\ub4dd\uc138_\uac10\uba74"]())+" \uc6d0"),l.a.createElement(M.a,{trigger:l.a.createElement(z.a.Description,null,"\ucde8\ub4dd\uc138 \uac10\uba74"),content:"\ucd5c\ub300 140\ub9cc\uc6d0 \uac10\uba74",size:"small"}))),l.a.createElement(f.a,null),l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Icon,{name:"minus"}),l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Header,{style:{color:"green"}},P(this.props.gov_subsidy?this.props.gov_subsidy.subsidy:0)+" \uc6d0"),l.a.createElement(z.a.Description,null,"\uc815\ubd80 \ubcf4\uc870\uae08"))),l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Icon,{name:"minus"}),l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Header,{style:{color:"green"}},P(this.props.local_subsidy?this.props.local_subsidy.subsidy:0)+" \uc6d0"),l.a.createElement(z.a.Description,null,"\uc9c0\ubc29\uc790\uce58\ub2e8\uccb4 \ubcf4\uc870\uae08"))),l.a.createElement(f.a,null),l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Icon,{name:"plus"}),l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Header,{style:{color:"orange"}},P(this.props.calcFuncs()["\ucde8\ub4dd\uc138_\uacfc\uc138"]()-this.props.calcFuncs()["\ucde8\ub4dd\uc138_\uac10\uba74"]())+" \uc6d0"),l.a.createElement(M.a,{trigger:l.a.createElement(z.a.Description,null,"\ucde8\ub4dd\uc138"),content:"\uac10\uba74 \ud6c4 \uae08\uc561",size:"small"}))),l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Icon,{name:"calculator"}),l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Header,null,P(this.props.calcFuncs()["\ucd5c\uc885\uac00\uaca9"]())+" \uc6d0"),l.a.createElement(M.a,{trigger:l.a.createElement(z.a.Description,null,"\ucd5c\uc885 \uac00\uaca9"),content:"\ucde8\ub4dd\uc138 \ubcc4\ub3c4",size:"small"}))))),l.a.createElement(W.a.Content,{extra:!0,textAlign:"right"},l.a.createElement(U.a,{href:"https://www.tesla.com/ko_KR/model3/reserve",target:"_blank",compact:!0,fluid:!0},"Model 3 \uc0ac\uc804 \uc608\uc57d")))}}]),t}(n.Component),V=a(383),J=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(W.a,{fluid:!0},l.a.createElement(W.a.Content,null,l.a.createElement(W.a.Header,{textAlign:"center"},"\uc608\uc0c1 \ud560\ubd80 \uacb0\uc81c\uc561")),l.a.createElement(W.a.Content,null,l.a.createElement(z.a,null,l.a.createElement(z.a.Item,null,l.a.createElement(k.a,null,l.a.createElement(k.a.Group,{widths:"equal"},l.a.createElement(k.a.Field,{width:1,readOnly:!0,control:V.a,label:"\uc120\ub0a9\uae081 (\ubcf4\uc870\uae08)",placeholder:"\uc120\ub0a9\uae081",value:P(this.props.calcFuncs()["\uc804\uae30\ucc28_\ubcf4\uc870\uae08"]())}),l.a.createElement(k.a.Field,{width:1,control:V.a,label:"\uc120\ub0a9\uae082 (\uadf8 \uc678)",placeholder:"\uc120\ub0a9\uae082",value:P(this.props.prepay||""),onChange:this.props.onPrepayChange})),l.a.createElement(k.a.Group,{widths:"equal"},l.a.createElement(k.a.Field,{width:1,type:"number",control:V.a,label:"\ud560\ubd80 \uc5f0\uc774\uc728 (%)",error:0===this.props.annual_loan_interest_rate,value:this.props.annual_loan_interest_rate||"",onChange:this.props.onLoanRateChange}),l.a.createElement(k.a.Field,{width:1,type:"number",control:V.a,label:"\ud560\ubd80 \uac1c\uc6d4 \uc218",error:0===this.props.installment_months,value:this.props.installment_months||"",onChange:this.props.onMonthsChange})))),l.a.createElement(f.a,null),l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Description,null,l.a.createElement(z.a,null,this.props.selectedOptions().map(function(t,a){return l.a.createElement(z.a.Item,{key:a},l.a.createElement(q.a,{as:"a",horizontal:!0,color:t["\uac00\uaca9"]>0?"red":null},t["\uc774\ub984"],l.a.createElement(q.a.Detail,null,P(e.props.usdTokrw(t["\uac00\uaca9"]))+"\uc6d0")))}))))),l.a.createElement(f.a,null),l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Icon,{name:"car"}),l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Header,{style:{color:"grey"}},P(this.props.calcFuncs()["\ud560\ubd80\uc6d0\uae08"]())+" \uc6d0"),l.a.createElement(M.a,{trigger:l.a.createElement(z.a.Description,null,"\ucc28\ub7c9 \uac00\uaca9"),content:"\uacf5\uc7a5\ub3c4 \uac00\uaca9 + \ubd80\uac00\uac00\uce58\uc138 + \uac1c\ubcc4\uc18c\ube44\uc138 + \uad50\uc721\uc138",size:"small"}))),l.a.createElement(f.a,null),l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Icon,{name:"minus"}),l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Header,{style:{color:"green"}},P(this.props.calcFuncs()["\uc804\uae30\ucc28_\ubcf4\uc870\uae08"]())+" \uc6d0"),l.a.createElement(M.a,{trigger:l.a.createElement(z.a.Description,null,"\uc120\ub0a9\uae081 (\ubcf4\uc870\uae08)"),content:"\uc815\ubd80 \ubcf4\uc870\uae08 + \uc9c0\ubc29\uc790\uce58\ub2e8\uccb4 \ubcf4\uc870\uae08",size:"small"}))),l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Icon,{name:"minus"}),l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Header,{style:{color:"green"}},P(this.props.prepay)+" \uc6d0"),l.a.createElement(z.a.Description,null,"\uc120\ub0a9\uae082 (\uadf8 \uc678)"))),l.a.createElement(f.a,null),l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Icon,{name:"won sign"}),l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Header,{style:{color:"grey"}},P(this.props.calcFuncs()["\ud560\ubd80\uc6d0\uae08"]()-this.props.calcFuncs()["\uc804\uae30\ucc28_\ubcf4\uc870\uae08"]()-this.props.prepay)+" \uc6d0"),l.a.createElement(M.a,{trigger:l.a.createElement(z.a.Description,null,"\ub300\ucd9c\uc6d0\uae08"),content:"\ucc28\ub7c9 \uac00\uaca9 - \uc120\ub0a9\uae08",size:"small"}))),l.a.createElement(f.a,null),l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Icon,{name:"plus"}),l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Header,{style:{color:"orange"}},P(this.props.calcFuncs()["\ucde8\ub4dd\uc138_\uacfc\uc138"]()-this.props.calcFuncs()["\ucde8\ub4dd\uc138_\uac10\uba74"]())+" \uc6d0"),l.a.createElement(M.a,{trigger:l.a.createElement(z.a.Description,null,"\ucde8\ub4dd\uc138"),content:"\uac10\uba74 \ud6c4 \uae08\uc561",size:"small"}))),l.a.createElement(z.a.Item,null,l.a.createElement(z.a.Icon,{name:"calculator"}),l.a.createElement(z.a.Content,null,l.a.createElement(z.a.Header,null,P(this.props.calcFuncs()["\uc6d0\ub9ac\uae08\uade0\ub4f1\uc0c1\ud658_\uc6d4\ub0a9\uc785\uae08"](this.props.calcFuncs()["\ud560\ubd80\uc6d0\uae08"]()-this.props.calcFuncs()["\uc804\uae30\ucc28_\ubcf4\uc870\uae08"]()-this.props.prepay,this.props.annual_loan_interest_rate,this.props.installment_months))+" \uc6d0"),l.a.createElement(M.a,{trigger:l.a.createElement(z.a.Description,null,"\uc6d4\uc0c1\ud658\uae08"),content:"\uc6d0\ub9ac\uae08 \uade0\ub4f1\uc0c1\ud658\ubc29\uc2dd (\ucde8\ub4dd\uc138 \ubcc4\ub3c4)",size:"small"}))))),l.a.createElement(W.a.Content,{extra:!0,textAlign:"right"},l.a.createElement(U.a,{href:"https://www.tesla.com/ko_KR/model3/reserve",target:"_blank",compact:!0,fluid:!0},"Model 3 \uc0ac\uc804 \uc608\uc57d")))}}]),t}(n.Component),Q=(a(358),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={trims:[],options:{color:[],interior:[],wheels:[],autopilot:[]},saletex:{"\uac1c\ubcc4\uc18c\ube44\uc138":{"\uacfc\uc138":0,"\uac10\uba74":0},"\uad50\uc721\uc138":{"\uacfc\uc138":0,"\uac10\uba74":0},"\ucde8\ub4dd\uc138":{"\uacfc\uc138":0,"\uac10\uba74":0}},gov_subsidy:[],selected_gov_subsidy:0,local_subsidy:[],selected_local_subsidy:0,loadingA:!0,loadingB:!0,performance_index:-1,base_selected:0,base_price:0,color_selected:0,color_price:0,wheels_selected:0,wheels_price:0,interior_selected:0,interior_price:0,autopilot_selected:0,autopilot_price:0,total_price:0,final_price:0,prepay:0,annual_loan_interest_rate:3.5,installment_months:60,activeIndex:-1},a.onAccordionClick=function(e,t){var n=t.index,l=a.state.activeIndex===n?-1:n;a.setState({activeIndex:l})},a.onTrimChange=function(e,t){a.setState({base_price:a.usdTokrw(t["\uac00\uaca9"]),base_selected:e,wheels_price:0,wheels_selected:"Performance"===t["\uc774\ub984"]?2:2===a.state.wheels_selected?0:a.state.wheels_selected})},a.onColorChange=function(e,t){a.setState({color_price:a.usdTokrw(t["\uac00\uaca9"]),color_selected:e})},a.onWheelsChange=function(e,t){a.setState({wheels_price:a.usdTokrw(t["\uac00\uaca9"]),wheels_selected:e})},a.onInteriorChange=function(e,t){a.setState({interior_price:a.usdTokrw(t["\uac00\uaca9"]),interior_selected:e})},a.onAutoPilotChange=function(e,t){a.setState({autopilot_price:a.usdTokrw(t["\uac00\uaca9"]),autopilot_selected:e})},a.selectedOptions=function(){return 0===a.state.trims.length?[]:[a.state.trims[a.state.base_selected],a.state.options.color[a.state.color_selected],a.state.options.wheels[a.state.wheels_selected],a.state.options.interior[a.state.interior_selected],a.state.options.autopilot[a.state.autopilot_selected]]},a.usdTokrw=function(e){return(e*a.state.exchange).toFixed(0)},a.calcTotalPrice=function(){return a.setState(function(e){return{total_price:Number(e.base_price)+Number(e.color_price)+Number(e.wheels_price)+Number(e.interior_price)+Number(e.autopilot_price)}})},a.calcFuncs=function(){return{"\ubd80\uac00\uac00\uce58\uc138_\uacfc\uc138":function(){return.1*a.state.total_price},"\uac1c\ubcc4\uc18c\ube44\uc138_\uacfc\uc138":function(){return a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138},"\uac1c\ubcc4\uc18c\ube44\uc138_\uac10\uba74":function(){return Math.min(a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138,a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uac10\uba74)},"\uad50\uc721\uc138_\uacfc\uc138":function(){return a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138*a.state.saletex.\uad50\uc721\uc138.\uacfc\uc138},"\uad50\uc721\uc138_\uac10\uba74":function(){return Math.min(a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138*a.state.saletex.\uad50\uc721\uc138.\uacfc\uc138,a.state.saletex.\uad50\uc721\uc138.\uac10\uba74)},"\ucde8\ub4dd\uc138_\uacfc\uc138":function(){return(a.state.total_price+(a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138-Math.min(a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138,a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uac10\uba74))+(a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138*a.state.saletex.\uad50\uc721\uc138.\uacfc\uc138-Math.min(a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138*a.state.saletex.\uad50\uc721\uc138.\uacfc\uc138,a.state.saletex.\uad50\uc721\uc138.\uac10\uba74)))*a.state.saletex.\ucde8\ub4dd\uc138.\uacfc\uc138},"\ucde8\ub4dd\uc138_\uac10\uba74":function(){return Math.min((a.state.total_price+(a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138-Math.min(a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138,a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uac10\uba74))+(a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138*a.state.saletex.\uad50\uc721\uc138.\uacfc\uc138-Math.min(a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138*a.state.saletex.\uad50\uc721\uc138.\uacfc\uc138,a.state.saletex.\uad50\uc721\uc138.\uac10\uba74)))*a.state.saletex.\ucde8\ub4dd\uc138.\uacfc\uc138,a.state.saletex.\ucde8\ub4dd\uc138.\uac10\uba74)},"\uc804\uae30\ucc28_\ubcf4\uc870\uae08":function(){return(a.state.gov_subsidy[a.state.selected_gov_subsidy]?a.state.gov_subsidy[a.state.selected_gov_subsidy].subsidy:0)+(a.state.local_subsidy[a.state.selected_local_subsidy]?a.state.local_subsidy[a.state.selected_local_subsidy].subsidy:0)},"\ud560\ubd80\uc6d0\uae08":function(){return Math.max(a.state.total_price+.1*a.state.total_price+a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138-Math.min(a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138,a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uac10\uba74)+a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138*a.state.saletex.\uad50\uc721\uc138.\uacfc\uc138-Math.min(a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138*a.state.saletex.\uad50\uc721\uc138.\uacfc\uc138,a.state.saletex.\uad50\uc721\uc138.\uac10\uba74),0)},"\ucd5c\uc885\uac00\uaca9":function(){return Math.max(a.state.total_price+.1*a.state.total_price+a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138-Math.min(a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138,a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uac10\uba74)+a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138*a.state.saletex.\uad50\uc721\uc138.\uacfc\uc138-Math.min(a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138*a.state.saletex.\uad50\uc721\uc138.\uacfc\uc138,a.state.saletex.\uad50\uc721\uc138.\uac10\uba74)-((a.state.gov_subsidy[a.state.selected_gov_subsidy]?a.state.gov_subsidy[a.state.selected_gov_subsidy].subsidy:0)+(a.state.local_subsidy[a.state.selected_local_subsidy]?a.state.local_subsidy[a.state.selected_local_subsidy].subsidy:0)),0)},"\uc6d0\ub9ac\uae08\uade0\ub4f1\uc0c1\ud658_\uc6d4\ub0a9\uc785\uae08":function(e,t,a){var n=t/12*.01,l=Math.pow(1+n,a);return e*n*l/(l-1)}}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.a.get("https://api.exchangeratesapi.io/latest?base=USD&symbols=KRW").then(function(t){e.setState({exchange:t.data.rates.KRW,exchange_date:t.data.date}),T.a.get("https://raw.githubusercontent.com/geeksbaek/tesla-model-3-korea/master/data/model_3.yaml").then(function(t){var a=H.a.parse(t.data);e.setState({trims:a.trims,options:a.options,base_price:e.usdTokrw(a.trims[0]["\uac00\uaca9"]),base_selected:0,loadingA:!1}),a.trims.forEach(function(t,a){"Performance"===t["\uc774\ub984"]&&e.setState({performance_index:a})}),e.calcTotalPrice()}),T.a.get("https://raw.githubusercontent.com/geeksbaek/tesla-model-3-korea/master/data/saletex.yaml").then(function(t){var a=H.a.parse(t.data);e.setState({saletex:{"\uac1c\ubcc4\uc18c\ube44\uc138":{"\uacfc\uc138":a["\uac1c\ubcc4\uc18c\ube44\uc138"]["\uacfc\uc138"],"\uac10\uba74":a["\uac1c\ubcc4\uc18c\ube44\uc138"]["\uac10\uba74"]},"\uad50\uc721\uc138":{"\uacfc\uc138":a["\uad50\uc721\uc138"]["\uacfc\uc138"],"\uac10\uba74":a["\uad50\uc721\uc138"]["\uac10\uba74"]},"\ucde8\ub4dd\uc138":{"\uacfc\uc138":a["\ucde8\ub4dd\uc138"]["\uacfc\uc138"],"\uac10\uba74":a["\ucde8\ub4dd\uc138"]["\uac10\uba74"]}},loadingB:!1})}),T.a.get("https://raw.githubusercontent.com/geeksbaek/tesla-model-3-korea/master/data/subsidy.json").then(function(t){e.setState({gov_subsidy:t.data.gov,local_subsidy:t.data.local})})})}},{key:"render",value:function(){var e=this;return l.a.createElement(g.a,{basic:!0,textAlign:"left",className:"SegmentGroup",loading:this.state.loadingA&&this.state.loadingB},l.a.createElement(y.a,{info:!0},l.a.createElement(y.a.List,null,l.a.createElement(y.a.Header,null,"\uba3c\uc800 \uc77d\uc5b4\uc8fc\uc138\uc694"),l.a.createElement(f.a,{hidden:!0,fitted:!0}),l.a.createElement(f.a,{hidden:!0,fitted:!0}),l.a.createElement(f.a,{hidden:!0,fitted:!0}),l.a.createElement(f.a,{hidden:!0,fitted:!0}),l.a.createElement(y.a.Item,null,"\uc5ec\uae30\uc5d0\uc11c \ud45c\uae30\ub418\ub294 \ubaa8\ub4e0 \uac00\uaca9\uc740 \ubbf8\uad6d \ub2ec\ub7ec\uc5d0\uc11c"," ",l.a.createElement("strong",null,this.state.exchange_date)," \uae30\uc900 \ud658\uc728 (1USD=",l.a.createElement("strong",null,this.state.exchange?this.state.exchange.toFixed(2):0),"KRW)\uc744 \uc801\uc6a9\ud558\uc5ec \uc6d0\ud654\ub85c \ubcc0\ud658\ub41c \uac12\uc785\ub2c8\ub2e4."),l.a.createElement(y.a.Item,null,"\uad6c\uc785\uc5d0 \ud544\uc694\ud55c \ucd5c\uc18c\ud55c\uc758 \uc635\uc158\uc774 \ubbf8\ub9ac \uc120\ud0dd\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),l.a.createElement(y.a.Item,null,"\uc774 \ud398\uc774\uc9c0\ub294"," ",l.a.createElement("strong",null,l.a.createElement("a",{href:"https://github.com/geeksbaek/tesla-model-3-korea",target:"_blank"},"Github")),"\uc5d0\uc11c \uc624\ud508\uc18c\uc2a4\ub85c \uad00\ub9ac\ub418\uba70, \ubcc0\uacbd\uc0ac\ud56d\uc740"," ",l.a.createElement("strong",null,l.a.createElement("a",{href:"https://github.com/geeksbaek/tesla-model-3-korea/blob/master/CHANGELOG.md",target:"_blank"},"\uc5ec\uae30")),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),l.a.createElement(y.a.Item,null,"\uacc4\uc0b0\ub41c \uac00\uaca9\uacfc \uc2e4\uc81c \uac00\uaca9\uc740 \ucc28\uc774\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc73c\uba70 \uc774\ub85c \uc778\ud574 \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\uc5d0 \ub300\ud55c \ucc45\uc784\uc740 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4."))),l.a.createElement(C.a,{as:g.a,basic:!0,minWidth:C.a.onlyTablet.minWidth},l.a.createElement(v.a,{columns:2,verticalAlign:"top",centered:!0},l.a.createElement(v.a.Column,{width:10},l.a.createElement(k.a,null,l.a.createElement(k.a.Group,null,l.a.createElement(S,{base_selected:this.state.base_selected,trims:this.state.trims,calcTotalPrice:this.calcTotalPrice,onChange:this.onTrimChange,usdTokrw:this.usdTokrw})),l.a.createElement(k.a.Group,null,l.a.createElement(D,{color_selected:this.state.color_selected,options:this.state.options,calcTotalPrice:this.calcTotalPrice,onChange:this.onColorChange,usdTokrw:this.usdTokrw})),l.a.createElement(k.a.Group,null,l.a.createElement(A,{performance:this.state.base_selected===this.state.performance_index,wheels_selected:this.state.wheels_selected,options:this.state.options,calcTotalPrice:this.calcTotalPrice,onChange:this.onWheelsChange,usdTokrw:this.usdTokrw})),l.a.createElement(k.a.Group,null,l.a.createElement(R,{interior_selected:this.state.interior_selected,options:this.state.options,calcTotalPrice:this.calcTotalPrice,onChange:this.onInteriorChange,usdTokrw:this.usdTokrw})),l.a.createElement(k.a.Group,null,l.a.createElement(N,{autopilot_selected:this.state.autopilot_selected,options:this.state.options,calcTotalPrice:this.calcTotalPrice,onChange:this.onAutoPilotChange,usdTokrw:this.usdTokrw})),l.a.createElement(f.a,{hidden:!0}),l.a.createElement(k.a.Group,null,l.a.createElement(B,{onGovSubsidyChange:function(t,a){var n=a.value;e.setState({selected_gov_subsidy:n})},onLocalSubsidyChange:function(t,a){var n=a.value;e.setState({selected_local_subsidy:n})},gov_subsidy:this.state.gov_subsidy,local_subsidy:this.state.local_subsidy})))),l.a.createElement(v.a.Column,{width:6},l.a.createElement(w.a,{menu:{secondary:!0,pointing:!0},panes:[{menuItem:"\ud604\uae08",render:function(){return l.a.createElement(K,{total_price:e.state.total_price,gov_subsidy:e.state.gov_subsidy[e.state.selected_gov_subsidy],local_subsidy:e.state.local_subsidy[e.state.selected_local_subsidy],calcFuncs:e.calcFuncs,selectedOptions:e.selectedOptions,usdTokrw:e.usdTokrw})}},{menuItem:"\ud560\ubd80",render:function(){return l.a.createElement(J,{prepay:e.state.prepay,annual_loan_interest_rate:e.state.annual_loan_interest_rate,installment_months:e.state.installment_months,onPrepayChange:function(t,a){var n=a.value;n.match(/[^\d,]/g)||e.setState({prepay:Number(n.replace(/[,.]/g,""))})},onLoanRateChange:function(t,a){var n=a.value;e.setState({annual_loan_interest_rate:Number(n)})},onMonthsChange:function(t,a){var n=a.value;e.setState({installment_months:Number(n)})},calcFuncs:e.calcFuncs,selectedOptions:e.selectedOptions,usdTokrw:e.usdTokrw})}}]})))),l.a.createElement(C.a,C.a.onlyMobile,l.a.createElement(x.a,null,l.a.createElement(x.a.Title,{active:0===this.state.activeIndex,index:0,onClick:this.onAccordionClick},l.a.createElement(O.a,{name:"dropdown"}),"\ud2b8\ub9bc"),l.a.createElement(x.a.Content,{active:0===this.state.activeIndex},l.a.createElement(S,{base_selected:this.state.base_selected,trims:this.state.trims,calcTotalPrice:this.calcTotalPrice,onChange:this.onTrimChange,usdTokrw:this.usdTokrw})),l.a.createElement(x.a.Title,{active:1===this.state.activeIndex,index:1,onClick:this.onAccordionClick},l.a.createElement(O.a,{name:"dropdown"}),"\uc0c9\uc0c1"),l.a.createElement(x.a.Content,{active:1===this.state.activeIndex},l.a.createElement(D,{color_selected:this.state.color_selected,options:this.state.options,calcTotalPrice:this.calcTotalPrice,onChange:this.onColorChange,usdTokrw:this.usdTokrw})),l.a.createElement(x.a.Title,{active:2===this.state.activeIndex,index:2,onClick:this.onAccordionClick},l.a.createElement(O.a,{name:"dropdown"}),"\ud720"),l.a.createElement(x.a.Content,{active:2===this.state.activeIndex},l.a.createElement(A,{performance:this.state.base_selected===this.state.performance_index,wheels_selected:this.state.wheels_selected,options:this.state.options,calcTotalPrice:this.calcTotalPrice,onChange:this.onWheelsChange,usdTokrw:this.usdTokrw})),l.a.createElement(x.a.Title,{active:3===this.state.activeIndex,index:3,onClick:this.onAccordionClick},l.a.createElement(O.a,{name:"dropdown"}),"\uc778\ud14c\ub9ac\uc5b4"),l.a.createElement(x.a.Content,{active:3===this.state.activeIndex},l.a.createElement(R,{interior_selected:this.state.interior_selected,options:this.state.options,calcTotalPrice:this.calcTotalPrice,onChange:this.onInteriorChange,usdTokrw:this.usdTokrw})),l.a.createElement(x.a.Title,{active:4===this.state.activeIndex,index:4,onClick:this.onAccordionClick},l.a.createElement(O.a,{name:"dropdown"}),"\uc624\ud1a0\ud30c\uc77c\ub7ff"),l.a.createElement(x.a.Content,{active:4===this.state.activeIndex},l.a.createElement(N,{autopilot_selected:this.state.autopilot_selected,options:this.state.options,calcTotalPrice:this.calcTotalPrice,onChange:this.onAutoPilotChange,usdTokrw:this.usdTokrw})),l.a.createElement(x.a.Title,{active:5===this.state.activeIndex,index:5,onClick:this.onAccordionClick},l.a.createElement(O.a,{name:"dropdown"}),"\uc804\uae30\ucc28 \ubcf4\uc870\uae08"),l.a.createElement(x.a.Content,{active:5===this.state.activeIndex},l.a.createElement(B,{onGovSubsidyChange:function(t,a){var n=a.value;e.setState({selected_gov_subsidy:n})},onLocalSubsidyChange:function(t,a){var n=a.value;e.setState({selected_local_subsidy:n})},gov_subsidy:this.state.gov_subsidy,local_subsidy:this.state.local_subsidy}))),l.a.createElement(f.a,null),l.a.createElement(w.a,{menu:{secondary:!0,pointing:!0},panes:[{menuItem:"\ud604\uae08",render:function(){return l.a.createElement(K,{total_price:e.state.total_price,gov_subsidy:e.state.gov_subsidy[e.state.selected_gov_subsidy],local_subsidy:e.state.local_subsidy[e.state.selected_local_subsidy],calcFuncs:e.calcFuncs,selectedOptions:e.selectedOptions,usdTokrw:e.usdTokrw})}},{menuItem:"\ud560\ubd80",render:function(){return l.a.createElement(J,{prepay:e.state.prepay,annual_loan_interest_rate:e.state.annual_loan_interest_rate,installment_months:e.state.installment_months,onPrepayChange:function(t,a){var n=a.value;n.match(/[^\d,]/g)||e.setState({prepay:Number(n.replace(/[,.]/g,""))})},onLoanRateChange:function(t,a){var n=a.value;e.setState({annual_loan_interest_rate:Number(n)})},onMonthsChange:function(t,a){var n=a.value;e.setState({installment_months:Number(n)})},calcFuncs:e.calcFuncs,selectedOptions:e.selectedOptions,usdTokrw:e.usdTokrw})}}]})))}}]),t}(n.Component)),$=a(196),X="tesla-model-3-korea";function Y(){if(void 0===window.DISQUS){var e=document.createElement("script");e.async=!0,e.src="https://"+X+".disqus.com/embed.js",document.getElementsByTagName("head")[0].appendChild(e)}else window.DISQUS.reset({reload:!0})}var Z=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||this.props.title!==e.title||this.props.path!==e.path}},{key:"componentDidMount",value:function(){Y()}},{key:"componentDidUpdate",value:function(){Y()}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.title,n=e.path,r=Object($.a)(e,["id","title","path"]);return Object({NODE_ENV:"production",PUBLIC_URL:"/tesla-model-3-korea"}).BROWSER&&(window.disqus_shortname=X,window.disqus_identifier=t,window.disqus_title=a,window.disqus_url="https://geeksbaek.github.io"+n),l.a.createElement("div",Object.assign({},r,{id:"disqus_thread"}))}}]),t}(l.a.Component),ee=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(Z,{id:"root",title:"Tesla Model 3 Korea",path:"/tesla-model-3-korea"})}}]),t}(l.a.Component),te=a(195),ae=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).contextRef=l.a.createRef(),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(te.a,{borderless:!0,pointing:!0,secondary:!0,style:{backgroundColor:"white"}},this.props.panes.map(function(t,a){return l.a.createElement(te.a.Item,{as:d.b,key:a,to:t.menuItem.path,name:t.menuItem.content,icon:t.menuItem.icon,active:e.props.location.pathname===t.menuItem.path,onClick:e.handleItemClick,position:a===e.props.panes.length-1?"right":null})}))}}]),t}(n.Component),ne=Object(p.d)(ae),le=[{menuItem:{key:"feed",path:"/",icon:"newspaper",content:"\uc18c\uc2dd"},render:function(){return l.a.createElement(b,null)}},{menuItem:{key:"price",path:"/price",icon:"calculator",content:"\uac00\uaca9"},render:function(){return l.a.createElement(Q,null)}},{menuItem:{key:"comments",path:"/comments",icon:"talk",content:"\uc758\uacac"},render:function(){return l.a.createElement(ee,null)}}],re=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,{style:{padding:"10px 0"}},l.a.createElement(d.a,null,l.a.createElement(E.a,{innerRef:this.contextRef},l.a.createElement(_.a,{bottomOffset:50,context:this.contextRef},l.a.createElement(ne,{panes:le}))),le.map(function(e,t){return l.a.createElement(p.a,{key:t,exact:!0,path:e.menuItem.path,render:e.render})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[208,1,2]]]);
//# sourceMappingURL=main.01c977ec.chunk.js.map