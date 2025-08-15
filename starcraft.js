const buildOrders = {
  PvP: [
    {
      name: '4 Gate',
      steps: ['Pylon 14', 'Gateway 16', 'Asimilador 17', 'Núcleo Cibernético 20'],
      counters: ['Blink Stalkers', 'Drop de Inmortales']
    },
    {
      name: 'Blink Stalker',
      steps: ['Pylon 14', 'Gateway 16', 'Nexo 20', 'Forja 21'],
      counters: ['Fénix', 'Chargelot + Archon']
    }
  ],
  PvZ: [
    {
      name: 'Forge Fast Expand',
      steps: ['Pylon en rampa', 'Forja', 'Nexo', 'Gateway'],
      counters: ['Roach Rush', 'Hydra Timing']
    },
    {
      name: 'Stargate Opening',
      steps: ['Pylon', 'Gateway', 'Nexo', 'Stargate'],
      counters: ['Muchas reinas', 'Spore Crawlers']
    }
  ],
  PvT: [
    {
      name: '1 Gate Expand',
      steps: ['Pylon 14', 'Gateway 16', 'Nexo 20', 'Núcleo Cibernético 21'],
      counters: ['Widow Mine Drop', '3 Barracones']
    },
    {
      name: 'Colossus Timing',
      steps: ['Pylon', 'Gateway', 'Núcleo Cibernético', 'Robotics Facility', 'Coloso'],
      counters: ['Producción de Vikings', 'EMP']
    }
  ]
};

function renderBuildOrders(matchup){
  const container = document.getElementById('build-orders');
  container.innerHTML = '';
  if(!matchup) return;
  buildOrders[matchup].forEach(order => {
    const div = document.createElement('div');
    div.className = 'mb-3';
    const steps = order.steps.map(step => '<li>' + step + '</li>').join('');
    div.innerHTML = '<h5>' + order.name + '</h5><ol>' + steps + '</ol><p><strong>Counters:</strong> ' + order.counters.join(', ') + '</p>';
    container.appendChild(div);
  });
}

document.getElementById('matchup').addEventListener('change', e => {
  renderBuildOrders(e.target.value);
});

const counters = {
  'zealot rush': 'Muro con zealots y focos en área',
  'stalker blink': 'Observadores e inmortales',
  'mass air': 'Fénix y Templarios Altos',
  'roach rush': 'Inmortales y mejora +1 ataque',
  'marine marauder': 'Colosos y campos de fuerza'
};

document.getElementById('counter-btn').addEventListener('click', () => {
  const strat = document.getElementById('enemy-strategy').value.toLowerCase();
  const res = counters[strat];
  const container = document.getElementById('counter-result');
  container.innerHTML = res ? '<div class="alert alert-success">Counter recomendado: ' + res + '</div>' : '<div class="alert alert-warning">No hay counter definido.</div>';
});
