migrate((db) => {
  const collection = new Collection({
    "id": "j6g2920delgn861",
    "created": "2023-05-05 16:29:06.683Z",
    "updated": "2023-05-05 16:29:06.683Z",
    "name": "departments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aoglfacw",
        "name": "labs",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "lewu8o8uyy2hhhg",
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
  const collection = dao.findCollectionByNameOrId("j6g2920delgn861");

  return dao.deleteCollection(collection);
})
