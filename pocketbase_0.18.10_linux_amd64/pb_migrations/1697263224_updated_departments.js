/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j6g2920delgn861")

  collection.name = "department"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j6g2920delgn861")

  collection.name = "departments"

  return dao.saveCollection(collection)
})
