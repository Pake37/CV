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
                <div class="icons">
                        <a href="https://en.wikipedia.org/wiki/CSS" target="_blank"><img src="./../assets/image/css3.svg"
                                        width="40px" height="40px" alt=""></a>
                        <a href="https://discord.com/" target="_blank"><img src="./../assets/image/discord.svg" width="40px"
                                        height="40px" alt=""></a>
                        <a href="https://github.com/" target="_blank"><img src="./../assets/image/github.svg" width="40px"
                                        height="40px" alt=""></a>
                        <a href="https://sr.wikipedia.org/wiki/HTML5" target="_blank"><img src="./../assets/image/html5.svg"
                                        width="40px" height="40px" alt=""></a>
                        <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank"><img src="./../assets/image/js.svg"
                                        width="40px" height="40px" alt=""></a>
                        <a href="https://marsengine.net" target="_blank"><img class="mars" src="./../assets/image/mars.svg"
                                        width="40px" height="40px" alt=""></a>
                        <a href="https://gitlab.com" target="_blank"><img src="./../assets/image/square-gitlab.svg" width="40px"
                                        height="40px" alt=""></a>
                        <a href="https://code.visualstudio.com/" target="_blank"><img src="./../assets/image/vsc.svg"
                                        width="40px" height="40px" alt=""></a>
                        <a href="https://www.mysql.com/products/workbench/" target="_blank"><img
                                        src="./../assets/image/workbench.svg" width="40px" height="40px" alt=""></a>
                        <a href="https://sass-lang.com/" target="_blank"><img src="./../assets/image/sass.svg"
                                        width="40px" height="40px" alt=""></a>
                        <a href="https://www.figma.com/" target="_blank"><img
                                        src="./../assets/image/figma.svg" width="40px" height="40px" alt=""></a>
                </div>
        </div>
</template>
<style scoped>
.right {

        background-color: var(--text-color-light);
        flex: 1;
        padding: 2rem 1rem;
}

.icons .mars {
        background: black;
        z-index: 2;
        width: 40px;
        height: 40px;
}

.icons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 2.7rem 2.7rem;
        gap: 2rem;
}

@media screen and (max-width:650px) {

        .right {
                width: 100%;

        }
}
</style>