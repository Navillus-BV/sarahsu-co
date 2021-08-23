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
- template: imageblock
  image:
    src: "../assets/images/stuck.png"
    alt: The word stuck spelled in Scrabble tiles
  title: One line about the problem.
  muted: true
  content: |-
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.

    * Lorem ipsum dolor sit amet, consectetur.
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
    * Lorem ipsum dolor sit amet, consectetur.
- template: textblock
  text: see services and pricing
  title: One line about the solution
  subtitle: Invitation to do something together
  url: "/services"
  content: |-
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
  cta:
    text: see services and pricing
    url: "/services"
- template: imageblock
  image:
    src: "../assets/images/sarah.jpg"
    alt: Sarah Sullivan
  title: One line about what I do.
  subtitle: Hi, I'm Sarah
  subtitleIcon: true
  content: |-
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
  cta:
    text: More about me
    url: "/about"
- template: cardblock
  title: No cookie-cutter solutions...
  cards:
  - image:
      alt: Sarah Sullivan
      src: "../assets/images/sarah.jpg"
    title: Sarah Sullivan
    subtitle: Co-founder, Navillus B.V.
    content: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
  - image:
      src: "../assets/images/sarah.jpg"
      alt: Sarah Sullivan
    title: Sarah Sullivan
    subtitle: Co-founder, Navillus B.V.
    content: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.

---
