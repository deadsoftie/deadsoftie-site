# deadsoftie.com

Personal blog and portfolio of Rahul Nair ([@deadsoftie](https://github.com/deadsoftie)).

Built with [Jekyll](https://jekyllrb.com/).

---

## Prerequisites

- **Ruby** ≥ 3.0 — [ruby-lang.org](https://www.ruby-lang.org/en/downloads/)
- **Bundler** — install with `gem install bundler`
- **Jekyll** — installed automatically via Bundler

---

## Local Setup

**1. Clone the repo**

```bash
git clone https://github.com/deadsoftie/deadsoftie-site.git
cd deadsoftie-site
```

**2. Install dependencies**

```bash
bundle install
```

**3. Serve locally**

```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`.

To include draft posts:

```bash
bundle exec jekyll serve --drafts
```

To pick a different port:

```bash
bundle exec jekyll serve --port 5000
```

**4. Build for production**

```bash
bundle exec jekyll build
```

Output goes to `_site/`.

---

## Project Structure

```
.
├── _config.yml          # Site configuration (title, author, plugins, permalink)
├── _posts/              # Blog posts — named YYYY-MM-DD-title.md
│   └── _archive/        # Old example/archive posts (not published)
├── _pages/              # Static pages (about.md, portfolio.md, tags.html)
├── _layouts/            # Page templates (default, home, post, about, portfolio)
├── _includes/           # Reusable partials (head, navigation, footer, analytics)
├── _sass/tale/          # Theme SCSS
│   ├── _variables.scss  # Color palette, fonts, mixins
│   ├── _base.scss       # Global resets and element styles
│   ├── _layout.scss     # Nav, footer, home hero, mosaic grid, about page
│   ├── _post.scss       # Post page styles and reading progress bar
│   ├── _code.scss       # Code block styles and copy button
│   ├── _syntax.scss     # Syntax highlighting (Tokyo Night theme)
│   └── _tags.scss       # Tags page
├── assets/
│   ├── main.scss        # SCSS entry point
│   └── js/
│       ├── copy-code.js       # Code block copy button
│       └── reading-progress.js # Reading progress bar
└── index.html           # Home page (uses home layout + jekyll-paginate)
```

---

## Writing Posts

Create a new file in `_posts/` following the naming convention:

```
_posts/YYYY-MM-DD-post-title.md
```

Minimal front matter:

```yaml
---
layout: post
title: "Your Post Title"
tags: [tag1, tag2]
---
Post content goes here.
```

Available front matter options:

| Field      | Description                                                      |
| ---------- | ---------------------------------------------------------------- |
| `layout`   | Always `post` for blog posts                                     |
| `title`    | Post title (required)                                            |
| `tags`     | Array of tags — shows on home page cards and tags page           |
| `author`   | Override author name (defaults to `site.author.name`)            |
| `sticky`   | Set to `true` to pin the post at the top of the home page        |
| `comments` | Set to `true` to enable Disqus comments (requires Disqus config) |

---

## Configuration

Key settings in `_config.yml`:

```yaml
title: deadsoftie
url: "deadsoftie.com"
author:
  name: Rahul Nair
permalink: /:year-:month-:day/:title
paginate: 5
```

**Google Analytics** — uncomment and set your tag ID:

```yaml
google_analytics: G-XXXXXXXXXX
```

**Disqus comments** — uncomment and set your Disqus shortname:

```yaml
disqus: your-disqus-shortname
```

---

## Plugins

| Plugin            | Purpose                                |
| ----------------- | -------------------------------------- |
| `jekyll-feed`     | Generates `/feed.xml` RSS feed         |
| `jekyll-paginate` | Paginates home page (5 posts per page) |
| `jekyll-seo-tag`  | Injects SEO meta tags                  |
| `jemoji`          | Renders GitHub-flavored emoji in posts |

---

## Deploying

The site is hosted on **GitHub Pages**. Push to `main` to deploy:

```bash
git push origin main
```

GitHub Pages will build and publish automatically.
