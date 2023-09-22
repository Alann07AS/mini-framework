import mini_framework from "../../mini_framework.js";
const mn = mini_framework

fetch("https://api.github.com/repos/01-edu/public/contents/subjects").then(p => {
    p.json().then(subjects => {
        mn.data.update("subjects", _ => subjects.filter(s=>s.type==="dir") )

        window.addEventListener("hashchange", () => {
            const selected_subject = window.location.hash.replace("#/", "").split("/")
            getSubject(selected_subject.shift())

            var i = 0;
// ICI !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            const updater = () => {
                if (!selected_subject[i]) {
                    mn.data.remove_bind("subject", updater)
                    return
                }
                getSubject(selected_subject[i], data.subject);
                i++;
            }
            mn.data.bind("subject", updater)

        })

        //debugage a remove !!
        console.log(subjects);
        setTimeout(()=>{
            input_subject.value = "forum";
            const event = new KeyboardEvent('keyup', { key: "Enter" });
            input_subject.dispatchEvent(event);
        }, 100)
        //!!!!!!!!!!!!
    })
})
