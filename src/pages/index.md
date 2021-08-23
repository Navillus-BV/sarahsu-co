---
layout: "../layouts/Page.astro"
title: Home
description: Temporary page description
image: "../assets/images/stuck.png"
blocks:
- template: heroblock
  cta:
    url: "/services"
    text: How I can help
  title: Need a little inspiration?
  content: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
- template: textblock
  text: see services and pricing
  title: One line about the solution
  subtitle: Invitation to do something together
  url: "/services"
  content: |-
    # Does this work?

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
  cta:
    text: see services and pricing
    url: "/services"

---
