<template>
  <section id="sec-2">
    <div class="container">
        <div>
        <h1>Ինչու՞ ընտրել մեզ</h1>

        </div>
        <article>
        <figure>
          <div class="icon">
            <img src="../assets/ico1.png" alt="Quality Icon">
          </div>
          <div class="cont">
            <h2>Մենք ապահովում ենք որակ</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A iste ad illum, ducimus asperiores necessitatibus reprehenderit?</p>
          </div>
        </figure>
        <figure>
          <div class="icon">
            <img src="../assets/ico2.png" alt="On Time Icon">
          </div>
          <div class="cont">
            <h2>Միշտ ժամանակին</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A iste ad illum, ducimus asperiores necessitatibus reprehenderit?</p>
          </div>
        </figure>
        <figure>
          <div class="icon">
            <img src="../assets/ico3.png" alt="Passionate Icon">
          </div>
          <div class="cont">
            <h2>Գրագետ թիմ</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A iste ad illum, ducimus asperiores necessitatibus reprehenderit?</p>
          </div>
        </figure>
        <figure>
          <div class="icon">
            <img src="../assets/ico4.png" alt="Professional Services Icon">
          </div>
          <div class="cont">
            <h2>Պրոֆեսիոնալ ծառայություններ</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A iste ad illum, ducimus asperiores necessitatibus reprehenderit?</p>
          </div>
        </figure>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhyChooseUs'
}
</script>

<style scoped>
#sec-2 {
  padding: 40px 0;
  background-image: url('../assets/Images/bg4.jpg'); /* Replace with your background image URL */
  background-size: cover;
  background-position: center top;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 2.5em;
  color: #c79e23;
  margin-bottom: 20px;
}
.container h2{
  color: #c79e23;

}

.container  p {
  font-size: 1.1em;
  margin-bottom: 30px;
  line-height: 1.6;
  color: #ffffff;

}

article {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

figure {
  width: 22%;
  margin: 10px 0;
  padding: 95px 10px 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  border-radius: 10px;
  text-align: center;
  position: relative;
}

.icon {
  width: 10em;
  height: 10em;
  background-color: #f6b500;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: absolute;
  top: -1em; /* Adjust this value to place the circle image properly */
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.icon img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.cont {
  margin-top: 5em;
  z-index: 0;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

p {
  font-size: 0.9em;
  color: #666;
}
</style>
