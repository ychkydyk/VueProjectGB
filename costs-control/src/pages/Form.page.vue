<template>
  <div class="form">
    <router-link :to="-1" replace
    ><div @click="$router.go(-1)" class="closeModal"></div
    ></router-link>
    <input
        v-model="category"
        :class="{ error: !this.category }"
        class="form-input description"
        type="text"
        placeholder="Payment Description"
    />

    <input
        v-model="value"
        :class="{ error: !this.amount }"
        class="form-input amount"
        type="text"
        placeholder="Payment Amount"
    />

    <input
        v-model="date"
        :class="{ error: !this.date }"
        class="form-input date"
        type="text"
        placeholder="Payment Date"
    />
    <div class="btns-form">
      <div v-if="mode === 'edit'" @click="onEditClick" class="btn">EDIT</div>
      <div v-if="mode === 'add'" @click="submitData" class="btn">ADD +</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    to: Number,
  },
  data() {
    // console.log(this.$route.params.category);
    // console.log(this.$route.fullPath);
    // console.log(this.$route.name);
    return {
      category: this.$route.params.category,
      amount: this.$route.query.amount,
      dateCreated: this.$route.query. dateCreated|| new Date().toLocaleDateString(),
      error: false,
      mode: this.$route.params.mode
    };
  },

  methods: {
    submitData() {
      if (this.category && this.date && this.value) {
        // this.category = this.$route.params.category;
        // this.date = new Date();
        // this.value = this.$route.params.value;
        this.$store.commit("addCostsList", {
          id: this.$store.getters.getMaxId + 1,
          date: this.date,
          category: this.category,
          value: this.value,
        });
        this.category = "";
        this.value = "";
        this.date = "";
      }
    },

    onEditClick(){
      this.$store.commit("editCostsList", {
        id: +this.$route.query.id,
        date: this.date,
        category: this.category,
        value: this.value,
      })
    }
  },

  computed: {
    isPopupActive() {
      return this.$store.getters.getIsPopupActive;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form {
  width: 400px;
  height: 300px;
  position: absolute;
  top: 300px;
  left: calc(55% - 300px);
  background-color: white;
  border: 1px solid cadetblue;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &-input {
    width: 80%;
    height: 40px;
    border: none;
    border-bottom: 1px solid cadetblue;
    padding: 0;
    margin: 10px 0;
    outline: none;
  }
}

.error {
  border-bottom: 1px solid red;
}

.closeModal {
  position: absolute;
  top: 30px;
  right: 20px;
  width: 24px;
  height: 24px;
  opacity: 0.2;
  cursor: pointer;
  transition: opacity ease 0.5s;

  &:hover {
    opacity: 1;
  }
}

.closeModal::before,
.closeModal::after {
  content: "";
  position: absolute;
  top: 10px;
  display: block;
  width: 24px;
  height: 3px;
  background: #000;
}

.closeModal::before {
  transform: rotate(45deg);
}

.closeModal::after {
  transform: rotate(-45deg);
}
.btns-form{
  width:300px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

.btn {
  margin-top: 20px;

  background-color: cadetblue;
  border: 1px solid cadetblue;
  border-radius: 3px;
  color: white;
  padding: 7px 25px;
  display: inline-block;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: transparent;
    color: cadetblue;
  }


}
</style>