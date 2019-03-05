<template>
  <main class="main">
    <header>
      <h1 v-resize-text>Is Nicolle Awake Now?</h1>
    </header>
    <p
      id="msg"
      v-text="msg"
      v-resize-text="{ ratio: 0.6, minFontSize: '60px', maxFontSize: '500px' }"
    />
  </main>
</template>

<script>
export default {
  name: "Main",
  computed: {
    msg() {
      const qs = new URL(document.location).searchParams;
      const hour = qs.get("hour") || qs.get("h") || new Date().getHours();
      // <= 4am
      if (hour <= 4) {
        return "No";
      }
      // <= 7am
      if (hour <= 7) {
        return "Probably";
      }
      // <= 3pm
      if (hour <= 15) {
        return "Yes";
      }
      // <= 5pm
      if (hour <= 17) {
        return "Yes, but probably in pajamas";
      }
      // <= 7pm
      if (hour <= 19) {
        return "Unlikely";
      }
      // >= 8pm
      return "Zzz...";
    }
  }
};
</script>

<style scoped>
main {
  /* per https://stackoverflow.com/questions/7908973/comic-sans-missing-from-ios-build */
  font-family: "Comic Sans", "Comic Sans MS", "Chalkboard", "ChalkboardSE-Regular", sans-serif;
}
header h1 {
  color: #c9f;
  margin: 0;
}
p#msg {
  margin: 0;
  text-align: center;
}
</style>
