<template>
  <section id="sec-1">
    <div class="container">
      <article>
        <h1>Բարի գալուստ <span style="color: #f6b500">MOSTO</span>VIK</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate deserunt magni sint mollitia similique corporis quis voluptatibus, eos tempora ealias illo nemo excepturi blanditiis vitae impedit minus tempore praesentium harum.
          <br><br>
          Quis, temporibus dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maxime minima quod eius aspernatur. Accusantium sed sunt corrupti sapiente deleniti?
        </p>
        <a href="#">Show More</a>
      </article>
      <aside>
        <img src="../assets/Images/aboutpic.png" alt="man">
      </aside>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WelcomeSection'
}
</script>

<style scoped>
#sec-1 {
  padding: 40px 0;
  background-color: #f0f0f0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

article {
  flex: 1;
  padding-right: 20px;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.8em;
  margin-bottom: 20px;
}

p {
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 20px;
}

a {
  color: var(--haccent2);
  background-color: var(--txtaccent4);
  display: inline-block;
  padding: 8px 15px;
  border: solid 1px var(--haccent2);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
}

a:hover {
  background-color: var(--haccent2);
  color: var(--txtaccent4);
}

aside {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

aside img {
  width: 100%;
  height: auto;
  max-width: 500px; /* Adjust as needed */
}
</style>
