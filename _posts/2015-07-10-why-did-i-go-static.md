---
layout: post
title: "'Static HTML' is the new Black"
subtitle: "A short story about moving my blog from Wordpress to gh-pages"
date: 2015-07-10
author: Lena Barinova
id: 20000
categories:
  - Coding
---

<img src="{{ site.baseurl }}/img/post_img/old-blog.png" alt="Old blog" class="right" />

This blog was created in March, 2013. Back then I decided to make it in Wordpress. Since public Wordpress has very limited functionality - I chose on-site Wordpress, but I needed to host it somewhere. My husband is Azure MVP :) so this was no brainer - Azure it was.

For two years it served it's purpose, but now I want simplier setup with more freedom to change the appearance.

A couple of weeks ago I introduced new version of this blog. Now it is static HTML pages, originally written in mardown, then Jekyll generated to static HTML pages and hosted on GitHub Pages.

In this blog post I'll shortly compare several aspects of previous and currents setups.

## Infrastructure & costs
Since I maintain and develop and write my blogs all by myself, infrastructure is of the importance for me. It should be easy to support and low in cost.

### Old (Wordpress)
Wordpress was hosted on Azure Websites (now it's called Azure Web App) with PHP running on IIS, all the blog data (pages, posts, categories, tags - everything was stored in Azure SQL Database). Static data, such as images, videos - were stored and served from Azure Blob Storage.

<img src="{{ site.baseurl }}/img/post_img/azure_blog_deployment_schema.png" alt="Blog infrastructure" class="right" />

This is a complete list of Azure services I used:

<img src="{{ site.baseurl }}/img/post_img/azure_service_list.png" alt="Azure sevices in use" class="right" />

Monthly costs for Azure services were quite low: 30 days of Azure SQL Server and 720 hours of Web Services cost up tp 9 EUR (not that I need to pay it, this figure is basically for those bloggers who doesn't have a Azure-MVP-husband).

### New (GitHub Pages)
New blog setup doesn't require to worry about infrastructure and services - it's all taken care by GitHub. Current setup is very simple and easy. I just created gh-pages branch for my site - and it worked - seamlessly.

<img src="{{ site.baseurl }}/img/post_img/gh-blog-deployment-schema.png" alt="GitHub pages in use" class="right" />

And by the way, it is free.

## Workflow of blog post creation
So what does it take to write a blog now and how was it back then?

### Old (Wordpress)
Wordpress has a pretty good administration site. So new blog post creation was very simple - just write a text, add pictures, press publish and _voilà!_ - you have your post published. Though I had not that much control of how post looked.

### New (GitHub Pages)
Now it's even easier - I can simply write a markdown (and it's very flexible I may flavour it with HTML - and make anything I like in it) on a GitHub and it automatically appears publicly.
Although, as for me I don't feel that strong to "code in production" - I need to double check everything in a test environment (posts as well).
So what I do - is I have two branches: _master_ and _gh-pages_. In a master branch I have all the sources of the blog. Once I add new blog post - I run Jekyll locally to test it. Jekyll generates HTML to _gh-pages_ branch for me. So when I'm happy with a new blog post - I just push it to GitHub.

## Summary
Shortly - I love everything about my current blog: how it looks, the setup, maintainance effort\[less].

#### PROS
+ no need to maintain infrastructure
+ easy to change looks (it was quite a job to change Wordpress theme to look exactly how I wanted)
+ just what I need, no additional features - I never use
+ free hosting

#### CONS
- no UI for editing posts (which is not a problem in my case, I use VisualStudio Code to write markdown)
- many of Jekyll plugins are not allowed on gh-pages, so basically many things you need to program yourself (which I totally don't mind)

I would not be willing to return to Wordpress (not that it is bad in any ways, but this current setup works better for my case).

P.S.: _In my next blog post I'll go through migration process: shortly describe what steps did it take and what tools and technologies I used. So stay tuned :)._