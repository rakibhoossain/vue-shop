<template>
  <aside class="sidebar_widget">
    <div class="widget_inner">
      <div class="widget_list widget_categories">
        <h3>Categories</h3>
        <ul>
          <li
            class="sub_categories"
            v-for="category in categories"
            :key="category.id"
            :class="{ widget_sub_categories: category.children.length }"
          >
            <a href="javascript:void(0)">{{ category.name }}</a>
            <ul class="widget_dropdown_categories dropdown_categories">
              <li v-for="child_cat in category.children" :key="child_cat.id">
                <a href="#">{{ child_cat.name }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="widget_list widget_filter">
        <h3>Filter by price</h3>
        <form action="#">
          <div id="slider-range"></div>
          <button type="submit">Filter</button>
          <input type="text" name="text" id="amount" />
        </form>
      </div>
      <div class="widget_list widget_color">
        <h3>Select By Color</h3>
        <ul>
          <li>
            <a href="#">Black <span>(6)</span></a>
          </li>
          <li>
            <a href="#"> Blue <span>(8)</span></a>
          </li>
          <li>
            <a href="#">Brown <span>(10)</span></a>
          </li>
          <li>
            <a href="#"> Green <span>(6)</span></a>
          </li>
          <li>
            <a href="#">Pink <span>(4)</span></a>
          </li>
        </ul>
      </div>
      <div class="widget_list widget_color">
        <h3>Select By SIze</h3>
        <ul>
          <li>
            <a href="#">S <span>(6)</span></a>
          </li>
          <li>
            <a href="#"> M <span>(8)</span></a>
          </li>
          <li>
            <a href="#">L <span>(10)</span></a>
          </li>
          <li>
            <a href="#"> XL <span>(6)</span></a>
          </li>
          <li>
            <a href="#">XLL <span>(4)</span></a>
          </li>
        </ul>
      </div>
      <div class="widget_list widget_manu">
        <h3>Manufacturer</h3>
        <ul>
          <li>
            <a href="#">Brake Parts <span>(6)</span></a>
          </li>
          <li>
            <a href="#">Accessories <span>(10)</span></a>
          </li>
          <li>
            <a href="#">Engine Parts <span>(4)</span></a>
          </li>
          <li>
            <a href="#">hermes <span>(10)</span></a>
          </li>
          <li>
            <a href="#">louis vuitton <span>(8)</span></a>
          </li>
        </ul>
      </div>
      <div class="widget_list tags_widget">
        <h3>Product tags</h3>
        <div class="tag_cloud">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Watches</a>
          <a href="#">Bags</a>
          <a href="#">Dress</a>
          <a href="#">Belt</a>
          <a href="#">Accessories</a>
          <a href="#">Shoes</a>
        </div>
      </div>
      <div class="widget_list banner_widget">
        <div class="banner_thumb">
          <a href="#"><img src="assets/img/bg/banner17.jpg" alt=""/></a>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import $ from "jquery";
import axios from "axios";
export default {
  name: "ShopSidebar",
  data() {
    return {
      brands: [],
      categories: [],
      variations: [],
      errors: []
    };
  },
  created() {
    // this.getFilterData();
  },
  mounted() {
    this.getFilterData();
    /*---slider-range here---*/
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [0, 500],
      slide: function(event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );

    /*---widget sub categories---*/
    $(document).on("click", ".sub_categories > a", function() {
      $(this).toggleClass("active");
      $(this)
        .parent("li")
        .find(".dropdown_categories")
        .slideToggle("medium");
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
  },
  methods: {
    getFilterData() {
      let _this = this;
      axios
        .get(`http://127.0.0.1:8000/api/shop-filter-data`)
        .then(response => {
          // JSON responses are automatically parsed.
          _this.categories = response.data.categories;
          _this.brands = response.data.brands;
          _this.variations = response.data.variations;

          console.log(_this.categories);
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>
