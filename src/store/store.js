import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    flavor: '',
    products: [
      { 'id': 1,
        'title': 'Modern D103L 5 PC Dining Set',
        'price': '15000',
        'available': 5,
        'type': 'TRADITIONAL',
        'image': 'https://miro.medium.com/max/1000/1*Ss7R4MwT4VhQgEW53AhUjg.jpeg',
        'description': ''
      },
      { 'id': 2,
        'title': 'Estro Salotti Modern White Leather',
        'price': '16000',
        'available': 5,
        'type': 'TRADITIONAL',
        'image': 'https://miro.medium.com/max/1000/1*C5JyLkAtcDQ01xM_AKfopw.jpeg',
        'description': ''
      },
      { 'id': 3,
        'title': 'Caprice 7 PC Dining Set with Buffet',
        'price': '17000',
        'available': 5,
        'type': 'MODERN',
        'image': 'https://miro.medium.com/max/1000/1*Ck86FqMB59x-sYBIEnaq0w.jpeg',
        'description': ''
      },
      { 'id': 4,
        'title': 'Diamond Bonded Leather 3 PC Sofa Set',
        'price': '18000',
        'available': 5,
        'type': 'MODERN',
        'image': 'https://miro.medium.com/max/1000/1*4SW2RtpTNWHKFyLSempHWA.jpeg',
        'description': ''
      },
      { 'id': 5,
        'title': 'Terrence 3 PC Sofa Set',
        'price': '19000',
        'available': 5,
        'type': 'Televisions',
        'image': 'https://miro.medium.com/max/1000/1*vvxcLmBVV6v7iwzlTPIE4Q.jpeg',
        'description': ''
      },
      { 'id': 5,
        'title': 'Abrams 8 PC Rectangular Dining',
        'price': '20000',
        'available': 5,
        'type': 'CONTEMPORARY',
        'image': 'https://miro.medium.com/max/517/1*EYl_uM7f8rQXcPVliTr7tQ.jpeg',
        'description': ''
      },
      { 'id': 6,
        'title': 'Barett Mid-Century Modern 5 PC Dining Set',
        'price': '21000',
        'available': 5,
        'type': 'CONTEMPORARY',
        'image': 'https://miro.medium.com/max/529/1*A3eGAtsseNMZY9IKz60ftg.jpeg',
        'description': ''
      },
      { 'id': 7,
        'title': 'Leskow 3PC Mid Century Sofa Set',
        'price': '22000',
        'available': 5,
        'type': 'MID-CENTURY MODERN',
        'image': 'https://miro.medium.com/max/1000/1*n5tDio_UgGSv5d9W-p-S6w.jpeg',
        'description': ''
      },
      { 'id': 8,
        'title': 'Leskow 3PC Mid Century Sofa Set',
        'price': '23000',
        'available': 5,
        'type': 'Barett Mid-Century Modern 5 PC Dining Set',
        'image': 'https://miro.medium.com/max/1000/1*YwiyqtNPXlTlW2jGj5XKEA.jpeg',
        'description': ''
      },
      { 'id': 9,
        'title': 'Warm Brown Oak 4 PC Occasional Table Set',
        'price': '24000',
        'available': 5,
        'type': 'MID-CENTURY MODERN',
        'image': 'https://miro.medium.com/max/1000/1*pDqv1x8NB8oEFsFLh8WFHg.jpeg',
        'description': ''
      },
      { 'id': 10,
        'title': 'Modrest Bounty Contemporary Glass',
        'price': '15000',
        'available': 5,
        'type': 'MID-CENTURY MODERN',
        'image': 'https://miro.medium.com/max/700/1*GNI26PFXc03DDOcTyiswwg.jpeg',
        'description': ''
      },
      { 'id': 11,
        'title': 'Divani Casa Vanity White Modern Sofa Set',
        'price': '25000',
        'available': 5,
        'type': 'MID-CENTURY MODERN',
        'image': 'https://miro.medium.com/max/1000/1*0tY9R3VJolWREYriW_gybw.jpeg',
        'description': ''
      }

    ],
    cart: [],
    recent: [],
    favarite: [
      { 'id': 9,
        'title': 'Warm Brown Oak 4 PC Occasional Table Set',
        'price': '24000',
        'available': 5,
        'type': 'MID-CENTURY MODERN',
        'image': 'https://miro.medium.com/max/1000/1*pDqv1x8NB8oEFsFLh8WFHg.jpeg',
        'description': ''
      },
      { 'id': 10,
        'title': 'Modrest Bounty Contemporary Glass',
        'price': '15000',
        'available': 5,
        'type': 'MID-CENTURY MODERN',
        'image': 'https://miro.medium.com/max/700/1*GNI26PFXc03DDOcTyiswwg.jpeg',
        'description': ''
      }
    ]
  },
  mutations: {
    change (state, flavor) {
      state.flavor = flavor
    },
    addCart (state, id) {
      for (let it in state.products) {
        if (state.products[it]['id'] === id) {
          state.cart.push(state.products[it])
        }
      }
    },
    addFavorite (state, id) {
      for (let it in state.products) {
        if (state.products[it]['id'] === id) {
          if (state.favarite.length < 6) {
            state.favarite.unshift(state.products[it])
          } else {
            state.favarite.pop()
            state.favarite.unshift(state.products[it])
          }
        }
      }
    }
  },
  getters: {
    flavor: state => state.flavor,
    products: state => state.products,
    cart: state => state.cart,
    favarite: state => state.favarite
  }
})
