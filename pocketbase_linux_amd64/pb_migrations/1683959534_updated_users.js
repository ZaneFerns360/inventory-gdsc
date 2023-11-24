migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zkm0zijyk14zko5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ic8lyzrm",
    "name": "position",
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
  const collection = dao.findCollectionByNameOrId("zkm0zijyk14zko5")

  // remove
  collection.schema.removeField("ic8lyzrm")

  return dao.saveCollection(collection)
})
