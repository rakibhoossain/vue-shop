<template>
  <div class="categories_menu">
    <div class="categories_title">
      <h2 class="categori_toggle">All Cattegories</h2>
    </div>
    <div class="categories_menu_toggle">
      <ul>
        <li class="menu_item_children">
          <a href="#">Vegetables<i class="fa fa-angle-right"></i></a>
          <ul class="categories_mega_menu">
            <li class="menu_item_children">
              <a href="#">Dresses</a>
              <ul class="categorie_sub_menu">
                <li><a href="#">Sweater</a></li>
                <li><a href="#">Evening</a></li>
                <li><a href="#">Day</a></li>
                <li><a href="#">Sports</a></li>
              </ul>
            </li>
            <li class="menu_item_children">
              <a href="#">Handbags</a>
              <ul class="categorie_sub_menu">
                <li><a href="#">Shoulder</a></li>
                <li><a href="#">Satchels</a></li>
                <li><a href="#">kids</a></li>
                <li><a href="#">coats</a></li>
              </ul>
            </li>
            <li class="menu_item_children">
              <a href="#">shoes</a>
              <ul class="categorie_sub_menu">
                <li><a href="#">Ankle Boots</a></li>
                <li><a href="#">Clog sandals </a></li>
                <li><a href="#">run</a></li>
                <li><a href="#">Books</a></li>
              </ul>
            </li>
            <li class="menu_item_children">
              <a href="#">Clothing</a>
              <ul class="categorie_sub_menu">
                <li><a href="#">Coats Jackets </a></li>
                <li><a href="#">Raincoats</a></li>
                <li><a href="#">Jackets</a></li>
                <li><a href="#">T-shirts</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="menu_item_children">
          <a href="#">Fruits <i class="fa fa-angle-right"></i></a>
          <ul class="categories_mega_menu column_3">
            <li class="menu_item_children">
              <a href="#">Chair</a>
              <ul class="categorie_sub_menu">
                <li><a href="#">Dining room</a></li>
                <li><a href="#">bedroom</a></li>
                <li><a href="#"> Home & Office</a></li>
                <li><a href="#">living room</a></li>
              </ul>
            </li>
            <li class="menu_item_children">
              <a href="#">Lighting</a>
              <ul class="categorie_sub_menu">
                <li><a href="#">Ceiling Lighting</a></li>
                <li><a href="#">Wall Lighting</a></li>
                <li><a href="#">Outdoor Lighting</a></li>
                <li><a href="#">Smart Lighting</a></li>
              </ul>
            </li>
            <li class="menu_item_children">
              <a href="#">Sofa</a>
              <ul class="categorie_sub_menu">
                <li><a href="#">Fabric Sofas</a></li>
                <li><a href="#">Leather Sofas</a></li>
                <li><a href="#">Corner Sofas</a></li>
                <li><a href="#">Sofa Beds</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="menu_item_children">
          <a href="#"> Salads<i class="fa fa-angle-right"></i></a>
          <ul class="categories_mega_menu column_2">
            <li class="menu_item_children">
              <a href="#">Brake Tools</a>
              <ul class="categorie_sub_menu">
                <li><a href="#">Driveshafts</a></li>
                <li><a href="#">Spools</a></li>
                <li><a href="#">Diesel </a></li>
                <li><a href="#">Gasoline</a></li>
              </ul>
            </li>
            <li class="menu_item_children">
              <a href="#">Emergency Brake</a>
              <ul class="categorie_sub_menu">
                <li><a href="#">Dolls for Girls</a></li>
                <li><a href="#">Girls' Learning Toys</a></li>
                <li><a href="#">Arts and Crafts for Girls</a></li>
                <li><a href="#">Video Games for Girls</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="menu_item_children">
          <a href="#"> Fish & Seafood <i class="fa fa-angle-right"></i></a>
          <ul class="categories_mega_menu column_2">
            <li class="menu_item_children">
              <a href="#">Check Trousers</a>
              <ul class="categorie_sub_menu">
                <li><a href="#">Building</a></li>
                <li><a href="#">Electronics</a></li>
                <li><a href="#">action figures </a></li>
                <li><a href="#">specialty & boutique toy</a></li>
              </ul>
            </li>
            <li class="menu_item_children">
              <a href="#">Calculators</a>
              <ul class="categorie_sub_menu">
                <li><a href="#">Dolls for Girls</a></li>
                <li><a href="#">Girls' Learning Toys</a></li>
                <li><a href="#">Arts and Crafts for Girls</a></li>
                <li><a href="#">Video Games for Girls</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="#"> Fresh Meat</a></li>
        <li><a href="#"> Butter & Eggs</a></li>
        <li><a href="#">Milk</a></li>
        <li><a href="#">Oil & Vinegars</a></li>
        <li><a href="#"> Bread</a></li>
        <li><a href="#"> Jam & Honey</a></li>
        <li><a href="#"> Frozen Food</a></li>
        <li class="hidden"><a href="shop.html">New Sofas</a></li>
        <li class="hidden"><a href="shop.html">Sleight Sofas</a></li>
        <li>
          <a href="#" id="more-btn"
            ><i class="fa fa-plus" aria-hidden="true"></i> More Categories</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "CategoryMenu",
  mounted() {
    /*---categories slideToggle---*/
    $(".categories_title").on("click", function() {
      $(this).toggleClass("active");
      $(".categories_menu_toggle").slideToggle("medium");
    });

    /*---widget sub categories---*/
    $(".sub_categories1 > a").on("click", function() {
      $(this).toggleClass("active");
      $(".dropdown_categories1").slideToggle("medium");
    });

    /*---widget sub categories---*/
    $(".sub_categories2 > a").on("click", function() {
      $(this).toggleClass("active");
      $(".dropdown_categories2").slideToggle("medium");
    });

    /*---widget sub categories---*/
    $(".sub_categories3 > a").on("click", function() {
      $(this).toggleClass("active");
      $(".dropdown_categories3").slideToggle("medium");
    });

    /*----------  Category more toggle  ----------*/

    $(".categories_menu_toggle li.hidden").hide();
    $("#more-btn").on("click", function(e) {
      e.preventDefault();
      $(".categories_menu_toggle li.hidden").toggle(500);
      var htmlAfter =
        '<i class="fa fa-minus" aria-hidden="true"></i> Less Categories';
      var htmlBefore =
        '<i class="fa fa-plus" aria-hidden="true"></i> More Categories';

      if ($(this).html() == htmlBefore) {
        $(this).html(htmlAfter);
      } else {
        $(this).html(htmlBefore);
      }
    });

    /*---Category menu---*/
    function categorySubMenuToggle() {
      $(".categories_menu_toggle li.menu_item_children > a").on(
        "click",
        function() {
          if ($(window).width() < 991) {
            $(this).removeAttr("href");
            var element = $(this).parent("li");
            if (element.hasClass("open")) {
              element.removeClass("open");
              element.find("li").removeClass("open");
              element.find("ul").slideUp();
            } else {
              element.addClass("open");
              element.children("ul").slideDown();
              element
                .siblings("li")
                .children("ul")
                .slideUp();
              element.siblings("li").removeClass("open");
              element
                .siblings("li")
                .find("li")
                .removeClass("open");
              element
                .siblings("li")
                .find("ul")
                .slideUp();
            }
          }
        }
      );
      $(".categories_menu_toggle li.menu_item_children > a").append(
        '<span class="expand"></span>'
      );
    }
    categorySubMenuToggle();
  }
};
</script>
