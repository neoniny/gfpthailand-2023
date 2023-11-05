host = "https://www.gfpthailand.com/"
document.write(`
<!-- ======= Footer ======= -->
<footer id="footer" class="footer">

  <div class="container">
    <div class="row gy-4">
      <div class="col-lg-6 col-md-6 col-sm-6 footer-info">
          <a href="index.html">
          <h2 id="section-contact-h"></h2>
          </a>
          <p id="section-contact-address">
          <p><span class="iconlogo"><img src="assets/icon/mail.svg"/></span><span id="section-contact-email"></span></p>
          <p><span class="iconlogo"><img src="assets/icon/tel.svg"/></span><span id="section-contact-telnum"></span></p>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-6 footer-links mt-5 text-center">
        <div class="menu-foote mt-5">
            <p><a href="`,host,`#about"><span id="menu-about"/></a></p>
            <p><a href="`,host,`#product"><span id="menu-product"/></a></p>
            <p><a href="`,host,`#service"><span id="menu-service"/></a></p>
        </div>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-12 footer-links">
        <div class="iconline">
          <h4 id="onlineShop_h"></h4>
          <img src="assets/img/line-qr.png"/>
        </div>
        <div class="sociallogo mt-3">
          <a href="https://www.facebook.com/lilyfreshsmoothie" target="_blank"><img src="assets/icon/fb.png"/></a>
          <a href="https://www.instagram.com/lilyfreshsmoothie" target="_blank"><img src="assets/icon/ig.svg"/></a>
          <a href="https://shopee.co.th/lilyfresh" target="_blank"><img src="assets/icon/shopee.svg"/></a>
          <a href="https://www.lazada.co.th/shop/lily-fresh-smoothie" target="_blank"><img src="assets/icon/laz.svg"/></a>
          <a href="#"><img src="assets/icon/myshop.svg"/></a>
        </div>
      </div>

    </div>
  </div>
</footer><!-- End Footer -->
<!-- End Footer -->
`);