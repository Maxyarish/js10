const root = document.getElementById('root');
const limit = 3;
const container = document.createElement('section');
container.classList.add('container');
root.append(container);

fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`)
.then((response) => response.json())
.then((dataArray) => {
    console.table(dataArray);  
    const images=dataArray.map((element) => {
        const img = document.createElement('img'); 
        img.src = element.url;     
        img.classList.add('img')    
        img.addEventListener('click',()=>{
            const bigImgWrapper=document.createElement('div');
            bigImgWrapper.classList.add('bigImgWrapper');
            const bigImg=document.createElement('img');
            bigImg.src=element.url;
            bigImgWrapper.append(bigImg);
root.append(bigImgWrapper);
close.addEventListener('click',()=>{
    bigImgWrapper.remove();
})
        })                      
       return img;          
    });
    container.append(...images);
})
.catch((error) => {
    console.log(error);
});
