migrate((db) => {
  const collection = new Collection({
    "id": "lewu8o8uyy2hhhg",
    "created": "2023-04-24 11:16:49.633Z",
    "updated": "2023-04-24 11:16:49.633Z",
    "name": "lab",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vjmxqmhr",
        "name": "room_id",
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
        "id": "zdmn6rmd",
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
  const collection = dao.findCollectionByNameOrId("lewu8o8uyy2hhhg");

  return dao.deleteCollection(collection);
})
