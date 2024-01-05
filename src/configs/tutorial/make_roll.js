import {driver} from 'driver.js'
import LangList from "../../../langList";

const make_roll = () => {
    const config = driver({
        showProgress: true,
        steps: [
            {
                element: "#MakePageLeftControl",
                popover: {
                    title: getI18n("makePageTutorial_1stTitle"),
                    description: getI18n("makePageTutorial_1sDescription")
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
}

function getI18n(tagName){
    return LangList[window.site.lang][tagName]
}
export default make_roll