import { defineStore } from "pinia";
import { AppStore } from "./type";

const useAppStore = defineStore('app', {
    state: (): AppStore => ({
        topMenu: false,
        hideMenu: false,
        menuCollapse: false,
        menuWidth: 220,
    }),
    actions: {
        updateMenuCollaspe(val: boolean) {
            this.menuCollapse = val;
        }
    }
})

export default useAppStore