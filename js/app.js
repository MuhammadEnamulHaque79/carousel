const imgCollection=[
    'nature-1.jpg',
    'nature-2.jpg',
    'nature-3.jpg',
    'nature-4.jpg',
    'nature-5.jpg',
    'nature-6.jpg',
    'nature-7.jpg',
    'nature-8.jpg',
    'nature-9.jpg',
    'nature-10.jpg',
    'nature-11.jpg',
    'nature-12.jpg',
    'nature-13.jpg',
    'nature-14.jpg',
    'nature-15.jpg',    
]
let imgIndex = 0;
setInterval( ()=>{
    console.log(imgCollection[imgIndex]);
    imgIndex++;
},1000);
