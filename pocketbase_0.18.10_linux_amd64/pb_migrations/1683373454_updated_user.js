migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6lyip7efrso31q1")

  // remove
  collection.schema.removeField("mnxlxqma")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sn6qhbuu",
    "name": "field",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "Principal",
        "HOD",
        "Assistant"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6lyip7efrso31q1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mnxlxqma",
    "name": "role",
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
  collection.schema.removeField("sn6qhbuu")

  return dao.saveCollection(collection)
})
