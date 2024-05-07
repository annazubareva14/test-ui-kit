<template>
  <div>
    <button class="test-button">test button</button>
  </div>
</template>

<script>
export default {
    name: 'TestButton'
}
</script>

<style>
.test-button {
  position: relative;
  width: 100%;
  max-width: 400px;
  min-height: 50px;
  padding: 20px 30px;
  border-radius: 10px;
  border: 0 none;
  outline: 0;
  background-color: #1e87be;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  cursor: pointer;
  transition: 0.3s;
}
</style>
