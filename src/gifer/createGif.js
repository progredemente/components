export default () => {
    self.addEventListener('message', (ev) => {
        if (!ev) return;
        const {
            img,
            customImage,
            side,
            scaleFactor,
            fontUrl
        } = ev.data;
        const font = new FontFace("ComicTypo", `url(${fontUrl})`);
        self.fonts.add(font);
        font.load().then(() => {
            const encoder = GIFEncoder();
            encoder.start();
            const canvas = new OffscreenCanvas(side * scaleFactor, side * scaleFactor);
            const context = canvas.getContext('2d', { willReadFrequently: true });
            
            create(encoder, context, img, customImage, scaleFactor, side, (context, side, scaleFactor) => {
                context.fillStyle = "white";
                context.fillRect(0, 0, side * scaleFactor, side * scaleFactor)
            });
    
            const binaryGif = encoder.stream().getData();
            postMessage(`data:image/gif;base64,${btoa(binaryGif)}`);
        }).catch((e) => {
            console.log(e)
        })
    })
}