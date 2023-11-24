migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5jauche7839t726")

  // remove
  collection.schema.removeField("fwsbmuec")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5jauche7839t726")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fwsbmuec",
    "name": "floor",
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
