function openModal(courseKey) {
  try {
    currentCourseKey = courseKey;
    currentCourse    = COURSES[courseKey];
    currentView      = 'intro';

    document.getElementById('modalTitle').textContent = currentCourse.title;
    // Header meta: brief 2-item summary
    const intro = INTROS[courseKey];
    document.getElementById('modalMeta').innerHTML =
      `<span>${intro.meta[0].icon} ${intro.meta[0].val}</span>
       <span>${intro.meta[1].icon} ${intro.meta[1].val}</span>
       <span>${intro.meta[7].icon} ${intro.meta[7].val}</span>`;

    renderTabs();
    renderView();

    document.getElementById('courseModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  } catch(e) {
    console.error('openModal error for [' + courseKey + ']:', e);
    alert('Lỗi mở khóa học "' + courseKey + '":\n' + e.message);
  }
}

function closeModal() {
  document.getElementById('courseModal').classList.remove('open');
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('courseModal')) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (document.getElementById('lessonPanel').classList.contains('open')) closeLessonPanel();
    else closeModal();
  }
});

function renderTabs() {
  const levels = Object.keys(currentCourse.levels);
  const tabs = [
    `<button class="level-tab ${currentView==='intro'?'active':''}" onclick="switchView('intro')">📋 Giới thiệu</button>`,
    ...levels.map(lv =>
      `<button class="level-tab ${currentView===lv?'active':''}" onclick="switchView('${lv}')">${lv}</button>`)
  ];
  document.getElementById('modalLevels').innerHTML = tabs.join('');
}

function switchView(v) {
  currentView = v;
  renderTabs();
  renderView();
}

function renderView() {
  if (currentView === 'intro') renderIntro();
  else renderLessons();
}

function renderIntro() {
  const d = INTROS[currentCourseKey];
  const metaHTML = d.meta.map(m => `
    <div class="intro-meta-card">
      <div class="imc-icon">${m.icon}</div>
      <div class="imc-info">
        <div class="imc-label">${m.label}</div>
        <div class="imc-val">${m.val}</div>
      </div>
    </div>`).join('');

  const outcomesHTML = d.hoc_vien.map(sec => `
    <div class="outcome-sec">
      <div class="outcome-sec-title">✅ ${sec.title}</div>
      <ul>${sec.items.map(it => `<li>${it}</li>`).join('')}</ul>
    </div>`).join('');

  document.getElementById('lessonsGrid').innerHTML = `
    <div class="intro-wrap">
      <div class="intro-meta-grid">${metaHTML}</div>
      <div class="intro-body">
        <div class="intro-col">
          <h4 class="intro-col-title">📖 Giới thiệu khóa học</h4>
          <p class="intro-text">${d.gioi_thieu.replace(/\n/g,'<br>')}</p>
        </div>
        <div class="intro-col">
          <h4 class="intro-col-title">🎯 Học viên sẽ được gì?</h4>
          <div class="outcomes-list">${outcomesHTML}</div>
        </div>
      </div>
    </div>`;
}

function renderLessons() {
  const lessons = currentCourse.levels[currentView];
  const isProject = t => t.startsWith('DỰ ÁN LỚN');

  document.getElementById('lessonsGrid').innerHTML = lessons.map((l, i) => {
    const project = isProject(l.tieu_de);
    const imgHTML = l.anh
      ? `<img class="lesson-img" src="${IMG(l.anh)}" alt="${l.tieu_de}"
              loading="lazy" onerror="this.parentNode.innerHTML='<div class=\\'lesson-img-placeholder\\'>📦</div>'">`
      : `<div class="lesson-img-placeholder">${project ? '🏆' : '📦'}</div>`;

    return `
      <div class="lesson-card ${project ? 'is-project' : ''}" onclick="openLesson(${i})" style="cursor:pointer;">
        ${imgHTML}
        <div class="lesson-info">
          <div class="lesson-num">${l.bai}</div>
          <div class="lesson-title">${l.tieu_de}</div>
          <span class="lesson-tool">${l.cong_cu}</span>
        </div>
      </div>`;
  }).join('');
}

function openLesson(idx) {
  const l   = currentCourse.levels[currentView][idx];
  const raw = (DESCS[currentCourseKey][currentView] || [])[idx] || '';

  const kMatch = raw.match(/Kiến thức:\s*([\s\S]*?)(?=\nDự án:|$)/);
  const dMatch = raw.match(/Dự án:\s*([\s\S]*?)$/);
  const kText  = kMatch ? kMatch[1].trim() : '';
  const dText  = dMatch ? dMatch[1].trim() : '';

  document.getElementById('lpBai').textContent   = l.bai + ' · ' + currentView;
  document.getElementById('lpTitle').textContent = l.tieu_de;
  document.getElementById('lpTool').textContent  = l.cong_cu;

  document.getElementById('lpImg').innerHTML = l.anh
    ? `<img src="${IMG(l.anh)}" alt="${l.tieu_de}" style="width:100%;display:block;border-radius:16px;aspect-ratio:4/3;object-fit:cover;"
            onerror="this.parentNode.innerHTML='<div class=\\'lp-img-placeholder\\'>📦</div>'">`
    : `<div class="lp-img-placeholder">📦</div>`;

  document.getElementById('lpKienThucText').textContent = kText;
  document.getElementById('lpDuAnText').textContent     = dText;

  document.getElementById('lessonPanel').classList.add('open');
}

function closeLessonPanel() {
  document.getElementById('lessonPanel').classList.remove('open');
}

function handlePanelClick(e) {
  if (e.target === document.getElementById('lessonPanel')) closeLessonPanel();
}