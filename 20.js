// Array inicial de tareas
let tareas = [];

// Función para agregar una tarea
function agregarTarea(id, descripcion) {
  const nuevaTarea = {
    id: id,
    descripcion: descripcion,
    completado: false
  };
  tareas.push(nuevaTarea);
  console.log(`Tarea "${descripcion}" agregada.`);
}

// Función para eliminar una tarea por id
function eliminarTarea(id) {
  tareas = tareas.filter(tarea => tarea.id !== id);
  console.log(`Tarea con id ${id} eliminada.`);
}

// Función para marcar una tarea como completada
function completarTarea(id) {
  const tarea = tareas.find(t => t.id === id);
  if (tarea) {
    tarea.completado = true;
    console.log(`Tarea con id ${id} marcada como completada.`);
  } else {
    console.log(`No se encontró una tarea con id ${id}.`);
  }
}

// ================== PRUEBA ==================

// Agregar tareas
agregarTarea(1, "Hacer la tarea de matemáticas");
agregarTarea(2, "Lavar los platos");
agregarTarea(3, "Estudiar para el examen");

// Marcar como completada
completarTarea(2);

// Eliminar una tarea
eliminarTarea(1);

// Mostrar el array de tareas actualizado
console.log("Tareas actuales:", tareas);
