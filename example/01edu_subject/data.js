const data = {
    subjects: [],
    subject: {
        name: "",
        audit: "",
        order: "",
        optionel: [],
    },
}

const getSubject = (subject_name, useThisData) => {
    const subject_id = (useThisData || data.subjects).findIndex(v => v.name === subject_name)
    if (subject_id === -1) return
    fetch((useThisData || data.subjects)[subject_id].url).then(p => {
        p.json().then(subject => {
            const audit_metadata = subject.filter(v => v.name === "audit")[0]
            const order_metadata = subject.filter(v => v.name === "README.md")[0]
            Promise.all([
                audit_metadata ? fetch(audit_metadata.url) : undefined,
                order_metadata ? fetch(order_metadata.download_url) : undefined,
            ]).then(([audit, order]) => {
                Promise.all([
                    audit ? audit.json() : undefined,
                    order ? order.text() : undefined,
                ]).then(([audit, order]) => {
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
                                            optionel: subject.filter(v => v.name !== "README.md" && v.name !== "audit"),
                                        }
                                    })
                                    // console.log(data.subject);
                                })
                        })
                })
            })
        })
    })
}
