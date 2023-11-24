migrate((db) => {
  const collection = new Collection({
    "id": "zkm0zijyk14zko5",
    "created": "2023-05-06 11:49:12.174Z",
    "updated": "2023-05-06 11:49:12.174Z",
    "name": "users",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "itg3dmnd",
        "name": "department",
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
        "id": "oabrstjg",
        "name": "role",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Principal",
            "HOD",
            "Assistant"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zkm0zijyk14zko5");

  return dao.deleteCollection(collection);
})
