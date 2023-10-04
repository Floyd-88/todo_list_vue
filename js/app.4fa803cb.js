(function(){"use strict";var o={8339:function(o,e,t){var n={};t.r(n);var s={};t.r(s);var r=t(9242),i=t(3396);const d={class:"main"},a={class:"form_items"};function l(o,e,t,n,s,r){const l=(0,i.up)("HeaderTodoList"),m=(0,i.up)("FilterItemsTodoList"),u=(0,i.up)("ItemsTodoList"),c=(0,i.up)("el-tabs"),f=(0,i.up)("AddItemTodoList"),h=(0,i.up)("FormItemTodoList"),p=(0,i.up)("StatisticsTodoList");return(0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("div",a,[(0,i.Wm)(l),(0,i.Wm)(c,{type:"border-card",modelValue:o.activeName,"onUpdate:modelValue":e[0]||(e[0]=e=>o.activeName=e),class:"demo-tabs"},{default:(0,i.w5)((()=>[(0,i.Wm)(m),(0,i.Wm)(u,{todos:o.filterTodo,onDoneTodo:o.doneTodo,onRemoveTodo:o.removeTodo},null,8,["todos","onDoneTodo","onRemoveTodo"])])),_:1},8,["modelValue"]),(0,i.Wm)(f,{onShowForm:o.showForm},null,8,["onShowForm"]),(0,i.Wm)(h,{isShowForm:o.isShowForm,onShowForm:o.showForm,onAddTodoList:o.addTodoList},null,8,["isShowForm","onShowForm","onAddTodoList"]),(0,i.Wm)(p,{stats:o.stats},null,8,["stats"])])])}t(541);const m={class:"header"};function u(o,e){return(0,i.wg)(),(0,i.iD)("div",m," My ToDo List ")}var c=t(89);const f={},h=(0,c.Z)(f,[["render",u]]);var p=h;function v(o,e){const t=(0,i.up)("el-tab-pane");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(t,{label:"Все",name:"all"}),(0,i.Wm)(t,{label:"Активные",name:"active"}),(0,i.Wm)(t,{label:"Завершенные",name:"done"})],64)}const T={},w=(0,c.Z)(T,[["render",v]]);var F=w;const g={class:"list_items"};function _(o,e,t,n,s,r){const d=(0,i.up)("ItemTodoList");return(0,i.wg)(),(0,i.iD)("div",g,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.todos,(e=>((0,i.wg)(),(0,i.j4)(d,{key:e.id,todo:e,onDoneTodo:o.doneTodo,onRemoveTodo:o.removeTodo},null,8,["todo","onDoneTodo","onRemoveTodo"])))),128))])}var b=t(7139);const y={class:"wrapper_item"},L={class:"item_content"};function S(o,e,t,n,s,r){const d=(0,i.up)("Check"),a=(0,i.up)("DeleteFilled");return(0,i.wg)(),(0,i.iD)("div",y,[(0,i._)("div",L,[(0,i._)("div",{class:(0,b.C_)(["item_icon",{done_icon:o.todo.done}])},[(0,i.Wm)(d,{class:"check_el"})],2),(0,i._)("div",{class:(0,b.C_)(["item_text",{done_item:o.todo.done}]),onClick:e[0]||(e[0]=e=>o.doneTodo())},(0,b.zw)(o.todo.text),3)]),(0,i._)("div",{class:"item_remove",onClick:e[1]||(e[1]=e=>o.removeTodo())},[(0,i.Wm)(a,{class:"remove_el"})])])}var I=t(2748),k=(0,i.aZ)({name:"ItemTodoList",props:{todo:{type:Object,required:!0}},methods:{doneTodo(){this.$emit("doneTodo",this.todo.id)},removeTodo(){this.$emit("removeTodo",this.todo.id)}},emits:{doneTodo:o=>Number.isInteger(o),removeTodo:o=>Number.isInteger(o)},components:{Check:I.JrY,DeleteFilled:I.wnF}});"function"===typeof n["default"]&&(0,n["default"])(k);const W=(0,c.Z)(k,[["render",S]]);var O=W,C=(0,i.aZ)({name:"ItemsTodoList",props:{todos:{type:Array,required:!0}},methods:{doneTodo(o){this.$emit("doneTodo",o)},removeTodo(o){this.$emit("removeTodo",o)}},emits:{doneTodo:o=>Number.isInteger(o),removeTodo:o=>Number.isInteger(o)},components:{ItemTodoList:O}});const D=(0,c.Z)(C,[["render",_]]);var Z=D;function N(o,e,t,n,s,r){const d=(0,i.up)("CirclePlus"),a=(0,i.up)("el-icon"),l=(0,i.up)("el-button");return(0,i.wg)(),(0,i.iD)("div",{class:"add_item",onClick:e[0]||(e[0]=e=>o.showForm())},[(0,i.Wm)(l,{round:""},{default:(0,i.w5)((()=>[(0,i.Wm)(a,{size:30},{default:(0,i.w5)((()=>[(0,i.Wm)(d)])),_:1})])),_:1})])}var j=(0,i.aZ)({name:"AddItemTodoList",methods:{showForm(){this.$emit("showForm",!0)}},emits:{showForm:o=>Boolean},components:{CirclePlus:I.Gq5}});const x=(0,c.Z)(j,[["render",N]]);var q=x;const A={class:"statistics"};function $(o,e,t,n,s,r){return(0,i.wg)(),(0,i.iD)("div",A," выполненных "+(0,b.zw)(o.stats.done)+", осталось "+(0,b.zw)(o.stats.active),1)}var P=(0,i.aZ)({props:{stats:{type:Object,required:!0}}});const V=(0,c.Z)(P,[["render",$]]);var B=V;const J=(0,i._)("h3",{class:"title_form"},"New task",-1);function z(o,e,t,n,s,r){const d=(0,i.up)("CloseBold"),a=(0,i.up)("el-icon"),l=(0,i.up)("el-input"),m=(0,i.up)("el-form-item"),u=(0,i.up)("el-button"),c=(0,i.up)("el-form");return o.isShowForm?((0,i.wg)(),(0,i.j4)(c,{key:0,model:o.form},{default:(0,i.w5)((()=>[(0,i._)("div",{class:"close",onClick:e[0]||(e[0]=e=>o.closeFormTodod())},[(0,i.Wm)(a,{center:""},{default:(0,i.w5)((()=>[(0,i.Wm)(d)])),_:1})]),J,(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(l,{modelValue:o.form.desc,"onUpdate:modelValue":e[1]||(e[1]=e=>o.form.desc=e),placeholder:"добавить задачу...",type:"textarea"},null,8,["modelValue"])])),_:1}),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,{type:"primary",onClick:o.addTodoList},{default:(0,i.w5)((()=>[(0,i.Uk)("Создать")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])):(0,i.kq)("",!0)}var H=(0,i.aZ)({name:"FormItemTodoList",props:{isShowForm:{type:Boolean,required:!0}},data(){return{form:{desc:""}}},methods:{addTodoList(){this.$emit("addTodoList",{id:Date.now(),text:this.form.desc,done:!1}),this.form.desc=""},closeFormTodod(){this.$emit("showForm",!1)}},emits:{showForm:o=>Boolean,addTodoList:o=>o},components:{CloseBold:I.q6s}});"function"===typeof s["default"]&&(0,s["default"])(H);const M=(0,c.Z)(H,[["render",z]]);var R=M,U=(0,i.aZ)({name:"App",mounted(){this.loadItemsTask()},data(){return{isShowForm:!1,todos:[],activeName:"all"}},computed:{filterTodo(){switch(this.activeName){case"active":return this.activeFilter;case"done":return this.doneFilter;case"all":default:return this.todos}},stats(){return{active:this.activeFilter.length,done:this.doneFilter.length}},activeFilter(){return this.todos.filter((o=>!o.done))},doneFilter(){return this.todos.filter((o=>o.done))}},methods:{loadItemsTask(){let o=localStorage.getItem("todos");this.todos=null!==o?JSON.parse(o):[]},showForm(o){this.isShowForm=o},addTodoList(o){this.todos.unshift(o),localStorage.setItem("todos",JSON.stringify(this.todos))},doneTodo(o){this.todos.map((e=>{e.id===o&&(e.done=!e.done)})),localStorage.setItem("todos",JSON.stringify(this.todos))},removeTodo(o){this.todos=this.todos.filter((e=>e.id!==o)),localStorage.setItem("todos",JSON.stringify(this.todos))}},components:{HeaderTodoList:p,FilterItemsTodoList:F,ItemsTodoList:Z,AddItemTodoList:q,StatisticsTodoList:B,FormItemTodoList:R}});const Y=(0,c.Z)(U,[["render",l]]);var E=Y,G=t(7793);t(4415);const K=(0,r.ri)(E);K.use(G.Z),K.mount("#app")}},e={};function t(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={exports:{}};return o[n].call(r.exports,r,r.exports,t),r.exports}t.m=o,function(){var o=[];t.O=function(e,n,s,r){if(!n){var i=1/0;for(m=0;m<o.length;m++){n=o[m][0],s=o[m][1],r=o[m][2];for(var d=!0,a=0;a<n.length;a++)(!1&r||i>=r)&&Object.keys(t.O).every((function(o){return t.O[o](n[a])}))?n.splice(a--,1):(d=!1,r<i&&(i=r));if(d){o.splice(m--,1);var l=s();void 0!==l&&(e=l)}}return e}r=r||0;for(var m=o.length;m>0&&o[m-1][2]>r;m--)o[m]=o[m-1];o[m]=[n,s,r]}}(),function(){t.n=function(o){var e=o&&o.__esModule?function(){return o["default"]}:function(){return o};return t.d(e,{a:e}),e}}(),function(){t.d=function(o,e){for(var n in e)t.o(e,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)}}(),function(){t.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}}(),function(){var o={143:0};t.O.j=function(e){return 0===o[e]};var e=function(e,n){var s,r,i=n[0],d=n[1],a=n[2],l=0;if(i.some((function(e){return 0!==o[e]}))){for(s in d)t.o(d,s)&&(t.m[s]=d[s]);if(a)var m=a(t)}for(e&&e(n);l<i.length;l++)r=i[l],t.o(o,r)&&o[r]&&o[r][0](),o[r]=0;return t.O(m)},n=self["webpackChunktodo_list"]=self["webpackChunktodo_list"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(8339)}));n=t.O(n)})();
//# sourceMappingURL=app.4fa803cb.js.map