<template>
    <div>
      <button v-for="button in buttons" :key="button" @click="handleClick(button)">
        {{ button }}
      </button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { ButtonKey, getButtons } from '../getButtons';
  
  export default defineComponent({
    name: 'ButtonList',
    data() {
      return {
        selectedKeys: [ButtonKey.BUTTON_ONE, ButtonKey.BUTTON_TWO,ButtonKey.BUTTON_THREE] as ButtonKey[],
        buttons: [] as string[]
      };
    },
    created() {
      this.buttons = getButtons(this.selectedKeys);
    },
    methods: {
      handleClick(button: string) {
        alert(button);
      }
    }
  });
  </script>
  
  <style scoped>
  button {
    margin: 5px;
    padding: 10px;
    font-size: 12px;
  }
  </style>
