var bookmarkName =document.getElementById("bookmarkName");
var bookmarkURL  =document.getElementById("bookmarkURL");
console.log(bookmarkName.value);

var websiteArr;
if (JSON.parse( localStorage.getItem("myWebsites")==null))
{
    websiteArr=[];

}
else
{
    websiteArr=JSON.parse( localStorage.getItem("myWebsites"));
    showProcut();


}
function addProcut()
{
    var website = 
    {
        name:bookmarkName.value,
        url :bookmarkURL.value,
    }
    if( bookmarkName.value==null ||bookmarkURL.value )
    websiteArr.push(website);

   clear();
   showProcut();
    localStorage.setItem("myWebsites",JSON.stringify(websiteArr));
}

function showProcut()
{
    
    var cartona="";
    for(var i=0 ;i<websiteArr.length;i++)
    {
        cartona+=    `<div class="webvisit  py-4 my-1 d-flex align-items-center px-2 ">
        <h2  class="col-md-4">`+websiteArr[i].name+`</h2>
        <div class="buttons">
        <a class="btn btn-info mx-1 my-3 px-3" href="`+websiteArr[i].url+` " target="_blank">Visit</a>
        <button class="btn btn-danger my-3 px-3" onclick="deleteProduct(`+i+`)" >Delete</button>
        </div>
    </div>
    `
   console.log( websiteArr[i].url);
    }

    document.getElementById("webSaved").innerHTML=cartona;
    
}


function clear()
{
    bookmarkName.value ="";
    bookmarkURL .value="";
}

function deleteProduct (index)
{
    websiteArr.splice(index,1);
    localStorage.setItem("myWebsites",JSON.stringify(websiteArr));
    showProcut();
}

