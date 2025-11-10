---
title: Changes to associations tsv download file 
author: GWAS Catalog
date: Nov 10th, 2025
description: If you use the GWAS Catalog “All associations” tsv download file, you may have noticed we’ve made some changes.The GWAS Catalog recently passed an incredible milestone of >1m curated associations! This is a huge achievement for the genomics community. However, it presents challenges for some users in analysing the data, since the “All associations” file now has more
slug: association-file-update
img: 
---

If you use the GWAS Catalog “All associations” tsv download file, you may have noticed we’ve made some changes.

The GWAS Catalog recently passed an incredible milestone of >1m curated associations! This is a huge achievement for the genomics community. However, it presents challenges for some users in analysing the data, since the “All associations” file now has more than 1m rows. 

You now have a choice of two formats for the v1 and v2 “all associations” files:

1. File now provided as a compressed .zip; data format unchanged.
2. Data split into multiple smaller files, and compressed together. This split file is divided by publication year, with a separate file for each year from 2023 onwards, and pre-2023 data in a single file.

The split file (2) facilitates analysis for users of Excel or other software which cannot handle >1m rows. Please note that data may continue to be added for previous years - you are advised to always work with the latest version of the complete file set. 

The files can be downloaded from the ftp links listed on the [file downloads page](https://www.ebi.ac.uk/gwas/docs/file-downloads). 

If you’re trying to download the file programmatically for processing, we advise you do so from our [public FTP](https://ftp.ebi.ac.uk/pub/databases/gwas/releases/latest/). The previously available endpoint 
ebi.ac.uk/gwas/api/search/downloads/full was intended for manual access and has been deprecated. 

To access subsets of the data, e.g. all associations for a given trait (e.g. “cancer”), you’re advised to either:
- Use the website to navigate to your data type of interest and then click “download Catalog data” to download relevant associations
- Use our recently updated [REST API](https://www.ebi.ac.uk/gwas/rest/api/v2/docs) for programmatic access

*Want to receive updates like this directly to your inbox? Sign up for our low-volume mailing list by sending an e-mail to **gwas-announce-join@ebi.ac.uk** with subject heading "subscribe"*

