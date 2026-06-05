const student = [
{
  last: "Timey",
  first: "Tyler"
},
{
  last: "Jackson",
  first: "Daniel"
},
{
  last: "McClure",
  first: "Eldon"
}];

let container = document.querySelector('#student_container');

student.forEach(function(item){
  let name = document.querySelector('div');
  name.className= 'format'

  // template literal, interpolation expressions (template literal placeholders)
  let html = `
  <p class = 'details'>${item.first}</p>
  <p class = 'details'>${item.last}</p>`;

  name.innerHTML = html;

  container.appendChild(name);
})