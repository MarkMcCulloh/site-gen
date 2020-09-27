<template>
  <h1>Hello, {{ sub }}</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  get sub(): string {
    return this.$route.meta.nameData.fullName as string;
  }
}
</script>

<style scoped lang="scss"></style>
