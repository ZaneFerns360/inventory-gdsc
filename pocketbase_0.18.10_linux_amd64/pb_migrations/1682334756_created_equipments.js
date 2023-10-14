migrate((db) => {
  const collection = new Collection({
    "id": "9gvd4m1s0fosqp4",
    "created": "2023-04-24 11:12:35.667Z",
    "updated": "2023-04-24 11:12:35.667Z",
    "name": "equipments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zybkwmtq",
        "name": "description",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "7b9ixjxb",
        "name": "lab",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "s2ervbtv1bimy97",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("9gvd4m1s0fosqp4");

  return dao.deleteCollection(collection);
})
