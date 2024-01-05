import modes from "./mode";

function loadSite(mode, callback) {
    window.runmod = mode
    if (mode === modes.test) {
        let site = {
            message: "success",
            name: "MiRolls",
            link: "http://localhost:3000/",
            logo: "/favicon.png",
            mainColor: "rgb(21, 127, 248)",
            icp: "A nice questionnaire system",
            lang: "zh",
            needIcp: 0,
            introduce: `# MiRolls\n![image]({{Logo}})\n\nMiRolls is a nice and useful questionnaire system. It is easy to build a questionnaire system with MiRolls.\n\n![MainPage.jpeg]({{Link}}image/MainPage.png)\n\nAnd we also have good animation in MiRolls.`,
        }
        // site = {}
        setTimeout(() => {
            siteChanger(site)
        }, 500)
        //simulation ping value
    } else {
        fetch("/get/site", {
            method: "POST"
        }).then(res => res.json()).then(site => {
            siteChanger(site)
        })
    }

    // to change the language and logo
    function siteChanger(site) {
        let tempLogo;
        site.introduce = site.introduce.replace(/{{Link}}/g, site.link)
        if (!site.logo.startsWith("http")) {// relative path
            if (site.logo.startsWith("/")) {// has "/"
                if (site.link.endsWith("/")) {// end has "/"
                    // has 2 "/" now
                    tempLogo = site.link + site.logo.substring(1)
                } else {
                    // only 1 "/" now
                    tempLogo = site.link + site.logo
                }
            } else { // don't have any "/"
                if (site.link.endsWith("/")) {
                    // has 1 "/"
                    tempLogo = site.link + site.logo
                } else {
                    // don't have any "/"
                    tempLogo = site.link + "/" + site.logo
                }

            }
        }
        site.introduce = site.introduce.replace(/{{Logo}}/g, tempLogo)
        console.log(site.introduce)
        // replace introduce
        document.getElementById("favicon").href = site.logo;
        document.documentElement.lang = site.lang;
        window.site = site; // something in window.site
        const root = document.querySelector(':root');
        window.site.fontColor = determineTextColor(site.mainColor)
        root.style.setProperty('--mainColor', window.site.mainColor);
        document.getElementById("titleForIndex").innerHTML = site.name; // change the title
        root.style.setProperty('--fontColor', window.site.fontColor);
        callback() // to run render code


        function determineTextColor(backgroundColor) {
            // deal with rgb
            const match = backgroundColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            if (!match) {
                throw new Error('Invalid RGB format');
            }

            const r = parseInt(match[1]);
            const g = parseInt(match[2]);
            const b = parseInt(match[3]);

            // calculate the light value
            const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
            const threshold = 128;

            // get font color
            return luminance > threshold ? 'black' : 'white';
        }

    }
}

export default loadSite