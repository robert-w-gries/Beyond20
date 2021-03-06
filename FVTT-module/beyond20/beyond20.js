Hooks.on('ready', function () {
    if (typeof (chrome) !== "undefined" && typeof (browser) === "undefined") {
        let message = "If you are using Beyond20, remember to activate it for this tab by clicking on the icon in the Chrome toolbar."
        ui.notifications.info(message)
        setTimeout(() => {
            if (document.title.startsWith("Foundry Virtual Tabletop")) {
                ui.notifications.warn(message)
            }
        }, 5000)
    }
})
