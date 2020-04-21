import Vue from 'vue'
const accoMenu = []
const tradeMenu = []
const printingMenu = []

export function getMenu (type) {
  if (type === 'acco') {
    if (accoMenu) {
      init()
    }
    return accoMenu
  } else if (type === 'trade') {
    if (tradeMenu === null) {
      init()
    }
    return tradeMenu
  } else if (type === 'printing') {
    if (printingMenu === null) {
      init()
    }
    return printingMenu
  }
}

export function init () {
  console.log('getMenu========init')
  console.log(Vue.router)
  console.log('getMenu========init=====end')
  const routes = Vue.$router.options.routes[0].children
  routes.forEach(item => {
    if (item.name === 'acco') {
      accoMenu.push(item.children)
    } else if (item.name === 'trade') {
      tradeMenu.push(item.children)
    } else if (item.name === 'printing') {
      printingMenu.push(item.children)
    }
  })
}
