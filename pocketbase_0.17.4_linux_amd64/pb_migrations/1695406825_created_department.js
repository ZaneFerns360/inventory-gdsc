/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sy7jm8ayi7q9utt",
    "created": "2023-09-22 18:20:25.959Z",
    "updated": "2023-09-22 18:20:25.959Z",
    "name": "department",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ucie5c4d",
        "name": "dep_name",
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
  const collection = dao.findCollectionByNameOrId("sy7jm8ayi7q9utt");

  return dao.deleteCollection(collection);
})
