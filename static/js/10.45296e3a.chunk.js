(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{297:function(e,a,t){e.exports=t.p+"static/media/default-dashboard.c772de00.png"},311:function(e,a,t){"use strict";t.r(a);var r=t(97),n=t(98),o=t(100),s=t(99),l=t(101),d=t(0),c=t.n(d),i=t(267),h=t(38),b=t(160),m=t(297),u=t.n(m),p=t(298),D=t.n(p),E=t(104),f=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(s.a)(a).call(this,e))).state={title:t.props.dashboardObject.title,id:t.props.dashboardObject.id,date_created:t.props.dashboardObject.date_created},t}return Object(l.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return c.a.createElement(i.h,{xs:"12",sm:"3",md:"3",key:this.state.id,id:this.state.id},c.a.createElement(i.r,{isOpen:this.props.deleteDashboardModalOpen,toggle:this.props.onDeleteDashboard,className:"modal-danger"},c.a.createElement(i.u,{toggle:this.props.onDeleteDashboard},"Delete Dashboard ",this.state.title," ?"),c.a.createElement(i.s,null,"This action can not be undone!"),c.a.createElement(i.t,null,c.a.createElement(i.a,{color:"danger"},"Delete")," ",c.a.createElement(i.a,{color:"secondary",onClick:this.props.onDeleteDashboard},"Cancel"))),c.a.createElement(i.c,null,c.a.createElement(i.g,null,c.a.createElement("a",{href:"#/dashboards/"+this.state.id},this.state.title),c.a.createElement("div",{className:"card-header-actions"},c.a.createElement("button",{className:"card-header-action btn btn-setting"},c.a.createElement("i",{className:"icon-settings"})),c.a.createElement("button",{onClick:this.props.onDeleteDashboard,className:"card-header-action btn btn-close"},c.a.createElement("i",{className:"icon-close"})))),c.a.createElement(i.d,null,c.a.createElement("img",{className:"card-img-bottom",src:u.a,alt:"Default Dashboard"})),c.a.createElement(i.e,null,"Created - ",c.a.createElement(D.a,{interval:0,format:"DD MMM YYYY - hh:mm a",date:this.state.date_created}))))}}]),a}(d.Component),g=Object(E.a)(function(e){return{deleteDashboardModalOpen:e.dashboardsReducer.deleteDashboardModalOpen}},null)(f),O=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(s.a)(a).call(this,e))).setNewDashboardTitle=function(e){t.setState({newDashboardTitle:e.target.value})},t.state={newDashboardTitle:""},t}return Object(l.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){this.props.loadSavedDashboards()}},{key:"render",value:function(){var e=this,a=this.props.dashboardList.map(function(a,t){return c.a.createElement(g,{key:a.id,dashboardObject:a,onDeleteDashboard:e.props.onDeleteDashboard,continueDeleteDashboard:e.props.continueDeleteDashboard})});return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(i.w,null,c.a.createElement(i.h,null,c.a.createElement(i.b,{className:"mr-2"},c.a.createElement(i.a,{color:"primary",onClick:this.props.onToggleNewDashboardModal},"New Dashboard"),c.a.createElement(i.r,{isOpen:this.props.newDashboardModalOpen,toggle:this.props.onToggleNewDashboardModal,className:"modal-primary"},c.a.createElement(i.u,{toggle:this.props.onToggleNewDashboardModal},"Create Dashboard"),c.a.createElement(i.s,null,c.a.createElement(i.k,{action:"",method:"post",className:"form-horizontal"},c.a.createElement(i.l,{row:!0},c.a.createElement(i.h,{md:"2"},c.a.createElement(i.q,{htmlFor:"dashboard-title"},"Title")),c.a.createElement(i.h,{xs:"12",md:"10"},c.a.createElement(i.m,{onChange:this.setNewDashboardTitle,type:"text",id:"dashboard-title",name:"dashboard-title",placeholder:"Please enter title for dashboard"}))))),c.a.createElement(i.t,null,c.a.createElement(i.a,{disabled:!this.state.newDashboardTitle,color:"primary",onClick:function(){return e.props.onDashboardCreate(e.state.newDashboardTitle)}},"Create")," ",c.a.createElement(i.a,{color:"secondary",onClick:this.props.onToggleNewDashboardModal},"Cancel")))),c.a.createElement(i.b,{className:"mr-2"},c.a.createElement(i.a,{disabled:!0,color:"success"},"Import")))),c.a.createElement(i.w,{className:"top-buffer"},a))}}]),a}(d.Component);a.default=Object(b.b)(function(e){return{newDashboardModalOpen:e.dashboardsReducer.newDashboardModalOpen,dashboardList:e.dashboardsReducer.dashboardList,deleteDashboardModalOpen:e.dashboardsReducer.deleteDashboardModalOpen}},function(e){return{onDashboardCreate:function(a){return e(function(e){return{type:h.b,newDashboardTitle:e}}(a))},onToggleNewDashboardModal:function(){return e({type:h.e})},loadSavedDashboards:function(){return e({type:h.d})},onDeleteDashboard:function(){return e({type:h.c})},continueDeleteDashboard:function(a){return e(function(e){return{type:h.a,dashboardID:e}}(a))}}})(O)}}]);
//# sourceMappingURL=10.45296e3a.chunk.js.map