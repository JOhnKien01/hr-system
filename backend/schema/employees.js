/**
 * Employee / Plantilla Record Schema
 * -----------------------------------
 * For use with Mongoose (Node.js ODM for MongoDB)
 * npm install mongoose
 */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema(
  {
    // ---- Name ----
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    middleName: {
      type: String,
      trim: true,
      default: "",
    },

    // ---- Position / Plantilla Details ----
    plantillaItemNumber: {
      type: String,
      required: true,
      unique: true, // each plantilla item should be unique
      trim: true,
    },
    positionTitle: {
      type: String,
      required: true,
      trim: true,
    },
    salaryGrade: {
      // SG
      type: Number,
      required: true,
      min: 1,
      max: 33, // Philippine SG scale typically goes up to 33
    },
    step: {
      type: Number,
      required: true,
      min: 1,
      max: 8, // standard step increments
    },
    code: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      trim: true,
      // e.g. "Career", "Non-Career", "Casual", "Job Order"
    },
    level: {
      type: String,
      trim: true,
      // e.g. "First Level", "Second Level", "Third Level"
    },
    ppaAttribution: {
      // P/P/A = Permanent / Provisional / Acting
      type: String,
      enum: ["Permanent", "Provisional", "Acting", "Temporary", "Casual", "Contractual"],
      required: true,
    },

    // ---- Assignment ----
    operatingUnit: {
      type: String,
      required: true,
      trim: true,
    },
    placeOfAssignment: {
      type: String,
      required: true,
      trim: true,
    },

    // ---- Personal Info ----
    sex: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    tin: {
      // Tax Identification Number
      type: String,
      trim: true,
      unique: true,
      sparse: true, // allows multiple docs without a TIN, but enforces uniqueness when present
    },

    // ---- Appointment History ----
    dateOfOriginalAppointment: {
      type: Date,
      required: true,
    },
    dateOfLastPromotion: {
      type: Date,
      default: null, // not everyone has been promoted yet
    },

    // ---- Status ----
    status: {
      type: String,
      enum: ["Active", "Inactive", "Retired", "Resigned", "Terminated", "On Leave", "Deceased"],
      default: "Active",
    },
    eligibility: {
      type: String,
      trim: true,
      // e.g. "Career Service Professional", "RA 1080 (Board/Bar)", "CSC Professional"
    },
  },
  {
    timestamps: true, // adds createdAt / updatedAt automatically
  }
);

// ---- Indexes for common queries ----
employeeSchema.index({ lastName: 1, firstName: 1 });
employeeSchema.index({ operatingUnit: 1 });
employeeSchema.index({ status: 1 });

// ---- Virtual: full name ----
employeeSchema.virtual("fullName").get(function () {
  return `${this.lastName}, ${this.firstName} ${this.middleName || ""}`.trim();
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;