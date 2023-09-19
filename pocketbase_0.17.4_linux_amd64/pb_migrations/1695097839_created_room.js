/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "68dcpp3tdt3fmf2",
    "created": "2023-09-19 04:30:39.318Z",
    "updated": "2023-09-19 04:30:39.318Z",
    "name": "room",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zvaugwmu",
        "name": "room_name",
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
  const collection = dao.findCollectionByNameOrId("68dcpp3tdt3fmf2");

  return dao.deleteCollection(collection);
})
