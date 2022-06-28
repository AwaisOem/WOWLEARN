const sec_page= document.querySelector('section');
const blog_page= document.querySelector('#blogs');
const events_page= document.querySelector('#events');
const sec_btn= document.querySelector('#home_btn');
const blog_btn= document.querySelector('#blog_btn');
const event_btn= document.querySelector('#event_btn');
blog_page.style.display = 'none';
events_page.style.display = 'none';
let home_click = ()=>{
    sec_btn.style.color = '#F2BB13';
    blog_btn.style.color = 'white';
    event_btn.style.color = 'white';
    sec_page.style.display = 'flex';
    blog_page.style.display = 'none';
    events_page.style.display = 'none';
}
const langMenu = document.querySelector('.lang-options');
langMenu.style.top = '-999%';
let language_click=x=>{
    if(langMenu.style.top === '-999%')
    {
        langMenu.style.top = '7vh';
        x.children[0].className = 'fa-solid fa-caret-up';
    }
    else
    {
        langMenu.style.top = '-999%';
        x.children[0].className = 'fa-solid fa-caret-down';
    }
}
let event_click = ()=>{
    sec_btn.style.color = 'white';
    blog_btn.style.color = 'white';
    event_btn.style.color = '#F2BB13';
    sec_page.style.display = 'none';
    blog_page.style.display = 'none';
    events_page.style.display = 'flex';
}
let blog_click = ()=>{
    sec_btn.style.color = 'white';
    blog_btn.style.color = '#F2BB13';
    event_btn.style.color = 'white';
    sec_page.style.display = 'none';
    blog_page.style.display = 'flex';
    events_page.style.display = 'none';
}
(()=>{

    const blog_section= document.querySelector('#blog-section');
    const blog_height= document.querySelector('#blogs');
    for (let i = 0; i < blogs.length; i++) {
        let blgstr = `<div id="${blogs[i].id}" class="blog">
        <h4>${blogs[i].date}</h4>
        <h1>${blogs[i].title}</h1>
        <p>${blogs[i].content}</p>
        </div>`;
        blog_section.innerHTML += blgstr;
    }
})();

(()=>
        {
            const languagesNamePutting1 = document.querySelector(".lang-options"); 
            const languagesNamePutting2 = document.querySelector(".langInNav-options");
            for (let i = 0; i < langs.length; i++) {
                const element = langs[i];
                languagesNamePutting1.innerHTML += `<a onclick="Language_selection_from_menu(this)" id="l${i}">${element}</a>`;
                languagesNamePutting2.innerHTML += `<a onclick="Language_selection_from_menu(this)" id="l${i}">${element}</a>`;
            }
        })();
