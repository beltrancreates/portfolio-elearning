// =============================
// INTERACTIVIDAD DEL MAPA DE TRAVESÍA
// =============================

// Datos de los territorios
const territories = {
  aprendizaje: {
    title: 'Aprendizaje',
    description: 'El territorio donde la complejidad se transforma en comprensión. Aquí diseño experiencias que conectan el conocimiento con la acción humana, creando rutas que guían desde la confusión hasta la claridad.'
  },
  narrativa: {
    title: 'Narrativa',
    description: 'El arte de contar historias que enseñan. Creo narrativas que no solo informan, sino que inspiran y motivan, utilizando el poder de las historias para hacer el aprendizaje memorable y significativo.'
  },
  complejidad: {
    title: 'Complejidad',
    description: 'Navegar por sistemas complejos requiere mapas claros. Desarrollo estrategias para simplificar lo complejo sin perder su esencia, creando puentes entre el caos y el entendimiento.'
  },
  claridad: {
    title: 'Claridad',
    description: 'La brújula que guía toda mi labor. Busco la esencia de cada concepto, eliminando el ruido para revelar el núcleo significativo que permite la verdadera comprensión.'
  },
  tecnologia: {
    title: 'Tecnología Humana',
    description: 'Herramientas digitales al servicio del aprendizaje humano. Integro tecnología de manera ética y pedagógica, asegurando que sirva al propósito de educar, no al revés.'
  },
  dignidad: {
    title: 'Dignidad',
    description: 'El respeto fundamental por la persona que aprende. Mi trabajo se basa en reconocer la dignidad inherente de cada individuo, creando experiencias que empoderan y respetan.'
  },
  proyectos: {
    title: 'Proyectos',
    description: 'Las islas concretas donde se materializa la teoría. Cada proyecto es una travesía única que combina aprendizaje, narrativa, tecnología y dignidad en soluciones prácticas.'
  }
};

// Elementos del DOM
let activeNode = null;
const ship = document.querySelector('.ship');
const infoPanel = document.querySelector('.info-panel');
const territoryTitle = document.querySelector('.territory-title');
const territoryDesc = document.querySelector('.territory-desc');

// Función para inicializar el mapa
function initMap() {
  const nodes = document.querySelectorAll('.node-point');

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const territory = node.dataset.territory;
      showTerritory(territory, node);
    });
  });

  // Mostrar territorio inicial
  showTerritory('aprendizaje', document.querySelector('[data-territory="aprendizaje"]'));
}

// Función para mostrar territorio
function showTerritory(territoryKey, nodeElement) {
  const territory = territories[territoryKey];

  if (!territory) return;

  // Actualizar panel de información
  territoryTitle.textContent = territory.title;
  territoryDesc.textContent = territory.description;

  // Actualizar estado de nodos
  document.querySelectorAll('.node-point').forEach(node => {
    node.classList.remove('active');
  });
  nodeElement.classList.add('active');

  // Mover barco hacia el nodo
  if (ship) {
    const nodeRect = nodeElement.getBoundingClientRect();
    const mapRect = document.querySelector('.map-visual').getBoundingClientRect();

    const shipX = nodeRect.left - mapRect.left + nodeRect.width / 2 - 15;
    const shipY = nodeRect.top - mapRect.top + nodeRect.height / 2 - 10;

    ship.style.left = `${shipX}px`;
    ship.style.top = `${shipY}px`;
  }

  // Animación del panel
  infoPanel.style.opacity = '0';
  setTimeout(() => {
    infoPanel.style.opacity = '1';
  }, 100);
}

// Inicializar cuando DOM esté listo
document.addEventListener('DOMContentLoaded', initMap);