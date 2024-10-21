// this is a way of targeting elements of the html


const accessKey="f2HAaNIpvjzcRjoff_a4563j8oKWkmyKUJsKmdLqz2o";
const collections=document.getElementById("collection");
const inputbtn=document.getElementById("inputs");
const resultbox=document.getElementById("resultss");
const moreitems=document.getElementById("more");


let keyword="";
let page=1;


async function searchImage() {
    keyword=inputbtn.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response=await fetch(url);
    const data=await response.json();
      
    const results=data.results;

    if(page===1){
        resultbox.innerHTML="";
    }
     
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href =result.links.html;
        imageLink.target="_blank";
          

        imageLink.appendChild(image);
        resultbox.appendChild(imageLink);

    })
    moreitems.style.display="block";
    
}
   

collections.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImage()
})


moreitems.addEventListener("click",()=>{
    page++;
    searchImage();
})