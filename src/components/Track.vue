<template lang="pug">
  div
    img(v-bind:src="track.album.images[0].url")
    p {{ track.artists[0].name }}
    small {{ track.duration_ms}}
</template>
<script>
export default {
  name: 'GmTrack',
  props: {
    track: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectTrack () {
      this.$emit('select', this.track.id)
    }
  }
}
</script>
<style lang="stylus">

</style>


