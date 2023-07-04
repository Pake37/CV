<script setup>
import { useCommonFieldsStore } from './../../stores/commonFields'
import { storeToRefs } from "pinia";
const store = useCommonFieldsStore();
const { dropDownEducation } = storeToRefs(store);
const { isDropDownEducation } = store;

const theme = {
    content: '{{ $t("education.economy.diploma") }}'
}
</script>

<template>
    <section class="education">
        <div class="section-name" style="position: relative;">
            <h2 class="text-dark" @click="isDropDownEducation">{{ $t("education.title") }}</h2>
            <div class="arrow" @click="isDropDownEducation">
                <div class="arrow-top" :class="{ arrowActiveTop: dropDownEducation }"></div>
                <div class="arrow-bottom" :class="{ arrowActiveBottom: dropDownEducation }"></div>
            </div>
        </div>
        <div class="horizontal-divider"></div>
        <main class="education-parts" v-if="dropDownEducation" :class="{ backgroundImg: dropDownEducation }">
            <div class="main-section">


                <div class="active-period">
                    <h3 class="active-period title text-dark">{{ $t("education.course_name") }} <span
                            class="level-course">{{ $t("education.course_level") }}</span></h3>
                    <div class="active-period period text-semi-dark">
                        <span>01.11.2021.</span>
                        <span>-</span>
                        <span>11.07.2022</span>
                    </div>

                </div>
                <div class="body-text text-semi-dark">{{ $t("education.my_project.api_name") }}</div>
                <p class="body-text text-semi-dark">{{ $t("education.my_project.api_text") }}</p>
                
                <a href="https://github.com/Pake37/Kursna-lista-srednji-kurs-NBS-po-datumima.git" target="_blank">
                    <button>
                        <p>{{ $t("education.my_project.api_project_1") }}</p>
                        <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                    </button>
                </a>
                <a href="https://github.com/Pake37/Kursna-lista-NBS-na-teku-i-dan.git" target="_blank">
                    <button>
                        <p>{{
                            $t("education.my_project.api_project_2") }}</p>
                        <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                    </button>
                </a>
            </div>
            <div class="main-section">
                <div class="active-period">
                    <h3 class="active-period title text-dark">{{ $t("education.internship.title") }}</h3>
                    <div class="active-period period text-semi-dark">
                        <span>09.2022</span>
                        <span>-</span>
                        <span>Present</span>
                    </div>
                </div>
                <div class="body-text text-semi-dark">{{ $t("education.internship.about") }}</div>
                <p class="body-text text-semi-dark">{{ $t("education.internship.text") }}</p>

                <a href="http://074w123.e2.mars-hosting.com/auth" target="_blank">
                    <button>
                        <p>{{ $t("education.internship.project_1") }}</p>
                        <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                    </button>
                </a>
                <a href="diploma-praksa.pdf" target="_blank">
                    <button>
                        <p>{{ $t("education.internship.certificate") }}</p>
                        <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                    </button>
                </a>
            </div>

            <div class="main-section">
                <div class="active-period">
                    <h3 class="active-period title text-dark">{{ $t("education.economy.faculty_name") }}</h3>
                    <div class="active-period period text-semi-dark">
                        <span>{{ $t("education.economy.major") }}</span>
                    </div>
                </div>

                <a href="diploma-ekonomski.pdf" target="_blank">
                    <button>
                        <p>{{ $t("education.economy.diploma") }}</p>
                        <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                    </button>
                </a>

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

    background: var(--background-education);
    background-image: url(./../../assets/image/education.webp);
    background-size: cover;

}

a {
    z-index: 1;
    width: fit-content;
    text-decoration: none;
}
</style>