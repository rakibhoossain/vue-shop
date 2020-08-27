<template>
  <section class="slider_section">
    <div class="slider_area owl-carousel">
      <div
        class="single_slider d-flex align-items-center"
        v-for="item in items"
        :key="item.id"
        :style="'background-image: url(' + item.image + ')'"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="slider_content">
                <h1>{{ item.title }}</h1>
                <h2>{{ item.subtitle }}</h2>
                <p>{{ item.description }}</p>
                <a :href="item.url">{{ item.btn }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
export default {
  name: "MainSlider",
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
    /*---slider activation---*/
    var $slider = $(".slider_area");
    if ($slider.length > 0) {
      $slider.owlCarousel({
        animateOut: "fadeOut",
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 1,
        dots: true
      });
    }
  }
};
</script>
