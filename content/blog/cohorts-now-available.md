---
title: Cohorts now available in the GWAS Catalog
author: GWAS Catalog team
date: Nov 14, 2023
description: We are pleased to announce our latest data release includes a new version of the Catalog studies downloads containing additional fields describing the discovery stage (genome-wide) cohorts used in each study (see below for more details), and clearer information on the availability of full genomewide summary statistics. 
slug: cohorts-now-available
img: blog-1.img
---
We are pleased to announce our latest data release includes a new version of the Catalog studies downloads containing additional fields describing the discovery stage (genome-wide) cohorts used in each study (see below for more details), and clearer information on the availability of full genomewide summary statistics. 

There are two new studies [downloads](https://www.ebi.ac.uk/gwas/docs/file-downloads) named as follows:
- gwas-catalog-studies_ontology-annotated_v1.0.2.1.tsv
- gwas-catalog-download-studies-v1.0.3.1.tsv

Versions 1.0.2 (gwas-catalog-studies_ontology-annotated.tsv) and 1.0.3 (gwas-catalog-download-studies-v1.0.3.tsv) of the studies downloads will be deprecated and cease to be generated on 1 December 2023. 

The COHORT field describes the discovery stage (genome-wide) cohorts used in each study. Since we started piloting curation of cohort information in 2020, over 700 different discovery cohorts have been described in GWAS publications. 

Cohort abbreviations from discovery stage GWAS either are extracted from the literature or supplied by sumitters, to match a predefined list which we share with the PGS Catalog.  The initial list of common cohorts used in genetics studies that seeded these annotations is from Mills & Rahal, Communications Biology (2019), and has been expanded during our pilot phase.  A full list of the abbreviations and corresponding full cohort names in use is available to download separately (https://ftp.ebi.ac.uk/pub/databases/spot/pgs/metadata/pgs_all_metadata_cohorts.csv). We share this list with the PGS Catalog, so you may find cohorts listed there that are not currently associated with a GWAS Catalog study.  It's important to remember we only extract cohorts when they have been clearly and unambiguously named by authors, so a cohort may have been used in other publications which don't have annotation. 
Where a sample cohort in the literature was not already in the predefined list at the time of curation, or was ambiguously described, “other” will appear in our studies download file. Where a sample in the literature had no cohort reported, “NR” will appear in our studies download file. Consortium names are extracted if the component cohorts are not provided, or there are too many component cohorts to curate.  Empty cohort fields appear for studies curated before the pilot work to extract this information began (~2020).
We also accept submissions of unpublished data and these are listed in separate download files. Cohorts appearing in the unpublished download files are yet to undergo in-house curation and therefore may not exactly match against the predefined list.

Cohort data annotations for published studies are also now available via the REST API, accessible via the /studies and /studies/{accessionId} endpoints. 

As well as cohort data, the new studies downloads also contain clear annotation of which studies have full genomewide summary statistics available for download in the column FULL SUMMARY STATISTICS with the ftp location available in the adjacent column SUMMARY STATS LOCATION. 

We hope you make great use of these data! Questions? Feedback? Contact gwas-info@ebi.ac.uk