(()=>{
    const event_section= document.querySelector('#event-box');
    const event_height= document.querySelector('#events');
    let h=150;
    for (let i = 0; i < events.length; i++) {
        let evtstr = 
        `<div class="event" id="${events[i].id}">
        <div class="event-img" style='background-image: url(${events[i].imgUrl})'></div>
        <div class="event-content">
            <div>
                <h2>${events[i].title}</h2>
                <div>
                    <h3>${events[i].participants} participants</h3>
                    <h3>${events[i].endDate}</h3>
                </div>
            </div>
            <div>
                <p>${events[i].content}</p>
                <button>JOIN</button>
            </div>
        </div>
    </div>`;
        event_section.innerHTML += evtstr;
        if (i >= 2) {
                h+=100;
                event_height.style.height = `${h}vh`;
        }
    }
})();
const noti= document.querySelector('.noti');
const notifications= document.querySelector('.notifications');
notifications.style.display = "none";
noti.addEventListener('click',()=>
{

    if (notifications.style.display == "flex") {
        notifications.style.display = "none";
    }
    else
    {
        notifications.style.display = "flex"
    }
    
});
const profMenu = document.querySelector('.prof-options');
profMenu.style.top = '-999%';
function prof_click(x)
{
    if(profMenu.style.top === '-999%')
    {
        profMenu.style.top = '7vh';
        x.children[0].className = 'fa-solid fa-caret-up';
    }
    else
    {
        profMenu.style.top = '-999%';
        x.children[0].className = 'fa-solid fa-caret-down';
    }
}
const profMenuInNav = document.querySelector('.profInNav-options');
const langMenuInNav = document.querySelector('.langInNav-options');
profMenuInNav.style.display = 'none';
langMenuInNav.style.display = 'none';
function profInNav_click(x)
{
    if(profMenuInNav.style.display === 'none')
    {
        profMenuInNav.style.display = 'flex';
        x.style.color = '#252E38';
        x.style.backgroundColor = '#F2BB13'
        x.children[0].className = 'fa-solid fa-caret-up';
    }
    else
    {
        x.style.color = 'white';
        x.style.backgroundColor = '#252E38';
        profMenuInNav.style.display = 'none';
        x.children[0].className = 'fa-solid fa-caret-down';
    }
}
function langInNav_click(x)
{
    if(langMenuInNav.style.display === 'none')
    {
        langMenuInNav.style.display = 'flex';
        x.style.color = '#252E38';
        x.style.backgroundColor = '#F2BB13'
        x.children[0].className = 'fa-solid fa-caret-up';
    }
    else
    {
        x.style.color = 'white';
        x.style.backgroundColor = '#252E38';
        langMenuInNav.style.display = 'none';
        x.children[0].className = 'fa-solid fa-caret-down';
    }
}
const SideNav = document.querySelector('.SideNav');
SideNav.style.left='-999%'
function changeName(){
    ChangeUserName(prompt('Enter New User Name:'),currentUser);
    NameUpdate(currentUser);
}
function resetClick()
{
    resetProgress(current,currentUser);
    StatsUpdate();
}
function resetAllClick()
{
    resetAll(currentUser);
    StatsUpdate();
}
function deleteaccount()
{
    if (confirm('Are you sure you want to delete?')) {
        deleteUser(currentUser);
  console.log(Users.length);
        
        if (Users.length == 0) {
            currentUser = -1;
            console.log(Users.length);

            window.location.href = './index.html';
        }
        else
        { 
            currentUser = 0;
            AllDataFiller(currentUser);
        }
    }
}
function switchAccount(){
    if (++currentUser >= Users.length) {
        currentUser = 0;
    }
    AllDataFiller(currentUser);
}

function ham_click(x){
    if (SideNav.style.left==='-999%') {
        SideNav.style.left='0'
        x.innerHTML = '<i class="fa fa-close"></i>';
    }
    else
    {
        SideNav.style.left='-999%'
        x.innerHTML = '<i class="fa fa-bars"></i>';
    }
}
function claimRewards()
{
    const PRC= document.querySelector('.popup-reward-content');
    const PBU= document.querySelector('#progressBarUncompleted');
    PBU.value = "1";
    PRC.innerHTML = `<h5 style="color:rgb(34, 177, 34);margin:10px 60px;">Quest completed, Congradulations</h5>`;
    create_notification("Congradulations","You are Doing Well Keep it up and best of luck for your learnig journey",false);
    console.log(++ Users[currentUser].score.progress[Number(current.slice(1))]);
    StatsUpdate();
    if (Users[currentUser].score.progress[Number(current.slice(1))] >=languageData[Number(current.slice(1))].NumberOflevels-1) {
        create_notification("Completed","You Done it. We are very proud of you.",false);
        show_complted_popup();
    }
}
function show_complted_popup()
{
    const CPU = document.querySelector('.completed_popup');
    CPU.style.display = 'flex';
}
const H1ForLang = document.querySelector('h1[data-lang]');
H1ForLang.innerHTML = `You Completed ${languageData[current.slice(1)].languageName}`;
// notifications.addEventListener('mouseenter',()=>
// {
//     notifications.style.display = "flex";
    
// });
// noti.addEventListener('mouseout',()=>
// {
    //     console.log('mouseout');
