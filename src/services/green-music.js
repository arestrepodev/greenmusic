import trae from 'trae'
import configService from './config'

const greenMusicSerice = trae.create({
  baseUrl: configService.apiUrl
})

export default greenMusicSerice
