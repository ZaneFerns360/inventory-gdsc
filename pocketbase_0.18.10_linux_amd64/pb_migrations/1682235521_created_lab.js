migrate((db) => {
  const collection = new Collection({
    "id": "a9qal6y5npeqd9n",
    "created": "2023-04-23 07:38:41.283Z",
    "updated": "2023-04-23 07:38:41.283Z",
    "name": "lab",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "c0waehis",
        "name": "labId",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "brqzrymt",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("a9qal6y5npeqd9n");

  return dao.deleteCollection(collection);
})
