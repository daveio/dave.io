// import * as jQuery from 'jquery'
import {
  faKeybase,
  faTwitter,
  faFacebook,
  faGithub,
  faLinkedin,
  faMastodon,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { library as faLibrary, dom as faDom } from '@fortawesome/fontawesome-svg-core'
import { faBroadcastTower } from '@fortawesome/sharp-light-svg-icons'

const iconSubset = [faBroadcastTower, faKeybase, faTwitter, faFacebook, faGithub, faLinkedin, faMastodon, faSkype]

iconSubset.forEach((ikon) => {
  faLibrary.add(ikon)
})

faDom.watch()

const navToggler = document.getElementById('nav-toggler')
if (navToggler) {
  navToggler.addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu')
    if (navMenu) {
      navMenu.classList.toggle('hidden')
    }
  })
}
