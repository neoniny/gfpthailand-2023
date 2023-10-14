const host = "http://127.0.0.1:8080/"
document.write(`
<!-- ======= Header ======= -->
<header id="header" class="header d-flex align-items-center">

  <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
    <a href="index.html" class="logo d-flex align-items-center">
      <!-- Uncomment the line below if you also wish to use an image logo -->
      <!-- <img src="assets/img/logo.png" alt=""> -->
      <h1>GFP<span>.</span></h1>
    </a>
    <nav id="navbar" class="navbar">
      <ul>
        <li><a href="`,host,`#home"><span id="menu_home"></span></a></li>
        <li><a href="`,host,`#about"><span id="menu_about"></span></a></li>
        <li class="dropdown"><a href="`,host,`#product"><span id="menu_product"></span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
          <ul>
            <li><a href="`,host,`lily"><span id="menu_product_1"></span></a></li>
            <li><a href="`,host,`kuru"><span id="menu_product_2"></span></a></li>
            <li><a href="`,host,`tharn"><span id="menu_product_3"></span></a></li>
            <li><a href="`,host,`herb"><span id="menu_product_4"></span></a></li>
          </ul>
        </li>
        <li><a href="`,host,`#services"><span id="menu_service"></span></a></li>
        <li><a href="`,host,`#contact"><span id="menu_contact"></span></a></li>
        <li class="dropdown"><a href="#"><span id="menu_online"></span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
          <ul>
            <li><a href="https://www.facebook.com/lilyfreshsmoothie" target="_blank">Facebook</a></li>
            <li><a href="https://shopee.co.th/lilyfresh" target="_blank">Shopee</a></li>
            <li><a href="https://www.lazada.co.th/shop/lily-fresh-smoothie" target="_blank">Lazada</a></li>
            <li><a href="https://shop.line.me/@280untig" target="_blank">Line</a></li>
            <li><a href="https://www.instagram.com/lilyfreshsmoothie" target="_blank">IG</a></li>
            <li><a href="https://www.tiktok.com/@lilyfreshsmoothie" target="_blank">Tiktok</a></li>
            <li><a href="#home">Website</a></li>
            <li><a href="https://www.facebook.com/tharnmineralwater" target="_blank">Tharn</a></li>
          </ul>
        </li>
      </ul>
    </nav><!-- .navbar -->

    <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
    <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

  </div>
</header><!-- End Header -->
<!-- End Header -->
`);