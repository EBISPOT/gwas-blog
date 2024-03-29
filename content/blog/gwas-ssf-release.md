---
title: New submissions standard - release date
author: GWAS Catalog team
date: 22 March 2023
description: Next month the GWAS Catalog is switching to a NEW summary statistics format. Find out more about what this means for submitters and consumers of summary statistics
slug: gwas-ssf-release
img: blog-1.jpg

---

## The new summary statistics format is coming - what you need to know

From 12th April we are switching to our NEW summary statistics format, GWAS-SSF, an overview of which is described in our [manuscript](https://www.biorxiv.org/content/10.1101/2022.07.15.500230v2) and [github repository](https://github.com/EBISPOT/gwas-summary-statistics-standard). There will be a short period of submission system downtime while we switch over to the new pipelines.

## What does this mean for you?

If you are a SUBMITTER of summary statistics, you will need to submit additional mandatory information, including effect size, allele frequency, and genomic location for each variant, and columns must be presented in a specific order. You are also encouraged to provide additional structured data (e.g. reference allele, imputation info score) and metadata (e.g. ancestry method, sex of participants) which will increase the usability of your data to others, and hopefully get you [more citations](https://www.biorxiv.org/content/10.1101/2022.09.27.509657v2).

If you are a CONSUMER of summary statistics, you will start to see changes to the way we make these available. All newly submitted summary statistics will include the additional fields described [here](https://github.com/EBISPOT/gwas-summary-statistics-standard), with metadata available in a text file (.yaml) stored in the same ftp location as the data file, as well as its existing availability via the GWAS Catalog website and downloads. Over the coming months, we will generate metadata files for all existing summary statistics.

## Frequently asked questions

### For submitters:

**I’ve already started a submission and prepared my files in the old format. What should I do?**
You can submit files in the old format until April 11th. If you are unable to complete your submission before this deadline, please contact us via gwas-subs@ebi.ac.uk for assistance.

**I submitted summary statistics in the old format a while back and they are under embargo or in pre-published state. Do I need to change anything?**
No. Your data will be made available in the old format (upon journal publication, if embargoed), and the metadata file will be prepared from the information you submitted.

**I want to start preparing my submission now, but won’t be ready to submit till after April 12th. How can I find instructions on how to prepare the new format?**

Detailed documentation on the new format is available as follows:
- [Summary statistics data file preparation](https://www.ebi.ac.uk/gwas/docs/gwas-ssf/summary-statistics-format)
- [Submission instructions for summary statistics and sample metadata](https://www.ebi.ac.uk/gwas/docs/gwas-ssf/submission-summary-statistics-plus-metadata)
- [Submission instructions for summary statistics only](https://www.ebi.ac.uk/gwas/docs/gwas-ssf/submission-summary-statistics) (for publications with metadata already available in the GWAS Catalog).

An example new-style metadata template is available to download [here](http://ftp.ebi.ac.uk/pub/databases/gwas/sumstats_and_meta_submission_template_v1_11.xlsx)
A recorded [webinar](https://www.ebi.ac.uk/training/events/data-submission-genome-wide-association-studies-gwas-catalog/) is available, describing the submission process and the new format.

**Are there tools available to help me prepare data in GWAS-SSF format?**
You can find some useful tools to format your files and validate them prior to upload [here]( https://github.com/EBISPOT/gwas-sumstats-tools)
PLINK 2.0 will shortly include an option to generate output in the accepted format, using the option --gwas-ssf.

**I made a submission in the old format but would like to update it to include the new fields. Can I do this?**
At the moment our update process is manual and we don’t have capacity to update large numbers of files unless there is an error. We plan to improve this process in the future.

### For consumers:

**How can I tell if summary statistics are in the old or new format?**
This is indicated in the metadata file. If a metadata file exists, and the field named “fileType” has the value “GWAS-SSF v1.0”, then the file is in the new GWAS-SSF format. Other values in this field indicate that it is not in the new GWAS-SSF format, and may be lacking mandatory fields. If no metadata file exists, the summary statistics are in the old format, or a non-standard format.

**How can I combine or compare new and old format summary statistics?**
Data fields included in the old format (chromosome, base_pair_location, effect_allele, other_allele, effect_allele_frequency, odds_ratio, ci_lower, ci_upper, beta, standard_error) are the same in the new format. There are two exceptions:  variant_id and p_value. In the old format, variant_id contained rsIDs, whereas in the new format rsID has a separate column rsid, and variant_ID contains a variant identifier in the format chr_bp_ref_alt. In the old format, p_value was a mandatory field and could only contain p-values between 0 and 1. In the new format, p-values may be either presented in the p_value field OR as negative log10 p-values, with the header neg_log_10_p_value, but always in column 7.


**More questions?** Get in touch: contact [gwas-info@ebi.ac.uk](mailto:gwas-info@ebi.ac.uk) for general queries or [gwas-subs@ebi.ac.uk](mailto:gwas-subs@ebi.ac.uk) for submission support
