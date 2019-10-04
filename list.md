## List of actions

# Projects

[ ] GET  ==> `/api/projects`


[ ] GET by ID ==> `/api/projects/:id`


[ ] POST ==> `/api/projects`

// Request json body
{
    "name": "Some name",
    "description": "Some description",
    "completed": false
}


[ ] PUT ==> `/api/projects/:id`

// Request json body
{
    "name": "Some new name",
    "description": "Some new description",
    "completed": true
}


[ ] DELETE ==> `/api/projects/:id`


# Actions

[ ] GET  ==> `/api/actions`


[ ] GET by ID ==> `/api/actions/:id`


[ ] POST ==> `/api/actions`

// Request json body
{
    "project_id": 1,
    "description": "Some description",
    "notes": "Some notes",
    "completed": false
}


[ ] PUT ==> `/api/actions/:id`

// Request json body
{
    "project_id": 1,
    "description": "Some new description",
    "notes": "Some new notes",
    "completed": true
}


[ ] DELETE ==> `/api/actions/:id`