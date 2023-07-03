<script setup>

</script>
<template>
    <section class="languages">
        <h3>{{ $t("left.languages.languages_title") }}</h3>
        <ul class="info-list">
            <li class="info-item">
                <div class="row full-width">
                    <div class="col-full info-title">{{ $t("left.languages.language_sr") }}</div>
                    <div class="col-full lang-type-move-nat" >{{ $t("left.languages.language_lvl") }}</div>
                </div>
            </li>
            <li class="info-item">
                <div class="row full-width">
                    <div class="col-full info-title">{{ $t("left.languages.language_en") }}</div>
                    <div class="col-full text text-light"><span
                            class="col-full text text-light lang-type-move" >{{ $t("left.languages.language_sp_lvl") }}</span>
                        <span class="col-full text text-light lang-type-move"
                            style="display: block;">{{ $t("left.languages.language_wr_lvl") }}</span>
                    </div>
                </div>
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

.row {
    display: flex;
    flex-wrap: wrap;
}

.row .full-width {
    display: 100%;
}

.col-full {
    flex: 1;
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
.lang-type-move{
    margin-left: -1rem;
}
.lang-type-move-nat{
    margin-left: -2rem;
}
</style>