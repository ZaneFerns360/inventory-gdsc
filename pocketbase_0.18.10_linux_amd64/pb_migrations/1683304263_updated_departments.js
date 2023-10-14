migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j6g2920delgn861")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0chcasvv",
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
  const collection = dao.findCollectionByNameOrId("j6g2920delgn861")

  // remove
  collection.schema.removeField("0chcasvv")

  return dao.saveCollection(collection)
})
