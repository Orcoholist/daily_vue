<template>
  <div id="app">
    <h2>{{ greeting }}</h2>
    <p>by {{ user }} who lives in {{ city }}</p>
    <img v-bind:src="cityImage" />
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
};
</script>
<style>
html,
body {
  height: 100%;
  background: #f3f5f6;
}

/* #app {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
} */
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
</style>
