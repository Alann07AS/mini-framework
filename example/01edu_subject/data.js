const data = {
    subjects: [],
    subject: {
        name: "",
        audit: "",
        order: "",
        optionel: [],
    },
}

var getSubject

import("../../mini_framework.js").then(module => {
    const mn = module.default
    getSubject = (subject_name) => {
        const subject_id = data.subjects.findIndex(v => v.name === subject_name)
        fetch(data.subjects[subject_id].url).then(p => {
            p.json().then(subject => {
                const audit_metadata = subject.filter(v => v.name === "audit")[0]
                const order_metadata = subject.filter(v => v.name === "README.md")[0]
                Promise.all([
                    audit_metadata ? fetch(audit_metadata.url) : undefined,
                    order_metadata ? fetch(order_metadata.download_url) : undefined,
                    ...subject.filter(v => v.name !== "audit" && v.name !== "README.md").map((v) => fetch(v.url))
                ]).then(([audit, order, ...optionel]) => {
                    Promise.all([
                        audit ? audit.json() : undefined,
                        order ? order.text() : undefined,
                        ...optionel.map(p => p.json())
                    ]).then(([audit, order, ...optionel]) => {
                        const rd_audit = audit ? audit.filter(v => v.name === "README.md")[0] : undefined
                        Promise.all([rd_audit ? fetch(rd_audit.download_url) : undefined])
                            .then(([audit]) => {
                                Promise.all([audit ? audit.text() : undefined])
                                    .then(([audit]) => {
                                        audit = audit ? audit : "No audit found"
                                        mn.data.update("subject", _ => {
                                            return {
                                                name: subject_name,
                                                audit,
                                                order,
                                                optionel,
                                            }
                                        })
                                        console.log(data.subject);
                                    })
                            })
                    })
                })
            })
        })
    }
})



fetch("https://raw.githubusercontent.com/01-edu/public/master/subjects/road_intersection/README.md").then(p => {
    p.text().then(t => {
        text = t
    })
})

