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
        <span
          class="link-item"
          :href="pagination.prev_page_url"
          @click.prevent="sendPageNumber(pagination.current_page - 1)"
          rel="prev"
          aria-label="Prev Page"
          >&lsaquo;</span
        >
      </li>

      <li
        v-for="page in pagination.last_page"
        :class="{ current: pagination.current_page == page }"
        aria-current="page"
        :key="page"
      >
        <span v-if="pagination.current_page == page">{{ page }}</span>
        <span
          v-else
          :href="pagination.path + '?page=' + page"
          @click.prevent="sendPageNumber(page)"
          >{{ page }}
        </span>
      </li>

      <li v-if="pagination.last_page > pagination.current_page">
        <span
          :href="pagination.next_page_url"
          rel="next"
          aria-label="Next Page"
          @click.prevent="sendPageNumber(pagination.current_page + 1)"
          >&rsaquo;</span
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
  watch: {
    paginations() {
      this.pagination = { ...this.paginations };
      console.log(this.pagination);
      console.log(this.paginations);
    }
  },
  methods: {
    sendPageNumber(page) {
      this.$emit("change-url", page);
    }
  }
};
</script>
<style scoped>
span {
  cursor: pointer;
  display: block;
}
</style>
