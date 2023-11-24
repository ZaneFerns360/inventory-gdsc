migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9gvd4m1s0fosqp4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k2nl7tol",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9gvd4m1s0fosqp4")

  // remove
  collection.schema.removeField("k2nl7tol")

  return dao.saveCollection(collection)
})
