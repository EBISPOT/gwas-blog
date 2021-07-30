<template>
  <div class="section-1">
    <span class="float-left">
      <img
        :src="require(`static/gwas-logo-small.png`)"
        class="small-gwas-logo"
      />
    </span>
    <span class="float-right">
      <nuxt-link to="/" class="link"> Blog Home </nuxt-link>
      <a href="https://www.ebi.ac.uk/gwas/" class="link" target="_blank"> Search </a>
      <a href="https://www.ebi.ac.uk/gwas/deposition" class="link" target="_blank"> Submit </a>
      <a href="https://www.ebi.ac.uk/gwas/downloads" class="link" target="_blank"> Download </a>
      <a href="https://www.ebi.ac.uk/gwas/docs" class="link" target="_blank"> Documentation </a>
      <a href="https://www.ebi.ac.uk/gwas/docs/about" class="link" target="_blank"> About </a>
      <img
        :src="require(`/static/logo-embl-white.png`)"
        class="embl-logo-white"
      />
      <img :src="require(`/static/nci-logo.png`)" class="nci-logo" />
    </span>
  </div>
</template>