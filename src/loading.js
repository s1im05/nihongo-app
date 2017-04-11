(function(w, u) {

    const
        bgColor = "rgb(237, 161, 208)",
        size = 400,
        tileCount = 5,
        tileCountTotal = Math.pow(tileCount, 2),
        tileSize = parseInt(Math.round(size / tileCount), 10),
        el = w.document.createElement('canvas'),
        ctx = el.getContext("2d"),
        getRandom = (min, max) => {
            return Math.random() * (max - min) + min;
        },
        addTile = () => {
            const
                opacity = getRandom(0.1, 0.5),
                tile = tilesArray[index] + 1,
                tileX = parseInt(Math.floor(tile / tileCount), 10),
                tileY = parseInt(tile % tileCount, 10);

            ctx.fillStyle = bgColor;
            ctx.fillRect(tileX * tileSize, tileY * tileSize, tileSize, tileSize);
            ctx.fillStyle = `rgba(256, 256, 256, ${opacity})`;
            ctx.fillRect(tileX * tileSize, tileY * tileSize, tileSize, tileSize);

            if (++index >= tileCountTotal) {
                index = 0;
            }

            return el.toDataURL('image/png');
        };

    let index = 0, tilesArray = [];

    for (let i = 0; i < tileCountTotal; i++) {
        tilesArray.push(i);
    }
    tilesArray.sort((a, b) => {
        return Math.random() > 0.5 ? 1 : -1;
    });

    el.width = size;
    el.height = size;

    const loadingEl = w.document.getElementById('loading'),
        res = w.setInterval(() => {
            if (loadingEl) {
                loadingEl.style.backgroundImage = `url(${addTile()})`;
            } else {
                w.clearInterval(res);
            }
        }, 300);
})(window);
