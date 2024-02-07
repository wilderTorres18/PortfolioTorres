<template>
  <div id="contact-us">
    <div class="contact-us q-py-xl">
      <div class="page-header text-h3 text-weight-bold q-mt-lg">
        Trabajemos juntos
      </div>
      <div class="page-info q-my-lg">
        ¿Tiene una aplicación web o un sitio web sencillo que necesita ¿Se
        construirá para ti? ¿O simplemente quieres conversar sobre mis
        servicios? Suéltame Envíe un mensaje a continuación y me comunicaré con
        usted de inmediato.
      </div>

      <ContactUsForm />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ContactUsForm from "../components/ContactUsForm.vue";

export default defineComponent({
  name: "ContactUs",

  components: { ContactUsForm },
});
</script>

<style lang="scss" scoped>
#contact-us {
  font-family: "Avenir";
  padding-bottom: 64px;
}

.contact-us {
  width: 100%;
  max-width: 635px;
  margin: 0 auto;
}

.page-header {
  font-size: 3rem;
}

@media only screen and (max-width: 575px) {
  #contact-us {
    padding-bottom: 0;
  }

  .page-header,
  .page-info {
    padding-left: 16px;
    padding-right: 16px;
  }

  .page-header {
    font-size: 2rem;
  }

  .contact-us {
    margin-bottom: 0;
    padding-bottom: 0;
  }
}
</style>
