/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9gvd4m1s0fosqp4")

  collection.name = "equipment"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9gvd4m1s0fosqp4")

  collection.name = "equipments"

  return dao.saveCollection(collection)
})
