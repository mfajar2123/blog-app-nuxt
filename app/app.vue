<template>
  <NuxtPage />
</template>

<style>
body {
  font-family: monospace;
}
</style>

<script setup>
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});</script>