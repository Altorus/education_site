$(document).ready(() => {
    $('.hamburger').click(() => {
        $('.container.mobile-header nav').toggleClass('active')
        $('.hamburger').toggleClass('is-active')
    })

})