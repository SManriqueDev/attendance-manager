<template>
  <title-bar :title-stack="titleStack" />
  <hero-bar>Panel de Control</hero-bar>
  <main-section>
    <div class="flex flex-row mb-6">
      <!-- Presente -->
      <div class="bg-green-500 text-white rounded-xl px-3 py-1 mr-3">
        Presente
      </div>
      <!-- Ausente -->
      <div class="bg-red-500 text-white rounded-xl px-3 py-1">
        Ausente
      </div>
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mb-6">
      <div class="flex flex-col mr-3 px-3 py-3">
        <title-sub-bar
          :icon="mdiAccountMultiple"
          title="Registros"
        />
        <div class="flex flex-col justify-between overflow-auto h-96">
          <card-client-bar
            v-for="client in employeesBarItems"
            :key="client.id"
            :name="client.name"
            :login="client.login"
            :date="client.created"
            :progress="client.progress"
          />
        </div>
      </div>
      <div class="flex flex-col justify-between">
        <title-sub-bar
          :icon="mdiAccountMultiple"
          title="Empleados"
        />

        <card-component
          :icon="mdiMonitorCellphone"
          has-table
        >
          <employees-table />
        </card-component>
      </div>
    </div>
  </main-section>
</template>

<script>
// @ is an alias to /src
import { computed, ref } from "vue";
import { useStore } from "vuex";
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiFinance,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie,
} from "@mdi/js";
import MainSection from "@/components/TComponents/MainSection";
import TitleBar from "@/components/TComponents/TitleBar";
import HeroBar from "@/components/TComponents/HeroBar";
import CardComponent from "@/components/TComponents/CardComponent";
import EmployeesTable from "@/components/EmployeesTable";
import CardClientBar from "@/components/TComponents/CardClientBar";
import TitleSubBar from "@/components/TComponents/TitleSubBar";

export default {
  name: "Home",
  components: {
    TitleSubBar,
    MainSection,
    EmployeesTable,
    CardComponent,
    HeroBar,
    TitleBar,
    CardClientBar,
  },
  setup() {
    const store = useStore();
    const titleStack = ref(["Admin", "Dashboard"]);
    const employeesBarItems = computed(() => store.state.clients.slice(0, 5));
    const darkMode = computed(() => store.state.darkMode);

    return {
      titleStack,
      employeesBarItems,
      darkMode,

      // Icons
      mdiAccountMultiple,
      mdiCartOutline,
      mdiChartTimelineVariant,
      mdiFinance,
      mdiMonitorCellphone,
      mdiReload,
      mdiGithub,
      mdiChartPie,
    };
  },
};
</script>
