const sideMenu = document.querySelector("#Sidelinks");
sideMenu.style.left = "-999%";
function hamToggle(x) {
  if (sideMenu.style.left == "0%") {
    sideMenu.style.left = "-999%";
    x.innerHTML = ` <i class="fa-solid fa-bars"></i>`;
  } else {
    sideMenu.style.left = "0%";
    x.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  (() => {
    const faqSection = document.querySelector(".faq-section");
    for (let i = 0; i < FAQs.length; i++) {
      const element = `<div class="faq">
            <div onclick="faqtoggle(this)" class="" id="${FAQs[i].id}">
                <h3>${FAQs[i].question}</h3>
                <i class="fa fa-caret-down"></i></div><div class="">${FAQs[i].answer}</div></div>`;
      faqSection.innerHTML += element;
    }
  })();

  (() => {
    const langSection = document.querySelector("#languages");
    for (let i = 0; i < languages.length; i++) {
      const element = ` <div>
            <img src="${languages[i].imgSrc}" alt="">
            <h3 style="color:${languages[i].color}">${languages[i].name}</h3>
        </div>`;
      langSection.innerHTML += element;
    }
  })();
  
  (() => {
    const testiSection = document.querySelector(".testimonial-name-list");
    for (let i = 0; i < testimonials.length; i++) {
      const element = `<div onclick="testi_show(this)" id="${testimonials[i].id}">
            <h3>${testimonials[i].name}</h3>
            <span>${testimonials[i].date}</span>
            <span>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                ${testimonials[i].star}
            </span>
        </div>`;
      testiSection.innerHTML += element;
    }
    document.querySelector("#P1").style.color = "#F2BB13";
    testi_show(document.querySelector("#P1"));
  })();
  (()=>
  {
    const navs = document.querySelectorAll('a[href^="#"]');
    const sections = document.querySelectorAll('main > div');
    window.addEventListener('scroll',()=>
    {
      current = '';
      sections.forEach(i=>{
        const secTop = i.offsetTop;
        const secHeight = i.clientHeight;
        if (scrollY >= (secTop - secHeight/3)) {
          current = i.getAttribute('id');
        }
      });
      const navbar= document.querySelector('nav');
      const backtop= document.querySelector('#backtotop');
      backtotop.style.display = 'none';
      navbar.style.height = '10vh';
      if (scrollY > 1250) {
        navbar.style.height = '8vh';
        backtotop.style.display = 'flex';
      }
      else
      {
        navbar.style.height = '10vh';
        backtotop.style.display = 'none';
      }
      navs.forEach(j=>{
        if (j.getAttribute('href').slice(1) !== current) {
          if (j.classList.contains('active')) {
            j.classList.remove('active');
          }
        }
        else
        {
          j.classList.add('active');
        }
      });
    });
  })();
  (()=>
{
    if (Users.length!==0) {
        const s = document.querySelector('#mainHeroStartButton');
        s.innerHTML = 'Continue';
    }
})();
  const hero = document.querySelector("#hero");
  hero.addEventListener("mousemove", (e) => {
    const heroH1 = document.querySelector("#hero h1");
    if (e.clientX <= 500) {
      heroH1.style.animation = `h1text ${
        3 + 1 / (e.clientX % 500)
      }s linear infinite`;
    } else {
      heroH1.style.animation = `h1text2 ${
        3 + 1 / (e.clientX % 500)
      }s linear infinite`;
    }
  });
});
function faqtoggle(x) {
  const faqs = document.querySelectorAll(".faq");
  if (x.className === "active-faq-question") {
    x.className = "";
    x.nextElementSibling.className = "";
    x.children[1].style.transform = "";
  } else {
    x.className = "active-faq-question";
    x.nextElementSibling.className = "active-faq-answer";
    x.children[1].style.transform = "rotate(180deg)";
  }
  faqs.forEach((y) => {
    if (
      y.children[0].className === "active-faq-question" &&
      y != x.parentNode
    ) {
      y.children[0].className = "";
      y.children[1].className = "";
    }
  });
}
let testi_show = (x) => {
  testimonials.forEach((v) => {
    if (v.id === x.id) {
      document.querySelector("#testimonial-msg-show").innerHTML = v.msg;
      document.querySelector("#testimonial-pic-show > img").src = v.img;
      document.querySelector("#testimonial-pic-show > div > h3").innerHTML =
        v.name;
      document.querySelector("#testimonial-pic-show > div > p").innerHTML =
        v.profession;
    }
  });
  x.style.color = "#F2BB13";
  const testinames = document.querySelectorAll(".testimonial-name-list >div");
  testinames.forEach((u) => {
    if (u.id !== x.id) {
      u.style.color = "white";
    } else {
      x.style.color = "#F2BB13";
    }
  });
};
let closePopup1 = () =>
{
    const p =document.querySelector('.popup1')
        p.style.display = "none";
}
let showPopup1 = () =>
{
    const p =document.querySelector('.popup1')
        p.style.display = "flex";
}

let closePopup2 = () =>
{
    const p =document.querySelector('.popup2')
        p.style.display = "none";
}
let contact_submit=()=>{
    const name =document.getElementById('nameInContact').value;
    const email =document.getElementById('emailInContact').value;
    const msg =document.getElementById('textareaInContact').value;
    const p =document.querySelector('.popup2');
    if (!(name==="" || email==="" || msg===""))
    {
      console.log("sended");
        Email.send({
            Host : "smtp.gmail.com",
            Username : "wowlearnbyspark@gmail.com",
            Password : "",
            To : 'awaisoem@gmail.com',
            From : "wowlearnbyspark@gmail.com",
            Subject : `${name} is contacted you on WOWlearn`,
            Body : `${name}'s email is ${email} and msg is "${msg}"`
        }).then(
            p.style.display = 'flex'
        );
    }
    else
    {
        alert('Please fill all fields');
    }
}
