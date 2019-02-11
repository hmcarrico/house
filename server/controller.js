module.exports = {
    getAllHomes: (req, res) => {
        const db = req.app.get('db');
        db.get_all_homes().then(homes => {
            res.status(200).json(homes)
        })
    },
    postHome: (req, res) => {
        const db = req.app.get('db');
        const {name, address, city, state, morgage, rent, url} = req.body;
        db.create_listing(name, address, city, state, morgage, rent, url).then(house => {
            res.status(200).send('Posted!')
        })
    },
    deleteHome: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_house(id).then(house => {
            res.status(200).send('Deleted!')
        })
    },
    editPrice: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.query;
        const {morgage, rent} = req.body;
        db.edit_prices(morgage, rent, id).then(house => {
            res.status(200).send('Editied!')
        })
    }
}