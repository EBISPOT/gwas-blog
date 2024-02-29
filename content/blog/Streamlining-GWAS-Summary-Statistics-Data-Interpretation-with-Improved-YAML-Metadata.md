---

title: Streamlining GWAS Summary Statistics Data Interpretation with Improved YAML Metadata

author: Yue Ji and Laura Harris

date: Feburary 22, 2024

description: ...

slug: Streamlining-GWAS-Summary-Statistics-Data-Interpretation-with-Improved-YAML-Metadata

---
Having clear and accessible metadata is essential for enhancing data interpretation and ensuring its reusability. In the case of Genome-Wide Association Studies (GWAS), having a standardized and easy-to-understand format for documenting study metadata is crucial. In the GWAS Catalog, metadata associated with full genome-wide summary statistics files is accessible via multiple routes - searchable in the main Catalog via the website and REST API, and additionally via a text file in YAML format, contained in the same directory as the data file.   

We have identified key fields that should be included in the metadata for a comprehensive understanding, interpretation, and subsequent reuse of GWAS studies. Mandatory fields document essential study details and optional fields cater to specific study designs (such as case/control counts in case-control studies), and provide supplementary analysis information. You can find detailed information about these fields in Table 1 and in our recent preprint (Hayhurst et al 2023 https://www.biorxiv.org/content/10.1101/2022.07.15.500230v4).

In our latest release, we've introduced several updates to the GWAS metadata YAML file format. The YAML format, known it's user-friendliness, provides a combination of structured information and ease of use for humans and computers. The latest changes aim to enhance the human readability of the files with a clearer, more unambiguous, and user-friendly experience without compromising the file's compatibility with automated systems. Here’s an overview of the significant enhancements:

1. Reordering and Grouping of Fields:
* The fields within the YAML files have been reorganized and grouped by related topics, each marked with a group name starting with '#' (group names are listed in Table 1). This organization helps users to quickly locate specific fields by group name, such as '# Sample Information', making the file more navigable for humans. Importantly, this structural refinement does not affect the way machines parse and interpret the data.

2. Clear Indentation for Hierarchical Relationships:
* Indentation has been introduced to visually represent the relationships between different data fields. This visual aid improves the readability of the files, making it easier for users to discern the levels of data organization and relationships between various fields. In the meantime, this indentation does not impact the machine processing of the file.

3. Renaming 'data_last_modified' to 'date_metadata_last_modified':
* To provide clearer context, the 'data_last_modified' field has been renamed to 'date_metadata_last_modified'. This change emphasizes that the timestamp refers to the last modification date of the metadata, not the summary statistics data. It aids users in tracking any changes or updates in the metadata over time.
 
4. Addition of 'Ancestry Category' Field:
* We have introduced a new 'ancestry category' field in addition to the existing 'ancestry' field. This new feature provides a broad overview of the ancestry category that best describes the sample, allowing for a more generalized view of the sample's ancestry.  This new field also ensures consistency and facilitates comparative analysis across different studies, in line with the rest of the Catalog. 

These updates reflect our commitment to improving the user experience while ensuring the YAML files maintain their structural integrity for computer readability. Our focus continues to be on making GWAS metadata more accessible, interpretable, and useful for researchers.


Table 1. Metadata field definitions
| Field                            | Description                                                                        | Data type and values                                    | Mandatory                           | Example                                                                                                              |
| -------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| \# Study meta-data               |
| gwas_id                          | GWAS Catalog accession ID                                                          | Text string                                             | Yes                                 | GCST90244057                                                                                                         |
| author_notes                     | Additional information about this study from the author                            | Text string                                             | No                                  | File contains GWAS summary statistics from a meta-analysis of NMR metabolic traits in up to 33 cohorts.              |
| gwas_catalog_api                 | GWAS catalog REST API link                                                         | Text string                                             | Yes                                 | [https://www.ebi.ac.uk/gwas/rest/api/studies/GCST90244057](https://www.ebi.ac.uk/gwas/rest/api/studies/GCST90244057) |
| date_metadata_last_modified      | The latest date that metadata YAML file was modified                               | date                                                    | Yes                                 | 2023-11-28                                                                                                           |
| \# Trait Information             |
| trait_description                | Author reported trait description                                                  | Text string (multiple possible)                         | Yes                                 | Body mass index                                                                                                      |
| ontology_mapping                 | Short form ontology terms describing the trait                                     | Text string (multiple possible)                         | No                                  |  EFO_0004918                                                                                                       |
| \# Genotyping Information        |
| genome_assembly                  | Genome assembly for the summary statistics.                                        | GRCh/NCBI/UCSC value                                    | Yes                                 | GRCh37                                                                                                               |
| coordinate_system                | Coordinate system used for the summary statistics                                  | Text String (1-based or 0-based)                        | No                                  | 1-based                                                                                                              |
| genotyping_technology            | Method(s) used to genotype variants in the discovery stage.                        | Text string (multiple possible)                         | Yes                                 |  Genome-wide genotyping array                                                                                      |
| imputation_panel                 | Panel used for imputation                                                          | Text string                                             | No                                  | HRC + UK10K                                                                                                          |
| imputation_software              | Software used for imputation                                                       | Text string                                             | No                                  | SHAPEIT3 + IMPUTE4                                                                                                   |
| \# Sample Information            |
| sample_ancestry_category         | Broad ancestry category that best describes the sample.                            | Text string                                             | Yes                                 | European                                                                                                          |
| sample_ancestry                  | The most detailed ancestry descriptor(s) for the sample.                           | Text string (multiple possible)                         | Yes                                 | \- Finnish<br>- British                                                              |
| sample_size                      | Sample size                                                                        | Integer                                                 | Yes                                 | 27006                                                                                                                |
| ancestry_method                  | Method used to determine sample ancestry e.g. self-reported/genetically determined | Text string (multiple possible)                         | No                                  | self-reported                                                                                                        |
| case_control_study               | Flag whether the study is a case-control study                                     | Boolean                                                 | No (default is false)               | true                                                                                                                 |
| case_count                       | Number of cases for case/control study                                             | Integer                                                 | No, unless caseControlStudy is true | 27006                                                                                                                |
| control_count                    | Number of controls for case/control study                                          | Integer                                                 | No, unless caseControlStudy is true | 27006                                                                                                                |
| sex                              | To indicate a sex-stratified analysis                                              | M (for male), F (for female), combined or NR if unknown | No                                  | combined                                                                                                             |
| \# Summary Statistic information |
| data_file_name                   | The name of the summary statistics file                                            | Text string                                             | Yes                                 | GCST90244057_buildGRCh37.tsv                                                                                         |
| file_type                        | The format of the summary statistics file                                          | "GWAS-SSF v1.0", "pre-GWAS-SSF", "non-GWAS-SSF"         | Yes                                 | GWAS-SSF v1.0                                                                                                        |
| data_file_md5sum                 | The md5 checksum of the summary statistics file.                                   | Text string                                             | Yes                                 | 0ec56396f89edcc21a3d5a25a6fa993d                                                                                     |
| analysis_software                | Software and version used for the association analysis                             | Text string (multiple possible)                         | Yes if p-values of 0 given          | REGENIE                                                                                                              |
| adjusted_covariates              | Any covariates the GWAS is adjusted for                                            | Text string (multiple possible)                         | No                                  |  sex                                                                                                               |
| minor_allele_freq_lower_limit    | Lowest possible effect allele frequency                                            | Numeric                                                 | No                                  | 0.0003                                                                                                               |
| \# Harmonization status          |
| is_harmonised                    | Description of harmonisation codes                                                 | Text string                                             | Only given in harmonised datasets   | false                                                                                                                |
| is_sorted                        | Flag whether the file is sorted by genomic location                                | Boolean                                                 | Yes                                 | false                                                                                                                |
| harmonisation_reference          | The genome reference file used for harmonising the summary statistics file         | Text string                                             | No                                  | ftp://ftp.ensembl.org/pub/release-104/fasta/homo_sapiens/dna/                                                        |
## Questions and feedback

Questions or comments about this change? Please contact us as gwas-info@ebi.ac.uk.
