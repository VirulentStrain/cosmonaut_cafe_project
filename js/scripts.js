$(function () {
    $("#rearrangeBtn").on('click', function () {
        removeClass()
        let randomNum =  Math.floor(Math.random() * 3);
        if (randomNum === 0) {
            console.log(randomNum)
            $("#image1").addClass('order-first')
            $("#image2").addClass('order')
            $("#image3").addClass('order-last')
        } else if (randomNum === 1) {
            console.log(randomNum)
            $("#image1").addClass('order-last')
            $("#image2").addClass('order-first')
            $("#image3").addClass('order')
        } else if (randomNum === 2) {
            console.log(randomNum)
            $("#image1").addClass('order')
            $("#image2").addClass('order-last')
            $("#image3").addClass('order-first') 
        } 
    function removeClass () {
        $('#image1').removeClass('order')
        $('#image1').removeClass('order-first')
        $('#image1').removeClass('order-last')
        $('#image2').removeClass('order-first')
        $('#image2').removeClass('order-last')
        $('#image2').removeClass('order')
        $('#image3').removeClass('order')
        $('#image3').removeClass('order-first')
        $('#image3').removeClass('order-last')
        console.log('success')
    }
    })
})




/*
const reBtn = document.querySelector('#rearrangeBtn')
const fImage = document.querySelector('#image1')
const sImage = document.querySelector('#image2')
const tImage = document.querySelector('#image3')


reBtn.addEventListener()

function imageRearrange () {

}
*/
