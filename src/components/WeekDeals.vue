<template>
  <div class="product_area product_deals mb-65">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="section_title">
            <p>Recently added our store</p>
            <h2>Deals Of The Weeks</h2>
          </div>
        </div>
      </div>
      <div class="product_container">
        <div class="row">
          <div class="col-12">
            <div
              class="product_carousel product_column5 owl-carousel"
              id="week-deals"
            >
              <article
                class="single_product"
                v-for="item in items"
                :key="item.id"
              >
                <figure>
                  <div class="product_thumb">
                    <a class="primary_img" href="product-details.html"
                      ><img src="assets/img/product/product14.jpg" alt=""
                    /></a>
                    <a class="secondary_img" href="product-details.html"
                      ><img src="{{item.image}}" alt=""
                    /></a>
                    <div class="label_product">
                      <span class="label_sale">Sale</span>
                      <span class="label_new">New</span>
                    </div>
                    <div class="product_timing">
                      <div data-countdown="2021/12/15"></div>
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
                  <figcaption class="product_content">
                    <h4 class="product_name">
                      <a href="product-details.html">Mauris Vel Tellus</a>
                    </h4>
                    <p><a href="#">Fruits</a></p>
                    <div class="price_box">
                      <span class="current_price">$48.00</span>
                      <span class="old_price">$257.00</span>
                    </div>
                  </figcaption>
                </figure>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "TrendingProducts",
  data() {
    return {
      items: [
        {
          id: 1,
          image: "assets/img/slider/slider1.jpg",
          title: "Vegetables Big Sale",
          subtitle: "Natural Farm Products",
          description:
            "Natural organic tomatoes make your health stronger. Put your information here",
          url: "#",
          btn: "Read more"
        },
        {
          id: 2,
          image: "assets/img/slider/slider2.jpg",
          title: "Vegetables Big Sale",
          subtitle: "Natural Farm Products",
          description:
            "Natural organic tomatoes make your health stronger. Put your information here",
          url: "#",
          btn: "Read more"
        },
        {
          id: 3,
          image: "assets/img/slider/slider3.jpg",
          title: "Vegetables Big Sale",
          subtitle: "Natural Farm Products",
          description:
            "Natural organic tomatoes make your health stronger. Put your information here",
          url: "#",
          btn: "Read more"
        },
        {
          id: 5,
          image: "assets/img/slider/slider5.jpg",
          title: "Vegetables Big Sale",
          subtitle: "Natural Farm Products",
          description:
            "Natural organic tomatoes make your health stronger. Put your information here",
          url: "#",
          btn: "Read more"
        },
        {
          id: 6,
          image: "assets/img/slider/slider6.jpg",
          title: "Vegetables Big Sale",
          subtitle: "Natural Farm Products",
          description:
            "Natural organic tomatoes make your health stronger. Put your information here",
          url: "#",
          btn: "Read more"
        },
        {
          id: 7,
          image: "assets/img/slider/slider7.jpg",
          title: "Vegetables Big Sale",
          subtitle: "Natural Farm Products",
          description:
            "Natural organic tomatoes make your health stronger. Put your information here",
          url: "#",
          btn: "Read more"
        },
        {
          id: 8,
          image: "assets/img/slider/slider8.jpg",
          title: "Vegetables Big Sale",
          subtitle: "Natural Farm Products",
          description:
            "Natural organic tomatoes make your health stronger. Put your information here",
          url: "#",
          btn: "Read more"
        },
        {
          id: 9,
          image: "assets/img/slider/slider9.jpg",
          title: "Vegetables Big Sale",
          subtitle: "Natural Farm Products",
          description:
            "Natural organic tomatoes make your health stronger. Put your information here",
          url: "#",
          btn: "Read more"
        }
      ]
    };
  },
  mounted() {
    console.log(this.$el.textContent); // I'm text inside the component.
    var $porductColumn5 = $("#week-deals");
    if ($porductColumn5.length > 0) {
      $porductColumn5
        .on("changed.owl.carousel initialized.owl.carousel", function(event) {
          $(event.target)
            .find(".owl-item")
            .removeClass("last")
            .eq(event.item.index + event.page.size - 1)
            .addClass("last");
        })
        .owlCarousel({
          loop: true,
          nav: true,
          autoplay: false,
          autoplayTimeout: 8000,
          items: 5,
          margin: 20,
          dots: false,
          navText: [
            '<i class="ion-ios-arrow-left"></i>',
            '<i class="ion-ios-arrow-right"></i>'
          ],
          responsiveClass: true,
          responsive: {
            0: {
              items: 1
            },
            576: {
              items: 2
            },
            768: {
              items: 3
            },
            992: {
              items: 4
            },
            1200: {
              items: 5
            }
          }
        });
    }
  }
};
</script>
