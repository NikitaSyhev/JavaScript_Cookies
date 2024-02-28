
// //куки всегда строка
// document.cookie = 'key=value';
// document.cookie = 'authorised=true; max-age=5';
// console.log(document.cookie);

// const Cookies = {
//    set(key,value, attributes){
//     const atrs = ['max-age', 'expires', 'path'];
//     let str = '' + atrs.reduce((res, atr)=>{
//         if(!atr) {
//             return res + atr + '=' + attributes[atr] + ';';
//         }
        
//     });
//     document.cookie = `${key}=${value};${str}`;
//    },

//    get(key) {
//     let cookieArr = document.cookie.split('; ');
//     let cookieObj = {};
//     for(let el of cookieArr) {
//         let pare = el.split('=');
//         cookieObj[pare[0]] = pare[1];
//     }
//     return cookieObj[key];      
//    },

//    remove(key){
//     document.cookie = `${key}=0; max-age=0`; 
//    },

//    clearAll() {
//     let cookieArr = document.cookie.split('; ');
    
//     for(let el of cookieArr) {
//         let pare = el.split('=');
//         this.remove(pare[0]);
//     }
//    }
// };


// localStorage.setItem('hello', 'world');


 const themeBtn = document.querySelector('#switch-theme');
 const CSSVariables = [
    {name: '--bgcolor', dark:'#000000', light: '#FFFFFF'},
    {name: '--fontcolor', dark:'#FFFFFF', light: '#000000'}
 ];

 window.onload = () => {
    if (localStorage.getItem == 'dark') {
        localStorage.setItem('theme', 'light');
        switchTheme();
        return;
    }
    localStorage.setItem('theme', 'light');
 };

 themeBtn.addEventListener('click', switchTheme);

 function switchTheme() {
    localStorage.setItem('theme', 
    localStorage.getItem('theme') == 'dark' ? 'light' : 'dark'
    );
        const root = document.querySelector(':root');
        CSSVariables.forEach(el=>{
            root.style.setProperty(el.name, el[localStorage.getItem('theme')]);
        });
 }

