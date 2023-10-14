/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9gvd4m1s0fosqp4")

  // remove
  collection.schema.removeField("fatmt26a")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9gvd4m1s0fosqp4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fatmt26a",
    "name": "department",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "j6g2920delgn861",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
