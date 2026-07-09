const Certificate = require("../models/Certificate");

// ==============================
// Create Certificate
// ==============================
const createCertificate = async (req, res) => {
  try {
    const {
      title,
      issuer,
      issueDate,
      imageUrl,
      credentialUrl,
    } = req.body;

    const certificate = await Certificate.create({
      user: req.user.id,
      title,
      issuer,
      issueDate,
      imageUrl,
      credentialUrl,
    });

    res.status(201).json({
      message: "Certificate created successfully",
      certificate,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==============================
// Get All Certificates
// ==============================
const getCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(certificates);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==============================
// Get Single Certificate
// ==============================
const getCertificateById = async (req, res) => {
  try {
    const certificate = await Certificate.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!certificate) {
      return res.status(404).json({
        message: "Certificate not found",
      });
    }

    res.status(200).json(certificate);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==============================
// Update Certificate
// ==============================
const updateCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      req.body,
      {
        new: true,
      }
    );

    if (!certificate) {
      return res.status(404).json({
        message: "Certificate not found",
      });
    }

    res.status(200).json({
      message: "Certificate updated successfully",
      certificate,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==============================
// Delete Certificate
// ==============================
const deleteCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!certificate) {
      return res.status(404).json({
        message: "Certificate not found",
      });
    }

    res.status(200).json({
      message: "Certificate deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createCertificate,
  getCertificates,
  getCertificateById,
  updateCertificate,
  deleteCertificate,
};