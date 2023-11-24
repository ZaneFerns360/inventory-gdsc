migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5jauche7839t726")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pkahgwhx",
    "name": "floor",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "a9qal6y5npeqd9n",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5jauche7839t726")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pkahgwhx",
    "name": "floor",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "a9qal6y5npeqd9n",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
