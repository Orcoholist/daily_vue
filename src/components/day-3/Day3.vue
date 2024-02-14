<template>
    <div class="app">
      <h2>{{ greeting }}</h2>
      <p>by José Luis Ferrete who lives in Seville</p>
      <button @click="changeGreeting">Change Greeting</button>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        greeting: "Hello World!"
      };
    },
    methods: {
      changeGreeting() {
        this.greeting = this.greeting === "Hello World!" ? "What is up!" : "Hello World!";
      }
    }
  };
  </script>
  <style>
  </style>