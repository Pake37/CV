<script setup>
import Interests from './PersonalDetails/Interests.vue';
import Languages from './PersonalDetails/Languages.vue';
import PersonalBasicInfo from './PersonalDetails/PersonalBasicInfo.vue';

</script>
<template>
    <div class="left">
        <div class="img-wrap">
            <div class="fake-picture"></div>
        </div>
        <div class="base-info">
            <PersonalBasicInfo />
            <Interests />
            <Languages />
        </div>
    </div>
</template>
<style scoped>
ul {
    list-style-position: inside;
}

h3 {
    font-size: 1.1rem;
}

.left {
    background-color: var(--primary-color);
    width: 30%;
    padding: 2rem 1rem;

}

.left .img-wrap {
    width: 21vmin;
    height: 21vmin;
    margin: auto;
    max-width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.left .img-wrap .fake-picture {
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background-color: var(--primary-color);
    border: 4px solid var(--bottom-border);
    background-image: url('./../assets/mojaslika.jpg');
    background-position: center;
    background-size: cover;
}

.left .base-info {
    padding-left: 2rem;
    color: var(--text-color-light);
}

.left .base-info h3 {
    width: 100%;
    border-bottom: 2px solid var(--text-color-light);
    font-size: 1.1rem;
    margin-bottom: 1rem;
}

.left .info-list {

    display: flex;
    flex-direction: column;
}

.left .personal-details .info-list {
    row-gap: 2rem;
}

.left .info-list .info-item {
    display: flex;
    flex-direction: column;
}

.left .info-title {
    font-weight: bold;
    font-size: 0.9rem;
}

.left .intrests .info-list,
.left .languages .info-list {
    row-gap: .5rem;
}

@media screen and (max-width:650px) {

    .left {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

}</style>