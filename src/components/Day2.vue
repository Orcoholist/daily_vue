<template>
  <div>
    <div class="app">
      <h2>{{ greeting }}</h2>
      <p>by {{ user }} who lives in {{ city }}</p>
      <button v-on:click="changeGreeting">Change Greeting</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      greeting: "Hello World!",
      user: "Aleksey Fedorov",
      city: "Saint-Ptersburg",
    };
  },
  methods: {
    changeGreeting() {
      this.greeting =
        this.greeting === "Hello World!" ? "What is up!" : "Hello World!";
    },
  },
};
</script>
<style>
html,
body {
  background: #f3f5f6;
}

.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

h2 {
  margin-top: 0;
}

p {
  margin-top: 0;
  font-size: 18px;
}
</style>
