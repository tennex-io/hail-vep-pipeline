---
slug: /
---

# VEP and LOFTEE Plugin

## Background

[Hail](https://hail.is/) is an open-source, general-purpose, Python-based data analysis library with additional data types and methods for working with genomic data.  Hail's been built to scale well horizontally as the workloads do, and has strong support for multi-dimensional, structured data like the genomic data in a genome-wide association study.  Maintained by the Broad Institute, Hail has been widely adopted in academia and industry.

Hail can be used to annotate variants with the [`vep()` method](https://hail.is/docs/0.2/methods/genetics.html#hail.methods.vep), which in turn leverages a plugin called [LOFTEE](https://github.com/konradjk/loftee) (Loss-Of-Function Transcript Effect Estimator).  These packages (VEP and LOFTEE) are required for certain deployments of [Hail on Amazon EMR](https://github.com/privoit/emr-hail), and are hosted on Amazon Web Services in S3.

## Variant Effect Predictor (VEP) Cache

The Variant Effect Predictor (VEP) from Ensembl, "determines the effects of your variants (SNPs, insertions, deletions, CNVs, or structural variants) on genes, transcripts, and protein sequence, as well as regulatory regions."  [Using a cache](https://uswest.ensembl.org/info/docs/tools/vep/script/vep_cache.html#cache) is the most efficient way to leverage VEP.

The `vep` folder in this dataset contains caches for:

- Zebrafish (_Danio rerio_) [GRCz11](http://uswest.ensembl.org/Danio_rerio/Info/Index)
- Human (_Homo sapiens_) [GRCh38](http://uswest.ensembl.org/Homo_sapiens/Info/Index)
- Human (_Homo sapiens_) [GRCh37](https://grch37.ensembl.org/Homo_sapiens/Info/Index)
- Rat (_Rattus norvegicus_) [Rnor_6.0](https://uswest.ensembl.org/Rattus_norvegicus/Info/Index)

for several recent versions of VEP.

## Loss-Of-Function Transcript Effect Estimator (LOFTEE)

The `loftee-data` folder in this dataset contains optional data from the LOFTEE project for use by the Hail on Amazon EMR project.  Further instructions on usage can be found in the [project repository](https://github.com/privoit/emr-hail/blob/master/packer/docs/vep-install.md#hail-vep-configuration-json).
