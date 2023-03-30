let site = {};

//===============================================
//============== PARALLAX FUN ===================
//===============================================
/* 
SOURCE: https://www.firewatchgame.com/
*/

function updateParallax(event)
{
    var top = this.scrollY;
    var layers = document.getElementsByClassName("parallax");
    var layer, speed, yPos;
    for (var i = 0; i < layers.length; i++) {
        layer = layers[i];
        speed = layer.getAttribute('data-speed');
        var yPos = -(top * speed / 100);
        layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
    }
}
function castParallax() {
	var opThresh = 350;
	var opFactor = 750;
	window.addEventListener("scroll", updateParallax);
}

function dispelParallax() {
	$("#nonparallax").css('display','block');
	$("#parallax").css('display','none');
}






//===============================================
//======== HELPER FUNCTIONS TO CALL =============
//===============================================
site.filterValue = null;
site.current = 0;
site.sortValue = null;
site.sortFunctions = {};
site.sortFunctions["None"] = function()
{
    return 1;
}
site.sortFunctions["Reversed"] = function()
{
    return -1;
}
site.sortFunctions["WIP"] = function()
{
    return 1;
}
site.sortFunctions["Complete"] = function()
{
    return 1;
}

function sort(a)
{
    site.sortValue = a;
    run();
}

function filter(a)
{
    console.log("working")
    site.filterValue = a;
    run();
}

function initDropDownMenus()
{
    var filterOp = options.filter;
    var sortOp = options.sort;
    var container = document.getElementById("dropdown-container");
    if(!container) return;

    var dd_cc1 = document.createElement("div");
    var dd_cc2 = document.createElement("div");
    var dd_h1 = document.createElement("h1");
    var dd_h2 = document.createElement("h1");
    var filterDD = document.createElement("select");
    var sortDD = document.createElement("select");

    container.appendChild(dd_cc1);
    container.appendChild(dd_cc2);
    dd_cc1.appendChild(dd_h1);
    dd_cc2.appendChild(dd_h2);
    dd_cc1.appendChild(filterDD);
    dd_cc2.appendChild(sortDD);

    dd_h1.innerHTML = "filter";
    dd_h2.innerHTML = "sort";
    dd_cc1.classList.add("dropdown-container");
    dd_cc2.classList.add("dropdown-container");
    filterDD.addEventListener('change', function(){
        filter(this.value);
    }, false)
    sortDD.addEventListener('change', function(){
        sort(this.value);
    }, false)

    for(let i = 0; i < filterOp.length; i++)
    {
        var op = document.createElement("option");
        filterDD.appendChild(op);
        op.innerHTML = filterOp[i];
    }

    for(let i = 0; i < sortOp.length; i++)
    {
        var op = document.createElement("option");
        sortDD.appendChild(op);
        op.innerHTML = sortOp[i];
    }

    site.sortValue = sortDD.value; 
    site.filterValue = filterDD.value;
}

//===============================================
//========POPULATE DATABASE FUNCTION=============
//===============================================
function run()
{
    populateFullDatabase(site.sortFunctions[site.sortValue], 
        function(element, index) 
        {
            if (site.filterValue == 'None')
            {
                return true;
            }
            let ele = element.tags.includes(site.filterValue);
            return ele;
        });
}

function populateFullDatabase(sort, filter){
    const projectList = document.getElementById("project-list");
    projectList.replaceChildren();

    var filtered = projectData;
    if(filter)
    {
        filtered = projectData.filter(filter);
    }
    if(sort) {
        filtered.sort(sort);
    }

    projectList.classList.add("project-container");
    filtered.forEach((project) => {
        makeProject(projectList, project)
    });
}

function makeProject(parent, project)
{
    const projectDiv = document.createElement("div");
    projectDiv.id = "id" + site.current++;
    projectDiv.classList.add("project");
    parent.appendChild(projectDiv);

    addImageTest(projectDiv, project);
}

function addText(parent, project)
{
    const title = document.createElement("h2");
    title.textContent = project.title;
    title.classList.add("header");
    parent.appendChild(title);

    const description = document.createElement("p");
    description.textContent = project.description;
    description.classList.add("p");
    parent.appendChild(description);
}

function addImageTest(parent, project)
{
    const container = document.createElement("div");
    const image = document.createElement("img");
    const popup = document.createElement("div");
    const link = document.createElement("a");
    const title = document.createElement("h1");
    const description = document.createElement("p");
    const tagContainer = document.createElement("div");
    
    parent.appendChild(container);
    container.appendChild(image);
    container.appendChild(popup);
    popup.appendChild(link);
    link.appendChild(title);
    link.appendChild(description);
    link.appendChild(tagContainer);
    
    tagContainer.classList.add("tag_container");
    container.classList.add("img_container");
    image.src = project.image;
    popup.classList.add("img_popup");
    link.target="_blank";
    link.rel="noopener noreferrer";
    title.textContent = project.title;
    description.innerHTML = project.description;

    for(let i = 0; i < project.tags.length; i++)
    {
        const tag = document.createElement("p");
        tag.innerHTML = project.tags[i];
        tagContainer.appendChild(tag);
    }

    if(project.page !== "")
    {
        link.href = project.page;
    } 
}

function startSite() {

    initDropDownMenus();
    run();

	var platform = navigator.platform.toLowerCase();
	var userAgent = navigator.userAgent.toLowerCase();
	if ( platform.indexOf('ipad') != -1  ||  platform.indexOf('iphone') != -1 ) 
	{
		dispelParallax();
        return;
	}
	updateParallax();
    castParallax();
}

document.body.onload = startSite();
