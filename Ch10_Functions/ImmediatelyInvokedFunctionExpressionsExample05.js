let divs = document.querySelectorAll('div');

// 达不到目的
for (var i = 0; i < divs.length; ++i) {
    divs[i].addEventListener('click', function () {
        console.log(i);
    });
}