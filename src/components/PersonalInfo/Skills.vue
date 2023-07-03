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

.body-text {
    font-size: 0.95rem;
}



.text-dark {
    color: var(--text-color-dark);
    font-weight: bold;
}

.text-semi-dark {
    color: var(--text-color-semi-dark);
    line-height: 1.5rem;
}

.horizontal-divider {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--bottom-border);
}

.backgroundImg {
    position: relative;
}

.backgroundImg::after {
    content: '';
    position: absolute;
    inset: 0;
    background: var(background-skills);
    opacity: 0.05;
    background-image: url(./../../assets/image/skills.svg);
    background-size: contain;
    background-position: center;
    
    
}

.arrow {
    cursor: pointer;
    z-index: 100;
    height: 1.1rem;
    right: 3%;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    transition: transform 0.1s;
    width: 1.1rem;
}

.arrow-top,
.arrow-bottom {
    background-color: var(--arrow-color);
    height: 4px;
    left: -5px;
    position: absolute;
    top: 50%;
    width: 100%;
}

.arrow-top::after,
.arrow-bottom::after {
    content: "";
    
    inset: 0;
    height: 100%;
    position: absolute;

    transition: all 0.15s;
}

.arrow-top {
    transform: rotate(135deg);
    transform-origin: bottom right;
}

.arrow-top::after {
    left: 100%;
    right: 0;
    transition-delay: 0s;
}

.arrow-bottom {
    transform: rotate(45deg);
    transform-origin: top right;
    left: 0px;
    top: 73%;
}

.arrow-bottom::after {
    left: 0;
    right: 100%;
    transition-delay: 0.15s;
}

.arrow:hover .arrow-top::after {
    left: 0;

    transition-delay: 0.15s;
}



.arrow:hover .arrow-bottom::after {
    right: 0;
    transition-delay: 0s;
}

.arrow:active {
    transform: translateX(-50%) translateY(-50%) scale(0.9);
}
.arrowActiveTop{
    transform: rotate(-135deg);
    top: -11%;
    left: 4px;
}
.arrowActiveBottom{
    transform: rotate(-45deg);
    top: 12%;
    left: 3.5px;
    
}
.section-name:hover {
    cursor: pointer;
}

.section-name:hover .arrow-top::after {
    content: "";
    background: var(--arrow-color-hover);
    inset: 0;
    height: 100%;
    position: absolute;

    transition: all 0.15s;
}

.section-name:hover .arrow-bottom::after {
    content: "";
    background: var(--arrow-color-hover);
    inset: 0;
    height: 100%;
    position: absolute;

    transition: all 0.15s;
}
</style>