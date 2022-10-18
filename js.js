let ok = document.querySelector('.ok');
let i = 0;
let g = 0;
document.querySelector('.MyCardTableItems').onclick = function() {
    // console.log(event.target)
    // console.log(event)
    if(event.target.id == "animation") {
        event.target.remove();

        let div = document.createElement('div');
        div.innerHTML = "MyCardItem";
        document.querySelector('.box').appendChild(div).classList.add('why');
        setTimeout(()=>{
            document.querySelectorAll('.why')[i].classList.add('anim');
            i++;
        },1500);
        setTimeout(()=>{
            for(let a = 0; a <= 3; a++) {
                let div = document.createElement('div');
                div.innerHTML = 'MyCardItem';
                document.querySelector('.box').appendChild(div).classList.add("bot");
                let bot = document.querySelectorAll('.bot');
                setTimeout(()=>{
                    bot[a].classList.add(`why${a}`);
                },500);
                setTimeout(()=>{
                    bot[a].classList.add(`what${a}`)
                },1000);
            }
        },1000)
    }
    setTimeout(()=>{
        document.querySelectorAll('.why').forEach(e=>{
            e.innerHTML = "";
            e.classList.add('magicBox');
        })
        document.querySelectorAll('.bot').forEach(e=>{
            e.innerHTML = "";
            e.classList.add('magicBox');
        })
        // for(let e = 0;e < 10; e++) {
        //     document.querySelectorAll('.bot')[e].classList.add('magicBox');
        //     document.querySelectorAll('.why')[e].classList.add('magicBox');
        // }
       
    },5000)
}
document.querySelector('body').onclick = function() {
    console.log(event)
}