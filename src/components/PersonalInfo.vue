<script setup>

import About from './PersonalInfo/About.vue';
import Education from './PersonalInfo/Education.vue';
import Skills from './PersonalInfo/Skills.vue';
import WorkExperience from './PersonalInfo/Work Experience.vue';
import References from './PersonalInfo/References.vue';
import LanguageSwitcher from './LanguageSwitcher.vue';


</script>
<template>
    <div class="right">
        <LanguageSwitcher />
        <About />
        <Education />
        <Skills />
        <WorkExperience />
        <References />
    </div>
</template>
<style scoped>
.right {
    
    background-color: rgb(255, 255, 255);
    flex: 1;
    padding: 2rem 1rem;
}

</style>