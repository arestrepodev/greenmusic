<template lang="pug">
  #app
    GmHeader
    main
      input(type="text", placeholder="Buscar canciones...", v-model="searchQuery")
      a(@click="search") Buscar
      p
        small {{ searchMessage }}
      section
        div(v-for="t in tracks")
          GmTrack(
            v-bind:track="t",
            v-on:select="setSelectedTrack"
          )
</template>

<script>
// UI
import GmHeader from '@/components/layout/Header'
import GmSidebar from '@/components/layout/Sidebar'
import GmFooter from '@/components/layout/Footer'
import GmTrack from '@/components/Track'
// Data
import trackService from '@/services/track'
export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: ''
    }
  },
  computed: {
    searchMessage () {
      return `Encontramos ${this.tracks.length} resultados`
    }
  },
  watch: {

  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true
      trackService.search(this.searchQuery).then((res) => {
        this.isLoading = false
        this.tracks = res.tracks.items
      })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  },
  components: {
    GmHeader,
    GmSidebar,
    GmFooter,
    GmTrack
  }
}
</script>

<style lang="stylus" scoped>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

a
  cursor pointer

</style>
