migrate((db) => {
  const collection = new Collection({
    "id": "6lyip7efrso31q1",
    "created": "2023-05-05 16:30:35.423Z",
    "updated": "2023-05-05 16:30:35.423Z",
    "name": "user",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zmr2i0z5",
        "name": "name",
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
        "id": "htzsg5yt",
        "name": "departments_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "j6g2920delgn861",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "mnxlxqma",
        "name": "role",
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
  const collection = dao.findCollectionByNameOrId("6lyip7efrso31q1");

  return dao.deleteCollection(collection);
})
