migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s2ervbtv1bimy97")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bituufrt",
    "name": "equipments",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "9gvd4m1s0fosqp4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s2ervbtv1bimy97")

  // remove
  collection.schema.removeField("bituufrt")

  return dao.saveCollection(collection)
})
