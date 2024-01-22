---
date: 2021-11-08
title: DataPLANT tools and services development principles
preview-text: Developing applications and tools that support community-driven research data management requires the engagement of various stakeholders. Software development principles provide high-level guidelines and a collection of considerations to create sought after and maintainable applications and services. In DataPLANT, tool development is always motivated by community requirements conveyed by researchers e.g. through data stewards to developers. The objective in DataPLANT is to provide incremental but regular improvements of the RDM procedures...
---

Developing applications and tools that support community-driven research data management requires the engagement of various stakeholders. Software development principles provide high-level guidelines and a collection of considerations to create sought after and maintainable applications and services. In DataPLANT, tool development is always motivated by community requirements conveyed by researchers e.g. through data stewards to developers. The objective in DataPLANT is to provide incremental but regular improvements of the RDM procedures. Developing applications and tools that support community-driven research data management requires the engagement of various stakeholders. Software development principles provide high-level guidelines and a collection of considerations to create sought after and maintainable applications and services. In DataPLANT, tool development is always motivated by community requirements conveyed by researchers e.g. through data stewards to developers. The objective in DataPLANT is to provide incremental but regular improvements of the RDM procedures.   

DataPLANT services are software components fulfilling a certain function. Thus, the design principles are the results of the discussions and alignments of efforts in the [Year 1 review](https://nfdi4plants.org/content/news/2021-10-01-governance-in-dataplant-year-one-review-in-trifels.html) and the presentation to the [Technical Board for review](https://nfdi4plants.org/content/news/2021-10-07-dataplant-governance-tb.html).    

In a large scale infrastructure and service project the principles ensure a common understanding among the participants and users. The principles are designed to allow for reproducibility and (re)deployability both in the central infrastructure of the hosting institutions as well as de-centrally or later on in a consolidated common NFDI base infrastructure. This allows an institution, group, or project in fundamental plant research to setup its private resources for various reasons like project funder’s requirements. Independent of the actual installation the technological base, update procedures etc. should be similar to the umbrella DataPLANT infrastructure. 
1. All services need to be well-documented, including their infrastructure-dependent configuration. All code as well as access to the service instances needs to be available to all project partners involved. 
2. Upon design, services should be atomic and modularized, to facilitate their integration, deployment and their reuse or extension. Services should be automatically (re)deployable to allow cloud aware operation, allow (dynamic) distribution and adaptation to local requirements. Services should follow the ”infrastructure-as-code” principle if possible. The proxy (see picture in the Year 1 review post) makes it easy to allow parallel instances of services for testing new versions before making them production. It also allows easy access to (temporary) prototypical services. 
3. While computational resources follow the cloud principle (being discardable, re-deployable) a stable persistency layer is required. Services may contain the actual application data (code), the configuration data (conf), user scientific data (scientific data), content data (content) and user information (user), complemented by the deployment information (deploy). Upon service design different data types have to be handled separately. 
4. Single-sign on should be as widely supported as possible, multiple Authentication and Authorization Infrastructure (AAI) options should be made available. A single-sign on infrastructure of DataPLANT based on Keycloak integrates established and future AAIs including ORCID iD, Life Sciences AAI or the NFDI IAM. 
5. The DataPLANT service infrastructure is mainly cloud-based and relies on a common stable entry proxy handling DNS, TLS/SSL certificates and forwarding. This facilitates easy redeployment of services on alternative resources. 
6. Data of services needs to be stored outside the active hosting environment. While code and content may be stored in public repositories, configuration, user and deployment information has to be stored in strictly private repositories. Scientific data should to be stored through the versioning service or data publication service of DataPLANT using a persistent storage layer. 
7. Services require appropriate logging and monitoring capabilities, providing information about the health status of the service, correct operations and user interactions. 
8. Fast recovery of services is preferred for simplicity over high availability. 
 




