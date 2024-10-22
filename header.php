<? include_once('common.php');?>
<!DOCTYPE html>
<html>
<head>
    <title><?=$site_name?></title>
    <link href="images/logo.png" rel="icon" />
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <script src="keyboard.js?ver=<?=$ver?>"></script>
    <link rel="stylesheet" href="keyboard.css?ver=<?=$ver?>">
    <link rel="stylesheet" href="<?= $site_url ?>assets/css/font-awesome.css">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css?ver=<?=$ver?>" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <link rel="stylesheet" href="assets/css/style.css?ver=<?=$ver?>" />
</head>
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
