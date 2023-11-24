migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5jauche7839t726")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hov8fghj",
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
  const collection = dao.findCollectionByNameOrId("5jauche7839t726")

  // remove
  collection.schema.removeField("hov8fghj")

  return dao.saveCollection(collection)
})
