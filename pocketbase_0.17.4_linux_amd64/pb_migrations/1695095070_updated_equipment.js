/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h5cp3ls1eux7frn")

  // remove
  collection.schema.removeField("uum4cfcb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rxmsia9i",
    "name": "room",
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
  const collection = dao.findCollectionByNameOrId("h5cp3ls1eux7frn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uum4cfcb",
    "name": "room",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("rxmsia9i")

  return dao.saveCollection(collection)
})
