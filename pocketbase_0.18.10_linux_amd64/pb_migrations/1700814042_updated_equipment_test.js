/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nkfs8lxvl9z8a4e")

  // remove
  collection.schema.removeField("ie5rawl3")

  // remove
  collection.schema.removeField("nsxhr450")

  // remove
  collection.schema.removeField("thld8vlk")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nkfs8lxvl9z8a4e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ie5rawl3",
    "name": "isScrapped",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nsxhr450",
    "name": "isLoaned",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "thld8vlk",
    "name": "room",
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
  }))

  return dao.saveCollection(collection)
})
