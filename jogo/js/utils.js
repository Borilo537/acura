Array.prototype.parse2D = function() {
    const rows = []
    for (let i = 0; i < this.length; i+=30) {
        rows.push(this.slice(i, i + 30))
    }

    return rows
}

Array.prototype.createObjectsFrom2D = function () {
    const objects = []
    this.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if (symbol === 130 || symbol === 312 || symbol === 434 || symbol === 1) {
                //push a new collision into collision blocks array
                objects.push(new CollisionBlock({
                    position: {
                        x: x * 64,
                        y: y * 64,
                    },
                }))
            }
        })
    })
    return objects
}
