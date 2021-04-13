<template>
  <div class="allocation-item">
    <div class="allocation__name">{{ name }}</div>
    <div class="allocation__value">{{ value }}</div>
    <div class="allocation__proportion">{{ proportion }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    value: Number,
    proportion: Number,
  },
};
</script>
