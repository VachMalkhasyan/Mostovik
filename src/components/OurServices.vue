<template>
  <section id="sec-3">
    <div class="container">
      <h1 style="color: #f6b500">Մեր ծառայությունները</h1>
      <div class="cont">
        <div class="card border-0" v-for="(service, index) in services" :key="index">
          <div>
            <img :src="service.imgSrc" class="card-img-top" :alt="service.altText">
            <h5 class="caption">{{ service.caption }}</h5>
          </div>
          <div class="card-body px-0 pt-4">
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import card1 from '@/assets/card1.jpg';
import card2 from '@/assets/card2.jpg';
import card3 from '@/assets/card3.jpg';

export default {
  name: 'OurServices',
  data() {
    return {
      services: [
        {
          imgSrc: card1,
          altText: 'Construction Management',
          caption: 'Շինարարության կառավարում',
          description: 'Ոլորտում 25 տարվա աշխատանքային փորձով "Մոստովիկ" շինարարական ընկերությունն իրեն հաստատել է որպես շինարարության կառավարման ոլորտի առաջատար: Մենք Գերազանց վերահսկում ենք նախագծերը սկզբից մինչև վերջ ՝ ապահովելով ժամանակին առաքում, բյուջեի համապատասխանություն և ամենաբարձր որակ: Մեր փորձագիտական թիմը համակարգում է կառուցման յուրաքանչյուր ասպեկտ ՝ օգտագործելով տասնամյակների ընթացքում կուտակված նոու-հաուն ՝ բարդ մարտահրավերներին դիմակայելու և հաջողության հասնելու համար:'
        },
        {
          imgSrc: card2,
          altText: 'Renovation',
          caption: 'Ռենովացիա',
          description: '"Մոստովիկի" վերակառուցման ծառայությունները նոր շունչ են հաղորդել գոյություն ունեցող շենքերին։ Քառորդդարյա փորձով մենք մասնագիտանում ենք տարածքների արդիականացման և արդիականացման մեջ ՝ ապահովելով դրանց համապատասխանությունը ժամանակակից չափանիշներին և պահպանելով դրանց յուրահատուկ բնույթը: Մեր բծախնդիր մոտեցումը երաշխավորում է արդյունքների բարձր որակ, որոնք կդիմանան ժամանակի փորձությանը:'
        },
        {
          imgSrc: card3,
          altText: 'Architecture',
          caption: 'Ճարտարապետություն',
          description: '"MOSTOVIK" - ի ճարտարապետական ծառայությունները համատեղում են նորարարական դիզայնը ֆունկցիոնալ կատարելության հետ: Մեր փորձառու ճարտարապետները յուրաքանչյուր նախագծում բերում են հարուստ փորձ ՝ ստեղծելով սենյակներ, որոնք ոչ միայն գեղագիտական հաճելի են, այլև առանձնանում են բարձր ֆունկցիոնալությամբ և էկոլոգիապես մաքուր: Սկզբնական հայեցակարգից մինչև մանրամասն կատարում, Մենք գաղափարները վերածում ենք ճարտարապետական գլուխգործոցների:'
        }
      ]
    }
  }
}
</script>

<style scoped>
#sec-3 {
  padding: 40px 0;
  background-image: url("../assets/Images/cardbackground1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  width: 30%;
  margin: 10px 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.card img {
  width: 100%;
  height: auto;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.caption {
  font-size: 1.25em;
  margin: 10px 0;
  text-align: center;
}

.card-body {
  padding: 20px;
}

.card-body p {
  font-size: 1em;
  line-height: 1.6;
}

.card-body a {
  display: inline-block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
}

.card-body a:hover {
  text-decoration: underline;
}

/* Responsive styles */
@media (max-width: 768px) {
  .cont {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 100%;
    max-width: 200px;
    height: 200px;
    margin: 10px 0;
  }

  .card img {
    height: 100px;
  }

  .caption {
    font-size: 0.75em;
  }

  .card-body {
    padding: 10px;
    visibility: hidden;
  }

  .card-body p {
    font-size: 0.625em;
  }
}
</style>
