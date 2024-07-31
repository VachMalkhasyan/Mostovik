
<template>
  <header>
    <div class="top-bar">
      <div class="container">
        <div class="headerInfo">
          <div>
            <i class="material-icons">call</i><p>+37499220675</p>
          </div>
          <div>
            <i class="material-icons">email</i><p>mostovikltd@gmail.com</p>
          </div>
          <div>
            <i class="material-icons">work</i> <p>Երկ-Ուրբաթ 9:00-18:00</p>
          </div>
        </div>

        <div class="social">
          <div class="headerLinks">
            <a href="https://www.facebook.com/profile.php?id=100034597899041&locale=ru_RU" target="_blank" rel="noopener noreferrer">
              <i class="material-icons">facebook</i>
            </a>
          </div>
          <a href="#" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-behance"></i></a>
          <a href="#"><i class="fa-solid fa-basketball"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>
    </div>
    <div class="container main-header">
      <h1>
        <span>MOSTO</span>VIK
        <p>{{ displayedSentence }}</p>
      </h1>
      <input type="checkbox" id="menu-toggle" class="menu-toggle">
      <label for="menu-toggle" class="menu-icon"><i class="fa-solid fa-bars"></i></label>
      <nav>
        <a @click.prevent="scrollTo('aboutUs')">Գլխավոր</a>
        <a @click.prevent="scrollTo('welcome')">Մեր մասին</a>
        <a @click.prevent="scrollTo('ourServices')">Ծառայություններ</a>
        <a @click.prevent="scrollTo('communityCards2020')">Մեր աշխատանքները</a>
        <a @click.prevent="scrollTo('productionPage')">Արտադրություն</a>
        <i class="fa-solid fa-magnifying-glass" id="search"></i>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  data() {
    return {
      sentences: [
        "ՎՍՏԱՀԵՔ ՁԵՐ ԱՊԱԳԱՆ ՀՈՒՍԱԼԻ ԸՆԿԵՐՈՒԹՅԱՆ",
        "Մենք այսօր կառուցում ենք ապագան",
        "Գերազանցություն յուրաքանչյուր շինարարական նախագծում",
        "Նորարարական լուծումներ ՝ ամուր կառույցներ ստեղծելու համար",
        "Վստահեք մեզ շինարարության բարձր որակը",
        "Ձեր տեսլականը, մեր որակյալ կատարումը",
        "Որակյալ շինարարություն, երաշխավորված բավարարվածություն",
        "Անվտանգությունն ու կայունությունը միշտ եղել են առաջին տեղում",
        "Մասնագիտական վարպետություն, անթերի արդյունքներ",
        "Հաճախորդների բավարարվածությունը մեր առաքելությունն է",
        "ՎՍՏԱՀԵՔ ՁԵՐ ԱՊԱԳԱՆ ՀՈՒՍԱԼԻ ԸՆԿԵՐՈՒԹՅԱՆ"
      ],
      displayedSentence: '',
      sentenceIndex: 0,
      letterIndex: 0,
    };
  },
  mounted() {
    this.displayLetters();
  },
  methods: {
    scrollTo(sectionRef) {
      this.$emit('scrollTo', sectionRef);
    },
    displayLetters() {
      if (this.letterIndex < this.sentences[this.sentenceIndex].length) {
        this.displayedSentence += this.sentences[this.sentenceIndex][this.letterIndex];
        this.letterIndex++;
        setTimeout(this.displayLetters, 100); // Adjust the interval speed as needed
      } else {
        this.letterIndex = 0;
        this.sentenceIndex++;
        if (this.sentenceIndex < this.sentences.length) {
          setTimeout(() => {
            this.displayedSentence = '';
            this.displayLetters();
          }, 1000); // Pause before displaying the next sentence
        } else {
          this.sentenceIndex = 0; // Reset to the first sentence if needed
          setTimeout(() => {
            this.displayedSentence = '';
            this.displayLetters();
          }, 1000);
        }
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
}
</script>

<style scoped>
/* Container styles */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
}

.top-bar {
  background-color: #f6b500;
}

.top-bar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-bar p {
  margin: 0;
  color: #fff;
  font-size: 14px;
}

.material-icons {
  font-size: 24px;
  color: #070000;
  text-decoration: none;
}

.top-bar .social {
  display: flex;
  gap: 10px;
}

a {
  text-decoration: none;
}

.top-bar .social a {
  color: #fff;
  font-size: 16px;
}

.main-header {
  background-color: #2c3e50;
  padding: 20px 0;
  color: #fff;
}

.main-header h1 {
  font-size: 2.5rem;
  margin: 5px;
}

.main-header h1 span {
  color: #f6b500;
}

.main-header h1 p {
  font-size: 1rem;
  color: #fff;
  margin-top: 5px;
}

.menu-icon {
  display: none;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
}

nav a:hover {
  color: #f6b500;
}

.headerInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.headerInfo p {
  font-weight: bold;
  font-size: 15px;
  color: black;
}

.headerInfo div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
}

.headerLinks {
  display: flex;
  align-items: end;
}

.search-icon {
  color: #fff;
  font-size: 1.2rem;
}

.menu-toggle {
  display: none;
}

.menu-icon {
  display: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
}

nav {
  display: flex;
  gap: 20px;
}

/* Responsive styles */
@media (max-width: 768px) {
  .menu-icon {
    display: block;
  }
  .headerInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
  }

  .headerInfo p {
    font-weight: bold;
    font-size: 10px;
    color: black;
  }

  .headerInfo div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
  }

  nav {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  input[type="checkbox"]:checked ~ nav {
    display: flex;
  }

  .main-header {
    flex-direction: column;
    align-items: center;
  }
}
</style>
