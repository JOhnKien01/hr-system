const pool = require('../config/db');

exports.createEmployee = async (req, res) => {
  const {
    lastName, firstName, middleName, sex, dateOfBirth, tin,
    plantillaItemId, dateOriginalAppointment, status, eligibility,
    operatingUnit, placeOfAssignment, ppaAttribution, effectiveDate
  } = req.body;

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const employeeResult = await client.query(
      `INSERT INTO employees (last_name, first_name, middle_name, sex, date_of_birth, tin_encrypted)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING employee_id`,
      [lastName, firstName, middleName, sex, dateOfBirth, tin]
    );
    const employeeId = employeeResult.rows[0].employee_id;

    const appointmentResult = await client.query(
      `INSERT INTO appointments (employee_id, plantilla_item_id, date_original_appointment, status, eligibility)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING appointment_id`,
      [employeeId, plantillaItemId, dateOriginalAppointment, status, eligibility]
    );
    const appointmentId = appointmentResult.rows[0].appointment_id;

    await client.query(
      `INSERT INTO assignments (appointment_id, operating_unit, place_of_assignment, ppa_attribution, effective_date)
       VALUES ($1, $2, $3, $4, $5)`,
      [appointmentId, operatingUnit, placeOfAssignment, ppaAttribution, effectiveDate]
    );

    await client.query('COMMIT');

    res.status(201).json({ message: 'Employee created successfully', employeeId });

  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error creating employee:', err);
    res.status(500).json({ error: 'Failed to create employee record' });
  } finally {
    client.release();
  }
};