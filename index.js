const express = require('express');
const helmet = require('helmet');

const server = express();

const projectDB = require('./data/helpers/projectModel');
const actionDB = require('./data/helpers/actionModel.js');

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] Was user method "${req.method}" to address "${req.path}"`);
    next();
}

server.use(express.json());
server.use(helmet());
server.use(logger);

// Test request
server.get('/', (req, res) => {
    res.send(`
      <h2>Heorhii Sprint API</h>
      <p>Welcome to the Heorhii API</p>
    `);
});

// === Projects routes ===
server.get('/api/projects', (req, res) => {

    projectDB.get()
    .then(projects => {
        res.json(projects);
    })
    .catch(error => {
        res.status(500).json({ error: "The projects information could not be retrieved." })
    });

});

server.get('/api/projects/:id', (req, res) => {
    const id = req.params.id;

    projectDB.get(id)
    .then(projects => {
        res.json(projects);
    })
    .catch(error => {
        res.status(500).json({ error: "The projects information could not be retrieved." })
    });

});

server.post('/api/projects/', (req, res) => {
    const projectInfo = req.body;

    projectDB.insert(projectInfo)
    .then(projects => {
        res.json(projects);
    })
    .catch(error => {
        res.status(500).json({ error: "The projects information could not be added." })
    });
});

server.put('/api/projects/:id', (req, res) => {
    const id = req.params.id;
    const update = req.body;

    projectDB.update(id, update)
    .then(posts => {
        res.json(posts);
    })
    .catch(error => {
        res.status(500).json({ error: "The projects information could not be updated." })
    });
});

server.delete('/api/projects/:id', (req, res) => {
    const id = req.params.id;

    projectDB.remove(id)
    .then(projects => {
        res.json(projects);
    })
    .catch(error => {
        res.status(500).json({ error: "The projects information could not be deleted." })
    });

});
// === End of Projects routes ===

// ==============================

// === Actions routes ===
server.get('/api/actions', (req, res) => {

    actionDB.get()
    .then(actions => {
        res.json(actions);
    })
    .catch(error => {
        res.status(500).json({ error: "The actions information could not be retrieved." })
    });

});

server.get('/api/actions/:id', (req, res) => {
    const id = req.params.id;

    actionDB.get(id)
    .then(actions => {
        res.json(actions);
    })
    .catch(error => {
        res.status(500).json({ error: "The actions information could not be retrieved." })
    });

});

server.post('/api/actions/', (req, res) => {
    const actionInfo = req.body;

    actionDB.insert(actionInfo)
    .then(actions => {
        res.json(actions);
    })
    .catch(error => {
        res.status(500).json({ error: "The actions information could not be added." })
    });
});

server.put('/api/actions/:id', (req, res) => {
    const id = req.params.id;
    const update = req.body;

    actionDB.update(id, update)
    .then(actions => {
        res.json(actions);
    })
    .catch(error => {
        res.status(500).json({ error: "The action information could not be updated." })
    });
});

server.delete('/api/actions/:id', (req, res) => {
    const id = req.params.id;

    actionDB.remove(id)
    .then(actions => {
        res.json(actions);
    })
    .catch(error => {
        res.status(500).json({ error: "The actions information could not be deleted." })
    });

});
// === End of Actions routes ===

const port = 5000

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
