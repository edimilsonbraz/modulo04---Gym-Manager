const fs = require('fs')
const data = require("./data.json")
//Create
exports.post = function(req, res) {
    //req.query
    
    //req.body
    const keys = Object.keys(req.body)

    for (key of keys) {
        //req.body.avatar_url == ""
        if (req.body[key] == "") {
            return res.send('Please, fill all fields!')
        }
    }


    let {avatar_url, birth, id, name, services, gender} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)

    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at,
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file error!")

        return res.redirect("/instructors")
    })
    
    // return res.send(req.body)
}

// Update

// Delete