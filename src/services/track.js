import greenMusicService from './green-music'

const trackService = {}

trackService.search = (q) => {
  const type = 'track'

  return greenMusicService.get('/search', {
    params: { q, type }
  }).then(res => res.data)
}

export default trackService
