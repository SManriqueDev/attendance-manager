<template>
  <table>
    <thead>
      <tr>
        <th v-if="checkable" />
        <th />
        <th>Nombre(s)</th>
        <th>Apellido(s)</th>
        <th>Estado</th>
       
        <th />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="employee in itemsPaginated"
        :key="employee.id"
      >
        <checkbox-cell
          v-if="checkable"
          @checked="checked($event, employee)"
        />
        <td class="image-cell">
          <user-avatar
            :username="employee.firstName"
            class="image"
          />
        </td>
        <td data-label="FirstName">
          {{ employee.firstName }}
        </td>
        <td data-label="LastName">
          {{ employee.lastName }}
        </td>
        <td
          class="flex justify-start"
          data-label="Direction"
        >
          <!-- Presente -->
          <div
            v-if="employee.nextDirection * -1 > 0"
            class="bg-green-500 text-white rounded-xl px-3 py-1 h-6 w-6"
          />
          <!-- Ausente -->
          <div
            v-else
            class="bg-red-500 text-white rounded-xl px-3 py-1 h-6 w-6"
          />
        </td>
      </tr>
    </tbody>
  </table>
  <div class="table-pagination">
    <level>
      <jb-buttons>
        <jb-button
          v-for="page in pagesList"
          :key="page"
          :active="page === currentPage"
          :label="page + 1"
          :outline="darkMode"
          small
          @click="currentPage = page"
        />
      </jb-buttons>
      <small>Página {{ currentPageHuman }} de {{ numPages }}</small>
    </level>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { mdiEye, mdiTrashCan } from '@mdi/js'
import CheckboxCell from '@/components/TComponents/CheckboxCell'
import Level from '@/components/TComponents/Level'
import JbButtons from '@/components/TComponents/JbButtons'
import JbButton from '@/components/TComponents/JbButton'
import UserAvatar from '@/components/TComponents/UserAvatar'

export default {
  name: 'EmployeesTable',
  components: {
    CheckboxCell,
    Level,
    JbButtons,
    JbButton,
    UserAvatar
  },
  props: {
    checkable: Boolean
  },
  setup() {
    const store = useStore()

    const darkMode = computed(() => store.state.darkMode)

    const items = computed(() => store.state.employee.employees)

    const isModalActive = ref(false)

    const isModalDangerActive = ref(false)

    const perPage = ref(10)

    const currentPage = ref(0)

    const checkedRows = ref([])

    const itemsPaginated = computed(() =>
      items.value.slice(
        perPage.value * currentPage.value,
        perPage.value * (currentPage.value + 1)
      )
    )

    const numPages = computed(() =>
      Math.ceil(items.value.length / perPage.value)
    )

    const currentPageHuman = computed(() => currentPage.value + 1)

    const pagesList = computed(() => {
      const pagesList = []

      for (let i = 0; i < numPages.value; i++) {
        pagesList.push(i)
      }

      return pagesList
    })

    const remove = (arr, cb) => {
      const newArr = []

      arr.forEach((item) => {
        if (!cb(item)) {
          newArr.push(item)
        }
      })

      return newArr
    }

    const checked = (isChecked, employee) => {
      if (isChecked) {
        checkedRows.value.push(employee)
      } else {
        checkedRows.value = remove(
          checkedRows.value,
          (row) => row.id === employee.id
        )
      }
    }

    return {
      darkMode,
      isModalActive,
      isModalDangerActive,
      currentPage,
      currentPageHuman,
      numPages,
      checkedRows,
      itemsPaginated,
      pagesList,
      checked,
      mdiEye,
      mdiTrashCan
    }
  }
}
</script>
