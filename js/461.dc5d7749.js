(self["webpackChunkclick_buy_frontend"]=self["webpackChunkclick_buy_frontend"]||[]).push([[461],{648:function(e,t,r){var n=r(1694),a=r(614),o=r(4326),i=r(5112),u=i("toStringTag"),l=Object,c="Arguments"==o(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(r){}};e.exports=n?o:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=s(t=l(e),u))?r:c?o(t):"Object"==(n=o(t))&&a(t.callee)?"Arguments":n}},7045:function(e,t,r){var n=r(6339),a=r(3070);e.exports=function(e,t,r){return r.get&&n(r.get,t,{getter:!0}),r.set&&n(r.set,t,{setter:!0}),a.f(e,t,r)}},1694:function(e,t,r){var n=r(5112),a=n("toStringTag"),o={};o[a]="z",e.exports="[object z]"===String(o)},1340:function(e,t,r){var n=r(648),a=String;e.exports=function(e){if("Symbol"===n(e))throw TypeError("Cannot convert a Symbol value to a string");return a(e)}},8053:function(e){var t=TypeError;e.exports=function(e,r){if(e<r)throw t("Not enough arguments");return e}},6229:function(e,t,r){"use strict";var n=r(8052),a=r(1702),o=r(1340),i=r(8053),u=URLSearchParams,l=u.prototype,c=a(l.append),s=a(l["delete"]),d=a(l.forEach),p=a([].push),m=new u("a=1&a=2");m["delete"]("a",1),m+""!=="a=2"&&n(l,"delete",(function(e){var t=arguments.length,r=t<2?void 0:arguments[1];if(t&&void 0===r)return s(this,e);var n=[];d(this,(function(e,t){p(n,{key:t,value:e})})),i(t,1);var a,u=o(e),l=o(r),m=0,f=0,h=!1,g=n.length;while(m<g)a=n[m++],h||a.key===u?(h=!0,s(this,a.key)):f++;while(f<g)a=n[f++],a.key===u&&a.value===l||c(this,a.key,a.value)}),{enumerable:!0,unsafe:!0})},7330:function(e,t,r){"use strict";var n=r(8052),a=r(1702),o=r(1340),i=r(8053),u=URLSearchParams,l=u.prototype,c=a(l.getAll),s=a(l.has),d=new u("a=1");d.has("a",2)&&n(l,"has",(function(e){var t=arguments.length,r=t<2?void 0:arguments[1];if(t&&void 0===r)return s(this,e);var n=c(this,e);i(t,1);var a=o(r),u=0;while(u<n.length)if(n[u++]===a)return!0;return!1}),{enumerable:!0,unsafe:!0})},2062:function(e,t,r){"use strict";var n=r(9781),a=r(1702),o=r(7045),i=URLSearchParams.prototype,u=a(i.forEach);n&&!("size"in i)&&o(i,"size",{get:function(){var e=0;return u(this,(function(){e++})),e},configurable:!0,enumerable:!0})},5461:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(6252),a=r(9963);const o={class:"form-group"},i=(0,n._)("label",{for:"name"},"商品名稱",-1),u={class:"form-group mt-3"},l=(0,n._)("label",{for:"desc"},"商品描述",-1),c={class:"form-group mt-3"},s=(0,n._)("label",{for:"price"},"商品單價",-1),d={class:"form-group mt-3"},p=(0,n._)("label",{for:"totalAmount"},"商品數量",-1),m={class:"form-group mt-3"},f=(0,n._)("label",{for:"image"},"Image",-1),h=["src"],g=(0,n._)("button",{type:"submit",class:"btn btn-primary mt-3"},"送出",-1);function v(e,t,r,v,y,b){return(0,n.wg)(),(0,n.iD)("form",{onSubmit:t[5]||(t[5]=(0,a.iM)(((...e)=>v.handleSubmit&&v.handleSubmit(...e)),["stop","prevent"])),class:"mt-5"},[(0,n._)("div",o,[i,(0,n.wy)((0,n._)("input",{id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>v.product.name=e),type:"text",class:"form-control",name:"name",placeholder:"輸入商品名稱",required:""},null,512),[[a.nr,v.product.name]])]),(0,n._)("div",u,[l,(0,n.wy)((0,n._)("input",{id:"desc","onUpdate:modelValue":t[1]||(t[1]=e=>v.product.desc=e),type:"text",class:"form-control",name:"desc",placeholder:"輸入商品描述"},null,512),[[a.nr,v.product.desc]])]),(0,n._)("div",c,[s,(0,n.wy)((0,n._)("input",{id:"price","onUpdate:modelValue":t[2]||(t[2]=e=>v.product.price=e),type:"text",class:"form-control",name:"price",placeholder:"輸入商品單價",required:""},null,512),[[a.nr,v.product.price]])]),(0,n._)("div",d,[p,(0,n.wy)((0,n._)("input",{id:"totalAmount","onUpdate:modelValue":t[3]||(t[3]=e=>v.product.totalAmount=e),type:"text",class:"form-control",name:"totalAmount",placeholder:"輸入商品數量",required:""},null,512),[[a.nr,v.product.totalAmount]])]),(0,n._)("div",m,[f,(0,n._)("div",null,[v.product.image?((0,n.wg)(),(0,n.iD)("img",{key:0,src:v.product.image,class:"d-block img-thumbnail mb-3",width:"200",height:"200"},null,8,h)):(0,n.kq)("",!0)]),(0,n._)("input",{id:"image",type:"file",name:"image",accept:"image/*",class:"form-control-file",onChange:t[4]||(t[4]=(...e)=>v.handleFileChange&&v.handleFileChange(...e))},null,32)]),g],32)}r(6229),r(7330),r(2062),r(7658);var y=r(2262),b=r(2201),w=r(9655),_=r(6163),k={setup(){const e=(0,y.iH)({name:"",desc:"",price:0,totalAmount:0,image:""}),t=(0,b.yj)(),r=(0,b.tv)(),a=t.params.productId,o=async()=>{const t=await w.Z.getProduct(a);e.value=t.data.data.product},i=t=>{const{files:r}=t.target;if(0===r.length)e.value.image="";else{const t=window.URL.createObjectURL(r[0]);e.value.image=t}},u=async t=>{try{const n=t.target,o=new FormData(n);o.append("id",a),await w.Z.editProduct(o),_.F.fire({icon:"success",title:"編輯商品成功"}),r.push({name:"seller",params:{shopId:e.value.shopId}})}catch(n){_.F.fire({icon:"error",title:"編輯商品失敗，請稍後再試"})}};return(0,n.bv)((()=>{o()})),{product:e,handleFileChange:i,handleSubmit:u}}},S=r(3744);const U=(0,S.Z)(k,[["render",v]]);var x=U}}]);
//# sourceMappingURL=461.dc5d7749.js.map