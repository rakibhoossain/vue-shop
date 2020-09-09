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
        <a v-else :href="pagination.path + '?page=' + page">{{ page }}</a>
      </li>

      <li v-if="pagination.last_page > pagination.current_page">
        <a :href="pagination.next_page_url" rel="next" aria-label="Next Page"
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
  mounted() {
    // console.log(this.pagination);
  },
  created() {
    console.log(this.pagination.first_page_url, this.pagination);
  }
};
</script>
