<template>
  <div id="expertise" class="expertise-section q-pt-md q-my-lg">
    <div class="text-h4 text-weight-bold">Habilidades y experiencia</div>
    <div v-for="(category, index) in skills" :key="index">
      <div class="text-h6 subtitle q-mt-lg q-ml-md">
        {{ category.category }}
      </div>
      <div class="section">
        <div class="content">
          <div class="skill-card" v-for="(skill, indx) in category.skills" :key="indx">
            <img :src="getImgUrl('assets/se_icons/', skill.icon)" :alt="skill.language + ' image'" class="card-icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { SKILLS } from "../utils/constants";
import { getImgUrl } from "../utils/helpers";

export default defineComponent({
  name: "ExpertiseSection",

  setup() {
    return {
      skills: ref(SKILLS),
    };
  },

  methods: {
    getImgUrl,
  },
});
</script>

<style lang="scss" scoped>
#expertise {
  font-family: "Roboto", sans-serif;
}

.section {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; // Asegura que las cartas se distribuyan uniformemente
  color: #333; // Color de texto oscuro para contraste
}

.content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center; // Centra las cartas en el contenedor
}

.skill-card {
  width: 16.66%;
  max-width: 16.66%;
  margin: 10px; // Añade un pequeño espacio alrededor de cada carta
  padding: 20px; // Espacio interno para contenido de la carta
  background-color: #fff; // Fondo claro para la carta
  border-radius: 10px; // Bordes redondeados
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Sombra suave para profundidad
  transition: transform 0.3s ease, box-shadow 0.3s ease; // Transición suave para hover

  &:hover {
    transform: translateY(-5px); // Eleva la carta ligeramente al pasar el mouse
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); // Sombra más pronunciada en hover
  }
}

.card-icon {
  padding: 1px; // Espacio alrededor del icono para respiración
  height: auto; // Mantiene la proporción del icono
  width: 100%; // Asegura que el icono ocupe todo el ancho disponible
  max-width: 80px; // Limita el tamaño del icono para consistencia
  margin: 0 auto; // Centra el icono horizontalmente en la carta
}

.subtitle {
  color: #6c757d; // Color para el subtítulo
  margin-top: 12px; // Espacio antes del subtítulo
  text-align: center; // Alinea el texto al centro
}

@media only screen and (max-width: 575px) {
  .skill-card {
    width: 33.33%;
    max-width: 33.33%;
    padding: 0;
  }
}
</style>
