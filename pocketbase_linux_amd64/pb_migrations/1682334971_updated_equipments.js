migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9gvd4m1s0fosqp4")

  // remove
  collection.schema.removeField("7b9ixjxb")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9gvd4m1s0fosqp4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7b9ixjxb",
    "name": "lab",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "s2ervbtv1bimy97",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
