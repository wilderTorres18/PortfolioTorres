<template>
  <div id="find-me" class="findme-section q-my-lg">
    <div class="text-h4 text-weight-bold">Encuentrame</div>
    <div class="q-mt-lg q-mb-md">
      Siéntete libre de conectarte. Puedes encontrarme en las siguientes plataformas.
    </div>
    <div class="">
      <a :href="social.link" target="_blank" rel="noopener noreferrer" v-for="(social, index) in socials" :key="index"
        class="href-link">
        <q-chip square text-color="white" :icon="social.logo" clickable :style="{ backgroundColor: social.color }">
          {{ social.name }}
        </q-chip>
      </a>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { SOCIALS } from "../utils/constants";

export default defineComponent({
  name: "FindMe",

  setup() {
    return {
      socials: ref(SOCIALS),
    };
  },
});
</script>

<style lang="scss" scoped>
#find-me {
  font-family: 'Roboto', sans-serif;
}

.href-link {
  text-decoration: none;
}

@media only screen and (max-width: 575px) {
  //
}
</style>
