<template>
  <section class="p-6">
    <level>
      <ul>
        <li
          v-for="(title, index) in titleStack"
          :key="index"
          class="title-stack-item inline-block pr-3 text-2xl text-gray-500 dark:text-gray-400 last:pr-0 last:font-black last:text-black
            dark:text-gray-100"
        >
          {{ title }}
        </li>
      </ul>
      <!-- <jb-button
        href="https://github.com/justboil/attendance-manager"
        color="info"
        label="Star on GitHub"
        target="_blank"
        :icon="mdiGithub"
      /> -->
    </level>
  </section>
</template>

<script>
import { mdiGithub } from '@mdi/js'
import Level from '@/components/TComponents/Level'

export default {
  name: 'TitleBar',
  components: {
    Level,
    
  },
  props: {
    titleStack: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    return {
      mdiGithub
    }
  }
}
</script>

<style scoped>
li.title-stack-item:not(:last-child):after {
  content: '/';
  @apply inline-block pl-3;
}
</style>
