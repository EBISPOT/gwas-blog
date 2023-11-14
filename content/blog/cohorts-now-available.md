---
title: Cohorts now available in the GWAS Catalog
author: GWAS Catalog team
date: Nov 14, 2023
description: We are pleased to announce our latest data release includes a new version of the Catalog studies downloads containing additional fields describing the discovery stage (genome-wide) cohorts used in each study (see below for more details), and clearer information on the availability of full genomewide summary statistics. 
slug: cohorts-now-available
img: blog-1.img
---
We are pleased to announce our latest data release includes a new version of the Catalog studies downloads containing additional fields describing the discovery stage (genome-wide) cohorts used in each study (see below for more details), and clearer information on the availability of full genomewide summary statistics. 

There are two new studies downloads named as follows:
- gwas-catalog-studies_ontology-annotated_v1.0.2.1.tsv
- gwas-catalog-download-studies-v1.0.3.1.tsv

Versions 1.0.2 (gwas-catalog-studies_ontology-annotated.tsv) and 1.0.3 (gwas-catalog-download-studies-v1.0.3.tsv) of the studies downloads will be deprecated and cease to be generated on 1 December 2023. 

The COHORT field describes the discovery stage (genome-wide) cohorts used in each study.

Cohort abbreviations from discovery stage GWAS are extracted from literature or supplied by sumitters, to match a predefined list which we share with the PGS Catalog.  The initial list of common cohorts used in genetics studies that seeded these annotations is from Mills & Rahal. Communications Biology (2019), which has been added to during our pilot phase.  A full list of the abbreviations and corresponding full cohort names used is available to download separately (https://ftp.ebi.ac.uk/pub/databases/spot/pgs/metadata/pgs_all_metadata_cohorts.csv). Since this list is shared with the PGS Catalog, it may include cohorts that are not currently associated with a GWAS Catalog study. Cohorts are only extracted where they have been clearly and unambiguously named by authors, not simply listing a hospital name, geographical region or a general description provided without mentioning the cohort name (e.g. "a British biobank"). Consortium names are extracted if individual cohorts are not provided. 
Where a sample cohort in the literature was not already in the predefined list at the time of curation, “other” will appear in our studies download file. Where a sample in literature had no cohort reported, “NR” will appear in our studies download file. Empty cohort fields will appear for studies curated before the pilot to extract this information began (~2020). 
Note that cohorts appearing in the unpublished download files are yet to undergo in-house curation and therefore may not exactly match against the predefined list.

Cohort data annotations are also now available via the REST API.

As well as cohort data, the new studies downloads also contain clear annotation of which studies have full genomewide summary statistics available for download in the column FULL SUMMARY STATISTICS with the ftp location available in the adjacent column SUMMARY STATS LOCATION. 

Questions? Feedback? Contact gwas-info@ebi.ac.uk
