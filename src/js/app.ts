import * as bootstrap from 'bootstrap'
import * as jQuery from 'jquery'
import { library as faLibrary, dom as faDom } from '@fortawesome/fontawesome-svg-core'
import {
  faCircle,
  faHammer,
  faWrench,
  faTransgender,
  faInfoSquare,
  faEnvelope,
  faNewspaper,
  faBroadcastTower
} from '@fortawesome/pro-solid-svg-icons'
import {
  faKeybase,
  faTwitter,
  faFacebook,
  faGithub,
  faFlickr,
  faLinkedin,
  faSkype
} from '@fortawesome/free-brands-svg-icons'

declare global {
  interface Window {
    bootstrap: typeof bootstrap
    jQuery: typeof jQuery
    $: typeof jQuery
  }
}

window.bootstrap = bootstrap
window.$ = jQuery
window.jQuery = jQuery

// Font Awesome
const iconSubset = [
  faCircle,
  faHammer,
  faWrench,
  faTransgender,
  faInfoSquare,
  faEnvelope,
  faNewspaper,
  faBroadcastTower,
  faKeybase,
  faTwitter,
  faFacebook,
  faGithub,
  faFlickr,
  faLinkedin,
  faSkype
]
iconSubset.forEach(ikon => {
  faLibrary.add(ikon)
})
faDom.watch()

// email (de)obfuscation
window.addEventListener('load', (): void => {
  let finalString: string,
    b64Data,
    thisChar,
    thisPixel,
    charIdx,
    canvasCtx,
    dataCol,
    dataRow,
    overwriteOffset
  const loaderCanvas: HTMLCanvasElement | null = document.querySelector('canvas.email-loader')
  const loaderImage: HTMLImageElement | null = document.querySelector('img.email-loader')
  if (loaderCanvas == null) {
    return
  }
  if (loaderImage == null) {
    return
  }
  if (loaderImage.complete && loaderImage.naturalHeight !== 0) {
    doReplacement()
  } else {
    loaderImage.onload = doReplacement
  }
  function doReplacement (): void {
    if (loaderCanvas == null) {
      return
    }
    if (loaderImage == null) {
      return
    }
    thisChar = loaderCanvas.width = loaderImage.width
    loaderCanvas.height = loaderImage.height
    canvasCtx = loaderCanvas.getContext('2d')
    if (canvasCtx == null) {
      return
    }
    canvasCtx.drawImage(loaderImage, 0, 0)
    b64Data = ''
    dataCol = dataRow = 0
    while (dataRow < loaderCanvas.height) {
      thisPixel = canvasCtx.getImageData(dataCol, dataRow, 1, 1).data
      if (thisPixel[3] === 0) {
        break
      }
      b64Data +=
        String.fromCharCode(thisPixel[0]) + String.fromCharCode(thisPixel[1]) + String.fromCharCode(thisPixel[2])
      if (++dataCol === thisChar) {
        dataCol = 0
        dataRow++
      }
    }
    b64Data = b64Data.replace(/\xFF/g, '') // 0xFF, aka ÿ
    try {
      while (true) {
        b64Data = window.atob(b64Data)
      }
    } catch (decode_exception) {
      finalString = ''
      for (charIdx = 0; charIdx < b64Data.length; charIdx += 3) {
        thisChar = String.fromCharCode(parseInt(b64Data.substr(charIdx, 3).replace(/\./, ''), 10))
        finalString += thisChar
      }
    }
    const replacementTarget: HTMLSpanElement | null = document.querySelector('span.email-loader')
    if (replacementTarget == null) {
      return
    }
    replacementTarget.outerHTML = finalString
    const loaderImages: NodeListOf<HTMLImageElement> | null = document.querySelectorAll('.email-loader')
    if (loaderImages == null) {
      return
    }
    for (overwriteOffset = 0; overwriteOffset < loaderImages.length; overwriteOffset++) {
      loaderImages[overwriteOffset].outerHTML = ''
    }
  }
})
