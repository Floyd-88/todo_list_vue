<template>
    <div class="statistics">
        выполненных {{ stats.done }}, осталось {{ stats.active }}
      </div>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue';

export interface Stats {
  active: number,
  done: number
}

export default defineComponent({
  props: {
    stats: {
      type: Object as PropType<Stats>,
      required: true
    }
  }
})
</script>