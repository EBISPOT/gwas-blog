---
title: "Version 2 of the GWAS Catalog REST API: what’s changed from v1?"
author: Elizabeth Lewis
description: The GWAS Catalog REST API v2 provides simpler queries, richer filtering, new resources and a redesigned response model. Here is what users of v1 need to know when migrating.
slug: rest-api-v2-migration-guide
img: blog-1.jpg
date: 2026-08-19
displayDate: 19 August 2026
---

The [GWAS Catalog REST API v2](https://www.ebi.ac.uk/gwas/docs/api) is now available, providing a redesigned way to access curated GWAS Catalog data programmatically.

The API has been redesigned based on user feedback. It provides simpler querying, additional endpoints, richer filtering, ontology-aware searches and access to more Catalog data.

If you currently use the v1 API in scripts, pipelines or applications, this post explains the main differences and what you should review when migrating.

<div class="api-callout api-callout-v2"><strong>Starting something new?</strong><br>Use v2. The v1 examples below are included only to help existing users find code that needs replacing.</div>

## Why a new API?

The GWAS Catalog has grown considerably since the original REST API was developed. V1 provides access to studies, associations, variants and traits, but its design increasingly made complex queries difficult.

For example, v1 exposes separate search endpoints such as `findByPubmedId`, `findByRsId` and `findByEfoTrait`. Searching SNPs includes an endpoint called `findIdsByLocationsChromosomeNameAndLocationsChromosomePositionBetween`.

V2 takes a different approach. Resources can be queried directly using filters, and additional entities such as publications, genes and ancestries have their own endpoints. The redesign is intended to provide a more robust and scalable API while making complex queries easier to construct.

The API remains focused on the Catalog’s literature-curated top associations and associated metadata. A separate redevelopment is underway for API access to the full genome-wide summary-statistics collection.

## At a glance: legacy v1 compared with recommended v2

The v1 column is included only to help existing users find and replace legacy code. For new scripts, pipelines and applications, use v2.

| Area | <span class="api-status api-status-legacy" aria-label="legacy v1">✕</span> Legacy REST API v1 — replace this | <span class="api-status api-status-current" aria-label="recommended v2">✓</span> Recommended REST API v2 |
| --- | --- | --- |
| Base path | `/gwas/rest/api/...` | `/gwas/rest/api/v2/...` |
| Query model | Separate `/search/findBy...` endpoints | Filters applied directly to resource endpoints |
| Parameter naming | Mostly camelCase, such as `pubmedId` | Mostly snake_case, such as `pubmed_id` |
| Response design | HAL/hypermedia with `_links` and `_embedded` | Redesigned v2 resource responses |
| Studies and associations | `/studies` and `/associations` | `/v2/studies` and `/v2/associations`, with richer filtering |
| Variants | `/singleNucleotidePolymorphisms` | Redesigned single-nucleotide-polymorphism resource |
| Publications and genes | Primarily represented through studies and SNP mappings | Dedicated `/v2/publications` and `/v2/genes` resources |
| Ancestries | Embedded within studies | Dedicated ancestry resources and study ancestry endpoints |
| Trait searches | Basic EFO trait lookup/search | Child-trait-aware ontology searches |
| Gene searches | Broader v1 gene annotation behaviour | Standard or extended gene sets |
| Pagination and usage | Default 20 records; page and size | Default 20 records, next links and a documented 15-query-per-second limit |

One of the most significant changes is how queries are constructed.

Conceptually, a v1 query might look like this:

<pre class="api-example api-example-legacy"><code>/gwas/rest/api/associations/search/findByRsId?rsId=rs123</code></pre>

In v2, search criteria are supplied as filters on the resource:

<pre class="api-example api-example-current"><code>/gwas/rest/api/v2/associations?rs_id=rs123</code></pre>

The same principle applies across the API. Instead of learning which `findBy...` endpoint corresponds to a particular query, users can start with the resource they want and filter it. This also makes the API better suited to more complex queries involving multiple criteria.

## More ways to filter studies

V1 already provides several ways to find studies, including by PubMed ID, Catalog accession, disease trait, EFO trait and availability of full p-value data. V2 expands the available filtering substantially.

Study searches can include information such as:

<ul class="api-v2-list">
  <li><code>pubmed_id</code></li>
  <li><code>disease_trait</code></li>
  <li><code>efo_trait</code></li>
  <li><code>efo_id</code></li>
  <li><code>accession_id</code></li>
  <li><code>cohort</code></li>
  <li><code>ancestral_group</code></li>
  <li><code>mapped_gene</code></li>
</ul>

V2 also provides additional study properties, pagination and sorting. Questions that previously required several requests, additional processing or another Catalog data source can increasingly be expressed directly as API queries.

The v2 release also exposes additional data including cohorts, background traits and fuller free-text sample descriptions.

V1 is centred primarily around four major resources:
studies, associations, SNPs and EFO traits.

For example, publication information and ancestry information are contained within the study representation. A v1 study includes publication metadata alongside an array of ancestry records.

V2 exposes more concepts as resources in their own right.
These include publications, genes and ancestries, alongside studies, associations, variants and EFO traits.

For example:

```text
/gwas/rest/api/v2/publications
/gwas/rest/api/v2/genes
/gwas/rest/api/v2/studies/{accession_id}/ancestries
```

This makes it easier to start a query from the entity relevant to your analysis rather than retrieving another resource simply because the information happens to be embedded within it.

## Better ontology-aware trait searches

GWAS Catalog traits are mapped to ontology terms, allowing related phenotypes to be represented consistently. V2 can use that ontology hierarchy when performing searches.

When querying by an EFO trait, users can choose between retrieving records annotated directly with the requested trait or also retrieving records annotated with more specific child traits. For example, a query for asthma can either return only records mapped directly to asthma, or additionally include more specific concepts such as status asthmaticus.

This behaviour is controlled using the child-trait search option:

```text
show_child_traits=false
```

This returns direct annotations only. To include descendant traits, use:

```text
show_child_traits=true
```

For precise queries, using an ontology identifier such as `MONDO_0004979` rather than a text trait name is recommended.

## An important change to gene searches

Users migrating gene-based queries should pay particular attention to the definition of the gene set.

V2 provides two definitions of the gene set associated with Catalog variants.

With `extended_geneset=false`, the API uses genes to which the variant maps, together with the nearest upstream and downstream genes according to Ensembl annotation. This corresponds to the annotation displayed by the current GWAS Catalog web interface.

For example:

```text
https://www.ebi.ac.uk/gwas/rest/api/v2/associations?mapped_gene=HBB&page=0&size=20
```

With `extended_geneset=true`, the API uses the broader set of Ensembl and RefSeq genes mapping upstream and downstream of each variant:

```text
https://www.ebi.ac.uk/gwas/rest/api/v2/associations?mapped_gene=HBB&extended_geneset=true&page=0&size=20
```

The extended gene set corresponds to the annotation used by the v1 API. V2 defaults to the first option to avoid confusing discrepancies with search-page results unless the broader set is intentionally requested.

Therefore, simply recreating a v1 gene query in v2 may not produce the same results. If reproducing v1 gene-query behaviour is important to your analysis, use `extended_geneset=true` when supported by the endpoint.

## Changes to variants

The naming of the SNP resource has also been modernised.

V1 uses `/singleNucleotidePolymorphisms` and identifies individual SNPs using an rsID. The SNP representation includes genomic locations, functional class and genomic contexts, with links to associated studies and associations.

V2 retains variant and rsID-based querying, but uses the redesigned v2 resource structure and supports filters including rsID, genomic location, PubMed ID, chromosome and mapped gene.

Update both the endpoint URLs and any code that depends on the structure of v1 SNP responses.

## HAL and projections are no longer the centre of the API

V1 is explicitly a hypermedia API using HAL. Responses contain `_links`, and the v1 documentation advises users to follow these links instead of constructing URLs themselves. Collections additionally place records under `_embedded`.

V1 also makes extensive use of projections, including convenience representations such as `associationByStudy`, `associationBySnp` and `associationByEfoTrait`.

V2 instead provides explicitly documented resources, filters and response schemas through its OpenAPI reference. For applications built around v1, migration involves more than changing request URLs. Code that parses v1 HAL responses or depends on projections should also be reviewed.

## Pagination and API usage

Both versions paginate large result sets. V1 returns 20 records by default and documents `page` and `size`, with up to 500 records in a single request.

V2 also defaults to 20 records per page. Applications retrieving complete result sets should follow the next links returned by the API rather than assuming that the first response contains every result.

V2 additionally documents a rate limit of 15 queries per second. When this is exceeded, subsequent calls are slowed. Pipelines making many requests should account for both pagination and throttling.

## More Catalog data through the API

The redesign is not purely technical. V2 exposes data that was previously unavailable through the API or required users to obtain it through the GWAS Catalog website and downloads.

This includes:

<div class="api-data-highlights">
  <div class="api-data-highlight">
    <svg class="api-data-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="9" cy="7" r="2.5"/><circle cx="16.5" cy="8" r="2"/><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5M14.5 14c3 0 5.5 1.8 6 5"/></svg>
    <span><strong>Cohorts</strong><br>Discovery-stage cohort information.</span>
  </div>
  <div class="api-data-highlight">
    <svg class="api-data-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m3 7 9-4 9 4-9 4-9-4Z"/><path d="m3 12 9 4 9-4M3 17l9 4 9-4"/></svg>
    <span><strong>Background traits</strong><br>Traits used to describe the study context.</span>
  </div>
  <div class="api-data-highlight">
    <svg class="api-data-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9M12 3c-2.5 2.5-3.5 5.5-3.5 9s1 6.5 3.5 9M4.5 7.5h15M4.5 16.5h15"/></svg>
    <span><strong>Fuller sample descriptions</strong><br>More complete descriptions of study samples.</span>
  </div>
  <div class="api-data-highlight">
    <svg class="api-data-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 3.75A2.25 2.25 0 0 1 8.25 1.5h7.5L21 6.75v13.5A2.25 2.25 0 0 1 18.75 22h-10.5A2.25 2.25 0 0 1 6 19.75V3.75Z"/><path d="M15 1.5v5.25h5.25M9 12h6M9 15.5h6M9 8.5h2"/></svg>
    <span><strong>Terms and licensing</strong><br>Information to help users understand reuse.</span>
  </div>
  <div class="api-data-highlight">
    <svg class="api-data-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M8 6h8M7.2 7.6l3.6 8.8M16.8 7.6l-3.6 8.8"/></svg>
    <span><strong>Integrated annotations</strong><br>Additional annotations from resources such as Ensembl.</span>
  </div>
</div>

New endpoints for publications, genes, genomic contexts and ancestries also allow previously complicated queries to be performed more directly. The result is an API that more closely represents the breadth of information now available within the Catalog.

## What do I need to change?

Before you switch over, check these nine things:

If you maintain a pipeline or application using v1, migration should be treated as a small API upgrade project rather than a URL substitution.

In particular, check the following:

<ol class="api-migration-checklist">
  <li><strong>Endpoint URLs:</strong> move requests from <code>/gwas/rest/api/...</code> to the appropriate <code>/gwas/rest/api/v2/...</code> resource.</li>
  <li><strong>Search calls:</strong> replace <code>/search/findBy...</code> endpoints with v2 query parameters.</li>
  <li><strong>Parameter names:</strong> many v2 parameters use names such as <code>pubmed_id</code>, <code>accession_id</code>, <code>efo_trait</code> and <code>mapped_gene</code>.</li>
  <li><strong>Response parsing:</strong> do not assume v1 HAL <code>_embedded</code>, <code>_links</code> or projection structures will be present in the same form.</li>
  <li><strong>Gene searches:</strong> consider <code>extended_geneset=true</code> if you need behaviour equivalent to v1.</li>
  <li><strong>Trait searches:</strong> decide whether descendant ontology traits should be included.</li>
  <li><strong>Pagination:</strong> ensure your application follows paginated results.</li>
  <li><strong>Request rates:</strong> keep the documented 15-query-per-second limit in mind.</li>
  <li><strong>Data model:</strong> consider whether new resources such as publications, genes or ancestries provide a simpler way to perform queries that previously started from studies or SNPs.</li>
</ol>

## GWAS Catalog REST API v2 documentation

Read the [GWAS Catalog API documentation](https://www.ebi.ac.uk/gwas/docs/api) for the interactive reference, endpoints, schemas, parameters and syntax.
