/*
 * Function that adds all the projects into the page
 */


function populateFullDatabase(){
  const projectList = document.getElementById("project-list");
  projectList.classList.add("project-container");
  projectData.forEach((project) => {
    makeProject(projectList, project)
  });
}

function makeProject(parent, project)
{
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");
  parent.appendChild(projectDiv);

  addText(projectDiv, project);
  addImage(projectDiv, project);
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

function addImage(parent, project)
{
  const wrap = document.createElement("div");
  wrap.classList.add("img__wrap")

  const img = document.createElement("img");
  img.src = project.image;
  img.classList.add("image");

  const link = document.createElement("a");
  link.classList.add("a");

  parent.appendChild(wrap);
  wrap.appendChild(link);
  link.appendChild(img);

  if(project.page !== "")
  { // if link then, div > div > div > text;
    link.href = project.page;
    img.classList.add("image-link");

    const desc = document.createElement("div");
    link.appendChild(desc);
    desc.classList.add("img__description");

    const text = document.createElement("p");
    desc.appendChild(text);
    text.innerHTML = project.page;
  }
  else 
  {
    img.classList.add("image-nolink");
  }
}


/*
function addVideo(project, media){
    const mediaElement = document.createElement("iframe");
    mediaElement.classList.add("centered-div");
    mediaElement.src = media.src.replace("youtube","youtube-nocookie");
    mediaElement.width = 600;
    mediaElement.height = 600;
    mediaElement.frameborder="0";
    mediaElement.allowfullscreen = true;
    mediaElement.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    project.appendChild(mediaElement);
}

function setCookies(){
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    document.cookie = cookie + "; SameSite=None; Secure";
  }
}
*/
