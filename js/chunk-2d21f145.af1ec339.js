(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f145"],{d7fb:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"container-lg"},[e("HomeNavbar"),e("CarouselSwiper"),e("Select"),e("Icon"),e("CouponBanner"),e("SwiperView"),e("Content"),e("Subscription"),e("Footer")],1)])},a=[],c=e("8dd1"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("swiper",{attrs:{options:t.CarouselOption}},[e("swiper-slide",[e("div",{staticClass:"bg-cover",staticStyle:{"background-image":"url(https://i.imgur.com/24yv4tp.jpg)"}},[e("div",{staticClass:"carousel-box1"},[e("h1",{staticClass:"text-coffee text-bold"},[t._v("FIFI 愛旅遊")]),e("span",{staticClass:"d-block"},[t._v("帶你環遊歐洲世界!!")]),e("button",{staticClass:"btn btn-coffee hvr-grow",on:{click:function(s){return s.preventDefault(),t.goProduct()}}},[t._v("旅遊去")])])])]),e("swiper-slide",[e("div",{staticClass:"bg-cover",staticStyle:{"background-image":"url(https://i.imgur.com/FbBDis9.jpg)"}},[e("div",{staticClass:"carousel-box2 text-right"},[e("h3",{staticClass:"text-coffee text-bold"},[t._v("限時免費")]),e("span",{staticClass:"d-block"},[t._v("最大獎真的只要一折")]),e("button",{staticClass:"btn btn-coffee hvr-grow",on:{click:function(s){return s.preventDefault(),t.goProduct()}}},[t._v("搶購去")])])])]),e("swiper-slide",[e("div",{staticClass:"bg-cover",staticStyle:{"background-image":"url(https://i.imgur.com/im06fUU.jpg)"}},[e("div",{staticClass:"carousel-box3"},[e("h3",{staticClass:"text-coffee text-bold"},[t._v("全館特惠中")]),e("span",{staticClass:"d-block"},[t._v("滿 NT$ 2,000 免運費")]),e("button",{staticClass:"btn btn-coffee hvr-grow",on:{click:function(s){return s.preventDefault(),t.goCoupon()}}},[t._v("搶購去")])])])]),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)},o=[],l=(e("a7a3"),e("7212")),r={data:function(){return{CarouselOption:{spaceBetween:30,effect:"fade",speed:600,parallax:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:4500,disableOnInteraction:!1}}}},components:{swiper:l["swiper"],swiperSlide:l["swiperSlide"]},methods:{goProduct:function(){this.$router.push("/productlist/")},goCoupon:function(){this.$router.push("/coupon/")}}},u=r,v=e("2877"),d=Object(v["a"])(u,n,o,!1,null,null,null),m=d.exports,p=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"Hotselect"},[e("h2",{staticClass:"text-center text-bold mt-5"},[t._v("熱門地區")]),e("ul",{staticClass:"row text-center d-flex justify-content-center"},[e("li",{staticClass:"col-md-3 col-sm-3 Hotselect-box select-img0 bg-cover",on:{click:function(s){return t.areaItem("義大利")}}},[t._m(0)]),e("li",{staticClass:"col-md-3 col-sm-3 Hotselect-box select-img1 bg-cover",on:{click:function(s){return t.areaItem("英國")}}},[t._m(1)]),e("li",{staticClass:"col-md-3 col-sm-3 Hotselect-box select-img2 bg-cover",on:{click:function(s){return t.areaItem("冰島")}}},[t._m(2)]),e("li",{staticClass:"col-md-3 col-sm-3 Hotselect-box select-img3 bg-cover",on:{click:function(s){return t.areaItem("挪威")}}},[t._m(3)]),e("li",{staticClass:"col-md-3 col-sm-3 Hotselect-box select-img4 bg-cover",on:{click:function(s){return t.areaItem("法國")}}},[t._m(4)]),e("li",{staticClass:"col-md-3 col-sm-3 Hotselect-box select-img5 bg-cover",on:{click:function(s){return t.areaItem("德國")}}},[t._m(5)])])])])},f=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",[e("h4",[t._v("義大利")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",[e("h4",[t._v("英國")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",[e("h4",[t._v("冰島")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",[e("h4",[t._v("挪威")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",[e("h4",[t._v("法國")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",[e("h4",[t._v("德國")])])}],C={data:function(){return{}},methods:{areaItem:function(t){var s=this;setTimeout((function(){s.$bus.$emit("areatext",t)}),100),this.$router.push("/productlist")}}},b=C,g=Object(v["a"])(b,p,f,!1,null,null,null),h=g.exports,_=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"row text-center icon-item"},[e("div",{staticClass:"col-md-4 col-sm-6 d-flex align-items-center justify-content-center"},[e("img",{staticClass:"pt-4",attrs:{src:"https://i.imgur.com/dMRESFA.png"}}),e("div",{staticClass:"text-left icon-text"},[e("h5",{staticClass:"pl-3 pt-2"},[t._v("快速出發")]),e("p",{staticClass:"pl-3"},[t._v("一卡皮箱即出發!")])])]),e("div",{staticClass:"col-md-4 col-sm-6 d-flex align-items-center justify-content-center"},[e("img",{staticClass:"pt-4",attrs:{src:"https://i.imgur.com/rXG9QMu.png"}}),e("div",{staticClass:"text-left icon-text"},[e("h5",{staticClass:"pl-3 pt-2"},[t._v("來電就訂")]),e("p",{staticClass:"pl-3"},[t._v("24小時專人服務!")])])]),e("div",{staticClass:"col-md-4 col-sm-6 d-flex align-items-center justify-content-center"},[e("img",{staticClass:"pt-4",attrs:{src:"https://i.imgur.com/270zzgB.png"}}),e("div",{staticClass:"text-left icon-text"},[e("h5",{staticClass:"pl-3 pt-2"},[t._v("預訂機票")]),e("p",{staticClass:"pl-3"},[t._v("貨比三家不吃虧!")])])]),e("div",{staticClass:"col-md-4 col-sm-6 d-flex align-items-center justify-content-center"},[e("img",{staticClass:"pt-4",attrs:{src:"https://i.imgur.com/CscDJlh.png"}}),e("div",{staticClass:"text-left icon-text"},[e("h5",{staticClass:"pl-3 pt-2"},[t._v("特約商店")]),e("p",{staticClass:"pl-3"},[t._v("體驗當地好美食!")])])]),e("div",{staticClass:"col-md-4 col-sm-6 d-flex align-items-center justify-content-center"},[e("img",{staticClass:"pt-4",attrs:{src:"https://i.imgur.com/GveFj0I.png"}}),e("div",{staticClass:"text-left icon-text"},[e("h5",{staticClass:"pl-3 pt-2"},[t._v("護照通行")]),e("p",{staticClass:"pl-3"},[t._v("出入境快速方便!")])])]),e("div",{staticClass:"col-md-4 col-sm-6 d-flex align-items-center justify-content-center"},[e("img",{staticClass:"pt-4 animated",attrs:{src:"https://i.imgur.com/qOTE9vf.png"}}),e("div",{staticClass:"text-left icon-text"},[e("h5",{staticClass:"pl-3 pt-2"},[t._v("行程安排")]),e("p",{staticClass:"pl-3"},[t._v("享受歐洲好風情!")])])])])])}],w={data:function(){return{}}},y=w,k=Object(v["a"])(y,_,x,!1,null,null,null),j=k.exports,D=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"row mt-3 py-3 coupon-item"},[e("div",{staticClass:"col-md-5 col-sm-12 coupon-item-set"},[e("div",[e("h5",{staticClass:"text-coffee text-bold"},[t._v("限時領取coupon優惠卷")]),e("h5",{staticStyle:{color:"red"}},[e("i",{staticClass:"fas fa-stopwatch"}),t._v(" "+t._s(t.days+"天 "+t.hours+"時 "+t.minutes+"分 "+t.seconds+"秒"))])])]),e("div",{staticClass:"offset-md-4"}),e("div",{staticClass:"col-md-3 col-sm-12 d-flex align-items-center justify-content-center"},[e("button",{staticClass:"btn btn-coffee mt-2",staticStyle:{color:"white"},on:{click:function(s){return s.preventDefault(),t.goCoupon()}}},[t._v(" 快速領取!! ")])])])])},$=[],E={data:function(){return{countDownDate:"",days:0,hours:0,minutes:0,seconds:0,distance:0}},methods:{goCoupon:function(){this.$router.push("/coupon")},calculateCountDown:function(){var t=(new Date).getTime();this.distance=this.countDownDate-t,this.days=Math.floor(this.distance/864e5),this.hours=Math.floor(this.distance%864e5/36e5),this.minutes=Math.floor(this.distance%36e5/6e4),this.seconds=Math.floor(this.distance%6e4/1e3)},initializeCountDown:function(){var t=new Date,s=t.getMonth(),e=t.getFullYear(),i=11===s?0:s+1,a=11===s?e+1:e;this.countDownDate=new Date(a,i,1,0,0,0).getTime()},updateCountDownIfNeeded:function(){var t=new Date,s=t.getMonth(),e=t.getFullYear(),i=t.getDate();if(1===i){var a=11===s?0:s+1,c=11===s?e+1:e;this.countDownDate=new Date(c,a,1,0,0,0).getTime()}}},mounted:function(){var t=this;this.initializeCountDown(),this.calculateCountDown(),setInterval((function(){t.calculateCountDown(),t.updateCountDownIfNeeded()}),1e3)}},M=E,S=Object(v["a"])(M,D,$,!1,null,null,null),I=S.exports,O=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"pt-5"},[e("swiper",{attrs:{options:t.swiperOption}},[e("swiper-slide",{staticClass:"swiper-item"},[e("h3",[t._v("英國")]),e("router-link",{attrs:{to:"/product/-M3Jg7xNfsGUxlYJEcX5"}},[e("img",{staticClass:"image",attrs:{src:"https://i.imgur.com/Y67yUyI.jpg",alt:"Avatar"}}),e("div",{staticClass:"overlay"},[e("div",{staticClass:"text"},[t._v("倫敦眼")]),e("button",{staticClass:"btn btn-coffee button-item"},[t._v("查看更多")])])])],1),e("swiper-slide",{staticClass:"swiper-item"},[e("h3",[t._v("西班牙")]),e("router-link",{attrs:{to:"/product/-M3JhT4Zu-G-2r0f5DRo"}},[e("img",{staticClass:"image",attrs:{src:"https://i.imgur.com/C4BSQO8.jpg",alt:"Avatar"}}),e("div",{staticClass:"overlay"},[e("div",{staticClass:"text"},[t._v("米拉之家")]),e("button",{staticClass:"btn btn-coffee button-item"},[t._v("查看更多")])])])],1),e("swiper-slide",{staticClass:"swiper-item"},[e("h3",[t._v("冰島")]),e("router-link",{attrs:{to:"/product/-M3JfN56T7JNnFvX_ejM"}},[e("img",{staticClass:"image",attrs:{src:"https://i.imgur.com/UEbv9IM.jpg",alt:"Avatar"}}),e("div",{staticClass:"overlay"},[e("div",{staticClass:"text"},[t._v("藍湖")]),e("button",{staticClass:"btn btn-coffee button-item"},[t._v("查看更多")])])])],1),e("swiper-slide",{staticClass:"swiper-item"},[e("h3",[t._v("希臘")]),e("router-link",{attrs:{to:"/product/-M4rPk-e5u7y3hBMEtRd"}},[e("img",{staticClass:"image",attrs:{src:"https://i.imgur.com/ZaMIEoj.jpg",alt:"Avatar"}}),e("div",{staticClass:"overlay"},[e("div",{staticClass:"text"},[t._v("雅典衛城")]),e("button",{staticClass:"btn btn-coffee button-item"},[t._v("查看更多")])])])],1),e("swiper-slide",{staticClass:"swiper-item"},[e("h3",[t._v("波蘭")]),e("router-link",{attrs:{to:"/product/-M5c-YRMQClFG56smWJu"}},[e("img",{staticClass:"image",attrs:{src:"https://i.imgur.com/ysfPY4M.jpg",alt:"Avatar"}}),e("div",{staticClass:"overlay"},[e("div",{staticClass:"text"},[t._v("皇家城堡華沙")]),e("button",{staticClass:"btn btn-coffee button-item"},[t._v("查看更多")])])])],1),e("swiper-slide",{staticClass:"swiper-item"},[e("h3",[t._v("法國")]),e("router-link",{attrs:{to:"/product/-M4rMizy31JDHi24LJCJ"}},[e("img",{staticClass:"image",attrs:{src:"https://i.imgur.com/dqx1Tty.jpg",alt:"Avatar"}}),e("div",{staticClass:"overlay"},[e("div",{staticClass:"text"},[t._v("羅浮宮")]),e("button",{staticClass:"btn btn-coffee button-item"},[t._v("查看更多")])])])],1),e("swiper-slide",{staticClass:"swiper-item"},[e("h3",[t._v("義大利")]),e("router-link",{attrs:{to:"/product/-M4NRw33zt2GeWx8ZpKF"}},[e("img",{staticClass:"image",attrs:{src:"https://i.imgur.com/zbEbx1U.jpg",alt:"Avatar"}}),e("div",{staticClass:"overlay"},[e("div",{staticClass:"text"},[t._v("比薩斜塔")]),e("button",{staticClass:"btn btn-coffee button-item"},[t._v("查看更多")])])])],1),e("swiper-slide",{staticClass:"swiper-item"},[e("h3",[t._v("德國")]),e("router-link",{attrs:{to:"/product/-M39PJGc1KALPx_tt7Io"}},[e("img",{staticClass:"image",attrs:{src:"https://i.imgur.com/EZYfvn0.jpg",alt:"Avatar"}}),e("div",{staticClass:"overlay"},[e("div",{staticClass:"text"},[t._v("科隆大教堂")]),e("button",{staticClass:"btn btn-coffee button-item"},[t._v("查看更多")])])])],1),e("swiper-slide",{staticClass:"swiper-item"},[e("h3",[t._v("烏克蘭")]),e("router-link",{attrs:{to:"/product/-M39PJGc1KALPx_tt7Io"}},[e("img",{staticClass:"image",attrs:{src:"https://i.imgur.com/FplZAnW.jpg",alt:"Avatar"}}),e("div",{staticClass:"overlay"},[e("div",{staticClass:"text"},[t._v("敖德歌劇院")]),e("button",{staticClass:"btn btn-coffee button-item"},[t._v("查看更多")])])])],1),e("swiper-slide",{staticClass:"swiper-item"},[e("h3",[t._v("挪威")]),e("router-link",{attrs:{to:"/product/-M5e3UtIHXopFGD86AgS"}},[e("img",{staticClass:"image",attrs:{src:"https://i.imgur.com/iQvyz0s.jpg",alt:"Avatar"}}),e("div",{staticClass:"overlay"},[e("div",{staticClass:"text"},[t._v("羅弗敦群島")]),e("button",{staticClass:"btn btn-coffee button-item"},[t._v("查看更多")])])])],1)],1)],1)])},P=[],A={data:function(){return{swiperOption:{slidesPerView:3,spaceBetween:30,slidesPerColumn:2,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:7500,disableOnInteraction:!1},breakpoints:{1024:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:2,spaceBetween:20},450:{slidesPerView:1,spaceBetween:10}}}}},components:{swiper:l["swiper"],swiperSlide:l["swiperSlide"]}},F=A,J=Object(v["a"])(F,O,P,!1,null,null,null),B=J.exports,H=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"row mt-3 text-center"},[e("div",{staticClass:"col-md-6"},[t._m(0),e("div",{staticClass:"content-box mt-2"},[e("div",{staticClass:"content-border text-bold content-text-info"},[e("h3",[t._v("真正旅行家必是流浪者")]),e("h4",[t._v("經歷者流浪者的快樂")]),e("button",{staticClass:"btn bg-coffee",staticStyle:{color:"white"},on:{click:t.goProduct}},[t._v("旅遊去")])])])]),e("div",{staticClass:"col-md-6 display-content-desk"},[e("div",{staticClass:"content-box mt-2"},[e("div",{staticClass:"content-border text-bold content-text-info"},[e("h3",[t._v("旅行不是為了到達某地")]),e("h4",[t._v("而是為了旅遊")]),e("button",{staticClass:"btn bg-coffee",staticStyle:{color:"white"},on:{click:t.goProduct}},[t._v("旅遊去")])])]),t._m(1)]),e("div",{staticClass:"col-md-6 display-content-phone"},[t._m(2),e("div",{staticClass:"content-box mt-2"},[e("div",{staticClass:"content-border text-bold content-text-info"},[e("h3",[t._v("旅行不是為了到達某地")]),e("h4",[t._v("而是為了旅遊")]),e("button",{staticClass:"btn bg-coffee",staticStyle:{color:"white"},on:{click:t.goProduct}},[t._v("旅遊去")])])])])])])},N=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mt-2 content-img1 bg-cover"},[e("h4",{staticClass:"content-text text-bold"},[t._v(" 對青年人來說 "),e("br"),t._v("旅行是教育的一部分 ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mt-2 content-img2 bg-cover"},[e("h4",{staticClass:"content-text text-bold"},[t._v(" 世界是一本書 "),e("br"),t._v("而不旅行的人只讀了一頁 ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mt-2 content-img2 bg-cover"},[e("h4",{staticClass:"content-text text-bold"},[t._v(" 世界是一本書 "),e("br"),t._v("而不旅行的人只讀了一頁 ")])])}],G={data:function(){return{}},methods:{goProduct:function(){this.$router.push("/productlist/")}}},T=G,z=Object(v["a"])(T,H,N,!1,null,null,null),U=z.exports,Y=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"px-5 pt-5 pb-5 mt-3 sub-box-outside bg-fixed"},[e("div",{staticClass:"p-5 text-center sub-box"},[e("h4",{staticClass:"text-coffee text-bold"},[t._v("加入訂閱我們")]),e("div",{staticClass:"row no-gutters pt-2"},[e("div",{staticClass:"col-md-10 sub-box-inside"},[e("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("e-mail")},attrs:{type:"e-mail",name:"e-mail",placeholder:"請輸入您的信箱"}}),t.errors.has("e-mail")?e("span",{staticClass:"text-danger",staticStyle:{"font-family":"'微軟正黑體'"}},[t._v(" 必須正確輸入e-mail ")]):t._e()]),e("div",{staticClass:"col-md-2"},[e("button",{staticClass:"btn bg-coffee form-control",staticStyle:{color:"white"},on:{click:function(s){return s.preventDefault(),t.createOrder(s)}}},[t._v("送出 ")])])])])])])},V=[],R={data:function(){return{}},methods:{createOrder:function(){var t=this;t.$validator.validate().then((function(s){s&&t.$swal({title:"感謝您的訂閱!",text:"請點選繼續!",icon:"success",button:"繼續"})}))}}},Z=R,q=Object(v["a"])(Z,Y,V,!1,null,null,null),Q=q.exports,X=e("fd2d"),K={data:function(){return{CarouselOption:{}}},components:{HomeNavbar:c["a"],CarouselSwiper:m,Select:h,Icon:j,CouponBanner:I,SwiperView:B,Content:U,Subscription:Q,Footer:X["a"]}},L=K,W=Object(v["a"])(L,i,a,!1,null,null,null);s["default"]=W.exports}}]);
//# sourceMappingURL=chunk-2d21f145.af1ec339.js.map