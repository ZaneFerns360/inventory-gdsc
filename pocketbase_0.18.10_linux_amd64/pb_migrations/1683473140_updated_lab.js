migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lewu8o8uyy2hhhg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "er8f5je3",
    "name": "hasAccess",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "zkm0zijyk14zko5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lewu8o8uyy2hhhg")

  // remove
  collection.schema.removeField("er8f5je3")

  return dao.saveCollection(collection)
})
