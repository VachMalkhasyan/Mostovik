<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 MOSTOVIK. All rights reserved.</p>
      <p>Contact us at <a href="mailto:mostovikltd@gmail.com">mostovikltd@gmail.com</a></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  position: absolute;
  width: 100%;
}

.footer-content a {
  color: #fff;
  text-decoration: underline;
}

.footer-content a:hover {
  text-decoration: none;
}
</style>