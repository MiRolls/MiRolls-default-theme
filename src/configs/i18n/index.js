import {createI18n} from "vue-i18n";
import langList from "../../../langList";

export function getI18n(site){
    return createI18n({
        locale: site.lang,
        messages: langList
    })
}