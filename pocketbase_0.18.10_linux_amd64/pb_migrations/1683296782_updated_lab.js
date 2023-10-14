migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lewu8o8uyy2hhhg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gdnynnjb",
    "name": "staff",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "5jauche7839t726",
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
  collection.schema.removeField("gdnynnjb")

  return dao.saveCollection(collection)
})
