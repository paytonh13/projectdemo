<img width="1080" alt="enJerneering_black" src="https://github.com/enJerneering/revitalize-med-spa/assets/129111016/691aba08-6fb3-4e8f-b882-f9e9a482dec6">

# enJerneering UI Builder

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Vercel Deploy Status](https://img.shields.io/badge/vercel-deployed-brightgreen.svg)](https://en-jerneering-ui-builder.vercel.app/)
[![License](https://img.shields.io/badge/license-Private-blue.svg)](https://github.com/enJerneering/enJerneering-ui-builder/blob/main/LICENSE)
[![Version](https://img.shields.io/badge/version-0.0.0-blue.svg)](https://github.com/enJerneering/enJerneering-ui-builder/releases)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/enJerneering/enJerneering-ui-builder/pulls)

## Overview

`enJerneering UI Builder` is an AI-powered drag-and-drop project builder for websites and web applications, designed to help you get to market faster. Our intuitive platform empowers you to design, preview, iterate, and launch with state-of-the-art interface builder. Own your code forever, created in modern powerful technologies that utilize server infrastructure for powerful performance!

## Data Model

```mermaid
erDiagram
    User ||--o{ Project : "owns"
    User ||--o{ AffiliateUser : "is"
    AffiliateUser {
        String id PK
        String userId FK
        AffiliateUserRole role
        String referralLink
        String affiliateAdminId FK
        DateTime lastUpdated
        DateTime createdAt
    }
    AffiliateUser ||--o{ AffiliateClientUser : "hasMany"
    AffiliateUser ||--o{ Project : "hasMany"
    AffiliateUser ||--o{ AffiliatePerformance : "hasOne"
    AffiliateUser ||--o{ AffiliateData : "hasOne"
    AffiliateUser ||--|| AffiliateUser : "belongsTo"

    AffiliateClientUser {
        String id PK
        String userId FK
        AffiliateClientUserStatus status
        String affiliateOwnerId FK
        DateTime lastUpdated
        DateTime createdAt
    }
    AffiliateClientUser ||--o{ Project : "hasMany"

    Project {
        String id PK
        String userId FK
        String title
        String description
        String domain
        String[] keywords
        String configurationDetails
        String thumbnail
        String url
        ProjectStatus status
        String[] serviceAreas
        String seoTitle
        String seoDescription
        String[] seoKeywords
        String seoImage
        String language
        String region
        String primaryColor
        String fontFamily
        String repositoryUrl
        String deploymentUrl
        DateTime lastUpdated
        DateTime createdAt
    }
    Project ||--o{ Design : "hasMany"
    Project ||--o{ Service : "hasMany"

    Service {
        String id PK
        String name
        String description
        String[] areas
        String[] images
        String projectId FK
        DateTime lastUpdated
        DateTime createdAt
    }

    Design {
        String id PK
        DesignStatus status
        String projectId FK
        DateTime lastUpdated
        DateTime createdAt
    }
    Design ||--o{ Layout : "hasOne"
    Design ||--o{ Page : "hasMany"

    Layout {
        String id PK
        String configuration
        String designId FK
        DateTime lastUpdated
        DateTime createdAt
    }
    Layout ||--o{ Layer : "hasMany"

    Page {
        String id PK
        String title
        Boolean seoEnabled
        String seoTitle
        String seoDescription
        String[] seoKeywords
        String seoImage
        String configuration
        String designId FK
        DateTime lastUpdated
        DateTime createdAt
    }
    Page ||--o{ Layer : "hasMany"

    Layer {
        String id PK
        String componentType
        Int styleVariant
        String content
        String configuration
        String pageId FK
        String layoutId FK
        DateTime lastUpdated
        DateTime createdAt
    }

    AffiliatePerformance {
        String id PK
        Int clicks
        Int sales
        Float revenue
        DateTime date
        String affiliateUserId FK
        DateTime lastUpdated
        DateTime createdAt
    }

    AffiliateData {
        String id PK
        String companyName
        String description
        String message
        String logo
        String website
        String affiliateUserId FK
        DateTime lastUpdated
        DateTime createdAt
    }
```

## API Endpoints

Access the API by running the application and routing to HOSTNAME[:PORT]/api-docs.

## Getting Started

### Installation:

1. Ensure you have the latest version of Node.js and npm installed.
2. Install the enJerneering UI Builder via your Git manager.
3. Ensure .env is added to the root of this project.
4. From the terminal, run 'npm i' to install dependencies, then 'npm run dev' to start the server.

## License

This software is privately licensed by enJerneering LLC.

## Changelog

For the list of recent changes, see the CHANGELOG file.

enJerneering UI Builder © enJerneering LLC. All rights reserved.
