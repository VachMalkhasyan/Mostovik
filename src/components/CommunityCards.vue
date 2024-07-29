<template>
  <div class="community-cards">
    <h2>{{ heading }}</h2>
    <div class="cards-container">
      <div
          class="community-card"
          v-for="(community, index) in displayedCommunities"
          :key="index"
          :style="{ backgroundImage: `url(${getImageUrl(index)})` }"
      >
        <p>{{ community }}</p>
      </div>
    </div>
    <button class="show-more-button" @click="showMore" v-if="showMoreButton">
      {{ buttonLabel }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'CommunityCards',
  props: {
    heading: String,
    communities: Array
  },
  data() {
    return {
      showAll: false,
      initialDisplayCount: 5
    };
  },
  computed: {
    displayedCommunities() {
      return this.showAll
          ? this.communities
          : this.communities.slice(0, this.initialDisplayCount);
    },
    showMoreButton() {
      return this.communities.length > this.initialDisplayCount;
    },
    buttonLabel() {
      return this.showAll ? 'Փակել' : 'Տեսնել ավելին';
    }
  },
  methods: {
    showMore() {
      this.showAll = !this.showAll;
    },
    getImageUrl(index) {
      const images = [
        '../assets/Images/cardbackground1.jpg',
        '../assets/Images/cardbackground2.jpg',
        '../assets/Images/cardbackground3.jpg',
        '../assets/Images/cardbackground4.jpg',
        '../assets/Images/cardbackground5.jpg',

      ];
      return images[index % images.length]; // Cycle through images
    }
  }
};
</script>

<style>
.community-cards {
  margin: 20px 0;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.community-cards h2 {
  text-align: center;
  color: #333;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.community-card {
  flex: 1 1 calc(33.333% - 20px);
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  transition: transform 0.3s;
}

.community-card p {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
}

.community-card:hover {
  transform: translateY(-5px);
}

.show-more-button {
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

.show-more-button:hover {
  background-color: #8b551e;
}
</style>
