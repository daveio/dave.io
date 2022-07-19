import * as bootstrap from 'bootstrap'
import { library as faLibrary, dom as faDom } from '@fortawesome/fontawesome-svg-core'
import {
  faCircle,
  faHammer,
  faWrench,
  faTransgender,
  faInfoSquare,
  faEnvelope,
  faNewspaper,
  faBroadcastTower,
} from '@fortawesome/pro-solid-svg-icons'
import {
  faKeybase,
  faTwitter,
  faFacebook,
  faGithub,
  faFlickr,
  faLinkedin,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'

// Font Awesome
faLibrary.add([
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
  faSkype,
])
faDom.watch()

// email (de)obfuscation
window.addEventListener('load', () => {
  var final_string,
    b64_data,
    this_char,
    this_pixel,
    char_idx,
    canvas_ctx,
    data_col,
    data_row,
    loader_image,
    loader_canvas,
    overwrite_offset,
    replacement_target
  loader_canvas = document.querySelectorAll('canvas.email-loader')[0]
  loader_image = document.querySelectorAll('img.email-loader')[0]
  if (loader_image.complete && loader_image.naturalHeight !== 0) {
    do_replacement()
  } else {
    loader_image.onload = do_replacement
  }
  function do_replacement() {
    this_char = loader_canvas.width = loader_image.width
    loader_canvas.height = loader_image.height
    canvas_ctx = loader_canvas.getContext('2d')
    canvas_ctx.drawImage(loader_image, 0, 0)
    b64_data = ''
    data_col = data_row = 0
    while (data_row < loader_canvas.height) {
      this_pixel = canvas_ctx.getImageData(data_col, data_row, 1, 1).data
      if (this_pixel[3] == 0) {
        break
      }
      b64_data +=
        String.fromCharCode(this_pixel[0]) + String.fromCharCode(this_pixel[1]) + String.fromCharCode(this_pixel[2])
      if (++data_col == this_char) {
        data_col = 0
        data_row++
      }
    }
    b64_data = b64_data.replace(/\xFF/g, '') // 0xFF, aka ÿ
    try {
      while (1) {
        b64_data = window.atob(b64_data)
      }
    } catch (decode_exception) {
      final_string = ''
      for (char_idx = 0; char_idx < b64_data.length; char_idx += 3) {
        this_char = String.fromCharCode(parseInt(b64_data.substr(char_idx, 3).replace(/\./, ''), 10))
        final_string += this_char
      }
    }
    replacement_target = document.querySelectorAll('span.email-loader')
    replacement_target[0].outerHTML = final_string
    loader_image = document.querySelectorAll('.email-loader')
    for (overwrite_offset = 0; overwrite_offset < loader_image.length; overwrite_offset++) {
      loader_image[overwrite_offset].outerHTML = ''
    }
  }
})
