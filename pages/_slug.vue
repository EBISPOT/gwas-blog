<template>
    <div>
        <main class="gwas-container">
            <div class="section section--gray100 gwas-banner">
                <Header/>
                <Banner/>
            </div>

            <section class="gwas-gray20 body-section">
                <div class="row margin-top-25">

                    <Sidebar/>

                    <div class="column large-9 medium-12" style="padding: 0 5px;">

                        <div class="row">
                            <div class="column large-12 medium-12" style="padding: 0 5px;">
                                <div class="card-2 card-body card-3b gwas-content-area">
                                    <h2 class="gwas-card-head"> {{ article.title }}
                                         <em style="float:right; font-size:11px;"> {{article.date}} By {{ article.author }} </em> </h2>

                                    <div style="margin: 0px; padding:15px; text-align:left; height:">
                                        <p style="margin-top:0px;">

                                          <nuxt-content :document="article" />

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="row">
                            <div class="column large-4 medium-4" style="padding: 0 5px;">
                                <div class="card-2 card-body card-3b my-card">
                                    <h3 class="gwas-card-head"> Full Data Download </h3>

                                    <div class="gwas-card-body-one centralize">
                                        <p class="mg-t-0">
                                            Download a full copy of the GWAS Catalog in spreadsheet format as well as
                                            current and older versions of the GWAS diagram in SVG format.
                                        <p>
                                        <div class="card-footer bd-t-0 pd-t-0">
                                            <button class="tx-12 tx-uppercase gwas-card-btn"> Download GWAS Catalog
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="column large-4 medium-4" style="padding: 0 5px;">
                                <div class="card-2 card-body card-3b my-card">
                                    <h3 class="gwas-card-head"> Summary Statistics </h3>
                                    <div class="gwas-card-body-one centralize">
                                        <p class="mg-t-0">
                                            Documentation and access to full summary statistics for GWAS Catalog studies
                                            where available.
                                        <p>
                                        <div class="card-footer bd-t-0 pd-t-0">
                                            <button class="tx-12 tx-uppercase gwas-card-btn"> FUll Summary Statistics
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </section>
        </main>

        <Footer/>
    </div>
</template>


<script>
export default {
	async asyncData({ $content, params }) {
		const article = await $content('blog', params.slug).fetch();

		return { article }
	}
}
</script>
