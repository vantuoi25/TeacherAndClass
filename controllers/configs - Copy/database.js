const express = require('express');
const mongoose = require('mongoose');

async function connectDb() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/CRUD_TeacherAndClasses');
    console.log('Connection sucessfully!');
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectDb;
