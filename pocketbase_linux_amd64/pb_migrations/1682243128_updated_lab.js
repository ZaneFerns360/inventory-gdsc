migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a9qal6y5npeqd9n")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bj4cwhxh",
    "name": "labID",
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
  const collection = dao.findCollectionByNameOrId("a9qal6y5npeqd9n")

  // remove
  collection.schema.removeField("bj4cwhxh")

  return dao.saveCollection(collection)
})
