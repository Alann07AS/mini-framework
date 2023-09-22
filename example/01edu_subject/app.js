import mini_framework from "../../mini_framework.js";
const mn = mini_framework

fetch("https://api.github.com/repos/01-edu/public/contents/subjects").then(p => {
    p.json().then(subjects => {
        mn.data.update("subjects", _ => subjects )


        //debugage a remove !!
        setTimeout(()=>{
            input_subject.value = "forum";
            const event = new KeyboardEvent('keyup', { key: "Enter" });
            input_subject.dispatchEvent(event);
        }, 100)
        //!!!!!!!!!!!!


    })
})
