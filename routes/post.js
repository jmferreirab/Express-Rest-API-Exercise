// Se importan los módulos necesarios
const express = require("express");
const Post = require("../models/Post");
const mongoose = require("mongoose");
// Se crea un nuevo router
const router = express.Router();

// Agregar ruta para traer todos los records
// Get a list of 50 posts
router.get("/", async (req, res) => {
  let collection = await Post.find();
  res.send(collection).status(200);
});

// Se define una ruta POST para crear nuevos posts
router.post("/", async (req, res) => {
  // Se crea un nuevo post con los datos del cuerpo de la petición
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    // Se intenta guardar el post en la base de datos
    const savedPost = await post.save();
    // Si todo va bien, se devuelve el post guardado
    res.json(savedPost);
  } catch (error) {
    // Si hay un error, se devuelve
    res.json({ message: error });
  }
});

// Se define una ruta GET para obtener un post por su ID
router.get("/:postId", async (req, res) => {
  try {
    // Se busca el post en la base de datos
    const post = await Post.findById(req.params.postId);
    // Se devuelve el post
    res.json(post);
  } catch (error) {
    // Si hay un error, se devuelve
    res.json({ message: error });
  }
});

// Se define una ruta DELETE para eliminar un post por su ID
router.delete("/:postId", async (req, res) => {
  try {
    // Se elimina el post de la base de datos
    const deletedPost = await Post.findByIdAndDelete(req.params.postId);
    // Se devuelve el post eliminado
    res.json(deletedPost);
  } catch (error) {
    // Si hay un error, se devuelve
    res.json({ message: error });
  }
});

// Se define una ruta PATCH para actualizar un post por su ID
router.patch("/:postId", async (req, res) => {
  try {
    // Se actualiza el post en la base de datos
    const updatedPost = await Post.updateOne(
      // Se busca el post por su _id
      { _id: req.params.postId },
      // Se utiliza $set para especificar los campos a actualizar
      { $set: { title: req.body.title } }
    );
    // Se devuelve el post actualizado
    res.json(updatedPost);
  } catch (error) {
    // Si hay un error, se devuelve
    res.json({ message: error });
  }
});

// Se exporta el router para que pueda ser usado en otras partes de la aplicación
module.exports = router;
