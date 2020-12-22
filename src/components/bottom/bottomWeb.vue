<template>

  <div>
    <footer class="footer_new" style="">
      <div class="content-pagex">
        <vs-row vs-w="12">
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="6" >
            <div >
              <li class="item_footer title" style="color: #1f1628">RENTOMOJO</li>
              <li class="item_footer">
                <a href="https://github.com/minhvu2510">About Us</a>
              </li>
              <li class="item_footer">
                <a href="https://github.com/minhvu2510">Culture</a>
              </li>
              <li class="item_footer">
                <a href="https://github.com/minhvu2510">Investors</a>
              </li>
              <li class="item_footer">
                <a href="https://github.com/minhvu2510">Careers</a>
              </li>
              <li class="item_footer">
                <a href="https://github.com/minhvu2510">Contact</a>
              </li>
              <li class="item_footer">
                <a href="https://github.com/minhvu2510">Our Benefits</a>
              </li>
            </div>
          </vs-col>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="6">
            <div >
              <div >
                <li  class="item_footer title" style="color: #1f1628">INFORMATION</li>
                <li class="item_footer">
                  <a href="https://github.com/minhvu2510">Blog</a>
                </li>
                <li class="item_footer">
                  <a href="https://github.com/minhvu2510">Blog</a>
                </li>
                <li class="item_footer">
                  <a href="https://github.com/minhvu2510">FAQs</a>
                </li>
                <li class="item_footer">
                  <a href="https://github.com/minhvu2510">Documents Required</a>
                </li>
                <li class="item_footer">
                  <a href="https://github.com/minhvu2510">Your Guide to a Smarter Living</a>
                </li>
                <li class="item_footer">
                  <a href="https://github.com/minhvu2510">Corporate Enquiries</a>
                </li>
              </div>
            </div>
          </vs-col>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="6">
            <div >
              <div >
                <div >
                  <li  class="item_footer title" style="color: #1f1628">POLICIES</li>
                  <li class="item_footer">
                    <a href="https://github.com/minhvu2510">Cancellations </a>
                  </li>
                  <li class="item_footer">
                    <a href="https://github.com/minhvu2510">Return & refund</a>
                  </li>
                  <li class="item_footer">
                    <a href="https://github.com/minhvu2510">Blog</a>
                  </li>
                  <li class="item_footer">
                    <a href="https://github.com/minhvu2510">Blog</a>
                  </li>
                  <li class="item_footer">
                    <a href="https://github.com/minhvu2510">Privacy Policy</a>
                  </li>
                  <li class="item_footer">
                    <a href="https://github.com/minhvu2510">Rental Terms</a>
                  </li>
                </div>
              </div>
            </div>
          </vs-col>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="6">
            <div >
              <div >
                <div >
                  <li  class="item_footer title" style="color: #1f1628">NEED HELP ?</li>
                  <span class="item_footer">
                    <vs-chip transparent color="success">
                      <vs-avatar icon="mail"/>
                      nguyenminhvu2510@gmail.com
                    </vs-chip>
                  </span>
                  <br/>
                  <span class="item_footer">
                    <vs-chip transparent color="success">
                      <vs-avatar icon="chat"/>
                      Chat with us
                    </vs-chip>
                  </span>
                  <br/>
                  <br/>
                  <br/>
                  <div class="item_footer">
                    <span>
                      <vs-avatar src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
                    </span>
                    <span>
                      <vs-avatar src="https://avatars2.githubusercontent.com/u/31676406?s=460&v=4"/>
                    </span>
                    <span>
                      <vs-avatar src="https://avatars2.githubusercontent.com/u/91676496?s=460&v=4"/>
                    </span>
                    <span>
                      <vs-avatar src="https://avatars2.githubusercontent.com/u/41676496?s=460&v=4"/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </vs-col>
        </vs-row>
        <div style="text-align: right; padding-bottom: 10px">
          <a style="font-size: 12px; color: #5a3cc4">minhvu@2020</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>
  .footer_new {
    /*width: 100%;*/
    height: auto;
    background: #f5f7fa;
    position: relative;
    z-index: 1;
    margin-top: 14px;
    display: block;
  }
  .item_footer {
    text-align: left;
    color: #5a3cc4;;
    font-size: 12px;
    font-weight: 400;
    padding-top: 6px;
    padding-bottom: 6px;
  }
</style>
