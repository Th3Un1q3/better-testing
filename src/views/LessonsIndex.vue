<template>
  <div class="lessons-index">
    Lessons list
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import lesson from '../../lessons/02/README.md?raw'
console.log(lesson);
export default defineComponent({
  name: 'LessonsIndex',
});
</script>
