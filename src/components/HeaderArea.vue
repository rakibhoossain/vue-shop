<template>
  <!--offcanvas menu area start-->
  <div class="off_canvars_overlay"></div>
  <div class="offcanvas_menu">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="canvas_open">
            <a href="javascript:void(0)"><i class="icon-menu"></i></a>
          </div>
          <div class="offcanvas_menu_wrapper">
            <div class="canvas_close">
              <a href="javascript:void(0)"><i class="icon-x"></i></a>
            </div>
            <div class="language_currency">
              <ul>
                <li class="language">
                  <a href="#">
                    Language <i class="icon-right ion-ios-arrow-down"></i
                  ></a>
                  <ul class="dropdown_language">
                    <li><a href="#">French</a></li>
                    <li><a href="#">Spanish</a></li>
                    <li><a href="#">Russian</a></li>
                  </ul>
                </li>
                <li class="currency">
                  <a href="#">
                    Currency <i class="icon-right ion-ios-arrow-down"></i
                  ></a>
                  <ul class="dropdown_currency">
                    <li><a href="#">€ Euro</a></li>
                    <li><a href="#">£ Pound Sterling</a></li>
                    <li><a href="#">$ US Dollar</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="header_social text-right">
              <ul>
                <li>
                  <a href="#"><i class="ion-social-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ion-social-googleplus-outline"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ion-social-youtube-outline"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ion-social-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ion-social-instagram-outline"></i></a>
                </li>
              </ul>
            </div>
            <div class="search_container">
              <form action="#">
                <div class="hover_category">
                  <select class="select_option" name="select" id="categori1">
                    <option selected value="1">Select a categories</option>
                    <option value="2">Accessories</option>
                    <option value="3">Accessories & More</option>
                    <option value="4">Butters & Eggs</option>
                    <option value="5">Camera & Video </option>
                    <option value="6">Mornitors</option>
                    <option value="7">Tablets</option>
                    <option value="8">Laptops</option>
                    <option value="9">Handbags</option>
                    <option value="10">Headphone & Speaker</option>
                    <option value="11">Herbs & botanicals</option>
                    <option value="12">Vegetables</option>
                    <option value="13">Shop</option>
                    <option value="14">Laptops & Desktops</option>
                    <option value="15">Watchs</option>
                    <option value="16">Electronic</option>
                  </select>
                </div>
                <div class="search_box">
                  <input placeholder="Search product..." type="text" />
                  <button type="submit">
                    <span class="lnr lnr-magnifier"></span>
                  </button>
                </div>
              </form>
            </div>

            <div class="call-support">
              <p>
                <a href="tel:(08)23456789">(08) 23 456 789</a> Customer Support
              </p>
            </div>
            <div id="menu" class="text-left ">
              <ul class="offcanvas_main_menu">
                <li class="menu-item-has-children active">
                  <a href="#">Home</a>
                  <ul class="sub-menu">
                    <li><a href="index.html">Home 1</a></li>
                    <li><a href="index-2.html">Home 2</a></li>
                    <li><a href="index-3.html">Home 3</a></li>
                    <li><a href="index-4.html">Home 4</a></li>
                    <li><a href="index-5.html">Home 5</a></li>
                  </ul>
                </li>
                <li class="menu-item-has-children">
                  <a href="#">Shop</a>
                  <ul class="sub-menu">
                    <li class="menu-item-has-children">
                      <a href="#">Shop Layouts</a>
                      <ul class="sub-menu">
                        <li><a href="shop.html">shop</a></li>
                        <li><a href="shop-fullwidth.html">Full Width</a></li>
                        <li>
                          <a href="shop-fullwidth-list.html">Full Width list</a>
                        </li>
                        <li>
                          <a href="shop-right-sidebar.html">Right Sidebar </a>
                        </li>
                        <li>
                          <a href="shop-right-sidebar-list.html">
                            Right Sidebar list</a
                          >
                        </li>
                        <li><a href="shop-list.html">List View</a></li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">other Pages</a>
                      <ul class="sub-menu">
                        <li><a href="cart.html">cart</a></li>
                        <li><a href="wishlist.html">Wishlist</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="my-account.html">my account</a></li>
                        <li><a href="404.html">Error 404</a></li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Product Types</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="product-details.html">product details</a>
                        </li>
                        <li>
                          <a href="product-sidebar.html">product sidebar</a>
                        </li>
                        <li>
                          <a href="product-grouped.html">product grouped</a>
                        </li>
                        <li>
                          <a href="variable-product.html">product variable</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="menu-item-has-children">
                  <a href="#">blog</a>
                  <ul class="sub-menu">
                    <li><a href="blog.html">blog</a></li>
                    <li><a href="blog-details.html">blog details</a></li>
                    <li><a href="blog-fullwidth.html">blog fullwidth</a></li>
                    <li><a href="blog-sidebar.html">blog sidebar</a></li>
                  </ul>
                </li>
                <li class="menu-item-has-children">
                  <a href="#">pages </a>
                  <ul class="sub-menu">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="services.html">services</a></li>
                    <li><a href="faq.html">Frequently Questions</a></li>
                    <li><a href="contact.html">contact</a></li>
                    <li><a href="login.html">login</a></li>
                    <li><a href="404.html">Error 404</a></li>
                  </ul>
                </li>
                <li class="menu-item-has-children">
                  <a href="my-account.html">my account</a>
                </li>
                <li class="menu-item-has-children">
                  <a href="about.html">about Us</a>
                </li>
                <li class="menu-item-has-children">
                  <a href="contact.html"> Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="offcanvas_footer">
              <span
                ><a href="#"
                  ><i class="fa fa-envelope-o"></i> info@yourdomain.com</a
                ></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--offcanvas menu area end-->

  <header>
    <div class="main_header">
      <div class="header_top">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6">
              <div class="language_currency">
                <ul>
                  <li class="language">
                    <a href="#">
                      Language <i class="icon-right ion-ios-arrow-down"></i
                    ></a>
                    <ul class="dropdown_language">
                      <li><a href="#">French</a></li>
                      <li><a href="#">Spanish</a></li>
                      <li><a href="#">Russian</a></li>
                    </ul>
                  </li>
                  <li class="currency">
                    <a href="#">
                      Currency <i class="icon-right ion-ios-arrow-down"></i
                    ></a>
                    <ul class="dropdown_currency">
                      <li><a href="#">€ Euro</a></li>
                      <li><a href="#">£ Pound Sterling</a></li>
                      <li><a href="#">$ US Dollar</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="header_social text-right">
                <ul>
                  <li>
                    <a href="#"><i class="ion-social-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"
                      ><i class="ion-social-googleplus-outline"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#"><i class="ion-social-youtube-outline"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="ion-social-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="ion-social-instagram-outline"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header_middle">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-2 col-md-3 col-sm-3 col-3">
              <div class="logo">
                <router-link to="/"
                  ><img src="assets/img/logo/logo.png" alt=""
                /></router-link>
              </div>
            </div>
            <div class="col-lg-10 col-md-6 col-sm-7 col-8">
              <div class="header_right_info">
                <div class="search_container">
                  <form action="#">
                    <div class="hover_category">
                      <select
                        class="select_option"
                        name="select"
                        id="categori2"
                      >
                        <option selected value="1">Select a categories</option>
                        <option value="2">Accessories</option>
                        <option value="3">Accessories & More</option>
                        <option value="4">Butters & Eggs</option>
                        <option value="5">Camera & Video </option>
                        <option value="6">Mornitors</option>
                        <option value="7">Tablets</option>
                        <option value="8">Laptops</option>
                        <option value="9">Handbags</option>
                        <option value="10">Headphone & Speaker</option>
                        <option value="11">Herbs & botanicals</option>
                        <option value="12">Vegetables</option>
                        <option value="13">Shop</option>
                        <option value="14">Laptops & Desktops</option>
                        <option value="15">Watchs</option>
                        <option value="16">Electronic</option>
                      </select>
                    </div>
                    <div class="search_box">
                      <input placeholder="Search product..." type="text" />
                      <button type="submit">
                        <span class="lnr lnr-magnifier"></span>
                      </button>
                    </div>
                  </form>
                </div>
                <div class="header_account_area">
                  <div class="header_account_list register">
                    <ul>
                      <li><a href="login.html">Register</a></li>
                      <li><span>/</span></li>
                      <li><a href="login.html">Login</a></li>
                    </ul>
                  </div>
                  <div class="header_account_list header_wishlist">
                    <a href="wishlist.html"
                      ><span class="lnr lnr-heart"></span>
                      <span class="item_count">3</span>
                    </a>
                  </div>
                  <div class="header_account_list  mini_cart_wrapper">
                    <a href="javascript:void(0)"
                      ><span class="lnr lnr-cart"></span
                      ><span class="item_count">{{
                        $store.state.cartCount
                      }}</span></a
                    >
                    <!--mini cart-->
                    <MiniCart />
                    <!--mini cart end-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header_bottom sticky-header">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3">
              <CategoryMenu />
            </div>
            <div class="col-lg-6">
              <!--main menu start-->
              <div class="main_menu menu_position">
                <nav>
                  <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/shop">Shop</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                  </ul>
                </nav>
              </div>
              <!--main menu end-->
            </div>
            <div class="col-lg-3">
              <div class="call-support">
                <p>
                  <a href="tel:(08)23456789">(08) 23 456 789</a> Customer
                  Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CategoryMenu from "@/components/CategoryMenu.vue";
