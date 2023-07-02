<script setup>
import PersonalDetails from './../components/PersonalDetails.vue'
import PersonalInfo from './../components/PersonalInfo.vue'

</script>

<template>
  <div class="main-wrapper">
    
    <div class="wrap">
      
      <PersonalDetails />
      <PersonalInfo />
    </div>
  </div>
</template>
<style scoped>
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: var(--bacground-color-body);
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
}

ul {
  list-style-position: inside;
}

h1 {
  font-size: 2.1rem;
}

h2 {
  font-size: 1.6rem;
}

h3 {
  font-size: 1.1rem;
}



.wrap {
  min-height: 100vh;
  width: 950px;
  max-width: 100%;
  background-color: var(--white-primary);
  display: flex;
  flex-wrap: wrap;
}



.main-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

@media screen and (max-width:650px) {
  .wrap {
    flex-direction: column;
  }
}
</style>