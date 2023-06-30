<script setup>

</script>

<template>
    <section class="about">
        <h1 class="text-dark">Stefan Pavlović</h1>
        <div class="horizontal-divider"></div>
        <button @click="isDropDown">sdalfsačlfs</button>
        <p class="body-text text-semi-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages.</p>
    </section>
</template>
<style scoped>
section {
    margin-bottom: 1.5rem;
}

.text-dark {
    color: rgb(81, 88, 94);
    font-weight: bold;
}

.horizontal-divider {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #cfcfcf;
}

.body-text {
    font-size: 0.95rem;
}

.text-semi-dark {
    color: #2c3e50;
    line-height: 1.5rem;
}</style>