import MiniCart from "@/components/MiniCart.vue";
import $ from "jquery";
export default {
  name: "HeaderArea",
  components: {
    CategoryMenu,
    MiniCart
  },
  mounted() {
    /*---search box slideToggle---*/
    $(".search_box > a").on("click", function() {
      $(this).toggleClass("active");
      $(".search_widget").slideToggle("medium");
    });

    /*---header account slideToggle---*/
    $(".header_account > a").on("click", function() {
      $(this).toggleClass("active");
      $(".dropdown_account").slideToggle("medium");
    });

    /*---slide toggle activation---*/

    /*---mini cart activation---*/
    $(".mini_cart_wrapper > a").on("click", function() {
      $(".mini_cart,.off_canvars_overlay").addClass("active");
    });

    $(".mini_cart_close,.off_canvars_overlay").on("click", function() {
      $(".mini_cart,.off_canvars_overlay").removeClass("active");
    });

    /*---canvas menu activation---*/
    $(".canvas_open,.off_canvars_overlay").on("click", function() {
      $(".offcanvas_menu_wrapper,.off_canvars_overlay").addClass("active");
    });

    $(".canvas_close,.off_canvars_overlay").on("click", function() {
      $(".offcanvas_menu_wrapper,.off_canvars_overlay").removeClass("active");
    });

    /*---Off Canvas Menu---*/
    var $offcanvasNav = $(".offcanvas_main_menu"),
      $offcanvasNavSubMenu = $offcanvasNav.find(".sub-menu");
    $offcanvasNavSubMenu
      .parent()
      .prepend(
        '<span class="menu-expand"><i class="fa fa-angle-down"></i></span>'
      );

    $offcanvasNavSubMenu.slideUp();

    $offcanvasNav.on("click", "li a, li .menu-expand", function(e) {
      var $this = $(this);
      if (
        $this
          .parent()
          .attr("class")
          .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
        ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
      ) {
        e.preventDefault();
        if ($this.siblings("ul:visible").length) {
          $this.siblings("ul").slideUp("slow");
        } else {
          $this
            .closest("li")
            .siblings("li")
            .find("ul:visible")
            .slideUp("slow");
          $this.siblings("ul").slideDown("slow");
        }
      }
      if (
        $this.is("a") ||
        $this.is("span") ||
        $this.attr("clas").match(/\b(menu-expand)\b/)
      ) {
        $this.parent().toggleClass("menu-open");
      } else if (
        $this.is("li") &&
        $this.attr("class").match(/\b('menu-item-has-children')\b/)
      ) {
        $this.toggleClass("menu-open");
      }
    });
  }
};
</script>
