import {driver} from 'driver.js'
import LangList from "../../../langList";
import "./index.css"

const make_roll = () => {
    import('driver.js/dist/driver.css')
    const config = driver({
        animate: true,
        onDestroyStarted: () => {
            opacity()
            setTimeout(() => {destroy()}, 400)
        },
        nextBtnText: getI18n("tutorialButtonNext"),
        prevBtnText: getI18n("tutorialButtonPrevious"),
        doneBtnText: getI18n("tutorialButtonDone"),

        showProgress: true,
        steps: [
            {
                element: ".addControl",
                popover: {
                    title: getI18n("makePageTutorial_1stTitle"),
                    description: getI18n("makePageTutorial_1sDescription"),
                }
            },
            {
                element: ".topic",
                popover: {
                    title: getI18n("makePageTutorial_2ndTitle"),
                    description: getI18n("makePageTutorial_2ndDescription")
                }
            },
            {
                element: ".delButton",
                popover: {
                    title: getI18n("makePageTutorial_3rdTitle"),
                    description: getI18n("makePageTutorial_3rdDescription")
                }
            },
            {
                element: ".bottomControl",
                popover: {
                    title: getI18n("makePageTutorial_4thTitle"),
                    description: getI18n("makePageTutorial_4thDescription")
                }
            },
        ]
    })
    config.drive()
    function destroy(){
        config.destroy()
    }
    function opacity(){
        const background = document.getElementsByClassName("driver-overlay")[0]
        const dialog = document.getElementsByClassName("driver-popover")[0]
        background.style.transition = "0.3s"
        background.style.opacity = 0
        dialog.style.transition = "0.3s"
        dialog.style.opacity = 0
    }
}

function getI18n(tagName) {
    return LangList[window.site.lang][tagName]
}

export default make_roll