<template>
    <div>
      <vs-row vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12" >
          vs-lg="2" vs-sm="4" vs-xs="12"
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="8" vs-sm="4" vs-xs="12">
          <vue-horizontal-list :items="items" :options="options">
            <template v-slot:default="{ item }">
              <div class="item img">
                <!--<h3>{{ item.title }}</h3>-->
                <img class="img" :src="item.image" />
                <!--<vs-images>-->
                <!--<vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 9" />-->
                <!--<vs-image :key="index" :src="`https://picsum.photos/400/400?image=1${index}`" v-for="(image, index) in 7" />-->
                <!--</vs-images>-->
              </div>
            </template>
          </vue-horizontal-list>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12">
          vs-lg="2" vs-sm="4" vs-xs="12"
        </vs-col>
      </vs-row>
      <a class="header-cart">
        <span>Cart</span>
        <span class="cart-count">2</span>
      </a>
    </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      items: [
        {
          title: "Sed non ante non cras amet",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.",
          image: "https://s.rmjo.in/HP-web.png",
        },
        {
          title: "Curabitur sit amet nunc",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.",
          image: "https://s.rmjo.in/HP-web.png",
        },
        {
          title: "Proin pharetra, ante metus",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex efficitur posuere. Pellentesque cursus pellentesque risus, non.",
          image: "https://s.rmjo.in/HP-web.png",
        },
        {
          title: "Cras pharetra non enim a",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada varius nibh, a malesuada nisi feugiat eget. Aenean convallis semper.",
          image: "https://s.rmjo.in/HP-web.png",
        }],
      options: {
        responsive: [{ size: 1 }],
        list: {
          // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
          windowed: 1200,

          // Because: #app {padding: 80px 24px;}
          padding: 24
        },
        position: {
          start: 2
        },
        autoplay: { play: true, repeat: true, speed: 3000 }
      }
    };
  },
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
</style>
