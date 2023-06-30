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
            <h2 class="text-dark" @click="isDropDownWorkExperience">Work Experience</h2>
            <div class="arrow" @click="isDropDownWorkExperience">
                <div class="arrow-top" :class="{arrowActiveTop:dropDownWorkExperience}"></div>
                <div class="arrow-bottom" :class="{arrowActiveBottom:dropDownWorkExperience}"></div>
            </div>
        </div>
        <div class="horizontal-divider"></div>
        <main class="education-parts" v-if="dropDownWorkExperience" :class="{ backgroundImg: dropDownWorkExperience }">
            <div class="main-section">


                <div class="active-period">
                    <h3 class="active-period title text-dark">Course in Java Development <span class="level-course">(Basic
                            knowledge of Java)</span></h3>
                    <div class="active-period period text-semi-dark">
                        <span>01.11.2021.</span>
                        <span>-</span>
                        <span>11.07.2022</span>
                    </div>

                </div>
                <div class="body-text text-semi-dark">API for NBS(Nacional Bank of Serbia)</div>
                <p class="body-text text-semi-dark">When I finished learning Java, I made this API for exchange rate for
                    NBS,
                    and that was my first project in programming, after that I started learning Web Development.
                </p>
                <a href="https://github.com/Pake37/Kursna-lista-srednji-kurs-NBS-po-datumima.git">First part of API
                    Exchange
                    rate middle rate by dates</a>
                <a href="https://github.com/Pake37/Kursna-lista-NBS-na-teku-i-dan.git">Second part of API Exchange rate
                    on
                    current day</a>
            </div>
            <div class="main-section">
                <div class="active-period">
                    <h3 class="active-period title text-dark">Web Development</h3>
                    <div class="active-period period text-semi-dark">
                        <span>09.2022</span>
                        <span>-</span>
                        <span>Present</span>
                    </div>
                </div>
                <div class="body-text text-semi-dark">Internship at the "Enon Solutions" for 4 months</div>
                <p class="body-text text-semi-dark">I am learning Web Development predominatly on my own. This
                    internship is
                    where I learned a lot about Web Development with VUE framework
                    from mentors and from my colleague. We used Javascript, HTML5, CSS3, VUE 3, MySQL, Mars Engine. We
                    also
                    used
                    Git,GitLab and Discord. Also it was a great teamwork experience.</p>
                <a href="http://074w123.e2.mars-hosting.com/auth">First project at internship called Taskify - it is an
                    app
                    for
                    organization of team </a>
                <a href="https://110w123.mars2.mars-hosting.com/" style="display: block;">Second project at internship
                    called
                    Schedulize - it is an app for scheduling services</a>

            </div>

            <div class="main-section">
                <div class="active-period">
                    <h3 class="active-period title text-dark">University of Belgrade - B.Sc. of Economic Science</h3>
                    <div class="active-period period text-semi-dark">
                        <span>major: Marketing</span>
                    </div>
                </div>
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
    color: rgb(81, 88, 94);
    font-weight: bold;
}

.text-semi-dark {
    color: #2c3e50;
    line-height: 1.5rem;
}

.horizontal-divider {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #cfcfcf;
}

.backgroundImg {
    position: relative;
}

.backgroundImg::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgb(192, 243, 255);
    opacity: 0.07;
    background-image: url(./../../assets/image/education.webp);
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
    background-color: #51585e;
    height: 4px;
    left: -5px;
    position: absolute;
    top: 50%;
    width: 100%;
}

.arrow-top::after,
.arrow-bottom::after {
    content: "";
    background: #c2c5c8;
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
    background: #c2c5c8;
    inset: 0;
    height: 100%;
    position: absolute;

    transition: all 0.15s;
}

.section-name:hover .arrow-bottom::after {
    content: "";
    background: #c2c5c8;
    inset: 0;
    height: 100%;
    position: absolute;

    transition: all 0.15s;
}
</style>