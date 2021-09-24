const links=document.querySelectorAll(".navLink");

links.forEach((item)=>{
    item.addEventListener("click",()=>
    {
        let el=document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth",block:"start"});
    })
})

const l=document.getElementById("logo");
l.addEventListener("click",()=>
{
    let e=document.getElementById(l.getAttribute("data-link"));
    e.scrollIntoView({behavior:"smooth",block:"start"});
})

const cont=document.getElementById("touch");
cont.addEventListener("click",()=>
{
    let e=document.getElementById(cont.getAttribute("data-link"));
    e.scrollIntoView({behavior:"smooth",block:"start"});
})