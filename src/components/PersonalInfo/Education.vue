<script setup>
import { useCommonFieldsStore } from './../../stores/commonFields'
import { storeToRefs } from "pinia";
const store = useCommonFieldsStore();
const { dropDownEducation } = storeToRefs(store);
const { isDropDownEducation } = store;
</script>

<template>
    <section class="education">
        <div class="section-name" style="position: relative;">
            <h2 class="text-dark" @click="isDropDownEducation">{{$t("education.title")}}</h2>
            <div class="arrow" @click="isDropDownEducation">
                <div class="arrow-top" :class="{ arrowActiveTop: dropDownEducation }"></div>
                <div class="arrow-bottom" :class="{ arrowActiveBottom: dropDownEducation }"></div>
            </div>
        </div>
        <div class="horizontal-divider"></div>
        <main class="education-parts" v-if="dropDownEducation" :class="{ backgroundImg: dropDownEducation }">
            <div class="main-section">


                <div class="active-period">
                    <h3 class="active-period title text-dark">{{$t("education.course_name")}} <span class="level-course">{{$t("education.course_level")}}</span></h3>
                    <div class="active-period period text-semi-dark">
                        <span>01.11.2021.</span>
                        <span>-</span>
                        <span>11.07.2022</span>
                    </div>

                </div>
                <div class="body-text text-semi-dark">{{$t("education.my_project.api_name")}}</div>
                <p class="body-text text-semi-dark">{{$t("education.my_project.api_text")}}</p>
                <a href="https://github.com/Pake37/Kursna-lista-srednji-kurs-NBS-po-datumima.git">{{$t("education.my_project.api_project_1")}}</a>
                <a href="https://github.com/Pake37/Kursna-lista-NBS-na-teku-i-dan.git">{{$t("education.my_project.api_project_2")}}</a>
            </div>
            <div class="main-section">
                <div class="active-period">
                    <h3 class="active-period title text-dark">{{$t("education.internship.title")}}</h3>
                    <div class="active-period period text-semi-dark">
                        <span>09.2022</span>
                        <span>-</span>
                        <span>Present</span>
                    </div>
                </div>
                <div class="body-text text-semi-dark">{{$t("education.internship.about")}}</div>
                <p class="body-text text-semi-dark">{{$t("education.internship.text")}}</p>
                <a href="http://074w123.e2.mars-hosting.com/auth">{{$t("education.internship.project_1")}}</a>
                <a href="https://110w123.mars2.mars-hosting.com/" style="display: block;">{{$t("education.internship.project_2")}}</a>
                <a href="./../../../public/Diploma praksa.pdf" target="_blank">{{$t("education.internship.certificate")}}</a>
            </div>

            <div class="main-section">
                <div class="active-period">
                    <h3 class="active-period title text-dark">{{$t("education.economy.faculty_name")}}</h3>
                    <div class="active-period period text-semi-dark">
                        <span>{{$t("education.economy.major")}}</span>
                    </div>
                </div>
                <a href="./../../../public/Diploma Ekonomski Fakultet.pdf" target="_blank">{{$t("education.economy.diploma")}}</a>

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

    background: var(--background-education);
    opacity: 0.07;
    background-image: url(./../../assets/image/education.webp);
    background-size: cover;
    background-position: center;
}

.arrow {
    cursor: pointer;

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

.arrowActiveBottom .arrow-top::after,
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

.arrowActiveTop {
    transform: rotate(-135deg);
    top: -11%;
    left: 4px;
}

.arrowActiveBottom {
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

a {
    z-index: 1;
}
</style>