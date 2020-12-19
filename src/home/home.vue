<template>
    <div>
      <p>minhvu</p>
      <div style="padding-left: 20px">
        <header></header>
      </div>
      <div id="slideHome">
        <div>
          <h2>Image Four</h2>
          <vue-horizontal-list :items="items" :options="options">
            <template v-slot:default="{ item }">
              <div>
                <div class="image-container">
                  <img :src="item.image" />
                  <!--<vs-image :hover="scale"  src="https://miro.medium.com/max/1000/1*4SW2RtpTNWHKFyLSempHWA.jpeg" />-->
                </div>

                <div class="subtitle">
                  <div>Available</div>
                  <div>3/5</div>
                </div>

                <h4>{{ item.title }}</h4>
                <p><b>${{item.price}} USD</b></p>
              </div>
            </template>
          </vue-horizontal-list>
        </div>
      </div>
    </div>

</template>

<script>
import header from '@/header/header.vue'
export default {
  name: 'index',
  components: {
    header
  },
  data () {
    return {
      img: 'bwtusbfe-500x500.jpg',
      items: [
        {
          title: 'White Living Room Furniture',
          content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.',
          image: 'https://miro.medium.com/max/441/1*ees4zjK_xp1rxoajfhlztg.jpeg',
          price: 124
        },
        {
          title: 'Creative Dining Tables',
          content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.',
          image: 'https://miro.medium.com/max/1000/1*4SW2RtpTNWHKFyLSempHWA.jpeg',
          price: 135
        },
        {
          title: 'TRADITIONAL',
          content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex efficitur posuere. Pellentesque cursus pellentesque risus, non.',
          image: 'https://miro.medium.com/max/1000/1*vvxcLmBVV6v7iwzlTPIE4Q.jpeg',
          price: 178
        },
        {
          title: 'Cras pharetra non enim a',
          content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada varius nibh, a malesuada nisi feugiat eget. Aenean convallis semper.',
          image: 'https://miro.medium.com/max/517/1*EYl_uM7f8rQXcPVliTr7tQ.jpeg',
          price: 146
        },
        {
          title: 'Proin vulputate, augue eu accumsan',
          content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla tempor libero sit amet mollis. Praesent quis leo erat. Integer.',
          image: 'https://miro.medium.com/max/484/1*a_4yOEa6f1P3BqQZwkDf_g.jpeg',
          price: 184
        },
        {
          title: 'Maecenas feugiat magna sapien in',
          content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet fringilla ante. Quisque at ipsum non lacus consequat dictum.',
          image: 'https://miro.medium.com/max/472/1*0-BckkLFuvWcUef8IGjo4g.jpeg',
          price: 200
        },
        {
          title: 'Donec commodo sed enim at',
          content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu condimentum risus. Praesent dignissim, neque nec pharetra vestibulum, libero odio.',
          image: 'https://miro.medium.com/max/529/1*A3eGAtsseNMZY9IKz60ftg.jpeg',
          price: 215
        },
        {
          title: 'In bibendum urna et turpis',
          content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ante volutpat leo vulputate volutpat et sed ex. Vivamus eu.',
          image: 'https://miro.medium.com/max/1000/1*YwiyqtNPXlTlW2jGj5XKEA.jpeg',
          price: 200
        },
        {
          title: 'Phasellus iaculis dignissim erat at',
          content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque, eleifend purus gravida, scelerisque orci. Ut et turpis.',
          image: 'https://miro.medium.com/max/1000/1*n5tDio_UgGSv5d9W-p-S6w.jpeg',
          price: 214
        },
        {
          title: 'Phasellus iaculis dignissim erat at',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque, eleifend purus gravida, scelerisque orci. Ut et turpis.',
          image: 'https://miro.medium.com/max/1000/1*pDqv1x8NB8oEFsFLh8WFHg.jpeg',
          price: 300
        },
        {
          title: 'Phasellus iaculis dignissim erat at',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque, eleifend purus gravida, scelerisque orci. Ut et turpis.',
          image: 'https://miro.medium.com/max/700/1*GNI26PFXc03DDOcTyiswwg.jpeg',
          price: 456
        },
        {
          title: 'Phasellus iaculis dignissim erat at',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque, eleifend purus gravida, scelerisque orci. Ut et turpis.',
          image: 'https://miro.medium.com/max/1000/1*Aw_PLCY_2gyetXEcJdKCRQ.jpeg',
          price: 199
        }
      ],
      options: {
        responsive: [
          { end: 576, size: 1 },
          { start: 576, end: 768, size: 2 },
          { start: 768, end: 992, size: 3 },
          { size: 4 }
        ]
      }
    }
  }
  // data () {
  //   return {
  //     options: {
  //       responsive: [
  //         { end: 576, size: 1 },
  //         { start: 576, end: 768, size: 2 },
  //         { start: 768, end: 992, size: 3 },
  //         { size: 4 }
  //       ],
  //       list: {
  //         // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
  //         windowed: 1200,
  //
  //         // Because: #app {padding: 80px 24px;}
  //         padding: 24
  //       },
  //       position: {
  //         start: 2
  //       },
  //       autoplay: { play: true, repeat: true, speed: 2500 }
  //     },
  //     items: [
  //       { title: "Item 0", content: "Content item with description" },
  //       { title: "Item 1", content: "Content item with description" },
  //       { title: "Item 2", content: "Content item with description" },
  //     ],
  //   };
  // },
}
</script>

<style scoped>
  .img {
    border-radius: 15px;
  }
  img-responsive, .thumbnail>img, .thumbnail a>img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  .header-cart .cart-count {
    animation: pulse2 .3s;
    font-size: 10px;
    width: 18px;
    height: 18px;
    background: #1dbdc0;
    color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    right: -10px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .item {
    height: 200px;
    padding: 24px;
    border-radius: 15px;
    background: #f5f5f5;
  }
  .item2 {
    background-color: #00ad8c;
  }
  .item3 {
    background-color: #ad1d1e;
  }
  #slideHome {
    padding-left: 80px;
    padding-right: 80px;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding: 80px 24px 80px 40px;
  }
  p {
    margin-top: 6px;
  }
  h4 {
    margin: 0;
  }
  .subtitle {
    margin-top: 8px;
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500;
  }
  .image-container {
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    width: 100%;
    padding-top: 60%;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
