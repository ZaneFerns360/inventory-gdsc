migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lewu8o8uyy2hhhg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rigsex5y",
    "name": "description",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tth3gcfx",
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
  const collection = dao.findCollectionByNameOrId("lewu8o8uyy2hhhg")

  // remove
  collection.schema.removeField("rigsex5y")

  // remove
  collection.schema.removeField("tth3gcfx")

  return dao.saveCollection(collection)
})
