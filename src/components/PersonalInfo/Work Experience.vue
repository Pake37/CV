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





.backgroundImg::after {

    background: var(--background-work-experience);
    opacity: 0.05;
    background-image: url(./../../assets/image/work.svg);
    background-size: cover;
    
}


</style>