/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("c4ndfmf7erc0w00");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "c4ndfmf7erc0w00",
    "created": "2023-10-19 05:27:03.698Z",
    "updated": "2023-10-19 05:27:03.698Z",
    "name": "pending",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qgpfcqif",
        "name": "from",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "lewu8o8uyy2hhhg",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "ovrygkwj",
        "name": "to",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "lewu8o8uyy2hhhg",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "ar4z1own",
        "name": "equipment",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "9gvd4m1s0fosqp4",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
})
