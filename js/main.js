'use strict';

{
    const images = [
        'houseimage/house1.jpeg',
        'houseimage/house2.jpeg',
        'houseimage/house3.jpeg',
        'houseimage/house4.jpeg',
        'houseimage/house5.jpeg',
        'houseimage/house6.jpeg',
        'houseimage/house7.jpeg',
    ];
    let currentIndex = 0;

    const mainImage = document.getElementById('main');
    mainImage.src = images[currentIndex];

    images.forEach((image, index) => {  //ここで引数を2つにするとimageが何番目であるかを2番目の引数であるindexで表現できる
        const img = document.createElement('img');
        img.src = image;    //まずはimg要素を生成

        const li = document.createElement('li');
　　　　　if (index === currentIndex) {
            li.classList.add('current');
         }
         li.addEventListener('click', () => {
            mainImage.src = image;  //サムネクリックするとメインがそれになる
            const thumbnails = document.querySelectorAll('.thumbnails > li');
            thumbnails[currentIndex].classList.remove('current');  //まず外して
            currentIndex = index;   //変数更新 
            thumbnails[currentIndex].classList.add('current');  //付け直す

         });

        li.appendChild(img);　　　//imgがliの子要素
        document.querySelector('.thumbnails').appendChild(li); //これでimagesの配列の数分だけ追加される
         });

        const next = document.getElementById('next');
        next.addEventListener('click', () => {
            let target = currentIndex + 1;
            if (target === images.length) {
                target = 0;
            }
            document.querySelectorAll('.thumbnails > li')[target].click();
          });

        const prev = document.getElementById('prev');
        prev.addEventListener('click', () => {
            let target = currentIndex - 1;
            if (target < 0) {
                target = images.length - 1;
            }
            document.querySelectorAll('.thumbnails > li')[target].click();
          });

          let TimeoutId    //止めたり動かしたりするときは返り値として変数必要

          function playSlideshow() {
              TimeoutId = setTimeout(() => {
                  next.click();
                  playSlideshow();
              }, 1000);
          }

          let isPlaying = false;

          const play = document.getElementById('play');
          play.addEventListener('click', () => {
              if (isPlaying === false) {
                  playSlideshow();
                  play.textContent = 'Pause';
              }　else {
                  clearTimeout(TimeoutId);
                  play.textContent = 'Play';
              }
               isPlaying = !isPlaying;  //否定の演算子による、値の反転
            });   

}