//     notifications.style.display = "none";
// });
// notifications.addEventListener('mouseout',()=>
// {
//     notifications.style.display = "none";
// });
let PopulateBySvgs= (levelComp,total)=>
{
    const grid= document.querySelector('.grid');
    grid.innerHTML = `<div id="WEL">
    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="71.049" viewBox="0 0 66 71.049" onclick="welcome_popup_open()">
        <defs>
            <linearGradient id="linear-gradient" x1=".5" x2=".5" y2="1"
                gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#f9b502" />
                <stop offset="1" stop-color="#ef9f08" />
            </linearGradient>
            <clipPath id="clip-_02_YELLOWXP">
                <path d="M0 0h66v71.049H0z" />
            </clipPath>
        </defs>
        <g id="_02_YELLOWXP" data-name="02_YELLOWXP" clip-path="url(#clip-_02_YELLOWXP)">
            <g id="violetXP" transform="translate(-.58 -.677)">
                <path id="discount-star_copie_6" data-name="discount-star copie 6"
                    d="M40.591 68.878a2.571 2.571 0 01-1.175-.284L33 64.77l-6.45 3.825a2.585 2.585 0 01-3.35-.895l-3.926-6.064-6.943.039a3.923 3.923 0 01-3.1-3.095v-7.22L2 47.233v-7.221l3.572-2.076L2 31.759v-7.221l7.247-.286.361-7.209A2.581 2.581 0 0112.06 14.6l7.22-.361 3.926-6.063a2.585 2.585 0 013.348-.9l6.433 3.291 6.433-3.29a2.585 2.585 0 013.347.9l3.926 6.063 7.219.361a2.581 2.581 0 012.451 2.447l.361 7.209 7.271 1.317v6.19l-3.6 6.177 3.6 2.076v7.221l-7.234 4.122v7.221a3.934 3.934 0 01-3.1 3.095l-6.974-.038-3.926 6.062a2.584 2.584 0 01-2.17 1.178z"
                    transform="translate(0 .264)" fill-rule="evenodd" fill="#ea8c01" />
                <path id="discount-star_copie" data-name="discount-star copie"
                    d="M40.591 63.877a2.578 2.578 0 01-1.175-.283L32.984 60.3l-6.433 3.291A2.585 2.585 0 0123.2 62.7l-3.638-6.025h-7.23a3.923 3.923 0 01-3.1-3.095v-7.22L3.174 42.7a2.577 2.577 0 01-.895-3.341l3.293-6.425-3.293-6.423a2.577 2.577 0 01.895-3.341l6.059-3.632v-7.222a3.923 3.923 0 013.1-3.095l6.946.013 3.926-6.063a2.585 2.585 0 013.348-.9l6.433 3.292 6.433-3.292a2.585 2.585 0 013.347.9l3.926 6.063 6.97-.013a3.935 3.935 0 013.1 3.095v7.221l6.031 3.632a2.577 2.577 0 01.9 3.34l-3.3 6.426 3.3 6.425a2.577 2.577 0 01-.9 3.341l-6.032 3.659v7.221a3.932 3.932 0 01-3.1 3.095h-7.232L42.763 62.7a2.584 2.584 0 01-2.172 1.177z"
                    fill="url(#linear-gradient)" fill-rule="evenodd" />
                <path id="discount-star_copie_4" data-name="discount-star copie 4"
                    d="M39.038 59.621a2.1 2.1 0 01-.976-.24l-5.341-2.8-5.34 2.8a2.115 2.115 0 01-2.779-.761l-3.258-5.16-6.109-.139a2.214 2.214 0 01-2.059-2.105l-.159-6.271-5.043-3.332a2.223 2.223 0 01-.743-2.842l2.857-5.451-2.855-5.475A2.222 2.222 0 017.976 25l5.2-3.264v-6.314a2.214 2.214 0 012.059-2.105l6.111-.163L24.6 8a2.114 2.114 0 012.779-.761l5.34 2.8 5.34-2.8A2.115 2.115 0 0140.842 8l3.258 5.154 6.132.163a2.217 2.217 0 012.059 2.105v6.316L57.468 25a2.224 2.224 0 01.744 2.842l-2.834 5.474 2.834 5.452a2.225 2.225 0 01-.744 2.842l-5.044 3.332-.134 6.27a2.216 2.216 0 01-2.059 2.105l-6.133.142-3.258 5.158a2.134 2.134 0 01-1.802 1.004z"
                    transform="translate(.264 .264)" fill="#fff" fill-rule="evenodd" />
                <path id="discount-star_copie_5" data-name="discount-star copie 5"
                    d="M37.485 54.1a1.659 1.659 0 01-.776-.193l-4.249-2.241-4.248 2.234A1.677 1.677 0 0126 53.291l-2.743-4.445h-4.093a2.633 2.633 0 01-2.047-2.105V42.53l-4.342-2.842a1.783 1.783 0 01-.591-2.274l2.175-4.37-2.175-4.368a1.783 1.783 0 01.591-2.274l4.342-2.821v-4.212a2.633 2.633 0 012.047-2.105h4.094L26 12.8a1.677 1.677 0 012.211-.608l4.248 2.239 4.251-2.241a1.678 1.678 0 012.211.608l2.76 4.466h4.094a2.638 2.638 0 012.047 2.105v4.211l4.323 2.82a1.785 1.785 0 01.593 2.273l-2.176 4.372 2.173 4.369a1.786 1.786 0 01-.593 2.274l-4.32 2.839v4.211a2.637 2.637 0 01-2.047 2.105h-4.094L38.917 53.3a1.7 1.7 0 01-1.432.8z"
                    transform="translate(.528 .02)" fill="#252e38" fill-rule="evenodd" />
                <path id="Tracé_22" data-name="Tracé 22"
                    d="M173.225-621.407a1.043 1.043 0 01-.737-.309l-1.884-3.023-.031.049v-.005l-1.856 2.978a1.046 1.046 0 01-.739.31 1.044 1.044 0 01-.737-.309 1.053 1.053 0 010-1.488l2.027-3.5.049-.075-.024-.039.01-.014-2.061-3.307a1.052 1.052 0 01.037-1.446 1.053 1.053 0 011.446-.044l1.833 2.942.017-.024 1.91-2.921a1.053 1.053 0 011.054-.353 1.052 1.052 0 01.783.789 1.052 1.052 0 01-.36 1.051l-2.154 3.456.023.038 2.142 3.437a1.052 1.052 0 01.229 1.149 1.053 1.053 0 01-.973.649zm3.245 0l.019-8.422a2.3 2.3 0 012.075-2.106h3.188a2.329 2.329 0 012.106 2.106v3.127a2.275 2.275 0 01-2.106 2.122h-3.19v3.173zm2.124-5.264h2.106a1.079 1.079 0 001.042-.928.96.96 0 010-.124v-1.053a1.148 1.148 0 00-1.158-1.053h-.972a1.053 1.053 0 00-1.053 1.053v2.106h.031z"
                    transform="translate(-141.411 659.678)" fill="#fff" />
            </g>
        </g>
    </svg>
</div>`;

for (let i = 0; i  < levelComp+1; i++) {
    grid.innerHTML += `<div class="levels" id="level${i}">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 69" onclick="normal_popup_click(this)">
        <defs>
            <linearGradient id="linear-gradient" x1="1" y1=".519" x2="0" y2=".5"
                gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#ea8c01" />
                <stop offset=".473" stop-color="#ea8c01" />
                <stop offset="1" stop-color="#ea8c01" />
            </linearGradient>
            <linearGradient id="linear-gradient-2" x1=".5" x2=".5" y2="1"
                gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#f9b602" />
                <stop offset="1" stop-color="#efa007" />
            </linearGradient>
            <style>
                .cls-2 {
                    fill: #fff
                }
            </style>
        </defs>
        <g id="play" transform="translate(-238 -58)">
            <path id="Tracé_16" data-name="Tracé 16"
                d="M32 0A31.94 31.94 0 110 31.94 31.97 31.97 0 0132 0z"
                transform="translate(238 63.121)" fill="url(#linear-gradient)" />
            <path id="Tracé_17" data-name="Tracé 17" class="cls-2"
                d="M27.562 0A27.5 27.5 0 110 27.5 27.532 27.532 0 0127.562 0z"
                transform="translate(242.438 62.438)" />
            <path id="Tracé_15" data-name="Tracé 15" d="M32 0A32 32 0 110 32 32 32 0 0132 0z"
                transform="translate(238 58)" fill="url(#linear-gradient-2)" />
            <path id="Tracé_18" data-name="Tracé 18" class="cls-2"
                d="M27.5 0A27.5 27.5 0 110 27.5 27.5 27.5 0 0127.5 0z"
                transform="translate(242.438 62.438)" />
            <path id="Tracé_19" data-name="Tracé 19"
                d="M21.5 0A21.5 21.5 0 110 21.5 21.5 21.5 0 0121.5 0z"
                transform="translate(248.241 68.241)" fill="#242e37" />
            <path id="Tracé_14" data-name="Tracé 14" class="cls-2" d="M18 278.671v14.089l10.241-6.8z"
                transform="translate(248.87 -195.821)" />
        </g>
    </svg>
</div>`;
}
for (let j = levelComp+1; j < total; j++) {
    grid.innerHTML+=`<div class="disabled">
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64.35" viewBox="0 0 64 64.35">
        <defs>
            <clipPath id="clip-_03_GREY_END">
                <path d="M0 0h64v64.35H0z" />
            </clipPath>
            <filter id="Tracé_9" x="3.973" y="4.973" width="54.699" height="56.055"
                filterUnits="userSpaceOnUse">
                <feOffset dy="1" />
                <feGaussianBlur result="blur" />
                <feFlood flood-opacity=".161" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
            </filter>
            <style>
                .cls-3 {
                    fill: #fff
                }
            </style>
        </defs>
        <g id="_03_GREY_END" data-name="03_GREY_END" clip-path="url(#clip-_03_GREY_END)">
            <path id="conteur"
                d="M45.82-198A19.18 19.18 0 0165-178.82v26.639A19.18 19.18 0 0145.82-133H19.18A19.18 19.18 0 010-152.18v-26.64A19.18 19.18 0 0119.18-198zm13.852 46.885z"
                transform="translate(-1 198)" fill="#d8d8d8" fill-rule="evenodd" />
            <g filter="url(#Tracé_9)">
                <path id="Tracé_9-2" data-name="Tracé 9" class="cls-3"
                    d="M-384.442 161.055h-28.415a13.059 13.059 0 01-5.115-1.033 13.1 13.1 0 01-4.177-2.816 13.1 13.1 0 01-2.816-4.177 13.06 13.06 0 01-1.035-5.116v-28.771a13.059 13.059 0 011.033-5.115 13.1 13.1 0 012.816-4.177 13.1 13.1 0 014.177-2.816 13.06 13.06 0 015.116-1.034h28.415a13.06 13.06 0 015.116 1.033 13.1 13.1 0 014.177 2.816 13.1 13.1 0 012.816 4.177 13.059 13.059 0 011.033 5.115v28.771a13.06 13.06 0 01-1.033 5.116 13.1 13.1 0 01-2.816 4.177 13.1 13.1 0 01-4.177 2.816 13.06 13.06 0 01-5.115 1.034zm-29.836-49.371a6.354 6.354 0 00-2.489.5 6.373 6.373 0 00-2.032 1.37 6.373 6.373 0 00-1.37 2.032 6.353 6.353 0 00-.5 2.489v30.9a6.353 6.353 0 00.5 2.489 6.373 6.373 0 001.37 2.032 6.373 6.373 0 002.032 1.37 6.353 6.353 0 002.489.5h30.9a6.354 6.354 0 002.489-.5 6.371 6.371 0 002.032-1.37 6.373 6.373 0 001.37-2.032 6.354 6.354 0 00.5-2.489v-30.9a6.354 6.354 0 00-.5-2.489 6.373 6.373 0 00-1.37-2.032 6.371 6.371 0 00-2.032-1.37 6.354 6.354 0 00-2.489-.5z"
                    transform="translate(429.97 -101.03)" />
            </g>
            <path id="Tracé_1" data-name="Tracé 1" class="cls-3"
                d="M97.888 153.208a.888.888 0 01-.888-.889v-12.431a.888.888 0 111.775 0v12.431a.887.887 0 01-.887.889zm6.216-12.433h-5.329v3.552h5.325a.888.888 0 010 1.776h-6.212a.888.888 0 01-.888-.887v-5.328a.888.888 0 01.888-.888h6.212a.888.888 0 010 1.775zm6.215 7.993H104.1a.888.888 0 01-.888-.888v-7.992a.888.888 0 111.775 0v1.776h5.328a.888.888 0 01.888.888v5.328a.888.888 0 01-.888.888zm-.887-5.329h-4.441v3.552h4.441v-3.552z"
                transform="translate(-71.716 -112.716)" />
        </g>
    </svg>
</div>`;
    
}
};
AllDataFiller(currentUser);
const welcome_popup = document.querySelector('#WEL > svg');
const levelBtns = document.querySelectorAll('.levels > svg');
const welp = document.querySelector("#welcome-popup");
const cls = document.querySelector("#close > svg");
const normalPopup = document.querySelector("#normal-popup");
welp.style.display = 'none';
normalPopup.style.display = 'none';
function welcome_popup_open()
{
    welp.style.display = 'block';
}
function normal_popup_click(x)
{
    let id = x.parentNode.getAttribute('id');
        console.log(id);
        const ele = languageData[Number(current.slice(1))].Data[Number(id.slice(5))];
        const n = languageData[Number(current.slice(1))].NumberOflevels;
        if (Users[currentUser].score.progress[Number(current.slice(1))]===n-1 || Users[currentUser].score.progress[Number(current.slice(1))]>Number(id.slice(5))) {
            normalPopup.innerHTML = `<div>
        <h2>${languageData[Number(current.slice(1))].languageName} by WOWLEARN</h2>
        <button class="closebtn" onclick="close2()">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path
                    d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" />
            </svg>
        </button>
    </div>
    <div class="popup-content">${ele}</div>
    <div style="display:flex;justify-content:space-between;padding:0 40px;">
        <p>Level ${Number(id.slice(5))+1}</p>
        <p>1/1</p>
    </div>
    <progress min="0" max="1" value="1" style="width: 85%;margin:0 40px;"></progress>
    <div style="margin:10px 60px;"><span style="color:#F2BB13">Rewards: </span>unlock levels, <span
            style="color:rgb(34, 177, 34)">+15XP</span></div>
    <div class="popup-reward-content">
    <h5 style="color:rgb(34, 177, 34);margin:10px 60px;">Quest completed, Congradulations</h5>
    </div>`;
        }
        else
        {
        normalPopup.innerHTML = `<div>
        <h2>${languageData[Number(current.slice(1))].languageName} by WOWLEARN</h2>
        <button class="closebtn" onclick="close2()">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path
                    d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" />
            </svg>
        </button>
    </div>
    <div class="popup-content">${ele}</div>
    <div style="display:flex;justify-content:space-between;padding:0 40px;">
        <p>Level ${Number(id.slice(5))+1}</p>
        <p>0/1</p>
    </div>
    <progress id="progressBarUncompleted" min="0" max="1" value="0" style="width: 85%;margin:0 40px;"></progress>
    <div style="margin:10px 60px;"><span style="color:#F2BB13">Rewards: </span>unlock levels, <span
            style="color:rgb(34, 177, 34)">+15XP</span></div>
    <div class="popup-reward-content">
        <a onclick="claimRewards()" class="claimRewards">Claim Rewards</a>
    </div>`;
        }
        normalPopup.style.display = 'block';
}
cls.addEventListener('click', ()=>
{
    welp.style.display = 'none';
    normalPopup.style.display = 'none';
});
function close2()
{
    welp.style.display = 'none';
    normalPopup.style.display = 'none';
    const CPU = document.querySelector('.completed_popup');
    CPU.style.display = 'none';
}
///           notifications
let total_notifications = 0;
let noticount_setter=()=>
{
    const noticount = document.querySelector("#noticount");
    if (total_notifications === 0) {
        noticount.style.display = "none";
    }
    else
    {
        noticount.style.display = "block";
        noticount.innerHTML = total_notifications;
    }
};
noticount_setter();
let create_notification = (t,m,permanent)=>
{
    const notibox = document.querySelector("#noti-box");
    if(permanent)
    {
        notibox.innerHTML += `<div><div><h4>${t}</h4><p>${m}</p></div></div>`;
    }
    else
    {

    notibox.innerHTML += `<div id="noti${total_notifications}">
        <div>
            <h4>${t}</h4>
            <p>${m}</p>
        </div>
        <a onclick="delete_notification(${total_notifications})">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white"><path d="M7 21Q6.175 21 5.588 20.413Q5 19.825 5 19V6H4V4H9V3H15V4H20V6H19V19Q19 19.825 18.413 20.413Q17.825 21 17 21ZM9 17H11V8H9ZM13 17H15V8H13Z"/></svg>
        </a>
        </div>`;
        total_notifications++;
    }
    noticount_setter();
}
create_notification("Welcome to WOWLEARN","Hope you like this website and best of luck for your learnig journey",true);
let delete_notification=id=> 
{
    const noti = document.querySelector(`#noti${id}`);
    noti.remove();
    total_notifications--;
noticount_setter();
}
function StatsUpdate()
{
    const lvel1= document.querySelector('#lvl1');
    const X1= document.querySelector('#XP1');
    const X2= document.querySelector('#XP2');
    const p1= document.querySelector('#Progress1');
    const p2= document.querySelector('#Progress2');
    let n =languageData[Number(current.slice(1))].NumberOflevels;
    let r =Users[currentUser].score.progress[Number(current.slice(1))];
    lvel1.innerHTML=`Level ${r+1}`;
    X1.innerHTML=`${r}/${n}`;
    PopulateBySvgs(r,n);
    X2.innerHTML=`${15*r}/${15*n} XP`;
    p1.max=n;
    p2.max=n*15;
    p1.value=r;
    p2.value=r*15;
}
function NameUpdate(x) {
    let user = Users[x];
    const name1= document.querySelector('.profInNav');
    const name2= document.querySelector('.barProf');
    name1.innerHTML = `${user.name}<i class="fa-solid fa-caret-down"></i>`;
    name2.innerHTML = `${user.name}<i class="fa-solid fa-caret-down"></i>`;
}
function Language_selection_from_menu(x)
{
    current = x.getAttribute('id');
    StatsUpdate();
}
function AllDataFiller(x)
{
    NameUpdate(x);
    StatsUpdate();
    
}