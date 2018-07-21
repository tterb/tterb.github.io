---
priority: 0.8
title: YouTube to MP3
description: A program that simplifies the process of downloading and converting Youtube videos to MP3 files from the command-line
keywords: "youtube, mp3, converter, command-line, terminal, bash, cli, itunes, python, project, blog, github"
date: 2018-05-27
categories: blog project
options: readme
image: yt2mp3.png
repo: yt2mp3
tags:
  - YouTube
  - MP3
  - Command-line
  - Bash
  - Python
  - Projects
---

<p class="badges">
  <img src="https://img.shields.io/pypi/v/yt2mp3.svg" alt="PyPi"/>
  <img src="https://pypip.in/py_versions/yt2mp3/badge.svg" alt="PyPI - Python Version"/>
  <a href="https://github.com/tterb/yt2mp3/blob/master/LICENSE"><img src="https://img.shields.io/github/license/tterb/yt2mp3.svg" alt="License"/></a>
</p>  

<p align="center">
  <img src="https://user-images.githubusercontent.com/16360374/42410056-a417e33e-8198-11e8-8c43-f60b6a6037dc.gif" alt="preview" width="650"/>
</p>

## Description  
This program simplifies the process of searching, downloading and converting Youtube videos to MP3 files from the command-line. All you need is the video URL or the name of the artist/track you're looking for.  
The program will attempt to retrieve data for a song matching the provided input by querying the iTunes API and use the data to find a corresponding YouTube video, if a URL is not provided. The video will then be downloaded, converted, and the gathered data will be used to populate the metadata of the MP3.  
Once finished, the resulting MP3 file will be saved to your *Downloads* directory, with the following file-structure `Music/{artist}/{track}.mp3`.  

***Note:*** If a URL is provided and no match is found for the song data, the user will be prompted for the track/artist and the video thumbnail will be used as the album artwork.  

## Install  
You can install the program with the following command:
```sh
pip install yt2mp3
```

## Usage  
The program can executed via Python 3 as follows:  
```sh
yt2mp3 [-options]
```

#### Options:  
| Arguments         |                                                       |
|-------------------|-------------------------------------------------------|
| `-t, --track`     | Specify the track name query                          |
| `-a, --artist`    | Specify the artist name query                         |
| `-u, --url`       | Specify a Youtube URL or ID                           |
| `-p, --playlist`  | Specify a Youtube playlist URL or ID                  |
| `-o, --overwrite` | Overwrite the file if one exists in output directory  |
| `-q, --quiet`     | Suppress program command-line output                  |
| `-v, --verbose`   | Display a command-line progress bar                   |
| `--version`       | Show the version number and exit                      |
| `-h, --help`      | Display information on usage and functionality       |  

***Note:*** Displaying the progress bar currently has a significant impact on download performance, due to [#180](https://github.com/nficano/pytube/issues/180).  

## Development 
You can download and install the app with the following commands:  

```sh
# Clone the repository / most up to date is on saftyBranch
git clone https://github.com/tterb/yt2mp3

# Navigate to the directory
cd yt2mp3

# Install program dependencies
pip install -r requirements.txt
```

<br>  

----
