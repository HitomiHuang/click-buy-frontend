"use strict";(self["webpackChunkclick_buy_frontend"]=self["webpackChunkclick_buy_frontend"]||[]).push([[931],{8202:function(t,a,r){var n=r(6163);const o=()=>localStorage.getItem("token");a.Z={addToCart(t,a){const r={productId:t,amount:a};return n.l.post("/carts/add",r,{headers:{Authorization:`Bearer ${o()}`}})},getCart(){return n.l.get("/carts",{headers:{Authorization:`Bearer ${o()}`}})},buyProducts(t){return n.l.put("/carts/buy",{carts:[...t]},{headers:{Authorization:`Bearer ${o()}`}})}}},3931:function(t,a,r){r.r(a),r.d(a,{default:function(){return Z}});var n=r(6252),o=r(3577),s=r(9963);const u=t=>((0,n.dD)("data-v-515277f1"),t=t(),(0,n.Cn)(),t),e={class:"product-section"},l={class:"product-img"},c=["src"],i={class:"product-detail"},d={class:"product-name"},p={class:"product-price"},m={key:0,class:"amount-group"},v=u((()=>(0,n._)("span",{class:"amount-label"},"數量",-1))),_={class:"mx-3"},b={class:"rest-amount-label"},h={class:"shop-section"},f={class:"shop-logo"},g=["src"],y={class:"shop-info"};function k(t,a,r,u,k,w){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",e,[(0,n._)("div",l,[(0,n._)("img",{src:u.product.image,alt:"",class:"img"},null,8,c)]),(0,n._)("div",i,[(0,n._)("span",d,(0,o.zw)(u.product.name),1),(0,n._)("div",p,[(0,n._)("span",null,"$"+(0,o.zw)(u.product.price),1)]),"buyer"===u.role?((0,n.wg)(),(0,n.iD)("div",m,[v,(0,n._)("table",_,[(0,n._)("tr",null,[(0,n._)("td",null,[(0,n._)("span",{class:"minus-btn",onClick:a[0]||(a[0]=(0,s.iM)(((...t)=>u.minusAmount&&u.minusAmount(...t)),["prevent","stop"]))},"-")]),(0,n._)("td",null,[(0,n.wy)((0,n._)("input",{type:"text",class:"amount-input","onUpdate:modelValue":a[1]||(a[1]=t=>u.amount=t)},null,512),[[s.nr,u.amount]])]),(0,n._)("td",null,[(0,n._)("span",{class:"plus-btn",onClick:a[2]||(a[2]=(0,s.iM)(((...t)=>u.plusAmount&&u.plusAmount(...t)),["prevent","stop"]))},"+")])])]),(0,n._)("span",b,"還剩下"+(0,o.zw)(u.product.restAmount)+"件",1)])):(0,n.kq)("",!0),"buyer"===u.role?((0,n.wg)(),(0,n.iD)("button",{key:1,class:"btn btn-primary add-to-cart mt-5",onClick:a[3]||(a[3]=(0,s.iM)(((...t)=>u.addToCart&&u.addToCart(...t)),["prevent","stop"]))}," 加入購物車 ")):(0,n.kq)("",!0)])]),(0,n._)("div",h,[(0,n._)("div",null,[(0,n._)("div",f,[(0,n._)("img",{src:u.shop.logo,alt:""},null,8,g)]),(0,n._)("div",y,(0,o.zw)(u.shop.name),1)])])],64)}var w=r(2262),C=r(2201),A=r(6163),z=r(9655),T=r(8202),D=r(3907),F={setup(){const t=(0,w.iH)({}),a=(0,w.iH)({}),r=(0,w.iH)(1),o=(0,C.yj)(),s=o.params.productId,u=(0,D.oR)();async function e(){try{const r=await z.Z.getProduct(s);t.value=r.data.data.product,a.value=r.data.data.product.Shop}catch(r){A.F.fire({icon:"error",title:"無法取得商品資料，請稍後再試"})}}const l=async()=>{try{await T.Z.addToCart(s,r),A.F.fire({icon:"success",title:"成功加入購物車"})}catch(t){A.F.fire({icon:"error",title:"加入購物車失敗，請稍後再試"})}},c=()=>{t.value.restAmount>r.value&&(r.value=Number(r.value)+1)},i=()=>{r.value>1&&(r.value=Number(r.value)-1)};return(0,n.bv)((()=>{e()})),{product:t,shop:a,addToCart:l,amount:r,plusAmount:c,minusAmount:i,role:(0,n.Fl)((()=>u.state.currentUser.role))}}},H=r(3744);const I=(0,H.Z)(F,[["render",k],["__scopeId","data-v-515277f1"]]);var Z=I}}]);
//# sourceMappingURL=931.f4c31d90.js.map