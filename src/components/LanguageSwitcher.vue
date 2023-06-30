<script setup>
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router"
import { ref, watchEffect } from "vue"
import Tr from "@/i18n/translation"



const router = useRouter()
const { t, locale } = useI18n()
const supportedLocales = Tr.supportedLocales
const switchLanguage = async function (event) {// <--- 1
    const newLocale = event.target.value // <--- 2
    await Tr.switchLanguage(newLocale) // <--- 3
    try {
        await router.replace({ params: { locale: newLocale } })
    } catch (e) {
        console.log(e)
        router.push("/")
    }
}

const selectedLanguage = ref(false)


function compute() {
    selectedLanguage.value = !selectedLanguage.value

}
watchEffect(() => {
    const handleClickOutside = (event) => {
        if (!event.target.closest(".selectWrapper")) {
            selectedLanguage.value = false
        }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
        document.removeEventListener("click", handleClickOutside)
    }
})
</script>

<template>
    <div class="selectWrapper" :class="{ selectedMenu: selectedLanguage }" @click="compute">

        <select @change="switchLanguage">
            <option v-for="sLocale in supportedLocales" :key="`locale-${sLocale}`" :value="sLocale"
                :selected="locale === sLocale">
                {{ t(`locale.${sLocale}`) }}
            </option>
        </select>

    </div>
</template>
<style scoped>
@font-face {
    font-family: 'NotoColorEmojiLimited';
    unicode-range: U+1F1E6-1F1FF;
    src: url(https://raw.githack.com/googlefonts/noto-emoji/main/fonts/NotoColorEmoji.ttf);
}

option {
    font-family: 'NotoColorEmojiLimited', -apple-system, BlinkMacSystemFont;

}

select {
    font-family: 'NotoColorEmojiLimited', -apple-system, BlinkMacSystemFont;
    font-size: 1rem;
    font-weight: 500;
}

select {
    /* Reset Select */
    appearance: none;
    outline: 0;
    border: 0;
    box-shadow: none;
    /* Personalize */
    flex: 1;
    padding: 0 1em;
    color: #c2c5c8;
    background-color: #424954;
    background-image: none;
    cursor: pointer;
    color: white;
    transition: .25s all ease;


}

select:hover {
    color: #c2c5c8;
}

/* Remove IE arrow */
select::-ms-expand {
    display: none;

}

.selectWrapper {
    float: right;

}

/* Custom Select wrapper */
.selectWrapper {
    position: relative;
    display: flex;
    width: 8em;
    height: 2em;
    border-radius: .25em;
    overflow: hidden;
}

/* Arrow */
.selectWrapper::after {
    content: '\25BC';
    position: absolute;
    top: -1px;
    right: 0;
    padding: .5em;
    background-color: #424954;
    color: white;
    transition: .25s all ease;
    pointer-events: none;
    font-size: .8rem;
}

.selectedMenu::after {
    content: '\25B2';
}

/* Transition */
.selectWrapper:hover::after {
    color: #c2c5c8;
}
</style>