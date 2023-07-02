<script setup>

</script>
<template>
    <section class="intrests">
        <h3>{{ $t("left.interests.interests_title") }}</h3>
        <ul class="info-list">
            <li class="info-item info-title">{{ $t("left.interests.history") }}</li>
            <li class="info-item info-title">{{ $t("left.interests.sport") }}</li>
            <li class="info-item info-title">{{ $t("left.interests.technology") }}</li>
            <li class="info-item info-title">{{ $t("left.interests.film") }}</li>
            <li class="info-item info-title">{{ $t("left.interests.philosophy") }}</li>
        </ul>
    </section>
</template>
<style scoped>
ul {
    list-style-position: inside;
}

h3 {
    font-size: 1.1rem;
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
</style>