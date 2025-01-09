import alumnoModel from "../models/Models.js";

// Métodos para el CRUD

// Obtener todos los registros
export const getAllAlumnos = async (req, res) => {
  try {
    const alumnos = await alumnoModel.findAll();
    res.status(200).json(alumnos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los alumnos", error: error.message });
  }
};

// Obtener un registro por ID
export const getAlumno = async (req, res) => {
  const { id } = req.params;
  if (!id || isNaN(id)) {
    return res.status(400).json({ message: "ID inválido" });
  }

  try {
    const alumno = await alumnoModel.findOne({ where: { id } });
    if (!alumno) {
      return res.status(404).json({ message: "Alumno no encontrado" });
    }
    res.status(200).json(alumno);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener el alumno", error: error.message });
  }
};

// Crear un nuevo registro
export const createAlumno = async (req, res) => {
  const { nombreAlumno, apellidoAlumno, dniAlumno, ...otherFields } = req.body;

  if (!nombreAlumno || !apellidoAlumno || !dniAlumno) {
    return res
      .status(400)
      .json({ message: "Nombre, apellido y DNI son obligatorios" });
  }

  try {
    const nuevoAlumno = await alumnoModel.create(req.body);
    res.status(201).json({
      message: "Registro creado correctamente",
      alumno: nuevoAlumno,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear el registro", error: error.message });
  }
};

// Actualizar registro funcionando con id
export const updateAlumno = async (req, res) => {
  const { importe, comprobante, tipoPago, alDia } = req.body;
  const { id } = req.params; // Usamos el id del alumno para buscarlo

  try {
    // Buscar al alumno
    const alumno = await alumnoModel.findOne({ where: { id } });

    if (!alumno) {
      return res.status(404).json({ message: "Alumno no encontrado" });
    }

    // Calcular cuotas pagadas y monto pendiente
    let cuotasPagadasTotales =
      alumno.cuotasPagadas + Math.floor(importe / alumno.montoPorCuota);
    let cuotasRestantesTotales = alumno.totalCuotas - cuotasPagadasTotales;

    if (cuotasRestantesTotales < 0) {
      cuotasRestantesTotales = 0;
    }

    let nuevoMontoPorCuota = alumno.montoPorCuota - importe;
    if (nuevoMontoPorCuota <= 0) {
      nuevoMontoPorCuota = 150000; // Reinicia el montoPorCuota si llega a 0 o menos
      cuotasRestantesTotales--; // Disminuye la cuota restante cuando el pago es completo
    }

    // Actualizar el alumno con los nuevos valores
    const updatedAlumno = await alumnoModel.update(
      {
        montoPorCuota: nuevoMontoPorCuota,
        cuotasPagadas: cuotasPagadasTotales,
        cuotasRestantes: cuotasRestantesTotales,
        importe: importe, // prueba de importes
        tipoPago: tipoPago,
        comprobante: comprobante,
        alDia, alDia
      },
      { where: { id } }
    );

    if (updatedAlumno[0] === 0) {
      return res
        .status(400)
        .json({ message: "Error al actualizar los datos del alumno" });
    }

    res.json({
      message: "Registro actualizado correctamente",
      updatedStudent: {
        nombreAlumno: alumno.nombreAlumno,
        apellidoAlumno: alumno.apellidoAlumno,
        importe: importe, // prueba muestra de importes
        cuotasPagadas: cuotasPagadasTotales,
        cuotasRestantes: cuotasRestantesTotales,
        montoPorCuota: nuevoMontoPorCuota,
        alDia: alDia
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un registro
export const deleteAlumno = async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ message: "ID inválido" });
  }

  try {
    const alumno = await alumnoModel.findOne({ where: { id } });
    if (!alumno) {
      return res.status(404).json({ message: "Alumno no encontrado" });
    }

    await alumnoModel.destroy({ where: { id } });
    res.status(200).json({ message: "Registro eliminado correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar el registro", error: error.message });
  }
};
