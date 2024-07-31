<template>
  <div class="production-page">
    <h1 class="title">Արտադրություն</h1>
    <p class="intro">Շինարարական արդյունաբերության առաջատար "Մոստովիկ" ընկերությունը մասնագիտացած է բարձրորակ ասֆալտի և բետոնի արտադրության մեջ: Մեր առաջադեմ սարքավորումները և առաջադեմ արտադրական գործընթացները ապահովում են, որ մեր արտադրանքը համապատասխանի ամրության և կատարողականի ամենաբարձր չափանիշներին:</p>
    <div class="content">
      <div class="section">
        <img class="image" :src="asfaltnkar" alt="Left Image">
        <p class="text">"Մոստովիկ" ընկերությունում ասֆալտի արտադրության գործընթացը խնամքով մշակված է տարբեր կիրառությունների համար հարմար Ունիվերսալ և ամուր նյութ ստանալու համար: Մենք օգտագործում ենք լավագույն հումքն ու առաջադեմ տեխնոլոգիան ՝ ասֆալտ ստեղծելու համար, որը դիմացկուն է եղանակին, ծանր երթևեկությանը և մաշվածությանը: Մեր ասֆալտը իդեալական է ճանապարհաշինության, օդանավակայանի թռիչքուղիների և այլ ենթակառուցվածքային նախագծերի համար ՝ ապահովելով հարթ և ամուր ծածկույթ:</p>
      </div>
      <div class="section">
        <p class="text">Ոչ պակաս տպավորիչ է նաև մեր բետոնի արտադրությունը, որն օգտագործում է առաջադեմ տեխնոլոգիաներ ՝ ամուր և անխափան Շինանյութ ստեղծելու համար ։  Բետոն Կամուրջ հայտնի է իր ամրությամբ, ճկունությամբ և առաձգականությամբ։ Այն իդեալական է շենքերի, կամուրջների և այլ կառույցների կառուցման համար, որոնք պահանջում են ամուր հիմք: Մենք առաջարկում ենք բետոնե խառնուրդների լայն տեսականի, որոնք հարմարեցված են յուրաքանչյուր նախագծի հատուկ կարիքներին ՝ ապահովելով օպտիմալ կատարողականություն և ամրություն:</p>
        <img class="image" :src="betonnkar" alt="Right Image">
      </div>
    </div>
  </div>
</template>

<script>
import asfaltnkar from '@/assets/asfaltnkar.jpeg';
import betonnkar from '@/assets/betonnkar.jpeg';

export default {
  name: 'ProductionPage',
  data() {
    return {
      asfaltnkar,
      betonnkar
    };
  },
}
</script>

<style scoped>
.production-page {
  text-align: center;
  background-image: url("../assets/Images/cardbackground3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
}

.title {
  margin: 20px 0;
  font-size: 2em;
}

.intro {
  font-size: 1.2em;
  margin-bottom: 40px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section {
  display: flex;
  justify-content: space-around;
  gap: 40px;
  align-items: center;
  margin: 20px 0;
}

.image {
  width: 40%;
  height: 500px;
  padding: 10px;
}

.text {
  width: 50%;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
  text-align: left;
}

/* Responsive styles */
@media (max-width: 768px) {
  .title {
    font-size: 1.5em;
  }

  .intro {
    font-size: 1em;
  }

  .section {
    flex-direction: column;
    gap: 20px;
  }

  .image {
    width: 100%;
    height: auto;
  }

  .text {
    width: 90%;
    font-size: 0.875em;
  }
}
</style>
