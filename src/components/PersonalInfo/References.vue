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
                <a href="preporuka.pdf" target="_blank" class="body-text text-semi-dark "
                    style="display: block;">{{ $t("references.recommendation.galenika") }}</a>
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
    background: var(--background-references);
    opacity: 0.04;
    background-image: url(./../../assets/image/preporuke.svg);
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