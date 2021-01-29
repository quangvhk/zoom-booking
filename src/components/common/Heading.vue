<template>
  <v-flex class="tw-text-cyan-600" xs12 text-xs-center mt-5 mb-3>
    <code class="display-2 font-weight-bold">{{ title }}</code>
  </v-flex>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    title: String,
  },
}
</script>
