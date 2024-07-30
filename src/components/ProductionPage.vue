<template>
  <div class="production-page">
    <h1 class="title">Արտադրություն</h1>
    <p>Շինարարական արդյունաբերության առաջատար "Մոստովիկ" ընկերությունը մասնագիտացած է բարձրորակ ասֆալտի և բետոնի արտադրության մեջ: Մեր առաջադեմ սարքավորումները և առաջադեմ արտադրական գործընթացները ապահովում են, որ մեր արտադրանքը համապատասխանի ամրության և կատարողականի ամենաբարձր չափանիշներին:</p>
    <div class="content">
      <div class="section">
        <img class="image" :src=asfaltnkar alt="Left Image">
        <p class="text"> "Մոստովիկ" ընկերությունում ասֆալտի արտադրության գործընթացը խնամքով մշակված է տարբեր կիրառությունների համար հարմար Ունիվերսալ և ամուր նյութ ստանալու համար: Մենք օգտագործում ենք լավագույն հումքն ու առաջադեմ տեխնոլոգիան ՝ ասֆալտ ստեղծելու համար, որը դիմացկուն է եղանակին, ծանր երթևեկությանը և մաշվածությանը: Մեր ասֆալտը իդեալական է ճանապարհաշինության, օդանավակայանի թռիչքուղիների և այլ ենթակառուցվածքային նախագծերի համար ՝ ապահովելով հարթ և ամուր ծածկույթ:</p>
      </div>
      <div class="section">
       <div class="text"> <p>Ոչ պակաս տպավորիչ է նաև մեր բետոնի արտադրությունը, որն օգտագործում է առաջադեմ տեխնոլոգիաներ ՝ ամուր և անխափան Շինանյութ ստեղծելու համար ։  Բետոն Կամուրջ հայտնի է իր ամրությամբ, ճկունությամբ և առաձգականությամբ։ Այն իդեալական է շենքերի, կամուրջների և այլ կառույցների կառուցման համար, որոնք պահանջում են ամուր հիմք: Մենք առաջարկում ենք բետոնե խառնուրդների լայն տեսականի, որոնք հարմարեցված են յուրաքանչյուր նախագծի հատուկ կարիքներին ՝ ապահովելով օպտիմալ կատարողականություն և ամրություն:</p></div>
        <img class="image" :src=betonnkar alt="Right Image">
      </div>
    </div>
  </div>
</template>

<script>
import asfaltnkar from '@/assets/asfaltnkar.jpeg';
import betonnkar from '@/assets/betonnkar.jpeg';
import cardbackground3 from '@/assets/cardbackground3.jpg';
import cardbackground4 from '@/assets/cardbackground4.jpg';
import cardbackground5 from '@/assets/cardbackground5.jpg';
export default {
  name: 'ProductionPage',
  data() {
    return {
      asfaltnkar,
      betonnkar,
      cardbackground3,
      cardbackground4,
      cardbackground5
    };
  },
}
</script>

<style scoped>
.production-page {
  text-align: center;
  background-image:url("../assets/Images/cardbackground3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.title {
  margin: 20px 0;
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
}
</style>
