/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h5cp3ls1eux7frn")

  // remove
  collection.schema.removeField("rxmsia9i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "li6c7ddm",
    "name": "room",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "68dcpp3tdt3fmf2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h5cp3ls1eux7frn")

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

  // remove
  collection.schema.removeField("li6c7ddm")

  return dao.saveCollection(collection)
})
