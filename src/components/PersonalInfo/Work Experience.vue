<script setup>
import {useCommonFieldsStore} from './../../stores/commonFields'
import { storeToRefs } from "pinia";
const store = useCommonFieldsStore();
const { dropDownWorkExperience } = storeToRefs(store);
const { isDropDownWorkExperience } = store;
</script>

<template>
    <section class="work-experience">
        <div class="section-name" style="position: relative;">
            <h2 class="text-dark" @click="isDropDownWorkExperience">{{$t("work-experience.title")}}</h2>
            <div class="arrow" @click="isDropDownWorkExperience">
                <div class="arrow-top" :class="{arrowActiveTop:dropDownWorkExperience}"></div>
                <div class="arrow-bottom" :class="{arrowActiveBottom:dropDownWorkExperience}"></div>
            </div>
        </div>
        <div class="horizontal-divider"></div>
        <main class="education-parts" v-if="dropDownWorkExperience" :class="{ backgroundImg: dropDownWorkExperience }">
            <div class="main-section">


                <div class="active-period">
                    <h3 class="active-period title text-dark">{{$t("work-experience.ablux.company")}}</h3>
                    <div class="active-period period text-semi-dark"> 
                        <span>12.2021</span>
                        <span>-</span>
                        <span>07.2022</span>
                    </div>

                </div>
                <p class="body-text text-semi-dark">  {{$t("work-experience.ablux.text")}}
                </p>
            </div>
            <div class="main-section">
                <div class="active-period">
                    <h3 class="active-period title text-dark">{{$t("work-experience.probit.company")}}</h3>
                    <div class="active-period period text-semi-dark">
                        <span>03.08.2020</span>
                        <span>-</span>
                        <span>09.07.2021</span>
                    </div>
                </div>
                <p class="body-text text-semi-dark"> {{$t("work-experience.probit.text")}}</p>
            </div>
            <div class="main-section">
                <div class="active-period">
                    <h3 class="active-period title text-dark">{{$t("work-experience.galenika.company")}}</h3>
                    <div class="active-period period text-semi-dark">
                        <span>01.11.2018</span>
                        <span>-</span>
                        <span>01.11.2019</span>
                    </div>
                </div>
                <p class="body-text text-semi-dark">  {{$t("work-experience.galenika.text")}}</p>
            </div>
            <div class="main-section">
                <div class="active-period">
                    <h3 class="active-period title text-dark">{{$t("work-experience.kleffman.company")}}</h3>
                    <div class="active-period period text-semi-dark">
                        <span>17.05.2018</span>
                        <span>-</span>
                        <span>15.08.2018</span>
                    </div>
                </div>
                <p class="body-text text-semi-dark"> {{$t("work-experience.kleffman.text")}} </p>
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

.level-course {
    display: flex;
    justify-items: center;
    margin-left: 0.5rem;
    font-size: 0.8rem;
}

.active-period {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.active-period .period {
    display: flex;
    column-gap: .3rem;
    font-size: 0.85rem;
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
    background: var(--background-work-experience);
    opacity: 0.05;
    background-image: url(./../../assets/image/work.svg);
    background-size: cover;
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
.arrowActiveTop{
    transform: rotate(-135deg);
    top: -11%;
    left: 4px;
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
.arrowActiveBottom{
    transform: rotate(-45deg);
    top: 12%;
    left: 3.5px;
    
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