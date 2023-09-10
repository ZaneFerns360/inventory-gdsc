/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h5cp3ls1eux7frn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cjey3yma",
    "name": "department",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h5cp3ls1eux7frn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cjey3yma",
    "name": "room",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
