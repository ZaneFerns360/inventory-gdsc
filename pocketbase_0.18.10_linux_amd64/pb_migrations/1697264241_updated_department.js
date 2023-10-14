/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j6g2920delgn861")

  // remove
  collection.schema.removeField("aoglfacw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zujrxo8w",
    "name": "room",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "lewu8o8uyy2hhhg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j6g2920delgn861")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aoglfacw",
    "name": "labs",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "lewu8o8uyy2hhhg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // remove
  collection.schema.removeField("zujrxo8w")

  return dao.saveCollection(collection)
})
