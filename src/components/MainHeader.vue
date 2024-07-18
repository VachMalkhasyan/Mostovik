<template>
  <header>
    <div class="top-bar">
      <div class="container">
        <p>093111111</p>
        <p>support@mostovik.am</p>
        <p>Երկ-Ուրբաթ 9:00-18:00</p>
        <div class="social">
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
        <a href="#">Գլխավոր</a>
        <a href="#">Մեր մասին</a>
        <a href="#">ՄԵր գործերը</a>
        <a href="#">Կապ մեզ հետ</a>
        <i class="fa-solid fa-magnifying-glass" id="search"></i>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader'
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
  padding: 10px 0;
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

.top-bar .social {
  display: flex;
  gap: 10px;
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
