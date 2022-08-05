# odin-dashboard

## live:
## https://hectorvilas.github.io/odin-dashboard/

---

Welcome to my new project! This time I'm making a dashboard using a mix of `Grid` and `Flex`. The objective is to replicate this reference image:

![](./READMEmd/dashboard-project.png)

It looks simple but already can see the challenges. I've been planning how to achieve something like this, scribbling on it with MS-Paint:

![](./READMEmd/planning.png)

At the left I marked my guessings. I've drawn lines over the original image to get a better idea of how I should divide everything. Sorry in advance for my handwriting with mouse.

At the right there's a simplified version I drew, to make it easier to understand what I had planned: at the top there is the basic structure: nav bar, header, main and whatever you call the announcements and trending section. at the bottom I added the divisions on each main section, using orange for `Grid` and blue for `Flex`.

First I was messing around, scribbling all over the reference image, but I ended with something that I'm pretty sure will make the developing smoother, so that's a good start.

There's no need to replicate the image as is. I'm not sure if I'm going to do it, but maybe it would be the best, because in a real job I guess I'll be following the UX/UI team's design instead of making my own.

As always, I'll be updating this README.md file with my progress. I've said in my [previous repository](https://github.com/HectorVilas/odin-form) that I will write everything on spanish (my native language) and english, but that was a lot of unnecesary extra work, so I'll stick with english only, at least for Odin's practice projects.

# progress

## update 1
I started with the basic boilerplate and made `<body>` a grid container. I don't know why others put a new `<div>` inside `<body>` when `<body>` is there. If I find this is a bad practice, I'll move it's `CSS`' properties to a new `<div>` container.

The first thing I did was dividing the grid in 3 columns and 2 rows, I think this is the minimum necessary for the main layout.

Then I started with the dashboard, the skyblue sidebar at the left. I thought I needed flex items with `display: grid`, but I managed to make it all grid. My approach was using `<ul>` for each section and `<li>` for each item. It also was useful for spacings.

As I didn't had any icons, I made a quick placeholder image in MS-Paint (ugly, but will do for now), so I'm using it each time I want to progress without stopping for icons:

![](./media/icons/placeholder.png)

As I learned in previous lessons, I did this to scale the placeholders:

```css
.dashboard [src*="placeholder"] {
  width: 32px;
}
```

This way no styling will be applied to the new icons once I replace the image source. I'm planning to make them on InkScape, designing my own icons or trying to replicate the ones in the reference image.

My next step will be the navigation section, the top one. It's already divided, I just need to place the items and I'm planning to use flex on each cell, sounds more appropiate than grid here.

## update 2
I've been working in the navigation (top) and info (right) bars. Nothing special have been done here, just tried to follow the design from the reference image. I thought I would need to use `::before` in some elements, but an `<h2>` was enough, grid took care of this, without extra divs.

There's nothing special to tell about this part. I just applied some `justify-self` and `align-self` in the top bar, nothing new in the rest of the objects. I think I'll need an extra cell to space along the cross axis, or maybe set a max value and let them stop growing in certain point, then `space-evenly`.

The top bar have ugly spacing on widescreen and the side bar will shrink too much on a narrow window. I need to remember to make use of `minmax()` and `clamp()`.

My next step will be the cards in the main section, here I'm planning to use `auto-fill` with `space-evenly`. I don't like how the cards look when they change size dynamically, looks ugly, so I may set with a static width and height, or at least a `minmax()`, then let the spacing between cards be dynamic.

I've been slower than I'm comfortable with, I hope I get faster next time I try to make a website with lots of elements.