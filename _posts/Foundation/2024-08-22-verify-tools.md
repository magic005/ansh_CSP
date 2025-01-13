---
layout: post
title: Sprint 1 - Verify Tools
description: Verifying Tools and Software for Sprint 1
type: collab
courses: {'csa': {'week': 3}}
comments: True
categories: ['Collaboration']
---

----------------- Checking git version -----------------
```
Input: git --version
Output: git version 2.39.2 (Apple Git-143)
```
----------------- Checking ruby version -----------------
```
Input: ruby -v
Output: ruby 2.6.10p210 (2022-04-12 revision 67958) [universal.arm64e-darwin23]
```
----------------- Checking python version -----------------
```
Input: python --version
Output: Python 3.12.5
```
----------------- Verifying Jupyter Kernels -----------------
```
Input: jupyter kernelspec list
Output: Available kernels:
  python3    /Users/anshk/nighthawk/AnshCSP/venv/share/jupyter/kernels/python3
```
Verifying creation of project environment variables
```
Input: echo "Repos home dir: /Users/anshk/nighthawk"
Output: "Repos home dir: /Users/anshk/nighthawk"
```
```
Input: echo "Project dir: $project_dir/AnshCSP"
Output: "Project dir: $project_dir/AnshCSP"
```
```
Input: echo "Posts dir: $project/_posts"
Output: "Posts dir: $project/_posts"
```
```
Input: echo "Notebooks dir: $project/_notebooks"
Output: "Notebooks dir: $project/_notebooks"
```
```
Input: echo "Repo: https://github.com/nighthawkcoders/AnshCSP.git"
Output: "Repo: https://github.com/nighthawkcoders/AnshCSP.git"
```
Verifying configuration of GitHub 
```
Input: git config --global --list
Output: user.email=anshie09@gmail.com
user.name=magic005
```
