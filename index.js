const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const projectDB = require('./data/helpers/projectModel');
const actionDB = require('./data/helpers/actionModel.js');

// ===== Middleware =====
function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] Was user method "${req.method}" to address "${req.path}"`);
    next();
}

function validateProjectId(req, res, next) {
    const id = req.params.id;

    projectDB.get(id)
    .then(response => {
        if (response === null) {
            res.status(400).json({ message: "invalid project id" })
          } else {
            req.user = response;
            next();
          }
    })
}

function validateActionsId(req, res, next) {
    const id = req.params.id;

    actionDB.get(id)
    .then(response => {
        if (!response) {
            res.status(400).json({ message: "invalid action id" })
          } else {
            req.user = response;
            next();
          }
    })
}


// ===== End of middleware =====

server.use(express.json());
server.use(cors())
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

server.get('/api/projects/:id', validateProjectId, (req, res) => {
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

server.put('/api/projects/:id', validateProjectId, (req, res) => {
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

server.delete('/api/projects/:id', validateProjectId, (req, res) => {
    const id = req.params.id;

    projectDB.remove(id)
    .then(projects => {
        if (projects === 1) {
            res.status(200).json({ message: `The project information with ID ${id} was deleted.` });
        }
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

server.get('/api/actions/:id', validateActionsId, (req, res) => {
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

server.put('/api/actions/:id', validateActionsId, (req, res) => {
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

server.delete('/api/actions/:id', validateActionsId, (req, res) => {
    const id = req.params.id;

    actionDB.remove(id)
    .then(actions => {
        if (actions === 1) {
            res.status(200).json({ message: `The action information with ID ${id} was deleted.` });
        }
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
