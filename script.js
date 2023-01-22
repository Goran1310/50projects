const loadText = document.querySelector('.loading-text')
const loadH5 = document.querySelector('.loading-h5')
const bg = document.querySelector('.bg')
let load = 0

let int = setInterval(blurring, 30)
function blurring() {

    load ++
    if (load > 99) {
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadH5.style.opacity = scale(load, 0 ,100, 0 , 1)
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load,0,100,10,0)}px)`

    function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers