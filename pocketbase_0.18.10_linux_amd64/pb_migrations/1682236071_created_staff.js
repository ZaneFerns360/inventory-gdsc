migrate((db) => {
  const collection = new Collection({
    "id": "5jauche7839t726",
    "created": "2023-04-23 07:47:51.563Z",
    "updated": "2023-04-23 07:47:51.563Z",
    "name": "staff",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pkahgwhx",
        "name": "floor",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "a9qal6y5npeqd9n",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "ts5pctvw",
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
        "id": "9z6zx0xh",
        "name": "role",
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
        "id": "shmnlntl",
        "name": "avatar",
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
  const collection = dao.findCollectionByNameOrId("5jauche7839t726");

  return dao.deleteCollection(collection);
})
