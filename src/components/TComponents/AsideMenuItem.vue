<template>
  <li>
    <component
      :is="componentIs"
      :to="itemTo"
      :href="itemHref"
      :target="itemTarget"
      exact-active-class="bg-gray-700 dark:bg-gray-800"
      class="flex text-gray-300 cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-700"
      :class="[isSubmenuList ? 'p-3 text-sm' : 'py-2']"
      @click="menuClick"
    >
      <icon
        v-if="item.icon"
        :path="item.icon"
        class="flex-none"
        w="w-12"
      />
      <span class="flex-grow">{{ item.label }}</span>
      <icon
        v-if="hasDropdown"
        :path="dropdownIcon"
        class="flex-none"
        w="w-12"
      />
    </component>
    <aside-menu-list
      v-if="hasDropdown"
      :menu="item.menu"
      :class="{ 'hidden': !isDropdownActive, 'block bg-gray-600 dark:bg-gray-800': isDropdownActive }"
      is-submenu-list
    />
  </li>
</template>

<script>
import { defineAsyncComponent, ref, computed } from 'vue'
import { mdiMinus, mdiPlus } from '@mdi/js'
import Icon from '@/components/TComponents/Icon'

export default {
  name: 'AsideMenuItem',
  components: {
    AsideMenuList: defineAsyncComponent(() => import('@/components/TComponents/AsideMenuList')),
    Icon
  },
  props: {
    item: Object,
    isSubmenuList: Boolean
  },
  emits: ['menu-click'],
  setup (props, { emit }) {
    const isDropdownActive = ref(false)

    const componentIs = computed(() => props.item.to ? 'router-link' : 'a')

    const hasDropdown = computed(() => !!props.item.menu)

    const dropdownIcon = computed(() => isDropdownActive.value ? mdiMinus : mdiPlus)

    const itemTo = computed(() => props.item.to || null)

    const itemHref = computed(() => props.item.href || null)

    const itemTarget = computed(() => componentIs.value === 'a' && props.item.target ? props.item.target : null)

    const menuClick = event => {
      emit('menu-click', event, props.item)

      if (hasDropdown.value) {
        isDropdownActive.value = !isDropdownActive.value
      }
    }

    return {
      isDropdownActive,
      componentIs,
      hasDropdown,
      dropdownIcon,
      itemTo,
      itemHref,
      itemTarget,
      menuClick
    }
  }
}
</script>
