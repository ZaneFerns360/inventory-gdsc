migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lewu8o8uyy2hhhg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w6gwgfja",
    "name": "gallery",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lewu8o8uyy2hhhg")

  // remove
  collection.schema.removeField("w6gwgfja")

  return dao.saveCollection(collection)
})
