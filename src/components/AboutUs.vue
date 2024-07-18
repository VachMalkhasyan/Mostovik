<template>
  <header class="top">
    <div class="container">
      <p>1234-5678-9012</p>
      <p>support@Construct.com</p>
      <p>Mon-Sat 9:00-19:00</p>
      <div class="social">
        <a href="#" title="Facebook" class="icon facebook"></a>
        <a href="#" class="icon twitter"></a>
        <a href="#" class="icon behance"></a>
        <a href="#" class="icon basketball"></a>
        <a href="#" class="icon linkedin"></a>
        <a href="#"><img src="@/assets/logo.svg" alt="YouTube"></a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopHeader'
}
</script>

<style scoped>
/* Container styles */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
}

/* Typography styles */
p {
  margin: 0;
  font-size: 14px;
  color: #333;
}

/* Social media icons */
.social {
  display: flex;
  gap: 10px;
}

.social a {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
}

/* Individual icons */
.icon.facebook {
  background-image: url('@/assets/icons/facebook.svg');
}

.icon.twitter {
  background-image: url('@/assets/icons/twitter.svg');
}

.icon.linkedin {
  background-image: url('@/assets/icons/linkedin.svg');
}

/* Replace with the actual path to your SVG icons */
img {
  width: 24px;
  height: 24px;
}
</style>
