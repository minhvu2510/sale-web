<template>
  <div style="padding-left: 270px; padding-right: 15px">
    <blogs></blogs>
  </div>
</template>

<script>
// import TopProducts from '@/views/components/dashboard/TopProducts.vue'
import TopProducts from '../../dashboard/TopProducts'
import Blogs from '../../dashboard/Blogs'
export default {
  name: 'breadcrumb',
  components: {Blogs, TopProducts},
  data: () => ({
    title: 'Breadcrumb',
    defaultbreadcrumb: false,
    colorx: '#3DC9B3',
    items: [
      {
        title: 'Dashboard',
        url: 'dashboard'
      },
      {
        title: 'Link 1',
        url: 'link-1'
      },
      {
        title: 'Link 2',
        disabled: true
      },
      {
        title: 'Active',
        active: true
      }
    ],
    colorbreadcrumb: false,
    separatorbreadcrumb: false,
    slotbreadcrumb: false,
    alignmentbreadcrumb: false
  })
}
</script>
