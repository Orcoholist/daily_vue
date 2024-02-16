<template>
  <div id="app">
    <h2>{{ greeting }}</h2>
    <p>{{ alertMessage }}</p>
    <button v-on:click="changeGreeting">Change Greeting</button>
    <button v-on:dblclick="changeGreeting">
      Double click to change greeting
    </button>
    <input v-on:keyup="alertMessageGreeting" placeholder="Type something" />
    <input
      v-on:keyup.enter="alertEnterGreeting"
      placeholder="Type and release Enter"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      greeting: "Hello World!",
    };
  },
  methods: {
    changeGreeting() {
      this.greeting =
        this.greeting === "Hello World!" ? "What is up!" : "Hello World!";
    },
    alertMessageGreeting() {
      this.alertMessage = "You typed something!";
    },
    alertEnterGreeting() {
      this.alertMessage = "You typed and pressed Enter!";
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

button,
input {
  margin: 5px 0;
}

button {
  font-size: 13px;
}

input {
  min-width: 260px;
  padding: 5px;
}
</style>
