<template>
  <div id="projects" class="projects-section q-my-lg">
    <div class="page-header text-h4 text-weight-bold">Algunos proyectos</div>
    <ProjectHolder :projects="projects" />

    <q-btn unelevated rounded color="primary" class="q-mb-xl" href="https://github.com/wilderTorres18?tab=repositories"
      target="_blank" label="Ver todos los proyectos" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ProjectHolder from "./ProjectHolder.vue";
import { PROJECTS } from "../utils/constants";

export default defineComponent({
  name: "ProjectsSection",
  components: { ProjectHolder },
  setup() {
    return {
      projects: ref(PROJECTS),
    };
  },
});
</script>

<style lang="scss" scoped>
#projects {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

.page-header {
  padding-top: 48px;
  margin-bottom: 56px;
}

@media only screen and (max-width: 575px) {
  #projects {
    font-size: 16px;
  }

  .page-header {
    margin-bottom: 42px;
  }
}
</style>
