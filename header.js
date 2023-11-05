// let host = "https://www.gfpthailand.com/"
let host = "http://127.0.0.1:8080/"
let activeclass=''
function getCurrentURL () {
  return window.location.pathname
}
const url = getCurrentURL()
if(url.includes("contact")){
  activeclass=`class="active"`
}
document.write(`
<!-- ======= Header ======= -->
<header id="header" class="header d-flex align-items-center">

  <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
    <a href="`,host,`" class="logo d-flex align-items-center">
      <!-- Uncomment the line below if you also wish to use an image logo -->
      <!-- <img src="assets/img/logo.png" alt=""> -->
      <img src="assets/icon/gfp_top.svg" alt="">
    </a>
    <nav id="navbar" class="navbar">
      <ul>
        <li><a href="`,host,`#home"><span id="menu_home"></span></a></li>
        <li><a href="`,host,`#about"><span id="menu_about"></span></a></li>
        <li class="dropdown"><a href="`,host,`#product"><span id="menu_product"></span></a>
          <ul>
            <li><a href="`,host,`lily"><span id="menu_product_1"></span></a></li>
            <li><a href="`,host,`kuru"><span id="menu_product_2"></span></a></li>
            <li><a href="`,host,`tharn"><span id="menu_product_3"></span></a></li>
            <li><a href="`,host,`herb"><span id="menu_product_4"></span></a></li>
          </ul>
        </li>
        <li><a href="`,host,`#services"><span id="menu_service"></span></a></li>
        <li><a href="`,host,`contact" `,activeclass,`><span id="menu_contact"></span></a></li>
        <li><a href="#"><span id="menu_online"></span></a></li>
        <div id="onlineLinkTopM" class="onlineLinkTopM" style="display: none;">
          <a href="https://www.facebook.com/lilyfreshsmoothie" target="_blank">Facebook</a>
          <a href="https://shopee.co.th/lilyfresh" target="_blank">Shopee</a>
          <a href="https://www.lazada.co.th/shop/lily-fresh-smoothie" target="_blank">Lazada</a>
          <a href="https://shop.line.me/@280untig" target="_blank">Line</a>
          <a href="https://www.instagram.com/lilyfreshsmoothie" target="_blank">IG</a>
          <a href="https://www.tiktok.com/@lilyfreshsmoothie" target="_blank">Tiktok</a>
          <a href="#home">Website</a>
          <a href="https://www.facebook.com/tharnmineralwater" target="_blank">Tharn</a>
        </div>
      </ul>
    </nav><!-- .navbar -->

    <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
    <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

  </div>
</header><!-- End Header -->
<!-- End Header -->
<div id="onlineLinkTop" class="onlineLinkTop" style="display: none;">
<h1>ร้านค้าออนไลน์</h1>
<div class="align-items-center justify-content-between">
  <a href="https://shopee.co.th/lilyfresh" target="_blank"><img src="assets/svg/shopee_h.svg" class="shopee"></a>
  <a href="https://www.lazada.co.th/shop/lily-fresh-smoothie" target="_blank"><img src="assets/svg/laz_h.svg" class="laz"></a>
  <a href="https://www.facebook.com/lilyfreshsmoothie" target="_blank"><img src="assets/svg/fb_h.svg" class="fb"></a>
  <a href="https://shop.line.me/@280untig" target="_blank"><img src="assets/svg/line_h.svg" class="line"></a>
</div>
</div>
`);

const toggleOnlineShopBnt = document.getElementById(`menu_online`);
const onlineLinkTop = document.getElementById(`onlineLinkTop`);
const onlineLinkTopM = document.getElementById(`onlineLinkTopM`);
if (toggleOnlineShopBnt) {
  toggleOnlineShopBnt.addEventListener('click', function () {
    console.log("click!!")
    if (window.innerWidth > 799) {
      console.log("display")
      if (onlineLinkTop.style.display === "none") {
        onlineLinkTop.style.display = "block";
      } else {
        onlineLinkTop.style.display = "none";
      }
    }else{
      if (onlineLinkTopM.style.display === "none") {
        onlineLinkTopM.style.display = "block";
      } else {
        onlineLinkTopM.style.display = "none";
      }
    }
  })
}