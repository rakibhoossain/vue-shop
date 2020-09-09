<template>
  <!--breadcrumbs area start-->
  <div class="breadcrumbs_area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="breadcrumb_content">
            <h3>Shop</h3>
            <ul>
              <li><a href="index.html">home</a></li>
              <li>shop</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--breadcrumbs area end-->

  <!--shop  area start-->
  <div class="shop_area shop_reverse mt-70 mb-70">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-12">
          <!--sidebar widget start-->
          <ShopSidebar />
          <!--sidebar widget end-->
        </div>
        <div class="col-lg-9 col-md-12">
          <!--shop wrapper start-->
          <!--shop toolbar start-->
          <div class="shop_toolbar_wrapper">
            <div class="shop_toolbar_btn">
              <button
                data-role="grid_3"
                type="button"
                class="active btn-grid-3"
                data-toggle="tooltip"
                title="3"
              ></button>

              <button
                data-role="grid_4"
                type="button"
                class=" btn-grid-4"
                data-toggle="tooltip"
                title="4"
              ></button>

              <button
                data-role="grid_list"
                type="button"
                class="btn-list"
                data-toggle="tooltip"
                title="List"
              ></button>
            </div>
            <div class=" niceselect_option">
              <form action="#">
                <select
                  name="orderby"
                  id="short"
                  class="shop_filter_select_option"
                >
                  <option selected value="1">Sort by average rating</option>
                  <option value="2">Sort by popularity</option>
                  <option value="3">Sort by newness</option>
                  <option value="4">Sort by price: low to high</option>
                  <option value="5">Sort by price: high to low</option>
                  <option value="6">Product Name: Z</option>
                </select>
              </form>
            </div>
            <div class="page_amount">
              <p>
                Showing {{ pagination.from }}–{{ pagination.to }} of
                {{ pagination.total }} results
              </p>
            </div>
          </div>
          <!--shop toolbar end-->
          <div class="row shop_wrapper">
            <div
              class="col-lg-4 col-md-4 col-sm-6 col-12 "
              v-for="product in products"
              :key="product.id"
            >
              <div class="single_product">
                <div class="product_thumb">
                  <a class="primary_img" href="product-details.html"
                    ><img src="assets/img/product/productbig1.jpg" alt=""
                  /></a>
                  <a class="secondary_img" href="product-details.html"
                    ><img src="assets/img/product/productbig2.jpg" alt=""
                  /></a>
                  <div class="label_product">
                    <span class="label_sale">Sale</span>
                    <span class="label_new">New</span>
                  </div>
                  <div class="action_links">
                    <ul>
                      <li class="add_to_cart">
                        <a href="cart.html" title="Add to cart"
                          ><span class="lnr lnr-cart"></span
                        ></a>
                      </li>
                      <li class="quick_button">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#modal_box"
                          title="quick view"
                        >
                          <span class="lnr lnr-magnifier"></span
                        ></a>
                      </li>
                      <li class="wishlist">
                        <a href="wishlist.html" title="Add to Wishlist"
                          ><span class="lnr lnr-heart"></span
                        ></a>
                      </li>
                      <li class="compare">
                        <a href="#" title="Add to Compare"
                          ><span class="lnr lnr-sync"></span
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="product_content grid_content">
                  <h4 class="product_name">
                    <a href="product-details.html">{{ product.name }}</a>
                  </h4>
                  <p><a href="#">Fruits</a></p>
                  <div class="price_box">
                    <span class="current_price">{{ product.price }}</span>
                    <span class="old_price">{{ product.sell_price }}</span>
                  </div>
                </div>
                <div class="product_content list_content">
                  <h4 class="product_name">
                    <a href="product-details.html">{{ product.name }}</a>
                  </h4>
                  <p><a href="#">Fruits</a></p>
                  <div class="price_box">
                    <span class="current_price">{{ product.price }}</span>
                    <span class="old_price">{{ product.sell_price }}</span>
                  </div>
                  <div class="product_desc">
                    <p>
                      Nunc facilisis sagittis ullamcorper. Proin lectus ipsum,
                      gravida et mattis vulputate, tristique ut lectus. Sed et
                      lorem nunc. Vestibulum ante ipsum primis in faucibus orci
                      luctus et ultrices posuere cubilia Curae; Aenean eleifend
                      laoreet congue. Viva..
                    </p>
                  </div>
                  <div class="action_links list_action_right">
                    <ul>
                      <li class="add_to_cart">
                        <a href="cart.html" title="Add to cart">Add to Cart</a>
                      </li>
                      <li class="quick_button">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#modal_box"
                          title="quick view"
                        >
                          <span class="lnr lnr-magnifier"></span
                        ></a>
                      </li>
                      <li class="wishlist">
                        <a href="wishlist.html" title="Add to Wishlist"
                          ><span class="lnr lnr-heart"></span
                        ></a>
                      </li>
                      <li class="compare">
                        <a href="#" title="Add to Compare"
                          ><span class="lnr lnr-sync"></span
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="shop_toolbar t_bottom">
            <Pagination :paginations="pagination" v-if="loaded"></Pagination>
            <!-- <div class="pagination">
              <ul>
                <li class="current">1</li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li class="next"><a href="#">next</a></li>
                <li><a href="#">>></a></li>
              </ul>
            </div> -->
          </div>
          <!--shop toolbar end-->
          <!--shop wrapper end-->
        </div>
      </div>
    </div>
  </div>
  <!--shop  area end-->
