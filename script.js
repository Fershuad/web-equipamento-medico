// =============================
// Catálogo de productos (agrega, edita o elimina aquí)
// =============================
const productos = [
  {
    nombre: "Flujometros Medicos",
    categoria: "diagnostico",
    descripcion: "Flujómetros médicos para control de flujo de gases.",
    precio: "$725 MXN",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_708703-MLM85082236427_052025-F.webp"
  },
  {
    nombre: "Kit De Empaques Para Salida Mural Pqt Con 10 Pzas",
    categoria: "diagnostico",
    descripcion: "Kit de empaques para salida mural, paquete con 10 piezas.",
    precio: "$300 MXN",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_999750-MLM95885577349_102025-F.webp"
  },
  {
    nombre: "Valvula De Graduacion De Vacio Medico",
    categoria: "diagnostico",
    descripcion: "Válvula de graduación para vacío médico.",
    precio: "$2,090 MXN",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_932582-MLM85081513415_052025-F.webp"
  },
  {
    nombre: "Módulo Servicio Enchufe Rápido Puritan (vacío) P. Toma Infra",
    categoria: "diagnostico",
    descripcion: "Módulo de servicio enchufe rápido Puritan (vacío) para toma Infra.",
    precio: "$890 MXN",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_960299-MLM84978595269_052025-F.webp"
  },
  {
    nombre: "Módulo Infra De Enchufe Rápido Puritan (n2o)",
    categoria: "diagnostico",
    descripcion: "Módulo Infra de enchufe rápido Puritan para N2O.",
    precio: "$890 MXN",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_799419-MLM90037546059_082025-F.webp"
  },
  {
    nombre: "Manguera Tramada Grado Medico",
    categoria: "diagnostico",
    descripcion: "Manguera tramada de grado médico, resistente y flexible.",
    precio: "$800 MXN",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_812070-MLM84781060130_052025-F.webp"
  },
  {
    nombre: "Kit De Refaccionamiento Para Salida Mural",
    categoria: "diagnostico",
    descripcion: "Kit de refaccionamiento para salida mural médica.",
    precio: "$290 MXN",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_672070-MLM95441326278_102025-F.webp"
  },
  {
    nombre: "Conector De Oxigeno Aga-aramed Enchufe Rapido 1/8",
    categoria: "diagnostico",
    descripcion: "Conector de oxígeno tipo Aga-Aramed, enchufe rápido 1/8 pulgada.",
    precio: "$260 MXN",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_960214-MLM84681900940_052025-F.webp"
  },
  {
    nombre: "Toma Puritan De Vacío Para Consola (infra)",
    categoria: "diagnostico",
    descripcion: "Toma Puritan de vacío para consola, marca Infra.",
    precio: "$1,678 MXN",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_996585-MLM84685969666_052025-F.webp",
    imagenes: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_865138-MLM84984913633_052025-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_906642-MLM84985394831_052025-F.webp"
    ]
  },
  {
    nombre: "Frasco De Vidrio Graduado; De 2 Litros Mca Infra",
    categoria: "diagnostico",
    descripcion: "Frasco de vidrio graduado de 2 litros, marca Infra.",
    precio: "$200 MXN",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_839390-MLM95449182126_102025-F.webp"
  },
  {
    nombre: "Toma Mural Tipo Puritan P/ Gases Medicinales (aire)",
    categoria: "diagnostico",
    descripcion: "Toma mural tipo Puritan para gases medicinales (aire).",
    precio: "$1,540 MXN",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_788786-MLM84685845998_052025-F.webp"
  },
  {
    nombre: "Módulo De Servicio Enchufe Rápido Puritan (oxy) P.toma Infra",
    categoria: "diagnostico",
    descripcion: "Módulo de servicio enchufe rápido Puritan (oxy) para toma Infra.",
    precio: "$890 MXN",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_801657-MLM84679458660_052025-F.webp"
  },
  // 20 productos de ejemplo (puedes editar, eliminar o agregar más)
  {
    nombre: "Monitor de Signos Vitales",
    categoria: "monitores",
    descripcion: "Monitor multiparámetro con pantalla táctil y alarmas configurables.",
    precio: "$18,900 MXN",
    imagen: "https://img.icons8.com/ios-filled/100/0E2E57/heart-monitor.png"
  },
  {
    nombre: "Frasco De Vidrio Para Succión De 1 Litro",
    categoria: "diagnostico",
    descripcion: "Frasco de vidrio resistente, ideal para equipos de succión médica. Capacidad de 1 litro.",
    precio: "$115 MXN",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_600013-MLM84765401491_052025-F.webp"
  },
  {
    nombre: "Adaptador/conector Puritan De Oxigeno Para Toma",
    categoria: "diagnostico",
    descripcion: "Adaptador Puritan para oxígeno, compatible con tomas de gases medicinales.",
    precio: "$220 MXN",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_810009-MLM85081407239_052025-F.webp"
  },
  {
    nombre: "Toma Mural De Vacío Tipo Puritan P/ Gases Medicinales",
    categoria: "diagnostico",
    descripcion: "Toma mural de vacío tipo Puritan para instalaciones de gases medicinales.",
    precio: "$15,540 MXN",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_960846-MLM84685457428_052025-F.webp"
  },
  {
    nombre: "Cama Hospitalaria Eléctrica",
    categoria: "camas",
    descripcion: "Cama con ajuste eléctrico, barandales y ruedas de seguridad.",
    precio: "$32,500 MXN",
    imagen: "https://img.icons8.com/ios-filled/100/0E2E57/hospital-bed.png"
  },
  {
    nombre: "Lámpara Quirúrgica LED",
    categoria: "quirurgico",
    descripcion: "Iluminación quirúrgica de alta precisión y bajo consumo.",
    precio: "$12,700 MXN",
    imagen: "https://img.icons8.com/ios-filled/100/0E2E57/surgical-light.png"
  },
  {
    nombre: "Electrocardiógrafo Digital",
    categoria: "diagnostico",
    descripcion: "Equipo portátil para diagnóstico cardiaco con impresión térmica.",
    precio: "$9,800 MXN",
    imagen: "https://img.icons8.com/ios-filled/100/0E2E57/ecg.png"
  },
  {
    nombre: "Bomba de Infusión",
    categoria: "monitores",
    descripcion: "Bomba precisa para administración de medicamentos intravenosos.",
    precio: "$15,200 MXN",
    imagen: "https://img.icons8.com/ios-filled/100/0E2E57/infusion-pump.png"
  },
  {
    nombre: "Mesa Quirúrgica Universal",
    categoria: "quirurgico",
    descripcion: "Mesa ajustable para procedimientos quirúrgicos diversos.",
    precio: "$27,900 MXN",
    imagen: "https://img.icons8.com/ios-filled/100/0E2E57/operating-table.png"
  },
  {
    nombre: "Carro de Paro",
    categoria: "monitores",
    descripcion: "Carro de paro equipado para emergencias hospitalarias.",
    precio: "$22,000 MXN",
    imagen: "https://img.icons8.com/ios-filled/100/0E2E57/first-aid-kit.png"
  },
  {
    nombre: "Desfibrilador Externo Automático",
    categoria: "monitores",
    descripcion: "Desfibrilador portátil para emergencias cardíacas.",
    precio: "$45,000 MXN",
    imagen: "https://img.icons8.com/ios-filled/100/0E2E57/defibrillator.png"
  },
  {
    nombre: "Silla de Ruedas Reclinable",
    categoria: "camas",
    descripcion: "Silla de ruedas con respaldo reclinable y apoyapies ajustables.",
    precio: "$7,500 MXN",
    imagen: "https://img.icons8.com/ios-filled/100/0E2E57/wheelchair.png"
  },
  {
    nombre: "Báscula Digital para Pacientes",
    categoria: "diagnostico",
    descripcion: "Báscula electrónica de alta precisión para hospitales.",
    precio: "$3,200 MXN",
    imagen: "https://img.icons8.com/ios-filled/100/0E2E57/weighing-scale.png"
  },
  {
    nombre: "Negatoscopio LED",
    categoria: "diagnostico",
    descripcion: "Negatoscopio de luz LED para placas radiográficas.",
    precio: "$2,800 MXN",
    imagen: "https://img.icons8.com/ios-filled/100/0E2E57/x-ray.png"
  },
  {
    nombre: "Mesa de Mayo Acero Inoxidable",
    categoria: "quirurgico",
    descripcion: "Mesa auxiliar para instrumental quirúrgico.",
    precio: "$4,900 MXN",
    imagen: "https://img.icons8.com/ios-filled/100/0E2E57/table.png"
  },
  {
    nombre: "Laringoscopio Adulto",
    categoria: "diagnostico",
    descripcion: "Laringoscopio de acero inoxidable para adultos.",
    precio: "$1,900 MXN",
    imagen: "https://img.icons8.com/ios-filled/100/0E2E57/medical-doctor.png"
  },
  {
    nombre: "Bata Quirúrgica Desechable",
    categoria: "quirurgico",
    descripcion: "Bata estéril desechable para procedimientos quirúrgicos.",
    precio: "$120 MXN",
    imagen: "https://img.icons8.com/ios-filled/100/0E2E57/doctor-male.png"
  },
  {
    nombre: "Cánula Nasal Adulto",
    categoria: "monitores",
    descripcion: "Cánula nasal para suministro de oxígeno en adultos.",
    precio: "$35 MXN",
    imagen: "https://img.icons8.com/ios-filled/100/0E2E57/oxygen-mask.png"
  },
  {
    nombre: "Estetoscopio Profesional",
    categoria: "diagnostico",
    descripcion: "Estetoscopio de doble campana para uso profesional.",
    precio: "$650 MXN",
    imagen: "https://img.icons8.com/ios-filled/100/0E2E57/stethoscope.png"
  },
  {
    nombre: "Bomba de Vacío Portátil",
    categoria: "diagnostico",
    descripcion: "Bomba portátil para aspiración médica.",
    precio: "$6,800 MXN",
    imagen: "https://img.icons8.com/ios-filled/100/0E2E57/vacuum-cleaner.png"
  },
  {
    nombre: "Monitor Fetal Digital",
    categoria: "monitores",
    descripcion: "Monitor fetal con pantalla digital y alarmas.",
    precio: "$19,900 MXN",
    imagen: "https://img.icons8.com/ios-filled/100/0E2E57/baby.png"
  }
];

