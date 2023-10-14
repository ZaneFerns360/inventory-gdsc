migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s2ervbtv1bimy97")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5uvm7ysm",
    "name": "os_v",
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
  collection.schema.removeField("5uvm7ysm")

  return dao.saveCollection(collection)
})
