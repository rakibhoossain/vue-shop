<template>
  <div class="pagination">
    <ul>
      <li
        class="disabled"
        aria-disabled="true"
        aria-label="Previous page"
        v-if="pagination.current_page == 1"
      >
        &lsaquo;
      </li>
      <li v-else>
        <a
          class="page-link"
          :href="pagination.prev_page_url"
          @click.prevent="sendPageNumber(pagination.current_page - 1)"
          rel="prev"
          aria-label="Prev Page"
          >&lsaquo;</a
        >
      </li>

      <li
        v-for="page in pagination.last_page"
        :class="{ current: pagination.current_page == page }"
        aria-current="page"
        :key="page"
      >
        <span v-if="pagination.current_page == page">{{ page }}</span>
        <a
          v-else
          :href="pagination.path + '?page=' + page"
          @click.prevent="sendPageNumber(page)"
          >{{ page }}</a
        >
      </li>

      <li v-if="pagination.last_page > pagination.current_page">
        <a
          :href="pagination.next_page_url"
          rel="next"
          aria-label="Next Page"
          @click.prevent="sendPageNumber(pagination.current_page + 1)"
          >&rsaquo;</a
        >
      </li>
      <li class="disabled" aria-disabled="true" aria-label="Next Page" v-else>
        &rsaquo;
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    paginations: Object
  },
  data() {
    return {
      pagination: { ...this.paginations }
    };
  },
  updated() {
    this.pagination = { ...this.paginations };
  },
  watch: {
    paginations() {
      this.pagination = { ...this.paginations };
    }
  },
  created() {
    console.log(this.pagination.first_page_url, this.pagination);
  },
  methods: {
    sendPageNumber(page) {
      this.$emit("change-url", page);
    }
  }
};
</script>