</template>

<script>
import ShopSidebar from "@/components/ShopSidebar.vue";
import Pagination from "@/components/Pagination.vue";
import $ from "jquery";
import axios from "axios";
export default {
  name: "Shop",
  data() {
    return {
      products: [],
      productsData: [],
      pagination: {
        current_page: null,
        first_page_url: null,
        from: null,
        last_page: null,
        last_page_url: null,
        next_page_url: null,
        path: null,
        per_page: null,
        prev_page_url: null,
        to: null,
        total: null
      },
      loaded: false,
      errors: []
    };
  },
  components: {
    ShopSidebar,
    Pagination
  },
  created() {
    this.getProductsData();
  },
  mounted() {
    $(".shop_filter_select_option").niceSelect();

    /*---shop grid activation---*/
    $(".shop_toolbar_btn > button").on("click", function(e) {
      e.preventDefault();

      $(".shop_toolbar_btn > button").removeClass("active");
      $(this).addClass("active");

      var parentsDiv = $(".shop_wrapper");
      var viewMode = $(this).data("role");

      parentsDiv
        .removeClass("grid_3 grid_4 grid_5 grid_list")
        .addClass(viewMode);

      if (viewMode == "grid_3") {
        parentsDiv
          .children()
          .addClass("col-lg-4 col-md-4 col-sm-6")
          .removeClass("col-lg-3 col-cust-5 col-12");
      }

      if (viewMode == "grid_4") {
        parentsDiv
          .children()
          .addClass("col-lg-3 col-md-4 col-sm-6")
          .removeClass("col-lg-4 col-cust-5 col-12");
      }

      if (viewMode == "grid_list") {
        parentsDiv
          .children()
          .addClass("col-12")
          .removeClass("col-lg-3 col-lg-4 col-md-4 col-sm-6 col-cust-5");
      }
    });
  },
  methods: {
    getProductsData() {
      let _this = this;
      axios
        .get(`http://127.0.0.1:8000/api/shop`)
        .then(response => {
          // JSON responses are automatically parsed.
          _this.productsData = response.data;

          _this.pagination.current_page = response.data.current_page;
          _this.pagination.first_page_url = response.data.first_page_url;
          _this.pagination.from = response.data.from;
          _this.pagination.last_page = response.data.last_page;
          _this.pagination.last_page_url = response.data.last_page_url;
          _this.pagination.next_page_url = response.data.next_page_url;
          _this.pagination.path = response.data.path;
          _this.pagination.per_page = response.data.per_page;
          _this.pagination.prev_page_url = response.data.prev_page_url;
          _this.pagination.to = response.data.to;
          _this.pagination.total = response.data.total;

          _this.products = response.data.data;
          _this.loaded = true;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>
