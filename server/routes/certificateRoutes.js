const express = require("express");

const {
  createCertificate,
  getCertificates,
  getCertificateById,
  updateCertificate,
  deleteCertificate,
} = require("../controllers/certificateController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Create Certificate
router.post("/", protect, createCertificate);

// Get All Certificates
router.get("/", protect, getCertificates);

// Get Single Certificate
router.get("/:id", protect, getCertificateById);

// Update Certificate
router.put("/:id", protect, updateCertificate);

// Delete Certificate
router.delete("/:id", protect, deleteCertificate);

module.exports = router;