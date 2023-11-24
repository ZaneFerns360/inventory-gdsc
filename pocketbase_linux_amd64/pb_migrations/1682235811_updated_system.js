migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s2ervbtv1bimy97")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n5l9eeub",
    "name": "pgen",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hj1nh2mj",
    "name": "hd_type",
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

  // remove
  collection.schema.removeField("n5l9eeub")

  // remove
  collection.schema.removeField("hj1nh2mj")

  return dao.saveCollection(collection)
})
