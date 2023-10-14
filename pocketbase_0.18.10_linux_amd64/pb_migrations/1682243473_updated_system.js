migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s2ervbtv1bimy97")

  // remove
  collection.schema.removeField("jthcq33m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tugdybde",
    "name": "lab",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s2ervbtv1bimy97")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jthcq33m",
    "name": "labID",
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

  // remove
  collection.schema.removeField("tugdybde")

  return dao.saveCollection(collection)
})
