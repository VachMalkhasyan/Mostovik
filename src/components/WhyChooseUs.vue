<template>
  <div class="allSection">
    <div class="about-us2">
      <div class="text-section">
        <h1>Main Title</h1>
        <h2>Subtitle</h2>
        <h3>Additional Information</h3>
      </div>
      <div class="image-section"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs2',
}
</script>

<style scoped>
.allSection {
  background: #f2f2f2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.about-us2 {
  display: flex;
  width: 100%;
  height: 472px;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.text-section {
  flex: 1;
  background: rgba(220, 214, 214, 0.5); /* Semi-transparent background for readability */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  text-align: left;
  width: 51%;
}

.image-section {
  flex: 1;
  background-image: url('src/assets/Images/aboutpic.png'); /* Replace with your background image URL */
  background-size: cover;
  background-position: center;
  width: 48%;
  height: 472px;
  margin: 0;
  text-align: right;
}

</style>
