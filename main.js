var n = 1

var allButtons = $('.menu > ul > .menuItem')

//按钮点击事件
for (let i = 0; i < allButtons.length; i++){
    $(allButtons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index()
        //console.log(index)
        n = index - 1
        $('.slides').css({
            transform: 'translate(' + -920 * n + 'px)'
        })
        allButtons.eq(n)
            .addClass('active')
            .siblings('.active').removeClass('active')
    })
}

//自动播放
var timeId = setInterval(function(){
    $('.slides').css({
        transform: 'translate(' + -920 * n + 'px)'
    })
    allButtons.eq(n)
            .addClass('active')
            .siblings('.active').removeClass('active')
    n = setN(n)
}, 4000)

function setN(n){
    n += 1
    if(n === 4){
        n = 0
    }
    return n
}

//鼠标移入
$('.gallery').on('mouseenter', function(){
    window.clearInterval(timeId)
})
//鼠标移出
$('.gallery').on('mouseleave', function(){
    timeId = setInterval(function(){
        $('.slides').css({
            transform: 'translate(' + -920 * n + 'px)'
        })
        allButtons.eq(n)
            .addClass('active')
            .siblings('.active').removeClass('active')
        n = setN(n)
    }, 4000)
})

// $('.slides > div:nth-child(1)').addClass('active')
// $('.slides > div:nth-child(2)').addClass('ready')
// $('.slides > div:nth-child(3)').addClass('ready')
// $('.slides > div:nth-child(4)').addClass('ready')

// var n = 1;

// setInterval(function(){
//    makeLeave(getImage(n))
//     .one('transitionend', function(e){
//         makeReady($(e.currentTarget))
//     })
//     makeActive(getImage(n + 1))
//     n += 1
// }, 3000)

// function setN(n){
//     if(n > 4) {
//         n = n % 4
//         if (n === 0) {
//             n = 4
//         }
//     }
//     return n
// }
// function getImage(n) {
//     return $(`.slides > div:nth-child(${setN(n)})`)
// }
// function makeLeave($node){
//     return $node.removeClass('active ready').addClass('leave')
// }
// function makeReady($node){
//     return $node.removeClass('active leave').addClass('ready')
// }
// function makeActive($node){
//     return $node.removeClass('ready leave').addClass('active')
// }
