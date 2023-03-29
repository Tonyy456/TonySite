let currentSortFunc = null;
let sortValue = null;
let filterValue = null;
let current = 0;
//===============================================
//======== HELPER FUNCTIONS TO CALL =============
//===============================================
function setSortFunc()
{ 
    switch(sortValue) {
        case 'Reversed':
            currentSortFunc = function(){ return -1; };
            break;
        case 'WIP':
            currentSortFunc = function(){ return 1; };
            break;
        case 'Complete':
            currentSortFunc = function(){ return 1; };
            break;
        default:
            currentSortFunc = null;
            break; }
}

function sort(a)
{
    sortValue = a;
    setSortFunc();
    run();
}

function filter(a)
{
    filterValue = a;
    run();
}

function initialize()
{
    initDropDown();
    run();
}

function initDropDown()
{
    var filterOp = options.filter;
    var sortOp = options.sort;
    var container = document.getElementById("dropdown-container");
    if(!container) return;

    var dd_cc1 = document.createElement("div");
    container.appendChild(dd_cc1);
    var dd_cc2 = document.createElement("div");
    container.appendChild(dd_cc2);
    var dd_h1 = document.createElement("h1");
    dd_cc1.appendChild(dd_h1);
    dd_h1.innerHTML = "filter";
    var dd_h2 = document.createElement("h1");
    dd_cc2.appendChild(dd_h2);
    dd_h2.innerHTML = "sort";
    var filterDD = document.createElement("select");
    dd_cc1.appendChild(filterDD);
    var sortDD = document.createElement("select");
    dd_cc2.appendChild(sortDD);

    dd_cc1.classList.add("dropdown-container");
    dd_cc2.classList.add("dropdown-container");

    filterDD.onchange = "filter(this.value)";
    sortDD.onchange = "sort(this.value)";

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
    sortValue = sortDD.value; 
    setSortFunc();
    filterValue = filterDD.value;
}
/*
 *
 *
const options = 
{
    filter: ["C#", "Javascript", "WebGL", "GLSL"],
    sort: ["None", "Reversed", "WIP", "Complete"], 
}
 *     
 *     <div id="dropdown-container" class="dropdown-group">
        <div class="dropdown-container">
            <h1> Filter: </h1>
            <select id="filter" class="filter" onchange="filter(this.value)"> 
                <option> None </option>
                <option> C# </option>
                <option> Javascript </option>
                <option> Unity </option>
            </select>
        </div>
        <div class="dropdown-container">
            <h1> Sort: </h1>
            <select id="sort" class="filter" onchange="sort(this.value)"> 
                <option> None </option>
                <option> Reversed </option>
                <option> WIP </option>
                <option> Complete </option>
            </select>
        </div>
    </div>
 *
 */
//===============================================
//========POPULATE DATABASE FUNCTION=============
//===============================================
function run()
{
    populateFullDatabase(currentSortFunc, 
        function(element, index) 
        {
            if (filterValue == 'None')
            {
                return true;
            }
            let ele = element.tags.includes(filterValue);
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
    projectDiv.id = "id" + current++;
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
    parent.appendChild(container);
    container.classList.add("img_container");

    const image = document.createElement("img");
    container.appendChild(image);
    image.src = project.image;

    const popup = document.createElement("div");
    container.appendChild(popup);
    popup.classList.add("img_popup");
    const link = document.createElement("a");
    link.target="_blank";
    link.rel="noopener noreferrer";
    popup.appendChild(link);

    const title = document.createElement("h1");
    link.appendChild(title);
    title.textContent = project.title;

    const description = document.createElement("p");
    link.appendChild(description);
    description.innerHTML = project.description;

    const tagContainer = document.createElement("div");
    tagContainer.classList.add("tag_container");
    link.appendChild(tagContainer);

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
