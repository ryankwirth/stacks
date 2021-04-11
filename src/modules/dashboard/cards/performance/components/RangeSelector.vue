<template>
  <div class="range-selector">
    <div class="range-selector__option">1W</div>
    <div class="range-selector__option">1M</div>
    <div class="range-selector__option">3M</div>
    <div class="range-selector__option">YTD</div>
    <div class="range-selector__option range-selector__option--selected">
      1Y
    </div>
    <div class="range-selector__option">3Y</div>
    <div class="range-selector__option">All</div>
  </div>
</template>

<style lang="scss">
.range-selector {
  display: flex;
}

.range-selector__option {
  margin: 0 4px;
  padding: 8px 12px;

  font-size: 15px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
}

.range-selector__option--selected {
  font-weight: bold;
  border-radius: 4px;
  background: $color-neutral-700;
}
</style>
