const string =`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none ;
}
*::before {
    box-sizing: border-box;
}
*::after {
    box-sizing: border-box;
}
.background {
    position: relative;
    min-height: 72vh;
    background-color: #dfecfe;
}
.bigFace {
    background-color: #81c2f1;
    position: absolute;
    border: 2px solid #293948;
    width: 330px;
    height: 330px;
    left: 50%;
    margin-left: -165px;
    top: 200px;
    border-radius: 50%;
}
.smallFace{
    background-color: #ffffff;
    border: 2px solid #293948;
    height: 260px;
    width: 260px;
    bottom: -2px;
    left: 50%;
    margin-left: -130px;
    position: absolute;
    border-radius: 50%;
}
.eyes{
    background-color: #ffffff;
    border: 2px solid #293948;
    height: 90px;
    width: 75px;
    position: absolute;
    left: 50%;
    margin-left: -37px;
    top: 30px;
    border-radius: 60% 60% 60% 60% / 70% 70% 50% 50%
}
.eyes.left{
    transform: translateX(-36px)rotate(15deg)
}
.eyes.right{
    transform: translateX(36px)rotate(-15deg);
}
.eyesBlack{
    background-color: black;
    position: absolute;
    height: 40px;
    width: 30px;
    border-radius:50%;
    top: 20px;
}
.eyesBlack.left{
    right: 2px;
    transform: rotate(-15deg);
}
.eyesBlack.right{
    left: 2px;
    transform: rotate(15deg);
}
.eyesBlack.left::before{
    content: '';
    display: block;
    background-color: #fbfbfb;
    width: 15px;
    height: 20px;
    border-radius:50%;
    position: absolute;
    right: 5px;
    top: 10px;
}
.eyesBlack.right::before{
    content: '';
    display: block;
    background-color: #fbfbfb;
    width: 15px;
    height: 20px;
    border-radius:50%;
    position: absolute;
    left: 5px;
    top: 10px;
}
.nose{
    position: absolute;
    width: 50px;
    height: 50px;
    border: 2px solid black;
    background-color: #fa5f6b;
    border-radius: 50%;
    left: 50%;
    margin-left: -25px;
    top: 307px;
}
.black{
    position: absolute;
    width: 2px;
    height: 130px;
    background-color: #353638;
    left: 50%;
    margin-left: -1px;
    top: 357px;
}
.mouth{
    position: absolute;
    width: 200px;
    height: 90px;
    border: 2px solid black;
    left: 50%;
    margin-left: -100px;
    border-top: none;
    border-radius: 0 0 50% 50%/0 0 100% 100%;
    top: 400px;
}
.beard{
    position: absolute;
    width: 100px;
    height: 150px;
    left: 50%;
    margin-left: -50px;
    top: 340px;

}
.beard.left{
    transform: translateX(-75px);
}
.beard.right{
    transform: translateX(75px) ;
}
.beard>div{
    margin: 30px 0;
    border-bottom: 2px solid black;
}
.lFirst{
    transform: rotate(15deg);
}
.rFirst{
    transform: rotate(-15deg);
}
.lThird{
    transform: rotate(-10deg);
}
.rThird{
    transform: rotate(10deg);
}
.bellTape {
    position: absolute;
    width: 200px;
    height: 25px;
    border: 2px solid black ;
    left: 50%;
    margin-left: -100px;
    top: 505px;
    border-radius: 50px;
    background-color: #f46773;
}
.bell{
    position: absolute;
    width: 40px;
    height: 40px;
    border: 2px solid black;
    left: 50%;
    margin-left: -20px;
    border-radius: 50%;
    background-color: #f6db84;
    overflow: hidden;
}
.bell .line{
    border-bottom: 2px solid black;
    margin-top: 5px;
}
.bell .circle{
    position: absolute;
    width: 14px;
    height: 14px;
    border: 2px solid black;
    border-radius: 50%;
    left: 50%;
    margin-left: -7px;
    transform: translateY(1px);
}
.bell .circle::after {
    content: '';
    display: block;
    position: absolute;
    height: 20px;
    border: 1px solid black;
    background-color: black ;
    top: 10px;
    left: 4px;
}
@keyframes wave {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(5deg);
    }
    66% {
        transform: rotate(-5deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
.bell:hover{
    transform-origin: 50% 100%;
    animation: wave 300ms infinite linear;
}
`
export default string