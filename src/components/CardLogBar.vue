<template>
  <card-component
    class="mb-6 last:mb-0"
    hoverable
  >
    <level>
      <level type="justify-start">
        <user-avatar
          class="w-12 h-12 mr-6"
          :username="log.employee.firstName"
        />
        <div class="text-center md:text-left">
          <h4 class="text-xl">
            {{ log.employee.firstName }} {{ log.employee.lastName }}
          </h4>
          <p class="text-gray-500 dark:text-gray-400">
            {{ dateTime(log.createdAt) }}
          </p>
        </div>
      </level>
      <pill
        v-if="log.direction > 0"
        type="success"
        text="Entro"
      />
      <pill
        v-else
        type="danger"
        text="Salio"
      />
    </level>
  </card-component>
</template>

<script>
import CardComponent from "@/components/TComponents/CardComponent";
import Level from "@/components/TComponents/Level";
import Pill from "@/components/TComponents/Pill";
import UserAvatar from "@/components/TComponents/UserAvatar";
import * as dayjs from "dayjs";


import { computed } from "vue";
export default {
  name: "CardClientBar",
  components: { CardComponent, Level, Pill, UserAvatar },
  props: {
    log: {
      type: Object,
      required: true,
    },
  },
  setup(props, root) {
    const dateTime = computed(
      () => (value) =>
       dayjs(value).format("YYYY-MM-DD HH:mm")
    );
    return { dateTime };
  },
};
</script>
