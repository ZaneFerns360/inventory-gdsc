/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h5cp3ls1eux7frn")

  // remove
  collection.schema.removeField("oabihcjf")

  // remove
  collection.schema.removeField("qvgqynwm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2oqjtiji",
    "name": "quantity",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h5cp3ls1eux7frn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oabihcjf",
    "name": "description",
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
    "id": "qvgqynwm",
    "name": "cost",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("2oqjtiji")

  return dao.saveCollection(collection)
})
