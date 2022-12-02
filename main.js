const activeClass = "ativo";

function activeMenu() {
    const tabMenu = document.querySelectorAll('.js-tabMenu li');
    const tabContent = document.querySelectorAll('.js-tabContent section');

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add(activeClass);

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove(activeClass);
            })
            tabContent[index].classList.add(activeClass);
        }

        tabMenu.forEach((img, index) => {
            img.addEventListener('click', () => {
                activeTab(index);
            })
        })
    }
}

activeMenu();

function activeFaq() {
    const accordionList = document.querySelectorAll('.js-accordionList dt');

    if(accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);
        function activeFaqList() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((dt) => {
            dt.addEventListener('click', activeFaqList);
        })
    }
}

activeFaq();


function scrollLinkInterno() {
    const navMenu = document.querySelectorAll('.js-navMenu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })


    }
    navMenu.forEach((internLink) => {
        internLink.addEventListener('click', scrollToSection);
    })
}

scrollLinkInterno();

const sections = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight * 0.6;

function showElements() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0
        console.log(sectionTop)
        if(isSectionVisible) {
            section.classList.add('ativo');
        }
    })
}

window.addEventListener('scroll', showElements);

document.addEventListener("click", function() {
    let elemento = document.querySelector('div#mod');
    if (elemento.innerText === '') {
        elemento.innerText = '   PRESSIONE!!';
    } else {
        elemento.innerText = '   SOLTEI!! , role para baixo';
    }
}




);

document.getElementById('text').addEventListener('blur', ev => {
	const input = ev.target;
	input.value = input.value.toUpperCase();
});

function msg1(){
    alert("CLICADO!");
}


function porCima(obj)
{
 
    obj.innerHTML = "EU SOU O(A) MELHOR ALUNO(A) DE LSW";
}
 
function porFora(obj)
{
 
    obj.innerHTML = "WILLIAM DE SOUSA MOTA";
}

function aperta()
{

    
 var status=document.getElementById("status");
 status.innerHTML="SOLTE O MOUSE!";
}

function solta()
{
 var status=document.getElementById("status");
 status.innerHTML="AVALIAÇÃO CONCLUÍDA COM SUCESSO!";
 
}

