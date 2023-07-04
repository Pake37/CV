<script setup>
import { useCommonFieldsStore } from './../../stores/commonFields'
import { storeToRefs } from "pinia";
const store = useCommonFieldsStore();
const { dropDownReferences } = storeToRefs(store);
const { isDropDownReferences } = store;
</script>

<template>
    <section class="references">
        <div class="section-name" style="position: relative;">
            <h2 class="text-dark" @click="isDropDownReferences">{{ $t("references.title") }}</h2>
            <div class="arrow" @click="isDropDownReferences">
                <div class="arrow-top" :class="{ arrowActiveTop: dropDownReferences }"></div>
                <div class="arrow-bottom" :class="{ arrowActiveBottom: dropDownReferences }"></div>
            </div>
        </div>
        <div class="horizontal-divider"></div>
        <main class="education-parts" v-if="dropDownReferences" :class="{ backgroundImg: dropDownReferences }">

            <div class="main-section">
                <div class="active-period">
                    <h3 class="active-period title text-dark">{{ $t("references.name.ablux") }}</h3>
                    <div class="active-period period text-semi-dark">
                        <span class="period">{{ $t("references.company.ablux") }}</span>
                    </div>
                </div>
                <a href="tel:+381642366102" class="body-text text-semi-dark phone">064/23-66-102</a>
                <a href="mailto:jovan.jovic@gmail.com" class="body-text text-semi-dark "
                    style="display: block;">marko@ablux.rs</a>
                <div class="active-period">
                    <h3 class="active-period title text-dark">{{ $t("references.name.probit") }}</h3>
                    <div class="active-period period text-semi-dark">
                        <span class="period">{{ $t("references.company.probit") }}</span>
                    </div>
                </div>
                <a href="tel:+381638805890" class="body-text text-semi-dark phone">063/88-05-890</a>
                <div class="active-period">
                    <h3 class="active-period title text-dark">{{ $t("references.name.galenika") }}</h3>
                    <div class="active-period period text-semi-dark">
                        <span class="period">{{ $t("references.company.galenika") }}</span>
                    </div>
                </div>
                <a href="tel:+381642216179" class="body-text text-semi-dark phone">064/22-16-179</a>
                <a href="preporuka.pdf" target="_blank" class="recomendation" style="display: block;">
                    <button>
                        <p>{{ $t("references.recommendation.galenika") }}</p>
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

.active-period {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

a {
    z-index: 1;
}

.active-period .period {
    display: flex;
    column-gap: .3rem;
    font-size: 0.85rem;
}

div .period {
    font-weight: bold;
    padding-right: .3rem;
}

div .phone {
    font-weight: bold;

}

.main-section {
    display: flex;
    flex-direction: column;
    row-gap: .6rem;
    margin-bottom: 1rem;
}

.backgroundImg::after {

    background: var(--background-references);
    background-image: url(./../../assets/image/preporuke.svg);
    background-size: contain;
}
.recomendation{
    text-decoration: none;
}
</style>