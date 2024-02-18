<template>
  <div id="app">
    <h2>{{ greeting }}</h2>
    <p v-if="city === 'Seville'">by {{ user }} who lives in {{ city }}</p>
    <p v-if="city === 'New York'">
      by {{ user }} who wishes to visit {{ city }}
    </p>
    <img v-bind:src="cityImage" />
    <button v-on:click="changeCity">Change City</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      greeting: "Hello World!",
      user: "José Luis Ferrete",
      city: "Seville",
      cityImage:
        "https://sevillasecreta.co/wp-content/uploads/2016/05/Sevilla2.jpg",
    };
  },
  methods: {
    changeCity() {
      if (this.city === "Seville") {
        this.city = "New York";
        this.cityImage =
          "https://cdn.atrapalo.com/common/photo/vv/64739/6/ticr_640_350.jpg";
      } else {
        this.city = "Seville";
        this.cityImage =
          "https://sevillasecreta.co/wp-content/uploads/2016/05/Sevilla2.jpg";
      }
    },
  },
};
</script>
<style>
h2 {
  margin-top: 0;
}

p {
  margin-top: 0;
  font-size: 18px;
}

img {
  max-width: 400px;
}

button {
  margin: 15px 0;
  font-size: 13px;
}
</style>
