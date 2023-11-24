migrate((db) => {
  const collection = new Collection({
    "id": "s2ervbtv1bimy97",
    "created": "2023-04-23 07:37:45.636Z",
    "updated": "2023-04-23 07:37:45.636Z",
    "name": "system",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ctqzxs8f",
        "name": "ram",
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
        "id": "btkcp3jt",
        "name": "hd",
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
        "id": "niiwgwt8",
        "name": "os",
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
        "id": "5jfbd5qj",
        "name": "processor",
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
        "id": "wsvi6kpk",
        "name": "quantity",
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
        "id": "c2yap2cy",
        "name": "desktop",
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
  const collection = dao.findCollectionByNameOrId("s2ervbtv1bimy97");

  return dao.deleteCollection(collection);
})
