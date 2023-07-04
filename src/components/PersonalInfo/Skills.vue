<script setup>
import {useCommonFieldsStore} from './../../stores/commonFields'
import { storeToRefs } from "pinia";
const store = useCommonFieldsStore();
const { dropDownSkills } = storeToRefs(store);
const { isDropDownSkills } = store;
</script>

<template>
    <section class="skills">
        <div class="section-name" style="position: relative;">
            <h2 class="text-dark" @click="isDropDownSkills">{{$t("skills.title")}}</h2>
            <div class="arrow" @click="isDropDownSkills">
                <div class="arrow-top" :class="{ arrowActiveTop: dropDownSkills }"></div>
                <div class="arrow-bottom" :class="{ arrowActiveBottom: dropDownSkills }"></div>
            </div>
        </div>
        <div class="horizontal-divider"></div>
        <main class="education-parts" v-if="dropDownSkills" :class="{ backgroundImg: dropDownSkills }">
            <div class="main-section">
                <ul class="body-text text-semi-dark">
                    <li>{{$t("skills.ordered.sap")}}</li>
                    <li>{{$t("skills.ordered.word")}}</li>
                    <li>{{$t("skills.ordered.excel")}}</li>
                    <li>{{$t("skills.ordered.power_point")}}</li>
                    <li>{{$t("skills.ordered.figma")}}</li>
                    <li>{{$t("skills.ordered.vsc")}}</li>
                    <li>{{$t("skills.ordered.license")}}</li>
                    <li>{{$t("skills.ordered.workbench")}}</li>
                </ul>
            </div>
        </main>
    </section>
</template>
<style scoped>
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

section {
    margin-bottom: 1.5rem;
}
.main-section {
    display: flex;
    flex-direction: column;
    row-gap: .6rem;
    margin-bottom: 1rem;
}

.backgroundImg::after {
    background: var(--background-skills);
    background-image: url(./../../assets/image/skills.svg);
    background-size: contain;
}


</style>