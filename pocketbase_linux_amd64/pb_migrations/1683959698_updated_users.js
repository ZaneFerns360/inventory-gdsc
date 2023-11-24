migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zkm0zijyk14zko5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xln8mnxs",
    "name": "staffId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "5jauche7839t726",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zkm0zijyk14zko5")

  // remove
  collection.schema.removeField("xln8mnxs")

  return dao.saveCollection(collection)
})
