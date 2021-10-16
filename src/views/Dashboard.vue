<template>
  <title-bar :title-stack="titleStack" />
  <hero-bar>Panel de Control</hero-bar>
  <main-section>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mb-6">
      <div class="flex flex-col justify-between">
        <card-widget
          trend="12%"
          trend-type="up"
          color="text-green-500"
          class="mb-3"
          :icon="mdiAccountMultiple"
          :number="512"
          label="Presentes"
        />
        <card-widget
          trend="12%"
          trend-type="down"
          color="text-blue-500"
          :icon="mdiAccountMultiple"
          :number="7770"
          label="Ausentes"
        />
      </div>
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

    <title-sub-bar :icon="mdiAccountMultiple" title="Empleados" />

    <card-component
      :icon="mdiMonitorCellphone"
      has-table
    >
      <employees-table />
    </card-component>
  </main-section>
</template>

<script>
// @ is an alias to /src
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiFinance,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie
} from '@mdi/js'
import MainSection from '@/components/TComponents/MainSection'
import TitleBar from '@/components/TComponents/TitleBar'
import HeroBar from '@/components/TComponents/HeroBar'
import CardWidget from '@/components/TComponents/CardWidget'
import CardComponent from '@/components/TComponents/CardComponent'
import EmployeesTable from '@/components/EmployeesTable'
import CardClientBar from '@/components/TComponents/CardClientBar'
import TitleSubBar from '@/components/TComponents/TitleSubBar'

export default {
  name: 'Home',
  components: {
    TitleSubBar,
    MainSection,
    EmployeesTable,
    CardComponent,
    CardWidget,
    HeroBar,
    TitleBar,
    CardClientBar
  },
  setup() {
    const store = useStore()
    const titleStack = ref(['Admin', 'Dashboard'])
    const employeesBarItems = computed(() => store.state.clients.slice(0, 5))
    const darkMode = computed(() => store.state.darkMode)

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
      mdiChartPie
    }
  }
}
</script>
