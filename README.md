# Static timeline generator

Easily create a static timeline webpage like my [Wikimedia timeline](https://www.mollywhite.net/wikimedia-timeline/). Check out a preview of this sample site, deployed with GitHub Pages: https://molly.github.io/static-timeline-generator/.

**Contents**

- [Install](#install)
- [Customize](#customize)
  - [Primary content](#primary-content)
  - [Meta](#meta)
- [Additional customization](#additional-customization)
- [Deploy](#deploy)
  - [GitHub Pages](#github-pages)
  - [Other services](#other-services)
- [Responsiveness](#responsiveness)
- [Browser compatibility](#browser-compatibility)
- [Under the hood](#under-the-hood)

![Screenshot of a timeline page with dummy content](docs/browser.png)

## Install

Clone this repository, then run `npm install` from the directory.

`npm run-script serve` will build the project and serve the static files locally at http://localhost:8080. `npm run-script build` just runs the build step without starting the development server.

## Customize

Almost all of the content you need to change is in `src/_data/content.js`.

### Primary content

- `header` (HTML, optional): The content to display in the header at the top of the page.
- `footer` (HTML, optional): The content to display in the footer at the bottom of the page.
- `entries` (array of objects, **required**): The list of entries to display on the timeline, in the order they should display.
  - `id` (string, **required**): A unique ID for this timeline entry.
  - `categories` (array of strings, optional): A list of categories that apply to this entry. These will show up as checkboxes at the top of the page, and allow readers to filter the timeline. They may not contain commas. They can be hyphen or space separated (`sample category` or `sample-category` will both display on the page as `Sample category`). Entries without any categories will always display.
  - `color` (string, optional): The color of the circle that displays on the timeline line. The options already defined are `green`, `red`, and `grey`. You can define additional colors in `css/custom.css` (see below).
  - `faicon` (string, optional): The name of a Font Awesome icon to use in the circle on the timeline line. [Explore the options](https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=solid&m=free). This is just the icon name (without the `fa-` prefix). For example: `anchor`.
  - `datetime` (string, either `datetime` or `date` must be present): A date and time specifier for the item. This can be in [any format that `moment.js` recognizes](https://momentjs.com/docs/#/parsing/string/). I normally do "YYYY-MM-DD HH-SS". If there is no time, only a date, use the `date` parameter instead of `datetime`.
  - `date` (string, either `datetime` or `date` must be present): A date specifier for the item. "YYYY-MM-DD".
  - `title` (HTML, **required**): The title of the timeline entry.
  - `image` (optional): An image to display in the entry
    - `src` (string, required): A direct URL to the image file to be embedded on the page, or a relative link to an image in this directory (for example `img/filename.png`).
    - `link` (string, optional): A hyperlink to the page containing the image, if you'd like people to be able to click it to see a larger version, etc.
    - `alt` (string, optional): [Alt text](https://supercooldesign.co.uk/blog/how-to-write-good-alt-text) describing the image.
    - `caption` (HTML, optional): A caption describing the image.
  - `body` (HTML, **required**): The text of the timeline entry. If you want multiple paragraphs, you have to include `<p>` tags yourself; otherwise, it will be added.
  - `links` (array of objects, optional): An array of links to display at the bottom of the entry.
    - `href` (string, **required**): The target of the link.
    - `linkText` (HTML, **required**): Link text.
    - `extra` (HTML, optional): Extra HTML to display at the end of the link.

### Meta

- `pageTitle` (string, **required**): The text to go in the `<title>` tag, to set the title of the page in the browser.
- `pageDescription` (string, optional): Page description to go into [meta](https://www.w3schools.com/tags/tag_meta.asp) tags.
- `pageAuthor` (string, optinal): Page author to go into [meta](https://www.w3schools.com/tags/tag_meta.asp) tags.

## Additional customization

If you would like to add more color options for the circles on the timeline, you can edit the `src/css/custom.css` file to add your own. You can use [this tool](https://htmlcolorcodes.com/) to pick colors and get their hex color codes. They are defined like so:

```css
.timeline-icon.yourcolorhere {
  background-color: #hexcolorcode;
}
```

You would then use `color: yourcolorhere` in the content.js file.

Replace the images in the `src/img` folder to customize the page [favicon](https://blog.hubspot.com/website/what-is-a-favicon) and [OpenGraph image](https://blog.hubspot.com/marketing/open-graph-tags-facebook-twitter-linkedin).

## Deploy

Once you run `npm run-script buld`, you will see a `_site` directory containing static HTML/CSS/JS files with your site content. You can now use any static site hosting to deploy these files!

### GitHub pages

To deploy your static site on GitHub pages (free), create a branch containing the static files in the root directory by running `git subtree push --prefix _site origin gh-pages`. Then you can go to your repository's Settings > Pages options and choose "Deploy from a branch", then select `gh-pages` as the branch.

<img src="docs/gh-pages-config.png" alt="Github Pages config settings. Under 'Build and deployment', Source is set to 'Deploy from a branch', branch is set to 'gh-pages', and the folder is set to '/ (root)'." width="500"/>

### Other services

There are some good tutorials out there for deploying a static site on various other free services. A few are listed below.

You can also look for tutorials on how to deploy a site built with [eleventy](https://www.11ty.dev/), since that's what's powering this project. Some webhosting services like Vercel specifically support eleventy in some really handy ways.

- [Netlify](https://www.netlify.com/blog/2016/10/27/a-step-by-step-guide-deploying-a-static-site-or-single-page-app/)
- [Vercel](https://vercel.com/guides/deploying-eleventy-with-vercel)
- [Render](https://render.com/)
  - Create a new Static Site on Render
  - Set "build command" to `npm run-script build`
  - Set "publish directory" to `_site`

## Responsiveness

Timelines will render well on tablets:

<img src="docs/tablet.png" alt="Screenshot rendered on a tablet device" width="500"/>

or mobile devices:

<img src="docs/phone.png" alt="Screenshot rendered on a phone" width="400"/>

## Browser compatibility

This should work well on all modern browsers. IE <9 is not supported.

Without JavaScript enabled, the page degrades gracefully. However, posts will show in a single-column timeline and filters will not show.

## Under the hood

This project uses

- [11ty](https://www.11ty.dev)
- [EJS](https://ejs.co/)
- [moment.js](https://momentjs.com/)
- [FontAwesome](https://fontawesome.com/)
- [normalize.css](https://github.com/necolas/normalize.css)
- [classlist-polyfill](https://github.com/eligrey/classList.js)

It is released under the [MIT license](https://github.com/molly/static-timeline-generator/blob/main/LICENSE).
