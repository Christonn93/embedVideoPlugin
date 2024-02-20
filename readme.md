# Plugin for converting md video link to Iframe

To install all packages you will need to run `npm i` after downloading the repository.

After installing the packages, open your terminal and run:

```bash
node index.js
```

The console will display this:

```bash
---
title: Hackademic
slug: hackademic
summary: Hackademics offers interactive online courses in coding and web development, featuring project-based learning and expert instructors. Become a skilled software engineer 
with our program!
previous: null
src:
type: Institution
tags:
  - coding
  - programming
  - web development
  - software engineering
  - computer science
  - online learning
  - interactive courses
  - project-based learning
  - front-end development
  - back-end development
  - full-stack development
---

# Hackademics!

Welcome to Hackademics! Our mission is to empower individuals with the skills and knowledge they need to become successful software engineers. Our online courses are designed to 
be interactive and engaging, with expert instructors who are passionate about coding and web development.

Whether you're a beginner or an experienced programmer, we have courses that will challenge and inspire you. Our project-based learning approach ensures that you'll gain practical experience and develop a portfolio of work to showcase your skills to employers.

able on-demand, so you                                                                                                                                     able on-demand, so you 
can learn at your own speed and on your own schedule.

Join us today and start your journey towards becoming a skilled software engineer with Hackademics!

<iframe src="https://example.com/video1" title="Video 1"></iframe>
```

The function its running is not the one using remark ecosystem, its using the plain vanilla js. That is located in the file `autoEmbededVideos.js`

The html file is empty at first, but after running the script the html file will have content similar to what the console log outputs.

**NB!**
This example does not change any other markdown text, just the video link. To use this to convert the rest of the markdown into html, it have to be done some more work on the code. OR it can be implemented into your existing work.
