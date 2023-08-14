

function handleEvents(e) {
e.preventDefault();

const body = document.querySelector('body');

const h1Dislike = document.getElementById("remove");
h1Dislike.remove();

const h1New = document.createElement('h1');
h1New.append('Webpage Recreation Practice');
body.append(h1New);

const p = document.createElement('p');
p.append('The HTML of this webpage was created with JS.');
body.append(p);

const img = document.createElement('img');
img.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
img.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
img.setAttribute("style", "width:50%");
body.append(img);

const h1NewToo = document.createElement("h1");
h1NewToo.append("Facts about the Multicolored Tanger");
body.append(h1NewToo);

const ul = document.createElement("ul");
ul.setAttribute("id", "facts-list");
body.append(ul);
const liOne = document.createElement("li");
liOne.append("It is endemic to the mountains of Colombia.");
const liTwo = document.createElement("li");
liTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
ul.append(liOne, liTwo);

const h2New = document.createElement('h2');
h2New.append('Source');
body.append(h2New);

const a = document.createElement('a');
a.setAttribute('href','https://en.wikipedia.org/wiki/Multicoloured_tanager');
a.append('Wikipedia');
body.append(a);
}

window.addEventListener('load', handleEvents);