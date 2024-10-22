<? include_once('header.php'); ?>
<?
if (isset($_POST['mytext'])) {
    $img = $_POST['mytext'];
    $img = str_replace('data:image/jpeg;base64,', '', $img);
    $img = str_replace(' ', '+', $img);
    $data = base64_decode($img);
    $file_name = 'data/' . time() . '.jpg';
    file_put_contents($file_name, $data);
}
?>
<style>
    #textInput {
    border: none;
    width: 1041px;
    height: 55px;
    background: #00b1fe;
    font-size: 36px;
    color: #fff;
    text-align: center;
    margin-top: 30px;
}

    #canvas-container {
        position: relative;
        width: 800px;
        height: 1000px;
        top: 0;
        left: 20px;
        border: 1px solid #000;
    }

    #img-container {
        position: absolute;
        width: 200px;
        height: 1000px;
        left: 850px;
        top: 270px;
        border: 1px solid #000;
    }

    button {
        width: 200px;
        height: 60px;
        font-weight: 700;
        font-size: 30px;
        background-color: #2d6d9c;
        margin-top: 20px;
        margin-bottom: 20px;
        color: white;
    }

    .slider label{
        font-size: 40px;
    }

    .draggable {
        position: absolute;
        cursor: move;
    }

    input[type="range"] {
        -webkit-appearance: none;
        width: 160px;
        height: 20px;
        margin-top: 5px;
        top: 100px;
        /* margin:10px 50px; */
        background: linear-gradient(to right, #81bcea 0%, #2d6d9c 100%);
        background-size: 200px 20px;
        background-position: center;
        background-repeat: no-repeat;
        overflow: hidden;
        outline: none;
    }

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 30px;
        height: 40px;
        background: #91ccf4;
        position: relative;
        z-index: 3;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
    }

    input[type="range"]::-webkit-slider-thumb:after {
        content: " ";
        width: 160px;
        height: 10px;
        position: absolute;
        z-index: 1;
        right: 20px;
        top: 5px;
        background: #91ccf4;
        background: linear-gradient(to right, #f088fc 1%, #AC6CFF 70%);
    }
</style>

<body>
    <div class="text-input text-center">
        <input type="text" id="textInput" placeholder="Enter text" class="use-keyboard-input" maxlength="5">
        <button id="addTextButton">Add Text</button>&nbsp;
        <button id="clear">Clear All</button>
    </div>
    <div class="slider text-center">
        <label for="fontslider">Font Size:</label>
        <input type="range" id="fontslider" min="12" max="48" step="2" value="24">&nbsp;&nbsp;
        <label for="slider">Image Size:</label>
        <input type="range" id="slider" min="0.5" max="2" step="0.05" value="1">&nbsp;&nbsp;
    </div>
    <br>

    <div id="canvas-container">
        <canvas id="canvas" width="800" height="1200"></canvas>
    </div>
    <form method="post" action="index.php" id="submitForm">
        <input type="hidden" id="mytext" name="mytext" value="" size="60">
        <button id="download" onclick="dopull();" value="Pull" type="submit" style=" visibility: hidden;">Submit</button>&nbsp;
        <button id="downloadButton" onclick="dopull()" value="download" type="submit">Submit</button>&nbsp;
        <button id="delete">Delete</button>

        <!-- <input type="button" onclick="dopull();" value="Pull"> -->
    </form>


    <div id="img-container" class="text-center">
        <img id="btn1" src="images/design1_thumb.png" alt="Design1" style="cursor: pointer;width:160px;height:160px">
        <img id="btn2" src="images/design2_thumb.png" alt="Design2" style="cursor: pointer;width:160px;height:160px">
        <img id="btn3" src="images/design3_thumb.png" alt="Design3" style="cursor: pointer;width:160px;height:160px">
        <img id="btn4" src="images/design4_thumb.png" alt="Design4" style="cursor: pointer;width:160px;height:160px">
        <img id="btn5" src="images/design5_thumb.png" alt="Design5" style="cursor: pointer;width:160px;height:160px">
        <img id="btn6" src="images/design6_thumb.png" alt="Design6" style="cursor: pointer;width:160px;height:160px">
    </div>
    <div style="position: relative;">
        <img id="rotateLeft" src="rotate_left.png" alt="Rotate Left" style="cursor: pointer;width:100px;height:100px;">
        <img id="rotateRight" src="rotate_right.png" alt="Rotate Right" style="cursor: pointer;width:100px;height:100px">
        <button id="sizeplus" hidden="">Size +</button>
        <button id="sizeminus" hidden="">- Size</button>
        <!-- <button id="rotateRight">Rotate Right</button> -->
    </div>
    <? include_once('bu_js.php'); ?>
</body>

</html>
