const App = require('home:page/index/server.jsx');

module.exports = async function (req, res) {
    const initState = {
        todos: [
            {
                id: req.userId
            }
        ]
    };
 
    const nsr = req.query.nsr === '1';
    res.render('home/page/index/index.tpl', {
        initState: JSON.stringify(initState),
        ssr: nsr ? '' : App(initState)
    });
};
