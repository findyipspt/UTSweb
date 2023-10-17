
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('slide');
});

const btn = document.getElementById('set')
const kata = document.getElementById('textInput');
const ul = document.querySelector('.warna ul');
const li=document.querySelectorAll('.warna li');
const clr= document.getElementById('clr');
const footer=document.getElementById('footer');

btn.addEventListener('click',function() { 
  let tampung = kata.value;
  if(tampung=="blue" ){
        li[1].style.backgroundColor = tampung;
      }
  else if(tampung=="red" ){
        li[0].style.backgroundColor = tampung;
      }
  else if(tampung=="yellow" ){
        li[2].style.backgroundColor = tampung;
      }
  else if(tampung=="purple" ){
        li[3].style.backgroundColor = tampung;
      }
  else if(tampung=="pink" ){
        li[4].style.backgroundColor = tampung;
      }
  else{
      const liBaru = document.createElement("LI");
      const isiLi = document.createTextNode(tampung);
      liBaru.appendChild(isiLi);

      ul.insertBefore(liBaru,ul.lastChild);
  }
});

clr.addEventListener('click', function(){
  let tampung = kata.value;
  const liBaru = document.createElement("LI");
      const isiLi = document.createTextNode(tampung);
      liBaru.appendChild(isiLi);
      ul.insertBefore(liBaru,ul.lastChild);
});

footer.addEventListener('click',function () {
  ft.style.display = "block";
});
