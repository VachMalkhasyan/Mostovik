<template>
  <div class="about-us">
    <div class="background-image"></div>
    <div class="content">
      <h2>Մենք հավաստագրված ինժեներներ ենք</h2>
      <h1>ՇԻՆԱՐԱՐԱԿԱՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ <br>
        <span style="color: #f6b500">ԿԱՄՐՋԱՇԻՆՈՒԹՅԱՆ և ՃԱՆԱՊԱՐՀԱՇԻՆՈՒԹՅԱՆ <br> ՈԼՈՐՏԻ ԱՇԽԱՏԱՆՔՆԵՐՈՒՄ</span>
      </h1>
      <h3>Մեր ընկերությունը շուկայում է ավելի քան <span style="font-weight:bold"> 25</span> տարի</h3>
      <div class="buttons">
        <button @click="showCommunityCards" @click.prevent="scrollTo('communityCards2020')">ՏԵՍնել գործերը</button>
        <button @click="showContactSection">Կապ մեզ հետ</button>
      </div>
    </div>

    <!-- Modal for contact section -->
    <div v-if="showContactSectionVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <button class="close-button" @click="closeModal">&times;</button>
        <h2>Կապ մեզ հետ</h2>
        <p>Հեռախոսահամար: +37499220675</p>
        <p>Էլ. հասցե:  mostovikltd@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutUs',
  data() {
    return {
      showContactSectionVisible: false
    };
  },
  methods: {
    showCommunityCards() {
      this.showContactSectionVisible = false;
    },
    showContactSection() {
      this.showContactSectionVisible = true;
    },
    closeModal() {
      this.showContactSectionVisible = false;
    },
      scrollTo(sectionRef) {
        this.$emit('scrollTo', sectionRef);
    }
  }
}
</script>

<style scoped>
.about-us {
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/Images/AboutUsBackground.jpg');
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.content {
  position: relative;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}

.buttons {
  margin-top: 20px;
}

button {
  color: #c79e23;
  background-color: #000;
  display: inline-block;
  padding: 8px 15px;
  margin-left: 5px;
  border: solid 1px #c79e23;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #c79e23;
  color: #000;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: #c79e23;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 500px;
  width: 90%;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
  color: black;
}
</style>
