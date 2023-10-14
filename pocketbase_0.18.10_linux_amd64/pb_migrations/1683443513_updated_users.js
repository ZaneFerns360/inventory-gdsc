migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zkm0zijyk14zko5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pbcuekp9",
    "name": "lab",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "lewu8o8uyy2hhhg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zkm0zijyk14zko5")

  // remove
  collection.schema.removeField("pbcuekp9")

  return dao.saveCollection(collection)
})
