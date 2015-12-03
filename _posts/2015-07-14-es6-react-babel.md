---
layout: post
title: "ES2015 + React using Gulp"
subtitle: "Instructions how to setup the environment"
date: 2015-07-14
author: Lena Barinova
tags:
  - JavaScript
  - Gulp
  - ES2015
  - React
  - dev environment
id: 20001
categories:
  - Coding
---

Recently I started exploring new features of ECMAScript 2015 while using React. So here is how I set-up my dev environment with [gulp](http://gulpjs.com/).
I have 2 simple steps  (running one after other in this sequence):

1. Transform XLS files: I precompile React JSX template files into plain JavaScript using gulp-react:
  <script src="https://gist.github.com/LenaBarinova/b7b58c270e3e560056b3.js"></script>

2. Transform ES2015 files: I take JavaScript files, produced after first transformation and turn them into ES5 files using gulp-babel:
  <script src="https://gist.github.com/LenaBarinova/7245b2c53e06eb8772ab.js"></script>

Here it all gathered and chained together:
<script src="https://gist.github.com/LenaBarinova/95b2d933b6f75d6cc495.js"></script>

In addition to two transformation tasks I like to open output in browser, for this I use gulp-open.

I use [Visual Studio Code](https://code.visualstudio.com/) as my IDE, so I have set this gulp task named "build" as a build task in VS Code settings.
<img src="{{ site.baseurl }}/img/post_img/vs-code-settings.png" alt="Blog infrastructure" class="right" />

And now once I change code and want to check it - I just press ⇧⌘B (on Mac) and the result is in front of me.