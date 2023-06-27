<script setup>
  import  {ref} from 'vue'
  const dropDown = ref(true)

</script>

<template>
  <div class="main-wrapper">
    <div class="wrap">
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
                <span class="text text-light"><a href="tel:+381654261480" class="text text-light">065/426-14-80</a></span>
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
                  <div class="col-full text text-light">Speaking - intermediate
                    Writting - intermediate</div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div class="right">
        <section class="about">
          <h1 class="text-dark">Stefan Pavlović</h1>
          <div class="horizontal-divider"></div>
          <p class="body-text text-semi-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages.</p>
        </section>
        <section class="education" :class="{backgroundImg: dropDown}" >
          <h2 class="text-dark">Education and Qualifications</h2>
          <div class="horizontal-divider"></div>
          <div class="main-section">
            <div class="active-period">
              <h3 class="active-period title text-dark">Course in Java Development <span class="level-course">(Basic
                  knowledge of Java)</span></h3>
              <div class="active-period period text-semi-dark">
                <span>01.11.2021.</span>
                <span>-</span>
                <span>11.07.2022</span>
              </div>
            </div>
            <div class="body-text text-semi-dark">API for NBS(Nacional Bank of Serbia)</div>
            <p class="body-text text-semi-dark">When I finished learning Java, I made this API for exchange rate for NBS,
              and that was my first project in programming, after that I started learning Web Development.
            </p>
            <a href="https://github.com/Pake37/Kursna-lista-srednji-kurs-NBS-po-datumima.git">First part of API Exchange
              rate middle rate by dates</a>
            <a href="https://github.com/Pake37/Kursna-lista-NBS-na-teku-i-dan.git">Second part of API Exchange rate on
              current day</a>
          </div>
          <div class="main-section">
            <div class="active-period">
              <h3 class="active-period title text-dark">Web Development</h3>
              <div class="active-period period text-semi-dark">
                <span>09.2022</span>
                <span>-</span>
                <span>Present</span>
              </div>
            </div>
            <div class="body-text text-semi-dark">Internship at the "Enon Solutions" for 4 months</div>
            <p class="body-text text-semi-dark">I am learning Web Development predominatly on my own. This internship is where I learned a lot about Web Development with VUE framework
              from mentors and from my colleague. We used Javascript, HTML5, CSS3, VUE 3, MySQL, Mars Engine. We also used
              Git,GitLab and Discord. Also it was a great teamwork experience.</p>
            <a href="http://074w123.e2.mars-hosting.com/auth">First project at internship called Taskify - it is an app for
              organization of team </a>
            <a href="https://110w123.mars2.mars-hosting.com/" style="display: block;">Second project at internship called
              Schedulize - it is an app for scheduling services</a>

          </div>

          <div class="main-section">
            <div class="active-period">
              <h3 class="active-period title text-dark">University of Belgrade - B.Sc. of Economic Science</h3>
              <div class="active-period period text-semi-dark">
                <span>major: Marketing</span>
              </div>
            </div>


          </div>
        </section>
        <section class="skills">
          <h2 class="text-dark">Skills</h2>
          <div class="horizontal-divider"></div>
          <ul class="body-text text-semi-dark">
            <li>Microsoft Office</li>
            <li>Google Analytics</li>
            <li>Google Adwords</li>
            <li>Google Optimise</li>
          </ul>
        </section>
        <section class="work-expirience">
          <h2 class="text-dark">Work Expirience</h2>
          <div class="horizontal-divider"></div>
          <div class="main-section">
            <div class="active-period">
              <h3 class="active-period title text-dark">Junior Software Developer</h3>
              <div class="active-period period text-semi-dark">
                <span>2015</span>
                <span>-</span>
                <span>present</span>
              </div>
            </div>
            <div class="body-text text-semi-dark">Explore the web</div>
            <p class="body-text text-semi-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere laborum
              minima quas quam odit sint pariatur nulla nostrum beatae enim fugiat cupiditate consequatur labore autsime!
            </p>
          </div>
          <div class="main-section">
            <div class="active-period">
              <h3 class="active-period title text-dark">Website analyst</h3>
              <div class="active-period period text-semi-dark">
                <span>2010</span>
                <span>-</span>
                <span>2013</span>
              </div>
            </div>
            <div class="body-text text-semi-dark">Quality</div>
            <ul class="body-text text-semi-dark">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
          <div class="main-section">
            <div class="active-period">
              <h3 class="active-period title text-dark">Online Marketing</h3>
              <div class="active-period period text-semi-dark">
                <span>2007</span>
                <span>-</span>
                <span>2010</span>
              </div>
            </div>
            <div class="body-text text-semi-dark">Adversity</div>
            <ul class="body-text text-semi-dark">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
        </section>

        <section class="references">
          <h2 class="text-dark">References</h2>
          <div class="horizontal-divider"></div>
          <div class="main-section">
            <div class="active-period">
              <h3 class="active-period title text-dark">Pera Peric</h3>
              <div class="active-period period text-semi-dark">
                <span>CPE Group</span>
              </div>
            </div>
            <div class="body-text text-semi-dark">+381 65 4512 45</div>
            <div class="body-text text-semi-dark">pera.peric@gmail.com</div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<style scoped>
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: rgb(64, 84, 113);
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
}

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

.text {
  font-size: 0.8rem;
  word-wrap: break-word;
}

.body-text {
  font-size: 0.95rem;
}

.text-light {
  color: rgb(249, 246, 246);
}

.text-dark {
  color: rgb(81, 88, 94);
  font-weight: bold;
}

.text-semi-dark {
  color: #2c3e50;
  line-height: 1.5rem;
}

.horizontal-divider {
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #cfcfcf;
}

section {
  margin-bottom: 1.5rem;
}

.wrap {
  min-height: 100vh;
  width: 850px;
  max-width: 100%;
  background-color: white;
  display: flex;
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

.right {
  background-color: rgb(255, 255, 255);
  flex: 1;
  padding: 2rem 1rem;
}

.level-course {
  display: flex;
  justify-items: center;
  margin-left: 0.5rem;
  font-size: 0.8rem;
}

.active-period {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.active-period .period {
  display: flex;
  column-gap: .3rem;
  font-size: 0.85rem;
}

.main-section {
  display: flex;
  flex-direction: column;
  row-gap: .6rem;
  margin-bottom: 1rem;
}
.backgroundImg{
  position: relative;
  
  
}
.backgroundImg::after{
  content: '';
  position: absolute;
  inset: 0;
  background: rgb(192, 243, 255);
  opacity: 0.07;
  background-image: url(./../assets/image/education.webp);
  background-size: cover;
  background-position: center;
}
.main-wrapper {
  display: flex;
  justify-content: center;
}
</style>