---
priority: 0.6
title: Urban Dictionary Therapy
description: A simple rehabilitation program for coping with long frustrating days of programming
keywords: "urban, dictionary, therapy, UDTherapy, command-line, cmd, command, prompt, terminal, bash, unix, tool, script, funny, web, scraper, python, , windows, OSX, linux, jekyll, blog, github"
date: 2017-05-12
categories: blog projects
options: readme subhead
header: https://cloud.githubusercontent.com/assets/16360374/25799898/d2fe937e-339b-11e7-81a5-b70a54b580d9.png
repo: Urban-Dictionary-Therapy
tags:
  - urban dictionary
  - command-line
  - terminal
  - bash
  - tools
  - python
  - projects
---

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/16360374/25802132/cfcd58de-33a5-11e7-8cf8-81f18f6f7af8.png" width="750" alt="preview"/>
</p>

## Description:
**Urban Dictionary Therapy** is a simple command-line rehabilitation program for coping with those long frustrating days of programming. Utilizing this program and the information generously donated by the online community, you too can return to your work as a more successful, functioning member of society. More importantly, Urban Dictionary Therapy provides you with the much needed liberation without the temptations that come with opening up a new tab in your browser.
Though, this is only one of the many wonderful ways this package can benefit your life. Maybe you&rsquo;re looking for a substitute for the obligatory ```fortune``` package in your command-line greeting or just simply looking for a way to expand your vocabulary?
No matter what the issue, **Urban Dictionary Therapy** provides a perfect answer to all your woes.

<br>

| Arguments          |                                                             |
|:-------------:|-------------------------------------------------------------|
| *-s* or *--search* |          Prints a definition for the specified term         |
|  *-a* or *--all*  |              Prints a whole page of definitions             |
|        *-wotd*        |              Prints the "*Word of the Day*"       |
|  *-h* or *--help* | Prints a list of accepted arguments and their functionality |

<br>

------

## Setup:
This package requires that you have Python3, as well as BeautifulSoup4. On OS X and Linux systems Python3 should be installed by default. Once Python is installed you can download [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/) with the command:
```shell
  $ pip3 install bs4
```
***Note:*** To my knowledge, Python3 is also included in the new *Bash on Windows* linux-subsystem for Windows 10.


Furthermore, you can also make the program executable from anywhere in your file&ndash;system with the command `./UDTherapy.py` by adding the program directory to your *PATH* and by modifying the program permissions using the command:
```shell
  $ chmod +x UDTherapy.py
```

<br><br>
