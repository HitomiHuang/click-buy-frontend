"use strict";(self["webpackChunkclick_buy_frontend"]=self["webpackChunkclick_buy_frontend"]||[]).push([[696],{8202:function(t,c,a){var r=a(6163);const e=()=>localStorage.getItem("token");c.Z={addToCart(t,c){const a={productId:t,amount:c};return r.l.post("/carts/add",a,{headers:{Authorization:`Bearer ${e()}`}})},getCart(){return r.l.get("/carts",{headers:{Authorization:`Bearer ${e()}`}})},buyProducts(t){return r.l.put("/carts/buy",{carts:[...t]},{headers:{Authorization:`Bearer ${e()}`}})}}},8696:function(t,c,a){a.r(c),a.d(c,{default:function(){return I}});var r=a(6252),e=a(9963),o=a(3577);const u=t=>((0,r.dD)("data-v-b9f636ba"),t=t(),(0,r.Cn)(),t),s=u((()=>(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",{class:"check-box"}),(0,r._)("th",{class:"product-info"},"商品"),(0,r._)("th",{class:"product-price"},"單價"),(0,r._)("th",{class:"product-amount"},"數量"),(0,r._)("th",{class:"total-count"},"總計"),(0,r._)("th",{class:"action"},"操作")])],-1))),n={class:"check-box"},d=["id","value"],l={class:"product-info"},i={class:"product-img"},p=["src"],_={class:"product-des"},b={class:"product-price"},h={class:"product-amount"},v={class:"total-count"},f=u((()=>(0,r._)("td",{class:"action"},[(0,r._)("button",{type:"button",class:"btn btn-danger"},"刪除")],-1))),y={class:"totalBlock"};function k(t,c,a,u,k,g){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("table",null,[s,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.carts,(t=>((0,r.wg)(),(0,r.iD)("tr",{key:t.productId},[(0,r._)("td",n,[(0,r.wy)((0,r._)("input",{type:"checkbox",id:t.productId,value:t.productId,"onUpdate:modelValue":c[0]||(c[0]=t=>u.checkedProducts=t)},null,8,d),[[e.e8,u.checkedProducts]])]),(0,r._)("td",l,[(0,r._)("div",i,[(0,r._)("img",{src:t.Product.image,alt:""},null,8,p)]),(0,r._)("div",_,(0,o.zw)(t.Product.name),1)]),(0,r._)("td",b,"$"+(0,o.zw)(t.Product.price),1),(0,r._)("td",h,(0,o.zw)(t.amount),1),(0,r._)("td",v," $"+(0,o.zw)(t.Product.price*t.amount),1),f])))),128))])]),(0,r._)("div",y,[(0,r._)("button",{class:"btn btn-primary",onClick:c[1]||(c[1]=(0,e.iM)(((...t)=>u.buyProducts&&u.buyProducts(...t)),["prevent","stop"]))}," 確認購買 ")])])}a(7658);var g=a(2262),m=a(6163),w=a(8202),P={setup(){const t=(0,g.iH)([]),c=(0,g.iH)([]),a=async()=>{const c=await w.Z.getCart();t.value=c.data.data.carts},e=async()=>{try{const a=[];for(let r in t.value){let e=t.value[r];for(let t in c.value){let r=c.value[t];e.productId===r&&a.push(e)}}await w.Z.buyProducts(a),m.F.fire({icon:"success",title:"購買成功"})}catch(a){m.F.fire({icon:"error",title:"購買失敗，請稍後再試"})}};return(0,r.bv)((()=>{a()})),{carts:t,checkedProducts:c,buyProducts:e}}},z=a(3744);const C=(0,z.Z)(P,[["render",k],["__scopeId","data-v-b9f636ba"]]);var I=C}}]);
//# sourceMappingURL=696.92bc32a1.js.map