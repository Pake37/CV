<script setup>

</script>
<template>
    <section class="personal-details">
        <h3>{{ $t("left.personal-details.pers_details_title") }}</h3>
        <ul class="info-list">
            <li class="info-item">
                <span class="info-title">{{ $t("left.personal-details.name_title") }}</span>
                <span class="text text-light">{{ $t("left.personal-details.name") }}</span>
            </li>
            <li class="info-item">
                <span class="info-title">{{ $t("left.personal-details.address_title") }}</span>
                <span class="text text-light">{{ $t("left.personal-details.address") }}</span>
            </li>
            <li class="info-item">
                <span class="info-title">{{ $t("left.personal-details.phone_title") }}</span>
                <span class="text text-light"><a href="tel:+381654261480" class="text text-light">065/426-14-80</a></span>
            </li>
            <li class="info-item">
                <span class="info-title">{{ $t("left.personal-details.email_title") }}</span>
                <span class="text text-light"><a href="mailto:stefanp898@gmail.com"
                        class="text text-light">stefanp898@gmail.com</a></span>
            </li>
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

.text {
    font-size: 0.8rem;
    word-wrap: break-word;
}

.text-light {
    color: var(--text-color-light);
}

.left .info-list {

    display: flex;
    flex-direction: column;
}

.left .personal-details .info-list {
    row-gap: 0.5rem;
}

.left .info-list .info-item {
    display: flex;
    flex-direction: column;
}

.left .info-title {
    font-weight: bold;
    font-size: 0.9rem;
}
.personal-details{
    margin-bottom: 1rem;
}
</style>