import modes from "./mode";

function loadSite(mode, callback) {
    window.runmod = mode
    if (mode === modes.test) {
        let site = {
            message: "success",
            name: "MiRolls",
            link: "https://localhost:3000/",
            logo: "/favicon.png",
            mainColor: "rgb(21, 127, 248)",
            icp: "A nice questionnaire system",
            lang: "en",
            needIcp: 0,
            introduce: `# MiRolls\n{{Logo}}\n\nMiRolls is a nice and useful questionnaire system. It is easy to build a questionnaire system with MiRolls.\n\n![MainPage.jpeg]({{Link}}/MainPage.jpeg)\n\nAnd we also have good animation in MiRolls.`,
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
        site.introduce.replace(/{{Link}}/g, site.link)
        site.introduce.replace(/{{Logo}}/g, site.logo)
        // replace introduce
        document.getElementById("favicon").href = site.logo;
        document.documentElement.lang = site.lang;
        window.site = site; // something in window.site
        document.getElementById("titleForIndex").innerHTML = site.name;
        callback() // to run render code
    }
}

export default loadSite