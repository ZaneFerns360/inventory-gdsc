migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5jauche7839t726")

  // remove
  collection.schema.removeField("shmnlntl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vqgo4w1n",
    "name": "avatar",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5jauche7839t726")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "shmnlntl",
    "name": "avatar",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("vqgo4w1n")

  return dao.saveCollection(collection)
})
