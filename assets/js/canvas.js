<script>
    function gebi(s) { return document.getElementById(s);}
    const canvas = gebi('canvas');
    const ctx = canvas.getContext('2d');
    const canvasContainer = gebi('canvas-container');

    const slider = gebi('slider');
    let initial = 1;
    slider.addEventListener('input', onSizeChange);

    const fontslider = gebi('fontslider');
    fontslider.addEventListener('input', onFontSizeChange);

    function onSizeChange() {
        if (items) {
            const newSize = parseFloat(slider.value);
            const scaleFactor = newSize / initial;
            items.width *= scaleFactor; 
            items.height *= scaleFactor; 
            initial = newSize; 
            drawCanvas();
        }
        // console.log(slider.value);
    }

    function onFontSizeChange() {
        const newSize = parseInt(fontslider.value);
        const font = `${newSize}px Arial`;

        if (items && textObjects.includes(items)) {
            items.font = font;
            drawCanvas();
        }
    }

    gebi('rotateLeft').addEventListener('click', () => {
    if (items) {
        items.rotation -= 10; 
        drawCanvas();
        }
    });

    gebi('rotateRight').addEventListener('click', () => {
        if (items) {
            items.rotation += 10; 
            drawCanvas();
        }
    });

    gebi('download').addEventListener('click', function(e) {
        items = null;
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        tempCtx.fillStyle = 'white';
        tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

        tempCtx.drawImage(canvas, 0, 0);

        const canvasUrl = tempCanvas.toDataURL("image/jpeg", 0.5);
        console.log(canvasUrl);

        tempCanvas.remove();

        const createEl = document.createElement('a');
        createEl.href = canvasUrl;
        createEl.download = "Kose-Totebag";
        createEl.click();
        createEl.remove();
    });

    const images = {
        img1: 'images/design1_thumb.png',
        img2: 'images/design2_thumb.png',
        img3: 'images/design3_thumb.png',
        img4: 'images/design4_thumb.png',
        img5: 'images/design5_thumb.png',
        img6: 'images/design6_thumb.png',
    };

    const draggableObjects = [];
    const textObjects = [];
    // let items = {};
    function drawCanvas() {
        //ctx.fillStyle = 'white';
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const obj of draggableObjects) {
            ctx.save();
            ctx.translate(obj.x, obj.y);
            ctx.rotate(obj.rotation * Math.PI / 180);
            ctx.drawImage(obj.image, -obj.width / 2, -obj.height / 2, obj.width, obj.height);
            ctx.restore();

            if (obj === items) {
                ctx.strokeStyle = '#81bcea';
                ctx.lineWidth = 4;
                ctx.strokeRect(obj.x - obj.width / 2, obj.y - obj.height / 2, obj.width, obj.height);
            }
        }

        for (const textObj of textObjects) {
            ctx.save();
            ctx.translate(textObj.x, textObj.y);
            ctx.rotate(textObj.rotation * Math.PI / 180);
            ctx.font = textObj.font;
            ctx.fillText(textObj.text, -textObj.width / 2, textObj.height / 2);
            ctx.restore();

            if (textObj === items) {
                ctx.strokeStyle = '81bcea';
                ctx.lineWidth = 4;
                ctx.strokeRect(textObj.x - textObj.width / 2, textObj.y - textObj.height / 2, textObj.width, textObj.height);
            }
        }
    }

    function addDraggableImage(imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        image.onload = function() {
            const obj = {
                image: image,
                x: canvas.width / 2,
                y: canvas.height / 2,
                width: image.width,
                height: image.height,
                rotation: 0
            };
            draggableObjects.push(obj);
            drawCanvas();
        };
    }

    function addText(text) {
        console.log(text);
        const fontSize = 24;
        const font = `${fontSize}px Arial`;

        const textWidth = ctx.measureText(text).width;
        const textObj = {
            text: text,
            x: canvas.width / 2,
            y: canvas.height / 2,
            width: textWidth,
            height: fontSize,
            rotation: 0,
            font: font,
        };
        ctx.fillStyle = 'black';
        console.log(textObj);
        textObjects.push(textObj);
        drawCanvas();
    }

    gebi('btn1').addEventListener('click', () => {
        addDraggableImage(images.img1);
    });
    gebi('btn2').addEventListener('click', () => {
        addDraggableImage(images.img2);
    });
    gebi('btn3').addEventListener('click', () => {
        addDraggableImage(images.img3);
    });
    gebi('btn4').addEventListener('click', () => {
        addDraggableImage(images.img4);
    });
    gebi('btn5').addEventListener('click', () => {
        addDraggableImage(images.img5);
    });
    gebi('btn6').addEventListener('click', () => {
        addDraggableImage(images.img6);
    });
    gebi('clear').addEventListener('click', () => {
        draggableObjects.length = 0;
        textObjects.length = 0;
        drawCanvas();
    });
    gebi('addTextButton').addEventListener('click', () => {
        const textInput = gebi('textInput');
        const text = textInput.value;
        if (text) {
            addText(text);
        }
        textInput.value = '';
    });
    gebi('delete').addEventListener('click', () => {
        if (items) {
            if (draggableObjects.includes(items)) {
                draggableObjects.splice(draggableObjects.indexOf(items), 1);
            } else if (textObjects.includes(items)) {
                textObjects.splice(textObjects.indexOf(items), 1);
            }
            items = null;
            drawCanvas();
        }
    });
    gebi('sizeplus').addEventListener('click', () => {
        if (items) {
            items.width *= 1.1; 
            items.height *= 1.1; 
            drawCanvas();
        }
    });
    gebi('sizeminus').addEventListener('click', () => {
        if (items) {
            items.width *= 0.9; 
            items.height *= 0.9; 
            drawCanvas();
        }
    });
    let items = null;
    let offsetX = 0;
    let offsetY = 0;
    let newItem = null;
    // const buttons = document.querySelectorAll('#img-container img');
    // buttons.forEach((button) => {
    //     button.addEventListener('mousedown', (e) => {
    //         const imageSrc = button.src;
    //         newDraggedItem = createDraggableItem(imageSrc);
    //         console.log(newDraggedItem);
    //         const mouseX = e.clientX - canvasContainer.offsetLeft;
    //         const mouseY = e.clientY - canvasContainer.offsetTop;

    //         newDraggedItem.x = mouseX;
    //         newDraggedItem.y = mouseY;

    //         canvas.addEventListener('mousemove', onDrag);
    //         canvas.addEventListener('mouseup', onDrop);
    //     });
    // });


    canvas.addEventListener('mousedown', (e) => {
        const mouseX = e.clientX - canvasContainer.offsetLeft;
        const mouseY = e.clientY - canvasContainer.offsetTop;

        let foundItem = null;

        for (const obj of draggableObjects) {
            if (
                mouseX >= obj.x - obj.width / 2 &&
                mouseX <= obj.x + obj.width / 2 &&
                mouseY >= obj.y - obj.height / 2 &&
                mouseY <= obj.y + obj.height / 2
            ) {
                foundItem = obj;
                break;
            }
        }

        for (const textObj of textObjects) {
            if (
                mouseX >= textObj.x - textObj.width / 2 &&
                mouseX <= textObj.x + textObj.width / 2 &&
                mouseY >= textObj.y - textObj.height / 2 &&
                mouseY <= textObj.y + textObj.height / 2
            ) {
                foundItem = textObj;
                break;
            }
        }

        if (foundItem) {
            if (items !== foundItem) {
                slider.value = '1';
            }
            items = foundItem;
            offsetX = mouseX - foundItem.x;
            offsetY = mouseY - foundItem.y;
            canvas.addEventListener('mousemove', onMouseMove);
            canvas.addEventListener('mouseup', onMouseUp);
        } else {
            items = null; //remove highlight
        }

        drawCanvas();
    });

    function onMouseMove(e) {
        const mouseX = e.clientX - canvasContainer.offsetLeft;
        const mouseY = e.clientY - canvasContainer.offsetTop;

        items.x = mouseX - offsetX;
        items.y = mouseY - offsetY;

        if (draggableObjects.includes(items)) {
            const index = draggableObjects.indexOf(items);
            draggableObjects.splice(index, 1);
            draggableObjects.push(items);
        } else if (textObjects.includes(items)) {
            const index = textObjects.indexOf(items);
            textObjects.splice(index, 1);
            textObjects.push(items);
        }

        drawCanvas();
    }

    function onMouseUp() {
        canvas.removeEventListener('mousemove', onMouseMove);
        canvas.removeEventListener('mouseup', onMouseUp);
    }

    canvas.addEventListener('touchstart', onTouchStart);
    canvas.addEventListener('touchmove', onTouchMove);
    canvas.addEventListener('touchend', onTouchEnd);

    function onTouchStart(e) {
        const touch = e.touches[0];
        const touchX = touch.clientX - canvasContainer.offsetLeft;
        const touchY = touch.clientY - canvasContainer.offsetTop;

        for (const obj of draggableObjects) {
            if (
                touchX >= obj.x - obj.width / 2 &&
                touchX <= obj.x + obj.width / 2 &&
                touchY >= obj.y - obj.height / 2 &&
                touchY <= obj.y + obj.height / 2
            ) {
                items = obj;
                offsetX = touchX - obj.x;
                offsetY = touchY - obj.y;
                canvas.addEventListener('touchmove', onTouchMove);
                canvas.addEventListener('touchend', onTouchEnd);
                break;
            }
        }

        for (const textObj of textObjects) {
            if (
                touchX >= textObj.x - textObj.width / 2 &&
                touchX <= textObj.x + textObj.width / 2 &&
                touchY >= textObj.y - textObj.height / 2 &&
                touchY <= textObj.y + textObj.height / 2
            ) {
                items = textObj;
                offsetX = touchX - textObj.x;
                offsetY = touchY - textObj.y;
                canvas.addEventListener('touchmove', onTouchMove);
                canvas.addEventListener('touchend', onTouchEnd);
                break;
            }
        }
    }

    function onTouchMove(e) {
        const touch = e.touches[0];
        const touchX = touch.clientX - canvasContainer.offsetLeft;
        const touchY = touch.clientY - canvasContainer.offsetTop;
        if (!items) {
            items = {};
        }
        items.x = touchX - offsetX;
        items.y = touchY - offsetY;
        // console.log(items.x);
        // console.log(items.y);

        if (draggableObjects.includes(items)) {
            const index = draggableObjects.indexOf(items);
            draggableObjects.splice(index, 1);
            draggableObjects.push(items);
        } else if (textObjects.includes(items)) {
            const index = textObjects.indexOf(items);
            textObjects.splice(index, 1);
            textObjects.push(items);
        }

        drawCanvas();
    }

    function onTouchEnd() {
        canvas.removeEventListener('touchmove', onTouchMove);
        canvas.removeEventListener('touchend', onTouchEnd);
    }

    function doload() {
        var f = document.getElementById('myfile').files[0];
        var r = new FileReader();
        r.readAsDataURL(f);
        r.onloadend = function(e) {
            var image = new Image();
            image.src = e.target.result;
            image.onload = function(ev) {
                var c = document.getElementById("canvas");
                //c.width = image.width;
                //c.height = image.height;
                var ctx = c.getContext('2d');
                ctx.drawImage(image, 0, 0);
            }
        }
    }

    function dopull() {
        const c = document.getElementById('canvas');
        const t = document.getElementById('mytext');
        const ctx = c.getContext('2d');

        // Create a larger canvas
        const largerCanvas = document.createElement('canvas');
        const largerCtx = largerCanvas.getContext('2d');

        // Calculate the dimensions of the larger canvas (x times the size)
        const scaleFactor = 5.5;
        const largerWidth = c.width * scaleFactor;
        const largerHeight = c.height * scaleFactor;

        // Set the dimensions of the larger canvas
        largerCanvas.width = largerWidth;
        largerCanvas.height = largerHeight;

        // Fill the larger canvas with a white background
        largerCtx.fillStyle = 'white';
        largerCtx.fillRect(0, 0, largerCanvas.width, largerCanvas.height);

        // Scale and draw the original canvas onto the larger canvas
        largerCtx.drawImage(c, 0, 0, largerWidth, largerHeight);

        // Get the data URL of the larger canvas
        const largerCanvasDataURL = largerCanvas.toDataURL("image/jpeg", 1.0).replace("data:image/jpeg;base64,", "");

        // Set the data URL as the value of the text input
        t.value = largerCanvasDataURL;

        // Reset the 'items' variable to null
        items = null;
    }


    drawCanvas();
</script>
