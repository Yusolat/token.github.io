!function (e, t, n) {
    function a() {
        var e = t.getElementsByTagName("script")[0], n = t.createElement("script");
        n.type = "text/javascript", n.async = !0, n.src = "https://beacon-v2.helpscout.net", e.parentNode.insertBefore(n, e)
    }

    if (e.Beacon = n = function (t, n, a) {
        e.Beacon.readyQueue.push({method: t, options: n, data: a})
    }, n.readyQueue = [], "complete" === t.readyState) return a();
    e.attachEvent ? e.attachEvent("onload", a) : e.addEventListener("load", a, !1)
}(window, document, window.Beacon || function () {
});
!(function () {
    var beaconId = '6ea50080-9b25-4c8c-8ad5-051d5e813bfd'
    window.Beacon('init', beaconId)
    var matches = decodeURIComponent(location.search).match(/helpscout:navigate=(\/.+)/i)
    if (matches) {
        window.Beacon('open')
        window.Beacon('navigate', matches[1])
    }
})();