/**
 * Renderiza productos en el catálogo.
 * @param {string} filtro - Categoría a filtrar ('todos', 'monitores', etc)
 * @param {number} max - Máximo de productos a mostrar (opcional)
 * @param {string} idCatalogo - ID del contenedor catálogo (opcional, por defecto 'catalogo')
 */
function renderProductos(filtro = "todos", max = 5, idCatalogo = "catalogo") {
  // Selecciona el contenedor del catálogo (por defecto 'catalogo')
  const catalogo = document.getElementById(idCatalogo);
  if (!catalogo) return;
  catalogo.innerHTML = "";
  // Filtra productos por categoría
  const filtrados = filtro === "todos" ? productos : productos.filter(p => p.categoria === filtro);
  // Si max es null o mayor que la cantidad, muestra todos
  const mostrar = (typeof max === 'number' && max > 0) ? filtrados.slice(0, max) : filtrados;
  if (mostrar.length === 0) {
    catalogo.innerHTML = '<p style="grid-column: 1/-1; text-align:center;">No hay productos en esta categoría.</p>';
    return;
  }
  mostrar.forEach((producto, idx) => {
    const div = document.createElement("div");
    div.className = "producto animate";
    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <div class="precio">${producto.precio}</div>
      <button class="btn-primary">Solicitar información</button>
    `;
    // Botón de ficha técnica
    div.querySelector('button').addEventListener('click', function() {
      // Guardar productos en localStorage para la ficha
      localStorage.setItem('productos_ficha', JSON.stringify(filtrados));
      // Abrir ficha.html con el índice del producto en la lista filtrada (misma pestaña)
      window.location.href = `ficha.html?id=${idx}`;
    });
    catalogo.appendChild(div);
  });
  // Reaplicar animación a los productos recién renderizados
  if (window.IntersectionObserver) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.producto').forEach(el => observer.observe(el));
  }
}

// =============================
// Inicialización para index.html (catálogo principal)
// =============================
document.addEventListener("DOMContentLoaded", () => {
  // Detecta si estamos en productos.html o index.html
  const isCatalogo20 = document.getElementById('catalogo-productos');
  if (isCatalogo20) {
    // Página de catálogo extendido: mostrar hasta 20 productos
    renderProductos('todos', 20, 'catalogo-productos');
    document.querySelectorAll('.filtro').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.filtro').forEach(b => b.classList.remove('activo'));
        this.classList.add('activo');
        renderProductos(this.dataset.filtro, 20, 'catalogo-productos');
      });
    });
  } else {
    // Página principal: mostrar solo 5 productos
    renderProductos();
    document.querySelectorAll('.filtro').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.filtro').forEach(b => b.classList.remove('activo'));
        this.classList.add('activo');
        renderProductos(this.dataset.filtro);
      });
    });
  }
});

// Animación CSS para productos
const style = document.createElement('style');
style.innerHTML = `
.producto.animate { opacity: 0; transform: translateY(30px); transition: all 0.6s cubic-bezier(.4,2,.3,1); }
.producto.visible { opacity: 1; transform: none; }
`;
document.head.appendChild(style);

// =============================
// Validación simple de formulario de contacto
// =============================
const form = document.querySelector('.form-contacto');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Pronto te responderemos.');
    form.reset();
  });
}
