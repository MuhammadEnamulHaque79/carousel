const imgCollection =[
    'images/nature-1.jpg',
    'images/nature-2.jpg',
    'images/nature-3.jpg',
    'images/nature-4.jpg',
    'images/nature-5.jpg',
    'images/nature-6.jpg',
    'images/nature-7.jpg',
    'images/nature-8.jpg',
    'images/nature-9.jpg',
    'images/nature-10.jpg',
    'images/nature-11.jpg',
    'images/nature-12.jpg',
    'images/nature-13.jpg',
    
];

let imgIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval(() =>{
    if(imgIndex === imgCollection.length){
        imgIndex = 0;
    }
    const imgUrl = imgCollection[imgIndex];
    imgElement.setAttribute('src',imgUrl);
    console.log(imgIndex,imgUrl);
    imgIndex++;
},1000);

