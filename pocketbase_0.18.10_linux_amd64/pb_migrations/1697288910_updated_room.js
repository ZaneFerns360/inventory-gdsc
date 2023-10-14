/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lewu8o8uyy2hhhg")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zdmn6rmd",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
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
  const collection = dao.findCollectionByNameOrId("lewu8o8uyy2hhhg")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zdmn6rmd",
    "name": "xxxname",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
