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
      <div class="bg-red-500 text-white rounded-xl px-3 py-1">Ausente</div>
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mb-6">
      <div class="flex flex-col mr-3 px-3 py-3">
        <title-sub-bar :icon="mdiAccountMultiple" title="Registros" />
        <div class="flex flex-col justify-start overflow-auto h-96">
          <card-log-bar v-for="log in logsBarItems" :key="log.id" :log="log" />
        </div>
      </div>
      <div class="flex flex-col justify-start">
        <title-sub-bar :icon="mdiAccountMultiple" title="Empleados" />

        <card-component :icon="mdiMonitorCellphone" has-table>
          <employees-table />
        </card-component>
      </div>
    </div>
  </main-section>
</template>

<script>
// @ is an alias to /src
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiFinance,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie,
} from '@mdi/js';
import MainSection from '@/components/TComponents/MainSection';
import TitleBar from '@/components/TComponents/TitleBar';
import HeroBar from '@/components/TComponents/HeroBar';
import CardComponent from '@/components/TComponents/CardComponent';
import EmployeesTable from '@/components/EmployeesTable';
import CardLogBar from '@/components/CardLogBar';
import TitleSubBar from '@/components/TComponents/TitleSubBar';

export default {
  name: 'Home',
  components: {
    TitleSubBar,
    MainSection,
    EmployeesTable,
    CardComponent,
    HeroBar,
    TitleBar,
    CardLogBar,
  },
  setup(_) {
    const store = useStore();

    const titleStack = ref(['Admin', 'Dashboard']);
    const logsBarItems = computed(() => store.state.log.logs);
    const darkMode = computed(() => store.state.darkMode);

    onMounted(() => {
      store.dispatch('employee/getAllEmployees');
      store.dispatch('log/getAllLogs');
    });

    return {
      titleStack,
      logsBarItems,
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
