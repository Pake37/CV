<script setup>
</script>
<template>
    <div class="left">

        <div class="img-wrap">
            <div class="fake-picture"></div>
        </div>
        <div class="base-info">
            <section class="personal-details">
                <h3>Personal details</h3>
                <ul class="info-list">
                    <li class="info-item">
                        <span class="info-title">Name</span>
                        <span class="text text-light">Stefan Pavlović</span>
                    </li>
                    <li class="info-item">
                        <span class="info-title">Address</span>
                        <span class="text text-light">Narodnih heroja 58/2, 11070 New Belgrade</span>
                    </li>
                    <li class="info-item">
                        <span class="info-title">Phone number</span>
                        <span class="text text-light"><a href="tel:+381654261480"
                                class="text text-light">065/426-14-80</a></span>
                    </li>
                    <li class="info-item">
                        <span class="info-title">Email address</span>
                        <span class="text text-light"><a href="mailito:stefanp898@gmail.com"
                                class="text text-light">stefanp898@gmail.com</a></span>
                    </li>
                </ul>
            </section>
            <section class="intrests">
                <h3>Interests</h3>
                <ul class="info-list">
                    <li class="info-item info-title">History</li>
                    <li class="info-item info-title">Sport</li>
                    <li class="info-item info-title">Technology</li>
                    <li class="info-item info-title">Film</li>
                    <li class="info-item info-title">Philosophy</li>

                </ul>
            </section>
            <section class="languages">
                <h3>Languages</h3>
                <ul class="info-list">
                    <li class="info-item">
                        <div class="row full-width">
                            <div class="col-full info-title">Serbian</div>
                            <div class="col-full">Native</div>
                        </div>
                    </li>
                    <li class="info-item">
                        <div class="row full-width">
                            <div class="col-full info-title">English</div>
                            <div class="col-full text text-light"><span class="col-full text text-light">Speaking -
                                    intermediate</span>
                                <span class="col-full text text-light" style="display: block;">Writting -
                                    intermediate</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
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

.text {
    font-size: 0.8rem;
    word-wrap: break-word;
}

.text-light {
    color: rgb(249, 246, 246);
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


.left {
    background-color: rgb(66, 73, 84);
    width: 30%;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.left .img-wrap {
    width: 18vmin;
    height: 18vmin;
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
    background-color: red;
    border: 4px solid rgb(194, 197, 200);
    background-image: url('./../assets/mojaslika.jpg');
    background-position: center;
    background-size: cover;
}

.left .base-info {
    padding-left: 2rem;
    color: rgb(249, 246, 246);
}

.left .base-info h3 {
    width: 100%;
    border-bottom: 2px solid rgb(249, 246, 246);
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