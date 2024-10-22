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
    <? include_once('assets/js/canvas_js.php'); ?>
</body>

</html>
