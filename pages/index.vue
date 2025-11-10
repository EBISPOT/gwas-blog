<template>
    <div>
        <main class="gwas-container">
            <div class="section section--gray100 gwas-banner">
                <Header/>
                <Banner/>
            </div>

            <section class="gwas-gray20 body-section">
                <div class="row margin-top-25">

                  <div><!-- style="width: 89.33333333%; margin-left: 5.33333333%" -->
                    <Sidebar/>

                    <div class="column large-9 medium-12" style="padding: 0 5px">
                        <div class="row">
                            <div v-for="article of articles" :key="article">
                                <div class="column large-12 medium-12" style="padding: 0 5px; margin-bottom: 10px;">
                                    <div class="card-2 card-body card-3b my-card">
                                        <h3 class="gwas-card-head">{{ article.title }}
                                            <em style="float:right; font-size:11px; color:#347883;"> {{article.displayDate}} By {{ article.author }} </em>
                                        </h3>
                                        <div class="gwas-card-body-one" style="margin-top:-15px;">
                                            <p class="mg-t-0">{{ article.description }} ... </p>
                                            <p></p>
                                            <div class="card-footer bd-t-0 pd-t-0" style="margin-top:20px;">
                                                <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
                                                      <button  class="tx-12 tx-uppercase gwas-card-btn"> Continue Reading >>> </button>
                                                </nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </section>
        </main>

        <Footer/>
    </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Sidebar from '../components/Sidebar.vue';
export default {
  components: { Footer },

  async asyncData({ $content, params }) {
    const articles = await $content("blog", params.slug)
      .only(["title", "author", "description", "img", "slug", "date", "displayDate"])
      .sortBy("date", "desc")
      .fetch();

    return {
      articles,
    };
  },
};
</script>
