const apparitionMenu = (nomMenu) =>{
    let nom = nomMenu + "-sous";
    console.log(nom);
    let sousMenu = document.getElementById(nom);
    sousMenu.style.opacity = 1;
    sousMenu.style.overflow = "visible";
};

const disparitionMenu = (nomMenu) =>{
    let nom = nomMenu + "-sous";
    console.log(nom);
    let sousMenu = document.getElementById(nom);
    sousMenu.style.opacity = 0;
};

const nom = document.getElementById("quartz");
const nom2 = document.getElementById("quartz-sous");

nom.addEventListener('mouseover', ()=>{apparitionMenu("quartz")});
nom2.addEventListener('mouseover', ()=>{document.getElementById("quartz-sous").style.opacity = 1;
                                        document.getElementById("quartz-sous").style.overflow = "visible"});
nom.addEventListener('mouseout', ()=>{disparitionMenu("quartz")});
nom2.addEventListener('mouseout', ()=>{document.getElementById("quartz-sous").style.opacity = 0;
                                        document.getElementById("quartz-sous").style.overflow = "hidden"});