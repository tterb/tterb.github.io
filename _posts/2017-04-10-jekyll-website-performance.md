---
priority: 0.5
title: Jekyll Website Performance
desc: Some insight into how to improve the performance of your Jekyll website 
date: 2017-04-10
categories: blog
options: nohead
tags:
  - blog
  - website
  - Performance
  - speed
  - PageSpeed
  - gulp
  - grunt
  - CloudFlare
  - jekyll
---

## Website Performance

  Upon launching my new redesigned website, I've been spending the some time optimizing the site performance and load speeds using **[Google PageSpeed Insights]**.
  As a result, I thought I would take a second to share with you my discoveries so far and recommend a few resources for improving the speed of your own Jekyll website.  

  *In an effort not to repeat the information in the articles listed below, I'll only share findings that weren't explicitly discussed in any of the following resources.*

### Optimize your own images
  As with most websites, when I first launched the new design, the biggest hindrance to my websites loading speed was the size of the images on my page. Though, after observing the disappointing quality of the *"optimized"* images provided by PageSpeed Insights, I instead elected to use **[GIMP]** to manually decrease and compress my images to preserve the image quality until PageSpeeds requirements were satisfied. ***I highly recommend doing the same.***

### Resources:
  * **[Scoring 100 on Google’s PageSpeed Insights with Jekyll]**
  * **[How to get your Jekyll + GitHub pages website to pass Google's PageSpeed Tests]**
  * **[Optimized Jekyll site with Grunt]**

Using these methods, I have managed to receive the following PageSpeed rating. Though this is still a work-in-progress, and I will be updating this post as I explore this topic further.  
<br>
<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/16360374/24885210/15085854-1e02-11e7-83a1-5a2a75f8ca99.png" width="800" alt="PageSpeed" />
</p>
<br>

<!--------------------------------- Links ------------------------------------->

[Google PageSpeed Insights]: https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2FJonSn0w.github.io%2F&tab=mobile
[GIMP]: https://www.gimp.org/
[Scoring 100 on Google’s PageSpeed Insights with Jekyll]: https://medium.com/@dimitrikoenig/scoring-100-on-googles-pagespeed-insights-with-jekyll-adcbbb229baf
[How to get your Jekyll + GitHub pages website to pass Google's PageSpeed Tests]: https://chrishallahan.com/blog/pass-google-pagespeed-performance-test
[Optimized Jekyll site with Grunt]: http://o.zasadnyy.com/blog/optimized-jekyll-site-with-grunt/
