<template>
  <div class="about-us">
    <div class="background-image"></div>
    <div class="content">
      <h2>Մենք հավաստագրված ինժեներներ ենք</h2>
      <h1>ՇԻՆԱՐԱՐԱԿԱՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ <br>
       <span style="color: #f6b500">ԿՐԵԱՏԻՎ ԵՎ ՊՐՈՖԵՍԻՈՆԱԼ ԿԵՐՊՈՎ</span> </h1>
      <h3>Մեր ընկերությունը շուկայում է ավելի քան <span style="font-weight:bold"> 20</span>
          տարի</h3>
      <div class="buttons">
        <button @click="handleFirstButtonClick">ՏԵսնել գործերը</button>
        <button @click="handleSecondButtonClick">Կապ մեզ հետ</button>
      </div>
    </div>
  </div>
  <Welcome/>
  <WhyChooseUs></WhyChooseUs>
</template>

<script>
import WhyChooseUs from "@/components/WhyChooseUs.vue";
import Welcome from "@/components/Welcome.vue";
export default {
  name: 'AboutUs',
  components:{
    WhyChooseUs,
    Welcome
  },
  methods: {
    handleFirstButtonClick() {
      // Handle the first button click
      console.log('First button clicked');
    },
    handleSecondButtonClick() {
      // Handle the second button click
      console.log('Second button clicked');
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
  background-image: url('src/assets/Images/AboutUsBackground.jpg'); /* Replace with your background image URL */
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
</style>
