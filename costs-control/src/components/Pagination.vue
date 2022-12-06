<template>
    <div class="wrp">
      <div class="prevBtn" @click="onClick(cur - 1)">prev</div>
      <div v-for="page in amountPages"
      :key="page"
      @click="onClick(page)"
      :class="{active: page === cur}">
        {{ page }}
      </div>
      <div class="next-btn" @click="onClick(cur + 1)">next</div>
    </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    length: Number,
    n: Number,
    cur: Number
  },
  computed: {
    amountPages() {
      return Math.ceil(this.length/this.n)
    }
  },
  methods: {
    onClick(p) {
      if (p<1 || p > this.amountPages) {
        return;
      }
      this.$emit('paginate', p)
    },
  },
};
</script>

<style scoped lang="scss">
.wrp {
  display: flex;
  justify-content: center;
  & > div {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 10px;
    &.active {
      background: #ccc;

    }
  }
}
</style>