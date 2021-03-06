/*

const throttle = new S.Throttle({
    callback: callback,
    delay: 200
    onlyAtEnd: true
})

throttle.init()

*/

S.Throttle = function (opts) {
    this.delay = opts.delay
    this.cb = opts.callback
    this.onlyAtEnd = opts.onlyAtEnd
    this.last
    this.timer
}

S.Throttle.prototype = {
    init: function () {
        var self = this
        var now = Date.now()
        if (this.last && now < this.last + this.delay) {
            clearTimeout(this.timer)
            this.timer = setTimeout(function () {
                self.last = now
                self.cb()
            }, this.delay)
        } else {
            this.last = now
            if (!this.onlyAtEnd) {
                this.cb()
            }
        }
    }
}
