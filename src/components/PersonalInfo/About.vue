<script setup>

</script>

<template>
    <section class="about">
        <h1 class="text-dark">{{$t("about.name")}}</h1>
        <div class="horizontal-divider"></div>
        <p class="body-text text-semi-dark">{{$t("about.text[0]")}}</p>
        <p class="body-text text-semi-dark">{{$t("about.text[1]")}}</p>
    </section>
</template>
<style scoped>
section {
    margin-bottom: 1.5rem;
}

.text-dark {
    color: var(--text-color-dark);
    font-weight: bold;
}

.horizontal-divider {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--bottom-border);
}

.body-text {
    font-size: 0.95rem;
}

.text-semi-dark {
    color: var(--text-color-semi-dark);
    line-height: 1.5rem;
}
</style>