<div align="center">

<img src="./assets/bg_readme.png" alt="Poverobg icon" style="border-radius:10px">

# Poveroh

#### A single platform to track poverty.

<h4>
    <a href="https://github.com/DavideTarditi/poveroh/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/DavideTarditi/poveroh/issues/">Request Feature</a>
  </h4>

<div>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

---

> “Money doesn’t buy happiness, but I’d rather cry in a Ferrari.”

</div>

<hr />

<!-- Table of Contents -->

## :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
- [Tech Stack](#space_invader-tech-stack)
    - [Client](#client)
    - [Server](#server)
    - [Database](#database)
    - [DevOps](#devops)
- [Color Reference](#art-color-reference)
- [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
    - [Prerequisites](#bangbang-prerequisites)
    - [Run Locally](#running-run-locally)
- [Roadmap](#compass-roadmap)
- [License](#warning-license)

<!-- About the Project -->

## :star2: About the Project

<div align="center"> 
  <img src="./assets/dashboard_screenshot.png" alt="screenshot" />
</div>

Poveroh is an open-source, web-based platform for tracking personal finances.

### Why?

This platform was born from the desire to track personal finances in a detailed and structured way.

Ok, there are thousands of similar applications out there, but none of them truly fit my needs or convince me entirely. That’s why, driven by the wish to learn new technologies, improve my skills, and create something of my own, I decided to develop this platform—without any big ambitions, just as a personal project.

Currently, I track my finances using a Google Spreadsheet. This platform is essentially the web version of that spreadsheet (with some cool features to make everything more user-friendly).

### How it works?
The platform aggregates multiple bank accounts.

Users can manually input transactions or upload them via CSV or PDF.

Since it’s designed to track personal wealth, a snapshot of the month (including investments) will be taken on the last day of each month. This allows users to keep a historical record, generate reports, and monitor the growth of their assets over time.

In addition to individual transactions and bank account aggregation, the goal is to provide a platform for tracking investments as well, allowing to add financial products such as ETFs, stocks, bonds, crypto, and more.

> **Note**: This platform is currently tailored to meet my personal needs. It may not be fully complete or include features and services that others might find essential.

<!-- TechStack -->

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://angular.dev/">Angular</a></li>
    <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://nodejs.org/en">Node.js</a></li>
    <li><a href="https://expressjs.com/">Express.js</a></li>
    <li><a href="https://www.prisma.io/">Prisma</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

<details>
<summary>DevOps</summary>
  <ul>
    <li><a href="https://www.docker.com/">Docker</a></li>
    <li><a href="https://github.com/features/actions">Github Actions</a></li>
    <li><a href="https://aws.amazon.com/it/">Amazon Web Services</a></li>
  </ul>
</details>

<!-- Color Reference -->

### :art: Color Reference

| Color            | Hex                                                              |
|------------------|------------------------------------------------------------------|
| Primary Color    | ![#4E594A](https://via.placeholder.com/10/4E594A?text=+) #4E594A |
| Secondary Color  | ![#278664](https://via.placeholder.com/10/278664?text=+) #278664 |
| Background Color | ![#1C1C1C](https://via.placeholder.com/10/1C1C1C?text=+) #1C1C1C |
| Text Color       | ![#EEEEEE](https://via.placeholder.com/10/EEEEEE?text=+) #FFFFFF |

<!-- Env Variables -->

### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- `PORT` (suggest `4201`)

- `NX_DAEMON` (default is `TRUE`; for DEV mode, `FALSE` is suggested)

- `DATABASE_URL`, structure is `postgresql://poveroh:[user]@[password]:5432/poveroh?schema=public`.
  Replace `[user]` and `[password]` with data you choose.

- `JWT`, key for encrypt local, storage or cookie

<!-- Getting Started -->

## :toolbox: Getting Started

<!-- Prerequisites -->

### :bangbang: Prerequisites

This project uses:

- Node.js: https://nodejs.org/en/download/package-manager
- Docker: https://docs.docker.com/get-started/get-docker/
- VSCode: https://code.visualstudio.com/

<!-- Run Locally -->

## :running: Run Locally

### Get start

Clone the project

```bash
  git clone https://github.com/DavideTarditi/poveroh.git
```

Go to the project directory

```bash
  cd poveroh
```

Install dependencies

```bash
  npm install
```

If you haven't already, create the `.env` file.

### Backend

Go to docker folder

```bash
  cd apps/api/docker
```

Build docker file

```bash
  docker build -f db.dockerfile -t poveroh-db .
```

Replace `POSTGRES_PASSWORD` and run images

```bash
  docker run --name poveroh-db -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -v postgres-data:/var/lib/postgresql/data-d poveroh-db
```

Go to prisma folder

```bash
  cd apps/api/prisma
```

Generate client

```bash
  prisma generate
```

Migrate and create models

```bash
  prisma migrate dev
```

Run backend project

```bash
  nx serve api
```

### Frontend

Run project

```bash
  nx serve web
```

<!-- Roadmap -->

## :compass: Roadmap

In running order:

* [x] Login
* [ ] Categories & subcategories
* [ ] Bank accounts
* [ ] Transaction
  * [ ] Manual insert
  * [ ] Upload from CSV or PDF
* [ ] Month's snapshot
* [ ] Subscriptions
* [ ] Reports
* [ ] Investments
* [ ] Mobile app (iOS/Android) [probably in Flutter]

To give it an extra boost:

* [ ] Live investments
* [ ] Memes
* [ ] Open banking

<!-- License -->

## :warning: License

Poveroh is released under MIT license. You are free to use, modify and distribute this software, as long as the copyright header is left intact.

See LICENSE.txt for more information.

## :link: Useful links

- [Github Repo](https://github.com/DavideTarditi/poveroh)
- [Figma file](https://www.figma.com/design/SZz6f8cZ1mIE5s6Z4WGshu/Poveroh?node-id=232-100&t=1ozuf8X78WOqBXYH-1)
