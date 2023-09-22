/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("68dcpp3tdt3fmf2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c6yei4yw",
    "name": "dep",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "sy7jm8ayi7q9utt",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("68dcpp3tdt3fmf2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c6yei4yw",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "sy7jm8ayi7q9utt",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
