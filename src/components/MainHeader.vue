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
        <p>ՎՍՏԱՀԵՔ ՁԵՐ ԱՊԱԳԱՆ ՀՈՒՍԱԼԻ ԸՆԿԵՐՈՒԹՅԱՆ</p>
      </h1>
      <nav>
        <a  @click.prevent="scrollTo('aboutUs')">Գլխավոր</a>
        <a  @click.prevent="scrollTo('welcome')">Մեր մասին</a>
        <a  @click.prevent="scrollTo('ourServices')">Ծառայություններ</a>
        <a  @click.prevent="scrollTo('communityCards2020')">Մեր աշխատանքները</a>
        <a  @click.prevent="scrollTo('productionPage')">Արտադրություն</a>

        <i class="fa-solid fa-magnifying-glass" id="search"></i>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  methods: {
    scrollTo(sectionRef) {
      this.$emit('scrollTo', sectionRef);
    }
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
  color: #070000; /* Facebook blue color */
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

.headerInfo{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}
.headerInfo p{
  font-weight: bold;
  font-size: 15px;
  color: black;
}
.headerInfo div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px
}
.headerLinks{
  display: flex;
  align-items: end;
}
.search-icon {
  color: #fff;
  font-size: 1.2rem;
}

/* Responsive styles */
@media (max-width: 768px) {
  .menu-icon {
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
  }

  nav {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  input[type="checkbox"]:checked + nav {
    display: flex;
  }
}
</style>
