<template>
  <div>
    <p>
      <router-link :to="{ name: 'Helloworld' }"
        >Hello-World sayfasına gider</router-link
      ><br />
      <router-link :to="{ name: 'RegisterView' }"
        >RegisterView sayfasına gider</router-link
      ><br />
    </p>
  </div>
</template>

<script>
export default {
  name: "Index-View",
  data() {
    return { isim: "akif" };
  },
};
</script>
