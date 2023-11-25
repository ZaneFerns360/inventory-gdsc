/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nkfs8lxvl9z8a4e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "89yfkolc",
    "name": "staff",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "5jauche7839t726",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nkfs8lxvl9z8a4e")

  // remove
  collection.schema.removeField("89yfkolc")

  return dao.saveCollection(collection)
})
