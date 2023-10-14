migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9gvd4m1s0fosqp4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eessxpli",
    "name": "name",
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
  const collection = dao.findCollectionByNameOrId("9gvd4m1s0fosqp4")

  // remove
  collection.schema.removeField("eessxpli")

  return dao.saveCollection(collection)
})
