---
title: Reducing your carbon emissions on WordPress
date: 2020-03-11
path: /reducing-wordpress-carbon-emissions
---

### Carbon Emissions from websites?
It wasn't new to me hear the paradox that websites are growing in size while somehow also reducing in utility and quality. For most WordPress site owners, reducing the size of a website serves the purpose of speed and user experience. Recently, I learned that reducing the size of a site can also [reduce carbon emissions](https://dannyvankooten.com/website-carbon-emissions/) on the web.

I mean, it makes sense that a slow, resource-heavy website would take more processing power and electricity to load in turn costing more energy, but I initially thought, *surely* it must be a negligent amount. I was surpised to read from Danny van Kooten that in Europe, every GB of data transfer costs about 0.5 kwh. 

> Assuming an average electricity cost of $0.10-US per kWh (EIA 2012), this equates to a system energy cost of data at $0.51 per GB.
> 
> *&mdash; [ACEEE 2012](https://www.aceee.org/files/proceedings/2012/data/papers/0193-000409.pdf)*

### WordPress out of the box: very bloated
Regarding WordPress, the median WordPress page size is around [2.25 MB](https://httparchive.org/reports/page-weight?lens=wordpress). That's pretty big. What can we do as WordPress developers to help alleviate this?

One of the main reasons for the large page size must lie in bloated themes and plugins - the solution for hobbyists, but bane of the seasoned WordPress developer. Bloated themes and plugins usually take a shotgun approach to features - to make it easy and fast for the developer to come up with a working website. Of course, easy and fast for *development*, but the result is usually poor UI/UX and slow-loading sites for the users who actually *use* the website. No matter how much CSS/JS you minify, however many settings you configure in WP Rocket, or however small you compress your images, your huge Divi theme with Visual Composer could undoubtedly be replaced by a custom theme build from the ground up with Gutenberg or Advanced Custom Fields.

### Conclusion
The problem comes down to the user - if you are an amateur WordPress designer who isn't comfortable with the ins and outs of WordPress and need to add plugins for website features, it's going to be much tougher to prioritize speed and page size. You need a site anyways and you'll take what you can get, so themes and plugins that help you build everything visually from a library of compenents and themes


### Additional Reading
As I did more research, I found others are wondering how they could help. Here are some links for additional reading.
- [Website Carbon Calculator](https://www.websitecarbon.com/) (Which I cannot attest to its accuracy)
- [Greening the Web: How We Can Create Zero Carbon Websites](https://kinsta.com/blog/zero-carbon-websites/)