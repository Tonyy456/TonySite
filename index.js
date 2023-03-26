/*
 * Function that adds all the projects into the page
 */


function populateFullDatabase(){
  const projectList = document.getElementById("project-list");
  projectList.classList.add("project-container");
  console.log("Made it here");
  projectData.forEach((project) => {
    populateProject(projectList, project)
  });
}

/*
 * Add a single project to div parent.
 */
function populateProject(parent, project){
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project-unit");

  const title = document.createElement("h2");
  title.textContent = project.title;
  title.classList.add("project-header");
  projectDiv.appendChild(title);

  const description = document.createElement("p");
  description.textContent = project.description;
  description.classList.add("project-p");
  projectDiv.appendChild(description);

  const link = document.createElement("a");
  link.href = project.page;
  link.classList.add("project-a");
  projectDiv.appendChild(link);

  const img = document.createElement("img");
  img.src = project.image;
  img.classList.add("project-image");
  link.appendChild(img);

  parent.appendChild(projectDiv);
}

function populateMedia(project, media){
  if (media.type === "picture"){
    addPicture(project, media)
  } else if (media.type === "youtube"){
    addVideo(project, media)
  } else { } 
}

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
