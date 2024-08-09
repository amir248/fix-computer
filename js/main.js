function headerOnload(){
    return new Promise((resolve)=>{
        function first(){
            let script = document.createElement('script');
            script.src = "js/include.js";
            document.body.append(script);
        };
        resolve(first());
    });
}

function bodyDocument(){
    return new Promise((resolve)=>{
        function itsBody(){
            setTimeout(()=>{
                let menu = document.createElement('script');
                menu.src = "js/menu.js";
                document.body.append(menu);
            },700);
        };
        resolve(itsBody());
    })
}

async function loadNewScript(){
    await headerOnload();
    await bodyDocument();
};
window.addEventListener("DOMContentLoaded",loadNewScript);