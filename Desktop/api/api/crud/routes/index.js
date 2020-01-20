module.exports = function  {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `players` ORDER BY id ASC"; // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                throw err;
            }
           return res.send({ error:false,data:result,message:"users list"});
        });
    },
};