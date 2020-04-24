<template>
  <div class="hero">
    <div class="hero-body has-text-centered">
      <div class="container">
        <h2 class="title">{{ title }}</h2>
        <p class="subtitle">{{ subtitle }}</p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    }
  }
};
</script>

<style>
</style>