/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ta7atfeslpj7zv0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ftpugny7",
    "name": "Loaned_from",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "spssed7u",
    "name": "Loaned_to",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ta7atfeslpj7zv0")

  // remove
  collection.schema.removeField("ftpugny7")

  // remove
  collection.schema.removeField("spssed7u")

  return dao.saveCollection(collection)
})
