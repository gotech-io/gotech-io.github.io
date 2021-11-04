---
layout: screens/oracle-week/SeminarsMapper
title: Containerize CI/CD PIPELINES
folderName: containerize-ci-cd-pipelines
speakerName: Miki Hayut
speakerAvatar: /assets/images/home/team/miki.jpg
courseId: 42359
date: "10.11.2021"
time: "9:00-16:30"
header:
  - ../header.md
linkedin: https://il.linkedin.com/in/mikihayut
---

### Overview

We used to have Jenkins and then SAAS services for CI/CD with pipeline as a code etc…

But what if we wished to build a reusable shared pipeline that can work anywhere and everywhere? no matter if we are using Jenkins, GITLAB , CircleCI or even running local pre build phases on our developers station. Or what about when we have hundreds of repositories and hundreds of jobs and pipelines as a code that we need to maintain or update…

How do we handle it ?

In this session we will discuss how we can utilize Containers technology and design for this purpose.

### Course Contents

- Multiphase build dockerfile
- Integration Phase
- Testings
- Acceptance
- Deployment
- Build reusable Containers pipeline for every project (BoilerPlate repo)
- Using our containers Pipelines without change in Jenkins, CirecleCI , Bitbucket/GitLab or others.
- ADD GitOps flow – Flux/ArgoCD
